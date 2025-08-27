---
title: Conceptos
---

La oferta __IaaS (Infraestructura como Servicio)__ de Cloud Temple está diseñada para responder a los requisitos críticos de continuidad y recuperación de actividad, con un enfoque particular en sectores exigentes como la industria, el banco y la aseguradora. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en partners tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para el almacenamiento en bloques, y __DELL ECS__ para el almacenamiento de objetos.
- Red: __JUNIPER__.
- Virtualización: __Stack Opensource__, ofreciendo una base confiable y probada para gestionar sus entornos en la nube.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco y IBM, garantizando una compatibilidad amplia con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- __Recursos dedicados__: Las láminas de cálculo, volúmenes de almacenamiento y stacks de software (virtualización, copias de seguridad, firewalling, etc.) nunca se comparten entre los clientes.
- __Predicibilidad máxima__: Usted controla los tasas de virtualización, la presión en IOPS en el almacenamiento y disfruta de una facturación clara, por consumo mensual.

La plataforma está calificada __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Funcionalidades principales

- Recursos de cálculo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al proveedor Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Almacenamiento de datos en Francia y cumplimiento RGPD.                                                                                          |
| Seguridad           | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Almacenamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo las ventanas de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad o de recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| A petición          | Recursos disponibles a petición.                                                                                                          |

## Regiones y zonas de disponibilidad

El producto OpenIaaS está desplegado en una zona de disponibilidad.
Una zona de disponibilidad forma parte de una región.

Este tipo de despliegue permite elegir la ubicación de los clusters y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación de actividad (DRP) en caso de incidente.

## Clases de láminas de cálculo

Las láminas de cálculo disponibles para la oferta Bare Metal ofrecen un rango de rendimiento para satisfacer diversos requisitos:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 x 10 Gbps          | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 x 25 Gbps          | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 x 25 Gbps          | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 x 25 Gbps          | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 x 25 Gbps          | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 x 25 Gbps          | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 x 25 Gbps          | 2 x NVIDIA L40S 48 GB |

### Notas

- __(1)__ La cantidad de memoria es la disponible físicamente en las láminas y no puede modificarse.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física está compartida para el acceso de red y el acceso a almacenamiento en bloques, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan según las últimas tecnologías. Para el 1 de mayo de 2024, la oferta incluye GPU NVIDIA LOVELACE L40S.
- __(5)__ La alta disponibilidad en un clúster está disponible únicamente a partir de 2 nodos.

La disponibilidad de la infraestructura está garantizada al 99,9%, medida mensualmente, incluidos los períodos de mantenimiento. Cualquier solicitud relacionada con el SLA debe declararse a través de un ticket de incidente.

## Clases de almacenamiento en bloque

El almacenamiento en bloque distribuido, basado en __IBM Spectrum Virtualize__, ofrece un rango de rendimiento adecuado para diversos casos de uso:

| Referencia                        | IOPS/To                 | Uso principal                          |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Esencial__              | 500                     | Cargas de trabajo ligeras              |
| __FLASH - Estándar__              | 1500                    | Cargas de trabajo estándar             |
| __FLASH - Premium__               | 3000                    | Cargas intensivas                      |
| __FLASH - Enterprise__            | 7500                    | Cargas críticas                        |
| __FLASH - Ultra__                 | 15000                   | Cargas ultraintensivas                 |
| __ALMACENAMIENTO MASIVO - Archivo__ | No aplicable          | Almacenamiento económico para el archivo |

### Características

- __Tecnología__ : Flash NVMe con __RAID 6 distribuido__ para una mayor resiliencia.
- __Disponibilidad__ : 99,99%, medida mensualmente.
- __Restricciones__ : Sin limitación en lecturas o escrituras. Sin compresión o deduplicación automática, garantizando el uso completo de los volúmenes reservados.

## Redes

El producto OpenIaaS es compatible con [redes privadas](../network/private_network) y [acceso a internet](../network/internet).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual.

### Las redes de tipo VLAN

Las redes de tipo VLAN deben implementarse con un VLAN por tarjeta de red. Si desea utilizar varias redes, basta con crear varias tarjetas de red.

Una limitación existe en cuanto al número máximo de tarjetas que se pueden crear en una VM, que es de 7.

### El VLAN Trunk

En el caso de que deba propagar más de 7 VLANs, debe utilizar el VLAN Trunk.
El VLAN Trunk permite pasar todas sus VLANs a través de una sola tarjeta. La configuración de los ID de VLANs debe realizarse mediante interfaces virtuales de tipo VLAN desde el sistema operativo de la VM. Los ID de VLANs son los mismos que los que están presentes y visibles desde la consola.

## Copia de seguridad de máquinas virtuales

Cloud Temple propone __una arquitectura de copia de seguridad distribuida nativa y no intercambiable__, elemento obligatorio en el marco de la calificación SecNumCloud francesa.

Las copias de seguridad se almacenan en la solución [Stockage Objet qualifié SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo mayor del centro de datos de producción. Este enfoque permite restaurar sus datos en un centro de datos secundario, incluso en caso de incidente crítico como un incendio.

Esta solución completa incluye:

- La copia de seguridad remota en caliente de todos los discos
- Una flexibilidad de restauración que permite elegir el punto de recuperación y la ubicación

La infraestructura de copia de seguridad se basa en una tecnología open source con arquitectura sin agente, combinando facilidad de uso y automatización de los procesos. Esta solución optimiza el uso del espacio de almacenamiento manteniendo altas prestaciones.

Las velocidades de copia de seguridad y restauración dependen del ritmo de cambio en los entornos. La política de copia de seguridad es completamente configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

__Nota importante:__

*Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad* que utiliza los mecanismos de instantáneos del hipervisor. Se trata típicamente de máquinas cuyas cargas de escritura en disco son constantes. En estos casos, el hipervisor no puede finalizar el instantáneo, lo que requiere el congelamiento de la máquina virtual para finalizar la operación. Este congelamiento puede durar varias horas y no es interrumpible.

La solución recomendada consiste en excluir el disco afectado por escrituras permanentes y realizar la copia de seguridad de los datos mediante un método alternativo.

| Referencia                                    | Unidad | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Accès au service                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creación de una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, se debe presentar una solicitud al soporte, accesible a través del icono de balsa ubicado en la parte superior derecha de la interfaz.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que especifica:

- El nombre de su Organización
- Las coordenadas de un contacto (correo electrónico y teléfono) para finalizar la configuración
- El nombre del inquilino
- El nombre de la política de copia de seguridad
- Las características deseadas (x días, y semanas, z meses, ...)

## Máquinas virtuales

### Gestión de recursos vCPU

Las modificaciones de recursos vCPU se realizan en frío (máquina apagada). La plataforma admite hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas concluyentes realizadas en máquinas virtuales Linux equipadas con 128 vCPUs.

Es importante destacar que el soporte del sistema operativo invitado constituye un factor determinante al asignar recursos. Una asignación que excede los límites soportados por el sistema operativo puede provocar problemas significativos de rendimiento.

### Gestión de recursos de memoria

Las modificaciones de memoria también se realizan en frío. Los límites son los siguientes:

- 1,5 TiB con soporte para instantáneas de memoria
- 8 TiB sin soporte para instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente utilizable puede estar limitada por el sistema operativo invitado. Exceder los límites admitidos por el SO invitado puede provocar caídas de rendimiento.

### Gestión de discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluyendo los lectores CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para aumentar la capacidad de almacenamiento, es necesario crear un nuevo disco.

### Herramientas para las máquinas virtuales
Estas herramientas se utilizan para tener un funcionamiento óptimo de las máquinas virtuales. Cuando desee realizar una acción y una de estas herramientas sea necesaria, aparecerá un mensaje en la consola Cloud Temple.
Para instalar estas herramientas, puede consultar los sitios oficiales de Xen Server para obtener un procedimiento preciso según su SO.

#### Management Agent
El Management Agent es un componente instalado en cada máquina virtual. Permite al hipervisor gestionar mejor la máquina teniendo acceso a más información y permite realizar ciertas acciones de manera más limpia.

#### PV Drivers (Paravirtualization Drivers)
Los PV Drivers son controladores instalados en la máquina virtual para mejorar su rendimiento.
Sin estos controladores, la máquina funciona, pero más lentamente. Además, permiten ciertas acciones avanzadas.
Los PV Drivers están instalados nativamente en la mayoría de los núcleos Linux actuales.

#### Tools
Las Tools son un conjunto de componentes de software que mejoran la integración de la máquina virtual con la infraestructura de virtualización.

## Catálogos

El catálogo permite gestionar tres tipos de elementos esenciales:

- Imágenes de disco (ISO)
- Plantillas de configuración
- Plantillas preinstaladas de máquinas virtuales

En la vista detallada de una plantilla de máquina virtual, puede consultar información crucial como la ubicación, la cantidad de discos o el número de adaptadores de red.

Cuando la cantidad de discos virtuales se indica como 0, esto significa que se trata de una plantilla de configuración sin sistema operativo preinstalado, lo que le permite desplegar su propio entorno personalizado.

## Alta disponibilidad

La alta disponibilidad permite garantizar la continuidad del servicio de las máquinas virtuales (VM) en caso de fallo de un host físico dentro de un pool OpenIaaS.
Con la alta disponibilidad (HA), cada host en el pool envía regularmente señales de vida a sus pares a través del almacenamiento compartido (Block Storage Heartbeat). En caso de ausencia prolongada de respuesta, el host se considera fallido.

Un Block Storage designado como heartbeat significa que servirá como base para autenticar los hosts que ya no respondan.

Para que la alta disponibilidad esté correctamente configurada en un pool OpenIaaS, es indispensable disponer de **al menos dos hosts** conectados.

Cada VM debe estar configurada con un nivel de prioridad de reinicio en alta disponibilidad :

#### Deshabilitado
La alta disponibilidad no está configurada. En caso de fallo del host, la máquina virtual no se reiniciará.

#### Reinicio
En caso de fallo del anfitrión, la máquina virtual se reiniciará automáticamente tan pronto como haya recursos disponibles en el grupo. Las máquinas virtuales configuradas en modo "restart" se tratan con prioridad, antes que las configuradas en modo "best-effort".

#### Best-Effort  
En caso de fallo del anfitrión, la máquina virtual solo se reiniciará automáticamente si hay recursos disponibles después de procesar todas las máquinas virtuales configuradas en modo "restart". El modo "Best-effort" realiza solo un intento, por lo tanto, si los recursos son insuficientes, la máquina virtual no se reiniciará.