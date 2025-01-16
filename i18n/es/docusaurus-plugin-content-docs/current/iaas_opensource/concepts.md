---
title: Concepts
---

La oferta __IaaS (Infraestructura como Servicio)__ de Cloud Temple está diseñada para responder a las necesidades críticas de continuidad y recuperación de actividad, con un énfasis particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de punta, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional:

- Cómputo: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para el almacenamiento en bloque, y **DELL ECS** para el almacenamiento en objeto.
- Red: **JUNIPER**.
- Virtualización: **Stack Open Source**, ofreciendo una base confiable y comprobada para gestionar sus entornos cloud.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, garantizando una amplia compatibilidad con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- **Recursos dedicados**: Las láminas de cómputo, volúmenes de almacenamiento y stacks de software (virtualización, respaldo, firewalling, etc.) nunca son compartidos entre clientes.
- **Previsibilidad máxima**: Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y se beneficia de una facturación clara, basada en el consumo mensual.

La plataforma está calificada **SecNumCloud** por el [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cómputo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Respaldo cruzado con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                     |   
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y cumplimiento con RGPD.                                                                                        |   
| Seguridad           | Plataforma altamente segura, calificada **SecNumCloud**, **HDS** (Alojamiento de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**.         |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo periodos de mantenimiento.                                   |   
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                      |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                         |
| Bajo demanda        | Recursos disponibles bajo demanda.                                                                                                              |


## Clases de láminas de computación

Las láminas de computación disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia           | RAM  __(1)__ | Frecuencia __(2)__                      | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          | 
|----------------------|--------------|-----------------------------------------|--------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)| 20 / 40 hilos            | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)| 32 / 64 hilos            | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)  | 48 / 96 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)| 16 / 32 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)  | 36 / 72 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)  | 56 / 112 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)| 32 / 64 hilos            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notas:
- __(1)__ La cantidad de memoria es la físicamente disponible en las láminas y no puede ser modificada.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física es compartida para el acceso a la red y al almacenamiento en bloque, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Las GPU disponibles evolucionan conforme a las últimas tecnologías. Al 1 de mayo de 2024, la oferta incluye GPU NVIDIA LOVELACE L40S.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluyendo periodos de mantenimiento. Cualquier solicitud relacionada con el SLA debe ser declarada mediante un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido, basado en **IBM Spectrum Virtualize**, ofrece una gama de rendimientos adecuados para diversos casos de uso:

| Referencia                         | IOPS/To                 | Uso principal                            | 
|-----------------------------------|-------------------------|------------------------------------------|
| **FLASH - Esencial**              | 500                     | Cargas de trabajo ligeras                |
| **FLASH - Estándar**              | 1500                    | Cargas de trabajo estándar               |
| **FLASH - Premium**               | 3000                    | Cargas intensivas                        |
| **FLASH - Enterprise**            | 7500                    | Cargas críticas                          |
| **FLASH - Ultra**                 | 15000                   | Cargas ultra-intensivas                  |
| **MASS STORAGE - Archivado**      | No aplicable            | Almacenamiento económico para archivado  |

### Características:
- **Tecnología**: Flash NVMe con **Distributed RAID 6** para una mayor resiliencia.
- **Disponibilidad**: 99.99%, medida mensualmente.
- **Restricciones**: Sin limitación en lecturas o escrituras. Sin compresión o deduplicación automática, garantizando el uso total de los volúmenes reservados.

---