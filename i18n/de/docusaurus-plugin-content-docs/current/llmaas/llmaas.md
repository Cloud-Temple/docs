---
title: Übersicht
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

## Zugang zur API

Die API ist über die Cloud Temple Console zugänglich. Sie können Ihre API-Schlüssel verwalten, Ihren Verbrauch überwachen und Ihre Drittanbieter in den Kontoeinstellungen konfigurieren. Die Konsole ermöglicht zudem die Anzeige des Verbrauchs Ihrer Modelle.

## Authentifizierung

Alle Anfragen an die LLMaaS-API müssen einen Header `Authorization` mit Ihrem API-Schlüssel im Bearer-Token-Format enthalten. Wenn Sie die Client-SDKs verwenden, wird der Schlüssel automatisch in jede Anfrage eingefügt. Wenn Sie direkt mit der API integriert sind, müssen Sie diesen Header selbst senden.

## Inhaltstypen

Die LLMaaS-API akzeptiert immer JSON im Anfrageseiteninhalt und gibt JSON im Antwortseiteninhalt zurück. Sie müssen den Header `content-type: application/json` in Ihren Anfragen senden. Wenn Sie die Client-SDKs verwenden, wird dies automatisch verwaltet.

## Antwort-Header

Die LLMaaS-API enthält in jeder Antwort die folgenden Header:

- `id`: Eine global eindeutige ID für die Anfrage
- `backend`: Informationen zur verwendeten Infrastruktur (engine_type, machine_name)

## Beispiele

### cURL-Anfrage
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user", 
        "content": "Hallo! Könntest du dich auf Französisch vorstellen?"
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
        "content": "Hallo! Ich bin ein virtueller Sprachmodell...",
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

### Verfügbare Parameter

| Parameter     | Typ    | Beschreibung                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | Das zu verwendende Modell (siehe [Modellkatalog](./models)) |
| `messages`    | array   | Liste der Nachrichten der Unterhaltung                         |
| `max_tokens`  | integer | Maximale Anzahl an Tokens, die generiert werden sollen                            |
| `temperature` | float   | Steuert die Kreativität (0,0-2,0)                              |
| `top_p`       | float   | Steuert die Vielfalt der Antworten                            |
| `stream`      | boolean | Aktiviert den Streaming-Modus der Antwort                             |
| `user`        | string  | Eindeutiger Benutzer-Identifikator                             |

## Basis-URL

Die Basis-URL für alle API-Anfragen ist:
```
https://api.ai.cloud-temple.com/v1/
```

## Verfügbare Endpunkte

- `/chat/completions` : Erzeugung von conversationalen Antworten
- `/completions` : Einfache Textergänzung
- `/models` : Liste der verfügbaren Modelle

### Beispiel: Liste der Modelle

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Antwort**:
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

Die Antwort enthält alle verfügbaren Modelle mit ihren Spezifikationen und Berechtigungen.