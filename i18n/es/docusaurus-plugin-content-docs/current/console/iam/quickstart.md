---
title: Preguntas frecuentes
---
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'

# FAQ IAM

Las preguntas habituales sobre las cuentas, los permisos y el acceso a la consola. Los procedimientos paso a paso se encuentran en [Onboarding](../onboarding.md); la referencia completa está en los [conceptos IAM](concepts.md).

<a id="tenant"></a>
<a id="création-dun-tenant"></a>
<a id="selection-dun-tenant"></a>

## ¿Cómo crear o elegir un tenant?

La creación de un tenant se realiza __en autoservicio__ desde la consola, sin solicitud de servicio previa: __'Administración > Tenants'__, botón __'Nuevo tenant'__. El tenant de trabajo se elige desde el selector __'Mis tenants'__ de la barra superior.

Ver [Elegir o crear un entorno](../onboarding.md#etapa-3-elegir-o-crear-un-entorno).

*__Nota:__ Los recursos de un tenant le son propios y no se comparten con los demás tenants.*

<a id="comptes-daccès-à-la-console"></a>
<a id="création-dun-compte-utilisateur-dans-votre-organisation"></a>

## ¿Cómo añadir un usuario?

Por invitación, desde __'Administración > Usuarios'__, botón __'Nuevo usuario'__. Las credenciales son globales a su [organización](concepts.md#organizaciones), sea cual sea el repositorio de autenticación.

*__Nota__: Para añadir un usuario, debe poseer el permiso __'iam_write'__.*

Ver [Invitar a sus colaboradores](../onboarding.md#etapa-4-invitar-a-sus-colaboradores) y la [referencia](concepts.md#creación-de-una-cuenta-de-usuario-en-su-organización).

<a id="affectation-des-permissions-à-un-utilisateur"></a>

## ¿Cómo añadir un permiso?

Por defecto, un usuario no tiene ningún permiso. Desde la página de usuarios, abra el menú __'Acciones'__ del usuario y elija __'Editar'__. Los permisos se otorgan __tenant por tenant__: no existe una asignación global a nivel de la organización.

Ver la [asignación de permisos en un tenant](concepts.md#asignación-de-permisos-en-un-tenant).

## ¿Por qué no puedo añadir un permiso?

Para añadir un permiso, necesita poseer el permiso __'iam_write'__ así como el __permiso que desea añadir__.

<a id="permissions"></a>

## ¿Cuáles son los permisos disponibles para las cuentas de usuario de la consola?

Consulte la lista de [permisos disponibles](concepts.md#permisos-disponibles-para-los-usuarios-de-su-organización) y su definición.

## ¿Cómo auditar los accesos/permisos de los usuarios?

Vaya a la página __'Usuarios'__ y haga clic en el botón __'Exportar CSV'__: obtendrá la lista de los usuarios y de sus accesos.

## ¿Cómo eliminar un usuario?

En el menú __'Administración'__ de la barra verde a la izquierda de la pantalla, en el submenú __'Usuarios'__, haga clic en el icono __'Acciones'__ del usuario en cuestión y elija __'Eliminar'__.

*__Nota__:*

- *No puede eliminarse a sí mismo, ni eliminar a un usuario __'Propietario'__.*
- *Si se trata de un usuario federado, __asegúrese de que el usuario también se haya eliminado del repositorio de identidad__.*

## ¿Por qué algunos usuarios aparecen en gris?

Los usuarios en gris son los que no han validado su cuenta. Al crearse la cuenta, el usuario recibió un correo electrónico de verificación.

<img src={shivaOnboard_001} />

La cuenta aparece en gris mientras la verificación no se haya completado. Si el enlace ha caducado, utilice la acción __'Reinvitación'__: ver la [reinvitación de un usuario](concepts.md#reinscripción-de-un-usuario).

## ¿Cómo restablecer la contraseña?

Es posible restablecer la contraseña desde la página de inicio de sesión de la consola haciendo clic en __'¿Olvidó la contraseña?'__.

## ¿Qué es el MFA y es obligatorio?

El MFA (multi-factor authentication) es un concepto de verificación de la identidad de un usuario en dos pasos, denominado __autenticación de doble factor__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola, la autenticación de doble factor es obligatoria y requiere introducir un código de un solo uso una vez que el usuario ha introducido la contraseña de su cuenta.

## ¿Qué es un Personal Access Token (PAT)?

La generación de una clave API, también llamada __Personal Access Token (PAT)__, es una forma segura de conectarse a las API de la consola sin pasar por una interfaz gráfica. Consulte la [documentación de la API](../api.md).

<a id="gestion-des-accès-et-authentification"></a>
<a id="autorisation-daccès-à-la-console--ip-autorisées"></a>

## ¿Cómo autorizar una nueva dirección IP para acceder a la consola?

Al estar la consola alojada en una infraestructura cualificada SecNumCloud, su acceso está limitado a las direcciones IP públicas autorizadas. La lista es la de la __organización__: se consulta y se amplía desde __'Administración > Acceso'__, con los permisos `console_public_access_read` y `console_public_access_write`. La eliminación de una dirección se realiza mediante una solicitud de soporte en la consola.

Ver [Añadir una dirección IP](../onboarding.md#añadir-una-dirección-ip).

## ¿Cómo federar la autenticación con nuestro directorio?

La federación de identidad se configura a nivel de la organización: consulte los [mecanismos de autenticación](concepts.md#mecanismos-de-autenticación) y los [tutoriales de federación de identidad](/console/iam/tutorials).

<a id="changer-la-langue-dun-utilisateur"></a>

## ¿Cómo cambiar el idioma de un usuario?

En su __'Perfil'__, en la parte superior derecha de la pantalla, en la __'Configuración de usuario'__. Ver [Cambiar el idioma de un usuario](concepts.md#cambiar-el-idioma-de-un-usuario).

<a id="abonnement-aux-notifications-thématiques"></a>

## ¿Cómo recibir las notificaciones por correo electrónico?

En el perfil de usuario, pestaña __'Mis suscripciones'__, active las temáticas deseadas. Ver la [suscripción a las notificaciones temáticas](concepts.md#suscripción-a-notificaciones-temáticas).
