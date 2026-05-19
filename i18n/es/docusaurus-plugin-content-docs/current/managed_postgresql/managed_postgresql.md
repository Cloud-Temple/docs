---
title: Visión general
---

# PostgreSQL Gestionado <span class="title-preview-badge">Vista previa</span>

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra las bases y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Explorar conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Iniciar el inicio rápido &rarr;</a>
  </div>
</div>

---

### Resumen
>
> Este producto está en versión preliminar y su documentación puede contener errores o imprecisiones.

**PostgreSQL Managé (on Kubernetes) by Cloud Temple** es una solución gestionada del motor de base de datos PostgreSQL, alojada en Kubernetes. Se ofrece como complemento a las ofertas de motores de base de datos gestionados en máquinas virtuales (denominadas aquí **PostgreSQL Managé (on IaaS)**)

Este producto está diseñado para clientes que tienen cargas de trabajo en Kubernetes que requieren bases de datos PostgreSQL, o para clientes que desean compartir múltiples motores de bases de datos PostgreSQL en un mismo clúster de Kubernetes (compartición). Es especialmente adecuado para bases de datos de pequeño y mediano tamaño que no requieran tuning ni funcionalidades específicas. Para bases de datos de gran tamaño o que requieran un tuning particular, es preferible optar por el producto **PostgreSQL Managé (on IaaS)**, que permite más adaptaciones por parte de nuestros equipos de expertos en DBA.

### Beneficios Clave

- **Soberanía y Reversibilidad** : La solución se basa exclusivamente en estándares de código abierto para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Simplicidad y delegación** : La solución permite delegar en Cloud-Temple la gestión de los motores de bases de datos, en particular : actualizaciones y copias de seguridad.

## Modelos de Despliegue

Ofrecemos dos modelos de despliegue para satisfacer sus necesidades:  ***Independiente*** o ***Distribuido***.

### StandAlone

El modelo ***StandAlone*** despliega una única instancia del motor PostgreSQL en una infraestructura multi-AZ.

El almacenamiento utilizado por esta instancia se replica en 3 AZ y permite el reinicio automático de la instancia PostgreSQL en otra AZ en caso de fallo.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones simples, como CMS, que utilizan un único endpoint para conectarse a las bases de datos.
- **Puntos clave** :
  - 1 instancia del motor de base de datos
  - almacenamiento distribuido en 3 AZ para una recuperación automática en caso de fallo
  - copias de seguridad físicas y lógicas
  - SLA 99,9 % (fuera de ventanas de mantenimiento)

### Distributed

El modelo ***Distributed*** despliega un clúster de 3 instancias del motor PostgreSQL, con Patroni en modo "single primary" y PgBouncer:

- un endpoint de PgBouncer permite el enrutamiento hacia las distintas instancias según el tipo de consulta (read o write).
- la instancia de lectura-escritura (RW) es accesible a través de un endpoint específico.
- Las instancias de solo lectura (RO) son accesibles a través de otro endpoint específico.

De este modo, las aplicaciones pueden optar por utilizar conexiones RW o RO, o dejar que PgBouncer enrute automáticamente hacia los endpoints más adecuados.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones con accesos distribuidos, como las aplicaciones de datos o de inteligencia empresarial, que se benefician de accesos de solo lectura sin afectar la ingesta de datos.
- **Puntos clave** :
  - 3 instancias del motor de base de datos con Patroni en modo "single primary"
  - Proxy PgBouncer para un enrutamiento eficiente de las consultas.
  - almacenamiento distribuido en 3 AZ para una recuperación automática en caso de fallo
  - copias de seguridad PiTR y lógicas
  - SLA 99.9 % (fuera de las ventanas de mantenimiento)

### Funcionalidades comunes

#### Versiones

Los motores de PostgreSQL pueden elegirse entre todas las versiones compatibles (actualmente de la 14 a la 18) [Consulte la "política de versionado" en el sitio oficial de PostgreSQL](https://www.postgresql.org/support/versioning/)

#### Copia de seguridad

Se implementan 2 tipos de copias de seguridad:

- Restauración en un punto en el tiempo (PiTR) : copia de seguridad física diaria de todo el motor y sus registros de transacciones (WAL), que permite restaurar todo el servidor a una fecha concreta anterior sin pérdida de transacciones.
- Copia de seguridad lógica (pg_dump) : exportaciones lógicas de las bases de datos, para una restauración/exportación individual por base de datos.

Todas las copias de seguridad utilizan el almacenamiento S3 Cloud-Temple (cualificado SNC) con cifrado at-rest.