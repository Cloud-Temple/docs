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

La configuración de su repositorio Microsoft a nivel de una organización Cloud Temple facilita la autenticación de sus usuarios en la consola Shiva. Esto permite evitar la multiplicación de factores de autenticación y disminuir la superficie de ataque.

Si sus usuarios están autenticados en su cuenta Microsoft, la autenticación a los servicios de la consola Shiva será transparente.

Aquí están los diferentes pasos para realizar esta configuración:


## Paso 1: Configuración del SSO del lado de Microsoft Azure

### Registro de una nueva aplicación Azure (portal Azure)

Para la creación del __registro de aplicación__, debe ir al portal Microsoft Azure, luego en Microsoft EntraID, __"ADD > App Registration"__

En la página "Register an application", indique:
```
- __Name__: Indicar "__SHIVA__"
- __Supported account types__: __Accounts in this organizational directory only__ (__<Su Tenant Azure>__ only - Single tenant)
- __Redirect URL__: No configurar en un primer momento. La URL será proporcionada por el soporte de Cloud Temple y se añadirá en este campo más tarde.
```

<img src={ssoEntra_001} />

La información **Application (client) ID** y **Directory (tenant) ID** son la información útil que debe proporcionar en la solicitud de soporte al equipo de Cloud Temple para activar la autenticación Microsoft EntraID a nivel de su organización.

<img src={ssoEntra_002} />

### Definición de un secreto
En la pestaña "Certificates & secrets", cree un nuevo secreto.

*Nota: la fecha de caducidad del secreto no puede ser superior a 24 meses, incluso con una fecha de caducidad personalizada.*

<img src={ssoAad_004} />

El secreto generado deberá proporcionarse en la solicitud de soporte:

<img src={ssoAad_005} />


### Definición del token EntraID

El token EntraID es necesario para la configuración de la autenticación.

En el menú __"Token Configuration"__, haga clic en __"Add optional claim"__. Deberá seleccionar "ID" como tipo de token y marcar "email".

<img src={ssoAad_006} />

La interfaz de Azure le preguntará si desea añadir un permiso que le permitirá leer el correo electrónico de un usuario (Microsoft Graph email), marque la casilla y valide.

<img src={ssoAad_007} />

Luego, vaya a "API permissions" y haga clic en __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Configuraciones de seguridad adicionales (opcional pero recomendado)

Por defecto, Microsoft EntraID tal como está configurado dará a cualquier usuario de su tenant Azure la posibilidad de conectarse a su organización Cloud Temple.
Es posible restringir a nivel de __"App Registration"__ los accesos para autorizar solo a una lista de usuarios o grupos a conectarse a su organización Cloud Temple.

Aquí está el procedimiento a seguir:

#### Acceder a los parámetros adicionales "App Registration"
##### Opción 1
Vaya a la pestaña "Overview" y luego haga clic en el nombre de la aplicación (el enlace situado después de "Managed application").

<img src={ssoAad_009} />

##### Opción 2
Ir a "Enterprise applications" y buscar utilizando el nombre de la aplicación creada anteriormente.

<img src={ssoAad_010} />

#### Restricción de la autenticación a los usuarios asignados a la aplicación

Indique aquí la necesidad de una asignación del usuario a la aplicación para autorizar su autenticación:

<img src={ssoAad_011} />

#### Asignación de usuarios y grupos a la aplicación
Solo los grupos y usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través del registro de aplicación.

<img src={ssoAad_012} />

Finalmente, solo tendrá que aplicar la asignación haciendo clic en "Assign".

<img src={ssoAad_013} />

A partir de ahora, los usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través de la aplicación creada.

## Paso 2: Solicitar la configuración del SSO (Single Sign-On) de su organización

Esta parte de la configuración se realiza a nivel de la organización por el equipo de Cloud Temple.

Para ello, haga __una solicitud de asistencia__ en la consola indicando su deseo de configurar un SSO Microsoft EntraID.

Proporcione la siguiente información en la solicitud de asistencia:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    Application ID (identificador único asociado a la aplicación creada anteriormente)
    Directory ID (corresponde al identificador Azure AD del tenant Azure)
    Secret (Secreto asociado a la aplicación creada anteriormente)

En cuanto la configuración se realice en el lado de la consola Shiva, el contacto indicado será informado.

## Paso 3: Finalización de la configuración

En la página de inicio del App Registration, en el menú overview, haga clic en "Add a Redirect URL".

<img src={ssoAad_014} />

Luego, diríjase a "Add a platform" y añada una de tipo Web.

<img src={ssoAad_015} />

Solo necesita proporcionar la "Redirect URL" proporcionada por el Equipo de Producto de Aplicaciones.

<img src={ssoAad_016} />

Debería obtener este resultado una vez añadida la "Redirect URL".

<img src={ssoAad_017} />

La configuración de la "Redirect URL" puede tardar unos minutos en ser efectiva.
Una vez realizados todos los pasos, puede autenticarse en su organización Cloud Temple a través de su SSO.

<img src={ssoAad_018} />
