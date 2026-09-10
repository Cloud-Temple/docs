---
title: Batch API
sidebar_position: 6
---

# Batch API — Traitement Asynchrone

La Batch API traite plusieurs conversations indépendantes avec un même modèle, de manière asynchrone. Elle convient aux tâches différées de classification, de synthèse ou d'extraction de texte.

Vous envoyez les conversations directement en JSON à `POST /v1/chat/completions/batch`, puis récupérez leur état et leurs résultats avec `GET /v1/chat/completions/batch/{id}`. Ce contrat est spécifique à LLMaaS : il ne repose pas sur les endpoints de fichiers et de batches du SDK OpenAI.

## Fonctionnement

1. Préparez un tableau de conversations avec un modèle et des paramètres communs.
2. Soumettez le lot : l'API renvoie **HTTP 202**, un identifiant `id` et le statut `queued`.
3. Conservez cet identifiant et interrogez le statut toutes les 30 à 60 secondes.
4. Récupérez le tableau `results` lorsque le traitement est terminé, puis sauvegardez les résultats dans votre application.

Utilisez la **même clé API** pour soumettre et consulter le batch. Une autre clé, même associée au même compte, ne permet pas de récupérer ses résultats.

## Soumettre un lot

### POST /v1/chat/completions/batch

Le champ `messages` est un **tableau de tableaux** : chaque sous-tableau contient les messages d'une conversation indépendante. Les autres paramètres sont communs à toutes les conversations.

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch" \
  -H "Authorization: Bearer $LLMAAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      [
        {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
        {"role": "user", "content": "Mon accès VPN ne fonctionne plus."}
      ],
      [
        {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
        {"role": "user", "content": "Mon application se ferme au démarrage."}
      ]
    ],
    "max_tokens": 200,
    "temperature": 0.0
  }'
```

Vérifiez l'identifiant du modèle avec `GET /v1/models` et son [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) avant exécution.

| Champ | Description |
|-------|-------------|
| `model` | Identifiant du modèle utilisé pour toutes les conversations. |
| `messages` | Tableau non vide de conversations, chacune représentée par un tableau de messages. |
| `max_tokens`, `temperature`, `top_p`, etc. | Paramètres appliqués à chaque conversation, selon les capacités du modèle. |
| `tools`, `tool_choice`, `response_format` | Paramètres transmis au modèle lorsqu'ils sont utilisés ; l'exécution des outils reste à la charge de votre application. |

Le traitement force `stream: false`. Les conversations et leurs résultats sont associés par leur position dans les tableaux ; conservez cette correspondance dans votre application.

Extrait illustratif de la réponse de création :

```json
{
  "id": "batch-instance-exemple-identifiant",
  "object": "batch",
  "status": "queued",
  "model": "gpt-oss:120b",
  "model_requested": "gpt-oss:120b",
  "request_counts": {
    "total": 2,
    "completed": 0,
    "failed": 0
  }
}
```

`model_requested` indique le nom demandé ; `model` indique le modèle résolu, qui peut différer en cas d'alias. Réutilisez l'identifiant `id` effectivement renvoyé par le service, sans le reconstruire.

## Suivre le traitement et récupérer les résultats

### GET /v1/chat/completions/batch/\{id\}

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch/$BATCH_ID" \
  -H "Authorization: Bearer $LLMAAS_API_KEY"
```

| Statut | Signification |
|--------|---------------|
| `queued` | En attente de traitement ou de reprise à la prochaine fenêtre de traitement. |
| `in_progress` | Traitement en cours. |
| `completed` | Traitement terminé ; inspectez chaque résultat pour détecter les erreurs individuelles. |
| `failed` | Échec global ; inspectez `error` et les résultats éventuellement disponibles. |
| `expired` | État d'expiration ; après purge, le GET renvoie HTTP 404. |

Le tableau `results` est joint pour les statuts `completed` et `failed`. Chaque élément est soit une réponse de chat, soit un objet `error`. Il n'y a pas de fichier de sortie à télécharger.

Extrait illustratif avec un succès et une erreur :

```json
{
  "id": "batch-instance-exemple-identifiant",
  "object": "batch",
  "status": "completed",
  "request_counts": {
    "total": 2,
    "completed": 1,
    "failed": 1
  },
  "results": [
    {
      "choices": [
        {"message": {"role": "assistant", "content": "Réseau"}, "finish_reason": "stop"}
      ],
      "usage": {"prompt_tokens": 30, "completion_tokens": 4, "total_tokens": 34}
    },
    {
      "error": {
        "type": "BatchSubRequestError",
        "message": "Échec du traitement de la conversation.",
        "index": 1
      }
    }
  ]
}
```

**`completed` ne signifie pas que toutes les conversations ont réussi.** Une fois le lot traité, `results[i]` correspond à la conversation `messages[i]`. Pour reprendre les erreurs, construisez un nouveau lot contenant uniquement les conversations concernées.

## Exemple Python complet

Installez `httpx`, définissez `LLMAAS_API_KEY` dans votre environnement, puis enregistrez le script sous `batch_demo.py` et exécutez `python batch_demo.py`.

```bash
pip install httpx
```

```python
import json
import os
import time

import httpx

BASE_URL = "https://api.ai.cloud-temple.com/v1"
MODEL = os.getenv("LLMAAS_MODEL", "gpt-oss:120b")


def wait_for_batch(client, batch_id):
    # Limite d'attente de ce script, pas un engagement de délai du service.
    deadline = time.monotonic() + 24 * 60 * 60
    while time.monotonic() < deadline:
        response = client.get(f"/chat/completions/batch/{batch_id}")
        response.raise_for_status()
        batch = response.json()
        print(f"Statut : {batch['status']}", flush=True)
        if batch["status"] in {"completed", "failed", "expired"}:
            return batch
        time.sleep(30)
    raise TimeoutError(
        f"Attente locale terminée. Reprenez le suivi par GET avec l'id {batch_id}. "
        "Le traitement du batch n'est pas annulé."
    )


def main():
    api_key = os.environ["LLMAAS_API_KEY"]
    tickets = [
        "Mon accès VPN ne fonctionne plus.",
        "Mon application se ferme au démarrage.",
    ]
    conversations = [
        [
            {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
            {"role": "user", "content": ticket},
        ]
        for ticket in tickets
    ]
    with httpx.Client(
        base_url=BASE_URL,
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=60.0,
    ) as client:
        response = client.post(
            "/chat/completions/batch",
            json={
                "model": MODEL,
                "messages": conversations,
                "max_tokens": 200,
                "temperature": 0.0,
            },
        )
        response.raise_for_status()
        batch_id = response.json()["id"]
        print(f"Batch accepté. Conservez cet identifiant : {batch_id}", flush=True)
        batch = wait_for_batch(client, batch_id)

    # Sauvegarder aussi les erreurs et les éventuels résultats partiels.
    with open(f"{batch_id}.json", "w", encoding="utf-8") as output:
        json.dump(batch, output, ensure_ascii=False, indent=2)

    print(f"Statut final : {batch['status']}")
    if batch.get("error"):
        print(f"Erreur globale : {batch['error']}")
    for index, result in enumerate(batch.get("results", [])):
        if result.get("error"):
            print(f"Ticket {index + 1} en erreur : {result['error']}")
        else:
            print(f"Ticket {index + 1} : {result['choices'][0]['message']}")


if __name__ == "__main__":
    main()
```

Si le script s'arrête après la soumission, reprenez le suivi avec le GET et l'identifiant affiché. Ne soumettez pas automatiquement le même lot après une perte de connexion : il peut avoir été accepté, ce qui créerait un doublon.

## Limites et conservation

Les valeurs ci-dessous sont les paramètres par défaut du service ; elles peuvent être ajustées par configuration.

| Paramètre | Valeur par défaut |
|-----------|-------------------|
| Conversations par lot | 1 000 maximum |
| Capacité de la file | 100 lots par instance de traitement ; ce n'est pas un quota par compte |
| Fenêtre de traitement | 22 h–7 h en semaine, toute la journée le week-end, selon le fuseau horaire du service |
| Conservation après traitement | 24 h après complétion, puis purge automatique |

Un lot peut rester en attente hors de la fenêtre de traitement et être suspendu puis repris si cette fenêtre se termine. **La conservation de 24 h ne constitue pas une garantie de traitement sous 24 h.**

L'état du lot (file d'attente, progression et résultats consultables par GET) est conservé en mémoire sur l'instance de traitement, sans mécanisme de reprise sur disque. Un redémarrage de cette instance entraîne la perte de cet état. Récupérez et sauvegardez vos résultats avant leur expiration. Conservez la clé ayant créé le lot jusqu'à leur récupération.

Ce contrat traite des conversations de chat. Il ne propose pas d'upload JSONL, de traitement d'embeddings en batch, de liste des lots ou d'annulation via API.

## Erreurs courantes

| Code HTTP | Cause ou action |
|-----------|-----------------|
| `400` | Requête incorrecte, conversations absentes ou mal structurées, taille maximale dépassée. Corrigez le corps envoyé. |
| `401` | Authentification invalide. Vérifiez votre clé API. |
| `403` | La clé utilisée pour consulter le lot diffère de celle qui l'a créé. |
| `404` | Identifiant inconnu, lot expiré ou état perdu après redémarrage. |
| `501` | Traitement Batch désactivé sur l'instance concernée. Contactez le support. |
| `503` | File saturée ou instance de traitement indisponible. Réessayez plus tard selon le message retourné. |

Les erreurs propres à une conversation se trouvent dans `results[].error`, même si le GET a renvoyé HTTP 200.

## Tarification et ressources

Les paramètres de génération s'appliquent à chaque conversation. Pour les tarifs Batch, consultez la [grille de tarification de l'API](./api.md#rate-limiting-et-facturation).

- [API de génération de chat](./api.md#post-v1chatcompletions)
- [Choisir un modèle](./models.md)
- [Cycle de vie des modèles](https://llmaas.status.cloud-temple.app/lifecycle)
