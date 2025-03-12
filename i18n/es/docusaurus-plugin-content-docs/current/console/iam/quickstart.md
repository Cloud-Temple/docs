---
title: Guía de inicio
---
import shivaTenant from './images/shiva_tenant.png'
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaIpAccessManagement_01 from './images/shiva_ip_access_management_01.png'
import shivaIpAccessManagement_02 from './images/shiva_ip_access_management_02.png'

## Tenant

### Creación de un tenant

La creación de un tenant se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para el tenant

### Selección de un tenant

La selección del tenant se hace desde la página principal de la consola Shiva:

<img src={shivaTenant} />

*__Nota:__ Los recursos de un tenant son propios y no se pueden mezclar con otros tenants.*

## Cuentas de acceso a la consola Shiva

Las cuentas de acceso a la consola Shiva son creadas por la cuenta maestra del patrocinador por invitación (independientemente del repositorio de autenticación).
Las credenciales son globales para su [Organización](concepts.md#organisations).

*__Nota:__ La federación de identidad se gestiona a nivel de la organización*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario a una [Organización](concepts.md#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__.

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

La configuración de permisos debe realizarse para cada [Tenant](concepts.md#tenants) de la [Organización](concepts.md#organisations).

La lista de permisos y sus definiciones es accesible [aquí](#permissions).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza desde su __'Perfil'__ en la parte superior derecha de la pantalla, en la __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada [Tenant](concepts.md#tenants).

### Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con los temas activados que se enviarán automáticamente cuando ocurran eventos correspondientes.

Es accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas a este tema.

La lista de temas disponibles es susceptible de evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y a los cambios en nuestro entorno operativo.

## Permisos

### ¿Qué permisos están disponibles para las cuentas de usuario de la consola Shiva?

Aquí está la lista de [permisos disponibles](#permissions).

### ¿Cómo añadir un permiso?

El [procedimiento de asignación de permisos está disponible aquí](#permissions).

### ¿Por qué no puedo añadir un permiso?

Para añadir un permiso, necesita tener el permiso __'iam_write'__ así como el __permiso que desea añadir__.

### ¿Cómo añadir un usuario?

*__Nota__: Para añadir un usuario, debe tener el derecho __'iam_write'__.*

### ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página de usuarios y haga clic en el botón __'Exportar csv'__:

### ¿Cómo eliminar un usuario?

En el menú __'Administración'__ en la barra verde a la izquierda de la pantalla, en el submenú __'usuarios'__, haga clic en el icono __'Acción'__ del usuario objetivo y elija __'Eliminar'__.

*__Nota__:*

- *Para añadir un usuario, debe tener el derecho __'iam_write'__.*
- *Si se trata de un usuario federado, __asegúrese de que el usuario también ha sido eliminado del repositorio de identidad__.*

### ¿Cómo restablecer su contraseña?

Es posible restablecer su contraseña desde la página de conexión de la consola Shiva haciendo clic en __'¿Contraseña olvidada?'__.

### ¿Por qué algunos usuarios están en gris?

Los usuarios en gris son aquellos que no han validado su cuenta. Cuando se creó la cuenta, el usuario recibió un correo electrónico de verificación.

<img src={shivaOnboard_001} />

Una vez completada la verificación, el usuario podrá conectarse a la consola.

La cuenta está en gris hasta que se finalice la verificación.

### ¿Qué es un Personal Access Token (PAT)?

La generación de una clave API, también llamada __Personal Access Token (PAT)__, es una forma segura de conectarse a las API de Shiva sin pasar por una interfaz gráfica.

### ¿Qué es el MFA y es obligatorio?

El MFA (multi-factor authentication) es un concepto de verificación de la identidad de un usuario en dos etapas, llamada __autenticación de doble factor__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola Shiva, la autenticación de doble factor es obligatoria y requiere introducir un código de un solo uso una vez que el usuario ha introducido la contraseña de su cuenta.

## Gestión de accesos y autenticación

### Autorización de acceso a un tenant: IPs autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con las exigencias de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a los usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de accesos no autorizados y protegiendo la infraestructura cloud según los estándares de seguridad más elevados.

Ahora es posible visualizar la lista de direcciones IP públicas autorizadas en el tenant y añadir una nueva dirección IP pública a esta lista directamente desde la pestaña "Administración > Acceso".

<img src={shivaIpAccessManagement_01} />

Para ello, el usuario debe disponer del derecho `console_public_access_read` para consultar las IPs autorizadas, y del derecho `console_public_access_write` para añadir una dirección IP pública a la lista.

Es entonces posible añadir una nueva IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La eliminación de una IP autorizada se hace mediante una solicitud de soporte en la consola Cloud Temple.*
