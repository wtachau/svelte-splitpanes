import{S as p,i as $,s as v,e as S,b as k,d as w,g,h as u,j as N,a1 as V,n as f,o as _,c as j,u as q,l as B,m as D,Q as A,R as C,T as b,V as E,a2 as F}from"./external-b827b9fd.js";function H(r){let t;const l=r[6].default,e=j(l,r,r[5],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,a){e&&e.m(n,a),t=!0},p(n,a){e&&e.p&&(!t||a&32)&&q(e,l,n,n[5],t?D(l,n[5],a,null):B(n[5]),null)},i(n){t||(f(e,n),t=!0)},o(n){_(e,n),t=!1},d(n){e&&e.d(n)}}}function P(r){let t,l,e,n,a,d,o=r[3]===null&&H(r);return{c(){t=S("div"),o&&o.c(),this.h()},l(s){t=k(s,"DIV",{role:!0,id:!0,"data-content":!0});var c=w(t);o&&o.l(c),c.forEach(g),this.h()},h(){u(t,"role","presentation"),u(t,"id",l=r[2](r[1])),u(t,"data-content",e=void 0)},m(s,c){N(s,t,c),o&&o.m(t,null),n=!0,a||(d=V(r[4].call(null,t)),a=!0)},p(s,[c]){s[3]===null&&o.p(s,c),(!n||c&2&&l!==(l=s[2](s[1])))&&u(t,"id",l),(!n||c&1&&e!==(e=void 0))&&u(t,"data-content",e)},i(s){n||(f(o),n=!0)},o(s){_(o),n=!1},d(s){s&&g(t),o&&o.d(),a=!1,d()}}}function Q(r,t,l){let{$$slots:e={},$$scope:n}=t,{content:a=void 0}=t,{id:d}=t;const o=i=>`prerendered_area_${i}`;function s(){const i=document.getElementById(o(d));return i??null}const c=s();var h=null;if(c!==null){const i=c.childNodes;h=Array.from(i).map(m=>m.cloneNode(!0))}const I=i=>{c!==null&&h.forEach(m=>{i.appendChild(m)})};return r.$$set=i=>{"content"in i&&l(0,a=i.content),"id"in i&&l(1,d=i.id),"$$scope"in i&&l(5,n=i.$$scope)},[a,d,o,c,I,n,e]}class R extends p{constructor(t){super(),$(this,t,Q,P,v,{content:0,id:1})}}function T(r){let t,l;return t=new F({props:{code:r[1]}}),{c(){A(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){b(t,e,n),l=!0},p(e,n){const a={};n&2&&(a.code=e[1]),t.$set(a)},i(e){l||(f(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function y(r){let t,l;return t=new R({props:{id:r[0],content:r[1],$$slots:{default:[T]},$$scope:{ctx:r}}}),{c(){A(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){b(t,e,n),l=!0},p(e,[n]){const a={};n&1&&(a.id=e[0]),n&2&&(a.content=e[1]),n&6&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){l||(f(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function z(r,t,l){let{id:e}=t,{code:n}=t;return r.$$set=a=>{"id"in a&&l(0,e=a.id),"code"in a&&l(1,n=a.code)},[e,n]}class J extends p{constructor(t){super(),$(this,t,z,y,v,{id:0,code:1})}}export{J as C};
