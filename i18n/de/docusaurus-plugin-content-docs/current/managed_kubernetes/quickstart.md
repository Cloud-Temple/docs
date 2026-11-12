---
title: Einstiegsguide
---
Willkommen beim Einstiegsguide für **Managed Kubernetes** von Cloud Temple.

Das Ziel dieses Abschnitts ist es, Sie zu den erforderlichen Ressourcen zu führen, um Ihr Cluster in Betrieb zu nehmen.

---

## Vor der ersten Nutzung

Um mit Ihrem Cluster zu interagieren, sind mehrere Elemente unerlässlich:

1. **Die Datei `kubeconfig`**: Diese Datei wird Ihnen von den Cloud Temple-Teams bei der Übergabe des Dienstes bereitgestellt und enthält alle Informationen für eine sichere Verbindung.
2. **Das Tool `kubectl`**: Dies ist die standardmäßige Befehlszeilenschnittstelle zur Steuerung eines Kubernetes-Clusters.
3. **Das Tool `kubelogin`** (falls OIDC verwendet wird): Wenn Ihr Cluster so konfiguriert ist, dass er sich über einen OIDC-Identitätsanbieter (wie Entra ID/Azure AD) authentifiziert, müssen Sie das Tool `kubelogin` installieren, um den Authentifizierungsablauf zu verwalten. Folgen Sie dem [Installationsguide für kubelogin](https://github.com/int128/kubelogin).

> ℹ️[Empfohlene grafische Tools:]
> Für eine visuellere Erfahrung und eine vereinfachte Verwaltung Ihrer Ressourcen empfehlen wir die Verwendung von **Lens**. Es ist ein leistungsfähiges Tool für Kubernetes, mit dem Sie Ihr Cluster erkunden, Ihre Anwendungen verwalten und deren Status grafisch visualisieren können.
> Einige unserer Tutorials verwenden Lens, um die Operationen zu veranschaulichen. Sie können es hier herunterladen: [https://k8slens.dev/](https://k8slens.dev/).

---

## Zugriff auf Ihr Managed Kubernetes-Cluster

Ihr Produktionscluster wird durch einen Code mit 5 Buchstaben (6 Buchstaben in Dev/Test) identifiziert. Dieser Code wird verwendet, um die URLs der verschiedenen Schnittstellen zu bilden. In den Tutorials werden wir **"ctodev"** verwenden.

Die URLs sind:

- Kubernetes-API (verwendet in kubeconfig):

  - **Kennung**.mk.ms-cloud-temple.com:6443  (in unserem Beispiel also: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )
- öffentliche URLs:

  - k10.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - grafana.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - harbor.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - opencost.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**Kennung**.mk.ms-cloud-temple.com

>ℹ️[Gesicherte URLs]
>Die oben genannten URLs sind nur von bekannten öffentlichen IPs aus zugänglich, die im Firewall der Lösung konfiguriert sind. Wenn Sie eine öffentliche IP hinzufügen möchten, müssen Sie einen Support-Antrag stellen.
>

>ℹ️[Intern URLs]
>Die unten genannten URLs sind nicht im Internet ausgesetzt. Sie sind nur im internen Managed Kubernetes-Netzwerk zugänglich.
>  - ceph.internal.**Kennung**.mk.ms-cloud-temple.com
>  - argocd.internal.**Kennung**.mk.ms-cloud-temple.com
>  - hubble.internal.**Kennung**.mk.ms-cloud-temple.com

---

## Ihre Berechtigungen

>⚠[Dev/Test und Kubernetes Core]
>Für Managed Kubernetes-Cluster **"Dev/Test"** und Core-Cluster verfügt der Ihnen bereitgestellte Service-Account über alle Berechtigungen im gesamten Cluster (ClusterAdmin).

Auf den Clustern **"Production"** sind Ihre Berechtigungen eingeschränkt. Sie verfügen über ein Recht **"Erweiterte Viewer"** auf die Ressourcen des Clusters. Dieses Recht gewährt einen schreibgeschützten Zugriff auf wichtige Ressourcen, sowohl auf Clusterebene als auch für die Diagnose:

- Namespaces: erlauben es den Mietern, die Namensräume für Tools und Dashboards aufzulisten.
- Pods, Deployments, ReplicaSets usw.: erlauben es den Mietern, die auf dem Cluster bereitgestellten Ressourcen aufzulisten.
- Nodes: bieten eine Übersicht über die Kapazität, Taints und Labels der Nodes, um das Verhalten des Schedulers zu verstehen.
- StorageClasses, PVs, PVCs, VolumeAttachments und CSIDrivers: ermöglichen es den Mietern, die verfügbaren Speicherklassen zu identifizieren und Probleme bei der Bindung zwischen PVC und PV oder Fehler im Zusammenhang mit CSI-Treibern zu beheben.
- IngressClasses: informieren die Benutzer über die verfügbaren Ingress-Controller für das Routing der Anwendungen.
- NetworkPolicies, ResourceQuotas, LimitRanges und Events: wesentlich für die Diagnose von Netzwerkbeschränkungen, Scheduling-Fehlern oder Quota-Verstößen.

Der Ihnen anvertraute Service-Account ist auch **Eigentümer eines ersten *Tenant* Capsule** geworden.
Sie können Namespaces erstellen, die Ihrem Capsule-Tenant zugeordnet werden.
Externe Konten (OIDC) sind Mitglieder desselben Capsule-Tenants, was es ihnen ermöglicht, frei innerhalb der dem Tenant zugeordneten **Namespaces** zu interagieren. (Siehe das Tutorial "Berechtigungen mit Capsule verwalten")

Bestimmte Aktionen sind nicht erlaubt:

- Capsule-Tenants auflisten / erstellen
- CRDs erstellen: Wenn Sie eine Anwendung mit CRDs bereitstellen müssen (z. B. ein Helm-Chart eines Operators), müssen Sie mit dem Support interagieren, damit diese CRDs importiert werden (durch Extraktion der YAMLs aus dem Helm-Chart). Anschließend können Sie Ihr Helm-Chart mit der Option --skip-crds bereitstellen. Siehe: [Helm 3 Dokumentation](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Ihre erste Anwendung bereitstellen</h3>
      </div>
      <div className="card__body">
        <p>Folgen Sie einem detaillierten Guide, um sich zu verbinden, eine "Hello World"-Anwendung bereitzustellen und sie im Internet bereitzustellen.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Tutorial starten →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Das Netzwerk verstehen</h3>
      </div>
      <div className="card__body">
        <p>Entdecken Sie das Adressierungsschema, die Ingress-Controller und wie Sie Ihre Dienste sicher bereitstellen.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Netzwerk-Tutorial ansehen →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Berechtigungen mit Capsule verwalten</h3>
      </div>
      <div className="card__body">
        <p>Lernen Sie, wie Sie Capsule verwenden, um Tenants zu erstellen und Berechtigungen an Ihre Teams zu delegieren.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Capsule entdecken →</a>
      </div>
    </div>
  </div>
</div>
