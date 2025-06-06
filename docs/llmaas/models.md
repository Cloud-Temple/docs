---
title: Catalogue des Modèles IA
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Vue d'ensemble

Cloud Temple LLMaaS propose **des modèles de langage large** soigneusement sélectionnés et optimisés. Notre catalogue couvre l'ensemble du spectre, des micro-modèles ultra-efficaces aux modèles extrêmement volumineux. 

### Note sur les mesures de performance
Les valeurs de vitesse (tokens/s) représentent des cibles de performance en conditions réelles. La consommation énergétique (kWh/Mtoken) est calculée en divisant la puissance estimée du serveur d'inférence (en Watts) par la vitesse mesurée du modèle (en tokens/seconde), puis convertie en kilowattheures par million de tokens. Cette méthode offre une comparaison pratique de l'efficience énergétique des différents modèles, à utiliser comme indicateur relatif plutôt que comme mesure absolue de la consommation électrique.

### Statistiques Globales

| Métrique | Valeur |
|----------|--------|
| **Nombre total de modèles** | 36 modèles |
| **Contexte minimum** | 8 192 tokens |
| **Contexte maximum** | 120 000 tokens |
| **Conformité** | SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ✅ |
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
- **Vitesse** : 30 tokens/seconde tokens/seconde
- **Consommation** : 8.87 kWh/million tokens
- **Licence** : [LLAMA 3.3 Community Licence](./licences/llama3.3_70b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Chatbots multilingues prenant en charge 8 langues simultanément
- Exécution d'instructions complexes enchaînées (prompt chaining)
- Traitement d'une fenêtre de dialogue de 60K tokens pour historique conversationnel
- Analyse de documents juridiques ou techniques volumineux (>100 pages)
- Génération de textes structurés avec fidélité aux consignes stylistiques

---

### Qwen3 235B
**Qwen Team • 235B paramètres • Contexte : 32 000 tokens**

Modèle très volumineux de la nouvelle génération Qwen3, offrant des capacités étendues pour les tâches les plus complexes.

**Spécifications techniques :**
- **Vitesse** : 21 tokens/seconde
- **Consommation** : 6.35 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Agents conversationnels très avancés avec grand contexte et intégration d'outils (MCP)
- Résolution de problèmes extrêmement complexes (maths, code)
- Analyse et génération de documents très volumineux et techniques
- Applications multilingues (>100 langues) nécessitant une compréhension et une génération de très haute fidélité

---

### DeepSeek-R1 671B
**DeepSeek AI • 671B paramètres • Contexte : 32 000 tokens**

Modèle extrêmement volumineux de DeepSeek AI, conçu pour le summum du raisonnement et de la génération.

**Spécifications techniques :**
- **Vitesse** : 16 tokens/seconde tokens/seconde
- **Consommation** : 8.33 kWh/million tokens
- **Licence** : [MIT Licence](./licences/deepseek-r1_671b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Tâches de raisonnement de pointe
- Génération de texte de qualité supérieure
- Recherche et développement en IA

---

### Gemma 3 27B
**Google • 27B paramètres • Contexte : 120 000 tokens**

Modèle révolutionnaire de Google offrant un équilibre optimal entre puissance et efficacité, avec un rapport performance/coût exceptionnel pour les applications professionnelles exigeantes.

**Spécifications techniques :**
- **Vitesse** : 68 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.91 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/gemma3_27b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 103 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.58 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 20 tokens/seconde tokens/seconde
- **Consommation** : 11.44 kWh/million tokens
- **Licence** : [MIT Licence](./licences/deepseek-r1_70b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Tâches de raisonnement complexes
- Génération de texte de haute qualité
- Analyse approfondie de documents (dans la limite du contexte de 27k)

---

## Modèles Spécialisés

### Qwen3 14B
**Qwen Team • 14B paramètres • Contexte : 32 000 tokens**

Modèle dense nouvelle génération Qwen3 (14B), offrant des performances équivalentes à Qwen2.5 32B avec une meilleure efficacité.

**Spécifications techniques :**
- **Vitesse** : 69 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.65 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 67 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.73 kWh/million tokens
- **Licence** : [Google Gemma Terms of Use](./licences/gemma3_12b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 58 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.93 kWh/million tokens 🌱
- **Licence** : [Google Gemma Terms of Use](./licences/gemma3_4b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ✅ Vision • ❌ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Applications embarquées et edge computing avec traitement d'images
- Chatbots multimodaux réactifs nécessitant faible latence
- Déploiements à grande échelle avec capacités visuelles et textuelles
- Applications mobiles avec analyse d'images et textes
- Traitement de requêtes visuelles simples à moyenne complexité avec haute performance

---

### Gemma 3 1B
**Google • 1B paramètres • Contexte : 32 000 tokens**

Micro-modèle ultra-léger conçu pour les déploiements sur appareils à très faibles ressources.

**Spécifications techniques :**
- **Vitesse** : 41 tokens/seconde tokens/seconde
- **Consommation** : 1.32 kWh/million tokens 🌱
- **Licence** : [Google Gemma Terms of Use](./licences/gemma3_1b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 41 tokens/seconde tokens/seconde
- **Consommation** : 1.32 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Mistral Small 3.1
**Mistral AI • 24B paramètres • Contexte : 60 000 tokens**

Modèle compact et réactif de Mistral AI, spécialement conçu pour offrir une assistance conversationnelle fluide et pertinente avec une vitesse de réponse optimale.

**Spécifications techniques :**
- **Vitesse** : 14 tokens/seconde tokens/seconde
- **Consommation** : 13.06 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Cas d'usage :**
- Applications conversationnelles
- Assistants virtuels combinant analyse d'images et texte (26 tokens/s)
- Chatbots de support technique avec accès à la documentation technique
- Outils de création/édition de contenu avec réponse immédiate (blogs, emails)
- Déploiement sur infrastructures standard (24B de paramètres)

---

### DeepCoder
**Agentica x Together AI • 14B paramètres • Contexte : 32 000 tokens**

Modèle IA open source (14B) par Together AI & Agentica, alternative crédible aux modèles propriétaires pour la génération de code.

**Spécifications techniques :**
- **Vitesse** : 62 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.95 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Génération de code dans plus de 15 langages avec optimisation des performances
- Débogage et refactoring de bases de code existantes avec analyse d'impact
- Implémentation d'algorithmes complexes (graphes, arbres, heuristiques)
- Transposition de code entre langages et frameworks (par exemple Python vers JavaScript)
- Création automatisée de tests unitaires avec couverture de code > 80%

---

### Granite 3.2 Vision
**IBM • 2B paramètres • Contexte : 16 384 tokens**

Modèle compact révolutionnaire d'IBM spécialisé dans la vision par ordinateur, capable d'analyser et comprendre directement les documents visuels sans recourir à des technologies OCR intermédiaires.

**Spécifications techniques :**
- **Vitesse** : 48 tokens/seconde tokens/seconde ⚡
- **Consommation** : 1.13 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ❌ Raisonnement • ✅ Sécurité

**Cas d'usage :**
- Extraction de données structurées à partir de factures et formulaires sans OCR
- Analyse directe de tableaux et graphiques avec interprétation des tendances
- Lecture et interprétation de diagrammes techniques (électriques, mécaniques)
- Traitement de documents manuscrits avec taux de reconnaissance élevé
- Vision par ordinateur légère (2B paramètres) avec vitesse élevée (79 tokens/s)

---

### Granite 3.3 8B
**IBM • 8B paramètres • Contexte : 60 000 tokens**

Modèle Granite 8B fine-tuné par IBM pour un raisonnement et un suivi d'instructions améliorés, avec un contexte de 128k tokens.

**Spécifications techniques :**
- **Vitesse** : 27 tokens/seconde tokens/seconde
- **Consommation** : 2.0 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Cas d'usage :**
- Tâches générales d'instruction-following (classification, extraction, Q&A)
- Assistants IA multilingues (12 langues)
- Traitement de documents très longs (128k tokens) : résumés et questions-réponses
- Génération/complétion de code avec Fill-in-the-Middle
- Intégration avec des outils externes via function calling
- Raisonnement structuré avec le mode "Thinking"

---

### Granite 3.3 2B
**IBM • 2B paramètres • Contexte : 120 000 tokens**

Modèle Granite 2B fine-tuné par IBM, optimisé pour le raisonnement et le suivi d'instructions, avec un contexte de 128k tokens.

**Spécifications techniques :**
- **Vitesse** : 45 tokens/seconde tokens/seconde ⚡
- **Consommation** : 1.2 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Cas d'usage :**
- Déploiements légers avec grand contexte (128k tokens)
- Tâches générales d'instruction-following sur ressources limitées
- Assistants IA multilingues compacts
- Traitement de documents longs sur appareils moins puissants
- Génération/complétion de code FIM sur postes de travail standards

---

### Granite 3.1 MoE
**IBM • 3B paramètres • Contexte : 32 000 tokens**

Modèle innovant d'IBM utilisant l'architecture Mixture-of-Experts (MoE) pour offrir des performances exceptionnelles tout en optimisant drastiquement l'utilisation des ressources computationnelles.

**Spécifications techniques :**
- **Vitesse** : 74 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.73 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Cas d'usage :**
- Applications généralistes avec coût d'inférence optimisé (42 tokens/seconde)
- Traitement de documents dans des environnements CPU avec utilisation RAM limitée
- Analyses spécialisées avec activation dynamique des parties pertinentes du modèle
- Déploiements haute densité avec faible consommation énergétique par inférence
- Traitement parallèle de plusieurs types de requêtes avec spécialisation MoE

---

### Cogito 14B
**Deep Cogito • 14B paramètres • Contexte : 32 000 tokens**

Modèle de Deep Cogito spécialement conçu pour exceller dans les tâches de raisonnement profond et de compréhension contextuelle nuancée, idéal pour les applications analytiques sophistiquées.

**Spécifications techniques :**
- **Vitesse** : 60 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.05 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Consommation** : 5.73 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Consommation** : 5.22 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 60 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.05 kWh/million tokens
- **Licence** : [MIT licence](./licences/deepseek-r1_14b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Cas d'usage :**
- Applications généralistes avec besoins d'inférence rapide (44 tokens/s)
- Déploiements sur serveurs standard sans GPU spécialisé (14B paramètres)
- Traitement de texte avec analyse contextuelle et temps de réponse < 2s
- Déploiement sur edge computing avec inférence locale optimisée
- Prototypage rapide d'applications IA avec temps d'itération court

---

### DeepSeek-R1 32B
**DeepSeek AI • 32B paramètres • Contexte : 32 000 tokens**

Version intermédiaire du modèle DeepSeek-R1 offrant un équilibre stratégique entre les capacités avancées de la version 70B et l'efficience de la version 14B, pour une polyvalence et performance optimales.

**Spécifications techniques :**
- **Vitesse** : 33 tokens/seconde tokens/seconde
- **Consommation** : 5.54 kWh/million tokens
- **Licence** : [MIT licence](./licences/deepseek-r1_32b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

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
- **Vitesse** : 63 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.86 kWh/million tokens 🌱
- **Licence** : [LLAMA 3.2 Community Licence](./licences/cogito_3b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

---

### Granite Embedding
**IBM • 278M paramètres • Contexte : 32 000 tokens**

Modèle d'embedding ultra-léger d'IBM pour la recherche sémantique et la classification.

**Spécifications techniques :**
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Granite 3 Guardian 2B
**IBM • 2B paramètres • Contexte : 8 192 tokens**

Modèle compact d'IBM spécialisé dans la sécurité et la conformité, détectant les risques et les contenus inappropriés.

**Spécifications techniques :**
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

---

### Granite 3 Guardian 8B
**IBM • 8B paramètres • Contexte : 32 000 tokens**

Modèle d'IBM spécialisé dans la sécurité et la conformité, offrant des capacités avancées de détection des risques.

**Spécifications techniques :**
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

---

### Qwen 2.5 0.5B
**Qwen Team • 0.5B paramètres • Contexte : 32 000 tokens**

Micro-modèle ultra-léger de la famille Qwen 2.5, conçu pour une efficacité maximale sur appareils contraints.

**Spécifications techniques :**
- **Vitesse** : 57 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.95 kWh/million tokens 🌱
- **Licence** : [MIT licence](./licences/qwen2.5_0.5b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B paramètres • Contexte : 32 000 tokens**

Modèle très compact de la famille Qwen 2.5, offrant un bon équilibre performance/taille pour les déploiements légers.

**Spécifications techniques :**
- **Vitesse** : 94 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.58 kWh/million tokens 🌱
- **Licence** : [MIT licence](./licences/qwen2.5_1.5b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen 2.5 14B
**Qwen Team • 14B paramètres • Contexte : 32 000 tokens**

Modèle polyvalent de taille moyenne de la famille Qwen 2.5, bon équilibre performance/ressources.

**Spécifications techniques :**
- **Vitesse** : 61 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.0 kWh/million tokens
- **Licence** : [MIT licence](./licences/qwen2.5_14b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen 2.5 32B
**Qwen Team • 32B paramètres • Contexte : 32 000 tokens**

Modèle puissant de la famille Qwen 2.5, offrant des capacités avancées en compréhension et génération.

**Spécifications techniques :**
- **Vitesse** : 32 tokens/seconde tokens/seconde
- **Consommation** : 5.73 kWh/million tokens
- **Licence** : [MIT licence](./licences/qwen2.5_32b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

---

### Qwen 2.5 3B
**Qwen Team • 3B paramètres • Contexte : 32 000 tokens**

Modèle compact et efficace de la famille Qwen 2.5, adapté aux tâches générales sur ressources limitées.

**Spécifications techniques :**
- **Vitesse** : 60 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.9 kWh/million tokens 🌱
- **Licence** : [MIT licence](./licences/qwen2.5_3b.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen3 0.6b
**Qwen Team • 0.6B paramètres • Contexte : 32 000 tokens**

Modèle compact et efficace de la famille Qwen3, adapté aux tâches générales sur ressources limitées.

**Spécifications techniques :**
- **Vitesse** : 60 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.9 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen3 1.7b
**Qwen Team • 1.7B paramètres • Contexte : 32 000 tokens**

Modèle très compact de la famille Qwen3, offrant un bon équilibre performance/taille pour les déploiements légers.

**Spécifications techniques :**
- **Vitesse** : 83 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.65 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen3 4b
**Qwen Team • 4B paramètres • Contexte : 32 000 tokens**

Modèle compact de la famille Qwen3 offrant d'excellentes performances dans un format léger et économique.

**Spécifications techniques :**
- **Vitesse** : 48 tokens/seconde tokens/seconde
- **Consommation** : 1.13 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

---

### Qwen3 8b
**Qwen Team • 8B paramètres • Contexte : 32 000 tokens**

Modèle Qwen3 8B offrant un bon équilibre entre performance et efficacité pour les tâches générales.

**Spécifications techniques :**
- **Vitesse** : 29 tokens/seconde tokens/seconde
- **Consommation** : 1.87 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

---

### Qwen2.5-VL 3B
**Qwen Team • 3.8B paramètres • Contexte : 128 000 tokens**

Modèle Vision-Langage compact, solution performante pour l'IA en périphérie (edge AI).

**Spécifications techniques :**
- **Vitesse** : 65 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.83 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8.3B) paramètres • Contexte : 128 000 tokens**

Modèle Vision-Langage performant, surpassant GPT-4o-mini sur certaines tâches.

**Spécifications techniques :**
- **Vitesse** : 37 tokens/seconde tokens/seconde
- **Consommation** : 1.46 kWh/million tokens 🌱
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ✅ Vision • ✅ Raisonnement • ❌ Sécurité

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B paramètres • Contexte : 16 000 tokens**

Modèle de langage spécialisé pour la cybersécurité, optimisé pour l'efficacité.

**Spécifications techniques :**
- **Vitesse** : 22 tokens/seconde tokens/seconde
- **Consommation** : 2.46 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

---

### devstral 24B
**Mistral AI & All Hands AI • 24B paramètres • Contexte : 120 000 tokens**

Devstral est un LLM agentique pour les tâches d'ingénierie logicielle.

**Spécifications techniques :**
- **Vitesse** : 53 tokens/seconde tokens/seconde ⚡
- **Consommation** : 4.5 kWh/million tokens
- **Licence** : [Apache 2.0](./licences/apache2.licence.md)
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Cas d'usage :**
- Exploration et modification de bases de code
- Agentic
- Européen

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
- Foundation-Sec-8B

### Déploiements légers et embarqués

Applications nécessitant une empreinte minimale en ressources, déploiement sur appareils à capacité limitée, inférence en temps réel sur CPU standard et intégration dans des systèmes embarqués ou IoT

**Modèles recommandés :**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3
