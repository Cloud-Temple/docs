---
title: Verantwortlichkeitsmatrix PaaS
---

Hier ist das RACI-Modell, das die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der PaaS-Plattformen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen des RACI:

| Rolle         | Beschreibung                                                                                                            |
| ------------  | ------------------------------------------------------------------------------------------------------                  |
| (R) Realisiert| __R__ealisiert den Prozess                                                                                              |
| (A) Genehmigt | __A__genehmigt die Realisierung des Prozesses                                                                           |
| (C) Berät     | __C__onsultiert während des Prozesses                                                                                   |
| (I) Informiert| __I__nformiert über die Ergebnisse des Prozesses (über Werkzeuge, das Portal oder Nachrichten)                          |


## Initialer Aufbau

| Aktivität                                                             | Rolle Kunde | Rolle Cloud Temple |
| --------------------------------------------------------------------  | ----------- | -----------------   |
| Gesamtarchitektur der OpenShift-Plattform definieren                  | C           | RA                  |
| OpenShift-Plattform dimensionieren (Anzahl der Knoten, Ressourcen)    | C           | RA                  |
| OpenShift-Plattform installieren und konfigurieren                    | I           | RA                  |
| Netzwerkbasis der OpenShift-Plattform konfigurieren                   | I           | RA                  |
| Verwaltung von Identitäten und Zugängen für OpenShift einrichten      | C           | RA                  |
| Strategie für Skalierung und Hochverfügbarkeit definieren             | C           | RA                  |

## Verwaltung von Projekten und Anwendungen

| Aktivität                                          | Rolle Kunde | Rolle Cloud Temple |
| -------------------------------------------------  | ----------- | -----------------   |
| OpenShift-Projekte erstellen und verwalten         | RA          | C                   |
| Anwendungen in OpenShift bereitstellen und verwalten| RA        | C                   |
| CI/CD-Pipelines konfigurieren                      | RA          | C                   |
| Container-Images und Register verwalten            | RA          | C                   |

## Wartung und Updates

| Aktivität                                         | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------  | ----------- | -----------------   |
| OpenShift-Plattform aktualisieren                 | I           | RA                  |
| Sicherheitspatches für OpenShift anwenden         | I           | RA                  |
| Bereitgestellte Anwendungen aktualisieren         | RA          | I                   |
| Aktualisierungen der Container-Images verwalten   | RA          | I                   |

## Überwachung und Leistung

| Aktivität                                             | Rolle Kunde | Rolle Cloud Temple |
| ----------------------------------------------------  | ----------- | -----------------   |
| Leistung der OpenShift-Plattform überwachen           | I           | RA                  |
| Leistung der Anwendungen überwachen                   | RA          | I                   |
| Plattformbezogene Alarme verwalten                    | I           | RA                  |
| Anwendungsbezogene Alarme verwalten                   | RA          | I                   |

## Sicherheit

| Aktivität                                                           | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------------------------  | ----------- | -----------------   |
| Sicherheit der OpenShift-Plattform verwalten                        | I           | RA                  |
| Sicherheitsrichtlinien der Pods konfigurieren und verwalten         | RA          | C                   |
| SSL/TLS-Zertifikate für die Plattform verwalten                     | I           | RA                  |
| SSL/TLS-Zertifikate für Anwendungen verwalten                       | RA          | C                   |
| Rollenbasierte Zugriffskontrolle (RBAC) implementieren und verwalten| C           | RA                  |

## Backup und Notfallwiederherstellung

| Aktivität                                                              | Rolle Kunde | Rolle Cloud Temple |
| ---------------------------------------------------------------------  | ----------- | -----------------   |
| Backup-Strategie für die OpenShift-Plattform definieren                | C           | RA                  |
| Backups der Plattform implementieren und verwalten                     | I           | RA                  |
| Backup-Strategie für die Anwendungen definieren                        | RA          | C                   |
| Backups der Anwendungen implementieren und verwalten                   | RA          | I                   |
| Notfallwiederherstellungsverfahren für die Plattform testen            | I           | RA                  |
| Notfallwiederherstellungsverfahren für Anwendungen testen              | RA          | C                   |

## Support und Problemlösung

| Aktivität                                                         | Rolle Kunde | Rolle Cloud Temple |
| ----------------------------------------------------------------  | ----------- | -----------------   |
| Level-1-Support für die OpenShift-Plattform bereitstellen         | I           | RA                  |
| Level-2- und 3-Support für die OpenShift-Plattform bereitstellen   | I           | RA                  |
| Plattformbezogene Probleme lösen                                  | I           | RA                  |
| Anwendungsbezogene Probleme lösen                                 | RA          | C                   |

## Kapazitätsmanagement und Weiterentwicklung

| Aktivität                                                 | Rolle Kunde | Rolle Cloud Temple |
| --------------------------------------------------------  | ----------- | -----------------   |
| Nutzung der Plattformressourcen überwachen                | I           | RA                  |
| Kapazitätsentwicklung der Plattform planen                | C           | RA                  |
| Kapazitätsänderungen implementieren                       | I           | RA                  |
| Weiterentwicklung der Anwendungen und ihrer Ressourcen verwalten| RA     | C                   |

## Dokumentation und Konformität

| Aktivität                                                      | Rolle Kunde | Rolle Cloud Temple |
| -------------------------------------------------------------  | ----------- | -----------------   |
| Dokumentation der OpenShift-Plattform pflegen                  | I           | RA                  |
| Dokumentation der Anwendungen pflegen                          | RA          | I                   |
| Sicherstellen der Plattformkonformität mit Sicherheitsstandards| I           | RA                  |
| Sicherstellen der Anwendungskonformität mit Sicherheitsstandards| RA         | C                   |
| Audits der Plattform durchführen                               | I           | RA                  |
| Audits der Anwendungen durchführen                             | RA          | C                   |