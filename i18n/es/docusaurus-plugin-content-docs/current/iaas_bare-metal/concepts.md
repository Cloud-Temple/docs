---
title: Conceptos
---

La oferta **Bare Metal** de Cloud Temple proporciona servidores físicos dedicados asociados a un almacenamiento en bloque distribuido.  
Esta solución ofrece una personalización total para clientes que desean gestionar sus propios entornos software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

## Una infraestructura física y flexible

La oferta Bare Metal se basa en una arquitectura diseñada para satisfacer las necesidades de cargas de trabajo críticas.

### Componentes principales

- **Servidores Cisco UCS**: Potentes y fiables, estas láminas de cálculo constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize**: Un almacenamiento de bloques distribuido, que ofrece resiliencia y altas prestaciones.

### Arquitectura

El modelo de almacenamiento distribuido ofrece una separación entre el cálculo (servidores Bare Metal) y el almacenamiento (bloque distribuido), permitiendo:

- Flexibilidad para asignar volúmenes de almacenamiento a múltiples servidores Bare Metal según las necesidades.
- Personalización óptima de las configuraciones de cálculo y almacenamiento.
- Mayor resiliencia gracias al uso de **RAID 6 distribuido**.

## Regions and Availability Zones

The Bare Metal product is deployed within an availability zone.  
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment model allows you to select the location of your Bare Metal servers and distribute them across different availability zones (AZ).  
This provides better load distribution, maximizes redundancy, and simplifies the implementation of a disaster recovery plan (DRP) in the event of an incident.

## Clases de placas de cálculo

Las placas de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia            | RAM  **(1)** | Frecuencia **(2)**                        | Número de núcleos / hilos | Conectividad **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 × 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 × 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 × 25 Gbit/s        | 2 × NVIDIA L40S 48 GB |

### Notes

- **(1)** The amount of memory is the physically available on the blades and cannot be modified.
- **(2)** The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- **(3)** Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- **(4)** Available GPUs evolve according to the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

## Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimientos adecuada para diversos casos de uso:

| Referencia                        | IOPS/TB                 | Uso principal                           |
|-----------------------------------|-------------------------|-----------------------------------------|
| **FLASH - Esencial**              | 500                     | Cargas de trabajo ligeras               |
| **FLASH - Estándar**              | 1500                    | Cargas de trabajo estándar              |
| **FLASH - Premium**               | 3000                    | Cargas intensivas                       |
| **FLASH - Enterprise**            | 7500                    | Cargas críticas                         |
| **FLASH - Ultra**                 | 15000                   | Cargas ultraintensivas                  |
| **MASS STORAGE - Archivo**        | No aplicable            | Almacenamiento económico para el archivo|

### Características

- **Tecnología**: Flash NVMe con **RAID distribuido 6** para una mayor resiliencia.
- **Disponibilidad**: 99,99 %, medida mensualmente.
- **Restricciones**: Sin limitaciones en lecturas ni escrituras. Sin compresión ni deduplicación automáticas, garantizando el uso total de los volúmenes reservados.

### Seguridad y cifrado del almacenamiento en bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloques incorpora un cifrado hardware robusto.

-   **Tipo de cifrado**: Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo **XTS-AES 256**.
-   **Cumplimiento**: Este método de cifrado cumple con la norma **FIPS 140-2**, asegurando un alto nivel de seguridad validado.
-   **Funcionamiento**: El cifrado se aplica en el momento de escritura de los datos en el soporte de almacenamiento físico.

:::warning Punto de atención sobre la replicación
Es importante destacar que este cifrado protege los datos almacenados en los discos. No está activo "en tiempo real" (on-the-fly), lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de los transferencias se garantiza mediante canales de comunicación dedicados y seguros.
:::

---

## Acceso a la consola Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, incluyendo:

- **Acceso KVM**: Una interfaz directa para gestionar los servidores, como si estuviera físicamente en el sitio.
- **Gestión de operaciones comunes**: Posibilidad de realizar acciones como la gestión de alimentaciones, reinicios o incluso el **mapeo de ISO** para la instalación de un sistema operativo.

Este nivel de acceso garantiza una flexibilidad máxima respetando las restricciones de seguridad.

## Red network connectivity for Bare Metal servers

Bare Metal servers come with advanced networking features.

### VLAN de nivel 2

Es posible configurar **VLAN de tipo nivel 2** en las interfaces de red de los servidores Bare Metal.  
Los usuarios pueden:

- **Activar el tagging VLAN** para asociar uno o varios VLAN a una misma interfaz.
- **Propagar los VLAN** directamente en las interfaces de red de los servidores.

### Aggregation of network interfaces

Each server is equipped with **two network interfaces**. These interfaces can be used independently or combined to improve performance and redundancy:

### Rendimiento de red

El rendimiento de las interfaces de red está directamente relacionado con la clase de servidor seleccionada. Por ejemplo:

- Los servidores **ECO** ofrecen una conectividad de 2 x 10 Gbit/s.
- Los servidores **STANDARD** y superiores disponen de una conectividad de 2 x 25 Gbit/s.

Estas opciones de red garantizan una conectividad fiable, flexible y adaptada a una amplia variedad de cargas de trabajo profesionales.