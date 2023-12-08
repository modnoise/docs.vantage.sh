/*! For license information please see 8278.96b6f419.js.LICENSE.txt */
(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[8278],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>f,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=n,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||s;return t?a.createElement(m,o(o({ref:r},f),{},{components:t})):a.createElement(m,o({ref:r},f))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4184:(e,r)=>{var t;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var o=n.apply(null,t);o&&e.push(o)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)a.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()},3680:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var a=t(4184),n=t.n(a),s=t(7294),o=t(5893);const i=["as","disabled"];function c({tagName:e,disabled:r,href:t,target:a,rel:n,role:s,onClick:o,tabIndex:i=0,type:c}){e||(e=null!=t||null!=a||null!=n?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:r},l];const f=a=>{(r||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&a.preventDefault(),r?a.stopPropagation():null==o||o(a)};return"a"===e&&(t||(t="#"),r&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:i,href:t,target:"a"===e?a:void 0,"aria-disabled":r||void 0,rel:"a"===e?n:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},l]}const l=s.forwardRef(((e,r)=>{let{as:t,disabled:a}=e,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);const[s,{tagName:l}]=c(Object.assign({tagName:t,disabled:a},n));return(0,o.jsx)(l,Object.assign({},n,s,{ref:r}))}));l.displayName="Button";var f=t(6792);const d=s.forwardRef((({as:e,bsPrefix:r,variant:t="primary",size:a,active:s=!1,disabled:i=!1,className:l,...d},u)=>{const p=(0,f.vE)(r,"btn"),[m,{tagName:v}]=c({tagName:e,disabled:i,...d}),b=v;return(0,o.jsx)(b,{...m,...d,ref:u,disabled:i,className:n()(l,p,s&&"active",t&&`${p}-${t}`,a&&`${p}-${a}`,d.href&&i&&"disabled")})}));d.displayName="Button";const u=d},956:(e,r,t)=>{"use strict";t.d(r,{Z:()=>S});var a=t(4184),n=t.n(a),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef((({className:e,bsPrefix:r,as:t="div",...a},s)=>(r=(0,o.vE)(r,"card-body"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));c.displayName="CardBody";const l=c,f=s.forwardRef((({className:e,bsPrefix:r,as:t="div",...a},s)=>(r=(0,o.vE)(r,"card-footer"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));f.displayName="CardFooter";const d=f,u=s.createContext(null);u.displayName="CardHeaderContext";const p=u,m=s.forwardRef((({bsPrefix:e,className:r,as:t="div",...a},c)=>{const l=(0,o.vE)(e,"card-header"),f=(0,s.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,i.jsx)(p.Provider,{value:f,children:(0,i.jsx)(t,{ref:c,...a,className:n()(r,l)})})}));m.displayName="CardHeader";const v=m,b=s.forwardRef((({bsPrefix:e,className:r,variant:t,as:a="img",...s},c)=>{const l=(0,o.vE)(e,"card-img");return(0,i.jsx)(a,{ref:c,className:n()(t?`${l}-${t}`:l,r),...s})}));b.displayName="CardImg";const y=b,x=s.forwardRef((({className:e,bsPrefix:r,as:t="div",...a},s)=>(r=(0,o.vE)(r,"card-img-overlay"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));x.displayName="CardImgOverlay";const N=x,g=s.forwardRef((({className:e,bsPrefix:r,as:t="a",...a},s)=>(r=(0,o.vE)(r,"card-link"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));g.displayName="CardLink";const j=g,O=e=>s.forwardRef(((r,t)=>(0,i.jsx)("div",{...r,ref:t,className:n()(r.className,e)}))),h=O("h6"),w=s.forwardRef((({className:e,bsPrefix:r,as:t=h,...a},s)=>(r=(0,o.vE)(r,"card-subtitle"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));w.displayName="CardSubtitle";const P=w,E=s.forwardRef((({className:e,bsPrefix:r,as:t="p",...a},s)=>(r=(0,o.vE)(r,"card-text"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));E.displayName="CardText";const C=E,$=O("h5"),k=s.forwardRef((({className:e,bsPrefix:r,as:t=$,...a},s)=>(r=(0,o.vE)(r,"card-title"),(0,i.jsx)(t,{ref:s,className:n()(e,r),...a}))));k.displayName="CardTitle";const R=k,_=s.forwardRef((({bsPrefix:e,className:r,bg:t,text:a,border:s,body:c=!1,children:f,as:d="div",...u},p)=>{const m=(0,o.vE)(e,"card");return(0,i.jsx)(d,{ref:p,...u,className:n()(r,m,t&&`bg-${t}`,a&&`text-${a}`,s&&`border-${s}`),children:c?(0,i.jsx)(l,{children:f}):f})}));_.displayName="Card";const S=Object.assign(_,{Img:y,Title:R,Subtitle:P,Body:l,Link:j,Text:C,Header:v,Footer:d,ImgOverlay:N})},1555:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var a=t(4184),n=t.n(a),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef(((e,r)=>{const[{className:t,...a},{as:s="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:r,className:t,...a}){r=(0,o.vE)(r,"col");const s=(0,o.pi)(),i=(0,o.zG)(),c=[],l=[];return s.forEach((e=>{const t=a[e];let n,s,o;delete a[e],"object"==typeof t&&null!=t?({span:n,offset:s,order:o}=t):n=t;const f=e!==i?`-${e}`:"";n&&c.push(!0===n?`${r}${f}`:`${r}${f}-${n}`),null!=o&&l.push(`order${f}-${o}`),null!=s&&l.push(`offset${f}-${s}`)})),[{...a,className:n()(t,...c,...l)},{as:e,bsPrefix:r,spans:c}]}(e);return(0,i.jsx)(s,{...a,ref:r,className:n()(t,!l.length&&c)})}));c.displayName="Col";const l=c},4051:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var a=t(4184),n=t.n(a),s=t(7294),o=t(6792),i=t(5893);const c=s.forwardRef((({bsPrefix:e,className:r,as:t="div",...a},s)=>{const c=(0,o.vE)(e,"row"),l=(0,o.pi)(),f=(0,o.zG)(),d=`${c}-cols`,u=[];return l.forEach((e=>{const r=a[e];let t;delete a[e],null!=r&&"object"==typeof r?({cols:t}=r):t=r;const n=e!==f?`-${e}`:"";null!=t&&u.push(`${d}${n}-${t}`)})),(0,i.jsx)(t,{ref:s,...a,className:n()(r,c,...u)})}));c.displayName="Row";const l=c},6792:(e,r,t)=>{"use strict";t.d(r,{pi:()=>f,vE:()=>l,zG:()=>d});var a=t(7294);t(5893);const n=["xxl","xl","lg","md","sm","xs"],s="xs",o=a.createContext({prefixes:{},breakpoints:n,minBreakpoint:s}),{Consumer:i,Provider:c}=o;function l(e,r){const{prefixes:t}=(0,a.useContext)(o);return e||t[r]||r}function f(){const{breakpoints:e}=(0,a.useContext)(o);return e}function d(){const{minBreakpoint:e}=(0,a.useContext)(o);return e}},5251:(e,r,t)=>{"use strict";t(7418);var a=t(7294),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),s("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var a,s={},l=null,f=null;for(a in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,a)&&!c.hasOwnProperty(a)&&(s[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===s[a]&&(s[a]=r[a]);return{$$typeof:n,type:e,key:l,ref:f,props:s,_owner:o.current}}r.jsx=l},5893:(e,r,t)=>{"use strict";e.exports=t(5251)}}]);