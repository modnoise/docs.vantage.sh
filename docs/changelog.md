---
id: changelog
title: Changelog
description: A changelog of all user-facing updates to the Vantage console as well as API updates.
keywords:
  - Changelog
  - Release notes
pagination_prev: null
pagination_next: null
---

# Changelog

_This page was last updated on May 1, 2024, with product updates for April 2024._

## April 2024

### Product Updates

- **Visual navigation improvements:** A **Create New** menu for quick actions is available on the top navigation bar.
- **Datadog metrics:** Business metrics have been updated with the option to directly ingest [Datadog metrics](/per_unit_costs#importing-from-datadog).
- **New virtual tagging feature:** [Virtual tagging](/virtual_tagging) is available to consistently tag costs across providers in Vantage. This feature can help to increase tagging coverage across your cloud infrastructure.
- **New rightsizing recommendations:** Kubernetes [rightsizing recommendations](/cost_recommendations#kubernetes-rightsizing) are now available for rightsizing managed workloads in Kubernetes.
- **New to active resources:** Kubernetes managed workloads are synced as [active resources](/active_resources) in Vantage.
- **Expanded forecasts:** [Forecasts](/forecasting) have been expanded to include the upcoming month, the next three months, and six months ahead.
- **Kubernetes agent version:** The [Clusters](/kubernetes_agent#upgrade-agent) section of the Kubernetes agent settings screen is updated to show cluster name, version, and indicate if the cluster is out of date.
- **Expanded chart options:** [Expanded chart options](/cost_reports#adjust-chart-visualization) are available for Cost Reports, including expanded date bin selections for area and line charts and multi-line charts for grouped data.
- **API service tokens:** Users with owner-level permissions can now create [API service tokens](/vantage_account#api-token) for authenticating with the Vantage API at the account level, rather than being associated with a specific user.

### Kubernetes Agent Updates

_See [March's update](/changelog#kubernetes-agent-updates-1) for the most recent Kubernetes agent release._

### API Updates

- **New API endpoints:** The following endpoints have been added to the API:
  - The [`/resource_reports`](https://vantage.readme.io/reference/getresourcereports) endpoint automates the retrieval of existing [resource reports](/active_resources).
  - The [`/financial_commitment_reports`](https://vantage.readme.io/reference/getfinancialcommitmentreports) endpoint automates the retrieval of [financial commitment reports](/financial_commitment_reports).
  - The [`/kubernetes_efficiency_reports`](https://vantage.readme.io/reference/getkubernetesefficiencyreports) endpoint automates the retrieval of [Kubernetes efficiency reports](/kubernetes).
  - The [`/anomaly_alerts`](https://vantage.readme.io/reference/getanomalyalerts) endpoint allows you to retrieve and update [anomaly alerts](/cost_anomaly_alerts).
  - The [`/virtual_tag_configs`](https://vantage.readme.io/reference/createvirtualtagconfig) endpoint automates the creation, retrieval, and update of [virtual tags](/virtual_tagging).
  - The [`/anomaly_notifications`](https://vantage.readme.io/reference/createanomalynotification) endpoint automates the creation, retrieval, and update of anomaly notifications.
  - The [`/budgets`](https://vantage.readme.io/reference/createbudget) endpoint automates the creation, retrieval, and update of [budgets](/budgets).
  - The [`/budgets_alerts`](https://vantage.readme.io/reference/createbudgetalert) endpoint automates the creation, retrieval, and update of budgets alerts.
- **New Terraform resources:** The following resources have been added to the Terraform provider:
  - [`vantage_virtual_tag_config`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/virtual_tag_config)
  - [`vantage_anomaly_notification`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/anomaly_notification)
  - [`vantage_budget`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/budget)
  - [`vantage_business_metric`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/business_metric)
  - [`vantage_report_notification`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/report_notification)
- **New Terraform data sources:** The following data sources have been added to the Vantage provider:
  - [`vantage_anomaly_notifications`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/anomaly_notifications)
  - [`vantage_financial_commitment_reports`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/financial_commitment_reports)
  - [`vantage_kubernetes_efficiency_reports`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/kubernetes_efficiency_reports)
  - [`vantage_resource_reports`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/resource_reports)
  - [`vantage_virtual_tag_configs`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/virtual_tag_configs)
  - [`vantage_budgets`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/budgets)
  - [`vantage_business_metrics`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/business_metrics)
  - [`vantage_report_notifications`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/report_notifications)

## March 2024

### Product Updates

- **Saved filters on dashboards**: You can now add a [saved filter](/dashboards/#saved-filter) to a dashboard to view all Cost Reports on the dashboard with consistent filters applied.
- **Updated Overview page**: Associated budget and per unit costs are now displayed on Cost Report widgets on the [Overview](/overview) page.
- **Updated UI look and feel**: Visual improvements were made to the look and feel of the Overview and Budgets screens.
- **Segments sync status**: Cost allocation [segments](/segments#edit-a-segment) are now updated to show segment sync status. The look and feel of this page have been visually updated as well.
- **Filterable cost recommendations**: Recommendations are now filterable by provider on the [Cost Recommendations](/cost_recommendations) screen.
- **Pie chart option**: You can now change the [graph view](/cost_reports#configure-report-groups) on Cost Reports to a pie chart.
- **Custom date filtering**: The date picker on [Cost Reports](/cost_reports#create-report) is updated to allow for custom period selections.
- **Custom Databricks pricing**: Custom discounts are [now supported](/connecting_databricks#custom-pricing) for Databricks SKU groups.

### Kubernetes Agent Updates

The following versions were released this month.

- **Version 1.0.24** includes the following update:

  - Supports monitoring ArgoCD resources in the cluster.

- **Version 1.0.23** includes the following updates:
  - `app.kubernetes.io` labels are now allowed.
  - Agent scrape results are added to agent metadata.
  - [Prometheus metrics](/kubernetes_agent/#monitoring) are added for tracking reporting successes/failures.
  - Dependencies are updated to the latest stable versions.
  - Additional controller metadata is included in agent reports for use in [Active Resources](/active_resources).

### API Updates

- **New `tagged` option**: On the `/cost_reports` [endpoint](https://vantage.readme.io/reference/createcostreport) in the API, and the `vantage_cost_report` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/cost_report) in the Terraform provider, `tagged` is a valid option for the `groupings` parameter.
- **New dashboard parameter**: The `saved_filter_tokens` parameter is now available on the `/dashboards` [endpoint](https://vantage.readme.io/reference/createdashboard). It is also available on the `vantage_dashboard` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/dashboard) in the Terraform provider.
- **New Terraform resources**: Additional Terraform resources are now available:
  - The `vantage_segment` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/segment) automates the creation of cost allocation segments in Vantage. Large segment hierarchies can easily be automated with filters applied as needed.
  - The `vantage_team` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/segment) automates the creation of Vantage teams. Create a team and assign Vantage users, by email, to the team.
  - The `vantage_access_grant` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/access_grant) automates access grants via role-based access controls in Vantage. Create grants to allow or deny teams access to resources, like folders or Cost Reports.
  - The `vantage_report_notification` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/report_notification) automates the creation of Cost Report notifications. Create a notification for a specific Cost Report. Specify the notification’s frequency (e.g., daily) and change (e.g., in dollars).
- **Terraform data sources**: [Data sources](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/access_grants) are now available to retrieve information outside your Terraform configuration.
- **Business metrics endpoint**: The `/business_metric` [endpoint](https://vantage.readme.io/reference/createbusinessmetric) is now available to create and update business metrics in the console.

## February 2024

### Product Updates

- **Ability to group by multiple tags**: You can now group by multiple tags in the console.
- **EC2 rightsizing recommendations**: New [recommendations](/cost_recommendations) are added for rightsizing EC2 instances.
- **Segment settings**: You can now edit the default report settings on a top-level [segment report](/segments#create-a-segment).
- **Updated UI look and feel**: Visual updates were made to Financial Planning menus and screens.
- **Financial Commitment Reports**: [Financial commitment reports](/financial_commitment_reports) are now available to help you understand how your organization is utilizing financial commitments.
- **Bulk actions for folders and Cost Reports**: You can now [move and star](/folders#move-cost-reports-and-folders) folders and Cost Reports in bulk.
- **Additional operators on resource reports**: The `is greater than` and `is less than` operators are both available for Metadata filters on [resource reports](/active_resources). For example: **where** Metadata CloudWatch Log Groups Retention in Days **is greater than** 5.

### API Updates

- **New notifications endpoint:** The `/report_notifications` [endpoint](https://vantage.readme.io/reference/createreportnotification) is now available. This endpoint also now has support via the [Terraform provider](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/report_notification).
- **Multi-tag support**: The `groupings` parameter of the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts) has support for multiple tags.
- **Data sources in Terraform**: [Data sources](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/access_grants) for multiple Vantage resources are now available in the Terraform provider.
- **Segment costs**: You can now obtain costs for segment reports from the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts).
- **Settings options on segments**: The `report_settings` object is now available on the `/segments` [endpoint](https://vantage.readme.io/reference/createsegment).
- **Settings on Cost Reports**: The `settings` [object](https://vantage.readme.io/reference/createcostreport) is now available on the `/cost_reports` endpoint.

## January 2024

### Product Updates

- **PlanetScale support**: [PlanetScale](/connecting_planetscale) is now supported as a provider in Vantage.
- **Updated UI look and feel**: The **Settings** UI and main navigation bar are visually updated for better navigability.
- **Charge Type filter and group**: Charge Type is available as a new [filter and grouping category](/cost_reports#configure-report-groups) on Cost Reports.
- **Created by column**: The **Created by** column is added to Business Metrics, Savings Models, as well as Cost Reporting screens, like Dashboards.
- **Created On column sort**: The **Created On** column, available on Cost Reporting screens, correctly sorts by date.
- **Created by me filter**: The **Created by me** filter screen is available in Cost Reporting. New reports you create will now be visible within this view.
- **Tag grouping for advanced exports**: The [advanced export](/cost_reports#exporting-cost-reports) on Cost Reports now has a Tag grouping option.
- **"Other" grouping expanded**: The [**Other** grouping](/cost_reports/#expand-other-grouping-category) is expanded on Cost Reports so you can display additional costs, beyond what's already displayed, in the table and graph.
- **Cost Reports line and area charts**: When grouping by specific criteria, you can now adjust the Cost Report graph to be displayed as an area chart or [line chart](/cost_reports/#configure-report-groups), with a line for each group.
- **Searchable Business Metrics Report dropdown**: The **Report** dropdown menu on the [Business Metrics](/per_unit_costs#assign-business-metrics-to-cost-reports) screen is now searchable.

### API Updates

- **Priority added to `PUT` request for segments:** The `priority` parameter is available on the [`/segments/{segment_token}`](https://vantage.readme.io/reference/updatesegment) endpoint.
- **New groupings parameter:** The `groupings` parameter is available on the [`/costs`](https://vantage.readme.io/reference/getcosts) endpoint.
- **Access grant endpoint update:** [Update/destroy endpoints](https://vantage.readme.io/reference/createaccessgrant) for `/access_grant` now use the access grant token to identify an access grant.

## December 2023

### Product Updates

- **Expanded recommendations**: [Cost recommendations](/cost_recommendations) have been expanded for Azure.
- **Kubernetes efficiency reports**: [Kubernetes efficiency reports](/kubernetes) allow teams to quickly identify which Kubernetes pods are running inefficiently. These reports are a customized view of Kubernetes idle and total costs based on Cluster, Namespace, and Label.
- **Official Kubernetes integration**: The [Vantage Kubernetes agent](/kubernetes_agent) provides a single in-cluster deployment that handles both metrics collection and upload to Vantage—without any intermediary requirements.

### API Updates

- **Cost allocations segment API**: Script both the creation and modification of cost allocation segments via new [API endpoints](https://vantage.readme.io/reference/createsegment).

## November 2023

### Product Updates

- **Automatic team assignment for SSO**: Automatically assign users to teams in Vantage based on your organization's [existing SSO groups](/sso).
- **Confluent support**: [Confluent](/connecting_confluent) is now supported as a provider in Vantage.
- **Team-based access controls**: Enterprise customers can now use [role-based access control](/rbac) to create fine-grained permissions for teams across their organizations.

## October 2023

### Product Updates

- **Resource report exports**: You can now download lists of resources for further exploration via [resource reports](/active_resources).

## September 2023

### Product Updates

- **Annotations for reports**: You can now add [annotations](/annotations) to Cost Reports for infrastructure changes or events.
- **Oracle support**: [Oracle](/connecting_oracle) is now supported as a provider in Vantage.
- **Dashboards**: You can now create [dashboards](/dashboards) with custom collections of Cost Reports and apply date range and period filters to all reports present on them.

### API Updates

- **Write API**: The new write [API](/api) automates the management of Cost Reports, saved filters, and dashboards.
- **New Terraform resources**: [New Terraform resources](/terraform) are available for Cost Reports, folders, saved filters, and dashboards.

## August 2023

### Product Updates

- **Alert thresholds for anomaly detection**: Set custom alert thresholds on [cost anomaly alerts](/cost_anomaly_alerts), so alerts are tailored to your tolerance for cost spikes.
- **Comparative cost reporting**: [Cost Reports](/cost_reports) now have a **By Date** toggle to display costs by day, week, or month in the costs table.
- **Budget alerts**: You can now create [budget alerts](/budgets/#budget-alerts) to receive automated notifications when costs exceed user-defined alert thresholds.

## July 2023

### Product Updates

- **Datadog support**: [Datadog](/connecting_datadog) is now supported as a provider in Vantage.
- **Multi-dimensional cost reporting**: You can now group [Cost Reports](/cost_reports) by multiple dimensions.

## June 2023

### Product Updates

- **GCP resource-level costs**: Resource-level costs are available for GCP Cost Reports.
- **Resource reports**: You can create [resource reports](/active_resources) to view and access resources generated per provider.

## May 2023

### Product Updates

- **Kubernetes cost efficiency metrics**: Manage the [efficiency of your Kubernetes clusters](/kubernetes) in addition to enterprise reporting, visibility, and cost allocation.

## April 2023

### Product Updates

- **Self-service SAML**: Users can now [configure SAML-based SSO](/sso) for their account without contacting Vantage support.
- **Saved filters**: [Saved filters](/cost_reports#saved-filters) are available to save and reuse filter logic across multiple Cost Reports.
- **Azure cost recommendations**: Azure [cost recommendations](/cost_recommendations) are now supported.

## March 2023

### Product Updates

- **Cost Report exports**: You can now [export Cost Reports](cost_reports/#exporting-cost-reports) via custom exports.
- **Per-unit cost support**: With [per-unit costs](/per_unit_costs), you can track costs per customer, endpoint, transaction, etc.

### API Updates

- **Terraform provider**: [Terraform provider](https://www.vantage.sh/blog/vantage-launches-terraform-provider) is now available to integrate AWS accounts with Vantage.

## February 2023

### Product Updates

- **New Relic support**: [New Relic](/connecting_new_relic) is now supported as a provider in Vantage.
- **Expanded resource filtering**: You can now filter by resource in [Cost Reports](/cost_reports).
- **MongoDB Atlas support**: [MongoDB Atlas](/connecting_mongodb-atlas) is now supported as a provider in Vantage.

## January 2023

### Product Updates

- **Updates to Cost Reports**: You can now save custom date ranges, date bins, and groupings to share with teammates in [Cost Reports](/cost_reports).
- **Autopilot recommendations expanded**: [Autopilot](/autopilot) is expanded to recommend Reserved Instance purchases on RDS, ElastiCache, Redshift, and OpenSearch.
- **Cost allocation segments**: [Segments](/segments) are now enabled for teams to allocate costs to business units.
