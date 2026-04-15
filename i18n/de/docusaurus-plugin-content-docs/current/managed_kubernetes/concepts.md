---
title: Konzepte
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Unsere Managed Kubernetes-Angebote

Cloud Temple bietet zwei unterschiedliche Angebote für Ihre Container-Orchestrierungsanforderungen:

- **Managed Core Kubernetes**: Ein minimalistisches Angebot, das Ihnen eine robuste und sichere Kubernetes-Grundlage auf Basis führender Open-Source-Komponenten bereitstellt. Es ist ideal für Expertenteams, die ihre eigene maßgeschneiderte Plattform aufbauen möchten.
- **Managed Kubernetes**: Eine vollständige, sofort einsatzbereite Lösung, die einen vollständigen Tool-Stack für Netzwerk, Sicherheit, Speicher, Continuous Deployment, Observability, Backup und Kostenmanagement umfasst.

### Vergleichstabelle der Angebote

| Komponente | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **OS** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **CNI Observability** | ❌ | Hubble |
| **Load Balancer** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Speicher** | Rook-Ceph | Rook-Ceph |
| **Continuous Deployment (GitOps)** | ❌ | ArgoCD |
| **Observability** | ❌ | Prometheus, Grafana, Loki |
| **Backup und Migration** | ❌ | Veeam Kasten |
| **Kostenmanagement (FinOps)** | ❌ | OpenCost |
| **Governance und Sicherheit**| ❌ | Kyverno, Capsule |
| **Container Registry**| ❌ | Harbor |
| **Zertifikatsverwaltung**| ❌ | Cert-Manager |
| **SSO-Authentifizierung**| ❌ | OIDC-Integration |

## Überblick über das Managed Kubernetes-Angebot (vollständig)

Das **Managed Kubernetes**-Angebot (auch „Managed Kube" oder „KM" genannt) ist eine von Cloud-Temple verwaltete Kubernetes-Containerisierungslösung, die als virtuelle Maschinen auf den Cloud-Temple OpenIaaS-IaaS-Infrastrukturen bereitgestellt wird.

**Managed Kubernetes** basiert auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem für Kubernetes konzipierten Betriebssystem, das leichtgewichtig und sicher ist. Es ist unveränderlich, ohne Shell oder SSH-Zugang, und wird ausschließlich deklarativ über die gRPC-API konfiguriert.

Die standardisierte Installation umfasst eine Reihe von Komponenten, die größtenteils OpenSource und vom CNCF validiert sind:

- **CNI Cilium**, mit Observability-Oberfläche (**Hubble**): Cilium ist eine Netzwerklösung für Kubernetes-Container (*Container Network Interface*). Es verwaltet Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung usw. Es ist eine grundlegende Netzwerkkomponente, die in den meisten Kubernetes-Varianten zu finden ist (OpenShift, AKS, GKE, EKS,...). Wir haben die grafische Oberfläche **Hubble** zur Visualisierung von Cilium-Datenflüssen integriert.

    <img src={cillium} />

- **MetalLB** und **nginx**: Zur Bereitstellung von Webanwendungen sind standardmäßig 3 **nginx** *Ingress-Klassen* integriert:
  - *nginx-external-secured*: Bereitstellung auf einer öffentlichen IP, am Firewall gefiltert, um nur bekannte IPs zuzulassen (verwendet für die grafischen Oberflächen der verschiedenen Produkte und die Kubernetes-API)
  - *nginx-external*: Bereitstellung auf einer zweiten ungefilterten öffentlichen IP (oder kundenspezifische Filterung)
  - *nginx-internal*: Bereitstellung nur auf einer internen IP

    Für „Nicht-Web"-Dienste ermöglicht ein **MetalLB**-Load-Balancer die Bereitstellung von Diensten intern oder auf öffentlichen IPs. (Dies ermöglicht die Bereitstellung anderer Ingresses, z. B. einer WAF)

- **Verteilter Rook-Ceph-Speicher**: Für die Speicherung persistenter Volumes (PV) ist ein verteilter OpenSource-**Ceph**-Speicher in die Plattform integriert. Er ermöglicht die Nutzung der *Storage-Classes* *ceph-block*, *ceph-bucket* und *ceph-filesystem*. Es wird ein Speicher mit **7500 IOPS** verwendet, der hohe Leistung ermöglicht. In Produktionsbereitstellungen (auf 3 AZs) sind Speicherknoten dediziert (1 Knoten pro AZ); in Nicht-Produktionsbereitstellungen (1 AZ) wird der Speicher mit Worker-Nodes geteilt.

- **Cert-Manager**: Der OpenSource-Zertifikatsmanager **Cert-Manager** ist nativ in die Plattform integriert.

- **ArgoCD** steht Ihnen für automatisierte Deployments über eine **CI/CD**-Pipeline zur Verfügung.

- **Prometheus**-Stack (Prometheus, Grafana, Loki): Managed Kubernetes-Cluster werden standardmäßig mit einem vollständigen OpenSource-**Prometheus**-Stack für Observability ausgeliefert, der Folgendes umfasst:
  - **Prometheus**
  - **Grafana**, mit zahlreichen Dashboards
  - **Loki**: Plattform-Logs werden in den Cloud-Temple S3-Speicher exportiert (und in Grafana integriert).

    <img src={grafana} />

- **Harbor** ist eine **Container Registry**, mit der Sie Ihre Container-Images oder Helm-Charts direkt im Cluster speichern können. Es führt **Schwachstellen-Scans** an Ihren Images durch und kann diese digital signieren. **Harbor** ermöglicht auch Synchronisierungen mit anderen Registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) ist ein Kostenmanagement-Tool (FinOps) für Kubernetes. Es ermöglicht die detaillierte Verfolgung des Kubernetes-Ressourcenverbrauchs und die Durchführung von Chargeback nach Projekt/Namespace.

- Erweiterte Sicherheitsrichtlinien mit **Kyverno** und **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) ist ein Admission-Controller für Kubernetes, der die Durchsetzung von Richtlinien ermöglicht. Es ist ein unverzichtbares Tool für Governance und Sicherheit in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) ist ein Berechtigungsverwaltungs-Tool, das die Rechteverwaltung in Kubernetes erleichtert. Es führt das Konzept des *Tenants* ein, das die Zentralisierung und Delegierung von Berechtigungen über mehrere Namespaces hinweg ermöglicht. Über **Capsule** haben Benutzer der Managed Kubernetes-Plattform nur auf ihre eigenen Namespaces beschränkte Rechte.

- **Veeam Kasten** (auch bekannt als 'k10') ist eine Lösung für die **Sicherung** von Kubernetes-Workloads.

    Es ermöglicht die Sicherung einer vollständigen Bereitstellung: Manifests, Volumes usw. in den Cloud-Temple S3-Objektspeicher. **Kasten** verwendet **Kanister**, um konsistente Anwendungs-Backups zu ermöglichen, beispielsweise für Datenbanken ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** ist ein plattformübergreifendes Tool, das mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler,...) verwendet werden kann. Es kann daher für Reversibilitäts- oder Migrationsszenarien eingesetzt werden (K10 verwaltet etwaige notwendige Anpassungen über *Transformationen*, z. B. einen Wechsel der Ingress-Klasse), aber auch für „Refresh"-Szenarien (Beispiel: geplante Wiederherstellung einer Produktionsumgebung in der Vorproduktion).

- **SSO-Authentifizierung** mit einem externen OIDC-Identitätsanbieter (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA & Support-Informationen

- **Garantierte Verfügbarkeit (Produktion 3 AZ)**: 99,90 %
- **Support**: N1/N2/N3 im Basisumfang enthalten (Infrastruktur und Standard-Operatoren).
- **Wiederherstellungszeitverpflichtung (RTC)**: gemäß Cloud Temple-Rahmenvertrag.
- **Wartung (MCO)**: Regelmäßiges Patching von Talos / Kubernetes / Standard-Operatoren durch MSP, ohne Serviceunterbrechung (Rolling Upgrade).

Reaktions- und Wiederherstellungszeiten hängen von der Schwere des Vorfalls ab, gemäß der Support-Matrix (P1 bis P4).

## Versionierungsrichtlinie & Lebenszyklus

- **Unterstütztes Kubernetes:** N-2 (3 Major-Releases pro Jahr, ca. alle 4 Monate). Jedes Release wird offiziell 12 Monate unterstützt, was ein Cloud Temple-Supportfenster von maximal ~16 Monaten pro Version gewährleistet.
- **Talos OS:** ausgerichtet an stabilen Kubernetes-Versionen.
  - Jeder Branch wird ca. 12 Monate gewartet (einschließlich Sicherheits-Patches).
  - Empfohlener Upgrade-Rhythmus: 3-mal pro Jahr, im Einklang mit Kubernetes-Upgrades.
  - Kritische Patches (CVE, Kernel) werden per Rolling Upgrade ohne Serviceunterbrechung eingespielt.
- **Standard-Operatoren:** innerhalb von 90 Tagen nach stabilem Release aktualisiert.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): 3-mal/Jahr geplant, als Rolling Updates.
  - **Minor**: automatisch innerhalb von 30 bis 60 Tagen eingespielt.
- **Ablösung:** Version N-3 → Ende des Supports innerhalb von 90 Tagen nach Veröffentlichung von N.

## Kubernetes-Knoten

### Produktion (multi-zonal)

<img src={archi_overview} />

Für ein „Produktions"-Deployment (multi-zonal) werden folgende Maschinen verwendet:

| **AZ**  | **Maschine**   | **vCores** | **RAM** | **Lokaler Speicher**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 GB | OS: 64 GB  |
| AZ05  | Control Plane 1   | 8  | 12 GB | OS: 64 GB  |
| AZ06  | Control Plane 2   | 8  | 12 GB | OS: 64 GB  |
| AZ07  | Control Plane 3   | 8  | 12 GB | OS: 64 GB  |
| AZ05  | Storage Node 1    | 12 | 24 GB | OS: 64 GB + Ceph mind. 500 GB (*) |
| AZ06  | Storage Node 2    | 12 | 24 GB | OS: 64 GB + Ceph mind. 500 GB (*)|
| AZ07  | Storage Node 3    | 12 | 24 GB | OS: 64 GB + Ceph mind. 500 GB (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ06  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ07  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB |

(*): Jeder Speicherknoten wird mit mindestens 500 GB Speicherplatz geliefert, für einen verteilten nutzbaren Ceph-Speicher von 500 GB (die Daten werden in jeder AZ repliziert, also x3). Der für den Kunden verfügbare freie Speicherplatz beträgt ca. 350 GB. Diese Anfangsgröße kann beim Aufbau oder später je nach Bedarf erhöht werden. Auf Ceph werden Quoten mit einer Block/File-Aufteilung angewendet.

(**): Größe und Anzahl der Worker Nodes können je nach Rechenbedarf des Kunden angepasst werden. Die Mindestanzahl der Worker Nodes beträgt 3 (1 pro AZ), und wir empfehlen, ihre Anzahl in Schritten von 3 zu erhöhen, um eine konsistente multi-zonale Verteilung zu gewährleisten. Die Größe des Worker Node kann angepasst werden, mit einem Minimum von 12 Cores und 24 GB RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisoren bestimmt (also potenziell 112 Cores/1536 GB RAM mit Performance-3-Blades). Die Anzahl der Worker Nodes ist auf 100 begrenzt. Das CNCF empfiehlt Worker Nodes gleicher Größe. Das Pod-Limit pro Worker Node beträgt 110.

### Dev/Test

<img src={archi_overview_1az} />

Für eine „Dev/Test"-Version werden folgende Maschinen eingesetzt:

| **AZ**  | **Maschine**   | **vCores** | **RAM** | **Lokaler Speicher**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 GB | OS: 30 GB  |
| AZ0n  | Control Plane    | 8  | 12 GB | OS: 64 GB  |
| AZ0n  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB + Ceph mind. 300 GB (*) |
| AZ0n  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB + Ceph mind. 300 GB (*) |
| AZ0n  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB + Ceph mind. 300 GB (*) |

(*): 3 Worker Nodes werden als Storage Nodes verwendet und mit mindestens 300 GB Speicherplatz geliefert, für einen verteilten nutzbaren Speicher von 300 GB (die Daten werden dreifach repliziert). Der für den Kunden verfügbare freie Speicherplatz beträgt ca. 150 GB. Diese Anfangsgröße kann beim Aufbau oder später je nach Bedarf erhöht werden.

(**): Größe und Anzahl der Worker Nodes können je nach Rechenbedarf des Kunden angepasst werden. Die Mindestanzahl der Worker Nodes beträgt 3 (aufgrund der Speicherreplikation). Die Größe des Worker Node kann angepasst werden, mit einem Minimum von 12 Cores und 24 GB RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisoren bestimmt (also potenziell 112 Cores/1536 GB RAM mit Performance-3-Blades). Die Anzahl der Worker Nodes ist auf 250 begrenzt. Das CNCF empfiehlt Worker Nodes gleicher Größe. Das Pod-Limit pro Worker Node beträgt 110.

## RACI

### Architektur & Infrastruktur

| **Aktivität**                                                                 | **Kunde** | **Cloud Temple** |
|---|---|---|
| Gesamtarchitektur des Kubernetes-Dienstes definieren                          | C          | RA                     |
| Kubernetes-Dienst dimensionieren (Anzahl der Knoten, Ressourcen)              | C          | RA                     |
| Kubernetes-Dienst mit Standardkonfiguration installieren                      | I          | RA                     |
| Kubernetes-Dienst konfigurieren                                               | C          | RA                     |
| Basisnetzwerk des Kubernetes-Dienstes konfigurieren                           | I          | RA                     |
| Initiale Identitäts- und Zugriffskonfiguration bereitstellen                  | C          | RA                     |
| Skalierungs- und Hochverfügbarkeitsstrategie definieren                       | C          | RA                     |

### Verwaltung von Projekten und Geschäftsanwendungen

| **Aktivität**                                          | **Kunde** | **Cloud Temple** |
|---|---|---|
| Kubernetes-Projekte erstellen und verwalten            | RA         | I*                     |
| Anwendungen in Kubernetes bereitstellen und verwalten  | RA         | I*                     |
| CI/CD-Pipelines konfigurieren                          | RA         | I*                     |
| Container-Images und Registries verwalten              | RA         | I*                     |

*kann je nach Managed-Services-Vertrag auf „C" wechseln

### Überwachung und Leistung

| **Aktivität**                                            | **Kunde** | **Cloud Temple** |
|---|---|---|
| Kubernetes-Dienstleistung überwachen                     | I          | RA*                    |
| Anwendungsleistung überwachen                            | RA         |                        |
| Kubernetes-Dienst-Alarme verwalten                       | I          | RA*                    |
| Anwendungsbezogene Alarme verwalten                      | RA         |                        |

(*): *Nur Produktionscluster. Im Dev/Test-Betrieb ist der Kunde vollständig eigenverantwortlich.*

### Infrastrukturwartung und -updates

| **Aktivität**                                             | **Kunde** | **Cloud Temple** |
|---|---|---|
| Kubernetes-Dienst/OS aktualisieren                        | C          | RA                     |
| Sicherheits-Patches für Kubernetes einspielen             | C          | RA                     |
| Bereitgestellte Anwendungen aktualisieren (Operatoren*)   | C          | RA                     |

*Operatorpaket in Managed Kube enthalten – siehe Kapitel: Verwaltete Helm-Pakete

### Sicherheit

| **Aktivität**                                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Sicherheit des Kubernetes-Dienstes verwalten                               | RA         | RA*                    |
| Pod-Sicherheitsrichtlinien konfigurieren und verwalten                     | RA         | I                      |
| SSL/TLS-Zertifikate für den Kubernetes-Dienst verwalten                    | C          | RA*                    |
| SSL/TLS-Zertifikate für Anwendungen verwalten                              | RA         | I                      |
| Grundlegende rollenbasierte Zugriffskontrolle (RBAC) implementieren        | C          | R*                     |
| Kundenspezifische rollenbasierte Zugriffskontrolle (RBAC) implementieren   | RA         | I                      |

(*): *Nur Produktionscluster. Im Dev/Test-Betrieb ist der Kunde vollständig eigenverantwortlich.*

### Backup und Notfallwiederherstellung

| **Aktivität**                                                                 | **Kunde** | **Cloud Temple** |
|---|---|---|
| Backup-Strategie für den Kubernetes-Dienst definieren                         | I         | RA                    |
| Kubernetes-Dienst-Backups implementieren und verwalten                        | I         | RA                    |
| Backup-Strategie für Anwendungen definieren                                   | RA*         | I*                   |
| Anwendungs-Backups implementieren und verwalten                               | RA*         | I*                   |
| Notfallwiederherstellungsverfahren für den Kubernetes-Dienst testen           | CI         | RA                   |
| Notfallwiederherstellungsverfahren für Anwendungen testen                     | RA*         | CI*                   |

*kann je nach Managed-Services-Vertrag auf „CI | RA" wechseln

### Support und Problemlösung

| **Aktivität**                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Level-1-Support für Infrastruktur bereitstellen            | I          | RA                     |
| Level-2- und Level-3-Support für Infrastruktur bereitstellen | I        | RA                     |
| Kubernetes-Dienst-Probleme lösen                           | C          | RA                     |
| Anwendungsbezogene Probleme lösen                          | RA         | I                      |

### Kapazitätsmanagement und Weiterentwicklung

*Nur Produktionscluster. Im Dev/Test-Betrieb ist der Kunde vollständig eigenverantwortlich.*

| **Aktivität**                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Kubernetes-Ressourcennutzung überwachen                    | C         | RA                     |
| Kapazitätsentwicklung des Dienstes planen                  | RA         | C                      |
| Kapazitätsänderungen implementieren                        | I          | RA                     |
| Anwendungsentwicklung und deren Ressourcen verwalten       | RA         | I                      |

### Dokumentation und Compliance

| **Aktivität**                                                  | **Kunde** | **Cloud Temple** |
|---|---|---|
| Kubernetes-Dienst-Dokumentation pflegen                        | I          | RA                     |
| Anwendungsdokumentation pflegen                                | RA         | I                      |
| Compliance des Kubernetes-Dienstes sicherstellen               | I          | RA                     |
| Compliance der Anwendungen sicherstellen                       | RA         | I                      |
| Kubernetes-Dienst-Audits durchführen                           | I          | RA                     |
| Anwendungs-Audits durchführen                                  | RA         | I                      |

### Verwaltung von Kubernetes-Operatoren/CRDs (im Angebot enthalten)

| **Aktivität**                                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| Bereitstellung des Standard-Operator-Katalogs                              | CI         | RA                     |
| Aktualisierung der Operatoren                                              | CI         | RA                     |
| Überwachung des Operator-Status                                            | CI         | RA                     |
| Lösung von Operator-bezogenen Problemen                                    | CI         | RA                     |
| Verwaltung der Operator-Berechtigungen                                     | CI         | RA                     |
| Verwaltung von Operator-Ressourcen (Hinzufügen/Entfernen)                  | CI         | RA                     |
| Backup von Operator-Ressourcendaten                                        | CI         | RA                     |
| Überwachung von Operator-Ressourcen                                        | CI         | RA                     |
| Wiederherstellung von Operator-Ressourcendaten                             | CI         | RA                     |
| Sicherheitsaudit der Operatoren                                            | CI         | RA                     |
| Operator-Support                                                           | CI         | RA                     |
| Lizenzverwaltung für Operatoren                                            | CI         | RA                     |
| Verwaltung spezifischer Support-Pläne für Operatoren                       | CI         | RA                     |

*Operatorpaket in Managed Kube enthalten – siehe Kapitel: Verwaltete Helm-Pakete

### Verwaltung von Kunden-Kubernetes-Anwendungen/Operatoren/CRDs

*Nur Produktionscluster. Im Dev/Test-Betrieb ist der Kunde vollständig eigenverantwortlich.*

| **Aktivität**                                                              | **Kunde** | **Cloud Temple** |
|---|---|---|
| CRD-Deployment                                                             | I*         | RA*                    |
| Aktualisierung der Operatoren                                              | RA         | I                     |
| Überwachung des Operator-Status                                            | RA         | I                     |
| Lösung von Operator-bezogenen Problemen                                    | RA         | I                     |
| Verwaltung der Operator-Berechtigungen                                     | RA         | I                     |
| Verwaltung von Operator-Ressourcen (Hinzufügen/Entfernen)                  | RA         | I                     |
| Backup von Operator-Ressourcendaten                                        | RA         | I                     |
| Überwachung von Operator-Ressourcen                                        | RA         | I                     |
| Wiederherstellung von Operator-Ressourcendaten                             | RA         | I                     |
| Sicherheitsaudit der Operatoren                                            | RA         | I                     |
| Operator-Support                                                           | RA         | I                     |
| Lizenzverwaltung für Operatoren                                            | RA         | I                     |
| Verwaltung spezifischer Support-Pläne für Operatoren                       | RA         | I                     |

Einige Operator-Dienste können je nach Managed-Services-Vertrag übernommen werden.

*kann je nach Managed-Services-Vertrag auf „A | RC" wechseln

### Anwendungsunterstützung

| **Aktivität**                                | **Kunde** | **Cloud Temple** |
|---|---|---|
| Anwendungsunterstützung (externe Dienstleistung) | RA      | I                      |

Anwendungssupport kann über eine zusätzliche Dienstleistung erbracht werden.

### RACI (Zusammenfassung)

- Cloud Temple: verantwortlich und rechenschaftspflichtig (RA) für das Kubernetes-Fundament, Cluster-Sicherheit, Infrastruktur-Backup, Monitoring, CRD.
- Kunde: verantwortlich und rechenschaftspflichtig (RA) für Anwendungsprojekte, Geschäftsoperatoren, CI/CD-Pipelines, Anwendungs-Backups.
- „Grauzone": Anpassungen und Erweiterungen (IAM, spezifische Operatoren, Cluster-Compliance/Sicherheitshärtung) – werden projektbasiert abgerechnet.
