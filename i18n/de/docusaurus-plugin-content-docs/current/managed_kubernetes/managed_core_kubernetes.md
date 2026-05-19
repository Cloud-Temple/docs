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
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell mit klaren und einfachen Anweisungen.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt die Konfiguration und Nutzung unserer Dienste mit detaillierten Anleitungen.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes von Cloud Temple ist eine Container-Orchestrierungslösung, die auf einer Auswahl Open-Source-Produkte basiert und darauf ausgelegt ist, eine sichere, resiliente und automatisierte Basis auf den SecNumCloud-Plattformen von Cloud Temple zu bieten. Jeder Cluster wird in einer vollständig dem Kunden gewidmeten IaaS-Umgebung von Cloud-Temple bereitgestellt.

Dieses Produkt ist für Teams konzipiert, die über hervorragende Kubernetes- und Cloud-Native-Tools-Kenntnisse verfügen und ihre eigene Plattform auf minimalistischen und robusten Grundlagen aufbauen möchten. Sie richtet sich an Open-Source-Enthusiasten, die eine aufgeräumte, portable Lösung ohne herstellerspezifische Aufschicht suchen, die auf einem minimalistischen und unveränderlichen Betriebssystem basiert, das für Automatisierung und Sicherheit konzipiert ist.

### Hauptvorteile

- **Souveränität und Reversibilität** : Die Lösung stützt sich ausschließlich auf Open-Source-Standards (Kubernetes CNCF), um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **„Zero-Trust“-Sicherheit by design** : Die Architektur basiert auf Talos OS, einem unveränderlichen Betriebssystem ohne direkten Zugriff (weder Shell noch SSH), was die Angriffsfläche drastisch reduziert und eine solide Grundlage für eine „Zero-Trust“-Sicherheitsstrategie bildet.
- **Moderne Netzwerkinfrastruktur** : Die Integration von Cilium für das CNI und MetalLB für die Dienstexposition bietet eine leistungsstarke und standardisierte Netzwerkgrundlage, die bereit ist, Ihre eigenen Sicherheits- und Filterkomponenten aufzunehmen.

### Eine Basisplattform, bereit zur Erweiterung

Das "Managed Core"-Angebot enthält nativ einen minimalen und konsistenten Stack modernster Open-Source-Tools, der Ihnen die Grundlagen für einen Kubernetes-Cluster bietet:

- **Betriebssystem und Netzwerk** : Talos, Cilium, MetalLB

Auf dieser Grundlage können Sie frei Ihre eigenen Tools für Continuous Deployment, Observability, Backup und Kostenmanagement integrieren.

---

## Bereitstellungsarchitekturen

Wir bieten zwei verschiedene Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungs- oder kritische Produktionsumgebungen.

### Architektur "Dev/Test"

Ideal für POC-Umgebungen, stellt diese kompakte Architektur alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ) bereit.

- **Anwendungsfall** : Entwicklung, Tests, Proof-of-Concept (POC).
- **Schlüsselaspekte** :
  - 1 Control-Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Kein SLA für Hochverfügbarkeit.
  - Keine Sicherheitsbeschränkungen

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Produktionsarchitektur (Multi-AZ)

Für den Produktivbetrieb und kritische Anwendungen konzipiert, verteilt diese Architektur die Ressourcen auf drei Verfügbarkeitszonen (AZ), um eine hohe Verfügbarkeit und maximale Resilienz gemäß den SecNumCloud-Anforderungen zu gewährleisten.

- **Anwendungsfall** : Produktivanwendungen, kritische Dienste, Plattformen mit SLA-Anforderungen.
- **Schlüsselaspekte** :
  - **Hohe Verfügbarkeit** : 3 Control-Plane-Knoten, verteilt auf 3 AZ.
  - **Verteilte Worker** : Mindestens 3 Worker-Knoten, jeweils einer pro AZ.
  - **Bare-Metal-Knoten (Optional)** : Möglichkeit zur Integration von Worker-Knoten vom Typ **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere die **GPU-Unterstützung**.
  - **SLA von 99,90 %**, monatlich gemessen.

<img src={archiOverview} alt="Multi-AZ-Architektur" />

---

### Enthaltene technische Komponenten

Das Angebot "Managed Core" umfasst die folgenden Komponenten:

- **Betriebssystem** : Talos OS
- **Speicher** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Load Balancer** : MetalLB