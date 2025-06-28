---
title: Vue d'ensemble
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

## Accès à l'API

L'API est accessible via la Console Cloud Temple. Vous pouvez gérer vos clés API, surveiller votre consommation et configurer vos tiers dans les paramètres de votre compte. La console permet également de visualiser l'usage de vos modèles.

## Authentification

Toutes les requêtes vers l'API LLMaaS doivent inclure un header `Authorization` avec votre clé API au format Bearer token. Si vous utilisez les SDK clients, la clé sera automatiquement incluse dans chaque requête. Si vous intégrez directement avec l'API, vous devez envoyer ce header vous-même.

## Types de contenu

L'API LLMaaS accepte toujours du JSON dans le corps des requêtes et retourne du JSON dans le corps des réponses. Vous devez envoyer le header `content-type: application/json` dans vos requêtes. Si vous utilisez les SDK clients, ceci sera géré automatiquement.

## Headers de réponse

L'API LLMaaS inclut les headers suivants dans chaque réponse :

- `id` : Un identifiant globalement unique pour la requête
- `backend` : Informations sur l'infrastructure utilisée (engine_type, machine_name)

## Exemples

### Requête cURL
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user", 
        "content": "Salut ! Peux-tu te présenter en français ?"
      }
    ],
    "max_tokens": 200,
    "temperature": 0.7
  }'
```

### Réponse
```json
{
  "backend": {
    "engine_type": "engo",
    "machine_name": "ma02"
  },
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "Bonjour ! Je suis un modèle de langage virtuel...",
        "role": "assistant"
      }
    }
  ],
  "created": 1749110753,
  "id": "chatcmpl-ollama-14b812ef-b21f-430c-b93c-d0d1bf653806",
  "model": "granite3.3:8b",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 200,
    "prompt_tokens": 70,
    "reasoning_tokens": 0,
    "total_tokens": 270
  }
}
```

### Paramètres disponibles

| Paramètre     | Type    | Description                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | Le modèle à utiliser (voir [catalogue des modèles](./models)) |
| `messages`    | array   | Liste des messages de la conversation                         |
| `max_tokens`  | integer | Nombre maximum de tokens à générer                            |
| `temperature` | float   | Contrôle la créativité (0.0-2.0)                              |
| `top_p`       | float   | Contrôle la diversité des réponses                            |
| `stream`      | boolean | Active le streaming de la réponse                             |
| `user`        | string  | Identifiant unique de l'utilisateur final                     |

## URL de base

L'URL de base pour toutes les requêtes API est :
```
https://api.ai.cloud-temple.com/v1/
```

## Endpoints disponibles

- `/chat/completions` : Génération de réponses conversationnelles
- `/completions` : Complétion de texte simple
- `/models` : Liste des modèles disponibles

### Exemple : Liste des modèles

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Réponse** :
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
      "parent": null,
      "max_model_len": 60000,
      "permission": [
        {
          "id": "modelperm-granite3.3:8b-1749110897",
          "object": "model_permission",
          "created": 1749110897,
          "allow_create_engine": false,
          "allow_sampling": true,
          "allow_logprobs": true,
          "allow_search_indices": false,
          "allow_view": true,
          "allow_fine_tuning": false,
          "organization": "*",
          "group": null,
          "is_blocking": false
        }
      ]
    }
  ]
}
```

La réponse contient tous les modèles disponibles avec leurs spécifications et permissions.
