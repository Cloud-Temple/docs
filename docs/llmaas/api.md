---
title: Documentation API
sidebar_position: 2
---

# Documentation API LLMaaS

## Compatibilité OpenAI

L’API LLMaaS est compatible OpenAI pour les appels documentés dans cette référence. Configurez l’URL de base `https://api.ai.cloud-temple.com/v1` et votre clé LLMaaS dans le client, puis vérifiez les capacités du modèle et les paramètres de l’endpoint utilisé.

La compatibilité ne couvre pas l’ensemble des fonctionnalités OpenAI. Les différences documentées comprennent notamment :

- **Complétions** : `/v1/completions` attend un tableau `messages`, comme le chat ; voir le [format de complétion](#post-v1completions).
- **Embeddings** : les entrées doivent être du texte ; voir les [formats acceptés](#post-v1embeddings).
- **Transcription audio** : les formats de réponse `text`, `srt` et `vtt` ne sont pas pris en charge ; voir les [paramètres de transcription](#post-v1audiotranscriptions).
- **Batch** : le service utilise un [contrat spécifique](./batch.md), avec soumission directe des conversations en JSON sur `/v1/chat/completions/batch`.


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

| Tier                      | Crédit d'Achat | Limite Mensuelle | Tokens Output/Heure | Tokens Output/Jour | Description          |
| ------------------------- | -------------- | ---------------- | ------------------- | ------------------ | -------------------- |
| **Tier 1**                | 200 €          | 1 000 €          | 150 000             | 3 600 000          | Utilisation standard |
| **Tier 2**                | 500 €          | 3 000 €          | 300 000             | 7 200 000          | Usage professionnel  |
| **Tier 3**                | 1 000 €        | 5 000 €          | 450 000             | 10 800 000         | Volume élevé         |
| **Tier 4**                | 4 000 €        | 10 000 €         | 600 000             | 14 400 000         | Entreprise           |
| **Facturation Mensuelle** | N/A            | Illimitée        | Priorité élevée     | Priorité élevée    | Contact commercial   |

**Note** : Les limites de débit sont calculées sur la base des tokens de sortie. La tarification varie selon l'usage :

| Type d'usage                           | Tarif                                            |
| -------------------------------------- | ------------------------------------------------ |
| **Tokens d'entrée**                    | 1.8 € / million                                  |
| **Tokens de sortie (chat/completion)** | 8.00 € / million                                 |
| **Tokens de raisonnement**             | 8.00 € / million                                 |
| **Reranking**                          | 4,00 € / million de documents traités              |
| **Batch asynchrone (entrée)**          | 0.9 € / million (−50% vs standard)               |
| **Batch asynchrone (sortie)**          | 4.00 € / million (−50% vs standard)              |
| **Transcription Audio**                | 0.01 € / minute (toute minute commencée est due) |

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

| Paramètre           | Type          | Obligatoire | Description                                                                                                                  |
| ------------------- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`             | string        | ✅          | ID du modèle (voir [catalogue](./models))                                                                                    |
| `messages`          | array         | ✅          | Conversation (role: system/user/assistant)                                                                                   |
| `stream`            | boolean       | ❌          | Active le streaming (défaut: false)                                                                                          |
| `temperature`       | float         | ❌          | Créativité 0.0-2.0 (défaut: 0.7)                                                                                             |
| `max_tokens`        | integer       | ❌          | Limite de tokens (défaut: 1024)                                                                                              |
| `top_p`             | float         | ❌          | Échantillonnage nucleus 0.0-1.0 (défaut: 1.0)                                                                                |
| `presence_penalty`  | float         | ❌          | Pénalité présence -2.0 à 2.0 (défaut: 0)                                                                                     |
| `frequency_penalty` | float         | ❌          | Pénalité fréquence -2.0 à 2.0 (défaut: 0)                                                                                    |
| `user`              | string        | ❌          | ID utilisateur unique                                                                                                        |
| `tools`             | array         | ❌          | Liste des outils que le modèle peut appeler.                                                                                 |
| `tool_choice`       | string/object | ❌          | Contrôle si le modèle doit appeler un outil. "none", "auto", ou `{"type": "function", "function": {"name": "my_function"}}`. |

#### Réponse Standard

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

#### Réponse avec Appel d'Outils

Si le modèle décide d'appeler un outil, la réponse aura un `finish_reason` de `tool_calls` et le message contiendra un tableau `tool_calls`.

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

Après avoir reçu une réponse `tool_calls`, vous devez exécuter l'outil de votre côté, puis renvoyer le résultat au modèle en utilisant un message avec le `role: "tool"`.

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

Avec `"stream": true`, la réponse arrive token par token :

**Headers de réponse :**
```
Content-Type: text/event-stream
Cache-Control: no-cache
```

**Format des événements :**
```
data: {"choices":[{"delta":{"content":"La"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":" photo"},"finish_reason":null,"index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0}],"created":1749114814,"id":"chatcmpl-bc52de347f2e4068b7bde380c0f8db37","model":"gpt-oss:120b","object":"chat.completion.chunk"}

data: [DONE]
```

**Structure des chunks :**
- `choices[].delta.content` : Contenu incrémental
- `finish_reason` : `null` pendant le streaming, puis `"stop"`
- Signal de fin : `data: [DONE]`

### Requêtes Multimodales (Vision)

Pour analyser des images, vous pouvez envoyer une requête où le champ `content` d'un message utilisateur est un tableau (array) contenant à la fois du texte et des images.

Le format pour une image est un objet avec `type: "image_url"` et un champ `image_url` contenant l'URL de l'image au format `data URI` (base64).

:::info[Note de Compatibilité]
Bien que le format standard et recommandé soit `{"type": "image_url", "image_url": {"url": "data:..."}}`, l'API supporte également par souci de flexibilité un format simplifié `{"type": "image", "image": "data:..."}`. Il est cependant conseillé d'utiliser le format `image_url` standard pour une meilleure compatibilité avec l'écosystème OpenAI.
:::

:::tip[OCR et Analyse de Documents]
Pour des tâches spécifiques d'analyse de documents (PDF, scans, tableaux), nous recommandons l'utilisation du modèle spécialisé **DeepSeek-OCR**. Voir la [documentation dédiée](./ocr).
:::

#### Exemple de Requête Vision

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

| Paramètre         | Type   | Obligatoire | Description                                                                                                        |
| ----------------- | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `file`            | binary | ✅          | Fichier audio (wav, mp3, m4a).                                                                                     |
| `language`        | string | ❌          | Code langue ISO 639-1 (ex: "fr"). Détection automatique si non fourni.                                             |
| `initial_prompt`  | string | ❌          | Contexte ou mots spécifiques pour améliorer la précision de la transcription.                                      |
| `task`            | string | ❌          | Tâche à effectuer : `transcribe` (défaut) ou `translate` (traduire en anglais).                                    |
| `response_format` | string | ❌          | `json` (défaut, équivalent à `verbose_json`). Les formats `text`, `srt`, `vtt` ne sont pas supportés actuellement. |

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

| Paramètre | Type                       | Obligatoire | Description                                           |
| --------- | -------------------------- | ----------- | ----------------------------------------------------- |
| `model`   | string                     | ✅          | ID du modèle d'embedding (voir [catalogue](./models)) |
| `input`   | string or array of strings | ✅          | Le texte ou la liste de textes à vectoriser.          |

#### Réponse

Extrait abrégé : les points de suspension représentent les autres composantes du vecteur. Ce bloc illustre la structure de la réponse et ne constitue pas un document JSON directement copiable.

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

Réordonne une liste de documents par pertinence par rapport à une requête. Compatible avec l'API Cohere (v1 et v2).

**Facturation** : 4,00 € par million de documents traités. Tous les documents soumis sont comptés, même si `top_n` limite le nombre de résultats retournés. Voir le [détail du calcul](./rerank.md#tarification).

#### Requête

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

#### Paramètres

| Paramètre   | Type    | Obligatoire | Description                                                                 |
| ----------- | ------- | ----------- | --------------------------------------------------------------------------- |
| `model`     | string  | ✅          | ID du modèle de reranking (voir [catalogue](./models#modèles-de-reranking)) |
| `query`     | string  | ✅          | La requête de recherche                                                     |
| `documents` | array   | ✅          | Liste des documents à réordonner                                            |
| `top_n`     | integer | ❌          | Nombre de résultats à retourner (défaut : tous)                             |

#### Réponse

Extrait illustratif du format Jina/vLLM décrit par le contrat de la plateforme. Les scores et compteurs ci-dessous sont fictifs. Le proxy transmet la réponse du moteur et ajoute un bloc `backend`, omis ici.

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

Les `relevance_score` sont des scores bruts non normalisés, pas des probabilités entre 0 et 1. Utilisez leur ordre relatif ; tout seuil doit être [calibré sur votre modèle et votre corpus](./rerank.md#seuil-de-pertinence). Les compteurs `usage.prompt_tokens` et `usage.total_tokens` sont distincts de la facturation par document traité ; aucun champ `usage.billed_units.search_units` n’est requis pour calculer cette dernière.

L'endpoint `/v2/rerank` (Cohere SDK v2) est également disponible avec le même format de requête.

#### Exemple Python (SDK Cohere)

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

Soumet plusieurs conversations indépendantes avec un modèle commun pour un traitement asynchrone. Le champ `messages` est un tableau de conversations. La réponse HTTP 202 contient l'identifiant du lot.

Utilisez `GET /v1/chat/completions/batch/{id}` avec la même clé API pour suivre le traitement et récupérer les résultats. Consultez le [guide Batch](./batch.md) pour le format, les limites et un exemple complet.

### GET /v1/models

Liste des identifiants de modèles exposés par l'API. Utilisez cette réponse pour renseigner le paramètre `model`.

Consultez aussi le [cycle de vie des modèles](https://llmaas.status.cloud-temple.app/lifecycle) pour les dépréciations, dates de fin de support et migrations. Un identifiant peut être conservé comme redirection vers un successeur ; sa présence dans cette liste ne garantit pas le maintien du modèle d'origine.

#### Requête

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

#### Réponse

Cet extrait est illustratif : les identifiants et les valeurs de métadonnées, notamment `max_model_len`, ne constituent pas les caractéristiques actuelles du service. Utilisez la réponse de `GET /v1/models` pour obtenir les valeurs effectives.

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

def stream_chat(message, model="gpt-oss:120b"):
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

### JavaScript avec Fetch (Node.js côté serveur)

Exécutez cet exemple côté serveur avec Node.js disposant de `fetch` natif. Définissez `LLMAAS_API_KEY` dans l'environnement du serveur. Pour une interface web, le navigateur appelle votre backend, qui authentifie l'utilisateur et contrôle ses droits avant d'appeler LLMaaS. La clé de service reste exclusivement côté serveur et ne doit pas être intégrée au code envoyé au navigateur.

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

Pour les appels pris en charge, configurez le SDK OpenAI avec l’URL de base et la clé LLMaaS. Consultez la [portée de la compatibilité](#compatibilité-openai) avant de migrer une intégration :

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
        model="gpt-oss:120b",
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

Utilisez les [versions validées et prérequis LangChain](./tutorials.md#prérequis-langchain). Les exemples ci-dessous ont été vérifiés avec des réponses LLMaaS simulées.

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

# Configuration du chat model (compatible avec LLMaaS)
# Il est recommandé de protéger votre clé API en utilisant des variables d'environnement.
# Exemple: api_key=os.getenv("LLMAAS_API_KEY")
chat = ChatOpenAI(
    api_key="VOTRE_TOKEN_API",
    base_url="https://api.ai.cloud-temple.com/v1",
    model="gpt-oss:120b",
    max_tokens=200
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

Utilisez `OpenAIEmbeddings` avec `check_embedding_ctx_length=False` pour envoyer les textes directement, sans pré-tokenisation locale. Ce réglage est [documenté par LangChain](https://reference.langchain.com/python/langchain-openai/embeddings/base/OpenAIEmbeddings). Le paramètre `encoding_format="float"`, transmis via `model_kwargs`, demande des vecteurs numériques.

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

Ce réglage désactive aussi le découpage automatique des textes selon la fenêtre de contexte par ce client. Découpez les documents avant l’appel et respectez la limite du modèle choisi, comme dans le [tutoriel RAG](./tutorials.md#2-rag-retrieval-augmented-generation-avec-lapi-llmaas).

Les erreurs de l’API remontent sous forme d’exceptions : elles ne sont pas remplacées par une liste vide. Traitez-les au niveau de votre application avant de poursuivre l’indexation ou la recherche.

**Validation :** format des requêtes comparé au contrat et au code du proxy ; envoi de textes seuls et en lots, authentification, lecture des vecteurs et propagation des erreurs HTTP vérifiés avec des réponses simulées. Aucun appel de production n’a été effectué pour cette validation.

## Support

- **Documentation** : [Guide de démarrage rapide](./quickstart)
- **Catalogue modèles** : [Liste complète](./models)
- **Console** : Gestion et monitoring via Console Cloud Temple
- **Support** : Via la Console Cloud Temple
