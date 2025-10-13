---
title: Deploy an image on OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

This tutorial guides you to deploy a virtual machine image from the Cloud Temple Marketplace to your OpenIaaS environment.

## Prerequisites

- Have a configured OpenIaaS environment
- Have virtual machine creation permissions
- The image must have **OpenIaaS** in its compatible targets

## Deployment steps

### 1. Selection and deployment

From the detail page of an OpenIaaS-compatible solution, select your target environment and click **Deploy**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Virtual machine configuration

Configure the basic parameters of your virtual machine:
- **Name** of the VM
- **Resources** (CPU, RAM)
- **Storage**
- **Network**

<img src={marketplaceOpeniaasConfig} />

Deployment typically takes less than 10 minutes depending on the image size.

## Alternative access

You can also access Marketplace images directly from the **Virtual Machines** page of your OpenIaaS environment:

1. Go to **Virtual Machines** > **Create a VM**
2. Select **Marketplace Images** in the source options
3. Choose your solution from the integrated catalog

## Deployment monitoring

Once deployment is launched:
- Follow progress from the OpenIaaS console
- The VM will appear in your virtual machine list
- Connect once deployment is complete
