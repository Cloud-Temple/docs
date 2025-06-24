---
title: Verantwortlichkeitsmatrix – OpenShift Standard
---

Hier ist das RACI-Modell, das die Aufgabenteilung zwischen dem Kunden und Cloud Temple bei der Nutzung des Angebots **OpenShift Standard** definiert.

### Definition der verschiedenen Rollen

Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realisiert | __R__ealisiert den Prozess                                                              |
| (A) Genehmigt | __A__ngenommen die Durchführung des Prozesses                                              |
| (C) Berät    | __C__onsultiert während des Prozesses                                                     |
| (I) Wird informiert | __I__nformiert über die Ergebnisse des Prozesses (über das Werkzeug, das Portal oder die Nachrichtenübermittlung) |

### Ersteinrichtung

| Aktivität                                                                                 | Rolle Kunde | Rolle Cloud Temple |
| ---------------------------------------------------------------------------------------- | ----------- | ------------------ |
| Die globale Architektur des OpenShift-Dienstes definieren                                 | C           | RA                 |
| Die Größe des OpenShift-Dienstes bestimmen                                               | C           | RA                 |
| Den OpenShift-Dienst mit einer Standardkonfiguration installieren                        | I           | RA                 |
| Konfiguration des OpenShift-Dienstes                                                     | RA          | C                  |
| Das grundlegende Netzwerk des OpenShift-Dienstes konfigurieren                           | I           | RA                 |
| Bereitstellung der Anfangskonfiguration für Identitäten und Zugriffe für OpenShift       | C           | RA                 |
| Die Skalierungs- und Hochverfügbarkeitsstrategie auf der Infrastruktur definieren         | C           | RA                 |

### Projekt- und Anwendungsverwaltung

| Aktivität                                         | Rolle Client | Rolle Cloud Temple |
| ------------------------------------------------- | ------------ | ------------------ |
| OpenShift-Projekte erstellen und verwalten         | RA           | C                  |
| Anwendungen in OpenShift bereitstellen und verwalten | RA           | C                  |
| CI/CD-Pipelines konfigurieren                     | RA           | C                  |
| Containerimages und Registrierungen verwalten     | RA           | C                  |

### Wartung und Updates

| Aktivität                                        | Kundenrolle | Cloud Temple-Rolle |
| ------------------------------------------------ | ----------- | ------------------ |
| Service OpenShift aktualisieren                  | RA          | I                  |
| Sicherheitspatches für OpenShift anwenden        | RA          | I                  |
| Bereitgestellte Anwendungen aktualisieren        | RA          | I                  |
| Container-Images-Updates verwalten              | RA          | I                  |

### Überwachung und Leistung

| Aktivität                                             | Rolle Client | Rolle Cloud Temple |
| ---------------------------------------------------- | ------------ | ------------------ |
| Überwachen der Leistung des OpenShift-Dienstes       | RA           | I                  |
| Überwachen der Leistung der Anwendungen              | RA           | I                  |
| Benachrichtigungen im Zusammenhang mit dem OpenShift-Dienst verwalten | RA           | I                  |
| Benachrichtigungen im Zusammenhang mit den Anwendungen verwalten | RA           | I                  |

### Sicherheit

| Aktivität                                                          | Kundenrolle | Cloud Temple-Rolle |
| ------------------------------------------------------------------ | ----------- | ------------------ |
| Die Sicherheit des OpenShift-Dienstes verwalten                    | RA          | I                  |
| Konfigurieren und Verwalten der Sicherheitsrichtlinien für Pods    | RA          | C                  |
| Verwalten der SSL/TLS-Zertifikate für den OpenShift-Dienst         | RA          | I                  |
| Verwalten der SSL/TLS-Zertifikate für Anwendungen                 | RA          | C                  |
| Implementieren und Verwalten der rollenbasierten Zugriffssteuerung (RBAC) | RA | I |

### Backup und Notfallwiederherstellung

| Aktivität                                                              | Rolle Kunde | Rolle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Die Backup-Strategie für den OpenShift-Dienst definieren          | RA          | CI                |
| Die Backup-Implementierung und -verwaltung des OpenShift-Diensts durchführen         | RA          | CI                |
| Die Backup-Strategie für Anwendungen definieren              | RA          | CI                |
| Die Backup-Implementierung und -verwaltung der Anwendungen durchführen             | RA          | CI                |
| Die Notfallwiederherstellungsverfahren für den Dienst testen       | RA          | CI                |
| Die Notfallwiederherstellungsverfahren für Anwendungen testen | RA          | CI                |

### Support und Problembehebung

| Aktivität                                                         | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------- | ----------- | ------------------ |
| Support auf Level 1 für die Infrastruktur                         | I           | RA                 |
| Support auf Level 2 und 3 für die Infrastruktur                   | I           | RA                 |
| Probleme im Zusammenhang mit dem OpenShift-Dienst lösen           | RA          | C                  |
| Probleme im Zusammenhang mit Anwendungen lösen                    | RA          | C                  |

### Kapazitäten und Entwicklung verwalten

| Aktivität                                                    | Rolle Client | Rolle Cloud Temple |
| ------------------------------------------------------------ | ------------ | ------------------ |
| Überwachen der Nutzung der Ressourcen des OpenShift-Diensts  | RA           | C                  |
| Planen der Entwicklung der Kapazitäten des Diensts           | RA           | C                  |
| Implementieren der Kapazitätsänderungen                      | I            | RA                 |
| Verwalten der Entwicklung der Anwendungen und ihrer Ressourcen | RA           | C                  |

### Dokumentation und Compliance

| Aktivität                                                         | Rolle Kunde | Rolle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ------------------ |
| Dokumentation des OpenShift-Services pflegen                      | I           | RA                 |
| Dokumentation der Anwendungen pflegen                             | RA          | I                  |
| Sicherstellung der Konformität des OpenShift-Services mit Sicherheitsstandards | RA          | C                  |
| Sicherstellung der Konformität der Anwendungen mit Sicherheitsstandards     | RA          | C                  |
| Durchführung von Audits des OpenShift-Services                    | RA          | C                  |
| Durchführung von Audits der Anwendungen                           | RA          | C                  |

### Verwaltung der OpenShift-Operatoren

Die **OpenShift-Operatoren** sind Erweiterungen des Dienstes, die die Automatisierung der Verwaltung komplexer Anwendungen oder Dienste auf Kubernetes/OpenShift ermöglichen.

Im Rahmen des Dienstes **OpenShift Standard** gelten keine Einschränkungen für Operatoren. Nur die Bereitstellung der Funktion **OperatorHub** wird durch **Cloud Temple** sichergestellt. Die Operatoren werden über den Red Hat-Marketplace-Katalog bereitgestellt. Die Installation, Überwachung und Verwaltung von Updates dieser Operatoren erfolgt durch den **Kunden**. Der **Kunde** ist für die Nutzung dieser Operatoren zur Verwaltung seiner Workloads verantwortlich.

| Aktivität                                                         | Rolle Kunde | Rolle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ------------------ |
| Bereitstellung des Standard-Operator-Katalogs                    | CI          | RA                 |
| Aktualisierung der Operatoren                                   | RA          | CI                 |
| Überwachung des Zustands der Operatoren                         | RA          | CI                 |
| Behebung von Problemen im Zusammenhang mit Operatoren           | RA          | CI                 |
| Verwaltung der Berechtigungen der Operatoren                    | RA          | CI                 |
| Verwaltung der Ressourcen der Operatoren (Hinzufügen/Entfernen)  | RA          | CI                 |
| Sicherung der Daten der Ressourcen der Operatoren               | RA          | CI                 |
| Überwachung und Monitoring der Ressourcen der Operatoren        | RA          | CI                 |
| Wiederherstellung der Daten der Ressourcen der Operatoren        | RA          | CI                 |
| Sicherheitsaudit der Operatoren                                 | RA          | CI                 |
| Support für Operatoren                                          | RA          | CI                 |
| Verwaltung von Lizenzen und Lizenzverträgen für Operatoren      | RA          | I                  |
| Verwaltung spezieller Supportpläne für Operatoren               | RA          | I                  |

> **Wichtiger Hinweis**:
>
> - Jeder **Schaden**, der durch die Installation eines **Operators** oder aufgrund einer **Kundenaktion** entsteht, ist die Verantwortung des **Kunden**.
> - Die Verwaltung von **Lizenzen** und **speziellen Supportplänen** für Operatoren liegt nicht in der Verantwortung von **Cloud Temple**.

### Klarstellung zur Anwendungsunterstützung

**Anwendungsunterstützung (ergänzende Leistung):**

Die Anwendungsunterstützung im Bereich Entwicklung, Konfiguration, Verwaltung und Wartung von Anwendungen **liegt nicht in der Verantwortung von Cloud Temple**. Der Umfang beschränkt sich ausschließlich auf die Verwaltung der **unterliegenden Infrastruktur des OpenShift-Dienstes**. Die **Unterstützung der Workloads**, **die Verwaltung des Clusters bis zum Betriebssystem**, **die Verwaltung der Operatoren** und die **CI/CD-Pipelines** sind **Verantwortung des Kunden** oder eines **von diesem beauftragten Drittanbieters**.

| Aktivität                                           | Kundenrolle | Cloud Temple-Rolle |
| -------------------------------------------------- | ----------- | ----------------- |
| Anwendungsunterstützung (ergänzende Leistung) | RA          | C                 |