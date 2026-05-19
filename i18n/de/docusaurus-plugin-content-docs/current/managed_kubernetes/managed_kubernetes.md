---
title: Übersicht
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu meistern.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell mit klaren und einfachen Anweisungen.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt, unsere Dienste mit detaillierten Anleitungen zu konfigurieren und zu nutzen.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed Kubernetes von Cloud Temple ist eine auf Open-Source-Produkten basierende Container-Orchestrierungslösung, die entwickelt wurde, um auf den SecNumcloud-Plattformen von Cloud Temple ein hohes Maß an Sicherheit, Resilienz und Automatisierung zu bieten. Jeder Cluster wird in einer vollständig dem Kunden gewidmeten IaaS-Umgebung von Cloud-Temple bereitgestellt.

Dieses Produkt ist für Teams mit fundierten Kubernetes-Kenntnissen sowie Open-Source-Enthusiasten konzipiert, die eine native, portierbare Lösung ohne herstellerspezifische Aufsatzschicht auf einem minimalistischen und unveränderlichen Betriebssystem suchen, das für Automatisierung und Sicherheit entwickelt wurde.

### Schlüsselvorteile

- **Souveränität und Reversibilität** : Die Lösung stützt sich auf Open-Source-Standards (Kubernetes CNCF), um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten. Das im Produkt enthaltene Backup-Tool Veeam Kasten wurde speziell entwickelt, um Migrationen von einer Cloud in eine andere zu erleichtern.
- **"Zero-Trust"-Sicherheit und Governance** : Die Architektur basiert auf Talos OS, einem unveränderlichen Betriebssystem ohne direkten Zugriff (weder Shell noch SSH), was die Angriffsfläche drastisch reduziert. Dieser Ansatz wird durch Governance-Tools wie Kyverno für die Richtlinienverwaltung und Capsule für die feingranulare Berechtigungsverwaltung ergänzt, was eine solide Grundlage für eine "Zero-Trust"-Sicherheitsstrategie bildet.
- **Kostenkontrolle und Integration** : Die Lösung integriert nativ FinOps-Tools wie OpenCost für eine präzise Verbrauchsanalyse. Das Kostenmodell ist transparent, basiert auf den verbrauchten IaaS-Ressourcen, und die Nutzung anerkannter Open-Source-Komponenten (Cilium, Ceph, ArgoCD) erleichtert die Integration in Ihre bestehenden Ökosysteme.

### Eine vollständige und einsatzbereite Plattform

Die Lösung enthält nativ einen vollständigen und konsistenten Stack aus hochmodernen Open-Source-Tools, um alle Anforderungen des Anwendungslebenszyklus abzudecken:

- **Netzwerk und Sicherheit** : Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Speicher** : Rook-Ceph
- **Kontinuierliche Bereitstellung (GitOps)** : ArgoCD
- **Observability** : Prometheus, Grafana, Loki
- **Sicherung und Migration** : Veeam Kasten
- **Kostenmanagement (FinOps)** : OpenCost

---

## Bereitstellungsarchitekturen

Wir bieten zwei verschiedene Architekturen an, um Ihren Anforderungen gerecht zu werden, sei es für Entwicklungs- oder kritische Produktionsumgebungen.

### Architektur "Dev/Test"

Ideal für POC-Umgebungen, stellt diese kompakte Architektur alle Ressourcen innerhalb einer einzigen Verfügbarkeitszone (AZ) bereit.

- **Anwendungsfall** : Entwicklung, Tests, Proof-of-Concept (POC).
- **Wichtige Punkte** :
  - 1 Control-Plane-Knoten.
  - 3 Worker-Knoten (oder mehr).
  - Der verteilte Speicher (Ceph) ist auf den Worker-Knoten ko-lokalisiert.
  - Kein SLA für hohe Verfügbarkeit.
  - Keine Sicherheitsbeschränkungen

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Architecture Mono-AZ" />

### Produktionsarchitektur (Multi-AZ)

Für den Produktiveinsatz und kritische Anwendungen konzipiert, verteilt diese Architektur die Ressourcen auf drei Verfügbarkeitszonen (AZ), um eine hohe Verfügbarkeit und maximale Resilienz gemäß den SecNumCloud-Anforderungen zu gewährleisten.

- **Anwendungsfall** : Produktivanwendungen, kritische Dienste, Plattformen mit SLA-Anforderungen.
- **Hauptmerkmale** :
  - **Hohe Verfügbarkeit** : 3 Control-Plane-Knoten, verteilt auf 3 AZ.
  - **Dedizierter Speicher** : 3 dedizierte und verteilte Speicherknoten für Performance und Resilienz.
  - **Verteilte Worker** : Mindestens 3 Worker-Knoten, jeweils einer pro AZ.
  - **Bare-Metal-Knoten (Optionnel)** : Möglichkeit zur Integration von Worker-Knoten vom Typ **"Bare Metal"** für spezifische Leistungsanforderungen, insbesondere die **GPU-Unterstützung**.
  - **SLA von 99,90 %**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Multi-AZ-Architektur" />

---

### Detaillierte technische Komponenten

Das Angebot umfasst im Detail die folgenden Komponenten:

- CNI Cilium mit Observability-Schnittstelle (Hubble)
- Interne und externe Ingresses mit MetalLB und nginx
- Verteilter Speicher Rook-Ceph
- Cert-Manager
- ArgoCD
- Prometheus-Stack (Prometheus, Grafana, Loki)
- Container-Registry Harbor
- Kostenmanagement mit OpenCost
- Erweiterte Sicherheitsrichtlinien mit Kyverno und Capsule
- Veeam Kasten (Sicherung, umgebungsübergreifende Automatisierungen und Wiederherstellbarkeit)
- SSO-Authentifizierung mit einem externen OIDC-Identity-Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)