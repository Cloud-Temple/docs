---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM as a Service

## Consultare il catalogo aggiornato

Il **[catalogo e ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle)** è il riferimento per i modelli in produzione, le deprecazioni, le date di fine supporto, gli stati LTS e le migrazioni consigliate. Utilizzate i suoi filtri e la ricerca per preparare un nuovo progetto o monitorare i modelli delle vostre applicazioni. Per le date del ciclo di vita e le migrazioni, le informazioni pubblicate su questa pagina fanno fede in caso di discrepanze con un vecchio esempio o una copia del catalogo.

Questa pagina spiega come scegliere e utilizzare un modello. Gli inventari, le date e le metriche di prestazione sono consultabili direttamente nelle seguenti fonti:

| Esigenza | Fonte da consultare |
|--------|--------------------|
| Scegliere un modello, verificarne il contesto e il ciclo di vita | [Catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) |
| Ottenere gli identificativi esposti dall'API | `GET /v1/models` ([documentazione](./api.md)) |
| Verificare la disponibilità e le prestazioni osservate | [Stato del servizio](https://llmaas.status.cloud-temple.app/) |
| Consultare le evoluzioni del servizio e gli annunci di migrazione | [Changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog) |
| Esaminare le metriche passate | [Cronologia di monitoraggio](https://llmaas.status.cloud-temple.app/history) |

## Scegliere in base al caso d'uso

Il servizio copre i casi d'uso elencati di seguito. Verificare le capacità del modello selezionato prima dell'integrazione: non tutti i modelli supportano gli stessi input né le stesse funzionalità.

### Chat e ragionamento

Per gli assistenti, la sintesi o l'analisi, confrontate la qualità delle risposte sui vostri documenti, il tempo di risposta e la dimensione del contesto necessaria. Per un'applicazione destinata a durare nel tempo, esaminate lo stato **LTS** e la data di fine supporto pubblicata.

### Programmazione e agenti

Per generare codice o costruire un agente, verifica il supporto alle chiamate di strumenti (*tool calling*) e testa sequenze complete di esecuzione. La [guide de démarrage](./quickstart.md) presenta un esempio di chiamata di funzione.

### Visione e multimodale

Scegliere un modello che accetti immagini per l'analisi visiva e l'estrazione del testo. Verificare i formati supportati dall'API e la capacità di contesto; il supporto per il testo non implica quello per le immagini. Consultare gli esempi di [richieste multimodali](./api.md).

### Embedding e ricerca semantica

Gli embedding trasformano il testo in vettori utilizzati per la ricerca. Confrontate la copertura linguistica, la lunghezza dei testi accettati e la pertinenza sul vostro corpus. Un cambio di modello potrebbe richiedere di ricalcolare i vettori e di ricostruire l'indice: non mescolate gli embedding di modelli diversi. Consultate la [guida RAG](./rag_explained.md).

## Modelli di Reranking

Il reranking riordina i documenti recuperati in base alla loro pertinenza per una query. Completa la ricerca vettoriale prima della generazione della risposta. Gli endpoint `/v1/rerank` e `/v2/rerank` sono presentati nella [guida Reranking](./rerank.md).

### Sicurezza e guardrails

I modelli di sicurezza consentono di valutare i contenuti all'interno di un flusso applicativo. Definite i criteri di filtraggio, le soglie e la gestione dei casi ambigui insieme ai vostri team di business; validateli sui vostri dati.

### Traduzione

Per un'applicazione multilingue, testare le lingue interessate, la vostra terminologia e la conservazione della formattazione. La qualità deve essere valutata sui documenti effettivamente elaborati.

### Audio e immagini

Il catalogo include casi d'uso per la trascrizione audio e la generazione di immagini. Verificare il modello e il protocollo richiesti per ciascun caso d'uso, in particolare la distinzione tra trascrizione di file e trascrizione in tempo reale.

## Recuperare gli identificatori tramite l'API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Utilizzare l'identificatore esatto restituito dall'API nel parametro `model`. La presenza di un identificatore non garantisce che faccia ancora riferimento al modello originale: un nome precedente potrebbe essere reindirizzato a un modello successivo. Verificare anche il relativo [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle).

## Preparare la produzione

1. Selezionare un modello adatto al proprio utilizzo e verificarne la licenza.
2. Consultarne lo stato, la data di fine supporto e la migrazione consigliata.
3. Testare la qualità, la latenza, il costo e le capacità necessarie sui propri casi d'uso reali.
4. Conservare l'identificatore del modello nella configurazione dell'applicazione per facilitare una migrazione.
5. Seguire il changelog e applicare il [guide de migration](./concepts.md#migrazione-a-un-altro-modello) quando viene annunciato un cambiamento.

Le velocità osservate dipendono in particolare dal carico, dalla lunghezza delle richieste e dalla modalità di generazione. Costituiscono dei valori di riferimento, non garanzie di throughput per la propria applicazione.

Per i prezzi e i livelli di accesso, consultare la [documentation API](./api.md). Per le elaborazioni differite, consultare il [mode Batch](./batch.md).