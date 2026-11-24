---
title: Deploy an Image to VM Instance
---

import marketplaceVmInstanceDeployment from '@site/docs/marketplace/images/marketplace_vminstance_deploy.jpg'
import marketplaceVmInstanceConfig from '@site/docs/marketplace/images/marketplace_vminstance_config.jpg'

This tutorial guides you through deploying a virtual machine image from the Cloud Temple Marketplace to the VM Instances service.

## Prerequisites

- Have a tenant with the **VM Instances** service enabled and permissions to create virtual machines.
- Choose an image that has **VM Instance** among its compatible targets, available for the desired instance family and availability zone.
- Have sufficient quotas for CPU, RAM, and storage, as well as an accessible network in the chosen zone.

## Deployment Steps

### 1. Selection and Deployment

From the image detail page, select **VM Instance** in the **Deployment Options**, then click **Deploy**. The creation wizard opens with the image preselected.

<img src={marketplaceVmInstanceDeployment} alt="Sélection de la cible VM Instance dans les options de déploiement Marketplace" />

### 2. Virtual Machine Configuration

Fill in the wizard steps:

- **Instance family** and **availability zone**: choose from the options compatible with the image.
- **Template**: select the CPU and RAM resources suited to your needs and the image prerequisites.
- **Instance configuration**: enter the VM name and its backup policy.
- **Cloud Init**: if needed, fill in **Cloud Config** for first-boot configuration and **Network Config** for guest OS network configuration. Verify any pre-filled values and the format accepted by the image in its Marketplace listing.
- **Disks**: verify the disks derived from the image, their capacity, and their storage type; add data disks if necessary.
- **Network adapters**: connect the interfaces to the networks in your environment.

<img src={marketplaceVmInstanceConfig} alt="Configuration de la machine virtuelle dans l'assistant VM Instances" />

At the **Summary** step, verify the configuration and estimated cost, then click **Create**.

The [VM Instance creation tutorial](../../public_cloud/vm_instances/tutorials/create_vm.md) details the parameters of each step.

## Alternative Access

You can also select a Marketplace image from the VM Instances service:

1. In the Cloud Temple Console, open **VM Instances** > **Instances**.
2. Click **New virtual machine**.
3. Select an instance family and an availability zone.
4. At the **Choose an image** step, select the image from the built-in catalog.
5. Complete the configuration steps, then confirm the **Summary**.

## Deployment Tracking

Once creation is launched:

- Check the **VM Instances** > **Instances** list to track the VM status.
- Open its detail page to verify its information, disks, and network adapters.
- Once it is running, use the **Console** or the connection mode indicated in the image's Marketplace listing.

If the image provides default credentials, change the password at first login.
