import{n as v,b as g}from"./use-server-handoff-complete-XTwbPjHI.js";import{x as w,u as A}from"./portal-RX39kU-m.js";let o=new Map,a=new Map;function p(e){var t;let n=(t=a.get(e))!=null?t:0;return a.set(e,n+1),n!==0?()=>c(e):(o.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>c(e))}function c(e){var t;let n=(t=a.get(e))!=null?t:1;if(n===1?a.delete(e):a.set(e,n-1),n!==1)return;let i=o.get(e);i&&(i["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",i["aria-hidden"]),e.inert=i.inert,o.delete(e))}function E(e,{allowed:t,disallowed:n}={}){let i=w(e,"inert-others");v(()=>{var u,f;if(!i)return;let d=g();for(let r of(u=n==null?void 0:n())!=null?u:[])r&&d.add(p(r));let s=(f=t==null?void 0:t())!=null?f:[];for(let r of s){if(!r)continue;let h=A(r);if(!h)continue;let l=r.parentElement;for(;l&&l!==h.body;){for(let m of l.children)s.some(b=>m.contains(b))||d.add(p(m));l=l.parentElement}}return d.dispose},[i,t,n])}export{E as y};
