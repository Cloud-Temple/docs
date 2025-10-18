---
title: Guía de inicio
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# Guía Rápida para la Marketplace Cloud Temple

Esta página le guía a través de los pasos iniciales para utilizar la **Marketplace Cloud Temple** desde la consola. Siga estas instrucciones para descubrir las soluciones disponibles y desplegarlas rápidamente.

---

## Requis previos

Antes de comenzar, asegúrese de cumplir los siguientes puntos:

1. **Suscripción activa**: Para permitir despliegues, su organización debe tener suscrito al menos un servicio Cloud Temple (IaaS OpenSource o IaaS VMware). En el marco del contacto con nuestros socios, no necesita una suscripción específica.
2. **Permisos de usuario**: Su cuenta de usuario debe contar con los permisos necesarios para acceder a la consola y con permisos de escritura en los entornos de destino cuando desee desplegar recursos.
3. **Entorno de destino**: Disponer de un inquilino configurado para el despliegue de soluciones.

## Acceso a la Marketplace

### 1. Access from the Shiva console

Once connected to the Cloud Temple console, you can access the Marketplace in several ways:

- **Main menu**: A **Marketplace** menu is available in the main navigation
- **Virtual machines pages**: The Marketplace is also accessible from the virtual machine creation pages in OpenIaaS and VMware environments

### 2. Página Marketplace

La página Marketplace presenta un catálogo de las soluciones disponibles. Cada solución muestra:

- **Nombre y logotipo** de la solución  
- **Descripción breve**  
- **Editor/Partner**  
- **Tipo de solución** (Imagen de VM, Solución SaaS, etc.)

<img src={marketplaceCatalog} />

## Viewing solution details

### Acceso a la información detallada

Al hacer clic en una solución, accedes a una página de detalles que incluye:

- **Descripción completa** de la solución
- **Especificaciones técnicas** (si procede)
- **Requisitos previos** para el despliegue
- **Documentación** proporcionada por el editor
- **Opciones de despliegue** disponibles

<img src={marketplaceSolutionDetails} />

## Acciones disponibles

Según el tipo de solución, están disponibles diferentes acciones:

### Deployment of virtual machine images

For solutions compatible with your OpenIaaS or VMware environments, you can deploy directly from the Marketplace.

**Important note:** Direct deployment is only available for images that include your environment in their compatible targets.

**Detailed guides:**
- [How to deploy an image on OpenIaaS?](tutorials/deploy_openiaas)
- [How to deploy an image on VMware?](tutorials/deploy_vmware)

### Contacto con los socios

Para soluciones que requieran una conexión directa, puede ponerse en contacto directamente con el socio editor.

**Guía detallada:**
- [Cómo contactar a un socio?](tutorials/contact_partner)