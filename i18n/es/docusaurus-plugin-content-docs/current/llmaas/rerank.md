---
title: Reclasificación
sidebar_position: 5
---

# Reclasificación de Documentos

## ¿Qué es el reranking?

El **reranking** es una etapa crucial en los pipelines RAG (Retrieval-Augmented Generation). Tras una búsqueda vectorial inicial (embedding), un modelo de reranking toma los `N` documentos candidatos y los **reordena** según una relevancia semántica fina respecto a la consulta del usuario.

### ¿Por qué el Reranking mejora los resultados?

```
Consulta del usuario
       │
       ▼
  ┌─────────────┐       ┌────────────────────────────────────┐
  │  Embedding  │──────►│ Top-100 documentos (recherche      │
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
                               Top-5 documentos ordenados
                               por relevancia real
```

- La **búsqueda vectorial** (embedding) es rápida pero aproximada — calcula una similitud coseno en un espacio multidimensional
- El **reranker** realiza un análisis cruzado fino de cada par (requête, document) y genera una puntuación de relevancia precisa
- Resultado: un RAG con reranking tiene típicamente **+15 a +30 % de precisión** en las respuestas generadas

## Modelos Disponibles

| Modelo | Editor | Contexto | LTS | Uso recomendado |
|--------|---------|----------|-----|-----------------|
| `nvidia/llama-nemotron-rerank-vl-1b-v2` | NVIDIA | 4 096 | No | **Recomendado** — precisión máxima, DSP 30/06/2027 |
| `qwen3-reranker:4b` | Qwen Team | 4 096 | No | Alta calidad, comprensión contextual profunda |
| `qwen3-reranker:0.6b` | Qwen Team | 4 096 | No | Compacto y rápido, ideal para baja latencia |
| `bge-reranker-large` | BAAI | 512 | No | Multilingüe, alto rendimiento |

:::tip ¿Qué modelo elegir?
- **Producción RAG** : `nvidia/llama-nemotron-rerank-vl-1b-v2` — mayor precisión
- **Baja latencia** : `qwen3-reranker:0.6b` — el más rápido
- **Multilingüe** : `bge-reranker-large` — optimizado para múltiples idiomas
:::

## Tarificación

**4,00 € / millón de tokens rerankeados** — aproximadamente **un 50% más económico** que los tokens de generación estándar.

El número de tokens rerankeados corresponde a la suma de los tokens de la consulta y de cada documento procesado.

## Endpoints

La API LLMaaS expone dos endpoints compatibles con el SDK Cohere:

| Endpoint | Versión | Compatible |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | SDK Cohere v4, llamadas directas |
| `POST /v2/rerank` | Cohere v2 | SDK Cohere v5+ |

## Formato de la Solicitud

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

### Parámetros
| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `model` | cadena | ✅ | ID del modelo de reranking |
| `query` | cadena | ✅ | La consulta de búsqueda |
| `documents` | array de cadenas | ✅ | Los documentos a reordenar |
| `top_n` | entero | ❌ | Número de resultados a devolver (por defecto: todos) |
| `return_documents` | booleano | ❌ | Incluir el texto de los documentos en la respuesta (por defecto: true) |

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

- `results` : Documentos ordenados por puntuación decreciente
- `index` : Posición original en el array `documents` enviado
- `relevance_score` : Puntuación de relevancia entre 0 y 1 (cuanto mayor sea, más relevante)
- `search_units` : Número de documentos reordenados (para facturación)

## Ejemplos de Implementación

### Python — Llamada directa (httpx)

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

# Uso
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

# El SDK de Cohere apunta a la API LLMaaS
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

### Integración en un Pipeline RAG Completo

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
    # Ejemplo ficticio — reemplace por su lógica de búsqueda
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
    # Devuelve los documentos en orden de relevancia
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
    
    # 1. Vectorización de la consulta
    print("🔢 Vectorisation...")
    query_vector = embed_query(query)
    
    # 2. Búsqueda vectorial (top-20 candidatos)
    print("🔍 Recherche vectorielle (top-20)...")
    candidates = vector_search(query_vector, top_k=20)
    
    # 3. Reordenamiento (selección de top-5)
    print("📊 Reranking (→ top-5)...")
    top_docs = rerank_documents(query, candidates, top_n=5)
    
    # 4. Generación de la respuesta
    print("✍️ Génération de la réponse...")
    answer = generate_answer(query, top_docs)
    
    return answer

# Ejemplo de uso
if __name__ == "__main__":
    question = "Quelles sont les garanties de conformité RGPD de Cloud Temple ?"
    reponse = rag_pipeline(question)
    print(f"\n💬 Réponse : {reponse}")
```

## Buenas Prácticas

### Optimización de Costos

```python
# ✅ CORRECTO: Rerankear un subconjunto razonable (20-50 docs)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ INCORRECTO: Rerankear toda la base de datos (1000+ docs)
# candidates = all_documents  # Demasiado lento y costoso
```

### Selección de `top_n`

| Caso de uso | `top_k` (búsqueda) | `top_n` (reclasificación) |
|------------|-----------------|-----------------|
| Chat/QA simple | 10-20 | 3-5 |
| Análisis de documento | 20-50 | 5-10 |
| Síntesis compleja | 50-100 | 10-15 |

### Umbral de Relevancia

```python
# Filtra los documentos poco relevantes (score < 0.3)
RELEVANCE_THRESHOLD = 0.3

def rerank_with_threshold(query: str, documents: list[str]) -> list[str]:
    results = rerank_documents(query, documents, top_n=len(documents))
    return [
        documents[r["index"]] 
        for r in results 
        if r["relevance_score"] >= RELEVANCE_THRESHOLD
    ]
```

## Recursos

- **Código de ejemplo completo** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Catálogo de modelos** : [Modelos de Reranking](./models#modèles-de-reranking)
- **Referencia de la API** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG Explicado** : [Guía completa de RAG](./rag_explained)