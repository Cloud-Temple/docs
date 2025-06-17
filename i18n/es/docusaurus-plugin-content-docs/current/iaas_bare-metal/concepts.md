---
title: Conceptos
---


La oferta **Bare Metal** de Cloud Temple ofrece servidores físicos dedicados asociados a un almacenamiento en bloque distribuido.
Esta solución ofrece una personalización total para los clientes que desean gestionar sus propios entornos de software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

---

## Una infraestructura física y flexible

La oferta Bare Metal se basa en una arquitectura diseñada para satisfacer las necesidades de cargas de trabajo críticas.

### Componentes principales

- **Servidores Cisco UCS** : Potentes y fiables, estos servidores de cálculo constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize** : Un almacenamiento en bloque distribuido, que ofrece resiliencia y altas prestaciones.

### Arquitectura

El modelo de almacenamiento distribuido ofrece una separación entre el cálculo (servidores Bare Metal) y el almacenamiento (bloque distribuido), permitiendo:

- Flexibilidad para asignar volúmenes de almacenamiento en varios servidores Bare Metal según las necesidades.
- Personalización óptima de las configuraciones de cálculo y almacenamiento.
- Mayor resiliencia gracias al uso de **RAID 6 distribuido**.

---

## Regiones y zonas de disponibilidad

El producto Bare Metal se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los servidores Bare Metal y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Clases de servidores de cálculo

Los servidores de cálculo disponibles para la oferta Bare Metal ofrecen una gama de prestaciones para satisfacer diversos requisitos:

| Referencia             | RAM  **(1)** | Frecuencia **(2)**                         | Número de núcleos / hilos | Conectividad **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notas

- **(1)** La cantidad de memoria es la disponible físicamente en los servidores y no puede modificarse.
- **(2)** Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- **(3)** La conectividad física está compartida para el acceso de red y el acceso de almacenamiento en bloque, gracias a una arquitectura convergente Cisco UCS.
- **(4)** Los GPUs disponibles evolucionan según las últimas tecnologías. Para el 1 de mayo de 2024, la oferta incluye GPUs NVIDIA LOVELACE L40S.

La disponibilidad de la infraestructura está garantizada al 99,9%, medida mensualmente, incluyendo las ventanas de mantenimiento. Cualquier solicitud relacionada con el SLA debe declararse mediante un ticket de incidente.

---

## Clases de almacenamiento en bloque

El almacenamiento en bloque distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de prestaciones adaptadas a diversos casos de uso:

| Referencia                         | IOPS/To                 | Uso principal                        |
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Esencial**             | 500                     | Cargas de trabajo ligeras             |
| **FLASH - Estándar**              | 1500                    | Cargas de trabajo estándar            |
| **FLASH - Premium**               | 3000                    | Cargas intensas                       |
| **FLASH - Enterprise**            | 7500                    | Cargas críticas                       |
| **FLASH - Ultra**                 | 15000                   | Cargas ultra-intensas                 |
| **MASS STORAGE - Archivo**      | No aplicable          | Almacenamiento económico para el archivo   |

### Características

- **Tecnología** : Flash NVMe con **RAID 6 distribuido** para una mayor resiliencia.
- **Disponibilidad** : 99,99%, medida mensualmente.
- **Restricciones** : Sin limitación en lecturas o escrituras. Sin compresión o deduplicación automática, garantizando el uso total de los volúmenes reservados.

---

## Acceso a la consola Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, incluyendo:

- **Acceso KVM** : Una interfaz directa para gestionar los servidores, como si estuviera físicamente en el lugar.
- **Gestión de operaciones habituales** : Posibilidad de realizar acciones como la gestión de alimentaciones, reinicios o el **asignación de ISO** para instalar un sistema operativo.

Este nivel de acceso asegura una flexibilidad máxima respetando las restricciones de seguridad.

---

## Conectividad de red de los servidores Bare Metal

Los servidores Bare Metal disponen de funcionalidades avanzadas de red.

### VLAN de nivel 2

Es posible configurar **VLAN de nivel 2** en las interfaces de red de los servidores Bare Metal.
Los usuarios pueden:

- **Activar el etiquetado VLAN** para asociar uno o varios VLAN a una misma interfaz.
- **Propagar las VLAN** directamente en las interfaces de red de los servidores.

### Agregación de interfaces de red

Cada servidor está equipado con **dos interfaces de red**. Estas interfaces pueden usarse de forma independiente o combinadas para obtener mejores prestaciones y redundancia:

### Prestaciones de red

Las prestaciones de las interfaces de red están directamente relacionadas con la clase de servidor elegida. Ejemplo:

- Los servidores **ECO** ofrecen una conectividad de 2 x 10 Gbit/s.
- Los servidores **STANDARD** y superiores disponen de una conectividad de 2 x 25 Gbit/s.

Estas opciones de red garantizan una conectividad fiable, flexible y adaptada a una variedad de cargas de trabajo profesionales.