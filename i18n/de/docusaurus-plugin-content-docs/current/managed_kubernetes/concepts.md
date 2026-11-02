---
title: Konzepte
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

<a id="nos-offres-managed-kubernetes"></a>

## Einführung

Managed Kubernetes ist eine vollständig verwaltete Plattform zur Container-Orchestrierung, die auf von der CNCF validierten Open-Source-Standards basiert. Jeder Cluster wird in einer dem Kunden dedizierten Umgebung bereitgestellt, in einer einzigen oder in drei Verfügbarkeitszonen. Die Plattform wird einsatzbereit ausgeliefert, mit einem vollständigen Stack für Netzwerk, Sicherheit, Speicher, kontinuierliches Deployment, Observability, Sicherung und Kostenmanagement.

Für Teams, die ihre eigene Plattform lieber auf einer minimalen Basis aufbauen, stellt das Angebot [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) ausschließlich die Basiskomponenten bereit.

### Vergleichstabelle der Angebote

| Komponente                       | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Verteilter Speicher**          | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Lokaler Speicher**             | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI-Observability**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observability**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Sicherung und Migration**      | ❌                      | ✅Veeam Kasten              |
| **Governance und Sicherheit**    | ❌                      | ✅Kyverno, Capsule          |
| **Zertifikatsverwaltung**        | ❌                      | ✅Cert-Manager              |
| **Kontinuierliches Deployment (GitOps)** | ❌              | 🔵ArgoCD                    |
| **Container Registry**           | ❌                      | 🔵Harbor                    |
| **SSO-Authentifizierung**        | ❌                      | 🔵OIDC-Integration          |
| **Pod-Autoscaling**              | ❌                      | 🔵Keda                      |
| **Kostenmanagement (FinOps)**    | ❌                      | 🔵OpenCost                  |
| **Observability (Profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : inbegriffen
🔵 : optional/deaktivierbar
❌ : nicht inbegriffen

### Zielgruppen und Anwendungsfälle

Managed Kubernetes richtet sich an DevOps-Teams, Entwickler von Cloud-native-Anwendungen, Architekten, die auf containerisierte Architekturen migrieren, sowie an öffentliche oder regulierte Organisationen. Typische Anwendungsfälle:

- **Cloud-native Anwendungen**: Microservices-Architekturen.
- **Migration zu Containern**: schrittweise Modernisierung bestehender Anwendungen.
- **Fortgeschrittenes CI/CD**: automatisierte Deployment-Pipelines mit GitOps.
- **Mehrere Umgebungen**: Trennung von Entwicklung, Test und Produktion.
- **Kritische Anwendungen**: Hochverfügbarkeit über drei Verfügbarkeitszonen.
- **Regulatorische Compliance**: Deployments, die Souveränitätsanforderungen unterliegen.

## Vorteile

| Vorteil                       | Beschreibung                                                                                                       |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Vollständig verwaltet         | Konfiguration, Deployment und Lebenszyklus des Clusters werden übernommen.                                         |
| Hochverfügbarkeit             | In der Produktion ist der Cluster über drei Verfügbarkeitszonen verteilt.                                          |
| Security by Design            | Minimalistisches und unveränderliches OS, ausschließlich per API verwaltet, ohne Shell oder SSH-Zugang.            |
| Einsatzbereite Plattform      | Netzwerk, Observability, Sicherung, Governance und Zertifikate sind ab der Auslieferung integriert.                |
| CNCF-kompatibel               | Open-Source-Standards vermeiden technologische Abhängigkeiten und gewährleisten die Portabilität Ihrer Anwendungen. |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Funktionen

Die Cluster basieren auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem leichtgewichtigen und sicheren, auf Kubernetes spezialisierten Betriebssystem. Es ist unveränderlich, ohne Shell oder SSH-Zugang, und wird ausschließlich deklarativ über eine gRPC-API konfiguriert. Die standardisierte Installation umfasst eine Reihe von Komponenten, überwiegend Open Source und von der CNCF validiert.

### Netzwerk und Bereitstellung von Diensten

- **CNI Cilium** mit der Observability-Oberfläche **Hubble**: Cilium übernimmt die Vernetzung der Container (*Container Network Interface*): Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung. Die grafische Oberfläche **Hubble** ermöglicht die Visualisierung der Cilium-Datenflüsse.

  <img src={cillium} />

- **MetalLB** und **nginx**: Für die Bereitstellung von Webanwendungen sind drei **nginx**-*Ingress-Classes* integriert:
  - *nginx-external-secured*: Bereitstellung über eine öffentliche IP, die an der Firewall gefiltert wird, sodass nur bekannte IPs zugelassen sind (verwendet für die grafischen Oberflächen der verschiedenen Produkte und für die Kubernetes-API);
  - *nginx-external*: Bereitstellung über eine zweite, ungefilterte öffentliche IP (oder mit kundenspezifischer Filterung);
  - *nginx-internal*: Bereitstellung ausschließlich über eine interne IP.

  Für „Nicht-Web“-Dienste stellt der Load Balancer **MetalLB** Dienste intern oder über öffentliche IPs bereit, wodurch sich weitere Ingresses bereitstellen lassen, zum Beispiel eine WAF.

> Hinweis: Die verwendete Open-Source-Version von nginx ist die *von F5 Networks gepflegte* Version und nicht die ursprüngliche, veraltete Version.

### Speicher

- **Verteilter Speicher Rook-Ceph**: Open-Source-Speicher **Ceph** für persistente Volumes (PV). Er stellt die *Storage-Classes* *ceph-block* (Block, über mehrere Zonen repliziert), *ceph-block-norepl* (Block, nicht repliziert) und *ceph-filesystem* (Datei, über mehrere Zonen repliziert) bereit. Der verwendete Speicher bietet **7.500 IOPS**.
- **Lokaler Speicher TopoLVM** (optional): Die *Storage-Class* *topolvm-ssd* speichert Daten lokal *auf den Worker nodes*. Diese Option ist nützlich für Anwendungen, die ihre Daten selbst replizieren (Kafka, MongoDB, PostgreSQL…) und von ultraschnellem Speicher mit geringer Latenz profitieren. Sie dient in der Regel dazu, *Worker nodes* einer bestimmten Arbeitslast zuzuordnen.

### Observability

Der Open-Source-Stack **Prometheus** wird standardmäßig ausgeliefert:

- **Prometheus** für die Erfassung der Metriken;
- **Grafana** mit zahlreichen Dashboards;
- **Loki**: Die Protokolle der Plattform werden in den Cloud Temple Object Storage exportiert und in Grafana integriert;
- **Pyroscope** (optional): Plattform für kontinuierliches Profiling, abfragbar über ein LLM.

<img src={grafana} />

### Governance und Sicherheit

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): Admission Controller, der Sicherheits- und Governance-Richtlinien durchsetzt.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): Verwaltung der Berechtigungen über das Konzept des *Tenants*, das Rechte über mehrere Namespaces hinweg zentralisiert und delegiert. Die Benutzer der Plattform verfügen so über Rechte, die auf ihre eigenen Namespaces beschränkt sind.
- **Cert-Manager**: nativ integrierter Open-Source-Zertifikatsmanager.
- **SSO-Authentifizierung** (optional): Integration mit einem externen OIDC-Identitätsanbieter (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Deployment und Automatisierung

- **ArgoCD** (optional): automatisierte Deployments mit GitOps innerhalb einer **CI/CD**-Kette.
- **Harbor** (optional): **Container-Registry**, die Ihre Container-Images und Helm-Charts direkt im Cluster speichert. Sie führt **Schwachstellenscans** Ihrer Images durch und synchronisiert sich mit anderen Registries ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (optional): Autoscaling der Pods auf Basis erweiterter Metriken, zum Beispiel einer Anzahl von HTTP-Verbindungen.
- **OpenCost** (optional, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): FinOps-Überwachung des Verbrauchs von Kubernetes-Ressourcen und Weiterverrechnung pro Projekt oder Namespace.

### Sicherung

**Veeam Kasten** (auch K10 genannt) sichert ein vollständiges Deployment (Manifeste, Volumes…) in den Cloud Temple Object Storage. Es stützt sich auf **Kanister** für anwendungskonsistente Sicherungen, zum Beispiel für Datenbanken ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architektur

### Produktion (mehrere Zonen)

<img src={archi_overview} />

Der Produktionscluster ist über drei Verfügbarkeitszonen verteilt:

- **Control Plane**: drei Knoten, einer pro Zone;
- **Speicherknoten**: drei dedizierte Rook-Ceph-Knoten, einer pro Zone;
- **Worker-Knoten**: mindestens drei, einer pro Zone, je nach Bedarf anpassbar;
- **Bare Metal Worker-Knoten** (optional): für spezifische Leistungsanforderungen, insbesondere GPU;
- **Git Runner**: ein Knoten für die CI/CD-Pipelines;
- **verwaltete Firewall**: zwei virtuelle Maschinen, die die öffentlichen IPs der Kubernetes-API und der gesicherten Ingresses filtern.

### Dev/Test (eine oder zwei Zonen)

<img src={archi_overview_1az} />

Der Entwicklungs- und Testcluster wird in einer einzigen Verfügbarkeitszone bereitgestellt, mit einer Control Plane, mindestens drei Worker-Knoten und einem Git Runner. Der Ceph-Speicher wird gemeinsam auf den Worker-Knoten betrieben.

### Integrationen

- **Cloud Temple Object Storage**: Protokolle (Loki) und Sicherungen (Kasten).
- **Identitätsanbieter**: optionale Integration über OIDC.
- **Cloud Temple IaaS**: Verbindung der Cluster mit virtualisierten Ressourcen, etwa Datenbanken oder Middleware-Komponenten.

## Regionen und Verfügbarkeitszonen

Managed Kubernetes ist in der Region FR1 verfügbar. Ein Produktionscluster ist über drei Verfügbarkeitszonen verteilt; ein Entwicklungs- und Testcluster wird in einer einzigen bereitgestellt. Die Daten werden in Frankreich gehostet.

<a id="noeuds-kubernetes"></a>

## Technische Spezifikationen

### Knoten eines Produktionsclusters

| **AZ** | **Maschine**        | **vCores** | **RAM** | **Lokaler Speicher**                  |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 GB    | OS: 256 GB                            |
| AZ05   | Control Plane 1     | 8          | 12 GB   | OS: 64 GB                             |
| AZ06   | Control Plane 2     | 8          | 12 GB   | OS: 64 GB                             |
| AZ07   | Control Plane 3     | 8          | 12 GB   | OS: 64 GB                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (***) |
| AZ06   | Storage Node 2 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (***) |
| AZ07   | Storage Node 3 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (***) |
| AZ05   | Worker Node 1 (*)   | 12         | 24 GB   | OS: 64 GB                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 GB   | OS: 64 GB                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 GB   | OS: 64 GB                             |

(*): Größe und Anzahl der Worker Nodes passen sich Ihrem Bedarf an Rechenkapazität an. Es wird empfohlen, ihre Anzahl in Dreierschritten zu erhöhen, um eine konsistente Verteilung über mehrere Zonen beizubehalten, und Worker Nodes identischer Größe zu verwenden, wie von der CNCF empfohlen.

(**): Die Größe der Storage Nodes kann entsprechend der Größe des zugehörigen Ceph-Speichers erhöht werden (zum Beispiel 24 Kerne und 128 GB RAM für 10 TB Ceph).

(***): Jeder Speicherknoten wird mit mindestens 500 GB Speicherplatz ausgeliefert, für 500 GB nutzbaren verteilten Ceph-Speicher (die Daten werden in jede Zone repliziert, also dreifach). Der für den Kunden verfügbare freie Speicherplatz beträgt etwa 350 GB. Diese Anfangsgröße kann beim Aufbau oder später erhöht werden. Auf Ceph werden Quotas angewendet, mit einer Aufteilung zwischen Block und Datei.

### Knoten eines Entwicklungs- und Testclusters

| **AZ** | **Maschine**      | **vCores** | **RAM** | **Lokaler Speicher**                 |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 GB    | OS: 256 GB                           |
| AZ0n   | Control Plane     | 8          | 12 GB   | OS: 64 GB                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |

(*): Größe und Anzahl der Worker Nodes passen sich Ihrem Bedarf an. Das Minimum von drei Worker Nodes ist durch die Replikation des Speichers vorgegeben.

(**): Drei Worker Nodes dienen als Speicherknoten und werden mit mindestens 300 GB Speicherplatz ausgeliefert, für 300 GB nutzbaren verteilten Speicher (die Daten werden dreifach repliziert). Der für den Kunden verfügbare freie Speicherplatz beträgt etwa 150 GB. Diese Anfangsgröße kann beim Aufbau oder später erhöht werden.

### Grenzen

| Parameter                          | Produktion                         | Entwicklung und Test               |
|------------------------------------|------------------------------------|------------------------------------|
| Anzahl der Worker Nodes            | mindestens 3 (1 pro Zone), maximal 100 | mindestens 3, maximal 250      |
| Mindestgröße eines Worker Node     | 12 Kerne, 24 GB RAM                | 12 Kerne, 24 GB RAM                |
| Maximalgröße eines Worker Node     | Größe des Hypervisors, bis zu 112 Kerne und 1.536 GB RAM (Performance-3-Blades) | Identisch |
| Pods pro Worker Node               | 110                                | 110                                |

## Sicherheit und Compliance

Managed Kubernetes ist nach HDS und ISO 27001 zertifiziert und auf SecNumCloud-qualifizierten und C5-konformen Diensten verfügbar.

- **Unveränderliches OS**: ohne Shell oder SSH-Zugang, ausschließlich per API verwaltet.
- **Verschlüsselung**: Daten im Ruhezustand und bei der Übertragung verschlüsselt, physische Verschlüsselung der Verbindungen zwischen Verfügbarkeitszonen.
- **Governance**: Kyverno-Richtlinien, Berechtigungen pro Tenant mit Capsule, vollständiges Audit-Protokoll.
- **Datenresidenz**: Frankreich (FR1), in Kubernetes-Standardformaten.

## Sicherung und Kontinuität

- **Sicherung der Workloads**: Veeam Kasten sichert Ihre Deployments (Manifeste und Volumes) in den Cloud Temple Object Storage, mit anwendungskonsistenten Sicherungen.
- **Replikation des Speichers**: In der Produktion werden die replizierten Ceph-Volumes in die drei Verfügbarkeitszonen kopiert.
- **Hochverfügbarkeit**: In der Produktion sind die Control Plane und die Speicherknoten über drei Zonen verteilt.

<a id="politique-de-versions--cycle-de-vie"></a>

## Versionen und Lebenszyklus

- **Unterstütztes Kubernetes:** N-2 (drei Major-Releases pro Jahr, etwa alle vier Monate). Jedes Release wird offiziell 12 Monate lang unterstützt, also ein Supportfenster von höchstens etwa 16 Monaten pro Version.
- **Talos OS:** auf die stabilen Kubernetes-Versionen abgestimmt.
  - Jeder Branch wird etwa 12 Monate lang gepflegt, Sicherheitspatches inbegriffen.
  - Empfohlener Upgrade-Rhythmus: dreimal pro Jahr, abgestimmt auf die Kubernetes-Upgrades.
  - Kritische Patches (CVE, Kernel) werden als Rolling Upgrade ohne Dienstunterbrechung eingespielt.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): dreimal pro Jahr geplant, als Rolling Update;
  - **Minor**: automatisch innerhalb von 30 bis 60 Tagen eingespielt.
- **Abkündigung:** Version N-3 erreicht das Supportende 90 Tage nach Erscheinen von Version N.

<a id="sla--information-sur-le-support"></a>

## Dienstverfügbarkeit

| Element                     | Verfügbarkeitsziel, gemessen über einen Monat |
|-----------------------------|-----------------------------------------------|
| Produktionscluster (Kubernetes-API)  | 99,95 %                              |
| Produktionsspeicher (Ceph-Volumes)   | 99,90 %                              |

Für Entwicklungs- und Testcluster gibt es kein Verfügbarkeitsziel.

<a id="raci"></a>

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortlichkeitsmatrix (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md) beschrieben. Zusammengefasst:

- **Cloud Temple** ist verantwortlich für die Kubernetes-Basis und die verwalteten Dienste: Sicherheit, Sicherung des Clusters, Überwachung, Updates und enthaltene Operatoren.
- **Der Kunde** ist verantwortlich für seine Anwendungsprojekte, seine fachlichen Operatoren, seine CI/CD-Pipelines und die Sicherungen seiner Anwendungen.
- **Support**: Level 1, 2 und 3 für die Basis inbegriffen (Infrastruktur und Standardoperatoren). Die Reaktionszeiten hängen vom Schweregrad des Vorfalls ab (P1 bis P4).
- **Wartung**: regelmäßiges Patchen von Talos, Kubernetes und den Standardoperatoren, als Rolling Upgrade ohne Dienstunterbrechung.

## Reversibilität

Die Cluster basieren auf Open-Source-Standards und Kubernetes-Standardformaten, was die Portabilität Ihrer Anwendungen gewährleistet.

| Vorgang                  | Liefergegenstand            | Frist       | Kosten     |
|--------------------------|-----------------------------|-------------|------------|
| Export der Anwendungen   | Kubernetes-YAML-Manifeste   | 15 Tage     | Kostenlos  |
| Sicherung der Volumes    | Veeam-Kasten-Sicherungen    | Fortlaufend | Inbegriffen |
| Unterstützung bei der Migration | Technischer Support  | Auf Anfrage | Auf Angebot |

**Veeam Kasten** funktioniert auch mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler…). Es kann daher für Reversibilitäts- oder Migrationsszenarien eingesetzt werden, wobei die erforderlichen Anpassungen über *Transformationen* vorgenommen werden (zum Beispiel ein Wechsel der Ingress-Class), aber auch für „Refresh“-Szenarien, etwa die geplante Wiederherstellung einer Produktionsumgebung in die Vorproduktion.

## Preise

Der verwaltete Dienst wird monatlich pro Cluster abgerechnet; die zugrunde liegende IaaS-Infrastruktur (Compute, Speicher, Netzwerk) wird zusätzlich entsprechend der Dimensionierung abgerechnet. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Managed Kubernetes — Preise](https://www.cloud-temple.com/produits/managed-kubernetes/).
