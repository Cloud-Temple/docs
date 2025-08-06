---
title: Documentación de la API
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

## Claves API

La __clave API__ permite autenticarse cuando se desean realizar solicitudes a la API. La generación de una clave API, también llamada __Personal Access Token (PAT)__,
es una manera segura de conectarse a las APIs Shiva sin pasar por una interfaz gráfica. Cada uno de estos tokens está vinculado a un inquilino y al usuario que lo creó.

La creación de este token se realiza desde su cuenta. Es posible generar varias claves y configurar los permisos para cada una dentro de sus derechos.

Para crear una clave API, basta con __hacer clic en su perfil__ :

<img src={ShivaProfil001} />

En el menú del perfil, haga clic en __'Token de acceso personal'__

<img src={ShivaProfil003} />

En la pantalla, verá todos los tokens API creados para este usuario en este inquilino. Haga clic en __'Nuevo token de acceso personal'__

<img src={ShivaProfil002} />

Debe indicar entonces:

- El nombre de este nuevo token,
- La fecha de expiración (máximo 12 meses de validez),
- Las permisos asociados al token.

Los detalles de su token se muestran a continuación. __Atención, ya no será posible acceder a ellos posteriormente.__

Si no anota esta información, deberá destruir y recrear el token.

<img src={ShivaProfil004} />

Por cuestiones de seguridad, se recomienda crear varios tokens con cada uno una utilidad específica (un token por cada aplicación o proceso empresarial) en lugar de crear un token con todos los derechos.

Verá a continuación el nuevo token creado y su fecha de expiración futura.

<img src={ShivaProfil005} />

## Acceso al portal de la API

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación :

<img src={ShivaApi001} />

El acceso a las APIs requiere autenticación. Una vez autenticado, todas las operaciones deben tener el encabezado
__'Authorization'__ con el token de acceso bearer obtenido en la fase de autenticación.

La URL de los puntos de acceso se proporciona directamente en __Swagger__ (en el objeto "Servers" de cada página de APIs).

## Las actividades

El seguimiento de las solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se realiza a través de la gestión de actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de la respuesta, bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez obtenido el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity :

<img src={ShivaApi003} />

El contenido de la actividad incluye todas las informaciones esenciales para identificar la operación, su fecha de ejecución, así como su estado de avance. Aquí está el modelo de una actividad :

```
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

El objeto __state__ puede tomar diferentes formas según el estado de la actividad, a saber :

__waiting__, estado antes de que la operación comience :

```
    waiting: {}
```
__running__, estado cuando la operación está en curso :

```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
__failed__, estado si la operación falló :

```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
__completed__, estado si la operación finalizó :

```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

__Nota: El identificador (UUIDv4) de la recurso creado está disponible en el resultado de la actividad una vez completada.__

## Límites de la API

### ¿Por qué límites?

La consola Cloud Temple establece __límites en el volumen de solicitudes__ que un usuario puede enviar a la API durante un período determinado. La implementación de estos límites de frecuencia es una medida común en la gestión de APIs, adoptada por varios motivos esenciales:

- __Prevención de abusos__: Estos límites contribuyen a preservar la integridad de la API evitando usos abusivos o inadecuados que puedan comprometer su funcionamiento.
- __Garantía de calidad del servicio__: Al regular el acceso a la API, garantizamos una distribución equitativa de los recursos, permitiendo así que todos los usuarios disfruten de una experiencia estable y eficiente.

Tomemos como ejemplo un script mal diseñado o ineficiente que intenta llamadas repetidas a la API, arriesgando saturar los recursos y degradar el rendimiento. Estableciendo límites de solicitudes, prevenimos estas situaciones y aseguramos el mantenimiento de __un servicio fluido e ininterrumpido__ para toda nuestra clientela.

### ¿Cuáles son los límites de tasa para la API de la consola Cloud Temple?

Aplicamos restricciones cuantitativas en las interacciones de los usuarios con la consola para cada producto.

Los límites están definidos en __solicitudes por segundo (r/s) y por IP de origen__. Más allá del límite, el sistema responderá con un código de error HTTP 429, indicando que se ha superado el límite de solicitudes permitidas.

Estos son los límites definidos:

| Producto              | Límite máximo |
|----------------------|---------------|
| Consola Cloud Temple | 60 r/s        |
| Identidad (IAM)      | 60 r/s        |
| IaaS - Cálculo       | 60 r/s        |
| IaaS - Almacenamiento| 20 r/s        |
| IaaS - Backup        | 60 r/s        |
| PaaS - S3            | 60 r/s        |
| PaaS - Openshift     | 60 r/s        |
| Redes                | 60 r/s        |
| Alojamiento          | 60 r/s        |

### ¿Cómo funcionan los límites de tasa?

Si el número de solicitudes enviadas a un punto de API excede el límite permitido, el punto de API responderá devolviendo
__un código de respuesta HTTP 429__. Este código indica que el usuario ha superado el número de solicitudes permitidas.
Cuando ocurre esto, el punto de API también proporcionará un objeto JSON como respuesta,
el cual contendrá información detallada sobre la limitación aplicada:

```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```

### ¿Cómo evitar realizar demasiadas solicitudes?

Se recomienda limitar el número de llamadas a la API realizadas por su automatización para permanecer por debajo del límite de tasa definido para el punto de terminación.

Esta situación ocurre con frecuencia cuando se ejecutan varias solicitudes en paralelo,
utilizando varios procesos o hilos.

Existen varios medios para mejorar la eficiencia de su automatización, incluyendo el uso de mecanismos
de __caché__ y la implementación de __un sistema de reintentos con reducción progresiva__. Este método consiste
en realizar una breve pausa cuando se encuentra un error de límite de tasa, y luego intentar nuevamente la solicitud.
Si la solicitud falla nuevamente, la duración de la pausa aumenta progresivamente hasta que la solicitud tenga éxito
o hasta que se alcance un número máximo de reintentos.

Esta aproximación tiene muchos beneficios:

- __La reducción progresiva__ garantiza que las primeras intentos se ejecuten rápidamente, mientras que se prevén tiempos más largos en caso de fallos repetidos.
- La adición de __una variación aleatoria__ a la pausa ayuda a evitar que todos los intentos ocurran simultáneamente.

Es importante tener en cuenta que __las solicitudes fallidas no afectan su límite de tasa__.
Sin embargo, enviar continuamente una solicitud podría no ser una solución viable a largo plazo,
ya que este comportamiento podría modificarse en el futuro. Por lo tanto, le recomendamos no depender exclusivamente de este mecanismo.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ en Python
son buenos puntos de partida para implementar estrategias de reducción.

## Ciclo de vida de un endpoint de API

La información sobre la evolución de los endpoints de la API está disponible en las notas de actualización:

<img src={ShivaApi004} />

Encontrará la lista de endpoints que están obsoletos, actividad por actividad.

Además, los endpoints obsoletos aparecerán de la siguiente manera en nuestras APIs:
__~~this/is/an/endpoint~~__ así como una fecha de eliminación definitiva en la descripción.