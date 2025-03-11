---
title: Concepts
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


## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maitre du commanditaire sur invitation (quelque soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario en una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la banda verde y luego en el submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

A continuación, indique la dirección de correo electrónico del usuario

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo de verificación.

<img src={shivaOnboard_001} />

Una vez que la verificación se haya completado, el usuario podrá conectarse a la consola.

### Asignación de permisos a un usuario

La gestión de los derechos de usuario se realiza desde la página de usuario.

<img src={shivaOnboard_003} />

De manera predeterminada, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que hizo la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.

El menú de activación de derechos aparece entonces:

<img src={shivaOnboard_005} />

La configuración de los permisos debe hacerse para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido provisionado pero no ha validado su inscripción dentro del plazo de expiración del correo enviado por la Consola, ya no puede confirmar su inscripción. Entonces es posible reenviarle un enlace para que renueve su primera inscripción.

La reinscripción de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir y luego haga clic en el botón de acción al final de la fila, luego __'Reinscripción'__.

**Warning**: Asegúrese de que usted es el origen de la solicitud de reinscripción de su cuenta de usuario. Informe cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_012} />

### Actualizar su perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Luego acceda a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

**Warning**: Asegúrese de que usted es el origen de la solicitud de actualización de perfil. Informe cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_014} />

### Restablecimiento de la contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer contraseña'__.

Luego acceda a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su contraseña.

**Warning**: Asegúrese de que usted es el origen de la solicitud de restablecimiento de su contraseña. Informe cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_015} />

### Restablecimiento del doble factor de autenticación

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer MFA'__.

Luego acceda a su bandeja de entrada y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su doble factor de autenticación.

**Warning**: Asegúrese de que usted es el origen de la solicitud de restablecimiento de su doble factor de autenticación. Informe cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_016} />

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar, luego haga clic en el botón de acción al final de la fila, luego __'Eliminar'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: No puede eliminarse a sí mismo y no puede eliminar un usuario __'Propietario'__.

### Cerrar sesión

Cerrar la sesión de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Cerrar sesión'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Se realiza una desconexión automática cuando expira el token (JWT Token) de la sesión.

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente cuando ocurran eventos correspondientes.

Está disponible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse gradualmente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

La consola Shiva permite una gestión detallada de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del patrocinador la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Cuando se crea un usuario, no posee ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superposición con otros permisos. Se aplican de manera conjunta, lo que significa que un usuario debe disponer de todos los permisos requeridos para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de su organización:
	•	Permisos de tipo “read”: permiten únicamente la consulta de recursos sin posibilidad de modificación.
	•	Permisos de tipo “write”: autorizan la modificación de configuraciones.
 	•	Permisos de tipo “management“: autorizan la gestión avanzada de recursos.

- __Estos son permisos, no roles.__ Por este motivo, es necesario tener el permiso READ y WRITE para modificar una configuración.

Última actualización el: 23/01/2025

| Nombre del permiso                            | Descripción del permiso                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta de registros logs y actividades                                                                                       |
| activity_write                                | Gestión de registros logs y actividades                                                                                        |
| backup_iaas_opensource_read                   | Gestión de recursos tipo backup - Oferta OpenIaaS - consulta                                                                   |
| backup_iaas_opensource_write                  | Gestión de recursos tipo backup - Oferta OpenIaaS - modificación                                                               |
| backup_iaas_spp_read                          | Gestión de recursos tipo backup - Oferta Vmware - consulta                                                                     |
```
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                            |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                         |
| bastion_write                                 | Gestión de recursos (appliances, sesiones,...) de tipo Bastion                                                               |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por una appliance Bastion                              |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                              |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra                                                  |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                             |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                            |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                          |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc)|
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                      |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                              |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                   |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                            |
| baremetal_read                                | Oferta Bare Metal - Consulta de recursos de tipo Bare Metal                                                                  |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                  |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                       |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                            |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                            |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                     |
| housing_read                                  | Consulta de recursos de tipo colocation                                                                                      |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                      |
| iam_read                                      | Consulta de los derechos de usuarios                                                                                         |
| iam_write                                     | Gestión de los derechos de usuarios                                                                                          |
| intervention_read                             | Consulta de los cambios y puestas en producción previstas en la plataforma                                                   |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                      |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                       |
| monitoring_read                               | Consulta del monitoreo                                                                                                       |
| monitoring_write                              | Gestión del monitoreo                                                                                                        |
| metric_read                                   | Consulta de datos de salud sobre las máquinas virtuales y hosts                                                              |
| network_read                                  | Consulta de recursos de red                                                                                                  |
| network_write                                 | Gestión de recursos de red                                                                                                   |
| order_read                                    | Consulta de pedidos de infraestructuras                                                                                      |
| order_write                                   | Creación de pedidos de infraestructuras                                                                                      |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                            |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                 |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                              |
| openshift_management                          | Permite conectarse a las plataformas Openshift (scopé al tenant)                                                             |
| support_management                            | Consulta del conjunto de tickets de soporte del tenant                                                                       |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                |
| tag_read                                      | Consulta de las etiquetas, excepto las etiquetas RTMS                                                                        |
| tag_write                                     | Gestión de las etiquetas, excepto las etiquetas RTMS                                                                         |
| ticket_comment_read                           | Consulta de los comentarios                                                                                                  |
| ticket_comment_write                          | Gestión de los comentarios                                                                                                   |
| ticket_read                                   | Consulta de los tickets                                                                                                      |
| ticket_write                                  | Gestión de los tickets                                                                                                       |

## Organisations

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Porta el conjunto de __cuentas de usuarios__,
- __Federa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define según las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a pedir recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Usted puede
utilizar el repositorio local de autenticación de la consola Shiva o bien acoplar su organización a uno
de sus repositorios de autenticación.

Los repositorios externos siguientes son compatibles:

- Repositorios compatibles con __OpenID Connect__,
- Repositorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organisations) tiene al menos un tenant (llamado __tenant por defecto__, que se puede renombrar). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Receta__
- Un tenant __Calificación__

Pero también es posible organizar las cosas con una __vista aplicativa__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de Hipervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de la red entre los tenants.

Los permisos de los usuarios deben definirse en cada tenant. Así, cada organización debe pensar bien en los tenants deseados. Este punto generalmente se aborda en el taller de inicio, en el momento de la creación de la organización.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe ser inicializado con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cálculo,
- Un espacio de almacenamiento,
- Un vlan de red.


| Referencia de pedido                                         | Unidad   | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |


### Gestión de propietarios en un tenant
Cada tenant tiene al menos un propietario, garantizando así una responsabilidad clara y una gestión eficaz de los recursos asociados. Además, es posible declarar varios propietarios en el mismo tenant, permitiendo una colaboración y toma de decisiones compartida. A continuación, encontrará información importante a tener en cuenta al gestionar estos propietarios.

#### Información importante sobre la gestión de propietarios

#### 1. Número de propietarios
* No hay un límite técnico en cuanto al número de propietarios que se pueden definir en el tenant.
* La interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 propietarios, con el fin de incitar a limitar el número de propietarios por razones de seguridad y gestión óptima de accesos.

#### 2. Adición de un nuevo propietario
* Al añadir un nuevo propietario, la actualización de sus permisos puede tardar hasta 60 minutos.
* Este tiempo de propagación es normal y asegura que los derechos de acceso se apliquen correctamente a todos los servicios y recursos asociados.

#### 2. Permisos de un propietario
* A un propietario se le otorgarán todos los permisos relacionados con los productos activados en su tenant.
* No es posible modificar los permisos de un propietario.

#### 3. Retiro de un propietario
* Para retirar a un propietario del tenant, el usuario debe enviar una solicitud al soporte.
* Este procedimiento garantiza que las modificaciones de los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.

### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la certificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los más altos estándares de seguridad.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola de Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más utilizados y optimizar su uso según las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá visualizar en detalle el consumo de recursos cloud en el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión según corresponda:

<img src={shivaTenantRessources_01} />
