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

Alle Anfragen erfordern einen Header `Authorization` mit Ihrem API-Token:

```
Authorization: Bearer IHR_API_TOKEN
```

## Rate Limiting und Abrechnung

### Stufen-System nach Kaufkredit

| Stufe | Kaufkredit | Monatliche Grenze | Tokens Ausgabe/Stunde | Tokens Ausgabe/Tag | Beschreibung |
|------|----------------|-------------------|---------------------|--------------------|-----------| 
| **Stufe 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Standardnutzung |
| **Stufe 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Professionelle Nutzung |
| **Stufe 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Hoher Volumen |
| **Stufe 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Unternehmensniveau |
| **Monatliche Abrechnung** | N/A | Unbegrenzt | Hohe Priorität | Hohe Priorität | Kontaktaufnahme mit dem Vertrieb |

**Hinweis**: Grenzen basieren auf Tokens der Ausgabe (4 €/Million). Tokens der Eingabe (0,9 €/Million) haben proportionell höhere Grenzen.

### Limit-Header

Die Antworten enthalten informative Header:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Fehler 429 - Limit überschritten

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
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Erklären Sie die Photosynthese"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | Modell-ID (siehe [Katalog](./models)) |
| `messages` | array | ✅ | Konversation (role: system/user/assistant) |
| `stream` | boolean | ❌ | Aktiviert Streaming (Standard: false) |
| `temperature` | float | ❌ | Kreativität 0,0–2,0 (Standard: 0,7) |
| `max_tokens` | integer | ❌ | Token-Limit (Standard: 1024) |
| `top_p` | float | ❌ | Nukleus-Sampling 0,0–1,0 (Standard: 1,0) |
| `presence_penalty` | float | ❌ | Präsenzstrafe -2,0 bis 2,0 (Standard: 0) |
| `frequency_penalty` | float | ❌ | Frequenzstrafe -2,0 bis 2,0 (Standard: 0) |
| `user` | string | ❌ | Eindeutige Benutzer-ID |

#### Standardantwort

```json
{
  "id": "chatcmpl-bc52de347f2e4068b7bde380c0f8db37",
  "object": "chat.completion",
  "created": 1749114814,
  "model": "granite3.3:8b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Die Photosynthese ist ein biologischer Prozess..."
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

#### Streaming (SSE)

Mit `"stream": true` wird die Antwort tokenweise geliefert:

**Antwort-Header:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Ereignisformat:**
```
data: {"choices":[{"delta":{"content":"Die"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" Photosynthese"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Chunk-Struktur:**
- `choices[].delta.content` : Inkrementeller Inhalt
- `finish_reason` : `null` während des Streamings, dann `"stop"`
- Endsignal: `data: [DONE]`

### POST /v1/completions

:::warning
**Hinweis** : Der Endpunkt `/v1/completions` verwendet den gleichen Format wie `/v1/chat/completions` mit Nachrichten. 
Für einfache Textergänzungen verwenden Sie eine Benutzermeldung mit Ihrem Prompt.
:::

Textergänzungen über Chat-Format.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Vervollständigen Sie den Satz: Künstliche Intelligenz ist"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parameter

Identisch zu `/v1/chat/completions` - siehe vorherige Abschnitt.

#### Antwort

Format identisch zu `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio-Transkription in Text (Whisper).

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer IHR_API_TOKEN" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|------|-------------|-------------|
| `file` | binary | ✅ | Audio-Datei (wav, mp3, m4a) |
| `language` | string | ❌ | ISO 639-1 Sprachcode (z. B. "fr") |
| `prompt` | string | ❌ | Kontext zur Verbesserung der Transkription |
| `response_format` | string | ❌ | json, text, srt, vtt (Standard: json) |
| `temperature` | float | ❌ | Kreativität der Transkription (Standard: 0) |

#### Antwort

```json
{
  "text": "Bonjour, ceci est un test de transcription audio."
}
```

### GET /v1/models

Liste der verfügbaren Modelle.

#### Anfrage

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer IHR_API_TOKEN"
```

#### Antwort

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
      "max_model_len": 60000,
      "permission": [
        {
          "id": "modelperm-granite3.3:8b-1749110897",
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
    "message": "Ungültiger Parameter 'temperature': muss zwischen 0 und 2 liegen",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Nicht autorisiert

```json
{
  "error": {
    "message": "Ungültiger API-Key bereitgestellt",
    "type": "authentication_error"
  }
}
```

### 404 - Modell nicht gefunden

```json
{
  "error": {
    "message": "Modell 'unknown-model' existiert nicht",
    "type": "invalid_request_error",
    "param": "model",
    "code": "model_not_found"
  }
}
```

### 429 - Rate Limit überschritten

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Server-Fehler

```json
{
  "error": {
    "message": "Interner Server-Fehler",
    "type": "server_error"
  }
}
```

### 503 - Dienst nicht verfügbar

```json
{
  "error": {
    "message": "Dienst vorübergehend nicht verfügbar",
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
API_KEY = "IHR_API_TOKEN"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat Completion
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Hallo!"}
    ],
    "max_tokens": 100
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=payload
)

if response.status_code == 200:
    result = response.json()
    print(result["choices"][0]["message"]["content"])
else:
    print(f"Fehler {response.status_code}: {response.text}")
```

### Python mit Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
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
    
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        stream=True
    )
    
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
                    continue

# Nutzung
stream_chat("Erklären Sie die Quantenphysik")
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

const API_KEY = 'IHR_API_TOKEN';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function chatCompletion(message) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: message }
                ],
                max_tokens: 200
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error(`Fehler ${error.response.status}:`, error.response.data);
    }
}

// Beispielaufruf
chatCompletion("Erklären Sie die Quantenmechanik");
```

### JavaScript/Node.js mit async/await

```javascript
const axios = require('axios');

const API_KEY = 'IHR_API_TOKEN';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function chatCompletion(message) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: message }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Fehler:', error.response?.data || error.message);
    }
}

// Verwendung
chatCompletion('Hallo!').then(response => {
    console.log(response);
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
            model: 'granite3.3:8b',
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

## Gute Praktiken

### Fehlerbehandlung

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate limit erreicht, warten...")
            time.sleep(60)  # 1 Minute warten
            return safe_api_call(payload)  # Wiederholen
        else:
            print(f"Fehler HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Fehler Netzwerk: {e}")
```

### Kostenoptimierung

1. **Verwenden Sie geeignete Modelle**: Kleinere Modelle für Tests
2. **Begrenzen Sie max_tokens**: Vermeiden Sie zu lange Antworten
3. **Wiederverwenden Sie Gespräche**: Effizienter Kontext-Window
4. **Monitoring**: Überwachen Sie Ihren Gebrauch in der Konsole

### Sicherheit

1. **Schützen Sie Ihren Token**: Umgebungsvariablen
2. **Regelmäßige Rotation**: Ändern Sie Ihre Schlüssel periodisch
3. **Eingabeprüfung**: Bereinigen Sie Benutzerdaten
4. **Client-seitiges Rate Limiting**: Implementieren Sie Ihre eigenen Grenzen

## SDK und Integrationen

Die LLMaaS-API ist kompatibel mit bestehenden OpenAI SDKs durch Anpassung der Basis-URL:

### OpenAI Python SDK

```python
from openai import OpenAI

client = OpenAI(
    api_key="IHR_API_TOKEN",
    base_url="https://api.ai.cloud-temple.com/v1"
)

response = client.chat.completions.create(
    model="granite3.3:8b",
    messages=[
        {"role": "user", "content": "Hallo!"}
    ]
)

print(response.choices[0].message.content)
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Konfiguration des Chat-Modells (kompatibel mit LLMaaS)
chat = ChatOpenAI(
    api_key="IHR_API_TOKEN",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Nutzung mit Nachrichten
messages = [HumanMessage(content="Erklären Sie KI in 3 Sätzen")]
response = chat.invoke(messages)
print(response.content)

# Oder mit einer einfachen Zeichenkette
response = chat.invoke("Hallo, wie geht es Ihnen?")
print(response.content)
```

## Support

- **Dokumentation** : [Schnellstart-Guide](./quickstart)
- **Modellkatalog** : [Vollständige Liste](./models)
- **Konsole** : Verwaltung und Überwachung über Cloud Temple Konsole
- **Support** : Über die Cloud Temple Konsole
