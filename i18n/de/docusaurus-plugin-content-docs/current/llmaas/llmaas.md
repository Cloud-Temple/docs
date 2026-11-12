---
title: Übersicht
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

LLMaaS bietet Zugriff auf von Cloud Temple gehostete KI-Modelle über eine API: Konversationsassistenten, Programmierung und Agenten, Bildanalyse, semantische Suche, Reranking, Übersetzung und Audio-/Bildanwendungen.

## Katalog, Neuigkeiten und Verfügbarkeit

- **[Katalog und Lebenszyklus der Modelle](https://llmaas.status.cloud-temple.app/lifecycle)**: Modelle, Kontext, LTS-Status, Support-Enden und empfohlene Migrationen.
- **[LLMaaS-Neuigkeiten](https://llmaas.status.cloud-temple.app/changelog)**: Modellzusätze, Serviceentwicklungen und Umleitungsmeldungen.
- **[Servicezustand](https://llmaas.status.cloud-temple.app/)** und **[Historie](https://llmaas.status.cloud-temple.app/history)**: beobachtete Verfügbarkeit und Leistung.

Zum Einstieg folgen Sie dem [Schnellstartguide](./quickstart.md). Um ein Modell auszuwählen, konsultieren Sie den [Katalogguide](./models.md).

## Funktionen

| Verwendung | Guide |
|-------|-------|
| Textgenerierung, Streaming, Tool-Aufrufe und Vision | [LLMaaS-API](./api.md) |
| Retrieval-Augmented Generation | [RAG verstehen](./rag_explained.md) |
| Relevanzbasierte Dokumentenklassifizierung | [Reranking](./rerank.md) |
| Asynchrone Batch-Verarbeitung von Anfragen | [Batch](./batch.md) |
| Modellwechsel und Verwaltung alter Bezeichner | [Lebenszyklus und Migration](./concepts.md#migration-zu-einem-anderen-modell) |

Die Inferenzoptimierungen, einschließlich der im Changelog angekündigten Multi-Token-Prediction (*MTP*), werden auf der Service-Seite durchgeführt. Bewerten Sie deren Auswirkungen auf Ihre eigenen Anfragen anhand der Überwachungsdaten.

## API-Zugriff

Die API ist über die Cloud Temple Console zugänglich. Sie können Ihre API-Keys verwalten, Ihren Verbrauch überwachen und Ihre Tiers in den Kontoeinstellungen konfigurieren. Die Console ermöglicht es außerdem, die Nutzung Ihrer Modelle zu visualisieren.

## Authentifizierung

Alle Anfragen an die LLMaaS-API müssen einen `Authorization`-Header mit Ihrem API-Key im Bearer-Token-Format enthalten. Wenn Sie Client-SDKs verwenden, wird der Schlüssel automatisch in jeder Anfrage enthalten sein. Wenn Sie direkt mit der API integrieren, müssen Sie diesen Header selbst senden.

## Inhaltstypen

Textgenerierungsanfragen verwenden JSON mit dem Header `Content-Type: application/json`. Das Streaming liefert SSE-Ereignisse und die Transkription von Audio-Dateien verwendet `multipart/form-data`. Konsultieren Sie die [API-Dokumentation](./api.md) für das Format jedes Endpoints.

## Antwort-Metadaten

Je nach Endpoint kann der JSON-Antwortkörper die folgenden Felder enthalten:

- `id`: Antwortkennung.
- `backend`: Informationen zu Engine und Instanz, die die Anfrage verarbeitet haben (`engine_type`, `machine_name`).

Diese Felder befinden sich im JSON-Antwortkörper, nicht in den HTTP-Headern. Konsultieren Sie die [API-Referenz](./api.md) für das Format und die dokumentierten Felder jedes Endpoints.

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
| `model`       | string  | Das zu verwendende Modell (siehe [Modellkatalog](./models.md)) |
| `messages`    | array   | Liste der Konversationsnachrichten                             |
| `max_tokens`  | integer | Maximale Anzahl zu generierender Tokens                        |
| `temperature` | float   | Steuert die Kreativität (0.0–2.0)                              |
| `top_p`       | float   | Steuert die Vielfalt der Antworten                             |
| `stream`      | boolean | Aktiviert das Streaming der Antwort                            |
| `user`        | string  | Eindeutige Kennung des Endnutzers                              |

## Basis-URL

Die Basis-URL für alle API-Anfragen lautet:
```
https://api.ai.cloud-temple.com/v1/
```

## Verfügbare Endpoints

- `/chat/completions`: Generierung konversationeller Antworten
- `/chat/completions/batch`: Asynchrone Verarbeitung mehrerer Konversationen ([Batch-Guide](./batch.md))
- `/completions`: Einfache Textergänzung
- `/embeddings`: Vektorisierung für semantische Suche und RAG
- `/rerank` und `/v2/rerank`: Neusortierung von Ergebnissen (kompatibel mit Cohere SDK)
- `/audio/transcriptions`: Audio-Transkription per Batch (Whisper)
- `/audio/speech`: Sprachsynthese (TTS)
- `/images/generations`: Bildgenerierung
- `/models`: Liste der verfügbaren Modelle

### Beispiel: Modellliste

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Die Antwort liefert die von der API bereitgestellten Bezeichner. Konsultieren Sie auch den [Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle), um Deprecations und Umleitungen zu überprüfen. Die in den Beispielen verwendeten Modelle sind illustrativ; prüfen Sie deren Verfügbarkeit vor der Ausführung.
