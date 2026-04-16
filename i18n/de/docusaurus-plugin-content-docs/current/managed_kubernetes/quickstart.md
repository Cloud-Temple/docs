---
title: Einstiegsanleitung
---

Willkommen bei der Einstiegsanleitung für **Managed Kubernetes** von Cloud Temple.

Ziel dieses Abschnitts ist es, Sie zu den notwendigen Ressourcen zu führen, um Ihren Cluster in Betrieb zu nehmen.

---

## Bevor Sie beginnen

Für die Interaktion mit Ihrem Cluster sind mehrere Elemente unverzichtbar:

1. **Die `kubeconfig`-Datei**: Diese Datei, die Ihnen bei der Dienstbereitstellung von den Cloud Temple-Teams übergeben wird, enthält alle Informationen für eine sichere Verbindung.
2. **Das `kubectl`-Tool**: Dies ist die Standard-Befehlszeilenschnittstelle zur Verwaltung eines Kubernetes-Clusters.
3. **Das `kubelogin`-Tool** (falls OIDC verwendet wird): Wenn Ihr Cluster für die Authentifizierung über einen OIDC-Identitätsanbieter (wie Entra ID/Azure AD) konfiguriert ist, müssen Sie das `kubelogin`-Tool installieren, um den Authentifizierungsfluss zu verwalten. Folgen Sie dem [kubelogin-Installationsleitfaden](https://github.com/int128/kubelogin).

:::info[Empfohlene grafische Tools:]
Für ein visuelleres Erlebnis und eine vereinfachte Verwaltung Ihrer Ressourcen empfehlen wir die Verwendung von **Lens**. Es ist ein leistungsstarkes Tool für Kubernetes, mit dem Sie Ihren Cluster erkunden, Ihre Anwendungen verwalten und deren Status grafisch visualisieren können.
Einige unserer Tutorials werden Lens zur Veranschaulichung der Vorgehensweisen verwenden. Sie können es hier herunterladen: [https://k8slens.dev/](https://k8slens.dev/).
:::

---

## Zugriff auf Ihren Managed Kubernetes-Cluster

Ihr Produktionscluster wird durch einen 5-Buchstaben-Code identifiziert (6 Buchstaben in Dev/Test). Dieser Code wird verwendet, um die URLs der verschiedenen Schnittstellen zu erstellen. In den Tutorials verwenden wir **"ctodev"**.

Die URLs lauten:

- Kubernetes-API (in kubeconfig verwendet):
  - **bezeichner**.mk.ms-cloud-temple.com:6443  (in unserem Beispiel also: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- Öffentliche URLs:
  - k10.external-secured.**bezeichner**.mk.ms-cloud-temple.com
  - grafana.external-secured.**bezeichner**.mk.ms-cloud-temple.com
  - harbor.external-secured.**bezeichner**.mk.ms-cloud-temple.com
  - opencost.external-secured.**bezeichner**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**bezeichner**.mk.ms-cloud-temple.com

:::info[Gesicherte URLs]
Die obigen URLs sind nur von bekannten öffentlichen IPs aus zugänglich, die in der Firewall der Lösung konfiguriert sind. Wenn Sie eine öffentliche IP hinzufügen möchten, müssen Sie eine Support-Anfrage stellen.
:::

- Interne URLs:
  - ceph.internal.**bezeichner**.mk.ms-cloud-temple.com
  - argocd.internal.**bezeichner**.mk.ms-cloud-temple.com
  - hubble.internal.**bezeichner**.mk.ms-cloud-temple.com

:::info[Interne URLs]
Die obigen URLs sind nicht über das Internet zugänglich. Sie sind nur im internen Managed Kubernetes-Netzwerk erreichbar.
:::

---

## Ihre Berechtigungen

:::warning[Dev/Test]
Für **"Dev/Test"** Managed Kubernetes-Cluster verfügt das Ihnen bereitgestellte Service-Konto über alle Berechtigungen auf dem gesamten Cluster (ClusterAdmin)
:::

Auf **"Produktions"**-Clustern sind Ihre Berechtigungen eingeschränkt. Sie verfügen über ein **"Erweitertes Lesezugriff"**-Recht auf Cluster-Ressourcen. Dieses Recht gewährt einen Nur-Lese-Zugriff auf Schlüsselressourcen, sowohl auf Cluster-Ebene als auch für Diagnosezwecke:

- Namespaces: ermöglichen Tenants das Auflisten von Namespaces für Tools und Dashboards.
- Pods, Deployments, Replicasets...: ermöglichen Tenants das Auflisten der im Cluster bereitgestellten Ressourcen.
- Nodes: bieten Einblick in Kapazität, Taints und Labels der Knoten, um das Verhalten des Schedulers zu verstehen.
- StorageClasses, PVs, PVCs, VolumeAttachments und CSIDrivers: ermöglichen Tenants die Identifizierung verfügbarer Storage-Klassen und die Fehlersuche bei PVC-zu-PV-Bindungsproblemen oder CSI-Treiberfehlern.
- IngressClasses: informieren Benutzer über verfügbare Ingress-Controller für das Anwendungsrouting.
- NetworkPolicies, ResourceQuotas, LimitRanges und Events: unverzichtbar für die Diagnose von Netzwerkeinschränkungen, Scheduling-Fehlern oder Ressourcenquoten-Verletzungen.

Das Ihnen übergebene Service-Konto wurde auch zum **Eigentümer eines ersten Capsule-*Tenants*** ernannt.
Sie können Namespaces erstellen, die Ihrem Capsule-Tenant zugeordnet werden.
Externe Konten (OIDC) sind Mitglieder desselben Capsule-Tenants, was es ihnen ermöglicht, innerhalb der dem Tenant zugeordneten **Namespaces** frei zu interagieren. (Siehe Tutorial „Berechtigungen mit Capsule verwalten")

Einige Aktionen sind nicht erlaubt:

- Capsule-Tenants auflisten / erstellen
- CRDs erstellen: Wenn Sie eine Anwendung mit CRDs bereitstellen müssen (z. B. ein Operator-Helm-Chart), müssen Sie den Support kontaktieren, damit diese CRDs importiert werden (durch Extraktion der YAMLs aus dem Helm-Chart). Anschließend können Sie Ihr Helm-Chart mit der Option --skip-crds bereitstellen. Siehe: [Helm 3-Dokumentation](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Ihre erste Anwendung bereitstellen</h3>
      </div>
      <div className="card__body">
        <p>
          Folgen Sie einer detaillierten Anleitung zum Verbinden, Bereitstellen einer „Hello World"-Anwendung und deren Veröffentlichung im Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Tutorial starten &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Netzwerk verstehen</h3>
      </div>
      <div className="card__body">
        <p>
          Entdecken Sie den Adressierungsplan, die Ingress Controller und wie Sie Ihre Dienste sicher bereitstellen.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Netzwerk-Tutorial ansehen &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Berechtigungen mit Capsule verwalten</h3>
      </div>
      <div className="card__body">
        <p>
          Erfahren Sie, wie Sie Capsule verwenden, um Tenants zu erstellen und Berechtigungen an Ihre Teams zu delegieren.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Capsule entdecken &rarr;</a>
      </div>
    </div>
  </div>
</div>
