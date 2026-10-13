---
title: API-Dokumentation
sidebar_position: 2
---

# LLMaaS API-Dokumentation

## OpenAI-Kompatibilität

Die LLMaaS-API ist OpenAI-kompatibel für die in dieser Referenz dokumentierten Aufrufe. Konfigurieren Sie die Basis-URL `https://api.ai.cloud-temple.com/v1` und Ihren LLMaaS-Schlüssel im Client und überprüfen Sie die Modellfähigkeiten sowie die Einstellungen des verwendeten Endpunkts.

Die Kompatibilität deckt nicht alle OpenAI-Funktionen ab. Zu den dokumentierten Unterschieden gehören unter anderem:

- **Vervollständigungen (Completions)**: `/v1/completions` erwartet ein `messages`-Array, ähnlich wie bei Chat; siehe [Vervollständigungsformat](#post-v1completions).
- **Embeddings**: Eingaben müssen Text sein; siehe [akzeptierte Formate](#post-v1embeddings).
- **Audio-Transkription**: Die Antwortformate `text`, `srt` und `vtt` werden nicht unterstützt; siehe [Transkriptionseinstellungen](#post-v1audiotranscriptions).
- **Batch**: Der Dienst verwendet einen [spezifischen Vertrag](./batch.md) mit direkter Übermittlung von Konversationen im JSON-Format an `/v1/chat/completions/batch`.


## Basis-URL

```
https://api.ai.cloud-temple.com/v1
```

## Authentifizierung

Alle Anfragen erfordern einen `Authorization`-Header mit Ihrem API-Token:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting und Abrechnung

### Das Prinzip der Stufen: Zugangsschwelle, Budget und Kapazität

Unser Stufensystem ist als **komplette Service-Pakete** konzipiert, die drei Schlüsselaspekte Ihrer Nutzung definieren:

1.  **Eine Zugangsschwelle (Guthaben)**: Für die Stufen 1 bis 4 handelt es sich um einen im Voraus zu zahlenden Betrag, um den Dienst zu aktivieren und die technischen und budgetären Kapazitäten der gewählten Stufe freizuschalten.
2.  **Ein monatliches Budgetlimit**: Dies ist die Obergrenze Ihres monatlichen Verbrauchs, die Ihnen volle Kontrolle über Ihre Kosten gewährleistet.
3.  **Eine technische Kapazität**: Dies sind die Durchsatzgrenzen (Tokens pro Tag und Stunde), die eine stabile und vorhersehbare Leistung für Ihr Anfragemenge gewährleisten.

Die Wahl einer Stufe ist daher ein Gleichgewicht zwischen der Anfangsinvestition, dem voraussichtlichen monatlichen Budget und der erforderlichen technischen Kapazität. Ihr Verbrauch innerhalb dieses Pakets wird dann nach den geltenden Tarifen abgerechnet.

### Technische Kapazitäten der Stufen

Die folgende Tabelle zeigt ausschließlich die technischen Durchsatzwerte. Die Guthabenbeträge und Budgetgrenzen unterliegen den kommerziellen Bedingungen der gewählten Stufe; konsultieren Sie den offiziellen Katalog und die Bedingungen Ihres Vertrags.

| Stufe | Tokens Ausgabe/Stunde | Tokens Ausgabe/Tag | Beschreibung |
| ------------------------- | ------------------- | ------------------ | -------------------- |
| **Stufe 1** | 150 000 | 3 600 000 | Standardnutzung |
| **Stufe 2** | 300 000 | 7 200 000 | Professionelle Nutzung |
| **Stufe 3** | 450 000 | 10 800 000 | Hohes Volumen |
| **Stufe 4** | 600 000 | 14 400 000 | Unternehmen |
| **Monatliche Abrechnung** | Hohe Priorität | Hohe Priorität | Handelskontakt |

Um die aktuellen öffentlichen Preise zu erfahren und Ihre Schätzung zu erstellen, konsultieren Sie den [offiziellen Cloud Temple Preis-Katalog](https://www.cloud-temple.com/nos-tarifs-publics/).


**Hinweis**: Die Durchsatzgrenzen basieren auf den Ausgabetokens. Die Preisgestaltung variiert je nach Nutzung:

| Nutzungsart |
| -------------------------------------- |
| **Eingabetokens** |
| **Ausgabetokens (Chat/Vervollständigung)** |
| **Reasoning-Tokens** |
| **Reranking** |
| **Asynchroner Batch (Eingabe)** |
| **Asynchroner Batch (Ausgabe)** |
| **Audio-Transkription** |

Um die aktuellen öffentlichen Preise zu erfahren und Ihre Schätzung zu erstellen, konsultieren Sie den [offiziellen Cloud Temple Preis-Katalog](https://www.cloud-temple.com/nos-tarifs-publics/).


Die Audio-Transkription wird pro Minute abgerechnet; jede begonnene Minute ist zu bezahlen.

### Limit-Header

Die Antworten enthalten informative Header:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Fehler 429 - Limit erreicht

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

## Endpunkte

### POST /v1/chat/completions

Generiert konversationelle Antworten.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      {
        "role": "user",
        "content": "Expliquez la photosynthèse"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parameter

| Parameter           | Typ           | Erforderlich | Beschreibung                                                                                                                  |
| ------------------- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅          | Modell-ID (siehe [Katalog](./models))                                                                                        |
| `messages`          | array         | ✅          | Konversation (Rolle: System/Benutzer/Assistent)                                                                              |
| `stream`            | boolean       | ❌          | Aktiviert Streaming (Standard: false)                                                                                        |
| `temperature`       | float         | ❌          | Kreativität 0.0-2.0 (Standard: 0.7)                                                                                          |
| `max_tokens`        | integer       | ❌          | Token-Limit (Standard: 1024)                                                                                                 |
| `top_p`             | float         | ❌          | Nucleus-Sampling 0.0-1.0 (Standard: 1.0)                                                                                     |
| `presence_penalty`  | float         | ❌          | Präsenzstrafe -2.0 bis 2.0 (Standard: 0)                                                                                     |
| `frequency_penalty` | float         | ❌          | Häufigkeitsstrafe -2.0 bis 2.0 (Standard: 0)                                                                                 |
| `user`              | string        | ❌          | Eindeutige Benutzer-ID                                                                                                       |
| `tools`             | array         | ❌          | Liste der Tools, die das Modell aufrufen kann.                                                                               |
| `tool_choice`       | string/object | ❌          | Steuert, ob das Modell ein Tool aufrufen soll. "none", "auto" oder `{"type": "function", "function": {"name": "my_function"}}`. |

#### Standardantwort

```json
{
  "id": "chatcmpl-bc52de347f2e4068b7bde380c0f8db37",
  "object": "chat.completion",
  "created": 1749114814,
  "model": "gpt-oss:120b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "La photosynthèse est un processus biologique..."
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

#### Antwort mit Tool-Aufruf

Wenn das Modell beschließt, ein Tool aufzurufen, hat die Antwort ein `finish_reason` von `tool_calls` und die Nachricht enthält ein `tool_calls`-Array.

```json
{
  "id": "chatcmpl-9f27a53f52b44a9693753f2a5e1f7a73",
  "object": "chat.completion",
  "created": 1749115200,
  "model": "gpt-oss:120b",
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

Nachdem Sie eine `tool_calls`-Antwort erhalten haben, müssen Sie das Tool auf Ihrer Seite ausführen und das Ergebnis anschließend an das Modell zurücksenden, indem Sie eine Nachricht mit der `role: "tool"` verwenden.

```json
{
  "model": "gpt-oss:120b",
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

Mit `"stream": true` kommt die Antwort Token für Token an:

**Antwort-Header:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Ereignisformat:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struktur der Chunks:**
- `choices[].delta.content`: Inkrementeller Inhalt
- `finish_reason`: `null` während des Streamings, anschließend `"stop"`
- Endsignal: `data: [DONE]`

### Multimodale Anfragen (Vision)

Um Bilder zu analysieren, können Sie eine Anfrage senden, bei der das Feld `content` einer Benutzer-Nachricht ein Array ist, das sowohl Text als auch Bilder enthält.

Das Format für ein Bild ist ein Objekt mit `type: "image_url"` und einem Feld `image_url`, das die URL des Bildes im `data URI`-Format (base64) enthält.

:::info[Kompatibilitätshinweis]
Obwohl das Standard- und empfohlene Format `{"type": "image_url", "image_url": {"url": "data:..."}}` ist, unterstützt die API aus Gründen der Flexibilität auch ein vereinfachtes Format `{"type": "image", "image": "data:..."}`. Es wird jedoch empfohlen, das Standard-`image_url`-Format für eine bessere Kompatibilität mit dem OpenAI-Ökosystem zu verwenden.
:::

:::tip[OCR und Dokumentenanalyse]
Für spezifische Aufgaben der Dokumentenanalyse (PDFs, Scans, Tabellen) empfehlen wir die Verwendung des spezialisierten Modells **DeepSeek-OCR**. Siehe die [dedizierte Dokumentation](./ocr).
:::

#### Beispiel einer Vision-Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gemma4:31b",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Que vois-tu sur cette image ?"
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
**Hinweis**: Der Endpunkt `/v1/completions` verwendet dasselbe Format wie `/v1/chat/completions` mit Nachrichten.
Für die einfache Textvervollständigung verwenden Sie eine User-Nachricht mit Ihrem Prompt.
:::

Textvervollständigungen über das Chat-Format.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gpt-oss:120b",
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

#### Parameter

Identisch mit `/v1/chat/completions` - siehe vorheriger Abschnitt.

#### Antwort

Format identisch mit `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio-zu-Text-Transkription (Whisper).

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parameter

| Parameter         | Typ    | Erforderlich | Beschreibung                                                                                                        |
| ----------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `file`            | binary | ✅           | Audiodatei (wav, mp3, m4a).                                                                                        |
| `language`        | string | ❌           | ISO 639-1-Sprachcode (z. B. "fr"). Automatische Erkennung, wenn nicht angegeben.                                   |
| `initial_prompt`  | string | ❌           | Kontext oder spezifische Wörter zur Verbesserung der Transkriptionsgenauigkeit.                                     |
| `task`            | string | ❌           | Auszuführende Aufgabe: `transcribe` (Standard) oder `translate` (ins Englische übersetzen).                       |
| `response_format` | string | ❌           | `json` (Standard, äquivalent zu `verbose_json`). Die Formate `text`, `srt`, `vtt` werden derzeit nicht unterstützt. |

#### Antwort (`json`)

```json
{
  "text": "Bonjour, ceci est un test de transcription audio.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Bonjour, ceci est un test de transcription audio.",
      "tokens": [ 50364, 40365, 33, 2373, 359, 456, 2373, 323, 1330, 2373, 2264, 50564 ],
      "temperature": 0.0,
      "avg_logprob": -0.25,
      "compression_ratio": 1.5,
      "no_speech_prob": 0.05
    }
  ],
  "language": "fr"
}
```


### POST /v1/embeddings

Erstellt einen Embedding-Vektor, der den Eingabetext repräsentiert.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Le texte à vectoriser"
  }'
```

#### Parameter

| Parameter | Typ                        | Erforderlich | Beschreibung                                           |
| --------- | -------------------------- | ------------ | ------------------------------------------------------ |
| `model`   | string                     | ✅           | ID des Embedding-Modells (siehe [Katalog](./models))    |
| `input`   | string or array of strings | ✅           | Der zu vektorisierende Text oder die Liste der Texte.  |

#### Antwort

Kurzer Auszug: Die Auslassungspunkte (...) repräsentieren die anderen Komponenten des Vektors. Dieser Block veranschaulicht die Struktur der Antwort und ist kein direkt kopierbares JSON-Dokument.

```text
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        0.018902843818068504,
        -0.023282647132873535,
        ...
        -0.016484618186950684
      ]
    }
  ],
  "model": "granite-embedding:278m",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}
```

### POST /v1/rerank

Ordnet eine Liste von Dokumenten nach Relevanz in Bezug auf eine Anfrage neu. Kompatibel mit der Cohere-API (v1 und v2).

**Abrechnung**: Siehe [offizieller Cloud Temple Preis-Katalog](https://www.cloud-temple.com/nos-tarifs-publics/). Alle eingereichten Dokumente werden gezählt, auch wenn `top_n` die Anzahl der zurückgegebenen Ergebnisse begrenzt. Siehe [Details zur Berechnung](./rerank.md#preisgestaltung).

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/rerank" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "nvidia/llama-nemotron-rerank-vl-1b-v2",
    "query": "Quelle est la capitale de la France ?",
    "documents": [
      "Paris est la capitale et la plus grande ville de France.",
      "Lyon est une grande ville du sud-est de la France.",
      "La France est un pays d'\''Europe occidentale."
    ],
    "top_n": 2
  }'
```

#### Parameter

| Parameter   | Typ     | Erforderlich | Beschreibung                                                                 |
| ----------- | ------- | ------------ | ---------------------------------------------------------------------------- |
| `model`     | string  | ✅           | ID des Reranking-Modells (siehe [Katalog](./models#reranking-modelle))    |
| `query`     | string  | ✅           | Die Suchanfrage                                                              |
| `documents` | array   | ✅           | Liste der umzuordnenden Dokumente                                            |
| `top_n`     | integer | ❌           | Anzahl der zurückzugebenden Ergebnisse (Standard: alle)                      |

#### Antwort

Beispielhafter Auszug des von der Plattform-Spezifikation beschriebenen Jina/vLLM-Formats. Die unten angegebenen Scores und Zähler sind fiktiv. Der Proxy leitet die Antwort der Engine weiter und fügt einen hier weggelassenen `backend`-Block hinzu.

```json
{
  "id": "score-8bb47ca195d8cb2f",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.0401,
      "document": {
        "text": "Paris est la capitale et la plus grande ville de France.",
        "multi_modal": null
      }
    },
    {
      "index": 2,
      "relevance_score": 0.0253,
      "document": {
        "text": "La France est un pays d'Europe occidentale.",
        "multi_modal": null
      }
    }
  ],
  "usage": {
    "prompt_tokens": 39,
    "total_tokens": 39
  },
  "model": "nvidia/llama-nemotron-rerank-vl-1b-v2"
}
```

Die `relevance_score` sind rohe, nicht normalisierte Scores, keine Wahrscheinlichkeiten zwischen 0 und 1. Verwenden Sie ihre relative Reihenfolge; jeder Schwellenwert muss [auf Ihr Modell und Ihren Korpus kalibriert werden](./rerank.md#relevanzschwelle). Die Zähler `usage.prompt_tokens` und `usage.total_tokens` sind von der Abrechnung pro verarbeitetem Dokument getrennt; kein Feld `usage.billed_units.search_units` ist für die Berechnung dieser erforderlich.

Der Endpunkt `/v2/rerank` (Cohere SDK v2) ist ebenfalls mit demselben Anfrageformat verfügbar.

#### Python-Beispiel (Cohere SDK)

```python
import cohere

# Compatible avec le SDK Cohere en pointant vers l'API LLMaaS
co = cohere.Client(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com"
)

results = co.rerank(
    model="nvidia/llama-nemotron-rerank-vl-1b-v2",
    query="Quelle est la capitale de la France ?",
    documents=[
        "Paris est la capitale et la plus grande ville de France.",
        "Lyon est une grande ville du sud-est de la France.",
        "La France est un pays d'Europe occidentale."
    ],
    top_n=2
)

for result in results.results:
    print(f"Index: {result.index}, Score: {result.relevance_score:.4f}")
```

### POST /v1/chat/completions/batch

Reicht mehrere unabhängige Konversationen mit einem gemeinsamen Modell zur asynchronen Verarbeitung ein. Das Feld `messages` ist ein Array von Konversationen. Die HTTP-Antwort 202 enthält die Batch-ID.

Verwenden Sie `GET /v1/chat/completions/batch/{id}` mit demselben API-Schlüssel, um den Fortschritt zu verfolgen und die Ergebnisse abzurufen. Siehe [Batch-Leitfaden](./batch.md) für Format, Grenzen und ein vollständiges Beispiel.

### GET /v1/models

Liste der von der API bereitgestellten Modell-IDs. Verwenden Sie diese Antwort, um den Parameter `model` zu füllen.

Siehe auch [Modell-Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) für Deprecations, End-of-Support-Daten und Migrationen. Eine ID kann als Weiterleitung zu einem Nachfolger beibehalten werden; ihre Anwesenheit in dieser Liste garantiert nicht die Beibehaltung des ursprünglichen Modells.

#### Anfrage

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Antwort

Dieser Auszug ist illustrativ: Die IDs und Metadatenwerte, einschließlich `max_model_len`, entsprechen nicht den aktuellen Service-Eigenschaften. Verwenden Sie die Antwort von `GET /v1/models`, um die tatsächlichen Werte zu erhalten.

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
      "max_model_len": 60000,
      "permission": [
        {
          "id": "modelperm-gpt-oss:120b-1749110897",
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

## Fehlercodes

### 400 - Ungültige Anfrage

```json
{
  "error": {
    "message": "Invalid parameter 'temperature': must be between 0 and 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Nicht autorisiert

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Modell nicht gefunden

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

### 500 - Serverfehler

```json
{
  "error": {
    "message": "Internal server error",
    "type": "server_error"
  }
}
```

### 503 - Dienst nicht verfügbar

```json
{
  "error": {
    "message": "Service temporarily unavailable",
    "type": "service_unavailable_error"
  }
}
```

## Beispiele nach Sprache

### Python mit requests

```python
import requests
import json

# Configuration
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "VOTRE_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat completion
payload = {
    "model": "gpt-oss:120b",
    "messages": [
        {"role": "user", "content": "Bonjour !"}
    ],
    "max_tokens": 100
}

try:
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        timeout=30 # Ajout d'un timeout pour la requête
    )

    response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)
    result = response.json()
    print(result["choices"][0]["message"]["content"])

except requests.exceptions.HTTPError as e:
    print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
except requests.exceptions.RequestException as e:
    print(f"Erreur réseau: {e}")
except json.JSONDecodeError:
    print(f"Erreur de décodage JSON: {response.text}")
except Exception as e:
    print(f"Une erreur inattendue est survenue: {e}")
```

### Python mit Streaming

```python
import requests
import json

def stream_chat(message, model="gpt-oss:120b"):
    # Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
    # Exemple: API_KEY = os.getenv("LLMAAS_API_KEY")
    API_KEY = "VOTRE_TOKEN_API"
    BASE_URL = "https://api.ai.cloud-temple.com/v1"

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

    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            stream=True,
            timeout=30 # Ajout d'un timeout pour la requête
        )

        response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)

        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # Enlever 'data: '
                    if data == '[DONE]':
                        break
                    try:
                        chunk = json.loads(data)
                        content = chunk['choices'][0]['delta'].get('content', '')
                        if content:
                            print(content, end='', flush=True)
                    except json.JSONDecodeError:
                        print(f"Erreur de décodage JSON dans le stream: {data}")
                        continue
        print() # Nouvelle ligne après le stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Utilisation
stream_chat("Expliquez la physique quantique")
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Configuration
// Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
// Exemple: const API_KEY = process.env.LLMAAS_API_KEY;
const API_KEY = 'VOTRE_TOKEN_API';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function chatCompletion(message) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'gpt-oss:120b',
                messages: [
                    { role: 'user', content: message }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                timeout: 30000 // Ajout d'un timeout pour la requête (30 secondes)
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Erreur:', error.response?.data || error.message);
        // Gestion plus détaillée des erreurs peut être ajoutée ici si nécessaire
        // Par exemple: if (error.response?.status === 429) { console.error("Rate limit exceeded"); }
    }
}

// Utilisation
chatCompletion('Bonjour !').then(response => {
    if (response) {
        console.log(response);
    }
});
```

### JavaScript mit Fetch (Serverseitiges Node.js)

Führen Sie dieses Beispiel serverseitig mit Node.js aus, das natives `fetch` unterstützt. Legen Sie `LLMAAS_API_KEY` in der Serverumgebung fest. Für eine Webanwendung ruft der Browser Ihr Backend auf, das den Benutzer authentifiziert und seine Berechtigungen überprüft, bevor er LLMaaS aufruft. Der Dienstschlüssel verbleibt ausschließlich auf der Serverseite und darf nicht in den an den Browser gesendeten Code integriert werden.

```javascript
async function fetchCompletion(message) {
    const apiKey = process.env.LLMAAS_API_KEY;
    if (!apiKey) {
        throw new Error('La variable LLMAAS_API_KEY doit être définie côté serveur.');
    }
    const response = await fetch('https://api.ai.cloud-temple.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-oss:120b',
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

### Fehlerbehandlung

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate limit atteint, attendre...")
            time.sleep(60)  # Attendre 1 minute
            return safe_api_call(payload)  # Retry
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Kostenoptimierung

1. **Verwenden Sie geeignete Modelle**: Kleinere Modelle für Tests
2. **Begrenzen Sie max_tokens**: Vermeiden Sie zu lange Antworten
3. **Wiederverwendung von Konversationen**: Effizientes Context-Window
4. **Monitoring**: Verfolgen Sie Ihre Nutzung in der Konsole

### Sicherheit

1. **Schützen Sie Ihren Token**: Umgebungsvariablen
2. **Regelmäßiger Wechsel**: Ändern Sie Ihre Schlüssel periodisch
3. **Eingabevalidierung**: Bereinigen Sie Benutzereingaben
4. **Clientseitiges Rate-Limiting**: Implementieren Sie Ihre eigenen Limits

## SDK und Integrationen

Für unterstützte Aufrufe konfigurieren Sie das OpenAI-SDK mit der Basis-URL und dem LLMaaS-Schlüssel. Überprüfen Sie vor der Migration einer Integration die [Kompatibilität](#openai-kompatibilität):

### OpenAI Python SDK

```python
from openai import OpenAI

# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[
            {"role": "user", "content": "Bonjour !"}
        ],
        max_tokens=50 # Ajout de max_tokens pour cohérence avec les tests
    )

    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

Verwenden Sie die [geprüften LangChain-Versionen und Voraussetzungen](./tutorials.md#langchain-voraussetzungen). Die folgenden Beispiele wurden mit simulierten LLMaaS-Antworten überprüft.

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

# Configuration du chat model (compatible avec LLMaaS)
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    max_tokens=200
)

try:
    # Utilisation avec messages
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # Ou avec une simple chaîne
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Verwendung von Embeddings

Verwenden Sie `OpenAIEmbeddings` mit `check_embedding_ctx_length=False`, um Texte direkt zu senden, ohne lokale Vor-Tokenisierung. Diese Einstellung ist [von LangChain dokumentiert](https://reference.langchain.com/python/langchain-openai/embeddings/base/OpenAIEmbeddings). Der Parameter `encoding_format="float"`, der über `model_kwargs` übergeben wird, fordert numerische Vektoren an.

```python
import os
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(
    api_key=os.environ["LLMAAS_API_KEY"],
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite-embedding:278m",
    check_embedding_ctx_length=False,
    model_kwargs={"encoding_format": "float"},
)

vectors = embeddings.embed_documents(["Premier document", "Deuxième document"])
query_vector = embeddings.embed_query("Ma question")
```

Diese Einstellung deaktiviert auch die automatische Aufteilung von Texten gemäß dem Kontextfenster dieses Clients. Teilen Sie Dokumente vor dem Aufruf auf und beachten Sie das Limit des gewählten Modells, wie im [RAG-Tutorial](./tutorials.md#2-rag-retrieval-augmented-generation-mit-der-llmaas-api) beschrieben.

API-Fehler werden als Ausnahmen zurückgegeben; sie werden nicht durch eine leere Liste ersetzt. Behandeln Sie diese auf Ihrer Anwendungsebene, bevor Sie mit der Indexierung oder Suche fortfahren.

**Validierung**: Format der Anfragen im Vergleich zum Vertrag und zum Proxy-Code; Senden von einzelnen Texten und Batches, Authentifizierung, Lesen der Vektoren und Weitergabe von HTTP-Fehlern wurden mit simulierten Antworten überprüft. Es wurden keine Produktionsaufrufe für diese Validierung durchgeführt.

## Support

- **Dokumentation**: [Schnellstartanleitung](./quickstart)
- **Modellkatalog**: [Vollständige Liste](./models)
- **Konsole**: Verwaltung und Monitoring über die Cloud Temple Konsole
- **Support**: Über die Cloud Temple Konsole
