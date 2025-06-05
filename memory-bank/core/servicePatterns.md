# Patterns de Service - Documentation Cloud Temple

## Structure Standard Docusaurus

### Pattern de Base par Service
Chaque service Cloud Temple suit une structure documentaire cohérente dans `/docs/[service]/` :

```
[service]/
├── [service].md          # Page principale du service
├── concepts.md           # Architecture et concepts techniques
├── quickstart.md         # Guide de démarrage rapide
├── tutorials.md          # Cas d'usage avancés
├── images/              # Ressources visuelles
└── tutorials/           # Guides détaillés (optionnel)
```

### Métadonnées Docusaurus Standards

#### Header Standard
```markdown
---
title: [Nom du Service]
sidebar_position: [numéro]
---
```

#### Navigation Hierarchy
Basée sur `/sidebars.ts` existant :
- Services principaux : position 1-10
- Sous-modules : position incrémentale
- Pages utilitaires : position finale

## 🖥️ Console Management - Pattern de Référence

### Structure Exemplaire (`/docs/console/`)
```
console/
├── console.md            # ✅ Page principale
├── console_quickstart.md # ✅ Guide démarrage
├── api.md               # ✅ Documentation API
├── orders.md            # ✅ Gestion commandes
├── status.md            # ✅ Monitoring états
├── iam/                 # ✅ Sous-module complet
│   ├── iam.md
│   ├── concepts.md
│   ├── quickstart.md
│   ├── images/
│   └── tutorials/
├── metrics/             # 🔄 En développement
├── security/            # 🔄 En développement
└── images/              # ✅ 40+ captures d'écran
```

### Pattern d'Écriture Console
- **Ton** : Technique et professionnel
- **Structure** : Introduction → Configuration → Utilisation → Dépannage
- **Visuel** : Capture d'écran pour chaque étape
- **API** : Exemples curl et réponses JSON

## 🛡️ Bastion Security - Pattern Sécurisé

### Documentation Sécurisée (`/docs/bastion/`)
```
bastion/
├── bastion.md           # Vue d'ensemble sécurité
├── concepts.md          # Architecture zero-trust
├── quickstart.md        # Première connexion
├── tutorials.md         # Scénarios d'usage
└── images/             # Workflows visuels sécurisés
```

### Pattern Sécurité
- **Avertissements** : Blocs d'alerte sécurité
- **Procédures** : Étapes de validation
- **Audit** : Traçabilité des actions
- **Conformité** : Références SecNumCloud

## ☁️ IaaS Services - Pattern Infrastructure

### Structure Multi-Environnement
```
iaas_[technologie]/
├── iaas_[technologie].md # Service principal
├── concepts.md           # Architecture technique
├── quickstart.md         # Déploiement rapide
├── tutorials.md          # Cas d'usage métier
├── images/              # Diagrammes architecture
└── tutorials/           # Guides avancés (VMware)
```

### Pattern Infrastructure
- **Prérequis** : Checklist technique
- **Architecture** : Diagrammes et schémas
- **Configuration** : Paramètres détaillés
- **Monitoring** : Métriques et alertes
- **Troubleshooting** : Guide de résolution

## 🚀 PaaS OpenShift - Pattern DevOps

### Structure Container (`/docs/paas_openshift/`)
```
paas_openshift/
├── paas_openshift.md    # Présentation OpenShift
├── concepts.md          # Kubernetes et containers
├── quickstart.md        # Premier déploiement
├── images/             # Screenshots OpenShift
└── tutorials/          # Workflows DevOps
```

### Pattern DevOps
- **CI/CD** : Pipelines automatisés
- **Containers** : Best practices sécurité
- **Orchestration** : Configurations Kubernetes
- **Scaling** : Gestion de la charge

## 🏢 Housing - Pattern Infrastructure Physique

### Documentation Datacenter (`/docs/housing/`)
```
housing/
├── housing.md          # Offres colocation
├── concepts.md         # Infrastructure physique
├── quickstart.md       # Processus installation
└── tutorials.md        # Bonnes pratiques
```

### Pattern Physique
- **Spécifications** : Caractéristiques techniques
- **Procédures** : Installation et maintenance
- **Sécurité** : Accès et surveillance
- **SLA** : Niveaux de service

## Conventions d'Images

### Nomenclature Standard
```
images/
├── [service]_overview_001.png    # Vue d'ensemble
├── [service]_config_001.png      # Configuration
├── [service]_usage_001.png       # Utilisation
├── [service]_monitoring_001.png  # Surveillance
└── [service]_troubleshoot_001.png # Dépannage
```

### Types de Captures
- **Interface** : Screenshots console Shiva
- **Workflow** : Séquences d'actions
- **Architecture** : Diagrammes techniques
- **Monitoring** : Dashboards Grafana
- **Configuration** : Paramètres système

## Patterns de Contenu

### Introduction Standard
```markdown
# [Nom du Service]

## Vue d'ensemble
[Description du service et positionnement Cloud Temple]

## Qualification SecNumCloud
[Aspects sécurité et conformité spécifiques]

## Architecture
[Diagramme et explication technique]
```

### Structure Concepts
```markdown
# Concepts [Service]

## Architecture Technique
## Composants Principaux
## Intégrations
## Sécurité
## Monitoring
```

### Pattern Quickstart
```markdown
# Guide de Démarrage Rapide

## Prérequis
## Étape 1 : Configuration initiale
## Étape 2 : Premier déploiement
## Étape 3 : Validation
## Dépannage rapide
```

### Structure Tutorials
```markdown
# Tutoriels [Service]

## Cas d'usage métier
## Configuration avancée
## Intégration avec autres services
## Optimisation et bonnes pratiques
## Dépannage approfondi
```

## Éléments Transversaux

### Blocs d'Information
```markdown
:::info
Information importante pour l'utilisateur
:::

:::warning
Avertissement de sécurité ou configuration
:::

:::danger
Action critique nécessitant attention
:::
```

### Références Croisées
- **Liens internes** : `[Texte](/docs/service/page)`
- **Liens externes** : Cloud Temple ou partenaires
- **API Documentation** : Références vers endpoints

### Code et Exemples
- **Curl examples** : Appels API formatés
- **Configuration files** : YAML, JSON avec syntaxe highlighting
- **Scripts** : Bash, PowerShell pour automatisation

## Standards Multilingues

### Correspondance i18n
```
i18n/[langue]/docusaurus-plugin-content-docs/current/
├── [service]/
│   ├── [service].md
│   ├── concepts.md
│   ├── quickstart.md
│   └── tutorials.md
```

### Glossaire Technique
- **Termes non traduits** : API, endpoint, cluster, namespace
- **Traduction contextuelle** : Selon audience locale
- **Cohérence** : Terminologie unifiée par langue

## Métriques et Validation

### Complétude Documentation
- ✅ **Page principale** : Présentation service
- ✅ **Concepts** : Architecture détaillée
- ✅ **Quickstart** : Guide fonctionnel
- ✅ **Tutorials** : Cas d'usage réels
- ✅ **Images** : Support visuel adéquat

### Qualité Contenu
- **Technique** : Précision et actualité
- **Pédagogique** : Progression logique
- **Visuel** : Screenshots à jour
- **Sécurité** : Conformité SecNumCloud

---

## Modèles de Développement

### Nouveau Service Pattern
1. **Créer structure** : Dossier + fichiers standards
2. **Page principale** : Vue d'ensemble et positionnement
3. **Concepts** : Architecture technique détaillée
4. **Quickstart** : Guide pratique rapide
5. **Tutorials** : Cas d'usage avancés
6. **Images** : Captures et diagrammes
7. **Navigation** : Mise à jour `sidebars.ts`
8. **i18n** : Traduction multilingue

### Maintenance Pattern
1. **Audit régulier** : Vérification cohérence
2. **Mise à jour images** : Screenshots actuels
3. **Validation liens** : Internes et externes
4. **Review technique** : Exactitude information
5. **Feedback utilisateur** : Améliorations continue

---

*Patterns documentaires Cloud Temple - 05/06/2025*
