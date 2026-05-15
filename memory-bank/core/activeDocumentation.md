# Documentation Active - État Actuel

## ⛔ AVERTISSEMENT CRITIQUE — NE RIEN FAIRE À LA MAIN DANS i18n/

> **INTERDICTION ABSOLUE** : Ne JAMAIS modifier manuellement les fichiers dans les dossiers `i18n/`.
> 
> **Pourquoi** : Toutes les traductions sont gérées automatiquement par le script `scripts/translate_py/translate.py`. 
> Toute modification manuelle sera **écrasée** lors de la prochaine exécution du script, et peut **casser le build** 
> (blocs de code mal fermés, chemins d'images incorrects, doublons MDX).
>
> **Workflow obligatoire** :
> 1. Modifier UNIQUEMENT les fichiers source en **français** dans `docs/`
> 2. Lancer le script de traduction : `python scripts/translate_py/translate.py`
> 3. Vérifier le build : `npx docusaurus build`
> 4. Commiter l'ensemble (sources FR + traductions générées)
>
> **Attention aux images** : 63 fichiers source utilisent encore des chemins relatifs `./images/`. 
> Le script copie automatiquement les images dans les dossiers i18n. Ne PAS supprimer ces copies.
> La migration vers `@site/docs/...` (chemins absolus) est un chantier futur.

## Analyse de Complétude par Service

### 🖥️ Console Management - Statut : ✅ COMPLET

#### Fichiers Existants (`/docs/console/`)

- ✅ `console.md` : Page principale
- ✅ `console_quickstart.md` : Guide de démarrage
- ✅ `api.md` : Documentation API
- ✅ `orders.md` : Gestion des commandes
- ✅ `status.md` : Monitoring et états

#### Sous-Module IAM - ✅ COMPLET

- ✅ `iam/iam.md` : Présentation IAM
- ✅ `iam/concepts.md` : Architecture Identity Management
- ✅ `iam/quickstart.md` : Configuration rapide
- ✅ `iam/images/` : Support visuel
- ✅ `iam/tutorials/` : Guides avancés (SSO AAD, ADFS, Entra, JumpCloud, Okta, Intune)

#### Module Billing (Gestionnaire des coûts) - ✅ NOUVEAU (avril 2026)

- ✅ `billing/concepts.md` : Dashboard, consommation, répartition, facturation, catalogue prix
- ✅ `billing/images/` : 6 captures d'écran illustrées

#### Modules Metrics et Security - ✅ COMPLETS

- ✅ `metrics/` : Dashboards Grafana, datasources, métriques IaaS/hyperviseurs
- ✅ `security/` : Alertes de sécurité, recommandations

#### Ressources Visuelles

- ✅ **40+ captures d'écran** dans `/images/`

### 🛡️ Bastion Security - Statut : ✅ COMPLET

- ✅ `bastion.md`, `concepts.md`, `quickstart.md`, `tutorials.md`
- ✅ **13 captures détaillées** : Workflows complets

### ☁️ IaaS Services - Statut : ✅ COMPLET

#### IaaS Bare Metal (`/docs/iaas_bare-metal/`)

- ✅ `iaas_bare-metal.md`, `concepts.md`, `quickstart.md`, `tutorials.md`
- ✅ Précisions BFS (Boot from SAN) ajoutées

#### IaaS Open Source (`/docs/iaas_opensource/`)

- ✅ `iaas_opensource.md`, `concepts.md`, `quickstart.md`
- ✅ `tutorials/` : Sauvegarde, HA pools, HA VMs, création VM (3 méthodes)
- ✅ Section sauvegarde enrichie (architecture incrémentale, sécurité AES-256, monitoring)

#### IaaS VMware (`/docs/iaas_vmware/`)

- ✅ `iaas_vmware.md`, `concepts.md`, `quickstart.md`
- ✅ `tutorials/` : Backup, VM encryption, deploy template, deploy Terraform, configure management VM
- ✅ Métriques cluster documentées (mémoire allouée/consommée/worst case)

### 🚀 PaaS OpenShift - Statut : ✅ COMPLET

- ✅ `paas_openshift.md`, `concepts.md`, `quickstart.md`, `first_steps.md`
- ✅ `tutorials/` : Helmfile, KubeVirt, Kasten

### 📦 Managed Kubernetes - Statut : ✅ COMPLET

- ✅ `managed_kubernetes.md`, `managed_core_kubernetes.md`, `concepts.md`, `quickstart.md`
- ✅ `tutorials/` : Deploy, Networking, ArgoCD, Capsule, Gateway API, GPU, Harbor, Kasten, KubeCosts, OpenCost

### 🗄️ Managed MariaDB - Statut : ✅ NOUVEAU (avril 2026, preview)

- ✅ `managed_mariadb.md` : Présentation du service
- ✅ `concepts.md` : Architectures StandAlone et Distributed (MaxScale)
- ✅ `quickstart.md` : Guide de démarrage
- ✅ `images/` : Schémas architecture (4 images)

### 🐘 Managed PostgreSQL - Statut : ✅ NOUVEAU (avril 2026, preview)

- ✅ `managed_postgresql.md` : Présentation du service
- ✅ `concepts.md` : Concepts techniques
- ✅ `quickstart.md` : Guide de démarrage

### ☁️ Cloud Public — VM Instances - Statut : ✅ NOUVEAU (avril 2026, preview)

- ✅ `public_cloud/vm_instances/vm_instances.md` : Vue d'ensemble
- ✅ `public_cloud/vm_instances/concepts.md` : Classes de service, gabarits, stockage, réseau VPC
- ✅ `public_cloud/vm_instances/quickstart.md` : Wizard de création en 9 étapes illustrées
- ✅ `public_cloud/vm_instances/tutorials/` : 3 tutoriels (créer VM, gérer disques, snapshots)
- ✅ `public_cloud/vm_instances/images/` : 17 captures d'écran
- ✅ SLA : 99,95%

### 🏢 Housing & Colocation - Statut : ✅ COMPLET

- ✅ `housing.md`, `concepts.md`, `quickstart.md`, `tutorials.md`

### 🌐 Services Réseau - Statut : ✅ COMPLET

- ✅ `network/network_overview.md` : Vue d'ensemble
- ✅ `network/vpc/` : VPC (Concepts, Quickstart, Tutorials)
- ✅ `network/private_network/` : Réseaux privés
- ✅ `network/private_backbone/` : Backbone privé
- ✅ `network/internet/` : Connectivité Internet, concepts avancés BGP

### 🤖 LLMaaS - Statut : ✅ COMPLET ET VALIDÉ

- ✅ `llmaas.md`, `models.md`, `api.md`, `concepts.md`, `quickstart.md`, `tutorials.md`
- ✅ `ocr.md`, `rag_explained.md`, `faq.md`
- ✅ `licences/` : Licences de tous les modèles
- ✅ **40+ modèles**, tests validés (9/9 suites)

### 💾 Storage Solutions - Statut : ✅ BON

- ✅ `storage/oss/oss.md`, `concepts.md`, `quickstart.md`, `faq.md`
- ✅ `storage/oss/tutorials/` : AWS S3 Sync, Boto3, Cloudberry, mc mirror, Rclone, Restic, WinSCP, bucket-access, file-hashing
- ✅ Plafonds IOPS et bande passante documentés

### 🔧 Terraform - Statut : ✅ COMPLET

- ✅ `terraform.md`, `concepts.md`, `quickstart.md`, `tutorials.md`
- ✅ Notifications nouvelles versions Provider

### 🛒 Marketplace - Statut : ✅ COMPLET

- ✅ `marketplace.md`, `concepts.md`, `quickstart.md`
- ✅ `tutorials/` : Contact partenaire, personnalisation images OpenIaaS/VMware, déploiement

## Documentation Contractuelle - Statut : ✅ RESTRUCTURÉE (avril 2026)

### Nouvelle Architecture

- ✅ `contracts.md` : Page hub — CGVU, Convention SecNumCloud, SLA, liens PDF
- ✅ `shared-responsibility.md` : Page hub — Matrices RACI par service

### Matrices RACI par Service

- ✅ `iaas/raci.md`, `iaas/raci_s3.md` : IaaS et stockage objet
- ✅ `paas/raci.md`, `paas/raci_ocp_std.md`, `paas/mco_mcs.md` : PaaS OpenShift
- ✅ `kubernetes/raci.md` : Managed Kubernetes
- ✅ `llmaas/raci.md` : LLM as a Service
- ✅ `network/raci.md`, `network/raci_vpc.md`, `network/sla_vpc.md` : Réseau
- ✅ `vm-instances/raci.md`, `vm-instances/sla_vm-instances.md` : VM Instances

## Pages Globales - Statut : ✅ COMPLÈTES

- ✅ `home.md` : Page d'accueil
- ✅ `changelog.md` : Suivi des modifications (documentation)
- ✅ `changelog_produits.md` : **NOUVEAU** — Changelog produit
- ✅ `faq.md` : **NOUVEAU** — FAQ générale
- ✅ `compute_overview.md` : **NOUVEAU** — Vue d'ensemble Compute
- ✅ `containers_overview.md` : Comparaison offres Containers
- ✅ `databases_overview.md` : **NOUVEAU** — Vue d'ensemble Bases de données
- ✅ `managedproducts_overview.md` : **NOUVEAU** — Vue d'ensemble Produits managés
- ✅ `security_identity_overview.md` : **NOUVEAU** — Vue d'ensemble Sécurité/Identité
- ✅ `market_place_public.md` : Marketplace public
- ✅ `privacy.md` : Politique de confidentialité

## Internationalisation - Statut : ✅ OPÉRATIONNELLE

### Langues Supportées (`/i18n/`)

- ✅ **Français** (`fr/`) : Langue source
- ✅ **Anglais** (`en/`) : Traduction principale
- ✅ **Allemand** (`de/`) : Marché DACH
- ✅ **Espagnol** (`es/`) : Expansion européenne
- ✅ **Italien** (`it/`) : Marché méditerranéen

## Métriques de Couverture

### Services Documentés

- **Console Management** : 100% (billing ajouté)
- **Bastion Security** : 100%
- **IaaS Services** : 100% (sauvegarde enrichie, métriques cluster)
- **PaaS OpenShift** : 100%
- **Managed Kubernetes** : 100%
- **Managed MariaDB** : 90% (preview, tutoriels à ajouter)
- **Managed PostgreSQL** : 90% (preview, tutoriels à ajouter)
- **VM Instances** : 95% (preview, 3 tutoriels)
- **Housing** : 100%
- **Network** : 95% (VPC, Private Network, Internet, Backbone)
- **LLMaaS** : 100%
- **Storage OSS** : 95% (FAQ + 9 tutoriels)
- **Terraform** : 100%
- **Marketplace** : 100%
- **Contractuel** : 100% (restructuré)

### Couverture Globale : ~97%

## Priorités Restantes

### 🔶 Priorité MOYENNE

1. **Managed MariaDB & PostgreSQL** : Ajouter des tutoriels pratiques
2. **VM Instances** : Enrichir avec cas d'usage avancés (scaling, monitoring)

### 🔵 Priorité BASSE

1. **Extensions tutoriels existants** : Cas d'usage sectoriels
2. **Amélioration continue traductions** : Qualité des traductions automatiques

## 🐍 Système de Traduction Python - ✅ CORRIGÉ (14/05/2026)

**Localisation** : `scripts/translate_py/`
**Status** : Production Ready — bug chunking corrigé

### ✅ Correction majeure : chunking code-block-aware

- ✅ **Bug corrigé** : Le `ContentSplitter` ne tenait pas compte des blocs de code ```` ``` ```` lors du découpage
- ✅ **`_find_code_block_ranges()`** : Identifie toutes les zones de code protégées
- ✅ **`_is_inside_code_block()`** : Vérifie si un point de coupure est dans un bloc de code
- ✅ **`_find_safe_split_point()`** : Cherche un point de coupure sûr (hors code)
- ✅ **`split_content()` corrigé** : Ignore les headers `#` à l'intérieur des blocs de code
- ✅ **`_split_large_block()` corrigé** : Ne coupe jamais au milieu d'un bloc de code
- ✅ **Test validé** : Blocs de code Python/Bash correctement préservés

---

*État de la documentation au 14/05/2026 - Memory Bank Cloud Temple*
