---
title: Conceptos
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Nuestras Ofertas de Managed Kubernetes

Cloud Temple ofrece dos ofertas distintas para satisfacer sus necesidades de orquestación de contenedores:

- **Managed Core Kubernetes**: Una oferta minimalista que le proporciona una base Kubernetes robusta y segura, basada en componentes open-source de vanguardia. Es ideal para equipos expertos que deseen construir su propia plataforma personalizada.
- **Managed Kubernetes**: Una solución completa y lista para usar que incluye un stack completo de herramientas para red, seguridad, almacenamiento, despliegue continuo, observabilidad, copias de seguridad y gestión de costes.

### Tabla Comparativa de Ofertas

| Componente | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **OS** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **Observabilidad CNI** | ❌ | Hubble |
| **Load Balancer** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Almacenamiento** | Rook-Ceph | Rook-Ceph |
| **Despliegue Continuo (GitOps)** | ❌ | ArgoCD |
| **Observabilidad** | ❌ | Prometheus, Grafana, Loki |
| **Copia de Seguridad y Migración** | ❌ | Veeam Kasten |
| **Gestión de Costes (FinOps)** | ❌ | OpenCost |
| **Gobernanza y Seguridad**| ❌ | Kyverno, Capsule |
| **Container Registry**| ❌ | Harbor |
| **Gestión de Certificados**| ❌ | Cert-Manager |
| **Autenticación SSO**| ❌ | Integración OIDC |

## Presentación de la Oferta Managed Kubernetes (completa)

La oferta **Managed Kubernetes** (también llamada "Kube Gestionado" o "KM") es una solución de contenerización Kubernetes gestionada por Cloud-Temple, desplegada en forma de Máquinas Virtuales que funcionan sobre las infraestructuras IaaS Cloud-Temple OpenIaaS.

**Managed Kubernetes** está basado en Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicado a Kubernetes que es ligero y seguro. Es inmutable, sin ningún shell ni acceso SSH, y configurado únicamente de manera declarativa a través de la API gRPC.

La instalación estandarizada incluye un conjunto de componentes, mayoritariamente OpenSource y validados por la CNCF:

- **CNI Cilium**, con interfaz de observabilidad (**Hubble**): Cilium es una solución de red para contenedores Kubernetes (*Container Network Interface*). Gestiona la seguridad, el load balancing, el service mesh, la observabilidad, el cifrado, etc. Es un componente de red fundamental que se encuentra en la mayoría de las variantes de Kubernetes (OpenShift, AKS, GKE, EKS,...). Hemos incluido la interfaz gráfica **Hubble** para la visualización de los flujos de Cilium.

    <img src={cillium} />

- **MetalLB** y **nginx**: Para la exposición de aplicaciones web, se integran por defecto 3 *ingress-classes* **nginx**:
  - *nginx-external-secured*: exposición en una IP pública, filtrada en el firewall para permitir solo IPs conocidas (usado para las interfaces gráficas de los distintos productos y la API de Kubernetes)
  - *nginx-external*: exposición en una segunda IP pública no filtrada (o filtrado específico del cliente)
  - *nginx-internal*: exposición únicamente en una IP interna

    Para los servicios "no web", un load-balancer **MetalLB** permite exponer servicios internamente o en IPs públicas. (lo que permite desplegar otros ingresses, como por ejemplo un WAF)

- **Almacenamiento Distribuido Rook-Ceph**: para el almacenamiento de volúmenes persistentes (PV), se integra en la plataforma un almacenamiento distribuido OpenSource **Ceph**. Permite utilizar las *storage-classes* *ceph-block*, *ceph-bucket* y *ceph-filesystem*. Se utiliza un almacenamiento con **7500 IOPS**, que permite un alto rendimiento. En los despliegues de producción (en 3 AZs), los nodos de almacenamiento son dedicados (1 nodo por AZ); en los despliegues fuera de producción (1 AZ), el almacenamiento se comparte con los worker nodes.

- **Cert-Manager**: el gestor de certificados OpenSource **Cert-Manager** está integrado de forma nativa en la plataforma.

- **ArgoCD** está a su disposición para sus despliegues automatizados a través de una cadena de **CI/CD**.

- Stack **Prometheus** (Prometheus, Grafana, Loki): los clústeres Managed Kubernetes se entregan de serie con un stack OpenSource completo **Prometheus** para la observabilidad, que incluye:
  - **Prometheus**
  - **Grafana**, con numerosos dashboards
  - **Loki**: los registros de la plataforma se exportan al almacenamiento S3 de Cloud-Temple (e integrados en Grafana).

    <img src={grafana} />

- **Harbor** es una **Container Registry** que le permite almacenar las imágenes de sus contenedores o sus charts de Helm directamente en el clúster. Realiza **escaneos de vulnerabilidades** en sus imágenes y puede firmarlas digitalmente. **Harbor** también permite sincronizaciones con otros registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) es una herramienta de gestión de costes (FinOps) para Kubernetes. Le permite realizar un seguimiento detallado del consumo de recursos de Kubernetes y realizar chargeback por proyecto/namespace.

- Políticas de seguridad avanzadas con **Kyverno** y **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) es un controlador de admisión para Kubernetes que permite aplicar políticas. Es una herramienta esencial para la gobernanza y la seguridad en Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) es una herramienta de gestión de permisos que facilita la administración de derechos en Kubernetes. Introduce la noción de *tenant* que permite centralizar y delegar permisos en múltiples namespaces. A través de **Capsule**, los usuarios de la plataforma Kubernetes Gestionado tienen derechos restringidos únicamente a sus propios namespaces.

- **Veeam Kasten** (también conocido como 'k10') es una solución para la **copia de seguridad** de workloads de Kubernetes.

    Permite realizar copias de seguridad de un despliegue completo: manifiestos, volúmenes, etc., en el almacenamiento de objetos S3 de Cloud-Temple. **Kasten** utiliza **Kanister** para permitir copias de seguridad de aplicaciones coherentes, por ejemplo para bases de datos ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** es una herramienta multiplataforma que puede funcionar con otros clústeres de Kubernetes (OpenShift, Hyperscaler,...). Por lo tanto, puede utilizarse para escenarios de reversibilidad o migración (K10 gestiona las adaptaciones necesarias a través de *transformaciones*, por ejemplo un cambio de ingress-class), pero también de "refresh" (ejemplo: restauración planificada de un entorno de producción a pre-producción).

- **Autenticación SSO** con un Proveedor de Identidad Externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA e Información de Soporte

- **Disponibilidad garantizada (producción 3 AZ)**: 99,90 %
- **Soporte**: N1/N2/N3 incluido para el ámbito base (infraestructura y operadores estándar).
- **Compromiso de Tiempo de Recuperación (CTR)**: según el contrato marco de Cloud Temple.
- **Mantenimiento (MCO)**: parcheo regular de Talos / Kubernetes / operadores estándar por MSP, sin interrupción del servicio (rolling upgrade).

Los tiempos de respuesta y recuperación dependen de la gravedad del incidente, de acuerdo con la matriz de soporte (P1 a P4).

## Política de Versiones y Ciclo de Vida

- **Kubernetes soportado:** N-2 (3 versiones mayores por año, aproximadamente cada 4 meses). Cada versión está soportada oficialmente durante 12 meses, lo que garantiza una ventana de soporte de Cloud Temple de ~16 meses máximo por versión.
- **Talos OS:** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene aproximadamente 12 meses (incluyendo parches de seguridad).
  - Ritmo de actualización recomendado: 3 veces al año, en coherencia con las actualizaciones de Kubernetes.
  - Los parches críticos (CVE, kernel) se aplican mediante rolling upgrade, sin interrupción del servicio.
- **Operadores estándar:** actualizados en los 90 días siguientes a la versión estable.
- **Actualizaciones:**
  - **Mayores** (Kubernetes N+1, Talos X+1): planificadas 3 veces/año, como rolling updates.
  - **Menores**: aplicadas automáticamente en un plazo de 30 a 60 días.
- **Deprecación:** versión N-3 → fin del soporte en los 90 días posteriores a la publicación de N.

## Nodos de Kubernetes

### Producción (multi-zonal)

<img src={archi_overview} />

Para un despliegue "de producción" (multi-zonal), se utilizan las siguientes máquinas:

| **AZ**  | **Máquina**   | **vCores** | **RAM** | **Almacenamiento Local**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 GB | OS: 64 GB  |
| AZ05  | Control Plane 1   | 8  | 12 GB | OS: 64 GB  |
| AZ06  | Control Plane 2   | 8  | 12 GB | OS: 64 GB  |
| AZ07  | Control Plane 3   | 8  | 12 GB | OS: 64 GB  |
| AZ05  | Storage Node 1    | 12 | 24 GB | OS: 64 GB + Ceph mínimo 500 GB (*) |
| AZ06  | Storage Node 2    | 12 | 24 GB | OS: 64 GB + Ceph mínimo 500 GB (*)|
| AZ07  | Storage Node 3    | 12 | 24 GB | OS: 64 GB + Ceph mínimo 500 GB (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ06  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ07  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB |

(*): Cada nodo de almacenamiento se entrega con un mínimo de 500 GB de espacio en disco, para un almacenamiento útil distribuido Ceph de 500 GB (los datos se replican en cada AZ, por lo tanto x3). El espacio libre disponible para el cliente es de aproximadamente 350 GB. Este tamaño inicial puede aumentarse en el momento de la construcción, o más adelante, según las necesidades. Se aplican cuotas en Ceph, con una distribución Block/File.

(**): El tamaño y el número de Worker Nodes puede adaptarse según la necesidad de capacidad de cómputo del cliente. El número mínimo de Worker Nodes es de 3 (1 por AZ), y recomendamos aumentar su número en grupos de 3 para mantener una distribución multi-zonal coherente. El tamaño del Worker Node puede adaptarse, con un mínimo de 12 cores y 24 GB de RAM; el límite superior por Worker Node está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 cores/1536 GB de RAM con blades Performance 3). La cantidad de Worker Nodes está limitada a 100. La CNCF recomienda tener Worker Nodes de tamaño idéntico. El límite de pods por Worker Node es de 110.

### Dev/Test

<img src={archi_overview_1az} />

Para una versión "dev/test", se despliegan las siguientes máquinas:

| **AZ**  | **Máquina**   | **vCores** | **RAM** | **Almacenamiento Local**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 GB | OS: 30 GB  |
| AZ0n  | Control Plane    | 8  | 12 GB | OS: 64 GB  |
| AZ0n  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB + Ceph mínimo 300 GB (*) |
| AZ0n  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB + Ceph mínimo 300 GB (*) |
| AZ0n  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB + Ceph mínimo 300 GB (*) |

(*): Se utilizan 3 Worker Nodes como Storage Nodes y se entregan con un mínimo de 300 GB de espacio en disco, para un almacenamiento útil distribuido de 300 GB (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 GB. Este tamaño inicial puede aumentarse en el momento de la construcción, o más adelante, según las necesidades.

(**): El tamaño y el número de Worker Nodes puede adaptarse según la necesidad de capacidad de cómputo del cliente. El número mínimo de Worker Nodes es de 3 (debido a la replicación del almacenamiento). El tamaño del Worker Node puede adaptarse, con un mínimo de 12 cores y 24 GB de RAM; el límite superior por Worker Node está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 cores/1536 GB de RAM con blades Performance 3). La cantidad de Worker Nodes está limitada a 250. La CNCF recomienda tener Worker Nodes de tamaño idéntico. El límite de pods por Worker Node es de 110.

## RACI

### Arquitectura e Infraestructura

| **Actividad**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definir la arquitectura global del servicio Kubernetes                        | C          | RA                     |
| Dimensionar el servicio Kubernetes (número de nodos, recursos)                | C          | RA                     |
| Instalar el servicio Kubernetes con una configuración predeterminada           | I          | RA                     |
| Configurar el servicio Kubernetes                                              | C          | RA                     |
| Configurar la red básica del servicio Kubernetes                               | I          | RA                     |
| Desplegar la configuración inicial de identidades y accesos                    | C          | RA                     |
| Definir la estrategia de escalado y alta disponibilidad                        | C          | RA                     |

### Gestión de Proyectos y Aplicaciones de Negocio

| **Actividad**                                          | **Cliente** | **Cloud Temple** |
|---|---|---|
| Crear y gestionar proyectos de Kubernetes              | RA         | I*                     |
| Desplegar y gestionar aplicaciones en Kubernetes       | RA         | I*                     |
| Configurar los pipelines CI/CD                         | RA         | I*                     |
| Gestionar las imágenes de contenedores y los registries | RA        | I*                     |

*puede cambiar a "C" según el contrato de servicios gestionados

### Supervisión y Rendimiento

| **Actividad**                                            | **Cliente** | **Cloud Temple** |
|---|---|---|
| Supervisar el rendimiento del servicio Kubernetes        | I          | RA*                    |
| Supervisar el rendimiento de las aplicaciones            | RA         |                        |
| Gestionar las alertas relacionadas con el servicio Kubernetes | I     | RA*                    |
| Gestionar las alertas relacionadas con las aplicaciones   | RA        |                        |

(*): *Solo Clúster de Producción. En Dev/Test el cliente es completamente autónomo y responsable.*

### Mantenimiento y Actualizaciones de Infraestructura

| **Actividad**                                             | **Cliente** | **Cloud Temple** |
|---|---|---|
| Actualizar el servicio Kubernetes/OS                      | C          | RA                     |
| Aplicar parches de seguridad a Kubernetes                 | C          | RA                     |
| Actualizar las aplicaciones desplegadas (operadores*)     | C          | RA                     |

*Paquete de operadores incluido en Managed Kube - ver capítulos: Paquetes Helm Gestionados

### Seguridad

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Gestionar la seguridad del servicio Kubernetes                             | RA         | RA*                    |
| Configurar y gestionar las políticas de seguridad de los pods              | RA         | I                      |
| Gestionar los certificados SSL/TLS para el servicio Kubernetes             | C          | RA*                    |
| Gestionar los certificados SSL/TLS para las aplicaciones                   | RA         | I                      |
| Implementar y gestionar el control de acceso basado en roles básico (RBAC) | C          | R*                     |
| Implementar y gestionar el control de acceso basado en roles del cliente (RBAC) | RA    | I                      |

(*): *Solo Clúster de Producción. En Dev/Test el cliente es completamente autónomo y responsable.*

### Copia de Seguridad y Recuperación ante Desastres

| **Actividad**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definir la estrategia de copia de seguridad para el servicio Kubernetes       | I         | RA                    |
| Implementar y gestionar las copias de seguridad del servicio Kubernetes       | I         | RA                    |
| Definir la estrategia de copia de seguridad para las aplicaciones             | RA*         | I*                   |
| Implementar y gestionar las copias de seguridad de las aplicaciones           | RA*         | I*                   |
| Probar los procedimientos de recuperación ante desastres para el servicio Kubernetes | CI  | RA                   |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones | RA*       | CI*                   |

*puede cambiar a "CI | RA" según el contrato de servicios gestionados

### Soporte y Resolución de Problemas

| **Actividad**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Proporcionar soporte de nivel 1 para la infraestructura    | I          | RA                     |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura | I         | RA                     |
| Resolver problemas relacionados con el servicio Kubernetes  | C         | RA                     |
| Resolver problemas relacionados con las aplicaciones        | RA        | I                      |

### Gestión de Capacidad y Evolución

*Solo Clúster de Producción. En Dev/Test el cliente es completamente autónomo y responsable.*

| **Actividad**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Supervisar el uso de recursos de Kubernetes                | C         | RA                     |
| Planificar la evolución de la capacidad del servicio       | RA         | C                      |
| Implementar los cambios de capacidad                       | I          | RA                     |
| Gestionar la evolución de las aplicaciones y sus recursos  | RA         | I                      |

### Documentación y Conformidad

| **Actividad**                                                  | **Cliente** | **Cloud Temple** |
|---|---|---|
| Mantener la documentación del servicio Kubernetes              | I          | RA                     |
| Mantener la documentación de las aplicaciones                  | RA         | I                      |
| Garantizar la conformidad del servicio Kubernetes              | I          | RA                     |
| Garantizar la conformidad de las aplicaciones                  | RA         | I                      |
| Realizar auditorías del servicio Kubernetes                    | I          | RA                     |
| Realizar auditorías de las aplicaciones                        | RA         | I                      |

### Gestión de Operadores/CRDs de Kubernetes (incluido en la oferta)

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Puesta a disposición del catálogo de Operadores predeterminado             | CI         | RA                     |
| Actualización de Operadores                                                | CI         | RA                     |
| Supervisión del estado de los Operadores                                   | CI         | RA                     |
| Resolución de problemas relacionados con los Operadores                    | CI         | RA                     |
| Gestión de permisos de los Operadores                                      | CI         | RA                     |
| Gestión de recursos de los Operadores (añadir/eliminar)                    | CI         | RA                     |
| Copia de seguridad de los datos de los recursos de los Operadores          | CI         | RA                     |
| Supervisión de los recursos de los Operadores                              | CI         | RA                     |
| Restauración de los datos de los recursos de los Operadores                | CI         | RA                     |
| Auditoría de seguridad de los Operadores                                   | CI         | RA                     |
| Soporte de los Operadores                                                  | CI         | RA                     |
| Gestión de licencias de los operadores                                     | CI         | RA                     |
| Gestión de planes de soporte específicos para los operadores               | CI         | RA                     |

*Paquete de operadores incluido en Managed Kube - ver capítulos: Paquetes Helm Gestionados

### Gestión de Aplicaciones/Operadores/CRDs de Kubernetes del Cliente

*Solo Clúster de Producción. En Dev/Test el cliente es completamente autónomo y responsable.*

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Despliegue de CRDs                                                         | I*         | RA*                    |
| Actualización de Operadores                                                | RA         | I                     |
| Supervisión del estado de los Operadores                                   | RA         | I                     |
| Resolución de problemas relacionados con los Operadores                    | RA         | I                     |
| Gestión de permisos de los Operadores                                      | RA         | I                     |
| Gestión de recursos de los Operadores (añadir/eliminar)                    | RA         | I                     |
| Copia de seguridad de los datos de los recursos de los Operadores          | RA         | I                     |
| Supervisión de los recursos de los Operadores                              | RA         | I                     |
| Restauración de los datos de los recursos de los Operadores                | RA         | I                     |
| Auditoría de seguridad de los Operadores                                   | RA         | I                     |
| Soporte de los Operadores                                                  | RA         | I                     |
| Gestión de licencias de los operadores                                     | RA         | I                     |
| Gestión de planes de soporte específicos para los operadores               | RA         | I                     |

Algunos servicios de operadores pueden ser asumidos según el contrato de servicios gestionados.

*puede cambiar a "A | RC" según el contrato de servicios gestionados

### Asistencia Aplicativa

| **Actividad**                                | **Cliente** | **Cloud Temple** |
|---|---|---|
| Asistencia aplicativa (servicio externo)     | RA         | I                      |

El soporte aplicativo puede proporcionarse a través de un servicio adicional.

### RACI (resumen)

- Cloud Temple: responsable (RA) de la base Kubernetes, seguridad del clúster, copia de seguridad de infraestructura, supervisión, CRD.
- Cliente: responsable (RA) de los proyectos aplicativos, operadores de negocio, pipelines CI/CD, copias de seguridad de aplicaciones.
- Zona "gris": adaptaciones y extensiones (IAM, operadores específicos, endurecimiento de conformidad/seguridad del clúster) - facturadas en modalidad de proyecto.
