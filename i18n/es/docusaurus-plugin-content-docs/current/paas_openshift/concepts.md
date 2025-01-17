---
title: Concepts
---

## Presentación de RedHat Openshift

**Red Hat OpenShift** es una plataforma de contenedores empresarial que automatiza el despliegue, la gestión y el escalado de aplicaciones contenedorizadas. Es una plataforma construida alrededor de Docker, un sistema de contenedorización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y Kubernetes, un sistema de orquestación de contenedores, que gestiona la ejecución y la coordinación de los contenedores en un clúster de servidores.

### Características principales de Red Hat OpenShift:

- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones automatizando las rutinas de gestión como el escalado, la salud y la duración de los contenedores. Proporciona un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte de múltiples lenguajes y servicios:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados tales como mensajería, caching y bases de datos, permitiendo así a los desarrolladores centrarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan el pipeline de desarrollo de software, desde el commit inicial hasta el despliegue en producción, fomentando así las prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la supervisión, la gestión del rendimiento y el diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con seguridad integrada, ofreciendo controles de acceso basados en roles, la separación de tareas y la gestión automatizada de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de recursos, reduce el tiempo de comercialización y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente el escalado de las aplicaciones para responder a las variaciones de la demanda.
- **Seguridad y conformidad:** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y conformidad.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones contenedorizadas, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de manera transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para las aplicaciones contenedorizadas, apoyando así los entornos de desarrollo modernos centrados en contenedores y microservicios. ODF está diseñada para simplificar y automatizar la gestión de datos en entornos de nube híbrida y multicloud, proporcionando una base sólida para las aplicaciones empresariales críticas.

#### Características Clave de OpenShift Data Foundation:

- **Almacenamiento Persistente:** ODF proporciona una capa de almacenamiento persistente para los contenedores, esencial para aplicaciones empresariales como bases de datos, sistemas de gestión de contenido y aplicaciones que requieren un estado persistente.

- **Multicloud e Híbrido:** Diseñado para la nube híbrida y multicloud, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos de nube, facilitando la movilidad de aplicaciones y datos.

- **Automatización y Orquestación:** La integración profunda con Kubernetes y OpenShift permite a ODF automatizar el aprovisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento en función de las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza la replicación y el snapshotting de datos para garantizar la alta disponibilidad y durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de Datos:** La solución integra funcionalidades de seguridad avanzadas, tales como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y conformidad personalizables.

#### Ventajas de OpenShift Data Foundation:

- **Flexibilidad Operativa:** ODF permite a las empresas gestionar eficazmente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a las exigencias cambiantes de las aplicaciones modernas.

- **Simplificación de la Gestión de Datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera recursos de TI para centrarse en iniciativas de mayor valor añadido.

- **Optimización de Costos:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costos evitando la sobreaprovisionamiento y utilizando más eficientemente los recursos disponibles.

- **Mejora del Rendimiento:** ODF está diseñado para proporcionar un rendimiento elevado para aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución avanzada de almacenamiento de datos que refuerza la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF desempeña un papel crucial en la habilitación de las empresas para aprovechar al máximo el potencial de las tecnologías de contenedores y nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en **tres zonas de disponibilidad distintas** dentro de una misma región de Cloud Temple. Esta arquitectura tri-zonal aumenta significativamente la disponibilidad y la resiliencia de los datos.

La plataforma se compone de un plan de control y nodos de trabajo, todos gestionados por la infraestructura de Cloud Temple. El plan de control se reparte equitativamente sobre las tres zonas de disponibilidad, asegurando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por blades de cálculo, dispuestos de manera que cada zona de disponibilidad contenga uno.

Para los nodos de trabajo, varios tipos de blades de cálculo están disponibles, permitiendo así una adaptación flexible a diversas necesidades operativas:

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                 | Unité                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan de control - 3 nodos - Región FR1                                                                          | 1 plan dedicado         | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go de RAM - 512 Gio FLASH 1500 iops)                      | 3 workers dedicados     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go de RAM - 512 Gio FLASH 1500 iops)                   | 3 workers dedicados     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go de RAM - 512 Gio FLASH 1500 iops)                | 3 workers dedicados     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go de RAM - 512 Gio FLASH 1500 iops)                 | 3 workers dedicados     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To de RAM - 512 Gio FLASH 1500 iops)                    | 3 workers dedicados     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go de RAM - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 workers dedicados + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift Cloud Temple están disponibles bajo pago por uso o mediante reserva de 12 meses.

**Notas** :

1. *El mantenimiento en condiciones operativas y de seguridad del plan de control es responsabilidad de Cloud Temple bajo un servicio PaaS.*
   
2. *Al 15 de junio de 2024, la versión 1 de la plataforma está voluntariamente limitada a nivel de software para un plan de control a 30 worker nodes (cualquiera sea el tipo de worker) y a un almacenamiento persistente global de 50 Tio. Si estos límites son bloqueantes para su proyecto, por favor contacte con el soporte.*

3. *Cada worker node se entrega con 512Gio de almacenamiento flash Bloque, lo que hace 1.5 Tio para cada unidad de obra (1 worker por AZ).*

4. *La oferta PaaS Openshift incluye nativamente el acceso a las 3 zonas de disponibilidad, sin necesidad de suscripción adicional.*

5. *Es posible añadir almacenamiento adicional en bloque al clúster de Openshift posteriormente.*
   
6. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un mayor número de nodos a una sola zona.*
### Offre RedHat déployée dans le cadre de la plateforme Openshift Cloud Temple

La plateforme est une Redhat Openshift 4 basée sur [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) et inclut [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet). 

![](images/oshift_offert.jpg)

## Estrategia de respaldo de su plataforma PaaS Openshift

La copia de seguridad y la restauración de la plataforma PaaS Openshift son responsabilidad de Cloud Temple para la parte de **ETCD** en cuanto a la gestión de la plataforma. **La copia de seguridad y la restauración para la parte de implementación y datos de aplicaciones son responsabilidad del Mandante**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), una plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para satisfacer las necesidades de protección de datos, ofrece funcionalidades robustas para la copia de seguridad, la restauración, la migración y la recuperación ante desastres. Kasten K10 se integra de manera nativa en entornos Kubernetes, ya sean gestionados en clústeres en la nube o en sitio, y puede adaptarse a diferentes casos de uso, incluida la migración de clústeres entre distintas distribuciones de Kubernetes como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los principales casos de uso de Kasten K10 es **la migración de clústeres entre diferentes plataformas de Kubernetes**. Ya sea para una transición hacia una infraestructura más robusta o para consolidar los entornos existentes, Kasten K10 ofrece herramientas simples y eficaces para manejar estas migraciones:

 - **Copia de seguridad y protección de datos**: durante la migración de un clúster de Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine u OpenShift, el primer paso es respaldar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias, así como los volúmenes de datos asociados. Esto incluye la copia de seguridad de volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 es compatible con una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estas copias de seguridad se almacenan de manera segura con opciones de cifrado y control de acceso granular, garantizando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración**: la migración entre distribuciones de Kubernetes como Vanilla o Tanzu y soluciones de Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias de arquitecturas y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso proporcionando una capa de abstracción para la portabilidad de las aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y los datos de un clúster de origen a un clúster de destino, teniendo en cuenta las especificaciones de cada entorno. Por ejemplo, los objetos de Kubernetes como ConfigMaps, Secrets, PV, así como CRDs (Custom Resource Definitions) pueden ser migrados considerando las restricciones propias de cada distribución de Kubernetes, ya sea un clúster de Red Hat OpenShift o Kubernetes Engine. El proceso está automatizado, lo que reduce significativamente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, según las necesidades, y ofrece una visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y supervisión de la transición.

 - **Compatibilidad multi-cloud y multi-distribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multi-cloud, lo que lo convierte en una herramienta ideal para las organizaciones que buscan migrar aplicaciones desde clústeres Tanzu o Vanilla hacia entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras en sitio. Esto garantiza una máxima flexibilidad y permite a los equipos DevOps elegir el mejor entorno en función de las necesidades del negocio o de las estrategias de modernización de infraestructuras.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y copia de seguridad sin necesitar un conocimiento profundo de cada plataforma Kubernetes. La solución también está equipada con funcionalidades de automatización que permiten definir políticas recurrentes de migración y copia de seguridad, integrándose a los pipelines CI/CD para operaciones continuas. Los usuarios pueden planificar migraciones o restauraciones según ventanas de mantenimiento, realizar pruebas de validación post-migración y automatizar los procesos de failover en caso de problemas en el clúster de origen.

 - **Seguridad y conformidad**: en el contexto de migraciones hacia entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento de normas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 asegura el cifrado de datos en tránsito y en reposo, al mismo tiempo que ofrece opciones de auditoría y trazabilidad de las operaciones de copia de seguridad y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sea en entornos de producción o de prueba. Kasten K10 es una solución imprescindible para las empresas que desean migrar eficientemente y de manera segura clústeres de Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine u OpenShift.

La facturación se realiza por número de nodos de trabajo.

| Unidades de obra Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unidad     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protección de datos de Kubernetes y movilidad de aplicaciones     | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |
   
**Nota**: *Atención, la capacidad de disco necesaria para el correcto funcionamiento de su respaldo debe preverse en el entorno de recepción de su respaldo, generalmente en almacenamiento S3. No está incluida en las unidades de obra Openshift o Kasten.*

**(1)** _OADP no está instalado de forma nativa en el clúster. Solo Kasten está activado para la gestión de migraciones, copias de seguridad y restauración_

## Derechos y Permisos

Aquí están los permisos principales implementados:

|       Grupo       |         de API          |                                                                                       Permisos de Recursos                                                                                        |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Toutes         |                                                                                    les ressources (*) Get, List                                                                                    |
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
|       Custom       |       Resources        |                                       Diversas recursos personalizados relacionados con Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Limitaciones actuales de la oferta de Redhat Openshift en el entorno SecNumCloud

Aquí hay algunas limitaciones inducidas por la calificación SecNumCloud:

### Plan de control dedicado

Las cargas de trabajo no se pueden ejecutar en el plan de control debido a las restricciones inherentes a la gestión de recursos y la seguridad de la plataforma OpenShift en SecNumCloud.

### Prohibición de desplegar imágenes con privilegios elevados (sin root)

Para cumplir con los requisitos de seguridad del repositorio SecNumCloud, es obligatorio usar contenedores sin privilegios (sin root).

Este enfoque refuerza la seguridad general al impedir cualquier acceso privilegiado a los contenedores. Las aplicaciones que requieren contenedores con privilegios deberán ser modificadas, ya que su despliegue no será autorizado.

Esta restricción también se extiende a los Helm Charts y a los operadores que utilizan imágenes no sin root, haciendo imposible su despliegue dentro de la infraestructura.

### Restricciones sobre los derechos de ClusterRole

Dentro de nuestra oferta OpenShift, implementamos una gestión rigurosa de los derechos de acceso al nivel del clúster, según los requisitos de SecNumCloud.

Este enfoque implica una limitación de los ClusterRoles para nuestros clientes, restringiendo así ciertos aspectos de la gestión global del clúster. Aunque esta medida pueda parecer inicialmente restrictiva, busca reforzar la seguridad y la estabilidad de la infraestructura.

Somos conscientes de que esto puede generar desafíos técnicos, especialmente en la configuración de parámetros avanzados, y potencialmente tener implicaciones relacionadas con la adaptación de sus aplicaciones o la adquisición de herramientas complementarias.

Nuestro equipo de soporte está disponible para guiarle y aconsejarle sobre este tema.

### El contexto SCC no puede ser modificado en el entorno SecNumCloud

Las Security Context Constraints (SCC) están sujetas a restricciones estrictas y no pueden ser modificadas por los usuarios. Esta limitación tiene repercusiones significativas en el despliegue y ejecución de los contenedores.

En la práctica, esto significa que los parámetros de ejecución de los contenedores, como los privilegios de acceso al sistema o las capacidades de Linux, están predeterminados y no son personalizables.

Esta medida, motivada por requisitos de seguridad, busca impedir cualquier acceso no autorizado a los recursos críticos del clúster. Por lo tanto, las aplicaciones que requieran contextos de seguridad específicos, especialmente aquellas que necesitan accesos privilegiados, pueden encontrar obstáculos durante el despliegue.

Desde un punto de vista técnico, esto puede implicar una revisión de la arquitectura de las aplicaciones y una adaptación de los procesos de despliegue para cumplir con las SCC predeterminadas. A nivel operativo, esta restricción puede reducir la flexibilidad de los despliegues y aumentar la complejidad de la gestión de algunas aplicaciones en el entorno OpenShift, en particular aquellas que utilizan Helm Charts o operadores que no cumplen con las SCC en vigor.

### Limitaciones en las Custom Resource Definitions (CRDs)

Para cumplir con la calificación SecNumCloud, una restricción importante refiere al uso de las Custom Resource Definitions (CRDs) y los controladores personalizados. Esta medida, relacionada con los derechos del clúster, busca prevenir el despliegue de recursos personalizados potencialmente inestables o no autorizados.

Esta limitación también se aplica a los operadores y a los Helm Charts, con un impacto directo en los derechos RBAC, ya que las CRDs permiten extender la API de Kubernetes. Por lo tanto, los operadores y los Helm Charts deben pasar por una cadena de certificación ante nuestros servicios para garantizar su conformidad y seguridad.

Las CRDs personalizadas, en particular aquellas que responden a necesidades empresariales específicas, pueden ser rechazadas en la infraestructura debido a los riesgos que presentan para la estabilidad y seguridad de la plataforma. Esta política, diseñada para proteger la integridad y confiabilidad del clúster, solo permite CRDs provenientes de operadores o Helm Charts oficialmente certificados.

Nuestro equipo de soporte está disponible para guiarle y aconsejarle sobre las buenas prácticas a adoptar en este contexto.

### No se permite soporte de IPs Dinámicas para los runners

La plataforma OpenShift SecNumCloud exige que los runners se configuren con direcciones IP fijas. Esta exigencia está motivada por la necesidad de autorizar las IPs que administran nuestra consola Cloud Temple, necesaria para la herramienta de gestión de acceso a las API. Las direcciones IP autorizadas también se utilizan para acceder a la API de OpenShift así como a las interfaces de administración de OpenShift y Shiva.

Por lo tanto, el uso de direcciones IP dinámicas no es compatible con estos componentes, imponiendo la configuración de IPs fijas para garantizar la seguridad y el acceso a las API.

## Distribuidores de carga
L'environnement SecNumCloud Openshift ofrece opciones de Load Balancing a diferentes niveles para garantizar una gestión segura y eficiente del tráfico. La API del Load Balancer es accesible a través de los puertos 6443 y 443, con un control de seguridad asegurado por una lista blanca gestionada por la consola Cloud Temple. Esta API utiliza una dirección IP pública conectada a nuestro backbone, pero no es accesible por defecto, reforzando así la seguridad de los accesos.

Para el Load Balancer privado, el entorno utiliza Ingress (nginx) como solución por defecto, lo que permite gestionar el tráfico interno de manera eficiente. Además, se dispone de soporte TCP a través de la infraestructura IaaS de Cloud Temple, proporcionando así una flexibilidad adicional para las aplicaciones que requieren un balanceo de carga a este nivel.

En cuanto al Load Balancer público, el soporte de nivel 4 se asegura a través de Ingress, aunque existen algunas limitaciones actualmente con el comando "expose." Esto significa que el sistema es capaz de manejar conexiones TCP y UDP de manera fiable mientras continúa evolucionando para ofrecer una mayor compatibilidad y flexibilidad.