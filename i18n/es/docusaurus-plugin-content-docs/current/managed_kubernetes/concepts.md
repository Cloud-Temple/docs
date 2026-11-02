---
title: Conceptos
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

<a id="nos-offres-managed-kubernetes"></a>

## Presentación

Managed Kubernetes es una plataforma de orquestación de contenedores totalmente gestionada, basada en estándares open source validados por la CNCF. Cada clúster se despliega en un entorno dedicado al cliente, en una única zona de disponibilidad o en tres. La plataforma se entrega lista para usar, con un stack completo para la red, la seguridad, el almacenamiento, el despliegue continuo, la observabilidad, la copia de seguridad y la gestión de costes.

Para los equipos que prefieren construir su propia plataforma sobre una base mínima, la oferta [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) proporciona únicamente los componentes básicos.

### Tabla comparativa de las ofertas

| Componente                       | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **SO**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Balanceador de carga**         | ✅MetalLB               | ✅MetalLB                   |
| **Almacenamiento distribuido**   | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Almacenamiento local**         | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Observabilidad CNI**           | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observabilidad**               | ❌                      | ✅Prometheus, Grafana, Loki |
| **Copia de seguridad y migración** | ❌                    | ✅Veeam Kasten              |
| **Gobernanza y seguridad**       | ❌                      | ✅Kyverno, Capsule          |
| **Gestión de certificados**      | ❌                      | ✅Cert-Manager              |
| **Despliegue continuo (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Registro de contenedores**     | ❌                      | 🔵Harbor                    |
| **Autenticación SSO**            | ❌                      | 🔵Integración OIDC          |
| **Autoescalado de pods**         | ❌                      | 🔵Keda                      |
| **Gestión de costes (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Observabilidad (profiling)**   | ❌                      | 🔵Pyroscope + LLM           |

✅ : incluido
🔵 : opcional/desactivable
❌ : no incluido

### Destinatarios y casos de uso

Managed Kubernetes está dirigido a los equipos DevOps, a los desarrolladores de aplicaciones cloud-native, a los arquitectos que migran hacia arquitecturas contenerizadas y a las organizaciones públicas o reguladas. Casos de uso típicos:

- **Aplicaciones cloud-native**: arquitecturas de microservicios.
- **Migración a contenedores**: modernización progresiva de aplicaciones existentes.
- **CI/CD avanzado**: pipelines de despliegue automatizados en GitOps.
- **Entornos múltiples**: separación entre desarrollo, pruebas y producción.
- **Aplicaciones críticas**: alta disponibilidad en tres zonas de disponibilidad.
- **Cumplimiento normativo**: despliegues sujetos a requisitos de soberanía.

## Ventajas

| Ventaja                       | Descripción                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Totalmente gestionado         | La configuración, el despliegue y el ciclo de vida del clúster están a cargo del servicio.                         |
| Alta disponibilidad           | En producción, el clúster se reparte en tres zonas de disponibilidad.                                              |
| Seguridad desde el diseño     | SO minimalista e inmutable, gestionado únicamente por API, sin shell ni acceso SSH.                                |
| Plataforma lista para usar    | Red, observabilidad, copia de seguridad, gobernanza y certificados están integrados desde la entrega.              |
| Compatible con la CNCF        | Los estándares open source evitan la dependencia tecnológica y garantizan la portabilidad de sus aplicaciones.     |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Funcionalidades

Los clústeres se basan en Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicado a Kubernetes, ligero y seguro. Es inmutable, sin shell ni acceso SSH, y se configura únicamente de forma declarativa a través de una API gRPC. La instalación estandarizada incluye un conjunto de componentes, mayoritariamente open source y validados por la CNCF.

### Red y exposición de los servicios

- **CNI Cilium**, con la interfaz de observabilidad **Hubble**: Cilium gestiona la conectividad de red de los contenedores (*Container Network Interface*): seguridad, balanceo de carga, service mesh, observabilidad, cifrado. La interfaz gráfica **Hubble** permite visualizar los flujos de Cilium.

  <img src={cillium} />

- **MetalLB** y **nginx**: para la exposición de las aplicaciones web, se integran tres *ingress-class* **nginx**:
  - *nginx-external-secured*: exposición en una IP pública, filtrada en el cortafuegos para autorizar únicamente IP conocidas (utilizada para las interfaces gráficas de los distintos productos y para la API de Kubernetes);
  - *nginx-external*: exposición en una segunda IP pública no filtrada (o con un filtrado propio del cliente);
  - *nginx-internal*: exposición únicamente en una IP interna.

  Para los servicios «no web», el balanceador de carga **MetalLB** expone servicios internamente o en IP públicas, lo que permite desplegar otros ingress, por ejemplo un WAF.

> Nota: la versión open source de nginx utilizada es la *mantenida por F5 Networks*, y no la versión original, obsoleta.

### Almacenamiento

- **Almacenamiento distribuido Rook-Ceph**: almacenamiento **Ceph** open source para los volúmenes persistentes (PV). Proporciona las *storage-classes* *ceph-block* (bloque, replicado multizona), *ceph-block-norepl* (bloque, no replicado) y *ceph-filesystem* (archivo, replicado multizona). El almacenamiento utilizado ofrece **7 500 IOPS**.
- **Almacenamiento local TopoLVM** (opcional): la *storage-class* *topolvm-ssd* almacena datos localmente *en los Worker nodes*. Esta opción es útil para las aplicaciones que replican ellas mismas sus datos (Kafka, MongoDB, PostgreSQL…) y se benefician de un almacenamiento ultrarrápido y de baja latencia. Suele servir para dedicar *Worker nodes* a una carga de trabajo específica.

### Observabilidad

El stack open source **Prometheus** se entrega de serie:

- **Prometheus**, para la recopilación de métricas;
- **Grafana**, con numerosos paneles de control;
- **Loki**: los registros de la plataforma se exportan al Almacenamiento de Objetos Cloud Temple y se integran en Grafana;
- **Pyroscope** (opcional): plataforma de profiling continuo, que puede consultarse mediante un LLM.

<img src={grafana} />

### Gobernanza y seguridad

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): controlador de admisión que aplica políticas de seguridad y de gobernanza.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): gestión de permisos con la noción de *tenant*, que centraliza y delega derechos sobre varios namespaces. Los usuarios de la plataforma disponen así de derechos restringidos únicamente a sus namespaces.
- **Cert-Manager**: gestor de certificados open source integrado de forma nativa.
- **Autenticación SSO** (opcional): integración con un proveedor de identidad externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Despliegue y automatización

- **ArgoCD** (opcional): despliegues automatizados en GitOps, dentro de una cadena **CI/CD**.
- **Harbor** (opcional): **registro de contenedores** que almacena las imágenes de sus contenedores y sus charts de Helm directamente en el clúster. Realiza **análisis de vulnerabilidades** de sus imágenes y se sincroniza con otros registros ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (opcional): autoescalado de los pods a partir de métricas avanzadas, por ejemplo un número de conexiones HTTP.
- **OpenCost** (opcional, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): seguimiento FinOps del consumo de recursos de Kubernetes y refacturación por proyecto o namespace.

### Copia de seguridad

**Veeam Kasten** (también llamado K10) realiza la copia de seguridad de un despliegue completo (manifiestos, volúmenes…) en el Almacenamiento de Objetos Cloud Temple. Se apoya en **Kanister** para copias de seguridad coherentes a nivel de aplicación, por ejemplo para las bases de datos ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Arquitectura

### Producción (multizona)

<img src={archi_overview} />

El clúster de producción se reparte en tres zonas de disponibilidad:

- **Control Plane**: tres nodos, uno por zona;
- **nodos de almacenamiento**: tres nodos Rook-Ceph dedicados, uno por zona;
- **nodos Worker**: al menos tres, uno por zona, ajustables según sus necesidades;
- **nodos Worker Bare Metal** (opcional): para necesidades de rendimiento específicas, en particular las GPU;
- **Git Runner**: un nodo para los pipelines CI/CD;
- **cortafuegos gestionado**: dos máquinas virtuales, que filtran las IP públicas de la API de Kubernetes y de los ingress seguros.

### Dev/test (mono o dual zona)

<img src={archi_overview_1az} />

El clúster de desarrollo y pruebas se despliega en una sola zona de disponibilidad, con un Control Plane, tres nodos Worker como mínimo y un Git Runner. El almacenamiento Ceph se comparte en los nodos Worker.

### Integraciones

- **Almacenamiento de Objetos Cloud Temple**: registros (Loki) y copias de seguridad (Kasten).
- **Proveedores de identidad**: integración opcional mediante OIDC.
- **IaaS Cloud Temple**: interconexión de los clústeres con recursos virtualizados, como bases de datos o componentes middleware.

## Regiones y zonas de disponibilidad

Managed Kubernetes está disponible en la región FR1. Un clúster de producción se reparte en tres zonas de disponibilidad; un clúster de desarrollo y pruebas se despliega en una sola. Los datos se alojan en Francia.

<a id="noeuds-kubernetes"></a>

## Especificaciones técnicas

### Nodos de un clúster de producción

| **AZ** | **Máquina**         | **vCores** | **RAM** | **Almacenamiento local**              |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 GB    | SO: 256 GB                            |
| AZ05   | Control Plane 1     | 8          | 12 GB   | SO: 64 GB                             |
| AZ06   | Control Plane 2     | 8          | 12 GB   | SO: 64 GB                             |
| AZ07   | Control Plane 3     | 8          | 12 GB   | SO: 64 GB                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 GB   | SO: 64 GB + Ceph 500 GB mínimo (***)  |
| AZ06   | Storage Node 2 (**) | 12         | 24 GB   | SO: 64 GB + Ceph 500 GB mínimo (***)  |
| AZ07   | Storage Node 3 (**) | 12         | 24 GB   | SO: 64 GB + Ceph 500 GB mínimo (***)  |
| AZ05   | Worker Node 1 (*)   | 12         | 24 GB   | SO: 64 GB                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 GB   | SO: 64 GB                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 GB   | SO: 64 GB                             |

(*) : el tamaño y el número de los Worker Nodes se adaptan a su necesidad de capacidad de cálculo. Se recomienda aumentar su número en lotes de 3 para mantener una distribución multizona coherente, y disponer de Worker Nodes de tamaño idéntico, tal como aconseja la CNCF.

(**) : el tamaño de los Storage Nodes puede aumentarse en función del tamaño del almacenamiento Ceph asociado (por ejemplo, 24 núcleos y 128 GB de RAM para 10 TB de Ceph).

(***) : cada nodo de almacenamiento se entrega con un mínimo de 500 GB de espacio en disco, para un almacenamiento útil Ceph distribuido de 500 GB (los datos se replican en cada zona, es decir, tres veces). El espacio libre disponible para el cliente es de aproximadamente 350 GB. Este tamaño inicial puede aumentarse en la construcción o más adelante. Se aplican cuotas en Ceph, con un reparto bloque / archivo.

### Nodos de un clúster de desarrollo y pruebas

| **AZ** | **Máquina**       | **vCores** | **RAM** | **Almacenamiento local**             |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 GB    | SO: 256 GB                           |
| AZ0n   | Control Plane     | 8          | 12 GB   | SO: 64 GB                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 GB   | SO: 64 GB + Ceph 300 GB mínimo (**)  |
| AZ0n   | Worker Node 2 (*) | 12         | 24 GB   | SO: 64 GB + Ceph 300 GB mínimo (**)  |
| AZ0n   | Worker Node 3 (*) | 12         | 24 GB   | SO: 64 GB + Ceph 300 GB mínimo (**)  |

(*) : el tamaño y el número de los Worker Nodes se adaptan a su necesidad. El mínimo de tres Worker Nodes viene impuesto por la replicación del almacenamiento.

(**) : tres Worker Nodes sirven de nodos de almacenamiento y se entregan con un mínimo de 300 GB de espacio en disco, para un almacenamiento útil distribuido de 300 GB (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 GB. Este tamaño inicial puede aumentarse en la construcción o más adelante.

### Límites

| Parámetro                          | Producción                         | Desarrollo y pruebas               |
|------------------------------------|------------------------------------|------------------------------------|
| Número de Worker Nodes             | 3 mínimo (1 por zona), 100 máximo  | 3 mínimo, 250 máximo               |
| Tamaño mínimo de un Worker Node    | 12 núcleos, 24 GB de RAM           | 12 núcleos, 24 GB de RAM           |
| Tamaño máximo de un Worker Node    | Tamaño del hipervisor, hasta 112 núcleos y 1 536 GB de RAM (blades Performance 3) | Ídem |
| Pods por Worker Node               | 110                                | 110                                |

## Seguridad y cumplimiento

Managed Kubernetes está certificado HDS e ISO 27001, y disponible en servicios cualificados SecNumCloud y conformes con C5.

- **SO inmutable**: sin shell ni acceso SSH, gestionado únicamente por API.
- **Cifrado**: datos cifrados en reposo y en tránsito, cifrado físico de los enlaces entre zonas de disponibilidad.
- **Gobernanza**: políticas Kyverno, permisos por tenant con Capsule, registro de auditoría completo.
- **Residencia de los datos**: Francia (FR1), en formatos Kubernetes estándar.

## Copia de seguridad y continuidad

- **Copia de seguridad de los workloads**: Veeam Kasten realiza la copia de seguridad de sus despliegues (manifiestos y volúmenes) en el Almacenamiento de Objetos Cloud Temple, con copias de seguridad coherentes a nivel de aplicación.
- **Replicación del almacenamiento**: en producción, los volúmenes Ceph replicados se copian en las tres zonas de disponibilidad.
- **Alta disponibilidad**: en producción, el Control Plane y los nodos de almacenamiento se reparten en tres zonas.

<a id="politique-de-versions--cycle-de-vie"></a>

## Versiones y ciclo de vida

- **Kubernetes soportado:** N-2 (tres releases mayores al año, aproximadamente cada cuatro meses). Cada release tiene soporte oficial durante 12 meses, es decir, una ventana de soporte de unos 16 meses como máximo por versión.
- **Talos OS:** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene unos 12 meses, parches de seguridad incluidos.
  - Ritmo de actualización recomendado: tres veces al año, en coherencia con las actualizaciones de Kubernetes.
  - Los parches críticos (CVE, kernel) se aplican mediante rolling upgrade, sin interrupción del servicio.
- **Actualizaciones:**
  - **mayores** (Kubernetes N+1, Talos X+1): planificadas tres veces al año, mediante rolling update;
  - **menores**: aplicadas automáticamente en un plazo de 30 a 60 días.
- **Obsolescencia:** la versión N-3 llega al final de su soporte 90 días después de la publicación de la versión N.

<a id="sla--information-sur-le-support"></a>

## Disponibilidad del servicio

| Elemento                    | Objetivo de disponibilidad, medido en un mes  |
|-----------------------------|-----------------------------------------------|
| Clúster de producción (API de Kubernetes) | 99,95 %                         |
| Almacenamiento de producción (volúmenes Ceph) | 99,90 %                     |

Los clústeres de desarrollo y pruebas no tienen objetivo de disponibilidad.

<a id="raci"></a>

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) de Managed Kubernetes](../contractual/kubernetes/raci.md). En resumen:

- **Cloud Temple** es responsable de la base Kubernetes y de los servicios gestionados: seguridad, copia de seguridad del clúster, supervisión, actualizaciones y operadores incluidos.
- **El cliente** es responsable de sus proyectos de aplicación, de sus operadores de negocio, de sus pipelines CI/CD y de las copias de seguridad de sus aplicaciones.
- **Soporte**: niveles 1, 2 y 3 incluidos para la base (infraestructura y operadores estándar). Los plazos de atención dependen de la gravedad del incidente (P1 a P4).
- **Mantenimiento**: aplicación regular de parches a Talos, Kubernetes y los operadores estándar, mediante rolling upgrade, sin interrupción del servicio.

## Reversibilidad

Los clústeres se basan en estándares open source y en formatos Kubernetes estándar, lo que garantiza la portabilidad de sus aplicaciones.

| Operación                | Entregable                  | Plazo       | Coste      |
|--------------------------|-----------------------------|-------------|------------|
| Exportación de las aplicaciones | Manifiestos YAML de Kubernetes | 15 días | Sin cargo |
| Copia de seguridad de los volúmenes | Copias de seguridad Veeam Kasten | En continuo | Incluido |
| Asistencia a la migración | Soporte técnico            | Bajo demanda | Bajo presupuesto |

**Veeam Kasten** funciona también con otros clústeres Kubernetes (OpenShift, hiperescaladores…). Por tanto, puede servir para escenarios de reversibilidad o de migración, gestionando las adaptaciones necesarias mediante *transformaciones* (por ejemplo, un cambio de ingress-class), pero también de «refresh», como la restauración planificada de un entorno de producción en preproducción.

## Precios

El servicio gestionado se factura mensualmente, por clúster; la infraestructura IaaS subyacente (cómputo, almacenamiento, red) se factura de forma complementaria, según el dimensionamiento. Los precios se publican en la página del producto en el sitio web de Cloud Temple:
[Managed Kubernetes — precios](https://www.cloud-temple.com/produits/managed-kubernetes/).
