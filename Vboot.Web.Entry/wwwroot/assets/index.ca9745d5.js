var k=Object.defineProperty,$=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var b=(a,o,e)=>o in a?k(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,F=(a,o)=>{for(var e in o||(o={}))R.call(o,e)&&b(a,e,o[e]);if(D)for(var e of D(o))T.call(o,e)&&b(a,e,o[e]);return a},V=(a,o)=>$(a,P(o));var E=(a,o,e)=>new Promise((_,m)=>{var c=s=>{try{r(e.next(s))}catch(i){m(i)}},f=s=>{try{r(e.throw(s))}catch(i){m(i)}},r=s=>s.done?_(s.value):Promise.resolve(s.value).then(c,f);r((e=e.apply(a,o)).next())});import{P as S}from"./index.4a6d20cf.js";import{u as U,B as H,a as q}from"./index.b3a760e0.js";import{ah as z}from"./index.1f50be75.js";import{h as A}from"./edit.6fd2a5d5.js";import{A as B,P as w,a0 as p,B as C,a1 as j,a6 as u,w as l,u as t,a4 as y,r as G,H as N,J as O,ae as h}from"./vendor.8e08a5be.js";import{c as W,a as I,d as J,e as L}from"./list.20bccedc.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.2016176c.js";import"./useContentViewHeight.78015564.js";/* empty css               */const K=B({emits:["success","register"],setup(a,{emit:o}){const e=w({loadingText:"",url:"/bi/demo/boy",data:{},rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}]}}),[_,{setDrawerProps:m,changeLoading:c,closeDrawer:f}]=U(r=>E(this,null,function*(){e.loadingText="\u52A0\u8F7D\u4E2D",c(!0),r.record.id?e.data=yield z.get({url:e.url+"/one/"+r.record.id}):(e.data=r.record,e.data.avtag=!0),c(!1)}));return(r,s)=>{const i=p("vxe-input"),g=p("vxe-form-item"),x=p("vxe-textarea"),v=p("vxe-form");return C(),j(t(H),y(r.$attrs,{loadingText:t(e).loadingText,showFooter:"",title:"\u7537\u751F\u4FE1\u606F",width:"70%",onOk:s[0]||(s[0]=n=>t(A)(r.$refs.xForm,t(e),o,t(m),t(c),t(f))),onRegister:t(_)}),{default:u(()=>[l(v,{"title-colon":"",ref:(n,d)=>{d.xForm=n},"title-align":"right","title-width":"100",data:t(e).data,rules:t(e).rules},{default:u(()=>[l(g,{title:"\u59D3\u540D",field:"name","item-render":{},span:"12","title-width":"150"},{default:u(({data:n})=>[l(i,{modelValue:n.name,"onUpdate:modelValue":d=>n.name=d,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(g,{title:"\u5907\u6CE8",field:"notes","item-render":{},span:"24","title-width":"150"},{default:u(({data:n})=>[l(x,{modelValue:n.notes,"onUpdate:modelValue":d=>n.notes=d,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",autosize:{minRows:4,maxRows:6},clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data","rules"])]),_:1},16,["loadingText","onRegister"])}}}),M=h("\u67E5 \u8BE2"),Q=h("\u65B0 \u589E"),X=h("\u5220 \u9664"),Y=["onClick"],Z={name:"BiDemoBoy",inheritAttrs:!1};function ee(a){const o=G({}),e=w({name:""}),_=w(W("/bi/demo/boy",{},e,[{type:"checkbox",align:"center",width:42,fixed:"left"},{type:"seq",align:"center",width:50,fixed:"left"},{field:"name",title:"\u59D3\u540D",width:300,fixed:"left",slots:{default:"name_default"}},{field:"notes",title:"\u5907\u6CE8"}])),m=()=>{o.value.commitProxy("query")},[c,{openDrawer:f}]=q();function r(){m()}return(s,i)=>{const g=p("vxe-input"),x=p("vxe-button"),v=p("vxe-grid");return C(),j(t(S),{class:"ztable",contentFullHeight:""},{default:u(()=>[l(v,y({ref:(n,d)=>{d.xGrid=n,o.value=n}},t(_)),{tbtns:u(()=>[l(g,{modelValue:t(e).name,"onUpdate:modelValue":i[0]||(i[0]=n=>t(e).name=n),placeholder:"\u8F93\u5165\u540D\u79F0\u67E5\u8BE2"},null,8,["modelValue"]),l(x,{onClick:m,status:"primary"},{default:u(()=>[M]),_:1}),l(x,{onClick:i[1]||(i[1]=n=>t(I)({},t(f)))},{default:u(()=>[Q]),_:1}),l(x,{onClick:i[2]||(i[2]=n=>t(J)(s.$refs.xGrid))},{default:u(()=>[X]),_:1})]),name_default:u(({row:n})=>[N("span",{style:{cursor:"pointer",color:"#3e9ece"},onClick:d=>t(L)({id:n.id},t(f))},O(n.name),9,Y)]),_:1},16),l(K,{onRegister:t(c),onSuccess:r},null,8,["onRegister"])]),_:1})}}const pe=B(V(F({},Z),{setup:ee}));export{pe as default};