---
title: Example of Identity Federation with Microsoft ADFS
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoAdfs_001 from './images/sso_adfs_001.png'
import ssoAdfs_002 from './images/sso_adfs_002.png'
import ssoAdfs_003 from './images/sso_adfs_003.png'
import ssoAdfs_004 from './images/sso_adfs_004.png'
import ssoAdfs_005 from './images/sso_adfs_005.png'
import ssoAdfs_006 from './images/sso_adfs_006.png'
import ssoAdfs_007 from './images/sso_adfs_007.png'
import ssoAdfs_008 from './images/sso_adfs_008.png'
import ssoAdfs_009 from './images/sso_adfs_009.png'
import ssoAdfs_010 from './images/sso_adfs_010.png'
import ssoAdfs_011 from './images/sso_adfs_011.png'
import ssoAdfs_012 from './images/sso_adfs_012.png'

Here is an example configuration of the identity repository for a Cloud Temple organization using __Microsoft ADFS__.

Configuring your Microsoft identity repository at the Cloud Temple organization level simplifies user authentication on the Console.  
This helps avoid the proliferation of authentication factors and reduces the attack surface.  
If your users are already authenticated to their Microsoft accounts, authentication to the Console services will be seamless.

Below are the steps to complete this configuration:

## Requis

Su servidor Microsoft ADFS debe poder acceder a [la URL Cloud Temple](https://keycloak-shiva.cloud-temple.com/auth/).

ADFS debe ser accesible desde las redes de Cloud Temple y __debe exponer un certificado TLS de una CA pública__.

Los usuarios que deseen conectarse al portal deben tener su correo electrónico, nombre y apellido registrados en el Directorio Activo.

## Paso 2: Solicitar la configuración del SSO (Single Sign-On) de su organización

Esta parte de la configuración se realiza a nivel de organización por parte del equipo Cloud Temple.

Para ello, realice una __solicitud de asistencia__ en la consola indicando su deseo de configurar su repositorio de autenticación Microsoft ADFS.

Por favor, proporcione la siguiente información en la solicitud de asistencia:

```
    Nombre de su organización
    Nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    URL pública de los metadatos de la federación de ADFS (<nombre de dominio de ADFS>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Ejemplo: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Una vez que la configuración se haya realizado desde la consola, el contacto indicado será notificado.

El equipo de soporte de Cloud Temple le enviará una URL que tendrá un aspecto similar a este: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Puede pegar la URL en un navegador para probarla. Si funciona correctamente, debería ver aparecer un archivo XML*

## Step 3: ADFS Configuration Implementation

### Configuración de la federación de autenticación

#### Adding a trusted party approval

On your ADFS server, go to __"Add a trusted party approval"__.

<img src={ssoAdfs_001} />

### Configurar los "claims"

Los claims permiten proporcionar información al token que se enviará a la consola Cloud Temple.

Transmiten la información del usuario conectado que es necesaria para el correcto funcionamiento de los diferentes servicios, como su correo electrónico, nombre y apellidos.

<img src={ssoAdfs_002} />

Seleccione "Importar datos publicados en línea o en una red local sobre la parte de confianza" y rellene la URL proporcionada por el soporte de Cloud Temple.

<img src={ssoAdfs_003} />

Puede indicar un nombre y una descripción para la parte de confianza; esta información es opcional.

<img src={ssoAdfs_004} />

Por defecto, permitimos a todos, pero es posible seleccionar __"Permitir un grupo específico"__ para elegir el o los grupos que tendrán acceso a los servicios de la consola a través de ADFS.

<img src={ssoAdfs_005} />

Una vez completados estos pasos, habrá finalizado la configuración de la parte de confianza.

<img src={ssoAdfs_006} />

A continuación, deberá editar la estrategia de emisión de claims de esta nueva parte de confianza.

<img src={ssoAdfs_007} />

Haga clic en "Agregar regla" y especifique el modelo, que debe ser "Transformar una reclamación entrante".

<img src={ssoAdfs_008} />

Solo le quedará rellenar la información tal como se indica en la captura de pantalla a continuación.

<img src={ssoAdfs_009} />

### Add claims

Add a second rule, this time using the template "Send LDAP attributes as claims".

<img src={ssoAdfs_010} />

Select the attribute store and add the attributes "E-Mail Addresses, Given-Name, Surname, and SAM-Account-Name" as shown in the screenshot below.

<img src={ssoAdfs_011} />

Simply apply the changes.

## Paso 3: Finalización

Ahora puede probarlo yendo a la Consola y haciendo clic en el botón correspondiente a la autenticación del cliente ADFS; en este ejemplo, se trata de __"ADFS Test"__.

<img src={ssoAdfs_012} />