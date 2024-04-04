"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,g=u["".concat(c,".").concat(m)]||u[m]||k[m]||o;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={id:"workspaces",title:"Workspaces",description:"This page describes how to view and create Workspaces in the console.",keywords:["workspaces"]},s="Workspaces",i={unversionedId:"workspaces",id:"workspaces",title:"Workspaces",description:"This page describes how to view and create Workspaces in the console.",source:"@site/docs/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/workspaces",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/workspaces.md",tags:[],version:"current",frontMatter:{id:"workspaces",title:"Workspaces",description:"This page describes how to view and create Workspaces in the console.",keywords:["workspaces"]},sidebar:"someSidebar",previous:{title:"Role-Based Access Control (RBAC)",permalink:"/rbac"},next:{title:"Virtual Tagging",permalink:"/virtual_tagging"}},c={},l=[{value:"Workspace Use Cases",id:"workspace-use-cases",level:2},{value:"Create a Workspace",id:"create-a-workspace",level:2},{value:"Manage Workspaces",id:"manage-workspaces",level:2},{value:"Manage Workspace Provider Integrations",id:"integration-workspace",level:2},{value:"Navigate between Workspaces",id:"navigate-between-workspaces",level:2}],p={toc:l},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"workspaces"},"Workspaces"),(0,n.kt)("p",null,"In Vantage, you have the flexibility to link multiple cloud infrastructure provider accounts to a single Vantage account. With this feature, you can view your expenses within a single cloud provider, such as AWS, or across multiple cloud providers, like GCP and Azure."),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"Workspace")," is a way to separate costs from individual account(s) within a provider, or across providers, into individual dashboards. Teams can then create more focused views of costs and even restrict access to costs by using ",(0,n.kt)("a",{parentName:"p",href:"/rbac"},"Role-Based Access Controls (RBAC)")," if they are subscribers of the Vantage ",(0,n.kt)("a",{parentName:"p",href:"https://www.vantage.sh/pricing"},"Enterprise plan"),"."),(0,n.kt)("h2",{id:"workspace-use-cases"},"Workspace Use Cases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Use Case")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grouping resources together for multiple accounts within a cloud provider"),(0,n.kt)("td",{parentName:"tr",align:null},"An organization sometimes has multiple accounts within the same cloud provider. Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grouping costs together across multiple cloud providers"),(0,n.kt)("td",{parentName:"tr",align:null},"An organization sometimes has multiple cloud providers (e.g., AWS and GCP). Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Separate costs per environment"),(0,n.kt)("td",{parentName:"tr",align:null},"Organizations categorize expenses by associating them with the specific environment to which the resources in the account belong. This is achieved by creating a distinct workspace for each environment, effectively grouping all production, staging, and development resources into separate workspaces.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Separate costs per team"),(0,n.kt)("td",{parentName:"tr",align:null},"Organizations separate costs based on the team that uses the resources in an account. Separate workspaces per team (e.g., infrastructure, product, security).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Separate costs per product/service"),(0,n.kt)("td",{parentName:"tr",align:null},"Organizations separate costs based on the product or service that uses the resources in an account. Separate workspaces per product/service (e.g., payment, console, admin).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Separate costs per customer"),(0,n.kt)("td",{parentName:"tr",align:null},"Organizations separate costs based on customers. Separate workspaces per customer (e.g., Customer A, Customer B, Customer C).")))),(0,n.kt)("h2",{id:"create-a-workspace"},"Create a Workspace"),(0,n.kt)("p",null,"When your Vantage account is created you are assigned a ",(0,n.kt)("strong",{parentName:"p"},"Default")," workspace. You can create multiple workspaces. Each workspace is a logical grouping of cloud provider account(s) and has its own respective set of views."),(0,n.kt)("p",null,"To create a new workspace, account Owners can complete the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation menu, navigate to the ",(0,n.kt)("a",{parentName:"li",href:"https://console.vantage.sh/account/profile"},(0,n.kt)("strong",{parentName:"a"},"Settings"))," page."),(0,n.kt)("li",{parentName:"ol"},"On the left menu, under ",(0,n.kt)("strong",{parentName:"li"},"General Settings"),", click ",(0,n.kt)("strong",{parentName:"li"},"Workspaces"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create a Workspace"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Name")," for your new workspace (e.g., ",(0,n.kt)("em",{parentName:"li"},"Management"),"), then click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("h2",{id:"manage-workspaces"},"Manage Workspaces"),(0,n.kt)("p",null,"On the ",(0,n.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/workspaces"},(0,n.kt)("strong",{parentName:"a"},"Workspaces")," Settings")," screen, you can select a workspace and then perform the following actions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Turn off ",(0,n.kt)("strong",{parentName:"li"},"Active Resource Syncing"),". Turn off automatic syncing if you do not want Vantage to be automatically pulling active resource details from your account. This option is useful if you find Vantage is making too many API calls to your AWS endpoints."),(0,n.kt)("li",{parentName:"ul"},"View Team workspace access. See the ",(0,n.kt)("a",{parentName:"li",href:"/rbac"},"Role-Based Access Control")," documentation for more information about teams."),(0,n.kt)("li",{parentName:"ul"},"View configuration details for the workspace, including workspace API token."),(0,n.kt)("li",{parentName:"ul"},"Delete workspace.",(0,n.kt)("admonition",{parentName:"li",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Note that this action is not reversible.")))),(0,n.kt)("h2",{id:"integration-workspace"},"Manage Workspace Provider Integrations"),(0,n.kt)("p",null,"To manage the workspaces associated with an integration:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Settings"),"."),(0,n.kt)("li",{parentName:"ol"},"From the left navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Integrations"),"."),(0,n.kt)("li",{parentName:"ol"},"Click the settings icon (looks like a wheel) next to the integration in the list. The integration page is displayed."),(0,n.kt)("li",{parentName:"ol"},"Click the settings icon next to an account."),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Workspace Access")," select or deselect the checkbox next to a listed workspace to specify which workspaces the integration is associated with.")),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"The integration workspace is displayed with an arrow pointing from the settings icon. The arrow points to the integration screen with another arrow point from the settings icon. That arrow points to the specific integration and the Workspace access section.",width:"100%",src:"/img/integration-workspace.png"})),(0,n.kt)("h2",{id:"navigate-between-workspaces"},"Navigate between Workspaces"),(0,n.kt)("p",null,"When you have more than one workspace in your Vantage account, a workspace menu will appear in the top-left corner of the console to switch between workspaces. Select any of the workspaces from the list."))}k.isMDXComponent=!0}}]);