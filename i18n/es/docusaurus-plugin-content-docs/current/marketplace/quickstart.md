---
title: Guía de inicio
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# QuickStart para el Marketplace Cloud Temple

Esta página le guía a través de los pasos iniciales para utilizar el **Marketplace Cloud Temple** desde la consola. Siga estas instrucciones para descubrir las soluciones disponibles y desplegarlas rápidamente.

---

## Requisitos previos

Antes de comenzar, asegúrese de lo siguiente:

1. **Suscripción activada** : Para permitir los despliegues, su organización debe haber suscrito al menos un servicio de Cloud Temple (IaaS OpenSource o IaaS VMware). En el marco de contacto con nuestros socios, no necesita una suscripción específica.
2. **Permisos de usuario** : Su cuenta de usuario debe contar con los permisos necesarios para acceder a la consola y derechos de escritura en los entornos objetivo cuando desee desplegar recursos en ellos.
3. **Entorno objetivo** : Contar con un tenant configurado para el despliegue de soluciones.

---

## Acceso a la Marketplace

### 1. Acceso desde la consola

Una vez conectado a la consola Cloud Temple, puede acceder al Marketplace de varias formas:

- **Menú principal** : Un menú **Marketplace** está disponible en la navegación principal
- **Páginas de máquinas virtuelles** : El Marketplace también es accesible desde las páginas de creación de máquinas virtuelles en los entornos OpenIaaS y VMware

### 2. Página Marketplace

La página Marketplace presenta un catálogo de las soluciones disponibles. Cada solución muestra:

- **Nombre y logo** de la solución
- **Descripción breve**
- **Editor/Partner**
- **Tipo de solución** (Imagen VM, Solución SaaS, etc.)

<img src={marketplaceCatalog} />

---

## Consulta de los detalles de una solución

### Acceso a la información detallada

Al hacer clic en una solución, accede a una página de detalles que incluye:

- **Descripción completa** de la solución
- **Especificaciones técnicas** (si aplica)
- **Requisitos** de despliegue
- **Documentación** proporcionada por el editor
- **Opciones de despliegue** disponibles

<img src={marketplaceSolutionDetails} />

---

## Acciones disponibles

Según el tipo de solución, se pueden realizar diferentes acciones:

### Despliegue de imágenes de máquinas virtuales

Para las soluciones compatibles con sus entornos OpenIaaS o VMware, puede desplegar directamente desde el Marketplace.

**Nota importante:** El despliegue directo solo está disponible para las imágenes que incluyen su entorno en sus destinos compatibles.

**Guías detalladas:**

- [¿Cómo desplegar una imagen en OpenIaaS?](tutorials/deploy_openiaas)
- [¿Cómo desplegar una imagen en VMware?](tutorials/deploy_vmware)

### Contacto con los socios

Para las soluciones que requieran intermediación, puede contactar directamente con el socio editor.

**Guía detallada :**

- [¿Cómo contactar a un socio?](tutorials/contact_partner)

---