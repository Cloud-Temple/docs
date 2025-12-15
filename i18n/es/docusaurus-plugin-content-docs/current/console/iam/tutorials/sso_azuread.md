---
title: Example of Identity Federation with Microsoft EntraID
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

Here is an example configuration of the authentication repository for a Cloud Temple organization using __Microsoft EntraID__ (Azure Active Directory).

Configuring your Microsoft EntraID repository at the Cloud Temple organization level simplifies user authentication on the Console. This helps avoid the proliferation of authentication factors and reduces the attack surface.

If your users are already authenticated to their Microsoft accounts, logging into the Console services will be seamless and transparent.

Below are the steps to complete this configuration:

## Step 1: SSO configuration on Microsoft Azure side

### Registro de una nueva aplicación Azure (portal Azure)

Para la creación del __registro de aplicación__, debe acceder al portal Microsoft Azure, y luego a Microsoft Entra ID, seleccionando __"Agregar > Registro de aplicación"__.

En la página "Registrar una aplicación", indique lo siguiente:

```
- __Nombre__: Escriba "__SHIVA__"
- __Tipos de cuentas compatibles__: __Cuentas solo en este directorio organizativo__ (__<Su inquilino Azure>__ solo - de un solo inquilino)
- __URL de redirección__: No configurar en este momento. La URL será proporcionada por el soporte de Cloud Temple y se deberá añadir en este campo más adelante.
```

<img src={ssoEntra_001} />

Las siguientes informaciones son las que deben proporcionarse en la solicitud de soporte a la equipe Cloud Temple para habilitar la autenticación de Microsoft Entra ID a nivel de su organización:

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

### Additional security configurations (optional but recommended)

By default, Microsoft Entra ID, as configured, will allow any user in your Azure tenant to sign in to your Cloud Temple organization.  
It is possible to restrict access at the __"App Registration"__ level, allowing only a specific list of users or groups to sign in to your Cloud Temple organization.

Follow these steps:

#### Access additional "App Registration" settings

##### Opción 1

Vaya a la pestaña "Información general" y haga clic en el nombre de la aplicación (el enlace situado después de "Aplicación administrada").

<img src={ssoAad_009} />

##### Opción 2

Diríjase a "Aplicaciones empresariales" y busque utilizando el nombre de la aplicación creada anteriormente.

<img src={ssoAad_010} />

#### Authentication restriction to users assigned to the application

Indicate here the requirement for user assignment to the application to allow authentication:

<img src={ssoAad_011} />

#### Assigning users and groups to the application

Only the users and groups assigned to the application will be able to sign in to your Cloud Temple organization via the app registration.

<img src={ssoAad_012} />

Finally, you will only need to apply the assignment by clicking on "Assign".

<img src={ssoAad_013} />

From now on, the assigned users will be able to sign in to your Cloud Temple organization through the created application.

## Step 2: Request your organization's SSO (Single Sign-On) configuration

This configuration step is performed at the organization level by the Cloud Temple team.

To proceed, please __submit a support request__ in the console indicating your intention to set up Microsoft Entra ID SSO.

Include the following information in your support request:
- Name of your Organization
- Name of a contact person, along with their email address and phone number, to finalize the configuration
- Application ID (unique identifier associated with the previously created application)
- Directory ID (corresponds to the Azure AD tenant ID in Azure)
- Secret (secret associated with the previously created application)

Once the configuration is completed on the Console side, the designated contact will be notified.

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