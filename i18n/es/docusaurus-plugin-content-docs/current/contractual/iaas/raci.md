---
title: Matriz de responsabilidad IaaS
displayed_sidebar: docSidebar
---


Aquí se presenta el modelo **RACI** que define la asignación de responsabilidades entre el cliente y Cloud Temple para el uso de las infraestructuras IaaS de Cloud Temple.

## Definición de los diferentes roles

Aquí se recuerdan los diferentes roles del RACI:

| Rol          | Descripción                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realiza  | __R__ealiza el proceso                                                                |
| (A) Aprueba  | __A__prueba la realización del proceso                                               |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado| __I__nformado de los resultados del proceso (vía las herramientas, el portal o la mensajería) |

## Definición de su necesidad

| Actividad                                                                                       | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Definir la arquitectura global de su plataforma Cloud Temple                                    | **RA**          | **CI**              |
| Definir el número de tenants y el número de zonas de disponibilidad para cada tenant            | **RA**          | **CI**              |
| Definir su estrategia global de recuperación o continuidad del negocio                          | **RA**          | **CI**              |
| Dimensionar correctamente su plataforma Cloud Temple (cálculo, almacenamiento, red, copia de seguridad,...) | **RA**          | **CI**              |
| Suscribirse a los servicios con la información necesaria                                        | **RA**          | **I**               |

## Implementación inicial de sus tenants en Cloud Temple

| Actividad                                                                                                    | Rol del Cliente | Rol de Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Garantizar la implementación de los **datacenters físicos**                                                  |                 | **RA**              |
| Garantizar la implementación de las infraestructuras de **cálculo**                                          | **I**           | **RA**              |
| Garantizar la implementación de las infraestructuras de **almacenamiento**                                   | **I**           | **RA**              |
| Garantizar la implementación de la conectividad a la **red backbone(1)**                                     | **I**           | **RA**              |
| Adquirir y mantener las licencias de software esenciales para el funcionamiento de la plataforma Cloud Temple |                 | **RA**              |
| Implementar la configuración base de sus tenants de Cloud Temple                                             | **CI**          | **RA**              |
| Implementar la configuración inicial para el servicio de copia de seguridad                                  | **CI**          | **RA**              |
| *Si están suscritos:* implementar la configuración de red inicial para los servicios de Internet y Firewall  | **CI**          | **RA**              |
| Ofrecer la asistencia necesaria para la puesta en marcha de sus entornos Cloud Temple                        | **I**           | **RA**              |
| Realizar los ajustes de configuración finales del servicio después de su entrega                             | **RA**          | **C**               |
| Configurar un repositorio de autenticación externa para la consola Cloud Temple                              | **RA**          | **C**               |
| Crear los usuarios de cada tenant en la consola Cloud Temple y asignar los permisos                          | **RA**          |                     |
| Validar la conformidad de la plataforma entregada con el marco de referencia SecNumCloud                     | **I**           | **RA**              |
| Validar la conformidad de la plataforma entregada con las especificaciones requeridas                        | **RA**          | **CI**              |

*(1) La red backbone constituye la infraestructura central de Cloud Temple, ofreciendo una columna vertebral sobre la que se sustentan las redes específicas de los clientes, las cuales están integradas y gestionadas por esta infraestructura principal.*

## Integrar su sistema de información en sus entornos Cloud Temple

| Actividad                                                                                                                      | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Crear, instalar y actualizar sus máquinas virtuales                                                                            | **RA**          |                     |
| Instalar y configurar software y middlewares en sus máquinas virtuales                                                         | **RA**          |                     |
| Comprar y poseer las licencias y derechos de uso para los sistemas operativos de sus máquinas virtuales                        | **RA**          |                     |
| Configurar la red para cada una de sus máquinas virtuales                                                                      | **RA**          |                     |
| Asegurarse de que cada máquina virtual esté asociada a un plan de copia de seguridad coherente                                 | **RA**          | **C**               |
| Asegurarse de que cada máquina virtual esté asociada a un plan de recuperación ante desastres o de continuidad del negocio coherente | **RA**          | **C**               |
| Implementar una estrategia de protección antivirus en sus máquinas virtuales                                                   | **RA**          |                     |
| Implementar una solución de telemetría y supervisión en sus máquinas virtuales                                                 | **RA**          |                     |
| Definir la política de TAG de sus máquinas virtuales                                                                           | **RA**          |                     |

## Operaciones recurrentes

### Gestión de accesos e identidades

| Actividad                                                                                                                             | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantizar la accesibilidad del servicio Console Cloud Temple y de la API asociada                                                         |             | **RA**            |
| Garantizar la accesibilidad del sistema de información desplegado en sus máquinas virtuales                                                 | **RA**      |                   |
| Gestionar las habilitaciones físicas y lógicas de los equipos de Cloud Temple en las infraestructuras SecNumCloud.                              |             | **RA**            |
| Administrar los accesos y la política de seguridad asociada a la interfaz de la consola Cloud Temple y a su API                | **RA**      |                   |
| Administrar los accesos y la política de seguridad asociada al sistema de información alojado en sus tenants de Cloud Temple | **RA**      |                   |

### Mantenimiento en condiciones operativas y de seguridad

Las actividades destinadas a mantener en condiciones operativas y de seguridad las infraestructuras y servicios
ofrecidos por Cloud Temple, en el marco de su oferta IaaS, se realizan con el objetivo de cumplir con la certificación SecNumCloud.

| Actividad                                                                                                          | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **centros de datos físicos**         | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **centros de datos físicos**       | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **cómputo**                         | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **cómputo (2)**                   | **RA**      | **CI**           |
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **almacenamiento**                  | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **almacenamiento**                | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **redes backbone**                  | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **redes backbone**               | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones operativas de las máquinas virtuales desplegadas en los tenants del cliente **(3)** | **RA**      |                  |
| Garantizar el mantenimiento en condiciones de seguridad de las máquinas virtuales desplegadas en los tenants del cliente **(3)** | **RA**      |                  |
| Garantizar el mantenimiento en condiciones operativas de los middleware desplegados en los tenants del cliente    | **RA**      |                  |
| Garantizar el mantenimiento en condiciones de seguridad de los middleware desplegados en los tenants del cliente  | **RA**      |                  |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hipervisores.
No obstante, dado que Cloud Temple no está informado de las especificidades de sus entornos de producción y de los requisitos
relacionados con sus cargas de trabajo, **la decisión de proceder a la actualización del sistema operativo de sus hipervisores,
lo que implica un reinicio, le corresponde a usted**. Esta operación puede realizarse a través de la consola Cloud Temple o mediante la API.
Hay servicios profesionales disponibles si desea que Cloud Temple gestione ciertas operaciones.*

*(3) Cloud Temple ofrece packs de licencias para firewalls (Fortinet, Stormshield) y equilibradores de carga (HAProxy), y
trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. No obstante,
la responsabilidad del mantenimiento en condiciones operativas y de seguridad recae en usted durante la fase de operación
continua. Hay servicios profesionales disponibles si desea que Cloud Temple gestione ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades

| Actividad                                                                                                              | Rol del Cliente | Rol Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-----------------|------------------|
| Gestionar incidentes en las infraestructuras de **centros de datos físicos**                                                 | **I**       | **RA**            |
| Gestionar problemas en las infraestructuras de **centros de datos físicos**                                                 |                 | **RA**            |
| Gestionar capacidades en las infraestructuras de **centros de datos físicos**                                                 |                 | **RA**            |
| Gestionar incidentes en las infraestructuras de **cálculo**                                                                | **I**       | **RA**            |
| Gestionar problemas en las infraestructuras de **cálculo**                                                                |                 | **RA**            |
| Gestionar capacidades en las infraestructuras de **cálculo**                                                                | **RA**      | **CI**            |
| Gestionar incidentes en las infraestructuras de **almacenamiento**                                                              | **I**       | **RA**            |
| Gestionar problemas en las infraestructuras de **almacenamiento**                                                              |                 | **RA**            |
| Gestionar capacidades en las infraestructuras de **almacenamiento**                                                              | **RA**      | **CI**            |
| Gestionar incidentes en las infraestructuras de **red troncal**                                                       | **I**       | **RA**            |
| Gestionar problemas en las infraestructuras de **red troncal**                                                       |                 | **RA**            |
| Gestionar capacidades en las infraestructuras de **red troncal**                                                       |                 | **RA**            |
| Implementar una nueva máquina virtual o crear un nuevo entorno de aplicación dentro de un tenant cliente | **RA**      |                  |
| Modificar la configuración de las máquinas virtuales implementadas                                                           | **RA**      |                  |
| Eliminar una máquina virtual implementada                                                                              | **RA**      |                  |
| Tomar la decisión de agregar, modificar o retirar recursos en la plataforma Cloud Temple                | **RA**      | **CI**            |
| Ejecutar la decisión de modificación de recursos en la plataforma Cloud Temple                                    | **I**       | **RA**            |
| Aplicar etiquetas a las máquinas virtuales conforme a la política definida                                        | **RA**      |                  |

### Gestión del rendimiento

| Actividad                                                                                                                                              | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Garantizar la supervisión del correcto funcionamiento y la fiabilidad de todos los equipos implicados en la prestación del servicio cualificado SecNumCloud | **I**       | **RA**           |
| Garantizar el seguimiento del rendimiento de los recursos físicos de cálculo, almacenamiento y red puestos a disposición de sus tenants **(4)**          | **RI**      | **A**            |
| Supervisar el rendimiento de las máquinas virtuales que soportan sus entornos                                                                         | **RA**      | **I**            |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en **la provisión de infraestructuras dedicadas** para las necesidades de **cálculo** (con laminas físicas), de **almacenamiento** (vía LUNs dedicadas en las SANs)
y de **red** (incluyendo cortafuegos y balanceadores de carga). Estos recursos dedicados se ponen a disposición del cliente, cuyo uso
y la carga resultante dependen directamente del uso que haga de ellos. Corresponde por tanto al cliente implementar y gestionar los sistemas de supervisión
y de metrología necesarios para garantizar el seguimiento del funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y la recuperación ante desastres en la copia de seguridad integrada

| Actividad                                                                                                                                  | Rol del Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------|
| Asegurar el mantenimiento operativo de las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple **(5)** |                 | **RA**           |
| Asegurar el mantenimiento de seguridad de las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple         | **I**           | **RA**           |
| Gestionar los incidentes en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                      | **I**           | **RA**           |
| Gestionar los problemas en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                       |                 | **RA**           |
| Gestionar la capacidad en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                        | **AI**          | **RC**           |
| Asegurar el mantenimiento operativo de la solución de copia de seguridad elegida por el cliente dentro de sus tenants **(6)**             | **RA**          |                  |
| Asegurar el mantenimiento de seguridad de la solución de copia de seguridad elegida por el cliente dentro de sus tenants                 | **RA**          |                  |
| Gestionar los incidentes en la solución de copia de seguridad elegida por el cliente dentro de sus tenants                               | **RA**          |                  |
| Gestionar los problemas en la solución de copia de seguridad elegida por el cliente dentro de sus tenants                                | **RA**          |                  |
| Gestionar la capacidad en la solución de copia de seguridad elegida por el cliente dentro de sus tenants                                 | **RA**          | **CI**           |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                        | **RA**          |                  |
| Asegurar que las políticas de copia de seguridad sean coherentes con el ciclo de vida de los datos                                       | **RA**          |                  |
| Asegurar que los planes de continuidad o recuperación ante desastres sean coherentes con el ciclo de vida de los datos                   | **RA**          |                  |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de copia de seguridad                                              | **RA**          |                  |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de recuperación ante desastres o continuidad de actividad      | **RA**          | **CI**           |

*(5) Al 1 de enero de 2024, la solución de copia de seguridad integrada en la plataforma Cloud Temple es IBM Spectrum Protect Plus.
Esta solución está completamente automatizada y puede gestionarse a través de la consola Cloud Temple o la API Cloud Temple.*

### Gestión de la copia de seguridad y la recuperación ante desastres para plataformas de terceros dentro de un tenant de cliente

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantizar el mantenimiento operativo de la solución de copia de seguridad elegida dentro de sus tenants por el cliente **(6)**       | **RA**      |                   |
| Garantizar el mantenimiento de seguridad de la solución de copia de seguridad elegida dentro de sus tenants por el cliente                  | **RA**      |                   |
| Gestionar los incidentes en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | **RA**      |                   |
| Gestionar los problemas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | **RA**      |                   |
| Gestionar la capacidad de la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | **RA**      | **CI**            |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                                      | **RA**      |                   |
| Asegurarse de que las políticas de copia de seguridad sean coherentes con el ciclo de vida de los datos                                              | **RA**      |                   |
| Asegurarse de que los planes de continuidad de negocio o de recuperación ante desastres sean coherentes con el ciclo de vida de los datos                | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de copia de seguridad                                                   | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de recuperación ante desastres o de continuidad de negocio          | **RA**      | **CI**            |

*(6) Esto se refiere a cualquier solución de copia de seguridad adicional implementada en los entornos del cliente y gestionada por este.
Cloud Temple ofrece servicios profesionales para aquellos que deseen delegar ciertas operaciones en Cloud Temple.*

### Gestión de la documentación y del contrato

| Actividad                                                                                                                                                        | Rol del Cliente | Rol de Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantizar la gestión comercial y contractual del cliente, incluyendo la elaboración de presupuestos, el procesamiento de pedidos y la gestión de la facturación       | **I**       | **RA**            |
| Garantizar el seguimiento contractual del servicio, incluyendo la validación de presupuestos, el seguimiento de las entregas y el control de la facturación                   | **RA**      | **I**             |
| Garantizar el mantenimiento y la disponibilidad del inventario de recursos proporcionados por Cloud Temple relacionados con la oferta SecNumCloud                              | **I**       | **RA**            |
| Garantizar el mantenimiento y la disponibilidad de la documentación técnica relacionada con la oferta SecNumCloud                                                    | **I**       | **RA**            |
| Garantizar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en sus entornos Cloud Temple a través de su CMDB (Base de Datos de Gestión de Configuración) | **RA**      |                   |
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API de Cloud Temple                                                          | **RA**      |                   |

### Gestión de registros

| Actividad                                                                                                                 | Rol del Cliente | Rol de Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conservar y poner a disposición los registros de la plataforma IaaS Cloud Temple **(7)**                                |             | **RA**            |
| Conservar y poner a disposición los registros del sistema de información alojado en sus tenants de Cloud Temple | **RA**      |                   |

*(7) Al 1 de enero de 2024, la duración de retención de los registros de la plataforma es de un año.*

## Conectividad a la red del cliente (MPLS, fibra dedicada, IPsec, ...)

| Actividad                                                                                             | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Contratar una conectividad de red de operador para acceder a un datacenter físico de Cloud Temple (8) | **RA**          | **CI**              |
| Gestionar el plan de direccionamiento IP                                                              | **RA**          | **I**               |
| Gestionar incidentes en los enlaces de red de operadores del cliente                                  | **RA**          |                     |
| Gestionar problemas en los enlaces de red de operadores del cliente                                   | **RA**          | **CI**              |
| Gestionar la capacidad de los enlaces de red de operadores del cliente                                | **RA**          | **CI**              |

*(8) Cloud Temple asume la responsabilidad de la red en lo que respecta a su infraestructura backbone, sus puntos de agregación, así como los puntos de interconexión del datacenter, garantizando así la conectividad entre estos puntos y su red backbone. En la oferta de alojamiento en rack físico, Cloud Temple asume la responsabilidad a partir del equipo ubicado en la parte superior del rack, comúnmente denominado "top of rack".*

## Reversibilidad

| Actividad                                                                                                                                                                                       | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Planificar el proyecto de reversibilidad y seleccionar las infraestructuras objetivo                                                                                                                     | **RA**      | **I**             |
| Implementar las operaciones de transición, ya sea que impliquen una extracción manual, el uso de API o cualquier otro método de terceros compatible con la plataforma Cloud Temple. | **RA**      | **I**             |
| Transferir los datos mientras se controlan los impactos de la migración en la calidad del servicio proporcionado por el sistema de información del cliente.                                      | **RA**      |                   |
| Proceder al desmantelamiento de las configuraciones de la Nube Privada y de las opciones asociadas al cliente, tras la finalización del contrato.                                                  | **I**       | **RA**            |
| Realizar la eliminación segura de los datos en los soportes de almacenamiento y proporcionar un certificado                                                                                             | **I**       | **RA**            |