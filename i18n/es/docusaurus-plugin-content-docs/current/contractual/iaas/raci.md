---
title: Matrice de responsabilidad IaaS
---

Aquí está el modelo **RACI** que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las infraestructuras IaaS de Cloud Temple.

## Definición de los diferentes roles

Recordamos aquí los diferentes roles del RACI:

| Rol          | Descripción                                                                          |
|--------------|--------------------------------------------------------------------------------------|
| (R) Realiza  | __R__ealiza el proceso                                                               |
| (A) Aprueba  | __A__prueba la realización del proceso                                               |
| (C) Consulta | __C__onsultado durante el proceso                                                    |
| (I) Informado| __I__nformado de los resultados del proceso (a través de herramientas, el portal o correo) |

## Definir su necesidad

| Actividad                                                                                       | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|------------------|
| Definir la arquitectura global de su plataforma Cloud Temple                                   | **RA**      | **CI**           |
| Definir el número de tenants y el número de zonas de disponibilidad para cada tenant           | **RA**      | **CI**           |
| Definir su estrategia global de recuperación o continuidad de actividad                        | **RA**      | **CI**           |
| Dimensionar correctamente su plataforma Cloud Temple (cálculo, almacenamiento, red, backup,...)| **RA**      | **CI**           |
| Suscribir a los servicios con la información necesaria                                         | **RA**      | **I**            |

## Implementación inicial de sus tenants Cloud Temple

| Actividad                                                                                                    | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la implementación de los **datacenters físicos**                                                    |             | **RA**           |
| Asegurar la implementación de las infraestructuras **cálculo**                                               | **I**       | **RA**           |
| Asegurar la implementación de las infraestructuras **almacenamiento**                                        | **I**       | **RA**           |
| Asegurar la implementación de la conectividad a la **red backbone(1)**                                       | **I**       | **RA**           |
| Adquirir y mantener las licencias de software esenciales para el funcionamiento de la plataforma Cloud Temple|             | **RA**           |
| Implementar la configuración básica de sus tenants Cloud Temple                                              | **CI**      | **RA**           |
| Implementar la configuración inicial para el servicio de backup                                              | **CI**      | **RA**           |
| *Si están suscritos:* implementar la configuración inicial de red para los servicios de Internet y Firewall  | **CI**      | **RA**           |
| Ofrecer la asistencia requerida para la toma de control de sus entornos Cloud Temple                         | **I**       | **RA**           |
| Realizar los ajustes de configuración finales del servicio después de su entrega                             | **RA**      | **C**            |
| Configurar un repositorio de autenticación externa para la consola Cloud Temple                              | **RA**      | **C**            |
| Crear los usuarios de cada tenant en la consola Cloud Temple y asignar los derechos                          | **RA**      |                  |
| Validar la conformidad de la plataforma entregada con el repositorio SecNumCloud                             | **I**       | **RA**           |
| Validar la conformidad de la plataforma entregada con las especificaciones requeridas                        | **RA**      | **CI**           |

*(1) La red backbone constituye la infraestructura central de Cloud Temple, ofreciendo una columna vertebral sobre la cual
reposan las redes de clientes específicas, las cuales son integradas y soportadas por esta infraestructura principal.*

## Integrar su sistema de información en sus entornos Cloud Temple

| Actividad                                                                                                                       | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Crear, instalar, actualizar sus máquinas virtuales                                                                             | **RA**      |                  |
| Instalar y configurar los software y middleware en sus máquinas virtuales                                                      | **RA**      |                  |
| Comprar y poseer las licencias y los derechos de uso <br/>para los sistemas operativos de sus máquinas virtuales              | **RA**      |                  |
| Configurar la red para cada una de sus máquinas virtuales                                                                      | **RA**      |                  |
| Asegurarse de que cada máquina virtual esté asociada a un plan de backup coherente                                             | **RA**      | **C**            |
| Asegurarse de que cada máquina virtual esté asociada a un <br/>plan de recuperación de actividad o continuidad de actividad coherente | **RA**      | **C**            |
| Implementar una estrategia de protección antivirus en sus máquinas virtuales                                                   | **RA**      |                  |
| Implementar una solución de metrología y monitoreo en sus máquinas virtuales                                                   | **RA**      |                  |
| Definir la política de TAG de sus máquinas virtuales                                                                           | **RA**      |                  |

## Operaciones recurrentes

### Gestión de accesos e identidades

| Actividad                                                                                                                         | Rol Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la accesibilidad del servicio Consola Cloud Temple y de la API asociada                                                 |             | **RA**           |
| Asegurar la accesibilidad del sistema de información desplegado en sus máquinas virtuales                                        | **RA**      |                  |
| Gestionar las habilitaciones físicas y lógicas de los equipos Cloud Temple a las infraestructuras SecNumCloud.                   |             | **RA**           |
| Administrar los accesos y la política de seguridad asociada relacionada con la interfaz de la consola Cloud Temple y su API      | **RA**      |                  |
| Administrar los accesos y la política de seguridad asociada al sistema de información<br/> albergado en sus tenants Cloud Temple | **RA**      |                  |

### Mantenimiento en condición operativa y en condición de seguridad

Las actividades destinadas a mantener en condición operativa y segura las infraestructuras y servicios
proporcionados por Cloud Temple, en el marco de su oferta IaaS, se realizan con el objetivo de conformidad con la calificación SecNumCloud.

| Actividad                                                                                                           | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar el mantenimiento en condición operativa de las infraestructuras **datacenters físicos**                   | **I**       | **RA**           |
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **datacenters físicos**                | **I**       | **RA**           |
| Asegurar el mantenimiento en condición operativa de las infraestructuras **cálculo**                               | **I**       | **RA**           |
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **cálculo (2)**                        | **RA**      | **CI**           |
| Asegurar el mantenimiento en condición operativa de las infraestructuras **almacenamiento**                        | **I**       | **RA**           |
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **almacenamiento**                     | **I**       | **RA**           |
| Asegurar el mantenimiento en condición operativa de las infraestructuras **redes backbone**                        | **I**       | **RA**           |
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **redes backbone**                     | **I**       | **RA**           |
| Asegurar el mantenimiento en condición operativa de las máquinas virtuales desplegadas en los tenants del cliente **(3)** | **RA**      |                  |
| Asegurar el mantenimiento en condición de seguridad de las máquinas virtuales desplegadas en los tenants del cliente **(3)**    | **RA**      |                  |
| Asegurar el mantenimiento en condición operativa de los middleware desplegados en los tenants del cliente          | **RA**      |                  |

| Asegurar el mantenimiento en condiciones de seguridad de los middleware desplegados en los tenants del cliente                   | **RA**      |                   |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hipervisores.
No obstante, dado que Cloud Temple no está al tanto de las especificidades de sus entornos de producción y los requisitos
relacionados con sus cargas de trabajo, **la decisión de proceder a la actualización del sistema operativo de sus hipervisores,
lo que conlleva un reinicio, es de su incumbencia**. Esta operación se puede realizar a través de la consola de Cloud Temple o mediante la API.
Existen servicios profesionales disponibles si desea que Cloud Temple se encargue de ciertas operaciones.*

*(3) Cloud Temple ofrece paquetes de licencias para cortafuegos (Fortinet, Stormshield) y balanceadores de carga (HAProxy), y
trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. Sin embargo,
la responsabilidad del mantenimiento operativo y seguro recae en usted durante la fase de explotación
corriente. Existen servicios profesionales disponibles si desea que Cloud Temple se encargue de ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades

| Actividad                                                                                                              | Rol Cliente | Rol Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Gestionar los incidentes en las infraestructuras **datacenters físicos**                                               | **I**       | **RA**            |
| Gestionar los problemas en las infraestructuras **datacenters físicos**                                                |             | **RA**            |
| Gestionar las capacidades de las infraestructuras **datacenters físicos**                                              |             | **RA**            |
| Gestionar los incidentes en las infraestructuras **de cómputo**                                                        | **I**       | **RA**            |
| Gestionar los problemas en las infraestructuras **de cómputo**                                                         |             | **RA**            |
| Gestionar las capacidades de las infraestructuras **de cómputo**                                                       | **RA**      | **CI**            |
| Gestionar los incidentes en las infraestructuras **de almacenamiento**                                                 | **I**       | **RA**            |
| Gestionar los problemas en las infraestructuras **de almacenamiento**                                                  |             | **RA**            |
| Gestionar las capacidades de las infraestructuras **de almacenamiento**                                                | **RA**      | **CI**            |
| Gestionar los incidentes en las infraestructuras **de red backbone**                                                   | **I**       | **RA**            |
| Gestionar los problemas en las infraestructuras **de red backbone**                                                    |             | **RA**            |
| Gestionar las capacidades de las infraestructuras **de red backbone**                                                  |             | **RA**            |
| Implementar una nueva máquina virtual o crear un nuevo entorno aplicativo dentro de un tenant cliente                  | **RA**      |                   |
| Modificar la configuración de las máquinas virtuales desplegadas                                                       | **RA**      |                   |
| Eliminar una máquina virtual desplegada                                                                                | **RA**      |                   |
| Tomar la decisión de añadir, modificar o retirar recursos en la plataforma Cloud Temple                                | **RA**      | **CI**            |
| Ejecutar la decisión de modificación de recursos en la plataforma Cloud Temple                                         | **I**       | **RA**            |
| Aplicar etiquetas a las máquinas virtuales conforme a la política definida                                             | **RA**      |                   |

### Gestión del rendimiento

| Actividad                                                                                                                                              | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la monitorización del buen funcionamiento y la fiabilidad de todos los equipos involucrados en la prestación del servicio calificado SecNumCloud | **I**       | **RA**            |
| Asegurar el seguimiento del rendimiento de los recursos físicos de cómputo, almacenamiento y red puestos a disposición de sus tenants **(4)**             | **RI**      | **A**             |
| Supervisar el rendimiento de las máquinas virtuales que sustentan sus entornos                                                                          | **RA**      | **I**             |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en **la provisión de infraestructuras dedicadas** para las necesidades de **cómputo** (con blades físicos), de **almacenamiento** (a través de LUNs dedicadas en los SANs)
y de **red** (incluyendo cortafuegos y balanceadores de carga). Estos recursos dedicados son puestos a disposición del cliente, cuya utilización
y carga resultante dependen directamente del uso que él haga. Por lo tanto, corresponde al cliente implementar y gestionar los sistemas de supervisión
y metrología necesarios para asegurar el seguimiento del funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y recuperación de actividad en la copia de seguridad integrada

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar el mantenimiento operativo en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple **(5)**   |             | **RA**            |
| Asegurar el mantenimiento en condiciones de seguridad de las infraestructuras de **copia de seguridad** integradas en la plataforma      | **I**       | **RA**            |
| Gestionar los incidentes en las infraestructuras de **copia de seguridad** integradas en la plataforma                                    | **I**       | **RA**            |
| Gestionar los problemas en las infraestructuras de **copia de seguridad** integradas en la plataforma                                     |             | **RA**            |
| Gestionar las capacidades de las infraestructuras de **copia de seguridad** integradas en la plataforma                                   | **AI**      | **RC**            |
| Asegurar el mantenimiento operativo en la solución de copia de seguridad elegida dentro de sus tenants por el cliente **(6)**             | **RA**      |                   |
| Asegurar el mantenimiento en condiciones de seguridad en la solución de copia de seguridad elegida dentro de sus tenants por el cliente  | **RA**      |                   |
| Gestionar los incidentes en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                               | **RA**      |                   |
| Gestionar los problemas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                | **RA**      |                   |
| Gestionar las capacidades de la solución de copia de seguridad elegida dentro de sus tenants por el cliente                              | **RA**      | **CI**            |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                        | **RA**      |                   |
| Asegurarse de que las políticas de copia de seguridad sean coherentes con el ciclo de vida de los datos                                  | **RA**      |                   |
| Asegurarse de que los planes de continuidad de actividad o recuperación de actividad sean coherentes con el ciclo de vida de los datos    | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de copia de seguridad                                               | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o de continuidad de actividad    | **RA**      | **CI**            |

*(5) Al 1 de enero de 2024, la solución de copia de seguridad integrada en la plataforma Cloud Temple es IBM Spectrum Protect Plus.
Esta solución está totalmente automatizada y se puede gestionar a través de la consola de Cloud Temple o la API de Cloud Temple.*

### Gestión de la copia de seguridad y recuperación de actividad para las plataformas de terceros dentro de un tenant cliente

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|

| Asegurar el mantenimiento en condición operacional en la solución de respaldo elegida dentro de los inquilinos del cliente **(6)**         | **RA**      |                   |
| Asegurar el mantenimiento en condición de seguridad en la solución de respaldo elegida dentro de los inquilinos del cliente                | **RA**      |                   |
| Gestionar los incidentes en la solución de respaldo elegida dentro de los inquilinos del cliente                                            | **RA**      |                   |
| Gestionar los problemas en la solución de respaldo elegida dentro de los inquilinos del cliente                                             | **RA**      |                   |
| Gestionar las capacidades en la solución de respaldo elegida dentro de los inquilinos del cliente                                           | **RA**      | **CI**            |
| Gestionar el ciclo de vida de las políticas de respaldo                                                                                     | **RA**      |                   |
| Asegurarse de que las políticas de respaldo sean coherentes con el ciclo de vida del dato                                                   | **RA**      |                   |
| Asegurarse de que los planes de continuidad de actividad o de recuperación de actividad sean coherentes con el ciclo de vida del dato       | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de respaldo                                                           | **RA**      |                   |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o de continuidad de actividad       | **RA**      | **CI**            |

*(6) Esto concierne a cualquier solución de respaldo adicional implementada en los entornos del cliente y gestionada por el mismo.
Cloud Temple ofrece servicios profesionales para aquellos que desean delegar ciertas operaciones a Cloud Temple.*

### Gestión de la documentación y del contrato

| Actividad                                                                                                                                                        | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la gestión comercial y contractual del cliente, incluyendo la elaboración de presupuestos, el tratamiento de pedidos y la gestión de la facturación     | **I**       | **RA**           |
| Asegurar el seguimiento contractual del servicio, incluyendo la validación de presupuestos, el seguimiento de entregas y la supervisión de la facturación        | **RA**      | **I**            |
| Asegurar el mantenimiento y la disponibilidad del inventario de los recursos proporcionados por Cloud Temple relativos a la oferta SecNumCloud                   | **I**       | **RA**           |
| Asegurar el mantenimiento y la puesta a disposición de la documentación técnica relativa a la oferta SecNumCloud                                                 | **I**       | **RA**           |
| Asegurar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en sus entornos Cloud Temple<br/> a través de su CMDB (Configuration Management Database) | **RA**      |                  |
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API Cloud Temple                                                      | **RA**      |                  |

### Gestión de los registros

| Actividad                                                                                                                 | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Conservar y poner a disposición los registros de la plataforma IaaS Cloud Temple **(7)**                                  |             | **RA**           |
| Conservar y poner a disposición los registros del sistema de información<br/> alojado dentro de sus inquilinos Cloud Temple| **RA**      |                  |

*(7) El primero de enero de 2024, la duración de retención de los registros de la plataforma es de un año.*

## Conectividad a la red del cliente (mpls, fibra dedicada, ipsec, ...)

| Actividad                                                                                             | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|------------------|
| Suscribirse a una conectividad de red operadora para acceder a un centro de datos físico Cloud Temple (8) | **RA**      | **CI**           |
| Gestionar el plan de direccionamiento IP                                                               | **RA**      | **I**            |
| Gestionar los incidentes en los enlaces de red de los operadores del cliente                           | **RA**      |                  |
| Gestionar los problemas en los enlaces de red de los operadores del cliente                            | **RA**      | **CI**           |
| Gestionar las capacidades en los enlaces de red de los operadores del cliente                          | **RA**      | **CI**           |

*(8) Cloud Temple asume la responsabilidad de la red en cuanto a su infraestructura backbone, sus puntos de recopilación así como
los puntos de interconexión del centro de datos, garantizando así la conectividad entre estos puntos y su red backbone.
En la oferta de alojamiento en rack físico, Cloud Temple asume la responsabilidad a partir del equipo situado en la parte superior del rack, comúnmente llamado "top of rack".*

## Reversibilidad

| Actividad                                                                                                                                                                              | Rol Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Planificar el proyecto de reversibilidad y elegir las infraestructuras objetivo                                                                                                        | **RA**      | **I**            |
| Implementar las operaciones de transición, ya sea que impliquen una extracción manual, el uso de API <br/>o cualquier otro método de terceros compatible con la plataforma Cloud Temple| **RA**      | **I**            |
| Transferir los datos controlando las repercusiones de la migración sobre la calidad del servicio brindado por el sistema de información del cliente                                     | **RA**      |                  |
| Proceder al desmantelamiento de las configuraciones del Cloud Privado y las opciones asociadas al cliente,<br/>tras la rescisión del contrato                                           | **I**       | **RA**           |
| Realizar el borrado seguro de los datos en los soportes de almacenamiento y proporcionar una certificación                                                                            | **I**       | **RA**           |