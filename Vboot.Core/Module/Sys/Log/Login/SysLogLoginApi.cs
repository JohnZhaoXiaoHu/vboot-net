﻿using System.Threading.Tasks;
using Furion.DynamicApiController;
using Microsoft.AspNetCore.Mvc;
using Vboot.Core.Common;
using Vboot.Core.Common.Util;

namespace Vboot.Core.Module.Sys;

[ApiDescriptionSettings("Sys", Tag = "系统日志-登录日志")]
public class SysLogLoginApi : IDynamicApiController
{
    private readonly SysLogLoginService _service;

    public SysLogLoginApi(SysLogLoginService sysLogLoginService)
    {
        _service = sysLogLoginService;
    }

    [QueryParameters]
    public async Task<dynamic> Get(string name)
    {
        var pp = XreqUtil.GetPp();
        var items = await _service.repo.Context.Queryable<SysLogLogin>()
            .WhereIF(!string.IsNullOrWhiteSpace(name), t => t.name.Contains(name.Trim()))
            .ToPageListAsync(pp.page, pp.pageSize, pp.total);
        return RestPageResult.Build(pp.total.Value, items);
    }

    public async Task<SysLogLogin> GetOne(string id)
    {
        return await _service.SingleAsync(id);
    }

    public async Task Delete(string ids)
    {
        await _service.DeleteAsync(ids);
    }

    public async Task DeleteAll(string ids)
    {
        var idArr = ids.Split(",");
        await _service.repo.Context.Deleteable<SysLogLogin>().ExecuteCommandAsync();
    }
}