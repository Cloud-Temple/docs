---
title: Conceptos
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import arch_hld from '@site/docs/managed_kubernetes/images/archmk-prod.png'
import arch_lld from '@site/docs/managed_kubernetes/images/archmck-prod-LLD-FR.png'
import cni_vs_node from '@site/docs/managed_kubernetes/tutorials/images/cni-vs-node.png'

## Nuestras ofertas Managed Kubernetes

Cloud Temple ofrece dos ofertas distintas para satisfacer sus necesidades de orquestación de contenedores:

- **Managed Core Kubernetes** : Un producto minimalista que le proporciona una base Kubernetes robusta y segura, basada en componentes open-source de vanguardia. Es ideal para equipos expertos que desean construir su propia plataforma a medida.
- **Managed Kubernetes** : Una solución completa y lista para usar que incluye una pila completa de herramientas para la red, la seguridad, el almacenamiento, la implementación continua, la observabilidad, la copia de seguridad y la gestión de costos.

### Tabla comparativa de las ofertas

| Componente                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **SO**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Almacenamiento distribuido**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Almacenamiento local**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Observabilidad CNI**            | ❌                      | ✅Hubble                    |
| **Ingress**                       | ❌                      | ✅Ingress Nginx             |
| **Observabilidad**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Copia de seguridad y migración**       | ❌                      | ✅Veeam Kasten              |
| **Gobernanza y seguridad**     | ❌                      | ✅Kyverno, Capsule          |
| **Gestión de certificados**       | ❌                      | ✅Cert-Manager              |
| **Implementación continua (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**            | ❌                      | 🔵Harbor                    |
| **Autenticación SSO**          | ❌                      | 🔵Integración OIDC         |
| **Autoscaling de pods**           | ❌                      | 🔵Keda                      |
| **Gestión de costos (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Observabilidad (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : incluido
🔵 : opcional/desactivable
❌ : no incluido

## Presentación de los productos Managed (Core) Kubernetes

**Managed Core Kubernetes** se basa en Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicado a Kubernetes que es ligero y seguro. Es inmutable, sin ningún shell ni acceso ssh, y configurado únicamente de manera declarativa mediante API gRPC.

La instalación estandarizada incluye un conjunto de componentes, mayoritariamente OpenSource y validados por el CNCF:

- **CNI Cilium**, con interfaz de observabilidad (**Hubble**) : Cilium es una solución de red para contenedores Kubernetes (*Container Network Interface*). Gestiona la seguridad, el balanceo de carga, el service mesh, la observabilidad, el cifrado, etc... Es un componente de red fundamental que se encuentra en la mayoría de las variantes de Kubernetes (OpenShift, AKS, GKE, EKS,...). En **Managed Kubernetes**, hemos incluido la interfaz gráfica **Hubble** para la visualización de los flujos de Cilium.
  - **Gateway API** : los CRDs Gateway API (≥ v1.6.1) se instalan antes que Cilium y son requeridos por Cilium ≥ 1.20 para la API Gateway.

  <img src={cillium} />

  El siguiente esquema ilustra la distinción entre la red gestionada por el CNI (tráfico pod ↔ pod) y la red de los nodos, así como la manera en que Cilium encapsula el tráfico entre nodos:

  <img src={cni_vs_node} alt="Réseau CNI vs réseau des nœuds" />
- **MetalLB** y **nginx** : Para la exposición de aplicaciones Web, 3 *ingress-class* **nginx** están integradas de base:

  - *nginx-external-secured* : exposición en una IP pública, filtrada en el firewall para solo permitir IPs conocidas (utilizado para las interfaces gráficas de los diferentes productos, y la API Kubernetes)
  - *nginx-external* : exposición en una segunda IP pública no filtrada (o filtrado específico por cliente)
  - *nginx-internal* : exposición en una IP interna únicamente

    Para los servicios "no web", un load-balancer **metalLB** permite exponer servicios en interno o en IPs públicas. (lo que permite desplegar otras ingresses, como por ejemplo un WAF)

> Nota : utilizamos nginx en versión openSource *mantenida por F5 Networks*. (no la versión original, opensource, que está deprecated)

- **Almacenamiento distribuido Rook-Ceph** : para el almacenamiento de volúmenes persistentes (PV), un almacenamiento distribuido **Ceph** OpenSource está integrado en la plataforma. Permite utilizar las *storage-classes* *ceph-block* (Block, replicado multi-zonas), *ceph-block-norepl* (Block, no replicado), y *ceph-filesystem* (File, replicado multi-zonas). Se utiliza un almacenamiento a **7500 IOPS**, permitiendo un alto rendimiento. En los despliegues de producción (en 3 AZ), los nodos de almacenamiento son dedicados (1 nodo por AZ) ; en los despliegues no-productivos (1 AZ), el almacenamiento es compartido con los worker nodes.
- **Almacenamiento local TopoLVM** : para el almacenamiento de volúmenes persistentes (PV), un almacenamiento local **TopoLVM** OpenSource puede ser añadido (opcionalmente) a la plataforma. Permite utilizar la *storage-class* *topolvm-ssd* para almacenar localmente, *en los Worker nodes*, datos. Esta opción es útil para los despliegues que utilizan una replicación aplicativa integrada (Kafka, MongoDB, PostgreSQL, ...) y se benefician de un almacenamiento ultrarrápido, con una latencia reducida. Esta opción se utiliza generalmente para dedicar *Worker nodes* a una carga de trabajo específica.
- **Cert-Manager**: el gestor de certificados OpenSource **Cert-Manager** está integrado nativamente en la plataforma.
- **ArgoCD**  está a su disposición para sus despliegues automatizados mediante una cadena de **CI/CD**. (opcional)
- Stack **Prometheus** (Prometheus, Grafana, Loki): los clusters Managed Kubernetes se entregan de forma estándar con una stack OpenSource completa **Prometheus** para la observabilidad, incluyendo:

  - **Prometheus**, para la recopilación de métricas
  - **Grafana**, con numerosos dashboards
  - **Alloy** : agente de recopilación de logs y métricas (reemplaza a Promtail).
  - **Loki** : los registros de la plataforma se exportan al almacenamiento S3 Cloud-Temple (e integrados en Grafana).
  - **Pyroscope** : (opcional) plataforma de profiling continuo, consultable vía LLM.

    <img src={grafana} />
- **Harbor** es un **Container registry** que le permite almacenar las imágenes de sus contenedores o sus charts helm directamente en el cluster. Realiza **escaneos de vulnerabilidad** en sus imágenes. **Harbor** también permite sincronizaciones con otros registros. ([https://goharbor.io/](https://goharbor.io/)) (opcional)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) es una herramienta de gestión de costos (FinOps) para Kubernetes. Le permite seguir finamente el consumo de recursos de Kubernetes y realizar subfacturación por proyecto/namespace. (opcional)
- Estrategias de seguridad avanzada con **Kyverno** y **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) es un controlador de admisión para Kubernetes que permite aplicar políticas. Es una herramienta esencial para la gobernanza y la seguridad en Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) es una herramienta de gestión de permisos que facilita la gestión de derechos en Kubernetes. Introduce la noción de *tenant* que permite centralizar y delegar permisos sobre varios namespaces. Mediante **Capsule**, los usuarios de la plataforma Kubernetes Managé disponen de derechos restringidos a sus propios namespaces.
- **Veeam Kasten** (aka 'k10') es una solución para la **copia de seguridad** de las cargas de trabajo Kubernetes.

  Permite realizar una copia de seguridad completa de un despliegue : manifiestos, volúmenes, etc... hacia el almacenamiento objeto S3 Cloud-Temple. **Kasten** utiliza **Kanister** para permitir copias de seguridad aplicativas coherentes, por ejemplo para las bases de datos ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** es una herramienta cross-platform que puede funcionar con otros clusters Kubernetes (OpenShift, Hyperscaler,...). Por lo tanto, puede ser utilizada para escenarios de reversibilidad o de migración (K10 gestiona las adaptaciones eventuales mediante *transformations*, por ejemplo un cambio de ingress-class), pero también de "refresh" (ejemplo : restauración planificada de un entorno de producción en pre-producción).
- **Autenticación SSO** con un Identity Provider Externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...) (opcional)
- **Keda** permite el autoscaling de pods mediante métricas avanzadas, como por ejemplo un número de conexiones http. (opcional)

## Versiones de referencia (al 11/2026)

- **Kubernetes** : v1.36.6
- **Talos** : v1.13.12

Estas versiones son **una base**, la del socle de referencia a esta fecha : evolucionan con cada release del socle (correcciones de seguridad, actualizaciones de versión). Las versiones exactas desplegadas en un cluster dado figuran en el DAT de dicho cluster. La política de soporte de versiones se describe más abajo (« Política de versiones y ciclo de vida »).

## Paquetes Helm gestionados (al 11/2026)

El socle siguiente se despliega en todo cluster Managed Kubernetes. Las versiones son una base, la del template de referencia a esta fecha ; un cluster en servicio puede estar en una versión anterior entre dos ventanas de mantenimiento.

### Socle de la plataforma (siempre desplegado)

| **Componente** | **Versión** | **Depósito** | **Rol Principal** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | CNI avanzada, políticas de red y observabilidad (Hubble), API Gateway |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | CRDs Gateway API, instalados antes que Cilium (Cilium ≥ 1.20 exige ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | LoadBalancer BGP (BFD) exponiendo dos rangos, interno y externo, en TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Almacenamiento distribuido de alta disponibilidad (bloques RBD + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Almacenamiento LVM local al nodo para cargas de trabajo de baja latencia |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | API de métricas de recursos (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Aprobación automática de certificados kubelet |

### Servicios de la plataforma gestionada

| **Componente** | **Versión** | **Depósito** | **Rol Principal** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Gestión automatizada de certificados TLS (ZeroSSL integrado) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Controladores Ingress : interno, externo y externo-seguro (con filtrado IP) |
| **Kyverno** | 3.9.2 | https://kyverno.github.io/kyverno/ | Aplicación de políticas de seguridad |
| **Capsule** | 0.13.11 | https://projectcapsule.github.io/charts/ | Multi-tenancy y aislamiento de namespaces con políticas de seguridad |
| **ArgoCD** | 10.11.6 | https://argoproj.github.io/argo-helm | GitOps / implementación continua |
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Supervisión y alertas |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Agente de recopilación de logs/métricas (reemplaza a Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Centralización de logs (logs almacenados en S3 Cloud Temple) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Profiling continuo y análisis de rendimiento (flamegraphs en Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Registro de imágenes (imágenes almacenadas en S3 Cloud Temple) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Copia de seguridad y restauración (copias de seguridad exportadas en S3 Cloud Temple) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Observabilidad y seguimiento de costos |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Autoscaling por eventos (Beta) |

**Huella de la stack en el cluster Ceph : aproximadamente 180 Gi**, idéntica en producción y en pre-producción.

Se proporcionan tres `StorageClass` :

| StorageClass | Backend | Modo de acceso | Uso típico |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (bloques distribuidos) | ReadWriteOnce | Bases de datos, cargas mono-pod |
| `ceph-filesystem` | CephFS (sistema de archivos distribuido) | ReadWriteMany | Volúmenes compartidos entre pods |
| `topolvm-ssd` | TopoLVM (LVM local al nodo) | ReadWriteOnce | Almacenamiento local de baja latencia, no replicado, respaldado por Kasten **en modo blueprint** únicamente (ver Copia de seguridad) |

**Cuotas** — valores estándar de un cluster entregado, **ajustables por cluster** al momento del pedido y durante su ciclo de vida :

| Alcance | RBD (bloques) | CephFS |
| --- | --- | --- |
| Límite del pool, todos los tenants incluidos | 300 Gi | 125 Gi |
| Límite del tenant por defecto, aplicado por Capsule | 115 Gi | 100 Gi |

La capacidad de Ceph en sí misma depende del dimensionamiento elegido : con el gabarito por defecto (3 nodos Ceph a 500 Go), un cluster dispone de 1500 Go brutos, es decir 500 Go útiles tras la replicación ×3.

## SLA e información sobre el soporte

- **Disponibilidad garantizada (producción 3 AZ)** : 99.95 %
- **Soporte** : N1/N2/N3 incluido para el perímetro del socle (infraestructura y operadores estándar).
- **Grilla de soporte** : los plazos de toma en carga y de restablecimiento dependen de la severidad del incidente, conforme a la grilla P1 a P4 siguiente.
- **Compromiso RPO / RTO** : en un cluster 3 AZ, RPO ≤ 24 h y RTO ≤ 4 h. En mono-AZ, las copias de seguridad existen pero no están cubiertas por un compromiso RTO.
- **Mantenimiento (MCO)** : parcheo regular Talos / Kubernetes / operadores estándar por MSP, sin interrupción de servicio (rolling upgrade).

| Nivel | Definición | Toma en carga | Restablecimiento objetivo |
| --- | --- | --- | --- |
| **P1** | Producción no disponible | Inmediata (7/24) | ≤ 4 h |
| **P2** | Degradación mayor | ≤ 1 h (7/24) | ≤ 8 h |
| **P3** | Degradación menor | ≤ 4 h (horas laborables) | ≤ 2 d laborables |
| **P4** | Pregunta / mejora | ≤ 1 d laborable | A planificar |

## Política de versiones y ciclo de vida

- **Kubernetes soportado :** N-2 (3 releases mayores por año, aproximadamente cada 4 meses). Cada release es soportada oficialmente durante 12 meses, lo que garantiza una ventana de soporte Cloud Temple de ~16 meses máximo por versión.
- **Talos OS :** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene aproximadamente 12 meses (incluidos parches de seguridad).
  - Ritmo de actualización recomendado: 3 veces por año, en coherencia con las actualizaciones de Kubernetes.
  - Los parches críticos (CVE, kernel) se aplican mediante rolling upgrade, sin interrupción del servicio.
- **Actualizaciones :**
  - **Mayores** (Kubernetes N+1, Talos X+1) : planificadas 3 veces/año, mediante rolling update.
  - **Menores** : aplicadas automáticamente en un plazo de 30 a 60 días.
- **Depreciación :** versión N-3 → fin de soporte en un plazo de 90 días tras la salida de N.

## Nodos Kubernetes

### Producción (multi-zona)

<img src={archi_overview} />

#### Esquemas de arquitectura

- **Vista HLD (High Level Design)** :

<img src={arch_hld} alt="Esquema de arquitectura HLD" />

- **Vista LLD (Low Level Design)** :

<img src={arch_lld} alt="Esquema de arquitectura LLD" />

Para un despliegue "de producción" (multi-zona), se utilizan las siguientes máquinas:

| **AZ** | **Máquina**   | **vCores** | **RAM** | **Almacenamiento local**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 GB          | OS: 256 GB                            |
| AZ05         | Control Plane 1     | 8                | 12 GB         | OS: 128 GB                            |
| AZ06         | Control Plane 2     | 8                | 12 GB         | OS: 128 GB                            |
| AZ07         | Control Plane 3     | 8                | 12 GB         | OS: 128 GB                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB mínimo (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB mínimo (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB mínimo (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 GB         | OS: 128 GB                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 GB         | OS: 128 GB                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 GB         | OS: 128 GB                            |

(*) : El tamaño y el número de Worker Nodes puede ser adaptado en función de la necesidad de capacidad de cómputo del cliente. El número mínimo de Worker Nodes es de 3 (1 por AZ), y se recomienda aumentar su número por lotes de 3 para mantener una distribución multi-zona coherente. El tamaño de los Worker Nodes puede ser adaptado, con un mínimo de 12 cores y 24 GB de RAM ; el límite superior por Worker Node está fijado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 cores/1536 GB de RAM con láminas Performance 3). La cantidad de Worker Nodes está limitada a 100. El CNCF recomienda tener worker nodes de tamaño idéntico. El límite del número de pods por Worker Node es de 110.

(**) : el tamaño de los Storage Nodes puede ser revisado al alza en función del tamaño del almacenamiento Ceph asociado. (por ejemplo : 24c/128GB para 10 To de Ceph)

(***) : Cada nodo de almacenamiento se entrega con un mínimo de 500 GB de espacio en disco, para un almacenamiento útil Ceph distribuido de 500 GB (los datos se replican en cada AZ, por lo tanto x3). El espacio libre disponible para el cliente es de aproximadamente 350 GB. Este tamaño inicial puede ser aumentado en el momento de la construcción, o más tarde, en función de las necesidades. Se aplican cuotas en Ceph, con una distribución Block/File.

### Dev/test (una sola zona)

<img src={archi_overview_1az} />

Para una versión "dev/test", se despliegan las siguientes máquinas:

| **AZ** | **Máquina** | **vCores** | **RAM** | **Almacenamiento local**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 GB          | OS: 256 GB                           |
| AZ0n         | Control Plane     | 8                | 12 GB         | OS: 128 GB                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB mínimo (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB mínimo (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB mínimo (**) |

(*) : El tamaño y el número de Worker Nodes puede ser adaptado en función de la necesidad de capacidad de cómputo del cliente. El número mínimo de Worker Nodes es de 3 (debido a la replicación del almacenamiento). El tamaño de los Worker Nodes puede ser adaptado, con un mínimo de 12 cores y 24 GB de RAM ; el límite superior por Worker Node está fijado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 cores/1536 GB de RAM con láminas Performance 3). La cantidad de Worker Nodes está limitada a 100. El CNCF recomienda tener worker nodes de tamaño idéntico. El límite del número de pods por Worker Node es de 110.

(**) : 3 Worker Nodes se utilizan como Storage Nodes y se entregan con un mínimo de 300 GB de espacio en disco, para un almacenamiento útil distribuido de 300 GB (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 GB. Este tamaño inicial puede ser aumentado en el momento de la construcción, o más tarde, en función de las necesidades.

## RACI

### Arquitectura e Infraestructura

| **Actividad**                                                      | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Definir la arquitectura global del servicio Kubernetes                    | C                | RA                     |
| Dimensionar el servicio Kubernetes (número de nodos, recursos)        | C                | RA                     |
| Instalar el servicio Kubernetes con una configuración por defecto       | I                | RA                     |
| Configuración del servicio Kubernetes                                      | C                | RA                     |
| Configurar la red base del servicio Kubernetes                      | I                | RA                     |
| Despliegue de la configuración inicial de identidades y accesos   | C                | RA                     |
| Definir la estrategia de escalado y de alta disponibilidad | C                | RA                     |

### Gestión de proyectos y aplicaciones de negocio

| **Actividad**                                  | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Crear y gestionar los proyectos Kubernetes              | RA               | I*                     |
| Desplegar y gestionar las aplicaciones en Kubernetes | RA               | I*                     |
| Configurar los pipelines CI/CD                       | RA               | I*                     |
| Gestionar las imágenes de contenedores y los registros     | RA               | I*                     |

*puede pasar a "C" en función del contrato de infogestión

### Monitoreo y rendimiento

| **Actividad**                             | **Cliente** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Monitorear el rendimiento del servicio Kubernetes | I                | RA*                    |
| Monitorear el rendimiento de las aplicaciones      | RA               |                        |
| Gestionar las alertas relacionadas con el servicio Kubernetes | I                | RA*                    |
| Gestionar las alertas relacionadas con las aplicaciones      | RA               |                        |

(*) : *Solo Cluster de Producción Managed Kubernetes. En Dev/Test y en versión Core el cliente está completamente en autonomía y en responsabilidad.*

### Mantenimiento y actualizaciones de infraestructuras

| **Actividad**                                        | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Actualizar el servicio Kubernetes/OS                    | C                | RA                     |
| Aplicar los parches de seguridad a Kubernetes       | C                | RA                     |
| Actualizar las aplicaciones desplegadas (operadores*) | C                | RA                     |

*Paquete de operador incluido en Managed Kube - ver capítulos : Paquetes Helm gestionados

### Seguridad

| **Actividad**                                                              | **Cliente** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Gestionar la seguridad del servicio Kubernetes                                       | RA               | RA*                    |
| Configurar y gestionar las políticas de seguridad de los pods                       | RA               | I                      |
| Gestionar los certificados SSL/TLS para el servicio Kubernetes                        | C                | RA*                    |
| Gestionar los certificados SSL/TLS para las aplicaciones                             | RA               | I                      |
| Implementar y gestionar el control de acceso basado en roles base (RBAC) | C                | R*                     |
| Implementar y gestionar el control de acceso basado en roles del cliente (RBAC)  | RA               | I                      |

(*) : *Solo Cluster de Producción Managed Kubernetes. En Dev/Test y en versión Core el cliente está completamente en autonomía y en responsabilidad.*

### Copia de seguridad y recuperación ante desastres

| **Actividad**                                                          | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Definir la estrategia de copia de seguridad para el servicio Kubernetes              | I                | RA                     |
| Implementar y gestionar las copias de seguridad del servicio Kubernetes             | I                | RA                     |
| Definir la estrategia de copia de seguridad para las aplicaciones                   | RA*              | I*                     |
| Implementar y gestionar las copias de seguridad de las aplicaciones                  | RA*              | I*                     |
| Probar los procedimientos de recuperación ante desastres para el servicio Kubernetes | CI               | RA                     |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones      | RA*              | CI*                    |

*puede pasar a "CI | RA" en función del contrato de infogestión

#### Copia de seguridad de la infraestructura (perímetro gestionado)

- **Copia de seguridad del clúster mediante Kasten K10** (parte Disaster Recovery e Infraestructura), con pruebas de recuperación ante desastres.
- **Perímetro base** : namespaces y PVC (Ceph RBD), objetos CRD críticos de infra, observabilidad, operadores estándar.
- **etcd (estado del clúster)** : snapshot diario tomado por Cloud Temple fuera de Kasten, con la configuración de los nodos Talos ; sirve para reconstruir el plano de control. Los snapshots se conservan 2 días en la VM de gestión, ella misma respaldada a nivel IaaS mediante una política diaria con 35 días de retención.
- **Frecuencia** : diaria (retención 7 d) y semanal (retención 4 sem).
- **Compromisos** : RPO ≤ 24 h, RTO ≤ 4 h (reconstrucción automatizada del clúster y restauración de los componentes mediante Kasten).
- **Destino** : S3 Cloud Temple (FR), cifrado en el servidor.

#### Copia de seguridad de las cargas de trabajo del cliente (basada en labels)

El servicio proporciona un mecanismo flexible para respaldar las cargas de trabajo del cliente utilizando labels.

- **Mecanismo** : inscribir recursos (namespaces, PVCs, etc.) en una política de copia de seguridad mediante labels específicos.
- **Políticas disponibles** : 24 políticas horarias, cubriendo cada hora del día (00 a 23 UTC).
- **Formato del label** : `kasten-dailyHH-r7d: "true"` (donde `HH` es la hora en formato 24 h, por ej. `00`, `14`, `23`).
- **Frecuencia** : diaria a la hora especificada (UTC). **Retención** : 7 días en S3.
- **Ejemplo** : para respaldar un namespace todos los días a las 14:00 UTC, añadir el label `kasten-daily14-r7d: "true"` al namespace.
- **Volúmenes TopoLVM** : `topolvm-ssd` no gestiona snapshots ; sin precaución, un namespace respaldado que contenga un volumen TopoLVM verá **toda** su copia de seguridad fallar, incluidos los volúmenes Ceph. Estos volúmenes se respaldan con Kasten **en modo blueprint** (Kanister) : Kasten ejecuta una copia de seguridad aplicativa (dump de base, exportación de los datos) enviada a S3, y la restauración reproduce la operación inversa. El blueprint es propio de cada aplicación y se establece **bajo estudio**, a solicitud del cliente.
- **Perímetro aplicativo** : RPO y RTO definidos por el cliente.

### Soporte y resolución de problemas

| **Actividad**                                       | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Proporcionar un soporte de nivel 1 para la infraestructura      | I                | RA                     |
| Proporcionar un soporte de nivel 2 y 3 para la infraestructura | I                | RA                     |
| Resolver los problemas relacionados con el servicio Kubernetes      | C                | RA                     |
| Resolver los problemas relacionados con las aplicaciones           | RA               | I                      |

### Gestión de capacidades y evolución

*Solo Cluster de Producción Managed Kubernetes. En Dev/Test y en versión Core el cliente está completamente en autonomía y en responsabilidad.*

| **Actividad**                                       | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Monitorear el uso de los recursos Kubernetes        | C                | RA                     |
| Planificar la evolución de las capacidades del servicio         | RA               | C                      |
| Implementar los cambios de capacidad                 | I                | RA                     |
| Gestionar la evolución de las aplicaciones y sus recursos | RA               | I                      |

### Documentación y cumplimiento

| **Actividad**                              | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ---------------- | ---------------------- |
| Mantener la documentación del producto Kubernetes | I                | RA                     |
| Mantener la documentación de las aplicaciones      | RA               | I                      |
| Garantizar el cumplimiento del servicio Kubernetes     | I                | RA                     |
| Garantizar el cumplimiento de las aplicaciones          | RA               | I                      |
| Realizar auditorías del servicio Kubernetes       | I                | RA                     |
| Realizar auditorías de las aplicaciones            | RA               | I                      |

### Gestión de operadores/CRD de Kubernetes (incluido en el producto)

| **Actividad**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Puesta a disposición del catálogo de Operadores por defecto    | CI               | RA                     |
| Actualización de los Operadores                                  | CI               | RA                     |
| Supervisión del estado de los Operadores                      | CI               | RA                     |
| Resolución de problemas relacionados con los Operadores              | CI               | RA                     |
| Gestión de las autorizaciones de los Operadores                     | CI               | RA                     |
| Gestión de los recursos de los Operadores (adición/eliminación)    | CI               | RA                     |
| Copia de seguridad de los datos de los recursos de los Operadores        | CI               | RA                     |
| Supervisión de los recursos de Operadores                        | CI               | RA                     |
| Restauración de los datos de los recursos de los Operadores      | CI               | RA                     |
| Auditoría de seguridad de los Operadores                           | CI               | RA                     |
| Soporte de los Operadores                                       | CI               | RA                     |
| Gestión de las licencias de los operadores                      | CI               | RA                     |
| Gestión de los planes de soporte específicos de los operadores | CI               | RA                     |

*Paquete de operador incluido en Managed Kube - ver capítulos: Paquetes Helm gestionados

### Gestión de aplicaciones/operadores/CRD de Kubernetes (del cliente)

*Solo clúster de Producción Managed Kubernetes. En Dev/Test y en la versión Core, el cliente es completamente autónomo y responsable.*

| **Actividad**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Despliegue de los CRDs                                         | I*               | RA*                    |
| Actualización de los Operadores                                  | RA               | I                      |
| Supervisión del estado de los Operadores                      | RA               | I                      |
| Resolución de problemas relacionados con los Operadores              | RA               | I                      |
| Gestión de las autorizaciones de los Operadores                     | RA               | I                      |
| Gestión de los recursos de los Operadores (adición/eliminación)    | RA               | I                      |
| Copia de seguridad de los datos de los recursos de los Operadores        | RA               | I                      |
| Supervisión de los recursos de Operadores                        | RA               | I                      |
| Restauración de los datos de los recursos de los Operadores      | RA               | I                      |
| Auditoría de seguridad de los Operadores                           | RA               | I                      |
| Soporte de los Operadores                                       | RA               | I                      |
| Gestión de las licencias de los operadores                      | RA               | I                      |
| Gestión de los planes de soporte específicos de los operadores | RA               | I                      |

Algunos servicios de operadores pueden ser soportados según el contrato de infogestión.

*puede pasar a "A | RC" según el contrato de infogestión

### Asistencia aplicativa

| **Actividad**                         | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Asistencia aplicativa (servicio externo) | RA               | I                      |

Un soporte aplicativo puede ser proporcionado mediante un servicio complementario.

### RACI (sintético)

- Cloud Temple: responsable y actor (RA) del núcleo *Core Kubernetes* y de los servicios adicionales *Managed Kubernetes* (seguridad, copia de seguridad, supervisión)
- Cliente: responsable y actor (RA) de los proyectos aplicativos, operadores de negocio, pipelines CI/CD, copias de seguridad aplicativas.
- Zona "gris": adaptaciones y extensiones (IAM, operadores específicos, endurecimiento de cumplimiento/seguridad del clúster) - facturadas en modo proyecto.
