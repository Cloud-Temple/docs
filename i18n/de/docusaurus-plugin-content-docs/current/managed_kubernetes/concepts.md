---
title: Konzepte
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Übersicht über Managed Kubernetes

Das Angebot **Managed Kubernetes** (auch „Kub Managé“ oder „KM“ genannt) ist eine von Cloud-Temple verwaltete Kubernetes-Lösung, die als virtuelle Maschinen auf den IaaS-Infrastrukturen von Cloud-Temple (OpenIaaS oder VMware) bereitgestellt wird.

**Managed Kubernetes** basiert auf **Talos Linux** (https://www.talos.dev/), einem spezialisierten Betriebssystem für Kubernetes, das leichtgewichtig und sicher ist. Es ist immutabel, verfügt über keinen Shell-Zugriff und keinen SSH-Zugang und wird ausschließlich deklarativ über die gRPC-API konfiguriert.

Die standardmäßige Installation umfasst eine Reihe von Open-Source-Komponenten, die vom CNCF validiert wurden:

- **CNI Cillium** mit Observability-Interface (**Hubble**): Cillium ist eine Netzwerklösung für Kubernetes-Container (*Container Network Interface*). Es verwaltet Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung usw. Es ist ein zentraler Netzwerkbestandteil, der in den meisten Kubernetes-Distributionen (OpenShift, AKS, GKE, EKS usw.) enthalten ist. Wir haben die grafische Oberfläche **Hubble** integriert, um den Cillium-Verkehr zu visualisieren.

    <img src={cillium} />

- **MetalLB** und **nginx**: Für die Exposition von Web-Anwendungen sind standardmäßig drei *ingress-class* **nginx** integriert:
    - *nginx-external-secured*: Exposition über eine öffentliche IP, mit Firewall-Filterung, die nur bekannte IPs zulässt (verwendet für grafische Oberflächen der verschiedenen Produkte und die Kubernetes-API)
    - *nginx-external*: Exposition über eine zweite öffentliche IP ohne Filterung (oder spezifische Filterung pro Kunde)
    - *nginx-internal*: Exposition nur über eine interne IP
    
    Für nicht-webbasierte Dienste ermöglicht ein Load-Balancer **MetalLB** die Exposition von Diensten intern oder über öffentliche IPs. (Dies erlaubt die Bereitstellung weiterer Ingresses, z. B. eines WAF)

- **Verteiltes Speicher-System Rook-Ceph**: Für die Speicherung von persistenten Volumes (PV) ist ein Open-Source-Verteiltes-Speichersystem **Ceph** in die Plattform integriert. Es ermöglicht die Nutzung der Storage-Klassen *ceph-block*, *ceph-bucket* und *ceph-filesystem*. Ein Speicher mit **7500 IOPS/To** wird verwendet, um hohe Leistung zu gewährleisten. In Produktionsumgebungen (über 3 AZ) sind die Speicherknoten dediziert (1 Knoten pro AZ); in Nicht-Produktionsumgebungen (1 AZ) wird der Speicher mit den Worker-Knoten gemeinsam genutzt.

- **Cert-Manager**: Der Open-Source-Zertifikat-Manager **Cert-Manager** ist nativ in die Plattform integriert.

- **ArgoCD**: Wir verwenden **ArgoCD** für automatisierte Bereitstellungen der verschiedenen Komponenten über eine **CI/CD**-Pipeline.

- **Prometheus-Stack** (Prometheus, Grafana, Promtail, Loki): Managed Kubernetes-Cluster werden standardmäßig mit einem vollständigen Open-Source-**Prometheus**-Stack zur Observability ausgeliefert, der folgende Komponenten enthält:
    - **Prometheus**
    - **Grafana** mit zahlreichen Dashboards
    - **Loki** und **Promtail**: Die Protokolle der Plattform werden in den S3-Speicher von Cloud-Temple exportiert (und in Grafana integriert).

    <img src={grafana} />

- **Harbor** ist eine **Container-Registry**, mit der Sie Container-Images oder Helm-Charts direkt im Cluster speichern können. Sie führt **Vulnerability-Scans** Ihrer Images durch und unterstützt digitale Signierungen. **Harbor** ermöglicht zudem Synchronisationen mit anderen Registries. (https://goharbor.io/)

- **KubeCost** (https://github.com/kubecost) ist ein Werkzeug zur Kostenverwaltung (FinOps) für Kubernetes. Es ermöglicht eine detaillierte Verfolgung der Ressourcenverbrauch in Kubernetes und die Kostenabrechnung pro Projekt/Namespace.

- Erweiterte Sicherheitsstrategien mit **Kyverno** und **Capsule**:
    - **Kyverno** (https://kyverno.io/) ist ein Admission Controller für Kubernetes, der Strategien anwenden kann. Es ist ein essenzielles Werkzeug für Governance und Sicherheit in Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) ist ein Werkzeug zur Verwaltung von Berechtigungen, das die Verwaltung von Rechten in Kubernetes vereinfacht. Es führt das Konzept des *tenants* ein, das die zentrale Verwaltung und Delegation von Berechtigungen über mehrere Namespaces ermöglicht. Über **Capsule** verfügen die Benutzer der verwalteten Kubernetes-Plattform somit über eingeschränkte Rechte, die sich nur auf ihre eigenen Namespaces beziehen.

- **Veeam Kasten** (auch „k10“ genannt) ist eine Lösung für die **Sicherung** von Kubernetes-Workloads.

    Sie ermöglicht die vollständige Sicherung eines Deployments: Manifeste, Volumes usw. – und speichert diese im Cloud-Temple-S3-Objektspeicher. **Kasten** nutzt **Kanister**, um anwendungs-konsistente Sicherungen zu ermöglichen, beispielsweise für Datenbanken (https://docs.kasten.io/latest/usage/blueprints/). 
    
    **Kasten** ist eine plattformübergreifende Lösung, die mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler usw.) funktioniert. Sie kann daher für Szenarien der Wiederherstellung oder Migration genutzt werden (K10 verwaltet mögliche Anpassungen über *Transformations*, z. B. Änderung der Ingress-Class), aber auch für „Refresh“-Szenarien (z. B. geplante Wiederherstellung eines Produktionsumfelds in der Vorbereitungs-Umgebung).

    **Veeam Kasten** erfordert Lizenzen, die pro Worker-Knoten abgerechnet werden.

- (optional): Authentifizierung **Entra mit SSO**: Für Benutzer, die sich direkt am verwalteten Kubernetes mit ihrem EntraID-Konto (Microsoft 365) authentifizieren möchten, ist eine optionale Konfiguration eines SSO über **Keycloak** möglich. (*Integration weiterer externer IdP auf Anfrage*)

## SLA and Support Information
- **Guaranteed Availability (production 3 AZ):** 99.95%
- **Support:** N1/N2/N3 included for the core scope (infrastructure and standard operators).
- **Mean Time to Recovery (MTTR):** As per the Cloud Temple framework agreement.
- **Maintenance (MCO):** Regular patching of Talos / Kubernetes / standard operators by MSP, without service interruption (rolling upgrade).

Response and recovery times depend on the incident severity, according to the support matrix (P1 to P4).

## Versioning Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a maximum Cloud Temple support window of ~16 months per version.
- **Talos OS:** aligned with stable Kubernetes releases.
  - Each branch is maintained for approximately 12 months (including security patches).
  - Recommended upgrade frequency: 3 times per year, in alignment with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Standard Operators:** updated within 90 days following a stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times per year, applied via rolling update.
  - **Minor:** applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days after the release of N.

## Kubernetes Nodes

### Production (multi-zonal)
<img src={archi_overview} />

For a "production" (multi-zone) deployment, the following machines are used:

| **AZ** | **Machine**        | **vCores** | **RAM** | **Local Storage**                   |
| ------ | ------------------ | ---------- | ------- | ----------------------------------- |
| AZ07   | Git Runner         | 4          | 8 GB    | OS: 20 GB                           |
| AZ05   | Control Plane 1    | 8          | 12 GB   | OS: 20 GB                           |
| AZ06   | Control Plane 2    | 8          | 12 GB   | OS: 20 GB                           |
| AZ07   | Control Plane 3    | 8          | 12 GB   | OS: 20 GB                           |
| AZ05   | Storage Node 1     | 12         | 24 GB   | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ06   | Storage Node 2     | 12         | 24 GB   | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ07   | Storage Node 3     | 12         | 24 GB   | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ05   | Worker Node 1 (**) | 12         | 24 GB   | OS: 20 GB                           |
| AZ06   | Worker Node 2 (**) | 12         | 24 GB   | OS: 20 GB                           |
| AZ07   | Worker Node 3 (**) | 12         | 24 GB   | OS: 20 GB                           |

(*) Each storage node comes with a minimum of 500 GB of disk space, providing a distributed Ceph usable capacity of 500 GB (data is replicated across each AZ, hence ×3). The available free space for the client is approximately 350 GB. This initial size can be increased during deployment or later, depending on requirements.

(**) The size and number of Worker Nodes can be adjusted according to the client's computational capacity needs. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing the number in batches of 3 to maintain consistent multi-zone distribution. The Worker Node size can be adapted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (potentially up to 112 cores / 1536 GB of RAM with Performance 3 blade servers). The total number of Worker Nodes is limited to 250. The CNCF recommends using Worker Nodes of identical size. The maximum number of pods per Worker Node is 110.

### dev/test (single-zone)
<img src={archi_overview_1az} />

For a "dev/test" (single-zone) version, the following machines are deployed:

| **AZ** | **Machine**        | **vCores** | **RAM** | **Local Storage**                  |
| ------ | ------------------ | ---------- | ------- | ---------------------------------- |
| AZ0n   | Git Runner         | 4          | 8 GB    | OS: 20 GB                          |
| AZ0n   | Control Plane      | 8          | 12 GB   | OS: 20 GB                          |
| AZ0n   | Worker Node 1 (**) | 12         | 24 GB   | OS: 20 GB + Ceph at least 300 GB (*) |
| AZ0n   | Worker Node 2 (**) | 12         | 24 GB   | OS: 20 GB + Ceph at least 300 GB (*) |
| AZ0n   | Worker Node 3 (**) | 12         | 24 GB   | OS: 20 GB + Ceph at least 300 GB (*) |

(*) : Three Worker nodes are used as Storage nodes and are provisioned with a minimum of 300 GB of disk space, providing a distributed usable storage capacity of 300 GB (data is replicated three times). The available free space for the client is approximately 150 GB. This initial size can be increased during deployment or later, depending on requirements.

(**) : The size and number of Worker nodes can be adjusted according to the client’s computational capacity needs. The minimum number of Worker nodes is 3 (due to storage replication). The minimum configuration per Worker node is 12 cores and 24 GB of RAM; the upper limit per Worker node is determined by the size of the hypervisors used (up to 112 cores / 1536 GB of RAM with Performance 3 blade servers). The maximum number of Worker nodes is 250. The CNCF recommends using Worker nodes of identical size. The maximum number of pods per Worker node is 110.

## IaaS Prerequisites

You must have an IaaS infrastructure with the minimum requirements for deploying Managed Kubernetes:

### Production (multi-zone)

- 1 tenant Cloud-Temple
- 3 AZ
- 2 IP publiques disponibles
- 1 VLAN multi-zone avec une plage privée IPv4 **/22**
- 1 cluster de firewall : préférablement Fortigate, afin de bénéficier d'un load-balancing avec BGP et d'une automatisation complète (les autres clusters de firewall sont toutefois acceptés)
- Environ 2 To de stockage S3 (facturé au réel)
- Par AZ :
    - 1 nœud hyperviseur (OpenIaaS ou VMware) par AZ avec 40 cœurs et 72 Go de RAM dédiés au Kubernetes géré (nœud ECO ou supérieur)
    - 600 Go disponibles dans un datastore avec **7500 IOPS effectifs** (par exemple un datastore de 2,5 To à 3000 IOPS)

### Dev/Test (single-zone)

- 1 Cloud-Temple tenant
- 1 AZ
- 2 public IPs available
- 1 VLAN with a private IPv4 range **/22**
- 1 firewall cluster: preferably Fortigate, to enable load balancing with BGP and full automation (other firewall clusters are acceptable)
- 48 CPU cores and 92 GB RAM available (it is acceptable if cores are subject to a virtualization factor of 1.5)
- 1.2 TB available in a datastore with **7,500 effective IOPS**
- ~1 TB of S3 storage (billed at actual usage)