---
title: Matrice di responsabilità - OpenShift Standard
---

Ecco il modello RACI che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo dell'offerta **OpenShift Standard**.

### Definizione dei diversi ruoli

Ricordiamo di seguito i diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realizza  | __R__ealizza il processo                                                              |
| (A) Approva | __A__pprova la realizzazione del processo                                              |
| (C) Consulta | __C__onsultato durante il processo                                                     |
| (I) Informato  | __I__nformato dei risultati del processo (via gli strumenti, il portale o la messaggistica) |

### Installazione iniziale

| Attività                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------------------------------- | ------------- | ------------------ |
| Definire l'architettura generale del servizio OpenShift                                      | C             | RA                 |
| Dimensionare il servizio OpenShift (numero di nodi, risorse)                          | C             | RA                 |
| Installare il servizio OpenShift con una configurazione predefinita                         | I             | RA                 |
| Configurazione del servizio OpenShift                                                       | RA            | C                  |
| Configurare la rete di base del servizio OpenShift                                        | I             | RA                 |
| Distribuzione della configurazione iniziale delle identità e degli accessi per OpenShift       | C             | RA                 |
| Definire la strategia di scalabilità e alta disponibilità sull'infrastruttura  | C             | RA                 |

### Gestione dei progetti e delle applicazioni

| Attività                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------- | ------------- | ------------------ |
| Creare e gestire i progetti OpenShift             | RA            | C                  |
| Deployare e gestire le applicazioni in OpenShift  | RA            | C                  |
| Configurare i pipeline CI/CD                      | RA            | C                  |
| Gestire le immagini dei contenitori e i registri   | RA            | C                  |

### Manutenzione e aggiornamenti

| Attività                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------ | ------------- | ------------------ |
| Aggiornare il servizio OpenShift               | RA          | I                 |
| Applicare i patch di sicurezza a OpenShift     | RA          | I                 |
| Aggiornare le applicazioni distribuite         | RA          | I                 |
| Gestire gli aggiornamenti delle immagini dei contenitori  | RA          | I                 |

### Monitoraggio e prestazioni

| Attività                                             | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------- | ------------- | ------------------ |
| Monitorare le prestazioni del servizio OpenShift     | RA            | I                  |
| Monitorare le prestazioni delle applicazioni         | RA            | I                  |
| Gestire le alerte relative al servizio OpenShift     | RA            | I                  |
| Gestire le alerte relative alle applicazioni         | RA            | I                  |

### Sicurezza

| Attività                                                           | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------------ | ------------- | ------------------ |
| Gestire la sicurezza del servizio OpenShift                        | RA            | I                  |
| Configurare e gestire le politiche di sicurezza dei pod            | RA            | C                  |
| Gestire i certificati SSL/TLS per il servizio OpenShift            | RA            | I                  |
| Gestire i certificati SSL/TLS per le applicazioni                  | RA            | C                  |
| Implementare e gestire il controllo di accesso basato sui ruoli (RBAC) | RA            | I                  |

### Backup e ripristino dopo un disastro

| Attività                                                              | Ruolo Cliente | Ruolo Cloud Temple |
| --------------------------------------------------------------------- | ------------- | ------------------ |
| Definire la strategia di backup per il servizio OpenShift          | RA            | CI                 |
| Implementare e gestire i backup del servizio OpenShift         | RA            | CI                 |
| Definire la strategia di backup per le applicazioni              | RA            | CI                 |
| Implementare e gestire i backup delle applicazioni             | RA            | CI                 |
| Testare le procedure di ripristino dopo un disastro per il servizio       | RA            | CI                 |
| Testare le procedure di ripristino dopo un disastro per le applicazioni | RA            | CI                 |

### Supporto e risoluzione dei problemi

| Attività                                                         | Ruolo Cliente | Ruolo Cloud Temple |
| ---------------------------------------------------------------- | ------------- | ------------------ |
| Fornire un supporto di livello 1 per l'infrastruttura             | I             | RA                 |
| Fornire un supporto di livello 2 e 3 per l'infrastruttura        | I             | RA                 |
| Risolvere i problemi relativi al servizio OpenShift                 | RA          | C                 |
| Risolvere i problemi relativi alle applicazioni                     | RA          | C                 |

### Gestione delle capacità e scalabilità

| Attività                                                     | Ruolo Cliente | Ruolo Cloud Temple |
| ------------------------------------------------------------ | ------------- | ------------------ |
| Monitorare l'utilizzo delle risorse del servizio OpenShift | RA            | C                  |
| Pianificare l'evoluzione delle capacità del servizio         | RA            | C                  |
| Implementare i cambiamenti di capacità                       | I             | RA                 |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA            | C                  |

### Documentazione e conformità

| Attività                                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------------------- | ------------- | ------------------ |
| Mantenere la documentazione del servizio OpenShift                | I             | RA                 |
| Mantenere la documentazione delle applicazioni                    | RA            | I                  |
| Garantire la conformità del servizio OpenShift ai requisiti di sicurezza | RA            | C                  |
| Garantire la conformità delle applicazioni ai requisiti di sicurezza | RA            | C                  |
| Eseguire audit del servizio OpenShift                             | RA            | C                  |
| Eseguire audit delle applicazioni                                 | RA            | C                  |

### Gestione degli operatori OpenShift

Gli **operatori OpenShift** sono estensioni del servizio che automatizzano la gestione di applicazioni o servizi complessi su Kubernetes/OpenShift.

Nel contesto del servizio **OpenShift Standard**, non sono applicate limitazioni sugli operatori. L'unica cosa garantita da **Cloud Temple** è la messa a disposizione della funzionalità **OperatorHub**. Gli operatori sono disponibili attraverso il catalogo della marketplace Red Hat. L'installazione, la sorveglianza e la gestione delle aggiornamenti di questi operatori sono gestite dal **Cliente**. Il **Cliente** è responsabile dell'utilizzo di questi operatori per gestire i propri carichi di lavoro.

| Attività                                                          | Ruolo Cliente | Ruolo Cloud Temple |
| ----------------------------------------------------------------- | ------------- | ------------------ |
| Messa a disposizione del catalogo degli operatori predefinito    | Cliente       | Cloud Temple       |
| Aggiornamento degli operatori                                    | Cloud Temple  | Cliente            |
| Monitoraggio dello stato degli operatori                         | Cloud Temple  | Cliente            |
| Risoluzione dei problemi relativi agli operatori                | Cloud Temple  | Cliente            |
| Gestione delle autorizzazioni degli operatori                    | Cloud Temple  | Cliente            |
| Gestione delle risorse degli operatori (aggiunta/rimozione)     | Cloud Temple  | Cliente            |
| Backup dei dati delle risorse degli operatori                   | Cloud Temple  | Cliente            |
| Monitoraggio e supervisione delle risorse degli operatori       | Cloud Temple  | Cliente            |
| Ripristino dei dati delle risorse degli operatori               | Cloud Temple  | Cliente            |
| Audit della sicurezza degli operatori                            | Cloud Temple  | Cliente            |
| Supporto degli operatori                                         | Cloud Temple  | Cliente            |
| Gestione delle licenze e contratti di licenza sugli operatori   | Cloud Temple  | I                  |
| Gestione dei piani di supporto specifici sugli operatori        | Cloud Temple  | I                  |

> **Nota importante**:
>
> - Ogni **danno** causato dall'installazione di un **operatore** o derivante da un'**operazione del Cliente** è responsabilità del **Cliente**.
> - La gestione delle **licenze** e dei **piani di supporto specifici** sugli operatori non rientra nella responsabilità di **Cloud Temple**.

### Clarificazione sull'assistenza applicativa

**Assistenza applicativa (prestazione complementare) :**

L'assistenza applicativa relativa allo sviluppo, alla configurazione, alla gestione e alla manutenzione delle applicazioni **non è responsabilità di Cloud Temple**. Il perimetro si concentra esclusivamente sulla gestione dell'**infrastruttura sottostante al servizio OpenShift**. Il **supporto delle workload**, la **gestione del cluster fino al sistema operativo**, la **gestione degli operatori** e i **pipelines CI/CD** sono di **responsabilità del cliente** o di qualsiasi **prestatore terzo designato** per questa attività.

| Attività                                           | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------- | ------------- | ------------------ |
| Assistenza applicativa (prestazione complementare) | RA            | C                  |

---