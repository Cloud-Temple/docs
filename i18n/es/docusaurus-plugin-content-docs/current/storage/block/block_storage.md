---
title: Almacenamiento en bloque
---

El **almacenamiento en bloque** de Cloud Temple proporciona los volúmenes persistentes de las ofertas de cálculo: datastores de IaaS VMware, Storage Repositories de IaaS OpenSource, volúmenes de Bare Metal, discos y volúmenes de VM Instances. No se contrata por separado: se elige con la oferta de cálculo, en la clase de rendimiento adaptada a cada carga de trabajo. Las plataformas de contenedores PaaS OpenShift y Managed Kubernetes también se apoyan en él para sus volúmenes persistentes.

Esta página describe lo que es común a todas las ofertas. La página Conceptos de cada oferta precisa las clases que propone y sus particularidades.

## Ofertas afectadas

| Oferta | Uso del almacenamiento en bloque | Clases disponibles |
|---|---|---|
| [IaaS VMware](../../iaas_vmware/concepts.md) | Datastores | Cinco clases Flash y Mass Storage |
| [IaaS OpenSource](../../iaas_opensource/concepts.md) | Storage Repositories | Cinco clases Flash y Mass Storage |
| [Bare Metal](../../iaas_bare-metal/concepts.md) | Volúmenes de los servidores | Cinco clases Flash y Mass Storage |
| [VM Instances](../../public_cloud/vm_instances/concepts.md) | Disco del sistema y volúmenes adicionales | Standard y Enterprise, para los volúmenes adicionales |

## Clases de almacenamiento

| Clase | IOPS/TB | Límite de IOPS / volumen | Ancho de banda máx. / volumen | Unidad de facturación | Uso principal |
|---|---|---|---|---|---|
| **FLASH - Essentiel** | 500 | 10 000 IOPS | 512 MB/s | 1 GiB | Cargas de trabajo ligeras |
| **FLASH - Standard** | 1 500 | 30 000 IOPS | 1 024 MB/s | 1 GiB | Cargas de trabajo estándar |
| **FLASH - Premium** | 3 000 | 30 000 IOPS | 1 024 MB/s | 1 GiB | Cargas intensivas |
| **FLASH - Enterprise** | 7 500 | 30 000 IOPS | 1 024 MB/s | 1 GiB | Cargas críticas |
| **FLASH - Ultra** | 15 000 | 30 000 IOPS | 1 024 MB/s | 1 GiB | Cargas ultraintensivas |
| **MASS STORAGE** | No garantizado | No garantizado | No garantizado | 1 TiB | Copia de seguridad y archivado |

### Reglas de rendimiento

- El rendimiento efectivo de un volumen crece de forma lineal con la capacidad asignada, según la relación IOPS/TB de su clase, **dentro del límite indicado arriba**. Por ejemplo, un volumen de 0,5 TB en la clase Standard dispone de 750 IOPS; un volumen de 10 TB en la clase Ultra (150 000 IOPS en teoría) está limitado a 30 000 IOPS y 1 024 MB/s.
- Los límites se aplican a nivel del volumen de almacenamiento. No hay restricción ni cuota en la lectura o la escritura.
- No hay facturación por IOPS.
- La clase Mass Storage, en discos mecánicos, no tiene compromiso de rendimiento.
- No se aplica compresión ni deduplicación: la capacidad reservada se asigna físicamente.

## Arquitectura

- **Tecnología**: almacenamiento 100 % Flash NVMe en [IBM FlashSystem](https://www.ibm.com/flashsystem/), virtualizado por [IBM SVC](https://www.ibm.com/products/san-volume-controller), con discos en Distributed RAID 6. La clase Mass Storage utiliza discos mecánicos.
- **Almacenamiento local en cada zona de disponibilidad**: cada volumen se aprovisiona en una sola zona de disponibilidad, la de los recursos de cálculo, para una latencia inferior a un milisegundo.
- **Aislamiento**: los volúmenes de almacenamiento están dedicados al entorno del cliente.

## Regiones y zonas de disponibilidad

El almacenamiento en bloque está disponible en la región FR1, en cada una de sus zonas de disponibilidad.

## Seguridad y cumplimiento

- **Cifrado**: los datos se cifran en reposo, directamente en los discos, con el algoritmo XTS-AES 256, conforme a la norma FIPS 140-2. El cifrado no se aplica durante las transferencias de replicación entre zonas de disponibilidad, que pasan por canales dedicados y seguros.
- **Certificaciones**: el almacenamiento en bloque está certificado HDS e ISO 27001, y disponible en servicios cualificados SecNumCloud y conformes a C5.

## Copia de seguridad y continuidad

- **Replicación entre zonas de disponibilidad**: la replicación asíncrona (Global Mirror) copia los volúmenes a otra zona de disponibilidad de la región, para los planes de recuperación ante desastres. Se implementa con las funcionalidades de la oferta IaaS, por ejemplo en [IaaS VMware](../../iaas_vmware/concepts.md). Su objetivo es un RPO de 15 minutos y un RTO inferior a 4 horas, es compatible con las clases Essentiel, Standard y Premium, y reduce en torno a un 10 % las IOPS del volumen replicado. El rendimiento debe ser idéntico en ambas zonas. No se ofrece replicación síncrona.
- **Durabilidad**: la arquitectura redundante (RAID, controladoras, alimentación) está diseñada para una durabilidad de los datos del 99,9999999 % (9 nueves).

## Disponibilidad del servicio

El objetivo de disponibilidad del almacenamiento en bloque es del 99,99 %, medido sobre un mes.

## Reversibilidad

| Operación | Medio | Plazo | Coste |
|---|---|---|---|
| Exportación de los datos | Snapshots, imágenes de disco | 30 días | Gratuito |
| Purga segura | Certificado de destrucción | — | Incluido |

## Precios

Los precios del almacenamiento en bloque se publican en la página del producto del sitio web de Cloud Temple:
[Almacenamiento en bloque — precios](https://www.cloud-temple.com/produits/stockage-bloc/).
