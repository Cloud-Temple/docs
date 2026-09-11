---
title: Riclassifica
sidebar_position: 5
---

# Reranking dei Documenti

## Cos'è il Reranking ?

Il **reranking** è una fase cruciale nei pipeline RAG (Retrieval-Augmented Generation). Dopo una ricerca vettoriale iniziale (embedding), un modello di reranking prende i `N` documenti candidati e li **riordina** in base alla pertinenza semantica fine rispetto alla query dell'utente.

### Perché il Reranking migliora i risultati?

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

- La **ricerca vettoriale** (embedding) è rapida ma approssimativa — calcola una similarità del coseno in uno spazio multidimensionale
- Il **reranker** effettua un'analisi incrociata dettagliata di ogni coppia (query, documento) e produce un punteggio di pertinenza preciso
- Risultato: un RAG con reranking ha tipicamente **+15 a +30% di accuratezza** nelle risposte generate

## Modelli Disponibili

Consultate il [catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) per i modelli di reranking, il loro contesto e le relative scadenze. Recuperate l'identificatore exacto esposto da `GET /v1/models`; i nomi possono differire dalle denominazioni brevi utilizzate negli annunci.

Confrontate la pertinenza del ranking sul vostro corpus, le lingue supportate, la lunghezza dei documenti e la latenza. Gli esempi seguenti utilizzano `nvidia/llama-nemotron-rerank-vl-1b-v2`; verificate la sua disponibilità prima dell'esecuzione.

## Tariffazione

**4,00 € per milione di documenti elaborati.** Un'unità di ricerca (`search_unit`) corrisponde a un documento sottoposto a reranking per una richiesta.

Tutti i documenti della tabella `documents` vengono conteggiati. Il parametro `top_n` limita esclusivamente il numero di risultati restituiti: non riduce il numero di documenti elaborati né il costo della richiesta. Lo stesso documento inviato in più richieste viene conteggiato ad ogni elaborazione.

```text
Coût (€) = Nombre de documents traités × 4 / 1 000 000
```

**Esempio:** 1 000 richieste contenenti ciascuna 100 documenti rappresentano 100 000 documenti elaborati, per un totale di **0,40 €**, anche se ogni richiesta restituisce solo i primi 5 risultati (`top_n: 5`).

I contatori di token eventualmente restituiti dal motore non costituiscono l'unità di fatturazione del reranking.

## Endpoints

L'API LLMaaS espone due endpoint compatibili con il SDK Cohere:

| Endpoint | Version | Compatibile |
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
|-----------|------|--------------|-------------|
| `model` | stringa | ✅ | ID del modello di reranking |
| `query` | stringa | ✅ | La query di ricerca |
| `documents` | array di stringhe | ✅ | I documenti da riordinare |
| `top_n` | intero | ❌ | Numero di risultati da restituire (predefinito: tutti) |
| `return_documents` | booleano | ❌ | Includere il testo dei documenti nella risposta (predefinito: true) |

### Formato della Risposta

Estratto illustrativo del formato Jina/vLLM descritto dal contratto della piattaforma. I punteggi e i contatori di seguito sono fittizi. Il proxy trasmette la risposta del motore e aggiunge un blocco `backend`, omesso qui.

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

- `results` : Document ordinati per punteggio decrescente
- `index` : Posizione originale nell'array `documents` inviato
- `relevance_score` : Punteggio grezzo del modello (logit), non normalizzato e non assimilabile a una probabilità. Un punteggio più elevato indica un documento classificato meglio per questa richiesta; non è garantito un intervallo universale da 0 a 1.
- `document` : Testo ed eventuali dati multimodali del documento, quando restituiti dal motore.
- `usage.prompt_tokens` e `usage.total_tokens` : Contatori di token del motore. Non costituiscono l'unità di fatturazione del reranking.

Il numero di documenti fatturati non dipende dalla presenza di un campo `search_units` nella risposta: tutti i documenti inviati vengono conteggiati, secondo la [tarification](#tariffazione).

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

# Lo SDK Cohere punta all'API LLMaaS
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

### Integrazione in un Pipeline RAG Completo

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
    # Esempio fittizio — sostituire con la propria logica di ricerca
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
    # Restituisce i documenti in ordine di rilevanza
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
    
    # 1. Vettorizzazione della query
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

## Buone Pratiche

### Ottimizzazione dei Costi

```python
# ✅ BUONO: Reranker su un sottoinsieme ragionevole (20-50 documenti)
candidates = vector_search(query_vector, top_k=20)
top_docs = rerank_documents(query, candidates, top_n=5)

# ❌ SBAGLIATO: Reranker sull'intero database (1000+ documenti)
# candidates = all_documents  # Troppo lento e costoso
```

### Scelta del `top_n`

| Caso d'uso | `top_k` (search) | `top_n` (rerank) |
|------------|-----------------|-----------------|
| Chat/QA semplice | 10-20 | 3-5 |
| Analisi di documenti | 20-50 | 5-10 |
| Sintesi complessa | 50-100 | 10-15 |

### Soglia di Rilevanza

Iniziate utilizzando il ranking relativo e `top_n` per selezionare i documenti. Non esiste una soglia universale, come 0,3, applicabile a tutti i modelli e corpus.

Se la vostra applicazione deve scartare i documenti poco rilevanti, calibrate una soglia su un set rappresentativo di query e documenti la cui rilevanza è stata valutata. Misurate i documenti rilevanti conservati e quelli scartati erroneamente. Rivalutate questa soglia in caso di cambio di modello o di corpus; non confrontate direttamente i punteggi di modelli diversi.

## Risorse

- **Codice di esempio completo** : [`exemples/simple_rerank/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_rerank)
- **Catalogo modelli** : [Modèles de Reranking](./models#modelli-di-reranking)
- **API Reference** : [POST /v1/rerank](./api#post-v1rerank)
- **RAG Explained** : [Guide complet RAG](./rag_explained)