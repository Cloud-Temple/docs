---
title: Ejemplo de federación de identidad con JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

Este tutorial le guía a través de la configuración del inicio de sesión único (SSO) entre JumpCloud y la consola de Cloud Temple utilizando el protocolo OpenID Connect (OIDC).

Para obtener información más detallada directamente de JumpCloud, consulte su documentación oficial sobre SSO OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Requisitos previos

Antes de comenzar, asegúrese de haber obtenido la información necesaria de Cloud Temple, especialmente el URI de redirección específico para su instancia de Keycloak.

## Configuración en JumpCloud

Siga estos pasos para configurar una nueva aplicación OIDC en su consola de administración de JumpCloud:

1.  **Crear una nueva aplicación:**
    *   Navegue a la sección de aplicaciones en JumpCloud.
    *   Haga clic en "Añadir" o "Crear una nueva aplicación".
    *   Elija la opción para una "Integración de aplicación personalizada" (Custom Application Integration).

2.  **Configurar SSO OIDC:**
    *   Seleccione "Gestionar inicio de sesión único (SSO)".
    *   Elija "Configurar SSO con OIDC".

    <img src={ssoJumpcloud001} alt="Configuración SSO OIDC de JumpCloud" />

3.  **Introducir URIs de redirección:**
    *   En el campo apropiado (a menudo llamado "Redirect URIs" o "Callback URLs"), introduzca el URI proporcionado por Cloud Temple. Normalmente seguirá este formato:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<específico de la empresa>/broker/<específico de la empresa>/endpoint
        ```
        *Reemplace `<específico de la empresa>` con los identificadores específicos de su empresa proporcionados por Cloud Temple.*

4.  **Elegir el tipo de autenticación del cliente:**
    *   Seleccione `Client Secret Post` como "Tipo de autenticación del cliente".

5.  **Introducir URL de inicio de sesión:**
    *   En el campo "URL de inicio de sesión", introduzca la URL que utiliza para acceder a su consola de Cloud Temple. Por ejemplo:
        ```
        https://<identificador-único>.shiva.cloud-temple.com
        ```
        *Reemplace `<identificador-único>` con el identificador único de su instancia de Cloud Temple.*

6.  **Configurar el mapeo de atributos:**
    *   En la sección "Mapeo de atributos" (o equivalente), asegúrese de que los siguientes atributos estén seleccionados para ser enviados a Cloud Temple:
        *   `Email`
        *   `Profile` (puede incluir nombre, apellido, etc.)

    <img src={ssoJumpcloud002} alt="Mapeo de atributos de JumpCloud" />

7.  **Asignar grupos:**
    *   Asigne los grupos de usuarios de JumpCloud que deben tener acceso a la consola de Cloud Temple a través de esta aplicación SSO.

8.  **Activar la aplicación:**
    *   Haga clic en "Activar" o "Guardar" para finalizar la configuración de la aplicación.

9.  **Proporcionar credenciales a Cloud Temple:**
    *   Después de la activación, JumpCloud le proporcionará un **Client ID** y un **Client Secret**.
    *   Comunique de forma segura estas dos informaciones a su contacto de Cloud Temple para finalizar la configuración de la federación en el lado de Keycloak.

Una vez que Cloud Temple haya configurado la federación con las credenciales proporcionadas, sus usuarios asignados podrán iniciar sesión en la consola de Cloud Temple utilizando sus credenciales de JumpCloud.
