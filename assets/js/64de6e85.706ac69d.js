"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[9800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"connecting_gcp",title:"Google Cloud",description:"This page walks through how to connect your GCP account to Vantage.",keywords:["GCP","Google Cloud Platform"]},i="Google Cloud",l={unversionedId:"connecting_gcp",id:"connecting_gcp",title:"Google Cloud",description:"This page walks through how to connect your GCP account to Vantage.",source:"@site/docs/connecting_gcp.md",sourceDirName:".",slug:"/connecting_gcp",permalink:"/connecting_gcp",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_gcp.md",tags:[],version:"current",frontMatter:{id:"connecting_gcp",title:"Google Cloud",description:"This page walks through how to connect your GCP account to Vantage.",keywords:["GCP","Google Cloud Platform"]},sidebar:"someSidebar",previous:{title:"Azure Services & Regions",permalink:"/azure_supported_services"},next:{title:"Configure GCP Billing Exports",permalink:"/enabling_gcp_billing_export"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Connection",id:"create-a-connection",level:2},{value:"Step 1: Grant the Vantage Service Account Permission to Access BigQuery",id:"service-account-permissions",level:3},{value:"Step 2: Grant the Vantage Service Account Permission to Access the BigQuery Dataset",id:"bigquery-permissions",level:3},{value:"Step 3: Add Your GCP Configuration Information to the Vantage Console",id:"gcp-config-info",level:3},{value:"Feature Availability and Resource Costs",id:"feature-availability-and-resource-costs",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud"},"Google Cloud"),(0,o.kt)("p",null,"Vantage uses a ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"service account")," to integrate with your GCP account. The service account is generated on a per-customer basis. Vantage requests extremely basic and limited permissions for GCP. During the integration process, you will grant the service account access ",(0,o.kt)("em",{parentName:"p"},"only")," to the specific BigQuery dataset that contains your billing data."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you start the integration process, you will need to complete the following prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a project to store your Cloud Billing export data."),(0,o.kt)("li",{parentName:"ul"},"Create a BigQuery dataset to store your Cloud Billing export data."),(0,o.kt)("li",{parentName:"ul"},"Enable Cloud Billing export.")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/enabling_gcp_billing_export/"},"GCP Cloud Billing export")," instructions for details on how to complete the above steps. Then, return to this page to complete the rest of the integration process."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your organization enforces domain restrictions in organization policies, you can add the following organization ID to allow Vantage access: ",(0,o.kt)("inlineCode",{parentName:"p"},"421856710303"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you have a pre-existing Cloud Billing export")," set up, ensure your configuration adheres to the requirements below before moving further."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your project is linked to the same Cloud Billing account that the Cloud Billing export is enabled on.",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend you create a dedicated project to store all Cloud Billing data, rather than using an existing project."))),(0,o.kt)("li",{parentName:"ul"},"Detailed Billing Export is enabled, ",(0,o.kt)("em",{parentName:"li"},"not")," Standard Billing Export."),(0,o.kt)("li",{parentName:"ul"},"The BigQuery dataset and table are deployed to either ",(0,o.kt)("strong",{parentName:"li"},"US (multiple regions in United States)")," or ",(0,o.kt)("strong",{parentName:"li"},"EU (multiple regions in European Union)"),"."),(0,o.kt)("li",{parentName:"ul"},"If you have multiple Cloud Billing accounts, you will need to enable Cloud Billing exports on each account.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your GCP billing data is typically displayed in a currency other than USD, Vantage will convert it to USD using the ",(0,o.kt)("inlineCode",{parentName:"p"},"currency_conversion_rate")," field in the Cloud Billing export data.")),(0,o.kt)("h2",{id:"create-a-connection"},"Create a Connection"),(0,o.kt)("p",null,"Open a new browser tab, and navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/gcp"},"Vantage GCP Settings page"),". You should see your customer-specific service account displayed at the top of the integration page. Keep this page open."),(0,o.kt)("h3",{id:"service-account-permissions"},"Step 1: Grant the Vantage Service Account Permission to Access BigQuery"),(0,o.kt)("p",null,"Back in GCP, navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/iam"},"IAM console"),", and complete the steps below to grant the Vantage service account permission to access BigQuery."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the top of the IAM console, select the project that hosts the BigQuery dataset with your Cloud Billing export data."),(0,o.kt)("li",{parentName:"ol"},"Configure the following permission:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the center of the page, under ",(0,o.kt)("strong",{parentName:"li"},'Permissions for project "My Project ABCD"'),", click ",(0,o.kt)("strong",{parentName:"li"},"+ GRANT ACCESS"),".",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"GCP project permissions menu",width:"80%",src:"/img/connect-gcp/gcp-project-permissions-menu.png"})," "))),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"New principals")," field, under ",(0,o.kt)("strong",{parentName:"li"},"Add principals"),", paste the value for your Vantage service account. This value is the one displayed on the ",(0,o.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/gcp"},"Vantage GCP Integration page")," you opened earlier."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Role")," field, under ",(0,o.kt)("strong",{parentName:"li"},"Assign roles"),", search for and select ",(0,o.kt)("strong",{parentName:"li"},"BigQuery Job User"),".",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"Grant GCP project access",width:"80%",src:"/img/connect-gcp/gcp-grant-project-access.png"})," "))))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"SAVE"),".")),(0,o.kt)("h3",{id:"bigquery-permissions"},"Step 2: Grant the Vantage Service Account Permission to Access the BigQuery Dataset"),(0,o.kt)("p",null,"Go back to ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"BigQuery"),", and complete the steps below to grant the Vantage service account permission to access the BigQuery dataset."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the top of the BigQuery console, ensure the project that you set up to contain your billing data is selected."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Explorer")," panel, select your project to expand it."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"three vertical dots")," next to the dataset name, then click ",(0,o.kt)("strong",{parentName:"li"},"Open"),". The ",(0,o.kt)("strong",{parentName:"li"},"Dataset info")," will be displayed on the right. ",(0,o.kt)("em",{parentName:"li"},"Keep this screen open to later obtain your project ID and dataset name.")),(0,o.kt)("li",{parentName:"ol"},"Select the three vertical dots next to the dataset name again, then click ",(0,o.kt)("strong",{parentName:"li"},"Share"),".",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"BigQuery share dataset menu",width:"80%",src:"/img/connect-gcp/gcp-share-dataset.png"})," "),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("strong",null,"project-id-123456")," is the project and ",(0,o.kt)("strong",null,"all_billing_data")," is the dataset."))),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Share permissions")," panel that appears on the right, click ",(0,o.kt)("strong",{parentName:"li"},"+ ADD PRINCIPAL"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"New principals")," field, under ",(0,o.kt)("strong",{parentName:"li"},"Add principals"),", search for and select the Vantage service account.",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Copy the full name of your service account from the Vantage console into the search field to search for it."))),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Role")," field, under ",(0,o.kt)("strong",{parentName:"li"},"Assign roles"),", search for and select ",(0,o.kt)("strong",{parentName:"li"},"BigQuery Data Viewer"),".",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"Grant BigQuery dataset access",width:"80%",src:"/img/connect-gcp/gcp-grant-dataset-access.png"})," "))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"SAVE"),".")),(0,o.kt)("h3",{id:"gcp-config-info"},"Step 3: Add Your GCP Configuration Information to the Vantage Console"),(0,o.kt)("p",null,"Keep BigQuery open in one of your browser tabs. Go back to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/gcp"},"Vantage GCP Integration page")," to complete the integration process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the bottom of the Vantage GCP Integration page, click ",(0,o.kt)("strong",{parentName:"li"},"Add Project Info"),". A pop-up is displayed, which requires your Billing account ID, the project ID for the project that hosts the BigQuery dataset, and the BigQuery dataset name."),(0,o.kt)("li",{parentName:"ol"},"To obtain your ",(0,o.kt)("strong",{parentName:"li"},"Billing Account ID"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/billing"},(0,o.kt)("strong",{parentName:"a"},"GCP Billing")),"."),(0,o.kt)("li",{parentName:"ul"},"Copy the value for your billing account, displayed in the ",(0,o.kt)("strong",{parentName:"li"},"Billing account ID")," column. It will look something like ",(0,o.kt)("inlineCode",{parentName:"li"},"1234AB-123456-7ABC12"),".",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"GCP Billing account ID screen",width:"80%",src:"/img/connect-gcp/gcp-billing-account-id.png"})," "))))),(0,o.kt)("li",{parentName:"ol"},"To obtain your ",(0,o.kt)("strong",{parentName:"li"},"Project ID hosting BigQuery dataset")," and ",(0,o.kt)("strong",{parentName:"li"},"BigQuery Dataset Name"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Dataset info")," screen of BigQuery (previously opened in step 3 of the last section), observe the value on the ",(0,o.kt)("strong",{parentName:"li"},"Dataset ID")," line.",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"BigQuery dataset details",width:"80%",src:"/img/connect-gcp/gcp-dataset-id.png"})," "))),(0,o.kt)("li",{parentName:"ul"},"Copy everything before the period. For example, in ",(0,o.kt)("strong",{parentName:"li"},"project-id-123456.all_billing_data"),", copy only ",(0,o.kt)("strong",{parentName:"li"},"project-id-123456"),". Paste this in the ",(0,o.kt)("strong",{parentName:"li"},"Project ID hosting BigQuery dataset")," field in Vantage."),(0,o.kt)("li",{parentName:"ul"},"Copy everything after the period and paste it in the ",(0,o.kt)("strong",{parentName:"li"},"BigQuery Dataset Name")," field in Vantage. (For example, in ",(0,o.kt)("strong",{parentName:"li"},"project-id-123456.all_billing_data"),", copy ",(0,o.kt)("strong",{parentName:"li"},"all_billing_data"),".)",(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view example image"),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"Vantage console configuration",width:"80%",src:"/img/connect-gcp/gcp-vantage-console.png"})," "))))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect Account"),".")),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It typically takes a few hours for data to start appearing. Cloud Billing data is added retroactively for the current and previous month when detailed usage cost data is configured. Full data for the current and previous month can take 24\u201348 hours to fully propagate.")),(0,o.kt)("h2",{id:"feature-availability-and-resource-costs"},"Feature Availability and Resource Costs"),(0,o.kt)("p",null,"The following GCP services are available with resource-level costs in ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compute Engine"),(0,o.kt)("li",{parentName:"ul"},"Cloud Functions"),(0,o.kt)("li",{parentName:"ul"},"Cloud Run"),(0,o.kt)("li",{parentName:"ul"},"Cloud SQL"),(0,o.kt)("li",{parentName:"ul"},"Cloud Spanner"),(0,o.kt)("li",{parentName:"ul"},"App Engine")),(0,o.kt)("p",null,"Google Cloud is not currently available in the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/autopilot"},"Autopilot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/savings_planner"},"Savings Planner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/active_resources"},"Resource Reports"))))}g.isMDXComponent=!0}}]);