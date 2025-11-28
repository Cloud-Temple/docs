---
title: Ejemplo de federación de identidad con Microsoft ADFS
tags:
  - iam
  - tutoriales
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

La configuración de su repositorio Microsoft en una organización Cloud Temple facilita la autenticación de sus usuarios en la Consola.
Esto permite evitar la multiplicación de factores de autenticación y reducir la superficie de ataque.
Si sus usuarios están autenticados en su cuenta Microsoft, la autenticación en los servicios de la Consola será transparente.

Estas son las diferentes etapas para realizar esta configuración:

## Requisitos previos

Su servidor Microsoft ADFS debe poder acceder a [la URL Cloud Temple](https://keycloak-shiva.cloud-temple.com/auth/).

El ADFS debe poder ser accesible desde las redes de Cloud Temple y __exponer un certificado TLS de una CA pública__.

Los usuarios que deseen conectarse al portal deben tener su correo electrónico, nombre y apellido registrados en el Directorio Activo.

## Etapa 2: Solicitar la configuración del SSO (Inicio de sesión único) de su organización

Esta parte de la configuración se realiza a nivel de la organización por el equipo Cloud temple.

Para hacerlo, realice __una solicitud de asistencia__ en la consola indicando su deseo de configurar su repositorio de autenticación Microsoft ADFS.

Proporcione la siguiente información en la solicitud de asistencia:

```
    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    URL pública de los Metadatos de la federación del ADFS (<nombre de dominio del adfs>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Ejemplo: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Una vez que la configuración se realice en la Consola, el contacto indicado será informado.

El equipo de soporte Cloud Temple le transmitirá una URL que se parecerá a esta: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Puede pegar la URL en un navegador para probarla. Si funciona correctamente, debería ver un XML.*

## Etapa 3: Realización de la configuración ADFS

### Configuración de la federación de autenticación

#### Adición de una aprobación de parte de confianza

En su servidor ADFS, vaya a __"Agregar una aprobación de parte de confianza"__.

<img src={ssoAdfs_001} />

### Configurar los claims

Los claims permiten proporcionar información al token que se transmitirá a la consola Cloud Temple.

Transmiten la información del usuario conectado que es necesaria para el buen funcionamiento de los diferentes servicios, como su correo electrónico, nombre y apellido.

<img src={ssoAdfs_002} />

Seleccione "Importar los datos publicados en línea o en una red local relacionados con la parte de confianza" y complete la URL proporcionada por el soporte Cloud Temple.

<img src={ssoAdfs_003} />

Puede completar un nombre y una descripción para la parte de confianza, esta parte es opcional.

<img src={ssoAdfs_004} />

Por defecto, permitimos a todos, pero es posible seleccionar __"Permitir un grupo específico"__ para seleccionar el o los grupos que tendrán acceso a los servicios de la Consola a través de ADFS.

<img src={ssoAdfs_005} />

Una vez completadas todas estas etapas, ha terminado la configuración de la parte de confianza.

<img src={ssoAdfs_006} />

Luego, deberá editar la política de emisión de claims de esta nueva parte de confianza.

<img src={ssoAdfs_007} />

Haga clic en "Agregar una regla" y especifique el modelo, ya sea "Transformar una claim entrante".

<img src={ssoAdfs_008} />

Solo tendrá que completar la información como se indica en la captura de pantalla a continuación.

<img src={ssoAdfs_009} />

### Añadir los claims

Agregue una segunda regla con, esta vez, el modelo "Enviar los atributos LDAP como claims".

<img src={ssoAdfs_010} />

Seleccione el almacén de atributos y agregue los atributos "E-Mail Addresses, Given-Name, Name y SAM-Account-Name" como se indica en la captura de pantalla a continuación.

<img src={ssoAdfs_011} />

Solo necesita aplicar los cambios.

## Etapa 3: Finalización

Ahora puede probar accediendo a la Consola y haciendo clic en el botón correspondiente a la autenticación ADFS cliente; en este ejemplo, se trata de __"ADFS Test"__.

<img src={ssoAdfs_012} />
