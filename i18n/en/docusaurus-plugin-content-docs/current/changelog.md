---
title: Change Tracking
sidebar_position: 2
---

# Change Tracking

### September 10, 2026: Updated LLMaaS Documentation

- **Select and track your models**: Direct access to the [catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) to view available models, support end-of-life dates, and recommended migrations.
- **Get started with the service**: Updated quickstart guides and integration examples to facilitate initial usage and integration into your applications.
- **Understand usage and billing**: Clarified documentation on batch processing, document retrieval, and reranking billing terms.

### August 20, 2026: Harmonization of the maturity label for managed databases

- **Navigation — Databases**: Removal of the **Beta** badge from the **Managed MariaDB** and **Managed PostgreSQL** entries in the sidebar menu and on the Databases page cards. Both services were simultaneously displaying two contradictory maturity labels: *Beta* in the navigation, and *Preview* on their product page titles. Only the **Preview** badge is retained, as the single source of truth for the maturity level of these services. Translations available EN/DE/ES/IT.

### August 17, 2026: Security Alert Updates

- **Security**: New [avis de sécurité](./console/security/security_alarms.md) are available for VMware, OpenShift, XCP-ng, and Dell environments to help you identify affected products and recommended actions.

### August 14, 2026: Access Management Clarification

- **Console — Access Management** : The [identity and permissions guide](./console/iam/concepts.md) distinguishes between actions to be performed at the organization level and at each tenant level, to facilitate access assignment and owner management.

### August 7, 2026: Organization View Guide

- **Console — Organization** : The [getting started guide](./console/console_quickstart.md) introduces the organization view and tenant management. The documentation also details the role of owners and the steps to upgrade their access.

### July 15, 2026: Clarification on Object Storage Encryption

- **Object Storage (Security)** : The section on data at rest encryption (D@RE) now specifies that the service uses AES 256-bit encryption certified FIPS 140-3, via the RSA BSAFE Crypto-J software library in version 7.x.

### April 30, 2026: Storage Performance Details

- **Storage (VMware IaaS, OpenSource, Bare Metal)**: Added absolute IOPS and maximum bandwidth caps for all storage classes. This information enables better environment sizing based on performance requirements.

### April 24, 2026: Enrichment of the IaaS OpenSource Backup Documentation

- **IaaS OpenSource (Backup)** : Enhancement of the backup section with details on the technical architecture (incremental backup, impact of Thick provisioning on storage), security (AES-256 encryption, network isolation), monitoring, and scheduling constraints. Translations available in EN/DE/ES/IT.

### April 20, 2026: Managed Database Sizing Update

- **Managed MariaDB & PostgreSQL**: Updated maximum sizing templates available for managed database services.

### April 17, 2026: VM Instances — illustrated documentation, tutorials, and translations

- **VM Instances — Documentation Enhancement**: Complete overhaul and illustration of the VM Instances documentation. The getting started guide (`quickstart.md`) now covers the entire illustrated user journey: accessing the section, VM list, 9-step creation wizard (instance family, availability zone, OS template, blueprint, name/backup, Cloud Init, disks, network, summary), and management of the 4 tabs (Information, Disks, Network, Snapshots).
- **VM Instances — Tutorials**: Creation of 3 dedicated tutorials in a `tutorials/` folder: (1) **Create your first VM** (complete illustrated wizard + Cloud Init + additional disk), (2) **Manage disks** (adding from the console + Linux partitioning), (3) **Take and manage snapshots** (creation, restoration, deletion + best practices and snapshot/backup comparison). The sidebar navigation is updated with 3 individual entries in the Tutorials category.

### April 17, 2026: Contractual Documents, Translations, and Terminology Harmonization

- **Contractual Documents — Restructuring** : The `contracts.md` page has been reorganized with the contractual document hierarchy at the top of the page, including the priority list of the 6 documents (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) and a contractual clarifications callout.

### April 16, 2026: Navigation redesign, contractual documents, and updates

- **Navigation — Compute**: Grouping VM Instances (preview), OpenSource IaaS, and VMware IaaS under a single **Compute** category in the navigation (PR #277).
- **Navigation — Network**: Grouping VPC (preview) and Private Backbone under a single **Network** category in the navigation.
- **Contractual Documents**: Complete restructuring of contractual documentation — creation of a hub page `/contracts` (general terms, specific terms, SecNumCloud service agreements, VM instances SLA) and a hub page `/shared-responsibility` (RACI matrices by service: IaaS, S3, PaaS, Kubernetes, LLMaaS, Network). The contractual sidebar menu is replaced by a dedicated **Contractual** column in the footer. Translations available in EN/DE/ES/IT.
- **VM Instances**: Service Level Agreement (SLA) updated from 99.9% to 99.95%.
- **OpenSource IaaS**: Added a note regarding the maximum backup retention period (maximum 24 months, migration to Glacier planned for Q1 2027).

### April 15, 2026: New VM instances documentation (Cloud Public)

- **VM instances** : Initial documentation for the VM instances service (in preview) is now live, a new shared virtual machine offering from Cloud Temple. The documentation covers a service overview, technical concepts (Development/General Purpose/Performance service classes, predefined and custom templates, storage, VPC network, backup), as well as a complete getting started guide. The service is organized under a new **Cloud Public** category in the navigation.

### April 15, 2026: IaaS VMware Documentation Improvement — Cluster Metrics

- **IaaS VMware**: Added detailed documentation on the metrics displayed in the VMware cluster view from the Cloud Temple Console. Covers the three cluster memory graphs: **Allocated Memory** (total amount allocated to VMs), **Consumed Memory** (physical memory actually used by VMs), and **Worst-Case Allocation** (projection of maximum simultaneous consumption), with a precise description of what each metric represents to anticipate resource requirements.

### April 15, 2026: Managed MariaDB, Managed PostgreSQL Documentation

- **Managed MariaDB**: Initial documentation for the Managed MariaDB service (en preview) published: service overview, technical concepts (architectures StandAlone et Distributed), getting started guide. 
- **Managed PostgreSQL**: Initial documentation for the Managed PostgreSQL service (en preview) published: service overview, technical concepts, getting started guide.

### April 15, 2026: New Cost Manager Module

- **Console (Cost Manager)** : Added complete documentation for the new consumption tracking module accessible from the Cloud Temple Console. Covers the dashboard, overall consumption (with end-of-month projection), breakdown by product and service, line-by-line billing details, and the price catalog.

### March 26, 2026 : Update to the Subprocessor List (DPA)

- **Contractual** : Update to the Data Processing Agreement (DPA) - revision of the subprocessor list (removal of Microsoft Azure and Amazon Web Services, modification of the processing activity for Iron Mountain) and addition of the authorization date.

### March 19, 2026: IaaS and Terraform Documentation Improvements

- **Open Source IaaS**: Added a comprehensive guide for creating a virtual machine. The tutorial covers the three available deployment methods (template, XVA import, Marketplace) with step-by-step instructions and best practice recommendations.
- **VMware IaaS**: Added a page consolidating all available tutorials to facilitate navigation and guide discovery.
- **Terraform**: New section explaining how to automatically receive notifications for new versions of the Terraform Provider via GitHub.

### March 19, 2026: DPA Update and HDS Compliance

- **Contractual**: Update of the Data Processing Agreement (DPA) to version 1.0. Integration of the latest requirements of the HDS (Health Data Hosting) certification and update of the list of authorized sub-processors. Full translation into English, German, Spanish, and Italian.

### February 21, 2026: Advanced Network Concepts

- **Network (Internet)**: New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with a Bird example.
- **LLMaaS**: Updated model catalog and addition of the model lifecycle. Added LTS (Long Term Support) models.
- **IaaS Bare Metal**: Added details on the BFS (Boot from SAN) volume in the boot guide: Volume 1 is dedicated to OS installation, not shareable within the same AZ, with a recommendation to store data on an additional LUN volume.
- **Object Storage (OSS)**: Added a **FAQ** page covering S3 access, IP whitelists, pre-signed URLs, and recommended use cases.

### February 10, 2026: LLMaaS Pricing Update

- **LLMaaS**: Comprehensive update to API pricing (Input: €1.9/M, Output: €8/M, Reasoner: €8/M) across all technical and commercial documentation.

### February 5, 2026: Clarifications on Service Level Agreements (SLA)

- **Managed Kubernetes**: Full update and finalization of Service Level Agreements (SLA) for the Managed Kubernetes offering.

### January 19, 2026: Managed Kubernetes and VPC Extension

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs in a Kubernetes cluster.
- **Managed Kubernetes**: Replaced KubeCost with a more recent guide on **OpenCost**.
- **Network (VPC)**: Complete documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, getting started guides, and tutorials.

### December 11, 2025: Managed Kubernetes Updates

- **Managed Kubernetes** : Added a new tutorial on using **Gateway API** for advanced traffic management.
- **Managed Kubernetes** : Updated documentation on quota management (Ceph) and optimization of cost management tools (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.

### 20 November 2025 : Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)** : Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### November 3, 2025: Kubernetes Tutorial Improvements

- **Managed Kubernetes** : Added a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes** : Reviewed and improved existing tutorials. The guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enhanced to better address security, governance, and cost concerns, in response to the expectations of CISO and Procurement profiles.

### October 28, 2025: New Managed Kubernetes Documentation and Various Improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service overview, technical concepts, a getting started guide, an introductory tutorial, and a responsibility matrix (RACI). The content has been enhanced to better address the needs of various user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### October 18, 2025 : Maintenance and new documentation

- **LLMaaS** : Added a new FAQ question to introduce the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), allowing you to monitor the availability and performance of each model in real time.
- **Contractual** : Major update to the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console** : Improved and clarified documentation regarding order management.
- **Marketplace** : Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS** : Added a guide to configure the CLINE VSCode extension to use Cloud Temple language models directly from the editor.
- **Object Storage (OSS)** : Added details on the lifecycle policy for data deletion.
- **Object Storage (OSS)** : Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS** : Updated the list of available models and retranslated over 50 documents to ensure consistency.

### August 14, 2025: Improvements and Fixes

- **LLMaaS**: Updated and clarified FAQ answers to better address technical and strategic questions. Added the FAQ to the navigation.

### July 2025: Major Features and Updates

- **Object Storage (OSS)** :
  - Complete overhaul of the tutorials section with dedicated guides for popular tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, and the Boto3 Python SDK.
  - Added clarifications on storage account concepts and Object Lock.
- **OpenSource IaaS** :
  - Added detailed documentation on High Availability (HA) management for resource pools and virtual machines.
- **Console** :
  - Updated the security alerts page with the latest vulnerabilities.
- **Network** :
  - Added new screenshots to illustrate IPv6 connectivity configuration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Validation of the complete test suite.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enhancement of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle in the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, getting started guide, and service overview.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the projected model lifecycle schedule.
- Addition of the responsibility matrix for the LLMaaS offering.