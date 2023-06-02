"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||n;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={},s="Forecasting",c={unversionedId:"forecasting",id:"forecasting",title:"Forecasting",description:"For every Cost Report, Vantage will produce a forecast of where your costs are expected to be by the end of the current month. These forecasts are based off of your account's actual cost data and produced from a Vantage-developed machine learning model that is trained anonymously from all Vantage customers to be as accurate as possible.",source:"@site/docs/forecasting.md",sourceDirName:".",slug:"/forecasting",permalink:"/forecasting",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/forecasting.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Autopilot",permalink:"/autopilot"},next:{title:"Segments",permalink:"/segments"}},i={},l=[{value:"AWS Service Forecasts",id:"aws-service-forecasts",level:2},{value:"Forecast Generation",id:"forecast-generation",level:2},{value:"Forecasts for Member Accounts, Tags, or Regions",id:"forecasts-for-member-accounts-tags-or-regions",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forecasting"},"Forecasting"),(0,o.kt)("p",null,"For every Cost Report, Vantage will produce a forecast of where your costs are expected to be by the end of the current month. These forecasts are based off of your account's actual cost data and produced from a Vantage-developed machine learning model that is trained anonymously from all Vantage customers to be as accurate as possible."),(0,o.kt)("p",null,"Vantage gives a range of an upper-expected-band and a lower-expected-band with a median forecast that is the middle of these two ranges. This forecast is updated daily as new cost data arrives."),(0,o.kt)("p",null,"Below is a picture of an example Cost Forecast."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example Cost Forecast",src:r(1453).Z,width:"969",height:"938"})),(0,o.kt)("h2",{id:"aws-service-forecasts"},"AWS Service Forecasts"),(0,o.kt)("p",null,"In addition to seeing forecasts in aggregate for Cost Reports, you can also see a per AWS service cost forecast by clicking the rows in the table below. This will show you forecasts for each individual AWS service."),(0,o.kt)("h2",{id:"forecast-generation"},"Forecast Generation"),(0,o.kt)("p",null,"Forecasts take some time to generate - typically within 10 minutes but is dependent on the amount of data composing a Cost Report. If you don't see a forecast being generated temporarily after creating your account or creating a new Cost Report check back in after about 10-15 minutes and it should appear."),(0,o.kt)("h2",{id:"forecasts-for-member-accounts-tags-or-regions"},"Forecasts for Member Accounts, Tags, or Regions"),(0,o.kt)("p",null,"Forecasts are generated for every ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Report"),". As a result, if you would like to see a forecast for a specific member account, tag or region you can simply create a Cost Report with the dimensions you desire and a forecast will be generated accordingly."))}f.isMDXComponent=!0},1453:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/forecasting-cadd557b33fc13992d494ecbfa39939b.png"}}]);