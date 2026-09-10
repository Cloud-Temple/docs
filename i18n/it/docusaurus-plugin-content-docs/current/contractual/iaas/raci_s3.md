---
title: Matrice di responsabilità IaaS - Archiviazione Oggetti S3
slug: /contractual/storage/raci
displayed_sidebar: docSidebar
---


Ecco il RACI relativo alla ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo della piattaforma di Archiviazione Oggetti S3 Cloud Temple.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI :

| Ruolo         | Descrizione                              |
|--------------|------------------------------------------|
| (R) Esegue  | __R__ealizza il processo                 |
| (A) Approva | __A__pprova la realizzazione del processo |
| (C) Consulta | __C__onsultato durante il processo        |
| (I) Informato  | __I__nformato sui risultati del processo   |

## Definire il proprio fabbisogno

| Attività                                                                            | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------|---------------|--------------------|
| Verificare che il prodotto Archiviazione Oggetti S3 sia conforme al fabbisogno dell'applicazione | __RA__        | __CI__             |
| Sottoscrivere il servizio con le informazioni necessarie                           | __RA__        | __I__              |

## Implementare il servizio

| Attività                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire il mantenimento in condizioni operative della piattaforma di Archiviazione Oggetti S3 | __I__       | __RA__            |
| Garantire il mantenimento in condizioni di sicurezza della piattaforma di Archiviazione Oggetti S3 | __I__       | __RA__            |
| Creare gli oggetti                                                                   | __RA__      |                   |
| Creare le chiavi di accesso e assegnare i permessi associati                         | __RA__      |                   |

## Operazioni ricorrenti

| Attività                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire il mantenimento operativo della piattaforma di Archiviazione Oggetti S3 | __I__         | __RA__             |
| Garantire il mantenimento della sicurezza della piattaforma di Archiviazione Oggetti S3 | __I__ | __RA__             |
| Garantire l'accessibilità del servizio di Archiviazione Oggetti S3 | __I__ | __RA__             |
| Conservare e rendere disponibili i log della piattaforma di Archiviazione Oggetti S3 | | __RA__             |
| Supervisionare il corretto funzionamento della piattaforma di Archiviazione Oggetti S3 | __I__ | __RA__             |
| Monitorare il ciclo di vita degli oggetti | __RA__ | |
| Monitorare il ciclo di vita dei diritti sugli oggetti | __RA__ | |
| Gestire la sicurezza logica degli oggetti | __RA__ | |
| Gestire gli incidenti sul servizio di Archiviazione Oggetti S3 | __I__ | __RA__ |
| Gestire i problemi sul servizio di Archiviazione Oggetti S3 | __I__ | __RA__ |
| Gestire la capacità del servizio di Archiviazione Oggetti S3 | __I__ | __RA__ |
| Gestire le evoluzioni del servizio di Archiviazione Oggetti S3 | __I__ | __RA__ |

## Gestione della crittografia

| Attività                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------|---------------|--------------------|
| Gestire la crittografia dei dati prima del caricamento sul servizio di Storage S3        | __RA__        |                    |
| Gestire la crittografia sullo spazio di storage allocato dal servizio di Storage S3     | __A__         | __R__              |

## Continuità operativa

| Attività                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire la continuità operativa del servizio di storage oggetti S3                      | __I__         | __RA__             |
| Garantire il backup dei dati                                                              | __RA__        |                    |
| Eseguire test periodici di ripristino dei dati                                             | __RA__        |                    |
| mantenere il piano di continuità operativa e di disaster recovery per le applicazioni     | __RA__        |                    |

## Reversibilità

| Attività                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------|---------------|--------------------|
| Implementare il progetto di reversibilità (pianificazione, strumenti, metodi, obiettivi,...) | __RA__        |                    |
| Esportare i dati dal servizio di Archiviazione Oggetti S3                                 | __RA__        |                    |
| Eliminare i dati dal servizio di Archiviazione Oggetti S3                                 | __RA__        |                    |
| Distruggere i supporti di storage a fine vita o in caso di errore                         |               | __RA__             |