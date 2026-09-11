---
title: Batch API
sidebar_position: 6
---

# Batch API — Asynchronous Processing

The Batch API processes multiple independent conversations with the same model asynchronously. It is well-suited for deferred tasks such as classification, summarization, or text extraction.

You send the conversations directly as JSON to `POST /v1/chat/completions/batch`, then retrieve their status and results with `GET /v1/chat/completions/batch/{id}`. This contract is specific to LLMaaS: it does not rely on the file and batch endpoints of the OpenAI SDK.

## How it works

1. Prepare an array of conversations with a common model and parameters.
2. Submit the batch: the API returns **HTTP 202**, an `id` identifier, and the `queued` status.
3. Keep this identifier and poll the status every 30 to 60 seconds.
4. Retrieve the `results` array when processing is complete, then save the results to your application.

Use the **same API key** to submit and check the batch. Another key, even if associated with the same account, cannot be used to retrieve its results.

## Submit a batch

### POST /v1/chat/completions/batch

The `messages` field is an **array of arrays**: each sub-array contains the messages for an independent conversation. The other parameters are common to all conversations.

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

Verify the model identifier with `GET /v1/models` and its [lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) before execution.

| Field | Description |
|-------|-------------|
| `model` | Identifier of the model used for all conversations. |
| `messages` | Non-empty array of conversations, each represented by an array of messages. |
| `max_tokens`, `temperature`, `top_p`, etc. | Parameters applied to each conversation, depending on the model's capabilities. |
| `tools`, `tool_choice`, `response_format` | Parameters passed to the model when used; tool execution remains the responsibility of your application. |

Processing forces `stream: false`. Conversations and their results are matched by their position in the arrays; maintain this mapping in your application.

Illustrative excerpt of the creation response:

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

`model_requested` indicates the requested name; `model` indicates the resolved model, which may differ in case of an alias. Reuse the `id` identifier actually returned by the service, without reconstructing it.

## Monitor Processing and Retrieve Results

### GET /v1/chat/completions/batch/\{id\}

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch/$BATCH_ID" \
  -H "Authorization: Bearer $LLMAAS_API_KEY"
```

| Status | Meaning |
|--------|---------------|
| `queued` | Waiting to be processed or resumed in the next processing window. |
| `in_progress` | Processing in progress. |
| `completed` | Processing completed; inspect each result to detect individual errors. |
| `failed` | Global failure; inspect `error` and any available results. |
| `expired` | Expired state; after purging, the GET request returns HTTP 404. |

The `results` array is included for `completed` and `failed` statuses. Each item is either a chat response or an `error` object. There is no output file to download.

Illustrative excerpt with one success and one error:

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

**`completed` does not mean that all conversations succeeded.** Once the batch is processed, `results[i]` corresponds to the conversation `messages[i]`. To retry errors, build a new batch containing only the affected conversations.

## Complete Python Example

Install `httpx`, set `LLMAAS_API_KEY` in your environment, then save the script as `batch_demo.py` and run `python batch_demo.py`.

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
    # Wait limit for this script, not a service SLA commitment.
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

    # Also save errors and any partial results.
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

If the script stops after submission, resume tracking with the GET request and the displayed ID. Do not automatically resubmit the same batch after a connection loss: it may have already been accepted, which would create a duplicate.

## Limits and Retention

The values below are the service's default settings; they can be adjusted via configuration.

| Parameter | Default Value |
|-----------|-------------------|
| Conversations per batch | 1,000 maximum |
| Queue capacity | 100 batches per processing instance; this is not a per-account quota |
| Processing window | 10 PM–7 AM on weekdays, all day on weekends, based on the service's time zone |
| Retention after processing | 24 hours after completion, followed by automatic purging |

A batch may remain pending outside the processing window and be suspended and then resumed when the window closes. **The 24-hour retention does not guarantee processing within 24 hours.**

The batch state (queue, progress, and results accessible via GET) is kept in memory on the processing instance, with no disk-based recovery mechanism. Restarting this instance results in the loss of this state. Retrieve and back up your results before they expire. Keep the key that created the batch until they are retrieved.

This contract handles chat conversations. It does not support JSONL upload, batch embedding processing, batch listing, or cancellation via API.

## Common Errors

| HTTP Code | Cause or Action |
|-----------|-----------------|
| `400` | Invalid request, missing or malformed conversations, maximum size exceeded. Correct the request body. |
| `401` | Invalid authentication. Check your API key. |
| `403` | The key used to query the batch differs from the one that created it. |
| `404` | Unknown identifier, expired batch, or state lost after restart. |
| `501` | Batch processing disabled on the relevant instance. Contact support. |
| `503` | Queue saturated or processing instance unavailable. Try again later according to the returned message. |

Conversation-specific errors are located in `results[].error`, even if the GET returned HTTP 200.

## Pricing and Resources

Generation settings apply to each conversation. For Batch pricing, refer to the [API pricing table](./api.md#rate-limiting-and-billing).

- [Chat generation API](./api.md#post-v1chatcompletions)
- [Choosing a model](./models.md)
- [Model lifecycle](https://llmaas.status.cloud-temple.app/lifecycle)