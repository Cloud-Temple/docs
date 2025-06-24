---
title: Matrice di responsabilità PaaS - OpenShift SecNumCloud
---

Ecco il modello RACI che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo del PaaS OpenShift SecNumCloud.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo        | Descrizione                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realizza | __R__ealizza il processo                                                              |
| (A) Approva  | __A__pprova la realizzazione del processo                                              |
| (C) Consulta | __C__onsultato durante il processo                                                     |
| (I) Informa  | __I__nformato dei risultati del processo (attraverso gli strumenti, il portale o la posta elettronica) |

## Configurazione iniziale

| Attività                                                             | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------------------------- | ------------- | ------------------ |
| Definire l'architettura globale della piattaforma OpenShift           | C             | RA                 |
| Dimensionare la piattaforma OpenShift (numero di nodi, risorse)      | C             | RA                 |
| Installare e configurare la piattaforma OpenShift                    | I             | RA                 |
| Configurare la rete di base della piattaforma OpenShift              | I             | RA                 |
| Implementare la gestione delle identità e degli accessi per OpenShift | C             | RA                 |
| Definire la strategia di scalabilità e alta disponibilità            | C             | RA                 |

## Gestione dei progetti e delle applicazioni

| Attività                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------- | ------------- | ------------------ |
| Creare e gestire i progetti OpenShift             | RA            | C                  |
| Distribuire e gestire le applicazioni in OpenShift | RA            | C                  |
| Configurare i pipeline CI/CD                      | RA            | C                  |
| Gestire le immagini dei contenitori e i registri  | RA            | C                  |

## Manutenzione e aggiornamenti

| Attività                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------ | ------------- | ------------------ |
| Aggiornare la piattaforma OpenShift              | I             | RA                 |
| Applicare i patch di sicuretà a OpenShift        | I             | RA                 |
| Aggiornare le applicazioni distribuite           | RA            | I                  |
| Gestire gli aggiornamenti delle immagini dei container | RA        | I                  |

## Monitoraggio e prestazioni

| Attività                                             | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------- | ------------- | ------------------ |
| Monitorare le prestazioni della piattaforma OpenShift | I             | RA                 |
| Monitorare le prestazioni delle applicazioni           | RA            | I                  |
| Gestire le alert relative alla piattaforma              | I             | RA                 |
| Gestire le alert relative alle applicazioni             | RA            | I                  |

## Sicurezza

| Attività                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------------ | ------------- | ------------------ |
| Gestire la sicurezza della piattaforma OpenShift                   | I             | RA                 |
| Configurare e gestire le politiche di sicurezza dei pod            | RA            | C                  |
| Gestire i certificati SSL/TLS per la piattaforma                   | I             | RA                 |
| Gestire i certificati SSL/TLS per le applicazioni                  | RA            | C                  |
| Implementare e gestire il controllo degli accessi basato sui ruoli (RBAC) | C             | RA                 |

## Backup e ripristino dopo un disastro

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Definire la strategia di backup per la piattaforma OpenShift       | C             | RA                 |
| Implementare e gestire i backup della piattaforma             | I             | RA                 |
| Definire la strategia di backup per le applicazioni              | RA            | C                  |
| Implementare e gestire i backup delle applicazioni             | RA            | I                  |
| Testare le procedure di ripristino dopo un disastro per la piattaforma    | I             | RA                 |
| Testare le procedure di ripristino dopo un disastro per le applicazioni | RA            | C                  |

## Supporto e risoluzione dei problemi

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Fornire un supporto di livello 1 per la piattaforma OpenShift      | I             | RA                 |
| Fornire un supporto di livello 2 e 3 per la piattaforma OpenShift | I             | RA                 |
| Risolvere i problemi relativi alla piattaforma                      | I             | RA                 |
| Risolvere i problemi relativi alle applicazioni                     | RA            | C                  |

## Gestione delle capacità e dell'evoluzione

| Attività                                                 | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------------- | ------------- | ------------------ |
| Monitorare l'utilizzo delle risorse della piattaforma    | I             | RA                 |
| Pianificare l'evoluzione delle capacità della piattaforma | C             | RA                 |
| Implementare i cambiamenti di capacità                   | I             | RA                 |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA          | C                  |

## Documentazione e conformità

| Attività                                                      | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------- | ------------- | ------------------ |
| Mantenere la documentazione della piattaforma OpenShift         | I             | RA                 |
| Mantenere la documentazione delle applicazioni                   | RA            | I                  |
| Assicurare la conformità della piattaforma agli standard di sicurezza | I             | RA                 |
| Assicurare la conformità delle applicazioni agli standard di sicurezza | RA            | C                  |
| Eseguire audit della piattaforma                          | I             | RA                 |
| Eseguire audit delle applicazioni                          | RA            | C                  |

### Gestione degli operatori OpenShift

Gli **operatori OpenShift** sono estensioni della piattaforma che automatizzano la gestione di applicazioni o servizi complessi su Kubernetes.

Solo gli **Operatori** provenienti dai cataloghi **Certificati, Red Hat e MarketPlace** saranno offerti, a condizione che siano **conformi ai requisiti SecNumCloud** e che rispettino le limitazioni dell'ecosistema.

L'installazione, il monitoraggio e la gestione degli aggiornamenti di questi operatori sono gestiti da **Cloud Temple**, mentre il **Cliente** è responsabile dell'utilizzo di questi operatori per gestire i propri carichi di lavoro.

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Disponibilità degli operatori nel catalogo                      | CI            | RA                 |
| Configurazione iniziale degli Operatori tramite la Marketplace  | CI            | RA                 |
| Aggiornamento degli Operatori                                   | I             | RA                 |
| Monitoraggio dello stato degli Operatori                        | I             | RA                 |
| Risoluzione dei problemi relativi agli Operatori                | CI            | RA                 |
| Gestione delle autorizzazioni degli Operatori                   | C             | RA                 |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)     | CI            | RA                 |
| Backup dei dati delle risorse degli Operatori                  | CI            | RA                 |
| Monitoraggio e supervisione delle risorse degli Operatori       | CI            | RA                 |
| Ripristino dei dati delle risorse degli Operatori              | CI            | RA                 |
| Audit della sicurezza degli Operatori                           | I             | RA                 |
| Supporto degli Operatori Red Hat                               | I             | RA                 |
| Supporto degli Operatori Certificati                           | I             | RA                 |
| Supporto degli Operatori MarketPlace                           | I             | RA                 |
| Gestione delle licenze e dei contratti di licenza sugli operatori | RA            | I                  |
| Gestione dei piani di supporto specifici sugli operatori       | RA            | I                  |

> **Nota importante**:
> Solo gli operatori **dichiarati supportati** da Cloud Temple e conformi a **SecNumCloud** sono messi a disposizione. Ogni operatore non certificato o proveniente da una fonte esterna non sarà supportato né validato per essere utilizzato negli ambienti.
> La gestione delle **licenze** e dei **piani di supporto specifici** sugli operatori provenienti dal catalogo **MarketPlace Red Hat** non è responsabilità di **Cloud Temple**. La gestione del supporto di questi operatori è delegata di fatto al partner che fornisce il servizio.

### Chiarezza sull'assistenza applicativa

**Assistenza applicativa (servizio aggiuntivo):**

L'assistenza applicativa relativa allo sviluppo, alla configurazione, alla gestione e alla manutenzione delle applicazioni **non è sotto la responsabilità di Cloud Temple**. Il perimetro si concentra esclusivamente sulla gestione dell'infrastruttura OpenShift e degli operatori. Il **supporto dei carichi di lavoro** (applicazioni distribuite) e dei pipeline CI/CD sono di responsabilità del cliente o di qualsiasi terzo prestatore designato per questa attività.

| Attività | Ruolo Cliente | Ruolo Cloud Temple |
| --- | --- | --- |
| Assistenza applicativa (servizio aggiuntivo) | RA | C |