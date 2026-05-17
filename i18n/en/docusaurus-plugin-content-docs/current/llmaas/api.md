---
title: API Documentation
sidebar_position: 2
---

# LLMaaS API Documentation

## Base URL

```
https://api.ai.cloud-temple.com/v1
```

## Authentication

All requests require an `Authorization` header with your API token:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting and Billing

### The Tier Principle: Access Level, Budget, and Capacity

Our tier system is designed as **complete service packages** that define three key aspects of your usage:

1.  **An Access Tier (Upfront Credit)**: For Tiers 1 to 4, this is an upfront amount to be paid in advance to activate the service and unlock the technical and budgetary capabilities of the selected tier.
2.  **A Monthly Budget Limit**: This is the cap on your monthly consumption, ensuring complete control over your costs.
3.  **Technical Capacity**: These are the throughput limits (tokens per day and per hour) that guarantee stable and predictable performance for your call volume.

Choosing a tier is therefore a balance between the initial investment, the projected monthly budget, and the required technical capacity. Your consumption within this package is then billed according to the current rates.

### Tiers Table

| Tier                      | Purchase Credit | Monthly Limit | Output Tokens/Hour | Output Tokens/Day | Description          |
| ------------------------- | --------------- | ------------- | ------------------ | ----------------- | -------------------- |
| **Tier 1**                | 200 €           | 1 000 €       | 150 000            | 3 600 000         | Standard usage       |
| **Tier 2**                | 500 €           | 3 000 €       | 300 000            | 7 200 000         | Professional use     |
| **Tier 3**                | 1 000 €         | 5 000 €       | 450 000            | 10 800 000        | High volume          |
| **Tier 4**                | 4 000 €         | 10 000 €      | 600 000            | 14 400 000        | Enterprise           |
| **Monthly Billing**       | N/A             | Unlimited     | High priority      | High priority     | Sales contact        |

**Note**: Rate limits are calculated based on output tokens. Pricing varies by usage:

| Usage Type                           | Rate                                           |
| ------------------------------------ | ---------------------------------------------- |
| **Input Tokens**                     | 1.8 € / million                                |
| **Output Tokens (chat/completion)**  | 8.00 € / million                               |
| **Reasoning Tokens**                 | 8.00 € / million                               |
| **Reranking**                        | 4.00 € / million reranked tokens               |
| **Async Batch (input)**              | 0.9 € / million (−50% vs standard)             |
| **Async Batch (output)**             | 4.00 € / million (−50% vs standard)            |
| **Audio Transcription**              | 0.01 € / minute (any started minute is billed) |

### Limit Headers

Responses include informational headers:

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

Generates conversational responses.

#### Request

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

#### Parameters

| Parameter           | Type          | Required  | Description                                                                                                                  |
| ------------------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅        | Model ID (see [catalog](./models))                                                                                           |
| `messages`          | array         | ✅        | Conversation (role: system/user/assistant)                                                                                   |
| `stream`            | boolean       | ❌        | Enable streaming (default: false)                                                                                            |
| `temperature`       | float         | ❌        | Creativity 0.0-2.0 (default: 0.7)                                                                                            |
| `max_tokens`        | integer       | ❌        | Token limit (default: 1024)                                                                                                  |
| `top_p`             | float         | ❌        | Nucleus sampling 0.0-1.0 (default: 1.0)                                                                                    |
| `presence_penalty`  | float         | ❌        | Presence penalty -2.0 to 2.0 (default: 0)                                                                                    |
| `frequency_penalty` | float         | ❌        | Frequency penalty -2.0 to 2.0 (default: 0)                                                                                   |
| `user`              | string        | ❌        | Unique user ID                                                                                                               |
| `tools`             | array         | ❌        | List of tools the model can call.                                                                                            |
| `tool_choice`       | string/object | ❌        | Controls whether the model should call a tool. "none", "auto", or `{"type": "function", "function": {"name": "my_function"}}`. |

#### Standard Response

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

#### Response with Tool Call

If the model decides to call a tool, the response will have a `finish_reason` of `tool_calls` and the message will contain a `tool_calls` array.

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

After receiving a `tool_calls` response, you must execute the tool on your end, then return the result to the model using a message with the `role: "tool"`.

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

With `"stream": true`, the response arrives token by token:

**Response Headers :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Event Format :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Chunk Structure :**
- `choices[].delta.content` : Incremental content
- `finish_reason` : `null` during streaming, then `"stop"`
- End signal : `data: [DONE]`

### Multimodal Requests (Vision)

To analyze images, you can send a request where the `content` field of a user message is an array containing both text and images.

The format for an image is an object with `type: "image_url"` and an `image_url` field containing the image URL in `data URI` (base64) format.

:::info Compatibility Note
Although the standard and recommended format is `{"type": "image_url", "image_url": {"url": "data:..."}}`, the API also supports a simplified format `{"type": "image", "image": "data:..."}` for flexibility. However, it is recommended to use the standard `image_url` format for better compatibility with the OpenAI ecosystem.
:::

:::tip OCR and Document Analysis
For specific document analysis tasks (PDFs, scans, tables), we recommend using the specialized **DeepSeek-OCR** model. See the [dedicated documentation](./ocr).
:::

#### Vision Request Example

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
**Note**: The `/v1/completions` endpoint uses the same format as `/v1/chat/completions` with messages. 
For simple text completion, use a user message with your prompt.
:::

Text completions via chat format.

#### Request

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

#### Parameters

Identical to `/v1/chat/completions` - see previous section.

#### Response

Format identical to `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio transcription to text (Whisper).

#### Request

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parameters

| Parameter         | Type   | Required  | Description                                                                                                        |
| ----------------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------ |
| `file`            | binary | ✅        | Audio file (wav, mp3, m4a).                                                                                        |
| `language`        | string | ❌        | ISO 639-1 language code (e.g., "fr"). Automatic detection if not provided.                                        |
| `initial_prompt`  | string | ❌        | Context or specific words to improve transcription accuracy.                                                     |
| `task`            | string | ❌        | Task to perform: `transcribe` (default) or `translate` (translate to English).                                   |
| `response_format` | string | ❌        | `json` (default, equivalent to `verbose_json`). The `text`, `srt`, `vtt` formats are not currently supported.    |

#### Response (`json`)

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

Creates an embedding vector representing the input text.

#### Request

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Le texte à vectoriser"
  }'
```

#### Parameters

| Parameter | Type                       | Required  | Description                                           |
| --------- | -------------------------- | --------- | ----------------------------------------------------- |
| `model`   | string                     | ✅        | Embedding model ID (see [catalog](./models))          |
| `input`   | string or array of strings | ✅        | The text or list of texts to vectorize.               |

#### Response

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

Reorders a list of documents by relevance to a query. Compatible with the Cohere API (v1 and v2).

**Billing** : €4 / million reranked tokens. Ideal for improving the accuracy of RAG pipelines.

#### Request

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

#### Parameters

| Parameter   | Type    | Required  | Description                                                                 |
| ----------- | ------- | --------- | --------------------------------------------------------------------------- |
| `model`     | string  | ✅        | Reranking model ID (see [catalog](./models#modèles-de-reranking))           |
| `query`     | string  | ✅        | The search query                                                            |
| `documents` | array   | ✅        | List of documents to rerank                                                 |
| `top_n`     | integer | ❌        | Number of results to return (default: all)                                  |

#### Response

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

The `/v2/rerank` endpoint (Cohere SDK v2) is also available with the same request format.

#### Python Example (Cohere SDK)

```python
import cohere

# Compatible with the Cohere SDK by pointing to the LLMaaS API
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

List of available models.

#### Request

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Response

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

## Error Codes

### 400 - Invalid Request

```json
{
  "error": {
    "message": "Invalid parameter 'temperature': must be between 0 and 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Unauthorized

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Model Not Found

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

### 429 - Rate Limit

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Server Error

```json
{
  "error": {
    "message": "Internal server error",
    "type": "server_error"
  }
}
```

### 503 - Service Unavailable

```json
{
  "error": {
    "message": "Service temporarily unavailable",
    "type": "service_unavailable_error"
  }
}
```

## Examples by Language

### Python avec requests

```python
import requests
import json

# Configuration
# It is recommended to protect your API key using environment variables.
# Example: API_KEY = os.getenv("LLMAAS_API_KEY")
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
        timeout=30 # Adding a timeout for the request
    )
    
    response.raise_for_status() # Raises an exception for HTTP error codes (4xx, 5xx)
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

### Python with Streaming

```python
import requests
import json

def stream_chat(message, model="gpt-oss:120b"):
    # It is recommended to protect your API key using environment variables.
    # Example: API_KEY = os.getenv("LLMAAS_API_KEY")
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
            timeout=30 # Adding a timeout for the request
        )
        
        response.raise_for_status() # Raises an exception for HTTP error codes (4xx, 5xx)
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # Remove 'data: '
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
        print() # New line after the stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Usage
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

### JavaScript with Fetch (Browser)

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

## Best Practices

### Error Handling

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate limit atteint, attendre...")
            time.sleep(60)  # Wait 1 minute
            return safe_api_call(payload)  # Retry
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Cost Optimization

1. **Use appropriate models** : Smaller models for testing
2. **Limit max_tokens** : Avoid overly long responses
3. **Reuse conversations** : Efficient context window
4. **Monitoring** : Track your usage in the Console

### Security

1. **Protect your token** : Environment variables
2. **Regular rotation** : Change your keys periodically
3. **Input validation** : Sanitize user data
4. **Client rate limiting** : Implement your own limits

## SDK and Integrations

The LLMaaS API is compatible with existing OpenAI SDKs by modifying the base URL:

### OpenAI Python SDK

```python
from openai import OpenAI

# It is recommended to protect your API key using environment variables.
# Example: api_key=os.getenv("LLMAAS_API_KEY")
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
        max_tokens=50 # Added max_tokens for consistency with tests
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Chat model configuration (compatible with LLMaaS)
# It is recommended to protect your API key using environment variables.
# Example: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    # Note: Parameters like max_tokens are passed via model_kwargs
    # to ensure compatibility between LangChain versions.
    model_kwargs={"max_tokens": 200}
)

try:
    # Usage with messages
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # Or with a simple string
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Using Embeddings

:::warning Incompatibility with standard LangChain clients
Currently, using the embedding endpoint via standard LangChain classes (`langchain_openai.OpenAIEmbeddings` or `langchain_community.OllamaEmbeddings`) is incompatible with our API.

- `OpenAIEmbeddings` sends pre-calculated tokens instead of raw text, which is rejected.
- `OllamaEmbeddings` does not handle the required Bearer Token authentication.

Until a permanent solution is available, it is recommended to create a custom embedding class or call the API directly, as demonstrated in the `exemples/simple-rag-demo` example.
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
                # Sort embeddings by their index to guarantee order
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

# Usage
# embeddings = LLMaaSEmbeddings(
#     api_key="VOTRE_TOKEN_API",
#     base_url="https://api.ai.cloud-temple.com/v1",
#     model_name="granite-embedding:278m"
# )
# vector = embeddings.embed_query("Mon texte à vectoriser")
```

## Support

- **Documentation** : [Quick Start Guide](./quickstart)
- **Model Catalog** : [Full List](./models)
- **Console** : Management and monitoring via Cloud Temple Console
- **Support** : Via the Cloud Temple Console