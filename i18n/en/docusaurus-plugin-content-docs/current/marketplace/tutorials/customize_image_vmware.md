---
title: Customize a VMware Image
---
import marketplaceVMwareExportTemplate from '../images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '../images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '../images/marketplace_vmware_deploy_from_template.png'

This tutorial explains how to customize a VMware virtual machine image (VMI) provided by the Marketplace to create your own reusable templates.

### General Principle

The Marketplace provides generic operating systems (OS). Deploying from the Marketplace gives you a clean, quickly and easily deployable base, eliminating the need for manual uploads and accelerating your deployments.

Once the image is deployed, it becomes a virtual machine that you can configure. You can then export it as a reusable template available to all users within your tenant.

## Customization Steps

1.  **Deploy the base image** from the Marketplace.
2.  **Configure the virtual machine** according to your requirements.
3.  **Create a template** from the configured virtual machine.
4.  **Deploy a new virtual machine** from your customized template.

### Step 1: Deploy the base image

Follow the [Deploy an image on VMware](deploy_vmware.md) tutorial to get started.

### Step 2: Configure the virtual machine

Once the virtual machine is deployed, configure it according to your needs (software installation, security configuration, etc.).

### Step 3: Create a template from the virtual machine

1. From your list of virtual machines, select the configured virtual machine.
2. Select **"Export"** from the action bar.
3. Follow the steps in the Console to export the template.

<img src={marketplaceVMwareExportTemplateButton} />
<img src={marketplaceVMwareExportTemplate} />

### Step 4: Deploy from your new template

You can deploy from the **Catalog** page or from the **Virtual Machines** page.

To deploy from the **Virtual Machines** page:
1. Click on **"Create a virtual machine"**.
2. Choose **"Deploy from a template"**.
3. Select your new template from the list.

<img src={marketplaceVMwareDeployFromTemplate} />
