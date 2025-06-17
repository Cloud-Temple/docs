---
title: Documentazione API
sidebar_position: 2
---

# Documentazione API LLMaaS

## URL di Base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticazione

Tutte le richieste richiedono un header `Authorization` con il tuo token API :

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Limitazione dei tassi e Fatturazione

### Il Principio dei Terzi: Livello di Accesso, Budget e Capacità

Il nostro sistema di terzi è progettato come **fascie di servizio complete** che definiscono tre aspetti chiave del vostro utilizzo:

1.  **Un Livello di Accesso (Credito d'Acquisto)** : Per i Terzi 1 a 4, si tratta di un importo da pagare in anticipo (upfront) per attivare il servizio e sbloccare le capacità tecniche e il budget del livello scelto.
2.  **Un Limite di Budget Mensile** : È il tetto della vostra spesa mensile, garantendovi un controllo totale dei vostri costi.
3.  **Una Capacità Tecnica** : Sono i limiti di throughput (token al giorno e all'ora) che garantiscono una performance stabile e prevedibile per il vostro volume di chiamate.

La scelta di un terzo è quindi un equilibrio tra l'investimento iniziale, il budget mensile preventivato e la capacità tecnica richiesta. La vostra spesa all'interno di questa fascia viene poi fatturata in base ai tariffe vigenti.

### Tabella dei Tier

| Tier | Credito d'Acquisto | Limite Mensile | Tokens Output/Ora | Tokens Output/Giorno | Descrizione |
|------|-------------------|------------------|--------------------|---------------------|-----------| 
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Utilizzo standard |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Utilizzo professionale |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Volume elevato |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Aziendale |
| **Fatturazione Mensile** | N/A | Illimitata | Priorità elevata | Priorità elevata | Contatto commerciale |

**Nota** : I limiti di throughput sono calcolati in base ai tokens di output. La tariffa dei tokens varia in base all'uso:
- **Tokens di input** : 0,90 € / milione
- **Tokens di output (standard)** : 4,00 € / milione
- **Tokens di output (ragionatore)** : 21,00 € / milione (si applica ai modelli più avanzati per compiti complessi di tipo agente o ragionamento)

### Intestazioni di Limiti

Le risposte includono delle intestazioni informative :

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Errore 429 - Limite raggiunta

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

## Endpoint

### POST /v1/chat/completions

Genera risposte conversazionali.

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Spiega la fotosintesi"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

#### Parametri

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID del modello (vedere [catalogo](./models)) |
| `messages` | array | ✅ | Conversazione (role: system/user/assistant) |
| `stream` | boolean | ❌ | Attiva il streaming (default: false) |
| `temperature` | float | ❌ | Creatività 0.0-2.0 (default: 0.7) |
| `max_tokens` | integer | ❌ | Limite di token (default: 1024) |
| `top_p` | float | ❌ | Campionamento nucleus 0.0-1.0 (default: 1.0) |
| `presence_penalty` | float | ❌ | Penalità presenza -2.0 a 2.0 (default: 0) |
| `frequency_penalty` | float | ❌ | Penalità frequenza -2.0 a 2.0 (default: 0) |
| `user` | string | ❌ | ID utente univoco |
| `tools` | array | ❌ | Elenco degli strumenti che il modello può chiamare. |
| `tool_choice`| string/oggetto | ❌ | Controlla se il modello deve chiamare uno strumento. "none", "auto", o `{"type": "function", "function": {"name": "my_function"}}`. |

#### Risposta standard

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
        "content": "La fotosintesi è un processo biologico..."
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

#### Risposta con chiamata a strumenti

Se il modello decide di chiamare uno strumento, la risposta avrà un `finish_reason` di `tool_calls` e il messaggio conterrà un array `tool_calls`.

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

Dopo aver ricevuto una risposta `tool_calls`, devi eseguire lo strumento da parte tua, quindi restituire il risultato al modello utilizzando un messaggio con il `role: "tool"`.

```json
{
  "model": "qwen3:14b",
  "messages": [
    {
      "role": "user",
      "content": "Quel tempo fa a Parigi?"
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
      "content": "{\"temperature\": \"22\", \"unit\": \"celsius\", \"description\": \"Soleggiato\"}"
    }
  ]
}
```

#### Streaming (SSE)

Con `"stream": true`, la risposta arriva token per token:

**Intestazioni di risposta:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato degli eventi:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struttura dei chunk:**
- `choices[].delta.content` : Contenuto incrementale
- `finish_reason` : `null` durante lo streaming, poi `"stop"`
- Segnale di fine: `data: [DONE]`

### Richieste Multimodali (Visione)

Per analizzare le immagini, puoi inviare una richiesta in cui il campo `content` di un messaggio utente è un array che contiene sia testo che immagini.

Il formato per un'immagine è un oggetto con `type: "image_url"` e un campo `image_url` che contiene l'URL dell'immagine nel formato `data URI` (base64).

:::info Nota di Compatibilità
Sebbene il formato standard e consigliato sia `{"type": "image_url", "image_url": {"url": "data:..."}}`, l'API supporta anche in modo flessibile un formato semplificato `{"type": "image", "image": "data:..."}`. Tuttavia, è consigliabile utilizzare il formato standard `image_url` per una migliore compatibilità con l'ecosistema OpenAI.
:::

#### Esempio di Richiesta Vision

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
            "text": "Cosa vedi in questa immagine?"
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
**Nota** : L'endpoint `/v1/completions` utilizza lo stesso formato di `/v1/chat/completions` con i messaggi. 
Per la completione di testo semplice, utilizzare un messaggio utente con il proprio prompt.
:::

Completioni di testo tramite formato chat.

#### Richiesta

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

#### Parametri

Identici a /v1/chat/completions - vedi sezione precedente.

#### Risposta

Formato identico a /v1/chat/completions.

### POST /v1/audio/transcriptions

Trascrizione audio verso testo (Whisper).

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parametri

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|-------------|-------------|
| `file` | binary | ✅ | File audio (wav, mp3, m4a). |
| `language` | string | ❌ | Codice lingua ISO 639-1 (es: "fr"). Rilevamento automatico se non fornito. |
| `initial_prompt` | string | ❌ | Contesto o parole specifiche per migliorare la precisione della trascrizione. |
| `task` | string | ❌ | Compito da eseguire: `transcribe` (predefinito) o `translate` (tradurre in inglese). |
| `response_format` | string | ❌ | `json` (predefinito, equivalente a `verbose_json`), `text`, `srt`, `vtt`. |

#### Risposta (`json`)

```json
{
  "text": "Ciao, questo è un testo di trascrizione audio.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Ciao, questo è un testo di trascrizione audio.",
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

Trascrizione di diversi file audio in parallelo.

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions_batch" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "files=@audio1.wav" \
  -F "files=@audio2.mp3" \
  -F "language=fr"
```

#### Parametri

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|-------------|-------------|
| `files` | array | ✅ | Lista dei file audio da trascrivere. |
| `language` | string | ❌ | Codice lingua ISO 639-1 (es: "fr"). |
| `initial_prompt` | string | ❌ | Prompt iniziale per migliorare la trascrizione. |
| `task` | string | ❌ | Compito da eseguire: `transcribe` (predefinito) o `translate`. |

#### Risposta

```json
{
  "batch_results": [
    {
      "filename": "audio1.wav",
      "text": "Questo è il primo file.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio2.mp3",
      "text": "Ed ecco il secondo.",
      "segments": [],
      "language": "fr",
      "error": null
    },
    {
      "filename": "audio3.ogg",
      "text": null,
      "segments": [],
      "language": null,
      "error": "Errore di trascrizione per questo file."
    }
  ]
}
```

### GET /v1/models

Elenco dei modelli disponibili.

#### Richiesta

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Risposta

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

## Codici di errore

### 400 - Richiesta non valida

```json
{
  "error": {
    "message": "Parametro non valido 'temperature': deve essere compreso tra 0 e 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Non autorizzato

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Modello non trovato

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

### 429 - Limite di Velocità

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Errore del server

```json
{
  "error": {
    "message": "Internal server error",
    "type": "server_error"
  }
}
```

### 503 - Servizio non disponibile

```json
{
  "error": {
    "message": "Servizio temporaneamente non disponibile",
    "type": "service_unavailable_error"
  }
}
```

## Esempi per Linguaggio

### Python con requests

```python
import requests
import json


# Configurazione
API_KEY = "VOTRE_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completamento chat
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
    print(f"Errore {response.status_code}: {response.text}")
```

### Python con Streaming

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
                data = line[6:]  # Rimuovere 'data: '
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

# Utilizzo
stream_chat("Expliquez la physique quantique")

### JavaScript/Node.js

```javascript
const axios = require('axios');

const API_KEY = 'VOTRE_TOKEN_API';
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
        console.error('Errore:', error.response?.data || error.message);
    }
}

// Utilisation
chatCompletion('Bonjour !').then(response => {
    console.log(response);
});
```

### JavaScript con Fetch (Browser)

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

## Buone Pratiche

### Gestione degli Errori

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Limite di velocità raggiunta, attendere...")
            time.sleep(60)  # Aspettare 1 minuto
            return safe_api_call(payload)  # Retry
        else:
            print(f"Errore HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Errore di rete: {e}")
```

### Ottimizzazione dei Costi

1. **Utilizzate modelli appropriati** : Modelli più piccoli per test  
2. **Limitate max_tokens** : Evitate risposte troppo lunghe  
3. **Riutilizzate le conversazioni** : Finestra di contesto efficace  
4. **Monitoraggio** : Monitorate il vostro utilizzo nella Console

### Sicurezza

1. **Proteggi il tuo token** : Variabili di ambiente  
2. **Rotazione periodica** : Cambia le tue chiavi periodicamente  
3. **Convalida degli input** : Pulisci i dati degli utenti  
4. **Limitazione delle richieste del client** : Implementa le tue proprie limitazioni

## SDK e Integrazioni

L'API LLMaaS è compatibile con i SDK OpenAI esistenti modificando l'URL di base :

### SDK Python di OpenAI

```python
from openai import OpenAI

client = OpenAI(
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

```python
# Configurazione del modello chat (compatibile con LLMaaS)
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Utilizzo con messaggi
messages = [HumanMessage(content="Spiega l'IA in 3 frasi")]
response = chat.invoke(messages)
print(response.content)

# Oppure con una semplice stringa
response = chat.invoke("Bonjour, comment ça va ?")
print(response.content)
```

## Supporto

- **Documentazione** : [Guida di avvio rapido](./quickstart)
- **Catalogo modelli** : [Elenco completo](./models)
- **Console** : Gestione e monitoraggio tramite Console Cloud Temple
- **Supporto** : Tramite la Console Cloud Temple