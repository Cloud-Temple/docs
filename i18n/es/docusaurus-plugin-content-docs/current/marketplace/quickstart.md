---
title: Guía de inicio de la Marketplace
---
import marketplaceCatalog from '@site/docs/marketplace/images/marketplace_catalog.png'
import marketplaceSolutionDetails from '@site/docs/marketplace/images/marketplace_solution_details.png'

# Guía de inicio de la Marketplace

Esta página le guía a través de los pasos iniciales para utilizar la **Marketplace Cloud Temple** desde la consola. Siga estas instrucciones para descubrir las soluciones disponibles y desplegarlas rápidamente.

---

## Prerrequisitos

Antes de comenzar, asegúrese de lo siguiente:

1. **Suscripción activada**: Para permitir despliegues, su organización debe haber suscrito al menos un servicio Cloud Temple (OpenIaaS, VMware o VM Instances). En el marco del contacto con nuestros socios, no necesita una suscripción específica.
2. **Permisos de usuario**: Su cuenta de usuario debe contar con los derechos necesarios para acceder a la consola y con derechos de escritura en los entornos objetivo cuando desee desplegar recursos en ellos.
3. **Entorno objetivo**: Contar con un tenant configurado para el despliegue de las soluciones.

---

## Acceso a la Marketplace

### 1. Acceso desde la Consola

Una vez conectado a la consola Cloud Temple, puede acceder a la Marketplace de varias maneras:

- **Menú principal**: Un menú **Marketplace** está disponible en la navegación principal
- **Páginas de máquinas virtuales**: La Marketplace también es accesible desde las páginas de creación de máquinas virtuales en los entornos OpenIaaS, VMware y VM Instances

### 2. Página Marketplace

La página Marketplace presenta un catálogo de las soluciones disponibles. Cada solución muestra:

- **Nombre y logotipo** de la solución
- **Descripción breve**
- **Editor/Socio**
- **Tipo de solución** (VM Image, Solution SaaS, etc.)

<img src={marketplaceCatalog} />

---

## Consulta de los detalles de una solución

### Acceso a la información detallada

Al hacer clic en una solución, accede a una página de detalles que incluye:

- **Descripción completa** de la solución
- **Especificaciones técnicas** (si aplica)
- **Prerrequisitos** de despliegue
- **Documentación** proporcionada por el editor
- **Opciones de despliegue** disponibles

<img src={marketplaceSolutionDetails} />

---

## Acciones disponibles

Según el tipo de solución, diferentes acciones son posibles:

### Despliegue de imágenes de máquinas virtuales

Para las soluciones compatibles con sus entornos OpenIaaS, VMware o VM Instances, puede desplegar directamente desde la Marketplace.

**Nota importante:** El despliegue directo solo está disponible para las imágenes que tienen su entorno entre sus objetivos compatibles.

**Guías detalladas:**

- [Comment déployer une image sur OpenIaaS ?](tutorials/deploy_openiaas.md)
- [Comment déployer une image sur VMware ?](tutorials/deploy_vmware.md)
- [Comment déployer une image sur VM Instance ?](tutorials/deploy_vminstance.md)

### Contacto con los socios

Para las soluciones que requieren una puesta en relación, puede contactar directamente al socio editor.

**Guía detallada:**

- [Comment contacter un partenaire ?](tutorials/contact_partner)

---
