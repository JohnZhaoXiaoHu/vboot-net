import{B as u}from"./TableImg.6db171de.js";import"./BasicForm.4740433f.js";import{u as c}from"./useTable.407be098.js";import{getBasicColumns as l}from"./tableData.3f3da3f1.js";import{P as j}from"./index.4a6d20cf.js";import{d as f}from"./table.54c6f344.js";import{_ as b}from"./index.1f50be75.js";import{A as x,a0 as i,B as _,a1 as g,a6 as o,w as n,ae as p}from"./vendor.8e08a5be.js";/* empty css                *//* empty css              */import"./useForm.6f5945bb.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.2016176c.js";import"./index.7c24f3ba.js";/* empty css               */import"./useSortable.4b691ef1.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.4765eeb8.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.1020b52a.js";import"./base64Conver.08b9f4ec.js";import"./index.b2563f35.js";/* empty css               *//* empty css                */import"./useContentViewHeight.78015564.js";const B=x({components:{BasicTable:u,PageWrapper:j},setup(){const[e,{reload:t}]=c({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:l(),pagination:{pageSize:10}});function s(){t()}function r(){t({page:1})}return{registerTable:e,handleReloadCurrent:s,handleReload:r}}}),C=p(" \u5237\u65B0\u5F53\u524D\u9875 "),h=p(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(e,t,s,r,T,k){const a=i("a-button"),d=i("BasicTable"),m=i("PageWrapper");return _(),g(m,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:o(()=>[n(d,{onRegister:e.registerTable},{toolbar:o(()=>[n(a,{type:"primary",onClick:e.handleReloadCurrent},{default:o(()=>[C]),_:1},8,["onClick"]),n(a,{type:"primary",onClick:e.handleReload},{default:o(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var re=b(B,[["render",F]]);export{re as default};