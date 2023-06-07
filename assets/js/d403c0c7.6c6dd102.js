"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},i="Self-Service SSO",c={unversionedId:"sso",id:"sso",title:"Self-Service SSO",description:"Self-service SSO allows customers to connect their SAML Identity Provider (IdP) to their Vantage account. This allows the use of existing credentials to authenticate and access your Vantage account. SSO (Single Sign-On) streamlines the login process, since users don't need to create a new account or remember another set of login credentials for Vantage.",source:"@site/docs/sso.md",sourceDirName:".",slug:"/sso",permalink:"/sso",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/sso.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Terraform",permalink:"/terraform"},next:{title:"Team Accountability",permalink:"/team_accountability"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Connecting Your SAML IdP",id:"connecting-your-saml-idp",level:3},{value:"Enable Connection",id:"enable-connection",level:3},{value:"Disconnecting Your IdP",id:"disconnecting-your-idp",level:3},{value:"SAML Connection Example: Rippling",id:"saml-connection-example-rippling",level:3},{value:"SAML Connection Example: Okta",id:"saml-connection-example-okta",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"self-service-sso"},"Self-Service SSO"),(0,a.kt)("p",null,"Self-service SSO allows customers to connect their SAML Identity Provider (IdP) to their Vantage account. This allows the use of existing credentials to authenticate and access your Vantage account. SSO (Single Sign-On) streamlines the login process, since users don't need to create a new account or remember another set of login credentials for Vantage."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you can connect your IdP to our app, you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A valid account with a SAML Identity Provider (IdP)"),(0,a.kt)("li",{parentName:"ul"},"Owner access to Vantage"),(0,a.kt)("li",{parentName:"ul"},"Your IdP's signing certificate and sign-on url")),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started, navigate to Vantage's ",(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/account_identity_providers"},"Authentication Page")," and click on the \"New Connection\" button. You will then be prompted to select an SSO Connection type. Currently, we only support self-service connection for SAML. If you'd like to to connect one of the other supported IdP's (e.g. AzureAD, Google Workspace, or Windows Active Directory), you will need to contact support for instructions."),(0,a.kt)("h3",{id:"connecting-your-saml-idp"},"Connecting Your SAML IdP"),(0,a.kt)("p",null,"You will be prompted to copy Vantage's Single Sign-On URL and Audience URL into your your IdP's application creation process. See an example below from a popular IdP. If you'd like to add a logo to your conection's thumbnail, you can grab it from here: ",(0,a.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/assets.vantage.sh/www/vantage_avatar-social.jpg"},"Vantage Logo"),". Once you create the Vantage application within your IdP, you'll need to provide us your SAML Sign On URL the Signing Certificate. Before clicking the Configure Connection button make sure you validate your credentials. You'll be redirected back to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/account_identity_providers"},"Authentication Page"),", where you will be able to see your connection and enable it."),(0,a.kt)("p",null,"For security reasons Vantage does not support IdP-initiated sessions. You will follow the regular Vantage login flow as opposed to clicking Login to Vantage in your IdP Portal."),(0,a.kt)("h3",{id:"enable-connection"},"Enable Connection"),(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/account_identity_providers"},"Authentication Page")," you can switch the Active toggle ",(0,a.kt)("strong",{parentName:"p"},"on")," to enable the connection. Please note that you will remain logged in to Vantage, but the next time you attempt to login you will be redirected to your IdP's login page."),(0,a.kt)("p",null,"The recommended steps for testing your SSO configuration are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable the connection for your account"),(0,a.kt)("li",{parentName:"ul"},"Do not close or log out of your current session"),(0,a.kt)("li",{parentName:"ul"},"Open a private browser and visit ",(0,a.kt)("a",{parentName:"li",href:"https://console.vantage.sh"},"https://console.vantage.sh")),(0,a.kt)("li",{parentName:"ul"},"If your SSO connection is configured correctly you will be redirected to your IdP upon entering your email address"),(0,a.kt)("li",{parentName:"ul"},"If you are able to complete the login, this means your configuration is correct")),(0,a.kt)("p",null,"If you experience any issues logging in after enabling your connection, you can contact support."),(0,a.kt)("h3",{id:"disconnecting-your-idp"},"Disconnecting Your IdP"),(0,a.kt)("p",null,"If you ever need to disconnect your IdP from Vantage, you can perform that operation from the ",(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/account_identity_providers"},"Authentication Page"),". You can disable your connection with the Active toggle, or permanently remove your IdP by clicking the Delete button. After disabling/removing the connection, you will be able to log back into the app with your original Vantage password."),(0,a.kt)("h3",{id:"saml-connection-example-rippling"},"SAML Connection Example: Rippling"),(0,a.kt)("p",null,"Vantage is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.rippling.com/app-shop/app/vntg-inc-vantage"},"Rippling App Shop")," where you can find instructions for connecting your Vantage account to Rippling."),(0,a.kt)("h3",{id:"saml-connection-example-okta"},"SAML Connection Example: Okta"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Connection - Okta",src:n(2558).Z,width:"1888",height:"1072"}),"\n",(0,a.kt)("img",{alt:"App Name Settings - Okta",src:n(8001).Z,width:"1982",height:"714"}),"\n",(0,a.kt)("img",{alt:"App Connection Settings - Okta",src:n(7382).Z,width:"658",height:"603"})))}g.isMDXComponent=!0},8001:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/saml_okta_app_name-dacc74047df178e986084e4a27803138.png"},2558:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/saml_okta_new-23f9aae581596c74db40cae7fe6b674f.png"},7382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/saml_okta_settings-1f025365162b5504e7b5b3aa12c66a86.png"}}]);