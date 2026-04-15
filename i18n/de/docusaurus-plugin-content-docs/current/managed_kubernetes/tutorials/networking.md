---
title: Netzwerk in Managed Kubernetes
---

import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Ziele

Ziel dieses Tutorials ist es, Sie mit den grundlegenden Netzwerkkonzepten des **Managed Kubernetes**-Angebots vertraut zu machen. Am Ende dieses Leitfadens werden Sie in der Lage sein:

- Den IP-Adressierungsplan Ihres Clusters (Knoten, Pods, Services) zu verstehen.
- Die verschiedenen Mechanismen zur Exponierung Ihrer Anwendungen (Ingress, LoadBalancer) zu kennen.
- Netzwerkflüsse und Sicherheitsrichtlinien mit Hubble zu visualisieren.

Wir werden als **Beispiel** einen Cluster **"ctodev"** verwenden, dem der Bereich **10.20.0.0/22** zugewiesen ist.

:::warning Definition der Bereiche
 Dieser private IP-Bereich X.Y.Z.0/22 (RFC 1918) wird mit dem Kunden bei der Einrichtung des Clusters festgelegt. Er kann später nicht mehr geändert werden.
:::

## IP-Adressierungsplan

Ihr Managed Kubernetes Cluster verfügt über ein multi-zonales VLAN mit einem IPv4-Adressbereich in /22.

Der Bereich unseres **Beispiels** 10.20.0.0/22 ist logisch in Teilbereiche unterteilt.

    - 10.20.0.0/24 ist den Clusterknoten zugewiesen:

        - 10.20.0.10 : ctodev-gitrunner (die Maschine, die die Infrastruktur steuert)

        - 10.20.0.20 : virtuelle IP (load balanced) des Kubernetes-API-Dienstes
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

    - Internes MetalLB : 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : ingress `nginx-internal`
    
    - Externes MetalLB : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : ingress `nginx-external`
      - 10.20.1.129 : ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

:::warning Pods- und Services-Bereiche
Die Pods- und Services-Bereiche werden mit dem Kunden bei der Einrichtung des Clusters festgelegt. Sie können später nicht mehr geändert werden.
:::

## Verwendung von MetalLB

MetalLB ist die Komponente, die es ermöglicht, Layer-3-Dienste (nicht-web / L7) direkt auf einer IP-Adresse zu exponieren, sei es intern oder extern, unter Verwendung des Service-Typs `LoadBalancer`. Es ist eine Alternative zu Ingress für Nicht-HTTP-Anwendungen oder für spezifische Anwendungsfälle.

Um MetalLB zu verwenden, müssen Sie lediglich einen Service vom Typ `LoadBalancer` erstellen. MetalLB weist ihm automatisch eine IP-Adresse aus den vorkonfigurierten Bereichen zu. Die Unterscheidung zwischen `internen` und `externen` Bereichen ist eine Sicherheitsmaßnahme, um sicherzustellen, dass eine für den internen Gebrauch bestimmte Anwendung nicht versehentlich in einem öffentlichen Netzwerk exponiert wird.

**Beispiel: Exponieren eines Dienstes im internen Netzwerk**

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

Nach dem Anwenden dieses Manifests wird Ihrem Dienst eine IP-Adresse im Bereich `10.20.1.1 – 10.20.1.127` zugewiesen und ist über Ihr internes Netzwerk, das mit dem Cluster verbunden ist, erreichbar.

**Beispiel: Exponieren eines Dienstes im externen Netzwerk**

Um eine IP-Adresse aus dem externen Bereich (`10.20.1.128 – 10.20.1.254`) anzufordern, müssen Sie das Label `lb-type: external` zu Ihrem Dienst hinzufügen.

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

> **Wichtig**: Dieser Bereich bleibt **in einem privaten Adressraum**. Für eine **öffentliche Exposition** ist es notwendig, eine **NAT-Regel (DNAT)** auf der Firewall Ihrer Infrastruktur zu erstellen, um den Datenverkehr von einer Ihrer externen öffentlichen IPs an die von MetalLB zugewiesene private IP-Adresse umzuleiten.

## Öffentliche IPs

Ihr Managed Kubernetes Cluster wurde mit 2 öffentlichen IPv4-Adressen geliefert.

Die 1. IP wird auf Port 6443 für die Kubernetes-API verwendet (in unserem Beispiel ctodev.mk.ms-cloud-temple.com:6443)

Diese IP ist auch auf dem *"nginx-external-secured"*-Ingress-Controller für Port 443 geNATet. Dies ermöglicht die Exposition der verschiedenen Konsolen, die Ihnen zur Verfügung gestellt werden (siehe Schnellstartleitfaden). Der Zugang zu dieser öffentlichen IP wird mit einer Liste erlaubter IPs **gefiltert**.

---
Die 2. öffentliche IP ist auf dem *"nginx-external"*-Ingress-Controller, auf den Ports 80 und 443, geNATet.

Mit der Ingress-Klasse *"nginx-external"* exponierte Anwendungen sind daher direkt über diese IP aus dem Internet erreichbar.

*Wenn Sie eine Änderung der Firewall-Regeln wünschen (Hinzufügen/Entfernen erlaubter IPs), müssen Sie eine Support-Anfrage stellen.*

*Es ist möglich, weitere öffentliche IPs hinzuzufügen, falls gewünscht.*

## DNS

Für internes DNS (CoreDNS) wird der Cluster diese Parameter haben:

- Clustername: `<Cluster-Bezeichner>`
- Interne Domain: `<Cluster-Bezeichner>-cluster.local` (in unserem Beispiel: ctodev-cluster.local)

Diese interne Domain ist entscheidend für die Inter-Service-Kommunikation innerhalb des Clusters. Sie ermöglicht es einer Anwendung, eine andere Anwendung einfach über ihren Kubernetes-Servicenamen zu kontaktieren, ohne ihre interne IP-Adresse kennen zu müssen.

Beispielsweise ist ein Dienst namens `api-backend` im Namespace `production` automatisch unter der Adresse `api-backend.production.svc.ctodev-cluster.local` auflösbar.

---

Die für Managed Kubernetes Cluster verwendete öffentliche DNS-Zone ist `.mk.ms-cloud-temple.com`

Der *"nginx-external"*-Ingress (zugeordnet zu öffentlicher IP Nr. 2) ist erreichbar unter `"*.external.<Ihr Cluster-Bezeichner>.mk.ms-cloud-temple.com"`.
Wenn Sie eine Anwendung mit dieser Ingress-Klasse veröffentlichen, können Sie direkt über diesen Domainnamen darauf zugreifen. Siehe Tutorial: [Ihre erste Anwendung bereitstellen](./firstdeploy)

## Hubble: Netzwerkobservabilität auf einen Blick

Hubble ist eine grafische und Befehlszeilenschnittstelle zur Visualisierung und zum Verstehen der Netzwerkflüsse Ihres Clusters. Basierend auf Cilium bietet es eine detaillierte Übersicht über Dienste, Abhängigkeiten und Netzwerkrichtlinien in Echtzeit.

Mit Hubble können Sie:

- **Datenverkehrsflüsse** zwischen Ihren Pods und Diensten **visualisieren**.
- **Konnektivitätsprobleme** und Netzwerkfehler **identifizieren**.
- **Die Durchsetzung Ihrer Sicherheitsrichtlinien** (Network Policies) **überprüfen**.
- **Die Abhängigkeiten** zwischen Ihren verschiedenen Anwendungen **erkunden**.

### Zugriff auf die Hubble-Oberfläche

Die grafische Oberfläche von Hubble ist auf einer internen URL Ihres Clusters exponiert. Der Zugriff ist nicht über `kubectl`-Port-Forwarding möglich, da Benutzer nicht über ausreichende Rechte im Namespace `kube-system` verfügen.

Um darauf zuzugreifen, müssen Sie mit dem internen Netzwerk des Clusters verbunden sein (z.B. über einen Bastion-Host oder ein VPN). Die zu verwendende URL lautet wie folgt:

`http://hubble.internal.<ihr-cluster-bezeichner>.mk.ms-cloud-temple.com`

Damit diese URL von Ihrer Workstation aufgelöst werden kann, müssen Sie wahrscheinlich einen Eintrag in Ihrer `hosts`-Datei oder in Ihrem internen DNS hinzufügen. Sie können die interne IP-Adresse des Hubble Ingress mit folgendem Befehl abrufen:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Erstellen interner DNS-Zonen (privater Cluster)

Um die Sicherheit zu stärken und den Zugriff auf Ihre Dienste und die Kubernetes-API aus Ihrem internen Netzwerk zu vereinfachen, empfiehlt es sich, eine interne DNS-Zone zu erstellen. Diese Zone ermöglicht die Auflösung der Domainnamen Ihrer Ingresses und der Kubernetes-API zu ihren jeweiligen privaten IP-Adressen, wodurch der Transit über öffentliche Netzwerke vermieden wird.

**Beispielkonfiguration mit unserem Cluster "ctodev", dem der Bereich** **10.20.0.0/22 zugewiesen ist:**

Basierend auf den im Schnellstartleitfaden bereitgestellten URLs können Sie Ihr internes DNS wie folgt konfigurieren:

1. **Erstellen Sie die private DNS-Zone** auf Ihren internen DNS-Servern für `.<Cluster-Bezeichner>.mk.ms-cloud-temple.com`

2. **Fügen Sie die folgenden Typ-A-Einträge hinzu**:

    - **Für die Kubernetes-API:**
        - `. -> 10.20.0.20` (virtuelle IP der API)

    - **Für interne Dienste (über den `nginx-internal`-Ingress):**
        - `hubble.internal -> 10.20.1.1`
        - `argocd.internal -> 10.20.1.1`
        - `ceph.internal -> 10.20.1.1`

    - **Für gesicherte Dienste (über den `nginx-external-secure`-Ingress):**
        - `k10.external-secured -> 10.20.1.129`
        - `grafana.external-secured -> 10.20.1.129`
        - `harbor.external-secured -> 10.20.1.129`
        - `opencost.external-secured -> 10.20.1.129`
        - `opencost-mcp.external-secured -> 10.20.1.129`

Diese Konfiguration stellt sicher, dass der Datenverkehr zur API und zu internen Diensten in Ihrem privaten Netzwerk verbleibt, in Übereinstimmung mit den Best Practices der Sicherheit.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Ihre erste Anwendung bereitstellen</h3>
  </div>
  <div class="card__body">
    <p>
      Folgen Sie unserem detaillierten Leitfaden, um zu lernen, wie Sie eine Anwendung mit einem Ingress exponieren.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Tutorial ansehen &rarr;</a>
  </div>
</div>

:::warning Weiterführend: Sicherheit in der Produktion
Dieses Dokument erklärt die grundlegenden Netzwerkkonzepte. Für eine Produktionsbereitstellung ist es entscheidend, zusätzliche Sicherheitsmaßnahmen anzuwenden:

- **Verwenden Sie sichere Images**: Bevorzugen Sie Images aus Ihrer sicheren Unternehmens-Registry wie **Harbor** anstelle von öffentlichen Images.
- **Kontrollieren Sie Netzwerkflüsse**: Implementieren Sie `NetworkPolicies`, um die Kommunikation auf die notwendigen Flüsse zwischen Ihren Anwendungen zu steuern.
- **Wenden Sie Governance-Richtlinien an**: Verwenden Sie Tools wie **Kyverno**, um Sicherheitsregeln durchzusetzen (z.B. "root"-Container verbieten, Ressourcen `requests` und `limits` erfordern, usw.).
:::
