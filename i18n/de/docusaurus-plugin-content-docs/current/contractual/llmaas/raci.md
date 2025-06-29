---
title: Verantwortlichkeitsmatrix - LLMaaS
---

Hier ist die RACI-Tabelle zur Aufgabenteilung zwischen dem Kunden und Cloud Temple für die Nutzung der Plattform LLM as a Service (LLMaaS).

## Definition der verschiedenen Rollen

Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                             |
| ------------ | ---------------------------------------- |
| (R) Durchführt | __R__ealisiert den Prozess               |
| (A) Genehmigt | __A__pprobiert die Durchführung des Prozesses |
| (C) Konsultiert | __C__onsultiert während des Prozesses     |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses |

## Ihr Bedarf definieren

| Aktivität                                                              | Rolle Kunde | Rolle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Überprüfen, ob der LLMaaS-Service dem Anwendungsbedarf entspricht | __RA__      | __CI__            |
| Den Dienst abonnieren und einen Rechnungsersteller auswählen           | __RA__      | __I__             |

## Service implementieren

| Aktivität                                                                           | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------------------------- | ----------- | ----------------- |
| Sorgen für den Betrieb der LLMaaS-Plattform (API, GPU)                             | __I__       | __RA__            |
| Sicherstellung der Sicherheit der LLMaaS-Plattform                                 | __I__       | __RA__            |
| API-Zugangsschlüssel verwalten (Erstellung, Rotation, Widerruf)                   | __RA__      |                   |
| Entwickeln und Warten des Client-Anwendungs-Codes                                 | __RA__      |                   |

## Wiederkehrende Aufgaben

| Aktivität                                                         | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Sicherstellen der Verfügbarkeit der LLMaaS-API                         | __I__       | __RA__            |
| Überwachen des ordnungsgemäßen Betriebs der Plattform und der Modelle | __I__       | __RA__            |
| Verwalten von Incident auf der LLMaaS-Plattform                     | __I__       | __RA__            |
| Verwalten von Problemen auf der LLMaaS-Plattform                     | __I__       | __RA__            |
| Verwalten der GPU-Infrastruktur-Kapazität                        | __I__       | __RA__            |
| Verwalten der Modellentwicklungen (Hinzufügen, Abschreibung)           | __C, I__    | __RA__            |
| Verfolgen des Verbrauchs und der Abrechnung                         | __RA__      | __I__             |

## Sicherheitsverwaltung

| Aktivität                                                                    | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------------------- | ----------- | ------------------ |
| Physikalische Infrastruktur und LLMaaS-Plattform sichern                    | __I__       | __RA__             |
| Zugriff und Berechtigungen der Endbenutzer der Anwendung verwalten          | __RA__      |                    |
| Daten und Anfragen, die an die API gesendet werden, sichern                  | __RA__      | __C__              |
| Vertraulichkeit der Daten, die von den Modellen verarbeitet werden, gewährleisten | __R__       | __A__              |
| Verwaltung der Konformität der Endanwendung (DSGVO, usw.)                    | __RA__      | __I__              |

## Betriebskontinuität

| Aktivität                                                             | Kundenrolle | Cloud Temple-Rolle |
| --------------------------------------------------------------------- | ----------- | ------------------ |
| Die Betriebskontinuität der LLMaaS-Plattform sicherstellen             | __I__       | __RA__             |
| Die Sicherung der Daten der Kundenanwendung sicherstellen              | __RA__      |                    |
| Den Betriebskontinuitätsplan für die Kundenanwendung aufrechterhalten | __RA__      |                    |

## Umkehrbarkeit

| Aktivität                                                                    | Kundenrolle | Cloud-Tempel-Rolle |
| ---------------------------------------------------------------------------- | ----------- | ------------------ |
| Projekt der Umkehrbarkeit umsetzen (Planung, Tools, Ziele)                   | __RA__      | __C__              |
| Daten und den Code der Kundenanwendung exportieren                           | __RA__      |                    |
| API-Schlüssel und Zugriff auf den Dienst löschen                             | __RA__      |                    |