import{S as v,i as b,s as x,x as $,k as y,y as i,m as g,z as c,g as w,n as j,r as _,p as l,C as d,d as C}from"../chunks/index-978fb75b.js";import S from"./carousel.svelte-5a140258.js";import k from"./companies.svelte-fc5bbae9.js";import q from"./about.svelte-eb7e9be6.js";import z from"./contact.svelte-4c5a2e4e.js";function A(m){let r,a,e,f,n,u,s,p;return r=new S({}),e=new k({props:{products:m[0]}}),n=new q({}),s=new z({}),{c(){$(r.$$.fragment),a=y(),$(e.$$.fragment),f=y(),$(n.$$.fragment),u=y(),$(s.$$.fragment)},l(t){i(r.$$.fragment,t),a=g(t),i(e.$$.fragment,t),f=g(t),i(n.$$.fragment,t),u=g(t),i(s.$$.fragment,t)},m(t,o){c(r,t,o),w(t,a,o),c(e,t,o),w(t,f,o),c(n,t,o),w(t,u,o),c(s,t,o),p=!0},p:j,i(t){p||(_(r.$$.fragment,t),_(e.$$.fragment,t),_(n.$$.fragment,t),_(s.$$.fragment,t),p=!0)},o(t){l(r.$$.fragment,t),l(e.$$.fragment,t),l(n.$$.fragment,t),l(s.$$.fragment,t),p=!1},d(t){d(r,t),t&&C(a),d(e,t),t&&C(f),d(n,t),t&&C(u),d(s,t)}}}async function E({fetch:m}){return{props:{products:await(await m("/api/Products")).json()}}}function M(m,r,a){let{products:e}=r,u=Object.values(e)[0].sort(()=>Math.random()-.5);return m.$$set=s=>{"products"in s&&a(1,e=s.products)},[u,e]}class F extends v{constructor(r){super();b(this,r,M,A,x,{products:1})}}export{F as default,E as load};