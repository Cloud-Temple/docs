---
title: Conceptos
---

<a id="definición-y-posicionamiento"></a>

## Presentación

La **Marketplace Cloud Temple** es una plataforma centralizada que facilita el acceso y el despliegue de soluciones cloud listas para usar: imágenes de máquinas virtuales para desplegar en sus entornos Cloud Temple, servicios gestionados y soluciones SaaS de socios.

La Marketplace Cloud Temple se posiciona como una palanca de transformación digital para las empresas que buscan servicios fiables, con una integración sencilla y rápida.

Permite:

- **Centralizar** el acceso a las soluciones de partners validadas
- **Simplificar** el despliegue de entornos cloud
- **Acelerar** la implementación de proyectos digitales
- **Desplegar** en sus entornos Cloud Temple, que tienen sus propias cualificaciones; la seguridad de las máquinas desplegadas sigue siendo su responsabilidad

Está dirigida a los equipos de TI y DevOps que construyen sus entornos Cloud Temple, incluso en sectores regulados, así como a las direcciones de negocio que buscan soluciones SaaS de editores socios.

## Ventajas

| Ventaja | Descripción |
|---|---|
| Acceso centralizado | Imágenes, servicios gestionados y soluciones SaaS de socios reunidos en un mismo catálogo, accesible desde la Consola Cloud Temple. |
| Despliegue rápido | Las imágenes de máquinas virtuales se despliegan directamente en sus entornos, en pocos minutos para la mayoría. |
| Soluciones de socios | Acceso a las soluciones de editores socios y contacto directo con ellos. |
| Integración en la Consola | La Marketplace se utiliza desde la interfaz de gestión habitual, sin herramienta adicional. |

## Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Imágenes de máquinas virtuales | Imágenes preconfiguradas para desplegar en IaaS OpenSource e IaaS VMware: consulte la [guía de inicio](./quickstart.md). |
| Servicios gestionados | Servicios operados para usted, presentados en el catálogo. |
| Soluciones SaaS de socios | Soluciones de editores socios, accesibles desde el catálogo. |
| Puesta en contacto | Contacto directo con el editor de una solución desde su ficha. |
| Catálogo público | La lista actualizada de soluciones figura en el [catálogo Marketplace del sitio web de Cloud Temple](https://www.cloud-temple.com/marketplace/). |

<a id="integración-con-el-ecosistema-cloud-temple"></a>

## Arquitectura

### Consola Cloud Temple

El Marketplace está integrado de forma nativa en la consola Cloud Temple, ofreciendo:

- **Acceso unificado** desde la interfaz de gestión habitual
- **Despliegue directo** de imágenes de máquinas virtuales en sus infraestructuras existentes
- **Gestión centralizada** de las máquinas virtuales así desplegadas

### Compatibilidad con los servicios

Las imágenes de máquinas virtuales del Marketplace se despliegan en los siguientes entornos:

- **IaaS OpenSource** : Despliegue en infraestructura OpenIaaS
- **IaaS VMware** : Integración con el entorno vSphere

## Regiones y zonas de disponibilidad

Las imágenes de máquinas virtuales se despliegan en la región y las zonas de disponibilidad de su entorno Cloud Temple (región FR1). Para los servicios gestionados y las soluciones SaaS, la localización es propia de cada oferta y figura en su ficha.

<a id="tipos-de-soluciones-disponibles"></a>

## Especificaciones técnicas

El catálogo reúne imágenes de máquinas virtuales, servicios gestionados y soluciones SaaS de editores socios. Se amplía continuamente: las soluciones descritas aquí son solo ejemplos, y la lista actualizada figura en el [catálogo Marketplace del sitio web de Cloud Temple](https://www.cloud-temple.com/marketplace/).

### Imágenes de máquinas virtuales

Las imágenes de máquinas virtuales constituyen el núcleo actual del producto Marketplace. Estas imágenes preconfiguradas permiten un despliegue rápido de entornos estandarizados.

**Características :**

- Imágenes validadas y seguras
- Compatible con los entornos OpenIaaS y VMware
- Despliegue en pocos minutos en general, según la imagen y el entorno
- Integración nativa con la consola Cloud Temple

### Soluciones de socios

La Marketplace también ofrece acceso a soluciones desarrolladas por nuestros partners editores, que cubren diferentes áreas de actividad.

**Proceso de acceso :**

- Consulta del catálogo desde la consola
- Puesta en contacto directa con el socio
- Según la oferta, despliegue en sus entornos Cloud Temple o acceso al servicio SaaS operado por el editor

### Límites

- El catálogo evoluciona continuamente: las soluciones descritas en esta página son ejemplos.
- La actualización de las soluciones de socios corresponde a sus editores, al igual que los plazos de respuesta a las solicitudes de contacto.

## Seguridad y cumplimiento

### Alojamiento y cualificaciones

El alojamiento y las cualificaciones dependen del tipo de solución:

- **Imágenes de máquinas virtuales**: se despliegan en sus entornos Cloud Temple y dependen de sus cualificaciones.
- **Servicios gestionados y soluciones SaaS**: su alojamiento y sus certificaciones son propios de cada oferta. Consulte la información de su ficha en el [catálogo Marketplace del sitio web](https://www.cloud-temple.com/marketplace/) y, para cualquier precisión, póngase en contacto con el editor.

### Validación de soluciones

Las soluciones ofrecidas en el Marketplace son objeto de una selección rigurosa que garantiza:

- **Compatibilidad** con la infraestructura Cloud Temple, para las soluciones que se despliegan en ella
- **Seguridad** de las imágenes de máquinas virtuales
- **Fiabilidad** de los socios editores

## Responsabilidades

El soporte de la Marketplace en sí (catálogo, despliegue de las imágenes) forma parte del soporte de la Consola Cloud Temple. Cada oferta tiene además sus propias condiciones de soporte: las del servicio para una oferta de Cloud Temple, las del editor para una solución de un socio, que también se encarga de sus actualizaciones y plazos de respuesta. Las máquinas virtuales desplegadas desde la Marketplace son recursos de su entorno IaaS: consulte la [matriz de responsabilidades (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilidad

- **Imágenes de máquinas virtuales**: las máquinas desplegadas son recursos de su entorno IaaS; su reversibilidad sigue la de la oferta correspondiente, IaaS OpenSource o IaaS VMware.
- **Soluciones de socios**: las condiciones de salida son las del editor, indicadas por este.

## Precios

La Marketplace no tiene coste propio. Usted paga la infraestructura en la que despliega una imagen y, según la oferta elegida, la licencia o el servicio, proporcionado por Cloud Temple o por un socio, según sus condiciones de precio. El detalle de cada oferta figura en el [catálogo Marketplace del sitio web de Cloud Temple](https://www.cloud-temple.com/marketplace/).
