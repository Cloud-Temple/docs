---
title: Reranking
sidebar_position: 5
---

# Reranking de Documents

## Qu'est-ce que le Reranking ?

Le **reranking** est une étape cruciale dans les pipelines RAG (Retrieval-Augmented Generation). Après une recherche vectorielle initiale (embedding), un modèle de reranking prend les `N` documents candidats et les **réordonne** par pertinence sémantique fine vis-à-vis de la requête de l'utilisateur.

### Pourquoi le Reranking améliore-t-il les résultats ?

```
Requête utilisateur
       │
       ▼
  ┌─────────────┐       ┌────────────────────────────────────┐
  │  Embedding  │──────►│ Top-100 documents (recherche      │
  │  + Vector   │       │ vectorielle approximative/ANN)     │
  │  Search     │       └────────────────────────────────────┘
  └─────────────┘                         │
                                          ▼
                               ┌────────────────────┐
                               │    Reranker         │
                               │  (analyse précise   │
                               │   requête↔document) │
                               └────────────────────┘
                                          │
                                          ▼
                               Top-5 documents triés
                               par pertinence réelle
```

- La **recherche vectorielle** (embedding) est rapide mais approximative — elle calcule une similarité cosinus dans un espace multidimensionnel
- Le **reranker** fait une analyse croisée fine de chaque paire (requête, document) et produit un score de pertinence précis
- Résultat : un RAG avec reranking a typiquement **+15 à +30% de précision** sur les réponses générées

## Modèles Disponibles

Consultez le [catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) pour les modèles de reranking, leur contexte et leurs échéances. Récupérez l'identifiant exact exposé par `GET /v1/models` ; les noms peuvent différer des noms courts utilisés dans une annonce.

Comparez la pertinence du classement sur votre corpus, les langues prises en charge, la longueur des documents et la latence. Les exemples ci-dessous utilisent `nvidia/llama-nemotron-rerank-vl-1b-v2` ; vérifiez sa disponibilité avant exécution.

## Tarification

**4,00 € par million de documents traités.** Une unité de recherche (`search_unit`) correspond à un document soumis au reranking pour une requête.

Tous les documents du tableau `documents` sont comptés. Le paramètre `top_n` limite uniquement le nombre de résultats retournés : il ne réduit pas le nombre de documents traités ni le coût de la requête. Un même document soumis dans plusieurs requêtes est compté à chaque traitement.

```text
Coût (€) = Nombre de documents traités × 4 / 1 000 000
```

**Exemple :** 1 000 requêtes contenant chacune 100 documents représentent 100 000 documents traités, soit **0,40 €**, même si chaque requête ne retourne que les 5 premiers résultats (`top_n: 5`).

Les compteurs de tokens éventuellement renvoyés par le moteur ne constituent pas l'unité de facturation du reranking.

## Endpoints

L'API LLMaaS expose deux endpoints compatibles avec le SDK Cohere :

| Endpoint | Version | Compatible |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | SDK Cohere v4, appels directs |
| `POST /v2/rerank` | Cohere v2 | SDK Cohere v5+ |

## Format de la Requête

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/rerank" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "nvidia/llama-nemotron-rerank-vl-1b-v2",
    "query": "Quelles sont les garanties de souveraineté de LLMaaS ?",
    "documents": [
      "Cloud Temple est hébergé exclusivement en France.",
      "Les tarifs débutent à 1.8€ par million de tokens.",
      "LLMaaS est qualifié SecNumCloud 3.2 par l'\''ANSSI.",
      "L'\''API est compatible avec le standard OpenAI.",
      "Les données ne sont ni stockées ni transférées hors de France."
    ],
    "top_n": 3
  }'
```

### Paramètres

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID du modèle de reranking |
| `query` | string | ✅ | La requête de recherche |
| `documents` | array of strings | ✅ | Les documents à réordonner |
| `top_n` | integer | ❌ | Nombre de résultats à retourner (défaut : tous) |
| `return_documents` | boolean | ❌ | Inclure le texte des documents dans la réponse (défaut : true) |

### Format de la Réponse

Extrait illustratif du format Jina/vLLM décrit par le contrat de la plateforme. Les scores et compteurs ci-dessous sont fictifs. Le proxy transmet la réponse du moteur et ajoute un bloc `backend`, omis ici.

```json
{
  "id": "score-8bb47ca195d8cb2f",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.0401,
      "document": {
        "text": "Cloud Temple est hébergé exclusivement en France.",
        "multi_modal": null
      }
    },
    {
      "index": 2,
      "relevance_score": 0.0253,
      "document": {
        "text": "LLMaaS est qualifié SecNumCloud 3.2 par l'ANSSI.",
        "multi_modal": null
      }
    },
    {
      "index": 4,
      "relevance_score": 0.0112,
      "document": {
        "text": "Les données ne sont ni stockées ni transférées hors de France.",
        "multi_modal": null
      }
    }
  ],
  "usage": {
    "prompt_tokens": 125,
    "total_tokens": 125
  },
  "model": "nvidia/llama-nemotron-rerank-vl-1b-v2"
}
```

- `results` : Documents triés par score décroissant
- `index` : Position originale dans le tableau `documents` envoyé
- `relevance_score` : Score brut du modèle (logit), non normalisé et non assimilable à une probabilité. Un score plus élevé indique un document mieux classé pour cette requête ; aucune plage universelle de 0 à 1 n'est garantie.
- `document` : Texte et éventuelles données multimodales du document, lorsque le moteur les retourne.
- `usage.prompt_tokens` et `usage.total_tokens` : Compteurs de tokens du moteur. Ils ne constituent pas l’unité de facturation du reranking.

Le nombre de documents facturés ne dépend pas de la présence d’un champ `search_units` dans la réponse : tous les documents soumis sont comptés, selon la [tarification](#tarification).

## Exemples d'Implémentation

### Python — Appel direct (httpx)

```python
import httpx
import os

API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = "https://api.ai.cloud-temple.com/v1"

def rerank(query: str, documents: list[str], top_n: int = 5, model: str = "nvidia/llama-nemotron-rerank-vl-1b-v2") -> list[dict]:
    """
    Réordonne des documents par pertinence vis-à-vis d'une requête.
    
    Args:
        query: La requête de l'utilisateur
        documents: Liste de documents candidats
        top_n: Nombre de résultats à retourner
        model: Modèle de reranking à utiliser
    
    Returns:
        Liste de documents triés par pertinence décroissante
    """
    payload = {
        "model": model,
        "query": query,
        "documents": documents,
        "top_n": top_n
    }
    
    with httpx.Client(timeout=30.0) as client:
        response = client.post(
            f"{BASE_URL}/rerank",
            headers={"Authorization": f"Bearer {API_KEY}"},
            json=payload
        )
        response.raise_for_status()
    
    return response.json()["results"]

# Utilisation
query = "Quelles sont les garanties de souveraineté ?"
documents = [
    "Cloud Temple est une société française.",
    "LLMaaS est qualifié SecNumCloud 3.2.",
    "L'API supporte le streaming SSE.",
    "Les données ne quittent jamais la France.",
    "La facturation est basée sur les tokens consommés."
]

results = rerank(query, documents, top_n=3)
for result in results:
    print(f"Score: {result['relevance_score']:.4f} | {result['document']['text']}")
```

### Python — SDK Cohere

```python
import cohere
import os

# Le SDK Cohere pointe vers l'API LLMaaS
co = cohere.Client(
    api_key=os.getenv("LLMAAS_API_KEY"),
    base_url="https://api.ai.cloud-temple.com"
)

results = co.rerank(
    model="nvidia/llama-nemotron-rerank-vl-1b-v2",
    query="Quelles sont les garanties de souveraineté ?",
    documents=[
        "Cloud Temple est une société française.",
        "LLMaaS est qualifié SecNumCloud 3.2.",
        "L'API supporte le streaming SSE.",
    ],
    top_n=2
)

for result in results.results:
    print(f"Index: {result.index} | Score: {result.relevance_score:.4f}")
```

### Intégration dans un Pipeline RAG Complet

```python
import httpx
import os
from typing import List

API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = "https://api.ai.cloud-temple.com/v1"
HEADERS = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

def embed_query(query: str) -> list[float]:
    """Vectorise la requête pour la recherche sémantique."""
    with httpx.Client(timeout=30.0) as client:
        r = client.post(
            f"{BASE_URL}/embeddings",
            headers=HEADERS,
            json={"model": "granite-embedding:278m", "input": query}
        )
        r.raise_for_status()
        return r.json()["data"][0]["embedding"]

def vector_search(query_vector: list[float], top_k: int = 20) -> list[str]:
    """
    Recherche vectorielle dans votre base de données (FAISS, Qdrant, etc.).
    Retourne les top_k documents candidats.
    [Implémentation spécifique à votre stack vectorielle]
    """
    # Exemple fictif — remplacez par votre logique de recherche
    return [f"Document candidat {i}" for i in range(top_k)]

def rerank_documents(query: str, documents: list[str], top_n: int = 5) -> list[str]:
    """Réordonne les documents candidats par pertinence fine."""
    with httpx.Client(timeout=30.0) as client:
        r = client.post(
            f"{BASE_URL}/rerank",
            headers=HEADERS,
            json={
                "model": "nvidia/llama-nemotron-rerank-vl-1b-v2",
                "query": query,
                "documents": documents,
                "top_n": top_n
            }
        )
        r.raise_for_status()
    
    results = r.json()["results"]
    # Retourne les documents dans l'ordre de pertinence
    return [documents[res["index"]] for res in results]

def generate_answer(query: str, context_docs: list[str]) -> str:
    """Génère une réponse basée sur les documents rerankés."""
    context = "\n\n".join([f"[Doc {i+1}]: {doc}" for i, doc in enumerate(context_docs)])
    
    with httpx.Client(timeout=60.0) as client:
        r = client.post(
            f"{BASE_URL}/chat/completions",
            headers=HEADERS,
            json={
                "model": "gpt-oss:120b",
                "messages": [
                    {
                        "role": "system",
                        "content": "Tu es un assistant qui répond aux questions basé uniquement sur le contexte fourni."
                    },
                    {
                        "role": "user",
                        "content": f"Contexte:\n{context}\n\nQuestion: {query}"
                    }
                ],
                "max_tokens": 500,
                "temperature": 0.1
            }
        )
        r.raise_for_status()
    
    return r.json()["choices"][0]["message"]["content"]

def rag_pipeline(query: str) -> str:
    """Pipeline RAG complet : Embed → Search → Rerank → Generate."""
    print(f"📝 Requête : {query}")
    
    # 1. Vectorisation de la requête
    print("🔢 Vectorisation...")
    query_vector = embed_query(query)
    
    # 2. Recherche vectorielle (top-20 candidats)
    print("🔍 Recherche vectorielle (top-20)...")
    candidates = vector_search(query_vector, top_k=20)
    
    # 3. Reranking (sélection des top-5)
    print("📊 Reranking (→ top-5)...")
    top_docs = rerank_documents(query, candidates, top_n=5)
    
    # 4. Génération de la réponse
    print("✍️ Génération de la réponse...")
    answer = generate_answer(query, top_docs)
    
    return answer

# Exemple d'utilisation
if __name__ == "__main__":
    question = "Quelles sont les garanties de conformité RGPD de Cloud Temple ?"
    reponse = rag_pipeline(question)
    print(f"\n💬 Réponse : {reponse}")
```

## Bonnes Pratiques

### Optimisation des Coûts

```python
# ✅ BON : Reranker sur un sous-ensemble raisonnable (20-50 docs)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ MAUVAIS : Reranker toute la base de données (1000+ docs)
# candidates = all_documents  # Trop lent et coûteux
```

### Choix du `top_n`

| Cas d'usage | `top_k` (search) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Chat/QA simple | 10-20 | 3-5 |
| Analyse de document | 20-50 | 5-10 |
| Synthèse complexe | 50-100 | 10-15 |

### Seuil de Pertinence

Commencez par utiliser le classement relatif et `top_n` pour sélectionner les documents. Il n’existe pas de seuil universel, tel que 0,3, applicable à tous les modèles et corpus.

Si votre application doit écarter les documents peu pertinents, calibrez un seuil sur un jeu représentatif de requêtes et de documents dont la pertinence a été évaluée. Mesurez les documents pertinents conservés et ceux éliminés à tort. Réévaluez ce seuil lors d’un changement de modèle ou de corpus ; ne comparez pas directement les scores de modèles différents.

## Ressources

- **Code d'exemple complet** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Catalogue modèles** : [Modèles de Reranking](./models#modèles-de-reranking)
- **API Reference** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG Explained** : [Guide complet RAG](./rag_explained)
