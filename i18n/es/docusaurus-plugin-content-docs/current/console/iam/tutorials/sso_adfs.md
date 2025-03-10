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
Esto permite evitar la multiplicación de factores de autenticación y disminuir la superficie de ataque.
Si sus usuarios están autenticados en su cuenta Microsoft, la autenticación a los servicios de la consola Shiva será transparente.

Aquí están los diferentes pasos para realizar esta configuración:


## Requisitos previos
Su servidor Microsoft ADFS debe poder acceder a la siguiente URL de Cloud Temple: https://keycloak-shiva.cloud-temple.com/auth/.

El ADFS debe ser accesible desde las redes de Cloud Temple y __exponer un certificado TLS de una CA pública__.

Los usuarios que deseen conectarse al portal deben tener su correo electrónico, nombre y apellido registrados en el Active Directory.

## Paso 2: Solicitar la configuración del SSO (Single Sign-On) de su organización

Esta parte de la configuración se realiza a nivel de la organización por el equipo de Cloud temple.

Para ello, haga __una solicitud de asistencia__ en la consola indicando su deseo de configurar su repositorio de autenticación Microsoft ADFS.

Proporcione la siguiente información en la solicitud de asistencia:
```
    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    URL pública de los Metadatos de la federación del ADFS (<nombre del dominio del adfs>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Ejemplo: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```
En cuanto la configuración se realice en el lado de la consola Shiva, el contacto indicado será informado.

El equipo de soporte de Cloud Temple le proporcionará una URL que se verá así: https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor

*Puede pegar la URL en un navegador para probarla. Si funciona correctamente debería ver un XML*

## Paso 3: Realización de la configuración ADFS
### Configuración de la federación de autenticación

#### Añadir una relación de confianza para usuario de confianza

En su servidor ADFS, vaya a __"Agregar una relación de confianza de terceros"__.

<img src={ssoAdfs_001} />

### Configurar los "claims"
Las claims permiten proporcionar información al token que se transmitirá a la consola Cloud Temple.

Transfieren la información del usuario conectado necesaria para el correcto funcionamiento de los diferentes servicios, como su correo electrónico, nombre y apellido.

<img src={ssoAdfs_002} />

Seleccione "Importar datos publicados en línea o en una red local sobre el tercero de confianza" e ingrese la URL proporcionada por el soporte de Cloud Temple.

<img src={ssoAdfs_003} />

Puede proporcionar un nombre y una descripción para el tercero de confianza, esta parte es opcional.

<img src={ssoAdfs_004} />

Por defecto, permitimos todos, pero es posible seleccionar __"Permitir un grupo específico"__ para elegir el o los grupos que tendrán acceso a los servicios de la consola Shiva a través de ADFS.

<img src={ssoAdfs_005} />

Una vez que haya completado todos estos pasos, habrá terminado la configuración del tercero de confianza.

<img src={ssoAdfs_006} />

Luego deberá editar la política de emisión de claims de este nuevo tercero de confianza.

<img src={ssoAdfs_007} />

Haga clic en "Agregar una regla" y especifique el modelo, que es "Transformar una claim entrante".

<img src={ssoAdfs_008} />

Solo necesitará ingresar la información tal como se muestra en la captura de pantalla a continuación.

<img src={ssoAdfs_009} />

### Añadir los claims
Agregue una segunda regla, esta vez, con el modelo "Enviar atributos LDAP como claims".

<img src={ssoAdfs_010} />

Seleccione la tienda de atributos y agregue los atributos "E-Mail Addresses, Given-Name, Nombre y SAM-Account-Name" como se muestra en la captura de pantalla a continuación.

<img src={ssoAdfs_011} />

Simplemente aplique los cambios.

## Paso 4: Finalización

Ahora puede probar accediendo a la consola Shiva y haciendo clic en el botón correspondiente a la autenticación de cliente ADFS; en este ejemplo, se trata de __"ADFS Test"__

<img src={ssoAdfs_012} />
