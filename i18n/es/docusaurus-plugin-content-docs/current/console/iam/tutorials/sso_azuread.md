---
title: Ejemplo de federación de identidad con Microsoft EntraID (Azure AD)
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from '@site/docs/console/iam/tutorials/images/sso_entra_001.png'
import ssoEntra_002 from '@site/docs/console/iam/tutorials/images/sso_entra_002.png'
import ssoAad_004 from '@site/docs/console/iam/tutorials/images/sso_aad_004.png'
import ssoAad_005 from '@site/docs/console/iam/tutorials/images/sso_aad_005.png'
import ssoAad_006 from '@site/docs/console/iam/tutorials/images/sso_aad_006.png'
import ssoAad_007 from '@site/docs/console/iam/tutorials/images/sso_aad_007.png'
import ssoAad_008 from '@site/docs/console/iam/tutorials/images/sso_aad_008.png'
import ssoAad_009 from '@site/docs/console/iam/tutorials/images/sso_aad_009.png'
import ssoAad_010 from '@site/docs/console/iam/tutorials/images/sso_aad_010.png'
import ssoAad_011 from '@site/docs/console/iam/tutorials/images/sso_aad_011.png'
import ssoAad_012 from '@site/docs/console/iam/tutorials/images/sso_aad_012.png'
import ssoAad_013 from '@site/docs/console/iam/tutorials/images/sso_aad_013.png'
import ssoAad_014 from '@site/docs/console/iam/tutorials/images/sso_aad_014.png'
import ssoAad_015 from '@site/docs/console/iam/tutorials/images/sso_aad_015.png'
import ssoAad_016 from '@site/docs/console/iam/tutorials/images/sso_aad_016.png'
import ssoAad_017 from '@site/docs/console/iam/tutorials/images/sso_aad_017.png'
import ssoAad_018 from '@site/docs/console/iam/tutorials/images/sso_aad_018.png'

A continuación se presenta un ejemplo de configuración del repositorio de autenticación de una organización Cloud Temple con __Microsoft EntraID__.

La configuración de su repositorio Microsoft a nivel de una organización Cloud Temple facilita la autenticación de sus usuarios en la Consola. Esto permite evitar la multiplicación de factores de autenticación y reducir la superficie de ataque. Si sus usuarios ya están autenticados en su cuenta Microsoft, la autenticación en los servicios de la Consola será transparente.

:::info[Azure AD y Microsoft EntraID]
Microsoft EntraID es el nuevo nombre de Azure Active Directory (Azure AD) desde 2023. Se trata del mismo producto: este tutorial se aplica indistintamente a ambas denominaciones.
:::

## Elegir el protocolo

La federación con EntraID puede realizarse con cualquiera de los dos protocolos estándar. Ambos ofrecen un nivel de seguridad equivalente; se diferencian principalmente en lo que debe transmitirnos y en lo que habrá que mantener a lo largo del tiempo.

| | OpenID Connect | SAML 2.0 |
|---|---|---|
| Lo que nos transmite | Dos identificadores y un secreto | Una URL de metadatos pública |
| Secreto intercambiado | Sí, el secreto de cliente | Ninguno |
| A mantener en el tiempo | El secreto de cliente (24 meses máximo) | El certificado de firma (3 años por defecto) |

__Salvo restricción específica, recomendamos OpenID Connect__: es el protocolo que desplegamos de forma predeterminada. Opte por SAML si su política interna lo impone, o si su directorio está conectado a un concentrador de federación que solo admite ese protocolo.

Indique el protocolo elegido al abrir su solicitud de asistencia.

## Información intercambiada

La implementación se basa en un intercambio en ambos sentidos. Estos son los detalles desde el principio, para que pueda prepararlo todo de una sola vez.

### Lo que debe transmitirnos — con OpenID Connect

| Información | Nombre en el portal de Azure | Para qué sirve |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifica la aplicación ante EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Determina los puntos de conexión OpenID Connect de su directorio |
| __Secreto de cliente__ | *Client secret* → columna __Value__ | Autentica la Consola ante EntraID |

Ambos identificadores figuran en la pestaña __"Overview"__ de su registro de aplicación; el secreto se crea en la pestaña __"Certificates & secrets"__.

### Lo que debe transmitirnos — con SAML 2.0

Una sola información basta en el caso habitual:

| Información | Nombre en el portal de Azure | Para qué sirve |
|---|---|---|
| __URL de los metadatos de federación__ | *App Federation Metadata Url* | De ella derivamos el identificador de su directorio, sus puntos de conexión y su certificado de firma |

Se presenta de la siguiente forma:

```
https://login.microsoftonline.com/<directory-tenant-id>/federationmetadata/2007-06/federationmetadata.xml?appid=<application-id>
```

La encontrará en __"Enterprise applications"__ → su aplicación → __"Single sign-on"__, sección *SAML Certificates*. Es pública y no contiene ningún secreto: puede figurar en el cuerpo de su solicitud.

:::tip[Por qué esta URL en lugar de una lista de parámetros]
Reúne en un solo valor el conjunto de parámetros de su directorio y simplifica el seguimiento de la renovación de su certificado de firma. Si esta URL no es accesible desde Internet, transmita en su lugar el *Identity provider entity ID*, la *Single Sign-On service URL*, la *Single Logout service URL* y el certificado de firma en formato __Certificate (Base64)__.
:::

:::warning[Nunca transmita el secreto en el cuerpo de una solicitud]
El valor del secreto de cliente es una credencial de autenticación. No lo incluya en el cuerpo de una solicitud de asistencia, ni en un comentario, ni en un archivo adjunto sin cifrar: permanecería allí consultable de forma duradera.

Indique en su solicitud que dispone del secreto y transmítalo por el canal seguro que le indicará su contacto de Cloud Temple. Los dos identificadores (Application ID y Directory ID) no son sensibles y sí pueden figurar en la solicitud.
:::

### Lo que Cloud Temple le transmite

Valores propios de su organización, que debe declarar en su aplicación EntraID:

| Nuestro término | Término de Microsoft | Protocolo |
|---|---|---|
| URL de redirección | *Redirect URL* | OpenID Connect |
| URL de redirección | *Reply URL (Assertion Consumer Service URL)* | SAML 2.0 |
| Identificador del proveedor de servicio | *Identifier (Entity ID)* | SAML 2.0 |

:::tip[Solicítelos al abrir su petición]
Estos valores dependen de su organización y no pueden deducirse. Al solicitarlos en el momento de abrir su solicitud de asistencia, podrá realizar toda la configuración de Azure de una sola vez, sin tener que volver sobre ella.
:::

## Paso 1: Configuración del SSO en el lado de Microsoft EntraID

Siga la sección correspondiente al protocolo elegido y, a continuación, la sección «Configuraciones de seguridad adicionales», común a ambos.

### Vía OpenID Connect

#### Registro de una nueva aplicación de Azure (portal de Azure)

Para crear el __app registration__, diríjase al portal de Microsoft Azure y, a continuación, en Microsoft EntraID, __"ADD > App Registration"__.

En la página "Register an application", indique lo siguiente:

```
- Name: indicar "SHIVA"
- Supported account types: Accounts in this organizational directory only (<Su Tenant Azure> only - Single tenant)
- Redirect URL: indicar la URL proporcionada por Cloud Temple. Si aún no dispone de ella, deje el campo vacío y consulte el paso 3.
```

<img src={ssoEntra_001} />

Los datos __Application (client) ID__ y __Directory (tenant) ID__ se muestran en la pestaña "Overview". Anótelos: son dos de las tres informaciones que deberá facilitar en su solicitud de asistencia.

<img src={ssoEntra_002} />

#### Definición de un secreto

En la pestaña "Certificates & secrets", cree un nuevo secreto.

<img src={ssoAad_004} />

:::warning[Copie el valor inmediatamente]
El valor del secreto solo se muestra una vez, justo después de su creación. Copie el contenido de la columna __"Value"__, y no el de la columna __"Secret ID"__. Si pierde este valor, deberá generar un nuevo secreto.
:::

<img src={ssoAad_005} />

:::caution[Validez limitada a 24 meses]
La fecha de expiración del secreto no puede ser superior a 24 meses, incluso con una fecha de expiración personalizada. __Anote esta fecha desde ahora__: al alcanzarla, la conexión SSO dejará de funcionar para todos sus usuarios. Consulte la sección [Mantenimiento de la federación a lo largo del tiempo](#mantenimiento-de-la-federación-a-lo-largo-del-tiempo).
:::

#### Autorización de la información utilizada por la Consola

La Consola identifica a sus usuarios a partir de la información transportada por el token de identidad. Solo se requiere una acción por su parte: __exponer la dirección de correo electrónico__.

En el menú __"Token Configuration"__, haga clic en __"Add optional claim"__. Seleccione "ID" como tipo de token y marque "email".

<img src={ssoAad_006} />

La interfaz de Azure le preguntará si desea añadir un permiso que permita leer el correo electrónico de un usuario (Microsoft Graph email). Marque la casilla y valide.

<img src={ssoAad_007} />

A continuación, diríjase a "API permissions" y haga clic en __"Grant admin consent for &lt;su organización&gt;"__.

<img src={ssoAad_008} />

A título informativo, esta es toda la información consumida por la Consola:

| Información | Uso | Acción por su parte |
|---|---|---|
| `email` | Dirección de conexión del usuario | __Sí__ — debe declararse como claim opcional (más arriba) |
| `oid` | Vinculación estable de la cuenta de la Consola con la identidad de su directorio, incluso si cambia la dirección de correo | Ninguna — emitido de forma nativa por EntraID |
| `given_name`, `family_name` | Nombre y apellidos mostrados en la Consola | Ninguna — incluidos en el ámbito `profile` |

### Vía SAML 2.0

#### Creación de la aplicación empresarial

En __Microsoft EntraID__, diríjase a __"Enterprise applications"__ y luego a __"New application"__. Elija __"Create your own application"__, asígnele un nombre y seleccione *Integrate any other application you don't find in the gallery (Non-gallery)*. Valide con __"Create"__.

#### Configuración del inicio de sesión único

En su aplicación, abra __"Single sign-on"__ y elija __"SAML"__. En __"Basic SAML Configuration"__, haga clic en __"Edit"__ e indique los valores proporcionados por Cloud Temple:

- __Identifier (Entity ID)__;
- __Reply URL (Assertion Consumer Service URL)__.

Guarde.

#### Atributos y notificaciones

EntraID emite de forma predeterminada las notificaciones esperadas por la Consola. Compruebe su presencia en __"Attributes & Claims"__:

| Notificación | Uso | Acción por su parte |
|---|---|---|
| `…/claims/emailaddress` | Dirección de conexión del usuario | Ninguna — origen `user.mail` |
| `http://schemas.microsoft.com/identity/claims/objectidentifier` | Vinculación estable de la cuenta de la Consola con la identidad de su directorio | Ninguna |
| `…/claims/givenname`, `…/claims/surname` | Nombre y apellidos mostrados en la Consola | Ninguna |

:::warning[Identificador de nombre (NameID): el punto que más se olvida]
En __"Attributes & Claims"__ → __"Unique User Identifier (Name ID)"__, establezca el origen en __user.objectid__ y el formato en __Persistent__.

De forma predeterminada, EntraID emite la dirección de correo electrónico como NameID. Si un usuario cambia de dirección, la Consola lo trataría como una persona distinta y perdería sus permisos. El identificador de objeto, en cambio, nunca cambia.
:::

### Configuraciones de seguridad adicionales (opcional pero recomendado)

De forma predeterminada, Microsoft EntraID tal como está configurado permitirá que cualquier usuario de su tenant de Azure se conecte a su organización Cloud Temple. Es posible restringir los accesos a nivel de __"App Registration"__ para autorizar únicamente a una lista de usuarios o grupos.

Este es el procedimiento a seguir.

#### Acceder a los parámetros adicionales de "App Registration"

##### Opción 1

Vaya a la pestaña "Overview" y haga clic en el nombre de la aplicación (el enlace situado a continuación de "Managed application").

<img src={ssoAad_009} />

##### Opción 2

Diríjase a "Enterprise applications" y busque utilizando el nombre de la aplicación creada anteriormente.

<img src={ssoAad_010} />

#### Restricción de la autenticación a los usuarios asignados a la aplicación

Indique aquí la necesidad de una asignación del usuario a la aplicación para autorizar su autenticación:

<img src={ssoAad_011} />

#### Asignación de usuarios y grupos a la aplicación

Solo los grupos y usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple mediante el app registration.

<img src={ssoAad_012} />

Por último, aplique la asignación haciendo clic en "Assign".

<img src={ssoAad_013} />

A partir de ahora, los usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple mediante la aplicación creada.

## Paso 2: Solicitar la configuración del SSO de su organización

Esta parte de la configuración se realiza a nivel de la organización por parte del equipo de Cloud Temple.

Para ello, presente __una solicitud de asistencia__ en la Consola indicando su deseo de configurar una federación Microsoft EntraID, precisando:

- el nombre de su organización;
- __el protocolo elegido__: OpenID Connect o SAML 2.0;
- el nombre de un contacto, con su correo electrónico y número de teléfono, para finalizar la configuración;
- __con OpenID Connect__: el __Application (client) ID__ y el __Directory (tenant) ID__ anotados en el paso 1;
- __con SAML 2.0__: la __URL de los metadatos de federación__ de su aplicación.

Con OpenID Connect, transmita el __secreto de cliente__ por el canal seguro indicado por su contacto, y no en el cuerpo de la solicitud. Con SAML, no se intercambia ningún secreto.

En cuanto la configuración se realice en el lado de la Consola, se informará al contacto indicado.

## Paso 3: Declaración de la "Redirect URL" (OpenID Connect)

Si no indicó la "Redirect URL" durante la creación de la aplicación, añádala ahora.

Con SAML 2.0, las URL equivalentes ya se declararon en __"Basic SAML Configuration"__ en el paso 1: pase directamente al paso 4.

En la página de inicio del App Registration, en el menú "Overview", haga clic en "Add a Redirect URL".

<img src={ssoAad_014} />

A continuación, diríjase a "Add a platform" y añada una de tipo Web.

<img src={ssoAad_015} />

Indique la "Redirect URL" proporcionada por Cloud Temple.

<img src={ssoAad_016} />

Debería obtener este resultado una vez añadida la "Redirect URL".

<img src={ssoAad_017} />

La configuración de la "Redirect URL" puede tardar unos minutos en ser efectiva.

## Paso 4: Verificación

Una vez realizados todos los pasos, puede autenticarse en su organización Cloud Temple mediante su SSO.

<img src={ssoAad_018} />

:::info[Permisos de los nuevos usuarios]
La federación de identidad gestiona __la autenticación__, no las __autorizaciones__. Un usuario que se conecta por primera vez mediante el SSO no dispone de ningún permiso mientras un propietario de la organización no se lo haya atribuido desde la Consola.
:::

## Mantenimiento de la federación a lo largo del tiempo

Este es el principal punto de vigilancia: sea cual sea el protocolo, un elemento expira, y su expiración interrumpe el SSO __para todos sus usuarios__.

### Con OpenID Connect: el secreto de cliente

El secreto de cliente expira como máximo 24 meses después de su creación. Anticipe su renovación:

1. en "Certificates & secrets", cree un __nuevo__ secreto sin eliminar el anterior;
2. transmita su valor a Cloud Temple por el canal seguro, abriendo una solicitud de asistencia;
3. una vez confirmada la conmutación por nuestros equipos, elimine el antiguo secreto desde el portal de Azure.

Conservar ambos secretos durante la conmutación evita cualquier interrupción del servicio.

### Con SAML 2.0: el certificado de firma

El certificado de firma emitido por EntraID tiene una vida útil limitada, de tres años por defecto.

__Avísenos antes de cualquier rotación de certificado__, mediante una solicitud de asistencia, respetando el periodo de solapamiento propuesto por Microsoft. Si nos transmitió un certificado en forma de archivo en lugar de la URL de metadatos, adjunte el nuevo certificado a su solicitud.

## Buenas prácticas

- __Gestione el acceso por grupos__ en lugar de por usuarios: la llegada o salida de un colaborador se trata entonces en su directorio, sin intervención en la Consola.
- __Active la autenticación multifactor__ en la aplicación desde sus directivas de acceso condicional de EntraID: se aplicará entonces al acceso a la Consola.
- __Programe una alerta__ ante la proximidad de la fecha de expiración del secreto de cliente o del certificado de firma, según el protocolo elegido.
- __Conserve al menos una cuenta propietaria local__ en su organización Cloud Temple, fuera de la federación, para mantener el acceso en caso de indisponibilidad de su directorio.

## Resolución de problemas

| Síntoma | Protocolo | Causa probable |
|---|---|---|
| `AADSTS50011`: la URL de redirección no coincide | Ambos | La URL declarada en Azure difiere de la proporcionada por Cloud Temple. Verifíquela carácter por carácter, incluida la ausencia de `/` final. |
| `AADSTS700016`: aplicación no encontrada | SAML 2.0 | El *Entity ID* declarado no corresponde al proporcionado por Cloud Temple. |
| `AADSTS7000215`: secreto no válido | OpenID Connect | El secreto ha expirado, o el valor transmitido era el "Secret ID" en lugar del "Value". |
| `AADSTS50105`: usuario no asignado | Ambos | La opción "Assignment required" está activa y el usuario no está asignado a la aplicación. |
| El botón de conexión no aparece en la página | Ambos | La configuración aún no está activa en el lado de Cloud Temple. |
| El usuario se autentica pero la Consola deniega el acceso | Ambos | Falta la dirección de correo en el token, o no se ha atribuido ningún permiso al usuario. |
| El usuario aparece como una cuenta nueva en cada conexión | SAML 2.0 | El NameID no está establecido en `user.objectid`. |
| Error de firma al llegar a la Consola | SAML 2.0 | El certificado de firma se renovó en Azure sin que se nos informara. |

## Soporte

Para cualquier duda sobre este procedimiento, abra una solicitud de asistencia desde su Consola. Indique el nombre de su organización así como la marca temporal de un intento de conexión fallido: esto permite localizar el rastro correspondiente.
