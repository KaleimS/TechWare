import{W as n,j as e,Y as d}from"./app-Bl-6BY5V.js";import{G as u}from"./GuestLayout-4CLr25pd.js";import{T as p,I as c}from"./TextInput-BOT8b4A9.js";import{P as x}from"./PrimaryButton-kMaGrHPK.js";import"./techware-high-resolution-logo-transparent-D6FIOWKc.js";import"./use-server-handoff-complete-XTwbPjHI.js";import"./floating-ui.react-dom-CY5KcL8_.js";import"./portal-RX39kU-m.js";import"./use-tab-direction-D8usIk_B.js";function P({status:t}){const{data:a,setData:o,post:r,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(p,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(c,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(x,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{P as default};
