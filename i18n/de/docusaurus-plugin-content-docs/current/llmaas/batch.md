---
title: Batch API
sidebar_position: 6
---

# Batch API — Asynchrone Verarbeitung

Die Batch-API verarbeitet mehrere unabhängige Konversationen mit demselben Modell asynchron. Sie eignet sich für verzögerte Aufgaben wie Klassifizierung, Zusammenfassung oder Textextraktion.

Sie senden die Konversationen direkt als JSON an `POST /v1/chat/completions/batch` und rufen anschließend deren Status und Ergebnisse mit `GET /v1/chat/completions/batch/{id}` ab. Dieser API-Vertrag ist spezifisch für LLMaaS: Er basiert nicht auf den Datei- und Batch-Endpunkten des OpenAI-SDKs.

## Funktionsweise

1. Bereiten Sie ein Array von Conversations mit einem gemeinsamen Modell und gemeinsamen Parametern vor.
2. Senden Sie den Batch ein: Die API gibt **HTTP 202**, eine `id` und den Status `queued` zurück.
3. Speichern Sie diese ID und fragen Sie den Status alle 30 bis 60 Sekunden ab.
4. Rufen Sie das `results`-Array ab, sobald die Verarbeitung abgeschlossen ist, und speichern Sie die Ergebnisse in Ihrer Anwendung.

Verwenden Sie denselben **API-Schlüssel**, um den Batch einzureichen und abzufragen. Ein anderer Schlüssel, auch wenn er demselben Konto zugeordnet ist, ermöglicht es nicht, die Ergebnisse abzurufen.

## Batch einreichen

### POST /v1/chat/completions/batch

Das Feld `messages` ist ein **Array von Arrays**: Jedes Unterarray enthält die Nachrichten einer unabhängigen Konversation. Die anderen Parameter gelten für alle Konversationen gemeinsam.

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch" \
  -H "Authorization: Bearer $LLMAAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      [
        {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
        {"role": "user", "content": "Mon accès VPN ne fonctionne plus."}
      ],
      [
        {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
        {"role": "user", "content": "Mon application se ferme au démarrage."}
      ]
    ],
    "max_tokens": 200,
    "temperature": 0.0
  }'
```

Überprüfen Sie die Modell-ID mit `GET /v1/models` und deren [Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) vor der Ausführung.

| Feld | Beschreibung |
|-------|-------------|
| `model` | Modell-ID, die für alle Konversationen verwendet wird. |
| `messages` | Nicht leeres Array von Konversationen, wobei jede durch ein Array von Nachrichten dargestellt wird. |
| `max_tokens`, `temperature`, `top_p`, etc. | Parameter, die auf jede Konversation angewendet werden, abhängig von den Fähigkeiten des Modells. |
| `tools`, `tool_choice`, `response_format` | Parameter, die an das Modell übergeben werden, wenn sie verwendet werden; die Ausführung der Tools bleibt in der Verantwortung Ihrer Anwendung. |

Die Verarbeitung erzwingt `stream: false`. Die Konversationen und ihre Ergebnisse werden über ihre Position in den Arrays verknüpft; stellen Sie sicher, dass diese Zuordnung in Ihrer Anwendung beibehalten wird.

Beispielhafter Auszug aus der Antwort zur Erstellung:

```json
{
  "id": "batch-instance-exemple-identifiant",
  "object": "batch",
  "status": "queued",
  "model": "gpt-oss:120b",
  "model_requested": "gpt-oss:120b",
  "request_counts": {
    "total": 2,
    "completed": 0,
    "failed": 0
  }
}
```

`model_requested` gibt den angeforderten Namen an; `model` gibt das aufgelöste Modell an, das im Falle eines Aliases abweichen kann. Verwenden Sie die tatsächlich vom Dienst zurückgegebene `id` erneut, ohne sie neu zu konstruieren.

## Verarbeitung verfolgen und Ergebnisse abrufen

### GET /v1/chat/completions/batch/\{id\}

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch/$BATCH_ID" \
  -H "Authorization: Bearer $LLMAAS_API_KEY"
```

| Status | Bedeutung |
|--------|---------------|
| `queued` | Wartet auf Verarbeitung oder Wiederaufnahme im nächsten Verarbeitungsfenster. |
| `in_progress` | Verarbeitung läuft. |
| `completed` | Verarbeitung abgeschlossen; prüfen Sie jedes Ergebnis auf individuelle Fehler. |
| `failed` | Globaler Fehler; prüfen Sie `error` und die ggf. verfügbaren Ergebnisse. |
| `expired` | Ablaufstatus; nach der Bereinigung gibt die GET-Anfrage HTTP 404 zurück. |

Die Tabelle `results` wird für die Status `completed` und `failed` angehängt. Jedes Element ist entweder eine Chat-Antwort oder ein `error`-Objekt. Es gibt keine Ausgabedatei zum Download.

Beispielhafter Auszug mit einem Erfolg und einem Fehler:

```json
{
  "id": "batch-instance-exemple-identifiant",
  "object": "batch",
  "status": "completed",
  "request_counts": {
    "total": 2,
    "completed": 1,
    "failed": 1
  },
  "results": [
    {
      "choices": [
        {"message": {"role": "assistant", "content": "Réseau"}, "finish_reason": "stop"}
      ],
      "usage": {"prompt_tokens": 30, "completion_tokens": 4, "total_tokens": 34}
    },
    {
      "error": {
        "type": "BatchSubRequestError",
        "message": "Échec du traitement de la conversation.",
        "index": 1
      }
    }
  ]
}
```

**`completed` bedeutet nicht, dass alle Gespräche erfolgreich waren.** Sobald der Batch verarbeitet wurde, entspricht `results[i]` dem Gespräch `messages[i]`. Um die fehlgeschlagenen Anfragen erneut zu verarbeiten, erstellen Sie einen neuen Batch, der nur die betroffenen Gespräche enthält.

## Vollständiges Python-Beispiel

Installieren Sie `httpx`, setzen Sie `LLMAAS_API_KEY` in Ihrer Umgebung, speichern Sie das Skript als `batch_demo.py` und führen Sie `python batch_demo.py` aus.

```bash
pip install httpx
```

```python
import json
import os
import time

import httpx

BASE_URL = "https://api.ai.cloud-temple.com/v1"
MODEL = os.getenv("LLMAAS_MODEL", "gpt-oss:120b")


def wait_for_batch(client, batch_id):
    # Wartezeitlimit dieses Skripts, keine Service-Zeitgarantie.
    deadline = time.monotonic() + 24 * 60 * 60
    while time.monotonic() < deadline:
        response = client.get(f"/chat/completions/batch/{batch_id}")
        response.raise_for_status()
        batch = response.json()
        print(f"Statut : {batch['status']}", flush=True)
        if batch["status"] in {"completed", "failed", "expired"}:
            return batch
        time.sleep(30)
    raise TimeoutError(
        f"Attente locale terminée. Reprenez le suivi par GET avec l'id {batch_id}. "
        "Le traitement du batch n'est pas annulé."
    )


def main():
    api_key = os.environ["LLMAAS_API_KEY"]
    tickets = [
        "Mon accès VPN ne fonctionne plus.",
        "Mon application se ferme au démarrage.",
    ]
    conversations = [
        [
            {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
            {"role": "user", "content": ticket},
        ]
        for ticket in tickets
    ]
    with httpx.Client(
        base_url=BASE_URL,
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=60.0,
    ) as client:
        response = client.post(
            "/chat/completions/batch",
            json={
                "model": MODEL,
                "messages": conversations,
                "max_tokens": 200,
                "temperature": 0.0,
            },
        )
        response.raise_for_status()
        batch_id = response.json()["id"]
        print(f"Batch accepté. Conservez cet identifiant : {batch_id}", flush=True)
        batch = wait_for_batch(client, batch_id)

    # Speichern Sie auch Fehler und mögliche Teilergebnisse.
    with open(f"{batch_id}.json", "w", encoding="utf-8") as output:
        json.dump(batch, output, ensure_ascii=False, indent=2)

    print(f"Statut final : {batch['status']}")
    if batch.get("error"):
        print(f"Erreur globale : {batch['error']}")
    for index, result in enumerate(batch.get("results", [])):
        if result.get("error"):
            print(f"Ticket {index + 1} en erreur : {result['error']}")
        else:
            print(f"Ticket {index + 1} : {result['choices'][0]['message']}")


if __name__ == "__main__":
    main()
```

Falls das Skript nach dem Einreichen stoppt, setzen Sie die Überwachung mit der GET-Anfrage und der angezeigten ID fort. Reichen Sie dasselbe Batch nicht automatisch nach einem Verbindungsabbruch erneut ein: Es könnte bereits akzeptiert worden sein, was zu Duplikaten führen würde.

## Limits und Aufbewahrung

Die unten aufgeführten Werte sind die Standardparameter des Dienstes; sie können über die Konfiguration angepasst werden.

| Parameter | Standardwert |
|-----------|-------------------|
| Konversationen pro Batch | maximal 1.000 |
| Warteschlangenkapazität | 100 Batches pro Verarbeitungsinstanz; dies ist kein Kontingent pro Konto |
| Verarbeitungsfenster | 22–7 Uhr unter der Woche, ganztägig am Wochenende, gemäß der Zeitzone des Dienstes |
| Aufbewahrung nach der Verarbeitung | 24 Stunden nach Abschluss, anschließend automatische Löschung |

Ein Batch kann außerhalb des Verarbeitungsfensters in der Warteschlange verbleiben und pausiert sowie fortgesetzt werden, wenn das Fenster endet. **Die 24-stündige Aufbewahrung stellt keine Garantie für eine Verarbeitung innerhalb von 24 Stunden dar.**

Der Status des Batches (Warteschlange, Fortschritt und über GET abfragbare Ergebnisse) wird im Arbeitsspeicher der Verarbeitungsinstanz gespeichert, ohne Persistenz auf Festplatte. Ein Neustart dieser Instanz führt zum Verlust dieses Status. Rufen Sie Ihre Ergebnisse ab und sichern Sie diese, bevor sie ablaufen. Bewahren Sie den Schlüssel, mit dem der Batch erstellt wurde, bis zur Abrufung der Ergebnisse auf.

Dieser API-Vertrag befasst sich mit Chat-Konversationen. Er unterstützt keinen JSONL-Upload, keine Batch-Verarbeitung von Embeddings, keine Auflistung der Batches oder keine Stornierung über die API.

## Häufige Fehler

| HTTP-Code | Ursache oder Maßnahme |
|-----------|-----------------|
| `400` | Fehlerhafte Anfrage, fehlende oder falsch strukturierte Konversationen, maximale Größe überschritten. Korrigieren Sie den gesendeten Request-Body. |
| `401` | Ungültige Authentifizierung. Überprüfen Sie Ihren API-Schlüssel. |
| `403` | Der zum Abrufen des Batches verwendete Schlüssel unterscheidet sich von dem, der ihn erstellt hat. |
| `404` | Unbekannte Kennung, abgelaufener Batch oder nach dem Neustart verlorener Status. |
| `501` | Batch-Verarbeitung auf der betreffenden Instanz deaktiviert. Kontaktieren Sie den Support. |
| `503` | Warteschlange gesättigt oder Verarbeitungsinstanz nicht verfügbar. Versuchen Sie es später erneut, wie in der zurückgegebenen Meldung angegeben. |

Konversationsspezifische Fehler finden Sie in `results[].error`, auch wenn die GET-Anfrage HTTP 200 zurückgegeben hat.

## Preisgestaltung und Ressourcen

Die Generierungsparameter gelten für jede Konversation. Für Batch-Tarife finden Sie die [grille de tarification de l'API](./api.md#rate-limiting-und-abrechnung).

- [API de génération de chat](./api.md#post-v1chatcompletions)
- [Choisir un modèle](./models.md)
- [Cycle de vie des modèles](https://llmaas.status.cloud-temple.app/lifecycle)