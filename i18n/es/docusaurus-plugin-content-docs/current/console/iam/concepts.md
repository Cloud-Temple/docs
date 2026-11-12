---
title: Conceptos
---
import shivaOnboard_003 from '@site/docs/console/iam/images/shiva_onboard_003.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaProfil_012 from '@site/docs/console/iam/images/shiva_profil_012.png'
import shivaProfil_014 from '@site/docs/console/iam/images/shiva_profil_014.png'
import shivaProfil_015 from '@site/docs/console/iam/images/shiva_profil_015.png'
import shivaProfil_016 from '@site/docs/console/iam/images/shiva_profil_016.png'
import shivaProfil_013 from '@site/docs/console/iam/images/shiva_profil_013.png'
import shivaProfil_010 from '@site/docs/console/iam/images/shiva_profil_010.png'
import shivaProfil_009 from '@site/docs/console/iam/images/shiva_profil_009.png'
import shivaProfil_011 from '@site/docs/console/iam/images/shiva_profil_011.png'
import shivaProfil_006 from '@site/docs/console/iam/images/shiva_profil_006.png'
import shivaProfil_007 from '@site/docs/console/iam/images/shiva_profil_007.png'
import shivaTenantRessources_01 from '@site/docs/console/iam/images/shiva_tenant_ressources_01.png'

## Modelo de gestión de accesos

La gestión de accesos en la Consola se basa en dos niveles anidados:

- la __[organización](#organizaciones)__ : la entidad contractual. Aporta las cuentas de usuarios, la configuración de autenticación y el conjunto de sus tenants;
- el __[tenant](#tenant)__ : un agrupamiento de recursos dentro de la organización. Aporta los recursos técnicos y los permisos de los usuarios.

Entre ambos se encuentra un __ámbito común__: la identidad del usuario. Una cuenta se crea una sola vez en la organización y luego se utiliza en todos los tenants a los que tiene acceso.

### Quién gestiona qué

| Objeto gestionado                                        | Organización                                      | Tenant                                        |
| ------------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| Contrato y facturación                            | Sí                                               | Informe de consumo por tenant            |
| Mecanismo de autenticación (local, SSO)          | Sí                                               | No (heredado de la organización)                |
| Ciclo de vida de las cuentas (invitación, eliminación) | Sí                                               | No (las cuentas son globales a la organización) |
| __Permisos de los usuarios__                   | __No__                                           | __Sí, tenant por tenant__                    |
| __Designación de un propietario__                  | __Sí__ (propietario de la organización)          | __Sí__ (propietario del tenant)              |
| Recursos técnicos (cómputo, almacenamiento, red)   | No                                               | Sí                                           |
| Direcciones IP autorizadas                             | Sí (lista única de la organización)              | Gestionable desde un tenant, pero la lista modificada es la de la organización |

:::info[Para recordar]
Los permisos no se configuran __nunca__ a nivel de organización: se definen tenant por tenant. El nivel organización permite en cambio designar a un usuario como __propietario de la organización__.
:::

## Ámbito común: la cuenta de usuario

Las cuentas de acceso a la Consola son creadas por la cuenta maestra del patrocinador mediante invitación (independientemente del directorio de autenticación).
Las credenciales son globales a su [Organización](#organizaciones): un usuario dispone de una sola cuenta, independientemente del número de tenants en los que intervenga.

*__Nota:__ [La federación de identidades se gestiona a nivel de organización](#mecanismos-de-autenticación)*

Las acciones descritas a continuación corresponden a la cuenta en sí misma, independientemente del tenant en el que esté conectado.

### Actualizar su perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Parámetro de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

Luego diríjase a su bandeja de correo y haga clic en el enlace generado por la Consola. Siga simplemente los pasos para actualizar su perfil.

__Warning__: Asegúrese de ser usted el origen de la solicitud de actualización del perfil. Por favor, reporte todas las solicitudes que no provengan de usted a través de un ticket de soporte.

<img src={shivaProfil_014} />

### Reinicio de la contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Parámetro de usuario'__ y seleccione la acción __'Reiniciar contraseña'__.

Luego diríjase a su bandeja de correo y haga clic en el enlace generado por la Consola. Siga simplemente los pasos para actualizar su contraseña.

__Warning__: Asegúrese de ser usted el origen de la solicitud de reinicio de su contraseña. Por favor, reporte todas las solicitudes que no provengan de usted a través de un ticket de soporte.

<img src={shivaProfil_015} />

### Reinicio del doble factor de autenticación

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Parámetro de usuario'__ y seleccione la acción __'Reiniciar MFA'__.

Luego diríjase a su bandeja de correo y haga clic en el enlace generado por la Consola. Siga simplemente los pasos para actualizar su doble factor de autenticación.

__Warning__: Asegúrese de ser usted el origen de la solicitud de reinicio de su doble factor de autenticación. Por favor, reporte todas las solicitudes que no provengan de usted a través de un ticket de soporte.

<img src={shivaProfil_016} />

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Parámetros de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](#tenant).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir los correos electrónicos relacionados con las temáticas activadas que serán enviados automáticamente al producirse los eventos correspondientes.

Está accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas de esa temática.

La lista de temáticas disponibles está sujeta a evolución y enriquecimiento progresivo para adaptarse a las necesidades y a los cambios en nuestro entorno operativo.

### Desconectarse

La desconexión de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Desconectar'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Se realiza una desconexión automática al expirar el token (JWT Token) de sesión.

## Organizaciones

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que porta la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la Consola o remota a través de un servicio de federación de identidades,
- Porta el conjunto de las __cuentas de usuarios__,
- __Federa los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura Cloud.

### Lo que se gestiona a nivel de organización

El ámbito organización cubre:

- el __mecanismo de autenticación__ común a todas las cuentas,
- el __ciclo de vida de las cuentas de usuarios__: invitación, reinscripción, eliminación,
- la __designación de los propietarios de la organización__,
- la __lista de tenants__ de su arquitectura,
- las __direcciones IP autorizadas__ para acceder a la Consola, una lista única válida para todos los tenants.

:::warning[Los permisos no se gestionan aquí]
La página __'Usuarios'__ de la organización permite crear, designar propietario y eliminar una cuenta. No permite __atribuir permisos__: estos son propios de cada tenant y se configuran desde el tenant correspondiente (ver [Asignación de permisos en un tenant](#asignación-de-permisos-en-un-tenant)).
:::

### Mecanismos de autenticación

La Consola permite a nivel de organización __la configuración del mecanismo de autenticación__. Puede
utilizar el directorio local de autenticación de la Consola o bien conectar su organización a uno
de sus directorios de autenticación.

Los siguientes directorios externos son compatibles:

- Directorios compatibles con __OpenID Connect__,
- Directorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

:::info[Importante]
Se requiere una dirección de correo electrónico para todas las cuentas provenientes de una federación de identidades. Las cuentas creadas sin dirección de correo electrónico no podrán conectarse y son susceptibles de ser eliminadas automáticamente.
:::

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario en una [Organización](#organizaciones), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

Indique luego la dirección de correo electrónico del usuario

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo de verificación.

<img src={shivaOnboard_001} />

Una vez completada la verificación, el usuario podrá conectarse a la consola.

Por defecto, __un usuario recién creado no tiene ningún derecho__. Es necesario asignarle luego los permisos necesarios para su actividad, __en cada tenant__ donde deba intervenir.

### Gestión de los propietarios de la organización

El __propietario de la organización__ es el único rol atribuible a nivel de organización. Es distinto del [propietario de tenant](#gestión-de-propietarios-en-un-tenant).

- La designación se realiza desde la página __'Usuarios'__ del panel Administración, mediante el menú de acción de la fila del usuario.
- Este rol da acceso a la __vista organización__: seguimiento contractual, lista de tenants, gestión de cuentas.
- No se trata de un permiso granular: no hay ningún permiso de tipo `read` / `write` que atribuir a nivel de organización.
- Un usuario __'Propietario'__ no puede ser eliminado.

### Reinscripción de un usuario

Cuando un usuario ha sido aprovisionado pero no ha validado su inscripción dentro del plazo de expiración del correo enviado por la Consola, ya no puede confirmar su inscripción. En ese caso, es posible reenviarle un enlace para que renueve su primera inscripción.

La reinscripción de un usuario se realiza en la pestaña __'Usuario'__ del panel Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir, luego haga clic en el botón de acción al final de la fila y luego __'Reinscripción'__.

__Warning__: Asegúrese de ser usted el origen de la solicitud de reinscripción de su cuenta de usuario. Por favor, reporte todas las solicitudes que no provengan de usted a través de un ticket de soporte.

<img src={shivaProfil_012} />

### Eliminación de un usuario

La eliminación de un usuario se realiza en la pestaña __'Usuario'__ del panel Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar, luego haga clic en el botón de acción al final de la fila y luego __'Eliminar'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: No puede eliminarse a sí mismo y no puede eliminar a un usuario __'Propietario'__.

## Tenant

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organizaciones) tiene al menos un tenant (llamado __tenant por defecto__, que puede renombrarse). Generalmente, se utilizan varios tenants para segmentar las responsabilidades o los ámbitos técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Aceptación__
- Un tenant __Calificación__

Pero también es posible organizar las cosas con una __vista por aplicación__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con los otros tenants. Por ejemplo, un clúster de Hipervisores y las redes L2 asociadas solo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para garantizar la continuidad de red entre los tenants.

Es posible hacer evolucionar la arquitectura añadiendo o eliminando tenants.

Ningún producto se activa de oficio. Usted elige los productos del tenant __desde el formulario de creación__, y hace evolucionar este ámbito en cualquier momento mediante __'Modificar los productos'__.

Los productos de infraestructura históricos (IaaS) siguen siendo solicitados por referencia:

| Referencia de pedido                                        | Unidad    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant                 | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |

### Lo que se gestiona a nivel de tenant

El ámbito tenant cubre:

- los __recursos técnicos__ solicitados y desplegados,
- los __permisos de los usuarios__ sobre estos recursos,
- la __designación de los propietarios del tenant__,
- la __gestión de las direcciones IP autorizadas__, cuyo alcance es la organización,
- el __seguimiento de consumo__ de los recursos.

Los permisos de los usuarios deben definirse en cada tenant. Una cuenta puede estar autorizada para solicitar recursos en un tenant, pero no en otro. Cada organización debe, por lo tanto, reflexionar bien sobre los tenants deseados: este punto generalmente se aborda en el taller de inicialización, en el momento de la creación de la organización.

### Asignación de permisos en un tenant

La gestión de los derechos de un usuario se realiza desde la página de usuarios, __tenant por tenant__.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene ningún derecho. Es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Basta con hacer clic en el menú __'Actions'__ del usuario y elegir la opción __'Modifier'__.

Aparece entonces el menú de activación de derechos:

<img src={shivaOnboard_005} />

La configuración de los permisos debe realizarse para cada [Tenant](#tenant) de la [Organisation](#organizaciones) en el que el usuario debe intervenir: no existe una atribución global a nivel de la organización.

La lista de permisos y su definición está accesible [aquí](#permisos).

### Gestión de propietarios en un tenant

Cada tenant posee al menos un propietario, garantizando así una responsabilidad clara y una gestión eficaz de los recursos asociados. Además, es posible declarar varios propietarios en un mismo tenant, permitiendo una colaboración y una toma de decisiones compartida. A continuación, encontrará información importante a tener en cuenta durante la gestión de estos propietarios.

El propietario de tenant es un rol distinto del [propietario de la organización](#gestión-de-los-propietarios-de-la-organización): asume la responsabilidad de un perímetro de recursos, no de la relación contractual.

#### Información importante sobre la gestión de propietarios

#### 1. Número de propietarios

- No existe un límite técnico en cuanto al número de propietarios que pueden definirse en el tenant.

- La interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 propietarios, con el fin de incentivar a limitar el número de propietarios por razones de seguridad y gestión óptima de los accesos.

#### 2. Adición de un nuevo propietario

- Al añadir un nuevo propietario, la actualización de sus permisos puede requerir un plazo de hasta 60 minutos.

- Este tiempo de propagación es normal y permite asegurarse de que los derechos de acceso se aplican correctamente a todos los servicios y recursos asociados.

#### 2. Permisos de un propietario

- A un propietario se le atribuirá el conjunto de permisos relacionados con los productos activados en su tenant.

- No es posible modificar los permisos de un propietario.

#### 3. Retirada de un propietario

- Para retirar un propietario del tenant, el usuario debe presentar una solicitud al soporte.

- Este procedimiento permite garantizar que las modificaciones de los derechos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.

### Autorización de acceso a la Consola: IPs autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso únicamente a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Nota: *La supresión de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos dentro de un tenant

Es posible visualizar los recursos cloud consumidos dentro de un tenant, ofreciendo así una vista detallada del uso de los diferentes servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más solicitados y optimizar su uso en función de las necesidades.

En el menú de la consola, haga clic en "Rapport de consommation" y luego seleccione el período de tiempo deseado. Así podrá visualizar en detalle el consumo de los recursos cloud en el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

<img src={shivaTenantRessources_01} />

## Permisos

La Consola permite una gestión detallada de los derechos de los usuarios de una organización, con una __segregación por tenant__.
Inicialmente, es la cuenta principal del comitente la que permite la configuración inicial de las cuentas y de los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios, en el tenant donde se le ha concedido dicho derecho.

### Permissions disponibles para los usuarios de su organización

Cuando se crea un usuario, no posee ningún permiso por defecto. Cada permiso se asigna de forma individual y funciona de manera unitaria, sin solapamiento con otros permisos. Se aplican de forma conjunta, lo que significa que un usuario debe disponer de todos los permisos requeridos para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de su organización:

- Permisos de tipo "read": permiten únicamente la consulta de los recursos sin posibilidad de modificación.
- Permisos de tipo "write": autorizan la modificación de las configuraciones.
- Permisos de tipo "management": autorizan la gestión avanzada de los recursos.
- Permisos de tipo "console_access": autorizan las conexiones tipo PMAD en los recursos.
- Permisos de tipo "virtual_machine_power": autorizan la gestión del suministro de energía de una máquina virtual.

- __Estos son permisos, no roles.__ En este sentido, es necesario tener el permiso READ y WRITE para modificar una configuración.

Última actualización: 20/04/2026

| Nombre del permiso                          | Descripción del permiso                                                                                                  |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de los registros de logs y actividades                                                                                   |
| activity_write                                | Gestión de los registros de logs y actividades                                                                                        |
| backup_iaas_opensource_read                   | Oferta OpenIaaS - Gestión de recursos de tipo backup - consulta                                                         |
| backup_iaas_opensource_write                  | Oferta OpenIaaS - Gestión de recursos de tipo backup - modificación                                                         |
| backup_iaas_spp_read                          | Oferta Vmware - Gestión de recursos de tipo backup - consulta                                                           |
| backup_iaas_spp_write                         | Oferta Vmware - Gestión de recursos de tipo backup - modificación                                                           |
| bastion_read                                  | Consulta de recursos de tipo bastion                                                                                   |
| bastion_write                                 | Gestión de recursos (apliancias, sesiones,...) de tipo Bastion                                                             |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por una appliance Bastion                               |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                              |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra                                                |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                                 |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                      |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuelles                                                           |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión del suministro de energía de una máquina virtual                                                            |
| compute_iaas_opensource_replication_recover   | Oferta OpenIaaS - Gestión de la replicación                                                                                    |
| compute_iaas_vmware_console_access            | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                |
| compute_iaas_vmware_infrastructure_read       | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas de afinidad/anti-afinidad, configuración drs, etc) |
| compute_iaas_vmware_infrastructure_write      | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                          |
| compute_iaas_vmware_read                      | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuelles                                                        |
| compute_iaas_vmware_management                | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuelles (permite el cifrado de una máquina virtual)             |
| compute_iaas_vmware_virtual_machine_power     | Oferta Vmware - Gestión del suministro de energía de una máquina virtual                                                              |
| baremetal_management                          | Oferta Bare Metal - Gestión de recursos de tipo Bare Metal                                                                  |
| baremetal_read                                | Oferta Bare Metal - Consulta de recursos de tipo Bare Metal                                                             |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                    |
| console_public_access_read                    | Consulta de las IPs autorizadas a acceder a la consola                                                                        |
| console_public_access_write                   | Adición de IPs autorizadas a acceder a la consola                                                                                 |
| documentation_read                            | Consulta de los recursos de documentación de confluence                                                                       |
| housing_read                                  | Consulta de recursos de tipo colocation                                                                                |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                       |
| iam_read                                      | Consulta de los derechos de usuario                                                                                          |
| iam_write                                     | Gestión de los derechos de usuario                                                                                               |
| intervention_read                             | Consulta de los cambios y puestas en producción previstas en la plataforma                                                 |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                     |
| monitoring_read                               | Consulta del monitoring                                                                                                    |
| monitoring_write                              | Gestión del monitoring                                                                                                         |
| metric_read                                   | Consulta de los datos de salud sobre las máquinas virtuales y hosts                                                        |
| network_read                                  | Consulta de los recursos de red                                                                                            |
| network_write                                 | Gestión de los recursos de red                                                                                                 |
| order_read                                    | Consulta de los pedidos de infraestructuras                                                                                    |
| order_write                                   | Creación de pedido de infraestructura                                                                                           |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                                      |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                  |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                 |
| openshift_management                          | Permite conectarse a las plataformas OpenShift (acotado al tenant)                                                         |
| support_management                            | Consulta de la totalidad de los tickets de soporte del tenant                                                                      |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                 |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                    |
| tag_read                                      | Consulta de los tags, excepto los tags RTMS                                                                                  |
| tag_write                                     | Gestión de los tags, excepto los tags RTMS                                                                                       |
| ticket_comment_read                           | Consulta de los comentarios                                                                                                 |
| ticket_comment_write                          | Gestión de los comentarios                                                                                                      |
| ticket_read                                   | Consulta de los tickets                                                                                                      |
| ticket_write                                  | Gestión de los tickets                                                                                                           |
| incident_management                           | Gestión de los incidentes                                                                                                         |
| incident_read                                 | Consulta de los incidentes                                                                                                    |
| billing_read                                  | Consulta de los dashboards de consumos                                                                                  |
| vpc_read                                      | Oferta VPC - Consulta de recursos de red tipo VPC                                                                      |
| vpc_write                                     | Oferta VPC - Gestión de recursos de red tipo VPC                                                                           |
| public_cloud_vm_instances_management          | Oferta VM Instances - Gestión de las máquinas virtuelles                                                                          |
| public_cloud_vm_instances_read                | Oferta VM Instances - Consulta de las máquinas virtuelles                                                                     |
| public_cloud_vm_instances_console_access      | Oferta VM Instances - Apertura de la consola de las máquinas virtuelles                                                          |
