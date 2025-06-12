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

## Limitazione delle Richieste e Fatturazione

### Sistema di Fasce per Importo

| Fascia | Acquisto di credito | Limite Mensile | Tokens Output/Ora | Tokens Output/Giorno | Descrizione |
|------|----------------|-------------------|---------------------|--------------------|-----------| 
| **Fascia 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Utilizzo standard |
| **Fascia 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Utilizzo professionale |
| **Fascia 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Volume elevato |
| **Fascia 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Aziendale |
| **Fatturazione Mensile** | N/A | Illimitata | Priorità elevata | Priorità elevata | Contatto commerciale |

**Nota** : Limiti calcolati sui tokens di output (4€/milione). I tokens di input (0.9€/milione) hanno limiti proporzionalmente più elevati.

### Headers di Limitazione

Le risposte includono headers informativi :

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Errore 429 - Limite Raggiunto

```json
{
  "error": {
    "message": "Limite delle richieste superato. Si prega di aggiornare la propria fascia o provare nuovamente in seguito.",
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
| `stream` | boolean | ❌ | Attiva il streaming (predefinito: false) |
| `temperature` | float | ❌ | Creatività 0.0-2.0 (predefinito: 0.7) |
| `max_tokens` | integer | ❌ | Limite di tokens (predefinito: 1024) |
| `top_p` | float | ❌ | Campionamento nucleus 0.0-1.0 (predefinito: 1.0) |
| `presence_penalty` | float | ❌ | Penalità presenza -2.0 a 2.0 (predefinito: 0) |
| `frequency_penalty` | float | ❌ | Penalità frequenza -2.0 a 2.0 (predefinito: 0) |
| `user` | string | ❌ | ID utente univoco |

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

#### Streaming (SSE)

Con `"stream": true`, la risposta arriva token per token :

**Headers di risposta :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Formato degli eventi :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" foto"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Struttura dei chunk :**
- `choices[].delta.content` : Contenuto incrementale
- `finish_reason` : `null` durante lo streaming, poi `"stop"`
- Segnale di fine : `data: [DONE]`

### POST /v1/completions

:::warning
**Nota** : L'endpoint `/v1/completions` utilizza lo stesso formato di `/v1/chat/completions` con i messaggi. 
Per la completione di testo semplice, utilizza un messaggio user con il tuo prompt.
:::

Completamenti di testo tramite formato chat.

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
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Parametri

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|-------------|-------------|
| `file` | binary | ✅ | File audio (wav, mp3, m4a) |
| `language` | string | ❌ | Codice lingua ISO 639-1 (es: "fr") |
| `prompt` | string | ❌ | Contesto per migliorare la trascrizione |
| `response_format` | string | ❌ | json, testo, srt, vtt (predefinito: json) |
| `temperature` | float | ❌ | Creatività trascrizione (predefinito: 0) |

#### Risposta

```json
{
  "text": "Bonjour, ceci est un test de transcription audio."
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

## Codici di Errore

### 400 - Richiesta Non Valida

```json
{
  "error": {
    "message": "Parametro 'temperature' non valido: deve essere compreso tra 0 e 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Non Autorizzato

```json
{
  "error": {
    "message": "Chiave API fornita non valida",
    "type": "authentication_error"
  }
}
```

### 404 - Modello Non Trovato

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

### 429 - Limite di Richieste

```json
{
  "error": {
    "message": "Limite delle richieste superato. Si prega di aggiornare la propria fascia o provare nuovamente in seguito.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Errore Server

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
    "message": "Servizio temporaneamente non disponibile",
    "type": "service_unavailable_error"
  }
}
```

## Esempi per Lingua

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

# Chat completion
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {"role": "user", "content": "Ciao!"}
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

# Utilizzo
stream_chat("Spiega la fisica quantistica")
```

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
                max_tokens: 200
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(`Errore ${error.response.status}:`, error.response.data);
    }
}

// Esempio di utilizzo
chatCompletion("Qual è la velocità della luce?");
```

### JavaScript/Node.js con async/await

```javascript
const axios = require('axios');

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
        console.error('Errore:', error.response?.data || error.message);
    }
}

// Utilizzo
chatCompletion('Ciao!').then(response => {
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

## Buone pratiche

### Gestione degli errori

```python
def chiamata_api_sicura(payload):
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 429:
            print("Limite di velocità raggiunto, attendere...")
            time.sleep(60)  # Attendere 1 minuto
            return chiamata_api_sicura(payload)  # Riprovare
        else:
            print(f"Errore HTTP: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Errore di rete: {e}")
```

### Ottimizzazione dei costi

1. **Utilizza modelli appropriati** : Modelli più piccoli per i test
2. **Limita max_tokens** : Evita risposte troppo lunghe
3. **Riutilizza le conversazioni** : Finestra di contesto efficiente
4. **Monitoraggio** : Segui il tuo utilizzo nella Console

### Sicurezza

1. **Proteggi il tuo token** : Variabili d'ambiente
2. **Rotazione periodica** : Cambia le tue chiavi regolarmente
3. **Validazione input** : Pulisci i dati degli utenti
4. **Limitazione velocità client** : Implementa le tue proprie limitazioni

## SDK e integrazioni

L'API LLMaaS è compatibile con i SDK OpenAI esistenti modificando l'URL di base:

### OpenAI Python SDK

```python
from openai import OpenAI

client = OpenAI(
    api_key="LA_TUA_CHIAVE_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

response = client.chat.completions.create(
    model="granite3.3:8b",
    messages=[
        {"role": "user", "content": "Ciao!"}
    ]
)

print(response.choices[0].message.content)
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configurazione del modello di chat (compatibile con LLMaaS)
chat = ChatOpenAI(
    api_key="LA_TUA_CHIAVE_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Utilizzo con messaggi
messages = [HumanMessage(content="Spiega l'IA in 3 frasi")]
response = chat.invoke(messages)
print(response.content)

# Oppure con una semplice stringa
response = chat.invoke("Ciao, come va?")
print(response.content)
```

## Supporto

- **Documentazione** : [Guida di avvio rapido](./quickstart)
- **Catalogo modelli** : [Elenco completo](./models)
- **Console** : Gestione e monitoraggio tramite Console Cloud Temple
- **Supporto** : Attraverso la Console Cloud Temple
