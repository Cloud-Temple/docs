---
title: Übersicht
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu beherrschen.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt, unsere Dienste mit detaillierten Anleitungen zu konfigurieren und zu nutzen.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed Kubernetes von Cloud Temple ist eine Container-Orchestrierungslösung, die auf Open-Source-Produkten basiert und entwickelt wurde, um ein hohes Maß an Sicherheit, Resilienz und Automatisierung auf den SecNumcloud-Plattformen von Cloud Temple zu bieten. Jeder Cluster wird in einer vollständig dem Kunden gewidmeten IaaS-Umgebung von Cloud-Temple bereitgestellt.

Dieses Produkt ist für Teams mit fundierten Kubernetes-Kenntnissen und Open-Source-Enthusiasten konzipiert, die eine native, portable Lösung ohne herstellerspezifische Schichten auf einem minimalistischen und unveränderlichen Betriebssystem suchen, das für Automatisierung und Sicherheit ausgelegt ist.

### Kernvorteile

- **Souveränität und Reversibilität** : Die Lösung basiert auf Open-Source-Standards (Kubernetes CNCF), um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten. Das im Produkt enthaltene Backup-Tool Veeam Kasten ist speziell dafür entwickelt, Migrationen von einer Cloud in eine andere zu erleichtern.
- **"Zero-Trust"-Sicherheit und Governance** : Die Architektur basiert auf Talos OS, einem unveränderlichen Betriebssystem ohne direkten Zugriff (weder Shell noch SSH), was die Angriffsfläche drastisch reduziert. Dieser Ansatz wird durch Governance-Tools wie Kyverno für das Policy-Management und Capsule für das feingranulare Rechte-Management ergänzt und bildet eine solide Grundlage für eine "Zero-Trust"-Sicherheitsstrategie.
- **Kostenkontrolle und Integration** : Die Lösung integriert nativ FinOps-Tools wie OpenCost für eine präzise Überwachung der Ressourcenverbräuche. Das Geschäftsmodell ist transparent und basiert auf den verbrauchten IaaS-Ressourcen. Der Einsatz anerkannter Open-Source-Komponenten (Cilium, Ceph, ArgoCD) erleichtert die Integration in Ihre bestehenden Ökosysteme.

### Eine vollständige und sofort einsatzbereite Plattform

Die Lösung enthält von Haus aus einen vollständigen und konsistenten Stack aus hochmodernen Open-Source-Tools, um alle Anforderungen des Anwendungslifecycles abzudecken:

- **Netzwerk und Sicherheit** : Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Speicher** : Rook-Ceph
- **Kontinuierliche Bereitstellung (GitOps)** : ArgoCD
- **Observierbarkeit** : Prometheus, Grafana, Loki
- **Sicherung und Migration** : Veeam Kasten
- **Kostenmanagement (FinOps)** : OpenCost

---

## Deployment-Architekturen

Wir bieten zwei unterschiedliche Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungsumgebungen oder kritische Produktionsumgebungen.

### Architektur "Dev/Test"

Ideal für POC-Umgebungen, werden mit dieser kompakten Architektur alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ) bereitgestellt.

- **Einsatzszenarien** : Entwicklung, Tests, Proof-of-Concept (POC).
- **Kernmerkmale** :
  - 1 Control-Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Der verteilte Speicher (Ceph) ist auf den Worker-Knoten ko-lokalisiert.
  - Bietet kein SLA für hohe Verfügbarkeit.
  - keine Sicherheitsbeschränkungen

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Architecture Mono-AZ" />

### Produktionsarchitektur (Multi-AZ)

Diese Architektur ist für Produktionsumgebungen und kritische Anwendungen konzipiert und verteilt die Ressourcen auf drei Verfügbarkeitszonen (AZ), um hohe Verfügbarkeit und maximale Resilienz gemäß den SecNumCloud-Anforderungen zu gewährleisten.

- **Einsatzszenarien** : Produktionsanwendungen, kritische Dienste, Plattformen mit SLA-Anforderungen.
- **Kernmerkmale** :
  - **Hohe Verfügbarkeit** : 3 Control-Plane-Knoten, verteilt auf 3 AZ.
  - **Dedizierter Speicher** : 3 dedizierte und verteilte Speicherknoten für Leistung und Resilienz.
  - **Verteilte Worker** : Mindestens 3 Worker-Knoten, einer pro AZ.
  - **Bare-Metal-Knoten (Optional)** : Optionale Integration von Worker-Knoten vom Typ **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere die **GPU-Unterstützung**.
  - **SLA von 99,95 %**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Architecture Multi-AZ" />

---

### Detaillierte technische Komponenten

Das Angebot umfasst im Detail die folgenden Komponenten:

- CNI Cilium, mit Observability-Oberfläche (Hubble)
- Interne und externe Ingresses mit MetalLB und nginx
- Verteilte Speicherung mit Rook-Ceph
- Cert-Manager
- ArgoCD
- Prometheus-Stack (Prometheus, Grafana, Loki)
- Container-Registry Harbor
- Kostenmanagement mit OpenCost
- Erweiterte Sicherheitsstrategien mit Kyverno und Capsule
- Veeam Kasten (Backup, Automatisierung über Umgebungen hinweg und Reversibilität)
- SSO-Authentifizierung mit einem externen OIDC-Identity-Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)