---
title: Ejemplo de federación de identidad con Microsoft ADFS
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

Aquí hay un ejemplo de configuración del repositorio de autenticación de una organización Cloud Temple con __Microsoft ADFS__.

La configuración de su repositorio Microsoft a nivel de una organización Cloud Temple facilita la autenticación de sus usuarios en la consola Shiva.
Esto ayuda a evitar la multiplicación de factores de autenticación y reduce la superficie de ataque.
Si sus usuarios están autenticados en su cuenta de Microsoft, la autenticación a los servicios de la consola Shiva será transparente.

Aquí están los diferentes pasos para realizar esta configuración:

## Requisitos previos

Su servidor Microsoft ADFS debe poder acceder a [la URL de Cloud Temple](https://keycloak-shiva.cloud-temple.com/auth/).

El ADFS debe ser accesible desde las redes de Cloud Temple y __exponer un certificado TLS de una CA pública__.

Los usuarios que deseen conectarse al portal deben tener su correo electrónico, nombre y apellido completados en el Active Directory.

## Paso 2: Solicitar la configuración de SSO (Single Sign-On) para su organización

Esta parte de la configuración se realiza a nivel de la organización por el equipo de Cloud Temple.

Para ello, haga una __solicitud de soporte__ en la consola indicando su deseo de configurar su repositorio de autenticación Microsoft ADFS.

Por favor, proporcione la siguiente información en la solicitud de soporte:

```
    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    URL pública de los Metadatos de federación del ADFS (<nombre de dominio del adfs>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Ejemplo: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Tan pronto como se complete la configuración en el lado de la consola Shiva, se informará al contacto indicado.

El equipo de soporte de Cloud Temple le proporcionará una URL que se parecerá a esta: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Puede pegar la URL en un navegador para probarla. Si funciona correctamente, debería ver un XML mostrado*

## Paso 3: Implementación de la configuración ADFS

### Configuración de la federación de autenticación

#### Añadir una confianza de parte de confianza

En su servidor ADFS, vaya a __"Añadir una confianza de parte de confianza"__.

<img src={ssoAdfs_001} />

### Configurar los "claims"

Los claims proporcionan información al token que se transmitirá a la consola Cloud Temple.

Transmiten la información del usuario conectado que es necesaria para el correcto funcionamiento de los diversos servicios, como su correo electrónico, nombre y apellido.

<img src={ssoAdfs_002} />

Seleccione "Importar datos sobre la parte de confianza publicados en línea o en una red local" e introduzca la URL proporcionada por el soporte de Cloud Temple.

<img src={ssoAdfs_003} />

Puede introducir un nombre y una descripción para la parte de confianza; esta parte es opcional.

<img src={ssoAdfs_004} />

Por defecto, permitimos a todos, pero es posible seleccionar __"Permitir un grupo específico"__ para elegir el/los grupo(s) que estarán autorizados a acceder a los servicios de la consola Shiva a través de ADFS.

<img src={ssoAdfs_005} />

Una vez completados todos estos pasos, ha finalizado la configuración de la parte de confianza.

<img src={ssoAdfs_006} />

Luego deberá editar la política de emisión de reclamaciones para esta nueva parte de confianza.

<img src={ssoAdfs_007} />

Haga clic en "Añadir regla" y especifique la plantilla, que es "Transformar una reclamación entrante".

<img src={ssoAdfs_008} />

Solo tendrá que introducir la información como se muestra en la captura de pantalla a continuación.

<img src={ssoAdfs_009} />

### Añadir los claims

Añada una segunda regla con la plantilla "Enviar atributos LDAP como reclamaciones" esta vez.

<img src={ssoAdfs_010} />

Seleccione el almacén de atributos y añada los atributos "Direcciones de correo electrónico, Nombre, Apellido y Nombre de cuenta SAM" como se muestra en la captura de pantalla a continuación.

<img src={ssoAdfs_011} />

Solo necesita aplicar los cambios.

## Paso 3: Finalización

Ahora puede probar yendo a la consola Shiva y haciendo clic en el botón correspondiente a la autenticación del cliente ADFS; en este ejemplo, es __"ADFS Test"__

<img src={ssoAdfs_012} />
