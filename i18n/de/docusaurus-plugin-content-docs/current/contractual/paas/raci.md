---
title: Verantwortungsmatrix PaaS
---

Hier ist das RACI-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der PaaS-Plattformen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen des RACI:

| Rolle         | Beschreibung                                                                               |
| ------------- | ------------------------------------------------------------------------------------------ |
| (R) Realisiert| __R__ealisiert den Prozess                                                                 |
| (A) Abnimmt   | __A__bnimmt die Realisierung des Prozesses                                                 |
| (C) Konsultiert| __C__onsultiert während des Prozesses                                                     |
| (I) Informiert| __I__nformiert über die Ergebnisse des Prozesses (via Tool, Portal oder Messaging)         |


## Erste Implementierung

| Aktivität                                                          | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ------------------- |
| Gesamtarchitektur der OpenShift-Plattform definieren               | C           | RA                  |
| Dimensionierung der OpenShift-Plattform (Anzahl der Knoten, Ressourcen) | C       | RA                  |
| Installation und Konfiguration der OpenShift-Plattform             | I           | RA                  |
| Grundlegende Netzwerkkonfiguration der OpenShift-Plattform         | I           | RA                  |
| Identity- und Access-Management für OpenShift implementieren       | C           | RA                  |
| Strategie für Skalierung und Hochverfügbarkeit definieren          | C           | RA                  |

## Projekt- und Anwendungsmanagement

| Aktivität                                      | Kundenrolle | Rolle Cloud Temple |
| ---------------------------------------------- | ----------- | ------------------- |
| OpenShift-Projekte erstellen und verwalten     | RA          | C                   |
| Anwendungen in OpenShift bereitstellen und verwalten | RA  | C                   |
| CI/CD-Pipelines konfigurieren                  | RA          | C                   |
| Container-Images und Register verwalten        | RA          | C                   |

## Wartung und Updates

| Aktivität                                          | Kundenrolle | Rolle Cloud Temple |
| -------------------------------------------------- | ----------- | ------------------- |
| Aktualisierung der OpenShift-Plattform             | I           | RA                  |
| Sicherheits-Patches für OpenShift anwenden         | I           | RA                  |
| Bereitgestellte Anwendungen aktualisieren          | RA          | I                   |
| Verwaltung von Container-Image-Updates             | RA          | I                   |

## Überwachung und Performance

| Aktivität                                                   | Kundenrolle | Rolle Cloud Temple |
| ----------------------------------------------------------- | ----------- | ------------------- |
| Überwachung der Performance der OpenShift-Plattform         | I           | RA                  |
| Überwachung der Anwendungsperformance                       | RA          | I                   |
| Verwaltung der Plattform-bezogenen Benachrichtigungen       | I           | RA                  |
| Verwaltung der Anwendungs-bezogenen Benachrichtigungen      | RA          | I                   |

## Sicherheit

| Aktivität                                                 | Kundenrolle | Rolle Cloud Temple |
| --------------------------------------------------------- | ----------- | ------------------- |
| Sicherheit der OpenShift-Plattform verwalten              | I           | RA                  |
| Sicherheitsrichtlinien für Pods konfigurieren und verwalten| RA          | C                   |
| SSL/TLS-Zertifikate für die Plattform verwalten           | I           | RA                  |
| SSL/TLS-Zertifikate für Anwendungen verwalten             | RA          | C                   |
| Rollenbasierte Zugriffskontrolle (RBAC) implementieren und verwalten | C | RA |

## Backup und Disaster Recovery

| Aktivität                                                      | Kundenrolle | Rolle Cloud Temple |
| -------------------------------------------------------------- | ----------- | ------------------- |
| Backup-Strategie für die OpenShift-Plattform definieren        | C           | RA                  |
| Backups der Plattform implementieren und verwalten             | I           | RA                  |
| Backup-Strategie für Anwendungen definieren                    | RA          | C                   |
| Backups der Anwendungen implementieren und verwalten           | RA          | I                   |
| Disaster-Recovery-Verfahren für die Plattform testen           | I           | RA                  |
| Disaster-Recovery-Verfahren für Anwendungen testen             | RA          | C                   |

## Support und Problembehebung

| Aktivität                                                     | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------------------- | ----------- | ------------------- |
| Level-1-Support für die OpenShift-Plattform bereitstellen     | I           | RA                  |
| Level-2- und 3-Support für die OpenShift-Plattform bereitstellen | I       | RA                  |
| Probleme mit der Plattform lösen                              | I           | RA                  |
| Probleme mit Anwendungen lösen                                | RA          | C                   |

## Kapazitätsmanagement und Weiterentwicklung

| Aktivität                                                     | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------------------- | ----------- | ------------------- |
| Ressourcennutzung der Plattform überwachen                    | I           | RA                  |
| Kapazitätsplanung der Plattform vornehmen                     | C           | RA                  |
| Änderungen der Kapazität umsetzen                             | I           | RA                  |
| Weiterentwicklung der Anwendungen und ihrer Ressourcen verwalten | RA      | C                   |

## Dokumentation und Compliance

| Aktivität                                                    | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------------------ | ----------- | ------------------- |
| Dokumentation der OpenShift-Plattform pflegen                | I           | RA                  |
| Dokumentation der Anwendungen pflegen                        | RA          | I                   |
| Einhaltung der Sicherheitsstandards der Plattform sicherstellen | I        | RA                  |
| Einhaltung der Sicherheitsstandards der Anwendungen sicherstellen | RA    | C                   |
| Plattform-Audits durchführen                                 | I           | RA                  |
| Anwendungs-Audits durchführen                                | RA          | C                   |