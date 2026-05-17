---
title: Übersicht
sidebar_position: 1
---

# LLM als Dienstleistung (LLMaaS)

## Zugriff auf die API

Die API ist über die Cloud Temple-Konsole zugänglich. Sie können Ihre API-Schlüssel verwalten, Ihren Verbrauch überwachen und Ihre Drittanbieter in den Kontoeinstellungen konfigurieren. Die Konsole ermöglicht zudem die Anzeige der Nutzung Ihrer Modelle.

## Authentifizierung

Alle Anfragen an die LLMaaS-API müssen einen `Authorization`-Header mit Ihrem API-Schlüssel im Bearer-Token-Format enthalten. Wenn Sie die Client-SDKs verwenden, wird der Schlüssel automatisch in jede Anfrage eingebunden. Bei einer direkten Integration mit der API müssen Sie diesen Header selbst senden.

## Inhaltstypen

Die LLMaaS-API akzeptiert stets JSON im Anfragetext und gibt JSON im Antworttext zurück. Sie müssen den Header `content-type: application/json` in Ihren Anfragen senden. Bei Verwendung der Client-SDKs wird dies automatisch verwaltet.

## Antwort-Header

Die LLMaaS-API enthält die folgenden Header in jeder Antwort:

- `id` : Eine global eindeutige ID für die Anfrage
- `backend` : Informationen zur verwendeten Infrastruktur (engine_type, machine_name)

## Beispiele

### cURL-Anfrage
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

### Antwort
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

### Verfügbare Parameter

| Parameter     | Typ     | Beschreibung                                                |
| ------------- | ------- | ----------------------------------------------------------- |
| `model`       | string  | Das zu verwendende Modell (siehe [Modellkatalog](./models.md)) |
| `messages`    | array   | Liste der Nachrichten der Konversation                      |
| `max_tokens`  | integer | Maximale Anzahl der zu generierenden Tokens                 |
| `temperature` | float   | Steuert die Kreativität (0.0-2.0)                           |
| `top_p`       | float   | Steuert die Vielfalt der Antworten                         |
| `stream`      | boolean | Aktiviert das Streaming der Antwort                         |
| `user`        | string  | Eindeutige ID des Endbenutzers                              |

## Basis-URL

Die Basis-URL für alle API-Anfragen lautet:
```
https://api.ai.cloud-temple.com/v1/
```

## Verfügbare Endpunkte

- `/chat/completions` : Generierung von Chat-Antworten
- `/completions` : Einfache Textvervollständigung
- `/embeddings` : Vektorisierung für semantische Suche und RAG
- `/rerank` und `/v2/rerank` : Neuanordnung von Ergebnissen (kompatibel mit Cohere SDK)
- `/audio/transcriptions` : Batch-Audio-Transkription (Whisper)
- `/audio/speech` : Sprachsynthese (TTS)
- `/images/generations` : Bildgenerierung
- `/models` : Liste der verfügbaren Modelle

### Beispiel: Modellliste

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Antwort** :
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

Die Antwort enthält alle verfügbaren Modelle mit ihren Spezifikationen und Berechtigungen.