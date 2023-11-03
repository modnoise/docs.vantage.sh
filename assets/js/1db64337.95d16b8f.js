"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(7462),a=r(7294),o=r(6010),s=r(2466),i=r(6550),l=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=v({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),s=r(5162);const i={id:"overview",title:"Overview",description:"View the Vantage Overview page for high-level summaries of your cost data.",keywords:["Overview","cost data summaries"]},l="Overview",u={unversionedId:"overview",id:"overview",title:"Overview",description:"View the Vantage Overview page for high-level summaries of your cost data.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/overview",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",description:"View the Vantage Overview page for high-level summaries of your cost data.",keywords:["Overview","cost data summaries"]},sidebar:"someSidebar",previous:{title:"Oracle Cloud",permalink:"/connecting_oracle"},next:{title:"Cost Reports",permalink:"/cost_reports"}},c={},d=[],p={toc:d},m="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Once you create some provider integrations, Vantage will automatically begin ingesting billing information for your account. The default landing page in the Vantage console is the ",(0,a.kt)("strong",{parentName:"p"},"Overview")," page. This page serves as an executive-level summary, providing a comprehensive snapshot of the cost metrics that matter most to you. Review widgets on the Overview page for high-level cost summaries."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{alt:"Overview page",width:"80%",src:"/img/executive-overview.png"})),(0,a.kt)("br",null),"Depending on your provider connections, you will see some of the following widgets:",(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"demand-commit",label:"Savings Plan Coverage",default:!0,mdxType:"TabItem"},"A widget that provides a clear comparison between your total on-demand vs. committed spend. This view helps you understand your expenses for on-demand resources in contrast to cost-saving strategies, like Savings Plans, Reserved Instances, Enterprise Discount Programs, and Committed Use Discounts."),(0,a.kt)(s.Z,{value:"cost-breakdown",label:"Provider Summaries",mdxType:"TabItem"},"Widgets that offer comprehensive cost breakdowns for providers. These widgets provide you with spending insights, displaying the current accrued costs and cost trends compared to the previous month."),(0,a.kt)(s.Z,{value:"cost-report",label:"Cost Reports",mdxType:"TabItem"},"A widget for each one of the ",(0,a.kt)("a",{href:"/cost_reports"},"Cost Reports")," you create. One default Cost Report will be present in your account that is referred to as ",(0,a.kt)("strong",null,"All Resources"),". As you create more Cost Reports in your account, a summary of each Cost Report will automatically show up on the Overview page.")),(0,a.kt)("hr",null))}v.isMDXComponent=!0}}]);