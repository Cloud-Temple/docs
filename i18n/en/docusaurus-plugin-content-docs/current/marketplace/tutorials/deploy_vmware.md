---
title: Deploying an image on VMware
---
import marketplaceVmwareDeployment from '@site/docs/marketplace/images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '@site/docs/marketplace/images/marketplace_vmware_config.png'

This tutorial guides you through deploying a virtual machine image from the Cloud Temple Marketplace to your VMware environment.

## Prerequisites

- Have a configured VMware environment
- Have permissions to create virtual machines
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

Deployment generally takes less than 10 minutes depending on the image size.

## Alternative access

You can also access Marketplace templates directly from the VMware interface:

1. Go to **vSphere** > **Deploy a VM**
2. Select **Marketplace Template** as the source
3. Browse the images available in the integrated catalog

## Deployment tracking

Once the deployment is launched:

- Track progress from the VMware console
- The VM will appear in your vSphere inventory

If the image provides default credentials, change the password upon first login.
