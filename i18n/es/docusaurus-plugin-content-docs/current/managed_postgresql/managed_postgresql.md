---
title: Descripción general
---

# PostgreSQL Administrado (vista previa)

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra los fundamentos y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="managed_postgresql/concepts" class="card-link">Explorar conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="managed_postgresql/quickstart" class="card-link">Iniciar Quickstart &rarr;</a>
  </div>
</div>

---

### Descripción general
>
> Este producto está en versión preliminar y su documentación puede contener errores o aproximaciones.

**PostgreSQL Administrado (on Kubernetes) by Cloud Temple** es una solución de motor de base de datos PostgreSQL administrado, alojado en Kubernetes. Complementa las ofertas de motor de base de datos administrado en máquinas virtuales (denominadas aquí **PostgreSQL Administrado (on IaaS)**)

Esta oferta es adecuada para clientes que tienen cargas de trabajo de Kubernetes que requieren bases de datos PostgreSQL, o clientes que desean consolidar muchos motores de bases de datos PostgreSQL en un mismo clúster de Kubernetes (agrupación). Es especialmente adecuada para bases de datos de pequeño y mediano tamaño que no requieren ajustes ni características específicas. Para bases de datos de gran tamaño o que requieran un ajuste especial, es preferible optar por la oferta **PostgreSQL Administrado (on IaaS)**, que permite más adaptaciones por parte de nuestros equipos de expertos DBA.

### Beneficios Clave

- **Soberanía y Reversibilidad**: La solución se basa exclusivamente en estándares de código abierto para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Simplicidad y delegación**: La solución permite delegar a Cloud-Temple la gestión de los motores de bases de datos, en particular: actualizaciones y copias de seguridad.

## Modelos de Implementación

Ofrecemos dos modelos de implementación para satisfacer sus necesidades: ***StandAlone*** o ***Distributed***.

### StandAlone

El modelo ***StandAlone*** despliega una única instancia del motor PostgreSQL en una infraestructura multi-AZ.

El almacenamiento utilizado por esta instancia se replica en 3 zonas de disponibilidad (AZ), y permite el reinicio automático de la instancia PostgreSQL en otra AZ en caso de fallo.

- **Caso de uso**: Este modelo de implementación es perfectamente adecuado para aplicaciones simples, como CMS, que solo utilizan un único endpoint para conectarse a las bases de datos.
- **Puntos clave**:
  - 1 instancia de motor de base de datos
  - almacenamiento distribuido en 3 AZ para recuperación automática en caso de fallo
  - copias de seguridad físicas y lógicas
  - SLA 99,9 % (fuera de ventanas de mantenimiento)

### Distributed

El modelo ***Distributed*** despliega un clúster de 3 instancias del motor PostgreSQL, con Patroni en modo "single primary" y PgBouncer:

- un endpoint PgBouncer permite el enrutamiento a las diferentes instancias según el tipo de solicitud (lectura o escritura).
- la instancia de lectura-escritura (RW) es accesible a través de un endpoint específico.
- Las instancias de solo lectura (RO) son accesibles a través de otro endpoint específico.

Así, las aplicaciones pueden elegir usar conexiones RW o RO, o dejar que PgBouncer enrute por sí mismo hacia los endpoints más adecuados.

- **Caso de uso**: Este modelo de implementación es perfectamente adecuado para aplicaciones con accesos distribuidos, como aplicaciones de datos o de inteligencia empresarial, que se benefician de acceso de solo lectura sin impacto en la ingesta de datos.
- **Puntos clave**:
  - 3 instancias de motor de base de datos con Patroni en modo "single primary"
  - Proxy PgBouncer para un enrutamiento eficiente de consultas.
  - almacenamiento distribuido en 3 AZ para recuperación automática en caso de fallo
  - copias de seguridad PiTR y Lógicas
  - SLA 99,9 % (fuera de ventanas de mantenimiento)

### Características comunes

#### Versiones

Los motores PostgreSQL se pueden elegir entre todas las versiones compatibles (actualmente de la 14 a la 18) [Ver "política de versiones" en el sitio web oficial de PostgreSQL](https://www.postgresql.org/support/versioning/)

#### Copia de seguridad

Se implementan 2 tipos de copias de seguridad:

- Point in Time Restoration (PiTR): copia de seguridad física diaria del motor completo y sus registros de transacciones (WAL), que permite restaurar todo el servidor a una fecha anterior precisa sin perder transacciones.
- Copia de seguridad lógica (pg_dump): exportaciones lógicas de bases de datos, para restauración/exportación individual por base de datos.

Todas las copias de seguridad utilizan el almacenamiento S3 de Cloud-Temple (calificado SNC) con cifrado en reposo.
