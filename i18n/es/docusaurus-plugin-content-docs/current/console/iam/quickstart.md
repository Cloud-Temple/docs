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

La creación de un tenant se realiza mediante una solicitud de servicio que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para el tenant

### Selección de un tenant

La selección del tenant se realiza desde la página principal de la consola Shiva:

<img src={shivaTenant} />

*__Nota :__ Las recursos de un tenant son propios y no se pueden mezclar con otros tenants.*

## Cuentas de acceso a la consola Shiva

Las cuentas de acceso a la consola Shiva se crean por la cuenta principal del cliente mediante invitación (sin importar el repositorio de autenticación). Las credenciales son globales para su [Organización](concepts.md#organisations).

*__Nota :__ La federación de identidad se gestiona a nivel de la organización*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario a una [Organización](concepts.md#organisations), vaya al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

Indique luego la dirección de correo electrónico del usuario

<img src={shivaOnboard_004} />

El usuario recibirá un correo de verificación.

<img src={shivaOnboard_001} />

Una vez finalizada la verificación, el usuario podrá iniciar sesión en la consola.

### Asignación de permisos a un usuario

La gestión de permisos de usuarios se realiza desde la página de usuarios.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene permisos. Por lo tanto, es necesario que el administrador que realizó la invitación le otorgue los permisos necesarios para su actividad. Simplemente haga clic en el menú __'Acciones'__ del usuario y elija la opción __'Modificar'__.

Aparece entonces el menú para activar permisos:

<img src={shivaOnboard_005} />

La configuración de permisos debe realizarse para cada [Tenant](concepts.md#tenants) de la [Organización](concepts.md#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Cambiar el idioma de un usuario

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes del usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](concepts.md#tenants).

### Suscripción a notificaciones temáticas

La gestión de las suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente al producirse eventos correspondientes.

Está disponible en el perfil de usuario, en la pestaña "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de incidente, se generarán notificaciones por correo electrónico específicas para esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y cambios en nuestro entorno operativo.

## Permisos

### ¿Cuáles son los permisos disponibles para las cuentas de usuario de la consola Shiva?

Aquí encontrará la lista de [permisos disponibles](#permissions).

### ¿Cómo agregar un permiso?

El procedimiento de asignación de permisos está disponible [aquí](#permissions)

### ¿Por qué no puedo agregar un permiso?

Para agregar un permiso, debe poseer el permiso __'iam_write'__ así como el __permiso que desea agregar__.

### ¿Cómo agregar un usuario?

*__Nota__ : Para agregar un usuario, debe poseer el derecho __'iam_write'__.*

### ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página de usuarios y haga clic en el botón __'Exportar csv'__ :

### ¿Cómo eliminar un usuario?

En el menú __'Administración'__ en la barra verde a la izquierda de la pantalla, en el submenú __'usuario'__, haga clic en el icono __'Acción'__ del usuario objetivo y elija __'Eliminar'__.

*__nota__ :*

- *Para agregar un usuario, debe poseer el derecho __'iam_write'__.*
- *Si se trata de un usuario federado, __asegúrese de que el usuario haya sido eliminado también desde el repositorio de identidad__.*

### ¿Cómo restablecer su contraseña?

Es posible restablecer su contraseña desde la página de inicio de sesión de la consola Shiva haciendo clic en __'¿Olvidó su contraseña?'__.

### ¿Por qué algunos usuarios están grises?

Los usuarios grises son aquellos que no han validado su cuenta. Al crear la cuenta, el usuario recibió un correo de verificación.

<img src={shivaOnboard_001} />

Una vez finalizada la verificación, el usuario podrá iniciar sesión en la consola.

La cuenta permanece gris hasta que la verificación se complete.

### ¿Qué es un Token de Acceso Personal (PAT)?

La generación de una clave API, también llamada __Token de Acceso Personal (PAT)__,
es una manera segura de conectarse a las API Shiva sin pasar por una interfaz gráfica.

### ¿Qué es el MFA y es obligatorio?

El MFA (autenticación de dos factores) es un concepto de verificación de la identidad de un usuario en dos pasos, llamado __autenticación de dos factores__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola Shiva, la autenticación de dos factores es obligatoria y requiere ingresar un código único una vez que el usuario haya ingresado la contraseña de su cuenta.

## Gestión de accesos y autenticación

### Autorización de acceso a un tenant: IPs autorizadas

El acceso a la consola de gestión en la nube está estrictamente limitado a las direcciones IP previamente autorizadas, de conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad reforzado al permitir el acceso solo a usuarios provenientes de rangos de IP especificados, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura en la nube según los estándares de seguridad más altos.

Ahora es posible mostrar la lista de direcciones IP públicas autorizadas en el tenant y agregar una nueva dirección IP pública a esta lista directamente desde la pestaña "Administración > Acceso".

<img src={shivaIpAccessManagement_01} />

Para ello, el usuario debe tener el derecho `console_public_access_read` para consultar las IPs autorizadas, y el derecho `console_public_access_write` para agregar una dirección IP pública a la lista.

Es posible agregar una nueva IP:

<img src={shivaIpAccessManagement_02} />

Nota: *La eliminación de una IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*