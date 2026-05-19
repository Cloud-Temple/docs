---
title: Personalizar una imagen OpenIaaS
---
import marketplaceOpenIaasExportTemplate from '@site/docs/marketplace/images/marketplace_openiaas_export_template.png'
import marketplaceOpenIaasExportTemplateButton from '@site/docs/marketplace/images/marketplace_openiaas_export_template_button.png'
import marketplaceOpeniaasDeployFromTemplate from '@site/docs/marketplace/images/marketplace_openiaas_deploy_from_template.png'

Este tutorial explica cómo personalizar una imagen de máquina virtual (VMI) de OpenIaaS proporcionada por el Marketplace para crear sus propios modelos reutilizables.

### Principio general

El Marketplace proporciona sistemas operativos (SO) genéricos. El despliegue desde el marketplace le ofrece una base sólida, de implementación rápida y sencilla, evitando subidas manuales y agilizando sus despliegues.

Una vez desplegada la imagen, se convierte en una máquina virtual que puede configurar. Posteriormente, puede exportarla como un modelo reutilizable por todos los usuarios de su tenant.

---

## Pasos de personalización

1. **Desplegar la imagen** base desde el Marketplace.
2. **Configurar la máquina virtual** según sus necesidades.
3. **Crear una plantilla** a partir de la máquina virtual configurada.
4. **Desplegar una nueva máquina virtual** desde su plantilla personalizada.

---

### Paso 1: Desplegar la imagen base

Siga el tutorial [Desplegar una imagen en OpenIaaS](./deploy_openiaas.md) para comenzar.

---

### Paso 2: Configurar la máquina virtual

Una vez desplegada la máquina virtual, configúrela según sus necesidades (instalación de software, configuración de seguridad, etc.).

---

### Paso 3: Crear una plantilla a partir de la máquina virtual

1. Desde la lista de sus máquinas virtuales, seleccione la máquina virtual configurada.
2. Seleccione **"Exportar"** desde la barra de acciones.
3. Siga los pasos de la Consola para exportar la plantilla.

<img src={marketplaceOpenIaasExportTemplateButton} />
<img src={marketplaceOpenIaasExportTemplate} />

---

### Paso 4 : Desplegar desde su nuevo modelo

Puede desplegar desde la página "Catálogo" o desde la página "Máquinas Virtuales".

Para desplegar desde la página **Máquinas Virtuales** :

1. Haga clic en **"Crear una máquina virtual"**.
2. Elija **"Desplegar desde un modelo"**.
3. Seleccione su nuevo modelo en la lista.

<img src={marketplaceOpeniaasDeployFromTemplate} />