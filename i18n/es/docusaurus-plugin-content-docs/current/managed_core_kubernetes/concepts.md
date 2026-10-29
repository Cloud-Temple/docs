---
title: Conceptos
sidebar_label: Conceptos (Core)
---
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Presentación

Managed Core Kubernetes es una base de orquestación de contenedores gestionada, basada en estándares de código abierto validados por la CNCF. Cada clúster se despliega en un entorno dedicado al cliente, en una única zona de disponibilidad o en tres. La base proporciona los cimientos de Kubernetes (SO, red, balanceador de carga, almacenamiento distribuido) y le deja libertad para construir su plataforma con sus propias herramientas de despliegue continuo, observabilidad, copia de seguridad o seguridad.

Para una plataforma entregada lista para usar, con estas herramientas ya integradas, consulte la oferta [Managed Kubernetes](../managed_kubernetes/concepts.md), que también compara las dos ofertas componente por componente.

### Destinatarios y casos de uso

Managed Core Kubernetes está dirigido a equipos que dominan Kubernetes y el ecosistema cloud-native: equipos de plataforma, arquitectos cloud, organizaciones con su propio stack técnico y empresas reguladas. Casos de uso típicos:

- **Plataformas internas (IDP)**: construcción de una plataforma a medida para los desarrolladores.
- **Aplicaciones cloud-native**: arquitecturas de microservicios con un stack personalizado.
- **Entornos múltiples**: separación de desarrollo, pruebas y producción.
- **Cumplimiento normativo**: despliegues sobre una base soberana y controlada.

## Ventajas

| Ventaja                | Descripción                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------|
| Cimientos gestionados  | La infraestructura, el SO y los componentes de la base se gestionan en su lugar.                                  |
| Libertad de construcción | Usted instala y configura su propio stack (observabilidad, CI/CD, seguridad…).                                   |
| Alta disponibilidad    | En producción, el clúster se distribuye en tres zonas de disponibilidad.                                           |
| Seguridad by design    | SO minimalista e inmutable, gestionado únicamente por API, sin shell ni acceso SSH.                                |
| Compatible con CNCF    | Los estándares de código abierto evitan la dependencia tecnológica y garantizan la portabilidad de sus aplicaciones. |

## Funcionalidades

Los clústeres se basan en Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicado a Kubernetes, ligero y seguro. Es inmutable, sin shell ni acceso SSH, y se configura únicamente de forma declarativa mediante una API gRPC.

| Componente                  | Descripción                                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| CNI Cilium                  | Red de contenedores y políticas de red.                                                                       |
| MetalLB                     | Balanceador de carga para exponer servicios internamente o en IP públicas.                                    |
| Almacenamiento distribuido Rook-Ceph | Volúmenes persistentes con las *storage-classes* *ceph-block*, *ceph-bucket* y *ceph-filesystem*, 7500 IOPS. |
| Almacenamiento local TopoLVM (opcional) | Almacenamiento rápido en los Worker Nodes, para las aplicaciones que replican ellas mismas sus datos. |

Los componentes de aplicación (ingress, observabilidad, copia de seguridad, gestión de certificados, gobernanza) no están incluidos: usted los elige y los opera.

## Arquitectura

### Producción (multizona)

<img src={archi_overview} />

El clúster de producción se distribuye en tres zonas de disponibilidad:

- **Control Plane**: tres nodos, uno por zona;
- **nodos de almacenamiento**: tres nodos Rook-Ceph dedicados, uno por zona, con datos replicados en las tres zonas;
- **nodos Worker**: al menos tres, uno por zona, ajustables según sus necesidades;
- **nodos Worker Bare Metal** (opcional): para necesidades de rendimiento específicas, en particular las GPU;
- **Git Runner**: un nodo para los pipelines de CI/CD;
- **firewall gestionado**: dos máquinas virtuales, que filtran las IP públicas de la API de Kubernetes.

### Dev/test (una o dos zonas)

<img src={archi_overview_1az} />

El clúster de desarrollo y pruebas se despliega en una única zona de disponibilidad, con un Control Plane, al menos tres nodos Worker y un Git Runner. El almacenamiento Ceph se comparte en los nodos Worker.

### Integraciones

- **Proveedores de identidad**: integración opcional mediante OIDC.
- **IaaS Cloud Temple**: interconexión de los clústeres con recursos virtualizados, como bases de datos o componentes middleware.

## Regiones y zonas de disponibilidad

Managed Core Kubernetes está disponible en la región FR1. Un clúster de producción se distribuye en tres zonas de disponibilidad; un clúster de desarrollo y pruebas se despliega en una sola. Los datos se alojan en Francia.

## Especificaciones técnicas

### Nodos de un clúster de producción

| **Máquina**         | **Número**  | **vCores** | **RAM** | **Almacenamiento local**                           |
| ------------------- | ----------- | ---------- | ------- | -------------------------------------------------- |
| Git Runner          | 1           | 4          | 8 GB    | SO: 256 GB                                         |
| Control Plane       | 3 (1 por AZ) | 8         | 12 GB   | SO: 64 GB                                          |
| Storage Node        | 3 (1 por AZ) | 12        | 24 GB   | SO: 64 GB + Ceph 500 GB mínimo (~350 GB útiles)    |
| Worker Node         | 3 o más (1 por AZ como mínimo) | 12 o más | 24 GB o más | SO: 64 GB                        |

### Nodos de un clúster de desarrollo y pruebas

| **Máquina**   | **Número** | **vCores** | **RAM** | **Almacenamiento local**                         |
| ------------- | ---------- | ---------- | ------- | ------------------------------------------------ |
| Git Runner    | 1          | 4          | 8 GB    | SO: 256 GB                                       |
| Control Plane | 1          | 8          | 12 GB   | SO: 64 GB                                        |
| Worker Node   | 3 o más    | 12 o más   | 24 GB o más | SO: 64 GB + Ceph 300 GB mínimo (~150 GB útiles) |

En desarrollo y pruebas, tres Worker Nodes sirven también como nodos de almacenamiento: este mínimo lo impone la replicación del almacenamiento.

### Límites

| Parámetro                        | Producción                          | Desarrollo y pruebas  |
|----------------------------------|-------------------------------------|-----------------------|
| Número de Worker Nodes           | 3 mínimo (1 por zona), 100 máximo   | 3 mínimo, 250 máximo  |
| Tamaño mínimo de un Worker Node  | 12 núcleos, 24 GB de RAM            | 12 núcleos, 24 GB de RAM |
| Pods por Worker Node             | 110                                 | 110                   |

## Seguridad y cumplimiento

Managed Core Kubernetes está certificado HDS e ISO 27001, y disponible en servicios cualificados SecNumCloud y conformes con C5.

- **SO inmutable**: sin shell ni acceso SSH, gestionado únicamente por API.
- **Cifrado**: datos cifrados en reposo y en tránsito, cifrado físico de los enlaces entre zonas de disponibilidad.
- **Trazabilidad**: registro de auditoría completo.
- **Residencia de los datos**: Francia (FR1), en formatos Kubernetes estándar.

## Versiones y ciclo de vida

- **Kubernetes soportado:** N-2, con una nueva release soportada aproximadamente cada cuatro meses.
- **Actualizaciones:**
  - **mayores** (Kubernetes, Talos OS): planificadas tres veces al año, en rolling update, sin interrupción;
  - **menores y parches de seguridad**: aplicados automáticamente en un plazo de 30 a 60 días.
- **Obsolescencia:** la versión N-3 queda obsoleta 90 días después de la publicación de la versión N.

## Disponibilidad del servicio

El objetivo de disponibilidad de un clúster de producción (API de Kubernetes) es del 99,95 %, medido sobre un mes. Los clústeres de desarrollo y pruebas no tienen objetivo de disponibilidad.

## Responsabilidades

El reparto de responsabilidades se detalla en la [matriz de responsabilidades (RACI) de Managed Kubernetes](../contractual/kubernetes/raci.md). Para la oferta Core:

- **Cloud Temple** es responsable de la base: infraestructura, SO, componentes de la base y sus actualizaciones. El soporte de niveles 1, 2 y 3 está incluido para este perímetro; los plazos de atención dependen de la gravedad del incidente (P1 a P4).
- **El cliente** es totalmente autónomo y responsable de lo que despliega sobre la base: aplicaciones, operadores, herramientas de supervisión, de copia de seguridad y de seguridad.

## Reversibilidad

Los clústeres se basan en estándares de código abierto y formatos Kubernetes estándar, lo que garantiza la portabilidad de sus aplicaciones.

| Operación                 | Entregable                 | Plazo       | Coste      |
|---------------------------|----------------------------|-------------|------------|
| Exportación de las aplicaciones | Manifiestos YAML de Kubernetes | 15 días | Sin coste |
| Asistencia a la migración | Soporte técnico            | Bajo demanda | Bajo presupuesto |

## Precios

El servicio gestionado se factura mensualmente, por clúster; la infraestructura IaaS subyacente (cómputo, almacenamiento, red) se factura de forma adicional, según el dimensionamiento. Las tarifas se publican en la página del producto en el sitio web de Cloud Temple:
[Managed Kubernetes — precios](https://www.cloud-temple.com/produits/managed-kubernetes/).
