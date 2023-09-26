"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[7266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Cost Recommendations",s={unversionedId:"cost_recommendations",id:"cost_recommendations",title:"Cost Recommendations",description:"After connecting your infrastructure to Vantage, the system will profile your account for cost recommendations which you can implement to lower your bill. These recommendations are currently available for AWS, Azure, and Datadog.",source:"@site/docs/cost_recommendations.md",sourceDirName:".",slug:"/cost_recommendations",permalink:"/cost_recommendations",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/cost_recommendations.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Segments",permalink:"/segments"},next:{title:"Data Dictionary",permalink:"/data_dictionary"}},c={},l=[{value:"Types of Recommendations",id:"types-of-recommendations",level:2},{value:"Viewing Recommendations during a Trial",id:"viewing-recommendations-during-a-trial",level:2},{value:"Provider Specific Recommendations",id:"provider-specific-recommendations",level:2},{value:"AWS",id:"aws",level:3},{value:"Azure",id:"azure",level:3},{value:"Datadog",id:"datadog",level:3}],d={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cost-recommendations"},"Cost Recommendations"),(0,o.kt)("p",null,"After connecting your infrastructure to Vantage, the system will profile your account for ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/recommendations"},"cost recommendations")," which you can implement to lower your bill. These recommendations are currently available for AWS, Azure, and Datadog."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{alt:"Filtering Cost Reports",width:"100%",src:"/img/cost-recommendations-screen.png"})),(0,o.kt)("h2",{id:"types-of-recommendations"},"Types of Recommendations"),(0,o.kt)("p",null,"Which recommendations you see depends on what services and resources are running in your account. In general, there are three types of recommendations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Custom built recommendations implemented by Vantage engineers"),(0,o.kt)("li",{parentName:"ul"},"Cross provider recommendations where a service from another provider could be used"),(0,o.kt)("li",{parentName:"ul"},"Cloud provider recommendations which are gathered from the connected provider and further enriched")),(0,o.kt)("h2",{id:"viewing-recommendations-during-a-trial"},"Viewing Recommendations during a Trial"),(0,o.kt)("p",null,"The specific recommendations are blurred out during your trial, although the total amount of potential savings and percentage impact to your bill is shown. After subscribing to Vantage, these recommendations are shown in full. As you make changes to your infrastructure they are automatically updated. Recommendations are refreshed once a day."),(0,o.kt)("p",null,"At any point you may archive a recommendation and it will be shown in the archive tab."),(0,o.kt)("h2",{id:"provider-specific-recommendations"},"Provider Specific Recommendations"),(0,o.kt)("p",null,"Which recommendations are available on which providers is generally a function of the granularity of data exposed by the provider. Notes on AWS, Azure, and Datadog follow."),(0,o.kt)("h3",{id:"aws"},"AWS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Savings Plans: Vantage will look at your AWS infrastructure on a weekly basis and provide Savings Plans recommendations tailored to your actual usage of EC2, Fargate and Lambda."),(0,o.kt)("li",{parentName:"ul"},"Reserved Instances: Vantage will recommend reserved instances for services like RDS, Elasticache, ElasticSearch and more with specific reserved instances to purchase."),(0,o.kt)("li",{parentName:"ul"},"Stranded Resources: Vantage will look for stranded resources such as EBS Volumes, IP addresses and more to ensure you've cleaned up everything you're not using."),(0,o.kt)("li",{parentName:"ul"},"Storage Optimizations: Vantage will look at EBS Volumes you're using to provide optimization recommendations as well as S3 object type usage to recommend things like changing EBS volumes or enabling S3 Intelligent Tiering."),(0,o.kt)("li",{parentName:"ul"},"Networking Optimizations: Especially for CloudFront and S3."),(0,o.kt)("li",{parentName:"ul"},"Lifecycle Policies: Services which can auto-delete data to reduce costs will be profiled and expected savings found.")),(0,o.kt)("h3",{id:"azure"},"Azure"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{alt:"Filtering Cost Reports",width:"70%",src:"/img/azure-cost-recs.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compute Reserved Instances"),(0,o.kt)("li",{parentName:"ul"},"Compute Unattached Virtual Hard Disks (Disks which have not been attached to a VM in the last 30 days)")),(0,o.kt)("h3",{id:"datadog"},"Datadog"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{alt:"Filtering Cost Reports",width:"70%",src:"/img/datadog-cost-recs.png"})),(0,o.kt)("p",null,"For Datadog we provide recommendations for making commitments for Datadog services where ",(0,o.kt)("a",{parentName:"p",href:"https://handbook.vantage.sh/datadog/committed-use-discounts/"},"committed use discounts")," are offered. These recommendations are based on your actual usage of Datadog services to assist with making the right commitment."))}u.isMDXComponent=!0}}]);