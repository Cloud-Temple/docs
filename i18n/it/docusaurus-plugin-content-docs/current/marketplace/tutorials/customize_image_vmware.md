---
title: Personalizzare un'immagine VMware
---
import marketplaceVMwareExportTemplate from '../images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '../images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '../images/marketplace_vmware_deploy_from_template.png'

Questo tutorial spiega come personalizzare un'immagine di macchina virtuale (VMI) VMware fornita dal Marketplace per creare modelli riutilizzabili personalizzati.

### Principio generale

La Marketplace fornisce sistemi operativi (OS) generici. Il deployment dalla Marketplace ti offre una base solida, rapidamente e facilmente deployabile, evitandoti caricamenti manuali e accelerando i tuoi deployment.

Una volta che l'immagine è stata distribuita, diventa una macchina virtuale che puoi configurare. Successivamente, puoi esportarla come modello riutilizzabile da tutti gli utenti del tuo tenant.

## Passaggi di personalizzazione

1.  **Distribuire l'immagine di base** dalla Marketplace.
2.  **Configurare la macchina virtuale** secondo le proprie esigenze.
3.  **Creare un modello** a partire dalla macchina virtuale configurata.
4.  **Distribuire una nuova macchina virtuale** dal proprio modello personalizzato.

### Step 1: Deploy the base image

Follow the tutorial [Deploy an image on VMware](./deploy_vmware.md) to get started.

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