---
title: Managed Core Kubernetes Übersicht
---

# Managed Core Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu meistern.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Einstiegsleitfaden</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anleitungen folgen.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt, wie Sie unsere Dienste mit detaillierten Leitfäden konfigurieren und nutzen.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes by Cloud Temple ist eine Container-Orchestrierungslösung, die auf einer Auswahl von Open-Source-Produkten basiert und darauf ausgelegt ist, eine sichere, resiliente und automatisierte Basisschicht auf den SecNumCloud-Plattformen von Cloud Temple zu bieten. Jeder Cluster wird in einer Cloud Temple IaaS-Umgebung bereitgestellt, die vollständig dem Kunden gewidmet ist.

Dieses Angebot richtet sich an Teams mit exzellenter Beherrschung von Kubernetes und Cloud Native-Tools, die ihre eigene Plattform auf minimalistischen und robusten Fundamenten aufbauen möchten. Es richtet sich an Open-Source-Enthusiasten, die eine schlichte, portable Lösung ohne Hersteller-Overlay suchen, auf einem minimalistischen und unveränderlichen OS, das für Automatisierung und Sicherheit ausgelegt ist.

### Wesentliche Vorteile

- **Souveränität und Reversibilität**: Die Lösung stützt sich ausschließlich auf Open-Source-Standards (Kubernetes CNCF), um jede technologische Abhängigkeit zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **"Zero-Trust"-Sicherheit by design**: Die Architektur basiert auf Talos OS, einem unveränderlichen Betriebssystem ohne direkten Zugang (kein Shell, kein SSH), was die Angriffsfläche drastisch reduziert und eine solide Grundlage für eine "Zero-Trust"-Sicherheitsstrategie bildet.
- **Moderne Netzwerkfundamente**: Die Integration von Cilium für CNI und MetalLB für die Diensteexposition bietet eine leistungsstarke und standardisierte Netzwerkbasis, bereit für Ihre eigenen Sicherheits- und Filterkomponenten.

### Eine Basisplattform, bereit zur Erweiterung

Das "Managed Core"-Angebot enthält nativ einen minimalen und kohärenten Stack modernster Open-Source-Tools, um Ihnen die Grundlagen eines Kubernetes-Clusters bereitzustellen:

- **OS und Netzwerk**: Talos, Cilium, MetalLB

Auf dieser Grundlage können Sie frei Ihre eigenen Tools für Continuous Deployment, Observability, Backup und Kostenmanagement integrieren.

---

## Deployment-Architekturen

Wir bieten zwei unterschiedliche Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungsumgebungen oder kritische Produktionsumgebungen.

### "Dev/Test"-Architektur

Ideal für POC-Umgebungen – diese kompakte Architektur stellt alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ) bereit.

- **Anwendungsfälle**: Entwicklung, Tests, Proof-of-Concept (POC).
- **Wesentliche Punkte**:
  - 1 Control Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Kein Hochverfügbarkeits-SLA.
  - Keine Sicherheitsbeschränkungen.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Mono-AZ-Architektur" />

### Produktionsarchitektur (Multi-AZ)

Für Produktion und kritische Anwendungen konzipiert, verteilt diese Architektur Ressourcen auf drei Verfügbarkeitszonen (AZ), um hohe Verfügbarkeit und maximale Resilienz gemäß SecNumCloud-Anforderungen zu gewährleisten.

- **Anwendungsfälle**: Produktionsanwendungen, kritische Dienste, Plattformen, die ein SLA benötigen.
- **Wesentliche Punkte**:
  - **Hohe Verfügbarkeit**: 3 Control Plane-Knoten, verteilt auf 3 AZs.
  - **Verteilte Worker**: Mindestens 3 Worker-Knoten, einer pro AZ.
  - **Bare Metal-Knoten (Optional)**: Mögliche Integration von Worker-Knoten des Typs **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere **GPU-Unterstützung**.
  - **SLA von 99,90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Multi-AZ-Architektur" />

---

### Enthaltene technische Komponenten

Das "Managed Core"-Angebot enthält die folgenden Komponenten:

- **Betriebssystem**: Talos OS
- **Speicher**: Rook-Ceph
- **CNI (Container Network Interface)**: Cilium
- **Load Balancer**: MetalLB
