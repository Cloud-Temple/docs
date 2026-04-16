---
title: Descripción general
---


# MariaDB Administrado (vista previa)

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra los fundamentos y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="managed_mariadb/concepts" class="card-link">Explorar conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="managed_mariadb/quickstart" class="card-link">Iniciar Quickstart &rarr;</a>
  </div>
</div>

---

### Descripción general
>
> Este producto está en versión preliminar y su documentación puede contener errores o aproximaciones.

**MariaDB Administrado (on Kubernetes) by Cloud Temple** es una solución de motor de base de datos MariaDB administrado, alojado en Kubernetes. Complementa las ofertas de motor de base de datos administrado en máquinas virtuales (denominadas aquí **MariaDB Administrado (on IaaS)**)

Esta oferta es adecuada para clientes con cargas de trabajo de Kubernetes con bases de datos MariaDB/MySQL, o clientes que desean consolidar muchos motores de bases de datos MariaDB/PostgreSQL en un mismo clúster de Kubernetes (agrupación). Es especialmente adecuada para bases de datos de pequeño y mediano tamaño que no requieren ajustes ni características específicas. Para bases de datos de gran tamaño o que requieran un ajuste especial, es preferible optar por la oferta **MariaDB Administrado (on IaaS)**, que permite más adaptaciones por parte de nuestros equipos de expertos DBA.

Los motores MariaDB se pueden elegir en la versión 11.4 LTS o 11.8 LTS.

Todas las copias de seguridad utilizan el almacenamiento S3 de Cloud-Temple (calificado SNC) con cifrado en reposo.

![Arquitectura stack](@site/docs/managed_mariadb/images/stack.png)

### Beneficios Clave

- **Soberanía y Reversibilidad**: La solución se basa exclusivamente en estándares de código abierto para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Simplicidad y delegación**: La solución permite delegar a Cloud-Temple la gestión de los motores de bases de datos, en particular: actualizaciones y copias de seguridad.

## Modelos de Implementación

Ofrecemos dos modelos de implementación para satisfacer sus necesidades: ***StandAlone*** o ***Distributed***.

### StandAlone

El modelo ***StandAlone*** despliega una única instancia del motor MariaDB en una infraestructura multi-AZ.

El almacenamiento utilizado por esta instancia se replica en 3 zonas de disponibilidad (AZ), y permite el reinicio automático de la instancia MariaDB en otra AZ en caso de fallo.

- **Caso de uso**: Este modelo de implementación es perfectamente adecuado para aplicaciones simples, como CMS, que solo utilizan un único endpoint para conectarse a las bases de datos.
- **Puntos clave**:
  - 1 instancia de motor de base de datos
  - almacenamiento distribuido en 3 AZ para recuperación automática en caso de fallo
  - copias de seguridad físicas (`mariabackup`) y lógicas (`mysqldump`)
  - SLA 99,9 % (fuera de ventanas de mantenimiento)

![Arquitectura StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### Distributed

El modelo ***Distributed*** despliega un clúster de 3 instancias del motor MariaDB, con Galera en modo "single primary" y MaxScale:

- un endpoint MaxScale permite el enrutamiento a las diferentes instancias según el tipo de solicitud (lectura o escritura).
- la instancia de lectura-escritura (RW) es accesible a través de un endpoint específico.
- Las 2 instancias de solo lectura (RO) son accesibles a través de otro endpoint específico.

Así, las aplicaciones pueden elegir usar conexiones RW o RO, o dejar que MaxScale enrute por sí mismo hacia los endpoints más adecuados.

- **Caso de uso**: Este modelo de implementación es perfectamente adecuado para aplicaciones con accesos distribuidos, como aplicaciones de datos o de inteligencia empresarial, que se benefician de acceso de solo lectura sin impacto en la ingesta de datos.
- **Puntos clave**:
  - 3 instancias de motor de base de datos con Galera en modo "single primary"
  - Proxy MaxScale para un enrutamiento eficiente de consultas.
  - almacenamiento distribuido en 3 AZ para recuperación automática en caso de fallo
  - copias de seguridad PiTR y Lógicas
  - SLA 99,9 % (fuera de ventanas de mantenimiento)

![Arquitectura Distributed](@site/docs/managed_mariadb/images/Distributed.png)
