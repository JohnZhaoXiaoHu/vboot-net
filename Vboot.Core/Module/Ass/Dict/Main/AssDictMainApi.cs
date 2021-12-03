﻿using System.Threading.Tasks;
using Furion.DynamicApiController;
using Microsoft.AspNetCore.Mvc;
using SqlSugar;
using Vboot.Core.Common;
using Vboot.Core.Module.Pub;

namespace Vboot.Core.Module.Ass
{
    [ApiDescriptionSettings("Ass",Tag ="字典信息" )]
    public class AssDictMainApi : IDynamicApiController
    {
        private readonly AssDictMainService _service;

        public AssDictMainApi(AssDictMainService service)
        {
            _service = service;
        }

        [QueryParameters]
        public async Task<dynamic> Get(int page, int pageSize)
        {
            RefAsync<int> total = 0;
            var items = await _service.repo.Context.Queryable<AssDictMain>()
                .OrderBy(u => u.ornum)
                .Select((t) => new {t.id, t.name,t.code, t.notes})
                .ToPageListAsync(page, pageSize, total);
            return RestPageResult.Build(total.Value, items);
        }

        public async Task<AssDictMain> GetOne(string id)
        {
            var main = await _service.repo.Context.Queryable<AssDictMain>()
                .Where(it => it.id == id).FirstAsync();
            return main;
        }

        public async Task Post(AssDictMain main)
        {
            await _service.InsertAsync(main);
        }

        public async Task Put(AssDictMain main)
        {
            await _service.UpdateAsync(main);
        }

        public async Task Delete(string ids)
        {
            var idArr = ids.Split(",");
            await _service.DeleteAsync(idArr);
        }
    }
}