"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,g=l["".concat(i,".").concat(d)]||l[d]||m[d]||n;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={},s="Workspaces",c={unversionedId:"workspaces",id:"workspaces",title:"Workspaces",description:"Vantage allows you to connect multiple cloud infrastructure provider accounts to the same Vantage account. This allows you to see all of your costs within a single cloud provider, like AWS, or across multiple cloud providers (e.g. GCP + Azure).",source:"@site/docs/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/workspaces",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/workspaces.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Terraform Cloud",permalink:"/terraform_cloud_integration"}},i={},p=[{value:"Use-Cases",id:"use-cases",level:2}],u={toc:p},l="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workspaces"},"Workspaces"),(0,o.kt)("p",null,"Vantage allows you to connect multiple cloud infrastructure provider accounts to the same Vantage account. This allows you to see all of your costs within a single cloud provider, like AWS, or across multiple cloud providers (e.g. GCP + Azure)."),(0,o.kt)("p",null,"A Workspace is a way to segregate costs from individual account(s) within a provider, or across providers, into their own discrete dashboard. This allows teams to create more focused views of costs and even restrict access to costs by utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://www.vantage.sh/features/team-management"},"role-based access controls (RBAC)")," if they are subscribers of the Vantage ",(0,o.kt)("a",{parentName:"p",href:"https://www.vantage.sh/pricing"},"Enterprise plan"),"."),(0,o.kt)("p",null,'When your Vantage account is created you are assigned a "Default" workspace. You have the ability to create multiple workspaces. Each workspace is a logical grouping of cloud provider account(s) and has its own respective set of views. '),(0,o.kt)("h2",{id:"use-cases"},"Use-Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Grouping resources together multiple cloud provider accounts:")," An organization sometimes has multiple accounts within the same cloud provider. Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Grouping costs together across multiple cloud providers:")," An organization sometimes has multiple cloud providers (e.g. AWS + GCP). Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Separate costs per environment:")," Organizations separate costs based on the environment that the resources in the account relate to. A workspace per environment; grouping all production, staging and development resources into separate workspaces.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Separate costs per team:")," Organizations separate costs based on the team that utilizes the resources in an account. Separate workspaces per team, e.g., infrastructure, product, security, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Separate costs per product/service:")," Organizations separate costs based on the product or service that utilizes the resouces in an account. Separate workspaces per product/service, e.g., payment, console, admin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Separate costs per customer:")," Organizations separate costs based on customers. Separate workspaces per customer, e.g., Customer A, Customer B, Customer C, etc."))),(0,o.kt)("p",null,"When you have more than one workspace in your Vantage account a workspace menu will appear in your navigation menu for you to switch between workspaces."))}m.isMDXComponent=!0}}]);