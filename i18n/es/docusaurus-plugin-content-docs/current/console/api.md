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
import ShivaApi004 from './images/shiva_api_004.jpg'

## Claves API

La __clave API__ permite autenticarse cuando desea realizar solicitudes a la API. La generación de una clave API, también llamada __Personal Access Token (PAT)__,
es una forma segura de conectarse a las APIs de Shiva sin pasar por una interfaz gráfica. Cada uno de estos tokens está vinculado a un tenant y al usuario que lo creó.

La creación de este token se realiza desde su cuenta. Es posible generar varias claves y configurar para cada una los permisos dentro de los límites de sus derechos.

Para crear una clave API, simplemente __haga clic en su perfil__:

<img src={ShivaProfil001} />

En el menú del perfil, haga clic en __'Token de acceso personal'__

<img src={ShivaProfil003} />

A continuación, verá en pantalla todas las claves API que han sido creadas para este usuario en este tenant. Haga clic en __'Nuevo token de acceso personal'__

<img src={ShivaProfil002} />

Luego debe:

- Indicar el nombre de este nuevo token,
- Indicar una fecha de expiración (máximo 12 meses de validez),
- Elegir los permisos asociados al token.

Los detalles sobre su token se mostrarán a continuación. __Atención, no será posible acceder a ellos posteriormente.__

Si no anota esta información, deberá destruir y recrear el token.

<img src={ShivaProfil004} />

Por razones de seguridad, se recomienda crear varios tokens, cada uno con una utilidad específica (un token para cada aplicación o cada proceso de negocio) en lugar de crear un token con todos los derechos.

Luego verá el nuevo token creado y su futura fecha de expiración.

<img src={ShivaProfil005} />

## Acceso al portal API

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación:

<img src={ShivaApi001} />

El acceso a las APIs requiere autenticación. Una vez autenticado, todas las operaciones deben tener el encabezado
__'Authorization'__ con el token de acceso bearer obtenido durante la fase de autenticación.

La URL de los puntos de acceso se proporciona directamente en __Swagger__ (en el objeto "Servers" de cada página de las APIs).

## Las actividades

El seguimiento de solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se realiza a través de la gestión de actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de la respuesta, bajo la clave 'Location'.

<img src={ShivaApi002} />

Una vez recuperado el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity:

<img src={ShivaApi003} />

El contenido de la actividad incluye toda la información esencial para identificar la operación, su fecha de ejecución, así como su estado de avance. A continuación se presenta el modelo de una actividad:

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

El objeto **state** puede tomar diferentes formas según el estado de la actividad, a saber:

**waiting**, estado antes de que la operación haya comenzado:
```
    waiting: {}
```
**running**, estado cuando la operación está en curso:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, estado si la operación ha fallado:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, estado si la operación ha terminado:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Nota: el Identificador (UUIDv4) del recurso creado está disponible en el resultado de la actividad una vez que se haya completado.**

## Límites de la API

### ¿Por qué límites?

La consola Cloud Temple define __límites en el volumen de solicitudes__ que un usuario puede enviar a la API en un período determinado. La implementación de estos límites de frecuencia es una medida común en la gestión de API, adoptada por varias razones esenciales:

- **Prevención de abusos**: Estos límites ayudan a proteger la integridad de la API previniendo usos abusivos o descuidados que podrían comprometer su funcionamiento.
- **Garantía de calidad de servicio**: Regulando el acceso a la API, nos aseguramos de una distribución equitativa de los recursos, permitiendo a todos los usuarios disfrutar de una experiencia estable y de alto rendimiento.

Tomemos como ejemplo un script mal diseñado o ineficaz que intenta realizar llamadas repetitivas a la API, arriesgándose a saturar los recursos y deteriorar el rendimiento. Al establecer límites de solicitudes, prevenimos estas situaciones y aseguramos el mantenimiento de __un servicio fluido e ininterrumpido__ para todos nuestros clientes.

### ¿Cuáles son los límites de tasa para la API de la consola Cloud Temple?

Aplicamos restricciones cuantitativas sobre las interacciones de los usuarios con la consola para cada producto.

Los límites se definen en __solicitudes por segundos (r/s) y por IP de origen__. Más allá del umbral límite, el sistema responderá con un código de error HTTP 429, indicando que se ha superado el límite de solicitudes permitidas.

Estos son los límites definidos:

| Producto              | Umbral límite |
|----------------------|---------------|
| Consola Cloud Temple | 60 r/s        |
| Identidad (IAM)      | 60 r/s        |
| IaaS - Cálculo       | 60 r/s        |
| IaaS - Almacenamiento| 20 r/s        |
| IaaS - Respaldo      | 60 r/s        |
| PaaS - S3            | 60 r/s        |
| PaaS - Openshift     | 60 r/s        |
| Red                  | 60 r/s        |
| Alojamiento          | 60 r/s        |

### ¿Cómo funcionan los límites de tasa?

Si el número de solicitudes enviadas a un endpoint de API excede el límite permitido, el endpoint de API reaccionará devolviendo
__un código de respuesta HTTP 429__. Este código indica que el usuario ha superado el número de solicitudes permitidas.
Cuando esto ocurre, el endpoint de API también proporcionará un objeto JSON como respuesta, que contendrá información detallada sobre la limitación aplicada:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### ¿Cómo evitar realizar demasiadas solicitudes?

Se recomienda limitar el número de llamadas a la API realizadas por su automatización para mantenerlo por debajo del límite de tasa establecido para el endpoint.

Esto ocurre a menudo cuando se ejecutan varias solicitudes en paralelo, utilizando varios procesos o hilos.

Existen varias maneras de mejorar la eficiencia de su automatización, incluyendo el uso de mecanismos de __caché__ y la implementación de __un sistema de repetición con retroceso progresivo__. Este método consiste en realizar una breve pausa cuando se encuentra un error de límite de tasa, y luego volver a intentar la solicitud. Si la solicitud falla nuevamente, la duración de la pausa aumenta gradualmente hasta que la solicitud tenga éxito o se alcance un número máximo de intentos.

Este enfoque presenta muchas ventajas:

- __El retroceso progresivo__ garantiza que los primeros intentos se realicen rápidamente, mientras que se prevén pausas más prolongadas en caso de fallos repetidos.
- La adición de __una variación aleatoria__ a la pausa ayuda a evitar que todos los intentos ocurran simultáneamente.

Es importante tener en cuenta que __las solicitudes fallidas no afectan su límite de tasa__. Sin embargo, reenviar continuamente una solicitud puede no ser una solución viable a largo plazo, ya que este comportamiento podría cambiar en el futuro. Por lo tanto, recomendamos no depender exclusivamente de este mecanismo.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ en Python son buenos puntos de partida para implementar estrategias de retroceso.

## Ciclo de vida de un endpoint de API

La información sobre la evolución de los endpoints de la API está disponible en las notas de actualización:

<img src={ShivaApi004} />

Encontrará la lista de endpoints que están obsoletos actividad por actividad.

Además, los endpoints obsoletos aparecerán de esta manera en nuestras API:
__~~this/is/an/endpoint~~__ junto con una fecha de eliminación definitiva en la descripción.
