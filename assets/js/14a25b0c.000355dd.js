"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),g=n,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"azure_supported_services",title:"Azure Services & Regions",description:"This page provides information about supported Azure services and regions.",keywords:["Azure"]},s="Azure Services & Regions",p={unversionedId:"azure_supported_services",id:"azure_supported_services",title:"Azure Services & Regions",description:"This page provides information about supported Azure services and regions.",source:"@site/docs/azure_supported_services.md",sourceDirName:".",slug:"/azure_supported_services",permalink:"/azure_supported_services",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/azure_supported_services.md",tags:[],version:"current",frontMatter:{id:"azure_supported_services",title:"Azure Services & Regions",description:"This page provides information about supported Azure services and regions.",keywords:["Azure"]},sidebar:"someSidebar",previous:{title:"Azure",permalink:"/connecting_azure"},next:{title:"Google Cloud",permalink:"/connecting_gcp"}},i={},l=[{value:"Support Services",id:"support-services",level:2},{value:"Supported Regions",id:"supported-regions",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-services--regions"},"Azure Services & Regions"),(0,n.kt)("h2",{id:"support-services"},"Support Services"),(0,n.kt)("p",null,"Vantage will show 100% of your organization's accrued costs across all services. We also offer per-resource pricing for the following services using custom logic to query APIs for each individual Azure service. While we support per-resource pricing for the most popular services, we do not offer support for all Azure services by default."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To request new service support on Vantage, please email ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),' with the subject line "New Azure Service Support." Please include a detailed description about what information you\'d like to see.')),(0,n.kt)("p",null,"Below is a list of currently supported Azure services for Active Resources. Vantage only maintains read-only access to the Azure APIs for these resources:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Description/Supported Resources"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App Service"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports App Service plans.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Application Gateway"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Application Gateway and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Backup"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Recovery Services vaults.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Cache for Redis"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Redis caches.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Compute"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports compute snapshots.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Container Registry"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Container Registry and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Cosmos DB"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Cosmos database account resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Databricks"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Databricks workspaces.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Database for PostgreSQL"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports PostgreSQL Single Server and Flexible Server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure ExpressRoute"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports ExpressRoute circuits.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Firewall"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Azure Firewall and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Kubernetes Service (AKS)"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports AKS managed clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Monitor Application Insights"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Application Insights components.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Monitor Log Analytics"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Log Analytics workspaces.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure SQL"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports SQL databases, SQL managed instances, and Azure SQL Database elastic pools.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Storage accounts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Synapse Analytics"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Synapse workspaces.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Virtual Machines"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports virtual machine resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Virtual Network"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports NAT gateways and Virtual Machine Scale Sets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Domain name"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports domain name resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Load Balancer"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Load Balancer and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Logic Apps"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Logic Apps workflows.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Microsoft Defender for Cloud"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports security pricing configurations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Power BI Embedded"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Power BI Dedicated Capacity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Private endpoint connections"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports private endpoint connection resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Public IP address"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports public IP address resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Virtual network gateway"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports virtual network gateway resources.")))),(0,n.kt)("h2",{id:"supported-regions"},"Supported Regions"),(0,n.kt)("p",null,"Vantage can sync resources from all Azure regions with external connectivity."))}d.isMDXComponent=!0}}]);