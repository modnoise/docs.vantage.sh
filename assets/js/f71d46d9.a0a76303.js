"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[8134],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(g,s(s({ref:n},u),{},{components:t})):a.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},s="Savings Planner",i={unversionedId:"savings_planner",id:"savings_planner",title:"Savings Planner",description:"Savings Planner is a forecasting and modeling tool that allows you to see what your on-demand versus committed spend is within your organization and see what the impact would be for purchasing different types of Savings Plans in your account. Vantage will process Cost and Usage Report data to analyze every single instance hour running in your account and has built up a pricing database with millions of different price permutations to calculate your exact savings rate across different EC2 instance types, Lambda functions and Fargate Services.",source:"@site/docs/savings_planner.md",sourceDirName:".",slug:"/savings_planner",permalink:"/savings_planner",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/savings_planner.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Autopilot",permalink:"/autopilot"},next:{title:"Active Resources",permalink:"/active_resources"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"savings-planner"},"Savings Planner"),(0,r.kt)("p",null,"Savings Planner is a forecasting and modeling tool that allows you to see what your on-demand versus committed spend is within your organization and see what the impact would be for purchasing different types of Savings Plans in your account. Vantage will process Cost and Usage Report data to analyze every single instance hour running in your account and has built up a pricing database with millions of different price permutations to calculate your exact savings rate across different EC2 instance types, Lambda functions and Fargate Services."),(0,r.kt)("p",null,"This data is kept up-to-date as often as a Cost and Usage Report is processed which is typically every 7-8 hours. This allows you to always have the most accurrate view of your infrastructure data and corresponding savings. You can also arbitrarily change future expected compute spend either up ","[or down]"," to see what the impact would be on your savings plan and reserved instance coverage vesus on-demand."),(0,r.kt)("p",null,'Savings Planner allows you to create "Models" with these scenarios which can be shared with everyone on your team and referenced at future times to analyze. '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of Savings Planner",src:t(856).Z,width:"2211",height:"1448"})))}d.isMDXComponent=!0},856:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/savings_planner-73cd5d130482a6de8d3c6003b2bc1bb5.png"}}]);