---
title: Documentación de la API
sidebar_position: 2
---

# Documentación de la API LLMaaS

## URL base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticación

Todas las solicitudes requieren un encabezado `Authorization` con su token de API:

```
Authorization: Bearer SU_TOKEN_DE_API
```

## Límites de velocidad y facturación

### Sistema de niveles por monto

| Nivel | Crédito de compra | Límite mensual | Tokens de salida/hora | Tokens de salida/día | Descripción |
|------|-------------------|------------------|-----------------------|----------------------|-----------| 
| **Nivel 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Uso estándar |
| **Nivel 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Uso profesional |
| **Nivel 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Alto volumen |
| **Nivel 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Empresa |
| **Facturación mensual** | N/A | Ilimitada | Prioridad alta | Prioridad alta | Contacto comercial |

**Nota** : Límites calculados en tokens de salida (4€/millón). Los tokens de entrada (0,9€/millón) tienen límites proporcionalmente más altos.

### Encabezados de límite

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
    "message": "Límite de velocidad excedido. Por favor, actualice su nivel o intente más tarde.",
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
  -H "Authorization: Bearer SU_TOKEN_DE_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Explica la fotosíntesis"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID del modelo (ver [catálogo](./models)) |
| `messages` | array | ✅ | Conversación (role: system/user/assistant) |
| `stream` | boolean | ❌ | Activa el streaming (por defecto: false) |
| `temperature` | float | ❌ | Creatividad 0.0-2.0 (por defecto: 0.7) |
| `max_tokens` | integer | ❌ | Límite de tokens (por defecto: 1024) |
| `top_p` | float | ❌ | Muestreo nucleus 0.0-1.0 (por defecto: 1.0) |
| `presence_penalty` | float | ❌ | Penalización de presencia -2.0 a 2.0 (por defecto: 0) |
| `frequency_penalty` | float | ❌ | Penalización de frecuencia -2.0 a 2.0 (por defecto: 0) |
| `user` | string | ❌ | ID de usuario único |

#### Respuesta estándar

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
        "role": "assistant",
        "content": "La fotosíntesis es un proceso biológico..."
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

#### Streaming (SSE)

Con `"stream": true`, la respuesta llega token por token :

**Encabezados de respuesta :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato de los eventos :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" foto"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Estructura de los chunks :**
- `choices[].delta.content` : Contenido incremental
- `finish_reason` : `null` durante el streaming, luego `"stop"`
- Señal de final : `data: [DONE]`

### POST /v1/completions

:::warning
**Nota** : El punto final `/v1/completions` utiliza el mismo formato que `/v1/chat/completions` con mensajes. 
Para completar texto simple, use un mensaje de usuario con su prompt.
:::

Completar texto mediante formato de chat.

#### Solicitud

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SU_TOKEN_DE_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Complete esta frase: La inteligencia artificial es"
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
  -H "Authorization: Bearer SU_TOKEN_DE_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `file` | binario | ✅ | Archivo de audio (wav, mp3, m4a) |
| `language` | string | ❌ | Código de idioma ISO 639-1 (ej: "fr") |
| `prompt` | string | ❌ | Contexto para mejorar la transcripción |
| `response_format` | string | ❌ | json, text, srt, vtt (por defecto: json) |
| `temperature` | float | ❌ | Creatividad de la transcripción (por defecto: 0) |

#### Respuesta

```json
{
  "text": "Bonjour, ceci est un test de transcription audio."
}
```

### GET /v1/models

Lista de modelos disponibles.

#### Solicitud

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer SU_TOKEN_DE_API"
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

## Códigos de error

### 400 - Solicitud inválida

```json
{
  "error": {
    "message": "Parámetro inválido 'temperature': debe estar entre 0 y 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - No autorizado

```json
{
  "error": {
    "message": "Se proporcionó una clave de API inválida",
    "type": "authentication_error"
  }
}
```

### 404 - Modelo no encontrado

```json
{
  "error": {
    "message": "El modelo 'unknown-model' no existe",
    "type": "invalid_request_error",
    "param": "model",
    "code": "model_not_found"
  }
}
```

### 429 - Límite de velocidad

```json
{
  "error": {
    "message": "Límite de velocidad excedido. Por favor, actualice su nivel o intente más tarde.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Error del servidor

```json
{
  "error": {
    "message": "Error interno del servidor",
    "type": "server_error"
  }
}
```

### 503 - Servicio no disponible

```json
{
  "error": {
    "message": "Servicio temporalmente no disponible",
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
API_KEY = "SU_TOKEN_DE_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completación de chat
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "¡Hola!"}
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
    print(f"Error {response.status_code}: {response.text}")
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
                data = line[6:]  # Eliminar 'data: '
                if data == '[DONE]':
                    break
                try:
                    chunk = json.loads(data)
                    content = chunk['choices'][0]['delta'].get('content', '')
                    if content:
                        print(content, end='', flush=True)
                except json.JSONDecodeError:
                    continue

# Uso
stream_chat("Explica la física cuántica")
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

const API_KEY = 'SU_TOKEN_DE_API';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function chatCompletion(message) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: message }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );

        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error(`Error ${error.response.status}:`, error.response.data);
    }
}

// Uso
chatCompletion("¿Qué es la inteligencia artificial?");
```
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

// Uso
chatCompletion('¡Hola!').then(response => {
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

### Gestión de Errores

```python
def llamada_api_segura(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Límite de velocidad alcanzado, esperar...")
            time.sleep(60)  # Esperar 1 minuto
            return llamada_api_segura(payload)  # Reintentar
        else:
            print(f"Error HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Error de red: {e}")
```

### Optimización de Costos

1. **Use modelos adecuados** : Modelos más pequeños para pruebas
2. **Limite max_tokens** : Evite respuestas demasiado largas
3. **Reutilice las conversaciones** : Ventana de contexto eficiente
4. **Monitoreo** : Supervise su uso en la Consola

### Seguridad

1. **Proteja su token** : Variables de entorno
2. **Rotación periódica** : Cambie sus claves periódicamente
3. **Validación de entrada** : Limpie los datos de usuario
4. **Límite de tasas cliente** : Implemente sus propias limitaciones

## SDK e Integraciones

La API LLMaaS es compatible con los SDK existentes de OpenAI modificando la URL base:

### SDK Python de OpenAI

```python
from openai import OpenAI

client = OpenAI(
    api_key="SU_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

response = client.chat.completions.create(
    model="granite3.3:8b",
    messages=[
        {"role": "user", "content": "¡Hola!"}
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
    api_key="SU_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Uso con mensajes
messages = [HumanMessage(content="Explique la IA en 3 frases")]
response = chat.invoke(messages)
print(response.content)

# O con una cadena simple
response = chat.invoke("¡Hola, cómo estás?")
print(response.content)
```

## Soporte

- **Documentación** : [Guía de inicio rápido](./quickstart)
- **Catálogo de modelos** : [Lista completa](./models)
- **Consola** : Gestión y monitoreo a través de la Consola Cloud Temple
- **Soporte** : A través de la Consola Cloud Temple