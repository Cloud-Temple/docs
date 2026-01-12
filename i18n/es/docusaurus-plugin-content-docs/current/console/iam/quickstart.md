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

## Inquilino

### Creación de un tenant

La creación de un tenant se realiza mediante una solicitud de servicio que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, de no existir, el sitio físico deseado para el tenant

### Selección de un tenant

La selección del tenant se realiza desde la página principal de la Consola:

<img src={shivaTenant} />

*__Nota:__ Los recursos de un tenant son propios y no se pueden mezclar con los de otros tenants.*

## Access accounts to the Console

Access accounts to the Console are created by the sponsor's master account upon invitation (regardless of the authentication repository).

Credentials are global to your [Organization](concepts.md#organizations).

*__Nota:__ Identity federation is managed at the organization level*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario a una [Organización](concepts.md#organisations), vaya al menú __'Administración'__ en el lado izquierdo de su pantalla, en la barra verde, y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

A continuación, indique la dirección de correo electrónico del usuario.

<img src={shivaOnboard_004} />

El usuario recibirá entonces un correo de verificación.

<img src={shivaOnboard_001} />

Una vez finalizada la verificación, el usuario podrá iniciar sesión en la consola.

### Asignación de permisos a un usuario

La gestión de los derechos de usuario se realiza desde la página de usuario.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene derechos. Es necesario que el administrador que realizó la invitación le otorgue los derechos necesarios para su actividad. Basta con hacer clic en el menú __'Acciones'__ del usuario y seleccionar la opción __'Editar'__.

A continuación aparece el menú para activar los derechos:

<img src={shivaOnboard_005} />

La configuración de permisos debe realizarse para cada [Tenant](concepts.md#tenant) de la [Organización](concepts.md#organisations).

La lista de permisos y sus definiciones está disponible [aquí](#permissions).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, dentro de los __'Ajustes del usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza por cada inquilino [Tenant](concepts.md#tenant).

### Suscripciones a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas, que se enviarán automáticamente cuando ocurran eventos correspondientes.

Está disponible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

### ¿Cuáles son las permisos disponibles para las cuentas de usuario de la Consola?

Aquí tienes la lista de [permisos disponibles](#permissions).

### ¿Cómo agregar un permiso?

Aquí se encuentra la [procedimiento de asignación de permiso disponible aquí](#permissions)

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you want to add__.

### ¿Cómo agregar un usuario?

*__Nota__ : Para agregar un usuario, debe poseer el permiso __'iam_write'__.*

### ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página de usuarios y haga clic en el botón __'Exportar csv'__:

### How to delete a user?

In the __'Administration'__ menu on the green bar on the left side of the screen, go to the __'User'__ submenu, click the __'Action'__ icon of the target user, and select __'Delete'__.

*__Note__:*  
- *To add a user, you must have the __'iam_write'__ permission.*  
- *If the user is federated, __make sure the user has also been deleted from the identity repository__.*

### ¿Cómo restablecer la contraseña?

Es posible restablecer la contraseña desde la página de inicio de sesión de la Consola haciendo clic en __'¿Olvidó la contraseña?'__.

### ¿Por qué algunos usuarios aparecen grises?

Los usuarios grises son aquellos que aún no han validado su cuenta. Al crear la cuenta, el usuario recibió un correo de verificación.

<img src={shivaOnboard_001} />

Una vez finalizada la verificación, el usuario podrá iniciar sesión en la consola.

La cuenta permanece grisácea hasta que la verificación no se haya completado.

### ¿Qué es un token de acceso personal (PAT)?

La generación de una clave API, también conocida como __Token de acceso personal (PAT)__,
es una forma segura de conectarse a las API de Console sin tener que utilizar una interfaz gráfica.

### ¿Qué es el MFA y es obligatorio?

El MFA (autenticación multifactor) es un concepto de verificación de identidad de un usuario en dos pasos, conocido como __autenticación de doble factor__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la Consola, la autenticación de doble factor es obligatoria y requiere ingresar un código de uso único una vez que el usuario ha introducido la contraseña de su cuenta.

## Gestión de accesos y autenticación

### Acceso al inquilino mediante direcciones IP autorizadas

El acceso a la consola de gestión en la nube está estrictamente limitado a las direcciones IP previamente autorizadas, conforme a los requisitos de la certificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso únicamente a usuarios procedentes de rangos de IP específicos, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura en la nube según los estándares de seguridad más elevados.

Ahora es posible visualizar la lista de direcciones IP públicas autorizadas para el inquilino y añadir una nueva dirección IP pública a esta lista directamente desde la pestaña "Administración > Acceso".

<img src={shivaIpAccessManagement_01} />

Para ello, el usuario debe contar con el permiso `console_public_access_read` para consultar las IPs autorizadas, y el permiso `console_public_access_write` para añadir una dirección IP pública a la lista.

A continuación, es posible añadir una nueva IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud al soporte técnico desde la consola Cloud Temple.*