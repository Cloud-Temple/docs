---
title: Conceptos
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentación de RedHat OpenShift

**Red Hat OpenShift** es una plataforma de contenedores empresarial que automatiza el despliegue, la gestión y el escalado de aplicaciones en contenedores. Es una plataforma construida alrededor de Docker, un sistema de contenedorización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y Kubernetes, un sistema de orquestación de contenedores que gestiona la ejecución y coordinación de contenedores en un clúster de servidores.

### Características principales de Red Hat OpenShift:

- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones automatizando rutinas de gestión como el escalado, la salud y el ciclo de vida de los contenedores. Proporciona un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte para múltiples lenguajes y servicios:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caché y bases de datos, permitiendo a los desarrolladores centrarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan el pipeline de desarrollo de software, desde el commit inicial hasta el despliegue en producción, promoviendo así las prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la monitorización, gestión del rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con seguridad integrada, ofreciendo controles de acceso basados en roles, separación de tareas y gestión automatizada de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza la utilización de recursos, reduce el tiempo de comercialización y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente el escalado de aplicaciones para responder a las variaciones de la demanda.
- **Seguridad y conformidad:** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y conformidad.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones en contenedores, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### RedHat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de manera transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para aplicaciones en contenedores, apoyando así los entornos de desarrollo modernos centrados en contenedores y microservicios. ODF está diseñado para simplificar y automatizar la gestión de datos en entornos de nube híbrida y multinube, proporcionando una base sólida para aplicaciones empresariales críticas.

#### Características clave de OpenShift Data Foundation:

- **Almacenamiento persistente:** ODF proporciona una capa de almacenamiento persistente para contenedores, esencial para aplicaciones empresariales como bases de datos, sistemas de gestión de contenido y aplicaciones que requieren un estado persistente.

- **Multinube e híbrido:** Diseñado para la nube híbrida y multinube, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos de nube, facilitando la movilidad de aplicaciones y datos.

- **Automatización y orquestación:** La integración profunda con Kubernetes y OpenShift permite a ODF automatizar el aprovisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento en función de las necesidades de las aplicaciones.

- **Alta disponibilidad y resiliencia:** ODF utiliza la replicación y las instantáneas de datos para garantizar la alta disponibilidad y durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de datos:** La solución integra características de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y conformidad personalizables.

#### Beneficios de OpenShift Data Foundation:

- **Flexibilidad operativa:** ODF permite a las empresas gestionar eficazmente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a los requisitos cambiantes de las aplicaciones modernas.

- **Simplificación de la gestión de datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera recursos de TI para centrarse en iniciativas de mayor valor añadido.

- **Optimización de costes:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costes evitando el sobreaprovisionamiento y utilizando más eficientemente los recursos disponibles.

- **Mejora del rendimiento:** ODF está diseñado para proporcionar un alto rendimiento para aplicaciones empresariales, con capacidades de optimización para diferentes tipos de cargas de trabajo.

Red Hat OpenShift Data Foundation es una solución avanzada de almacenamiento de datos que mejora la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al proporcionar un almacenamiento persistente, automatizado y seguro, ODF juega un papel crucial en la habilitación de las empresas para explotar plenamente el potencial de las tecnologías de contenedores y nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en [**tres zonas de disponibilidad distintas**](../additional_content/concepts_az.md) dentro de una misma [región](../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura tri-zonal aumenta significativamente la disponibilidad y la resiliencia de los datos.

La plataforma se compone de un plano de control y nodos de trabajo, todos gestionados por la infraestructura de Cloud Temple. El plano de control está repartido equitativamente en las tres zonas de disponibilidad, asegurando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por cuchillas de cálculo, dispuestas de manera que cada zona de disponibilidad contenga una.

Para los nodos de trabajo, hay disponibles varios tipos de cuchillas de cálculo, permitiendo así una adaptación flexible a diversas necesidades operativas:

| Unidades de trabajo Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unidad                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plano de control - 3 nodos - Región FR1                                                                          | 1 plan dedicado            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 GB de RAM - 512 GB FLASH 1500 iops)                      | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 GB de RAM - 512 GB FLASH 1500 iops)                   | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 GB de RAM - 512 GB FLASH 1500 iops)                | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 GB de RAM - 512 GB FLASH 1500 iops)                 | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 TB de RAM - 512 GB FLASH 1500 iops)                    | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 GB de RAM - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 workers dedicados + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift de Cloud Temple están disponibles en pago por uso o en reserva de 12 meses.

**Notas**:

1. *El mantenimiento en condiciones operativas y de seguridad del plano de control es responsabilidad de Cloud Temple como parte de un servicio PaaS.*

2. *A 15 de junio de 2024, la versión 1 de la plataforma está voluntariamente limitada por software a un plano de control de 30 nodos de trabajo (independientemente del tipo de worker) y a un almacenamiento persistente global de 50 TB. Si estos límites son bloqueantes para su proyecto, póngase en contacto con el soporte.*

3. *Cada nodo de trabajo se entrega con 512GB de almacenamiento flash en bloque, lo que hace 1.5 TB para cada unidad de trabajo (1 worker por AZ).*

4. *Un nodo worker puede gestionar hasta 250 pods por defecto. Este número es ajustable mediante el parámetro podsPerCore - por ejemplo, con 10 pods por núcleo en un nodo de 4 núcleos, tendrá un máximo de 40 pods. Para más detalles técnicos, consulte la [documentación sobre la gestión de pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) y la [guía de límites de OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *La oferta PaaS Openshift incluye nativamente el acceso a las 3 zonas de disponibilidad, sin que sea necesario suscribirse a ellas adicionalmente.*

6. *Es posible añadir posteriormente almacenamiento en bloque al clúster Openshift.*

7. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un mayor número de nodos a una sola zona.*

### Oferta RedHat desplegada en el marco de la plataforma Openshift Cloud Temple

La plataforma es una Redhat Openshift 4 basada en [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e incluye [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Estrategia de respaldo de su plataforma PaaS Openshift

El respaldo y la restauración de la plataforma PaaS Openshift es responsabilidad de Cloud Temple para la parte **ETCD** como parte de la gestión de la plataforma. **El respaldo y la restauración para la parte de despliegue y datos de aplicación es responsabilidad del Cliente**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para responder a las necesidades en materia de protección de datos, ofrece funcionalidades robustas para el respaldo, la restauración, la migración y la recuperación ante desastres. Kasten K10 se integra de manera nativa con los entornos Kubernetes, ya sean gestionados en clústeres cloud o en sitio, y puede adaptarse a diferentes casos de uso, especialmente la migración de clústeres entre diferentes distribuciones Kubernetes como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los casos de uso principales de Kasten K10 es **la migración de clústeres entre diferentes plataformas Kubernetes**. Ya sea para una transición hacia una infraestructura más robusta o para consolidar los entornos existentes, Kasten K10 ofrece herramientas simples y eficaces para gestionar estas migraciones:

 - **Respaldo y protección de datos**: durante la migración de un clúster Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine o OpenShift, el primer paso es respaldar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias, así como los volúmenes de datos asociados. Esto incluye el respaldo de volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 soporta una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estos respaldos son luego almacenados de manera segura con opciones de cifrado y control de acceso granular, garantizando la seguridad de los datos a lo largo del proceso.

 - **Portabilidad y migración**: la migración entre distribuciones Kubernetes como Vanilla o Tanzu y soluciones Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias de arquitecturas y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso proporcionando una capa de abstracción para la portabilidad de aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y los datos de un clúster fuente a un clúster destino, teniendo en cuenta las especificidades de cada entorno. Por ejemplo, los objetos Kubernetes como ConfigMaps, Secrets, PV, así como los CRDs (Custom Resource Definitions) pueden ser migrados teniendo en cuenta las restricciones propias de cada distribución Kubernetes, ya sea un clúster Red Hat OpenShift o Kubernetes Engine. El proceso está automatizado, lo que reduce considerablemente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, según las necesidades, y ofrece una visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y el seguimiento de la transición.

 - **Compatibilidad multinube y multidistribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multinube, lo que lo convierte en una herramienta ideal para las organizaciones que buscan migrar aplicaciones de clústeres Tanzu o Vanilla hacia entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras en sitio. Esto garantiza una flexibilidad máxima y permite a los equipos DevOps elegir el mejor entorno en función de las necesidades de negocio o de las estrategias de modernización de infraestructura.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y respaldo sin requerir una experiencia profunda de cada plataforma Kubernetes. La solución también está equipada con funcionalidades de automatización que permiten definir políticas de migración y respaldo recurrentes, integrándose a los pipelines CI/CD para operaciones continuas. Los usuarios pueden planificar migraciones o restauraciones en función de ventanas de mantenimiento, realizar pruebas de validación después de la migración y automatizar los procesos de conmutación en caso de problema en el clúster fuente.

 - **Seguridad y conformidad**: en el marco de migraciones hacia entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y la conformidad con las normas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 asegura el cifrado de datos en tránsito y en reposo, ofreciendo al mismo tiempo opciones de auditoría y trazabilidad de las operaciones de respaldo y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sea en entornos de producción o de prueba. Kasten K10 es una solución imprescindible para las empresas que desean migrar eficazmente y con total seguridad clústeres Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine o OpenShift.

 La facturación se realiza por número de nodos de trabajo.

| Unidades de trabajo Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unidad     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Atención, el volumen de disco necesario para el buen funcionamiento de su respaldo debe preverse en el entorno de recepción de su respaldo, generalmente en almacenamiento S3. No está incluido en las unidades de trabajo Openshift o Kasten.*

**(1)** _OADP no está instalado nativamente en el clúster. Solo Kasten está activado para la gestión de migraciones, respaldos y restauración_

## Derechos y Permisos

Aquí están los principales permisos implementados:

|       Grupo       |         de API          |                                                                                       Recursos Permisos                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Todos         |                                                                                    los recursos (*) Get, List                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Diversos recursos personalizados relacionados con Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Límites actuales de la oferta Redhat Openshift en entorno SecNumCloud

Aquí hay algunas limitaciones inducidas por la calificación SecNumCloud:

### Plano de control dedicado

Las cargas de trabajo no pueden ejecutarse en el plano de control debido a las restricciones inherentes a la gestión de recursos y a la seguridad de la plataforma OpenShift en SecNumCloud.

### Prohibición de desplegar imágenes con privilegios elevados (rootless)

Para cumplir con los requisitos de seguridad del referencial SecNumCloud, es obligatorio utilizar contenedores sin privilegios (rootless).

Este enfoque refuerza la seguridad global al impedir cualquier acceso privilegiado a los contenedores. Las aplicaciones que requieren contenedores con privilegios deberán ser modificadas, ya que su despliegue no será autorizado.

Esta restricción se extiende también a los Helm Charts y operadores que utilizan imágenes no rootless, haciendo imposible su despliegue dentro de la infraestructura.

### Restricciones sobre los derechos de ClusterRole

En el marco de nuestra oferta OpenShift, implementamos una gestión rigurosa de los derechos de acceso a nivel del clúster, conforme a los requisitos SecNumCloud.

Este enfoque implica una limitación de los ClusterRoles para nuestros clientes, restringiendo así ciertos aspectos de la gestión global del clúster. Aunque esta medida puede inicialmente parecer restrictiva, tiene como objetivo reforzar la seguridad y la estabilidad de la infraestructura.

Somos conscientes de que esto puede generar desafíos técnicos, especialmente en la configuración de parámetros avanzados, y potencialmente implicaciones relacionadas con la adaptación de sus aplicaciones o la adquisición de herramientas complementarias.

Nuestro equipo de soporte está disponible para guiarle y aconsejarle sobre este tema.

### El contexto SCC no puede ser modificado en el entorno SecNumCloud

Las Security Context Constraints (SCC) están sujetas a restricciones estrictas y no pueden ser modificadas por los usuarios. Esta limitación tiene repercusiones significativas en el despliegue y la ejecución de contenedores.

En la práctica, esto significa que los parámetros de ejecución de los contenedores, como los privilegios de acceso al sistema o las capacidades Linux, están predefinidos y no son personalizables.

Esta medida, motivada por requisitos de seguridad, tiene como objetivo impedir cualquier acceso no autorizado a los recursos críticos del clúster. Por consiguiente, las aplicaciones que requieren contextos de seguridad específicos, especialmente aquellas que requieren acceso privilegiado, pueden encontrar obstáculos durante el despliegue.

Desde un punto de vista técnico, esto puede implicar una revisión de la arquitectura de las aplicaciones y una adaptación de los procesos de despliegue para conformarse a los SCC predefinidos. Desde un punto de vista operativo, esta restricción puede reducir la flexibilidad de los despliegues y aumentar la complejidad de gestión de ciertas aplicaciones en el entorno OpenShift, en particular aquellas que utilizan Helm Charts u operadores que no respetan los SCC vigentes.

### Limitaciones sobre las Custom Resource Definitions (CRDs)

Para cumplir con la calificación SecNumCloud, una restricción importante concierne al uso de Custom Resource Definitions (CRDs) y controladores personalizados. Esta medida, relacionada con los derechos sobre el clúster, tiene como objetivo prevenir el despliegue de recursos personalizados potencialmente inestables o no autorizados.

Esta limitación se aplica también a los operadores y Helm Charts, con un impacto directo en los derechos RBAC, ya que los CRDs permiten extender la API de Kubernetes. Por consiguiente, los operadores y Helm Charts deben pasar por una cadena de certificación con nuestros servicios para garantizar su conformidad y seguridad.

Los CRDs personalizados, especialmente aquellos que responden a necesidades de negocio específicas, pueden ser rechazados en la infraestructura debido a los riesgos que presentan para la estabilidad y seguridad de la plataforma. Esta política, diseñada para proteger la integridad y fiabilidad del clúster, solo autoriza los CRDs provenientes de operadores o Helm Charts oficialmente certificados.

Nuestro equipo de soporte está disponible para guiarle y aconsejarle sobre las buenas prácticas a adoptar en este marco.

### No hay soporte de IPs dinámicas para los runners

La plataforma OpenShift SecNumCloud exige que los runners sean configurados con direcciones IP fijas. Este requisito está motivado por la necesidad de autorizar las IPs que administran nuestra consola Cloud Temple, necesaria para la herramienta de gestión de acceso a las API. Las direcciones IP autorizadas también se utilizan para acceder a la API OpenShift así como a las interfaces de administración de OpenShift y Shiva.

Por consiguiente, el uso de direcciones IP dinámicas no está soportado para estos componentes, imponiendo la configuración de IPs fijas para garantizar la seguridad y el acceso a las API.

## Balanceadores de carga

El entorno SecNumCloud Openshift ofrece opciones de balanceo de carga a diferentes niveles para garantizar una gestión segura y eficiente del tráfico. La API del balanceador de carga es accesible a través de los puertos 6443 y 443, con un control de seguridad asegurado por una lista blanca gestionada por la consola Cloud Temple. Esta API utiliza una dirección IP pública conectada a nuestro backbone, pero no es accesible por defecto, reforzando así la seguridad de los accesos.

Para el balanceador de carga privado, el entorno utiliza Ingress (nginx) como solución por defecto, lo que permite gestionar el tráfico interno de manera eficiente. Además, se dispone de soporte TCP a través de la infraestructura IaaS de Cloud Temple, ofreciendo así una flexibilidad adicional para las aplicaciones que requieren un balanceo de carga a este nivel.

En cuanto al balanceador de carga público, el soporte de nivel 4 se asegura a través de Ingress, aunque existen actualmente algunas limitaciones con el comando "expose". Esto significa que el sistema es capaz de gestionar conexiones TCP y UDP de manera fiable mientras continúa evolucionando para ofrecer una mayor compatibilidad y flexibilidad.

**Nota**: el balanceador de carga integrado no hace las veces de WAF. Se prevé una oferta WAF as a Service para el segundo semestre de 2025.

## Bueno saber

• Si los componentes de hardware a nivel de la plataforma se vuelven obsoletos y es necesaria una migración hacia nuevos recursos de cálculo, Cloud Temple se encarga de todas las migraciones de hardware sin coste adicional y sin interrupción del servicio.

• Para probar OpenShift, Cloud Temple no proporciona un entorno dedicado, pero puede utilizar [las plataformas de prueba RedHat](https://www.redhat.com/fr/technologies/cloud-computing
