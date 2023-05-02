"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i="Terraform",s={unversionedId:"terraform",id:"terraform",title:"Terraform",description:"Vantage offers a Terraform provider for making it easy to get up and running with Vantage. The Vantage Terraform provider currently allows registered users across all Vantage tiers to create the primitives needed to broker a connection with AWS -- which is essentially creating a Cross Account IAM Role and the creation of a Cost and Usage Report. That being said, we've been getting requests for expanding the suite of primitives the provider supports so that all aspects of Vantage (Cost Report creation, Budget creation, etc.) can be automated and managed via Terraform.",source:"@site/docs/terraform.md",sourceDirName:".",slug:"/terraform",permalink:"/terraform",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Find Hidden Costs",permalink:"/hidden_costs"},next:{title:"Vantage Account",permalink:"/vantage_account"}},l={},p=[{value:"Setup and Connection",id:"setup-and-connection",level:2},{value:"Future Primitive Support",id:"future-primitive-support",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terraform"},"Terraform"),(0,n.kt)("p",null,"Vantage offers a Terraform provider for making it easy to get up and running with Vantage. The Vantage Terraform provider ",(0,n.kt)("em",{parentName:"p"},"currently")," allows registered users across all Vantage tiers to create the primitives needed to broker a connection with AWS -- which is essentially creating a Cross Account IAM Role and the creation of a Cost and Usage Report. That being said, we've been getting requests for expanding the suite of primitives the provider supports so that all aspects of Vantage (Cost Report creation, Budget creation, etc.) can be automated and managed via Terraform. "),(0,n.kt)("h2",{id:"setup-and-connection"},"Setup and Connection"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Vantage Terraform provider is currently only available for AWS IAM Role creation but is being expanded to other primitives listed below. ")),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest"},"Vantage Integrations Module")," to link your AWS and Vantage accounts. Below is an example of adding a member account without a CUR integration. Additional documentation can be found on the ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest"},"Terraform Registry"),"."),(0,n.kt)("p",null,'This results in the creation of an IAM Role which Vantage can "assume" to ingest cost and resource metadata to display within the Vantage console. '),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "aws" {\n  region = "us-east-1"\n  assume_role {\n    role_arn = "arn:aws:iam::123456789012:role/admin-:ew\n    role"\n  }\n}\n\nmodule "vantage-integration" {\n  source  = "vantage-sh/vantage-integration/aws"\n}\n')),(0,n.kt)("h2",{id:"future-primitive-support"},"Future Primitive Support"),(0,n.kt)("p",null,"Vantage is in process of exapnding the ",(0,n.kt)("a",{parentName:"p",href:"https://vantage.readme.io/reference/general"},"Vantage API")," which the Terraform provider ultimately is running through. Brokering an AWS IAM role creation is supported today and the list of primitives that the provider will ultimately support is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cost_reports"},"Cost Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cost_reports#saved-filters"},"Saved Filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/segments"},"Segments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/budgets"},"Budgets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/per_unit_costs#importing-business-metrics"},"Business Metrics"))),(0,n.kt)("p",null,"These capabilities help engineering teams ",(0,n.kt)("strong",{parentName:"p"},"fully automate cost reporting")," in Vantage through some of the following use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build cost reports for hundreds of teams stored in another source of truth (database, Github, etc.)"),(0,n.kt)("li",{parentName:"ul"},"Integrate thousands of AWS accounts"),(0,n.kt)("li",{parentName:"ul"},"Push company metrics to Vantage"),(0,n.kt)("li",{parentName:"ul"},"Sync and update budgets")),(0,n.kt)("p",null,"To request further features, please open an issue on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vantage-sh/terraform-aws-vantage-integration"},"Github")," or us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."))}m.isMDXComponent=!0}}]);