---
title: Conceptos
---

<a id="définition-et-positionnement"></a>

## Presentación

La **Marketplace Cloud Temple** es una plataforma centralizada que facilita el acceso y la implementación de soluciones cloud listas para usar: imágenes de máquinas virtuales para desplegar en sus entornos Cloud Temple, servicios gestionados y soluciones SaaS de partners.

La Marketplace Cloud Temple se posiciona como un palanca de transformación digital para las empresas que buscan servicios fiables, con una integración simple y rápida.

Permite:

- **Centralizar** el acceso a las soluciones de partners seleccionadas por Cloud Temple
- **Simplificar** el despliegue de entornos cloud
- **Acelerar** la implementación de proyectos digitales
- **Desplegar** en sus entornos Cloud Temple, que poseen sus propias calificaciones; la seguridad de las máquinas desplegadas sigue siendo de su responsabilidad

Se dirige a los equipos de informática y DevOps que construyen sus entornos Cloud Temple, incluidos en sectores regulados, así como a las direcciones de negocio en busca de soluciones SaaS de editores partners.

## Ventajas

| Ventaja | Descripción |
|---|---|
| Acceso centralizado | Imágenes, servicios gestionados y soluciones SaaS de partners reunidos en un mismo catálogo, consultable desde la Consola Cloud Temple. |
| Despliegue rápido | Las imágenes de máquinas virtuales se despliegan directamente en sus entornos, en pocos minutos en la mayoría de los casos. |
| Soluciones de partners | Acceso a las soluciones de editores partners y contacto directo con ellos. |
| Integración con la Consola | La Marketplace se utiliza desde la interfaz de gestión habitual, sin herramienta adicional. |

## Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Imágenes de máquinas virtuales | Imágenes preconfiguradas para desplegar en OpenIaaS, VMware o VM Instances, según los destinos compatibles de cada imagen: ver la [guía de inicio](./quickstart.md). |
| Servicios gestionados | Servicios operados para usted, presentados en el catálogo. |
| Soluciones SaaS de partners | Soluciones de editores partners, accesibles desde el catálogo. |
| Puesta en relación | Contacto directo con el editor de una solución desde su ficha. |
| Catálogo público | La lista actualizada de soluciones figura en el [catálogo Marketplace del sitio Cloud Temple](https://www.cloud-temple.com/marketplace/). |

<a id="intégration-avec-lécosystème-cloud-temple"></a>

## Arquitectura

### Consola Cloud Temple

La Marketplace está integrada nativamente en la consola Cloud Temple, ofreciendo:

- **Acceso unificado** desde la interfaz de gestión habitual
- **Despliegue directo** de las imágenes de máquinas virtuales en sus infraestructuras existentes
- **Gestión centralizada** de las máquinas virtuales así desplegadas

### Compatibilidad con los servicios

Según los destinos compatibles de cada imagen, las imágenes de máquinas virtuales de la Marketplace se despliegan en los siguientes entornos:

- **IaaS OpenSource**: Despliegue en infraestructura OpenIaaS
- **IaaS VMware**: Integración con el entorno vSphere
- **VM Instances**: Despliegue desde la Marketplace o desde el catálogo integrado en el asistente de creación; ver el [tutorial VM Instance](./tutorials/deploy_vminstance.md)

## Regiones y zonas de disponibilidad

Las imágenes de máquinas virtuales se despliegan en la región y las zonas de disponibilidad de su entorno Cloud Temple (región FR1). Para los servicios gestionados y las soluciones SaaS, la localización es propia de cada oferta y figura en su ficha.

<a id="types-de-solutions-disponibles"></a>

## Características técnicas

El catálogo reúne imágenes de máquinas virtuales, servicios gestionados y soluciones SaaS de editores partners. Se enriquece de forma continua: las soluciones presentadas aquí son solo ejemplos, y la lista actualizada figura en el [catálogo Marketplace del sitio Cloud Temple](https://www.cloud-temple.com/marketplace/).

### Imágenes de máquinas virtuales

Las imágenes de máquinas virtuales constituyen el núcleo actual del producto Marketplace. Estas imágenes preconfiguradas permiten un despliegue rápido de entornos estandarizados.

**Características:**

- Imágenes verificadas y validadas por Cloud Temple antes de su publicación
- Despliegue en OpenIaaS, VMware o VM Instances, según los destinos compatibles de cada imagen
- Despliegue en pocos minutos en general, según la imagen y el entorno
- Integración nativa con la consola Cloud Temple

### Soluciones de partners

La Marketplace ofrece también el acceso a soluciones desarrolladas por nuestros partners editores, que cubren diferentes ámbitos de actividad.

**Proceso de acceso:**

- Consulta del catálogo desde la consola
- Puesta en relación directa con el partner
- Según la oferta, despliegue en sus entornos Cloud Temple o acceso al servicio SaaS operado por el editor

### Limitaciones

- El catálogo evoluciona de forma continua: las soluciones descritas en esta página son ejemplos.
- La actualización de las soluciones de partners corresponde a sus editores, al igual que los plazos de respuesta a las solicitudes de contacto.

## Seguridad y conformidad

### Alojamiento y calificaciones

El alojamiento y las calificaciones dependen del tipo de solución:

- **Imágenes de máquinas virtuales**: se despliegan en sus entornos Cloud Temple y están sujetas a sus calificaciones.
- **Servicios gestionados y soluciones SaaS**: su alojamiento y sus certificaciones son propios de cada oferta. Consulte la información de su ficha en el [catálogo Marketplace del sitio](https://www.cloud-temple.com/marketplace/) y, para cualquier precisión, contacte al editor.

### Validación de las soluciones

Cloud Temple selecciona las soluciones propuestas en la Marketplace. Antes de su publicación, una imagen de máquina virtual se verifica (archivos y metadatos) y luego se valida por Cloud Temple. Esta validación no sustituye la seguridad de las máquinas desplegadas, que sigue siendo de su responsabilidad. Para una solución de partner, el editor sigue siendo responsable de su contenido y de sus actualizaciones.

## Responsabilidades

El soporte de la Marketplace en sí misma (catálogo, despliegue de imágenes) corresponde al soporte de la Consola Cloud Temple. Cada oferta tiene luego sus propias condiciones de soporte: las del servicio para una oferta de Cloud Temple, las del editor para una solución de partner, que también asegura sus actualizaciones y sus plazos de respuesta. Las máquinas virtuales desplegadas desde la Marketplace son recursos de su entorno IaaS: ver la [matriz de responsabilidades (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilidad

- **Imágenes de máquinas virtuales**: las máquinas desplegadas son recursos de su entorno IaaS; su reversibilidad sigue la de la oferta correspondiente, IaaS OpenSource o IaaS VMware.
- **Soluciones de partners**: las condiciones de salida son las del editor, indicadas por este.

## Tarificación

La Marketplace no tiene un coste propio. Usted paga la infraestructura sobre la que despliega una imagen y, según la oferta elegida, la licencia o el servicio, proporcionado por Cloud Temple o por un partner, según sus condiciones tarifarias. El detalle de cada oferta figura en el [catálogo Marketplace del sitio Cloud Temple](https://www.cloud-temple.com/marketplace/).
