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

## Unsere Managed Kubernetes-Angebote

Cloud Temple bietet zwei unterschiedliche Angebote an, um Ihre Anforderungen an die Container-Orchestrierung zu erfüllen:

- **Managed Core Kubernetes** : Ein minimalistisches Produkt, das Ihnen eine robuste und sichere Kubernetes-Basis auf Basis moderner Open-Source-Komponenten bereitstellt. Es ist ideal für Expertenteams, die ihre eigene maßgeschneiderte Plattform aufbauen möchten.
- **Managed Kubernetes** : Eine vollständige, sofort einsatzbereite Lösung, die einen kompletten Stack an Tools für Netzwerk, Sicherheit, Speicherung, kontinuierliche Bereitstellung, Observability, Backup und Kostenmanagement umfasst.

### Vergleichstabelle der Angebote

| Komponente                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **OS**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Verteilte Speicherung**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Lokale Speicherung**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI-Observability**            | ❌                      | ✅Hubble                    |
| **Ingress**                       | ❌                      | ✅Ingress Nginx             |
| **Observability**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup und Migration**       | ❌                      | ✅Veeam Kasten              |
| **Governance und Sicherheit**     | ❌                      | ✅Kyverno, Capsule          |
| **Zertifikatsverwaltung**       | ❌                      | ✅Cert-Manager              |
| **Kontinuierliche Bereitstellung (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**            | ❌                      | 🔵Harbor                    |
| **SSO-Authentifizierung**          | ❌                      | 🔵OIDC-Integration         |
| **Pod-Autoscaling**           | ❌                      | 🔵Keda                      |
| **Kostenmanagement (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Observability (Profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : enthalten
🔵 : optional/deaktivierbar
❌ : nicht enthalten

## Vorstellung der Managed (Core) Kubernetes-Produkte

**Managed Core Kubernetes** basiert auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem Kubernetes-dedizierten Betriebssystem, das schlank und sicher ist. Es ist unveränderlich, ohne Shell oder SSH-Zugriff und wird ausschließlich deklarativ über die gRPC-API konfiguriert.

Die standardisierte Installation umfasst einen Satz von Komponenten, überwiegend Open Source und vom CNCF validiert:

- **CNI Cilium**, mit Observability-Schnittstelle (**Hubble**) : Cilium ist eine Netzwerk-Lösung für Kubernetes-Container (*Container Network Interface*). Es verwaltet Sicherheit, Load Balancing, Service Mesh, Observability, Verschlüsselung usw. Es ist eine grundlegende Netzwerkkomponente, die in den meisten Kubernetes-Varianten (OpenShift, AKS, GKE, EKS,...) zu finden ist. In **Managed Kubernetes** haben wir die grafische Oberfläche **Hubble** für die Visualisierung der Cilium-Flows integriert.
  - **Gateway API** : Die Gateway-API-CRDs (≥ v1.6.1) werden vor Cilium installiert und sind für Cilium ≥ 1.20 für die Gateway API erforderlich.

  <img src={cillium} />

  Das folgende Schema illustriert die Unterscheidung zwischen dem vom CNI getragenen Netzwerk (Pod ↔ Pod-Verkehr) und dem Knotennetzwerk sowie die Art und Weise, wie Cilium den Verkehr zwischen Knoten kapselt:

  <img src={cni_vs_node} alt="CNI-Netzwerk vs. Knotennetzwerk" />
- **MetalLB** und **nginx** : Für die Veröffentlichung von Web-Anwendungen sind 3 *ingress-class* **nginx** standardmäßig integriert:

  - *nginx-external-secured* : Veröffentlichung über eine öffentliche IP, am Firewall gefiltert, um nur bekannte IPs zuzulassen (verwendet für die grafischen Oberflächen der verschiedenen Produkte und die Kubernetes-API)
  - *nginx-external* : Veröffentlichung über eine zweite, nicht gefilterte öffentliche IP (oder kundenspezifische Filterung)
  - *nginx-internal* : Veröffentlichung ausschließlich über eine interne IP

    Für „nicht-Web"-Dienste ermöglicht ein **metalLB**-Load-Balancer die Veröffentlichung von Diensten intern oder über öffentliche IPs. (Dies ermöglicht das Deployment anderer Ingresses, wie z. B. eines WAF)

> Hinweis: Wir verwenden nginx in der Open-Source-Version *von F5 Networks gewartet*. (nicht die ursprüngliche Open-Source-Version, die deprecated ist)

- **Verteilte Speicherung Rook-Ceph** : Für die Speicherung von Persistent Volumes (PV) ist eine Open-Source-**Ceph**-Verteilte-Speicherung in die Plattform integriert. Sie ermöglicht die Nutzung der *storage-classes* *ceph-block* (Block, multi-zonal repliziert), *ceph-block-norepl* (Block, nicht repliziert) und *ceph-filesystem* (File, multi-zonal repliziert). Es wird ein Speicher mit **7500 IOPS** verwendet, der hohe Leistung ermöglicht. In Produktions-Deployments (auf 3 AZ) sind die Speicherknoten dediziert (1 Knoten pro AZ); in Nicht-Produktions-Deployments (1 AZ) wird der Speicher mit den Worker Nodes gemeinsam genutzt.
- **Lokale Speicherung TopoLVM** : Für die Speicherung von Persistent Volumes (PV) kann eine Open-Source-**TopoLVM**-Lokale-Speicherung (optional) zur Plattform hinzugefügt werden. Sie ermöglicht die Nutzung der *storage-class* *topolvm-ssd*, um Daten lokal *auf den Worker Nodes* zu speichern. Diese Option ist nützlich für Deployments, die eine integrierte anwendungsseitige Replikation verwenden (Kafka, MongoDB, PostgreSQL, ...) und von einem ultraschnellen Speicher mit reduzierter Latenz profitieren. Diese Option wird in der Regel verwendet, um *Worker Nodes* für eine spezifische Workload zu dedizieren.
- **Cert-Manager**: Der Open-Source-Zertifikatsverwalter **Cert-Manager** ist nativ in die Plattform integriert.
- **ArgoCD** steht Ihnen für Ihre automatisierten Deployments über eine **CI/CD**-Kette zur Verfügung. (optional)
- Stack **Prometheus** (Prometheus, Grafana, Loki): Die Managed Kubernetes-Cluster werden standardmäßig mit einem vollständigen Open-Source-**Prometheus**-Stack für Observability geliefert, einschließlich:

  - **Prometheus**, für die Metrik-Erfassung
  - **Grafana**, mit zahlreichen Dashboards
  - **Alloy** : Agent für die Erfassung von Logs und Metriken (ersetzt Promtail).
  - **Loki** : Die Logs der Plattform werden in den S3-Speicher von Cloud-Temple exportiert (und in Grafana integriert).
  - **Pyroscope** : (optional) Plattform für kontinuierliches Profiling, abfragbar über LLM.

    <img src={grafana} />
- **Harbor** ist eine **Container Registry**, die es Ihnen ermöglicht, die Images Ihrer Container oder Ihre Helm-Charts direkt im Cluster zu speichern. Sie führt **Vulnerability-Scans** auf Ihren Images durch. **Harbor** ermöglicht auch Synchronisationen mit anderen Registries. ([https://goharbor.io/](https://goharbor.io/)) (optional)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) ist ein Kostenmanagement-Tool (FinOps) für Kubernetes. Es ermöglicht Ihnen, den Ressourcenverbrauch von Kubernetes detailliert zu verfolgen und eine Unterrechnung nach Projekt/Namespace durchzuführen. (optional)
- Erweiterte Sicherheitsstrategien mit **Kyverno** und **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) ist ein Admission-Controller für Kubernetes, der es ermöglicht, Richtlinien anzuwenden. Es ist ein essentielles Tool für Governance und Sicherheit in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) ist ein Tool zur Berechtigungsverwaltung, das die Verwaltung von Rechten in Kubernetes erleichtert. Es führt das Konzept des *Tenant* ein, das es ermöglicht, Berechtigungen über mehrere Namespaces zu zentralisieren und zu delegieren. Über **Capsule** verfügen die Benutzer der Managed Kubernetes-Plattform somit über auf ihre eigenen Namespaces beschränkte Rechte.
- **Veeam Kasten** (auch „k10") ist eine Lösung für das **Backup** von Kubernetes-Workloads.

  Es ermöglicht die Sicherung eines vollständigen Deployments: Manifeste, Volumes usw. in den S3-Objektspeicher von Cloud-Temple. **Kasten** verwendet **Kanister**, um konsistente anwendungsseitige Backups durchzuführen, beispielsweise für Datenbanken ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** ist ein plattformübergreifendes Tool, das mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler,...) zusammenarbeiten kann. Es kann daher für Reversibilitätsszenarien oder Migrationszenarien verwendet werden (K10 verwaltet eventuelle Anpassungen über *Transformations*, beispielsweise eine Änderung der ingress-class), aber auch für „Refresh" (Beispiel: geplante Wiederherstellung einer Produktionsumgebung in die Pre-Production).
- **SSO-Authentifizierung** mit einem externen OIDC-Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...) (optional)
- **Keda** ermöglicht das Autoscaling von Pods über erweiterte Metriken, wie beispielsweise die Anzahl der HTTP-Verbindungen. (optional)

## Referenzversionen (Stand 11/2026)

- **Kubernetes** : v1.36.6
- **Talos** : v1.13.12

Diese Versionen sind **eine Basis**, nämlich die der Referenzbasis zu diesem Datum: Sie entwickeln sich mit jedem Release der Basis weiter (Sicherheitspatches, Versionserhöhungen). Die exakten auf einem bestimmten Cluster deployten Versionen sind im DAT dieses Clusters aufgeführt. Die Versionsunterstützungspolitik wird weiter unten beschrieben („Versions- & Lebenszykluspolicy").

## Verwaltete Helm-Pakete (Stand 11/2026)

Die folgende Basis wird auf jedem Managed Kubernetes-Cluster deployed. Die Versionen sind eine Basis, nämlich die des Referenztemplates zu diesem Datum; ein produktiver Cluster kann zwischen zwei Wartungsfenstern auf einer älteren Version sein.

### Plattform-Basis (immer deployed)

| **Komponente** | **Version** | **Repository** | **Hauptrolle** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | Erweitertes CNI, Netzwerkrichtlinien und Observability (Hubble), Gateway API |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | Gateway-API-CRDs, vor Cilium installiert (Cilium ≥ 1.20 erfordert ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | BGP-LoadBalancer (BFD) mit zwei Adressbereichen, intern und extern, in TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Hochverfügbare verteilte Speicherung (RBD-Block + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Lokale LVM-Speicherung am Knoten für Workloads mit niedriger Latenz |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | Ressourcenmetriken-API (`kubectl top`, HPA) |
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
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Zentralisierung der Logs (Logs auf S3 Cloud Temple gespeichert) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Kontinuierliches Profiling & Performance-Analyse (Flamegraphs in Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Image-Registry (Images auf S3 Cloud Temple gespeichert) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Backup & Restore (Backups auf S3 Cloud Temple exportiert) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Observability und Kostenverfolgung |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Ereignisgesteuertes Autoscaling (Beta) |

**Stack-Fußabdruck auf dem Ceph-Cluster: ca. 180 Gi**, identisch in Produktion und in der Abnahmetestumgebung.

Drei `StorageClass` werden bereitgestellt:

| StorageClass | Backend | Zugriffsmodus | Typischer Anwendungsfall |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (verteilter Block) | ReadWriteOnce | Datenbanken, Single-Pod-Workloads |
| `ceph-filesystem` | CephFS (verteiles Dateisystem) | ReadWriteMany | Zwischen Pods geteilte Volumes |
| `topolvm-ssd` | TopoLVM (lokale LVM am Knoten) | ReadWriteOnce | Lokale Speicherung mit niedriger Latenz, nicht repliziert, nur im **Blueprint-Modus** durch Kasten gesichert (siehe Backup) |

**Quotas** — Standardwerte eines ausgelieferten Clusters, **pro Cluster anpassbar** bei Bestellung und während des Lebenszyklus:

| Bereich | RBD (Block) | CephFS |
| --- | --- | --- |
| Pool-Obergrenze, alle Tenant zusammen | 300 Gi | 125 Gi |
| Tenant-Obergrenze des Standard-Tenants, durch Capsule angewendet | 115 Gi | 100 Gi |

Die Ceph-Kapazität selbst hängt von der gewählten Dimensionierung ab: Mit dem Standard-Template (3 Ceph-Knoten à 500 Go) verfügt ein Cluster über 1500 Go Rohkapazität, d. h. 500 Go nutzbare Kapazität nach ×3-Replikation.

## SLA & Informationen zum Support

- **Garantierte Verfügbarkeit (Produktion 3 AZ)** : 99,95 %
- **Support** : N1/N2/N3 für den Basisumfang (Infrastruktur und Standard-Operatoren) enthalten.
- **Support-Matrix** : Die Reaktions- und Wiederherstellungszeiten hängen von der Schwere des Incidents ab, gemäß der folgenden P1-bis-P4-Matrix.
- **RPO / RTO-Verpflichtung** : Auf einem 3-AZ-Cluster RPO ≤ 24 h und RTO ≤ 4 h. In Mono-AZ existieren Backups, sind aber nicht durch eine RTO-Verpflichtung abgedeckt.
- **Wartung (MCO)** : Regelmäßiges Patching von Talos / Kubernetes / Standard-Operatoren durch den MSP, ohne Serviceunterbrechung (Rolling Upgrade).

| Level | Definition | Übernahme | Ziel-Wiederherstellung |
| --- | --- | --- | --- |
| **P1** | Produktion nicht verfügbar | Sofort (24/7) | ≤ 4 h |
| **P2** | Schwere Degradation | ≤ 1 h (24/7) | ≤ 8 h |
| **P3** | Geringe Degradation | ≤ 4 h (Arbeitszeiten) | ≤ 2 Werktage |
| **P4** | Frage / Verbesserung | ≤ 1 Werktag | Zu planen |

## Versionspolitik & Lebenszyklus

- **Unterstütztes Kubernetes :** N-2 (3 releases majeures par an, environ tous les 4 mois). Jede Release wird offiziell 12 Monate unterstützt, was eine Support-Fenster von Cloud Temple von ~16 Monaten pro Version gewährleistet.
- **Talos OS :** an die stabilen Kubernetes-Versionen ausgerichtet.
  - Jeder Branch wird etwa 12 Monate gewartet (patchs sécurité inclus).
  - Empfohlener Upgrade-Rhythmus: 3-mal pro Jahr, in Übereinstimmung mit den Kubernetes-Updates.
  - Kritische Patches (CVE, kernel) werden per Rolling Upgrade angewendet, ohne Dienstunterbrechung.
- **Updates :**
  - **Major** (Kubernetes N+1, Talos X+1) : geplant 3-mal/Jahr, als Rolling Update.
  - **Minor** : automatisch innerhalb von 30 bis 60 Tagen angewendet.
- **Ausschreibung :** Version N-3 → Ende des Supports innerhalb von 90 Tagen nach Veröffentlichung von N.

## Kubernetes-Knoten

### Produktion (multi-zonal)

<img src={archi_overview} />

#### Architekturdiagramme

- **HLD-Ansicht (High Level Design)** :

<img src={arch_hld} alt="Schéma d'architecture HLD" />

- **LLD-Ansicht (Low Level Design)** :

<img src={arch_lld} alt="Schéma d'architecture LLD" />

Für einen "de production" (multi-zonal) Deployment werden folgende Maschinen verwendet:

| **AZ** | **Maschine**   | **vCores** | **RAM** | **Lokaler Speicher**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 Go          | OS: 256 Go                            |
| AZ05         | Control Plane 1     | 8                | 12 Go         | OS: 128 Go                            |
| AZ06         | Control Plane 2     | 8                | 12 Go         | OS: 128 Go                            |
| AZ07         | Control Plane 3     | 8                | 12 Go         | OS: 128 Go                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimum (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimum (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimum (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 Go         | OS: 128 Go                            |

(*) : La taille et le nombre des Worker Nodes peut être adaptée en fonction du besoin en capacité de calcul du client. Le nombre minimal de Worker nodes est de 3 (1 par AZ), et nous conseillons d'augmenter leur nombre par lot de 3 pour conserver une distribution multi zonale cohérente. La taille des Worker Node peut être adaptée, avec un minimum de 12 cores et 24 Go de RAM ; la limite supérieure par Worker node est fixée par la taille des hyperviseurs utilisés (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). La quantité de Worker Nodes est limitée à 100. Le CNCF conseille d'avoir des worker nodes de taille identique. La limite du nombre de pods par Worker Node est de 110.

(**) : la taille des Storage nodes peut être revue à la hausse en fonction de la taille du stockage Ceph associé. (par exemple : 24c/128Go pour 10 To de Ceph)

(***) : Chaque noeud de stockage est livré avec un minimum de 500 Go d'espace disque, pour un stockage utile Ceph distribué de 500 Go (les données sont répliquées sur chaque AZ, donc x3). L'espace libre disponible pour le client est d'environ 350 Go. Cette taille initiale peut être augmentée au moment de la construction, ou plus tard, en fonction des besoins. Des quotas sont appliqués sur Ceph, avec une répartition Block/File.

### Dev/Test (Single Zone)

<img src={archi_overview_1az} />

Für eine "dev/test" Version werden folgende Maschinen deployed:

| **AZ** | **Maschine** | **vCores** | **RAM** | **Lokaler Speicher**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 Go          | OS: 256 Go                           |
| AZ0n         | Control Plane     | 8                | 12 Go         | OS: 128 Go                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |

(*) : La taille et le nombre des Worker Nodes peut être adaptée en fonction du besoin en capacité de calcul du client. Le nombre minimal de Worker nodes est de 3 (du fait de la réplication du stockage). La taille des Worker Node peut être adaptée, avec un minimum de 12 cores et 24 Go de RAM ; la limite supérieure par Worker node est fixée par la taille des hyperviseurs utilisés (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). La quantité de Worker Nodes est limitée à 100. Le CNCF conseille d'avoir des worker nodes de taille identique. La limite du nombre de pods par Worker Node est de 110.

(**) : 3 Worker nodes sont utilisés comme Storage nodes et sont livrés avec un minimum de 300 Go d'espace disque, pour un stockage utile distribué de 300 Go (les données sont répliquées trois fois). L'espace libre disponible pour le client est d'environ 150 Go. Cette taille initiale peut être augmentée au moment de la construction, ou plus tard, en fonction des besoins.

## RACI

### Architektur & Infrastruktur

| **Aktivität**                                                      | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Gesamte Architektur des Kubernetes-Dienstes definieren                    | C                | RA                     |
| Kubernetes-Dienst dimensionieren (Anzahl der Knoten, Ressourcen)        | C                | RA                     |
| Kubernetes-Dienst mit Standardkonfiguration installieren       | I                | RA                     |
| Konfiguration des Kubernetes-Dienstes                                      | C                | RA                     |
| Grundnetzwerk des Kubernetes-Dienstes konfigurieren                      | I                | RA                     |
| Deployment der initialen Identitäts- und Zugriffskonfiguration   | C                | RA                     |
| Skalierungs- und Hochverfügbarkeitsstrategie definieren | C                | RA                     |

### Projekt- und Business-Anwendungsgestion

| **Aktivität**                                  | **Client** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Kubernetes-Projekte erstellen und verwalten              | RA               | I*                     |
| Anwendungen in Kubernetes deployen und verwalten | RA               | I*                     |
| CI/CD-Pipelines konfigurieren                       | RA               | I*                     |
| Container-Images und Registrys verwalten     | RA               | I*                     |

*peut passer à "C" en fonction du contrat d'infogérance

### Überwachung und Performance

| **Aktivität**                             | **Client** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Performance des Kubernetes-Dienstes überwachen | I                | RA*                    |
| Performance der Anwendungen überwachen      | RA               |                        |
| Alerts im Zusammenhang mit dem Kubernetes-Dienst verwalten | I                | RA*                    |
| Alerts im Zusammenhang mit den Anwendungen verwalten      | RA               |                        |

(*) : *Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

### Wartung und Infrastruktur-Updates

| **Aktivität**                                        | **Client** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Kubernetes-Dienst/OS aktualisieren                    | C                | RA                     |
| Sicherheitspatches für Kubernetes anwenden       | C                | RA                     |
| Deployte Anwendungen aktualisieren (opérateurs*) | C                | RA                     |

*Package opérateur inclus sur Managed Kube - voir chapitres : Packages Helm managés

### Sicherheit

| **Aktivität**                                                              | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Sicherheit des Kubernetes-Dienstes verwalten                                       | RA               | RA*                    |
| Sicherheitsrichtlinien für Pods konfigurieren und verwalten                       | RA               | I                      |
| SSL/TLS-Zertifikate für den Kubernetes-Dienst verwalten                        | C                | RA*                    |
| SSL/TLS-Zertifikate für die Anwendungen verwalten                             | RA               | I                      |
| Rollenbasierte Zugriffskontrolle (RBAC) auf Basis der Grundrollen implementieren und verwalten | C                | R*                     |
| Rollenbasierte Zugriffskontrolle (RBAC) auf Basis der Client-Rollen implementieren und verwalten  | RA               | I                      |

(*) : *Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

### Backup und Disaster Recovery

| **Aktivität**                                                          | **Client** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Backup-Strategie für den Kubernetes-Dienst definieren              | I                | RA                     |
| Backups des Kubernetes-Dienstes umsetzen und verwalten             | I                | RA                     |
| Backup-Strategie für die Anwendungen definieren                   | RA*              | I*                     |
| Backups der Anwendungen umsetzen und verwalten                  | RA*              | I*                     |
| Disaster-Recovery-Verfahren für den Kubernetes-Dienst testen | CI               | RA                     |
| Disaster-Recovery-Verfahren für die Anwendungen testen      | RA*              | CI*                    |

*peut passer à "CI | RA" en fonction du contrat d'infogérance

#### Infrastruktur-Backup (Managed-Umfang)

- **Cluster-Backup über Kasten K10** (partie Disaster Recovery et Infrastructure), mit Disaster-Recovery-Tests.
- **Basisumfang** : namespaces & PVC (Ceph RBD), kritische Infrastruktur-CRD-Objekte, Observability, Standard-Operatoren.
- **etcd (Cluster-Zustand)** : tägliches Snapshot von Cloud Temple außerhalb von Kasten, mit der Talos-Knotenkonfiguration ; dient zur Rekonstruktion der Control Plane. Die Snapshots werden 2 Tage auf der Management-VM aufbewahrt, die selbst auf IaaS-Ebene durch eine tägliche Politik mit 35 Tagen Retention gesichert wird.
- **Häufigkeit** : täglich (Retention 7 T) und wöchentlich (Retention 4 Wo).
- **Verpflichtungen** : RPO ≤ 24 h, RTO ≤ 4 h (automatisierte Rekonstruktion des Clusters und Wiederherstellung der Komponenten über Kasten).
- **Ziel** : S3 Cloud Temple (FR), serverseitige Verschlüsselung.

#### Backup der Client-Workloads (labelbasiert)

Der Dienst bietet einen flexiblen Mechanismus zum Sichern der Client-Workloads unter Verwendung von Labels.

- **Mechanismus** : Ressourcen (Namespaces, PVCs, etc.) über spezifische Labels in eine Backup-Politik eintragen.
- **Verfügbare Politiken** : 24 stündliche Politiken, die jede Stunde des Tages abdecken (00 bis 23 UTC).
- **Label-Format** : `kasten-dailyHH-r7d: "true"` (où `HH` est l'heure au format 24 h, par ex. `00`, `14`, `23`).
- **Häufigkeit** : täglich zur angegebenen Uhrzeit (UTC). **Retention** : 7 Tage auf S3.
- **Beispiel** : um einen Namespace täglich um 14:00 UTC zu sichern, das Label `kasten-daily14-r7d: "true"` dem Namespace hinzufügen.
- **TopoLVM-Volumes** : `topolvm-ssd` unterstützt keine Snapshots ; ohne Vorsichtsmaßnahme schlägt **das gesamte** Backup eines Namespaces mit TopoLVM-Volumen fehl, einschließlich Ceph-Volumes. Diese Volumes werden mit Kasten **im Blueprint-Modus** (Kanister) gesichert : Kasten führt ein anwendungsseitiges Backup aus (Database-Dump, Datenexport), das auf S3 gesendet wird, und die Wiederherstellung spielt die umgekehrte Operation ab. Das Blueprint ist anwendungsspezifisch und wird **nach Prüfung** auf Kundenwunsch eingerichtet.
- **Anwendungsumfang** : RPO und RTO werden vom Client definiert.

### Support und Problemlösung

| **Aktivität**                                       | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Level-1-Support für die Infrastruktur bereitstellen      | I                | RA                     |
| Level-2- und Level-3-Support für die Infrastruktur bereitstellen | I                | RA                     |
| Probleme im Zusammenhang mit dem Kubernetes-Dienst lösen      | C                | RA                     |
| Probleme im Zusammenhang mit den Anwendungen lösen           | RA               | I                      |

### Kapazitätsmanagement und Weiterentwicklung

*Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

| **Aktivität**                                       | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Ressourcennutzung von Kubernetes überwachen        | C                | RA                     |
| Kapazitätsentwicklung des Dienstes planen         | RA               | C                      |
| Kapazitätsänderungen umsetzen                 | I                | RA                     |
| Entwicklung der Anwendungen und ihrer Ressourcen verwalten | RA               | I                      |

### Dokumentation und Compliance

| **Aktivität**                              | **Client** | **Cloud Temple** |
| ------------------------------------------------ | ---------------- | ---------------------- |
| Dokumentation des Kubernetes-Produkts pflegen | I                | RA                     |
| Dokumentation der Anwendungen pflegen      | RA               | I                      |
| Compliance des Kubernetes-Dienstes sicherstellen     | I                | RA                     |
| Compliance der Anwendungen sicherstellen          | RA               | I                      |
| Audits des Kubernetes-Dienstes durchführen       | I                | RA                     |
| Audits der Anwendungen durchführen            | RA               | I                      |

### Verwaltung von Kubernetes-Operatoren/CRDs (im Produkt enthalten)

| **Aktivität**                                           | **Kunde** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Bereitstellung des Standard-Operator-Katalogs    | CI               | RA                     |
| Aktualisierung der Operatoren                                  | CI               | RA                     |
| Überwachung des Zustands der Operatoren                      | CI               | RA                     |
| Behebung von Problemen mit den Operatoren              | CI               | RA                     |
| Verwaltung der Berechtigungen der Operatoren                     | CI               | RA                     |
| Verwaltung der Operator-Ressourcen (Hinzufügen/Entfernen)    | CI               | RA                     |
| Sicherung der Daten der Operator-Ressourcen        | CI               | RA                     |
| Überwachung der Operator-Ressourcen                        | CI               | RA                     |
| Wiederherstellung der Daten der Operator-Ressourcen      | CI               | RA                     |
| Sicherheitsaudit der Operatoren                           | CI               | RA                     |
| Support der Operatoren                                       | CI               | RA                     |
| Verwaltung der Lizenzen für die Operatoren                      | CI               | RA                     |
| Verwaltung der spezifischen Supportpläne für die Operatoren | CI               | RA                     |

*Operator-Paket in Managed Kube enthalten – siehe Kapitel: Verwaltete Helm-Pakete

### Verwaltung von Anwendungen/Operatoren/CRDs Kubernetes (des Kunden)

*Nur Managed Kubernetes-Produktionscluster. In Dev/Test und in der Core-Version ist der Kunde vollständig autonom und verantwortlich.*

| **Aktivität**                                           | **Kunde** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Bereitstellung der CRDs                                         | I*               | RA*                    |
| Aktualisierung der Operatoren                                  | RA               | I                      |
| Überwachung des Zustands der Operatoren                      | RA               | I                      |
| Behebung von Problemen mit den Operatoren              | RA               | I                      |
| Verwaltung der Berechtigungen der Operatoren                     | RA               | I                      |
| Verwaltung der Operator-Ressourcen (Hinzufügen/Entfernen)    | RA               | I                      |
| Sicherung der Daten der Operator-Ressourcen        | RA               | I                      |
| Überwachung der Operator-Ressourcen                        | RA               | I                      |
| Wiederherstellung der Daten der Operator-Ressourcen      | RA               | I                      |
| Sicherheitsaudit der Operatoren                           | RA               | I                      |
| Support der Operatoren                                       | RA               | I                      |
| Verwaltung der Lizenzen für die Operatoren                      | RA               | I                      |
| Verwaltung der spezifischen Supportpläne für die Operatoren | RA               | I                      |

Bestimmte Operator-Dienste können je nach Managed-Service-Vertrag übernommen werden.

*kann je nach Managed-Service-Vertrag auf "A | RC" wechseln

### Anwendungssupport

| **Aktivität**                         | **Kunde** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Anwendungssupport (externe Leistung) | RA               | I                      |

Ein Anwendungssupport kann über eine Zusatzleistung bereitgestellt werden.

### RACI (zusammenfassend)

- Cloud Temple: verantwortlich und handelnd (RA) für das *Core Kubernetes*-Fundament und die zusätzlichen *Managed Kubernetes*-Dienste (Sicherheit, Sicherung, Überwachung)
- Kunde: verantwortlich und handelnd (RA) für Anwendungsvorhaben, Business-Operatoren, CI/CD-Pipelines, Anwendungssicherungen.
- Grauzone: Anpassungen und Erweiterungen (IAM, spezifische Operatoren, Härtung der Konformität/Sicherheit des Clusters) – projektbasiert abgerechnet.
