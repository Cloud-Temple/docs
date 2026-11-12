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

:::info[Servicio gestionado, fuera de la Consola]

Managed Kubernetes se suscribe a través de los equipos de Cloud Temple. No se solicita desde la Consola de Cloud Temple, que no ofrece para este servicio ni vista ni API.

:::

<a id="nos-offres-managed-kubernetes"></a>

## Presentación

Managed Kubernetes es una plataforma de orquestación de contenedores completamente gestionada, basada en estándares open source validados por la CNCF. Cada clúster se despliega en un entorno dedicado al cliente, en una zona de disponibilidad única o en tres. La plataforma se entrega lista para usar, con una stack completa para la red, la seguridad, el almacenamiento, el despliegue continuo, la observabilidad, la copia de seguridad y la gestión de costos.

Para los equipos que prefieren construir su propia plataforma sobre una base mínima, la oferta [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) proporciona únicamente los componentes básicos.

### Tabla comparativa de las ofertas

| Componente                        | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **SO**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Almacenamiento distribuido**   | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Almacenamiento local**         | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Observabilidad CNI**           | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observabilidad**               | ❌                      | ✅Prometheus, Grafana, Loki |
| **Copia de seguridad y migración** | ❌                    | ✅Veeam Kasten              |
| **Gobernanza y seguridad**       | ❌                      | ✅Kyverno, Capsule          |
| **Gestión de certificados**      | ❌                      | ✅Cert-Manager              |
| **Despliegue continuo (GitOps)** | ❌                      | ✅ArgoCD (desactivable)     |
| **Registro de contenedores**     | ❌                      | ✅Harbor (desactivable)     |
| **Autenticación SSO**            | ❌                      | ✅Integración OIDC (desactivable) |
| **Autoscaling de pods**          | ❌                      | 🔵Keda                      |
| **Gestión de costos (FinOps)**   | ❌                      | ✅OpenCost (desactivable)   |
| **Observabilidad (profiling)**   | ❌                      | 🔵Pyroscope + LLM           |

✅ : incluido
🔵 : opcional
❌ : no incluido

Los componentes marcados con ✅ están incluidos en la oferta. Los indicados como « desactivable » (ArgoCD, Harbor, OpenCost y la autenticación SSO) pueden desactivarse.

### Públicos y casos de uso

Managed Kubernetes se dirige a los equipos DevOps, a los desarrolladores de aplicaciones cloud-native, a los arquitectos que migran hacia arquitecturas contenerizadas, y a las organizaciones públicas o reguladas. Casos de uso típicos:

<<<<<<< HEAD
- **CNI Cilium**, con interfaz de observabilidad (**Hubble**): Cilium es una solución de red para contenedores Kubernetes (*Container Network Interface*). Gestiona la seguridad, el load balancing, el service mesh, la observabilidad, el cifrado, etc... Es un componente de red fundamental que se encuentra en la mayoría de las variantes de Kubernetes (OpenShift, AKS, GKE, EKS,...). En **Managed Kubernetes**, hemos incluido la interfaz gráfica **Hubble** para la visualización de los flujos de Cilium.
  - **Gateway API**: los CRDs Gateway API (≥ v1.6.1) se instalan antes de Cilium y son requeridos por Cilium ≥ 1.20 para la API Gateway.

  <img src={cillium} />

  El siguiente esquema ilustra la distinción entre la red soportada por el CNI (tráfico pod ↔ pod) y la red de los nodos, así como la manera en que Cilium encapsula el tráfico entre nodos:

  <img src={cni_vs_node} alt="Red CNI vs red de los nodos" />
- **MetalLB** y **nginx**: Para la exposición de aplicaciones web, 3 *ingress-class* **nginx** están integradas de base:
=======
- **Aplicaciones cloud-native**: arquitecturas de microservicios.
- **Migración hacia contenedores**: modernización progresiva de aplicaciones existentes.
- **CI/CD avanzado**: pipelines de despliegue automatizados en GitOps.
- **Entornos múltiples**: separación de desarrollo, prueba y producción.
- **Aplicaciones críticas**: alta disponibilidad en tres zonas de disponibilidad.
- **Cumplimiento normativo**: despliegues sujetos a requisitos de soberanía.

## Ventajas

| Ventaja                      | Descripción                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Completamente gestionado      | La configuración, el despliegue y el ciclo de vida del clúster están cubiertos.                                   |
| Alta disponibilidad           | En producción, el clúster se distribuye en tres zonas de disponibilidad.                                           |
| Seguridad por diseño          | SO minimalista e inmutable, gestionado únicamente por API, sin shell ni acceso SSH.                                |
| Plataforma lista para usar    | Red, observabilidad, copia de seguridad, gobernanza y certificados están integrados desde la entrega.             |
| Compatible CNCF               | Los estándares open source evitan la dependencia tecnológica y garantizan la portabilidad de sus aplicaciones.    |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Funcionalidades

Los clústeres se basan en Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicado a Kubernetes, ligero y seguro. Es inmutable, sin shell ni acceso SSH, y configurado únicamente de manera declarativa a través de una API gRPC. La instalación estandarizada incluye un conjunto de componentes, mayoritariamente open source y validados por la CNCF.

### Red y exposición de servicios

- **CNI Cilium**, con la interfaz de observabilidad **Hubble**: Cilium gestiona la red de los contenedores (*Container Network Interface*): seguridad, load balancing, service mesh, observabilidad, cifrado. La interfaz gráfica **Hubble** permite visualizar los flujos de Cilium.

  <img src={cillium} />
>>>>>>> origin/dev

- **MetalLB** y **nginx**: para la exposición de aplicaciones web, tres *ingress-class* **nginx** están integradas:
  - *nginx-external-secured*: exposición en una IP pública, filtrada en el cortafuegos para autorizar únicamente IPs conocidas (utilizada para las interfaces gráficas de los diferentes productos y para la API de Kubernetes);
  - *nginx-external*: exposición en una segunda IP pública no filtrada (o con un filtrado propio del cliente);
  - *nginx-internal*: exposición en una IP interna únicamente.

  Para los servicios « no web », el load-balancer **MetalLB** expone servicios en interno o en IPs públicas, lo que permite desplegar otros ingress, por ejemplo un WAF.

> Nota: la versión open source de nginx utilizada es la *mantenida por F5 Networks*, y no la versión original, deprecada.

### Almacenamiento

<<<<<<< HEAD
  - **Prometheus**, para la recopilación de métricas
  - **Grafana**, con numerosos dashboards
  - **Alloy**: agente de recopilación de logs y métricas (reemplaza a Promtail).
  - **Loki**: los registros de la plataforma se exportan al almacenamiento S3 Cloud-Temple (e integrados en Grafana).
  - **Pyroscope**: (opcional) plataforma de profiling continuo, consultable vía LLM.
=======
- **Almacenamiento distribuido Rook-Ceph**: almacenamiento **Ceph** open source para los volúmenes persistentes (PV). Proporciona las *storage-classes* *ceph-block* (bloque, replicado multi-zona), *ceph-block-norepl* (bloque, no replicado) y *ceph-filesystem* (archivo, replicado multi-zona). El almacenamiento utilizado ofrece **7 500 IOPS**.
- **Almacenamiento local TopoLVM** (opcional): la *storage-class* *topolvm-ssd* almacena localmente datos *en los Worker nodes*. Esta opción es útil para las aplicaciones que replican ellas mismas sus datos (Kafka, MongoDB, PostgreSQL…) y se benefician de un almacenamiento ultrarrápido, de baja latencia. Generalmente sirve para dedicar *Worker nodes* a una carga de trabajo específica.
>>>>>>> origin/dev

### Observabilidad

La stack open source **Prometheus** se entrega de forma estándar:

- **Prometheus**, para la recopilación de métricas;
- **Grafana**, con numerosos paneles de control;
- **Loki**: los registros de la plataforma se exportan al Almacenamiento de Objetos Cloud Temple e integrados en Grafana;
- **Pyroscope** (opcional): plataforma de profiling continuo, consultable a través de un LLM.

<img src={grafana} />

<<<<<<< HEAD
## Versiones de referencia (al 11/2026)

- **Kubernetes**: v1.36.6
- **Talos**: v1.13.12

Estas versiones son **una base**, la del socle de referencia a esta fecha: evolucionan con cada release del socle (correcciones de seguridad, actualizaciones de versión). Las versiones exactas desplegadas en un clúster dado figuran en el DAT de dicho clúster. La política de soporte de versiones se describe más abajo (« Política de versiones y ciclo de vida »).

## Paquetes Helm gestionados (al 11/2026)

El socle siguiente se despliega en todo clúster Managed Kubernetes. Las versiones son una base, la de la plantilla de referencia a esta fecha; un clúster en servicio puede estar en una versión anterior entre dos ventanas de mantenimiento.

### Base de la plataforma (siempre desplegado)

| **Componente** | **Versión** | **Depósito** | **Rol Principal** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | CNI avanzada, políticas de red y observabilidad (Hubble), API Gateway |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | CRDs Gateway API, instaladas antes de Cilium (Cilium ≥ 1.20 exige ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | LoadBalancer BGP (BFD) que expone dos rangos, interno y externo, en TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Almacenamiento distribuido de alta disponibilidad (bloque RBD + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Almacenamiento LVM local al nodo para cargas de trabajo de baja latencia |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | API de métricas de recursos (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Aprobación automática de certificados kubelet |

### Servicios de la plataforma gestionada

| **Componente** | **Versión** | **Depósito** | **Rol Principal** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Gestión automatizada de certificados TLS (ZeroSSL integrado) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Controladores Ingress: interno, externo y externo-seguro (con filtrado IP) |
| **Kyverno** | 3.9.2 | https://kyverno.github.io/kyverno/ | Aplicación de políticas de seguridad |
| **Capsule** | 0.13.11 | https://projectcapsule.github.io/charts/ | Multi-tenancy y aislamiento de namespaces con políticas de seguridad |
| **ArgoCD** | 10.11.6 | https://argoproj.github.io/argo-helm | GitOps / despliegue continuo |
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Supervisión y alertas |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Agente de recopilación de logs/métricas (reemplaza a Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Centralización de logs (logs almacenados en S3 Cloud Temple) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Profiling continuo y análisis de rendimiento (flamegraphs en Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Registro de imágenes (imágenes almacenadas en S3 Cloud Temple) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Copia de seguridad y restauración (copias de seguridad exportadas en S3 Cloud Temple) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Observabilidad y seguimiento de costos |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Autoscaling por eventos (Beta) |

**Huella de la stack en el clúster Ceph: aproximadamente 180 Gi**, idéntica en producción y en preproducción.

Se proporcionan tres `StorageClass`:

| StorageClass | Backend | Modo de acceso | Uso típico |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (bloque distribuido) | ReadWriteOnce | Bases de datos, cargas mono-pod |
| `ceph-filesystem` | CephFS (sistema de archivos distribuido) | ReadWriteMany | Volúmenes compartidos entre pods |
| `topolvm-ssd` | TopoLVM (LVM local al nodo) | ReadWriteOnce | Almacenamiento local de baja latencia, no replicado, respaldado por Kasten **en modo blueprint** únicamente (ver Copia de seguridad) |

**Cuotas** — valores estándar de un clúster entregado, **ajustables por clúster** al pedido como durante su ciclo de vida:

| Ámbito | RBD (bloque) | CephFS |
| --- | --- | --- |
| Límite del pool, todos los tenants incluidos | 300 Gi | 125 Gi |
| Límite del tenant por defecto, aplicado por Capsule | 115 Gi | 100 Gi |

La capacidad de Ceph en sí misma depende del dimensionamiento elegido: con la plantilla por defecto (3 nodos Ceph de 500 Go), un clúster dispone de 1500 Go brutos, es decir 500 Go útiles tras la replicación ×3.

## SLA e información sobre el soporte

- **Disponibilidad garantizada (producción 3 AZ)**: 99.95 %
- **Soporte**: N1/N2/N3 incluido para el ámbito del socle (infraestructura y operadores estándar).
- **Matriz de soporte**: los plazos de toma en carga y de restablecimiento dependen de la severidad del incidente, conforme a la matriz P1 a P4 siguiente.
- **Compromiso RPO / RTO**: en un clúster 3 AZ, RPO ≤ 24 h y RTO ≤ 4 h. En mono-AZ, las copias de seguridad existen pero no están cubiertas por un compromiso RTO.
- **Mantenimiento (MCO)**: parcheo regular Talos / Kubernetes / operadores estándar por MSP, sin interrupción del servicio (rolling upgrade).

| Nivel | Definición | Toma en carga | Restablecimiento objetivo |
| --- | --- | --- | --- |
| **P1** | Producción no disponible | Inmediata (7/24) | ≤ 4 h |
| **P2** | Degradación mayor | ≤ 1 h (7/24) | ≤ 8 h |
| **P3** | Degradación menor | ≤ 4 h (horas laborables) | ≤ 2 d laborables |
| **P4** | Pregunta / mejora | ≤ 1 d laborable | A planificar |
=======
### Gobernanza y seguridad

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): controlador de admisión que aplica estrategias de seguridad y gobernanza.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): gestión de permisos con la noción de *tenant*, que centraliza y delega derechos sobre varios namespaces. Los usuarios de la plataforma disponen así de derechos restringidos a sus propios namespaces.
- **Cert-Manager**: gestor de certificados open source integrado nativamente.
- **Autenticación SSO** (incluido, desactivable): integración con un proveedor de identidad externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Despliegue y automatización
>>>>>>> origin/dev

- **ArgoCD** (incluido, desactivable): despliegues automatizados en GitOps, dentro de una cadena **CI/CD**.
- **Harbor** (incluido, desactivable): **registro de contenedores** que almacena las imágenes de sus contenedores y sus charts Helm directamente en el clúster. Realiza **escaneos de vulnerabilidades** en sus imágenes y se sincroniza con otros registros ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (opcional): autoscaling de pods a partir de métricas avanzadas, por ejemplo un número de conexiones HTTP.
- **OpenCost** (incluido, desactivable, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): seguimiento FinOps del consumo de recursos de Kubernetes y facturación por proyecto o namespace.

### Respaldo

**Veeam Kasten** (también conocido como K10) respalda un despliegue completo (manifiestos, volúmenes…) hacia el Almacenamiento de Objetos Cloud Temple. Se basa en **Kanister** para respaldos aplicativos coherentes, por ejemplo para las bases de datos ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Arquitectura

### Producción (multi-zona)

<img src={archi_overview} />

<<<<<<< HEAD
#### Diagramas de arquitectura

- **Vista HLD (High Level Design)**:

<img src={arch_hld} alt="Schéma d'architecture HLD" />

- **Vista LLD (Low Level Design)**:

<img src={arch_lld} alt="Schéma d'architecture LLD" />

Para un despliegue "de producción" (multi-zona), se utilizan las siguientes máquinas:

| **AZ** | **Máquina**   | **vCores** | **RAM** | **Almacenamiento local**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 Go          | OS: 256 Go                            |
| AZ05         | Control Plane 1     | 8                | 12 Go         | OS: 128 Go                            |
| AZ06         | Control Plane 2     | 8                | 12 Go         | OS: 128 Go                            |
| AZ07         | Control Plane 3     | 8                | 12 Go         | OS: 128 Go                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go mínimo (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go mínimo (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go mínimo (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 Go         | OS: 128 Go                            |

(*) : El tamaño y el número de Worker Nodes puede adaptarse según la necesidad de capacidad de cómputo del cliente. El número mínimo de Worker Nodes es de 3 (1 por AZ), y recomendamos aumentar su número por lotes de 3 para mantener una distribución multi-zona coherente. El tamaño de los Worker Nodes puede adaptarse, con un mínimo de 12 núcleos y 24 Go de RAM; el límite superior por Worker Node está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 núcleos/1536 Go de RAM con blades Performance 3). La cantidad de Worker Nodes está limitada a 100. El CNCF recomienda tener Worker Nodes de tamaño idéntico. El límite del número de pods por Worker Node es de 110.

(**) : el tamaño de los Storage Nodes puede revisarse al alza según el tamaño del almacenamiento Ceph asociado. (por ejemplo: 24c/128Go para 10 To de Ceph)

(***) : Cada nodo de almacenamiento se entrega con un mínimo de 500 Go de espacio en disco, para un almacenamiento útil Ceph distribuido de 500 Go (los datos se replican en cada AZ, por lo tanto x3). El espacio libre disponible para el cliente es de aproximadamente 350 Go. Este tamaño inicial puede aumentarse en el momento de la construcción, o más tarde, según las necesidades. Se aplican cuotas en Ceph, con una distribución Block/File.
=======
El clúster de producción se distribuye en tres zonas de disponibilidad:

- **Control Plane**: tres nodos, uno por zona;
- **nodos de almacenamiento**: tres nodos Rook-Ceph dedicados, uno por zona;
- **nodos Worker**: al menos tres, uno por zona, ajustables según sus necesidades;
- **nodos Worker Bare Metal** (opcional): para necesidades de rendimiento específicas, en particular los GPU;
- **Git Runner**: un nodo para los pipelines CI/CD;
- **firewall gestionado**: dos máquinas virtuales, que filtran las IP públicas de la API de Kubernetes y de los ingress seguros.
>>>>>>> origin/dev

### Dev/test (una sola zona)

<img src={archi_overview_1az} />

El clúster de desarrollo y pruebas se despliega en una sola zona de disponibilidad, con un Control Plane, tres nodos Worker como mínimo y un Git Runner. El almacenamiento Ceph se comparte en los nodos Worker.

<<<<<<< HEAD
| **AZ** | **Máquina** | **vCores** | **RAM** | **Almacenamiento local**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 Go          | OS: 256 Go                           |
| AZ0n         | Control Plane     | 8                | 12 Go         | OS: 128 Go                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go mínimo (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go mínimo (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go mínimo (**) |

(*) : El tamaño y el número de Worker Nodes puede adaptarse según la necesidad de capacidad de cómputo del cliente. El número mínimo de Worker Nodes es de 3 (debido a la replicación del almacenamiento). El tamaño de los Worker Nodes puede adaptarse, con un mínimo de 12 núcleos y 24 Go de RAM; el límite superior por Worker Node está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente 112 núcleos/1536 Go de RAM con blades Performance 3). La cantidad de Worker Nodes está limitada a 100. El CNCF recomienda tener Worker Nodes de tamaño idéntico. El límite del número de pods por Worker Node es de 110.
=======
### Integraciones

- **Almacenamiento de Objetos Cloud Temple**: registros (Loki) y respaldos (Kasten).
- **Proveedores de identidad**: integración vía OIDC, incluida y desactivable.
- **IaaS Cloud Temple**: interconexión de clústeres con recursos virtualizados, como bases de datos o componentes middleware.
>>>>>>> origin/dev

## Regiones y zonas de disponibilidad

Managed Kubernetes está disponible en la región FR1. Un clúster de producción se distribuye en tres zonas de disponibilidad; un clúster de desarrollo y pruebas se despliega en una sola. Los datos se alojan en Francia.

<a id="noeuds-kubernetes"></a>

## Características técnicas

### Nodos de un clúster de producción

| **AZ** | **Máquina**         | **vCores** | **RAM** | **Almacenamiento local**                    |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 Go    | OS: 256 Go                            |
| AZ05   | Control Plane 1     | 8          | 12 Go   | OS: 64 Go                             |
| AZ06   | Control Plane 2     | 8          | 12 Go   | OS: 64 Go                             |
| AZ07   | Control Plane 3     | 8          | 12 Go   | OS: 64 Go                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go mínimo (***) |
| AZ06   | Storage Node 2 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go mínimo (***) |
| AZ07   | Storage Node 3 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go mínimo (***) |
| AZ05   | Worker Node 1 (*)   | 12         | 24 Go   | OS: 64 Go                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 Go   | OS: 64 Go                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 Go   | OS: 64 Go                             |

(*) : el tamaño y el número de Worker Nodes se adaptan a su necesidad de capacidad de cómputo. Se recomienda aumentar su número por lotes de 3 para mantener una distribución multi-zona coherente, y tener Worker Nodes de tamaño idéntico, como lo recomienda la CNCF.

(**) : el tamaño de los Storage Nodes puede aumentarse según el tamaño del almacenamiento Ceph asociado (por ejemplo 24 núcleos y 128 Go de RAM para 10 To de Ceph).

(***) : cada nodo de almacenamiento se entrega con un mínimo de 500 Go de espacio en disco, para un almacenamiento útil Ceph distribuido de 500 Go (los datos se replican en cada zona, por lo tanto tres veces). El espacio libre disponible para el cliente es de aproximadamente 350 Go. Este tamaño inicial puede aumentarse en la construcción o más tarde. Se aplican cuotas en Ceph, con una distribución bloque / archivo.

### Nodos de un clúster de desarrollo y pruebas

| **AZ** | **Máquina**       | **vCores** | **RAM** | **Almacenamiento local**                   |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 Go    | OS: 256 Go                           |
| AZ0n   | Control Plane     | 8          | 12 Go   | OS: 64 Go                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go mínimo (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go mínimo (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go mínimo (**) |

(*) : el tamaño y el número de Worker Nodes se adaptan a su necesidad. El mínimo de tres Worker Nodes está impuesto por la replicación del almacenamiento.

(**) : tres Worker Nodes sirven como nodos de almacenamiento y se entregan con un mínimo de 300 Go de espacio en disco, para un almacenamiento útil distribuido de 300 Go (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 Go. Este tamaño inicial puede aumentarse en la construcción o más tarde.

### Límites

| Parámetro                          | Producción                         | Desarrollo y pruebas              |
|------------------------------------|------------------------------------|------------------------------------|
| Número de Worker Nodes             | 3 mínimo (1 por zona), 100 máximo | 3 mínimo, 250 máximo            |
| Tamaño mínimo de un Worker Node   | 12 núcleos, 24 Go de RAM             | 12 núcleos, 24 Go de RAM             |
| Tamaño máximo de un Worker Node   | Tamaño del hipervisor, hasta 112 núcleos y 1 536 Go de RAM (blades Performance 3) | Idem |
| Pods por Worker Node               | 110                                | 110                                |

## Seguridad y cumplimiento

Managed Kubernetes está certificado HDS e ISO 27001, y disponible en servicios calificados SecNumCloud y conformes C5.

- **OS inmutable**: sin shell ni acceso SSH, gestionado únicamente por API.
- **Cifrado**: datos cifrados en reposo y en tránsito, cifrado físico de los enlaces entre zonas de disponibilidad.
- **Gobernanza**: políticas Kyverno, permisos por tenant con Capsule, registro de auditoría completo.
- **Residencia de datos**: Francia (FR1), en formatos estándar de Kubernetes.

## Respaldo y continuidad

<<<<<<< HEAD
#### Respaldo de la infraestructura (ámbito gestionado)

- **Respaldo del clúster mediante Kasten K10** (parte de Disaster Recovery e Infraestructura), con pruebas de recuperación ante desastres.
- **Ámbito base**: namespaces y PVC (Ceph RBD), objetos CRD críticos de infraestructura, observabilidad, operadores estándar.
- **etcd (estado del clúster)**: snapshot diario tomado por Cloud Temple fuera de Kasten, con la configuración de los nodos Talos; sirve para reconstruir el plano de control. Los snapshots se conservan 2 días en la VM de gestión, ella misma respaldada a nivel IaaS mediante una política diaria con 35 días de retención.
- **Frecuencia**: diaria (retención 7 d) y semanal (retención 4 sem).
- **Compromisos**: RPO ≤ 24 h, RTO ≤ 4 h (reconstrucción automatizada del clúster y restauración de componentes mediante Kasten).
- **Destino**: S3 Cloud Temple (FR), cifrado en el servidor.

#### Respaldo de las cargas de trabajo del cliente (basado en labels)

El servicio proporciona un mecanismo flexible para respaldar las cargas de trabajo del cliente utilizando labels.

- **Mecanismo**: registrar recursos (namespaces, PVCs, etc.) en una política de respaldo mediante labels específicos.
- **Políticas disponibles**: 24 políticas horarias, cubriendo cada hora del día (00 a 23 UTC).
- **Formato del label**: `kasten-dailyHH-r7d: "true"` (donde `HH` es la hora en formato 24 h, por ej. `00`, `14`, `23`).
- **Frecuencia**: diaria a la hora especificada (UTC). **Retención**: 7 días en S3.
- **Ejemplo**: para respaldar un namespace todos los días a las 14:00 UTC, agregar el label `kasten-daily14-r7d: "true"` al namespace.
- **Volúmenes TopoLVM**: `topolvm-ssd` no gestiona snapshots; sin precaución, un namespace respaldado que contiene un volumen TopoLVM verá **todo** su respaldo fallar, incluidos los volúmenes Ceph. Estos volúmenes se respaldan con Kasten **en modo blueprint** (Kanister): Kasten ejecuta un respaldo aplicativo (dump de base, exportación de datos) enviado a S3, y la restauración reproduce la operación inversa. El blueprint es propio de cada aplicación y se implementa **bajo estudio**, a solicitud del cliente.
- **Ámbito aplicativo**: RPO y RTO definidos por el cliente.

### Soporte y resolución de problemas
=======
- **Respaldo de workloads**: Veeam Kasten respalda sus despliegues (manifiestos y volúmenes) hacia el Almacenamiento de Objetos Cloud Temple, con respaldos aplicativos coherentes.
- **Replicación del almacenamiento**: en producción, los volúmenes Ceph replicados se copian en las tres zonas de disponibilidad.
- **Alta disponibilidad**: en producción, el Control Plane y los nodos de almacenamiento se distribuyen en tres zonas.
>>>>>>> origin/dev

<a id="politique-de-versions--cycle-de-vie"></a>

## Versiones y ciclo de vida

- **Kubernetes soportado:** N-2 (tres releases mayores por año, aproximadamente cada cuatro meses). Cada release está soportada oficialmente 12 meses, es decir, una ventana de soporte de aproximadamente 16 meses máximo por versión.
- **Talos OS:** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene aproximadamente 12 meses, incluidos los parches de seguridad.
  - Ritmo de actualización recomendado: tres veces por año, en coherencia con las actualizaciones de Kubernetes.
  - Los parches críticos (CVE, kernel) se aplican en rolling upgrade, sin interrupción del servicio.
- **Actualizaciones:**
  - **mayores** (Kubernetes N+1, Talos X+1): planificadas tres veces por año, en rolling update;
  - **menores**: aplicadas automáticamente en un plazo de 30 a 60 días.
- **Depreciación:** la versión N-3 llega al fin de soporte 90 días después del lanzamiento de la versión N.

<a id="sla--information-sur-le-support"></a>

## Disponibilidad del servicio

| Elemento                     | Objetivo de disponibilidad, medido sobre un mes |
|-----------------------------|-----------------------------------------------|
| Clúster de producción (API de Kubernetes) | 99,95 %                            |
| Almacenamiento de producción (volúmenes Ceph)  | 99,90 %                            |

Los clústeres de desarrollo y pruebas no tienen objetivo de disponibilidad.

<a id="raci"></a>

## Responsabilidades

La distribución de las responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md). En síntesis:

- **Cloud Temple** es responsable de la plataforma Kubernetes y de los servicios gestionados: seguridad, respaldo del clúster, supervisión, actualizaciones y operadores incluidos.
- **El cliente** es responsable de sus proyectos aplicativos, de sus operadores de negocio, de sus pipelines CI/CD y de los respaldos de sus aplicaciones.
- **Soporte**: niveles 1, 2 y 3 incluidos para la plataforma (infraestructura y operadores estándar). Los plazos de atención dependen de la severidad del incidente (P1 a P4).
- **Mantenimiento**: aplicación de parches periódica de Talos, de Kubernetes y de los operadores estándar, mediante rolling upgrade, sin interrupción del servicio.

## Reversibilidad

Los clústeres se basan en estándares de código abierto y en formatos Kubernetes estándar, lo que garantiza la portabilidad de sus aplicaciones.

| Operación                | Entregable                    | Plazo       | Costo       |
|--------------------------|-------------------------------|-------------|-------------|
| Exportación de aplicaciones  | Manifiestos YAML Kubernetes  | 15 días    | Sin cargo |
| Respaldo de volúmenes   | Respaldos Veeam Kasten    | Continuo  | Incluido     |
| Asistencia en la migración | Soporte técnico          | Bajo demanda | Bajo presupuesto  |

**Veeam Kasten** también funciona con otros clústeres Kubernetes (OpenShift, hyperscalers…). Por lo tanto, puede utilizarse en escenarios de reversibilidad o de migración, gestionando las adaptaciones necesarias mediante *transformations* (por ejemplo, un cambio de ingress-class), pero también de « refresh », como la restauración planificada de un entorno de producción en preproducción.

## Tarificación

El servicio gestionado se factura mensualmente, por clúster; la infraestructura IaaS subyacente (cómputo, almacenamiento, red) se factura de forma complementaria, según el dimensionamiento. Los tarifas se publican en la página de producto del sitio Cloud Temple:
[Managed Kubernetes — tarifas](https://www.cloud-temple.com/produits/managed-kubernetes/).
