---
title: Matrice di responsabilità - OpenShift Standard
---

Ecco il modello RACI che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo dell'offerta **OpenShift Standard**.

### Definizione dei diversi ruoli

Ecco una riepilogazione dei diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                   |
|---------------|-----------------------------------------------------------------------------|
| (R) Realizza  | __R__elaziona il processo                                                                 |
| (A) Approva    | __A__pprova la realizzazione del processo                                              |
| (C) Consulta   | __C__onsulti durante il processo                                                         |
| (I) Informa    | __I__nforma sui risultati del processo (tramite l'outillage, il portale o la posta elettronica) |

### Setup Iniziale

| Attività                                                                                 | Ruolo Client | Ruolo Cloud Temple |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Definire l'architettura globale del servizio OpenShift                                      | C           | RA                |
| Dimensionare il servizio OpenShift (numero di nodi, risorse)                          | C           | RA                |
| Installare il servizio OpenShift con una configurazione di default                         | I           | RA                |
| Configurare il servizio OpenShift                                                       | RA          | C                 |
| Configurare il retroterra base del servizio OpenShift                                        | I           | RA                |
| Deployment della configurazione iniziale delle identità e degli accessi per OpenShift   | C           | RA                |
| Definire la strategia di scala e disponibilità ad alta integrità sull'infrastruttura  | C           | RA                |

### Gestione dei progetti e delle applicazioni

| Attività                                                                 | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------|-------------|-------------------|
| Creare e gestire i progetti OpenShift                      | RA         | C                |
| Deployare e gestire le applicazioni su OpenShift            | RA         | C                |
| Configurare i flussi di lavoro CI/CD                       | RA         | C                |
| Gestire le immagini container e i registri             | RA         | C                |

### Manutenzione e aggiornamenti

| Attività                                         | Ruolo Client | Ruolo Cloud Temple |
| ------------------------------------------------ | ----------- | ----------------- |
| Aggiornare il servizio OpenShift               | RA          | I                 |
| Applicare i correttivi di sicurezza a OpenShift | RA          | I                 |
| Aggiornare le applicazioni in esecuzione         | RA          | I                 |
| Gestire gli aggiornamenti delle immagini dei contenitori | RA          | I                 |

### Monitoraggio e prestazioni

| Attività                                                                   | Ruolo Client | Ruolo Cloud Temple |
| ------------------------------------------------------------------------- | ----------- | ----------------- |
| Monitorare le prestazioni del servizio OpenShift                  | RA         | I                |
| Gestire le avvisi relativi al servizio OpenShift                  | RA         | I                |
| Gestire i avvisi relativi alle applicazioni                      | RA         | I                |
| Monitorare le prestazioni delle applicazioni                     | RA         | I                |

### Sicurezza

| Attività                                                                   | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------|-------------|---------------------|
| Gestione della sicurezza del servizio OpenShift                          | RA          | I                  |
| Configurazione e gestione delle politiche di sicurezza dei pod         | RA          | C                  |
| Gestione dei certificati SSL/TLS per il servizio OpenShift            | RA          | I                  |
| Gestione dei certificati SSL/TLS per le applicazioni                   | RA          | C                  |
| Implementazione e gestione del controllo degli accessi basato su ruoli (RBAC) | RA          | I                  |

### Backup and Disaster Recovery

| Activity                                                                   | Client Role (RA) | Cloud Temple Role (CI) |
|-------------------------------------------------------------------------------|-------------------|-------------------------|
| Define backup strategy for OpenShift service                               | RA               | CI                     |
| Implement and manage backups of OpenShift service                           | RA               | CI                     |
| Define backup strategy for applications                                    | RA               | CI                     |
| Implement and manage backups of applications                             | RA               | CI                     |
| Test disaster recovery procedures for the service                          | RA               | CI                     |
| Test disaster recovery procedures for applications                       | RA               | CI                     |

### Support e Supporto e Riparazione dei Problemi

| Attività                                                                   | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------|--------------|------------------|
| Fornire supporto di livello 1 per l'infrastruttura                      | I           | RA               |
| Fornire supporto di livello 2 e 3 per l'infrastruttura                   | I           | RA               |
| Risolvere i problemi relativi al servizio OpenShift                  | RA          | C                 |
| Risolvere i problemi relativi alle applicazioni                        | RA          | C                 |

### Gestione delle capacità e evoluzione

| Attività                                                                   | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------|-------------|--------------------|
| Monitorare l'utilizzo delle risorse del servizio OpenShift            | RA          | C                 |
| Pianificare l'evoluzione delle capacità del servizio                  | RA          | C                 |
| Implementare i cambiamenti di capacità                             | I           | RA                |
| Gestire l'evoluzione delle applicazioni e dei loro risorse            | RA          | C                 |

### Documentazione e conformità

| Attività                                                                   | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------|-------------|---------------------|
| Mantenere la documentazione del servizio OpenShift                      | I           | RA                |
| Mantenere la documentazione delle applicazioni                          | RA          | I                 |
| Assicurare la conformità del servizio OpenShift alle norme di sicurezza | RA          | C                 |
| Assicurare la conformità delle applicazioni alle norme di sicurezza     | RA          | C                 |
| Effettuare audit del servizio OpenShift                             | RA          | C                 |
| Effettuare audit delle applicazioni                                  | RA          | C                 |

### Gestione degli Operator OpenShift

Gli **operatori OpenShift** sono estensioni del servizio che automatizzano la gestione di applicazioni o servizi complessi su Kubernetes/OpenShift.

Nel contesto del servizio **OpenShift Standard**, non vi sono limitazioni per quanto riguarda gli operatori. La fornitura della funzionalità **OperatorHub** è assicurata da **Cloud Temple**. Gli operatori vengono resi disponibili tramite il catalogo della marketplace Red Hat. L'installazione, la sorveglianza e la gestione delle aggiornamenti di questi operatori sono gestiti dal **Client**.

Il **Client** è responsabile dell'utilizzo di questi operatori per la gestione delle carichi di lavoro.

| Attività                                                                 | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------|------------|------------------|
| Fornitura del catalogo degli Operator predefiniti                  | CI          | RA                |
| Aggiornamento degli Operator                                         | RA          | CI                |
| Monitoraggio dell'stato degli Operator                          | RA          | CI                |
| Risoluzione dei problemi legati agli Operator                 | RA          | CI                |
| Gestione delle autorizzazioni degli Operator                     | RA          | CI                |
| Gestione delle risorse degli Operator (aggiunta/rimozione)         | RA          | CI                |
| Salvataggio dei dati delle risorse degli Operator              | RA          | CI                |
| Supervisione e monitoraggio delle risorse degli Operator       | RA          | CI                |
| Ripristino dei dati delle risorse degli Operator                | RA          | CI                |
| Audit di sicurezza degli Operator                           | RA          | CI                |
| Supporto degli Operator                                         | RA          | CI                |
| Gestione delle licenze e contratti di license sugli operatori   | RA          | I                 |
| Gestione dei piani di support specifici sugli operatori      | RA          | I                 |

> **Nota importante**:
>
> - Tutto il danno causato dall'installazione di un **operatore** o da qualsiasi operazione del cliente è responsabilità del **Client**.
> - La gestione delle licenze e dei piani di support specifici sugli operatori non è di competenza di **Cloud Temple**.

### Clarification sur l'assistenza applicativa

**Assistenza applicativa (prestazione aggiuntiva):**

L'assistenza applicativa relative allo sviluppo, alla configurazione, alla gestione e alla manutenzione delle applicazioni **non rientra nella responsabilità di Cloud Temple**. Il campo di competenza si concentra esclusivamente sulla gestione dell'infrastruttura subordinata per il servizio OpenShift. La **manutenzione delle carichi di lavoro**, la **gestione del cluster fino all'operatore sistemico** e le **pianificazioni CI/CD** sono di **responsabilità del cliente** o di qualsiasi fornitore esterno designato per queste attività.

| Attività                                           | Ruolo Cliente | Ruolo Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Assistenza applicativa (prestazione aggiuntiva) | RA          | C                 |
