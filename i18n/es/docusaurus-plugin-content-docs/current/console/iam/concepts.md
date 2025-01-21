---
title: Concepts
---

## Utilisateurs

Les comptes d'accès à la console Shiva sont créados por el cuenta maitre du commanditaire sur invitación (quelque soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La création d'un compte utilisateur dans votre organisation se fait par invitación. Para invitar a un usuario en una [Organisation](#organisations), ve al menú __'Administration'__ a la izquierda de tu pantalla en la banda verde y luego en el submenú __'Utilisateurs'__.  

Haga clic en el botón __'Nouvel Utilisateur'__ desde la página de usuarios. 

![](images/shiva_onboard_003.png)

Luego, indique la dirección de correo electrónico del usuario 

![](images/shiva_onboard_004.png)

El usuario entonces recibirá un correo de verificación.  

![](images/shiva_onboard_001.png)

Una vez completada la verificación, el usuario podrá conectarse a la consola.

### Affectation des permissions à un utilisateur

La gestion des droits utilisateurs se fait depuis la página de usuario. 

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene permisos. Por lo tanto, es necesario que el administrador que hizo la invitación le otorgue los permisos necesarios para su actividad. Solo es necesario hacer clic en el menú __'Actions'__ del usuario y elegir la opción __'Modifier'__.  

El menú de activación de permisos aparece entonces:

![](images/shiva_onboard_005.png)

La configuración de los permisos debe realizarse para cada [Tenant](#tenants) de la [Organisation](#organisations).

La lista de permisos y su definición es accesible [aquí](#permissions).

### Réinscription d'un utilisateur

Lorsqu'un utilisateur a été provisionné mais n'a pas validé son inscription dans le délai d'expiration du mail envoyé par la Console, il ne peut plus confirmer son inscription. Il est alors possible de lui renvoyer un lien afin qu'il renouvelle sa première inscription.

La réinscription d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez el usuario que desea reinscribir, luego haga clic en el botón de acción al final de la línea y luego __'Réinscription'__.

![](images/shiva_profil_012.png)

### Suppression d'un utilisateur

La suppression d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez el usuario que desea eliminar, luego haga clic en el botón de acción al final de la línea y luego __'Supprimer'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: No puede eliminarse a sí mismo y no puede eliminar a un usuario __'Propriétaire'__.

### Se déconnecter

La déconnexion d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, puis __'Déconnecter'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

### Changer la langue d'un utilisateur

Le changement de langue d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, dans les __'Paramètres utilisateur'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](#tenants).

### Abonnement aux notifications thématiques

La gestion des abonnements permet de recevoir les e-mails relatifs aux thématiques activées qui seront automatiquement envoyés lors de la survenue d'événements correspondants.

Elle est accessible dans le profil utilisateur, dans l'onglet "Mes abonnements" :

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a esta temática.

La liste des thématiques disponibles est susceptible d'évoluer et de s'enrichir progressivement pour s'adapter aux besoins et aux changements dans notre environnement opérationnel.



## Permissions

La console Shiva permet una gestión fina de los permisos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del commanditaire la que permite la configuración inicial de las cuentas y los permisos asociados.
Por la suite, el permiso __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permissions disponibles pour les utilisateurs de votre organisation

Les permissions suivantes sont configurables pour cada [utilisateur](#utilisateurs) y para cada [tenant](#tenants#selection-dun-tenant) de vuestra organización.

- Los permisos de tipo __'read'__ están asociados a la consulta sin posibilidad de configuración
- Los permisos de tipo __'write'__ están asociados a la modificación de la configuración.
- __Ce sont des permissions, pas des rôles.__ À ce titre, il est nécessaire d'avoir la permission READ y WRITE para modificar una configuración.

__VERSION : 20241007__

| Nom de la permission                          | Descripción del permiso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de los registros de logs y actividades                                                                               |
| activity_write                                | Gestión de los registros de logs y actividades                                                                                |
| backup_iaas_opensource_read                   | Gestión de los recursos tipo backup - Offre OpenIaaS - consulta                                                               |
| backup_iaas_opensource_write                  | Gestión de los recursos tipo backup - Offre OpenIaaS - modificación                                                           |
| backup_iaas_spp_read                          | Gestión de los recursos tipo backup - Oferta Vmware - consulta                                                                |
| backup_iaas_spp_write                         | Gestión de los recursos tipo backup - Oferta Vmware - modificación                                                            |
| bastion_read                                  | Consulta de los recursos tipo bastion                                                                                         |
| bastion_write                                 | Gestión de los recursos (appliances, sesiones,...) de tipo Bastion                                                             |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un appliance Bastion                                 |
| compute_iaas_opensource_console_access        | Offre OpenIaaS - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_opensource_infrastructure_read   | Offre OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra                                                     |
| compute_iaas_opensource_infrastructure_write  | Offre OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                |
| compute_iaas_opensource_read                  | Offre OpenIaaS - Consulta de los recursos tipo Máquinas Virtuales                                                              |
| compute_iaas_opensource_management            | Offre OpenIaaS - Gestión de los recursos tipo Máquinas Virtuales                                                               |
| compute_iaas_opensource_virtual_machine_power | Offre OpenIaaS - Gestión de la alimentación de una máquina virtual                                                             |
| compute_iaas_vmware_console_access            | Offre Vmware - Apertura de la consola de una máquina virtual                                                                   |
| compute_iaas_vmware_infrastructure_read       | Offre Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración drs, etc)      |
| compute_iaas_vmware_infrastructure_write      | Offre Vmware - Gestión avanzada de los recursos VMware                                                                         |
| compute_iaas_vmware_read                      | Offre Vmware - Consulta de los recursos tipo Máquinas Virtuales                                                                |
| compute_iaas_vmware_management                | Offre Vmware - Gestión de los recursos tipo Máquinas Virtuales                                                                 |
| compute_iaas_vmware_virtual_machine_power     | Offre Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| console_public_access_read                    | Consulta de las IPs autorizadas para acceder a la consola                                                                      |
| console_public_access_write                   | Adición de IPs autorizadas para acceder a la consola                                                                          |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                             |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                         |
| housing_read                                  | Consulta de recursos de tipo colocation                                                                                       |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                       |
| iam_read                                      | Consulta de derechos de usuarios                                                                                              |
| iam_write                                     | Gestión de derechos de usuarios                                                                                               |
| intervention_read                             | Consulta de los cambios y despliegues planificados en la plataforma                                                           |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                       |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                        |
| monitoring_read                               | Consulta de monitorización                                                                                                    |
| monitoring_write                              | Gestión de monitorización                                                                                                     |
| metric_read                                   | Consulta de datos de salud sobre máquinas virtuales y hosts                                                                   |
| network_read                                  | Consulta de recursos de red                                                                                                   |
| network_write                                 | Gestión de recursos de red                                                                                                    |
| order_read                                    | Consulta de pedidos de infraestructura                                                                                        |
| order_write                                   | Creación de pedidos de infraestructura                                                                                        |
| object-storage_iam_management                 | Permite gestionar cuentas de almacenamiento en el producto S3                                                                 |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                  |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                               |
| openshift_management                          | Permite conectar a las plataformas Openshift (delimitado al tenant)                                                           |
| Owner                                         | El usuario tiene derechos de administración de un tenant                                                                      |
| support_management                            | Consulta de todos los tickets de soporte del tenant                                                                           |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                 |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                 |
| tag_read                                      | Consulta de tags, excepto los tags RTMS                                                                                       |
| tag_write                                     | Gestión de tags, excepto los tags RTMS                                                                                        |
| ticket_comment_read                           | Consulta de comentarios                                                                                                       |
| ticket_comment_write                          | Gestión de comentarios                                                                                                        |
| ticket_read                                   | Consulta de tickets                                                                                                           |
| ticket_write                                  | Gestión de tickets                                                                                                            |

**Notas** :

- *No hay límite en el número de owners (propietarios) que se pueden definir en el tenant. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 owners, para fomentar la limitación del número de propietarios por razones de seguridad y una gestión óptima de accesos.*
- *Al agregar un nuevo propietario (owner), la actualización de sus permisos puede requerir hasta 60 minutos. Este tiempo de propagación es normal y asegura que los derechos de acceso se apliquen correctamente en todos los servicios y recursos asociados.*
- *Para eliminar un propietario (owner) del tenant, el usuario debe enviar una solicitud al soporte. Este procedimiento garantiza que los cambios en los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.*

### Permisos desaprobados

Los siguientes permisos ya no están disponibles:

| Nombre del permiso                            | Fecha      | Descripción del permiso                                                                                           |
| ----------------------------------------------| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo backup                                                                               |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestión de recursos de tipo backup - modificación                                                                 |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                     |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consulta de datos avanzados de recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc.)         |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestión avanzada de recursos VMware                                                                               |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consulta de recursos de tipo Máquinas Virtuales                                                                   |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestión de recursos de tipo Máquinas Virtuales                                                                    |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                                 |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestión de nuevos derechos para uno mismo                                                                         |


## Organizaciones

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local en la consola Shiva o remota a través de un servicio de federación de identidad,
- Soporta todas las __cuentas de usuarios__,
- __Agrupa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a solicitar recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Usted puede utilizar el repositorio local de autenticación de la consola Shiva o conectar su organización a uno de sus repositorios de autenticación.  

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

El tenant es un __grupo de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Qualification__

Mais il est aussi posible organizar las cosas con una __vista aplicativa__ o por __criticidad__ : 

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hipervisor y las redes L2 asociadas solo están disponibles en un tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de la red entre los tenants.

Los permisos de los usuarios se deben definir en cada tenant. Así, cada organización debe reflexionar cuidadosamente sobre los tenants deseados. Este punto generalmente se aborda en el taller de inicialización, en el momento de la creación de la organización.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe estar necesariamente inicializado con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Un vlan de red.


| Referencia de pedido                                         | Unidad   | SKU                     |  
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Autorización de acceso a un tenant : IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más altos.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más utilizados y optimizar su uso según las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá así visualizar en detalle el consumo de los recursos cloud en el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)