---
title: Verantwortlichkeitsmatrix - OpenShift Standard
slug: /contractual/paas/raci-ocp-standard
displayed_sidebar: docSidebar
---


Nachfolgend finden Sie die RACI-Matrix, die die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung des **OpenShift Standard**-Angebots definiert.

### Definition der verschiedenen Rollen

Hier werden die verschiedenen RACI-Rollen noch einmal erläutert:

| Rolle         | Beschreibung                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Verantwortlich | __R__ealisiert den Prozess                                                              |
| (A) Genehmigend | __A__nordnet die Genehmigung der Prozessdurchführung                                              |
| (C) Konsultiert | __K__onsultiert während des Prozesses                                                     |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses (über die Tools, das Portal oder die Nachrichten) |

### Initiale Einrichtung

| Aktivität                                                                                 | Kundenrolle | Cloud Temple Rolle |
| ---------------------------------------------------------------------------------------- | ----------- | ------------------ |
| Globale Architektur des OpenShift-Dienstes definieren                                    | C           | RA                 |
| OpenShift-Dienst dimensionieren (Anzahl der Knoten, Ressourcen)                          | C           | RA                 |
| OpenShift-Dienst mit Standardkonfiguration installieren                                  | I           | RA                 |
| Konfiguration des OpenShift-Dienstes                                                     | RA          | C                  |
| Basisnetzwerk des OpenShift-Dienstes konfigurieren                                       | I           | RA                 |
| Bereitstellung der initialen Identitäts- und Zugriffskonfiguration für OpenShift        | C           | RA                 |
| Skalierungs- und Hochverfügbarkeitsstrategie für die Infrastruktur festlegen             | C           | RA                 |

### Projekt- und Anwendungsmanagement

| Aktivität                                          | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------- | ----------- | ------------------ |
| OpenShift-Projekte erstellen und verwalten          | RA          | C                  |
| Anwendungen in OpenShift bereitstellen und verwalten | RA          | C                  |
| CI/CD-Pipelines konfigurieren                       | RA          | C                  |
| Container-Images und Container-Registries verwalten   | RA          | C                  |

### Wartung und Updates

| Aktivität                                         | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------- | ----------- | ------------------ |
| OpenShift-Dienst aktualisieren                    | RA          | I                  |
| Sicherheitspatches für OpenShift anwenden         | RA          | I                  |
| Bereitgestellte Anwendungen aktualisieren         | RA          | I                  |
| Updates von Container-Images verwalten            | RA          | I                  |

### Überwachung und Leistung

| Aktivität                                             | Kundenrolle | Cloud-Tempel-Rolle |
| ---------------------------------------------------- | ----------- | ------------------ |
| Leistung des OpenShift-Dienstes überwachen           | RA          | I                  |
| Leistung von Anwendungen überwachen                  | RA          | I                  |
| Warnungen des OpenShift-Dienstes verwalten           | RA          | I                  |
| Anwendungsbezogene Warnungen verwalten               | RA          | I                  |

### Sicherheit
| Aktivität                                                           | Kundenrolle | Cloud Temple-Rolle |
| ------------------------------------------------------------------ | ----------- | ------------------ |
| Sicherheit des OpenShift-Dienstes verwalten                        | RA          | I                  |
| Pod-Sicherheitsrichtlinien konfigurieren und verwalten             | RA          | C                  |
| SSL/TLS-Zertifikate für den OpenShift-Dienst verwalten             | RA          | I                  |
| SSL/TLS-Zertifikate für Anwendungen verwalten                      | RA          | C                  |
| Rollenbasierten Zugriff (RBAC) implementieren und verwalten        | RA          | I                  |

### Backup und Disaster Recovery

| Aktivität                                                              | Kundenrolle | Rolle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Backup-Strategie für den OpenShift-Dienst festlegen          | RA          | CI                |
| Backups für den OpenShift-Dienst implementieren und verwalten          | RA          | CI                |
| Backup-Strategie für Anwendungen festlegen          | RA          | CI                |
| Backups für Anwendungen implementieren und verwalten          | RA          | CI                |
| Disaster-Recovery-Verfahren für den Dienst testen          | RA          | CI                |
| Disaster-Recovery-Verfahren für Anwendungen testen          | RA          | CI                |

### Support und Fehlerbehebung

| Aktivität                                                         | Kundenrolle | Rolle Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Bereitstellung von Support der Stufe 1 für die Infrastruktur    | I           | RA                |
| Bereitstellung von Support der Stufe 2 und 3 für die Infrastruktur | I        | RA                |
| Behebung von Problemen im Zusammenhang mit dem OpenShift-Dienst  | RA          | C                 |
| Behebung von Problemen im Zusammenhang mit Anwendungen           | RA          | C                 |

### Kapazitätsmanagement und -entwicklung

| Aktivität                                                      | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Überwachung der Ressourcennutzung des OpenShift-Dienstes     | RA          | C                 |
| Planung der Kapazitätsentwicklung des Dienstes               | RA          | C                 |
| Implementierung von Kapazitätsanpassungen                    | I           | RA                |
| Verwaltung der Weiterentwicklung von Anwendungen und deren Ressourcen | RA          | C                 |

### Dokumentation und Compliance

| Aktivität                                                           | Kundenrolle | Cloud-Temple-Rolle |
| ------------------------------------------------------------------- | ----------- | ------------------ |
| Dokumentation des OpenShift-Dienstes pflegen                        | I           | RA                 |
| Dokumentation der Anwendungen pflegen                               | RA          | I                  |
| Einhaltung der Sicherheitsstandards durch den OpenShift-Dienst gewährleisten | RA          | C                  |
| Einhaltung der Sicherheitsstandards durch die Anwendungen gewährleisten | RA          | C                  |
| Audits des OpenShift-Dienstes durchführen                           | RA          | C                  |
| Audits der Anwendungen durchführen                                  | RA          | C                  |

### OpenShift-Operator-Verwaltung

**OpenShift-Operatoren** sind Dienst-Erweiterungen, die die Verwaltung komplexer Anwendungen oder Dienste auf Kubernetes/OpenShift automatisieren.

Im Rahmen des **OpenShift Standard**-Dienstes werden keine Einschränkungen für Operatoren angewendet. Lediglich die Bereitstellung der Funktion **OperatorHub** wird von **Cloud Temple** sichergestellt. Die Operatoren werden über den Katalog des Red Hat-Marktplatzes bereitgestellt. Die Installation, Überwachung und Verwaltung der Updates dieser Operatoren werden vom **Client** verwaltet.
Der **Client** ist für die Nutzung dieser Operatoren zur Verwaltung seiner Workloads verantwortlich.

| Activité                                                          | Rôle Client | Rôle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Bereitstellung des Standard-Operator-Katalogs           | CI          | RA                |
| Aktualisierung der Operatoren                                        | RA          | CI                |
| Überwachung des Operator-Status                             | RA          | CI                |
| Fehlerbehebung bei Operatoren                      | RA          | CI                |
| Verwaltung der Operator-Berechtigungen                          | RA          | CI                |
| Verwaltung der Operator-Ressourcen (Hinzufügen/Entfernen)         | RA          | CI                |
| Sicherung der Daten der Operator-Ressourcen              | RA          | CI                |
| Überwachung und Monitoring der Operator-Ressourcen               | RA          | CI                |
| Wiederherstellung der Daten der Operator-Ressourcen            | RA          | CI                |
| Sicherheitsaudit der Operatoren                                  | RA          | CI                |
| Support für Operatoren                                            | RA          | CI                |
| Verwaltung von Lizenzen und Lizenzverträgen für Operatoren   | RA          | I                 |
| Verwaltung spezifischer Supportpläne für Operatoren      | RA          | I                 |

> **Wichtiger Hinweis** :
>
> - Alle **Schäden**, die durch die Installation eines **Operators** oder durch eine **Client-Operation** verursacht werden, liegen in der Verantwortung des **Clients**.
> - Die Verwaltung der **Lizenzen** und **spezifischen Supportpläne** für Operatoren liegt nicht in der Verantwortung von **Cloud Temple**.

---

### Klarstellung zur Applikationsunterstützung

**Applikationsunterstützung (ergänzende Leistung):**

Die Applikationsunterstützung im Hinblick auf die Entwicklung, Konfiguration, Verwaltung und Wartung von Anwendungen **liegt nicht in der Verantwortung von Cloud Temple**. Der Leistungsumfang konzentriert sich ausschließlich auf die Verwaltung der **zugrunde liegenden Infrastruktur des OpenShift-Dienstes**. Die **Workload-Unterstützung**, **die Cluster-Verwaltung bis hin zum Betriebssystem**, **die Operator-Verwaltung** und die **CI/CD-Pipelines** liegen in der **Verantwortung des Kunden** oder eines **benannten Drittanbieters**, der mit dieser Aufgabe betraut ist.

| Aktivität                                           | Kundenrolle | Cloud-Temple-Rolle |
| -------------------------------------------------- | ----------- | ----------------- |
| Applikationsunterstützung (ergänzende Leistung) | RA          | C                 |