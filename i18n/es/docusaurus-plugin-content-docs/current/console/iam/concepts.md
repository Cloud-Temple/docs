---
title: Concepts
---


## Utilisateurs

Les comptes d'accès à la console Shiva sont créados por la cuenta maestra del solicitante por invitación (cualquiera que sea el repositorio de autenticación).
Las credenciales son globales para tu [Organización](#organisations).

*__Nota:__ [La federación de identidad se gestiona a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Creación de una cuenta de usuario en tu organización

La creación de una cuenta de usuario en tu organización se realiza por invitación. Para invitar a un usuario a una [Organización](#organisations), ve al menú __'Administración'__ a la izquierda de tu pantalla en la barra verde y luego al submenú __'Usuarios'__.

Haz clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Luego, indica la dirección de correo electrónico del usuario

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.

![](images/shiva_onboard_001.png)

Una vez que se haya completado la verificación, el usuario podrá iniciar sesión en la consola.

### Asignación de permisos a un usuario

La gestión de los derechos de los usuarios se realiza desde la página de usuario.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que hizo la invitación le otorgue los derechos necesarios para su actividad. Simplemente haz clic en el menú __'Acciones'__ del usuario y selecciona la opción __'Modificar'__.

El menú de activación de derechos aparecerá entonces:

![](images/shiva_onboard_005.png)

La configuración de permisos se debe hacer para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido provisionado pero no ha validado su inscripción dentro del plazo de expiración del correo enviado por la Consola, no puede confirmar su inscripción. Entonces, es posible enviarle un nuevo enlace para que renueve su primera inscripción.

La reinscripción de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Selecciona el usuario que deseas reinscribir, luego haz clic en el botón de acción al final de la línea y luego __'Reinscripción'__.

**Warning**: Asegúrate de ser el originador de la solicitud de reinscripción de tu cuenta de usuario. Por favor, reporta cualquier solicitud que no provenga de ti mediante un ticket de soporte.

![](images/shiva_profil_012.png)

### Actualizar tu perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Selecciona en tu __'Perfil'__, en la parte superior derecha de la pantalla y luego __'Configuración del usuario'__ y selecciona la acción __'Actualizar tu perfil'__.

Luego, ve a tu bandeja de entrada y haz clic en el enlace generado por la Consola. Simplemente sigue los pasos para actualizar tu perfil.

**Warning**: Asegúrate de ser el originador de la solicitud de actualización de perfil. Por favor, reporta cualquier solicitud que no provenga de ti mediante un ticket de soporte.

![](images/shiva_profil_014.png)

### Restablecimiento de contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Selecciona en tu __'Perfil'__, en la parte superior derecha de la pantalla y luego __'Configuración del usuario'__ y selecciona la acción __'Restablecer contraseña'__.

Luego, ve a tu bandeja de entrada y haz clic en el enlace generado por la Consola. Simplemente sigue los pasos para actualizar tu contraseña.

**Warning**: Asegúrate de ser el originador de la solicitud de restablecimiento de tu contraseña. Por favor, reporta cualquier solicitud que no provenga de ti mediante un ticket de soporte.

![](images/shiva_profil_015.png)

### Restablecimiento del segundo factor de autenticación

Esta acción solo está disponible para una cuenta local (no SSO).

Selecciona en tu __'Perfil'__, en la parte superior derecha de la pantalla y luego __'Configuración del usuario'__ y selecciona la acción __'Restablecer MFA'__.

Luego, ve a tu bandeja de entrada y haz clic en el enlace generado por la Consola. Simplemente sigue los pasos para actualizar tu segundo factor de autenticación.

**Warning**: Asegúrate de ser el originador de la solicitud de restablecimiento de tu segundo factor de autenticación. Por favor, reporta cualquier solicitud que no provenga de ti mediante un ticket de soporte.

![](images/shiva_profil_016.png)

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Selecciona el usuario que deseas eliminar, luego haz clic en el botón de acción al final de la línea y luego __'Eliminar'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Nota: No puedes eliminarte a ti mismo y no puedes eliminar a un usuario __'Propietario'__.

### Cerrar sesión

La desconexión de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Desconectar'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Una desconexión automática se realiza cuando expira el token (JWT Token) de sesión.

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en __'Configuraciones del usuario'__.

![](images/shiva_profil_006.png)

La configuración se hace para cada [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con temáticas activadas que se enviarán automáticamente cuando ocurra un evento correspondiente.

Es accesible desde el perfil del usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse gradualmente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

La consola Shiva permite una gestión detallada de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del solicitante la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de tu organización

Los siguientes permisos son configurables para cada [usuario](#utilisateurs) y para cada [tenant](#tenants#selection-dun-tenant) de tu organización.

Permisos disponibles para los usuarios de tu organización

Cuando se crea un usuario, no posee ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superposición con otros permisos. Se aplican de modo conjunto, lo que significa que un usuario debe disponer de todos los permisos necesarios para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de tu organización:
	•	Permisos de tipo “read”: permiten únicamente la consulta de recursos sin posibilidad de modificación.
	•	Permisos de tipo “write”: autorizan la modificación de configuraciones.
 	•	Permisos de tipo “management“: autorizan la gestión avanzada de recursos.

- __Son permisos, no roles.__ Por lo tanto, es necesario tener permiso READ y WRITE para modificar una configuración.

__VERSIÓN: 20241007__

| Nombre del permiso                            | Descripción del permiso                                                                                                       |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de registros y actividades                                                                                           |
| activity_write                                | Gestión de registros y actividades                                                                                            |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                               |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                           |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                 |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                             |
| bastion_read                                  | Consulta de recursos de tipo bastión                                                                                          |
| bastion_write                                 | Gestión de recursos (appliances, sesiones,...) de tipo Bastión                                                                |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un appliance Bastión                                |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                                |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de los recursos de tipo Máquinas Virtuales                                                        |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de los recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                              |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas de afinidad/antiafinidad, configuración drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                           |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de los recursos de tipo Máquinas Virtuales                                                         |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de los recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| baremetal_read                                | Oferta Bare Metal - Consulta de los recursos de tipo Bare Metal                                                               |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                  |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                         |
| console_public_access_write                   | Agregar IPs autorizadas a acceder a la consola                                                                                  |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                              |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                        |
| housing_read                                  | Consulta de los recursos de tipo colocation                                                                                 |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                        |
| iam_read                                      | Consulta de los derechos de usuario                                                                                           |
| iam_write                                     | Gestión de los derechos de usuario                                                                                                |
| intervention_read                             | Consulta de los cambios y puestas en producción previstas en la plataforma                                                  |
| inventory_read                                | Consulta de los recursos de tipo Inventario                                                                                 |
| inventory_write                               | Gestión de los recursos de tipo Inventario                                                                                      |
| monitoring_read                               | Consulta del monitoreo                                                                                                     |
| monitoring_write                              | Gestión del monitoreo                                                                                                          |
| metric_read                                   | Consulta de los datos de salud sobre las máquinas virtuales y hosts                                                        |
| network_read                                  | Consulta de los recursos de red                                                                                             |
| network_write                                 | Gestión de los recursos de red                                                                                                  |
| order_read                                    | Consulta de las órdenes de infraestructuras                                                                                     |
| order_write                                   | Creación de órdenes de infraestructura                                                                                            |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                                       |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                   |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                  |
| openshift_management                          | Permite conectarse a las plataformas Openshift (limitado al tenant)                                                          |
| Owner                                         | El usuario tiene los derechos de administración de un tenant                                                                        |
| support_management                            | consulta de todos los tickets de soporte del tenant                                                                       |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                  |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                     |
| tag_read                                      | Consulta de las etiquetas, excepto las etiquetas RTMS                                                                                   |
| tag_write                                     | Gestión de las etiquetas, excepto las etiquetas RTMS                                                                                        |
| ticket_comment_read                           | Consulta de los comentarios                                                                                                  |
| ticket_comment_write                          | Gestión de los comentarios                                                                                                       |
| ticket_read                                   | Consulta de los tickets                                                                                                       |
| ticket_write                                  | Gestión de los tickets                                                                                                            |

**Notas** :

- *No hay límite en cuanto al número de propietarios (owners) que pueden ser definidos en el tenant. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 propietarios, para incitar a limitar el número de propietarios por razones de seguridad y gestión óptima de accesos.*
- *Al agregar un nuevo propietario (owner), la actualización de sus permisos puede tomar hasta 60 minutos. Este tiempo de propagación es normal y asegura que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.*
- *Para retirar un propietario (owner) del tenant, el usuario debe enviar una solicitud al soporte. Este procedimiento garantiza que los cambios en los derechos de acceso se realicen de manera segura y conforme a las mejores prácticas de gestión de accesos.*

### Permisos deprecados

Los siguientes permisos ya no están disponibles:

| Nombre del permiso                           | Fecha       | Descripción del permiso                                                                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consulta de los recursos de tipo backup                                                                     |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestión de los recursos de tipo backup - modificación                                                           |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                 |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)    |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestión avanzada de los recursos VMware                                                                       |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consulta de los recursos de tipo Máquinas Virtuales                                                           |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestión de los recursos de tipo Máquinas Virtuales                                                            |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                             |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestión de nuevos derechos para uno mismo                                                                     |


## Organisations

La organización está relacionada con su __cuenta patrocinadora__ y el __contrato asociado Cloud Temple__. Representa su entidad (empresa, departamento, equipo, ...) que sostiene la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa la __entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Lleva todos los __cuentas de usuario__,
- __Agrupa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permiso) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a solicitar recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Puede
utilizar el repositorio local de autenticación de la consola Shiva o bien vincular su organización a uno
de sus repositorios de autenticación.

Se soportan los siguientes repositorios externos:

- Repositorios compatibles con __OpenID Connect__,
- Repositorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan múltiples tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Calificación__

Pero también es posible organizar las cosas con una __vista aplicativa__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados están asignados a un tenant específico y no se comparten con los demás tenants. Por ejemplo, un clúster de Hypervisor y las redes L2 asociadas solo están disponibles en un tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de red entre los tenants.

Las permisos de los usuarios deben definirse en cada tenant. Así cada organización debe pensar bien en los tenants deseados. Este punto generalmente se aborda en un taller de iniciación, en el momento de la creación de la organización.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe necesariamente inicializarse con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Un vlan de red.


| Referencia de pedido                                        | Unidad   | SKU                     |
|------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant              | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios que provengan de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Nota: *La eliminación de una IP autorizada se hace mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso en función de las necesidades.

En el menú de la consola, haga clic en "Reporte de consumo" y luego seleccione el período de tiempo deseado. Podrá visualizar en detalle el consumo de los recursos cloud en el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)