---
title: Modello di responsabilità condivisa — Istanze VM
slug: /contractual/vm-instances/raci
---

# Modello di responsabilità condivisa — Istanze VM

Ecco il modello **RACI** che definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo del servizio **Istanze VM** (macchine virtuali condivise).

> **Particolarità dell'offerta Istanze VM**  
> A differenza dell'offerta IaaS dedicata, il servizio Istanze VM si basa su un'infrastruttura di calcolo **condivisa e completamente gestita da Cloud Temple**. Cloud Temple gestisce integralmente l'hypervisor, le immagini di sistema e il livello infrastrutturale. Il cliente mantiene la piena responsabilità di ciò che viene eseguito all'interno delle proprie istanze: sistema operativo guest, applicazioni, dati e sicurezza applicativa.

---

## Definizione dei ruoli

| Ruolo          | Descrizione                                                                           |
|----------------|---------------------------------------------------------------------------------------|
| (R) Esegue     | __R__ealizza il processo                                                              |
| (A) Approva    | __A__pprova la realizzazione del processo                                              |
| (C) Consulta   | __C__onsultato durante il processo                                                     |
| (I) Informato  | __I__nformato sui risultati del processo (tramite strumenti, portale o messaggistica) |

---

## Infrastruttura fisica & hypervisor

Cloud Temple è interamente responsabile del livello di infrastruttura e di hypervisor. Il cliente non ha accesso a questo livello.

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'implementazione e la manutenzione dei **datacenter fisici**                                 |         | **RA**       |
| Garantire l'implementazione e la manutenzione delle infrastrutture di **calcolo condiviso**            | **I**   | **RA**       |
| Garantire l'implementazione e la manutenzione delle infrastrutture di **storage**                      | **I**   | **RA**       |
| Garantire l'implementazione e la manutenzione della connettività **rete backbone**                   | **I**   | **RA**       |
| Gestire, aggiornare e mantenere in condizioni di sicurezza gli **hypervisor** *(1)*                   | **I**   | **RA**       |
| Garantire l'**alta disponibilità** della piattaforma di hypervisor                                     | **I**   | **RA**       |
| Gestire incidenti, problemi e capacità dei livelli di infrastruttura e hypervisor                     | **I**   | **RA**       |
| Acquisire e mantenere le **licenze** essenziali per il funzionamento della piattaforma                |         | **RA**       |

*(1) Gli hypervisor e il livello di virtualizzazione sono interamente sotto la responsabilità di Cloud Temple. Il cliente non dispone di alcun accesso all'hypervisor né al livello di gestione sottostante.*

---

## Immagini, template e catalogo

| Attività                                                                                                       | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Creare, pubblicare e mantenere le **immagini ufficiali** del catalogo *(2)*                                    | **I**   | **RA**       |
| Applicare patch di sicurezza e aggiornamenti alle **immagini del catalogo**                                   |         | **RA**       |
| Validare la conformità e la sicurezza delle immagini pubblicate nel catalogo                                 |         | **RA**       |
| **Derivare** un'immagine ufficiale del catalogo per creare un'immagine personalizzata *(3)*                  | **RA**  | **I**        |
| Garantire la conformità, le licenze e la sicurezza di qualsiasi immagine personalizzata derivata             | **RA**  |              |
| Mantenere e aggiornare le immagini personalizzate derivate (patch OS, strumenti integrati)                   | **RA**  |              |

*(2) Le immagini ufficiali del catalogo (distribuzioni Linux, Windows Server, ecc.) vengono create, mantenute e aggiornate da Cloud Temple. Il relativo livello di sicurezza iniziale è sotto la responsabilità di Cloud Temple.*  
*(3) Il cliente può derivare un'immagine ufficiale del catalogo per creare un'immagine personalizzata. Di conseguenza, **la piena responsabilità** di tale immagine ricade su di lui: conformità, licenze, aggiornamenti di sicurezza, presenza e aggiornamento dei tool e hardening. Cloud Temple non supporta la manutenzione di tali immagini derivate.*

---

## Provisioning e ciclo di vita delle istanze

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Creare, avviare, arrestare ed eliminare le **istanze VM**                                            | **RA**  | **I**        |
| Scegliere il profilo (flavor) e l'immagine di avvio dell'istanza                                       | **RA**  |              |
| Ridimensionare un'istanza (cambio di profilo) *(4)*                                                  | **RA**  | **I**        |
| Gestire le **metadati e i tag** associati alle istanze                                                 | **RA**  |              |
| Gestire il **ciclo di vita** delle istanze (création, modification, décommissionnement)                | **RA**  |              |
| Prendere la decisione di aggiungere o ridurre le risorse.                              | **RA**  |            |

*(4) Il ridimensionamento potrebbe richiedere il riavvio dell'istanza. La disponibilità dell'applicazione ospitata durante questa operazione è di responsabilità del cliente.*

---

## Sistema operativo guest (Guest OS) & tools

Il cliente ha il pieno controllo e la piena responsabilità del sistema operativo all'interno delle proprie istanze.

:::warning[Condition de validité du SLA — Tools obligatoires]
I **tools per le istanze VM** (agents de gestion de l'hyperviseur) sono **preinstallati da Cloud Temple** durante il deployment dell'istanza dal catalogo. Questi agenti sono indispensabili per il corretto funzionamento della piattaforma e per il monitoraggio della disponibilità.

**Se il cliente disattiva o elimina questi tools, il SLA è immediatamente nullo.** Cloud Temple non può più garantire né misurare la disponibilità dell'istanza senza questi agenti. La presenza e il corretto funzionamento dei tools sono sotto la piena responsabilità del cliente durante l'esercizio.
:::

| Attività                                                                                                        | Cliente | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------|---------|--------------|
| **Preinstallare i tools** (agents hyperviseur, PV drivers) durante il deployment dal catalogo *(5)*             |         | **RA**       |
| Assicurarsi che i **tools rimangano installati, attivati e aggiornati** per tutta la durata dell'istanza *(6)*  | **RA**  |              |
| Applicare le **patch e gli aggiornamenti di sicurezza** del sistema operativo guest                              | **RA**  |              |
| **Hardening** della configurazione del sistema operativo (CIS, recommandations ANSSI, etc.)                      | **RA**  |              |
| Gestire gli **account utente, le password e le chiavi SSH** all'interno dell'istanza *(7)*                       | **RA**  |              |
| Installare e configurare gli **agenti di monitoraggio** (métriques OS, logs système)                              | **RA**  |              |
| Mantenere la **conformità normativa** applicabile agli OS e ai dati ospitati                                      | **RA**  |              |

*(5) Cloud Temple fornisce un'immagine iniziale allo stato di uscita dal catalogo con i tools preinstallati. La responsabilità della configurazione, dell'hardening e degli aggiornamenti successivi del sistema operativo ricade interamente sul cliente fin dalla prima connessione all'istanza.*  
*(6) La rimozione o la disattivazione dei tools da parte del cliente comporta la sospensione immediata degli impegni di livello di servizio (SLA) per l'istanza interessata. Cloud Temple non può essere ritenuta responsabile dei malfunzionamenti legati all'assenza di questi agenti.*  
*(7) La sicurezza degli accessi all'istanza (solidité des mots de passe, gestion des clés SSH, principe de moindre privilège) è sotto la piena responsabilità del cliente. Cloud Temple non può essere ritenuta responsabile di una compromissione derivante da una configurazione di accesso insufficientemente sicura.*

---

## Sicurezza delle istanze ed esposizione a Internet

:::danger[Responsabilità di sicurezza del cliente]
Cloud Temple garantisce esclusivamente l'**isolamento inter-tenant** a livello di piattaforma. La protezione di ogni istanza contro le minacce di rete (Internet, flussi interni) è **interamente sotto la responsabilità del cliente**. Un'istanza connessa a Internet senza un filtraggio adeguato o con credenziali deboli espone il cliente a rischi di compromissione per i quali Cloud Temple non può essere ritenuta responsabile.
:::

| Attività                                                                                                              | Cliente | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'**isolamento di rete inter-tenant** a livello di piattaforma                                              |         | **RA**       |
| **Proteggere le istanze esposte su Internet** (regole di filtraggio, gruppi di sicurezza, firewall) *(A)*            | **RA**  |              |
| Assicurarsi che nessun servizio sia esposto su Internet senza **regola di filtraggio esplicita**                     | **RA**  |              |
| Implementare e mantenere un **firewall applicativo** (WAF, IDS/IPS) se richiesto dal livello di criticità            | **RA**  |              |
| Configurare **password robuste e chiavi SSH sicure** su tutte le istanze *(B)*                                       | **RA**  |              |
| Applicare il **principio del minimo privilegio** sugli account OS e sugli accessi remoti (SSH, RDP)                  | **RA**  |              |
| Implementare una soluzione di **rilevamento e risposta agli incidenti** (EDR, SIEM) se richiesto                     | **RA**  |              |
| Procedere all'**hardening della configurazione** di rete e OS delle istanze (disattivazione dei servizi non necessari) | **RA**  |              |
| Notificare Cloud Temple in caso di **sospetto di compromissione** che interessa la piattaforma condivisa              | **RA**  | **C**        |

*(A) Qualsiasi istanza connessa a Internet tramite un IP pubblico o una regola NAT senza un filtraggio adeguato lo è sotto la sola responsabilità del cliente. Cloud Temple non effettua ispezione né filtraggio dei flussi in uscita o in entrata del tenant.*  
*(B) L'uso di password deboli, chiavi SSH compromesse o accesso root non limitato costituisce una violazione delle best practice di sicurezza. Cloud Temple non può essere ritenuta responsabile di una compromissione derivante da una configurazione di accesso insufficientemente sicura da parte del cliente.*

---

## Applicazioni & middleware

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Installare, configurare e mantenere le **applicazioni** e i **middleware** nelle istanze               | **RA**  |              |
| Applicare i **patch di sicurezza** delle applicazioni e dei middleware                                 | **RA**  |              |
| Acquisire e detenere le **licenze software** delle applicazioni ospitate                                | **RA**  |              |
| Implementare una **strategia antivirus** sulle istanze                                                 | **RA**  |              |
| Gestire la **continuità applicativa** (load balancing, réplication, clustering)                        | **RA**  |              |

---

## Rete & connettività

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire il mantenimento della **rete backbone** e dell'infrastruttura di rete condivisa              | **I**   | **RA**       |
| Configurare le **interfacce di rete** delle istanze                                                    | **RA**  |              |
| Gestire il **piano di indirizzamento IP** nel tenant                                                   | **RA**  | **I**        |
| Configurare e gestire i **gruppi di sicurezza** (security groups / regole di filtraggio) *(6)*         | **RA**  |              |
| Sottoscrivere e configurare l'**accesso a Internet** (IP pubblici, NAT)                                | **RA**  |              |
| Gestire gli incidenti sui collegamenti di rete **backbone** (livello Cloud Temple)                     | **I**   | **RA**       |

*(6) La configurazione delle regole di filtraggio di rete applicabili alle istanze è di responsabilità del cliente. Cloud Temple garantisce esclusivamente l'isolamento inter-tenant a livello di piattaforma.*

---

## Archiviazione delle istanze

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire il mantenimento in condizioni operative dell'**infrastruttura di archiviazione** condivisa | **I**   | **RA**       |
| Garantire il mantenimento in condizioni di sicurezza dell'infrastruttura di archiviazione            | **I**   | **RA**       |
| Creare, collegare e gestire i **volumi di archiviazione aggiuntivi**                                   | **RA**  | **I**        |
| Garantire la **coerenza dei dati** archiviati nelle istanze                                            | **RA**  |              |
| Definire e applicare una **politica di crittografia dei dati** all'interno delle istanze *(7)*       | **RA**  |              |

*(7) La crittografia dei dati a riposo dell'infrastruttura di archiviazione sottostante è garantita da Cloud Temple. La crittografia applicativa dei dati (a livello di file system o database) è di responsabilità del cliente.*

---

## Backup e snapshot

| Attività                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Garantire il mantenimento in condizioni operative dell'**infrastruttura di backup**                 | **I**  | **RA**       |
| **Attivare e configurare** la politica di backup associata a un'istanza                          | **RA** |       |
| **Eseguire snapshot** puntuali di un'istanza                                                  | **RA** |         |
| Verificare la **coerenza e la ripristinabilità** dei backup effettuati                             | **RA** |         |
| Eseguire **test di ripristino** periodici                                                    | **RA** |              |
| Gestire le **capacità di archiviazione** dedicate ai backup                                            |  | **RC**       |
| Definire la **strategia di continuità o di ripristino di attività** per le applicazioni ospitate       | **RA** |        |

---

## Monitoraggio & prestazioni

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Monitorare il corretto funzionamento dell'**infrastruttura fisica e degli hypervisor**                 | **I**   | **RA**       |
| Monitorare le **prestazioni delle risorse condivise** (calcolo, storage, rete)                         | **I**   | **RA**       |
| Supervisionare le **prestazioni delle istanze** (CPU, RAM, disk I/O, rete a livello guest)             | **RA**  |              |
| Implementare una soluzione di **metriche e allerta** per le applicazioni ospitate                      | **RA**  |              |

---

## Gestione degli accessi e delle identità

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantire l'accessibilità alla **Console Cloud Temple** e all'API                                      |         | **RA**       |
| Gestire le **autorizzazioni** dei team Cloud Temple per l'infrastruttura certificata SecNumCloud       |         | **RA**       |
| Amministrare gli accessi alla **Console Cloud Temple** (utenti, ruoli, IAM)                             | **RA**  |              |
| Gestire gli accessi **all'interno delle istanze** (account OS, chiavi SSH, bastion)                    | **RA**  |              |
| Configurare un **repository di autenticazione esterno** (SSO, LDAP) per la Console                     | **RA**  | **C**        |

---

## Log

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservare e rendere disponibili i **log della piattaforma** VM instances *(8)*                       |         | **RA**       |
| Raccogliere, conservare e analizzare i **log di sistema e applicativi** delle istanze                 | **RA**  |              |

*(8) La durata di conservazione dei log della piattaforma è specificata nel contratto di servizio VM instances.*

---

## Documentazione e contrattualistica

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestire l'aspetto commerciale e contrattuale (preventivi, ordini, fatturazione)                        | **I**   | **RA**       |
| Gestire il monitoraggio contrattuale della prestazione (consegne, fatturazione)                         | **RA**  | **I**        |
| Garantire la manutenzione e la disponibilità della documentazione tecnica del servizio                  | **I**   | **RA**       |
| Aggiornare la **CMDB** relativa alle istanze distribuite nel proprio tenant                              | **RA**  |              |
| Mantenere aggiornata la politica di accesso alla Console e all'API                                       | **RA**  |              |

---

## Reversibilità

| Attività                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture di destinazione                | **RA**  | **I**        |
| Esportare i dati e le immagini delle istanze tramite l'API o gli strumenti messi a disposizione        | **RA**  | **I**        |
| Procedere allo smantellamento delle configurazioni in seguito alla risoluzione                          | **I**   | **RA**       |
| Effettuare la cancellazione sicura dei dati sui supporti di archiviazione e fornire un attestato       | **I**   | **RA**       |

---

> *Sono disponibili servizi professionali se si desidera delegare tutto o parte delle responsabilità elencate come a carico del cliente. Contattare il proprio referente commerciale Cloud Temple.*