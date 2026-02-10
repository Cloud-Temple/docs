---
title: Änderungsverfolgung
sidebar_position: 2
---

# Change Tracking

### February 10, 2026: LLMaaS Pricing Update

- **LLMaaS**: Global update of API pricing (Input: €1.90/M, Output: €8.00/M, Reasoner: €8.00/M) across all technical and commercial documentation.

### February 5, 2026: Clarifications on Service Level Agreements (SLAs)

- **Managed Kubernetes**: Complete update and finalization of Service Level Agreements (SLAs) for the Managed Kubernetes offering.

### January 21, 2026: Security Improvements and Translations

- **Console Management**: Updated international translations (English, German, Spanish, Italian) for security alerts in the management console.

### January 19, 2026: Managed Kubernetes and VPC Enhancements

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs within a Kubernetes cluster.
- **Managed Kubernetes**: Replaced KubeCost with a more up-to-date guide on **OpenCost**.
- **Network (VPC)**: Comprehensive documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, quick start guides, and tutorials.
- **Multilingual**: Full translation of the VPC service and new Kubernetes content into English, German, Spanish, and Italian.

### December 15, 2025: Stabilization and Multilingual Fixes

- **Multilingual (Terraform, LLMaaS, Harbor)**: Major correction of translations in Spanish, Italian, and German. Resolution of MDX syntax issues (empty code blocks, unescaped tags) that were preventing site compilation.
- **Multilingual (Images)**: Restoration of correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build**: Validation of deployment across all 5 supported languages.

### 11. Dezember 2025: Neuerungen bei Managed Kubernetes

- **Managed Kubernetes**: Hinzufügen eines neuen Tutorials zur Nutzung der **Gateway API** für die erweiterte Verkehrssteuerung.
- **Managed Kubernetes**: Aktualisierung der Dokumentation zur Verwaltung von Quoten (Ceph) und Optimierung der Kostenverwaltungstools (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues in the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### November 20, 2025: Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### 3 November 2025: Improvements to Kubernetes Tutorials

- **Managed Kubernetes**: Introduction of a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Review and enhancement of existing tutorials. Guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enriched to better address security, governance, and cost concerns, in response to the needs of RSSI and Procurement profiles.

### October 28, 2025: New Managed Kubernetes Documentation and Various Improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service overview, technical concepts, a quick start guide, a first tutorial, and a RACI matrix. Content has been enhanced to better meet the expectations of different user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### 18 October 2025: Maintenance and New Documentation

- **LLMaaS**: Added a new question to the FAQ to introduce the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), enabling real-time monitoring of the availability and performance of each model.
- **Contractual**: Major update to the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console**: Improved and clarified documentation regarding order management.
- **Marketplace**: Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS**: Added a guide to configure the VSCode CLINE extension for using Cloud Temple's language models directly from the editor.
- **Object Storage (OSS)**: Added clarifications on the lifecycle policy for data deletion.
- **Object Storage (OSS)**: Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS**: Updated the list of available models and retranslated over 50 documents to ensure consistency.

### 14. August 2025: Verbesserungen und Korrekturen

- **LLMaaS**: Aktualisierung und Klärung der FAQ-Antworten, um technische und strategische Fragen besser zu adressieren. Hinzufügen der FAQ zur Navigation.
- **Allgemein**: Korrektur mehrerer interner Navigationslinks innerhalb der Dokumentation für eine flüssigere Benutzererfahrung.

### Juli 2025: Neuerungen und wichtige Updates

- **Objektspeicher (OSS)**:
    - Komplette Überarbeitung des Bereichs „Tutorials“ mit speziellen Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python SDK Boto3.
    - Ergänzung von Erklärungen zu Konzepten wie Speicherkonten und Objektverschlüsselung (Object Lock).
- **IaaS OpenSource**:
    - Hinzufügen einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole**:
    - Aktualisierung der Sicherheitswarnungsseite mit den neuesten bekannten Schwachstellen.
- **Netzwerk**:
    - Hinzufügen neuer Bildschirmfotos zur Veranschaulichung der IPv6-Verbindungs-Konfiguration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Completion and validation of the full test suite.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Inclusion of the projected model lifecycle timeline.
- Addition of the responsibility matrix for the LLMaaS offering.