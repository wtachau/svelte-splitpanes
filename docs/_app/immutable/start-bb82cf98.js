import{S as rt,i as at,s as ot,a as it,e as q,c as st,b as K,g as pe,t as B,d as de,f as F,h as z,j as lt,o as Ie,k as ct,l as ft,m as ut,n as be,p as x,q as pt,r as dt,u as mt,v as H,w as W,x as Te,y as Y,z as X,A as ce}from"./chunks/index-7f92752a.js";import{S as tt,I as C,g as Ke,f as Me,a as Ee,b as fe,s as J,i as He,c as ue,P as We,d as ht,e as _t,h as gt}from"./chunks/singletons-0bb1eb03.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function vt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const n=new URL(r);for(const s of bt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(r){return r.replace(/\/$/,"")+Rt}function Ot(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(De(r)),me(r,e));const te=new Map;function It(r,e){const n=De(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return me(r,e)}function St(r,e,n){if(te.size>0){const s=De(r,n),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);te.delete(s)}}return me(e,n)}function De(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Ot(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Dt(r).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,p)=>{if(p%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(T=>parseInt(T,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,$,j]=g;return e.push({name:$,matcher:j,optional:!!w,rest:!!R,chained:R?p===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Tt(r){return!/^\([^)]+\)$/.test(r)}function Dt(r){return r.slice(1).split("/").filter(Tt)}function Nt(r,e,n){const s={},i=r.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=i[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let p=i.indexOf(void 0,t);if(p===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)u=_;else return}for(;p>=t;)i[p]=i[p-1],p-=1;continue}return}s[f.name]=_}}if(!u)return s}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(r,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[_,p,g]])=>{const{pattern:w,params:R}=Pt(f),$={id:f,exec:j=>{const T=w.exec(j);if(T)return Nt(T,R,s)},errors:[1,...g||[]].map(j=>r[j]),layouts:[0,...p||[]].map(t),leaf:u(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function u(f){const _=f<0;return _&&(f=~f),[_,r[f]]}function t(f){return f===void 0?f:[i.has(f),r[f]]}}function $t(r){let e,n,s;var i=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=H(i,u(r))),{c(){e&&W(e.$$.fragment),n=q()},l(t){e&&Te(e.$$.fragment,t),n=q()},m(t,f){e&&Y(e,t,f),K(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),i!==(i=t[0][0])){if(e){pe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),de()}i?(e=H(i,u(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&X(e,t)}}}function jt(r){let e,n,s;var i=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return i&&(e=H(i,u(r))),{c(){e&&W(e.$$.fragment),n=q()},l(t){e&&Te(e.$$.fragment,t),n=q()},m(t,f){e&&Y(e,t,f),K(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),i!==(i=t[0][0])){if(e){pe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),de()}i?(e=H(i,u(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&X(e,t)}}}function Vt(r){let e,n,s;var i=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=H(i,u(r))),{c(){e&&W(e.$$.fragment),n=q()},l(t){e&&Te(e.$$.fragment,t),n=q()},m(t,f){e&&Y(e,t,f),K(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),i!==(i=t[0][1])){if(e){pe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),de()}i?(e=H(i,u(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&X(e,t)}}}function Ye(r){let e,n=r[5]&&Xe(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);n&&n.l(i),i.forEach(z),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),x(e,"position","absolute"),x(e,"left","0"),x(e,"top","0"),x(e,"clip","rect(0 0 0 0)"),x(e,"clip-path","inset(50%)"),x(e,"overflow","hidden"),x(e,"white-space","nowrap"),x(e,"width","1px"),x(e,"height","1px")},m(s,i){K(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Xe(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&z(e),n&&n.d()}}}function Xe(r){let e;return{c(){e=pt(r[6])},l(n){e=dt(n,r[6])},m(n,s){K(n,e,s)},p(n,s){s&64&&mt(e,n[6])},d(n){n&&z(e)}}}function xt(r){let e,n,s,i,u;const t=[jt,$t],f=[];function _(g,w){return g[0][1]?0:1}e=_(r),n=f[e]=t[e](r);let p=r[4]&&Ye(r);return{c(){n.c(),s=it(),p&&p.c(),i=q()},l(g){n.l(g),s=st(g),p&&p.l(g),i=q()},m(g,w){f[e].m(g,w),K(g,s,w),p&&p.m(g,w),K(g,i,w),u=!0},p(g,[w]){let R=e;e=_(g),e===R?f[e].p(g,w):(pe(),B(f[R],1,1,()=>{f[R]=null}),de(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),F(n,1),n.m(s.parentNode,s)),g[4]?p?p.p(g,w):(p=Ye(g),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null)},i(g){u||(F(n),u=!0)},o(g){B(n),u=!1},d(g){f[e].d(g),g&&z(s),p&&p.d(g),g&&z(i)}}}function Ct(r,e,n){let{stores:s}=e,{page:i}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(s.page.notify);let p=!1,g=!1,w=null;return Ie(()=>{const R=s.page.subscribe(()=>{p&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,p=!0),R}),r.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,i=R.page),"components"in R&&n(0,u=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[u,t,f,_,p,g,w,s,i]}class qt extends rt{constructor(e){super(),at(this,e,Ct,xt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Bt="modulepreload",Ft=function(r,e){return new URL(r,e).href},Ze={},A=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Ft(u,s),u in Ze)return;Ze[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Bt,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},zt={},he=[()=>A(()=>import("./chunks/0-03a3e026.js"),["./chunks/0-03a3e026.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-e15be3d5.js","./chunks/index-7f92752a.js","./chunks/singletons-0bb1eb03.js","./chunks/index-06c10494.js","./chunks/stores-5aa4e3d4.js","./assets/_layout-815942eb.css"],import.meta.url),()=>A(()=>import("./chunks/1-ae84c682.js"),["./chunks/1-ae84c682.js","./components/error.svelte-65a08aa3.js","./chunks/index-7f92752a.js","./chunks/stores-5aa4e3d4.js","./chunks/singletons-0bb1eb03.js","./chunks/index-06c10494.js"],import.meta.url),()=>A(()=>import("./chunks/2-8add99ac.js"),["./chunks/2-8add99ac.js","./chunks/_page-c0e673fa.js","./components/pages/_page.svelte-3b156111.js","./chunks/index-7f92752a.js"],import.meta.url),()=>A(()=>import("./chunks/3-f9204cd6.js"),["./chunks/3-f9204cd6.js","./chunks/_page-da46b06b.js","./components/pages/examples/add-remove-splitter/_page.svelte-55707d7d.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./chunks/Button-8a569c61.js","./chunks/index-6ad9aa66.js","./assets/Button-190dfb8a.css"],import.meta.url),()=>A(()=>import("./chunks/4-60706ed1.js"),["./chunks/4-60706ed1.js","./chunks/_page-fca24c55.js","./components/pages/examples/change-orientation/_page.svelte-66229acf.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./chunks/Button-8a569c61.js","./chunks/index-6ad9aa66.js","./assets/Button-190dfb8a.css"],import.meta.url),()=>A(()=>import("./chunks/5-04e57dfa.js"),["./chunks/5-04e57dfa.js","./chunks/_page-8f0fe832.js","./components/pages/examples/default-size/_page.svelte-22e6056e.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/6-1c1fb962.js"),["./chunks/6-1c1fb962.js","./chunks/_page-8f3d95e9.js","./components/pages/examples/listen-to-events/_page.svelte-7f69afbd.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./assets/_page-b54230ae.css"],import.meta.url),()=>A(()=>import("./chunks/7-1341d6fc.js"),["./chunks/7-1341d6fc.js","./chunks/_page-c9e12f54.js","./components/pages/examples/lock-layout/_page.svelte-c152ae04.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/8-b3e42774.js"),["./chunks/8-b3e42774.js","./chunks/_page-7f2f0338.js","./components/pages/examples/min-max/_page.svelte-e15f373e.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/9-41597e21.js"),["./chunks/9-41597e21.js","./chunks/_page-a30e1545.js","./components/pages/examples/prog-resize/_page.svelte-7408f88d.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./chunks/index-6ad9aa66.js","./assets/_page-131ac458.css"],import.meta.url),()=>A(()=>import("./chunks/10-077d1e3e.js"),["./chunks/10-077d1e3e.js","./chunks/_page-37b1b289.js","./components/pages/examples/push-other-panes/_page.svelte-4e8d538b.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/11-84dbcc59.js"),["./chunks/11-84dbcc59.js","./chunks/_page-ac8b15c9.js","./components/pages/examples/reordering-splitters/_page.svelte-727d39f3.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./chunks/Button-8a569c61.js","./chunks/index-6ad9aa66.js","./assets/Button-190dfb8a.css"],import.meta.url),()=>A(()=>import("./chunks/12-e12c2188.js"),["./chunks/12-e12c2188.js","./chunks/_page-90a7f2f4.js","./components/pages/examples/snap/middle/_page.svelte-f1fee4ff.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/13-d12445de.js"),["./chunks/13-d12445de.js","./chunks/_page-e94d8ac7.js","./components/pages/examples/snap/min-max/_page.svelte-29b9006d.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/14-5e11a127.js"),["./chunks/14-5e11a127.js","./chunks/_page-2a9d3cfa.js","./components/pages/examples/snap/simple/_page.svelte-54c1083f.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css"],import.meta.url),()=>A(()=>import("./chunks/15-f2497daa.js"),["./chunks/15-f2497daa.js","./chunks/_page-7c799ff2.js","./components/pages/examples/styling/splitters/_page.svelte-7cdaec3c.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./assets/_page-829a7071.css"],import.meta.url),()=>A(()=>import("./chunks/16-fc4cf6f8.js"),["./chunks/16-fc4cf6f8.js","./chunks/_page-b95cbc4a.js","./components/pages/examples/styling/splitters-modern/_page.svelte-62a83a88.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./assets/_page-9a081897.css"],import.meta.url),()=>A(()=>import("./chunks/17-753199aa.js"),["./chunks/17-753199aa.js","./chunks/_page-134a0c63.js","./components/pages/examples/toggle-panes/_page.svelte-f6d75af5.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css","./chunks/CodeArea-fc163efa.js","./assets/CodeArea-30db5443.css","./chunks/Button-8a569c61.js","./chunks/index-6ad9aa66.js","./assets/Button-190dfb8a.css"],import.meta.url),()=>A(()=>import("./chunks/18-234b5483.js"),["./chunks/18-234b5483.js","./chunks/_page-56160fd5.js","./components/pages/test/_page.svelte-851d4a62.js","./chunks/index-7f92752a.js","./chunks/Pane-78ab3306.js","./chunks/index-06c10494.js","./assets/Pane-ddd88e41.css"],import.meta.url)],Gt=[],Jt={"/":[2],"/examples/add-remove-splitter":[3],"/examples/change-orientation":[4],"/examples/default-size":[5],"/examples/listen-to-events":[6],"/examples/lock-layout":[7],"/examples/min-max":[8],"/examples/prog-resize":[9],"/examples/push-other-panes":[10],"/examples/reordering-splitters":[11],"/examples/snap/middle":[12],"/examples/snap/min-max":[13],"/examples/snap/simple":[14],"/examples/styling/splitters-modern":[16],"/examples/styling/splitters":[15],"/examples/toggle-panes":[17],"/test":[18]},Kt={handleError:({error:r})=>{console.error(r)}};class Se{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(e,n){this.status=e,this.location=n}}async function Mt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,i])=>[s,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Wt=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function en(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(i,u=!1){if(i===Ht)return;if(i===Yt)return NaN;if(i===Xt)return 1/0;if(i===Zt)return-1/0;if(i===Qt)return-0;if(u)throw new Error("Invalid input");if(i in n)return n[i];const t=e[i];if(!t||typeof t!="object")n[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[i]=new Date(t[1]);break;case"Set":const _=new Set;n[i]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const p=new Map;n[i]=p;for(let w=1;w<t.length;w+=2)p.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[i]=new RegExp(t[1],t[2]);break;case"Object":n[i]=Object(t[1]);break;case"BigInt":n[i]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[i]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);n[i]=f;for(let _=0;_<t.length;_+=1){const p=t[_];p!==Wt&&(f[_]=s(p))}}else{const f={};n[i]=f;for(const _ in t){const p=t[_];f[_]=s(p)}}return n[i]}return s(0)}const Re=Ut(he,Gt,Jt,zt),Ae=he[0],Pe=he[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Le(r){ne[r]=ue()}function tn({target:r,base:e}){var ze;const n=document.documentElement,s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,p=!0,g=!1,w=!1,R=!1,$=!1,j,T=(ze=history.state)==null?void 0:ze[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const _e=ne[T];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let G,Ne,re;async function Ue(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=ie(a,!0);i=null,await je(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:d={},invalidateAll:m=!1},h,b){return typeof a=="string"&&(a=new URL(a,Ke(document))),se({url:a,scroll:o?ue():null,keepfocus:l,redirect_chain:h,details:{state:d,replaceState:c},nav_token:b,accepted:()=>{m&&($=!0)},blocked:()=>{},type:"goto"})}async function $e(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function ae(...a){const c=Re.filter(l=>a.some(d=>l.exec(d))).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function je(a,o,c,l,d={},m){var b,v;Ne=d;let h=a&&await Ce(a);if(h||(h=await Fe(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ne!==d)return!1;if(h.type==="redirect")if(c.length>10||c.includes(o.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(h.location,o).href,{},[...c,o.pathname],d),!1;else((v=(b=h.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await J.updated.check()&&await le(o);if(s.length=0,$=!1,g=!0,l&&l.details){const{details:y}=l,L=y.replaceState?0:1;y.state[C]=T+=L,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,_?(t=h.state,h.props.page&&(h.props.page.url=o),j.$set(h.props)):Ve(h),l){const{scroll:y,keepfocus:L}=l;if(L||Oe(),await ce(),p){const O=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ce();p=!0,h.props.page&&(G=h.props.page),m&&m(),g=!1}function Ve(a){var l;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=a.props.page,j=new qt({target:r,props:{...a.props,stores:J},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(d=>d(c)),_=!0}async function Z({url:a,params:o,branch:c,status:l,error:d,route:m,form:h}){const b=c.filter(Boolean);let v="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=yt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:c,error:d,route:m},props:{components:b.map(I=>I.node.component)}};h!==void 0&&(y.props.form=h);let L={},O=!G;for(let I=0;I<b.length;I+=1){const E=b[I];L={...L,...E.data},(O||!t.branch.some(N=>N===E))&&(y.props[`data_${I}`]=L,O=O||Object.keys(E.data??{}).length>0)}return O||(O=Object.keys(G.data).length!==Object.keys(L).length),(!t.url||a.href!==t.url.href||t.error!==d||h!==void 0||O)&&(y.props.page={error:d,params:o,route:m,status:l,url:new URL(a),form:h??null,data:O?L:G.data}),y}async function ye({loader:a,parent:o,url:c,params:l,route:d,server_data_node:m}){var y,L,O;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((y=v.universal)!=null&&y.load){let V=function(...E){for(const N of E){const{href:U}=new URL(N,c);b.dependencies.add(U)}};const I={route:{get id(){return b.route=!0,d.id}},params:new Proxy(l,{get:(E,N)=>(b.params.add(N),E[N])}),data:(m==null?void 0:m.data)??null,url:Et(c,()=>{b.url=!0}),async fetch(E,N){let U;E instanceof Request?(U=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):U=E;const k=new URL(U,c).href;return V(k),_?St(U,k,N):It(U,N)},setHeaders:()=>{},depends:V,parent(){return b.parent=!0,o()}};h=await v.universal.load.call(null,I)??null,h=h?await Mt(h):null}return{node:v,loader:a,server:m,universal:(L=v.universal)!=null&&L.load?{type:"data",data:h,uses:b}:null,data:h??(m==null?void 0:m.data)??null,slash:((O=v.universal)==null?void 0:O.trailingSlash)??(m==null?void 0:m.slash)}}function xe(a,o,c,l,d){if($)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const m of l.params)if(d[m]!==t.params[m])return!0;for(const m of l.dependencies)if(s.some(h=>h(new URL(m))))return!0;return!1}function we(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function Ce({id:a,invalidating:o,url:c,params:l,route:d}){if((i==null?void 0:i.id)===a)return i.promise;const{errors:m,layouts:h,leaf:b}=d,v=[...h,b];m.forEach(k=>k==null?void 0:k().catch(()=>{})),v.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const L=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?a!==t.route.id:!1,V=v.reduce((k,P,D)=>{var Q;const S=t.branch[D],M=!!(P!=null&&P[0])&&((S==null?void 0:S.loader)!==P[1]||xe(k.some(Boolean),O,L,(Q=S.server)==null?void 0:Q.uses,l));return k.push(M),k},[]);if(V.some(Boolean)){try{y=await et(c,V)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:d.id}}),url:c,route:d})}if(y.type==="redirect")return y}const I=y==null?void 0:y.nodes;let E=!1;const N=v.map(async(k,P)=>{var Q;if(!k)return;const D=t.branch[P],S=I==null?void 0:I[P];if((!S||S.type==="skip")&&k[1]===(D==null?void 0:D.loader)&&!xe(E,O,L,(Q=D.universal)==null?void 0:Q.uses,l))return D;if(E=!0,(S==null?void 0:S.type)==="error")throw S;return ye({loader:k[1],url:c,params:l,route:d,parent:async()=>{var Je;const Ge={};for(let ve=0;ve<P;ve+=1)Object.assign(Ge,(Je=await N[ve])==null?void 0:Je.data);return Ge},server_data_node:we(S===void 0&&k[0]?{type:"skip"}:S??null,D==null?void 0:D.server)})});for(const k of N)k.catch(()=>{});const U=[];for(let k=0;k<v.length;k+=1)if(v[k])try{U.push(await N[k])}catch(P){if(P instanceof Qe)return{type:"redirect",location:P.location};let D=500,S;I!=null&&I.includes(P)?(D=P.status??D,S=P.error):P instanceof Se?(D=P.status,S=P.body):S=await ee(P,{params:l,url:c,route:{id:d.id}});const M=await qe(k,U,m);return M?await Z({url:c,params:l,branch:U.slice(0,M.idx).concat(M.node),status:D,error:S,route:d}):await Fe(c,{id:d.id},S,D)}else U.push(void 0);return await Z({url:c,params:l,branch:U,status:200,error:null,route:d,form:o?void 0:null})}async function qe(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:l}){const d={},m=await Ae();let h=null;if(m.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;h=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const b=await ye({loader:Ae,url:c,params:d,route:l,parent:()=>Promise.resolve({}),server_data_node:we(h)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Z({url:c,params:d,branch:[b,v],status:a,error:o,route:null})}function ie(a,o){if(He(a,e))return;const c=wt(a.pathname.slice(e.length)||"/");for(const l of Re){const d=l.exec(c);if(d)return{id:a.pathname+a.search,invalidating:o,route:l,params:vt(d),url:a}}}function Be({url:a,type:o,intent:c,delta:l}){var b,v;let d=!1;const m={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:o};l!==void 0&&(m.delta=l);const h={...m,cancel:()=>{d=!0}};return w||u.before_navigate.forEach(y=>y(h)),d?null:m}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:d,type:m,delta:h,nav_token:b,accepted:v,blocked:y}){const L=ie(a,!1),O=Be({url:a,type:m,delta:h,intent:L});if(!O){y();return}Le(T),v(),w=!0,_&&J.navigating.set(O),await je(L,a,l,{scroll:o,keepfocus:c,details:d},b,()=>{w=!1,u.after_navigate.forEach(V=>V(O)),J.navigating.set(null)})}async function Fe(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",m=>{const h=m.target;clearTimeout(a),a=setTimeout(()=>{l(h,2)},20)});function o(m){l(m.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(m=>{for(const h of m)h.isIntersecting&&(ae(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function l(m,h){const b=Me(m,n);if(!b)return;const{url:v,external:y}=Ee(b,e);if(y)return;const L=fe(b);L.reload||(h<=L.preload_data?$e(v):h<=L.preload_code&&ae(v.pathname))}function d(){c.disconnect();for(const m of n.querySelectorAll("a")){const{url:h,external:b}=Ee(m,e);if(b)continue;const v=fe(m);v.reload||(v.preload_code===We.viewport&&c.observe(m),v.preload_code===We.eager&&ae(h.pathname))}}u.after_navigate.push(d),d()}return{after_navigate:a=>{Ie(()=>(u.after_navigate.push(a),()=>{const o=u.after_navigate.indexOf(a);u.after_navigate.splice(o,1)}))},before_navigate:a=>{Ie(()=>(u.before_navigate.push(a),()=>{const o=u.before_navigate.indexOf(a);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(p=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:o}=new URL(a,location.href);s.push(c=>c.href===o)}return Ue()},invalidateAll:()=>($=!0,Ue()),preload_data:async a=>{const o=new URL(a,Ke(document));await $e(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const d=await qe(t.branch.length,c,l.errors);if(d){const m=await Z({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:a.status??500,error:a.error,route:l});t=m.state,j.$set(m.props),ce().then(Oe)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...G,form:a.data,status:a.status}};j.$set(o),a.type==="success"&&ce().then(Oe)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!w){const d={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(m=>m(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(T);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Me(o.composedPath()[0],n);if(!c)return;const{url:l,external:d,has:m}=Ee(c,e),h=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||m.download)return;if(d||h.reload){Be({url:l,type:"link"})||o.preventDefault(),w=!0;return}const[v,y]=l.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){R=!0,Le(T),t.url=l,J.page.set({...G,url:l}),J.page.notify();return}se({url:l,scroll:h.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var v;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const m=new URL(((v=o.submitter)==null?void 0:v.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(He(m,e))return;const{noscroll:h,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),m.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:m,scroll:h?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[C]){if(o.state[C]===T)return;const l=o.state[C]-T;se({url:new URL(location.href),scroll:ne[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=o.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&J.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:d,data:m,form:h})=>{f=!0;const b=new URL(location.href);({params:l={},route:d={id:null}}=ie(b,!1)||{});let v;try{const y=c.map(async(L,O)=>{const V=m[O];return ye({loader:he[L],url:b,params:l,route:d,parent:async()=>{const I={};for(let E=0;E<O;E+=1)Object.assign(I,(await y[E]).data);return I},server_data_node:we(V)})});v=await Z({url:b,params:l,branch:await Promise.all(y),status:a,error:o,form:h,route:Re.find(({id:L})=>L===d.id)??null})}catch(y){if(y instanceof Qe){await le(new URL(y.location,location.href));return}v=await oe({status:y instanceof Se?y.status:500,error:await ee(y,{url:b,params:l,route:d}),url:b,route:d})}Ve(v)}}}async function et(r,e){var u;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await me(n.href),i=await s.json();if(!s.ok)throw new Error(i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(r,e){return r instanceof Se?r.body:Kt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function an({env:r,hydrate:e,paths:n,target:s,version:i}){ht(n),gt(i);const u=tn({target:s,base:n.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{an as start};
