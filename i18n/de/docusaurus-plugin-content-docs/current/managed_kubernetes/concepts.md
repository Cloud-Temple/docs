---
title: Konzepte
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Übersicht über Managed Kubernetes

Das Angebot **Managed Kubernetes** (auch „Kub Managé“ oder „KM“ genannt) ist eine von Cloud-Temple verwaltete Kubernetes-Lösung, die als virtuelle Maschinen auf den IaaS-Infrastrukturen von Cloud-Temple OpenIaaS bereitgestellt wird.

**Managed Kubernetes** basiert auf **Talos Linux** (https://www.talos.dev/), einem spezialisierten Betriebssystem für Kubernetes, das leichtgewichtig und sicher ist. Es ist immutabel, verfügt über keinen Shell-Zugriff und keinen SSH-Zugang und wird ausschließlich deklarativ über die gRPC-API konfiguriert.

Die standardmäßige Installation beinhaltet eine Reihe von Open-Source-Komponenten, die vom CNCF validiert wurden:

- **CNI Cillium** mit Observability-Schnittstelle (**Hubble**): Cillium ist eine Netzwerklösung für Kubernetes-Container (*Container Network Interface*). Es verwaltet Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung usw. Es ist ein zentraler Netzwerkbaustein, der in den meisten Kubernetes-Distributionen (OpenShift, AKS, GKE, EKS usw.) enthalten ist. Wir haben die grafische Oberfläche **Hubble** integriert, um Cillium-Flows visuell darzustellen.

    <img src={cillium} />

- **MetalLB** und **nginx**: Für die Exposition von Web-Anwendungen sind standardmäßig drei *ingress-class* **nginx** integriert:
    - *nginx-external-secured*: Exposition über eine öffentliche IP, mit Firewall-Filterung, die nur bekannte IPs erlaubt (z. B. für grafische Oberflächen der Produkte und die Kubernetes-API)
    - *nginx-external*: Exposition über eine zweite öffentliche IP ohne Filterung (bzw. spezifische Filterung pro Kunde)
    - *nginx-internal*: Exposition nur über eine interne IP

    Für nicht-webbasierte Dienste ermöglicht **MetalLB** die Exposition von Diensten intern oder über öffentliche IPs (z. B. zur Bereitstellung weiterer Ingresses wie z. B. eines WAF).

- **Distribuierter Speicher Rook-Ceph**: Für persistente Volumes (PV) ist ein Open-Source-Verteiltes Speichersystem **Ceph** in die Plattform integriert. Es ermöglicht die Nutzung der Storage-Klassen *ceph-block*, *ceph-bucket* und *ceph-filesystem*. Ein Speicher mit **7500 IOPS** wird verwendet, um hohe Leistung zu gewährleisten. In Produktionsumgebungen (über 3 AZ) sind die Speicherknoten dediziert (1 Knoten pro AZ); in Nicht-Produktionsumgebungen (1 AZ) wird der Speicher gemeinsam mit den Worker-Knoten genutzt.

- **Cert-Manager**: Der Open-Source-Zertifikat-Manager **Cert-Manager** ist nativ in die Plattform integriert.

- **ArgoCD** steht Ihnen für automatisierte Bereitstellungen über eine **CI/CD**-Pipeline zur Verfügung.

- **Prometheus-Stack** (Prometheus, Grafana, Loki): Managed Kubernetes-Cluster werden standardmäßig mit einem vollständigen Open-Source-**Prometheus**-Stack für Observability ausgeliefert, der folgende Komponenten enthält:
    - **Prometheus**
    - **Grafana** mit zahlreichen Dashboards
    - **Loki**: Die Protokolle der Plattform werden in den S3-Speicher von Cloud-Temple exportiert (und in Grafana integriert).

    <img src={grafana} />

- **Harbor** ist eine **Container-Registry**, mit der Sie Container-Images oder Helm-Charts direkt im Cluster speichern können. Sie führt **Vulnerability-Scans** auf Ihren Images durch und unterstützt digitale Signierungen. **Harbor** ermöglicht zudem Synchronisationen mit anderen Registries. (https://goharbor.io/)

- **OpenCost** (https://github.com/opencost/opencost) ist ein Werkzeug zur Kostenverwaltung (FinOps) für Kubernetes. Es ermöglicht eine detaillierte Verfolgung der Ressourcenverbrauch in Kubernetes und die Unterkostenabrechnung nach Projekt/Namespace.

- Erweiterte Sicherheitsstrategien mit **Kyverno** und **Capsule**:
    - **Kyverno** (https://kyverno.io/) ist ein Admission Controller für Kubernetes, der die Anwendung von Sicherheits- und Governance-Strategien ermöglicht. Es ist ein essenzielles Werkzeug für Sicherheit und Governance in Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) ist ein Werkzeug zur Verwaltung von Berechtigungen, das die Verwaltung von Rechten in Kubernetes vereinfacht. Es führt das Konzept des *Tenant* ein, das die zentrale Verwaltung und Delegation von Berechtigungen über mehrere Namespaces ermöglicht. Über **Capsule** verfügen die Benutzer der verwalteten Kubernetes-Plattform somit über eingeschränkte Rechte, die sich nur auf ihre eigenen Namespaces beziehen.

- **Veeam Kasten** (auch „k10“ genannt) ist eine Lösung für die **Sicherung** von Kubernetes-Workloads.

    Sie ermöglicht die vollständige Sicherung eines Deployments: Manifeste, Volumes usw. – und speichert diese im Cloud-Temple-S3-Objektspeicher. **Kasten** nutzt **Kanister**, um anwendungs-konsistente Sicherungen zu ermöglichen, z. B. für Datenbanken (https://docs.kasten.io/latest/usage/blueprints/). 

    **Kasten** ist eine plattformübergreifende Lösung, die mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler usw.) funktioniert. Sie kann daher für Szenarien der Wiederherstellung oder Migration genutzt werden (K10 verwaltet mögliche Anpassungen über *Transformations*, z. B. Änderung der Ingress-Class), aber auch für „Refresh“-Szenarien (z. B. geplante Wiederherstellung eines Produktionsumfelds in ein Vorproduktionsumfeld).

- (optional): **SSO-Authentifizierung** mit externem Identity Provider (OIDC) (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce usw.)

## SLA and Support Information
- **Guaranteed Availability (production 3 AZ):** 99.90%
- **Support:** N1/N2/N3 included for the core scope (infrastructure and standard operators).
- **Mean Time to Recovery (MTTR) Commitment:** As per the Cloud Temple framework agreement.
- **Maintenance (MCO):** Regular patching of Talos / Kubernetes / standard operators by MSP, without service interruption (rolling upgrade).

Response and recovery times depend on the incident severity, according to the support matrix (P1 to P4).

## Versioning Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a maximum Cloud Temple support window of ~16 months per version.
- **Talos OS:** aligned with stable Kubernetes releases.
  - Each branch is maintained for approximately 12 months (including security patches).
  - Recommended upgrade frequency: 3 times per year, in alignment with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Standard Operators:** updated within 90 days following stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times per year, via rolling update.
  - **Minor:** applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days after the release of N.

## Kubernetes Nodes

### Production (multi-zonal)
<img src={archi_overview} />

For a "production" (multi-zone) deployment, the following machines are used:

| **AZ**  | **Machine**         | **vCores** | **RAM**  | **Local Storage**         |
|---------|---------------------|------------|----------|----------------------------|
| AZ07    | Git Runner          | 4          | 8 Go     | OS: 30 Go                  |
| AZ05    | Control Plane 1     | 8          | 12 Go    | OS: 64 Go                  |
| AZ06    | Control Plane 2     | 8          | 12 Go    | OS: 64 Go                  |
| AZ07    | Control Plane 3     | 8          | 12 Go    | OS: 64 Go                  |
| AZ05    | Storage Node 1      | 12         | 24 Go    | OS: 64 Go + Ceph 500 Go minimum (*) |
| AZ06    | Storage Node 2      | 12         | 24 Go    | OS: 64 Go + Ceph 500 Go minimum (*) |
| AZ07    | Storage Node 3      | 12         | 24 Go    | OS: 64 Go + Ceph 500 Go minimum (*) |
| AZ05    | Worker Node 1 (**)  | 12         | 24 Go    | OS: 64 Go                  |
| AZ06    | Worker Node 2 (**)  | 12         | 24 Go    | OS: 64 Go                  |
| AZ07    | Worker Node 3 (**)  | 12         | 24 Go    | OS: 64 Go                  |

(*) Each storage node comes with a minimum of 500 GB of disk space, providing a usable distributed Ceph storage of 500 GB (data is replicated across each AZ, hence ×3). The available free space for the client is approximately 350 GB. This initial size can be increased during deployment or later, depending on requirements.

(**) The size and number of Worker Nodes can be adjusted according to the client’s compute capacity needs. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing the number in batches of 3 to maintain consistent multi-zone distribution. The Worker Node size can be adapted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (potentially up to 112 cores / 1536 GB RAM with Performance 3 blade servers). The total number of Worker Nodes is limited to 100. The CNCF recommends using Worker Nodes of identical size. The maximum number of pods per Worker Node is 110.

### Dev/Test
<img src={archi_overview_1az} />

Für eine "Dev/Test"-Version werden die folgenden Maschinen bereitgestellt:

| **AZ**  | **Maschine**       | **vCores** | **RAM**  | **Lokaler Speicher**         |
|---------|--------------------|------------|----------|------------------------------|
| AZ0n  | Git Runner         | 4          | 8 GB     | OS: 30 GB                    |
| AZ0n  | Control Plane      | 8          | 12 GB    | OS: 64 GB                    |
| AZ0n  | Worker Node 1 (**) | 12         | 24 GB    | OS: 64 GB + Ceph min. 300 GB (*) |
| AZ0n  | Worker Node 2 (**) | 12         | 24 GB    | OS: 64 GB + Ceph min. 300 GB (*) |
| AZ0n  | Worker Node 3 (**) | 12         | 24 GB    | OS: 64 GB + Ceph min. 300 GB (*) |

(*) : Drei Worker Nodes werden als Storage Nodes genutzt und verfügen über mindestens 300 GB Speicherplatz, um einen nutzbaren verteilten Speicher von 300 GB zu gewährleisten (Daten werden dreifach repliziert). Der verfügbare freie Speicherplatz für den Kunden beträgt etwa 150 GB. Diese Ausgangsgröße kann bei der Konfiguration oder später nach Bedarf erhöht werden.

(**) : Die Größe und Anzahl der Worker Nodes kann an die Rechenleistungsanforderungen des Kunden angepasst werden. Die minimale Anzahl an Worker Nodes beträgt 3 (aufgrund der Speicherreplikation). Die Größe der Worker Nodes kann angepasst werden, wobei ein Minimum von 12 Cores und 24 GB RAM vorgesehen ist; die obere Grenze pro Worker Node ist durch die Größe der verwendeten Hypervisoren begrenzt (potenziell bis zu 112 Cores / 1536 GB RAM bei Performance-3-Blades). Die maximale Anzahl an Worker Nodes beträgt 250. Der CNCF empfiehlt, Worker Nodes mit identischer Größe zu verwenden. Die maximale Anzahl an Pods pro Worker Node beträgt 110.

## RACI

### Architecture & Infrastructure

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the overall architecture of the Kubernetes service                   | C          | RA                     |
| Size the Kubernetes service (number of nodes, resources)                    | C          | RA                     |
| Install the Kubernetes service with default configuration                   | I          | RA                     |
| Configure the Kubernetes service                                            | C          | RA                     |
| Set up the base network for the Kubernetes service                          | I          | RA                     |
| Deploy initial configuration for identities and access                      | C          | RA                     |
| Define scaling and high availability strategy                               | C          | RA                     |

### Project and Business Application Management

| **Activity**                                          | **Client** | **Cloud Temple** |
|-------------------------------------------------------|------------|------------------------|
| Create and manage Kubernetes projects                 | RA         | I*                     |
| Deploy and manage applications in Kubernetes          | RA         | I*                     |
| Configure CI/CD pipelines                             | RA         | I*                     |
| Manage container images and registries                | RA         | I*                     |

*May transition to "C" depending on the managed services contract

### Monitoring and Performance

| **Activity**                                            | **Client** | **Cloud Temple** |
|---------------------------------------------------------|------------|------------------------|
| Monitor the performance of the Kubernetes service       | I          | RA*                    |
| Monitor the performance of applications                 | RA         |                        |
| Manage alerts related to the Kubernetes service         | I          | RA*                    |
| Manage alerts related to applications                   | RA         |                        |

(*) : *Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

### Infrastructure Maintenance and Updates

| **Activity**                                             | **Client** | **Cloud Temple** |
|----------------------------------------------------------|------------|------------------------|
| Update Kubernetes/OS service                             | C          | RA                     |
| Apply security patches to Kubernetes                     | C          | RA                     |
| Update deployed applications (operators*)                | C          | RA                     |

*Operator package included in Managed Kube – see sections: Managed Helm Packages

### Security

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Manage security for the Kubernetes service                                | RA         | RA*                    |
| Configure and manage pod security policies                                | RA         | I                      |
| Manage SSL/TLS certificates for the Kubernetes service                    | C          | RA*                    |
| Manage SSL/TLS certificates for applications                              | RA         | I                      |
| Implement and manage Role-Based Access Control (RBAC)                     | C          | R*                     |
| Implement and manage Client-Based Role-Based Access Control (RBAC)        | RA         | I                      |

(*) : *Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

### Backup and Disaster Recovery

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the backup strategy for the Kubernetes service                        | I         | RA                    |
| Implement and manage backups for the Kubernetes service                      | I         | RA                    |
| Define the backup strategy for applications                                  | RA*         | I*                   |
| Implement and manage backups for applications                                | RA*         | I*                   |
| Test disaster recovery procedures for the Kubernetes service                | CI         | RA                   |
| Test disaster recovery procedures for applications                           | RA*         | CI*                   |

*May change to "CI | RA" depending on the managed services contract

### Support and Troubleshooting

| **Activity**                                              | **Client** | **Cloud Temple** |
|-----------------------------------------------------------|------------|------------------------|
| Provide level 1 support for infrastructure                | I          | RA                     |
| Provide level 2 and 3 support for infrastructure          | I          | RA                     |
| Resolve issues related to the Kubernetes service          | C          | RA                     |
| Resolve issues related to applications                    | RA         | I                      |

### Capacity Management and Evolution

*Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

| **Activity**                                              | **Client** | **Cloud Temple** |
|-----------------------------------------------------------|------------|------------------------|
| Monitor Kubernetes resource usage                         | C         | RA                     |
| Plan service capacity evolution                           | RA         | C                      |
| Implement capacity changes                                | I          | RA                     |
| Manage application evolution and their resources          | RA         | I                      |

### Documentation and Compliance

| **Activity**                                                  | **Client** | **Cloud Temple** |
|---------------------------------------------------------------|------------|------------------------|
| Maintain Kubernetes service documentation                   | I          | RA                     |
| Maintain application documentation                          | RA         | I                      |
| Ensure Kubernetes service compliance                        | I          | RA                     |
| Ensure application compliance                               | RA         | I                      |
| Conduct Kubernetes service audits                           | I          | RA                     |
| Conduct application audits                                  | RA         | I                      |

### Kubernetes Operators / CRD Management (included in the offering)

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Provisioning of default Operators catalog                                   | CI         | RA                     |
| Updating Operators                                                         | CI         | RA                     |
| Monitoring Operators status                                                | CI         | RA                     |
| Troubleshooting Operator-related issues                                    | CI         | RA                     |
| Managing Operator permissions                                              | CI         | RA                     |
| Managing Operator resources (addition/removal)                             | CI         | RA                     |
| Backup of Operator resource data                                           | CI         | RA                     |
| Monitoring Operator resources                                              | CI         | RA                     |
| Restoration of Operator resource data                                      | CI         | RA                     |
| Security auditing of Operators                                             | CI         | RA                     |
| Operator support                                                           | CI         | RA                     |
| License management for Operators                                           | CI         | RA                     |
| Management of specific support plans for Operators                         | CI         | RA                     |

*Operator package included in Managed Kube – see chapters: Managed Helm Packages

### Kubernetes Application/Operator/CRD Management (Client Side)

*Production cluster only. In Dev/Test environments, the client is fully autonomous and responsible.*

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Deployment of CRDs                                                        | I*         | RA*                    |
| Updating Operators                                                        | RA         | I                     |
| Monitoring Operator status                                                | RA         | I                     |
| Troubleshooting issues related to Operators                               | RA         | I                     |
| Managing Operator permissions                                             | RA         | I                     |
| Managing Operator resources (addition/removal)                            | RA         | I                     |
| Backing up Operator resource data                                         | RA         | I                     |
| Monitoring Operator resources                                             | RA         | I                     |
| Restoring Operator resource data                                          | RA         | I                     |
| Security auditing of Operators                                            | RA         | I                     |
| Support for Operators                                                     | RA         | I                     |
| License management for Operators                                          | RA         | I                     |
| Management of specific support plans for Operators                        | RA         | I                     |

Some operator services may be managed depending on the managed services contract.

*May change to "A | RC" depending on the managed services contract

### Application Support

| **Activity**                                | **Client** | **Cloud Temple** |
|---------------------------------------------|------------|------------------------|
| Application Support (external service)      | RA         | I                      |

Application support can be provided as an additional service.

### RACI (synthetic)

- Cloud Temple: Responsible and Accountable (RA) for the Kubernetes foundation, cluster security, infrastructure backup, monitoring, and CRDs.
- Client: Responsible and Accountable (RA) for application projects, business operators, CI/CD pipelines, and application backups.
- "Grey zone": Adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) – billed on a project basis.