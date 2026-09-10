---
title: Visión general
sidebar_position: 1
---

# LLM como Servicio (LLMaaS)

LLMaaS proporciona acceso a los modelos de IA alojados por Cloud Temple a través de una API: asistentes conversacionales, programación y agentes, análisis de imágenes, búsqueda semántica, reranking, traducción y usos de audio/imagen.

## Catálogo, novedades y disponibilidad

- **[Catálogo y ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)** : modelos, contexto, estados LTS, fin del soporte y migraciones recomendadas.
- **[Novedades LLMaaS](https://llmaas.status.cloud-temple.app/changelog)** : agregados de modelos, actualizaciones del servicio y anuncios de redirección.
- **[Estado del servicio](https://llmaas.status.cloud-temple.app/)** y **[historial](https://llmaas.status.cloud-temple.app/history)** : disponibilidad y rendimiento observado.

Para comenzar, siga la [guía de inicio rápido](./quickstart.md). Para elegir un modelo, consulte la [guía del catálogo](./models.md).

## Funcionalidades

| Uso | Guía |
|-------|-------|
| Generación de texto, streaming, llamadas a herramientas y visión | [API LLMaaS](./api.md) |
| Búsqueda aumentada por generación | [Comprender el RAG](./rag_explained.md) |
| Clasificación de documentos por relevancia | [Reranking](./rerank.md) |
| Procesamiento asíncrono de lotes de solicitudes | [Batch](./batch.md) |
| Cambio de modelo y gestión de identificadores anteriores | [Ciclo de vida y migración](./concepts.md#migración-a-otro-modelo) |

Las optimizaciones de inferencia, incluida la predicción de múltiples tokens (*MTP*) anunciada en el registro de cambios, se realizan en el lado del servicio. Evalúe sus efectos en sus propias solicitudes a partir de las métricas de supervisión.

## Acceso a la API

La API es accesible a través de la Consola Cloud Temple. Puede gestionar sus claves de API, supervisar su consumo y configurar sus tiers en la configuración de su cuenta. La consola también permite visualizar el uso de sus modelos.

## Autenticación

Todas las solicitudes a la API LLMaaS deben incluir un encabezado `Authorization` con su clave API en formato Bearer token. Si utiliza los SDK de cliente, la clave se incluirá automáticamente en cada solicitud. Si integra directamente con la API, debe enviar este encabezado usted mismo.

## Tipos de contenido

Las solicitudes de generación de texto utilizan JSON con la cabecera `Content-Type: application/json`. El streaming devuelve eventos SSE y la transcripción de archivos de audio utiliza `multipart/form-data`. Consulte la [documentation API](./api.md) para el formato de cada endpoint.

## Metadatos de las respuestas

Según el endpoint, el cuerpo JSON de la respuesta puede contener los siguientes campos:

- `id` : Identificador de la respuesta.
- `backend` : Información sobre el motor y la instancia que procesaron la solicitud (`engine_type`, `machine_name`).

Estos campos se leen en el cuerpo JSON, no en los encabezados HTTP. Consulte la [referencia de la API](./api.md) para el formato y los campos documentados de cada endpoint.

## Ejemplos

### Solicitud cURL
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

### Parámetros disponibles

| Parámetro     | Tipo    | Descripción                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | El modelo a utilizar (ver [catálogo de modelos](./models.md)) |
| `messages`    | array   | Lista de mensajes de la conversación                          |
| `max_tokens`  | integer | Número máximo de tokens a generar                             |
| `temperature` | float   | Controla la creatividad (0.0-2.0)                             |
| `top_p`       | float   | Controla la diversidad de las respuestas                      |
| `stream`      | boolean | Activa el streaming de la respuesta                           |
| `user`        | string  | Identificador único del usuario final                         |

## URL base

La URL base para todas las solicitudes de API es:
```
https://api.ai.cloud-temple.com/v1/
```

## Endpoints disponibles

- `/chat/completions` : Generación de respuestas conversacionales
- `/chat/completions/batch` : Procesamiento asíncrono de múltiples conversaciones ([guide Batch](./batch.md))
- `/completions` : Completado de texto simple
- `/embeddings` : Vectorización para búsqueda semántica y RAG
- `/rerank` y `/v2/rerank` : Reordenación de resultados (compatible Cohere SDK)
- `/audio/transcriptions` : Transcripción de audio en lote (Whisper)
- `/audio/speech` : Síntesis de voz (TTS)
- `/images/generations` : Generación de imágenes
- `/models` : Lista de modelos disponibles

### Ejemplo: Lista de modelos

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

La respuesta proporciona los identificadores expuestos por la API. Consulte también el [ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para verificar las depreciaciones y redirecciones. Los modelos utilizados en los ejemplos son ilustrativos; verifique su disponibilidad antes de la ejecución.