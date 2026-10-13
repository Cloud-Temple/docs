---
title: Reranking
sidebar_position: 5
---

# Reranking von Dokumenten

## Was ist Reranking?

Das **Reranking** ist ein entscheidender Schritt in RAG-Pipelines (Retrieval-Augmented Generation). Nach einer initialen Vektorsuche (Embedding) nimmt ein Reranking-Modell die `N` Kandidatendokumente und **ordnet sie neu** basierend auf ihrer feinen semantischen Relevanz in Bezug auf die Benutzeranfrage.

### Warum verbessert Reranking die Ergebnisse?

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

- Die **Vektorsuche** (Embedding) ist schnell, aber approximativ — sie berechnet eine Kosinus-Ähnlichkeit in einem multidimensionalen Raum.
- Der **Reranker** führt eine feine Kreuzanalyse jedes Paares (Anfrage, Dokument) durch und erzeugt einen präzisen Relevanzscore.
- Ergebnis: Ein RAG-System mit Reranking weist typischerweise eine **+15 bis +30 % höhere Genauigkeit** bei den generierten Antworten auf.

## Verfügbare Modelle

Sehen Sie sich das [Katalog- und Lebenszyklusverzeichnis](https://llmaas.status.cloud-temple.app/lifecycle) für Reranking-Modelle, deren Kontext und Fristen an. Rufen Sie die exakte ID ab, die von `GET /v1/models` bereitgestellt wird; die Namen können von den in Ankündigungen verwendeten Kurznamen abweichen.

Vergleichen Sie die Ranking-Relevanz auf Ihrem Korpus, die unterstützten Sprachen, die Dokumentenlänge und die Latenz. Die folgenden Beispiele verwenden `nvidia/llama-nemotron-rerank-vl-1b-v2`; überprüfen Sie dessen Verfügbarkeit vor der Ausführung.

## Preisgestaltung

Eine Sucheinheit (`search_unit`) entspricht einem Dokument, das für eine Anfrage dem Reranking unterzogen wird.

Alle Dokumente in der Liste `documents` werden gezählt. Der Parameter `top_n` begrenzt nur die Anzahl der zurückgegebenen Ergebnisse; er reduziert nicht die Anzahl der verarbeiteten Dokumente noch die Kosten der Anfrage. Dasselbe Dokument, das in mehreren Anfragen eingereicht wird, wird bei jeder Verarbeitung gezählt.

Um die aktuellen öffentlichen Preise zu erfahren und Ihre Schätzung zu erstellen, konsultieren Sie den [offiziellen Cloud Temple Preis-Katalog](https://www.cloud-temple.com/nos-tarifs-publics/).

**Beispiel:** 1 000 Anfragen, die jeweils 100 Dokumente enthalten, stellen 100 000 verarbeitete Dokumente dar, auch wenn jede Anfrage nur die ersten 5 Ergebnisse zurückgibt (`top_n: 5`).

Die vom Engine möglicherweise zurückgegebenen Token-Zähler stellen nicht die Abrechnungseinheit für das Reranking dar.

## Endpoints

Die LLMaaS-API stellt zwei Endpoints bereit, die mit dem Cohere-SDK kompatibel sind:

| Endpoint | Version | Kompatibel |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | Cohere SDK v4, direkte Aufrufe |
| `POST /v2/rerank` | Cohere v2 | Cohere SDK v5+ |

## Anfrageformat

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

### Parameter

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|------|-------------|-------------|
| `model` | string | ✅ | ID des Reranking-Modells |
| `query` | string | ✅ | Die Suchanfrage |
| `documents` | array of strings | ✅ | Die neu zu ordnenden Dokumente |
| `top_n` | integer | ❌ | Anzahl der zurückzugebenden Ergebnisse (Standard: alle) |
| `return_documents` | boolean | ❌ | Text der Dokumente in der Antwort einschließen (Standard: true) |

### Antwortformat

Illustratives Beispiel des von der Plattformvereinbarung beschriebenen Jina/vLLM-Formats. Die unten stehenden Scores und Zähler sind fiktiv. Der Proxy leitet die Antwort der Engine weiter und fügt einen hier weggelassenen `backend`-Block hinzu.

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

- `results`: Dokumente, sortiert nach absteigendem Score.
- `index`: Ursprüngliche Position im gesendeten `documents`-Array.
- `relevance_score`: Rohscore des Modells (Logit), nicht normalisiert und nicht als Wahrscheinlichkeit interpretierbar. Ein höherer Score zeigt ein besser für diese Anfrage geranktes Dokument an; keine universelle Skala von 0 bis 1 ist garantiert.
- `document`: Text und ggf. multimodale Daten des Dokuments, wenn die Engine diese zurückgibt.
- `usage.prompt_tokens` und `usage.total_tokens`: Token-Zähler der Engine. Sie stellen nicht die Abrechnungseinheit für das Reranking dar.

Die Anzahl der abgerechneten Dokumente hängt nicht vom Vorhandensein eines `search_units`-Felds in der Antwort ab: Alle eingereichten Dokumente werden gezählt, gemäß der [Preisgestaltung](#preisgestaltung).

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

### Python — Cohere SDK

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

### Integration in einem vollständigen RAG-Pipeline

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

## Best Practices

### Kostenoptimierung

```python
# ✅ BON : Reranker sur un sous-ensemble raisonnable (20-50 docs)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ MAUVAIS : Reranker toute la base de données (1000+ docs)
# candidates = all_documents  # Trop lent et coûteux
```

### Wahl von `top_n`

| Anwendungsfall | `top_k` (Suche) | `top_n` (Rerank) |
|------------|-----------------|-----------------|
| Einfache Chat/QA | 10-20 | 3-5 |
| Dokumentenanalyse | 20-50 | 5-10 |
| Komplexe Zusammenfassung | 50-100 | 10-15 |

### Relevanzschwelle

Beginnen Sie damit, die relative Rangfolge und `top_n` zu verwenden, um die Dokumente auszuwählen. Es gibt keinen universellen Schwellenwert wie 0,3, der für alle Modelle und Korpora gilt.

Wenn Ihre Anwendung irrelevante Dokumente ausschließen muss, kalibrieren Sie einen Schwellenwert anhand einer repräsentativen Stichprobe von Anfragen und Dokumenten, deren Relevanz bewertet wurde. Messen Sie die beibehaltenen relevanten Dokumente und die fälschlicherweise eliminierten Dokumente. Überprüfen Sie diesen Schwellenwert bei einer Änderung des Modells oder des Korpus erneut; vergleichen Sie die Scores verschiedener Modelle nicht direkt miteinander.

## Ressourcen

- **Vollständiges Beispielcode** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Modellkatalog** : [Reranking-Modelle](./models#reranking-modelle)
- **API-Referenz** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG erklärt** : [Vollständiger RAG-Leitfaden](./rag_explained)
