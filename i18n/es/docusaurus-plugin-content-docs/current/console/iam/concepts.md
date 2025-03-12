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

Las cuentas de acceso a la consola Shiva son creadas por la cuenta maestra del patrocinador por invitación (independientemente del repositorio de autenticación).
Las credenciales son globales para su [Organización](#organisations).

*__Nota:__ [La federación de identidad se gestiona a nivel de la organización](#organisations#mecanismes-dauthentification)*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario a una [Organización](#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

Luego indique la dirección de correo electrónico del usuario.

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo electrónico de verificación.

<img src={shivaOnboard_001} />

Una vez completada la verificación, el usuario podrá conectarse a la consola.

### Asignación de permisos a un usuario

La gestión de los derechos de usuario se realiza desde la página de usuario.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que envió la invitación le otorgue los derechos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Editar'__.

Aparece entonces el menú de activación de derechos:

<img src={shivaOnboard_005} />

La configuración de permisos debe realizarse para cada [Tenant](#tenants) de la [Organización](#organisations).

La lista de permisos y sus definiciones es accesible [aquí](#permissions).

### Reinscripción de un usuario

Cuando un usuario ha sido aprovisionado pero no ha validado su inscripción dentro del período de expiración del correo electrónico enviado por la Consola, ya no puede confirmar su inscripción. Es entonces posible enviarle un enlace para que pueda renovar su inscripción inicial.

La reinscripción de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir, luego haga clic en el botón de acción al final de la línea y elija __'Reinscripción'__.

__Advertencia__: Asegúrese de ser el originador de la solicitud de reinscripción de su cuenta de usuario. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_012} />

### Actualización de su perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione su __'Perfil'__ en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Vaya a su bandeja de entrada de correo electrónico y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

__Advertencia__: Asegúrese de ser el originador de la solicitud de actualización del perfil. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_014} />

### Restablecimiento de su contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione su __'Perfil'__ en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer contraseña'__.

Vaya a su bandeja de entrada de correo electrónico y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su contraseña.

__Advertencia__: Asegúrese de ser el originador de la solicitud de restablecimiento de contraseña. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_015} />

### Restablecimiento de la autenticación de dos factores

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione su __'Perfil'__ en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer MFA'__.

Vaya a su bandeja de entrada de correo electrónico y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su autenticación de dos factores.

__Advertencia__: Asegúrese de ser el originador de la solicitud de restablecimiento de su autenticación de dos factores. Por favor, reporte cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_016} />

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar, luego haga clic en el botón de acción al final de la línea y elija __'Eliminar'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: No puede eliminarse a sí mismo y no puede eliminar a un usuario __'Propietario'__.

### Desconexión

La desconexión de un usuario se realiza desde su __'Perfil'__ en la parte superior derecha de la pantalla, luego __'Desconectar'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una desconexión automática se realiza cuando expira el token de sesión (JWT Token).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza desde su __'Perfil'__ en la parte superior derecha de la pantalla, en la __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada [Tenant](#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con los temas activados que se enviarán automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a este tema.

La lista de temas disponibles es susceptible de evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y a los cambios en nuestro entorno operativo.

## Permisos

La consola Shiva permite una gestión detallada de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del patrocinador la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios.

### Permisos disponibles para los usuarios de su organización

Cuando se crea un usuario, no tiene ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superponerse con otros permisos. Se aplican en conjunto, lo que significa que un usuario debe tener todos los permisos requeridos para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de su organización:
 • Permisos de tipo "read": permiten únicamente la consulta de los recursos sin posibilidad de modificación.
 • Permisos de tipo "write": autorizan la modificación de las configuraciones.
  • Permisos de tipo "management": autorizan la gestión avanzada de los recursos.

- __Son permisos, no roles.__ Como tales, es necesario tener tanto el permiso READ como el WRITE para modificar una configuración.

Última actualización el: 23/01/2025

| Nombre del permiso                            | Descripción del permiso                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta de registros logs y actividades                                                                                        |
| activity_write                                | Gestión de registros logs y actividades                                                                                         |
| backup_iaas_opensource_read                   | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                                 |
| backup_iaas_opensource_write                  | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                             |
| backup_iaas_spp_read                          | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                   |
| backup_iaas_spp_write                         | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                               |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                            |
| bastion_write                                 | Gestión de recursos (appliances, sesiones,...) de tipo Bastion                                                                  |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por una appliance Bastion                                 |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra                                                     |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                               |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                                |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                             |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                   |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc)   |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                         |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                                 |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)                      |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                               |
| baremetal_read                                | Oferta Bare Metal - Consulta de recursos de tipo Bare Metal                                                                     |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                     |
| console_public_access_read                    | Consulta de IPs autorizadas a acceder a la consola                                                                              |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                               |
| compute_virtual_machine_power                 | Gestión de la alimentación de una máquina virtual                                                                               |
| documentation_read                            | Consulta de recursos de documentación de confluence                                                                             |
| housing_read                                  | Consulta de recursos de tipo colocación                                                                                         |
| iam_offline_access                            | Creación y eliminación de Tokens de Acceso Personales (PAT)                                                                     |
| iam_read                                      | Consulta de derechos de usuarios                                                                                                |
| iam_write                                     | Gestión de derechos de usuarios                                                                                                 |
| intervention_read                             | Consulta de cambios y puestas en producción previstas en la plataforma                                                          |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                         |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                          |
| monitoring_read                               | Consulta del monitoreo                                                                                                          |
| monitoring_write                              | Gestión del monitoreo                                                                                                           |
| metric_read                                   | Consulta de datos de salud sobre las máquinas virtuales y hosts                                                                 |
| network_read                                  | Consulta de recursos de red                                                                                                     |
| network_write                                 | Gestión de recursos de red                                                                                                      |
| order_read                                    | Consulta de pedidos de infraestructura                                                                                          |
| order_write                                   | Creación de pedido de infraestructura                                                                                           |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                               |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                    |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                 |
| openshift_management                          | Permite conectarse a las plataformas Openshift (limitado al tenant)                                                             |
| support_management                            | Consulta de todos los tickets de soporte del tenant                                                                             |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                   |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                   |
| tag_read                                      | Consulta de tags, excepto los tags RTMS                                                                                         |
| tag_write                                     | Gestión de tags, excepto los tags RTMS                                                                                          |
| ticket_comment_read                           | Consulta de comentarios                                                                                                         |
| ticket_comment_write                          | Gestión de comentarios                                                                                                          |
| ticket_read                                   | Consulta de tickets                                                                                                             |
| ticket_write                                  | Gestión de tickets                                                                                                              |

## Organizaciones

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, etc.) que lleva la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa la __entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la consola Shiva o remota a través de un servicio de federación de identidad,
- Soporta el conjunto de __cuentas de usuario__,
- __Federa los tenants__ (Producción, Preproducción, Desarrollo, Aplicación 1, Aplicación 2, etc.) que usted define para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a pedir recursos en un tenant, pero no en otro.

### Mecanismos de autenticación

La consola Shiva permite a nivel de la organización __la configuración del mecanismo de autenticación__. Puede
utilizar el repositorio local de autenticación de la consola Shiva o bien conectar su organización a uno
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

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organisations) tiene como mínimo un tenant (llamado __tenant por defecto__, que puede ser renombrado). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Prueba__
- Un tenant __Calificación__

Pero también es posible organizar las cosas con una __vista aplicativa__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos pedidos son asignados a un tenant preciso y no son compartidos con los otros tenants. Por ejemplo, un cluster de Hipervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para asegurar la continuidad de red entre los tenants.

Los permisos de los usuarios deben definirse en cada tenant. Así, cada organización debe reflexionar bien sobre los tenants deseados. Este punto generalmente se aborda en un taller de inicialización, en el momento de la creación de la organización.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe necesariamente ser inicializado con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un datacenter físico),
- Un cluster de cálculo,
- Un espacio de almacenamiento,
- Una vlan de red.

| Referencia de pedido                                         | Unidad   | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |

### Gestión de propietarios en un tenant

Cada tenant posee al menos un propietario, garantizando así una responsabilidad clara y una gestión eficaz de los recursos asociados. Además, es posible declarar varios propietarios en un mismo tenant, permitiendo una colaboración y una toma de decisiones compartida. A continuación, encontrará información importante a tener en cuenta al gestionar estos propietarios.

#### Información importante sobre la gestión de propietarios

#### 1. Número de propietarios

* No hay límite técnico en cuanto al número de propietarios que pueden ser definidos en el tenant.
- La interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 propietarios, para incitar a limitar el número de propietarios por razones de seguridad y de gestión óptima de los accesos.

#### 2. Adición de un nuevo propietario

* Al añadir un nuevo propietario, la actualización de sus permisos puede requerir un plazo de hasta 60 minutos.
- Este tiempo de propagación es normal y permite asegurar que los derechos de acceso se apliquen correctamente al conjunto de los servicios y recursos asociados.

#### 2. Permisos de un propietario

* Un propietario recibirá todos los permisos relacionados con los productos activados en su tenant.
- No es posible modificar los permisos de un propietario.

#### 3. Retirada de un propietario

* Para retirar a un propietario del tenant, el usuario debe enviar una solicitud al soporte.
- Este procedimiento permite garantizar que las modificaciones de los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.

### Autorización de acceso a un tenant: IPs autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con las exigencias de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de accesos no autorizados y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Nota: *La eliminación de una IP autorizada se hace mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada de la utilización de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su utilización en función de las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y luego seleccione el período de tiempo deseado. Podrá así visualizar en detalle el consumo de los recursos cloud sobre el período definido, lo que le permitirá analizar la utilización de los servicios y optimizar su gestión en consecuencia:

<img src={shivaTenantRessources_01} />
