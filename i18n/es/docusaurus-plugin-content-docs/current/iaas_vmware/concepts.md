---
Título: Conceptos
---

La oferta __IaaS (Infrastructure as a Service)__ del Cloud Temple está diseñada para satisfacer necesidades críticas de continuidad y recuperación ante desastres, con un enfoque especial en sectores exigentes como la industria, el banco y la seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y una optimización de rendimiento para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento de bloques.
- Red: __JUNIPER__.
- Virtualización: __VMware__, ofreciendo una base confiable y probada para gestionar sus entornos cloud.
- Backup: __IBM Spectrum Protect Plus__, para la orchestración y el almacenamiento de los backups.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, asegurando una amplia compatibilidad con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada a través de APIs y el proveedor Terraform, la oferta IaaS de Cloud Temple ofrece una infraestructura única:

- **Recursos dedicados**: Las núcleos de cálculo, volúmenes de almacenamiento y pilas lógicas (virtualización, backup, firewalling, etc.) nunca se compartirán entre los clientes.
- **Previsibilidad máxima**: Controlará los tasas de virtualización, la presión en IOPS del almacenamiento y disfrutará de una facturación clara, a la mensualidad de consumo.

La plataforma está calificada como SecNumCloud por [ANSSI](https://www.ssi.gouv.fr/), lo que garantiza un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y a demanda.
- Almacenamiento a demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como código mediante APIs y proveedor Terraform.

## Benefits

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Almacenamiento de datos en Francia y cumplimiento con el RGPD.                                                                                          |
| Seguridad            | Plataforma altamente segura, calificada SecNumCloud, HDS (Almacenamiento de Datos de Salud) y ISO 27001, así como ISAE 3402 tipo II. |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo períodos de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad y recuperación ante desastres según sea necesario.                                                               |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Disponible al demanda | Recursos disponibles a demanda.                                                                                                          |

## Zonas de disponibilidad y regiones

El producto IaaS VMware se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../adicional_contenido/conceptos_az.md) forma parte de una [región](../adicional_contenido/conceptos_regional.md).

Este tipo de despliegue permite seleccionar la ubicación del cluster y distribuirlo sobre diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Cómputo

Las cuchillas proporcionadas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Son completamente administradas por Cloud Temple (firmware, versión del sistema operativo, etc.) a través de la consola Cloud Temple.

Varios tipos de cuchillas de cómputo están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenedorización, etc.). Estas cuchillas presentan características y rendimientos variados para responder mejor a sus necesidades. El catálogo de cuchillas de cómputo evoluciona regularmente.

En el contexto de una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por cuchillas de cómputo del mismo tipo (no es posible mezclar cuchillas de diferentes tipos en el mismo clúster).

| Referencia           | RAM  __(1)__ | Frecuencia __(2)__                        | Número de núcleos / hilos  | Conectividad __(3)__ | GPU __(4)__          | SKU para la oferta VMware       |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Cuchilla ECO v3       | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos              | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Cuchilla STANDARD v3  | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Cuchilla ADVANCE v3   | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Cuchilla PERFORMANCE 1 v3 | 384 GB   | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Cuchilla PERFORMANCE 2 v3 | 768 GB   | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Cuchilla PERFORMANCE 3 v3 | 1536 GB  | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Cuchilla PERFORMANCE 4 v3 | 512 GB   | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Observaciones__:

- __(1)__ La cantidad de memoria entregada es la físicamente disponible en las cuchillas. No es posible modificar la cantidad física de memoria de una cuchilla.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para rendimiento máximo a nivel del BIOS.

- __(3)__ La conectividad física es compartida para el acceso de red y el acceso de almacenamiento en bloque, siendo la plataforma CISCO convergente.

- __(4)__ La oferta de GPU disponible evoluciona constantemente. Al 1° de mayo de 2024, la oferta se basa en GPU NVIDIA LOVELACE L40S. Por defecto, la cuchilla PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Contacte al soporte para más precisión si es necesario.

La disponibilidad de la oferta de cómputo es del 99,99%, calculada mensualmente, período de mantenimiento incluido. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidente. También debe poseer al menos dos hosts por clúster y activar la funcionalidad __High Availability__ (HA).
Esta funcionalidad permite a su arquitectura reiniciar automáticamente sus máquinas virtuales en el segundo hipervisor.
En el caso de que una zona de disponibilidad contenga solo un hipervisor, el reinicio automático no es posible.

## Red

El servicio de red del plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en VPLS, ofreciendo una segmentación flexible y eficiente para satisfacer las necesidades de los clientes en materia de conectividad y aislamiento de red.

### VLANs de nivelación 2

Las VLANs disponibles en la oferta de IaaS son de tipo **nivel 2**, proporcionando una aislamiento de red completo y una configuración adaptable según las necesidades.

#### Principales Conceptos

- **Compartición entre clusters y zonas de disponibilidad (AZ)**:
  - Las VLANs pueden compartirse entre diferentes AZ e incluso entre clústeres pertenecientes al mismo proveedor, facilitando las comunicaciones internas.
- **Propagación inter-tenantes**:
  - Las VLANs pueden propagarse entre múltiples tenantes que pertenezcan a la misma organización, facilitando las comunicaciones internas.

### Reducción del rendimiento de red

La infraestructura de red asegura una baja latencia para un rendimiento óptimo:

- __Latencia intra-zona__ : Menor que __3 ms__.
- __Latencia inter-zonas__ : Menor que __5 ms__.

---

### Puntos clave

1. **Flexibilidad**: Las VLANs pueden configurarse para adaptarse a entornos multi-clusters y multi-tenientes.
2. **Alta performance**: Se garantiza una latencia mínima para una comunicación rápida y eficiente entre zonas de disponibilidad.
3. **Isolación y seguridad**: Las VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

## Storage Block

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento necesario para los entornos de nuestros clientes gracias a la gran cantidad de memoria caché embarcada en los controladores y a la posibilidad de distribuir todos los IOPS de un servidor sobre varios SAN.

Además, se utiliza para permitir la replicación de sus LUNs de almacenamiento en bloque entre zonas de disponibilidad o facilitar las intervenciones en las unidades de almacenamiento.

El almacenamiento principalmente es del tipo FLASH NVME dedicado a cargas de trabajo profesionales. Los discos se utilizan por las unidades de almacenamiento en [__'Distributed RAID 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivado con un enfoque en la eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                         | Unidad | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      |
| Mass Storage - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__:*-

- El rendimiento efectivo de una clase de almacenamiento está relacionado con la volumen real solicitado, según la notación "IOPS/To", que significa "límite de IOPS por Tera alocado". Por ejemplo, un volumen de 0.5To en la clase de rendimiento 'Standard' tendrá una limitación máxima de IOPS de 750IOPS, mientras que un volumen de 10To en la clase de rendimiento 'Ultra' tendrá una limitación máxima de IOPS de 150000 IOPS.
- La limitación de IOPS se aplica al volumen, por lo tanto a la notion de Datastore para un entorno VMware.
- La disponibilidad del almacenamiento es del 99.99% mensualmente, incluyendo el plazo de mantenimiento,
- No hay restricciones o cuotas sobre lectura ni escritura,
- No se factura por IOPS,
- No existe un compromiso de rendimiento en la clase __'Mass Storage'__,
- La dimensión mínima de una LUN de almacenamiento es de 500Gio,
- Al utilizar un mecanismo de replicación de almacenamiento, las prestaciones deben ser idénticas en ambas zonas de disponibilidad,
- No se implementan mecanismos de optimización inteligente como la compresión o el desduplicado: cuando reserva 10Tio de almacenamiento, obtiene físicamente 10Tio útil de almacenamiento implementado en las máquinas IBM.
- Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el paquete de cálculo VMware

Al utilizar el almacenamiento en bloque como datastore en el paquete de cálculo VMware de Cloud Temple, __debes considerar varias consideraciones importantes__:

1. **Archivo de swap (.VSWP) al iniciar máquinas virtuales**: Al iniciar una máquina virtual, esta crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debes tener disponible en tu datastore espacio libre igual a la suma de las memorías de tus máquinas virtuales. Por ejemplo, si tu datastore tiene 1 TiB de almacenamiento bloque y deseas iniciar 10 máquinas virtuales de 64 GiB cada una, necesitarás 640 GiB de espacio en disco. Sin este espacio, el arranque de las máquinas estará limitado por la capacidad disponible para crear los archivos de swap.

2. **Espacio libre para snapshots de respaldo**: El servicio de respaldo utiliza instantáneas (snapshots). Por lo tanto, siempre debes tener suficiente espacio libre para permitir la creación de una instantánea durante el respaldo de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y el tiempo necesario para realizar el respaldo. En general, se recomienda mantener al menos 10 % de espacio libre para esta operación.

3. **Gestión de discos dinámicos**: Ten cuidado con el uso de discos dinámicos. Si no controlas su crecimiento, un espacio físico insuficiente puede resultar en un congelamiento (freeze) de la máquina virtual en el mejor de los casos, o incluso un fallo con corrupción en el peor de los casos. Es crucial supervisar atentamente el espacio disponible en tus datastores cuando se utiliza este tipo de disco.

Una gestión proactiva del espacio disque es esencial para garantizar el correcto funcionamiento de tus máquinas virtuales y la fiabilidad de los respaldos. Asegúrate siempre de tener el espacio necesario para los archivos de swap, las instantáneas y el crecimiento de los discos dinámicos.

## Backup Storage Allocation

Backup storage for your virtual machines is automatically provisioned by the platform, within the allocated quota.

| Reference                | Unité | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - BACKUP   | 1 TiB | csp:(region):iaas:storage:block:backup:v1 |

## Replicación del almacenamiento en modo bloque

Este proceso implica la creación de copias idénticas de los datos en múltiples ubicaciones para garantizar la disponibilidad, la redundancia y el mantenimiento de la integridad de los datos. La replicación del almacenamiento se realiza mediante técnicas como la replicación asíncrona, sincrónica o distribuida, dependiendo de las necesidades específicas de cada sistema.

#### Principes

Pour facilitater la mise en œuvre de vos plans de reprise après sinistre, lorsque des mécanismes applicatifs de continuité d'activité ne sont pas viables et que la réplication des machines virtuelles n'est pas adaptée, Cloud Temple offre des **mécanismes de réplication du stockage en mode bloc entre les zones de disponibilité d'une région**.

Ces mécanismes de réplication sont appliqués sur les LUNs (Large Unified Nodes) de stockage de vos environnements, en complément des sauvegardes. Le choix de l'utilisation d'un mécanisme de réplication dans un environnement **dépend de nombreux facteurs**, tels que la criticité du service, la tolérance aux pertes de données autorisée ou encore les performances souhaitées pour l'application.

Cloud Temple propose deux types de mécanismes déployés dans une configuration actif/passif :

- La réplication **asynchrone** (ou __'Global Mirror'__): *La fonction __'Global Mirror'__ fournit un processus de copie asynchrone. Lorsqu'un hôte écrit sur le volume primaire, la confirmation de l'achèvement de l'E/S est reçue avant que l'opération d'écriture ne se termine pour le volume secondaire. Si une opération de basculement est initiée, l'application doit récupérer et appliquer toutes les mises à jour qui n'ont pas été confirmées sur le volume secondaire. Si les opérations d'E/S sur le volume primaire sont temporairement suspendues, le volume secondaire peut devenir une correspondance exacte du volume primaire. Cette fonction est comparable à un processus de sauvegarde continue dans lequel les dernières mises à jour sont toujours incomplètes.*

- La réplication **synchrone** (ou __'Metro Mirror'__): *La fonction __'Metro Mirror'__ est un type de copie à distance qui crée une copie synchrone des données d'un volume primaire vers un volume secondaire. Avec des copies synchrones, les applications hôtes écrivent sur le volume primaire, mais ne reçoivent pas de confirmation que l'opération d'écriture est terminée tant que les données ne sont pas écrites sur le volume secondaire. Cela garantit que les deux volumes contiennent des données identiques lorsque l'opération de copie est terminée. Après que l'opération de copie initiale est terminée, la fonction Metro Mirror maintient en permanence une copie entièrement synchronisée des données source sur le site cible. Depuis le 1° janvier 2024, la fonction 'Metro Mirror' n'est plus commercialisée.*

On définit alors un site dit "actif" ou "principal" et un site "passif" ou "standby". Le plan de reprise après sinistre est activé en cas de sinistre ou dans le cadre d'une demande de test du PRA (Plan de Reprise Après Sinistre). Le site passif prend ensuite le relais du site actif.

#### Asynchronous Replication

When your workloads require short downtime and using application-level or virtual machine replication mechanisms is not feasible or suitable, it's possible to replicate a SAN storage LUN between two availability zones within the same region.

This offering provides a __RPO of 15 minutes__ and an __RTO below 4 hours__. It allows for a much faster recovery compared to traditional backup restoration processes.

In a storage volume replication setup (__Global Mirror__), the SAN virtualization controllers in both availability zones collaborate to perform write operations on both sites simultaneously. The master site does not wait for the write confirmation from the remote site's SAN controller.

The steps of a write operation are as follows:

1. A hypervisor intends to perform __a write operation on a Global-Mirror volume__: it sends the request to the local SAN controller in its availability zone,
2. The local SAN controller requests the remote site's SAN controller to perform the write operation,
3. The local SAN controller does not wait for the remote site's confirmation and performs the write locally,
4. It issues __write acknowledgment__ to the hypervisor that initiated the request,
5. __Hypervisors on the distant site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster at the primary data center, the maximum amount of lost data corresponds to the maximum of 15 minutes of writing. |
| RTO < 4H  | In case of a disaster at the primary data center, recovery is guaranteed within 4 hours, depending on the complexity of the environment.          |

Upon activation of the PRA (Planned Recovery Action), Cloud Temple's team replicates the 'Global Mirror' LUN to the distant hypervisors for them to access the data. This solution requires reserving computing and RAM resources on the standby site for failover in case of a disaster.

The use of this technology also necessitates doubling the storage space: it's essential to have exactly the same amount of space on the distant site as on the local site.

Using this mechanism can impact application performance by 10%. Only storage classes with 500 Iops/To, 1500 Iops/To, and 3000 Iops/TO are compatible.

| Reference                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__:

- Since the offering is asynchronous, there's a possibility during a disaster that some disk operations are not written to the remote site. This may lead to data inconsistency, mitigated through risk assessment in the disaster recovery plan.
- Block storage replication is performed transparently for virtual machines and applications,
- Consequently, it's crucial to favor application-level or potentially VM replication scenarios,
- Computing and memory resources on the recovery site can be reduced to optimize costs if a degraded state is acceptable during the disaster recovery process.*

## Virtualización VMware con Cloud Temple SecNumCloud

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud se basa en la tecnología __VMware vSphere__.

La plataforma es gestionada por Cloud Temple de manera automática (mantenimiento de seguridad, mantenimiento operativo, etc.). Puede ser controlada a través de la interfaz gráfica de la consola Shiva o mediante las APIs asociadas.

*NOTA:* Debido a razones de seguridad relacionadas con la calificación SecNumCloud, **no es posible que el cliente acceda directamente a la plataforma de virtualización VMware (ni tampoco al vCenter en particular)**. De hecho, la calificación SecNumCloud requiere una **total segregación** entre las interfaces de control técnico y la interfaz del cliente (la consola Shiva).

- Los productos implementados son VMware ESXi, VMware vCenter y VMware Replication.
- *El red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es controlada físicamente por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino únicamente SANs IBM en fiber channel 32G.*
- *No se implementan ningún tipo de optimización oculta (compresión, deduplicación, etc.).*

### Definición de un grupo de cámaras de cómputo ('Cpool')

El **Cpool** es un conjunto de hyperviseurs VMware ESXi, también conocido como *cluster ESX*.

Los servidores que forman parte de un **Cpool** pertenecen a la misma tenencia y al mismo área de disponibilidad (AZ). Es obligatorio que todos ellos tengan la misma clase: no es posible mezclar modelos de cámaras de cómputo diferentes dentro del mismo cluster.

Todas las cámaras de cómputo, entregadas con el máximo uso de memoria física, aplican una limitación de uso de RAM de forma lógica al nivel del cluster para asegurar que coincida con la RAM facturada.

Por defecto, cada cámara cuenta con 128 GB de memoria activada dentro del **Cpool**.

Un **Cpool** puede contener hasta 32 hyperviseurs por defecto. En caso de superar esta limitación, será necesario crear un segundo cluster.

El almacenamiento puede compartirse entre los **Cpool**.

### Allocation de Memoria para un 'Cpool'

La asignación de memoria RAM es configurable por cluster. Puedes reducir o aumentar la cantidad de memoria disponible para que coincida con tus necesidades en función del tamaño del cluster.

__Atención: No superes una media de 85 % de consumo de memoria por nódulo de cálculo__.
De hecho, la tecnología VMware emplea un método de optimización de tipo compresión que puede afectar significativamente las prestaciones de tus cargas de trabajo y dificultar el diagnóstico.
Además, una presión memoria excesiva en tus núcleos de cálculo obligará al hypervisor a descargar parte de su memoria al disco para satisfacer los requisitos de las máquinas virtuales.

Este caso, conocido como __'Ballooning'__, impacta fuertemente las prestaciones de todas las máquinas virtuales ubicadas en el almacenamiento (datastore) afectado.
__El diagnóstico se complica en este escenario__, ya que tu metrología observará impactos en la CPU y no en la memoria o el almacenamiento.
Recuerda también que, al iniciar una máquina virtual, el hypervisor crea automáticamente un archivo de swap de memoria (.vswap) del tamaño de la memoria del núcleo de cálculo en cuestión. Debes tener en cuenta este dimensionamiento al planificar tu almacenamiento.

Cada nódulo de cálculo está equipado con 128 GB de memoria activamente asignada softwaremente en el __'Cpool__', pero dispone físicamente de toda la memoria disponible.

Por ejemplo, para un cluster de tres hosts de tipo ```vmware:standard:v2```, la reserva de memoria RAM al activar el _*'Cpool'* será de 3 x 128 GB = 384 GB de memoria. Puedes extenderlo hasta el máximo de 3 x 384GB = 1152 GB de memoria.

    Mínimo de memoria para un 'Cpool' = número de host x 128 GB
    Máximo de memoria para un 'Cpool' = número de host x la cantidad de memoria física del núcleo de cálculo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple ofrece un catálogo de `Templates` que actualiza regularmente y enriquece por parte de nuestros equipos.
Incluye a la fecha actual varias decenas de `Templates` e imágenes para montar sobre sus máquinas virtuales.

### Actualización de los Hypervisor

Cloud Temple ofrece actualizaciones regulares de los hypervisores para garantizar la aplicación de parches de seguridad. Sin embargo, la actualización de los hypervisores queda a su responsabilidad, ya que no tenemos visión de sus restricciones empresariales.

El proceso de actualización está completamente automatizado. Para garantizar un servicio continuo, se requieren al menos dos hypervisores por cluster durante la actualización. Asegúrese de tener las permisos necesarios para realizar estas acciones.

### Gestión del afinidad de sus máquinas virtuales

Las **reglas de afinidad y anti-afinidad** permiten controlar la ubicación de las máquinas virtuales en sus virtualizadores.
Permite gestionar el uso de recursos de su **Cpool**.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o aislar las cargas de trabajo intensivas en recursos.
En un **Cpool** VMware, estas reglas se utilizan comúnmente para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de estas reglas:

- **Reglas de Afinidad**: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo servidor físico.
Se utilizan para mejorar las prestaciones manteniendo las máquinas virtuales que comunican con frecuencia
en el mismo servidor, lo que reduce la latencia de red. Las reglas de afinidad son útiles en escenarios donde la performance es crítica, como en bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- **Reglas de Anti-afinidad**: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten en el mismo servidor físico.
Son importantes para la disponibilidad y resiliencia, por ejemplo, para evitar que las máquinas críticas caigan si un servidor único falla.
Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad, como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no deseas que tus dos Actives Directory estén en el mismo virtualizador.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla, su estado de activación (__'Estado'__) y las máquinas involucradas de tu cluster de virtualizadores.

*Nota: Las reglas de afinidad/anti-afinidad propuestas en la consola se refieren a las máquinas virtuales entre sí (no entre hyperviseurs y máquinas virtuales).*

### Asynchronous Replication of Virtual Machines in VMware Environment

Asynchronous replication of your virtual machines involves pushing write operations from the source hypervisor to the standby site at regular intervals.

Following an initial hot copy of the entire active storage on the standby site, only writes are pushed to the standby machine at regular intervals (ranging from hourly to every 24 hours, depending on the volume of writes).

This virtual machine replication leverages the instant cloning mechanism of the hypervisor. Consequently, this solution shares similar drawbacks, particularly sensitivity to the volume of writes by the virtual machine, as the instant clone process is a recursive mechanism for closing the instant clone.

An example of a machine that typically does not support virtual machine replication is an FTP server receiving real-time video feeds from surveillance cameras. Such a machine spends most of its time writing and would be unable to complete an instant clone without pausing the operating system for a significant period (several tens of minutes). If the hypervisor cannot close the instant clone, it will do so automatically, with no intervention possible except potentially corrupting the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 1H to 24H   | In case of a disaster at the primary datacenter, the maximum amount of data lost is that of the latest write pushed to the standby site. |
| RTO < 15mn     | Operation to restart the virtual machine stopped on the distant site                                                                                |

In case of need or in case of failure on a machine at the primary site, the mirrored machine on the standby site is activated. Recovery requires having reserved compute and memory resources on the standby site as well as identical storage capacity on the passive site as on the active site.

| Reference                         | Unité | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The minimum RPO must be defined based on the virtual machine's write frequency.*

## Virtual Machine Backups

Cloud Temple offers an **integrated, non-detachable cross-platform backup solution** (it's mandatory for secnumcloud French qualification).

Backups are stored in a high availability zone and on a physically separate datacenter from the one hosting the virtual machine.

This setup safeguards against major failures at the production datacenter and allows restoration onto a secondary datacenter (e.g., due to fire) by leveraging another infrastructure.

This solution encompasses:

- **Hot, on-site backup of the entire disk set**,
- **Instantaneous presentation and startup of a virtual machine from mass storage infrastructure** followed by hot reload onto production SANs,
- **Partial file restoration from backups**,
- **Limited retention based solely on mass storage allocation**.

This backup infrastructure is built upon IBM Spectrum Protect Plus, an agentless architecture solution known for its simplicity and ease of use. It also enables automated backup processes and space optimization on mass storage.

Backup speeds and restoration times are dependent on the rate of data changes in environments. Backup policies can be configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

* Some virtual machines may not be compatible with this instantaneous snapshot backup technology, which relies on hypervisor's instantaneous checkpoint mechanisms. These are typically VMs with constant disk write operations. The hypervisor cannot immediately close the instantaneous checkpoint, necessitating VM freeze to complete the closure process—a freeze that can last several hours and is unstoppable.

In such cases, the solution involves excluding the target persistent disk and backing up data through an alternative method.*

| Reference                                               | Unité | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service     | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Crear una política de respaldo

Para crear una nueva política de respaldo, es necesario solicitarlo al soporte. El soporte está disponible a través del ícono de la ancla en la parte superior derecha de la ventana.

La creación de una nueva política de respaldo se realiza mediante:

    Nombre de tu Organización
    Nombre de un contacto junto con su correo electrónico y número de teléfono para finalizar la configuración
    Nombre del propietario
    Nombre de la política de respaldo
    Características (x días, y semanas, z meses, etc.)

## Avanzada de protección de datos (HSM/KMS)

Cloud Temple ofrece una solución avanzada de **criptografía de máquinas virtuales** basada en módulos de seguridad física (HSM) y un servicio de gestión de claves (KMS). Esta función permite fortalecer la protección de datos sensibles mediante una gestión centralizada y segura de las claves de cifrado, integrada directamente en el entorno SecNumCloud.

### Arquitectura técnica

La solución se basa en una infraestructura de seguridad robusta compuesta por:

- __HSM (Hardware Security Module)__: Modulos __Thales Luna S790__ certificados __FIPS 140-3 nivel 3__
- __KMS (Key Management System)__: __Thales CipherTrust Manager__ para la gestión centralizada de claves
- __Integración VMware__: Comunicación a través del protocolo __KMIP (Key Management Interoperability Protocol__)

#### Deployment de haut niveau de disponibilité

L'infrastructure HSM est déployée sur **tres tres tres** zones de disponibilité de la région FR1 :

- PAR7S
- TH3S  
- AZ07

Cette répartition garantit une **alta disponibilidad** y resiliencia máxima del servicio de cifrado.

### Funcionamiento y jerarquía de las claves

El sistema emplea una **jeringa de claves criptográfica** para garantizar la seguridad de los datos:

| Nivel | Tipo de clave | Descripción | Ubicación |
|--------|-------------|-------------|--------------|
| 1 | __Clave Principal (RoT)__ | Clave maestra por KMS | HSM Luna |
| 2 | __Clave de Dominio (DK)__ | Clave de dominio por cliente (isolamiento multi-tenante) | HSM Luna |
| 3 | __Clave de Encriptación de Claves (KEK)__ | Clave de encriptación por VM | CipherTrust Manager |
| 4 | __Clave de Datos (DEK)__ | Clave de datos por VM | VMware ESXi |

#### Proceso de cifrado

1. **Generación**: VMware ESXi genera una clave de cifrado (DEK) única para cada máquina virtual
2. **Protección**: La DEK se cifra utilizando la clave de cifrado (KEK) almacenada en CipherTrust Manager
3. **Seguridad**: La KEK está protegida por la jerarquía de claves HSM
4. **Almacenamiento**: La DEK cifrada se almacena junto con los archivos de configuración de la VM

## Seguridad y cumplimiento

La seguridad y el cumplimiento son aspectos cruciales en la gestión de infraestructuras de nube y sistemas IT. La implementación de medidas de seguridad robustas protege los datos sensibles, mantiene la integridad del sistema y garantiza la confidencialidad. Además, cumplir con las regulaciones y estándares específicos de cada industria es fundamental para evitar sanciones legales y penalizaciones financieras.

En el contexto del cloud computing, esto implica:

- **Gestión de identidades y acceso (IAM):** Implementar controles de acceso rigurosos mediante políticas de IAM para limitar el acceso a los recursos según las necesidades de cada usuario o aplicación.
- **Encriptación:** Utilizar algoritmos de encriptación avanzados tanto en tránsito como en reposo para proteger la información sensible.
- **Monitoreo y auditoría:** Establecer sistemas de monitoreo continuos y auditorías regulares para detectar actividades sospechosas y garantizar el cumplimiento normativo.
- **Seguridad de la nube:** Aplicar prácticas de seguridad específicas para entornos de computación en la nube, incluyendo la configuración adecuada de firewalls, controladores de acceso y servicios de seguridad especializados.

Además, es vital mantenerse al día con las últimas amenazas y vulnerabilidades mediante pruebas de penetración, análisis de código abierto (OWASP) y la adopción de mejores prácticas de seguridad. La conformidad con normativas como ISO 27001, SOC 2, HIPAA o GDPR es un componente esencial para cualquier organización que maneje datos sensibles.

En resumen, la seguridad y el cumplimiento en el cloud computing requieren una combinación de tecnología avanzada, políticas bien definidas y prácticas continuas de gestión de riesgos para proteger los activos digitales contra amenazas internas y externas.

#### Certificaciones

- **Nivel 3 FIPS 140-3**: Certificación del nivel más alto para los HSM
- **EAL4+ Common Criteria**: Evaluación de seguridad avanzada
- **SecNumCloud**: Calificación ANSSI integrada en el entorno Cloud Temple

#### Isolación multi-tenant

- **Separación criptográfica**: Cada cliente tiene un dominio KMS aislado.
- **Claves dedicadas**: Una clave de múltiple uso específico para cada cliente.
- **Auditoría y trazabilidad**: Registro completo de las acciones por dominio.

### Activación y uso

El cifrado de máquinas virtuales se activa en un solo clic desde la [Consola Shiva](../console/console.md).

Para una procedura detallada con capturas de pantalla, consulta el [tutorial de cifrado de máquinas virtuales](tutorials/vm_encryption.md).

####Prerequisitos

- __Proveedor de clave configurado__ : Debe tener activo un HSM/KMS en la vStack.
- __Máquina virtual apagada__ : La VM debe estar apagada antes del cifrado.
- __Ninguna replicación activa__ : La VM no debe estar replicada (no es compatible con Global Mirror).
- __Sin snapshot__ : No debe haber snapshots disponibles.
- __Suscripción al servicio__ : Debe tener suscrito el servicio de protección avanzada.

*__Nota__: Para obtener más detalles sobre los requisitos y la procedimiento completo, consulte el [guía de cifrado de máquinas virtuales](tutorials/vm_encryption.md).*

## Consideraciones y limitaciones

En el ámbito del cloud computing, los sistemas IT y la ingeniería de software, existen diversas consideraciones y limitaciones que es crucial tener en cuenta para garantizar una implementación eficiente y segura. A continuación, se presentan algunos aspectos clave:

1. **Escalabilidad**: La capacidad del sistema para adaptarse a un volumen de carga creciente sin comprometer el rendimiento es fundamental. Las soluciones cloud deben ser diseñadas con escalabilidad en mente, permitiendo agregar recursos según sea necesario.

2. **Disponibilidad y Sobrecarga**: Los sistemas deben estar preparados para manejar tanto la alta disponibilidad (alta disponibilidad) como las sobrecargas, asegurando que el servicio esté siempre accesible y pueda manejar picos de demanda sin fallar.

3. **Seguridad**: La protección de datos es una preocupación primordial. Las medidas de seguridad incluyen cifrado, autenticación fuerte, control de acceso y monitoreo continuo para detectar actividades sospechosas.

4. **Conformidad normativa**: Dependiendo del sector, las organizaciones pueden estar sujetas a regulaciones específicas (por ejemplo, GDPR en Europa). Es crucial que los sistemas cumplan con estas normativas para evitar sanciones y mantener la confianza de los clientes.

5. **Costos**: La naturaleza pago-por-uso del cloud computing puede llevar a costos variables dependiendo del uso. Es crucial realizar un análisis de costos exhaustivo para optimizar el gasto sin comprometer la calidad y la eficiencia.

6. **Interoperabilidad**: La integración con sistemas existentes, así como la compatibilidad entre diferentes plataformas (por ejemplo, cloud vs on-premises), es un desafío que requiere una planificación cuidadosa y soluciones de interoperabilidad.

7. **Gestión de datos**: La eficiencia en el manejo de grandes volúmenes de datos, incluyendo la optimización de almacenamiento, procesamiento y análisis, es crucial para obtener información valiosa y tomar decisiones informadas.

8. **Resiliencia**: Los sistemas deben diseñarse para ser resilientes ante fallos físicos, errores de software o incidentes cibernéticos, asegurando que el servicio continúe operando incluso en condiciones adversas.

9. **Gestión de la cadena de suministro**: La eficiencia en la gestión de los recursos y la infraestructura subyacente es vital para mantener un costo óptimo y garantizar que los servicios estén siempre disponibles.

10. **Gestión del cambio**: Implementar nuevas tecnologías o migrar a plataformas de cloud puede requerir cambios significativos en las operaciones internas, lo cual debe gestionarse cuidadosamente para minimizar el impacto negativo sobre los empleados y los procesos existentes.

Estas consideraciones son esenciales para diseñar, implementar y mantener sistemas de cloud computing eficientes, seguros y adaptados a las necesidades específicas de cada organización.

#### Compatibilidad

- **Global Mirror**: Las máquinas virtuales cifradas no son compatibles con la replicación Global Mirror
- **Restauración**: Las copias de seguridad de VM cifradas mantienen su protección cifrada
- **Exportación**: La exportación de VMs cifradas requiere procedimientos específicos

### Desempeño

- **Impacto mínimo**: El cifrado en hardware garantiza un rendimiento óptimo
- **Transparencia**: No afecta el funcionamiento de las aplicaciones

### Cas d'uso recomendados

Esta solución avanzada de protección está especialmente diseñada para:

- **Datos sensibles**: Información personal, datos financieros, secretos industriales
- **Conformidad regulatoria**: Requisitos RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- **Sectores críticos**: Banca, seguros, salud, defensa
- **Soberanía digital**: Protección contra accesos no autorizados, incluso en caso de compromiso

| Referencia | Unidad | SKU |
|------------|--------|-----|
| PROTECCIÓN AVANCADA - Cifrado VM a través de HSM/KMS | 1 VM | csp:(región):iaas:vmware:cifrado:hsm:v1 |

*__Nota__: *

- *El servicio requiere una suscripción específica y no está incluido en la oferta IaaS estándar*
- *La gestión de claves permanece completamente bajo control de Cloud Temple en el entorno SecNumCloud*
- *Las claves de cifrado nunca salen del entorno francés y soberano*
