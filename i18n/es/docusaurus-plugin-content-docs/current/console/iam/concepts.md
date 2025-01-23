---
title: Concepts
---


## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maitre du commanditaire sur invitation (cualquiera que sea el repositorio de autenticación).
Las credenciales son globales a su [Organisation](#organisations).

*__Nota :__ [La federación de identidad se gestiona a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La creación de una cuenta de usuario en su organización se hace por invitación. Para invitar a un usuario en una [Organisation](#organisations), vaya al menú __'Administration'__ a la izquierda de su pantalla en la barra verde y luego en el submenú __'Utilisateurs'__.

Haga clic en el botón __'Nouvel Utilisateur'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario

![](images/shiva_onboard_004.png)

El usuario recibirá entonces un correo de verificación.

![](images/shiva_onboard_001.png)

Una vez que se complete la verificación, el usuario podrá conectarse a la consola.

### Affectation des permissions à un utilisateur

La gestión de los derechos de los usuarios se realiza desde la página de usuario.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que hizo la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Actions'__ del usuario y elija la opción __'Modifier'__.

El menú de activación de derechos aparecerá entonces:

![](images/shiva_onboard_005.png)

La configuración de los permisos se debe hacer para cada [Tenant](#tenants) de la [Organisation](#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Réinscription d'un utilisateur

Cuando un usuario ha sido provisionado pero no ha validado su inscripción en el plazo de expiración del correo enviado por la Consola, ya no puede confirmar su inscripción. Entonces es posible enviarle un enlace para que renueve su primera inscripción.

La reinscripción de un usuario se realiza en la pestaña __'Utilisateur'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir, luego haga clic en el botón de acción al final de la línea y luego __'Réinscription'__.

**Warning**: Asegúrese de ser el origen de la solicitud de reinscripción de su cuenta de usuario. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_012.png)

### Mettre à jour son profil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Profil'__, en la parte superior derecha de la pantalla, luego __'Paramètre utilisateur'__ y seleccione la acción __'Mettre à jour votre profil'__.

Luego vaya a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

**Warning**: Asegúrese de ser el origen de la solicitud de actualización del perfil. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_014.png)

### Réinitialisation du mot de passe

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Profil'__, en la parte superior derecha de la pantalla, luego __'Paramètre utilisateur'__ y seleccione la acción __'Réinitialiser mot de passe'__.

Luego vaya a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su contraseña.

**Warning**: Asegúrese de ser el origen de la solicitud de reinicio de su contraseña. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_015.png)

### Réinitialisation du double facteur d'authentification

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Profil'__, en la parte superior derecha de la pantalla, luego __'Paramètre utilisateur'__ y seleccione la acción __'Réinitialiser MFA'__.

Luego vaya a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su doble factor de autenticación.

**Warning**: Asegúrese de ser el origen de la solicitud de reinicio de su doble factor de autenticación. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

![](images/shiva_profil_016.png)

### Suppression d'un utilisateur

La eliminación de un usuario se realiza en la pestaña __'Utilisateur'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar, luego haga clic en el botón de acción al final de la línea, luego __'Supprimer'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: No puede eliminarse a sí mismo y no puede eliminar a un usuario __'Propriétaire'__.

### Se déconnecter

La desconexión de un usuario se realiza en su __'Profil'__, en la parte superior derecha de la pantalla, luego __'Déconnecter'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Una desconexión automática se realiza al expirar el token (JWT Token) de sesión.

### Changer la langue d'un utilisateur

El cambio de idioma de un usuario se realiza en su __'Profil'__, en la parte superior derecha de la pantalla, en los __'Paramètres utilisateur'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada tenant [Tenant](#tenants).

### Abonnement aux notifications thématiques

La gestión de suscripciones permite recibir correos electrónicos relacionados con los temas activados que se enviarán automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil del usuario, en la pestaña "Mes abonnements":

![](images/shiva_profil_007.png)

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a este tema.

La lista de temas disponibles está sujeta a cambios y se irá enriqueciendo progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permissions

La consola Shiva permite una gestión fina de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del cliente la que permite la configuración inicial de las cuentas y permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite que una cuenta administre los permisos de otros usuarios.

### Permissions disponibles pour les utilisateurs de votre organisation

Cuando se crea un usuario, no posee ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superposición con otros permisos. Se aplican conjuntamente, lo que significa que un usuario debe disponer de todos los permisos necesarios para realizar una acción específica.

Los permisos siguientes son configurables para cada usuario y para cada tenant de su organización:
	•	Permisos de tipo “read” : permiten únicamente la consulta de recursos sin posibilidad de modificación.
	•	Permisos de tipo “write” : autorizan la modificación de configuraciones.
 	•	Permisos de tipo “management“ : autorizan la gestión avanzada de recursos.

- __Son permisos, no roles.__ Por lo tanto, es necesario tener permiso de LECTURA y ESCRITURA para modificar una configuración.

Dernière mise à jour le: 23/01/2025

| Nom de la permission                          | Description de la permission                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta de los registros logs y actividades                                                                                   |
| activity_write                                | Gestión de los registros logs y actividades                                                                                    |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                                |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                            |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                  |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                              |
| bastion_read                                  | Consulta de recursos de tipo bastión                                                                                           |
| bastion_write                                 | Gestión de los recursos (appliances, sesiones,...) de tipo Bastión                                                             |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un appliance Bastión                                 |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                                |

| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de los recursos de tipo Máquinas Virtuales                                                        |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de los recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                              |
| compute_iaas_vmware_console_access            | Oferta VMware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read       | Oferta VMware - Consulta de datos avanzados de los recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Oferta VMware - Gestión avanzada de los recursos VMware                                                                           |
| compute_iaas_vmware_read                      | Oferta VMware - Consulta de los recursos de tipo Máquinas Virtuales                                                         |
| compute_iaas_vmware_management                | Oferta VMware - Gestión de los recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| baremetal_read                                | Oferta Bare Metal - Consulta de los recursos de tipo Bare Metal                                                               |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                  |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                         |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                                  |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                              |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                        |
| housing_read                                  | Consulta de los recursos de tipo colocation                                                                                 |
| iam_offline_access                            | Creación y supresión de Access Token Personales (PAT)                                                                        |
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
| openshift_management                          | Permite conectarse a las plataformas Openshift (scopéado al tenant)                                                          |
| support_management                            | consulta del conjunto de tickets de soporte del tenant                                                                       |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                  |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                     |
| tag_read                                      | Consulta de los tags, excepto los tags RTMS                                                                                   |
| tag_write                                     | Gestión de los tags, excepto los tags RTMS                                                                                        |
| ticket_comment_read                           | Consulta de los comentarios                                                                                                  |
| ticket_comment_write                          | Gestión de los comentarios                                                                                                       |
| ticket_read                                   | Consulta de los tickets                                                                                                       |
| ticket_write                                  | Gestión de los tickets                                                                                                            |

## Organizaciones

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local al nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Porta el conjunto de __cuentas de usuarios__,
- __Agrupa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define según las necesidades de su arquitectura Cloud.

Los roles (derechos/permissions) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a solicitar recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite al nivel de la organización __el ajuste del mecanismo de autenticación__. Puede
utilizar el repositorio local de autenticación de la consola Shiva o bien conectar su organización a uno
de sus repositorios de autenticación.

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

El tenant es un __grupo de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que puede renombrarse). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Calificación__
Mais il est aussi possible d'organiser les choses avec une __vue applicative__ ou par __criticidad__ :

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados están asignados a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hipervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
Con respecto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de red entre los tenants.

Los permisos de los usuarios deben definirse en cada tenant. Por lo tanto, cada organización debe pensar bien en los tenants deseados. Este punto generalmente se aborda en el taller de inicialización, en el momento de la creación de la organización.

Es posible evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe necesariamente ser inicializado con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de computación,
- Un espacio de almacenamiento,
- Un vlan de red.

| Referencia de pedido                                        | Unidad   | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |

### Gestión de propietarios en un tenant
Cada tenant posee al menos un propietario, garantizando así una responsabilidad clara y una gestión eficaz de los recursos asociados. Además, es posible declarar varios propietarios en un mismo tenant, permitiendo una colaboración y toma de decisiones compartida. A continuación, encontrará información importante a tener en cuenta durante la gestión de estos propietarios.

#### Información importante sobre la gestión de propietarios

#### 1. Número de propietarios
* No hay un límite técnico respecto al número de propietarios que pueden definirse en el tenant.
* La interfaz de gestión (GUI) emite una advertencia cuando hay más de 3 propietarios, con el fin de incitar a limitar el número de propietarios por razones de seguridad y una gestión óptima de accesos.

#### 2. Adición de un nuevo propietario
* Al añadir un nuevo propietario, la actualización de sus permisos puede tardar hasta 60 minutos.
* Este tiempo de propagación es normal y asegura que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.

#### 3. Retiro de un propietario
* Para retirar a un propietario del tenant, el usuario debe enviar una solicitud de soporte.
* Este procedimiento garantiza que las modificaciones de los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.

### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios que provienen de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los más altos estándares de seguridad.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más utilizados y optimizar su uso según las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y seleccione el período de tiempo deseado. Así podrá visualizar en detalle el consumo de los recursos cloud durante el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

![](images/shiva_tenant_ressources_01.png)