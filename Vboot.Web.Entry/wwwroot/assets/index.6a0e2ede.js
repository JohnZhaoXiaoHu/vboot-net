import{_ as b,F as l,Q as x,aO as T,a as L,Y as j}from"./index.49385d3b.js";import{A as k,cm as F,j as f,u as o,a0 as n,B as s,D as w,w as B,a1 as m,ac as c,K as y,aa as v}from"./vendor.a4547d8e.js";import{c as S,u as C}from"./index.4f612b93.js";import D from"./SessionTimeoutLogin.5beabba5.js";import"./index.76db8729.js";import"./useWindowSizeFn.01f243df.js";import"./useContentViewHeight.7c57433e.js";/* empty css               *//* empty css               */import"./useSortable.5bca30ae.js";import"./lock.6bc6ef82.js";import"./Login.ca4d62ac.js";import"./LoginForm.56bb682e.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./LoginFormTitle.c880d041.js";import"./ForgetPasswordForm.38b0a636.js";import"./index.e990f8f5.js";import"./RegisterForm.c2e5555b.js";import"./index.b9c6bbcd.js";import"./MobileForm.dbe9a353.js";import"./QrCodeForm.f56f5628.js";import"./download.f9eb393d.js";const P=k({name:"LayoutFeatures",components:{BackTop:F,LayoutLockPage:S(()=>l(()=>import("./index.7cb74ed7.js"),["assets/index.7cb74ed7.js","assets/vendor.a4547d8e.js","assets/vendor.bd035476.css","assets/LockPage.0323b36c.js","assets/LockPage.a0ac435f.css","assets/index.49385d3b.js","assets/index.aeacfa8d.css","assets/lock.6bc6ef82.js","assets/header.d801b988.js"])),SettingDrawer:S(()=>l(()=>import("./index.5a140429.js").then(function(e){return e.i}),["assets/index.5a140429.js","assets/index.35b5cf30.css","assets/index.f06a4b68.js","assets/index.5c7227e9.css","assets/index.1bb9cac4.css","assets/index.49385d3b.js","assets/index.aeacfa8d.css","assets/vendor.a4547d8e.js","assets/vendor.bd035476.css","assets/index.4f612b93.js","assets/index.78cadd6e.css","assets/index.65674215.css","assets/index.76db8729.js","assets/index.55076fdd.css","assets/useWindowSizeFn.01f243df.js","assets/useContentViewHeight.7c57433e.js","assets/useSortable.5bca30ae.js","assets/lock.6bc6ef82.js"])),SessionTimeoutLogin:D},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:u,getFullContent:d}=x(),g=T(),{prefixCls:_}=L("setting-drawer-fearure"),{getShowHeader:i}=C(),r=f(()=>g.getSessionTimeout),a=f(()=>{if(!o(p))return!1;const t=o(u);return t===j.AUTO?!o(i)||o(d):t===j.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:_,getIsSessionTimeout:r}}});function E(e,p,u,d,g,_){const i=n("LayoutLockPage"),r=n("BackTop"),a=n("SettingDrawer"),t=n("SessionTimeoutLogin");return s(),w(v,null,[B(i),e.getUseOpenBackTop?(s(),m(r,{key:0,target:e.getTarget},null,8,["target"])):c("",!0),e.getIsFixedSettingDrawer?(s(),m(a,{key:1,class:y(e.prefixCls)},null,8,["class"])):c("",!0),e.getIsSessionTimeout?(s(),m(t,{key:2})):c("",!0)],64)}var se=b(P,[["render",E]]);export{se as default};
