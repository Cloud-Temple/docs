---
title: PaaS-Verantwortungsmatrix - OpenShift SecNumCloud
displayed_sidebar: docSidebar
---


Dieses RACI-Modell definiert die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple für die Nutzung des PaaS OpenShift SecNumCloud.

## Definition der verschiedenen Rollen

Hier werden die verschiedenen RACI-Rollen noch einmal erläutert:

| Rolle         | Beschreibung                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Durchführt | __D__urchführt den Prozess                                                              |
| (A) Genehmigt | __G__enehmigt die Durchführung des Prozesses                                              |
| (C) Konsultiert | __K__onsultiert während des Prozesses                                                     |
| (I) Informiert | __I__nformiert über die Ergebnisse des Prozesses (über die Tools, das Portal oder die Messaging-Dienste) |

## Initiale Einrichtung

| Aktivität                                                             | Kundenrolle | Rolle Cloud Temple |
| -------------------------------------------------------------------- | ----------- | ------------------ |
| Gesamtarchitektur der OpenShift-Plattform definieren                 | C           | RA                 |
| OpenShift-Plattform dimensionieren (Anzahl der Knoten, Ressourcen)    | C           | RA                 |
| OpenShift-Plattform installieren und konfigurieren                    | I           | RA                 |
| Basisnetzwerk der OpenShift-Plattform konfigurieren                   | I           | RA                 |
| Identitäts- und Zugriffsmanagement für OpenShift einrichten           | C           | RA                 |
| Strategie für Skalierung und Hochverfügbarkeit definieren             | C           | RA                 |

## Projekt- und Anwendungsmanagement

| Aktivität                                          | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------- | ----------- | ------------------ |
| OpenShift-Projekte erstellen und verwalten        | RA          | C                  |
| Anwendungen in OpenShift bereitstellen und verwalten | RA       | C                  |
| CI/CD-Pipelines konfigurieren                     | RA          | C                  |
| Container-Images und -Registries verwalten        | RA          | C                  |

## Wartung und Updates

| Aktivität                                         | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------ | ----------- | ------------------ |
| OpenShift-Plattform aktualisieren                 | I           | RA                 |
| Sicherheitspatches für OpenShift anwenden         | I           | RA                 |
| Bereitgestellte Anwendungen aktualisieren          | RA          | I                  |
| Updates von Container-Images verwalten             | RA          | I                  |

## Überwachung und Performance

| Aktivität                                             | Rolle Kunde | Rolle Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Performance der OpenShift-Plattform überwachen | I           | RA                |
| Performance der Anwendungen überwachen           | RA          | I                 |
| Warnmeldungen der Plattform verwalten              | I           | RA                |
| Warnmeldungen der Anwendungen verwalten             | RA          | I                 |

## Sicherheit

| Aktivität                                                           | Rolle Kunde | Rolle Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ------------------ |
| Sicherheit der OpenShift-Plattform verwalten                       | I           | RA                 |
| Pod-Sicherheitsrichtlinien konfigurieren und verwalten             | RA          | C                  |
| SSL/TLS-Zertifikate für die Plattform verwalten                    | I           | RA                 |
| SSL/TLS-Zertifikate für Anwendungen verwalten                      | RA          | C                  |
| Rollenbasierten Zugriff (RBAC) implementieren und verwalten        | C           | RA                 |

## Sicherung und Wiederherstellung nach Störfällen

| Aktivität                                                              | Kundenrolle | Rolle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ------------------ |
| Sicherungsstrategie für die OpenShift-Plattform festlegen             | C           | RA                 |
| Sicherungen der Plattform implementieren und verwalten                | I           | RA                 |
| Sicherungsstrategie für Anwendungen festlegen                         | RA          | C                  |
| Sicherungen der Anwendungen implementieren und verwalten              | RA          | I                  |
| Wiederherstellungsverfahren nach Störfällen für die Plattform testen  | I           | RA                 |
| Wiederherstellungsverfahren nach Störfällen für Anwendungen testen    | RA          | C                  |

## Support und Fehlerbehebung

| Aktivität                                                         | Kundenrolle | Rolle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ------------------ |
| Bereitstellung von Level-1-Support für die OpenShift-Plattform   | I           | RA                 |
| Bereitstellung von Level-2- und Level-3-Support für die OpenShift-Plattform | I           | RA                 |
| Behebung von Problemen im Zusammenhang mit der Plattform          | I           | RA                 |
| Behebung von Problemen im Zusammenhang mit den Anwendungen        | RA          | C                  |

## Kapazitätsmanagement und -entwicklung

| Aktivität                                                 | Kundenrolle | Rolle Cloud Temple |
| -------------------------------------------------------- | ----------- | ------------------ |
| Überwachung der Plattformressourcennutzung               | I           | RA                 |
| Planung der Kapazitätsentwicklung der Plattform          | C           | RA                 |
| Implementierung von Kapazitätsänderungen                 | I           | RA                 |
| Verwaltung der Anwendungsentwicklung und ihrer Ressourcen| RA          | C                  |

## Dokumentation und Compliance

| Aktivität                                                      | Kundenrolle | Rolle Cloud Temple |
| ------------------------------------------------------------- | ----------- | ----------------- |
| Dokumentation der OpenShift-Plattform pflegen                 | I           | RA                |
| Dokumentation der Anwendungen pflegen                         | RA          | I                 |
| Einhaltung der Sicherheitsstandards durch die Plattform sicherstellen | I           | RA                |
| Einhaltung der Sicherheitsstandards durch die Anwendungen sicherstellen | RA          | C                 |
| Audits der Plattform durchführen                              | I           | RA                |
| Audits der Anwendungen durchführen                            | RA          | C                 |

### Verwaltung der OpenShift-Operatoren

Die **OpenShift-Operatoren** sind Plattform-Erweiterungen, die die Verwaltung komplexer Anwendungen oder Dienste auf Kubernetes automatisieren.

Es werden ausschließlich **Operatoren** aus den Katalogen **Zertifiziert, Red Hat und Marketplace** angeboten, sofern sie **den SecNumCloud-Anforderungen entsprechen** und die Einschränkungen des Ökosystems beachten.

Die Installation, Überwachung und Verwaltung der Updates dieser Operatoren werden von **Cloud Temple** übernommen, während der **Kunde** für die Nutzung dieser Operatoren zur Verwaltung seiner Workloads verantwortlich ist.

| Aktivität                                                        | Rolle Kunde | Rolle Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ------------------ |
| Bereitstellung der Operatoren im Katalog                        | CI          | RA                 |
| Erstkonfiguration der Operatoren über die Marketplace            | CI          | RA                 |
| Aktualisierung der Operatoren                                    | I           | RA                 |
| Überwachung des Status der Operatoren                            | I           | RA                 |
| Fehlerbehebung bei Operator-Problemen                            | CI          | RA                 |
| Verwaltung der Berechtigungen der Operatoren                     | C           | RA                 |
| Verwaltung der Ressourcen der Operatoren (Hinzufügen/Entfernen)  | CI          | RA                 |
| Sicherung der Daten der Operator-Ressourcen                      | CI          | RA                 |
| Überwachung und Monitoring der Operator-Ressourcen               | CI          | RA                 |
| Wiederherstellung der Daten der Operator-Ressourcen              | CI          | RA                 |
| Sicherheitsaudit der Operatoren                                  | I           | RA                 |
| Support für Red Hat-Operatoren                                   | I           | RA                 |
| Support für zertifizierte Operatoren                             | I           | RA                 |
| Support für Marketplace-Operatoren                               | I           | RA                 |
| Verwaltung von Lizenzen und Lizenzverträgen für Operatoren       | RA          | I                  |
| Verwaltung spezifischer Supportpläne für Operatoren              | RA          | I                  |

> **Wichtiger Hinweis**:
> Es werden ausschließlich Operatoren bereitgestellt, die von Cloud Temple als **unterstützt deklariert** wurden und **SecNumCloud-konform** sind. Jeder nicht zertifizierte Operator oder Operator aus externen Quellen wird weder unterstützt noch für die Nutzung in den Umgebungen freigegeben.
> Die Verwaltung der **Lizenzen** und **spezifischen Supportpläne** für Operatoren aus dem Katalog **MarketPlace Red Hat** liegt nicht in der Verantwortung von **Cloud Temple**. Die Verwaltung des Supports für diese Operatoren wird de facto an den Dienstleister-Partner delegiert.
---

### Erläuterung zur Anwendungsunterstützung

**Anwendungsunterstützung (Zusatzleistung) :**

Die Anwendungsunterstützung im Zusammenhang mit der Entwicklung, Konfiguration, Verwaltung und Wartung von Anwendungen **liegt nicht in der Verantwortung von Cloud Temple**. Der Umfang konzentriert sich ausschließlich auf das Management der OpenShift-Infrastruktur und der Operatoren. Die **Unterstützung der Workloads** (bereitgestellte Anwendungen) und der CI/CD-Pipelines liegt in der Verantwortung des Kunden oder eines dafür beauftragten Drittanbieters.

| Aktivität | Kundenrolle | Rolle Cloud Temple |
| --- | --- | --- |
| Anwendungsunterstützung (Zusatzleistung) | RA | C |