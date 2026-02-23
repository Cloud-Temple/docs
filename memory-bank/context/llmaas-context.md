# Contexte LLMaaS - LLM as a Service Cloud Temple

## Service Overview

**LLMaaS (Large Language Model as a Service)** est l'offre Cloud Temple dédiée à l'intelligence artificielle générative, proposant **40 modèles** de langage large en conformité **SecNumCloud + HDS + Souveraineté + C5**.

### Positionnement Stratégique
- **Premier cloud souverain français** proposant des LLM SecNumCloud
- **40 modèles** : du micro-modèle (278M) au modèle extrêmement large (235B)
- **Localisation 100% France** 🇫🇷
- **Conformité maximale** : SecNumCloud ✅ HDS ✅ Souveraineté ✅ C5 ❌

## Architecture Documentation

### Structure `docs/llmaas/`
```
docs/llmaas/
├── llmaas.md              # Vue d'ensemble service
├── models.md              # Catalogue des modèles
├── api.md                 # Documentation API REST (Tiers, Endpoints, Facturation)
├── concepts.md            # Architecture technique, Tokens, Sécurité
├── quickstart.md          # Guide de démarrage (cURL, Python, Tool Calling, Vision)
├── tutorials.md           # Guides avancés (LangChain, RAG, Qdrant, Agents)
├── ocr.md                 # [NOUVEAU] Guide DeepSeek-OCR
├── rag_explained.md       # [NOUVEAU] Explication détaillée du RAG
├── faq.md                 # Foire aux questions
├── images/                # Screenshots et schémas
└── licences/              # Licences des modèles
```

## Modèle Économique et Tiers

### Le Principe des Tiers
L'offre est structurée en 4 tiers définissant un équilibre entre :
1.  **Crédit d'Achat (Upfront)** : Montant à régler pour activer le service.
2.  **Limite Mensuelle** : Plafond de consommation pour maîtriser les coûts.
3.  **Capacité Technique** : Limites de débit (tokens/jour et tokens/heure).

| Tier | Crédit d'Achat | Limite Mensuelle | Tokens Output/Heure | Tokens Output/Jour | Description |
|------|----------------|-------------------|---------------------|--------------------|-----------|
| **Tier 1** | 200 € | 1 000 € | 150 000 | 3 600 000 | Utilisation standard |
| **Tier 2** | 500 € | 3 000 € | 300 000 | 7 200 000 | Usage professionnel |
| **Tier 3** | 1 000 € | 5 000 € | 450 000 | 10 800 000 | Volume élevé |
| **Tier 4** | 4 000 € | 10 000 € | 600 000 | 14 400 000 | Entreprise |

### Tarification à l'Usage
- **Tokens d'entrée** : 1.90 € / million
- **Tokens de sortie (standard)** : 8.00 € / million
- **Tokens de sortie (raisonneur)** : 8.00 € / million
- **Transcription Audio** : 0.01 € / minute

## Fonctionnalités Techniques

### Endpoints API
- **Chat Completions** (`POST /v1/chat/completions`) : Génération de texte, compatible OpenAI. Supporte le mode "Tool Calling" et le Streaming (SSE).
- **Completions** (`POST /v1/completions`) : Complétion de texte simple.
- **Embeddings** (`POST /v1/embeddings`) : Vectorisation de texte (modèle `granite-embedding:278m`).
- **Audio Transcription** (`POST /v1/audio/transcriptions`) : Speech-to-Text (Whisper).
- **Vision Multimodale** : Support de l'analyse d'images via `image_url` dans les messages.
- **OCR Avancé** : Support spécifique via DeepSeek-OCR pour l'analyse de documents complexes (tableaux, formules).

### Sécurité et Conformité
- **Protection des Données** : Chiffrement TLS 1.3 (transit) et AES-256 (repos).
- **Analyse des Prompts** : Système natif de détection d'injections de prompts (analyse structurelle, patterns suspects, comportementale).
- **Non-conservation** : Pas de stockage des prompts/réponses (traitement volatile).
- **Authentification** : Bearer tokens avec rotation automatique.

### Intégrations
- **Compatible OpenAI** : Drop-in replacement pour les SDKs existants.
- **Frameworks supportés** : LangChain, LlamaIndex, Haystack, Semantic Kernel.
- **Outils** : Jupyter, Streamlit, Gradio.

## Catalogue de Modèles

### Résumé du Catalogue (40 modèles)
- **Grande Taille** : Llama 3.3 70B, Qwen3 235B, Qwen2.5-VL 72B.
- **Intermédiaire** : Gemma 3 27B, Qwen3 32B, DeepSeek-R1 32B, Cogito 32B.
- **Code & Raisonnement** : QwQ 32B, Qwen3-Coder 30B, DeepCoder 14B, Magistral 24B.
- **Compact & Efficient** : Gemma 3 4B/1B, Granite 3.3 8B/2B, Qwen3 4B/1.7B/0.6B.
- **Vision** : Qwen2.5-VL, Granite 3.2 Vision, Mistral Small 3.2.
- **Sécurité** : Granite Guardian.
- **Embedding** : Granite Embedding 278m.

### Cycle de Vie
- **DMP (Mise en Production)** et **DSP (Fin de Support)** clairement définies.
- Politique de dépréciation avec préavis de 3 mois.
- Modèles dépréciés listés (ex: Llama 3.1, Qwen 2.5 anciens).

## Architecture Technique

### Infrastructure
- **Localisation** : 100% France (Datacenters Cloud Temple).
- **Matériel** : 12 machines GPU, Load Balancing intelligent.
- **API Gateway** : Gestion du Rate Limiting, Auth, Monitoring.

### Schéma de Flux
[Client] -> [API Gateway (Auth, RateLimit, Security Check)] -> [Load Balancer] -> [GPU Cluster (Inférence)]

## Workflows et Processus

### Génération Documentation
La documentation des modèles est générée automatiquement à partir de `memory-bank/models_config.yaml` via le script `scripts/generate_models_doc/generate_models_doc.py`.

### RAG Pipeline
Documentation complète sur l'implémentation de RAG (Retrieval-Augmented Generation) :
- Explication conceptuelle (Embeddings, Recherche vectorielle).
- Tutoriels pratiques avec LangChain (FAISS, Qdrant).

---

*Contexte LLMaaS Cloud Temple - Documentation technique complète*
*Dernière mise à jour : 22/11/2025 - Intégration Tiers, OCR, RAG et mise à jour catalogue.*

## Modèles Dépréciés (mise à jour)

| Modèle | Éditeur | Phase | Date de Dépréciation |
| :--- | :--- | :--- | :--- |
| qwen3:235b |  | Déprécié | 22/11/2025 |
| qwen3-2507-think:30b-a3b |  | Déprécié | 14/11/2025 |
| gemma3:12b |  | Déprécié | 21/11/2025 |
