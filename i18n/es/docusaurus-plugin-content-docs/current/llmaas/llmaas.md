---
title: Visión general
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

## Acceso a la API

La API está disponible a través de la Consola Cloud Temple. Puede gestionar sus claves API, supervisar su consumo y configurar sus proveedores en la configuración de su cuenta. La consola también permite visualizar el uso de sus modelos.

## Autenticación

Todas las solicitudes a la API LLMaaS deben incluir un encabezado `Authorization` con su clave API en formato Bearer token. Si utiliza los SDK de cliente, la clave se incluirá automáticamente en cada solicitud. Si integra directamente con la API, debe enviar este encabezado usted mismo.

## Tipos de contenido

La API LLMaaS siempre acepta JSON en el cuerpo de las solicitudes y devuelve JSON en el cuerpo de las respuestas. Debe enviar el encabezado `content-type: application/json` en sus solicitudes. Si utiliza los SDK de cliente, esto se gestionará automáticamente.

## Encabezados de respuesta

La API LLMaaS incluye los siguientes encabezados en cada respuesta:

- `id` : Un identificador globalmente único para la solicitud
- `backend` : Información sobre la infraestructura utilizada (engine_type, machine_name)

## Ejemplos

### Solicitud cURL
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user", 
        "content": "¡Hola! ¿Puedes presentarte en francés?"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

### Respuesta
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
        "content": "¡Hola! Soy un modelo de lenguaje virtual...",
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

### Parámetros disponibles

| Parámetro     | Tipo    | Descripción                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | El modelo a utilizar (ver [catálogo de modelos](./models)) |
| `messages`    | array   | Lista de mensajes de la conversación                         |
| `max_tokens`  | integer | Número máximo de tokens a generar                            |
| `temperature` | float   | Controla la creatividad (0.0-2.0)                              |
| `top_p`       | float   | Controla la diversidad de las respuestas                            |
| `stream`      | boolean | Activa el streaming de la respuesta                             |
| `user`        | string  | Identificador único del usuario final                     |

## URL base

La URL base para todas las solicitudes API es:
```
https://api.ai.cloud-temple.com/v1/
```

## Endpoints disponibles

- `/chat/completions` : Generación de respuestas conversacionales
- `/completions` : Completión de texto simple
- `/models` : Lista de modelos disponibles

### Ejemplo: Lista de modelos

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Respuesta** :
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

La respuesta contiene todos los modelos disponibles con sus especificaciones y permisos.