---
title: Documentación API
sidebar_position: 2
---

# Documentación API LLMaaS

## URL de base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticación

Todas las solicitudes requieren un encabezado `Authorization` con su token de API :

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Limitación de tasas y facturación

### El Principio de los Terceros: Nivel de Acceso, Presupuesto y Capacidad

Nuestro sistema de terceros está diseñado como **capas de servicio completas** que definen tres aspectos clave de su uso:

1.  **Un Nivel de Acceso (Crédito de Compra)** : Para los Terceros 1 a 4, se trata de una cantidad a pagar de forma anticipada (upfront) para activar el servicio y desbloquear las capacidades técnicas y presupuestarias del nivel elegido.
2.  **Un Límite de Presupuesto Mensual** : Es el techo de su consumo mensual, asegurándole un control total de sus costos.
3.  **Una Capacidad Técnica** : Son los límites de rendimiento (tokens por día y por hora) que garantizan un rendimiento estable y predecible para su volumen de llamadas.

La elección de un tercero es, por lo tanto, un equilibrio entre la inversión inicial, el presupuesto mensual previsto y la capacidad técnica requerida. Su consumo dentro de esta capa se facturará según los tarifas vigentes.

### Tabla de Tiers

| Tier | Crédito de Compra | Límite Mensual | Tokens Output/Hora | Tokens Output/Día | Descripción |
|------|-------------------|------------------|--------------------|-------------------|-------------| 
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Uso estándar |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Uso profesional |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Volumen alto |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Empresarial |
| **Facturación Mensual** | N/A | Ilimitada | Prioridad alta | Prioridad alta | Contacto comercial |

**Nota** : Los límites de tasa se calculan en función de los tokens de salida. El precio de los tokens varía según el uso:
- **Tokens de entrada** : 0.90 € / millón
- **Tokens de salida (estándar)** : 4.00 € / millón
- **Tokens de salida (razonador)** : 21.00 € / millón (se aplica a los modelos más avanzados para tareas complejas de tipo agente o razonamiento)

### Encabezados de Límite

Las respuestas incluyen encabezados informativos :

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Error 429 - Límite alcanzado

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

## Puntos finales

### POST /v1/chat/completions

Genera respuestas conversacionales.

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Explique la fotosíntesis"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID del modelo (ver [catálogo](./models)) |
| `messages` | array | ✅ | Conversación (role: system/user/assistant) |
| `stream` | boolean | ❌ | Habilita el streaming (por defecto: false) |
| `temperature` | float | ❌ | Creatividad 0.0-2.0 (por defecto: 0.7) |
| `max_tokens` | integer | ❌ | Límite de tokens (por defecto: 1024) |
| `top_p` | float | ❌ | Muestreo de núcleo 0.0-1.0 (por defecto: 1.0) |
| `presence_penalty` | float | ❌ | Penalización presencia -2.0 a 2.0 (por defecto: 0) |
| `frequency_penalty` | float | ❌ | Penalización frecuencia -2.0 a 2.0 (por defecto: 0) |
| `user` | string | ❌ | ID usuario único |
| `tools` | array | ❌ | Lista de herramientas que el modelo puede llamar. |
| `tool_choice`| string/object | ❌ | Controla si el modelo debe llamar una herramienta. "none", "auto", o `{"type": "function", "function": {"name": "my_function"}}`. |

#### Respuesta Estándar

```json
{
  "id": "chatcmpl-bc52de347f2e4068b7bde380c0f8db37",
  "object": "chat.completion",
  "created": 1749114814,
  "model": "granite3.3:8b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "asistente",
        "content": "La fotosíntesis es un proceso biológico..."
      },
      "finish_reason": "detener"
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 42,
    "total_tokens": 57
  }
}
```

#### Respuesta con Llamada a Herramientas

Si el modelo decide llamar a una herramienta, la respuesta tendrá un `finish_reason` de `tool_calls` y el mensaje contendrá una matriz `tool_calls`.

```json
{
  "id": "chatcmpl-9f27a53f52b44a9693753f2a5e1f7a73",
  "object": "chat.completion",
  "created": 1749115200,
  "model": "qwen3:14b",
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

Después de recibir una respuesta `tool_calls`, debe ejecutar la herramienta desde su lado, luego devolver el resultado al modelo utilizando un mensaje con el `role: "tool"`.

```json
{
  "model": "qwen3:14b",
  "messages": [
    {
      "role": "user",
      "content": "¿Qué tiempo hace en París?"
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
      "content": "{\"temperature\": \"22\", \"unit\": \"celsius\", \"description\": \"Soleado\"}"
    }
  ]
}
```

#### Streaming (SSE)

Con `"stream": true`, la respuesta llega token por token:

**Headers de respuesta:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato de los eventos:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Estructura de los chunks:**
- `choices[].delta.content` : Contenido incremental
- `finish_reason` : `null` durante el streaming, luego `"stop"`
- Señal de finalización : `data: [DONE]`

### Consultas Multimodales (Visión)

Para analizar imágenes, puedes enviar una solicitud donde el campo `content` de un mensaje de usuario sea una matriz (array) que contenga tanto texto como imágenes.

El formato para una imagen es un objeto con `type: "image_url"` y un campo `image_url` que contiene la URL de la imagen en formato `data URI` (base64).

:::info Nota de compatibilidad
Aunque el formato estándar y recomendado es `{"type": "image_url", "image_url": {"url": "data:..."}}`, la API también admite de forma opcional un formato simplificado `{"type": "image", "image": "data:..."}`. Sin embargo, se recomienda utilizar el formato estándar `image_url` para una mejor compatibilidad con el ecosistema de OpenAI.
:::

#### Ejemplo de consulta de visión

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
            "text": "¿Qué ves en esta imagen?"
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
**Nota** : El endpoint /v1/completions utiliza el mismo formato que /v1/chat/completions con mensajes. Para la completión de texto simple, use un mensaje de usuario con su prompt.
:::

Completiones de texto mediante formato de chat.

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
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

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `file` | binary | ✅ | Archivo de audio (wav, mp3, m4a). |
| `language` | string | ❌ | Código de idioma ISO 639-1 (ej: "fr"). Detección automática si no se proporciona. |
| `initial_prompt` | string | ❌ | Contexto o palabras específicas para mejorar la precisión de la transcripción. |
| `task` | string | ❌ | Tarea a realizar: `transcribir` (predeterminado) o `traducir` (traducir al inglés). |
| `response_format` | string | ❌ | `json` (predeterminado, equivalente a `verbose_json`), `texto`, `srt`, `vtt`. |

#### Respuesta (`json`)

```json
{
  "text": "Hola, este es un test de transcripción de audio.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Hola, este es un test de transcripción de audio.",
      "tokens": [ 50364, 40365, 33, 2373, 359, 456, 2373, 323, 1330, 2373, 2264, 50564 ],
      "temperature": 0.0,
      "avg_logprob": -0.25,
      "compression_ratio": 1.5,
      "no_speech_prob": 0.05
    }
  ],
  "language": "es"
}
```

### POST /v1/audio/transcriptions_batch

Transcripción de varios archivos de audio en paralelo.

#### Requête

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions_batch" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "files=@audio1.wav" \
  -F "files=@audio2.mp3" \
  -F "language=fr"
```

#### Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `files` | array | ✅ | Lista de archivos de audio a transcribir. |
| `language` | string | ❌ | Código de idioma ISO 639-1 (ej: "fr"). |
| `initial_prompt` | string | ❌ | Contexto para mejorar la transcripción. |
| `task` | string | ❌ | Tarea a realizar: `transcribir` (por defecto) o `traducir`. |

#### Respuesta

```json
{
  "batch_results": [
    {
      "filename": "audio1.wav",
      "text": "Este es el primer archivo.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio2.mp3",
      "text": "Y aquí está el segundo.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio3.ogg",
      "text": null,
      "segments": [],
      "language": null,
      "error": "Error de transcripción para este archivo."
    }
  ]
}
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
      "id": "granite3.3:8b",
      "object": "model",
      "created": 1749110897,
      "owned_by": "CloudTemple",
      "root": "granite3.3:8b",
      "aliases": ["granite3.3:8b"],
      "max_model_len": 60000,
      "permission": [
        {
          "id": "modelperm-granite3.3:8b-1749110897",
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
    "message": "Parámetro 'temperature' inválido: debe estar entre 0 y 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - No autorizado

```json
{
  "error": {
    "message": "Clave de API inválida proporcionada",
    "type": "authentication_error"
  }
}
```

### 404 - Modelo no encontrado

```json
{
  "error": {
    "message": "El modelo 'unknown-model' no existe",
    "type": "error_de_solicitud_inválida",
    "param": "model",
    "code": "modelo_no_encontrado"
  }
}
```

### 429 - Límite de velocidad

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Error del servidor

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

# Configuración
API_KEY = "SU_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completación de chat
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Bonjour !"}
    ],
    "max_tokens": 100
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=payload
)

if response.status_code == 200:
    result = response.json()
    print(result["choices"][0]["message"]["content"])
else:
    print(f"Erreur {response.status_code}: {response.text}")
```

### Python con Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
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
    
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        stream=True
    )
    
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
                    continue

```

# Uso
```
stream_chat("Expliquez la physique quantique")
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

const API_KEY = 'VOTRE_TOKEN_API';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function chatCompletion(message) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: message }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
}

// Utilisation
chatCompletion('Bonjour !').then(response => {
    console.log(response);
});
```

### JavaScript con Fetch (Navegador)

```javascript
async function fetchCompletion(message) {
    const response = await fetch('https://api.ai.cloud-temple.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: 'granite3.3:8b',
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

### Manejo de Errores

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Límite de velocidad alcanzado, esperar...")
            time.sleep(60)  # Esperar 1 minuto
            return safe_api_call(payload)  # Reintento
        else:
            print(f"Error HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Error de red: {e}")
```

### Optimización de Costos

1. **Utilice modelos adecuados** : Modelos más pequeños para pruebas
2. **Limite max_tokens** : Evite respuestas demasiado largas
3. **Reutilice las conversaciones** : Ventana de contexto eficiente
4. **Monitoreo** : Siga su uso en la Consola

### Seguridad

1. **Proteja su token** : Variables de entorno  
2. **Rotación periódica** : Cambie sus claves periódicamente  
3. **Validación de entrada** : Limpie los datos de usuario  
4. **Límite de tasa del cliente** : Implemente sus propias limitaciones

## SDK y Integraciones

La API LLMaaS es compatible con los SDK existentes de OpenAI al modificar la URL base :

### OpenAI Python SDK

```python
from openai import OpenAI

client = OpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

response = client.chat.completions.create(
    model="granite3.3:8b",
    messages=[
        {"role": "user", "content": "Bonjour !"}
    ]
)

print(response.choices[0].message.content)
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configuración del modelo de chat (compatible con LLMaaS)
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Uso con mensajes
messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
response = chat.invoke(messages)
print(response.content)

# O con una simple cadena
response = chat.invoke("Bonjour, comment ça va ?")
print(response.content)
```

## Soporte

- **Documentación** : [Guía de inicio rápido](./quickstart)
- **Catálogo de modelos** : [Lista completa](./models)
- **Consola** : Gestión y monitoreo a través de la Consola Cloud Temple
- **Soporte** : A través de la Consola Cloud Temple