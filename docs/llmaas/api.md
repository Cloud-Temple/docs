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

### Le Principe des Tiers : Palier d'Accès, Budget et Capacité

Notre système de tiers est conçu comme des **enveloppes de service complètes** qui définissent trois aspects clés de votre utilisation :

1.  **Un Palier d'Accès (Crédit d'Achat)** : Pour les Tiers 1 à 4, il s'agit d'un montant à régler de manière anticipée (upfront) pour activer le service et débloquer les capacités techniques et budgétaires du palier choisi.
2.  **Une Limite de Budget Mensuel** : C'est le plafond de votre consommation mensuelle, vous assurant une maîtrise totale de vos coûts.
3.  **Une Capacité Technique** : Ce sont les limites de débit (tokens par jour et par heure) qui garantissent une performance stable et prévisible pour votre volume d'appels.

Le choix d'un tier est donc un équilibre entre l'investissement initial, le budget mensuel prévisionnel et la capacité technique requise. Votre consommation au sein de cette enveloppe est ensuite facturée selon les tarifs en vigueur.

### Tableau des Tiers

| Tier | Crédit d'Achat | Limite Mensuelle | Tokens Output/Heure | Tokens Output/Jour | Description |
|------|----------------|-------------------|---------------------|--------------------|-----------| 
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Utilisation standard |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Usage professionnel |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Volume élevé |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Entreprise |
| **Facturation Mensuelle** | N/A | Illimitée | Priorité élevée | Priorité élevée | Contact commercial |

**Note** : Les limites de débit sont calculées sur la base des tokens de sortie. La tarification des tokens varie selon l'usage :
- **Tokens d'entrée** : 0.90 € / million
- **Tokens de sortie (standard)** : 4.00 € / million
- **Tokens de sortie (raisonneur)** : 21.00 € / million (s'applique aux modèles les plus avancés pour les tâches complexes de type agent ou raisonnement)

#### **Facturation Audio**
- **Transcription Audio** : 0.01 € / minute (toute minute commencée est due)

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
| `tools` | array | ❌ | Liste des outils que le modèle peut appeler. |
| `tool_choice`| string/object | ❌ | Contrôle si le modèle doit appeler un outil. "none", "auto", ou `{"type": "function", "function": {"name": "my_function"}}`. |

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

#### Réponse avec Appel d'Outils

Si le modèle décide d'appeler un outil, la réponse aura un `finish_reason` de `tool_calls` et le message contiendra un tableau `tool_calls`.

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

Après avoir reçu une réponse `tool_calls`, vous devez exécuter l'outil de votre côté, puis renvoyer le résultat au modèle en utilisant un message avec le `role: "tool"`.

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

### Requêtes Multimodales (Vision)

Pour analyser des images, vous pouvez envoyer une requête où le champ `content` d'un message utilisateur est un tableau (array) contenant à la fois du texte et des images.

Le format pour une image est un objet avec `type: "image_url"` et un champ `image_url` contenant l'URL de l'image au format `data URI` (base64).

:::info Note de Compatibilité
Bien que le format standard et recommandé soit `{"type": "image_url", "image_url": {"url": "data:..."}}`, l'API supporte également par souci de flexibilité un format simplifié `{"type": "image", "image": "data:..."}`. Il est cependant conseillé d'utiliser le format `image_url` standard pour une meilleure compatibilité avec l'écosystème OpenAI.
:::

:::tip OCR et Analyse de Documents
Pour des tâches spécifiques d'analyse de documents (PDF, scans, tableaux), nous recommandons l'utilisation du modèle spécialisé **DeepSeek-OCR**. Voir la [documentation dédiée](./ocr).
:::

#### Exemple de Requête Vision

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
| `file` | binary | ✅ | Fichier audio (wav, mp3, m4a). |
| `language` | string | ❌ | Code langue ISO 639-1 (ex: "fr"). Détection automatique si non fourni. |
| `initial_prompt` | string | ❌ | Contexte ou mots spécifiques pour améliorer la précision de la transcription. |
| `task` | string | ❌ | Tâche à effectuer : `transcribe` (défaut) ou `translate` (traduire en anglais). |
| `response_format` | string | ❌ | `json` (défaut, équivalent à `verbose_json`). Les formats `text`, `srt`, `vtt` ne sont pas supportés actuellement. |

#### Réponse (`json`)

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

Crée un vecteur d'embedding représentant le texte d'entrée.

#### Requête

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "granite-embedding:278m",
    "input": "Le texte à vectoriser"
  }'
```

#### Paramètres

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID du modèle d'embedding (voir [catalogue](./models)) |
| `input` | string or array of strings | ✅ | Le texte ou la liste de textes à vectoriser. |

#### Réponse

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
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: API_KEY = os.getenv("LLMAAS_API_KEY")
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

try:
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=headers,
        json=payload,
        timeout=30 # Ajout d'un timeout pour la requête
    )
    
    response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)
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

### Python avec Streaming

```python
import requests
import json

def stream_chat(message, model="granite3.3:8b"):
    # Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
    # Exemple: API_KEY = os.getenv("LLMAAS_API_KEY")
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
            timeout=30 # Ajout d'un timeout pour la requête
        )
        
        response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)
        
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
                        print(f"Erreur de décodage JSON dans le stream: {data}")
                        continue
        print() # Nouvelle ligne après le stream
    except requests.exceptions.HTTPError as e:
        print(f"Erreur HTTP: {e.response.status_code} - {e.response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau: {e}")
    except Exception as e:
        print(f"Une erreur inattendue est survenue: {e}")

# Utilisation
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

# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
client = OpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1"
)

try:
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Bonjour !"}
        ],
        max_tokens=50 # Ajout de max_tokens pour cohérence avec les tests
    )
    
    print(response.choices[0].message.content)

except Exception as e:
    print(f"Erreur OpenAI SDK: {e}")
```

### LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Configuration du chat model (compatible avec LLMaaS)
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="granite3.3:8b",
    # Note: Les paramètres comme max_tokens sont passés via model_kwargs
    # pour assurer la compatibilité entre les versions de LangChain.
    model_kwargs={"max_tokens": 200}
)

try:
    # Utilisation avec messages
    messages = [HumanMessage(content="Expliquez l'IA en 3 phrases")]
    response = chat.invoke(messages)
    print(response.content)

    # Ou avec une simple chaîne
    response = chat.invoke("Bonjour, comment ça va ?")
    print(response.content)

except Exception as e:
    print(f"Erreur LangChain: {e}")
```

#### Utilisation des Embeddings

:::warning Incompatibilité avec les clients LangChain standards
Actuellement, l'utilisation de l'endpoint d'embedding via les classes standards de LangChain (`langchain_openai.OpenAIEmbeddings` ou `langchain_community.OllamaEmbeddings`) présente des incompatibilités avec notre API.

- `OpenAIEmbeddings` envoie des tokens pré-calculés au lieu de texte brut, ce qui est rejeté.
- `OllamaEmbeddings` ne gère pas l'authentification par Bearer Token requise.

En attendant une solution pérenne, il est recommandé de créer une classe d'embedding personnalisée ou d'appeler l'API directement, comme démontré dans l'exemple `exemples/simple-rag-demo`.
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
                # Trier les embeddings par leur index pour garantir l'ordre
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

# Utilisation
# embeddings = LLMaaSEmbeddings(
#     api_key="VOTRE_TOKEN_API",
#     base_url="https://api.ai.cloud-temple.com/v1",
#     model_name="granite-embedding:278m"
# )
# vector = embeddings.embed_query("Mon texte à vectoriser")
```

## Support

- **Documentation** : [Guide de démarrage rapide](./quickstart)
- **Catalogue modèles** : [Liste complète](./models)
- **Console** : Gestion et monitoring via Console Cloud Temple
- **Support** : Via la Console Cloud Temple
