---
title: Concepts
---


## Usuarios

Las cuentas de acceso a la consola Shiva son creadas por la cuenta maestra del cliente por invitación (cualquiera sea el repositorio de autenticación).
Las informaciones de identificación son globales a su [Organización](#organisations).

*__Nota:__ [La federación de identidad se gestiona a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario a una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego en el submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.

![](images/shiva_onboard_001.png)

Una vez completada la verificación, el usuario podrá conectarse a la consola.

### Asignación de permisos a un usuario

La gestión de derechos de los usuarios se realiza desde la página de usuario.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene ningún derecho. Por lo tanto, es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.

Aparecerá el menú de activación de derechos:

![](images/shiva_onboard_005.png)

La configuración de los permisos se debe realizar para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está accesible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido aprovisionado pero no ha validado su inscripción dentro del plazo de expiración del correo enviado por la Consola, ya no puede confirmar su inscripción. Es posible enviarle un enlace para que renueve su primera inscripción.

La reinscripción de un usuario se debe realizar en la pestaña __'Usuarios'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione al usuario que desea reinscribir, luego haga clic en el botón de acción al final de la línea y luego __'Reinscribir'__.

**Advertencia**: Asegúrese de que la solicitud de reinscripción de su cuenta de usuario proviene de usted. Por favor, notifique cualquier solicitud que no provenga de usted mediante un ticket de soporte.

![](images/shiva_profil_012.png)

### Actualizar su perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración del usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Luego vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

**Advertencia**: Asegúrese de que la solicitud de actualización del perfil proviene de usted. Por favor, notifique cualquier solicitud que no provenga de usted mediante un ticket de soporte.

![](images/shiva_profil_014.png)

### Restablecimiento de la contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración del usuario'__ y seleccione la acción __'Restablecer contraseña'__.

Luego vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para restablecer su contraseña.

**Advertencia**: Asegúrese de que la solicitud de restablecimiento de su contraseña proviene de usted. Por favor, notifique cualquier solicitud que no provenga de usted mediante un ticket de soporte.

![](images/shiva_profil_015.png)

### Restablecimiento del doble factor de autenticación

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración del usuario'__ y seleccione la acción __'Restablecer MFA'__.

Luego vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para restablecer su doble factor de autenticación.

**Advertencia**: Asegúrese de que la solicitud de restablecimiento de su doble factor de autenticación proviene de usted. Por favor, notifique cualquier solicitud que no provenga de usted mediante un ticket de soporte.

![](images/shiva_profil_016.png)

### Eliminación de un usuario

La eliminación de un usuario se debe realizar en la pestaña __'Usuarios'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione al usuario que desea eliminar, luego haga clic en el botón de acción al final de la línea y luego __'Eliminar'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Nota: No puede eliminarse a usted mismo y no puede eliminar a un usuario __'Propietario'__.

### Cerrando sesión

La desconexión de un usuario se debe realizar en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Desconectar'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Una desconexión automática se realiza al expirar el token (JWT Token) de sesión.

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se debe realizar en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Configuración del usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relativos a las temáticas activadas que serán automáticamente enviadas en caso de que ocurran eventos correspondientes.

Está accesible en el perfil del usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a esa temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

La consola Shiva permite una gestión detallada de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del cliente la que permite la configuración inicial de cuentas y permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Cuando se crea un usuario, no tiene ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superposición con otros permisos. Se aplican conjuntamente, lo que significa que un usuario debe disponer de todos los permisos requeridos para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de su organización:
	•	Permisos de tipo “read”: permiten únicamente la consulta de recursos sin posibilidad de modificación.
	•	Permisos de tipo “write”: autorizan la modificación de configuraciones.
 	•	Permisos de tipo “management“: autorizan la gestión avanzada de recursos.

- __Son permisos, no roles.__ En este sentido, es necesario tener el permiso READ y WRITE para modificar una configuración.

__VERSIÓN: 20241007__

| Nombre del permiso                            | Descripción del permiso                                                                                                       |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de los registros y actividades                                                                                       |
| activity_write                                | Gestión de los registros y actividades                                                                                        |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                               |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                           |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                 |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                             |
| bastion_read                                  | Consulta de los recursos de tipo bastion                                                                                      |
| bastion_write                                 | Gestión de los recursos (appliances, sesiones,...) de tipo Bastion                                                            |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un appliance Bastion                                |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                               |

| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de los recursos de tipo Máquinas Virtuales                                                        |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de los recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                              |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                           |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de los recursos de tipo Máquinas Virtuales                                                         |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de los recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| baremetal_read                                | Oferta Bare Metal - Consulta de los recursos de tipo Bare Metal                                                               |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                  |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                         |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                                  |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                              |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                        |
| housing_read                                  | Consulta de los recursos de tipo colocación                                                                                 |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                        |
| iam_read                                      | Consulta de los derechos de usuarios                                                                                           |
| iam_write                                     | Gestión de los derechos de usuarios                                                                                                |
| intervention_read                             | Consulta de los cambios y puestas en producción previstas en la plataforma                                                  |
| inventory_read                                | Consulta de los recursos de tipo Inventario                                                                                 |
| inventory_write                               | Gestión de los recursos de tipo Inventario                                                                                      |
| monitoring_read                               | Consulta del monitoreo                                                                                                     |
| monitoring_write                              | Gestión del monitoreo                                                                                                          |
| metric_read                                   | Consulta de los datos de salud sobre las máquinas virtuales y hosts                                                         |
| network_read                                  | Consulta de los recursos de red                                                                                             |
| network_write                                 | Gestión de los recursos de red                                                                                                  |
| order_read                                    | Consulta de los pedidos de infraestructuras                                                                                     |
| order_write                                   | Creación de pedido de infraestructura                                                                                            |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                                       |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                   |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                  |
| openshift_management                          | Permite conectarse a las plataformas Openshift (scopé al tenant)                                                          |
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

- *No hay límite en cuanto al número de propietarios (owners) que pueden ser definidos en el tenant. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 owners, con el fin de incitar a limitar el número de propietarios por razones de seguridad y gestión óptima de los accesos.*
- *Al agregar un nuevo propietario (owner), la actualización de sus permisos puede requerir un plazo de hasta 60 minutos. Este tiempo de propagación es normal y permite asegurarse de que los derechos de acceso sean correctamente aplicados a todos los servicios y recursos asociados.*
- *Para retirar un propietario (owner) del tenant, el usuario debe enviar una solicitud al soporte. Este procedimiento garantiza que los cambios en los derechos de acceso se realicen de manera segura y siguiendo las mejores prácticas de gestión de accesos.*

### Permisos obsoletos

Los siguientes permisos ya no están disponibles :

| Nombre del permiso                           | Fecha       | Descripción del permiso                                                                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consulta de los recursos de tipo backup                                                                     |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestión de los recursos de tipo backup - modificación                                                           |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc) |

| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestión avanzada de recursos VMware                                                                            |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo Máquinas Virtuales                                                               |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestión de recursos de tipo Máquinas Virtuales                                                                |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                              |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestión de nuevos derechos para sí mismo                                                                      |


## Organizaciones

La organización está ligada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Aglutina el conjunto de __cuentas de usuarios__,
- __Federa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede tener permiso para solicitar recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Puede
utilizar el repertorio local de autenticación de la consola Shiva o bien conectar su organización a uno
de sus repertorios de autenticación.

Se soportan los siguientes repertorios externos:

- Repertorios compatibles con __OpenID Connect__,
- Repertorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan varios tenants para segmentar responsabilidades o ámbitos técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Calificación__

Pero también es posible organizarse con una __vista aplicativa__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hipervisores y las redes L2 asociadas solo están disponibles en un tenant.
En lo que respecta a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de red entre los tenants.

Los permisos de los usuarios deben definirse en cada tenant. Así, cada organización debe reflexionar bien sobre los tenants deseados. Este punto generalmente se aborda en un taller de inicialización, en el momento de la creación de la organización.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe necesariamente inicializarse con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un datacenter físico),
- Un clúster de computación,
- Un espacio de almacenamiento,
- Un vlan de red.


| Referencia de pedido                                         | Unidad   | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los más altos estándares de seguridad.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recurso dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso según sus necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá así visualizar en detalle el consumo de los recursos cloud durante el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)