---
title: Matrice de responsabilidad IaaS
---

Aquí está el modelo **RACI** que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las infraestructuras IaaS de Cloud Temple.

## Definición de los diferentes roles

Recordamos aquí los diferentes roles del RACI:

| Rol           | Descripción                                                                           |
|---------------|---------------------------------------------------------------------------------------|
| (R) Realiza   | __R__ealiza el proceso                                                                |
| (A) Aprueba   | __A__prueba la realización del proceso                                                |
| (C) Consulta  | __C__onsultado durante el proceso                                                     |
| (I) Informado | __I__nformado de los resultados del proceso (a través de la herramienta, el portal o el correo) |

## Definición de su necesidad

| Actividad                                                                                    | Rol Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------------------|-------------|------------------|
| Definir la arquitectura global de su plataforma Cloud Temple                                 | __RA__      | __CI__           | 
| Definir el número de tenants y el número de zonas de disponibilidad para cada tenant         | __RA__      | __CI__           | 
| Definir su estrategia global de recuperación o continuidad de actividad                      | __RA__      | __CI__           | 
| Dimensionar correctamente su plataforma Cloud Temple (cálculo, almacenamiento, red, backup,...) | __RA__      | __CI__           | 
| Suscribirse a los servicios con la información necesaria                                     | __RA__      | __I__            | 

## Implementación inicial de sus tenants Cloud Temple

| Actividad                                                                                              | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la implementación de los **datacenters físicos**                                              |             | __RA__           | 
| Asegurar la implementación de las infraestructuras **cálculo**                                         | __I__       | __RA__           | 
| Asegurar la implementación de las infraestructuras **almacenamiento**                                  | __I__       | __RA__           | 
| Asegurar la implementación de la conectividad a la **red backbone(1)**                                 | __I__       | __RA__           | 
| Adquirir y mantener las licencias de software esenciales para el funcionamiento de la plataforma Cloud Temple |             | __RA__           | 
| Implementar la configuración básica de sus tenants Cloud Temple                                        | __CI__      | __RA__           | 
| Implementar la configuración inicial para el servicio de respaldo                                      | __CI__      | __RA__           |
| *Si se suscriben:* implementar la configuración de red inicial para los servicios de Internet y Firewall | __CI__      | __RA__           |
| Ofrecer la asistencia requerida para el manejo de sus entornos Cloud Temple                            | __I__       | __RA__           | 
| Realizar los ajustes finales de configuración del servicio después de su entrega                      | __RA__      | __C__            | 
| Configurar un repositorio de autenticación externo para la consola Cloud Temple                        | __RA__      | __C__            | 
| Crear los usuarios de cada tenant en la consola Cloud Temple y asignar los derechos                    | __RA__      |                  | 
| Validar la conformidad de la plataforma entregada con el repositorio SecNumCloud                       | __I__       | __RA__           |
| Validar la conformidad de la plataforma entregada con las especificaciones requeridas                  | __RA__      | __CI__           |

*(1) La red backbone constituye la infraestructura central de Cloud Temple, ofreciendo una columna vertebral sobre la cual 
reposan las redes clientes específicas, las cuales son integradas y soportadas por esta infraestructura principal.*

## Integrar su sistema de información en sus entornos Cloud Temple

| Actividad                                                                                                               | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Crear, instalar, actualizar sus máquinas virtuales                                                                     | __RA__      |                  | 
| Instalar y configurar los software y middleware en sus máquinas virtuales                                               | __RA__      |                  | 
| Comprar y poseer las licencias y los derechos de uso <br/> para los sistemas operativos de sus máquinas virtuales       | __RA__      |                  | 
| Configurar la red para cada una de sus máquinas virtuales                                                               | __RA__      |                  |
| Asegurarse de que cada máquina virtual esté asociada a un plan de respaldo coherente                                    | __RA__      | __C__            | 
| Asegurarse de que cada máquina virtual esté asociada a un <br/> plan de recuperación de actividad o de continuidad de actividad coherente | __RA__      | __C__            | 
| Implementar una estrategia de protección antivirus en sus máquinas virtuales                                            | __RA__      |                  | 
| Crear una solución de metrología y monitoreo en sus máquinas virtuales                                                  | __RA__      |                  | 
| Definir la política de TAG de sus máquinas virtuales                                                                    | __RA__      |                  | 

## Operaciones recurrentes

### Gestión de acceso e identidades

| Actividad                                                                                                                       | Rol Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la accesibilidad del servicio de la Consola Cloud Temple y de la API asociada                                          |             | __RA__           |
| Asegurar la accesibilidad del sistema de información desplegado en sus máquinas virtuales                                       | __RA__      |                  |
| Gestionar las autorizaciones físicas y lógicas de los equipos Cloud Temple a las infraestructuras SecNumCloud.                  |             | __RA__           |
| Administrar los accesos y la política de seguridad asociada relacionada con la interfaz de la consola Cloud Temple y su API     | __RA__      |                  |
| Administrar los accesos y la política de seguridad asociada al sistema de información <br/> hospedado dentro de sus tenants Cloud Temple | __RA__      |                  |

### mantenimiento en condición operativa y en condición de seguridad

Las actividades dirigidas a mantener en condición operativa y de seguridad para las infraestructuras y servicios 
ofrecidos por Cloud Temple, como parte de su oferta IaaS, se realizan con el objetivo de cumplir con la calificación SecNumCloud.

| Actividad                                                                                                      | Rol Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar el mantenimiento en condición operativa de las infraestructuras **datacenters físicos**               | __I__       | __RA__           | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **datacenters físicos**            | __I__       | __RA__           | 
| Asegurar el mantenimiento en condición operativa de las infraestructuras **cálculo**                           | __I__       | __RA__           | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **cálculo (2)**                    | __RA__      | __CI__           | 
| Asegurar el mantenimiento en condición operativa de las infraestructuras **almacenamiento**                    | __I__       | __RA__           | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **almacenamiento**                 | __I__       | __RA__           | 
| Asegurar el mantenimiento en condición operativa de las infraestructuras **redes backbone**                    | __I__       | __RA__           | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **redes backbone**                 | __I__       | __RA__           |
| Asegurar el mantenimiento en condición operativa de las máquinas virtuales desplegadas en los tenants cliente **(3)** | __RA__      |                  |
| Asegurar el mantenimiento en condición de seguridad de las máquinas virtuales desplegadas en los tenants cliente **(3)** | __RA__      |                  |

| Asegurar el mantenimiento en condiciones operacionales de los middlewares desplegados en los tenants del cliente                | __RA__      |                   |
| Asegurar el mantenimiento en condiciones de seguridad de los middlewares desplegados en los tenants del cliente                   | __RA__      |                   |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hipervisores. 
No obstante, dado que Cloud Temple no está informado de las especificidades de sus entornos de producción y de los requisitos 
relacionados con sus cargas de trabajo, __la decisión de proceder a la actualización del sistema operativo de sus hipervisores, 
provocando así un reinicio, le corresponde a usted__. Esta operación puede ser realizada a través de la consola de Cloud Temple o mediante la API.
Servicios profesionales están disponibles si desea que Cloud Temple se encargue de ciertas operaciones.*

*(3) Cloud Temple ofrece paquetes de licencias para firewalls (Fortinet, Stormshield) y balanceadores de carga (HAProxy), y 
trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. Sin embargo, 
la responsabilidad del mantenimiento en condiciones operacionales y de seguridad recae en usted durante la fase de operación 
normal. Servicios profesionales están disponibles si desea que Cloud Temple se encargue de ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades

| Actividad                                                                                                              | Rol Cliente | Rol Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Gestionar los incidentes en las infraestructuras **datacenters físicos**                                                 | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **datacenters físicos**                                                 |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **datacenters físicos**                                                 |             | __RA__            |
| Gestionar los incidentes en las infraestructuras **de cómputo**                                                                | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **de cómputo**                                                                |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **de cómputo**                                                                | __RA__      | __CI__            |
| Gestionar los incidentes en las infraestructuras **de almacenamiento**                                                              | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **de almacenamiento**                                                              |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **de almacenamiento**                                                              | __RA__      | __CI__            |
| Gestionar los incidentes en las infraestructuras **de red backbone**                                                       | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **de red backbone**                                                       |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **de red backbone**                                                       |             | __RA__            |
| Configurar una nueva máquina virtual o crear un nuevo entorno aplicativo dentro de un tenant del cliente | __RA__      |                   |
| Modificar la configuración de las máquinas virtuales desplegadas                                                           | __RA__      |                   |
| Eliminar una máquina virtual desplegada                                                                              | __RA__      |                   |
| Tomar la decisión de agregar, modificar o retirar recursos en la plataforma Cloud Temple                | __RA__      | __CI__            |
| Ejecutar la decisión de modificación de recursos en la plataforma Cloud Temple                                    | __I__       | __RA__            |
| Aplicar etiquetas a las máquinas virtuales conforme a la política definida                                        | __RA__      |                   |

### Gestión del desempeño

| Actividad                                                                                                                                            | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la supervisión del buen funcionamiento y la fiabilidad de todos los equipos involucrados en la prestación del servicio calificado SecNumCloud | __I__       | __RA__            |
| Asegurar el seguimiento del rendimiento de los recursos físicos de cómputo, almacenamiento y red puestos a disposición de sus tenants __(4)__                  | __RI__      | __A__             |
| Supervisar el desempeño de las máquinas virtuales que respaldan sus entornos                                                                      | __RA__      | __I__             |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en __la provisión de infraestructuras dedicadas__ para las necesidades de __cómputo__ (con blades físicas), de __almacenamiento__ (a través de LUNs dedicadas en los SANs) 
y de __red__ (incluyendo firewalls y balanceadores de carga). Estos recursos dedicados se ponen a disposición del cliente, cuya utilización 
y carga resultante dependen directamente del uso que él haga. Por lo tanto, incumbe al cliente implementar y gestionar los sistemas de supervisión 
y metrología necesarios para asegurar el seguimiento del funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y recuperación sobre la copia de seguridad integrada

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar el mantenimiento en condiciones operativas en las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple **(5)** |             | __RA__            |
| Asegurar el mantenimiento en condiciones de seguridad de las infraestructuras de **copia de seguridad** integradas en la plataforma Cloud Temple                | __I__       | __RA__            |
| Gestionar los incidentes en las infraestructuras **de copia de seguridad** integradas en la plataforma Cloud Temple                                         | __I__       | __RA__            |
| Gestionar los problemas en las infraestructuras **de copia de seguridad** integradas en la plataforma Cloud Temple                                         |             | __RA__            |
| Gestionar las capacidades en las infraestructuras **de copia de seguridad** integradas en la plataforma Cloud Temple                                         | __AI__      | __RC__            |
| Asegurar el mantenimiento en condiciones operativas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente **(6)**       | __RA__      |                   |
| Asegurar el mantenimiento en condiciones de seguridad en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                  | __RA__      |                   |
| Gestionar los incidentes en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | __RA__      |                   |
| Gestionar los problemas en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | __RA__      |                   |
| Gestionar las capacidades en la solución de copia de seguridad elegida dentro de sus tenants por el cliente                                            | __RA__      | __CI__            |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                                      | __RA__      |                   |
| Asegurar que las políticas de copia de seguridad son coherentes con el ciclo de vida del dato                                              | __RA__      |                   |
| Asegurar que los planes de continuidad de negocio o de recuperación de actividad son coherentes con el ciclo de vida del dato                | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la efectividad de la estrategia de copia de seguridad                                                   | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la efectividad de la estrategia<br/> de recuperación de actividad o de continuidad de negocio          | __RA__      | __CI__            |

*(5) Al 1 de enero de 2024, la solución de copia de seguridad integrada en la plataforma Cloud Temple es IBM Spectrum Protect Plus. 
Esta solución está completamente automatizada y puede ser gestionada a través de la consola de Cloud Temple o la API de Cloud Temple.*

### Gestión de la copia de seguridad y recuperación para las plataformas de terceros dentro de un tenant del cliente

| Actividad                                                                                                                                  | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar el mantenimiento en condición operativa en la solución de respaldo elegida dentro de sus tenantes por el cliente **(6)**          | __RA__      |                   |
| Asegurar el mantenimiento en condición de seguridad en la solución de respaldo elegida dentro de sus tenantes por el cliente               | __RA__      |                   |
| Gestionar los incidentes en la solución de respaldo elegida dentro de sus tenantes por el cliente                                          | __RA__      |                   |
| Gestionar los problemas en la solución de respaldo elegida dentro de sus tenantes por el cliente                                           | __RA__      |                   |
| Gestionar las capacidades en la solución de respaldo elegida dentro de sus tenantes por el cliente                                         | __RA__      | __CI__            |
| Gestionar el ciclo de vida de las políticas de respaldo                                                                                     | __RA__      |                   |
| Asegurarse de que las políticas de respaldo sean coherentes con el ciclo de vida de los datos                                              | __RA__      |                   |
| Asegurarse de que los planes de continuidad de actividad o recuperación de actividad sean coherentes con el ciclo de vida de los datos     | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la efectividad de la estrategia de respaldo                                                       | __RA__      |                   |
| Realizar pruebas periódicas para evaluar la efectividad de la estrategia<br/> de recuperación de actividad o de continuidad de actividad   | __RA__      | __CI__            |

*(6) Esto concierne a toda solución de respaldo adicional implementada en los entornos del cliente y gestionada por este. 
Cloud Temple ofrece servicios profesionales para aquellos que deseen delegar ciertas operaciones a Cloud Temple.* 

### Gestión de la documentación y del contrato

| Actividad                                                                                                                                                     | Rol Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la gestión comercial y contractual del cliente, incluyendo el establecimiento de presupuestos, el tratamiento de pedidos y la gestión de la facturación| __I__       | __RA__            |
| Asegurar el seguimiento contractual de la prestación, incluyendo la validación de los presupuestos, el seguimiento de entregas y la supervisión de la facturación| __RA__      | __I__             |
| Asegurar el mantenimiento y la disponibilidad del inventario de los recursos proporcionados por Cloud Temple relativos a la oferta SecNumCloud                 | __I__       | __RA__            |
| Asegurar el mantenimiento y la puesta a disposición de la documentación técnica relativa a la oferta SecNumCloud                                               | __I__       | __RA__            |
| Asegurar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en sus entornos Cloud Temple<br/> a través de su CMDB (Configuration Management Database) | __RA__      |                   | 
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API Cloud Temple                                                    | __RA__      |                   |

### Gestión de los registros

| Actividad                                                                                                                 | Rol Cliente | Rol Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conservar y poner a disposición los registros de la plataforma IaaS Cloud Temple **(7)**                                  |             | __RA__            |
| Conservar y poner a disposición los registros del sistema de información<br/> alojado dentro de sus tenantes Cloud Temple | __RA__      |                   |

*(7) Al primero de enero de 2024, la duración de retención de los registros de la plataforma es de un año.*

## Conectividad a la red del cliente (mpls, fibra dedicada, ipsec, ...)

| Actividad                                                                                             | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Suscribir una conectividad de red operador para acceder a un centro de datos físico Cloud Temple (8)  | __RA__      | __CI__            |
| Gestionar el plan de direccionamiento IP                                                              | __RA__      | __I__             |
| Gestionar los incidentes en los enlaces de red operadores del cliente                                 | __RA__      |                   |
| Gestionar los problemas en los enlaces de red operadores del cliente                                  | __RA__      | __CI__            |
| Gestionar las capacidades en los enlaces de red operadores del cliente                                | __RA__      | __CI__            |

*(8) Cloud Temple asume la responsabilidad de la red en cuanto a su infraestructura backbone, sus puntos de recolección así como 
los puntos de interconexión del centro de datos, garantizando así la conectividad entre estos puntos y su red backbone. 
En la oferta de alojamiento en bahía física, Cloud Temple asume la responsabilidad a partir del equipo ubicado en la parte superior del rack, comúnmente llamado "top of rack".*

## Reversibilidad

| Actividad                                                                                                                                                                                       | Rol Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Planificar el proyecto de reversibilidad y elegir las infraestructuras objetivo                                                                                                                 | __RA__      | __I__             |
| Implementar las operaciones de transición, que impliquen una extracción manual, el uso de API <br/>o cualquier otro método de terceros compatible con la plataforma Cloud Temple. | __RA__      | __I__             |
| Transferir los datos controlando las repercusiones de la migración en la calidad del servicio proporcionado <br/>por el sistema de información del cliente.                                      | __RA__      |                   | 
| Proceder al desmantelamiento de las configuraciones del Cloud Privado y de las opciones asociadas al cliente,<br/>tras la rescisión del contrato.                                                | __I__       | __RA__            |
| Realizar el borrado seguro de los datos en los soportes de almacenamiento y proporcionar un certificado                                                                                         | __I__       | __RA__            |