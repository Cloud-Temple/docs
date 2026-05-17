---
title: Catalogue des Modèles IA
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Vue d'ensemble

Cloud Temple LLMaaS propose **56 modèles de langage large** soigneusement sélectionnés et optimisés pour répondre aux exigences **SecNumCloud** les plus strictes. Notre catalogue couvre l'ensemble du spectre, des micro-modèles ultra-efficaces aux modèles extrêmement volumineux.

### Statistiques Globales

| Métrique | Valeur |
|----------|--------|
| **Nombre total de modèles** | 56 modèles |
| **Contexte minimum** | 512 tokens |
| **Contexte maximum** | 1,000,000 tokens |
| **Conformité** | SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ✅ |
| **Localisation** | 100% France 🇫🇷 |

### Tarification

| Type d'utilisation | Prix |
|-------------------|------|
| **Tokens d'entrée** | 1.8€ / million de tokens |
| **Tokens de sortie** | 8€ / million de tokens |
| **Raisonnement avancé** | 8€ / million de tokens |
| **Reranking de documents** | 4€ / million de tokens rerankés |
| **Batch asynchrone (input)** | 0.9€ / million de tokens |
| **Batch asynchrone (output)** | 4€ / million de tokens |

## Modèles Chat & Raisonnement

Modèles généralistes pour le dialogue, l'analyse, le raisonnement et les tâches multilingues.

### cogito:32b
**Deep Cogito • 32B paramètres • Contexte : 32,000 tokens**

Modèle de raisonnement analytique avancé, conçu pour la décomposition de problèmes complexes et la vérification logique.

**Spécifications techniques:**
- **Vitesse** : 21 tokens/seconde
- **Consommation** : 6.32 kWh/million tokens
- **Licence** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Compréhension` `Analyse`

**Cas d'usage :**
- Analyse de scénarios multi-factoriels
- Résolution de problèmes scientifiques avec démonstration formelle
- Systèmes experts (juridique, médical, technique)

---

### gemma3:27b
**Google • 27B paramètres • Contexte : 120,000 tokens**

Modèle multimodal de Google avec vision intégrée et support de 140+ langues. Contexte de 120K tokens.

**Spécifications techniques:**
- **Vitesse** : 23 tokens/seconde
- **Consommation** : 5.80 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Grand Contexte`

**Cas d'usage :**
- Analyse de documents avec contexte étendu (120K tokens)
- Traitement simultané d'images et de texte
- Extraction structurée à partir de PDF et documents scannés

---

### glm-4.7-flash:30b
**Zhipu AI • 30B paramètres • Contexte : 120,000 tokens**

Modèle rapide avec un excellent équilibre performance/latence pour le raisonnement et l'analyse.

**Spécifications techniques:**
- **Vitesse** : 88 tokens/seconde
- **Consommation** : 1.58 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Rapide` `Grand Contexte` `Multilingue`

**Cas d'usage :**
- Assistants conversationnels rapides
- Analyse de documents longs (120k tokens)
- Tâches de raisonnement avec faible latence

---

### gpt-oss:120b
**OpenAI • 120B paramètres • Contexte : 120,000 tokens**

Modèle open-weight de pointe d'OpenAI avec raisonnement configurable et chaîne de pensée transparente.

**Spécifications techniques:**
- **Vitesse** : 94 tokens/seconde
- **Consommation** : 2.37 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Très Large`

**Cas d'usage :**
- Agents conversationnels avancés avec raisonnement complexe
- Applications nécessitant une transparence du processus de raisonnement
- Scénarios commerciaux nécessitant une licence permissive

---

### gpt-oss:20b
**OpenAI • 20B paramètres • Contexte : 120,000 tokens**

Version compacte du modèle OpenAI, optimisée pour l'inférence rapide avec de bonnes capacités de raisonnement.

**Spécifications techniques:**
- **Vitesse** : 41 tokens/seconde
- **Consommation** : 3.25 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Compact` `Rapide`

**Cas d'usage :**
- Inférence rapide avec bonnes capacités de raisonnement
- Cas d'usage agentiques (appel de fonctions, navigation web, exécution de code)
- Applications à budget de calcul limité

---

### llama3.3:70b
**Meta • 70B paramètres • Contexte : 132,000 tokens**

Modèle multilingue de Meta, excellent en dialogue naturel et compréhension nuancée dans 8 langues.

**Spécifications techniques:**
- **Vitesse** : 10 tokens/seconde
- **Consommation** : 13.33 kWh/million tokens
- **Licence** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Dialogue` `Multilingue`

**Cas d'usage :**
- Chatbots multilingues (8 langues)
- Analyse de documents juridiques ou techniques volumineux
- Génération de textes structurés avec fidélité stylistique

---

### ministral-3:14b
**Mistral AI • 14B paramètres • Contexte : 250,000 tokens**

Le plus puissant de la famille Ministral, avec raisonnement et codage avancés. Contexte de 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 28 tokens/seconde
- **Consommation** : 4.74 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Haute Performance` `Raisonnement` `Code`

**Cas d'usage :**
- Résolution de problèmes complexes
- Assistants de codage et d'ingénierie
- Analyse approfondie de documents avec raisonnement

---

### ministral-3:3b
**Mistral AI • 3B paramètres • Contexte : 250,000 tokens**

Modèle compact Mistral, performant malgré sa petite taille. Contexte de 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 22 tokens/seconde
- **Consommation** : 1.75 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient`

**Cas d'usage :**
- Assistants personnels réactifs
- Classification et routage rapides
- Tâches simples avec grand contexte

---

### ministral-3:8b
**Mistral AI • 8B paramètres • Contexte : 250,000 tokens**

Modèle intermédiaire Ministral avec un excellent compromis performance/vitesse. Contexte de 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 40 tokens/seconde
- **Consommation** : 3.33 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Efficient` `Raisonnement`

**Cas d'usage :**
- Assistants conversationnels avancés
- Analyse de documents et extraction d'informations
- Bon compromis vitesse/qualité

---

### mistral-small3.2:24b
**Mistral AI • 24B paramètres • Contexte : 128,000 tokens**

Modèle Mistral avec suivi d'instructions amélioré, function calling robuste et capacités vision. Détection de contenus problématiques intégrée.

**Spécifications techniques:**
- **Vitesse** : 28 tokens/seconde
- **Consommation** : 5.05 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Vision` `Agent` `Sécurité` `Instruction Following`

**Cas d'usage :**
- Agents conversationnels fiables avec suivi d'instructions précis
- Intégration d'outils externes via function calling
- Applications nécessitant filtrage de sécurité natif

---

### mistral-small4:119b
**Mistral AI • 119B paramètres • Contexte : 262,144 tokens**

Modèle Mistral haute performance (119B) avec vision, sécurité intégrée et contexte de 262K tokens. Rapide (100 t/s).

**Spécifications techniques:**
- **Vitesse** : 100 tokens/seconde
- **Consommation** : 2.00 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Vision` `Agent` `Sécurité` `Grand Contexte` `Rapide`

**Cas d'usage :**
- Agents conversationnels haute performance avec vision
- Analyse de documents très longs (262K tokens)
- Applications critiques nécessitant fiabilité et sécurité

---

### nemotron-3-super:120b
**NVIDIA • 120B paramètres • Contexte : 1,000,000 tokens**

Modèle NVIDIA optimisé pour les agents collaboratifs, le raisonnement long et les charges de travail à fort volume. Contexte de 1M tokens.

**Spécifications techniques:**
- **Vitesse** : 72 tokens/seconde
- **Consommation** : 1.93 kWh/million tokens
- **Licence** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte`

**Cas d'usage :**
- Agents autonomes avec appels d'outils multiples
- Automatisation de workflows à fort volume
- Analyse de documents longs avec extraction précise

---

### nemotron-cascade:30b
**NVIDIA • 30B paramètres • Contexte : 1,000,000 tokens**

Modèle NVIDIA spécialisé dans les mathématiques (médaille d'or IMO 2025) et la décomposition de problèmes. Contexte 1M tokens.

**Spécifications techniques:**
- **Vitesse** : 130 tokens/seconde
- **Consommation** : 1.93 kWh/million tokens
- **Licence** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Maths`

**Cas d'usage :**
- Résolution de problèmes mathématiques complexes
- Agents avec appels d'outils multiples
- Analyse de documents longs

---

### nemotron3-nano:30b
**NVIDIA • 30B paramètres • Contexte : 1,000,000 tokens**

Modèle NVIDIA ultra-rapide (160 t/s) avec raisonnement et function calling. Contexte de 1M tokens.

**Spécifications techniques:**
- **Vitesse** : 160 tokens/seconde
- **Consommation** : 1.56 kWh/million tokens
- **Licence** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Rapide`

**Cas d'usage :**
- Agents autonomes nécessitant une réponse rapide
- Raisonnement logique et résolution de problèmes
- Analyse de documents longs avec extraction précise

---

### olmo-3:32b
**AllenAI • 32B paramètres • Contexte : 65,536 tokens**

Premier modèle de raisonnement entièrement ouvert à cette échelle. Transparence totale (données, code, poids).

**Spécifications techniques:**
- **Vitesse** : 22 tokens/seconde
- **Consommation** : 5.98 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Open-Source` `Grand Contexte` `Raisonnement` `Transparent` `Code` `Haute Performance`

**Cas d'usage :**
- Raisonnement complexe et résolution de problèmes multi-étapes
- Développement logiciel avec transparence du processus de décision
- Tâches critiques nécessitant une auditabilité complète

---

### olmo-3:7b
**AllenAI • 7B paramètres • Contexte : 65,536 tokens**

Modèle entièrement ouvert et efficient, excellent en mathématiques et programmation avec transparence totale.

**Spécifications techniques:**
- **Vitesse** : 35 tokens/seconde
- **Consommation** : 1.13 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Open-Source` `Grand Contexte` `Transparent` `Efficient` `Maths` `Code`

**Cas d'usage :**
- Recherche académique nécessitant une reproductibilité totale
- Programmation et résolution de problèmes mathématiques
- Analyse de documents avec traçabilité complète

---

### qwen3-2507-think:4b
**Qwen Team • 4B paramètres • Contexte : 250,000 tokens**

Modèle compact optimisé pour le raisonnement profond (logique, maths, science, code). Contexte de 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 55 tokens/seconde
- **Consommation** : 2.42 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Compact` `Rapide`

**Cas d'usage :**
- Raisonnement complexe (logique, maths, science, code)
- Agents avec grand historique de conversation (250K tokens)
- Analyse de documents volumineux avec raisonnement profond

---

### qwen3-2507:235b
**Qwen Team • 235B paramètres • Contexte : 200,000 tokens**

Modèle le plus puissant du catalogue (235B paramètres, 22B actifs). Excelle en mathématiques, codage et raisonnement logique.

**Spécifications techniques:**
- **Vitesse** : 56 tokens/seconde
- **Consommation** : 3.97 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Très Large`

**Cas d'usage :**
- Résolution de problèmes mathématiques et logiques complexes
- Tâches nécessitant une vaste base de connaissances
- Assistant de codage avancé

---

### qwen3-omni:30b
**Qwen Team • 30B paramètres • Contexte : 32,768 tokens**

Modèle omnimodal natif — comprend simultanément le texte, l'image, la vidéo et l'audio.

**Spécifications techniques:**
- **Vitesse** : 19 tokens/seconde
- **Consommation** : 7.43 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Omni` `Audio` `Vision` `Agent` `Multimodal`

**Cas d'usage :**
- Interactions multimodales (texte + image + audio + vidéo)
- Analyse vidéo et audio combinée
- Assistants intelligents de nouvelle génération

---

### qwen3.5:0.8b
**Qwen Team • 0.8B paramètres • Contexte : 250,000 tokens**

Modèle ultra-léger avec un contexte exceptionnel de 250K tokens — remarquable pour un modèle de cette taille.

**Spécifications techniques:**
- **Vitesse** : 16 tokens/seconde
- **Consommation** : 2.39 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Cas d'usage :**
- Traitement de texte avec très grand contexte (250K tokens)
- Classification et tri rapide
- Assistants légers avec grand historique

---

### qwen3.5:4b
**Qwen Team • 4B paramètres • Contexte : 250,000 tokens**

Modèle Qwen3.5 compact avec un bon compromis performance/efficacité et contexte de 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 37 tokens/seconde
- **Consommation** : 3.64 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Cas d'usage :**
- Assistants conversationnels avec grand contexte
- Résumé de texte et classification
- Tâches de codage simples

---

### qwen3.5:9b
**Qwen Team • 9B paramètres • Contexte : 250,000 tokens**

Modèle Qwen3.5 intermédiaire avec raisonnement solide et contexte étendu à 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 32 tokens/seconde
- **Consommation** : 4.23 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Efficient` `Grand Contexte` `Multilingue` `Raisonnement`

**Cas d'usage :**
- Assistants conversationnels avancés
- Analyse de documents et extraction d'informations
- Tâches de raisonnement de complexité moyenne

---

### qwen3.6:27b
**Qwen Team • 27B paramètres • Contexte : 1,000,000 tokens**

Modèle généraliste de référence avec un contexte natif de 1M tokens. Excelle en raisonnement, suivi d'instructions et multilingue.

**Spécifications techniques:**
- **Vitesse** : 80 tokens/seconde
- **Consommation** : 2.78 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `Multilingue` `Vision` `Raisonnement`

**Cas d'usage :**
- Assistants polyvalents avec suivi d'instructions précis
- Analyse de documents très volumineux (1M tokens)
- Applications multilingues avec raisonnement logique
- Programmation et génération de code

---

### qwen3:0.6b
**Qwen Team • 0.6B paramètres • Contexte : 40,000 tokens**

Micro-modèle ultra-rapide pour les tâches simples et le routage. 40K tokens de contexte.

**Spécifications techniques:**
- **Vitesse** : 46 tokens/seconde
- **Consommation** : 1.33 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Rapide` `Efficient` `Multilingue`

**Cas d'usage :**
- Classification et tri rapide
- Assistants légers avec faible latence
- Routage dans des architectures multi-modèles

---

## Modèles Programmation & Agents

Modèles spécialisés dans le code, l'ingénierie logicielle et les agents autonomes.

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B paramètres • Contexte : 200,000 tokens**

Modèle agentique de pointe pour l'ingénierie logicielle. Performances proches des modèles >100B pour le code. Vision intégrée.

**Spécifications techniques:**
- **Vitesse** : 33 tokens/seconde
- **Consommation** : 4.23 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Programmation` `Vision` `Open-Source` `Grand Contexte` `Rapide`

**Cas d'usage :**
- Agents de codage autonomes
- Refactoring rapide de code
- Tâches d'ingénierie itératives

---

### functiongemma:270m
**Google • 270M paramètres • Contexte : 32,768 tokens**

Micro-modèle spécialisé dans la détection d'appels de fonctions. Idéal comme routeur dans une architecture agentique.

**Spécifications techniques:**
- **Vitesse** : 40 tokens/seconde
- **Consommation** : 0.97 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Compact` `Efficient` `Function Calling`

**Cas d'usage :**
- Routeur d'outils dans une architecture agentique
- Détection d'intentions d'appels de fonctions
- Pré-filtrage rapide avant routage

---

### qwen-coder-next:80b
**Qwen Team • 80B paramètres • Contexte : 250,000 tokens**

Modèle de pointe pour le code et le raisonnement complexe. Contexte de 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 97 tokens/seconde
- **Consommation** : 2.29 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Programmation` `MoE` `Grand Contexte`

**Cas d'usage :**
- Assistant de programmation avancé (échelle dépôt)
- Analyse et refactorisation de code complexe
- Agents autonomes d'ingénierie logicielle

---

### qwen3-next:80b
**Qwen Team • 80B paramètres • Contexte : 250,000 tokens**

Modèle polyvalent 80B optimisé pour les grands contextes, le function calling et le raisonnement structuré.

**Spécifications techniques:**
- **Vitesse** : 67 tokens/seconde
- **Consommation** : 2.09 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `MoE`

**Cas d'usage :**
- Agents conversationnels avancés avec intégration d'outils
- Analyse de documents très volumineux
- Génération de code et raisonnement structuré

---

### qwen3.6:35b
**Qwen Team • 35B paramètres • Contexte : 1,000,000 tokens**

Leader en ingénierie logicielle agentique (SWE-bench 73.4%). Contexte de 1M tokens, vision et tool calling intégrés.

**Spécifications techniques:**
- **Vitesse** : 121 tokens/seconde
- **Consommation** : 2.07 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Programmation` `Grand Contexte` `MoE` `Vision` `Raisonnement`

**Cas d'usage :**
- Assistant de codage agentique dans IDE (Cursor, Continue.dev, VS Code Copilot)
- Analyse de bases de code complètes (1M tokens)
- Revue de code automatisée et CI/CD intelligents
- Résolution de bugs complexes avec raisonnement multi-étapes

---

### rnj-1:8b
**Essential AI • 8B paramètres • Contexte : 32,000 tokens**

Modèle spécialisé STEM — excelle en code (83.5% HumanEval+), mathématiques et sciences.

**Spécifications techniques:**
- **Vitesse** : 23 tokens/seconde
- **Consommation** : 1.69 kWh/million tokens
- **Licence** : [Open Weights](./licences/open_weights.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Code` `Maths` `STEM` `Raisonnement` `Efficient`

**Cas d'usage :**
- Génération de code avancé
- Résolution de problèmes mathématiques complexes
- Tâches scientifiques et techniques

---

## Modèles Vision & Multimodal

Modèles pour l'analyse d'images, vidéos, OCR et documents visuels.

### deepseek-ocr
**DeepSeek AI • 3B paramètres • Contexte : 8,192 tokens**

Modèle OCR spécialisé pour l'extraction de texte haute précision avec préservation de la mise en forme (tableaux, formules).

**Spécifications techniques:**
- **Vitesse** : 84 tokens/seconde
- **Consommation** : 0.66 kWh/million tokens
- **Licence** : [MIT licence](./licences/mit_licence.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `OCR` `Efficient`

**Cas d'usage :**
- Extraction de texte structuré (Markdown/LaTeX) depuis des images/PDF
- Numérisation de documents avec tableaux et formules

---

### gemma4:31b
**Google • 31B paramètres • Contexte : 250,000 tokens**

Modèle dense multimodal de Google, classé 3e mondial sur Arena AI. Vision avancée, raisonnement et codage. Contexte 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 59 tokens/seconde
- **Consommation** : 3.77 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `Vision` `Raisonnement` `Multilingue` `Open-Source`

**Cas d'usage :**
- Agents autonomes avec raisonnement et appels d'outils
- Analyse de documents volumineux avec vision
- Compréhension visuelle (OCR, graphiques, documents scannés)

---

### gemma4:e2b
**Google • 31B (E2B) paramètres • Contexte : 128,000 tokens**

Variante ultra-rapide (125 t/s) de Gemma 4 avec vision. Excellente efficacité énergétique.

**Spécifications techniques:**
- **Vitesse** : 125 tokens/seconde
- **Consommation** : 1.11 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Rapide` `Efficient`

**Cas d'usage :**
- Analyse d'images avec faible latence
- Documents volumineux avec empreinte réduite

---

### gemma4:e4b
**Google • 31B (E4B) paramètres • Contexte : 128,000 tokens**

Variante de Gemma 4 avec meilleur compromis qualité/vitesse que la version E2B. Vision intégrée.

**Spécifications techniques:**
- **Vitesse** : 85 tokens/seconde
- **Consommation** : 1.63 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Rapide`

**Cas d'usage :**
- Analyse de documents et images avec bon compromis qualité/vitesse
- Alternative rapide pour les tâches de vision

---

### granite3.2-vision:2b
**IBM • 2B paramètres • Contexte : 16,384 tokens**

Modèle vision compact IBM Granite pour l'OCR rapide et l'extraction de données depuis des documents scannés.

**Spécifications techniques:**
- **Vitesse** : 49 tokens/seconde
- **Consommation** : 0.80 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Compact` `Efficient` `OCR`

**Cas d'usage :**
- OCR rapide sur documents légers
- Extraction de données depuis des images
- Analyse visuelle à faible consommation

---

### qwen3-vl:235b
**Qwen Team • 235B paramètres • Contexte : 200,000 tokens**

Le modèle multimodal le plus puissant du catalogue. Compréhension visuelle de pointe et raisonnement exceptionnel.

**Spécifications techniques:**
- **Vitesse** : 24 tokens/seconde
- **Consommation** : 5.56 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Vision`

**Cas d'usage :**
- Automatisation documentaire complexe (OCR multilingue, extraction structurée)
- Agents visuels intelligents
- Analyse scientifique avancée (STEM, raisonnement spatial)
- RAG Multimodal sur documents et vidéos

---

### qwen3-vl:2b
**Qwen Team • 2B paramètres • Contexte : 250,000 tokens**

Modèle vision ultra-compact pour l'OCR rapide, la détection d'objets et les applications embarquées.

**Spécifications techniques:**
- **Vitesse** : 64 tokens/seconde
- **Consommation** : 0.95 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Compact` `Efficient` `Multimodal` `OCR`

**Cas d'usage :**
- Analyse d'images en temps réel
- OCR et lecture de documents légers
- Tri et classification visuelle rapide

---

### qwen3-vl:30b
**Qwen Team • 30B paramètres • Contexte : 250,000 tokens**

Modèle multimodal performant pour l'OCR, la détection d'objets, l'analyse de vidéos et le raisonnement spatio-temporel.

**Spécifications techniques:**
- **Vitesse** : 39 tokens/seconde
- **Consommation** : 3.39 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Grand Contexte` `Multimodal` `Vidéo` `OCR`

**Cas d'usage :**
- Analyse de vidéos longues et surveillance intelligente
- Extraction de données structurées (documents, tableaux, graphiques)
- Assistants visuels avec compréhension spatiale

---

### qwen3-vl:32b
**Qwen Team • 32B paramètres • Contexte : 250,000 tokens**

Variante haute performance pour les tâches de vision les plus exigeantes. Contexte 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 17 tokens/seconde
- **Consommation** : 7.75 kWh/million tokens
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

### qwen3-vl:4b
**Qwen Team • 4B paramètres • Contexte : 250,000 tokens**

Modèle vision compact et rapide pour l'analyse documentaire et la compréhension vidéo.

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

Modèle vision intermédiaire — bon compromis entre performance et empreinte. Contexte 250K tokens.

**Spécifications techniques:**
- **Vitesse** : 39 tokens/seconde
- **Consommation** : 3.38 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Multimodal` `Efficient` `Vidéo` `OCR`

**Cas d'usage :**
- Analyse documentaire automatisée
- Compréhension de contenu vidéo
- Assistants visuels interactifs

---

## Modèles d'Embedding

Modèles pour la recherche sémantique et le Retrieval-Augmented Generation (RAG).

### bge-m3:567m
**BAAI • 567M paramètres • Contexte : 8,192 tokens**

Embedding multilingue de pointe (100+ langues). Supporte les recherches dense, sparse et multi-vectorielle.

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

### embeddinggemma:300m
**Google • 300M paramètres • Contexte : 2,048 tokens**

Embedding Google multilingue (100+ langues), optimisé pour la recherche et la récupération sémantique.

**Spécifications techniques:**
- **Vitesse** : 175 tokens/seconde
- **Consommation** : 0.35 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Sémantique` `Efficient` `Multilingue`

**Cas d'usage :**
- Recherche et récupération d'informations
- Classification et clustering de documents
- Recherche de similarité sémantique

---

### granite-embedding:278m
**IBM • 278M paramètres • Contexte : 512 tokens**

Embedding IBM ultra-compact pour une recherche sémantique à latence minimale.

**Spécifications techniques:**
- **Vitesse** : 196.3 tokens/seconde
- **Consommation** : 0.31 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Efficient`

**Cas d'usage :**
- Recherche sémantique haute fréquence
- Clustering de documents

---

### qwen3-embedding:0.6b
**Qwen Team • 0.6B paramètres • Contexte : 32,768 tokens**

Embedding ultra-léger et rapide pour la recherche sémantique à faible latence.

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

Embedding haute performance avec compréhension sémantique profonde et contexte étendu (40K tokens).

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
- RAG avec contexte étendu
- Analyse sémantique de précision

---

### qwen3-embedding:8b
**Qwen Team • 8B paramètres • Contexte : 40,000 tokens**

Embedding haute capacité avec la meilleure compréhension sémantique de la famille Qwen3. Contexte étendu (40K tokens).

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : 0.57 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Grand Contexte` `Haute Performance`

**Cas d'usage :**
- Recherche sémantique de haute précision
- RAG avancé avec contexte étendu
- Analyse sémantique de documents complexes

---

## Modèles de Reranking

Modèles pour le réordonnancement de résultats dans les pipelines RAG.

### bge-reranker-large
**BAAI • 335M paramètres • Contexte : 512 tokens**

Modèle de reranking haute performance de la famille BGE, multilingue.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : N/A
- **Licence** : [MIT](./licences/mit.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Reranker` `Haute Performance`

**Cas d'usage :**
- Réordonnancement multilingue pour RAG

---

### nvidia/llama-nemotron-rerank-vl-1b-v2
**NVIDIA • 1B paramètres • Contexte : 4,096 tokens**

Modèle de reranking compatible API Cohere (/v1/rerank et /v2/rerank). Ordonne les documents par pertinence vis-à-vis d'une requête.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : N/A
- **Licence** : [NVIDIA Open Model License](./licences/nvidia_open_model_license.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Rerank` `RAG` `Compact`

**Cas d'usage :**
- Réordonnancement de résultats de recherche sémantique
- Affinage de la pertinence dans les pipelines RAG

---

### qwen3-reranker:0.6b
**Qwen Team • 0.6B paramètres • Contexte : 4,096 tokens**

Modèle de reranking compact et efficace pour le réordonnancement rapide.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : N/A
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Reranker` `Compact` `Efficient`

**Cas d'usage :**
- Réordonnancement rapide pour RAG

---

### qwen3-reranker:4b
**Qwen Team • 4B paramètres • Contexte : 4,096 tokens**

Modèle de reranking performant avec une grande capacité de compréhension contextuelle.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : N/A
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Reranker` `Performance`

**Cas d'usage :**
- Réordonnancement haute qualité pour RAG

---

## Modèles de Sécurité

Modèles pour le filtrage de contenu, la conformité et les guardrails.

### granite3-guardian:2b
**IBM • 2B paramètres • Contexte : 8,192 tokens**

Version compacte du modèle de sécurité Granite Guardian pour le filtrage à faible latence.

**Spécifications techniques:**
- **Vitesse** : 60 tokens/seconde
- **Consommation** : 0.65 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Guardrails` `Compact` `Efficient`

**Cas d'usage :**
- Guardrails à faible latence dans les workflows agentiques
- Filtrage de sécurité en temps réel

---

### granite3-guardian:8b
**IBM • 8B paramètres • Contexte : 8,192 tokens**

Modèle de sécurité spécialisé dans la détection de contenus problématiques, le jailbreak et la conformité réglementaire.

**Spécifications techniques:**
- **Vitesse** : 45 tokens/seconde
- **Consommation** : 3.09 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Guardrails` `Conformité` `Filtrage`

**Cas d'usage :**
- Détection de contenus problématiques et jailbreak
- Filtrage de sécurité pré/post-génération
- Conformité réglementaire (RGPD, HDS)

---

## Modèles de Traduction

Modèles spécialisés dans la traduction multilingue haute fidélité.

### translategemma:12b
**Google • 12B paramètres • Contexte : 128,000 tokens**

Traduction haute fidélité pour 55 langues avec contexte de 128K tokens.

**Spécifications techniques:**
- **Vitesse** : 27 tokens/seconde
- **Consommation** : 4.87 kWh/million tokens
- **Licence** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Traduction` `Multilingue` `Spécialisé`

**Cas d'usage :**
- Traduction de documents longs
- Communication inter-langues
- Localisation de contenu

---

### translategemma:27b
**Google • 27B paramètres • Contexte : 120,000 tokens**

Traduction haute performance pour 55 langues. Qualité supérieure pour les contenus complexes et techniques.

**Spécifications techniques:**
- **Vitesse** : 17 tokens/seconde
- **Consommation** : 7.84 kWh/million tokens
- **Licence** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Traduction` `Multilingue` `Spécialisé` `Haute Performance`

**Cas d'usage :**
- Traduction de haute précision
- Traduction de documents techniques
- Nuances littéraires et culturelles

---

### translategemma:4b
**Google • 4B paramètres • Contexte : 128,000 tokens**

Traduction rapide et efficace pour 55 langues. Idéal pour la localisation en temps réel.

**Spécifications techniques:**
- **Vitesse** : 31 tokens/seconde
- **Consommation** : 1.25 kWh/million tokens
- **Licence** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Traduction` `Multilingue` `Spécialisé` `Efficient`

**Cas d'usage :**
- Traduction rapide de textes
- Localisation en temps réel
- Traduction à budget limité

---

## Modèles Audio & Image

Modèles pour la transcription audio et la génération d'images.

### voxtral
**Mistral AI • 4B paramètres • Contexte : 32,768 tokens**

Transcription audio en temps réel via WebSocket. Reconnaissance vocale streaming avec faible latence.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : N/A
- **Licence** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `ASR` `Audio` `Realtime` `WebSocket`

**Cas d'usage :**
- Transcription audio en temps réel (streaming)
- Assistants vocaux
- Sous-titrage en direct

---

### z-image:16b
**Community • 16B paramètres • Contexte : 0 tokens**

Génération d'images à partir de prompts textuels, compatible API OpenAI /v1/images/generations.

**Spécifications techniques:**
- **Vitesse** : N/A
- **Consommation** : N/A
- **Licence** : [Open Weights](./licences/open_weights.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités:**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Image Generation` `Créatif` `Multimodal`

**Cas d'usage :**
- Génération d'images à partir de descriptions textuelles
- Création de contenu visuel
- Prototypage visuel rapide

---

## Cas d'Usage Recommandés

### Dialogue multilingue

Chatbots et assistants capables de communiquer dans plusieurs langues avec détection automatique et maintien du contexte

**Modèles recommandés:**

- nemotron-3-super:120b
- qwen3.6:27b
- nemotron3-nano:30b
- gpt-oss:120b

### Analyse de documents longs

Traitement de documents volumineux (>100 pages) avec extraction d'informations clés, résumés et réponses à des questions

**Modèles recommandés:**

- nemotron-3-super:120b
- qwen3.6:27b
- qwen3-2507:235b

### Programmation et développement

Génération, optimisation et débogage de code dans multiples langages, refactoring et création de tests

**Modèles recommandés:**

- qwen3.6:35b
- qwen-coder-next:80b
- devstral-small-2:24b
- nemotron-3-super:120b

### Analyse visuelle

Traitement d'images et documents visuels, OCR, interprétation de graphiques et tableaux

**Modèles recommandés:**

- qwen3-vl:235b
- gemma4:31b
- deepseek-ocr
- qwen3-vl:30b

### Sécurité et conformité

Filtrage de contenu sensible, détection de jailbreak, conformité RGPD/HDS

**Modèles recommandés:**

- granite3-guardian:8b
- granite3-guardian:2b
- mistral-small4:119b

### Déploiements légers

Applications nécessitant une empreinte minimale, faible latence et faible consommation

**Modèles recommandés:**

- qwen3.5:0.8b
- qwen3-vl:2b
- ministral-3:3b

### RAG (Retrieval-Augmented Generation)

Pipelines complets de recherche sémantique, réordonnancement et génération augmentée par la récupération

**Modèles recommandés:**

- bge-m3:567m
- nvidia/llama-nemotron-rerank-vl-1b-v2
- qwen3.6:27b

