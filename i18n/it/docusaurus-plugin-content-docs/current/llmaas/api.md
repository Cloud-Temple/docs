---
title: Documentazione API
sidebar_position: 2
---

# Documentazione API LLMaaS

## URL di base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticazione

Tutte le richieste richiedono un'intestazione `Authorization` con il tuo token API:

```
Authorization: Bearer IL_TUO_TOKEN_API
```

## Limitazione delle richieste e fatturazione

### Il Principio dei Terzi: Livello di Accesso, Budget e Capacità

Il nostro sistema di terzi è progettato come **buste di servizio complete** che definiscono tre aspetti fondamentali del vostro utilizzo:

1.  **Un Livello di Accesso (Credito d'Acquisto)**: Per i Terzi 1 al 4, si tratta di un importo da pagare in anticipo (upfront) per attivare il servizio e sbloccare le capacità tecniche e il budget associati al livello scelto.
2.  **Un Limite di Budget Mensile**: È il massimale della vostra consumazione mensile, garantendovi un controllo totale sui costi.
3.  **Una Capacità Tecnica**: Si tratta dei limiti di throughput (token al giorno e all'ora) che garantiscono un'efficienza stabile e prevedibile per il volume delle chiamate.

La scelta di un terzo rappresenta quindi un equilibrio tra l'investimento iniziale, il budget mensile previsto e la capacità tecnica richiesta. La vostra consumazione all'interno di questa busta viene poi fatturata in base ai tariffe in vigore.

### Table of Tiers

| Tier | Purchase Credit | Monthly Limit | Tokens Output/Hour | Tokens Output/Day | Description |
|------|------------------|----------------|--------------------|-------------------|-----------|
| **Tier 1** | 200 € | 1,000 € | 150,000 | 3,600,000 | Standard usage |
| **Tier 2** | 500 € | 3,000 € | 300,000 | 7,200,000 | Professional use |
| **Tier 3** | 1,000 € | 5,000 € | 450,000 | 10,800,000 | High volume |
| **Tier 4** | 4,000 € | 10,000 € | 600,000 | 14,400,000 | Enterprise |
| **Monthly Billing** | N/A | Unlimited | High priority | High priority | Contact sales |

**Note**: Rate limits are calculated based on output tokens. Token pricing varies by usage:
- **Input tokens**: 0.90 € / million
- **Output tokens (standard)**: 4.00 € / million
- **Output tokens (reasoner)**: 21.00 € / million (applies to most advanced models for complex agent-like or reasoning tasks)

#### **Billing Audio**
- **Audio Transcription**: 0.01 € / minute (any started minute is billable)

### Limit Headers

Responses include informative headers:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Errore 429 - Limite raggiunta

```json
{
  "error": {
    "message": "Limite di velocità superato. Aggiorna il tuo piano o riprova più tardi.",
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
  -H "Authorization: Bearer IL_TUO_TOKEN_API" \
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
| `model` | string | ✅ | ID del modello (vedi [catalogo](./models)) |
| `messages` | array | ✅ | Conversazione (role: system/user/assistant) |
| `stream` | boolean | ❌ | Abilita lo streaming (valore predefinito: false) |
| `temperature` | float | ❌ | Creatività da 0.0 a 2.0 (valore predefinito: 0.7) |
| `max_tokens` | integer | ❌ | Limite di token (valore predefinito: 1024) |
| `top_p` | float | ❌ | Campionamento nucleus da 0.0 a 1.0 (valore predefinito: 1.0) |
| `presence_penalty` | float | ❌ | Penalità presenza da -2.0 a 2.0 (valore predefinito: 0) |
| `frequency_penalty` | float | ❌ | Penalità frequenza da -2.0 a 2.0 (valore predefinito: 0) |
| `user` | string | ❌ | ID utente univoco |
| `tools` | array | ❌ | Elenco degli strumenti che il modello può chiamare. |
| `tool_choice` | string/object | ❌ | Controlla se il modello deve chiamare uno strumento. "none", "auto", oppure `{"type": "function", "function": {"name": "my_function"}}`. |

#### Risposta Standard

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

#### Risposta con Chiamata a Strumento

Se il modello decide di richiamare uno strumento, la risposta avrà un `finish_reason` pari a `tool_calls` e il messaggio conterrà un array `tool_calls`.

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
              "arguments": "{\n  \"location\": \"Parigi, Francia\",\n  \"unit\": \"celsius\"\n}"
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

Dopo aver ricevuto una risposta `tool_calls`, devi eseguire lo strumento tu stesso, quindi restituire il risultato al modello utilizzando un messaggio con il `role: "tool"`.

```json
{
  "model": "qwen3:14b",
  "messages": [
    {
      "role": "user",
      "content": "Che tempo fa a Parigi?"
    },
    {
      "role": "assistant",
      "tool_calls": [
        {
          "id": "call_abc123",
          "type": "function",
          "function": {
            "name": "get_current_weather",
            "arguments": "{\"location\": \"Parigi, Francia\", \"unit\": \"celsius\"}"
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

**Intestazioni della risposta:**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato degli eventi:**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" foto"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struttura dei chunk:**
- `choices[].delta.content` : Contenuto incrementale
- `finish_reason` : `null` durante lo streaming, poi `"stop"`
- Segnale di fine: `data: [DONE]`

### Richieste Multimodali (Visione)

Per analizzare immagini, puoi inviare una richiesta in cui il campo `content` di un messaggio utente è un array contenente sia testo che immagini.

Il formato per un'immagine è un oggetto con `type: "image_url"` e un campo `image_url` che contiene l'URL dell'immagine nel formato `data URI` (base64).

:::info Nota sulla Compatibilità
Sebbene il formato standard e raccomandato sia `{"type": "image_url", "image_url": {"url": "data:..."}}`, l'API supporta anche, per flessibilità, un formato semplificato `{"type": "image", "image": "data:..."}`. Tuttavia, si raccomanda di utilizzare il formato standard `image_url` per una migliore compatibilità con l'ecosistema OpenAI.
:::

:::tip OCR e Analisi Documenti
Per compiti specifici di analisi documenti (PDF, scansioni, tabelle), raccomandiamo l'uso del modello specializzato **DeepSeek-OCR**. Vedi la [documentazione dedicata](./ocr).
:::

#### Esempio di richiesta Visione

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IL_TUO_TOKEN_API" \
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
**Nota** : L'endpoint `/v1/completions` utilizza lo stesso formato di `/v1/chat/completions` con messaggi.  
Per completamenti di testo semplici, utilizza un messaggio di tipo user con il tuo prompt.
:::

Completamento di testo tramite formato chat.

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IL_TUO_TOKEN_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Completa questa frase: L'intelligenza artificiale è"
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

#### Parametri

Identici a `/v1/chat/completions` - vedere sezione precedente.

#### Risposta

Formato identico a `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Trascrizione audio in testo (Whisper).

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer IL_TUO_TOKEN_API" \
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
| `task` | string | ❌ | Task da eseguire: `transcribe` (predefinito) o `translate` (tradurre in inglese). |
| `response_format` | string | ❌ | `json` (predefinito, equivalente a `verbose_json`). I formati `text`, `srt`, `vtt` non sono attualmente supportati. |

#### Risposta (`json`)

```json
{
  "text": "Ciao, questo è un test di trascrizione audio.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 4.0,
      "text": " Ciao, questo è un test di trascrizione audio.",
      "tokens": [ 50364, 40365, 33, 2373, 359, 456, 2373, 323, 1330, 2373, 2264, 50564 ],
      "temperature": 0.0,
      "avg_logprob": -0.25,
      "compression_ratio": 1.5,
      "no_speech_prob": 0.05
    }
  ],
  "language": "it"
}
```

### POST /v1/embeddings

Creates an embedding vector representing the input text.

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IL_TUO_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Il testo da vettorizzare"
  }'
```

#### Parametri

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID del modello di embedding (vedi [catalogo](./models)) |
| `input` | string o array di stringhe | ✅ | Il testo o l'elenco di testi da vettorizzare. |

#### Risposta

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

List of available models.

#### Richiesta

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer IL_TUO_TOKEN_API"
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
    "message": "Parametro 'temperature' non valido: deve essere compreso tra 0 e 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Non autorizzato

```json
{
  "error": {
    "message": "Chiave API fornita non valida",
    "type": "authentication_error"
  }
}
```

### 404 - Model Non Trovato

```json
{
  "error": {
    "message": "Il modello 'unknown-model' non esiste",
    "type": "invalid_request_error",
    "param": "model",
    "code": "model_not_found"
  }
}
```

### 429 - Limite di velocità

```json
{
  "error": {
    "message": "Limite di velocità superato. Aggiorna il tuo piano o riprova più tardi.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Errore del server

```json
{
  "error": {
    "message": "Errore interno del server",
    "type": "server_error"
  }
}
```

### 503 - Servizio Non Disponibile

```json
{
  "error": {
    "message": "Servizio momentaneamente non disponibile",
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

# It is recommended to protect your API key by using environment variables.

# Esempio: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "IL_TUO_TOKEN_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completamento del chat
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Ciao!"}
    ],
    "max_tokens": 100
}

try:
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        timeout=30  # Aggiunta di un timeout per la richiesta
    )
    
    response.raise_for_status()  # Solleva un'eccezione per i codici di errore HTTP (4xx, 5xx)
    result = response.json()
    print(result["choices"][0]["message"]["content"])

except requests.exceptions.HTTPError as e:
    print(f"Errore HTTP: {e.response.status_code} - {e.response.text}")
except requests.exceptions.RequestException as e:
    print(f"Errore di rete: {e}")
except json.JSONDecodeError:
    print(f"Errore di decodifica JSON: {response.text}")
except Exception as e:
    print(f"Si è verificato un errore imprevisto: {e}")

### Python con Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
    # Si consigliato proteggere la propria chiave API utilizzando variabili d'ambiente.
    # Esempio: API_KEY = os.getenv("LLMAAS_API_KEY")
    API_KEY = "IL_TUO_TOKEN_API"
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
            timeout=30  # Aggiunta di un timeout per la richiesta
        )
        
        response.raise_for_status()  # Solleva un'eccezione per codici di errore HTTP (4xx, 5xx)
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]  # Rimuove 'data: '
                    if data == '[DONE]':
                        break
                    try:
                        chunk = json.loads(data)
                        content = chunk['choices'][0]['delta'].get('content', '')
                        if content:
                            print(content, end='', flush=True)
                    except json.JSONDecodeError:
                        print(f"Errore nel decodificare il JSON nel flusso: {data}")
                        continue
        print()  # Nuova riga dopo il flusso
    except requests.exceptions.HTTPError as e:
        print(f"Errore HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Errore di rete: {e}")
    except Exception as e:
        print(f"Si è verificato un errore imprevisto: {e}")
```

# Utilizzo
stream_chat("Spiega la fisica quantistica")

### JavaScript/Node.js

```javascript
const axios = require('axios');

// Configurazione
// Si raccomanda di proteggere la tua chiave API utilizzando variabili d'ambiente.
// Esempio: const API_KEY = process.env.LLMAAS_API_KEY;
const API_KEY = 'IL_TUO_TOKEN_API';
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
                timeout: 30000 // Aggiunta di un timeout per la richiesta (30 secondi)
            }
        );
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Errore:', error.response?.data || error.message);
        // La gestione degli errori può essere ulteriormente approfondita se necessario
        // Ad esempio: if (error.response?.status === 429) { console.error("Limite di richieste superato"); }
    }
}

// Utilizzo
chatCompletion('Ciao!').then(response => {
    if (response) {
        console.log(response);
    }
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

## Best Practices

### Gestione degli errori

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Limite di velocità raggiunta, attendere...")
            time.sleep(60)  # Attendere 1 minuto
            return safe_api_call(payload)  # Riprovare
        else:
            print(f"Errore HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Errore di rete: {e}")
```

### Ottimizzazione dei Costi

1. **Utilizza modelli appropriati**: modelli più piccoli per i test  
2. **Limita max_tokens**: evita risposte troppo lunghe  
3. **Riutilizza le conversazioni**: finestra di contesto efficiente  
4. **Monitoraggio**: segui il tuo utilizzo nella Console

### Sicurezza

1. **Proteggi il tuo token**: Variabili di ambiente  
2. **Rotazione periodica**: Cambia le tue chiavi regolarmente  
3. **Validazione input**: Pulisci i dati utente  
4. **Limitazione delle richieste client**: Implementa i tuoi limiti

## SDK e Integrazioni

L'API LLMaaS è compatibile con i SDK OpenAI esistenti modificando l'URL di base:

### OpenAI Python SDK

```python
from openai import OpenAI

# It is recommended to protect your API key by using environment variables.

# Esempio: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="IL_TUO_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Ciao!"}
        ],
        max_tokens=50  # Aggiunta di max_tokens per coerenza con i test
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Errore OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configurazione del modello di chat (compatibile con LLMaaS)

# It is recommended to protect your API key by using environment variables.

# Esempio: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="IL_VOSTRO_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    # Nota: i parametri come max_tokens vengono passati tramite model_kwargs
    # per garantire la compatibilità tra le diverse versioni di LangChain.
    model_kwargs={"max_tokens": 200}
)

try:
    # Utilizzo con messaggi
    messages = [HumanMessage(content="Spiega l'IA in 3 frasi")]
    response = chat.invoke(messages)
    print(response.content)

    # Oppure con una semplice stringa
    response = chat.invoke("Ciao, come va?")
    print(response.content)

except Exception as e:
    print(f"Errore LangChain: {e}")
```

#### Usage degli Embeddings

:::warning Incompatibilità con i client standard di LangChain
Al momento, l'utilizzo dell'endpoint di embedding tramite le classi standard di LangChain (`langchain_openai.OpenAIEmbeddings` o `langchain_community.OllamaEmbeddings`) presenta incompatibilità con la nostra API.

- `OpenAIEmbeddings` invia token pre-calcolati invece di testo grezzo, che viene rifiuto.
- `OllamaEmbeddings` non gestisce l'autenticazione tramite Bearer Token richiesta.

Finché non sarà disponibile una soluzione definitiva, si raccomanda di creare una classe di embedding personalizzata oppure di chiamare l'API direttamente, come mostrato nell'esempio `esempi/simple-rag-demo`.
:::

```python
from langchain.embeddings.base import Embeddings
from typing import List
import httpx

class LLMaaSEmbeddings(Embeddings):
    """
    Classe di embedding personalizzata per interagire con l'API LLMaaS di Cloud Temple.
    Questa classe è progettata per essere compatibile con l'interfaccia `Embeddings` di LangChain,
    consentendo il suo utilizzo in pipeline LangChain mentre chiama la nostra API specifica.
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
                # Ordinare gli embedding in base al loro indice per garantire l'ordine
                data.sort(key=lambda e: e['index'])
                return [item['embedding'] for item in data]
        except httpx.HTTPStatusError as e:
            print(f"Errore HTTP durante il recupero dell'embedding: {e.response.status_code}")
            print(f"Risposta: {e.response.text}")
            return []

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]

# Usage
# embeddings = LLMaaSEmbeddings(
#     api_key="IL_VOSTRO_TOKEN_API",
#     base_url="https://api.ai.cloud-temple.com/v1",
#     model_name="granite-embedding:278m"
# )
# vector = embeddings.embed_query("Il mio testo da vettorizzare")
```

## Support

- **Documentazione** : [Guida introduttiva](./quickstart)
- **Catalogo modelli** : [Elenco completo](./models)
- **Console** : Gestione e monitoraggio tramite Console Cloud Temple
- **Supporto** : Attraverso la Console Cloud Temple
