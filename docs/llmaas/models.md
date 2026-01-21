---
title: Catalogue des Modèles IA
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Vue d'ensemble

Cloud Temple LLMaaS propose **42 modèles de langage large** soigneusement sélectionnés et optimisés pour répondre aux exigences **SecNumCloud** les plus strictes. Notre catalogue couvre l'ensemble du spectre, des micro-modèles ultra-efficaces aux modèles extrêmement volumineux.

### Statistiques Globales

| Métrique | Valeur |
|----------|--------|
| **Nombre total de modèles** | 42 modèles |
| **Contexte minimum** | 2,048 tokens |
| **Contexte maximum** | 262,144 tokens |
| **Conformité** | SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ✅ |
| **Localisation** | 100% France 🇫🇷 |

### Tarification

| Type d'utilisation | Prix |
|-------------------|------|
| **Tokens d'entrée** | 0.9€ / million de tokens |
| **Tokens de sortie** | 4€ / million de tokens |
| **Raisonnement avancé** | 21€ / million de tokens |

## Modèles de Grande Taille

### cogito:32b
**Deep Cogito • 32B paramètres • Contexte : 32,000 tokens**

Version avancée du modèle Cogito offrant des capacités de raisonnement et d'analyse considérablement amplifiées, conçue pour les applications les plus exigeantes en matière d'intelligence artificielle analytique.

**Spécifications techniques:**
- **Vitesse** : 20 tokens/seconde
- **Consommation** : 6.67 kWh/million tokens
- **Licence** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Compréhension` `Analyse`

**Cas d'usage :**
- Analyse de scénarios multi-factoriels avec évaluation probabiliste des résultats
- Résolution de problèmes scientifiques avec démonstration formelle des étapes
- Applications à haute criticité nécessitant précision et vérifiabilité des résultats
- Systèmes experts dans des domaines spécialisés (juridique, médical, technique)
- Analyse avec raisonnement multi-étapes et explicabilité complète des conclusions

---

### gemma3:27b
**Google • 27B paramètres • Contexte : 120,000 tokens**

Modèle révolutionnaire de Google offrant un équilibre optimal entre puissance et efficacité, avec un rapport performance/coût exceptionnel pour les applications professionnelles exigeantes.

**Spécifications techniques:**
- **Vitesse** : 21 tokens/seconde
- **Consommation** : 6.35 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Grand contexte`

**Cas d'usage :**
- Analyse de documents avec contexte étendu jusqu'à 120K tokens (environ 400 pages)
- Indexation et recherche sémantique dans des bases documentaires volumineuses
- Traitement d'images et texte en simultané grâce aux capacités multimodales
- Extraction structurée de données à partir de PDF et documents scannés
- Intégration avec des outils externes via l'API function calling

---

### glm-4.7:358b
**Zhipu AI • 358B paramètres • Contexte : 120,000 tokens**

Modèle polyvalent de haute performance conçu par Zhipu AI, excellent dans le raisonnement logique, la compréhension multilingue et les tâches complexes.

**Spécifications techniques:**
- **Vitesse** : 18 tokens/seconde
- **Consommation** : 7.41 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Multilingue`

**Cas d'usage :**
- Tâches de raisonnement complexe
- Analyse de documents longs
- Assistants conversationnels avancés

---

### gpt-oss:120b
**OpenAI • 120B paramètres • Contexte : 120,000 tokens**

Modèle de langage open-weight de pointe d'OpenAI, offrant de solides performances avec une licence flexible Apache 2.0.

**Spécifications techniques:**
- **Vitesse** : 104 tokens/seconde
- **Consommation** : 2.19 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Très Large`

**Cas d'usage :**
- Agents conversationnels avancés avec raisonnement complexe et intégration d'outils.
- Applications nécessitant une transparence totale du processus de raisonnement (chain-of-thought).
- Scénarios commerciaux nécessitant une licence permissive (Apache 2.0).
- Fine-tuning pour des tâches spécialisées nécessitant un modèle de base puissant.

---

### llama3.3:70b
**Meta • 70B paramètres • Contexte : 132,000 tokens**

Modèle multilingue de pointe développé par Meta, conçu pour exceller dans le dialogue naturel, le raisonnement complexe et la compréhension nuancée des instructions.

**Spécifications techniques:**
- **Vitesse** : 29 tokens/seconde
- **Consommation** : 7.85 kWh/million tokens
- **Licence** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Dialogue` `Multilingue`

**Cas d'usage :**
- Chatbots multilingues prenant en charge 8 langues simultanément
- Exécution d'instructions complexes enchaînées (prompt chaining)
- Traitement d'une fenêtre de dialogue de 60K tokens pour historique conversationnel
- Analyse de documents juridiques ou techniques volumineux (>100 pages)
- Génération de textes structurés avec fidélité aux consignes stylistiques

---

### ministral-3:14b
**Mistral AI • 14B paramètres • Contexte : 250,000 tokens**

Le plus puissant de la famille Ministral, conçu pour les tâches complexes sur infrastructure locale.

**Spécifications techniques:**
- **Vitesse** : 31 tokens/seconde
- **Consommation** : 4.30 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Haute Performance` `Edge` `Raisonnement` `Code`

**Cas d'usage :**
- Résolution de problèmes complexes en local
- Assistants de codage et d'ingénierie
- Analyse approfondie de documents avec raisonnement

---

### nemotron-3-nano:30b
**NVIDIA • 30B paramètres • Contexte : 250,000 tokens**

Modèle NVIDIA optimisé pour le raisonnement complexe et l'utilisation d'outils, déployé avec un contexte étendu.

**Spécifications techniques:**
- **Vitesse** : 89 tokens/seconde
- **Consommation** : 1.62 kWh/million tokens
- **Licence** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte`

**Cas d'usage :**
- Agents autonomes complexes avec appels d'outils multiples
- Raisonnement logique et résolution de problèmes
- Analyse de documents longs avec extraction précise

---

### olmo-3:32b
**AllenAI • 32B paramètres • Contexte : 65,536 tokens**

Le premier modèle de raisonnement entièrement ouvert à cette échelle, rivalisant avec les meilleurs modèles propriétaires.

**Spécifications techniques:**
- **Vitesse** : 19 tokens/seconde
- **Consommation** : 7.02 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Open-Source` `Grand Contexte` `Raisonnement` `Transparent` `Code` `Haute Performance`

**Cas d'usage :**
- Raisonnement complexe et résolution de problèmes multi-étapes
- Développement logiciel avancé et génération de code
- Analyse approfondie nécessitant une transparence sur le processus de décision

---

### olmo-3:7b
**AllenAI • 7B paramètres • Contexte : 65,536 tokens**

Modèle "Fully Open" de référence, offrant une transparence totale (données, code, poids) et une efficacité remarquable.

**Spécifications techniques:**
- **Vitesse** : 37 tokens/seconde
- **Consommation** : 1.65 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Open-Source` `Grand Contexte` `Transparent` `Efficient` `Maths` `Code`

**Cas d'usage :**
- Recherche académique et scientifique nécessitant une reproductibilité totale
- Tâches de programmation et résolution de problèmes mathématiques
- Analyse de documents moyens avec traçabilité complète

---

### qwen3-2507:235b
**Qwen Team • 235B paramètres • Contexte : 130,000 tokens**

Modèle MoE massif de 235 milliards de paramètres, avec seulement 22 milliards actifs, offrant des performances de pointe.

**Spécifications techniques:**
- **Vitesse** : 58 tokens/seconde
- **Consommation** : 3.93 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Très Large`

**Cas d'usage :**
- Résolution de problèmes mathématiques et logiques complexes
- Tâches nécessitant une vaste base de connaissances
- Assistant de codage avancé
- Analyse approfondie de documents

---

### qwen3-2507:30b-a3b
**Qwen Team • 30B paramètres • Contexte : 250,000 tokens**

Version améliorée du mode non-pensée de Qwen3-30B, avec des capacités générales, une couverture de connaissances et un alignement utilisateur améliorés.

**Spécifications techniques:**
- **Vitesse** : 104 tokens/seconde
- **Consommation** : 1.39 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `MoE` `Multilingue`

**Cas d'usage :**
- Tâches complexes nécessitant un suivi d'instructions précis et un raisonnement logique.
- Applications multilingues avec une large couverture de connaissances.
- Génération de texte de haute qualité pour des tâches ouvertes et subjectives.
- Analyse de documents très volumineux grâce au contexte de 250k tokens.

---

### qwen3-coder:30b
**Qwen Team • 30B paramètres • Contexte : 250,000 tokens**

Modèle MoE optimisé pour les tâches d'ingénierie logicielle, avec un contexte très long.

**Spécifications techniques:**
- **Vitesse** : 104 tokens/seconde
- **Consommation** : 1.39 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Programmation` `Grand Contexte` `MoE`

**Cas d'usage :**
- Agents d'ingénierie logicielle pour explorer et modifier des bases de code
- Génération de code complexe avec compréhension à l'échelle du dépôt (repository-scale)
- Tâches de raisonnement sur des contextes étendus
- Amélioration de code via apprentissage par renforcement

---

### qwen3-next:80b
**Qwen Team • 80B paramètres • Contexte : 262,144 tokens**

Modèle Next 80B de Qwen, optimisé pour les grands contextes et le raisonnement, servi via vLLM (A100).

**Spécifications techniques:**
- **Vitesse** : 148 tokens/seconde
- **Consommation** : 1.54 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `MoE`

**Cas d'usage :**
- Agents conversationnels avancés avec intégration d'outils
- Analyse de documents très volumineux (jusqu'à 260k tokens)
- Génération de code et tâches complexes nécessitant raisonnement structuré

---

### qwen3-omni:30b
**Qwen Team • 30B paramètres • Contexte : 32,768 tokens**

Qwen3-Omni 30B est un modèle omnimodal natif, capable de comprendre le texte, l'image, la vidéo et l'audio dans un même flux.

**Spécifications techniques:**
- **Vitesse** : 86 tokens/seconde
- **Consommation** : 2.65 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Omni` `Audio` `Vision` `Agent` `Multimodal` `BF16`

**Cas d'usage :**
- Interactions multimodales fluides (parle, voit, écoute)
- Analyse vidéo et audio combinée
- Assistants intelligents de nouvelle génération

---

### qwen3-vl:235b
**Qwen Team • 235B paramètres • Contexte : 200,000 tokens**

Le modèle multimodal le plus puissant du catalogue, alliant une compréhension visuelle de pointe à des capacités de raisonnement exceptionnelles.

**Spécifications techniques:**
- **Vitesse** : 31 tokens/seconde
- **Consommation** : 7.35 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `NVFP4` `Blackwell` `Vision`

**Cas d'usage :**
- Automatisation de processus documentaires complexes (OCR multilingue, extraction structurée)
- Agents visuels intelligents pour l'interaction logicielle et l'automatisation d'interface
- Analyse scientifique et technique avancée (STEM, raisonnement spatial 3D)
- RAG Multimodal sur documents volumineux (>200k tokens) et vidéos

---

### qwen3-vl:30b
**Qwen Team • 30B paramètres • Contexte : 250,000 tokens**

Modèle multimodal de pointe (Qwen3-VL) offrant une compréhension visuelle exceptionnelle et un raisonnement temporel précis.

**Spécifications techniques:**
- **Vitesse** : 43 tokens/seconde
- **Consommation** : 3.10 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Grand Contexte` `Multimodal` `Vidéo` `OCR`

**Cas d'usage :**
- Analyse approfondie de vidéos longues et surveillance intelligente
- Extraction de données structurées complexes (documents, tableaux, graphiques)
- Assistants visuels avancés avec compréhension spatiale
- Raisonnement multimodal sur des séquences d'événements

---

### qwen3-vl:32b
**Qwen Team • 32B paramètres • Contexte : 250,000 tokens**

Variante haute performance de Qwen3-VL, optimisée pour les tâches de vision les plus exigeantes.

**Spécifications techniques:**
- **Vitesse** : 17 tokens/seconde
- **Consommation** : 7.84 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Grand Contexte` `Multimodal` `Vidéo` `OCR`

**Cas d'usage :**
- Analyse scientifique et technique d'images haute résolution
- Automatisation de processus visuels complexes
- Compréhension détaillée de scènes dynamiques

---

### qwen3:14b
**Qwen Team • 14B paramètres • Contexte : 131,072 tokens**

Modèle Qwen3 14B équilibré, offrant de solides performances générales avec une bonne vitesse d'inférence.

**Spécifications techniques:**
- **Vitesse** : 68.2 tokens/seconde
- **Consommation** : 0.90 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Polyvalent` `Multilingue`

**Cas d'usage :**
- Assistants virtuels performants
- Génération de contenu de qualité
- Tâches de classification et d'extraction

---

## Modèles Spécialisés

### bge-m3:567m
**BAAI • 567M paramètres • Contexte : 8,192 tokens**

Modèle d'embedding multilingue de pointe (BGE-M3), offrant des capacités de recherche sémantique exceptionnelles sur plus de 100 langues.

**Spécifications techniques:**
- **Vitesse** : 171 tokens/seconde
- **Consommation** : 0.36 kWh/million tokens
- **Licence** : [MIT](./licences/mit.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Multilingue` `Efficient`

**Cas d'usage :**
- Recherche sémantique multilingue
- Retrieval-Augmented Generation (RAG)
- Clustering et classification de documents

---

### deepseek-ocr
**DeepSeek AI • 3B paramètres • Contexte : 8,192 tokens**

Modèle OCR spécialisé de DeepSeek, conçu pour une extraction de texte haute précision avec préservation de la mise en forme.

**Spécifications techniques:**
- **Vitesse** : 79 tokens/seconde
- **Consommation** : 1.01 kWh/million tokens
- **Licence** : [MIT licence](./licences/mit_licence.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `OCR` `Efficient`

**Cas d'usage :**
- Extraction de texte structuré (Markdown/latex) depuis des images/PDF
- Numérisation de documents avec tableaux et formules complexes

---

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B paramètres • Contexte : 380,000 tokens**

Seconde itération de Devstral (Small 2), modèle agentique de pointe pour l'ingénierie logicielle, déployé sur Mac Studio avec un contexte massif.

**Spécifications techniques:**
- **Vitesse** : 23 tokens/seconde
- **Consommation** : 5.80 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Programmation` `Vision` `Open-Source` `Très Grand Contexte`

**Cas d'usage :**
- Agents de codage autonomes sur très grandes bases de code
- Modernisation de systèmes legacy
- Correction de bugs complexes nécessitant une vision globale du projet

---

### devstral:24b
**Mistral AI & All Hands AI • 24B paramètres • Contexte : 120,000 tokens**

Devstral 24b est un LLM agentique spécialisé pour l'ingénierie logicielle, co-développé par Mistral AI et All Hands AI.

**Spécifications techniques:**
- **Vitesse** : 44 tokens/seconde
- **Consommation** : 3.28 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Programmation` `Open-Source` `Grand Contexte` `FP8`

**Cas d'usage :**
- Exploration et modification de bases de code
- Agents autonomes d'ingénierie logicielle
- Refactoring et génération de code complexe

---

### embeddinggemma:300m
**Google • 300M paramètres • Contexte : 2,048 tokens**

Modèle d'embedding de pointe de Google, optimisé pour sa taille, idéal pour les tâches de recherche et de récupération sémantique.

**Spécifications techniques:**
- **Vitesse** : 175 tokens/seconde
- **Consommation** : 0.35 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Sémantique` `Efficient` `Multilingue`

**Cas d'usage :**
- Recherche et récupération d'informations (Retrieval)
- Classification et clustering de documents
- Recherche de similarité sémantique
- Déploiement sur des appareils à ressources limitées (mobile, laptop)

---

### gemma3:1b
**Google • 1B paramètres • Contexte : 120,000 tokens**

Micro-modèle Gemma 3, ultra-rapide et efficace.

**Spécifications techniques:**
- **Vitesse** : 53 tokens/seconde
- **Consommation** : 1.15 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient` `Edge`

**Cas d'usage :**
- Classification de texte rapide
- Chatbots simples
- Prototypage rapide

---

### gemma3:4b
**Google • 4B paramètres • Contexte : 120,000 tokens**

Modèle compact Gemma 3 4B, offrant un excellent ratio performance/taille.

**Spécifications techniques:**
- **Vitesse** : 48.0 tokens/seconde
- **Consommation** : 1.27 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient` `Edge`

**Cas d'usage :**
- Assistants personnels sur laptop
- Résumé de texte
- Traduction légère

---

### gpt-oss:20b
**OpenAI • 20B paramètres • Contexte : 120,000 tokens**

Modèle de langage open-weight d'OpenAI, optimisé pour l'efficacité et le déploiement sur du matériel grand public.

**Spécifications techniques:**
- **Vitesse** : 9 tokens/seconde
- **Consommation** : 14.81 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Compact` `Rapide`

**Cas d'usage :**
- Déploiements sur des appareils à ressources limitées (edge devices) ou des serveurs à faible coût.
- Applications nécessitant une inférence rapide avec de bonnes capacités de raisonnement.
- Cas d'usage agentiques avec appel de fonctions, navigation web et exécution de code.
- Fine-tuning pour des tâches spécialisées sur du matériel grand public.

---

### granite-embedding:278m
**IBM • 278M paramètres • Contexte : 8,192 tokens**

Modèle d'embedding IBM Granite ultra-compact, conçu pour une efficacité maximale.

**Spécifications techniques:**
- **Vitesse** : 196.3 tokens/seconde
- **Consommation** : 0.31 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Efficient`

**Cas d'usage :**
- Recherche sémantique
- Clustering de documents

---

### granite4-small-h:32b
**IBM • 32B (9B actifs) paramètres • Contexte : 128,000 tokens**

Modèle MoE (Mixture-of-Experts) d'IBM, conçu comme un "cheval de bataille" pour les tâches d'entreprise quotidiennes, avec une excellente efficacité pour les longs contextes.

**Spécifications techniques:**
- **Vitesse** : 33 tokens/seconde
- **Consommation** : 4.04 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Raisonnement` `Sécurité` `MoE` `Grand Contexte` `Efficient`

**Cas d'usage :**
- Agents conversationnels pour le support client avec accès à des bases de connaissances étendues.
- Automatisation de workflows d'entreprise nécessitant l'utilisation de plusieurs outils.
- Analyse de documents longs avec une consommation de ressources optimisée.
- Déploiements sur des infrastructures de taille moyenne grâce à son efficacité.

---

### granite4-tiny-h:7b
**IBM • 7B (1B actif) paramètres • Contexte : 128,000 tokens**

Modèle MoE hybride ultra-efficace d'IBM, conçu pour la faible latence, les applications "edge" et locales, et comme brique de base pour les workflows agentiques.

**Spécifications techniques:**
- **Vitesse** : 58 tokens/seconde
- **Consommation** : 1.05 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Raisonnement` `Sécurité` `MoE` `Grand Contexte` `Efficient` `Rapide` `Compact`

**Cas d'usage :**
- Applications embarquées et "edge" nécessitant une faible latence.
- Tâches rapides au sein de workflows agentiques plus larges (ex : function calling).
- Analyse de documents sur du matériel grand public.
- Déploiements nécessitant une empreinte mémoire minimale.

---

### medgemma:27b
**Google • 27B paramètres • Contexte : 128,000 tokens**

MedGemma est un modèle ouvert parmis les plus performants de Google pour la compréhension de textes et d'images médicales, basés sur Gemma 3.

**Spécifications techniques:**
- **Vitesse** : 22 tokens/seconde
- **Consommation** : 6.56 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Médical` `Vision` `Spécialisé` `Grand Contexte`

**Cas d'usage :**
- Interprétation d'images médicales (Génération de rapports et VQA)
- Compréhension de textes médicaux et raisonnement clinique (Aide à la décision)
- Interaction patient (Entretien et triage médical)
- Synthèse de dossiers médicaux et recherche dans la littérature

---

### ministral-3:3b
**Mistral AI • 3B paramètres • Contexte : 250,000 tokens**

Modèle compact de pointe de Mistral AI, conçu pour l'efficacité sur les déploiements locaux et edge.

**Spécifications techniques:**
- **Vitesse** : 50 tokens/seconde
- **Consommation** : 1.22 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient` `Edge`

**Cas d'usage :**
- Inférence locale sur appareils mobiles ou edge devices
- Assistants personnels réactifs
- Tâches de routage et classification rapides

---

### ministral-3:8b
**Mistral AI • 8B paramètres • Contexte : 250,000 tokens**

Modèle de taille intermédiaire de la famille Ministral, offrant un équilibre optimal entre performance et ressources.

**Spécifications techniques:**
- **Vitesse** : 55 tokens/seconde
- **Consommation** : 2.42 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Efficient` `Edge` `Raisonnement`

**Cas d'usage :**
- Assistants conversationnels avancés en local
- Analyse de documents et extraction d'informations
- Tâches nécessitant un bon compromis vitesse/qualité

---

### mistral-small3.2:24b
**Mistral AI • 24B paramètres • Contexte : 128,000 tokens**

Mise à jour mineure de Mistral Small 3.1, améliorant le suivi d'instructions, la robustesse du function calling et réduisant les erreurs de répétition.

**Spécifications techniques:**
- **Vitesse** : 27 tokens/seconde
- **Consommation** : 5.35 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Vision` `Agent` `Sécurité` `Instruction Following`

**Cas d'usage :**
- Agents conversationnels avec un suivi d'instructions amélioré
- Intégration robuste avec des outils externes via function calling
- Applications nécessitant une grande fiabilité pour éviter les répétitions
- Cas d'usage identiques à Mistral Small 3.1 avec des performances accrues

---

### qwen3-2507-think:4b
**Qwen Team • 4B paramètres • Contexte : 250,000 tokens**

Modèle Qwen3-4B optimisé pour le raisonnement, avec des performances améliorées sur les tâches logiques, les mathématiques, la science et le code, et un contexte étendu à 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 52 tokens/seconde
- **Consommation** : 2.56 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Compact` `Rapide`

**Cas d'usage :**
- Tâches de raisonnement très complexes (logique, maths, science, code).
- Agents conversationnels avec un historique de conversation très étendu (256k tokens).
- Analyse de documents très volumineux avec raisonnement profond.
- Intégration avec des outils externes via function calling sur de très grands contextes.

---

### qwen3-2507:4b
**Qwen Team • 4B paramètres • Contexte : 250,000 tokens**

Version mise à jour du mode non-pensée de Qwen3-4B, avec des améliorations significatives des capacités générales, une couverture de connaissances étendue et un meilleur alignement avec les préférences des utilisateurs.

**Spécifications techniques:**
- **Vitesse** : 30 tokens/seconde
- **Consommation** : 4.44 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `Compact` `Rapide` `Multilingue`

**Cas d'usage :**
- Tâches générales nécessitant un suivi d'instructions précis et un raisonnement logique.
- Applications multilingues avec une large couverture de connaissances.
- Génération de texte de haute qualité pour des tâches ouvertes et subjectives.
- Analyse de documents très volumineux grâce au contexte de 256k tokens.

---

### qwen3-embedding:0.6b
**Qwen Team • 0.6B paramètres • Contexte : 32,768 tokens**

Modèle d'embedding Qwen3 ultra-léger, optimisé pour la vitesse et l'efficacité sur les infrastructures à ressources limitées.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : 0.57 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Efficient`

**Cas d'usage :**
- Recherche sémantique rapide
- Classification de texte en temps réel

---

### qwen3-embedding:4b
**Qwen Team • 4B paramètres • Contexte : 40,000 tokens**

Modèle d'embedding Qwen3-4B ultra-performant, offrant une compréhension sémantique profonde et une fenêtre de contexte étendue.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : 0.57 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Grand Contexte` `Efficient`

**Cas d'usage :**
- Recherche sémantique sur documents longs
- RAG avec fenêtres de contexte étendues
- Analyse sémantique de précision

---

### qwen3-vl:2b
**Qwen Team • 2B paramètres • Contexte : 250,000 tokens**

Modèle multimodal ultra-compact Qwen3-VL, apportant des capacités de vision avancées sur edge devices.

**Spécifications techniques:**
- **Vitesse** : 64 tokens/seconde
- **Consommation** : 0.95 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Compact` `Efficient` `Multimodal` `Edge` `OCR`

**Cas d'usage :**
- Analyse d'images en temps réel sur appareils mobiles
- OCR et lecture de documents légers
- Tri et classification visuelle rapide

---

### qwen3-vl:4b
**Qwen Team • 4B paramètres • Contexte : 250,000 tokens**

Modèle multimodal Qwen3-VL équilibré, offrant de solides performances de vision avec une empreinte réduite.

**Spécifications techniques:**
- **Vitesse** : 57 tokens/seconde
- **Consommation** : 2.34 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Compact` `Multimodal` `Efficient` `Vidéo` `OCR`

**Cas d'usage :**
- Analyse documentaire automatisée (factures, formulaires)
- Compréhension de contenu vidéo
- Assistants visuels interactifs

---

### qwen3-vl:8b
**Qwen Team • 8B paramètres • Contexte : 250,000 tokens**

Modèle multimodal Qwen3-VL (8B), offrant des performances de vision avancées avec une empreinte raisonnable.

**Spécifications techniques:**
- **Vitesse** : 44 tokens/seconde
- **Consommation** : 3.03 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Compact` `Multimodal` `Efficient` `Vidéo` `OCR`

**Cas d'usage :**
- Analyse documentaire automatisée
- Compréhension de contenu vidéo
- Assistants visuels interactifs

---

### qwen3:0.6b
**Qwen Team • 0.6B paramètres • Contexte : 40,000 tokens**

Modèle Qwen3 ultra-léger de 0.6 milliard de paramètres, offrant une vitesse d'inférence exceptionnelle pour les tâches simples et rapides.

**Spécifications techniques:**
- **Vitesse** : 46 tokens/seconde
- **Consommation** : 1.33 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Rapide` `Efficient` `Multilingue`

**Cas d'usage :**
- Tâches de traitement de texte simples
- Classification et tri rapide
- Assistants légers avec faible latence

---

### rnj-1:8b
**Essential AI • 8B paramètres • Contexte : 32,000 tokens**

Modèle 8B "Open Weight" spécialisé dans le code, les mathématiques et les sciences (STEM).

**Spécifications techniques:**
- **Vitesse** : 31 tokens/seconde
- **Consommation** : 1.97 kWh/million tokens
- **Licence** : [Open Weights](./licences/open_weights.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Code` `Maths` `STEM` `Raisonnement` `Efficient`

**Cas d'usage :**
- Assistant de programmation avancé et génération de code
- Résolution de problèmes mathématiques complexes
- Tâches scientifiques et techniques (STEM)

---

## Cas d'Usage Recommandés

### Dialogue multilingue

Chatbots et assistants capables de communiquer dans plusieurs langues avec détection automatique, maintien du contexte sur l'ensemble de la conversation et compréhension des spécificités linguistiques

**Modèles recommandés:**

- Llama 3.3
- Mistral Small 3.2
- Qwen 3
- Openai OSS
- Granite 4

### Analyse de documents longs

Traitement de documents volumineux (>100 pages) avec maintien du contexte sur l'ensemble du texte, extraction d'informations clés, génération de résumés pertinents et réponse à des questions spécifiques sur le contenu

**Modèles recommandés:**

- Gemma 3
- Qwen next
- Qwen 3
- Granite 4

### Programmation et développement

Génération et optimisation de code dans multiples langages, débogage, refactoring, développement de fonctionnalités complètes, compréhension des implémentations algorithmiques complexes et création de tests unitaires

**Modèles recommandés:**

- DeepCoder
- Qwen3 coder
- Granite 4
- Devstral

### Analyse visuelle

Traitement direct d'images et documents visuels sans pré-traitement OCR, interprétation de diagrammes techniques, graphiques, tableaux, dessins et photos avec génération d'explications textuelles détaillées du contenu visuel

**Modèles recommandés:**

- deepseek-OCR
- Mistral Small 3.2
- Gemma 3
- Qwen 3 VL

### Sécurité et conformité

Applications nécessitant des capacités spécifiques en matière de sécurité ; filtrage de contenu sensible, traçabilité des raisonnements, vérification RGPD/HDS, minimisation des risques, analyse des vulnérabilités et respect des réglementations sectorielles

**Modèles recommandés:**

- Granite Guardian
- Granite 4
- Devstral
- Mistral Small 3.2
- Magistral small

### Déploiements légers et embarqués

Applications nécessitant une empreinte minimale en ressources, déploiement sur appareils à capacité limitée, inférence en temps réel sur CPU standard et intégration dans des systèmes embarqués ou IoT

**Modèles recommandés:**

- Gemma 3n
- Granite 4 tiny
- Qwen 3 VL (2B)
