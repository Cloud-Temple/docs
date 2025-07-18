---
title: Overview
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

## Access to the API

The API is accessible via the Cloud Temple Console. You can manage your API keys, monitor your usage, and configure your third parties in your account settings. The console also allows you to view the usage of your models.

## Authentication

All requests to the LLMaaS API must include an `Authorization` header with your API key in Bearer token format. If you use the client SDKs, the key will be automatically included in each request. If you integrate directly with the API, you must send this header yourself.

## Content Types

The LLMaaS API always accepts JSON in the request body and returns JSON in the response body. You must send the `content-type: application/json` header in your requests. If you use the client SDKs, this will be handled automatically.

## Response Headers

The LLMaaS API includes the following headers in each response:

- `id` : A globally unique identifier for the request
- `backend` : Information on the infrastructure used (engine_type, machine_name)

## Examples

### cURL Request
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user", 
        "content": "Salut ! Peux-tu te présenter en français ?"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

### Answer
```json
{
  "backend": {
    "engine_type": "engo",
    "machine_name": "ma02"
  },
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "Bonjour ! Je suis un modèle de langage virtuel...",
        "role": "assistant"
      }
    }
  ],
  "created": 1749110753,
  "id": "chatcmpl-ollama-14b812ef-b21f-430c-b93c-d0d1bf653806",
  "model": "granite3.3:8b",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 200,
    "prompt_tokens": 70,
    "reasoning_tokens": 0,
    "total_tokens": 270
  }
}
```

### Available Parameters

| Parameter     | Type    | Description                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | The model to use (see [model catalog](./models))              |
| `messages`    | array   | List of conversation messages                                 |
| `max_tokens`  | integer | Maximum number of tokens to generate                          |
| `temperature` | float   | Controls creativity (0.0-2.0)                                 |
| `top_p`       | float   | Controls response diversity                                   |
| `stream`      | boolean | Enables response streaming                                    |
| `user`        | string  | Final user's unique identifier                                |

## Base URL

The base URL for all API requests is :
```
https://api.ai.cloud-temple.com/v1/
```

## Available Endpoints

- `/chat/completions` : Conversational response generation
- `/completions` : Simple text completion
- `/embeddings` : Creates an embedding vector representing the input text
- `/models` : List of available models

### Example: Model List

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Response**:
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
      "parent": null,
      "max_model_len": 60000,
      "permission": [
        {
          "id": "modelperm-granite3.3:8b-1749110897",
          "object": "model_permission",
          "created": 1749110897,
          "allow_create_engine": false,
          "allow_sampling": true,
          "allow_logprobs": true,
          "allow_search_indices": false,
          "allow_view": true,
          "allow_fine_tuning": false,
          "organization": "*",
          "group": null,
          "is_blocking": false
        }
      ]
    }
  ]
}
```

The response contains all available models with their specifications and permissions.