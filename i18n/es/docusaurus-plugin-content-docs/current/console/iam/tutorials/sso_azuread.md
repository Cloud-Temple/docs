---
title: Ejemplo de federación de identidad con Microsoft EntraID
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

A continuación se muestra un ejemplo de configuración del repositorio de autenticación de una organización Cloud Temple con __Microsoft EntraID__ (Azure Active Directory).

La configuración de su repositorio Microsoft a nivel de una organización Cloud Temple facilita la autenticación de sus usuarios en la Consola. Esto permite evitar la multiplicación de los factores de autenticación y reducir la superficie de ataque.

Si sus usuarios están autenticados en su cuenta Microsoft, la autenticación en los servicios de la Consola será transparente.

Estos son los diferentes pasos para realizar esta configuración:

## Paso 1: Configuración del SSO en el lado de Microsoft Azure

### Registro de una nueva aplicación Azure (portal Azure)

Para la creación del __registro de aplicación__, debe acceder al portal Microsoft Azure, y luego a Microsoft Entra ID, seleccionando __"Agregar > Registro de aplicación"__.

En la página "Registrar una aplicación", indique lo siguiente:

```
- __Nombre__: Escriba "__SHIVA__"
- __Tipos de cuentas compatibles__: __Cuentas solo en este directorio organizativo__ (__<Su inquilino Azure>__ solo - de un solo inquilino)
- __URL de redirección__: No configurar en este momento. La URL será proporcionada por el soporte de Cloud Temple y se deberá añadir en este campo más adelante.
```

<img src={ssoEntra_001} />

Las siguientes informaciones son las que deben proporcionarse en la solicitud de soporte al equipo Cloud Temple para habilitar la autenticación de Microsoft Entra ID a nivel de su organización:

- __Application (client) ID__
- __Directory (tenant) ID__

<img src={ssoEntra_002} />

### Definición de un secreto

En la pestaña "Certificates & secrets", cree un nuevo secreto.

*Nota: la fecha de expiración del secreto no puede ser superior a 24 meses, incluso con una fecha de expiración personalizada.*

<img src={ssoAad_004} />

El secreto generado deberá proporcionarse en la solicitud de soporte:

<img src={ssoAad_005} />

### Definición del token EntraID

El token EntraID es necesario para la configuración de la autenticación.

En el menú __"Configuración de token"__, haga clic en __"Agregar afirmación opcional"__. Deberá seleccionar "ID" como tipo de token y marcar la opción "email".

<img src={ssoAad_006} />

La interfaz de Azure le preguntará si desea agregar un permiso que le permitirá leer el correo electrónico de un usuario (correo electrónico de Microsoft Graph); marque la casilla y confirme.

<img src={ssoAad_007} />

A continuación, vaya a "Permisos de API" y haga clic en __"Conceder consentimiento de administrador para Cloud Temple"__.

<img src={ssoAad_008} />

### Configuraciones de seguridad adicionales (opcional pero recomendado)

Por defecto, Microsoft EntraID tal como está configurado dará a cualquier usuario de su tenant Azure la posibilidad de conectarse a su organización Cloud Temple.  
Es posible restringir los accesos a nivel de __"App Registration"__ para autorizar solo a una lista de usuarios o grupos a conectarse a su organización Cloud Temple.

Este es el procedimiento a seguir:

#### Acceder a los parámetros adicionales de "App Registration"

##### Opción 1

Vaya a la pestaña "Información general" y haga clic en el nombre de la aplicación (el enlace situado después de "Aplicación administrada").

<img src={ssoAad_009} />

##### Opción 2

Diríjase a "Aplicaciones empresariales" y busque utilizando el nombre de la aplicación creada anteriormente.

<img src={ssoAad_010} />

#### Restricción de la autenticación a los usuarios asignados a la aplicación

Indique aquí la necesidad de asignar el usuario a la aplicación para autorizar su autenticación:

<img src={ssoAad_011} />

#### Asignación de los usuarios y grupos a la aplicación

Solo los grupos y usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través del app registration.

<img src={ssoAad_012} />

Por último, solo tendrá que aplicar la asignación haciendo clic en "Assign".

<img src={ssoAad_013} />

A partir de ahora, los usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través de la aplicación creada.

## Paso 2: Solicitar la configuración del SSO (Single Sign-On) de su organización

Esta parte de la configuración la realiza el equipo Cloud Temple a nivel de la organización.

Para ello, realice __una solicitud de asistencia__ en la consola indicando su deseo de configurar un SSO Microsoft EntraID.

Proporcione la siguiente información en la solicitud de asistencia:

- El nombre de su Organización
- El nombre de un contacto con su correo electrónico y su número de teléfono para finalizar la configuración
- Application ID (identificador único asociado a la aplicación creada anteriormente)
- Directory ID (corresponde al identificador Azure AD del tenant Azure)
- Secret (secreto asociado a la aplicación creada anteriormente)

En cuanto la configuración se haya realizado en el lado de la Consola, se informará al contacto indicado.

## Paso 3: Finalización de la configuración

En la página principal del registro de aplicaciones, en el menú Overview, haga clic en "Add a Redirect URL".

<img src={ssoAad_014} />

A continuación, vaya al apartado "Add a platform" y agregue una plataforma del tipo Web.

<img src={ssoAad_015} />

Solo necesita rellenar la "Redirect URL" proporcionada por el equipo de Productos de Aplicaciones.

<img src={ssoAad_016} />

Una vez añadida la "Redirect URL", debería obtener este resultado.

<img src={ssoAad_017} />

La configuración de la "Redirect URL" puede tardar unos minutos en aplicarse.
Una vez completados todos los pasos, podrá autenticarse en su organización Cloud Temple mediante su SSO.

<img src={ssoAad_018} />
