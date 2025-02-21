---
title: Concepts
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de actividades, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para tus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para almacenamiento de bloques.
- Red: **JUNIPER**.
- Virtualización: **VMware**, ofreciendo una base fiable y probada para gestionar tus entornos cloud.
- Respaldo: **IBM Spectrum Protect Plus**, para la orquestación y el almacenamiento de las copias de seguridad.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, que garantiza una amplia compatibilidad con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque está completamente automatizada gracias a APIs y un proveedor de Terraform, la oferta IaaS de Cloud Temple proporciona una infraestructura única:

- **Recursos dedicados**: Las cuchillas de cálculo, los volúmenes de almacenamiento y las pilas de software (virtualización, respaldo, firewalling, etc.) nunca se comparten entre los clientes.
- **Máxima predictibilidad**: Controlas las tasas de virtualización, la presión en IOPS sobre el almacenamiento y te beneficias de una facturación clara, basada en consumo mensual.

La plataforma está calificada **SecNumCloud** por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Respaldos cruzados con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Administración a través de la [Consola Shiva](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al proveedor de Terraform.

## Ventajas

| Ventaja              | Descripción                                                                                                                                 |   
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital    | Alojamiento de datos en Francia y conformidad con RGPD.                                                                                     |   
| Seguridad            | Plataforma altamente segura, calificada **SecNumCloud**, **HDS** (Alojamiento de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**.    |  
| Alta disponibilidad  | Tasa de disponibilidad de la plataforma del 99.99%, medida mensualmente, incluyendo las ventanas de mantenimiento.                          |   
| Resiliencia          | Implementación de planes de continuidad o recuperación de actividades según las necesidades.                                                |
| Automatización       | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                     |
| Bajo demanda         | Recursos disponibles bajo demanda.                                                                                                         |













## Cálculo

Las cuchillas suministradas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Son completamente gestionadas por Cloud Temple (firmware, versión de SO, etc.) a través de la consola de Cloud Temple.

Varias categorías de cuchillas de cálculo están disponibles en el catálogo para soportar tus cargas de trabajo (Virtualización, Contenerización, etc.).
Estas presentan características y rendimientos diferentes para satisfacer mejor tus necesidades. El catálogo de cuchillas de cálculo evoluciona regularmente.

En el contexto del uso con una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por cuchillas de cálculo del mismo tipo (no es posible mezclar cuchillas de diferentes tipos en el mismo clúster).

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU **(4)**          | SKU para la oferta Vmware           |
|------------------------|--------------|--------------------------------------------|--------------------------|----------------------|----------------------|-------------------------------------|
| Cuchilla ECO v3        | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3          |
| Cuchilla STANDARD v3   | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3     |
| Cuchilla ADVANCE v3    | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3      |
| Cuchilla PERFORMANCE 1 v3 | 384 Go    | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3        |
| Cuchilla PERFORMANCE 2 v3 | 768 Go    | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3        |
| Cuchilla PERFORMANCE 3 v3 | 1536 Go   | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 hilos           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3        |
| Cuchilla PERFORMANCE 4 v3 | 512 Go    | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 hilos            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3        |

__Notas__ :

- __(1)__ La cantidad de memoria entregada es la físicamente disponible en las cuchillas. No es posible cambiar la cantidad física de memoria de una cuchilla.

- __(2)__ La frecuencia mínima base / frecuencia turbo, expresada en Ghz. Por defecto, los procesadores están configurados para un rendimiento máximo a nivel del BIOS.

- __(3)__ La conectividad física es compartida para el acceso a la red y el acceso a almacenamiento de bloques, ya que la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU disponible realmente evoluciona constantemente. Al 1 de mayo de 2024, la oferta se basa en los GPU NVIDIA LOVELACE L40S. Por defecto, la cuchilla PERF4 se entrega con 2 tarjetas L40S de 48 Go de RAM. Contacta con el soporte para más detalles si es necesario.

La disponibilidad de la oferta de cálculo es del 99.99%, calculada mensualmente, incluyendo la ventana de mantenimiento. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidente. También debes poseer al menos dos hosts por clúster y activar la funcionalidad __High Availability__ (HA). Esta funcionalidad permite que tu arquitectura reinicie automáticamente tus máquinas virtuales en el segundo hipervisor. En el caso de que una zona de disponibilidad solo contenga un hipervisor, el reinicio automático no será posible.














## Red
El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red mediante la tecnología VPLS, ofreciendo una segmentación flexible y de alto rendimiento para satisfacer las necesidades de los clientes en términos de conectividad y aislamiento de red.

### VLANs de nivel 2

Las VLANs disponibles en la oferta IaaS son de tipo **nivel 2**, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Principales conceptos:
- **Compartición entre clústers y zonas de disponibilidad (AZ)**: 
  - Las VLANs pueden compartirse entre las diferentes AZ y los diferentes clústers que pertenecen al mismo tenant.
- **Propagación inter-tenants**: 
  - Las VLANs pueden propagarse entre varios tenants pertenecientes a la misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:
- **Latencia intra-AZ**: Inferior a **3 ms**.
- **Latencia inter-AZ**: Inferior a **5 ms**.

---

### Puntos clave

1. **Flexibilidad**: Las VLANs pueden configurarse para adaptarse a entornos multi-clústers y multi-tenants.
2. **Alto rendimiento**: Una latencia mínima asegura una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. **Aislamiento y seguridad**: Las VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

---













## Almacenamiento de bloques

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran cantidad de memoria caché integrada en los controladores y la posibilidad de distribuir el conjunto de IOPS de un servidor en varios SAN.

También se utiliza para permitir la replicación de tus LUNs de almacenamiento en modo bloque entre las zonas de disponibilidad o facilitar las intervenciones en los arreglos de almacenamiento.

El almacenamiento es principalmente del tipo FLASH NVME dedicado a cargas de trabajo profesionales.
Los discos son utilizados por los arreglos de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivo en un contexto de eficiencia económica. Disponibles varios niveles de rendimiento:

| Referencia                          | Unidad | SKU                                          | 
|-------------------------------------|--------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/To      | 1 Gio  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/To     | 1 Gio  | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To      | 1 Gio  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To   | 1 Gio  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To       | 1 Gio  | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivo              | 1 Tio  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo para una clase de almacenamiento está relacionado con el volumen efectivamente pedido, según la noción de "IOPS/To", entendiendo "límite de IOPS por Tera asignado",* 
> *Así, un volumen de 0,5To en la clase de rendimiento 'Estándar' tendrá una limitación de IOPS hasta 750IOPS,*
> *De manera similar, un volumen de 10To en la clase de rendimiento 'Ultra' tendrá una limitación de IOPS hasta 150000 IOPS,*
- *La limitación de IOPS se aplica al volumen, por lo tanto a la noción de Datastore para un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99.99% medido mensualmente, rango de mantenimiento incluido,*
- *No hay ninguna restricción o cuota sobre la lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500Gio,*
- *Al usar un mecanismo de replicación de almacenamiento, los rendimientos deben ser idénticos en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como compresión o deduplicación: cuando se reserva 10Tio de almacenamiento, físicamente se implementa 10Tio útil de almacenamiento en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el marco de la oferta de cómputo VMware

En el contexto del uso de almacenamiento en modo bloque en forma de datastore en la oferta de cómputo VMware de Cloud Temple, **debe tener en cuenta varios aspectos importantes**:

1. **Archivo de swap (.VSWP) al iniciar las máquinas virtuales**: Cuando una máquina virtual arranca, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, debe disponer siempre en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 Tio de almacenamiento en bloque y desea iniciar 10 máquinas virtuales de 64 Gio de memoria cada una, se necesitarán 640 Gio de espacio en disco. Sin este espacio, el inicio de las máquinas estará limitado por la capacidad disponible para crear los archivos de swap.

2. **Espacio libre para snapshots de respaldo**: El servicio de respaldo utiliza snapshots. Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de un snapshot durante el respaldo de una máquina virtual. El tamaño del snapshot depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar el respaldo. Como regla general, se recomienda mantener al menos un 10% de espacio libre para esta operación.

3. **Gestión de discos dinámicos**: Sea cuidadoso con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede resultar en una congelación (freeze) de la máquina virtual en el mejor de los casos, o una falla con corrupción en el peor de los casos. Es crucial monitorear atentamente el espacio disponible en sus datastores cuando use este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para asegurar el correcto funcionamiento de sus máquinas virtuales y la confiabilidad de los respaldos. Asegúrese de siempre disponer del espacio necesario para los archivos de swap, los snapshots y el crecimiento de los discos dinámicos.

## Almacenamiento en modo backup

El almacenamiento dedicado al backup de sus máquinas virtuales es autoprovisto por la plataforma dentro del límite de la cuota pedida. 

| Referencia                | Unidad | SKU                                      | 
|--------------------------|--------|------------------------------------------|
| MASS STORAGE - Archivo   | 1 Tio  | csp:(region):iaas:storage:bloc:backup:v1 |


### Replicación del almacenamiento en modo bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en 
situación de continuidad de negocio con mecanismos aplicativos y la replicación de máquinas virtuales 
no es adecuada, Cloud Temple propone __mecanismos de replicación del almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican en las LUNs de almacenamiento de sus entornos, complementando los respaldos. 
La elección de usar un mecanismo de replicación en un entorno __depende de muchos factores como su criticidad, la pérdida de datos tolerada o el rendimiento buscado__ para la aplicación. 

Cloud Temple propone dos tipos de mecanismos desplegados en una configuración activo/pasivo: 

- La replicación __asíncrona__ (o __'Global Mirror'__) : *La función __'Global Mirror'__ proporciona un proceso de copia asíncrona. 
Cuando un host escribe en el volumen primario, la confirmación de la finalización de la E/S se recibe antes de que la operación 
de escritura se complete en la copia en el volumen secundario. Si se inicia una operación de conmutación por error, la aplicación 
debe recuperar y aplicar todas las actualizaciones que no se confirmaron en el volumen secundario. 
Si las operaciones de E/S en el volumen primario se pausan durante un corto período, 
el volumen secundario puede convertirse en una copia exacta del volumen primario. Esta función es comparable a un proceso 
de respaldo continuo en el que siempre faltan las últimas actualizaciones. 
Cuando se usa Global Mirror para fines de recuperación ante desastres, debe considerar cómo manejar estas actualizaciones faltantes.*

- La replicación __síncrona__ (o __'Metro Mirror'__) : *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona 
de los datos de un volumen primario a un volumen secundario. Con las copias síncronas, las aplicaciones host escriben en el volumen primario, pero no reciben confirmación 
de que la operación de escritura se completó hasta que los datos se escriben en el volumen secundario. Esto garantiza que los dos volúmenes contengan datos idénticos cuando 
la operación de copia se completa. Tras completar la operación de copia inicial, la función Metro Mirror 
mantiene permanentemente una copia completamente sincronizada de los datos fuente en el sitio de destino. __Desde el 1° de enero de 2024, la función 'Metro Mirror' no se comercializa más.__*


Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación ante desastres se activa en caso de siniestro o como parte de una solicitud de prueba del PRA. 
El sitio pasivo toma luego el relevo del sitio activo.

#### Replicación asíncrona 

Cuando sus cargas de trabajo requieren tiempos de recuperación ante desastres cortos y no es aceptable 
o adecuado usar mecanismos de replicación aplicativa/replicación de máquinas virtuales, 
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región. 

Esta oferta permite obtener un __RPO de 15Mn__ y un __RTO inferior a 4H__. Permite recuperarse mucho más rápido que 
la implementación de una restauración de respaldo.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de 
las dos zonas de disponibilidad trabajan conjuntamente para realizar las operaciones de escritura en ambos sitios. 
El sitio maestro no espera la confirmación de escritura del sitio esclavo.

Las etapas de una operación de escritura son las siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad, 
2. El controlador SAN local pide al controlador SAN de la zona remota que realice la operación de escritura,
3. El controlador SAN local no espera la confirmación del SAN remoto y realiza entonces la escritura localmente,
4. Da __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__: Se necesita una solicitud de servicio.


| SLA        | Descripción                                                                                                                                    |   
|------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn   | En caso de siniestro en el datacenter principal, la cantidad máxima de datos perdidos corresponde como máximo a los últimos 15 minutos de escritura |
| RTO < 4H   | En caso de siniestro en el datacenter principal, la recuperación de actividad está garantizada en menos de 4 horas según la complejidad de los entornos.  |


En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere haber reservado en el sitio 'standby' los recursos de cómputo y la RAM para reanudar la actividad en caso de desastre.

El uso de esta tecnología también requiere duplicar el espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede impactar en el rendimiento de la aplicación hasta en un 10 %. __Sólo son compatibles las clases de almacenamiento 500 Iops/To, 1500 Iops/To y 3000 Iops/TO.__


| Referencia                         | Unidad | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *Al ser una oferta asincrónica, es posible que durante un desastre ciertas operaciones de disco no se hayan escrito en el sitio remoto. Por lo tanto, puede haber un riesgo en la coherencia de los datos, lo cual debe mitigarse en el análisis del plan de recuperación de actividad.*
- *La replicación del almacenamiento en modo bloque se realiza de manera transparente para las máquinas virtuales y las aplicaciones,*
- *En este sentido, es importante priorizar los escenarios de replicación aplicativa o, eventualmente, la replicación de máquinas virtuales,*
- *El cálculo y la memoria, en el sitio de recuperación, pueden reducirse para optimizar los costos si una situación degradada es aceptable para el negocio durante la implementación del plan de recuperación de actividad.*











## Virtualización VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud está basada en la tecnología __VMware Vsphere__.

La plataforma es gestionada por Cloud Temple de manera automática (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operacionales, ...).
Es controlable a través de la interfaz gráfica de la consola Shiva o mediante las APIs asociadas.

*__Observación__* : *Por razones de seguridad relacionadas con la calificación SecNumCloud,
__no es posible para el solicitante acceder directamente a la plataforma de virtualización VMware__ (sin acceso directo al vCenter en particular).
De hecho, la calificación SecNumCloud impone __una total segregación__ entre las interfaces de control de los activos técnicos y la interfaz del solicitante (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es controlada materialmente por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino únicamente SANs IBM en fiber channel 32G.*
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un clúster de blades de cálculo ('Cpool')

El __'Cpool'__ es un agrupamiento de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Deben tener necesariamente la misma clase:
__no es posible mezclar diferentes modelos de blade de cálculo dentro de un mismo clúster__.

Todos los blades de cálculo se entregan con el máximo físico de memoria, y se aplica una limitación del uso de la RAM a nivel del clúster para asegurar que corresponde a la RAM facturada.

Por defecto, cada blade dispone de 128 Go de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento puede ser compartido entre los __'Cpool'__.

### Asignación de Memoria para un 'Cpool'

La reserva de la RAM es configurable por clúster. Puede reducirse o aumentarse la cantidad de RAM para que corresponda a sus necesidades a nivel del clúster.

__Atención a no superar un promedio del 85 % de consumo de memoria por blade de cálculo__.
De hecho, la tecnología VMware utilizará un método de optimización tipo compresión que puede afectar gravemente el rendimiento de sus cargas de trabajo y complejizar el diagnóstico.
De igual forma, una fuerte presión de memoria en sus blades de cálculo forzará al hipervisor a descargar parte de su memoria en disco para responder a las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__ afecta significativamente el rendimiento de todas las máquinas virtuales situadas en el almacenamiento (datastore) afectado.
__El diagnóstico es complicado en este contexto__, ya que su metrología observará impactos a nivel del CPU y no de la memoria o del almacenamiento.
También tenga en cuenta que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de swap de memoria__ (.vswap) en el disco, del tamaño de la memoria de la máquina virtual en cuestión. Debe __considerarlo en el dimensionamiento de su almacenamiento__.

Cada blade de cálculo se entrega con 128Go de memoria activada a nivel del __'Cpool'__ pero cuenta físicamente con la totalidad de la memoria asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de la RAM a la activación del __'Cpool'_ será de 3 x 128Go = 384 Go de RAM.
Podrá extenderse hasta un máximo de 3 x 384Go = 1152Go de memoria.

    Mínimo de memoria de un 'Cpool' = número de hosts X 128Go de memoria
    Máximo de memoria de un 'Cpool' = número de hosts X la cantidad de memoria física del blade de cálculo

### Catálogo de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` regularmente enriquecido y actualizado por nuestros equipos.
Actualmente incluye varias docenas de `Templates` e imágenes para montar en sus máquinas virtuales.

### Actualización de los Hipervisores
Cloud Temple proporciona regularmente builds para los hipervisores con el fin de asegurar la aplicación de parches de seguridad. 
Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones empresariales.

El proceso de actualización está completamente automatizado. Para garantizar la continuidad del servicio, se requieren al menos dos hipervisores por clúster durante la actualización. Asegúrese de tener los permisos necesarios para realizar estas acciones.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y antiafinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ de VMware, estas reglas se utilizan a menudo para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de Afinidad__ : Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento, manteniendo las máquinas virtuales que se comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Antiafinidad__ : A la inversa, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que todas las máquinas críticas se vean afectadas en caso de falla de un único servidor.
Las reglas de antiafinidad son cruciales para aplicaciones que necesitan alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no querrá que sus dos Active Directory (Directorio Activo) estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad/antiafinidad), el nombre de la regla,
su estado de activación (__'Statut'__) y las máquinas afectadas de su clúster de hipervisores.

*Nota: las reglas de afinidad/antiafinidad propuestas en la consola son reglas que conciernen únicamente a las máquinas virtuales entre sí (no hay reglas entre hipervisores y máquinas virtuales).*

### Replicación asincrónica de sus máquinas virtuales en entorno VMware

La replicación asincrónica de sus máquinas virtuales es un mecanismo que consiste en enviar al hipervisor fuente las operaciones de escritura en el sitio standby a intervalos regulares de tiempo.

Después de una copia inicial en caliente de todo el almacenamiento activo en el sitio standby, solo las escrituras se envían a intervalos regulares al sitio en standby.
Este intervalo depende del volumen de escritura (desde cada hora hasta cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de snapshots del hipervisor. En este sentido,
esta solución tiene los mismos inconvenientes, en particular la sensibilidad al volumen de escrituras de la máquina virtual,
ya que el proceso de snapshot es un mecanismo recursivo para la finalización del snapshot.

El ejemplo típico de una máquina que no soporta el mecanismo de replicación de máquinas virtuales es una 

serveur FTP que recibe los flujos en tiempo real de las cámaras de vigilancia. __La máquina pasa su tiempo escribiendo y no será 
capaz de cerrar una instantánea sin poner en pausa el sistema operativo durante un período significativo de tiempo
(varias decenas de minutos)__. Si el hipervisor no puede cerrar la instantánea, hará exactamente eso,
sin posibilidad de intervención excepto para corromper la máquina virtual.

| SLA             | Descripción                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos es la de la última carga de escritura en el sitio de respaldo.   |
| RTO < 15mn      | Operación de arranque de la máquina virtual detenida en el sitio remoto                                                                                   |


En caso de necesidad o falla en una máquina del sitio principal, se activa la máquina espejo en el sitio de respaldo. 
La recuperación de actividad requiere haber reservado en el sitio de respaldo los recursos de cálculo y RAM en espera. Es
necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.


| Referencia                         | Unidad | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse según la tasa de cambio en la máquina virtual.*












## Respaldo de máquinas virtuales
Cloud Temple ofrece __una arquitectura de respaldo cruzado nativo y no desactivable__ (es obligatoria en la calificación secnumcloud francesa).

Los respaldos se almacenan en una zona de disponibilidad y en un centro de datos físico diferente al que aloja la máquina virtual.

Esto permite protegerse en caso de un fallo mayor en el centro de datos de producción y restaurar en un centro de datos secundario (incendio, por ejemplo).

Esta solución incluye:

- El respaldo fuera del sitio en caliente de todos los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde el respaldo,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de respaldo se basa en la solución *IBM Spectrum Protect Plus*, una solución con arquitectura sin agente, 
fácil de usar y que permite la automatización de los procesos de respaldo además de una optimización del espacio de almacenamiento masivo.

Las velocidades de respaldo y restauración dependen del índice de cambio en los entornos.
La política de respaldo es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota :__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de respaldo__ que utiliza los mecanismos de instantáneas del hipervisor.
Estas son típicamente las máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar la instantánea lo que 
obliga a congelar la máquina virtual para poder completar la operación de cierre. Este congelamiento puede durar varias horas y no es posible detenerlo.*

*La solución es entonces excluir el disco que es objetivo de escrituras permanentes y respaldar los datos por otro método.*

| Referencia                                               | Unidad | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| RESPALDO - Acceso al servicio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Crear una política de respaldo
Para agregar una nueva política de respaldo, se debe hacer una solicitud al soporte. El soporte es accesible desde el ícono de boya en la parte superior derecha de la ventana.

La creación de una nueva política de respaldo se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de respaldo
    Las características (x días, y semanas, z meses, ...)