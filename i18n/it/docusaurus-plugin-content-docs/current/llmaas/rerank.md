---
title: Riordinamento
sidebar_position: 5
---

# Reranking dei documenti

## Cos'è il Reranking?

Il **reranking** è una fase cruciale nei pipeline RAG (Retrieval-Augmented Generation). Dopo una ricerca vettoriale iniziale (embedding), un modello di reranking prende i `N` documenti candidati e li **riordina** in base alla pertinenza semantica a grana fine rispetto alla query dell'utente.

### Perché il Reranking migliora i risultati?

```
Richiesta dell'utente
       │
       ▼
  ┌─────────────┐       ┌────────────────────────────────────┐
  │  Embedding  │──────►│ Top-100 documenti (ricerca        │
  │  + Vector   │       │ vettoriale approssimativa/ANN)     │
  │  Search     │       └────────────────────────────────────┘
  └─────────────┘                         │
                                          ▼
                               ┌────────────────────┐
                               │    Reranker         │
                               │  (analisi precisa   │
                               │   richiesta↔documento) │
                               └────────────────────┘
                                          │
                                          ▼
                               Top-5 documenti ordinati
                               per pertinenza reale
```

- La **ricerca vettoriale** (embedding) è veloce ma approssimativa — calcola una similarità coseno in uno spazio multidimensionale
- Il **reranker** esegue un'analisi incrociata fine di ogni coppia (richiesta, documento) e produce un punteggio di pertinenza preciso
- Risultato: un RAG con reranking ha tipicamente **+15-30% di precisione** nelle risposte generate

## Modelli Disponibili

| Modello | Editore | Contesto | LTS | Uso consigliato |
|--------|---------|----------|-----|-----------------|
| `nvidia/llama-nemotron-rerank-vl-1b-v2` | NVIDIA | 4 096 | No | **Consigliato** — massima precisione, DSP 30/06/2027 |
| `qwen3-reranker:4b` | Qwen Team | 4 096 | No | Alta qualità, comprensione contestuale approfondita |
| `qwen3-reranker:0.6b` | Qwen Team | 4 096 | No | Compatto e veloce, ideale per bassa latenza |
| `bge-reranker-large` | BAAI | 512 | No | Multilingue, alte prestazioni |

:::tip Quale modello scegliere?
- **Produzione RAG** : `nvidia/llama-nemotron-rerank-vl-1b-v2` — massima precisione
- **Bassa latenza** : `qwen3-reranker:0.6b` — il più veloce
- **Multilingue** : `bge-reranker-large` — ottimizzato per molte lingue
:::

## Tariffazione

**4.00 € / milione di token rerank** — circa **50% in meno** rispetto ai token di generazione standard.

Il numero di token rerank corrisponde alla somma dei token della richiesta e di ciascun documento elaborato.

## Endpoint

L'API LLMaaS espone due endpoint compatibili con il SDK Cohere:

| Endpoint | Versione | Compatibile |
|----------|---------|------------|
| `POST /v1/rerank` | Cohere v1 | SDK Cohere v4, chiamate dirette |
| `POST /v2/rerank` | Cohere v2 | SDK Cohere v5+ |

## Formato della Richiesta

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

### Parametri

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|-------------|-------------|
| `model` | stringa | ✅ | ID del modello di reranking |
| `query` | stringa | ✅ | La query di ricerca |
| `documents` | array di stringhe | ✅ | I documenti da riordinare |
| `top_n` | intero | ❌ | Numero di risultati da restituire (predefinito: tutti) |
| `return_documents` | booleano | ❌ | Includere il testo dei documenti nella risposta (predefinito: true) |

### Formato della Risposta

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

- `results` : Documenti ordinati per punteggio decrescente
- `index` : Posizione originale nell'array `documents` inviato
- `relevance_score` : Punteggio di rilevanza tra 0 e 1 (più è alto, più è pertinente)
- `search_units` : Numero di documenti riordinati (per la fatturazione)

## Esempi di Implementazione

### Python — Chiamata diretta (httpx)

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

# Utilizzo
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

# Il SDK Cohere punta all'API LLMaaS
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

### Integrazione in una Pipeline RAG Completa

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
    # Esempio fittizio — sostituisci con la tua logica di ricerca
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
    # Restituisce i documenti in ordine di pertinenza
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
    
    # 1. Vettorizzazione della richiesta
    print("🔢 Vectorisation...")
    query_vector = embed_query(query)
    
    # 2. Ricerca vettoriale (top-20 candidati)
    print("🔍 Recherche vectorielle (top-20)...")
    candidates = vector_search(query_vector, top_k=20)
    
    # 3. Reranking (selezione dei top-5)
    print("📊 Reranking (→ top-5)...")
    top_docs = rerank_documents(query, candidates, top_n=5)
    
    # 4. Generazione della risposta
    print("✍️ Génération de la réponse...")
    answer = generate_answer(query, top_docs)
    
    return answer

# Esempio di utilizzo
if __name__ == "__main__":
    question = "Quelles sont les garanties de conformité RGPD de Cloud Temple ?"
    reponse = rag_pipeline(question)
    print(f"\n💬 Réponse : {reponse}")
```

## Migliori Pratiche

### Ottimizzazione dei Costi

```python
# ✅ BUONO: Reranker su un sottoinsieme ragionevole (20-50 documenti)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ ERRATO: Reranker sull'intera base di dati (1000+ documenti)
# candidates = all_documents  # Troppo lento e costoso
```

### Scelta del `top_n`

| Caso d'uso | `top_k` (search) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Chat/QA semplice | 10-20 | 3-5 |
| Analisi del documento | 20-50 | 5-10 |
| Sintesi complessa | 50-100 | 10-15 |

### Soglia di Rilevanza

```python
# Filtra i documenti poco rilevanti (punteggio < 0.3)
RELEVANCE_THRESHOLD = 0.3

def rerank_with_threshold(query: str, documents: list[str]) -> list[str]:
    results = rerank_documents(query, documents, top_n=len(documents))
    return [
        documents[r["index"]] 
        for r in results 
        if r["relevance_score"] >= RELEVANCE_THRESHOLD
    ]
```

## Risorse

- **Codice di esempio completo** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Catalogo modelli** : [Modèles de Reranking](./models#modèles-de-reranking)
- **Riferimento API** : [POST /v1/rerank](./api#post-v1rerank)
- **Spiegazione RAG** : [Guide complet RAG](./rag_explained)