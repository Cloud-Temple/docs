---
title: Matrice di responsabilità PaaS - OpenShift SecNumCloud
displayed_sidebar: docSidebar
---


Ecco il modello RACI che definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo del PaaS OpenShift SecNumCloud.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI :

| Ruolo          | Descrizione                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| (R) Realizza   | __R__ealizza il processo                                                              |
| (A) Approva    | __A__pprova la realizzazione del processo                                              |
| (C) Consulta   | __C__onsultato durante il processo                                                     |
| (I) Informato  | __I__nformato sui risultati del processo (tramite strumenti, portale o messaggistica) |

## Configurazione iniziale

| Attività                                                             | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------------------------- | ------------- | ------------------ |
| Definire l'architettura globale della piattaforma OpenShift           | C             | RA                 |
| Dimensionare la piattaforma OpenShift (numero di nodi, risorse)       | C             | RA                 |
| Installare e configurare la piattaforma OpenShift                     | I             | RA                 |
| Configurare la rete di base della piattaforma OpenShift               | I             | RA                 |
| Implementare la gestione delle identità e degli accessi per OpenShift  | C             | RA                 |
| Definire la strategia di scalabilità e alta disponibilità             | C             | RA                 |

## Gestione dei progetti e delle applicazioni

| Attività                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------- | ------------- | ------------------ |
| Creare e gestire i progetti OpenShift             | RA            | C                  |
| Deployare e gestire le applicazioni in OpenShift  | RA            | C                  |
| Configurare le pipeline CI/CD                     | RA            | C                  |
| Gestire le immagini dei container e i registri    | RA            | C                  |

## Manutenzione e aggiornamenti

| Attività                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------ | ------------- | ------------------ |
| Aggiornare la piattaforma OpenShift               | I             | RA                 |
| Applicare le patch di sicurezza a OpenShift        | I             | RA                 |
| Aggiornare le applicazioni distribuite             | RA            | I                  |
| Gestire gli aggiornamenti delle immagini dei container | RA        | I                  |

## Monitoraggio e prestazioni

| Attività                                             | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------- | ------------- | ------------------ |
| Monitorare le prestazioni della piattaforma OpenShift | I             | RA                 |
| Monitorare le prestazioni delle applicazioni         | RA            | I                  |
| Gestire le allerte relative alla piattaforma          | I             | RA                 |
| Gestire le allerte relative alle applicazioni        | RA            | I                  |

## Sicurezza

| Attività                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------------ | ------------- | ------------------ |
| Gestire la sicurezza della piattaforma OpenShift                  | I             | RA                 |
| Configurare e gestire le politiche di sicurezza dei pod          | RA            | C                  |
| Gestire i certificati SSL/TLS per la piattaforma                | I             | RA                 |
| Gestire i certificati SSL/TLS per le applicazioni                | RA            | C                  |
| Implementare e gestire il controllo degli accessi basato sui ruoli (RBAC) | C             | RA                 |

## Backup e disaster recovery

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Definire la strategia di backup per la piattaforma OpenShift           | C             | RA                 |
| Implementare e gestire i backup della piattaforma                      | I             | RA                 |
| Definire la strategia di backup per le applicazioni                   | RA            | C                  |
| Implementare e gestire i backup delle applicazioni                    | RA            | I                  |
| Testare le procedure di disaster recovery per la piattaforma           | I             | RA                 |
| Testare le procedure di disaster recovery per le applicazioni         | RA            | C                  |

## Supporto e risoluzione dei problemi

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Fornire supporto di livello 1 per la piattaforma OpenShift      | I             | RA                 |
| Fornire supporto di livello 2 e 3 per la piattaforma OpenShift  | I             | RA                 |
| Risolvere i problemi relativi alla piattaforma                    | I             | RA                 |
| Risolvere i problemi relativi alle applicazioni                  | RA            | C                  |

## Gestione delle capacità e dell'evoluzione

| Attività                                                 | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------------- | ----------- | ----------------- |
| Monitorare l'utilizzo delle risorse della piattaforma   | I           | RA                |
| Pianificare l'evoluzione delle capacità della piattaforma | C           | RA                |
| Implementare le modifiche alle capacità                  | I           | RA                |
| Gestire l'evoluzione delle applicazioni e delle relative risorse | RA          | C                 |

## Documentazione e conformità

| Attività                                                      | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------- | ------------- | ------------------ |
| Mantenere la documentazione della piattaforma OpenShift        | I             | RA                 |
| Mantenere la documentazione delle applicazioni                | RA            | I                  |
| Garantire la conformità della piattaforma agli standard di sicurezza | I             | RA                 |
| Garantire la conformità delle applicazioni agli standard di sicurezza | RA            | C                  |
| Eseguire audit della piattaforma                               | I             | RA                 |
| Eseguire audit delle applicazioni                             | RA            | C                  |

### Gestione degli operatori OpenShift

Gli **operatori OpenShift** sono estensioni della piattaforma che automatizzano la gestione di applicazioni o servizi complessi su Kubernetes.

Solo gli **Operatori** provenienti dai cataloghi **Certificati, Red Hat e MarketPlace** saranno proposti, a condizione che siano **conformi ai requisiti SecNumCloud** e rispettino le limitazioni dell'ecosistema.

L'installazione, il monitoraggio e la gestione degli aggiornamenti di questi operatori sono gestiti da **Cloud Temple**, mentre il **Cliente** è responsabile dell'utilizzo di questi operatori per gestire i propri carichi di lavoro.

| Attività                                                        | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------- | ------------- | ------------------ |
| Messa a disposizione degli operatori nel catalogo               | CI            | RA                 |
| Configurazione iniziale degli Operatori tramite il Marketplace  | CI            | RA                 |
| Aggiornamento degli Operatori                                   | I             | RA                 |
| Monitoraggio dello stato degli Operatori                        | I             | RA                 |
| Risoluzione dei problemi legati agli Operatori                  | CI            | RA                 |
| Gestione delle autorizzazioni degli Operatori                   | C             | RA                 |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)     | CI            | RA                 |
| Backup dei dati delle risorse degli Operatori                   | CI            | RA                 |
| Supervisione e monitoraggio delle risorse degli Operatori       | CI            | RA                 |
| Ripristino dei dati delle risorse degli Operatori               | CI            | RA                 |
| Audit di sicurezza degli Operatori                              | I             | RA                 |
| Supporto degli Operatori Red Hat                                | I             | RA                 |
| Supporto degli Operatori Certificati                            | I             | RA                 |
| Supporto degli Operatori MarketPlace                            | I             | RA                 |
| Gestione delle licenze e dei contratti di licenza sugli operatori| RA            | I                  |
| Gestione dei piani di supporto specifici sugli operatori        | RA            | I                  |

> **Nota importante** :
> Solo gli operatori **dichiarati supportati** da Cloud Temple e conformi a **SecNumCloud** sono messi a disposizione. Nessun operatore non certificato o proveniente da una fonte esterna sarà supportato né validato per l'utilizzo negli ambienti.
> La gestione delle **licenze** e dei **piani di supporto specifici** sugli operatori provenienti dal catalogo **MarketPlace Red Hat** non è di responsabilità di **Cloud Temple**. La gestione del supporto di questi operatori è delegata di fatto al partner che fornisce il servizio.
---

### Chiarimento sul supporto applicativo

**Supporto applicativo (servizio aggiuntivo) :**

Il supporto applicativo relativo allo sviluppo, alla configurazione, alla gestione e alla manutenzione delle applicazioni **non è di responsabilità di Cloud Temple**. L'ambito si concentra esclusivamente sulla gestione dell'infrastruttura OpenShift e degli operatori. Il **supporto dei carichi di lavoro** (applicazioni distribuite) e delle pipeline CI/CD sono di responsabilità del cliente o di qualsiasi fornitore terzo designato per tale attività.

| Attività | Ruolo Cliente | Ruolo Cloud Temple |
| --- | --- | --- |
| Supporto applicativo (servizio aggiuntivo) | RA | C |