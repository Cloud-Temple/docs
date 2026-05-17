---
title: Reranking
sidebar_position: 5
---

# Reranking von Dokumenten

## Was ist Reranking?

Das **Reranking** ist ein entscheidender Schritt in RAG-Pipelines (Retrieval-Augmented Generation). Nach einer initialen Vektorsuche (Embedding) nimmt ein Reranking-Modell die `N` Kandidatendokumente und **ordnet** sie nach ihrer präzisen semantischen Relevanz zur Benutzeranfrage neu.

### Warum verbessert Reranking die Ergebnisse?

```
Nutzeranfrage
       │
       ▼
  ┌─────────────┐       ┌────────────────────────────────────┐
  │  Embedding  │──────►│ Top-100 Dokumente (approximative   │
  │  + Vektor   │       │ Vektorsuche/ANN)                   │
  │  Suche      │       └────────────────────────────────────┘
  └─────────────┘                         │
                                          ▼
                               ┌────────────────────┐
                               │    Reranker         │
                               │  (präzise Analyse   │
                               │   Anfrage↔Dokument)  │
                               └────────────────────┘
                                          │
                                          ▼
                               Top-5 Dokumente nach
                               tatsächlicher Relevanz sortiert
```

- Die **Vektorsuche** (Embedding) ist schnell, aber approximativ — sie berechnet eine Kosinus-Ähnlichkeit in einem multidimensionalen Raum
- Der **Reranker** führt eine detaillierte Kreuzanalyse jedes Paares (Anfrage, Dokument) durch und erzeugt einen präzisen Relevanzscore
- Ergebnis: Ein RAG mit Reranking weist typischerweise **+15 bis +30 % mehr Präzision** bei den generierten Antworten auf

## Verfügbare Modelle

| Modell | Herausgeber | Kontext | LTS | Empfohlene Verwendung |
|--------|---------|---------|-----|-----------------------|
| `nvidia/llama-nemotron-rerank-vl-1b-v2` | NVIDIA | 4 096 | Nein | **Empfohlen** — maximale Genauigkeit, DSP 30/06/2027 |
| `qwen3-reranker:4b` | Qwen Team | 4 096 | Nein | Hohe Qualität, tiefes kontextuelles Verständnis |
| `qwen3-reranker:0.6b` | Qwen Team | 4 096 | Nein | Kompakt und schnell, ideal für niedrige Latenz |
| `bge-reranker-large` | BAAI | 512 | Nein | Mehrsprachig, hohe Leistung |

:::tip Welches Modell soll ich wählen?
- **RAG-Produktion** : `nvidia/llama-nemotron-rerank-vl-1b-v2` — höchste Genauigkeit
- **Niedrige Latenz** : `qwen3-reranker:0.6b` — am schnellsten
- **Mehrsprachig** : `bge-reranker-large` — optimiert für viele Sprachen
:::

## Preisgestaltung

**4,00 € / Million neu gerankter Tokens** — etwa **50 % günstiger** als die Tokens der Standard-Generierung.

Die Anzahl der neu gerankten Tokens entspricht der Summe der Tokens der Anfrage und jedes verarbeiteten Dokuments.

## Endpunkte

Die LLMaaS-API stellt zwei Endpunkte bereit, die mit dem Cohere-SDK kompatibel sind:

| Endpunkt | Version | Kompatibel |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | SDK Cohere v4, direkte Aufrufe |
| `POST /v2/rerank` | Cohere v2 | SDK Cohere v5+ |

## Format der Anfrage

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

### Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|-----|--------------|--------------|
| `model` | string | ✅ | ID des Reranking-Modells |
| `query` | string | ✅ | Die Suchanfrage |
| `documents` | Array von Strings | ✅ | Die neu zu sortierenden Dokumente |
| `top_n` | integer | ❌ | Anzahl der zurückzugebenden Ergebnisse (Standard: alle) |
| `return_documents` | boolean | ❌ | Dokumententext in der Antwort enthalten (Standard: true) |

### Format der Antwort

```json
{
  "id": "rerank-7f3a2b1c4e5d",
  "results": [
    {
      "index": 0,
      "relevance_score": 0.9821,
      "document": {
        "text": "Cloud Temple wird ausschließlich in Frankreich gehostet."
      }
    },
    {
      "index": 2,
      "relevance_score": 0.9743,
      "document": {
        "text": "LLMaaS ist von der ANSSI als SecNumCloud 3.2 qualifiziert."
      }
    },
    {
      "index": 4,
      "relevance_score": 0.9512,
      "document": {
        "text": "Die Daten werden weder gespeichert noch außerhalb Frankreichs übertragen."
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

- `results` : Dokumente, sortiert nach absteigendem Score
- `index` : Ursprüngliche Position im gesendeten `documents`-Array
- `relevance_score` : Relevanzscore zwischen 0 und 1 (je höher, desto relevanter)
- `search_units` : Anzahl der neu bewerteten Dokumente (zur Abrechnung)

## Implementierungsbeispiele

### Python — Direkter Aufruf (httpx)

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

# Verwendung
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

# Das Cohere SDK verweist auf die LLMaaS-API
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

### Integration in eine vollständige RAG-Pipeline

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
    # Fiktives Beispiel — ersetzen Sie dies durch Ihre Suchlogik
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
    # Gibt die Dokumente in der Reihenfolge der Relevanz zurück
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
    
    # 1. Vektorisierung der Anfrage
    print("🔢 Vectorisation...")
    query_vector = embed_query(query)
    
    # 2. Vektorsuche (Top-20-Kandidaten)
    print("🔍 Recherche vectorielle (top-20)...")
    candidates = vector_search(query_vector, top_k=20)
    
    # 3. Reranking (Auswahl der Top-5)
    print("📊 Reranking (→ top-5)...")
    top_docs = rerank_documents(query, candidates, top_n=5)
    
    # 4. Antwortgenerierung
    print("✍️ Génération de la réponse...")
    answer = generate_answer(query, top_docs)
    
    return answer

# Verwendungsbeispiel
if __name__ == "__main__":
    question = "Quelles sont les garanties de conformité RGPD de Cloud Temple ?"
    reponse = rag_pipeline(question)
    print(f"\n💬 Réponse : {reponse}")
```

## Best Practices

### Kostenoptimierung

```python
# ✅ GUT: Reranker auf einer angemessenen Teilmenge (20-50 Dokumente)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ SCHLECHT: Reranker der gesamten Datenbank (1000+ Dokumente)
# candidates = all_documents  # Zu langsam und kostspielig
```

### Auswahl von `top_n`

| Anwendungsfall | `top_k` (search) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Einfacher Chat/QA | 10-20 | 3-5 |
| Dokumentenanalyse | 20-50 | 5-10 |
| Komplexe Zusammenfassung | 50-100 | 10-15 |

### Relevanzschwelle

```python
# Filtert Dokumente mit geringer Relevanz (Score < 0.3)
RELEVANCE_THRESHOLD = 0.3

def rerank_with_threshold(query: str, documents: list[str]) -> list[str]:
    results = rerank_documents(query, documents, top_n=len(documents))
    return [
        documents[r["index"]] 
        for r in results 
        if r["relevance_score"] >= RELEVANCE_THRESHOLD
    ]
```

## Ressourcen

- **Vollständiger Beispielcode** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Modellkatalog** : [Reranking-Modelle](./models#modèles-de-reranking)
- **API-Referenz** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG-Erklärung** : [Vollständiger RAG-Leitfaden](./rag_explained)