import{p as O,c as J}from"./edit.16527841835342.js";import{a as z,aB as R,a3 as w,ag as $,m as q,a2 as t,o as E,R as k,S as o,Z as e,e as u,u as a,X as A,ap as L,j as D,W as M}from"./vue.1652784183534.js";import{s as C}from"./index.1652784183534.js";const T=u("div",{class:"zinput"}," xxxxxx ",-1),W={class:"zinput"},X=u("span",{style:{color:"red"}},"\u7D27\u6025",-1),Z=u("span",{style:{color:"blue"}},"\u6025",-1),G=u("span",null,"\u4E00\u822C",-1),H=u("div",{class:"zinput"}," N5.\u90E8\u95E8\u8D1F\u8D23\u4EBA(\u5F20\u4E09) ",-1),K={class:"zinput",style:{height:"auto"}},P={class:"zinput",style:{height:"auto"}},Q=A("\u4E0A \u4F20"),Y={style:{"padding-left":"105px","border-right":"1px solid #ccc"}},ee=A("\u6D41\u7A0B\u56FE"),oe=z({setup(N,{expose:y}){const V=R(),i=w({form:{},params:{path:"",query:""}}),{form:l,params:g}=$(i);return q(()=>{var p;i.params=V,(p=g.value.query)!=null&&p.id}),y({getOperateInfo:()=>L(l.value)}),(p,m)=>{const f=t("el-form-item"),r=t("el-col"),_=t("el-row"),n=t("el-radio"),s=t("el-radio-group"),c=t("el-input"),b=t("el-button"),v=t("el-upload"),h=t("el-checkbox"),F=t("el-form");return E(),k(F,{class:"zform",model:a(l),"label-width":"180px"},{default:o(()=>[e(_,{style:{"border-top":"1px solid #d2d2d2"}},{default:o(()=>[e(r,{span:24},{default:o(()=>[e(f,{label:"\u6D41\u7A0B\u8BF4\u660E\uFF1A"},{default:o(()=>[T]),_:1})]),_:1})]),_:1}),e(_,null,{default:o(()=>[e(r,{span:24},{default:o(()=>[e(f,{label:"\u7D27\u6025\u7A0B\u5EA6\uFF1A"},{default:o(()=>[u("div",W,[e(s,{modelValue:a(l).opurg,"onUpdate:modelValue":m[0]||(m[0]=d=>a(l).opurg=d)},{default:o(()=>[e(n,{label:1},{default:o(()=>[X]),_:1}),e(n,{label:2},{default:o(()=>[Z]),_:1}),e(n,{label:3},{default:o(()=>[G]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1}),e(_,null,{default:o(()=>[e(r,{span:24},{default:o(()=>[e(f,{label:"\u5373\u5C06\u6D41\u5411\uFF1A"},{default:o(()=>[H]),_:1})]),_:1})]),_:1}),e(_,null,{default:o(()=>[e(r,{span:24},{default:o(()=>[e(f,{label:"\u5904\u7406\u610F\u89C1\uFF1A"},{default:o(()=>[u("div",K,[e(c,{modelValue:a(l).opnot,"onUpdate:modelValue":m[1]||(m[1]=d=>a(l).opnot=d),type:"textarea",rows:5,placeholder:" "},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1}),e(_,null,{default:o(()=>[e(r,{span:24},{default:o(()=>[e(f,{label:"\u9644\u4EF6\uFF1A"},{default:o(()=>[u("div",P,[e(v,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","file-list":p.fileList},{default:o(()=>[e(b,{type:"primary"},{default:o(()=>[Q]),_:1})]),_:1},8,["file-list"])])]),_:1})]),_:1})]),_:1}),e(_,null,{default:o(()=>[e(r,{span:24},{default:o(()=>[u("div",Y,[e(h,{modelValue:p.checked2,"onUpdate:modelValue":m[2]||(m[2]=d=>p.checked2=d)},{default:o(()=>[ee]),_:1},8,["modelValue"])])]),_:1})]),_:1}),e(_,null,{default:o(()=>[e(r,{span:24})]),_:1})]),_:1},8,["model"])}}}),te=u("div",{style:{"line-height":"32px"}},"\u6D41\u7A0B\u5B9E\u4F8B",-1),le=A("\u4FDD \u5B58"),ae=A("\u5173 \u95ED"),ue={style:{"margin-top":"8px","margin-bottom":"8px"}},ne={class:"zinput"},se=["src"],pe=z({setup(N){const y=D(),V=R(),i=w({url:"/oa/flow/main",params:{path:"",query:""},form:{avtag:!0},formJson:{},vformShow:!1}),{form:l,formJson:g}=$(i),B=D("tab1");q(()=>{p(i,V)});const p=async(n,s)=>{var b,v;n.params=s;let c=(b=n.params.query)==null?void 0:b.id;if(c)n.form=await C({url:n.url+"/one/"+c,method:"get"});else{let h=(v=n.params.query)==null?void 0:v.temid;const F=await C({url:"/oa/flow/temp/one/"+h,method:"get"});l.value.protd=F.protd,l.value.temid=h,l.value.avtag=!0,g.value=JSON.parse(F.vform),n.vformShow=!0}},m=async()=>{l.value.zbpm=y.value.getOperateInfo(),await J(i)},f=w({}),r=w({}),_=D(null);return(n,s)=>{const c=t("el-col"),b=t("el-button"),v=t("el-row"),h=t("el-input"),F=t("el-form-item"),d=t("el-tab-pane"),S=t("v-form-render"),U=t("el-tabs"),j=t("el-form"),I=t("el-card");return E(),k(I,{class:"box-card","body-style":{padding:"2px 8px"},shadow:"never"},{header:o(()=>[e(v,null,{default:o(()=>[e(c,{span:10},{default:o(()=>[te]),_:1}),e(c,{span:14,style:{"text-align":"right"}},{default:o(()=>[e(b,{type:"success",onClick:m,plain:""},{default:o(()=>[le]),_:1}),e(b,{type:"info",onClick:s[0]||(s[0]=x=>a(O)()),plain:""},{default:o(()=>[ae]),_:1})]),_:1})]),_:1})]),default:o(()=>[u("div",ue,[e(j,{model:a(l),"label-width":"140px"},{default:o(()=>[e(U,{type:"card",modelValue:B.value,"onUpdate:modelValue":s[2]||(s[2]=x=>B.value=x)},{default:o(()=>[e(d,{label:"\u57FA\u672C\u4FE1\u606F",name:"tab1"},{default:o(()=>[e(v,null,{default:o(()=>[e(c,{span:24},{default:o(()=>[e(F,{label:"\u7533\u8BF7\u6807\u9898\uFF1A",prop:"name",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}]},{default:o(()=>[u("div",ne,[e(h,{modelValue:a(l).name,"onUpdate:modelValue":s[1]||(s[1]=x=>a(l).name=x)},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{label:"\u5BA1\u6279\u5185\u5BB9",name:"tab2"},{default:o(()=>[a(i).vformShow?(E(),k(S,{key:0,"form-json":a(g),"form-data":a(f),"option-data":a(r),ref_key:"vFormRef",ref:_},null,8,["form-json","form-data","option-data"])):M("",!0)]),_:1}),e(d,{label:"\u6D41\u7A0B\u5904\u7406",name:"tab3",class:"zform"},{default:o(()=>[e(oe,{temid:a(l).protd,ref_key:"bpmRef",ref:y},null,8,["temid"])]),_:1}),e(d,{label:"\u6743\u9650\u4FE1\u606F",name:"tab4",class:"zform"},{default:o(()=>[u("img",{src:n.qx,style:{width:"100%"}},null,8,se)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model"])])]),_:1})}}});export{pe as default};