"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[3796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"active_resources",title:"Resource Reports",description:"This page discusses Resource Reports, which give you the ability to view and filter resources and see associated cost information for active resources across multiple services and providers, including AWS, Azure, Snowflake, MongoDB Atlas, Confluent, and PlanetScale.",keywords:["Active resources","Resource reports"]},i="Resource Reports",s={unversionedId:"active_resources",id:"active_resources",title:"Resource Reports",description:"This page discusses Resource Reports, which give you the ability to view and filter resources and see associated cost information for active resources across multiple services and providers, including AWS, Azure, Snowflake, MongoDB Atlas, Confluent, and PlanetScale.",source:"@site/docs/active_resources.md",sourceDirName:".",slug:"/active_resources",permalink:"/active_resources",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/active_resources.md",tags:[],version:"current",frontMatter:{id:"active_resources",title:"Resource Reports",description:"This page discusses Resource Reports, which give you the ability to view and filter resources and see associated cost information for active resources across multiple services and providers, including AWS, Azure, Snowflake, MongoDB Atlas, Confluent, and PlanetScale.",keywords:["Active resources","Resource reports"]},sidebar:"someSidebar",previous:{title:"Forecasting",permalink:"/forecasting"},next:{title:"Segments",permalink:"/segments"}},l={},c=[{value:"AWS Active Resources",id:"aws-active-resources",level:2},{value:"Azure Active Resources",id:"azure-active-resources",level:2},{value:"Kubernetes Active Resources",id:"kubernetes-active-resources",level:2},{value:"Other Available Active Resources",id:"other-available-active-resources",level:2},{value:"View Active Resources",id:"viewing-active-resources",level:2},{value:"Create a Resource Report",id:"create-a-resource-report",level:2},{value:"Resource Report Filters",id:"resource-report-filters",level:3},{value:"Export Resource Report",id:"export-resource-report",level:2},{value:"Additional Active Resource Views",id:"additional-active-resource-views",level:2},{value:"Resource Relationships",id:"resource-relationships",level:3},{value:"S3 Storage Summary",id:"s3-storage-summary",level:3},{value:"S3 Request Metrics and Egress",id:"s3-request-metrics-and-egress",level:3},{value:"EC2 Rightsizing Recommendations",id:"ec2-rightsizing-recommendations",level:3},{value:"Kubernetes Rightsizing Recommendations",id:"kubernetes-rightsizing-recommendations",level:3},{value:"CloudWatch Metrics",id:"cloudwatch-metrics",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"resource-reports"},"Resource Reports"),(0,n.kt)("p",null,"For supported providers, Vantage profiles for ",(0,n.kt)("em",{parentName:"p"},"active resources")," within your account. An active resource is a resource, such as a virtual machine, that is currently generating costs within a cloud account. This is in contrast to resources that are included in billing but may no longer be live. Examples of active resources include items like Amazon S3 buckets, Azure Load Balancers, Snowflake queries, Confluent clusters, etc."),(0,n.kt)("p",null,"You can create ",(0,n.kt)("em",{parentName:"p"},"resource reports")," to see filtered views of your active resources. These reports provide visibility into all the currently operational resources within your account and the associated costs incurred by each resource. Reports include filterable dimensions, such as account, tag, region, service, and service-specific metadata."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Active resource views are currently supported for ",(0,n.kt)("a",{parentName:"p",href:"/connecting_aws"},"AWS"),", ",(0,n.kt)("a",{parentName:"p",href:"/connecting_azure"},"Azure"),", ",(0,n.kt)("a",{parentName:"p",href:"/connecting_kubernetes"},"Kubernetes"),", ",(0,n.kt)("a",{parentName:"p",href:"/connecting_snowflake"},"Snowflake"),", ",(0,n.kt)("a",{parentName:"p",href:"/connecting_mongodb-atlas"},"MongoDB"),", ",(0,n.kt)("a",{parentName:"p",href:"/connecting_confluent"},"Confluent"),", and ",(0,n.kt)("a",{parentName:"p",href:"/connecting_planetscale"},"PlanetScale"),".")),(0,n.kt)("h2",{id:"aws-active-resources"},"AWS Active Resources"),(0,n.kt)("p",null,"Vantage shows only active resources that have an associated IAM role. One common source of confusion is when an organization has only a root/management account with an IAM role. To view active resources from each member account, create an IAM role for each member account. As you create each additional IAM role, the member account's resources are automatically added to the active resource inventory. See the ",(0,n.kt)("a",{parentName:"p",href:"/connecting_aws"},"AWS integration")," documentation for details."),(0,n.kt)("p",null,"Not every AWS service is supported for resource-level costs; however, most services that incur costs are supported. To see the full list of services for which there are resource-level costs, see the documentation on ",(0,n.kt)("a",{parentName:"p",href:"/aws_supported_services"},"supported AWS services"),"."),(0,n.kt)("h2",{id:"azure-active-resources"},"Azure Active Resources"),(0,n.kt)("p",null,"To see the full list of supported Azure services, see the ",(0,n.kt)("a",{parentName:"p",href:"/azure_supported_services"},"Azure documentation"),"."),(0,n.kt)("h2",{id:"kubernetes-active-resources"},"Kubernetes Active Resources"),(0,n.kt)("p",null,"A Kubernetes ",(0,n.kt)("em",{parentName:"p"},"managed workload")," is a higher-level abstraction than a pod that automatically manages pod objects on your behalf. Vantage currently supports Deployments, StatefulSets, DaemonSets, Jobs, CronJobs, and ArgoCD Rollouts and syncs these managed worklods as active resources in your account. When available, pods are grouped by controller, and you can view and filter on the following metadata:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Controller name"),(0,n.kt)("li",{parentName:"ul"},"Controller type"),(0,n.kt)("li",{parentName:"ul"},"Cluster"),(0,n.kt)("li",{parentName:"ul"},"Namespace"),(0,n.kt)("li",{parentName:"ul"},"Controller labels")),(0,n.kt)("h2",{id:"other-available-active-resources"},"Other Available Active Resources"),(0,n.kt)("p",null,"The following active resources are available for the additional providers listed below."),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Provider"),(0,n.kt)("th",null,"Available Active Resources")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"/connecting_snowflake"},"Snowflake")),(0,n.kt)("td",null,"Snowflake queries")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"/connecting_mongodb-atlas"},"MongoDB Atlas")),(0,n.kt)("td",null,"MongoDB Atlas clusters")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"/connecting_confluent"},"Confluent")),(0,n.kt)("td",null,"Confluent Kafka clusters")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"/connecting_planetscale"},"PlanetScale")),(0,n.kt)("td",null,"PlanetScale databases"))),(0,n.kt)("h2",{id:"viewing-active-resources"},"View Active Resources"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Active resources are synced for each ",(0,n.kt)("a",{parentName:"p",href:"/workspaces"},"workspace")," at least once every 24 hours. Vantage syncs all tags specific to a service.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Active Resources"),". "),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"Services")," screen is displayed, which contains each resource by name (e.g., CloudFront Distributions, Azure Databricks Workspaces, etc.), the total number of active resources, and accrued costs for each resource. Select a resource from the parent list to see a list of all resources within that resource group. In the below example, the NAT Gateways resource is selected from the list.",(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"A sample resource report with a box around the NAT Gateways resource in the list",width:"100%",src:"/img/resource-report-parent.png"}))),(0,n.kt)("li",{parentName:"ol"},"Select an individual resource from the filtered list.",(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"A sample resource report with a box around the NAT Gateways resource in the list",width:"100%",src:"/img/resource-report-child.png"}))),(0,n.kt)("li",{parentName:"ol"},"The resource is displayed along with a detailed view of its costs over time. In the below image, the selected AWS NAT Gateway resource is displayed, with current and previous costs incurred. Costs for corresponding categories, like ",(0,n.kt)("strong",{parentName:"li"},"Data Transfer"),", are also provided per resource.",(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Resource Report Drill Down",width:"100%",src:"/img/resource.png"})))),(0,n.kt)("h2",{id:"create-a-resource-report"},"Create a Resource Report"),(0,n.kt)("p",null,"Create a resource report to filter by specific resources or groups of resources. Create detailed reports, including reports that show:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Resources across AWS services that match a certain AWS tag"),(0,n.kt)("li",{parentName:"ul"},"Resources within a specific AWS member account"),(0,n.kt)("li",{parentName:"ul"},"All Amazon EC2 instances that are a certain type, like ",(0,n.kt)("inlineCode",{parentName:"li"},"m5.large")),(0,n.kt)("li",{parentName:"ul"},"All Snowflake queries belonging to a specific label")),(0,n.kt)("p",null,"To create a resource report:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Active Resources"),"."),(0,n.kt)("li",{parentName:"ol"},"From the left navigation, click ",(0,n.kt)("strong",{parentName:"li"},"Resource Reports"),". You can create new reports and rename your existing reports from this page. The ",(0,n.kt)("strong",{parentName:"li"},"All Active Resources Report")," is provided by default.",(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"A full list of active resources for an account. The resource's label, type, costs, provider, region, and account are listed.",width:"80%",src:"/img/resource-report.png"}))),(0,n.kt)("li",{parentName:"ol"},"From the top right of the page, click ",(0,n.kt)("strong",{parentName:"li"},"New Report"),"."),(0,n.kt)("li",{parentName:"ol"},"From the type right of the resource list, click ",(0,n.kt)("strong",{parentName:"li"},"Filters"),". The ",(0,n.kt)("strong",{parentName:"li"},"Filters")," panel is displayed.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select a ",(0,n.kt)("strong",{parentName:"li"},"Provider")," (e.g., AWS)."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New Rule"),", then select a filter category, like ",(0,n.kt)("strong",{parentName:"li"},"Region"),". (See the section below for details on available filter options.)"),(0,n.kt)("li",{parentName:"ul"},"Depending on the filter criteria, select an operator (e.g., is, is not, contains)."),(0,n.kt)("li",{parentName:"ul"},"Select a value (e.g., ",(0,n.kt)("em",{parentName:"li"},"Region")," ",(0,n.kt)("strong",{parentName:"li"},"is")," ",(0,n.kt)("em",{parentName:"li"},"eu-west-1")," )."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"New Rule")," to add additional criteria to the same filter. Results are displayed where both rule 1 ",(0,n.kt)("em",{parentName:"li"},"AND")," rule 2 are true."),(0,n.kt)("li",{parentName:"ul"},"Click + Add Filter to add a new filter set. Results are displayed where ",(0,n.kt)("em",{parentName:"li"},"either")," filter 1 ",(0,n.kt)("em",{parentName:"li"},"OR")," filter 2 are true."),(0,n.kt)("li",{parentName:"ul"},"At the top of the ",(0,n.kt)("strong",{parentName:"li"},"Filters")," panel, click ",(0,n.kt)("strong",{parentName:"li"},"Apply Changes"),".",(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"A resource report filter with sample filter criteria for Snowflake and AWS",width:"60%",src:"/img/resource-report-filter.png"}))))),(0,n.kt)("li",{parentName:"ol"},"At the top of the report, click ",(0,n.kt)("strong",{parentName:"li"},"Save"),". The report name is displayed in the breadcrumbs above the report. To rename the report, click the pencil icon next to the default report name. Then, update the name and click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h3",{id:"resource-report-filters"},"Resource Report Filters"),(0,n.kt)("p",null,"The following filters are available for resource reports."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Filter"),(0,n.kt)("th",{parentName:"tr",align:null},"Provider"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Account"),(0,n.kt)("td",{parentName:"tr",align:null},"AWS"),(0,n.kt)("td",{parentName:"tr",align:null},"AWS account name (e.g., production)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Billing Account"),(0,n.kt)("td",{parentName:"tr",align:null},"AWS"),(0,n.kt)("td",{parentName:"tr",align:null},"AWS billing account name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Label"),(0,n.kt)("td",{parentName:"tr",align:null},"All providers"),(0,n.kt)("td",{parentName:"tr",align:null},"The resource's label (i.e., name)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,n.kt)("td",{parentName:"tr",align:null},"All providers"),(0,n.kt)("td",{parentName:"tr",align:null},"Specific to each resource type (e.g., AWS S3 buckets object count; Azure Load Balancers provisioning state; Confluent Kafka cluster type; MongoDB Atlas cluster deployed region; PlanetScale database branches count; Snowflake query invocations; Kubernetes workload namespace)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Tagged"),(0,n.kt)("td",{parentName:"tr",align:null},"All providers"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter to see resources not tagged with a specific tag key or any tag key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Region"),(0,n.kt)("td",{parentName:"tr",align:null},"AWS, Azure"),(0,n.kt)("td",{parentName:"tr",align:null},"us-east-1, ap-northeast-2, eastus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Resource group"),(0,n.kt)("td",{parentName:"tr",align:null},"Azure"),(0,n.kt)("td",{parentName:"tr",align:null},"The Azure resource group name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Resource type"),(0,n.kt)("td",{parentName:"tr",align:null},"All providers"),(0,n.kt)("td",{parentName:"tr",align:null},"EC2 instances, S3 buckets, Confluent Kafka clusters, Snowflake queries, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Subscription"),(0,n.kt)("td",{parentName:"tr",align:null},"Azure"),(0,n.kt)("td",{parentName:"tr",align:null},"The Azure subscription name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tag"),(0,n.kt)("td",{parentName:"tr",align:null},"All providers"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter to see resource by a specific tag key or tag key/value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UUID (ARN for AWS)"),(0,n.kt)("td",{parentName:"tr",align:null},"All providers"),(0,n.kt)("td",{parentName:"tr",align:null},"The unique provider ID (i.e., ARN for AWS) for the resource")))),(0,n.kt)("h2",{id:"export-resource-report"},"Export Resource Report"),(0,n.kt)("p",null,"To export a resource report, click the export button (looks like an arrow pointing down) on the top right of a saved resource report. The resources in the report are exported in a ZIP file with a CSV file per active resource type. Each row includes an active resource along with its cost and metadata. Select one or more Vantage user emails to send the report. Then, click ",(0,n.kt)("strong",{parentName:"p"},"Export"),". It may take a few minutes for the email to be sent."),(0,n.kt)("h2",{id:"additional-active-resource-views"},"Additional Active Resource Views"),(0,n.kt)("p",null,"The following tabs are available for specific resources on the ",(0,n.kt)("strong",{parentName:"p"},"Active Resources")," screen. These tabs provide additional resource-specific information."),(0,n.kt)("h3",{id:"resource-relationships"},"Resource Relationships"),(0,n.kt)("p",null,"You can view relationships between specific resources on the ",(0,n.kt)("strong",{parentName:"p"},"Relationships")," tab."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"The Relationships tab with an example EBS volume displayed",width:"100%",src:"/img/resource-report-relationships.png"})),(0,n.kt)("p",null,"Below are some examples of relationships you may see within your active resources."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource"),(0,n.kt)("th",{parentName:"tr",align:null},"Relationship"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amazon EBS Volumes"),(0,n.kt)("td",{parentName:"tr",align:null},"See associated EC2 instances, with accrued cost, account, instance ID, region, instance type, launch time, and lifecycle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amazon EC2 Instances"),(0,n.kt)("td",{parentName:"tr",align:null},"See associated EBS volumes, with accrued cost, account, volume type, size, IOPs, and state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Disks"),(0,n.kt)("td",{parentName:"tr",align:null},"See associated Azure Virtual Machines with accrued costs, account, resource ID, admin username, virtual machine size, boot diagnostics enabled, secure boot enabled, date/time created")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure Virtual Machines"),(0,n.kt)("td",{parentName:"tr",align:null},"See associated disk resources with accrued cost, account, resource ID, disk size, OS type, disk IOPs read/write, disk state, encryption type, network access policy, provisioning state, public network access, zones, and date/time created")))),(0,n.kt)("h3",{id:"s3-storage-summary"},"S3 Storage Summary"),(0,n.kt)("p",null,"For S3 buckets, a ",(0,n.kt)("strong",{parentName:"p"},"Storage Summary")," tab is available that provides a list of storage classes, their corresponding storage sizes, and approximate monthly costs for objects in the S3 bucket."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"An example of the S3 Storage Summary screen with Intelligent Tiering suggestions",width:"90%",src:"/img/resource-report-s3-buckets.png"})),(0,n.kt)("p",null,"When available, this screen also includes ",(0,n.kt)("strong",{parentName:"p"},"S3 Intelligent Tiering Considerations")," with a table of possible maximum savings you can potentially yield as a result of implementing S3 Intelligent Tiering across all objects in the bucket with Standard Storage."),(0,n.kt)("h3",{id:"s3-request-metrics-and-egress"},"S3 Request Metrics and Egress"),(0,n.kt)("p",null,"AWS charges you on a per-request basis for S3 with potentially different rates for each request type. The ",(0,n.kt)("strong",{parentName:"p"},"Request Metrics & Egress")," tab provides a summary of request metrics for the bucket and each metric's cost for the trailing 30 days."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"An example of the S3 Storage Summary screen with Intelligent Tiering suggestions",width:"90%",src:"/img/resource-report-egress.png"})),(0,n.kt)("p",null,"A graph of each request type (",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"LIST"),") is provided, which visualizes the total number of requests. The total cost for each request type is also provided."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/metrics-configurations.html"},"AWS documentation")," for information on how to enable ingress and egress request metrics. Note that it takes roughly 15 minutes for AWS to begin delivering these metrics after they are enabled.")),(0,n.kt)("h3",{id:"ec2-rightsizing-recommendations"},"EC2 Rightsizing Recommendations"),(0,n.kt)("p",null,"For EC2 instances where Vantage identifies rightsizing opportunities, the ",(0,n.kt)("strong",{parentName:"p"},"Rightsizing")," tab is displayed with recommendations. See the ",(0,n.kt)("a",{parentName:"p",href:"/cost_recommendations"},"Cost Recommendations")," documentation for details."),(0,n.kt)("h3",{id:"kubernetes-rightsizing-recommendations"},"Kubernetes Rightsizing Recommendations"),(0,n.kt)("p",null,"For Kubernetes workloads where Vantage identifies rightsizing opportunities, the\xa0",(0,n.kt)("strong",{parentName:"p"},"Rightsizing"),"\xa0tab is displayed with recommendations. See the\xa0",(0,n.kt)("a",{parentName:"p",href:"/cost_recommendations#kubernetes-rightsizing"},"Cost Recommendations"),"\xa0documentation for details on how to view and use this information."),(0,n.kt)("h3",{id:"cloudwatch-metrics"},"CloudWatch Metrics"),(0,n.kt)("p",null,"For certain resources, you can view high-fidelity charts for CloudWatch metrics. On resources that support CloudWatch metrics, the ",(0,n.kt)("strong",{parentName:"p"},"CloudWatch Metrics")," tab is displayed. These metrics are useful for rightsizing servers and databases based on utilization."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Resource Report Drill Down",width:"80%",src:"/img/cloudwatch-metrics.png"})),(0,n.kt)("p",null,"When you connect an AWS account to Vantage, CloudWatch metrics are configured automatically, per resource. The following services support CloudWatch metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EC2"),(0,n.kt)("li",{parentName:"ul"},"RDS"),(0,n.kt)("li",{parentName:"ul"},"S3"),(0,n.kt)("li",{parentName:"ul"},"ECS"),(0,n.kt)("li",{parentName:"ul"},"Fargate")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To inquire about support for Cloudwatch metrics for other services, or for monitoring support for GCP contact ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),".")))}d.isMDXComponent=!0}}]);