---
title: Concepts
---


## Utilisateurs

Les cuentas de acceso a la consola Shiva son creadas por la cuenta maestra del cliente bajo invitación (sea cual sea el repositorio de autenticación).
Las credenciales son globales a su [Organización](#organisations).

*__Nota :__ [La federación de identidad se gestiona a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario en una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la banda verde y luego en el submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Indique luego la dirección de correo electrónico del usuario

![](images/shiva_onboard_004.png)

El usuario recibirá entonces un correo de verificación.

![](images/shiva_onboard_001.png)

Una vez que la verificación se haya completado, el usuario podrá iniciar sesión en la consola.

### Asignación de permisos a un usuario

La gestión de derechos de usuario se realiza desde la página de usuarios.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que ha hecho la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.

El menú de activación de derechos aparecerá entonces:

![](images/shiva_onboard_005.png)

La configuración de los permisos se debe realizar para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está accesible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido provisionado pero no ha validado su inscripción dentro del plazo de caducidad del correo enviado por la Consola, ya no puede confirmar su inscripción. Es posible enviarle nuevamente un enlace para que renueve su primera inscripción.

La reinscripción de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir y luego haga clic en el botón de acción al final de la línea y luego en __'Reinscripción'__.

![](images/shiva_profil_012.png)

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar y luego haga clic en el botón de acción al final de la línea y luego en __'Eliminar'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Nota: No puede eliminarse a sí mismo y no puede eliminar a un usuario __'Propietario'__.

### Cerrar sesión

Para cerrar sesión, vaya a su __'Perfil'__ en la parte superior derecha de la pantalla, y luego en __'Desconectar'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

### Cambiar el idioma de un usuario

Para cambiar el idioma de un usuario, vaya a su __'Perfil'__ en la parte superior derecha de la pantalla, en __'Configuraciones de usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relativos a los temas activados que se enviarán automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para ese tema.

La lista de temas disponibles es susceptible de evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.



## Permissions

La consola Shiva permite una gestión detallada de los derechos de los usuarios de una organización, con segregación por tenant.
Inicialmente, es la cuenta principal del cliente la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Los siguientes permisos son configurables para cada [usuario](#utilisateurs) y para cada [tenant](#tenants#selection-dun-tenant) de su organización.

- Los permisos de tipo __'read'__ están asociados a la consulta sin posibilidad de configuración
- Los permisos de tipo __'write'__ están asociados a la modificación de configuración.
- __Son permisos, no roles.__ En este sentido, es necesario tener el permiso READ y WRITE para modificar una configuración.

__VERSION : 20241007__

| Nombre del permiso                            | Descripción del permiso                                                                                                     |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de registros y actividades                                                                                         |
| activity_write                                | Gestión de registros y actividades                                                                                          |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                             |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                         |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                               |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                           |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                        |
| bastion_write                                 | Gestión de recursos (aplicaciones, sesiones,...) de tipo Bastion                                                            |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por una aplicación Bastion                            |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                             |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                           |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                            |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                         |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                               |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc.)  |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de recursos VMware                                                                         |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales                                                              |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                           |
| console_public_access_read                    | Consulta de IPs autorizadas a acceder a la consola                                                                          |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                           |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                           |
| documentation_read                            | Consulta de recursos de documentación de confluence                                                                         |

| housing_read                                  | Consultación de recursos de tipo colocation                                                                                   |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                       |
| iam_read                                      | Consultación de derechos de usuarios                                                                                          |
| iam_write                                     | Gestión de derechos de usuarios                                                                                               |
| intervention_read                             | Consultación de cambios y producciones planificadas en la plataforma                                                          |
| inventory_read                                | Consultación de recursos de tipo Inventario                                                                                   |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                        |
| monitoring_read                               | Consultación del monitoreo                                                                                                    |
| monitoring_write                              | Gestión del monitoreo                                                                                                         |
| metric_read                                   | Consultación de datos de salud en las máquinas virtuales y hosts                                                             |
| network_read                                  | Consultación de recursos de red                                                                                               |
| network_write                                 | Gestión de recursos de red                                                                                                    |
| order_read                                    | Consultación de pedidos infraestructurales                                                                                    |
| order_write                                   | Creación de pedidos infraestructurales                                                                                        |
| object-storage_iam_management                 | Permitir gestionar las cuentas de almacenamiento en el producto S3                                                            |
| object-storage_read                           | Permitir ver los buckets y las configuraciones de los buckets                                                                 |
| object-storage_write                          | Permitir editar los buckets y las configuraciones de los buckets                                                              |
| openshift_management                          | Permitir conectarse a las plataformas Openshift (scopé a tenant)                                                              |
| Owner                                         | El usuario tiene los derechos de administración de un tenant                                                                  |
| support_management                            | Consultación de todos los tickets de soporte del tenant                                                                       |
| support_read                                  | Consultación de sus tickets de soporte del tenant                                                                             |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                 |
| tag_read                                      | Consultación de etiquetas, excepto las etiquetas RTMS                                                                         |
| tag_write                                     | Gestión de etiquetas, excepto las etiquetas RTMS                                                                              |
| ticket_comment_read                           | Consultación de comentarios                                                                                                   |
| ticket_comment_write                          | Gestión de comentarios                                                                                                        |
| ticket_read                                   | Consultación de tickets                                                                                                       |
| ticket_write                                  | Gestión de tickets                                                                                                            |

**Notas** :

- *No hay límite para la cantidad de propietarios (owners) que pueden ser definidos en el tenant. Sin embargo, la interfase de gestión (IHM) emite una advertencia cuando hay más de 3 propietarios, para incentivar la limitación de la cantidad de propietarios por razones de seguridad y gestión óptima de accesos.*
- *Al agregar un nuevo propietario (owner), la actualización de sus permisos puede requerir un tiempo de hasta 60 minutos. Este tiempo de propagación es normal y permite asegurar que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.*
- *Para eliminar un propietario (owner) del tenant, el usuario debe enviar una solicitud al soporte. Este procedimiento garantiza que los cambios en los derechos de acceso se realicen de manera segura y conforme a las mejores prácticas de gestión de accesos.*

### Permisos deprecados

Los siguientes permisos ya no están disponibles:

| Nombre del permiso                             | Fecha      | Descripción del permiso                                                                                        |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECADO**)                   | 07/10/2024 | Consultación de recursos de tipo backup                                                                        |
| backup_write (**DEPRECADO**)                   | 07/10/2024 | Gestión de recursos de tipo backup - modificación                                                              |
| compute_console_access (**DEPRECADO**)         | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                  |
| compute_infrastructure_read (**DEPRECADO**)    | 07/10/2024 | Consultación de datos avanzados de recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc)  |
| compute_infrastructure_write (**DEPRECADO**)   | 07/10/2024 | Gestión avanzada de recursos VMware                                                                            |
| compute_read (**DEPRECADO**)                   | 07/10/2024 | Consultación de recursos de tipo Máquinas Virtuales                                                            |
| compute_management (**DEPRECADO**)             | 07/10/2024 | Gestión de recursos de tipo Máquinas Virtuales                                                                 |
| compute_virtual_machine_power (**DEPRECADO**)  | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                              |
| iam_manage_permissions (**DEPRECADO**)         | 07/10/2024 | Gestión de nuevos derechos para uno mismo                                                                      |

## Organizaciones

La organización está asociada a tu __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa tu entidad (empresa, departamento, equipo, ...) que sostiene la relación contractual entre Cloud Temple y tú.

### Principio de una organización

La organización tiene cuatro grandes roles: 

- Representa __la entidad contractual__ para aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Sostiene todos __los usuarios__,
- __Federa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que defines para las necesidades de tu arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en tu organización. Por ejemplo, una cuenta puede estar autorizada a solicitar recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __configurar el mecanismo de autenticación__. Puedes 
utilizar el repositorio local de autenticación de la consola Shiva o conectar tu organización a uno 
de tus repositorios de autenticación.  

Los siguientes repositorios externos son soportados:

- Repositorios compatibles con __OpenID Connect__,
- Repositorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

El tenant es un __grupo de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Qualification__

Mais il est aussi possible d'organiser les choses avec une __vue applicative__ ou par __criticidad__ : 

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Las recursos técnicas solicitadas son asignadas a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hypervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para garantizar la continuidad de red entre los tenants.

Los permisos de los usuarios deben definirse en cada tenant. Así, cada organización debe pensar cuidadosamente en los tenants que desea. Este punto generalmente se aborda en el taller de inicio, en el momento de la creación de la organización.

Es posible evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe ser inicializado necesariamente con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Un vlan de red.


| Referencia de pedido                                         | Unidad   | SKU                     |  
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGIÓN)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGIÓN)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant : IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de accesos no autorizados y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Nota: *La eliminación de una IP autorizada se realiza a través de una solicitud de soporte en la consola de Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada de la utilización de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso según las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá así visualizar en detalle el consumo de los recursos cloud en el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)