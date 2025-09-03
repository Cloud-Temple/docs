# Contexte LLMaaS - LLM as a Service Cloud Temple

## Service Overview

**LLMaaS (Large Language Model as a Service)** est la nouvelle offre Cloud Temple dédiée à l'intelligence artificielle générative, proposant 45 modèles de langage large en conformité **SecNumCloud + HDS + Souveraineté + C5**.

### Positionnement Stratégique
- **Premier cloud souverain français** proposant des LLM SecNumCloud
- **45 modèles** : du micro-modèle (278M) au modèle extrêmement large (671B)
- **Localisation 100% France** 🇫🇷
- **Conformité maximale** : SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ✅

## Architecture Documentation

### Structure docs/llmaas/
```
docs/llmaas/
├── llmaas.md              # [RÉDIGÉ] Vue d'ensemble service
├── models.md              # ✅ AUTOMATISÉ - Catalogue 36 modèles
├── api.md                 # [RÉDIGÉ] Documentation API REST
├── concepts.md            # [RÉDIGÉ] Architecture IA
├── quickstart.md          # [RÉDIGÉ] Premier déploiement
├── tutorials.md           # [RÉDIGÉ] Guides avancés
├── rag_explained.md       # [AJOUTÉ] Explication détaillée du RAG
├── changelog.md           # [AJOUTÉ] Suivi des modifications
└── images/               # Screenshots interface LLM
```

### Génération Automatique
- **Source** : `memory-bank/models_config.yaml` (45 modèles)
- **Script** : `scripts/generate_models_doc/generate_models_doc.py`
- **Commande** : `yarn generate:models`
- **Sortie** : `docs/llmaas/models.md` (documentation Docusaurus)

## Configuration Modèles

### Statistiques Globales
- **45 modèles** : 8 grande taille + 37 spécialisés
- **Contexte** : 8k → 128k tokens
- **Pricing** : 0.9€ input, 4€ output, 21€ reasoning

### Catégories de Modèles

#### Modèles Grande Taille (6)
- **Llama 3.3 70B** (Meta) - Dialogue multilingue
- **Qwen3 235B** (Qwen Team) - Très large avec MCP
- **DeepSeek-R1 671B** (DeepSeek AI) - Extrêmement large
- **Gemma 3 27B** (Google) - Vision + Agent rapide
- **Qwen3 30B-A3B FP8** (Qwen Team) - MoE efficace
- **DeepSeek-R1 70B** (DeepSeek AI) - Raisonnement avancé

#### Modèles Spécialisés (34)
- **Vision** : Granite 3.2 Vision, Gemma 3, Qwen2.5-VL
- **Sécurité** : Granite Guardian, Foundation-Sec-8B
- **Code** : DeepCoder, Devstral, QwQ-32B
- **Français** : Lucie-7B-Instruct
- **Embarqué** : Gemma 3 1B, Qwen 2.5 0.5B

### Cas d'Usage Documentés (6)
1. **Dialogue multilingue** - Chatbots 8+ langues
2. **Analyse documents longs** - Contexte 120k tokens
3. **Programmation développement** - 15+ langages
4. **Analyse visuelle** - OCR sans preprocessing
5. **Sécurité conformité** - Filtrage + audit
6. **Déploiements embarqués** - IoT + edge computing

## Conformité SecNumCloud IA

### Exigences Spécifiques IA
- **Localisation modèles** : 100% France
- **Audit algorithmes** : Traçabilité inférences
- **Protection données** : Chiffrement prompts/réponses
- **Biais monitoring** : Détection discriminations
- **Explicabilité** : Right to explanation
- **RGPD-IA** : Conformité réglementations européennes

### Certifications
- **SecNumCloud** : Qualification ANSSI
- **HDS** : Hébergement Données Santé
- **C5** : Conformité européenne
- **Souveraineté** : 100% français

## Technologies et Infrastructure

### Stack Technique
- **GPU** : NVIDIA A100, L40S dédiés
- **Orchestration** : Kubernetes + VLLM
- **API** : REST compatible OpenAI
- **Monitoring** : Grafana + métriques personnalisées
- **Chiffrement** : TLS 1.3 + AES-256

### Pipelines RAG et Intégrations
- ✅ **Pattern RAG validé** : Le service supporte des pipelines RAG complets.
- ✅ **Embeddings LLMaaS** : Utilisation du modèle `granite-embedding:278m` via une classe wrapper `LLMaaSEmbeddings` pour la vectorisation de documents.
- ✅ **Intégration FAISS** : L'exemple de tutoriel principal utilise FAISS pour un stockage vectoriel en mémoire, idéal pour les démonstrations rapides.
- ✅ **Intégration Qdrant** : Un exemple avancé et un test d'intégration complet valident l'utilisation de Qdrant pour un stockage vectoriel persistant et scalable.
- ✅ **Tests de bout en bout** : La suite de tests (`/tests/llmaas/`) inclut désormais des scripts dédiés (`test_rag_pipeline_detailed.py`, `test_qdrant_integration.py`) qui valident ces pipelines.

### Performance
- **Vitesse** : 16-103 tokens/seconde
- **Consommation** : 0.58-13.06 kWh/million tokens
- **Latence** : <50ms pour modèles rapides
- **Disponibilité** : SLA 99.9%

## Intégration Console Shiva

### Fonctionnalités
- **Provisioning** : Déploiement modèles one-click
- **Monitoring** : Vue consolidée infrastructure + IA
- **IAM** : RBAC avec permissions IA
- **Facturation** : Tracking usage par token
- **Logs** : Audit complet des requêtes

### API Management
- **Authentication** : Bearer tokens SecNumCloud
- **Rate limiting** : Quotas par tenant
- **Load balancing** : Distribution intelligente
- **Cost tracking** : Optimisation automatique

## Workflows de Documentation

### Génération Automatique
```bash
# Modification catalogue
vim memory-bank/models_config.yaml

# Génération propre
yarn generate:models

# Résultat : Documentation mise à jour !
```

### Structure Scripts
- **generate_models_doc.py** : Générateur principal
- **module integration** : `yarn generate:models`
- **Documentation** : `scripts/README.md`
- **Logging coloré** : Feedback développeur

## Prochaines Étapes

### Documentation
Tous les documents principaux sont maintenant rédigés et disponibles.

### Améliorations Prévues
- **Templates Jinja2** pour autres pages
- **Validation automatique** YAML
- **Tests unitaires** scripts
- **CI/CD integration** hooks Git
- **Monitoring documentation** métriques

## Différenciation Concurrentielle

### vs AWS Bedrock
- **Souveraineté** : 100% France vs USA
- **SecNumCloud** : Qualification vs compliance générique
- **Transparence** : Open source vs propriétaire

### vs Azure OpenAI
- **Localisation** : France vs global
- **Audit** : Complet vs limité
- **Conformité** : C5+SecNumCloud vs basique

### vs Google Vertex AI
- **Contrôle** : Total vs dépendance
- **Réglementation** : EU-compliant vs global
- **Performance** : Optimisé vs standard

## Métriques Clés

### Documentation
- **36 modèles** automatiquement documentés
- **6 cas d'usage** détaillés
- **4 conformités** certifiées
- **Génération** : 5 secondes vs heures manuelles

### Impact Business
- **Time-to-market** : Réduit de 80%
- **Maintenance** : Automatisée 100%
- **Qualité** : Cohérence garantie
- **Évolutivité** : Ajout modèle = 1 ligne YAML

---

*Contexte LLMaaS Cloud Temple - Documentation technique complète*
*Dernière mise à jour : 15/06/2025 - Suppression des tags de la page des modèles.*
