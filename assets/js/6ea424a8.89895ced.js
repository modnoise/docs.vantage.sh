"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[2606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},l="GCP Billing Exports",i={unversionedId:"enabling_gcp_billing_export",id:"enabling_gcp_billing_export",title:"GCP Billing Exports",description:"This is streamlined version of Google Cloud's official documentation",source:"@site/docs/enabling_gcp_billing_export.md",sourceDirName:".",slug:"/enabling_gcp_billing_export",permalink:"/enabling_gcp_billing_export",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/enabling_gcp_billing_export.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"GCP Permissions",permalink:"/permissions_gcp"},next:{title:"Setup Kubernetes",permalink:"/connecting_kubernetes"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Select or Create a project",id:"select-or-create-a-project",level:2},{value:"Create a BigQuery dataset",id:"create-a-bigquery-dataset",level:2},{value:"Enable Cloud Billing export to the BigQuery dataset",id:"enable-cloud-billing-export-to-the-bigquery-dataset",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gcp-billing-exports"},"GCP Billing Exports"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is streamlined version of ",(0,r.kt)("a",{parentName:"strong",href:"https://cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"},"Google Cloud's official documentation"))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User with permissions to create a project"),(0,r.kt)("li",{parentName:"ul"},"User with permissions to create a BigQuery dataset"),(0,r.kt)("li",{parentName:"ul"},"User with permissions to modify Billing settings")),(0,r.kt)("h2",{id:"select-or-create-a-project"},"Select or Create a project"),(0,r.kt)("p",null,"Before you enable Cloud Billing data export, you will need a project to store the data."),(0,r.kt)("p",null,"The project needs to be linked to the same Cloud Billing account that you plan to enable Cloud Billing data export on. If you need help assigning a project to a Cloud Billing account, you can follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/billing/docs/how-to/modify-project#confirm_billing_is_enabled_on_a_project"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recommendation:")," We recommend that you create a dedicated project to store all Cloud Billing data rather than using an existing project."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If you have multiple Cloud Billing accounts, you will need to enable Cloud Billing Export on each one individually.")),(0,r.kt)("h2",{id:"create-a-bigquery-dataset"},"Create a BigQuery dataset"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to the Google Cloud Console and go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"BigQuery page"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Project")," drop-down list at the top of the console, select the project you set up to contain your Cloud Billing data")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Explorer")," panel, click the ",(0,r.kt)("strong",{parentName:"p"},"three vertical dots")," button next to your project ID")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create dataset")," button"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Dataset ID"),'. We recommend an ID that spans projects, such as "all_billing_data", rather than a project-specific ID')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a ",(0,r.kt)("strong",{parentName:"p"},"Data location"),". Choose either ",(0,r.kt)("inlineCode",{parentName:"p"},"us (multiple regions in United States)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"eu (multiple regions in European Union)"),". One of these two options is required for enabling detailed usage cost data")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave the ",(0,r.kt)("strong",{parentName:"p"},"Enable table expiration")," checkbox ",(0,r.kt)("strong",{parentName:"p"},"unchecked")," to ensure that data never expires.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("strong",{parentName:"p"},"Encryption option")," to Google-managed key. Note: Customer-managed key encryption is not supported for exporting Cloud Billing data records to BigQuery")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To save, click the ",(0,r.kt)("strong",{parentName:"p"},"Create dataset")," button"))))),(0,r.kt)("h2",{id:"enable-cloud-billing-export-to-the-bigquery-dataset"},"Enable Cloud Billing export to the BigQuery dataset"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the console ",(0,r.kt)("strong",{parentName:"p"},"Navigation menu"),", and then select ",(0,r.kt)("strong",{parentName:"p"},"Billing"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Billing navigation menu"),", select ",(0,r.kt)("strong",{parentName:"p"},"Billing export"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the BigQuery export tab (this tab is selected by default)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Detailed usage cost"),", click the ",(0,r.kt)("strong",{parentName:"p"},"Edit settings")," button"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Projects")," list, select the project you set up to contain your billing data")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Dataset ID")," field, select the dataset that you set up to contain your exported Cloud Billing data")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Save")," button"))))),(0,r.kt)("p",null,"Congrats! Your Cloud Billing data will now begin stored in the BigQuery dataset you created. To continue connecting your GCP account to Vantage, return to the instructions ",(0,r.kt)("a",{parentName:"p",href:"/connecting_gcp/#creating-a-gcp-data-integration"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: It typically takes a few hours for data to start appearing. Cloud Billing data is added retroactively for the current and previous month when detailed usage cost data is configured. Full data for the current and previous month can take 24-48 hours to fully propagate.")))}g.isMDXComponent=!0}}]);