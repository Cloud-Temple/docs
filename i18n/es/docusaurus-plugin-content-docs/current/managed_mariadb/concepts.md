---
title: Conceptos
sidebar_position: 1
---

# Conceptos Clave de MariaDB Gestionado

Esta sección presenta los conceptos fundamentales de nuestro servicio **MariaDB Gestionado**. Comprender estos principios le ayudará a sacar el máximo provecho de su base de datos gestionada, alineando sus capacidades con sus requisitos de la aplicación y sus requisitos de seguridad.

## Soberanía y Cumplimiento SecNumCloud

En el corazón de nuestro producto se encuentra la **soberanía digital**. El servicio MariaDB Gestionado está alojado íntegramente en la infraestructura Cloud Temple, cualificada **SecNumCloud 3.2** por la ANSSI.

- **Alojamiento 100% en Francia**: Sus datos permanecen en el territorio nacional, a salvo de las leyes extraterritoriales.
- **Cumplimiento nativo**: La solución está diseñada para cumplir con los requisitos regulatorios más estrictos (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Código Abierto y Reversibilidad**: Al basarnos en estándares abiertos como MariaDB Community Server y Galera, garantizamos la ausencia de dependencia tecnológica (*vendor lock-in*) y una portabilidad total de sus datos.

## Arquitectura de Alta Disponibilidad : Galera Cluster + MaxScale

Para entornos distribuidos, nuestro producto se basa en **Galera Cluster** para ofrecer alta disponibilidad sin pérdida de datos.

- **Replicación Síncrona** : A diferencia de la replicación asíncrona tradicional, cada transacción se valida en todos los nodos del clúster *antes* de ser confirmada. Esto garantiza un **Objetivo de Punto de Recuperación (RPO) de cero** : ningún dato validado puede perderse en caso de falla.
- **Distribución Multi-AZ** : El clúster se distribuye en tres Zonas de Disponibilidad (AZ) distintas. La caída de un centro de datos completo no provoca ninguna interrupción del servicio ni pérdida de datos.
- **Conmutación por Error Automática** : En caso de incidente en un nodo, el tráfico se redirige automáticamente hacia los nodos sanos, asegurando un **Objetivo de Tiempo de Recuperación (RTO) mínimo**.
- **Proxy MaxScale** : MaxScale es un proxy, enrutador y balanceador de carga avanzado para MariaDB. Gestiona la conmutación por error automática en replicación, equilibra las consultas (writes vers primary, reads vers replicas via ReadWriteSplit) y ofrece filtros para caché, auditoría (QLAfilter) o seguridad (RegexFilter).

## Modelos de Despliegue

Ofrecemos dos modelos para adaptarse a la criticidad de sus cargas de trabajo.

### 1. StandAlone

Este modelo despliega una única instancia del motor MariaDB.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones simples, como CMS, que utilizan un único endpoint para conectarse a las bases de datos.
- **Resiliencia** : Aunque se trata de una única instancia, el almacenamiento subyacente está replicado en 3 AZ, lo que permite un reinicio automático en otra AZ en caso de fallo de hardware.
- **SLA** : 99.9% (fuera de los períodos de mantenimiento).

### 2. Distribuido

Este modelo despliega un **cluster Galera de 3 instancias** del motor MariaDB, complementado por un proxy **MaxScale**.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones con accesos distribuidos, como aplicaciones de datos o de inteligencia empresarial, que se benefician de accesos de solo lectura sin afectar la ingesta de datos.
- **Componentes** :
  - **3 Nodos MariaDB** : Un nodo primario de lectura-escritura (RW) y dos nodos secundarios de solo lectura (RO).
  - **Proxy MaxScale** : Un enrutador inteligente que distribuye las consultas. Envía las escrituras al nodo primario y reparte las lecturas entre todos los nodos (`ReadWriteSplit`), optimizando así el rendimiento.
- **SLA** : 99.9% (fuera de los períodos de mantenimiento).

> **Nota Importante** : No es posible modificar el modelo de despliegue de un cluster existente (por ejemplo, pasar de *StandAlone* a *Distributed*). Esta operación requiere la creación de un nuevo cluster en el modelo deseado, mediante una restauración.

## Copia de seguridad y restauración (PITR)

La protección de sus datos se garantiza mediante una doble estrategia de copia de seguridad.

1. **Copia de seguridad física y Point-in-Time Recovery** :
    - Realizamos copias de seguridad físicas completas diarias (`mariabackup`) (sans interruption de service).
    - Con la versión **distribuida**, los registros de transacciones (*binary logs*) se archivan continuamente. Esta combinación permite una recuperación PITR hasta el momento justo anterior a un incidente.

2. **Copia de seguridad lógica (`mysqldump`)** :
    - También se realizan exportaciones lógicas de las bases de datos.
    - Ofrecen una granularidad fina para restaurar o exportar una base de datos individual.

Todas las copias de seguridad están cifradas en reposo y almacenadas en nuestro S3 Object Storage, certificado SecNumCloud.

## Seguridad a Múltiples Niveles

La seguridad está integrada en cada capa del servicio.

- **Aislamiento de Red** : Las instancias de base de datos **nunca están expuestas a Internet**. El acceso se realiza exclusivamente a través de la red privada del cliente.
- **Cifrado de extremo a extremo** :
  - **En tránsito** : Todas las conexiones (cliente a base de datos y entre los nodos del clúster) están cifradas con TLS 1.3.
  - **En reposo** : Los datos en disco (tablespaces InnoDB) y las copias de seguridad están cifradas con AES-256.
- **Gestión de Accesos** : La autenticación es segura (plugins `ed25519` o `sha256_password`), y los permisos se gestionan según el principio de mínimo privilegio.

## Servicio Gestionado ("Zéro Ops")

El objetivo de MariaDB Gestionado es liberarlos de la complejidad operativa. Nuestros equipos se encargan de:

- El aprovisionamiento y la configuración inicial.
- La gestión completa del ciclo de vida: actualizaciones menores, aplicación de parches de seguridad.
- La supervisión 24/7 de la infraestructura y del servicio.
- La gestión y verificación de las copias de seguridad.

Esto permite a sus equipos concentrarse en el desarrollo de aplicaciones y en la explotación de sus datos.

## Política de versiones y ciclo de vida

La Fundación MariaDB publica versiones con soporte a largo plazo (LTS), lo que garantiza estabilidad y previsibilidad. Nuestro servicio se basa en estas versiones para asegurar la longevidad de su infraestructura.

| Versión | Tipo | Soportado hasta |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mayo de 2029 |
| **MariaDB 11.8** | LTS | Junio de 2028 |

- **Actualizaciones menores** : Los parches de seguridad y las correcciones de errores se aplican por nuestros equipos mediante *rolling update* (nodo por nodo) para no causar ninguna interrupción del servicio.
- **Actualizaciones mayores** : Las actualizaciones de versión mayores se planifican en colaboración con usted para alinearse con su calendario.
- **Fin del soporte** : Le notificamos al menos 180 días antes de la finalización del soporte de una versión LTS para planificar la migración a la siguiente versión.

## Tamaños de instancias

Las instancias ***StandAlone*** et ***Distributed*** están disponibles con tamaños predefinidos:

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