---
title: Change Tracking
sidebar_position: 2
---

# Change Tracking

### May 4, 2026: Security Patches — Docker Image (Alpine CVE)

- **Security (Docker)**: Added `apk upgrade --no-cache` to the final stage `nginx:stable-alpine` of the production Dockerfiles (`Dockerfile` and `Dockerfile.prebuilt`). This update fixes all Critical and High CVEs detected by Harbor/Trivy on image `3.24.3`, related to the pinned Alpine packages: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. The next build will produce an image with all these packages at their latest patched version.

### April 30, 2026: Clarifications on Storage Performance

- **Storage (IaaS VMware, OpenSource, Bare Metal)** : Added absolute IOPS and maximum bandwidth caps for all storage classes. This information enables better environment sizing based on performance requirements.

### April 24, 2026: Enrichment of the IaaS OpenSource backup documentation

- **IaaS OpenSource (Backup)**: Enrichment of the backup section with details on the technical architecture (incremental backup, impact of Thick provisioning on storage), security (AES-256 encryption, network isolation), monitoring, and scheduling constraints. Translations available in EN/DE/ES/IT.

### April 20, 2026: Managed Database Sizing Update

- **Managed MariaDB & PostgreSQL**: Update to the maximum available sizing templates for managed database services.

### April 17, 2026: VM Instances — Illustrated documentation, tutorials, and translations

- **VM Instances — Documentation Enhancement**: Complete overhaul and illustration of the VM Instances documentation. The quickstart guide (`quickstart.md`) now covers the entire illustrated user journey: accessing the section, VM list, 9-step creation wizard (instance family, availability zone, OS template, template, name/backup, Cloud Init, disks, network, summary), and management of the 4 tabs (Information, Disks, Network, Snapshots).
- **VM Instances — Tutorials**: Creation of 3 dedicated tutorials in a `tutorials/` folder: (1) **Create your first VM** (complete illustrated wizard + Cloud Init + additional disk), (2) **Manage disks** (addition from the console + Linux partitioning), (3) **Create and manage snapshots** (creation, restoration, deletion + best practices and snapshot/backup comparison). The sidebar navigation is updated with 3 individual entries in the Tutorials category.

### April 17, 2026: Contractual documents, translations, and terminology harmonization

- **Contractual Documents — Restructuring** : The `contracts.md` page is reorganized with the hierarchy of contractual documents at the top of the page, including the priority list of the 6 documents (CGVU, SecNumCloud Agreement, Specific Agreement ¹, PAS ², CPU, DPA) and a contractual details box.

### April 16, 2026: Navigation overhaul, contractual documents, and updates

- **Navigation — Compute** : Grouping of VM Instances (preview), Open Source IaaS, and VMware IaaS under a single **Compute** category in the navigation (PR #277).
- **Navigation — Network** : Grouping of VPC (preview) and Private Backbone under a single **Network** category in the navigation.
- **Contractual Documents** : Complete restructuring of contractual documentation — creation of a hub page `/contracts` (General Terms and Conditions, Specific Terms, SecNumCloud Service Agreements, VM Instances SLA) and a hub page `/shared-responsibility` (RACI matrices per service: IaaS, S3, PaaS, Kubernetes, LLMaaS, Network). The contractual sidebar menu is replaced by a dedicated **Contractual** column in the footer. Translations available in EN/DE/ES/IT.
- **VM Instances** : Update of the Service Level Agreement (SLA) commitment from 99.9% to 99.95%.
- **Open Source IaaS** : Addition of a note regarding the maximum backup retention period (maximum 24 months, migration to Glacier scheduled for Q1 2027).

### April 15, 2026: New VM instances documentation (Cloud Public)

- **VM instances** : Initial documentation for the VM instances service (in preview), a new shared virtual machine offering from Cloud Temple. The documentation covers the service overview, technical concepts (Development/General Purpose/Performance service tiers, predefined and custom templates, storage, VPC networking, backup), as well as a complete getting started guide. The service is organized under a new **Cloud Public** category in the navigation.

### April 15, 2026: IaaS VMware Documentation Improvement — Cluster Metrics

- **IaaS VMware**: Added detailed documentation on the metrics displayed in the VMware cluster view from the Cloud Temple Console. Covers the cluster's three memory graphs: **Allocated Memory** (total amount allocated to VMs), **Consumed Memory** (physical memory actually used by VMs), and **Worst-case Allocation** (projection of maximum simultaneous consumption), with a precise description of what each indicator represents to anticipate resource requirements.

### April 15, 2026: Managed MariaDB and Managed PostgreSQL Documentation and Multilingual Fixes

- **Managed MariaDB**: Initial documentation for the Managed MariaDB service (in preview) has been published: service overview, technical concepts (StandAlone and Distributed architectures), getting started guide. 
- **Managed PostgreSQL**: Initial documentation for the Managed PostgreSQL service (in preview) has been published: service overview, technical concepts, getting started guide.
- **Multilingual fixes (images)**: Fixed image references in the translations of the Managed Kubernetes and Managed MariaDB sections for all languages (EN, DE, ES, IT) — converted relative paths `./images/` to absolute paths `@site/docs/...` to ensure correct rendering across all languages.
- **Broken link fixes**: Resolved several broken links in the documentation: LLMaaS license references, console link in the rclone (OSS) tutorial, IAM link in the networking documentation (EN), relative links in the Terraform section (EN).

### April 15, 2026: New Cost Manager Module

- **Console (Cost Manager)**: Added complete documentation for the new usage tracking module accessible from the Cloud Temple Console. Covers the dashboard, overall consumption (with end-of-month projection), breakdown by product and service, line-by-line billing details, and the price catalog.

### March 26, 2026: Update of the Subcontractor List (DPA)

- **Contractual**: Update of the Contractual Annex on Personal Data (DPA) - revision of the subcontractor list (removal of Microsoft Azure and Amazon Web Services, modification of the activity for Iron Mountain) and addition of the authorization date.

### March 19, 2026: IaaS and Terraform Documentation Improvements

- **Open Source IaaS** : Added a comprehensive guide for creating a virtual machine. The tutorial covers the three available deployment methods (template, XVA import, Marketplace) with step-by-step instructions and best practices recommendations.
- **VMware IaaS** : Added a page consolidating all available tutorials to facilitate navigation and guide discovery.
- **Terraform** : New section explaining how to automatically receive notifications for new versions of the Terraform Provider via GitHub.

### March 19, 2026: DPA Update and HDS Compliance

- **Contractual** : Update of the Contractual Annex on Personal Data (DPA) to version 1.0. Integration of the latest HDS (Health Data Hosting) certification requirements and update of the list of authorized subcontractors. Full translation into English, German, Spanish, and Italian.

### February 21, 2026: SEO Improvement

- **SEO** : Fixed the production URL (`https://docs.cloud-temple.com`) and base path (`/`) in the Docusaurus configuration, ensuring correct canonical URLs for Google indexing.
- **Sitemap** : Enabled automatic sitemap generation (`/sitemap.xml`) to improve crawling and indexing by search engines.
- **Robots.txt** : Added a `robots.txt` file allowing full site crawling and pointing to the sitemap.

### February 21, 2026: Advanced networking concepts and multilingual improvements

- **Networking (Internet)** : New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with a Bird example.
- **LLMaaS** : Updated model catalog and added model lifecycle. Added LTS (Long Term Support) models.
- **Console (Security)** : Improved translation quality for security alerts (English, German, Spanish, Italian).
- **Multilingual** : Translation of the new advanced networking concepts page into the 4 languages (en, de, es, it) and overall improvement of existing translation quality.
- **IaaS Bare Metal** : Added clarifications regarding the BFS (Boot from SAN) volume in the getting started guide: Volume 1 is dedicated to OS installation, not shareable within the same AZ, with a recommendation to store data on an additional LUN volume.
- **Object Storage (OSS)** : Added a **FAQ** page covering S3 access, IP whitelists, pre-signed links, and recommended usage scenarios.

### February 10, 2026: LLMaaS Pricing Update

- **LLMaaS**: Global API pricing update (Input: 1.9€/M, Output: 8€/M, Reasoner: 8€/M) across all technical and commercial documentation.

### February 5, 2026 : Clarifications on Service Level Agreements (SLA)

- **Managed Kubernetes** : Complete update and finalization of Service Level Agreements (SLA) for the Managed Kubernetes offering.

### January 21, 2026: Security Improvements and Translations

- **Console Management** : Updated international translations (English, German, Spanish, Italian) for security alerts in the management console.

### January 19, 2026: Managed Kubernetes and VPC Extension

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs in a Kubernetes cluster.
- **Managed Kubernetes**: Replaced KubeCost with a more recent guide on **OpenCost**.
- **Network (VPC)**: Complete documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, getting started guides, and tutorials.
- **Multilingual**: Full translation of the VPC service and new Kubernetes content into English, German, Spanish, and Italian.

### December 15, 2025: Stabilization and Multilingual Fixes

- **Multilingual (Terraform, LLMaaS, Harbor)**: Major fix for Spanish, Italian, and German translations. Resolved MDX syntax issues (empty code blocks, unescaped tags) that were preventing site compilation.
- **Multilingual (Images)**: Restored correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build**: Deployment validation for all 5 supported languages.

### December 11, 2025: Managed Kubernetes Updates

- **Managed Kubernetes**: Added a new tutorial on using **Gateway API** for advanced traffic management.
- **Managed Kubernetes**: Updated documentation on quota management (Ceph) and optimization of cost management tools (OpenCost).

### November 22, 2025: LLMaaS Updates and Global Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDFs, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues on the Italian and German versions of the documentation.
- **Quality**: Fixed code block display in LLMaaS tutorials and restored missing images in the VMware IaaS quick start guide (Italian version).

### November 20, 2025: Major PaaS OpenShift Update

- **PaaS OpenShift (PR #194)** : Complete overhaul and update of the OpenShift documentation, including new screenshots and a full translation into English, Spanish, German, and Italian to support our international expansion.

### November 3, 2025: Kubernetes Tutorial Improvements

- **Managed Kubernetes**: Added a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes**: Review and enhancement of existing tutorials. The guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enhanced to better address security, governance, and cost concerns, in response to the expectations of CISO and Buyer profiles.

### October 28, 2025: New Managed Kubernetes documentation and various improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service presentation, technical concepts, a getting started guide, a first tutorial, and the responsibilities matrix (RACI). The content has been enriched to better meet the expectations of different user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Correction and update of the "Data Processing Agreement" (DPA) document.

### October 18, 2025: Maintenance and new documentation

- **LLMaaS**: Added a new FAQ question to introduce the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), allowing real-time monitoring of each model's availability and performance.
- **Contractuel**: Major update to the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console**: Improved and clarified documentation regarding order management.
- **Marketplace**: Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS**: Added a guide for configuring the VSCode CLINE extension to use Cloud Temple's language models directly from the editor.
- **Object Storage (OSS)**: Added clarifications on the lifecycle policy for data deletion.
- **Object Storage (OSS)**: Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS**: Updated the list of available models and retranslated over 50 documents to ensure consistency.

### August 14, 2025: Improvements and fixes

- **LLMaaS**: Updated and clarified FAQ responses to better address technical and strategic questions. Added FAQ to navigation.
- **General**: Fixed several internal navigation links throughout the documentation for a smoother experience.

### July 2025: New Features and Major Updates

- **Object Storage (OSS)**:
  - Complete overhaul of the tutorials section with dedicated guides for popular tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, and the Boto3 Python SDK.
  - Added details on storage account concepts and object locking (Object Lock).
- **Open Source IaaS**:
  - Added detailed documentation on managing High Availability (HA) for resource pools and virtual machines.
- **Console**:
  - Updated the security alerts page with the latest vulnerabilities.
- **Networking**:
  - Added new screenshots to illustrate IPv6 connectivity configuration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Validation of the complete test suite.
- Correction and validation of the RAG with FAISS and Qdrant pipelines.
- Enrichment of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle in the concepts.
- Improvement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, getting started guide, and service presentation.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the projected model lifecycle schedule.
- Addition of the responsibility matrix for the LLMaaS offering.