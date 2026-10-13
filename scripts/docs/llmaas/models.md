---
title: Catalogue des Modèles LLMaaS
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Vue d'ensemble

Cloud Temple LLMaaS propose **40 modèles de langage large** soigneusement sélectionnés et optimisés pour répondre aux exigences **SecNumCloud** les plus strictes. Notre catalogue couvre l'ensemble du spectre, des micro-modèles ultra-efficaces aux modèles extrêmement volumineux.

### Statistiques Globales

| Métrique | Valeur |
|----------|--------|
| **Nombre total de modèles** | 40 modèles |
| **Contexte minimum** | 8 192 tokens |
| **Contexte maximum** | 262 144 tokens |
| **Conformité** | SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ❌ |
| **Localisation** | 100% France 🇫🇷 |

### Tarification

Pour connaître les prix publics en vigueur et établir votre estimation, consultez le [catalogue tarifaire officiel Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

## Modèles de Grande Taille

### gpt-oss:120b
**OpenAI • 120B paramètres • Contexte : 120 000 tokens**

Modèle de langage open-weight de pointe d'OpenAI, offrant de solides performances avec une licence flexible Apache 2.0.

**Spécifications techniques :**
- **Vitesse** : 38 tokens/seconde tokens/seconde
- **Consommation** : 3.51 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Très Large`

**Cas d'usage :**
- Agents conversationnels avancés avec raisonnement complexe et intégration d'outils.
- Applications nécessitant une transparence totale du processus de raisonnement (chain-of-thought).
- Scénarios commerciaux nécessitant une licence permissive (Apache 2.0).
- Fine-tuning pour des tâches spécialisées nécessitant un modèle de base puissant.

---

### llama3.3:70b
**Meta • 70B paramètres • Contexte : 132 000 tokens**

Modèle multilingue de pointe développé par Meta, conçu pour exceller dans le dialogue naturel, le raisonnement complexe et la compréhension nuancée des instructions.

**Spécifications techniques :**
- **Vitesse** : 30 tokens/seconde tokens/seconde
- **Consommation** : 8.87 kWh/million tokens
- **Licence** : LLAMA 3.3 Community Licence
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Dialogue` `Multilingue`

**Cas d'usage :**
- Chatbots multilingues prenant en charge 8 langues simultanément
- Exécution d'instructions complexes enchaînées (prompt chaining)
- Traitement d'une fenêtre de dialogue de 60K tokens pour historique conversationnel
- Analyse de documents juridiques ou techniques volumineux (>100 pages)
- Génération de textes structurés avec fidélité aux consignes stylistiques

---

### qwen3:235b
**Qwen Team • 235B paramètres • Contexte : 60 000 tokens**

Modèle très volumineux de la nouvelle génération Qwen3, offrant des capacités étendues pour les tâches les plus complexes.

**Spécifications techniques :**
- **Vitesse** : 17 tokens/seconde tokens/seconde ⚡
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

### gemma3:27b
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

### qwen3-coder:30b
**Qwen Team • 30B paramètres • Contexte : 250 000 tokens**

Modèle MoE optimisé pour les tâches d'ingénierie logicielle, avec un contexte très long.

**Spécifications techniques :**
- **Vitesse** : 80 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.3 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Programmation` `Grand Contexte` `MoE`

**Cas d'usage :**
- Agents d'ingénierie logicielle pour explorer et modifier des bases de code
- Génération de code complexe avec compréhension à l'échelle du dépôt (repository-scale)
- Tâches de raisonnement sur des contextes étendus
- Amélioration de code via apprentissage par renforcement

---

### qwen3-2507-think:30b-a3b
**Qwen Team • 30B paramètres • Contexte : 120 000 tokens**

Modèle avancé de la famille Qwen3, optimisé pour le raisonnement profond et les contextes étendus.

**Spécifications techniques :**
- **Vitesse** : 80 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.3 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte`

**Cas d'usage :**
- Analyse de documents très volumineux avec raisonnement complexe.
- Agents conversationnels avec un historique de conversation étendu.
- Tâches de Q&A sur de larges corpus de texte.
- Intégration avec des outils externes via function calling sur de grands contextes.

---

### qwen3-2507:30b-a3b
**Qwen Team • 30B paramètres • Contexte : 250 000 tokens**

Version améliorée du mode non-pensée de Qwen3-30B, avec des capacités générales, une couverture de connaissances et un alignement utilisateur améliorés.

**Spécifications techniques :**
- **Vitesse** : 90 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.16 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `MoE` `Multilingue`

**Cas d'usage :**
- Tâches complexes nécessitant un suivi d'instructions précis et un raisonnement logique.
- Applications multilingues avec une large couverture de connaissances.
- Génération de texte de haute qualité pour des tâches ouvertes et subjectives.
- Analyse de documents très volumineux grâce au contexte de 250k tokens.

---

### qwen3:30b-a3b
**Qwen Team • 30B paramètres • Contexte : 32 000 tokens**

Dernière génération des modèles Qwen, offrant des améliorations significatives en termes de données d'entraînement, d'architecture et d'optimisation.

**Spécifications techniques :**
- **Vitesse** : 50 tokens/seconde tokens/seconde
- **Consommation** : 3.89 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Programmation` `Multilingue` `MoE`

**Cas d'usage :**
- Tâches de raisonnement complexes et génération de code.
- Applications multilingues nécessitant une large couverture linguistique.
- Scénarios nécessitant un bon équilibre entre performance et efficacité des ressources grâce à l'architecture MoE.

---

### qwen2.5vl:32b
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

### qwen2.5vl:72b
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

### embeddinggemma:300m
**Google • 300M paramètres • Contexte : 2 048 tokens**

Modèle d'embedding de pointe de Google, optimisé pour sa taille, idéal pour les tâches de recherche et de récupération sémantique.

**Spécifications techniques :**
- **Licence** : Google Gemma Terms of Use
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Sémantique` `Efficient` `Multilingue`

**Cas d'usage :**
- Recherche et récupération d'informations (Retrieval)
- Classification et clustering de documents
- Recherche de similarité sémantique
- Déploiement sur des appareils à ressources limitées (mobile, laptop)

---

### gpt-oss:20b
**OpenAI • 20B paramètres • Contexte : 120 000 tokens**

Modèle de langage open-weight d'OpenAI, optimisé pour l'efficacité et le déploiement sur du matériel grand public.

**Spécifications techniques :**
- **Vitesse** : 57 tokens/seconde tokens/seconde ⚡
- **Consommation** : 2.34 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Compact` `Rapide`

**Cas d'usage :**
- Déploiements sur des appareils à ressources limitées (edge devices) ou des serveurs à faible coût.
- Applications nécessitant une inférence rapide avec de bonnes capacités de raisonnement.
- Cas d'usage agentiques avec appel de fonctions, navigation web et exécution de code.
- Fine-tuning pour des tâches spécialisées sur du matériel grand public.

---

### qwen3:14b
**Qwen Team • 14B paramètres • Contexte : 32 000 tokens**

Modèle dense nouvelle génération Qwen3 (14B), offrant des performances équivalentes à Qwen2.5 32B avec une meilleure efficacité.

**Spécifications techniques :**
- **Vitesse** : 40 tokens/seconde tokens/seconde ⚡
- **Consommation** : 3.33 kWh/million tokens
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

### gemma3:12b
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

### gemma3:4b
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

### gemma3:1b
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

### mistral-small3.1:24b
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

### mistral-small3.2:24b
**Mistral AI • 24B paramètres • Contexte : 128 000 tokens**

Mise à jour mineure de Mistral Small 3.1, améliorant le suivi d'instructions, la robustesse du function calling et réduisant les erreurs de répétition.

**Spécifications techniques :**
- **Vitesse** : 32 tokens/seconde tokens/seconde
- **Consommation** : 5.51 kWh/million tokens
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

### deepcoder:14b
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

### granite3.2-vision:2b
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

### granite3.3:8b
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

### granite3.3:2b
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

### magistral:24b
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

### cogito:32b
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

### qwen3:32b
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

### qwq:32b
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

### deepseek-r1:14b
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

### deepseek-r1:32b
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

### cogito:3b
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

### granite-embedding:278m
**IBM • 278M paramètres • Contexte : 512 tokens**

Modèle d'embedding ultra-léger d'IBM pour la recherche sémantique et la classification.

**Spécifications techniques :**
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Embedding` `Compact` `Sémantique` `Efficient`

---

### granite3-guardian:2b
**IBM • 2B paramètres • Contexte : 8 192 tokens**

Modèle compact d'IBM spécialisé dans la sécurité et la conformité, détectant les risques et les contenus inappropriés.

**Spécifications techniques :**
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Conformité` `Compact` `Filtrage` `Efficient`

---

### granite3-guardian:8b
**IBM • 8B paramètres • Contexte : 32 000 tokens**

Modèle d'IBM spécialisé dans la sécurité et la conformité, offrant des capacités avancées de détection des risques.

**Spécifications techniques :**
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
❌ Outils/Agent • ❌ Vision • ❌ Raisonnement • ✅ Sécurité

**Tags :** `Sécurité` `Conformité` `Filtrage`

---

### qwen3:0.6b
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

### qwen3:1.7b
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

### qwen3:4b
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

### qwen3-2507-think:4b
**Qwen Team • 4B paramètres • Contexte : 250 000 tokens**

Modèle Qwen3-4B optimisé pour le raisonnement, avec des performances améliorées sur les tâches logiques, les mathématiques, la science et le code, et un contexte étendu à 250K tokens.

**Spécifications techniques :**
- **Vitesse** : 70 tokens/seconde tokens/seconde ⚡
- **Consommation** : 1.9 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Compact` `Rapide`

**Cas d'usage :**
- Tâches de raisonnement très complexes (logique, maths, science, code).
- Agents conversationnels avec un historique de conversation très étendu (256k tokens).
- Analyse de documents très volumineux avec raisonnement profond.
- Intégration avec des outils externes via function calling sur de très grands contextes.

---

### qwen3-2507:4b
**Qwen Team • 4B paramètres • Contexte : 250 000 tokens**

Version mise à jour du mode non-pensée de Qwen3-4B, avec des améliorations significatives des capacités générales, une couverture de connaissances étendue et un meilleur alignement avec les préférences des utilisateurs.

**Spécifications techniques :**
- **Vitesse** : 70 tokens/seconde tokens/seconde ⚡
- **Consommation** : 1.9 kWh/million tokens
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ❌ Raisonnement • ❌ Sécurité

**Tags :** `Agent` `Grand Contexte` `Compact` `Rapide` `Multilingue`

**Cas d'usage :**
- Tâches générales nécessitant un suivi d'instructions précis et un raisonnement logique.
- Applications multilingues avec une large couverture de connaissances.
- Génération de texte de haute qualité pour des tâches ouvertes et subjectives.
- Analyse de documents très volumineux grâce au contexte de 256k tokens.

---

### qwen3:8b
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

### qwen2.5vl:3b
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

### qwen2.5vl:7b
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

### devstral:24b
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

### cogito:8b
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

### granite4-small-h:32b
**IBM • 32B (9B actifs) paramètres • Contexte : 128 000 tokens**

Modèle MoE (Mixture-of-Experts) d'IBM, conçu comme un "cheval de bataille" pour les tâches d'entreprise quotidiennes, avec une excellente efficacité pour les longs contextes.

**Spécifications techniques :**
- **Vitesse** : 21 tokens/seconde tokens/seconde
- **Consommation** : 1.59 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Raisonnement` `Sécurité` `MoE` `Grand Contexte` `Efficient`

**Cas d'usage :**
- Agents conversationnels pour le support client avec accès à des bases de connaissances étendues.
- Automatisation de workflows d'entreprise nécessitant l'utilisation de plusieurs outils.
- Analyse de documents longs avec une consommation de ressources optimisée.
- Déploiements sur des infrastructures de taille moyenne grâce à son efficacité.

---

### granite4-tiny-h:7b
**IBM • 7B (1B actif) paramètres • Contexte : 128 000 tokens**

Modèle MoE hybride ultra-efficace d'IBM, conçu pour la faible latence, les applications "edge" et locales, et comme brique de base pour les workflows agentiques.

**Spécifications techniques :**
- **Vitesse** : 42 tokens/seconde tokens/seconde ⚡
- **Consommation** : 0.79 kWh/million tokens 🌱
- **Licence** : Apache 2.0
- **Localisation** : FR 🇫🇷

**Capacités :**
✅ Outils/Agent • ❌ Vision • ✅ Raisonnement • ✅ Sécurité

**Tags :** `Agent` `Raisonnement` `Sécurité` `MoE` `Grand Contexte` `Efficient` `Rapide` `Compact`

**Cas d'usage :**
- Applications embarquées et "edge" nécessitant une faible latence.
- {'Tâches rapides au sein de workflows agentiques plus larges (ex': 'function calling).'}
- Analyse de documents sur du matériel grand public.
- Déploiements nécessitant une empreinte mémoire minimale.

---

## Cas d'Usage Recommandés

### Dialogue multilingue
Chatbots et assistants capables de communiquer dans plusieurs langues avec détection automatique, maintien du contexte sur l'ensemble de la conversation et compréhension des spécificités linguistiques

**Modèles recommandés :**
- Llama 3.3
- Mistral Small 3.2
- Qwen 3
- Granite 3.3

### Analyse de documents longs
Traitement de documents volumineux (>100 pages) avec maintien du contexte sur l'ensemble du texte, extraction d'informations clés, génération de résumés pertinents et réponse à des questions spécifiques sur le contenu

**Modèles recommandés :**
- Gemma 3
- Qwen3
- Granite 3.3

### Programmation et développement
Génération et optimisation de code dans multiples langages, débogage, refactoring, développement de fonctionnalités complètes, compréhension des implémentations algorithmiques complexes et création de tests unitaires

**Modèles recommandés :**
- DeepCoder
- QwQ
- Qwen3 coder
- Granite 3.3
- Devstral

### Analyse visuelle
Traitement direct d'images et documents visuels sans pré-traitement OCR, interprétation de diagrammes techniques, graphiques, tableaux, dessins et photos avec génération d'explications textuelles détaillées du contenu visuel

**Modèles recommandés :**
- Granite 3.2 Vision
- Mistral Small 3.2
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



Référence tarifaire : [catalogue officiel Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).
