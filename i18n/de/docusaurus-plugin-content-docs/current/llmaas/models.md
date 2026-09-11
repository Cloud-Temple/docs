---
title: Katalog der KI-Modelle
sidebar_position: 2
---

# Katalog der LLM-Modelle als Service

## Den aktuellen Katalog einsehen

Der **[Modellkatalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle)** ist die Referenz für Produktionsmodelle, Deprekationen, Support-Enddaten, LTS-Status und empfohlene Migrationen. Nutzen Sie die Filter und Suchfunktion, um ein neues Projekt vorzubereiten oder die Modelle Ihrer Anwendungen zu verfolgen. Bei Lebenszyklusdaten und Migrationen gelten die auf dieser Seite veröffentlichten Informationen als maßgeblich, falls Abweichungen zu älteren Beispielen oder Katalogkopien bestehen.

Diese Seite erläutert, wie Sie ein Modell auswählen und verwenden. Inventare, Daten und Leistungskennzahlen können direkt in den folgenden Quellen eingesehen werden:

| Anforderung | Quelle |
|--------|--------------------|
| Modell auswählen, Kontext und Lebenszyklus prüfen | [Modellkatalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) |
| Von der API bereitgestellte Identifikatoren abrufen | `GET /v1/models` ([Dokumentation](./api.md)) |
| Verfügbarkeit und beobachtete Leistung prüfen | [Service-Status](https://llmaas.status.cloud-temple.app/) |
| Service-Updates und Migrationsankündigungen einsehen | [LLMaaS Changelog](https://llmaas.status.cloud-temple.app/changelog) |
| Vergangene Messwerte prüfen | [Überwachungshistorie](https://llmaas.status.cloud-temple.app/history) |

## Auswahl entsprechend Ihrer Nutzung

Der Dienst deckt die unten aufgeführten Verwendungszwecke ab. Überprüfen Sie die Fähigkeiten des gewählten Modells vor der Integration: Nicht alle Modelle unterstützen dieselben Eingaben oder Funktionen.

### Chat und Reasoning

Für Assistenten, Zusammenfassungen oder Analysen vergleichen Sie die Qualität der Antworten auf Ihren eigenen Dokumenten, die Antwortzeit und die erforderliche Kontextgröße. Für eine langfristig geplante Anwendung prüfen Sie den **LTS**-Status und das angekündigte Ende des Supports.

### Programmierung und Agenten

Um Code zu generieren oder einen Agenten zu erstellen, prüfen Sie die Unterstützung für Tool-Aufrufe (*tool calling*) und testen Sie vollständige Ausführungssequenzen. Der [Schnellstart-Leitfaden](./quickstart.md) enthält ein Beispiel für einen Funktionsaufruf.

### Vision und Multimodalität

Wählen Sie ein Modell, das Bilder für die visuelle Analyse und Textextraktion akzeptiert. Überprüfen Sie die von der API unterstützten Formate und die Kontextkapazität; die Unterstützung von Text impliziert nicht automatisch die Unterstützung von Bildern. Siehe Beispiele für [multimodale Anfragen](./api.md).

### Embeddings und semantische Suche

Embeddings wandeln Text in Vektoren um, die für die Suche verwendet werden. Vergleichen Sie die sprachliche Abdeckung, die akzeptierte Textlänge und die Relevanz auf Ihrem Korpus. Ein Modellwechsel kann erfordern, dass die Vektoren neu berechnet und der Index neu aufgebaut werden: Mischen Sie keine Embeddings verschiedener Modelle. Siehe [guide RAG](./rag_explained.md).

## Reranking-Modelle

Reranking ordnet die gefundenen Dokumente basierend auf ihrer Relevanz für eine Frage neu. Es ergänzt die Vektorsuche vor der Generierung der Antwort. Die Endpunkte `/v1/rerank` und `/v2/rerank` werden im [guide Reranking](./rerank.md) vorgestellt.

### Sicherheit und Guardrails

Sicherheitsmodelle ermöglichen die Bewertung von Inhalten innerhalb eines Anwendungspfads. Definieren Sie die Filterkriterien, Schwellenwerte und die Behandlung von Grenzfällen gemeinsam mit Ihren Fachabteilungen; validieren Sie diese anhand Ihrer Daten.

### Übersetzung

Testen Sie bei einer mehrsprachigen Anwendung die betroffenen Sprachen, Ihre Terminologie und die Beibehaltung der Formatierung. Die Qualität muss anhand der tatsächlich verarbeiteten Dokumente bewertet werden.

### Audio und Bild

Der Katalog umfasst Anwendungsfälle für die Audio-Transkription und die Bildgenerierung. Überprüfen Sie das für jeden Anwendungsfall erforderliche Modell und das Protokoll, insbesondere die Unterscheidung zwischen der Transkription von Dateien und der Echtzeit-Transkription.

## Identifikatoren über die API abrufen

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Verwenden Sie die von der API zurückgegebene exakte ID im Parameter `model`. Das Vorhandensein einer ID garantiert nicht, dass sie sich noch auf das ursprüngliche Modell bezieht: Ein alter Name kann auf einen Nachfolger umgeleitet werden. Überprüfen Sie auch seinen [Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle).

## Vorbereitung der Produktion

1. Wählen Sie ein für Ihren Anwendungsfall geeignetes Modell und überprüfen Sie dessen Lizenz.
2. Informieren Sie sich über den Status, das Supportende und die empfohlene Migration.
3. Testen Sie Qualität, Latenz, Kosten und die erforderlichen Kapazitäten anhand Ihrer realen Anwendungsfälle.
4. Speichern Sie die Modell-ID in der Konfiguration Ihrer Anwendung, um eine Migration zu erleichtern.
5. Verfolgen Sie das Changelog und wenden Sie den [Migrationsleitfaden](./concepts.md#migration-zu-einem-anderen-modell) an, sobald eine Änderung angekündigt wird.

Die beobachteten Geschwindigkeiten hängen unter anderem von der Auslastung, der Länge der Anfragen und dem Generierungsmodus ab. Sie dienen als Richtwerte und stellen keine Durchsatzgarantien für Ihre Anwendung dar.

Für Preise und Zugriffsstufen finden Sie Informationen in der [API-Dokumentation](./api.md). Für verzögerte Verarbeitungsaufträge finden Sie Informationen im [Batch-Modus](./batch.md).