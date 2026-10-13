---
title: Documentación de la API
sidebar_position: 2
---

# Documentación de la API LLMaaS

## Compatibilidad con OpenAI

La API LLMaaS es compatible con OpenAI para las llamadas documentadas en esta referencia. Configure la URL base `https://api.ai.cloud-temple.com/v1` y su clave LLMaaS en el cliente, y luego verifique las capacidades del modelo y los parámetros del endpoint utilizado.

La compatibilidad no cubre todas las funcionalidades de OpenAI. Las diferencias documentadas incluyen principalmente:

- **Completados**: `/v1/completions` espera un array `messages`, similar al chat; consulte el [formato de completado](#post-v1completions).
- **Embeddings**: las entradas deben ser texto; consulte los [formatos aceptados](#post-v1embeddings).
- **Transcripción de audio**: los formatos de respuesta `text`, `srt` y `vtt` no están soportados; consulte los [parámetros de transcripción](#post-v1audiotranscriptions).
- **Batch**: el servicio utiliza un [contrato específico](./batch.md), con envío directo de conversaciones en JSON en `/v1/chat/completions/batch`.


## URL Base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticación

Todas las solicitudes requieren un encabezado `Authorization` con su token de API:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Límites de Velocidad y Facturación

### El Principio de los Niveles: Nivel de Acceso, Presupuesto y Capacidad

Nuestro sistema de niveles está diseñado como **paquetes de servicio completos** que definen tres aspectos clave de su uso:

1.  **Un Nivel de Acceso (Crédito de Compra)**: Para los Niveles 1 a 4, se trata de un monto a pagar de forma anticipada (upfront) para activar el servicio y desbloquear las capacidades técnicas y presupuestarias del nivel elegido.
2.  **Un Límite de Presupuesto Mensual**: Es el techo de su consumo mensual, asegurándole un control total de sus costos.
3.  **Una Capacidad Técnica**: Son los límites de velocidad (tokens por día y por hora) que garantizan un rendimiento estable y predecible para su volumen de llamadas.

La elección de un nivel es, por tanto, un equilibrio entre la inversión inicial, el presupuesto mensual previsto y la capacidad técnica requerida. Su consumo dentro de este paquete se factura luego según las tarifas vigentes.

### Capacidades técnicas de los niveles

La tabla a continuación presenta únicamente las velocidades técnicas. Los montos del crédito de acceso y los techos presupuestarios dependen de las condiciones comerciales del nivel elegido; consulte el catálogo oficial y las condiciones de su suscripción.

| Nivel | Tokens Salida/Hora | Tokens Salida/Día | Descripción |
| ------------------------- | ------------------- | ------------------ | -------------------- |
| **Nivel 1** | 150 000 | 3 600 000 | Uso estándar |
| **Nivel 2** | 300 000 | 7 200 000 | Uso profesional |
| **Nivel 3** | 450 000 | 10 800 000 | Alto volumen |
| **Nivel 4** | 600 000 | 14 400 000 | Empresa |
| **Facturación Mensual** | Alta prioridad | Alta prioridad | Contacto comercial |

Para conocer los precios públicos vigentes y realizar su estimación, consulte el [catálogo de tarifas oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).


**Nota**: Los límites de velocidad se calculan sobre la base de los tokens de salida. La tarificación varía según el uso:

| Tipo de uso |
| -------------------------------------- |
| **Tokens de entrada** |
| **Tokens de salida (chat/completado)** |
| **Tokens de razonamiento** |
| **Reclasificación (Reranking)** |
| **Batch asíncrono (entrada)** |
| **Batch asíncrono (salida)** |
| **Transcripción de Audio** |

Para conocer los precios públicos vigentes y realizar su estimación, consulte el [catálogo de tarifas oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).


La transcripción de audio se descuenta por minuto; cualquier minuto comenzado es debido.

### Encabezados de Límite

Las respuestas incluyen encabezados informativos:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Error 429 - Límite Alcanzado

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

## Endpoints

### POST /v1/chat/completions

Genera respuestas conversacionales.

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      {
        "role": "user",
        "content": "Expliquez la photosynthèse"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parámetros

| Parámetro           | Tipo          | Obligatorio | Descripción                                                                                                                  |
| ------------------- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅          | ID del modelo (ver [catálogo](./models))                                                                                    |
| `messages`          | array         | ✅          | Conversación (role: system/user/assistant)                                                                                   |
| `stream`            | boolean       | ❌          | Activa el streaming (por defecto: false)                                                                                          |
| `temperature`       | float         | ❌          | Creatividad 0.0-2.0 (por defecto: 0.7)                                                                                             |
| `max_tokens`        | integer       | ❌          | Límite de tokens (por defecto: 1024)                                                                                              |
| `top_p`             | float         | ❌          | Muestreo núcleo 0.0-1.0 (por defecto: 1.0)                                                                                |
| `presence_penalty`  | float         | ❌          | Penalización presencia -2.0 a 2.0 (por defecto: 0)                                                                                     |
| `frequency_penalty` | float         | ❌          | Penalización frecuencia -2.0 a 2.0 (por defecto: 0)                                                                                    |
| `user`              | string        | ❌          | ID de usuario único                                                                                                        |
| `tools`             | array         | ❌          | Lista de herramientas que el modelo puede llamar.                                                                                 |
| `tool_choice`       | string/object | ❌          | Controla si el modelo debe llamar a una herramienta. "none", "auto", o `{"type": "function", "function": {"name": "my_function"}}`. |

#### Respuesta Estándar

```json
{
  "id": "chatcmpl-bc52de347f2e4068b7bde380c0f8db37",
  "object": "chat.completion",
  "created": 1749114814,
  "model": "gpt-oss:120b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "La photosynthèse est un processus biologique..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 42,
    "total_tokens": 57
  }
}
```

#### Respuesta con Llamada a Herramienta

Si el modelo decide llamar a una herramienta, la respuesta tendrá un `finish_reason` de `tool_calls` y el mensaje contendrá un array `tool_calls`.

```json
{
  "id": "chatcmpl-9f27a53f52b44a9693753f2a5e1f7a73",
  "object": "chat.completion",
  "created": 1749115200,
  "model": "gpt-oss:120b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
          {
            "id": "call_abc123",
            "type": "function",
            "function": {
              "name": "get_current_weather",
              "arguments": "{\n  \"location\": \"Paris, France\",\n  \"unit\": \"celsius\"\n}"
            }
          }
        ]
      },
      "finish_reason": "tool_calls"
    }
  ],
  "usage": {
    "prompt_tokens": 82,
    "completion_tokens": 18,
    "total_tokens": 100
  }
}
```

Después de recibir una respuesta `tool_calls`, debe ejecutar la herramienta por su cuenta y luego devolver el resultado al modelo utilizando un mensaje con el `role: "tool"`.

```json
{
  "model": "gpt-oss:120b",
  "messages": [
    {
      "role": "user",
      "content": "Quel temps fait-il à Paris ?"
    },
    {
      "role": "assistant",
      "tool_calls": [
        {
          "id": "call_abc123",
          "type": "function",
          "function": {
            "name": "get_current_weather",
            "arguments": "{\"location\": \"Paris, France\", \"unit\": \"celsius\"}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_abc123",
      "content": "{\"temperature\": \"22\", \"unit\": \"celsius\", \"description\": \"Ensoleillé\"}"
    }
  ]
}
```

#### Streaming (SSE)

Con `"stream": true`, la respuesta llega token por token:

**Encabezados de respuesta:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato de eventos:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Estructura de los chunks:**
- `choices[].delta.content` : Contenido incremental
- `finish_reason` : `null` durante el streaming, luego `"stop"`
- Señal de fin: `data: [DONE]`

### Solicitudes Multimodales (Visión)

Para analizar imágenes, puede enviar una solicitud donde el campo `content` de un mensaje de usuario sea un array (array) que contenga tanto texto como imágenes.

El formato para una imagen es un objeto con `type: "image_url"` y un campo `image_url` que contiene la URL de la imagen en formato `data URI` (base64).

:::info[Nota de Compatibilidad]
Aunque el formato estándar y recomendado es `{"type": "image_url", "image_url": {"url": "data:..."}}`, la API también soporta por motivos de flexibilidad un formato simplificado `{"type": "image", "image": "data:..."}`. Sin embargo, se recomienda utilizar el formato estándar `image_url` para una mejor compatibilidad con el ecosistema OpenAI.
:::

:::tip[OCR y Análisis de Documentos]
Para tareas específicas de análisis de documentos (PDF, escaneos, tablas), recomendamos el uso del modelo especializado **DeepSeek-OCR**. Consulte la [documentación dedicada](./ocr).
:::

#### Ejemplo de Solicitud de Visión

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gemma4:31b",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Que vois-tu sur cette image ?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "data:image/jpeg;base64,..."
            }
          }
        ]
      }
    ],
    "max_tokens": 500
  }'
```

### POST /v1/completions

:::warning
**Nota** : El endpoint `/v1/completions` utiliza el mismo formato que `/v1/chat/completions` con mensajes.
Para la finalización de texto simple, utiliza un mensaje de usuario con tu prompt.
:::

Finalizaciones de texto mediante formato chat.

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      {
        "role": "user",
        "content": "Complétez cette phrase: L'intelligence artificielle est"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parámetros

Idénticos a `/v1/chat/completions` - ver sección anterior.

#### Respuesta

Formato idéntico a `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Transcripción de audio a texto (Whisper).

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parámetros

| Parámetro         | Tipo   | Obligatorio | Descripción                                                                                                        |
| ----------------- | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `file`            | binary | ✅          | Archivo de audio (wav, mp3, m4a).                                                                                  |
| `language`        | string | ❌          | Código de idioma ISO 639-1 (ej: "fr"). Detección automática si no se proporciona.                                 |
| `initial_prompt`  | string | ❌          | Contexto o palabras específicas para mejorar la precisión de la transcripción.                                     |
| `task`            | string | ❌          | Tarea a realizar: `transcribe` (predeterminado) o `translate` (traducir al inglés).                                |
| `response_format` | string | ❌          | `json` (predeterminado, equivalente a `verbose_json`). Los formatos `text`, `srt`, `vtt` no están soportados actualmente. |

#### Respuesta (`json`)

```json
{
  "text": "Bonjour, ceci est un test de transcription audio.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Bonjour, ceci est un test de transcription audio.",
      "tokens": [ 50364, 40365, 33, 2373, 359, 456, 2373, 323, 1330, 2373, 2264, 50564 ],
      "temperature": 0.0,
      "avg_logprob": -0.25,
      "compression_ratio": 1.5,
      "no_speech_prob": 0.05
    }
  ],
  "language": "fr"
}
```


### POST /v1/embeddings

Crea un vector de embedding que representa el texto de entrada.

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Le texte à vectoriser"
  }'
```

#### Parámetros

| Parámetro | Tipo                       | Obligatorio | Descripción                                           |
| --------- | -------------------------- | ----------- | ----------------------------------------------------- |
| `model`   | string                     | ✅          | ID del modelo de embedding (ver [catálogo](./models)) |
| `input`   | string or array of strings | ✅          | El texto o la lista de textos a vectorizar.           |

#### Respuesta

Extracto abreviado: los puntos suspensivos representan las otras componentes del vector. Este bloque ilustra la estructura de la respuesta y no constituye un documento JSON directamente copiable.

```text
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        0.018902843818068504,
        -0.023282647132873535,
        ...
        -0.016484618186950684
      ]
    }
  ],
  "model": "granite-embedding:278m",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}
```

### POST /v1/rerank

Reordena una lista de documentos por relevancia respecto a una consulta. Compatible con la API Cohere (v1 y v2).

**Facturación**: consulta el [catálogo de tarifas oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Todos los documentos enviados se cuentan, incluso si `top_n` limita el número de resultados devueltos. Ver el [detalle del cálculo](./rerank.md#precios).

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/rerank" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "nvidia/llama-nemotron-rerank-vl-1b-v2",
    "query": "Quelle est la capitale de la France ?",
    "documents": [
      "Paris est la capitale et la plus grande ville de France.",
      "Lyon est une grande ville du sud-est de la France.",
      "La France est un pays d'\''Europe occidentale."
    ],
    "top_n": 2
  }'
```

#### Parámetros

| Parámetro   | Tipo    | Obligatorio | Descripción                                                                 |
| ----------- | ------- | ----------- | --------------------------------------------------------------------------- |
| `model`     | string  | ✅          | ID del modelo de reranking (ver [catálogo](./models#modelos-de-reranking)) |
| `query`     | string  | ✅          | La consulta de búsqueda                                                     |
| `documents` | array   | ✅          | Lista de documentos a reordenar                                             |
| `top_n`     | integer | ❌          | Número de resultados a devolver (predeterminado: todos)                     |

#### Respuesta

Extracto ilustrativo del formato Jina/vLLM descrito por el contrato de la plataforma. Las puntuaciones y contadores a continuación son ficticios. El proxy transmite la respuesta del motor y añade un bloque `backend`, omitido aquí.

```json
{
  "id": "score-8bb47ca195d8cb2f",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.0401,
      "document": {
        "text": "Paris est la capitale et la plus grande ville de France.",
        "multi_modal": null
      }
    },
    {
      "index": 2,
      "relevance_score": 0.0253,
      "document": {
        "text": "La France est un pays d'Europe occidentale.",
        "multi_modal": null
      }
    }
  ],
  "usage": {
    "prompt_tokens": 39,
    "total_tokens": 39
  },
  "model": "nvidia/llama-nemotron-rerank-vl-1b-v2"
}
```

Los `relevance_score` son puntuaciones brutas no normalizadas, no probabilidades entre 0 y 1. Utiliza su orden relativo; cualquier umbral debe ser [calibrado en tu modelo y corpus](./rerank.md#umbral-de-relevancia). Los contadores `usage.prompt_tokens` y `usage.total_tokens` son distintos de la facturación por documento procesado; no se requiere ningún campo `usage.billed_units.search_units` para calcular esta última.

El endpoint `/v2/rerank` (SDK Cohere v2) también está disponible con el mismo formato de solicitud.

#### Ejemplo Python (SDK Cohere)

```python
import cohere

# Compatible avec le SDK Cohere en pointant vers l'API LLMaaS
co = cohere.Client(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com"
)

results = co.rerank(
    model="nvidia/llama-nemotron-rerank-vl-1b-v2",
    query="Quelle est la capitale de la France ?",
    documents=[
        "Paris est la capitale et la plus grande ville de France.",
        "Lyon est une grande ville du sud-est de la France.",
        "La France est un pays d'Europe occidentale."
    ],
    top_n=2
)

for result in results.results:
    print(f"Index: {result.index}, Score: {result.relevance_score:.4f}")
```

### POST /v1/chat/completions/batch

Envía varias conversaciones independientes con un modelo común para un procesamiento asíncrono. El campo `messages` es un array de conversaciones. La respuesta HTTP 202 contiene el identificador del lote.

Utiliza `GET /v1/chat/completions/batch/{id}` con la misma clave API para seguir el procesamiento y recuperar los resultados. Consulta la [guía Batch](./batch.md) para el formato, los límites y un ejemplo completo.

### GET /v1/models

Lista de identificadores de modelos expuestos por la API. Utiliza esta respuesta para rellenar el parámetro `model`.

Consulta también el [ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle) para las descontinuaciones, fechas de fin de soporte y migraciones. Un identificador puede conservarse como redirección hacia un sucesor; su presencia en esta lista no garantiza el mantenimiento del modelo original.

#### Solicitud

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Respuesta

Este extracto es ilustrativo: los identificadores y los valores de metadatos, incluido `max_model_len`, no constituyen las características actuales del servicio. Utiliza la respuesta de `GET /v1/models` para obtener los valores efectivos.

```json
{
  "object": "list",
  "data": [
    {
      "id": "gpt-oss:120b",
      "object": "model",
      "created": 1749110897,
      "owned_by": "CloudTemple",
      "root": "gpt-oss:120b",
      "aliases": ["gpt-oss:120b"],
      "max_model_len": 60000,
      "permission": [
        {
          "id": "modelperm-gpt-oss:120b-1749110897",
          "object": "model_permission",
          "allow_sampling": true,
          "allow_view": true,
          "allow_fine_tuning": false
        }
      ]
    }
  ]
}
```

## Códigos de Error

### 400 - Solicitud Inválida

```json
{
  "error": {
    "message": "Invalid parameter 'temperature': must be between 0 and 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - No Autorizado

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Modelo No Encontrado

```json
{
  "error": {
    "message": "Model 'unknown-model' does not exist",
    "type": "invalid_request_error",
    "param": "model",
    "code": "model_not_found"
  }
}
```

### 429 - Límite de Tasa

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Error del Servidor

```json
{
  "error": {
    "message": "Internal server error",
    "type": "server_error"
  }
}
```

### 503 - Servicio No Disponible

```json
{
  "error": {
    "message": "Service temporarily unavailable",
    "type": "service_unavailable_error"
  }
}
```

## Ejemplos por Lenguaje

### Python con requests

```python
import requests
import json

# Configuration
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "VOTRE_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat completion
payload = {
    "model": "gpt-oss:120b",
    "messages": [
        {"role": "user", "content": "Bonjour !"}
    ],
    "max_tokens": 100
}

try:
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        timeout=30 # Ajout d'un timeout pour la requête
    )

    response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)
    result = response.json()
    print(result["choices"][0]["message"]["content"])

except requests.exceptions.HTTPError as e:
    print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
except requests.exceptions.RequestException as e:
    print(f"Erreur réseau: {e}")
except json.JSONDecodeError:
    print(f"Erreur de décodage JSON: {response.text}")
except Exception as e:
    print(f"Une erreur inattendue est survenue: {e}")
```

### Python con Streaming

```python
import requests
import json

def stream_chat(message, model="gpt-oss:120b"):
    # Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
    # Exemple: API_KEY = os.getenv("LLMAAS_API_KEY")
    API_KEY = "VOTRE_TOKEN_API"
    BASE_URL = "https://api.ai.cloud-temple.com/v1"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    payload = {
        "model": model,
        "messages": [{"role": "user", "content": message}],
        "stream": True,
        "max_tokens": 200
    }

    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            stream=True,
            timeout=30 # Ajout d'un timeout pour la requête
        )

        response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)

        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # Enlever 'data: '
                    if data == '[DONE]':
                        break
                    try:
                        chunk = json.loads(data)
                        content = chunk['choices'][0]['delta'].get('content', '')
                        if content:
                            print(content, end='', flush=True)
                    except json.JSONDecodeError:
                        print(f"Erreur de décodage JSON dans le stream: {data}")
                        continue
        print() # Nouvelle ligne après le stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Utilisation
stream_chat("Expliquez la physique quantique")
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Configuration
// Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
// Exemple: const API_KEY = process.env.LLMAAS_API_KEY;
const API_KEY = 'VOTRE_TOKEN_API';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function chatCompletion(message) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'gpt-oss:120b',
                messages: [
                    { role: 'user', content: message }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                timeout: 30000 // Ajout d'un timeout pour la requête (30 secondes)
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Erreur:', error.response?.data || error.message);
        // Gestion plus détaillée des erreurs peut être ajoutée ici si nécessaire
        // Par exemple: if (error.response?.status === 429) { console.error("Rate limit exceeded"); }
    }
}

// Utilisation
chatCompletion('Bonjour !').then(response => {
    if (response) {
        console.log(response);
    }
});
```

### JavaScript con Fetch (Node.js en el lado del servidor)

Ejecute este ejemplo en el lado del servidor con Node.js que tenga `fetch` nativo. Defina `LLMAAS_API_KEY` en el entorno del servidor. Para una interfaz web, el navegador llama a su backend, que autentica al usuario y verifica sus permisos antes de llamar a LLMaaS. La clave de servicio permanece exclusivamente en el lado del servidor y no debe integrarse en el código enviado al navegador.

```javascript
async function fetchCompletion(message) {
    const apiKey = process.env.LLMAAS_API_KEY;
    if (!apiKey) {
        throw new Error('La variable LLMAAS_API_KEY doit être définie côté serveur.');
    }
    const response = await fetch('https://api.ai.cloud-temple.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-oss:120b',
            messages: [
                { role: 'user', content: message }
            ],
            max_tokens: 100
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}
```

## Buenas Prácticas

### Gestión de Errores

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate limit atteint, attendre...")
            time.sleep(60)  # Attendre 1 minute
            return safe_api_call(payload)  # Retry
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Optimización de Costos

1. **Utilice modelos apropiados** : Modelos más pequeños para pruebas
2. **Limite max_tokens** : Evite respuestas demasiado largas
3. **Reutilice las conversaciones** : Ventana de contexto eficiente
4. **Monitoreo** : Siga su uso en la Consola

### Seguridad

1. **Proteja su token** : Variables de entorno
2. **Rotación regular** : Cambie sus claves periódicamente
3. **Validación de entrada** : Limpie los datos del usuario
4. **Limitación de tasa del cliente** : Implemente sus propios límites

## SDK e Integraciones

Para las llamadas compatibles, configure el SDK de OpenAI con la URL base y la clave LLMaaS. Consulte el [alcance de la compatibilidad](#compatibilidad-con-openai) antes de migrar una integración:

### OpenAI Python SDK

```python
from openai import OpenAI

# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[
            {"role": "user", "content": "Bonjour !"}
        ],
        max_tokens=50 # Ajout de max_tokens pour cohérence avec les tests
    )

    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

Utilice las [versiones validadas y prerequisitos de LangChain](./tutorials.md#prerrequisitos-de-langchain). Los ejemplos a continuación han sido verificados con respuestas simuladas de LLMaaS.

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

# Configuration du chat model (compatible avec LLMaaS)
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    max_tokens=200
)

try:
    # Utilisation avec messages
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # Ou avec une simple chaîne
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Uso de Embeddings

Utilice `OpenAIEmbeddings` con `check_embedding_ctx_length=False` para enviar los textos directamente, sin pre-tokenización local. Este ajuste está [documentado por LangChain](https://reference.langchain.com/python/langchain-openai/embeddings/base/OpenAIEmbeddings). El parámetro `encoding_format="float"`, transmitido a través de `model_kwargs`, solicita vectores numéricos.

```python
import os
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(
    api_key=os.environ["LLMAAS_API_KEY"],
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite-embedding:278m",
    check_embedding_ctx_length=False,
    model_kwargs={"encoding_format": "float"},
)

vectors = embeddings.embed_documents(["Premier document", "Deuxième document"])
query_vector = embeddings.embed_query("Ma question")
```

Este ajuste también desactiva el corte automático de textos según la ventana de contexto de este cliente. Corte los documentos antes de la llamada y respete el límite del modelo elegido, como en el [tutorial RAG](./tutorials.md#2-rag-generación-aumentada-por-recuperación-con-la-api-llmaas).

Los errores de la API se remontan como excepciones: no se reemplazan por una lista vacía. Trátelos a nivel de su aplicación antes de continuar con la indexación o la búsqueda.

**Validación:** formato de las solicitudes comparado con el contrato y el código del proxy; envío de textos solos y en lotes, autenticación, lectura de vectores y propagación de errores HTTP verificados con respuestas simuladas. No se realizó ninguna llamada de producción para esta validación.

## Soporte

- **Documentación** : [Guía de inicio rápido](./quickstart)
- **Catálogo de modelos** : [Lista completa](./models)
- **Consola** : Gestión y monitoreo a través de Cloud Temple Console
- **Soporte** : A través de Cloud Temple Console
