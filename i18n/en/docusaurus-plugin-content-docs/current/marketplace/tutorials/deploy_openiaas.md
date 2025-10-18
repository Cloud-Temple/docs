---
title: Deploy an image on OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

This tutorial guides you through deploying a virtual machine image from the Cloud Temple Marketplace to your OpenIaaS environment.

## Prerequisites

- Have an OpenIaaS environment configured
- Have permissions to create virtual machines
- The image must have **OpenIaaS** in its list of compatible targets

## Deployment Steps

### 1. Selection and Deployment

From the detail page of a compatible OpenIaaS solution, select your target environment and click **Deploy**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Virtual Machine Configuration

Set up the basic parameters of your virtual machine:
- **VM Name**
- **Resources** (CPU, RAM)
- **Storage**
- **Network**

<img src={marketplaceOpeniaasConfig} />

Deployment typically takes less than 10 minutes, depending on the image size.

## Alternative Access

You can also access Marketplace images directly from the **Virtual Machines** page of your OpenIaaS environment:

1. Go to **Virtual Machines** > **Create a VM**
2. Select **Marketplace Images** in the source options
3. Choose your solution from the integrated catalog

## Deployment Tracking

Once the deployment is initiated:
- Monitor the progress from the OpenIaaS console
- The VM will appear in your list of virtual machines