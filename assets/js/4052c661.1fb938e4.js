"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6670],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(r),c=n,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||s;return r?a.createElement(m,o(o({ref:e},d),{},{components:r})):a.createElement(m,o({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1447:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={id:"aws_supported_services",title:"AWS Services & Regions",description:"This page includes a list of supported services and regions for the AWS Vantage integration.",keywords:["AWS","AWS supported services","AWS supported regions"]},o="AWS Services & Regions",i={unversionedId:"aws_supported_services",id:"aws_supported_services",title:"AWS Services & Regions",description:"This page includes a list of supported services and regions for the AWS Vantage integration.",source:"@site/docs/aws_supported_services.md",sourceDirName:".",slug:"/aws_supported_services",permalink:"/aws_supported_services",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/aws_supported_services.md",tags:[],version:"current",frontMatter:{id:"aws_supported_services",title:"AWS Services & Regions",description:"This page includes a list of supported services and regions for the AWS Vantage integration.",keywords:["AWS","AWS supported services","AWS supported regions"]},sidebar:"someSidebar",previous:{title:"AWS",permalink:"/connecting_aws"},next:{title:"Azure",permalink:"/connecting_azure"}},l={},p=[{value:"Supported Services",id:"supported-services",level:2},{value:"Supported Regions",id:"supported-regions",level:2}],d={toc:p},u="wrapper";function g(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-services--regions"},"AWS Services & Regions"),(0,n.kt)("h2",{id:"supported-services"},"Supported Services"),(0,n.kt)("p",null,"Vantage will show 100% of your organization's accrued costs across all services. Vantage also offers per-resource pricing for the following services using custom logic to query APIs for each AWS service. While Vantage supports per-resource pricing for the most popular services, some services are not currently supported. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To request new service support on Vantage, email ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," with the subject line of ",(0,n.kt)("em",{parentName:"p"},"New AWS Service Support"),". Include as much information as you can about the data you want to see.")),(0,n.kt)("p",null,"Below is a list of currently supported AWS services for ",(0,n.kt)("a",{parentName:"p",href:"/active_resources"},"active resources"),". Vantage maintains read-only access to the AWS APIs for these resources."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CloudWatch"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports CloudWatch Log Groups and its corresponding storage pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CloudFront"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports CloudFront and showing accrued costs per CloudFront distribution.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CloudTrail"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports CloudTrail.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CodePipeline"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports CodePipeline.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CodeBuild"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports CodeBuild.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Config"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Config rules.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DynamoDB"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports DynamoDB tables.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EBS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports all EBS volume types and corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EC2"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports all EC2 instance types, all on-demand and spot pricing as well as supporting CloudWatch metrics and logs. Vantage also imports all underlying EC2 images where possible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ECS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports ECS services and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EFS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports EFS and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ECR"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports ECR and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ELB"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports ELB and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ElastiCache"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports all ElastiCache clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EKS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports EKS and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Elasticsearch Service"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Elasticsearch and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fargate"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Fargate services and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Glacier"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Glacier vaults its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Global Accelerator"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Global Accelerator and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Glue"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports view Glue job costs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IAM"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports IAM groups, IAM users, and IAM roles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Lambda"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Lambda.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"KMS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports showing accrued costs for KMS keys.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amazon Managed Streaming for Apache Kafka (Amazon MSK)"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports MSK and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MediaLive"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports MediaLive channels, MediaConvert jobs, MediaConnect flow, MediaPackage channels, MediaStore containers, MediaTailor channels, and their corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MQ"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports MQ brokers and their corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Networking primitives"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports networking primitives, like elastic IPs, VPCs, subnets, Availability Zones, and security groups.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Redshift and its corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Route53"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Route 53 Hosted Zones and its corresponding pricing. We also have write access for Route 53 Record Sets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RDS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports RDS and corresponding pricing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"S3"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports S3 buckets and corresponding bucket pricing. We provide daily storage and object count figures. Vantage shows total costs per S3 bucket as well as summaries by storage classes. Vantage will also provide some calculations for you to determine savings impact of enabling S3 Intelligent-Tiering. We do not have permission to read from your S3 buckets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Secrets Manager"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports AWS Secrets Manager and its corresponding pricing. We do not have permissions to read your secrets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SNS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports showing accrued costs for SNS Topics.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQS"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports showing accrued costs for SQS queues.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VPC Flow Logs"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports showing costs for VPC Flow Logs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Workspaces"),(0,n.kt)("td",{parentName:"tr",align:null},"Vantage supports Workspaces and its corresponding pricing.")))),(0,n.kt)("h2",{id:"supported-regions"},"Supported Regions"),(0,n.kt)("p",null,"Vantage can sync resources from all AWS regions with external connectivity."))}g.isMDXComponent=!0}}]);