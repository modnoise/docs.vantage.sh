"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={description:"Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features."},i="Introduction",s={unversionedId:"index",id:"index",title:"Introduction",description:"Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/index.md",tags:[],version:"current",frontMatter:{description:"Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features."},sidebar:"someSidebar",next:{title:"Connect Providers",permalink:"/getting_started"}},c={},l=[{value:"Community Resources",id:"community-resources",level:2},{value:"EC2Instances.info",id:"ec2instancesinfo",level:3},{value:"Cloud Cost Handbook",id:"cloud-cost-handbook",level:3},{value:"AWS Cost Leaderboard",id:"aws-cost-leaderboard",level:3},{value:"Slack community",id:"slack-community",level:3},{value:"Support",id:"support",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.vantage.sh/"},"Vantage")," is a cloud cost transparency platform. Vantage aggregates cloud infrastructure costs across all cloud providers to deliver a centralized view into total cloud spend. Vantage includes multiple tools for optimizing cloud spend, including Autopilot, and provides enterprises with advanced finops workflows and cost governance."),(0,a.kt)("p",null,"It is free to get started. Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Sign Up page")," and choose an authentication method."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Vantage signup",src:n(6387).Z,width:"2210",height:"1059"})),(0,a.kt)("p",null,"Next, connect your providers by following the ",(0,a.kt)("a",{parentName:"p",href:"/getting_started/"},"connect providers instructions"),"."),(0,a.kt)("p",null,"Optionally, you can upgrade to a paid plan to unlock additional features and track higher amounts cloud infrastructure costs. View all of our features and pricing ",(0,a.kt)("a",{parentName:"p",href:"https://www.vantage.sh/pricing"},"here"),". If you have a monthly bill of greater than $2,500 USD per month, you will be required to utilize a paid plan. All paid plans have an option to trial the service before committing to a subscription."),(0,a.kt)("h2",{id:"community-resources"},"Community Resources"),(0,a.kt)("p",null,"Vantage maintains a variety of resources to help make the lives of cloud practictioners easier. All of the resources below are free to use and open source when possible."),(0,a.kt)("h3",{id:"ec2instancesinfo"},"EC2Instances.info"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://instances.vantage.sh/"},"EC2Instances.info")," is a site dedicated to making it simple and intuitive to look up the cost of an EC2 instance on AWS. Due to the number of EC2 instance types and the differing price per region and avilability zone, there are over a million possible permutations of pricing for a resource. EC2Instances.info was built to help users quickly narrow down the resource that are applicable to their situation and compare pricing."),(0,a.kt)("h3",{id:"cloud-cost-handbook"},"Cloud Cost Handbook"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://handbook.vantage.sh/"},"Cloud Cost Handbook")," is a free, open-source, community-supported set of guides meant to help explain the complex pricing of public cloud infrastructure and service providers in easy-to-understand terms. This guide is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vantage-sh/handbook"},"hosted on Github")," and is open to anyone to contribute their knowledge to the community."),(0,a.kt)("h3",{id:"aws-cost-leaderboard"},"AWS Cost Leaderboard"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://leaderboard.vantage.sh/"},"AWS Cost Leaderboard")," is a site showing a rank list of AWS services that customers spend the most on. Vantage provides this anonymized and aggregated data to the community in order to shed light on cloud infrastructure costs."),(0,a.kt)("h3",{id:"slack-community"},"Slack community"),(0,a.kt)("p",null,"While the documentation here is meant to help answer any questions, you're also welcome to join our Slack community to join the discussion and ask questions. You can join the Slack community ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/vantagecommunity/shared_invite/zt-1szz6puz7-zRuJ8J4OJIiBFlcTobYZXA"},"here"),"."),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"If you need help with anything please feel free to reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."))}d.isMDXComponent=!0},6387:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/signup-e688c63e362775314595dff1c7e4dd25.png"}}]);