---
title: Ejemplo de federación de identidad con JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

Este tutorial lo guía a través de la configuración de la autenticación única (SSO) entre JumpCloud y la consola Cloud Temple utilizando el protocolo OpenID Connect (OIDC).

Para obtener información detallada directamente desde JumpCloud, consulte su documentación oficial sobre SSO OIDC: [SSO con OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Requisitos previos

Antes de comenzar, asegúrese de haber obtenido la información necesaria de Cloud Temple, incluido el URI de redirección específico para su instancia Keycloak.

## Configuración en JumpCloud

Siga estos pasos para configurar una nueva aplicación OIDC en su consola de administración de JumpCloud:

1.  **Crear una nueva aplicación:**
    *   Navegue hasta la sección de aplicaciones en JumpCloud.
    *   Haga clic en "Agregar" o "Crear una nueva aplicación".
    *   Elija la opción para una integración de aplicación personalizada ("Custom Application Integration").

2.  **Configurar el SSO OIDC:**
    *   Seleccione "Administrar Single Sign-On (SSO)".
    *   Elija "Configurar SSO con OIDC".

    <img src={ssoJumpcloud001} alt="Configuración SSO OIDC de JumpCloud" />

3.  **Ingresar los URIs de redirección:**
    *   En el campo correspondiente (a menudo llamado "Redirect URIs" o "Callback URLs"), ingrese el URI proporcionado por Cloud Temple. Su formato generalmente será:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Reemplace company specific por los identificadores específicos de su empresa proporcionados por Cloud Temple.*

4.  **Elegir el tipo de autenticación del cliente:**
    *   Seleccione `Cliente Secret Post` como "Tipo de autenticación del cliente".

5.  **Ingresar la URL de inicio de sesión:**
    *   En el campo "URL de inicio de sesión", ingrese la URL que utiliza para acceder a su consola Cloud Temple. Por ejemplo:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Reemplace unique-identifier por el identificador único de su instancia Cloud Temple.*

6.  **Configurar el mapeo de atributos:**
    *   En la sección "Mapeo de atributos" (o equivalente), asegúrese de que los siguientes atributos estén seleccionados para ser enviados a Cloud Temple:
        *   `Email`
        *   `Perfil` (puede incluir nombre, apellido, etc.)

    <img src={ssoJumpcloud002} alt="Mapeo de atributos de JumpCloud" />

7.  **Asignar grupos:**
    *   Asigne los grupos de usuarios de JumpCloud que deben tener acceso a la consola Cloud Temple a través de esta aplicación SSO.

8.  **Activar la aplicación:**
    *   Haga clic en "Activar" o "Guardar" para finalizar la configuración de la aplicación.

9.  **Proporcionar las credenciales a Cloud Temple:**
    *   Después de activarla, JumpCloud le proporcionará un **ID de cliente** y un **Secreto de cliente**.
    *   Comuníquelo de manera segura a su contacto de Cloud Temple para finalizar la configuración de la federación en Keycloak.

Una vez que Cloud-Temple haya configurado la federación con las credenciales proporcionadas, los usuarios asignados podrán iniciar sesión en la consola Cloud Temple utilizando sus credenciales de JumpCloud.