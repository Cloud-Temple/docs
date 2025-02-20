---
title: Concepts
---

## Presentación de RedHat Openshift

**Red Hat OpenShift** es una plataforma de contenedores empresarial que automatiza la implementación, gestión y escalado de aplicaciones contenedorizadas. Es una plataforma construida alrededor de Docker, un sistema de contenedorización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y Kubernetes, un sistema de orquestación de contenedores que gestiona la ejecución y coordinación de los contenedores en un clúster de servidores.

### Funcionalidades principales de Red Hat OpenShift:

- **Implementación y gestión automatizadas:** OpenShift simplifica el proceso de implementación de aplicaciones al automatizar las rutinas de gestión como el escalado, la salud y la vida útil de los contenedores. Proporciona un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte de múltiples lenguajes y servicios:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caché y bases de datos, permitiendo así a los desarrolladores concentrarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan el pipeline de desarrollo de software, desde el commit inicial hasta el despliegue en producción, favoreciendo así las prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la monitorización, gestión del rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con seguridad integrada, ofreciendo controles de acceso basados en roles, separación de tareas y gestión automatizada de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de los recursos, reduce el tiempo de lanzamiento al mercado y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente el escalado de las aplicaciones para responder a las variaciones de la demanda.
- **Seguridad y conformidad:** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y conformidad.

Red Hat OpenShift es una solución completa para el desarrollo, implementación y gestión de aplicaciones contenedorizadas, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de manera transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para las aplicaciones contenedorizadas, apoyando así los entornos de desarrollo modernos enfocados en contenedores y microservicios. ODF está diseñada para simplificar y automatizar la gestión de datos en entornos de nube híbrida y multicloud, proporcionando una base sólida para las aplicaciones empresariales críticas.

#### Funcionalidades Clave de OpenShift Data Foundation:

- **Almacenamiento Persistente:** ODF proporciona una capa de almacenamiento persistente para los contenedores, esencial para aplicaciones empresariales como bases de datos, sistemas de gestión de contenidos y aplicaciones que requieren un estado persistente.

- **Multicloud e Híbrido:** Diseñado para la nube híbrida y multicloud, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos de nube, facilitando la movilidad de las aplicaciones y los datos.

- **Automatización y Orquestación:** La integración profunda con Kubernetes y OpenShift permite a ODF automatizar el aprovisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento según las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza la replicación y snapshotting de datos para asegurar la alta disponibilidad y durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de los Datos:** La solución integra funcionalidades de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y conformidad personalizables.

#### Ventajas de OpenShift Data Foundation:

- **Flexibilidad Operativa:** ODF permite a las empresas gestionar eficientemente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a los requisitos cambiantes de las aplicaciones modernas.

- **Simplificación de la Gestión de Datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera recursos de IT para concentrarse en iniciativas de mayor valor añadido.

- **Optimización de Costes:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costes evitando el sobreaprovisionamiento y utilizando más eficientemente los recursos disponibles.

- **Mejora del Rendimiento:** ODF está diseñado para proporcionar un rendimiento elevado para las aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución de almacenamiento de datos avanzada que refuerza la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF juega un papel crucial en la habilitación de las empresas para explotar plenamente el potencial de las tecnologías de contenedores y nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en **tres zonas de disponibilidad distintas** dentro de una misma región de Cloud Temple. Esta arquitectura tri-zonal aumenta significativamente la disponibilidad y la resiliencia de los datos.

La plataforma se compone de un plan de control y nodos de trabajo, todos gestionados por la infraestructura Cloud Temple. El plan de control se distribuye equitativamente en las tres zonas de disponibilidad, asegurando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por blades de cómputo, dispuestas de manera que cada zona de disponibilidad contenga una.

Para los nodos de trabajo, varios tipos de blades de cómputo están disponibles, permitiendo así una adaptación flexible a diversas necesidades operativas:

| Unidades de obra Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unidad                   | SKU                                   |
| :---------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :------------------------------------ |
| OPENSHIFT - Plan de control - 3 nodos - Región FR1                                                                          | 1 plan dedicado            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go de ram - 512 Gio FLASH 1500 iops)                       | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go de ram - 512 Gio FLASH 1500 iops)                   | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go de ram - 512 Gio FLASH 1500 iops)                | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go de ram - 512 Gio FLASH 1500 iops)                 | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To de ram - 512 Gio FLASH 1500 iops)                    | 3 workers dedicados        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go de ram - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 workers dedicados + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift Cloud Temple están disponibles en pago por uso o en reserva de 12 meses.

**Notas** :

1. *El mantenimiento en condición operativa y en condición de seguridad del plan de control es responsabilidad de Cloud Temple en calidad de servicio PaaS.*

2. *Al 15 de junio de 2024, la versión 1 de la plataforma está voluntariamente limitada a nivel de software para un plan de control a 30 workers nodes (independientemente del tipo de worker) y a un almacenamiento persistente global de 50 Tio. Si estos límites son bloqueantes para su proyecto, por favor póngase en contacto con el soporte.*

3. *Cada worker node se entrega con 512Gio de almacenamiento flash Bloc, lo que hace 1.5 Tio para cada unidad de obra (1 worker por AZ).*
4. *Un nodo de trabajo puede gestionar hasta 250 pods por defecto. Este número se puede ajustar a través del parámetro podsPerCore - por ejemplo, con 10 pods por núcleo en un nodo de 4 núcleos, tendrás un máximo de 40 pods. Para más detalles técnicos, consulta la [documentación sobre gestión de pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) y la [guía de límites de OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *La oferta PaaS OpenShift incluye de forma nativa el acceso a las 3 zonas de disponibilidad, sin necesidad de suscribirse a ellas por separado.*

6. *Es posible añadir posteriormente almacenamiento de bloques al clúster OpenShift.*

7. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un mayor número de nodos a una sola zona.*

### Oferta RedHat desplegada en el marco de la plataforma OpenShift Cloud Temple

La plataforma es una RedHat OpenShift 4 basada en [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e incluye [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Estrategia de respaldo de tu plataforma PaaS OpenShift

El respaldo y la restauración de la plataforma PaaS OpenShift es responsabilidad de Cloud Temple para la parte de **ETCD** bajo la administración de la plataforma. **El respaldo y la restauración para la parte de despliegue y datos de aplicaciones es responsabilidad del Cliente**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), una plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para satisfacer las necesidades en materia de protección de datos, ofrece funcionalidades robustas para el respaldo, la restauración, la migración y la recuperación ante desastres. Kasten K10 se integra de manera nativa en entornos Kubernetes, ya sea gestionados en clústeres en la nube o en sitio, y puede adaptarse a diferentes casos de uso, incluyendo la migración de clústeres entre distintas distribuciones de Kubernetes, como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los principales casos de uso de Kasten K10 es **la migración de clústeres entre diferentes plataformas Kubernetes**. Ya sea para una transición a una infraestructura más robusta o para consolidar los entornos existentes, Kasten K10 ofrece herramientas simples y efectivas para gestionar estas migraciones:

 - **Respaldo y protección de datos**: durante la migración de un clúster Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine u OpenShift, el primer paso es respaldar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias y los volúmenes de datos asociados. Esto incluye el respaldo de volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 soporta una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estos respaldos se almacenan de manera segura con opciones de cifrado y control de acceso granulares, garantizando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración**: la migración entre distribuciones de Kubernetes como Vanilla o Tanzu y soluciones de Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias de arquitecturas y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso proporcionando una capa de abstracción para la portabilidad de las aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y los datos de un clúster fuente a un clúster destino, teniendo en cuenta las especificidades de cada entorno. Por ejemplo, los objetos de Kubernetes como ConfigMaps, Secrets, PV, así como las CRDs (Custom Resource Definitions) se pueden migrar teniendo en cuenta las restricciones propias de cada distribución de Kubernetes, ya sea un clúster de Red Hat OpenShift o Kubernetes Engine. El proceso está automatizado, lo que reduce considerablemente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, dependiendo de las necesidades, y ofrece visibilidad en tiempo real del estado de la migración, facilitando la gestión y monitoreo de la transición.

 - **Compatibilidad multi-nube y multi-distribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multi-nube, lo que lo convierte en una herramienta ideal para las organizaciones que buscan migrar aplicaciones de clústeres Tanzu o Vanilla hacia entornos de Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras en sitio. Esto garantiza una flexibilidad máxima y permite a los equipos de DevOps elegir el mejor entorno en función de las necesidades del negocio o de las estrategias de modernización de infraestructura.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y respaldo sin requerir una experiencia profunda en cada plataforma de Kubernetes. La solución también está equipada con funcionalidades de automatización que permiten definir políticas de migración y respaldo recurrentes, integrándose con los pipelines de CI/CD para operaciones continuas. Los usuarios pueden planificar migraciones o restauraciones según las ventanas de mantenimiento, realizar pruebas de validación después de la migración y automatizar los procesos de conmutación por error en caso de problemas en el clúster fuente.

 - **Seguridad y cumplimiento**: en el marco de migraciones hacia entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento con normativas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 asegura el cifrado de los datos en tránsito y en reposo, además de ofrecer opciones de auditoría y trazabilidad de las operaciones de respaldo y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sea en entornos de producción o de prueba. Kasten K10 es una solución imprescindible para las empresas que desean migrar eficientemente y de manera segura los clústeres Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine u OpenShift.

 La facturación se realiza según el número de nodos de trabajo.

| Unidades de obra Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unidad    | SKU                         |
| :-------------------------------------------------------------------------------------  | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protección de datos de Kubernetes y movilidad de aplicaciones      | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Atención, la volumetría de disco necesaria para el correcto funcionamiento de tu respaldo debe ser prevista en el entorno receptor de tu respaldo, generalmente en almacenamiento S3. No está incluida en las unidades de obra de OpenShift o Kasten.*

**(1)** _OADP no está instalado de manera nativa en el clúster. Solo Kasten está activado para la gestión de migraciones, respaldos y restauraciones_

## Derechos y Permisos

Aquí están los permisos principales implementados:

|       Grupo        |        de API          |                                                                                      Permisos de Recursos                                                                                        |
|--------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar |
|        Core        |          ("")          |                                                                                           Secrets Crear                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Obtener, Listar, Ver, Crear, Actualizar, Parchear, Eliminar                                                                         |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Obtener, Listar                                                |
|config.kio.kasten.io|         Todas          |                                                                                    las recursos (*) Obtener, Listar                                                                                   |
|       Batch        |       CronJobs,        |                                                                        Jobs Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                       |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                    |
|      Project       |      (OpenShift)       |                                                                                Proyectos Obtener, Eliminar, Actualizar, Parchear                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Obtener, Listar, Ver, Crear, Actualizar, Parchear, Eliminar                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodos Obtener                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Crear                                                                                               |
|       Custom       |       Resources        |                                       Diversos recursos personalizados relacionados con Kasten K10, Keycloak, etc. Crear, Obtener, Listar, Ver, Actualizar, Parchear, Eliminar                                        |

## Límites actuales de la oferta Redhat Openshift en entorno SecNumCloud

Aquí están algunas limitaciones inducidas por la calificación SecNumCloud:

### Plan de control dedicado

Las cargas de trabajo no pueden ejecutarse en el plan de control debido a las restricciones inherentes a la gestión de recursos y a la seguridad de la plataforma OpenShift en SecNumCloud.

### Prohibición de desplegar imágenes con privilegios elevados (sin privilegios)

Para cumplir con los requisitos de seguridad del repositorio SecNumCloud, es obligatorio utilizar contenedores sin privilegios (sin privilegios).

Este enfoque refuerza la seguridad global impidiendo cualquier acceso privilegiado a los contenedores. Las aplicaciones que requieran contenedores con privilegios deberán ser modificadas, ya que su despliegue no será autorizado.

Esta restricción se extiende también a los Helm Charts y a los operadores que usen imágenes con privilegios, haciendo imposible su despliegue dentro de la infraestructura.

### Restricciones en los derechos de ClusterRole

En el marco de nuestra oferta OpenShift, implementamos una gestión rigurosa de los derechos de acceso a nivel del clúster, conforme a los requisitos SecNumCloud.

Este enfoque implica una limitación de los ClusterRoles para nuestros clientes, restringiendo así ciertos aspectos de la gestión global del clúster. Aunque esta medida pueda inicialmente parecer restrictiva, busca reforzar la seguridad y estabilidad de la infraestructura.

Somos conscientes de que esto puede generar desafíos técnicos, particularmente en la configuración de parámetros avanzados, y potencialmente implicaciones relacionadas con la adaptación de sus aplicaciones o la adquisición de herramientas complementarias.

Nuestro equipo de soporte está disponible para guiarle y aconsejarle sobre este tema.

### El contexto SCC no puede ser modificado en el entorno SecNumCloud

Las Security Context Constraints (SCC) están sujetas a restricciones estrictas y no pueden ser modificadas por los usuarios. Esta limitación tiene repercusiones significativas en el despliegue y ejecución de los contenedores.

En la práctica, esto significa que los parámetros de ejecución de los contenedores, tales como los privilegios de acceso al sistema o las capacidades de Linux, están predeterminados y no son personalizables.

Esta medida, motivada por requisites de seguridad, busca impedir cualquier acceso no autorizado a los recursos críticos del clúster. Por lo tanto, las aplicaciones que necesitan contextos de seguridad específicos, especialmente aquellas que requieren acceso privilegiado, pueden enfrentar obstáculos durante el despliegue.

Desde un punto de vista técnico, esto puede implicar una revisión de la arquitectura de las aplicaciones y una adaptación de los procesos de despliegue para cumplir con los SCC predeterminados. En el plano operativo, esta restricción puede reducir la flexibilidad de los despliegues y aumentar la complejidad de gestión de ciertas aplicaciones en el entorno OpenShift, particularmente aquellas que utilizan Helm Charts o operadores que no cumplan con los SCC en vigor.

### Limitaciones en las Custom Resource Definitions (CRDs)

Para cumplir con la calificación SecNumCloud, una restricción importante concierne el uso de las Custom Resource Definitions (CRDs) y de los controladores personalizados. Esta medida, relacionada con los derechos en el clúster, busca prevenir el despliegue de recursos personalizados potencialmente inestables o no autorizados.

Esta limitación se aplica también a los operadores y a los Helm Charts, con un impacto directo en los derechos RBAC, ya que las CRDs permiten extender la API de Kubernetes. Por lo tanto, los operadores y Helm Charts deben pasar por una cadena de certificación ante nuestros servicios para garantizar su conformidad y seguridad.
Les CRDs personnalisées, notamment celles répondant à des besoins métiers spécifiques, peuvent être refusées dans l'infrastructure en raison des risques qu'elles présentent pour la stabilité et la sécurité de la plateforme. Cette politique, conçue pour protéger l'intégrité et la fiabilité du cluster, n'autorise que les CRDs provenant d'opérateurs ou de Helm Charts officiellement certifiés.

Notre équipe de support est disponible pour vous guider et vous conseiller sur les bonnes pratiques à adopter dans ce cadre.

### No se admiten IPs dinámicas para los runners

La plataforma OpenShift SecNumCloud exige que los runners se configuren con direcciones IP fijas. Este requisito está motivado por la necesidad de autorizar las IPs que administran nuestra consola Cloud Temple, necesaria para la herramienta de gestión de acceso a las API. Las direcciones IP autorizadas también se utilizan para acceder a la API OpenShift así como a las interfaces de administración de OpenShift y Shiva.

Por lo tanto, el uso de direcciones IP dinámicas no es compatible con estos componentes, lo que impone la configuración de IPs fijas para garantizar la seguridad y el acceso a las API.

## Distribuidores de carga

El entorno SecNumCloud Openshift ofrece opciones de Load Balancing a diferentes niveles para garantizar una gestión segura y eficaz del tráfico. La API del Load Balancer es accesible a través de los puertos 6443 y 443, con un control de seguridad asegurado por una lista blanca gestionada por la consola Cloud Temple. Esta API utiliza una dirección IP pública conectada a nuestro backbone, pero no es accesible por defecto, lo que refuerza la seguridad de los accesos.

Para el Load Balancer privado, el entorno utiliza Ingress (nginx) como solución por defecto, lo que permite gestionar el tráfico interno de manera eficaz. Además, un soporte TCP está disponible a través de la infraestructura IaaS de Cloud Temple, ofreciendo así una flexibilidad adicional para las aplicaciones que necesitan un balanceo de carga a este nivel.

Con respecto al Load Balancer público, el soporte de nivel 4 está asegurado a través de Ingress, aunque actualmente existen algunas limitaciones con el comando "expose". Esto significa que el sistema es capaz de gestionar conexiones TCP y UDP de manera fiable mientras continúa evolucionando para ofrecer una mayor compatibilidad y flexibilidad.

**Nota**: el Load Balancer integrado no actúa como WAF. Se prevé una oferta de WAF as a Service para el segundo semestre de 2025.

## Información útil

• Si los componentes de hardware en la plataforma se vuelven obsoletos y es necesaria una migración a nuevos recursos de cómputo, Cloud Temple se encarga de todas las migraciones de hardware sin costo adicional y sin interrupción del servicio.

• Para probar OpenShift, Cloud Temple no proporciona un entorno dedicado, pero puedes utilizar [las plataformas de prueba RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Para la automatización de tu infraestructura, da prioridad al proveedor Terraform oficial de OpenShift en lugar del de Cloud Temple.