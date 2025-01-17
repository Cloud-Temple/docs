---
title: Matrice di responsabilità PaaS
---

Ecco il modello RACI che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'uso delle piattaforme PaaS di Cloud Temple.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo        | Descrizione                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| (R) Realizza | __R__ealizza il processo                                                               |
| (A) Approva  | __A__pprova la realizzazione del processo                                              |
| (C) Consulta | __C__onsultato durante il processo                                                     |
| (I) Informato| __I__nformato dei risultati del processo (via l'attrezzatura, il portale o la messaggistica) |

## Implementazione iniziale

| Attività                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------------ | ------------- | ------------------ |
| Definire l'architettura globale della piattaforma OpenShift        | C             | RA                 |
| Dimensionare la piattaforma OpenShift (numero di nodi, risorse)    | C             | RA                 |
| Installare e configurare la piattaforma OpenShift                  | I             | RA                 |
| Configurare la rete di base della piattaforma OpenShift            | I             | RA                 |
| Implementare la gestione delle identità e l'accesso per OpenShift  | C             | RA                 |
| Definire la strategia di scalabilità e alta disponibilità          | C             | RA                 |

## Gestione dei progetti e delle applicazioni

| Attività                                      | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------- | ------------- | ------------------ |
| Creare e gestire i progetti OpenShift         | RA            | C                  |
| Distribuire e gestire le applicazioni in OpenShift | RA            | C                  |
| Configurare le pipeline CI/CD                 | RA            | C                  |
| Gestire le immagini dei container e i registri| RA            | C                  |

## Manutenzione e aggiornamenti

| Attività                                        | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------- | ------------- | ------------------ |
| Aggiornare la piattaforma OpenShift             | I             | RA                 |
| Applicare le patch di sicurezza a OpenShift     | I             | RA                 |
| Aggiornare le applicazioni distribuite          | RA            | I                  |
| Gestire gli aggiornamenti delle immagini dei container | RA            | I                  |

## Monitoraggio e prestazioni

| Attività                                              | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------- | ------------- | ------------------ |
| Monitorare le prestazioni della piattaforma OpenShift | I             | RA                 |
| Monitorare le prestazioni delle applicazioni          | RA            | I                  |
| Gestire gli avvisi legati alla piattaforma            | I             | RA                 |
| Gestire gli avvisi legati alle applicazioni           | RA            | I                  |

## Sicurezza

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Gestire la sicurezza della piattaforma OpenShift                      | I             | RA                 |
| Configurare e gestire le politiche di sicurezza dei pod               | RA            | C                  |
| Gestire i certificati SSL/TLS per la piattaforma                      | I             | RA                 |
| Gestire i certificati SSL/TLS per le applicazioni                     | RA            | C                  |
| Implementare e gestire il controllo degli accessi basato sui ruoli (RBAC) | C             | RA                 |

## Backup e ripristino di emergenza

| Attività                                                                | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------------------------- | ------------- | ------------------ |
| Definire la strategia di backup per la piattaforma OpenShift            | C             | RA                 |
| Implementare e gestire i backup della piattaforma                       | I             | RA                 |
| Definire la strategia di backup per le applicazioni                     | RA            | C                  |
| Implementare e gestire i backup delle applicazioni                      | RA            | I                  |
| Testare le procedure di ripristino di emergenza per la piattaforma      | I             | RA                 |
| Testare le procedure di ripristino di emergenza per le applicazioni     | RA            | C                  |

## Supporto e risoluzione dei problemi

| Attività                                                      | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------- | ------------- | ------------------ |
| Fornire supporto di livello 1 per la piattaforma OpenShift    | I             | RA                 |
| Fornire supporto di livello 2 e 3 per la piattaforma OpenShift| I             | RA                 |
| Risolvere i problemi legati alla piattaforma                  | I             | RA                 |
| Risolvere i problemi legati alle applicazioni                 | RA            | C                  |

## Gestione delle capacità ed evoluzione

| Attività                                                | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------- | ------------- | ------------------ |
| Monitorare l'uso delle risorse della piattaforma        | I             | RA                 |
| Pianificare l'evoluzione delle capacità della piattaforma| C             | RA                 |
| Implementare i cambiamenti di capacità                  | I             | RA                 |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA            | C                  |

## Documentazione e conformità

| Attività                                                    | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------------- | ------------- | ------------------ |
| Mantenere la documentazione della piattaforma OpenShift     | I             | RA                 |
| Mantenere la documentazione delle applicazioni              | RA            | I                  |
| Assicurare la conformità della piattaforma agli standard di sicurezza | I             | RA                 |
| Assicurare la conformità delle applicazioni agli standard di sicurezza | RA            | C                  |
| Effettuare audit della piattaforma                          | I             | RA                 |
| Effettuare audit delle applicazioni                         | RA            | C                  |