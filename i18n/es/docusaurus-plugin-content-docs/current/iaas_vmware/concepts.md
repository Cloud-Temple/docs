---
title: Concepts
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de actividad, con un enfoque especial en sectores exigentes como la industria, la banca y el seguro. Basada en tecnologías de punta, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para el almacenamiento en bloque.
- Red: **JUNIPER**.
- Virtualización: **VMware**, ofreciendo una base confiable y probada para gestionar sus entornos cloud.
- Backup: **IBM Spectrum Protect Plus**, para la orquestación y el almacenamiento de las copias de seguridad.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, garantizando una compatibilidad extendida con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- **Recursos dedicados**: Las cuchillas de cálculo, volúmenes de almacenamiento y pilas de software (virtualización, backup, firewalling, etc.) nunca se comparten entre los clientes.
- **Máxima predictibilidad**: Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y se beneficia de una facturación clara, a la consumo mensual.

La plataforma está calificada **SecNumCloud** por el [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y a demanda.
- Almacenamiento a demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                       |   
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y conformidad RGPD.                                                                                                |   
| Seguridad           | Plataforma altamente segura, calificada **SecNumCloud**, **HDS** (Alojamiento de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**.            |   
| Alta disponibilidad | Tasa de disponibilidad de la plataforma de 99,99%, medida mensualmente, intervalos de mantenimiento incluidos.                                     |   
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                         |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                            |
| On demand           | Recursos disponibles a demanda.                                                                                                                   |


## Regiones y zonas de disponibilidad

El producto IaaS VMware está desplegado en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los clústeres y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación de actividad (DRP) en caso de incidente.

---


## Cálculo

Las cuchillas proporcionadas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__ . Están completamente gestionadas por Cloud Temple (firmware, versión de OS, ...) a través de la consola Cloud Temple.

Varias categorías de cuchillas de cálculo están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenerización, ...).
Éstas presentan características y prestaciones diferentes para responder lo mejor posible a sus necesidades. El catálogo de cuchillas de cálculo evoluciona regularmente.

En el marco del uso con una oferta de virtualización, un clúster de hipervisores está únicamente compuesto de cuchillas de cálculo del mismo tipo (no es posible mezclar cuchillas de diferentes tipos en un mismo clúster).

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                        | Número de núcleos / hilos  | Conectividad __(3)__  | GPU **(4)**          | SKU para la oferta VMware       |
|-----------------------|--------------|--------------------------------------------|----------------------------|----------------------|----------------------|---------------------------------|
| Cuchilla ECO v3       | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos              | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Cuchilla STANDARD v3  | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Cuchilla ADVANCE v3   | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Cuchilla PERFORMANCE 1 v3 | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Cuchilla PERFORMANCE 2 v3 | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Cuchilla PERFORMANCE 3 v3 | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Cuchilla PERFORMANCE 4 v3 | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3    |

__Observaciones__ :

- __(1)__ La cantidad de memoria entregada es la físicamente disponible en las cuchillas. No es posible cambiar la cantidad de memoria física de una cuchilla.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo a nivel del BIOS.

- __(3)__ La conectividad física está compartida para el acceso a la red y el acceso a almacenamiento en bloque, la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU disponible realmente evoluciona constantemente. Al 1° de Mayo de 2024, la oferta se basa en los GPU NVIDIA LOVELACE L40S. Por defecto, la cuchilla PERF4 se entrega con 2 tarjetas L40S de 48 Go de RAM. Contacte al soporte para más detalles si es necesario.

La disponibilidad de la oferta de cálculo es del 99,99%, calculada mensualmente, intervalos de mantenimiento incluidos. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidente. También deberá poseer al menos dos hosts por clúster y activar la funcionalidad __Alta Disponibilidad__ (HA). Esta funcionalidad permite a su arquitectura reiniciar automáticamente sus máquinas virtuales en el segundo hipervisor. En el supuesto de que una zona de disponibilidad contenga solo un hipervisor, el reinicio automático no es posible.













## Red
El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y de alto rendimiento para satisfacer las necesidades de los clientes en términos de conectividad y aislamiento de red.

### VLANs de nivel 2

Los VLANs disponibles en la oferta IaaS son de tipo **nivel 2**, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Principales conceptos:
- **Compartición entre clústers y zonas de disponibilidad (AZ)**: 
  - Los VLANs pueden ser compartidos entre diferentes AZ y diferentes clústers pertenecientes al mismo tenant.
- **Propagación entre tenants**: 
  - Los VLANs pueden ser propagados entre varios tenants pertenecientes a una misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:
- **Latencia intra-AZ**: Inferior a **3 ms**.
- **Latencia inter-AZ**: Inferior a **5 ms**.

---

### Puntos clave

1. **Flexibilidad**: Los VLANs pueden ser configurados para adaptarse a los entornos multi-clúster y multi-tenant.
2. **Alta performance**: Una latencia mínima asegura una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. **Aislamiento y seguridad**: Los VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

---













## Almacenamiento en bloque

Cloud Temple propone varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite ofrecer el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran
cantidad de memoria caché embarcada en los controladores y la posibilidad de distribuir todos los IOPS
de un servidor en varios SAN.
Elle est aussi utilisée pour permettre la réplication de vos LUNs de almacenamiento en modo de bloque entre
las zonas de disponibilidad o facilitar las intervenciones en los arrays de almacenamiento.

El almacenamiento es principalmente de tipo FLASH NVME dedicado a las cargas de trabajo profesionales.
Los discos son utilizados por los arrays de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para las necesidades de archivo
en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo para una clase de almacenamiento está relacionado con la volumetría efectivamente ordenada, según la noción "IOPS/To", entendida como "límite de IOPS por Tera asignado",* 
> *Así, un volumen de 0,5To en la clase de rendimiento 'Standard' tendrá una limitación de IOPS limitada a 750IOPS,*
> *De la misma manera, un volumen de 10To en la clase de rendimiento 'Ultra' tendrá una limitación de IOPS de hasta 150000 IOPS,*
- *La limitación de IOPS se aplica al volumen, por lo que a la noción de Datastore en un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99.99% medida mensualmente, incluyendo el período de mantenimiento,*
- *No hay restricciones ni cuotas sobre la lectura o la escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500Gio,*
- *Cuando se usa un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como la compresión o la deduplicación: cuando reservan 10Tio de almacenamiento, tienen físicamente 10Tio útiles de almacenamiento implementados en las máquinas de IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el marco de la oferta de cálculo vmware

En el contexto del uso del almacenamiento en modo de bloque en forma de datastore en la oferta de cálculo VMware de Cloud Temple, **debe tener en cuenta varias consideraciones importantes**:

1. **Archivo de intercambio (.VSWP) al inicio de las máquinas virtuales**: Cuando una máquina virtual se inicia, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore tiene 1 Tio de almacenamiento en bloque y desea iniciar 10 máquinas virtuales de 64 Gio de memoria cada una, se necesitarán 640 Gio de espacio en disco. Sin este espacio, el inicio de las máquinas estará limitado por la capacidad disponible para crear los archivos de intercambio.

2. **Espacio libre para las instantáneas de respaldo**: El servicio de respaldo utiliza instantáneas (snapshots). Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de una instantánea al realizar el respaldo de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar el respaldo. En general, se recomienda mantener al menos un 10% de espacio libre para esta operación.

3. **Gestión de discos dinámicos**: Tenga cuidado con el uso de los discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede provocar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor de los casos. Es crucial monitorear atentamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para asegurar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de los respaldos. Asegúrese de disponer siempre del espacio necesario para los archivos de intercambio, las instantáneas y el crecimiento de los discos dinámicos.

## Almacenamiento en modo de respaldo

El almacenamiento dedicado al respaldo de sus máquinas virtuales se auto-implementa por la plataforma dentro del límite de la cuota ordenada.

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Replicación del almacenamiento en modo de bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en 
situación de continuidad de actividad con mecanismos aplicativos y la replicación de las máquinas virtuales 
no es adecuada, Cloud Temple ofrece __mecanismos de replicación del almacenamiento en modo de bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican a las LUNs de almacenamiento de sus entornos, complementando los respaldos. 
La elección de usar un mecanismo de replicación en un entorno __depende de numerosos factores, como su criticidad, la pérdida de datos tolerada o el rendimiento deseado__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos implementados en una configuración activo/pasivo:

- La replicación __asíncrona__ (o __'Global Mirror'__) : *La función __'Global Mirror'__ proporciona un proceso de copia asíncrono. 
Cuando un host escribe en el volumen primario, la confirmación de la finalización de la E/S se recibe antes de que la operación 
de escritura termine para la copia en el volumen secundario. Si se inicia una operación de failover, la aplicación 
debe recuperar y aplicar todas las actualizaciones que no fueron confirmadas en el volumen secundario. 
Si las operaciones de E/S en el volumen primario se pausan durante un breve período, 
el volumen secundario puede convertirse en una réplica exacta del volumen primario. Esta función es comparable a un proceso 
de copia de seguridad continua en el que siempre faltan las últimas actualizaciones. 
Cuando se emplea Global Mirror para fines de recuperación ante desastres, debe considerar cómo manejar estas actualizaciones faltantes.*

- La replicación __síncrona__ (o __'Metro Mirror'__) : *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona 
de los datos de un volumen primario a un volumen secundario. Con las copias síncronas, las aplicaciones host escriben en el volumen primario, pero no reciben una confirmación 
de que la operación de escritura ha terminado hasta que los datos se escriben en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando 
la operación de copia ha terminado. Después de que la operación de copia inicial ha finalizado, la función Metro Mirror 
mantiene continuamente una copia completamente sincronizada de los datos de origen en el sitio de destino. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no está comercializada.__*


Entonces se define un sitio llamado "activo" o "principal" y un sitio "pasivo" o "en espera".
El plan de recuperación ante desastres se activa en caso de desastre o en el contexto de una solicitud de prueba del PRA. 
El sitio pasivo luego toma el control del sitio activo.

#### Replicación asíncrona 

Cuando sus cargas de trabajo requieren tiempos de recuperación ante desastres cortos y no es aceptable 
o adecuado usar mecanismos de tipo replicaciones aplicativas / replicación de máquinas virtuales, 
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región. 

Esta oferta permite obtener un __RPO de 15Mn__ y un __RTO inferior a 4H__. Permite recuperarse mucho más rápido que 
la implementación de una restauración de respaldo.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de 
ambas zonas de disponibilidad trabajan conjuntamente para realizar las operaciones de escritura en ambos sitios. 
El sitio maestro no espera la confirmación de escritura del sitio esclavo.

Los pasos de una operación de escritura son los siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad, 
2. El controlador SAN local solicita al controlador SAN de la zona distante realizar la operación de escritura,
3. El controlador SAN local no espera la confirmación del SAN distante y realiza la escritura localmente,
4. Da __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio distante no acceden directamente a la LUN Global Mirror__: Se necesita una solicitud de servicio.


| SLA       | Description                                                                                                                                       |  
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | En caso de siniestro en el centro de datos principal, la cantidad máxima de datos perdidos corresponde a un máximo de las últimas 15 minutos de escritura |
| RTO < 4H  | En caso de siniestro en el centro de datos principal, la recuperación de la actividad está garantizada en menos de 4 horas según la complejidad de los entornos.          |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere por lo tanto haber reservado en el sitio 'standby' recursos de cálculo y RAM para reanudar la actividad en caso de siniestro.

El uso de esta tecnología también requiere duplicar el espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede impactar el rendimiento de la aplicación en un 10 %. __Solo las clases de almacenamiento 500 Iops/To, 1500 Iops/To y 3000 Iops/To son compatibles.__

| Referencia                          | Unidad  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *Al ser una oferta asíncrona, es posible que durante un siniestro algunas operaciones de disco no hayan sido escritas en el sitio remoto. Por lo tanto, puede haber un riesgo de coherencia de los datos, a mitigar en el análisis de riesgo del plan de recuperación de actividad.*
- *La replicación de almacenamiento en modo bloque se realiza de manera transparente para las máquinas virtuales y las aplicaciones,*
- *Por lo tanto, es importante priorizar los escenarios de replicación aplicativa o eventualmente la replicación de máquinas virtuales,*
- *El cálculo y la memoria, en el sitio de recuperación, pueden ser reducidos para optimizar los costos si una situación degradada es aceptable para el negocio durante la acción del plan de recuperación de actividad.*














## Virtualización VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud está basada en la tecnología __VMware Vsphere__.

La plataforma es gestionada por Cloud Temple de manera automática (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operativas, ...).
Se puede gestionar a través de la interfaz gráfica de la consola Shiva o a través de las APIs asociadas.

*__Nota__* : *Por razones de seguridad relacionadas con la calificación SecNumCloud,
__no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (sin acceso directo al vCenter en particular).
De hecho, la calificación SecNumCloud impone __una total segregación__ entre las interfaces de gestión de activos técnicos y la interfaz del cliente (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que está gestionada físicamente por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino solo SANs de IBM en canal de fibra de 32G.*
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un clúster de blade de cálculo ('Cpool')

El __'Cpool'__ es una agrupación de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo inquilino y a la misma zona de disponibilidad__ (AZ). Deben necesariamente tener la misma clase:
__no es posible mezclar diferentes modelos de blades de cálculo dentro de un mismo clúster__.

Todas las blades de cálculo son entregadas con el máximo físico de memoria, una limitación de uso de la RAM se aplica softwaremente a nivel del clúster para asegurar que corresponde a la RAM facturada.

Por defecto, cada blade dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento se puede compartir entre los __'Cpool'__.

### Asignación de Memoria para un 'Cpool'

La reserva de la RAM es configurable por clúster. Puedes reducir o aumentar la cantidad de RAM para que corresponda a tus necesidades a escala del clúster.

__Cuidado con no superar un promedio del 85 % de consumo de memoria por blade de cálculo__.
De hecho, la tecnología VMware usará un método de optimización tipo compresión que puede impactar fuertemente el rendimiento de tus cargas de trabajo y complejizar el diagnóstico.
Del mismo modo, una presión de memoria demasiado alta en tus blades de cálculo forzará al hipervisor a descargar una parte de su memoria en disco para cumplir con las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__, impacta muy fuertemente el rendimiento total de las máquinas virtuales situadas en el almacenamiento (datastore) afectado.
__El diagnóstico es complicado en este contexto__, ya que tu metrología constatará impactos a nivel de CPU y no de la memoria o el almacenamiento.
Asimismo, ten en cuenta que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de swap de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual en cuestión. Debes __tener en cuenta esto en la dimensionamiento de tu almacenamiento__.

Cada blade de cálculo es entregado con 128GB de memoria activada softwaremente a nivel del __'Cpool'__ pero dispone físicamente de la totalidad de la memoria asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de la RAM a la activación del __'Cpool'__ será de 3 x 128GB = 384 GB de RAM.
Podrás extenderla al máximo a 3 x 384GB = 1152GB de memoria.

    Mínimo de memoria de un 'Cpool' = número de hosts X 128GB de memoria
    Máximo de memoria de un 'Cpool' = número de hosts X la cantidad de memoria física del blade de cálculo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a tu disposición un catálogo de `Templates` regularmente enriquecido y actualizado por nuestros equipos.
Actualmente, comprende varias docenas de `Templates` e imágenes para montar en tus máquinas virtuales.

### Actualización de los Hipervisores
Cloud Temple proporciona regularmente builds para los hipervisores para asegurar la aplicación de parches de seguridad. 
Sin embargo, la actualización de los hipervisores sigue bajo tu responsabilidad, ya que no tenemos visibilidad sobre tus restricciones de negocio.

El proceso de actualización está totalmente automatizado. Para garantizar una continuidad del servicio, se requieren al menos dos hipervisores por clúster durante la actualización. Asegúrate de tener los permisos necesarios para realizar estas acciones.

### Gestión de la afinidad de tus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en tus hipervisores.
Pueden ser utilizadas para gestionar el uso de los recursos de tu __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas son a menudo usadas para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puedes configurar las reglas de gestión de la siguiente manera:

- __Reglas de Afinidad__ : Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Son utilizadas para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de la red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Anti-afinidad__ : Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que las máquinas críticas se vean todas afectadas en caso de una falla de un único servidor.
Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren una alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no deseas que tus dos Directorios Activos estén en el mismo hipervisor.

Al crear una regla, defines el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Estado'__) y las máquinas afectadas de tu clúster de hipervisores.

*Nota: las reglas de afinidad/anti-afinidad propuestas en la consola son reglas concernientes a las máquinas virtuales entre sí (sin reglas entre hipervisores y máquinas virtuales).*

### Replicación asíncrona de tus máquinas virtuales en entorno VMware

La replicación asíncrona de tus máquinas virtuales es un mecanismo que consiste en enviar a nivel del hipervisor fuente las operaciones de escritura al sitio standby a intervalos de tiempo regulares. 

Después de una copia inicial en caliente de todo el almacenamiento activo en el sitio standby, solo las escrituras son enviadas en intervalos regulares al sitio en standby.
Este intervalo depende del volumen de escritura (desde cada hora hasta cada 24 horas).


La réplication des machines virtuelles s'appuie sur le mécanisme de clichés instantanés de l'hyperviseur. À ce titre, 
cette solution a les mêmes inconvénients, en particulier la sensibilité au volume d'écritures de la machine virtuelle, 
le processus de cliché instantané étant un mécanisme récursif pour la clôture du cliché instantané.

L'exemple typique de machine qui ne supporte pas le mécanisme de réplication des machines virtuelles est un 
serveur FTP qui reçoit les flux temps réels de caméras de surveillance. __La machine passe son temps à écrire et ne sera 
pas capable de clôturer un cliché instantané sans mise en pause du système d'exploitation pendant une période de temps significative
(plusieurs dizaines de minutes)__. Si l'hyperviseur n'arrive pas à clôturer le cliché instantané, c'est exactement ce qu'il fera,
sans possibilité d'intervenir sauf à corrompre la machine virtuelle.

| SLA             | Descripción                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | En caso de desastre en el datacenter principal, la cantidad máxima de datos perdidos es la de la última escritura enviada al sitio de espera. |
| RTO  < 15mn     | Operación de arranque de la máquina virtual detenida en el sitio remoto                                                                                |


En caso de necesidad, o en caso de defecto en una máquina del sitio principal, se activa la máquina espejo en el sitio de reserva. 
La reanudación de la actividad requiere haber reservado en el sitio de reserva capacidad de cálculo y RAM en espera. Es 
necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.


| Referencia                         | Unidad | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*













## Respaldo de máquinas virtuales
Cloud Temple propone __una arquitectura de respaldo cruzado nativo y no deshabilitable__ (es obligatoria en la calificación secnumcloud francesa).

Los respaldos se almacenan en una zona de disponibilidad y en un datacenter físico diferente de aquel que alberga la máquina virtual.

Esto permite protegerse en caso de fallo mayor en el datacenter de producción y restaurar en un datacenter secundario (por ejemplo, en caso de incendio).

Esta solución comprende:

- El respaldo fuera del sitio a caliente de todos los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga a caliente en los SAN de producción,
- La restauración parcial de archivos desde el respaldo,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de respaldo se basa en la solución *IBM Spectrum Protect Plus*, una solución con arquitectura sin agente, 
simple de usar y que permite la automatización de los procesos de respaldo además de la optimización del espacio de almacenamiento masivo.

Las velocidades de respaldos y restauraciones dependen de la tasa de cambio en los entornos.
La política de respaldo es configurable desde [la Console Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota :__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de respaldo__ que utiliza los mecanismos de clichés instantáneos del hipervisor.
Estas suelen ser máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar el cliché instantáneo, lo cual 
obliga a congelar la máquina virtual para poder completar la operación de cierre. Este congelamiento puede durar varias horas y no se puede detener.*

*La solución es entonces excluir el disco que es objetivo de escrituras permanentes y respaldar los datos por otro método.*

| Referencia                                               | Unidad | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| RESPALDO - Acceso al servicio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Crear una política de respaldo
Para añadir una nueva política de respaldo, se debe realizar una solicitud al soporte. El soporte es accesible desde el icono de boya en la esquina superior derecha de la ventana.

La creación de una nueva política de respaldo se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de respaldo
    Las características (x días, y semanas, z meses, ...)