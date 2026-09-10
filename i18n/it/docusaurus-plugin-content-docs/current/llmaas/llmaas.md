---
title: Panoramica
sidebar_position: 1
---

# LLM as a Service (LLMaaS)

LLMaaS fornisce accesso ai modelli di IA ospitati da Cloud Temple tramite un'API: assistenti conversazionali, programmazione e agenti, analisi delle immagini, ricerca semantica, reranking, traduzione e utilizzi audio/immagine.

## Catalogo, novità e disponibilità

- **[Catalogo e ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle)** : modelli, contesto, stati LTS, fine del supporto e migrazioni consigliate.
- **[Novità LLMaaS](https://llmaas.status.cloud-temple.app/changelog)** : aggiunta di modelli, evoluzioni del servizio e annunci di reindirizzamento.
- **[Stato del servizio](https://llmaas.status.cloud-temple.app/)** e **[cronologia](https://llmaas.status.cloud-temple.app/history)** : disponibilità e prestazioni osservate.

Per iniziare, seguite la [guida di avvio rapido](./quickstart.md). Per scegliere un modello, consultate la [guida al catalogo](./models.md).

## Funzionalità

| Utilizzo | Guida |
|-------|-------|
| Generazione di testo, streaming, chiamate a strumenti e visione | [API LLMaaS](./api.md) |
| Ricerca aumentata dalla generazione | [Comprendere il RAG](./rag_explained.md) |
| Ordinamento dei documenti per rilevanza | [Reranking](./rerank.md) |
| Elaborazione asincrona di batch di richieste | [Batch](./batch.md) |
| Cambio di modello e gestione dei vecchi identificatori | [Ciclo di vita e migrazione](./concepts.md#migrazione-a-un-altro-modello) |

Le ottimizzazioni di inferenza, tra cui la previsione di più token (*MTP*) annunciata nel changelog, vengono eseguite lato servizio. Valutane gli effetti sulle vostre richieste in base alle metriche di monitoraggio.

## Accesso all'API

L'API è accessibile tramite la Console Cloud Temple. È possibile gestire le chiavi API, monitorare il consumo e configurare i provider nelle impostazioni del proprio account. La console consente inoltre di visualizzare l'utilizzo dei modelli.

## Autenticazione

Tutte le richieste all'API LLMaaS devono includere un header `Authorization` con la vostra chiave API in formato Bearer token. Se utilizzate i SDK client, la chiave verrà inclusa automaticamente in ogni richiesta. Se integrate direttamente con l'API, dovete inviare questo header voi stessi.

## Tipi di contenuto

Le richieste di generazione del testo utilizzano JSON con l'header `Content-Type: application/json`. Lo streaming restituisce eventi SSE e la trascrizione di file audio utilizza `multipart/form-data`. Consulta la [documentazione API](./api.md) per il formato di ogni endpoint.

## Metadati delle risposte

A seconda dell'endpoint, il corpo JSON della risposta può contenere i seguenti campi:

- `id` : Identificatore della risposta.
- `backend` : Informazioni sul motore e sull'istanza che ha elaborato la richiesta (`engine_type`, `machine_name`).

Questi campi sono presenti nel corpo JSON, non negli header HTTP. Consulta il [riferimento API](./api.md) per il formato e i campi documentati di ciascun endpoint.

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
| `model`       | string  | Il modello da utilizzare (vedi [catalogo dei modelli](./models.md)) |
| `messages`    | array   | Elenco dei messaggi della conversazione                         |
| `max_tokens`  | integer | Numero massimo di token da generare                            |
| `temperature` | float   | Controlla la creatività (0.0-2.0)                              |
| `top_p`       | float   | Controlla la diversità delle risposte                            |
| `stream`      | boolean | Attiva lo streaming della risposta                             |
| `user`        | string  | Identificativo univoco dell'utente finale                     |

## URL di base

L'URL di base per tutte le richieste API è:
```
https://api.ai.cloud-temple.com/v1/
```

## Endpoint disponibili

- `/chat/completions` : Generazione di risposte conversazionali
- `/chat/completions/batch` : Elaborazione asincrona di più conversazioni ([guide Batch](./batch.md))
- `/completions` : Completamento di testo semplice
- `/embeddings` : Vettorizzazione per la ricerca semantica e RAG
- `/rerank` e `/v2/rerank` : Riordinamento dei risultati (compatible Cohere SDK)
- `/audio/transcriptions` : Trascrizione audio batch (Whisper)
- `/audio/speech` : Sintesi vocale (TTS)
- `/images/generations` : Generazione di immagini
- `/models` : Elenco dei modelli disponibili

### Esempio: Elenco dei modelli

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

La risposta fornisce gli identificatori esposti dall'API. Consultare inoltre il [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) per verificare le deprecazioni e i reindirizzamenti. I modelli utilizzati negli esempi sono illustrativi; verificare la loro disponibilità prima dell'esecuzione.