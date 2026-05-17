---
title: Verantwortlichkeitsmatrix - LLMaaS
displayed_sidebar: docSidebar
---


Dies ist die RACI-Matrix zur Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der LLM as a Service (LLMaaS)-Plattform.

## Definition der verschiedenen Rollen

Hier werden die verschiedenen Rollen des RACI noch einmal erläutert:

| Rolle        | Beschreibung                             |
| ------------ | ---------------------------------------- |
| (R) Durchführt | __D__urchführt den Prozess             |
| (A) Genehmigt | __G__enehmigt die Durchführung des Prozesses |
| (C) Konsultiert | __K__onsultiert während des Prozesses  |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses |

## Definieren Sie Ihre Anforderungen

| Aktivität                                                              | Kundenrolle | Cloud Temple-Rolle |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Validieren, dass der LLMaaS-Service den Anforderungen der Anwendung entspricht | __RA__      | __CI__            |
| Service abonnieren und eine Abrechnungsebene auswählen           | __RA__      | __I__             |

## Service implementieren

| Aktivität                                                                           | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------------------------- | ----------- | ------------------ |
| Betrieb der LLMaaS-Plattform (API, GPU) gewährleisten                               | __I__       | __RA__             |
| Sicherheit der LLMaaS-Plattform gewährleisten                                       | __I__       | __RA__             |
| Verwaltung von API-Zugriffsschlüsseln (Erstellung, Rotation, Widerruf)              | __RA__      |                    |
| Entwicklung und Wartung des Codes der Client-Anwendung                             | __RA__      |                    |

## Wiederkehrende Operationen

| Tätigkeit                                                         | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------- | ----------- | ------------------ |
| Verfügbarkeit der LLMaaS-API gewährleisten                       | __I__       | __RA__             |
| Funktionstüchtigkeit der Plattform und der Modelle überwachen      | __I__       | __RA__             |
| Incidents auf der LLMaaS-Plattform verwalten                      | __I__       | __RA__             |
| Probleme auf der LLMaaS-Plattform verwalten                       | __I__       | __RA__             |
| Kapazität der GPU-Infrastruktur verwalten                         | __I__       | __RA__             |
| Modellentwicklungen verwalten (Hinzufügung, Deprecation)          | __C, I__    | __RA__             |
| Verbrauch und Abrechnung nachverfolgen                             | __RA__      | __I__              |

## Sicherheitsmanagement

| Aufgabe                                                                    | Kundenrolle | Rolle Cloud Temple |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Absichern der physischen Infrastruktur und der LLMaaS-Plattform             | __I__       | __RA__            |
| Verwalten der Zugriffsrechte und Berechtigungen der Endanwender der Anwendung | __RA__      |                   |
| Absichern der an die API gesendeten Daten und Prompts                       | __RA__      | __C__             |
| Gewährleistung der Vertraulichkeit der von den Modellen verarbeiteten Daten | __R__       | __A__             |
| Sicherstellung der Konformität der Endanwendung (RGPD, etc.)                | __RA__      | __I__             |

## Geschäftskontinuität

| Aktivität                                                              | Rolle Kunde | Rolle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Sicherstellung der Geschäftskontinuität der LLMaaS-Plattform           | __I__       | __RA__            |
| Sicherstellung der Datensicherung der Kundenanwendung                  | __RA__      |                   |
| Aufrechterhaltung des Geschäftskontinuitätsplans für die Kundenanwendung | __RA__      |                   |

## Reversibilität

| Aktivität                                                                    | Kundenrolle | Cloud-Tempel-Rolle |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Umsetzung des Reversibilitätsprojekts (Planung, Tools, Ziele)                | __RA__      | __C__             |
| Exportieren der Daten und des Codes der Client-Anwendung                     | __RA__      |                   |
| Löschen der API-Schlüssel und des Dienstzugriffs                             | __RA__      |                   |