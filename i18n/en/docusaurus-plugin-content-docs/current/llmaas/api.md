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

### Tiered Credit System

| Tier | Purchase Credit | Monthly Limit | Tokens Output/Hour | Tokens Output/Day | Description |
|------|-----------------|----------------|--------------------|-------------------|-----------| 
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Standard usage |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Professional use |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | High volume |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Enterprise |
| **Monthly Billing** | N/A | Unlimited | High priority | High priority | Contact sales |

**Note**: Limits calculated on output tokens (4€/million). Input tokens (0.9€/million) have proportionally higher limits.

### Rate Limit Headers

Responses include informative headers:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Error 429 - Rate Limit Exceeded

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
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Explain photosynthesis"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string | ✅ | Model ID (see [catalog](./models)) |
| `messages` | array | ✅ | Conversation (role: system/user/assistant) |
| `stream` | boolean | ❌ | Enable streaming (default: false) |
| `temperature` | float | ❌ | Creativity 0.0-2.0 (default: 0.7) |
| `max_tokens` | integer | ❌ | Token limit (default: 1024) |
| `top_p` | float | ❌ | Nucleus sampling 0.0-1.0 (default: 1.0) |
| `presence_penalty` | float | ❌ | Presence penalty -2.0 to 2.0 (default: 0) |
| `frequency_penalty` | float | ❌ | Frequency penalty -2.0 to 2.0 (default: 0) |
| `user` | string | ❌ | Unique user ID |

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
        "content": "Photosynthesis is a biological process..."
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

With `"stream": true`, the response arrives token by token:

**Response Headers:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Event Format:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Chunk Structure:**
- `choices[].delta.content` : Incremental content
- `finish_reason` : `null` during streaming, then `"stop"`
- End signal: `data: [DONE]`

### POST /v1/completions

:::warning
**Note** : The `/v1/completions` endpoint uses the same format as `/v1/chat/completions` with messages. 
For simple text completion, use a user message with your prompt.
:::

Text completion via chat format.

#### Request

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Complete this sentence: Artificial intelligence is"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parameters

Same as `/v1/chat/completions` - see previous section.

#### Response

Same format as `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio to text transcription (Whisper).

#### Request

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | binary | ✅ | Audio file (wav, mp3, m4a) |
| `language` | string | ❌ | ISO 639-1 language code (e.g., "fr") |
| `prompt` | string | ❌ | Context to improve transcription |
| `response_format` | string | ❌ | json, text, srt, vtt (default: json) |
| `temperature` | float | ❌ | Transcription creativity (default: 0) |

#### Response

```json
{
  "text": "Hello, this is an audio transcription test."
}
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

### Python with requests

```python
import requests
import json

# Configuration
API_KEY = "VOTRE_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat completion
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Hello!"}
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

### Python with Streaming

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
                data = line[6:]  # Remove 'data: '
                if data == '[DONE]':
                    break
                try:
                    chunk = json.loads(data)
                    content = chunk['choices'][0]['delta'].get('content', '')
                    if content:
                        print(content, end='', flush=True)
                except json.JSONDecodeError:
                    continue

# Usage
stream_chat("Explain quantum physics")
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
        console.error(`Error ${error.response?.status}:`, error.response?.data);
    }
}

// Example usage
chatCompletion("What is photosynthesis?");
```

### JavaScript/Node.js with async/await

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
                ]
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

// Usage
chatCompletion('Bonjour !').then(response => {
    console.log(response);
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

### Error Handling

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate limit reached, wait...")
            time.sleep(60)  # Wait 1 minute
            return safe_api_call(payload)  # Retry
        else:
            print(f"HTTP Error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Network Error: {e}")
```

### Cost Optimization

1. **Use appropriate models**: Smaller models for tests
2. **Limit max_tokens**: Avoid overly long responses
3. **Reuse conversations**: Effective context window
4. **Monitoring**: Track your usage in the Console

### Security

1. **Protect your token**: Use environment variables
2. **Regular rotation**: Change your keys periodically
3. **Input validation**: Clean user data
4. **Rate limiting client**: Implement your own limits

## SDKs and Integrations

The LLMaaS API is compatible with existing OpenAI SDKs by changing the base URL:

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

# Configuration du chat model (compatible avec LLMaaS)
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Utilisation avec messages
messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
response = chat.invoke(messages)
print(response.content)

# Ou avec une simple chaîne
response = chat.invoke("Bonjour, comment ça va ?")
print(response.content)
```

## Support

- **Documentation** : [Quick Start Guide](./quickstart)
- **Model Catalog** : [Full List](./models)
- **Console** : Management and monitoring via Cloud Temple Console
- **Support** : Via Cloud Temple Console
