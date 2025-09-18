---
title: Guía de inicio
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# Inicio rápido para Cloud Temple Marketplace

Esta página le guía a través de los pasos iniciales para usar el **Cloud Temple Marketplace** desde la consola. Siga estas instrucciones para descubrir soluciones disponibles y desplegarlas rápidamente.

---

## Prerrequisitos

Antes de comenzar, asegúrese de los siguientes puntos:

1. **Suscripción activa**: Para habilitar despliegues, su organización debe haber suscrito al menos un servicio Cloud Temple (IaaS OpenSource o IaaS VMware). Para contactar nuestros socios, no necesita una suscripción específica.
2. **Permisos de usuario**: Su cuenta de usuario debe tener los derechos necesarios para acceder a la consola y permisos de escritura en entornos objetivo cuando desee desplegar recursos allí.
3. **Entorno objetivo**: Tener un tenant configurado para el despliegue de soluciones.

---

## Acceso al Marketplace

### 1. Acceso desde la consola Shiva

Una vez conectado a la consola Cloud Temple, puede acceder al Marketplace de varias maneras:

- **Menú principal**: Un menú **Marketplace** está disponible en la navegación principal
- **Páginas de máquinas virtuales**: El Marketplace también es accesible desde las páginas de creación de máquinas virtuales en entornos OpenIaaS y VMware

### 2. Página del Marketplace

La página del Marketplace presenta un catálogo de soluciones disponibles. Cada solución muestra:

- **Nombre y logo** de la solución
- **Descripción corta**
- **Editor/Socio**
- **Tipo de solución** (VM Image, Solución SaaS, etc.)

<img src={marketplaceCatalog} />

---

## Consulta de detalles de solución

### Acceso a información detallada

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

Para soluciones compatibles con sus entornos OpenIaaS o VMware, puede desplegar directamente desde el Marketplace.

**Nota importante:** El despliegue directo solo está disponible para imágenes que tienen su entorno en sus objetivos compatibles.

**Guías detalladas:**
- [¿Cómo desplegar una imagen en OpenIaaS?](tutorials/deploy_openiaas)
- [¿Cómo desplegar una imagen en VMware?](tutorials/deploy_vmware)

### Contacto con socios

Para soluciones que requieren conexión, puede contactar directamente al editor socio.

**Guía detallada:**
- [¿Cómo contactar un socio?](tutorials/contact_partner)

---
