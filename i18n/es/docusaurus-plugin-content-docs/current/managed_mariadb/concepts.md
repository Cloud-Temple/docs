---
title: Conceptos
sidebar_position: 1
---

# Conceptos Clave de MariaDB Administrado

Esta sección presenta los conceptos fundamentales de nuestro servicio **MariaDB Administrado**. Comprender estos principios le ayudará a aprovechar al máximo su base de datos administrada, alineando sus capacidades con sus necesidades de aplicaciones y sus requisitos de seguridad.

## Soberanía y Cumplimiento SecNumCloud

En el corazón de nuestro producto se encuentra la **soberanía digital**. El servicio MariaDB Administrado está alojado completamente en la infraestructura Cloud Temple, certificada **SecNumCloud 3.2** por el ANSSI.

- **Alojamiento 100% en Francia** : Sus datos permanecen en el territorio nacional, a salvo de las leyes extraterritoriales.
- **Cumplimiento nativo** : La solución está diseñada para cumplir con los requisitos regulatorios más estrictos (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Código Abierto y Reversibilidad** : Al basarnos en estándares abiertos como MariaDB Community Server y Galera, garantizamos la ausencia de dependencia tecnológica (*vendor lock-in*) y una portabilidad total de sus datos.

## Arquitectura de Alta Disponibilidad: Galera Cluster + MaxScale

Para los entornos distribuidos, nuestro producto se basa en **Galera Cluster** para ofrecer alta disponibilidad sin pérdida de datos.

- **Replicación Síncrona** : A diferencia de la replicación asíncrona tradicional, cada transacción se valida en todos los nodos del clúster *antes* de ser confirmada. Esto garantiza un **Objetivo de Punto de Recuperación (RPO) de cero** : ningún dato validado puede perderse en caso de fallo.
- **Distribución Multi-AZ** : El clúster se distribuye en tres Zonas de Disponibilidad (AZ) distintas. La caída de un centro de datos completo no provoca ninguna interrupción del servicio ni pérdida de datos.
- **Conmutación por Error Automática** : En caso de incidente en un nodo, el tráfico se redirige automáticamente a los nodos sanos, garantizando un **Objetivo de Tiempo de Recuperación (RTO) mínimo**.
- **Proxy MaxScale** : MaxScale es un proxy, enrutador y equilibrador de carga avanzado para MariaDB. Gestiona la conmutación por error automática en replicación, equilibra las consultas (escrituras hacia primary, lecturas hacia réplicas mediante ReadWriteSplit) y ofrece filtros para caché, auditoría (QLAfilter) o seguridad (RegexFilter).

## Modelos de Despliegue

Ofrecemos dos modelos para adaptarse a la criticidad de sus cargas de trabajo.

### 1. StandAlone

Este modelo despliega una única instancia del motor MariaDB.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones sencillas, como CMS, que solo utilizan un único endpoint para conectarse a las bases de datos.
- **Resiliencia** : Aunque se trata de una única instancia, el almacenamiento subyacente se replica en 3 AZ, lo que permite un reinicio automático en otra AZ en caso de fallo de hardware.
- **SLA** : 99.9% (excluidas las ventanas de mantenimiento).

### 2. MultiAZ

Este modelo despliega un **clúster Galera de 3 instancias** del motor MariaDB, completado por un proxy **MaxScale**.

- **Caso de uso** : Este modelo de despliegue se adapta perfectamente a aplicaciones con acceso distribuido, como las aplicaciones de datos o de inteligencia empresarial, que se benefician de un acceso de solo lectura sin impacto en la ingestión de datos.
- **Componentes** :
  - **3 Nodos MariaDB** : Un nodo primario de lectura-escritura (RW) y dos nodos secundarios de solo lectura (RO).
  - **Proxy MaxScale** : Un enrutador inteligente que distribuye las consultas. Envía las escrituras al nodo primario y distribuye las lecturas en todos los nodos (`ReadWriteSplit`), optimizando así el rendimiento.
- **SLA** : 99.9% (hors plages de maintenance).

> **Nota Importante** : No es posible modificar el modelo de despliegue de un clúster existente (par exemple, de passer de *StandAlone* à *MultiAZ*). Esta operación requiere la creación de un nuevo clúster en el modelo deseado, mediante una restauración.

## Copia de seguridad y Restauración

La protección de sus datos está garantizada mediante una doble estrategia de copia de seguridad.

1. **Copia de seguridad física** :
    - Realizamos copias de seguridad físicas completas diarias (`mariabackup`) (sin interrupción del servicio).

2. **Copia de seguridad lógica (`mysqldump`)** :
    - También se realizan exportaciones lógicas de las bases de datos.
    - Ofrecen una granularidad fina para restaurar o exportar una base de datos individual.

Todas las copias de seguridad están cifradas en reposo y almacenadas en nuestro Object Storage S3, el cual cuenta con la certificación SecNumCloud.

## Seguridad en Múltiples Niveles

La seguridad está integrada en cada capa del servicio.

- **Aislamiento de Red** : Las instancias de base de datos **nunca están expuestas a Internet**. El acceso se realiza exclusivamente a través de la red privada del cliente.
- **Cifrado de extremo a extremo** :
  - **En tránsito** : Todas las conexiones (cliente a base de datos y entre los nodos del clúster) están cifradas con TLS 1.3.
  - **En reposo** : Los datos en disco (tablespaces InnoDB) y las copias de seguridad están cifrados con AES-256.
- **Gestión de Accesos** : La autenticación es segura (plugins `ed25519` o `sha256_password`), y los permisos se gestionan según el principio de menor privilegio.

## Servicio Gestionado ("Zéro Ops")

El objetivo de MariaDB Gestionado es liberarle de la complejidad operativa. Nuestros equipos se encargan de:

- El aprovisionamiento y la configuración inicial.
- La gestión completa del ciclo de vida: actualizaciones menores, aplicación de parches de seguridad.
- La supervisión 24/7 de la infraestructura y del servicio.
- La gestión y verificación de las copias de seguridad.

Esto permite que sus equipos se concentren en el desarrollo de aplicaciones y en la explotación de sus datos.

## Política de versiones y ciclo de vida

La fundación MariaDB publica versiones con soporte a largo plazo (LTS), lo que garantiza la estabilidad y la previsibilidad. Nuestro servicio se basa en estas versiones para garantizar la continuidad de su infraestructura.

| Versión | Tipo | Soporte hasta |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mayo 2029 |
| **MariaDB 11.8** | LTS | Junio 2028 |

- **Actualizaciones menores** : Los parches de seguridad y las correcciones de errores se aplican por parte de nuestros equipos mediante *rolling update* (nodo por nodo) para no causar ninguna interrupción del servicio.
- **Actualizaciones mayores** : Las actualizaciones de versión mayores se planifican en colaboración con usted para alinearse con su calendario.
- **Fin de soporte** : Le notificamos al menos 180 días antes del fin de soporte de una versión LTS para planificar la migración a la siguiente versión.

## Tamaños de las instancias

Las instancias ***StandAlone*** y ***MultiAZ*** están disponibles con tamaños predefinidos:

| Tamaño | vCPU | Memoria | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro** | 1 | 2 Go | 1200M | 1 | 128M | 400 |
| **Small** | 1 | 4 Go | 2458M | 2 | 256M | 800 |
| **Medium** | 2 | 4 Go | 2458M | 2 | 256M | 800 |
| **Med-Large** | 2 | 8 Go | 4915M | 4 | 512M | 1600 |
| **Large** | 4 | 8 Go | 4915M | 4 | 512M | 1600 |
| **X-Large** | 4 | 16 Go | 9830M | 8 | 1G | 3200 |
| **2X-Large** | 8 | 16 Go | 9830M | 8 | 1G | 3200 |
| **3X-Large** | 8 | 32 Go | 19660M | 16 | 1G | 6400 |
| **4X-Large** | 16 | 32 Go | 19660M | 16 | 1G | 10000 |
| **5X-Large** | 16 | 64 Go | 39320M | 16 | 1G | 10000 |
| **6X-Large** | 32 | 128 Go | 78640M | 16 | 1G | 10000 |


> **Nota** : El almacenamiento se aprovisiona por separado y puede aumentarse en caliente (mínimo recomendado de 2Gi, hasta un máximo de 512Gi) (pero no puede reducirse, excepto recreando una nueva instancia).

### Explicación de los parámetros de dimensionamiento

Las instancias de MariaDB tienen límites estrictos en términos de CPU y RAM (OOMKill) gestionados por Kubernetes. Si una instancia alcanza su límite de memoria, se reinicia, lo que puede provocar una interrupción del servicio y potencialmente romper la replicación de un clúster. Por esta razón, los parámetros se establecen según el tamaño de la instancia para evitar cualquier saturación de la RAM:

- **innodb_buffer_pool_size** : Este búfer contiene las páginas de datos y los índices en memoria. Se recomienda trabajar en RAM para un mejor rendimiento (limitación de E/S). Aquí se establece en aproximadamente el 60% del tamaño de la RAM de la instancia.
- **innodb_buffer_pool_instances** : Divide el pool de búferes en varias "instancias" para reducir la contención interna en los bloqueos (cuando hay muchos hilos de CPU).
- **max_allowed_packet** : Tamaño máximo de un paquete o resultado que es posible enviar/recibir en una consulta. Límite ajustado según el tamaño de la instancia para proteger la memoria.
- **table_open_cache** : Número de tablas que MariaDB puede mantener abiertas simultáneamente. Adaptado en función de las conexiones.
> **Nota importante** : Se desaconseja encarecidamente activar o utilizar el `performance_schema` de MariaDB en instancias pequeñas (tamaños inferiores a **X-Large**). Este consume importantes recursos, y en particular RAM crítica.