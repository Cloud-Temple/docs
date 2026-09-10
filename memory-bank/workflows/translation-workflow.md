# Workflow de Traduction de la Documentation Cloud Temple

Ce document décrit le processus et les outils utilisés pour traduire la documentation technique de Cloud Temple du français (langue source) vers les autres langues supportées.

## 🎯 Objectif

L'objectif est de maintenir des traductions de haute qualité, cohérentes et à jour pour l'ensemble de la documentation, en s'appuyant sur une automatisation intelligente via l'API LLMaaS de Cloud Temple.

## 🛠️ Outil Principal : `scripts/translate_py/translate.py`

Le script `scripts/translate_py/translate.py` est l'outil central de ce workflow. Il gère :
- La détection des fichiers modifiés depuis la dernière traduction.
- La traduction du contenu Markdown via l'API Cloud Temple LLMaaS.
- La copie des fichiers non-Markdown (images, documents, etc.).
- La gestion des métadonnées de traduction (hachages des fichiers sources).

### Prérequis
- Python 3.8+
- Les dépendances listées dans `scripts/translate_py/requirements.txt`.
- Un token Cloud Temple LLMaaS pour les exécutions qui appellent l'API. Le token peut être fourni en CLI avec `--token` ou via `CLOUDTEMPLE_API_KEY`.

### Configuration Essentielle

Les options CLI sont prioritaires sur les variables d'environnement :

- `--token` / `CLOUDTEMPLE_API_KEY`: token Bearer Cloud Temple LLMaaS. Requis pour une traduction réelle ou `--test-api`, non requis pour `--dry-run`.
- `--url` / `CLOUDTEMPLE_API_URL`: endpoint de l'API. Par défaut : `https://api.ai.cloud-temple.com/v1/chat/completions`.
- `--model` / `TRANSLATION_MODEL`: modèle LLM à utiliser pour la traduction. Par défaut : `qwen3.6:27b`.
- `MODEL_TYPE`: Optionnel. Le type de modèle pour la gestion du tokenizer ('openai' ou 'other'). Par défaut : `other`.
- `CONCURRENT_TRANSLATIONS`: Optionnel. Nombre de fichiers traités en parallèle. Par défaut : `4`.
- `MAX_MODEL_CONTEXT_LENGTH`: Optionnel. La longueur maximale du contexte du modèle. Par défaut : `32768`.
- `BUFFER_TOKENS`: Optionnel. Un buffer de sécurité à soustraire du contexte disponible. Par défaut : `200`.
- D'autres variables optionnelles (`TRANSLATION_TEMPERATURE`, `TRANSLATION_TOP_P`, `DOC_BASE_PATH`) peuvent être configurées.

## 🔄 Processus de Traduction

1.  **Création/Modification de Contenu** :
    *   Tout nouveau contenu ou toute modification doit être effectué sur les fichiers sources en **français** dans le dossier `docs/`.

2.  **Exécution du Script de Traduction** :
    *   Depuis la racine du projet, lancez :
        ```bash
        python scripts/translate_py/translate.py [options]
        ```
    *   Le script va :
        a.  Scanner le dossier `docs/`.
        b.  Pour chaque fichier `.md`, calculer un hachage SHA-256 de son contenu.
        c.  Comparer ce hachage avec celui stocké dans `scripts/translate_py/translation-meta.json` pour chaque langue cible.
        d.  Si un fichier source a été modifié (hachage différent) ou si une traduction est manquante (et que l'option appropriée est utilisée), son contenu est envoyé à l'API Cloud Temple LLMaaS pour traduction.
        e.  Les traductions sont sauvegardées dans les dossiers `i18n/<code>/docusaurus-plugin-content-docs/current/`.
        f.  Le nouveau hachage du fichier source est enregistré dans `scripts/translate_py/translation-meta.json` pour la langue traitée.
        g.  Les fichiers non `.md` (images, `.docx`, etc.) sont copiés dans les dossiers `i18n/` respectifs s'ils n'existent pas ou si leur contenu a changé.

### Options de Ligne de Commande Utiles
-   `--dry-run`: Simule l'exécution, montre ce qui serait traduit ou copié sans effectuer d'appels API ni modifier de fichiers.
-   `--force`: Force la retraduction de tous les fichiers Markdown, ignorant les hachages.
-   `--init`: Mode d'initialisation. Met à jour `translation-meta.json` avec les hachages des fichiers sources français actuels. Ne traduit rien par défaut.
    -   `--init --translate-missing`: En mode initialisation, traduit également les fichiers pour lesquels une traduction n'existe pas encore dans une langue cible.
-   `--translate-missing`: En mode de traduction normal, se concentre sur la traduction des fichiers qui n'ont pas encore de version traduite dans une langue cible, sans forcément retraduire ceux qui existent déjà (sauf si leur source a changé).
-   `--lang=<code>`: Permet de cibler une seule langue pour la traduction (ex: `--lang=en`).
-   `--debug`: Active le mode de débogage avec des logs détaillés, y compris les payloads des requêtes API.
-   `--token=<token>`: Fournit le token Bearer Cloud Temple LLMaaS directement en CLI.
-   `--url=<url>`: Remplace l'endpoint API par défaut.
-   `--model=<model>`: Remplace le modèle de traduction par défaut.

### Langues Supportées
-   Source : Français (contenu dans `docs/`)
-   Cibles :
    -   Anglais (`en`)
    -   Allemand (`de`)
    -   Espagnol (`es`)
    -   Italien (`it`)

## ⚙️ Fonctionnalités Clés du Script
-   **Traduction différentielle** : Ne retraduit que ce qui a changé grâce au suivi des hachages.
-   **Parallélisation** : Traite plusieurs fichiers en parallèle (configurable via `CONCURRENT_TRANSLATIONS`) pour accélérer le processus.
-   **Gestion des Blocs** : Divise les gros fichiers en blocs plus petits pour la traduction afin de respecter les limites de tokens de l'API.
-   **Gestion du Contexte du Modèle** : Calcule dynamiquement la taille maximale de la réponse (`max_tokens`) pour éviter les erreurs de dépassement de contexte.
-   **Comptage de Tokens Adaptatif** : Utilise `tiktoken` pour les modèles OpenAI et une estimation par caractères pour les autres, assurant une meilleure robustesse.
-   **Robustesse** : Inclut des tentatives multiples (retries) pour les appels API.
-   **Prompt Système Renforcé** : Le prompt système a été amélioré pour éviter que le modèle n'inclue des pensées internes ou du texte non pertinent dans la traduction.
-   **Préservation du formatage** : Le prompt système de l'API est conçu pour préserver au maximum la structure Markdown, les blocs de code, et les éléments HTML.

## 📈 Suivi et Qualité
-   Le fichier `scripts/translate_py/translation-meta.json` est crucial et doit être versionné avec le code.
-   Une relecture humaine des traductions générées est recommandée, surtout pour les contenus critiques ou complexes.
-   Les erreurs de traduction ou les problèmes de formatage doivent être signalés pour améliorer le prompt système ou le script.

## 🔧 Correction majeure du 14/05/2026 : chunking code-block-aware

### Problème résolu

Le `ContentSplitter` dans `translator.py` ne tenait pas compte des blocs de code délimités par ` ``` ` lors du découpage en chunks. Cela causait :

1. **Headers dans le code traités comme des points de coupure** : Un `# commentaire Python` ou `## exemple` dans un bloc ` ```python ` était interprété comme un header Markdown, cassant le bloc de code en deux chunks séparés.
2. **Coupures au milieu des blocs de code** : Le sous-découpage des gros blocs (`_split_large_block`) coupait sur les `.`, `!`, `?` ou espaces sans vérifier si le point de coupure était dans un bloc de code.
3. **Résultat** : Les traductions produisaient des fichiers avec des blocs de code cassés (ouverture ` ``` ` sans fermeture), causant des erreurs MDX au build.

### Solution implémentée

Nouvelles méthodes dans `ContentSplitter` :

- **`_find_code_block_ranges(text)`** : Identifie toutes les plages `(start, end)` des blocs de code ` ``` ... ``` ` dans le texte. Gère les fence de longueur variable et les blocs non fermés.
- **`_is_inside_code_block(position, code_ranges)`** : Vérifie si une position donnée est à l'intérieur d'un bloc de code.
- **`_find_safe_split_point(text, start, end, code_ranges)`** : Cherche un point de coupure sûr (hors bloc de code) avec priorité : ligne vide > fin de phrase > saut de ligne.
- **`split_content()` modifié** : Filtre les headers qui sont à l'intérieur d'un bloc de code avant de découper.
- **`_split_large_block()` modifié** : Utilise `_find_safe_split_point()` et ne coupe jamais au milieu d'un bloc de code. Si bloqué dans un code block, prend tout le bloc jusqu'à sa fermeture.

### Validation

Test unitaire validé : un document avec des `# commentaires Python` et `## faux headers` dans des blocs ` ```python ` et ` ```bash ` produit des blocs avec des code fences toujours équilibrées.

## 🔧 Correction du 14/05/2026 : suppression de la copie d'images

Depuis avril 2026, les images dans la documentation utilisent des chemins absolus `@site/docs/...` au lieu de chemins relatifs `./images/...`. Les versions i18n référencent directement les images sources, donc **les images n'ont plus besoin d'être dupliquées** dans les dossiers `i18n/`.

**Modification** : Dans `file_manager.py`, la méthode `_needs_translation()` retourne maintenant `False` pour tous les fichiers non-Markdown (images, .docx, .pdf, etc.). Cela économise ~2500 fichiers inutiles (613 images × 4 langues).

## 🔧 Mise à jour du 26/05/2026 : configuration API en CLI

Le script `translate.py` accepte désormais `--token`, `--url` et `--model`. Cette évolution évite de dépendre d'un fichier `.env` local pour lancer une traduction réelle depuis un poste de travail.

Points opérationnels :

- `--token` est prioritaire sur `CLOUDTEMPLE_API_KEY`.
- `--url` est prioritaire sur `CLOUDTEMPLE_API_URL`.
- `--model` est prioritaire sur `TRANSLATION_MODEL`.
- Le modèle par défaut est `qwen3.6:27b`.
- L'URL par défaut reste `https://api.ai.cloud-temple.com/v1/chat/completions`.
- `--dry-run` et `--init` sans `--translate-missing` ne nécessitent pas de token API.

## 🚀 Prochaines Étapes / Améliorations Possibles

- Relancer les traductions des fichiers modifiés avec le script corrigé.
- Nettoyer les images orphelines dans les dossiers i18n (optionnel, pas bloquant).
- Intégration dans un workflow CI/CD pour automatiser les traductions lors de modifications sur la branche principale.
- Tableau de bord de l'état des traductions.
- Mécanisme de relecture et validation humaine intégré.
