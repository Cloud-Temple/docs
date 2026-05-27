---
title: Change Tracking
sidebar_position: 2
---

# Change Tracking

### May 26, 2026: Translation Workflow Enhancement

- **Translation (tooling)** : Added `--token`, `--url`, and `--model` options to the Python script `scripts/translate_py/translate.py`. The API token can now be provided directly via the command line, without recreating a `.env` file. CLI options take precedence over environment variables.
- **Translation (configuration)** : Updated the default translation model to `qwen3.6:27b`, while retaining the default Cloud Temple LLMaaS endpoint `https://api.ai.cloud-temple.com/v1/chat/completions`.
- **Translation (dry-run)** : The simulation workflow remains usable without an API token, to verify files to be translated before any actual execution.

### May 4, 2026 : Security Patches — Docker Image (Alpine CVEs)

- **Security (Docker)** : Added `apk upgrade --no-cache` to the final `nginx:stable-alpine` stage in the production Dockerfiles (`Dockerfile` and `Dockerfile.prebuilt`). This update fixes all Critical and High CVEs detected by Harbor/Trivy on the `3.24.3` image, related to the pinned Alpine packages: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. The next build will produce an image with all these packages at their latest patched versions.

### April 30, 2026: Storage Performance Details

- **Storage (IaaS VMware, OpenSource, Bare Metal)**: Added absolute IOPS and maximum bandwidth caps for all storage classes. This information enables better environment sizing based on performance requirements.

### April 24, 2026: Enrichment of the IaaS OpenSource backup documentation

- **IaaS OpenSource (Sauvegarde)** : Enhancement of the backup section with details on the technical architecture (sauvegarde incrémentale, impact du Thick provisioning sur le stockage), security (chiffrement AES-256, isolation réseau), monitoring, and scheduling constraints. Translations available in EN/DE/ES/IT.

### April 20, 2026: Managed Database Sizing Update

- **Managed MariaDB & PostgreSQL**: Update to the maximum available sizing templates for managed database services.

### April 17, 2026: VM Instances — illustrated documentation, tutorials, and translations

- **VM Instances — Documentation Enhancement** : Complete overhaul and illustration of the VM Instances documentation. The getting started guide (`quickstart.md`) now covers the entire illustrated user journey: accessing the section, VM list, 9-step creation wizard (instance family, availability zone, OS template, template, name/backup, Cloud Init, disks, network, summary), and management of the 4 tabs (Information, Disks, Network, Snapshots).
- **VM Instances — Tutorials** : Creation of 3 dedicated tutorials in a `tutorials/` folder : (1) **Create your first VM** (complete illustrated wizard + Cloud Init + additional disk), (2) **Manage disks** (adding from the console + Linux partitioning), (3) **Take and manage snapshots** (creation, restoration, deletion + best practices and snapshot/backup comparison). The sidebar navigation is updated with 3 individual entries in the Tutorials category.

### April 17, 2026: Contractual Documents, Translations, and Terminology Harmonization

- **Contractual Documents — Restructuring** : The `contracts.md` page has been reorganized with the hierarchy of contractual documents at the top of the page, including the priority list of the 6 documents (CGVU, SecNumCloud Agreement, Specific Agreement ¹, PAS ², CPU, DPA) and a contractual clarifications box.

### April 16, 2026: Navigation redesign, contractual documents, and updates

- **Navigation — Compute** : Grouping of VM Instances (preview), OpenSource IaaS, and VMware IaaS under a single **Compute** category in the navigation (PR #277).
- **Navigation — Network** : Grouping of VPC (preview) and Private Backbone under a single **Network** category in the navigation.
- **Contractual Documents** : Complete restructuring of contractual documentation — creation of a hub page `/contracts` (conditions générales, conditions particulières, conventions de service SecNumCloud, SLA VM instances) and a hub page `/shared-responsibility` (matrices RACI par service : IaaS, S3, PaaS, Kubernetes, LLMaaS, Réseau). The contractual sidebar menu is replaced by a dedicated **Contractual** column in the footer. Translations available in EN/DE/ES/IT.
- **VM Instances** : Service Level Agreement (SLA) updated from 99.9% to 99.95%.
- **OpenSource IaaS** : Added a note regarding the maximum backup retention period (24 mois maximum, migration vers Glacier prévue au T1 2027).

### April 15, 2026: New VM instances documentation (Cloud Public)

- **VM instances**: The initial documentation for the VM instances service (in preview) is now live, a new shared virtual machine offering from Cloud Temple. The documentation covers an overview of the service, technical concepts (Development/General Purpose/Performance service classes, predefined and custom templates, storage, VPC networking, backup), as well as a complete getting started guide. The service is organized under a new **Cloud Public** category in the navigation.

### April 15, 2026: IaaS VMware Documentation Improvement — Cluster Metrics

- **IaaS VMware**: Added detailed documentation on the metrics displayed in the VMware cluster view from the Cloud Temple Console. Covers the three cluster memory charts: **Allocated Memory** (total amount allocated to VMs), **Consumed Memory** (physical memory actually used by VMs), and **Worst-Case Allocation** (projection of maximum simultaneous consumption), with a precise description of what each metric represents to anticipate resource needs.

### April 15, 2026: Managed MariaDB, Managed PostgreSQL Documentation and Multilingual Fixes

- **Managed MariaDB** : Initial documentation for the Managed MariaDB service (in preview) published: service overview, technical concepts (StandAlone and Distributed architectures), getting started guide. 
- **Managed PostgreSQL** : Initial documentation for the Managed PostgreSQL service (in preview) published: service overview, technical concepts, getting started guide.
- **Multilingual Fixes (Images)** : Corrected image references in the translations of the Managed Kubernetes and Managed MariaDB sections for all languages (EN, DE, ES, IT) — converted relative paths `./images/` to absolute paths `@site/docs/...` to ensure proper rendering across all languages.
- **Broken Link Fixes** : Resolved several broken links in the documentation: references to LLMaaS licenses, link to the console in the rclone tutorial (OSS), IAM link in the networking documentation (EN), relative links in the Terraform section (EN).

### April 15, 2026: New Cost Manager Module

- **Console (Cost Manager)** : Added complete documentation for the new usage tracking module accessible from the Cloud Temple Console. Covers the dashboard, overall consumption (with end-of-month projection), breakdown by product and service, line-by-line billing details, and the price catalog.

### March 26, 2026: Update to the Subprocessor List (DPA)

- **Contractual** : Update to the Data Processing Agreement (DPA) Contractual Annex - revision of the subprocessor list (removal of Microsoft Azure and Amazon Web Services, modification of the activity for Iron Mountain) and addition of the authorization date.

### March 19, 2026: IaaS and Terraform Documentation Improvements

- **Open Source IaaS**: Added a comprehensive guide for creating a virtual machine. The tutorial covers the three available deployment methods (template, XVA import, Marketplace) with step-by-step instructions and best practice recommendations.
- **VMware IaaS**: Added a page aggregating all available tutorials to facilitate navigation and guide discovery.
- **Terraform**: New section explaining how to automatically receive notifications for new versions of the Terraform Provider via GitHub.

### March 19, 2026 : DPA Update and HDS Compliance

- **Contractual** : Update of the Data Processing Agreement (DPA) Contractual Annex to version 1.0. Integration of the latest requirements of the HDS (Health Data Hosting) certification and update of the list of authorized sub-processors. Full translation into English, German, Spanish, and Italian.

### February 21, 2026: SEO Improvements

- **SEO**: Corrected the production URL (`https://docs.cloud-temple.com`) and base path (`/`) in the Docusaurus configuration, ensuring correct canonical URLs for Google indexing.
- **Sitemap**: Enabled automatic sitemap generation (`/sitemap.xml`) to improve crawling and indexing by search engines.
- **Robots.txt**: Added a `robots.txt` file allowing full site crawling and pointing to the sitemap.

### February 21, 2026: Advanced Network Concepts and Multilingual Improvements

- **Network (Internet)**: New **advanced concepts** page documenting BGP communities and Local Preference control on the Cloud Temple Internet backbone (AS33930). Includes a configuration guide with a Bird example.
- **LLMaaS**: Updated model catalog and added model lifecycle. Added LTS (Long Term Support) models.
- **Console (Security)**: Improved translation quality for security alerts (anglais, allemand, espagnol, italien).
- **Multilingual**: Translated the new advanced network concepts page into 4 languages (en, de, es, it) and overall improved the quality of existing translations.
- **IaaS Bare Metal**: Added details on the BFS volume (Boot from SAN) in the boot guide: Volume 1 is dedicated to OS installation, not shareable within the same AZ, with a recommendation to store data on an additional LUN volume.
- **Object Storage (OSS)**: Added a **FAQ** page covering S3 access, IP whitelists, pre-signed links, and recommended use cases.

### February 10, 2026: LLMaaS Pricing Update

- **LLMaaS**: Comprehensive update to API pricing (Input: €1.9/M, Output: €8/M, Reasoner: €8/M) across all technical and commercial documentation.

### February 5, 2026: Details on Service Level Agreements (SLA)

- **Managed Kubernetes**: Complete update and finalization of the Service Level Agreements (SLA) for the Managed Kubernetes offering.

### January 21, 2026: Security Enhancements and Translations

- **Console Management**: Updated international translations (English, German, Spanish, Italian) for security alerts in the management console.

### January 19, 2026: Managed Kubernetes and VPC Expansion

- **Managed Kubernetes**: Added support for **Bare Metal** nodes and **GPUs** (NVIDIA).
- **Managed Kubernetes**: New tutorial on using GPUs in a Kubernetes cluster.
- **Managed Kubernetes**: Replaced KubeCost with a more recent guide on **OpenCost**.
- **Network (VPC)**: Complete documentation for the Virtual Private Cloud (VPC) service, including high availability (HA) concepts, getting started guides, and tutorials.
- **Multilingual**: Full translation of the VPC service and new Kubernetes content into English, German, Spanish, and Italian.

### December 15, 2025: Stabilization and Multilingual Corrections

- **Multilingual (Terraform, LLMaaS, Harbor)** : Major correction of Spanish, Italian, and German translations. Resolved MDX syntax issues (blocs de code vides, balises non échappées) that prevented site compilation.
- **Multilingual (Images)** : Restored correct image paths in the Italian and German versions for the Bastion and VMware IaaS sections.
- **Build** : Deployment validation completed for all 5 supported languages.

### December 11, 2025: Managed Kubernetes Updates

- **Managed Kubernetes** : Added a new tutorial on using **Gateway API** for advanced traffic management.
- **Managed Kubernetes** : Updated documentation on quota management (Ceph) and optimization of cost management tools (OpenCost).

### November 22, 2025: LLMaaS Updates and General Improvements

- **LLMaaS (OCR)**: Added comprehensive documentation for **DeepSeek-OCR**, our new model specialized in document analysis (PDF, images), capable of extracting structured text, tables, and mathematical formulas.
- **Multilingual**: Resolved accessibility issues on the Italian and German versions of the documentation.
- **Quality**: Fixed code block rendering in LLMaaS tutorials and restored missing images in the VMware IaaS getting started guide (Italian version).

### November 20, 2025: Major OpenShift PaaS Update

- **OpenShift PaaS (PR #194)**: Complete overhaul and update of the OpenShift documentation, including new screenshots and full translation into English, Spanish, German, and Italian to support our international expansion.

### November 3, 2025: Kubernetes Tutorials Enhancement

- **Managed Kubernetes** : Added a new tutorial on continuous deployment with **ArgoCD** and the GitOps approach.
- **Managed Kubernetes** : Review and improvement of existing tutorials. The guides on deployment, networking, permission management (Capsule), and backup (Kasten) have been enhanced to better address security, governance, and cost concerns, in response to the expectations of CISO and Procurement roles.

### October 28, 2025: New Managed Kubernetes Documentation and Various Improvements

- **Managed Kubernetes (PR #193 & improvements)**: Added comprehensive documentation for the new Managed Kubernetes service. The section includes a service overview, technical concepts, a getting started guide, an introductory tutorial, and a responsibility matrix (RACI). The content has been enhanced to better meet the expectations of different user profiles.
- **Object Storage (PR #190, #189)**: Added two new tutorials for the Object Storage service: one on managing S3 bucket access and another on using Restic for backups.
- **Contractual (PR #191)**: Corrected and updated the "Data Processing Agreement" (DPA) document.

### October 18, 2025: Maintenance and New Documentation

- **LLMaaS** : Added a new FAQ question to introduce the public status page ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), allowing you to monitor the availability and performance of each model in real time.
- **Contractual** : Major update to the Data Processing Agreement (DPA v2) to reflect the latest legal and compliance requirements.
- **Console** : Improved and clarified documentation regarding order management.
- **Marketplace** : Added a detailed tutorial on customizing virtual machine (VM) images to create reusable templates.
- **LLMaaS** : Added a guide to configure the CLINE VSCode extension to use Cloud Temple language models directly from the editor.
- **Object Storage (OSS)** : Added details on the Lifecycle policy for data deletion.
- **Object Storage (OSS)** : Added a troubleshooting guide for checksum errors (`XAmzContentSHA256Mismatch`) with AWS CLI and Terraform.
- **LLMaaS** : Updated the list of available models and retranslated over 50 documents to ensure consistency.

### August 14, 2025: Improvements and Fixes

- **LLMaaS** : Updated and clarified FAQ answers to better address technical and strategic questions. Added the FAQ to the navigation.
- **General** : Fixed several internal navigation links throughout the documentation for a smoother experience.

### July 2025: Major Features and Updates

- **Object Storage (OSS)** :
  - Complete overhaul of the tutorials section with dedicated guides for popular tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, and the Python Boto3 SDK.
  - Added clarifications on storage account concepts and Object Lock.
- **OpenSource IaaS** :
  - Added detailed documentation on High Availability (HA) management for resource pools and virtual machines.
- **Console** :
  - Updated the security alerts page with the latest vulnerabilities.
- **Network** :
  - Added new screenshots to illustrate IPv6 connectivity configuration.

### June 29, 2025: Finalization of LLMaaS Documentation

- Validation of the complete test suite.
- Fixes and validation of RAG pipelines with FAISS and Qdrant.
- Enrichment of tutorials with more detailed technical explanations.
- Addition of a section on prompt security and model lifecycle in the concepts.
- Enhancement of the RAG explanation page with diagrams and details on embedding models.
- Update of the API documentation, getting started guide, and service overview.
- Addition of pricing for the Audio Transcription endpoint.
- Addition of the projected model lifecycle schedule.
- Addition of the responsibility matrix for the LLMaaS offering.