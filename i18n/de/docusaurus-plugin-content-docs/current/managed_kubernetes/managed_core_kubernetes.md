---
title: Übersicht
---
import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Core Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu beherrschen.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Schnellstart-Anleitung</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt, unsere Dienste mit detaillierten Anleitungen zu konfigurieren und zu nutzen.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes von Cloud Temple ist eine Container-Orchestrierungslösung, die auf einer Auswahl von Open-Source-Produkten basiert und darauf ausgelegt ist, eine sichere, resiliente und automatisierte Grundlage auf den SecNumCloud-Plattformen von Cloud Temple zu bieten. Jeder Cluster wird in einer vollständig dem Kunden gewidmeten IaaS-Umgebung von Cloud-Temple bereitgestellt.

Dieses Produkt ist für Teams konzipiert, die über eine hervorragende Beherrschung von Kubernetes und Cloud-Native-Tools verfügen und ihre eigene Plattform auf minimalistischen und robusten Grundlagen aufbauen möchten. Es richtet sich an Open-Source-Enthusiasten, die eine schlanke, portable Lösung ohne herstellerspezifische Zusatzschichten auf einem minimalistischen und unveränderlichen Betriebssystem suchen, das für Automatisierung und Sicherheit konzipiert ist.

### Wichtige Vorteile

- **Souveränität und Reversibilität** : Die Lösung basiert ausschließlich auf Open-Source-Standards (Kubernetes CNCF), um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Sicherheit "Zero-Trust" by Design** : Die Architektur basiert auf Talos OS, einem unveränderlichen Betriebssystem ohne direkten Zugriff (ni shell, ni SSH), was die Angriffsfläche drastisch reduziert und eine solide Grundlage für eine "Zero-Trust"-Sicherheitsstrategie bildet.
- **Moderne Netzwerkgrundlagen** : Die Integration von Cilium für CNI und MetalLB zur Dienstbereitstellung bietet eine leistungsstarke und standardkonforme Netzwerkbasis, die bereit ist, Ihre eigenen Sicherheits- und Filterkomponenten aufzunehmen.

### Eine Basisplattform, bereit zur Erweiterung

Das "Managed Core"-Angebot enthält von Haus aus einen minimalen und konsistenten Stack modernster Open-Source-Tools, um Ihnen die Grundlage für einen Kubernetes-Cluster :

- **Betriebssystem und Netzwerk** : Talos, Cilium, MetalLB

Auf dieser Grundlage sind Sie frei, Ihre eigenen Tools für kontinuierliche Bereitstellung, Observability, Sicherung und Kostenmanagement zu integrieren.

---

## Deployment-Architekturen

Wir bieten zwei unterschiedliche Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungsumgebungen oder kritische Produktionsumgebungen.

### Architektur "Dev/Test"

Ideal für POC-Umgebungen, bereitstellt diese kompakte Architektur alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ).

- **Einsatzszenarien** : Entwicklung, Tests, Proof-of-Concept (POC).
- **Kernmerkmale** :
  - 1 Control-Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Kein SLA für hohe Verfügbarkeit.
  - keine Sicherheitsbeschränkungen

<img src={archiOverview1az} alt="Mono-AZ-Architektur" />

### Produktionsarchitektur (Multi-AZ)

Entwickelt für Produktionsumgebungen und kritische Anwendungen verteilt diese Architektur die Ressourcen über drei Verfügbarkeitszonen (AZ), um hohe Verfügbarkeit und maximale Resilienz gemäß den SecNumCloud-Anforderungen zu gewährleisten.

- **Einsatzszenario** : Produktionsanwendungen, kritische Dienste, Plattformen, die ein SLA erfordern.
- **Kernmerkmale** :
  - **Hohe Verfügbarkeit** : 3 Control-Plane-Knoten verteilt auf 3 AZ.
  - **Dedizierter Speicher** : 3 dedizierte und verteilte Speicherknoten für Performance und Resilienz.
  - **Verteilte Worker** : Mindestens 3 Worker-Knoten, jeweils einer pro AZ.
  - **Bare-Metal-Knoten (Optional)** : Optionale Integration von Worker-Knoten vom Typ **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere zur **GPU-Unterstützung**.
  - **SLA von 99,95%**, monatlich gemessen.


<img src={archiOverview} alt="Architecture Multi-AZ" />

---

### Enthaltene technische Komponenten

Das Angebot "Managed Core" umfasst die folgenden Komponenten:

- **Betriebssystem** : Talos OS
- **Speicher** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Load Balancer** : MetalLB