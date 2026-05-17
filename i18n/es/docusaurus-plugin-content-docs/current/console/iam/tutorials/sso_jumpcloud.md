---
title: Ejemplo de federación de identidad con JumpCloud
tags:
  - iam
  - tutoriales
  - onboarding
---
import ssoJumpcloud001 from '@site/docs/console/iam/tutorials/images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from '@site/docs/console/iam/tutorials/images/sso_jumpcloud_002.png';

Este tutorial le guía a través de la configuración de la autenticación única (SSO) entre JumpCloud y la consola Cloud Temple utilizando el protocolo OpenID Connect (OIDC).

Para obtener más información detallada directamente desde JumpCloud, consulte su documentación oficial sobre SSO con OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Requisitos

Antes de comenzar, asegúrese de haber obtenido la información necesaria de Cloud Temple, en particular la URI de redirección específica para su instancia de Keycloak.

## Configuración en JumpCloud

Siga estos pasos para configurar una nueva aplicación OIDC en su consola de administración de JumpCloud:

1. **Crear una nueva aplicación:**
    * Navegue a la sección de aplicaciones en JumpCloud.
    * Haga clic en "Agregar" o "Crear una nueva aplicación".
    * Elija la opción para una integración de aplicación personalizada ("Custom Application Integration").

2. **Configurar el SSO OIDC:**
    * Seleccione "Manage Single Sign-On (SSO)".
    * Elija "Configure SSO with OIDC".

    <img src={ssoJumpcloud001} alt="Configuración SSO OIDC JumpCloud" />

3. **Ingresar los URIs de redirección:**
    * En el campo correspondiente (a menudo llamado "Redirect URIs" o "Callback URLs"), ingrese el URI proporcionado por Cloud Temple. Generalmente seguirá este formato:

        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```

        *Reemplace `<company specific>` por los identificadores específicos de su empresa proporcionados por Cloud Temple.*

4. **Elegir el tipo de autenticación de cliente:**
    * Seleccione `Client Secret Post` como "Tipo de autenticación de cliente".

5. **Ingresar la URL de inicio de sesión:**
    * En el campo "Login URL", ingrese la URL que utiliza para acceder a su consola de Cloud Temple. Por ejemplo:

        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```

        *Reemplace `<unique-identifier>` por el identificador único de su instancia de Cloud Temple.*

6. **Configurar el mapeo de atributos:**
    * En la sección "Attribute Mapping" (o equivalente), asegúrese de que los siguientes atributos estén seleccionados para ser enviados a Cloud Temple:
        * `Correo electrónico`
        * `Perfil` (puede incluir nombre, apellido, etc.)

    <img src={ssoJumpcloud002} alt="Mapeo de Atributos JumpCloud" />

7. **Asignar grupos:**
    * Asigne los grupos de usuarios de JumpCloud que deben tener acceso a la consola de Cloud Temple a través de esta aplicación SSO.

8. **Activar la aplicación:**
    * Haga clic en "Activate" o "Save" para finalizar la configuración de la aplicación.

9. **Proporcionar las credenciales a Cloud Temple:**
    * Después de la activación, JumpCloud le proporcionará un **Client ID** y un **Client Secret**.
    * Comuníquese de forma segura con su contacto de Cloud Temple para compartir esta información y finalizar la configuración de la federación en el lado de Keycloak.

Una vez que Cloud-Temple haya configurado la federación con las credenciales proporcionadas, sus usuarios asignados podrán iniciar sesión en la consola de Cloud Temple utilizando sus credenciales de JumpCloud.