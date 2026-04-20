---
title: Managed Kubernetes Übersicht
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu meistern.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Einstiegsleitfaden</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anleitungen folgen.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt, wie Sie unsere Dienste mit detaillierten Leitfäden konfigurieren und nutzen.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple ist eine Container-Orchestrierungslösung, die auf Open-Source-Produkten basiert und darauf ausgelegt ist, ein hohes Maß an Sicherheit, Resilienz und Automatisierung auf den SecNumCloud-Plattformen von Cloud Temple zu bieten. Jeder Cluster wird in einer Cloud Temple IaaS-Umgebung bereitgestellt, die vollständig dem Kunden gewidmet ist.

Dieses Angebot richtet sich an Teams mit guten Kubernetes-Kenntnissen und Open-Source-Enthusiasten, die eine native, portable Lösung ohne Hersteller-Overlay suchen, auf einem minimalistischen und unveränderlichen OS, das für Automatisierung und Sicherheit ausgelegt ist.

### Wesentliche Vorteile

- **Souveränität und Reversibilität**: Die Lösung stützt sich auf Open-Source-Standards (Kubernetes CNCF), um jede technologische Abhängigkeit zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten. Das Backup-Tool Veeam Kasten, das im Angebot enthalten ist, wurde speziell entwickelt, um Migrationen von einer Cloud zur anderen zu erleichtern.
- **"Zero-Trust"-Sicherheit und Governance**: Die Architektur basiert auf Talos OS, einem unveränderlichen Betriebssystem ohne direkten Zugang (kein Shell, kein SSH), was die Angriffsfläche drastisch reduziert. Dieser Ansatz ist mit Governance-Tools wie Kyverno für das Richtlinienmanagement und Capsule für die fein granulierte Rechteverwaltung gekoppelt und bildet eine solide Grundlage für eine "Zero-Trust"-Sicherheitsstrategie.
- **Kostenkontrolle und Integration**: Die Lösung integriert nativ FinOps-Tools wie OpenCost für eine präzise Verbrauchsverfolgung. Das Preismodell ist transparent, basiert auf verbrauchten IaaS-Ressourcen, und die Verwendung anerkannter Open-Source-Komponenten (Cilium, Ceph, ArgoCD) erleichtert die Integration in Ihre bestehenden Ökosysteme.

### Eine vollständige und einsatzbereite Plattform

Die Lösung enthält nativ einen vollständigen und kohärenten Stack modernster Open-Source-Tools, um alle Bedürfnisse des Anwendungslebenszyklus abzudecken:

- **Netzwerk und Sicherheit**: Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Speicher**: Rook-Ceph
- **Continuous Deployment (GitOps)**: ArgoCD
- **Observability**: Prometheus, Grafana, Loki
- **Backup und Migration**: Veeam Kasten
- **Kostenmanagement (FinOps)**: OpenCost

---

## Deployment-Architekturen

Wir bieten zwei unterschiedliche Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungsumgebungen oder kritische Produktionsumgebungen.

### "Dev/Test"-Architektur

Ideal für POC-Umgebungen – diese kompakte Architektur stellt alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ) bereit.

- **Anwendungsfälle**: Entwicklung, Tests, Proof-of-Concept (POC).
- **Wesentliche Punkte**:
  - 1 Control Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Verteilter Speicher (Ceph) ist auf den Worker-Knoten co-lokalisiert.
  - Kein Hochverfügbarkeits-SLA.
  - Keine Sicherheitsbeschränkungen.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Mono-AZ-Architektur" />

### Produktionsarchitektur (Multi-AZ)

Für Produktion und kritische Anwendungen konzipiert, verteilt diese Architektur Ressourcen auf drei Verfügbarkeitszonen (AZ), um hohe Verfügbarkeit und maximale Resilienz gemäß SecNumCloud-Anforderungen zu gewährleisten.

- **Anwendungsfälle**: Produktionsanwendungen, kritische Dienste, Plattformen, die ein SLA benötigen.
- **Wesentliche Punkte**:
  - **Hohe Verfügbarkeit**: 3 Control Plane-Knoten, verteilt auf 3 AZs.
  - **Dedizierter Speicher**: 3 dedizierte und verteilte Speicherknoten für Leistung und Resilienz.
  - **Verteilte Worker**: Mindestens 3 Worker-Knoten, einer pro AZ.
  - **Bare Metal-Knoten (Optional)**: Mögliche Integration von Worker-Knoten des Typs **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere **GPU-Unterstützung**.
  - **SLA von 99,90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Multi-AZ-Architektur" />

---

### Detaillierte technische Komponenten

Das Angebot umfasst im Detail die folgenden Komponenten:

- CNI Cilium, mit Observability-Schnittstelle (Hubble)
- Interne und externe Ingresses MetalLB und nginx
- Verteilter Speicher Rook-Ceph
- Cert-Manager
- ArgoCD
- Prometheus-Stack (Prometheus, Grafana, Loki)
- Container-Registry Harbor
- Kostenmanagement mit OpenCost
- Erweiterte Sicherheitsrichtlinien mit Kyverno und Capsule
- Veeam Kasten (Backup, umgebungsübergreifende Automatisierungen und Reversibilität)
- SSO-Authentifizierung mit einem externen OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)
