---
title: Conceptos
sidebar_position: 1
---

# Conceptos Clave de MariaDB Gestionado

Esta sección presenta los conceptos fundamentales de nuestro servicio **MariaDB Gestionado**. Comprender estos principios le ayudará a sacar el máximo partido de su base de datos gestionada, alineando sus capacidades con sus necesidades aplicativas y requisitos de seguridad.

## Soberanía y Conformidad SecNumCloud

En el núcleo de nuestra oferta se encuentra la **soberanía digital**. El servicio MariaDB Gestionado está completamente alojado en la infraestructura Cloud Temple, calificada **SecNumCloud 3.2** por la ANSSI.

- **Alojamiento 100% en Francia**: Sus datos permanecen en territorio nacional, protegidos de las leyes extraterritoriales.
- **Conformidad nativa**: La solución está diseñada para cumplir con los requisitos regulatorios más estrictos (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source y Reversibilidad**: Al basarnos en estándares abiertos como MariaDB Community Server y Galera, garantizamos la ausencia de dependencia tecnológica (*vendor lock-in*) y una portabilidad total de sus datos.

## Arquitectura de Alta Disponibilidad: Galera Cluster + MaxScale

Para los entornos distribuidos, nuestro servicio se basa en **Galera Cluster** para ofrecer alta disponibilidad sin pérdida de datos.

- **Replicación Síncrona**: A diferencia de la replicación asíncrona tradicional, cada transacción se valida en todos los nodos del cluster *antes* de ser confirmada. Esto garantiza un **Recovery Point Objective (RPO) de cero**: ningún dato validado puede perderse en caso de fallo.
- **Distribución Multi-AZ**: El cluster está distribuido en tres Zonas de Disponibilidad (AZ) distintas. El fallo de un centro de datos completo no provoca ninguna interrupción del servicio ni pérdida de datos.
- **Failover Automático**: En caso de incidente en un nodo, el tráfico se redirige automáticamente hacia los nodos sanos, asegurando un **Recovery Time Objective (RTO) mínimo**.
- **Proxy MaxScale**: MaxScale es un proxy, enrutador y balanceador de carga avanzado para MariaDB. Gestiona el failover automático en la replicación, equilibra las solicitudes (escrituras hacia el primary, lecturas hacia las replicas mediante ReadWriteSplit) y ofrece filtros para caché, auditoría (QLAfilter) o seguridad (RegexFilter).

## Modelos de Despliegue

Ofrecemos dos modelos para adaptarse a la criticidad de sus cargas de trabajo.

### 1. StandAlone

Este modelo despliega una instancia única del motor MariaDB.

- **Caso de uso**: Este modelo de despliegue es ideal para aplicaciones simples, como CMS, que utilizan un único endpoint para conectarse a las bases de datos.
- **Resiliencia**: Aunque se trata de una instancia única, el almacenamiento subyacente está replicado en 3 AZ, lo que permite un reinicio automático en otra AZ en caso de fallo de hardware.
- **SLA**: 99,9 % (fuera de los períodos de mantenimiento).

### 2. Distributed

Este modelo despliega un **cluster Galera de 3 instancias** del motor MariaDB, complementado por un proxy **MaxScale**.

- **Caso de uso**: Este modelo de despliegue es ideal para aplicaciones con accesos distribuidos, como aplicaciones de datos o de inteligencia de negocio, que se benefician de accesos de solo lectura sin impacto en la ingesta de datos.
- **Componentes**:
  - **3 Nodos MariaDB**: Un nodo primario de lectura-escritura (RW) y dos nodos secundarios de solo lectura (RO).
  - **Proxy MaxScale**: Un enrutador inteligente que distribuye las solicitudes. Envía las escrituras al nodo primario y distribuye las lecturas entre todos los nodos (`ReadWriteSplit`), optimizando así el rendimiento.
- **SLA**: 99,9 % (fuera de los períodos de mantenimiento).

> **Nota Importante**: No es posible cambiar el modelo de despliegue de un cluster existente (por ejemplo, pasar de *StandAlone* a *Distributed*). Esta operación requiere la creación de un nuevo cluster en el modelo deseado, mediante una restauración.

## Copia de Seguridad y Restauración (PITR)

La protección de sus datos está garantizada por una doble estrategia de copias de seguridad.

1. **Copia de Seguridad Física y Point-in-Time Recovery**:
    - Realizamos copias de seguridad físicas diarias completas (`mariabackup`) (sin interrupción del servicio).
    - Con la versión **distributed**, los registros de transacciones (*binary logs*) se archivan de forma continua. Esta combinación permite una restauración PiTR hasta el momento justo antes de un incidente.

2. **Copia de Seguridad Lógica (`mysqldump`)**:
    - También se realizan exportaciones lógicas de las bases de datos.
    - Ofrecen una granularidad fina para restaurar o exportar una base de datos individual.

Todas las copias de seguridad están cifradas en reposo y almacenadas en nuestro Object Storage S3, que también está calificado SecNumCloud.

## Seguridad en Múltiples Niveles

La seguridad está integrada en cada capa del servicio.

- **Aislamiento de Red**: Las instancias de base de datos **nunca están expuestas en Internet**. El acceso se realiza exclusivamente a través de la red privada del cliente.
- **Cifrado de extremo a extremo**:
  - **En tránsito**: Todas las conexiones (cliente a base de datos y entre los nodos del cluster) están cifradas con TLS 1.3.
  - **En reposo**: Los datos en disco (tablespaces InnoDB) y las copias de seguridad están cifrados con AES-256.
- **Gestión de Accesos**: La autenticación está protegida (plugins `ed25519` o `sha256_password`), y los permisos se gestionan según el principio de mínimo privilegio.

## Servicio Gestionado ("Zero Ops")

El objetivo de MariaDB Gestionado es liberarle de la complejidad operativa. Nuestros equipos se encargan de:

- El aprovisionamiento y la configuración inicial.
- La gestión completa del ciclo de vida: actualizaciones menores, aplicación de parches de seguridad.
- La supervisión 24/7 de la infraestructura y del servicio.
- La gestión y verificación de las copias de seguridad.

Esto permite a sus equipos concentrarse en el desarrollo de aplicaciones y en la explotación de sus datos.

## Política de versiones y ciclo de vida

La fundación MariaDB publica versiones con soporte a largo plazo (LTS), lo que garantiza estabilidad y previsibilidad. Nuestro servicio se basa en estas versiones para asegurar la perdurabilidad de su infraestructura.

| Versión | Tipo | Soportada hasta |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mayo 2029 |
| **MariaDB 11.8** | LTS | Junio 2028 |

- **Actualizaciones menores**: Los parches de seguridad y correcciones de errores son aplicados por nuestros equipos mediante *rolling update* (nodo a nodo) para no causar ninguna interrupción del servicio.
- **Actualizaciones mayores**: Las actualizaciones de versión mayores se planifican en colaboración con usted para adaptarse a su calendario.
- **Fin de soporte**: Le notificaremos al menos 180 días antes del fin de soporte de una versión LTS para planificar la migración a la siguiente versión.

## Tamaños de instancias

Las instancias ***StandAlone*** y ***Distributed*** están disponibles en tamaños predefinidos:

| Tamaño | vCPU/nodo | RAM/nodo | Max Conn | Working Set Max | DB Total Max |
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

> **Nota**: El almacenamiento se aprovisiona de forma independiente y puede aumentarse en caliente (de 2 Gi a 512 Gi) (pero no reducirse, salvo recreando una nueva instancia).
