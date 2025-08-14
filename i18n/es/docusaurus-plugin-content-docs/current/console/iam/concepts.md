---
title: Conceptos
---
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_012 from './images/shiva_profil_012.png'
import shivaProfil_014 from './images/shiva_profil_014.png'
import shivaProfil_015 from './images/shiva_profil_015.png'
import shivaProfil_016 from './images/shiva_profil_016.png'
import shivaProfil_013 from './images/shiva_profil_013.png'
import shivaProfil_010 from './images/shiva_profil_010.png'
import shivaProfil_009 from './images/shiva_profil_009.png'
import shivaProfil_011 from './images/shiva_profil_011.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaTenantRessources_01 from './images/shiva_tenant_ressources_01.png'

## Usuarios

Las cuentas de acceso a la consola Shiva se crean por la cuenta maestra del cliente mediante invitación (sin importar el repositorio de autenticación).
Las credenciales son globales para su [Organización](#organisations).

*__Nota :__ [La federación de identidad se gestiona a nivel de organización](#organisations#mecanismes-dauthentification)*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se hace mediante invitación. Para invitar a un usuario en una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

Indique luego la dirección de correo electrónico del usuario

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo de verificación.

<img src={shivaOnboard_001} />

Una vez que la verificación esté completa, el usuario podrá iniciar sesión en la consola.

### Asignación de permisos a un usuario

La gestión de los derechos de los usuarios se realiza desde la página de usuario.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene derechos. Es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Basta con hacer clic en el menú __'Acciones'__ del usuario y elegir la opción __'Modificar'__.

Aparece entonces el menú de activación de permisos:

<img src={shivaOnboard_005} />

La configuración de permisos debe realizarse para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido provisionado pero no ha validado su registro dentro del plazo de caducidad del correo electrónico enviado desde la Consola, ya no puede confirmar su registro. Es posible entonces reenviarle un enlace para que renueve su primera inscripción.

La reinscripción de un usuario debe realizarse en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione al usuario que desea reinscribir, luego haga clic en el botón de acción al final de la fila y seleccione __'Reinscripción'__.

__Advertencia__: Asegúrese de ser el origen de la solicitud de reinscripción de su cuenta de usuario. Agradecemos informar todas las solicitudes que no provengan de usted mediante un ticket de soporte.

<img src={shivaProfil_012} />

### Actualizar su perfil

Esta acción está disponible únicamente para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Luego, vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Siga simplemente los pasos para actualizar su perfil.

__Advertencia__: Asegúrese de ser el origen de la solicitud de actualización del perfil. Agradecemos informar cualquier solicitud que no provenga de usted mediante un ticket de soporte.

<img src={shivaProfil_014} />

### Restablecimiento de contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer contraseña'__.

Luego, vaya a su bandeja de correo y haga clic en el enlace generado por la Consola. Siga simplemente los pasos para actualizar su contraseña.

__Advertencia__: Asegúrese de ser el origen de la solicitud de restablecimiento de su contraseña. Agradecemos informar todas las solicitudes que no provengan de usted a través de un ticket de soporte.

<img src={shivaProfil_015} />

### Restablecimiento de la autenticación de doble factor

Esta acción está disponible solo para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer MFA'__.

Luego, vaya a su correo electrónico y haga clic en el enlace generado por la Consola. Siga simplemente los pasos para actualizar su autenticación de doble factor.

__Advertencia__: Asegúrese de ser el origen de la solicitud de restablecimiento de su autenticación de doble factor. Gracias por informar todas las solicitudes que no provienen de usted a través de un ticket de soporte.

<img src={shivaProfil_016} />

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar, luego haga clic en el botón de acción al final de la fila y luego __'Eliminar'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: No puedes eliminarte a ti mismo y no puedes eliminar un usuario __'Propietario'__.

### Cerrar sesión

La desconexión de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Cerrar sesión'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una desconexión automática se realiza al expirar el token (JWT Token) de sesión.

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir los correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente al producirse eventos correspondientes.

Está disponible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse gradualmente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

La consola Shiva permite una gestión fina de los derechos de los usuarios de una organización, con una segregación por inquilino.
Incialmente, es la cuenta principal del cliente que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Cuando se crea un usuario, no tiene ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de forma unitaria, sin superposición con otros permisos. Se aplican en conjunto, lo que significa que un usuario debe tener todos los permisos necesarios para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada inquilino de su organización:

- Permisos de tipo "read": permiten únicamente la consulta de recursos sin posibilidad de modificación.
- Permisos de tipo "write": autorizan la modificación de configuraciones.
- Permisos de tipo "management": autorizan la gestión avanzada de recursos.
- Permisos de tipo "console_access": autorizan conexiones tipo PMAD en recursos.
- Permisos de tipo "virtual_machine_power": autorizan la gestión de la alimentación de una máquina virtual.

- __Estos son permisos, no roles.__ Por lo tanto, es necesario tener el permiso READ y WRITE para modificar una configuración.

Última actualización: 16/07/2025

| Nombre del permiso                          | Descripción del permiso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta de registros de registros y actividades                                                                                    |
| activity_write                                | Gestión de registros de registros y actividades                                                                                         |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                          |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                          |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                            |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                            |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                    |
| bastion_write                                 | Gestión de recursos (aparatos, sesiones,...) de tipo Bastion                                                             |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un dispositivo Bastion                                 |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                                |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                        |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                              |
| compute_iaas_opensource_replication_recover   | Oferta OpenIaaS - Gestión de la replicación                                                              |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas de afinidad/anti-afinidad, configuración DRS, etc)  |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                           |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                         |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| baremetal_management                          | Oferta Bare Metal - Gestión de recursos de tipo Bare Metal                                                               |
| baremetal_read                                | Oferta Bare Metal - Consulta de recursos de tipo Bare Metal                                                               |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                  |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                         |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                                  |
| documentation_read                            | Consulta de recursos de documentación de confluence                                                                        |
| housing_read                                  | Consulta de recursos de tipo colocación                                                                                 |
| iam_offline_access                            | Creación y eliminación de Tokens de Acceso Personales (PAT)                                                                        |
| iam_read                                      | Consulta de derechos de usuarios                                                                                           |
| iam_write                                     | Gestión de derechos de usuarios                                                                                                |
| intervention_read                             | Consulta de cambios y lanzamientos previstos en la plataforma                                                  |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                 |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                      |
| monitoring_read                               | Consulta del monitoreo                                                                                                     |
| monitoring_write                              | Gestión del monitoreo                                                                                                          |
| metric_read                                   | Consulta de datos de salud sobre máquinas virtuales y hosts                                                         |
| network_read                                  | Consulta de recursos de red                                                                                             |
| network_write                                 | Gestión de recursos de red                                                                                                  |
| order_read                                    | Consulta de órdenes de infraestructura                                                                                     |
| order_write                                   | Creación de orden de infraestructura                                                                                            |
| object-storage_iam_management                 | Permite gestionar cuentas de almacenamiento en el producto S3                                                                       |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                   |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                  |
| openshift_management                          | Permite conectarse a las plataformas Openshift (limitado al inquilino)                                                          |
| support_management                            | Consulta de todos los tickets de soporte del inquilino                                                                       |
| support_read                                  | Consulta de sus tickets de soporte del inquilino                                                                                  |
| support_write                                 | Creación de un ticket de soporte en el inquilino                                                                                     |
| tag_read                                      | Consulta de etiquetas, excepto las etiquetas RTMS                                                                                   |
| tag_write                                     | Gestión de etiquetas, excepto las etiquetas RTMS                                                                                        |
| ticket_comment_read                           | Consulta de comentarios                                                                                                  |
| ticket_comment_write                          | Gestión de comentarios                                                                                                       |
| ticket_read                                   | Consulta de tickets                                                                                                       |
| ticket_write                                  | Gestión de tickets                                                                                                            |
| incident_management                           | Gestión de incidentes                                                                                                       |
| incident_read                                 | Consulta de incidentes                                                                                                            |

## Organizaciones

La organización está relacionada con su __cuenta de cliente__ y el __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que tiene la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro roles principales:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local en la consola Shiva o remota a través de un servicio de federación de identidad,
- Lleva todo el conjunto de __cuentas de usuarios__,
- __Federar los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que defina para los requisitos de su arquitectura en la nube.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada para ordenar recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite en el nivel de organización __la configuración del mecanismo de autenticación__. Puede utilizar el repositorio local de autenticación de la consola Shiva o bien conectar su organización a uno de sus repositorios de autenticación.

Los siguientes repositorios externos están soportados:

- Repositorios compatibles con __OpenID Connect__,
- Repositorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Inquilino

El inquilino es un __agrupación de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un inquilino (llamado __inquilino predeterminado__, que puede renombrarse). Generalmente, se utilizan varios inquilinos para segmentar responsabilidades o perímetros técnicos.

Por ejemplo:

- Un inquilino __Producción__
- Un inquilino __Preproducción__
- Un inquilino __Prueba__
- Un inquilino __Calificación__

También es posible organizar las cosas con una __vista aplicativa__ o por __criterio__:

- Un inquilino __Aplicación 1__ o __Criterio 1__
- Un inquilino __Aplicación 2__ o __Criterio 2__
- ...

Los recursos técnicos ordenados se asignan a un inquilino específico y no se comparten con otros inquilinos. Por ejemplo, un clúster de hipervisor y las redes L2 asociadas solo están disponibles en un inquilino.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para garantizar la continuidad de red entre los inquilinos.

Los permisos de los usuarios deben definirse en cada inquilino. Por lo tanto, cada organización debe reflexionar cuidadosamente sobre los inquilinos deseados. Este punto generalmente se aborda en un taller de inicialización, en el momento de la creación de la organización.

Es posible evolucionar la arquitectura agregando o eliminando inquilinos.

Un inquilino no puede estar vacío. Debe inicializarse necesariamente con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Una vlan de red.

| Referencia de pedido                                        | Unidad    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un inquilino                 | 1 inquilino | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 inquilino | csp:(region):iaas:az:v1 |

### Gestión de propietarios en un inquilino

Cada inquilino tiene al menos un propietario, lo que garantiza una responsabilidad clara y una gestión eficiente de los recursos asociados. Además, es posible declarar varios propietarios en el mismo inquilino, lo que permite una colaboración y una toma de decisiones compartida. A continuación, encontrará información importante a tener en cuenta al gestionar a estos propietarios.

#### Información importante sobre la gestión de los propietarios

#### 1. Número de propietarios

* No hay un límite técnico en cuanto al número de propietarios que pueden definirse en el inquilino.
- La interfaz de gestión (UI) emite una advertencia cuando hay más de 3 propietarios, para incentivar a limitar el número de propietarios por razones de seguridad y gestión óptima de los accesos.

#### 2. Adición de un nuevo propietario

* Al agregar un nuevo propietario, la actualización de sus permisos puede requerir un retraso de hasta 60 minutos.
- Este tiempo de propagación es normal y permite garantizar que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.

#### 2. Permisos de un propietario

* Un propietario recibirá todos los permisos relacionados con los productos activados en su tenant.
- No es posible modificar los permisos de un propietario.

#### 3. Retirada de un propietario

* Para retirar a un propietario del inquilino, el usuario debe presentar una solicitud al soporte.
- Este procedimiento permite garantizar que los cambios en los derechos de acceso se realizan de manera segura y en conformidad con las buenas prácticas de gestión de accesos.

### Autorización de acceso a un inquilino: IPs autorizadas

El acceso a la consola de gestión en la nube está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura en la nube según los estándares de seguridad más altos.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un inquilino

Es posible visualizar los recursos cloud consumidos dentro de un inquilino, ofreciendo así una vista detallada del uso de los diferentes servicios implementados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso según las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y seleccione el período de tiempo deseado. Podrá visualizar en detalle el consumo de los recursos cloud en el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

<img src={shivaTenantRessources_01} />