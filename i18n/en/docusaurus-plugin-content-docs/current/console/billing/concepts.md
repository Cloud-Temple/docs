---
title: Cost Manager
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'
import billingPricesList from '@site/docs/console/billing/images/billing_prices_list.png'

The **Cost Manager** is accessible from the main menu of the Cloud Temple Console. It gives you a complete and transparent view of your cloud resource consumption, enabling you to manage your expenses independently.

:::info
Access to the Cost Manager requires the appropriate rights on your tenant. Please contact your sales representative for more information and to learn about the conditions for accessing the service.
:::

## Dashboard

The Cost Manager dashboard is the module's home page. It provides a summary view of all your consumption for the selected period.

<img src={billingDashboardPreview} alt="Cost Manager Dashboard" />

From this dashboard, you can:

- **Select a period** for analysis (current month, previous month, or a custom date range),
- **Navigate between the different tabs** to refine your consumption analysis,
- **Export your consumption data** to integrate into your internal reporting tools.

## Global Consumption

The **Global Consumption** tab shows the total amount consumed during the selected period. It is the starting point for understanding the overall trend of your cloud expenses.

<img src={billingDashboardTotal} alt="Global consumption for the period" />

This chart allows you to visualize:

- The **total amount** consumed during the period,
- The **time evolution** of your consumption (day by day or month by month depending on the chosen granularity),
- Any **consumption spikes** to quickly identify anomalies or surges.

:::info
**Reading the chart for the current month**

For the current month, the chart shows two visual zones:

- The **blue (solid) part** represents the **actual consumption to date**, i.e. resources actually consumed since the beginning of the month,
- The **orange (hatched) part** represents the **forecast** estimated until the end of the month, calculated based on your current consumption rate.

This projection allows you to anticipate your end-of-month budget in real time.
:::

## Consumption by Product

The **Consumption by Product** tab lets you identify the breakdown of your expenses by the Cloud Temple products you have subscribed to.

<img src={billingDashboardPerProduct} alt="Consumption breakdown by product" />

Each product (IaaS, Storage, Network, etc.) is presented with:

- Its **relative share** of total consumption,
- Its **absolute amount** for the period,
- The **trend** compared to the previous period.

This view is particularly useful for identifying which products represent the largest cost items and directing your optimization decisions.

## Consumption by Service

The **Consumption by Service** tab refines the analysis by breaking down consumption at the level of individual services within each product.

<img src={billingDashboardPerService} alt="Consumption breakdown by service" />

This detailed view allows you to:

- Precisely identify **which services** contribute most to your billing,
- Compare the consumption of similar services,
- Detect under-used or over-provisioned services to **optimize your cloud footprint**.

## Consumption Details

The **Consumption Details** section lists all individual billing lines for the selected period. It is the most granular view of the Cost Manager.

<img src={billingConsumptionDetails} alt="Consumption line details" />

For each consumption line, you will find:

- The **name of the consumed resource**,
- The **quantity** consumed and the associated **unit of measure** (hours, GB, requests, etc.),
- The **unit price** applied,
- The **total amount** for this line during the period.

This view is essential for precise accounting reconciliation or for analyzing the usage of specific resources in detail.

## Price Catalog

The **Price Catalog** lists the unit prices of all resources and services available on your Cloud Temple tenant.

<img src={billingPricesList} alt="Unit price catalog" />

This catalog allows you to:

- **Anticipate the cost** of a new resource before ordering it,
- Perform **budget simulations** for your cloud projects,
- Compare prices between different resource tiers or configurations.

:::tip
The prices displayed in the catalog are the contractual rates applicable to your tenant. They may differ from public rates depending on your Cloud Temple contract.
:::
