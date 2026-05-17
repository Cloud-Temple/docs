---
title: IaaS-Verantwortlichkeitsmatrix - S3-Objektspeicher
slug: /contractual/storage/raci
displayed_sidebar: docSidebar
---


Dies ist die RACI-Matrix zur Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der Cloud Temple S3-Objektspeicher-Plattform.

## Definition der verschiedenen Rollen

Hier werden die verschiedenen Rollen des RACI-Modells erläutert:

| Rolle         | Beschreibung                              |
|--------------|------------------------------------------|
| (R) Durchführt | __D__urchführt den Prozess                 |
| (A) Genehmigt | __G__enehmigt die Durchführung des Prozesses |
| (C) Beratend | __B__eratend während des Prozesses        |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses   |

## Definieren Sie Ihre Anforderungen

| Aktivität                                                                            | Kundenrolle | Cloud Temple-Rolle |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Überprüfen, ob das Produkt S3-Objektspeicher den Anforderungen der Anwendung entspricht | __RA__      | __CI__            |
| Service mit den erforderlichen Informationen abonnieren                            | __RA__      | __I__             |

## Service implementieren

| Aktivität                                                                             | Kundenrolle | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------|-------------|--------------------|
| Betriebssicherheit der S3-Objektspeicher-Plattform gewährleisten                      | __I__       | __RA__             |
| Sicherheitszustand der S3-Objektspeicher-Plattform gewährleisten                     | __I__       | __RA__             |
| Objekte erstellen                                                                     | __RA__      |                    |
| Zugriffsschlüssel erstellen und zugehörige Berechtigungen zuweisen                   | __RA__      |                    |

## Wiederkehrende Operationen

| Wiederkehrende Operationen                                                                           | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Aufrechterhaltung der Betriebsbereitschaft der S3-Objektspeicherplattform | __I__       | __RA__            |
| Aufrechterhaltung des Sicherheitsstatus der S3-Objektspeicherplattform    | __I__       | __RA__            |
| Sicherstellung der Zugänglichkeit des S3-Objektspeicherdienstes                               | __I__       | __RA__            |
| Aufbewahrung und Bereitstellung der Protokolle der S3-Objektspeicherplattform  |             | __RA__            |
| Überwachung des ordnungsgemäßen Betriebs der S3-Objektspeicherplattform                | __I__       | __RA__            |
| Überwachung des Objekt-Lebenszyklus                                                  | __RA__      |                   |
| Überwachung des Lebenszyklus der Objektzugriffsrechte                                   | __RA__      |                   |
| Verwaltung der logischen Sicherheit von Objekten                                               | __RA__      |                   |
| Incidentmanagement auf dem S3-Objektspeicherdienst                              | __I__       | __RA__            |
| Problemmanagement auf dem S3-Objektspeicherdienst                              | __I__       | __RA__            |
| Kapazitätsmanagement auf dem S3-Objektspeicherdienst                                | __I__       | __RA__            |
| Änderungsmanagement auf dem S3-Objektspeicherdienst                             | __I__       | __RA__            |

## Verschlüsselungsverwaltung

| Aktivität                                                                                 | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------|-------------|--------------------|
| Verschlüsselung der Daten vor der Bereitstellung auf dem S3-Objektspeicherdienst verwalten | __RA__      |                    |
| Verschlüsselung des vom S3-Objektspeicherdienst zugewiesenen Speicherplatzes verwalten    | __A__       | __R__              |

## Geschäftskontinuität

| Aktivität                                                                                  | Kundenrolle | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------|-------------|--------------------|
| Sicherstellung der Geschäftskontinuität des S3-Objektspeicherdienstes                     | __I__       | __RA__             |
| Sicherstellung der Datensicherung                                                         | __RA__      |                    |
| Durchführung regelmäßiger Tests zur Datenwiederherstellung                                | __RA__      |                    |
| Pflege des Geschäftskontinuitäts- und Notfallwiederherstellungsplans für Anwendungen       | __RA__      |                    |

## Reversibilität

| Aktivität                                                                                  | Kundenrolle | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------|-------------|--------------------|
| Umsetzung des Reversibilitätsprojekts (Planung, Tools, Methoden, Ziele,...)               | __RA__      |                    |
| Daten aus dem S3-Objektspeicherdienst exportieren                                          | __RA__      |                    |
| Daten im S3-Objektspeicherdienst löschen                                                   | __RA__      |                    |
| Speichermedien am Ende ihrer Lebensdauer oder bei Fehlern sicher vernichten                |             | __RA__             |