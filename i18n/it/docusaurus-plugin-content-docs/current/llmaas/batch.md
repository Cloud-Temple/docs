---
title: Batch API
sidebar_position: 6
---

# Batch API — Elaborazione Asincrona

La Batch API elabora più conversazioni indipendenti con lo stesso modello, in modo asincrono. È adatta per attività differite di classificazione, sintesi o estrazione di testo.

Inviate le conversazioni direttamente in JSON a `POST /v1/chat/completions/batch`, quindi recuperate il loro stato e i risultati con `GET /v1/chat/completions/batch/{id}`. Questo contratto è specifico per LLMaaS: non si basa sugli endpoint di file e batch del SDK OpenAI.

## Funzionamento

1. Preparate un array di conversazioni con un modello e parametri comuni.
2. Inviate il batch: l'API restituisce **HTTP 202**, un identificativo `id` e lo stato `queued`.
3. Conservate questo identificativo e interrogate lo stato ogni 30-60 secondi.
4. Recuperate l'array `results` quando l'elaborazione è terminata, quindi salvate i risultati nella vostra applicazione.

Utilizzate la **stessa chiave API** per inviare e consultare il batch. Un'altra chiave, anche associata allo stesso account, non consente di recuperare i suoi risultati.

## Inviare un batch

### POST /v1/chat/completions/batch

Il campo `messages` è un **array di array**: ogni sotto-array contiene i messaggi di una conversazione indipendente. Gli altri parametri sono comuni a tutte le conversazioni.

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

Verificate l'identificativo del modello con `GET /v1/models` e il suo [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) prima dell'esecuzione.

| Campo | Descrizione |
|-------|-------------|
| `model` | Identificativo del modello utilizzato per tutte le conversazioni. |
| `messages` | Array non vuoto di conversazioni, ciascuna rappresentata da un array di messaggi. |
| `max_tokens`, `temperature`, `top_p`, ecc. | Parametri applicati a ogni conversazione, in base alle capacità del modello. |
| `tools`, `tool_choice`, `response_format` | Parametri trasmessi al modello quando utilizzati; l'esecuzione degli strumenti rimane a carico della vostra applicazione. |

L'elaborazione forza `stream: false`. Le conversazioni e i loro risultati sono associati dalla loro posizione negli array; conservate questa corrispondenza nella vostra applicazione.

Estratto rappresentativo della risposta di creazione:

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

`model_requested` indica il nome richiesto; `model` indica il modello risolto, che può differire in caso di alias. Riutilizzate l'identificativo `id` effettivamente restituito dal servizio, senza ricostruirlo.

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
| `completed` | Elaborazione terminata; ispezionate ogni risultato per rilevare errori individuali. |
| `failed` | Fallimento globale; ispezionate `error` e i risultati eventualmente disponibili. |
| `expired` | Stato di scadenza; dopo la rimozione, il GET restituisce HTTP 404. |

L'array `results` è allegato per gli stati `completed` e `failed`. Ogni elemento è o una risposta di chat o un oggetto `error`. Non c'è alcun file di output da scaricare.

Estratto rappresentativo con un successo e un errore:

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

**`completed` non significa che tutte le conversazioni sono riuscite.** Una volta elaborato il batch, `results[i]` corrisponde alla conversazione `messages[i]`. Per gestire gli errori, create un nuovo batch contenente solo le conversazioni interessate.

## Esempio Python completo

Installate `httpx`, impostate `LLMAAS_API_KEY` nel vostro ambiente, quindi salvate lo script come `batch_demo.py` ed eseguite `python batch_demo.py`.

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

Se lo script si interrompe dopo l'invio, riprendi il monitoraggio con il GET e l'identificativo visualizzato. Non inviare automaticamente lo stesso batch dopo una perdita di connessione: potrebbe essere stato accettato, il che creerebbe un duplicato.

## Limiti e conservazione

I valori sottostanti sono i parametri predefiniti del servizio; possono essere modificati tramite configurazione.

| Parametro | Valore predefinito |
|-----------|-------------------|
| Conversazioni per batch | Massimo 1 000 |
| Capacità della coda | 100 batch per istanza di elaborazione; non è un quota per account |
| Finestra di elaborazione | 22h-7h nei giorni feriali, tutto il giorno nel weekend, in base al fuso orario del servizio |
| Conservazione dopo l'elaborazione | 24 h dopo il completamento, poi rimozione automatica |

Un batch può rimanere in attesa al di fuori della finestra di elaborazione e essere sospeso e poi ripreso se questa finestra termina. **La conservazione di 24 h non costituisce una garanzia di elaborazione entro 24 h.**

Lo stato del batch (coda, progresso e risultati consultabili tramite GET) è conservato in memoria sull'istanza di elaborazione, senza meccanismo di ripresa su disco. Un riavvio di questa istanza comporta la perdita di questo stato. Recuperate e salvate i vostri risultati prima della loro scadenza. Conservate la chiave che ha creato il batch fino al loro recupero.

Questo contratto tratta delle conversazioni di chat. Non offre upload JSONL, elaborazione di embedding in batch, elenco dei batch o annullamento tramite API.

## Errori comuni

| Codice HTTP | Causa o azione |
|-----------|-----------------|
| `400` | Richiesta errata, conversazioni assenti o mal strutturate, dimensione massima superata. Correggete il corpo inviato. |
| `401` | Autenticazione non valida. Verificate la vostra chiave API. |
| `403` | La chiave utilizzata per consultare il batch differisce da quella che lo ha creato. |
| `404` | Identificativo sconosciuto, batch scaduto o stato perso dopo il riavvio. |
| `501` | Elaborazione Batch disabilitata sull'istanza interessata. Contattate il supporto. |
| `503` | Coda satura o istanza di elaborazione non disponibile. Riprovate più tardi in base al messaggio restituito. |

Gli errori specifici di una conversazione si trovano in `results[].error`, anche se il GET ha restituito HTTP 200.

## Tariffe e risorse

I parametri di generazione si applicano a ogni conversazione. Per le tariffe Batch, consultate il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

- [API di generazione di chat](./api.md#post-v1chatcompletions)
- [Scegliere un modello](./models.md)
- [Ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle)
