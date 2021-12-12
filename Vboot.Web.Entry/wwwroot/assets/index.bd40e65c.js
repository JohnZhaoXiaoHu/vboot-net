import{_ as L,F as D,p as M,a as I,f as x,b as S,o as $}from"./index.1f50be75.js";import{A as U,aB as A,aA as v,j as N,a0 as n,B as t,D as O,w as s,a6 as m,a1 as f,ad as _,H as a,K as r,J as B,ab as V}from"./vendor.8e08a5be.js";import{D as E}from"./siteSetting.c485f07c.js";import{c as w,u as P}from"./index.03324be0.js";import{u as R}from"./index.7c24f3ba.js";import{h as F}from"./header.d801b988.js";import"./index.39c53391.js";import"./useWindowSizeFn.2016176c.js";import"./useContentViewHeight.78015564.js";/* empty css               *//* empty css               */import"./useSortable.4b691ef1.js";import"./lock.1d41c0c8.js";const H=U({name:"UserDropdown",components:{Dropdown:A,Menu:v,MenuItem:w(()=>D(()=>import("./DropMenuItem.2a6b0c1a.js"),["assets/DropMenuItem.2a6b0c1a.js","assets/vendor.8e08a5be.js","assets/vendor.7659cf59.css","assets/index.1f50be75.js","assets/index.60934752.css"])),MenuDivider:v.Divider,LockAction:w(()=>D(()=>import("./LockModal.bc506f0e.js"),["assets/LockModal.bc506f0e.js","assets/LockModal.0068f88c.css","assets/index.990fc70d.css","assets/index.ccc15a38.css","assets/index.17eb4c41.css","assets/index.47b6970b.css","assets/index.e907c1d6.css","assets/index.c4896195.css","assets/index.1446549d.css","assets/index.dbb17ce2.css","assets/index.cd256673.css","assets/index.bead6796.css","assets/index.81a164c2.css","assets/index.07b347d0.css","assets/index.faad7c60.css","assets/index.1f50be75.js","assets/index.60934752.css","assets/vendor.8e08a5be.js","assets/vendor.7659cf59.css","assets/index.7c24f3ba.js","assets/index.f6def211.css","assets/useWindowSizeFn.2016176c.js","assets/BasicForm.4740433f.js","assets/BasicForm.678282a9.css","assets/index.4765eeb8.js","assets/index.7b8b5e30.css","assets/uuid.2b29000c.js","assets/download.1020b52a.js","assets/base64Conver.08b9f4ec.js","assets/index.b2563f35.js","assets/index.88b1d373.css","assets/useForm.6f5945bb.js","assets/lock.1d41c0c8.js","assets/header.d801b988.js"]))},props:{theme:M.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=P(),i=x(),C=N(()=>{const{realName:u="",avatar:b,desc:j}=i.getUserInfo||{};return{realName:u,avatar:b||F,desc:j}}),[o,{openModal:c}]=R();function l(){c(!0)}function d(){i.confirmLoginOut()}function p(){$(E)}function y(u){switch(u.key){case"logout":d();break;case"doc":p();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:y,getShowDoc:k,register:o,getUseLockPage:h}}}),T=["src"];function z(e,g,k,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),l=n("Menu"),d=n("Dropdown"),p=n("LockAction");return t(),O(V,null,[s(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[s(l,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),s(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,T),a("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},B(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),s(p,{onRegister:e.register},null,8,["onRegister"])],64)}var se=L(H,[["render",z]]);export{se as default};