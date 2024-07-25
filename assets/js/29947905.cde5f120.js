"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[5962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"gcp_supported_services",title:"GCP Services & Regions",description:"This page provides information about supported GCP services and regions.",keywords:["GCP"]},s="GCP Services & Regions",i={unversionedId:"gcp_supported_services",id:"gcp_supported_services",title:"GCP Services & Regions",description:"This page provides information about supported GCP services and regions.",source:"@site/docs/gcp_supported_services.md",sourceDirName:".",slug:"/gcp_supported_services",permalink:"/gcp_supported_services",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/gcp_supported_services.md",tags:[],version:"current",frontMatter:{id:"gcp_supported_services",title:"GCP Services & Regions",description:"This page provides information about supported GCP services and regions.",keywords:["GCP"]},sidebar:"someSidebar",previous:{title:"Configure GCP Billing Exports",permalink:"/enabling_gcp_billing_export"},next:{title:"Kubernetes",permalink:"/connecting_kubernetes"}},p={},l=[{value:"Supported Services",id:"supported-services",level:2},{value:"Supported Regions",id:"supported-regions",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gcp-services--regions"},"GCP Services & Regions"),(0,a.kt)("h2",{id:"supported-services"},"Supported Services"),(0,a.kt)("p",null,"Vantage will show 100% of your organization's accrued costs across all services. Vantage also offers per-resource pricing for the following services using custom logic to query APIs for each GCP service. While Vantage supports per-resource pricing for many popular services, some services are not currently supported."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To request new service support on Vantage, email ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," with the subject line of ",(0,a.kt)("em",{parentName:"p"},"New GCP Service Support"),". Include as much information as you can about the data you want to see.")),(0,a.kt)("p",null,"Below is a list of currently supported GCP services for ",(0,a.kt)("a",{parentName:"p",href:"/active_resources"},"active resources"),". Vantage maintains read-only access to the GCP APIs for these resources."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Description/Supported Resources"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud App Engine"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud App Engine services.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud BigQuery"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud BigQuery instances.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Bigtable"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Bigtable instances.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Compute"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Compute engines and disks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Dataflow"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Dataflow jobs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Firestore"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Firestore databases.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Logging"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Logging buckets.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Spanner"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Spanner instances.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud SQL"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud SQL instances.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Storage"),(0,a.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for Cloud Storage buckets.")))),(0,a.kt)("h2",{id:"supported-regions"},"Supported Regions"),(0,a.kt)("p",null,"Vantage can sync resources from all GCP regions with external connectivity."))}d.isMDXComponent=!0}}]);