---
title: Documentación API
sidebar_position: 2
---

# Documentación API LLMaaS

## URL Base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticación

Todas las solicitudes requieren un encabezado `Authorization` con su token de API:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Limitación de tasa y facturación

### El Principio de los Niveles: Nivel de Acceso, Presupuesto y Capacidad

Nuestro sistema de niveles está diseñado como **paquetes de servicio completos** que definen tres aspectos clave de su uso:

1.  **Un Nivel de Acceso (Crédit d'Achat)** : Para los Niveles 1 a 4, se trata de un monto a pagar por anticipado (upfront) para activar el servicio y desbloquear las capacidades técnicas y presupuestarias del nivel seleccionado.
2.  **Un Límite de Presupuesto Mensual** : Es el techo de su consumo mensual, asegurándole un control total de sus costos.
3.  **Una Capacidad Técnica** : Son los límites de velocidad (tokens par jour et par heure) que garantizan un rendimiento estable y predecible para su volumen de llamadas.

La elección de un nivel es, por lo tanto, un equilibrio entre la inversión inicial, el presupuesto mensual previsto y la capacidad técnica requerida. Su consumo dentro de este paquete se factura posteriormente según las tarifas vigentes.

### Tabla de Niveles

| Nivel                     | Crédito de compra | Límite mensual | Tokens de salida/hora | Tokens de salida/día | Descripción        |
| ------------------------- | ----------------- | -------------- | --------------------- | -------------------- | ------------------ |
| **Nivel 1**               | 200 €             | 1 000 €        | 150 000               | 3 600 000            | Uso estándar       |
| **Nivel 2**               | 500 €             | 3 000 €        | 300 000               | 7 200 000            | Uso profesional    |
| **Nivel 3**               | 1 000 €           | 5 000 €        | 450 000               | 10 800 000           | Alto volumen       |
| **Nivel 4**               | 4 000 €           | 10 000 €       | 600 000               | 14 400 000           | Empresa            |
| **Facturación mensual**   | N/A               | Ilimitado      | Alta prioridad        | Alta prioridad       | Contacto comercial |

**Nota**: Los límites de tasa se calculan en función de los tokens de salida. La tarificación varía según el uso:

| Tipo de uso                              | Tarifa                                           |
| ---------------------------------------- | ------------------------------------------------ |
| **Tokens de entrada**                    | 1.8 € / millón                                   |
| **Tokens de salida (chat/completado)**   | 8.00 € / millón                                  |
| **Tokens de razonamiento**               | 8.00 € / millón                                  |
| **Reranking**                            | 4.00 € / millón de tokens rerankados             |
| **Lote asíncrono (entrada)**             | 0.9 € / millón (−50% vs estándar)                |
| **Lote asíncrono (salida)**              | 4.00 € / millón (−50% vs estándar)               |
| **Transcripción de audio**               | 0.01 € / minuto (se debe cada minuto iniciado)   |

### Cabeceras de Límite

Las respuestas incluyen cabeceras informativas:

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
| `stream`            | boolean       | ❌          | Activa el streaming (predeterminado: false)                                                                                          |
| `temperature`       | float         | ❌          | Creatividad 0.0-2.0 (predeterminado: 0.7)                                                                                             |
| `max_tokens`        | integer       | ❌          | Límite de tokens (predeterminado: 1024)                                                                                              |
| `top_p`             | float         | ❌          | Muestreo por núcleo 0.0-1.0 (predeterminado: 1.0)                                                                                |
| `presence_penalty`  | float         | ❌          | Penalización de presencia -2.0 a 2.0 (predeterminado: 0)                                                                                     |
| `frequency_penalty` | float         | ❌          | Penalización de frecuencia -2.0 a 2.0 (predeterminado: 0)                                                                                    |
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

#### Respuesta con Llamada de Herramientas

Si el modelo decide llamar a una herramienta, la respuesta tendrá un `finish_reason` de `tool_calls` y el mensaje contendrá un `array` `tool_calls`.

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

Después de recibir una respuesta `tool_calls`, debe ejecutar la herramienta por su parte y luego devolver el resultado al modelo utilizando un mensaje con el `role: "tool"`.

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

Con `"stream": true`, la respuesta llega token a token :

**Encabezados de respuesta :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato de los eventos :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Estructura de los chunks :**
- `choices[].delta.content` : Contenido incremental
- `finish_reason` : `null` durante el streaming, y luego `"stop"`
- Señal de fin : `data: [DONE]`

### Solicitudes Multimodales (Vision)

Para analizar imágenes, puede enviar una solicitud donde el campo `content` de un mensaje de usuario sea una matriz (array) que contenga tanto texto como imágenes.

El formato para una imagen es un objeto con `type: "image_url"` y un campo `image_url` que contiene la URL de la imagen en formato `data URI` (base64).

:::info Nota de Compatibilidad
Aunque el formato estándar y recomendado es `{"type": "image_url", "image_url": {"url": "data:..."}}`, la API también admite, por motivos de flexibilidad, un formato simplificado `{"type": "image", "image": "data:..."}`. Sin embargo, se recomienda utilizar el formato estándar `image_url` para una mejor compatibilidad con el ecosistema de OpenAI.
:::

:::tip OCR y Análisis de Documentos
Para tareas específicas de análisis de documentos (PDF, scans, tableaux), recomendamos el uso del modelo especializado **DeepSeek-OCR**. Consulte la [documentación dedicada](./ocr).
:::

#### Ejemplo de Solicitud de Visión

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gemma3:27b",
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
Para el completado de texto simple, utilice un mensaje de usuario con su prompt.
:::

Completados de texto mediante formato de chat.

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

Idénticos a `/v1/chat/completions` - ver la sección anterior.

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

#### Paramètres

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

Genera un vector de embedding que representa el texto de entrada.

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
| `input`   | string o matriz de strings | ✅          | El texto o la lista de textos a vectorizar.          |

#### Respuesta

```json
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

Reordena una lista de documentos según su relevancia respecto a una consulta. Compatible con la API de Cohere (v1 y v2).

**Facturación** : 4 € / millón de tokens reordenados. Ideal para mejorar la precisión de los pipelines RAG.

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
| `model`     | string  | ✅          | ID del modelo de reranking (ver [catálogo](./models#modèles-de-reranking)) |
| `query`     | string  | ✅          | La consulta de búsqueda                                                     |
| `documents` | array   | ✅          | Lista de documentos para reordenar                                            |
| `top_n`     | integer | ❌          | Número de resultados a devolver (por defecto: todos)                             |

#### Respuesta

```json
{
  "id": "rerank-7f3a2b1c",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.9874,
      "document": {
        "text": "Paris est la capitale et la plus grande ville de France."
      }
    },
    {
      "index": 2,
      "relevance_score": 0.5231,
      "document": {
        "text": "La France est un pays d'Europe occidentale."
      }
    }
  ],
  "usage": {
    "billed_units": {
      "search_units": 3
    }
  }
}
```

El endpoint `/v2/rerank` (Cohere SDK v2) también está disponible con el mismo formato de solicitud.

#### Ejemplo de Python (SDK Cohere)

```python
import cohere

# Compatible con el SDK Cohere apuntando a la API LLMaaS
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

### GET /v1/models

Lista de modelos disponibles.

#### Solicitud

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Respuesta

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

### 400 - Solicitud No Válida

```json
{
  "error": {
    "message": "Invalid parameter 'temperature': must be between 0 and 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - No autorizado

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

### 429 - Límite de tasa

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

### 503 - Servicio no disponible

```json
{
  "error": {
    "message": "Service temporarily unavailable",
    "type": "service_unavailable_error"
  }
}
```

## Ejemplos por lenguaje

### Python con requests

```python
import requests
import json

# Configuración
# Se recomienda proteger su clave API utilizando variables de entorno.
# Ejemplo: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "VOTRE_TOKEN_API" 
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Finalización de chat
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
        timeout=30 # Agregar un tiempo de espera para la solicitud
    )
    
    response.raise_for_status() # Lanza una excepción para los códigos de error HTTP (4xx, 5xx)
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

### Python con streaming

```python
import requests
import json

def stream_chat(message, model="gpt-oss:120b"):
    # Se recomienda proteger su clave API utilizando variables de entorno.
    # Ejemplo: API_KEY = os.getenv("LLMAAS_API_KEY")
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
            timeout=30 # Agregar un tiempo de espera para la solicitud
        )
        
        response.raise_for_status() # Lanza una excepción para los códigos de error HTTP (4xx, 5xx)
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # Eliminar 'data: '
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
        print() # Nueva línea después del stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Uso
stream_chat("Expliquez la physique quantique")
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Configuración
// Se recomienda proteger su clave API utilizando variables de entorno.
// Ejemplo: const API_KEY = process.env.LLMAAS_API_KEY;
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
                timeout: 30000 // Añadir un tiempo de espera para la solicitud (30 segundos)
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Erreur:', error.response?.data || error.message);
        // Se puede agregar una gestión de errores más detallada aquí si es necesario
        // Por ejemplo: if (error.response?.status === 429) { console.error("Rate limit exceeded"); }
    }
}

// Uso
chatCompletion('Bonjour !').then(response => {
    if (response) {
        console.log(response);
    }
});
```

### JavaScript con Fetch (Browser)

```javascript
async function fetchCompletion(message) {
    const response = await fetch('https://api.ai.cloud-temple.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
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
            time.sleep(60)  # Esperar 1 minuto
            return safe_api_call(payload)  # Reintentar
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Optimización de Costos

1. **Utilice modelos adecuados** : Modelos más pequeños para pruebas
2. **Limite max_tokens** : Evite respuestas demasiado largas
3. **Reutilice las conversaciones** : Ventana de contexto eficiente
4. **Monitoreo** : Supervise su uso en la Consola

### Seguridad

1. **Proteja su token** : Variables de entorno
2. **Rotación periódica** : Cambie sus claves periódicamente
3. **Validación de entrada** : Limpie los datos del usuario
4. **Limitación de tasa del cliente** : Implemente sus propios límites

## SDK y Integraciones

La API LLMaaS es compatible con los SDK de OpenAI existentes modificando la URL base:

### SDK de Python de OpenAI

```python
from openai import OpenAI

# Se recomienda proteger su clave API utilizando variables de entorno.
# Ejemplo: api_key=os.getenv("LLMAAS_API_KEY")
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
        max_tokens=50 # Añadir max_tokens para coherencia con las pruebas
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configuración del modelo de chat (compatible con LLMaaS)
# Se recomienda proteger su clave API utilizando variables de entorno.
# Ejemplo: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    # Nota: Los parámetros como max_tokens se pasan a través de model_kwargs
    # para garantizar la compatibilidad entre las versiones de LangChain.
    model_kwargs={"max_tokens": 200}
)

try:
    # Uso con mensajes
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # O con una cadena simple
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Uso de Embeddings

:::warning Incompatibilidad con los clientes estándar de LangChain
Actualmente, el uso del endpoint de embedding a través de las clases estándar de LangChain (`langchain_openai.OpenAIEmbeddings` o `langchain_community.OllamaEmbeddings`) presenta incompatibilidades con nuestra API.

- `OpenAIEmbeddings` envía tokens precalculados en lugar de texto sin formato, lo cual es rechazado.
- `OllamaEmbeddings` no gestiona la autenticación con Bearer Token requerida.

Mientras se espera una solución definitiva, se recomienda crear una clase de embedding personalizada o llamar a la API directamente, como se demuestra en el ejemplo `exemples/simple-rag-demo`.
:::

```python
from langchain.embeddings.base import Embeddings
from typing import List
import httpx

class LLMaaSEmbeddings(Embeddings):
    """
    Classe d'embedding personnalisée pour interagir avec l'API LLMaaS de Cloud Temple.
    Cette classe est conçue pour être compatible avec l'interface `Embeddings` de LangChain,
    permettant son utilisation dans des pipelines LangChain tout en appelant notre API spécifique.
    """
    def __init__(self, api_key: str, base_url: str = "https://api.ai.cloud-temple.com/v1", model_name: str = "granite-embedding:278m"):
        self.api_key = api_key
        self.base_url = base_url
        self.model_name = model_name
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def _embed(self, texts: List[str]) -> List[List[float]]:
        payload = {"input": texts, "model": self.model_name}
        try:
            with httpx.Client(timeout=30.0) as client:
                response = client.post(f"{self.base_url}/embeddings", headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()['data']
                # Ordenar los embeddings por su índice para garantizar el orden
                data.sort(key=lambda e: e['index'])
                return [item['embedding'] for item in data]
        except httpx.HTTPStatusError as e:
            print(f"Erreur HTTP lors de la récupération de l'embedding : {e.response.status_code}")
            print(f"Réponse : {e.response.text}")
            return []

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]

# Uso
# embeddings = LLMaaSEmbeddings(
#     api_key="VOTRE_TOKEN_API",
#     base_url="https://api.ai.cloud-temple.com/v1",
#     model_name="granite-embedding:278m"
# )
# vector = embeddings.embed_query("Mon texte à vectoriser")
```

## Soporte

- **Documentación** : [Guía de inicio rápido](./quickstart)
- **Catálogo de modelos** : [Lista completa](./models)
- **Consola** : Gestión y monitoreo a través de la Consola Cloud Temple
- **Soporte** : A través de la Consola Cloud Temple