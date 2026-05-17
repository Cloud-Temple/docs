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

Tutte le richieste richiedono un header `Authorization` con il token API:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting e Fatturazione

### Il Principio dei Tier: Livello di Accesso, Budget e Capacità

Il nostro sistema di tier è progettato come **pacchetti di servizio completi** che definiscono tre aspetti chiave del vostro utilizzo:

1.  **Un Livello di Accesso (Credito d'Acquisto)** : Per i Tier da 1 a 4, si tratta di un importo da pagare in anticipo (upfront) per attivare il servizio e sbloccare le capacità tecniche e budgetarie del livello scelto.
2.  **Un Limite di Budget Mensile** : È il tetto del vostro consumo mensile, garantendovi un controllo totale sui costi.
3.  **Una Capacità Tecnica** : Sono i limiti di throughput (token al giorno e all'ora) che garantiscono prestazioni stabili e prevedibili per il vostro volume di chiamate.

La scelta di un tier è quindi un equilibrio tra l'investimento iniziale, il budget mensile previsto e la capacità tecnica richiesta. Il vostro consumo all'interno di questo pacchetto viene quindi fatturato secondo le tariffe vigenti.

### Tabella dei Piani

| Piano                      | Credito di Acquisto | Limite Mensile | Token di Output/Ora | Token di Output/Giorno | Descrizione          |
| ------------------------- | -------------- | ---------------- | ------------------- | ------------------ | -------------------- |
| **Piano 1**                | 200 €          | 1 000 €          | 150 000             | 3 600 000          | Utilizzo standard |
| **Piano 2**                | 500 €          | 3 000 €          | 300 000             | 7 200 000          | Uso professionale  |
| **Piano 3**                | 1 000 €        | 5 000 €          | 450 000             | 10 800 000         | Alto volume         |
| **Piano 4**                | 4 000 €        | 10 000 €         | 600 000             | 14 400 000         | Azienda           |
| **Fatturazione Mensile** | N/A            | Illimitata        | Priorità elevata     | Priorità elevata    | Contatto commerciale   |

**Nota** : I limiti di frequenza sono calcolati in base ai token di output. I prezzi variano in base all'uso :

| Tipo di utilizzo                           | Tariffa                                            |
| -------------------------------------- | ------------------------------------------------ |
| **Token di input**                    | 1.8 € / milione                                  |
| **Token di output (chat/completamento)** | 8.00 € / milione                                 |
| **Token di ragionamento**             | 8.00 € / milione                                 |
| **Reranking**                          | 4.00 € / milione di token riordinati              |
| **Batch asincrono (input)**          | 0.9 € / milione (−50% rispetto allo standard)               |
| **Batch asincrono (output)**          | 4.00 € / milione (−50% rispetto allo standard)              |
| **Trascrizione Audio**                | 0.01 € / minuto (ogni minuto iniziato è dovuto) |

### Intestazioni di Limite

Le risposte includono intestazioni informative:

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Errore 429 - Limite Raggiunto

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

#### Paramètres

| Paramètre           | Tipo          | Obbligatorio | Descrizione                                                                                                                  |
| ------------------- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅          | ID del modello (vedi [catalogo](./models))                                                                                    |
| `messages`          | array         | ✅          | Conversazione (ruolo: system/user/assistant)                                                                                   |
| `stream`            | boolean       | ❌          | Attiva lo streaming (predefinito: false)                                                                                          |
| `temperature`       | float         | ❌          | Creatività 0.0-2.0 (predefinito: 0.7)                                                                                             |
| `max_tokens`        | integer       | ❌          | Limite di token (predefinito: 1024)                                                                                              |
| `top_p`             | float         | ❌          | Campionamento nucleus 0.0-1.0 (predefinito: 1.0)                                                                                |
| `presence_penalty`  | float         | ❌          | Penalità presenza da -2.0 a 2.0 (predefinito: 0)                                                                                     |
| `frequency_penalty` | float         | ❌          | Penalità frequenza da -2.0 a 2.0 (predefinito: 0)                                                                                    |
| `user`              | string        | ❌          | ID utente univoco                                                                                                        |
| `tools`             | array         | ❌          | Elenco degli strumenti che il modello può chiamare.                                                                                 |
| `tool_choice`       | string/object | ❌          | Controlla se il modello deve chiamare uno strumento. "none", "auto", o `{"type": "function", "function": {"name": "my_function"}}`. |

#### Risposta Standard

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

#### Risposta con Chiamata di Strumento

Se il modello decide di chiamare uno strumento, la risposta avrà un `finish_reason` di `tool_calls` e il messaggio conterrà un array `tool_calls`.

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

Dopo aver ricevuto una risposta `tool_calls`, è necessario eseguire lo strumento sul tuo lato, quindi inviare il risultato al modello utilizzando un messaggio con `role: "tool"`.

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

Con `"stream": true`, la risposta arriva token per token :

**Header di risposta :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato degli eventi :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struttura dei chunk :**
- `choices[].delta.content` : Contenuto incrementale
- `finish_reason` : `null` durante lo streaming, poi `"stop"`
- Segnale di fine : `data: [DONE]`

### Richieste Multimodali (Vision)

Per analizzare le immagini, è possibile inviare una richiesta in cui il campo `content` di un messaggio utente è un array (array) contenente sia testo che immagini.

Il formato per un'immagine è un oggetto con `type: "image_url"` e un campo `image_url` contenente l'URL dell'immagine nel formato `data URI` (base64).

:::info Nota sulla Compatibilità
Sebbene il formato standard e consigliato sia `{"type": "image_url", "image_url": {"url": "data:..."}}`, l'API supporta anche, per flessibilità, un formato semplificato `{"type": "image", "image": "data:..."}`. Si consiglia tuttavia di utilizzare il formato standard `image_url` per una migliore compatibilità con l'ecosistema OpenAI.
:::

:::tip OCR e Analisi dei Documenti
Per attività specifiche di analisi dei documenti (PDF, scans, tableaux), raccomandiamo l'utilizzo del modello specializzato **DeepSeek-OCR**. Consulta la [documentazione dedicata](./ocr).
:::

#### Esempio di Richiesta Visione

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
**Nota** : L'endpoint `/v1/completions` utilizza lo stesso formato di `/v1/chat/completions` con i messaggi. 
Per la completione di testo semplice, utilizza un messaggio utente con il tuo prompt.
:::

Completioni di testo tramite formato chat.

#### Richiesta

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

#### Parametri

Uguali a `/v1/chat/completions` - vedere la sezione precedente.

#### Risposta

Formato identico a `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Trascrizione da audio a testo (Whisper).

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parametri

| Parametro         | Tipo   | Obbligatorio | Descrizione                                                                                                        |
| ----------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `file`            | binary | ✅           | File audio (wav, mp3, m4a).                                                                                     |
| `language`        | string | ❌           | Codice lingua ISO 639-1 (ex: "fr"). Rilevamento automatico se non fornito.                                             |
| `initial_prompt`  | string | ❌           | Contesto o parole specifiche per migliorare la precisione della trascrizione.                                      |
| `task`            | string | ❌           | Attività da eseguire: `transcribe` (défaut) o `translate` (traduire en anglais).                                    |
| `response_format` | string | ❌           | `json` (défaut, équivalent à `verbose_json`). I formati `text`, `srt`, `vtt` non sono attualmente supportati. |

#### Risposta (`json`)

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

Crea un vettore di embedding che rappresenta il testo di input.

#### Richiesta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Le texte à vectoriser"
  }'
```

#### Parametri

| Parametro | Tipo                       | Obbligatorio | Descrizione                                           |
| --------- | -------------------------- | ------------ | ----------------------------------------------------- |
| `model`   | string                     | ✅           | ID del modello di embedding (vedi [catalogo](./models)) |
| `input`   | stringa o array di stringhe | ✅           | Il testo o l'elenco di testi da vettorizzare.         |

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

### POST /v1/rerank

Riordina un elenco di documenti in base alla pertinenza rispetto a una query. Compatibile con l'API Cohere (v1 e v2).

**Fatturazione** : 4€ / milione di token riordinati. Ideale per migliorare la precisione delle pipeline RAG.

#### Richiesta

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

#### Parametri

| Parametro   | Tipo    | Obbligatorio | Descrizione                                                                 |
| ----------- | ------- | ------------ | --------------------------------------------------------------------------- |
| `model`     | string  | ✅           | ID del modello di reranking (vedere [catalogo](./models#modèles-de-reranking)) |
| `query`     | string  | ✅           | La query di ricerca                                                         |
| `documents` | array   | ✅           | Elenco dei documenti da riordinare                                           |
| `top_n`     | integer | ❌           | Numero di risultati da restituire (predefinito: tutti)                      |

#### Risposta

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

L'endpoint `/v2/rerank` (Cohere SDK v2) è disponibile anche con lo stesso formato di richiesta.

#### Esempio Python (SDK Cohere)

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

## Codici di Errore

### 400 - Richiesta non valida

```json
{
  "error": {
    "message": "Invalid parameter 'temperature': must be between 0 and 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Non Autorizzato

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Modello Non Trovato

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

### 500 - Errore del Server

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
    "message": "Service temporarily unavailable",
    "type": "service_unavailable_error"
  }
}
```

## Esempi per linguaggio

### Python con requests

```python
import requests
import json

# Configurazione
# Si consiglia di proteggere la propria chiave API utilizzando variabili d'ambiente.
# Esempio: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "VOTRE_TOKEN_API" 
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completamento chat
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
        timeout=30 # Aggiunta di un timeout per la richiesta
    )
    
    response.raise_for_status() # Solleva un'eccezione per i codici di errore HTTP (4xx, 5xx)
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

### Python con Streaming

```python
import requests
import json

def stream_chat(message, model="gpt-oss:120b"):
    # Si consiglia di proteggere la propria chiave API utilizzando variabili di ambiente.
    # Esempio: API_KEY = os.getenv("LLMAAS_API_KEY")
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
            timeout=30 # Aggiunta di un timeout per la richiesta
        )
        
        response.raise_for_status() # Solleva un'eccezione per i codici di errore HTTP (4xx, 5xx)
        
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
                        print(f"Erreur de décodage JSON dans le stream: {data}")
                        continue
        print() # Nuova riga dopo lo stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Utilizzo
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

## Migliori Pratiche

### Gestione degli Errori

```python
def safe_api_call(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Rate limit atteint, attendre...")
            time.sleep(60)  # Attendere 1 minuto
            return safe_api_call(payload)  # Riprova
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Ottimizzazione dei Costi

1. **Utilizza modelli appropriati** : Modelli più piccoli per i test
2. **Limita max_tokens** : Evita risposte troppo lunghe
3. **Riutilizza le conversazioni** : Finestra di contesto efficiente
4. **Monitoraggio** : Monitora il tuo utilizzo nella Console

### Sicurezza

1. **Proteggi il tuo token** : Variabili d'ambiente
2. **Rotazione regolare** : Modifica le tue chiavi periodicamente
3. **Validazione input** : Pulisci i dati utente
4. **Limitazione della velocità client** : Implementa i tuoi limiti

## SDK e Integrazioni

L'API LLMaaS è compatibile con gli SDK OpenAI esistenti modificando l'URL di base :

### SDK Python di OpenAI

```python
from openai import OpenAI

# Si consiglia di proteggere la propria chiave API utilizzando variabili di ambiente.
# Esempio: api_key=os.getenv("LLMAAS_API_KEY")
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
        max_tokens=50 # Aggiunta di max_tokens per coerenza con i test
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configurazione del modello di chat (compatibile con LLMaaS)
# Si consiglia di proteggere la propria chiave API utilizzando variabili di ambiente.
# Esempio: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    # Nota: i parametri come max_tokens vengono passati tramite model_kwargs
    # per garantire la compatibilità tra le versioni di LangChain.
    model_kwargs={"max_tokens": 200}
)

try:
    # Utilizzo con messaggi
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # Oppure con una semplice stringa
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Utilizzo degli Embedding

:::warning Incompatibilità con i client standard di LangChain
Attualmente, l'utilizzo dell'endpoint di embedding tramite le classi standard di LangChain (`langchain_openai.OpenAIEmbeddings` o `langchain_community.OllamaEmbeddings`) presenta incompatibilità con la nostra API.

- `OpenAIEmbeddings` invia token pre-calcolati invece di testo grezzo, che viene rifiutato.
- `OllamaEmbeddings` non gestisce l'autenticazione tramite Bearer Token richiesta.

In attesa di una soluzione duratura, si consiglia di creare una classe di embedding personalizzata o di chiamare l'API direttamente, come dimostrato nell'esempio `exemples/simple-rag-demo`.
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
                # Ordina gli embedding per indice per garantire l'ordine
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

# Utilizzo
# embeddings = LLMaaSEmbeddings(
#     api_key="VOTRE_TOKEN_API",
#     base_url="https://api.ai.cloud-temple.com/v1",
#     model_name="granite-embedding:278m"
# )
# vector = embeddings.embed_query("Mon texte à vectoriser")
```

## Supporto
- **Documentazione** : [Guida rapida all'avvio](./quickstart)
- **Catalogo modelli** : [Elenco completo](./models)
- **Console** : Gestione e monitoraggio tramite Console Cloud Temple
- **Supporto** : Tramite la Console Cloud Temple