---
title: Documentazione API
sidebar_position: 2
---

# Documentazione API LLMaaS

## Compatibilità OpenAI

L'API LLMaaS è compatibile con OpenAI per le chiamate documentate in questo riferimento. Configurate l'URL base `https://api.ai.cloud-temple.com/v1` e la vostra chiave LLMaaS nel client, quindi verificate le capacità del modello e i parametri dell'endpoint utilizzato.

La compatibilità non copre l'intero set di funzionalità OpenAI. Le differenze documentate includono in particolare :

- **Completions** : `/v1/completions` si aspetta un array `messages`, come nel chat ; vedere il [formato di completion](#post-v1completions).
- **Embeddings** : gli input devono essere testo ; vedere i [formati accettati](#post-v1embeddings).
- **Trascrizione audio** : i formati di risposta `text`, `srt` e `vtt` non sono supportati ; vedere i [parametri di trascrizione](#post-v1audiotranscriptions).
- **Batch** : il servizio utilizza un [contratto specifico](./batch.md), con invio diretto delle conversazioni in JSON su `/v1/chat/completions/batch`.

## URL di Base

```
https://api.ai.cloud-temple.com/v1
```

## Autenticazione

Tutte le richieste richiedono un header `Authorization` con il vostro token API:

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting e Fatturazione

### Il Principio dei Livelli: Livello di Accesso, Budget e Capacità

Il nostro sistema a livelli è progettato come **pacchetti di servizio completi** che definiscono tre aspetti chiave del vostro utilizzo:

1.  **Un Livello di Accesso (Credito di Acquisto)** : Per i Livelli 1 a 4, si tratta di un importo da saldare in anticipo (upfront) per attivare il servizio e sbloccare le capacità tecniche e di budget del livello scelto.
2.  **Un Limite di Budget Mensile** : È il tetto del vostro consumo mensile, garantendovi un controllo totale sui costi.
3.  **Una Capacità Tecnica** : Si tratta dei limiti di throughput (token al giorno e all'ora) che garantiscono prestazioni stabili e prevedibili per il vostro volume di chiamate.

La scelta di un livello rappresenta quindi un equilibrio tra l'investimento iniziale, il budget mensile previsto e la capacità tecnica richiesta. Il vostro consumo all'interno di questo pacchetto viene quindi fatturato secondo le tariffe in vigore.

### Tabella dei Tier

| Tier                      | Credito di Acquisto | Limite Mensile | Token Output/Ora | Token Output/Giorno | Descrizione          |
| ------------------------- | ------------------- | -------------- | ---------------- | ------------------- | -------------------- |
| **Tier 1**                | 200 €               | 1 000 €        | 150 000          | 3 600 000           | Utilizzo standard    |
| **Tier 2**                | 500 €               | 3 000 €        | 300 000          | 7 200 000           | Uso professionale    |
| **Tier 3**                | 1 000 €             | 5 000 €        | 450 000          | 10 800 000          | Volume elevato       |
| **Tier 4**                | 4 000 €             | 10 000 €       | 600 000          | 14 400 000          | Impresa              |
| **Fatturazione Mensile**   | N/A                 | Illimitata     | Priorità elevata | Priorità elevata    | Contatto commerciale |

**Nota** : I limiti di throughput sono calcolati sulla base dei token in uscita. La tariffazione varia in base all'utilizzo :

| Tipo di utilizzo                           | Tariffa                                            |
| ------------------------------------------ | -------------------------------------------------- |
| **Token in ingresso**                      | 1.8 € / milione                                    |
| **Token in uscita (chat/completion)**      | 8.00 € / milione                                   |
| **Token di ragionamento**                  | 8.00 € / milione                                   |
| **Reranking**                              | 4,00 € / milione di documenti elaborati              |
| **Batch asincrono (ingresso)**             | 0.9 € / milione (−50% vs standard)                 |
| **Batch asincrono (uscita)**               | 4.00 € / milione (−50% vs standard)                |
| **Trascrizione Audio**                     | 0.01 € / minuto (ogni minuto iniziato è fatturabile) |

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

#### Parametri

| Parametro           | Tipo          | Obbligatorio | Descrizione                                                                                                                  |
| ------------------- | ------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅          | ID del modello (vedi [catalogue](./models))                                                                                   |
| `messages`          | array         | ✅          | Conversazione (role: system/user/assistant)                                                                                   |
| `stream`            | boolean       | ❌          | Attiva lo streaming (défaut: false)                                                                                           |
| `temperature`       | float         | ❌          | Creatività 0.0-2.0 (défaut: 0.7)                                                                                             |
| `max_tokens`        | integer       | ❌          | Limite di token (défaut: 1024)                                                                                               |
| `top_p`             | float         | ❌          | Campionamento nucleus 0.0-1.0 (défaut: 1.0)                                                                                  |
| `presence_penalty`  | float         | ❌          | Penalità di presenza -2.0 a 2.0 (défaut: 0)                                                                                  |
| `frequency_penalty` | float         | ❌          | Penalità di frequenza -2.0 a 2.0 (défaut: 0)                                                                                 |
| `user`              | string        | ❌          | ID utente univoco                                                                                                             |
| `tools`             | array         | ❌          | Elenco degli strumenti che il modello può chiamare.                                                                          |
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

#### Risposta con Chiamata di Strumenti

Se il modello decide di invocare uno strumento, la risposta avrà un `finish_reason` di `tool_calls` e il messaggio conterrà un array `tool_calls`.

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

Dopo aver ricevuto una risposta `tool_calls`, è necessario eseguire lo strumento sul proprio lato, quindi restituire il risultato al modello utilizzando un messaggio con `role: "tool"`.

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

**Intestazioni di risposta :**
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

Per analizzare le immagini, è possibile inviare una richiesta in cui il campo `content` di un messaggio utente è un array contenente sia testo che immagini.

Il formato per un'immagine è un oggetto con `type: "image_url"` e un campo `image_url` contenente l'URL dell'immagine in formato `data URI` (base64).

:::info[Note de Compatibilité]
Sebbene il formato standard e consigliato sia `{"type": "image_url", "image_url": {"url": "data:..."}}`, l'API supporta inoltre, per flessibilità, un formato semplificato `{"type": "image", "image": "data:..."}`. Si consiglia tuttavia di utilizzare il formato standard `image_url` per una migliore compatibilità con l'ecosistema OpenAI.
:::

:::tip[OCR et Analyse de Documents]
Per compiti specifici di analisi dei documenti (PDF, scansioni, tabelle), consigliamo l'utilizzo del modello specializzato **DeepSeek-OCR**. Vedi la [documentation dédiée](./ocr).
:::

#### Esempio di Richiesta Vision

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
**Nota** : L'endpoint `/v1/completions` utilizza lo stesso formato di `/v1/chat/completions` con i messaggi. 
Per il completamento del testo semplice, utilizza un messaggio user con il tuo prompt.
:::

Completazioni di testo tramite formato chat.

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

Identici a `/v1/chat/completions` - vedere la sezione precedente.

#### Risposta

Formato identico a `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Trascrizione audio in testo (Whisper).

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
| `file`            | binary | ✅          | File audio (wav, mp3, m4a).                                                                                         |
| `language`        | string | ❌          | Codice lingua ISO 639-1 (es: "fr"). Rilevamento automatico se non fornito.                                          |
| `initial_prompt`  | string | ❌          | Contesto o parole specifiche per migliorare la precisione della trascrizione.                                       |
| `task`            | string | ❌          | Compito da eseguire: `transcribe` (predefinito) o `translate` (tradurre in inglese).                                |
| `response_format` | string | ❌          | `json` (predefinito, equivalente a `verbose_json`). I formati `text`, `srt`, `vtt` non sono attualmente supportati. |

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
| `model`   | string                     | ✅          | ID del modello di embedding (vedi [catalogue](./models)) |
| `input`   | string or array of strings | ✅          | Il testo o l'elenco di testi da vettorizzare.          |

#### Risposta

Estratto abbreviato: i puntini di sospensione rappresentano le altre componenti del vettore. Questo blocco illustra la struttura della risposta e non costituisce un documento JSON direttamente copiabile.

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

Riordina un elenco di documenti in base alla rilevanza rispetto a una query. Compatibile con l'API Cohere (v1 e v2).

**Fatturazione** : 4,00 € per milione di documenti elaborati. Tutti i documenti inviati vengono conteggiati, anche se `top_n` limita il numero di risultati restituiti. Vedi il [dettaglio del calcolo](./rerank.md#tariffazione).

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
| `model`     | string  | ✅          | ID del modello di reranking (vedi [catalogo](./models#modelli-di-reranking)) |
| `query`     | string  | ✅          | La query di ricerca                                                         |
| `documents` | array   | ✅          | Elenco dei documenti da riordinare                                          |
| `top_n`     | integer | ❌          | Numero di risultati da restituire (predefinito: tutti)                       |

#### Risposta

Estratto illustrativo del formato Jina/vLLM descritto dal contratto della piattaforma. I punteggi e i contatori di seguito sono fittizi. Il proxy trasmette la risposta del motore e aggiunge un blocco `backend`, omesso qui.

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

I `relevance_score` sono punteggi grezzi non normalizzati, non probabilità comprese tra 0 e 1. Utilizzate il loro ordine relativo; ogni soglia deve essere [calibré sur votre modèle et votre corpus](./rerank.md#soglia-di-rilevanza). I contatori `usage.prompt_tokens` e `usage.total_tokens` sono distinti dalla fatturazione per documento elaborato; non è richiesto alcun campo `usage.billed_units.search_units` per calcolare quest'ultima.

L'endpoint `/v2/rerank` (Cohere SDK v2) è inoltre disponibile con lo stesso formato di richiesta.

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

### POST /v1/chat/completions/batch

Invia più conversazioni indipendenti con un modello comune per un'elaborazione asincrona. Il campo `messages` è un array di conversazioni. La risposta HTTP 202 contiene l'identificatore del batch.

Utilizza `GET /v1/chat/completions/batch/{id}` con la stessa chiave API per monitorare l'elaborazione e recuperare i risultati. Consulta il [guide Batch](./batch.md) per il formato, i limiti e un esempio completo.

### GET /v1/models

Elenco degli ID dei modelli esposti dall'API. Utilizzate questa risposta per specificare il parametro `model`.

Consultate anche il [ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle) per deprecazioni, date di fine supporto e migrazioni. Un identificatore può essere mantenuto come reindirizzamento verso un successore; la sua presenza in questo elenco non garantisce il mantenimento del modello originale.

#### Richiesta

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Risposta

Questo estratto è a scopo illustrativo: gli identificatori e i valori dei metadati, in particolare `max_model_len`, non rappresentano le caratteristiche attuali del servizio. Utilizzate la risposta di `GET /v1/models` per ottenere i valori effettivi.

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

### 400 - Richiesta Non Valida

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

### 429 - Limite di Rate

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
    "message": "Service temporarily unavailable",
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
# Si consiglia di proteggere la chiave API utilizzando variabili d'ambiente.
# Esempio: API_KEY = os.getenv("LLMAAS_API_KEY")
API_KEY = "VOTRE_TOKEN_API" 
BASE_URL = "https://api.ai.cloud-temple.com/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Completazione chat
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
    # Si consiglia di proteggere la chiave API utilizzando variabili d'ambiente.
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
        print() # Nuova riga dopo lo streaming
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

### JavaScript con Fetch (Node.js lato server)

Eseguite questo esempio lato server con Node.js dotato di `fetch` nativo. Definite `LLMAAS_API_KEY` nell'ambiente del server. Per un'interfaccia web, il browser chiama il vostro backend, che autentica l'utente e ne controlla i diritti prima di chiamare LLMaaS. La chiave di servizio rimane esclusivamente lato server e non deve essere integrata nel codice inviato al browser.

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
            print("Rate limit atteint, attendre...")
            time.sleep(60)  # Attendre 1 minute
            return safe_api_call(payload)  # Retry
        else:
            print(f"Erreur HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
```

### Ottimizzazione dei Costi

1. **Utilizzate modelli appropriati** : Modelli più piccoli per i test
2. **Limitate max_tokens** : Evitate risposte troppo lunghe
3. **Riutilizzate le conversazioni** : Finestra di contesto efficace
4. **Monitoraggio** : Monitorate il vostro utilizzo nella Console

### Sicurezza

1. **Proteggi il tuo token** : Variabili d'ambiente
2. **Rotazione regolare** : Cambia le tue chiavi periodicamente
3. **Validazione input** : Pulisci i dati degli utenti
4. **Rate limiting client** : Implementa i tuoi limiti

## SDK e Integrazioni

Per le chiamate supportate, configura il SDK OpenAI con l'URL base e la chiave LLMaaS. Consulta l'[ambito di compatibilità](#compatibilità-openai) prima di migrare un'integrazione:

### OpenAI Python SDK

```python
from openai import OpenAI

# Si consiglia di proteggere la chiave API utilizzando variabili d'ambiente.
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

Utilizzate le [versions validées et prérequis LangChain](./tutorials.md#prerequisiti-langchain). Gli esempi seguenti sono stati verificati con risposte LLMaaS simulate.

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

# Configurazione del chat model (compatibile con LLMaaS)
# Si consiglia di proteggere la chiave API utilizzando variabili d'ambiente.
# Esempio: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    max_tokens=200
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

#### Utilizzo degli Embeddings

Utilizzare `OpenAIEmbeddings` con `check_embedding_ctx_length=False` per inviare i testi direttamente, senza pre-tokenizzazione locale. Questa impostazione è [documentata da LangChain](https://reference.langchain.com/python/langchain-openai/embeddings/base/OpenAIEmbeddings). Il parametro `encoding_format="float"`, passato tramite `model_kwargs`, richiede vettori numerici.

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

Questa impostazione disabilita anche la suddivisione automatica dei testi in base alla finestra di contesto da parte di questo client. Suddividere i documenti prima della chiamata e rispettare il limite del modello scelto, come nel [tutorial RAG](./tutorials.md#2-rag-retrieval-augmented-generation-con-lapi-llmaas).

Gli errori dell'API vengono sollevati come eccezioni: non vengono sostituiti da un elenco vuoto. Gestirli a livello di applicazione prima di procedere con l'indicizzazione o la ricerca.

**Validazione:** formato delle richieste confrontato con il contratto e il codice del proxy; invio di testi singoli e in batch, autenticazione, lettura dei vettori e propagazione degli errori HTTP verificati con risposte simulate. Nessuna chiamata di produzione è stata eseguita per questa validazione.

## Supporto

- **Documentazione** : [Guide de démarrage rapide](./quickstart)
- **Catalogo modelli** : [Liste complète](./models)
- **Console** : Gestione e monitoraggio tramite Console Cloud Temple
- **Supporto** : Tramite la Console Cloud Temple