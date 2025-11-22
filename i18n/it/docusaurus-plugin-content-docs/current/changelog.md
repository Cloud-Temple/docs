---
title: Tracciamento delle modifiche
sidebar_position: 2
---

# Change Tracking

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues on the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### 20 November 2025: Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### 3 novembre 2025: Miglioramenti ai tutorial Kubernetes

- **Kubernetes gestito**: Aggiunta di un nuovo tutorial sul deployment continuo con **ArgoCD** e l'approccio GitOps.
- **Kubernetes gestito**: Revisione e miglioramento dei tutorial esistenti. I guide sul deployment, sulla rete, sulla gestione dei permessi (Capsule) e sul backup (Kasten) sono state arricchite per affrontare in modo più efficace tematiche legate alla sicurezza, alla governance e ai costi, in risposta alle esigenze dei profili RSSI e Acquirente.

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
- **Generale**: Correzione di diversi collegamenti interni nella documentazione per un'esperienza più fluida.

### Luglio 2025: Nuove funzionalità e aggiornamenti principali

- **Archiviazione oggetti (OSS)**:
    - Riscrittura completa della sezione tutorial con guide dedicate a strumenti popolari: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer e SDK Python Boto3.
    - Aggiunta di ulteriori dettagli sui concetti di account di archiviazione e sul blocco degli oggetti (Object Lock).
- **IaaS OpenSource**:
    - Aggiunta di una documentazione dettagliata sulla gestione dell'Alta Disponibilità (HA) per i pool di risorse e le macchine virtuali.
- **Console**:
    - Aggiornamento della pagina delle avvisi di sicurezza con le ultime vulnerabilità rilevate.
- **Rete**:
    - Aggiunta di nuove schermate per illustrare la configurazione della connettività IPv6.

### June 29, 2025: Finalization of LLMaaS documentation

- Completion and validation of the full test suite.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the projected model lifecycle roadmap.
- Addition of the responsibility matrix for the LLMaaS offering.