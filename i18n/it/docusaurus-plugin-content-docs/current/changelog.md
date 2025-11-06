---
title: Tracciamento delle Modifiche
sidebar_position: 2
---

# Change Tracking

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
- **LLMaaS**: Aggiunta di una guida per configurare l'estensione VSCode CLINE e utilizzare direttamente dai modelli linguistici di Cloud Temple all'interno dell'editor.
- **Archiviazione oggetti (OSS)**: Aggiunta di dettagli sulla politica del ciclo di vita (Lifecycle) per la cancellazione dei dati.
- **Archiviazione oggetti (OSS)**: Aggiunta di una guida alla risoluzione dei problemi relativi agli errori di checksum (`XAmzContentSHA256Mismatch`) con AWS CLI e Terraform.
- **LLMaaS**: Aggiornamento dell'elenco dei modelli disponibili e ritrascrizione di oltre 50 documenti per garantire coerenza.

### 14 agosto 2025: Miglioramenti e correzioni

- **LLMaaS**: Aggiornamento e chiarimento delle risposte della FAQ per affrontare in modo più efficace domande tecniche e strategiche. Aggiunta della FAQ alla navigazione.
- **Generale**: Correzione di diversi collegamenti interni nella documentazione per un'esperienza più fluida.

### Luglio 2025: Nuove funzionalità e aggiornamenti principali

- **Archiviazione oggetti (OSS)**:
    - Riscrittura completa della sezione tutorial con guide dedicate a strumenti popolari: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer e SDK Python Boto3.
    - Aggiunta di informazioni dettagliate sui concetti di account di archiviazione e sul blocco degli oggetti (Object Lock).
- **IaaS OpenSource**:
    - Aggiunta di una documentazione dettagliata sulla gestione dell'Alta Disponibilità (HA) per i pool di risorse e le macchine virtuali.
- **Console**:
    - Aggiornamento della pagina degli avvisi di sicurezza con le ultime vulnerabilità rilevate.
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