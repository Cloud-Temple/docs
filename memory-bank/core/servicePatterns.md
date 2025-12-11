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
---
```
*(Note: `sidebar_label` et `sidebar_position` sont interdits dans le frontmatter)*

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

## Conventions de Formatage et Linting

### Règles Strictes
- **Pas de Sidebar Metadata** : Ne JAMAIS utiliser `sidebar_label` ou `sidebar_position` dans le frontmatter des fichiers Markdown. La structure est gérée par le système de fichiers ou `sidebars.ts`.
- **Espaces autour des listes (MD032)** : Toujours laisser une ligne vide avant le premier élément d'une liste et après le dernier élément.
  - ❌ Incorrect :
    ```markdown
    Texte introductif :
    - Item 1
    ```
  - ✅ Correct :
    ```markdown
    Texte introductif :

    - Item 1
    ```

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
- **Interface** : Screenshots Console
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

### Équations Mathématiques (LaTeX / KaTeX)
Le projet supporte désormais le rendu d'équations mathématiques grâce aux plugins `remark-math` et `rehype-katex`.
- **Blocs** : Utiliser `$$...$$` pour les équations centrées sur leur propre ligne.
- **En ligne** : Utiliser `$..$` pour les formules au sein d'un paragraphe.

**⚠️ Note de compatibilité** :
- Le plugin `rehype-katex` v7 (installé) nécessite une feuille de style KaTeX récente.
- Dans `docusaurus.config.ts`, utiliser impérativement le CSS **v0.16.9+** : `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css`.
- Si une version plus ancienne (ex: v0.13.24) est utilisée, le rendu sera doublé (formule rendue + source texte).

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

## 🎯 EXIGENCES DOCUMENTATION UTILISATEUR

### ⚡ Style Obligatoire : "Mode Anthropic"
**IMPÉRATIF** : Suivre l'approche technique factuelle d'Anthropic/OpenAI

#### ✅ À FAIRE (Style Professionnel)
- **Exemples concrets** : Code curl et Python qui MARCHENT vraiment
- **Tone factuel** : Pas de superlatifs marketing ("révolutionnaire", "inégalé")
- **Architecture technique** : Composants et workflow clairs
- **Tests systématiques** : TOUS les exemples doivent être validés
- **Métriques précises** : Performance et latence vérifiables
- **Workflow de développement** : Phases structurées

#### ❌ INTERDIT (Commercial de Mauvaise Qualité)
- Promesses vagues sans détails techniques
- Comparaisons commerciales agressives  
- Jargon commercial sans substance technique
- Claims sans preuves ou métriques
- Exemples non testés qui ne marchent pas

### 🎭 Processus de Relecture par Persona
**EXIGENCE** : Toute modification ou création de contenu doit être systématiquement évaluée à travers le prisme des personas définis dans `.clinerules/personaProfiles/`.
- **Analyse** : Pour chaque question/réponse ou section, analyser la pertinence, le ton et l'impact pour chaque persona (Dirigeant, Acheteur, DSI, RSSI, Expert Technique).
- **Validation Utilisateur** : Si l'analyse révèle qu'un persona pourrait interpréter négativement le contenu ou que le message n'est pas adapté, je dois soumettre mon analyse à l'utilisateur et demander sa validation avant de finaliser le contenu.
- **Ignorer un Persona** : L'utilisateur peut à tout moment me demander d'ignorer un ou plusieurs personas pour une tâche spécifique.

### 📋 Workflow Git Obligatoire
**EXIGENCE** : Commit + push à chaque étape pour publication immédiate

#### Processus Standard
1. **Créer/Modifier** la documentation source (fr).
2. **Tester** les exemples de code pour garantir leur validité.
3. **Traduire** les modifications en lançant le script (`python scripts/translate_py/translate.py`).
4. **Compiler** le site en local (`yarn build`) pour vérifier l'absence d'erreurs (liens cassés, etc.).
5. **Mettre à jour** le `docs/changelog.md` avec des notes de version claires et orientées utilisateur.
6. **Commiter** l'ensemble des changements (sources, traductions, changelog) avec un message descriptif.
7. **Pousser** les commits sur le dépôt distant.
8. **Mettre à jour** la Memory Bank si de nouvelles règles ou de nouveaux patterns ont été établis.

#### Messages de Commit
- **Format** : Emoji + description technique
- **Contenu** : Ce qui a été testé et validé
- **Détails** : Exemples fonctionnels vs théoriques

### 📝 Gestion du Changelog
**EXIGENCE** : Mettre à jour systématiquement le fichier `docs/changelog.md` après chaque session de travail significative.
- **Audience Cible** : Le changelog est un document **public** destiné aux utilisateurs. La rédaction doit être claire, concise et orientée vers les bénéfices utilisateurs.
- **Contenu** : Lister les changements majeurs, améliorations et corrections de bugs du point de vue de l'utilisateur. **Ne pas mentionner les processus internes** (ex: "revue par persona", "mise à jour de la memory bank").
- **Format** : `### [Date] : Titre de la mise à jour`
- **Attribution** : Mentionner les contributeurs si pertinent.

### 🧪 Validation Systématique
**CRITÈRE QUALITÉ** : Aucun exemple non testé

#### Tests Obligatoires
- **API calls** : curl avec vraies clés
- **Code examples** : Python/JS exécutés
- **Responses** : JSON réels pas inventés
- **Error handling** : Messages d'erreur réels
- **Performance** : Latence mesurée

#### Documentation des Tests LLMaaS ✅ COMPLÉTÉE
- ✅ **Test 1** : curl /v1/models → JSON 46 modèles (plus que documenté)
- ✅ **Test 2** : curl chat/completions → réponse avec usage tokens
- ✅ **Test 3** : curl streaming SSE → format validé avec [DONE]
- ✅ **Test 4** : curl /v1/completions → corrigé (utilise messages)
- ✅ **Scripts Python** : 100% testés (4/4 + 4/4 streaming)
- ✅ **Scripts JavaScript** : 100% testés (5/5 avec axios)
- ✅ **Audio transcriptions** : 100% testés (3/3 avec WAV)
- ✅ **SDK intégrations** : 100% testés (5/5 OpenAI + LangChain)

#### Suite de Tests Complète ✅ 21/21 RÉUSSIS
- 📁 **tests/llmaas/** : Scripts automatisés complets
- 🐍 **Python** : requests + streaming + SDK OpenAI + LangChain
- 🟨 **JavaScript** : Node.js + axios + streaming SSE
- 🎵 **Audio** : Transcription Whisper + formats multiples
- 🔧 **Orchestrateur** : run_all_tests.py avec rapport détaillé

#### Système de Licences LLMaaS ✅ COMPLET (05/06/2025)
- 📄 **apache2.licence.md** : Fichier générique pour 20+ modèles Apache 2.0
- 📄 **llama3.3_70b.licence.md** : Licence spécifique Llama 3.3 Community
- 🔗 **Mappings automatiques** : Script génère liens selon type de licence
- ✅ **Vérification existence** : Aucun lien cassé vers licences
- 🛠️ **Maintenance zéro** : Un fichier par type, réutilisation maximale
- 🤖 **Intégration** : `generate_models_doc.py` gère tout automatiquement

---

## 🔧 Mécanique de Dépannage Build & i18n

### Objectif
Cette section définit la procédure standard pour résoudre les erreurs de build Docusaurus, en particulier celles liées aux traductions (i18n) et au MDX.

### 🚨 Types d'Erreurs Courantes

#### 1. MDX Compilation Failed
**Symptôme** :
```
Error: MDX compilation failed for file "..."
Cause: Could not parse expression with acorn
Line: X, Column: Y
```
**Cause** :
- Blocs de code mal formés ou non fermés (souvent introduit par la traduction automatique).
- Accolades `{}` dans le texte qui sont interprétées comme du code JSX/JS par le parser MDX.
**Solution** :
1.  Localiser la ligne précise dans le fichier indiqué.
2.  Vérifier si le bloc de code précédent est bien fermé par ` ``` `.
3.  Vérifier si le bloc de code contient des ` ``` ` intempestifs à l'intérieur.
4.  Si l'erreur est dans du texte, échapper les accolades ou les mettre dans un bloc de code inline (` `).

#### 2. ReferenceError (Variables Indéfinies)
**Symptôme** :
```
Error: Can't render static file for pathname "..."
[cause]: ReferenceError: [variableName] is not defined
```
**Cause** :
- Import d'image manquant.
- Nom de variable d'image traduit par erreur dans le corps du fichier MDX (ex: `import myImage ... <img src={myImage} />` devient `<img src={monImage} />` après traduction, alors que l'import reste `myImage`).
**Solution** :
1.  Identifier la variable incriminée dans le message d'erreur.
2.  Vérifier les imports en haut du fichier MDX.
3.  Corriger le nom de la variable dans le corps du texte (JSX) pour qu'il corresponde exactement à l'import.

#### 3. Broken Links / Anchors
**Symptôme** :
```
[INFO] Docusaurus found broken links!
... linking to ../path/file.md#anchor (resolved as: ...)
```
**Cause** :
- Liens relatifs incorrects après déplacement de fichiers.
- Ancres (`#titre`) qui changent avec la traduction des titres (ex: `#introduction` devient `#einführung`), alors que le lien pointe toujours vers l'ancre originale (ou vice-versa).
**Solution** :
- Utiliser des liens absolus `/docs/...` plutôt que relatifs complexes.
- Éviter de lier vers des ancres auto-générées dans les fichiers traduits si possible, ou vérifier manuellement les ancres cibles.

### 🛠️ Workflow de Résolution Itératif

1.  **Build de Diagnostic** : Lancer `npm run build` pour obtenir la liste exacte des erreurs.
2.  **Traitement Prioritaire** : S'attaquer d'abord aux erreurs **bloquantes** (MDX, ReferenceError) qui arrêtent le build. Les warnings (broken links) peuvent attendre.
3.  **Correction Ciblée** :
    - Ouvrir le fichier fautif.
    - Utiliser `sed -n 'X,Yp' fichier` pour lire autour de la ligne d'erreur si le fichier est gros.
    - Appliquer la correction.
4.  **Validation Incrémentale** : Relancer le build après chaque correction majeure pour vérifier si l'erreur a disparu ou s'est déplacée.
5.  **Nettoyage** : Une fois le build passant (SUCCESS), traiter les warnings restants si le temps le permet.

---

*Patterns documentaires Cloud Temple - 05/06/2025*
*STYLE ANTHROPIC OBLIGATOIRE - EXEMPLES TESTÉS UNIQUEMENT*

## ⚠️ RÈGLE CRITIQUE ABSOLUE

### 🚫 INTERDICTION FORMELLE : PAS DE CODE NON TESTÉ
- **TOUS les exemples de code DOIVENT être testés** avec infrastructure réelle
- **AUCUN code publié sans validation complète**
- **Code samples = contrat de fonctionnement garanti**
- **Tests obligatoires pour TOUTES les dépendances externes**
- **Validation avec packages réels (LangChain, OpenAI SDK, Semantic Kernel, etc.)**
- **Aucune exception tolérée** - Code non testé = BUG de documentation
