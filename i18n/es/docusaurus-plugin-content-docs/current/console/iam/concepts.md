---
title: Concepts
---


## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maitre du commanditaire sur invitation (quelque soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario en una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego en el submenú __'Usuarios'__.  

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios. 

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario 

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.  

![](images/shiva_onboard_001.png)

Una vez que la verificación haya sido completada, el usuario podrá conectarse a la consola.

### Asignación de permisos a un usuario

La gestión de derechos de usuarios se realiza desde la página de usuarios.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que envió la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.  

Entonces aparece el menú de activación de derechos:

![](images/shiva_onboard_005.png)

La configuración de los permisos debe realizarse para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición están disponibles [aquí](#permissions).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes de usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](#tenants).

### Suscripción a las notificaciones temáticas

La gestión de suscripciones permite recibir los correos electrónicos relativos a los temas activados que serán enviados automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para este tema.

La lista de temas disponibles puede evolucionar y enriquecerse gradualmente para adaptarse a las necesidades y cambios en nuestro entorno operativo.



## Permissions

La consola Shiva permite una gestión precisa de los derechos de los usuarios de una organización, con una segmentación por tenant.
Inicialmente, es la cuenta principal del cliente la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Los siguientes permisos son configurables para cada [usuario](#utilisateurs) y para cada [tenant](#tenants#selection-dun-tenant) de su organización.

- Los permisos de tipo __'read'__ están asociados a la consulta sin posibilidad de configuración.
- Los permisos de tipo __'write'__ están asociados a la modificación de la configuración.
- __Estos son permisos, no roles.__ Por lo tanto, es necesario tener el permiso READ y WRITE para modificar una configuración.

__VERSIÓN : 20241007__

| Nombre del permiso                            | Descripción del permiso                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta de registros y actividades                                                                                           |
| activity_write                                | Gestión de registros y actividades                                                                                            |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                               |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                           |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                 |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                             |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                          |
| bastion_write                                 | Gestión de recursos (aparatos, sesiones,...) de tipo Bastion                                                                  |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un aparato Bastion                                  |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                               |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                       |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                              |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                           |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)    |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                       |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                               |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales                                                                |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                             |
| console_public_access_read                    | Consulta de las IP autorizadas a acceder a la consola                                                                         |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                             |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                             |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                       |
| housing_read                                  | Consulta de recursos de tipo colocation                                                                                       |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                       |
| iam_read                                      | Consulta de derechos de usuarios                                                                                              |
| iam_write                                     | Gestión de derechos de usuarios                                                                                               |
| intervention_read                             | Consulta de cambios y puestas en producción previstas en la plataforma                                                        |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                       |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                        |
| monitoring_read                               | Consulta del monitoreo                                                                                                        |

| monitoring_write                              | Gestión del monitoreo                                                                                                          |
| metric_read                                   | Consulta de datos de salud en máquinas virtuales y hosts                                                                      |
| network_read                                  | Consulta de recursos de red                                                                                                   |
| network_write                                 | Gestión de recursos de red                                                                                                    |
| order_read                                    | Consulta de pedidos de infraestructura                                                                                        |
| order_write                                   | Creación de pedidos de infraestructura                                                                                        |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                             |
| object-storage_read                           | Permite ver los buckets y configuraciones de los buckets                                                                      |
| object-storage_write                          | Permite editar los buckets y configuraciones de los buckets                                                                   |
| openshift_management                          | Permite conectarse a las plataformas Openshift (específico del tenant)                                                        |
| Owner                                         | El usuario tiene derechos de administración de un tenant                                                                      |
| support_management                            | Consulta de todos los tickets de soporte del tenant                                                                           |
| support_read                                  | Consulta de sus propios tickets de soporte del tenant                                                                         |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                 |
| tag_read                                      | Consulta de etiquetas, excepto etiquetas RTMS                                                                                 |
| tag_write                                     | Gestión de etiquetas, excepto etiquetas RTMS                                                                                  |
| ticket_comment_read                           | Consulta de comentarios                                                                                                       |
| ticket_comment_write                          | Gestión de comentarios                                                                                                        |
| ticket_read                                   | Consulta de tickets                                                                                                           |
| ticket_write                                  | Gestión de tickets                                                                                                            |

**Notes** :

- *No hay ningún límite en el número de owners (propietarios) que se pueden definir en el tenant. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 owners, con el fin de incentivar a limitar el número de propietarios por razones de seguridad y gestión óptima de accesos.*
- *Al agregar un nuevo propietario (owner), la actualización de sus permisos puede tardar hasta 60 minutos. Este tiempo de propagación es normal y permite asegurar que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.*
- *Para retirar un propietario (owner) del tenant, el usuario debe enviar una solicitud al soporte. Este procedimiento garantiza que las modificaciones de los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.*

### Permisos obsoletos

Los siguientes permisos ya no están disponibles:

| Nombre del permiso                             | Fecha      | Descripción del permiso                                                                                        |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo backup                                                                            |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestión de recursos de tipo backup - modificación                                                              |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                  |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consulta de datos avanzados de recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc.)     |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestión avanzada de recursos VMware                                                                            |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo Máquinas Virtuales                                                                |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestión de recursos de tipo Máquinas Virtuales                                                                 |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                              |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestión de nuevos derechos para uno mismo                                                                      |


## Organizaciones

La organización está ligada a su __cuenta contratante__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que tiene la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Abarca todas las __cuentas de usuario__,
- __Aglutina los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a pedir recursos en un tenant pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Usted puede
utilizar el repositorio local de autenticación de la consola Shiva o bien conectar su organización a uno de sus
repositorios de autenticación.

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

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Recetas__
- Un tenant __Calificación__

Pero también es posible organizar las cosas con una __vista aplicativa__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hypervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de la red entre los tenants.

Las permisos de los usuarios se deben definir en cada tenant. Así, cada organización debe pensar bien en los tenants que desea. Esto generalmente se aborda en el taller inicial, al momento de la creación de la organización.

Es posible evolucionar la arquitectura agregando o eliminando tenants.

Un tenant no puede estar vacío. Debe necesariamente estar inicializado con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Un vlan de red.

| Référence de commande                                        | Unité    | SKU                     |  
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                  | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más altos.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recurso dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso en función de las necesidades.

En el menú de la consola, haga clic en "Reporte de consumo" y luego seleccione el período de tiempo deseado. Podrá visualizar en detalle el consumo de recursos cloud durante el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)