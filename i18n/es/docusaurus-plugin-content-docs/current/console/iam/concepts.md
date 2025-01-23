---
title: Concepts
---


## Utilisateurs

Les comptes d'accès à la console Shiva sont créados por la cuenta maestra del solicitante por invitación (cualquiera que sea el repositorio de autenticación).
Las credenciales de autenticación son globales a su [Organización](#organisations).

*__Nota :__ [La federación de identidad se gestiona a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario en una [Organización](#organisations), ir al menú __'Administración'__ a la izquierda de su pantalla en la banda verde y luego en el submenú __'Usuarios'__.  

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios. 

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario 

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.  

![](images/shiva_onboard_001.png)

Una vez la verificación esté completa, el usuario podrá iniciar sesión en la consola.

### Affectation des permissions à un utilisateur

La gestión de los derechos de usuarios se realiza desde la página de usuario. 

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.  

El menú de activación de derechos aparece entonces:

![](images/shiva_onboard_005.png)

La configuración de los permisos se debe hacer para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está accesible [aquí](#permissions).

### Réinscription d'un utilisateur

Cuando un usuario ha sido aprovisionado pero no ha validado su inscripción dentro del plazo de expiración del correo enviado por la Consola, ya no puede confirmar su inscripción. Entonces es posible enviarle un nuevo enlace para que renueve su primera inscripción.

La reinscripción de un usuario se debe realizar en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir, luego haga clic en el botón de acción al final de la línea y luego __'Reinscripción'__.

**Warning**: Asegúrese de ser el solicitante de la reinscripción de su cuenta de usuario. Por favor reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_012.png)

### Mettre à jour son profil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Luego vaya a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

**Warning**: Asegúrese de ser el solicitante de la actualización del perfil. Por favor reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_014.png)

### Réinitialisation du mot de passe

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer contraseña'__.

Luego vaya a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su contraseña.

**Warning**: Asegúrese de ser el solicitante del restablecimiento de su contraseña. Por favor reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_015.png)

### Réinitialisation du double facteur d'authentification

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer MFA'__.

Luego vaya a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su doble factor de autenticación.

**Warning**: Asegúrese de ser el solicitante del restablecimiento de su doble factor de autenticación. Por favor reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_016.png)

### Suppression d'un utilisateur

La eliminación de un usuario se debe realizar en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar, luego haga clic en el botón de acción al final de la línea y luego __'Eliminar'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: No puede eliminarse a sí mismo y no puede eliminar un usuario __'Propietario'__.

### Se déconnecter

La desconexión de un usuario se debe realizar en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Desconectar'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Se realiza una desconexión automática cuando expira el token de sesión (JWT Token).

### Changer la langue d'un utilisateur

El cambio de idioma de un usuario se debe realizar en su __'Perfil'__, en la parte superior derecha de la pantalla, en la __'Configuración de usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](#tenants).

### Abonnement aux notifications thématiques

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil del usuario, en la pestaña "Mis suscripciones" :

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para esta temática.

La lista de temáticas disponibles es susceptible de evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y a los cambios en nuestro entorno operativo.

## Permissions

La consola Shiva permite una gestión precisa de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del solicitante la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permissions disponibles pour les utilisateurs de votre organisation

Los siguientes permisos son configurables para cada [usuario](#utilisateurs) y para cada [tenant](#tenants#selection-dun-tenant) de su organización.

- Los permisos de tipo __'read'__ están asociados con la consulta sin posibilidad de configuración
- Los permisos de tipo __'write'__ están asociados con la modificación de configuración.
- __Son permisos, no roles.__ Por lo tanto, es necesario tener los permisos READ y WRITE para modificar una configuración.

__VERSION : 20241007__

| Nombre del permiso                            | Descripción del permiso                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta de registros y actividades                                                                                            |
| activity_write                                | Gestión de registros y actividades                                                                                             |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                                |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                            |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                  |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                              |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                           |
| bastion_write                                 | Gestión de recursos (aplicaciones, sesiones,...) de tipo Bastion                                                               |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por una aplicación Bastion                               |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra                                                    |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                               |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de los recursos de tipo Máquinas Virtuales                                                          |

| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                           |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                      |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                             |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)|
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                   |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                           |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales                                                            |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                         |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                    |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                         |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                         |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                   |
| housing_read                                  | Consulta de recursos de tipo colocation                                                                                   |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                   |
| iam_read                                      | Consulta de derechos de usuarios                                                                                          |
| iam_write                                     | Gestión de derechos de usuarios                                                                                           |
| intervention_read                             | Consulta de los cambios y despliegues previstos en la plataforma                                                          |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                   |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                    |
| monitoring_read                               | Consulta del monitoreo                                                                                                    |
| monitoring_write                              | Gestión del monitoreo                                                                                                     |
| metric_read                                   | Consulta de los datos de salud sobre las máquinas virtuales y hosts                                                       |
| network_read                                  | Consulta de recursos de red                                                                                               |
| network_write                                 | Gestión de recursos de red                                                                                                |
| order_read                                    | Consulta de las órdenes de infraestructuras                                                                               |
| order_write                                   | Creación de órdenes de infraestructura                                                                                    |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                         |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                              |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                           |
| openshift_management                          | Permite conectarse a las plataformas Openshift (scopé al tenant)                                                          |
| Owner                                         | El usuario tiene los derechos de administración de un tenant                                                              |
| support_management                            | Consulta de todos los tickets de soporte del tenant                                                                       |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                             |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                             |
| tag_read                                      | Consulta de tags, excepto los tags RTMS                                                                                   |
| tag_write                                     | Gestión de tags, excepto los tags RTMS                                                                                    |
| ticket_comment_read                           | Consulta de comentarios                                                                                                   |
| ticket_comment_write                          | Gestión de comentarios                                                                                                    |
| ticket_read                                   | Consulta de tickets                                                                                                       |
| ticket_write                                  | Gestión de tickets                                                                                                        |

**Notas** :

- *No hay límite en el número de propietarios (owners) que se pueden definir en el tenant. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 propietarios, para incentivar a limitar el número de propietarios por razones de seguridad y gestión óptima de accesos.*
- *Al agregar un nuevo propietario (owner), la actualización de sus permisos puede tardar hasta 60 minutos. Este tiempo de propagación es normal y asegura que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.*
- *Para retirar un propietario (owner) del tenant, el usuario debe presentar una solicitud al soporte. Este procedimiento garantiza que las modificaciones de los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.*

### Permisos obsoletos

Los siguientes permisos ya no están disponibles:

| Nombre del permiso                             | Fecha      | Descripción del permiso                                                                                   |
| ---------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo backup                                                                       |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestión de recursos de tipo backup - modificación                                                         |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura de la consola de una máquina virtual                                                             |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)|
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestión avanzada de los recursos VMware                                                                   |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo Máquinas Virtuales                                                           |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestión de recursos de tipo Máquinas Virtuales                                                            |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                         |
| iam_manage_permissions (**DÉPRECADO**)        | 07/10/2024 | Gestión de nuevos derechos para sí mismo                                                                      |


## Organizaciones

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles: 

- Representa a la __entidad contractual__ para los aspectos de seguimiento y facturación,
- Define la __configuración global del mecanismo de autenticación__: la autenticación puede ser local al nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Porta el conjunto de __cuentas de usuario__,
- __Agrupa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a pedir recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Usted puede 
utilizar el repositorio local de autenticación de la consola Shiva o bien acoplar su organización a uno 
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

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede renombrarse). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Calificación__

Pero también es posible organizar las cosas con una __vista de aplicación__ o por __criticidad__: 

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de hipervisor y las redes L2 asociadas sólo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de red entre los tenants.

Las permisos de los usuarios se deben definir en cada tenant. Así, cada organización debe considerar bien los tenants deseados. Este punto se aborda generalmente en el taller de inicio, en el momento de creación de la organización.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe necesariamente ser inicializado con un mínimo de recurso:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Un vlan de red.


| Referencia de pedido                                        | Unidad    | SKU                     |  
|-------------------------------------------------------------|---------- |-------------------------|
| TENANT - *(REGION)* - Activación de un tenant               | 1 tenant  | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de administración cloud está estrictamente limitado a las direcciones IP previamente autorizadas, conforme con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso únicamente a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Nota: *La eliminación de una IP autorizada se realiza a través de una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recurso dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada de la utilización de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios monitorear en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso en función de las necesidades. 

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá visualizar en detalle el consumo de los recursos cloud durante el período definido, lo que le permitirá analizar la utilización de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)