---
title: Customize an OpenIaaS Image
---
import marketplaceOpenIaasExportTemplate from '../images/marketplace_openiaas_export_template.png'
import marketplaceOpenIaasExportTemplateButton from '../images/marketplace_openiaas_export_template_button.png'
import marketplaceOpenIaasDeployFromTemplate from '../images/marketplace_openiaas_deploy_from_template.png'

This tutorial explains how to customize a virtual machine image (VMI) provided by OpenIaaS Marketplace to create your own reusable templates.

### Allgemeines Prinzip

Die Marketplace stellt generische Betriebssysteme (OS) bereit. Die Bereitstellung über die Marketplace bietet Ihnen eine gesunde Basis, die schnell und einfach bereitgestellt werden kann, wodurch manuelle Uploads entfallen und Ihre Bereitstellungen beschleunigt werden.

Sobald das Image bereitgestellt wurde, wird es zu einer virtuellen Maschine, die Sie konfigurieren können. Anschließend können Sie sie als wiederverwendbares Modell für alle Benutzer Ihres Mandanten exportieren.

## Customization Steps

1.  **Deploy the base image** from the Marketplace.
2.  **Configure the virtual machine** according to your requirements.
3.  **Create a template** from the configured virtual machine.
4.  **Deploy a new virtual machine** from your customized template.

### Step 1: Deploy the base image

Follow the tutorial [Deploy an image on OpenIaaS](./deploy_openiaas.md) to get started.

### Step 2: Configure the virtual machine

Once the virtual machine has been deployed, configure it according to your requirements (installation of software, security configuration, etc.).

### Step 3: Create a template from the virtual machine

1. From your list of virtual machines, select the configured virtual machine.
2. Select **"Export"** from the action bar.
3. Follow the steps in the Console to export the template.

<img src={marketplaceOpenIaasExportTemplateButton} />
<img src={marketplaceOpenIaasExportTemplate} />

### Step 4: Deploy from your new template

You can deploy from the **Catalog** page or from the **Virtual Machines** page.

To deploy from the **Virtual Machines** page:
1. Click on **"Create a virtual machine"**.
2. Choose **"Deploy from a template"**.
3. Select your new template from the list.

<img src={marketplaceOpenIaasDeployFromTemplate} />
