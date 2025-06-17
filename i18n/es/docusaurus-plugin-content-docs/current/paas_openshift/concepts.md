---
title: Conceptos
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentación de Red Hat OpenShift

**Red Hat OpenShift** es una plataforma de contenedores empresarial que automatiza el despliegue, la gestión y la escalabilidad de las aplicaciones contenerizadas. Es una plataforma construida alrededor de Docker, un sistema de contenerización que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y de Kubernetes, un sistema de orquestación de contenedores, que gestiona la ejecución y la coordinación de los contenedores en un clúster de servidores.

### Funcionalidades principales de Red Hat OpenShift :

- **Despliegue y gestión automatizados :** OpenShift simplifica el proceso de despliegue de aplicaciones automatizando las rutinas de gestión como el escalado, la salud y la vida útil de los contenedores. Proporciona un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte de múltiples lenguajes y servicios :** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caché y bases de datos, permitiendo así a los desarrolladores centrarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD) :** OpenShift integra herramientas de CI/CD que automatizan el pipeline de desarrollo de software, desde el primer commit hasta el despliegue en producción, fomentando así las prácticas DevOps.

- **Gestión de operaciones :** OpenShift proporciona herramientas para el monitoreo, gestión del rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y el rendimiento de los sistemas.

- **Seguridad reforzada :** La plataforma está diseñada con seguridad integrada, ofreciendo controles de acceso basados en roles, separación de tareas y gestión automática de secretos para proteger aplicaciones y datos.

### Ventajas de Red Hat OpenShift :

- **Flexibilidad :** Los desarrolladores pueden trabajar con las herramientas, lenguajes y frameworks de su elección.
- **Eficiencia operativa :** OpenShift optimiza el uso de los recursos, reduce el tiempo de lanzamiento al mercado y mejora la productividad de los desarrolladores.
- **Escalabilidad :** La plataforma gestiona automáticamente el escalado de las aplicaciones para responder a las variaciones de la demanda.
- **Seguridad y cumplimiento :** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y cumplimiento.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones contenerizadas, ofreciendo una plataforma sólida, segura y flexible para las empresas que adoptan enfoques modernos de desarrollo de software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de manera transparente con el ecosistema de OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para aplicaciones contenerizadas, apoyando así los entornos de desarrollo modernos centrados en contenedores y microservicios. ODF está diseñada para simplificar y automatizar la gestión de datos en entornos cloud híbridos y multicloud, proporcionando una base sólida para aplicaciones críticas para empresas.

#### Funcionalidades clave de OpenShift Data Foundation:

- **Almacenamiento persistente:** ODF proporciona una capa de almacenamiento persistente para los contenedores, esencial para las aplicaciones empresariales como las bases de datos, los sistemas de gestión de contenido y las aplicaciones que requieren un estado persistente.

- **Multinube y Híbrido:** Diseñado para la nube híbrida y multinube, ODF permite una experiencia coherente de gestión de datos a través de diferentes entornos en la nube, facilitando la movilidad de las aplicaciones y los datos.

- **Automatización y Orquestación:** La integración profunda con Kubernetes y OpenShift permite a ODF automatizar el provisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento en función de las necesidades de las aplicaciones.

- **Alta disponibilidad y Resiliencia:** ODF utiliza la replicación y las instantáneas de datos para garantizar la alta disponibilidad y la durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de los datos:** La solución integra funciones de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y cumplimiento personalizables.

#### Ventajas de Red Hat OpenShift Data Foundation:

- **Flexibilidad Operativa:** ODF permite a las empresas gestionar eficazmente sus datos en entornos distribuidos, ofreciendo la flexibilidad necesaria para responder a los requisitos cambiantes de las aplicaciones modernas.

- **Simplificación de la Gestión de Datos:** Al automatizar muchas tareas de gestión de datos, ODF reduce la complejidad y libera los recursos de TI para que se concentren en iniciativas de mayor valor añadido.

- **Optimización de Costos:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costos evitando la sobrecapacidad y utilizando de manera más eficiente los recursos disponibles.

- **Mejora del Rendimiento:** ODF está diseñado para proporcionar un alto rendimiento para las aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución avanzada de almacenamiento de datos que refuerza la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales desplegadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF desempeña un papel crucial en la capacidad de las empresas para aprovechar plenamente el potencial de las tecnologías de contenedores y nube híbrida.

## Arquitectura general de la plataforma

### Generalidades

La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, implementada nativamente en [**tres zonas de disponibilidad distintas**](../additional_content/concepts_az.md) dentro de la misma [región](../additional_content/concepts_regional.md) de Cloud Temple. Esta arquitectura trizona aumenta significativamente la disponibilidad y la resiliencia de los datos.


La plataforma está compuesta por un plano de control y nodos de trabajo, gestionados todos por la infraestructura de Cloud Temple. El plano de control se distribuye equitativamente en las tres zonas de disponibilidad, garantizando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por láminas de cálculo, dispuestas de manera que cada zona de disponibilidad contenga una.

Para los nodos de trabajo, están disponibles varios tipos de láminas de cálculo, permitiendo así una adaptación flexible a diversos requisitos operativos:

| Unidades de trabajo Red Hat OpenShift 4 con Fundamentos de Datos - A la demanda - 1 mes                                                | Unidad                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plano de control - 3 nodos - Región FR1                                                                          | 1 plano dedicado            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - NODOS DE TRABAJO - TINY - 3 x ( 10 núcleos / 20 hilos - 64 GB de RAM - 512 GiB FLASH 1500 iops)                      | 3 trabajadores dedicados        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - NODOS DE TRABAJO - SMALL  - 3 x ( 20 núcleos / 40 hilos - 128 GB de RAM - 512 GiB FLASH 1500 iops)                   | 3 trabajadores dedicados        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - NODOS DE TRABAJO - STANDARD  - 3 x ( 32 núcleos / 64 hilos - 384 GB de RAM - 512 GiB FLASH 1500 iops)                | 3 trabajadores dedicados        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - NODOS DE TRABAJO - ADVANCED - 3 x ( 48 núcleos / 96 hilos - 768 GB de RAM - 512 GiB FLASH 1500 iops)                 | 3 trabajadores dedicados        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - NODOS DE TRABAJO - PERF - 3 x ( 56 núcleos / 112 hilos - 1,5 TB de RAM - 512 GiB FLASH 1500 iops)                    | 3 trabajadores dedicados        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - NODOS DE TRABAJO - GPU - 3 x ( 32 núcleos / 64 hilos - 512 GB de RAM - 512 GiB FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 trabajadores dedicados + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift Cloud Temple están disponibles con pago por uso o reserva de 12 meses.

**Notas** :

1. *El mantenimiento en condiciones operativas y de seguridad del plano de control es responsabilidad de Cloud Temple en el marco de un servicio PaaS.*

2. *Para el 15 de junio de 2024, la versión 1 de la plataforma está limitada intencionalmente a nivel software para un plano de control con 30 nodos de trabajo (cualquiera que sea el tipo de nodo) y un almacenamiento persistente global de 50 TiB. Si estas limitaciones son bloqueantes para su proyecto, póngase en contacto con el soporte.*

3. *Cada nodo de trabajo incluye 512 GiB de almacenamiento FLASH, lo que representa 1,5 TiB por unidad de trabajo (1 nodo por AZ).*

4. *Un nodo de trabajo puede gestionar hasta 250 pods por defecto. Este número es ajustable mediante el parámetro podsPerCore - por ejemplo, con 10 pods por núcleo en un nodo de 4 núcleos, tendrá un máximo de 40 pods. Para más detalles técnicos, consulte la [documentación sobre gestión de pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) y la [guía de límites de OpenShift](https://docs.openshift.com/container-platform/4.

16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *La oferta PaaS de Openshift incluye de forma nativa el acceso a las 3 zonas de disponibilidad, sin que sea necesario suscribirse adicionalmente.*

6. *Es posible agregar posteriormente almacenamiento en bloque al clúster de Openshift.*

7. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un clúster asignando un mayor número de nodos a una sola zona.*

### Oferta de RedHat desplegada dentro de la plataforma OpenShift Cloud Temple

La plataforma es una Redhat OpenShift 4 basada en [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e incluye [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Estrategia de copia de seguridad de su plataforma PaaS OpenShift

La copia de seguridad y restauración de la plataforma PaaS OpenShift es responsabilidad de Cloud Temple para la parte **ETCD** en el marco del manejo de la plataforma. **La copia de seguridad y restauración para la parte de despliegue y datos aplicativos es responsabilidad del Comitente**.

Cloud Temple pone a disposición de sus clientes la oferta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), plataforma especializada en gestión de datos para entornos Kubernetes. Diseñada para responder a las necesidades de protección de datos, ofrece funciones robustas para la copia de seguridad, restauración, migración y recuperación ante desastres. Kasten K10 se integra de forma nativa en entornos Kubernetes, ya sean gestionados en clusters en la nube o en sitio, y puede adaptarse a diferentes casos de uso, entre ellos la migración de clusters entre distintas distribuciones Kubernetes como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los casos de uso principales de Kasten K10 es **la migración de clusters entre distintas plataformas Kubernetes**. Ya sea para una transición hacia una infraestructura más robusta o para consolidar entornos existentes, Kasten K10 ofrece herramientas simples y eficaces para gestionar estas migraciones:

 - **Copia de seguridad y protección de datos** : durante la migración de un cluster Kubernetes Vanilla o VMware Tanzu hacia Red Hat Kubernetes Engine o OpenShift, el primer paso es copiar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias, así como los volúmenes de datos asociados. Esto incluye la copia de seguridad de los volúmenes persistentes (Persistent Volumes - PV), bases de datos, configuraciones y secretos. Kasten K10 admite una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estas copias de seguridad se almacenan de forma segura con opciones de cifrado y control de acceso granular, garantizando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración** : la migración entre distribuciones Kubernetes como Vanilla o Tanzu y soluciones Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias en arquitecturas y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso proporcionando una capa de abstracción para la portabilidad de las aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y datos de un cluster de origen hacia un cluster de destino, teniendo en cuenta las especificidades de cada entorno. Por ejemplo, los objetos Kubernetes como ConfigMaps, Secrets, PV, así como CRDs (Custom Resource Definitions) pueden migrarse considerando las restricciones propias de cada distribución Kubernetes, ya sea un cluster Red Hat OpenShift o Kubernetes Engine. El proceso es automatizado, lo que reduce considerablemente el riesgo de errores manuales. Además, Kasten K10 permite una migración progresiva o completa, según las necesidades, y ofrece visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y supervisión de la transición.

 - **Compatibilidad multi-nube y multi-distribución** : Kasten K10 está diseñado para funcionar en entornos híbridos y multi-nube, lo que lo convierte en una herramienta ideal para organizaciones que buscan migrar aplicaciones de clusters Tanzu o Vanilla hacia entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o infraestructuras en sitio. Esto garantiza una flexibilidad máxima.

máxima y permite a los equipos DevOps elegir el mejor entorno según las necesidades empresariales o las estrategias de modernización de infraestructura.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y copia de seguridad sin necesidad de una experiencia profunda en cada plataforma Kubernetes. La solución también cuenta con funcionalidades de automatización que permiten definir políticas de migración y copia de seguridad recurrentes, integrándose en los pipelines CI/CD para operaciones continuas. Los usuarios pueden programar migraciones o restauraciones según ventanas de mantenimiento, realizar pruebas de validación después de la migración y automatizar los procesos de conmutación por error en caso de problemas en el clúster de origen.

 - **Seguridad y cumplimiento**: en el marco de migraciones a entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento con normas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 garantiza el cifrado de los datos en tránsito y en reposo, además de ofrecer opciones de auditoría y trazabilidad de las operaciones de copia de seguridad y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sea en entornos de producción o de prueba. Kasten K10 es una solución indispensable para las empresas que desean migrar de forma eficiente y segura los clústeres Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine u OpenShift.

 La facturación se realiza según el número de worker node.

| Unidades de obra Redhat Openshift 4 con Data Foundations - Solución de Backup para Worker Node | Unidad     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protección de datos Kubernetes y movilidad de aplicaciones              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota** : *Atención, la volumetría de disco necesaria para el buen funcionamiento de su copia de seguridad debe preverse en el entorno de recepción de su copia de seguridad, generalmente en almacenamiento S3. No está incluida en las unidades de obra Openshift o Kasten.*

**(1)** _OADP no está instalado de forma nativa en el clúster. Solo Kasten está activado para la gestión de migraciones, copias de seguridad y restauración_

## Balanceadores de carga  

El entorno **SecNumCloud OpenShift** ofrece soluciones de balanceo de carga adaptadas a varios perímetros funcionales, garantizando una gestión segura y optimizada del tráfico.  

Los balanceadores de carga cubren cuatro perímetros distintos, apoyándose en diferentes niveles del modelo OSI:  

- **Acceso a las herramientas de administración** (servidor API y consola de OpenShift)  
- **Tráfico HTTP/HTTPS público**  
- **Tráfico HTTP/HTTPS privado**  
- **Tráfico específico que requiere una personalización avanzada**

### Acceso a las herramientas de administración  

El acceso a las herramientas de administración está seguro mediante balanceadores de carga dedicados. Estos están protegidos por controles de seguridad reforzados, entre los que se encuentra una lista blanca administrable a través de la consola **Cloud Temple**, garantizando una gestión estricta de los accesos.

### Tráfico HTTP/HTTPS público  

Los **LoadBalancers públicos**, basados en **HAProxy**, funcionan en el nivel **4** del modelo OSI. Permiten exponer sus cargas de trabajo en **HTTP/HTTPS** a través de **rutas** e **ingresos**, asegurando así una distribución eficiente y eficaz del tráfico entrante.

### Tráfico HTTP/HTTPS privado (Interconexión con sus servicios IaaS SNC)  

Los **LoadBalancers privados** facilitan la comunicación con sus servicios **IaaS SNC** sin exposición pública. Como sus homólogos públicos, garantizan la distribución del tráfico **HTTP/HTTPS** manteniendo un entorno seguro e aislado.

### Tráfico específico  

El **tráfico específico** se gestiona a través del LoadBalancer **MetalLB**. Soporta necesidades avanzadas que requieren una personalización fina, por ejemplo:  

- La conexión a una base de datos mediante **TCP**  
- La gestión de flujos **UDP** para aplicaciones en tiempo real o con baja latencia  
- El enrutamiento de protocolos avanzados como **QUIC** o **MQTT-SN**, ofreciendo así mayor flexibilidad  

Esta solución permite gestionar sus flujos específicos, tanto para sus interconexiones privadas como para sus necesidades de exposición pública.  

El enrutamiento se realiza mediante **direcciones IP públicas y privadas dedicadas**. Por defecto, se le asignan direcciones IP para la exposición de sus servicios:  

- **4 direcciones IP públicas**  
- **254 direcciones IP privadas**  

Si estos recursos no son suficientes para soportar su carga de trabajo, puede realizar una solicitud a nuestros servicios para la asignación de direcciones IP adicionales, ya sean **públicas** o **privadas**.  

> **A tener en cuenta** : Los LoadBalancers integrados no actúan como **WAF**. Una solución **WAF as a Service** estará disponible próximamente.

## Derechos y Permisos

Aquí están los permisos principales implementados:

|       Grupo       |         d'API          |                                                                                       Permisos de Recursos                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar |
|        Core        |          ("")          |                                                                                           Secretos Crear                                                                                           |
|config.kio.kasten.io|        Perfiles        |                                                                          Obtener, Listar, Escuchar, Crear, Actualizar, Parchear, Eliminar                                                                           |
|config.kio.kasten.io|     Plantillas,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Obtener, Listar                                                 |
|config.kio.kasten.io|         Todos         |                                                                                    los recursos (*) Obtener, Listar                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Trabajos Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                                           |
|     Networking     |       Ingresos,       |                                                                  Políticas de Red Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                                           |
|       Route        |      (OpenShift)       |                                                                       Rutas Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                                       |
|       Build        |      (OpenShift)       |                                                          Configuraciones de Construcción, Construcciones, Registros de Construcción Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                           |
|       Image        |      (OpenShift)       |                                                           Flujos de Imágenes, Etiquetas de Flujos de Imágenes Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                            |
|        Apps        |      (OpenShift)       |                                                                 Configuraciones de Despliegue Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                                  |
|      Template      |      (OpenShift)       |                                                            Plantillas, Instancias de Plantillas Crear, Obtener, Listar, Escuchar, Actualizar, Parchear, Eliminar                                                            |

|   Authorization    |         Roles,         |                                                                    RoleBindings Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                                    |
|      Project       |      (OpenShift)       |                                                                                Proyectos Obtener, Eliminar, Actualizar, Parchear                                                                                 |
|     Operators      |     Suscripciones,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                        |
|    Cert-Manager    |     Certificados,      |                                                    Solicitud de Certificados, Emisores, Emisores en Cluster Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                    |
|      Logging       |      (OpenShift)       |                                                       Forwarders de Registro en Cluster, Configuraciones de Registro en Cluster Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                        |
|      Storage       |    Instantáneas de Volumen     |                                                                          Obtener, Listar, Observar, Crear, Actualizar, Parchear, Eliminar                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                           |
|       NooBaa       |     Almacenamientos de Respaldo,     |                                                           Clases de Cubos, Cuentas de NooBaa Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                            |
|    ObjectBucket    |  Reclamaciones de Cubo de Objeto,   |                                                                   Cubos de Objeto Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                                    |
|        OCS         |      (OpenShift)       |                                                         Clusters de Almacenamiento, Consumidores de Almacenamiento Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                          |
|       Local        |        Almacenamiento         |                                                        Volúmenes Locales, Descubrimientos de Volúmenes Locales Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                        |
|        CSI         |         Complementos         |                                                           Nodos de Complementos CSI, Vallas de Red Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodos Obtener                                                                                              |
|      Security      |Revisiones de Políticas de Seguridad de Pods|                                                                                               Crear                                                                                               |
|       Custom       |       Recursos        |                                       Diversos recursos personalizados relacionados con Kasten K10, Keycloak, etc. Crear, Obtener, Listar, Observar, Actualizar, Parchear, Eliminar                                        |

## Restricciones y requisitos de seguridad en OpenShift SecNumCloud

### Plan de control dedicado  

La ejecución de cargas de trabajo en el **plan de control** es estrictamente prohibida. Esta restricción garantiza la seguridad y la estabilidad de la plataforma OpenShift en **SecNumCloud**, limitando el acceso a los recursos críticos.

### Prohibición de contenedores con privilegios elevados (rootless)  

Para cumplir con los requisitos de seguridad del **repositorio SecNumCloud**, solo los **contenedores rootless** están permitidos. Este enfoque refuerza la seguridad al impedir cualquier acceso privilegiado a los contenedores.  

Las aplicaciones que requieren privilegios elevados deberán adaptarse, ya que su despliegue no será permitido. Esta restricción también se aplica a los **Helm Charts** y a los **operadores** que utilizan imágenes no rootless, lo que hace que su uso sea incompatible con la infraestructura.

### Restricciones sobre ClusterRoles  

En nuestra oferta de OpenShift, la gestión de los derechos de acceso a nivel de cluster está estrictamente regulada para garantizar **seguridad y conformidad** con SecNumCloud.  

Esto implica **restricciones sobre los ClusterRoles**, limitando los privilegios globales. Aunque estas restricciones puedan requerir ajustes técnicos, son esenciales para reforzar la resiliencia y la estabilidad del entorno.  

Nuestro equipo de soporte está disponible para asistirle en la adaptación de sus configuraciones y aconsejarle sobre las alternativas posibles.

### Restricciones sobre los Security Context Constraints (SCC)  

Los **Security Context Constraints (SCC)** son impuestos y no pueden ser modificados por los usuarios. En consecuencia, los parámetros de ejecución de los contenedores (privilegios de acceso, capacidades de Linux, etc.) están predefinidos y no son personalizables.  

Esta restricción tiene como objetivo evitar cualquier acceso no autorizado a los recursos críticos del cluster. Las aplicaciones que requieran contextos de seguridad específicos deberán adaptarse para cumplir con los SCC vigentes.  

Desde un punto de vista operativo, esto puede requerir ajustes arquitecturales y adaptaciones en los procesos de despliegue, especialmente para los **Helm Charts** y los **operadores** que no cumplen con estas restricciones.

### Limitaciones sobre las Custom Resource Definitions (CRDs)  

Para garantizar la **conformidad SecNumCloud**, el uso de las **Custom Resource Definitions (CRDs)** y los controladores personalizados está restringido.  

Esta medida, relacionada con los derechos en el cluster, impide el despliegue de recursos no autorizados que puedan afectar la estabilidad y la seguridad de la infraestructura. También se aplica a los **operadores** y **Helm Charts**, con limitaciones en los derechos **RBAC**.  

Las **CRDs no certificadas** pueden ser rechazadas para garantizar la integridad del cluster. Solo las **CRDs provenientes de operadores o Helm Charts certificados** están autorizadas tras la validación por nuestros servicios.  

Nuestro equipo de soporte puede guiarte en este proceso y aconsejarte sobre las buenas prácticas a seguir.

### Eliminación del soporte para direcciones IP dinámicas para los runners  

Los **runners OpenShift SecNumCloud** deben configurarse con **direcciones IP fijas**.  

Esta exigencia garantiza el acceso seguro a las **API OpenShift**, a las interfaces de administración y a las herramientas de gestión de acceso de la consola **Cloud Temple**.  

Las **direcciones IP dinámicas no son compatibles**, requiriendo una configuración adecuada para garantizar la conectividad y la seguridad de los componentes.

## Consejos útiles

• Si los componentes físicos de la plataforma se vuelven obsoletos y es necesario migrar a nuevas instancias de cómputo, Cloud Temple se encarga de todas las migraciones de hardware sin costo adicional y sin interrupción del servicio.

• Para probar OpenShift, Cloud Temple no proporciona un entorno dedicado, pero puede utilizar [las plataformas de prueba de RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Para la automatización de su infraestructura, prefiera el proveedor oficial de Terraform de OpenShift.