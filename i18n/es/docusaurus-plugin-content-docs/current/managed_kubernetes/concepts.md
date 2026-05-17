---
title: Conceptos
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Nuestras ofertas Managed Kubernetes

Cloud Temple propone dos ofertas distintas para satisfacer sus necesidades en materia de orquestación de contenedores:

- **Managed Core Kubernetes** : Un producto minimalista que le proporciona una base Kubernetes robusta y segura, basada en componentes open-source de última generación. Es ideal para equipos expertos que desean construir su propia plataforma a medida.
- **Managed Kubernetes** : Una solución completa y lista para usar que incluye una pila completa de herramientas para la red, la seguridad, el almacenamiento, el despliegue continuo, la observabilidad, las copias de seguridad y la gestión de costos.

### Tabla comparativa de ofertas

| Componente | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **SO** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **Observabilidad CNI** | ❌ | Hubble |
| **Balanceador de carga** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Almacenamiento** | Rook-Ceph | Rook-Ceph |
| **Despliegue Continuo (GitOps)** | ❌ | ArgoCD |
| **Observabilidad** | ❌ | Prometheus, Grafana, Loki |
| **Copia de seguridad y migración** | ❌ | Veeam Kasten |
| **Gestión de costos (FinOps)** | ❌ | OpenCost |
| **Gobernanza y seguridad**| ❌ | Kyverno, Capsule |
| **Registro de contenedores**| ❌ | Harbor |
| **Gestión de certificados**| ❌ | Cert-Manager |
| **Autenticación SSO**| ❌ | Integración OIDC |

## Presentación del producto Managed Kubernetes (completa)

La oferta **Managed Kubernetes** (también conocida como "Kub Managado", o "KM") es una solución de contenedorización de Kubernetes gestionada por Cloud-Temple, desplegada en forma de Máquinas Virtuales que funcionan sobre las infraestructuras IaaS Cloud-Temple OpenIaaS.

**Managed Kubernetes** se basa en Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicado a Kubernetes que es ligero y seguro. Es inmutable, sin ningún shell ni acceso ssh, y se configura únicamente de manera declarativa a través de la API gRPC.

La instalación estandarizada incluye un conjunto de componentes, en su mayoría OpenSource y validados por el CNCF:

- **CNI Cilium**, con interfaz de observabilidad (**Hubble**): Cilium es una solución de red para contenedores Kubernetes (*Container Network Interface*). Gestiona la seguridad, el balanceo de carga, el service mesh, la observabilidad, el cifrado, etc. Es un componente de red fundamental que se encuentra en la mayoría de las variantes de Kubernetes (OpenShift, AKS, GKE, EKS,...). Hemos incluido la interfaz gráfica **Hubble** para la visualización de los flujos de Cilium.

    <img src={cillium} />

- **MetalLB** y **nginx**: Para la exposición de aplicaciones Web, se incluyen de base 3 *ingress-class* **nginx**:
  - *nginx-external-secured*: exposición en una IP pública, filtrada en el firewall para permitir únicamente IPs conocidas (utilizado para las interfaces gráficas de los diferentes productos y la API de Kubernetes)
  - *nginx-external*: exposición en una segunda IP pública no filtrada (o filtrado específico por cliente)
  - *nginx-internal*: exposición en una IP interna únicamente

    Para los servicios "no web", un balanceador de carga **MetalLB** permite exponer servicios internamente o en IPs públicas (lo que permite desplegar otros ingress, como por ejemplo un WAF)

- **Almacenamiento distribuido Rook-Ceph**: para el almacenamiento de volúmenes persistentes (PV), se integra en la plataforma un almacenamiento distribuido **Ceph** OpenSource. Permite utilizar las *storage-classes* *ceph-block*, *ceph-bucket* y *ceph-filesystem*. Se utiliza un almacenamiento con **7500 IOPS**, lo que permite un alto rendimiento. En los despliegues de producción (en 3 AZ), los nodos de almacenamiento son dedicados (1 nodo por AZ); en los despliegues fuera de producción (1 AZ), el almacenamiento se comparte con los workers nodes.

- **Cert-Manager**: el gestor de certificados OpenSource **Cert-Manager** está integrado nativamente en la plataforma.

- **ArgoCD** está a su disposición para sus despliegues automatizados a través de una cadena de **CI/CD**.

- Stack **Prometheus** (Prometheus, Grafana, Loki): los clusters de Kubernetes gestionados se entregan de serie con una stack OpenSource completa **Prometheus** para la observabilidad, que incluye:
  - **Prometheus**
  - **Grafana**, con numerosos dashboards
  - **Loki**: los registros de la plataforma se exportan al almacenamiento S3 Cloud-Temple (y se integran en Grafana).

    <img src={grafana} />

- **Harbor** es un **Container registry** que le permite almacenar las imágenes de sus contenedores o sus charts helm directamente en el cluster. Realiza **escaneos de vulnerabilidad** en sus imágenes y puede firmarlas digitalmente. **Harbor** también permite sincronizaciones con otros registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) es una herramienta de gestión de costes (FinOps) para Kubernetes. Le permite seguir de cerca el consumo de recursos de Kubernetes y realizar una subfacturación por proyecto/namespace.

- Estrategias de seguridad avanzadas con **Kyverno** y **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) es un controlador de admisión para Kubernetes que permite aplicar políticas. Es una herramienta esencial para la gobernanza y la seguridad en Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) es una herramienta de gestión de permisos que facilita la administración de derechos en Kubernetes. Introduce el concepto de *tenant* que permite centralizar y delegar permisos en varios namespaces. Mediante **Capsule**, los usuarios de la plataforma Kubernetes gestionada disponen, por tanto, de derechos restringidos únicamente a sus propios namespaces.

- **Veeam Kasten** (también conocido como 'k10') es una solución para la **copia de seguridad** de los workloads de Kubernetes.

    Permite realizar una copia de seguridad de un despliegue completo: manifiestos, volúmenes, etc., hacia el almacenamiento de objetos S3 Cloud-Temple. **Kasten** utiliza **Kanister** para permitir copias de seguridad de aplicaciones coherentes, por ejemplo, para bases de datos ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** es una herramienta cross-platform que puede funcionar con otros clusters de Kubernetes (OpenShift, Hyperscaler,...). Por lo tanto, puede utilizarse para escenarios de reversibilidad o migración (K10 gestiona las adaptaciones necesarias mediante *transformaciones*, por ejemplo, un cambio de ingress-class), así como para "refresh" (ejemplo: restauración planificada de un entorno de producción en preproducción).

- **Autenticación SSO** con un Identity Provider Externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA & Información de soporte

- **Disponibilidad garantizada (producción 3 AZ)** : 99.90 %
- **Soporte** : N1/N2/N3 incluidos para el perímetro base (infraestructura y operadores estándar).
- **Compromiso de tiempo de recuperación (ETR)** : según contrato marco Cloud Temple.
- **Mantenimiento (MCO)** : parcheo regular de Talos / Kubernetes / operadores estándar por parte del MSP, sin interrupción del servicio (actualización progresiva).

Los plazos de respuesta y recuperación dependen de la severidad del incidente, conforme a la matriz de soporte (P1 a P4).

## Política de versiones y ciclo de vida

- **Kubernetes soportado :** N-2 (3 versiones principales al año, aproximadamente cada 4 meses). Cada versión se soporta oficialmente durante 12 meses, lo que garantiza una ventana de soporte de Cloud Temple de ~16 meses como máximo por versión.
- **Talos OS :** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene aproximadamente 12 meses (incluidos parches de seguridad).
  - Frecuencia de actualización recomendada : 3 veces al año, en coherencia con las actualizaciones de Kubernetes.
  - Los parches críticos (CVE, kernel) se aplican mediante rolling upgrade, sin interrupción del servicio.
- **Operadores estándar :** actualizados dentro de los 90 días siguientes a la versión estable.
- **Actualizaciones :**
  - **Principales** (Kubernetes N+1, Talos X+1) : planificadas 3 veces al año, en rolling update.
  - **Secundarias :** aplicadas automáticamente en un plazo de 30 a 60 días.
- **Deprecación :** versión N-3 → fin del soporte en un plazo de 90 días después del lanzamiento de N.

## Nodos Kubernetes

### Producción (multi-zonal)

<img src={archi_overview} />

Para un despliegue "de producción" (multi-zonal), se utilizan las siguientes máquinas:

| **AZ**  | **Máquina**   | **vCores** | **RAM** | **Almacenamiento local**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 Go | OS: 64 Go  |
| AZ05  | Control Plane 1   | 8  | 12 Go | OS: 64 Go  |
| AZ06  | Control Plane 2   | 8  | 12 Go | OS: 64 Go  |
| AZ07  | Control Plane 3   | 8  | 12 Go | OS: 64 Go  |
| AZ05  | Storage Node 1    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go mínimo (*) |
| AZ06  | Storage Node 2    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go mínimo (*)|
| AZ07  | Storage Node 3    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go mínimo (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 Go | OS: 64 Go |
| AZ06  | Worker Node 2 (**)   | 12 | 24 Go | OS: 64 Go |
| AZ07  | Worker Node 3 (**)   | 12 | 24 Go | OS: 64 Go |

(*) : Cada nodo de almacenamiento se entrega con un mínimo de 500 Go de espacio en disco, para un almacenamiento útil Ceph distribuido de 500 Go (les données sont répliquées sur chaque AZ, donc x3). El espacio libre disponible para el cliente es de aproximadamente 350 Go. Este tamaño inicial puede aumentarse en el momento de la construcción, o más tarde, según las necesidades. Se aplican cuotas en Ceph, con una distribución Block/File.

(**) : El tamaño y la cantidad de Worker Nodes pueden adaptarse según la necesidad de capacidad de cómputo del cliente. La cantidad mínima de Worker nodes es de 3 (1 par AZ), y recomendamos aumentar su cantidad en lotes de 3 para mantener una distribución multi-zona coherente. El tamaño de los Worker Node puede adaptarse, con un mínimo de 12 cores y 24 Go de RAM ; el límite superior por Worker node está fijado por el tamaño de los hipervisores utilizados (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). La cantidad de Worker Nodes está limitada a 100. El CNCF recomienda tener worker nodes de tamaño idéntico. El límite de la cantidad de pods por Worker Node es de 110.

### Dev/Test

<img src={archi_overview_1az} />

Para una versión "dev/test", se despliegan las siguientes máquinas:

| **AZ**  | **Máquina**   | **vCores** | **RAM** | **Almacenamiento local**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 Go | OS: 30 Go  |
| AZ0n  | Plano de control    | 8  | 12 Go | OS: 64 Go  |
| AZ0n  | Nodo de trabajo 1 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go mínimo (*) |
| AZ0n  | Nodo de trabajo 2 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go mínimo (*) |
| AZ0n  | Nodo de trabajo 3 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go mínimo (*) |

(*) : 3 nodos de trabajo se utilizan como nodos de almacenamiento y se entregan con un mínimo de 300 Go de espacio en disco, para un almacenamiento útil distribuido de 300 Go (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 Go. Este tamaño inicial puede aumentarse en el momento de la construcción o más tarde, según las necesidades.

(**) : El tamaño y la cantidad de nodos de trabajo pueden adaptarse según la necesidad de capacidad de cómputo del cliente. El número mínimo de nodos de trabajo es de 3 (debido a la replicación del almacenamiento). El tamaño de los nodos de trabajo puede adaptarse, con un mínimo de 12 núcleos y 24 Go de RAM; el límite superior por nodo de trabajo está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 núcleos/1536 Go de RAM con láminas Performance 3). La cantidad de nodos de trabajo está limitada a 250. El CNCF recomienda tener nodos de trabajo de tamaño idéntico. El límite del número de pods por nodo de trabajo es de 110.

## RACI

### Arquitectura e Infraestructura

| **Actividad**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definir la arquitectura global del servicio Kubernetes                         | C          | RA                     |
| Dimensionar el servicio Kubernetes (número de nodos, recursos)            | C          | RA                     |
| Instalar el servicio Kubernetes con una configuración predeterminada            | I          | RA                     |
| Configuración del servicio Kubernetes                                          | C          | RA                     |
| Configurar la red base del servicio Kubernetes                           | I          | RA                     |
| Implementación de la configuración inicial de identidades y accesos          | C          | RA                     |
| Definir la estrategia de escalado y alta disponibilidad           | C          | RA                     |

### Gestión de proyectos y aplicaciones empresariales

| **Actividad**                                          | **Cliente** | **Cloud Temple** |
|---|---|---|
| Crear y gestionar los proyectos de Kubernetes          | RA         | I*                     |
| Desplegar y gestionar las aplicaciones en Kubernetes   | RA         | I*                     |
| Configurar los pipelines CI/CD                         | RA         | I*                     |
| Gestionar las imágenes de contenedores y los registros | RA         | I*                     |

*puede pasar a "C" según el contrato de gestión y operación

### Monitoreo y rendimiento

| **Actividad**                                            | **Cliente** | **Cloud Temple** |
|---|---|---|
| Supervisar el rendimiento del servicio de Kubernetes         | I          | RA*                    |
| Supervisar el rendimiento de las aplicaciones              | RA         |                        |
| Gestionar las alertas relacionadas con el servicio de Kubernetes           | I          | RA*                    |
| Gestionar las alertas relacionadas con las aplicaciones                | RA         |                        |

(*) : *Solo en clúster de producción. En Dev/Test, el cliente tiene plena autonomía y responsabilidad.*

### Mantenimiento y actualizaciones de infraestructuras

| **Actividad**                                             | **Cliente** | **Cloud Temple** |
|---|---|---|
| Actualizar el servicio de Kubernetes/SO                   | C          | RA                     |
| Aplicar parches de seguridad a Kubernetes        | C          | RA                     |
| Actualizar las aplicaciones desplegadas (operadores*)   | C          | RA                     |

*Paquete de operador incluido en Managed Kube - ver capítulos: Paquetes Helm gestionados

### Seguridad

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Gestionar la seguridad del servicio de Kubernetes                                   | RA         | RA*                    |
| Configurar y gestionar las políticas de seguridad de pods                   | RA         | I                      |
| Gestionar los certificados SSL/TLS para el servicio de Kubernetes                  | C          | RA*                    |
| Gestionar los certificados SSL/TLS para las aplicaciones                       | RA         | I                      |
| Implementar y gestionar el control de acceso basado en roles por defecto (RBAC)| C          | R*                     |
| Implementar y gestionar el control de acceso basado en roles del cliente (RBAC) | RA         | I                      |

(*) : *Solo en clúster de producción. En Dev/Test, el cliente tiene plena autonomía y responsabilidad.*

### Copia de seguridad y recuperación ante desastres

| **Actividad**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definir la estrategia de copia de seguridad para el servicio de Kubernetes                | I         | RA                    |
| Implementar y gestionar las copias de seguridad del servicio de Kubernetes              | I         | RA                    |
| Definir la estrategia de copia de seguridad para las aplicaciones                     | RA*         | I*                   |
| Implementar y gestionar las copias de seguridad de las aplicaciones                   | RA*         | I*                   |
| Probar los procedimientos de recuperación ante desastres para el servicio de Kubernetes   | CI         | RA                   |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones      | RA*         | CI*                   |

*puede pasar a "CI | RA" en función del contrato de gestión externalizada

### Soporte y resolución de problemas

| **Actividad**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Proporcionar soporte de nivel 1 para la infraestructura      | I          | RA                     |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura | I          | RA                     |
| Resolver problemas relacionados con el servicio de Kubernetes         | C          | RA                     |
| Resolver problemas relacionados con las aplicaciones              | RA         | I                      |

### Gestión de capacidades y evolución

*Solo para clúster de producción. En Dev/Test, el cliente es totalmente autónomo y responsable.*

| **Actividad**                                               | **Cliente** | **Cloud Temple** |
|---|---|---|
| Supervisar el uso de los recursos de Kubernetes              | C         | RA                     |
| Planificar la evolución de las capacidades del servicio      | RA         | C                      |
| Implementar los cambios de capacidad                         | I          | RA                     |
| Gestionar la evolución de las aplicaciones y sus recursos    | RA         | I                      |

### Documentación y cumplimiento

| **Actividad**                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Mantener la documentación del producto Kubernetes             | I          | RA                     |
| Mantener la documentación de las aplicaciones                 | RA         | I                      |
| Asegurar el cumplimiento del servicio Kubernetes              | I          | RA                     |
| Asegurar el cumplimiento de las aplicaciones                  | RA         | I                      |
| Realizar auditorías del servicio Kubernetes                   | I          | RA                     |
| Realizar auditorías de las aplicaciones                       | RA         | I                      |

### Gestión de operadores/CRD de Kubernetes (incluido en el producto)

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Puesta a disposición del catálogo de Operadores predeterminado                   | CI         | RA                     |
| Actualización de los Operadores                                                | CI         | RA                     |
| Monitoreo del estado de los Operadores                                     | CI         | RA                     |
| Resolución de problemas relacionados con los Operadores                              | CI         | RA                     |
| Gestión de permisos de los Operadores                                  | CI         | RA                     |
| Gestión de recursos de los Operadores (adición/eliminación)                 | CI         | RA                     |
| Copia de seguridad de los datos de los recursos de los Operadores                      | CI         | RA                     |
| Supervisión de los recursos de los Operadores                                     | CI         | RA                     |
| Restauración de los datos de los recursos de los Operadores                    | CI         | RA                     |
| Auditoría de seguridad de los Operadores                                          | CI         | RA                     |
| Soporte de los Operadores                                                    | CI         | RA                     |
| Gestión de licencias de los operadores                                   | CI         | RA                     |
| Gestión de planes de soporte específicos para los operadores               | CI         | RA                     |

*Paquete de operador incluido en Managed Kube - ver capítulos: Paquetes Helm gestionados

### Gestión de aplicaciones/operadores/CRD de Kubernetes (del cliente)

*Solo en clúster de producción. En Dev/Test, el cliente es completamente autónomo y responsable.*

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Despliegue de CRDs                                                      | I*         | RA*                    |
| Actualización de operadores                                                | RA         | I                     |
| Supervisión del estado de los operadores                                     | RA         | I                     |
| Resolución de problemas relacionados con los operadores                              | RA         | I                     |
| Gestión de permisos de los operadores                                  | RA         | I                     |
| Gestión de recursos de los operadores (añadir/eliminar)                 | RA         | I                     |
| Copia de seguridad de los datos de los recursos de los operadores                      | RA         | I                     |
| Supervisión de los recursos de los operadores                                     | RA         | I                     |
| Restauración de los datos de los recursos de los operadores                    | RA         | I                     |
| Auditoría de seguridad de los operadores                                          | RA         | I                     |
| Soporte de los operadores                                                    | RA         | I                     |
| Gestión de licencias de los operadores                                   | RA         | I                     |
| Gestión de planes de soporte específicos para los operadores               | RA         | I                     |

Algunos servicios de operadores pueden ser gestionados según el contrato de externalización.

*puede cambiar a "A | RC" según el contrato de externalización

### Soporte de aplicaciones

| **Actividad**                                | **Cliente** | **Cloud Temple** |
|---|---|---|
| Soporte de aplicaciones (servicio externo) | RA         | I                      |

El soporte de aplicaciones puede proporcionarse mediante un servicio complementario.

### RACI (sintético)

- Cloud Temple : responsable y actor (RA) de la plataforma Kubernetes, seguridad del clúster, copia de seguridad de la infraestructura, supervisión, CRD.
- Cliente : responsable y actor (RA) de los proyectos de aplicaciones, operadores de negocio, pipelines CI/CD, copias de seguridad de aplicaciones.
- Zona "gris" : adaptaciones y extensiones (IAM, operadores específicos, endurecimiento de cumplimiento/seguridad del clúster) - facturadas en modo proyecto.