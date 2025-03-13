---
title: Matrice di responsabilità IaaS - Storage Oggetti S3
---

Ecco la matrice RACI della condivisione di responsabilità tra il cliente e Cloud Temple per l'utilizzo della piattaforma di Storage Oggetti S3 di Cloud Temple.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo         | Descrizione                              |
|--------------|------------------------------------------|
| (R) Realizza  | __R__ealizza il processo                 |
| (A) Approva | __A__pprova la realizzazione del processo |
| (C) Consultato | __C__onsultato durante il processo        |
| (I) Informato  | __I__nformato dei risultati del processo   |

## Definire le proprie esigenze

| Attività                                                                            | Ruolo del Cliente | Ruolo di Cloud Temple |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Verificare che il prodotto Storage Oggetti S3 sia conforme alle esigenze dell'applicazione | __RA__      | __CI__            |
| Sottoscrivere al servizio con le informazioni necessarie                           | __RA__      | __I__             |

## Implementare il servizio

| Attività                                                                             | Ruolo del Cliente | Ruolo di Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire il mantenimento in condizioni operative della piattaforma Storage Oggetti S3 | __I__       | __RA__            |
| Garantire il mantenimento in condizioni di sicurezza della piattaforma Storage Oggetti S3    | __I__       | __RA__            |
| Creare gli oggetti                                                                   | __RA__      |                   |
| Creare le chiavi di accesso e assegnare i diritti associati                            | __RA__      |                   |

## Operazioni ricorrenti

| Attività                                                                           | Ruolo del Cliente | Ruolo di Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire il mantenimento in condizioni operative della piattaforma Storage Oggetti S3 | __I__       | __RA__            |
| Garantire il mantenimento in condizioni di sicurezza della piattaforma Storage Oggetti S3    | __I__       | __RA__            |
| Garantire l'accessibilità del servizio Storage Oggetti S3                               | __I__       | __RA__            |
| Conservare e mettere a disposizione i log della piattaforma Storage Oggetti S3  |             | __RA__            |
| Supervisionare il corretto funzionamento della piattaforma Storage Oggetti S3                | __I__       | __RA__            |
| Seguire il ciclo di vita degli oggetti                                                  | __RA__      |                   |
| Seguire il ciclo di vita dei diritti sugli oggetti                                   | __RA__      |                   |
| Gestire la sicurezza logica degli oggetti                                               | __RA__      |                   |
| Gestire gli incidenti sul servizio Storage Oggetti S3                              | __I__       | __RA__            |
| Gestire i problemi sul servizio Storage Oggetti S3                              | __I__       | __RA__            |
| Gestire la capacità sul servizio Storage Oggetti S3                                | __I__       | __RA__            |
| Gestire le evoluzioni sul servizio Storage Oggetti S3                             | __I__       | __RA__            |

## Gestione della crittografia

| Attività                                                                                 | Ruolo del Cliente | Ruolo di Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Gestire la crittografia dei dati prima del deployment sul servizio Storage Oggetti S3      | __RA__      |                   |
| Gestire la crittografia sullo spazio di storage allocato dal servizio Storage Oggetti S3    | __A__       | __R__             |

## Continuità operativa

| Attività                                                                                  | Ruolo del Cliente | Ruolo di Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire la continuità operativa del servizio di Storage Oggetti S3                         | __I__       | __RA__            |
| Garantire il backup dei dati                                                         | __RA__      |                   |
| Realizzare test periodici di ripristino dei dati                                | __RA__      |                   |
| Mantenere il piano di continuità operativa e di ripresa delle attività per le applicazioni | __RA__      |                   |

## Reversibilità

| Attività                                                                                  | Ruolo del Cliente | Ruolo di Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implementare il progetto di reversibilità (pianificazione, strumenti, metodi, obiettivi,...) | __RA__      |                   |
| Esportare i dati dal servizio di Storage Oggetti S3                              | __RA__      |                   |
| Eliminare i dati sul servizio di Storage Oggetti S3                                | __RA__      |                   |
| Distruggere i supporti di storage a fine vita o in caso di errore                              |             | __RA__            |
