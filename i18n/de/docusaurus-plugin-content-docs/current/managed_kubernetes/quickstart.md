---
title: Schnellstart
---
Willkommen im Schnellstart-Leitfaden für **Managed Kubernetes** von Cloud Temple.

Ziel dieses Abschnitts ist es, Sie zu den erforderlichen Ressourcen zu führen, um Ihr Cluster zu verwalten.

---

## Bevor Sie beginnen

Um mit Ihrem Cluster zu interagieren, sind mehrere Elemente unerlässlich:

1. **Die Datei `kubeconfig`** : Diese Datei, die Ihnen von den Cloud Temple-Teams bei der Bereitstellung des Dienstes zur Verfügung gestellt wird, enthält alle Informationen für eine sichere Verbindung.
2. **Das Tool `kubectl`** : Dies ist die standardmäßige Befehlszeilenschnittstelle zur Steuerung eines Kubernetes-Clusters.
3. **Das Tool `kubelogin`** (falls OIDC verwendet wird) : Wenn Ihr Cluster so konfiguriert ist, dass er sich über einen OIDC-Identitätsanbieter (wie Entra ID/Azure AD) authentifiziert, müssen Sie das Tool `kubelogin` installieren, um den Authentifizierungsablauf zu verwalten. Folgen Sie dem [Installationsleitfaden für kubelogin](https://github.com/int128/kubelogin).

> ℹ️[Empfohlene grafische Tools:]
> Für eine visuellere Erfahrung und eine vereinfachte Verwaltung Ihrer Ressourcen empfehlen wir die Verwendung von **Lens**. Dies ist ein leistungsstarkes Tool für Kubernetes, mit dem Sie Ihren Cluster erkunden, Ihre Anwendungen verwalten und deren Status grafisch visualisieren können.
> Einige unserer Tutorials verwenden Lens, um die Vorgänge zu veranschaulichen. Sie können es hier herunterladen: [https://k8slens.dev/](https://k8slens.dev/).

---

## Zugriff auf Ihren verwalteten Kubernetes-Cluster

Ihr Produktionscluster wird durch einen 5-stelligen Buchstabencode identifiziert (6 Buchstaben in Dev/Test). Dieser Code wird verwendet, um die URLs der verschiedenen Schnittstellen zu bilden. In den Tutorials werden wir **"ctodev"** verwenden.

Die URLs lauten:

- Kubernetes-API (wird in kubeconfig verwendet):

  - **Kennung**.mk.ms-cloud-temple.com:6443  (also in unserem Beispiel: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )
- öffentliche URLs:

  - k10.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - grafana.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - harbor.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - opencost.external-secured.**Kennung**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**Kennung**.mk.ms-cloud-temple.com

>ℹ️[sichere URLs]
>Die oben genannten URLs sind nur von bekannten öffentlichen IPs aus zugänglich, die im Firewall der Lösung konfiguriert sind. Wenn Sie eine öffentliche IP hinzufügen möchten, müssen Sie einen Supportantrag stellen.
>

>ℹ️[interne URLs]
>Die unten genannten URLs sind nicht im Internet verfügbar. Sie sind nur im internen Netzwerk des verwalteten Kubernetes-Clusters zugänglich.
>  - ceph.internal.**Kennung**.mk.ms-cloud-temple.com
>  - argocd.internal.**Kennung**.mk.ms-cloud-temple.com
>  - hubble.internal.**Kennung**.mk.ms-cloud-temple.com

---

## Ihre Berechtigungen

>⚠[Dev/Test et Kubernetes Core]
>Für die verwalteten Kubernetes-Cluster **"Dev/Test"** und die Core-Cluster verfügt der Ihnen bereitgestellte Service-Account über alle Berechtigungen im gesamten Cluster (ClusterAdmin)

Auf den Clustern **"Production"** sind Ihre Berechtigungen eingeschränkt. Sie verfügen über ein **"Erweiterter Viewer"**-Recht für die Cluster-Ressourcen. Dieses Recht gewährt schreibgeschützten Zugriff auf Schlüsselressourcen, sowohl auf Clusterebene als auch zur Diagnose:

- Namespaces : ermöglichen es den Tenants, die Namespaces für Tools und Dashboards aufzulisten.
- Pods, Deployments,  ReplicaSets... : ermöglichen es den Tenants, die auf dem Cluster bereitgestellten Ressourcen aufzulisten.
- Nodes : bieten Einblicke in die Kapazität, Taints und Labels der Knoten, um das Verhalten des Schedulers zu verstehen.
- StorageClasses, PVs, PVCs, VolumeAttachments und CSIDrivers : ermöglichen es den Tenants, die verfügbaren Speicherklassen zu identifizieren und Bindungsprobleme zwischen PVC und PV oder Fehler im Zusammenhang mit CSI-Treibern zu beheben.
- IngressClasses : informieren die Benutzer über die verfügbaren Ingress-Controller für das Routing der Anwendungen.
- NetworkPolicies, ResourceQuotas, LimitRanges und Events : wesentlich zur Diagnose von Netzwerkbeschränkungen, Scheduling-Fehlern oder Verstößen gegen Ressourcenquotas.

Der Ihnen zugewiesene Service-Account wurde zudem zum **Eigentümer eines ersten *Capsule-Tenants*** gemacht.
Sie können Namespaces erstellen, die Ihrem Capsule-Tenant zugeordnet werden.
Externe Konten (OIDC) sind Mitglieder desselben Capsule-Tenants, was ihnen ermöglicht, frei innerhalb der dem Tenant zugeordneten **Namespaces** zu interagieren. (Voir le tutoriel "Gérer les permissions avec Capsule")

Bestimmte Aktionen sind nicht erlaubt:

- Auflisten / Erstellen von Capsule-Tenants
- Erstellen von CRDs: Wenn Sie eine Anwendung mit CRDs bereitstellen müssen (helm chart d'un opérateur par exemple), müssen Sie sich an den Support wenden, damit diese CRDs importiert werden (via extraction des yaml depuis le chart helm). Anschließend können Sie Ihr Helm-Chart mit der Option --skip-crds bereitstellen. Siehe: [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Bereitstellen Ihrer ersten Anwendung</h3>
      </div>
      <div className="card__body">
        <p>
          Folgen Sie einer detaillierten Anleitung, um sich zu verbinden, eine "Hello World"-Anwendung bereitzustellen und sie im Internet verfügbar zu machen.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Tutorial starten →</a>
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
          Erfahren Sie mehr über den Adressplan, Ingress-Controller und wie Sie Ihre Dienste sicher verfügbar machen.
        </p>
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
        <p>
          Lernen Sie, wie Sie Capsule verwenden, um Tenants zu erstellen und Berechtigungen an Ihre Teams zu delegieren.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Capsule entdecken →</a>
      </div>
    </div>
  </div>
</div>