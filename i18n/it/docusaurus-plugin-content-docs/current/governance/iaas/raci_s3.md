---
title: Matrice di responsabilità IaaS - Archiviazione Oggetti S3
---

Ecco il RACI della condivisione di responsabilità tra il cliente e Cloud Temple per l'uso della piattaforma di Archiviazione Oggetti S3 Cloud Temple.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo         | Descrizione                              |
|--------------|------------------------------------------|
| (R) Realizza  | __R__ealizza il processo                 |
| (A) Approva   | __A__pprova la realizzazione del processo |
| (C) Consulta  | __C__onsultato durante il processo        |
| (I) Informato | __I__nformato dei risultati del processo   |

## Definire il vostro bisogno

| Attività                                                                            | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------|---------------|--------------------|
| Validare che il prodotto Archiviazione Oggetti S3 sia conforme al bisogno dell'applicazione | __RA__      | __CI__             | 
| Sottoscrivere al servizio con le informazioni necessarie                           | __RA__        | __I__              | 

## Implementare il servizio

| Attività                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare il mantenimento in condizione operativa della piattaforma Archiviazione Oggetti S3 | __I__       | __RA__             | 
| Assicurare il mantenimento in condizione di sicurezza della piattaforma Archiviazione Oggetti S3    | __I__       | __RA__             | 
| Creare gli oggetti                                                                   | __RA__        |                    | 
| Creare le chiavi di accesso e assegnare i diritti associati                          | __RA__        |                    |

## Operazioni ricorrenti

| Attività                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare il mantenimento in condizione operativa della piattaforma Archiviazione Oggetti S3 | __I__       | __RA__             | 
| Assicurare il mantenimento in condizione di sicurezza della piattaforma Archiviazione Oggetti S3    | __I__       | __RA__             | 
| Assicurare l'accessibilità del servizio Archiviazione Oggetti S3                               | __I__       | __RA__             |
| Conservare e mettere a disposizione i registri della piattaforma Archiviazione Oggetti S3               |             | __RA__             |
| Monitorare il corretto funzionamento della piattaforma Archiviazione Oggetti S3                | __I__       | __RA__             |
| Seguire il ciclo di vita degli oggetti                                                  | __RA__       |                    | 
| Seguire il ciclo di vita dei diritti sugli oggetti                                   | __RA__        |                    |
| Gestire la sicurezza logica degli oggetti                                               | __RA__        |                    |
| Gestire gli incidenti sul servizio Archiviazione Oggetti S3                              | __I__       | __RA__             |
| Gestire i problemi sul servizio Archiviazione Oggetti S3                              | __I__       | __RA__             |
| Gestire la capacità sul servizio Archiviazione Oggetti S3                                | __I__       | __RA__             |
| Gestire le evoluzioni sul servizio Archiviazione Oggetti S3                             | __I__       | __RA__             |

## Gestione della crittografia

| Attività                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------|---------------|--------------------|
| Gestire la crittografia dei dati prima del loro dispiegamento sul servizio Archiviazione Oggetti S3      | __RA__        |                    |
| Gestire la crittografia sullo spazio di archiviazione assegnato dal servizio Archiviazione Oggetti S3    | __A__         | __R__              | 

## Continuità operativa

| Attività                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare la continuità operativa del servizio di archiviazione oggetti S3                         | __I__       | __RA__             |
| Assicurare il backup dei dati                                                         | __RA__        |                    |
| Effettuare test periodici di ripristino dei dati                                | __RA__        |                    | 
| Mantenere il piano di continuità operativa e di ripresa delle attività per le applicazioni | __RA__        |                    | 

## Reversibilità

| Attività                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------|---------------|--------------------|
| Implementare il progetto di reversibilità (pianificazione, strumenti, metodi, obiettivi,...) | __RA__        |                    |
| Esportare i dati dal servizio di Archiviazione Oggetti S3                              | __RA__        |                    |
| Eliminare i dati sul servizio di Archiviazione Oggetti S3                                | __RA__        |                    | 
| Distruggere i supporti di archiviazione a fine vita o in errore                              |             | __RA__             |