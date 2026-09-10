---
title: Verantwortlichkeitsmatrix (RACI) - Managed Kubernetes
displayed_sidebar: docSidebar
---

## RACI

### Architektur & Infrastruktur

| **Aufgabe**                                                        | **Kunde** | **Cloud Temple** |
| ------------------------------------------------------------------- | ---------- | ---------------- |
| Globale Architektur des Kubernetes-Dienstes festlegen                | C          | RA               |
| Kubernetes-Dienst dimensionieren (Anzahl der Knoten, Ressourcen)   | C          | RA               |
| Kubernetes-Dienst mit Standardkonfiguration installieren   | I          | RA               |
| Konfiguration des Kubernetes-Dienstes                                 | C          | RA               |
| Basisnetzwerk des Kubernetes-Dienstes konfigurieren                  | I          | RA               |
| Bereitstellung der initialen Konfiguration für Identitäten und Zugriffe | C          | RA               |
| Strategie für Skalierung und Hochverfügbarkeit festlegen  | C          | RA               |

### Verwaltung von Projekten und Geschäftsanwendungen

| **Aktivität**                                      | **Kunde** | **Cloud Temple** |
| -------------------------------------------------- | --------- | ---------------- |
| Kubernetes-Projekte erstellen und verwalten        | RA        | I*               |
| Anwendungen in Kubernetes bereitstellen und verwalten | RA     | I*               |
| CI/CD-Pipelines konfigurieren                      | RA        | I*               |
| Container-Images und -Registries verwalten         | RA        | I*               |

*Diese Verantwortlichkeiten können über einen zusätzlichen Managed-Services-Vertrag an Cloud Temple delegiert werden.

### Überwachung und Leistung

| **Aktivität**                                    | **Kunde** | **Cloud Temple** |
| ----------------------------------------------- | ---------- | ---------------- |
| Leistung des Kubernetes-Dienstes überwachen     | I          | RA               |
| Leistung der Anwendungen überwachen             | RA         |                  |
| Warnmeldungen für den Kubernetes-Dienst verwalten | I          | RA               |
| Warnmeldungen für die Anwendungen verwalten     | RA         |                  |

### Wartung und Updates der Infrastrukturen

| **Aufgabe**                                          | **Kunde** | **Cloud Temple** |
| ---------------------------------------------------- | --------- | ---------------- |
| Kubernetes/OS-Dienst aktualisieren                   | C         | RA               |
| Sicherheitspatches für Kubernetes anwenden           | C         | RA               |
| Bereitgestellte Anwendungen aktualisieren (Operatoren*) | C      | RA               |

*Operator-Paket auf Managed Kube enthalten – siehe Kapitel: Verwaltete Helm-Pakete

### Sicherheit

| **Aktivität**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Sicherheit des Kubernetes-Dienstes verwalten                                    | RA         | RA               |
| Pod-Sicherheitsrichtlinien konfigurieren und verwalten                    | RA         | I*               |
| SSL/TLS-Zertifikate für den Kubernetes-Dienst verwalten                   | C          | RA               |
| SSL/TLS-Zertifikate für Anwendungen verwalten                        | RA         | I*               |
| Implementieren und Verwalten der grundlegenden rollenbasierten Zugriffskontrolle (RBAC) | C          | R                |
| Implementieren und Verwalten der kundenspezifischen rollenbasierten Zugriffskontrolle (RBAC)  | RA         | I*               |

*Diese Verantwortlichkeiten können über einen zusätzlichen Managed-Service-Vertrag an Cloud Temple delegiert werden.

### Sicherung und Disaster Recovery

| **Aktivität**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Backup-Strategie für den Kubernetes-Dienst festlegen              | I          | RA               |
| Backups des Kubernetes-Dienstes implementieren und verwalten            | I          | RA               |
| Backup-Strategie für die Anwendungen festlegen                   | RA*        | I*               |
| Backups der Anwendungen implementieren und verwalten                 | RA*        | I*               |
| Disaster-Recovery-Verfahren für den Kubernetes-Dienst testen | CI         | RA               |
| Disaster-Recovery-Verfahren für die Anwendungen testen      | RA*        | CI*              |

*Diese Verantwortlichkeiten können über einen zusätzlichen Managed-Services-Vertrag an Cloud Temple delegiert werden.

### Support und Problembehebung

| **Aktivität**                                              | **Kunde** | **Cloud Temple** |
| --------------------------------------------------------- | --------- | ---------------- |
| Level-1-Support für die Infrastruktur bereitstellen      | I         | RA               |
| Level-2- und Level-3-Support für die Infrastruktur bereitstellen | I         | RA               |
| Probleme mit dem Kubernetes-Dienst beheben                | C         | RA               |
| Probleme mit Anwendungen beheben                          | RA        | I                |

### Kapazitätsmanagement und -entwicklung

| **Aktivität**                                          | **Kunde** | **Cloud Temple** |
| ------------------------------------------------------ | --------- | ---------------- |
| Überwachung der Kubernetes-Ressourcennutzung           | C         | RA               |
| Planung der Kapazitätserweiterung des Dienstes         | RA        | C                |
| Umsetzung der Kapazitätsanpassungen                    | I         | RA               |
| Verwaltung der Anwendungsentwicklung und ihrer Ressourcen | RA     | I                |

### Dokumentation und Compliance

| **Aktivität**                                     | **Kunde** | **Cloud Temple** |
| ------------------------------------------------ | ---------- | ---------------- |
| Kubernetes-Dokumentation pflegen                  | I          | RA               |
| Anwendungsdokumentation pflegen                   | RA         | I                |
| Compliance des Kubernetes-Dienstes gewährleisten  | I          | RA               |
| Compliance der Anwendungen gewährleisten          | RA         | I                |
| Audits des Kubernetes-Dienstes durchführen        | I          | RA               |
| Audits der Anwendungen durchführen                | RA         | I                |

### Verwaltung der Basis-Kubernetes-Operatoren/CRDs

| **Tätigkeit**                                                | **Kunde** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Bereitstellung des Standard-Operator-Katalogs               | CI         | RA               |
| Aktualisierung der Operatoren                                | CI         | RA               |
| Überwachung des Operator-Status                              | CI         | RA               |
| Fehlerbehebung bei Operatoren                                | CI         | RA               |
| Verwaltung der Operator-Berechtigungen                       | CI         | RA               |
| Verwaltung der Operator-Ressourcen (Hinzufügen/Entfernen)    | CI         | RA               |
| Sicherung der Operator-Ressourcendaten                       | CI         | RA               |
| Überwachung der Operator-Ressourcen                          | CI         | RA               |
| Wiederherstellung der Operator-Ressourcendaten               | CI         | RA               |
| Sicherheitsaudit der Operatoren                              | CI         | RA               |
| Support für Operatoren                                       | CI         | RA               |
| Lizenzverwaltung für Operatoren                              | CI         | RA               |
| Verwaltung spezifischer Supportverträge für Operatoren       | CI         | RA               |

* Operator-Paket auf Managed Kube enthalten - siehe Kapitel: Verwaltete Helm-Pakete

### Verwaltung von Kubernetes-Anwendungen/Operatoren/CRDs (Fachbereich)

| **Aktivität**                                                | **Kunde** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Bereitstellung der CRDs                                      | RA*        | I*               |
| Aktualisierung der Operatoren                                 | RA         | I                |
| Überwachung des Status der Operatoren                         | RA         | I                |
| Behebung von Problemen mit Operatoren                         | RA         | I                |
| Verwaltung der Berechtigungen der Operatoren                  | RA         | I                |
| Verwaltung der Ressourcen der Operatoren (Hinzufügen/Entfernen) | RA         | I                |
| Sicherung der Daten der Operatoren-Ressourcen                 | RA         | I                |
| Überwachung der Operator-Ressourcen                           | RA         | I                |
| Wiederherstellung der Daten der Operatoren-Ressourcen         | RA         | I                |
| Sicherheitsaudit der Operatoren                               | RA         | I                |
| Support für Operatoren                                        | RA         | I                |
| Verwaltung der Lizenzen für Operatoren                        | RA         | I                |
| Verwaltung spezifischer Supportverträge für Operatoren        | RA         | I                |

*Diese Verantwortlichkeiten können über einen zusätzlichen Managed-Services-Vertrag an Cloud Temple delegiert werden.

### Anwendungsunterstützung

| **Tätigkeit**                                | **Kunde** | **Cloud Temple** |
| ------------------------------------------- | --------- | ---------------- |
| Anwendungsunterstützung (externe Leistung)   | RA        | I                |

Eine Anwendungsunterstützung kann auch im Rahmen einer Zusatzleistung erbracht werden.

### RACI (Zusammenfassung)

- Cloud Temple : verantwortlich und ausführend (RA) für die Kubernetes-Basis, Cluster-Sicherheit, Infrastruktur-Backup, Monitoring.
- Kunde : verantwortlich und ausführend (RA) für die Anwendungsprojekte, Fachbereichsoperatoren, CI/CD-Pipelines, Anwendungssicherungen.
- Zone "grise" : Anpassungen und Erweiterungen (IAM, spezifische Operatoren, Härtung der Compliance/Sicherheit des Clusters) - im Projektmodus abgerechnet.