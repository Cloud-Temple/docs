---
title: Documentación API
---

import ShivaProfil001 from './images/shiva_profil_001.png'
import ShivaProfil002 from './images/shiva_profil_002.png'
import ShivaProfil003 from './images/shiva_profil_003.png'
import ShivaProfil004 from './images/shiva_profil_004.png'
import ShivaProfil005 from './images/shiva_profil_005.png'
import ShivaApi001 from './images/shiva_api_001.png'
import ShivaApi002 from './images/shiva_api_002.png'
import ShivaApi003 from './images/shiva_api_003.png'
import ShivaApi004 from './images/shiva_api_004.png'

## API Keys

The __API Key__, also known as a __Personal Access Token (PAT)__, is the method to authenticate yourself when making requests to the Shiva API. Generating an API key, securely connecting to Shiva's APIs without using a graphical interface, involves creating a unique token linked to both your tenant and user account.

You can generate multiple keys for each user within their tenant, with the ability to configure permissions for each according to your access rights.

To create an API key, simply:

1. Click on your profile:

   <img src={ShivaProfil001} />

2. Navigate to the 'Personal Access Token' option in the profile menu:

   <img src={ShivaProfil003} />

You'll then see a list of all API keys created for this user within this tenant. Click on 'New Personal Access Token':

   <img src={ShivaProfil002} />

You will need to:

- Provide a name for the new token,
- Set an expiration date (maximum 12 months validity),
- Select the permissions associated with the token.

The details of your token will then be displayed. **Note**: You cannot view these after creation.

If you forget these details, you'll need to destroy and regenerate the token.

<img src={ShivaProfil004} />

For security reasons, it's advisable to create several tokens with specific purposes (one for each application or business process) rather than using one token with all permissions.

You will then see your newly created token and its upcoming expiration date:

   <img src={ShivaProfil005} />

## Acceso al portal API

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación:

<img src={ShivaApi001} />

El acceso a las APIs requiere estar autenticado. Una vez autenticado, todas las operaciones deben tener el encabezado __'Authorization'__ con el token de acceso bearer obtenido durante la fase de autenticación.

La URL de los puntos de acceso se indica directamente en __Swagger__ (en el objeto "Servers" de cada página de APIs).

## Actividades

El control de las solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se realiza a través del gestor de actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de la respuesta, bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez obtenido el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Actividad:

<img src={ShivaApi003} />

El contenido de la actividad incluye todas las informaciónes esenciales para identificar la operación, su fecha de ejecución, así como su estado de avance. Aquí hay un modelo básico de actividad:

```json
{
    "tenantId": "UUIDV4",
    "description": "STRING",
    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
    "tags": "STRING[]",
    "initiator": "UUIDV4",
    "concernedItems": [
        {
        "type": "string",
        "id": "string"
        }
    ],
    "id": "UUIDV4",
    "creationDate": "DATE",
    "operationType": "read" | "write",
    "state": "CompletedState | RunningState | WaitingState | FailedState"
}
```

El objeto __estado__ puede tomar diferentes formas dependiendo del estado de la actividad, a saber:

__waiting__, el estado previo a que comience la operación:

```json
waiting: {}
```

__running__, el estado cuando la operación está en marcha:

```json
running: {
    status: string;
    startDate: Date;
    progression: number;
}
```

__failed__, el estado si la operación falló:

```json
failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
}
```

__completed__, el estado si la operación terminó:

```json
completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
}
```

__Nota: El identificador (UUIDv4) de la recurso creada está disponible en los resultados de la actividad una vez completada.__

## Límites de la API

### ¿Por qué hay límites?

La consola de Cloud Temple define __límites sobre el volumen de solicitudes__ que un usuario puede dirigir a la API durante un período determinado. La instauración de estos límites de frecuencia es una medida común en la gestión de APIs, adoptada por varias razones esenciales:

- __Prevención de abusos__: Estos límites contribuyen a salvaguardar la integridad de la API al prevenir usos abusivos o torpes que puedan comprometer su funcionamiento.
- __Garantía de la calidad del servicio__: Al regular el acceso a la API, aseguramos una distribución equitativa de los recursos, permitiendo así que todos los usuarios se beneficien de una experiencia estable y de alto rendimiento.

Tomemos el ejemplo de un script mal diseñado o ineficaz que intenta realizar llamadas repetitivas a la API, con el riesgo de saturar los recursos y degradar el rendimiento. Al establecer umbrales de solicitudes, prevenimos estas situaciones y aseguramos el mantenimiento de __un servicio fluido y sin interrupciones__ para toda nuestra clientela.

### ¿Cuáles son los límites de tasa para la API de la consola de Cloud Temple?

Aplicamos restricciones cuantitativas a las interacciones de los usuarios con la consola para cada producto.

Los límites se definen en __solicitudes por segundo (s/s) y por IP de origen__. Más allá del umbral límite, el sistema responderá con un código de error HTTP 429, señalando que se ha superado el límite de solicitudes autorizadas.

Aquí están los límites definidos:

| Producto | Límite |
|---|---|
| Consola de Cloud Temple | 25 s/s |
| Identidad (IAM) | 25 s/s |
| IaaS VMware | 25 s/s |
| OpenIaaS | 25 s/s |
| S3 | 25 s/s |
| OpenShift | 25 s/s |
| Bastion | 25 s/s |
| Red | 25 s/s |
| Alojamiento | 25 s/s |
| Marketplace | 25 s/s |
| Soporte | 25 s/s |
| Notificación | 25 s/s |
| LLMaaS | 25 s/s |

### Rutas específicas

Ciertos puntos finales de la API específicos, especialmente los relacionados con la autenticación o acciones sensibles, tienen límites más restrictivos para reforzar la seguridad y garantizar la estabilidad.

| Ruta | Límite |
|---|---|
| Autenticación (IAM) | 5 s/s |
| IaaS - Almacenamiento (Datastores) | 20 s/s |
| Marketplace (Contacto) | 1 s/min - 5 s/h |

### ¿Cómo funcionan las tasas de límite?

Si el número de solicitudes enviadas a un punto de API supera la limitación autorizada, el punto de API responderá con un código de respuesta HTTP 429. Este código indica que el usuario ha excedido el número de consultas permitidas. Además, el punto de API proporcionará un objeto JSON como respuesta, que contendrá información detallada sobre la limitación aplicada:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

### Cómo evitar hacer demasiadas solicitudes

Se recomienda limitar el número de llamadas a API realizadas por tu automatización para mantenerte por debajo de la tasa máxima permitida en el punto final.

Esta situación ocurre frecuentemente cuando se ejecutan varias solicitudes simultáneamente, utilizando múltiples procesos o hilos.

Existen diversas formas de mejorar la eficiencia de tu automatización, como el uso de mecanismos de __método de caché__ y la implementación de un sistema de reintento con atenuación progresiva. Esta estrategia consiste en realizar una breve pausa cuando se encuentra una limitación de tasa, luego volver a intentar la solicitud. Si la solicitud falla nuevamente, la duración de la pausa se incrementará progresivamente hasta que la solicitud sea exitosa o alcanzarse un número máximo de reintentos.

Este enfoque ofrece varios beneficios:

- La __atenuación progresiva__ asegura que las primeras tentativas se realicen rápidamente, mientras que los tiempos de espera se incrementan en caso de errores repetidos.
- La incorporación de una __variación al azar__ en la pausa contribuye a evitar que todas las tentativas ocurran simultáneamente.

Es crucial destacar que las solicitudes fallidas no afectan tu tasa máxima. Sin embargo, reenviar continuamente una solicitud no es una solución viable a largo plazo, ya que este comportamiento podría ser modificado en el futuro. Por lo tanto, se recomienda no depender exclusivamente de este mecanismo.

Las bibliotecas __Backoff__ ([https://pypi.org/project/backoff/](https://pypi.org/project/backoff/)) y __Tenacity__ ([https://pypi.org/project/tenacity/](https://pypi.org/project/tenacity/)) en Python son buenas opciones para implementar estrategias de atenuación.

## Ciclo de vida de un endpoint API

Las informaciónes sobre la evolución de los endpoints de la API se encuentran en las notas de actualizaciones:

<img src={ShivaApi004} />

Encontrará la lista de endpoints que están obsoletos activamente, por actividad.

Además, los endpoints que están obsoletos aparecen de tal manera en nuestras APIs como:
__~~this/is/an/endpoint~~__ junto con una fecha de eliminación definitiva en la descripción.
