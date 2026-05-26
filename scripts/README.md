# Scripts Cloud Temple Documentation

Ce dossier contient les scripts d'automatisation pour la génération et la maintenance de la documentation Cloud Temple.

## 📋 Liste des Scripts

### 🚀 `generate_models_doc.py`
**Générateur automatique de documentation LLMaaS**

Génère automatiquement la documentation Markdown des modèles LLM as a Service à partir du fichier de configuration YAML.

#### Utilisation
```bash
# Via Python directement
python scripts/generate_models_doc.py

```

#### Fonctionnalités
- ✅ **36 modèles** automatiquement documentés
- ✅ **Formatage Docusaurus** avec métadonnées
- ✅ **Logging coloré** avec indicateurs de progression
- ✅ **Gestion d'erreurs** robuste
- ✅ **Types Python** pour la qualité du code
- ✅ **Documentation auto-générée** avec timestamp

#### Source et Sortie
- **Entrée** : `memory-bank/models_config.yaml`
- **Sortie** : `docs/llmaas/models.md`

#### Exemple de sortie
```bash
🚀 Générateur de Documentation LLMaaS Cloud Temple
============================================================

ℹ️ Lecture du fichier memory-bank/models_config.yaml
✅ Configuration chargée: 36 modèles trouvés
ℹ️ 🔨 Génération de la documentation en cours...
✅ Documentation générée : docs/llmaas/models.md
ℹ️ 📊 6 modèles de grande taille
ℹ️ 🔧 34 modèles spécialisés
ℹ️ 🎯 6 cas d'usage documentés

🎉 Documentation générée avec succès !
```

---

### 🐍 `translate_py/translate.py` (Recommandé)
**Système de traduction moderne avec détection intelligente des changements**

Système de traduction Python avancé utilisant l'API Cloud Temple LLMaaS avec une interface utilisateur moderne, détection automatique des changements par hash SHA-256, et gestion optimisée de la concurrence.

#### ✨ Fonctionnalités Avancées
- 🎨 **Interface Rich** : Affichage moderne avec barres de progression en temps réel
- ⚡ **Concurrence optimisée** : Pool de workers pour utilisation maximale de l'API
- 📊 **Statistiques avancées** : Tokens IN/OUT, vitesse tokens/s en temps réel
- 🔍 **Détection intelligente** : Hash SHA-256 pour détecter les fichiers modifiés
- 🚫 **Support .notranslation** : Exclusion automatique de répertoires
- 🔄 **Détection automatique** : Racine du projet détectée automatiquement
- 📋 **Métadonnées intelligentes** : Traduction incrémentale optimisée
- 🎯 **Mode debug** : Logs détaillés avec comparaison des hash
- ✅ **Mode initialisation** : Génération et gestion des métadonnées

#### Installation et Configuration
```bash
# Installation des dépendances
cd scripts/translate_py
pip install -r requirements.txt
```

#### Configuration API

Le token peut être fourni directement en ligne de commande. C'est l'usage recommandé pour éviter de recréer un fichier `.env` local :

```bash
python scripts/translate_py/translate.py --token "$CLOUDTEMPLE_API_KEY"
```

Les options CLI sont prioritaires sur les variables d'environnement :

- `--token` : token Bearer Cloud Temple LLMaaS
- `--url` : URL API, par défaut `https://api.ai.cloud-temple.com/v1/chat/completions`
- `--model` : modèle de traduction, par défaut `qwen3.6:27b`

Les commandes qui ne font pas d'appel API (`--dry-run`, `--init` sans `--translate-missing`) restent utilisables sans token.

Les variables d'environnement restent supportées :

```bash
# API Configuration
CLOUDTEMPLE_API_KEY=your_api_key_here
CLOUDTEMPLE_API_URL=https://api.ai.cloud-temple.com/v1/chat/completions
TRANSLATION_MODEL=qwen3.6:27b

# Performance Settings
CONCURRENT_TRANSLATIONS=8         # Nombre de traductions simultanées
MAX_TOKENS_PER_BLOCK=5000        # Taille max des blocs de traduction
MAX_RETRIES=5                    # Nombre de tentatives par traduction
RETRY_DELAY=5.0                  # Délai entre tentatives (secondes)

# Model Parameters
TRANSLATION_TEMPERATURE=0.1      # Créativité du modèle (0.0-2.0)
TRANSLATION_TOP_P=1.0           # Nucleus sampling (0.0-1.0)
```

#### Utilisation
```bash
# Depuis le répertoire racine ou scripts/translate_py/
python translate.py [OPTIONS]

# Exemples d'utilisation
python translate.py --dry-run                    # Simulation
python translate.py --force                      # Force retraduction
python translate.py --lang=en                    # Traduction anglaise uniquement
python translate.py --debug                      # Mode debug avec logs détaillés
python translate.py --test-api                   # Test de connexion API
python translate.py --token "$CLOUDTEMPLE_API_KEY" --model qwen3.6:27b
```

#### Options Disponibles
- `--dry-run` : Mode simulation sans modifications
- `--force` : Force la retraduction de tous les fichiers
- `--init` : Mode initialisation des métadonnées
- `--translate-missing` : Traduit seulement les fichiers manquants
- `--lang=<code>` : Langue cible spécifique (en, de, es, it)
- `--debug` : Mode debug avec logs détaillés
- `--no-debug-system-prompt` : Masque le prompt système en debug
- `--test-api` : Test la connexion API et affiche le résultat
- `--token=<token>` : Token Bearer Cloud Temple LLMaaS
- `--url=<url>` : URL API de traduction
- `--model=<model>` : Modèle de traduction

#### Fonctionnalité .notranslation
Placez un fichier `.notranslation` dans un répertoire pour forcer la **copie** (au lieu de la traduction) de tous les fichiers de ce répertoire :

```bash
# Exemple : Licences LLM non traduisibles
docs/llmaas/licences/.notranslation

# Résultat : Tous les .md dans licences/ sont copiés identiques
# dans toutes les langues au lieu d'être traduits
```

#### Interface Utilisateur
L'interface moderne affiche en temps réel :
```
🇫🇷 Cloud Temple Documentation Translation 🌍

📋 Configuration
🗣️ Langues Cibles

⏱️ 00:02:45 | 🚀 PRODUCTION | 🗣️ en, de, es, it

📊 Progression          │ 📈 Statistiques
════════════════════════ │ ═══════════════════
🌍 Progression Globale   │ ✅ Traduits    : 42
█████████████░░░ 78%     │ 📋 Copiés     : 8
                        │ ❌ Échecs     : 0
api.md → en             │ 
█████████░░░ 3/4        │ 🔤 Tokens IN  : 125,847
                        │ 📤 Tokens OUT : 98,342
📝 Logs Récents          │ ⚡ Tokens/s   : 1,247.3
════════════════════════ │
✅ Traduction: api.md → en
🔄 Traduction: concepts.md → de
```

#### Workflow de Détection des Changements

**1. Mode Initialisation** (`--init`)
```bash
# Génère les métadonnées pour la première fois
python translate.py --init

# Initialise ET traduit les fichiers manquants
python translate.py --init --translate-missing
```

**2. Détection Automatique**
```bash
# Vérifie quels fichiers ont changé
python translate.py --dry-run --debug

# Exemple de sortie :
# [DRY RUN] Contenu modifié: llmaas/concepts.md → en
#   Hash actuel : 66e0869319196d8d3009c79c3e994e9d4c736677962502ffb5ded09d637284be
#   Hash stocké : 99033f972d83789a35fb75077e53e170df0b14b9fd465ecdbd691bdacdca2b74
```

**3. Traduction Intelligente**
```bash
# Traduit uniquement les fichiers modifiés
python translate.py

# Les hash sont automatiquement mis à jour après traduction réussie
```

#### Architecture du Système
```
scripts/translate_py/
├── translate.py              # 🚀 Script principal
├── config.py                # ⚙️ Configuration et environnement
├── models.py                # 📋 Modèles de données
├── ui.py                   # 🎨 Interface utilisateur Rich
├── translator.py            # 🌐 Moteur de traduction
├── file_manager.py          # 📁 Gestion fichiers et métadonnées
├── translation-meta.json    # 🔍 Métadonnées et hash SHA-256
├── requirements.txt         # 📦 Dépendances Python
├── .env.example            # 📝 Template configuration
└── .env                   # 🔒 Configuration locale optionnelle
```

#### Détection des Changements par Hash SHA-256

Le système utilise des **hash SHA-256** pour une détection précise :

**✅ Fichier modifié** : Hash différent → Traduction nécessaire
```
Hash stocké : 99033f972d83789a35fb75077e53e170df0b14b9fd465ecdbd691bdacdca2b74
Hash actuel : 66e0869319196d8d3009c79c3e994e9d4c736677962502ffb5ded09d637284be
→ TRADUCTION REQUISE
```

**✅ Fichier inchangé** : Hash identique → Ignore
```
Hash stocké : 99033f972d83789a35fb75077e53e170df0b14b9fd465ecdbd691bdacdca2b74
Hash actuel : 99033f972d83789a35fb75077e53e170df0b14b9fd465ecdbd691bdacdca2b74
→ AUCUNE ACTION
```

**Avantages** :
- ✅ **Précision absolue** : Détecte le moindre changement
- ⚡ **Performance optimale** : Évite les traductions inutiles
- 🔒 **Intégrité** : Garantit la cohérence des traductions
- 📊 **Traçabilité** : Logs détaillés des décisions

---

### 📋 `extract_changelog.py`
**Générateur de changelog produits multi-langues**

Extrait les nouvelles fonctionnalités depuis `maj.js` et génère les changelogs dans toutes les langues. Met automatiquement à jour les hash dans `translation-meta.json` après génération.

#### Utilisation
```bash
python scripts/extract_changelog.py
```

#### Source et Sorties
- **Entrée** : `maj.js` (racine du projet)
- **Sorties** :
  - `docs/changelog_produits.md` (FR — source)
  - `i18n/{en,de,es,it}/docusaurus-plugin-content-docs/current/changelog_produits.md`
- **Hash** : Mis à jour automatiquement dans `translation-meta.json` ✅

---

## 🔧 Configuration yarn

Les scripts sont intégrés dans `package.json` pour faciliter l'utilisation :

```json
{
  "scripts": {
    "generate:models": "python scripts/generate_models_doc.py",
    "generate:docs": "yarn generate:models"
  }
}
```

## 📁 Architecture des Fichiers

```
scripts/
├── README.md                        # 📋 Ce fichier
├── extract_changelog.py             # 📋 Générateur changelog multi-langues
├── generate_models_doc/
│   └── generate_models_doc.py       # 🚀 Générateur doc LLMaaS
└── translate_py/                    # 🐍 Système de traduction
    ├── translate.py                 # 🚀 Script principal
    ├── translation-meta.json        # 🔍 Métadonnées et hash SHA-256
    ├── config.py                    # ⚙️ Configuration
    ├── models.py                    # 📋 Modèles de données
    ├── ui.py                        # 🎨 Interface utilisateur
    ├── translator.py                # 🌐 Moteur de traduction
    ├── file_manager.py              # 📁 Gestion fichiers
    ├── requirements.txt             # 📦 Dépendances
    ├── .env.example                 # 📝 Template config
    └── .env                         # 🔒 Configuration locale
```

## 🎯 Workflow de Documentation

### Génération LLMaaS
1. **Éditer** : `memory-bank/models_config.yaml`
2. **Générer** : `yarn generate:models`
3. **Vérifier** : Documentation mise à jour dans `docs/llmaas/models.md`

### Processus de Traduction
1. **Source** : Créer contenu en français dans `/docs/`
2. **Traduire** : `python scripts/translate_py/translate.py`
3. **Vérifier** : Contenu traduit dans `/i18n/[langue]/`

## 🐍 Dépendances Python

Le script `generate_models_doc.py` nécessite :

```bash
# Dépendances requises
pip install pyyaml

# Ou via requirements.txt (à créer si nécessaire)
pip install -r requirements.txt
```

## 🔍 Dépannage

### Erreurs communes

#### `FileNotFoundError: models_config.yaml`
```bash
# Vérifier que le fichier existe
ls memory-bank/models_config.yaml

# S'assurer d'être dans le bon répertoire
cd /path/to/docs/
yarn generate:models
```

#### `ModuleNotFoundError: No module named 'yaml'`
```bash
# Installer PyYAML
pip install pyyaml
```

#### `Permission denied`
```bash
# Rendre le script exécutable
chmod +x scripts/generate_models_doc.py
```

### Validation de sortie

Le fichier généré `docs/llmaas/models.md` doit contenir :
- ✅ En-tête Docusaurus avec métadonnées
- ✅ Avertissement de génération automatique
- ✅ Statistiques globales (36 modèles)
- ✅ Sections "Modèles de Grande Taille" et "Modèles Spécialisés"
- ✅ Cas d'usage recommandés
- ✅ Informations de génération en pied de page

## 📊 Métriques de Performance

### Script generate_models_doc.py
- **Temps d'exécution** : < 5 secondes
- **Fichiers traités** : 1 YAML → 1 Markdown
- **Taille sortie** : ~150KB (36 modèles documentés)
- **Encoding** : UTF-8 (support multilingue)

## 🚀 Évolutions Futures

### Prochaines fonctionnalités planifiées
- [ ] **Génération API** : Script pour `api.md` depuis OpenAPI spec
- [ ] **Génération use-cases** : Script pour `use-cases.md` depuis YAML
- [ ] **Validation automatique** : Vérification cohérence YAML
- [ ] **CI/CD Integration** : Hooks Git pour génération automatique
- [ ] **Template engine** : Support de templates Jinja2 personnalisables

### Améliorations en cours
- [ ] **Requirements.txt** : Dépendances Python formalisées
- [ ] **Unit tests** : Tests automatisés pour les scripts
- [ ] **Configuration** : Fichier de config central pour tous les scripts
- [ ] **Logging** : Logs persistants pour debug

## 📞 Support

Pour toute question sur les scripts :

1. **Documentation** : Consulter ce README
2. **Issues** : Créer une issue dans le repository
3. **Logs** : Vérifier la sortie colorée des scripts
4. **Team** : Contacter l'équipe Cloud Temple Documentation

---

## 🎉 Contribution

### Ajouter un nouveau script

1. **Créer** : `scripts/nouveau_script.py`
2. **Documenter** : Ajouter docstrings et types
3. **Tester** : Vérifier le bon fonctionnement
4. **Intégrer** : Ajouter dans `package.json`
5. **Documenter** : Mettre à jour ce README

### Standards de code

- **Python** : Suivre PEP 8, utiliser type hints
- **JavaScript** : Suivre ESLint, utiliser JSDoc
- **Documentation** : Docstrings complètes
- **Logs** : Utiliser les couleurs pour la lisibilité
- **Erreurs** : Gestion robuste avec messages clairs

---

*Dernière mise à jour : 05/06/2025*
*Scripts maintenus par l'équipe Cloud Temple Documentation*
