---
title: Matrice di responsabilità - LLMaaS
displayed_sidebar: docSidebar
---


Ecco il RACI della ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo della piattaforma LLM as a Service (LLMaaS).

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI :

| Ruolo        | Descrizione                              |
| ------------ | ---------------------------------------- |
| (R) Esegue   | __R__alizza il processo                  |
| (A) Approva  | __A__pprova l'esecuzione del processo    |
| (C) Consulta | __C__onsultato durante il processo       |
| (I) Informato| __I__nformato sui risultati del processo |

## Definire le proprie esigenze

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Verificare che il servizio LLMaaS sia conforme alle esigenze dell'applicazione | __RA__      | __CI__            |
| Sottoscrivere il servizio e selezionare un livello di fatturazione           | __RA__      | __I__             |

## Implementare il servizio

| Attività                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------------------------- | ------------- | ------------------ |
| Garantire il mantenimento in condizioni operative della piattaforma LLMaaS (API, GPU) | __I__         | __RA__             |
| Garantire il mantenimento in condizioni di sicurezza della piattaforma LLMaaS       | __I__         | __RA__             |
| Gestire le chiavi di accesso API (creazione, rotazione, revoca)                    | __RA__        |                    |
| Sviluppare e mantenere il codice dell'applicazione client                          | __RA__        |                    |

## Operazioni ricorrenti

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Garantire la disponibilità dell'API LLMaaS                      | __I__         | __RA__             |
| Supervisionare il corretto funzionamento della piattaforma e dei modelli | __I__ | __RA__ |
| Gestire gli incidenti sulla piattaforma LLMaaS                  | __I__         | __RA__             |
| Gestire i problemi sulla piattaforma LLMaaS                     | __I__         | __RA__             |
| Gestire la capacità dell'infrastruttura GPU                      | __I__         | __RA__             |
| Gestire l'evoluzione dei modelli (aggiunta, deprecazione)        | __C, I__      | __RA__             |
| Monitorare i consumi e la fatturazione                           | __RA__        | __I__              |

## Gestione della sicurezza

| Attività                                                                    | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------------- | ------------- | ------------------ |
| Proteggere l'infrastruttura fisica e la piattaforma LLMaaS                 | __I__         | __RA__             |
| Gestire gli accessi e i permessi degli utenti finali dell'applicazione      | __RA__        |                    |
| Proteggere i dati e i prompt inviati all'API                                | __RA__        | __C__              |
| Garantire la riservatezza dei dati elaborati dai modelli                    | __R__         | __A__              |
| Gestire la conformità dell'applicazione finale (GDPR, ecc.)                 | __RA__        | __I__              |

## Continuità operativa

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Garantire la continuità operativa della piattaforma LLMaaS           | __I__         | __RA__             |
| Garantire il backup dei dati dell'applicazione cliente                | __RA__        |                    |
| Mantenere il piano di continuità operativa per l'applicazione cliente | __RA__        |                    |

## Reversibilità

| Attività                                                                    | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------------- | ------------- | ------------------ |
| Implementare il progetto di reversibilità (pianificazione, strumenti, obiettivi) | __RA__        | __C__              |
| Esportare i dati e il codice dell'applicazione cliente                      | __RA__        |                    |
| Eliminare le chiavi API e gli accessi al servizio                           | __RA__        |                    |