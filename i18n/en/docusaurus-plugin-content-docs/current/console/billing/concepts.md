---
title: Cost Manager
---

import billingDashboardPreview from '@site/docs/console/billing/images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from '@site/docs/console/billing/images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from '@site/docs/console/billing/images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from '@site/docs/console/billing/images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from '@site/docs/console/billing/images/billing_consumption_details.png'

## Overview

The **Cost Manager** is the Cloud Temple Console module dedicated to **visibility of your consumption**. It allows you to track in real time the usage of your cloud resources within a tenant and to have a clear view of your spending.

This module addresses a fundamental need: **understand what you consume, when you consume it, and at what cost**, without having to navigate through complex tables or detailed invoices.

:::info
The Cost Manager displays the **effective consumption** of your resources on the selected tenant. Data is regularly updated to reflect your current usage.
:::

## Main Dashboard

The Cost Manager home page presents a visual summary of your consumption. Upon opening, you get an overview that allows you to quickly identify consumption trends and the most significant cost items.

<img src={billingDashboardPreview} />

The dashboard is organized around several complementary axes, accessible via the tabs available at the top of the page.

## Total Consumption

The **Total Consumption** tab provides an aggregated view of your overall consumption over the selected period. This chart allows you to observe the evolution of your spending over time and identify potential peaks or trends.

<img src={billingDashboardConsumptionTotal} />

You can adjust the **display period** to refine your analysis: day, week, month, or custom range. The total consumption curve is directly readable and does not require any particular technical expertise.

## Consumption by Product

The **Product** view breaks down your consumption according to the major Cloud Temple service families you have subscribed to: compute, storage, network, etc.

<img src={billingDashboardConsumptionPerService} />

This view is particularly useful for **identifying the most significant cost items** and guiding optimization decisions. Each product is represented with its relative share in the overall consumption, which facilitates reading and comparison.

## Consumption by SKU

The **SKU** view offers an additional level of detail by breaking down consumption by **billed reference (SKU)** within each product.

<img src={billingDashboardConsumptionPerProduct} />

This level of granularity allows you to go further in the analysis: you can for example distinguish the consumption of your virtual machines, block storage, snapshots, or network bandwidth, and thus precisely identify the resources generating the most costs.

## Consumption Details

The **Consumption Details** view presents a comprehensive table listing all resources consumed over the period. Each row corresponds to an identifiable resource (virtual machine, storage volume, public IP address, etc.) with its associated consumption level.

<img src={billingConsumptionDetails} />

This detail is valuable for teams wishing to perform a **cost allocation** of their expenses or to identify potentially unused resources that could be disabled to optimize spending.

## Best Practices

To make the most of the Cost Manager, here are some recommendations:

- **Regularly review** your consumption to quickly detect any budget drift.
- **Compare periods**: the tool allows you to analyze the month-by-month evolution to identify trends.
- **Use the SKU view** to identify underutilized or forgotten resources (old snapshots, disconnected volumes, etc.).
