# Statut de la Documentation

## 🚦 État Global du Build

- **Dernier build validé** : ✅ SUCCÈS (04/05/2026)
- **Langues compilées** : fr, en, es, it, de
- **Version** : 3.25.0

## 📊 Couverture par Service

### Console Management (`/docs/console/`)

- **État** : ✅ Stable et complet
- **Nouveauté** : Module Billing (gestionnaire des coûts) ajouté en avril 2026

### Bastion Security (`/docs/bastion/`)

- **État** : ✅ Stable

### IaaS Services (`/docs/iaas_*/`)

- **État** : ✅ Stable et enrichi
- **Évolutions** :
  - IaaS OpenSource : section sauvegarde enrichie (architecture, sécurité, monitoring)
  - IaaS VMware : métriques cluster documentées
  - IaaS Bare Metal : précisions BFS ajoutées
  - Plafonds IOPS/bande passante ajoutés pour toutes les classes de stockage

### PaaS OpenShift (`/docs/paas_openshift/`)

- **État** : ✅ Stable

### Managed Kubernetes (`/docs/managed_kubernetes/`)

- **État** : ✅ Stable et complet
- **Évolutions** : GPU, Gateway API, OpenCost, Bare Metal nodes

### Managed MariaDB (`/docs/managed_mariadb/`)

- **État** : 🆕 Nouveau (preview, avril 2026)
- **Contenu** : Présentation, concepts (StandAlone/Distributed), quickstart
- **À faire** : Tutoriels pratiques

### Managed PostgreSQL (`/docs/managed_postgresql/`)

- **État** : 🆕 Nouveau (preview, avril 2026)
- **Contenu** : Présentation, concepts, quickstart
- **À faire** : Tutoriels pratiques

### VM Instances (`/docs/public_cloud/vm_instances/`)

- **État** : 🆕 Nouveau (preview, avril 2026)
- **Contenu** : Vue d'ensemble, concepts, quickstart illustré (9 étapes), 3 tutoriels
- **SLA** : 99,95%

### LLMaaS (`/docs/llmaas/`)

- **État** : ✅ Stable et validé
- **Modèles** : 40+

### Network (`/docs/network/`)

- **État** : ✅ Stable
- **Structure** : VPC, Private Network, Private Backbone, Internet (concepts avancés BGP)

### Storage (`/docs/storage/`)

- **État** : ✅ Bon (9 tutoriels, FAQ, plafonds IOPS)

### Terraform (`/docs/terraform/`)

- **État** : ✅ Stable

### Contractuel (`/docs/contractual/`)

- **État** : ✅ Restructuré (avril 2026)
- **Architecture** : Pages hub `contracts.md` et `shared-responsibility.md`, RACI par service
- **Navigation** : Colonne dédiée dans le footer (plus de menu latéral)

## 🌍 Internationalisation (i18n)

**Script de traduction** : `scripts/translate_py/translate.py` — **corrigé le 14/05/2026** (chunking code-block-aware)

| Langue | Statut Build | Qualité Traduction | Actions Requises |
|--------|--------------|-------------------|------------------|
| **FR** | ✅ Succès | Native | Source de vérité |
| **EN** | ✅ Succès | Haute | Aucune |
| **ES** | ✅ Succès | Moyenne | Aucune |
| **IT** | ✅ Succès | Moyenne | Aucune |
| **DE** | ✅ Succès | Moyenne | Aucune |

## 🏗️ Navigation et Structure

### Catégories principales (sidebar)

- **Cloud Public** : VM Instances (preview)
- **Compute** : IaaS OpenSource, IaaS VMware
- **Containers** : Managed Kubernetes, PaaS OpenShift
- **Managed Databases** : MariaDB, PostgreSQL (preview)
- **Network** : VPC, Private Backbone
- **Sécurité & Identité** : Bastion, Console IAM
- **Stockage** : OSS
- **LLMaaS** : IA Générative
- **Contractuel** : Colonne footer dédiée

## 🛠️ Maintenance Technique

### Actions Récentes (session 14/05/2026)

- [x] Fix permissions git (core.fileMode false)
- [x] Mise à jour changelog (3 entrées manquantes : stockage IOPS, sauvegarde IaaS, DB sizing)
- [x] Fix chunking traduction (code-block-aware dans ContentSplitter)
- [x] Mise à jour Memory Bank

### Actions Futures

- [ ] Relancer les traductions avec le script corrigé pour les fichiers modifiés
- [ ] Ajouter des tutoriels pour Managed MariaDB et PostgreSQL
- [ ] Enrichir VM Instances avec cas d'usage avancés

---

*Dernière mise à jour : 14/05/2026*
