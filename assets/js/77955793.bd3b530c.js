/*! For license information please see 77955793.bd3b530c.js.LICENSE.txt */
(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[9468],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,v=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5570:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>g,toc:()=>v});var a=n(7462),r=n(7294),i=n(3905);const o=e=>{let{content:t,image:n,link:a,alt:i,newTab:o}=e;return r.createElement("div",{className:"card"},r.createElement("a",{href:a,className:"card-link",target:o?"_blank":"_self",rel:"noopener noreferrer"},r.createElement("div",{className:"card-image"},r.createElement("img",{src:n,alt:i})),r.createElement("div",{className:"card-content"},r.createElement("p",null,t))))};var s=n(4051),l=n(1555);const c=function(e){let{cards:t,columns:n}=e;const a=n,i=Math.ceil(t.length/a),c=[];for(let u=0;u<i;u++){for(let e=0;e<i;e++){const n=e*a,i=n+a,u=t.slice(n,i),p=r.createElement(s.Z,{xs:4,md:4,className:"g-4 intro-card-row"},u.map(((e,t)=>r.createElement(l.Z,{key:t,className:"intro-card-col"},r.createElement(o,{content:e.content,image:e.image,link:e.link,alt:e.alt,newTab:e.newTab})))));c.push(p)}return r.createElement("div",{className:"card-group"},c)}},u={title:"Vantage University",description:"Vantage University is a suite of training videos and user education to help you get started with Vantage.",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,image:"/img/vantage-university/vantage-university.jpg",keywords:["Vantage University"]},p="\ud83c\udf93 Vantage University",g={unversionedId:"vantage_university",id:"vantage_university",title:"Vantage University",description:"Vantage University is a suite of training videos and user education to help you get started with Vantage.",source:"@site/docs/vantage_university.md",sourceDirName:".",slug:"/vantage_university",permalink:"/vantage_university",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/vantage_university.md",tags:[],version:"current",frontMatter:{title:"Vantage University",description:"Vantage University is a suite of training videos and user education to help you get started with Vantage.",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,image:"/img/vantage-university/vantage-university.jpg",keywords:["Vantage University"]},sidebar:"someSidebar"},d={},v=[],y={toc:v},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-vantage-university"},"\ud83c\udf93 Vantage University"),(0,i.kt)("div",{style:{display:"flex",flexWrap:"wrap"}},(0,i.kt)("div",{style:{flex:1,padding:"10px",minWidth:"300px"}},(0,i.kt)("h2",null,"Observability, Visibility, Optimization"),(0,i.kt)("p",null,"Vantage is an observability, visibility, and optimization tool that provides you with clear insights into your cloud cost data. Create reports and dashboards, monitor your costs for anomalies, and view recommendations for how to optimize your resources. Vantage has multiple provider integrations to help you view all your cloud costs in one place."),(0,i.kt)("h2",null,"Welcome to Vantage University!"),(0,i.kt)("p",null,"Select a topic below to explore Vantage features. Each topic includes a set of video lessons that you can follow along with as you get set up in your own Vantage account. With each topic, you'll be provided with a list of additional resources to help you navigate the console.")),(0,i.kt)("div",{style:{flex:1,padding:"15px",minWidth:"300px"}},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/Y9fJ1IPBleQ?si=Jqd7EkuqWczRhkg?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1",allowFullScreen:!0,style:{width:"100%",height:"350px",borderRadius:"10px",border:"8px solid #d3d3d3"}}))),(0,i.kt)("hr",null),(0,i.kt)(c,{cards:[{content:(0,i.kt)("ul",null,(0,i.kt)("li",null,"Create a new workspace"),(0,i.kt)("li",null,"Navigate through your workspaces")),image:"/img/vantage-university/account-management.jpg",link:"./vantage_university_account_management",newTab:!1,alt:"Vantage University logo with Account Management as a title"},{content:(0,i.kt)("ul",null,(0,i.kt)("li",null,"Create and view Cost Reports"),(0,i.kt)("li",null,"Create detailed Cost Report filters")),image:"/img/vantage-university/cost-reporting.jpg",link:"./vantage_university_cost_reporting",newTab:!1,alt:"Vantage University logo with Cost Reporting as a title"},{content:(0,i.kt)("ul",null,(0,i.kt)("li",null,"Create a segment hierarchy"),(0,i.kt)("li",null,"Explore virtual tagging")),image:"/img/vantage-university/cost-allocation.jpg",link:"./vantage_university_cost_allocation",newTab:!1,alt:"Vantage University logo with Cost Allocation as a title"},{content:(0,i.kt)("ul",null,(0,i.kt)("li",null,"View and create anomaly alerts"),(0,i.kt)("li",null,"Review and act on cost recommendations")),image:"/img/vantage-university/observability.jpg",link:"./vantage_university_observability",newTab:!1,alt:"Vantage University logo with Observability as a title"},{content:(0,i.kt)("ul",null,(0,i.kt)("li",null,"Understand unit costs"),(0,i.kt)("li",null,"View and analyze business metrics")),image:"/img/vantage-university/unit-costs.jpg",link:"./vantage_university_unit_costs",newTab:!1,alt:"Vantage University logo with Unit Costs as a title"},{content:(0,i.kt)("ul",null,(0,i.kt)("li",null,"Create a cost budget"),(0,i.kt)("li",null,"Configure budget alerts")),image:"/img/vantage-university/budgeting.jpg",link:"./vantage_university_budgeting",newTab:!1,alt:"Vantage University logo with Budgeting as a title"}],columns:3,mdxType:"VantageUGroup"}))}m.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},1555:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(4184),r=n.n(a),i=n(7294),o=n(6792),s=n(5893);const l=i.forwardRef(((e,t)=>{const[{className:n,...a},{as:i="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,o.vE)(t,"col");const i=(0,o.pi)(),s=(0,o.zG)(),l=[],c=[];return i.forEach((e=>{const n=a[e];let r,i,o;delete a[e],"object"==typeof n&&null!=n?({span:r,offset:i,order:o}=n):r=n;const u=e!==s?`-${e}`:"";r&&l.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=o&&c.push(`order${u}-${o}`),null!=i&&c.push(`offset${u}-${i}`)})),[{...a,className:r()(n,...l,...c)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,s.jsx)(i,{...a,ref:t,className:r()(n,!c.length&&l)})}));l.displayName="Col";const c=l},4051:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(4184),r=n.n(a),i=n(7294),o=n(6792),s=n(5893);const l=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},i)=>{const l=(0,o.vE)(e,"row"),c=(0,o.pi)(),u=(0,o.zG)(),p=`${l}-cols`,g=[];return c.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const r=e!==u?`-${e}`:"";null!=n&&g.push(`${p}${r}-${n}`)})),(0,s.jsx)(n,{ref:i,...a,className:r()(t,l,...g)})}));l.displayName="Row";const c=l},6792:(e,t,n)=>{"use strict";n.d(t,{pi:()=>u,vE:()=>c,zG:()=>p});var a=n(7294);n(5893);const r=["xxl","xl","lg","md","sm","xs"],i="xs",o=a.createContext({prefixes:{},breakpoints:r,minBreakpoint:i}),{Consumer:s,Provider:l}=o;function c(e,t){const{prefixes:n}=(0,a.useContext)(o);return e||n[t]||t}function u(){const{breakpoints:e}=(0,a.useContext)(o);return e}function p(){const{minBreakpoint:e}=(0,a.useContext)(o);return e}},5251:(e,t,n)=>{"use strict";n(7418);var a=n(7294),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:o.current}}t.jsx=c},5893:(e,t,n)=>{"use strict";e.exports=n(5251)}}]);