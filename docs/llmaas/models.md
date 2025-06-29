---
title: Catalogue des Modèles LLMaaS
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Vue d'ensemble

Cloud Temple LLMaaS propose **45 modèles de langage large** soigneusement sélectionnés et optimisés pour répondre aux exigences **SecNumCloud** les plus strictes. Notre catalogue couvre l'ensemble du spectre, des micro-modèles ultra-efficaces aux modèles extrêmement volumineux.

### Statistiques Globales

| Métrique | Valeur |
|----------|--------|
| **Nombre total de modèles** | 45 modèles |
| **Contexte minimum** | 8 192 tokens |
| **Contexte maximum** | 128 000 tokens |
| **Conformité** | SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ❌ |
| **Localisation** | 100% France 🇫🇷 |

### Tarification

| Type d'utilisation | Prix |
|-------------------|------|
| **Tokens d'entrée** | 0.9€ / million de tokens |
| **Tokens de sortie** | 4€ / million de tokens |
| **Raisonnement avancé** | 21€ / million de tokens |

## Modèles de Grande Taille

### Llama 3.3 70B
**Meta • 70B paramètres • Contexte : 60 000 tokens**

Modèle multilingue de pointe développé par Meta, conçu pour exceller dans le dialogue naturel, le raisonnement complexe et la compréhension nuancée des instructions.

**Spécifications techniques :**
- **Vitesse** : 26 tokens/seconde tokens/seconde
- **Consommation** : 11.75 kWh/million tokens
- **Licence** : LLAMA 3.3 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Dialogue` `Multilingue`

**Cas d'usage :**
- Chatbots multilingues prenant en charge 8 langues simultanément
- Exécution d'instructions complexes enchaînées (prompt chaining)
- Traitement d'une fenêtre de dialogue de 60K tokens pour historique conversationnel
- Analyse de documents juridiques ou techniques volumineux (>100 pages)
- Génération de textes structurés avec fidélité aux consignes stylistiques

---

### Qwen3 235B
**Qwen Team • 235B paramètres • Contexte : 60 000 tokens**

Modèle très volumineux de la nouvelle génération Qwen3, offrant des capacités étendues pour les tâches les plus complexes.

**Spécifications techniques :**
- **Vitesse** : 17 tokens/seconde tokens/seconde
- **Consommation** : 7.84 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Multilingue` `Très Large`

**Cas d'usage :**
- Agents conversationnels très avancés avec grand contexte et intégration d'outils (MCP)
- Résolution de problèmes extrêmement complexes (maths, code)
- Analyse et génération de documents très volumineux et techniques
- Applications multilingues (>100 langues) nécessitant une compréhension et une génération de très haute fidélité

---

### DeepSeek-R1 671B
**DeepSeek AI • 671B paramètres • Contexte : 16 000 tokens**

Modèle extrêmement volumineux de DeepSeek AI, conçu pour le summum du raisonnement et de la génération.

**Spécifications techniques :**
- **Vitesse** : 12 tokens/seconde tokens/seconde
- **Consommation** : 11.11 kWh/million tokens
- **Licence** : MIT Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Extrêmement Large`

**Cas d'usage :**
- Tâches de raisonnement de pointe
- Génération de texte de qualité supérieure
- Recherche et développement en IA

---

### Gemma 3 27B
**Google • 27B paramètres • Contexte : 120 000 tokens**

Modèle révolutionnaire de Google offrant un équilibre optimal entre puissance et efficacité, avec un rapport performance/coût exceptionnel pour les applications professionnelles exigeantes.

**Spécifications techniques :**
- **Vitesse** : 20 tokens/seconde tokens/seconde
- **Consommation** : 6.67 kWh/million tokens
- **Licence** : Google Gemma Terms of Use
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Grand contexte`

**Cas d'usage :**
- Analyse de documents avec contexte étendu jusqu'à 120K tokens (environ 400 pages)
- Indexation et recherche sémantique dans des bases documentaires volumineuses
- Traitement d'images et texte en simultané grâce aux capacités multimodales
- Extraction structurée de données à partir de PDF et documents scannés
- Intégration avec des outils externes via l'API function calling

---

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B paramètres • Contexte : 32 000 tokens**

Modèle MoE FP8 (3B activés) nouvelle génération, avec modes de pensée hybrides et capacités agentiques avancées.

**Spécifications techniques :**
- **Vitesse** : 106 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.88 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Rapide` `Multilingue`

**Cas d'usage :**
- Agents conversationnels avancés avec intégration d'outils (MCP)
- Résolution de problèmes complexes (maths, code) avec mode "Thinking"
- Applications multilingues (>100 langues)
- Scénarios nécessitant un équilibre coût/performance (MoE) sur VLLM
- Dialogue multi-tours engageant et suivi d'instructions précis

---

### DeepSeek-R1 70B
**DeepSeek AI • 70B paramètres • Contexte : 32 000 tokens**

Modèle 70B de DeepSeek AI

**Spécifications techniques :**
- **Vitesse** : 21 tokens/seconde tokens/seconde
- **Consommation** : 12.56 kWh/million tokens
- **Licence** : MIT Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Large`

**Cas d'usage :**
- Tâches de raisonnement de pointe
- Génération de texte de qualité supérieure
- Recherche et développement en IA

---

### Qwen2.5-VL 32B
**Qwen Team • 32B paramètres • Contexte : 120 000 tokens**

Version la plus puissante de la série Qwen2.5-VL, offrant des capacités de compréhension visuelle et d'agentique de pointe.

**Spécifications techniques :**
- **Vitesse** : 18 tokens/seconde tokens/seconde
- **Consommation** : 7.41 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Raisonnement` `OCR` `Localisation Visuelle` `Large`

**Cas d'usage :**
- Analyse de documents et de diagrammes très complexes
- Agents visuels autonomes pour la navigation et l'interaction avec des GUI
- Tâches de localisation d'objets et de reconnaissance de texte de haute précision
- Génération de descriptions riches et détaillées à partir d'images complexes

---

### Qwen2.5-VL 72B
**Qwen Team • 72B paramètres • Contexte : 128 000 tokens**

Version la plus puissante de la série Qwen2.5-VL, offrant des capacités de compréhension visuelle et d'agentique de pointe pour les tâches les plus exigeantes.

**Spécifications techniques :**
- **Vitesse** : 15 tokens/seconde tokens/seconde
- **Consommation** : 8.89 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Raisonnement` `OCR` `Localisation Visuelle` `Très Large`

**Cas d'usage :**
- Analyse de documents et de diagrammes très complexes
- Agents visuels autonomes pour la navigation et l'interaction avec des GUI
- Tâches de localisation d'objets et de reconnaissance de texte de très haute précision
- Génération de descriptions riches et détaillées à partir d'images très complexes

---

## Modèles Spécialisés

### Qwen3 14B
**Qwen Team • 14B paramètres • Contexte : 32 000 tokens**

Modèle dense nouvelle génération Qwen3 (14B), offrant des performances équivalentes à Qwen2.5 32B avec une meilleure efficacité.

**Spécifications techniques :**
- **Vitesse** : 68 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.88 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Rapide` `Multilingue`

**Cas d'usage :**
- Tâches générales nécessitant performance et grand contexte
- Génération de contenu créatif et technique
- Analyse de données et raisonnement complexe
- Intégration avec des outils externes via function calling

---

### Gemma 3 12B
**Google • 12B paramètres • Contexte : 120 000 tokens**

Version intermédiaire du modèle Gemma 3 offrant un excellent équilibre entre performance et efficacité.

**Spécifications techniques :**
- **Vitesse** : 56 tokens/seconde tokens/seconde ⚡
- **Consommation** : 4.71 kWh/million tokens
- **Licence** : Google Gemma Terms of Use
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Rapide` `Grand Contexte`

**Cas d'usage :**
- Applications multimodales avec contraintes de ressources modérées
- Traitement de documents avec contexte standard (jusqu'à 100 pages)
- Génération de contenu textuel et analyse d'images combinées
- Déploiements sur GPU standard sans infrastructure spécialisée
- Chatbots avancés avec capacités visuelles et textuelles intégrées

---

### Gemma 3 4B
**Google • 4B paramètres • Contexte : 120 000 tokens**

Modèle compact de Google offrant d'excellentes performances dans un format léger et économique.

**Spécifications techniques :**
- **Vitesse** : 57 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.58 kWh/million tokens 🌱
- **Licence** : Google Gemma Terms of Use
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Rapide` `Compact` `Grand Contexte` `Efficient`

**Cas d'usage :**
- Applications embarquées et edge computing avec traitement d'images
- Chatbots multimodaux réactifs nécessitant une faible latence
- Déploiements à grande échelle avec capacités visuelles et textuelles
- Applications mobiles avec analyse d'images et textes
- Traitement de requêtes visuelles simples à moyenne complexité avec haute performance

---

### Gemma 3 1B
**Google • 1B paramètres • Contexte : 32 000 tokens**

Micro-modèle ultra-léger conçu pour les déploiements sur appareils à très faibles ressources.

**Spécifications techniques :**
- **Vitesse** : 112 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.15 kWh/million tokens 🌱
- **Licence** : Google Gemma Terms of Use
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Ultra-compact` `Embarqué` `Efficient` `Rapide`

**Cas d'usage :**
- Déploiement sur appareils IoT et systèmes embarqués avec intégration API
- Applications nécessitant inférence locale sur CPU avec appels à des fonctions
- Tâches textuelles basiques avec temps de réponse instantané et function calling
- Assistants compacts pour applications grand public avec intégration services externes
- Systèmes de contrôle intelligents intégrant plusieurs APIs/services

---

### Lucie-7B-Instruct
**OpenLLM-France • 7B paramètres • Contexte : 32 000 tokens**

Modèle causal multilingue open-source (7B), fine-tuné depuis Lucie-7B. Optimisé pour le français.

**Spécifications techniques :**
- **Vitesse** : 4 tokens/seconde tokens/seconde
- **Consommation** : 8.33 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Français` `Open-Source` `Efficient`

---

### Mistral Small 3.1
**Mistral AI • 24B paramètres • Contexte : 120 000 tokens**

Modèle compact et réactif de Mistral AI, spécialement conçu pour offrir une assistance conversationnelle fluide et pertinente avec une vitesse de réponse optimale.

**Spécifications techniques :**
- **Vitesse** : 35 tokens/seconde tokens/seconde
- **Consommation** : 3.72 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Vision` `Agent` `Sécurité`

**Cas d'usage :**
- Applications conversationnelles
- Assistants virtuels combinant analyse d'images et texte (26 tokens/s)
- Chatbots de support technique avec accès à la documentation technique
- Outils de création/édition de contenu avec réponse immédiate (blogs, emails)
- Déploiement sur infrastructures standard (24B de paramètres)

---

### Mistral Small 3.2
**Mistral AI • 24B paramètres • Contexte : 120 000 tokens**

Mise à jour mineure de Mistral Small 3.1, améliorant le suivi d'instructions, la robustesse du function calling et réduisant les erreurs de répétition.

**Spécifications techniques :**
- **Vitesse** : 35 tokens/seconde tokens/seconde
- **Consommation** : 3.72 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Vision` `Agent` `Sécurité` `Instruction Following`

**Cas d'usage :**
- Agents conversationnels avec un suivi d'instructions amélioré
- Intégration robuste avec des outils externes via function calling
- Applications nécessitant une grande fiabilité pour éviter les répétitions
- Cas d'usage identiques à Mistral Small 3.1 avec des performances accrues

---

### DeepCoder
**Agentica x Together AI • 14B paramètres • Contexte : 32 000 tokens**

Modèle IA open source (14B) par Together AI & Agentica, alternative crédible aux modèles propriétaires pour la génération de code.

**Spécifications techniques :**
- **Vitesse** : 64 tokens/seconde tokens/seconde ⚡
- **Consommation** : 4.12 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Programmation` `Raisonnement` `Open-Source` `Mathématiques` `Rapide`

**Cas d'usage :**
- Génération de code dans plus de 15 langages avec optimisation des performances
- Débogage et refactoring de bases de code existantes avec analyse d'impact
- Implémentation d'algorithmes complexes (graphes, arbres, heuristiques)
- Création automatisée de tests unitaires avec couverture de code > 80%
- Transposition de code entre langagesframeworks (par exemple Python vers JavaScript)

---

### Granite 3.2 Vision
**IBM • 2B paramètres • Contexte : 16 384 tokens**

Modèle compact révolutionnaire d'IBM spécialisé dans la vision par ordinateur, capable d'analyser et comprendre directement les documents visuels sans recourir à des technologies OCR intermédiaires.

**Spécifications techniques :**
- **Vitesse** : 48 tokens/seconde tokens/seconde
- **Consommation** : 0.69 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Vision` `Sécurité` `Compact` `Efficient`

**Cas d'usage :**
- Extraction de données structurées à partir de factures et formulaires sans OCR
- Analyse directe de tableaux et graphiques avec interprétation des tendances
- Lecture et interprétation de diagrammes techniques (électriques, mécaniques)
- Traitement de documents manuscrits avec taux de reconnaissance élevé
- Vision par ordinateur légère (2B paramètres) avec vitesse élevée (50 tokens/s)

---

### Granite 3.3 8B
**IBM • 8B paramètres • Contexte : 60 000 tokens**

Modèle Granite 8B fine-tuné par IBM pour un raisonnement et un suivi d'instructions améliorés, avec un contexte de 128k tokens.

**Spécifications techniques :**
- **Vitesse** : 30 tokens/seconde tokens/seconde
- **Consommation** : 1.11 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Raisonnement` `Sécurité` `Efficient`

**Cas d'usage :**
- Tâches générales d'instruction-following (classification, extraction, Q&A)
- Assistants IA multilingues (12 langues)
- Traitement de documents très longs (128k tokens) pour les taches de résumés, Q&A,...
- Génération/complétion de code avec Fill-in-the-Middle
- Intégration avec des outils externes via function calling
- Raisonnement structuré avec le mode "Thinking"

---

### Granite 3.3 2B
**IBM • 2B paramètres • Contexte : 120 000 tokens**

Modèle Granite 2B fine-tuné par IBM, optimisé pour le raisonnement et le suivi d'instructions, avec un contexte de 128k tokens.

**Spécifications techniques :**
- **Vitesse** : 45 tokens/seconde tokens/seconde
- **Consommation** : 0.74 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Raisonnement` `Sécurité` `Efficient`

**Cas d'usage :**
- Déploiements légers avec grand contexte (128k tokens)
- Tâches générales d'instruction-following sur ressources limitées
- Assistants IA multilingues compacts
- Traitement de documents longs sur appareils moins puissants
- Génération/complétion de code FIM sur postes de travail standards

---

### Magistral 24B
**Mistral AI • 24B paramètres • Contexte : 40 000 tokens**

Le premier modèle de raisonnement de Mistral AI, excellant dans le raisonnement spécifique au domaine, transparent et multilingue.

**Spécifications techniques :**
- **Vitesse** : 25 tokens/seconde tokens/seconde
- **Consommation** : 5.33 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Raisonnement` `Multilingue`

**Cas d'usage :**
- Stratégie et opérations commerciales (modélisation des risques)
- Industries réglementées (juridique, finance) avec raisonnement traçable
- Ingénierie logicielle (planification de projet, architecture)
- Création de contenu et communication (rédaction créative, narration)

---

### Granite 3.1 MoE
**IBM • 3B paramètres • Contexte : 32 000 tokens**

Modèle innovant d'IBM utilisant l'architecture Mixture-of-Experts (MoE) pour offrir des performances exceptionnelles tout en optimisant drastiquement l'utilisation des ressources computationnelles.

**Spécifications techniques :**
- **Vitesse** : 74 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.45 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Sécurité` `Rapide` `MoE` `Efficacité` `Efficient`

**Cas d'usage :**
- Applications généralistes avec coût d'inférence optimisé (42 tokens/seconde)
- Traitement de documents dans des environnements CPU avec utilisation RAM limitée
- Analyses spécialisées avec activation dynamique des parties pertinentes du modèle
- Déploiements haute densité avec faible consommation énergétique par inférence
- Traitement parallèle de plusieurs types de requêtes avec spécialisation MoE

---

### cogito:14b
**Deep Cogito • 14B paramètres • Contexte : 32 000 tokens**

Modèle de Deep Cogito spécialement conçu pour exceller dans les tâches de raisonnement profond et de compréhension contextuelle nuancée, idéal pour les applications analytiques sophistiquées.

**Spécifications techniques :**
- **Vitesse** : 60 tokens/seconde tokens/seconde ⚡
- **Consommation** : 4.4 kWh/million tokens
- **Licence** : LLAMA 3.2 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Compréhension` `Analyse` `Rapide`

**Cas d'usage :**
- Analyse sémantique de textes avec identification des implications non explicites
- Raisonnement causal structuré avec identification des relations cause-effet
- Synthèse de documents complexes avec extraction des informations clés
- Systèmes de question-réponse précis sur corpus documentaires spécialisés
- Analyse argumentative avec évaluation de la solidité des raisonnements

---

### Cogito 32B
**Deep Cogito • 32B paramètres • Contexte : 32 000 tokens**

Version avancée du modèle Cogito offrant des capacités de raisonnement et d'analyse considérablement amplifiées, conçue pour les applications les plus exigeantes en matière d'intelligence artificielle analytique.

**Spécifications techniques :**
- **Vitesse** : 32 tokens/seconde tokens/seconde
- **Consommation** : 8.25 kWh/million tokens
- **Licence** : LLAMA 3.2 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Compréhension` `Analyse`

**Cas d'usage :**
- Analyse de scénarios multi-factoriels avec évaluation probabiliste des résultats
- Résolution de problèmes scientifiques avec démonstration formelle des étapes
- Applications à haute criticité nécessitant précision et vérifiabilité des résultats
- Systèmes experts dans des domaines spécialisés (juridique, médical, technique)
- Analyse avec raisonnement multi-étapes et explicabilité complète des conclusions

---

### Qwen3 32B
**Qwen Team • 32B paramètres • Contexte : 40 000 tokens**

Modèle puissant de la nouvelle génération Qwen3, offrant des capacités avancées en raisonnement, code, et agentique, avec un contexte étendu.

**Spécifications techniques :**
- **Vitesse** : 18 tokens/seconde tokens/seconde
- **Consommation** : 7.41 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Multilingue` `Grand Contexte`

**Cas d'usage :**
- Agents conversationnels avancés avec grand contexte et intégration d'outils (MCP)
- Résolution de problèmes complexes (maths, code) avec mode "Thinking"
- Analyse et génération de documents volumineux
- Applications multilingues (>100 langues) nécessitant une compréhension profonde

---

### QwQ-32B
**Qwen Team • 32B paramètres • Contexte : 32 000 tokens**

Modèle de 32 milliards de paramètres amélioré par apprentissage par renforcement (RL) pour exceller dans le raisonnement, le codage, les mathématiques et les tâches d'agent.

**Spécifications techniques :**
- **Vitesse** : 35 tokens/seconde tokens/seconde
- **Consommation** : 7.54 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Codage` `Mathématiques`

**Cas d'usage :**
- Résolution de problèmes complexes nécessitant raisonnement et utilisation d'outils
- Génération et exécution de code avec vérification des résultats
- Tâches mathématiques avancées avec vérification de l'exactitude
- Applications d'agent capables d'interagir avec l'environnement
- Instruction following amélioré et alignement avec les préférences humaines

---

### DeepSeek-R1 14B
**DeepSeek AI • 14B paramètres • Contexte : 32 000 tokens**

Version compacte et efficiente du modèle DeepSeek-R1, offrant un excellent compromis entre performance et légèreté pour les déploiements nécessitant flexibilité et réactivité.

**Spécifications techniques :**
- **Vitesse** : 62 tokens/seconde tokens/seconde ⚡
- **Consommation** : 4.26 kWh/million tokens
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Compact` `Polyvalent` `Rapide`

**Cas d'usage :**
- Applications généralistes avec besoins d'inférence rapide (44 tokens/s)
- Déploiements sur serveurs standard sans GPU spécialisé (14B paramètres)
- Traitement de texte avec analyse contextuelle et temps de réponse rapides
- Déploiement sur edge computing avec inférence locale optimisée
- Prototypage rapide d'applications IA avec temps d'itération court

---

### DeepSeek-R1 32B
**DeepSeek AI • 32B paramètres • Contexte : 32 000 tokens**

Version intermédiaire du modèle DeepSeek-R1 offrant un équilibre stratégique entre les capacités avancées de la version 70B et l'efficience de la version 14B, pour une polyvalence et performance optimales.

**Spécifications techniques :**
- **Vitesse** : 33 tokens/seconde tokens/seconde
- **Consommation** : 7.99 kWh/million tokens
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Polyvalent`

**Cas d'usage :**
- Applications nécessitant un bon équilibre puissance/coût (32B paramètres)
- Traitement de texte professionnel avec analyse des subtilités sémantiques
- Génération automatisée de rapports structurés à partir de données brutes
- Applications combinant analyse de données et génération de contenus
- Assistants spécialisés pour secteurs techniques (juridique, médical, technique)

---

### Cogito 3B
**Deep Cogito • 3B paramètres • Contexte : 32 000 tokens**

Version compacte du modèle Cogito, optimisée pour le raisonnement sur des appareils à ressources limitées.

**Spécifications techniques :**
- **Vitesse** : 55 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.61 kWh/million tokens 🌱
- **Licence** : LLAMA 3.2 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Compact` `Embarqué` `Efficient` `Rapide`

---

### Granite Embedding
**IBM • 278M paramètres • Contexte : 512 tokens**

Modèle d'embedding ultra-léger d'IBM pour la recherche sémantique et la classification.

**Spécifications techniques :**
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Sémantique` `Efficient`

---

### Granite 3 Guardian 2B
**IBM • 2B paramètres • Contexte : 8 192 tokens**

Modèle compact d'IBM spécialisé dans la sécurité et la conformité, détectant les risques et les contenus inappropriés.

**Spécifications techniques :**
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Conformité` `Compact` `Filtrage` `Efficient`

---

### Granite 3 Guardian 8B
**IBM • 8B paramètres • Contexte : 32 000 tokens**

Modèle d'IBM spécialisé dans la sécurité et la conformité, offrant des capacités avancées de détection des risques.

**Spécifications techniques :**
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Conformité` `Filtrage`

---

### Qwen 2.5 0.5B
**Qwen Team • 0.5B paramètres • Contexte : 32 000 tokens**

Micro-modèle ultra-léger de la famille Qwen 2.5, conçu pour une efficacité maximale sur appareils contraints.

**Spécifications techniques :**
- **Vitesse** : 162 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.1 kWh/million tokens 🌱
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Ultra-compact` `Rapide` `Embarqué` `Efficient`

---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B paramètres • Contexte : 32 000 tokens**

Modèle très compact de la famille Qwen 2.5, offrant un bon équilibre performance/taille pour les déploiements légers.

**Spécifications techniques :**
- **Vitesse** : 102 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.33 kWh/million tokens 🌱
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Rapide` `Embarqué` `Efficient`

---

### Qwen 2.5 14B
**Qwen Team • 14B paramètres • Contexte : 32 000 tokens**

Modèle polyvalent de taille moyenne de la famille Qwen 2.5, bon équilibre performance/ressources.

**Spécifications techniques :**
- **Vitesse** : 61 tokens/seconde tokens/seconde ⚡
- **Consommation** : 4.33 kWh/million tokens
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Polyvalent` `Multilingue` `Rapide`

---

### Qwen 2.5 32B
**Qwen Team • 32B paramètres • Contexte : 32 000 tokens**

Modèle puissant de la famille Qwen 2.5, offrant des capacités avancées en compréhension et génération.

**Spécifications techniques :**
- **Vitesse** : 31 tokens/seconde tokens/seconde
- **Consommation** : 8.51 kWh/million tokens
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Polyvalent` `Multilingue` `Raisonnement`

---

### Qwen 2.5 3B
**Qwen Team • 3B paramètres • Contexte : 32 000 tokens**

Modèle compact et efficace de la famille Qwen 2.5, adapté aux tâches générales sur ressources limitées.

**Spécifications techniques :**
- **Vitesse** : 64 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.52 kWh/million tokens 🌱
- **Licence** : MIT licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Rapide` `Polyvalent` `Efficient`

---

### Qwen3 0.6b
**Qwen Team • 0.6B paramètres • Contexte : 32 000 tokens**

Modèle compact et efficace de la famille Qwen3, adapté aux tâches générales sur ressources limitées.

**Spécifications techniques :**
- **Vitesse** : 112 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.15 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Rapide` `Polyvalent` `Efficient`

---

### Qwen3 1.7b
**Qwen Team • 1.7B paramètres • Contexte : 32 000 tokens**

Modèle très compact de la famille Qwen3, offrant un bon équilibre performance/taille pour les déploiements légers.

**Spécifications techniques :**
- **Vitesse** : 88 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.38 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Rapide` `Embarqué` `Efficient`

---

### Qwen3 4b
**Qwen Team • 4B paramètres • Contexte : 32 000 tokens**

Modèle compact de la famille Qwen3 offrant d'excellentes performances dans un format léger et économique.

**Spécifications techniques :**
- **Vitesse** : 49 tokens/seconde tokens/seconde
- **Consommation** : 0.68 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Compact` `Efficient`

---

### Qwen3 8b
**Qwen Team • 8B paramètres • Contexte : 32 000 tokens**

Modèle Qwen3 8B offrant un bon équilibre entre performance et efficacité pour les tâches générales.

**Spécifications techniques :**
- **Vitesse** : 33 tokens/seconde tokens/seconde
- **Consommation** : 1.01 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Agent` `Multilingue` `Efficient`

---

### Qwen2.5-VL 3B
**Qwen Team • 3.8B paramètres • Contexte : 128 000 tokens**

Modèle Vision-Langage compact, solution performante pour l'IA en périphérie (edge AI).

**Spécifications techniques :**
- **Vitesse** : 65 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.51 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Raisonnement` `Rapide` `Efficient` `OCR` `Localisation Visuelle` `Edge AI`

---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8.3B) paramètres • Contexte : 128 000 tokens**

Modèle Vision-Langage performant, surpassant GPT-4o-mini sur certaines tâches.

**Spécifications techniques :**
- **Vitesse** : 35 tokens/seconde tokens/seconde
- **Consommation** : 0.95 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Vision` `Agent` `Raisonnement` `Efficient` `OCR` `Localisation Visuelle`

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B paramètres • Contexte : 16 384 tokens**

Modèle de langage spécialisé pour la cybersécurité, optimisé pour l'efficacité.

**Spécifications techniques :**
- **Vitesse** : 21 tokens/seconde tokens/seconde
- **Consommation** : 1.59 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Compact`

---

### devstral 24B
**Mistral AI & All Hands AI • 24B paramètres • Contexte : 120 000 tokens**

Devstral est un LLM agentique pour les tâches d'ingénierie logicielle.

**Spécifications techniques :**
- **Vitesse** : 45 tokens/seconde tokens/seconde
- **Consommation** : 5.86 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Programmation` `Open-Source` `Grand Contexte`

**Cas d'usage :**
- Exploration et modification de bases de code
- Agentic
- Européen

---

### Cogito 8B
**Deep Cogito • 8B paramètres • Contexte : 32 000 tokens**

Modèle de taille intermédiaire de la famille Cogito, offrant un bon équilibre entre les capacités de raisonnement et l'efficacité.

**Spécifications techniques :**
- **Vitesse** : 30 tokens/seconde tokens/seconde
- **Consommation** : 1.11 kWh/million tokens 🌱
- **Licence** : LLAMA 3.2 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Polyvalent` `Efficient`

---

### Llama 3.1 8B
**Meta • 8B paramètres • Contexte : 32 000 tokens**

Modèle de base de la famille Llama 3.1, offrant des performances solides pour sa taille.

**Spécifications techniques :**
- **Vitesse** : 31 tokens/seconde tokens/seconde
- **Consommation** : 1.08 kWh/million tokens 🌱
- **Licence** : LLAMA 3.1 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Polyvalent` `Efficient`

---

### Phi-4 Reasoning 14B
**Microsoft • 14B paramètres • Contexte : 32 000 tokens**

Modèle de la famille Phi de Microsoft, spécialisé dans le raisonnement complexe et les mathématiques.

**Spécifications techniques :**
- **Vitesse** : 71 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.71 kWh/million tokens
- **Licence** : MIT Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Raisonnement` `Mathématiques` `Programmation` `Rapide`

---

## Cas d'Usage Recommandés

### Dialogue multilingue
Chatbots et assistants capables de communiquer dans plusieurs langues avec détection automatique, maintien du contexte sur l'ensemble de la conversation et compréhension des spécificités linguistiques

**Modèles recommandés :**
- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analyse de documents longs
Traitement de documents volumineux (>100 pages) avec maintien du contexte sur l'ensemble du texte, extraction d'informations clés, génération de résumés pertinents et réponse à des questions spécifiques sur le contenu

**Modèles recommandés :**
- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programmation et développement
Génération et optimisation de code dans multiples langages, débogage, refactoring, développement de fonctionnalités complètes, compréhension des implémentations algorithmiques complexes et création de tests unitaires

**Modèles recommandés :**
- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### Analyse visuelle
Traitement direct d'images et documents visuels sans pré-traitement OCR, interprétation de diagrammes techniques, graphiques, tableaux, dessins et photos avec génération d'explications textuelles détaillées du contenu visuel

**Modèles recommandés :**
- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Sécurité et conformité
Applications nécessitant des capacités spécifiques en matière de sécurité ; filtrage de contenu sensible, traçabilité des raisonnements, vérification RGPD/HDS, minimisation des risques, analyse des vulnérabilités et respect des réglementations sectorielles

**Modèles recommandés :**
- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Magistral 24b
- Foundation-Sec-8B

### Déploiements légers et embarqués
Applications nécessitant une empreinte minimale en ressources, déploiement sur appareils à capacité limitée, inférence en temps réel sur CPU standard et intégration dans des systèmes embarqués ou IoT

**Modèles recommandés :**
- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3

