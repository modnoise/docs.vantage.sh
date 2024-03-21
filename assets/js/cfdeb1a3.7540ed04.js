"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[3081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||l;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const l={id:"connecting_planetscale",title:"PlanetScale",description:"This page walks through how to integrate Vantage with your PlanetScale account.",keywords:["PlanetScale","Connect PlanetScale"]},r="PlanetScale",i={unversionedId:"connecting_planetscale",id:"connecting_planetscale",title:"PlanetScale",description:"This page walks through how to integrate Vantage with your PlanetScale account.",source:"@site/docs/connecting_planetscale.md",sourceDirName:".",slug:"/connecting_planetscale",permalink:"/connecting_planetscale",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_planetscale.md",tags:[],version:"current",frontMatter:{id:"connecting_planetscale",title:"PlanetScale",description:"This page walks through how to integrate Vantage with your PlanetScale account.",keywords:["PlanetScale","Connect PlanetScale"]},sidebar:"someSidebar",previous:{title:"Confluent",permalink:"/connecting_confluent"},next:{title:"Coralogix",permalink:"/connecting_coralogix"}},c={},s=[{value:"Connect Your PlanetScale Account",id:"connect-your-planetscale-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create the Connection",id:"create-the-connection",level:3},{value:"PlanetScale Reporting Dimensions",id:"planetscale-reporting-dimensions",level:2},{value:"Active Resources",id:"active-resources",level:2},{value:"Manage Workspace Access",id:"manage-workspace-access",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"planetscale"},"PlanetScale"),(0,o.kt)("p",null,"Vantage integrates with PlanetScale billing data via the PlanetScale Invoices API. Vantage connects to PlanetScale organizations through an OAuth flow, handled within the PlanetScale app. Vantage supports multiple PlanetScale organization integrations. All organizations are ingested after you connect via the OAuth flow and do not need to be individually added. After authorizing Vantage access to your PlanetScale organizations, Vantage will begin to ingest data using the PlanetScale Organizations, Invoices, and Databases endpoints."),(0,o.kt)("p",null,"The required PlanetScale scopes to connect are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User access",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"read_organizations")))),(0,o.kt)("li",{parentName:"ul"},"Organization access",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"read_organization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"read_invoices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"read_databases"))))),(0,o.kt)("p",null,"No access is granted to the actual databases themselves. Vantage can see only metadata related to the databases."),(0,o.kt)("p",null,"The Invoices endpoint provides structured cost data, broken down by service (e.g., Database or Support), category (e.g., PS-10, PS-20), and resource (e.g., the specific database). All credentials are encrypted."),(0,o.kt)("p",null,"Vantage supports Databases and Support services, as well as the following services for Branches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PS-10"),(0,o.kt)("li",{parentName:"ul"},"PS-20"),(0,o.kt)("li",{parentName:"ul"},"PS-40"),(0,o.kt)("li",{parentName:"ul"},"PS-80"),(0,o.kt)("li",{parentName:"ul"},"PS-160"),(0,o.kt)("li",{parentName:"ul"},"PS-320"),(0,o.kt)("li",{parentName:"ul"},"PS-400")),(0,o.kt)("h2",{id:"connect-your-planetscale-account"},"Connect Your PlanetScale Account"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You will need the ",(0,o.kt)("a",{parentName:"li",href:"https://planetscale.com/docs/concepts/access-control"},"Organization Admin role")," in PlanetScale to complete the connection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to connect to PlanetScale.")),(0,o.kt)("h3",{id:"create-the-connection"},"Create the Connection"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the Vantage console, navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/integrations"},"Integrations page"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"PlanetScale"),", then click ",(0,o.kt)("strong",{parentName:"li"},"Connect PlanetScale Account"),"."),(0,o.kt)("li",{parentName:"ol"},"You will be brought to the PlanetScale login screen. Log in to your account and select the organizations you want to connect with."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Authorize access"),"."),(0,o.kt)("li",{parentName:"ol"},"After you authorize a connection, on the ",(0,o.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/planetscale/"},"PlanetScale Settings")," page, you will see the status of your connection change to ",(0,o.kt)("inlineCode",{parentName:"li"},"Importing"),".")),(0,o.kt)("p",null,"Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest PlanetScale costs. Once costs are processed, they will be available on your ",(0,o.kt)("strong",{parentName:"p"},"All Resources")," Cost Report."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"PlanetScale data refreshes daily in Vantage.")),(0,o.kt)("h2",{id:"planetscale-reporting-dimensions"},"PlanetScale Reporting Dimensions"),(0,o.kt)("p",null,"On PlanetScale ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Reports"),", you can filter costs across several dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Organization"),(0,o.kt)("li",{parentName:"ul"},"Service (e.g., Database or Support)"),(0,o.kt)("li",{parentName:"ul"},"Category (e.g., PS-10, PS-20)"),(0,o.kt)("li",{parentName:"ul"},"Resource (e.g., database name)")),(0,o.kt)("p",null,"You can also view credits or discounts for PlanetScale costs in Cost Reports."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the top of any PlanetScale Cost Report, click ",(0,o.kt)("strong",{parentName:"li"},"Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Then, toggle on/off ",(0,o.kt)("strong",{parentName:"li"},"Credits")," and/or ",(0,o.kt)("strong",{parentName:"li"},"Discounts"),".")),(0,o.kt)("h2",{id:"active-resources"},"Active Resources"),(0,o.kt)("p",null,"PlanetScale databases are synced as active resources and available in ",(0,o.kt)("a",{parentName:"p",href:"/active_resources"},"resource reports"),"."),(0,o.kt)("h2",{id:"manage-workspace-access"},"Manage Workspace Access"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/workspaces#integration-workspace"},"Workspaces")," documentation for information on how to update workspace access for an integration."))}g.isMDXComponent=!0}}]);