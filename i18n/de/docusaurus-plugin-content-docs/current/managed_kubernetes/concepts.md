---
title: Konzepte
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Unsere Managed Kubernetes-Angebote

Cloud Temple bietet zwei separate Angebote, um Ihre Anforderungen an die Container-Orchestrierung zu erfüllen :

- **Managed Core Kubernetes** : Ein minimalistisches Produkt, das Ihnen eine robuste und sichere Kubernetes-Basis auf der Grundlage modernster Open-Source-Komponenten bereitstellt. Es ist ideal für erfahrene Teams, die ihre eigene maßgeschneiderte Plattform aufbauen möchten.
- **Managed Kubernetes** : Eine vollständige, sofort einsatzbereite Lösung, die einen umfassenden Toolstack für Netzwerk, Sicherheit, Speicher, Continuous Deployment, Observability, Backup und Kostenmanagement umfasst.

### Vergleich der Angebote

| Komponente                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **OS**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Verteilte Datenspeicherung**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Lokale Datenspeicherung**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI-Beobachtbarkeit**            | ❌                      | ✅Hubble                    |
| **Ingress**                       | ❌                      | ✅Ingress Nginx             |
| **Beobachtbarkeit**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Sicherung und Migration**       | ❌                      | ✅Veeam Kasten              |
| **Governance und Sicherheit**     | ❌                      | ✅Kyverno, Capsule          |
| **Zertifikatsverwaltung**       | ❌                      | ✅Cert-Manager              |
| **Kontinuierliche Bereitstellung (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container-Registry**            | ❌                      | 🔵Harbor                    |
| **SSO-Authentifizierung**          | ❌                      | 🔵OIDC-Integration         |
| **Pod-Autoscaling**           | ❌                      | 🔵Keda                      |
| **Kostenmanagement (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Beobachtbarkeit (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : enthalten
🔵 : optional/deaktivierbar
❌ : nicht enthalten

## Vorstellung der Managed (Core) Kubernetes-Produkte

**Managed Core Kubernetes** basiert auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem Kubernetes-spezifischen Betriebssystem, das leichtgewichtig und sicher ist. Es ist unveränderlich, verfügt über keine Shell oder SSH-Zugriff und wird ausschließlich deklarativ über die gRPC-API konfiguriert.

Die standardisierte Installation umfasst eine Reihe von Komponenten, die größtenteils Open Source sind und vom CNCF zertifiziert wurden:

- **CNI Cilium**, mit Observabilitäts-Schnittstelle (**Hubble**): Cilium ist eine Netzwerklösung für Kubernetes-Container (*Container Network Interface*). Es übernimmt Sicherheit, Lastverteilung, Service Mesh, Observabilität, Verschlüsselung usw. Es ist eine grundlegende Netzwerkkomponente, die in den meisten Kubernetes-Varianten (OpenShift, AKS, GKE, EKS usw.) zu finden ist. In **Managed Kubernetes** haben wir die grafische Benutzeroberfläche **Hubble** zur Visualisierung des Cilium-Netzwerkverkehrs integriert.

  <img src={cillium} />
- **MetalLB** und **nginx**: Für die Bereitstellung von Webanwendungen sind standardmäßig 3 **nginx** *Ingress-Klassen* integriert:

  - *nginx-external-secured*: Bereitstellung über eine öffentliche IP, die auf der Firewall gefiltert wird, um nur bekannte IPs zuzulassen (wird für die grafischen Benutzeroberflächen der verschiedenen Produkte und die Kubernetes-API verwendet)
  - *nginx-external*: Bereitstellung über eine zweite, nicht gefilterte öffentliche IP (oder kundenspezifische Filterung)
  - *nginx-internal*: Bereitstellung ausschließlich über eine interne IP

    Für "nicht-Web"-Dienste ermöglicht ein **MetalLB**-Load-Balancer die Bereitstellung von Diensten intern oder über öffentliche IPs. (Dies ermöglicht den Einsatz weiterer Ingresses, z. B. einer WAF)

> Hinweis: Wir verwenden nginx in der von *F5 Networks gepflegten Open-Source-Version*. (nicht die ursprüngliche Open-Source-Version, die nicht mehr unterstützt wird)

- **Verteiltes Rook-Ceph-Speicher**: Für die Speicherung persistenter Volumes (PV) ist ein verteilter Open-Source-**Ceph**-Speicher in der Plattform integriert. Er ermöglicht die Nutzung der *Storage-Klassen* *ceph-block* (Block, multi-zonal repliziert), *ceph-block-norepl* (Block, nicht repliziert) und *ceph-filesystem* (File, multi-zonal repliziert). Es wird ein Speicher mit **7500 IOPS** verwendet, der hohe Leistung bietet. In Produktionsbereitstellungen (über 3 AZs) sind die Storage-Knoten dediziert (1 Knoten pro AZ); in Nicht-Produktionsbereitstellungen (1 AZ) wird der Speicher mit den Worker-Knoten geteilt.
- **Lokaler TopoLVM-Speicher**: Für die Speicherung persistenter Volumes (PV) kann ein lokaler Open-Source-**TopoLVM**-Speicher (optional) zur Plattform hinzugefügt werden. Er ermöglicht die Nutzung der *Storage-Klasse* *topolvm-ssd*, um Daten lokal *auf den Worker-Knoten* zu speichern. Diese Option ist nützlich für Bereitstellungen, die eine integrierte anwendungsspezifische Replikation verwenden (Kafka, MongoDB, PostgreSQL usw.) und von einem ultraschnellen Speicher mit reduzierter Latenz profitieren. Diese Option wird in der Regel verwendet, um *Worker-Knoten* einer spezifischen Workload zu widmen.
- **Cert-Manager**: Der Open-Source-Zertifikatsmanager **Cert-Manager** ist nativ in der Plattform integriert.
- **ArgoCD** steht für Ihre automatisierten Bereitstellungen über eine **CI/CD**-Pipeline zur Verfügung. (optional)
- **Prometheus**-Stack (Prometheus, Grafana, Loki): Die Managed Kubernetes-Cluster werden standardmäßig mit einem vollständigen Open-Source-**Prometheus**-Stack für die Observabilität geliefert, der Folgendes umfasst:

  - **Prometheus** zur Metrikenerfassung
  - **Grafana** mit zahlreichen Dashboards
  - **Loki**: Die Plattform-Logs werden in den Cloud-Temple S3-Speicher exportiert (und in Grafana integriert).
  - **Pyroscope**: (optional) Plattform für kontinuierliches Profiling, abfragbar über LLMs.

    <img src={grafana} />
- **Harbor** ist eine **Container-Registry**, mit der Sie Ihre Container-Images oder Helm-Charts direkt im Cluster speichern können. Sie führt **Schwachstellen-Scans** für Ihre Images durch. **Harbor** ermöglicht auch Synchronisationen mit anderen Registries. ([https://goharbor.io/](https://goharbor.io/)) (optional)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) ist ein Kostenmanagement-Tool (FinOps) für Kubernetes. Es ermöglicht eine detaillierte Verfolgung des Kubernetes-Ressourcenverbrauchs und eine Abrechnung nach Projekt/Namespace. (optional)
- Erweiterte Sicherheitsstrategien mit **Kyverno** und **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) ist ein Admission-Controller für Kubernetes, der das Anwenden von Richtlinien ermöglicht. Er ist ein essentielles Tool für Governance und Sicherheit in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) ist ein Berechtigungsmanagement-Tool, das die Verwaltung von Rechten in Kubernetes erleichtert. Es führt das Konzept des *Tenants* ein, das die Zentralisierung und Delegation von Berechtigungen über mehrere Namespaces hinweg ermöglicht. Über **Capsule** verfügen die Nutzer der Managed Kubernetes-Plattform daher nur über auf ihre eigenen Namespaces beschränkte Rechte.
- **Veeam Kasten** (auch bekannt als 'k10') ist eine Lösung zur **Sicherung** von Kubernetes-Workloads.

  Es ermöglicht die Sicherung einer vollständigen Bereitstellung: Manifeste, Volumes usw. in den Cloud-Temple S3-Objektspeicher. **Kasten** nutzt **Kanister**, um konsistente anwendungsspezifische Sicherungen zu ermöglichen, beispielsweise für Datenbanken ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** ist ein plattformübergreifendes Tool, das mit anderen Kubernetes-Clustern (OpenShift, Hyperscaler usw.) funktionieren kann. Es kann daher für Szenarien der Rückführbarkeit oder Migration verwendet werden (K10 verwaltet eventuelle Anpassungen über *Transformationen*, z. B. einen Wechsel der Ingress-Klasse), aber auch für "Refresh"-Szenarien (Beispiel: geplante Wiederherstellung einer Produktionsumgebung in der Pre-Production).
- **SSO-Authentifizierung** mit einem externen OIDC-Identity-Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce usw.) (optional)
- **Keda** ermöglicht das automatische Skalieren von Pods über erweiterte Metriken, wie z. B. die Anzahl der HTTP-Verbindungen. (optional)

## SLA & Supportinformationen

- **Garantierte Verfügbarkeit (Produktion 3 AZ)** : 99.95 %
- **Support** : N1/N2/N3 im Basisumfang enthalten (Infrastruktur und Standard-Operatoren).
- **Zusagen zur Wiederherstellungszeit (ETR)** : gemäß Cloud-Temple-Rahmenvertrag.
- **Wartung (MCO)** : Regelmäßiges Patching von Talos / Kubernetes / Standard-Operatoren durch den MSP, ohne Dienstunterbrechung (Rolling Upgrade).

Die Reaktions- und Wiederherstellungszeiten hängen von der Schwere des Vorfalls ab, gemäß der Supportmatrix (P1 bis P4).

## Versionspolitik & Lebenszyklus

- **Unterstütztes Kubernetes:** N-2 (3 Major Releases pro Jahr, etwa alle 4 Monate). Jede Version wird offiziell 12 Monate unterstützt, was ein Supportfenster von Cloud Temple von maximal ~16 Monaten pro Version gewährleistet.
- **Talos OS:** an die stabilen Versionen von Kubernetes ausgerichtet.
  - Jeder Zweig wird etwa 12 Monate gewartet (einschließlich Sicherheitspatches).
  - Empfohlener Upgrade-Rhythmus: 3-mal pro Jahr, im Einklang mit den Kubernetes-Upgrades.
  - Kritische Patches (CVE, Kernel) werden als Rolling Upgrade angewendet, ohne Dienstunterbrechung.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): 3-mal pro Jahr geplant, als Rolling Update.
  - **Minor**: werden automatisch innerhalb von 30 bis 60 Tagen angewendet.
- **Deprecation:** Version N-3 → Supportende innerhalb von 90 Tagen nach Veröffentlichung von N.

## Kubernetes-Knoten

### Produktion (Multi-Zone)

<img src={archi_overview} />

Für eine "Produktions"-Bereitstellung (Multi-Zone) werden folgende Instanzen verwendet:

| **AZ** | **Instanz**   | **vCores** | **RAM** | **Lokaler Speicher**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 Go          | OS: 256 Go                            |
| AZ05         | Control Plane 1     | 8                | 12 Go         | OS: 64 Go                             |
| AZ06         | Control Plane 2     | 8                | 12 Go         | OS: 64 Go                             |
| AZ07         | Control Plane 3     | 8                | 12 Go         | OS: 64 Go                             |
| AZ05         | Storage Node 1 (**) | 12               | 24 Go         | OS: 64 Go + Ceph 500 Go mindestens (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 Go         | OS: 64 Go + Ceph 500 Go mindestens (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 Go         | OS: 64 Go + Ceph 500 Go mindestens (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 Go         | OS: 64 Go                             |
| AZ06         | Worker Node 2 (*)   | 12               | 24 Go         | OS: 64 Go                             |
| AZ07         | Worker Node 3 (*)   | 12               | 24 Go         | OS: 64 Go                             |

(*) : Größe und Anzahl der Worker Nodes können je nach Rechenkapazitätsbedarf des Kunden angepasst werden. Die Mindestanzahl an Worker Nodes beträgt 3 (1 pro AZ), und wir empfehlen, die Anzahl in Schritten von 3 zu erhöhen, um eine konsistente Multi-Zone-Verteilung beizubehalten. Die Größe der Worker Nodes kann angepasst werden, mit einem Minimum von 12 Kernen und 24 Go RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisoren festgelegt (potenziell also 112 Kerne/1536 Go RAM mit Performance 3 Blades). Die Anzahl der Worker Nodes ist auf 100 begrenzt. Der CNCF empfiehlt, Worker Nodes gleicher Größe zu verwenden. Die Begrenzung der Pods pro Worker Node liegt bei 110.

(**) : Die Größe der Storage Nodes kann je nach Größe des zugehörigen Ceph-Speichers nach oben angepasst werden. (Beispiel: 24c/128 Go für 10 To Ceph)

(***) : Jeder Storage Node wird mit mindestens 500 Go Festplattenspeicher geliefert, was einem nutzbaren, verteilten Ceph-Speicher von 500 Go entspricht (die Daten werden auf jede AZ repliziert, also x3). Der für den Kunden verfügbare freie Speicher beträgt ca. 350 Go. Diese anfängliche Größe kann bei der Bereitstellung oder später je nach Bedarf erhöht werden. Auf Ceph werden Quotas angewendet, mit einer Block-/Datei-Aufteilung.

### Dev/Test (Single- oder Dual-Zone)

<img src={archi_overview_1az} />

Für eine "Dev/Test"-Version werden folgende Maschinen bereitgestellt:

| **AZ** | **Maschine** | **vCores** | **RAM** | **Lokaler Speicher**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 GB          | OS: 256 GB                           |
| AZ0n         | Control Plane     | 8                | 12 GB         | OS: 64 GB                            |
| AZ0n         | Worker Node 1 (*) | 12               | 24 GB         | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 GB         | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 GB         | OS: 64 GB + Ceph 300 GB minimum (**) |

(*) : Größe und Anzahl der Worker Nodes können an den Rechenleistungsbedarf des Kunden angepasst werden. Die Mindestanzahl an Worker Nodes beträgt 3 (aufgrund der Speicherreplikation). Die Größe der Worker Nodes kann angepasst werden, mit einem Minimum von 12 Kernen und 24 GB RAM; die Obergrenze pro Worker Node wird durch die Größe der verwendeten Hypervisoren bestimmt (potenziell also 112 Kerne/1536 GB RAM mit Performance-3-Blades). Die Anzahl der Worker Nodes ist auf 250 begrenzt. Der CNCF empfiehlt, Worker Nodes gleicher Größe zu verwenden. Die maximale Anzahl von Pods pro Worker Node beträgt 110.

(**) : 3 Worker Nodes werden als Storage Nodes verwendet und werden mit mindestens 300 GB Festplattenspeicher geliefert, was einem nutzbaren verteilten Speicher von 300 GB entspricht (die Daten werden dreifach repliziert). Der für den Kunden verfügbare freie Speicher beträgt etwa 150 GB. Diese anfängliche Größe kann bei der Bereitstellung oder später je nach Bedarf erhöht werden.

## RACI

### Architektur & Infrastruktur

| **Aktivität**                                                      | **Kunde** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Globale Architektur des Kubernetes-Dienstes definieren                    | C                | RA                     |
| Kubernetes-Dienst dimensionieren (Anzahl der Knoten, Ressourcen)        | C                | RA                     |
| Kubernetes-Dienst mit Standardkonfiguration installieren       | I                | RA                     |
| Konfiguration des Kubernetes-Dienstes                                      | C                | RA                     |
| Basisnetzwerk des Kubernetes-Dienstes konfigurieren                      | I                | RA                     |
| Bereitstellung der initialen Konfiguration für Identitäten und Zugriffsrechte   | C                | RA                     |
| Skalierungs- und Hochverfügbarkeitsstrategie definieren | C                | RA                     |

### Verwaltung von Projekten und Geschäftsanwendungen

| **Tätigkeit**                                  | **Kunde** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Erstellen und Verwalten von Kubernetes-Projekten              | RA               | I*                     |
| Bereitstellen und Verwalten von Anwendungen in Kubernetes | RA               | I*                     |
| Konfigurieren von CI/CD-Pipelines                       | RA               | I*                     |
| Verwalten von Container-Images und Registries     | RA               | I*                     |

*kann je nach Managed-Service-Vertrag auf "C" geändert werden

### Überwachung und Leistung

| **Aktivität**                             | **Kunde** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Überwachung der Leistung des Kubernetes-Dienstes | I                | RA*                    |
| Überwachung der Anwendungsleistung      | RA               |                        |
| Verwaltung der Alarme für den Kubernetes-Dienst | I                | RA*                    |
| Verwaltung der anwendungsbezogenen Alarme      | RA               |                        |

(*) : *Nur für Managed Kubernetes-Produktionscluster. In Dev/Test und in der Core-Version ist der Kunde vollständig autonom und trägt die volle Verantwortung.*

### Wartung und Aktualisierung der Infrastruktur

| **Aktivität**                                        | **Kunde** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Kubernetes/OS-Dienst aktualisieren                    | C                | RA                     |
| Sicherheitspatches für Kubernetes anwenden       | C                | RA                     |
| Bereitgestellte Anwendungen aktualisieren (Operatoren*) | C                | RA                     |

*Operator-Paket in Managed Kube enthalten - siehe Kapitel: Verwaltete Helm-Pakete

### Sicherheit

| **Aktivität**                                                              | **Kunde** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Sicherheit des Kubernetes-Dienstes verwalten                                       | RA               | RA*                    |
| Sicherheitsrichtlinien für Pods konfigurieren und verwalten                       | RA               | I                      |
| SSL/TLS-Zertifikate für den Kubernetes-Dienst verwalten                        | C                | RA*                    |
| SSL/TLS-Zertifikate für Anwendungen verwalten                             | RA               | I                      |
| Grundlegende rollenbasierte Zugriffskontrolle (RBAC) implementieren und verwalten | C                | R*                     |
| Kunden-spezifische rollenbasierte Zugriffskontrolle (RBAC) implementieren und verwalten  | RA               | I                      |

(*) : *Nur für Managed Kubernetes-Produktionscluster. In den Umgebungen Dev/Test und in der Core-Version ist der Kunde vollständig autonom und trägt die volle Verantwortung.*

### Sicherung und Notfallwiederherstellung

| **Aktivität**                                                          | **Kunde** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Sicherungsstrategie für den Kubernetes-Dienst definieren              | I                | RA                     |
| Sicherungen des Kubernetes-Dienstes implementieren und verwalten             | I                | RA                     |
| Sicherungsstrategie für die Anwendungen definieren                   | RA*              | I*                     |
| Sicherungen der Anwendungen implementieren und verwalten                  | RA*              | I*                     |
| Notfallwiederherstellungsverfahren für den Kubernetes-Dienst testen | CI               | RA                     |
| Notfallwiederherstellungsverfahren für die Anwendungen testen      | RA*              | CI*                    |

*kann je nach Managed-Service-Vertrag auf "CI | RA" geändert werden

### Support und Problembehebung

| **Aufgabe**                                       | **Kunde** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Bereitstellung von Level-1-Support für die Infrastruktur      | I                | RA                     |
| Bereitstellung von Level-2- und Level-3-Support für die Infrastruktur | I                | RA                     |
| Behebung von Problemen im Zusammenhang mit dem Kubernetes-Dienst      | C                | RA                     |
| Behebung von Problemen im Zusammenhang mit den Anwendungen           | RA               | I                      |

### Kapazitätsmanagement und Weiterentwicklung

*Nur für Managed Kubernetes Produktionscluster. Bei Dev/Test und der Core-Version liegt die volle Autonomie und Verantwortung beim Kunden.*

| **Aktivität**                                       | **Kunde** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Überwachung der Kubernetes-Ressourcennutzung        | C                | RA                     |
| Planung der Kapazitätsanpassung des Dienstes         | RA               | C                      |
| Implementierung von Kapazitätsänderungen                 | I                | RA                     |
| Verwaltung der Weiterentwicklung von Anwendungen und deren Ressourcen | RA               | I                      |

### Dokumentation und Compliance

| **Aktivität**                              | **Kunde** | **Cloud Temple** |
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
| Überwachung des Operator-Status                      | CI               | RA                     |
| Behebung von Operator-bezogenen Problemen              | CI               | RA                     |
| Verwaltung der Operator-Berechtigungen                     | CI               | RA                     |
| Verwaltung der Operator-Ressourcen (Hinzufügen/Entfernen)    | CI               | RA                     |
| Sicherung der Operator-Ressourcendaten        | CI               | RA                     |
| Überwachung der Operator-Ressourcen                        | CI               | RA                     |
| Wiederherstellung der Operator-Ressourcendaten      | CI               | RA                     |
| Sicherheitsaudit der Operatoren                           | CI               | RA                     |
| Support der Operatoren                                       | CI               | RA                     |
| Verwaltung der Operator-Lizenzen                      | CI               | RA                     |
| Verwaltung spezifischer Supportpläne für Operatoren | CI               | RA                     |

*Operator-Paket enthalten in Managed Kube - siehe Kapitel: Verwaltete Helm-Pakete

### Verwaltung von Anwendungen/Operatoren/CRDs in Kubernetes (vom Kunden)

*Nur für Managed Kubernetes-Produktionscluster. In Dev/Test und der Core-Version ist der Kunde vollständig autonom und trägt die volle Verantwortung.*

| **Aktivität**                                           | **Kunde** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Bereitstellung der CRDs                                         | I*               | RA*                    |
| Aktualisierung der Operatoren                                  | RA               | I                      |
| Überwachung des Operator-Status                      | RA               | I                      |
| Behebung von Problemen mit den Operatoren              | RA               | I                      |
| Verwaltung der Berechtigungen der Operatoren                     | RA               | I                      |
| Verwaltung der Ressourcen der Operatoren (Hinzufügen/Entfernen)    | RA               | I                      |
| Sicherung der Daten der Operator-Ressourcen        | RA               | I                      |
| Überwachung der Operator-Ressourcen                        | RA               | I                      |
| Wiederherstellung der Daten der Operator-Ressourcen      | RA               | I                      |
| Sicherheitsaudit der Operatoren                           | RA               | I                      |
| Support der Operatoren                                       | RA               | I                      |
| Lizenzverwaltung für Operatoren                      | RA               | I                      |
| Verwaltung spezifischer Supportpläne für Operatoren | RA               | I                      |

Bestimmte Operator-Dienstleistungen können je nach Managed-Service-Vertrag übernommen werden.

*kann je nach Managed-Service-Vertrag auf "A | RC" geändert werden

### Anwendungssupport

| **Tätigkeit**                         | **Kunde** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Anwendungssupport (externe Dienstleistung) | RA               | I                      |

Anwendungssupport kann über eine zusätzliche Dienstleistung bereitgestellt werden.

### RACI (synthétique)

- Cloud Temple : verantwortlich und ausführend (RA) für die *Core Kubernetes*-Grundlage und die zusätzlichen *Managed Kubernetes*-Dienste (sécurité, sauvegarde, supervision)
- Kunde : verantwortlich und ausführend (RA) für die Anwendungsprojekte, Business-Operatoren, CI/CD-Pipelines, Anwendungssicherungen.
- Grauzone : Anpassungen und Erweiterungen (IAM, opérateurs spécifiques, durcissement de conformité/sécurité du cluster) - projektbasiert abgerechnet.