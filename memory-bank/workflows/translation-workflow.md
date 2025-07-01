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
- Un fichier `.env` correctement configuré dans `scripts/translate_py/`. Utilisez `scripts/translate_py/.env.example` comme modèle.

### Configuration Essentielle (`.env`)
- `CLOUDTEMPLE_API_KEY`: **Obligatoire**. Votre clé d'accès à l'API LLMaaS de Cloud Temple.
- `CLOUDTEMPLE_API_URL`: Optionnel. L'URL de l'endpoint de l'API. Par défaut : `https://api.ai.cloud-temple.com/v1/chat/completions`.
- `TRANSLATION_MODEL`: Optionnel. Le modèle LLM à utiliser pour la traduction. Par défaut : `qwen3:30b-a3b`.
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
-   Le fichier `scripts/translation-meta.json` est crucial et doit être versionné avec le code.
-   Une relecture humaine des traductions générées est recommandée, surtout pour les contenus critiques ou complexes.
-   Les erreurs de traduction ou les problèmes de formatage doivent être signalés pour améliorer le prompt système ou le script.

## 🚀 Prochaines Étapes / Améliorations Possibles
-   Intégration dans un workflow CI/CD pour automatiser les traductions lors de modifications sur la branche principale.
-   Tableau de bord de l'état des traductions.
-   Mécanisme de relecture et validation humaine intégré.
