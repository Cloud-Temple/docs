---
title: Conceptos
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para responder a las necesidades críticas de continuidad y recuperación de actividad, con un enfoque especial en sectores exigentes como la industria, el banco y la seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques, y __DELL ECS__ para almacenamiento objeto.
- Red: __JUNIPER__.
- Virtualización: __Stack Opensource__, ofreciendo una base fiable y probada para gestionar sus entornos cloud.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco y IBM, garantizando una compatibilidad amplia con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada mediante APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple ofrece una infraestructura única:

- __Recursos dedicados__: Las láminas de cálculo, volúmenes de almacenamiento y stacks de software (virtualización, copias de seguridad, firewalling, etc.) nunca se comparten entre los clientes.
- __Máxima previsibilidad__: Usted controla los índices de virtualización, la presión en IOPS en el almacenamiento y se beneficia de una facturación clara, por consumo mensual.

La plataforma está calificada __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Funcionalidades principales

- Recursos de cálculo (CPU, RAM) dedicados y a petición.
- Almacenamiento a petición (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al proveedor Terraform.

## Ventajas

| Ventaja            | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital | Almacenamiento de datos en Francia y cumplimiento RGPD.                                                                                          |
| Seguridad            | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Almacenamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo horas de mantenimiento.                                        |
| Resiliencia          | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                        |
| A petición           | Recursos disponibles a petición.                                                                                                          |

## Regiones y zonas de disponibilidad

El producto OpenIaaS se despliega en una zona de disponibilidad.
Una zona de disponibilidad forma parte de una región.

Este tipo de despliegue permite elegir la ubicación de los clusters y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación de actividad (DRP) en caso de incidente.

---

## Clases de láminas de cálculo

Las láminas de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimiento para responder a diversos necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notas

- __(1)__ La cantidad de memoria es la físicamente disponible en las láminas y no puede ser modificada.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física es compartida para el acceso de red y el acceso de almacenamiento en bloques, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Los GPUs disponibles evolucionan según las últimas tecnologías. Para el 1 de mayo de 2024, la oferta incluye GPUs NVIDIA LOVELACE L40S.
- __(5)__ La alta disponibilidad en un cluster está disponible únicamente a partir de 2 nodos.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluyendo horas de mantenimiento. Cualquier solicitud relacionada con el SLA debe ser declarada mediante un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido, basado en __IBM Spectrum Virtualize__, ofrece una gama de rendimiento adaptada a diversos casos de uso:

| Referencia                         | IOPS/To                 | Uso principal                        |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essentiel__             | 500                     | Cargas de trabajo ligeras             |
| __FLASH - Standard__              | 1500                    | Cargas de trabajo estándar            |
| __FLASH - Premium__               | 3000                    | Cargas intensivas                     |
| __FLASH - Enterprise__            | 7500                    | Cargas críticas                       |
| __FLASH - Ultra__                 | 15000                   | Cargas ultra-intensivas               |
| __MASS STORAGE - Archivage__      | No aplicable          | Almacenamiento económico para el archivaje   |

### Características

- __Tecnología__ : Flash NVMe con __Distributed RAID 6__ para una mayor resiliencia.
- __Disponibilidad__ : 99.99%, medida mensualmente.
- __Restricciones__ : No hay limitación en lecturas o escrituras. No hay compresión o deduplicación automática, garantizando el uso total de los volúmenes reservados.

---

## Las redes

El producto OpenIaaS es compatible con [redes privadas](../network/private_network) y [acceso a internet](../network/internet).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual.

### Las redes de tipo VLAN

Las redes de tipo VLAN deben propagarse a razón de una VLAN por tarjeta de red. Si desea utilizar varias redes, basta con crear varias tarjetas de red.

Una limitación existe en el número máximo de tarjetas que se pueden crear en una VM, que es de 7.

### El VLAN TRUNK

En el caso de que deba propagar más de 7 VLANs, debe utilizar el VLAN Trunk.
El VLAN Trunk permite pasar todas sus VLANs a través de una sola tarjeta. La configuración de los ID de VLANs debe hacerse mediante interfaces virtuales de tipo VLAN desde el SO de la VM. Los ID de VLANs son los mismos que los que están presentes y visibles desde la consola.

## Copias de seguridad de máquinas virtuales

Cloud Temple propone __una arquitectura de copia de seguridad distribuida nativa y no interrumpible__, elemento obligatorio en el marco de la calificación SecNumCloud francesa.

Las copias de seguridad se almacenan en la solución [Almacenamiento Objetivo calificado SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo grave del centro de datos de producción. Esta aproximación permite restaurar sus datos en un centro de datos secundario, incluso en caso de incidente crítico como un incendio.

Esta solución completa incluye:

- La copia de seguridad remota en caliente de todos los discos
- Flexibilidad de restauración que permite elegir el punto de recuperación y la ubicación

La infraestructura de copia de seguridad se basa en una tecnología opensource con arquitectura sin agente, combinando simplicidad de uso y automatización de los procesos. Esta solución optimiza el uso del espacio de almacenamiento manteniendo altas prestaciones.

Las velocidades de copia de seguridad y restauración dependen del ritmo de cambio en los entornos. La política de copia de seguridad es completamente configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

__Nota importante:__
*Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad* que utiliza los mecanismos de instantáneas del hipervisor. Se trata típicamente de máquinas cuyas cargas de escritura en disco son constantes. En estos casos, el hipervisor no puede finalizar la instantánea, lo que requiere congelar la máquina virtual para completar la operación. Este congelamiento puede durar varias horas y no es interrumpible.

La solución recomendada consiste en excluir el disco afectado por escrituras permanentes y realizar la copia de seguridad de los datos mediante un método alternativo.

| Referencia                                    | Unidad | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| COPIA DE SEGURIDAD - Acceso al servicio                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creación de una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, se debe presentar una solicitud al soporte, accesible a través del icono de balsa ubicado en la parte superior derecha de la interfaz.

La creación de una nueva política de copia de seguridad se realiza mediante __un pedido de servicio__ que especifique:

- El nombre de su Organización
- Las coordenadas de un contacto (correo electrónico y teléfono) para finalizar la configuración
- El nombre del inquilino
- El nombre de la política de copia de seguridad
- Las características deseadas (x días, y semanas, z meses, ...)

## Las máquinas virtuales

### Gestión de recursos vCPU

Las modificaciones de recursos vCPU se realizan en frío (máquina apagada). La plataforma admite hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas concluyentes realizadas en VMs Linux equipadas con 128 vCPUs.

Es importante destacar que el soporte del sistema operativo invitado constituye un factor determinante al asignar recursos. Una asignación que exceda los límites soportados por el sistema operativo puede provocar problemas significativos de rendimiento.

### Gestión de recursos de memoria

Las modificaciones de memoria también se realizan en frío. Los límites son los siguientes:

- 1,5 TiB con soporte de instantáneas de memoria
- 8 TiB sin soporte de instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente utilizable puede estar limitada por el sistema operativo invitado. Exceder los límites soportados por el SO invitado puede provocar caídas de rendimiento.

### Gestión de discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluidos los lectores CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para ampliar la capacidad de almacenamiento, es necesario crear un nuevo disco.

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
- Plantillas de máquinas virtuales preinstaladas

En la vista detallada de una plantilla de máquina virtual, puede consultar información crucial como la ubicación, el número de discos o el número de adaptadores de red.

Cuando el número de discos virtuales se indica como 0, esto significa que se trata de una plantilla de configuración sin sistema operativo preinstalado, permitiéndole así implementar su propio entorno personalizado.

## Alta Disponibilidad

La alta disponibilidad permite asegurar la continuidad del servicio de las máquinas virtuales (VM) en caso de fallo de un host físico dentro de un pool OpenIaaS.
Con la alta disponibilidad (HA), cada host en el pool envía regularmente señales de vida a sus pares a través del almacenamiento compartido (Block Storage Heartbeat). En caso de ausencia prolongada de respuesta, el host se considera fallido.

Un Block Storage designado como heartbeat significa que servirá de base para autenticar los hosts que ya no respondan.

Para que la alta disponibilidad esté correctamente configurada en un pool OpenIaaS, es indispensable disponer de **al menos dos hosts** conectados.

Cada VM debe estar configurada con un nivel de prioridad de reinicio en alta disponibilidad:

#### Disabled
  La alta disponibilidad no está configurada. En caso de fallo del host, la máquina virtual no será reiniciada.

#### Restart
  En caso de fallo del host, la máquina virtual será reiniciada automáticamente tan pronto como los recursos estén disponibles en el pool. Las máquinas virtuales configuradas en modo "restart" son tratadas con prioridad, antes que las configuradas en modo "best-effort".

#### Best-Effort  
  En caso de fallo del host, la máquina virtual solo será reiniciada automáticamente si quedan recursos disponibles después del procesamiento de todas las máquinas virtuales configuradas en modo "restart". El modo "Best-effort" hace solo un intento, por lo que si los recursos son insuficientes, la máquina virtual no será reiniciada.
