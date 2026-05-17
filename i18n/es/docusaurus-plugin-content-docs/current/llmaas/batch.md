---
title: API por lotes
sidebar_position: 6
---

# Batch API — Procesamiento Asíncrono

:::info Disponibilidad
La Batch API está en **despliegue progresivo**. Verifique la disponibilidad en su cuenta en la [Console Cloud Temple](https://console.cloud-temple.com) o contacte al soporte comercial.
:::

## ¿Qué es la Batch API?

La **Batch API** permite enviar grandes volúmenes de solicitudes de forma **asíncrona**, procesadas en horas valle. A cambio de una tolerancia en el tiempo de procesamiento (unas horas), obtienes una **reducción del 50%** sobre las tarifas estándar.

### ¿Cuándo usar la API Batch?

| Caso de uso | ¿Adecuado para Batch? |
|-------------|-------------------|
| Clasificación/etiquetado de millones de documentos | ✅ Ideal |
| Generación masiva de resúmenes | ✅ Ideal |
| Extracción de entidades en un corpus extenso | ✅ Ideal |
| Vectorización (embedding) en volumen | ✅ Ideal |
| Evaluación de modelos (benchmarks) | ✅ Ideal |
| Chatbot en tiempo real | ❌ Utilice `/v1/chat/completions` |
| Respuesta interactiva < 2 segundos | ❌ Utilice la API estándar |
| Streaming SSE | ❌ Utilice la API estándar |

## Tarificación

| Uso | Por lotes | Estándar | Ahorro |
|-------|-------|----------|---------|
| **Tokens de entrada** | **0.9 € / millón** | 1.8 € / millón | −50% |
| **Tokens de salida** | **4.0 € / millón** | 8.0 € / millón | −50% |

### Ejemplo de ahorro

Para procesar 1 millón de documentos de 500 tokens con respuestas de 200 tokens :
- **Estándar** : (500 × 1.8 + 200 × 8) / 1 = 2 500 €
- **Por lotes** : (500 × 0.9 + 200 × 4) / 1 = 1 250 €
- **Ahorro : 1 250 € (−50%)**

## Arquitectura del Pipeline Batch

```
1. Preparación              2. Envío            3. Procesamiento
────────────────────────    ─────────────────────    ─────────────────────
Crear un archivo JSONL  →   POST /v1/batches      →  Procesamiento asíncrono
con N solicitudes             (devuelve batch_id)       en horas valle

4. Polling                  5. Recuperación
─────────────────────────   ─────────────────────────
GET /v1/batches/{id}     →  GET /v1/files/{file_id} →  Resultados JSONL
(estado: validando,        (descargar los
en_progreso, completado)      resultados)
```

## Formato del Archivo de Entrada (JSONL)

Cada línea del archivo es una solicitud JSON independiente:

```json
{"custom_id": "req-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gpt-oss:120b", "messages": [{"role": "user", "content": "Résume ce texte : L'IA générative est..."}], "max_tokens": 200}}
{"custom_id": "req-2", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "gpt-oss:120b", "messages": [{"role": "user", "content": "Classifie ce ticket : Mon accès VPN ne fonctionne plus."}], "max_tokens": 50}}
{"custom_id": "req-3", "method": "POST", "url": "/v1/embeddings", "body": {"model": "granite-embedding:278m", "input": "Texte à vectoriser pour la recherche sémantique."}}
```

### Campos obligatorios por fila

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `custom_id` | string | Identificador único de su solicitud (para la recuperación) |
| `method` | string | Siempre `"POST"` |
| `url` | string | Endpoint de destino (ej: `/v1/chat/completions`, `/v1/embeddings`) |
| `body` | object | Cuerpo de la solicitud (mismo formato que una llamada directa) |

## Endpoints de la API

### POST /v1/batches — Enviar un lote

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

### GET /v1/batches/\{batch_id\} — Comprobar el estado

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/batches/batch-def456uvw" \
  -H "Authorization: Bearer VOTRE_TOKEN_API"
```

**Estados posibles:**

| Estado | Descripción |
|--------|-------------|
| `validating` | Validación del archivo de entrada en curso |
| `in_progress` | Procesamiento de solicitudes en curso |
| `finalizing` | Compilación de resultados |
| `completed` | Todos los resultados están disponibles |
| `failed` | Error global (ver `errors`) |
| `cancelled` | Cancelado por el usuario |

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

### GET /v1/files/\{file_id\}/content — Recuperar los resultados

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/files/file-ghi789rst/content" \
  -H "Authorization: Bearer VOTRE_TOKEN_API" \
  -o results.jsonl
```

**Formato de los resultados (JSONL):**

```json
{"id": "batch-def456uvw", "custom_id": "req-1", "response": {"status_code": 200, "body": {"id": "chatcmpl-...", "choices": [{"message": {"role": "assistant", "content": "Résumé : L'IA générative..."}}], "usage": {"prompt_tokens": 45, "completion_tokens": 87}}}}
{"id": "batch-def456uvw", "custom_id": "req-2", "response": {"status_code": 200, "body": {"id": "chatcmpl-...", "choices": [{"message": {"role": "assistant", "content": "Catégorie: Réseau/VPN"}}], "usage": {"prompt_tokens": 22, "completion_tokens": 8}}}}
{"id": "batch-def456uvw", "custom_id": "req-3", "error": {"code": "server_error", "message": "Processing failed"}}
```

## Exemple Python Complet

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
# PASO 1: Preparar las solicitudes en formato JSONL
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
# PASO 2: Cargar el archivo
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
# PASO 3: Enviar el lote
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
# PASO 4: Solicitud de estado hasta la finalización
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
# PASO 5: Recuperar y analizar los resultados
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
# PROGRAMA PRINCIPAL
# ══════════════════════════════════════════════════════

def main():
    # Exemples de tickets de support IT
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
    
    # Pipeline complet
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
    
    # Afficher les résultats
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

## Gestión de Errores Parciales

El lote puede ser **parcialmente exitoso** : algunas solicitudes se ejecutan correctamente y otras fallan.

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

## Limitaciones y Restricciones

| Restricción | Valor |
|-----------|--------|
| **Tamaño máximo del archivo JSONL** | 100 MB |
| **Número máximo de solicitudes por lote** | 50 000 |
| **Tiempo de procesamiento garantizado** | < 24h (típicamente 2-4h) |
| **Retención de los archivos de resultados** | 7 días |
| **Lotes simultáneos por cuenta** | 10 |

:::warning Procesamiento asíncrono
El lote no garantiza un orden de procesamiento. Los resultados pueden aparecer en un orden diferente al de entrada. Utilice el campo `custom_id` para asociar cada resultado con su solicitud original.
:::

## Casos de Uso Avanzados

### Embedding masivo

```python
# Vectorización de 10 000 documentos en lote
def create_embedding_batch(documents: list[str]) -> str:
    with open("embed_batch.jsonl", "w") as f:
        for i, doc in enumerate(documents):
            request = {
                "custom_id": f"doc-{i:05d}",
                "method": "POST",
                "url": "/v1/embeddings",
                "body": {
                    "model": "granite-embedding:278m",
                    "input": doc[:500]  # Límite de contexto del modelo
                }
            }
            f.write(json.dumps(request) + "\n")
return "embed_batch.jsonl"
```

### Cancelación de un lote

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

### Lista de lotes

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

## Recursos

- **Código de ejemplo completo** : [`exemples/simple_batch/`](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main/simple_batch)
- **Catálogo de modelos** : [Modèles compatibles Batch](./models)
- **Referencia de la API** : [Documentation API complète](./api)
- **Precios detallados** : [Tarificación LLMaaS](./api#rate-limiting-et-facturation)