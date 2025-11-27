---
title: API-Dokumentation
sidebar_position: 2
---

# API-Dokumentation LLMaaS

## Base URL

```
https://api.ai.cloud-temple.com/v1
```

## Authentication

Alle Anfragen erfordern einen `Authorization`-Header mit Ihrem API-Token:

```
Authorization: Bearer IHR_API_TOKEN
```

## Rate Limiting und Abrechnung

### The Third-Party Principle: Access Tier, Budget, and Capacity

Our third-party system is designed as **complete service envelopes** that define three key aspects of your usage:

1.  **An Access Tier (Purchase Credit):** For Tiers 1 to 4, this is an upfront amount to be paid in advance to activate the service and unlock the technical and budgetary capabilities of the selected tier.
2.  **A Monthly Budget Limit:** This is the cap on your monthly consumption, ensuring full control over your costs.
3.  **Technical Capacity:** These are the throughput limits (tokens per day and per hour) that guarantee stable and predictable performance for your call volume.

Choosing a tier therefore involves balancing your initial investment, your projected monthly budget, and the required technical capacity. Your consumption within this envelope is then billed according to the current pricing rates.

### Third Parties Table

| Tier | Purchase Credit | Monthly Limit | Tokens Output/Hour | Tokens Output/Day | Description |
|------|------------------|----------------|--------------------|-------------------|-----------|
| **Tier 1** | 200 € | 1,000 € | 150,000 | 3,600,000 | Standard usage |
| **Tier 2** | 500 € | 3,000 € | 300,000 | 7,200,000 | Professional use |
| **Tier 3** | 1,000 € | 5,000 € | 450,000 | 10,800,000 | High volume |
| **Tier 4** | 4,000 € | 10,000 € | 600,000 | 14,400,000 | Enterprise |
| **Monthly Billing** | N/A | Unlimited | High priority | High priority | Contact sales |

**Note**: Rate limits are calculated based on output tokens. Token pricing varies by usage:
- **Input tokens**: 0.90 € / million
- **Output tokens (standard)**: 4.00 € / million
- **Output tokens (reasoner)**: 21.00 € / million (applies to most advanced models for complex agent-like or reasoning tasks)

#### **Audio Billing**
- **Audio Transcription**: 0.01 € / minute (every started minute is billable)

### Rate Limit Headers

Responses include informative headers:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Error 429 - Limit Reached

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

Generiert conversationalen Antworten.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Erklären Sie die Photosynthese"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string | ✅ | ID of the model (see [catalog](./models)) |
| `messages` | array | ✅ | Conversation (role: system/user/assistant) |
| `stream` | boolean | ❌ | Enables streaming (default: false) |
| `temperature` | float | ❌ | Creativity 0.0-2.0 (default: 0.7) |
| `max_tokens` | integer | ❌ | Token limit (default: 1024) |
| `top_p` | float | ❌ | Nucleus sampling 0.0-1.0 (default: 1.0) |
| `presence_penalty` | float | ❌ | Presence penalty -2.0 to 2.0 (default: 0) |
| `frequency_penalty` | float | ❌ | Frequency penalty -2.0 to 2.0 (default: 0) |
| `user` | string | ❌ | Unique user ID |
| `tools` | array | ❌ | List of tools the model can call. |
| `tool_choice` | string/object | ❌ | Controls whether the model should call a tool. "none", "auto", or `{"type": "function", "function": {"name": "my_function"}}`. |

#### Standard Response

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
        "content": "Die Photosynthese ist ein biologischer Prozess..."
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

#### Response with Tool Call

If the model decides to call a tool, the response will have a `finish_reason` of `tool_calls` and the message will contain a `tool_calls` array.

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

After receiving a `tool_calls` response, you must execute the tool on your side and then send the result back to the model using a message with `role: "tool"`.

```json
{
  "model": "qwen3:14b",
  "messages": [
    {
      "role": "user",
      "content": "What is the weather like in Paris?"
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
      "content": "{\"temperature\": \"22\", \"unit\": \"celsius\", \"description\": \"Sunny\"}"
    }
  ]
}
```

#### Streaming (SSE)

Mit `"stream": true` wird die Antwort tokenweise geliefert:

**Antwort-Header:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Format der Ereignisse:**
```
data: {"choices":[{"delta":{"content":"Die"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struktur der Chunks:**
- `choices[].delta.content`: Inkrementeller Inhalt
- `finish_reason`: `null` während des Streamings, danach `"stop"`
- Ende-Signal: `data: [DONE]`

### Multimodal Queries (Vision)

To analyze images, you can send a request where the `content` field of a user message is an array containing both text and images.

The format for an image is an object with `type: "image_url"` and an `image_url` field containing the image URL in `data URI` (base64) format.

:::info Compatibility Note
Although the standard and recommended format is `{"type": "image_url", "image_url": {"url": "data:..."}}`, the API also supports, for flexibility, a simplified format `{"type": "image", "image": "data:..."}`. However, we recommend using the standard `image_url` format for better compatibility with the OpenAI ecosystem.
:::

:::tip OCR and Document Analysis
For specific document analysis tasks (PDFs, scans, tables), we recommend using the specialized model **DeepSeek-OCR**. See the [dedicated documentation](./ocr).
:::

#### Beispiel für eine Vision-Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHR_TOKEN_API" \
  -d '{
    "model": "gemma3:27b",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Was siehst du auf diesem Bild?"
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
**Hinweis**: Der Endpunkt `/v1/completions` verwendet dasselbe Format wie `/v1/chat/completions` mit Nachrichten.  
Für einfache Textkompletierungen verwenden Sie eine Benutzernachricht mit Ihrem Prompt.
:::

Textkompletierungen über das Chat-Format.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Vervollständigen Sie diesen Satz: Künstliche Intelligenz ist"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parameter

Identisch zu `/v1/chat/completions` – siehe vorherige Section.

#### Antwort

Same format as `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio-Transkription in Text (Whisper).

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parameter

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | binary | ✅ | Audio file (wav, mp3, m4a). |
| `language` | string | ❌ | ISO 639-1 language code (e.g., "fr"). Automatic detection if not provided. |
| `initial_prompt` | string | ❌ | Context or specific words to improve transcription accuracy. |
| `task` | string | ❌ | Task to perform: `transcribe` (default) or `translate` (translate into English). |
| `response_format` | string | ❌ | `json` (default, equivalent to `verbose_json`). Formats `text`, `srt`, `vtt` are currently not supported. |

#### Answer (`json`)

```json
{
  "text": "Hello, this is an audio transcription test.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Hello, this is an audio transcription test.",
      "tokens": [ 50364, 40365, 33, 2373, 359, 456, 2373, 323, 1330, 2373, 2264, 50564 ],
      "temperature": 0.0,
      "avg_logprob": -0.25,
      "compression_ratio": 1.5,
      "no_speech_prob": 0.05
    }
  ],
  "language": "en"
}
```

### POST /v1/embeddings

Creates an embedding vector representing the input text.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Der zu vektorisierende Text"
  }'
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string | ✅ | ID of the embedding model (see [catalog](./models)) |
| `input` | string or array of strings | ✅ | The text or list of texts to vectorize. |

#### Antwort

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

#### Anfrage

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer IHR_API_TOKEN"
```

#### Antwort

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

## Error Codes

### 400 - Ungültige Anfrage

```json
{
  "error": {
    "message": "Ungültiger Parameter 'temperature': muss zwischen 0 und 2 liegen",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Nicht autorisiert

```json
{
  "error": {
    "message": "Ungültiger API-Schlüssel bereitgestellt",
    "type": "authentication_error"
  }
}
```

### 404 - Modell Nicht Gefunden

```json
{
  "error": {
    "message": "Modell 'unknown-model' existiert nicht",
    "type": "invalid_request_error",
    "param": "model",
    "code": "model_not_found"
  }
}
```

### 429 - Ratenbegrenzung

```json
{
  "error": {
    "message": "Ratenbegrenzung überschritten. Bitte aktualisieren Sie Ihren Tarif oder versuchen Sie es später erneut.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Server-Fehler

```json
{
  "error": {
    "message": "Interner Serverfehler",
    "type": "server_error"
  }
}
```

### 503 - Dienst nicht verfügbar

```json
{
  "error": {
    "message": "Dienst vorübergehend nicht verfügbar",
    "type": "service_unavailable_error"
  }
}
```

## Examples by Language

### Python mit requests

```python
import requests
import json

# Konfiguration

# Es wird empfohlen, Ihren API-Schlüssel mithilfe von Umgebungsvariablen zu schützen.

# Beispiel: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "IHRE_API_TOKEN"  
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat completion
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Hallo!"}
    ],
    "max_tokens": 100
}

try:
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        timeout=30  # Hinzufügen eines Timeouts für die Anfrage
    )
    
    response.raise_for_status()  # Wirft eine Ausnahme bei HTTP-Fehlern (4xx, 5xx)
    result = response.json()
    print(result["choices"][0]["message"]["content"])

except requests.exceptions.HTTPError as e:
    print(f"Fehler HTTP: {e.response.status_code} - {e.response.text}")
except requests.exceptions.RequestException as e:
    print(f"Netzwerkfehler: {e}")
except json.JSONDecodeError:
    print(f"Fehler beim Decodieren von JSON: {response.text}")
except Exception as e:
    print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")

### Python mit Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
    # Es wird empfohlen, Ihren API-Schlüssel mithilfe von Umgebungsvariablen zu schützen.
    # Beispiel: API_KEY = os.getenv("LLMAAS_API_KEY")
    API_KEY = "IHRE_API_TOKEN"
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
            timeout=30  # Hinzufügen eines Timeouts für die Anfrage
        )
        
        response.raise_for_status()  # Löst eine Ausnahme für HTTP-Fehlercodes (4xx, 5xx) aus
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # 'data: ' entfernen
                    if data == '[DONE]':
                        break
                    try:
                        chunk = json.loads(data)
                        content = chunk['choices'][0]['delta'].get('content', '')
                        if content:
                            print(content, end='', flush=True)
                    except json.JSONDecodeError:
                        print(f"Fehler beim Decodieren von JSON im Stream: {data}")
                        continue
        print()  # Neue Zeile nach dem Stream
    except requests.exceptions.HTTPError as e:
        print(f"Fehler HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Fehler im Netzwerk: {e}")
    except Exception as e:
        print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")
```

# Usage
stream_chat("Erklären Sie die Quantenphysik")

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Konfiguration
// Es wird empfohlen, Ihren API-Schlüssel durch Umgebungsvariablen zu schützen.
// Beispiel: const API_KEY = process.env.LLMAAS_API_KEY;
const API_KEY = 'IHRE_API_TOKEN';
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
                timeout: 30000 // Hinzufügen eines Timeouts für die Anfrage (30 Sekunden)
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Fehler:', error.response?.data || error.message);
        // Detaillierte Fehlerbehandlung kann hier hinzugefügt werden, falls erforderlich
        // Beispiel: if (error.response?.status === 429) { console.error("Rate limit exceeded"); }
    }
}

// Verwendung
chatCompletion('Hallo!').then(response => {
    if (response) {
        console.log(response);
    }
});
```

### JavaScript mit Fetch (Browser)

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

## Best Practices

### Fehlerbehandlung

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate Limit erreicht, warten...")
            time.sleep(60)  # 1 Minute warten
            return safe_api_call(payload)  # Wiederholen
        else:
            print(f"Fehler HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Fehler im Netzwerk: {e}")
```

### Kostenoptimierung

1. **Verwenden Sie geeignete Modelle**: Verwenden Sie kleinere Modelle für Tests  
2. **Beschränken Sie max_tokens**: Vermeiden Sie zu lange Antworten  
3. **Wiederverwenden von Gesprächen**: Effiziente Nutzung des Kontextfensters  
4. **Überwachung**: Verfolgen Sie Ihre Nutzung in der Konsole

### Security

1. **Protect your token**: Environment variables  
2. **Regular rotation**: Change your keys periodically  
3. **Input validation**: Sanitize user data  
4. **Client rate limiting**: Implement your own limits

## SDK and Integrations

The LLMaaS API is compatible with existing OpenAI SDKs by simply changing the base URL:

### OpenAI Python SDK

```python
from openai import OpenAI

# It is recommended to protect your API key by using environment variables.

# Beispiel: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="IHRE_API_TOKEN",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Hallo!"}
        ],
        max_tokens=50  # Hinzufügen von max_tokens zur Konsistenz mit den Tests
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Fehler im OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Chat Model Configuration (LLMaaS-compatible)

# It is recommended to protect your API key by using environment variables.

# Example: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="YOUR_API_TOKEN",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    # Note: Parameters like max_tokens are passed via model_kwargs
    # to ensure compatibility across LangChain versions.
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

#### Using Embeddings

:::warning Incompatibility with standard LangChain clients
Currently, using the embedding endpoint with LangChain's standard classes (`langchain_openai.OpenAIEmbeddings` or `langchain_community.OllamaEmbeddings`) is incompatible with our API.

- `OpenAIEmbeddings` sends pre-computed tokens instead of raw text, which is rejected.
- `OllamaEmbeddings` does not handle the required Bearer Token authentication.

Until a permanent solution is available, it is recommended to create a custom embedding class or call the API directly, as demonstrated in the `examples/simple-rag-demo` example.
:::

```python
from langchain.embeddings.base import Embeddings
from typing import List
import httpx

class LLMaaSEmbeddings(Embeddings):
    """
    Custom embedding class to interact with Cloud Temple's LLMaaS API.
    This class is designed to be compatible with LangChain's `Embeddings` interface,
    enabling its use within LangChain pipelines while calling our specific API.
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
                # Sort embeddings by index to ensure correct order
                data.sort(key=lambda e: e['index'])
                return [item['embedding'] for item in data]
        except httpx.HTTPStatusError as e:
            print(f"HTTP error during embedding retrieval: {e.response.status_code}")
            print(f"Response: {e.response.text}")
            return []

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]
```
