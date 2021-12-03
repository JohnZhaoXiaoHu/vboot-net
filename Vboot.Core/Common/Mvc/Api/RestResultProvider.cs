﻿using System;
using System.Threading.Tasks;
using Furion.DataValidation;
using Furion.DependencyInjection;
using Furion.UnifyResult;
using Furion.UnifyResult.Internal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Vboot.Core.Common
{
    
     /// <summary>
    /// 规范化RESTful风格返回值
    /// </summary>
    [SuppressSniffer, UnifyModel(typeof(RestResult<>))]
    public class RestResultProvider : IUnifyResultProvider
    {
        public IActionResult OnException(ExceptionContext context, ExceptionMetadata metadata)
        {
            // 解析异常信息
            var exceptionMetadata = UnifyContext.GetExceptionMetadata(context);

            return new JsonResult(new RestResult<object>
            {
                code = exceptionMetadata.StatusCode,
                Success = false,
                result = null,
                message = exceptionMetadata.Errors,
                Extras = UnifyContext.Take(),
                Timestamp = DateTime.Now.Millisecond
            });
        }

        public IActionResult OnSucceeded(ActionExecutedContext context, object data)
        {
            switch (context.Result)
            {
                // 处理内容结果
                case ContentResult contentResult:
                    data = contentResult.Content;
                    break;
                // 处理对象结果
                case ObjectResult objectResult:
                    data = objectResult.Value;
                    break;
                case EmptyResult:
                    data = null;
                    break;
                default:
                    return null;
            }

            return new JsonResult(new RestResult<object>
            {
                // code = context.Result is EmptyResult ? StatusCodes.Status204NoContent : StatusCodes.Status200OK,  // 处理没有返回值情况 204
                code = 0, 
                Success = true,
                result = data,
                message = "请求成功",
                Extras = UnifyContext.Take(),
                Timestamp = DateTime.Now.Millisecond
            });
        }

        public IActionResult OnValidateFailed(ActionExecutingContext context, ValidationMetadata metadata)
        {
            return new JsonResult(new RestResult<object>
            {
                code = StatusCodes.Status400BadRequest,
                Success = false,
                result = null,
                message = metadata.ValidationResult,
                Extras = UnifyContext.Take(),
                Timestamp = DateTime.Now.Millisecond
            });
        }

        public async Task OnResponseStatusCodes(HttpContext context, int statusCode, UnifyResultSettingsOptions unifyResultSettings = null)
        {
            // 设置响应状态码
            UnifyContext.SetResponseStatusCodes(context, statusCode, unifyResultSettings);

            switch (statusCode)
            {
                // 处理 401 状态码
                case StatusCodes.Status401Unauthorized:
                    await context.Response.WriteAsJsonAsync(new RestResult<object>
                    {
                        code = StatusCodes.Status401Unauthorized,
                        Success = false,
                        result = null,
                        message = "401 未经授权",
                        Extras = UnifyContext.Take(),
                        Timestamp = DateTime.Now.Millisecond
                    });
                    break;
                // 处理 403 状态码
                case StatusCodes.Status403Forbidden:
                    await context.Response.WriteAsJsonAsync(new RestResult<object>
                    {
                        code = StatusCodes.Status403Forbidden,
                        Success = false,
                        result = null,
                        message = "403 禁止访问",
                        Extras = UnifyContext.Take(),
                        Timestamp = DateTime.Now.Millisecond
                    });
                    break;
                default: break;
            }
        }
    }

    /// <summary>
    /// RESTful风格---XIAONUO返回格式
    /// </summary>
    /// <typeparam name="T"></typeparam>
    [SuppressSniffer]
    public class RestResult<T>
    {
        /// <summary>
        /// 执行成功
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// 状态码
        /// </summary>
        public int? code { get; set; }

        /// <summary>
        /// 错误信息
        /// </summary>
        public object message { get; set; }

        /// <summary>
        /// 数据
        /// </summary>
        public T result { get; set; }

        /// <summary>
        /// 附加数据
        /// </summary>
        public object Extras { get; set; }

        /// <summary>
        /// 时间戳
        /// </summary>
        public long Timestamp { get; set; }
    }
}