---
title: API-Dokumentation
sidebar_position: 2
---

# API-Dokumentation LLMaaS

## Basis-URL

```
https://api.ai.cloud-temple.com/v1
```

## Authentifizierung

Alle Anfragen erfordern einen `Authorization`-Header mit Ihrem API-Token:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Ratenbegrenzung und Abrechnung

### Das Tier-Prinzip: Zugangsstufe, Budget und Kapazität

Unser Tiersystem ist als **umfassende Servicepakete** konzipiert, die drei Schlüsselaspekte Ihrer Nutzung definieren:

1.  **Eine Zugangsstufe (Kaufguthaben)** : Für die Tiers 1 bis 4 handelt es sich um einen im Voraus zu zahlenden Betrag, um den Service zu aktivieren und die technischen sowie budgetären Kapazitäten der gewählten Stufe freizuschalten.
2.  **Ein monatliches Budgetlimit** : Dies ist die Obergrenze Ihres monatlichen Verbrauchs und gewährleistet eine vollständige Kostenkontrolle.
3.  **Eine technische Kapazität** : Dies sind die Durchsatzgrenzen (Tokens pro Tag und pro Stunde), die eine stabile und vorhersehbare Performance für Ihr Aufrufvolumen sicherstellen.

Die Wahl eines Tiers stellt somit ein Gleichgewicht zwischen der Anfangsinvestition, dem voraussichtlichen monatlichen Budget und der erforderlichen technischen Kapazität dar. Ihr Verbrauch innerhalb dieses Pakets wird anschließend nach den geltenden Tarifen abgerechnet.

### Stufentabelle

| Stufe                      | Einkaufsguthaben | Monatliches Limit | Ausgabe-Tokens/Stunde | Ausgabe-Tokens/Tag | Beschreibung          |
| ------------------------- | -------------- | ---------------- | ------------------- | ------------------ | -------------------- |
| **Stufe 1**                | 200 €          | 1 000 €          | 150 000             | 3 600 000          | Standardnutzung      |
| **Stufe 2**                | 500 €          | 3 000 €          | 300 000             | 7 200 000          | Professionelle Nutzung |
| **Stufe 3**                | 1 000 €        | 5 000 €          | 450 000             | 10 800 000         | Hohes Volumen        |
| **Stufe 4**                | 4 000 €        | 10 000 €         | 600 000             | 14 400 000         | Unternehmen          |
| **Monatliche Abrechnung** | N/A            | Unbegrenzt       | Hohe Priorität      | Hohe Priorität     | Vertriebskontakt     |

**Hinweis**: Die Rate-Limits basieren auf den Ausgabe-Tokens. Die Preisgestaltung variiert je nach Nutzung:

| Nutzungstyp                           | Preis                                            |
| -------------------------------------- | ------------------------------------------------ |
| **Eingabe-Tokens**                    | 1,8 € / Million                                  |
| **Ausgabe-Tokens (Chat/Vervollständigung)** | 8,00 € / Million                                 |
| **Reasoning-Tokens**             | 8,00 € / Million                                 |
| **Reranking**                          | 4,00 € / Million gerankter Tokens              |
| **Asynchroner Batch (Eingabe)**          | 0,9 € / Million (−50 % gegenüber Standard)               |
| **Asynchroner Batch (Ausgabe)**          | 4,00 € / Million (−50 % gegenüber Standard)              |
| **Audio-Transkription**                | 0,01 € / Minute (jede angefangene Minute wird berechnet) |

### Rate-Limit-Header

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

| Parameter           | Typ           | Erforderlich | Beschreibung                                                                                                                 |
| ------------------- | ------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅           | Modell-ID (voir [catalogue](./models))                                                                                       |
| `messages`          | array         | ✅           | Konversation (role: system/user/assistant)                                                                                   |
| `stream`            | boolean       | ❌           | Aktiviert das Streaming (défaut: false)                                                                                      |
| `temperature`       | float         | ❌           | Kreativität 0.0-2.0 (défaut: 0.7)                                                                                            |
| `max_tokens`        | integer       | ❌           | Token-Limit (défaut: 1024)                                                                                                   |
| `top_p`             | float         | ❌           | Nucleus-Sampling 0.0-1.0 (défaut: 1.0)                                                                                       |
| `presence_penalty`  | float         | ❌           | Präsenzstrafe -2.0 bis 2.0 (défaut: 0)                                                                                       |
| `frequency_penalty` | float         | ❌           | Häufigkeitsstrafe -2.0 bis 2.0 (défaut: 0)                                                                                   |
| `user`              | string        | ❌           | Eindeutige Benutzer-ID                                                                                                       |
| `tools`             | array         | ❌           | Liste der Tools, die das Modell aufrufen kann.                                                                               |
| `tool_choice`       | string/object | ❌           | Steuert, ob das Modell ein Tool aufrufen soll. "none", "auto" oder `{"type": "function", "function": {"name": "my_function"}}`. |

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

Wenn das Modell sich entscheidet, ein Tool aufzurufen, weist die Antwort ein `finish_reason` von `tool_calls` auf und die Nachricht enthält ein `tool_calls`-Array.

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

Nachdem Sie eine Antwort mit `tool_calls` erhalten haben, müssen Sie das Tool auf Ihrer Seite ausführen und das Ergebnis anschließend an das Modell zurücksenden, indem Sie eine Nachricht mit `role: "tool"` verwenden.

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

**Antwort-Header :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Ereignisformat :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struktur der Chunks :**
- `choices[].delta.content` : Inkrementeller Inhalt
- `finish_reason` : `null` während des Streamings, anschließend `"stop"`
- Endsignal : `data: [DONE]`

### Multimodale Anfragen (Vision)

Um Bilder zu analysieren, können Sie eine Anfrage senden, bei der das Feld `content` einer Benutzer-Nachricht ein Array (array) enthält, das sowohl Text als auch Bilder umfasst.

Das Format für ein Bild ist ein Objekt mit `type: "image_url"` und einem Feld `image_url`, das die URL des Bildes im `data URI`-Format (base64) enthält.

:::info Hinweis zur Kompatibilität
Obwohl das Standard- und empfohlene Format `{"type": "image_url", "image_url": {"url": "data:..."}}` lautet, unterstützt die API aus Gründen der Flexibilität auch ein vereinfachtes Format `{"type": "image", "image": "data:..."}`. Es wird jedoch empfohlen, das Standardformat `image_url` zu verwenden, um eine bessere Kompatibilität mit dem OpenAI-Ökosystem zu gewährleisten.
:::

:::tip OCR und Dokumentenanalyse
Für spezifische Dokumentenanalyseaufgaben (PDF, scans, tableaux) empfehlen wir die Verwendung des spezialisierten Modells **DeepSeek-OCR**. Siehe die [dazugehörige Dokumentation](./ocr).
:::

#### Beispiel für eine Vision-Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "gemma3:27b",
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
Für die einfache Textvervollständigung verwenden Sie eine Benutzernachricht mit Ihrem Prompt.
:::

Textvervollständigung über das Chat-Format.

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

Identisch mit `/v1/chat/completions` - siehe vorherigen Abschnitt.

#### Antwort

Format identisch mit `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio-Transkription in Text (Whisper).

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
| `file`            | binary | ✅           | Audiodatei (wav, mp3, m4a).                                                                                     |
| `language`        | string | ❌           | ISO-639-1-Sprachcode (z. B. "fr"). Automatische Erkennung, wenn nicht angegeben.                                             |
| `initial_prompt`  | string | ❌           | Kontext oder spezifische Wörter zur Verbesserung der Transkriptionsgenauigkeit.                                      |
| `task`            | string | ❌           | Auszuführende Aufgabe: `transcribe` (Standard) oder `translate` (Übersetzung ins Englische).                                    |
| `response_format` | string | ❌           | `json` (Standard, entspricht `verbose_json`). Die Formate `text`, `srt`, `vtt` werden derzeit nicht unterstützt. |

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

| Parameter | Typ                       | Erforderlich | Beschreibung                                           |
| --------- | -------------------------- | ----------- | ----------------------------------------------------- |
| `model`   | string                     | ✅          | ID des Embedding-Modells (siehe [Katalog](./models)) |
| `input`   | string or array of strings | ✅          | Der Text oder die Liste der zu vektorisierenden Texte.          |

#### Antwort

```json
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

Reordnet eine Liste von Dokumenten nach ihrer Relevanz in Bezug auf eine Abfrage. Kompatibel mit der Cohere-API (v1 und v2).

**Abrechnung** : 4 € pro Million rerankter Tokens. Ideal zur Verbesserung der Genauigkeit von RAG-Pipelines.

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

| Parameter   | Typ    | Erforderlich | Beschreibung                                                                 |
| ----------- | ------- | ----------- | --------------------------------------------------------------------------- |
| `model`     | string  | ✅          | ID des Reranking-Modells (siehe [Katalog](./models#modèles-de-reranking)) |
| `query`     | string  | ✅          | Die Suchanfrage                                                     |
| `documents` | array   | ✅          | Liste der umzuordnenden Dokumente                                            |
| `top_n`     | integer | ❌          | Anzahl der zurückzugebenden Ergebnisse (Standard: alle)                             |

#### Antwort

```json
{
  "id": "rerank-7f3a2b1c",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.9874,
      "document": {
        "text": "Paris est la capitale et la plus grande ville de France."
      }
    },
    {
      "index": 2,
      "relevance_score": 0.5231,
      "document": {
        "text": "La France est un pays d'Europe occidentale."
      }
    }
  ],
  "usage": {
    "billed_units": {
      "search_units": 3
    }
  }
}
```

Der Endpunkt `/v2/rerank` (Cohere SDK v2) ist ebenfalls mit demselben Anfrageformat verfügbar.

#### Python-Beispiel (Cohere SDK)

```python
import cohere

# Kompatibel mit dem Cohere SDK durch Angabe der LLMaaS-API
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

### GET /v1/models

Liste der verfügbaren Modelle.

#### Anfrage

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Antwort

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

### 429 - Ratenbegrenzung

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

### 503 - Service nicht verfügbar

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

# Konfiguration
# Es wird empfohlen, Ihren API-Schlüssel mithilfe von Umgebungsvariablen zu schützen.
# Beispiel: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "VOTRE_TOKEN_API" 
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat-Vervollständigung
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
        timeout=30 # Hinzufügen eines Timeouts für die Anfrage
    )
    
    response.raise_for_status() # Löst eine Ausnahme für HTTP-Fehlercodes (4xx, 5xx) aus
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
    # Es wird empfohlen, Ihren API-Schlüssel mithilfe von Umgebungsvariablen zu schützen.
    # Beispiel: API_KEY = os.getenv("LLMAAS_API_KEY")
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
            timeout=30 # Hinzufügen eines Timeouts für die Anfrage
        )
        
        response.raise_for_status() # Löst eine Ausnahme für HTTP-Fehlercodes (4xx, 5xx) aus
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # 'data: ' entfernen
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
        print() # Neue Zeile nach dem Stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Verwendung
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

### JavaScript mit Fetch (Browser)

```javascript
async function fetchCompletion(message) {
    const response = await fetch('https://api.ai.cloud-temple.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
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
            time.sleep(60)  # 1 Minute warten
            return safe_api_call(payload)  # Erneuter Versuch
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Kostenoptimierung

1. **Verwenden Sie geeignete Modelle** : Kleinere Modelle für Tests
2. **Begrenzen Sie max_tokens** : Vermeiden Sie zu lange Antworten
3. **Wiederverwenden Sie Konversationen** : Effizientes Context Window
4. **Monitoring** : Verfolgen Sie Ihre Nutzung in der Konsole

### Sicherheit

1. **Schützen Sie Ihren Token** : Umgebungsvariablen
2. **Regelmäßige Rotation** : Wechseln Sie Ihre Schlüssel regelmäßig
3. **Eingabevalidierung** : Bereinigen Sie Benutzereingaben
4. **Clientseitiges Rate Limiting** : Implementieren Sie eigene Limits

## SDK und Integrationen

Die LLMaaS-API ist mit den vorhandenen OpenAI-SDKs kompatibel, indem die Basis-URL geändert wird:

### OpenAI Python SDK

```python
from openai import OpenAI

# Es wird empfohlen, Ihren API-Schlüssel über Umgebungsvariablen zu schützen.
# Beispiel: api_key=os.getenv("LLMAAS_API_KEY")
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
        max_tokens=50 # Hinzufügen von max_tokens zur Konsistenz mit den Tests
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Konfiguration des Chat-Modells (kompatibel mit LLMaaS)
# Es wird empfohlen, Ihren API-Schlüssel mithilfe von Umgebungsvariablen zu schützen.
# Beispiel: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    # Hinweis: Parameter wie max_tokens werden über model_kwargs übergeben
    # um die Kompatibilität zwischen LangChain-Versionen sicherzustellen.
    model_kwargs={"max_tokens": 200}
)

try:
    # Verwendung mit Nachrichten
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # Oder mit einer einfachen Zeichenkette
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Verwendung von Embeddings

:::warning Inkompatibilität mit Standard-LangChain-Clients
Derzeit weist die Verwendung des Embedding-Endpunkts über die Standardklassen von LangChain (`langchain_openai.OpenAIEmbeddings` oder `langchain_community.OllamaEmbeddings`) Inkompatibilitäten mit unserer API auf.

- `OpenAIEmbeddings` sendet vorab berechnete Tokens anstelle von Rohtext, was abgelehnt wird.
- `OllamaEmbeddings` unterstützt die erforderliche Bearer-Token-Authentifizierung nicht.

Bis eine dauerhafte Lösung verfügbar ist, wird empfohlen, eine benutzerdefinierte Embedding-Klasse zu erstellen oder die API direkt aufzurufen, wie im Beispiel `exemples/simple-rag-demo` gezeigt.
:::

```python
from langchain.embeddings.base import Embeddings
from typing import List
import httpx

class LLMaaSEmbeddings(Embeddings):
    """
    Classe d'embedding personnalisée pour interagir avec l'API LLMaaS de Cloud Temple.
    Cette classe est conçue pour être compatible avec l'interface `Embeddings` de LangChain,
    permettant son utilisation dans des pipelines LangChain tout en appelant notre API spécifique.
    """
    def __init__(self, api_key: str, base_url: str = "https://api.ai.cloud-temple.com/v1", model_name: str = "granite-embedding:278m"):
        self.api_key = api_key
        self.base_url = base_url
        self.model_name = model_name
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def _embed(self, texts: List[str]) -> List[List[float]]:
        payload = {"input": texts, "model": self.model_name}
        try:
            with httpx.Client(timeout=30.0) as client:
                response = client.post(f"{self.base_url}/embeddings", headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()['data']
                # Embeddings nach ihrem Index sortieren, um die Reihenfolge zu gewährleisten
                data.sort(key=lambda e: e['index'])
                return [item['embedding'] for item in data]
        except httpx.HTTPStatusError as e:
            print(f"Erreur HTTP lors de la récupération de l'embedding : {e.response.status_code}")
            print(f"Réponse : {e.response.text}")
            return []

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]

# Verwendung
# embeddings = LLMaaSEmbeddings(
#     api_key="VOTRE_TOKEN_API",
#     base_url="https://api.ai.cloud-temple.com/v1",
#     model_name="granite-embedding:278m"
# )
# vector = embeddings.embed_query("Mon texte à vectoriser")
```

## Support
- **Dokumentation** : [Schnellstartanleitung](./quickstart)
- **Modellkatalog** : [Vollständige Liste](./models)
- **Konsole** : Verwaltung und Überwachung über die Cloud Temple Console
- **Support** : Über die Cloud Temple Console