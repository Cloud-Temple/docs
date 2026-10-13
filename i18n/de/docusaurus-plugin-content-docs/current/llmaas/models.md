---
title: Katalog der KI-Modelle
sidebar_position: 2
---

# Katalog der LLM-as-a-Service-Modelle

## Den aktuellen Katalog einsehen

Der **[Katalog und Lebenszyklus der Modelle](https://llmaas.status.cloud-temple.app/lifecycle)** ist die Referenz für Modelle in der Produktion, Deprecations, End-of-Support-Daten, LTS-Status und empfohlene Migrationen. Nutzen Sie die Filter und die Suche, um ein neues Projekt vorzubereiten oder die Modelle Ihrer Anwendungen zu verfolgen. Bei Lebenszyklusdaten und Migrationen haben die auf dieser Seite veröffentlichten Informationen Vorrang vor älteren Beispielen oder Kopien des Katalogs.

Diese Seite erläutert, wie man ein Modell auswählt und verwendet. Inventare, Daten und Leistungsmesswerte können direkt in den folgenden Quellen eingesehen werden:

| Bedarf | Zu konsultierende Quelle |
|--------|--------------------|
| Ein Modell auswählen, seinen Kontext und Lebenszyklus überprüfen | [Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) |
| Von der API bereitgestellte Identifikatoren erhalten | `GET /v1/models` ([Dokumentation](./api.md)) |
| Verfügbarkeit und beobachtete Leistung überprüfen | [Dienststatus](https://llmaas.status.cloud-temple.app/) |
| Dienstentwicklungen und Migrationsankündigungen einsehen | [LLMaaS-Changelog](https://llmaas.status.cloud-temple.app/changelog) |
| Vergangene Messwerte untersuchen | [Überwachungshistorie](https://llmaas.status.cloud-temple.app/history) |

## Auswahl basierend auf der Nutzung

Der Dienst deckt die unten aufgeführten Anwendungsfälle ab. Überprüfen Sie vor der Integration die Fähigkeiten des ausgewählten Modells: Nicht alle Modelle unterstützen dieselben Eingaben oder Funktionen.

### Chat und Reasoning

Für Assistenten, Zusammenfassungen oder Analysen vergleichen Sie die Antwortqualität mit Ihren eigenen Dokumenten, die Antwortzeit und die erforderliche Kontextgröße. Für eine langlebige Anwendung prüfen Sie den **LTS**-Status und das veröffentlichte End-of-Support-Datum.

### Programmierung und Agents

Zur Codegenerierung oder zum Aufbau eines Agents überprüfen Sie die Unterstützung von Tool-Aufrufen (*Tool Calling*) und testen Sie vollständige Ausführungsszenarien. Der [Quickstart-Leitfaden](./quickstart.md) zeigt ein Beispiel für einen Funktionsaufruf.

### Vision und Multimodal

Wählen Sie ein Modell, das Bilder akzeptiert, für die visuelle Analyse und Textextraktion. Überprüfen Sie die von der API akzeptierten Formate und die Kontextkapazität; die Unterstützung von Text impliziert nicht die von Bildern. Sehen Sie sich die Beispiele für [multimodale Anfragen](./api.md) an.

### Embedding und semantische Suche

Embeddings transformieren Text in Vektoren, die von der Suche verwendet werden. Vergleichen Sie die Sprachabdeckung, die Länge der akzeptierten Texte und die Relevanz für Ihre Datenmenge. Ein Modellwechsel kann eine Neuberechnung der Vektoren und den Neuaufbau des Index erfordern: Mischen Sie keine Embeddings unterschiedlicher Modelle. Sehen Sie sich den [RAG-Leitfaden](./rag_explained.md) an.

## Reranking-Modelle

Das Reranking ordnet die gefundenen Dokumente neu nach ihrer Relevanz für eine Frage. Es ergänzt die Vektorsuche vor der Antwortgenerierung. Die Endpunkte `/v1/rerank` und `/v2/rerank` werden im [Reranking-Leitfaden](./rerank.md) vorgestellt.

### Sicherheit und Guardrails

Sicherheitsmodelle ermöglichen die Bewertung von Inhalten in einem Anwendungspfad. Definieren Sie mit Ihren Fachabteilungen die Filterkriterien, Schwellenwerte und die Behandlung von Grenzfällen; validieren Sie diese an Ihren Daten.

### Übersetzung

Testen Sie für eine mehrsprachige Anwendung die betroffenen Sprachen, Ihre Terminologie und die Erhaltung des Formats. Die Qualität muss an den tatsächlich verarbeiteten Dokumenten bewertet werden.

### Audio und Bild

Der Katalog umfasst Anwendungsfälle für Audio-Transkription und Bildgenerierung. Überprüfen Sie für jeden Anwendungsfall das erforderliche Modell und Protokoll, insbesondere den Unterschied zwischen der Transkription von Dateien und der Echtzeit-Transkription.

## Identifikatoren über die API abrufen

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Verwenden Sie den von der API zurückgegebenen exakten Identifikator im Parameter `model`. Das Vorhandensein eines Identifikators garantiert nicht, dass er noch das ursprüngliche Modell bezeichnet: Ein alter Name kann auf einen Nachfolger umgeleitet werden. Überprüfen Sie auch seinen [Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle).

## Produktionsvorbereitung

1. Wählen Sie ein für Ihren Anwendungsfall geeignetes Modell aus und überprüfen Sie dessen Lizenz.
2. Sehen Sie sich den Status, das End-of-Support-Datum und die empfohlene Migration an.
3. Testen Sie Qualität, Latenz, Kosten und erforderliche Fähigkeiten an Ihren realen Anwendungsfällen.
4. Speichern Sie den Modellidentifikator in der Konfiguration Ihrer Anwendung, um eine Migration zu erleichtern.
5. Verfolgen Sie das Changelog und wenden Sie den [Migrationsleitfaden](./concepts.md#migration-zu-einem-anderen-modell) an, wenn eine Änderung angekündigt wird.

Die beobachteten Geschwindigkeiten hängen unter anderem von der Auslastung, der Länge der Anfragen und dem Generierungsmodus ab. Sie dienen als Richtwerte, nicht als Durchsatzgarantien für Ihre Anwendung.

Um die aktuellen öffentlichen Preise zu erfahren und Ihre Schätzung zu erstellen, konsultieren Sie den [offiziellen Cloud Temple Preiskatalog](https://www.cloud-temple.com/nos-tarifs-publics/). Für technische Stufen konsultieren Sie die [API-Dokumentation](./api.md). Für asynchrone Verarbeitung konsultieren Sie den [Batch-Modus](./batch.md).
