---
title: Vue d'ensemble
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

LLMaaS donne accès aux modèles d'IA hébergés par Cloud Temple via une API : assistants conversationnels, programmation et agents, analyse d'images, recherche sémantique, reranking, traduction et usages audio/image.

## Catalogue, nouveautés et disponibilité

- **[Catalogue et cycle de vie des modèles](https://llmaas.status.cloud-temple.app/lifecycle)** : modèles, contexte, statuts LTS, fins de support et migrations conseillées.
- **[Nouveautés LLMaaS](https://llmaas.status.cloud-temple.app/changelog)** : ajouts de modèles, évolutions du service et annonces de redirection.
- **[État du service](https://llmaas.status.cloud-temple.app/)** et **[historique](https://llmaas.status.cloud-temple.app/history)** : disponibilité et performances observées.

Pour démarrer, suivez le [guide de démarrage](./quickstart.md). Pour choisir un modèle, consultez le [guide du catalogue](./models.md).

## Fonctionnalités

| Usage | Guide |
|-------|-------|
| Génération de texte, streaming, appels d'outils et vision | [API LLMaaS](./api.md) |
| Recherche augmentée par génération | [Comprendre le RAG](./rag_explained.md) |
| Classement des documents par pertinence | [Reranking](./rerank.md) |
| Traitement asynchrone de lots de requêtes | [Batch](./batch.md) |
| Changement de modèle et gestion des anciens identifiants | [Cycle de vie et migration](./concepts.md#migration-vers-un-autre-modèle) |

Les optimisations d'inférence, dont la prédiction de plusieurs tokens (*MTP*) annoncée dans le changelog, sont réalisées côté service. Évaluez leurs effets sur vos propres requêtes à partir des mesures de supervision.

## Accès à l'API

L'API est accessible via la Console Cloud Temple. Vous pouvez gérer vos clés API, surveiller votre consommation et configurer vos tiers dans les paramètres de votre compte. La console permet également de visualiser l'usage de vos modèles.

## Authentification

Toutes les requêtes vers l'API LLMaaS doivent inclure un header `Authorization` avec votre clé API au format Bearer token. Si vous utilisez les SDK clients, la clé sera automatiquement incluse dans chaque requête. Si vous intégrez directement avec l'API, vous devez envoyer ce header vous-même.

## Types de contenu

Les requêtes de génération de texte utilisent du JSON avec le header `Content-Type: application/json`. Le streaming renvoie des événements SSE et la transcription de fichiers audio utilise `multipart/form-data`. Consultez la [documentation API](./api.md) pour le format de chaque endpoint.

## Métadonnées des réponses

Selon l’endpoint, le corps JSON de la réponse peut contenir les champs suivants :

- `id` : Identifiant de la réponse.
- `backend` : Informations sur le moteur et l’instance ayant traité la requête (`engine_type`, `machine_name`).

Ces champs se lisent dans le corps JSON, pas dans les en-têtes HTTP. Consultez la [référence API](./api.md) pour le format et les champs documentés de chaque endpoint.

## Exemples

### Requête cURL
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-oss:120b",
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
  "model": "gpt-oss:120b",
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
| `model`       | string  | Le modèle à utiliser (voir [catalogue des modèles](./models.md)) |
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
- `/chat/completions/batch` : Traitement asynchrone de plusieurs conversations ([guide Batch](./batch.md))
- `/completions` : Complétion de texte simple
- `/embeddings` : Vectorisation pour la recherche sémantique et RAG
- `/rerank` et `/v2/rerank` : Réordonnancement de résultats (compatible Cohere SDK)
- `/audio/transcriptions` : Transcription audio batch (Whisper)
- `/audio/speech` : Synthèse vocale (TTS)
- `/images/generations` : Génération d'images
- `/models` : Liste des modèles disponibles

### Exemple : Liste des modèles

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

La réponse fournit les identifiants exposés par l'API. Consultez également le [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) pour vérifier les dépréciations et redirections. Les modèles utilisés dans les exemples sont illustratifs ; vérifiez leur disponibilité avant exécution.
