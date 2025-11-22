---
title: Änderungsverfolgung
sidebar_position: 2
---

# Change Tracking

### November 22, 2025: New LLMaaS Features and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues in the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### November 20, 2025: Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### 3 November 2025: Enhancements to Kubernetes Tutorials

- **Managed Kubernetes**: Introduction of a new tutorial on continuous deployment using **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Review and enhancement of existing tutorials. Guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enriched to better address security, governance, and cost concerns, in response to the needs of RSSI and Procurement profiles.

### 28 October 2025: New Managed Kubernetes Documentation and Various Improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes an overview of the service, technical concepts, a quick start guide, a first tutorial, and a RACI matrix. The content has been enriched to better meet the expectations of different user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### 18 October 2025: Maintenance and New Documentation

- **LLMaaS**: Added a new question to the FAQ to introduce the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), enabling real-time monitoring of the availability and performance of each model.
- **Contractual**: Major update to the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console**: Improved and clarified documentation regarding order management.
- **Marketplace**: Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS**: Added a guide to configure the VSCode CLINE extension for using Cloud Temple's language models directly from the editor.
- **Object Storage (OSS)**: Added clarifications regarding the lifecycle policy for data deletion.
- **Object Storage (OSS)**: Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS**: Updated the list of available models and retranslated over 50 documents to ensure consistency.

### August 14, 2025: Improvements and Fixes

- **LLMaaS**: Updated and clarified FAQ responses to better address technical and strategic questions. Added FAQ to navigation.
- **General**: Fixed several internal navigation links throughout the documentation for a smoother experience.

### July 2025: New Features and Major Updates

- **Object Storage (OSS)**:
    - Complete overhaul of the tutorials section with dedicated guides for popular tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, and the Python Boto3 SDK.
    - Added clarifications on storage account concepts and object locking (Object Lock).
- **OpenSource IaaS**:
    - Added detailed documentation on managing High Availability (HA) for resource pools and virtual machines.
- **Console**:
    - Updated the security alerts page with the latest vulnerabilities.
- **Networking**:
    - Added new screenshots to illustrate IPv6 connectivity configuration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Completion and validation of the full test suite.
- Correction and validation of RAG pipelines using FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Inclusion of the projected model lifecycle roadmap.
- Addition of the responsibility matrix for the LLMaaS offering.