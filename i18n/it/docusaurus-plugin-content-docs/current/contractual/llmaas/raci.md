---
title: Matrice di responsabilità - LLMaaS
---

Ecco il RACI della condivisione della responsabilità tra il cliente e Cloud Temple per l'uso della piattaforma LLM as a Service (LLMaaS).

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI :

| Ruolo        | Descrizione                              |
| ------------ | ---------------------------------------- |
| (R) Realizza | __R__ealizza il processo                 |
| (A) Approva  | __A__pprova la realizzazione del processo |
| (C) Consulta | __C__onsultato durante il processo        |
| (I) Informa  | __I__nformato dei risultati del processo   |

## Definire il proprio bisogno

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Confermare che il servizio LLMaaS soddisfa il bisogno dell'applicazione | __RA__        | __CI__             |
| Sottoscrivere il servizio e selezionare un terzo di fatturazione       | __RA__        | __I__              |

## Implementare il servizio

| Attività                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------------------------- | ------------- | ------------------ |
| Garantire il mantenimento in condizione operativa della piattaforma LLMaaS (API, GPU) | __I__         | __RA__             |
| Garantire il mantenimento in condizione di sicurezza della piattaforma LLMaaS       | __I__         | __RA__             |
| Gestire le chiavi di accesso API (creazione, rotazione, revoca)                     | __RA__        |                    |
| Sviluppare e mantenere il codice dell'applicazione client                          | __RA__        |                    |

## Operazioni ricorrenti

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Garantire la disponibilità dell'API LLMaaS                         | __I__       | __RA__            |
| Monitorare il corretto funzionamento della piattaforma e dei modelli | __I__       | __RA__            |
| Gestire gli incidenti sulla piattaforma LLMaaS                     | __I__       | __RA__            |
| Gestire i problemi sulla piattaforma LLMaaS                     | __I__       | __RA__            |
| Gestire la capacità dell'infrastruttura GPU                        | __I__       | __RA__            |
| Gestire le evoluzioni dei modelli (aggiunta, deprecazione)           | __C, I__    | __RA__            |
| Monitorare il consumo e la fatturazione                         | __RA__      | __I__             |

## Gestione della sicurezza

| Attività                                                                    | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------------- | ------------- | ------------------ |
| Proteggere l'infrastruttura fisica e la piattaforma LLMaaS                 | __I__         | __RA__             |
| Gestire gli accessi e le autorizzazioni degli utenti finali dell'applicazione | __RA__        |                    |
| Proteggere i dati e i prompt inviati all'API                        | __RA__      | __C__             |
| Garantire la riservatezza dei dati elaborati dai modelli             | __R__       | __A__             |
| Gestire la conformità dell'applicazione finale (GDPR, ecc.)                    | __RA__      | __I__             |

## Continuità operativa

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Garantire la continuità operativa della piattaforma LLMaaS              | __I__         | __RA__             |
| Garantire la salvaguardia dei dati dell'applicazione cliente            | __RA__        |                    |
| Mantenere il piano di continuità operativa per l'applicazione cliente | __RA__        |                    |

## Reversibilità

| Attività                                                                    | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------------- | ------------- | ------------------ |
| Implementare il progetto di reversibilità (pianificazione, strumenti, obiettivi) | __RA__        | __C__              |
| Esportare i dati e il codice dell'applicazione cliente                     | __RA__        |                    |
| Eliminare le chiavi API e gli accessi al servizio                          | __RA__        |                    |