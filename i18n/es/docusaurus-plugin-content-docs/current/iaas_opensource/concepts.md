---
title: Conceptos
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de negocio, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cómputo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques, y __DELL ECS__ para almacenamiento de objetos.
- Red: __JUNIPER__.
- Virtualización: __Stack Opensource__, que proporciona una base fiable y probada para gestionar sus entornos cloud.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, garantizando una amplia compatibilidad con los principales proveedores de software.

## Una infraestructura dedicada y automatizada

Aunque está completamente automatizada a través de APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple proporciona una infraestructura única:

- __Recursos dedicados__: Las cuchillas de cómputo, volúmenes de almacenamiento y stacks de software (virtualización, backup, firewalling, etc.) nunca se comparten entre clientes.
- __Máxima previsibilidad__: Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y se beneficia de una facturación clara, basada en el consumo mensual.

La plataforma está calificada como __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Características principales

- Recursos de cómputo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código mediante APIs y el proveedor Terraform.

## Beneficios

| Beneficio           | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y conformidad con el RGPD.                                                                                     |
| Seguridad           | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Alojamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__.       |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo ventanas de mantenimiento.                                 |
| Resiliencia         | Implementación de planes de continuidad o recuperación de negocio según las necesidades.                                                        |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Bajo demanda        | Recursos disponibles según necesidad.                                                                                                          |

## Regiones y zonas de disponibilidad

El producto OpenIaaS se despliega en una zona de disponibilidad.
Una zona de disponibilidad forma parte de una región.

Este tipo de despliegue permite elegir la ubicación de los clústeres y distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Clases de cuchillas de cómputo

Las cuchillas de cómputo disponibles para la oferta Bare Metal proporcionan una gama de rendimiento para satisfacer diversas necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notas

- __(1)__ La cantidad de memoria es la físicamente disponible en las cuchillas y no puede modificarse.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física se comparte para el acceso a la red y el acceso al almacenamiento en bloques, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Las GPU disponibles evolucionan según las últimas tecnologías. A partir del 1 de mayo de 2024, la oferta incluye GPU NVIDIA LOVELACE L40S.
- __(5)__ La HA en un clúster está disponible solo a partir de 3 nodos.

La disponibilidad de la infraestructura está garantizada al 99,9%, medida mensualmente, incluyendo ventanas de mantenimiento. Cualquier solicitud relacionada con el SLA debe declararse a través de un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento en bloques distribuido, basado en __IBM Spectrum Virtualize__, ofrece una gama de rendimiento adaptada a diversos casos de uso:

| Referencia                         | IOPS/TB                 | Uso principal                         |
|-----------------------------------|-------------------------|---------------------------------------|
| __FLASH - Esencial__              | 500                     | Cargas de trabajo ligeras             |
| __FLASH - Estándar__              | 1500                    | Cargas de trabajo estándar            |
| __FLASH - Premium__               | 3000                    | Cargas intensivas                     |
| __FLASH - Enterprise__            | 7500                    | Cargas críticas                       |
| __FLASH - Ultra__                 | 15000                   | Cargas ultra-intensivas               |
| __MASS STORAGE - Archivado__      | No aplicable            | Almacenamiento económico para archivado |

### Características

- __Tecnología__: Flash NVMe con __Distributed RAID 6__ para una mayor resiliencia.
- __Disponibilidad__: 99,99%, medida mensualmente.
- __Restricciones__: Sin limitación en lecturas o escrituras. Sin compresión o deduplicación automática, garantizando el uso completo de los volúmenes reservados.

---

## Redes

El producto OpenIaaS es compatible con [redes privadas](../network/private_network) y [acceso a internet](../network/internet).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual.

### Redes de tipo VLAN

Las redes de tipo VLAN se propagan a razón de una VLAN por tarjeta de red. Si desea utilizar múltiples redes, simplemente cree múltiples tarjetas de red.

Existe una limitación en el número máximo de tarjetas que se pueden crear en una VM, que es de 7.

### VLAN TRUNK

En caso de que necesite propagar más de 7 VLANs, debe utilizar el VLAN Trunk.
El VLAN Trunk permite que todas sus VLANs pasen a través de una sola tarjeta. La configuración de los ID de VLAN debe realizarse a través de interfaces virtuales de tipo VLAN desde el sistema operativo de la VM. Los ID de VLAN son los mismos que los presentes y visibles desde la consola.

## Copia de seguridad de máquinas virtuales

Cloud Temple ofrece __una arquitectura de copia de seguridad distribuida nativa y no desactivable__, un elemento obligatorio en el marco de la calificación francesa SecNumCloud.

Las copias de seguridad se almacenan en la [solución de Almacenamiento de Objetos calificada SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo importante del centro de datos de producción. Este enfoque le permite restaurar sus datos en un centro de datos secundario, incluso en caso de un incidente crítico como un incendio.

Esta solución completa incluye:

- Copia de seguridad externa en caliente de todos los discos
- Flexibilidad de restauración que le permite elegir el punto de recuperación y la ubicación

La infraestructura de copia de seguridad se basa en una tecnología opensource de arquitectura sin agente, combinando facilidad de uso y automatización de procesos. Esta solución optimiza el uso del espacio de almacenamiento manteniendo un alto rendimiento.

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambio en los entornos. La política de copia de seguridad es completamente configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

__Nota importante:__

*Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad* que utiliza los mecanismos de instantáneas del hipervisor. Se trata típicamente de máquinas cuyas cargas de escritura en disco son constantes. En estos casos, el hipervisor no puede finalizar la instantánea, lo que requiere congelar la máquina virtual para completar la operación. Esta congelación puede durar varias horas y no es interrumpible.

La solución recomendada consiste en excluir el disco objetivo de escrituras permanentes y hacer una copia de seguridad de los datos mediante un método alternativo.

| Referencia                                    | Unidad | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Acceso al servicio                  | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creación de una política de copia de seguridad

Para añadir una nueva política de copia de seguridad, debe enviarse una solicitud al soporte, accesible a través del icono de salvavidas situado en la parte superior derecha de la interfaz.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ especificando:

- El nombre de su Organización
- Los datos de contacto (correo electrónico y teléfono) para finalizar la configuración
- El nombre del tenant
- El nombre de la política de copia de seguridad
- Las características deseadas (x días, y semanas, z meses, ...)

## Máquinas virtuales

### Gestión de recursos vCPU

Las modificaciones de recursos vCPU se realizan en frío (máquina apagada). La plataforma soporta hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas concluyentes realizadas en VMs Linux equipadas con 128 vCPUs.

Es importante tener en cuenta que el soporte del sistema operativo invitado constituye un factor determinante al asignar recursos. Una asignación que supere los límites soportados por el sistema operativo puede provocar problemas de rendimiento significativos.

### Gestión de recursos de memoria

Las modificaciones de memoria también se realizan en frío. Los límites son los siguientes:

- 1,5 TiB con soporte para instantáneas de memoria
- 8 TiB sin soporte para instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente utilizable puede estar limitada por el sistema operativo invitado. Superar los límites soportados por el sistema operativo invitado puede provocar una degradación del rendimiento.

### Gestión de discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluyendo unidades CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para ampliar la capacidad de almacenamiento, es necesario crear un nuevo disco.

## Catálogos

El catálogo permite gestionar tres tipos de elementos esenciales:

- Imágenes de disco (ISO)
- Plantillas de configuración
- Plantillas preinstaladas de máquinas virtuales

En la vista detallada de una plantilla de máquina virtual, puede consultar información crucial como la ubicación, el número de discos o el número de adaptadores de red.

Cuando el número de discos virtuales se indica como 0, significa que se trata de una plantilla de configuración sin sistema operativo preinstalado, permitiéndole así desplegar su propio entorno personalizado.
