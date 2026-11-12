---
title: Guía de inicio
---
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_003 from '@site/docs/console/iam/images/shiva_onboard_003.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaProfil_006 from '@site/docs/console/iam/images/shiva_profil_006.png'
import shivaProfil_007 from '@site/docs/console/iam/images/shiva_profil_007.png'
import shivaOrgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaIpAccessManagement_02 from '@site/docs/console/iam/images/shiva_ip_access_management_02.png'

## Tenant

### Creación de un tenant

La creación de un tenant se realiza __en self-service__ desde la Consola, sin solicitud de servicio previa. Desde __'Administración > Tenants'__, el botón __'Nuevo tenant'__ abre un formulario en dos partes: la identidad del tenant (nombre y descripción) y los productos a activar en él.

El procedimiento detallado se describe en [Quickstart Console](../console_quickstart.md).

### Selección de un tenant

La selección del tenant se realiza desde la página principal de la Consola:

<img src={shivaTenant} />

*__Nota:__ Los recursos de un tenant le son propios y no son mezclables con otros tenants.*

## Cuentas de acceso a la Consola

Las cuentas de acceso a la Consola son creadas por la cuenta maestra del patrocinador mediante invitación (independientemente del directorio de autenticación).
Las credenciales son globales para su [Organización](concepts.md#organizaciones).

*__Nota:__ La federación de identidades se gestiona a nivel de organización*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario a una [Organización](concepts.md#organizaciones), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

Indique a continuación la dirección de correo electrónico del usuario

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo de verificación.

<img src={shivaOnboard_001} />

Una vez finalizada la verificación, el usuario podrá conectarse a la consola.

### Asignación de permisos a un usuario

La gestión de los derechos de usuario se realiza desde la página de usuario.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene derechos. Por lo tanto, es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Basta con hacer clic en el menú __'Acciones'__ del usuario y elegir la opción __'Modificar'__.

Aparece entonces el menú de activación de derechos:

<img src={shivaOnboard_005} />

La configuración de los permisos debe realizarse para cada [Tenant](concepts.md#tenant) de la
[Organización](concepts.md#organizaciones).

La lista de permisos y su definición está disponible [aquí](#permisos).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Parámetros de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](concepts.md#tenant).

### Suscripción a notificaciones temáticas

La gestión de las suscripciones permite recibir los correos electrónicos relacionados con las temáticas activadas que serán enviados automáticamente al producirse los eventos correspondientes.

Está disponible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

 Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas de esa temática.

La lista de temáticas disponibles está sujeta a evolución y enriquecimiento progresivo para adaptarse a las necesidades y a los cambios en nuestro entorno operativo.

## Permisos

### ¿Cuáles son los permisos disponibles para las cuentas de usuario de la Consola?

Aquí está la lista de [permisos disponibles](#permisos).

### ¿Cómo añadir un permiso?

Aquí está el [procedimiento de asignación de permisos disponible aquí](#permisos)

### ¿Por qué no puedo añadir un permiso?

Para añadir un permiso, necesita poseer el permiso __'iam_write'__ así como el __permiso que desea añadir__.

### ¿Cómo añadir un usuario?

*__Nota__ : Para añadir un usuario, debe poseer el derecho __'iam_write'__.*

### ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página de usuarios y haga clic en el botón __'Exportar csv'__ :

### ¿Cómo eliminar un usuario?

En el menú __'Administración'__ en la barra verde a la izquierda de la pantalla, en el submenú __'usuario'__, haga clic en el icono __'Acción'__ del usuario objetivo y elija __'Eliminar'__.

*__nota__ :*

- *Para añadir un usuario, debe poseer el derecho __'iam_write'__.*
- *Si se trata de un usuario federado, __asegúrese de que el usuario también ha sido eliminado desde el directorio de identidades__.*

### ¿Cómo restablecer su contraseña?

Es posible restablecer su contraseña desde la página de conexión de la Consola haciendo clic en __'¿Contraseña olvidada?'__.

### ¿Por qué algunos usuarios aparecen en gris?

Los usuarios en gris son aquellos que no han validado su cuenta. Durante la creación de la cuenta, ;'usuario ha recibido un correo de verificación.

<img src={shivaOnboard_001} />

Una vez finalizada la verificación, el usuario podrá conectarse a la consola.

La cuenta aparece en gris hasta que la verificación no haya sido finalizada.

### ¿Qué es un Personal Access Token (PAT)?

La generación de una clave API, también llamada __Personal Access Token (PAT)__,
es una forma segura de conectarse a las API de la Consola sin pasar por una interfaz gráfica.

### ¿Qué es el MFA y es obligatorio?

El MFA (multi-factor authentication) es un concepto de verificación de la identidad de un usuario en dos etapas, llamado __autenticación de doble factor__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la Consola, la autenticación de doble factor es obligatoria y requiere introducir un código de un solo uso una vez que el usuario ha introducido la contraseña de su cuenta.

## Gestión de accesos y autenticación

### Autorización de acceso a la Consola: IPs autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

La lista es la de la __organización__: una dirección añadida desde cualquier tenant autoriza el acceso a la Consola para toda la organización. Se consulta y se enriquece desde la pestaña __'Administración > Accesos'__.

<img src={shivaOrgAccess} />

Para ello, el usuario debe disponer del derecho `console_public_access_read` para consultar las IPs autorizadas, y del derecho `console_public_access_write` para añadir una dirección IP pública a la lista.

Es entonces posible añadir una nueva IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*
