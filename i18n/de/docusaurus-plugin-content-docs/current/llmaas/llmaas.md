---
title: Übersicht
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

LLMaaS bietet Zugriff auf von Cloud Temple gehostete KI-Modelle über eine API: Konversationsassistenten, Programmierung und Agenten, Bildanalyse, semantische Suche, Reranking, Übersetzung sowie Audio- und Bildanwendungen.

## Katalog, Neuigkeiten und Verfügbarkeit

- **[Katalog und Lebenszyklus der Modelle](https://llmaas.status.cloud-temple.app/lifecycle)** : Modelle, Kontext, LTS-Status, Supportende und empfohlene Migrationen.
- **[Neuigkeiten zu LLMaaS](https://llmaas.status.cloud-temple.app/changelog)** : Neue Modelle, Service-Updates und Umleitungsankündigungen.
- **[Service-Status](https://llmaas.status.cloud-temple.app/)** und **[Verlauf](https://llmaas.status.cloud-temple.app/history)** : Verfügbarkeit und beobachtete Leistung.

Um zu beginnen, folgen Sie der [Schnellstartanleitung](./quickstart.md). Um ein Modell auszuwählen, konsultieren Sie den [Katalogleitfaden](./models.md).

## Funktionen

| Verwendung | Leitfaden |
|-------|-------|
| Textgenerierung, Streaming, Tool-Aufrufe und Vision | [API LLMaaS](./api.md) |
| Generativ erweiterte Suche | [Comprendre le RAG](./rag_explained.md) |
| Dokumenten-Ranking nach Relevanz | [Reranking](./rerank.md) |
| Asynchrone Batch-Verarbeitung von Anfragen | [Batch](./batch.md) |
| Modellwechsel und Verwaltung veralteter IDs | [Cycle de vie et migration](./concepts.md#migration-zu-einem-anderen-modell) |

Inferenzoptimierungen, einschließlich der im Changelog angekündigten Mehrfach-Token-Vorhersage (*MTP*), werden serverseitig durchgeführt. Bewerten Sie deren Auswirkungen auf Ihre eigenen Anfragen anhand der Monitoring-Metriken.

## Zugriff auf die API

Die API ist über die Cloud Temple-Konsole zugänglich. Sie können Ihre API-Schlüssel verwalten, Ihre Nutzung überwachen und Drittanbieter in den Kontoeinstellungen konfigurieren. Die Konsole ermöglicht es Ihnen außerdem, die Nutzung Ihrer Modelle zu visualisieren.

## Authentifizierung

Alle Anfragen an die LLMaaS-API müssen einen `Authorization`-Header mit Ihrem API-Schlüssel im Bearer-Token-Format enthalten. Wenn Sie die Client-SDKs verwenden, wird der Schlüssel automatisch in jede Anfrage aufgenommen. Wenn Sie direkt mit der API integrieren, müssen Sie diesen Header selbst senden.

## Inhaltstypen

Textgenerierungsanfragen verwenden JSON mit dem Header `Content-Type: application/json`. Das Streaming gibt SSE-Ereignisse zurück und die Transkription von Audiodateien verwendet `multipart/form-data`. Siehe die [documentation API](./api.md) für das Format jedes Endpunkts.

## Antwortmetadaten

Je nach Endpoint kann der JSON-Body der Antwort die folgenden Felder enthalten:

- `id` : Antwortkennung.
- `backend` : Informationen zur Engine und zur Instanz, die die Anfrage verarbeitet hat (`engine_type`, `machine_name`).

Diese Felder befinden sich im JSON-Body, nicht in den HTTP-Headern. Siehe die [API-Referenz](./api.md) für das Format und die dokumentierten Felder jedes Endpoints.

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

| Parameter     | Typ     | Beschreibung                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | Das zu verwendende Modell (siehe [catalogue des modèles](./models.md)) |
| `messages`    | array   | Liste der Nachrichten im Gespräch                         |
| `max_tokens`  | integer | Maximale Anzahl der zu generierenden Tokens                            |
| `temperature` | float   | Steuert die Kreativität (0.0-2.0)                              |
| `top_p`       | float   | Steuert die Vielfalt der Antworten                            |
| `stream`      | boolean | Aktiviert das Streaming der Antwort                             |
| `user`        | string  | Eindeutige Kennung des Endbenutzers                     |

## Basis-URL

Die Basis-URL für alle API-Anfragen lautet:
```
https://api.ai.cloud-temple.com/v1/
```

## Verfügbare Endpunkte

- `/chat/completions` : Generierung konversationeller Antworten
- `/chat/completions/batch` : Asynchrone Verarbeitung mehrerer Konversationen ([guide Batch](./batch.md))
- `/completions` : Einfache Textvervollständigung
- `/embeddings` : Vektorisierung für semantische Suche und RAG
- `/rerank` und `/v2/rerank` : Reranking von Ergebnissen (compatible Cohere SDK)
- `/audio/transcriptions` : Batch-Audiotranskription (Whisper)
- `/audio/speech` : Sprachsynthese (TTS)
- `/images/generations` : Bildgenerierung
- `/models` : Liste der verfügbaren Modelle

### Beispiel: Liste der Modelle

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Die Antwort enthält die von der API bereitgestellten Identifikatoren. Siehe auch den [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle), um Deprekationen und Weiterleitungen zu überprüfen. Die in den Beispielen verwendeten Modelle dienen nur der Veranschaulichung; prüfen Sie ihre Verfügbarkeit vor der Ausführung.