---
title: Übersicht
sidebar_position: 1
---

# LLM als Dienst (LLMaaS)

## Accès à l'API

Die API ist über die Cloud Temple Console verfügbar. Sie können Ihre API-Schlüssel verwalten, Ihre Nutzung überwachen und Ihre Drittanbieter in den Einstellungen Ihres Kontos konfigurieren. Die Konsole ermöglicht auch die Anzeige des Einsatzes Ihrer Modelle.

## Authentifizierung

Alle Anfragen an die LLMaaS-API müssen einen `Authorization`-Header mit Ihrem API-Schlüssel im Bearer-Token-Format enthalten. Wenn Sie die Client-SDKs verwenden, wird der Schlüssel automatisch in jede Anfrage einbezogen. Wenn Sie direkt mit der API integrieren, müssen Sie diesen Header selbst senden.

## Inhaltsarten

Die LLMaaS-API akzeptiert immer JSON im Anfragekörper und gibt JSON im Antwortkörper zurück. Sie müssen den Header `content-type: application/json` in Ihre Anfragen senden. Wenn Sie die Client-SDKs verwenden, wird dies automatisch verwaltet.

## Antwort-Header

Die LLMaaS-API enthält die folgenden Header in jeder Antwort:

- `id` : Eine eindeutige globale Kennung für die Anfrage
- `backend` : Informationen über die verwendete Infrastruktur (engine_type, machine_name)

## Beispiele

### Anfrage cURL
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user", 
        "content": "Hallo! Kannst du dich in Französisch vorstellen?"
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
| `model`       | string  | Das zu verwendende Modell (siehe [catalogue des modèles](./models)) |
| `messages`    | array   | Liste der Nachrichten der Unterhaltung                         |
| `max_tokens`  | integer | Maximale Anzahl an Tokens, die generiert werden sollen                            |
| `temperature` | float   | Steuert die Kreativität (0,0–2,0)                              |
| `top_p`       | float   | Steuert die Vielfalt der Antworten                            |
| `stream`      | boolean | Aktiviert den Streaming der Antwort                             |
| `user`        | string  | Eindeutiger Benutzer-Identifikator                     |

## Basis-URL

Die Basis-URL für alle API-Anfragen ist:
```
https://api.ai.cloud-temple.com/v1/
```

## Verfügbare Endpunkte

- `/chat/completions` : Erzeugung konversationeller Antworten
- `/completions` : Einfache Textergänzung
- `/embeddings` : Erstellt einen Embedding-Vektor, der den Eingabetext darstellt
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