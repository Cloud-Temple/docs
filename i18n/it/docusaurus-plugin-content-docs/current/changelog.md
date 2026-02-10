---
title: Tracciamento delle Modifiche
sidebar_position: 2
---

# Change Tracking

### 10 febbraio 2026: Aggiornamento dei prezzi di LLMaaS

- **LLMaaS**: Aggiornamento globale dei prezzi dell'API (Input: 1,9€/M, Output: 8€/M, Ragionatore: 8€/M) in tutta la documentazione tecnica e commerciale.

### 5 febbraio 2026: Approfondimenti sugli impegni di servizio (SLA)

- **Managed Kubernetes**: Aggiornamento completo e conclusione degli impegni di livello di servizio (SLA) per l'offerta Managed Kubernetes.

### 21 January 2026: Security Improvements and Translations

- **Console Management**: Updated international translations (English, German, Spanish, Italian) for security alerts in the management console.

### January 19, 2026: Managed Kubernetes and VPC Enhancements

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs within a Kubernetes cluster.
- **Managed Kubernetes**: KubeCost has been replaced with a more recent guide on **OpenCost**.
- **Network (VPC)**: Comprehensive documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, quick start guides, and tutorials.
- **Multilingual**: Full translation of the VPC service and new Kubernetes content into English, German, Spanish, and Italian.

### December 15, 2025: Stabilization and Multilingual Fixes

- **Multilingual (Terraform, LLMaaS, Harbor)**: Major correction of translations in Spanish, Italian, and German. Resolution of MDX syntax issues (empty code blocks, unescaped tags) that were preventing site compilation.
- **Multilingual (Images)**: Restoration of correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build**: Validation of deployment across all 5 supported languages.

### 11 dicembre 2025: Novità su Managed Kubernetes

- **Managed Kubernetes**: Aggiunta di un nuovo tutorial sull'utilizzo di **Gateway API** per la gestione avanzata del traffico.
- **Managed Kubernetes**: Aggiornamento della documentazione sulla gestione delle quote (Ceph) e ottimizzazione degli strumenti per il controllo dei costi (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues on the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### 20 November 2025: Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### 3 November 2025: Improvements to Kubernetes Tutorials

- **Managed Kubernetes**: Introduction of a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Review and enhancement of existing tutorials. Guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enriched to better address security, governance, and cost concerns, in response to the needs of RSSI and Procurement profiles.

### 28 October 2025: New Managed Kubernetes documentation and various improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service overview, technical concepts, a quick start guide, a first tutorial, and a RACI matrix. The content has been enriched to better meet the expectations of different user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### 18 ottobre 2025: Manutenzione e nuove documentazioni

- **LLMaaS**: Aggiunta di una nuova domanda alla FAQ per presentare la pagina di stato pubblico ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), che consente di monitorare in tempo reale la disponibilità e le prestazioni di ciascun modello.
- **Contrattuale**: Aggiornamento significativo dell'Accordo sul trattamento dei dati (DPA v2) per riflettere gli ultimi requisiti legali e di conformità.
- **Console**: Miglioramento e chiarimento della documentazione relativa alla gestione dei comandi.
- **Marketplace**: Aggiunta di un tutorial dettagliato sulla personalizzazione delle immagini delle macchine virtuali (VM) per creare modelli riutilizzabili.
- **LLMaaS**: Aggiunta di una guida per configurare l'estensione VSCode CLINE in modo da utilizzare direttamente dai modelli di linguaggio di Cloud Temple dall'editor.
- **Archiviazione oggetti (OSS)**: Aggiunta di dettagli sulla politica di ciclo di vita (Lifecycle) per la cancellazione dei dati.
- **Archiviazione oggetti (OSS)**: Aggiunta di una guida alla risoluzione dei problemi relativi agli errori di checksum (`XAmzContentSHA256Mismatch`) con AWS CLI e Terraform.
- **LLMaaS**: Aggiornamento dell'elenco dei modelli disponibili e ritraduzione di oltre 50 documenti per garantire coerenza.

### 14 agosto 2025: Miglioramenti e correzioni

- **LLMaaS**: Aggiornamento e chiarimento delle risposte della FAQ per affrontare in modo più efficace domande tecniche e strategiche. Aggiunta della FAQ alla navigazione.
- **Generale**: Correzione di diversi link di navigazione interna all'interno della documentazione per un'esperienza più fluida.

### Luglio 2025: Nuove funzionalità e aggiornamenti principali

- **Archiviazione Oggetti (OSS)**:
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