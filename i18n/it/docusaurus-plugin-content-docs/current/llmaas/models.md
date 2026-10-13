---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM as a Service

## Consultare il catalogo aggiornato

Il **[catalogo e ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle)** è il riferimento per i modelli in produzione, le deprecazioni, le date di fine supporto, gli stati LTS e le migrazioni consigliate. Utilizzare i filtri e la ricerca per preparare un nuovo progetto o monitorare i modelli delle proprie applicazioni. Per le date del ciclo di vita e le migrazioni, le informazioni pubblicate su questa pagina fanno autorità in caso di discrepanza con un esempio precedente o una copia del catalogo.

Questa pagina spiega come scegliere e utilizzare un modello. Gli inventari, le date e le misure di prestazioni sono consultabili direttamente nelle seguenti fonti:

| Esigenza | Fonte da consultare |
|--------|--------------------|
| Scegliere un modello, verificare il contesto e il ciclo di vita | [Catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) |
| Ottenere le credenziali esposte dall'API | `GET /v1/models` ([documentazione](./api.md)) |
| Verificare la disponibilità e le prestazioni osservate | [Stato del servizio](https://llmaas.status.cloud-temple.app/) |
| Consultare le evoluzioni del servizio e gli annunci di migrazione | [Changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog) |
| Esaminare le misure passate | [Cronologia di supervisione](https://llmaas.status.cloud-temple.app/history) |

## Scegliere in base al proprio utilizzo

Il servizio copre i seguenti utilizzi. Verificare le capacità del modello selezionato prima dell'integrazione: non tutti i modelli supportano gli stessi input né le stesse funzionalità.

### Chat e ragionamento

Per assistenti, sintesi o analisi, confrontare la qualità delle risposte sui propri documenti, il tempo di risposta e la dimensione del contesto necessaria. Per un'applicazione destinata a durare, esaminare lo stato **LTS** e la data di fine supporto pubblicata.

### Programmazione e agenti

Per generare codice o costruire un agente, verificare il supporto per le chiamate di strumenti (*tool calling*) e testare sequenze complete di esecuzione. La [guida di avvio](./quickstart.md) presenta un esempio di chiamata di funzione.

### Visione e multimodale

Scegliere un modello che accetta immagini per l'analisi visiva e l'estrazione di testo. Verificare i formati accettati dall'API e la capacità del contesto; il supporto per il testo non implica quello per le immagini. Consultare gli esempi di [richieste multimodali](./api.md).

### Embedding e ricerca semantica

Gli embedding trasformano il testo in vettori utilizzati dalla ricerca. Confrontare la copertura linguistica, la lunghezza dei testi accettati e la pertinenza sul proprio corpus. Un cambiamento di modello può richiedere il ricalcolo dei vettori e la ricostruzione dell'indice: non mescolare gli embedding di modelli diversi. Consultare la [guida RAG](./rag_explained.md).

## Modelli di Reranking

Il reranking riordina i documenti trovati in base alla loro pertinenza rispetto a una domanda. Completa la ricerca vettoriale prima della generazione della risposta. Gli endpoint `/v1/rerank` e `/v2/rerank` sono presentati nella [guida Reranking](./rerank.md).

### Sicurezza e guardrail

I modelli di sicurezza permettono di valutare i contenuti in un percorso applicativo. Definire i criteri di filtraggio, le soglie e il trattamento dei casi ambigui con i propri team aziendali; validarli sui propri dati.

### Traduzione

Per un'applicazione multilingue, testare le lingue coinvolte, la propria terminologia e la preservazione della formattazione. La qualità deve essere valutata sui documenti effettivamente trattati.

### Audio e immagine

Il catalogo include utilizzi di trascrizione audio e generazione di immagini. Verificare il modello e il protocollo richiesto per ogni utilizzo, in particolare la distinzione tra trascrizione di file e trascrizione in tempo reale.

## Recuperare le credenziali tramite l'API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Utilizzare l'identificativo esatto restituito dall'API nel parametro `model`. La presenza di un identificativo non garantisce che indichi ancora il modello originale: un vecchio nome può essere reindirizzato verso un successore. Verificare anche il [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle).

## Preparare la produzione

1. Selezionare un modello adatto al proprio utilizzo e verificarne la licenza.
2. Consultare il suo stato, la data di fine supporto e la migrazione consigliata.
3. Testare la qualità, la latenza, il costo e le capacità necessarie sui casi reali.
4. Conservare l'identificativo del modello nella configurazione dell'applicazione per facilitare una migrazione.
5. Seguire il changelog e applicare la [guida di migrazione](./concepts.md#migrazione-verso-un-altro-modello) quando viene annunciato un cambiamento.

Le velocità osservate dipendono in particolare dal carico, dalla lunghezza delle richieste e dalla modalità di generazione. Servono come riferimenti, non come garanzie di throughput per la propria applicazione.

Per conoscere i prezzi pubblici vigenti e stabilire la propria stima, consultare il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Per i livelli tecnici, consultare la [documentazione API](./api.md). Per i trattamenti differiti, consultare la [modalità Batch](./batch.md).
