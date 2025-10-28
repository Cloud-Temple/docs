---
title: Conceptos
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Presentación de Managed Kubernetes

La oferta **Managed Kubernetes** (también denominada "Kub Managé" o "KM") es una solución de contenedorización Kubernetes gestionada por Cloud-Temple, desplegada en forma de Máquinas Virtuales que funcionan sobre las infraestructuras IaaS de Cloud-Temple (OpenIaaS o VMware).

**Managed Kubernetes** se basa en Talos Linux (https://www.talos.dev/), un sistema operativo dedicado a Kubernetes, ligero y seguro. Es inmutable, sin ningún shell ni acceso SSH, y configurado únicamente de forma declarativa a través de la API gRPC.

La instalación estandarizada incluye un conjunto de componentes mayoritariamente de código abierto y validados por el CNCF:

- **CNI Cillium**, con interfaz de observabilidad (**Hubble**): Cillium es una solución de red para contenedores Kubernetes (*Container Network Interface*). Gestiona seguridad, balanceo de carga, service mesh, observabilidad, cifrado, etc. Es un componente de red fundamental presente en la mayoría de las variantes de Kubernetes (OpenShift, AKS, GKE, EKS, ...). Hemos incluido la interfaz gráfica **Hubble** para visualizar los flujos de Cillium.

    <img src={cillium} />

- **MetalLB** y **nginx**: Para exponer aplicaciones web, se incluyen de forma predeterminada tres *ingress-classes* **nginx**:
    - *nginx-external-secured*: exposición en una IP pública, filtrada en el firewall para permitir únicamente IPs conocidas (usado para interfaces gráficas de los distintos productos y la API de Kubernetes).
    - *nginx-external*: exposición en una segunda IP pública sin filtrado (o filtrado específico por cliente).
    - *nginx-internal*: exposición únicamente en una IP interna.

    Para servicios "no web", un balanceador de carga **MetalLB** permite exponer servicios internamente o en IPs públicas (lo que permite desplegar otros ingresses, como por ejemplo un WAF).

- **Almacenamiento distribuido Rook-Ceph**: Para el almacenamiento de volúmenes persistentes (PV), se integra un almacenamiento distribuido **Ceph** de código abierto en la plataforma. Permite utilizar las *storage-classes* *ceph-block*, *ceph-bucket* y *ceph-filesystem*. Se utiliza un almacenamiento con **7500 IOPS/To**, ofreciendo altas prestaciones. En despliegues de producción (sobre 3 AZ), los nodos de almacenamiento son dedicados (1 nodo por AZ); en despliegues no productivos (1 AZ), el almacenamiento se comparte con los nodos workers.

- **Cert-Manager**: El gestor de certificados de código abierto **Cert-Manager** está integrado nativamente en la plataforma.

- **ArgoCD**: Utilizamos **ArgoCD** para despliegues automatizados de los distintos componentes mediante una cadena de **CI/CD**.

- Pila **Prometheus** (Prometheus, Grafana, Promtail, Loki): Los clusters Managed Kubernetes se entregan por defecto con una pila completa de código abierto **Prometheus** para la observabilidad, que incluye:
    - **Prometheus**
    - **Grafana**, con múltiples dashboards
    - **Loki** y **PromTail**: los registros de la plataforma se exportan al almacenamiento S3 de Cloud-Temple (e integrados en Grafana).

    <img src={grafana} />

- **Harbor** es un **Container registry** que le permite almacenar imágenes de sus contenedores o sus charts Helm directamente en el clúster. Realiza escaneos de vulnerabilidades en sus imágenes y puede firmarlas digitalmente. **Harbor** también permite sincronizaciones con otros registros. (https://goharbor.io/)

- **KubeCost** (https://github.com/kubecost) es una herramienta de gestión de costes (Finops) para Kubernetes. Le permite rastrear con precisión el consumo de recursos de Kubernetes y realizar facturación por proyecto/namespace.

- Estrategias de seguridad avanzadas con **Kyverno** y **Capsule**:
    - **Kyverno** (https://kyverno.io/) es un controlador de admisión para Kubernetes que permite aplicar políticas. Es una herramienta esencial para la gobernanza y seguridad en Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) es una herramienta de gestión de permisos que facilita la administración de derechos en Kubernetes. Introduce el concepto de *tenant*, que permite centralizar y delegar permisos sobre múltiples namespaces. Gracias a **Capsule**, los usuarios de la plataforma Kubernetes gestionada tienen derechos restringidos únicamente a sus propios namespaces.

- **Veeam Kasten** (también conocido como 'k10') es una solución para la **copia de seguridad** de workloads de Kubernetes.

    Permite realizar copias de seguridad completas: manifiestos, volúmenes, etc., hacia el almacenamiento objeto S3 de Cloud-Temple. **Kasten** utiliza **Kanister** para permitir copias de seguridad coherentes a nivel aplicativo, por ejemplo para bases de datos (https://docs.kasten.io/latest/usage/blueprints/).

    **Kasten** es una herramienta multiplataforma que puede funcionar con otros clústeres Kubernetes (OpenShift, hiperscalers, ...). Por tanto, puede usarse para escenarios de reversibilidad o migración (K10 gestiona las adaptaciones necesarias mediante *transformaciones*, por ejemplo, un cambio de ingress-class), pero también para "refresh" (por ejemplo, restauración planificada de un entorno productivo en preproducción).

    **Veeam Kasten** requiere licencias, facturadas por nodo worker.

- (opcional): Autenticación **Entra con SSO**: Para usuarios que deseen autenticarse directamente en Kubernetes Managé con su cuenta EntraID (Microsoft 365), es posible configurar (de forma opcional) un SSO mediante **KeyCloak**. (*Integración con otros IdP externos bajo solicitud*)

## SLA y información sobre el soporte
- **Disponibilidad garantizada (producción 3 AZ)**: 99,95 %
- **Soporte**: N1/N2/N3 incluidos para el ámbito base (infraestructura y operadores estándar).
- **Compromiso de tiempo de recuperación (ETR)**: según el contrato marco Cloud Temple.
- **Mantenimiento (MCO)**: actualizaciones regulares de Talos / Kubernetes / operadores estándar por parte de la MSP, sin interrupción del servicio (actualización progresiva).

Los plazos de atención y recuperación dependen de la gravedad del incidente, conforme a la escala de soporte (P1 a P4).

## Política de versiones y ciclo de vida
- **Kubernetes soportado:** N-2 (3 versiones principales al año, aproximadamente cada 4 meses). Cada versión se soporta oficialmente durante 12 meses, lo que garantiza una ventana de soporte de Cloud Temple de hasta 16 meses por versión.
- **Talos OS:** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene aproximadamente 12 meses (incluyendo parches de seguridad).
  - Ritmo recomendado de actualización: 3 veces al año, en coherencia con las actualizaciones de Kubernetes.
  - Los parches críticos (CVE, kernel) se aplican mediante actualización progresiva, sin interrupción del servicio.
- **Operadores estándar:** actualizados dentro de los 90 días siguientes al lanzamiento estable.
- **Actualizaciones:**
  - **Mayores** (Kubernetes N+1, Talos X+1): planificadas 3 veces al año, mediante actualización progresiva.
  - **Menores:** aplicadas automáticamente en un plazo de 30 a 60 días.
- **Deprecación:** versión N-3 → fin del soporte dentro de los 90 días posteriores al lanzamiento de N.

## Nodos Kubernetes

### Producción (multi-zonal)
<img src={archi_overview} />

Para un despliegue en "producción" (multi-zonal), se utilizan las siguientes máquinas:

| **AZ** | **Máquina**        | **vCores** | **RAM** | **Almacenamiento local**                  |
| ------ | ------------------ | ---------- | ------- | ----------------------------------- |
| AZ07   | Git Runner         | 4          | 8 GB    | SO: 20 GB                           |
| AZ05   | Control Plane 1    | 8          | 12 GB   | SO: 20 GB                           |
| AZ06   | Control Plane 2    | 8          | 12 GB   | SO: 20 GB                           |
| AZ07   | Control Plane 3    | 8          | 12 GB   | SO: 20 GB                           |
| AZ05   | Storage Node 1     | 12         | 24 GB   | SO: 20 GB + Ceph 500 GB mínimo (*) |
| AZ06   | Storage Node 2     | 12         | 24 GB   | SO: 20 GB + Ceph 500 GB mínimo (*) |
| AZ07   | Storage Node 3     | 12         | 24 GB   | SO: 20 GB + Ceph 500 GB mínimo (*) |
| AZ05   | Worker Node 1 (**) | 12         | 24 GB   | SO: 20 GB                           |
| AZ06   | Worker Node 2 (**) | 12         | 24 GB   | SO: 20 GB                           |
| AZ07   | Worker Node 3 (**) | 12         | 24 GB   | SO: 20 GB                           |

(*) : Cada nodo de almacenamiento incluye un mínimo de 500 GB de espacio en disco, para un almacenamiento útil distribuido Ceph de 500 GB (los datos se replican en cada AZ, por lo tanto ×3). El espacio libre disponible para el cliente es de aproximadamente 350 GB. Este tamaño inicial puede ampliarse durante la construcción o más adelante, según las necesidades.

(**) : El tamaño y el número de nodos worker pueden ajustarse según la capacidad de cálculo requerida por el cliente. El número mínimo de nodos worker es de 3 (1 por AZ), y se recomienda aumentar su número en lotes de 3 para mantener una distribución multi-zonal coherente. El tamaño de los nodos worker puede adaptarse, con un mínimo de 12 núcleos y 24 GB de RAM; el límite superior por nodo worker está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente hasta 112 núcleos/1536 GB de RAM con placas Performance 3). El número máximo de nodos worker es de 250. El CNCF recomienda tener nodos worker de tamaño idéntico. El límite de pods por nodo worker es de 110.

### dev/test (mono-zonal)
<img src={archi_overview_1az} />

Para una versión "dev/test" (mono-zonal), se despliegan las siguientes máquinas:

| **AZ** | **Máquina**        | **vCores** | **RAM** | **Almacenamiento local**                 |
| ------ | ------------------ | ---------- | ------- | ---------------------------------- |
| AZ0n   | Git Runner         | 4          | 8 GB    | SO: 20 GB                          |
| AZ0n   | Control Plane      | 8          | 12 GB   | SO: 20 GB                          |
| AZ0n   | Worker Node 1 (**) | 12         | 24 GB   | SO: 20 GB + Ceph 300 GB mínimo (*) |
| AZ0n   | Worker Node 2 (**) | 12         | 24 GB   | SO: 20 GB + Ceph 300 GB mínimo (*) |
| AZ0n   | Worker Node 3 (**) | 12         | 24 GB   | SO: 20 GB + Ceph 300 GB mínimo (*) |

(*) : Se utilizan 3 nodos Worker como nodos de almacenamiento y se entregan con un mínimo de 300 GB de espacio en disco, para un almacenamiento útil distribuido de 300 GB (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 GB. Este tamaño inicial puede aumentarse durante la construcción o más adelante, según las necesidades.

(**) : El tamaño y el número de nodos Worker pueden ajustarse según las necesidades de capacidad de cálculo del cliente. El número mínimo de nodos Worker es de 3 (debido a la replicación del almacenamiento). El tamaño de los nodos Worker puede adaptarse, con un mínimo de 12 núcleos y 24 GB de RAM; el límite superior por nodo Worker está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente hasta 112 núcleos/1536 GB de RAM con placas Performance 3). La cantidad máxima de nodos Worker es de 250. El CNCF recomienda tener nodos Worker del mismo tamaño. El límite de pods por nodo Worker es de 110.

## IaaS Prerequisites

You must have an IaaS infrastructure with the minimum requirements for deploying Managed Kubernetes:

### Producción (multi-zona)

- 1 inquilino Cloud-Temple
- 3 Zonas de disponibilidad (AZ)
- 2 IP públicas disponibles
- 1 VLAN multi-zona con un rango privado IPv4 **/22**
- 1 clúster de firewall: preferiblemente Fortigate, para tener balanceo de carga con BGP y automatización completa (pero se aceptan otros clústeres de firewall)
- ~2 TB de almacenamiento S3 (facturado al consumo real)
- En cada AZ:
    - 1 nodo hipervisor (OpenIaaS o VMware) por AZ con 40 núcleos y 72 GB de RAM dedicados a Kubernetes gestionado (nodo ECO o superior)
    - 600 GB disponibles en un datastore con **7500 IOPS efectivos** (por ejemplo, un datastore de 2,5 TB con 3000 IOPS)

### Dev/test (single zone)

- 1 Cloud-Temple tenant
- 1 AZ
- 2 public IPs available
- 1 VLAN with a private IPv4 range **/22**
- 1 firewall cluster: preferably Fortigate, to enable load balancing with BGP and full automation (other firewall clusters are accepted)
- 48 available cores and 92 GB of RAM (it is acceptable if cores are subject to a virtualization factor of 1.5)
- 1.2 TB available in a datastore with **7500 effective IOPS**
- ~1 TB of S3 storage (billed at actual usage)