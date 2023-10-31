"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[9265],{9478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=a(7462),r=a(7294),l=a(3905),i=a(4866),s=a(5162),o=a(7882);const m={color:"#9c25c7",display:"flex",justifyContent:"center",alignItems:"center"};const k=function(){return r.createElement("div",{style:m},r.createElement(o.Reu,{alt:"checkmark"}))},c={id:"rbac",title:"Role-Based Access Control (RBAC)",description:"This page provides an overview of advanced access controls and RBAC in the Vantage console.",keywords:["RBAC","Role-based access control"]},d="Role-Based Access Control (RBAC)",p={unversionedId:"rbac",id:"rbac",title:"Role-Based Access Control (RBAC)",description:"This page provides an overview of advanced access controls and RBAC in the Vantage console.",source:"@site/docs/rbac.md",sourceDirName:".",slug:"/rbac",permalink:"/rbac",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/rbac.md",tags:[],version:"current",frontMatter:{id:"rbac",title:"Role-Based Access Control (RBAC)",description:"This page provides an overview of advanced access controls and RBAC in the Vantage console.",keywords:["RBAC","Role-based access control"]},sidebar:"someSidebar",previous:{title:"Vantage Account Settings",permalink:"/vantage_account"},next:{title:"Self-Service SSO",permalink:"/sso"}},g={},u=[{value:"Organization Access Control",id:"organization-access-control",level:2},{value:"Manage Organization Access",id:"manage-organization-access",level:3},{value:"Settings Permissions",id:"settings-permissions",level:3},{value:"Financial Planning Permissions",id:"financial-planning-permissions",level:3},{value:"Team-Based Access Control",id:"team-based-access-control",level:2},{value:"Manage Team Access",id:"manage-team-access",level:3},{value:"Create or Delete Teams (Organization Owners Only)",id:"create-or-delete-teams-organization-owners-only",level:4},{value:"Manage a Team (Organization Owners and Team Owners)",id:"manage-a-team-organization-owners-and-team-owners",level:4},{value:"Manage Resource Access",id:"manage-resource-access",level:3},{value:"Cost Reporting Resources: Organization Permissions",id:"cost-reporting-resources-organization-permissions",level:3},{value:"Cost Reporting: Team Permissions Team-Only Resource Access",id:"cost-reporting-team-permissions-team-only-resource-access",level:3}],h={toc:u},N="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(N,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"role-based-access-control-rbac"},"Role-Based Access Control (RBAC)"),(0,l.kt)("p",null,"Advanced role-based access controls are available within Vantage for Enterprise tier accounts. These controls facilitate fine-grained management of resource access through two distinct levels: organization and team."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Organization access"),": This level determines a user's access to a given ",(0,l.kt)("a",{parentName:"li",href:"/workspaces"},"workspace"),". Organization access also determines the team-level permissions assigned to a given user to interact with Settings-related functions, such as configuring provider integrations or creating teams, as well as Financial Planning functions, such as Autopilot and Budget Alerts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team-based access"),': Offering more detailed control, this level determines the specific Cost Reporting resources \u2014 such as Cost Reports, Dashboards, or Folders \u2014 that a user can view and/or edit. By default, all users are members of the "Everyone" team. Org Owners have the ability to control what workspaces/resources the Everyone team can access. You can update the access accordingly based on your organization\'s access control strategy. ')),(0,l.kt)("p",null,"Both access types have three available roles \u2013 Owner, Editor, and Viewer \u2013 each with its own set of permissions. These permissions are distinct for account ",(0,l.kt)("a",{parentName:"p",href:"/rbac#settings-permissions"},"Settings")," functions, ",(0,l.kt)("a",{parentName:"p",href:"/rbac#cost-reporting-resources-organization-permissions"},"Cost Reporting")," functions, and ",(0,l.kt)("a",{parentName:"p",href:"/rbac#financial-planning-permissions"},"Financial Planning")," functions."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The RBAC feature is provided with Enterprise accounts. Accounts in non-Enterprise tiers have a single Owner, Member, or Viewer role that is global.")),(0,l.kt)("h2",{id:"organization-access-control"},"Organization Access Control"),(0,l.kt)("p",null,"The Org Owner, Org Editor, and Org Viewer roles are described below.  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Role Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner"),(0,l.kt)("td",{parentName:"tr",align:null},"An Org Owner has full access to all resources. This role can also manage teams, integrations, and workspaces within an account. Even if the Everyone team is removed from a resource, the Owner will still be able to manage that resource.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor"),(0,l.kt)("td",{parentName:"tr",align:null},"An Org Editor can view and edit only resources their team(s) have access to. This role can manage budgets, savings models, and issues. This role cannot manage teams (see ",(0,l.kt)("em",{parentName:"td"},"Exception")," below), integrations, or workspaces. If the Everyone team is removed from a resource, they will lose permissions to it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer"),(0,l.kt)("td",{parentName:"tr",align:null},"An Org Viewer has read-only access. They can see a resource unless the Everyone team is removed from that resource.")))),(0,l.kt)("admonition",{title:"Exception",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If a user holds the roles of Org Editor or Org Viewer and is additionally assigned the ",(0,l.kt)("em",{parentName:"p"},"Team Owner")," role, they gain extended privileges. With the Team Owner role, the user gains access to and manage Teams \u2014 but only the team for which they hold the Team Owner role. Org Owner is the only role that can create new teams. See ",(0,l.kt)("a",{parentName:"p",href:"/rbac#team-based-access-control"},"Team-Based Access Control")," for more information.")),(0,l.kt)("h3",{id:"manage-organization-access"},"Manage Organization Access"),(0,l.kt)("p",null,"The Org Owner role has the highest access at the organization level. Org Owner is the only role that can add/remove users as well as change another user's Organization role. "),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"add-user",label:"Add a New User",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the top navigation, click ",(0,l.kt)("strong",null,"Settings"),"."),(0,l.kt)("li",null,"From the left navigation, under ",(0,l.kt)("strong",null,"Organization Settings"),", click ",(0,l.kt)("strong",null,"People"),"."),(0,l.kt)("li",null,"On the right, click ",(0,l.kt)("strong",null,"+ Invite"),"."),(0,l.kt)("li",null,"Enter the new user's email, then select their ",(0,l.kt)("strong",null,"Role")," and any ",(0,l.kt)("strong",null,"Teams"),"."),(0,l.kt)("li",null,"Click ",(0,l.kt)("strong",null,"Send Invitation"),"."))),(0,l.kt)(s.Z,{value:"change-user-org",label:"Change a User's Organization Role",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the top navigation, click ",(0,l.kt)("strong",null,"Settings"),"."),(0,l.kt)("li",null,"From the left navigation, under ",(0,l.kt)("strong",null,"Organization Settings"),", click ",(0,l.kt)("strong",null,"People"),"."),(0,l.kt)("li",null,"Hover over the user's row in the ",(0,l.kt)("strong",null,"People")," list, then click the ellipses (",(0,l.kt)("strong",null,"..."),")."),(0,l.kt)("li",null,"Click ",(0,l.kt)("strong",null,"Edit"),", then select the new user ",(0,l.kt)("strong",null,"Role"),"."),(0,l.kt)("li",null,"Click ",(0,l.kt)("strong",null,"Save Changes"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"settings-permissions"},"Settings Permissions"),(0,l.kt)("p",null,"The following permissions are relevant to specific functions in the console, including Authentication, Billing & Plans, Integrations, People, Teams, and Workspaces. These Settings-related permissions are enforced at the Organization level."),(0,l.kt)("admonition",{title:"Exception",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If a user holds the roles of Org Editor or Org Viewer and is additionally assigned the ",(0,l.kt)("em",{parentName:"p"},"Team Owner")," role, they gain extended privileges. With the Team Owner role, the user gains access to and can interact with the Teams UI \u2014 but only for the team for which they hold the Team Owner role.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"View"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Settings Permissions Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scenario 1"),": You want to create new provider integration, such as a new Azure connection. An Org Owner will need to create the connection. An Org Editor and Org Viewer ",(0,l.kt)("em",{parentName:"li"},"will not")," be able to create, view, delete, or update the integration."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scenario 2"),": You have the role of Org Editor. In addition, you are a Team Owner for the Engineering team. Because you are an Org Editor, you will ",(0,l.kt)("em",{parentName:"li"},"not")," be able to see or interact with Settings functions, such as Authentication, Billing & Plans, etc. You will, however, be able to interact with the Teams function, but only for the Engineering team where you are the Team Owner."))),(0,l.kt)("h3",{id:"financial-planning-permissions"},"Financial Planning Permissions"),(0,l.kt)("p",null,"The following permissions are relevant to specific screens in the console, including Autopilot, Budgets, Budget Alerts, Business Metrics, Issues, Reserved Instances, Savings Models, and Savings Plans Usage. These Financial Planning-related permissions are enforced at the Organization level."),(0,l.kt)("admonition",{title:"Exception",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If an Org Viewer is assigned to an issue, they will have update permissions for that issue. ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"View"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Financial Planning Permissions Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scenario 1"),": You want to create new provider Budget Alert. An Org Owner or Org Editor will need to create and manage the alert. An Org Viewer will only be able to ",(0,l.kt)("em",{parentName:"li"},"view")," the alert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scenario 2"),": You are an Org Viewer. You can view all issues; however, you cannot edit or comment on the issues. Org Owners and Org Editors can create and manage issues. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You are assigned a new issue. You can now edit and comment on only this new issue."))))),(0,l.kt)("h2",{id:"team-based-access-control"},"Team-Based Access Control"),(0,l.kt)("p",null,"A user has access both at the organization level and within each team they are a member of; however, ",(0,l.kt)("strong",{parentName:"p"},"organization roles take precedence over team roles"),". For example, if a user is an Org Owner, but they are only a Team Viewer on the Engineering team, they can still view and manage resources within the Engineering team \u2014 as well as all other teams \u2014 because their Org Owner role takes precedence over the Team Viewer role. "),(0,l.kt)("p",null,"The Team Owner, Team Editor, and Team Viewer roles are described below.  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Team Owner"),(0,l.kt)("td",{parentName:"tr",align:null},"A Team Owner has full control over resources to which that team is granted access. Team Owners also have the ability to change which teams can access their team's resources. They can also manage members of their team.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Team Editor"),(0,l.kt)("td",{parentName:"tr",align:null},"A Team Editor has full control over resources to which that team is granted access; however, they cannot manage the members of the team.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Team Viewer"),(0,l.kt)("td",{parentName:"tr",align:null},"A Team Viewer has read-only access to all resources to which that team is granted access.")))),(0,l.kt)("h3",{id:"manage-team-access"},"Manage Team Access"),(0,l.kt)("h4",{id:"create-or-delete-teams-organization-owners-only"},"Create or Delete Teams (Organization Owners Only)"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"By default, all Vantage users are part of the Everyone team. Users ",(0,l.kt)("em",{parentName:"p"},"cannot")," be removed from this team.")),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("img",{alt:"Team management window",width:"50%",src:"/img/team-management.png"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,l.kt)("strong",{parentName:"li"},"Settings"),"."),(0,l.kt)("li",{parentName:"ol"},"On the left navigation, under ",(0,l.kt)("strong",{parentName:"li"},"Organization Settings"),", click ",(0,l.kt)("strong",{parentName:"li"},"Teams"),". "),(0,l.kt)("li",{parentName:"ol"},"On the Teams view, Org Owners can manage, add, or delete teams. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To add a team, click ",(0,l.kt)("strong",{parentName:"li"},"+ New Team"),". Add a ",(0,l.kt)("strong",{parentName:"li"},"Name")," and ",(0,l.kt)("strong",{parentName:"li"},"Description"),", then click ",(0,l.kt)("strong",{parentName:"li"},"Create Team"),"."),(0,l.kt)("li",{parentName:"ul"},"To delete a team, hover over the team's name in the team list, then click ",(0,l.kt)("strong",{parentName:"li"},"Delete"),".")))),(0,l.kt)("h4",{id:"manage-a-team-organization-owners-and-team-owners"},"Manage a Team (Organization Owners and Team Owners)"),(0,l.kt)("p",null,"To manage a team, select the team from the ",(0,l.kt)("strong",{parentName:"p"},"Teams")," list. Three tabs are displayed: General, Members, and Access. "),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("img",{alt:"Team management tabs and options",width:"60%",src:"/img/team-management-details.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On the ",(0,l.kt)("strong",{parentName:"li"},"General")," tab, you can edit the team name and description."),(0,l.kt)("li",{parentName:"ul"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Members")," tab, you can add and remove members from a team as well as change a member's team role. Only Org Owners will be able to perform these actions. Additionally, Team Owners, regardless of Organization role, can perform these actions for their respective team. "),(0,l.kt)("li",{parentName:"ul"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Access")," tab, Org Owners and Team Owners can manage workspace access for the team as well as view resources with granted access. ")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"add-member",label:"Add a Member",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the ",(0,l.kt)("strong",null,"Members")," tab, click ",(0,l.kt)("strong",null,"+ Add Members"),"."),(0,l.kt)("li",null,"Select member(s) from the list."),(0,l.kt)("li",null,"Click ",(0,l.kt)("strong",null,"Add People"),"."))),(0,l.kt)(s.Z,{value:"remove-member",label:"Remove a Member",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the ",(0,l.kt)("strong",null,"Members")," tab, hover over a user's name in the Members list."),(0,l.kt)("li",null,"On the right, click ",(0,l.kt)("strong",null,"Remove"),"."))),(0,l.kt)(s.Z,{value:"change-role",label:"Change Member's Role",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the ",(0,l.kt)("strong",null,"Role")," column of the ",(0,l.kt)("strong",null,"Members")," tab, select the role dropdown."),(0,l.kt)("li",null,"Select a new role from the list."))),(0,l.kt)(s.Z,{value:"manage-workspace",label:"Manage Workspace Access",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"On the ",(0,l.kt)("strong",null,"Access")," tab, in the ",(0,l.kt)("strong",null,"Workspace Access")," box, click the dropdown next to the workspace name."),(0,l.kt)("li",null,"Select the appropriate level of workspace access for the team: ",(0,l.kt)("strong",null,"Can Edit"),", ",(0,l.kt)("strong",null,"Can View"),", or ",(0,l.kt)("strong",null,"No Access"),"."))),(0,l.kt)(s.Z,{value:"remove-granted",label:"View Granted Access",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the ",(0,l.kt)("strong",null,"Granted Access")," box, select a resource for which the team was granted access. You will be brought to the resource (e.g., a Cost Report)."),(0,l.kt)("li",null,"You can then edit or remove granted access directly from the resource itself.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"manage-resource-access"},"Manage Resource Access"),(0,l.kt)("p",null,"You can manage access for individual Cost Reporting resources, including Cost Reports, Cost Report Folders, Dashboards, Saved Filters, Resource Reports, and Segments."),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("img",{alt:"Manage access to a Cost Reporting dashboard",width:"75%",src:"/img/resource-access.png"})),(0,l.kt)("p",null,"You can manage resource-level access from the Cost Reporting navigation list or from directly within a resource."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"from-list",label:"Manage Access from Cost Reporting List",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the top navigation, click ",(0,l.kt)("strong",null,"Cost Reporting"),". (For Resource Reports, click ",(0,l.kt)("strong",null,"Active Resources")," > ",(0,l.kt)("strong",null,"Resource Reports"),".)"),(0,l.kt)("li",null,"Select the resource category from the left navigation (e.g., Cost Reports or Segments)."),(0,l.kt)("li",null,"Hover over any resource in the list, then click the ellipses (",(0,l.kt)("strong",null,"..."),") on the right."),(0,l.kt)("li",null,"Select ",(0,l.kt)("strong",null,"Manage Access"),"."),(0,l.kt)("li",null,"Select a team from the list, and indicate the team's access level to the resource:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",null,"Can Access"),": The team will have access to the resource."),(0,l.kt)("li",null,(0,l.kt)("strong",null,"Cannot Access"),": The team will not have access to the resource."),(0,l.kt)("li",null,(0,l.kt)("strong",null,"Reset Access"),": The team will not have access to the resource unless the team is assigned to the workspace the resource is associated with. For instance, if a specific resource from the Marketing workspace, such as a Saved Filter, was shared with the Management team, which has access only to the Management workspace, resetting the access will result in the Management team no longer having access to the Saved Filter."))))),(0,l.kt)(s.Z,{value:"from-resource",label:"Manage Access from Inside Resource",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"From the top navigation, click ",(0,l.kt)("strong",null,"Cost Reporting"),". (For Resource Reports, click ",(0,l.kt)("strong",null,"Active Resources")," > ",(0,l.kt)("strong",null,"Resource Reports"),".)"),(0,l.kt)("li",null,"Select the resource category from the left navigation (e.g., Cost Reports or Segments)."),(0,l.kt)("li",null,"Hover over any resource in the list, and click the ellipses (",(0,l.kt)("strong",null,"..."),") on the right."),(0,l.kt)("li",null,"From the top of any resource, such as a Cost Report, click the ellipses (",(0,l.kt)("strong",null,"..."),")."),(0,l.kt)("li",null,"Select ",(0,l.kt)("strong",null,"Manage Access"),"."),(0,l.kt)("li",null,"Select the desired access, then click ",(0,l.kt)("strong",null,"Save"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cost-reporting-resources-organization-permissions"},"Cost Reporting Resources: Organization Permissions"),(0,l.kt)("p",null,"Organization permissions apply for resources in which Everyone team access ",(0,l.kt)("em",{parentName:"p"},"has not")," been revoked."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Manage Access"),(0,l.kt)("th",{parentName:"tr",align:null},"View"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to grant access on a resource (for example, a Dashboard) to only a specific team (for example, the Marketing team), set the Everyone team to ",(0,l.kt)("strong",{parentName:"p"},"Cannot Access"),", and set the Marketing team to ",(0,l.kt)("strong",{parentName:"p"},"Can Access"),"."),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("img",{alt:"Remove Everyone team from resource",width:"50%",src:"/img/remove-everyone-team.png"}))),(0,l.kt)("h3",{id:"cost-reporting-team-permissions-team-only-resource-access"},"Cost Reporting: Team Permissions Team-Only Resource Access"),(0,l.kt)("p",null,"The team-only access permissions shown below apply for resources in which the Everyone team access has been revoked and the member's team has been granted access."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Manage Access"),(0,l.kt)("th",{parentName:"tr",align:null},"View"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner (No team access)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor (No team access)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer (No team access)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner + Team Owner"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner + Team Editor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Owner + Team Viewer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor + Team Owner"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor + Team Editor"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Editor + Team Viewer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer + Team Owner"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer + Team Editor"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Org Viewer + Team Viewer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(k,{mdxType:"Checkmark"}))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If a user is on multiple teams that have conflicting permissions, the higher level of permissions will be granted. ")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Multiple Teams Resource Scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A user is on the Marketing team with ",(0,l.kt)("strong",{parentName:"li"},"Team Owner")," permissions. "),(0,l.kt)("li",{parentName:"ul"},"They are also on the Engineering team with ",(0,l.kt)("strong",{parentName:"li"},"Team Viewer")," permissions. "),(0,l.kt)("li",{parentName:"ul"},"Both teams are granted access to a Saved Filter. ")),(0,l.kt)("p",null,"The user will be granted Owner-level permissions to that resource, in other words, they can view ",(0,l.kt)("em",{parentName:"p"},"and")," manage that resource.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Multiple Workspace Access Scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A user is on the Data Analyst team and the Data Engineering team.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The Data Engineering team has ",(0,l.kt)("strong",{parentName:"li"},"Can Edit")," access to the Engineering workspace."),(0,l.kt)("li",{parentName:"ul"},"The Data Analyst team has ",(0,l.kt)("strong",{parentName:"li"},"Can View")," access to the Engineering workspace."))),(0,l.kt)("li",{parentName:"ul"},"The user has edit privileges to resources in the Engineering workspace because of their ",(0,l.kt)("strong",{parentName:"li"},"Can Edit")," abilities from the Data Engineering team."))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Multiple Roles Scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A user has an ",(0,l.kt)("strong",{parentName:"li"},"Org Viewer")," and ",(0,l.kt)("strong",{parentName:"li"},"Team Owner")," role for the Management team. "),(0,l.kt)("li",{parentName:"ul"},"The user can manage resources granted to the Management team."),(0,l.kt)("li",{parentName:"ul"},"The user is unable to manage resources for the Marketing team, unless they are granted separate access. ")),(0,l.kt)("p",null,"The user will be granted Owner-level permissions to that resource, in other words, they can view ",(0,l.kt)("em",{parentName:"p"},"and")," manage that resource.")))}y.isMDXComponent=!0}}]);