---
title: Conceptos
---
import oshiftOffert from './images/oshift_offert.png'

## Presentación de Red Hat OpenShift

**Red Hat OpenShift** es una plataforma de contenedores empresarial que automatiza el despliegue, gestión y escalado de aplicaciones contenedorizadas. Es una plataforma construida alrededor de Docker, un sistema de contenerización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y Kubernetes, un sistema de orquestación de contenedores que gestiona la ejecución y coordinación de los contenedores en un clúster de servidores.

### Funcionalidades principales de Red Hat OpenShift:

- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones al automatizar tareas de gestión como el escalado, el estado de salud y el ciclo de vida de los contenedores. Proporciona un entorno integrado para el desarrollo, pruebas y producción de aplicaciones.

- **Soporte para múltiples lenguajes y servicios:** La plataforma admite una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caché y bases de datos, permitiendo a los desarrolladores centrarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan el pipeline de desarrollo de software, desde el primer commit hasta el despliegue en producción, promoviendo así prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la supervisión, gestión del rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con seguridad integrada, ofreciendo controles de acceso basados en roles, separación de tareas y gestión automatizada de secretos para proteger aplicaciones y datos.

### Ventajas de Red Hat OpenShift:

- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de los recursos, reduce el tiempo de comercialización y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente el escalado de las aplicaciones para responder a las variaciones en la demanda.
- **Seguridad y cumplimiento:** Gracias a sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y cumplimiento.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones contenedorizadas, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de forma transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para aplicaciones contenedorizadas, apoyando así entornos de desarrollo modernos centrados en contenedores y microservicios. ODF está diseñada para simplificar y automatizar la gestión de datos en entornos híbridos y multicloud, proporcionando una base sólida para aplicaciones críticas de empresas.

#### Funcionalidades Clave de OpenShift Data Foundation:

- **Almacenamiento Persistente:** ODF proporciona una capa de almacenamiento persistente para contenedores, esencial para aplicaciones empresariales como bases de datos, sistemas de gestión de contenido y aplicaciones que requieren estado persistente.

- **Multinube y Híbrido:** Diseñado para entornos híbridos y multinube, ODF permite una experiencia coherente de gestión de datos a través de diferentes entornos en la nube, facilitando la movilidad de aplicaciones y datos.

- **Automatización y Orquestación:** La integración profunda con Kubernetes y OpenShift permite a ODF automatizar el aprovisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento según las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza replicación y instantáneas de datos para garantizar alta disponibilidad y durabilidad de los datos, esencial para la continuidad operativa de la empresa.

- **Seguridad de Datos:** La solución incorpora funciones avanzadas de seguridad, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y cumplimiento personalizables. Nuestra implementación SecNumCloud garantiza una protección en múltiples niveles:
    -   **Cifrado de datos en reposo:** El almacenamiento persistente proporcionado por OpenShift Data Foundation se basa en nuestra infraestructura subyacente de almacenamiento en bloques. En este sentido, todos los datos se cifran en reposo utilizando el algoritmo **XTS-AES 256**, conforme a la norma **FIPS 140-2**.
    -   **Cifrado de datos en tránsito:** Todos los accesos a la plataforma, incluyendo la API, la consola web y el tráfico aplicativo a través de rutas, se protegen y cifran sistemáticamente mediante el protocolo **TLS**.

#### Beneficios de OpenShift Data Foundation:

- **Flexibilidad operativa:** ODF permite a las empresas gestionar eficazmente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a las exigencias cambiantes de las aplicaciones modernas.

- **Simplificación de la gestión de datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera los recursos de TI para centrarse en iniciativas de mayor valor añadido.

- **Optimización de costos:** La capacidad de ODF de adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costos al evitar el aprovisionamiento excesivo y utilizando de forma más eficiente los recursos disponibles.

- **Mejora del rendimiento:** ODF está diseñado para ofrecer un alto rendimiento para las aplicaciones empresariales, con capacidades de optimización para diferentes tipos de cargas de trabajo.

Red Hat OpenShift Data Foundation es una solución avanzada de almacenamiento de datos que refuerza la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF desempeña un papel crucial en la habilitación de las empresas para aprovechar plenamente el potencial de las tecnologías de contenedores y la nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en [**tres zonas de disponibilidad distintas**](../additional_content/concepts_az.md) dentro de la misma [región](../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura tri-zonal aumenta significativamente la disponibilidad y resiliencia de los datos.

La plataforma se compone de un plano de control y nodos de trabajo, ambos gestionados por la infraestructura de Cloud Temple. El plano de control se distribuye equitativamente entre las tres zonas de disponibilidad, garantizando una gestión centralizada y segura. Los nodos de trabajo, por su parte, se representan mediante láminas de cálculo, dispuestas de forma que cada zona de disponibilidad contenga una.

Para los nodos de trabajo, existen varios tipos de láminas de cálculo disponibles, lo que permite una adaptación flexible a diversas necesidades operativas:

| Unidades de obra Redhat OpenShift 4 with Data Foundations - On Demand - 1 month                                                | Unidad                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plano de control - 3 nodos - Región FR1                                                                          | 1 plano dedicado         | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - NODOS DE TRABAJO - TINY - 3 x (10 núcleos / 20 hilos - 64 GB de RAM - 512 GB de FLASH 1500 IOPS)                 | 3 nodos dedicados        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - NODOS DE TRABAJO - SMALL - 3 x (20 núcleos / 40 hilos - 128 GB de RAM - 512 GB de FLASH 1500 IOPS)                | 3 nodos dedicados        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - NODOS DE TRABAJO - STANDARD - 3 x (32 núcleos / 64 hilos - 384 GB de RAM - 512 GB de FLASH 1500 IOPS)             | 3 nodos dedicados        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - NODOS DE TRABAJO - ADVANCED - 3 x (48 núcleos / 96 hilos - 768 GB de RAM - 512 GB de FLASH 1500 IOPS)            | 3 nodos dedicados        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - NODOS DE TRABAJO - PERF - 3 x (56 núcleos / 112 hilos - 1,5 TB de RAM - 512 GB de FLASH 1500 IOPS)                | 3 nodos dedicados        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - NODOS DE TRABAJO - GPU - 3 x (32 núcleos / 64 hilos - 512 GB de RAM - 512 GB de FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 nodos dedicados + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift de Cloud Temple están disponibles con pago por uso o con reserva de 12 meses.

**Notas**:

1. *El mantenimiento en condiciones operativas y de seguridad del plano de control es responsabilidad de Cloud Temple como parte de un servicio PaaS.*

2. *Al 15 de junio de 2024, la versión 1 de la plataforma está limitada de forma intencional a nivel software a un máximo de 30 nodos de trabajo (independientemente del tipo de nodo) y a un almacenamiento persistente global de 50 TiB. Si estas limitaciones son críticas para su proyecto, póngase en contacto con el soporte.*

3. *Cada nodo de trabajo incluye 512 GB de almacenamiento flash en bloque, lo que representa 1,5 TB por unidad de obra (1 nodo por AZ).*

4. *Un nodo de trabajo puede gestionar hasta 250 pods por defecto. Este número es ajustable mediante el parámetro podsPerCore; por ejemplo, con 10 pods por núcleo en un nodo de 4 núcleos, se alcanzarían un máximo de 40 pods. Para más detalles técnicos, consulte la [documentación sobre gestión de pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) y la [guía de límites de OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *La oferta PaaS OpenShift incluye de forma nativa el acceso a las 3 zonas de disponibilidad, sin necesidad de suscribirse adicionalmente a ellas.*

6. *Es posible añadir posteriormente almacenamiento en bloque al clúster OpenShift.*

7. *Los nodos se despliegan de forma equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un mayor número de nodos a una sola zona.*

### RedHat offering deployed within the OpenShift Cloud Temple platform

The platform is a RedHat OpenShift 4 based on [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Estrategia de copia de seguridad de su plataforma PaaS OpenShift

La copia de seguridad y recuperación de la plataforma PaaS OpenShift es responsabilidad de Cloud Temple para la parte **ETCD**, en virtud del manejo de la plataforma. **La copia de seguridad y recuperación de la parte de despliegue y datos aplicativos es responsabilidad del Cliente**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/es/kubernetes-native-backup-and-restore.html)), plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para responder a las necesidades de protección de datos, ofrece funciones robustas para la copia de seguridad, recuperación, migración y recuperación ante desastres. Kasten K10 se integra de forma nativa en entornos Kubernetes, ya sean gestionados en clusters en la nube o en sitio, y puede adaptarse a diversos escenarios de uso, incluida la migración de clusters entre diferentes distribuciones Kubernetes, como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los usos principales de Kasten K10 es **la migración de clusters entre diferentes plataformas Kubernetes**. Ya sea para transitar hacia una infraestructura más robusta o para consolidar entornos existentes, Kasten K10 ofrece herramientas sencillas y eficientes para gestionar estas migraciones:

 - **Copia de seguridad y protección de datos**: durante la migración de un cluster Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine o OpenShift, la primera etapa consiste en realizar una copia de seguridad de los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias y los volúmenes de datos asociados. Esto incluye la copia de seguridad de volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 soporta una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estas copias de seguridad se almacenan de forma segura con opciones de cifrado y control de acceso granular, garantizando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración**: la migración entre distribuciones Kubernetes como Vanilla o Tanzu y soluciones Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias arquitectónicas y a las configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso al proporcionar una capa de abstracción para la portabilidad de aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y datos de un cluster origen hacia un cluster destino, teniendo en cuenta las particularidades de cada entorno. Por ejemplo, los objetos Kubernetes como ConfigMaps, Secrets, PVs y CRDs (Custom Resource Definitions) pueden migrarse considerando las restricciones propias de cada distribución Kubernetes, ya sea un cluster Red Hat OpenShift o Kubernetes Engine. El proceso es automatizado, lo que reduce considerablemente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, según las necesidades, y ofrece visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y supervisión de la transición.

 - **Compatibilidad multi-nube y multi-distribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multi-nube, lo que lo convierte en una herramienta ideal para organizaciones que buscan migrar aplicaciones de clusters Tanzu o Vanilla hacia entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras locales. Esto garantiza una flexibilidad máxima y permite a los equipos DevOps elegir el mejor entorno según sus necesidades empresariales o estrategias de modernización de infraestructura.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y copia de seguridad sin necesidad de una experiencia profunda en cada plataforma Kubernetes. La solución también incluye funciones de automatización que permiten definir políticas recurrentes de migración y copia de seguridad, integrándose con los pipelines CI/CD para operaciones continuas. Los usuarios pueden programar migraciones o recuperaciones según ventanas de mantenimiento, realizar pruebas de validación tras la migración y automatizar procesos de failover en caso de problemas en el cluster origen.

 - **Seguridad y cumplimiento**: en el marco de migraciones hacia entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento con normas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 garantiza el cifrado de datos en tránsito y en reposo, además de ofrecer opciones de auditoría y trazabilidad de las operaciones de copia de seguridad y recuperación. Estas capacidades son fundamentales para asegurar la seguridad de los datos migrados, ya sea en entornos de producción o de prueba. Kasten K10 es una solución imprescindible para empresas que desean migrar de forma eficiente y segura clusters Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine o OpenShift.

 La facturación se realiza según el número de nodos worker.

| Unidades de obra Redhat OpenShift 4 with Data Foundations - Solución de copia de seguridad para nodos worker | Unidad     | SKU                         |
| :------------------------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protección de datos Kubernetes y movilidad de aplicaciones                                 | 3 nodos   | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Atención, la capacidad de almacenamiento necesaria para el correcto funcionamiento de su copia de seguridad debe preverse en el entorno de recepción de la copia de seguridad, generalmente en almacenamiento S3. No está incluida en las unidades de obra de OpenShift ni de Kasten.*

**(1)** _OADP no está instalado de forma nativa en el cluster. Solo Kasten está activado para la gestión de migraciones, copias de seguridad y recuperación_

## Balanceadores de carga

El entorno **SecNumCloud OpenShift** ofrece soluciones de distribución de carga adaptadas a varios perfiles funcionales, garantizando una gestión segura y optimizada del tráfico.

Los balanceadores de carga cubren cuatro perfiles distintos, apoyándose en diferentes niveles del modelo OSI:

- **Acceso a las herramientas de administración** (servidor API y consola OpenShift)
- **Tráfico HTTP/HTTPS público**
- **Tráfico HTTP/HTTPS privado**
- **Tráfico específico que requiere una personalización avanzada**

### Access to administration tools

Access to administration tools is secured by dedicated load balancers. These are protected by enhanced security controls, including a manageable whitelist accessible via the **Cloud Temple** console, ensuring strict access management.

### Tráfico HTTP/HTTPS público

Los **LoadBalancers públicos**, basados en **HAProxy**, funcionan a nivel **4** del modelo OSI. Permiten exponer sus cargas de trabajo en **HTTP/HTTPS** mediante **rutas** e **ingress**, asegurando así una distribución eficiente y óptima del tráfico entrante.

### Tráfico HTTP/HTTPS privado (Interconexión con sus servicios IaaS SNC)

Los **LoadBalancers privados** facilitan la comunicación con sus servicios **IaaS SNC** sin exposición pública. Al igual que sus homólogos públicos, garantizan la distribución del tráfico **HTTP/HTTPS** manteniendo un entorno seguro e aislado.

### Tráfico específico

El **tráfico específico** se gestiona a través del LoadBalancer **MetalLB**. Soporta necesidades avanzadas que requieren una personalización detallada, por ejemplo:

- La conexión a una base de datos mediante **TCP**
- La gestión de flujos **UDP** para aplicaciones en tiempo real o de baja latencia
- El enrutamiento de protocolos avanzados como **QUIC** o **MQTT-SN**, ofreciendo así una mayor flexibilidad

Esta solución permite gestionar sus flujos específicos, tanto para sus interconexiones privadas como para sus necesidades de exposición pública.

El enrutamiento se realiza mediante **direcciones IP públicas y privadas dedicadas**. Por defecto, se le asignan direcciones IP para la exposición de sus servicios:

- **4 direcciones IP públicas**
- **254 direcciones IP privadas**

Si estos recursos no son suficientes para soportar su carga de trabajo, puede realizar una solicitud a nuestros servicios para obtener direcciones IP adicionales, ya sean **públicas** o **privadas**.

> **A tener en cuenta**: Los LoadBalancers integrados no funcionan como **WAF**. Próximamente estará disponible una solución **WAF as a Service**.

## Rights and Permissions

Here are the main permissions implemented:

|       Group        |         API          |                                                                                       Resource Permissions                                                                                       |
|--------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps      | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")        |                                                                                           Secrets Create                                                                                           |
| config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
| config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
| config.kio.kasten.io|         All          |                                                                                    all resources (*) Get, List                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     | HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
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
|      Security      | PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Restricciones y requisitos de seguridad en OpenShift SecNumCloud

### Dedicated control plane

Running workloads on the **control plane** is strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud** by limiting access to critical resources.

### Restriction of containers with elevated privileges (rootless)

To comply with the security requirements of the **SecNumCloud reference framework**, only **rootless containers** are allowed. This approach enhances security by preventing any privileged access to containers.

Applications requiring elevated privileges must be adapted, as their deployment will not be permitted. This restriction also applies to **Helm Charts** and **operators** using non-rootless images, making their use incompatible with the infrastructure.

### Restrictions on ClusterRoles

In our OpenShift offering, access management at the cluster level is strictly regulated to ensure **security and compliance** with SecNumCloud.

This means there are **restrictions on ClusterRoles**, limiting global privileges. While these restrictions may require technical adjustments, they are essential to enhance the resilience and stability of the environment.

Our support team is available to assist you in adapting your configurations and advise you on possible alternatives.

### Restrictions on Security Context Constraints (SCC)

**Security Context Constraints (SCC)** are enforced and cannot be modified by users. As a result, container execution parameters (such as access privileges, Linux capabilities, etc.) are predefined and non-customizable.

This restriction aims to prevent unauthorized access to critical cluster resources. Applications requiring specific security contexts must be adapted to comply with the existing SCCs.

From an operational standpoint, this may require architectural adjustments and modifications to deployment processes, particularly for **Helm Charts** and **operators** that do not adhere to these constraints.

### Limitations on Custom Resource Definitions (CRDs)

To ensure **SecNumCloud compliance**, the use of **Custom Resource Definitions (CRDs)** and custom controllers is restricted.

This measure, tied to cluster permissions, prevents the deployment of unauthorized resources that could impact the stability and security of the infrastructure. It also applies to **operators** and **Helm Charts**, with limitations on **RBAC** permissions.

**Non-certified CRDs** may be rejected to ensure cluster integrity. Only **CRDs from certified operators or Helm Charts** are allowed after validation by our services.

Our support team can guide you through this process and advise on best practices to follow.

### Removal of support for dynamic IP addresses for runners

**OpenShift SecNumCloud runners** must be configured with **static IP addresses**.

This requirement ensures secure access to **OpenShift APIs**, administration interfaces, and access management tools in the **Cloud Temple** console.

**Dynamic IP addresses are not supported**, requiring appropriate configuration to ensure connectivity and security of the components.

## Información útil

• Si los componentes de hardware en el nivel de la plataforma se vuelven obsoletos y es necesario migrar a nuevos recursos de cómputo, Cloud Temple se encarga de todas las migraciones de hardware sin coste adicional y sin interrupción del servicio.

• Para probar OpenShift, Cloud Temple no proporciona un entorno dedicado, pero puede utilizar [las plataformas de prueba de RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Para la automatización de su infraestructura, prefiera el proveedor oficial de Terraform para OpenShift.