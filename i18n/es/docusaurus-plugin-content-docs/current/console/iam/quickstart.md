---
title: guía de inicio
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

## Propietario

### Creación de un teniente

La creación de un teniente se realiza mediante una solicitud de servicio que incluye:

    El nombre de su Organización
    El nombre de un contacto junto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del teniente
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para el teniente

### Selección del entorno

La selección del entorno se realiza desde la página de inicio de la consola Shiva:

<img src={shivaTenant} />

*__Nota:__ Las recursos de un entorno son exclusivos y no pueden mezclarse con otros entornos.*

## Acceso a la consola Shiva

Los cuentas de acceso a la consola Shiva se crean por el cuenta matriz del cliente en invitación (independientemente del repositorio de autenticación).
Las información de identificación son globales para tu [Organización](concepts.md#organizaciones).

*__Nota:__ El federicación de identidad se gestiona al nivel de la organización.*

### Creación de una cuenta de usuario en su organización

La creación de una cuenta de usuario en su organización se realiza mediante invitación. Para invitar a un usuario dentro de una [Organización](https://docs.example.com/concepts#organizations), navegue al menú __'Administración'__ en la barra superior izquierda y luego al submenú __'Usuarios'.

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

<img src={shivaOnboard_003} />

A continuación, indique la dirección de correo electrónico del usuario.

<img src={shivaOnboard_004} />

El usuario recibirá un correo de verificación.

<img src={shivaOnboard_001} />

Una vez completada la verificación, el usuario podrá iniciar sesión en la consola.


### Asignación de permisos a un usuario

La gestión de permisos se realiza desde la página del usuario.

<img src={shivaOnboard_003} />

Por defecto, un usuario no tiene permisos. Por lo tanto, es necesario que el administrador que invitó al usuario le otorgue los permisos necesarios para su actividad. Basta con hacer clic en el menú __'Acciones'__ del usuario y seleccionar la opción __'Modificar'__.

El menú de activación de permisos aparece entonces:

<img src={shivaOnboard_005} />

La configuración de los permisos se realiza para cada [Teniente](concepts.md#tenant) de la [Organización](concepts.md#organisations).

La lista de permisos y su definición está disponible [aquí](#permissions).

### Cambio de idioma del usuario

El cambio de idioma del usuario debe realizarse en el __'Perfil'__ del usuario, ubicado en la parte superior derecha del escritorio, dentro de los __'Configuraciones del usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](concepts.md#tenant).

### Abonnement a Notificaciones Thematicas

La gestión de los abonos permite recibir correos electrónicos relacionados con las temáticas activadas que se enviarán automáticamente en caso de ocurrir eventos correspondientes.

Esta opción está disponible en el perfil del usuario, dentro del apartado "Mis suscripciones":

<img src={shivaProfil_007} />

Por ejemplo, en caso de un incidente, se generarán correos electrónicos específicos por esta temática.

La lista de las temáticas disponibles puede variar y mejorarse gradualmente para adaptarse a los necesidades y cambios en nuestro entorno operativo.

### Permisos

Para agregar un permiso, necesita tener el permiso __'iam_write'__ y el permiso específico que desea agregar.

### ¿Cómo agregar a un usuario?

*__Nota__: Para agregar a un usuario, es necesario tener el permiso __'iam_write'__.*

### ¿Cómo auditar los permisos de usuarios?

Ve a la página de usuarios y haz clic en el botón __'Exportar CSV'__.

### ¿Cómo eliminar un usuario?

En el menú "Administración" ubicado en la barra superior izquierda, bajo el submenú "Usuario", haga clic en el icono "Acción" del usuario objetivo y seleccione "Eliminar".

*Nota:*

- *Para agregar un usuario, debe tener el permiso __'iam_write'__.*
- *Si es un usuario federado, asegúrese de que también haya sido eliminado de su repositorio de identidad.*

### Cómo restablecer el contraseña

Es posible restablecer la contraseña desde la página de inicio de sesión de la consola Shiva haciendo clic en 'Contraseña olvidada?'.

### Por qué algunos usuarios están en gris

Los usuarios en gris son aquellos cuyos cuentas no han sido verificadas. Al crear una cuenta, el usuario recibe un correo de confirmación.

<img src={shivaOnboard_001} />

Una vez completada la verificación, el usuario podrá iniciar sesión en la consola.

La cuenta permanecerá en gris hasta que se complete la verificación finalizada.

### Qué significa un Token de Acceso Personal (PAT)?

La generación de una clave API, también conocida como __Token de Acceso Personal (PAT)__, es una forma segura de conectarse a las APIs Shiva sin necesidad de una interfaz gráfica.

### ¿Qué es el MFA y está obligatorio?

El MFA (autenticación de múltiples factores) es un concepto de verificación de la identidad del usuario en dos etapas, conocido como autenticación a doble factor.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola Shiva, la autenticación a doble factor es obligatoria y requiere que ingrese un código único una vez que el usuario haya introducido el contraseña de su cuenta.

### Gestión de Acceso y Autenticación

### Autorización de acceso a un teniente: IP autorizadas

El acceso a la consola de gestión cloud está estrictamente limitado a las direcciones IP previamente autorizadas, en conformidad con los requisitos de la calificación SecNumCloud. Esta restricción garantiza un nivel de seguridad ampliado permitiendo el acceso solo a los usuarios provenientes de rangos de direcciones IP específicos, minimizando así los riesgos de acceso no autorizado y protegiendo la infraestructura cloud según los estándares de seguridad más altos.

Ahora es posible mostrar la lista de las direcciones IP públicas autorizadas en el teniente y agregar una nueva dirección IP pública directamente desde el panel "Administración > Acceso".

<img src={shivaIpAccessManagement_01} />

Para ello, el usuario debe tener los permisos `console_public_access_read` para consultar las direcciones IP autorizadas y `console_public_access_write` para agregar una dirección IP pública a la lista.

Luego, se puede agregar una nueva dirección:

<img src={shivaIpAccessManagement_02} />

Nota: *La eliminación de una dirección IP autorizada se realiza mediante una solicitud de soporte en la consola Cloud Temple.*
