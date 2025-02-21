---
title: Concepts
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de actividades, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cómputo: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para almacenamiento de bloques, y **DELL ECS** para almacenamiento de objetos.
- Red: **JUNIPER**.
- Virtualización: **Stack Opensource**, ofreciendo una base confiable y probada para gestionar sus entornos cloud.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, garantizando una compatibilidad extendida con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un provider Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- **Recursos dedicados**: Las láminas de cómputo, volúmenes de almacenamiento y stacks de software (virtualización, respaldo, firewalling, etc.) nunca se comparten entre los clientes.
- **Máxima predictibilidad**: Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y disfruta de una facturación clara, al consumo mensual.

La plataforma está calificada **SecNumCloud** por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cómputo (CPU, RAM) dedicados y a demanda.
- Almacenamiento a demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Respaldos cruzados con retención configurable.
- Replicación asincrónica para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Console Shiva](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al provider Terraform.

## Ventajas

| Ventaja            | Descripción                                                                                                  |
|---------------------|-------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y conformidad con RGPD.                                                     |
| Seguridad           | Plataforma altamente segura, calificada **SecNumCloud**, **HDS** (Hospedaje de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**. |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo períodos de mantenimiento. |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                   |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.      |
| On demand           | Recursos disponibles a demanda.                                                                            |

## Clases de láminas de cómputo

Las láminas de cómputo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                          | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|------------------------|--------------|---------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**                | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)    | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| **STANDARD**           | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)    | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**            | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)      | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**      | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)   | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**      | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)      | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**      | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)      | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**      | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)    | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notas :
- __(1)__ La cantidad de memoria es la físicamente disponible en las láminas y no puede ser modificada.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física es compartida para el acceso de red y el acceso a almacenamiento de bloques, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan en función de las últimas tecnologías. Al 1 de mayo de 2024, la oferta incluye GPU NVIDIA LOVELACE L40S.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluyendo períodos de mantenimiento. Cualquier solicitud relacionada con el SLA debe ser declarada a través de un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento de bloques distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimientos adaptados a diversos casos de uso:

| Referencia                         | IOPS/TB                    | Uso principal                          |
|------------------------------------|----------------------------|----------------------------------------|
| **FLASH - Esencial**               | 500                        | Cargas de trabajo ligeras              |
| **FLASH - Estándar**               | 1500                       | Cargas de trabajo estándar             |
| **FLASH - Premium**                | 3000                       | Cargas intensivas                      |
| **FLASH - Enterprise**             | 7500                       | Cargas críticas                        |
| **FLASH - Ultra**                  | 15000                      | Cargas ultra-intensivas                |
| **MASS STORAGE - Archivado**       | No aplica                  | Almacenamiento económico para archivado |

### Características:
- **Tecnología**: Flash NVMe con **Distributed RAID 6** para una mayor resiliencia.
- **Disponibilidad**: 99.99%, medida mensualmente.
- **Restricciones**: Sin limitación en lecturas o escrituras. Sin compresión ni deduplicación automática, garantizando el uso completo de los volúmenes reservados.

---