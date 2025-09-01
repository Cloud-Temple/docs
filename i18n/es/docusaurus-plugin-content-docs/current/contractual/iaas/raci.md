---
title: Matrizas de Responsabilidad IaaS
---

Aquí se presenta el modelo **RACI** que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las infraestructuras IaaS de Cloud Temple.

## Definición de los diferentes roles

Aquí repasamos los diferentes roles del RACI:

| Rol         | Descripción                                                                                  |
|-------------|----------------------------------------------------------------------------------------------|
| (R) Realiza  | __R__ realiza el proceso                                                                 |
| (A) Aprova   | __A__ aprova la realización del proceso                                                      |
| (C) Consulta | __C__ consulta durante el proceso                                                              |
| (I) Informa   | __I__ informa sobre los resultados del proceso (vía herramientas, portal o correo electrónico) |

## Definición de su necesidad

| Actividad                                                                                       | Rol del Cliente | Rol de Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definir la arquitectura global de la plataforma Cloud Temple                                | **RA**      | **CI**            |
| Definir el número de tenants y el número de zonas de disponibilidad para cada tenant          | **RA**      | **CI**            |
| Definir su estrategia global de recuperación ante desastres o continuidad de actividades       | **RA**      | **CI**            |
| Dimensionar correctamente la plataforma Cloud Temple (cálculo, almacenamiento, red, backup...) | **RA**      | **CI**            |
| Suscribirse a los servicios con las información necesaria                                       | **RA**      | **I**             |

## Inicialización inicial de los tenientes de tu Templo Cloud

| Actividad                                                                                                     | Rol del Cliente | Rol del Templo Cloud |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantizar la implementación de **datacenters físicos**                                                      |             | **RA**            |
| Garantizar la implementación de las infraestructuras **calcul**                                                     | **I**       | **RA**            |
| Garantizar la implementación de las infraestructuras **storage**                                                   | **I**       | **RA**            |
| Garantizar la implementación de la conectividad al **réseau backbone(1)**                                       | **I**       | **RA**            |
| Adquirir y mantener las licencias lógicas esenciales para el funcionamiento de la plataforma Cloud Temple |             | **RA**            |
| Implementar la configuración básica de tus tenientes Cloud Temple                                             | **CI**      | **RA**            |
| Implementar la configuración inicial para el servicio de backup                                          | **CI**      | **RA**            |
| *(Si lo contratan):* implementar la configuración de red inicial para los servicios Internet y Firewall  | **CI**      | **RA**            |
| Ofrecer la asistencia necesaria para la toma de posesión de tus entornos Cloud Temple                         | **I**       | **RA**            |
| Realizar los ajustes finales de configuración del servicio después de su entrega                              | **RA**      | **C**             |
| Configurar un repositorio de autenticación externo para la consola Cloud Temple                            | **RA**      | **C**             |
| Crear los usuarios de cada teniente en la consola Cloud Temple y asignarles permisos                  | **RA**      |                   |
| Validar la conformidad de la plataforma entregada con el repositorio SecNumCloud                                | **I**       | **RA**            |
| Validar la conformidad de la plataforma entregada con las especificaciones requeridas                               | **RA**      | **CI**            |

*(1) El backbone de red constituye la infraestructura central de Cloud Temple, ofreciendo una columna vertebral sobre la cual reposan los redes clientes específicos, que están integrados y soportados por esta infraestructura principal.*

## Integrar su sistema de información en los entornos Cloud Temple

| Actividad                                                                                                                      | Role del Cliente | Role del Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Crear, instalar, actualizar máquinas virtuales                                                                                 | **RA**      |                   |
| Instalar y configurar software e middleware en las máquinas virtuales                                                           | **RA**      |                   |
| Comprar y mantener licencias y derechos de uso para los sistemas operativos de sus máquinas virtuales                  | **RA**      |                   |
| Configurar el red para cada máquina virtual                                                                                      | **RA**      |                   |
| Asegurarse de que cada máquina virtual esté asociada a un plan de respaldo coherente                                            | **RA**      | **C**             |
| Asegurarse de que cada máquina virtual esté asociada a un plan de recuperación ante desastres o continuidad de negocio coherente | **RA**      | **C**             |
| Implementar una estrategia antivirus en sus máquinas virtuales                                                                  | **RA**      |                   |
| Establecer una solución de metodología y monitoreo en sus máquinas virtuales                                               | **RA**      |                   |
| Definir la política de TAG de sus máquinas virtuales                                                                        | **RA**      |                   |

## Operaciones Repetidas

### Gestión de Acceso y Identidades

| Actividad                                                                                                                             | Rol del Cliente | Rol del Centro de Nube Templado |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|------------------------|
| Garantizar el acceso al servicio Console Cloud Templado y a su API asociada                                                                 |             | **RA**            |
| Garantizar el acceso al sistema de información desplegado en las máquinas virtuales del cliente                                                        | **RA**      |                   |
| Gestionar las habilitaciones físicas y lógicas de las equipos Cloud Templado sobre las infraestructuras SecNumCloud.                      |             | **RA**            |
| Administrar los accesos y la política de seguridad relacionada con la interfaz de la console Cloud Templado y su API                    | **RA**      |                   |
| Administrar los accesos y la política de seguridad relacionada al sistema de información hospedado en las tenencias Cloud Templado | **RA**      |                   |

### Mantenimiento operativo y de seguridad

Las actividades destinadas a mantener las infraestructuras e servicios ofrecidos por Cloud Temple, dentro del marco IaaS, se llevan a cabo con el objetivo de cumplir con la calificación SecNumCloud.

| Actividad                                                                                          | Cliente Operativo | Cliente Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|--------------------|-------------------|
| Garantizar el mantenimiento operativo de las infraestructuras **datacenters físicos**                     | **I**               | **RA**            |
| Garantizar el mantenimiento de seguridad de las infraestructuras **datacenters físicos**                | **I**               | **RA**            |
| Garantizar el mantenimiento operativo de las infraestructuras **calcul**                             | **I**               | **RA**            |
| Garantizar el mantenimiento de seguridad de las infraestructuras **calcul (2)**                      | **RA**              | **CI**            |
| Garantizar el mantenimiento operativo de las infraestructuras **storage**                             | **I**               | **RA**            |
| Garantizar el mantenimiento de seguridad de las infraestructuras **storage**                        | **I**               | **RA**            |
| Garantizar el mantenimiento operativo de las infraestructuras **backbone de red**                     | **I**               | **RA**            |
| Garantizar el mantenimiento de seguridad de las infraestructuras **backbone de red**                | **I**               | **RA**            |
| Garantizar el mantenimiento operativo de las máquinas virtuales desplegadas en los tenientes clientes (3) | **RA**              |                  |
| Garantizar el mantenimiento de seguridad de las máquinas virtuales desplegadas en los tenientes clientes (3) | **RA**              |                  |
| Garantizar el mantenimiento operativo de los middlewares desplegados en los tenientes clientes          | **RA**              |                  |
| Garantizar el mantenimiento de seguridad de los middlewares desplegados en los tenientes clientes       | **RA**              |                  |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hyperviseurs. Sin embargo, dado que Cloud Temple no está al tanto de las especificidades de sus entornos de producción ni de las exigencias relacionadas con sus cargas de trabajo, la decisión de actualizar el sistema operativo de sus hyperviseurs, lo que implica un reinicio, le corresponde a usted. Esta operación puede realizarse a través de la consola Cloud Temple o mediante la API. Se ofrecen servicios profesionales para que Cloud Temple asuma ciertas operaciones.*

*(3) Cloud Temple ofrece paquetes de licencias para firewalls (Fortinet, Stormshield) y distribuidores de carga (HAProxy), y trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. Sin embargo, la responsabilidad del mantenimiento operativo y de seguridad recae en usted durante la fase de operación actual. Se ofrecen servicios profesionales para que Cloud Temple asuma ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades

| Actividad                                                                                                   | Rol del Cliente | Rol Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|----------------|-----------------|
| Gestionar incidentes en infraestructuras físicas de datacenters                                          | **I**         | **RA**          |
| Gestionar problemas en infraestructuras físicas de datacenters                                          |               | **RA**          |
| Gestionar capacidades en infraestructuras físicas de datacenters                                          |               | **RA**          |
| Gestionar incidentes en infraestructuras de computación                                                      | **I**         | **RA**          |
| Gestionar problemas en infraestructuras de computación                                                      |               | **RA**          |
| Gestionar capacidades en infraestructuras de computación                                                      | **RA**        | **CI**          |
| Gestionar incidentes en infraestructuras de almacenamiento                                                        | **I**         | **RA**          |
| Gestionar problemas en infraestructuras de almacenamiento                                                        |               | **RA**          |
| Gestionar capacidades en infraestructuras de almacenamiento                                                        | **RA**        | **CI**          |
| Gestionar incidentes en infraestructuras de red de backbone                                                      | **I**         | **RA**          |
| Gestionar problemas en infraestructuras de red de backbone                                                      |               | **RA**          |
| Gestionar capacidades en infraestructuras de red de backbone                                                      |               | **RA**          |
| Crear una nueva máquina virtual o crear un nuevo entorno aplicativo dentro del tenant cliente                | **RA**        |                 |
| Modificar la configuración de las máquinas virtuales desplegadas                                         | **RA**        |                 |
| Eliminar una máquina virtual desplegada                                                                     | **RA**        |                 |
| Tomar la decisión de agregar, modificar o eliminar recursos en la plataforma Cloud Temple                | **RA**        | **CI**          |
| Aplicar la modificación de recursos en la plataforma Cloud Temple                                        | **I**         | **RA**          |
| Aplicar etiquetas a las máquinas virtuales según la política definida                                         | **RA**        |                 |

### Gestión de la rendimiento

| Actividad                                                                                                 | Rol del Cliente | Rol de Cloud Temple RA |
|-------------------------------------------------------------------------------------------------------------------|----------------|-------------------|
| Garantizar el monitoreo del correcto funcionamiento y fiabilidad de todos los equipos involucrados en la prestación del servicio calificado SecNumCloud | **I**       | **RA**            |
| Supervisar el rendimiento de las recursos físicas de cálculo, almacenamiento y red proporcionadas a los tenantes **(4)**                  | **RI**      | **A**             |
| Controlar las prestaciones de las máquinas virtuales que soportan los entornos                                                                 | **RA**      | **I**             |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en la provisión de infraestructuras dedicadas para los necesidades de **cálculo** (con lances físicos), **almacenamiento** (a través de LUNs dedicadas en SANs) y **red** (incluyendo firewalls y distribuidores de carga). Estas infraestructuras dedicadas se proporcionan al cliente, cuya utilización y carga resultante dependen directamente del uso que realice. Es responsabilidad del cliente implementar y gestionar los sistemas de supervisión y métricos necesarios para garantizar el funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y recuperación ante desastres en el servicio integrado de copia de seguridad

| Actividad                                                                                                                                  | Rol del Cliente | Rol del Centro de Datos Templado |
|--------------------------------------------------------------------------------------------------------------------------------????--------------------------------------------------------------------------------------------------------------------------------????  |             | RA                            |
| Mantener la operatividad en las infraestructuras de **copia de seguridad** integradas a la plataforma Cloud Temple (5)            |             | RA                            |
| Garantizar la seguridad de las infraestructuras de **copia de seguridad** integradas a la plataforma Cloud Temple                | I           | RA                            |
| Gestionar incidentes en las infraestructuras **copia de seguridad** integradas a la plataforma Cloud Temple                     | I           | RA                            |
| Solucionar problemas en las infraestructuras **copia de seguridad** integradas a la plataforma Cloud Temple                     |             | RA                            |
| Gestionar capacidades en las infraestructuras **copia de seguridad** integradas a la plataforma Cloud Temple                   | AI         | RC                            |
| Mantener la operatividad en la solución de copia de seguridad elegida dentro de los tenencias del cliente (6)                     | RA          |                           |
| Garantizar la seguridad en la solución de copia de seguridad elegida dentro de las tenencias del cliente                        | RA          |                           |
| Gestionar incidentes en la solución de copia de seguridad elegida dentro de las tenencias del cliente                          | RA          |                           |
| Solucionar problemas en la solución de copia de seguridad elegida dentro de las tenencias del cliente                          | RA          |                           |
| Gestionar capacidades en la solución de copia de seguridad elegida dentro de las tenencias del cliente                          | RA          | CI                            |
| Gestionar el ciclo de vida de las políticas de copia de seguridad                                                                  | RA          |                           |
| Asegurar que las políticas de copia de seguridad estén alineadas con el ciclo de vida de la información                        | RA          |                           |
| Asegurar que los planes de continuidad empresarial o recuperación ante desastres estén alineados con el ciclo de vida de la información | RA          |                           |
| Realizar pruebas periódicas para evaluar la efectividad de la estrategia de copia de seguridad                                   | RA          |                           |
| Realizar pruebas periódicas para evaluar la efectividad de los planes de continuidad empresarial o recuperación ante desastres   | RA          | CI                            |

*(5) A partir del 1 de enero de 2024, la solución de copia de seguridad integrada a la plataforma Cloud Temple se hará con IBM Spectrum Protect Plus. Esta solución es completamente automatizada y puede ser gestionada a través de la consola Cloud Temple o la API Cloud Temple.*

| Actividad                                                                                                                                  | Role Cliente | Rol de Templo Cloud |
|--------------------------------------------------------------------------------------------------------------------------------????--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Gestión de la documentación y contrato

| Actividad                                                                                                                                                        | Rol del Cliente | Rol de Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantizar la gestión comercial y contractual del cliente, incluyendo la emisión de presupuestos, el procesamiento de órdenes y la gestión de facturación       | **I**       | **RA**            |
| Garantizar el seguimiento contractual de la prestación, incluyendo la validación de presupuestos, el seguimiento de entregas y la supervisión de facturación                   | **RA**      | **I**             |
| Garantizar la mantenimiento y disponibilidad del inventario de recursos proporcionados por Cloud Temple relacionado con la oferta SecNumCloud                              | **I**       | **RA**            |
| Garantizar el mantenimiento y disponibilidad de la documentación técnica relativa a la oferta SecNumCloud                                                    | **I**       | **RA**            |
| Garantizar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en los entornos Cloud Temple a través de su CMDB (Database de Gestión de Configuración) | **RA**      |                   |
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API Cloud Temple                                                          | **RA**      |                   |

### Gestión de registros

| Actividad                                                                                                                 | Rol del Cliente | Rol Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Almacenar y proporcionar acceso a los registros de la plataforma IaaS Cloud Temple **(7)**                                |             | **RA**            |
| Almacenar y proporcionar acceso a los registros del sistema de información alojado dentro de sus tenencias Cloud Temple | **RA**      |                   |

*(7) A partir del 1 de enero de 2024, la duración de retención de los registros de plataforma será de un año.*

## Conectividad al red cliente (MPLS, fibra óptica dedicada, IPSec, ...)

| Actividad                                                                                             | Rôle Cliente | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Suscribirse a una conectividad de red operador para acceder a un datacenter físico Cloud Temple (8) | **RA**      | **CI**            |
| Gestionar el plan de enlace IP                                                                     | **RA**      | **I**             |
| Gestionar incidentes sobre los enlaces de red operadores clientes                                          | **RA**      |                   |
| Gestionar problemas sobre los enlaces de red operadores clientes                                          | **RA**      | **CI**            |
| Gestionar capacidades sobre los enlaces de red operadores clientes                                          | **RA**      | **CI**            |

*(8) Cloud Temple asume la responsabilidad del red respectiva en relación con su infraestructura backbone, sus puntos de recolección y los puntos de interconexión datacenter, garantizando así la conectividad entre estos puntos y su red backbone. En la oferta de alojamiento en bahía física, Cloud Temple asume la responsabilidad a partir del equipo situado en la parte superior del rack, comúnmente conocido como "top of rack".*

## Reversibilidad

| Actividad                                                                                                                                                                                       | Rol del Cliente | Rol del Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------????----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------????  | RA              | I                   |
| Planificar el proyecto de reversibilidad y elegir las infraestructuras objetivo                                                                                                      | **RA**          | **I**               |
| Implementar las operaciones de transición, que puedan implicar extracción manual, uso de API o cualquier método tercer compatible con la plataforma Cloud Temple.            | **RA**          | **I**               |
| Transferir los datos mientras se ubican y controla las repercusiones de la migración en la calidad del servicio proporcionado por el sistema de información del cliente.             | **RA**          |                   |
| Realizar el desinstalación de las configuraciones privadas del Cloud y las opciones asociadas al cliente, tras la renuncia al contrato.                                                  | **I**           | **RA**              |
| Llevar a cabo la eliminación segura de los datos y proporcionar una certificación                                                                                                      | **I**           | **RA**              |
