---
title: Reranking
sidebar_position: 5
---

# Document Reranking

## What is Reranking?

**Reranking** is a crucial step in RAG (Retrieval-Augmented Generation) pipelines. After an initial vector search (embedding), a reranking model takes the `N` candidate documents and **reorders** them by fine-grained semantic relevance relative to the user's query.

### Why does Reranking improve results?

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

- **Vector search** (embedding) is fast but approximate — it calculates cosine similarity in a multidimensional space
- The **reranker** performs a fine-grained pairwise analysis of each (query, document) pair and produces a precise relevance score
- Result: a RAG with reranking typically achieves **+15 to +30% higher accuracy** in generated responses

## Available Models

Consult the [catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) for reranking models, their context, and end-of-life dates. Retrieve the exact identifier exposed by `GET /v1/models`; names may differ from the short names used in announcements.

Compare ranking relevance on your corpus, supported languages, document length, and latency. The examples below use `nvidia/llama-nemotron-rerank-vl-1b-v2`; verify its availability before execution.

## Pricing

**€4.00 per million processed documents.** A search unit (`search_unit`) corresponds to a document submitted for reranking per query.

All documents in the `documents` array are counted. The `top_n` parameter only limits the number of returned results: it does not reduce the number of processed documents nor the query cost. The same document submitted across multiple queries is counted each time it is processed.

```text
Coût (€) = Nombre de documents traités × 4 / 1 000 000
```

**Example:** 1,000 queries each containing 100 documents represent 100,000 processed documents, totaling **€0.40**, even if each query only returns the top 5 results (`top_n: 5`).

Any token counters potentially returned by the engine do not constitute the billing unit for reranking.

## Endpoints

The LLMaaS API exposes two endpoints compatible with the Cohere SDK:

| Endpoint | Version | Compatible |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | Cohere SDK v4, direct calls |
| `POST /v2/rerank` | Cohere v2 | Cohere SDK v5+ |

## Request Format

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

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID of the reranking model |
| `query` | string | ✅ | The search query |
| `documents` | array of strings | ✅ | The documents to rerank |
| `top_n` | integer | ❌ | Number of results to return (default: all) |
| `return_documents` | boolean | ❌ | Include the document text in the response (default: true) |

### Response Format

Illustrative excerpt of the Jina/vLLM format described by the platform's contract. The scores and counters below are fictional. The proxy forwards the engine's response and adds a `backend` block, omitted here.

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

- `results` : Documents sorted by descending score
- `index` : Original position in the sent `documents` array
- `relevance_score` : Raw model score (logit), not normalized and not to be interpreted as a probability. A higher score indicates a document better ranked for this query; no universal 0 to 1 range is guaranteed.
- `document` : Text and any multimodal data from the document, when returned by the engine.
- `usage.prompt_tokens` and `usage.total_tokens` : Engine token counters. They do not constitute the billing unit for reranking.

The number of billed documents does not depend on the presence of a `search_units` field in the response: all submitted documents are counted, according to the [tarification](#pricing).

## Implementation Examples

### Python — Direct Call (httpx)

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

# Usage
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

### Python — Cohere SDK

```python
import cohere
import os

# The Cohere SDK points to the LLMaaS API
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

### Integration into a Complete RAG Pipeline

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
    # Fictional example — replace with your search logic
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
    # Returns documents in order of relevance
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
    
    # 1. Query vectorization
    print("🔢 Vectorisation...")
    query_vector = embed_query(query)
    
    # 2. Vector search (top-20 candidates)
    print("🔍 Recherche vectorielle (top-20)...")
    candidates = vector_search(query_vector, top_k=20)
    
    # 3. Reranking (selecting top-5)
    print("📊 Reranking (→ top-5)...")
    top_docs = rerank_documents(query, candidates, top_n=5)
    
    # 4. Answer generation
    print("✍️ Génération de la réponse...")
    answer = generate_answer(query, top_docs)
    
    return answer

# Usage example
if __name__ == "__main__":
    question = "Quelles sont les garanties de conformité RGPD de Cloud Temple ?"
    reponse = rag_pipeline(question)
    print(f"\n💬 Réponse : {reponse}")
```

## Best Practices

### Cost Optimization

```python
# ✅ GOOD: Rerank on a reasonable subset (20-50 docs)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ BAD: Rerank the entire database (1000+ docs)
# candidates = all_documents  # Too slow and expensive
```

### Choosing `top_n`

| Use case | `top_k` (search) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Simple Chat/QA | 10-20 | 3-5 |
| Document analysis | 20-50 | 5-10 |
| Complex synthesis | 50-100 | 10-15 |

### Relevance Threshold

Start by using relative ranking and `top_n` to select documents. There is no universal threshold, such as 0.3, that applies to all models and corpora.

If your application needs to filter out low-relevance documents, calibrate a threshold on a representative set of queries and documents whose relevance has been evaluated. Measure the relevant documents retained and those incorrectly discarded. Re-evaluate this threshold when changing models or corpora; do not directly compare scores across different models.

## Resources

- **Complete example code** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Model catalog** : [Reranking Models](./models#reranking-models)
- **API Reference** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG Explained** : [Complete RAG Guide](./rag_explained)