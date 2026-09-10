---
title: Conceptos
---


La oferta **Bare Metal** de Cloud Temple ofrece servidores físicos dedicados asociados a un almacenamiento de bloques distribuido.
Esta solución ofrece una personalización total para los clientes que deseen gestionar sus propios entornos de software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

---

## Una infraestructura física y flexible

La oferta Bare Metal se basa en una arquitectura diseñada para satisfacer las necesidades de las cargas de trabajo críticas.

### Componentes principales

- **Servidores Cisco UCS** : De alto rendimiento y fiabilidad, estas cuchillas de cálculo constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize** : Un almacenamiento distribuido de tipo bloque, que ofrece resiliencia y alto rendimiento.

### Arquitectura

El modelo de almacenamiento distribuido ofrece una separación entre el cálculo (servidores Bare Metal) y el almacenamiento (bloque distribuido), lo que permite:

- Una flexibilidad para asignar los volúmenes de almacenamiento a varios servidores Bare Metal según las necesidades.
- Una personalización óptima de las configuraciones de cálculo y almacenamiento.
- Una mayor resiliencia gracias al uso de **Distributed RAID 6**.

---

## Regiones y zonas de disponibilidad

El producto Bare Metal se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los servidores Bare Metal y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Clases de blades de cálculo

Las unidades de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimiento para satisfacer diversas necesidades:

| Referencia             | RAM  **(1)** | Frecuencia **(2)**                         | Número de núcleos / hilos | Conectividad **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notas

- **(1)** La cantidad de memoria es la físicamente disponible en las laminas y no puede modificarse.
- **(2)** Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- **(3)** La conectividad física es compartida para el acceso a la red y el acceso a almacenamiento en bloque, gracias a una arquitectura convergente Cisco UCS.
- **(4)** Los GPU disponibles evolucionan según las últimas tecnologías. A 1 de mayo de 2024, el producto incluye GPU NVIDIA LOVELACE L40S.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluidas las ventanas de mantenimiento. Cualquier solicitud relacionada con el SLA debe declararse mediante un ticket de incidencia.

---

## Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimiento adaptada a diversos casos de uso:

| Referencia                         | IOPS/To        | Límite máximo de IOPS / Volumen | Ancho de banda máximo / Volumen | Uso principal                        |
|-----------------------------------|----------------|---------------------------------|---------------------------------|--------------------------------------|
| **FLASH - Esencial**               | 500            | 10 000 IOPS                     | 512 Mo/s                        | Cargas de trabajo ligeras              |
| **FLASH - Estándar**               | 1500           | 30 000 IOPS                     | 1024 Mo/s                       | Cargas de trabajo estándar             |
| **FLASH - Premium**                | 3000           | 30 000 IOPS                     | 1024 Mo/s                       | Cargas intensivas                      |
| **FLASH - Enterprise**             | 7500           | 30 000 IOPS                     | 1024 Mo/s                       | Cargas críticas                        |
| **FLASH - Ultra**                  | 15000          | 30 000 IOPS                     | 1024 Mo/s                       | Cargas ultra intensivas                |
| **ALMACENAMIENTO MASIVO - Archivado** | No aplicable | No garantizado                | No garantizado                  | Almacenamiento económico para archivado |

### Características
- **Rendimiento** : El rendimiento efectivo crece de forma lineal en función de la capacidad asignada (selon le ratio IOPS/To), **dentro del límite de hardware absoluto definido anteriormente**. (Par exemple, un volume de 10 To en classe Ultra sera physiquement limité à 30 000 IOPS et 1024 Mo/s).
- **Tecnología** : Flash NVMe con **RAID 6 distribuido** para una mayor resiliencia.
- **Disponibilidad** : 99.99%, medida mensualmente.
- **Restricciones** : Sin limitación en las lecturas o escrituras. Sin compresión ni deduplicación automatique, garantizando el uso integral de los volúmenes reservados.

### Seguridad y Cifrado del Almacenamiento por Bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento por bloques integra un cifrado hardware robusto.

- **Tipo de Cifrado** : Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo **XTS-AES 256**.
- **Conformidad** : Este método de cifrado cumple con la norma **FIPS 140-2**, garantizando un alto nivel de seguridad validado.
- **Funcionamiento** : El cifrado se aplica en el momento de la escritura de los datos en el soporte de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
Es importante destacar que este cifrado protege los datos almacenados en los discos. No está activo "on-the-fly", lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias está garantizada por canales de comunicación dedicados y seguros.
:::

---

## Acceso a la Consola Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, que incluye:

- **Acceso KVM**: Una interfaz directa para gestionar los servidores, como si estuviera físicamente en el sitio.
- **Gestión de operaciones comunes**: Posibilidad de realizar acciones como la gestión de fuentes de alimentación, reinicios o el **montaje de ISO** para la instalación de un sistema operativo.

Este nivel de acceso garantiza una flexibilidad máxima, respetando al mismo tiempo las restricciones de seguridad.

---

## Conectividad de red de los servidores Bare Metal

Los servidores Bare Metal cuentan con funcionalidades de red avanzadas.

### VLAN de nivel 2

Es posible configurar **VLAN de tipo nivel 2** en las interfaces de red de los servidores Bare Metal.
Los usuarios pueden:

- **Activar el etiquetado VLAN** para asociar uno o varios VLAN a una misma interfaz.
- **Propagar los VLAN** directamente en las interfaces de red de los servidores.

### Agregación de interfaces de red

Cada servidor está equipado con **dos interfaces de red**. Estas interfaces pueden utilizarse de forma independiente o combinadas para obtener un mejor rendimiento y redundancia :

### Rendimiento de red

El rendimiento de las interfaces de red está directamente relacionado con la clase de la tarjeta blade seleccionada. Ejemplo:

- Las tarjetas **ECO** ofrecen una conectividad de 2 x 10 Gbit/s.
- Las tarjetas **STANDARD** y superiores cuentan con una conectividad de 2 x 25 Gbit/s.

Estas opciones de red garantizan una conectividad fiable, flexible y adaptada a una variedad de cargas de trabajo profesionales.

---