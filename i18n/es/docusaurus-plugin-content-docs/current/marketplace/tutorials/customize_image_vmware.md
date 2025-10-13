---
title: Personalizar una imagen de VMware
---
import marketplaceVMwareExportTemplate from '@site/docs/marketplace/images/marketplace_vmware_export_template.png'
import marketplaceVMwareExportTemplateButton from '@site/docs/marketplace/images/marketplace_vmware_export_template_button.png'
import marketplaceVMwareDeployFromTemplate from '@site/docs/marketplace/images/marketplace_vmware_deploy_from_template.png'

Este tutorial explica cómo personalizar una imagen de máquina virtual (VMI) de VMware proporcionada por el Marketplace para crear sus propias plantillas reutilizables.

### Principio general

El Marketplace proporciona sistemas operativos (SO) genéricos. La implementación desde el marketplace le brinda una base limpia, rápida y fácil de implementar, lo que le evita cargas manuales y acelera sus implementaciones.

Una vez que la imagen se implementa, se convierte en una máquina virtual que puede configurar. Luego puede exportarla como una plantilla que puede ser reutilizada por todos los usuarios en su inquilino.

---

## Pasos de personalización

1.  **Implementar la imagen base** desde el Marketplace.
2.  **Configurar la máquina virtual** según sus necesidades.
3.  **Crear una plantilla** a partir de la máquina virtual configurada.
4.  **Implementar una nueva máquina virtual** desde su plantilla personalizada.

---

### Paso 1: Implementar la imagen base

Siga el tutorial [Implementar una imagen en VMware](./deploy_vmware.md) para comenzar.

---

### Paso 2: Configurar la máquina virtual

Una vez que la máquina virtual esté implementada, configúrela según sus necesidades (instalación de software, configuración de seguridad, etc.).

---

### Paso 3: Crear una plantilla a partir de la máquina virtual

1.  De su lista de máquinas virtuales, seleccione la máquina virtual configurada.
2.  Seleccione **"Exportar"** en la barra de acciones.
3.  Siga los pasos en la Consola para exportar la plantilla.

<img src={marketplaceVMwareExportTemplateButton} />
<img src={marketplaceVMwareExportTemplate} />

---

### Paso 4: Implementar desde su nueva plantilla

Puede implementar desde la página "Catálogo" o desde la página "Máquinas virtuales".

Para implementar desde la página **Máquinas virtuales**:
1.  Haga clic en **"Crear una máquina virtual"**.
2.  Elija **"Implementar desde una plantilla"**.
3.  Seleccione su nueva plantilla de la lista.

<img src={marketplaceVMwareDeployFromTemplate} />
