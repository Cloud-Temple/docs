---
title: Concepts
---

The __IaaS (Infrastructure as a Service)__ offering from Cloud Temple is designed to meet the critical needs of business continuity and disaster recovery, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques.
- Red: __JUNIPER__.
- Virtualización: __VMware__, ofreciendo una base fiable y probada para gestionar sus entornos en la nube.
- Copia de seguridad: __IBM Spectrum Protect Plus__, para la orquestación y almacenamiento de copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, garantizando una compatibilidad amplia con los principales editores de software.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- __Maximum predictability__: You have full control over virtualization rates, I/O pressure on storage, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión mediante la [Consola](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Almacenamiento de datos en Francia y cumplimiento del RGPD.                                                                                          |
| Seguridad           | Plataforma altamente segura, certificada __SecNumCloud__, __HDS__ (Almacenamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo las ventanas de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Por demanda         | Recursos disponibles bajo demanda.                                                                                                          |

## Regions and Availability Zones

The VMware IaaS product is deployed within an availability zone.  
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment model allows you to select the location of clusters and distribute them across different availability zones (AZ).  
This provides better load distribution, maximizes redundancy, and simplifies the implementation of a disaster recovery plan (DRP) in the event of an incident.

## Computing

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Several categories of computing blades are available in the catalog to support your workloads (virtualization, containerization, etc.). These blades have different characteristics and performance levels to best meet your needs. The computing blade catalog is regularly updated.

When using with a virtualization offering, a hypervisor cluster must consist exclusively of blades of the same type (it is not possible to mix different blade types within the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of Cores / Threads | Connectivity __(3)__ | GPU __(4)__          | SKU for VMware Offering         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 × 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 × 25 Gbit/s        | 2 × NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__:

- __(1)__ The amount of memory delivered corresponds to the physical memory available on the blades. It is not possible to change the physical memory capacity of a blade.

- __(2)__ Minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured in the BIOS for maximum performance.

- __(3)__ Physical connectivity is shared between network and block storage access, as the CISCO platform is converged.

- __(4)__ The available GPU offering is continuously evolving. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with two 48 GB L40S cards. Contact support for further details if needed.

The availability of the computing offering is 99.99%, calculated monthly, including maintenance windows. Eligibility for SLA non-compliance requires the creation of an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature.  
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor in case of failure. If a zone of availability contains only one hypervisor, automatic restart is not possible.

## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y eficiente para satisfacer las necesidades de los clientes en cuanto a conectividad e aislamiento de red.

### VLANs de nivel 2

Los VLANs disponibles en la oferta IaaS son de tipo __nivel 2__, ofreciendo una aislamiento de red completo y una configuración adaptable según las necesidades.

#### Conceptos principales

- __Compartición entre clusters y zonas de disponibilidad (AZ)__:
  - Los VLANs pueden compartirse entre diferentes AZ y distintos clusters que pertenecen al mismo inquilino.
- __Propagación entre inquilinos__:
  - Los VLANs pueden propagarse entre varios inquilinos que pertenecen a la misma organización, facilitando las comunicaciones internas.

### Rendimiento de red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__: Inferior a __3 ms__.
- __Latencia inter-AZ__: Inferior a __5 ms__.

### Puntos clave

1. __Flexibilidad__ : Los VLAN pueden configurarse para adaptarse a entornos multi-clúster y multi-tenant.
2. __Alto rendimiento__ : Una latencia mínima garantiza una comunicación rápida y eficaz entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__ : Los VLAN de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

## Block Storage

Cloud Temple offers several classes of storage based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

The __IBM SVC__ technology enables delivering the required performance levels for our clients' environments, thanks to the large amount of embedded memory cache in the controllers and the ability to distribute a server's total IOPS across multiple SANs.

It is also used to enable replication of your block storage LUNs across availability zones or to facilitate maintenance operations on storage arrays.

The storage is primarily NVMe flash storage dedicated to professional workloads. The drives are used by the storage arrays in [__'Distributed RAID 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

### Seguridad y cifrado del almacenamiento en bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloques integra un cifrado hardware robusto.

-   **Tipo de cifrado**: Los datos se cifran directamente en los discos (`Datos en reposo`) utilizando el algoritmo **XTS-AES 256**.
-   **Cumplimiento**: Este método de cifrado cumple con la norma **FIPS 140-2**, asegurando un alto nivel de seguridad validado.
-   **Funcionamiento**: El cifrado se aplica en el momento de escritura de los datos en el soporte de almacenamiento físico.

:::warning Punto de atención sobre la replicación
Es importante destacar que este cifrado protege los datos almacenados en los discos. No está activo "en tiempo real" (on-the-fly), lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de los transferencias se garantiza mediante canales de comunicación dedicados y seguros.
:::

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivado en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                         | Unidad | SKU                                          |
|-----------------------------------|--------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/To   | 1 Gio  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/To   | 1 Gio  | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio  | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivo            | 1 Tio  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo para una clase de almacenamiento está relacionado con el volumen realmente solicitado, según la métrica "IOPS/To", entendida como "límite de IOPS por tera asignado",*

> *Así, un volumen de 0,5 To en la clase de rendimiento 'Estándar' tendrá un límite de IOPS fijado en 750 IOPS,*
> *De igual forma, un volumen de 10 To en la clase de rendimiento 'Ultra' tendrá un límite de IOPS de 150000 IOPS,*

- *El límite de IOPS se aplica al volumen, por lo tanto, a la noción de Datastore en un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99,99 %, medida mensualmente, incluida la ventana de mantenimiento,*
- *No hay restricciones ni cuotas en lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento para la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500 Gio,*
- *Al utilizar un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como compresión o deduplicación: cuando reserva 10 Tio de almacenamiento, tiene físicamente 10 Tio útiles de almacenamiento implementados en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso dentro del marco de la oferta de cálculo VMware

En el marco del uso del almacenamiento en modo bloque como datastore en la oferta de cálculo VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__:

1. __Archivo de intercambio (.VSWP) al arrancar máquinas virtuales__: Cuando una máquina virtual se inicia, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder arrancar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de las capacidades de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TiB de almacenamiento en bloque y desea arrancar 10 máquinas virtuales con 64 GiB de memoria cada una, se necesitarán 640 GiB de espacio en disco. Sin este espacio, el arranque de las máquinas quedará limitado por la capacidad disponible para crear los archivos de intercambio.

2. __Espacio libre para instantáneas de copia de seguridad__: El servicio de copia de seguridad utiliza instantáneas instantáneas (snapshots). Por lo tanto, siempre debe disponer de suficiente espacio libre para permitir la creación de una instantánea durante la copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. En general, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. __Gestión de discos dinámicos__: Tenga cuidado con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede provocar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor de los casos. Es fundamental supervisar cuidadosamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para garantizar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese siempre de disponer del espacio necesario para los archivos de intercambio, las instantáneas y el crecimiento de los discos dinámicos.

## Storage in backup mode

The storage dedicated to backing up your virtual machines is automatically provisioned by the platform, up to the quota ordered.

| Reference                | Unit | SKU                                      |
|--------------------------|------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Replicación del almacenamiento en modo de bloque

#### Principios

Para permitir la implementación de sus planes de recuperación de actividad, cuando no es posible mantener una situación de continuidad de actividad mediante mecanismos aplicativos y la replicación de máquinas virtuales no es adecuada, Cloud Temple ofrece __mecanismos de replicación de almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican sobre los LUNs de almacenamiento de sus entornos, complementariamente a las copias de seguridad. La decisión de utilizar un mecanismo de replicación en un entorno __depende de múltiples factores, como su criticidad, la pérdida de datos tolerada o el rendimiento esperado para la aplicación__.

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasivo:

- La replicación __asincrónica__ (o __'Global Mirror'__): *La función __'Global Mirror'__ proporciona un proceso de copia asincrónica. Cuando un host escribe en el volumen primario, la confirmación de finalización de la operación de E/S se recibe antes de que la operación de escritura se complete en el volumen secundario. Si se inicia una operación de conmutación, la aplicación debe recuperar y aplicar todas las actualizaciones que no se han confirmado en el volumen secundario. Si las operaciones de E/S en el volumen primario se pausan durante un breve periodo, el volumen secundario puede convertirse en una copia exacta del volumen primario. Esta función es comparable a un proceso de copia de seguridad continua en el que siempre faltan las últimas actualizaciones. Cuando utilice Global Mirror con fines de recuperación tras un siniestro, debe reflexionar sobre cómo desea gestionar estas actualizaciones pendientes.*

- La replicación __sincrónica__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia sincrónica de los datos de un volumen primario hacia un volumen secundario. Con copias sincrónicas, los hosts de aplicaciones escriben en el volumen primario, pero no reciben confirmación de que la operación de escritura ha finalizado hasta que los datos se hayan escrito en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando finaliza la operación de copia. Tras finalizar la operación de copia inicial, la función Metro Mirror mantiene permanentemente una copia completamente sincronizada de los datos de origen en el sitio objetivo. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "en espera". El plan de recuperación de actividad se activa en caso de siniestro o en el marco de una solicitud de prueba del PRA. A continuación, el sitio pasivo asume el control del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación cortos y no es aceptable o adecuado utilizar mecanismos de replicación aplicativa o replicación de máquinas virtuales, es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de la misma región.

Esta oferta permite obtener un __RPO de 15 minutos__ y un __RTO inferior a 4 horas__. Permite reiniciar mucho más rápidamente que la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento con replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de ambas zonas de disponibilidad trabajan conjuntamente para realizar las operaciones de escritura en ambos sitios. El sitio principal no espera el acuse de recibo de escritura del sitio secundario.

Los pasos de una operación de escritura son los siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. El controlador SAN local no espera el acuse de recibo del SAN remoto y realiza entonces la escritura localmente,
4. Envía el __acuse de recibo__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__: se requiere una solicitud de servicio.

| SLA       | Descripción                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 min | En caso de siniestro en el centro de datos principal, la cantidad máxima de datos perdidos corresponde a lo máximo a los 15 últimos minutos de escritura |
| RTO < 4 h | En caso de siniestro en el centro de datos principal, la recuperación de actividad está garantizada en menos de 4 horas según la complejidad de los entornos.          |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere, por tanto, tener reservados en el sitio 'standby' los recursos de cálculo y RAM necesarios para recuperar la actividad en caso de siniestro.

El uso de esta tecnología también requiere duplicar el espacio de disco: es necesario disponer exactamente del mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar el rendimiento de la aplicación hasta en un 10 %. __Solo las clases de almacenamiento 500 IOPS/To, 1500 IOPS/To y 3000 IOPS/To son compatibles.__

| Referencia                          | Unidad  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN  | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Dado que la oferta es asíncrona, es posible que durante un siniestro algunas operaciones de disco no se hayan escrito en el sitio remoto. Por tanto, puede existir un riesgo de coherencia de datos, mitigado en el análisis de riesgos del plan de recuperación de actividad.*
- *La replicación del almacenamiento en modo bloque se realiza de forma transparente para las máquinas virtuales y las aplicaciones,*
- *Por este motivo, es importante priorizar los escenarios de replicación aplicativa o, en su defecto, la replicación de máquinas virtuales,*
- *El cálculo y la memoria en el sitio de recuperación pueden reducirse para optimizar los costos si una situación degradada es aceptable para el negocio durante la ejecución del plan de recuperación de actividad.*

## Virtualización VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud se basa en la tecnología __VMware Vsphere__.

La plataforma es gestionada automáticamente por Cloud Temple (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operativas, ...).  
Puede ser controlada mediante la interfaz gráfica de la Consola o a través de sus APIs asociadas.

__no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (ningún acceso directo al vCenter, por ejemplo).
----
De hecho, la calificación SecNumCloud exige __una total segregación__ entre las interfaces de control de los activos técnicos y la interfaz del cliente (la Consola).*

- Los productos implementados son VMware ESXi, VMware vCenter y VMware Replication.  
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es gestionada físicamente mediante la tecnología Juniper y el protocolo VPLS.*  
- *El almacenamiento no utiliza la tecnología VMware vSAN, sino únicamente SANs IBM mediante fibra óptica de 32 G.*  
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un cluster de láminas de cálculo ('Cpool')

El __'Cpool'__ es un agrupamiento de hipervisores VMware ESXi, también conocido como *'cluster ESX'*.

Los hosts presentes en un __'Cpool'* pertenecen todos al mismo *tenant* y a la misma zona de disponibilidad (AZ). Necesariamente deben tener la misma clase:  
__no es posible mezclar modelos diferentes de láminas de cálculo dentro de un mismo cluster__.

Dado que todas las láminas de cálculo se entregan con la memoria física máxima, se aplica una limitación de uso de RAM a nivel de cluster mediante software para asegurarse de que coincida con la RAM facturada.

Por defecto, cada lámina dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener como máximo 32 hipervisores. Más allá de esta limitación, será necesario crear un segundo cluster.

El almacenamiento puede ser compartido entre los __'Cpool'__.

### Memory Allocation for a 'Cpool'

Memory reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your cluster-wide requirements.

__Be careful not to exceed an average memory usage of 85% per compute node__.
Indeed, VMware's technology will use a compression-based optimization method that can significantly impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute nodes will force the hypervisor to offload part of its memory to disk to meet the needs of virtual machines.

This situation, known as __'Ballooning'__, severely impacts the performance of all virtual machines located on the affected datastore.
__Diagnosis becomes complicated in this context__, as your monitoring tools will detect issues at the CPU level rather than at the memory or storage level.
Also keep in mind that the first action the hypervisor performs when starting a virtual machine is to create a __memory swap file (.vswap)__ on disk, with a size equal to the virtual machine's memory allocation. You must __account for this when sizing your storage__.

Each compute node is delivered with 128 GB of memory enabled at the __'Cpool'__ level, although it physically has access to all allocated memory.

For example, in a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at activation of the _'Cpool'_ will be 3 x 128 GB = 384 GB of RAM.
You can extend it up to a maximum of 3 x 384 GB = 1,152 GB of memory.

    Minimum memory for a 'Cpool' = number of hosts × 128 GB of memory  
    Maximum memory for a 'Cpool' = number of hosts × physical memory capacity per compute node

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.  
To date, it includes dozens of `Templates` and images ready to be deployed on your virtual machines.

### Actualización de los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de aplicar parches de seguridad.  
Sin embargo, la actualización de los hipervisores sigue siendo responsabilidad suya, ya que no tenemos visibilidad sobre sus restricciones empresariales.

El proceso de actualización es completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de contar con los permisos necesarios para realizar estas acciones.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.  
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.  
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar cargas de trabajo intensivas en recursos.  
En un __'Cpool'__ VMware, estas reglas suelen utilizarse para gestionar el comportamiento de las máquinas virtuales con vMotion.  
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.  
  Se utilizan para mejorar el rendimiento al mantener juntas las máquinas virtuales que se comunican frecuentemente,  
  reduciendo así la latencia de red. Las reglas de afinidad son útiles en escenarios donde el rendimiento es crítico,  
  como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- __Reglas de Anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten  
  en el mismo host físico. Son importantes para la disponibilidad y resiliencia, por ejemplo,  
  para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.  
  Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad,  
  como en entornos de producción donde la tolerancia a fallos es una prioridad.  
  Por ejemplo, no desea que sus dos servidores de Active Directory estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,  
su estado de activación (__'Estado'__) y las máquinas virtuales afectadas en su clúster de hipervisores.

*Nota: las reglas de afinidad/anti-afinidad ofrecidas en la consola son reglas que afectan a las máquinas virtuales entre sí (no hay reglas entre hipervisores y máquinas virtuales).*

### Replicación asíncrona de sus máquinas virtuales en entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en enviar, desde el hipervisor de origen, las operaciones de escritura al sitio de respaldo a intervalos de tiempo regulares.

Tras una copia inicial en caliente de todo el almacenamiento activo al sitio de respaldo, únicamente se envían las escrituras a intervalos regulares al sitio en estado de espera.  
Este intervalo depende del volumen de escritura (de cada hora a cada 24 horas).

La replicación de máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. En este sentido,  
esta solución presenta los mismos inconvenientes, especialmente la sensibilidad al volumen de escritura de la máquina virtual,  
ya que el proceso de instantánea es un mecanismo recursivo para cerrar la instantánea.

El ejemplo típico de máquina que no soporta el mecanismo de replicación de máquinas virtuales es un  
servidor FTP que recibe flujos en tiempo real de cámaras de seguridad. __La máquina pasa todo su tiempo escribiendo y no podrá  
cerrar una instantánea sin pausar el sistema operativo durante un período significativo  
(varios decenas de minutos)__. Si el hipervisor no logra cerrar la instantánea, exactamente eso hará,  
sin posibilidad de intervención salvo corromper la máquina virtual.

| SLA             | Descripción                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de siniestro en el centro de datos principal, la cantidad máxima de datos perdidos será la correspondiente a la última sincronización de escritura en el sitio de respaldo. |
| RTO < 15 min    | Operación de arranque de la máquina virtual detenida en el sitio remoto.                                                                                   |

En caso de necesidad, o en caso de fallo en una máquina del sitio principal, la máquina espejo en el sitio de respaldo se activa.  
La recuperación de actividad requiere disponer de capacidad de cálculo y RAM reservada en el sitio de respaldo. Es  
necesario contar con el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.

| Referencia                        | Unidad | SKU                                             |  
|-----------------------------------|--------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 vm   | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*

## Backup de máquinas virtuales

Cloud Temple ofrece una __arquitectura nativa de copia de seguridad cruzada e inmutable__ (es obligatoria para la calificación secnumcloud francesa).

Las copias de seguridad se almacenan en una zona de disponibilidad y en un centro de datos físico distinto del que aloja la máquina virtual. Están cifradas mediante un algoritmo de claves simétricas AES de 256 bits (modo de cifrado `xts-plain64`) para garantizar la confidencialidad de los datos.

Esto permite protegerse ante fallos graves en el centro de datos de producción y restaurar en un centro de datos secundario (por ejemplo, en caso de incendio).

Esta solución incluye:

- Copia de seguridad en caliente fuera de sitio de todos los discos,
- Presentación y arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo, seguido de recarga en caliente en los SAN de producción,
- Restauración parcial de archivos desde la copia de seguridad,
- Retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución sin agente, fácil de usar y que permite la automatización de los procesos de copia de seguridad, además de una optimización del espacio de almacenamiento masivo.

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambio en los entornos. La política de copia de seguridad es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__, que utiliza los mecanismos de instantáneas del hipervisor. Son típicamente máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar la instantánea, lo que obliga a congelar la máquina virtual para poder completar la operación de cierre. Este congelamiento puede durar varias horas y no es interrumpible.*

*La solución consiste entonces en excluir el disco que es objetivo de escrituras permanentes y realizar la copia de seguridad de los datos mediante otro método.*

| Referencia                                               | Unidad | SKU                            |
| ------------------------------------------------------- | ------ | ------------------------------ |
| SAUVEGARDE - Accès au service IBM Spectrum Protect Plus | 1 VM   | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ indicating:

    Your Organization's name
    A contact name, email address, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

## Advanced Data Protection (HSM/KMS)

Cloud Temple offers an __advanced virtual machine encryption__ solution based on Hardware Security Modules (HSM) and a Key Management Service (KMS). This feature enhances the protection of sensitive data through centralized and secure key management, seamlessly integrated into the SecNumCloud environment.

### Arquitectura técnica

La solución se basa en una infraestructura de seguridad robusta compuesta por:

- __HSM (Hardware Security Module)__ : Módulos __Thales Luna S790__ certificados __FIPS 140-3 nivel 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ para la gestión centralizada de claves
- __Integración VMware__ : Comunicación a través del protocolo __KMIP__ (Key Management Interoperability Protocol)

#### Alta disponibilidad

La infraestructura HSM se despliega en __tres zonas de disponibilidad__ de la región FR1:

- PAR7S
- TH3S
- AZ07

Esta distribución garantiza una __alta disponibilidad__ y una __resiliencia__ máxima del servicio de cifrado.

### Funcionamiento y jerarquía de claves

El sistema utiliza una __jerarquía de claves criptográficas__ para garantizar la seguridad de los datos:

| Nivel | Tipo de clave | Descripción | Ubicación |
|-------|---------------|-------------|-----------|
| 1 | __Raíz de confianza (RoT)__ | Clave maestra gestionada por KMS | HSM Luna |
| 2 | __Clave de dominio (DK)__ | Clave de dominio por cliente (aislamiento multiinquilino) | HSM Luna |
| 3 | __Clave de cifrado (KEK)__ | Clave de cifrado por VM | CipherTrust Manager |
| 4 | __Clave de datos (DEK)__ | Clave de datos por VM | VMware ESXi |

#### Proceso de cifrado

1. __Generación__: VMware ESXi genera una DEK única para cada máquina virtual  
2. __Protección__: La DEK se cifra mediante la KEK almacenada en CipherTrust Manager  
3. __Seguridad__: La KEK está protegida a su vez por la jerarquía de claves del HSM  
4. __Almacenamiento__: La DEK cifrada se almacena junto con los archivos de configuración de la VM

### Seguridad y cumplimiento

#### Certifications

- __FIPS 140-3 nivel 3__ : Certificación del nivel más alto para los HSM
- __Common Criteria EAL4+__ : Evaluación avanzada de seguridad
- __SecNumCloud__ : Calificación ANSSI integrada en el entorno Cloud Temple

#### Multi-tenant isolation

- __Cryptographic separation__: Each client has an isolated KMS domain
- __Dedicated keys__: A specific Domain Key per client
- __Audit and traceability__: Full logging of actions per domain

### Activación y uso

El cifrado de máquinas virtuales se activa __con un solo clic__ desde la [Consola](../console/console.md).

Para un procedimiento detallado con capturas de pantalla, consulte el [tutorial de cifrado de máquinas virtuales](tutorials/vm_encryption.md).

#### Requis

- __Proveedor de claves configurado__: Debe estar activado un proveedor HSM/KMS en la vStack
- __Máquina virtual apagada__: La VM debe estar detenida antes del cifrado
- __Sin replicación activa__: La VM no debe estar replicada (incompatible con Global Mirror)
- __Sin instantáneas__: No debe haber ninguna instantánea presente
- __Suscripción al servicio__: Debe estar suscrito al servicio de protección avanzada

*__Nota__: Para obtener más detalles sobre los requisitos y el procedimiento completo, consulte la [guía de cifrado de máquinas virtuales](tutorials/vm_encryption.md).*

### Limitaciones y consideraciones

#### Compatibility

- __Global Mirror__: Encrypted virtual machines are __not compatible__ with Global Mirror replication
- __Restore__: Backups of encrypted VMs retain their cryptographic protection
- __Export__: Exporting encrypted VMs requires specific procedures

#### Rendimiento

- __Impacto mínimo__: El cifrado en hardware garantiza un rendimiento óptimo
- __Transparencia__: Sin impacto en el funcionamiento de las aplicaciones

### Casos de uso recomendados

Esta solución de protección avanzada es especialmente adecuada para:

- __Datos sensibles__: Información personal, datos financieros, secretos industriales  
- __Cumplimiento normativo__: Requisitos RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS  
- __Sectores críticos__: Banca, seguros, salud, defensa  
- __Soberanía digital__: Protección contra accesos no autorizados, incluso en caso de compromiso  

| Referencia | Unidad | SKU |
|------------|--------|-----|
| PROTECCIÓN AVANZADA - Cifrado de VM mediante HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__*:

- *El servicio requiere una suscripción específica y no está incluido en la oferta estándar de IaaS*  
- *La gestión de claves permanece completamente bajo control de Cloud Temple en el entorno SecNumCloud*  
- *Las claves de cifrado nunca abandonan la infraestructura francesa y soberana*
