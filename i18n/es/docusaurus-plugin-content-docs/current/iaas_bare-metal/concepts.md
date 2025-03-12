---
title: Conceptos
---


La oferta **Bare Metal** de Cloud Temple propone servidores físicos dedicados asociados a un almacenamiento de tipo bloque distribuido.
Esta solución ofrece una personalización total para los clientes que desean gestionar sus propios entornos de software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

---

## Una infraestructura de hardware flexible

La oferta Bare Metal se basa en una arquitectura diseñada para satisfacer las necesidades de cargas de trabajo críticas.

### Componentes principales:
- **Servidores Cisco UCS**: Potentes y fiables, estas cuchillas de cálculo constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize**: Un almacenamiento de tipo bloque distribuido, que ofrece resiliencia y alto rendimiento.

### Arquitectura

El modelo de almacenamiento distribuido ofrece una separación entre el cálculo (servidores Bare Metal) y el almacenamiento (bloque distribuido), permitiendo:
- Flexibilidad para mapear volúmenes de almacenamiento en varios servidores Bare Metal según las necesidades.
- Personalización óptima de las configuraciones de cálculo y almacenamiento.
- Mayor resiliencia gracias al uso de **RAID 6 Distribuido**.

---

## Regiones y zonas de disponibilidad

El producto Bare Metal se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) es parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la localización de los servidores Bare Metal y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Clases de cuchillas de cálculo

Las cuchillas de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia           | RAM  __(1)__ | Frecuencia __(2)__                        | Número de núcleos / hilos  | Conectividad __(3)__  | GPU __(4)__          |
|----------------------|--------------|-------------------------------------------|---------------------------|-----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s         | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s         | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB |

### Notas:
- __(1)__ La cantidad de memoria es la que está físicamente disponible en las cuchillas y no se puede modificar.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física está compartida para el acceso a la red y al almacenamiento por bloques, gracias a una arquitectura convergente de Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan según las últimas tecnologías. Al 1 de mayo de 2024, la oferta incluye GPU NVIDIA LOVELACE L40S.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluidos los períodos de mantenimiento. Cualquier solicitud relacionada con el SLA debe ser declarada a través de un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento por bloques distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimientos adaptados a diversos casos de uso:

| Referencia                        | IOPS/TB                 | Uso principal                           |
|-----------------------------------|------------------------|----------------------------------------|
| **FLASH - Esencial**              | 500                    | Cargas de trabajo ligeras              |
| **FLASH - Standard**              | 1500                   | Cargas de trabajo estándar             |
| **FLASH - Premium**               | 3000                   | Cargas intensivas                      |
| **FLASH - Enterprise**            | 7500                   | Cargas críticas                        |
| **FLASH - Ultra**                 | 15000                  | Cargas ultra-intensivas                |
| **MASS STORAGE - Archivado**      | No aplicable           | Almacenamiento económico para archivado|

### Características:
- **Tecnología**: Flash NVMe con **RAID 6 Distribuido** para mayor resiliencia.
- **Disponibilidad**: 99.99%, medida mensualmente.
- **Restricciones**: Sin limitaciones en lecturas o escrituras. Sin compresión ni desduplicación automática, garantizando el uso completo de los volúmenes reservados.

---

## Acceso a la consola de Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, incluyendo:
- **Acceso KVM**: Una interfaz directa para gestionar los servidores, como si estuviera físicamente en el sitio.
- **Gestión de operaciones comunes**: Posibilidad de realizar acciones tales como la gestión de alimentaciones, reinicios y el **mapeo de ISO** para la instalación de un sistema operativo.

Este nivel de acceso asegura una flexibilidad máxima respetando las restricciones de seguridad.

---

## Conectividad de red de los servidores Bare Metal

Los servidores Bare Metal disponen de funcionalidades avanzadas de red.

### VLAN de nivel 2
Es posible configurar **VLAN de tipo nivel 2** en las interfaces de red de los servidores Bare Metal.
Los usuarios pueden:
- **Activar el etiquetado VLAN** para asociar uno o varios VLAN a una misma interfaz.
- **Propagar VLAN** directamente en las interfaces de red de los servidores.

### Agregación de interfaces de red
Cada servidor está equipado con **dos interfaces de red**. Estas interfaces pueden utilizarse de manera independiente o combinada para un mejor rendimiento y redundancia.

### Rendimiento de la red
El rendimiento de las interfaces de red está directamente relacionado con la clase de cuchilla elegida. Ejemplo:
- Las cuchillas **ECO** ofrecen una conectividad de 2 x 10 Gbit/s.
- Las cuchillas **STANDARD** y superiores disponen de una conectividad de 2 x 25 Gbit/s.

Estas opciones de red garantizan una conectividad fiable, flexible y adaptada a una variedad de cargas de trabajo profesionales.

---
