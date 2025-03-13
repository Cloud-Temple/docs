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

La configuración de su repositorio Microsoft a nivel de una organización Cloud Temple facilita la autenticación de sus usuarios en la consola Shiva. Esto ayuda a evitar la multiplicación de factores de autenticación y reduce la superficie de ataque.

Si sus usuarios están autenticados en su cuenta de Microsoft, la autenticación a los servicios de la consola Shiva será transparente.

Aquí están los diferentes pasos para realizar esta configuración:

## Paso 1: Configuración de SSO en el lado de Microsoft Azure

### Registro de una nueva aplicación Azure (portal Azure)

Para la creación del __registro de aplicación__, debe ir al portal de Microsoft Azure, luego en Microsoft EntraID, __"ADD > App Registration"__

En la página "Register an application", por favor indique:

```
- __Name__: Indique "__SHIVA__"
- __Supported account types__: __Accounts in this organizational directory only__ (__<Su Tenant Azure>__ only - Single tenant)
- __Redirect URL__: No configurar inicialmente. La URL será proporcionada por el soporte de Cloud Temple y se añadirá a este campo más tarde.
```

<img src={ssoEntra_001} />

La información __Application (client) ID__ y __Directory (tenant) ID__ es útil para proporcionarla en la solicitud de soporte al equipo de Cloud Temple para habilitar la autenticación Microsoft EntraID a nivel de su organización.

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

A continuación, vaya a "API permissions" y haga clic en __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Configuraciones de seguridad adicionales (opcional pero recomendado)

Por defecto, Microsoft EntraID tal como está configurado dará a cualquier usuario de su tenant Azure la capacidad de conectarse a su organización Cloud Temple.
Es posible restringir el acceso a nivel de __"App Registration"__ para autorizar solo a una lista de usuarios o grupos a conectarse a su organización Cloud Temple.

Aquí está el procedimiento a seguir:

#### Acceder a la configuración adicional de "App Registration"

##### Opción 1

Vaya a la pestaña "Overview" y haga clic en el nombre de la aplicación (el enlace situado junto a "Managed application").

<img src={ssoAad_009} />

##### Opción 2

Navegue hasta "Enterprise applications" y busque utilizando el nombre de la aplicación creada previamente.

<img src={ssoAad_010} />

#### Restricción de la autenticación a los usuarios asignados a la aplicación

Indique aquí la necesidad de asignación de usuario a la aplicación para autorizar su autenticación:

<img src={ssoAad_011} />

#### Asignación de usuarios y grupos a la aplicación

Solo los grupos y usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través del registro de aplicación.

<img src={ssoAad_012} />

Finalmente, solo tendrá que aplicar la asignación haciendo clic en "Assign".

<img src={ssoAad_013} />

Ahora los usuarios asignados a la aplicación podrán conectarse a su organización Cloud Temple a través de la aplicación creada.

## Paso 2: Solicitar la configuración de SSO (Single Sign-On) para su organización

Esta parte de la configuración se realiza a nivel de la organización por el equipo de Cloud Temple.

Para ello, haga una __solicitud de soporte__ en la consola indicando su deseo de configurar Microsoft EntraID SSO.

Por favor, proporcione la siguiente información en la solicitud de soporte:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    Application ID (identificador único asociado a la aplicación creada previamente)
    Directory ID (corresponde al ID de Azure AD del tenant Azure)
    Secret (Secreto asociado a la aplicación creada previamente)

Tan pronto como se complete la configuración en el lado de la consola Shiva, se informará al contacto indicado.

## Paso 3: Finalización de la configuración

En la página de inicio del App Registration, en el menú de vista general, haga clic en "Add a Redirect URL".

<img src={ssoAad_014} />

A continuación, navegue hasta "Add a platform" y añada una de tipo Web.

<img src={ssoAad_015} />

Simplemente introduzca la "Redirect URL" proporcionada por el Equipo de Aplicaciones de Producto.

<img src={ssoAad_016} />

Debería obtener este resultado una vez añadida la "Redirect URL".

<img src={ssoAad_017} />

La configuración de la "Redirect URL" puede tardar unos minutos en ser efectiva.
Una vez completados todos los pasos, puede autenticarse en su organización Cloud Temple a través de su SSO.

<img src={ssoAad_018} />
