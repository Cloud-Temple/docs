---
title: Customize a VMware Image
---
import marketplaceVMwareExportTemplate from '../images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '../images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '../images/marketplace_vmware_deploy_from_template.png'

This tutorial explains how to customize a VMware virtual machine image (VMI) provided by the Marketplace to create your own reusable templates.

### Allgemeines Prinzip

Die Marketplace stellt generische Betriebssysteme (OS) bereit. Die Bereitstellung über die Marketplace bietet Ihnen eine gesunde Basis, die schnell und einfach bereitgestellt werden kann, wodurch manuelle Uploads entfallen und Ihre Bereitstellungen beschleunigt werden.

Sobald das Image bereitgestellt wurde, wird es zu einer virtuellen Maschine, die Sie konfigurieren können. Anschließend können Sie sie als wiederverwendbaren Template für alle Benutzer Ihres Mandanten exportieren.

## Customization Steps

1.  **Deploy the base image** from the Marketplace.
2.  **Configure the virtual machine** according to your requirements.
3.  **Create a template** from the configured virtual machine.
4.  **Deploy a new virtual machine** from your customized template.

### Step 1: Deploy the base image

Follow the tutorial [Deploy an image on VMware](./deploy_vmware.md) to get started.

---

### Step 2: Configure the virtual machine

Once the virtual machine has been deployed, configure it according to your requirements (installation of software, security configuration, etc.).

### Step 3: Create a template from the virtual machine

1. From your list of virtual machines, select the configured virtual machine.
2. Select **"Export"** from the action bar.
3. Follow the steps in the Console to export the template.

<img src={marketplaceVMwareExportTemplateButton} />
<img src={marketplaceVMwareExportTemplate} />

### Step 4: Deploy from your new template

You can deploy from the **Catalog** page or from the **Virtual Machines** page.

To deploy from the **Virtual Machines** page:
1. Click on **"Create virtual machine"**.
2. Choose **"Deploy from template"**.
3. Select your new template from the list.

<img src={marketplaceVMwareDeployFromTemplate} />