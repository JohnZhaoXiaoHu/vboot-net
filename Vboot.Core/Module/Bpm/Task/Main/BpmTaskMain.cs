﻿using System;
using SqlSugar;

namespace Vboot.Core.Module.Bpm;

[SugarTable("bpm_task_main", TableDescription = "流程任务表")]
public class BpmTaskMain
{
    [SugarColumn(ColumnDescription = "Id主键", IsPrimaryKey = true, Length = 36)]
    public string id { get; set; }

    [SugarColumn(ColumnDescription = "任务类型", IsNullable = true, Length = 32)]
    public string type { get; set; }

    [SugarColumn(ColumnDescription = "流程实例id", IsNullable = true, Length = 32)]
    public string proid { get; set; }

    [SugarColumn(ColumnDescription = "流程节点id", IsNullable = true, Length = 32)]
    public string nodid { get; set; }

    [SugarColumn(ColumnDescription = "开始时间", IsNullable = true, IsOnlyIgnoreUpdate = true)]
    public DateTime? sttim { get; set; }=DateTime.Now;

    [SugarColumn(ColumnDescription = "状态", IsNullable = true, Length = 8)]
    public string state { get; set; }

    [SugarColumn(ColumnDescription = "消息类型", IsNullable = true, Length = 8)]
    public string notty { get; set; }

    [SugarColumn(ColumnDescription = "排序号", IsNullable = true)]
    public int ornum { get; set; }

    [SugarColumn(ColumnDescription = "是否激活", IsNullable = true)]
    public bool actag { get; set; }

    [SugarColumn(ColumnDescription = "实处理人", IsNullable = true, Length = 32)]
    public string haman { get; set; }

    [SugarColumn(ColumnDescription = "授权处理人", IsNullable = true, Length = 32)]
    public string auman { get; set; }

    [SugarColumn(ColumnDescription = "应处理人", IsNullable = true, Length = 32)]
    public string exman { get; set; }
}