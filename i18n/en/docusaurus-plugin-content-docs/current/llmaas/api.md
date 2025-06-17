---
title: API Documentation
sidebar_position: 2
---

# API Documentation LLMaaS

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

Our third-party system is designed as **complete service envelopes** that define three key aspects of your usage:

1.  **An Access Tier (Purchase Credit)**: For Tiers 1 to 4, this is an upfront amount to be paid to activate the service and unlock the technical and budgetary capabilities of the selected tier.
2.  **A Monthly Budget Limit**: This is the cap on your monthly consumption, ensuring full control over your costs.
3.  **A Technical Capacity**: These are the throughput limits (tokens per day and per hour) that guarantee stable and predictable performance for your call volume.

Choosing a tier is therefore a balance between the initial investment, the projected monthly budget, and the required technical capacity. Your consumption within this envelope is then billed according to the current pricing.

### Third Party Table

| Tier | Purchase Credit | Monthly Limit | Output Tokens/Hour | Output Tokens/Day | Description |
|------|-----------------|----------------|--------------------|-------------------|-------------| 
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Standard Usage |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Professional Use |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | High Volume |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Enterprise |
| **Monthly Billing** | N/A | Unlimited | High Priority | High Priority | Commercial Contact |

**Note** : Rate limits are calculated based on output tokens. Token pricing varies according to usage:
- **Input Tokens** : 0.90 € / million
- **Output Tokens (Standard)** : 4.00 € / million
- **Output Tokens (Reasoner)** : 21.00 € / million (applies to the most advanced models for complex agent-like or reasoning tasks)

### Rate Limit Headers

The responses include informative headers:

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

Generate conversational responses.

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
| `model` | string | ✅ | Model ID (see [catalogue](./models)) |
| `messages` | array | ✅ | Conversation (role: system/user/assistant) |
| `stream` | boolean | ❌ | Enable streaming (default: false) |
| `temperature` | float | ❌ | Creativity 0.0-2.0 (default: 0.7) |
| `max_tokens` | integer | ❌ | Token limit (default: 1024) |
| `top_p` | float | ❌ | Nucleus sampling 0.0-1.0 (default: 1.0) |
| `presence_penalty` | float | ❌ | Presence penalty -2.0 to 2.0 (default: 0) |
| `frequency_penalty` | float | ❌ | Frequency penalty -2.0 to 2.0 (default: 0) |
| `user` | string | ❌ | User ID |
| `tools` | array | ❌ | List of tools the model can call. |
| `tool_choice`| string/object | ❌ | Controls whether the model should call a tool. "none", "auto", or `{"type": "function", "function": {"name": "my_function"}}`. |

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

After receiving a `tool_calls` response, you must execute the tool on your side, then return the result to the model using a message with `role: "tool"`.

```json
{
  "model": "qwen3:14b",
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

**Response headers:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Event format:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Chunk structure:**
- `choices[].delta.content`: Incremental content
- `finish_reason`: `null` during streaming, then `"stop"`
- End signal: `data: [DONE]`

### Multimodal Requests (Vision)

To analyze images, you can send a request where the `content` field of a user message is an array containing both text and images.

The format for an image is an object with `type: "image_url"` and a field `image_url` containing the image URL in `data URI` format (base64).

:::info Compatibility Note
Although the standard and recommended format is `{"type": "image_url", "image_url": {"url": "data:..."}}`, the API also supports for flexibility a simplified format `{"type": "image", "image": "data:..."}`. However, it is recommended to use the standard `image_url` format for better compatibility with the OpenAI ecosystem.
:::

#### Vision Request Example

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "model": "gemma3:27b",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "What do you see in this image?"
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
**Note** : The `/v1/completions` endpoint uses the same format as `/v1/chat/completions` with messages. 
For simple text completion, use a user message with your prompt.
:::

Text completions using the chat format.

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
        "content": "Complétez cette phrase: L'intelligence artificielle est"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parameters

Identical to /v1/chat/completions - see previous section.

#### Answer

Same format as `/v1/chat/completions`.

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | binary | ✅ | Audio file (wav, mp3, m4a). |
| `language` | string | ❌ | ISO 639-1 language code (e.g., "fr"). Automatic detection if not provided. |
| `initial_prompt` | string | ❌ | Context or specific words to improve transcription accuracy. |
| `task` | string | ❌ | Task to perform: `transcribe` (default) or `translate` (translate to English). |
| `response_format` | string | ❌ | `json` (default, equivalent to `verbose_json`), `text`, `srt`, `vtt`. |

#### Response (`json`)

```json
{
  "text": "Hello, this is a test of audio transcription.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Hello, this is a test of audio transcription.",
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

### POST /v1/audio/transcriptions_batch

Transcription of multiple audio files in parallel.

#### Request

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions_batch" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "files=@audio1.wav" \
  -F "files=@audio2.mp3" \
  -F "language=fr"
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | array | ✅ | List of audio files to transcribe. |
| `language` | string | ❌ | ISO 639-1 language code (e.g., "fr"). |
| `initial_prompt` | string | ❌ | Context to improve transcription. |
| `task` | string | ❌ | Task to perform: `transcribe` (default) or `translate`. |

#### Answer

```json
{
  "batch_results": [
    {
      "filename": "audio1.wav",
      "text": "This is the first file.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio2.mp3",
      "text": "And here is the second.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio3.ogg",
      "text": null,
      "segments": [],
      "language": null,
      "error": "Transcription error for this file."
    }
  ]
}
```

### GET /v1/models

List of available models.

#### Request

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Answer

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
API_KEY = "YOUR_API_TOKEN"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat completion
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
```

# Usage
stream_chat("Expliquez la physique quantique")

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
            print("Rate limit reached, waiting...")
            time.sleep(60)  # Wait 1 minute
            return safe_api_call(payload)  # Retry
        else:
            print(f"HTTP Error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Network Error: {e}")
```

### Cost Optimization

1. **Use appropriate models** : Smaller models for testing
2. **Limit max_tokens** : Avoid overly long responses
3. **Reuse conversations** : Efficient context window
4. **Monitoring** : Track your usage in the Console

### Security

1. **Protect your token**: Environment variables  
2. **Regular rotation**: Change your keys periodically  
3. **Input validation**: Clean user data  
4. **Client rate limiting**: Implement your own limits

## SDK and Integrations

The LLMaaS API is compatible with existing OpenAI SDKs by modifying the base URL:

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
```

# Chat model configuration (compatible with LLMaaS)
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Usage with messages
messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
response = chat.invoke(messages)
print(response.content)

# Or with a simple string
response = chat.invoke("Bonjour, comment ça va ?")
print(response.content)
```

## Support

- **Documentation** : [Quick Start Guide](./quickstart)
- **Model Catalog** : [Full List](./models)
- **Console** : Management and monitoring via Console Cloud Temple
- **Support** : Via the Console Cloud Temple