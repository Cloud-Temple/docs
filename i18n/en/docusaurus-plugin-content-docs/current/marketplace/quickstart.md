---
title: Getting Started Guide
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# QuickStart for the Cloud Temple Marketplace

This page guides you through the initial steps to use the **Cloud Temple Marketplace** from the console. Follow these instructions to explore available solutions and deploy them quickly.

---

## Prerequisites

Before you begin, ensure the following points are met:

1. **Active Subscription**: Your organization must have an active subscription to at least one Cloud Temple service (OpenSource IaaS or VMware IaaS) to enable deployments. During contact with our partners, no specific subscription is required.
2. **User Permissions**: Your user account must have the necessary permissions to access the console and write permissions on target environments when deploying resources.
3. **Target Environment**: Have a tenant configured for solution deployments.

## Access to the Marketplace

### 1. Access from the Console

Once logged into the Cloud Temple console, you can access the Marketplace in several ways:

- **Main menu**: A **Marketplace** menu is available in the main navigation
- **Virtual machine pages**: The Marketplace is also accessible from the virtual machine creation pages within OpenIaaS and VMware environments

### 2. Marketplace Page

The Marketplace page displays a catalog of available solutions. Each solution shows:

- **Name and logo** of the solution  
- **Short description**  
- **Publisher/Partner**  
- **Solution type** (VM Image, SaaS Solution, etc.)

<img src={marketplaceCatalog} />

## Viewing solution details

### Access to Detailed Information

Clicking on a solution takes you to a details page containing:

- **Complete description** of the solution  
- **Technical specifications** (if applicable)  
- **Deployment prerequisites**  
- **Documentation** provided by the publisher  
- **Available deployment options**  

<img src={marketplaceSolutionDetails} />

## Available actions

Depending on the type of solution, different actions are available:

### Deploying Virtual Machine Images

For solutions compatible with your OpenIaaS or VMware environments, you can deploy directly from the Marketplace.

**Important Note:** Direct deployment is only available for images that list your environment among their compatible targets.

**Detailed Guides:**
- [How to deploy an image on OpenIaaS?](tutorials/deploy_openiaas)
- [How to deploy an image on VMware?](tutorials/deploy_vmware)

### Contact with Partners

For solutions requiring coordination, you can contact the publisher partner directly.

**Detailed guide:**
- [How to contact a partner?](tutorials/contact_partner)