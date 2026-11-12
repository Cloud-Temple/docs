---
title: Konzepte
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import arch_hld from '@site/docs/managed_kubernetes/images/archmk-prod.png'
import arch_lld from '@site/docs/managed_kubernetes/images/archmck-prod-LLD-FR.png'
import cni_vs_node from '@site/docs/managed_kubernetes/tutorials/images/cni-vs-node.png'

:::info[Verwalteter Service, außerhalb der Konsole]

Managed Kubernetes wird über die Cloud-Temple-Teams abonniert. Er kann nicht über die Cloud-Temple-Konsole bestellt werden, die für diesen Service weder eine Ansicht noch eine API bereitstellt.

:::

<a id="nos-offres-managed-kubernetes"></a>

## Vorstellung

Managed Kubernetes ist eine vollständig verwaltete Container-Orchestrierungsplattform, die auf Open-Source-Standards basiert, die von der CNCF validiert wurden. Jeder Cluster wird in einer dem Kunden dedizierten Umgebung bereitgestellt, in einer einzigen Verfügbarkeitszone oder in drei. Die Plattform wird einsatzbereit geliefert, mit einem vollständigen Stack für Netzwerk, Sicherheit, Speicherung, kontinuierliche Bereitstellung, Observability, Backup und Kostenmanagement.

Für Teams, die ihre eigene Plattform auf einer minimalen Basis aufbauen möchten, bietet das Angebot [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) ausschließlich die Basiskomponenten.

### Vergleichstabelle der Angebote

| Komponente                        | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Verteilte Speicherung**        | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Lokale Speicherung**           | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI-Observability**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observability**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup und Migration**         | ❌                      | ✅Veeam Kasten              |
| **Governance und Sicherheit**    | ❌                      | ✅Kyverno, Capsule          |
| **Zertifikatsverwaltung**        | ❌                      | ✅Cert-Manager              |
| **Kontinuierliche Bereitstellung (GitOps)** | ❌              | ✅ArgoCD (deaktivierbar)    |
| **Container-Registry**           | ❌                      | ✅Harbor (deaktivierbar)    |
| **SSO-Authentifizierung**        | ❌                      | ✅OIDC-Integration (deaktivierbar) |
| **Pod-Autoscaling**              | ❌                      | 🔵Keda                      |
| **Kostenmanagement (FinOps)**    | ❌                      | ✅OpenCost (deaktivierbar)  |
| **Observability (Profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : enthalten
🔵 : optional
❌ : nicht enthalten

Die mit ✅ markierten Komponenten sind im Angebot enthalten. Die als „deaktivierbar" angegebenen (ArgoCD, Harbor, OpenCost und SSO-Authentifizierung) können deaktiviert werden.

### Zielgruppen und Anwendungsfälle

Managed Kubernetes richtet sich an DevOps-Teams, Cloud-Native-Entwickler, Architekten, die auf containerisierte Architekturen migrieren, sowie an öffentliche oder regulierte Organisationen. Typische Anwendungsfälle:

<<<<<<< HEAD
- **CNI Cilium**, mit Observability-Schnittstelle (**Hubble**): Cilium ist eine Netzwerk-Lösung für Kubernetes-Container (*Container Network Interface*). Es verwaltet Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung usw. Es ist eine fundamentale Netzwerkkomponente, die in den meisten Kubernetes-Varianten (OpenShift, AKS, GKE, EKS,...) zu finden ist. In **Managed Kubernetes** haben wir die grafische Oberfläche **Hubble** für die Visualisierung der Cilium-Flows integriert.
  - **Gateway API**: Die Gateway-API-CRDs (≥ v1.6.1) werden vor Cilium installiert und sind für Cilium ≥ 1.20 für die Gateway API erforderlich.

  <img src={cillium} />

  Das folgende Schema illustriert die Unterscheidung zwischen dem vom CNI getragenen Netzwerk (Pod ↔ Pod-Verkehr) und dem Netzwerk der Nodes sowie die Art und Weise, wie Cilium den Verkehr zwischen den Nodes kapselt:

  <img src={cni_vs_node} alt="CNI-Netzwerk vs. Node-Netzwerk" />
- **MetalLB** und **nginx**: Für die Exposition von Web-Anwendungen sind 3 *ingress-class* **nginx** standardmäßig integriert:
=======
- **Cloud-Native-Anwendungen**: Microservice-Architekturen.
- **Migration zu Containern**: schrittweise Modernisierung bestehender Anwendungen.
- **Erweitertes CI/CD**: automatisierte Bereitstellungspipelines in GitOps.
- **Mehrere Umgebungen**: Trennung von Entwicklung, Test und Produktion.
- **Kritische Anwendungen**: hohe Verfügbarkeit über drei Verfügbarkeitszonen.
- **Regulatorische Konformität**: Bereitstellungen, die Souveränitätsanforderungen unterliegen.

## Vorteile

| Vorteil                      | Beschreibung                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Vollständig verwaltet            | Konfiguration, Bereitstellung und Lebenszyklus des Clusters werden übernommen.                                         |
| Hohe Verfügbarkeit           | In der Produktion ist der Cluster auf drei Verfügbarkeitszonen verteilt.                                            |
| Sicherheit by Design            | Minimalistisches und unveränderliches OS, ausschließlich per API verwaltet, ohne Shell oder SSH-Zugriff.                                      |
| Einsatzbereite Plattform   | Netzwerk, Observability, Backup, Governance und Zertifikate sind ab der Lieferung integriert.                      |
| CNCF-kompatibel               | Open-Source-Standards vermeiden technologische Abhängigkeiten und gewährleisten die Portierbarkeit Ihrer Anwendungen. |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Funktionen

Die Cluster basieren auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem auf Kubernetes spezialisierten, leichten und sicheren Betriebssystem. Es ist unveränderlich, ohne Shell oder SSH-Zugriff und wird ausschließlich deklarativ über eine gRPC-API konfiguriert. Die standardisierte Installation umfasst einen Satz von Komponenten, überwiegend Open Source und von der CNCF validiert.

### Netzwerk und Service-Exposition

- **CNI Cilium**, mit der Observability-Schnittstelle **Hubble**: Cilium verwaltet die Container-Vernetzung (*Container Network Interface*): Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung. Die grafische Oberfläche **Hubble** ermöglicht die Visualisierung der Cilium-Flows.

  <img src={cillium} />
>>>>>>> origin/dev

- **MetalLB** und **nginx**: für die Exposition von Web-Anwendungen sind drei *ingress-class* **nginx** integriert:
  - *nginx-external-secured*: Exposition über eine öffentliche IP, am Firewall gefiltert, um nur bekannte IPs zuzulassen (verwendet für die grafischen Oberflächen der verschiedenen Produkte und für die Kubernetes-API);
  - *nginx-external*: Exposition über eine zweite öffentliche IP ohne Filterung (oder mit kundenspezifischer Filterung);
  - *nginx-internal*: Exposition ausschließlich über eine interne IP.

  Für „nicht-Web"-Services exponiert der Load-Balancer **MetalLB** Services intern oder über öffentliche IPs, was es ermöglicht, andere Ingresses bereitzustellen, beispielsweise einen WAF.

> Hinweis: Die verwendete Open-Source-Version von nginx ist die *von F5 Networks gewartete* Version und nicht die ursprüngliche, veraltete Version.

### Speicherung

<<<<<<< HEAD
  - **Prometheus**, für die Metrik-Erfassung
  - **Grafana**, mit zahlreichen Dashboards
  - **Alloy**: Agent für die Erfassung von Logs und Metriken (ersetzt Promtail).
  - **Loki**: Die Protokolle der Plattform werden in den S3-Cloud-Temple-Speicher exportiert (und in Grafana integriert).
  - **Pyroscope**: (optional) Plattform für kontinuierliches Profiling, abfragbar über LLM.
=======
- **Verteilte Speicherung Rook-Ceph**: Open-Source-**Ceph**-Speicher für persistente Volumes (PV). Er stellt die *storage-classes* *ceph-block* (Block, multi-zonal repliziert), *ceph-block-norepl* (Block, nicht repliziert) und *ceph-filesystem* (Datei, multi-zonal repliziert) bereit. Der verwendete Speicher bietet **7.500 IOPS**.
- **Lokale Speicherung TopoLVM** (optional): Die *storage-class* *topolvm-ssd* speichert Daten lokal *auf den Worker Nodes*. Diese Option ist nützlich für Anwendungen, die ihre Daten selbst replizieren (Kafka, MongoDB, PostgreSQL…) und von einem ultraschnellen, latenzarmen Speicher profitieren. Sie dient in der Regel dazu, *Worker Nodes* für eine spezifische Workload zu dedizieren.
>>>>>>> origin/dev

### Observability

Der Open-Source-Stack **Prometheus** wird standardmäßig geliefert:

- **Prometheus**, für die Metrik-Erfassung;
- **Grafana**, mit zahlreichen Dashboards;
- **Loki**: Die Protokolle der Plattform werden in den Cloud-Temple-Objektspeicher exportiert und in Grafana integriert;
- **Pyroscope** (optional): Plattform für kontinuierliches Profiling, abfragbar über ein LLM.

<img src={grafana} />

<<<<<<< HEAD
## Referenzversionen (Stand 11/2026)

- **Kubernetes**: v1.36.6
- **Talos**: v1.13.12

Diese Versionen sind **eine Basis**, die des Referenzsockels zu diesem Zeitpunkt: Sie entwickeln sich mit jedem Release des Sockels weiter (Sicherheitspatches, Versionserhöhungen). Die exakten auf einem bestimmten Cluster bereitgestellten Versionen sind im DAT dieses Clusters aufgeführt. Die Versionsunterstützungspolitik wird weiter unten beschrieben („Versions- & Lebenszykluspolicy").

## Verwaltete Helm-Pakete (Stand 11/2026)

Der folgende Sockel wird auf jedem Managed-Kubernetes-Cluster bereitgestellt. Die Versionen sind eine Basis, die des Referenztemplates zu diesem Zeitpunkt; ein produktiver Cluster kann zwischen zwei Wartungsfenstern auf einer älteren Version sein.

### Plattform-Sockel (immer bereitgestellt)

| **Komponente** | **Version** | **Repository** | **Hauptrolle** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | Erweitertes CNI, Netzwerkrichtlinien und Observability (Hubble), Gateway API |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | Gateway-API-CRDs, vor Cilium installiert (Cilium ≥ 1.20 erfordert ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | BGP-LoadBalancer (BFD) mit zwei Adressbereichen, intern und extern, in TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Verteilter Hochverfügbarkeits-Speicher (RBD-Block + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Lokaler LVM-Speicher am Node für Latenz-sensitive Workloads |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | Ressourcen-Metriken-API (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Automatische Genehmigung von kubelet-Zertifikaten |

### Dienste der verwalteten Plattform

| **Komponente** | **Version** | **Repository** | **Hauptrolle** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Automatisierte TLS-Zertifikatsverwaltung (ZeroSSL integriert) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Ingress-Controller: intern, extern und extern-gesichert (mit IP-Filterung) |
| **Kyverno** | 3.9.2 | https://kyverno.github.io/kyverno/ | Anwendung von Sicherheitsrichtlinien |
| **Capsule** | 0.13.11 | https://projectcapsule.github.io/charts/ | Multi-Tenancy und Namespace-Isolation mit Sicherheitsrichtlinien |
| **ArgoCD** | 10.11.6 | https://argoproj.github.io/argo-helm | GitOps / kontinuierliche Bereitstellung |
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Monitoring & Alerting |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Agent für Log/Metrik-Erfassung (ersetzt Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Log-Zentralisierung (Logs auf S3 Cloud Temple gespeichert) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Kontinuierliches Profiling & Performance-Analyse (Flamegraphs in Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Image-Registry (Images auf S3 Cloud Temple gespeichert) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Backup & Restore (Backups auf S3 Cloud Temple exportiert) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Kosten-Observability und -Verfolgung |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Ereignisgesteuertes Autoscaling (Beta) |

**Stack-Fußabdruck auf dem Ceph-Cluster: ca. 180 Gi**, identisch in Produktion und Abnahme.

Drei `StorageClass` werden bereitgestellt:

| StorageClass | Backend | Zugriffsmodus | Typische Verwendung |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (verteilter Block) | ReadWriteOnce | Datenbanken, Single-Pod-Workloads |
| `ceph-filesystem` | CephFS (verteiles Dateisystem) | ReadWriteMany | Zwischen Pods geteilte Volumes |
| `topolvm-ssd` | TopoLVM (lokaler LVM am Node) | ReadWriteOnce | Lokaler Latenz-armer Speicher, nicht repliziert, von Kasten **nur im Blueprint-Modus** gesichert (siehe Backup) |

**Quotas** — Standardwerte eines gelieferten Clusters, **pro Cluster anpassbar** bei der Bestellung und während des Lebenszyklus:

| Bereich | RBD (Block) | CephFS |
| --- | --- | --- |
| Pool-Obergrenze, alle Tenant zusammen | 300 Gi | 125 Gi |
| Obergrenze des Standard-Tenants, angewendet durch Capsule | 115 Gi | 100 Gi |

Die Ceph-Kapazität selbst hängt von der gewählten Dimensionierung ab: Mit dem Standard-Template (3 Ceph-Nodes à 500 Go) verfügt ein Cluster über 1500 Go Rohkapazität, d. h. 500 Go nutzbare Kapazität nach ×3-Replikation.

## SLA & Support-Informationen

- **Garantierte Verfügbarkeit (Produktion 3 AZ)**: 99,95 %
- **Support**: N1/N2/N3 für den Sockel-Bereich (Infrastruktur und Standard-Operatoren) enthalten.
- **Support-Matrix**: Die Reaktions- und Wiederherstellungszeiten hängen von der Schwere des Vorfalls ab, gemäß der folgenden P1-bis-P4-Matrix.
- **RPO/RTO-Verpflichtung**: Auf einem 3-AZ-Cluster RPO ≤ 24 h und RTO ≤ 4 h. In Single-AZ existieren Backups, sind aber nicht durch eine RTO-Verpflichtung abgedeckt.
- **Wartung (MCO)**: Regelmäßiges Patching von Talos / Kubernetes / Standard-Operatoren durch MSP, ohne Service-Unterbrechung (Rolling Upgrade).

| Level | Definition | Übernahme | Ziel-Wiederherstellung |
| --- | --- | --- | --- |
| **P1** | Produktion nicht verfügbar | Sofort (24/7) | ≤ 4 h |
| **P2** | Schwere Degradation | ≤ 1 h (24/7) | ≤ 8 h |
| **P3** | Geringe Degradation | ≤ 4 h (Arbeitszeiten) | ≤ 2 Werktage |
| **P4** | Frage / Verbesserung | ≤ 1 Werktag | Zu planen |
=======
### Governance und Sicherheit

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): Admission-Controller, der Sicherheits- und Governance-Strategien anwendet.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): Berechtigungsverwaltung mit dem Konzept des *Tenant*, das Rechte über mehrere Namespaces zentralisiert und delegiert. Die Plattformnutzer verfügen somit über auf ihre eigenen Namespaces beschränkte Rechte.
- **Cert-Manager**: nativ integrierter Open-Source-Zertifikatsverwalter.
- **SSO-Authentifizierung** (enthalten, deaktivierbar): Integration mit einem externen OIDC-Identitätsanbieter (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Deployment und Automatisierung
>>>>>>> origin/dev

- **ArgoCD** (inklusive, deaktivierbar): automatisierte Deployments im GitOps-Ansatz, innerhalb einer **CI/CD**-Pipeline.
- **Harbor** (inklusive, deaktivierbar): **Container-Registry**, die die Container-Images und Helm-Charts direkt im Cluster speichert. Führt **Schwachstellen-Scans** auf den Images durch und synchronisiert sich mit anderen Registries ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (optional): Autoscaling der Pods basierend auf erweiterten Metriken, z. B. Anzahl der HTTP-Verbindungen.
- **OpenCost** (inklusive, deaktivierbar, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): FinOps-Tracking des Kubernetes-Ressourcenverbrauchs und Kostenumlage nach Projekt oder Namespace.

### Backup

**Veeam Kasten** (auch K10 genannt) sichert ein komplettes Deployment (Manifeste, Volumes …) in den Cloud Temple Object Storage. Es basiert auf **Kanister** für konsistente Anwendungssicherungen, z. B. für Datenbanken ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architektur

### Produktion (Multi-Zonal)

<img src={archi_overview} />

<<<<<<< HEAD
#### Architekturdiagramme

- **HLD-Ansicht (High Level Design)**:

<img src={arch_hld} alt="Schéma d'architecture HLD" />

- **LLD-Ansicht (Low Level Design)**:

<img src={arch_lld} alt="Schéma d'architecture LLD" />

Für ein Produktiv-Deployment (Multi-Zonal) werden folgende Maschinen verwendet:

| **AZ** | **Maschine**   | **vCores** | **RAM** | **Lokaler Speicher**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 GB          | OS: 256 GB                            |
| AZ05         | Control Plane 1     | 8                | 12 GB         | OS: 128 GB                            |
| AZ06         | Control Plane 2     | 8                | 12 GB         | OS: 128 GB                            |
| AZ07         | Control Plane 3     | 8                | 12 GB         | OS: 128 GB                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB minimum (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB minimum (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB minimum (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 GB         | OS: 128 GB                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 GB         | OS: 128 GB                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 GB         | OS: 128 GB                            |

(*) : Die Größe und Anzahl der Worker Nodes kann an den Berechnungsbedarf des Kunden angepasst werden. Die Mindestanzahl an Worker Nodes beträgt 3 (1 pro AZ), und es wird empfohlen, die Anzahl in Schritten von 3 zu erhöhen, um eine konsistente Multi-Zonen-Verteilung beizubehalten. Die Größe der Worker Nodes kann angepasst werden, mit einem Minimum von 12 Kernen und 24 GB RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisoren bestimmt (potenziell also 112 Kerne/1536 GB RAM mit Performance 3 Blades). Die Anzahl der Worker Nodes ist auf 100 begrenzt. Die CNCF empfiehlt, Worker Nodes gleicher Größe zu verwenden. Die Obergrenze der Pod-Anzahl pro Worker Node beträgt 110.

(**) : Die Größe der Storage Nodes kann je nach Größe des zugehörigen Ceph-Speichers nach oben angepasst werden. (z. B.: 24c/128GB für 10 TB Ceph)

(***) : Jeder Storage Node wird mit mindestens 500 GB Plattenspeicher geliefert, für eine nutzbare verteilte Ceph-Speicherkapazität von 500 GB (die Daten werden auf jeder AZ repliziert, also x3). Der für den Kunden verfügbare freie Speicher beträgt ca. 350 GB. Diese anfängliche Größe kann zum Zeitpunkt der Erstellung oder später je nach Bedarf erhöht werden. Auf Ceph werden Quotas angewendet, mit einer Aufteilung Block/Datei.
=======
Der Produktionscluster ist auf drei Verfügbarkeitszonen verteilt:

- **Control Plane**: drei Knoten, einer pro Zone;
- **Storage-Knoten**: drei dedizierte Rook-Ceph-Knoten, einer pro Zone;
- **Worker-Knoten**: mindestens drei, einer pro Zone, anpassbar nach Bedarf;
- **Bare-Metal-Worker-Knoten** (optional): für spezifische Performance-Anforderungen, insbesondere GPUs;
- **Git Runner**: ein Knoten für CI/CD-Pipelines;
- **verwaltete Firewall**: zwei virtuelle Maschinen, die die öffentlichen IPs der Kubernetes-API und der sicheren Ingresses filtern.
>>>>>>> origin/dev

### Dev/Test (Single-Zone)

<img src={archi_overview_1az} />

Der Entwicklungs- und Testcluster wird in einer einzigen Verfügbarkeitszone deployed, mit einem Control Plane, mindestens drei Worker-Knoten und einem Git Runner. Der Ceph-Speicher wird auf den Worker-Knoten gemeinsam genutzt.

<<<<<<< HEAD
| **AZ** | **Maschine** | **vCores** | **RAM** | **Lokaler Speicher**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 GB          | OS: 256 GB                           |
| AZ0n         | Control Plane     | 8                | 12 GB         | OS: 128 GB                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |

(*) : Die Größe und Anzahl der Worker Nodes kann an den Berechnungsbedarf des Kunden angepasst werden. Die Mindestanzahl an Worker Nodes beträgt 3 (aufgrund der Speicherreplikation). Die Größe der Worker Nodes kann angepasst werden, mit einem Minimum von 12 Kernen und 24 GB RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisoren bestimmt (potenziell also 112 Kerne/1536 GB RAM mit Performance 3 Blades). Die Anzahl der Worker Nodes ist auf 100 begrenzt. Die CNCF empfiehlt, Worker Nodes gleicher Größe zu verwenden. Die Obergrenze der Pod-Anzahl pro Worker Node beträgt 110.
=======
### Integrationen

- **Cloud Temple Object Storage**: Logs (Loki) und Backups (Kasten).
- **Identitätsanbieter**: Integration via OIDC, inklusive und deaktivierbar.
- **Cloud Temple IaaS**: Interkonnektion der Cluster mit virtualisierten Ressourcen, wie Datenbanken oder Middleware-Komponenten.
>>>>>>> origin/dev

## Regionen und Verfügbarkeitszonen

Managed Kubernetes ist in der Region FR1 verfügbar. Ein Produktionscluster ist auf drei Verfügbarkeitszonen verteilt; ein Entwicklungs- und Testcluster wird in einer einzigen Zone deployed. Die Daten werden in Frankreich gehostet.

<a id="noeuds-kubernetes"></a>

## Technische Merkmale

### Knoten eines Produktionsclusters

| **AZ** | **Maschine**         | **vCores** | **RAM** | **Lokaler Speicher**                    |
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

(*) : Die Größe und Anzahl der Worker Nodes passt sich Ihrem Berechnungsbedarf an. Es wird empfohlen, die Anzahl in Schritten von 3 zu erhöhen, um eine konsistente Multi-Zonen-Verteilung beizubehalten, und Worker Nodes gleicher Größe zu verwenden, wie von der CNCF empfohlen.

(**) : Die Größe der Storage Nodes kann je nach Größe des zugehörigen Ceph-Speichers erhöht werden (z. B. 24 Kerne und 128 GB RAM für 10 TB Ceph).

(***) : Jeder Storage Node wird mit mindestens 500 GB Plattenspeicher geliefert, für eine nutzbare verteilte Ceph-Speicherkapazität von 500 GB (die Daten werden auf jeder Zone repliziert, also dreifach). Der für den Kunden verfügbare freie Speicher beträgt ca. 350 GB. Diese anfängliche Größe kann bei der Erstellung oder später erhöht werden. Auf Ceph werden Quotas angewendet, mit einer Aufteilung Block/Datei.

### Knoten eines Entwicklungs- und Testclusters

| **AZ** | **Maschine**       | **vCores** | **RAM** | **Lokaler Speicher**                   |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 GB    | OS: 256 GB                           |
| AZ0n   | Control Plane     | 8          | 12 GB   | OS: 64 GB                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |

(*) : Die Größe und Anzahl der Worker Nodes passt sich Ihrem Bedarf an. Das Minimum von drei Worker Nodes wird durch die Speicherreplikation vorgegeben.

(**) : Drei Worker Nodes dienen als Storage-Knoten und werden mit mindestens 300 GB Plattenspeicher geliefert, für eine nutzbare verteilte Speicherkapazität von 300 GB (die Daten werden dreifach repliziert). Der für den Kunden verfügbare freie Speicher beträgt ca. 150 GB. Diese anfängliche Größe kann bei der Erstellung oder später erhöht werden.

### Grenzwerte

| Parameter                          | Produktion                         | Entwicklung und Test              |
|------------------------------------|------------------------------------|------------------------------------|
| Anzahl der Worker Nodes             | 3 minimum (1 pro Zone), 100 maximum | 3 minimum, 250 maximum            |
| Minimale Größe eines Worker Nodes   | 12 Kerne, 24 GB RAM             | 12 Kerne, 24 GB RAM             |
| Maximale Größe eines Worker Nodes   | Größe des Hypervisors, bis zu 112 Kerne und 1.536 GB RAM (Performance 3 Blades) | Gleich |
| Pods pro Worker Node               | 110                                | 110                                |

## Sicherheit und Compliance

Managed Kubernetes ist HDS- und ISO 27001-zertifiziert und auf SecNumCloud-qualifizierten und C5-konformen Diensten verfügbar.

- **Immutable OS**: ohne Shell und SSH-Zugriff, ausschließlich per API verwaltet.
- **Verschlüsselung**: Daten verschlüsselt bei Ruhe und in Bewegung, physische Verschlüsselung der Verbindungen zwischen Verfügbarkeitszonen.
- **Governance**: Kyverno-Policies, Berechtigungen pro Tenant mit Capsule, vollständiges Audit-Log.
- **Datenresidenz**: Frankreich (FR1), in Standard-Kubernetes-Formaten.

## Backup und Kontinuität

<<<<<<< HEAD
#### Infrastruktur-Backup (verwalteter Bereich)

- **Cluster-Backup via Kasten K10** (Bereich Disaster Recovery und Infrastruktur), mit Disaster-Recovery-Tests.
- **Basisbereich**: Namespaces & PVCs (Ceph RBD), kritische Infrastruktur-CRD-Objekte, Observability, Standard-Operatoren.
- **etcd (Cluster-Zustand)**: täglicher Snapshot, außerhalb von Kasten von Cloud Temple erstellt, einschließlich der Konfiguration der Talos-Knoten; dient zur Rekonstruktion des Control Planes. Die Snapshots werden 2 Tage auf der Management-VM aufbewahrt, die selbst auf IaaS-Ebene durch eine tägliche Policy mit 35 Tagen Aufbewahrung gesichert wird.
- **Häufigkeit**: täglich (Aufbewahrung 7 Tage) und wöchentlich (Aufbewahrung 4 Wochen).
- **Zusicherungen**: RPO ≤ 24 h, RTO ≤ 4 h (automatisierte Rekonstruktion des Clusters und Wiederherstellung der Komponenten via Kasten).
- **Ziel**: S3 Cloud Temple (FR), serverseitige Verschlüsselung.

#### Backup der Kunden-Workloads (labelbasiert)

Der Service bietet einen flexiblen Mechanismus zum Sichern der Kunden-Workloads unter Verwendung von Labels.

- **Mechanismus**: Ressourcen (Namespaces, PVCs usw.) über spezifische Labels in eine Backup-Policy registrieren.
- **Verfügbare Policies**: 24 stündliche Policies, die jede Stunde des Tages abdecken (00 bis 23 UTC).
- **Label-Format**: `kasten-dailyHH-r7d: "true"` (wobei `HH` die Stunde im 24-Stunden-Format ist, z. B. `00`, `14`, `23`).
- **Häufigkeit**: täglich zur angegebenen Uhrzeit (UTC). **Aufbewahrung**: 7 Tage auf S3.
- **Beispiel**: Um einen Namespace täglich um 14:00 UTC zu sichern, das Label `kasten-daily14-r7d: "true"` dem Namespace hinzufügen.
- **TopoLVM-Volumes**: `topolvm-ssd` unterstützt keine Snapshots; ohne Vorsichtsmaßnahmen schlägt das **gesamte** Backup eines gesicherten Namespaces mit einem TopoLVM-Volumen fehl, einschließlich der Ceph-Volumes. Diese Volumes werden mit Kasten **im Blueprint-Modus** (Kanister) gesichert: Kasten führt eine Anwendungssicherung durch (Datenbank-Dump, Dateneport), die auf S3 übertragen wird, und die Wiederherstellung spielt die umgekehrte Operation ab. Der Blueprint ist anwendungsspezifisch und wird **nach Analyse** auf Kundenwunsch implementiert.
- **Anwendungsbereich**: RPO und RTO vom Kunden definiert.

### Support und Problemlösung
=======
- **Workload-Backup**: Veeam Kasten sichert Ihre Deployments (Manifeste und Volumes) in den Cloud Temple Object Storage, mit konsistenten Anwendungssicherungen.
- **Speicherreplikation**: In Produktion werden replizierte Ceph-Volumes auf die drei Verfügbarkeitszonen kopiert.
- **Hohe Verfügbarkeit**: In Produktion sind das Control Plane und die Storage-Knoten auf drei Zonen verteilt.
>>>>>>> origin/dev

<a id="politique-de-versions--cycle-de-vie"></a>

## Versionen und Lebenszyklus

- **Unterstütztes Kubernetes:** N-2 (drei Major-Releases pro Jahr, ungefähr alle vier Monate). Jedes Release wird offiziell 12 Monate unterstützt, was ein Support-Fenster von maximal ca. 16 Monaten pro Version ergibt.
- **Talos OS:** an stabile Kubernetes-Versionen ausgerichtet.
  - Jede Branch wird ca. 12 Monate gepflegt, einschließlich Sicherheits-Patches.
  - Empfohlenes Upgrade-Tempo: dreimal pro Jahr, im Einklang mit den Kubernetes-Upgrades.
  - Kritische Patches (CVE, Kernel) werden per Rolling Upgrade angewendet, ohne Serviceunterbrechung.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): dreimal pro Jahr geplant, als Rolling Update;
  - **Minor**: automatisch innerhalb von 30 bis 60 Tagen angewendet.
- **Ausschreibung:** Die Version N-3 erreicht das Ende des Supports 90 Tage nach dem Release der Version N.

<a id="sla--information-sur-le-support"></a>

## Serviceverfügbarkeit

| Element                     | Verfügbarkeitsziel, über einen Monat gemessen |
|-----------------------------|-----------------------------------------------|
| Produktionscluster (Kubernetes-API) | 99,95 %                            |
| Produktionsspeicher (Ceph-Volumes)  | 99,90 %                            |

Entwicklungs- und Testcluster haben kein Verfügbarkeitsziel.

<a id="raci"></a>

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortungsmatrix (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md) detailliert beschrieben. Zusammengefasst:

- **Cloud Temple** ist für die Kubernetes-Plattform und die verwalteten Dienste verantwortlich: Sicherheit, Cluster-Sicherung, Überwachung, Updates und enthaltene Operatoren.
- **Der Kunde** ist für seine Anwendungsvorhaben, seine Business-Operatoren, seine CI/CD-Pipelines und die Sicherung seiner Anwendungen verantwortlich.
- **Support**: Level 1, 2 und 3 für die Plattform (Infrastruktur und Standard-Operatoren) inklusive. Die Bearbeitungszeiten hängen von der Schwere des Vorfalls ab (P1 bis P4).
- **Wartung**: Regelmäßiges Patching von Talos, Kubernetes und Standard-Operatoren, als Rolling Upgrade, ohne Dienstunterbrechung.

## Reversibilität

Die Cluster basieren auf Open-Source-Standards und standardisierten Kubernetes-Formaten, was die Portierbarkeit Ihrer Anwendungen gewährleistet.

| Operation                | Deliverable                    | Frist       | Kosten       |
|--------------------------|--------------------------------|-------------|--------------|
| Export der Anwendungen   | Kubernetes-YAML-Manifeste      | 15 Tage     | Kostenlos    |
| Sicherung der Volumes    | Veeam Kasten-Sicherungen       | Kontinuierlich | Inklusiv   |
| Migrationsunterstützung  | Technischer Support            | Auf Anfrage | Gegen Angebot |

**Veeam Kasten** funktioniert auch mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler usw.). Es kann daher für Reversibilitäts- oder Migrationsszenarien verwendet werden, indem die erforderlichen Anpassungen über *Transformations* verwaltet werden (z. B. eine Änderung der ingress-class), aber auch für „Refresh"-Szenarien, wie die geplante Wiederherstellung einer Produktionsumgebung in die Pre-Production.

## Preisgestaltung

Der verwaltete Dienst wird monatlich pro Cluster abgerechnet; die zugrunde liegende IaaS-Infrastruktur (Compute, Storage, Netzwerk) wird zusätzlich gemäß der Dimensionierung abgerechnet. Die Preise sind auf der Produktseite der Cloud-Temple-Website veröffentlicht:
[Managed Kubernetes — Preise](https://www.cloud-temple.com/produits/managed-kubernetes/).
