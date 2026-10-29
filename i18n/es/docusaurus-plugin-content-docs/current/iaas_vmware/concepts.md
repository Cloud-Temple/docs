---
title: Conceptos
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Presentación

La oferta __IaaS VMware__ es una infraestructura de virtualización VMware dedicada, diseñada para responder a las necesidades críticas de continuidad y de recuperación de la actividad, en particular en sectores exigentes como la industria, la banca y los seguros. Garantiza una alta disponibilidad y un rendimiento predecible para sus cargas de trabajo críticas.

Aunque está completamente automatizada gracias a las APIs y a un proveedor de Terraform, la oferta proporciona una infraestructura dedicada:

- __Recursos dedicados__ : Las lamas de cálculo, los volúmenes de almacenamiento y los stacks de software (virtualización, copia de seguridad, firewalling, etc.) nunca se comparten entre los clientes.
- __Predictibilidad máxima__ : Usted controla las tasas de virtualización y la presión de IOPS sobre el almacenamiento, y disfruta de una facturación clara, basada en el consumo mensual.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de los datos en Francia y cumplimiento del RGPD.                                                                                   |
| Seguridad           | Plataforma altamente segura, cualificada __SecNumCloud__, certificada __HDS__ (Alojamiento de Datos de Salud), __ISO 27001__ e __ISAE 3402 tipo II__.      |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99 %, medida mensualmente, ventanas de mantenimiento incluidas.                                 |
| Resiliencia         | Implantación de planes de continuidad o de recuperación de la actividad según las necesidades.                                                |
| Automatización      | Plataforma completamente automatizada, pensada para integrarse en un programa de transformación digital.                                       |
| On demand           | Recursos disponibles bajo demanda.                                                                                                             |

<a id="principales-fonctionnalités"></a>

## Funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Gestión mediante la [consola](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al proveedor de Terraform.

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` enriquecido y actualizado regularmente por nuestros equipos.
A día de hoy incluye varias decenas de `Templates` e imágenes para montar en sus máquinas virtuales.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y de anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas se utilizan a menudo para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite desplazar máquinas virtuales de un host a otro sin interrupción del servicio.

Gracias a la gestión de reglas, puede configurar:

- __Reglas de afinidad__ : Estas reglas garantizan que determinadas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican con frecuencia
en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
en los que el rendimiento es crítico, como en el caso de bases de datos o de aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de anti-afinidad__ : Por el contrario, estas reglas garantizan que determinadas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad,
como en los entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no querrá que sus dos Active Directory estén en el mismo hipervisor.

Al crear una regla, usted define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Estado'__) y las máquinas afectadas de su clúster de hipervisores.

*Observación: las reglas de afinidad/anti-afinidad ofrecidas en la consola son reglas que conciernen a las máquinas virtuales entre sí (no hay reglas entre hipervisores y máquinas virtuales).*

## Arquitectura

### Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para el almacenamiento en bloque.
- Red: __JUNIPER__.
- Virtualización: __VMware__, que ofrece una base fiable y probada para gestionar sus entornos cloud.
- Copia de seguridad: __IBM Spectrum Protect Plus__, para la orquestación y el almacenamiento de las copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, que garantiza una amplia compatibilidad con los principales editores de software.

### Virtualización VMware

La oferta de virtualización VMware de Cloud Temple cualificada SecNumCloud se basa en la tecnología __VMware Vsphere__.

Cloud Temple gestiona la plataforma de forma automática (mantenimiento de las condiciones de seguridad, mantenimiento en condiciones operativas, ...).
Puede gestionarse a través de la interfaz gráfica de la consola o mediante las APIs asociadas.

*__Observación__* : *Por razones de seguridad vinculadas a la cualificación SecNumCloud,
__el cliente no puede acceder directamente a la plataforma de virtualización VMware__ (en particular, no hay ningún acceso directo al vCenter).
En efecto, la cualificación SecNumCloud impone __una segregación total__ entre las interfaces de gestión de los activos técnicos y la interfaz del cliente (la consola).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que se gestiona a nivel de hardware mediante la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMware vSan, sino únicamente SAN de IBM en fiber channel 32G.*
- *No se aplica ninguna forma de optimización oculta (compresión, deduplicación, ...).*

#### Definición de un clúster de lamas de cálculo ('Cpool')

El __'Cpool'__ es una agrupación de hipervisores VMware ESXi, también conocida como *'clúster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Deben tener necesariamente la misma clase:
__no es posible mezclar modelos diferentes de lama de cálculo dentro de un mismo clúster__.

Dado que todas las lamas de cálculo se entregan con el máximo físico de memoria, se aplica por software una limitación del uso de la RAM a nivel del clúster para garantizar que corresponda a la RAM facturada.

Por defecto, cada lama dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener como máximo 32 hipervisores. Por encima de este límite, será necesario crear un segundo clúster.

El almacenamiento puede compartirse entre los __'Cpool'__.

#### Asignación de memoria para un 'Cpool'

La reserva de RAM es configurable por clúster. Puede reducir o aumentar la cantidad de RAM para que corresponda a sus necesidades a escala del clúster.

__Tenga cuidado de no superar una media del 85 % de consumo de memoria por lama de cálculo__.
En efecto, la tecnología VMware utilizará un método de optimización de tipo compresión que puede afectar fuertemente al rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Del mismo modo, una presión de memoria demasiado alta en sus lamas de cálculo obligará al hipervisor a descargar una parte de su memoria en disco para responder a las necesidades de las máquinas virtuales.

Este caso, denominado __'Ballooning'__, afecta muy fuertemente al rendimiento del conjunto de las máquinas virtuales situadas en el almacenamiento (datastore) afectado.
__El diagnóstico es complicado en este contexto__, ya que su metrología constatará impactos a nivel de CPU y no de la memoria o del almacenamiento.
Tenga también en cuenta que lo primero que hace el hipervisor al arrancar una máquina virtual es crear __un archivo de swap de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual correspondiente. Debe __tenerlo en cuenta en el dimensionamiento de su almacenamiento__.

Cada lama de cálculo se entrega con 128GB de memoria activada por software a nivel del __'Cpool'__, pero dispone físicamente de la totalidad de la memoria asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de RAM en la activación del _*'Cpool'* será de 3 x 128GB = 384 GB de RAM.
Podrá ampliarla como máximo a 3 x 384GB = 1152GB de memoria.

    Memoria mínima de un 'Cpool' = número de hosts X 128GB de memoria
    Memoria máxima de un 'Cpool' = número de hosts X la cantidad de memoria física de la lama de cálculo

#### Actualización de los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de garantizar la aplicación de los parches de seguridad.
Sin embargo, la actualización de los hipervisores sigue siendo responsabilidad suya, ya que no tenemos visibilidad sobre sus restricciones de negocio.

El proceso de actualización está completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de disponer de los permisos necesarios para realizar estas acciones.

## Regiones y zonas de disponibilidad

El producto IaaS VMware se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los clústeres y repartirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece un mejor reparto de la carga, maximiza la redundancia y facilita la implantación de un plan de recuperación ante desastres (DRP) en caso de incidente.


## Especificaciones técnicas

### Cálculo

Las lamas proporcionadas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Están completamente gestionadas por Cloud Temple (firmware, versión del SO, ...) a través de la consola Cloud Temple.

Hay varias categorías de lamas de cálculo disponibles en el catálogo para soportar sus cargas de trabajo (virtualización, contenerización, ...).
Estas presentan características y rendimientos diferentes para responder mejor a sus necesidades. El catálogo de lamas de cálculo evoluciona regularmente.

En el marco del uso con una oferta de virtualización, un clúster de hipervisores se compone únicamente de lamas de cálculo del mismo tipo (no es posible mezclar lamas de diferentes tipos en un mismo clúster).

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                        | Número de núcleos / threads | Conectividad __(3)__ | GPU __(4)__          |
| --------------------- | ------------ | ----------------------------------------- | --------------------------- | -------------------- | -------------------- |
| Lama ECO v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 threads             | 2 X 10 Gbit/s        | |
| Lama STANDARD v3      | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 threads             | 2 X 25 Gbit/s        | |
| Lama ADVANCE v3       | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 threads             | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 1 v3 | 384 GB       | 3.20/3.6 GHz (Gold 5315Y o equivalente)   | 16 / 32 threads             | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 2 v3 | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 threads             | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 3 v3 | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 threads            | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 4 v3 | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 threads             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

__Observaciones__ :

- __(1)__ La cantidad de memoria entregada es la físicamente disponible en las lamas. No es posible cambiar la cantidad física de memoria de una lama.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo a nivel de la BIOS.

- __(3)__ La conectividad física se comparte para el acceso a la red y el acceso al almacenamiento en bloque, ya que la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU disponible evoluciona permanentemente. Se basa en las GPU NVIDIA L40S. Por defecto, la lama PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Póngase en contacto con el soporte para obtener más precisiones si es necesario.

### Red

El servicio de red de la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, que ofrece una segmentación flexible y de alto rendimiento para responder a las necesidades de los clientes en materia de conectividad y de aislamiento de red.

#### VLANs de nivel 2

Las VLANs puestas a disposición en el producto IaaS son de tipo __nivel 2__, y ofrecen un aislamiento de red completo y una configuración adaptable según las necesidades.

##### Conceptos principales

- __Compartición entre clústeres y zonas de disponibilidad (AZ)__ :
  - Las VLANs pueden compartirse entre las diferentes AZ y los diferentes clústeres que pertenecen al mismo tenant.
- __Propagación entre tenants__ :
  - Las VLANs pueden propagarse entre varios tenants que pertenecen a una misma organización, lo que facilita las comunicaciones internas.

---

#### Rendimiento de la red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__ : Inferior a __3 ms__.
- __Latencia inter-AZ__ : Inferior a __5 ms__.

---

#### Puntos clave

1. __Flexibilidad__ : Las VLANs pueden configurarse para adaptarse a entornos multiclúster y multitenant.
2. __Alto rendimiento__ : Una latencia mínima garantiza una comunicación rápida y eficaz entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__ : Las VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

---

### Almacenamiento en bloque

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/)
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite ofrecer el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran
cantidad de memoria caché integrada en los controladores y a la posibilidad de repartir el conjunto de las IOPS
de un servidor entre varias SAN.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo bloque entre
las zonas de disponibilidad o para facilitar las intervenciones en las cabinas de almacenamiento.

El almacenamiento es principalmente de tipo FLASH NVME, dedicado a las cargas de trabajo profesionales.
Las cabinas de almacenamiento utilizan los discos en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).


La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para las necesidades de archivado
en un contexto de eficiencia económica. Hay varios niveles de rendimiento disponibles:

| Referencia                        | Unidad | Límite máximo de IOPS / LUN | Ancho de banda máximo / LUN |
|-----------------------------------|--------|-----------------------------|-----------------------------|
| FLASH - Esencial - 500 IOPS/TB    | 1 GiB  | 10 000 IOPS                 | 512 MB/s |
| FLASH - Estándar - 1500 IOPS/TB   | 1 GiB  | 30 000 IOPS                 | 1024 MB/s |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB  | 30 000 IOPS                 | 1024 MB/s |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB  | 30 000 IOPS                 | 1024 MB/s |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB  | 30 000 IOPS                 | 1024 MB/s |
| MASS STORAGE - Archivado          | 1 TiB  | No garantizado              | No garantizado |

*__Nota__ :*

- *El rendimiento efectivo de una LUN (Datastore) crece de forma lineal en función del volumen asignado (según su ratio de IOPS/TB), __dentro del límite del techo de hardware absoluto definido anteriormente__.*

> *Por ejemplo, un volumen de 0,5 TB en la clase 'Estándar' dispondrá de 750 IOPS.*
> *En cambio, un volumen de 10 TB en la clase 'Ultra' (teóricamente 150 000 IOPS) quedará limitado por el límite físico absoluto y se estancará en 30 000 IOPS y 1024 MB/s.*

- *Estas limitaciones (IOPS y ancho de banda) se aplican a nivel del volumen de almacenamiento, es decir, a nivel del Datastore en un entorno VMware,*
- *No hay restricción ni cuota sobre la lectura o la escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500GiB,*
- *Cuando se utiliza un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en las dos zonas de disponibilidad,*
- *No se aplica ningún mecanismo de optimización "inteligente" de tipo compresión o deduplicación: cuando reserva 10TiB de almacenamiento, dispone físicamente de 10TiB útiles de almacenamiento implementados en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

#### Uso en el marco de la oferta de cálculo VMware

En el marco del uso del almacenamiento en modo bloque en forma de datastore en la oferta de cálculo VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__:

1. __Archivo de swap (.VSWP) al arrancar las máquinas virtuales__ : Cuando una máquina virtual arranca, crea en el disco un archivo .VSWP del tamaño de su memoria. Por lo tanto, para poder arrancar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TiB de almacenamiento en bloque y desea arrancar 10 máquinas virtuales de 64 GiB de memoria cada una, se necesitarán 640 GiB de espacio en disco. Sin este espacio, el arranque de las máquinas quedará limitado por la capacidad disponible para crear los archivos de swap.

2. __Espacio libre para las instantáneas de copia de seguridad__ : El servicio de copia de seguridad utiliza instantáneas (snapshots). Por lo tanto, siempre debe disponer de suficiente espacio libre para permitir la creación de una instantánea durante la copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. Por regla general, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. __Gestión de los discos dinámicos__ : Tenga cuidado con el uso de los discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede provocar en el mejor de los casos una congelación (freeze) de la máquina virtual o, en el peor de los casos, un bloqueo con corrupción. Es fundamental vigilar atentamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para garantizar el correcto funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese de disponer siempre del espacio necesario para los archivos de swap, las instantáneas y el crecimiento de los discos dinámicos.

### Límites

- Un clúster de hipervisores ('Cpool') contiene como máximo 32 hipervisores, todos de la misma clase de lama.
- El tamaño mínimo de una LUN de almacenamiento es de 500 GiB.
- Un volumen de almacenamiento está limitado a 30 000 IOPS y 1024 MB/s (10 000 IOPS y 512 MB/s en la clase Esencial).
- La cantidad física de memoria de una lama no puede modificarse.
- El reinicio automático de las máquinas virtuales requiere al menos dos hipervisores por clúster, con la High Availability activada.

## Seguridad y cumplimiento

La plataforma está cualificada __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), lo que garantiza un alto nivel de automatización y de seguridad.

### Seguridad y cifrado del almacenamiento en bloque

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloque integra un cifrado por hardware robusto.

- __Tipo de cifrado__ : Los datos se cifran directamente en los discos (`Data At Rest`) mediante el algoritmo __XTS-AES 256__.
- __Conformidad__ : Este método de cifrado es conforme con la norma __FIPS 140-2__, lo que garantiza un alto nivel de seguridad validado.
- __Funcionamiento__ : El cifrado se aplica en el momento de la escritura de los datos en el soporte de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
Es importante tener en cuenta que este cifrado protege los datos almacenados en los discos. No está activo "on-the-fly", lo que significa que los datos no se cifran durante las operaciones de replicación del almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias está garantizada por canales de comunicación dedicados y seguros.
:::

### Protección avanzada de datos (HSM/KMS)

Cloud Temple ofrece una solución de __cifrado avanzado de las máquinas virtuales__ basada en módulos de seguridad de hardware (HSM) y en un servicio de gestión de claves (KMS). Esta funcionalidad permite reforzar la protección de los datos sensibles gracias a una gestión centralizada y segura de las claves de cifrado, integrada directamente en el entorno SecNumCloud.

#### Arquitectura técnica

La solución se apoya en una infraestructura de seguridad robusta compuesta por:

- __HSM (Hardware Security Module)__ : Módulos __Thales Luna S790__ certificados __FIPS 140-3 nivel 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ para la gestión centralizada de las claves
- __Integración VMware__ : Comunicación mediante el protocolo __KMIP__ (Key Management Interoperability Protocol)

##### Despliegue de alta disponibilidad

La infraestructura HSM está desplegada en __tres zonas de disponibilidad__ de la región FR1:

- PAR7S
- TH3S
- AZ07

Este reparto garantiza una __alta disponibilidad__ y una __resiliencia__ máxima del servicio de cifrado.

#### Funcionamiento y jerarquía de claves

El sistema utiliza una __jerarquía de claves criptográficas__ para garantizar la seguridad de los datos:

| Nivel | Tipo de clave | Descripción | Ubicación |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Clave maestra por KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Clave de dominio por cliente (aislamiento multitenant) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Clave de cifrado por VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Clave de datos por VM | VMware ESXi |

##### Proceso de cifrado

1. __Generación__ : VMware ESXi genera una DEK única para cada máquina virtual
2. __Protección__ : La DEK se cifra con la KEK almacenada en CipherTrust Manager
3. __Securización__ : La propia KEK está protegida por la jerarquía de claves HSM
4. __Almacenamiento__ : La DEK cifrada se almacena con los archivos de configuración de la VM

#### Seguridad y cumplimiento

##### Certificaciones

- __FIPS 140-3 nivel 3__ : Certificación del más alto nivel para los HSM
- __Common Criteria EAL4+__ : Evaluación de seguridad avanzada
- __SecNumCloud__ : Cualificación ANSSI integrada en el entorno Cloud Temple

##### Aislamiento multitenant

- __Separación criptográfica__ : Cada cliente dispone de un dominio KMS aislado
- __Claves dedicadas__ : Una Domain Key específica por cliente
- __Auditoría y trazabilidad__ : Registro completo de las acciones por dominio

#### Activación y uso

El cifrado de las máquinas virtuales se activa __con un solo clic__ desde la [consola](../console/console.md).

Para un procedimiento detallado con capturas de pantalla, consulte el [tutorial de cifrado de las máquinas virtuales](tutorials/vm_encryption.md).

##### Requisitos previos

- __Proveedor de claves configurado__ : Debe estar activado un proveedor HSM/KMS en la vStack
- __Máquina virtual apagada__ : La VM debe estar detenida antes del cifrado
- __Ninguna replicación activa__ : La VM no debe estar replicada (incompatible con Global Mirror)
- __Sin snapshot__ : No debe existir ninguna instantánea
- __Suscripción al servicio__ : Se debe haber suscrito el servicio de protección avanzada

*__Observación__ : Para más detalles sobre los requisitos previos y el procedimiento completo, consulte la [guía de cifrado de las VMs](tutorials/vm_encryption.md).*

#### Limitaciones y consideraciones

##### Compatibilidad

- __Global Mirror__ : Las máquinas virtuales cifradas __no son compatibles__ con la replicación Global Mirror
- __Restauración__ : Las copias de seguridad de VMs cifradas conservan su protección criptográfica
- __Exportación__ : La exportación de VMs cifradas requiere procedimientos específicos

##### Rendimiento

- __Impacto mínimo__ : El cifrado por hardware garantiza un rendimiento óptimo
- __Transparencia__ : Ningún impacto en el funcionamiento de las aplicaciones

#### Casos de uso recomendados

Esta solución de protección avanzada está especialmente indicada para:

- __Datos sensibles__ : Información personal, datos financieros, secretos industriales
- __Cumplimiento normativo__ : Requisitos de protección de datos (RGPD) y de seguridad de la información (ISO 27001)
- __Sectores críticos__ : Banca, seguros, salud, defensa
- __Soberanía digital__ : Protección contra los accesos no autorizados, incluso en caso de compromiso


*__Nota__ :*

- *El servicio requiere una suscripción específica y no está incluido en el producto IaaS estándar*
- *La gestión de las claves permanece completamente bajo el control de Cloud Temple en el entorno SecNumCloud*
- *Las claves de cifrado nunca salen de la infraestructura francesa y soberana*

## Copia de seguridad y continuidad

### Copia de seguridad de máquinas virtuales

Cloud Temple ofrece __una arquitectura de copia de seguridad cruzada nativa y no desactivable__ (es obligatoria en la cualificación SecNumCloud francesa).

Las copias de seguridad se almacenan en una zona de disponibilidad y en un datacenter físico diferentes de los que alojan la máquina virtual. Se cifran mediante un algoritmo de claves simétricas AES de 256 bits (cipher mode `xts-plain64`) para garantizar la confidencialidad de los datos.

Esto permite protegerse en caso de fallo grave en el datacenter de producción y restaurar en un datacenter secundario (en caso de incendio, por ejemplo).

Esta solución incluye:

- La copia de seguridad externa en caliente del conjunto de los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de mass storage y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde la copia de seguridad,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución con arquitectura sin agente,
sencilla de utilizar y que permite la automatización de los procesos de copia de seguridad, además de una optimización del espacio de mass storage.

Las velocidades de copia de seguridad y de restauración dependen de la tasa de cambio en los entornos.
La política de copia de seguridad es configurable desde [la consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__, que utiliza los mecanismos de instantáneas del hipervisor.
Se trata típicamente de las máquinas cuyas cargas de escritura en disco son constantes. El hipervisor no puede cerrar la instantánea, lo que
obliga a congelar la máquina virtual para poder finalizar la operación de cierre. Esta congelación puede durar varias horas y no se puede detener.*

*La solución consiste entonces en excluir el disco que es objeto de escrituras permanentes y realizar la copia de seguridad de los datos mediante otro método.*


#### Crear una política de copia de seguridad

Para añadir una nueva política de copia de seguridad, debe realizar una solicitud al soporte. El soporte es accesible desde el icono de salvavidas situado en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que indique:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y n.º de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)

### Almacenamiento en modo backup

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales es aprovisionado automáticamente por la plataforma dentro del límite de la cuota contratada.


### Replicación del almacenamiento en modo bloque

#### Principios

Para permitir la implantación de sus planes de recuperación ante desastres, cuando no es posible estar en
situación de continuidad de actividad con mecanismos de aplicación y la replicación de las máquinas virtuales
no es adecuada, Cloud Temple ofrece __mecanismos de replicación del almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican a las LUNs de almacenamiento de sus entornos, como complemento de las copias de seguridad.
La elección de utilizar un mecanismo de replicación en un entorno __depende de numerosos factores, entre ellos su criticidad, la pérdida de datos tolerada o el rendimiento previsto__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasivo:

- La replicación __asíncrona__ (o __'Global Mirror'__): *La función __'Global Mirror'__ proporciona un proceso de copia asíncrona.
Cuando un host escribe en el volumen primario, la confirmación de la finalización de la E/S se recibe antes de que la operación
de escritura finalice para la copia en el volumen secundario. Si se inicia una operación de conmutación, la aplicación
debe recuperar y aplicar todas las actualizaciones que no se han confirmado en el volumen secundario.
Si las operaciones de E/S en el volumen primario se ponen en pausa durante un breve período,
el volumen secundario puede convertirse en una correspondencia exacta del volumen primario. Esta función es comparable a un proceso
de copia de seguridad continua en el que siempre faltan las últimas actualizaciones.
Cuando utiliza Global Mirror con fines de recuperación ante desastres, debe reflexionar sobre la manera en que desea gestionar estas actualizaciones que faltan.*

- La replicación __síncrona__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona
de los datos de un volumen primario en un volumen secundario. Con las copias síncronas, las aplicaciones host escriben en el volumen primario, pero no reciben la confirmación
de que la operación de escritura ha finalizado hasta que los datos se han escrito en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando
la operación de copia ha finalizado. Una vez finalizada la operación de copia inicial, la función Metro Mirror
mantiene permanentemente una copia totalmente sincronizada de los datos de origen en el sitio de destino. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación ante desastres se activa en caso de siniestro o en el marco de una solicitud de prueba del plan de recuperación ante desastres.
A continuación, el sitio pasivo toma el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación de la actividad cortos y no es aceptable
ni adecuado utilizar mecanismos de tipo replicación de aplicaciones / replicación de máquinas virtuales,
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región.

Este producto permite obtener un __RPO de 15Mn__ y un __RTO inferior a 4H__. Permite reanudar la actividad mucho más rápidamente que
la realización de una restauración de copia de seguridad.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de las
dos zonas de disponibilidad trabajan conjuntamente para realizar las operaciones de escritura en ambos sitios.
El sitio maestro no espera la confirmación de escritura del sitio esclavo.

Las etapas de una operación de escritura son las siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. el controlador SAN local no espera la confirmación del SAN remoto y realiza entonces la escritura localmente,
4. Envía la __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__: es necesaria una solicitud de servicio.

| Objetivo  | Descripción                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | En caso de siniestro en el datacenter principal, la cantidad máxima de datos perdidos corresponde como máximo a los 15 últimos minutos de escritura |
| RTO < 4H  | En caso de siniestro en el datacenter principal, la recuperación de la actividad está garantizada en 4 horas según la complejidad de los entornos. |

En caso de activación del plan de recuperación ante desastres, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. Por lo tanto, la implantación de esta solución requiere haber reservado en el sitio 'standby' recursos de cálculo y RAM para reanudar la actividad en caso de siniestro.

El uso de esta tecnología también requiere duplicar el espacio en disco: es necesario disponer exactamente del mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar al rendimiento de la aplicación hasta en un 10 %. __Solo son compatibles las clases de almacenamiento 500 Iops/TB, 1500 Iops/TB y 3000 Iops/TB.__


*__Nota__* :

- *Al ser la oferta asíncrona, es posible que durante un siniestro algunas operaciones de disco no se hayan escrito en el sitio remoto. Por lo tanto, puede existir un riesgo sobre la coherencia de los datos, que debe mitigarse en el análisis de riesgos del plan de recuperación ante desastres.*
- *La replicación del almacenamiento en modo bloque se realiza de forma transparente para las máquinas virtuales y las aplicaciones,*
- *Por ello, es importante priorizar los escenarios de replicación de aplicaciones o, eventualmente, de replicación de máquinas virtuales,*
- *El cálculo y la memoria en el sitio de recuperación pueden reducirse para optimizar los costes si una situación degradada es aceptable para el negocio durante la ejecución del plan de recuperación ante desastres.*

### Replicación asíncrona de sus máquinas virtuales en entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en enviar, a nivel del hipervisor de origen, las operaciones de escritura al sitio standby a intervalos de tiempo regulares.

Tras una copia inicial en caliente de todo el almacenamiento activo en el sitio standby, solo se envían las escrituras a intervalos regulares al sitio en reposo.
Este intervalo depende del volumen de escritura (desde cada hora hasta cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. Por ello,
esta solución presenta los mismos inconvenientes, en particular la sensibilidad al volumen de escrituras de la máquina virtual,
ya que el proceso de instantánea es un mecanismo recursivo para el cierre de la instantánea.

El ejemplo típico de máquina que no soporta el mecanismo de replicación de las máquinas virtuales es un
servidor FTP que recibe los flujos en tiempo real de cámaras de vigilancia. __La máquina pasa todo el tiempo escribiendo y no será
capaz de cerrar una instantánea sin poner en pausa el sistema operativo durante un período de tiempo significativo
(varias decenas de minutos)__. Si el hipervisor no consigue cerrar la instantánea, es exactamente lo que hará,
sin posibilidad de intervenir salvo corrompiendo la máquina virtual.

| Objetivo        | Descripción                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de siniestro en el datacenter principal, la cantidad máxima de datos perdidos es la del último envío de las escrituras al sitio standby.            |
| RTO  < 15mn     | Operación de arranque de la máquina virtual detenida en el sitio remoto                                                                                   |

En caso de necesidad, o en caso de fallo de una máquina del sitio principal, se activa la máquina espejo del sitio standby.
La recuperación de la actividad requiere haber reservado en el sitio standby cálculo y RAM en standby. Es
necesario disponer del mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.


*__Nota__ : El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*

## Disponibilidad del servicio

| Elemento                    | Objetivo de disponibilidad, medido en un mes   |
|-----------------------------|------------------------------------------------|
| Cálculo                     | 99,99 %, ventanas de mantenimiento incluidas   |
| Almacenamiento en bloque    | 99,99 %, ventanas de mantenimiento incluidas   |

El objetivo de disponibilidad del cálculo presupone al menos dos hipervisores por clúster, con la funcionalidad __High Availability__ (HA) activada: reinicia automáticamente sus máquinas virtuales en otro hipervisor. En una zona de disponibilidad que solo contiene un hipervisor, el reinicio automático no es posible. Toda solicitud relacionada con la disponibilidad debe declararse mediante un ticket de incidente.

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilidad

| Operación                   | Entregable                     | Plazo         | Coste           |
|-----------------------------|--------------------------------|---------------|-----------------|
| Exportación de las VM       | Formatos VMware (OVF/VMDK)     | 30 días       | Sin coste       |
| Asistencia a la migración   | Soporte técnico                | Bajo demanda  | Bajo presupuesto |
| Purga segura                | Certificado de destrucción     | 7 días        | Incluido        |

## Precios

Los precios de la oferta IaaS VMware no se publican. Para conocer las condiciones de tarificación, póngase en contacto con el servicio comercial de Cloud Temple:
[contáctenos](https://www.cloud-temple.com/contactez-nous/).
