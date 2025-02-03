import{r as l,R as k,b as O,j as u,a as _}from"./app-Bl-6BY5V.js";import{v as fe,F as me,y as pe,$ as ve,a as he,w as ge,T as xe,x as be,R as ye,b as Ie,f as Re,r as we,W as B,L as Se}from"./techware-high-resolution-logo-transparent-D6FIOWKc.js";import{n as T,o as y,M as Y,W as P,y as Q,c as je,u as ne,i as W,H as D,D as ae,a as Ee,V as Ne,m as $e,p as ke,A as Pe,b as De}from"./use-server-handoff-complete-XTwbPjHI.js";import{y as Me}from"./use-inert-others-DFadJEqF.js";import{u as Fe,F as Te,n as Ce,f as Ae,t as Le,A as _e,h as Oe,o as x,j as Be,a as z,G as se,_ as We}from"./portal-RX39kU-m.js";import{U as Qe}from"./description-Dq3vSIfQ.js";import{z as oe,P as Ue}from"./label-DZOnRJwS.js";import"./floating-ui.react-dom-CY5KcL8_.js";function G(e){return[e.screenX,e.screenY]}function Ve(){let e=l.useRef([-1,-1]);return{wasMoved(t){let n=G(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=G(t)}}}function He(e,{container:t,accept:n,walk:a}){let s=l.useRef(n),r=l.useRef(a);l.useEffect(()=>{s.current=n,r.current=a},[n,a]),T(()=>{if(!t||!e)return;let i=Fe(t);if(!i)return;let f=s.current,m=r.current,v=Object.assign(h=>f(h),{acceptNode:f}),p=i.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,v,!1);for(;p.nextNode();)m(p.currentNode)},[t,e,s,r])}function Ke(e){throw new Error("Unexpected object: "+e)}var b=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(b||{});function V(e,t){let n=t.resolveItems();if(n.length<=0)return null;let a=t.resolveActiveIndex(),s=a??-1;switch(e.focus){case 0:{for(let r=0;r<n.length;++r)if(!t.resolveDisabled(n[r],r,n))return r;return a}case 1:{s===-1&&(s=n.length);for(let r=s-1;r>=0;--r)if(!t.resolveDisabled(n[r],r,n))return r;return a}case 2:{for(let r=s+1;r<n.length;++r)if(!t.resolveDisabled(n[r],r,n))return r;return a}case 3:{for(let r=n.length-1;r>=0;--r)if(!t.resolveDisabled(n[r],r,n))return r;return a}case 4:{for(let r=0;r<n.length;++r)if(t.resolveId(n[r],r,n)===e.id)return r;return a}case 5:return null;default:Ke(e)}}function qe(e,t){let n=l.useRef({left:0,top:0});if(T(()=>{let s=t.current;if(!s)return;let r=s.getBoundingClientRect();r&&(n.current=r)},[e]),t.current==null||!e||t.current===document.activeElement)return!1;let a=t.current.getBoundingClientRect();return a.top!==n.current.top||a.left!==n.current.left}let Z=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ee(e){var t,n;let a=(t=e.innerText)!=null?t:"",s=e.cloneNode(!0);if(!(s instanceof HTMLElement))return a;let r=!1;for(let f of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),r=!0;let i=r?(n=s.innerText)!=null?n:"":a;return Z.test(i)&&(i=i.replace(Z,"")),i}function Je(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let a=n.split(" ").map(s=>{let r=document.getElementById(s);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():ee(r).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return ee(e).trim()}function Xe(e){let t=l.useRef(""),n=l.useRef("");return y(()=>{let a=e.current;if(!a)return"";let s=a.innerText;if(t.current===s)return n.current;let r=Je(a).trim().toLowerCase();return t.current=s,n.current=r,r})}var Ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ye||{}),ze=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ze||{}),Ge=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Ge||{});function H(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,a=We(t(e.items.slice()),r=>r.dataRef.current.domRef.current),s=n?a.indexOf(n):null;return s===-1&&(s=null),{items:a,activeItemIndex:s}}let Ze={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var n,a,s,r,i;if(e.menuState===1)return e;let f={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===b.Nothing)return{...f,activeItemIndex:null};if(t.focus===b.Specific)return{...f,activeItemIndex:e.items.findIndex(p=>p.id===t.id)};if(t.focus===b.Previous){let p=e.activeItemIndex;if(p!==null){let h=e.items[p].dataRef.current.domRef,o=V(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(o!==null){let d=e.items[o].dataRef.current.domRef;if(((a=h.current)==null?void 0:a.previousElementSibling)===d.current||((s=d.current)==null?void 0:s.previousElementSibling)===null)return{...f,activeItemIndex:o}}}}else if(t.focus===b.Next){let p=e.activeItemIndex;if(p!==null){let h=e.items[p].dataRef.current.domRef,o=V(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(o!==null){let d=e.items[o].dataRef.current.domRef;if(((r=h.current)==null?void 0:r.nextElementSibling)===d.current||((i=d.current)==null?void 0:i.nextElementSibling)===null)return{...f,activeItemIndex:o}}}}let m=H(e),v=V(t,{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});return{...f,...m,activeItemIndex:v}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,a=e.searchQuery+t.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(i=>{var f;return((f=i.dataRef.current.textValue)==null?void 0:f.startsWith(a))&&!i.dataRef.current.disabled}),r=s?e.items.indexOf(s):-1;return r===-1||r===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:r,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=H(e,a=>[...a,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=H(e,a=>{let s=a.findIndex(r=>r.id===t.id);return s!==-1&&a.splice(s,1),a});return{...e,...n,activationTrigger:1}}},K=l.createContext(null);K.displayName="MenuContext";function U(e){let t=l.useContext(K);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}function et(e,t){return ne(t.type,Ze,e,t)}let tt=l.Fragment;function rt(e,t){let{__demoMode:n=!1,...a}=e,s=l.useReducer(et,{__demoMode:n,menuState:n?0:1,buttonRef:l.createRef(),itemsRef:l.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:i,buttonRef:f},m]=s,v=Q(t);Te(r===0,[f,i],(d,j)=>{var R;m({type:1}),_e(j,Oe.Loose)||(d.preventDefault(),(R=f.current)==null||R.focus())});let p=y(()=>{m({type:1})}),h=l.useMemo(()=>({open:r===0,close:p}),[r,p]),o={ref:v};return k.createElement(fe,null,k.createElement(K.Provider,{value:s},k.createElement(je,{value:ne(r,{0:W.Open,1:W.Closed})},D({ourProps:o,theirProps:a,slot:h,defaultTag:tt,name:"Menu"}))))}let nt="button";function at(e,t){var n;let a=l.useId(),{id:s=`headlessui-menu-button-${a}`,disabled:r=!1,autoFocus:i=!1,...f}=e,[m,v]=U("Menu.Button"),p=me(),h=Q(m.buttonRef,t,pe()),o=y(g=>{switch(g.key){case x.Space:case x.Enter:case x.ArrowDown:g.preventDefault(),g.stopPropagation(),O.flushSync(()=>v({type:0})),v({type:2,focus:b.First});break;case x.ArrowUp:g.preventDefault(),g.stopPropagation(),O.flushSync(()=>v({type:0})),v({type:2,focus:b.Last});break}}),d=y(g=>{switch(g.key){case x.Space:g.preventDefault();break}}),j=y(g=>{var M;if(we(g.currentTarget))return g.preventDefault();r||(m.menuState===0?(O.flushSync(()=>v({type:1})),(M=m.buttonRef.current)==null||M.focus({preventScroll:!0})):(g.preventDefault(),v({type:0})))}),{isFocusVisible:R,focusProps:E}=ve({autoFocus:i}),{isHovered:N,hoverProps:w}=he({isDisabled:r}),{pressed:S,pressProps:$}=ge({disabled:r}),C=l.useMemo(()=>({open:m.menuState===0,active:S||m.menuState===0,disabled:r,hover:N,focus:R,autofocus:i}),[m,N,R,S,r,i]),A=ae(p(),{ref:h,id:s,type:xe(e,m.buttonRef),"aria-haspopup":"menu","aria-controls":(n=m.itemsRef.current)==null?void 0:n.id,"aria-expanded":m.menuState===0,disabled:r||void 0,autoFocus:i,onKeyDown:o,onKeyUp:d,onClick:j},E,w,$);return D({ourProps:A,theirProps:f,slot:C,defaultTag:nt,name:"Menu.Button"})}let st="div",ot=Y.RenderStrategy|Y.Static;function it(e,t){var n,a;let s=l.useId(),{id:r=`headlessui-menu-items-${s}`,anchor:i,portal:f=!1,modal:m=!0,transition:v=!1,...p}=e,h=be(i),[o,d]=U("Menu.Items"),[j,R]=ye(h),E=Ie(),N=Q(o.itemsRef,t,h?j:null),w=Ce(o.itemsRef);h&&(f=!0);let S=Ee(),[$,C]=Ne(v,o.itemsRef,S!==null?(S&W.Open)===W.Open:o.menuState===0);$e($,o.buttonRef,()=>{d({type:1})});let A=o.__demoMode?!1:m&&o.menuState===0;Ae(A,w);let g=o.__demoMode?!1:m&&o.menuState===0;Me(g,{allowed:y(()=>[o.buttonRef.current,o.itemsRef.current])});let M=o.menuState!==0,I=qe(M,o.buttonRef)?!1:$;l.useEffect(()=>{let c=o.itemsRef.current;c&&o.menuState===0&&c!==(w==null?void 0:w.activeElement)&&c.focus({preventScroll:!0})},[o.menuState,o.itemsRef,w,o.itemsRef.current]),He(o.menuState===0,{container:o.itemsRef.current,accept(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});let L=ke(),ie=y(c=>{var q,J,X;switch(L.dispose(),c.key){case x.Space:if(o.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),d({type:3,value:c.key});case x.Enter:if(c.preventDefault(),c.stopPropagation(),d({type:1}),o.activeItemIndex!==null){let{dataRef:de}=o.items[o.activeItemIndex];(J=(q=de.current)==null?void 0:q.domRef.current)==null||J.click()}se(o.buttonRef.current);break;case x.ArrowDown:return c.preventDefault(),c.stopPropagation(),d({type:2,focus:b.Next});case x.ArrowUp:return c.preventDefault(),c.stopPropagation(),d({type:2,focus:b.Previous});case x.Home:case x.PageUp:return c.preventDefault(),c.stopPropagation(),d({type:2,focus:b.First});case x.End:case x.PageDown:return c.preventDefault(),c.stopPropagation(),d({type:2,focus:b.Last});case x.Escape:c.preventDefault(),c.stopPropagation(),O.flushSync(()=>d({type:1})),(X=o.buttonRef.current)==null||X.focus({preventScroll:!0});break;case x.Tab:c.preventDefault(),c.stopPropagation(),O.flushSync(()=>d({type:1})),Be(o.buttonRef.current,c.shiftKey?z.Previous:z.Next);break;default:c.key.length===1&&(d({type:3,value:c.key}),L.setTimeout(()=>d({type:4}),350));break}}),le=y(c=>{switch(c.key){case x.Space:c.preventDefault();break}}),ue=l.useMemo(()=>({open:o.menuState===0}),[o.menuState]),ce=ae(h?E():{},{"aria-activedescendant":o.activeItemIndex===null||(n=o.items[o.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(a=o.buttonRef.current)==null?void 0:a.id,id:r,onKeyDown:ie,onKeyUp:le,role:"menu",tabIndex:o.menuState===0?0:void 0,ref:N,style:{...p.style,...R,"--button-width":Re(o.buttonRef,!0).width},...Pe(C)});return k.createElement(Le,{enabled:f?e.static||$:!1},D({ourProps:ce,theirProps:p,slot:ue,defaultTag:st,features:ot,visible:I,name:"Menu.Items"}))}let lt=l.Fragment;function ut(e,t){let n=l.useId(),{id:a=`headlessui-menu-item-${n}`,disabled:s=!1,...r}=e,[i,f]=U("Menu.Item"),m=i.activeItemIndex!==null?i.items[i.activeItemIndex].id===a:!1,v=l.useRef(null),p=Q(t,v);T(()=>{if(!i.__demoMode&&i.menuState===0&&m&&i.activationTrigger!==0)return De().requestAnimationFrame(()=>{var I,L;(L=(I=v.current)==null?void 0:I.scrollIntoView)==null||L.call(I,{block:"nearest"})})},[i.__demoMode,v,m,i.menuState,i.activationTrigger,i.activeItemIndex]);let h=Xe(v),o=l.useRef({disabled:s,domRef:v,get textValue(){return h()}});T(()=>{o.current.disabled=s},[o,s]),T(()=>(f({type:5,id:a,dataRef:o}),()=>f({type:6,id:a})),[o,a]);let d=y(()=>{f({type:1})}),j=y(I=>{if(s)return I.preventDefault();f({type:1}),se(i.buttonRef.current)}),R=y(()=>{if(s)return f({type:2,focus:b.Nothing});f({type:2,focus:b.Specific,id:a})}),E=Ve(),N=y(I=>{E.update(I),!s&&(m||f({type:2,focus:b.Specific,id:a,trigger:0}))}),w=y(I=>{E.wasMoved(I)&&(s||m||f({type:2,focus:b.Specific,id:a,trigger:0}))}),S=y(I=>{E.wasMoved(I)&&(s||m&&f({type:2,focus:b.Nothing}))}),[$,C]=oe(),[A,g]=Qe(),M=l.useMemo(()=>({active:m,focus:m,disabled:s,close:d}),[m,s,d]);return k.createElement(C,null,k.createElement(g,null,D({ourProps:{id:a,ref:p,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-labelledby":$,"aria-describedby":A,disabled:void 0,onClick:j,onFocus:R,onPointerEnter:N,onMouseEnter:N,onPointerMove:w,onMouseMove:w,onPointerLeave:S,onMouseLeave:S},theirProps:r,slot:M,defaultTag:lt,name:"Menu.Item"})))}let ct="div";function dt(e,t){let[n,a]=oe();return k.createElement(a,null,D({ourProps:{ref:t,"aria-labelledby":n,role:"group"},theirProps:e,slot:{},defaultTag:ct,name:"Menu.Section"}))}let ft="header";function mt(e,t){let n=l.useId(),{id:a=`headlessui-menu-heading-${n}`,...s}=e,r=Ue();T(()=>r.register(a),[a,r.register]);let i={id:a,ref:t,role:"presentation",...r.props};return D({ourProps:i,theirProps:s,slot:{},defaultTag:ft,name:"Menu.Heading"})}let pt="div";function vt(e,t){return D({ourProps:{ref:t,role:"separator"},theirProps:e,slot:{},defaultTag:pt,name:"Menu.Separator"})}let ht=P(rt),gt=P(at),xt=P(it),bt=P(ut),yt=P(dt),It=P(mt),Rt=P(vt),F=Object.assign(ht,{Button:gt,Items:xt,Item:bt,Section:yt,Heading:It,Separator:Rt});function wt({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const St=l.forwardRef(wt);function jt({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const Et=l.forwardRef(jt);function Nt({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const $t=l.forwardRef(Nt),te=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1}];function re(...e){return e.filter(Boolean).join(" ")}function Lt(){return u.jsxs(B,{as:"nav",className:"bg-white",children:[u.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"relative flex h-16 items-center justify-between",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:u.jsxs(B.Button,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[u.jsx("span",{className:"absolute -inset-0.5"}),u.jsx("span",{className:"sr-only",children:"Open main menu"}),u.jsx(St,{"aria-hidden":"true",className:"block h-6 w-6 group-data-[open]:hidden"}),u.jsx($t,{"aria-hidden":"true",className:"hidden h-6 w-6 group-data-[open]:block"})]})}),u.jsxs("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[u.jsx(_,{href:"/",className:"flex flex-shrink-0 items-center",children:u.jsx("img",{alt:"Your Company",src:Se,className:"h-8 w-auto"})}),u.jsx("div",{className:"hidden sm:ml-6 sm:block",children:u.jsx("div",{className:"flex space-x-4",children:te.map(e=>u.jsx(_,{href:e.href,"aria-current":e.current?"page":void 0,className:re(e.current?"bg-black text-white":"text-black hover:bg-black hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),children:e.name},e.name))})})]}),u.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[u.jsxs("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[u.jsx("span",{className:"absolute -inset-1.5"}),u.jsx("span",{className:"sr-only",children:"View notifications"}),u.jsx(Et,{"aria-hidden":"true",className:"h-6 w-6"})]}),u.jsxs(F,{as:"div",className:"relative ml-3",children:[u.jsx("div",{children:u.jsxs(F.Button,{className:"relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[u.jsx("span",{className:"absolute -inset-1.5"}),u.jsx("span",{className:"sr-only",children:"Open user menu"}),u.jsx("img",{alt:"",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"h-8 w-8 rounded-full"})]})}),u.jsxs(F.Items,{transition:!0,className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",children:[u.jsx(F.Item,{children:u.jsx(_,{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100",children:"Your Profile"})}),u.jsx(F.Item,{children:u.jsx(_,{href:"#",className:"block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100",children:"Settings"})}),u.jsx(F.Item,{children:u.jsx(_,{href:route("logout"),method:"post",as:"button",className:"block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100",children:"Sign out"})})]})]})]})]})}),u.jsx(B.Panel,{className:"sm:hidden",children:u.jsx("div",{className:"space-y-1 px-2 pb-3 pt-2",children:te.map(e=>u.jsx(B.Button,{as:"a",href:e.href,"aria-current":e.current?"page":void 0,className:re(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),children:e.name},e.name))})})]})}export{Lt as default};
