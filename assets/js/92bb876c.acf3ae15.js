"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6347],{4526:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),a=o(956),i=o(3680),s=o(5697),r=o.n(s);const c=e=>{let{title:t,icon:o,content:s,iconAltText:r,link:c}=e;return n.createElement(a.Z,{className:"custom-card"},n.createElement(a.Z.Body,null,n.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.createElement("div",null,n.createElement("img",{className:"custom-icon",src:o,alt:r}),n.createElement("h2",{className:"custom-title"},t)),n.createElement("p",null,s))),n.createElement("div",{className:"custom-card-button-container"},n.createElement(i.Z,{variant:"primary",className:"custom-button",href:c,role:"button","aria-label":"View Documentation"},"View Documentation")))};c.propTypes={title:r().string.isRequired,icon:r().string.isRequired,paragraph:r().string.isRequired,iconAltText:r().string.isRequired,link:r().string.isRequired};const l=c},2039:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294),a=o(4526),i=o(4051),s=o(1555);const r=function(e){let{cards:t,columns:o}=e;const r=o,c=Math.ceil(t.length/r),l=[];for(let g=0;g<c;g++){const e=g*r,o=e+r,c=t.slice(e,o),u=n.createElement(i.Z,{xs:4,md:4,className:"g-4 custom-card-row"},c.map(((e,t)=>n.createElement(s.Z,{key:t,className:"custom-card-col"},n.createElement(a.Z,{title:e.title,content:e.content,icon:e.icon,link:e.link,iconAltText:e.iconAltText})))));l.push(u)}return n.createElement("div",{className:"custom-card-group"},l)}},8230:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=o(7462),a=(o(7294),o(3905)),i=o(2039);o(4526);const s={id:"getting_started",title:"Quickstart",description:"Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources.",keywords:["Quickstart","Connect providers"]},r="Quickstart",c={unversionedId:"getting_started",id:"getting_started",title:"Quickstart",description:"Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources.",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/getting_started",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/getting_started.md",tags:[],version:"current",frontMatter:{id:"getting_started",title:"Quickstart",description:"Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources.",keywords:["Quickstart","Connect providers"]},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Vantage University",permalink:"/vantage_university"}},l={},g=[{value:"Step 1: Create an Account",id:"step-1-create-an-account",level:2},{value:"Step 2: Connect Providers",id:"step-2-connect-providers",level:2},{value:"Step 3: View Ingested Costs and Create Cost Reporting Resources",id:"step-3-view-ingested-costs-and-create-cost-reporting-resources",level:2}],u={toc:g},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("admonition",{title:"Get Started",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This quickstart guide will help you to set up your Vantage account, connect one or multiple providers, and start using Cost Reporting and Financial Planning features. "),(0,a.kt)("p",{parentName:"admonition"},"For video tutorials, check out ",(0,a.kt)("a",{parentName:"p",href:"/vantage_university"},"Vantage University")," \ud83c\udf93.")),(0,a.kt)("h2",{id:"step-1-create-an-account"},"Step 1: Create an Account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get started, ",(0,a.kt)("a",{parentName:"li",href:"https://console.vantage.sh/signup"},"create a Vantage account"),". "),(0,a.kt)("li",{parentName:"ul"},"Optionally, you can upgrade to a paid plan to unlock additional features and track higher amounts of cloud infrastructure costs. View the ",(0,a.kt)("a",{parentName:"li",href:"https://www.vantage.sh/pricing"},"Vantage Pricing page")," for all pricing and plan details. All paid plans have an option to trial the service before committing to a subscription.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-2-connect-providers"},"Step 2: Connect Providers"),(0,a.kt)("p",null,"Next, create a data integration between at least one of your providers and Vantage. Detailed integration documentation is linked for each of the providers below. "),(0,a.kt)(i.Z,{cards:[{icon:"/img/logos/logo-icon-aws.svg",iconAltText:"AWS logo",title:"Amazon Web Services (AWS)",content:"Vantage integrates with your AWS account through a Cross-Account IAM role, giving Vantage read-only access to an organization's cost data. After the initial sync, you will be able to take advantage of features in Vantage to manage, inspect, and model your AWS spend.",link:"/connecting_aws"},{icon:"/img/logos/logo-icon-azure.svg",iconAltText:"Azure logo",title:"Azure",content:"Vantage integrates with your Azure account by using an Active Directory Service Principal, which can be assigned access to both management groups or individual subscriptions. Any subscriptions that are part of a resource group will be automatically imported.",link:"/connecting_azure"},{icon:"/img/logos/logo-icon-gcp.svg",iconAltText:"GCP logo",title:"Google Cloud Platform (GCP)",content:"Vantage integrates with your GCP account through a service account, providing Vantage with read-only access to an organization's cost data. Following the creation of the role with the appropriate permissions, Vantage will initiate the synchronization of cost data and resource metadata.",link:"/connecting_gcp"},{icon:"/img/logos/logo-icon-kubernetes.svg",iconAltText:"Kubernetes logo",title:"Kubernetes",content:"Vantage allows you to see in-cluster costs for Kubernetes clusters, including seeing costs by container, service, namespace and label. The Vantage Kubernetes agent is the recommended integration point for ingesting Kubernetes costs into Vantage.",link:"/connecting_kubernetes"},{icon:"/img/logos/logo-icon-datadog.svg",iconAltText:"Datadog logo",title:"Datadog",content:"Vantage integrates with your Datadog account through a read-only Datadog OAuth token. After connecting, Vantage automatically receives read-only access to appropriate cost and usage APIs to begin ingesting Datadog cost data",link:"/connecting_datadog"},{icon:"/img/logos/logo-icon-new-relic.svg",iconAltText:"New Relic logo",title:"New Relic",content:"Vantage integrates with your New Relic account through the use of New Relic Usage Data via the New Relic GraphQL API.",link:"/connecting_new_relic"},{icon:"/img/logos/logo-icon-mongodb.svg",iconAltText:"MongoDB Atlas logo",title:"MongoDB Atlas",content:"Vantage integrates with MongoDB Atlas account through read-only use of the Invoices API. To see Active Resources for your MongoDB Atlas account, Vantage uses the Clusters API and the Projects API.",link:"/connecting_mongodb-atlas"},{icon:"/img/logos/logo-icon-snowflake.svg",iconAltText:"Snowflake logo",title:"Snowflake",content:"Vantage integrates with your Snowflake account through a secure, read-only user who has access to Snowflake usage tables. Optionally, Vantage can pull from a dedicated schema that you create.",link:"/connecting_snowflake"},{icon:"/img/logos/logo-icon-databricks.svg",iconAltText:"Databricks logo",title:"Databricks",content:"Vantage integrates with your Databricks account through the use of Billable Usage Logs. Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis.",link:"/connecting_databricks"},{icon:"/img/logos/logo-icon-fastly.svg",iconAltText:"Fastly logo",title:"Fastly",content:"Vantage integrates with your Fastly account through a read-only API token. Fastly API tokens are free for you to create\u2014and adding them to the Vantage console only takes a few minutes.",link:"/connecting_fastly"},{icon:"/img/logos/logo-icon-oracle.svg",iconAltText:"Oracle Cloud logo",title:"Oracle Cloud",content:"Vantage connects to Oracle Cloud using a read-only IAM user and API key to read from a Cost and Usage Reports object storage bucket.",link:"/connecting_oracle"},{icon:"/img/logos/logo-icon-confluent.svg",iconAltText:"Confluent logo",title:"Confluent",content:"Vantage integrates with your Confluent account through a revocable read/write API key and secret. Confluent API keys are free for you to create\u2014and adding to the Vantage console only takes a few minutes.",link:"/connecting_confluent"},{icon:"/img/logos/logo-icon-planetscale.svg",iconAltText:"PlanetScale logo",title:"PlanetScale",content:"Vantage integrates with your PlanetScale account via the PlanetScale Invoices API using an OAuth workflow.",link:"/connecting_planetscale"},{icon:"/img/logos/logo-icon-coralogix.svg",iconAltText:"Coralogix logo",title:"Coralogix",content:"Vantage integrates with your Coralogix account through a revocable read-only API key and your Coralogix domain.",link:"/connecting_coralogix"}],columns:2,mdxType:"CustomCardGroup"}),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"Other Providers",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Vantage will be launching support for additional cloud infrastructure providers in the future. If you have a particular provider that you would like supported, please reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-3-view-ingested-costs-and-create-cost-reporting-resources"},"Step 3: View Ingested Costs and Create Cost Reporting Resources"),(0,a.kt)("p",null,"Once you create some provider integrations, Vantage will automatically begin ingesting billing information for your account. The default landing page in the Vantage console is the ",(0,a.kt)("a",{parentName:"p",href:"/overview"},(0,a.kt)("strong",{parentName:"a"},"Overview"))," page. This page serves as an executive-level summary, providing a comprehensive snapshot of the cost metrics that matter most to you. "),(0,a.kt)("p",null,"As you continue to set up your cost reporting infrastructure, you can use the below guides for some best practices in Vantage. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/team_accountability"},(0,a.kt)("strong",{parentName:"a"},"Team Accountability")),": To ensure team accountability in cloud cost management, follow this guide. Create Cost Report Folders for specific teams, generate Cost Reports for various dimensions, implement Cost Report notifications, set team budgets, and continually monitor and optimize to minimize unnecessary expenses, thus guaranteeing efficient cloud spending."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/executive_reporting"},(0,a.kt)("strong",{parentName:"a"},"Executive Reporting")),": If you want to set up executive-level reporting, follow this guide. Use tools in Vantage to effortlessly gather and present comprehensive insights into your organization's cloud spending, enabling you to deliver actionable reports that facilitate informed decision-making at the executive level."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hidden_costs"},(0,a.kt)("strong",{parentName:"a"},"Find Hidden Costs")),": If you want to uncover hidden costs and optimize spending, follow this guide. Vantage provides tools like Active Resources for listing cost-driving resources and Cost Anomaly Alerts to automatically detect and alert on unexpected expenses.")))}p.isMDXComponent=!0}}]);