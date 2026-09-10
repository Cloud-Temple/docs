---
title: Overview
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

LLMaaS provides access to AI models hosted by Cloud Temple via an API: conversational assistants, coding and agents, image analysis, semantic search, reranking, translation, and audio/image use cases.

## Catalog, Updates, and Availability

- **[Model Catalog and Lifecycle](https://llmaas.status.cloud-temple.app/lifecycle)** : models, context, LTS statuses, end-of-support dates, and recommended migrations.
- **[LLMaaS Updates](https://llmaas.status.cloud-temple.app/changelog)** : model additions, service updates, and redirection announcements.
- **[Service Status](https://llmaas.status.cloud-temple.app/)** and **[History](https://llmaas.status.cloud-temple.app/history)** : observed availability and performance.

To get started, follow the [quickstart guide](./quickstart.md). To choose a model, refer to the [catalog guide](./models.md).

## Features

| Usage | Guide |
|-------|-------|
| Text generation, streaming, tool calls, and vision | [API LLMaaS](./api.md) |
| Retrieval-Augmented Generation | [Understanding RAG](./rag_explained.md) |
| Document relevance ranking | [Reranking](./rerank.md) |
| Asynchronous batch request processing | [Batch](./batch.md) |
| Model switching and legacy ID management | [Lifecycle and migration](./concepts.md#migration-to-another-model) |

Inference optimizations, including the multi-token prediction (*MTP*) announced in the changelog, are handled on the service side. Evaluate their impact on your own requests using monitoring metrics.

## API Access

The API is accessible via the Cloud Temple Console. You can manage your API keys, monitor your usage, and configure your tiers in your account settings. The console also allows you to visualize your model usage.

## Authentication

All requests to the LLMaaS API must include an `Authorization` header with your API key in Bearer token format. If you are using the client SDKs, the key will be automatically included in each request. If you integrate directly with the API, you must send this header yourself.

## Content Types

Text generation requests use JSON with the header `Content-Type: application/json`. Streaming returns SSE events and audio file transcription uses `multipart/form-data`. Refer to the [API documentation](./api.md) for the format of each endpoint.

## Response Metadata

Depending on the endpoint, the JSON response body may contain the following fields:

- `id` : Response identifier.
- `backend` : Information about the engine and instance that processed the request (`engine_type`, `machine_name`).

These fields are read from the JSON body, not from the HTTP headers. Consult the [API reference](./api.md) for the format and documented fields of each endpoint.

## Examples

### cURL Request
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-oss:120b",
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

### Response
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
  "model": "gpt-oss:120b",
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
| `model`       | string  | The model to use (see [catalogue des modèles](./models.md)) |
| `messages`    | array   | List of conversation messages                         |
| `max_tokens`  | integer | Maximum number of tokens to generate                            |
| `temperature` | float   | Controls creativity (0.0-2.0)                              |
| `top_p`       | float   | Controls response diversity                            |
| `stream`      | boolean | Enables response streaming                             |
| `user`        | string  | Unique identifier for the end user                     |

## Base URL

The base URL for all API requests is:
```
https://api.ai.cloud-temple.com/v1/
```

## Available Endpoints

- `/chat/completions` : Generation of conversational responses
- `/chat/completions/batch` : Asynchronous processing of multiple conversations ([guide Batch](./batch.md))
- `/completions` : Simple text completion
- `/embeddings` : Vectorization for semantic search and RAG
- `/rerank` and `/v2/rerank` : Result reranking (compatible Cohere SDK)
- `/audio/transcriptions` : Batch audio transcription (Whisper)
- `/audio/speech` : Speech synthesis (TTS)
- `/images/generations` : Image generation
- `/models` : List of available models

### Example: List of Models

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

The response provides the identifiers exposed by the API. Also consult the [lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) to check for deprecations and redirects. The models used in the examples are for illustrative purposes; verify their availability before execution.