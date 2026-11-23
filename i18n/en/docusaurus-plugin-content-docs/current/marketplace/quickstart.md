---
title: Marketplace Getting Started Guide
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# Marketplace Getting Started Guide

This page guides you through the initial steps to use the **Cloud Temple Marketplace** from the console. Follow these instructions to discover available solutions and deploy them quickly.

---

## Prerequisites

Before getting started, make sure of the following:

1. **Active subscription**: To enable deployments, your organization must have subscribed to at least one Cloud Temple service (OpenIaaS, VMware, or VM Instances). When working in contact with our partners, you do not need a specific subscription.
2. **User permissions**: Your user account must have the necessary rights to access the console and write permissions on the target environments when you wish to deploy resources.
3. **Target environment**: Have a tenant configured for solution deployment.

---

## Accessing the Marketplace

### 1. Access from the Console

Once logged in to the Cloud Temple console, you can access the Marketplace in several ways:

- **Main menu**: A **Marketplace** menu is available in the main navigation
- **Virtual machine pages**: The Marketplace is also accessible from the virtual machine creation pages in OpenIaaS, VMware, and VM Instances environments

### 2. Marketplace Page

The Marketplace page presents a catalog of available solutions. Each solution displays:

- **Name and logo** of the solution
- **Short description**
- **Publisher/Partner**
- **Solution type** (VM Image, SaaS Solution, etc.)

<img src={marketplaceCatalog} />

---

## Viewing Solution Details

### Accessing detailed information

By clicking on a solution, you are taken to a details page including:

- **Full description** of the solution
- **Technical specifications** (if applicable)
- **Deployment prerequisites**
- **Documentation** provided by the publisher
- **Available deployment options**

<img src={marketplaceSolutionDetails} />

---

## Available Actions

Depending on the solution type, different actions are possible:

### Deploying virtual machine images

For solutions compatible with your OpenIaaS, VMware, or VM Instances environments, you can deploy directly from the Marketplace.

**Important note:** Direct deployment is only available for images that have your environment in their compatible targets.

**Detailed guides:**

- [How to deploy an image on OpenIaaS?](tutorials/deploy_openiaas.md)
- [How to deploy an image on VMware?](tutorials/deploy_vmware.md)
- [How to deploy an image on VM Instance?](tutorials/deploy_vminstance.md)

### Contacting partners

For solutions requiring a connection, you can directly contact the publishing partner.

**Detailed guide:**

- [How to contact a partner?](tutorials/contact_partner)

---
