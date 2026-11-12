---
title: Das Netzwerk in Managed Kubernetes
---
import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Ziele

Dieses Tutorial hat zum Ziel, Sie mit den grundlegenden Netzwerk-Konzepten des Angebots **Managed Kubernetes** vertraut zu machen. Am Ende dieses Guides sind Sie in der Lage:

- Das IP-Adressierungsplan Ihres Clusters zu verstehen (Knoten, Pods, Services).
- Die verschiedenen Mechanismen zum Exponieren Ihrer Anwendungen zu kennen (Ingress, LoadBalancer).
- Netzwerkflüsse und Sicherheitsrichtlinien mit Hubble zu visualisieren.

Wir nehmen als **Beispiel** einen Cluster **"ctodev"**, dessen zugewiesener Bereich **10.20.0.0/22** ist.

> ⚠[définition des ranges]
> Dieser Bereich privater IPs X.Y.Z.0/22 (RFC 1918) wird bei der Einrichtung des Clusters mit dem Kunden definiert. Er kann später nicht mehr geändert werden.

## IP-Adressierungsplan

Ihr Managed Kubernetes-Cluster verfügt über ein multi-zonales VLAN mit einem IPv4-Adressbereich in /22.

Der Bereich unseres **Beispiels** 10.20.0.0/22 ist logisch in Teilbereiche aufgeteilt.

    - 10.20.0.0/24 wird den Knoten des Clusters zugewiesen:

    - 10.20.0.10 : ctodev-gitrunner (die Maschine, die die Infrastruktur steuert)

    - 10.20.0.20 : Virtuelle IP (load balanciert) des Kubernetes-API-Services
        - 10.20.0.21 : ctodev-cp-01 (Control Plane 01)
        - 10.20.0.22 : ctodev-cp-02 (Control Plane 02)
        - 10.20.0.23 : ctodev-cp-03 (Control Plane 03)

    - 10.20.0.41 : ctodev-ceph-01 (Ceph Storage 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph Storage 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph Storage 03)

    - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - Internes MetalLB : 10.20.1.1 – 10.20.1.127

    - 10.20.1.1 : ingress`nginx-internal`

    - Externes MetalLB : 10.20.1.128 – 10.20.1.254

    - 10.20.1.128 : ingress`nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16

    - Services: 10.95.0.0/12

> ⚠[Ranges Pods et Services]
> Die Bereiche für Pods und Services werden bei der Einrichtung des Clusters mit dem Kunden definiert. Sie können später nicht mehr geändert werden.

## Verwendung von MetalLB

MetalLB ist die Komponente, die es ermöglicht, Layer-3-Services (nicht Web / L7) direkt auf einer IP-Adresse zu exponieren, sei sie intern oder extern, unter Verwendung des Service-Typs `LoadBalancer`. Es ist eine Alternative zu Ingress für nicht-HTTP-Anwendungen oder für spezifische Anwendungsfälle.

Um MetalLB zu verwenden, genügt es, einen Service vom Typ `LoadBalancer` zu erstellen. MetalLB weist ihm automatisch eine IP-Adresse aus den vor konfigurierten Bereichen zu. Die Unterscheidung zwischen den Bereichen `interne` und `externe` ist eine Sicherheitsmaßnahme, um sicherzustellen, dass eine Anwendung, die für den internen Gebrauch bestimmt ist, nicht versehentlich auf einem öffentlichen Netzwerk exponiert wird.

**Beispiel: Einen Service im internen Netzwerk exponieren**

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

Nachdem Sie dieses Manifest angewendet haben, wird Ihrem Service eine IP-Adresse im Bereich `10.20.1.1 – 10.20.1.127` zugewiesen und er ist von Ihrem internen Netzwerk aus, das mit dem Cluster verbunden ist, erreichbar.

**Beispiel: Einen Service im externen Netzwerk exponieren**

Um eine IP-Adresse aus dem externen Bereich (`10.20.1.128 – 10.20.1.254`) anzufordern, müssen Sie das Label `lb-type: external` zu Ihrem Service hinzufügen.

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

> **Wichtig** : Dieser Bereich bleibt **in einem privaten Adressraum**. Für eine **öffentliche Exposition** ist es erforderlich, eine **NAT-Regel (DNAT)** auf der Firewall Ihrer Infrastruktur zu erstellen, um den Verkehr von einer Ihrer externen öffentlichen IPs auf die von MetalLB zugewiesene private IP-Adresse umzuleiten.

## Öffentliche IPs

Ihr Managed Kubernetes-Cluster wurde ursprünglich mit 2 öffentlichen IPv4-Adressen geliefert.

Die 1. IP wird auf Port 6443 für die Kubernetes-API verwendet (in unserem Beispiel ctodev.mk.ms-cloud-temple.com:6443)

Diese gleiche IP wird auch auf dem Ingress-Controller *"nginx-external-secured"* für Port 443 NAT-umgewandelt. Dies ermöglicht die Exposition der verschiedenen Konsolen, die Ihnen zur Verfügung stehen (siehe Quickstart-Guide). Der Zugriff auf diese öffentliche IP wird **gefiltert** mit einer Liste erlaubter IPs.

---

Die 2. öffentliche IP wird auf dem Ingress-Controller *"nginx-external"* auf den Ports 80 und 443 NAT-umgewandelt.

Die mit der Ingress-Klasse *"nginx-external"* exponierten Anwendungen sind daher direkt über diese IP aus dem Internet erreichbar.

*Wenn Sie eine Änderung der Firewall-Regeln wünschen (Hinzufügen/Entfernen erlaubter IPs), müssen Sie einen Support-Antrag stellen.*

*Es ist möglich, weitere öffentliche IPs hinzuzufügen, wenn Sie dies wünschen.*

## DNS

Für den internen DNS (CoreDNS) hat der Cluster diese Parameter:

- Clustername : `<identifiant du cluster>`
- Interner Domain : `<identifiant du cluster>-cluster.local` (in unserem Beispiel : ctodev-cluster.local)

Dieser interne Domain ist entscheidend für die Kommunikation zwischen Services innerhalb des Clusters. Er ermöglicht es einer Anwendung, eine andere Anwendung einfach über ihren Kubernetes-Servicenamen zu kontaktieren, ohne deren interne IP-Adresse kennen zu müssen.

Zum Beispiel wird ein Service mit dem Namen `api-backend` im Namespace `production` automatisch auf die Adresse `api-backend.production.svc.ctodev-cluster.local` aufgelöst.

---

Die öffentliche DNS-Zone, die für Managed Kubernetes-Cluster verwendet wird, ist `.mk.ms-cloud-temple.com`

Der Ingress *"nginx-external"* (gemappt auf die öffentliche IP Nr. 2) ist unter `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"` erreichbar.
Wenn Sie eine Anwendung mit dieser Ingress-Klasse veröffentlichen, können Sie direkt über diesen Domainnamen darauf zugreifen. Siehe Tutorial : [Déployer votre première application](./firstdeploy)

## Hubble : Netzwerkbeobachtbarkeit auf Knopfdruck

Hubble ist eine grafische und eine Kommandozeilenoberfläche, um die Netzwerkflüsse Ihres Clusters zu visualisieren und zu verstehen. Basierend auf Cilium bietet es Ihnen eine detaillierte Kartierung der Services, Abhängigkeiten und Netzwerkrichtlinien in Echtzeit.

Mit Hubble können Sie :

- **Verkehrsflüsse visualisieren** zwischen Ihren Pods und Services.
- **Konnektivitätsprobleme** und Netzwerkfehler identifizieren.
- **Die Anwendung Ihrer Sicherheitsrichtlinien** (Network Policies) überprüfen.
- **Abhängigkeiten** zwischen Ihren verschiedenen Anwendungen erkunden.

### Zugriff auf die Hubble-Oberfläche

Die grafische Oberfläche von Hubble wird unter einer internen URL Ihres Clusters exponiert. Der Zugriff ist nicht über ein `kubectl`-Port-Forwarding möglich, da die Benutzer nicht über ausreichende Berechtigungen im Namespace `kube-system` verfügen.

Um darauf zuzugreifen, müssen Sie mit dem internen Netzwerk des Clusters verbunden sein (z. B. über einen Bastion oder ein VPN). Die zu verwendende URL lautet wie folgt :

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Damit diese URL von Ihrem Arbeitsplatz auflösbar ist, müssen Sie wahrscheinlich einen Eintrag in Ihrer `hosts`-Datei oder in Ihrem internen DNS hinzufügen. Sie können die interne IP-Adresse des Hubble-Ingress mit dem folgenden Befehl abrufen :

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Erstellung interner DNS-Zonen (privater Cluster)

Um die Sicherheit zu stärken und den Zugriff auf Ihre Services und die Kubernetes-API von Ihrem internen Netzwerk aus zu vereinfachen, wird empfohlen, eine interne DNS-Zone zu erstellen. Diese Zone ermöglicht es, die Domainnamen Ihrer Ingress und der Kubernetes-API auf ihre jeweiligen privaten IP-Adressen aufzulösen, sodass der Verkehr nicht über öffentliche Netzwerke geleitet wird.

**Beispielkonfiguration mit unserem Cluster "ctodev", dessen zugewiesener Bereich** **10.20.0.0/22** **ist :**

Basierend auf den im Startguide bereitgestellten URLs können Sie Ihren internen DNS wie folgt konfigurieren :

1. **Erstellen Sie die private DNS-Zone** auf Ihren internen DNS-Servern für `.<identifiant du cluster>.mk.ms-cloud-temple.com`
2. **Fügen Sie die folgenden A-Einträge** hinzu :

   - **Für die Kubernetes-API :**

     - `. -> 10.20.0.20` (virtuelle IP der API)
   - **Für interne Services (über den Ingress `nginx-internal`) :**

     - `hubble.internal -> 10.20.1.1`
     - `argocd.internal -> 10.20.1.1`
     - `ceph.internal -> 10.20.1.1`
   - **Für gesicherte Services (über den Ingress `nginx-external-secure`) :**

     - `k10.external-secured -> 10.20.1.129`
     - `grafana.external-secured -> 10.20.1.129`
     - `harbor.external-secured -> 10.20.1.129`
     - `opencost.external-secured -> 10.20.1.129`
     - `opencost-mcp.external-secured -> 10.20.1.129`

Diese Konfiguration gewährleistet, dass der Verkehr zur API und zu den internen Services auf Ihr privates Netzwerk beschränkt bleibt, im Einklang mit den besten Sicherheitspraktiken.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Ihre erste Anwendung deployen</h3>
  </div>
  <div class="card__body">
    <p> Folgen Sie unserem detaillierten Guide, um zu lernen, wie man eine Anwendung mit einem Ingress exponiert.</p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Tutorial ansehen →</a>
  </div>
</div>
