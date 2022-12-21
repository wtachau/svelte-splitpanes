import{S as Ce,i as Ee,s as ke,J as De,k as de,l as he,m as pe,h as K,n as D,N as G,b as ae,P as Ne,Q as Ae,R as Fe,f as Le,t as Te,T as ln,E as U,U as on,o as Be,V as Oe,W as ee,A as an,G as Ie,a as rn,c as cn,F as fn,X as un,Y as dn}from"./index-15259a8c.js";import{w as ue}from"./index-99a31a4d.js";function hn(r){let o,a,u;const w=r[17].default,S=De(w,r,r[16],null);return{c(){o=de("div"),S&&S.c(),this.h()},l(p){o=he(p,"DIV",{id:!0,class:!0,style:!0});var d=pe(o);S&&S.l(d),d.forEach(K),this.h()},h(){D(o,"id",r[0]),D(o,"class",a=`splitpanes ${r[3]||""} ${r[4]||""}`),D(o,"style",r[2]),G(o,"splitpanes--horizontal",r[1]),G(o,"splitpanes--vertical",!r[1]),G(o,"splitpanes--dragging",r[7]||r[8]),G(o,"splitpanes--freeze",!r[6])},m(p,d){ae(p,o,d),S&&S.m(o,null),r[18](o),u=!0},p(p,d){S&&S.p&&(!u||d[0]&65536)&&Ne(S,w,p,p[16],u?Fe(w,p[16],d,null):Ae(p[16]),null),(!u||d[0]&1)&&D(o,"id",p[0]),(!u||d[0]&24&&a!==(a=`splitpanes ${p[3]||""} ${p[4]||""}`))&&D(o,"class",a),(!u||d[0]&4)&&D(o,"style",p[2]),(!u||d[0]&26)&&G(o,"splitpanes--horizontal",p[1]),(!u||d[0]&26)&&G(o,"splitpanes--vertical",!p[1]),(!u||d[0]&408)&&G(o,"splitpanes--dragging",p[7]||p[8]),(!u||d[0]&88)&&G(o,"splitpanes--freeze",!p[6])},i(p){u||(Le(S,p),u=!0)},o(p){Te(S,p),u=!1},d(p){p&&K(o),S&&S.d(p),r[18](null)}}}const Ve={};function oe(r){if(!r.endsWith("px"))return;const o=parseFloat(r.slice(0,r.length-2));return isNaN(o)?void 0:o}function xe(r){const o=r,a=r,{clientX:u,clientY:w}="ontouchstart"in window&&a.touches?a.touches[0]:o;return{x:u,y:w}}function pn(r,o,a){let u,w,S,{$$slots:p={},$$scope:d}=o,{id:B=void 0}=o,{horizontal:_=!1}=o,{pushOtherPanes:m=!0}=o,{dblClickSplitter:b=!0}=o,{rtl:W="auto"}=o,{firstSplitter:H=!1}=o,{style:ne=null}=o,{theme:X="default-theme"}=o,{class:J=""}=o;const R=ln();let y,C=!1,A=!1,q=!1,O=!1,F=!1,E=-1,L=-1,k,l=new Array,I=ue(_);U(r,I,e=>a(30,S=e));const Y=ue(H);U(r,Y,e=>a(29,w=e));const T=ue(void 0);U(r,T,e=>a(28,u=e));let V=null,Q=null,te=null;function Z(e){return l.findIndex(t=>t.key===e)}on(Ve,{showFirstSplitter:Y,veryFirstPaneKey:T,isHorizontal:I,onPaneInit:e=>(u===void 0&&ee(T,u=e,u),{onSplitterDown:t=>{const i=Z(e);i>0&&He(t,i-1)},onSplitterClick:t=>{const i=Z(e);i>0&&qe(t,i)},onSplitterDblClick:t=>{b&&Pe(t,Z(e))}}),onPaneAdd:h,onPaneClick:Ge,onPaneRemove:$,reportGivenSizeChange:Ke});async function h(e){let t=-1;Array.from(e.element.parentNode.children).some(i=>(i.className.includes("splitpanes__pane")&&t++,i===e.element)),t===0&&ee(T,u=e.key,u),l.splice(t,0,e);for(let i=0;i<l.length;i++)l[i].index=i;C&&(await fe(),e.isReady=!0,R("pane-add",{index:t,panes:j()}))}async function $(e){const t=l.findIndex(i=>i.key===e);if(t>=0){const i=l.splice(t,1)[0];for(let n=0;n<l.length;n++)l[n].index=n;t===0&&ee(T,u=l.length>0?l[0].key:void 0,u),C&&(await fe(),R("pane-remove",{removed:i,panes:j()}))}}function Ge(e,t){R("pane-click",l.find(i=>{i.key==t}))}function Ke(e,t){let i;for(let z=0;z<l.length;z++)if(l[z].key===e){i=z;break}l[i].setSz(t),fe()}Be(()=>{nn(),be();for(let e=0;e<l.length;e++)l[e].isReady=!0;C=!0,R("ready"),setTimeout(()=>{a(6,q=!0)},0)}),Oe(()=>{C&&ze(),C=!1});function Se(e){if(W==="auto")try{return e.direction==="rtl"}catch{}return W===!0}function We(){document.body.style.cursor=I?"col-resize":"row-resize",document.addEventListener("mousemove",ie,{passive:!1}),document.addEventListener("mouseup",se),"ontouchstart"in window&&(document.addEventListener("touchmove",ie,{passive:!1}),document.addEventListener("touchend",se))}function ze(){document.body.style.cursor="",document.removeEventListener("mousemove",ie),document.removeEventListener("mouseup",se),"ontouchstart"in window&&(document.removeEventListener("touchmove",ie),document.removeEventListener("touchend",se))}const re=e=>e.nodeType===Node.ELEMENT_NODE&&e.classList.contains("splitpanes__splitter");function ge(e,t,i){let n=e[_?"y":"x"];return i&&!_&&(n=t-n),n}function He(e,t){a(7,O=!0),E=t;const i=E+1,n=l[i];n.setSplitterActive(!0);let g=n.element;for(;g!=null&&(g=g.previousSibling,!re(g)););g==null&&console.error("Splitpane Error: Active splitter wasn't found!"),V=g;const c=window.getComputedStyle(y),s=xe(e);Q=ce(s,V)[_?"y":"x"];const f=Se(c),P=ve(y,c)[_?"height":"width"],M=ce(s,y);te=ge(M,P,f),We()}function ie(e){if(O){e.preventDefault(),a(8,F=!0);const t=window.getComputedStyle(y),i=xe(e),n=ce(i,y,t);Xe(n,t),R("resize",j())}}function se(){F&&R("resized",j()),a(7,O=!1);const e=E+1;l[e].setSplitterActive(!1),setTimeout(()=>{a(8,F=!1),ze()},100)}function qe(e,t){"ontouchstart"in window&&(e.preventDefault(),b&&(L===t?(k&&clearTimeout(k),k=null,Pe(e,t),L=-1):(L=t,k=setTimeout(()=>{L=-1},500)))),F||R("splitter-click",l[t])}function Pe(e,t){const i=l[t];let n=0;for(let c=0;c<l.length;c++){const s=l[c];c!==t&&(n+=s.min())}const z=Math.min(Math.max(0,100-n),i.max()),g=n+z;if(g>=100)for(let c=0;c<l.length;c++){const s=l[c];c!==t?s.setSz(s.min()):s.setSz(100-n)}else{let c=100-g;i.setSz(z);const s=f=>{const P=f.min(),M=f.max(),x=Math.min(Math.max(0,c),M-P);f.setSz(P+x),c-=x};for(let f=t-1;f>=0;f--)s(l[f]);for(let f=t+1;f<l.length;f++)s(l[f]);c!=0&&console.warn("Splitpanes: there is a left spare size after computation of splitter double click, which means there are issues on the size constains of the panes.")}R("pane-maximize",i),R("resized",j()),a(7,O=!1)}function j(){const e=new Array(l.length);for(let t=0;t<l.length;t++){const i=l[t];e[t]={min:i.min(),max:i.max(),size:i.sz(),snap:i.snap()}}return e}const _e=(e,t=!0)=>{if(e.getPropertyValue("box-sizing")==="border-box")return;const i=oe(e.getPropertyValue("border-left-width"));if(i===void 0){console.error("Splitpanes Error: Fail to parse container `border-left-width`.");return}const n=oe(e.getPropertyValue("border-top-width"));if(n===void 0){console.error("Splitpanes Error: Fail to parse container `border-top-width`.");return}const z={left:i,top:n};if(t){const g=oe(e.getPropertyValue("border-right-width"));if(g===void 0){console.error("Splitpanes Error: Fail to parse container `border-right-width`.");return}const c=oe(e.getPropertyValue("border-bottom-width"));if(c===void 0){console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");return}const s=z;s.right=g,s.bottom=c}return z};function Ye(e,t){t||(t=window.getComputedStyle(e));const i=e.getBoundingClientRect(),n=_e(t,!1)||{left:0,top:0};return{x:i.left+n.left,y:i.top+n.top}}function ve(e,t){t||(t=window.getComputedStyle(e));const i=e.getBoundingClientRect(),n=_e(t,!0)||{left:0,top:0,right:0,bottom:0};return{width:i.width-n.left-n.right,height:i.height-n.top-n.bottom,x:i.left+n.left,y:i.top+n.top}}function ce(e,t,i){const n=Ye(t,i);return{x:e.x-n.x,y:e.y-n.y}}function je(e,t,i){const n=v=>v.getBoundingClientRect()[_?"height":"width"];if(V==null)return e;const z=n(V),g=z-Q;let c=0,s=V.previousSibling;for(;s!=null;)re(s)&&(c+=n(s)),s=s.previousSibling;let f=0,P=V.nextSibling;for(;P!=null;)re(P)&&(f+=n(P)),P=P.nextSibling;const M=c+(i&&!_?g:Q)+(e-te)*z/t,x=c+z+f;return(e-M)/(t-x)}function Ue(e,t){const i=Se(t),n=ve(y,t)[_?"height":"width"],z=ge(e,n,i);return je(z,n,i)*100}function Xe(e,t){const i=E;let n={prevPanesSize:we(i),nextPanesSize:ye(i),prevReachedMinPanes:0,nextReachedMinPanes:0};const z=0+(m?0:n.prevPanesSize),g=100-(m?0:n.nextPanesSize);let c=[i,i+1],s=l[c[0]]||null,f=l[c[1]]||null;const P=Math.max(Math.min(Ue(e,t),g),z),M=n.prevPanesSize+s.min()+s.snap(),x=100-(n.nextPanesSize+f.min()+f.snap());let v=P,N=!1;P<=M?P>n.prevPanesSize+s.min()&&(v=Math.max(s.min()+n.prevPanesSize,100-(f.max()+n.nextPanesSize)),N=!0):P>=x&&P<100-n.nextPanesSize-f.min()&&(v=Math.min(100-(f.min()+n.nextPanesSize),s.max()+n.prevPanesSize),N=!0);const le=s.max()<100&&v>=s.max()+n.prevPanesSize,sn=f.max()<100&&v<=100-(f.max()+n.nextPanesSize);if(le||sn)le?(s.setSz(s.max()),f.setSz(Math.max(100-s.max()-n.prevPanesSize-n.nextPanesSize,0))):(s.setSz(Math.max(100-f.max()-n.prevPanesSize-n.nextPanesSize,0)),f.setSz(f.max()));else{if(m&&!N){const Me=Je(n,v);if(!Me)return;({sums:n,panesToResize:c}=Me),s=l[c[0]]||null,f=l[c[1]]||null}s!==null&&s.setSz(Math.min(Math.max(v-n.prevPanesSize-n.prevReachedMinPanes,s.min()),s.max())),f!==null&&f.setSz(Math.min(Math.max(100-v-n.nextPanesSize-n.nextReachedMinPanes,f.min()),f.max()))}}function Je(e,t){var z,g;const i=E,n=[i,i+1];if(t<e.prevPanesSize+l[n[0]].min()){if(n[0]=(z=Qe(i))==null?void 0:z.index,e.prevReachedMinPanes=0,n[0]<i)for(let c=0;c<l.length;c++){const s=l[c];c>n[0]&&c<=i&&(s.setSz(s.min()),e.prevReachedMinPanes+=s.min())}if(e.prevPanesSize=we(n[0]),n[0]===void 0){e.prevReachedMinPanes=0,l[0].setSz(l[0].min());for(let c=0;c<l.length;c++){const s=l[c];c>0&&c<=i&&(s.setSz(s.min()),e.prevReachedMinPanes+=s.min())}return l[n[1]].setSz(100-e.prevReachedMinPanes-l[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(t>100-e.nextPanesSize-l[n[1]].min()){if(n[1]=(g=Ze(i))==null?void 0:g.index,e.nextReachedMinPanes=0,n[1]>i+1)for(let s=0;s<l.length;s++){const f=l[s];s>i&&s<n[1]&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}e.nextPanesSize=ye(n[1]-1);const c=l.length;if(n[1]===void 0){e.nextReachedMinPanes=0,l[c-1].setSz(l[c-1].min());for(let s=0;s<l.length;s++){const f=l[s];s<c-1&&s>=i+1&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}return l[n[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-l[c-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:n}}function we(e){return l.reduce((t,i,n)=>t+(n<e?i.sz():0),0)}function ye(e){return l.reduce((t,i,n)=>t+(n>e+1?i.sz():0),0)}function Qe(e){return[...l].reverse().find(i=>i.index<e&&i.sz()>i.min())||null}function Ze(e){return l.find(i=>i.index>e+1&&i.sz()>i.min())||null}async function fe(){A=!0,await an(),A&&(be(),A=!1)}function be(){$e(),C&&R("resized",j())}function $e(){const e=l.length;let t=100,i=0,n=0,z=0,g=[],c=[];for(let x=0;x<e;x++){const v=l[x],N=v.sz();v.givenSize==null?v.isReady?(z+=N,N>=v.max()&&g.push(v),N<=v.min()&&c.push(v)):n+=1:(t-=N,i++,g.push(v),c.push(v))}const s=e-i,f=s-n;let P,M;if(f>0?(P=z/f,P>.1&&t>.1?(z+=n*P,M=t/z):(P=0,M=1)):(P=t/s,M=1),t+z>.1){t=100;for(let x=0;x<e;x++){const v=l[x];if(v.givenSize==null){const N=v.isReady?v.sz():P,le=Math.max(Math.min(N*M,v.max()),v.min());v.setSz(le)}t-=v.sz()}Math.abs(t)>.1&&(t=en(t,g,c))}isFinite(t)?Math.abs(t)>.1&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."):console.warn("Splitpanes: Internal error, sizes might be NaN as a result.")}function en(e,t,i){const z=l.length-(e>0?t.length:i.length);if(z<=0)return e;const g=e/z;if(l.length===1)l[0].setSz(100),e=0;else for(let c=0;c<l.length;c++){const s=l[c],f=s.sz();if(e>0&&!t.includes(s)){const P=Math.max(Math.min(f+g,s.max()),s.min()),M=P-f;e-=M,s.setSz(P)}else if(!i.includes(s)){const P=Math.max(Math.min(f+g,s.max()),s.min()),M=P-f;e-=M,s.setSz(P)}}return e}function nn(){var e;if(y){const t=Array.from(y.children);for(let i=0;i<t.length;i++){const n=t[i],z=n.classList.contains("splitpanes__pane"),g=n.classList.contains("splitpanes__splitter");if(!z&&!g){(e=n.parentNode)==null||e.removeChild(n),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function tn(e){Ie[e?"unshift":"push"](()=>{y=e,a(5,y)})}return r.$$set=e=>{"id"in e&&a(0,B=e.id),"horizontal"in e&&a(1,_=e.horizontal),"pushOtherPanes"in e&&a(12,m=e.pushOtherPanes),"dblClickSplitter"in e&&a(13,b=e.dblClickSplitter),"rtl"in e&&a(14,W=e.rtl),"firstSplitter"in e&&a(15,H=e.firstSplitter),"style"in e&&a(2,ne=e.style),"theme"in e&&a(3,X=e.theme),"class"in e&&a(4,J=e.class),"$$scope"in e&&a(16,d=e.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2&&ee(I,S=_,S),r.$$.dirty[0]&32768&&ee(Y,w=H,w)},[B,_,ne,X,J,y,q,O,F,I,Y,T,m,b,W,H,d,p,tn]}class Pn extends Ce{constructor(o){super(),Ee(this,o,pn,hn,ke,{id:0,horizontal:1,pushOtherPanes:12,dblClickSplitter:13,rtl:14,firstSplitter:15,style:2,theme:3,class:4},null,[-1,-1,-1])}}function Re(r){let o,a,u,w;return{c(){o=de("div"),this.h()},l(S){o=he(S,"DIV",{class:!0}),pe(o).forEach(K),this.h()},h(){D(o,"class",a="splitpanes__splitter "+(r[2]?"splitpanes__splitter__active":""))},m(S,p){ae(S,o,p),u||(w=dn(r[11].call(null,o)),u=!0)},p(S,p){p[0]&4&&a!==(a="splitpanes__splitter "+(S[2]?"splitpanes__splitter__active":""))&&D(o,"class",a)},d(S){S&&K(o),u=!1,w()}}}function mn(r){let o,a,u,w,S,p,d=(r[4]!==r[9]||r[5])&&Re(r);const B=r[20].default,_=De(B,r,r[19],null);return{c(){d&&d.c(),o=rn(),a=de("div"),_&&_.c(),this.h()},l(m){d&&d.l(m),o=cn(m),a=he(m,"DIV",{class:!0,style:!0});var b=pe(a);_&&_.l(b),b.forEach(K),this.h()},h(){D(a,"class",u=`splitpanes__pane ${r[0]||""}`),D(a,"style",r[3])},m(m,b){d&&d.m(m,b),ae(m,o,b),ae(m,a,b),_&&_.m(a,null),r[21](a),w=!0,S||(p=fn(a,"click",r[10]),S=!0)},p(m,b){m[4]!==m[9]||m[5]?d?d.p(m,b):(d=Re(m),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),_&&_.p&&(!w||b[0]&524288)&&Ne(_,B,m,m[19],w?Fe(B,m[19],b,null):Ae(m[19]),null),(!w||b[0]&1&&u!==(u=`splitpanes__pane ${m[0]||""}`))&&D(a,"class",u),(!w||b[0]&8)&&D(a,"style",m[3])},i(m){w||(Le(_,m),w=!0)},o(m){Te(_,m),w=!1},d(m){d&&d.d(m),m&&K(o),m&&K(a),_&&_.d(m),r[21](null),S=!1,p()}}}function Sn(r,o,a){let u,w,S,p,d,{$$slots:B={},$$scope:_}=o;const{onPaneInit:m,onPaneAdd:b,onPaneRemove:W,onPaneClick:H,reportGivenSizeChange:ne,isHorizontal:X,showFirstSplitter:J,veryFirstPaneKey:R}=un(Ve);U(r,X,h=>a(18,S=h)),U(r,J,h=>a(5,d=h)),U(r,R,h=>a(4,p=h));let{size:y=null}=o,{minSize:C=0}=o,{maxSize:A=100}=o,{snapSize:q=0}=o,{class:O=""}=o;const F=typeof window<"u",E={};let L,k=y??0,l=!1,I=!1;const Y=h=>{I&&h!=null&&h!=k&&ne(E,h)},{onSplitterDown:T,onSplitterClick:V,onSplitterDblClick:Q}=m(E);function te(h){H(h,E)}const Z=h=>{h.onmousedown=T,"ontouchstart"in window&&(h.ontouchstart=T),h.onclick=V,h.ondblclick=Q};Be(()=>{b({key:E,element:L,givenSize:y,sz:()=>k,setSz:$=>{a(16,k=$),y!=null&&y!=k&&a(12,y=k)},min:()=>C,max:()=>A,snap:()=>q,setSplitterActive:$=>{a(2,l=$)},isReady:!1}),I=!0}),Oe(()=>{W(E)});function me(h){Ie[h?"unshift":"push"](()=>{L=h,a(1,L)})}return r.$$set=h=>{"size"in h&&a(12,y=h.size),"minSize"in h&&a(13,C=h.minSize),"maxSize"in h&&a(14,A=h.maxSize),"snapSize"in h&&a(15,q=h.snapSize),"class"in h&&a(0,O=h.class),"$$scope"in h&&a(19,_=h.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&4096&&Y(y),r.$$.dirty[0]&262144&&a(17,u=S?"height":"width"),r.$$.dirty[0]&225280&&a(3,w=[!F&&C>0?`min-${u}: ${C}%;`:void 0,!F&&A<100?`max-${u}: ${A}%;`:void 0,F||y!=null?`${u}: ${k}%;`:void 0].filter(h=>h!==void 0).join(" ")||void 0)},[O,L,l,w,p,d,X,J,R,E,te,Z,y,C,A,q,k,u,S,_,B,me]}class _n extends Ce{constructor(o){super(),Ee(this,o,Sn,mn,ke,{size:12,minSize:13,maxSize:14,snapSize:15,class:0},null,[-1,-1])}}export{_n as P,Pn as S};
