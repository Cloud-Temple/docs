---
title: Matrice di responsabilità - OpenShift Standard
slug: /contractual/paas/raci-ocp-standard
displayed_sidebar: docSidebar
---


Di seguito il modello RACI che definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo dell'offerta **OpenShift Standard**.

### Definizione dei diversi ruoli

Di seguito ricordiamo i diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Esegue  | __E__segue il processo                                                              |
| (A) Approva | __A__pprova l'esecuzione del processo                                              |
| (C) Consulta | __C__onsultato durante il processo                                                     |
| (I) Informato  | __I__nformato sui risultati del processo (tramite strumenti, portale o posta elettronica) |

### Configurazione iniziale

| Attività                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------------------------------- | ------------- | ------------------ |
| Definire l'architettura globale del servizio OpenShift                                   | C             | RA                 |
| Dimensionare il servizio OpenShift (numero di nodi, risorse)                             | C             | RA                 |
| Installare il servizio OpenShift con configurazione predefinita                          | I             | RA                 |
| Configurazione del servizio OpenShift                                                    | RA            | C                  |
| Configurare la rete di base del servizio OpenShift                                       | I             | RA                 |
| Distribuzione della configurazione iniziale di identità e accessi per OpenShift          | C             | RA                 |
| Definire la strategia di scalabilità e alta disponibilità sull'infrastruttura           | C             | RA                 |

### Gestione dei progetti e delle applicazioni

| Attività                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------- | ------------- | ------------------ |
| Creare e gestire i progetti OpenShift             | RA            | C                  |
| Deployare e gestire le applicazioni in OpenShift  | RA            | C                  |
| Configurare le pipeline CI/CD                     | RA            | C                  |
| Gestire le immagini container e i registri        | RA            | C                  |

### Manutenzione e aggiornamenti

| Attività                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------ | ------------- | ------------------ |
| Aggiornare il servizio OpenShift                 | RA            | I                  |
| Applicare le patch di sicurezza a OpenShift      | RA            | I                  |
| Aggiornare le applicazioni distribuite           | RA            | I                  |
| Gestire gli aggiornamenti delle immagini dei container | RA            | I                  |

### Monitoraggio e prestazioni

| Attività                                             | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Monitorare le prestazioni del servizio OpenShift     | RA          | I                 |
| Monitorare le prestazioni delle applicazioni         | RA          | I                 |
| Gestire gli avvisi relativi al servizio OpenShift    | RA          | I                 |
| Gestire gli avvisi relativi alle applicazioni        | RA          | I                 |

### Sicurezza

| Attività                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gestire la sicurezza del servizio OpenShift                        | RA          | I                 |
| Configurare e gestire le politiche di sicurezza dei pod            | RA          | C                 |
| Gestire i certificati SSL/TLS per il servizio OpenShift            | RA          | I                 |
| Gestire i certificati SSL/TLS per le applicazioni                  | RA          | C                 |
| Implementare e gestire il controllo degli accessi basato sui ruoli (RBAC) | RA          | I                 |

### Backup e disaster recovery

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Definire la strategia di backup per il servizio OpenShift             | RA            | CI                 |
| Implementare e gestire i backup del servizio OpenShift                | RA            | CI                 |
| Definire la strategia di backup per le applicazioni                   | RA            | CI                 |
| Implementare e gestire i backup delle applicazioni                    | RA            | CI                 |
| Testare le procedure di disaster recovery per il servizio             | RA            | CI                 |
| Testare le procedure di disaster recovery per le applicazioni         | RA            | CI                 |

### Supporto e risoluzione dei problemi

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Fornire supporto di livello 1 per l'infrastruttura               | I             | RA                 |
| Fornire supporto di livello 2 e 3 per l'infrastruttura           | I             | RA                 |
| Risolvere i problemi relativi al servizio OpenShift              | RA            | C                  |
| Risolvere i problemi relativi alle applicazioni                  | RA            | C                  |

### Gestione delle capacità e dell'evoluzione

| Attività                                                     | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------ | ------------- | ------------------ |
| Monitorare l'utilizzo delle risorse del servizio OpenShift   | RA            | C                  |
| Pianificare l'evoluzione delle capacità del servizio         | RA            | C                  |
| Implementare le modifiche alla capacità                      | I             | RA                 |
| Gestire l'evoluzione delle applicazioni e delle relative risorse | RA        | C                  |

### Documentazione e conformità

| Attività                                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------------------- | ------------- | ------------------ |
| Mantenere la documentazione del servizio OpenShift                | I             | RA                 |
| Mantenere la documentazione delle applicazioni                    | RA            | I                  |
| Garantire la conformità del servizio OpenShift alle norme di sicurezza | RA | C                  |
| Garantire la conformità delle applicazioni alle norme di sicurezza | RA       | C                  |
| Effettuare audit del servizio OpenShift                           | RA            | C                  |
| Effettuare audit delle applicazioni                               | RA            | C                  |

### Gestione degli operatori OpenShift

Gli **operatori OpenShift** sono estensioni del servizio che automatizzano la gestione di applicazioni o servizi complessi su Kubernetes/OpenShift.

Nel contesto del servizio **OpenShift Standard**, non viene applicato alcun limite sugli operatori. La sola messa a disposizione della funzionalità **OperatorHub** è garantita da **Cloud Temple**. Gli operatori sono resi disponibili tramite il catalogo del marketplace Red Hat. L'installazione, il monitoraggio e la gestione degli aggiornamenti di questi operatori sono gestiti dal **Cliente**.
Il **Cliente** è responsabile dell'utilizzo di questi operatori per gestire i propri carichi di lavoro.

| Activité                                                          | Rôle Client | Rôle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Fornitura del catalogo predefinito degli operatori                | CI          | RA                |
| Aggiornamento degli operatori                                     | RA          | CI                |
| Monitoraggio dello stato degli operatori                          | RA          | CI                |
| Risoluzione dei problemi legati agli operatori                    | RA          | CI                |
| Gestione dei permessi degli operatori                             | RA          | CI                |
| Gestione delle risorse degli operatori (aggiunta/rimozione)       | RA          | CI                |
| Backup dei dati delle risorse degli operatori                     | RA          | CI                |
| Supervisione e monitoraggio delle risorse degli operatori         | RA          | CI                |
| Ripristino dei dati delle risorse degli operatori                 | RA          | CI                |
| Audit di sicurezza degli operatori                                | RA          | CI                |
| Supporto degli operatori                                          | RA          | CI                |
| Gestione delle licenze e dei contratti di licenza sugli operatori  | RA          | I                 |
| Gestione dei piani di supporto specifici per gli operatori        | RA          | I                 |

> **Nota importante** :
>
> - Qualsiasi **danno** causato dall'installazione di un **operatore** o derivante da un'**operazione del cliente** è di responsabilità del **Cliente**.
> - La gestione delle **licenze** e dei **piani di supporto specifici** per gli operatori non è di responsabilità di **Cloud Temple**.

---

### Chiarimento sul supporto applicativo

**Supporto applicativo (servizio aggiuntivo) :**

Il supporto applicativo relativo allo sviluppo, alla configurazione, alla gestione e alla manutenzione delle applicazioni **non è di responsabilità di Cloud Temple**. L'ambito si concentra esclusivamente sulla gestione **dell'infrastruttura sottostante al servizio OpenShift**. Il **supporto dei carichi di lavoro**, **la gestione del cluster fino al sistema operativo**, **la gestione degli operatori** e le **pipeline CI/CD** sono di **responsabilità del cliente** o di qualsiasi **fornitore terzo designato** per questa attività.

| Attività                                           | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Supporto applicativo (servizio aggiuntivo)         | RA          | C                 |