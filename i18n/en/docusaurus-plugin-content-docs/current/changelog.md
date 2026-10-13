---
title: Change Tracking
sidebar_position: 2
---

# Change Tracking

### October 12, 2026: Console Release Notes up to v4.52.0

- **Console**: The [product release notes](./changelog_produits.md) present the new features and fixes for versions 4.50.0, 4.51.0, and 4.52.0, including updates to VPC networking, cloud-init deployment, and virtual machine restoration.

### September 10, 2026: LLMaaS Documentation Updated

- **Choosing and Tracking Your Models**: Direct access to the [catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) to view available models, support deadlines, and recommended migrations.
- **Getting Started with the Service**: Updated getting started guides and integration examples to facilitate initial usage and integration into your applications.
- **Understanding Usage and Billing**: Clarified documentation on batch processing, document search, and billing methods for reranking.

### August 20, 2026: Harmonization of Managed Database Maturity Labels

- **Navigation — Databases**: Removal of the **Beta** badge from the **Managed MariaDB** and **Managed PostgreSQL** entries in the sidebar menu and on the cards on the Databases page. The two services were simultaneously displaying two contradictory maturity labels: *Beta* in the navigation and *Preview* on the title of their product pages. Only the **Preview** badge is retained, as the single source of truth regarding the maturity level of these services. Translations available EN/DE/ES/IT.

### August 17, 2026: Security Alerts Update

- **Security**: New [security advisories](./console/security/security_alarms.md) are available for VMware, OpenShift, XCP-ng, and Dell environments, to help you identify the affected products and recommended actions.

### August 14, 2026: Clarification of Access Management

- **Console — Access Management**: The [identities and permissions guide](./console/iam/concepts.md) distinguishes actions to be performed at the organization level and for each tenant, to facilitate access assignment and owner management.

### August 7, 2026: Organization View Guide

- **Console — Organization**: The [getting started guide](./console/console_quickstart.md) presents the organization view and tenant management. The documentation also clarifies the role of owners and the steps to evolve their access rights.

### July 15, 2026: Clarification on Object Storage Encryption

- **Object Storage (Security)**: The section on data-at-rest encryption (D@RE) now specifies that the service uses FIPS 140-3 certified 256-bit AES encryption, via the RSA BSAFE Crypto-J software library version 7.x.

### April 30, 2026: Storage Performance Clarifications

- **Storage (IaaS VMware, OpenSource, Bare Metal)**: Addition of absolute IOPS and maximum bandwidth ceilings for all storage classes. This information allows for better sizing of environments based on performance requirements.

### April 24, 2026: Enrichment of IaaS OpenSource Backup Documentation

- **IaaS OpenSource (Backup)**: Enrichment of the backup section with details on technical architecture (incremental backup, impact of Thick provisioning on storage), security (AES-256 encryption, network isolation), monitoring, and scheduling constraints. Translations available EN/DE/ES/IT.

### April 20, 2026: Managed Database Sizing Update

- **Managed MariaDB & PostgreSQL**: Update of the maximum sizing templates available for managed database services.

### April 17, 2026: VM Instances — Illustrated Documentation, Tutorials, and Translations

- **VM Instances — Documentation Enrichment**: Complete overhaul and illustration of the VM Instances documentation. The getting started guide (`quickstart.md`) now covers the entire illustrated user journey: accessing the section, VM list, 9-step creation wizard (instance family, availability zone, OS template, template, name/backup, Cloud Init, disks, network, summary), and management of the 4 tabs (Information, Disks, Network, Snapshots).
- **VM Instances — Tutorials**: Creation of 3 dedicated tutorials in a `tutorials/` folder: (1) **Create your first VM** (complete illustrated wizard + Cloud Init + additional disk), (2) **Manage disks** (addition from the console + Linux partitioning), (3) **Create and manage snapshots** (creation, restoration, deletion + best practices and snapshot/backup comparison). The sidebar navigation is updated with 3 individual entries in the Tutorials category.

### April 17, 2026: Contractual Documents, Translations, and Terminology Harmonization

- **Contractual Documents — Restructuring**: The `contracts.md` page is reorganized with the hierarchy of contractual documents at the top of the page, including the priority list of the 6 documents (Terms and Conditions, SecNumCloud Agreement, Specific Agreement ¹, PAS ², CPU, DPA) and a contractual clarification box.

### April 16, 2026: Navigation Redesign, Contractual Documents, and Updates

- **Navigation — Compute**: Grouping of VM Instances (preview), IaaS OpenSource, and IaaS VMware under a single **Compute** category in the navigation (PR #277).
- **Navigation — Network**: Grouping of VPC (preview) and Private Backbone under a single **Network** category in the navigation.
- **Contractual Documents**: Complete restructuring of contractual documentation — creation of a hub page `/contracts` (general terms, special terms, SecNumCloud service agreements, VM instances SLA) and a hub page `/shared-responsibility` (RACI matrices per service: IaaS, S3, PaaS, Kubernetes, LLMaaS, Network). The contractual sidebar menu is replaced by a dedicated **Contractual** column in the footer. Translations available EN/DE/ES/IT.
- **VM Instances**: Update of the Service Level Agreement (SLA) from 99.9% to 99.95%.
- **IaaS OpenSource**: Addition of a note on the maximum backup retention period (maximum 24 months, migration to Glacier planned for Q1 2027).

### April 15, 2026: New VM Instances Documentation (Public Cloud)

- **VM instances**: Publication of the initial documentation for the VM instances service (in preview), Cloud Temple's new shared virtual machine offering. The documentation covers the service overview, technical concepts (Development/General Purpose/Performance service classes, predefined and custom templates, storage, VPC networking, backup), as well as a complete getting started guide. The service is organized under a new **Cloud Public** category in the navigation.

### April 15, 2026: IaaS VMware Documentation Improvement — Cluster Metrics

- **IaaS VMware**: Addition of detailed documentation on the metrics displayed in the VMware cluster view from the Cloud Temple Console. Covers the three cluster memory graphs: **Allocated Memory** (total quantity allocated to VMs), **Consumed Memory** (physical memory actually used by VMs), and **Worst-case Allocation** (projection of maximum simultaneous consumption), with a precise description of what each indicator represents to anticipate resource needs.

### April 15, 2026: Managed MariaDB, Managed PostgreSQL Documentation

- **Managed MariaDB**: Publication of the initial documentation for the Managed MariaDB service (in preview): service presentation, technical concepts (StandAlone and Distributed architectures), getting started guide.
- **Managed PostgreSQL**: Publication of the initial documentation for the Managed PostgreSQL service (in preview): service presentation, technical concepts, getting started guide.

### April 15, 2026: New Cost Manager Module

- **Console (Cost Manager)**: Addition of complete documentation for the new consumption tracking module accessible from the Cloud Temple Console. Covers the dashboard, overall consumption (with end-of-month projection), breakdown by product and service, line-by-line billing details, and the price catalog.

### March 26, 2026: Subcontractor List Update (DPA)

- **Contractual**: Update of the Contractual Annex on Personal Data (DPA) - revision of the subcontractor list (removal of Microsoft Azure and Amazon Web Services, modification of activity for Iron Mountain) and addition of the authorization date.

### March 19, 2026: IaaS and Terraform Documentation Improvements

- **IaaS OpenSource**: Addition of a complete guide to create a virtual machine. The tutorial covers the three available deployment methods (model, XVA import, Marketplace) with step-by-step instructions and best practice recommendations.
- **IaaS VMware**: Addition of a page grouping all available tutorials to facilitate navigation and discovery of guides.
- **Terraform**: New section explaining how to automatically receive notifications of new versions of the Terraform Provider via GitHub.

### March 19, 2026: DPA Update and HDS Compliance

- **Contractual**: Update of the Contractual Annex on Personal Data (DPA) to version 1.0. Integration of the latest HDS (Health Data Hosting) certification requirements and update of the list of authorized subcontractors. Full translation into English, German, Spanish, and Italian.

### February 21, 2026: Advanced Network Concepts

- **Network (Internet)**: New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with Bird example.
- **LLMaaS**: Update of the model catalog and addition of the model lifecycle. Addition of LTS (Long Term Support) models.
- **IaaS Bare Metal**: Addition of details on BFS (Boot from SAN) volume in the getting started guide: Volume 1 is dedicated to OS installation, not shareable within the same AZ, with recommendation to store data on an additional LUN volume.
- **Object Storage (OSS)**: Addition of a **FAQ** page covering S3 access, IP whitelists, pre-signed links, and recommended usage scenarios.

### February 10, 2026: LLMaaS Pricing Update

- **LLMaaS**: Update of the API pricing terms. Current pricing is available in the [official Cloud Temple price catalog](https://www.cloud-temple.com/en/our-public-rates/).

### February 5, 2026: Service Level Agreement (SLA) Clarifications

- **Managed Kubernetes**: Complete update and finalization of Service Level Agreements (SLA) for the Managed Kubernetes offering.

### January 19, 2026: Managed Kubernetes and VPC Extension

- **Managed Kubernetes**: Addition of support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs in a Kubernetes cluster.
- **Managed Kubernetes**: Replacement of KubeCost with a more recent guide on **OpenCost**.
- **Network (VPC)**: Complete documentation of the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, getting started guides, and tutorials.

### December 11, 2025: Managed Kubernetes Updates

- **Managed Kubernetes**: Added a new tutorial on using **Gateway API** for advanced traffic management.
- **Managed Kubernetes**: Updated documentation on quota management (Ceph) and optimization of cost management tools (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.

### November 20, 2025: Major OpenShift PaaS Update

- **OpenShift PaaS (PR #194)**: Complete redesign and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### November 3, 2025: Kubernetes Tutorial Improvements

- **Managed Kubernetes**: Added a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Reviewed and improved existing tutorials. The guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enriched to better address security, governance, and cost concerns, in response to the expectations of CISO and Procurement profiles.

### October 28, 2025: New Managed Kubernetes Documentation and Various Improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service presentation, technical concepts, a getting started guide, a first tutorial, and the responsibility matrix (RACI). The content has been enriched to better meet the expectations of different user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### October 18, 2025: Maintenance and New Documentation

- **LLMaaS**: Added a new FAQ question to present the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), allowing real-time monitoring of the availability and performance of each model.
- **Contractual**: Major update of the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console**: Improved and clarified the documentation regarding order management.
- **Marketplace**: Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS**: Added a guide to configure the VSCode CLINE extension to use Cloud Temple language models directly from the editor.
- **Object Storage (OSS)**: Added clarifications on the lifecycle policy (Lifecycle) for data deletion.
- **Object Storage (OSS)**: Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS**: Updated the list of available models and retranslated over 50 documents to ensure consistency.

### August 14, 2025: Improvements and Fixes

- **LLMaaS**: Updated and clarified FAQ responses to better address technical and strategic questions. Added the FAQ to the navigation.

### July 2025: New Features and Major Updates

- **Object Storage (OSS)**:
  - Complete redesign of the tutorials section with dedicated guides for popular tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, and the Python Boto3 SDK.
  - Added clarifications on storage account concepts and Object Lock.
- **OpenSource IaaS**:
  - Added detailed documentation on High Availability (HA) management for resource pools and virtual machines.
- **Console**:
  - Updated the security alerts page with the latest vulnerabilities.
- **Networking**:
  - Added new screenshots to illustrate IPv6 connectivity configuration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Validation of the complete test suite.
- Correction and validation of RAG pipelines with FAISS and Qdrant.
- Enrichment of tutorials with more detailed technical explanations.
- Added a section on prompt security and model lifecycle in the concepts.
- Improved the RAG explanation page with diagrams and details on embedding models.
- Updated the API documentation, getting started guide, and service presentation.
- Added pricing for the Audio Transcription endpoint.
- Added the projected model lifecycle schedule.
- Added the responsibility matrix for the LLMaaS offering.
