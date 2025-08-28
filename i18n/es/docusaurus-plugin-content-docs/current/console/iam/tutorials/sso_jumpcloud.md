---
title: Ejemplo de federicación de identidad con JumpCloud
etiquetas:
  - iam
  - tutoriales
  - enrollado
---
importar imagen ssoJumpcloud001 desde './imágenes/sso_jumpcloud_001.png';
importar imagen ssoJumpcloud002 desde './imágenes/sso_jumpcloud_002.png';

Este tutoría te guía a través de la configuración de la autenticación única (SSO) entre JumpCloud y la consola Cloud Temple utilizando el protocolo OpenID Connect (OIDC).

Para obtener información detallada directamente desde JumpCloud, consulta su documentación oficial sobre SSO OIDC: [SSO con OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Requisitos previos

Antes de comenzar, asegúrate de tener las información necesaria de Cloud Temple, especialmente la URI de redirección específica de tu instancia Keycloak.

## Configuración de una aplicación OIDC en JumpCloud

Sigue estos pasos para configurar una nueva aplicación OIDC en tu consola de administración JumpCloud:

1. **Crear una nueva aplicación:**
    * Ve a la sección de aplicaciones en JumpCloud.
    * Haz clic en "Agregar" o "Crear una nueva aplicación".
    * Elige la opción para una integración de aplicación personalizada ("Aplicación de integración personalizada").

2. **Configurar SSO OIDC:**
    * Selecciona "Gestionar Single Sign-On (SSO)".
    * Elige "Configurar SSO con OIDC".

    <img src="ssoJumpcloud001.png" alt="Configuración SSO OIDC JumpCloud">


3. **Ingresar las URIs de redirección:**
    * En el campo apropiado (generalmente llamado "URI de redirección" o "URL de callback"), ingresa la URI proporcionada por Cloud Temple. Se seguirá generalmente este formato:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<empresa específica>/broker/<empresa específica>/endpoint
        ```
        * Reemplaza `<empresa específica>` con los identificadores específicos de tu empresa proporcionados por Cloud Temple.

4. **Seleccionar el tipo de autenticación del cliente:**
    * Elige `Cliente secreto POST` como "Tipo de autenticación del cliente".

5. **Ingresar la URL de inicio de sesión:**
    * En el campo "URL de inicio de sesión", ingresa la URL que utilizas para acceder a tu consola Cloud Temple. Por ejemplo:
        ```
        https://<identificador único>.shiva.cloud-temple.com
        ```
        * Reemplaza `<identificador único>` por el identificador único de tu instancia Cloud Temple.

6. **Configurar el mapeo de atributos:**
    * En la sección "Mapeo de atributos" (o equivalente), asegúrate de que los siguientes atributos estén seleccionados para ser enviados a Cloud Temple:
        * `Email`
        * `Perfil` (puede incluir nombre, apellido, etc.)

    <img src="ssoJumpcloud002.png" alt="Mapeo de atributos JumpCloud">


7. **Asociar grupos:**
    * Asocia los grupos de usuarios JumpCloud que deben tener acceso a la consola Cloud Temple a través de esta aplicación SSO.

8. **Activar la aplicación:**
    * Haz clic en "Activar" o "Guardar" para finalizar la configuración de la aplicación.

9. **Proporcionar identificadores a Cloud Temple:**
    * Después de activar, JumpCloud te proporcionará un **ID del cliente** y un **secreto del cliente**.
    * Comunícate estos dos datos de manera segura a tu contacto en Cloud Temple para finalizar la configuración de la federation desde Keycloak.

Una vez que Cloud-Temple haya configurado la federation con los identificadores proporcionados, los usuarios asignados para esta aplicación SSO podrán conectarse a la consola Cloud Temple utilizando sus credenciales JumpCloud.