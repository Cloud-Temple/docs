---
title: Documentation API
sidebar_position: 2
---

# Documentation API LLMaaS

## URL de Base

```
https://api.ai.cloud-temple.com/v1
```

## Authentification

Toutes les requêtes nécessitent un header `Authorization` avec votre token API :

```
Authorization: Bearer VOTRE_TOKEN_API
```

## Rate Limiting et Facturation

### Système de Tiers par Montant

| Tier | Crédit d'Achat | Limite Mensuelle | Tokens Output/Heure | Tokens Output/Jour | Description |
|------|----------------|-------------------|---------------------|--------------------|-----------| 
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Utilisation standard |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Usage professionnel |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Volume élevé |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Entreprise |
| **Facturation Mensuelle** | N/A | Illimitée | Priorité élevée | Priorité élevée | Contact commercial |

**Note** : Limites calculées sur les tokens de sortie. Les tokens d'entrée ont des limites proportionnellement plus élevées.

### Headers de Limite

Les réponses incluent des headers informatifs :

```
X-RateLimit-Limit-Requests: 1000
X-RateLimit-Remaining-Requests: 999
X-RateLimit-Reset-Requests: 1640995200
```

### Erreur 429 - Limite Atteinte

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

## Endpoints

### POST /v1/chat/completions

Génère des réponses conversationnelles.

#### Requête

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

#### Paramètres

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID du modèle (voir [catalogue](./models)) |
| `messages` | array | ✅ | Conversation (role: system/user/assistant) |
| `stream` | boolean | ❌ | Active le streaming (défaut: false) |
| `temperature` | float | ❌ | Créativité 0.0-2.0 (défaut: 0.7) |
| `max_tokens` | integer | ❌ | Limite de tokens (défaut: 1024) |
| `top_p` | float | ❌ | Échantillonnage nucleus 0.0-1.0 (défaut: 1.0) |
| `presence_penalty` | float | ❌ | Pénalité présence -2.0 à 2.0 (défaut: 0) |
| `frequency_penalty` | float | ❌ | Pénalité fréquence -2.0 à 2.0 (défaut: 0) |
| `user` | string | ❌ | ID utilisateur unique |

#### Réponse Standard

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

#### Streaming (SSE)

Avec `"stream": true`, la réponse arrive token par token :

**Headers de réponse :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Format des événements :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"granite3.3:8b","object":"chat.completion.chunk"}

data: [DONE]
```

**Structure des chunks :**
- `choices[].delta.content` : Contenu incrémental
- `finish_reason` : `null` pendant le streaming, puis `"stop"`
- Signal de fin : `data: [DONE]`

### POST /v1/completions

:::warning
**Note** : L'endpoint `/v1/completions` utilise le même format que `/v1/chat/completions` avec des messages. 
Pour la complétion de texte simple, utilisez un message user avec votre prompt.
:::

Complétions de texte via format chat.

#### Requête

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

#### Paramètres

Identiques à `/v1/chat/completions` - voir section précédente.

#### Réponse

Format identique à `/v1/chat/completions`.

### POST /v1/audio/transcriptions

Transcription audio vers texte (Whisper).

#### Requête

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "file=@audio.wav" \
  -F "language=fr" \
  -F "response_format=json"
```

#### Paramètres

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `file` | binary | ✅ | Fichier audio (wav, mp3, m4a) |
| `language` | string | ❌ | Code langue ISO 639-1 (ex: "fr") |
| `prompt` | string | ❌ | Contexte pour améliorer transcription |
| `response_format` | string | ❌ | json, text, srt, vtt (défaut: json) |
| `temperature` | float | ❌ | Créativité transcription (défaut: 0) |

#### Réponse

```json
{
  "text": "Bonjour, ceci est un test de transcription audio."
}
```

### GET /v1/models

Liste des modèles disponibles.

#### Requête

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Réponse

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

## Codes d'Erreur

### 400 - Requête Invalide

```json
{
  "error": {
    "message": "Invalid parameter 'temperature': must be between 0 and 2",
    "type": "invalid_request_error",
    "param": "temperature"
  }
}
```

### 401 - Non Autorisé

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "authentication_error"
  }
}
```

### 404 - Modèle Non Trouvé

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

### 429 - Limite de Débit

```json
{
  "error": {
    "message": "Rate limit exceeded. Please upgrade your tier or try again later.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

### 500 - Erreur Serveur

```json
{
  "error": {
    "message": "Internal server error",
    "type": "server_error"
  }
}
```

### 503 - Service Indisponible

```json
{
  "error": {
    "message": "Service temporarily unavailable",
    "type": "service_unavailable_error"
  }
}
```

## Exemples par Langage

### Python avec requests

```python
import requests
import json

# Configuration
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

### Python avec Streaming

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
                data = line[6:]  # Enlever 'data: '
                if data == '[DONE]':
                    break
                try:
                    chunk = json.loads(data)
                    content = chunk['choices'][0]['delta'].get('content', '')
                    if content:
                        print(content, end='', flush=True)
                except json.JSONDecodeError:
                    continue

# Utilisation
stream_chat("Expliquez la physique quantique")
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
        console.error('Erreur:', error.response?.data || error.message);
    }
}

// Utilisation
chatCompletion('Bonjour !').then(response => {
    console.log(response);
});
```

### JavaScript avec Fetch (Browser)

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

## Bonnes Pratiques

### Gestion des Erreurs

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

### Optimisation des Coûts

1. **Utilisez des modèles appropriés** : Modèles plus petits pour tests
2. **Limitez max_tokens** : Évitez les réponses trop longues
3. **Réutilisez les conversations** : Context window efficace
4. **Monitoring** : Suivez votre usage dans la Console

### Sécurité

1. **Protégez votre token** : Variables d'environnement
2. **Rotation régulière** : Changez vos clés périodiquement
3. **Validation input** : Nettoyez les données utilisateur
4. **Rate limiting client** : Implémentez vos propres limites

## SDK et Intégrations

L'API LLMaaS est compatible avec les SDK OpenAI existants en modifiant l'URL de base :

### OpenAI Python SDK

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

# Configuration du chat model (compatible avec LLMaaS)
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    max_tokens=200
)

# Utilisation avec messages
messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
response = chat.invoke(messages)
print(response.content)

# Ou avec une simple chaîne
response = chat.invoke("Bonjour, comment ça va ?")
print(response.content)
```

## Support

- **Documentation** : [Guide de démarrage rapide](./quickstart)
- **Catalogue modèles** : [Liste complète](./models)
- **Console** : Gestion et monitoring via Console Cloud Temple
- **Support** : Via la Console Cloud Temple
