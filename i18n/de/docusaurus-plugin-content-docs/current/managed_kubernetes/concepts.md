---
title: Konzepte
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Unsere Managed-Kubernetes-Angebote

Cloud Temple bietet zwei verschiedene Angebote an, um Ihren Anforderungen an die Container-Orchestrierung gerecht zu werden:

- **Managed Core Kubernetes** : Ein minimalistisches Produkt, das Ihnen eine robuste und sichere Kubernetes-Basis bereitstellt, die auf modernsten Open-Source-Komponenten basiert. Es ist ideal für erfahrene Teams, die ihre eigene maßgeschneiderte Plattform aufbauen möchten.
- **Managed Kubernetes** : Eine vollständige und sofort einsatzbereite Lösung, die einen umfassenden Toolstack für Netzwerk, Sicherheit, Speicher, Continuous Deployment, Observability, Backup und Kostenmanagement umfasst.

### Vergleichstabelle der Angebote

| Komponente | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **Betriebssystem** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **CNI-Beobachtung** | ❌ | Hubble |
| **Load Balancer** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Speicher** | Rook-Ceph | Rook-Ceph |
| **Kontinuierliche Bereitstellung (GitOps)** | ❌ | ArgoCD |
| **Observability** | ❌ | Prometheus, Grafana, Loki |
| **Sicherung und Migration** | ❌ | Veeam Kasten |
| **Kostenmanagement (FinOps)** | ❌ | OpenCost |
| **Governance und Sicherheit**| ❌ | Kyverno, Capsule |
| **Container Registry**| ❌ | Harbor |
| **Zertifikatsverwaltung**| ❌ | Cert-Manager |
| **SSO-Authentifizierung**| ❌ | OIDC-Anbindung |

## Vorstellung des Managed Kubernetes-Produkts (vollständig)

Das **Managed Kubernetes**-Angebot (auch „Kub Managé“ oder „KM“ genannt) ist eine von Cloud-Temple verwaltete Kubernetes-Containerisierungslösung, die als Virtuelle Maschinen auf den Cloud-Temple OpenIaaS IaaS-Infrastrukturen bereitgestellt wird.

**Managed Kubernetes** basiert auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem Kubernetes-spezifischen Betriebssystem, das leichtgewichtig und sicher ist. Es ist immutable, verfügt über keine Shell und keinen SSH-Zugriff und wird ausschließlich deklarativ über die gRPC-API konfiguriert.

Die standardisierte Installation umfasst eine Reihe von Komponenten, die größtenteils Open Source sind und vom CNCF validiert wurden:

- **CNI Cilium** mit Observability-Schnittstelle (**Hubble**): Cilium ist eine Container-Netzwerk-Lösung für Kubernetes (*Container Network Interface*). Es verwaltet Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung usw. Es handelt sich um eine grundlegende Netzwerkkomponente, die in den meisten Kubernetes-Distributionen (OpenShift, AKS, GKE, EKS, ...) zu finden ist. Wir haben die grafische Oberfläche **Hubble** integriert, um Cilium-Flüsse zu visualisieren.

    <img src={cillium} />

- **MetalLB** und **nginx**: Zur Bereitstellung von Webanwendungen sind standardmäßig drei *Ingress-Class*-Konfigurationen für **nginx** integriert:
  - *nginx-external-secured*: Bereitstellung über eine öffentliche IP, gefiltert über die Firewall, um nur bekannten IPs den Zugriff zu erlauben (wird für die grafischen Oberflächen der verschiedenen Produkte und die Kubernetes-API verwendet)
  - *nginx-external*: Bereitstellung über eine zweite, nicht gefilterte öffentliche IP (oder kundenspezifische Filterung)
  - *nginx-internal*: Bereitstellung ausschließlich über eine interne IP

    Für „nicht-Web“-Dienste ermöglicht ein **MetalLB**-Load-Balancer die Bereitstellung von Diensten intern oder über öffentliche IPs. (Dies ermöglicht die Bereitstellung weiterer Ingresses, wie beispielsweise eines WAF)

- **Verteilter Speicher Rook-Ceph**: Für die Speicherung persistenter Volumes (PV) ist eine Open-Source-**Ceph**-Speicherlösung in die Plattform integriert. Sie ermöglicht die Nutzung der *Storage Classes* *ceph-block*, *ceph-bucket* und *ceph-filesystem*. Es wird ein Speicher mit **7500 IOPS** eingesetzt, der hohe Leistung ermöglicht. Bei Produktionsbereitstellungen (über 3 AZ) sind die Speicherknoten dediziert (1 Knoten pro AZ); bei Nicht-Produktionsbereitstellungen (1 AZ) wird der Speicher mit den Worker Nodes geteilt.

- **Cert-Manager**: Der Open-Source-Zertifikatsmanager **Cert-Manager** ist nativ in die Plattform integriert.

- **ArgoCD** steht Ihnen für Ihre automatisierten Bereitstellungen über eine **CI/CD**-Pipeline zur Verfügung.

- **Prometheus**-Stack (Prometheus, Grafana, Loki): Managed-Kubernetes-Cluster werden standardmäßig mit einem vollständigen Open-Source-**Prometheus**-Stack für die Observability ausgeliefert, einschließlich:
  - **Prometheus**
  - **Grafana** mit zahlreichen Dashboards
  - **Loki**: Die Plattform-Logs werden in den Cloud-Temple S3-Speicher exportiert (und in Grafana integriert).

    <img src={grafana} />

- **Harbor** ist eine **Container Registry**, mit der Sie Container-Images oder Helm Charts direkt im Cluster speichern können. Sie führt **Vulnerability Scans** für Ihre Images durch und kann diese digital signieren. **Harbor** ermöglicht zudem Synchronisierungen mit anderen Registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) ist ein Kostenmanagement-Tool (FinOps) für Kubernetes. Es ermöglicht Ihnen, den Ressourcenverbrauch von Kubernetes genau zu verfolgen und eine detaillierte Kostenabrechnung (Chargeback/Showback) pro Projekt/Namespace durchzuführen.

- Erweiterte Sicherheitsstrategien mit **Kyverno** und **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) ist ein Admission Controller für Kubernetes, der die Durchsetzung von Richtlinien ermöglicht. Es ist ein essentielles Tool für Governance und Sicherheit in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) ist ein Berechtigungsverwaltungstool, das das Rechte-Management in Kubernetes erleichtert. Es führt den Begriff des *Tenants* ein, der die Zentralisierung und Delegation von Berechtigungen über mehrere Namespaces hinweg ermöglicht. Über **Capsule** verfügen die Nutzer der Managed-Kubernetes-Plattform daher über auf ihre jeweiligen Namespaces beschränkte Rechte.

- **Veeam Kasten** (auch „k10“) ist eine Lösung zum **Backup** von Kubernetes-Workloads.

    Es ermöglicht das Backup einer vollständigen Bereitstellung: Manifests, Volumes usw. in den Cloud-Temple S3-Objektspeicher. **Kasten** nutzt **Kanister**, um konsistente Anwendungsbackups zu ermöglichen, beispielsweise für Datenbanken ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** ist ein plattformübergreifendes Tool, das mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler, ...) arbeiten kann. Es kann daher für Szenarien zur Reversibilität oder Migration eingesetzt werden (K10 verwaltet eventuelle Anpassungen über *Transformationen*, z. B. einen Wechsel der Ingress-Class), sowie für „Refresh“-Szenarien (Beispiel: geplante Wiederherstellung einer Produktionsumgebung in einer Pre-Production-Umgebung).

- **SSO-Authentifizierung** über einen externen OIDC-Identity-Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA & Supportinformationen

- **Garantierte Verfügbarkeit (production 3 AZ)** : 99.90 %
- **Support** : N1/N2/N3 inclus pour le périmètre socle (infrastructure et opérateurs standards).
- **Zusage zur Wiederherstellungszeit (ETR)** : gemäß Rahmenvertrag Cloud Temple.
- **Wartung (MCO)** : regelmäßiges Patchen von Talos / Kubernetes / opérateurs standards par MSP, sans interruption de service (rolling upgrade).

Die Reaktions- und Wiederherstellungszeiten hängen von der Schwere des Vorfalls ab, gemäß der Support-Matrix (P1 à P4).

## Versionsrichtlinie & Lebenszyklus

- **Unterstütztes Kubernetes:** N-2 (3 Major-Releases pro Jahr, ca. alle 4 Monate). Jedes Release wird offiziell 12 Monate unterstützt, was ein Support-Fenster von maximal ~16 Monaten pro Version für Cloud Temple gewährleistet.
- **Talos OS:** ausgerichtet auf die stabilen Kubernetes-Versionen.
  - Jede Branch wird ca. 12 Monate gewartet (inkl. Sicherheits-Patches).
  - Empfohlener Upgrade-Rhythmus: 3 Mal pro Jahr, konsistent mit den Kubernetes-Upgrades.
  - Kritische Patches (CVE, Kernel) werden im Rolling-Upgrade angewendet, ohne Dienstunterbrechung.
- **Standard-Operatoren:** werden innerhalb von 90 Tagen nach stabilem Release aktualisiert.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): geplant 3 Mal/Jahr, im Rolling-Update.
  - **Minor:** automatisch innerhalb von 30 bis 60 Tagen angewendet.
- **Deprecation:** Version N-3 → Supportende innerhalb von 90 Tagen nach Veröffentlichung von N.

## Kubernetes-Knoten

### Produktion (multi-zonal)

<img src={archi_overview} />

Für eine „Produktions“-Bereitstellung (multi-zonal) werden die folgenden Maschinen verwendet:

| **AZ**  | **Instanz**   | **vCores** | **RAM** | **Lokaler Speicher**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 Go | OS: 64 Go  |
| AZ05  | Control Plane 1   | 8  | 12 Go | OS: 64 Go  |
| AZ06  | Control Plane 2   | 8  | 12 Go | OS: 64 Go  |
| AZ07  | Control Plane 3   | 8  | 12 Go | OS: 64 Go  |
| AZ05  | Storage Node 1    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go minimum (*) |
| AZ06  | Storage Node 2    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go minimum (*)|
| AZ07  | Storage Node 3    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go minimum (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 Go | OS: 64 Go |
| AZ06  | Worker Node 2 (**)   | 12 | 24 Go | OS: 64 Go |
| AZ07  | Worker Node 3 (**)   | 12 | 24 Go | OS: 64 Go |

(*) : Jeder Storage-Knoten wird mit mindestens 500 GB Festplattenspeicher ausgeliefert, um einen nutzbaren verteilten Ceph-Speicher von 500 GB zu gewährleisten (die Daten werden in jeder AZ repliziert, also x3). Der für den Kunden verfügbare freie Speicherplatz beträgt ca. 350 GB. Diese initiale Größe kann bei der Erstellung oder später je nach Bedarf erweitert werden. Auf Ceph werden Quotas angewendet, mit einer Aufteilung in Block/File.

(**) : Größe und Anzahl der Worker Nodes können an den Rechenkapazitätsbedarf des Kunden angepasst werden. Die Mindestanzahl an Worker Nodes beträgt 3 (1 pro AZ). Wir empfehlen, die Anzahl in Schritten von 3 zu erhöhen, um eine konsistente multi-zonale Verteilung beizubehalten. Die Größe der Worker Nodes kann angepasst werden, wobei ein Minimum von 12 Cores und 24 GB RAM gilt; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisor-Blades festgelegt (also potenziell 112 Cores/1536 GB RAM mit Performance 3-Blades). Die Anzahl der Worker Nodes ist auf 100 begrenzt. Das CNCF empfiehlt Worker Nodes mit identischer Größe. Die Obergrenze für die Anzahl der Pods pro Worker Node beträgt 110.

### Dev/Test

<img src={archi_overview_1az} />

Für eine "Dev/Test"-Version werden die folgenden Maschinen bereitgestellt:

| **AZ**  | **Maschine**   | **vCores** | **RAM** | **Lokaler Speicher**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 Go | OS: 30 Go  |
| AZ0n  | Control Plane    | 8  | 12 Go | OS: 64 Go  |
| AZ0n  | Worker Node 1 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go minimum (*) |
| AZ0n  | Worker Node 2 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go minimum (*) |
| AZ0n  | Worker Node 3 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go minimum (*) |

(*) : 3 Worker Nodes werden als Storage Nodes verwendet und mit mindestens 300 GB Speicherplatz bereitgestellt, was einem nutzbaren verteilten Speicher von 300 GB entspricht (die Daten werden dreifach repliziert). Der für den Kunden verfügbare freie Speicher beträgt ca. 150 GB. Diese initiale Größe kann bei der Bereitstellung oder später je nach Bedarf erweitert werden.

(**) : Die Größe und Anzahl der Worker Nodes kann an den Rechenkapazitätsbedarf des Kunden angepasst werden. Die Mindestanzahl an Worker Nodes beträgt 3 (aufgrund der Speicherreplikation). Die Größe der Worker Nodes kann angepasst werden, mit einem Minimum von 12 Cores und 24 GB RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisor-Hosts festgelegt (also potenziell 112 Cores/1536 GB RAM mit Performance 3 Blades). Die Anzahl der Worker Nodes ist auf 250 begrenzt. Das CNCF empfiehlt, Worker Nodes mit identischer Größe zu verwenden. Die Obergrenze für die Anzahl der Pods pro Worker Node beträgt 110.

## RACI

### Architektur & Infrastruktur

| **Aufgabe**                                                                 | **Client** | **Cloud Temple** |
|---|---|---|
| Globale Architektur des Kubernetes-Dienstes definieren                         | C          | RA                     |
| Kubernetes-Dienst dimensionieren (Anzahl der Knoten, Ressourcen)            | C          | RA                     |
| Kubernetes-Dienst mit Standardkonfiguration installieren            | I          | RA                     |
| Konfiguration des Kubernetes-Dienstes                                          | C          | RA                     |
| Basisnetzwerk des Kubernetes-Dienstes konfigurieren                           | I          | RA                     |
| Bereitstellung der initialen Konfiguration für Identitäten und Zugriffe          | C          | RA                     |
| Strategie für Skalierung und Hochverfügbarkeit definieren           | C          | RA                     |

### Projekt- und Geschäftsanwendungsverwaltung

| **Aktivität**                                          | **Client** | **Cloud Temple** |
|---|---|---|
| Kubernetes-Projekte erstellen und verwalten                 | RA         | I*                     |
| Anwendungen in Kubernetes bereitstellen und verwalten    | RA         | I*                     |
| CI/CD-Pipelines konfigurieren                        | RA         | I*                     |
| Container-Images und -Registries verwalten       | RA         | I*                     |

*kann je nach Wartungsvertrag auf "C" wechseln

### Monitoring und Performance

| **Aktivität**                                           | **Kunde** | **Cloud Temple** |
|---|---|---|
| Performance des Kubernetes-Dienstes überwachen          | I         | RA*                |
| Performance der Anwendungen überwachen                  | RA        |                    |
| Alerts des Kubernetes-Dienstes verwalten                | I         | RA*                |
| Alerts der Anwendungen verwalten                        | RA        |                    |

(*) : *Nur Produktionscluster. Im Dev/Test-Bereich ist der Kunde vollständig eigenverantwortlich.*

### Wartung und Updates der Infrastrukturen

| **Aktivität**                                             | **Client** | **Cloud Temple** |
|---|---|---|
| Kubernetes/OS-Dienst aktualisieren                   | C          | RA                     |
| Sicherheitspatches für Kubernetes anwenden        | C          | RA                     |
| Bereitgestellte Anwendungen aktualisieren (Operatoren*)   | C          | RA                     |

*Operator-Paket auf Managed Kube enthalten - siehe Kapitel: Verwaltete Helm-Pakete

### Sicherheit

| **Aktivität**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Sicherheit des Kubernetes-Dienstes verwalten                                   | RA         | RA*                    |
| Pod-Sicherheitsrichtlinien konfigurieren und verwalten                   | RA         | I                      |
| SSL/TLS-Zertifikate für den Kubernetes-Dienst verwalten                  | C          | RA*                    |
| SSL/TLS-Zertifikate für Anwendungen verwalten                       | RA         | I                      |
| Implementieren und Verwalten der grundlegenden rollenbasierten Zugriffskontrolle (RBAC)| C          | R*                     |
| Implementieren und Verwalten der kundenseitigen rollenbasierten Zugriffskontrolle (RBAC) | RA         | I                      |

(*) : *Nur im Produktionscluster. In Dev/Test-Umgebungen ist der Client vollständig eigenverantwortlich.*

### Sicherung und Disaster Recovery

| **Aktivität**                                                                 | **Client** | **Cloud Temple** |
|---|---|---|
| Sicherungstrategie für den Kubernetes-Dienst festlegen                | I         | RA                    |
| Sicherungen des Kubernetes-Dienstes implementieren und verwalten              | I         | RA                    |
| Sicherungstrategie für Anwendungen festlegen                     | RA*         | I*                   |
| Sicherungen von Anwendungen implementieren und verwalten                   | RA*         | I*                   |
| Disaster-Recovery-Verfahren für den Kubernetes-Dienst testen   | CI         | RA                   |
| Disaster-Recovery-Verfahren für Anwendungen testen      | RA*         | CI*                   |

*kann je nach Managed-Services-Vertrag auf "CI | RA" geändert werden

### Support und Problembehebung

| **Aktivität**                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Level-1-Support für die Infrastruktur bereitstellen      | I          | RA                     |
| Level-2- und Level-3-Support für die Infrastruktur bereitstellen | I          | RA                     |
| Probleme mit dem Kubernetes-Dienst beheben         | C          | RA                     |
| Probleme mit den Anwendungen beheben              | RA         | I                      |

### Kapazitätsmanagement und -skalierung

*Nur im Produktions-Cluster. In Dev/Test ist der Kunde vollständig eigenverantwortlich und autonom tätig.*

| **Aktivität**                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Überwachung der Kubernetes-Ressourcennutzung         | C         | RA                     |
| Planung der Kapazitätserweiterung des Dienstes            | RA         | C                      |
| Durchführung von Kapazitätsanpassungen                   | I          | RA                     |
| Verwaltung der Anwendungsentwicklung und ihrer Ressourcen    | RA         | I                      |

### Dokumentation und Konformität

| **Aktivität**                                                  | **Kunde** | **Cloud Temple** |
|---|---|---|
| Dokumentation des Kubernetes-Produkts pflegen                | I          | RA                     |
| Dokumentation der Anwendungen pflegen                        | RA         | I                      |
| Konformität des Kubernetes-Dienstes gewährleisten            | I          | RA                     |
| Konformität der Anwendungen gewährleisten                    | RA         | I                      |
| Audits des Kubernetes-Dienstes durchführen                   | I          | RA                     |
| Audits der Anwendungen durchführen                           | RA         | I                      |

### Verwaltung von Kubernetes-Operatoren/CRD (im Produkt enthalten)

| **Aktivität**                                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Bereitstellung des Standard-Operator-Katalogs                   | CI         | RA                     |
| Aktualisierung der Operatoren                                                | CI         | RA                     |
| Überwachung des Operator-Status                                     | CI         | RA                     |
| Behebung von Operator-Problemen                              | CI         | RA                     |
| Verwaltung der Operator-Berechtigungen                                  | CI         | RA                     |
| Verwaltung der Operator-Ressourcen (Hinzufügen/Entfernen)                 | CI         | RA                     |
| Sicherung der Daten der Operator-Ressourcen                      | CI         | RA                     |
| Überwachung der Operator-Ressourcen                                     | CI         | RA                     |
| Wiederherstellung der Daten der Operator-Ressourcen                    | CI         | RA                     |
| Sicherheitsaudit der Operatoren                                          | CI         | RA                     |
| Support für Operatoren                                                    | CI         | RA                     |
| Verwaltung der Operator-Lizenzen                                   | CI         | RA                     |
| Verwaltung spezifischer Supportpläne für Operatoren               | CI         | RA                     |

*Operator-Paket in Managed Kube enthalten - siehe Kapitel: Verwaltete Helm-Pakete

### Verwaltung von Kubernetes-Anwendungen/Operatoren/CRDs (seitens des Kunden)

*Nur im Produktions-Cluster. In Dev/Test ist der Kunde vollständig eigenverantwortlich.*

| **Tätigkeit**                                                               | **Kunde** | **Cloud Temple** |
|---|---|---|
| Bereitstellung von CRDs                                                    | I*         | RA*                    |
| Aktualisierung der Operatoren                                               | RA         | I                     |
| Überwachung des Status der Operatoren                                       | RA         | I                     |
| Behebung von Problemen mit Operatoren                                       | RA         | I                     |
| Verwaltung der Berechtigungen der Operatoren                                | RA         | I                     |
| Verwaltung der Ressourcen der Operatoren (Hinzufügen/Entfernen)             | RA         | I                     |
| Sicherung der Daten der Operator-Ressourcen                                 | RA         | I                     |
| Überwachung der Operator-Ressourcen                                         | RA         | I                     |
| Wiederherstellung der Daten der Operator-Ressourcen                         | RA         | I                     |
| Sicherheitsaudit der Operatoren                                             | RA         | I                     |
| Support für Operatoren                                                      | RA         | I                     |
| Verwaltung der Lizenzen für Operatoren                                      | RA         | I                     |
| Verwaltung spezifischer Supportverträge für Operatoren                      | RA         | I                     |

Einige Operator-Dienste können je nach Managed-Services-Vertrag übernommen werden.

*kann je nach Managed-Services-Vertrag auf "A | RC" wechseln

### Anwendungsunterstützung

| **Leistung**                                | **Kunde** | **Cloud Temple** |
|---|---|---|
| Anwendungsunterstützung (externe Leistung) | RA         | I                      |

Eine Anwendungsunterstützung kann als Zusatzleistung erbracht werden.

### RACI (kompakt)

- Cloud Temple : verantwortlich und ausführend (RA) für die Kubernetes-Plattform, Cluster-Sicherheit, Infrastruktur-Backups, Monitoring, CRD.
- Client : verantwortlich und ausführend (RA) für die Anwendungsprojekte, fachliche Operatoren, CI/CD-Pipelines, Anwendungs-Backups.
- Grauzone : Anpassungen und Erweiterungen (IAM, spezifische Operatoren, Härtung der Cluster-Compliance/-Sicherheit) – abgerechnet im Projektmodus.