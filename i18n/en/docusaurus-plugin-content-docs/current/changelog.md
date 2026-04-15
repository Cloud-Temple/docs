---
title: Change Log
sidebar_position: 2
---

# Change Log

### April 15, 2026: New VM instances documentation (Cloud Public)

- **VM instances**: Initial documentation release for the VM instances service (in preview), Cloud Temple's new shared virtual machine offering. The documentation covers the service overview, technical concepts (Development/General Purpose/Performance service classes, predefined and custom flavors, storage, VPC networking, backup), and a complete getting started guide. The service is organised under a new **Cloud Public** category in the navigation.

### April 15, 2026: IaaS VMware Documentation Improvement — Cluster Metrics

- **IaaS VMware**: Added detailed documentation on the metrics displayed in the VMware cluster view from the Cloud Temple Console. Covers the three cluster memory graphs: **Provisioned Memory** (total memory allocated to VMs), **Used Memory** (physical memory actively consumed by VMs) and **Worst-Case Allocation** (projection of maximum simultaneous consumption), with a precise description of what each indicator represents to help anticipate resource needs.

### April 15, 2026: Managed MariaDB, Managed PostgreSQL Documentation and Multilingual Fixes

- **Managed MariaDB**: Initial release of the Managed MariaDB service documentation (preview): service overview, technical concepts (StandAlone and Distributed architectures), quick start guide.
- **Managed PostgreSQL**: Initial release of the Managed PostgreSQL service documentation (preview): service overview, technical concepts, quick start guide.
- **Multilingual Fixes (images)**: Fixed image references in translations for the Managed Kubernetes and Managed MariaDB sections across all languages (EN, DE, ES, IT) — converting relative `./images/` paths to absolute `@site/docs/...` paths ensuring correct rendering in all languages.
- **Broken Link Fixes**: Resolved several broken links: LLMaaS licence references, console link in the rclone tutorial (OSS), IAM link in the network documentation (EN), relative links in the Terraform section (EN).

### April 15, 2026: New Cost Manager Module

- **Console (Cost Manager)**: Added complete documentation for the new consumption tracking module accessible from the Cloud Temple Console. Covers the dashboard, global consumption (with end-of-month projection), breakdown by product and service, line-by-line billing details, and the price catalog.

### March 26, 2026: Sub-processors List Update (DPA)

- **Contractual**: Update of the Data Processing Agreement (DPA) - revised the list of sub-processors (removal of Microsoft Azure and Amazon Web Services, modification of activity for Iron Mountain) and addition of the authorization date. Propagation of changes in English, German, Spanish, and Italian.

### March 19, 2026: IaaS and Terraform Documentation Improvements

- **IaaS OpenSource**: Added a complete guide for creating a virtual machine. The tutorial covers the three available deployment methods (template, XVA import, Marketplace) with step-by-step instructions and best practice recommendations.
- **IaaS VMware**: Added an index page listing all available tutorials for easier navigation and guide discovery.
- **Terraform**: New section explaining how to automatically receive notifications for new Terraform Provider versions via GitHub.

### March 19, 2026: DPA Update and HDS Compliance

- **Contractual**: Update of the Data Processing Agreement (DPA) to version 1.0. Integration of the latest requirements for HDS (Health Data Hosting) certification and update of the authorized sub-processors list. Complete translation in English, German, Spanish, and Italian.

### February 21, 2026: Advanced Networking Concepts and Multilingual Enhancements

- **Network (Internet)**: New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with a Bird example.
- **LLMaaS**: Updated model catalog with the addition of model lifecycle management. Introduced LTS (Long Term Support) models.
- **Console (Security)**: Improved quality of security alert translations (English, German, Spanish, Italian).
- **Multilingual**: Translation of the new advanced networking concepts page into four languages (en, de, es, it), along with overall enhancement of existing translation quality.
- **IaaS Bare Metal**: Added clarifications regarding the BFS (Boot from SAN) volume in the quick start guide: Volume 1 is dedicated to OS installation, non-shareable within the same AZ, with recommendation to store data on an additional LUN volume.
- **Object Storage (OSS)**: Added a new **FAQ** page covering S3 access, IP whitelisting, pre-signed links, and recommended usage scenarios.

### February 10, 2026: LLMaaS Pricing Update

- **LLMaaS**: Global API pricing update (Input: €1.9/M, Output: €8/M, Reasoner: €8/M) across all technical and commercial documentation.

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

- **Multilingual (Terraform, LLMaaS, Harbor)**: Major fixes to translations in Spanish, Italian, and German. Resolved MDX syntax issues (empty code blocks, unescaped tags) that were preventing site compilation.
- **Multilingual (Images)**: Restored correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build**: Validation of deployment across all 5 supported languages.

### December 11, 2025: Managed Kubernetes Updates

- **Managed Kubernetes**: Added a new tutorial on using **Gateway API** for advanced traffic management.
- **Managed Kubernetes**: Updated documentation on quota management (Ceph) and cost management tool optimizations (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues in the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the Italian version of the VMware IaaS quick start guide.

### November 20, 2025: Major PaaS OpenShift Update

- **OpenShift PaaS (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### November 3, 2025: Kubernetes Tutorials Enhancements

- **Managed Kubernetes**: Introduction of a new tutorial on continuous deployment using **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Review and enhancement of existing tutorials. Guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enriched to better address security, governance, and cost concerns, in response to the needs of RSSI and Procurement profiles.

### October 28, 2025: New Managed Kubernetes Documentation and Various Improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service overview, technical concepts, a quick start guide, a first tutorial, and a RACI matrix. Content has been enhanced to better meet the expectations of various user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### October 18, 2025: Maintenance and New Documentation

- **LLMaaS**: Added a new FAQ entry to introduce the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), enabling real-time monitoring of the availability and performance of each model.
- **Contractual**: Major update to the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console**: Improved and clarified documentation regarding order management.
- **Marketplace**: Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS**: Added a guide to configure the VSCode CLINE extension for using Cloud Temple's language models directly from the editor.
- **Object Storage (OSS)**: Added clarifications on the lifecycle policy for data deletion.
- **Object Storage (OSS)**: Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS**: Updated the list of available models and retranslated over 50 documents to ensure consistency.

### August 14, 2025: Improvements and Fixes

- **LLMaaS**: Updated and clarified FAQ responses to better address technical and strategic questions. Added the FAQ to the navigation.
- **General**: Fixed several internal navigation links throughout the documentation for a smoother experience.

### July 2025: New Features and Major Updates

- **Object Storage (OSS)**:
  - Complete overhaul of the tutorials section with dedicated guides for popular tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, and the Python Boto3 SDK.
  - Added clarifications on storage account concepts and object locking (Object Lock).
- **OpenSource IaaS**:
  - Added detailed documentation on High Availability (HA) management for resource pools and virtual machines.
- **Console**:
  - Updated the security alerts page with the latest vulnerabilities.
- **Networking**:
  - Added new screenshots to illustrate IPv6 connectivity configuration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Full test suite validation.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle within the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, quick start guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the projected model lifecycle roadmap.
- Addition of the responsibility matrix for the LLMaaS offering.
