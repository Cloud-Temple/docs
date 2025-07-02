---
title: RACI-Matrix für PaaS – OpenShift SecNumCloud
---

Hier ist das RACI-Modell, das die Verantwortungsverteilung zwischen dem Kunden und Cloud Temple bei der Nutzung des PaaS OpenShift SecNumCloud definiert.

## Definition der verschiedenen Rollen

Wir erinnern hier an die verschiedenen Rollen des RACI:

| Rolle        | Beschreibung                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realisiert | __R__ealisiert den Prozess                                                              |
| (A) Genehmigt | __A__ntrag zur Genehmigung der Durchführung des Prozesses                                              |
| (C) Konsultiert | __C__onsultiert während des Prozesses                                                     |
| (I) Informiert  | __I__nformiert über die Ergebnisse des Prozesses (über das Werkzeug, das Portal oder die Nachrichtenübermittlung) |

## Ersteinrichtung

| Aktivität                                                             | Kundenrolle | Cloud Temple-Rolle |
| -------------------------------------------------------------------- | ----------- | ------------------ |
| Die globale Architektur der OpenShift-Plattform definieren            | C           | RA                 |
| Die OpenShift-Plattform dimensionieren (Anzahl der Knoten, Ressourcen) | C           | RA                 |
| Die OpenShift-Plattform installieren und konfigurieren                | I           | RA                 |
| Das Basisnetzwerk der OpenShift-Plattform konfigurieren              | I           | RA                 |
| Die Identitäts- und Zugriffsverwaltung für OpenShift einrichten       | C           | RA                 |
| Die Skalierungs- und Hochverfügbarkeitsstrategie definieren           | C           | RA                 |

## Projekt- und Anwendungsverwaltung

| Aktivität                                         | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------- | ----------- | ------------------ |
| Projekte in OpenShift erstellen und verwalten     | RA          | C                  |
| Anwendungen in OpenShift bereitstellen und verwalten | RA          | C                  |
| CI/CD-Pipelines konfigurieren                     | RA          | C                  |
| Containerimages und Registrierungen verwalten     | RA          | C                  |

## Wartung und Updates

| Aktivität                                        | Client-Rolle | Cloud Temple-Rolle |
| ------------------------------------------------ | ------------ | ------------------ |
| OpenShift-Plattform aktualisieren                | I            | RA                 |
| Sicherheitspatches für OpenShift anwenden        | I            | RA                 |
| Bereitgestellte Anwendungen aktualisieren       | RA           | I                  |
| Container-Images-Updates verwalten              | RA           | I                  |

## Überwachung und Leistung

| Aktivität                                             | Rolle Client | Rolle Cloud Temple |
| ---------------------------------------------------- | ------------ | ------------------ |
| Überwachen der Leistung der OpenShift-Plattform       | I            | RA                 |
| Überwachen der Leistung der Anwendungen               | RA           | I                  |
| Benachrichtigungen zur Plattform verwalten            | I            | RA                 |
| Benachrichtigungen zu Anwendungen verwalten          | RA           | I                  |

## Sicherheit

| Aktivität                                                          | Kundenrolle | Cloud-Temple-Rolle |
| ------------------------------------------------------------------ | ----------- | ------------------ |
| Die Sicherheit der OpenShift-Plattform verwalten                   | I           | RA                 |
| Konfigurieren und Verwalten der Sicherheitsrichtlinien für Pods    | RA          | C                  |
| Die SSL/TLS-Zertifikate für die Plattform verwalten                 | I           | RA                 |
| Die SSL/TLS-Zertifikate für Anwendungen verwalten                  | RA          | C                  |
| Implementieren und Verwalten des rollenbasierten Zugriffssteuerungs (RBAC) | C           | RA                 |

## Datensicherung und Notwiederherstellung

| Aktivität                                                             | Kundenrolle | Cloud Temple-Rolle |
| --------------------------------------------------------------------- | ----------- | ------------------ |
| Strategie für die Datensicherung der OpenShift-Plattform definieren    | C           | RA                 |
| Datensicherungen der Plattform implementieren und verwalten           | I           | RA                 |
| Strategie für die Datensicherung der Anwendungen definieren           | RA          | C                  |
| Datensicherungen der Anwendungen implementieren und verwalten         | RA          | I                  |
| Testen der Notwiederherstellungsverfahren für die Plattform            | I           | RA                 |
| Testen der Notwiederherstellungsverfahren für die Anwendungen         | RA          | C                  |

## Support und Problembehebung

| Aktivität                                                        | Kundenrolle | Cloud Temple-Rolle |
| ---------------------------------------------------------------- | ----------- | ------------------ |
| Support auf Level 1 für die OpenShift-Plattform bereitstellen     | I           | RA                 |
| Support auf Level 2 und 3 für die OpenShift-Plattform bereitstellen | I           | RA                 |
| Probleme im Zusammenhang mit der Plattform lösen                 | I           | RA                 |
| Probleme im Zusammenhang mit Anwendungen lösen                  | RA          | C                  |

## Kapazitäts- und Skalierungsverwaltung

| Aktivität                                                | Kundenrolle | Cloud Temple-Rolle |
| -------------------------------------------------------- | ----------- | ------------------ |
| Ressourcennutzung der Plattform überwachen               | I           | RA                 |
| Skalierung der Plattform planen                           | C           | RA                 |
| Kapazitätsänderungen implementieren                       | I           | RA                 |
| Anwendungsentwicklung und deren Ressourcen verwalten     | RA          | C                  |

## Dokumentation und Compliance

| Aktivität                                                      | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------------------- | ----------- | ----------------- |
| Dokumentation der OpenShift-Plattform pflegen         | I           | RA                |
| Dokumentation der Anwendungen pflegen                   | RA          | I                 |
| Sicherstellung der Plattformkonformität mit Sicherheitsstandards | I           | RA                |
| Sicherstellung der Anwendungsconformität mit Sicherheitsstandards | RA          | C                 |
| Durchführung von Plattform-Überprüfungen                          | I           | RA                |
| Durchführung von Anwendungs-Überprüfungen                          | RA          | C                 |

### Verwaltung der OpenShift-Operatoren

Die **OpenShift-Operatoren** sind Erweiterungen der Plattform, die die Automatisierung der Verwaltung komplexer Anwendungen oder Dienste auf Kubernetes ermöglichen.

Nur die **Operatoren** aus den Katalogen **Zertifiziert, Red Hat und MarketPlace** werden angeboten, vorausgesetzt, sie sind **mit den Anforderungen der SecNumCloud kompatibel** und entsprechen den Beschränkungen des Ökosystems.

Die Installation, Überwachung und Verwaltung von Updates dieser Operatoren wird durch **Cloud Temple** geregelt, während der **Kunde** für die Nutzung dieser Operatoren zur Verwaltung seiner Workloads verantwortlich ist.

| Aktivität                                                       | Rolle Kunde | Rolle Cloud Temple |
| --------------------------------------------------------------- | ----------- | ------------------ |
| Bereitstellung der Operatoren im Katalog                        | CI          | RA                 |
| Erstkonfiguration der Operatoren über die Marketplace           | CI          | RA                 |
| Aktualisierung der Operatoren                                  | I           | RA                 |
| Überwachung des Zustands der Operatoren                        | I           | RA                 |
| Behebung von Problemen im Zusammenhang mit Operatoren          | CI          | RA                 |
| Verwaltung der Berechtigungen der Operatoren                   | C           | RA                 |
| Verwaltung der Ressourcen der Operatoren (Hinzufügen/Entfernen) | CI          | RA                 |
| Sicherung der Daten der Ressourcen der Operatoren              | CI          | RA                 |
| Überwachung und Monitoring der Ressourcen der Operatoren        | CI          | RA                 |
| Wiederherstellung der Daten der Ressourcen der Operatoren       | CI          | RA                 |
| Sicherheitsaudit der Operatoren                                | I           | RA                 |
| Support der Red Hat-Operatoren                                | I           | RA                 |
| Support der zertifizierten Operatoren                         | I           | RA                 |
| Support der MarketPlace-Operatoren                            | I           | RA                 |
| Verwaltung von Lizenzen und Lizenzverträgen für Operatoren     | RA          | I                  |
| Verwaltung spezifischer Supportpläne für Operatoren            | RA          | I                  |

> **Wichtiger Hinweis**:
> Nur die **offiziell unterstützten** Operatoren durch Cloud Temple und mit **SecNumCloud** kompatibel sind verfügbar. Jeder nicht zertifizierte Operator oder ein Operator aus einer externen Quelle wird nicht unterstützt und nicht für die Nutzung in Umgebungen zugelassen.
> Die Verwaltung von **Lizenzen** und **spezifischen Supportplänen** für Operatoren aus dem **Red Hat MarketPlace**-Katalog liegt nicht in der Verantwortung von **Cloud Temple**. Die Unterstützung dieser Operatoren wird de facto dem Partner übertragen, der den Dienst bereitstellt.

### Klarstellung zur Anwendungsunterstützung

**Anwendungsunterstützung (ergänzende Leistung):**

Die Anwendungsunterstützung im Bereich Entwicklung, Konfiguration, Betrieb und Wartung von Anwendungen **liegt nicht in der Verantwortung von Cloud Temple**. Der Umfang beschränkt sich ausschließlich auf die Verwaltung der OpenShift-Infrastruktur und der Operatoren. Der **Support der Workloads** (bereitgestellten Anwendungen) und der CI/CD-Pipelines liegt in der Verantwortung des Kunden oder eines von diesem beauftragten Drittanbieters.

| Aktivität | Kundenrolle | Rolle Cloud Temple |
| --- | --- | --- |
| Anwendungsunterstützung (ergänzende Leistung) | RA | C |