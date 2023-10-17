/*! For license information please see c377a04b.51c2d2e0.js.LICENSE.txt */
(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6971],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6283:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>C,default:()=>S,frontMatter:()=>O,metadata:()=>E,toc:()=>P});var o=n(7462),r=n(7294),a=n(3905);const s=e=>{let{title:t,content:n,image:o,link:a,alt:s}=e;return r.createElement("div",{className:"card"},r.createElement("a",{href:a,className:"card-link",target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:"card-image"},r.createElement("img",{src:o,alt:s})),r.createElement("div",{className:"card-title"},r.createElement("h2",null,t)),r.createElement("div",{className:"card-content"},r.createElement("p",null,n))))};var i=n(4184),c=n.n(i),l=n(5893);const u=["xxl","xl","lg","md","sm","xs"],d="xs",p=r.createContext({prefixes:{},breakpoints:u,minBreakpoint:d}),{Consumer:m,Provider:g}=p;function f(e,t){const{prefixes:n}=(0,r.useContext)(p);return e||n[t]||t}function h(){const{breakpoints:e}=(0,r.useContext)(p);return e}function y(){const{minBreakpoint:e}=(0,r.useContext)(p);return e}const v=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...o},r)=>{const a=f(e,"row"),s=h(),i=y(),u=`${a}-cols`,d=[];return s.forEach((e=>{const t=o[e];let n;delete o[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const r=e!==i?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,l.jsx)(n,{ref:r,...o,className:c()(t,a,...d)})}));v.displayName="Row";const b=v;const k=r.forwardRef(((e,t)=>{const[{className:n,...o},{as:r="div",bsPrefix:a,spans:s}]=function({as:e,bsPrefix:t,className:n,...o}){t=f(t,"col");const r=h(),a=y(),s=[],i=[];return r.forEach((e=>{const n=o[e];let r,c,l;delete o[e],"object"==typeof n&&null!=n?({span:r,offset:c,order:l}=n):r=n;const u=e!==a?`-${e}`:"";r&&s.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=l&&i.push(`order${u}-${l}`),null!=c&&i.push(`offset${u}-${c}`)})),[{...o,className:c()(n,...s,...i)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,l.jsx)(r,{...o,ref:t,className:c()(n,!s.length&&a)})}));k.displayName="Col";const w=k;const x=function(e){let{cards:t,columns:n}=e;const o=n,a=Math.ceil(t.length/o),i=[];for(let c=0;c<a;c++){for(let e=0;e<a;e++){const n=e*o,a=n+o,c=t.slice(n,a),l=r.createElement(b,{xs:4,md:4,className:"g-4 custom-card-row"},c.map(((e,t)=>r.createElement(w,{key:t,className:"custom-card-col"},r.createElement(s,{title:e.title,content:e.content,image:e.image,link:e.link,alt:e.alt})))));i.push(l)}return r.createElement("div",{className:"card-group"},i)}},O={title:"Vantage Documentation",description:"Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features.",hide_table_of_contents:!0,pagination_next:null},C='Vantage <span class="text-gradient">Documentation</span>',E={unversionedId:"index",id:"index",title:"Vantage Documentation",description:"Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/index.md",tags:[],version:"current",frontMatter:{title:"Vantage Documentation",description:"Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features.",hide_table_of_contents:!0,pagination_next:null},sidebar:"someSidebar"},_={},P=[{value:"Additional and Community Resources",id:"additional-and-community-resources",level:2}],j={toc:P},N="wrapper";function S(e){let{components:t,...n}=e;return(0,a.kt)(N,(0,o.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vantage-documentation"},"Vantage ",(0,a.kt)("span",{class:"text-gradient"},"Documentation")),(0,a.kt)("p",null,"Vantage is a cloud cost transparency platform that aggregates cloud infrastructure costs across providers to deliver a centralized view into total cloud spend. Vantage includes multiple tools for optimizing cloud spend and provides enterprises with advanced FinOps workflows and cost governance."),(0,a.kt)("p",null,"It's free to get started \u2014 navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vantage.sh/signup"},"Sign Up page")," and choose an authentication method."),(0,a.kt)(x,{cards:[{title:"Integrations",content:"Get started creating an integration with a number of cloud providers.",image:"/img/docs-site-card-integrations.png",link:"./getting_started",alt:"Diagram of cloud providers integrating with Vantage"},{title:"Cost Reports",content:"Create your first Cost Report in the Vantage console. Create budgets, forecasts, and annotations all within your Cost Report.",image:"/img/docs-site-card-cost-report.png",link:"./cost_reports",alt:"Cost Reports in the Vantage console"},{title:"Terraform Provider",content:"Use Vantage's Terraform provider to automate your Vantage cloud cost infrastructure.",image:"../../img/docs-site-card-terraform.png",link:"./terraform",alt:"Terraform icon"}],columns:3,mdxType:"IntroCardGroup"}),(0,a.kt)("h2",{id:"additional-and-community-resources"},"Additional and Community Resources"),(0,a.kt)("p",null,"Vantage maintains a variety of resources to help make the lives of cloud practitioners easier. All the resources below are free to use and open source when possible."),(0,a.kt)(x,{cards:[{title:"API Documentation",content:"The Vantage API makes it easy for you to programmatically access and read your cloud pricing data. Automate the management and creation of cost reporting resources as well as programmatically create reports and filters. View the API docs to get started.",image:"../../img/docs-site-card-api.png",link:"https://vantage.readme.io/reference/general",alt:"API icon"},{title:"EC2Instances.info",content:"Simplifies the complex task of pricing EC2 instances on AWS. With over a million pricing permutations due to instance types, regions, and availability zones, the site streamlines the process, enabling users to quickly find and compare the best resources for their needs.",image:"/img/docs-site-card-ec2.png",link:"http://instances.vantage.sh/",alt:"Menu icon"},{title:"AWS Cost Leaderboard",content:"A ranked list of AWS services that customers spend the most on. Vantage provides this anonymized and aggregated data to the community to shed light on cloud infrastructure costs.",image:"../../img/docs-site-card-leaderboard.png",link:"https://leaderboard.vantage.sh/",alt:"Scoreboard icon"},{title:"Cloud Cost Handbook",content:"An open-source set of guides meant to help explain the complex pricing of public cloud infrastructure and service providers in easy-to-understand terms. This guide is hosted on GitHub and is open to anyone to contribute their knowledge to the community.",image:"../../img/docs-site-card-handbook.png",link:"http://handbook.vantage.sh/",alt:"Handbook icon"},{title:"Slack Community",content:"While the documentation here is meant to help answer any questions, you're also welcome to join our Slack community to add to the discussion and ask questions.",image:"../../img/docs-site-card-slack.png",link:"https://join.slack.com/t/vantagecommunity/shared_invite/zt-1szz6puz7-zRuJ8J4OJIiBFlcTobYZXA",alt:"Slack icon"},{title:"Cloud Cost Reports",content:"Vantage uses anonymized data from thousands of connected accounts to snapshot industry spending patterns. View our quarterly Cloud Cost Reports to analyze trends over time.",image:"../../img/docs-site-card-cloud-cost-report.png",link:"https://www.vantage.sh/cloud-cost-report",alt:"Report icon"}],columns:3,mdxType:"IntroCardGroup"}),(0,a.kt)("admonition",{title:"Vantage Support",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you need help with anything, please feel free to reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),".")))}S.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},5251:(e,t,n)=>{"use strict";n(7418);var o=n(7294),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;r=a("react.element"),a("react.fragment")}var s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:s.current}}t.jsx=l},5893:(e,t,n)=>{"use strict";e.exports=n(5251)}}]);