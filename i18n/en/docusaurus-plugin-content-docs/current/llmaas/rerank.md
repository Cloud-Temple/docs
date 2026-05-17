---
title: Reranking
sidebar_position: 5
---

# Document Reranking

## What is Reranking?

**Reranking** is a crucial step in RAG (Retrieval-Augmented Generation) pipelines. After an initial vector search (embedding), a reranking model takes the `N` candidate documents and **reorders** them based on fine-grained semantic relevance to the user's query.

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
- The **reranker** performs a fine-grained cross-analysis of each (query, document) pair and produces an accurate relevance score
- Result: a RAG with reranking typically achieves **+15 to +30% higher accuracy** on generated responses

## Available Models

| Model | Publisher | Context | LTS | Recommended Use |
|--------|---------|----------|-----|-----------------|
| `nvidia/llama-nemotron-rerank-vl-1b-v2` | NVIDIA | 4 096 | No | **Recommended** — maximum accuracy, DSP 30/06/2027 |
| `qwen3-reranker:4b` | Qwen Team | 4 096 | No | High quality, deep contextual understanding |
| `qwen3-reranker:0.6b` | Qwen Team | 4 096 | No | Compact and fast, ideal for low latency |
| `bge-reranker-large` | BAAI | 512 | No | Multilingual, high performance |

:::tip Which model to choose?
- **Production RAG**: `nvidia/llama-nemotron-rerank-vl-1b-v2` — highest accuracy
- **Low Latency**: `qwen3-reranker:0.6b` — fastest
- **Multilingual**: `bge-reranker-large` — optimized for many languages
:::

## Pricing

**4.00 € / million of reranked tokens** — approximately **50% cheaper** than standard generation tokens.

The number of reranked tokens corresponds to the sum of the tokens in the query and each processed document.

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
|-----------|------|-----------|-------------|
| `model` | string | ✅ | Reranking model ID |
| `query` | string | ✅ | The search query |
| `documents` | array of strings | ✅ | Documents to rerank |
| `top_n` | integer | ❌ | Number of results to return (default: all) |
| `return_documents` | boolean | ❌ | Include document text in the response (default: true) |

### Response Format

```json
{
  "id": "rerank-7f3a2b1c4e5d",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.9821,
      "document": {
        "text": "Cloud Temple est hébergé exclusivement en France."
      }
    },
    {
      "index": 2,
      "relevance_score": 0.9743,
      "document": {
        "text": "LLMaaS est qualifié SecNumCloud 3.2 par l'ANSSI."
      }
    },
    {
      "index": 4,
      "relevance_score": 0.9512,
      "document": {
        "text": "Les données ne sont ni stockées ni transférées hors de France."
      }
    }
  ],
  "usage": {
    "billed_units": {
      "search_units": 5
    }
  }
}
```

- `results` : Documents sorted by descending score
- `index` : Original position in the submitted `documents` array
- `relevance_score` : Relevance score between 0 and 1 (higher values indicate greater relevance)
- `search_units` : Number of reranked documents (for billing)

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

### Python — SDK Cohere

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
    # Dummy example — replace with your search logic
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
    
    # 3. Reranking (select top-5)
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

### Choice of `top_n`

| Use case | `top_k` (search) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Simple Chat/QA | 10-20 | 3-5 |
| Document analysis | 20-50 | 5-10 |
| Complex summarization | 50-100 | 10-15 |

### Relevance Threshold

```python
# Filters out low-relevance documents (score < 0.3)
RELEVANCE_THRESHOLD = 0.3

def rerank_with_threshold(query: str, documents: list[str]) -> list[str]:
    results = rerank_documents(query, documents, top_n=len(documents))
    return [
        documents[r["index"]] 
        for r in results 
        if r["relevance_score"] >= RELEVANCE_THRESHOLD
    ]
```

## Resources

- **Complete example code** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Model catalog** : [Reranking Models](./models#modèles-de-reranking)
- **API Reference** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG Explained** : [Complete RAG Guide](./rag_explained)