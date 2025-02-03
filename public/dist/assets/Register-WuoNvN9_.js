import{W as c,r as u,j as e,Y as x}from"./app-Bl-6BY5V.js";import{G as p}from"./GuestLayout-4CLr25pd.js";import{T as r,I as l}from"./TextInput-BOT8b4A9.js";import{I as i}from"./InputLabel-DtJ6dJ4J.js";import{L as f}from"./techware-high-resolution-logo-transparent-D6FIOWKc.js";import"./use-server-handoff-complete-XTwbPjHI.js";import"./use-tab-direction-D8usIk_B.js";import"./portal-RX39kU-m.js";import"./floating-ui.react-dom-CY5KcL8_.js";function _(){const{data:a,setData:t,post:m,processing:h,errors:o,reset:n}=c({name:"",email:"",password:"",password_confirmation:""});u.useEffect(()=>()=>{n("password","password_confirmation")},[]);const d=s=>{s.preventDefault(),m(route("register"))};return e.jsxs(p,{children:[e.jsx(x,{title:"Register"}),e.jsxs("div",{className:"bg-primary flex h-screen flex-1 flex-col justify-center px-6 pb-32 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsx("img",{alt:"Your Company",src:f,className:"mx-auto h-10 w-auto"}),e.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700",children:"Register an account"})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(r,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full mb-6 focus:border-black",autoComplete:"name",isFocused:!0,onChange:s=>t("name",s.target.value),required:!0}),e.jsx(l,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsx("div",{className:"mt-2",children:e.jsx(r,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full mb-6 focus:border-black",autoComplete:"username",onChange:s=>t("email",s.target.value),required:!0})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),e.jsx("div",{className:"text-sm",children:e.jsx("a",{href:"#",className:"font-semibold text-secondary hover:text-black",children:"Forgot password?"})})]}),e.jsx("div",{className:"mt-2",children:e.jsx(r,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full mb-6 focus:border-black",autoComplete:"new-password",onChange:s=>t("password",s.target.value),required:!0})})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx("div",{className:"mt-2",children:e.jsx(r,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full mb-6 focus:border-black",autoComplete:"new-password",onChange:s=>t("password_confirmation",s.target.value),required:!0})}),e.jsx(l,{message:o.password_confirmation,className:"mt-2"})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Sign in"})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Already a member?"," ",e.jsx("a",{href:route("login"),className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"Click here to sign in"})]})]})]})]})}export{_ as default};
