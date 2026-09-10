---
title: Getting Started Guide
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# QuickStart for the Cloud Temple Marketplace

This page guides you through the initial steps to use the **Cloud Temple Marketplace** from the console. Follow these instructions to discover available solutions and deploy them quickly.

---

## Prerequisites

Before you begin, ensure the following:

1. **Active subscription**: To enable deployments, your organization must have subscribed to at least one Cloud Temple service (Open Source IaaS or VMware IaaS). When working with our partners, you do not need a specific subscription.
2. **User permissions**: Your user account must have the necessary rights to access the console and write permissions on the target environments when you want to deploy resources there.
3. **Target environment**: Have a tenant configured for solution deployment.

---

## Marketplace Access

### 1. Access from the Console

Once logged into the Cloud Temple console, you can access the Marketplace in several ways:

- **Main menu**: A **Marketplace** menu is available in the main navigation
- **Virtual machine pages**: The Marketplace is also accessible from the virtual machine creation pages in OpenIaaS and VMware environments

### 2. Marketplace Page

The Marketplace page presents a catalog of available solutions. Each solution displays:

- **Name and logo** of the solution
- **Short description**
- **Publisher/Partner**
- **Solution type** (VM Image, SaaS Solution, etc.)

<img src={marketplaceCatalog} />

---

## Viewing the details of a solution

### Access to detailed information

By clicking on a solution, you access a details page that includes:

- **Complete description** of the solution
- **Technical specifications** (if applicable)
- **Deployment prerequisites**
- **Documentation** provided by the vendor
- **Available deployment options**

<img src={marketplaceSolutionDetails} />

---

## Available actions

Depending on the solution type, different actions are possible:

### Deploying virtual machine images

For solutions compatible with your OpenIaaS or VMware environments, you can deploy directly from the Marketplace.

**Important note:** Direct deployment is only available for images that list your environment among their compatible targets.

**Detailed guides:**

- [How to deploy an image on OpenIaaS?](tutorials/deploy_openiaas)
- [How to deploy an image on VMware?](tutorials/deploy_vmware)

### Contact with Partners

For solutions requiring matchmaking, you can contact the vendor partner directly.

**Detailed guide:**

- [How to contact a partner?](tutorials/contact_partner)

---