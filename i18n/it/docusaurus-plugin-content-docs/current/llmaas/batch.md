---
title: Batch API
sidebar_position: 6
---

# Batch API — Elaborazione Asincrona

La Batch API elabora più conversazioni indipendenti con lo stesso modello in modo asincrono. È adatta per attività differite di classificazione, sintesi o estrazione di testo.

Invi le conversazioni direttamente in JSON a `POST /v1/chat/completions/batch`, quindi recupera il loro stato e i risultati con `GET /v1/chat/completions/batch/{id}`. Questo contratto è specifico di LLMaaS: non si basa sugli endpoint per file e batch del SDK OpenAI.

## Funzionamento

1. Preparate un array di conversazioni con un modello e parametri comuni.
2. Inviate il batch: l'API restituisce **HTTP 202**, un identificatore `id` e lo stato `queued`.
3. Conservate questo identificatore e interrogate lo stato ogni 30-60 secondi.
4. Recuperate l'array `results` quando l'elaborazione è completata, quindi salvate i risultati nella vostra applicazione.

Utilizzate la **stessa chiave API** per inviare e controllare il batch. Un'altra chiave, anche se associata allo stesso account, non consente di recuperare i relativi risultati.

## Inviare un lotto

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

## Monitorare l'elaborazione e recuperare i risultati

### GET /v1/chat/completions/batch/\{id\}

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch/$BATCH_ID" \
  -H "Authorization: Bearer $LLMAAS_API_KEY"
```

| Stato | Significato |
|--------|---------------|
| `queued` | In attesa di elaborazione o ripresa alla prossima finestra di elaborazione. |
| `in_progress` | Elaborazione in corso. |
| `completed` | Elaborazione completata; esaminare ogni risultato per rilevare eventuali errori individuali. |
| `failed` | Fallimento globale; esaminare `error` e i risultati eventualmente disponibili. |
| `expired` | Stato di scadenza; dopo la purga, la richiesta GET restituisce HTTP 404. |

La tabella `results` è allegata per gli stati `completed` e `failed`. Ogni elemento è o una risposta di chat o un oggetto `error`. Non è presente alcun file di output da scaricare.

Estratto illustrativo con un successo e un errore:

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

**`completed` non significa che tutte le conversazioni siano riuscite.** Una volta elaborato il batch, `results[i]` corrisponde alla conversazione `messages[i]`. Per riprendere gli errori, costruire un nuovo batch contenente solo le conversazioni interessate.

## Esempio Python completo

Installare `httpx`, impostare `LLMAAS_API_KEY` nell'ambiente, quindi salvare lo script come `batch_demo.py` ed eseguire `python batch_demo.py`.

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
    # Limite di attesa di questo script, non un impegno sui tempi del servizio.
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

    # Salvare anche gli errori e i possibili risultati parziali.
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

Se lo script si interrompe dopo l'invio, riprendi il monitoraggio con la richiesta GET e l'identificatore visualizzato. Non inviare automaticamente lo stesso batch dopo una perdita di connessione: potrebbe essere stato già accettato, creando un duplicato.

## Limiti e conservazione

I valori seguenti sono i parametri predefiniti del servizio; possono essere regolati tramite configurazione.

| Parametro | Valore predefinito |
|-----------|-------------------|
| Conversazioni per batch | 1 000 massimo |
| Capacità della coda | 100 batch per istanza di elaborazione; non si tratta di una quota per account |
| Finestra di elaborazione | 22 h–7 h nei giorni feriali, tutto il giorno nel weekend, in base al fuso orario del servizio |
| Conservazione dopo l'elaborazione | 24 h dopo il completamento, seguito da eliminazione automatica |

Un batch può rimanere in attesa al di fuori della finestra di elaborazione e può essere sospeso e poi ripreso se tale finestra si conclude. **La conservazione di 24 h non costituisce una garanzia di elaborazione entro 24 h.**

Lo stato del batch (coda di attesa, avanzamento e risultati consultabili tramite GET) è conservato in memoria sull'istanza di elaborazione, senza meccanismo di persistenza su disco. Un riavvio di questa istanza comporta la perdita di tale stato. Recuperate e salvate i risultati prima della loro scadenza. Conservate la chiave che ha creato il batch fino al loro recupero.

Questo contratto gestisce le conversazioni di chat. Non prevede il caricamento JSONL, l'elaborazione in batch degli embeddings, l'elenco dei batch o la cancellazione tramite API.

## Errori comuni

| Codice HTTP | Causa o azione |
|-----------|-----------------|
| `400` | Richiesta non valida, conversazioni mancanti o mal strutturate, dimensione massima superata. Correggi il corpo inviato. |
| `401` | Autenticazione non valida. Verifica la tua chiave API. |
| `403` | La chiave utilizzata per consultare il batch differisce da quella che lo ha creato. |
| `404` | Identificatore sconosciuto, batch scaduto o stato perso dopo il riavvio. |
| `501` | Elaborazione Batch disabilitata sull'istanza interessata. Contatta il supporto. |
| `503` | Coda satura o istanza di elaborazione non disponibile. Riprova più tardi in base al messaggio restituito. |

Gli errori specifici di una conversazione si trovano in `results[].error`, anche se il GET ha restituito HTTP 200.

## Tariffazione e risorse

I parametri di generazione si applicano a ogni conversazione. Per i prezzi Batch, consulta la [griglia tariffaria dell'API](./api.md#rate-limiting-e-fatturazione).

- [API di generazione chat](./api.md#post-v1chatcompletions)
- [Scegliere un modello](./models.md)
- [Ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle)