---
title: Ejemplo de federación de identidad con Microsoft EntraID
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from './images/sso_entra_001.png'
import ssoEntra_002 from './images/sso_entra_002.png'
import ssoAad_004 from './images/sso_aad_004.png'
import ssoAad_005 from './images/sso_aad_005.png'
import ssoAad_006 from './images/sso_aad_006.png'
import ssoAad_007 from './images/sso_aad_007.png'
import ssoAad_008 from './images/sso_aad_008.png'
import ssoAad_009 from './images/sso_aad_009.png'
import ssoAad_010 from './images/sso_aad_010.png'
import ssoAad_011 from './images/sso_aad_011.png'
import ssoAad_012 from './images/sso_aad_012.png'
import ssoAad_013 from './images/sso_aad_013.png'
import ssoAad_014 from './images/sso_aad_014.png'
import ssoAad_015 from './images/sso_aad_015.png'
import ssoAad_016 from './images/sso_aad_016.png'
import ssoAad_017 from './images/sso_aad_017.png'
import ssoAad_018 from './images/sso_aad_018.png'

Aquí hay un ejemplo de configuración del repositorio de autenticación de una organización Cloud Temple con __Microsoft EntraID__ (Azure Active Directory).

La configuración de su repositorio Microsoft en el nivel de una organización Cloud Temple facilita la autenticación de sus usuarios en la consola Shiva. Esto permite evitar la multiplicación de los factores de autenticación y reducir la superficie de ataque.

Si sus usuarios están autenticados en su cuenta de Microsoft, la autenticación en los servicios de la consola Shiva será transparente.

A continuación, se detallan los pasos para realizar esta configuración:

## Paso 1: Configuración del SSO en el lado de Microsoft Azure

### Registro de una nueva aplicación Azure (portal Azure)

Para crear el __registro de aplicación__, debe dirigirse al portal Microsoft Azure, luego en Microsoft EntraID, __"ADD > Registro de aplicación"__

En la página "Registrar una aplicación", indique lo siguiente:

```
- __Nombre__ : Especificar "__SHIVA__"
- __Tipos de cuentas compatibles__ :  __Cuentas solo en este directorio organizativo__ (__<Su inquilino Azure>__ solo - de un solo inquilino)
- __URL de redirección__ : No configurar en un primer momento. La URL será proporcionada por el soporte Cloud Temple y deberá añadirse en este campo posteriormente.
```

<img src={ssoEntra_001} />

Las informaciones __ID de aplicación (cliente)__ y __ID de directorio (inquilino)__ son las informaciones útiles para presentar en la solicitud de soporte a la equipe Cloud Temple para activar la autenticación Microsoft EntraID en el nivel de su organización.

<img src={ssoEntra_002} />

### Definición de un secreto

En la pestaña "Certificados y secretos", cree un nuevo secreto.

*Nota: La fecha de expiración del secreto no puede superar los 24 meses, incluida una fecha de expiración personalizada.*

<img src={ssoAad_004} />

El secreto generado deberá presentarse en la solicitud de soporte:

<img src={ssoAad_005} />

### Definición del token EntraID

El token EntraID es necesario para la configuración de la autenticación.

En el menú __"Configuración de token"__, haga clic en __"Agregar reclamación opcional"__. Deberá seleccionar "ID" como tipo de token y marcar "correo electrónico".

<img src={ssoAad_006} />

La interfaz Azure le preguntará si desea agregar un permiso que le permitirá leer el correo electrónico de un usuario (Microsoft Graph email), marque la casilla y confirme.

<img src={ssoAad_007} />

A continuación, vaya a "Permisos de API" y haga clic en __"Conceder consentimiento del administrador para Cloud Temple"__.

<img src={ssoAad_008} />

### Configuraciones de seguridad adicionales (opcional pero recomendado)

Por defecto, Microsoft EntraID, tal como está configurado, dará a cualquier usuario de su inquilino Azure la posibilidad de conectarse a su organización Cloud Temple.
Es posible restringir en el nivel de __"Registro de aplicación"__ los accesos para autorizar solo una lista de usuarios o grupos para conectarse a su organización Cloud Temple.

Aquí se detalla el procedimiento a seguir:

#### Acceder a los parámetros adicionales "Registro de aplicación"

##### Opción 1

Vaya a la pestaña "Información general" y haga clic en el nombre de la aplicación (el enlace situado a continuación de "Aplicación administrada").

<img src={ssoAad_009} />

##### Opción 2

Diríjase a las "Aplicaciones empresariales" y busque utilizando el nombre de la aplicación creada anteriormente.

<img src={ssoAad_010} />

#### Restricción de la autenticación a los usuarios asignados a la aplicación

Indique aquí la necesidad de una asignación del usuario a la aplicación para autorizar su autenticación:

<img src={ssoAad_011} />

#### Asignación de usuarios y grupos a la aplicación

Solo los grupos y usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través del registro de aplicación.

<img src={ssoAad_012} />

Finalmente, solo deberá aplicar la asignación haciendo clic en "Asignar".

<img src={ssoAad_013} />

A partir de ahora, los usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través de la aplicación creada.

## Paso 2: Solicitar la configuración del SSO (Single Sign-On) de su organización

Esta parte de la configuración se realiza en el nivel de la organización por el equipo Cloud temple.

Para hacerlo, realice __una solicitud de asistencia__ en la consola indicando su deseo de configurar un SSO de Microsoft EntraID.

Proporcione las siguientes informaciones en la solicitud de asistencia:

    Nombre de su organización
    Nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    ID de aplicación (identificador único asociado a la aplicación creada anteriormente)
    ID de directorio (corresponde al identificador Azure AD del inquilino Azure)
    Secreto (secreto asociado a la aplicación creada anteriormente)

Una vez que la configuración esté realizada en la consola Shiva, el contacto indicado será informado.

## Paso 3: Finalización de la configuración

En la página de inicio del Registro de aplicación, en el menú "Información general", haga clic en "Agregar una URL de redirección".

<img src={ssoAad_014} />

A continuación, diríjase a "Agregar una plataforma" y añada una de tipo Web.

<img src={ssoAad_015} />

Solo debe rellenar la "URL de redirección" proporcionada por el equipo de Productos de Aplicaciones.

<img src={ssoAad_016} />

Debería obtener este resultado una vez que se haya añadido la "URL de redirección".

<img src={ssoAad_017} />

La configuración de la "URL de redirección" puede tardar unos minutos en hacerse efectiva.
Una vez que se hayan realizado todas las etapas, podrá autenticarse en su organización Cloud Temple a través de su SSO.

<img src={ssoAad_018} />