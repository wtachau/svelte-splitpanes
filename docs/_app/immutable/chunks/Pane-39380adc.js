import{S as Se,i as Pe,s as ge,F as ye,e as le,c as ae,a as oe,d as N,b,O as K,g as J,K as _e,L as ve,M as Me,q as we,o as xe,Q as Qe,_ as V,r as Ue,a9 as U,v as ke,aa as be,D as ie,a3 as Ce,T as Xe,k as Ge,m as Je,$ as Ze,ab as $e}from"./index-632af6f3.js";import{w as se}from"./index-ead1d761.js";function en(c){let o,r,h;const y=c[16].default,S=ye(y,c,c[15],null);return{c(){o=le("div"),S&&S.c(),this.h()},l(z){o=ae(z,"DIV",{id:!0,class:!0,style:!0});var u=oe(o);S&&S.l(u),u.forEach(N),this.h()},h(){b(o,"id",c[0]),b(o,"class",r=`splitpanes ${c[3]||""} ${c[4]||""}`),b(o,"style",c[2]),K(o,"splitpanes--horizontal",c[1]),K(o,"splitpanes--vertical",!c[1]),K(o,"splitpanes--dragging",c[6]||c[7])},m(z,u){J(z,o,u),S&&S.m(o,null),c[17](o),h=!0},p(z,u){S&&S.p&&(!h||u[0]&32768)&&_e(S,y,z,z[15],h?Me(y,z[15],u,null):ve(z[15]),null),(!h||u[0]&1)&&b(o,"id",z[0]),(!h||u[0]&24&&r!==(r=`splitpanes ${z[3]||""} ${z[4]||""}`))&&b(o,"class",r),(!h||u[0]&4)&&b(o,"style",z[2]),u[0]&26&&K(o,"splitpanes--horizontal",z[1]),u[0]&26&&K(o,"splitpanes--vertical",!z[1]),u[0]&216&&K(o,"splitpanes--dragging",z[6]||z[7])},i(z){h||(we(S,z),h=!0)},o(z){xe(S,z),h=!1},d(z){z&&N(o),S&&S.d(z),c[17](null)}}}const Re={};function ze(c){if(!c.endsWith("px"))return;const o=parseInt(c.slice(0,c.length-2));return isNaN(o)?void 0:o}function nn(c){if(c.getPropertyValue("box-sizing")==="border-box")return;const o=ze(c.getPropertyValue("border-left-width"));if(o===void 0){console.error("Splitpanes Error: Fail to parse container `border-left-width`.");return}const r=ze(c.getPropertyValue("border-top-width"));if(r===void 0){console.error("Splitpanes Error: Fail to parse container `border-top-width`.");return}return{left:o,top:r}}function tn(c,o,r){let h,y,S,{$$slots:z={},$$scope:u}=o,{id:E=void 0}=o,{horizontal:g=!1}=o,{pushOtherPanes:d=!0}=o,{dblClickSplitter:v=!0}=o,{rtl:q="auto"}=o,{firstSplitter:I=!1}=o,{style:H=null}=o,{theme:j="default-theme"}=o,{class:W=""}=o;const _=Qe();let w,x=!1,C=!1,A=!1,R=-1,D=-1,k,s=new Array,O=se(g);V(c,O,e=>r(25,S=e));const T=se(I);V(c,T,e=>r(24,y=e));const L=se(void 0);V(c,L,e=>r(23,h=e));function Y(e){return s.findIndex(i=>i.key===e)}Ue(Re,{showFirstSplitter:T,veryFirstPaneKey:L,isHorizontal:O,onPaneInit:e=>(h===void 0&&U(L,h=e,h),{onSplitterDown:i=>{const n=Y(e);n>0&&Ae(i,n-1)},onSplitterClick:i=>{const n=Y(e);n>0&&Oe(i,n)},onSplitterDblClick:i=>{v&&fe(i,Y(e))}}),onPaneAdd:Z,onPaneClick:$,onPaneRemove:p});async function Z(e){let i=-1;Array.from(e.element.parentNode.children).some(n=>(n.className.includes("splitpanes__pane")&&i++,n===e.element)),i===0&&U(L,h=e.key,h),s.splice(i,0,e);for(let n=0;n<s.length;n++)s[n].index=n;x&&(await ie(),ee(s[i],void 0),_("pane-add",{index:i,panes:B()}))}async function p(e){const i=s.findIndex(n=>n.key===e);if(i>=0){const n=s.splice(i,1)[0];for(let t=0;t<s.length;t++)s[t].index=t;i===0&&U(L,h=s.length>0?s[0].key:void 0,h),x&&(await ie(),ee(void 0,{...n,index:i}),_("pane-remove",{removed:n,panes:B()}))}}function $(e,i){_("pane-click",s.find(n=>{n.key==i}))}ke(()=>{He(),ee(),x=!0,_("ready")}),be(()=>{x&&ce(),x=!1});function De(e){if(q==="auto")try{return e.direction==="rtl"}catch{}return q===!0}function Ee(){document.body.style.cursor=O?"col-resize":"row-resize",document.addEventListener("mousemove",X,{passive:!1}),document.addEventListener("mouseup",G),"ontouchstart"in window&&(document.addEventListener("touchmove",X,{passive:!1}),document.addEventListener("touchend",G))}function ce(){document.body.style.cursor="",document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",G),"ontouchstart"in window&&(document.removeEventListener("touchmove",X),document.removeEventListener("touchend",G))}function Ae(e,i){Ee(),r(6,C=!0),R=i}function X(e){if(C){e.preventDefault(),r(7,A=!0);const i=window.getComputedStyle(w),n=Le(e,i);Ne(n,i),_("resize",B())}}function G(){A&&_("resized",B()),r(6,C=!1),setTimeout(()=>{r(7,A=!1),ce()},100)}function Oe(e,i){"ontouchstart"in window&&(e.preventDefault(),v&&(D===i?(k&&clearTimeout(k),k=null,fe(e,i),D=-1):(D=i,k=setTimeout(()=>{D=-1},500)))),A||_("splitter-click",s[i])}function fe(e,i){let n=0;for(let m=0;m<s.length;m++){const a=s[m],l=m===i?a.max():a.min();a.setSz(l),m!==i&&(n+=a.min())}const t=s[i],P=t.sz()-n;t.setSz(P),_("pane-maximize",t),_("resized",B()),r(6,C=!1)}function B(){const e=new Array(s.length);for(let i=0;i<s.length;i++){const n=s[i];e[i]={min:n.min(),max:n.max(),size:n.sz(),snap:n.snap()}}return e}function Le(e,i){const n=w.getBoundingClientRect(),t=nn(i)||{left:0,top:0},P=e,m=e,{clientX:a,clientY:l}="ontouchstart"in window&&m.touches?m.touches[0]:P;return{x:a-(n.left+t.left),y:l-(n.top+t.top)}}function Fe(e,i){let n=e[g?"y":"x"];const t=w[g?"clientHeight":"clientWidth"];return De(i)&&!g&&(n=t-n),n*100/t}function Ne(e,i){const n=R;let t={prevPanesSize:ue(n),nextPanesSize:de(n),prevReachedMinPanes:0,nextReachedMinPanes:0};const P=0+(d?0:t.prevPanesSize),m=100-(d?0:t.nextPanesSize);let a=[n,n+1],l=s[a[0]]||null,f=s[a[1]]||null;const M=Math.max(Math.min(Fe(e,i),m),P),Q=t.prevPanesSize+l.min()+l.snap(),We=100-(t.nextPanesSize+f.min()+f.snap());let F=M,te=!1;M<=Q?M>t.prevPanesSize+l.min()&&(F=Math.max(l.min()+t.prevPanesSize,100-(f.max()+t.nextPanesSize)),te=!0):M>=We&&M<100-t.nextPanesSize-f.min()&&(F=Math.min(100-(f.min()+t.nextPanesSize),l.max()+t.prevPanesSize),te=!0);const me=l.max()<100&&F>=l.max()+t.prevPanesSize,Ye=f.max()<100&&F<=100-(f.max()+t.nextPanesSize);if(me||Ye)me?(l.setSz(l.max()),f.setSz(Math.max(100-l.max()-t.prevPanesSize-t.nextPanesSize,0))):(l.setSz(Math.max(100-f.max()-t.prevPanesSize-t.nextPanesSize,0)),f.setSz(f.max()));else{if(d&&!te){const he=qe(t,F);if(!he)return;({sums:t,panesToResize:a}=he),l=s[a[0]]||null,f=s[a[1]]||null}l!==null&&l.setSz(Math.min(Math.max(F-t.prevPanesSize-t.prevReachedMinPanes,l.min()),l.max())),f!==null&&f.setSz(Math.min(Math.max(100-F-t.nextPanesSize-t.nextReachedMinPanes,f.min()),f.max()))}}function qe(e,i){var P,m;const n=R,t=[n,n+1];if(i<e.prevPanesSize+s[t[0]].min()){if(t[0]=(P=Ie(n))==null?void 0:P.index,e.prevReachedMinPanes=0,t[0]<n)for(let a=0;a<s.length;a++){const l=s[a];a>t[0]&&a<=n&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}if(e.prevPanesSize=ue(t[0]),t[0]===void 0){e.prevReachedMinPanes=0,s[0].setSz(s[0].min());for(let a=0;a<s.length;a++){const l=s[a];a>0&&a<=n&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}return s[t[1]].setSz(100-e.prevReachedMinPanes-s[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(i>100-e.nextPanesSize-s[t[1]].min()){if(t[1]=(m=Te(n))==null?void 0:m.index,e.nextReachedMinPanes=0,t[1]>n+1)for(let l=0;l<s.length;l++){const f=s[l];l>n&&l<t[1]&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}e.nextPanesSize=de(t[1]-1);const a=s.length;if(t[1]===void 0){e.nextReachedMinPanes=0,s[a-1].setSz(s[a-1].min());for(let l=0;l<s.length;l++){const f=s[l];l<a-1&&l>=n+1&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}return s[t[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-s[a-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:t}}function ue(e){return s.reduce((i,n,t)=>i+(t<e?n.sz():0),0)}function de(e){return s.reduce((i,n,t)=>i+(t>e+1?n.sz():0),0)}function Ie(e){return[...s].reverse().find(n=>n.index<e&&n.sz()>n.min())||null}function Te(e){return s.find(n=>n.index>e+1&&n.sz()>n.min())||null}function ee(e,i){!e&&!i||s.length===1?Ke():s.some(n=>n.givenSize!=null||n.min()||n.max()<100)?Ve(e):Be(),x&&_("resized",B())}function Be(){const e=s.length,i=100/e;let n=0,t=Array(),P=Array();for(let m=0;m<s.length;m++){const a=s[m],l=a.min(),f=a.max(),M=Math.max(Math.min(i,f),l);a.setSz(M),n-=M,M>=f&&t.push(a.key),M<=l&&P.push(a.key)}n>.1&&ne(n,t,P)}function Ke(){let e=100,i=Array(),n=Array(),t=0;for(let m=0;m<s.length;m++){const a=s[m],l=a.sz();e-=l,a.givenSize!=null&&t++,l>=a.max()&&i.push(a.key),l<=a.min()&&n.push(a.key)}let P=100;if(e>.1){for(let m=0;m<s.length;m++){const a=s[m];if(a.givenSize==null){const l=s.length,f=Math.max(Math.min(e/(l-t),a.max()),a.min());a.setSz(f)}P-=a.sz()}P>.1&&ne(e,i,n)}}function Ve(e){const i=s.length;let n=100/i,t=0,P=new Array,m=new Array;e&&e.givenSize!=null&&(n=(100-e.givenSize)/(i-1));for(let a=0;a<s.length;a++){const l=s[a],f=l.sz();t-=f,f>=l.max()&&P.push(l.key),f<=l.min()&&m.push(l.key)}if(!(Math.abs(t)<.1)){for(let a=0;a<s.length;a++){const l=s[a],f=l.max(),M=l.min();e&&e.givenSize!=null&&e.key===l.key||l.setSz(Math.max(Math.min(n,f),M));const Q=l.sz();t-=Q,Q>=f&&P.push(l.key),Q<=M&&m.push(l.key)}t>.1&&ne(t,P,m)}}async function ne(e,i,n){const t=s.length;let P;if(e>0?P=e/(t-i.length):P=e/(t-n.length),s.length===1)s[0].setSz(100),e=0;else for(let m=0;m<s.length;m++){const a=s[m],l=a.sz();if(e>0&&!i.includes(a.key)){const f=Math.max(Math.min(l+P,a.max()),a.min());e-=f-l,a.setSz(f)}else if(!n.includes(a.key)){const f=Math.max(Math.min(l+P,a.max()),a.min());e-=f-l,a.setSz(f)}}Math.abs(e)>.1&&(await ie(),x&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function He(){var e;if(w){const i=Array.from(w.children);for(let n=0;n<i.length;n++){const t=i[n],P=t.classList.contains("splitpanes__pane"),m=t.classList.contains("splitpanes__splitter");if(!P&&!m){(e=t.parentNode)==null||e.removeChild(t),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function je(e){Ce[e?"unshift":"push"](()=>{w=e,r(5,w)})}return c.$$set=e=>{"id"in e&&r(0,E=e.id),"horizontal"in e&&r(1,g=e.horizontal),"pushOtherPanes"in e&&r(11,d=e.pushOtherPanes),"dblClickSplitter"in e&&r(12,v=e.dblClickSplitter),"rtl"in e&&r(13,q=e.rtl),"firstSplitter"in e&&r(14,I=e.firstSplitter),"style"in e&&r(2,H=e.style),"theme"in e&&r(3,j=e.theme),"class"in e&&r(4,W=e.class),"$$scope"in e&&r(15,u=e.$$scope)},c.$$.update=()=>{c.$$.dirty[0]&2&&U(O,S=g,S),c.$$.dirty[0]&16384&&U(T,y=I,y)},[E,g,H,j,W,w,C,A,O,T,L,d,v,q,I,u,z,je]}class rn extends Se{constructor(o){super(),Pe(this,o,tn,en,ge,{id:0,horizontal:1,pushOtherPanes:11,dblClickSplitter:12,rtl:13,firstSplitter:14,style:2,theme:3,class:4},null,[-1,-1])}}function pe(c){let o,r,h,y;return{c(){o=le("div"),this.h()},l(S){o=ae(S,"DIV",{class:!0}),oe(o).forEach(N),this.h()},h(){b(o,"class","splitpanes__splitter")},m(S,z){J(S,o,z),h||(y=Xe(r=c[10].call(null,o)),h=!0)},d(S){S&&N(o),h=!1,y()}}}function sn(c){let o,r,h,y,S,z,u=(c[3]!==c[8]||c[4])&&pe(c);const E=c[19].default,g=ye(E,c,c[18],null);return{c(){u&&u.c(),o=Ge(),r=le("div"),g&&g.c(),this.h()},l(d){u&&u.l(d),o=Je(d),r=ae(d,"DIV",{class:!0,style:!0});var v=oe(r);g&&g.l(v),v.forEach(N),this.h()},h(){b(r,"class",h=`splitpanes__pane ${c[0]||""}`),b(r,"style",c[2])},m(d,v){u&&u.m(d,v),J(d,o,v),J(d,r,v),g&&g.m(r,null),c[20](r),y=!0,S||(z=Ze(r,"click",c[9]),S=!0)},p(d,[v]){d[3]!==d[8]||d[4]?u||(u=pe(d),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),g&&g.p&&(!y||v&262144)&&_e(g,E,d,d[18],y?Me(E,d[18],v,null):ve(d[18]),null),(!y||v&1&&h!==(h=`splitpanes__pane ${d[0]||""}`))&&b(r,"class",h),(!y||v&4)&&b(r,"style",d[2])},i(d){y||(we(g,d),y=!0)},o(d){xe(g,d),y=!1},d(d){u&&u.d(d),d&&N(o),d&&N(r),g&&g.d(d),c[20](null),S=!1,z()}}}function ln(c,o,r){let h,y,S,z,u,{$$slots:E={},$$scope:g}=o;const{onPaneInit:d,onPaneAdd:v,onPaneRemove:q,onPaneClick:I,isHorizontal:H,showFirstSplitter:j,veryFirstPaneKey:W}=$e(Re);V(c,H,p=>r(17,S=p)),V(c,j,p=>r(4,u=p)),V(c,W,p=>r(3,z=p));let{size:_=null}=o,{minSize:w=0}=o,{maxSize:x=100}=o,{snapSize:C=0}=o,{class:A=""}=o;const R={};let D,k=_==null?0:_;const s=typeof window<"u",{onSplitterDown:O,onSplitterClick:T,onSplitterDblClick:L}=d(R);function Y(p){I(p,R)}const re=p=>{p.onmousedown=O,"ontouchstart"in window&&(p.ontouchstart=O),p.onclick=T,p.ondblclick=L};ke(()=>{v({key:R,element:D,givenSize:_,sz:()=>k,setSz:$=>{r(15,k=$),_!=null&&r(11,_=k)},min:()=>w,max:()=>x,snap:()=>C})}),be(()=>{q(R)});function Z(p){Ce[p?"unshift":"push"](()=>{D=p,r(1,D)})}return c.$$set=p=>{"size"in p&&r(11,_=p.size),"minSize"in p&&r(12,w=p.minSize),"maxSize"in p&&r(13,x=p.maxSize),"snapSize"in p&&r(14,C=p.snapSize),"class"in p&&r(0,A=p.class),"$$scope"in p&&r(18,g=p.$$scope)},c.$$.update=()=>{c.$$.dirty&2048&&_!=null&&r(15,k=_),c.$$.dirty&131072&&r(16,h=S?"height":"width"),c.$$.dirty&112640&&r(2,y=[!s&&w>0?`min-${h}: ${w}%;`:void 0,!s&&x<100?`max-${h}: ${x}%;`:void 0,s||_!=null?`${h}: ${k}%;`:void 0].filter(p=>p!==void 0).join(" ")||void 0)},[A,D,y,z,u,H,j,W,R,Y,re,_,w,x,C,k,h,S,g,E,Z]}class cn extends Se{constructor(o){super(),Pe(this,o,ln,sn,ge,{size:11,minSize:12,maxSize:13,snapSize:14,class:0})}}export{cn as P,rn as S};
