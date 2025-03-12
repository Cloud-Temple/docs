---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'


## Presentación de RedHat Openshift

**Red Hat OpenShift** es una plataforma de contenedores empresarial que automatiza el despliegue, la gestión y la escalabilidad de aplicaciones en contenedores. Es una plataforma construida alrededor de Docker, un sistema de contenerización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y Kubernetes, un sistema de orquestación de contenedores que gestiona la ejecución y coordinación de los contenedores en un clúster de servidores.

### Principales características de Red Hat OpenShift:

- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones al automatizar rutinas de gestión como la escalabilidad, la salud y la duración de los contenedores. Proporciona un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte de múltiples lenguajes y servicios:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caché y bases de datos, permitiendo así a los desarrolladores concentrarse en el código en lugar de la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan el pipeline de desarrollo de software, desde el commit inicial hasta el despliegue en producción, fomentando así las prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la monitorización, gestión del rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con una seguridad integrada, ofreciendo controles de acceso basados en roles, la separación de tareas y la gestión automatizada de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de recursos, reduce el tiempo de puesta en el mercado y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente la escalabilidad de las aplicaciones para responder a las variaciones de la demanda.
- **Seguridad y conformidad:** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y conformidad.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones en contenedores, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de manera transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para las aplicaciones en contenedores, apoyando así los entornos de desarrollo modernos enfocados en contenedores y microservicios. ODF está diseñada para simplificar y automatizar la gestión de datos en entornos de nube híbrida y multicloud, proporcionando una base sólida para las aplicaciones empresariales críticas.

#### Características clave de OpenShift Data Foundation:

- **Almacenamiento Persistente:** ODF proporciona una capa de almacenamiento persistente para los contenedores, esencial para aplicaciones empresariales como bases de datos, sistemas de gestión de contenido y aplicaciones que requieren un estado persistente.

- **Multicloud e Híbrido:** Diseñado para la nube híbrida y multicloud, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos de nube, facilitando la movilidad de aplicaciones y datos.

- **Automatización y Orquestación:** La profunda integración con Kubernetes y OpenShift permite que ODF automatice el aprovisionamiento, la escalabilidad y la gestión del ciclo de vida del almacenamiento según las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza la replicación y el snapshotting de datos para garantizar la alta disponibilidad y durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de Datos:** La solución integra funcionalidades de seguridad avanzadas, tales como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y conformidad personalizables.

#### Ventajas de OpenShift Data Foundation:

- **Flexibilidad Operacional:** ODF permite a las empresas gestionar eficientemente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a las cambiantes demandas de las aplicaciones modernas.

- **Simplificación de la Gestión de Datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera recursos de TI para concentrarse en iniciativas de mayor valor añadido.

- **Optimización de Costos:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costos al evitar el sobreaprovisionamiento y utilizar más eficientemente los recursos disponibles.

- **Mejora del Rendimiento:** ODF está diseñada para proporcionar un rendimiento elevado para las aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución de almacenamiento de datos avanzada que refuerza la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF juega un papel crucial en la habilitación de las empresas para explotar plenamente el potencial de las tecnologías de contenedores y nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en [**tres zonas de disponibilidad distintas**](../additional_content/concepts_az.md) dentro de una misma [región](../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura de tres zonas aumenta significativamente la disponibilidad y resiliencia de los datos.

La plataforma se compone de un plano de control y nodos de trabajo, todos gestionados por la infraestructura de Cloud Temple. El plano de control está distribuido equitativamente en las tres zonas de disponibilidad, asegurando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por blades de cómputo, dispuestos de manera que cada zona de disponibilidad contenga uno.

Para los nodos de trabajo, varios tipos de blades de cómputo están disponibles, permitiendo así una adaptación flexible a diversas necesidades operacionales:

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unité                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan de contrôle - 3 nœuds - Région FR1                                                                          | 1 plan dédié            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go de ram - 512 Gio FLASH 1500 iops)                      | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go de ram - 512 Gio FLASH 1500 iops)                   | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go de ram - 512 Gio FLASH 1500 iops)                | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go de ram - 512 Gio FLASH 1500 iops)                 | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To de ram - 512 Gio FLASH 1500 iops)                    | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go de ram - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 workers dédiés + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift Cloud Temple están disponibles en pago por uso o en reserva de 12 meses.

**Notas**:

1. *El mantenimiento operacional y de seguridad del plano de control es responsabilidad de Cloud Temple como parte de un servicio PaaS.*

2. *El 15 de junio del 2024, la versión 1 de la plataforma está deliberadamente limitada a nivel de software a un plano de control con 30 nodos de trabajo (del tipo que sea) y un almacenamiento persistente global de 50 Tio. Si estos límites son bloqueantes para su proyecto, por favor comuníquese con el soporte.*

3. *Cada nodo de trabajo viene con 512Gio de almacenamiento flash Bloque, lo que hace 1.5 Tio por cada unidad de obra (1 trabajador por AZ).*
4. *Un nodo worker puede gestionar hasta 250 pods por defecto. Este número es ajustable a través del parámetro podsPerCore; por ejemplo, con 10 pods por núcleo en un nodo de 4 núcleos, tendrás un máximo de 40 pods. Para obtener más detalles técnicos, consulta la [documentación sobre la gestión de los pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) y la [guía de límites de OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *La oferta PaaS Openshift incluye nativamente el acceso a las 3 zonas de disponibilidad, sin necesidad de suscripción adicional.*

6. *Es posible añadir almacenamiento en bloque al clúster Openshift posteriormente.*

7. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un mayor número de nodos a una sola zona.*

### Oferta RedHat desplegada en el marco de la plataforma Openshift Cloud Temple

La plataforma es una Redhat Openshift 4 basada en [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e incluye [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Estrategia de respaldo de su plataforma PaaS Openshift

La copia de seguridad y la restauración de la plataforma PaaS Openshift es responsabilidad de Cloud Temple para la parte de **ETCD** en términos de gestión de la plataforma. **La copia de seguridad y la restauración para la parte de despliegue y datos de aplicaciones es responsabilidad del Contratante**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), una plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para satisfacer las necesidades de protección de datos, ofrece funcionalidades robustas para la copia de seguridad, la restauración, la migración y la recuperación ante desastres. Kasten K10 se integra de manera nativa con los entornos Kubernetes, ya sea en clústeres gestionados en la nube o en sitio, y puede adaptarse a diferentes casos de uso, incluidos la migración de clústeres entre diversas distribuciones de Kubernetes, tales como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los principales casos de uso de Kasten K10 es **la migración de clústeres entre diferentes plataformas de Kubernetes**. Ya sea para una transición hacia una infraestructura más robusta o para consolidar los entornos existentes, Kasten K10 ofrece herramientas simples y eficaces para gestionar estas migraciones:

 - **Copia de seguridad y protección de datos**: durante la migración de un clúster Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine o OpenShift, el primer paso es respaldar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias y los volúmenes de datos asociados. Esto incluye la copia de seguridad de volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 es compatible con una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estas copias de seguridad se almacenan de manera segura con opciones de cifrado y control de acceso granular, garantizando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración**: la migración entre distribuciones de Kubernetes como Vanilla o Tanzu y soluciones de Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias de arquitecturas y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso proporcionando una capa de abstracción para la portabilidad de las aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y los datos de un clúster origen a un clúster destino, teniendo en cuenta las especificidades de cada entorno. Por ejemplo, los objetos de Kubernetes como los ConfigMaps, los Secrets, los PV, así como los CRDs (Custom Resource Definitions) pueden migrarse considerando las restricciones propias de cada distribución de Kubernetes, ya sea un clúster de Red Hat OpenShift o Kubernetes Engine. El proceso está automatizado, reduciendo significativamente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, según las necesidades, y ofrece visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y el monitoreo de la transición.

 - **Compatibilidad multi-cloud y multi-distribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multi-cloud, lo que lo convierte en una herramienta ideal para organizaciones que buscan migrar aplicaciones de clústeres Tanzu o Vanilla hacia entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras en sitio. Esto garantiza una flexibilidad máxima y permite a los equipos DevOps elegir el mejor entorno según las necesidades del negocio o las estrategias de modernización de infraestructura.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y copia de seguridad sin necesidad de una profunda experiencia en cada plataforma de Kubernetes. La solución también está equipada con funcionalidades de automatización que permiten definir políticas de migración y copia de seguridad recurrentes, integrándose con los pipelines CI/CD para operaciones continuas. Los usuarios pueden planificar migraciones o restauraciones según ventanas de mantenimiento, realizar pruebas de validación post-migración y automatizar los procesos de conmutación en caso de problemas en el clúster origen.

 - **Seguridad y cumplimiento**: en el contexto de migraciones hacia entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento de las normativas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 asegura el cifrado de los datos en tránsito y en reposo, al tiempo que ofrece opciones de auditoría y trazabilidad de las operaciones de copia de seguridad y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sea en entornos de producción o de prueba. Kasten K10 es una solución imprescindible para las empresas que desean migrar de manera eficiente y segura clústeres de Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine o OpenShift.

 La facturación se realiza por número de worker node.

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unité     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protección de datos de Kubernetes y movilidad de aplicaciones    | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Atención, la capacidad de disco necesaria para el correcto funcionamiento de tu backup debe preverse en el entorno de recepción de tu backup, generalmente en almacenamiento S3. No está incluida en las unidades de obra de Openshift o Kasten.*

**(1)** _OADP no está instalado de forma nativa en el clúster. Solo Kasten está activado para la gestión de migraciones, copias de seguridad y restauración._

## Derechos y Permisos

A continuación se presentan los principales permisos implementados:

|       Grupo       |         de API          |                                                                                        Permisos de recursos                                                                                         |
|--------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                            |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                  |
|config.kio.kasten.io|         Todas          |                                                                                    los recursos (*) Get, List                                                                                       |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                         |

|     Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking      |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy        |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route         |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build         |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image         |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps         |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template       |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization     |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC         |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project        |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators       |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager     |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging        |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage        |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph         |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa        |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket     |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS          |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local         |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI          |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics        |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security       |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom        |       Resources        |                                       Diverses ressources personnalisées liées à Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Limitaciones actuales de la oferta de Redhat Openshift en el entorno SecNumCloud

Estas son algunas limitaciones inducidas por la cualificación SecNumCloud:

### Plan de control dedicado

Las cargas de trabajo no pueden ejecutarse en el plan de control debido a las restricciones inherentes a la gestión de recursos y a la seguridad de la plataforma OpenShift en SecNumCloud.

### Prohibición de desplegar imágenes con privilegios elevados (rootless)

Para cumplir con los requisitos de seguridad del repositorio SecNumCloud, es obligatorio utilizar contenedores sin privilegios (rootless).

Este enfoque refuerza la seguridad global al evitar cualquier acceso privilegiado a los contenedores. Las aplicaciones que necesiten contenedores con privilegios deberán ser modificadas, ya que su despliegue no estará permitido.

Esta restricción también se extiende a los Helm Charts y a los operadores que utilizan imágenes no rootless, haciendo imposible su despliegue dentro de la infraestructura.

### Restricciones sobre los derechos de ClusterRole

En el marco de nuestra oferta OpenShift, implementamos una gestión rigurosa de los derechos de acceso a nivel del clúster, conforme a los requisitos SecNumCloud.

Este enfoque implica una limitación de los ClusterRoles para nuestros clientes, restringiendo así ciertos aspectos de la gestión global del clúster. Aunque esta medida puede parecer inicialmente restrictiva, tiene como objetivo reforzar la seguridad y estabilidad de la infraestructura.

Somos conscientes de que esto puede generar desafíos técnicos, en particular en la configuración de parámetros avanzados, y potencialmente implicaciones relacionadas con la adaptación de sus aplicaciones o la adquisición de herramientas complementarias.

Nuestro equipo de soporte está disponible para orientarle y aconsejarle sobre este tema.

### El contexto SCC no puede modificarse en el entorno SecNumCloud

Las Security Context Constraints (SCC) están sujetas a estrictas restricciones y no pueden ser modificadas por los usuarios. Esta limitación tiene repercusiones significativas en el despliegue y ejecución de contenedores.

En la práctica, esto significa que los parámetros de ejecución de los contenedores, como los privilegios de acceso al sistema o las capacidades de Linux, están predeterminados y no son personalizables.

Esta medida, motivada por requisitos de seguridad, tiene como objetivo evitar cualquier acceso no autorizado a los recursos críticos del clúster. Por lo tanto, las aplicaciones que necesiten contextos de seguridad específicos, en particular aquellas que requieran accesos privilegiados, pueden encontrar obstáculos durante el despliegue.

Desde un punto de vista técnico, esto puede implicar una revisión de la arquitectura de las aplicaciones y una adaptación de los procesos de despliegue para cumplir con las SCC predeterminadas. Desde un punto de vista operativo, esta restricción puede reducir la flexibilidad de los despliegues y aumentar la complejidad de la gestión de algunas aplicaciones en el entorno OpenShift, especialmente aquellas que utilizan Helm Charts o operadores que no cumplen con las SCC vigentes.

### Limitaciones sobre las Custom Resource Definitions (CRDs)

Para cumplir con la cualificación SecNumCloud, una restricción importante concierne al uso de las Custom Resource Definitions (CRDs) y de los controladores personalizados. Esta medida, relacionada con los derechos en el clúster, tiene como objetivo prevenir el despliegue de recursos personalizados potencialmente inestables o no autorizados.

Esta limitación también se aplica a los operadores y a los Helm Charts, con un impacto directo en los derechos RBAC, ya que las CRDs permiten extender la API de Kubernetes. Por lo tanto, los operadores y Helm Charts deben pasar por una cadena de certificación ante nuestros servicios para garantizar su conformidad y seguridad.
Les CRDs personnalisées, notamment celles répondant à des besoins métiers spécifiques, peuvent être refusées dans l'infrastructure en raison des risques qu'elles présentent pour la stabilité et la sécurité de la plateforme. Cette politique, conçue pour protéger l'intégrité et la fiabilidad del clúster, no autoriza más que las CRDs provenientes de operadores o Helm Charts oficialmente certificados.

Nuestro equipo de soporte está disponible para guiarle y asesorarle sobre las buenas prácticas a adoptar en este marco.

### No se soportan IPs Dinámicas para los runners

La plataforma OpenShift SecNumCloud exige que los runners estén configurados con direcciones IP fijas. Esta exigencia está motivada por la necesidad de autorizar las IPs que administran nuestra consola Cloud Temple, necesaria para la herramienta de gestión de acceso a las API. Las direcciones IPs autorizadas también se utilizan para acceder a la API OpenShift así como a las interfaces de administración de OpenShift y de Shiva.

Por lo tanto, el uso de direcciones IP dinámicas no está soportado para estos componentes, imponiendo la configuración de IPs fijas para garantizar la seguridad y el acceso a las API.

## Balanceadores de carga

El entorno SecNumCloud Openshift ofrece opciones de Load Balancing a diferentes niveles para garantizar una gestión segura y eficiente del tráfico. La API del Load Balancer es accesible a través de los puertos 6443 y 443, con un control de seguridad asegurado por una lista blanca gestionada por la consola Cloud Temple. Esta API utiliza una dirección IP pública conectada a nuestra backbone, pero no es accesible por defecto, reforzando así la seguridad de los accesos.

Para el Load Balancer privado, el entorno utiliza Ingress (nginx) como solución por defecto, lo que permite gestionar el tráfico interno de manera eficaz. Además, hay soporte TCP disponible a través de la infraestructura IaaS de Cloud Temple, ofreciendo así una flexibilidad adicional para las aplicaciones que requieren un balanceo de carga a este nivel.

En cuanto al Load Balancer público, el soporte de nivel 4 está asegurado a través de Ingress, aunque existen algunas limitaciones actualmente con el comando "expose." Esto significa que el sistema es capaz de gestionar conexiones TCP y UDP de manera fiable mientras sigue evolucionando para ofrecer una mayor compatibilidad y flexibilidad.

**A tener en cuenta**: el Load Balancer integrado no actúa como WAF. Se prevé una oferta de WAF as a Service para el segundo semestre de 2025.

## Importante saber

• Si los componentes hardware al nivel de la plataforma se vuelven obsoletos y es necesaria una migración a nuevos recursos de cálculo, Cloud Temple se ocupa de todas las migraciones hardware sin costo adicional y sin interrupción de servicio.

• Para probar OpenShift, Cloud Temple no proporciona un entorno dedicado, pero puede utilizar [las plataformas de prueba RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Para la automatización de su infraestructura, privilegie el proveedor Terraform oficial de OpenShift en lugar del de Cloud Temple.