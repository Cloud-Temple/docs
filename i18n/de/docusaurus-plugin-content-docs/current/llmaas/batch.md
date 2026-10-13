---
title: Batch API
sidebar_position: 6
---

# Batch API — Asynchrone Verarbeitung

Die Batch API verarbeitet mehrere unabhängige Konversationen mit demselben Modell asynchron. Sie eignet sich für nachgelagerte Aufgaben wie Klassifizierung, Zusammenfassung oder Textextraktion.

Sie senden die Konversationen direkt als JSON an `POST /v1/chat/completions/batch` und rufen ihren Status und ihre Ergebnisse mit `GET /v1/chat/completions/batch/{id}` ab. Dieser Vertrag ist spezifisch für LLMaaS: Er basiert nicht auf den Datei- und Batch-Endpunkten des OpenAI SDK.

## Funktionsweise

1. Bereiten Sie ein Array von Konversationen mit einem gemeinsamen Modell und gemeinsamen Parametern vor.
2. Übermitteln Sie den Batch: Die API gibt **HTTP 202**, eine `id` und den Status `queued` zurück.
3. Bewahren Sie diese ID auf und fragen Sie den Status alle 30 bis 60 Sekunden ab.
4. Rufen Sie das `results`-Array ab, wenn die Verarbeitung abgeschlossen ist, und speichern Sie die Ergebnisse in Ihrer Anwendung.

Verwenden Sie denselben **API-Schlüssel** zum Übermitteln und Abfragen des Batches. Ein anderer Schlüssel, selbst wenn er demselben Konto zugeordnet ist, ermöglicht keinen Zugriff auf die Ergebnisse.

## Einen Batch übermitteln

### POST /v1/chat/completions/batch

Das Feld `messages` ist ein **Array von Arrays**: Jedes Unteraarray enthält die Nachrichten einer unabhängigen Konversation. Die anderen Parameter gelten für alle Konversationen.

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

Überprüfen Sie die Modell-ID mit `GET /v1/models` und seinen [Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) vor der Ausführung.

| Feld | Beschreibung |
|-------|-------------|
| `model` | ID des Modells, das für alle Konversationen verwendet wird. |
| `messages` | Nicht-leeres Array von Konversationen, wobei jede durch ein Array von Nachrichten dargestellt wird. |
| `max_tokens`, `temperature`, `top_p`, etc. | Parameter, die auf jede Konversation angewendet werden, je nach Modellfähigkeiten. |
| `tools`, `tool_choice`, `response_format` | Parameter, die an das Modell übergeben werden, wenn sie verwendet werden; die Ausführung von Tools bleibt Aufgabe Ihrer Anwendung. |

Die Verarbeitung erzwingt `stream: false`. Konversationen und ihre Ergebnisse werden durch ihre Position in den Arrays verknüpft; bewahren Sie diese Zuordnung in Ihrer Anwendung auf.

Beispielhafter Auszug aus der Erstellungsantwort:

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

`model_requested` gibt den angeforderten Namen an; `model` gibt das aufgelöste Modell an, das im Falle eines Aliases abweichen kann. Verwenden Sie die tatsächlich vom Dienst zurückgegebene `id`, ohne sie neu zu konstruieren.

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
| `failed` | Globaler Fehler; prüfen Sie `error` und ggf. verfügbare Ergebnisse. |
| `expired` | Ablaufstatus; nach der Bereinigung gibt GET HTTP 404 zurück. |

Das Array `results` ist für die Status `completed` und `failed` angehängt. Jedes Element ist entweder eine Chat-Antwort oder ein `error`-Objekt. Es gibt keine Ausgabedatei zum Herunterladen.

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

**`completed` bedeutet nicht, dass alle Konversationen erfolgreich waren.** Sobald der Batch verarbeitet wurde, entspricht `results[i]` der Konversation `messages[i]`. Um Fehler zu wiederholen, erstellen Sie einen neuen Batch, der nur die betreffenden Konversationen enthält.

## Vollständiges Python-Beispiel

Installieren Sie `httpx`, legen Sie `LLMAAS_API_KEY` in Ihrer Umgebung fest, speichern Sie das Skript als `batch_demo.py` und führen Sie `python batch_demo.py` aus.

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
    # Limite d'attente de ce script, pas un engagement de délai du service.
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

    # Sauvegarder aussi les erreurs et les éventuels résultats partiels.
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

Wenn das Skript nach der Übermittlung stoppt, setzen Sie die Verfolgung mit GET und der angezeigten ID fort. Übermitteln Sie denselben Batch nach einem Verbindungsverlust nicht automatisch erneut: Er könnte akzeptiert worden sein, was zu Duplikaten führen würde.

## Grenzen und Aufbewahrung

Die untenstehenden Werte sind die Standardparameter des Dienstes; sie können durch Konfiguration angepasst werden.

| Parameter | Standardwert |
|-----------|-------------------|
| Konversationen pro Batch | Maximal 1 000 |
| Warteschlangenkapazität | 100 Batches pro Verarbeitungsinstanz; dies ist kein Kontingent pro Konto |
| Verarbeitungsfenster | 22:00–07:00 unter der Woche, ganztägig am Wochenende, je nach Dienst-Zeitzone |
| Aufbewahrung nach Verarbeitung | 24 h nach Abschluss, dann automatische Bereinigung |

Ein Batch kann außerhalb des Verarbeitungsfensters warten und wird pausiert und später fortgesetzt, wenn dieses Fenster endet. **Die Aufbewahrung von 24 h ist keine Garantie für die Verarbeitung innerhalb von 24 h.**

Der Batch-Status (Warteschlange, Fortschritt und über GET abrufbare Ergebnisse) wird im Speicher der Verarbeitungsinstanz gespeichert, ohne Mechanismus zur Wiederherstellung auf der Festplatte. Ein Neustart dieser Instanz führt zum Verlust dieses Status. Rufen Sie Ihre Ergebnisse ab und speichern Sie sie, bevor sie ablaufen. Bewahren Sie den Schlüssel, der den Batch erstellt hat, bis zu deren Abruf auf.

Dieser Vertrag behandelt Chat-Konversationen. Er bietet kein JSONL-Upload, keine Batch-Verarbeitung von Embeddings, keine Liste der Batches und keine API-Stornierung.

## Häufige Fehler

| HTTP-Code | Ursache oder Aktion |
|-----------|-----------------|
| `400` | Ungültige Anfrage, fehlende oder falsch strukturierte Konversationen, maximale Größe überschritten. Korrigieren Sie den gesendeten Körper. |
| `401` | Ungültige Authentifizierung. Überprüfen Sie Ihren API-Schlüssel. |
| `403` | Der zum Abfragen des Batches verwendete Schlüssel unterscheidet sich von dem, der ihn erstellt hat. |
| `404` | Unbekannte ID, abgelaufener Batch oder verlorener Status nach Neustart. |
| `501` | Batch-Verarbeitung auf der betreffenden Instanz deaktiviert. Kontaktieren Sie den Support. |
| `503` | Warteschlange gesättigt oder Verarbeitungsinstanz nicht verfügbar. Versuchen Sie es später erneut gemäß der zurückgegebenen Meldung. |

Fehler, die eine einzelne Konversation betreffen, finden Sie in `results[].error`, selbst wenn GET HTTP 200 zurückgegeben hat.

## Preisgestaltung und Ressourcen

Die Generierungsparameter gelten für jede Konversation. Für Batch-Preise konsultieren Sie den [offiziellen Cloud Temple Preiskatalog](https://www.cloud-temple.com/nos-tarifs-publics/).

- [Chat-Generierungs-API](./api.md#post-v1chatcompletions)
- [Modell auswählen](./models.md)
- [Lebenszyklus der Modelle](https://llmaas.status.cloud-temple.app/lifecycle)
