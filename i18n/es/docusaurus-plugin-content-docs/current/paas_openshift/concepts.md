---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentación de Red Hat OpenShift

**Red Hat OpenShift** es una plataforma empresarial de contenedores que automatiza el despliegue, la gestión y la escala de aplicaciones contenedorizadas. Es una plataforma construida alrededor de Docker, un sistema de contenedorización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y de Kubernetes, un sistema de orquestación de contenedores, que gestiona la ejecución y coordinación de los contenedores en un clúster de servidores.

### Funcionalidades principales de Red Hat OpenShift:

- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones automatizando las rutinas de gestión como la escalabilidad, la salud y la vida útil de los contenedores. Proporciona un entorno integrado para el desarrollo, las pruebas y la producción de aplicaciones.

- **Soporte de múltiples lenguajes y servicios:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, almacenamiento en caché y bases de datos, permitiendo así a los desarrolladores centrarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan la canalización de desarrollo de software, desde el primer commit hasta el despliegue en producción, promoviendo así las prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la supervisión, gestión del rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con una seguridad integrada, ofreciendo controles de acceso basados en roles, la separación de tareas y la gestión automatizada de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de recursos, reduce el tiempo de comercialización y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente la escalabilidad de las aplicaciones para responder a las variaciones de la demanda.
- **Seguridad y cumplimiento:** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y cumplimiento.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones contenedorizadas, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### RedHat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar perfectamente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para aplicaciones contenedorizadas, apoyando así los entornos de desarrollo modernos enfocados en contenedores y microservicios. ODF está diseñada para simplificar y automatizar la gestión de datos en entornos de nube híbrida y multicloud, proporcionando una base sólida para aplicaciones empresariales críticas.

#### Funcionalidades Clave de OpenShift Data Foundation:

- **Almacenamiento Persistente:** ODF proporciona una capa de almacenamiento persistente para los contenedores, esencial para aplicaciones empresariales como bases de datos, sistemas de gestión de contenido y aplicaciones que requieren un estado persistente.

- **Multicloud e Híbrido:** Diseñado para la nube híbrida y multicloud, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos cloud, facilitando la movilidad de aplicaciones y datos.

- **Automatización y Orquestación:** La integración profunda con Kubernetes y OpenShift permite a ODF automatizar la provisión, la escalabilidad y la gestión del ciclo de vida del almacenamiento según las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza la replicación y la creación de snapshots de datos para asegurar la alta disponibilidad y la durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de Datos:** La solución integra funcionalidades de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y cumplimiento personalizables.

#### Ventajas de OpenShift Data Foundation:

- **Flexibilidad Operativa:** ODF permite a las empresas gestionar eficazmente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a los requisitos cambiantes de las aplicaciones modernas.

- **Simplificación de la Gestión de Datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera los recursos de TI para centrarse en iniciativas de mayor valor añadido.

- **Optimización de Costos:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costos al evitar el sobreaprovisionamiento y utilizar de manera más eficiente los recursos disponibles.

- **Mejora del Rendimiento:** ODF está diseñado para proporcionar un alto rendimiento para aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución avanzada de almacenamiento de datos que refuerza la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF juega un papel crucial en la habilitación de las empresas para explotar plenamente el potencial de las tecnologías de contenedores y de nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en [**tres zonas de disponibilidad distintas**](../additional_content/concepts_az.md) dentro de una misma [región](../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura trizonal aumenta significativamente la disponibilidad y la resiliencia de los datos.

La plataforma se compone de un plano de control y nodos de trabajo, todos gestionados por la infraestructura de Cloud Temple. El plano de control está distribuido equitativamente en las tres zonas de disponibilidad, asegurando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por blades de cálculo, dispuestos de manera que cada zona de disponibilidad contenga uno.

Para los nodos de trabajo, están disponibles varios tipos de blades de cálculo, permitiendo así una adaptación flexible a diversas necesidades operativas:

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unité                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan de contrôle - 3 nœuds - Région FR1                                                                          | 1 plan dédié            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go de ram - 512 Gio FLASH 1500 iops)                      | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go de ram - 512 Gio FLASH 1500 iops)                   | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go de ram - 512 Gio FLASH 1500 iops)                | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go de ram - 512 Gio FLASH 1500 iops)                 | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To de ram - 512 Gio FLASH 1500 iops)                    | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go de ram - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 workers dédiés + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos de Red Hat OpenShift Cloud Temple están disponibles en pago por uso o en reservación de 12 meses.

**Notas**:

1. *El mantenimiento en condiciones operativas y de seguridad del plano de control es responsabilidad de Cloud Temple en virtud de un servicio PaaS.*

2. *A partir del 15 de junio de 2024, la versión 1 de la plataforma está intencionalmente limitada a nivel de software para un plano de control de hasta 30 nodos de trabajo (independientemente del tipo de worker) y a un almacenamiento persistente global de 50 TiB. Si estos límites son bloqueantes para su proyecto, por favor contacte con el soporte.*

3. *Cada nodo de trabajo se entrega con 512 GiB de almacenamiento flash Bloque, lo que hace 1.5 TiB por cada unidad de obra (1 worker por AZ).*
4. *Un nodo worker puede manejar hasta 250 pods por defecto. Este número se puede ajustar a través del parámetro podsPerCore: por ejemplo, con 10 pods por núcleo en un nodo de 4 núcleos, tendrás 40 pods como máximo. Para más detalles técnicos, consulta la [documentación sobre la gestión de pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) y la [guía de límites de OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *La oferta PaaS Openshift incluye de forma nativa el acceso a las 3 zonas de disponibilidad, sin necesidad de suscripción adicional.*

6. *Es posible añadir posteriormente almacenamiento en bloque al clúster Openshift.*

7. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un gran número de nodos a una sola zona.*

### Oferta RedHat desplegada en el marco de la plataforma Openshift Cloud Temple

La plataforma es un Redhat Openshift 4 basada en [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e incluye [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Estrategia de respaldo de su plataforma PaaS Openshift

La copia de seguridad y la restauración de la plataforma PaaS Openshift es responsabilidad de Cloud Temple para la parte de **ETCD** según la gestión de la plataforma. **La copia de seguridad y la restauración para la parte de despliegue y datos de aplicaciones es responsabilidad del Contratante**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para satisfacer las necesidades de protección de datos, ofrece funciones robustas para respaldo, restauración, migración y recuperación ante desastres. Kasten K10 se integra de manera nativa con los entornos Kubernetes, ya sea en clústeres en la nube o en sitio, y puede adaptarse a diferentes casos de uso, incluida la migración de clústeres entre diferentes distribuciones de Kubernetes como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los casos de uso principales de Kasten K10 es **la migración de clústeres entre diferentes plataformas de Kubernetes**. Ya sea para una transición a una infraestructura más robusta o para consolidar los entornos existentes, Kasten K10 ofrece herramientas simples y efectivas para gestionar estas migraciones:

 - **Respaldo y protección de datos**: al migrar un clúster de Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine o OpenShift, el primer paso es respaldar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las APIs de Kubernetes para identificar las aplicaciones, sus dependencias y los volúmenes de datos asociados. Esto incluye el respaldo de volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 admite una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estos respaldos se almacenan de manera segura con opciones de cifrado y control de acceso granular, garantizando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración**: la migración entre distribuciones de Kubernetes como Vanilla o Tanzu y soluciones Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias de arquitectura y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso proporcionando una capa de abstracción para la portabilidad de las aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y los datos de un clúster fuente a un clúster destino, teniendo en cuenta las especificidades de cada entorno. Por ejemplo, los objetos de Kubernetes como ConfigMaps, Secrets, PV, así como CRDs (Custom Resource Definitions) pueden ser migrados teniendo en cuenta las restricciones propias de cada distribución de Kubernetes, ya sea un clúster Red Hat OpenShift o Kubernetes Engine. El proceso está automatizado, lo que reduce considerablemente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, según las necesidades, y ofrece visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y la supervisión de la transición.

 - **Compatibilidad multi-cloud y multi-distribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multi-cloud, lo que lo convierte en una herramienta ideal para las organizaciones que buscan migrar aplicaciones de clústeres Tanzu o Vanilla a entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras en sitio. Esto garantiza una flexibilidad máxima y permite a los equipos de DevOps elegir el mejor entorno según las necesidades empresariales o estrategias de modernización de infraestructura.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y respaldo sin necesidad de un conocimiento profundo de cada plataforma Kubernetes. La solución también está equipada con funciones de automatización que permiten definir políticas de migración y respaldo recurrentes, integrándose a los pipelines CI/CD para operaciones continuas. Los usuarios pueden planificar migraciones o restauraciones según ventanas de mantenimiento, realizar pruebas de validación después de la migración y automatizar los procesos de conmutación por error en caso de problemas en el clúster fuente.

 - **Seguridad y conformidad**: en el marco de migraciones a entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento de normativas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 asegura el cifrado de los datos en tránsito y en reposo, al tiempo que ofrece opciones de auditoría y trazabilidad de las operaciones de respaldo y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sea en entornos de producción o pruebas. Kasten K10 es una solución imprescindible para las empresas que desean migrar eficaz y seguramente clústeres Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine o OpenShift.

La facturación se realiza por número de worker node.

| Unidades de obra Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unidad    | SKU                        |
| :------------------------------------------------------------------------------------- | :------- | :------------------------  |
| VEEAM - KASTEN K10 - Protección de datos de Kubernetes y movilidad de aplicaciones     | 3 workers| csp:fr1:paas:kasten:3wkr:v1|

**Nota**: *Atención, el volumen de disco necesario para el correcto funcionamiento de su respaldo debe planificarse en el entorno de recepción de su respaldo, generalmente en almacenamiento S3. No está incluido en las unidades de obra de Openshift o Kasten.*

**(1)** _OADP no está instalado nativamente en el clúster. Solo Kasten está activado para la gestión de migraciones, respaldos y restauración_

## Distribuidores de carga

El entorno **SecNumCloud OpenShift** ofrece soluciones de distribución de carga adaptadas a varios perímetros funcionales, garantizando una gestión segura y optimizada del tráfico.

Los distribuidores de carga cubren cuatro perímetros distintos, basándose en diferentes niveles del modelo OSI:

- **Acceso a las herramientas de administración** (servidor API y consola OpenShift)
- **Tráfico HTTP/HTTPS público**
- **Tráfico HTTP/HTTPS privado**
- **Tráfico específico que requiere una personalización avanzada**

### Acceso a las herramientas de administración

El acceso a las herramientas de administración está asegurado por distribuidores de carga dedicados. Estos están protegidos por controles de seguridad reforzados, incluyendo una lista blanca administrable a través de la consola de **Cloud Temple**, garantizando una gestión estricta de los accesos.

### Tráfico HTTP/HTTPS público

Los **LoadBalancers públicos**, basados en **HAProxy**, funcionan en el nivel **4** del modelo OSI. Permiten exponer sus cargas de trabajo en **HTTP/HTTPS** a través de **routes** e **ingress**, asegurando así una distribución eficiente y de alto rendimiento del tráfico entrante.

### Tráfico HTTP/HTTPS privado (Interconexión con sus servicios IaaS SNC)

Los **LoadBalancers privados** facilitan la comunicación con sus servicios **IaaS SNC** sin exposición pública. Al igual que sus homólogos públicos, aseguran la distribución del tráfico **HTTP/HTTPS** mientras mantienen un entorno seguro y aislado.

### Tráfico específico

El **tráfico específico** se gestiona a través de **MetalLB**, un LoadBalancer que opera en el nivel **2** del modelo OSI. Soporta necesidades avanzadas que requieren una personalización fina, incluido:

- La conexión a una base de datos vía **TCP**
- La gestión de flujos **UDP** para aplicaciones en tiempo real o de baja latencia
- El enrutamiento de protocolos avanzados como **QUIC** o **MQTT-SN**, ofreciendo así una mayor flexibilidad
Cette soluzione permite soportar sus flujos específicos, tanto para sus interconexiones privadas como para sus necesidades de exposición pública.  

El ruteo se asegura vía **pools de direcciones IP públicas y privadas**. Por defecto, se le atribuyen dos pools para la exposición de sus servicios:  

- **Un pool de 4 direcciones IP públicas**
- **Un pool de 254 direcciones IP privadas**  

Si estos recursos no son suficientes para soportar sus cargas de trabajo, puede hacer una solicitud a nuestros servicios para la asignación de direcciones IP adicionales, ya sean **públicas** o **privadas**.  

> **Nota**: Los LoadBalancers integrados no funcionan como **WAF**. Una solución de **WAF as a Service** estará disponible próximamente.  

## Derechos y Permisos

Estas son las principales permisiones implementadas:

|       Grupo        |        API            |                                                                                       Recursos Permisos                                                                                        |
|--------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps       |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete|
|        Core        |          ("")         |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles       |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|    PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Todas         |                                                                                     los recursos (*) Get, List                                                                                     |
|       Batch        |       CronJobs,       |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,      |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)      |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)      |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)      |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)      |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)      |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,        |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,        |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)      |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,    |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,     |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)      |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots    |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)        |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,    |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,  |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)      |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage        |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons        |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,         |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources       |                                       Diversos recursos personalizados relacionados con Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |


## Restricciones y requisitos de seguridad en OpenShift SecNumCloud  

### Plano de control dedicado  

La ejecución de cargas de trabajo en el **plano de control** está estrictamente prohibida. Esta restricción garantiza la seguridad y la estabilidad de la plataforma OpenShift en **SecNumCloud**, limitando el acceso a recursos críticos.  

### Prohibición de contenedores con privilegios elevados (sin root)  

Para cumplir con los requisitos de seguridad del **repositorio SecNumCloud**, solo se permiten **contenedores sin root**. Este enfoque refuerza la seguridad al evitar cualquier acceso privilegiado a los contenedores.  

Las aplicaciones que requieran privilegios elevados deberán ser adaptadas, ya que su despliegue no será permitido. Esta restricción también se aplica a los **Helm Charts** y a los **operadores** que usen imágenes sin root, haciendo que su uso sea incompatible con la infraestructura.  

### Restricciones en los ClusterRoles  

En nuestra oferta de OpenShift, la gestión de derechos de acceso a nivel de clúster está rigurosamente controlada para garantizar la **seguridad y conformidad** con SecNumCloud.  

Cela implique des **restricciones en los ClusterRoles**, limitando los privilegios globales. Aunque estas restricciones puedan imponer ajustes técnicos, son esenciales para reforzar la resiliencia y la estabilidad del entorno.

Nuestro equipo de soporte está disponible para acompañarle en la adaptación de sus configuraciones y aconsejarle sobre las alternativas posibles.

### Restricciones en las Security Context Constraints (SCC)

Las **Security Context Constraints (SCC)** se imponen y no pueden ser modificadas por los usuarios. En consecuencia, los parámetros de ejecución de los contenedores (privilegios de acceso, capacidades de Linux, etc.) están predefinidos y no son personalizables.

Esta restricción busca evitar cualquier acceso no autorizado a los recursos críticos del clúster. Las aplicaciones que requieran contextos de seguridad específicos deberán ser adaptadas para cumplir con las SCC vigentes.

Desde un punto de vista operativo, esto puede requerir ajustes arquitecturales y adaptaciones en los procesos de despliegue, particularmente para los **Helm Charts** y los **operadores** que no cumplan con estas restricciones.

### Limitaciones en las Custom Resource Definitions (CRDs)

Para garantizar la **conformidad SecNumCloud**, el uso de las **Custom Resource Definitions (CRDs)** y los controladores personalizados está restringido.

Esta medida, relacionada con los derechos sobre el clúster, impide el despliegue de recursos no autorizados que puedan afectar la estabilidad y seguridad de la infraestructura. También se aplica a los **operadores** y **Helm Charts**, con limitaciones en los derechos **RBAC**.

Las **CRDs no certificadas** pueden ser rechazadas para asegurar la integridad del clúster. Solo se permiten las **CRDs provenientes de operadores o Helm Charts certificados** después de la validación por parte de nuestros servicios.

Nuestro equipo de soporte puede guiarle en este proceso y aconsejarle sobre las mejores prácticas a adoptar.

### Eliminación del soporte para direcciones IP dinámicas para los runners

Los **runners OpenShift SecNumCloud** deben configurarse con **direcciones IP fijas**.

Este requisito garantiza el acceso seguro a las **API de OpenShift**, a las interfaces de administración y a las herramientas de gestión de acceso de la consola **Cloud Temple**.

Las **direcciones IP dinámicas no son compatibles**, requiriendo una configuración adecuada para asegurar la conectividad y la seguridad de los componentes.

## Información útil

• Si los componentes de hardware a nivel de la plataforma se vuelven obsoletos y es necesario migrar a nuevos recursos de cómputo, Cloud Temple se encarga de todas las migraciones de hardware sin costo adicional y sin interrupción del servicio.

• Para probar OpenShift, Cloud Temple no proporciona un entorno dedicado, pero puede utilizar [las plataformas de prueba de RedHat](https://www.redhat.com/es/technologies/cloud-computing/openshift/try-it).

• Para la automatización de su infraestructura, priorice el proveedor oficial de Terraform de OpenShift.