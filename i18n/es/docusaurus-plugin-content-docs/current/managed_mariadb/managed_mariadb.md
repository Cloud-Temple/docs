---
title: Visión general
---

import stack from '@site/docs/managed_mariadb/images/stack.png'
import StandAlone from '@site/docs/managed_mariadb/images/StandAlone.png'
import Distributed from '@site/docs/managed_mariadb/images/Distributed.png'
import maxscale from '@site/docs/managed_mariadb/images/maxscale.png'

# MariaDB Gestionado <span class="title-preview-badge">Vista previa</span>


<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Descubra las bases y principios esenciales para dominar nuestra infraestructura.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Explorar conceptos &rarr;</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Comience rápidamente siguiendo instrucciones claras y sencillas.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Iniciar Quickstart &rarr;</a>
  </div>
</div>

---

### Descripción general
>
> Este producto se encuentra en versión preliminar y su documentación puede contener errores o imprecisiones.

**MariaDB Managé (on Kubernetes) by Cloud Temple** es una solución gestionada del motor de base de datos MariaDB, alojada en Kubernetes. Complementa las ofertas de motores de base de datos gestionados en máquinas virtuales (denominadas aquí **MariaDB Managé (on IaaS)**)

Este producto está orientado a clientes que ejecutan cargas de trabajo en Kubernetes con bases de datos MariaDB/MySQL, o a aquellos que deseen consolidar múltiples motores de bases de datos MariaDB/PostgreSQL en un mismo clúster de Kubernetes (consolidación). Resulta especialmente adecuado para bases de datos de pequeño y mediano tamaño que no requieran optimización ni funcionalidades específicas. Para bases de datos de gran tamaño o que necesiten una optimización particular, es preferible optar por el producto **MariaDB Managé (on IaaS)**, el cual permite una mayor personalización por parte de nuestros equipos de expertos en DBA.

Los motores MariaDB pueden seleccionarse en las versiones 11.4 LTS o 11.8 LTS.

Todas las copias de seguridad utilizan el almacenamiento S3 de Cloud-Temple (certificado SNC) con cifrado en reposo.

![Pila de arquitectura](@site/docs/managed_mariadb/images/stack.png)

### Beneficios Clave

- **Soberanía y Reversibilidad** : La solución se basa exclusivamente en estándares de código abierto para evitar cualquier dependencia tecnológica y garantizar la portabilidad de sus aplicaciones.
- **Simplicidad y delegación** : La solución permite delegar en Cloud-Temple la gestión de los motores de bases de datos, en particular : actualizaciones y copias de seguridad.

## Modelos de Despliegue

Ofrecemos dos modelos de despliegue para satisfacer sus necesidades:  ***Independiente*** o ***Distribuido***.

### StandAlone

El modelo ***StandAlone*** despliega una única instancia del motor MariaDB en una infraestructura multi-AZ.

El almacenamiento utilizado por esta instancia se replica en 3 AZ y permite el reinicio automático de la instancia MariaDB en otro AZ en caso de fallo.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones simples, como CMS, que utilizan un único endpoint para conectarse a las bases de datos.
- **Puntos clave** :
  - 1 instancia del motor de base de datos
  - almacenamiento distribuido en 3 AZ para la recuperación automática en caso de fallo
  - copias de seguridad físicas (`mariabackup`) y lógicas (`mysqldump`)
  - SLA 99.9 % (excluyendo ventanas de mantenimiento)

![Arquitectura StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### Distributed

El modelo ***Distributed*** despliega un clúster de 3 instancias del motor MariaDB, con Galera en modo "single primary" y MaxScale:

- un endpoint de MaxScale permite el enrutamiento hacia las distintas instancias según el tipo de consulta (read ou write).
![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)

- la instancia de lectura-escritura (RW) es accesible mediante un endpoint específico.
- Las 2 instancias de solo lectura (RO) son accesibles mediante otro endpoint específico.

Así, las aplicaciones pueden, a su elección, utilizar conexiones RW o RO, o dejar que MaxScale enrute automáticamente hacia los endpoints más adecuados.

- **Caso de uso** : Este modelo de despliegue es ideal para aplicaciones con accesos distribuidos, como las aplicaciones de datos o inteligencia empresarial, que se benefician de accesos de solo lectura sin afectar la ingesta de datos.
- **Puntos clave** :
  - 3 instancias del motor de base de datos con Galera en modo "single primary"
  - Proxy MaxScale para un enrutamiento eficiente de las consultas.
  - almacenamiento distribuido en 3 AZ para una recuperación automática ante fallos
  - copias de seguridad PiTR y lógicas
  - SLA 99.9 % (hors plages de maintenance)

![Architecture Distributed](@site/docs/managed_mariadb/images/Distributed.png)