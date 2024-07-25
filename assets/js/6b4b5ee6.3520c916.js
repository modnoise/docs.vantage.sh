"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[8123],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={id:"connecting_aws",title:"AWS",description:"This page walks through how to integrate Vantage with your AWS account.",keywords:["AWS","Connect AWS"]},i="AWS",s={unversionedId:"connecting_aws",id:"connecting_aws",title:"AWS",description:"This page walks through how to integrate Vantage with your AWS account.",source:"@site/docs/connecting_aws.md",sourceDirName:".",slug:"/connecting_aws",permalink:"/connecting_aws",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_aws.md",tags:[],version:"current",frontMatter:{id:"connecting_aws",title:"AWS",description:"This page walks through how to integrate Vantage with your AWS account.",keywords:["AWS","Connect AWS"]},sidebar:"someSidebar",previous:{title:"Data Dictionary",permalink:"/data_dictionary"},next:{title:"AWS Services & Regions",permalink:"/aws_supported_services"}},l={},c=[{value:"How Vantage Connects with AWS",id:"how-vantage-connects-with-aws",level:2},{value:"Read-Only by Default",id:"read-only-by-default",level:3},{value:"AWS GovCloud Environments",id:"aws-govcloud-environments",level:3},{value:"Create a Connection",id:"create-a-connection",level:2},{value:"Connect Multiple AWS Accounts",id:"connecting-multiple-aws-accounts",level:3},{value:"StackSet Prerequisites",id:"stackset-prerequisites",level:4},{value:"Connect with Terraform",id:"terraform",level:3},{value:"Connect by Manually Creating an IAM Role",id:"iam_console",level:3},{value:"Next Steps: Manage Workspace Access",id:"next-steps-manage-workspace-access",level:3},{value:"AWS Data Ingestion Delay",id:"aws-data-ingestion-delay",level:2},{value:"Backfill AWS CUR for Previous Reporting Periods",id:"backfilling-aws-cur-for-previous-reporting-periods",level:2},{value:"Update the Vantage AWS Integration",id:"update-the-vantage-aws-integration",level:2},{value:"View Amazon CloudWatch Metrics on Cost Reports",id:"view-amazon-cloudwatch-metrics-on-cost-reports",level:2},{value:"VPC Flow Logs: Network Flow Reports",id:"vpc-flow-logs-network-flow-reports",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws"},"AWS"),(0,o.kt)("p",null,"Vantage has a few options to connect to AWS, including CloudFormation, the AWS CLI, a Terraform module, and the AWS IAM Console. All options are described below."),(0,o.kt)("h2",{id:"how-vantage-connects-with-aws"},"How Vantage Connects with AWS"),(0,o.kt)("p",null,"Vantage understands security concerns and aims to provide as secure a connection as possible with your AWS accounts. Vantage uses a mechanism called a ",(0,o.kt)("em",{parentName:"p"},"Cross-Account IAM Role")," to interact with services in your AWS account. AWS has ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/"},"publicly documented")," this method and officially recommends it as the preferred method of doing any cross-account interactions on AWS. Numerous internal AWS services and systems also leverage this method."),(0,o.kt)("p",null,"This means that Vantage ",(0,o.kt)("strong",{parentName:"p"},"never")," needs access credentials, account logins, or passwords for AWS."),(0,o.kt)("h3",{id:"read-only-by-default"},"Read-Only by Default"),(0,o.kt)("p",null,"When you create a Cross-Account IAM Role using the provided CloudFormation template, or via Terraform, you provide Vantage with various permissions. All these permissions, by default, are read-only. We created this list of permissions based on the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ReadOnlyAccess.html"},"AWS ReadOnlyAccess policy"),". In addition, we removed some of the permissions AWS includes in this list to prevent Vantage from seeing certain information, like reading from S3 buckets and reading from databases."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Vantage only collects metadata about your infrastructure and never attempts to read sensitive information from the underlying services. Our CloudFormation template is public, and you can audit the template's ",(0,o.kt)("a",{parentName:"p",href:"https://vantage-public.s3.amazonaws.com/vantage-integration-combined-latest.json"},"list of permissions"),".")),(0,o.kt)("h3",{id:"aws-govcloud-environments"},"AWS GovCloud Environments"),(0,o.kt)("p",null,"Vantage supports ingesting costs for infrastructure in ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/govcloud-us/details/"},"GovCloud")," environments. Note that at this time, we are unable to sync active resources from GovCloud regions into the ",(0,o.kt)("a",{parentName:"p",href:"/active_resources#viewing-active-resources"},"Active Resources")," screen in Vantage; however, you can still view costs by resource in ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports"),". You also have access to all other Vantage functionality. "),(0,o.kt)("h2",{id:"create-a-connection"},"Create a Connection"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"Vantage Integrations")," page, and create a new AWS connection. On the AWS connection page, you will see a few options to connect."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AWS Console:")," Click the purple ",(0,o.kt)("strong",{parentName:"li"},"Connect Vantage via AWS Console")," button to directly log in to AWS. You will be directed to CloudFormation to create the necessary stack that will contain prefilled parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AWS CLI:")," Click the ",(0,o.kt)("strong",{parentName:"li"},"More Connection Options")," dropdown and select ",(0,o.kt)("strong",{parentName:"li"},"Connect via AWS CLI"),". The CLI commands needed to create a connection are provided on this screen."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terraform:")," Click the ",(0,o.kt)("strong",{parentName:"li"},"More Connection Options")," dropdown and select ",(0,o.kt)("strong",{parentName:"li"},"Connect via AWS Terraform"),". Instructions for how to connect using the Terraform module are provided on this screen. See the ",(0,o.kt)("a",{parentName:"li",href:"/connecting_aws#terraform"},"section below")," for more details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AWS IAM Console:")," Click the ",(0,o.kt)("strong",{parentName:"li"},"More Connection Options")," dropdown and select ",(0,o.kt)("strong",{parentName:"li"},"Connect via AWS IAM Console"),". Instructions are provided on this screen. See the ",(0,o.kt)("a",{parentName:"li",href:"/connecting_aws#iam_console"},"section below")," for more details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CloudFormation StackSet for Multiple Member Accounts:")," Click the ",(0,o.kt)("strong",{parentName:"li"},"Connect via CloudFormation StackSet")," button. The necessary commands to create this connection are displayed. See the next section for more information.")),(0,o.kt)("p",null,"After you create your integration between AWS and Vantage, you can view the status of your connection on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/aws"},"AWS Settings page"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Vantage will experience ",(0,o.kt)("a",{parentName:"p",href:"/connecting_aws#aws-data-ingestion-delay"},"a delay")," in receiving all your cost data until the first Cost and Usage Report (CUR) is received from AWS. In addition, the first CUR that's sent to Vantage contains only the current month's data. See the instructions below for ",(0,o.kt)("a",{parentName:"p",href:"/connecting_aws#backfilling-aws-cur-for-previous-reporting-periods"},"backfilling a CUR"),".")),(0,o.kt)("h3",{id:"connecting-multiple-aws-accounts"},"Connect Multiple AWS Accounts"),(0,o.kt)("p",null,"You can connect multiple AWS accounts to Vantage; however, we strongly advise that you connect your ",(0,o.kt)("strong",{parentName:"p"},"root or management")," AWS account first. When you connect the root account, you can see all costs for the organization, including linked accounts."),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"If you connect only a linked or member account, you will experience the following issues:")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You will see only costs and costs by resource for that linked account, rather than for your whole organization."),(0,o.kt)("li",{parentName:"ul"},"You will be unable to see costs for the other member accounts in your AWS organization."),(0,o.kt)("li",{parentName:"ul"},"You may not see the full coverage of cost allocation tags from the organization."),(0,o.kt)("li",{parentName:"ul"},"If Reserved Instances (RIs) are purchased in the linked account, those instances will be realized in the linked account first instead of being realized across the organization."))),(0,o.kt)("p",null,"Once you connect your root/management AWS account, Vantage will profile all member accounts present in the organization. Vantage will be able to show you accrued costs from all member accounts in the organization, as well as Active Resources that are present in that ",(0,o.kt)("em",{parentName:"p"},"root AWS account"),"."),(0,o.kt)("p",null,"If you have multiple member accounts and want to view Active Resources present in those accounts, you use the CloudFormation StackSet that will create one role per AWS member account. You're also welcome to skip this step and add/remove individual AWS accounts from your ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/aws"},"account settings")," whenever you want."),(0,o.kt)("p",null,"We recommend using StackSets if you have several accounts you want to connect. Using the StackSet will automate the process for all the accounts in your organizational unit. When connecting your account, if you have at least one member account, you will see instructions, specific to your account, on how to connect your member accounts using StackSets."),(0,o.kt)("h4",{id:"stackset-prerequisites"},"StackSet Prerequisites"),(0,o.kt)("p",null,"To leverage StackSets, you must enable your organization's access to operate a service-managed StackSet. You'll need to enable this setting in the AWS Management Console. If you don't have this setting enabled and attempt to run a StackSet command, you'll see the following error:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"An error occurred (ValidationError) when calling the CreateStackSet operation: You must enable organizations access to operate a service managed stack set")),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html"},"AWS's instructions")," for enabling this setting."),(0,o.kt)("h3",{id:"terraform"},"Connect with Terraform"),(0,o.kt)("p",null,"During onboarding, instead of following the CloudFormation process, you can use the Vantage Terraform module. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/terraform#integrations-module"},"Terraform documentation")," for more information."),(0,o.kt)("h3",{id:"iam_console"},"Connect by Manually Creating an IAM Role"),(0,o.kt)("p",null,"If you want to create IAM roles manually or use another tool to manage your infrastructure, you can create the necessary cross-account role."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the AWS connection page in the Vantage console, click ",(0,o.kt)("strong",{parentName:"li"},"More Connection Options")," > ",(0,o.kt)("strong",{parentName:"li"},"Connect via AWS IAM Console"),"."),(0,o.kt)("li",{parentName:"ol"},"You will be presented with a ",(0,o.kt)("strong",{parentName:"li"},"Trust Relationship")," and an ",(0,o.kt)("strong",{parentName:"li"},"Inline Policy")," that is required for the role. Follow the steps provided in the Vantage console to set up the role. Keep this tab open as you will need some submit the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html"},"ARN"))," of the role to complete the connection."),(0,o.kt)("li",{parentName:"ol"},"After creating the role in IAM, return to the onboarding page in Vantage and add the ",(0,o.kt)("strong",{parentName:"li"},"ARN")," of the created role to the ",(0,o.kt)("strong",{parentName:"li"},"Cross account arn")," field at the bottom of the connection workflow pop-up window. Then, click ",(0,o.kt)("strong",{parentName:"li"},"Connect")," to complete the connection.")),(0,o.kt)("h3",{id:"next-steps-manage-workspace-access"},"Next Steps: Manage Workspace Access"),(0,o.kt)("p",null,"Once your costs are imported, select which workspaces this integration is associated with. See the ",(0,o.kt)("a",{parentName:"p",href:"/workspaces#integration-workspace"},"Workspaces")," documentation for information."),(0,o.kt)("h2",{id:"aws-data-ingestion-delay"},"AWS Data Ingestion Delay"),(0,o.kt)("p",null,"Vantage creates both an IAM role and a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html"},"Cost and Usage Report (CUR)")," integration when onboarding to AWS. While an IAM role is created within a minute, and historical data can be populated almost immediately, it can take AWS up to 24 hours to deliver the first CUR to Vantage. As a result, only partial data will be present until this first CUR is received."),(0,o.kt)("p",null,"This delay will impact a few features in the Vantage console:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/active_resources"},"Active Resources")," will initially show only hourly and monthly rates. Once the first CUR is received, you can see actual accrued costs per resource, broken down by cost category and subcategory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cost_reports"},"Cost Reports")," will show line-item data per service initially but will not be able to show ",(0,o.kt)("em",{parentName:"li"},"costs by resource")," until the first CUR is received."),(0,o.kt)("li",{parentName:"ul"},"Both ",(0,o.kt)("a",{parentName:"li",href:"/autopilot/"},"Autopilot")," and ",(0,o.kt)("a",{parentName:"li",href:"/savings_planner/"},"Savings Planner")," are unavailable until the first CUR is received.")),(0,o.kt)("p",null,"Once Vantage receives its first CUR, this functionality will automatically be made available, and Vantage will alert you via email. Ultimately, this is a limitation imposed by AWS, and all Vantage features will become active once the data is received."),(0,o.kt)("h2",{id:"backfilling-aws-cur-for-previous-reporting-periods"},"Backfill AWS CUR for Previous Reporting Periods"),(0,o.kt)("p",null,"The first CUR that's sent to Vantage contains only the current month's data. If you want to see historical data in Vantage, you can backfill your CUR for re-ingestion into Vantage."),(0,o.kt)("p",null,"If you have ",(0,o.kt)("em",{parentName:"p"},"existing")," historical CUR files, add a copy of these files to the shared Vantage S3 bucket. Then, email\xa0",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"our Support team")," to ingest the backfilled CUR. By default, Vantage will automatically process CUR files for the current calendar month, but our Support team can also manually process historical CURs if notified."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Ideally, these files should be a daily CSV; however, Vantage can also support hourly and/or Parquet formats.")),(0,o.kt)("p",null,"If you do not have this data available, you can contact AWS Support and open a ticket for AWS to backfill your CUR. Follow the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your AWS root/management account, use the top search bar to search for and navigate to ",(0,o.kt)("strong",{parentName:"p"},"Data Exports"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A table of data exports is displayed. Observe the ",(0,o.kt)("strong",{parentName:"p"},"Export Name")," column. You should see the legacy CUR export that was created by Vantage when the integration was set up. Take note of the values in the ",(0,o.kt)("strong",{parentName:"p"},"Export Name")," and ",(0,o.kt)("strong",{parentName:"p"},"S3 Bucket")," columns.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ticket with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cur/latest/userguide/billing-get-answers.html"},"AWS Support")," to backfill the Vantage export. You can use the sample email template below when creating your request."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"AWS Support Request Template"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Subject: Request for Backfilling AWS Legacy CUR Data Export")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[Insert your organization name]")," needs help backfilling a legacy CUR Data Export per the below requirements:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Please backfill the existing ",(0,o.kt)("strong",{parentName:"li"},"[Insert Vantage legacy CUR Data Export name]")," report from the ",(0,o.kt)("strong",{parentName:"li"},"[Insert export's S3 bucket name]")," S3 bucket."),(0,o.kt)("li",{parentName:"ul"},"We need historical data for the following period: ",(0,o.kt)("strong",{parentName:"li"},"[Insert start date]")," to ",(0,o.kt)("strong",{parentName:"li"},"[Insert end date]"),"."),(0,o.kt)("li",{parentName:"ul"},"This should be a daily CSV file.")),(0,o.kt)("p",{parentName:"li"},"Once the historical data is successfully backfilled into the above legacy CUR Data Export, please send us a notification or confirmation."),(0,o.kt)("p",{parentName:"li"},"Thank you,"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[Insert your name]")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once AWS Support completes your request, please email\xa0",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," to re-ingest the backfilled legacy CUR Data Export."))),(0,o.kt)("h2",{id:"update-the-vantage-aws-integration"},"Update the Vantage AWS Integration"),(0,o.kt)("p",null,"Occasionally, Vantage will modify the permission sets it uses to access billing and resource data on AWS. When this happens, you can update your integration."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/integrations"},(0,o.kt)("strong",{parentName:"a"},"Integrations")," page")," of the Vantage console."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"AWS")," tile, click ",(0,o.kt)("strong",{parentName:"li"},"Manage"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Account")," list is displayed. Click ",(0,o.kt)("strong",{parentName:"li"},"Manage")," for the cloud account that you want to update. (For AWS organizations with multiple accounts, this will usually be the Management account.)"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Update Vantage via AWS Console")," to perform the update, or click ",(0,o.kt)("strong",{parentName:"li"},"More Update Options")," for command-line and other deployment methods.")),(0,o.kt)("h2",{id:"view-amazon-cloudwatch-metrics-on-cost-reports"},"View Amazon CloudWatch Metrics on Cost Reports"),(0,o.kt)("p",null,"You can import Amazon CloudWatch metrics as business metrics to view alongside Cost Reports. See the ",(0,o.kt)("a",{parentName:"p",href:"/per_unit_costs#importing-from-cloudwatch"},"Per Unit Costs")," documentation for more information."),(0,o.kt)("h2",{id:"vpc-flow-logs-network-flow-reports"},"VPC Flow Logs: Network Flow Reports"),(0,o.kt)("p",null,"For network-enabled resources, Network Flow Reports provide visibility by source and destination to the flows within your network that are driving costs. See the ",(0,o.kt)("a",{parentName:"p",href:"/network_flow_reports"},"Network Flow Reports documentation")," for information on how to enable these reports and view data transfer costs for AWS services."))}m.isMDXComponent=!0}}]);