var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(t,o,e)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,_=(t,o)=>{for(var e in o||(o={}))v.call(o,e)&&i(t,e,o[e]);if(d)for(var e of d(o))C.call(o,e)&&i(t,e,o[e]);return t};import{Q as g}from"./qrcode.1652784183534.js";import{_ as q}from"./index.1652784183534.js";import{a as x,a3 as F,m as b,ag as w,b as y,Z as s,S as c,a2 as n,o as R,e as r,l as $,X as Q}from"./vue.1652784183534.js";const k=x({name:"funQrcode",setup(){const{proxy:t}=$(),o=F({qrcode:""}),e=()=>{new g(t.$refs.qrcodeRef,{text:`https://lyt-top.gitee.io/vue-next-admin-preview/#/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},a=()=>{t.$refs.qrcodeRef.innerHTML="",e()};return b(()=>{e()}),_({onInitQrcode:a},w(o))}}),E={class:"qrcode-container"},j={class:"qrcode-img-warp"},B={class:"mb30 mt30 qrcode-img"},I={class:"qrcode",ref:"qrcodeRef"},D=Q(" \u91CD\u65B0\u751F\u6210 ");function N(t,o,e,a,T,V){const l=n("el-alert"),u=n("ele-Refresh"),f=n("el-icon"),p=n("el-button"),m=n("el-card");return R(),y("div",E,[s(m,{shadow:"hover",header:"qrcodejs2 \u4E8C\u7EF4\u7801\u751F\u6210"},{default:c(()=>[s(l,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `qrcodejs2`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),r("div",j,[r("div",B,[r("div",I,null,512)]),s(p,{type:"primary",size:"default",onClick:t.onInitQrcode},{default:c(()=>[s(f,null,{default:c(()=>[s(u)]),_:1}),D]),_:1},8,["onClick"])])]),_:1})])}var H=q(k,[["render",N],["__scopeId","data-v-270b5237"]]);export{H as default};