---
title: Modello di Responsabilità Condivisa — Istanze VM
slug: /contractual/vm-instances/raci
---

# Modello di Responsabilità Condivisa — Istanze VM

Questo modello **RACI** definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per il servizio **Istanze VM** (macchine virtuali condivise).

> **Particolarità del servizio Istanze VM**  
> A differenza dell'offerta IaaS dedicata, il servizio Istanze VM si basa su un'infrastruttura di calcolo **condivisa e completamente gestita da Cloud Temple**. Cloud Temple gestisce completamente l'hypervisor, le immagini di sistema e il livello infrastrutturale. Il cliente conserva la piena responsabilità di tutto ciò che viene eseguito all'interno delle proprie istanze: sistema operativo guest, applicazioni, dati e sicurezza applicativa.

---

## Definizione dei Ruoli

| Ruolo            | Descrizione                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| (R) Responsabile | __R__ealizza il processo                                                                          |
| (A) Approva      | __A__pprova il completamento del processo                                                         |
| (C) Consultato   | __C__onsultato durante il processo                                                                |
| (I) Informato    | __I__nformato dei risultati del processo (tramite strumenti, portale o messaggistica)             |

---

## Infrastruttura Fisica & Hypervisor

Cloud Temple è completamente responsabile dello strato infrastrutturale e dell'hypervisor. Il cliente non ha accesso a questo livello.

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'implementazione e il mantenimento dei **datacenter fisici**                              |         | **RA**       |
| Garantire l'implementazione e il mantenimento dell'infrastruttura di **calcolo condiviso**           | **I**   | **RA**       |
| Garantire l'implementazione e il mantenimento dell'infrastruttura di **storage**                     | **I**   | **RA**       |
| Garantire l'implementazione e il mantenimento della connettività **rete backbone**                   | **I**   | **RA**       |
| Gestire, aggiornare e mantenere in sicurezza gli **hypervisor** *(1)*                                | **I**   | **RA**       |
| Garantire l'**alta disponibilità** della piattaforma hypervisor                                      | **I**   | **RA**       |
| Gestire incidenti, problemi e capacità dei livelli infrastrutturali e hypervisor                    | **I**   | **RA**       |
| Acquisire e mantenere le **licenze** essenziali al funzionamento della piattaforma                   |         | **RA**       |

*(1) Gli hypervisor e il livello di virtualizzazione sono interamente sotto la responsabilità di Cloud Temple. Il cliente non ha accesso all'hypervisor né al livello di gestione sottostante.*

---

## Immagini, Template e Catalogo

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Costruire, pubblicare e mantenere le **immagini ufficiali del catalogo** *(2)*                       | **I**   | **RA**       |
| Applicare patch di sicurezza e aggiornamenti alle **immagini del catalogo**                          |         | **RA**       |
| Validare la conformità e la sicurezza delle immagini pubblicate nel catalogo                         |         | **RA**       |
| **Derivare** un'immagine ufficiale del catalogo per creare un'immagine personalizzata *(3)*          | **RA**  | **I**        |
| Garantire conformità, licenze e sicurezza di qualsiasi immagine personalizzata derivata              | **RA**  |              |
| Mantenere e aggiornare le immagini personalizzate derivate (patch OS, strumenti integrati)           | **RA**  |              |

*(2) Le immagini ufficiali del catalogo (distribuzioni Linux, Windows Server, ecc.) sono costruite, mantenute e aggiornate da Cloud Temple. Il loro livello di sicurezza iniziale è responsabilità di Cloud Temple.*  
*(3) Il cliente può derivare un'immagine ufficiale del catalogo per creare un'immagine personalizzata. Da quel momento, la **piena responsabilità** di tale immagine spetta al cliente: conformità, licenze, aggiornamenti di sicurezza, presenza e aggiornamento degli strumenti e hardening. Cloud Temple non si occupa del mantenimento delle immagini derivate.*

---

## Provisioning e Ciclo di Vita delle Istanze

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Creare, avviare, fermare ed eliminare **istanze VM**                                                  | **RA**  | **I**        |
| Scegliere il flavor e l'immagine di partenza dell'istanza                                             | **RA**  |              |
| Ridimensionare un'istanza (cambio di flavor) *(4)*                                                    | **RA**  | **I**        |
| Gestire **metadati e tag** associati alle istanze                                                     | **RA**  |              |
| Gestire il **ciclo di vita** delle istanze (creazione, modifica, decommissioning)                    | **RA**  |              |
| Prendere la decisione di aggiungere o ridurre le risorse                                             | **RA**  |              |

*(4) Il ridimensionamento può richiedere il riavvio dell'istanza. La disponibilità dell'applicazione ospitata durante questa operazione è responsabilità del cliente.*

---

## Sistema Operativo Guest & Tools

Il cliente ha il pieno controllo e la piena responsabilità del sistema operativo all'interno delle proprie istanze.

:::warning[Condizione di Validità del SLA — Tools Obbligatorie]
Le **tools delle Istanze VM** (agenti di gestione dell'hypervisor) sono **preinstallate da Cloud Temple** al momento del deployment dell'istanza dal catalogo. Questi agenti sono indispensabili per il corretto funzionamento della piattaforma e per la misurazione della disponibilità.

**Se il cliente disabilita o rimuove questi tools, il SLA è immediatamente nullo.** Cloud Temple non può più garantire né misurare la disponibilità dell'istanza senza questi agenti. La presenza e il corretto funzionamento dei tools sono sotto l'esclusiva responsabilità del cliente per tutta la durata di vita dell'istanza.
:::

| Attività                                                                                                      | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|---------|--------------|
| **Preinstallare i tools** (agenti hypervisor, driver PV) al deployment dal catalogo *(5)*                    |         | **RA**       |
| Garantire che i **tools rimangano installati, abilitati e aggiornati** *(6)*                                 | **RA**  |              |
| Applicare **patch e aggiornamenti di sicurezza** al sistema operativo guest                                  | **RA**  |              |
| **Hardening** della configurazione del sistema operativo (CIS, linee guida ANSSI, ecc.)                      | **RA**  |              |
| Gestire **account utente, password e chiavi SSH** all'interno dell'istanza *(7)*                             | **RA**  |              |
| Installare e configurare **agenti di monitoraggio** (metriche OS, log di sistema)                            | **RA**  |              |
| Mantenere la **conformità normativa** applicabile a OS e dati ospitati                                       | **RA**  |              |

*(5) Cloud Temple fornisce un'immagine iniziale dal catalogo con i tools preinstallati. La responsabilità della configurazione, dell'hardening e degli aggiornamenti OS successivi spetta interamente al cliente dalla prima connessione all'istanza.*  
*(6) La rimozione o disabilitazione dei tools da parte del cliente comporta la sospensione immediata degli impegni di livello di servizio (SLA) per l'istanza interessata. Cloud Temple non può essere ritenuto responsabile dei malfunzionamenti legati all'assenza di questi agenti.*  
*(7) La sicurezza degli accessi all'istanza (solidità delle password, gestione delle chiavi SSH, principio del minimo privilegio) è interamente responsabilità del cliente. Cloud Temple non può essere ritenuto responsabile di una compromissione derivante da una configurazione di accesso insufficientemente sicura.*

---

## Sicurezza delle Istanze ed Esposizione Internet

:::danger[Responsabilità di Sicurezza del Cliente]
Cloud Temple garantisce solo l'**isolamento di rete tra tenant** a livello di piattaforma. La protezione di ciascuna istanza dalle minacce di rete (Internet, flussi interni) è **interamente responsabilità del cliente**. Un'istanza connessa a Internet senza filtro adeguato o con credenziali deboli espone il cliente a rischi di compromissione per i quali Cloud Temple non può essere ritenuto responsabile.
:::

| Attività                                                                                                            | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'**isolamento di rete tra tenant** a livello di piattaforma                                             |         | **RA**       |
| **Proteggere le istanze esposte su Internet** (regole di filtro, security group, firewall) *(A)*                   | **RA**  |              |
| Garantire che nessun servizio sia esposto su Internet senza una **regola di filtro esplicita**                     | **RA**  |              |
| Implementare e mantenere un **firewall applicativo** (WAF, IDS/IPS) se richiesto dal livello di criticità          | **RA**  |              |
| Configurare **password robuste e chiavi SSH sicure** su tutte le istanze *(B)*                                     | **RA**  |              |
| Applicare il **principio del minimo privilegio** su account OS e accessi remoti (SSH, RDP)                         | **RA**  |              |
| Implementare una soluzione di **rilevamento e risposta agli incidenti** (EDR, SIEM) se richiesto                   | **RA**  |              |
| Eseguire **l'hardening della configurazione** di rete e OS delle istanze                                           | **RA**  |              |
| Notificare Cloud Temple in caso di **sospetta compromissione** che interessi la piattaforma condivisa              | **RA**  | **C**        |

*(A) Qualsiasi istanza connessa a Internet tramite IP pubblica o regola NAT senza filtro adeguato lo è sotto l'esclusiva responsabilità del cliente. Cloud Temple non ispeziona né filtra il traffico in entrata o in uscita del tenant.*  
*(B) L'uso di password deboli, chiavi SSH compromesse o accesso root non limitato costituisce una violazione delle best practice di sicurezza. Cloud Temple non può essere ritenuto responsabile di una compromissione derivante da una configurazione di accesso insufficientemente sicura da parte del cliente.*

---

## Applicazioni e Middleware

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Installare, configurare e mantenere **applicazioni** e **middleware** nelle istanze                   | **RA**  |              |
| Applicare **patch di sicurezza** ad applicazioni e middleware                                        | **RA**  |              |
| Acquisire e detenere le **licenze software** per le applicazioni ospitate                             | **RA**  |              |
| Implementare una **strategia antivirus** sulle istanze                                               | **RA**  |              |
| Gestire la **continuità applicativa** (load balancing, replica, clustering)                          | **RA**  |              |

---

## Rete e Connettività

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantenere la **rete backbone** e l'infrastruttura di rete condivisa                                  | **I**   | **RA**       |
| Configurare le **interfacce di rete** delle istanze                                                   | **RA**  |              |
| Gestire il **piano di indirizzamento IP** nel tenant                                                  | **RA**  | **I**        |
| Configurare e gestire i **security group** (regole di filtro)                                        | **RA**  |              |
| Sottoscrivere e configurare l'**accesso Internet** (IP pubbliche, NAT)                               | **RA**  |              |
| Gestire incidenti sui link di rete **backbone** (livello Cloud Temple)                               | **I**   | **RA**       |

---

## Storage delle Istanze

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantenere l'**infrastruttura di storage** condivisa in condizione operativa                          | **I**   | **RA**       |
| Mantenere l'infrastruttura di storage in condizione di sicurezza                                     | **I**   | **RA**       |
| Creare, allegare e gestire **volumi di storage aggiuntivi**                                          | **RA**  | **I**        |
| Garantire la **coerenza dei dati** memorizzati nelle istanze                                         | **RA**  |              |
| Definire e applicare una **politica di cifratura dei dati** all'interno delle istanze                | **RA**  |              |

---

## Backup e Snapshot

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantenere l'**infrastruttura di backup** in condizione operativa                                     | **I**   | **RA**       |
| **Attivare e configurare** la politica di backup associata a un'istanza                             | **RA**  |              |
| **Eseguire snapshot** puntuali di un'istanza                                                         | **RA**  |              |
| Verificare la **coerenza e la ripristinabilità** dei backup eseguiti                                 | **RA**  |              |
| Eseguire **test di ripristino** periodici                                                            | **RA**  |              |
| Gestire la **capacità di storage** dedicata ai backup                                                |         | **RC**       |
| Definire la **strategia di continuità o recovery** per le applicazioni ospitate                     | **RA**  |              |

---

## Monitoraggio e Performance

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Monitorare il corretto funzionamento dell'**infrastruttura fisica e degli hypervisor**               | **I**   | **RA**       |
| Monitorare le performance delle **risorse condivise** (calcolo, storage, rete)                       | **I**   | **RA**       |
| Monitorare le **performance delle istanze** (CPU, RAM, I/O disco, rete a livello guest)              | **RA**  |              |
| Implementare una soluzione di **metriche e alerting** per le applicazioni ospitate                   | **RA**  |              |

---

## Gestione degli Accessi e delle Identità

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'accessibilità della **Console Cloud Temple** e dell'API                                  |         | **RA**       |
| Gestire le **abilitazioni** dei team Cloud Temple all'infrastruttura qualificata SecNumCloud         |         | **RA**       |
| Amministrare gli accessi alla **Console Cloud Temple** (utenti, ruoli, IAM)                         | **RA**  |              |
| Gestire gli accessi **all'interno delle istanze** (account OS, chiavi SSH, bastion)                 | **RA**  |              |
| Configurare un **directory di autenticazione esterno** (SSO, LDAP) per la Console                   | **RA**  | **C**        |

---

## Log (Registri)

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservare e mettere a disposizione i **log della piattaforma** Istanze VM *(8)*                     |         | **RA**       |
| Raccogliere, conservare e analizzare i **log di sistema e applicativi** delle istanze                | **RA**  |              |

*(8) La durata di conservazione dei log della piattaforma è specificata nell'accordo di servizio Istanze VM.*

---

## Documentazione e Contrattuale

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestire gli aspetti commerciali e contrattuali (preventivi, ordini, fatturazione)                    | **I**   | **RA**       |
| Monitorare l'esecuzione contrattuale del servizio (consegne, fatturazione)                           | **RA**  | **I**        |
| Mantenere e mettere a disposizione la documentazione tecnica del servizio                            | **I**   | **RA**       |
| Mantenere aggiornata la **CMDB** relativa alle istanze deployate nel tenant                          | **RA**  |              |
| Mantenere aggiornata la politica di accesso alla Console e all'API                                   | **RA**  |              |

---

## Reversibilità

| Attività                                                                                              | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------|---------|--------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture target                        | **RA**  | **I**        |
| Esportare dati e immagini delle istanze tramite API o strumenti forniti                              | **RA**  | **I**        |
| Procedere allo smantellamento delle configurazioni a seguito della risoluzione del contratto         | **I**   | **RA**       |
| Eseguire la cancellazione sicura dei dati sui supporti di storage e fornire attestazione             | **I**   | **RA**       |

---

> *Sono disponibili servizi professionali se si desidera delegare a Cloud Temple alcune o tutte le responsabilità elencate come obblighi del cliente. Contattare il proprio account manager Cloud Temple.*
