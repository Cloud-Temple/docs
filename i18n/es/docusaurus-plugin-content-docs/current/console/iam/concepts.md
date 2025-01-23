---
title: Concepts
---

## Usuarios

Las cuentas de acceso a la consola de Shiva son creadas por la cuenta maestra del cliente bajo invitación (independientemente del repositorio de autenticación).
Las credenciales son globales a su [Organización](#organisations).

*__Nota:__ [La federación de identidad se administra a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario en una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en el banner verde y luego en el submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario.

![](images/shiva_onboard_004.png)

El usuario recibirá un correo de verificación.

![](images/shiva_onboard_001.png)

Una vez completada la verificación, el usuario podrá iniciar sesión en la consola.

### Asignación de permisos a un usuario

La gestión de derechos de los usuarios se realiza desde la página de usuarios.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que hizo la invitación le otorgue los derechos necesarios para su actividad. Simplemente debe hacer clic en el menú __'Acciones'__ del usuario y seleccionar la opción __'Modificar'__.

El menú de activación de derechos aparecerá entonces:

![](images/shiva_onboard_005.png)

La configuración de los permisos debe hacerse para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido aprovisionado pero no ha confirmado su inscripción dentro del tiempo de caducidad del correo enviado por la Consola, ya no puede confirmar su inscripción. Entonces es posible enviarle nuevamente un enlace para que renueve su primera inscripción.

La reinscripción de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione al usuario que desea reinscribir, luego haga clic en el botón de acción al final de la fila y luego en __'Reinscripción'__.

**Warning**: Asegúrese de ser el solicitante legítimo de la reinscripción de su cuenta de usuario. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_012.png)

### Actualizar su perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Luego vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

**Warning**: Asegúrese de ser el solicitante legítimo de la actualización del perfil. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_014.png)

### Restablecimiento de la contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer contraseña'__.

Luego vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su contraseña.

**Warning**: Asegúrese de ser el solicitante legítimo del restablecimiento de su contraseña. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_015.png)

### Restablecimiento del doble factor de autenticación

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer MFA'__.

Luego vaya a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su doble factor de autenticación.

**Warning**: Asegúrese de ser el solicitante legítimo del restablecimiento de su doble factor de autenticación. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_016.png)

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione al usuario que desea eliminar, luego haga clic en el botón de acción al final de la fila y luego en __'Eliminar'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Nota: No puede eliminarse a sí mismo y no puede eliminar un usuario __'Propietario'__.

### Cerrar sesión

Cerrar sesión de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, luego en __'Cerrar sesión'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Se realiza una desconexión automática cuando expira el Token (JWT) de sesión.

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en __'Configuración de usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente cuando ocurran los eventos correspondientes.

Está accesible en el perfil del usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para esa temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

La consola de Shiva permite una gestión fina de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del cliente, la que permite la configuración inicial de las cuentas y permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Cuando un usuario es creado, no posee ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superposición con otros permisos. Se aplican en conjunto, lo que significa que un usuario debe tener todos los permisos necesarios para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de su organización:
	• Permisos de tipo “read”: solo permiten la visualización de recursos sin posibilidad de modificación.
	• Permisos de tipo “write”: autorizan la modificación de configuraciones.
	• Permisos de tipo “management“: autorizan la gestión avanzada de recursos.

- __Son permisos, no roles.__ Como tal, es necesario tener los permisos READ y WRITE para modificar una configuración.

__VERSION: 20250123__

| Nombre del permiso                            | Descripción del permiso                                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de registros y actividades                                                                                           |
| activity_write                                | Gestión de registros y actividades                                                                                            |
| backup_iaas_opensource_read                   | Gestión de recursos tipo backup - Oferta OpenIaaS - consulta                                                                  |
| backup_iaas_opensource_write                  | Gestión de recursos tipo backup - Oferta OpenIaaS - modificación                                                              |
| backup_iaas_spp_read                          | Gestión de recursos tipo backup - Oferta Vmware - consulta                                                                    |
| backup_iaas_spp_write                         | Gestión de recursos tipo backup - Oferta Vmware - modificación                                                                |
| bastion_read                                  | Consulta de recursos tipo bastion                                                                                             |
| bastion_write                                 | Gestión de recursos (appliances, sesiones,...) tipo Bastion                                                                   |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un appliance Bastion                                 |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                                |

| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS -Consulta de datos avanzados de los recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS -Gestión avanzada de los recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Oferta OpenIaaS -Consulta de recursos tipo Máquinas Virtuales                                                        |
| compute_iaas_opensource_management            | Oferta OpenIaaS -Gestión de recursos tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS -Gestión de la alimentación de una máquina virtual                                                              |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                           |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos tipo Máquinas Virtuales                                                         |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| baremetal_read                                | Oferta Bare Metal - Consulta de recursos tipo Bare Metal                                                               |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                  |
| console_public_access_read                    | Consulta de las IP autorizadas a acceder a la consola                                                                         |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                                  |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                              |
| documentation_read                            | Consulta de recursos de documentación de confluence                                                                        |
| housing_read                                  | Consulta de recursos tipo colocation                                                                                 |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                        |
| iam_read                                      | Consulta de derechos de usuarios                                                                                           |
| iam_write                                     | Gestión de derechos de usuarios                                                                                                |
| intervention_read                             | Consulta de cambios y puestas en producción previstas en la plataforma                                                  |
| inventory_read                                | Consulta de recursos tipo Inventario                                                                                 |
| inventory_write                               | Gestión de recursos tipo Inventario                                                                                      |
| monitoring_read                               | Consulta del monitoreo                                                                                                     |
| monitoring_write                              | Gestión del monitoreo                                                                                                          |
| metric_read                                   | Consulta de datos de salud sobre las máquinas virtuales y hosts                                                         |
| network_read                                  | Consulta de recursos de red                                                                                             |
| network_write                                 | Gestión de recursos de red                                                                                                  |
| order_read                                    | Consulta de pedidos de infraestructuras                                                                                     |
| order_write                                   | Creación de pedido de infraestructura                                                                                            |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                                       |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                   |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                  |
| openshift_management                          | Permite conectarse a las plataformas Openshift (limitado al tenant)                                                          |
| support_management                            | consulta de todos los tickets de soporte del tenant                                                                       |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                  |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                     |
| tag_read                                      | Consulta de etiquetas, excepto las etiquetas RTMS                                                                                   |
| tag_write                                     | Gestión de etiquetas, excepto las etiquetas RTMS                                                                                        |
| ticket_comment_read                           | Consulta de comentarios                                                                                                  |
| ticket_comment_write                          | Gestión de comentarios                                                                                                       |
| ticket_read                                   | Consulta de tickets                                                                                                       |
| ticket_write                                  | Gestión de tickets                                                                                                            |

**Notas** :

- *No hay ningún límite en cuanto al número de owners (propietarios) que se pueden definir en el tenant. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 owners, con el fin de incitar a limitar el número de propietarios por razones de seguridad y una gestión óptima de accesos.*
- *Al añadir un nuevo propietario (owner), la actualización de sus permisos puede requerir un plazo de hasta 60 minutos. Este tiempo de propagación es normal y permite asegurar que los derechos de acceso se aplican correctamente a todos los servicios y recursos asociados.*
- *Para retirar un propietario (owner) del tenant, el usuario debe enviar una solicitud al soporte. Este procedimiento garantiza que los cambios en los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.*

### Permisos obsoletos

Los siguientes permisos ya no están disponibles :

| Nombre del permiso                            | Fecha       | Descripción del permiso                                                                                   |
| --------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                 | 07/10/2024 | Consulta de recursos tipo backup                                                                     |
| backup_write (**DEPRECATED**)                 | 07/10/2024 | Gestión de recursos tipo backup - modificación                                                           |
| compute_console_access (**DEPRECATED**)       | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                |
| compute_infrastructure_read (**DEPRECATED**)  | 07/10/2024 | Consulta de datos avanzados de recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc) |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestión avanzada de recursos VMware                                                                           |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo Máquinas Virtuales                                                               |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestión de recursos de tipo Máquinas Virtuales                                                                |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                             |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestión de nuevos derechos para sí mismo                                                                      |


## Organizaciones

La organización está ligada a su __cuenta sponsor__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Soporta el conjunto de __cuentas de usuarios__,
- __Federe los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a solicitar recursos en un tenant pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Usted puede
utilizar el repositorio local de autenticación de la consola Shiva o bien vincular su organización a uno
de sus repositorios de autenticación.

Los siguientes repositorios externos son compatibles:

- Repositorios compatibles con __OpenID Connect__,
- Repositorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

El tenant es una __agregación de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant de __Producción__
- Un tenant de __Preproducción__
- Un tenant de __Receta__
- Un tenant de __Calificación__

Pero también es posible organizar las cosas con una __vista aplicativa__ o por __criticidad__:

- Un tenant de __Aplicación 1__ o __Criticidad 1__
- Un tenant de __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hypervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
Con respecto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de la red entre los tenants.

Las permisos de los usuarios deben definirse en cada tenant. Por lo tanto, cada organización debe reflexionar bien sobre los tenants deseados. Este punto generalmente se aborda en un taller de inicialización, en el momento de creación de la organización.

Es posible evolucionar la arquitectura agregando o eliminando tenants.

Un tenant no puede estar vacío. Debe ser inicializado con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cómputo,
- Un espacio de almacenamiento,
- Un VLAN de red.


| Referencia de la orden                                       | Unidad   | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad| 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión en la nube está estrictamente limitado a las direcciones IP previamente autorizadas, conforme a las exigencias de la certificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura en la nube según los estándares de seguridad más elevados.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos de la nube consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso en función de las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá visualizar en detalle el consumo de recursos en la nube durante el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)