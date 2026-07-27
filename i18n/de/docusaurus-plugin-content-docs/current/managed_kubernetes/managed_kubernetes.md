---
title: Übersicht
---

import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Kubernetes

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

**Managed Kubernetes** von Cloud Temple ist eine auf Open-Source-Standards (CNCF) basierende Container-Orchestrierungslösung. Sie wurde entwickelt, um ein hohes Maß an Sicherheit, Resilienz und Automatisierung auf den SecNumcloud-Plattformen von Cloud Temple zu bieten. Jeder Cluster wird in einer vollständig dem Kunden gewidmeten IaaS-Umgebung von Cloud-Temple bereitgestellt.

Um den Anforderungen Ihrer Teams bestmöglich gerecht zu werden, bieten wir zwei Varianten dieses Produkts an: **Managed Core Kubernetes** (eine minimalistische Basis) und **Managed Kubernetes** (eine vollständige „einsetzbereite“ Plattform).

---

## Zwei Ansätze für Ihre Cluster

### 1. Managed Core Kubernetes (Die minimalistische Basis)
Dieses Angebot richtet sich an Teams mit **ausgezeichneter Kubernetes-Expertise** und Erfahrung mit Cloud-Native-Tools, die ihre eigene Plattform auf minimalistischen und robusten Grundlagen aufbauen möchten. Es wendet sich an Open-Source-Enthusiasten, die eine schlanke, portable Lösung ohne herstellerspezifische Zusatzschicht suchen, die auf einem minimalistischen und unveränderlichen Betriebssystem basiert, das speziell für Automatisierung und Sicherheit konzipiert ist.

- **Betriebssystem und Netzwerk inklusive** : Talos OS, Rook-Ceph (Speicher), Cilium (CNI), MetalLB (Load Balancer).
- **Philosophie** : Auf dieser leistungsstarken und standardisierten Basis sind Sie frei, Ihre eigenen Tools für kontinuierliche Bereitstellung, Observability, Backup oder Sicherheit zu integrieren.

### 2. Managed Kubernetes (Die vollständige Plattform)
Diese Turnkey-Lösung wurde für Teams entwickelt, die eine **native, sofort einsatzbereite und All-in-One-Lösung** suchen, die die besten Open-Source-Standards integriert, um alle Anforderungen des Anwendungslifecycles abzudecken, ohne die Komponenten selbst zusammenstellen und warten zu müssen.

Zusätzlich zur "Core"-Grundlage (Talos, Ceph, Cilium, MetalLB) integriert sie nativ:
- **Netzwerk und Sicherheit** : Hubble, Ingress Nginx, Kyverno, Capsule, Cert-Manager.
- **Kontinuierliche Bereitstellung (GitOps)** : ArgoCD, Harbor-Container-Registry, Keda
- **Observability** : Vollständiger Stack (Prometheus, Grafana, Loki, Pyroscope).
- **Kostenmanagement (FinOps)** : OpenCost.
- **Sicherung und Wiederherstellung** : Veeam Kasten.
- **Identität** : SSO-Authentifizierung mit einem externen OIDC-Identity-Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...).

---

## Gemeinsame Kernvorteile

Unabhängig vom gewählten Angebot teilen unsere Kubernetes-Cluster diese grundlegenden Vorteile:

- **Souveränität und Reversibilität** : Die Lösung basiert auf Open-Source-Standards, um technologische Abhängigkeiten (*vendor lock-in*) zu vermeiden und die vollständige Portabilität Ihrer Anwendungen zu gewährleisten. (Mit Veeam Kasten in der Vollversion enthalten, um Cloud-zu-Cloud-Migrationen zu erleichtern).
- **"Zero-Trust"-Sicherheit by Design** : Die Architektur basiert auf **Talos OS**, einem unveränderlichen und ephemeren Linux-Betriebssystem, das speziell für Kubernetes entwickelt wurde. Es bietet keinen direkten Zugriff (weder Shell noch SSH), was die Angriffsfläche drastisch reduziert.
- **Kostenkontrolle** : Das Geschäftsmodell ist transparent und basiert ausschließlich auf den tatsächlich verbrauchten zugrunde liegenden IaaS-Ressourcen, ohne zusätzliche Lizenzkosten für den Orchestrator.

---

## Bereitstellungsarchitekturen

Wir bieten zwei unterschiedliche Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungsumgebungen oder kritische Produktionsumgebungen. Diese Architekturen gelten für beide Angebote (Core et Full).

### Architektur "Dev/Test"

Ideal für POC-Umgebungen, stellt diese kompakte Architektur alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ) bereit.

- **Einsatzszenarien** : Entwicklung, Tests, Proof-of-Concept (POC).
- **Kernmerkmale** :
  - 1 Control-Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Der verteilte Speicher (Ceph) ist auf den Worker-Knoten ko-lokalisiert.
  - Bietet kein High-Availability-SLA.
  - Keine architekturspezifischen Sicherheitsbeschränkungen.

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Produktionsarchitektur (Multi-AZ)

Entwickelt für die Produktion und kritische Anwendungen verteilt diese Architektur die Ressourcen auf drei Verfügbarkeitszonen (AZ), um hohe Verfügbarkeit und maximale Resilienz gemäß den SecNumCloud-Anforderungen zu gewährleisten.

- **Einsatzszenario** : Produktionsanwendungen, kritische Dienste, Plattformen, die ein SLA erfordern.
- **Kernmerkmale** :
  - **Hohe Verfügbarkeit** : 3 Control-Plane-Knoten auf 3 AZ verteilt.
  - **Dedizierter Speicher** : 3 dedizierte und verteilte Speicherknoten für Leistung und Resilienz.
  - **Verteilte Worker** : Mindestens 3 Worker-Knoten, einer pro AZ.
  - **Bare-Metal-Knoten (Optionnel)** : Mögliche Integration von Worker-Knoten vom Typ **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere die **GPU-Unterstützung**.
  - **SLA von 99,95%**, monatlich gemessen.

<img src={archiOverview} alt="Architecture Multi-AZ" />