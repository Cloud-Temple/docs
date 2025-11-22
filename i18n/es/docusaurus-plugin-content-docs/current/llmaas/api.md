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
Authorization: Bearer SU_TOKEN_API
```

## Límite de tasas y facturación

### El Principio de los Terceros: Nivel de Acceso, Presupuesto y Capacidad

Nuestro sistema de terceros está diseñado como **envolturas completas de servicio** que definen tres aspectos clave de su uso:

1.  **Un Nivel de Acceso (Crédito de Compra)**: Para los Terceros 1 a 4, se trata de una cantidad que debe pagarse de forma anticipada (upfront) para activar el servicio y desbloquear las capacidades técnicas y presupuestarias del nivel seleccionado.
2.  **Un Límite de Presupuesto Mensual**: Es el tope de su consumo mensual, asegurándole un control total sobre sus costos.
3.  **Una Capacidad Técnica**: Son los límites de rendimiento (tokens por día y por hora) que garantizan un rendimiento estable y predecible para su volumen de llamadas.

La elección de un nivel es, por tanto, un equilibrio entre la inversión inicial, el presupuesto mensual previsto y la capacidad técnica requerida. Su consumo dentro de esta envoltura se facturará posteriormente según las tarifas vigentes.

### Tabla de Tiers

| Tier | Crédito de Compra | Límite Mensual | Tokens de Salida/Hora | Tokens de Salida/Día | Descripción |
|------|-------------------|------------------|------------------------|------------------------|-------------|
| **Tier 1** | 200 € | 1.000 € | 150.000 | 3.600.000 | Uso estándar |
| **Tier 2** | 500 € | 3.000 € | 300.000 | 7.200.000 | Uso profesional |
| **Tier 3** | 1.000 € | 5.000 € | 450.000 | 10.800.000 | Alto volumen |
| **Tier 4** | 4.000 € | 10.000 € | 600.000 | 14.400.000 | Empresa |
| **Facturación Mensual** | N/A | Ilimitada | Alta prioridad | Alta prioridad | Contacto comercial |

**Nota**: Los límites de tasa se calculan en función de los tokens de salida. La tarificación de los tokens varía según el uso:
- **Tokens de entrada**: 0,90 € / millón
- **Tokens de salida (estándar)**: 4,00 € / millón
- **Tokens de salida (razonador)**: 21,00 € / millón (aplicable a los modelos más avanzados para tareas complejas de tipo agente o razonamiento)

#### **Facturación de audio**
- **Transcripción de audio**: 0,01 € / minuto (cada minuto comenzado es facturable)

### Límites de encabezados

Las respuestas incluyen encabezados informativos:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Error 429 - Límite alcanzado

```json
{
  "error": {
    "message": "Se ha superado el límite de tasa. Por favor, actualice su nivel o inténtelo de nuevo más tarde.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

## Endpoints

### POST /v1/chat/completions

Genera respuestas conversacionales.

#### Petición

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SU_TOKEN_API" \
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
| `tools` | array | ❌ | Lista de herramientas que el modelo puede llamar. |
| `tool_choice` | string/object | ❌ | Controla si el modelo debe llamar a una herramienta. "none", "auto", o `{"type": "function", "function": {"name": "my_function"}}`. |

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

#### Respuesta con Llamada a Herramienta

Si el modelo decide llamar a una herramienta, la respuesta tendrá un `finish_reason` de `tool_calls` y el mensaje contendrá un array `tool_calls`.

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
              "arguments": "{\n  \"location\": \"París, Francia\",\n  \"unit\": \"celsius\"\n}"
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

Después de recibir una respuesta `tool_calls`, usted debe ejecutar la herramienta desde su lado y luego enviar el resultado al modelo utilizando un mensaje con el `role: "tool"`.

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
            "arguments": "{\"location\": \"París, Francia\", \"unit\": \"celsius\"}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_abc123",
      "content": "{\"temperature\": \"22\", \"unit\": \"celsius\", \"description\": \"Despejado\"}"
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

**Formato de los eventos:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Estructura de los chunks:**
- `choices[].delta.content`: Contenido incremental
- `finish_reason`: `null` durante el streaming, luego `"stop"`
- Señal de finalización: `data: [DONE]`

### Consultas Multimodales (Visión)

Para analizar imágenes, puedes enviar una solicitud donde el campo `content` de un mensaje del usuario sea un arreglo (array) que contenga tanto texto como imágenes.

El formato para una imagen es un objeto con `type: "image_url"` y un campo `image_url` que contiene la URL de la imagen en formato `data URI` (base64).

:::info Nota de Compatibilidad
Aunque el formato estándar y recomendado es `{"type": "image_url", "image_url": {"url": "data:..."}}`, la API también admite, por motivos de flexibilidad, un formato simplificado `{"type": "image", "image": "data:..."}`. Sin embargo, se recomienda utilizar el formato estándar `image_url` para una mejor compatibilidad con el ecosistema OpenAI.
:::

:::tip OCR y Análisis de Documentos
Para tareas específicas de análisis de documentos (PDF, escaneos, tablas), recomendamos el uso del modelo especializado **DeepSeek-OCR**. Consulta la [documentación dedicada](./ocr).
:::

#### Ejemplo de solicitud de Visión

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SU_TOKEN_API" \
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
**Nota** : El endpoint `/v1/completions` utiliza el mismo formato que `/v1/chat/completions` con mensajes.  
Para completar texto simple, utiliza un mensaje de tipo user con tu prompt.
:::

Completado de texto mediante formato chat.

#### Petición

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SU_TOKEN_API" \
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

Idénticos a `/v1/chat/completions` – ver sección anterior.

#### Respuesta

Formato idéntico a `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Transcripción de audio a texto (Whisper).

#### Petición

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer SU_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `file` | binary | ✅ | Archivo de audio (wav, mp3, m4a). |
| `language` | string | ❌ | Código de idioma ISO 639-1 (por ejemplo: "fr"). Detección automática si no se proporciona. |
| `initial_prompt` | string | ❌ | Contexto o palabras específicas para mejorar la precisión de la transcripción. |
| `task` | string | ❌ | Tarea a realizar: `transcribe` (por defecto) o `translate` (traducir al inglés). |
| `response_format` | string | ❌ | `json` (por defecto, equivalente a `verbose_json`). Los formatos `text`, `srt`, `vtt` no están actualmente soportados. |

#### Respuesta (`json`)

```json
{
  "text": "Hola, esto es una prueba de transcripción de audio.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Hola, esto es una prueba de transcripción de audio.",
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

### POST /v1/embeddings

Creates an embedding vector representing the input text.

#### Petición

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SU_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "El texto a vectorizar"
  }'
```

#### Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID del modelo de embedding (ver [catálogo](./models)) |
| `input` | string o array de strings | ✅ | El texto o la lista de textos a vectorizar. |

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

### GET /v1/models

List of available models.

#### Petición

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer SU_TOKEN_API"
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

### 400 - Petición Inválida

```json
{
  "error": {
    "message": "Parámetro 'temperature' no válido: debe estar entre 0 y 2",
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

### 404 - Modelo No Encontrado

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

### 429 - Límite de tasa

```json
{
  "error": {
    "message": "Se ha excedido el límite de tasa. Por favor, actualice su nivel o inténtelo de nuevo más tarde.",
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
    "type": "error_servidor"
  }
}
```

### 503 - Servicio No Disponible

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

# It is recommended to protect your API key by using environment variables.

# Ejemplo: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "SU_TOKEN_API" 
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completado de chat
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "¡Hola!"}
    ],
    "max_tokens": 100
}

try:
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        timeout=30  # Adición de un timeout para la solicitud
    )
    
    response.raise_for_status()  # Lanza una excepción para códigos de error HTTP (4xx, 5xx)
    result = response.json()
    print(result["choices"][0]["message"]["content"])

except requests.exceptions.HTTPError as e:
    print(f"Error HTTP: {e.response.status_code} - {e.response.text}")
except requests.exceptions.RequestException as e:
    print(f"Error de red: {e}")
except json.JSONDecodeError:
    print(f"Error de decodificación JSON: {response.text}")
except Exception as e:
    print(f"Se ha producido un error inesperado: {e}")
```

### Python con Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
    # Se recomienda proteger su clave API utilizando variables de entorno.
    # Ejemplo: API_KEY = os.getenv("LLMAAS_API_KEY")
    API_KEY = "SU_TOKEN_API"
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
            timeout=30  # Adición de un timeout para la solicitud
        )
        
        response.raise_for_status()  # Lanza una excepción para códigos de error HTTP (4xx, 5xx)
        
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
                        print(f"Error al decodificar JSON en el stream: {data}")
                        continue
        print()  # Nueva línea después del stream
    except requests.exceptions.HTTPError as e:
        print(f"Error HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Error de red: {e}")
    except Exception as e:
        print(f"Se ha producido un error inesperado: {e}")
```

# Uso
stream_chat("Expliquez la física cuántica")

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Configuración
// Se recomienda proteger su clave API utilizando variables de entorno.
// Ejemplo: const API_KEY = process.env.LLMAAS_API_KEY;
const API_KEY = 'SU_TOKEN_API';
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
                },
                timeout: 30000 // Adición de un timeout para la solicitud (30 segundos)
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        // La gestión más detallada de errores puede añadirse aquí si es necesario
        // Por ejemplo: if (error.response?.status === 429) { console.error("Límite de tasa excedido"); }
    }
}

// Uso
chatCompletion('¡Hola!').then(response => {
    if (response) {
        console.log(response);
    }
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

## Buenas prácticas

### Gestión de errores

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Límite de tasa alcanzado, esperar...")
            time.sleep(60)  # Esperar 1 minuto
            return safe_api_call(payload)  # Reintentar
        else:
            print(f"Error HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Error de red: {e}")
```

### Optimización de Costos

1. **Utilice modelos adecuados**: Modelos más pequeños para pruebas  
2. **Limitar max_tokens**: Evite respuestas demasiado largas  
3. **Reutilice conversaciones**: Ventana de contexto eficiente  
4. **Monitoreo**: Supervise su uso en la Consola

### Seguridad

1. **Proteja su token**: Variables de entorno  
2. **Rotación regular**: Cambie sus claves periódicamente  
3. **Validación de entrada**: Limpie los datos de usuario  
4. **Límite de tasa para el cliente**: Implemente sus propios límites

## SDK and Integrations

The LLMaaS API is compatible with existing OpenAI SDKs by simply changing the base URL:

### SDK de Python de OpenAI

```python
from openai import OpenAI

# It is recommended to protect your API key by using environment variables.

# Ejemplo: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="SU_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "¡Hola!"}
        ],
        max_tokens=50  # Adición de max_tokens para mantener coherencia con las pruebas
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Error del SDK OpenAI: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configuración del modelo de chat (compatible con LLMaaS)

# It is recommended to protect your API key by using environment variables.

# Example: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="SU_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    # Note: Parameters such as max_tokens are passed via model_kwargs
    # to ensure compatibility across different versions of LangChain.
    model_kwargs={"max_tokens": 200}
)

try:
    # Usage with messages
    messages = [HumanMessage(content="Explain AI in 3 sentences")]
    response = chat.invoke(messages)
    print(response.content)

    # Or with a simple string
    response = chat.invoke("Hello, how are you?")
    print(response.content)

except Exception as e:
    print(f"LangChain error: {e}")
```

#### Uso de Embeddings

:::warning Incompatibilidad con clientes estándar de LangChain
Actualmente, el uso del endpoint de embeddings con las clases estándar de LangChain (`langchain_openai.OpenAIEmbeddings` o `langchain_community.OllamaEmbeddings`) presenta incompatibilidades con nuestra API.

- `OpenAIEmbeddings` envía tokens precalculados en lugar de texto sin procesar, lo cual es rechazado.
- `OllamaEmbeddings` no gestiona la autenticación mediante Bearer Token requerida.

Mientras se encuentra una solución permanente, se recomienda crear una clase de embeddings personalizada o llamar directamente a la API, como se muestra en el ejemplo `exemplos/simple-rag-demo`.
:::

```python
from langchain.embeddings.base import Embeddings
from typing import List
import httpx

class LLMaaSEmbeddings(Embeddings):
    """
    Clase de embeddings personalizada para interactuar con la API LLMaaS de Cloud Temple.
    Esta clase está diseñada para ser compatible con la interfaz `Embeddings` de LangChain,
    permitiendo su uso en pipelines de LangChain mientras se llama a nuestra API específica.
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
            print(f"Error HTTP al obtener el embedding: {e.response.status_code}")
            print(f"Respuesta: {e.response.text}")
            return []

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]
```

# Uso

# embeddings = LLMaaSEmbeddings(

#     api_key="SU_TOKEN_API",

#     base_url="https://api.ai.cloud-temple.com/v1",

#     model_name="granite-embedding:278m"

#)

# vector = embeddings.embed_query("Mi texto a vectorizar")

## Soporte

- **Documentación** : [Guía de inicio rápido](./quickstart)
- **Catálogo de modelos** : [Lista completa](./models)
- **Consola** : Gestión y supervisión a través de la Consola Cloud Temple
- **Soporte** : A través de la Consola Cloud Temple
