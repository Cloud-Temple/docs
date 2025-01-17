---
title: Concepts
---


La oferta **Bare Metal** de Cloud Temple ofrece servidores físicos dedicados asociados con almacenamiento de tipo bloque distribuido. 
Esta solución ofrece una personalización total para los clientes que desean gestionar sus propios entornos de software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

---

## Una infraestructura flexible y de hardware

La oferta Bare Metal se basa en una arquitectura diseñada para responder a las necesidades de las cargas de trabajo críticas. 

### Componentes principales:
- **Servidores Cisco UCS**: Potentes y fiables, estas cuchillas de computación constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize**: Un almacenamiento de tipo bloque distribuido, que ofrece resiliencia y alto rendimiento.

### Arquitectura

El modelo de almacenamiento distribuido ofrece una separación entre la computación (servidores Bare Metal) y el almacenamiento (bloque distribuido), permitiendo:
- Una flexibilidad para mapear los volúmenes de almacenamiento en varios servidores Bare Metal según las necesidades.
- Una personalización óptima de las configuraciones de computación y almacenamiento.
- Una mayor resiliencia gracias al uso de **RAID Distribuido 6**.

---

## Clases de cuchillas de computación

Las cuchillas de computación disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|--------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notas :
- __(1)__ La cantidad de memoria es la físicamente disponible en las cuchillas y no puede ser modificada.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física se comparte para el acceso a la red y al almacenamiento en bloque, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan en función de las últimas tecnologías. A 1 de mayo de 2024, la oferta incluye GPU NVIDIA LOVELACE L40S.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluyendo períodos de mantenimiento. Cualquier solicitud relacionada con el SLA debe ser declarada a través de un ticket incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento de bloque distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimientos adecuados para diversos casos de uso:

| Referencia                        | IOPS/To                 | Uso principal                           | 
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Esencial**              | 500                     | Cargas de trabajo ligeras              |
| **FLASH - Estándar**              | 1500                    | Cargas de trabajo estándar             |
| **FLASH - Premium**               | 3000                    | Cargas intensivas                      |
| **FLASH - Enterprise**            | 7500                    | Cargas críticas                        |
| **FLASH - Ultra**                 | 15000                   | Cargas ultra-intensivas                |
| **MASS STORAGE - Archivado**      | No aplicable            | Almacenamiento económico para archivado|

### Características :
- **Tecnología** : Flash NVMe con **RAID Distribuido 6** para una mayor resiliencia.
- **Disponibilidad** : 99.99%, medida mensualmente.
- **Restricciones** : Sin limitación en lecturas o escrituras. Sin compresión ni deduplicación automática, garantizando el uso íntegro de los volúmenes reservados.

---

## Acceso Consola Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, incluyendo:
- **Acceso KVM** : Una interfaz directa para gestionar los servidores, como si estuviera físicamente en el sitio.
- **Gestión de operaciones comunes** : Posibilidad de realizar acciones como la gestión de alimentaciones, reinicios o incluso el **mapping de ISO** para la instalación de un sistema operativo.

Este nivel de acceso asegura una flexibilidad máxima respetando las restricciones de seguridad.

---

## Conectividad de red de los servidores Bare Metal

Los servidores Bare Metal disponen de funcionalidades de red avanzadas.

### VLAN de nivel 2
Es posible configurar **VLAN de tipo nivel 2** en las interfaces de red de los servidores Bare Metal. 
Los usuarios pueden:
- **Activar el etiquetado VLAN** para asociar uno o varios VLAN a una misma interfaz.
- **Propagar los VLAN** directamente en las interfaces de red de los servidores.

### Agregación de interfaces de red
Cada servidor está equipado con **dos interfaces de red**. Estas interfaces pueden ser utilizadas de manera independiente o combinadas para un mejor rendimiento y redundancia:

### Rendimiento de red
El rendimiento de las interfaces de red está directamente relacionado con la clase de cuchilla elegida. Ejemplo:
- Las cuchillas **ECO** ofrecen una conectividad de 2 x 10 Gbit/s.
- Las cuchillas **STANDARD** y superiores disponen de una conectividad de 2 x 25 Gbit/s.

Estas opciones de red garantizan una conectividad fiable, flexible y adecuada para una variedad de cargas de trabajo profesionales.

---