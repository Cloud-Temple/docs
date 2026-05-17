---
title: Tracciamento delle Modifiche
sidebar_position: 2
---

# Tracciamento delle Modifiche

### 4 maggio 2026 : Patch di sicurezza — immagine Docker (CVE Alpine)

- **Sicurezza (Docker)** : Aggiunta di `apk upgrade --no-cache` nello stage finale `nginx:stable-alpine` dei Dockerfile di produzione (`Dockerfile` e `Dockerfile.prebuilt`). Questo aggiornamento corregge tutte le CVE Critical e High rilevate da Harbor/Trivy sull'immagine `3.24.3`, relative ai pacchetti Alpine congelati: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. Il prossimo build produrrà un'immagine con tutti questi pacchetti alla loro ultima versione corretta.

### 30 Aprile 2026 : Specifiche sulle prestazioni di storage

- **Storage (IaaS VMware, OpenSource, Bare Metal)** : Aggiunta di limiti assoluti di IOPS e di larghezza di banda massima per tutte le classi di storage. Queste informazioni consentono di dimensionare meglio gli ambienti in base alle esigenze di prestazioni.

### 24 Aprile 2026 : Arricchimento della documentazione di backup IaaS OpenSource

- **IaaS OpenSource (Backup)** : Arricchimento della sezione backup con precisazioni sull'architettura tecnica (backup incrementale, impatto del Thick provisioning sullo storage), la sicurezza (crittografia AES-256, isolamento di rete), il monitoraggio e i vincoli di pianificazione. Traduzioni disponibili EN/DE/ES/IT.

### 20 Aprile 2026 : Aggiornamento del dimensionamento Database gestito

- **MariaDB & PostgreSQL gestiti** : Aggiornamento dei modelli di dimensionamento massimi disponibili per i servizi di database gestiti.

### 17 Aprile 2026 : Istanze VM — documentazione illustrata, tutorial e traduzioni

- **Istanze VM — Arricchimento documentale** : Rifacimento completo e illustrazione della documentazione Istanze VM. La guida di avvio rapido (`quickstart.md`) copre ora l'intero percorso utente illustrato: accesso alla sezione, elenco delle VM, procedura guidata di creazione in 9 passaggi (famiglia di istanze, zona di disponibilità, template OS, modello, nome/backup, Cloud Init, dischi, rete, riepilogo) e gestione delle 4 schede (Informazioni, Dischi, Rete, Snapshot).
- **Istanze VM — Tutorial** : Creazione di 3 tutorial dedicati in una cartella `tutorials/`: (1) **Creare la propria prima VM** (procedura guidata completa illustrata + Cloud Init + disco aggiuntivo), (2) **Gestire i dischi** (aggiunta dalla console + partizionamento Linux), (3) **Creare e gestire gli snapshot** (creazione, ripristino, eliminazione + best practice e confronto snapshot/backup). La barra di navigazione laterale viene aggiornata con 3 voci individuali nella categoria Tutorial.

### 17 Aprile 2026 : Documenti contrattuali, traduzioni e armonizzazione terminologica

- **Documenti contrattuali — Ristrutturazione** : La pagina `contracts.md` è riorganizzata con la gerarchia dei documenti contrattuali in alto nella pagina, inclusa la lista di priorità dei 6 documenti (CGVU, Convenzione SecNumCloud, Convenzione specifica ¹, PAS ², CPU, DPA) e un riquadro di precisazioni contrattuali.

### 16 aprile 2026 : Riprogettazione della navigazione, documenti contrattuali e aggiornamenti

- **Navigazione — Compute** : Raggruppamento di VM Instances (preview), IaaS OpenSource e IaaS VMware in un'unica categoria **Compute** nella navigazione (PR #277).
- **Navigazione — Network** : Raggruppamento di VPC (preview) e Private Backbone in un'unica categoria **Network** nella navigazione.
- **Documenti contrattuali** : Ristrutturazione completa della documentazione contrattuale — creazione di una pagina hub `/contracts` (condizioni generali, condizioni particolari, convenzioni di servizio SecNumCloud, SLA VM instances) e di una pagina hub `/shared-responsibility` (matrici RACI per servizio: IaaS, S3, PaaS, Kubernetes, LLMaaS, Rete). Il menu laterale contrattuale è sostituito da una colonna dedicata **Contrattuale** nel footer. Traduzioni disponibili EN/DE/ES/IT.
- **VM Instances** : Aggiornamento dell'impegno di livello di servizio (SLA) dal 99,9 % al 99,95 %.
- **IaaS OpenSource** : Aggiunta di una nota sulla durata massima di conservazione dei backup (massimo 24 mesi, migrazione verso Glacier prevista nel T1 2027).

### 15 Aprile 2026 : Nuova documentazione VM instances (Cloud Public)

- **VM instances** : Pubblicazione della documentazione iniziale del servizio VM instances (in anteprima), nuova offerta di macchine virtuali condivise di Cloud Temple. La documentazione copre la panoramica del servizio, i concetti tecnici (classi di servizio Development/General Purpose/Performance, modelli predefiniti e personalizzati, storage, rete VPC, backup), nonché una guida introduttiva completa. Il servizio è organizzato in una nuova categoria **Cloud Public** nella navigazione.

### 15 Aprile 2026 : Miglioramento della documentazione IaaS VMware — metriche del cluster
- **IaaS VMware** : Aggiunta di una documentazione dettagliata sulle metriche visualizzate nella vista di un cluster VMware dalla Console Cloud Temple. Copre i tre grafici della memoria del cluster: **Memoria allocata** (quantità totale allocata alle VM), **Memoria consumata** (memoria fisica effettivamente utilizzata dalle VM) e **Allocazione nel caso peggiore** (proiezione del consumo massimo simultaneo), con la descrizione precisa di ciò che ciascun indicatore rappresenta per anticipare le esigenze di risorse.

### 15 Aprile 2026 : Documentazione Managed MariaDB, Managed PostgreSQL e correzioni multilingue

- **Managed MariaDB** : Pubblicazione della documentazione iniziale del servizio Managed MariaDB (en preview) : presentazione del servizio, concetti tecnici (architectures StandAlone et Distributed), guida introduttiva. 
- **Managed PostgreSQL** : Pubblicazione della documentazione iniziale del servizio Managed PostgreSQL (en preview) : presentazione del servizio, concetti tecnici, guida introduttiva.
- **Corrections multilingues (images)** : Correzione dei riferimenti alle immagini nelle traduzioni delle sezioni Managed Kubernetes e Managed MariaDB per tutte le lingue (EN, DE, ES, IT) — conversione dei percorsi relativi `./images/` in percorsi assoluti `@site/docs/...` per garantire un rendering corretto in tutte le lingue.
- **Corrections liens brisés** : Risoluzione di diversi link interrotti nella documentazione : riferimenti alle licenze LLMaaS, link alla console nel tutorial rclone (OSS), link IAM nella documentazione di rete (EN), link relativi nella sezione Terraform (EN).

### 15 Aprile 2026 : Nuovo modulo Gestore dei costi

- **Console (Gestore dei costi)** : Aggiunta della documentazione completa del nuovo modulo di monitoraggio dei consumi accessibile dalla Console Cloud Temple. Include la dashboard, il consumo globale (con proiezione a fine mese), la ripartizione per prodotto e per servizio, i dettagli di fatturazione riga per riga e il catalogo dei prezzi.

### 26 Marzo 2026 : Aggiornamento dell'elenco dei subappaltatori (DPA)

- **Contrattuale** : Aggiornamento dell'Allegato Contrattuale sui Dati Personali (DPA) - revisione dell'elenco dei subappaltatori (retrait de Microsoft Azure et Amazon Web Services, modification de l'activité pour Iron Mountain) e aggiunta della data di autorizzazione.

### 19 marzo 2026 : Miglioramenti alla documentazione IaaS e Terraform

- **IaaS OpenSource** : Aggiunta di una guida completa per creare una macchina virtuale. Il tutorial copre i tre metodi di distribuzione disponibili (modello, importazione XVA, Marketplace) con istruzioni passo passo e raccomandazioni sulle migliori pratiche.
- **IaaS VMware** : Aggiunta di una pagina che raccoglie tutti i tutorial disponibili per facilitare la navigazione e la scoperta delle guide.
- **Terraform** : Nuova sezione che spiega come ricevere automaticamente le notifiche delle nuove versioni del Provider Terraform tramite GitHub.

### 19 Marzo 2026 : Aggiornamento DPA e conformità HDS

- **Contrattuale** : Aggiornamento dell'Allegato Contrattuale sui Dati Personali (DPA) alla versione 1.0. Integrazione degli ultimi requisiti della certificazione HDS (Hosting di Dati Sanitari) e aggiornamento dell'elenco dei sub-fornitori autorizzati. Traduzione completa in inglese, tedesco, spagnolo e italiano.

### 21 Febbraio 2026 : Miglioramento del SEO

- **SEO** : Correzione dell'URL di produzione (`https://docs.cloud-temple.com`) e del percorso di base (`/`) nella configurazione di Docusaurus, garantendo URL canonici corretti per l'indicizzazione su Google.
- **Sitemap** : Abilitazione della generazione automatica della sitemap (`/sitemap.xml`) per migliorare il crawling e l'indicizzazione da parte dei motori di ricerca.
- **Robots.txt** : Aggiunta di un file `robots.txt` che consente il crawling completo del sito e punta alla sitemap.

### 21 Febbraio 2026 : Concetti di rete avanzati e miglioramenti multilingue

- **Rete (Internet)** : Nuova pagina di **concetti avanzati** che documenta le comunità BGP e il controllo della Local Preference sul backbone Internet Cloud Temple (AS33930). Include una guida alla configurazione con esempio Bird.
- **LLMaaS** : Aggiornamento del catalogo dei modelli e aggiunta del ciclo di vita dei modelli. Aggiunta dei modelli LTS (Long Term Support).
- **Console (Sicurezza)** : Miglioramento della qualità delle traduzioni degli avvisi di sicurezza (inglese, tedesco, spagnolo, italiano).
- **Multilingue** : Traduzione della nuova pagina concetti avanzati di rete nelle 4 lingue (en, de, es, it) e miglioramento globale della qualità delle traduzioni esistenti.
- **IaaS Bare Metal** : Aggiunta di maggiori dettagli sul volume BFS (Boot from SAN) nella guida di avvio : il Volume 1 è dedicato all'installazione del SO, non condivisibile all'interno della stessa AZ, con raccomandazione di memorizzare i dati su un volume LUN aggiuntivo.
- **Storage Oggetti (OSS)** : Aggiunta di una pagina **FAQ** che copre l'accesso S3, le whitelist IP, i link pre-firmati e gli scenari di utilizzo consigliati.

### 10 Febbraio 2026 : Aggiornamento delle tariffe LLMaaS

- **LLMaaS** : Aggiornamento globale delle tariffe dell'API (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) in tutta la documentazione tecnica e commerciale.

### 5 Febbraio 2026 : Chiarimenti sugli impegni di servizio (SLA)

- **Managed Kubernetes** : Aggiornamento completo e finalizzazione degli impegni di livello di servizio (SLA) per l'offerta Managed Kubernetes.

### 21 gennaio 2026 : Miglioramenti e traduzioni di sicurezza

- **Console Management** : Aggiornamento delle traduzioni internazionali (inglese, tedesco, spagnolo, italiano) per gli avvisi di sicurezza nella console di gestione.

### 19 Gennaio 2026 : Estensione Managed Kubernetes e VPC

- **Managed Kubernetes** : Aggiunta del supporto per i nodi **Bare Metal** e le **GPU** (NVIDIA).
- **Managed Kubernetes** : Nuova guida sull'utilizzo delle GPU in un cluster Kubernetes.
- **Managed Kubernetes** : Sostituzione di KubeCost con una guida più recente su **OpenCost**.
- **Network (VPC)** : Documentazione completa del servizio Virtual Private Cloud (VPC), inclusi i concetti di alta disponibilità (HA), le guide di avvio e i tutorial.
- **Multilingue** : Traduzione completa del servizio VPC e dei nuovi contenuti Kubernetes in inglese, tedesco, spagnolo e italiano.

### 15 Dicembre 2025 : Stabilizzazione e correzioni multilingue

- **Multilingue (Terraform, LLMaaS, Harbor)** : Correzione importante delle traduzioni in spagnolo, italiano e tedesco. Risoluzione dei problemi di sintassi MDX (blocchi di codice vuoti, tag non sfuggiti) che impedivano la compilazione del sito.
- **Multilingue (Immagini)** : Ripristino dei percorsi delle immagini corretti nelle versioni italiana e tedesca per le sezioni Bastion e IaaS VMware.
- **Build** : Validazione del deployment per tutte le 5 lingue supportate.

### 11 Dicembre 2025: Novità Managed Kubernetes

- **Managed Kubernetes**: Aggiunta di un nuovo tutorial sull'utilizzo di **Gateway API** per la gestione avanzata del traffico.
- **Managed Kubernetes**: Aggiornamento della documentazione sulla gestione delle quote (Ceph) e ottimizzazione degli strumenti di gestione dei costi (OpenCost).

### 22 Novembre 2025 : Novità LLMaaS e miglioramenti globali

- **LLMaaS (OCR)** : Aggiunta di una documentazione completa per **DeepSeek-OCR**, il nostro nuovo modello specializzato nell'analisi dei documenti (PDF, immagini), in grado di estrarre testo strutturato, tabelle e formule matematiche.
- **Multilingue** : Risoluzione di problemi di accessibilità nelle versioni italiana e tedesca della documentazione.
- **Qualità** : Correzione della visualizzazione dei blocchi di codice nei tutorial LLMaaS e ripristino delle immagini mancanti nella guida di avvio IaaS VMware (versione italiana).

### 20 novembre 2025 : Aggiornamento maggiore PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Ristrutturazione e aggiornamento completo della documentazione OpenShift, che include nuovi screenshot e una traduzione integrale in inglese, spagnolo, tedesco e italiano per supportare la nostra espansione internazionale.

### 3 Novembre 2025 : Miglioramento dei tutorial Kubernetes

- **Managed Kubernetes** : Aggiunta di un nuovo tutorial sul deployment continuo con **ArgoCD** e l'approccio GitOps.
- **Managed Kubernetes** : Revisione e miglioramento dei tutorial esistenti. Le guide sul deployment, sulla rete, sulla gestione dei permessi (Capsule) e sul backup (Kasten) sono state arricchite per affrontare meglio le tematiche di sicurezza, governance e costi, in risposta alle aspettative dei profili CISO e Acquirente.

### 28 Ottobre 2025 : Nuova documentazione per Managed Kubernetes e miglioramenti vari

- **Managed Kubernetes (PR #193 & améliorations)**: Aggiunta di una documentazione completa per il nuovo servizio Managed Kubernetes. La sezione include una presentazione del servizio, i concetti tecnici, una guida di avvio, un primo tutorial e la matrice di responsabilità (RACI). Il contenuto è stato arricchito per rispondere meglio alle aspettative dei diversi profili di utenti.
- **Archiviazione Oggetti (PR #190, #189)**: Aggiunta di due nuovi tutorial per il servizio di Archiviazione Oggetti: uno sulla gestione degli accessi ai bucket S3 e un altro sull'utilizzo di Restic per i backup.
- **Contrattuale (PR #191)**: Correzione e aggiornamento del documento "Data Processing Agreement" (DPA).

### 18 Ottobre 2025 : Manutenzione e nuove documentazioni

- **LLMaaS** : Aggiunta di una nuova domanda alla FAQ per presentare la pagina di stato pubblica ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), che consente di monitorare in tempo reale la disponibilità e le prestazioni di ciascun modello.
- **Contrattuale** : Aggiornamento significativo del Data Processing Agreement (DPA v2) per riflettere gli ultimi requisiti legali e di conformità.
- **Console** : Miglioramento e chiarimento della documentazione relativa alla gestione degli ordini.
- **Marketplace** : Aggiunta di un tutorial dettagliato sulla personalizzazione delle immagini delle macchine virtuali (VM) per creare template riutilizzabili.
- **LLMaaS** : Aggiunta di una guida per configurare l'estensione VSCode CLINE per utilizzare i modelli linguistici di Cloud Temple direttamente dall'editor.
- **Archiviazione Oggetti (OSS)** : Aggiunta di precisazioni sulla politica del ciclo di vita (Lifecycle) per l'eliminazione dei dati.
- **Archiviazione Oggetti (OSS)** : Aggiunta di una guida alla risoluzione dei problemi per gli errori di checksum (`XAmzContentSHA256Mismatch`) con AWS CLI e Terraform.
- **LLMaaS** : Aggiornamento dell'elenco dei modelli disponibili e ritraduzione di oltre 50 documenti per garantire la coerenza.

### 14 Agosto 2025 : Miglioramenti e correzioni

- **LLMaaS** : Aggiornamento e chiarimento delle risposte della FAQ per rispondere meglio alle domande tecniche e strategiche. Aggiunta della FAQ alla navigazione.
- **Generale** : Correzione di diversi link di navigazione interni in tutta la documentazione per un'esperienza più fluida.

### Luglio 2025 : Novità e aggiornamenti principali

- **Archiviazione Oggetti (OSS)** :
  - Rifacimento completo della sezione tutorial con guide dedicate per strumenti popolari : AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer e il SDK Python Boto3.
  - Aggiunta di precisazioni sui concetti di account di archiviazione e blocco degli oggetti (Object Lock).
- **IaaS OpenSource** :
  - Aggiunta di una documentazione dettagliata sulla gestione dell'Alta Disponibilità (HA) per i pool di risorse e le macchine virtuali.
- **Console** :
  - Aggiornamento della pagina degli avvisi di sicurezza con le ultime vulnerabilità.
- **Rete** :
  - Aggiunta di nuovi screenshot per illustrare la configurazione della connettività IPv6.

### 29 Giugno 2025 : finalizzazione della documentazione LLMaaS

- Validazione della suite di test completa.
- Correzione e validazione dei pipeline RAG con FAISS e Qdrant.
- Arricchimento dei tutorial con spiegazioni tecniche più dettagliate.
- Aggiunta di una sezione sulla sicurezza dei prompt e sul ciclo di vita dei modelli nei concetti.
- Miglioramento della pagina di spiegazione del RAG con diagrammi e dettagli sui modelli di embedding.
- Aggiornamento della documentazione dell'API, della guida introduttiva e della presentazione del servizio.
- Aggiunta del pricing per l'endpoint di trascrizione audio.
- Aggiunta del piano previsionale del ciclo di vita dei modelli.
- Aggiunta della matrice di responsabilità per l'offerta LLMaaS.