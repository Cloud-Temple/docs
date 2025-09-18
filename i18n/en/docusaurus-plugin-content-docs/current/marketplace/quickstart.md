---
title: Getting Started Guide
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# QuickStart for Cloud Temple Marketplace

This page guides you through the initial steps to use the **Cloud Temple Marketplace** from the console. Follow these instructions to discover available solutions and deploy them quickly.

---

## Prerequisites

Before starting, make sure of the following points:

1. **Active subscription**: To enable deployments, your organization must have subscribed to at least one Cloud Temple service (IaaS OpenSource or IaaS VMware). For contacting our partners, you don't need a specific subscription.
2. **User permissions**: Your user account must have the necessary rights to access the console and write permissions on target environments when you want to deploy resources there.
3. **Target environment**: Have a configured tenant for solution deployment.

---

## Accessing the Marketplace

### 1. Access from the Shiva console

Once connected to the Cloud Temple console, you can access the Marketplace in several ways:

- **Main menu**: A **Marketplace** menu is available in the main navigation
- **Virtual machine pages**: The Marketplace is also accessible from virtual machine creation pages in OpenIaaS and VMware environments

### 2. Marketplace page

The Marketplace page presents a catalog of available solutions. Each solution displays:

- **Name and logo** of the solution
- **Short description**
- **Publisher/Partner**
- **Solution type** (VM Image, SaaS Solution, etc.)

<img src={marketplaceCatalog} />

---

## Consulting solution details

### Access to detailed information

By clicking on a solution, you access a details page including:

- **Complete description** of the solution
- **Technical specifications** (if applicable)
- **Deployment prerequisites**
- **Documentation** provided by the publisher
- **Available deployment options**

<img src={marketplaceSolutionDetails} />

---

## Available actions

Depending on the solution type, different actions are possible:

### Virtual machine image deployment

For solutions compatible with your OpenIaaS or VMware environments, you can deploy directly from the Marketplace.

**Important note:** Direct deployment is only available for images that have your environment in their compatible targets.

**Detailed guides:**
- [How to deploy an image on OpenIaaS?](tutorials/deploy_openiaas)
- [How to deploy an image on VMware?](tutorials/deploy_vmware)

### Partner contact

For solutions requiring connection, you can directly contact the partner publisher.

**Detailed guide:**
- [How to contact a partner?](tutorials/contact_partner)

---
