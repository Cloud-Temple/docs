---
title: Conceptos
sidebar_position: 1
---

# Conceptos Clave de PostgreSQL Gestionado

Esta sección presenta los conceptos fundamentales de nuestro servicio **PostgreSQL Gestionado**. Comprender estos principios le ayudará a sacar el máximo provecho de su base de datos gestionada, alineando sus capacidades con las necesidades de su aplicación y sus requisitos de seguridad.

## Soberanía y Cumplimiento SecNumCloud

En el corazón de nuestro producto se encuentra la **soberanía digital**. El servicio PostgreSQL Gestionado está alojado íntegramente en la infraestructura Cloud Temple, cualificada **SecNumCloud 3.2** por la ANSSI.

- **Alojamiento 100% en Francia** : Sus datos permanecen en el territorio nacional, a salvo de leyes extraterritoriales.
- **Conformidad nativa** : La solución está diseñada para satisfacer los requisitos regulatorios más estrictos (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Código Abierto y Reversibilidad** : Al basarnos en estándares abiertos como PostgreSQL Community Server y Patroni, garantizamos una ausencia de dependencia tecnológica (*vendor lock-in*) y una portabilidad total de sus datos.

## Arquitectura de Alta Disponibilidad: Patroni Cluster

Para entornos distribuidos, nuestro producto se basa en **Patroni Cluster** para ofrecer alta disponibilidad sin pérdida de datos.

- **Replicación Síncrona** : A diferencia de la replicación asíncrona tradicional, cada transacción se valida en todos los nodos del clúster *antes* de ser confirmada. Esto garantiza un **Objetivo de Punto de Recuperación (RPO) de cero** : ningún dato validado puede perderse en caso de fallo.
- **Distribución Multi-AZ** : El clúster se distribuye en tres Zonas de Disponibilidad (AZ) distintas. La caída de un centro de datos completo no provoca ninguna interrupción del servicio ni pérdida de datos.
- **Conmutación por error automática** : En caso de incidente en un nodo, el tráfico se redirige automáticamente hacia los nodos sanos, garantizando un **Objetivo de Tiempo de Recuperación (RTO) mínimo**.

## Modelos de Despliegue

Ofrecemos dos modelos para adaptarse a la criticidad de sus cargas de trabajo.

### 1. StandAlone

Este modelo despliega una única instancia del motor PostgreSQL.

- **Caso de uso** : Este modelo de despliegue se adapta perfectamente a aplicaciones simples, como CMS, que utilizan un único endpoint para conectarse a las bases de datos.
- **Resiliencia** : Aunque se trata de una única instancia, el almacenamiento subyacente está replicado en 3 AZ, lo que permite un reinicio automático en otra AZ en caso de fallo de hardware.
- **SLA** : 99.9% (fuera de los períodos de mantenimiento).

### 2. Distribuido

Este modelo despliega un **cluster Patroni de 3 instancias** del motor PostgreSQL, complementado por un proxy **PgBouncer**.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones con acceso distribuido, como las aplicaciones de datos o de inteligencia empresarial, que se benefician de acceso de solo lectura sin afectar la ingesta de datos.
- **Componentes** :
  - **3 Nodos PostgreSQL** : Un nodo primario de lectura-escritura (RW) y dos nodos secundarios de solo lectura (RO).
  - **Proxy PgBouncer** : Un enrutador inteligente que distribuye las consultas. Envía las escrituras al nodo primario y distribuye las lecturas entre los nodos secundarios (*división de lectura/escritura*), optimizando así el rendimiento.
- **SLA** : 99.9% (hors plages de maintenance).

> **Nota Importante** : No es posible modificar el modelo de despliegue de un cluster existente (por ejemplo, de pasar de *StandAlone* a *Distributed*). Esta operación requiere la creación de un nuevo cluster en el modelo deseado, mediante una restauración PiTR.

## Copia de seguridad y restauración (PITR)

La protección de sus datos se garantiza mediante una doble estrategia de copia de seguridad.

1. **Copia de seguridad física (Recuperación en un punto en el tiempo - PITR)** :
    - Realizamos copias de seguridad físicas completas diarias con `pg_basebackup` (sin interrupción del servicio).
    - Los registros de transacciones (*WAL*) se archivan continuamente.
    - Esta combinación permite una restauración "con precisión de segundo" hasta el momento justo antes de un incidente.

2. **Copia de seguridad lógica (`pg_dump`)** :
    - También se realizan exportaciones lógicas de las bases de datos.
    - Ofrecen una granularidad fina para restaurar o exportar una base de datos individual.

Todas las copias de seguridad están cifradas en reposo y almacenadas en nuestro Object Storage S3, el cual cuenta con la certificación SecNumCloud.

## Seguridad a Múltiples Niveles

La seguridad está integrada en cada capa del servicio.

- **Aislamiento de Red** : Las instancias de base de datos **nunca están expuestas a Internet**. El acceso se realiza exclusivamente a través de la red privada del cliente.
- **Cifrado de extremo a extremo** :
  - **En tránsito** : Todas las conexiones (cliente a base de datos y entre los nodos del clúster) están cifradas con TLS 1.3.
  - **En reposo** : Los datos en disco y las copias de seguridad están cifradas con AES-256.
- **Gestión de Acceso** : La autenticación es segura y los permisos se gestionan según el principio de menor privilegio.

## Servicio Gestionado ("Cero Ops")

El objetivo de PostgreSQL Gestionado es liberarlo de la complejidad operativa. Nuestros equipos se encargan de:

- El aprovisionamiento y la configuración inicial.
- La gestión completa del ciclo de vida: actualizaciones menores, aplicación de parches de seguridad.
- La supervisión 24/7 de la infraestructura y del servicio.
- La gestión y verificación de las copias de seguridad.

Esto permite que sus equipos se centren en el desarrollo de aplicaciones y en la explotación de sus datos.

## Política de versiones y ciclo de vida

La comunidad de PostgreSQL publica versiones con soporte a largo plazo (LTS), lo que garantiza estabilidad y previsibilidad. Nuestro servicio se basa en estas versiones para asegurar la longevidad de su infraestructura.

| Versión | Tipo | Soporte hasta |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Actualizaciones menores** : Los parches de seguridad y las correcciones de errores son aplicados por nuestros equipos mediante *rolling update* (nodo por nodo) para no causar ninguna interrupción del servicio.
- **Actualizaciones mayores** : Las actualizaciones mayores se planifican en colaboración con usted para alinearse con su calendario.
- **Fin del soporte** : Le notificamos al menos 180 días antes de la finalización del soporte de una versión LTS para planificar la migración a la siguiente versión.

## Tamaños de instancia

Las instancias ***StandAlone*** y ***Distributed*** están disponibles con tamaños predefinidos:

| Tamaño | vCPU | Memoria | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache | maxconn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1000m | 4096Mi | 2458M | 2 | 256M | 800 | 80 |
| **S** | 1000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **M** | 2000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **L** | 2000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XL** | 4000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XXL** | 4000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **3XL** | 8000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **4XL** | 8000m | 65536Mi | 39320M | 16 | 1G | 10000 | 500 |

> **Nota** : El almacenamiento se aprovisiona por separado y puede ampliarse en caliente (de 2Gi a 128Gi) (pero no reducirse, excepto recreando una nueva instancia.).