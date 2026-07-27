---
title: Ejemplo de federación de identidad con Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Este tutorial le guía en la configuración de la federación de identidad con Okta para su organización Cloud Temple.

## Prerrequisitos

- Acceso de administrador a su instancia de Okta
- Derechos de propietario en su organización de Cloud Temple
- Acceso a la consola de Cloud Temple

## Configuración

La configuración de la federación de identidad con Okta permite integrar su directorio Okta con la consola Cloud Temple para una autenticación centralizada.

### Paso 1: Configuración del lado de Okta

1. Inicie sesión en su consola de administración de Okta
2. Navegue a **Applications** > **Applications**
3. Haga clic en **Create App Integration**
4. Seleccione **SAML 2.0** como método de autenticación
5. Configure los parámetros SAML para Cloud Temple

### Paso 2 : Configuración de los parámetros SAML

Configure los siguientes parámetros en Okta :

- **Single sign on URL** : Proporcionado por el equipo de Cloud Temple
- **Audience URI (SP Entity ID)** : Proporcionado por el equipo de Cloud Temple
- **Attribute Statements** : Configure los atributos de usuario necesarios

### Paso 3: Solicitud de configuración de Cloud Temple

Para configurar la federación con Okta, cree una solicitud de soporte en la consola de Cloud Temple especificando:

- El nombre de su Organización
- El nombre de un contacto con su correo electrónico y número de teléfono
- La URL de metadatos SAML de su aplicación Okta
- El certificado de firma SAML
- Los atributos de usuario configurados

### Paso 4: Prueba y validación

Una vez finalizada la configuración:

1. Pruebe la autenticación con un usuario de prueba
2. Verifique que los atributos del usuario estén correctamente mapeados
3. Valide el acceso a los recursos de Cloud Temple

## Buenas prácticas

- Configure grupos de Okta para gestionar los permisos por tenant
- Active la autenticación multifactor (MFA) en Okta
- Monitoree los registros de autenticación para detectar anomalías

## Soporte

Para cualquier asistencia con la configuración de Okta, contacte al soporte de Cloud Temple a través de la consola.