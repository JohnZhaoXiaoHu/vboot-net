var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var K=(e,o,s)=>o in e?de(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,D=(e,o)=>{for(var s in o||(o={}))we.call(o,s)&&K(e,s,o[s]);if(J)for(var s of J(o))he.call(o,s)&&K(e,s,o[s]);return e},V=(e,o)=>fe(e,ge(o));var U=(e,o,s)=>new Promise((u,l)=>{var p=i=>{try{n(s.next(i))}catch(c){l(c)}},t=i=>{try{n(s.throw(i))}catch(c){l(c)}},n=i=>i.done?u(i.value):Promise.resolve(i.value).then(p,t);n((s=s.apply(e,o)).next())});import{b as X,a as j,_ as R,ai as me,p as N,S as ye,ad as De,aj as G,ac as Ce,i as Q,ag as ve,ak as W,w as be}from"./index.1f50be75.js";import{A,j as g,a0 as C,B as w,D as $,ab as ke,a7 as f,a1 as S,a6 as h,ae as E,J as T,a4 as O,ad as B,K as b,X as Y,bz as $e,H as Z,w as _,bo as Be,r as v,u as a,t as P,S as x,ai as F,$ as ee,bn as Pe,aD as te,F as Se,ap as Te,aC as Oe,aS as _e,P as se,ag as oe,bb as Fe,am as He}from"./vendor.8e08a5be.js";/* empty css               */const{t:ne}=X(),re={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:ne("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:ne("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Le=D({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},re);const Ve=A({name:"BasicDrawerFooter",props:V(D({},re),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:s}=j("basic-drawer-footer"),u=g(()=>{const t=`${e.height}`;return{height:t,lineHeight:t}});function l(){o("ok")}function p(){o("close")}return{handleOk:l,prefixCls:s,handleClose:p,getStyle:u}}});function je(e,o,s,u,l,p){const t=C("a-button");return e.showFooter||e.$slots.footer?(w(),$("div",{key:0,class:b(e.prefixCls),style:Y(e.getStyle)},[e.$slots.footer?f(e.$slots,"footer",{key:1}):(w(),$(ke,{key:0},[f(e.$slots,"insertFooter"),e.showCancelBtn?(w(),S(t,O({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[E(T(e.cancelText),1)]),_:1},16,["onClick"])):B("",!0),f(e.$slots,"centerFooter"),e.showOkBtn?(w(),S(t,O({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[E(T(e.okText),1)]),_:1},16,["type","onClick","loading"])):B("",!0),f(e.$slots,"appendFooter")],64))],6)):B("",!0)}var Re=R(Ve,[["render",je]]);const Ne=A({name:"BasicDrawerHeader",components:{BasicTitle:me,ArrowLeftOutlined:$e},props:{isDetail:N.bool,showDetailBack:N.bool,title:N.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:s}=j("basic-drawer-header");function u(){o("close")}return{prefixCls:s,handleClose:u}}}),Ae={key:1};function Ee(e,o,s,u,l,p){const t=C("BasicTitle"),n=C("ArrowLeftOutlined");return e.isDetail?(w(),$("div",{key:1,class:b([e.prefixCls,`${e.prefixCls}--detail`])},[Z("span",{class:b(`${e.prefixCls}__twrap`)},[e.showDetailBack?(w(),$("span",{key:0,onClick:o[0]||(o[0]=(...i)=>e.handleClose&&e.handleClose(...i))},[_(n,{class:b(`${e.prefixCls}__back`)},null,8,["class"])])):B("",!0),e.title?(w(),$("span",Ae,T(e.title),1)):B("",!0)],2),Z("span",{class:b(`${e.prefixCls}__toolbar`)},[f(e.$slots,"titleToolbar")],2)],2)):(w(),S(t,{key:0,class:b(e.prefixCls)},{default:h(()=>[f(e.$slots,"title"),E(" "+T(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var ze=R(Ne,[["render",Ee]]);const Ie=A({components:{Drawer:Be,ScrollContainer:ye,DrawerFooter:Re,DrawerHeader:ze},inheritAttrs:!1,props:Le,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const s=v(!1),u=De(),l=v(null),{t:p}=X(),{prefixVar:t,prefixCls:n}=j("basic-drawer"),i={setDrawerProps:ue,emitVisible:void 0},c=F();c&&o("register",i,c.uid);const y=g(()=>G(P(e),a(l))),m=g(()=>{const r=V(D(D({placement:"right"},a(u)),a(y)),{visible:a(s)});r.title=void 0;const{isDetail:d,width:L,wrapClassName:M,getContainer:pe}=r;if(d){L||(r.width="100%");const q=`${n}__detail`;r.class=M?`${M} ${q}`:q,pe||(r.getContainer=`.${t}-layout-content`)}return r}),H=g(()=>D(D({},u),a(m))),I=g(()=>{const{footerHeight:r,showFooter:d}=a(m);return d&&r?Ce(r)?`${r}px`:`${r.replace("px","")}px`:"0px"}),ae=g(()=>{const r=a(I);return{position:"relative",height:`calc(100% - ${r})`}}),le=g(()=>{var r;return!!((r=a(m))==null?void 0:r.loading)});x(()=>e.visible,(r,d)=>{r!==d&&(s.value=r)},{deep:!0}),x(()=>s.value,r=>{ee(()=>{var d;o("visible-change",r),c&&((d=i.emitVisible)==null||d.call(i,r,c.uid))})});function ie(r){return U(this,null,function*(){const{closeFunc:d}=a(m);if(o("close",r),d&&Q(d)){const L=yield d();s.value=!L;return}s.value=!1})}function ue(r){l.value=G(a(l)||{},r),Reflect.has(r,"visible")&&(s.value=!!r.visible)}function ce(){o("ok")}return{onClose:ie,t:p,prefixCls:n,getMergeProps:y,getScrollContentStyle:ae,getProps:m,getLoading:le,getBindValues:H,getFooterHeight:I,handleOk:ce}}});function Me(e,o,s,u,l,p){const t=C("DrawerHeader"),n=C("ScrollContainer"),i=C("DrawerFooter"),c=C("Drawer"),y=Pe("loading");return w(),S(c,O({class:e.prefixCls,onClose:e.onClose},e.getBindValues),te({default:h(()=>[Se(_(n,{style:Y(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[f(e.$slots,"default")]),_:3},8,["style","loading-tip"]),[[y,e.getLoading]]),_(i,O(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),te({_:2},[Te(Object.keys(e.$slots),m=>({name:m,fn:h(H=>[f(e.$slots,m,Oe(_e(H||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[f(e.$slots,"title")])}:{name:"title",fn:h(()=>[_(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[f(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var qe=R(Ie,[["render",Me]]);const k=se({}),z=se({});function Ge(){if(!F())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=v(null),o=v(!1),s=v("");function u(t,n){oe(()=>{e.value=null,o.value=null,k[a(s)]=null}),!(a(o)&&ve()&&t===a(e))&&(s.value=n,e.value=t,o.value=!0,t.emitVisible=(i,c)=>{z[c]=i})}const l=()=>{const t=a(e);return t||W("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)},getVisible:g(()=>z[~~a(s)]),openDrawer:(t=!0,n,i=!0)=>{var y;if((y=l())==null||y.setDrawerProps({visible:t}),!n)return;if(i){k[a(s)]=null,k[a(s)]=P(n);return}Fe(P(k[a(s)]),P(n))||(k[a(s)]=P(n))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})}};return[u,p]}const Qe=e=>{const o=v(null),s=F(),u=v("");if(!F())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(o);if(!t){W("useDrawerInner instance is undefined!");return}return t},p=(t,n)=>{oe(()=>{o.value=null}),u.value=n,o.value=t,s==null||s.emit("register",t,n)};return He(()=>{const t=k[a(u)];!t||!e||!Q(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({confirmLoading:t})},getVisible:g(()=>z[~~a(u)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)}}]},We=be(qe);export{We as B,Ge as a,Qe as u};