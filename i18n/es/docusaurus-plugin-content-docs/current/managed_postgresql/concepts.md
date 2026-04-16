---
title: Conceptos
sidebar_position: 1
---

# Conceptos Clave de PostgreSQL Administrado

Esta sección presenta los conceptos fundamentales de nuestro servicio **PostgreSQL Administrado**. Comprender estos principios le ayudará a sacar el máximo partido de su base de datos administrada, alineando sus capacidades con sus necesidades de aplicación y requisitos de seguridad.

## Soberanía y Conformidad SecNumCloud

En el corazón de nuestra oferta se encuentra la **soberanía digital**. El servicio PostgreSQL Administrado está completamente alojado en la infraestructura Cloud Temple, calificada **SecNumCloud 3.2** por la ANSSI.

- **Alojamiento 100% en Francia**: Sus datos permanecen en territorio nacional, protegidos de las leyes extraterritoriales.
- **Conformidad nativa**: La solución está diseñada para cumplir con los requisitos regulatorios más estrictos (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source y Reversibilidad**: Al basarnos en estándares abiertos como PostgreSQL Community Server y Patroni, garantizamos la ausencia de dependencia tecnológica (*vendor lock-in*) y la portabilidad total de sus datos.

## Arquitectura de Alta Disponibilidad: Patroni Cluster

Para entornos distribuidos, nuestro servicio se basa en **Patroni Cluster** para ofrecer alta disponibilidad sin pérdida de datos.

- **Replicación Sincrónica**: A diferencia de la replicación asíncrona tradicional, cada transacción se valida en todos los nodos del clúster *antes* de confirmarse. Esto garantiza un **Objetivo de Punto de Recuperación (RPO) de cero**: ningún dato validado puede perderse en caso de fallo.
- **Distribución Multi-AZ**: El clúster está distribuido en tres Zonas de Disponibilidad (AZ) distintas. El fallo de un datacenter completo no provoca ninguna interrupción del servicio ni pérdida de datos.
- **Conmutación Automática**: En caso de incidente en un nodo, el tráfico se redirige automáticamente a los nodos saludables, asegurando un **Objetivo de Tiempo de Recuperación (RTO) mínimo**.

## Modelos de Implementación

Ofrecemos dos modelos para adaptarse a la criticidad de sus cargas de trabajo.

### 1. StandAlone

Este modelo despliega una única instancia del motor PostgreSQL.

- **Caso de uso**: Este modelo de implementación es perfectamente adecuado para aplicaciones simples, como CMS, que solo utilizan un único endpoint para conectarse a las bases de datos.
- **Resiliencia**: Aunque se trata de una instancia única, el almacenamiento subyacente se replica en 3 AZ, lo que permite un reinicio automático en otra AZ en caso de fallo de hardware.
- **SLA**: 99,9% (fuera de ventanas de mantenimiento).

### 2. Distributed

Este modelo despliega un **clúster Patroni de 3 instancias** del motor PostgreSQL, complementado por un proxy **PgBouncer**.

- **Caso de uso**: Este modelo de implementación es perfectamente adecuado para aplicaciones con accesos distribuidos, como aplicaciones de datos o de inteligencia empresarial, que se benefician de acceso de solo lectura sin impacto en la ingesta de datos.
- **Componentes**:
  - **3 Nodos PostgreSQL**: Un nodo primario de lectura-escritura (RW) y dos nodos secundarios de solo lectura (RO).
  - **Proxy PgBouncer**: Un enrutador inteligente que distribuye las solicitudes. Envía las escrituras al nodo primario y distribuye las lecturas entre los nodos secundarios (*read/write splitting*), optimizando así el rendimiento.
- **SLA**: 99,9% (fuera de ventanas de mantenimiento).

> **Nota Importante**: No es posible cambiar el modelo de implementación de un clúster existente (por ejemplo, de *StandAlone* a *Distributed*). Esta operación requiere la creación de un nuevo clúster en el modelo deseado, mediante una restauración PiTR.

## Copia de Seguridad y Restauración (PITR)

La protección de sus datos está asegurada por una doble estrategia de copias de seguridad.

1. **Copia de Seguridad Física (Point-in-Time Recovery - PITR)**:
    - Realizamos copias de seguridad físicas completas diarias con `pg_basebackup` (sin interrupción del servicio).
    - Los registros de transacciones (*WAL*) se archivan de forma continua.
    - Esta combinación permite una restauración "al segundo" hasta el momento justo antes de un incidente.

2. **Copia de Seguridad Lógica (`pg_dump`)**:
    - También se realizan exportaciones lógicas de las bases de datos.
    - Ofrecen una granularidad fina para restaurar o exportar una base de datos individual.

Todas las copias de seguridad están cifradas en reposo y almacenadas en nuestro Object Storage S3, él mismo calificado SecNumCloud.

## Seguridad a Múltiples Niveles

La seguridad está integrada en cada capa del servicio.

- **Aislamiento de Red**: Las instancias de base de datos **nunca están expuestas en Internet**. El acceso se realiza exclusivamente a través de la red privada del cliente.
- **Cifrado de extremo a extremo**:
  - **En tránsito**: Todas las conexiones (cliente a base de datos y entre nodos del clúster) están cifradas en TLS 1.3.
  - **En reposo**: Los datos en disco y las copias de seguridad están cifrados en AES-256.
- **Gestión de Acceso**: La autenticación es segura y los derechos se gestionan según el principio de mínimo privilegio.

## Servicio Administrado ("Zero Ops")

El objetivo de PostgreSQL Administrado es liberarle de la complejidad operativa. Nuestros equipos se encargan de:

- El aprovisionamiento y la configuración inicial.
- La gestión completa del ciclo de vida: actualizaciones menores, aplicación de parches de seguridad.
- La supervisión 24/7 de la infraestructura y el servicio.
- La gestión y verificación de las copias de seguridad.

Esto permite a sus equipos centrarse en el desarrollo de aplicaciones y la explotación de sus datos.

## Política de Versiones y Ciclo de Vida

La comunidad PostgreSQL publica versiones con soporte a largo plazo (LTS), lo que garantiza estabilidad y previsibilidad. Nuestro servicio se basa en estas versiones para asegurar la longevidad de su infraestructura.

| Versión | Tipo | Compatible hasta |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Actualizaciones menores**: Los parches de seguridad y las correcciones de errores son aplicados por nuestros equipos en *rolling update* (nodo por nodo) para no causar ninguna interrupción del servicio.
- **Actualizaciones mayores**: Las actualizaciones de versión mayor se planifican en colaboración con usted para alinearse con su calendario.
- **Fin de soporte**: Le notificamos al menos 180 días antes del fin del soporte de una versión LTS para planificar la migración a la siguiente versión.

## Tamaños de instancias

Las instancias ***StandAlone*** y ***Distributed*** están disponibles en tamaños predefinidos:

| Tamaño | vCPU/nodo | RAM/nodo | Conn. Máx | Working Set Máx | BD Total Máx |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Micro** | 1 | **2.00 Gi** | **40** | **1-2 GiB** | **2-8 GiB** |
| **Small** | 1 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Medium** | 2 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Med-Large**| 2 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **Large** | 4 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **X-Large** | 4 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **2X-Large**| 8 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **3X-Large**| 8 | **32.00 Gi** | **500** | **16-40 GiB** | **64-128 GiB** |
| **4X-Large**| 16 | **32.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **5X-Large**| 16 | **64.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **6X-Large**| 32 | **128.00 Gi**| **500** | **64-160 GiB** | **256-512 GiB** |

> **Nota**: El almacenamiento se aprovisiona por separado y puede aumentarse en caliente (de 2Gi a 512Gi) (pero no reducirse, excepto recreando una nueva instancia).
