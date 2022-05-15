﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Furion.DependencyInjection;
using Furion.FriendlyException;
using Furion.JsonSerialization;
using SqlSugar;
using Vboot.Core.Common;
using Vboot.Core.Module.Pub.Auth;
using Vboot.Core.Module.Sys;

namespace Vboot.Core.Module.Pub;

public class LoginService : ITransient
{
    private readonly ISqlSugarRepository<SysOrgUser> _repo;

    private readonly IJsonSerializerProvider _json;

    public LoginService(ISqlSugarRepository<SysOrgUser> repo, IJsonSerializerProvider jsonSerializer)
    {
        _repo = repo;
        _json = jsonSerializer;
    }

    public async Task<Duser> getDbUser(string username)
    {
        const string sql = "select id,name,pacod,retag,tier from sys_org_user where usnam=@username and avtag=1";
        var dbUser = await _repo.Ado.SqlQuerySingleAsync<Duser>(sql, new {username});
        // if (dbUser == null)
        // {
        //     throw new Exception("账号不存在或密码错误");
        // }
        if (dbUser == null)
        {
            throw Oops.Oh(ErrorCode.D1000);
        }

        return dbUser;
    }

    public void InitUser(Zuser zuser, Duser duser, Dictionary<string, object> backDict)
    {
        if (!duser.retag)
        {
            //1.获取用户所有的组织架构集:conds
            string conds = FindConds(duser);
            Console.WriteLine(conds);
            zuser.conds = conds;

            //
            //2.根据组织架构集conds查询前台菜单集:menus
            List<Zmenu> menuList = FindMenuList(zuser.conds);
            //
            //3.根据组织架构集conds查询前台按钮集:btns
            List<String> btnList = FindBtnList(zuser.conds);
            //
            //4.计算后台缓存的url权限集
            List<string> permList = new List<string>();
            foreach (var menu in menuList)
            {
                if (!string.IsNullOrEmpty(menu.perm))
                {
                    permList.Add(menu.perm);
                }
            }

            permList.AddRange(btnList);
            zuser.permList = permList;
            //
            // //5.设置前台返回数据
            menuList = BuildByRecursive(menuList);
            backDict.Add("menus", menuList);
            backDict.Add("btns", btnList);
            backDict.Add("zuser", zuser);
            //
            //6.更新用户，序列化保存数据，使下次这些数据可直接从数据库取
            updateUserCache(zuser, menuList, btnList);
            Console.WriteLine("通过数据库");
        }
        else
        {
            var cache = _repo.Context.Queryable<SysOrgUserCache>().First(it => it.id == zuser.id);
            zuser.conds = cache.conds;
            List<Zmenu> menuList = _json.Deserialize<List<Zmenu>>(cache.menus);
            string[] btnArr = null;
            string btns = cache.btns;
            if (btns != null)
            {
                btnArr = btns.Split(";");
            }

            string[] permArr = null;
            string perms = cache.perms;
            if (perms != null)
            {
                permArr = perms.Split(";");
            }

            List<string> permList = new List<string>();
            if (permArr != null)
            {
                permList = permArr.ToList();
            }

            zuser.permList = permList;
            backDict.Add("menus", menuList);
            backDict.Add("btns", btnArr);
            backDict.Add("zuser", zuser);
            Console.WriteLine("通过缓存");
        }
    }

    private string FindConds(Duser duser)
    {
        StringBuilder conds = new StringBuilder();
        //1. conds拼接父级id
        if (!string.IsNullOrEmpty(duser.tier))
        {
            string[] pidArr = duser.tier.Split("x");
            for (int i = pidArr.Length - 1; i >= 0; i--)
            {
                if ("" != pidArr[i])
                {
                    conds.Append("'").Append(pidArr[i]).Append("',");
                }
            }
        }
        else
        {
            conds = new StringBuilder("'" + duser.id + "',");
        }

        //2. conds拼接岗位id
        List<string> postList = FindPostList(duser.id);
        foreach (var str in postList)
        {
            conds.Append("'").Append(str).Append("',");
        }

        conds = new StringBuilder(conds.ToString().Substring(0, conds.Length - 1)); //优化
        //3. conds拼接群组id
        List<string> groupList = FindGroupList(conds.ToString());
        foreach (var str in groupList)
        {
            conds.Append(",'").Append(str).Append("'");
        }

        return conds.ToString();
    }

    private List<string> FindPostList(string oid)
    {
        string sql = "select pid as id from sys_org_post_org where oid=@oid";
        return _repo.Context.Ado.SqlQuery<string>(sql, new {oid});
    }

    private List<string> FindGroupList(string conds)
    {
        string sql = "select DISTINCT gid as id from sys_org_group_org where oid in (" + conds + ")";
        return _repo.Context.Ado.SqlQuery<string>(sql);
    }

    private List<Zmenu> FindMenuList(string conds)
    {
        String sql = @"select distinct m.name,m.code,m.path,m.icon,m.comp,m.ornum,m.id,m.pid,m.perm
from sys_auth_menu m inner join sys_auth_role_menu rm on rm.mid=m.id 
    inner join sys_auth_role_org ru on ru.rid=rm.rid 
where m.type in ('D','M') and m.avtag=1 and ru.oid in (" + conds + ") order by m.ornum";
        if (conds.Contains("'sa'") || conds.Contains("'vben'"))
        {
            sql = @"select m.name,m.code,m.path,m.icon,m.comp,m.ornum,m.id,m.pid,m.perm
 from sys_auth_menu m where m.type in ('D','M') and m.avtag=1 order by m.ornum";
        }

        List<dynamic> dictList = _repo.Context.Ado.SqlQuery<dynamic>(sql);

        List<Zmenu> list = new List<Zmenu>();
        foreach (var dict in dictList)
        {
            Zmenu zmenu = new Zmenu();
            zmenu.id = dict.id;
            zmenu.pid = dict.pid;
            zmenu.perm = dict.perm;
            zmenu.name = dict.code;
            zmenu.path = dict.path;
            zmenu.component = dict.comp;
            Zmeta zmeta = new Zmeta();
            zmeta.title = dict.name;
            zmeta.orderNo = dict.ornum;
            zmeta.icon = dict.icon;
            zmenu.meta = zmeta;
            list.Add(zmenu);
        }

        return list;
    }

    private List<string> FindBtnList(string conds)
    {
        string sql = @"select distinct m.perm id from sys_auth_menu m 
inner join sys_auth_role_menu rm on rm.mid=m.id 
    inner join sys_auth_role_org ru on ru.rid=rm.rid 
                          where m.type = 'B' and m.avtag=1 and ru.oid in (" + conds + ") order by m.ornum";
        if (conds.Contains("'sa'") || conds.Contains("'vben'"))
        {
            sql = "select m.perm id from sys_auth_menu m where m.type = 'B' and m.avtag=1 order by m.ornum";
        }

        return _repo.Context.Ado.SqlQuery<string>(sql);
    }


    //使用递归方法建树
    private List<Zmenu> BuildByRecursive(List<Zmenu> nodes)
    {
        List<Zmenu> list = new List<Zmenu>();
        foreach (var node in nodes)
        {
            if (node.pid == null)
            {
                list.Add(FindChildrenByTier(node, nodes));
            }
            else
            {
                bool flag = false;
                foreach (var node2 in nodes)
                {
                    if (node.pid == (node2.id))
                    {
                        flag = true;
                        break;
                    }
                }

                if (!flag)
                {
                    list.Add(FindChildrenByTier(node, nodes));
                }
            }
        }

        return list;
    }


    //递归查找子节点
    private Zmenu FindChildrenByTier(Zmenu node, List<Zmenu> nodes)
    {
        foreach (var item in nodes)
        {
            if (node.id == item.pid)
            {
                if (node.children == null)
                {
                    node.children = new List<Zmenu>();
                }

                node.children.Add(FindChildrenByTier(item, nodes));
            }
        }

        return node;
    }

    private void updateUserCache(Zuser zuser, List<Zmenu> menuList, List<string> btnList)
    {
        string menus = _json.Serialize(menuList);
        StringBuilder btns = new StringBuilder();
        foreach (var str in btnList)
        {
            btns.Append(str).Append(";");
        }

        StringBuilder perms = new StringBuilder();
        foreach (var str in zuser.permList)
        {
            perms.Append(str).Append(";");
        }

        SysOrgUserCache cache = new SysOrgUserCache();
        cache.id = zuser.id;
        cache.conds = zuser.conds;
        cache.menus = menus;
        cache.btns = btns.ToString();

        var isExists = _repo.Context.Queryable<SysOrgUserCache>().Any(it => it.id == zuser.id);
        if (isExists)
        {
            _repo.Context.Updateable(cache).ExecuteCommand();
        }
        else
        {
            _repo.Context.Insertable(cache).ExecuteCommand();
        }

        _repo.Context.Updateable(new SysOrgUser() {id = zuser.id, retag = true})
            .UpdateColumns(it => new {it.retag}).ExecuteCommand();
    }
}