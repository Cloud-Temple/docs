---
title: Conceptos
sidebar_position: 1
---

# Conceptos Clave de PostgreSQL Administrado

Esta sección presenta los conceptos fundamentales de nuestro servicio **PostgreSQL Administrado**. Comprender estos principios le ayudará a aprovechar al máximo su base de datos administrada, alineando sus capacidades con sus necesidades de aplicaciones y sus requisitos de seguridad.

## Soberanía y Cumplimiento SecNumCloud

En el corazón de nuestro producto se encuentra la **soberanía digital**. El servicio PostgreSQL Administrado está alojado completamente en la infraestructura Cloud Temple, certificada **SecNumCloud 3.2** por el ANSSI.

- **Alojamiento 100% en Francia** : Sus datos permanecen en el territorio nacional, protegidos de las leyes extraterritoriales.
- **Cumplimiento nativo** : La solución está diseñada para cumplir con los requisitos regulatorios más estrictos (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Código abierto y Reversibilidad** : Al basarnos en el operador Kubernetes de código abierto **CloudNative-PG (CNPG)** y **Barman**, garantimos la ausencia de dependencia tecnológica (*vendor lock-in*) y la portabilidad total de sus datos y configuraciones.

## Operador CloudNative-PG (CNPG)

La gestión del ciclo de vida de las bases de datos PostgreSQL en nuestra infraestructura Kubernetes se basa en **CloudNative-PG (CNPG)**.

- **Despliegue Declarativo** : La configuración de su base de datos se realiza mediante Custom Resource Definitions (CRD) de Kubernetes, permitiendo un enfoque de Infraestructura como Código (IaC) a través de Terraform o Helm.
- **Alta Disponibilidad Integrada** : CNPG gestiona automáticamente la elección del nodo primario y la conmutación por error (*failover*) de manera fluida.
- **Monitorización nativa** : Las métricas detalladas se exportan nativamente a Prometheus, facilitando la creación de dashboards de Grafana.

## Modelos de Despliegue

Ofrecemos tres modelos para adaptarse a la criticidad de sus cargas de trabajo:

### 1. StandAlone

Este modelo despliega una **instancia única** del motor PostgreSQL.

- **Caso de uso** : Desarrollo, pruebas o aplicaciones que no requieran alta disponibilidad.
- **Resiliencia** : Dado que el almacenamiento subyacente es persistente y está gestionado por Kubernetes, el pod puede reiniciarse automáticamente en otro nodo en caso de fallo de hardware del host.

### 2. Réplica

Este modelo despliega un **clúster de 3 instancias** PostgreSQL (un primario, dos réplicas).

- **Replicación Asíncrona** : Los datos se replican en streaming continuo (asíncrono). Esto ofrece un excelente rendimiento al tiempo que garantiza una copia de los datos en las réplicas con un retraso mínimo.
- **Failover Automático** : En caso de fallo del primario, CNPG promociona automáticamente la réplica más actualizada para garantizar la continuidad del servicio.

### 3. Empresa

Este modelo despliega un **clúster de 3 instancias** de PostgreSQL optimizado para la **alta disponibilidad crítica**.

- **Replicación Síncrona** : La replicación está configurada de forma síncrona en al menos 2 nodos (`any 2`) con garantía de durabilidad (`dataDurability: preferred`). 
- **Durabilidad** : Un `COMMIT` no se confirma a la aplicación únicamente si los datos se han escrito correctamente en el primario Y en un réplica, asegurando que ninguna transacción confirmada se perderá en caso de fallo de hardware, sin bloquear la base de datos si un nodo está temporalmente indisponible.

## Copia de seguridad y Restauración (PITR)

La protección de sus datos está garantizada por el plugin **Barman Cloud**, totalmente integrado en el operador.

1. **Archivado continuo de WAL** :
    - Cada segmento del registro de transacciones (*WAL*) se archiva en tiempo real en un Object Storage S3 certificado SecNumCloud.
    - La compresión está optimizada (ej: `lz4` o `gzip`) para reducir el volumen manteniendo un buen rendimiento.

2. **Copias de seguridad programadas (`ScheduledBackup`)** :
    - Las copias de seguridad físicas completas se ejecutan de forma programada (ej: todos los días a las 02:00).
    - Se realiza una copia de seguridad inicial inmediatamente tras la creación del clúster.

Estos mecanismos combinados permiten la **Recuperación en un punto en el tiempo (PITR)** : la capacidad de restaurar la totalidad del servidor a una fecha y hora precisas, protegiendo así contra errores humanos o corrupciones de datos.

## Seguridad en Múltiples Niveles

- **Aislamiento de Red** : Las instancias de base de datos se despliegan en espacios de nombres dedicados y están aisladas en la red privada del cliente.
- **Cifrado** :
  - **En tránsito** : Conexiones cifradas con TLS.
  - **En reposo** : Los datos de almacenamiento, así como las copias de seguridad en S3, están cifrados.
- **Secretos de Kubernetes** : Las credenciales de superusuario y de aplicación se generan de forma segura y se almacenan como Secrets de Kubernetes, recuperables según reglas estrictas.

## Tamaños de instancias (Tallas)

Las bases de datos tienen límites estrictos (CPU y RAM) que corresponden al tamaño elegido.
Los parámetros internos de PostgreSQL (`shared_buffers`, `effective_cache_size`, `work_mem`, etc.) están **precalibrados** para cada tamaño con el fin de optimizar el rendimiento y garantizar que el contenedor nunca alcance su límite de RAM (evitando así un OOMKill por parte de Kubernetes que interrumpiría bruscamente el servicio).

| Tamaño | CPU | Memoria | shared_buffers | effective_cache_size | work_mem | maintenance_work_mem | max_connections | pgbouncer_default_pool_size | pgbouncer_max_client_conn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1 Núcleo | 4 Gb | 1024MB | 3072MB | 16MB | 128MB | 80 | 8 | 200 |
| **S** | 1 Núcleo | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **M** | 2 Núcleos | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **L** | 2 Núcleos | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XL** | 4 Núcleos | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XXL** | 4 Núcleos | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **3XL** | 8 Núcleos | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **4XL** | 8 Núcleos | 64 Gb | 16384MB | 49152MB | 256MB | 2048MB | 500 | 25 | 500 |

> **Nota** : Los recursos *requests* (CPU y RAM) se asignan al 50% de los *limits* configurados anteriormente.

## Versiones de PostgreSQL Soportadas

Admitimos todas las versiones principales actuales, permitiéndole elegir según la compatibilidad de sus aplicaciones:

- **PostgreSQL 13, 14, 15, 16, 17 y 18**.

El operador CNPG gestiona las actualizaciones menores de manera fluida aplicando una estrategia de actualización progresiva (*rolling update*).