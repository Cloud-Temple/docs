---
title: The Network in Managed Kubernetes
---

import cillium from './images/cillium.png'

---

## Ziele

Dieser Leitfaden soll Sie mit den grundlegenden Netzwerkkonzepten des Angebots **Managed Kubernetes** vertraut machen. Am Ende dieses Leitfadens können Sie:

- Den IP-Adressraum Ihres Clusters (Knoten, Pods, Services) verstehen.
- Die verschiedenen Mechanismen kennen, um Ihre Anwendungen verfügbar zu machen (Ingress, LoadBalancer).
- Netzwerkflüsse und Sicherheitsrichtlinien mit Hubble visualisieren.

Als **Beispiel** verwenden wir einen Cluster namens **"ctodev"**, dessen zugeordneter Bereich **10.20.0.0/22** ist.

:::warning Definition der IP-Bereiche
 Der private IP-Bereich X.Y.Z.0/22 (RFC 1918) wird beim Einrichten des Clusters mit dem Kunden festgelegt und kann später nicht mehr geändert werden.
:::

## IP Addressing Plan

Your Managed Kubernetes cluster is equipped with a multi-zone VLAN with an IPv4 address range of /22.

The **example** range 10.20.0.0/22 is logically divided into sub-ranges.

    - 10.20.0.0/24 is assigned to cluster Nodes:

        - 10.20.0.10 : ctodev-gitrunner (the machine that manages the infrastructure)

        - 10.20.0.20 : virtual IP (load-balanced) for the Kubernetes API service
        - 10.20.0.21 : ctodev-cp-01 (control plane 01)
        - 10.20.0.22 : ctodev-cp-02 (control plane 02)
        - 10.20.0.23 : ctodev-cp-03 (control plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Ceph Storage 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph Storage 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph Storage 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - Internal MetalLB: 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - External MetalLB: 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

:::warning Pod and Service Ranges
The Pod and Service ranges are defined with the client during cluster setup and cannot be modified afterward.
:::

## Using MetalLB

MetalLB is the component that enables exposing layer 3 (non-web / L7) services directly on an IP address—whether internal or external—using the `LoadBalancer` service type. It serves as an alternative to Ingress for non-HTTP applications or specific use cases.

To use MetalLB, simply create a `LoadBalancer`-type service. MetalLB will automatically assign an IP address from the preconfigured pools. The distinction between `internal` and `external` pools is a security measure to ensure that an application intended for internal use is not accidentally exposed on a public network.

**Example: Exposing a service on the internal network**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-interne
  namespace: mon-namespace
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

After applying this manifest, your service will be assigned an IP address within the range `10.20.1.1 – 10.20.1.127` and will be accessible from your internal network connected to the cluster.

**Example: Exposing a service on the external network**

To request an IP address from the external pool (`10.20.1.128 – 10.20.1.254`), you must add the label `lb-type: external` to your service.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mon-service-externe
  namespace: mon-namespace
  labels:
    lb-type: external
spec:
  selector:
    app: mon-app
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 80
  type: LoadBalancer
```

> **Important**: This range remains within a **private address space**. For **public exposure**, it is necessary to create a **NAT rule (DNAT)** on your infrastructure's firewall to redirect traffic from one of your public external IPs to the private IP assigned by MetalLB.

## Public IPs

Your Managed Kubernetes cluster was delivered with 2 public IPv4 addresses by default.

The first IP is used on port 6443 for the Kubernetes API (in our example: ctodev.mk.ms-cloud-temple.com:6443).

This same IP is also NATed to the ingress controller *"nginx-external-secured"* on port 443. This enables access to the various consoles provided to you (see the quickstart guide). Access to this public IP is **filtered** using an allowed IP list.

---
The second public IP is NATed to the ingress controller *"nginx-external"* on ports 80 and 443.

Applications exposed via the ingress class *"nginx-external"* will therefore be directly accessible from the internet using this IP.

*If you wish to modify the firewall rules (add/remove allowed IPs), you must submit a support request.*

*It is possible to add additional public IPs if desired.*

## DNS

Für den internen DNS (CoreDNS) hat der Cluster folgende Einstellungen:

- Cluster-Name: ` <Cluster-Identifikator>`
- Internes Domain-Name: `<Cluster-Identifikator>-cluster.local` (in unserem Beispiel: ctodev-cluster.local)

Dieser interne Domain-Name ist entscheidend für die Kommunikation zwischen Services innerhalb des Clusters. Er ermöglicht es einer Anwendung, eine andere Anwendung über einfach nur ihren Kubernetes-Service-Namen aufzurufen, ohne die interne IP-Adresse kennen zu müssen.

Beispielsweise ist ein Service namens `api-backend` im Namespace `production` automatisch über die Adresse `api-backend.production.svc.ctodev-cluster.local` auflösbar.

---

Die öffentliche DNS-Zone, die für die Kubernetes-Managed-Cluster verwendet wird, lautet `.mk.ms-cloud-temple.com`.

Der Ingress *"nginx-external"* (zugeordnet zu der öffentlichen IP-Adresse Nr. 2) ist erreichbar unter `"*.external.<Ihr Cluster-Identifikator>.mk.ms-cloud-temple.com"`.  
Wenn Sie eine Anwendung mit dieser Ingress-Klasse bereitstellen, können Sie darauf direkt über diesen Domain-Namen zugreifen. Weitere Informationen finden Sie im Tutorial: [Ihre erste Anwendung bereitstellen](./firstdeploy)

## Hubble: Network Observability within Reach

Hubble is a graphical and command-line interface to visualize and understand network traffic flows within your cluster. Built on Cilium, it provides real-time, detailed mapping of services, dependencies, and network policies.

With Hubble, you can:
- **Visualize traffic flows** between your pods and services.
- **Identify connectivity issues** and network errors.
- **Verify enforcement of your security policies** (Network Policies).
- **Explore dependencies** between your various applications.

### Access the Hubble Interface

The Hubble graphical interface is exposed via an internal URL of your cluster. Access is not possible through `kubectl port-forwarding` because users do not have sufficient permissions on the `kube-system` namespace.

To access it, you must be connected to the cluster's internal network (for example, via a bastion host or a VPN). Use the following URL:

`http://hubble.internal.<your-cluster-identifier>.mk.ms-cloud-temple.com`

To make this URL resolvable from your workstation, you may need to add an entry to your `hosts` file or to your internal DNS. You can obtain the internal IP address of the Hubble Ingress using the following command:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Erstellung interner DNS-Zonen (privater Cluster)

Um die Sicherheit zu erhöhen und den Zugriff auf Ihre Dienste sowie die Kubernetes-API von Ihrem internen Netzwerk aus zu vereinfachen, wird empfohlen, eine interne DNS-Zone zu erstellen. Diese Zone ermöglicht die Auflösung der Domänennamen Ihrer Ingress-Ressourcen sowie der Kubernetes-API auf ihre jeweiligen privaten IP-Adressen und verhindert so den Datenverkehr über öffentliche Netzwerke.

**Beispielkonfiguration für unseren Cluster „ctodev“ mit dem zugewiesenen Bereich 10.20.0.0/22:**

Basierend auf den URLs im Schnellstartleitfaden können Sie Ihre interne DNS-Konfiguration wie folgt einrichten:

1.  **Erstellen Sie die private DNS-Zone** auf Ihren internen DNS-Servern für `.<Cluster-Identifikator>.mk.ms-cloud-temple.com`

2.  **Fügen Sie die folgenden A-Einträge hinzu:**

    -   **Für die Kubernetes-API:**
        -   `. -> 10.20.0.20` (virtuelle IP der API)

    -   **Für interne Dienste (über den Ingress `nginx-internal`):**
        -   `hubble.internal -> 10.20.1.1`
        -   `argocd.internal -> 10.20.1.1`
        -   `ceph.internal -> 10.20.1.1`

    -   **Für gesicherte Dienste (über den Ingress `nginx-external-secure`):**
        -   `k10.external-secured -> 10.20.1.129`
        -   `grafana.external-secured -> 10.20.1.129`
        -   `harbor.external-secured -> 10.20.1.129`
        -   `kubecost.external-secured -> 10.20.1.129`

Diese Konfiguration stellt sicher, dass der Datenverkehr zu API und internen Diensten innerhalb Ihres privaten Netzwerks bleibt und den besten Sicherheitspraktiken entspricht.

<div class="card">
  <div class="card__header">
    <h3>Anleitung: Bereitstellung Ihrer ersten Anwendung</h3>
  </div>
  <div class="card__body">
    <p>
      Folgen Sie unserem detaillierten Leitfaden, um zu lernen, wie Sie eine Anwendung über einen Ingress verfügbar machen.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Anleitung anzeigen &rarr;</a>
  </div>
</div>

:::warning Weiterführend: Sicherheit in der Produktion
Dieses Dokument erläutert grundlegende Netzwerkkonzepte. Für einen Produktionsbetrieb ist es entscheidend, zusätzliche Sicherheitsmaßnahmen zu ergreifen:

-   **Verwenden Sie sichere Images**: Verwenden Sie bevorzugt Images aus Ihrem sicheren Unternehmens-Registry wie **Harbor**, anstatt öffentliche Images.
-   **Steuern Sie Netzwerkflüsse**: Implementieren Sie `NetworkPolicies`, um den Datenverkehr auf nur die für Ihre Anwendungen erforderlichen Kommunikationswege zu beschränken.
-   **Wenden Sie Governance-Politiken an**: Nutzen Sie Tools wie **Kyverno**, um Sicherheitsregeln durchzusetzen (z. B. Verbote von „root“-Containern, Anforderung von Ressourcenanforderungen und -Grenzen).
:::