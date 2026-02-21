---
title: Tracciamento delle Modifiche
sidebar_position: 2
---

# Change Tracking

### 21 February 2026: Advanced Networking Concepts and Multilingual Enhancements

- **Network (Internet)**: New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with Bird example.
- **LLMaaS**: Updated model catalog and added model lifecycle management. Introduced LTS (Long Term Support) models.
- **Console (Security)**: Improved quality of security alert translations (English, German, Spanish, Italian).
- **Multilingual**: Translation of the new advanced networking concepts page into 4 languages (en, de, es, it), and overall enhancement of existing translation quality.
- **IaaS Bare Metal**: Added clarifications regarding the BFS (Boot from SAN) volume in the quick start guide: Volume 1 is dedicated to OS installation, not shareable within the same AZ, with recommendation to store data on an additional LUN volume.
- **Object Storage (OSS)**: Added a new **FAQ** page covering S3 access, IP whitelisting, pre-signed links, and recommended usage scenarios.

### 10 febbraio 2026: Aggiornamento dei prezzi LLMaaS

- **LLMaaS**: Aggiornamento globale dei prezzi dell'API (Input: 1,9€/M, Output: 8€/M, Ragionatore: 8€/M) in tutta la documentazione tecnica e commerciale.

### 5 febbraio 2026: Approfondimenti sugli impegni di servizio (SLA)

- **Managed Kubernetes**: Aggiornamento completo e conclusione degli impegni di livello di servizio (SLA) per l'offerta Managed Kubernetes.

### 21 January 2026: Security Improvements and Translations

- **Console Management**: Updated international translations (English, German, Spanish, Italian) for security alerts in the management console.

### January 19, 2026: Managed Kubernetes and VPC Enhancements

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs within a Kubernetes cluster.
- **Managed Kubernetes**: Replaced KubeCost with a more recent guide on **OpenCost**.
- **Network (VPC)**: Comprehensive documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, quick start guides, and tutorials.
- **Multilingual**: Full translation of the VPC service and new Kubernetes content into English, German, Spanish, and Italian.

### December 15, 2025: Stabilization and Multilingual Fixes

- **Multilingual (Terraform, LLMaaS, Harbor)**: Major fixes to translations in Spanish, Italian, and German. Resolved MDX syntax issues (empty code blocks, unescaped tags) that were preventing site compilation.
- **Multilingual (Images)**: Restored correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build**: Validation of deployment across all 5 supported languages.

### 11 dicembre 2025: Novità Managed Kubernetes

- **Managed Kubernetes**: Aggiunta di un nuovo tutorial sull'utilizzo della **Gateway API** per la gestione avanzata del traffico.
- **Managed Kubernetes**: Aggiornamento della documentazione sulla gestione delle quote (Ceph) e ottimizzazione degli strumenti per la gestione dei costi (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues on the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### 20 November 2025: Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### 3 November 2025: Kubernetes Tutorials Improvements

- **Managed Kubernetes**: Introduction of a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Review and enhancement of existing tutorials. Guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enriched to better address security, governance, and cost concerns, in response to the needs of RSSI and Procurement profiles.

### 28 ottobre 2025: Nuova documentazione per Kubernetes gestito e miglioramenti vari

- **Kubernetes gestito (PR #193 e miglioramenti)**: Aggiunta di una documentazione completa per il nuovo servizio Kubernetes gestito. La sezione include una presentazione del servizio, i concetti tecnici, una guida introduttiva, un primo tutorial e la matrice di responsabilità (RACI). Il contenuto è stato arricchito per rispondere meglio alle aspettative di diversi profili utente.
- **Archiviazione oggetti (PR #190, #189)**: Aggiunta di due nuovi tutorial per il servizio di Archiviazione oggetti: uno sulla gestione degli accessi ai bucket S3 e un altro sull'utilizzo di Restic per le operazioni di backup.
- **Contrattuale (PR #191)**: Correzione e aggiornamento del documento "Data Processing Agreement" (DPA).

### 18 ottobre 2025: Manutenzione e nuove documentazioni

- **LLMaaS**: Aggiunta di una nuova domanda alla FAQ per presentare la pagina di stato pubblico ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), che consente di monitorare in tempo reale la disponibilità e le prestazioni di ciascun modello.
- **Contrattuale**: Aggiornamento significativo dell'Accordo sul trattamento dei dati (DPA v2) per riflettere gli ultimi requisiti legali e di conformità.
- **Console**: Miglioramento e chiarimento della documentazione relativa alla gestione dei comandi.
- **Marketplace**: Aggiunta di un tutorial dettagliato sulla personalizzazione delle immagini delle macchine virtuali (VM) per creare modelli riutilizzabili.
- **LLMaaS**: Aggiunta di una guida per configurare l'estensione VSCode CLINE in modo da utilizzare direttamente dai modelli linguistici di Cloud Temple dall'editor.
- **Archiviazione oggetti (OSS)**: Aggiunta di dettagli sulla politica del ciclo di vita (Lifecycle) per l'eliminazione dei dati.
- **Archiviazione oggetti (OSS)**: Aggiunta di una guida alla risoluzione dei problemi relativi agli errori di checksum (`XAmzContentSHA256Mismatch`) con AWS CLI e Terraform.
- **LLMaaS**: Aggiornamento dell'elenco dei modelli disponibili e ritrascrizione di oltre 50 documenti per garantire coerenza.

### 14 agosto 2025: Miglioramenti e correzioni

- **LLMaaS**: Aggiornamento e chiarimento delle risposte della FAQ per affrontare in modo più efficace domande tecniche e strategiche. Aggiunta della FAQ alla navigazione.
- **Generale**: Correzione di diversi link di navigazione interna all'interno della documentazione per un'esperienza più fluida.

### Luglio 2025: Nuove funzionalità e aggiornamenti principali

- **Archiviazione oggetti (OSS)**:
    - Riscrittura completa della sezione tutorial con guide dedicate a strumenti popolari: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer e SDK Python Boto3.
    - Aggiunta di informazioni dettagliate sui concetti di account di archiviazione e sul blocco degli oggetti (Object Lock).
- **IaaS OpenSource**:
    - Aggiunta di una documentazione dettagliata sulla gestione dell'Alta Disponibilità (HA) per i pool di risorse e le macchine virtuali.
- **Console**:
    - Aggiornamento della pagina delle avvisi di sicurezza con le ultime vulnerabilità rilevate.
- **Rete**:
    - Aggiunta di nuove schermate per illustrare la configurazione della connettività IPv6.

### June 29, 2025: Finalization of LLMaaS documentation

- Full test suite validation.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the forecasted model lifecycle timeline.
- Addition of the responsibility matrix for the LLMaaS offering.