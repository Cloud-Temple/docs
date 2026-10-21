---
title: Registro delle Modifiche
sidebar_position: 2
---

# Registro delle Modifiche

### 21 Ottobre 2026 : Nuova console Cloud Temple (v5.0.0)

- **Console** : Le [note di rilascio dei prodotti](./changelog_produits.md) presentano le versioni 4.52.1 a 5.0.0, inclusa la nuova console : rifacimento completo dell'interfaccia con tema scuro, navigazione semplificata, nuova pagina di dettaglio delle macchine virtuali, pagine Calcolo e Archiviazione ripensate e esploratore di file Object Storage. La vecchia versione della console resta accessibile fino alla fine di novembre 2026 dalla finestra « Novità ».

### 12 Ottobre 2026 : Note di rilascio della Console fino alla v4.52.0

- **Console** : Le [note di rilascio dei prodotti](./changelog_produits.md) presentano le novità e le correzioni delle versioni 4.50.0, 4.51.0 e 4.52.0, in particolare le evoluzioni della rete VPC, del deployment cloud-init e del ripristino delle macchine virtuali.

### 10 Settembre 2026 : Documentazione LLMaaS aggiornata

- **Scegliere e monitorare i propri modelli** : Accesso diretto al [catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) per consultare i modelli disponibili, le scadenze di supporto e le migrazioni consigliate.
- **Iniziare a usare il servizio** : Guide di avvio ed esempi di integrazione aggiornati per facilitare i primi utilizzi e l'integrazione nelle vostre applicazioni.
- **Comprendere gli utilizzi e la fatturazione** : Documentazione chiarita sui trattamenti in batch, la ricerca documentale e le modalità di fatturazione del reranking.

### 20 Agosto 2026 : Armonizzazione dell'etichetta di maturità dei database gestiti

- **Navigazione — Databases** : Rimozione del badge **Beta** dalle voci **MariaDB Gestito** e **PostgreSQL Gestito** del menu laterale e dalle schede della pagina Databases. I due servizi mostravano simultaneamente due etichette di maturità contraddittorie : *Beta* nella navigazione, *Preview* sul titolo delle loro pagine prodotto. Viene conservato solo il badge **Preview**, come unica fonte di verità sul livello di maturità di questi servizi. Traduzioni disponibili EN/DE/ES/IT.

### 17 Agosto 2026 : Aggiornamento degli avvisi di sicurezza

- **Sicurezza** : Sono disponibili nuovi [avvisi di sicurezza](./console/security/security_alarms.md) per gli ambienti VMware, OpenShift, XCP-ng e Dell, per aiutarvi a identificare i prodotti interessati e le azioni raccomandate.

### 14 Agosto 2026 : Chiarimento sulla gestione degli accessi

- **Console — Gestione degli accessi** : La [guida alle identità e ai permessi](./console/iam/concepts.md) distingue le azioni da eseguire a livello di organizzazione e di ciascun tenant, per facilitare l'attribuzione degli accessi e la gestione dei proprietari.

### 7 Agosto 2026 : Guida alla vista organizzazione

- **Console — Organizzazione** : La [guida di avvio](./console/console_quickstart.md) presenta la vista organizzazione e la gestione dei tenant. La documentazione precisa inoltre il ruolo dei proprietari e le procedure per far evolvere i loro accessi.

### 15 Luglio 2026 : Precisione sulla cifratura Object Storage

- **Object Storage (Sicurezza)** : La sezione sulla cifratura dei dati a riposo (D@RE) precisa ora che il servizio utilizza una cifratura AES 256 bit certificata FIPS 140-3, tramite la libreria software RSA BSAFE Crypto-J in versione 7.x.

### 30 Aprile 2026 : Precisioni sulle prestazioni di archiviazione

- **Archiviazione (IaaS VMware, OpenSource, Bare Metal)** : Aggiunta dei limiti assoluti di IOPS e della banda passante massima per tutte le classi di archiviazione. Queste informazioni permettono di dimensionare meglio gli ambienti in base alle esigenze di prestazioni.

### 24 Aprile 2026 : Arricchimento della documentazione backup IaaS OpenSource

- **IaaS OpenSource (Backup)** : Arricchimento della sezione backup con precisioni sull'architettura tecnica (backup incrementale, impatto del Thick provisioning sull'archiviazione), la sicurezza (cifratura AES-256, isolamento di rete), il monitoring e i vincoli di pianificazione. Traduzioni disponibili EN/DE/ES/IT.

### 20 Aprile 2026 : Aggiornamento del dimensionamento Managed Database

- **Managed MariaDB & PostgreSQL** : Aggiornamento dei template di dimensionamento massimo disponibili per i servizi di database gestiti.

### 17 Aprile 2026 : VM Instances — documentazione illustrata, tutorial e traduzioni

- **VM Instances — Arricchimento documentale** : Rifacimento completo e illustrazione della documentazione VM Instances. La guida di avvio (`quickstart.md`) copre ora l'intero percorso utente illustrato : accesso alla sezione, elenco delle VM, wizard di creazione in 9 passaggi (famiglia di istanza, zona di disponibilità, template OS, template, nome/backup, Cloud Init, dischi, rete, riepilogo), e gestione delle 4 schede (Informazioni, Dischi, Rete, Snapshot).
- **VM Instances — Tutorial** : Creazione di 3 tutorial dedicati in una cartella `tutorials/` : (1) **Creare la propria prima VM** (wizard completo illustrato + Cloud Init + disco aggiuntivo), (2) **Gestire i dischi** (aggiunta dalla console + partizionamento Linux), (3) **Creare e gestire gli snapshot** (creazione, ripristino, eliminazione + buone pratiche e confronto snapshot/backup). La navigazione laterale è aggiornata con 3 voci individuali nella categoria Tutorial.

### 17 Aprile 2026 : Documenti contrattuali, traduzioni e armonizzazione terminologica

- **Documenti contrattuali — Riorganizzazione** : La pagina `contracts.md` è riorganizzata con la gerarchia dei documenti contrattuali in cima alla pagina, includendo l'elenco di priorità dei 6 documenti (CGVU, Convenzione SecNumCloud, Convenzione specifica ¹, PAS ², CPU, DPA) e un riquadro di precisazioni contrattuali.

### 16 Aprile 2026 : Rifacimento della navigazione, documenti contrattuali e aggiornamenti

- **Navigazione — Compute** : Raggruppamento di VM Instances (preview), IaaS OpenSource e IaaS VMware sotto un'unica categoria **Compute** nella navigazione (PR #277).
- **Navigazione — Network** : Raggruppamento di VPC (preview) e Private Backbone sotto un'unica categoria **Network** nella navigazione.
- **Documenti contrattuali** : Riorganizzazione completa della documentazione contrattuale — creazione di una pagina hub `/contracts` (condizioni generali, condizioni particolari, convenzioni di servizio SecNumCloud, SLA VM instances) e di una pagina hub `/shared-responsibility` (matrici RACI per servizio : IaaS, S3, PaaS, Kubernetes, LLMaaS, Rete). Il menu laterale contrattuale è sostituito da una colonna dedicata **Contrattuale** nel footer. Traduzioni disponibili EN/DE/ES/IT.
- **VM Instances** : Aggiornamento dell'impegno di livello di servizio (SLA) dal 99,9 % al 99,95 %.
- **IaaS OpenSource** : Aggiunta di una nota sulla durata massima di ritenzione dei backup (24 mesi massimo, migrazione verso Glacier prevista nel T1 2027).

### 15 Aprile 2026 : Nuova documentazione VM instances (Cloud Public)

- **VM instances** : Pubblicazione della documentazione iniziale del servizio VM instances (in preview), nuova offerta di macchine virtuali mutualizzate di Cloud Temple. La documentazione copre la visione d'insieme del servizio, i concetti tecnici (classi di servizio Development/General Purpose/Performance, template predefiniti e custom, archiviazione, rete VPC, backup), nonché una guida di avvio completa. Il servizio è organizzato sotto una nuova categoria **Cloud Public** nella navigazione.

### 15 Aprile 2026 : Miglioramento della documentazione IaaS VMware — metriche cluster

- **IaaS VMware** : Aggiunta di una documentazione dettagliata sulle metriche visualizzate nella vista di un cluster VMware dalla Console Cloud Temple. Copre i tre grafici di memoria del cluster : **Memoria allocata** (quantità totale allocata alle VM), **Memoria consumata** (memoria fisica effettivamente utilizzata dalle VM) e **Allocazione nel caso peggiore** (proiezione del consumo massimo simultaneo), con la descrizione precisa di ciò che ciascun indicatore rappresenta per anticipare i fabbisogni di risorse.

### 15 Aprile 2026 : Documentazione Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB** : Pubblicazione della documentazione iniziale del servizio Managed MariaDB (in preview) : presentazione del servizio, concetti tecnici (architetture StandAlone e Distributed), guida di avvio.
- **Managed PostgreSQL** : Pubblicazione della documentazione iniziale del servizio Managed PostgreSQL (in preview) : presentazione del servizio, concetti tecnici, guida di avvio.

### 15 Aprile 2026 : Nuovo modulo Gestionario dei costi

- **Console (Gestionario dei costi)** : Aggiunta della documentazione completa del nuovo modulo di monitoraggio dei consumi accessibile dalla Console Cloud Temple. Copre la dashboard, il consumo globale (con proiezione di fine mese), la ripartizione per prodotto e per servizio, i dettagli di fatturazione riga per riga e il catalogo dei prezzi.

### 26 Marzo 2026 : Aggiornamento dell'elenco dei subappaltatori (DPA)

- **Contrattuale** : Aggiornamento dell'Allegato Contrattuale sui Dati a Carattere Personale (DPA) - revisione dell'elenco dei subappaltatori (rimozione di Microsoft Azure e Amazon Web Services, modifica dell'attività per Iron Mountain) e aggiunta della data di autorizzazione.

### 19 Marzo 2026 : Miglioramenti documentazione IaaS e Terraform

- **IaaS OpenSource** : Aggiunta di una guida completa per creare una macchina virtuale. Il tutorial copre i tre metodi di deployment disponibili (modello, import XVA, Marketplace) con istruzioni passo passo e raccomandazioni di buone pratiche.
- **IaaS VMware** : Aggiunta di una pagina che raccoglie l'insieme dei tutorial disponibili per facilitare la navigazione e la scoperta delle guide.
- **Terraform** : Nuova sezione che spiega come ricevere automaticamente le notifiche delle nuove versioni del Provider Terraform tramite GitHub.

### 19 Marzo 2026 : Aggiornamento DPA e conformità HDS

- **Contrattuale** : Aggiornamento dell'Allegato Contrattuale sui Dati a Carattere Personale (DPA) alla versione 1.0. Integrazione degli ultimi requisiti della certificazione HDS (Hébergeur de Données de Santé) e aggiornamento dell'elenco dei subappaltatori autorizzati. Traduzione completa in inglese, tedesco, spagnolo e italiano.

### 21 Febbraio 2026 : Concetti avanzati di rete

- **Rete (Internet)** : Nuova pagina di **concetti avanzati** che documenta le comunità BGP e il controllo della Local Preference sul backbone Internet Cloud Temple (AS33930). Include una guida di configurazione con esempio Bird.
- **LLMaaS** : Aggiornamento del catalogo dei modelli e aggiunta del ciclo di vita dei modelli. Aggiunta dei modelli LTS (Long Term Support).
- **IaaS Bare Metal** : Aggiunta di precisioni sul volume BFS (Boot from SAN) nella guida di avvio : il Volume 1 è dedicato all'installazione dell'OS, non condivisibile all'interno della stessa AZ, con raccomandazione di archiviare i dati su un volume LUN aggiuntivo.
- **Archiviazione Oggetti (OSS)** : Aggiunta di una pagina **FAQ** che copre l'accesso S3, le whitelist IP, i link pre-firmati e gli scenari d'uso raccomandati.

### 10 Febbraio 2026 : Aggiornamento delle tariffe LLMaaS

- **LLMaaS** : Aggiornamento delle condizioni tariffarie dell'API. Le tariffe in vigore sono disponibili nel [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

### 5 Febbraio 2026 : Precisioni sugli impegni di servizio (SLA)

- **Managed Kubernetes** : Aggiornamento completo e finalizzazione degli impegni di livello di servizio (SLA) per l'offerta Managed Kubernetes.

### 19 Gennaio 2026 : Estensione Managed Kubernetes e VPC

- **Managed Kubernetes** : Aggiunta del supporto per i nodi **Bare Metal** e i **GPUs** (NVIDIA).
- **Managed Kubernetes** : Nuovo tutorial sull'utilizzo dei GPU in un cluster Kubernetes.
- **Managed Kubernetes** : Sostituzione di KubeCost con una guida più recente su **OpenCost**.
- **Network (VPC)** : Documentazione completa del servizio Virtual Private Cloud (VPC), includendo i concetti di alta disponibilità (HA), le guide di avvio e i tutorial.

### 11 Dicembre 2025 : Novità Managed Kubernetes

- **Managed Kubernetes** : Aggiunta di un nuovo tutorial sull'utilizzo di **Gateway API** per la gestione avanzata del traffico.
- **Managed Kubernetes** : Aggiornamento della documentazione sulla gestione dei quota (Ceph) e ottimizzazione degli strumenti di gestione dei costi (OpenCost).

### 22 Novembre 2025 : Novità LLMaaS e miglioramenti globali

- **LLMaaS (OCR)** : Aggiunta di una documentazione completa per **DeepSeek-OCR**, il nostro nuovo modello specializzato nell'analisi di documenti (PDF, immagini), in grado di estrarre testo strutturato, tabelle e formule matematiche.

### 20 Novembre 2025 : Aggiornamento maggiore PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Rifacimento e aggiornamento completo della documentazione OpenShift, includendo nuove capture dello schermo e una traduzione integrale in inglese, spagnolo, tedesco e italiano per accompagnare la nostra espansione internazionale.

### 3 Novembre 2025 : Miglioramento dei tutorial Kubernetes

- **Managed Kubernetes** : Aggiunta di un nuovo tutorial sul deployment continuo con **ArgoCD** e l'approccio GitOps.
- **Managed Kubernetes** : Revisione e miglioramento dei tutorial esistenti. Le guide sul deployment, la rete, la gestione dei permessi (Capsule) e il backup (Kasten) sono state arricchite per meglio affrontare le questioni di sicurezza, governance e costo, in risposta alle aspettative dei profili RSSI e Acquirente.

### 28 Ottobre 2025 : Nuova documentazione Managed Kubernetes e miglioramenti vari

- **Managed Kubernetes (PR #193 & miglioramenti)**: Aggiunta di una documentazione completa per il nuovo servizio Managed Kubernetes. La sezione include una presentazione del servizio, i concetti tecnici, una guida di avvio, un primo tutorial e la matrice di responsabilità (RACI). Il contenuto è stato arricchito per rispondere meglio alle aspettative dei diversi profili di utenti.
- **Archiviazione Oggetti (PR #190, #189)**: Aggiunta di due nuovi tutorial per il servizio di Archiviazione Oggetti : uno sulla gestione degli accessi ai bucket S3 e un altro sull'utilizzo di Restic per i backup.
- **Contrattuale (PR #191)**: Correzione e aggiornamento del documento "Data Processing Agreement" (DPA).

### 18 Ottobre 2025 : Manutenzione e nuove documentazioni

- **LLMaaS** : Aggiunta di una nuova domanda alla FAQ per presentare la pagina di stato pubblica ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), che permette di monitorare in tempo reale la disponibilità e le prestazioni di ciascun modello.
- **Contrattuale** : Aggiornamento maggiore del Data Processing Agreement (DPA v2) per riflettere gli ultimi requisiti legali e di conformità.
- **Console** : Miglioramento e chiarimento della documentazione relativa alla gestione degli ordini.
- **Marketplace** : Aggiunta di un tutorial dettagliato sulla personalizzazione delle immagini delle macchine virtuali (VM) per creare template riutilizzabili.
- **LLMaaS** : Aggiunta di una guida per configurare l'estensione VSCode CLINE per utilizzare i modelli di linguaggio di Cloud Temple direttamente dall'editor.
- **Archiviazione Oggetti (OSS)** : Aggiunta di precisioni sulla politica di ciclo di vita (Lifecycle) per l'eliminazione dei dati.
- **Archiviazione Oggetti (OSS)** : Aggiunta di una guida di troubleshooting per gli errori di checksum (`XAmzContentSHA256Mismatch`) con AWS CLI e Terraform.
- **LLMaaS** : Aggiornamento dell'elenco dei modelli disponibili e ritraduzione di oltre 50 documenti per garantire la coerenza.

### 14 Agosto 2025 : Miglioramenti e correzioni

- **LLMaaS** : Aggiornamento e chiarimento delle risposte della FAQ per meglio affrontare le domande tecniche e strategiche. Aggiunta della FAQ alla navigazione.

### Luglio 2025: Novità e aggiornamenti principali

- **Storage Oggetti (OSS)** :
  - Ristrutturazione completa della sezione tutorial con guide dedicate per strumenti popolari : AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer e il SDK Python Boto3.
  - Aggiunta di dettagli sui concetti di account di storage e il blocco degli oggetti (Object Lock).
- **IaaS OpenSource** :
  - Aggiunta di una documentazione dettagliata sulla gestione dell'Alta Disponibilità (HA) per i pool di risorse e le macchine virtuali.
- **Console** :
  - Aggiornamento della pagina delle alert di sicurezza con le ultime vulnerabilità.
- **Rete** :
  - Aggiunta di nuove capture screen per illustrare la configurazione della connettività IPv6.

### 29 Giugno 2025: finalizzazione della documentazione LLMaaS

- Validazione della suite di test completa.
- Correzione e validazione dei pipeline RAG with FAISS e Qdrant.
- Arricchimento dei tutorial con spiegazioni tecniche più dettagliate.
- Aggiunta di una sezione sulla sicurezza dei prompt e il ciclo di vita dei modelli nei concetti.
- Miglioramento della pagina di spiegazione del RAG con schemi e dettagli sui modelli di embedding.
- Aggiornamento della documentazione dell'API, della guida di avvio e della presentazione del servizio.
- Aggiunta del pricing per l'endpoint Transcription Audio.
- Aggiunta della pianificazione previsionale del ciclo di vita dei modelli.
- Aggiunta della matrice di responsabilità per l'offerta LLMaaS.
