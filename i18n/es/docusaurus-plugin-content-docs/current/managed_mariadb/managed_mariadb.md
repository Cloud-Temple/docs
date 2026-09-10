---
title: Vista general
---

# MariaDB Administrado <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra los fundamentos y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Explorar los conceptos →</a>
  </div>
  <div class="card">
    <h3>Guía de inicio rápido</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Iniciar el Quickstart →</a>
  </div>
</div>

---

### Vista general

**MariaDB Administrado (on Kubernetes) by Cloud Temple** es una solución administrada de motor de base de datos MariaDB, alojada en Kubernetes. Se complementa con las ofertas de motores de base de datos administrados en máquinas virtuales (nommées ici **MariaDB Managé (on IaaS)**)

Este producto está diseñado para clientes que disponen de cargas de trabajo en Kubernetes con bases de datos MariaDB/MySQL, o para clientes que desean compartir múltiples motores de bases de datos MariaDB en un mismo clúster de Kubernetes (mutualisation). Es especialmente adecuado para bases de datos de pequeña y mediana escala que no requieran ajuste fino (tuning) ni funciones específicas. Para bases de datos de gran escala o que requieran un ajuste fino particular, es preferible optar por el producto **MariaDB Administrado (on IaaS)** que permite mayores adaptaciones por parte de nuestros equipos de expertos DBA.

Los motores MariaDB pueden seleccionarse en la versión 11.4 LTS o 11.8 LTS.

Todas las copias de seguridad utilizan el almacenamiento S3 de Cloud-Temple (qualifié SNC) con cifrado en reposo.

![Architecture stack](@site/docs/managed_mariadb/images/stack.png)

### Beneficios Clave

- **Soberanía y Reversibilidad** : La solución se basa exclusivamente en estándares open source para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Simplicidad y delegación** : La solución permite delegar en Cloud-Temple la gestión de los motores de bases de datos, en particular: actualizaciones y copias de seguridad.

## Modelos de Despliegue

Ofrecemos dos modelos de despliegue para satisfacer sus necesidades:  ***StandAlone*** o ***MultiAZ***.

### StandAlone

El modelo ***StandAlone*** despliega una única instancia del motor MariaDB en una infraestructura multi-AZ.

El almacenamiento utilizado por esta instancia se replica en 3 AZ, lo que permite un reinicio automático de la instancia MariaDB en otra AZ en caso de fallo.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones sencillas, como CMS, que utilizan un único endpoint para conectarse a las bases de datos.
- **Puntos clave** :
  - 1 instancia de motor de base de datos
  - almacenamiento distribuido en 3 AZ para recuperación automática en caso de fallo
  - copias de seguridad físicas (`mariabackup`) y lógicas (`mysqldump`)
  - SLA del 99,9 % (excluyendo ventanas de mantenimiento)

![Arquitectura StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### MultiAZ

El modelo ***MultiAZ*** despliega un clúster de 3 instancias del motor MariaDB, con Galera en modo "single primary" y MaxScale:

- un endpoint MaxScale permite el enrutamiento hacia las diferentes instancias según el tipo de consulta (read ou write).
  ![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)
- la instancia de lectura-escritura (RW) es accesible a través de un endpoint específico.
- Las 2 instancias de solo lectura (RO) son accesibles a través de otro endpoint específico.

Así, las aplicaciones pueden optar por utilizar conexiones RW o RO, o dejar que MaxScale enrute automáticamente hacia los endpoints más adecuados.

- **Casos de uso** : Este modelo de despliegue es ideal para aplicaciones con accesos distribuidos, como aplicaciones de datos o de inteligencia empresarial, que se benefician de accesos de solo lectura sin impacto en la ingestión de datos.
- **Puntos clave** :
  - 3 Instancias del motor de base de datos con Galera en modo "single primary"
  - Proxy MaxScale para un enrutamiento eficiente de las consultas.
  - almacenamiento distribuido en 3 AZ para recuperación automática en caso de fallo
  - copias de seguridad físicas (`mariabackup`) y lógicas (`mysqldump`)
  - SLA del 99.9 % (hors plages de maintenance)

![Architecture MultiAZ](@site/docs/managed_mariadb/images/Distributed.png)