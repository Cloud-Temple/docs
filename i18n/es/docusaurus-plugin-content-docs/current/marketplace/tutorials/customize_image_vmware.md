---
title: Customizar una imagen de VMware
---
import marketplaceVMwareExportTemplate from '../images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '../images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '../images/marketplace_vmware_deploy_from_template.png'

Este tutorial explica cómo personalizar una imagen de máquina virtual (VMI) de VMware proporcionada por Marketplace para crear sus propios modelos reutilizables.

### Principio general

La Marketplace proporciona sistemas operativos (OS) genéricos. El despliegue desde la Marketplace le ofrece una base sólida, desplegable rápidamente y fácilmente, evitándole cargas manuales y acelerando sus despliegues.

Una vez desplegada la imagen, se convierte en una máquina virtual que puede configurar. A continuación, puede exportarla como un modelo reutilizable por todos los usuarios de su inquilino.

## Pasos de personalización

1.  **Desplegar la imagen base** desde la Marketplace.
2.  **Configurar la máquina virtual** según sus necesidades.
3.  **Crear un modelo** a partir de la máquina virtual configurada.
4.  **Desplegar una nueva máquina virtual** desde su modelo personalizado.

### Paso 1: Desplegar la imagen base

Siga el tutorial [Desplegar una imagen en VMware](./deploy_vmware.md) para comenzar.

### Paso 2: Configurar la máquina virtual

Una vez desplegada la máquina virtual, configúrela según sus necesidades (instalación de software, configuración de seguridad, etc.).

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