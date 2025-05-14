---
title: Ejemplo de federación de identidad con JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

Este tutorial le guía a través de la configuración de autenticación única (SSO) entre JumpCloud y la consola de Cloud Temple utilizando el protocolo OpenID Connect (OIDC).

Para obtener más información detallada directamente desde JumpCloud, consulte su documentación oficial sobre SSO OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerrequisitos

Antes de comenzar, asegúrese de haber obtenido la información necesaria por parte de Cloud Temple, en particular la URI de redirección específica para su instancia de Keycloak.

## Configuración en JumpCloud

Siga estos pasos para configurar una nueva aplicación OIDC en su consola de administración de JumpCloud:

1.  **Crear una nueva aplicación:**
    *   Navegue a la sección de aplicaciones en JumpCloud.
    *   Haga clic en "Agregar" o "Crear una nueva aplicación".
    *   Elija la opción para una integración personalizada de aplicación ("Custom Application Integration").

2.  **Configurar el SSO OIDC:**
    *   Seleccione "Manage Single Sign-On (SSO)".
    *   Elija "Configure SSO with OIDC".

    <img src={ssoJumpcloud001} alt="Configuration SSO OIDC JumpCloud" />

3.  **Introducir las URIs de redirección:**
    *   En el campo apropiado (a menudo llamado "Redirect URIs" o "Callback URLs"), introduzca la URI proporcionada por Cloud Temple. Generalmente seguirá este formato:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Reemplace `<company specific>` con los identificadores específicos de su empresa proporcionados por Cloud Temple.*

4.  **Elegir el tipo de autenticación del cliente:**
    *   Seleccione `Client Secret Post` como "Client Authentication Type".

5.  **Introducir la URL de inicio de sesión:**
    *   En el campo "Login URL", introduzca la URL que utiliza para acceder a su consola de Cloud Temple. Por ejemplo:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Reemplace `<unique-identifier>` con el identificador único de su instancia de Cloud Temple.*

6.  **Configurar el mapeo de atributos:**
    *   En la sección "Attribute Mapping" (o equivalente), asegúrese de que los siguientes atributos estén seleccionados para ser enviados a Cloud Temple:
        *   `Email`
        *   `Profile` (puede incluir el nombre, apellido, etc.)

    <img src={ssoJumpcloud002} alt="Mappage Attributs JumpCloud" />

7.  **Asignar grupos:**
    *   Asigne los grupos de usuarios de JumpCloud que deben tener acceso a la consola de Cloud Temple mediante esta aplicación SSO.

8.  **Activar la aplicación:**
    *   Haga clic en "Activate" o "Save" para finalizar la configuración de la aplicación.

9.  **Proporcionar las credenciales a Cloud Temple:**
    *   Después de la activación, JumpCloud le proporcionará un **Client ID** y un **Client Secret**.
    *   Comuníquese de forma segura con su contacto de Cloud Temple para entregar esta información y finalizar la configuración de la federación del lado de Keycloak.

Una vez que Cloud Temple haya configurado la federación con las credenciales proporcionadas, sus usuarios asignados podrán iniciar sesión en la consola de Cloud Temple utilizando sus credenciales de JumpCloud.