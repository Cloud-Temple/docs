---
title: Conceptos
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Presentación de Kubernetes gestionado

La oferta **Kubernetes gestionado** (también denominada "Kub Managé" o "KM") es una solución de contenedorización Kubernetes gestionada por Cloud-Temple, desplegada en forma de máquinas virtuales que funcionan sobre las infraestructuras IaaS Cloud-Temple OpenIaaS.

**Kubernetes gestionado** se basa en Talos Linux (https://www.talos.dev/), un sistema operativo dedicado a Kubernetes que es ligero y seguro. Es inmutable, sin ningún shell ni acceso SSH, y configurado únicamente de forma declarativa a través de la API gRPC.

La instalación estandarizada incluye un conjunto de componentes, mayoritariamente de código abierto y validados por el CNCF:

- **CNI Cillium**, con interfaz de observabilidad (**Hubble**): Cillium es una solución de red para contenedores Kubernetes (*Container Network Interface*). Gestiona la seguridad, el balanceo de carga, el service mesh, la observabilidad, el cifrado, etc. Es un componente de red fundamental que se encuentra en la mayoría de las variantes de Kubernetes (OpenShift, AKS, GKE, EKS, ...). Hemos incluido la interfaz gráfica **Hubble** para visualizar los flujos de Cillium.

    <img src={cillium} />

- **MetalLB** y **nginx**: Para exponer aplicaciones web, se incluyen de forma predeterminada tres clases de *ingress* **nginx**:
    - *nginx-external-secured*: exposición en una IP pública, filtrada en el firewall para permitir únicamente IPs conocidas (usado para interfaces gráficas de los distintos productos y la API de Kubernetes).
    - *nginx-external*: exposición en una segunda IP pública sin filtrado (o filtrado específico por cliente).
    - *nginx-internal*: exposición únicamente en una IP interna.

    Para servicios "no web", un balanceador de carga **MetalLB** permite exponer servicios internamente o en IPs públicas (lo que permite desplegar otros *ingresses*, como por ejemplo un WAF).

- **Almacenamiento distribuido Rook-Ceph**: para el almacenamiento de volúmenes persistentes (PV), se integra un almacenamiento distribuido **Ceph** de código abierto en la plataforma. Permite utilizar las *storage-classes* *ceph-block*, *ceph-bucket* y *ceph-filesystem*. Se utiliza un almacenamiento con **7500 IOPS**, lo que permite altos rendimientos. En despliegues de producción (en 3 Zonas de Disponibilidad), los nodos de almacenamiento son dedicados (1 nodo por Zona de Disponibilidad); en despliegues no productivos (1 Zona de Disponibilidad), el almacenamiento se comparte con los nodos trabajadores.

- **Cert-Manager**: el gestor de certificados de código abierto **Cert-Manager** está integrado nativamente en la plataforma.

- **ArgoCD** está disponible para sus despliegues automatizados mediante una cadena de **CI/CD**.

- Pila **Prometheus** (Prometheus, Grafana, Loki): los clusters Kubernetes gestionados se entregan por defecto con una pila completa de código abierto **Prometheus** para la observabilidad, que incluye:
    - **Prometheus**
    - **Grafana**, con numerosos paneles
    - **Loki**: los registros de la plataforma se exportan al almacenamiento S3 de Cloud-Temple (e integrados en Grafana).

    <img src={grafana} />

- **Harbor** es un **registro de contenedores** que le permite almacenar imágenes de sus contenedores o sus charts Helm directamente en el clúster. Realiza escaneos de vulnerabilidades en sus imágenes y puede firmarlas digitalmente. **Harbor** también permite sincronizaciones con otros registros. (https://goharbor.io/)

- **OpenCost** (https://github.com/opencost/opencost) es una herramienta de gestión de costes (Finops) para Kubernetes. Le permite rastrear con precisión el consumo de recursos de Kubernetes y realizar facturación por proyecto/namespace.

- Estrategias de seguridad avanzadas con **Kyverno** y **Capsule**:
    - **Kyverno** (https://kyverno.io/) es un controlador de admisión para Kubernetes que permite aplicar políticas. Es una herramienta esencial para la gobernanza y seguridad en Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) es una herramienta de gestión de permisos que facilita la administración de derechos en Kubernetes. Introduce el concepto de *tenant*, que permite centralizar y delegar permisos sobre múltiples namespaces. A través de **Capsule**, los usuarios de la plataforma Kubernetes gestionado disponen por tanto de permisos restringidos únicamente a sus propios namespaces.

- **Veeam Kasten** (también conocido como 'k10') es una solución para la **copia de seguridad** de cargas de trabajo en Kubernetes.

    Permite realizar copias de seguridad completas: manifiestos, volúmenes, etc., hacia el almacenamiento objeto S3 de Cloud-Temple. **Kasten** utiliza **Kanister** para permitir copias de seguridad coherentes a nivel de aplicación, por ejemplo para bases de datos (https://docs.kasten.io/latest/usage/blueprints/). 

    **Kasten** es una herramienta multiplataforma que puede funcionar con otros clústeres Kubernetes (OpenShift, hiperscalers, ...). Por tanto, puede usarse para escenarios de reversibilidad o migración (K10 gestiona las adaptaciones necesarias mediante *transformaciones*, por ejemplo un cambio de *ingress-class*), pero también para "refresh" (por ejemplo, restauración planificada de un entorno productivo en preproducción).

- (opcional): **Autenticación SSO** con un Identity Provider externo OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA y información sobre el soporte
- **Disponibilidad garantizada (producción 3 AZ)**: 99,90 %
- **Soporte**: N1/N2/N3 incluidos para el ámbito base (infraestructura y operadores estándar).
- **Compromiso de tiempo de recuperación (ETR)**: según el contrato marco Cloud Temple.
- **Mantenimiento (MCO)**: actualizaciones regulares de Talos / Kubernetes / operadores estándar por parte de la MSP, sin interrupción del servicio (actualización progresiva).

Los plazos de atención y recuperación dependen de la severidad del incidente, conforme a la escala de soporte (P1 a P4).

## Política de versiones y ciclo de vida
- **Kubernetes soportado:** N-2 (3 versiones principales al año, aproximadamente cada 4 meses). Cada versión se soporta oficialmente durante 12 meses, lo que garantiza una ventana de soporte de Cloud Temple de hasta 16 meses por versión.
- **Talos OS:** alineado con las versiones estables de Kubernetes.
  - Cada rama se mantiene aproximadamente 12 meses (incluyendo parches de seguridad).
  - Ritmo de actualización recomendado: 3 veces al año, en coherencia con las actualizaciones de Kubernetes.
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

| **AZ**  | **Máquina**         | **vCores** | **RAM**  | **Almacenamiento local**         |
|---------|---------------------|------------|----------|----------------------------------|
| AZ07    | Git Runner          | 4          | 8 GB     | SO: 30 GB                        |
| AZ05    | Control Plane 1     | 8          | 12 GB    | SO: 64 GB                        |
| AZ06    | Control Plane 2     | 8          | 12 GB    | SO: 64 GB                        |
| AZ07    | Control Plane 3     | 8          | 12 GB    | SO: 64 GB                        |
| AZ05    | Storage Node 1      | 12         | 24 GB    | SO: 64 GB + Ceph 500 GB como mínimo (*) |
| AZ06    | Storage Node 2      | 12         | 24 GB    | SO: 64 GB + Ceph 500 GB como mínimo (*) |
| AZ07    | Storage Node 3      | 12         | 24 GB    | SO: 64 GB + Ceph 500 GB como mínimo (*) |
| AZ05    | Worker Node 1 (**)  | 12         | 24 GB    | SO: 64 GB                        |
| AZ06    | Worker Node 2 (**)  | 12         | 24 GB    | SO: 64 GB                        |
| AZ07    | Worker Node 3 (**)  | 12         | 24 GB    | SO: 64 GB                        |

(*) : Cada nodo de almacenamiento incluye un mínimo de 500 GB de espacio en disco, para un almacenamiento útil distribuido de Ceph de 500 GB (los datos se replican en cada AZ, por lo tanto x3). El espacio libre disponible para el cliente es aproximadamente de 350 GB. Este tamaño inicial puede aumentarse durante la construcción o más adelante, según las necesidades.

(**) : El tamaño y el número de nodos worker pueden ajustarse según la capacidad de cálculo requerida por el cliente. El número mínimo de nodos worker es de 3 (1 por AZ), y se recomienda aumentar su número en lotes de 3 para mantener una distribución multi-zonal coherente. El tamaño de los nodos worker puede adaptarse, con un mínimo de 12 núcleos y 24 GB de RAM; el límite superior por nodo worker está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente hasta 112 núcleos/1536 GB de RAM con servidores Performance 3). El número máximo de nodos worker es de 100. El CNCF recomienda tener nodos worker de tamaño idéntico. El límite de pods por nodo worker es de 110.

### Dev/Test
<img src={archi_overview_1az} />

Para una versión "dev/test", se despliegan las siguientes máquinas:

| **AZ**  | **Máquina**       | **vCores** | **RAM**  | **Almacenamiento local**         |
|---------|-------------------|------------|----------|----------------------------------|
| AZ0n  | Git Runner       | 4          | 8 GB     | SO: 30 GB                        |
| AZ0n  | Control Plane    | 8          | 12 GB    | SO: 64 GB                        |
| AZ0n  | Worker Node 1 (**) | 12         | 24 GB    | SO: 64 GB + Ceph 300 GB como mínimo (*) |
| AZ0n  | Worker Node 2 (**) | 12         | 24 GB    | SO: 64 GB + Ceph 300 GB como mínimo (*) |
| AZ0n  | Worker Node 3 (**) | 12         | 24 GB    | SO: 64 GB + Ceph 300 GB como mínimo (*) |

(*) : Se utilizan 3 nodos Worker como nodos de almacenamiento y se entregan con un mínimo de 300 GB de espacio en disco, para un almacenamiento útil distribuido de 300 GB (los datos se replican tres veces). El espacio libre disponible para el cliente es de aproximadamente 150 GB. Este tamaño inicial puede ampliarse durante la construcción o más adelante, según las necesidades.

(**) : El tamaño y el número de nodos Worker pueden ajustarse según las necesidades de capacidad de cálculo del cliente. El número mínimo de nodos Worker es de 3 (debido a la replicación del almacenamiento). El tamaño de los nodos Worker puede adaptarse, con un mínimo de 12 núcleos y 24 GB de RAM; el límite superior por nodo Worker está determinado por el tamaño de los hipervisores utilizados (por lo tanto, potencialmente hasta 112 núcleos/1536 GB de RAM con placas Performance 3). El número máximo de nodos Worker es de 250. El CNCF recomienda tener nodos Worker del mismo tamaño. El límite de pods por nodo Worker es de 110.

## RACI

### Architecture & Infrastructure

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the overall architecture of the Kubernetes service                   | C          | RA                     |
| Size the Kubernetes service (number of nodes, resources)                    | C          | RA                     |
| Install the Kubernetes service with default configuration                   | I          | RA                     |
| Configure the Kubernetes service                                            | C          | RA                     |
| Set up the base network for the Kubernetes service                          | I          | RA                     |
| Deploy initial configuration for identities and access                      | C          | RA                     |
| Define scaling and high availability strategy                               | C          | RA                     |

### Gestión de proyectos y aplicaciones empresariales

| **Actividad**                                          | **Cliente** | **Cloud Temple** |
|--------------------------------------------------------|-------------|------------------------|
| Crear y gestionar los proyectos Kubernetes            | RA          | I*                     |
| Desplegar y gestionar las aplicaciones en Kubernetes   | RA          | I*                     |
| Configurar las pipelines CI/CD                         | RA          | I*                     |
| Gestionar las imágenes de contenedores y los registros | RA          | I*                     |

* puede pasar a "C" según el contrato de infraestructura gestionada

### Monitoreo y rendimiento

| **Actividad**                                           | **Cliente** | **Cloud Temple** |
|---------------------------------------------------------|-------------|------------------------|
| Monitorear el rendimiento del servicio Kubernetes       | I           | RA*                    |
| Monitorear el rendimiento de las aplicaciones           | RA          |                        |
| Gestionar las alertas relacionadas con el servicio Kubernetes | I           | RA*                    |
| Gestionar las alertas relacionadas con las aplicaciones | RA          |                        |

(*) : *Únicamente en clúster de Producción. En Dev/Test, el cliente tiene autonomía total y responsabilidad plena.*

### Maintenance and Infrastructure Updates

| **Activity**                                             | **Client** | **Cloud Temple** |
|----------------------------------------------------------|------------|------------------------|
| Update Kubernetes/OS service                             | C          | RA                     |
| Apply security patches to Kubernetes                     | C          | RA                     |
| Update deployed applications (operators*)                | C          | RA                     |

*Operator package included in Managed Kube - see sections: Managed Helm Packages

### Security

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Manage security for the Kubernetes service                                   | RA         | RA*                    |
| Configure and manage pod security policies                                   | RA         | I                      |
| Manage SSL/TLS certificates for the Kubernetes service                  | C          | RA*                    |
| Manage SSL/TLS certificates for applications                       | RA         | I                      |
| Implement and manage Role-Based Access Control (RBAC) for base roles        | C          | R*                     |
| Implement and manage Role-Based Access Control (RBAC) for client roles     | RA         | I                      |

(*) : *Production cluster only. In Dev/Test, the client has full autonomy and responsibility.*

### Backup and Disaster Recovery

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the backup strategy for the Kubernetes service                        | I         | RA                    |
| Implement and manage backups for the Kubernetes service                      | I         | RA                    |
| Define the backup strategy for applications                                  | RA*         | I*                   |
| Implement and manage backups for applications                                | RA*         | I*                   |
| Test disaster recovery procedures for the Kubernetes service                | CI         | RA                   |
| Test disaster recovery procedures for applications                           | RA*         | CI*                   |

*May change to "CI | RA" depending on the managed services contract

### Soporte y resolución de problemas

| **Actividad**                                              | **Cliente** | **Cloud Temple** |
|-----------------------------------------------------------|-------------|------------------------|
| Proporcionar soporte de nivel 1 para la infraestructura   | I           | RA                     |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura | I           | RA                     |
| Resolver problemas relacionados con el servicio Kubernetes | C           | RA                     |
| Resolver problemas relacionados con las aplicaciones      | RA          | I                      |

### Gestión de capacidades y evolución

*Únicamente en clúster de producción. En desarrollo/pruebas, el cliente tiene total autonomía y responsabilidad.*

| **Actividad**                                             | **Cliente** | **Cloud Temple** |
|-----------------------------------------------------------|-------------|------------------------|
| Supervisar el uso de los recursos de Kubernetes          | C           | RA                     |
| Planificar la evolución de las capacidades del servicio  | RA          | C                      |
| Implementar los cambios en las capacidades               | I           | RA                     |
| Gestionar la evolución de las aplicaciones y sus recursos| RA          | I                      |

### Documentación y cumplimiento

| **Actividad**                                                  | **Cliente** | **Cloud Temple** |
|---------------------------------------------------------------|-------------|------------------------|
| Mantener la documentación del servicio Kubernetes             | I           | RA                     |
| Mantener la documentación de las aplicaciones                 | RA          | I                      |
| Asegurar el cumplimiento del servicio Kubernetes              | I           | RA                     |
| Asegurar el cumplimiento de las aplicaciones                  | RA          | I                      |
| Realizar auditorías del servicio Kubernetes                   | I           | RA                     |
| Realizar auditorías de las aplicaciones                       | RA          | I                      |

### Kubernetes Operators/CRD Management (included in the offer)

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Provisioning of the default Operators catalog                             | CI         | RA                     |
| Updating Operators                                                        | CI         | RA                     |
| Monitoring Operators' status                                              | CI         | RA                     |
| Troubleshooting issues related to Operators                               | CI         | RA                     |
| Managing Operator permissions                                             | CI         | RA                     |
| Managing Operator resources (addition/removal)                            | CI         | RA                     |
| Backing up Operator resources data                                        | CI         | RA                     |
| Monitoring Operator resources                                             | CI         | RA                     |
| Restoring Operator resources data                                         | CI         | RA                     |
| Security auditing of Operators                                            | CI         | RA                     |
| Operator support                                                          | CI         | RA                     |
| License management for operators                                          | CI         | RA                     |
| Management of specific support plans for operators                        | CI         | RA                     |

*Operator package included in Managed Kube – see chapters: Managed Helm Packages

### Management of Kubernetes applications/operators/CRDs (client side)

*Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Deployment of CRDs                                                        | I*         | RA*                    |
| Updating operators                                                        | RA         | I                     |
| Monitoring operator status                                                | RA         | I                     |
| Troubleshooting issues related to operators                               | RA         | I                     |
| Managing operator permissions                                             | RA         | I                     |
| Managing operator resources (addition/removal)                            | RA         | I                     |
| Backing up operator resource data                                         | RA         | I                     |
| Monitoring operator resources                                             | RA         | I                     |
| Restoring operator resource data                                          | RA         | I                     |
| Security auditing of operators                                            | RA         | I                     |
| Operator support                                                          | RA         | I                     |
| License management for operators                                          | RA         | I                     |
| Management of specific support plans for operators                        | RA         | I                     |

Some operator services may be managed depending on the managed services contract.

*May change to "A | RC" depending on the managed services contract

### Aplicación de soporte

| **Actividad**                                | **Cliente** | **Cloud Temple** |
|---------------------------------------------|------------|------------------------|
| Soporte aplicativo (prestación externa)     | RA         | I                      |

Un soporte aplicativo puede proporcionarse mediante una prestación complementaria.

### RACI (synthetico)

- Cloud Temple: responsable y actor (RA) del núcleo Kubernetes, seguridad del clúster, copias de seguridad de infraestructura, supervisión y CRD.
- Cliente: responsable y actor (RA) de los proyectos aplicativos, operadores de negocio, pipelines CI/CD, copias de seguridad aplicativas.
- Zona "gris": adaptaciones y extensiones (IAM, operadores específicos, fortalecimiento de conformidad/seguuridad del clúster) – facturadas en modo proyecto.