"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[4098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={},o="VQL (Vantage Query Language)",s={unversionedId:"vql",id:"vql",title:"VQL (Vantage Query Language)",description:"Introduction",source:"@site/docs/vql.md",sourceDirName:".",slug:"/vql",permalink:"/vql",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/vql.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Workspaces",permalink:"/workspaces"}},i={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Schema",id:"schema",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Combining Providers",id:"combining-providers",level:3},{value:"Cost Allocation",id:"cost-allocation",level:3},{value:"Per Resource Costs",id:"per-resource-costs",level:3},{value:"Filtering by Tag",id:"filtering-by-tag",level:3},{value:"Get Marketplace Transactions",id:"get-marketplace-transactions",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vql-vantage-query-language"},"VQL (Vantage Query Language)"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The Vantage Query Language (VQL) is a SQL-like language for filtering cloud cost data. It includes a normalized schema across cloud providers and basic filter syntax for creating complex filters."),(0,n.kt)("p",null,"VQL is currently available as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://vantage.readme.io/v2.0/reference/general"},"Vantage API"),". On supported endpoints, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"/cost_reports")," you can include VQL snippets in the ",(0,n.kt)("inlineCode",{parentName:"p"},"filter")," parameter to programmatically create and fetch cost reports."),(0,n.kt)("p",null,"For example, the following API call would create a ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports#saved-filters"},"saved filter")," in your Vantage account using VQL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n     --url https://api.vantage.sh/v2/saved_filters \\\n     --header \'content-type: application/json\' \\\n     --header \'authorization: Bearer <ACCESS_TOKEN>\' \\\n     --data @- <<EOF\n{\n  "filter": "(costs.provider = \'aws\' AND costs.service = \'Amazon Relational Database Service\') OR costs.provider = \'kubernetes\'",\n  "title": "RDS and Kubernetes",\n  "workspace_token": "wrkspc_abcde12345"\n}\nEOF\n')),(0,n.kt)("h2",{id:"schema"},"Schema"),(0,n.kt)("p",null,"VQL contains two namespaces representative of the filters which are available in the Vantage console."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,n.kt)("th",{parentName:"tr",align:null},"Field"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"costs"),(0,n.kt)("td",{parentName:"tr",align:null},"provider",(0,n.kt)("br",null),"allocation",(0,n.kt)("br",null),"region",(0,n.kt)("br",null),"marketplace",(0,n.kt)("br",null),"account_id",(0,n.kt)("br",null),"provider_account_id",(0,n.kt)("br",null),"service",(0,n.kt)("br",null),"category",(0,n.kt)("br",null),"subcategory",(0,n.kt)("br",null),"resource_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tags"),(0,n.kt)("td",{parentName:"tr",align:null},"name",(0,n.kt)("br",null),"value")))),(0,n.kt)("p",null,"Different providers have different fields available. For a full listing of available fields please consult the ",(0,n.kt)("a",{parentName:"p",href:"/data_dictionary"},"data dictionary"),"."),(0,n.kt)("h2",{id:"keywords"},"Keywords"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AND"),(0,n.kt)("td",{parentName:"tr",align:null},"Logical and")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OR"),(0,n.kt)("td",{parentName:"tr",align:null},"Logical or")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IN"),(0,n.kt)("td",{parentName:"tr",align:null},"Compare against array list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LIKE"),(0,n.kt)("td",{parentName:"tr",align:null},"String comparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NOT"),(0,n.kt)("td",{parentName:"tr",align:null},"Negation")))),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"You can think of VQL in its current iteration as the ",(0,n.kt)("inlineCode",{parentName:"p"},"WHERE")," clause of a SQL query. By combining the schema and keywords above with parentheses you can form complex filter operations such as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'mongo' AND costs.allocation = 1.0 AND (costs.service = 'REALM' AND costs.resource_id IN ('s3')) OR (costs.provider = 'aws' AND costs.allocation = 1.0 AND costs.account_id IN ('123456798'))\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The following examples cover common use cases for VQL."),(0,n.kt)("h3",{id:"combining-providers"},"Combining Providers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'mongo' OR costs.provider = 'aws'\n")),(0,n.kt)("h3",{id:"cost-allocation"},"Cost Allocation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.allocation = 0.5\n")),(0,n.kt)("h3",{id:"per-resource-costs"},"Per Resource Costs"),(0,n.kt)("p",null,"Resource costs require both ",(0,n.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," in addition to the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource_id")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id IN ('arn:aws:rds:us-east-1:123456789:db:primary-01', 'arn:aws:rds:us-east-1:123456789:db:primary-02')\n")),(0,n.kt)("h3",{id:"filtering-by-tag"},"Filtering by Tag"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'production'\n")),(0,n.kt)("h3",{id:"get-marketplace-transactions"},"Get Marketplace Transactions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"costs.provider = 'aws' AND costs.marketplace = true\n")))}d.isMDXComponent=!0}}]);