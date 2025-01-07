---
title: Documentation API 
---

## Clés API

La __clave API__ permite autenticarse cuando desea hacer solicitudes en la API. La generación de una clave API, también llamada __Personal Access Token (PAT)__,
es una manera segura de conectarse a las API de Shiva sin pasar por una interfaz gráfica. Cada uno de estos tokens está relacionado con un tenant y con el usuario que lo creó.

La creación de este token se realiza desde su cuenta. Es posible generar varias claves y configurar para cada una de ellas los permisos dentro del límite de sus derechos.

Para crear una clave API, basta con __hacer clic en su perfil__ :

![](images/shiva_profil_001.png)

En el menú del perfil, haga clic en __'Token de acceso personal'__

![](images/shiva_profil_003.png)

En la pantalla verá todas las claves API que se han creado para ese usuario en ese tenant. Haga clic en __'Nuevo token de acceso personal'__

![](images/shiva_profil_002.png)

Debe entonces:

- Indicar el nombre de este nuevo token,
- Indicar una fecha de expiración (máximo 12 meses de validez),
- Elegir los permisos asociados al token.

Los detalles sobre su token se mostrarán entonces en pantalla. __Atención, no será posible acceder a ellos posteriormente.__

Si no toma nota de esta información, deberá destruir y recrear el token.

![](images/shiva_profil_004.png)

Por razones de seguridad, se recomienda crear varios tokens, cada uno con una utilidad específica (un token para cada aplicación o cada proceso de negocio) en lugar de crear 1 token con todos los derechos.

Luego verá el nuevo token creado y su futura fecha de expiración.

![](images/shiva_profil_005.png)

## Acceso al portal API

La documentación OpenAPI 3.0 (Swagger) de las APIs de la consola Cloud Temple está disponible directamente en la aplicación:

![](images/shiva_api_001.png)

El acceso a las APIs requiere autenticación. Una vez autenticado, todas las operaciones deben tener el encabezado
__'Authorization'__ con el bearer access token obtenido durante la fase de autenticación.

La URL de los puntos de acceso se proporciona directamente en __Swagger__ (en el objeto "Servers" de cada página de APIs).

## Las actividades

El seguimiento de solicitudes de tipo escritura (POST, PUT, PATCH, DELETE) se asegura a través de la gestión de actividades. Cada solicitud de este tipo genera automáticamente una actividad asociada. Un código de estado HTTP 201 confirma la creación exitosa de la actividad. El identificador único de esta actividad se devuelve en los encabezados de la respuesta, bajo la clave 'Location'.

![](images/shiva_api_002.png)

Una vez recuperado el identificador, es posible acceder a los detalles de la actividad utilizando la API del módulo Activity:

![](images/shiva_api_003.png)

El contenido de la actividad incluye toda la información esencial para identificar la operación, su fecha de ejecución, así como su estado de avance. Aquí está el modelo de una actividad:

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
**failed**, estado si la operación falló:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, estado si la operación está finalizada:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```
**Nota: el Identificador (UUIDv4) del recurso creado está disponible en el resultado de la actividad una vez que esta se ha completado.**

## Límites API

### ¿Por qué límites?

La consola Cloud Temple define __techos en el volumen de solicitudes__ que un usuario puede enviar
a la API en un periodo determinado. La instauración de estos techos de frecuencia es una medida común en la gestión de API, adoptada por varias razones esenciales:

- **Prevención del abuso**: Estos límites ayudan a proteger la integridad de la API al prevenir usos
abusivos o desacertados que podrían comprometer su funcionamiento.
- **Garantizar la calidad del servicio**: Al regular el acceso a la API, aseguramos una distribución equitativa
de los recursos, permitiendo así que todos los usuarios disfruten de una experiencia estable y de alto rendimiento.

Tomemos como ejemplo un script mal diseñado o ineficiente que intenta llamadas repetitivas a la API,
arriesgando saturar los recursos y degradar el rendimiento. Al establecer límites de solicitudes,
prevenimos estas situaciones y aseguramos el mantenimiento de __un servicio fluido y sin interrupciones__ para todos nuestros clientes.

### ¿Cuáles son los límites de tasa para la API de la consola Cloud Temple?

Aplicamos restricciones cuantitativas en las interacciones de los usuarios con la consola
para cada producto.

Los límites están definidos en __solicitudes por segundo (r/s) y por IP de origen__. Al superar el umbral límite, el sistema responderá
con un código de error HTTP 429, indicando que el límite de solicitudes permitidas ha sido excedido.

Aquí están los límites definidos:

| Producto             | Umbral límite |
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

Si el número de solicitudes enviadas a un punto de API excede el límite permitido, el punto de API responderá devolviendo
__un código de respuesta HTTP 429__. Este código indica que el usuario ha excedido el número de solicitudes permitidas.
Cuando esto ocurre, el punto de API también proporcionará un objeto JSON en respuesta,
que contendrá información detallada sobre la limitación aplicada:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### ¿Cómo evitar hacer demasiadas solicitudes?

Se recomienda limitar la cantidad de llamadas API realizadas por su automatización para permanecer por debajo
del límite de tasa establecido para el punto de terminación.

Esta situación ocurre a menudo cuando se ejecutan varias solicitudes en paralelo,
utilizando múltiples procesos o hilos.

Existen varias formas de mejorar la eficiencia de su automatización, como utilizar mecanismos
de __caching__ y establecer __un sistema de reintento con atenuación progresiva__. Este método consiste
en tomar una breve pausa cuando se encuentra un error de límite de tasa y luego volver a intentar la solicitud.
Si la solicitud falla nuevamente, la duración de la pausa se aumenta progresivamente hasta que la solicitud sea exitosa
o hasta que se alcance un número máximo de reintentos.

Este enfoque tiene muchas ventajas:

- __La atenuación progresiva__ asegura que los primeros intentos se realicen rápidamente, mientras que se prevén retrasos más largos en caso de fallos repetidos.
- La adición de __una variación aleatoria__ en la pausa ayuda a evitar que todos los intentos ocurran simultáneamente.

Es importante notar que __las solicitudes fallidas no afectan a su límite de tasa__.
Sin embargo, reenviar continuamente una solicitud podría no ser una solución viable a largo plazo,
ya que este comportamiento podría cambiar en el futuro. Por lo tanto, le recomendamos que no dependa exclusivamente de este mecanismo.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ y __[Tenacity](https://pypi.org/project/tenacity/)__ en Python
son buenos puntos de partida para implementar estrategias de atenuación.