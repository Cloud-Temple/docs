---
title: API-Dokumentation
sidebar_position: 2
---

# Dokumentation API LLMaaS

## Basis-URL

```
https://api.ai.cloud-temple.com/v1
```

## Authentifizierung

Alle Anfragen erfordern einen Header `Authorization` mit Ihrem API-Token:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting und Abrechnung

### Das Prinzip der Drittanbieter: Zugangsebene, Budget und Kapazität

Unser Drittanbietersystem ist als **vollständige Service-Umgebung** konzipiert, die drei Schlüsselaspekte Ihrer Nutzung definiert:

1.  **Eine Zugangsebene (Kaufkredit)**: Für Drittanbieter 1 bis 4 handelt es sich um einen Betrag, der im Voraus gezahlt werden muss, um den Dienst zu aktivieren und die technischen und budgetären Kapazitäten der gewählten Ebene freizuschalten.
2.  **Ein monatliches Budgetlimit**: Dies ist das Obergrenze Ihres monatlichen Verbrauchs und gewährleistet eine vollständige Kontrolle über Ihre Kosten.
3.  **Eine technische Kapazität**: Dies sind die Durchsatzgrenzen (Tokens pro Tag und Stunde), die eine stabile und vorhersagbare Leistung für Ihr Anfragesvolumen sicherstellen.

Die Wahl eines Drittanbieters ist also ein Gleichgewicht zwischen dem Anfangsinvestition, dem prognostizierten monatlichen Budget und der erforderlichen technischen Kapazität. Ihr Verbrauch innerhalb dieser Schutzschicht wird anschließend nach den geltenden Preisen abgerechnet.

### Dritter-Übersicht

| Tier | Kaufkredit | Monatliche Grenze | Tokens Ausgabe/Stunde | Tokens Ausgabe/Tag | Beschreibung |
|------|------------|-------------------|-----------------------|--------------------|--------------| 
| **Tier 1** | 200 € | 1.000 € | 150.000 | 3.600.000 | Standardnutzung |
| **Tier 2** | 500 € | 3.000 € | 300.000 | 7.200.000 | Professionelle Nutzung |
| **Tier 3** | 1.000 € | 5.000 € | 450.000 | 10.800.000 | Hohes Volumen |
| **Tier 4** | 4.000 € | 10.000 € | 600.000 | 14.400.000 | Unternehmen |
| **Monatliche Abrechnung** | N/A | Unbegrenzt | Hohe Priorität | Hohe Priorität | Kontaktieren Sie den Vertrieb |

**Hinweis**: Die Durchsatzgrenzen werden basierend auf den Ausgabetokens berechnet. Die Preise für Tokens variieren je nach Nutzung:
- **Eingabetokens**: 0,90 € / Million
- **Ausgabetokens (Standard)**: 4,00 € / Million
- **Ausgabetokens (Reasoner)**: 21,00 € / Million (wird für die fortschrittlichsten Modelle angewandt, um komplexe Aufgaben wie Agenten oder Reasoning zu bewältigen)

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
    "message": "Rate limit überschritten. Bitte aktualisieren Sie Ihren Plan oder versuchen Sie es später erneut.",
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
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
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

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|--------------|--------------|
| `model` | Zeichenkette | ✅ | Modell-ID (siehe [Katalog](./models)) |
| `messages` | Array | ✅ | Nachrichten (Rolle: system/user/assistant) |
| `stream` | boolesch | ❌ | Aktiviert den Streaming (Standard: false) |
| `temperature` | Fließkommazahl | ❌ | Kreativität 0.0-2.0 (Standard: 0.7) |
| `max_tokens` | Ganzzahl | ❌ | Token-Limit (Standard: 1024) |
| `top_p` | Fließkommazahl | ❌ | Nukleus-Abtastung 0.0-1.0 (Standard: 1.0) |
| `presence_penalty` | Fließkommazahl | ❌ | Präsenzstrafe -2.0 bis 2.0 (Standard: 0) |
| `frequency_penalty` | Fließkommazahl | ❌ | Häufigkeitsstrafe -2.0 bis 2.0 (Standard: 0) |
| `user` | Zeichenkette | ❌ | Eindeutige Benutzer-ID |
| `tools` | Array | ❌ | Liste der Tools, die das Modell aufrufen kann. |
| `tool_choice`| Zeichenkette/Objekt | ❌ | Steuert, ob das Modell einen Tool aufrufen soll. "none", "auto" oder `{"type": "function", "function": {"name": "my_function"}}`. |

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

#### Antwort mit Tool-Aufruf

Wenn das Modell entscheidet, einen Tool-Aufruf durchzuführen, hat die Antwort einen `finish_reason` von `tool_calls` und die Nachricht enthält ein Array `tool_calls`.

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

Nachdem Sie eine Antwort `tool_calls` erhalten haben, müssen Sie den Tool auf Ihrer Seite ausführen und das Ergebnis anschließend dem Modell mit einer Nachricht mit dem `role: "tool"` zurückgeben.

```json
{
  "model": "qwen3:14b",
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

Mit `"stream": true` kommt die Antwort tokenweise an:

**Antwort-Header:**
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
- `choices[].delta.content` : Inkrementaler Inhalt
- `finish_reason` : `null` während des Streamings, dann `"stop"`
- Endsignal : `data: [DONE]`

### Multimodale Anfragen (Vision)

Um Bilder zu analysieren, können Sie eine Anfrage senden, bei der das Feld `content` einer Benutzermeldung ein Array ist, das sowohl Text als auch Bilder enthält.

Das Format für ein Bild ist ein Objekt mit `type: "image_url"` und einem Feld `image_url`, das die Bild-URL im Format `Data URI` (Base64) enthält.

:::info Kompatibilitäts Hinweis
Obwohl das Standard- und empfohlene Format `{"type": "image_url", "image_url": {"url": "data:..."}}` ist, unterstützt die API aus Gründen der Flexibilität auch ein vereinfachtes Format `{"type": "image", "image": "data:..."}`. Es wird jedoch empfohlen, das Standard-Format `image_url` für eine bessere Kompatibilität mit dem OpenAI-Ökosystem zu verwenden.
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
            "text": "Was siehst du auf diesem Bild?"
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
**Hinweis** : Der Endpunkt `/v1/completions` verwendet das gleiche Format wie `/v1/chat/completions` mit Nachrichten. 
Für einfache Textergänzungen verwenden Sie eine Benutzermeldung mit Ihrem Prompt.
:::

Textergänzungen über das Chat-Format.

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
        "content": "Vervollständigen Sie diesen Satz: Künstliche Intelligenz ist"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parameter

Identisch mit `/v1/chat/completions` - siehe vorherige Abschnitt.

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

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|--------------|--------------|
| `file` | binär | ✅ | Audiodatei (wav, mp3, m4a). |
| `language` | Zeichenkette | ❌ | Sprachcode ISO 639-1 (z. B. "fr"). Automatische Erkennung, wenn nicht angegeben. |
| `initial_prompt` | Zeichenkette | ❌ | Kontext oder spezifische Wörter, um die Genauigkeit der Transkription zu verbessern. |
| `task` | Zeichenkette | ❌ | Aufgabe, die durchgeführt werden soll: `transcribe` (Standard) oder `translate` (auf Englisch übersetzen). |
| `response_format` | Zeichenkette | ❌ | `json` (Standard, entspricht `verbose_json`). Die Formate `text`, `srt`, `vtt` werden derzeit nicht unterstützt. |

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

### POST /v1/embeddings

Erstellen Sie einen Embedding-Vektor, der den Eingabetext darstellt.

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

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|--------------|--------------|
| `model` | string | ✅ | ID des Embedding-Modells (siehe [Katalog](./models)) |
| `input` | Zeichenkette oder Array von Zeichenketten | ✅ | Der Text oder die Liste von Texten, die vektorisiert werden sollen. |

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

### GET /v1/models

Liste der verfügbaren Modelle.

#### Anfrage

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer IHR_TOKEN_API"
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

### 404 - Modell nicht gefunden

```json
{
  "error": {
    "message": "Modell 'unknown-model' existiert nicht",
    "type": "invalid_request_error",
    "param": "Modell",
    "code": "model_not_found"
  }
}
```

### 429 - Anfragenlimit

```json
{
  "error": {
    "message": "Rate limit überschritten. Bitte aktualisieren Sie Ihren Tarif oder versuchen Sie es später erneut.",
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

```

# Konfiguration

# Es wird empfohlen, Ihren API-Schlüssel durch die Verwendung von Umgebungsvariablen zu schützen.

# Beispiel: API_KEY = os.getenv("LLMAAS_API_KEY")
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
        {"role": "user", "content": "Hallo!"}
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
    print(f"HTTP-Fehler: {e.response.status_code} - {e.response.text}")
except requests.exceptions.RequestException as e:
    print(f"Netzwerkfehler: {e}")
except json.JSONDecodeError:
    print(f"JSON-Decodierungsfehler: {response.text}")
except Exception as e:
    print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")
```

### Python mit Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
    # Es wird empfohlen, Ihren API-Schlüssel mit Umgebungsvariablen zu schützen.
    # Beispiel: API_KEY = os.getenv("LLMAAS_API_KEY")
    API_KEY = "IHR_API_TOKEN"
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
        
        response.raise_for_status() # Lässt eine Ausnahme für HTTP-Fehler (4xx, 5xx) aus
        
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
                        print(f"JSON-Decodierungsfehler im Stream: {data}")
                        continue
        print() # Neue Zeile nach dem Stream
    except requests.exceptions.HTTPError as e:
        print(f"HTTP-Fehler: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Netzwerkfehler: {e}")
    except Exception as e:
        print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")
```

# Nutzung
stream_chat("Erklären Sie die Quantenphysik")

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Konfiguration
// Es wird empfohlen, Ihren API-Schlüssel mit Umgebungsvariablen zu schützen.
// Beispiel: const API_KEY = process.env.LLMAAS_API_KEY;
const API_KEY = 'IHR_API-SCHLÜSSEL';
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
                },
                timeout: 30000 // Hinzufügen eines Timeouts für die Anfrage (30 Sekunden)
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Fehler:', error.response?.data || error.message);
        // Detaillierte Fehlerbehandlung kann hier hinzugefügt werden, falls erforderlich
        // Beispiel: if (error.response?.status === 429) { console.error("Rate limit exceeded"); }
    }
}

// Verwendung
chatCompletion('Hallo !').then(response => {
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

1. **Verwenden Sie geeignete Modelle** : Kleine Modelle für Tests
2. **Begrenzen Sie max_tokens** : Vermeiden Sie zu lange Antworten
3. **Wiederholen Sie Gespräche** : Effizienter Kontext-Window
4. **Monitoring** : Überwachen Sie Ihre Nutzung in der Konsole

### Sicherheit

1. **Schützen Sie Ihren Token** : Umgebungsvariablen  
2. **Regelmäßige Rotation** : Ändern Sie Ihre Schlüssel periodisch  
3. **Eingabeverifikation** : Bereinigen Sie die Benutzerdaten  
4. **Client-Ratenbegrenzung** : Implementieren Sie Ihre eigenen Begrenzungen

## SDK und Integrationen

Die LLMaaS-API ist kompatibel mit bestehenden OpenAI-SDKs, indem man die Basis-URL ändert:

### OpenAI Python SDK

```python
from openai import OpenAI

```

Es wird empfohlen, Ihren API-Schlüssel mit Umgebungsvariablen zu schützen.

# Beispiel: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="IHR_API_TOKEN",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Bonjour !"}
        ],
        max_tokens=50 # Hinzufügen von max_tokens für Konsistenz mit den Tests
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Fehler OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

```

# Konfiguration des Chat-Modells (kompatibel mit LLMaaS)

# Es wird empfohlen, Ihren API-Schlüssel durch die Verwendung von Umgebungsvariablen zu schützen.

# Beispiel: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="IHR_API_TOKEN",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    # Hinweis: Parameter wie max_tokens werden über model_kwargs übergeben
    # um die Kompatibilität zwischen den LangChain-Versionen zu gewährleisten.
    model_kwargs={"max_tokens": 200}
)

try:
    # Verwendung mit Nachrichten
    messages = [HumanMessage(content="Erklären Sie KI in 3 Sätzen")]
    response = chat.invoke(messages)
    print(response.content)

    # Oder mit einer einfachen Zeichenkette
    response = chat.invoke("Hallo, wie geht es Ihnen?")
    print(response.content)

except Exception as e:
    print(f"Fehler LangChain: {e}")
```

#### Verwendung von Embeddings

:::warning Unverträglichkeit mit den Standard-LangChain-Clients
Derzeit gibt es Unverträglichkeiten bei der Verwendung des Embedding-Endpunkts mit den Standard-Klassen von LangChain (`langchain_openai.OpenAIEmbeddings` oder `langchain_community.OllamaEmbeddings`) mit unserer API.

- `OpenAIEmbeddings` sendet vorberechnete Tokens anstelle von Rohtext, was abgelehnt wird.
- `OllamaEmbeddings` verwaltet nicht die erforderliche Bearer-Token-Authentifizierung.

Bis eine dauerhafte Lösung verfügbar ist, wird empfohlen, eine benutzerdefinierte Embedding-Klasse zu erstellen oder die API direkt aufzurufen, wie im Beispiel `exemples/simple-rag-demo` gezeigt.
:::

```python
from langchain.embeddings.base import Embeddings
from typing import List
import httpx

class LLMaaSEmbeddings(Embeddings):
    """
    Benutzerdefinierte Embedding-Klasse zur Interaktion mit der LLMaaS-API von Cloud Temple.
    Diese Klasse ist so konzipiert, dass sie mit der `Embeddings`-Schnittstelle von LangChain kompatibel ist,
    wodurch sie in LangChain-Pipelines verwendet werden kann, während gleichzeitig unsere spezifische API aufgerufen wird.
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
            print(f"HTTP-Fehler bei der Abruf des Embeddings: {e.response.status_code}")
            print(f"Antwort: {e.response.text}")
            return []

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]
```

# Verwendung

# embeddings = LLMaaSEmbeddings(

#     api_key="IHR_TOKEN_API",

#     base_url="https://api.ai.cloud-temple.com/v1",

#     model_name="granite-embedding:278m"

# )

# vector = embeddings.embed_query("Mon texte à vectoriser")

## Support

- **Dokumentation** : [Schnellstartanleitung](./quickstart)
- **Modellkatalog** : [Vollständige Liste](./models)
- **Konsole** : Verwaltung und Überwachung über die Cloud Temple Konsole
- **Support** : Über die Cloud Temple Konsole