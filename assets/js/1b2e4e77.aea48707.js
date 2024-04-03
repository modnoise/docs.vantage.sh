"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={id:"per_unit_costs",title:"Per Unit Costs",description:"Use business metrics to analyze per-unit costs and cost of goods sold.",keywords:["Per unit costs","Business Metrics"]},r="Per Unit Costs",o={unversionedId:"per_unit_costs",id:"per_unit_costs",title:"Per Unit Costs",description:"Use business metrics to analyze per-unit costs and cost of goods sold.",source:"@site/docs/per_unit_costs.md",sourceDirName:".",slug:"/per_unit_costs",permalink:"/per_unit_costs",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/per_unit_costs.md",tags:[],version:"current",frontMatter:{id:"per_unit_costs",title:"Per Unit Costs",description:"Use business metrics to analyze per-unit costs and cost of goods sold.",keywords:["Per unit costs","Business Metrics"]},sidebar:"someSidebar",previous:{title:"Budgets",permalink:"/budgets"},next:{title:"Issues",permalink:"/issues"}},l={},p=[{value:"Import Business Metrics",id:"import-business-metrics",level:2},{value:"Import from a CSV File",id:"importing-from-a-csv",level:3},{value:"Import from Amazon CloudWatch",id:"importing-from-cloudwatch",level:3},{value:"Import from Datadog",id:"importing-from-datadog",level:3},{value:"Import via the Vantage API",id:"import-api",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Create a Business Metric",id:"create-a-business-metric",level:4},{value:"Update a Business Metric",id:"update-a-business-metric",level:4},{value:"Additional API Actions",id:"additional-api-actions",level:4},{value:"Assign Business Metrics to Cost Reports",id:"assign-metrics",level:2},{value:"View Per Unit Costs on Cost Reports",id:"view-per-unit-costs-on-cost-reports",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"per-unit-costs"},"Per Unit Costs"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"unit")," is any metric that your business tracks, such as users, requests, transactions, customers, vendors, and so on. Unit costs can help you analyze the cost of goods sold (COGS). You can add unit costs as a visualization on ",(0,i.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports")," to visualize your cloud infrastructure costs on a per unit basis. ",(0,i.kt)("em",{parentName:"p"},"Business metrics")," are the units of data from your business that are aggregated and combined with costs to produce per unit costs on Cost Reports. By importing these business metrics into Vantage, you can track unit costs, like cost per daily active user, COGS per customer, cost per million API requests, etc."),(0,i.kt)("p",null,"In the visual example below, the business metric ",(0,i.kt)("strong",{parentName:"p"},"Per Requests per Second")," is visualized in the graph as a red line alongside daily costs. You can use this visualization to understand how changes in the request metric contribute to changes in your costs."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{alt:"Per Unit Costs displayed as a trend line on the graph in a Cost Report",width:"100%",src:"/img/per-unit-costs.png"})),(0,i.kt)("h2",{id:"import-business-metrics"},"Import Business Metrics"),(0,i.kt)("p",null,"Business metrics can be imported from other systems directly into Vantage and analyzed alongside cost data. You can create automatic import integrations with Amazon CloudWatch, manually import these metrics from a CSV file, or automatically upload metrics via the Vantage API."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following steps are for importing via CloudWatch or a CSV file. If you want to automatically import metrics, see ",(0,i.kt)("a",{parentName:"p",href:"/per_unit_costs#import-api"},"Import via the Vantage API"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,i.kt)("strong",{parentName:"li"},"Financial Planning"),"."),(0,i.kt)("li",{parentName:"ol"},"On the left navigation, click ",(0,i.kt)("strong",{parentName:"li"},"Business Metrics"),". All existing business metrics are displayed. You can edit or delete business metrics from this screen."),(0,i.kt)("li",{parentName:"ol"},"From the top right of the screen, click ",(0,i.kt)("strong",{parentName:"li"},"New Business Metric"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a business metric ",(0,i.kt)("strong",{parentName:"li"},"Title")," and click ",(0,i.kt)("strong",{parentName:"li"},"Create Business Metric"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"Business Metrics")," screen is displayed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Assigned Cost Reports")," section, you can select one or more Cost Reports where the business metric will be displayed. See the ",(0,i.kt)("a",{parentName:"li",href:"/per_unit_costs#assign-metrics"},"Assign Business Metrics to Cost Reports")," section for details."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Import Business Metrics")," section, you can import business metrics from a ",(0,i.kt)("a",{parentName:"li",href:"/per_unit_costs#importing-from-a-csv"},"CSV file"),", ",(0,i.kt)("a",{parentName:"li",href:"/per_unit_costs#importing-from-cloudwatch"},"Amazon CloudWatch"),", or ",(0,i.kt)("a",{parentName:"li",href:"/per_unit_costs#importing-from-datadog"},"Datadog"),".")))),(0,i.kt)("h3",{id:"importing-from-a-csv"},"Import from a CSV File"),(0,i.kt)("p",null,"You can upload a CSV file that uses the following two-column format. This CSV file can replace existing data or be used to import new data. You can supply up to six months of metrics."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," column must be in ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. The ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," column must be a number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"date,amount\n2024-01-09,295\n2024-01-16,909\n2024-01-23,934\n2024-01-30,772\n2024-02-06,770\n2024-02-13,170\n2024-02-20,819\n2024-02-27,307\n...\n")),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Upload a CSV"),". Select the CSV file and upload. After the file is imported, a dropdown menu for each month is displayed. For months with imported metrics, the date and associated metric number are displayed. Months with no metrics are blank."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to view visual example"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{alt:"The Imported Costs section with costs displayed for a month",width:"80%",src:"/img/imported-data.png"}))),(0,i.kt)("p",null,"To add additional metrics or change the value of a metric, update your source CSV file. Then, click ",(0,i.kt)("strong",{parentName:"p"},"Edit")," and upload the edited file. The new or updated metric is displayed in the table. See the ",(0,i.kt)("a",{parentName:"p",href:"/per_unit_costs#assign-metrics"},"Assign Business Metrics to Cost Reports")," section for the next steps."),(0,i.kt)("h3",{id:"importing-from-cloudwatch"},"Import from Amazon CloudWatch"),(0,i.kt)("p",null,"To import business metrics from Amazon CloudWatch, you need a specific metric name and AWS account, as described below. Ensure AWS is one of your ",(0,i.kt)("a",{parentName:"p",href:"/connecting_aws"},"connected providers")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If Vantage does not have a Cross-Account IAM Role associated with your AWS account, you need to create one. See the ",(0,i.kt)("a",{parentName:"p",href:"/connecting_aws"},"AWS integration")," documentation for details.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Import Business Metrics")," section, click ",(0,i.kt)("strong",{parentName:"li"},"Import via CloudWatch"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"AWS Account"),", select the connected AWS account you want to import metrics from."),(0,i.kt)("li",{parentName:"ol"},"Select an AWS ",(0,i.kt)("strong",{parentName:"li"},"Region"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Namespace"),". A complete list of available namespaces can be found in the AWS documentation for ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html"},"AWS services that publish CloudWatch Metrics"),". Namespaces start with ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS/")," followed by the service name (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS/EC2"),")."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Metric name"),". Each AWS service has metrics that it ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/viewing_metrics_with_cloudwatch.html"},"sends to CloudWatch"),". Available metrics can be found in CloudWatch or the AWS documentation.",(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The AWS documentation includes a list of available metrics for services. For example, you can view ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html"},"EC2 instance metrics"),". An example metric to track in this instance is ",(0,i.kt)("inlineCode",{parentName:"p"},"CPUUtilization"),". For ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-metrics.html"},"Amazon RDS"),", an example metric to track is ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteIOPS")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadIOPS"),"."))),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Dimensions"),", enter a ",(0,i.kt)("strong",{parentName:"li"},"Name")," and ",(0,i.kt)("strong",{parentName:"li"},"Value"),". ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension"},"Dimensions")," are used to pull specific statistical data for a metric. For example, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"InstanceId")," with a value of ",(0,i.kt)("inlineCode",{parentName:"li"},"i-1234567890abcdef0"),". Each CloudWatch metric has a set of dimensions you can select. Click ",(0,i.kt)("strong",{parentName:"li"},"+ Add a Dimension")," to add more than one dimension."),(0,i.kt)("li",{parentName:"ol"},"For each import, you must specify the ",(0,i.kt)("strong",{parentName:"li"},"Aggregation")," function to be used because metrics will be aggregated to the day. Select either ",(0,i.kt)("strong",{parentName:"li"},"Sum"),", ",(0,i.kt)("strong",{parentName:"li"},"Average"),", ",(0,i.kt)("strong",{parentName:"li"},"Maximum"),", or ",(0,i.kt)("strong",{parentName:"li"},"Minimum"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Import Data"),".",(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to view visual example"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{alt:"The CloudWatch metrics import screen with data added to each field",width:"100%",src:"/img/import-cloudwatch.png"}))))),(0,i.kt)("p",null,"Metrics are imported for the last six months. The metrics will be automatically synced, daily, along with cost data from other integrations. See the ",(0,i.kt)("a",{parentName:"p",href:"/per_unit_costs#assign-metrics"},"Assign Business Metrics to Cost Reports")," section for the next steps."),(0,i.kt)("h3",{id:"importing-from-datadog"},"Import from Datadog"),(0,i.kt)("p",null,"To import business metrics from Datadog, ensure Datadog is one of your ",(0,i.kt)("a",{parentName:"p",href:"/connecting_datadog"},"connected providers"),". If you do not have Datadog as one of your connected providers, you will be prompted to connect your Datadog account the first time you try to create a metric."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Import Business Metrics")," section, click ",(0,i.kt)("strong",{parentName:"li"},"Import via Datadog"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Account"),", select the connected Datadog account for which you want to import metrics. If this is your first Datadog metric, you may be prompted to reauthorize your Datadog credentials and the required scopes for Vantage (i.e., ",(0,i.kt)("inlineCode",{parentName:"li"},"usage_read"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"metrics_read"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"timeseries_query scopes"),")."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Metric"),", enter a metric along with any specific filter criteria for the metric, as shown in the example below: ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"aws.applicationelb.request_count{availabilityzone:us-east-1c, region:us-east-1}\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information on the Datadog filtering syntax, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/metrics/advanced-filtering/"},"Datadog documentation"),"."))),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Aggregation"),", select either ",(0,i.kt)("strong",{parentName:"li"},"Sum"),", ",(0,i.kt)("strong",{parentName:"li"},"Average"),", ",(0,i.kt)("strong",{parentName:"li"},"Maximum"),", or ",(0,i.kt)("strong",{parentName:"li"},"Minimum"),". The metric is aggregated to the day based on your selection.",(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to view visual example"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{alt:"The Datadog metrics import screen with data added to each field",width:"100%",src:"/img/import-datadog.png"})))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Import Data"),".")),(0,i.kt)("p",null,"Metrics will be imported for the last six months. The metrics will be automatically synced, daily, along with cost data from other integrations. See the ",(0,i.kt)("a",{parentName:"p",href:"/per_unit_costs#assign-metrics"},"Assign Business Metrics to Cost Reports")," section for the next steps."),(0,i.kt)("h3",{id:"import-api"},"Import via the Vantage API"),(0,i.kt)("p",null,"You can import business metrics to Vantage, from other applications, with the Vantage API. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business_metrics")," endpoint to view, create, update, and delete business metrics."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The basic steps for using this endpoint are provided below. See the ",(0,i.kt)("a",{parentName:"p",href:"https://vantage.readme.io/reference/createbusinessmetric"},"API documentation")," for details on parameters, sample requests, and sample responses.")),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Ensure you have a valid Read/Write ",(0,i.kt)("a",{parentName:"p",href:"/vantage_account#api-token"},"Vantage API token"),"."),(0,i.kt)("h4",{id:"create-a-business-metric"},"Create a Business Metric"),(0,i.kt)("p",null,"The following example shows how to create a business metric by sending a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business_metrics")," endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n     --url https://api.vantage.sh/v2/business_metrics \\\n     --header \'accept: application/json\' \\\n     --header \'authorization: Bearer <AUTH_TOKEN>\' \\\n     --header \'content-type: application/json\' \\\n     --data \'\n{\n  "title": "API Requests",\n  "cost_report_tokens_with_metadata": [\n    {\n      "unit_scale": "per_unit",\n      "cost_report_token": "rprt_12abc345def678gh"\n    }\n  ],\n  "values": [\n    {\n      "date": "2024-02-01",\n      "amount": 1512\n    },\n    {\n      "date": "2024-02-02",\n      "amount": 1816\n    },\n    {\n      "date": "2024-02-03",\n      "amount": 1236\n    }\n  ]\n}\n\'\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," is a string that represents the business metric title (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"Requests")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"CPUUtilization"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cost_report_tokens_with_metadata")," is an array of objects that represents one or more Cost Reports you want the business metric to be added to. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cost_report_token")," is the unique ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," for the Cost Report.",(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can access ",(0,i.kt)("inlineCode",{parentName:"p"},"cost_report_tokens")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"/cost_reports")," ",(0,i.kt)("a",{parentName:"p",href:"https://vantage.readme.io/reference/getcostreports"},"endpoint"),"."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"unit_scale")," determines the scale of the business metric's values within the Cost Report. It has a default value of ",(0,i.kt)("inlineCode",{parentName:"li"},"per_unit"),". Other options include ",(0,i.kt)("inlineCode",{parentName:"li"},"per_hundred"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"per_thousand"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"per_million"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"per_billion"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")," is an array of objects that comprises the ",(0,i.kt)("inlineCode",{parentName:"li"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," key/value pairs associated with each business metric data point.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date")," needs to be in ",(0,i.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD")," format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," needs to be a number.")))),(0,i.kt)("p",null,"The following JSON is returned in a successful ",(0,i.kt)("inlineCode",{parentName:"p"},"201")," response, which includes the unique business metric ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),". Dates in the response are displayed in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "bsnss_mtrc_ab12345cde67fg8",\n  "title": "API Requests",\n  "created_by_token": "usr_0a123456789abcde",\n  "cost_report_tokens_with_metadata": [\n    {\n      "cost_report_token": "rprt_12abc345def678gh",\n      "unit_scale": "per_unit"\n    }\n  ],\n  "values": [\n    { "date": "2024-02-01T00:00:00Z", "amount": "1512.0" },\n    { "date": "2024-02-02T00:00:00Z", "amount": "1816.0" },\n    { "date": "2024-02-03T00:00:00Z", "amount": "1236.0" }\n  ]\n}\n')),(0,i.kt)("h4",{id:"update-a-business-metric"},"Update a Business Metric"),(0,i.kt)("p",null,"If you need to update or add additional data to a business metric, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business_metrics/{business_metric_token}")," endpoint. In the below example, an additional month of data is added to the business metric that was previously created. The request ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," includes the unique business metric ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),", received in the response from the ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," call, to update the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request PUT \\\n     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \\\n     --header \'accept: application/json\' \\\n     --header \'authorization: Bearer <AUTH_TOKEN>\' \\\n     --header \'content-type: application/json\' \\\n     --data \'\n{\n    "values": [\n        {"date": "2024-03-01", "amount": 1743},\n        {"date": "2024-03-02", "amount": 1356},\n        {"date": "2024-03-03", "amount": 1563}\n    ]\n}\n\'\n')),(0,i.kt)("p",null,"The following JSON is returned in a successful ",(0,i.kt)("inlineCode",{parentName:"p"},"201")," response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "bsnss_mtrc_ab12345cde67fg8",\n  "title": "API Requests",\n  "created_by_token": "usr_0a123456789abcde",\n  "cost_report_tokens_with_metadata": [\n    {\n      "cost_report_token": "rprt_12abc345def678gh",\n      "unit_scale": "per_unit"\n    }\n  ],\n  "values": [\n    { "date": "2024-02-01T00:00:00Z", "amount": "1512.0" },\n    { "date": "2024-02-02T00:00:00Z", "amount": "1816.0" },\n    { "date": "2024-02-03T00:00:00Z", "amount": "1236.0" },\n    { "date": "2024-03-01T00:00:00Z", "amount": "1743.0" },\n    { "date": "2024-03-02T00:00:00Z", "amount": "1356.0" },\n    { "date": "2024-03-03T00:00:00Z", "amount": "1563.0" }\n  ]\n}\n')),(0,i.kt)("p",null,"You can also upload data via a CSV. Send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business_metrics/{business_metric_token}/values.csv")," endpoint using the business metric\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),". Specify a path to the CSV in the ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request PUT \\\n     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8/values.csv \\\n     --header 'accept: application/json' \\\n     --header 'authorization: Bearer <AUTH_TOKEN>' \\\n     --header 'content-type: multipart/form-data' \\\n     --form 'csv=@<PATH_TO_CSV>'\n")),(0,i.kt)("h4",{id:"additional-api-actions"},"Additional API Actions"),(0,i.kt)("p",null,"To get all business metrics your API token has access to, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n     --url https://api.vantage.sh/v2/business_metrics \\\n     --header 'accept: application/json' \\\n     --header 'authorization: Bearer <AUTH_TOKEN>'\n")),(0,i.kt)("p",null,"You can also specify a specific business metric ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," to get data for only one business metric."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \\\n     --header 'accept: application/json' \\\n     --header 'authorization: Bearer <AUTH_TOKEN>'\n")),(0,i.kt)("p",null,"If you want to remove values for certain dates, you can pass an empty value as the ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," for that ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),". Send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business_metrics/{business_metric_token}")," endpoint using the business metric\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),". In the below example, an existing amount is removed for March 10th."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request PUT \\\n     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \\\n     --header 'accept: application/json' \\\n     --header 'authorization: Bearer <AUTH_TOKEN>' \\\n     --header 'content-type: application/json' \\\n     --data '\n{\n  \"values\": [\n    {\n      \"date\": \"2024-03-10T00:00:00Z\",\n      \"amount\": null\n    }\n  ]\n}\n'\n")),(0,i.kt)("p",null,"If you want to ",(0,i.kt)("em",{parentName:"p"},"completely")," delete a business metric, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/business_metrics")," endpoint, and specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," for the business metric you want to delete in the ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request DELETE \\\n     --url https://api.vantage.sh/v2/business_metrics/bsnss_mtrc_ab12345cde67fg8 \\\n     --header 'accept: application/json' \\\n     --header 'authorization: Bearer <AUTH_TOKEN>'\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that the ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," action is permanent, and you will no longer have access to that business metric or see it displayed on corresponding reports.")),(0,i.kt)("h2",{id:"assign-metrics"},"Assign Business Metrics to Cost Reports"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{alt:"Assign metric to cost report",width:"80%",src:"/img/assign-metrics-cost-report.png"})),(0,i.kt)("p",null,"Once your import is complete you can assign metrics to one or more Cost Reports. You can also assign as many different business metrics to a Cost Report as you want."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("strong",{parentName:"li"},"Assigned Cost Reports"),", click ",(0,i.kt)("strong",{parentName:"li"},"+ Add a Report"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Report")," dropdown menu, search for and select a Cost Report."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"Unit Scale"),", select either ",(0,i.kt)("strong",{parentName:"li"},"Per Unit"),", ",(0,i.kt)("strong",{parentName:"li"},"Per Hundred"),", ",(0,i.kt)("strong",{parentName:"li"},"Per Thousand"),", ",(0,i.kt)("strong",{parentName:"li"},"Per Million"),", or ",(0,i.kt)("strong",{parentName:"li"},"Per Billion"),". The scale is used to divide the business metric before calculating the cost per unit. Use this scale to create a per-unit cost, such as ",(0,i.kt)("em",{parentName:"li"},"Cost per Thousand Requests"),". If you select ",(0,i.kt)("strong",{parentName:"li"},"Per Unit"),", no division occurs, and the actual metric number will be used within the Cost Report."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),". The metric is displayed on the corresponding Cost Report based on the selected scale.")),(0,i.kt)("h2",{id:"view-per-unit-costs-on-cost-reports"},"View Per Unit Costs on Cost Reports"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{alt:"Per Unit Costs displayed on a Cost Report",width:"100%",src:"/img/per-unit-costs-cost-report.png"})),(0,i.kt)("p",null,"To inspect your unit costs, navigate to the assigned Cost Report. The average unit cost for the date range selected is displayed at the top of the screen."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To see the cost per unit line, ensure your view is set to daily, weekly, or monthly.")),(0,i.kt)("p",null,"Hover over a data point to see the cost per unit for that day, week, or month. If you add multiple business metrics to the same Cost Report, each business metric is displayed as a separate line, as shown in the example above."))}d.isMDXComponent=!0}}]);