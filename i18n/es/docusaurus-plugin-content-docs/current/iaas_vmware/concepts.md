---
title: Concepts
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para responder a las necesidades críticas de continuidad y recuperación de actividad, con un énfasis particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Computación: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para el almacenamiento de bloques.
- Red: **JUNIPER**.
- Virtualización: **VMware**, ofreciendo una base fiable y comprobada para gestionar sus entornos en la nube.
- Respaldo: **IBM Spectrum Protect Plus**, para la orquestación y almacenamiento de respaldos.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, garantizando una compatibilidad ampliada con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque enteramente automatizada gracias a APIs y un proveedor de Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- **Recursos dedicados**: Las cuchillas de computación, volúmenes de almacenamiento y stacks de software (virtualización, respaldo, firewalling, etc.) nunca se comparten entre los clientes.
- **Máxima predictibilidad**: Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y se beneficia de una facturación clara, a consumo mensual.

La plataforma está cualificada **SecNumCloud** por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de computación (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (disponibles varias clases).
- Recursos de red (Internet, redes privadas).
- Respaldos cruzados con retención configurable.
- Replicación asincrónica para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor de Terraform.

## Ventajas

| Ventaja              | Descripción                                                                                                                                    |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------- |
| Confianza digital    | Alojamiento de datos en Francia y conformidad con el RGPD.                                                                                     |
| Seguridad            | Plataforma altamente segura, cualificada **SecNumCloud**, **HDS** (Alojamiento de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**.       |
| Alta disponibilidad  | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, inclusas las ventanas de mantenimiento.                                |
| Resiliencia          | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                      |
| Automatización       | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                        |
| Bajo demanda         | Recursos disponibles bajo demanda.                                                                                                            |

## Computación

Las cuchillas proporcionadas por Cloud Temple son del tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Estas son completamente gestionadas por Cloud Temple (firmware, versión del OS, ...) a través de la consola Cloud Temple.

Varias categorías de cuchillas de computación están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenerización, ...). Estas presentan características y rendimientos diferentes para responder de la mejor manera a sus necesidades. El catálogo de cuchillas de computación evoluciona regularmente.

En el marco del uso con una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por cuchillas del mismo tipo (no es posible mezclar cuchillas de diferentes tipos en un mismo clúster).

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU **(4)**          | SKU para la oferta Vmware         |
| ---------------------- | ------------- | ----------------------------------------- | ------------------------- | --------------------- | --------------------- | ------------------------------- |
| Cuchilla ECO v3        | 384 Go        | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s         |                       | csp:fr1:iaas:vmware:eco:v3      |
| Cuchilla STANDARD v3   | 384 Go        | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:standard:v3 |
| Cuchilla ADVANCE v3    | 768 Go        | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:advance:v3  |
| Cuchilla PERFORMANCE 1 v3 | 384 Go    | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf1:v3    |
| Cuchilla PERFORMANCE 2 v3 | 768 Go    | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf2:v3    |
| Cuchilla PERFORMANCE 3 v3 | 1536 Go   | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf3:v3    |
| Cuchilla PERFORMANCE 4 v3 | 512 Go    | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3    |

__Observaciones__ :

- __(1)__ La cantidad de memoria entregada es la que está físicamente disponible en las cuchillas. No es posible cambiar la cantidad física de memoria de una cuchilla.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores se configuran para un rendimiento máximo a nivel del BIOS.

- __(3)__ La conectividad física se comparte para el acceso a la red y el acceso al almacenamiento de bloques, la plataforma de CISCO está convergida.

- __(4)__ La oferta de GPU disponible realmente evoluciona constantemente. Al 1° de mayo de 2024, la oferta se basa en los GPU NVIDIA LOVELACE L40S. Por defecto, la cuchilla PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Contacte con el soporte para más precisión si es necesario.

La disponibilidad de la oferta de computación es del 99,99%, calculada mensualmente, ventanas de mantenimiento incluidas. La elegibilidad en caso de incumplimiento del SLA está sujeta a
la creación de un ticket de incidente. Además, debe poseer al menos dos anfitriones por clúster y activar la funcionalidad de __Alta Disponibilidad__ (HA).
Esta funcionalidad permite a su arquitectura reiniciar automáticamente sus máquinas virtuales en el segundo hipervisor.
En el supuesto de que una zona de disponibilidad contenga solo un hipervisor, el reinicio automático no es posible.

## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y de alto rendimiento para satisfacer las necesidades de conectividad y aislamiento de red de los clientes.

### VLANs de nivel 2

Las VLANs disponibles en la oferta IaaS son de tipo **nivel 2**, ofreciendo un aislamiento completo de la red y una configuración adaptable según las necesidades.

#### Principales conceptos :

- **Compartición entre clústeres y zonas de disponibilidad (AZ)** :
  - Las VLANs pueden ser compartidas entre las diferentes AZ y los diferentes clústeres pertenecientes al mismo tenant.
- **Propagación inter-tenants** :
  - Las VLANs pueden ser propagadas entre varios tenants pertenecientes a una misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de la red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo :

- **Latencia intra-AZ** : Inferior a **3 ms**.
- **Latencia inter-AZ** : Inferior a **5 ms**.

---

### Puntos clave

1. **Flexibilidad** : Las VLANs pueden ser configuradas para adaptarse a entornos multi-clúster y multi-tenant.
2. **Alto rendimiento** : Una latencia mínima asegura una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. **Aislamiento y seguridad** : Las VLANs de nivel 2 ofrecen una estricta segmentación de la red para proteger los datos y los flujos.

---

## Almacenamiento de bloques

Cloud Temple propone varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite proporcionar el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran cantidad de memoria caché integrada en los controladores y la capacidad de distribuir todas las IOPS de un servidor en varios SAN.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo bloque entre las zonas de disponibilidad o para facilitar las intervenciones en las cabinas de almacenamiento.

El almacenamiento es principalmente de tipo FLASH NVME dedicado a las cargas de trabajo profesionales.
Los discos son utilizados por las cabinas de almacenamiento en [__'Distribuido Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivo
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

- *La disponibilidad del almacenamiento es del 99.99% medida mensualmente, incluidas las ventanas de mantenimiento,*
- *No hay restricción ni cuota sobre la lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500Gio,*
- *Al usar un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en las dos zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como la compresión o la deduplicación: cuando reservas 10Tio de almacenamiento, tienes físicamente 10Tio útiles de almacenamiento implementados en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el marco de la oferta de cálculo vmware

En el contexto del uso de almacenamiento en modo bloque como datastore en la oferta de cálculo VMware de Cloud Temple, **debe tener en cuenta varias consideraciones importantes**:

1. **Archivo de swap (.VSWP) al iniciar las máquinas virtuales**: Cuando se inicia una máquina virtual, se crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 Tio de almacenamiento en bloque y desea iniciar 10 máquinas virtuales con 64 Gio de memoria cada una, se necesitarán 640 Gio de espacio en disco. Sin este espacio, el inicio de las máquinas se verá limitado por la capacidad disponible para crear los archivos de swap.

2. **Espacio libre para los snapshots de respaldo**: El servicio de respaldo utiliza snapshots (instantáneas). Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de una instantánea al hacer una copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. En general, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. **Gestión de discos dinámicos**: Tenga cuidado con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede causar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor de los casos. Es crucial monitorear cuidadosamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para asegurar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese de disponer siempre del espacio necesario para los archivos de swap, los snapshots y el crecimiento de los discos dinámicos.

## Almacenamiento en modo backup

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales es autoaprovisionado por la plataforma dentro del límite de la cuota contratada.

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Replicación de almacenamiento en modo bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en
situación de continuidad operativa con mecanismos aplicativos y la replicación de máquinas virtuales
no es adecuada, Cloud Temple ofrece __mecanismos de replicación de almacenamiento en modo bloque entre zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican a las LUNs de almacenamiento de sus entornos, complementando las copias de seguridad.
La elección de utilizar un mecanismo de replicación en un entorno __depende de numerosos factores como su criticidad, la pérdida de datos tolerada o el rendimiento deseado__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasivo:

- La replicación __asíncrona__ (o __'Global Mirror'__) : *La función __'Global Mirror'__ proporciona un proceso de copia asíncrona.
Cuando un host escribe en el volumen primario, se recibe la confirmación de la finalización de la E/S antes de que se termine la operación
de escritura para la copia en el volumen secundario. Si se inicia una operación de conmutación por error, la aplicación
debe recuperar y aplicar todas las actualizaciones que no se han confirmado en el volumen secundario.
Si las operaciones de E/S en el volumen primario se pausan durante un breve período,
el volumen secundario puede convertirse en una correspondencia exacta del volumen primario. Esta función es comparable a un proceso
de copia de seguridad continua en el que siempre faltan las últimas actualizaciones.
Cuando se utiliza Global Mirror con fines de recuperación ante desastres, debe considerar cómo desea gestionar estas actualizaciones faltantes.*

- La replicación __sincrónica__ (o __'Metro Mirror'__) : *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia sincrónica
de los datos de un volumen primario en un volumen secundario. Con las copias sincrónicas, las aplicaciones host escriben en el volumen primario, pero no reciben confirmación
de que la operación de escritura ha terminado hasta que los datos se escriben en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando
la operación de copia haya finalizado. Después de que la operación de copia inicial haya terminado, la función Metro Mirror
mantiene permanentemente una copia completamente sincrónica de los datos de origen en el sitio de destino. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio llamado "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación ante desastres se activa en caso de desastre o como parte de una solicitud de prueba del DRP.
El sitio pasivo luego toma el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación cortos y no es aceptable
o adecuado utilizar mecanismos como replicaciones aplicativas/replicación de máquinas virtuales,
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad en la misma región.

Esta oferta permite obtener un __RPO de 15Mn__ y un __RTO inferior a 4H__. Permite reiniciar mucho más rápidamente que
la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de
las dos zonas de disponibilidad trabajan en conjunto para realizar operaciones de escritura en ambos sitios.
El sitio maestro no espera la confirmación de escritura del sitio esclavo.

Las etapas de una operación de escritura son las siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. el controlador SAN local no espera la confirmación del SAN remoto y realiza la escritura localmente,
4. Da __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__: Se requiere una solicitud de servicio.

| SLA       | Description                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos corresponde como máximo a los últimos 15 minutos de escritura. |
| RTO < 4H  | En caso de desastre en el centro de datos principal, la recuperación operativa está garantizada en menos de 4 horas según la complejidad de los entornos.  |

En caso de activación del DRP, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere haber reservado en el sitio 'standby' los recursos de cálculo y la RAM para reanudar la actividad en caso de desastre.

El uso de esta tecnología también requiere el doble de espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.
L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Seules les classes de stockage 500 Iops/To, 1500 Iops/To et 3000 Iops/TO sont compatibles.__

| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *L'offre étant asynchrone, il est possible lors d'un sinistre que certaines opérations disques n'est pas été écrite sur le site distant. Il peut donc y avoir un risque sur la cohérence des données, a mitigé dans l'analyse de risque du plan de reprise d'activité.*
- *La réplication du stockage en mode bloc se fait de façon masquée pour les machines virtuelles et les applications,*
- *À ce titre, il est important de privilégier les scénarios de réplication applicative ou éventuellement de réplication de machine virtuelle,*
- *Le calcul et la mémoire, sur le site de reprise, peuvent être diminués pour optimiser les coûts si une situation dégradée est acceptable pour le métier lors de l'action du plan de reprise d'activité.*

## Virtualisation VMware

L'offre de virtualisation VMware Cloud Temple qualifiée SecNumCloud est basée sur la technologie __VMware Vsphere__.

La plateforme est managées par Cloud Temple de façon automatique (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Elle est pilotable via l'interface graphique de la console Shiva ou via les APIs associées.

*__Remarque__* : *Pour des raisons de sécurité liées à la qualification SecNumCloud,
__il n'est pas possible pour le commanditaire d'accéder directement à la plateforme de virtualisation VMware__ (aucun accès direct au vCenter notamment).
En effet, la qualification SecNumCloud impose __une totale ségrégation__ entre les interfaces de pilotage des actifs techniques et l'interface du commanditaire (la console Shiva).*

- Les produits misent en oeuvre sont VMware ESXi, VMware Vcenter et VMware Replication.
- *Le réseau de l'offre de virtualisation n'utilise pas la technologie VMware NSX, mais est piloté matériellement par la technologie Juniper et le protocole VPLS.*
- *Le stockage n'utilise pas la technologie VMWare vSan, mais uniquement des SANs IBM en fiber channel 32G.*
- *Aucune forme d'optimisation cachée n'est mise en œuvre (compression, deduplication, ...).*

### Définition d'un cluster de lame de calcul ('Cpool')

Le __'Cpool'__ est un regroupement d'hyperviseur VMware ESXi, également connu sous le nom de *'cluster ESX'*.

Les hôtes présents dans un __'Cpool'__ appartiennent tous __au même tenant et à la même zone de disponibilité__ (AZ). Ils doivent nécessairement avoir la même classe :
__il n'est pas possible de mixer des modèles différents de lame de calcul au sein d'un même cluster__.

Toutes les lames de calcul étant livrées avec le maximum physique de mémoire, une limitation d'utilisation de la RAM est appliquée logiciellement au niveau du cluster pour s'assurer qu'elle correspond à la RAM facturée.

Par défaut, chaque lame dispose de 128 Go de mémoire activée au sein du __'Cpool'__.

Un __'Cpool'__ peut contenir au maximum 32 hyperviseurs. Au-delà de cette limite, il sera nécessaire de créer un deuxième cluster.

Le stockage peut être partagé entre les __'Cpool'__.

### Allocation Mémoire pour un 'Cpool'

La réservation de la RAM est configurable par cluster. Vous pouvez réduire ou augmenter la quantité de la RAM pour qu'elle corresponde à vos besoins à l'échelle du cluster.

__Attention à ne pas dépasser une moyenne de 85 % de consommation mémoire par lame de calcul__.
En effet, la technologie VMware utilisera une méthode d'optimisation de type compression qui peut impacter fortement les performances de vos charges de travail et complexifier le diagnostic.
De même, une trop forte pression mémoire sur vos lames de calcul forcera l'hyperviseur à décharger une partie de sa mémoire sur disque pour répondre aux besoins des machines virtuelles.

Ce cas, appelé __'Ballooning'__ impacte très fortement l'ensemble des performances des machines virtuelles situées sur le stockage (datastore) concerné.
__Le diagnostic est compliqué dans ce contexte__, car votre métrologie constatera des impacts au niveau CPU et non de la mémoire ou du stockage.
Gardez aussi à l'esprit que la première chose que fait l'hyperviseur au démarrage d'une machine virtuelle est de créer __un fichier de swap mémoire__ (.vswap) sur le disque, de la taille de la mémoire de la machine virtuelle concernée. Il vous faut __en tenir compte sur le dimensionnement de votre stockage__.

Chaque lame de calcul est livré avec 128Go de mémoire activée logiciellement au niveau du __'Cpool'__ mais dispose physiquement de la totalité de la mémoire allouable.

Par exemple, pour un cluster de trois hosts de type ```vmware:standard:v2```, la réservation de la RAM à l'activation du __'Cpool'_ sera de 3 x 128Go = 384 Go de RAM.
Vous pourrez l'étendre au maximum à 3 x 384Go = 1152Go de mémoire.

    Minimum de mémoire d'un 'Cpool' = nombre de host X 128Go de mémoire
    Maximum de mémoire d'un 'Cpool' = nombre de host X la quantitée de mémoire physique de la lame de calcul

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple met à votre disposition un catalogue de `Templates` régulièrement enrichi et mis à jour par nos équipes.
Il comprend à ce jour plusieurs dizaines de `Templates` et images à monter sur vos machines virtuelles.

### Mise a jour des Hyperviseurs
Cloud Temple fournit régulièrement des builds pour les hyperviseurs afin d’assurer l’application des correctifs de sécurité. 
Cependant, la mise à jour des hyperviseurs reste sous votre responsabilité, car nous n’avons pas de visibilité sur vos contraintes métier.

Le processus de mise à jour est entièrement automatisé. Pour garantir une continuité de service, un minimum de deux hyperviseurs est requis par cluster pendant la mise à jour. Assurez-vous de disposer des permissions nécessaires pour effectuer ces actions.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-affinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden ser utilizadas para gestionar la utilización de recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas son frecuentemente utilizadas para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puedes configurar a través de la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios 
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que las máquinas críticas se vean todas afectadas en caso de falla de un único servidor.
Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad, 
como en entornos de producción donde la tolerancia a fallos es una prioridad. 
Por ejemplo, no desearía que sus dos Active Directory estén en el mismo hipervisor.

Al crear una regla, definirá el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Statut'__) y las máquinas afectadas de su clúster de hipervisores.

*Nota: las reglas de afinidad / anti-afinidad propuestas en la consola son reglas que conciernen a las máquinas virtuales entre sí (no hay reglas entre hipervisores y máquinas virtuales).*

### Réplication asynchrone de vos machines virtuelles en environnement VMware (título)

La réplication asynchrone de vos machines virtuelles est un mécanisme qui consiste à pousser au niveau de l'hyperviseur source les opérations d'écriture sur le site standby à intervalle de temps régulier.

Après une copie initiale à chaud de l'ensemble du stockage actif sur le site standby, seules les écritures sont poussées à intervalles réguliers sur le site en sommeil.
Cet intervalle dépend du volume d'écriture (de toutes les heures à toutes les 24 heures).

La réplication des machines virtuelles s'appuie sur le mécanisme de clichés instantanés de l'hyperviseur. À ce titre, 
cette solution a les mêmes inconvénients, en particulier la sensibilité au volume d'écritures de la machine virtuelle,
le processus de cliché instantané étant un mécanisme récursif pour la clôture du cliché instantané.

L'exemple typique de machine qui ne supporte pas le mécanisme de réplication des machines virtuelles est un
serveur FTP qui reçoit les flux temps réels de caméras de surveillance. __La machine passe son temps à écrire et ne sera 
pas capable de clôturer un cliché instantané sans mise en pause du système d'exploitation pendant une période de temps significative
(plusieurs dizaines de minutes)__. Si l'hyperviseur n'arrive pas à clôturer le cliché instantané, c'est exactement ce qu'il fera,
sans possibilité d'intervenir sauf à corrompre la machine virtuelle.

| SLA             | Descripción                                                                                                                                            |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | En caso de desastre en el datacenter principal, la cantidad máxima de datos perdidos es la última captura realizada en el sitio de espera.              |
| RTO < 15mn      | Operación de arranque de la máquina virtual detenida en el sitio remoto                                                                                |


En caso de necesidad, o en caso de falla en una máquina del sitio principal, la máquina espejo en el sitio standby es activada. 
La recuperación de actividad requiere haber reservado en el sitio standby tanto cálculo como RAM en espera. Es necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.


| Referencia                         | Unidad | SKU                                                |
|------------------------------------|--------|----------------------------------------------------|
| PRA - Replicación VMware inter-AZ  | 1 vm   | csp:(region):iaas:vmware:licence:replication:v1    |

*__Nota__: El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*













## Respaldo de máquinas virtuales
Cloud Temple ofrece __una arquitectura de respaldo cruzado nativa y no desactivable__ (es obligatorio en la calificación secnumcloud francesa).

Los respaldos se almacenan en una zona de disponibilidad y en un datacenter físico diferente al que alberga la máquina virtual.

Esto permite protegerse en caso de un fallo mayor en el datacenter de producción y restaurar en un datacenter secundario (un incendio, por ejemplo).

Esta solución incluye:

- El respaldo en caliente offsite de todos los discos,
- La presentación y arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga en caliente sobre los SAN de producción,
- La restauración parcial de archivos desde el respaldo,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de respaldo se basa en la solución *IBM Spectrum Protect Plus*, una solución de arquitectura sin agente, sencilla de usar y que permite la automatización de los procesos de respaldo además de una optimización del espacio de almacenamiento masivo.

Las velocidades de respaldo y restauración dependen de la tasa de cambio en los entornos.
La política de respaldo es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de respaldo__ que utiliza mecanismos de instantáneas del hipervisor.
Estas son típicamente máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar la instantánea, lo que
obliga a congelar la máquina virtual para poder completar la operación de cierre. Este congelamiento puede durar varias horas y no se puede detener.*

*La solución entonces es excluir el disco que es objetivo de escrituras permanentes y respaldar los datos por otro método.*

| Referencia                                                | Unidad | SKU                                        |
| --------------------------------------------------------- | ------ | ------------------------------------------ |
| RESPALDO - Acceso al servicio IBM Spectrum Protect Plus   | 1 VM   | csp:(region):iaas:backup:vm:v1             |


#### Crear una política de respaldo
Para añadir una nueva política de respaldo, se debe hacer una solicitud al soporte. El soporte es accesible desde el ícono de boya en la parte superior derecha de la ventana.

La creación de una nueva política de respaldo se realiza por __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de respaldo
    Las características (x días, y semanas, z meses, ...)