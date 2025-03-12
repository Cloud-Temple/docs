---
title: Concepts
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de actividad, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para tus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cómputo: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para el almacenamiento en bloques, y **DELL ECS** para el almacenamiento de objetos.
- Red: **JUNIPER**.
- Virtualización: **Stack Opensource**, ofreciendo una base confiable y probada para gestionar tus entornos cloud.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, garantizando una compatibilidad extendida con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un proveedor de Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- **Recursos dedicados**: Las cuchillas de cómputo, volúmenes de almacenamiento y pilas de software (virtualización, respaldo, firewalling, etc.) nunca son compartidos entre clientes.
- **Previsibilidad máxima**: Controlas las tasas de virtualización, la presión en IOPS sobre el almacenamiento y beneficias de una facturación clara, basada en el consumo mensual.

La plataforma está certificada **SecNumCloud** por el [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Funcionalidades principales

- Recursos de cómputo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Respaldo cruzado con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y el proveedor de Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y cumplimiento con RGPD.                                                                                      |
| Seguridad           | Plataforma altamente segura, certificada **SecNumCloud**, **HDS** (Hosting de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**.         |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99.99%, medida mensualmente, periodos de mantenimiento incluidos.                                 |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                    |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                      |
| On demand           | Recursos disponibles bajo demanda.                                                                                                           |

## Regiones y zonas de disponibilidad

El producto OpenIaaS está desplegado en una zona de disponibilidad.
Una zona de disponibilidad forma parte de una región.

Este tipo de despliegue permite elegir la ubicación de los clusters y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación de actividad (DRP) en caso de incidente.

---

## Clases de cuchillas de cómputo

Las cuchillas de cómputo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|--------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**               | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| **STANDARD**          | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**           | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**     | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**     | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**     | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**     | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notas:
- __(1)__ La cantidad de memoria es la disponible físicamente en las cuchillas y no puede modificarse.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física está compartida para el acceso a la red y el acceso al almacenamiento en bloques, gracias a una arquitectura convergente de Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan en función de las últimas tecnologías. Al 1 de mayo de 2024, la oferta incluye GPUs NVIDIA LOVELACE L40S.
- __(5)__ La HA en un clúster está disponible únicamente a partir de 3 nodos.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, periodos de mantenimiento incluidos. Cualquier solicitud relacionada con el SLA debe ser declarada a través de un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento en bloques distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimientos adecuados para diversos casos de uso:

| Referencia                        | IOPS/Tb                  | Uso principal                           |
|-----------------------------------|--------------------------|-----------------------------------------|
| **FLASH - Esencial**              | 500                      | Cargas de trabajo ligeras               |
| **FLASH - Estándar**              | 1500                     | Cargas de trabajo estándar              |
| **FLASH - Premium**               | 3000                     | Cargas intensivas                       |
| **FLASH - Enterprise**            | 7500                     | Cargas críticas                         |
| **FLASH - Ultra**                 | 15000                    | Cargas ultra-intensivas                 |
| **MASS STORAGE - Archivado**      | No aplicable             | Almacenamiento económico para archivado |

### Características:
- **Tecnología**: Flash NVMe con **Distributed RAID 6** para mayor resiliencia.
- **Disponibilidad**: 99.99%, medida mensualmente.
- **Restricciones**: Sin limitaciones en las lecturas o escrituras. Sin compresión o deduplicación automática, garantizando el uso completo de los volúmenes reservados.

---

## Las redes
El producto OpenIaaS es compatible con [las redes privadas](../network/private_network) y [el acceso a internet](../network/internet).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual.

### Las redes de tipo VLAN 
Las redes de tipo VLAN se propagan a razón de un VLAN por tarjeta de red. Si deseas usar varias redes, simplemente crea varias tarjetas de red.

Hay una limitación en el número máximo de tarjetas que se pueden crear en una VM, la cual es de 7.

### El VLAN TRUNK
En caso de necesitar propagar más de 7 VLANs, debes usar el VLAN Trunk.
El VLAN Trunk deja pasar todos tus VLANs en una sola tarjeta. La configuración de los ID de VLANs se realiza a través de interfaces virtuales tipo VLAN desde el SO de la VM. Los ID de VLANs son los mismos que están presentes y visibles desde la consola.

## Respaldo de máquinas virtuales

Cloud Temple propone **una arquitectura de respaldo distribuido nativa y no opcional**, elemento obligatorio en el marco de la certificación SecNumCloud francesa.

Los respaldos se almacenan en la solución [Almacenamiento de Objetos certificado SecNumCloud](../storage/oss), garantizando una protección óptima en caso de una falla mayor del centro de datos de producción. Este enfoque permite restaurar tus datos en un centro de datos secundario, incluso en caso de un incidente crítico como un incendio.

Esta solución completa incluye:
- El respaldo fuera del sitio caliente de todos los discos.
- Una flexibilidad de restauración que permite elegir el punto de recuperación y la ubicación.

La infraestructura de respaldo se basa en una tecnología opensource de arquitectura sin agente, combinando simplicidad de uso y automatización de procesos. Esta solución optimiza el uso del espacio de almacenamiento manteniendo un alto rendimiento.

Las velocidades de respaldo y restauración dependen de la tasa de cambio en los entornos. La política de respaldo es completamente configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

**Nota importante:**

*Algunas máquinas virtuales no son compatibles con esta tecnología de respaldo* que utiliza los mecanismos de instantáneas del hipervisor. Estas son típicamente las máquinas cuyas cargas de escritura en disco son constantes. En estos casos, el hipervisor no puede finalizar la instantánea, lo que requiere congelar la máquina virtual para completar la operación. Este congelamiento puede durar varias horas y no es interrumpible.

La solución recomendada consiste en excluir el disco objetivo de las escrituras permanentes y respaldar los datos mediante un método alternativo.

| Referencia                                   | Unidad | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| RESPALDO - Acceso al servicio                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creación de una política de respaldo

Para agregar una nueva política de respaldo, se debe enviar una solicitud al soporte, accesible a través del ícono de salvavidas ubicado en la parte superior derecha de la interfaz.

La creación de una nueva política de respaldo se realiza mediante **una solicitud de servicio** especificando:
- El nombre de su Organización
- Los datos de contacto (correo electrónico y teléfono) para finalizar la configuración
- El nombre del tenant
- El nombre de la política de respaldo
- Las características deseadas (x días, y semanas, z meses, ...)


## Las máquinas virtuales

### Gestión de recursos vCPU
Las modificaciones de recursos vCPU se realizan en frío (máquina apagada). La plataforma soporta hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas exitosas realizadas en VMs Linux equipadas con 128 vCPUs.

Es importante notar que el soporte del sistema operativo invitado constituye un factor determinante al momento de la asignación de recursos. Una asignación que exceda los límites soportados por el sistema operativo puede resultar en problemas de rendimiento significativos.

### Gestión de recursos de memoria
Las modificaciones de memoria también se realizan en frío. Los límites son los siguientes:
- 1,5 TiB con soporte de instantáneas de memoria
- 8 TiB sin soporte de instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente usable puede estar limitada por el sistema operativo invitado. Exceder los límites soportados por el OS invitado puede resultar en decrementos de rendimiento.

### Gestión de discos
- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluyendo los lectores de CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para extender la capacidad de almacenamiento, es necesario crear un nuevo disco.


## Catálogos

El catálogo permite gestionar tres tipos de elementos esenciales:
- Imágenes de disco (ISO)
- Plantillas de configuración
- Plantillas preinstaladas de máquinas virtuales

En la vista detallada de una plantilla de máquina virtual, puede consultar información crucial como la localización, el número de discos y el número de adaptadores de red.

Cuando el número de discos virtuales se indica como 0, esto significa que es una plantilla de configuración sin sistema operativo preinstalado, lo que le permite desplegar su propio entorno personalizado.