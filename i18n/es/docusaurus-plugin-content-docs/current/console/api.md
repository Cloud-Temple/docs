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

La __clave API__ permite autenticarse cuando desea realizar solicitudes a la API. La generación de una clave API, también conocida como __Personal Access Token (PAT)__, es una forma segura de conectarse a las API de Shiva sin necesidad de usar una interfaz gráfica. Cada uno de estos tokens está vinculado a un inquilino y al usuario que lo creó.

La creación de este token se realiza desde su cuenta. Es posible generar varias claves y configurar los permisos para cada una, dentro de los límites de sus derechos.

Para crear una clave API, simplemente __haga clic en su perfil__:

<img src={ShivaProfil001} />

En el menú del perfil, haga clic en __'Token de acceso personal'__.

<img src={ShivaProfil003} />

A continuación, verá en pantalla el conjunto de claves API que han sido creadas para este usuario en este inquilino. Haga clic en __'Nuevo token de acceso personal'__.

<img src={ShivaProfil002} />

A continuación, deberá:

- Indicar el nombre de este nuevo token,
- Establecer una fecha de caducidad (máximo 12 meses de validez),
- Seleccionar los permisos asociados al token.

A continuación, se mostrarán los detalles de su token. __Atención, ya no será posible acceder a esta información posteriormente.__

Si no anota esta información, deberá destruir y volver a crear el token.

<img src={ShivaProfil004} />

Por razones de seguridad, se recomienda crear varios tokens, cada uno con una función específica (un token para cada aplicación o proceso empresarial), en lugar de crear un solo token con todos los permisos.

A continuación, verá el nuevo token creado y su fecha futura de caducidad.

<img src={ShivaProfil005} />

## Acceso al portal de API

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación:

<img src={ShivaApi001} />

El acceso a las APIs requiere autenticación. Una vez autenticado, todas las operaciones deben incluir el encabezado  
__'Authorization'__ con el token de acceso portador obtenido durante la fase de autenticación.

La URL de los puntos de acceso se proporciona directamente en __Swagger__ (en el objeto "Servers" de cada página de APIs).

## Actividades

El seguimiento de las solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se realiza a través de la gestión de actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de la respuesta, bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez obtenido el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity:

<img src={ShivaApi003} />

El contenido de la actividad incluye todas las informaciones esenciales para identificar la operación, su fecha de ejecución, así como su estado de avance. A continuación se muestra el modelo de una actividad:

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

El objeto __state__ puede tomar diferentes formas según el estado de la actividad, a saber:

__waiting__, estado antes de que la operación haya comenzado:

```
    waiting: {}
```
__running__, estado cuando la operación está en curso:

```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
__failed__, estado si la operación ha fallado:

```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
__completed__, estado si la operación ha finalizado:

```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

__Nota: el identificador (UUIDv4) del recurso creado está disponible en el resultado de la actividad una vez que esta ha finalizado.__

## Límites de la API

### ¿Por qué límites?

La consola Cloud Temple establece __límites en el volumen de solicitudes__ que un usuario puede enviar a la API durante un período determinado. La implementación de estos límites de frecuencia es una medida común en la gestión de APIs, adoptada por varios motivos esenciales:

- __Prevención de abusos__: Estos límites contribuyen a proteger la integridad de la API al prevenir usos indebidos o inadecuados que podrían comprometer su funcionamiento.
- __Garantía de calidad de servicio__: Al regular el acceso a la API, aseguramos una distribución equitativa de los recursos, permitiendo que todos los usuarios disfruten de una experiencia estable y eficiente.

Tomemos como ejemplo un script mal diseñado o ineficiente que realiza llamadas repetidas a la API, con riesgo de saturar los recursos y degradar el rendimiento. Al establecer umbrales de solicitudes, prevenimos estas situaciones y garantizamos el mantenimiento de un __servicio fluido e ininterrumpido__ para toda nuestra clientela.

### ¿Cuáles son los límites de tasa para la API de la consola Cloud Temple?

Aplicamos restricciones cuantitativas sobre las interacciones de los usuarios con la consola  
para cada producto.

Los límites están definidos en __consultas por segundo (r/s) y por dirección IP de origen__. Más allá del umbral límite, el sistema responderá  
con un código de error HTTP 429, indicando que se ha superado el límite de consultas permitidas.

A continuación se indican los límites establecidos:

| Producto | Umbral límite |
|---|---|
| Consola Cloud Temple | 25 r/s |
| Identidad (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| Openshift | 25 r/s |
| Bastion | 25 r/s |
| Red | 25 r/s |
| Alojamiento | 25 r/s |
| Marketplace | 25 r/s |
| Soporte | 25 r/s |
| Notificación | 25 r/s |
| LLMaaS | 25 r/s |

### Specific routes

Certain specific API endpoints, particularly those related to authentication or sensitive actions, have more restrictive limits to enhance security and ensure stability.

| Route | Limit threshold |
|---|---|
| Authentication (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### ¿Cómo funcionan los límites de tasa?

Si el número de solicitudes enviadas a un punto de API supera el límite permitido, el punto de API responderá devolviendo  
__un código de respuesta HTTP 429__. Este código indica que el usuario ha excedido el número de solicitudes permitidas.  
Cuando esto ocurre, el punto de API también proporcionará un objeto JSON como respuesta,  
que contendrá información detallada sobre la limitación aplicada:

```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```

### ¿Cómo evitar realizar demasiadas solicitudes?

Se recomienda limitar el número de llamadas a la API realizadas por su automatización para permanecer por debajo del límite de tasa establecido para el punto final.

Esta situación suele ocurrir cuando se ejecutan varias solicitudes en paralelo, utilizando varios procesos o hilos.

Existen varios métodos para mejorar la eficiencia de su automatización, incluyendo el uso de mecanismos de __almacenamiento en caché__ y la implementación de un __sistema de reintento con amortiguación progresiva__. Este método consiste en realizar una breve pausa cuando se encuentra un error de límite de tasa, y luego intentar nuevamente la solicitud. Si la solicitud falla nuevamente, la duración de la pausa se aumenta progresivamente hasta que la solicitud tenga éxito o se alcance un número máximo de intentos.

Esta aproximación ofrece numerosas ventajas:

- La __amortiguación progresiva__ garantiza que los primeros intentos se realicen rápidamente, mientras que prevé tiempos de espera más largos en caso de fallos repetidos.
- La adición de una __variación aleatoria__ a la pausa ayuda a evitar que todos los intentos se produzcan simultáneamente.

Es importante tener en cuenta que las __solicitudes fallidas no afectan su límite de tasa__. Sin embargo, reenviar continuamente una solicitud podría no ser una solución viable a largo plazo, ya que este comportamiento podría modificarse en el futuro. Por ello, le recomendamos no depender exclusivamente de este mecanismo.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ en Python son buenos puntos de partida para implementar estrategias de amortiguación.

## Lifecycle of an API endpoint

Information about the evolution of API endpoints is available in the release notes:

<img src={ShivaApi004} />

You will find the list of endpoints that are deprecated, organized by activity.

Additionally, deprecated endpoints will appear in our API as follows:  
__~~this/is/an/endpoint~~__ along with a definitive deletion date in the description.