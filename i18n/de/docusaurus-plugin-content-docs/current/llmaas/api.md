---
title: Dokumentation API
sidebar_position: 2
---

# Dokumentation API LLMaaS

## Basis-URL

```
https://api.ai.cloud-temple.com/v1
```

## Authentifizierung

Alle Anfragen erfordern einen Header `Authorization` mit Ihrem API-Token :

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting und Abrechnung

### Das Prinzip der Drittanbieter: Zugangsstufe, Budget und Kapazität

Unser Drittanbieter-System ist als **vollständige Service-Umgebung** konzipiert, die drei Schlüsselaspekte Ihrer Nutzung definiert:

1. **Eine Zugangsstufe (Vorauszahlung)**: Für Drittanbieter 1 bis 4 handelt es sich um einen vorab zu zahlenden Betrag, um den Service zu aktivieren und die technischen und budgetären Kapazitäten der gewählten Stufe freizuschalten.
2. **Ein monatliches Budgetlimit**: Dies ist die Obergrenze Ihrer monatlichen Verbrauchskosten, die Ihnen eine vollständige Kontrolle über Ihre Ausgaben gewährleistet.
3. **Eine technische Kapazität**: Dies sind die Durchsatzgrenzen (Tokens pro Tag und Stunde), die eine stabile und vorhersagbare Leistung für Ihr Anfragesvolumen gewährleisten.

Die Wahl eines Drittanbieters ist somit ein Gleichgewicht zwischen der Anfangsinvestition, dem prognostizierten monatlichen Budget und der erforderlichen technischen Kapazität. Ihr Verbrauch innerhalb dieser Umgebung wird anschließend nach den geltenden Tarifen abgerechnet.

### Dritter-Übersicht

| Stufe | Kaufguthaben | Monatliche Grenze | Tokens Ausgabe/Stunde | Tokens Ausgabe/Tag | Beschreibung |
|------|----------------|-------------------|---------------------|--------------------|-----------| 
| **Stufe 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Standardnutzung |
| **Stufe 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Professionelle Nutzung |
| **Stufe 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Hoher Volumen |
| **Stufe 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Unternehmens |
| **Monatliche Abrechnung** | N/A | Unbegrenzt | Hohe Priorität | Hohe Priorität | Kontaktaufnahme für Vertrieb |

**Hinweis**: Die Durchsatzgrenzen werden basierend auf den Tokens Ausgabe berechnet. Die Tarifierung der Tokens variiert je nach Nutzung:
- **Eingabetokens**: 0,90 € pro Million
- **Ausgabetokens (Standard)**: 4,00 € pro Million
- **Ausgabetokens (Reasoner)**: 21,00 € pro Million (gilt für die fortschrittlichsten Modelle für komplexe Aufgaben wie Agenten oder Reasoning)

### Header der Begrenzung

Die Antworten enthalten informative Header:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Fehler 429 - Grenze erreicht

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

Erzeugt konversationelle Antworten.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHRE_API_SCHLÜSSEL" \
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
|-----------|-----|--------------|--------------|
| `model` | string | ✅ | Modell-ID (siehe [Katalog](./models)) |
| `messages` | array | ✅ | Konversation (Rolle: system/user/assistant) |
| `stream` | boolean | ❌ | Aktiviert den Streaming (Standard: false) |
| `temperature` | float | ❌ | Kreativität 0.0-2.0 (Standard: 0.7) |
| `max_tokens` | integer | ❌ | Token-Obergrenze (Standard: 1024) |
| `top_p` | float | ❌ | Nukleus-Abstimmung 0.0-1.0 (Standard: 1.0) |
| `presence_penalty` | float | ❌ | Präsenzstrafe -2.0 bis 2.0 (Standard: 0) |
| `frequency_penalty` | float | ❌ | Häufigkeitsstrafe -2.0 bis 2.0 (Standard: 0) |
| `user` | string | ❌ | Eindeutige Benutzer-ID |
| `tools` | array | ❌ | Liste der Tools, die das Modell aufrufen kann. |
| `tool_choice`| string/object | ❌ | Steuerung, ob das Modell einen Tool aufrufen soll. "none", "auto" oder `{"type": "function", "function": {"name": "my_function"}}`. |

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

#### Antwort mit Werkzeugaufruf

Wenn das Modell einen Werkzeugaufruf entscheidet, hat die Antwort einen `finish_reason` von `tool_calls` und die Nachricht enthält ein Array `tool_calls`.

```json
{
  "id": "chatcmpl-9f27a53f52b44a9693753f2a5e1f7a73",
  "object": "chat.completion",
  "created": 1749115200,
  "model": "qwen3:14b",
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

Nachdem eine Antwort `tool_calls` empfangen wurde, müssen Sie das Werkzeug auf Ihrer Seite ausführen und das Ergebnis anschließend dem Modell mit einer Nachricht mit dem `role: "tool"` zurückgeben.

```json
{
  "model": "qwen3:14b",
  "messages": [
    {
      "role": "user",
      "content": "Wie ist das Wetter in Paris?"
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
      "content": "{\"temperature\": \"22\", \"unit\": \"celsius\", \"description\": \"Sonnig\"}"
    }
  ]
}
```

#### Streaming (SSE)

Mit `"stream": true` wird die Antwort tokenweise geliefert:

**Antwortheader:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Ereignisformat:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Chunk-Struktur:**
- `choices[].delta.content` : Erhöhter Inhalt
- `finish_reason` : `null` während des Streamings, dann `"stop"`
- Endsignal : `data: [DONE]`

### Multimodale Anfragen (Vision)

Um Bilder zu analysieren, können Sie eine Anfrage senden, bei der das Feld `content` einer Benutzermeldung ein Array ist, das sowohl Text als auch Bilder enthält.

Das Format für ein Bild ist ein Objekt mit `type: "image_url"` und einem Feld `image_url`, das die Bild-URL im Format `data URI` (base64) enthält.

:::info Hinweis zur Kompatibilität
Obwohl das Standard- und empfohlene Format `{"type": "image_url", "image_url": {"url": "data:..."}}` ist, unterstützt die API aufgrund der Flexibilität auch ein vereinfachtes Format `{"type": "image", "image": "data:..."}`. Es wird jedoch empfohlen, das Standard-Format `image_url` für eine bessere Kompatibilität mit dem OpenAI-Ökosystem zu verwenden.
:::

#### Beispiel für eine Vision-Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Autorisierung: Bearer IHR_API_TOKEN" \
  -d '{
    "model": "gemma3:27b",
    "messages": [
      {
        "Rolle": "user",
        "Text": [
          {
            "Typ": "text",
            "Text": "Was siehst du auf diesem Bild?"
          },
          {
            "Typ": "image_url",
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
Für einfache Textergänzungen verwenden Sie eine Benutzernachricht mit Ihrem Prompt.
:::

Textergänzungen über Chat-Format.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
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

Identisch mit /v1/chat/completions - siehe vorherige Sektion.

#### Antwort

Format identisch mit `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Audio-Transkription zu Text (Whisper).

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|--------------|--------------|
| `file` | binär | ✅ | Audio-Datei (wav, mp3, m4a). |
| `language` | string | ❌ | ISO 639-1 Sprachcode (z. B. "fr"). Automatische Erkennung, wenn nicht angegeben. |
| `initial_prompt` | string | ❌ | Kontext oder spezifische Wörter, um die Genauigkeit der Transkription zu verbessern. |
| `task` | string | ❌ | Aufgabe zu erledigen: `transcribe` (Standard) oder `translate` (ins Englische übersetzen). |
| `response_format` | string | ❌ | `json` (Standard, entspricht `verbose_json`), `text`, `srt`, `vtt`. |

#### Antwort (`json`)

```json
{
  "text": "Hallo, dies ist ein Audiostenogramm-Test.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Hallo, dies ist ein Audiostenogramm-Test.",
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

### POST /v1/audio/transcriptions_batch

Transkription mehrerer Audio-Dateien parallel.

#### Anfrage

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions_batch" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "files=@audio1.wav" \
  -F "files=@audio2.mp3" \
  -F "language=fr"
```

#### Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|--------------|--------------|
| `files` | array | ✅ | Liste der Audio-Dateien, die transkribiert werden sollen. |
| `language` | string | ❌ | ISO 639-1 Sprachcode (z. B. "fr"). |
| `initial_prompt` | string | ❌ | Kontext zur Verbesserung der Transkription. |
| `task` | string | ❌ | Aufgabe, die ausgeführt werden soll: `transcribe` (Standard) oder `translate`. |

#### Antwort

```json
{
  "batch_results": [
    {
      "filename": "audio1.wav",
      "text": "Dies ist die erste Datei.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio2.mp3",
      "text": "Und dies ist die zweite.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio3.ogg",
      "text": null,
      "segments": [],
      "language": null,
      "error": "Transkriptionsfehler für diese Datei."
    }
  ]
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
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Modell Nicht Gefunden

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

### 429 - Überlastung

```json
{
  "error": {
    "message": "Rate limit überschritten. Bitte wechseln Sie zu einem höheren Tarif oder versuchen Sie es später erneut.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Serverfehler

```json
{
  "error": {
    "message": "Interner Serverfehler",
    "type": "server_error"
  }
}
```

### 503 - Dienst nicht verfügbar

```json
{
  "error": {
    "message": "Dienst vorübergehend nicht verfügbar",
    "type": "dienst_unverfügbar_fehler"
  }
}
```

## Beispiele nach Sprache

### Python mit requests

```python
import requests
import json

```

# Konfiguration
API_KEY = "VOTRE_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Chat completion
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Bonjour !"}
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
    print(f"Erreur {response.status_code}: {response.text}")
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
                data = line[6:]  # Entfernen Sie 'data: '
                if data == '[DONE]':
                    break
                try:
                    chunk = json.loads(data)
                    content = chunk['choices'][0]['delta'].get('content', '')
                    if content:
                        print(content, end='', flush=True)
                except json.JSONDecodeError:
                    continue
```

# Nutzung
stream_chat("Expliquez la physique quantique")

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
                max_tokens: 100
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
            print(f"HTTP-Fehler: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Netzwerkfehler: {e}")
```

### Kostenoptimierung

1. **Verwenden Sie geeignete Modelle** : Kleinere Modelle für Tests  
2. **Beschränken Sie max_tokens** : Vermeiden Sie zu lange Antworten  
3. **Wiederholen Sie Gespräche** : Effizienter Kontext-Window  
4. **Monitoring** : Verfolgen Sie Ihren Verbrauch in der Konsole

### Sicherheit

1. **Schützen Sie Ihren Token** : Umgebungsvariablen  
2. **Regelmäßige Rotation** : Ändern Sie Ihre Schlüssel periodisch  
3. **Eingabeverifikation** : Bereinigen Sie Benutzerdaten  
4. **Client-Lastbegrenzung** : Implementieren Sie Ihre eigenen Grenzen

## SDK und Integrationen

Die LLMaaS-API ist kompatibel mit bestehenden OpenAI-SDKs, indem die Basis-URL geändert wird:

### OpenAI Python SDK

```python
from openai import OpenClient

client = OpenClient(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

response = client.chat.completions.create(
    model="granite3.3:8b",
    messages=[
        {"role": "user", "content": "Bonjour !"}
    ]
)

print(response.choices[0].message.content)
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

```

# Konfiguration des Chat-Modells (kompatibel mit LLMaaS)
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Verwendung mit Nachrichten
messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
response = chat.invoke(messages)
print(response.content)

# Oder mit einer einfachen Zeichenkette
response = chat.invoke("Bonjour, comment ça va ?")
print(response.content)
```

## Support

- **Dokumentation** : [Schnellstartanleitung](./quickstart)
- **Modellkatalog** : [Vollständige Liste](./models)
- **Konsole** : Verwaltung und Überwachung über die Cloud Temple Konsole
- **Support** : Über die Cloud Temple Konsole