---
title: Verantwortlichkeitsmatrix PaaS
---

Hier ist das RACI-Modell, das die Verteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung der PaaS-Plattformen von Cloud Temple definiert.

## Definition der verschiedenen Rollen

Hier erinnern wir an die verschiedenen Rollen im RACI:

| Rolle         | Beschreibung                                                                           |
| ------------- | -------------------------------------------------------------------------------------  |
| (R) Realisieren | __R__ealisiert den Prozess                                                             |
| (A) Genehmigen  | __A__pproved die Durchführung des Prozesses                                            |
| (C) Beraten     | __C__onsultiert während des Prozesses                                                  |
| (I) Informieren | __I__nformiert über die Ergebnisse des Prozesses (über Tools, Portal oder Messaging)   |


## Initiale Einrichtung

| Aktivität                                                            | Rolle Kunde | Rolle Cloud Temple |
| -------------------------------------------------------------------- | ----------- | ------------------ |
| Definieren der globalen Architektur der OpenShift-Plattform          | C           | RA                 |
| Dimensionieren der OpenShift-Plattform (Anzahl der Knoten, Ressourcen) | C           | RA                 |
| Installation und Konfiguration der OpenShift-Plattform               | I           | RA                 |
| Grundnetzwerk der OpenShift-Plattform konfigurieren                  | I           | RA                 |
| Identitäts- und Zugangsmanagement für OpenShift einrichten           | C           | RA                 |
| Skalierungs- und Hochverfügbarkeitsstrategie definieren              | C           | RA                 |

## Verwaltung von Projekten und Anwendungen

| Aktivität                                          | Rolle Kunde | Rolle Cloud Temple |
| -------------------------------------------------- | ----------- | ------------------ |
| Erstellen und Verwalten von OpenShift-Projekten    | RA          | C                  |
| Bereitstellen und Verwalten von Anwendungen in OpenShift | RA      | C                  |
| Konfiguration der CI/CD-Pipelines                  | RA          | C                  |
| Verwalten von Container-Images und Registern       | RA          | C                  |

## Wartung und Updates

| Aktivität                                         | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------  | ----------- | ------------------ |
| Aktualisieren der OpenShift-Plattform             | I           | RA                 |
| Anwenden von Sicherheitsupdates für OpenShift     | I           | RA                 |
| Aktualisieren der bereitgestellten Anwendungen    | RA          | I                 |
| Verwalten der Updates von Container-Images        | RA          | I                 |

## Überwachung und Leistung

| Aktivität                                             | Rolle Kunde | Rolle Cloud Temple |
| ----------------------------------------------------- | ----------- | ------------------ |
| Überwachen der Leistung der OpenShift-Plattform       | I           | RA                 |
| Leistung der Anwendungen überwachen                   | RA          | I                  |
| Verwalten von plattformbezogenen Warnungen            | I           | RA                 |
| Verwalten von anwendungsbezogenen Warnungen           | RA          | I                  |

## Sicherheit

| Aktivität                                                           | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------------------------- | ----------- | ------------------ |
| Verwalten der Sicherheit der OpenShift-Plattform                    | I           | RA                 |
| Konfiguration und Verwaltung der Sicherheitsrichtlinien der Pods    | RA          | C                  |
| Verwalten von SSL/TLS-Zertifikaten für die Plattform                | I           | RA                 |
| Verwalten von SSL/TLS-Zertifikaten für Anwendungen                  | RA          | C                  |
| Implementieren und Verwalten der rollenbasierten Zugriffskontrolle (RBAC) | C      | RA                 |

## Backup und Disaster Recovery

| Aktivität                                                              | Rolle Kunde | Rolle Cloud Temple |
| ---------------------------------------------------------------------- | ----------- | ------------------ |
| Backup-Strategie für die OpenShift-Plattform definieren                | C           | RA                 |
| Implementieren und Verwalten der Plattform-Backups                     | I           | RA                 |
| Backup-Strategie für Anwendungen definieren                            | RA          | C                  |
| Implementieren und Verwalten der Anwendungs-Backups                    | RA          | I                  |
| Testen der Disaster-Recovery-Verfahren für die Plattform               | I           | RA                 |
| Testen der Disaster-Recovery-Verfahren für Anwendungen                 | RA          | C                  |

## Support und Problemlösung

| Aktivität                                                          | Rolle Kunde | Rolle Cloud Temple |
| -----------------------------------------------------------------  | ----------- | ------------------ |
| Bereitstellung des First-Level-Supports für die OpenShift-Plattform | I           | RA                 |
| Bereitstellung des Second- und Third-Level-Supports für die OpenShift-Plattform | I | RA            |
| Lösung von plattformbezogenen Problemen                            | I           | RA                 |
| Lösung von anwendungsbezogenen Problemen                           | RA          | C                  |

## Kapazitätsmanagement und Weiterentwicklung

| Aktivität                                                        | Rolle Kunde | Rolle Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ------------------ |
| Überwachung der Ressourcennutzung der Plattform                  | I           | RA                 |
| Planung der Kapazitätserweiterung der Plattform                  | C           | RA                 |
| Implementierung von Kapazitätsänderungen                           | I           | RA                 |
| Verwaltung der Weiterentwicklung von Anwendungen und deren Ressourcen | RA     | C                  |

## Dokumentation und Konformität

| Aktivität                                                      | Rolle Kunde | Rolle Cloud Temple |
| -------------------------------------------------------------- | ----------- | ------------------ |
| Pflegen der Dokumentation der OpenShift-Plattform              | I           | RA                 |
| Pflegen der Dokumentation der Anwendungen                      | RA          | I                  |
| Sicherstellung der Konformität der Plattform mit Sicherheitsstandards | I      | RA                 |
| Sicherstellung der Konformität der Anwendungen mit Sicherheitsstandards | RA  | C                 |
| Durchführung von Plattform-Audits                               | I           | RA                 |
| Durchführung von Anwendungs-Audits                              | RA          | C                  |