---
title: Panoramica
sidebar_position: 1
---

# LLM come servizio (LLMaaS)

## Accesso all'API

L'API è accessibile tramite la Console Cloud Temple. Puoi gestire le tue chiavi API, monitorare il tuo consumo e configurare i tuoi terzi nei parametri del tuo account. La console consente inoltre di visualizzare l'uso dei tuoi modelli.

## Autenticazione

Tutte le richieste verso l'API LLMaaS devono includere un'intestazione `Authorization` con la propria chiave API nel formato token Bearer. Se si utilizzano i SDK client, la chiave sarà automaticamente inclusa in ogni richiesta. Se si integra direttamente con l'API, è necessario inviare questa intestazione manualmente.

## Tipi di contenuto

L'API LLMaaS accetta sempre JSON nel corpo delle richieste e restituisce JSON nel corpo delle risposte. Devi inviare l'intestazione `content-type: application/json` nelle tue richieste. Se utilizzi i SDK client, questa verrà gestita automaticamente.

## Headers di risposta

L'API LLMaaS include i seguenti headers in ogni risposta:

- `id` : Un identificativo univoco per la richiesta
- `backend` : Informazioni sull'infrastruttura utilizzata (engine_type, machine_name)

## Esempi

### Richiesta cURL
```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user", 
        "content": "Ciao! Puoi presentarti in italiano?"
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
        "content": "Ciao! Sono un modello linguistico virtuale...",
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

### Parametri disponibili

| Parametro     | Tipo    | Descrizione                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| `model`       | stringa | Il modello da utilizzare (vedere [catalogo dei modelli](./models)) |
| `messages`    | array   | Elenco dei messaggi della conversazione                       |
| `max_tokens`  | intero  | Numero massimo di token da generare                           |
| `temperature` | float   | Controllo della creatività (0.0-2.0)                          |
| `top_p`       | float   | Controllo della diversità delle risposte                      |
| `stream`      | booleano| Attiva lo streaming della risposta                            |
| `user`        | stringa | Identificativo unico dell'utente finale                       |

## URL di base

L'URL di base per tutte le richieste API è :
```
https://api.ai.cloud-temple.com/v1/
```

## Endpoint disponibili

- `/chat/completions` : Generazione di risposte conversazionali
- `/completions` : Completamento di testo semplice
- `/models` : Elenco dei modelli disponibili

### Esempio: Elenco dei modelli

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Risposta**:
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

La risposta contiene tutti i modelli disponibili con le loro specifiche e permessi.