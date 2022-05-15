﻿using SqlSugar;
using Vboot.Core.Common;

namespace Vboot.Core.Module.Bpm;

[SugarTable("bpm_proc_main", TableDescription = "流程实例表")]
public class BpmProcMain : BaseMainEntity
{
    [SugarColumn(ColumnDescription = "modid", IsNullable = true, Length = 32)]
    public string modid { get; set; }
    
    [SugarColumn(ColumnDescription = "modty", IsNullable = true, Length = 32)]
    public string modty { get; set; }
    
    [SugarColumn(ColumnDescription = "模板id", IsNullable = true, Length = 32)]
    public string temid { get; set; }
}