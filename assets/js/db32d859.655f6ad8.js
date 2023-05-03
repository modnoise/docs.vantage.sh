"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),h=o,y=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return a?r.createElement(y,n(n({ref:t},u),{},{components:a})):r.createElement(y,n({ref:t},u))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var l=2;l<s;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const s={},n="Security",i={unversionedId:"security",id:"security",title:"Security",description:"As an infrastructure tool that requires access to your cloud provider we understand there may be questions, concerns and necessary clarification around our own infrastructure, processes and procedures. We as developers on Vantage are also customers of Vantage to more closely align our security concerns with those of our customers.",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/security",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/security.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Self-Service SSO",permalink:"/sso"},next:{title:"Vantage Account",permalink:"/vantage_account"}},c={},l=[{value:"Read-only Billing Access",id:"read-only-billing-access",level:2},{value:"Cross Account IAM Roles on AWS",id:"cross-account-iam-roles-on-aws",level:3},{value:"Customizing Cross Account Role Permissions",id:"customizing-cross-account-role-permissions",level:2},{value:"Data Revocation",id:"data-revocation",level:2},{value:"Data Sharing",id:"data-sharing",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security"},"Security"),(0,o.kt)("p",null,"As an infrastructure tool that requires access to your cloud provider we understand there may be questions, concerns and necessary clarification around our own infrastructure, processes and procedures. We as developers on Vantage are also customers of Vantage to more closely align our security concerns with those of our customers."),(0,o.kt)("h2",{id:"read-only-billing-access"},"Read-only Billing Access"),(0,o.kt)("p",null,"Vantage uses read-only service accounts, service roles, API keys, and other read-only means to access billing data across all of the integrations we use. This means we don't store sensitive information like account access keys and access key secrets to use Vantage. Should you have any other questions please feel free to email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@vantage.sh"},"security@vantage.sh"),"."),(0,o.kt)("h3",{id:"cross-account-iam-roles-on-aws"},"Cross Account IAM Roles on AWS"),(0,o.kt)("p",null,'Vantage leverages something called Cross Account IAM Roles to sync information about your infrastructure resources. This method is the AWS recommended approach and is detailed in depth by AWS here for you to learn more. When you grant access to your AWS account to Vantage by running the provided CloudFormation stack, it creates a cross account role with in-line policies selected by Vantage. These policies are a trimmed down version of the policies in the AWS-managed "ReadOnlyAccess" policy but we\'ve removed actions that would otherwise allow us to access sensitive information in databases, buckets and certain services. Our CloudFormation template is open source and hosted publicly here for transparency.'),(0,o.kt)("h2",{id:"customizing-cross-account-role-permissions"},"Customizing Cross Account Role Permissions"),(0,o.kt)("p",null,"Vantage requests various in-line read-only permissions when creating the cross account role on your behalf. However, we understand this can be too broad of a permission set for certain use-cases. As a result, we do allow for creating Cross Account IAM roles with whatever permissions you're comfortable with. It is important to understand that as a result of narrowing the scope of the permissions Vantage has certain functionality that will be limited."),(0,o.kt)("p",null,"If you email ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," in advance of that we are happy to facilitate provisioning your account with a custom role prior to then. Please note that we will provide you with some custom attributes to associate with your Cross Account Role to prevent against the Confused Deputy problem so please contact Vantage support prior to creating your role."),(0,o.kt)("h2",{id:"data-revocation"},"Data Revocation"),(0,o.kt)("p",null,"In your account settings page you have the ability to revoke the Cross Account IAM Role at any time. Automatically and nearly instantly, Vantage will delete all data associated with that Cross Account IAM Role. It doesn't remove your set of custom Vantage Views created - however all of those views will be empty as there are no resources."),(0,o.kt)("p",null,"In your account settings page you also have the ability to delete your account. Upon deleting your account all data is deleted."),(0,o.kt)("h2",{id:"data-sharing"},"Data Sharing"),(0,o.kt)("p",null,"We do not share any data externally. We do not sell or share any user data with any third parties."),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Vantage perform penetration tests periodically?")),(0,o.kt)("p",null,"Yes. Vantage has outsourced pentetration tests to a third party that regularly performs these tests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Vantage hold any security certifications such as SOC2, ISO27001?")),(0,o.kt)("p",null,"Yes. Vantage is SOC2 Type 2 certified. To request a copy of our report please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://vantage.sh/security"},"Vantage Security Page"),". We believe that we already roughly adhere to the standards set forth in ISO27001."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In terms of application security, How does Vantage deal with security reports received from security researchers? In other words, does Vantage have a bug bounty program or a straightforward process to report security issues to them?")),(0,o.kt)("p",null,"Vantage receives reports through an email address of ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@vantage.sh."},"security@vantage.sh.")," We review every single report that we receive. We do not have a formal bug bounty program but we do have a process and set of policies and standards we adhere to to process security requests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Vantage support 2FA, SSO, or any defensive options?")),(0,o.kt)("p",null,"Yes. We support ",(0,o.kt)("a",{parentName:"p",href:"/sso"},"SAML SSO")," and 2FA is on the roadmap."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How is customers\u2019 data protected and who has access to Vantage data?")),(0,o.kt)("p",null,"All data is encrypted in transit and at rest. Only a subset of senior employees have access to data on the Vantage side. Who on the Vantage team has access to customer data is regularly reviewed and revised by the team."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do you have a list of third parties that Vantage uses and explains what each third party is allowed to access and its purpose?")),(0,o.kt)("p",null,"We use a subset of third parties largely for analytics, support and payment processing. There is no PII sent to third parties and no cost data is shared with third parties. A list of third parties is listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mixpanel - Customer analytics"),(0,o.kt)("li",{parentName:"ul"},"Segment - Customer analytics"),(0,o.kt)("li",{parentName:"ul"},"Customer.io - Customer communications"),(0,o.kt)("li",{parentName:"ul"},"Hubspot - Sales management"),(0,o.kt)("li",{parentName:"ul"},"Intercom - Support management"),(0,o.kt)("li",{parentName:"ul"},"Stripe - Payment processing")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do you have a security contact person in case of breaches?")),(0,o.kt)("p",null,"A team responds to messages at security ","[at]"," vantage.sh. Upon request a security employee can be temporarily assigned to your account as well."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In terms of logging, Do you log access activities of Vantage\u2019s employees who access to the data?")),(0,o.kt)("p",null,"Yes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Vantage store any information regarding cloud infrastructure in the database?")),(0,o.kt)("p",null,"Yes. We store basic metadata on cloud infrastructure in order to be able to show corresponding costs for associated resources. We do not have the ability to access any of the underlying resources."))}d.isMDXComponent=!0}}]);