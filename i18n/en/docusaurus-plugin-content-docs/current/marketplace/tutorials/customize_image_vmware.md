---
title: Customize a VMware image
---
import marketplaceVMwareExportTemplate from '@site/docs/marketplace/images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '@site/docs/marketplace/images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '@site/docs/marketplace/images/marketplace_vmware_deploy_from_template.png'

This tutorial explains how to customize a VMware virtual machine image (VMI) provided by the Marketplace to create your own reusable templates.

### General Principle

The Marketplace provides generic operating systems (OS). Deploying from the marketplace gives you a clean base that is quick and easy to deploy, saving you from manual uploads and speeding up your deployments.

Once the image is deployed, it becomes a virtual machine that you can configure. You can then export it as a template that can be reused by all users in your tenant.

---

## Customization Steps

1.  **Deploy the base image** from the Marketplace.
2.  **Configure the virtual machine** to your needs.
3.  **Create a template** from the configured virtual machine.
4.  **Deploy a new virtual machine** from your custom template.

---

### Step 1: Deploy the base image

Follow the [Deploy an image on VMware](./deploy_vmware.md) tutorial to get started.

---

### Step 2: Configure the virtual machine

Once the virtual machine is deployed, configure it to your needs (installing software, security settings, etc.).

---

### Step 3: Create a template from the virtual machine

1.  From your list of virtual machines, select the configured virtual machine.
2.  Select **"Export"** from the action bar.
3.  Follow the steps in the Console to export the template.

<img src={marketplaceVMwareExportTemplateButton} />
<img src={marketplaceVMwareExportTemplate} />

---

### Step 4: Deploy from your new template

You can deploy from the "Catalog" page or from the "Virtual Machines" page.

To deploy from the **Virtual Machines** page:
1.  Click on **"Create a virtual machine"**.
2.  Choose **"Deploy from a template"**.
3.  Select your new template from the list.

<img src={marketplaceVMwareDeployFromTemplate} />
