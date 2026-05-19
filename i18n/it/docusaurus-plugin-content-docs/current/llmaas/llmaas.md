---
title: Panoramica
sidebar_position: 1
---

# LLM come Servizio (LLMaaS)

## Accesso all'API

L'API è accessibile tramite la Console Cloud Temple. Puoi gestire le tue chiavi API, monitorare il consumo e configurare i tier nelle impostazioni del tuo account. La console consente inoltre di visualizzare l'utilizzo dei tuoi modelli.

## Autenticazione

Tutte le richieste all'API LLMaaS devono includere un header `Authorization` con la tua chiave API in formato Bearer token. Se utilizzi gli SDK client, la chiave verrà inclusa automaticamente in ogni richiesta. Se effettui l'integrazione direttamente con l'API, devi inviare questo header tu stesso.

## Tipi di contenuto

L'API LLMaaS accetta sempre JSON nel corpo delle richieste e restituisce JSON nel corpo delle risposte. È necessario inviare l'intestazione `content-type: application/json` nelle richieste. Se si utilizzano gli SDK client, ciò verrà gestito automaticamente.

## Intestazioni della risposta

L'API LLMaaS include i seguenti header in ogni risposta :

- `id` : Un identificativo globalmente univoco per la richiesta
- `backend` : Informazioni sull'infrastruttura utilizzata (engine_type, machine_name)

## Esempi

### Richiesta cURL
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

### Risposta
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

### Parametri disponibili

| Parametro     | Tipo    | Descrizione                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | string  | Il modello da utilizzare (vedere [catalogo dei modelli](./models.md)) |
| `messages`    | array   | Elenco dei messaggi della conversazione                     |
| `max_tokens`  | integer | Numero massimo di token da generare                         |
| `temperature` | float   | Controlla la creatività (0.0-2.0)                           |
| `top_p`       | float   | Controlla la diversità delle risposte                       |
| `stream`      | boolean | Abilita lo streaming della risposta                         |
| `user`        | string  | Identificativo univoco dell'utente finale                   |

## URL di base

L'URL di base per tutte le richieste API è:
```
https://api.ai.cloud-temple.com/v1/
```

## Endpoint disponibili

- `/chat/completions` : Generazione di risposte conversazionali
- `/completions` : Completamento di testo semplice
- `/embeddings` : Vettorizzazione per la ricerca semantica e RAG
- `/rerank` e `/v2/rerank` : Riordinamento dei risultati (compatibile con SDK Cohere)
- `/audio/transcriptions` : Trascrizione audio batch (Whisper)
- `/audio/speech` : Sintesi vocale (TTS)
- `/images/generations` : Generazione di immagini
- `/models` : Elenco dei modelli disponibili

### Esempio: Elenco dei modelli

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Risposta** :
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

La risposta contiene tutti i modelli disponibili con le relative specifiche e autorizzazioni.