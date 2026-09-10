---
title: Vista general
---

# PostgreSQL Administrado <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra los fundamentos y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Explorar los conceptos →</a>
  </div>
  <div class="card">
    <h3>Guía de inicio rápido</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Iniciar el Quickstart →</a>
  </div>
</div>

---

### Descripción general

**PostgreSQL Managé (on Kubernetes) by Cloud Temple** es una solución gestionada de motor de base de datos PostgreSQL, alojada en Kubernetes y basada en el operador **CloudNative-PG (CNPG)**. Se complementa con las ofertas de motores de base de datos gestionados en máquinas virtuales (denominados aquí **PostgreSQL Managé (on IaaS)**).

Este producto está diseñado para clientes que cuentan con cargas de trabajo en Kubernetes que requieren bases de datos PostgreSQL, o para aquellos que desean consolidar múltiples motores de bases de datos PostgreSQL en un mismo clúster de Kubernetes. Es especialmente adecuado para bases de datos que no requieren un ajuste de sistema ultraespecífico. Para bases de datos de muy gran tamaño que requieran configuraciones específicas del sistema operativo, es preferible optar por el producto **PostgreSQL Managé (on IaaS)**.

### Beneficios Clave

- **Soberanía y Reversibilidad** : La solución se basa exclusivamente en estándares de código abierto (CNPG, Barman) para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Simplicidad y delegación** : La solución permite delegar en Cloud Temple la gestión del ciclo de vida de los motores de bases de datos: aprovisionamiento, actualizaciones y respaldos continuos.

## Modelos de Despliegue

Ofrecemos tres modelos de despliegue para satisfacer sus necesidades, desde pruebas de desarrollo hasta alta disponibilidad crítica:

### StandAlone

El modelo ***StandAlone*** despliega una única instancia del motor PostgreSQL.

- **Caso de uso** : Este modelo es perfectamente adecuado para el desarrollo, los entornos de preproducción o las aplicaciones simples que no requieren alta disponibilidad.
- **Puntos clave** :
  - 1 sola instancia de base de datos.
  - Sin alta disponibilidad a nivel del motor (aunque Kubernetes puede reiniciar el pod en caso de fallo de nodo).
  - Copias de seguridad continuas (Barman Cloud).

### Replica

El modelo ***Replica*** despliega un clúster de 3 instancias del motor PostgreSQL con replicación en streaming (asíncrona).

- **Caso de uso** : Este modelo ofrece alta disponibilidad estándar para la mayoría de las aplicaciones de producción, donde un ligero desfase (unos pocos milisegundos) entre el primario y las réplicas es aceptable.
- **Puntos clave** :
  - 3 instancias de base de datos.
  - Replicación asíncrona (alta disponibilidad).
  - Failover automático gestionado por el operador CNPG.

### Empresa

El modelo ***Empresa*** despliega un cluster de 3 instancias del motor PostgreSQL con **replicación síncrona** y garantía de durabilidad de los datos.

- **Caso de uso** : Diseñado para cargas de trabajo críticas donde no se tolera ninguna pérdida de datos en caso de fallo de hardware.
- **Puntos clave** :
  - 3 instancias de base de datos.
  - Replicación síncrona configurada para garantizar que al menos 2 réplicas hayan persistido los datos antes de confirmar un `COMMIT` (modo *preferred* para evitar bloqueos si un réplica está indisponible).
  - Garantía máxima de consistencia y durabilidad.

## Tipos de Motores Disponibles

La solución permite desplegar diferentes tipos de instancias de PostgreSQL según sus necesidades:

- **PostgreSQL standard** : El motor de base de datos relacional clásico.
- **TimescaleDB** : PostgreSQL con la extensión TimescaleDB para la gestión optimizada de series temporales (Time-Series).
- **PostGIS** : PostgreSQL con la extensión espacial PostGIS para datos geográficos.

## Características comunes

#### Versiones

Los motores de PostgreSQL están disponibles en todas las versiones principales admitidas (actualmente de la versión **13 a 18**).
Extensiones como `pg-crash`, `pgaudit`, `pgvector` y `postgis` están disponibles en las imágenes.

#### Copia de seguridad

Las copias de seguridad se gestionan de forma nativa mediante el plugin **Barman Cloud** integrado en el operador :

- **Archivado continuo de WAL** : Cada segmento del registro de transacciones (WAL) se archiva en tiempo real en nuestro almacenamiento S3 certificado SecNumCloud.
- **Copias de seguridad programadas** : Se realizan copias de seguridad completas (Point-in-Time Recovery) de forma periódica según sus requisitos de retención.
- **Seguridad** : Todos los datos de copia de seguridad se comprimen y almacenan en nuestra infraestructura S3 segura con cifrado.