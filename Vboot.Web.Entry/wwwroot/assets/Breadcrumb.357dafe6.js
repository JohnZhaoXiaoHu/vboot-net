var N=Object.defineProperty,T=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var M=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&M(e,r,t[r]);if($)for(var r of $(t))O.call(t,r)&&M(e,r,t[r]);return e},B=(e,t)=>T(e,L(t));var P=(e,t,r)=>new Promise((h,f)=>{var g=l=>{try{d(r.next(l))}catch(c){f(c)}},p=l=>{try{d(r.throw(l))}catch(c){f(c)}},d=l=>l.done?h(l.value):Promise.resolve(l.value).then(g,p);d((r=r.apply(e,t)).next())});import{A as x,cT as w,r as z,a as G,am as J,a0 as I,B as b,D as A,w as K,a6 as E,a1 as D,ad as Q,J as S,ae as q,K as F}from"./vendor.8e08a5be.js";/* empty css               */import{_ as H,I as U,p as W,a as X,Q as Y,k as Z,b as ee,R as te,L as ne,s as ae,ao as re,j as se}from"./index.1f50be75.js";const oe=x({name:"LayoutBreadcrumb",components:{Icon:U,[w.name]:w},props:{theme:W.oneOf(["dark","light"])},setup(){const e=z([]),{currentRoute:t}=G(),{prefixCls:r}=X("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=Y(),f=Z(),{t:g}=ee();J(()=>P(this,null,function*(){var C,y,R;if(t.value.name===te)return;const s=yield ne(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const u=ae(s,o),m=s.filter(j=>j.path===u[0]),i=p(m,u);if(!i||i.length===0)return;const _=d(i);((y=t.value.meta)==null?void 0:y.currentActiveMenu)&&_.push(B(k({},t.value),{name:((R=t.value.meta)==null?void 0:R.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var u,m;n.includes(o.path)&&a.push(B(k({},o),{name:((u=o.meta)==null?void 0:u.title)||o.name})),((m=o.children)==null?void 0:m.length)&&a.push(...p(o.children,n))}),a}function d(s){return re(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:u,hideBreadcrumb:m,hideMenu:i}=a;return!(!u||m||i)}).filter(n=>{var a;return!((a=n.meta)==null?void 0:a.hideBreadcrumb)})}function l(s,n,a){a==null||a.preventDefault();const{children:o,redirect:u,meta:m}=s;if((o==null?void 0:o.length)&&!u){a==null||a.stopPropagation();return}if(!(m==null?void 0:m.carryParam))if(u&&se(u))f(u);else{let i="";n.length===1?i=n[0]:i=`${n.slice(1).pop()||""}`,i=/^\//.test(i)?i:`/${i}`,f(i)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,f,g){const p=I("Icon"),d=I("router-link"),l=I("a-breadcrumb");return b(),A("div",{class:F([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[K(l,{routes:e.routes},{itemRender:E(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),D(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):Q("",!0),e.hasRedirect(v,c)?(b(),D(d,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:E(()=>[q(S(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),A("span",ce,S(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var fe=H(oe,[["render",ie]]);export{fe as default};