---
title: Conceptos
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad del negocio y recuperación ante desastres, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza la máxima disponibilidad y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional:

- Cómputo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloque.
- Red: __JUNIPER__.
- Virtualización: __VMware__, que proporciona una base fiable y probada para gestionar sus entornos en la nube.
- Copia de seguridad: __IBM Spectrum Protect Plus__, para orquestar y almacenar copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, que garantiza una amplia compatibilidad con los principales proveedores de software.

## Una infraestructura dedicada y automatizada

Aunque está totalmente automatizada a través de API y un proveedor de Terraform, la oferta IaaS de Cloud Temple proporciona una infraestructura única:

- __Recursos dedicados__: Las cuchillas de cómputo, los volúmenes de almacenamiento y las pilas de software (virtualización, copia de seguridad, firewall, etc.) nunca se comparten entre clientes.
- __Máxima previsibilidad__: Usted controla las tasas de virtualización, la presión de IOPS en el almacenamiento y se beneficia de una facturación clara y basada en el consumo mensual.

La plataforma cuenta con la certificación __SecNumCloud__ de [ANSSI](https://www.ssi.gouv.fr/), lo que garantiza un alto nivel de automatización y seguridad.

## Características principales

- Recursos de cómputo dedicados y bajo demanda (CPU, RAM).
- Almacenamiento bajo demanda (múltiples clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo de Infraestructura como Código utilizando API y el proveedor de Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y cumplimiento del RGPD.                                                                                     |
| Seguridad           | Plataforma altamente segura, certificada __SecNumCloud__, __HDS__ (Alojamiento de Datos de Salud), __ISO 27001__ e __ISAE 3402 tipo II__.     |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluidas las ventanas de mantenimiento.                             |
| Resiliencia         | Implementación de planes de continuidad del negocio o recuperación ante desastres según sea necesario.                                       |
| Automatización      | Plataforma totalmente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Bajo demanda        | Recursos disponibles bajo demanda.                                                                                                           |

## Regiones y zonas de disponibilidad

El producto IaaS VMware se implementa en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de implementación le permite elegir la ubicación de los clústeres y distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto proporciona un mejor equilibrio de carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de un incidente.

---

## Cómputo

Las cuchillas proporcionadas por Cloud Temple son del tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Son totalmente gestionadas por Cloud Temple (firmware, versión del sistema operativo, etc.) a través de la consola de Cloud Temple.

Hay varias categorías de cuchillas de cómputo disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenerización, ...).
Estas tienen diferentes características y rendimiento para satisfacer mejor sus necesidades. El catálogo de cuchillas de cómputo se actualiza regularmente.

Cuando se utiliza con una oferta de virtualización, un clúster de hipervisores se compone únicamente de cuchillas de cómputo del mismo tipo (no es posible mezclar diferentes tipos de cuchillas en el mismo clúster).

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                        | Núcleos / Hilos | Conectividad __(3)__ | GPU __(4)__          | SKU para la oferta de VMware |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Cuchilla ECO v3       | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos              | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Cuchilla STANDARD v3  | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Cuchilla ADVANCE v3   | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Cuchilla PERFORMANCE 1 v3| 384 GB    | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Cuchilla PERFORMANCE 2 v3| 768 GB    | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Cuchilla PERFORMANCE 3 v3| 1536 GB   | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Cuchilla PERFORMANCE 4 v3| 512 GB    | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 hilos              | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notas__:

- __(1)__ La cantidad de memoria entregada es la cantidad físicamente disponible en las cuchillas. No es posible cambiar la cantidad física de memoria de una cuchilla.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo a nivel de BIOS.

- __(3)__ La conectividad física se comparte para el acceso a la red y el acceso al almacenamiento en bloque, ya que la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU realmente disponible está en constante evolución. A partir del 1 de mayo de 2024, la oferta se basa en las GPU NVIDIA LOVELACE L40S. Por defecto, la cuchilla PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Póngase en contacto con el soporte para obtener más detalles si es necesario.

La disponibilidad de la oferta de cómputo es del 99,99%, calculada mensualmente, incluidas las ventanas de mantenimiento. La elegibilidad en caso de incumplimiento del SLA está sujeta a
la creación de un ticket de incidente. También debe tener al menos dos hosts por clúster y habilitar la función de __Alta Disponibilidad__ (HA).
Esta función permite que su arquitectura reinicie automáticamente sus máquinas virtuales en el segundo hipervisor.
Si una zona de disponibilidad contiene solo un hipervisor, el reinicio automático no es posible.

## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red que utiliza la tecnología VPLS, que ofrece una segmentación flexible y de alto rendimiento para satisfacer las necesidades de los clientes en cuanto a conectividad y aislamiento de red.

### VLAN de capa 2

Las VLAN proporcionadas en la oferta IaaS son de __Capa 2__, lo que ofrece un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Conceptos clave

- __Compartición entre clústeres y zonas de disponibilidad (AZ)__:
  - Las VLAN se pueden compartir entre diferentes AZ y diferentes clústeres que pertenecen al mismo inquilino.
- __Propagación entre inquilinos__:
  - Las VLAN se pueden propagar entre varios inquilinos que pertenecen a la misma organización, lo que facilita las comunicaciones internas.

---

### Rendimiento de la red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__: Menos de __3 ms__.
- __Latencia inter-AZ__: Menos de __5 ms__.

---

### Puntos clave

1. __Flexibilidad__: Las VLAN se pueden configurar para adaptarse a entornos de múltiples clústeres y múltiples inquilinos.
2. __Alto rendimiento__: La latencia mínima garantiza una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__: Las VLAN de capa 2 ofrecen una segmentación de red estricta para proteger los datos y el tráfico.

---

## Almacenamiento en bloque

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/)
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ ofrece el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran
cantidad de memoria caché integrada en los controladores y la capacidad de distribuir todos los IOPS
de un servidor en varias SAN.

También se utiliza para permitir la replicación de sus LUN de almacenamiento en bloque entre
zonas de disponibilidad o para facilitar las intervenciones en las matrices de almacenamiento.

El almacenamiento es principalmente del tipo FLASH NVME dedicado a cargas de trabajo profesionales.
Los discos son utilizados por las matrices de almacenamiento en [__'RAID 6 distribuido'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivo
en un contexto de eficiencia económica. Hay varios niveles de rendimiento disponibles:

| Referencia                          | Unidad | SKU                                          |
|-----------------------------------|--------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/TB    | 1 GiB  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/TB   | 1 GiB  | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB  | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivado         | 1 TiB  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__:*

- *El rendimiento efectivo para una clase de almacenamiento está vinculado al volumen realmente solicitado, según la noción de "IOPS/TB", que significa "límite de IOPS por Tera asignado",*

> *Así, un volumen de 0,5 TB en la clase de rendimiento 'Estándar' tendrá un límite de IOPS de 750 IOPS,*
> *Del mismo modo, un volumen de 10 TB en la clase de rendimiento 'Ultra' tendrá un límite de IOPS de 150.000 IOPS,*

- *El límite de IOPS se aplica al volumen, por lo tanto, al concepto de Datastore para un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99,99% medida mensualmente, incluidas las ventanas de mantenimiento,*
- *No hay restricciones ni cuotas de lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500 GiB,*
- *Cuando se utiliza un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como la compresión o la deduplicación: cuando reserva 10 TiB de almacenamiento, tiene físicamente 10 TiB de almacenamiento utilizable implementado en las máquinas de IBM.*
- *Las LUN de almacenamiento están dedicadas al entorno del cliente.*

### Uso dentro de la oferta de cómputo de VMware

Al utilizar el almacenamiento en bloque como un datastore en la oferta de cómputo de VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__:

1. __Archivo de intercambio (.VSWP) al iniciar máquinas virtuales__: Cuando una máquina virtual se inicia, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe tener espacio libre en su datastore equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore tiene 1 TiB de almacenamiento en bloque y desea iniciar 10 máquinas virtuales con 64 GiB de memoria cada una, se requerirán 640 GiB de espacio en disco. Sin este espacio, el inicio de las máquinas estará limitado por la capacidad disponible para crear los archivos de intercambio.

2. __Espacio libre para instantáneas de copia de seguridad__: El servicio de copia de seguridad utiliza instantáneas. Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de una instantánea al realizar una copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. Como regla general, se recomienda mantener al menos un 10% de espacio libre para esta operación.

3. __Gestión de discos dinámicos__: Tenga cuidado con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede provocar la congelación de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor de los casos. Es crucial supervisar cuidadosamente el espacio disponible en sus datastores cuando se utiliza este tipo de disco.

La gestión proactiva del espacio en disco es esencial para garantizar el correcto funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese de tener siempre el espacio necesario para los archivos de intercambio, las instantáneas y el crecimiento de los discos dinámicos.

## Modo de almacenamiento de copia de seguridad

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales es aprovisionado automáticamente por la plataforma hasta la cuota solicitada.

| Referencia                | Unidad | SKU                                      |
|--------------------------|--------|------------------------------------------|
| MASS STORAGE - Archivado | 1 TiB  | csp:(region):iaas:storage:bloc:backup:v1 |

### Replicación de almacenamiento en bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en
una situación de continuidad del negocio con mecanismos de aplicación y cuando la replicación de máquinas virtuales
no es adecuada, Cloud Temple ofrece __mecanismos de replicación de almacenamiento en bloque entre zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican a las LUN de almacenamiento de sus entornos, además de las copias de seguridad.
La elección de utilizar un mecanismo de replicación en un entorno __depende de muchos factores, incluida su criticidad, la pérdida de datos tolerada o el rendimiento objetivo__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos implementados en una configuración activo/pasivo:

- Replicación __asíncrona__ (o __'Global Mirror'__): *La función __'Global Mirror'__ proporciona un proceso de copia asíncrona.
Cuando un host escribe en el volumen primario, se recibe la confirmación de la finalización de la E/S antes de que la
operación de escritura se complete para la copia en el volumen secundario. Si se inicia una operación de conmutación por error, la aplicación
debe recuperar y aplicar todas las actualizaciones que no se hayan confirmado en el volumen secundario.
Si las operaciones de E/S en el volumen primario se pausan durante un breve período,
el volumen secundario puede convertirse en una coincidencia exacta del volumen primario. Esta función es comparable a un proceso de
copia de seguridad continua en el que siempre faltan las últimas actualizaciones.
Cuando se utiliza Global Mirror para fines de recuperación ante desastres, debe considerar cómo desea gestionar estas actualizaciones que faltan.*

- Replicación __síncrona__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona
de los datos de un volumen primario a un volumen secundario. Con las copias síncronas, las aplicaciones del host escriben en el volumen primario, pero no reciben confirmación
de que la operación de escritura se ha completado hasta que los datos se escriben en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando
se completa la operación de copia. Una vez completada la operación de copia inicial, la función Metro Mirror
mantiene permanentemente una copia totalmente sincronizada de los datos de origen en el sitio de destino. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

A continuación, definimos un sitio "activo" o "primario" y un sitio "pasivo" o "en espera".
El plan de recuperación ante desastres se activa en caso de desastre o como parte de una solicitud de prueba de DRP.
El sitio pasivo toma el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación cortos y no es aceptable
o apropiado utilizar mecanismos como la replicación de aplicaciones / replicación de máquinas virtuales,
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de la misma región.

Esta oferta proporciona un __RPO de 15 minutos__ y un __RTO de menos de 4 horas__. Permite una recuperación mucho más rápida que
la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento con replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de las
dos zonas de disponibilidad trabajan juntos para realizar operaciones de escritura en ambos sitios.
El sitio maestro no espera el acuse de recibo de escritura del sitio esclavo.

Los pasos de una operación de escritura son los siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. El controlador SAN local no espera el acuse de recibo del SAN remoto y luego realiza la escritura localmente,
4. Da __acuse de recibo__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN de Global Mirror__: Se necesita una solicitud de servicio.

| SLA          | Descripción                                                                                                                                       |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min    | En caso de un desastre en el centro de datos principal, la cantidad máxima de datos perdidos corresponde a un máximo de los últimos 15 minutos de escritura. |
| RTO < 4H     | En caso de un desastre en el centro de datos principal, la recuperación del negocio está garantizada en 4 horas dependiendo de la complejidad de los entornos. |

En caso de activación del DRP, el equipo de Cloud Temple realiza una operación para presentar la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución, por lo tanto, requiere haber reservado recursos de cómputo y RAM en el sitio 'en espera' para reanudar la actividad en caso de un desastre.

El uso de esta tecnología también requiere duplicar el espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar el rendimiento de la aplicación hasta en un 10%. __Solo las clases de almacenamiento de 500 IOPS/TB, 1500 IOPS/TB y 3000 IOPS/TB son compatibles.__

| Referencia                          | Unidad | SKU                                               |  
|-----------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación SAN global | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__*:

- *Como la oferta es asíncrona, es posible que durante un desastre algunas operaciones de disco no se hayan escrito en el sitio remoto. Por lo tanto, puede haber un riesgo para la coherencia de los datos, que debe mitigarse en el análisis de riesgos del plan de recuperación ante desastres.*
- *La replicación del almacenamiento en bloque se realiza de forma transparente para las máquinas virtuales y las aplicaciones,*
- *Como tal, es importante favorecer los escenarios de replicación de aplicaciones o, posiblemente, la replicación de máquinas virtuales,*
- *El cómputo y la memoria en el sitio de recuperación se pueden reducir para optimizar los costos si una situación degradada es aceptable para el negocio cuando se activa el plan de recuperación ante desastres.*

## Virtualización de VMware

La oferta de virtualización de VMware de Cloud Temple, certificada por SecNumCloud, se basa en la tecnología __VMware vSphere__.

La plataforma es gestionada automáticamente por Cloud Temple (mantenimiento de las condiciones de seguridad, mantenimiento operativo, ...).
Se puede controlar a través de la interfaz gráfica de la consola de Shiva o a través de las API asociadas.

*__Nota__*: *Por razones de seguridad relacionadas con la certificación SecNumCloud,
__no es posible que el cliente acceda directamente a la plataforma de virtualización de VMware__ (en particular, no hay acceso directo a vCenter).
De hecho, la certificación SecNumCloud impone una __segregación total__ entre las interfaces de gestión de activos técnicos y la interfaz del cliente (la consola de Shiva).*

- Los productos implementados son VMware ESXi, VMware vCenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es controlada por hardware mediante la tecnología de Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMware vSAN, sino únicamente SAN de IBM con canal de fibra de 32G.*
- *No se implementa ninguna optimización oculta (compresión, deduplicación, ...).*

### Definición de un clúster de cuchillas de cómputo ('Cpool')

Un __'Cpool'__ es un grupo de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los hosts de un __'Cpool'__ pertenecen todos al __mismo inquilino y a la misma zona de disponibilidad__ (AZ). Necesariamente deben tener la misma clase:
__no es posible mezclar diferentes modelos de cuchillas de cómputo dentro del mismo clúster__.

Dado que todas las cuchillas de cómputo se entregan con la memoria física máxima, se aplica una limitación de uso de RAM a nivel de software del clúster para garantizar que se corresponda con la RAM facturada.

Por defecto, cada cuchilla tiene 128 GB de memoria habilitada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento se puede compartir entre __'Cpools'__.

### Asignación de memoria para un 'Cpool'

La reserva de RAM es configurable por clúster. Puede reducir o aumentar la cantidad de RAM para que se ajuste a sus necesidades a nivel de clúster.

__Tenga cuidado de no superar un consumo medio de memoria del 85% por cuchilla de cómputo__.
De hecho, la tecnología de VMware utilizará un método de optimización de tipo compresión que puede afectar fuertemente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Del mismo modo, una presión de memoria demasiado alta en sus cuchillas de cómputo obligará al hipervisor a descargar parte de su memoria en el disco para satisfacer las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__, afecta muy fuertemente el rendimiento general de las máquinas virtuales ubicadas en el almacenamiento (datastore) en cuestión.
__El diagnóstico es complicado en este contexto__, ya que sus métricas mostrarán impactos a nivel de CPU y no en la memoria o el almacenamiento.
Tenga en cuenta también que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de intercambio de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual en cuestión. Debe __tener esto en cuenta al dimensionar su almacenamiento__.

Cada cuchilla de cómputo se entrega con 128 GB de memoria habilitada a nivel de software del __'Cpool'__, pero físicamente tiene la memoria total asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de RAM al activar el *'Cpool'* será de 3 x 128 GB = 384 GB de RAM.
Puede ampliarla a un máximo de 3 x 384 GB = 1152 GB de memoria.

    Memoria mínima de un 'Cpool' = número de hosts X 128 GB de memoria
    Memoria máxima de un 'Cpool' = número de hosts X la cantidad de memoria física de la cuchilla de cómputo

### Catálogos de máquinas virtuales de Cloud Temple

Cloud Temple le proporciona un catálogo de `Plantillas` que nuestros equipos enriquecen y actualizan periódicamente.
Actualmente incluye varias docenas de `Plantillas` e imágenes para montar en sus máquinas virtuales.

### Actualizaciones del hipervisor

Cloud Temple proporciona regularmente compilaciones para los hipervisores para garantizar la aplicación de parches de seguridad.
Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad de las limitaciones de su negocio.

El proceso de actualización está totalmente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de tener los permisos necesarios para realizar estas acciones.

### Gestión de la afinidad de su máquina virtual

Las __reglas de afinidad y anti-afinidad__ le permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Se pueden utilizar para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ de VMware, estas reglas se utilizan a menudo para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion le permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar a través de la gestión de reglas:

- __Reglas de afinidad__: Estas reglas garantizan que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican con frecuencia
juntas en el mismo servidor para reducir la latencia de la red. Las reglas de afinidad son útiles en escenarios
en los que el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- __Reglas de anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos servidores de Active Directory estén en el mismo hipervisor.

Al crear una regla, se define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Estado'__) y las máquinas afectadas en su clúster de hipervisores.

*Nota: las reglas de afinidad/anti-afinidad que se ofrecen en la consola son reglas relativas a las máquinas virtuales entre sí (no reglas entre hipervisores y máquinas virtuales).*

### Replicación asíncrona de sus máquinas virtuales en un entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en enviar las operaciones de escritura desde el hipervisor de origen al sitio en espera a intervalos de tiempo regulares.

Después de una copia inicial en caliente de todo el almacenamiento activo en el sitio en espera, solo las escrituras se envían a intervalos regulares al sitio inactivo.
Este intervalo depende del volumen de escrituras (desde cada hora hasta cada 24 horas).

La replicación de máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. Como tal,
esta solución tiene los mismos inconvenientes, en particular la sensibilidad al volumen de escrituras de la máquina virtual,
ya que el proceso de instantáneas es un mecanismo recursivo para cerrar la instantánea.

El ejemplo típico de una máquina que no admite el mecanismo de replicación de máquinas virtuales es un
servidor FTP que recibe flujos en tiempo real de cámaras de vigilancia. __La máquina pasa su tiempo escribiendo y no será
capaz de cerrar una instantánea sin pausar el sistema operativo durante un período de tiempo significativo
(varias decenas de minutos)__. Si el hipervisor no puede cerrar la instantánea, esto es exactamente lo que hará,
sin posibilidad de intervención, excepto para corromper la máquina virtual.

| SLA             | Descripción                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de un desastre en el centro de datos principal, la cantidad máxima de datos perdidos es la del último envío de escrituras al sitio en espera.      |
| RTO < 15min     | Operación para iniciar la máquina virtual detenida en el sitio remoto.                                                                                    |

Si es necesario, o en caso de un fallo en una máquina en el sitio principal, se activa la máquina espejo en el sitio en espera.
La recuperación del negocio requiere haber reservado cómputo y RAM en espera en el sitio en espera. Es
necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.

| Referencia                          | Unidad | SKU                                             |  
|-----------------------------------|--------|-------------------------------------------------|
| DRP - Replicación inter-AZ de VMware | 1 vm   | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__: El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*

## Copia de seguridad de máquinas virtuales

Cloud Temple ofrece __una arquitectura de copia de seguridad cruzada nativa y no desconectable__ (es obligatoria en la calificación francesa SecNumCloud).

Las copias de seguridad se almacenan en una zona de disponibilidad y un centro de datos físico diferentes al que aloja la máquina virtual. Se cifran mediante un algoritmo de clave simétrica AES de 256 bits (modo de cifrado `xts-plain64`) para garantizar la confidencialidad de los datos.

Esto permite la protección en caso de un fallo importante en el centro de datos de producción y la restauración en un centro de datos secundario (por ejemplo, en caso de incendio).

Esta solución incluye:

- Copia de seguridad en caliente fuera del sitio de todos los discos,
- Presentación e inicio instantáneos de una máquina virtual desde la infraestructura de almacenamiento masivo y recarga en caliente en las SAN de producción,
- Restauración parcial de archivos desde la copia de seguridad,
- Retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución de arquitectura sin agentes,
fácil de usar y que permite la automatización de los procesos de copia de seguridad además de optimizar el espacio de almacenamiento masivo.

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambio en los entornos.
La política de copia de seguridad es configurable desde [la Consola de Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__ que utiliza los mecanismos de instantáneas del hipervisor.
Estas son típicamente máquinas cuyas cargas de escritura en disco son constantes. No es posible que el hipervisor cierre la instantánea, lo que
obliga a congelar la máquina virtual para poder completar la operación de cierre. Esta congelación puede durar varias horas y no se puede detener.*

*La solución es entonces excluir el disco que es el destino de las escrituras permanentes y hacer una copia de seguridad de los datos por otro método.*

| Referencia                                                | Unidad | SKU                            |
| ------------------------------------------------------- | ------ | ------------------------------ |
| COPIA DE SEGURIDAD - Acceso al servicio IBM Spectrum Protect Plus | 1 VM   | csp:(region):iaas:backup:vm:v1 |

#### Crear una política de copia de seguridad

Para añadir una nueva política de copia de seguridad, se debe realizar una solicitud al soporte. Se puede acceder al soporte desde el icono de la boya en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que indica:

    El nombre de su organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del inquilino
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)

## Protección avanzada de datos (HSM/KMS)

Cloud Temple ofrece una solución de __cifrado avanzado de máquinas virtuales__ basada en módulos de seguridad de hardware (HSM) y un servicio de gestión de claves (KMS). Esta función mejora la protección de los datos sensibles a través de la gestión centralizada y segura de las claves de cifrado, directamente integrada en el entorno SecNumCloud.

### Arquitectura técnica

La solución se basa en una sólida infraestructura de seguridad compuesta por:

- __HSM (Módulo de seguridad de hardware)__: Módulos __Thales Luna S790__ certificados __FIPS 140-3 Nivel 3__
- __KMS (Sistema de gestión de claves)__: __Thales CipherTrust Manager__ para la gestión centralizada de claves
- __Integración con VMware__: Comunicación a través del protocolo __KMIP__ (Protocolo de interoperabilidad de gestión de claves)

#### Implementación de alta disponibilidad

La infraestructura HSM se implementa en __tres zonas de disponibilidad__ en la región FR1:

- PAR7S
- TH3S  
- AZ07

Esta distribución garantiza una __alta disponibilidad__ y una __máxima resiliencia__ del servicio de cifrado.

### Funcionamiento y jerarquía de claves

El sistema utiliza una __jerarquía de claves criptográficas__ para garantizar la seguridad de los datos:

| Nivel | Tipo de clave | Descripción | Ubicación |
|-------|---------------|-------------|-----------|
| 1 | __Raíz de confianza (RoT)__ | Clave maestra por KMS | HSM Luna |
| 2 | __Clave de dominio (DK)__ | Clave de dominio por cliente (aislamiento multi-inquilino) | HSM Luna |
| 3 | __Clave de cifrado de claves (KEK)__ | Clave de cifrado por VM | CipherTrust Manager |
| 4 | __Clave de cifrado de datos (DEK)__ | Clave de datos por VM | VMware ESXi |

#### Proceso de cifrado

1. __Generación__: VMware ESXi genera una DEK única para cada máquina virtual
2. __Protección__: La DEK se cifra con la KEK almacenada en CipherTrust Manager
3. __Aseguramiento__: La KEK está a su vez protegida por la jerarquía de claves HSM
4. __Almacenamiento__: La DEK cifrada se almacena con los archivos de configuración de la VM

### Seguridad y cumplimiento

#### Certificaciones

- __FIPS 140-3 Nivel 3__: Certificación del más alto nivel para HSM
- __Common Criteria EAL4+__: Evaluación de seguridad avanzada
- __SecNumCloud__: Calificación ANSSI integrada en el entorno de Cloud Temple

#### Aislamiento multi-inquilino

- __Separación criptográfica__: Cada cliente tiene un dominio KMS aislado
- __Claves dedicadas__: Una clave de dominio específica por cliente
- __Auditoría y trazabilidad__: Registro completo de las acciones por dominio

### Activación y uso

El cifrado de máquinas virtuales se activa __con un solo clic__ desde la [Consola Shiva](../console/console.md).

Para un procedimiento detallado con capturas de pantalla, consulte el [tutorial de cifrado de máquinas virtuales](tutorials/vm_encryption.md).

#### Requisitos previos

- __Proveedor de claves configurado__: Se debe habilitar un proveedor de HSM/KMS en la vStack
- __Máquina virtual apagada__: La VM debe estar detenida antes del cifrado
- __Sin replicación activa__: La VM no debe estar replicada (incompatible con Global Mirror)
- __Sin instantáneas__: No debe haber ninguna instantánea presente
- __Suscripción al servicio__: Se debe suscribir al servicio de protección avanzada

*__Nota__: Para obtener más detalles sobre los requisitos previos y el procedimiento completo, consulte la [guía de cifrado de VM](tutorials/vm_encryption.md).*

### Limitaciones y consideraciones

#### Compatibilidad

- __Global Mirror__: Las máquinas virtuales cifradas __no son compatibles__ con la replicación de Global Mirror
- __Restauración__: Las copias de seguridad de las VM cifradas conservan su protección criptográfica
- __Exportación__: La exportación de VM cifradas requiere procedimientos específicos

#### Rendimiento

- __Impacto mínimo__: El cifrado por hardware garantiza un rendimiento óptimo
- __Transparencia__: Sin impacto en el funcionamiento de las aplicaciones

### Casos de uso recomendados

Esta solución de protección avanzada es especialmente adecuada para:

- __Datos sensibles__: Información personal, datos financieros, secretos industriales
- __Cumplimiento normativo__: Requisitos de RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Sectores críticos__: Banca, seguros, salud, defensa
- __Soberanía digital__: Protección contra el acceso no autorizado, incluso en caso de compromiso

| Referencia | Unidad | SKU |
|-----------|--------|-----|
| PROTECCIÓN AVANZADA - Cifrado de VM a través de HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__:*

- *El servicio requiere una suscripción específica y no está incluido en la oferta estándar de IaaS*
- *La gestión de claves permanece totalmente bajo el control de Cloud Temple en el entorno SecNumCloud*
- *Las claves de cifrado nunca salen de la infraestructura francesa y soberana*
