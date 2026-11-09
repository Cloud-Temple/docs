---
title: Documentación de la API de la Consola
---
import ShivaProfil001 from '@site/docs/console/images/shiva_profil_001.png'
import ShivaProfil002 from '@site/docs/console/images/shiva_profil_002.png'
import ShivaProfil003 from '@site/docs/console/images/shiva_profil_003.png'
import ShivaProfil004 from '@site/docs/console/images/shiva_profil_004.png'
import ShivaProfil005 from '@site/docs/console/images/shiva_profil_005.png'
import ShivaApi001 from '@site/docs/console/images/shiva_api_001.png'
import ShivaApi002 from '@site/docs/console/images/shiva_api_002.png'
import ShivaApi003 from '@site/docs/console/images/shiva_api_003.png'
import ShivaApi004 from '@site/docs/console/images/shiva_api_004.png'

## Introducción

La API Cloud Temple le permite crear y gestionar de manera programática los recursos de los productos integrados en la Consola. Todo lo que puede hacer a través de la consola Cloud Temple también puede realizarse a través de la API, desde la creación de máquinas virtuales hasta la configuración de la gestión de identidades y accesos.

Esta documentación le guía en el uso de la API Cloud Temple, desde la autenticación hasta las buenas prácticas, pasando por la gestión del ciclo de vida de los endpoints.

## Quickstart: Su primera solicitud API

:::info[En resumen - 3 pasos para comenzar]
1. 🔑 **Generar su PAT** desde la consola
2. 🔄 **Intercambiar su ID y su secreto por un JWT**
3. 🚀 **Llamar a la API con ese JWT** en la cabecera `Authorization`
:::

### Prerrequisitos

Antes de comenzar, verifique los siguientes puntos:

- **Cuenta y tenant**: su cuenta dispone del permiso `iam_offline_access` en el tenant donde desea **crear** el PAT.
- **Permisos del PAT**: seleccione únicamente los permisos necesarios para las operaciones que su script realizará. No es necesario agregar `iam_offline_access` a los permisos del PAT para utilizarlo en el punto de autenticación.
- **Acceso de red**: la IP pública de salida utilizada por su script debe estar autorizada para la organización. Consulte [la adición de una dirección IP en Administración > Acceso](./onboarding.md#añadir-una-dirección-ip). Prevea aproximadamente **10 minutos** para la toma en cuenta de una adición. La consulta y la modificación de esta lista requieren respectivamente `console_public_access_read` y `console_public_access_write`; estos permisos no son necesarios para que el PAT se autentique.
- **Herramientas**: los ejemplos a continuación utilizan `curl` y un shell compatible con Bash.

:::warning[El navegador y el script pueden utilizar IPs diferentes]
Una conexión exitosa a la Consola no valida el acceso de red de su script. Un proxy, un VPN o un runner CI puede utilizar otra IP pública de salida. La dirección configurada para unirse a un proxy no es necesariamente la dirección pública con la que sale a Internet. Haga confirmar esta última por su equipo de red y autorícela para la organización correspondiente.
:::

### Pasos

1. **Generar su PAT**: conéctese a la [consola Cloud Temple](https://shiva.cloud-temple.com/login), seleccione el tenant correspondiente y cree un Personal Access Token (ver [Claves API](#claves-api-personal-access-token)). Conserve su **ID** y su **secreto**. El ID esperado es el del PAT, no el del tenant, de la organización o del usuario.

2. **Obtener un token de acceso JWT**: reemplace los valores ficticios `ID_DU_PAT` y `SECRET_DU_PAT` por los del mismo PAT, no expirado y no revocado. Envíe una solicitud **POST**, con un cuerpo JSON válido y la cabecera `Content-Type: application/json`, a la URL completa a continuación, que incluye **`/api/iam`**. No se requiere un Bearer token previo en este punto de autenticación.

```bash
ACCESS_TOKEN=$(curl --fail --silent --show-error \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"id":"ID_DU_PAT","secret":"SECRET_DU_PAT"}' \
  'https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token')
```

En caso de éxito (HTTP 200), el cuerpo de la respuesta contiene el JWT, conservado aquí en la variable `ACCESS_TOKEN`. Si el comando falla, consulte la [solución de problemas](#solución-de-problemas-de-la-autenticación-pat) antes de continuar.

3. **Llamar a una API con el JWT**: utilice este token de acceso en `Authorization: Bearer`. El siguiente ejemplo consulta la lista de roles IAM:

```bash
curl --fail --silent --show-error \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  'https://shiva.cloud-temple.com/api/iam/v2/roles'
```

El Bearer esperado es el **JWT obtenido en el paso 2**, ni el ID ni el secreto del PAT. Las operaciones siguientes siguen sujetas a los permisos otorgados al PAT.

:::caution[Proteger las credenciales]
Los valores del ejemplo son ficticios. En sus automatizaciones, proporcione el secreto a través de su gestor de secretos y evite guardarlo en el código, el historial del shell o los registros. No comparta ni el secreto del PAT ni el JWT obtenido.
:::

## Autenticación

### Claves API (Personal Access Token)

La __clave API__ permite autenticarse cuando desea realizar solicitudes a la API. La generación de una clave API, también llamada __Personal Access Token (PAT)__, es una manera segura de conectarse a las APIs de la Consola sin pasar por una interfaz gráfica. Cada uno de estos tokens está vinculado a un tenant y al usuario que lo creó.

La creación de este token se realiza desde su cuenta y requiere el permiso `iam_offline_access`. Es posible generar varias claves y configurar para cada una las autorizaciones dentro del límite de sus derechos. Este permiso de creación es distinto de los permisos de negocio del PAT: el intercambio de su ID y su secreto por un JWT no requiere que él mismo porte `iam_offline_access`.

#### Crear una clave API

Para crear una clave API, basta con __hacer clic en su perfil__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

En el menú del perfil, hacer clic en __'Jeton d'accès personnel'__

<img src={ShivaProfil003} />

Entonces tiene en pantalla el conjunto de las claves API que han sido creadas para este usuario en este tenant. Hacer clic en __'Nouveau access token personnel'__

<img src={ShivaProfil002} />

Debe entonces:

- Indicar el nombre de este nuevo token,
- Indicar una fecha de expiración (máximo 12 meses de validez),
- Elegir los permisos asociados al token.

Los detalles concernientes a su token se muestran entonces. __Atención, ya no es posible acceder a ellos a posteriori.__

Si no anota esta información, deberá destruir y recrear el token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Por una cuestión de seguridad, se recomienda crear varios tokens que tengan cada uno una utilidad específica (un token para cada aplicación o cada proceso de negocio) en lugar de crear 1 token con el conjunto de los derechos.

Ve después el nuevo token creado y su futura fecha de expiración.

<img src={ShivaProfil005} />

:::info[Ciclo de vida del token de autenticación]
Cuando utiliza su __Personal Access Token (PAT)__ para autenticarse ante la API, recibe a cambio un token de acceso. Es importante señalar que este token de acceso es un __JSON Web Token (JWT)__ con una duración de vida limitada.

- __Duración de vida__: Cada token JWT es válido durante un período de __5 minutos__.
- __Verificación__: Puede consultar la fecha de emisión (`iat`) y la fecha de expiración (`exp`) decodificando el JWT localmente. No transmita un token activo a un servicio de decodificación de terceros. La decodificación sola no verifica su firma.

Una vez que el token ha expirado, deberá volver a autenticarse con su PAT para obtener uno nuevo. Por lo tanto, se recomienda gestionar este ciclo de vida en sus scripts y aplicaciones previendo una renovación automática del token.
:::

### Solución de problemas de la autenticación PAT

Comience por identificar la solicitud que falla: **el intercambio ID/secreto** o **la llamada de negocio con el JWT**. Los controles a realizar no son los mismos.

| Síntoma | Verificaciones |
|---|---|
| Solicitud de autenticación rechazada | Verifique el método **POST**, la URL completa `https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token`, el tipo `application/json` y un cuerpo que contenga las cadenas `id` y `secret`. En Postman, elija un cuerpo **raw / JSON**. No envíe este cuerpo con un método GET. |
| Fallo de autenticación a pesar de una solicitud conforme | Verifique que el ID y el secreto corresponden al **mismo PAT**, en el tenant esperado, y que este PAT no está ni expirado ni revocado. No utilice el ID del tenant en lugar del ID del PAT. |
| **HTTP 403**, en particular con una página HTML de rechazo | Este estado no prueba una falta de permisos IAM. Verifique la IP pública de salida efectiva y la lista de acceso de la organización, luego el proxy y la forma de la solicitud: un proxy o un cortafuegos aplicativo (WAF) puede rechazar la solicitud antes de que llegue a la API. Un cuerpo HTML puede ayudar a identificar este rechazo, sin ser suficiente para determinar su causa. |
| El intercambio tiene éxito, pero la llamada de negocio falla | Verifique que la cabecera Bearer contiene el JWT obtenido, que este no está expirado, y que el PAT posee los permisos requeridos por la operación en el tenant correcto. Agregar `iam_offline_access` al PAT no resuelve por sí solo un rechazo en una operación de negocio. |

Si el problema persiste, transmita al soporte la hora de la prueba **con la zona horaria**, el método y la URL, el estado HTTP, la IP pública de salida confirmada, así como la respuesta y un posible identificador de solicitud. Proporcione un comando o una captura **expurgada**: oculte el secreto, el JWT, las cabeceras `Authorization` y `Proxy-Authorization`, así como las cookies. El estado HTTP solo no permite identificar con certeza el componente que rechazó la solicitud.

## Acceso al portal API

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación:

<img src={ShivaApi001} />

Las operaciones protegidas de las APIs requieren la cabecera __`Authorization`__ con el Bearer JWT obtenido durante la fase de autenticación. El intercambio inicial del ID y del secreto del PAT descrito a continuación no requiere esta cabecera.

La URL de los puntos de acceso se da directamente en __Swagger__ (en el objeto "Servers" de cada página de APIs).

### Explorar la documentación interactiva

El portal API le permite:

- Consultar el conjunto de los endpoints disponibles por módulo
- Probar directamente las solicitudes desde la interfaz
- Ver los modelos de datos (esquemas) para cada recurso
- Consultar los códigos de respuesta posibles para cada endpoint

## Estructura de los endpoints

### Formato de las URLs

Las URLs de la API Cloud Temple siguen una estructura coherente:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Donde:
- `{module}`: El módulo concernido (compute, iam, network, backup, etc.)
- `{version}`: La versión de la API (v1, v2, etc.)
- `{ressource}`: El recurso a manipular (virtual-machines, users, networks, etc.)

### Ejemplos de endpoints

```
# Machines virtuelles (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identité et accès (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Réseaux
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organización por módulo

La API Cloud Temple está organizada en módulos funcionales:

| Módulo | Descripción | Base URL |
|--------|-------------|----------|
| Consola Cloud Temple | Funcionalidades generales | `/api/v1/` |
| Identidad (IAM) | Gestión de usuarios y accesos | `/iam/v1/` |
| IaaS VMware | Recursos de virtualización VMware | `/compute/v1/` |
| OpenIaaS | Recursos Xen Orchestra | `/openiaas/v1/` |
| S3 | Almacenamiento de objetos | `/s3/v1/` |
| OpenShift | Plataforma PaaS | `/openshift/v1/` |
| Bastion | Appliances bastión SSH/RDP | `/bastion/v1/` |
| Red | Gestión de red nivel 2 y 3 | `/network/v1/` |
| Alojamiento | Colocación y housing | `/housing/v1/` |
| Marketplace | Catálogo de soluciones | `/marketplace/v1/` |
| Soporte | Tickets y asistencia | `/support/v1/` |
| Notificación | Sistema de notificaciones | `/notification/v1/` |
| LLMaaS | Inteligencia artificial | `/llmaas/v1/` |

## Las actividades

El seguimiento de las solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se asegura a través de la gestión de las actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en las cabeceras de la respuesta, bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez recuperado el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity:

<img src={ShivaApi003} />

El contenido de la actividad incluye toda la información esencial para identificar la operación, su fecha de ejecución, así como su estado de avance. Aquí está el modelo de una actividad:

```json
{
  "id": "UUIDV4",
  "tenantId": "UUIDV4",
  "description": "STRING",
  "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
  "tags": "STRING[]",
  "initiator": "UUIDV4",
  "creationDate": "DATE",
  "concernedItems": [
    {
      "type": "string",
      "id": "string"
    }
  ],
  "state": "CompletedState | RunningState | WaitingState | FailedState",
  "operationType": "read" | "write"
}
```

### Estados de una actividad

El objeto __state__ puede tomar diferentes formas según el estado de la actividad, a saber:

#### waiting

Estado antes de que la operación haya comenzado:

```json
waiting: {}
```

#### running

Estado cuando la operación está en curso:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

Estado si la operación ha fallado:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

Estado si la operación está terminada:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identificador del recurso creado]
El Identificador (UUIDv4) del recurso creado está disponible en el resultado de la actividad una vez que esta ha sido completada.
:::

## Límites de la API

### ¿Por qué límites?

La consola Cloud Temple define __límites sobre el volumen de solicitudes__ que un usuario puede dirigir a la API durante un período determinado. El establecimiento de estos límites de frecuencia es una medida común en la gestión de las APIs, adoptada por varios motivos esenciales:

- __Prevención de abusos__: Estos límites contribuyen a la salvaguarda de la integridad de la API previniendo los usos abusivos o descuidados susceptibles de comprometer su funcionamiento.
- __Garantía de la calidad del servicio__: Al regular el acceso a la API, velamos por una distribución equitativa de los recursos, permitiendo así a todos los usuarios beneficiarse de una experiencia estable y performante.

Tomemos el ejemplo de un script mal diseñado o ineficaz que intenta llamadas repetitivas a la API, arriesgándose a saturar los recursos y degradar las prestaciones. Al establecer umbrales de solicitudes, prevenimos estas situaciones y aseguramos el mantenimiento de __un servicio fluido y sin interrupción__ para el conjunto de nuestra clientela.

### ¿Cuáles son los límites de tasa para la API de la consola Cloud Temple ?

Aplicamos restricciones cuantitativas sobre las interacciones de los usuarios con la consola para cada producto.

Los límites se definen en __solicitudes por segundo (r/s) y por IP de origen__. Más allá del umbral límite, el sistema responderá con un código de error HTTP 429, señalando que se ha superado el límite de solicitudes autorizadas.

Estos son los límites definidos :

| Producto | Umbral límite |
|---|---|
| Consola Cloud Temple | 25 r/s |
| Identidad (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastión | 25 r/s |
| Red | 25 r/s |
| Alojamiento | 25 r/s |
| Marketplace | 25 r/s |
| Soporte | 25 r/s |
| Notificación | 25 r/s |
| LLMaaS | 25 r/s |

### Rutas específicas

Ciertos puntos de API específicos, en particular aquellos relacionados con la autenticación o con acciones sensibles, tienen límites más restrictivos para reforzar la seguridad y garantizar la estabilidad.

| Ruta | Umbral límite |
|---|---|
| Autenticación (IAM) | 5 r/s |
| IaaS - Almacenamiento (Datastores) | 20 r/s |
| Marketplace (Contacto) | 1 r/min - 5 r/h |

### ¿Cómo funcionan los límites de tasa ?

Si el número de solicitudes enviadas a un punto de API supera el límite autorizado, el punto de API reaccionará devolviendo __un código de respuesta HTTP 429__. Este código indica que el usuario ha superado el número de solicitudes permitidas. Cuando esto ocurre, el punto de API proporcionará también un objeto JSON como respuesta, el cual contendrá información detallada sobre la limitación aplicada :

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### ¿Cómo evitar realizar demasiadas solicitudes ?

Se recomienda limitar el número de llamadas a la API realizadas por su automatización para permanecer por debajo del límite de tasa establecido para el punto de terminación.

Esta situación ocurre a menudo cuando varias solicitudes se ejecutan en paralelo, mediante varios procesos o hilos.

Existen varias formas de mejorar la eficacia de su automatización, en particular utilizando mecanismos de __caché__ y estableciendo __un sistema de reintentos con backoff exponencial__. Este método consiste en realizar una breve pausa cuando se encuentra un error de límite de tasa, y luego reintentar la solicitud. Si la solicitud falla nuevamente, la duración de la pausa se incrementa progresivamente hasta que la solicitud tenga éxito o hasta que se alcance un número máximo de reintentos.

Este enfoque presenta numerosas ventajas :

- __El backoff exponencial__ garantiza que los primeros intentos se realicen rápidamente, al mismo tiempo que prevé plazos más largos en caso de fallo repetido.
- La adición de __una variación aleatoria__ a la pausa contribuye a evitar que todos los intentos se produzcan simultáneamente.

Es importante señalar que __las solicitudes fallidas no afectan su límite de tasa__. Sin embargo, reenviar continuamente una solicitud podría no ser una solución viable a largo plazo, ya que este comportamiento podría modificarse en el futuro. Por lo tanto, le recomendamos no depender exclusivamente de este mecanismo.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ en Python son buenos puntos de partida para implementar estrategias de backoff.

## Ciclo de vida y deprecación de los endpoints

### Política de deprecación

Cloud Temple se compromete a mantener la compatibilidad de su API con el tiempo. Sin embargo, cuando es necesario hacer evolucionar la API (nuevas funcionalidades, optimizaciones, correcciones de seguridad), ciertos endpoints pueden ser deprecados y luego eliminados.

#### Regla de 3 meses mínimo

Cuando un endpoint se marca como deprecado :

1. **Anuncio oficial** : La deprecación se anuncia en las notas de versión de la consola
2. **Período de transición** : El endpoint permanece **accesible y funcional durante un mínimo de 3 meses** después del anuncio
3. **Fecha de eliminación** : Una fecha precisa de eliminación definitiva se comunica desde el anuncio
4. **Alternativa documentada** : El nuevo endpoint de reemplazo está documentado y disponible

Esta regla de 3 meses le da el tiempo necesario para adaptar su código y migrar a los nuevos endpoints.

### ¿Cómo identificar un endpoint deprecado ?

#### En el portal de API (Swagger)

Los endpoints deprecados aparecen tachados en la documentación Swagger :


~~POST /v1/ancien/endpoint~~

La descripción del endpoint incluye :
- La fecha de anuncio de la deprecación
- La fecha de eliminación prevista
- El endpoint de reemplazo recomendado

<img src={ShivaApi004} />

### Buenas prácticas para gestionar las deprecaciones

1. **Vigile las funcionalidades deprecadas** : Consulte regularmente las funcionalidades deprecadas en la consola para conocer las deprecaciones anunciadas y su fecha de eliminación prevista.

2. **Planifique sus migraciones** : En cuanto se anuncie una deprecación, planifique la migración de su código al nuevo endpoint en los 3 meses.

3. **Pruebe los nuevos endpoints** : Pruebe los nuevos endpoints en cuanto estén disponibles, incluso durante el período de transición.

4. **Documente sus dependencias** : Mantenga una lista de los endpoints que su aplicación utiliza para facilitar las migraciones futuras.

## Buenas prácticas

### Seguridad de los tokens

:::danger[Reglas de seguridad esenciales]
- 🚫 Nunca exponga sus tokens en código versionado (Git, etc.)
- 🔐 Utilice variables de entorno para almacenar los tokens
- 🎯 Cree tokens con permisos mínimos (principio de menor privilegio)
- 🔄 Renueve periódicamente sus tokens (máximo 12 meses)
- ⚠️ Revoque inmediatamente cualquier token comprometido
:::

### Gestión de errores

Siempre gestione los errores HTTP en su código. Preste especial atención a los siguientes códigos :

| Código | Descripción | Acción recomendada |
|------|-------------|-------------------|
| **401** Unauthorized | Token expirado o inválido | Reautenticar con su PAT |
| **403** Forbidden | Permisos insuficientes | Verificar los derechos del token |
| **429** Too Many Requests | Límite de tasa alcanzado | Esperar antes de reintentar (backoff) |
| **500/503** Server Error | Error temporal del servidor | Reintentar más tarde |

### Optimización de las llamadas a la API

- Utilice la paginación para las listas voluminosas
- Almacene en caché los datos que cambian raramente
- Utilice los filtros para limitar los datos devueltos
- Agrupe las operaciones cuando sea posible
- Siga el estado de las actividades asíncronas en lugar de hacer polling intensivo

### Reintento con backoff exponencial

Para gestionar los errores temporales o el rate limiting (HTTP 429), implemente una estrategia de reintento con backoff exponencial :

:::tip[Estrategia de reintento recomendada]
- ⏱️ **Espera progresiva** : 1s, 2s, 4s, 8s...
- 🎲 **Variación aleatoria** : Evita que todos los clientes reintenten simultáneamente
- 🔄 **Límite de intentos** : Máximo 3-5 intentos
- 📚 **Bibliotecas Python** : [Backoff](https://pypi.org/project/backoff/) o [Tenacity](https://pypi.org/project/tenacity/)
:::
