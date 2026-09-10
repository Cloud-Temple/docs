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

- la __[organización](#organizaciones)__: la entidad contractual. Contiene las cuentas de usuario, la configuración de autenticación y el conjunto de sus tenants;
- el __[tenant](#tenant)__: un agrupamiento de recursos dentro de la organización. Contiene los recursos técnicos y los permisos de los usuarios.

Entre ambos se sitúa un __perímetro común__: la identidad del usuario. Una cuenta se crea una sola vez en la organización y luego se utiliza en todos los tenants a los que tiene acceso.

### Quién gestiona qué

| Objeto gestionado                                     | Organización                                  | Tenant                                             |
| ----------------------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| Contrato y facturación                                | Sí                                            | Informe de consumo por tenant                      |
| Mecanismo de autenticación (local, SSO)               | Sí                                            | No (heredado de la organización)                   |
| Ciclo de vida de las cuentas (invitación, eliminación) | Sí                                           | No (las cuentas son globales para la organización) |
| __Permisos de los usuarios__                          | __No__                                        | __Sí, tenant por tenant__                          |
| __Designación de un propietario__                     | __Sí__ (propietario de la organización)       | __Sí__ (propietario del tenant)                    |
| Recursos técnicos (cómputo, almacenamiento, red)      | No                                            | Sí                                                 |
| Direcciones IP autorizadas                            | No                                            | Sí                                                 |

:::info[A tener en cuenta]
Los permisos __nunca__ se configuran a nivel de la organización: se definen tenant por tenant. En cambio, el nivel de organización permite designar a un usuario como __propietario de la organización__.
:::

## Perímetro común: la cuenta de usuario

Las cuentas de acceso a la Consola se crean por invitación de la cuenta maestra del patrocinador (independientemente del repositorio de autenticación).
Las credenciales son globales para su [Organización](#organizaciones): un usuario dispone de una única cuenta, independientemente del número de tenants en los que interviene.

*__Nota :__ [La federación de identidades se gestiona a nivel de organización](#mecanismos-de-autenticación)*

Las acciones descritas a continuación corresponden a la cuenta en sí, independientemente del tenant al que esté conectado.

### Actualizar su perfil

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la esquina superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Actualizar su perfil'__.

A continuación, acceda a su bandeja de correo electrónico y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su perfil.

__Advertencia__: Asegúrese de que la solicitud de actualización del perfil haya sido iniciada por usted. Notifique cualquier solicitud que no provenga de usted mediante un ticket de soporte.

<img src={shivaProfil_014} />

### Restablecimiento de la contraseña

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer contraseña'__.

A continuación, diríjase a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su contraseña.

__Advertencia__: Asegúrese de que la solicitud de restablecimiento de su contraseña la haya iniciado usted mismo. Notifique cualquier solicitud que no provenga de usted mediante un ticket de soporte.

<img src={shivaProfil_015} />

### Restablecimiento de la autenticación de doble factor

Esta acción solo está disponible para una cuenta local (no SSO).

Seleccione en su __'Perfil'__, en la parte superior derecha de la pantalla, luego __'Configuración de usuario'__ y seleccione la acción __'Restablecer MFA'__.

A continuación, diríjase a su buzón de correo y haga clic en el enlace generado por la Consola. Simplemente siga los pasos para actualizar su autenticación de doble factor.

__Advertencia__: Asegúrese de ser el originador de la solicitud de restablecimiento de su autenticación de doble factor. Informe de cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_016} />

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes de usuario'__.

<img src={shivaProfil_006} />

La configuración se aplica a cada tenant [Tenant](#tenant).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas, que se enviarán automáticamente cuando se produzcan los eventos correspondientes.

Se accede desde el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

### Cerrar sesión

La desconexión de un usuario debe realizarse en su __'Perfil'__, en la esquina superior derecha de la pantalla, y luego en __'Cerrar sesión'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Se realiza una desconexión automática al expirar el token de sesión (JWT Token).

## Organizaciones

La organización está vinculada a su __cuenta patrocinadora__ y al __contrato de Cloud Temple asociado__. Representa su entidad (empresa, departamento, equipo, ...) que mantiene la relación contractual entre Cloud Temple y usted.

### Principio de una organización

La organización tiene cuatro grandes roles:

- Representa __la entidad contractual__ para los aspectos de seguimiento y facturación,
- Define __la configuración global del mecanismo de autenticación__: la autenticación puede ser local a nivel de la Consola o remota a través de un servicio de federación de identidades,
- Gestiona la totalidad de las __cuentas de usuario__,
- __Federar los tenants__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que defina para las necesidades de su arquitectura Cloud.

Los roles (derechos/permisos) de los usuarios son configurables para cada tenant definido en su organización. Por ejemplo, una cuenta puede estar autorizada a solicitar recursos en un tenant, pero no en otro.

### Lo que se gestiona a nivel de la organización

El perímetro de la organización abarca:

- el __mecanismo de autenticación__ común a todas las cuentas,
- el __ciclo de vida de las cuentas de usuario__: invitación, reinscripción, eliminación,
- la __designación de los propietarios de la organización__,
- la __lista de tenants__ de su arquitectura.

:::warning[Los permisos no se gestionan aquí]
La página __'Usuarios'__ de la organización permite crear una cuenta, designarla como propietaria y eliminarla. __No__ permite asignar permisos: estos son propios de cada tenant y se configuran desde el tenant correspondiente (consulte [Asignación de permisos en un tenant](#asignación-de-permisos-en-un-tenant)).
:::

### Mecanismos de autenticación

La Consola permite, a nivel de organización, __la configuración del mecanismo de autenticación__. Puede
utilizar el repositorio local de autenticación de la Consola o bien conectar su organización con uno
de sus repositorios de autenticación.

Se admiten los siguientes repositorios externos:

- Repositorios compatibles con __OpenID Connect__,
- Repositorios compatibles con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

:::info[Important]
Se requiere una dirección de correo electrónico para todas las cuentas procedentes de una federación de identidades. Las cuentas creadas sin dirección de correo electrónico no podrán iniciar sesión y podrían eliminarse automáticamente.
:::

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario a una [Organización](#organizaciones), vaya al menú __'Administración'__ en la barra verde a la izquierda de su pantalla y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

A continuación, indique la dirección de correo electrónico del usuario

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo de verificación.

<img src={shivaOnboard_001} />

Una vez completada la verificación, el usuario podrá iniciar sesión en la consola.

Por defecto, __un usuario recién creado no tiene ningún derecho__. Por lo tanto, es necesario otorgarle a continuación los permisos necesarios para su actividad, __en cada tenant__ en el que deba intervenir.

### Gestión de los propietarios de la organización

El __propietario de la organización__ es el único rol asignable a nivel de la organización. Es distinto del [propietario de un tenant](#gestión-de-propietarios-en-un-tenant).

- La designación se realiza desde la página __'Usuarios'__ del panel de Administración, mediante el menú de acciones de la fila del usuario.
- Este rol da acceso a la __vista de organización__: seguimiento contractual, lista de tenants, gestión de las cuentas.
- No se trata de un permiso granular: no hay ningún permiso de tipo `read` / `write` que asignar a nivel de la organización.
- Un usuario __'Propietario'__ no puede ser eliminado.

### Reinscripción de un usuario

Cuando un usuario ha sido provisionado pero no ha validado su inscripción dentro del plazo de expiración del correo electrónico enviado por la Consola, ya no puede confirmar su inscripción. En ese caso, es posible reenviarle un enlace para que renueve su primera inscripción.

La reinscripción de un usuario debe realizarse en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea reinscribir y haga clic en el botón de acción al final de la fila, luego __'Reinscripción'__.

__Advertencia__: Asegúrese de ser el originador de la solicitud de reinscripción de su cuenta de usuario. Por favor, notifique cualquier solicitud que no provenga de usted a través de un ticket de soporte.

<img src={shivaProfil_012} />

### Eliminación de un usuario

La eliminación de un usuario debe realizarse en la pestaña __'Usuario'__ del panel de Administración, en la parte inferior izquierda de la pantalla.

Seleccione el usuario que desea eliminar y haga clic en el botón de acción al final de la fila, luego en __'Eliminar'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: No puede eliminarse a sí mismo y no puede eliminar a un usuario __'Propietario'__.

## Tenant

El tenant es un __agrupamiento de recursos dentro de una organización__. Una [Organización](#organizaciones) tiene al menos un tenant (llamado __tenant por defecto__, que puede ser renombrado). Por lo general, se utilizan varios tenants para segmentar responsabilidades o perímetros técnicos.

Por ejemplo:

- Un tenant __Producción__
- Un tenant __Preproducción__
- Un tenant __Pruebas__
- Un tenant __Validación__

Pero también es posible organizar las cosas con una __vista de aplicación__ o por __criticidad__:

- Un tenant __Aplicación 1__ o __Criticidad 1__
- Un tenant __Aplicación 2__ o __Criticidad 2__
- ...

Los recursos técnicos solicitados se asignan a un tenant específico y no se comparten con otros tenants. Por ejemplo, un clúster de hipervisor y las redes L2 asociadas solo están disponibles en 1 tenant.
En cuanto a las redes, es posible solicitar redes __'cross tenant'__ para garantizar la continuidad de red entre los tenants.

Es posible evolucionar la arquitectura añadiendo o eliminando tenants.

Un tenant no puede estar vacío. Debe inicializarse necesariamente con un mínimo de recursos:

- Una zona de disponibilidad (AZ, es decir, un centro de datos físico),
- Un clúster de cómputo,
- Un espacio de almacenamiento,
- Un vlan de red.

| Referencia de pedido                                       | Unidad   | SKU                     |
|------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activación de un tenant              | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 tenant | csp:(region):iaas:az:v1 |

### Lo que se gestiona a nivel del tenant

El perímetro del tenant abarca:

- los __recursos técnicos__ solicitados y desplegados,
- los __permisos de los usuarios__ sobre esos recursos,
- la __designación de los propietarios del tenant__,
- las __direcciones IP autorizadas__ para acceder al tenant,
- el __seguimiento del consumo__ de los recursos.

Los permisos de los usuarios deben definirse en cada tenant. Así, una cuenta puede estar autorizada a solicitar recursos en un tenant, pero no en otro. Por lo tanto, cada organización debe reflexionar cuidadosamente sobre los tenants deseados: este punto suele tratarse en el taller de inicialización, durante la creación de la organización.

### Asignación de permisos en un tenant

La gestión de los derechos de un usuario se realiza desde la página de usuarios, __tenant por tenant__.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Basta con hacer clic en el menú __'Acciones'__ del usuario y elegir la opción __'Modificar'__.

Aparece entonces el menú de activación de derechos:

<img src={shivaOnboard_005} />

La configuración de los permisos debe repetirse para cada [Tenant](#tenant) de la [Organización](#organizaciones) en el que el usuario deba intervenir: no existe una asignación global a nivel de la organización.

La lista de permisos y su definición está disponible [aquí](#permisos).

### Gestión de propietarios en un tenant

Cada tenant cuenta con al menos un propietario, garantizando así una responsabilidad clara y una gestión eficiente de los recursos asociados. Además, es posible declarar varios propietarios en un mismo tenant, lo que permite una colaboración y una toma de decisiones compartida. A continuación, encontrará información importante a tener en cuenta durante la gestión de estos propietarios.

El propietario de un tenant es un rol distinto del [propietario de la organización](#gestión-de-los-propietarios-de-la-organización): asume la responsabilidad de un perímetro de recursos, no de la relación contractual.

#### Información importante sobre la gestión de propietarios

#### 1. Número de propietarios

- No existe ningún límite técnico respecto al número de propietarios que se pueden definir en el inquilino.

- La interfaz de gestión (IHM) muestra una advertencia cuando hay más de 3 propietarios, con el fin de recomendar limitar el número de propietarios por motivos de seguridad y una gestión óptima de los accesos.

#### 2. Adición de un nuevo propietario

- Al añadir un nuevo propietario, la actualización de sus permisos puede tardar hasta 60 minutos.

- Este tiempo de propagación es normal y permite asegurar que los permisos de acceso se apliquen correctamente a todos los servicios y recursos asociados.

#### 2. Permisos de un propietario

- Al propietario se le asignarán todos los permisos relacionados con los productos activados en su tenant.

- No es posible modificar los permisos de un propietario.

#### 3. Retiro de un propietario

- Para retirar a un propietario del tenant, el usuario debe enviar una solicitud al soporte.

- Este procedimiento garantiza que las modificaciones de los permisos de acceso se realicen de manera segura y conforme a las buenas prácticas de gestión de accesos.

### Autorización de acceso a un tenant: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en cumplimiento con los requisitos de la certificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso únicamente a usuarios procedentes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*

### Consumo de recursos en un inquilino

Es posible visualizar los recursos cloud consumidos dentro de un inquilino, lo que ofrece una vista detallada del uso de los distintos servicios desplegados. Esta funcionalidad permite a los usuarios seguir en tiempo real el consumo de sus recursos, identificar los servicios más utilizados y optimizar su uso según las necesidades.

En el menú de la consola, haga clic en "Informe de consumo" y seleccione el período de tiempo deseado. De este modo, podrá visualizar en detalle el consumo de recursos cloud durante el período definido, lo que le permitirá analizar el uso de los servicios y optimizar su gestión en consecuencia:

<img src={shivaTenantRessources_01} />

## Permisos

La Consola permite una gestión granular de los derechos de los usuarios de una organización, con una __segregación por tenant__.
Inicialmente, es la cuenta principal del cliente la que permite la configuración inicial de las cuentas y los permisos asociados.
Posteriormente, el permiso __'iam_write'__ permite a una cuenta administrar los permisos de otros usuarios, en el tenant en el que se le haya concedido ese derecho.

### Permisos disponibles para los usuarios de su organización

Cuando se crea un usuario, no tiene ningún permiso por defecto. Cada permiso se asigna individualmente y funciona de manera unitaria, sin superposición con otros permisos. Se aplican de forma conjunta, lo que significa que un usuario debe disponer de todos los permisos necesarios para realizar una acción específica.

Los siguientes permisos son configurables para cada usuario y para cada tenant de su organización :

- Permisos de tipo “read” : permiten únicamente la consulta de recursos sin posibilidad de modificación.
- Permisos de tipo “write” : autorizan la modificación de configuraciones.
- Permisos de tipo “management“ : autorizan la gestión avanzada de recursos.
- Permisos de tipo “console_access“ : autorizan las conexiones tipo PMAD en los recursos.
- Permisos de tipo “virtual_machine_power“ : autorizan la gestión de la alimentación de una máquina virtual.

- __Estos son permisos, no roles.__ A este respecto, es necesario tener el permiso READ y WRITE para modificar una configuración.

Última actualización el: 20/04/2026

| Nombre del permiso                          | Descripción del permiso                                                                                                  |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consulta de registros y actividades                                                                                   |
| activity_write                                | Gestión de registros y actividades                                                                                        |
| backup_iaas_opensource_read                   | Oferta OpenIaaS - Gestión de recursos de tipo backup - consulta                                                         |
| backup_iaas_opensource_write                  | Oferta OpenIaaS - Gestión de recursos de tipo backup - modificación                                                         |
| backup_iaas_spp_read                          | Oferta VMware - Gestión de recursos de tipo backup - consulta                                                           |
| backup_iaas_spp_write                         | Oferta VMware - Gestión de recursos de tipo backup - modificación                                                           |
| bastion_read                                  | Consulta de recursos de tipo bastión                                                                                   |
| bastion_write                                 | Gestión de recursos (appliances, sesiones,...) de tipo Bastión                                                             |
| bastion_console_access                        | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por una appliance Bastion                               |
| compute_iaas_opensource_console_access        | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                              |
| compute_iaas_opensource_infrastructure_read   | Oferta OpenIaaS - Consulta de datos avanzados de los recursos de Xen Orchestra                                                |
| compute_iaas_opensource_infrastructure_write  | Oferta OpenIaaS - Gestión avanzada de los recursos de Xen Orchestra                                                                 |
| compute_iaas_opensource_read                  | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                      |
| compute_iaas_opensource_management            | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                           |
| compute_iaas_opensource_virtual_machine_power | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                            |
| compute_iaas_opensource_replication_recover   | Oferta OpenIaaS - Gestión de la replicación                                                                                    |
| compute_iaas_vmware_console_access            | Oferta VMware - Apertura de la consola de una máquina virtual                                                                |
| compute_iaas_vmware_infrastructure_read       | Oferta VMware - Consulta de datos avanzados de los recursos de VMware (reglas de afinidad/anti-afinidad, configuración drs, etc) |
| compute_iaas_vmware_infrastructure_write      | Oferta VMware - Gestión avanzada de los recursos de VMware                                                                          |
| compute_iaas_vmware_read                      | Oferta VMware - Consulta de recursos de tipo Máquinas Virtuales                                                        |
| compute_iaas_vmware_management                | Oferta VMware - Gestión de recursos de tipo Máquinas Virtuales (permite el cifrado de una máquina virtual)             |
| compute_iaas_vmware_virtual_machine_power     | Oferta VMware - Gestión de la alimentación de una máquina virtual                                                              |
| baremetal_management                          | Oferta Bare Metal - Gestión de recursos de tipo Bare Metal                                                                  |
| baremetal_read                                | Oferta Bare Metal - Consulta de recursos de tipo Bare Metal                                                             |
| baremetal_console_access                      | Oferta Bare Metal - Apertura de la consola de un Bare Metal                                                                    |
| console_public_access_read                    | Consulta de las IPs autorizadas para acceder a la consola                                                                        |
| console_public_access_write                   | Adición de IPs autorizadas para acceder a la consola                                                                                 |
| documentation_read                            | Consulta de los recursos de documentación de Confluence                                                                       |
| housing_read                                  | Consulta de recursos de tipo colocation                                                                                |
| iam_offline_access                            | Creación y eliminación de Access Token Personales (PAT)                                                                       |
| iam_read                                      | Consulta de los derechos de usuario                                                                                          |
| iam_write                                     | Gestión de los derechos de usuario                                                                                               |
| intervention_read                             | Consulta de los cambios y despliegues en producción previstos en la plataforma                                                 |
| inventory_read                                | Consulta de recursos de tipo Inventario                                                                                |
| inventory_write                               | Gestión de recursos de tipo Inventario                                                                                     |
| monitoring_read                               | Consulta del monitoring                                                                                                    |
| monitoring_write                              | Gestión del monitoring                                                                                                         |
| metric_read                                   | Consulta de los datos de estado de las máquinas virtuales y hosts                                                        |
| network_read                                  | Consulta de los recursos de red                                                                                            |
| network_write                                 | Gestión de los recursos de red                                                                                                 |
| order_read                                    | Consulta de los pedidos de infraestructura                                                                                    |
| order_write                                   | Creación de pedidos de infraestructura                                                                                           |
| object-storage_iam_management                 | Permite gestionar las cuentas de almacenamiento en el producto S3                                                                      |
| object-storage_read                           | Permite ver los buckets y las configuraciones de los buckets                                                                  |
| object-storage_write                          | Permite editar los buckets y las configuraciones de los buckets                                                                 |
| openshift_management                          | Permite conectarse a las plataformas OpenShift (limitado al tenant)                                                         |
| support_management                            | Consulta de todos los tickets de soporte del tenant                                                                      |
| support_read                                  | Consulta de sus tickets de soporte del tenant                                                                                 |
| support_write                                 | Creación de un ticket de soporte en el tenant                                                                                    |
| tag_read                                      | Consulta de las etiquetas, excepto las etiquetas RTMS                                                                                  |
| tag_write                                     | Gestión de las etiquetas, excepto las etiquetas RTMS                                                                                       |
| ticket_comment_read                           | Consulta de los comentarios                                                                                                 |
| ticket_comment_write                          | Gestión de los comentarios                                                                                                      |
| ticket_read                                   | Consulta de los tickets                                                                                                      |
| ticket_write                                  | Gestión de los tickets                                                                                                           |
| incident_management                           | Gestión de incidentes                                                                                                         |
| incident_read                                 | Consulta de incidentes                                                                                                    |
| billing_read                                  | Consulta de los dashboards de consumo                                                                                  |
| vpc_read                                      | Oferta VPC - Consulta de recursos de red de tipo VPC                                                                      |
| vpc_write                                     | Oferta VPC - Gestión de recursos de red de tipo VPC                                                                           |
| public_cloud_vm_instances_management          | Oferta VM Instances - Gestión de máquinas virtuales                                                                          |
| public_cloud_vm_instances_read                | Oferta VM Instances - Consulta de máquinas virtuales                                                                     |
| public_cloud_vm_instances_console_access      | Oferta VM Instances - Apertura de la consola de las máquinas virtuales                                                          |
