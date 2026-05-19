---
title: Documentación API
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

## Introduction

La API Cloud Temple le permite crear y gestionar todos sus recursos cloud de forma programática. Todo lo que puede realizar a través de la consola Cloud Temple también se puede llevar a cabo mediante la API, desde la creación de máquinas virtuales hasta la configuración de la gestión de identidades y accesos.

Esta documentación le guía en el uso de la API Cloud Temple, abarcando la autenticación, las buenas prácticas y la gestión del ciclo de vida de los endpoints.

## Inicio rápido : Tu primera solicitud de API

:::info[Resumen - 3 pasos para comenzar]
1. 🔑 **Generar tu PAT** desde la consola
2. 🚀 **Probar con curl** en `/iam/v2/roles`
3. ✅ **Analizar la respuesta** JSON
:::

### Requisitos previos

Antes de comenzar, debe disponer de una cuenta de Cloud Temple con los permisos adecuados para generar claves API.

### Pasos

1. **Generar tu clave API** : Inicia sesión en la [consola Cloud Temple](https://shiva.cloud-temple.com/login) y genera tu Personal Access Token (consulta la sección [Claves API](#clés-api-personal-access-token) a continuación).

2. **Probar tu primera solicitud** : Ejecuta el siguiente comando curl reemplazando `<votre-personal-access-token>` por tu token :

```bash
curl -X GET \
  -H "Authorization: Bearer <votre-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Analizar la respuesta** : Recibirás la lista de roles IAM disponibles en tu tenant, lo que te permitirá comprender los permisos existentes.

## Autenticación

### Claves API (Token de acceso personal)

La __clave API__ permite autenticarse cuando desea realizar solicitudes a la API. La generación de una clave API, también conocida como __Token de acceso personal (PAT)__, es una forma segura de conectarse a las API de Console sin pasar por una interfaz gráfica. Cada uno de estos tokens está vinculado a un tenant y al usuario que lo creó.

La creación de este token se realiza desde su cuenta. Es posible generar varias claves y configurar los permisos para cada una, dentro de los límites de sus derechos.

#### Crear una clave API

Para crear una clave API, solo necesitas __hacer clic en tu perfil__ :

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

En el menú del perfil, haz clic en __'Token de acceso personal'__

<img src={ShivaProfil003} />

Verás en pantalla todas las claves API que se han creado para este usuario en este tenant. Haz clic en __'Nuevo token de acceso personal'__

<img src={ShivaProfil002} />

Debes entonces:

- Indicar el nombre de este nuevo token,
- Indicar una fecha de expiración (máximo 12 meses de validez),
- Seleccionar los permisos asociados al token.

Los detalles de tu token se mostrarán a continuación. __Atención, ya no será posible acceder a ellos posteriormente.__

Si no anotas esta información, deberás eliminar y volver a crear el token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Por motivos de seguridad, se recomienda crear varios tokens, cada uno con un propósito específico (un token para cada aplicación o cada proceso de negocio) en lugar de crear 1 token con todos los permisos.

A continuación, verás el nuevo token creado y su fecha de expiración.

<img src={ShivaProfil005} />

:::info[Ciclo de vida del token de autenticación]
Cuando utilices tu __Personal Access Token (PAT)__ para autenticarte en la API, recibirás a cambio un token de acceso. Es importante destacar que este token de acceso es un __JSON Web Token (JWT)__ con una duración de vida limitada.

- __Duración de vida__ : Cada token JWT es válido durante __5 minutos__.
- __Verificación__ : Puedes verificar la fecha de emisión (`iat`) y la fecha de expiración (`exp`) de tu token al decodificarlo. Herramientas en línea como [jwt.io](https://jwt.io) te permiten hacerlo fácilmente.

Una vez expirado el token, deberás volver a autenticarte con tu PAT para obtener uno nuevo. Por lo tanto, se recomienda gestionar este ciclo de vida en tus scripts y aplicaciones previendo una renovación automática del token.
:::

## Acceso al portal de APIs

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación:

<img src={ShivaApi001} />

El acceso a las APIs requiere autenticación. Una vez autenticado, todas las operaciones deben incluir el encabezado __'Authorization'__ con el bearer access token obtenido durante la fase de autenticación.

La URL de los puntos de acceso se indica directamente en __Swagger__ (en el objeto "Servers" de cada página de APIs).

### Explorar la documentación interactiva

El portal de API le permite:

- Consultar todos los endpoints disponibles por módulo
- Probar directamente las solicitudes desde la interfaz
- Ver los modelos de datos (esquemas) para cada recurso
- Consultar los códigos de respuesta posibles para cada endpoint

## Estructura de los endpoints

### Formato de las URLs

Las URLs de la API Cloud Temple siguen una estructura coherente :

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Donde :
- `{module}` : El módulo correspondiente (compute, iam, network, backup, etc.)
- `{version}` : La versión de la API (v1, v2, etc.)
- `{ressource}` : El recurso a manipular (virtual-machines, users, networks, etc.)

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

| Módulo | Descripción | URL base |
|--------|-------------|----------|
| Consola Cloud Temple | Funcionalidades generales | `/api/v1/` |
| Identidad (IAM) | Gestión de usuarios y acceso | `/iam/v1/` |
| IaaS VMware | Recursos de virtualización VMware | `/compute/v1/` |
| OpenIaaS | Recursos de Xen Orchestra | `/openiaas/v1/` |
| S3 | Almacenamiento de objetos | `/s3/v1/` |
| OpenShift | Plataforma PaaS | `/openshift/v1/` |
| Bastión | Dispositivos bastión SSH/RDP | `/bastion/v1/` |
| Red | Gestión de red nivel 2 y 3 | `/network/v1/` |
| Alojamiento | Colocación y housing | `/housing/v1/` |
| Marketplace | Catálogo de soluciones | `/marketplace/v1/` |
| Soporte | Tickets y asistencia | `/support/v1/` |
| Notificación | Sistema de notificaciones | `/notification/v1/` |
| LLMaaS | Inteligencia artificial | `/llmaas/v1/` |

## Las actividades

El seguimiento de las solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se realiza mediante la gestión de actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de la respuesta, bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez recuperado el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity :

<img src={ShivaApi003} />

El contenido de la actividad incluye toda la información esencial para identificar la operación, su fecha de ejecución, así como su estado de avance. A continuación se muestra el modelo de una actividad :

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

El objeto __state__ puede adoptar diferentes formas según el estado de la actividad, a saber:

#### esperando

Estado antes de que comience la operación:

```json
waiting: {}
```

#### en ejecución

Estado cuando la operación está en curso:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### fallido

Estado si la operación falló:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completado

Estado si la operación está finalizada :

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identificador del recurso creado]
El identificador (UUIDv4) del recurso creado está disponible en el resultado de la actividad una vez que esta se haya completado.
:::

## Límites de API

### ¿Por qué límites?

La consola Cloud Temple define __límites en el volumen de solicitudes__ que un usuario puede enviar a la API durante un período determinado. La implementación de estos límites de frecuencia es una medida común en la gestión de APIs, adoptada por varias razones esenciales:

- __Prevención de abusos__ : Estos límites contribuyen a preservar la integridad de la API evitando usos abusivos o torpes que puedan comprometer su funcionamiento.
- __Garantía de la calidad de servicio__ : Al regular el acceso a la API, aseguramos una distribución equitativa de los recursos, permitiendo que todos los usuarios disfruten de una experiencia estable y eficiente.

Tomemos el ejemplo de un script mal diseñado o ineficiente que intenta realizar llamadas repetitivas a la API, lo que podría saturar los recursos y degradar el rendimiento. Estableciendo límites de solicitudes, prevenimos estas situaciones y garantizamos el mantenimiento de __un servicio fluido y sin interrupciones__ para toda nuestra base de clientes.

### ¿Cuáles son los límites de tasa para la API de la consola Cloud Temple?

Aplicamos restricciones cuantitativas a las interacciones de los usuarios con la consola para cada producto.

Los límites se definen en __solicitudes por segundo (r/s) y por IP de origen__. Si se supera el umbral límite, el sistema responderá con un código de error HTTP 429, indicando que se ha excedido el límite de solicitudes permitidas.

A continuación se detallan los límites definidos:

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

Ciertos endpoints de API específicos, en particular los relacionados con la autenticación o acciones sensibles, tienen límites más restrictivos para reforzar la seguridad y garantizar la estabilidad.

| Ruta | Umbral de límite |
|---|---|
| Autenticación (IAM) | 5 r/s |
| IaaS - Almacenamiento (Datastores) | 20 r/s |
| Marketplace (Contacto) | 1 r/min - 5 r/h |

### ¿Cómo funcionan los límites de tasa?

Si el número de solicitudes enviadas a un punto de API supera el límite permitido, el punto de API responderá devolviendo __un código de respuesta HTTP 429__. Este código indica que el usuario ha superado el número de solicitudes permitidas. Cuando esto ocurre, el punto de API también proporcionará un objeto JSON como respuesta, el cual contendrá información detallada sobre la limitación aplicada:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### ¿Cómo evitar realizar demasiadas solicitudes?

Se recomienda limitar el número de llamadas a la API realizadas por su automatización para mantenerse por debajo del límite de tasa establecido para el punto de conexión.

Esta situación suele ocurrir cuando varias solicitudes se ejecutan en paralelo, utilizando varios procesos o hilos.

Existen varias formas de mejorar la eficiencia de su automatización, como utilizar mecanismos de __caché__ y configurar __un sistema de reintento con retroceso exponencial__. Este método consiste en realizar una breve pausa cuando se encuentra un error de límite de tasa y luego volver a intentar la solicitud. Si la solicitud vuelve a fallar, la duración de la pausa se incrementa gradualmente hasta que la solicitud tenga éxito o hasta que se alcance un número máximo de reintentos.

Este enfoque presenta numerosas ventajas:

- El __retroceso exponencial__ garantiza que los primeros intentos se ejecuten rápidamente, mientras que prevé tiempos de espera más largos en caso de fallos repetidos.
- La adición de __una variación aleatoria__ a la pausa ayuda a evitar que todos los intentos se produzcan simultáneamente.

Es importante tener en cuenta que __las solicitudes fallidas no afectan su límite de tasa__. Sin embargo, seguir enviando continuamente una solicitud podría no ser una solución viable a largo plazo, ya que este comportamiento podría modificarse en el futuro. Por lo tanto, le recomendamos no depender exclusivamente de este mecanismo.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ en Python son un buen punto de partida para implementar estrategias de retroceso.

## Ciclo de vida y desuso de endpoints

### Política de desuso

Cloud Temple se compromete a mantener la compatibilidad de su API a lo largo del tiempo. Sin embargo, cuando sea necesario actualizar la API (nuevas funcionalidades, optimizaciones, correcciones de seguridad), algunos endpoints pueden ser descontinuados y posteriormente eliminados.

#### Regla de 3 meses como mínimo

Cuando un endpoint se marca como obsoleto :

1. **Anuncio oficial** : La obsolescencia se anuncia en las notas de versión de la consola
2. **Período de transición** : El endpoint permanece **accesible y funcional durante al menos 3 meses** después del anuncio
3. **Fecha de eliminación** : Se comunica una fecha concreta de eliminación definitiva desde el anuncio
4. **Alternativa documentada** : El nuevo endpoint de reemplazo está documentado y disponible

Esta regla de 3 meses le da el tiempo necesario para adaptar su código y migrar a los nuevos endpoints.

### ¿Cómo identificar un endpoint obsoleto?

#### En el portal de API (Swagger)

Los endpoints descontinuados aparecen tachados en la documentación de Swagger :


~~POST /v1/ancien/endpoint~~

La descripción del endpoint incluye :
- La fecha de anuncio de la descontinuación
- La fecha prevista de eliminación
El endpoint de reemplazo recomendado

<img src={ShivaApi004} />

### Buenas prácticas para gestionar las descontinuaciones

1. **Supervisa las funcionalidades descontinuadas** : Consulta regularmente las funcionalidades descontinuadas en la consola para estar informado sobre las descontinuaciones próximas.

2. **Planifica tus migraciones** : Tan pronto como se anuncie una descontinuación, planifica la migración de tu código al nuevo endpoint en un plazo de 3 meses.

3. **Prueba los nuevos endpoints** : Prueba los nuevos endpoints tan pronto como estén disponibles, incluso durante el período de transición.

4. **Documenta tus dependencias** : Mantén una lista de los endpoints que utiliza tu aplicación para facilitar las migraciones futuras.

## Buenas prácticas

### Seguridad de los tokens

:::danger[Reglas de seguridad esenciales]
- 🚫 Nunca expongas tus tokens en código versionado (Git, etc.)
- 🔐 Utiliza variables de entorno para almacenar los tokens
- 🎯 Crea tokens con permisos mínimos (principio de mínimo privilegio)
- 🔄 Renueva regularmente tus tokens (máximo 12 meses)
- ⚠️ Revoca inmediatamente cualquier token comprometido
:::

### Gestión de errores

Gestione siempre los errores HTTP en su código. Preste especial atención a los siguientes códigos:

| Código | Descripción | Acción recomendada |
|------|-------------|-------------------|
| **401** Unauthorized | Token expirado o inválido | Reautenticar con su PAT |
| **403** Forbidden | Permisos insuficientes | Verificar los permisos del token |
| **429** Too Many Requests | Límite de tasa alcanzado | Esperar antes de reintentar (backoff) |
| **500/503** Server Error | Error de servidor temporal | Reintentar más tarde |

### Optimización de las llamadas a la API
- Utilizar paginación para listas grandes
- Almacenar en caché los datos que cambian con poca frecuencia
- Utilizar filtros para limitar los datos devueltos
- Agrupar operaciones cuando sea posible
- Supervisar el estado de las operaciones asíncronas en lugar de realizar polling intensivo

### Reintentos con backoff exponencial

Para gestionar errores temporales o el rate limiting (HTTP 429), implemente una estrategia de reintentos con backoff exponencial:

:::tip[Estrategia de reintentos recomendada]
- ⏱️ **Espera progresiva** : 1s, 2s, 4s, 8s...
- 🎲 **Variación aleatoria** : Evita que todos los clientes reintenten simultáneamente
- 🔄 **Límite de intentos** : Máximo 3-5 intentos
- 📚 **Bibliotecas de Python** : [Backoff](https://pypi.org/project/backoff/) o [Tenacity](https://pypi.org/project/tenacity/)
:::