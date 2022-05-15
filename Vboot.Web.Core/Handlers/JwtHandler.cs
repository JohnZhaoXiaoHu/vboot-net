﻿using System;
using Furion.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Furion;
using Furion.DataEncryption;
using Vboot.Core.Common;

namespace Vboot.Web.Core;

public class JwtHandler : AppAuthorizeHandler
{
    /// <summary>
    /// 重写 Handler 添加自动刷新
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    public override async Task HandleAsync(AuthorizationHandlerContext context)
    {
        // Console.WriteLine(1111);
        // 自动刷新Token
        if (JWTEncryption.AutoRefreshToken(context, context.GetCurrentHttpContext()))
        {
            await AuthorizeHandleAsync(context);
        }
        else context.Fail(); // 授权失败
    }

    /// <summary>
    /// 授权判断逻辑，授权通过返回 true，否则返回 false
    /// </summary>
    /// <param name="context"></param>
    /// <param name="httpContext"></param>
    /// <returns></returns>
    public override async Task<bool> PipelineAsync(AuthorizationHandlerContext context, DefaultHttpContext httpContext)
    {
        // Console.WriteLine(222);
        // 此处已经自动验证 Jwt Token的有效性了，无需手动验证
        return await CheckAuthorzieAsync(httpContext);
    }

    /// <summary>
    /// 检查权限
    /// </summary>
    /// <param name="httpContext"></param>
    /// <returns></returns>
    // private static async Task<bool> CheckAuthorzieAsync(DefaultHttpContext httpContext)
    private static async Task<bool> CheckAuthorzieAsync(DefaultHttpContext httpContext)
    {
        // 管理员跳过判断
        var userManager = App.GetService<IUserManager>();
        Console.WriteLine("userManager.SuperAdmin:" + userManager.CacheKey);
        if (userManager.SuperAdmin) return true;


        // 路由名称
        var routeName = httpContext.Request.Path.Value.Substring(1).Replace("/", ":");

        Console.WriteLine(routeName);
        // var allPermission = await App.GetService<ISysMenuService>().GetAllPermission();
        //
        // if (!allPermission.Contains(routeName))
        // {
        //     return true;
        // }


        //// 默认路由(获取登录用户信息)
        //var defalutRoute = new List<string>()
        //{
        //    "getLoginUser",
        //    "sysNotice:unread",
        //    "codeGenerate:InformationList",
        //    "sysFileInfo:uploadAvatar",
        //    "sysFileInfo:preview"
        //};

        //if (defalutRoute.Contains(routeName)) return true;

        // 获取用户权限集合（按钮或API接口）
        // var permissionList = await App.GetService<ISysMenuService>().GetLoginPermissionList(userManager.UserId);

        // 检查授权
        // return permissionList.Contains(routeName);
        return true;
    }

    public static Yperm[] GET_URLS = Array.Empty<Yperm>();

    public static Yperm[] POST_URLS = Array.Empty<Yperm>();

    public static Yperm[] PUT_URLS = Array.Empty<Yperm>();

    public static Yperm[] DELETE_URLS = Array.Empty<Yperm>();
}