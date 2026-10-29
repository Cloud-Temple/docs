---
title: Konzepte
sidebar_label: Konzepte (Core)
---
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Einführung

Managed Core Kubernetes ist eine verwaltete Basis für die Container-Orchestrierung, die auf von der CNCF validierten Open-Source-Standards beruht. Jeder Cluster wird in einer dem Kunden dedizierten Umgebung bereitgestellt, auf einer einzigen Verfügbarkeitszone oder auf drei. Die Basis stellt die Grundlagen von Kubernetes bereit (OS, Netzwerk, Load Balancer, verteilter Speicher) und lässt Ihnen die Freiheit, Ihre Plattform mit Ihren eigenen Tools für kontinuierliche Bereitstellung, Observability, Sicherung oder Sicherheit aufzubauen.

Für eine sofort einsatzbereit gelieferte Plattform, in die diese Tools bereits integriert sind, siehe das Angebot [Managed Kubernetes](../managed_kubernetes/concepts.md), das die beiden Angebote auch Komponente für Komponente vergleicht.

### Zielgruppen und Anwendungsfälle

Managed Core Kubernetes richtet sich an Teams, die Kubernetes und das Cloud-native-Ökosystem beherrschen: Plattform-Teams, Cloud-Architekten, Organisationen mit eigenem technischen Stack und regulierte Unternehmen. Typische Anwendungsfälle:

- **Interne Plattformen (IDP)**: Aufbau einer maßgeschneiderten Plattform für Entwickler.
- **Cloud-native Anwendungen**: Microservices-Architekturen mit einem individuellen Stack.
- **Mehrere Umgebungen**: Trennung von Entwicklung, Test und Produktion.
- **Einhaltung regulatorischer Vorgaben**: Bereitstellungen auf einer souveränen und kontrollierten Basis.

## Vorteile

| Vorteil                | Beschreibung                                                                                                       |
|------------------------|--------------------------------------------------------------------------------------------------------------------|
| Verwaltete Grundlagen  | Die Infrastruktur, das OS und die Komponenten der Basis werden für Sie verwaltet.                                  |
| Freiheit beim Aufbau   | Sie installieren und konfigurieren Ihren eigenen Stack (Observability, CI/CD, Sicherheit…).                        |
| Hochverfügbarkeit      | In der Produktion ist der Cluster auf drei Verfügbarkeitszonen verteilt.                                           |
| Security by Design     | Minimalistisches und unveränderliches OS, ausschließlich per API verwaltet, ohne Shell und ohne SSH-Zugang.        |
| CNCF-kompatibel        | Die Open-Source-Standards vermeiden technologische Abhängigkeit und gewährleisten die Portabilität Ihrer Anwendungen. |

## Funktionen

Die Cluster basieren auf Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), einem leichtgewichtigen und sicheren, auf Kubernetes ausgerichteten Betriebssystem. Es ist unveränderlich, ohne Shell und ohne SSH-Zugang, und wird ausschließlich deklarativ über eine gRPC-API konfiguriert.

| Komponente                  | Beschreibung                                                                                                  |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| CNI Cilium                  | Container-Netzwerk und Netzwerkrichtlinien.                                                                   |
| MetalLB                     | Load Balancer, um Dienste intern oder über öffentliche IPs bereitzustellen.                                   |
| Verteilter Speicher Rook-Ceph | Persistente Volumes mit den *storage-classes* *ceph-block*, *ceph-bucket* und *ceph-filesystem*, 7.500 IOPS. |
| Lokaler Speicher TopoLVM (optional) | Schneller Speicher auf den Worker Nodes, für Anwendungen, die ihre Daten selbst replizieren.      |

Die Anwendungskomponenten (Ingress, Observability, Sicherung, Zertifikatsverwaltung, Governance) sind nicht enthalten: Sie wählen und betreiben sie selbst.

## Architektur

### Produktion (multizonal)

<img src={archi_overview} />

Der Produktionscluster ist auf drei Verfügbarkeitszonen verteilt:

- **Control Plane**: drei Knoten, einer pro Zone;
- **Speicherknoten**: drei dedizierte Rook-Ceph-Knoten, einer pro Zone, mit über die drei Zonen replizierten Daten;
- **Worker-Knoten**: mindestens drei, einer pro Zone, je nach Bedarf anpassbar;
- **Bare Metal Worker-Knoten** (optional): für spezifische Leistungsanforderungen, insbesondere GPUs;
- **Git Runner**: ein Knoten für die CI/CD-Pipelines;
- **verwaltete Firewall**: zwei virtuelle Maschinen, die die öffentlichen IPs der Kubernetes-API filtern.

### Dev/Test (eine oder zwei Zonen)

<img src={archi_overview_1az} />

Der Entwicklungs- und Testcluster wird auf einer einzigen Verfügbarkeitszone bereitgestellt, mit einer Control Plane, mindestens drei Worker-Knoten und einem Git Runner. Der Ceph-Speicher wird auf den Worker-Knoten gemeinsam genutzt.

### Integrationen

- **Identitätsanbieter**: optionale Integration über OIDC.
- **IaaS Cloud Temple**: Verbindung der Cluster mit virtualisierten Ressourcen, etwa Datenbanken oder Middleware-Komponenten.

## Regionen und Verfügbarkeitszonen

Managed Core Kubernetes ist in der Region FR1 verfügbar. Ein Produktionscluster ist auf drei Verfügbarkeitszonen verteilt; ein Entwicklungs- und Testcluster wird auf einer einzigen bereitgestellt. Die Daten werden in Frankreich gehostet.

## Technische Spezifikationen

### Knoten eines Produktionsclusters

| **Maschine**        | **Anzahl**  | **vCores** | **RAM** | **Lokaler Speicher**                               |
| ------------------- | ----------- | ---------- | ------- | -------------------------------------------------- |
| Git Runner          | 1           | 4          | 8 GB    | OS: 256 GB                                         |
| Control Plane       | 3 (1 pro AZ) | 8         | 12 GB   | OS: 64 GB                                          |
| Storage Node        | 3 (1 pro AZ) | 12        | 24 GB   | OS: 64 GB + Ceph mindestens 500 GB (~350 GB nutzbar) |
| Worker Node         | 3 und mehr (mindestens 1 pro AZ) | 12 und mehr | 24 GB und mehr | OS: 64 GB                |

### Knoten eines Entwicklungs- und Testclusters

| **Maschine**  | **Anzahl** | **vCores** | **RAM** | **Lokaler Speicher**                             |
| ------------- | ---------- | ---------- | ------- | ------------------------------------------------ |
| Git Runner    | 1          | 4          | 8 GB    | OS: 256 GB                                       |
| Control Plane | 1          | 8          | 12 GB   | OS: 64 GB                                        |
| Worker Node   | 3 und mehr | 12 und mehr | 24 GB und mehr | OS: 64 GB + Ceph mindestens 300 GB (~150 GB nutzbar) |

In Entwicklung und Test dienen drei Worker Nodes zugleich als Speicherknoten: Dieses Minimum ergibt sich aus der Replikation des Speichers.

### Grenzen

| Parameter                        | Produktion                          | Entwicklung und Test  |
|----------------------------------|-------------------------------------|-----------------------|
| Anzahl der Worker Nodes          | mindestens 3 (1 pro Zone), höchstens 100 | mindestens 3, höchstens 250 |
| Mindestgröße eines Worker Node   | 12 Kerne, 24 GB RAM                 | 12 Kerne, 24 GB RAM   |
| Pods pro Worker Node             | 110                                 | 110                   |

## Sicherheit und Compliance

Managed Core Kubernetes ist nach HDS und ISO 27001 zertifiziert und auf SecNumCloud-qualifizierten und C5-konformen Diensten verfügbar.

- **Unveränderliches OS**: ohne Shell und ohne SSH-Zugang, ausschließlich per API verwaltet.
- **Verschlüsselung**: Daten im Ruhezustand und bei der Übertragung verschlüsselt, physische Verschlüsselung der Verbindungen zwischen Verfügbarkeitszonen.
- **Nachvollziehbarkeit**: vollständiges Audit-Protokoll.
- **Datenresidenz**: Frankreich (FR1), in Standard-Kubernetes-Formaten.

## Versionen und Lebenszyklus

- **Unterstütztes Kubernetes:** N-2, wobei etwa alle vier Monate ein neues Release unterstützt wird.
- **Updates:**
  - **Major-Updates** (Kubernetes, Talos OS): dreimal pro Jahr geplant, als Rolling Update, ohne Unterbrechung;
  - **Minor-Updates und Sicherheitspatches**: automatisch innerhalb von 30 bis 60 Tagen angewendet.
- **Abkündigung:** Die Version N-3 wird 90 Tage nach Erscheinen der Version N abgekündigt.

## Dienstverfügbarkeit

Das Verfügbarkeitsziel eines Produktionsclusters (Kubernetes-API) beträgt 99,95 %, gemessen über einen Monat. Entwicklungs- und Testcluster haben kein Verfügbarkeitsziel.

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten ist in der [Verantwortlichkeitsmatrix (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md) beschrieben. Für das Core-Angebot gilt:

- **Cloud Temple** ist für die Basis verantwortlich: Infrastruktur, OS, Komponenten der Basis und deren Updates. Der Support der Stufen 1, 2 und 3 ist für diesen Umfang enthalten; die Reaktionszeiten hängen vom Schweregrad des Vorfalls ab (P1 bis P4).
- **Der Kunde** ist vollständig autonom und verantwortlich für alles, was er auf der Basis bereitstellt: Anwendungen, Operatoren, Tools für Überwachung, Sicherung und Sicherheit.

## Reversibilität

Die Cluster beruhen auf Open-Source-Standards und Standard-Kubernetes-Formaten, was die Portabilität Ihrer Anwendungen gewährleistet.

| Vorgang                   | Lieferergebnis             | Frist       | Kosten     |
|---------------------------|----------------------------|-------------|------------|
| Export der Anwendungen    | Kubernetes-YAML-Manifeste  | 15 Tage     | Kostenlos  |
| Unterstützung bei der Migration | Technischer Support  | Auf Anfrage | Auf Angebot |

## Preise

Der verwaltete Dienst wird monatlich pro Cluster abgerechnet; die zugrunde liegende IaaS-Infrastruktur (Compute, Speicher, Netzwerk) wird zusätzlich je nach Dimensionierung abgerechnet. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Managed Kubernetes — Preise](https://www.cloud-temple.com/produits/managed-kubernetes/).
