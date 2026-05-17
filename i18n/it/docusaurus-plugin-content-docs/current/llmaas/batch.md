---
title: API Batch
sidebar_position: 6
---

# Batch API — Elaborazione Asincrona

:::info Disponibilità
La Batch API è in **distribuzione graduale**. Verifica la disponibilità sul tuo account nella [Console Cloud Temple](https://console.cloud-temple.com) o contatta il supporto commerciale.
:::

## Cos'è la Batch API?

La **Batch API** consente di inviare grandi volumi di richieste in modo **asincrono**, elaborate durante le ore di minor carico. In cambio di una tolleranza sui tempi di elaborazione (qualche ora), è possibile beneficiare di una **riduzione del 50%** sulle tariffe standard.

### Quando utilizzare l'API Batch?

| Caso d'uso | Adatto al Batch? |
|------------|------------------|
| Classificazione/etichettatura di milioni di documenti | ✅ Ideale |
| Generazione di riassunti in massa | ✅ Ideale |
| Estrazione di entità su un ampio corpus | ✅ Ideale |
| Vettorizzazione (embedding) in volume | ✅ Ideale |
| Valutazione di modelli (benchmark) | ✅ Ideale |
| Chatbot in tempo reale | ❌ Utilizzare `/v1/chat/completions` |
| Risposta interattiva < 2 secondi | ❌ Utilizzare l'API standard |
| Streaming SSE | ❌ Utilizzare l'API standard |

## Tariffazione

| Utilizzo | Batch | Standard | Risparmio |
|-------|-------|----------|---------|
| **Token di input** | **0,9 € / milione** | 1,8 € / milione | −50% |
| **Token di output** | **4,0 € / milione** | 8,0 € / milione | −50% |

### Esempio di risparmio

Per elaborare 1 milione di documenti da 500 token con risposte da 200 token :
- **Standard** : (500 × 1.8 + 200 × 8) / 1 = 2 500 €
- **Batch** : (500 × 0.9 + 200 × 4) / 1 = 1 250 €
- **Risparmio : 1 250 € (−50%)**

## Architettura della Pipeline Batch

```
1. Préparation              2. Soumission            3. Traitement
─────────────────────────    ─────────────────────    ─────────────────────
Créer un fichier JSONL  →   POST /v1/batches      →  Traitement asynchrone
avec N requêtes             (retourne batch_id)       en heures creuses

4. Polling                  5. Récupération
─────────────────────────   ─────────────────────────
GET /v1/batches/{id}     →  GET /v1/files/{file_id} →  Résultats JSONL
(statut : validating,        (télécharger les
 in_progress, completed)      résultats)
```

## Formato del File di Input (JSONL)

Ogni riga del file è una richiesta JSON indipendente :

```json
{"custom_id": "req-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gpt-oss:120b", "messages": [{"role": "user", "content": "Résume ce texte : L'IA générative est..."}], "max_tokens": 200}}
{"custom_id": "req-2", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gpt-oss:120b", "messages": [{"role": "user", "content": "Classifie ce ticket : Mon accès VPN ne fonctionne plus."}], "max_tokens": 50}}
{"custom_id": "req-3", "method": "POST", "url": "/v1/embeddings", "body": {"model": "granite-embedding:278m", "input": "Texte à vectoriser pour la recherche sémantique."}}
```

### Campi obbligatori per riga

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `custom_id` | string | Identificativo univoco della richiesta (per il recupero) |
| `method` | string | Sempre `"POST"` |
| `url` | string | Endpoint di destinazione (es: `/v1/chat/completions`, `/v1/embeddings`) |
| `body` | object | Corpo della richiesta (stesso formato di una chiamata diretta) |

## Endpoint API

### POST /v1/batches — Invia un batch

```bash
# 1. Upload du fichier JSONL
curl -X POST "https://api.ai.cloud-temple.com/v1/files" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -F "purpose=batch" \
  -F "file=@requests.jsonl"
```

```json
{
  "id": "file-abc123xyz",
  "object": "file",
  "purpose": "batch",
  "filename": "requests.jsonl",
  "bytes": 4096,
  "created_at": 1749110753
}
```

```bash
# 2. Soumission du batch
curl -X POST "https://api.ai.cloud-temple.com/v1/batches" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -d '{
    "input_file_id": "file-abc123xyz",
    "endpoint": "/v1/chat/completions",
    "completion_window": "24h"
  }'
```

```json
{
  "id": "batch-def456uvw",
  "object": "batch",
  "endpoint": "/v1/chat/completions",
  "input_file_id": "file-abc123xyz",
  "status": "validating",
  "created_at": 1749110800,
  "request_counts": {
    "total": 100,
    "completed": 0,
    "failed": 0
  }
}
```

### GET /v1/batches/\{batch_id\} — Verificare lo stato

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/batches/batch-def456uvw" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

**Stati possibili:**

| Stato | Descrizione |
|--------|-------------|
| `validating` | Validazione del file di input in corso |
| `in_progress` | Elaborazione delle richieste in corso |
| `finalizing` | Compilazione dei risultati |
| `completed` | Tutti i risultati sono disponibili |
| `failed` | Fallimento complessivo (vedere `errors`) |
| `cancelled` | Annullato dall'utente |

```json
{
  "id": "batch-def456uvw",
  "status": "completed",
  "output_file_id": "file-ghi789rst",
  "request_counts": {
    "total": 100,
    "completed": 99,
    "failed": 1
  },
  "completed_at": 1749118000
}
```

### GET /v1/files/\{file_id\}/content — Recupera i risultati

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/files/file-ghi789rst/content" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -o results.jsonl
```

**Formato dei risultati (JSONL) :**

```json
{"id": "batch-def456uvw", "custom_id": "req-1", "response": {"status_code": 200, "body": {"id": "chatcmpl-...", "choices": [{"message": {"role": "assistant", "content": "Résumé : L'IA générative..."}}], "usage": {"prompt_tokens": 45, "completion_tokens": 87}}}}
{"id": "batch-def456uvw", "custom_id": "req-2", "response": {"status_code": 200, "body": {"id": "chatcmpl-...", "choices": [{"message": {"role": "assistant", "content": "Catégorie: Réseau/VPN"}}], "usage": {"prompt_tokens": 22, "completion_tokens": 8}}}}
{"id": "batch-def456uvw", "custom_id": "req-3", "error": {"code": "server_error", "message": "Processing failed"}}
```

## Esempio Python Completo

```python
"""
Exemple complet d'utilisation de la Batch API LLMaaS.
Cas d'usage : classification de tickets de support en masse.
"""
import httpx
import json
import time
import os
from pathlib import Path

API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = "https://api.ai.cloud-temple.com/v1"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}


# ══════════════════════════════════════════════════════
# PASSO 1: Preparare le richieste in formato JSONL
# ══════════════════════════════════════════════════════

def create_batch_file(tickets: list[str], output_path: str = "batch_input.jsonl") -> str:
    """
    Crée un fichier JSONL avec une requête de classification par ticket.
    
    Args:
        tickets: Liste des tickets à classifier
        output_path: Chemin du fichier JSONL de sortie
    
    Returns:
        Chemin du fichier créé
    """
    with open(output_path, "w", encoding="utf-8") as f:
        for i, ticket in enumerate(tickets):
            request = {
                "custom_id": f"ticket-{i:04d}",
                "method": "POST",
                "url": "/v1/chat/completions",
                "body": {
                    "model": "gpt-oss:120b",
                    "messages": [
                        {
                            "role": "system",
                            "content": (
                                "Tu es un expert en support IT. "
                                "Classifie le ticket dans une seule catégorie parmi : "
                                "Réseau, Sécurité, Logiciel, Matériel, Accès, Autre. "
                                "Réponds uniquement avec le nom de la catégorie."
                            )
                        },
                        {
                            "role": "user",
                            "content": ticket
                        }
                    ],
                    "max_tokens": 10,
                    "temperature": 0.0
                }
            }
            f.write(json.dumps(request, ensure_ascii=False) + "\n")
    
    print(f"✅ Fichier JSONL créé : {output_path} ({len(tickets)} requêtes)")
    return output_path


# ══════════════════════════════════════════════════════
# PASSO 2: Caricamento del file
# ══════════════════════════════════════════════════════

def upload_batch_file(file_path: str) -> str:
    """
    Upload le fichier JSONL vers l'API.
    
    Returns:
        file_id retourné par l'API
    """
    print(f"📤 Upload de {file_path}...")
    
    with open(file_path, "rb") as f:
        with httpx.Client(timeout=60.0) as client:
            response = client.post(
                f"{BASE_URL}/files",
                headers={"Authorization": f"Bearer {API_KEY}"},
                files={"file": (Path(file_path).name, f, "application/jsonl")},
                data={"purpose": "batch"}
            )
            response.raise_for_status()
    
    file_id = response.json()["id"]
    print(f"✅ Fichier uploadé : {file_id}")
    return file_id


# ══════════════════════════════════════════════════════
# PASSO 3: Invio del batch
# ══════════════════════════════════════════════════════

def submit_batch(file_id: str) -> str:
    """
    Soumet un batch pour traitement asynchrone.
    
    Returns:
        batch_id retourné par l'API
    """
    print(f"🚀 Soumission du batch (fichier: {file_id})...")
    
    with httpx.Client(timeout=30.0) as client:
        response = client.post(
            f"{BASE_URL}/batches",
            headers=HEADERS,
            json={
                "input_file_id": file_id,
                "endpoint": "/v1/chat/completions",
                "completion_window": "24h"
            }
        )
        response.raise_for_status()
    
    data = response.json()
    batch_id = data["id"]
    print(f"✅ Batch soumis : {batch_id} (statut: {data['status']})")
    return batch_id


# ══════════════════════════════════════════════════════
# PASSO 4: Polling fino al completamento
# ══════════════════════════════════════════════════════

def wait_for_completion(batch_id: str, poll_interval: int = 30) -> dict:
    """
    Interroge l'API jusqu'à la complétion du batch.
    
    Args:
        batch_id: L'identifiant du batch
        poll_interval: Intervalle de polling en secondes
    
    Returns:
        Le statut final du batch
    """
    print(f"⏳ En attente de la complétion du batch {batch_id}...")
    
    terminal_statuses = {"completed", "failed", "cancelled", "expired"}
    
    while True:
        with httpx.Client(timeout=30.0) as client:
            response = client.get(
                f"{BASE_URL}/batches/{batch_id}",
                headers=HEADERS
            )
            response.raise_for_status()
        
        batch = response.json()
        status = batch["status"]
        counts = batch.get("request_counts", {})
        
        print(
            f"  Statut: {status} | "
            f"Complétées: {counts.get('completed', 0)}/{counts.get('total', 0)} | "
            f"Échouées: {counts.get('failed', 0)}"
        )
        
        if status in terminal_statuses:
            return batch
        
        time.sleep(poll_interval)


# ══════════════════════════════════════════════════════
# PASSO 5: Recupero e parsing dei risultati
# ══════════════════════════════════════════════════════

def download_results(output_file_id: str, save_path: str = "batch_output.jsonl") -> list[dict]:
    """
    Télécharge et parse les résultats du batch.
    
    Returns:
        Liste des résultats par custom_id
    """
    print(f"📥 Téléchargement des résultats ({output_file_id})...")
    
    with httpx.Client(timeout=60.0) as client:
        response = client.get(
            f"{BASE_URL}/files/{output_file_id}/content",
            headers={"Authorization": f"Bearer {API_KEY}"}
        )
        response.raise_for_status()
    
    # Sauvegarder le fichier brut
    with open(save_path, "wb") as f:
        f.write(response.content)
    
    # Parser les résultats
    results = []
    for line in response.text.strip().split("\n"):
        if line:
            results.append(json.loads(line))
    
    print(f"✅ {len(results)} résultats récupérés → {save_path}")
    return results


# ══════════════════════════════════════════════════════
# PROGRAMMA PRINCIPALE
# ══════════════════════════════════════════════════════

def main():
    # Esempi di ticket di supporto IT
    tickets = [
        "Mon accès VPN ne fonctionne plus depuis ce matin.",
        "L'imprimante du 3ème étage n'imprime plus en couleur.",
        "Je ne peux pas me connecter à mon compte Office 365.",
        "Mon ordinateur est très lent depuis la mise à jour d'hier.",
        "Le site web de facturation interne affiche une erreur 500.",
        "Besoin d'accès au dossier partagé RH sur le serveur.",
        "Mon badge ne fonctionne plus à l'entrée du datacenter.",
        "Outlook ne reçoit plus d'emails depuis 2 heures.",
    ]
    
    print(f"🎯 Traitement de {len(tickets)} tickets en mode Batch\n")
    
    # Pipeline completo
    jsonl_file = create_batch_file(tickets)
    file_id = upload_batch_file(jsonl_file)
    batch_id = submit_batch(file_id)
    
    final_status = wait_for_completion(batch_id, poll_interval=30)
    
    if final_status["status"] != "completed":
        print(f"❌ Batch terminé avec statut : {final_status['status']}")
        return
    
    output_file_id = final_status.get("output_file_id")
    if not output_file_id:
        print("❌ Aucun fichier de sortie disponible.")
        return
    
    results = download_results(output_file_id)
    
    # Visualizzare i risultati
    print("\n" + "═" * 60)
    print("📊 RÉSULTATS DE CLASSIFICATION")
    print("═" * 60)
    
    for result in results:
        custom_id = result["custom_id"]
        idx = int(custom_id.split("-")[1])
        
        if "error" in result:
            category = f"ERREUR: {result['error']['message']}"
        else:
            category = result["response"]["body"]["choices"][0]["message"]["content"].strip()
        
        ticket_text = tickets[idx] if idx < len(tickets) else "?"
        print(f"[{custom_id}] {category:12s} | {ticket_text[:60]}...")


if __name__ == "__main__":
    main()
```

## Gestione degli Errori Parziali

Il batch può essere **parzialmente riuscito** : alcune richieste hanno successo e altre falliscono.

```python
def process_results(results: list[dict]) -> tuple[list, list]:
    """Sépare les succès des échecs dans les résultats."""
    successes = []
    failures = []
    
    for result in results:
        if "error" in result:
            failures.append({
                "custom_id": result["custom_id"],
                "error": result["error"]
            })
        else:
            response_body = result["response"]["body"]
            successes.append({
                "custom_id": result["custom_id"],
                "content": response_body["choices"][0]["message"]["content"],
                "usage": response_body.get("usage", {})
            })
    
    print(f"✅ Succès : {len(successes)} | ❌ Échecs : {len(failures)}")
    return successes, failures
```

## Limitazioni e Vincoli

| Vincolo | Valore |
|-----------|--------|
| **Dimensione massima del file JSONL** | 100 MB |
| **Numero massimo di richieste per batch** | 50 000 |
| **Tempo di elaborazione garantito** | < 24h (tipicamente 2-4h) |
| **Conservazione dei file di risultato** | 7 giorni |
| **Batch simultanei per account** | 10 |

:::warning Elaborazione asincrona
Il batch non garantisce un ordine di elaborazione. I risultati potrebbero apparire in un ordine diverso rispetto all'ordine di input. Utilizzare il campo `custom_id` per associare ogni risultato alla relativa richiesta originale.
:::

## Casi d'uso avanzati

### Embedding in batch

```python
# Vettorizzazione di 10 000 documenti in batch
def create_embedding_batch(documents: list[str]) -> str:
    with open("embed_batch.jsonl", "w") as f:
        for i, doc in enumerate(documents):
            request = {
                "custom_id": f"doc-{i:05d}",
                "method": "POST",
                "url": "/v1/embeddings",
                "body": {
                    "model": "granite-embedding:278m",
                    "input": doc[:500]  # Limite di contesto del modello
                }
            }
            f.write(json.dumps(request) + "\n")
return "embed_batch.jsonl"
```

### Annullamento di un batch

```python
def cancel_batch(batch_id: str) -> dict:
    with httpx.Client(timeout=30.0) as client:
        response = client.post(
            f"{BASE_URL}/batches/{batch_id}/cancel",
            headers=HEADERS
        )
        response.raise_for_status()
    return response.json()
```

### Elenco dei batch

```python
def list_batches(limit: int = 20) -> list[dict]:
    with httpx.Client(timeout=30.0) as client:
        response = client.get(
            f"{BASE_URL}/batches",
            headers=HEADERS,
            params={"limit": limit}
        )
        response.raise_for_status()
    return response.json()["data"]
```

## Risorse

- **Codice di esempio completo** : [`exemples/simple_batch/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_batch)
- **Catalogo modelli** : [Modelli compatibili Batch](./models)
- **Riferimento API** : [Documentazione API completa](./api)
- **Pricing dettagliato** : [Tariffazione LLMaaS](./api#rate-limiting-et-facturation)