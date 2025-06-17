---
title: Matriz de responsabilidad IaaS
---

Aquí se presenta el modelo **RACI** que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las infraestructuras IaaS de Cloud Temple.

## Definición de los diferentes roles

A continuación, se recuerdan los diferentes roles del RACI:

| Rol          | Descripción                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realiza  | __R__ealiza el proceso                                                                |
| (A) Aprueba  | __A__prueba la realización del proceso                                                |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado| __I__nformado de los resultados del proceso (a través de la herramienta, el portal o la mensajería) |

## Definición de su necesidad

| Actividad                                                                                       | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|------------------|
| Definir la arquitectura global de su plataforma Cloud Temple                                    | **RA**      | **CI**           |
| Definir el número de tenants y el número de zonas de disponibilidad para cada tenant          | **RA**      | **CI**           |
| Definir su estrategia global de recuperación o continuidad de actividad                         | **RA**      | **CI**           |
| Dimensionar correctamente su plataforma Cloud Temple (cálculo, almacenamiento, red, backup, etc.) | **RA**      | **CI**           |
| Suscribirse a los servicios con la información necesaria                                       | **RA**      | **I**            |

## Implementación inicial de sus tenants Cloud Temple

| Actividad                                                                                                     | Rol Cliente | Rol Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Garantizar la implementación de los **datacenters físicos**                                                   |             | **RA**           |
| Garantizar la implementación de las infraestructuras **cálculo**                                               | **I**       | **RA**           |
| Garantizar la implementación de las infraestructuras **almacenamiento**                                        | **I**       | **RA**           |
| Garantizar la implementación de la conectividad al **red backbone(1)**                                        | **I**       | **RA**           |
| Adquirir y mantener las licencias de software esenciales para el funcionamiento de la plataforma Cloud Temple |             | **RA**           |
| Implementar la configuración básica de sus tenants Cloud Temple                                                | **CI**      | **RA**           |
| Implementar la configuración inicial para el servicio de backup                                                | **CI**      | **RA**           |
| *Si están suscritos:* implementar la configuración de red inicial para los servicios Internet y Firewall     | **CI**      | **RA**           |
| Ofrecer la asistencia requerida para la puesta en marcha de sus entornos Cloud Temple                          | **I**       | **RA**           |
| Realizar los ajustes finales de configuración del servicio después de su entrega                              | **RA**      | **C**            |
| Configurar un repositorio de autenticación externa para la consola Cloud Temple                                | **RA**      | **C**            |
| Crear los usuarios de cada tenant en la consola Cloud Temple y asignar los permisos                          | **RA**      |                  |
| Validar la conformidad de la plataforma entregada con el repositorio SecNumCloud                              | **I**       | **RA**           |
| Validar la conformidad de la plataforma entregada con las especificaciones requeridas                           | **RA**      | **CI**           |

*(1) La red backbone constituye la infraestructura central de Cloud Temple, ofreciendo una columna vertebral sobre la que reposan las redes cliente específicas, las cuales se integran y se gestionan mediante esta infraestructura principal.*

## Integrar su sistema de información en sus entornos Cloud Temple

| Actividad                                                                                                                      | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Crear, instalar, actualizar sus máquinas virtuales                                                                             | **RA**      |                  |
| Instalar y configurar los software y middlewares en sus máquinas virtuales                                                      | **RA**      |                  |
| Comprar y poseer las licencias y derechos de uso <br/>para los sistemas operativos de sus máquinas virtuales                   | **RA**      |                  |
| Configurar la red para cada una de sus máquinas virtuales                                                                      | **RA**      |                  |
| Asegurarse de que cada máquina virtual esté asociada a un plan de backup coherente                                           | **RA**      | **C**            |
| Asegurarse de que cada máquina virtual esté asociada a un <br/>plan de recuperación de actividad o continuidad de actividad coherente | **RA**      | **C**            |
| Implementar una estrategia de protección antivirus en sus máquinas virtuales                                                    | **RA**      |                  |
| Implementar una solución de metrología y supervisión en sus máquinas virtuales                                                  | **RA**      |                  |
| Definir la política de TAG de sus máquinas virtuales                                                                           | **RA**      |                  |

## Operaciones recurrentes

### Gestión de accesos e identidades

| Actividad                                                                                                                             | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Garantizar la accesibilidad del servicio Consola Cloud Temple y de la API asociada                                                   |             | **RA**           |
| Garantizar la accesibilidad del sistema de información desplegado en sus máquinas virtuales                                            | **RA**      |                  |
| Gestionar las habilitaciones físicas y lógicas de los equipos Cloud Temple en las infraestructuras SecNumCloud.                      |             | **RA**           |
| Administrar los accesos y la política de seguridad asociada con la interfaz de la consola Cloud Temple y su API                | **RA**      |                  |
| Administrar los accesos y la política de seguridad asociada con el sistema de información<br/> alojado dentro de sus tenants Cloud Temple | **RA**      |                  |

### Mantenimiento en condiciones operativas y de seguridad

Las actividades destinadas a mantener en condiciones operativas y seguras las infraestructuras y servicios ofrecidos por Cloud Temple, dentro del marco de su oferta IaaS, se realizan con el objetivo de cumplir con la calificación SecNumCloud.

| Actividad                                                                                                          | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **datacenters físicos**              | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **datacenters físicos**           | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **cálculo**                          | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **cálculo (2)**                     | **RA**      | **CI**           |
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **almacenamiento**                   | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **almacenamiento**                  | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones operativas de las infraestructuras **redes backbone**                   | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones de seguridad de las infraestructuras **redes backbone**                  | **I**       | **RA**           |
| Garantizar el mantenimiento en condiciones operativas de las máquinas virtuales desplegadas en los tenants cliente **(3)** | **RA**      |                  |
| Garantizar el mantenimiento en condiciones de seguridad de las máquinas virtuales desplegadas en los tenants cliente **(3)** | **RA**      |                  |
| Garantizar el mantenimiento en condiciones operativas de los middlewares desplegados en los tenants cliente         | **RA**      |                  |
| Asegurar el mantenimiento en condiciones de seguridad de los middleswares desplegados en los tenants de clientes                   | **RA**      |                   |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hipervisores.
No obstante, dado que Cloud Temple no está informado de las especificidades de sus entornos de producción y de los requisitos
relacionados con sus cargas de trabajo, **la decisión de realizar la actualización del sistema operativo de sus hipervisores,
lo que conlleva un reinicio, corresponde a usted**. Esta operación puede realizarse a través de la consola Cloud Temple o mediante la API.
Están disponibles servicios profesionales si desea que Cloud Temple se encargue de ciertas operaciones.*

*(3) Cloud Temple ofrece paquetes de licencias para cortafuegos (Fortinet, Stormshield) y balanceadores de carga (HAProxy), y
trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. Sin embargo,
la responsabilidad del mantenimiento en condiciones operativas y seguras recae en usted durante la fase de explotación
ordinaria. Están disponibles servicios profesionales si desea que Cloud Temple se encargue de ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades

| Actividad                                                                                                              | Rol del Cliente | Rol de Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Gestionar incidentes en las infraestructuras **datacenters físicos**                                                 | **I**           | **RA**              |
| Gestionar problemas en las infraestructuras **datacenters físicos**                                                 |                 | **RA**              |
| Gestionar capacidades en las infraestructuras **datacenters físicos**                                                 |                 | **RA**              |
| Gestionar incidentes en las infraestructuras **cálculo**                                                                | **I**           | **RA**              |
| Gestionar problemas en las infraestructuras **cálculo**                                                                |                 | **RA**              |
| Gestionar capacidades en las infraestructuras **cálculo**                                                                | **RA**          | **CI**              |
| Gestionar incidentes en las infraestructuras **almacenamiento**                                                              | **I**           | **RA**              |
| Gestionar problemas en las infraestructuras **almacenamiento**                                                              |                 | **RA**              |
| Gestionar capacidades en las infraestructuras **almacenamiento**                                                              | **RA**          | **CI**              |
| Gestionar incidentes en las infraestructuras **red backbone**                                                       | **I**           | **RA**              |
| Gestionar problemas en las infraestructuras **red backbone**                                                       |                 | **RA**              |
| Gestionar capacidades en las infraestructuras **red backbone**                                                       |                 | **RA**              |
| Implementar una nueva máquina virtual o crear un nuevo entorno aplicativo dentro de un tenant de cliente | **RA**          |                     |
| Modificar la configuración de las máquinas virtuales desplegadas                                                           | **RA**          |                     |
| Eliminar una máquina virtual desplegada                                                                              | **RA**          |                     |
| Tomar la decisión de agregar, modificar o retirar recursos en la plataforma Cloud Temple                | **RA**          | **CI**              |
| Ejecutar la decisión de modificación de recursos en la plataforma Cloud Temple                                    | **I**           | **RA**              |
| Aplicar las etiquetas a las máquinas virtuales de acuerdo con la política definida                                        | **RA**          |                     |

### Gestión del rendimiento

| Actividad                                                                                                                                              | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Asegurar la supervisión del buen funcionamiento y fiabilidad de todos los equipos involucrados en la prestación del servicio calificado SecNumCloud | **I**           | **RA**              |
| Asegurar el seguimiento del rendimiento de los recursos físicos de cálculo, almacenamiento y red puestos a disposición de sus tenants **(4)**                  | **RI**          | **A**               |
| Supervisar el rendimiento de las máquinas virtuales que soportan sus entornos                                                                      | **RA**          | **I**               |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en **la provisión de infraestructuras dedicadas** para las necesidades de **cálculo** (con láminas físicas), de **almacenamiento** (a través de LUNs dedicadas en los SANs)
y de **red** (incluyendo cortafuegos y balanceadores de carga). Estos recursos dedicados se ponen a disposición del cliente, cuyo uso
y carga resultante dependen directamente del uso que haga de ellos. Por lo tanto, corresponde al cliente implementar y gestionar los sistemas de supervisión
y metrología necesarios para garantizar el seguimiento del funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y recuperación de actividad en la copia de seguridad integrada

| Actividad                                                                                                                                  | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Asegurar el mantenimiento en condiciones operativas en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple **(5)** |                 | **RA**              |
| Asegurar el mantenimiento en condiciones de seguridad de las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                | **I**           | **RA**              |
| Gestionar incidentes en las infraestructuras **copia de seguridad** integradas en la plataforma Cloud Temple                                         | **I**           | **RA**              |
| Gestionar problemas en las infraestructuras **copia de seguridad** integradas en la plataforma Cloud Temple                                         |                 | **RA**              |
| Gestionar capacidades en las infraestructuras **copia de seguridad** integradas en la plataforma Cloud Temple                                         | **AI**          | **RC**              |
| Asegurar el mantenimiento en condiciones operativas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente **(6)**       | **RA**          |                     |
| Asegurar el mantenimiento en condiciones de seguridad en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                  | **RA**          |                     |
| Gestionar incidentes en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | **RA**          |                     |
| Gestionar problemas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | **RA**          |                     |
| Gestionar capacidades en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | **RA**          | **CI**              |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                                      | **RA**          |                     |
| Asegurar que las políticas de copia de seguridad sean coherentes con el ciclo de vida de los datos                                              | **RA**          |                     |
| Asegurar que los planes de continuidad de actividad o recuperación de actividad sean coherentes con el ciclo de vida de los datos                | **RA**          |                     |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de copia de seguridad                                                   | **RA**          |                     |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o continuidad de actividad          | **RA**          | **CI**              |

*(5) A partir del 1 de enero de 2024, la solución de copia de seguridad integrada en la plataforma Cloud Temple es IBM Spectrum Protect Plus.
Esta solución está completamente automatizada y puede gestionarse a través de la consola Cloud Temple o la API Cloud Temple.*

### Gestión de la copia de seguridad y recuperación de actividad para plataformas de terceros dentro de un tenant de cliente

| Actividad                                                                                                                                  | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Garantizar el mantenimiento en condiciones operativas de la solución de backup elegida dentro de sus entornos por parte del cliente **(6)**       | **RA**      |                   |
| Garantizar el mantenimiento en condiciones de seguridad de la solución de backup elegida dentro de sus entornos por parte del cliente                  | **RA**      |                   |
| Gestionar los incidentes en la solución de backup elegida dentro de sus entornos por parte del cliente                                            | **RA**      |                   |
| Gestionar los problemas en la solución de backup elegida dentro de sus entornos por parte del cliente                                            | **RA**      |                   |
| Gestionar las capacidades en la solución de backup elegida dentro de sus entornos por parte del cliente                                            | **RA**      | **CI**            |
| Gestionar el ciclo de vida de las políticas de backup                                                                                      | **RA**      |                   |
| Asegurar que las políticas de backup sean coherentes con el ciclo de vida de los datos                                              | **RA**      |                   |
| Asegurar que los planes de continuidad de actividad o de recuperación de actividad sean coherentes con el ciclo de vida de los datos                | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de backup                                                   | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o continuidad de actividad          | **RA**      | **CI**            |

*(6) Esto se refiere a cualquier solución de backup adicional implementada en los entornos del cliente y gestionada por éste.
Cloud Temple ofrece servicios profesionales para quienes desean delegar ciertas operaciones a Cloud Temple.*

### Gestión de la documentación y el contrato

| Actividad                                                                                                                                                        | Rol del Cliente | Rol de Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Garantizar la gestión comercial y contractual del cliente, incluyendo la elaboración de presupuestos, el procesamiento de pedidos y la gestión de la facturación       | **I**           | **RA**              |
| Garantizar el seguimiento contractual de la prestación, incluyendo la validación de presupuestos, el seguimiento de entregas y la supervisión de la facturación                   | **RA**          | **I**               |
| Garantizar el mantenimiento y disponibilidad del inventario de recursos proporcionados por Cloud Temple relativo a la oferta SecNumCloud                              | **I**           | **RA**              |
| Garantizar el mantenimiento y puesta a disposición de la documentación técnica relativa a la oferta SecNumCloud                                                    | **I**           | **RA**              |
| Garantizar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en sus entornos Cloud Temple<br/> a través de su CMDB (Base de Gestión de Configuración) | **RA**          |                     |
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API Cloud Temple                                                          | **RA**          |                     |

### Gestión de los registros (logs)

| Actividad                                                                                                                 | Rol del Cliente | Rol de Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Conservar y poner a disposición los registros de la plataforma IaaS Cloud Temple **(7)**                                |                 | **RA**              |
| Conservar y poner a disposición los registros del sistema de información<br/> alojado en sus entornos Cloud Temple | **RA**          |                     |

*(7) A partir del 1 de enero de 2024, la duración de retención de los registros de la plataforma es de un año.*

## Conectividad de la red del cliente (mpls, fibra dedicada, ipsec, ...)

| Actividad                                                                                             | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Suscribirse a una conectividad de red operador para acceder a un datacenter físico Cloud Temple (8) | **RA**          | **CI**              |
| Gestionar el plan de direcciones IP                                                                         | **RA**          | **I**               |
| Gestionar los incidentes en los enlaces de red operador cliente                                          | **RA**          |                     |
| Gestionar los problemas en los enlaces de red operador cliente                                          | **RA**          | **CI**              |
| Gestionar las capacidades en los enlaces de red operador cliente                                          | **RA**          | **CI**              |

*(8) Cloud Temple asume la responsabilidad de la red en cuanto a su infraestructura backbone, sus puntos de recogida así como
los puntos de interconexión datacenter, garantizando así la conectividad entre estos puntos y su red backbone.
En la oferta de alojamiento en baía física, Cloud Temple asume la responsabilidad a partir del equipo situado en la parte superior del rack, comúnmente llamado "top of rack".*

## Reversibilidad

| Actividad                                                                                                                                                                                       | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Planificar el proyecto de reversibilidad y elegir las infraestructuras objetivo                                                                                                                     | **RA**          | **I**               |
| Implementar las operaciones de transición, ya impliquen una extracción manual, el uso de APIs <br/>o cualquier otro método tercero compatible con la plataforma Cloud Temple. | **RA**          | **I**               |
| Transferir los datos manteniendo el control de las repercusiones de la migración en la calidad del servicio proporcionado <br/>por el sistema de información del cliente.                                      | **RA**          |                     |
| Proceder al desmantelamiento de las configuraciones del Cloud Privado y de las opciones asociadas al cliente, <br/>tras la terminación del contrato.                                                  | **I**           | **RA**              |
| Realizar el borrado seguro de los datos en los soportes de almacenamiento y proporcionar una certificación                                                                                             | **I**           | **RA**              |