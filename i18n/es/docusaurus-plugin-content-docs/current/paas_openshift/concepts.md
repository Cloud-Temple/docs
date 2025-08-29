---
title: conceptos
---

import oshiftOferta from './images/oshift_oferta.png'

## Presentación de RedHat OpenShift

**Red Hat OpenShift** es una plataforma de contenedores empresariales que automatiza el despliegue, la gestión y escalado de aplicaciones contenedorizadas. Es una plataforma construida sobre Docker, un sistema de contenerización que permite empacar una aplicación y sus dependencias en un contenedor virtual, y Kubernetes, un sistema de ociosación de contenedores, que gestiona la ejecución y coordinación de los contenedores en un clúster de servidores.

### Características principales de Red Hat OpenShift:

- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones mediante la automatización de rutinas de gestión como el escalado, la salud y la vida útil de los contenedores. Ofrece un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte multilenguaje e infraestructura:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caching y bases de datos, permitiendo a los desarrolladores centrarse en el código frente a la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan todo el pipeline de desarrollo del software, desde el commit inicial hasta el despliegue en producción, promoviendo así las prácticas DevOps.

- **Gestión operativa:** OpenShift ofrece herramientas para la monitorización, gestión de rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con una seguridad integrada, ofreciendo controles de acceso basados en roles, separación de cargas y gestión automática de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con los herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de recursos, acelera la llegada al mercado y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente el escalado de las aplicaciones para adaptarse a las variaciones en la demanda.
- **Seguridad y cumplimiento:** Gracias a sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y cumplimiento.

Red Hat OpenShift ofrece una solución integral para el desarrollo, despliegue y gestión de aplicaciones contenedorizadas, proporcionando una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### Red Hat OpenShift Data Foundation

El Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de manera transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para las aplicaciones contenedidas, apoyando así los entornos de desarrollo modernos basados en contenedores y microservicios. El ODF está diseñado para simplificar y automatizar la gestión de datos en entornos cloud híbridos y multicloud, proporcionando una base sólida para las aplicaciones empresariales críticas.

#### Características Clave del OpenShift Data Foundation:

- **Almacenamiento Persistido:** ODF ofrece una capa de almacenamiento persistente para los contenedores, esencial para las aplicaciones empresariales como bases de datos, sistemas de gestión de contenidos y aplicaciones que requieren un estado persistente.

- **Multicloud y Híbrido:** Diseñado para la nube híbrida y multicloud, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos cloud, facilitando la movilidad de las aplicaciones y los datos.

- **Automatización e Orchestración:** La integración profunda con Kubernetes y OpenShift permite que ODF automatice el provisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento en función de las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza la replicación y los snapshots de datos para garantizar la alta disponibilidad y durabilidad de los datos, esenciales para el continuo de las operaciones empresariales.

- **Seguridad de los Datos:** La solución integra funcionalidades de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y conformidad personalizables.

#### Ventajas del OpenShift Data Foundation:

- **Flexibilidad Operativa:** ODF permite a las empresas gestionar eficientemente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para adaptarse a las exigencias cambiantes de las aplicaciones modernas.

- **Simplificación del Gestión de Datos:** Al automatizar numerosas tareas de gestión de datos, ODF reduce la complejidad y libera recursos IT para centrarse en iniciativas con mayor valor añadido.

- **Optimización de Costos:** La capacidad de ODF para adaptarse dinámicamente a los requisitos de almacenamiento ayuda a optimizar los costos al evitar el sobreprovisión y utilizar de manera más eficiente las recursos disponibles.

- **Mejora de las Performance:** ODF está diseñado para proporcionar altas prestaciones para las aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución de almacenamiento de datos avanzada que fortalece la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Ofreciendo almacenamiento persistente, automatizado y seguro, ODF juega un papel crucial en permitir a las empresas explotar al máximo el potencial de las tecnologías de contenedores y cloud híbrido.

## Arquitectura general de la plataforma

### Generalities

The Red Hat OpenShift platform by Cloud Temple is designed as a regional offering, deployed natively across **three availability zones** within the same [region](../additional_content/concepts_regional.md) of Cloud Temple. This tri-zonal architecture significantly enhances the availability and data resilience.

The platform consists of a control plane and worker nodes, all managed by Cloud Temple's infrastructure. The control plane is evenly distributed across the three zones for centralized and secure management. Worker nodes are represented as compute blades arranged such that each zone has its own set.

For worker nodes, multiple types of compute blades are available, offering flexible adaptation to various operational needs:

| Red Hat OpenShift 4 with Data Foundations - On Demand - 1 month | Unit       | SKU                                                                 |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------------------------------ |
| OPENSHIFT - Control Plane - 3 nodes - Region FR1                          | 1 control plane dedicated | csp:fr1:paas:oshift:plan:payg:v1                           |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 Go RAM - 512 Gio FLASH 1500 iops)                      | 3 worker nodes dedicated | csp:fr1:paas:oshift:wkr:tiny:payg:v1                          |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x (20 cores / 40 threads - 128 Go RAM - 512 Gio FLASH 1500 iops)                   | 3 worker nodes dedicated | csp:fr1:paas:oshift:wkr:small:payg:v1                         |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 Go RAM - 512 Gio FLASH 1500 iops)                | 3 worker nodes dedicated | csp:fr1:paas:oshift:wkr:std:payg:v1                          |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 Go RAM - 512 Gio FLASH 1500 iops)                 | 3 worker nodes dedicated | csp:fr1:paas:oshift:wkr:adv:payg:v1                          |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 To RAM - 512 Gio FLASH 1500 iops)                    | 3 worker nodes dedicated | csp:fr1:paas:oshift:wkr:perf:payg:v1                         |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 Go RAM - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 worker nodes dedicated + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1                          |

Red Hat OpenShift Cloud Temple products are available for usage-based or 12-month reservation.

**Notes:**

1. *Maintaining operational readiness and security of the control plane is Cloud Temple's responsibility as a PaaS service.*


2. *As of June 15, 2024, Version 1 of the platform is software-limited to 30 worker nodes (regardless of type) and 50 TiB storage globally. If these limits are blocking your project, please contact support.*


3. *Each worker node comes with 512 Gio of flash storage, resulting in 1.5 TiB per unit of work (1 worker per AZ).*


4. *A worker node can manage up to 250 pods by default. This number can be adjusted via the `podsPerCore` parameter; for example, with 10 pods per core on a 4-core node, you can have up to 40 pods. For more technical details, refer to [Managing Pods documentation](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*


5. *The PaaS OpenShift offering includes native access to the three availability zones, without needing additional subscriptions.*


6. *It's possible to add block storage to the OpenShift cluster later.*


7. *Nodes are deployed evenly across the three zones (1 node per zone). It's not possible to unbalance a cluster by assigning more nodes to a single zone.*

### Oferta RedHat desplegada en la plataforma Openshift Cloud Temple

La plataforma se basa en Redhat Openshift 4, integrado con [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) y cuenta con [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOferta} />

## Data Protection Strategy for Your OpenShift PaaS by Cloud Temple

The responsibility for backing up and restoring the OpenShift Platform as a Service (PaaS) lies with Cloud Temple for the ETCD component of platform management. The backup and restore duties for deployment and application data are handled by the Client.

Cloud Temple provides its clients with Veeam Kasten K10, a specialized platform designed for managing data in Kubernetes environments. Tailored to meet data protection needs, Kasten K10 offers robust features for backup, restore, migration, and disaster recovery. It seamlessly integrates with Kubernetes clusters, whether managed on cloud platforms or on-premises, and adapts to various use cases, including migrating clusters between different Kubernetes distributions such as Vanilla Kubernetes, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

A primary use case for Kasten K10 is **Kubernetes cluster migration across different platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 offers straightforward tools for managing these migrations:

- **Data Backup and Protection**: During migrating Kubernetes Vanilla or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift, the initial step involves backing up application data and their states. Kasten K10 effortlessly integrates with Kubernetes APIs to identify applications, dependencies, and associated storage volumes (Persistent Volumes - PV), databases, configurations, and secrets. It supports a wide range of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.) for creating application snapshots. These backups are securely stored with encryption and granular access controls, ensuring data safety throughout the process.

- **Portability and Migration**: Migrating between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions (OpenShift, Kubernetes Engine) can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, considering each environment's unique aspects. For instance, Kubernetes objects like ConfigMaps, Secrets, PV, and Custom Resource Definitions (CRDs) can be migrated while respecting constraints specific to each Kubernetes distribution, whether it’s Red Hat OpenShift or Kubernetes Engine. The process is automated, minimizing manual error risks. Moreover, Kasten K10 enables both progressive and complete migrations, offering real-time visibility into migration status for efficient management and monitoring of transition.

- **Multi-cloud and Multi-distribution Compatibility**: Designed for hybrid and multi-cloud environments, Kasten K10 makes it an ideal tool for migrating applications from Tanzu or Vanilla clusters to Red Hat cloud platforms (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructure. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or modernization strategies.

- **Simplified Management and Automation**: Kasten K10 offers an intuitive user interface enabling administrators to manage migration and backup operations effortlessly without deep expertise in each Kubernetes distribution. The solution also includes automation features for defining recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restores based on maintenance windows, perform post-migration validation tests, and automate failover processes in case of issues on the source cluster.

- **Security and Compliance**: In critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are paramount. Kasten K10 ensures data encryption both in transit and at rest, alongside auditing and traceability options for backup and restore operations. These capabilities are crucial for ensuring the security of migrated data, whether in production or testing environments. Kasten K10 is an indispensable solution for companies aiming to migrate Kubernetes Vanilla or VMware Tanzu clusters efficiently and securely to Red Hat Kubernetes Engine or OpenShift.

Billing is based on worker nodes:

| Unit of Work - Redhat Openshift 4 with Data Foundations Backup Solution | Unit | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Please note that the required disk volume for optimal backup functionality on the reception environment (generally in S3 storage) is not included in OpenShift or Kasten worker units. It needs to be provisioned separately.*

**(1)** _OADP is not natively installed within the cluster. Only Kasten is activated for managing migrations, backups, and restores_

## Load Balancers

El entorno **SecNumCloud OpenShift** ofrece soluciones de carga de trabajo adaptadas a múltiples períodos funcionales, garantizando una gestión de tráfico segura y optimizada.

Los distribuidores de carga cubren cuatro áreas distintas, basándose en diferentes niveles del modelo OSI:

- **Acceso a herramientas de administración** (servidor API y consola OpenShift)
- **Tráfico HTTP/HTTPS público**
- **Tráfico HTTP/HTTPS privado**
- **Tráfico que requiere personalización avanzada**

### Acceso a herramientas de administración  

El acceso a los herramientas de administración está protegido por repartidores de carga dedicados, que se encuentran bajo controles de seguridad reforzados. Entre estos controladores, se incluye una lista blanca administrada a través de la consola **Templo del Cloud**, lo que garantiza un manejo exhaustivo de los permisos de acceso.

### Tráfico HTTP/HTTPS público  

Los **LoadBalancers públicos**, basados en **HAProxy**, operan en nivel 4 del modelo OSI. Permiten exponer sus cargas de trabajo en **HTTP/HTTPS** a través de **rutas** e **ingressos**, garantizando una distribución eficiente y rápida del tráfico entrante.

### Tráfico HTTP/HTTPS privado (Interconexión con sus servicios IaaS SNC)

Los **LoadBalancers privados** facilitan la comunicación con sus servicios **IaaS SNC** sin exposición pública. Al igual que sus homólogos públicos, ellos aseguran la distribución del tráfico **HTTP/HTTPS**, manteniendo un entorno seguro y aislado.

### Tráfico específico

El **tráfico específico** se gestiona a través del LoadBalancer **MetalLB**. Permite la atención de necesidades avanzadas que requieren personalización fina, como:

- Conexión a una base de datos mediante TCP
- Gestión de flujo UDP para aplicaciones en tiempo real o con baja latencia
- Enrutamiento de protocolos avanzados como QUIC o MQTT-SN, ofreciendo así mayor flexibilidad

Esta solución permite atender tus flujos específicos, ya sea para interconexiones privadas o necesidades de exposición pública.

El enrutamiento se realiza a través de direcciones IP públicas y privadas dedicadas. Por defecto, te asignan:

- **4 direcciones IP públicas**
- **254 direcciones IP privadas**

Si estas recursos no son suficientes para soportar tus cargas de trabajo, puedes solicitar a nuestros servicios la asignación adicional de direcciones IP, ya sean **públicas** o **privadas**.

> **Nota**: Los LoadBalancers integrados no cumplen las funciones de un **WAF**. Próximamente estará disponible una solución **WAF as a Service**.

## Permisos y Autorizaciones

A continuación se detallan las principales permisos implementados:

| Grupo                | API de API |                                                                 Permissions de Recursos                                                                                          |
|----------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Core                  | ("")/Apps  | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar |
| Core                  | ("")       | Secrets: Crear                                                                                                      |
| config.kio.kasten.io | Profiles    | Obtener, Listar, Escuchar, Crear, Actualizar, Patrón, Eliminar (todas las recursos)                               |
| config.kio.kasten.io | PolicyPresets, | TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings: Obtener, Listar          |
| config.kio.kasten.io | Todos       | Todas las recursos (*): Obtener, Listar                                                                                  |
| Batch                 | CronJobs    | Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar (Todos)                                          |
| Autoscaling           | HorizontalPodAutoscalers | Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                                                  |
| Networking            | Ingresses    | Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                                                        |
| Policy                | PodDisruptionBudgets | Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                                                  |
| Route                  | (OpenShift)  | Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                                                        |
| Build                  | (OpenShift)  | BuildConfigs, Builds, BuildLogs: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                |
| Image                  | (OpenShift)  | ImageStreams, ImageStreamTags: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                   |
| Apps                   | (OpenShift)  | DeploymentConfigs: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                          |
| Template               | (OpenShift)  | Templates, TemplateInstances: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                   |
| Authorization          | Roles        | RoleBindings: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                                |
| RBAC                  | Roles        | RoleBindings: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                                |
| Project                | (OpenShift)  | Proyectos: Obtener, Eliminar, Actualizar, Patrón                                                                   |
| Operators              | Subscriptions, | ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar |
| Cert-Manager           | Certificates, | CertificateRequests, Issuers, ClusterIssuers: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar  |
| Logging                 | (OpenShift)  | ClusterLogForwarders, ClusterLoggings: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar        |
| Storage                 | VolumeSnapshots | Obtener, Listar, Escuchar, Crear, Actualizar, Patrón, Eliminar                                                        |
| Ceph                    | (Rook)       | CephClusters, CephBlockPools, CephFilesystems, CephObjectStores: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar |
| NooBaa                  | BackingStores, | BucketClasses, NooBaaAccounts: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                |
| ObjectBucket           | ObjectBucketClaims, | ObjectBuckets: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                          |
| OCS                     | (OpenShift)  | StorageClusters, StorageConsumers: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar              |
| Local                   | Storage       | LocalVolumes, LocalVolumeDiscoveries: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar          |
| CSI                    | Addons        | CSIAddonsNodes, NetworkFences: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar                |
| Metrics                 | Pods         | Nodes: Obtener                                                                                                  |
| Security                | PodSecurityPolicyReviews | Crear                                                                                                   |
| Custom                  | Resourcas     | Diversas recursos personalizadas relacionadas con Kasten K10, Keycloak, etc.: Crear, Obtener, Listar, Escuchar, Actualizar, Patrón, Eliminar |

## Seguridad y restricciones en OpenShift SecNumCloud

SecNumCloud, integrado con Red Hat OpenShift, ofrece un entorno seguro y controlado para la gestión numérica. A continuación se detallan algunas de las restricciones y exigencias de seguridad clave:

### 1. **Control de Acceso**
- **Autenticación fuerte**: Se requiere el uso de autenticación multifactor (MFA) para acceder a la plataforma SecNumCloud.
- **Roles y permisos**: Implementa un sistema de roles y permisos fino-grado para controlar qué usuarios pueden realizar qué acciones dentro del entorno.
- **Auditoría**: Mantén registros detallados de todas las actividades críticas, incluyendo quién realizó una acción, cuándo y qué cambió.

### 2. **Seguridad de la Infraestructura**
- **Isolación de recursos**: SecNumCloud aprovecha la naturaleza isolada de las máquinas virtuales en OpenShift para garantizar que los datos numéricos no se comparten con otros contenedores.
- **Control de acceso a recursos**: Uso de políticas de seguridad de Red Hat OpenShift para controlar el acceso a recursos críticos como nodos, volúmenes y contenedores.

### 3. **Protección de Datos**
- **Cifrado en reposo**: Los datos numéricos se cifran tanto en tránsito como en reposo para evitar el acceso no autorizado.
- **Gestión de claves**: SecNumCloud utiliza un sistema de gestión de claves separado y seguro para la protección de las claves criptográficas.

### 4. **Control de Códigos**
- **Controles de compilación**: Implementa controles rigurosos sobre el código fuente, incluyendo auditorías de código y pruebas de seguridad antes de la integración en el entorno productivo.
- **Gestión de dependencias**: Controla las dependencias del código para evitar vulnerabilidades conocidas (CVE).

### 5. **Seguridad de la Cadena de Suministro**
- **Verificación de firmas digitales**: Verifica las firmas digitales de los paquetes y componentes antes de su instalación para garantizar su integridad.
- **Gestión de vulnerabilidades**: Mantiene un sistema de gestión de vulnerabilidades activo que alerta sobre nuevas amenazas y actualiza rápidamente las soluciones.

### 6. **Conformidad Normativa**
- **Cumplimiento normativo**: SecNumCloud ayuda a cumplir con diversas regulaciones de seguridad, como GDPR, HIPAA, entre otras, proporcionando herramientas para la gestión de datos sensibles y el control de acceso.

### 7. **Monitoreo y Detección**
- **Sistemas de detección avanzada**: Implementa soluciones de detección de amenazas (IDS/IPS) y sistemas de monitoreo continuo para identificar actividades sospechosas en tiempo real.
- **Alertas y respuesta**: Establece protocolos de alerta eficaces y procesos de respuesta rápida ante incidentes de seguridad.

### 8. **Actualizaciones y Parches**
- **Gestión de parches**: Mantén un proceso automatizado para la instalación de parches y actualizaciones críticas, asegurando que los sistemas estén siempre protegidos con las últimas correcciones de seguridad.

### 9. **Seguridad de Contenedores**
- **Controles de contenedor**: Utiliza controles de seguridad específicos para contenedores (como SELinux, AppArmor) para limitar el comportamiento de los contenedores y prevenir ataques de negligencia.
- **Segmentación de red**: Implementa segmentación de redes para aislar los contenedores sensibles del resto del entorno.

### 10. **Gestión de Incidentes**
- **Planificación de incidentes**: Desarrolla un plan integral de gestión de incidentes que incluya procedimientos de respuesta, comunicación y recuperación en caso de una violación de seguridad.

Estas restricciones y exigencias de seguridad están diseñadas para proteger los datos numéricos sensibles y garantizar la integridad del entorno OpenShift SecNumCloud, manteniendo un alto nivel de confianza en las operaciones de computación segura.

### Plan de control dedicado

La ejecución de cargas de trabajo en el **plan de control** está estrictamente prohibida. Esta restricción garantiza la seguridad y la estabilidad de la plataforma OpenShift en **SecNumCloud**, limitando el acceso a recursos críticos.

### Prohibition of containers with elevated privileges (rootless only)

In accordance with the security requirements of the **SecNumCloud repository**, only **rootless containers** are permitted. This approach enhances security by preventing any privileged access to containers.

Applications requiring elevated privileges will need to be adapted, as their deployment will not be allowed. This constraint also applies to **Helm Charts** and **operators** utilizing non-rootless images, making their use incompatible with the infrastructure.

### Restricciones sobre Roles Cluster

En nuestra oferta OpenShift, la gestión de los derechos de acceso en nivel del cluster está estrictamente regulada para garantizar **seguridad y cumplimiento** con SecNumCloud.

Esto implica restricciones sobre los Roles Cluster, limitando los privilegios globales. Aunque estas restricciones pueden requerir ajustes técnicos, son esenciales para fortalecer la resiliencia y la estabilidad del entorno.

Nuestro equipo de soporte está disponible para ayudarlo a adaptar sus configuraciones y brindarle recomendaciones sobre alternativas posibles.

### Restricciones sobre los Contextos de Seguridad (SCC)

Los **Contextos de Seguridad (SCC)** se imponen y no pueden ser modificados por los usuarios. Como resultado, los parámetros de ejecución de los contenedores (privilejos de acceso, capacidades Linux, etc.) están predefinidos e inmodificables.

Esta restricción tiene como objetivo evitar cualquier acceso no autorizado a recursos críticos del cluster. Las aplicaciones que requieren contextos de seguridad específicos deberán adaptarse para cumplir con los SCC en vigor.

Desde el punto de vista operativo, esto puede requerir ajustes arquitectónicos y modificaciones en los procesos de despliegue, especialmente para las **Chart de Helm** e **operadores** que no respetan dichas restricciones.

### Limitaciones en las Definiciones de Recursos Personalizados (CRDs)

Para garantizar la **conformidad SecNumCloud**, el uso de **Definiciones de Recursos Personalizados (CRDs)** y controles personalizados está restringido.

Esta medida, relacionada con los derechos sobre el cluster, impide el despliegue de recursos no autorizados que podrían afectar la estabilidad e integridad de la infraestructura. Aplica también a **operadores** y **Chart de Helm**, con limitaciones en los derechos **RBAC**.

Las CRDs no certificadas pueden ser rechazadas para garantizar la integridad del cluster. Solo las CRDs provenientes de operadores o Chart de Helm certificados son autorizadas tras su validación por nuestros servicios.

Nuestra equipo de soporte puede guiarlo en este proceso y asesorarle sobre las mejores prácticas a adoptar.

### Eliminación del soporte a direcciones IP dinámicas para los runners

Los **runners OpenShift SecNumCloud** deben estar configurados con **direcciones IP fijas**.

Esta requisito garantiza el acceso seguro a las **API OpenShift**, las interfaces de administración y los herramientas de gestión de acceso de la console **Cloud Temple**.

Las **direcciones IP dinámicas no se soportan**, lo que requiere una configuración adicional para garantizar la conectividad y la seguridad de los componentes.

## Conocimiento útil

• En caso de que los componentes físicos en la plataforma se vuelvan obsoletos y sea necesaria una migración hacia recursos de cálculo nuevos, Cloud Temple se ocupa de todas las migraciones materiales sin costo adicional ni interrupción del servicio.

• Para probar OpenShift, Cloud Temple no ofrece un entorno dedicado, pero puedes utilizar [los entornos de prueba RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Para la automatización de tu infraestructura, es recomendable el proveedor Terraform oficial de OpenShift.
