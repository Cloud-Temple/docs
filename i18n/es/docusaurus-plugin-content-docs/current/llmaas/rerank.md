---
title: Reclasificación
sidebar_position: 5
---

# Reclasificación de Documentos

## ¿Qué es la Reclasificación?

La **reclasificación** es una etapa crucial en los pipelines RAG (Generación Aumentada por Recuperación). Tras una búsqueda vectorial inicial (incrustación), un modelo de reclasificación toma los `N` documentos candidatos y los **reordena** según su relevancia semántica fina en relación con la consulta del usuario.

### ¿Por qué la Reclasificación mejora los resultados?

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

- La **búsqueda vectorial** (incrustación) es rápida pero aproximada: calcula una similitud de coseno en un espacio multidimensional.
- El **reclasificador** realiza un análisis cruzado fino de cada par (consulta, documento) y produce una puntuación de relevancia precisa.
- Resultado: un RAG con reclasificación tiene típicamente **+15 a +30% de precisión** en las respuestas generadas.

## Modelos Disponibles

Consulte el [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para los modelos de reclasificación, su contexto y sus fechas de caducidad. Recupere el identificador exacto expuesto por `GET /v1/models`; los nombres pueden diferir de los nombres cortos utilizados en un anuncio.

Compare la relevancia del orden en su corpus, los idiomas admitidos, la longitud de los documentos y la latencia. Los ejemplos a continuación utilizan `nvidia/llama-nemotron-rerank-vl-1b-v2`; verifique su disponibilidad antes de ejecutar.

## Precios

Una unidad de búsqueda (`search_unit`) corresponde a un documento sometido a reclasificación para una consulta.

Todos los documentos de la tabla `documents` se cuentan. El parámetro `top_n` limita únicamente el número de resultados devueltos: no reduce el número de documentos procesados ni el coste de la consulta. Un mismo documento sometido en varias consultas se cuenta en cada procesamiento.

Para conocer los precios públicos vigentes y realizar su estimación, consulte el [catálogo de precios oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

**Ejemplo:** 1 000 consultas que contienen cada una 100 documentos representan 100 000 documentos procesados, incluso si cada consulta devuelve solo los 5 primeros resultados (`top_n: 5`).

Los contadores de tokens eventualmente devueltos por el motor no constituyen la unidad de facturación de la reclasificación.

## Endpoints

La API LLMaaS expone dos endpoints compatibles con el SDK de Cohere:

| Endpoint | Versión | Compatible |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | SDK Cohere v4, llamadas directas |
| `POST /v2/rerank` | Cohere v2 | SDK Cohere v5+ |

## Formato de la Consulta

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/rerank" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "model": "nvidia/llama-nemotron-rerank-vl-1b-v2",
    "query": "Quelles sont les garanties de souveraineté de LLMaaS ?",
    "documents": [
      "Cloud Temple est hébergé exclusivement en France.",
        "Les tarifs publics Cloud Temple sont disponibles sur https://www.cloud-temple.com/nos-tarifs-publics/",
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
| `model` | string | ✅ | ID del modelo de reclasificación |
| `query` | string | ✅ | La consulta de búsqueda |
| `documents` | array of strings | ✅ | Los documentos a reclasificar |
| `top_n` | integer | ❌ | Número de resultados a devolver (por defecto: todos) |
| `return_documents` | boolean | ❌ | Incluir el texto de los documentos en la respuesta (por defecto: true) |

### Formato de la Respuesta

Extracto ilustrativo del formato Jina/vLLM descrito por el contrato de la plataforma. Las puntuaciones y contadores a continuación son ficticios. El proxy transmite la respuesta del motor y añade un bloque `backend`, omitido aquí.

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

- `results`: Documentos ordenados por puntuación decreciente.
- `index`: Posición original en la tabla `documents` enviada.
- `relevance_score`: Puntuación bruta del modelo (logit), no normalizada y no comparable a una probabilidad. Una puntuación más alta indica un documento mejor clasificado para esta consulta; no se garantiza ningún rango universal de 0 a 1.
- `document`: Texto y eventuales datos multimodales del documento, cuando el motor los devuelve.
- `usage.prompt_tokens` y `usage.total_tokens`: Contadores de tokens del motor. No constituyen la unidad de facturación de la reclasificación.

El número de documentos facturados no depende de la presencia de un campo `search_units` en la respuesta: todos los documentos sometidos se cuentan, según la [tarificación](#precios).

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

## Buenas Prácticas

### Optimización de Costes

```python
# ✅ BON : Reranker sur un sous-ensemble raisonnable (20-50 docs)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ MAUVAIS : Reranker toute la base de données (1000+ docs)
# candidates = all_documents  # Trop lent et coûteux
```

### Elección de `top_n`

| Caso de uso | `top_k` (búsqueda) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Chat/QA simple | 10-20 | 3-5 |
| Análisis de documento | 20-50 | 5-10 |
| Síntesis compleja | 50-100 | 10-15 |

### Umbral de Relevancia

Comienza utilizando el ranking relativo y `top_n` para seleccionar los documentos. No existe un umbral universal, como 0,3, aplicable a todos los modelos y corpus.

Si tu aplicación debe descartar documentos poco relevantes, calibra un umbral sobre un conjunto representativo de consultas y documentos cuya relevancia haya sido evaluada. Mide los documentos relevantes conservados y los eliminados erróneamente. Reevalúa este umbral ante un cambio de modelo o de corpus; no compares directamente las puntuaciones de modelos diferentes.

## Recursos

- **Código de ejemplo completo** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Catálogo de modelos** : [Modelos de Reranking](./models#modelos-de-reranking)
- **Referencia API** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG Explicado** : [Guía completa RAG](./rag_explained)
