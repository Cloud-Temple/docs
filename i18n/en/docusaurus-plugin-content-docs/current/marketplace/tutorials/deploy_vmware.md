---
title: Deploy an image on VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

This tutorial guides you to deploy a virtual machine image from the Cloud Temple Marketplace to your VMware environment.

## Prerequisites

- Have a configured VMware environment
- Have virtual machine creation permissions
- The image must have **VMware** in its compatible targets

## Deployment steps

### 1. Selection and deployment

From the detail page of a VMware-compatible solution, select your target environment and click **Deploy**:
<img src={marketplaceVmwareDeployment} />

### 2. Virtual machine configuration

Configure the basic parameters of your virtual machine:
- **Name** of the VM
- **Resources** (CPU, RAM)
- **Storage**
- **Network**

<img src={marketplaceVmwareConfig} />

Deployment typically takes less than 10 minutes depending on the image size.

## Alternative access

You can also access Marketplace templates directly from the VMware interface:

1. Go to **vSphere** > **Deploy a VM**
2. Select **Marketplace Template** as source
3. Browse available images in the integrated catalog

## Deployment monitoring

Once deployment is launched:
- Follow progress from the VMware console
- The VM will appear in your vSphere inventory
- Connect once deployment is complete
