---
title: Netzwerk-Verantwortlichkeitsmatrix
displayed_sidebar: docSidebar
---

Diese **RACI**-Matrix definiert die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Netzwerkkonnektivität.

## Definition der verschiedenen Rollen

Hier werden die verschiedenen Rollen des RACI-Modells erläutert:

| Rolle | Beschreibung |
|---|---|
| (R) Durchführend | Führt den Prozess durch |
| (A) Genehmigend  | Genehmigt die Durchführung des Prozesses |
| (C) Konsultiert  | Wird während des Prozesses konsultiert |
| (I) Informiert   | Wird über die Ergebnisse des Prozesses informiert (über die Tools, das Portal oder Messaging) |

## Clientnetzwerkverbindung

| Aktivität                                                                                             | Rolle Client | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------------|--------------|--------------------|
| Bezug einer Operator-Netzwerkverbindung zum Zugriff auf ein physisches Cloud-Temple-Rechenzentrum (1) | __RA__       | __CI__             |
| Verwaltung von Incidents auf den Client-Operator-Netzwerklinks                                          | __RA__       |                    |
| Verwaltung von Problemen auf den Client-Operator-Netzwerklinks                                          | __RA__       | __I__              |
| Verwaltung der Kapazitäten auf den Client-Operator-Netzwerklinks                                          | __RA__       | __CI__             |

*(1) Cloud Temple übernimmt die Verantwortung für das Netzwerk in Bezug auf seine Backbone-Infrastruktur, seine Sammelpunkte sowie die Datacenter-Interkonnektionspunkte und gewährleistet so die Konnektivität zwischen diesen Punkten und seinem Backbone-Netzwerk. Im Angebot für physisches Rack-Hosting übernimmt Cloud Temple die Verantwortung ab dem Gerät oben im Rack, allgemein als „Top of Rack“ bezeichnet.*