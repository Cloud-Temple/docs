

---
title: Ejemplo de federación de identidad con Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Este tutorial le guía en la configuración de la federación de identidad con Okta para su organización Cloud Temple.



## Requisitos

- Acceso administrador a su instancia de Okta
- Derechos de propietario en su organización Cloud Temple
- Acceso a la consola Cloud Temple



## Configuración

La configuración de la federación de identidad con Okta permite integrar su directorio de Okta con la consola Cloud Temple para una autenticación centralizada.



### Paso 1: Configuración del lado de Okta

1. Inicie sesión en su consola de administración de Okta
2. Navegue hasta **Aplicaciones** > **Aplicaciones**
3. Haga clic en **Crear integración de aplicación**
4. Seleccione **SAML 2.0** como método de autenticación
5. Configure los parámetros SAML para Cloud Temple



### Paso 2: Configuración de los parámetros SAML

Configure los siguientes parámetros en Okta:

- **URL de inicio de sesión único**: Proporcionado por el equipo Cloud Temple
- **URI de audiencia (SP Entity ID)**: Proporcionado por el equipo Cloud Temple
- **Declaraciones de atributos**: Configure los atributos de usuario necesarios



### Paso 3: Solicitud de configuración de Cloud Temple

Para configurar la federación con Okta, por favor, cree una solicitud de soporte en la consola de Cloud Temple especificando:

- El nombre de su Organización
- El nombre de un contacto con su correo electrónico y número de teléfono
- La URL de metadatos SAML de su aplicación Okta
- El certificado de firma SAML
- Los atributos de usuario configurados



### Paso 4: Pruebas y validación

Una vez que la configuración esté completa:

1. Pruebe la autenticación con un usuario de prueba
2. Verifique que los atributos de usuario se mapeen correctamente
3. Valide el acceso a los recursos de Cloud Temple



## Buenas prácticas

- Configure grupos de Okta para gestionar los permisos por inquilino
- Active la autenticación multifactor (MFA) en Okta
- Supervise los registros de autenticación para detectar anomalías



## Soporte

Para cualquier asistencia con la configuración de Okta, póngase en contacto con el soporte de Cloud Temple a través de la consola.