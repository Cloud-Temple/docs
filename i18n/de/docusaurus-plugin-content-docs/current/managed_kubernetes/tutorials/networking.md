---
title: Das Netzwerk in Managed Kubernetes
---
import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Ziele

Dieses Tutorial soll Sie mit den grundlegenden Netzwerk-Konzepten des **Managed Kubernetes**-Angebots vertraut machen. Am Ende dieses Leitfadens werden Sie in der Lage sein:

- Den IP-Adressraum Ihres Clusters zu verstehen (Knoten, Pods, Dienste).
- Die verschiedenen Mechanismen zum Zugänglichmachen Ihrer Anwendungen zu kennen (Ingress, LoadBalancer).
- Netzwerkflüsse und Sicherheitsrichtlinien mit Hubble zu visualisieren.

Als **Beispiel** dient ein Cluster **"ctodev"**, dem der Bereich **10.20.0.0/22** zugewiesen wurde.

> ⚠[Definition der Bereiche]
> Dieser Bereich privater IPs X.Y.Z.0/22 (RFC 1918) wird mit dem Kunden bei der Cluster-Einrichtung festgelegt. Er kann später nicht mehr geändert werden.

## IP-Adressierungsplan

Ihr verwalteter Kubernetes-Cluster verfügt über ein multi-zonales VLAN mit einem IPv4-Adressbereich in /22.

Der Adressbereich unseres **Beispiels** 10.20.0.0/22 ist logisch in Unternetze unterteilt.

    - 10.20.0.0/24 wird den Cluster-Knoten zugewiesen:

    - 10.20.0.10 : ctodev-gitrunner (la machine qui pilote l'infrastructure)

    - 10.20.0.20 : Virtuelle IP (load balancée) des Kubernetes-API-Dienstes
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

    - Interner MetalLB : 10.20.1.1 – 10.20.1.127

    - 10.20.1.1 : Ingress`nginx-internal`

    - Externer MetalLB : 10.20.1.128 – 10.20.1.254

    - 10.20.1.128 : Ingress`nginx-external`
      - 10.20.1.129 : Ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16

    - Services: 10.95.0.0/12

> ⚠[Ranges Pods et Services]
> Die Pods- und Services-Bereiche werden beim Kunden bei der Cluster-Einrichtung festgelegt. Sie können später nicht mehr geändert werden.

## Verwendung von MetalLB

MetalLB ist die Komponente, die es ermöglicht, Layer-3-Dienste (nicht Web / L7) direkt über eine IP-Adresse, egal ob intern oder extern, unter Verwendung des Diensttyps `LoadBalancer` freizugeben. Es handelt sich hierbei um eine Alternative zu Ingress für nicht-HTTP-Anwendungen oder spezifische Anwendungsfälle.

Um MetalLB zu verwenden, müssen Sie lediglich einen Dienst vom Typ `LoadBalancer` erstellen. MetalLB weist ihm automatisch eine IP-Adresse aus den vordefinierten Bereichen zu. Die Unterscheidung zwischen den Bereichen `intern` und `extern` ist eine Sicherheitsmaßnahme, um sicherzustellen, dass eine für den internen Gebrauch bestimmte Anwendung nicht versehentlich in einem öffentlichen Netzwerk freigegeben wird.

**Beispiel: Freigabe eines Dienstes im internen Netzwerk**

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

Nach dem Anwenden dieses Manifests wird Ihrem Dienst eine IP-Adresse im Bereich `10.20.1.1 – 10.20.1.127` zugewiesen, und er ist von Ihrem mit dem Cluster verbundenen internen Netzwerk aus erreichbar.

**Beispiel: Freigabe eines Dienstes im externen Netzwerk**

Um eine IP-Adresse aus dem externen Bereich (`10.20.1.128 – 10.20.1.254`) anzufordern, müssen Sie Ihrem Dienst das Label `lb-type: external` hinzufügen.

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

> **Wichtig** : Dieser Bereich bleibt **in einem privaten Adressraum**. Für eine **öffentliche Freigabe** muss eine **NAT-Regel (DNAT)** auf dem Firewall Ihrer Infrastruktur erstellt werden, um den Verkehr von einer Ihrer externen öffentlichen IPs auf die von MetalLB zugewiesene private IP-Adresse umzuleiten.

## Öffentliche IPs

Ihr verwalteter Kubernetes-Cluster wurde standardmäßig mit 2 öffentlichen IPv4-Adressen bereitgestellt.

Die erste IP wird auf Port 6443 für die Kubernetes-API verwendet (dans notre exemple ctodev.mk.ms-cloud-temple.com:6443)

Diese gleiche IP wird ebenfalls für den Ingress-Controller *"nginx-external-secured"* auf Port 443 NATed. Dies ermöglicht die Bereitstellung der verschiedenen Konsolen, die Ihnen zur Verfügung stehen (voir le guide quickstart). Der Zugriff auf diese öffentliche IP ist **gefiltert** und basiert auf einer Liste erlaubter IPs.

---

Die zweite öffentliche IP wird für den Ingress-Controller *"nginx-external"* auf den Ports 80 und 443 NATed.

Anwendungen, die mit der Ingress-Klasse *"nginx-external"* bereitgestellt werden, sind somit direkt über das Internet auf dieser IP erreichbar.

*Wenn Sie eine Änderung der Firewall-Regeln wünschen (ajout/retrait d'IP autorisées), müssen Sie eine Support-Anfrage stellen.*

*Es ist möglich, weitere öffentliche IPs hinzuzufügen, falls gewünscht.*

## DNS

Für das interne DNS (CoreDNS) verfügt der Cluster über folgende Parameter:

- Clustername : `<identifiant du cluster>`
- Interner Domainname : `<identifiant du cluster>-cluster.local` (in unserem Beispiel: ctodev-cluster.local)

Diese interne Domain ist entscheidend für die Kommunikation zwischen Diensten innerhalb des Clusters. Sie ermöglicht es einer Anwendung, eine andere Anwendung einfach über ihren Kubernetes-Dienstnamen zu erreichen, ohne dessen interne IP-Adresse kennen zu müssen.

Beispielsweise wird ein Dienst mit dem Namen `api-backend` im Namespace `production` automatisch unter der Adresse `api-backend.production.svc.ctodev-cluster.local` aufgelöst.

---

Die für verwaltete Kubernetes-Cluster verwendete öffentliche DNS-Zone lautet `.mk.ms-cloud-temple.com`

Der Ingress *"nginx-external"* (gemappt auf die öffentliche IP Nr. 2) ist unter `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"` erreichbar.
Wenn Sie eine Anwendung mit dieser Ingress-Klasse veröffentlichen, können Sie direkt über diesen Domainnamen darauf zugreifen. Siehe das Tutorial: [Déployer votre première application](./firstdeploy)

## Hubble : Netzwerkbeobachtbarkeit leicht zugänglich

Hubble ist eine grafische und eine Befehlszeilenschnittstelle zur Visualisierung und zum Verständnis der Netzwerkflüsse in Ihrem Cluster. Basierend auf Cilium bietet es Ihnen eine detaillierte Übersicht über Dienste, Abhängigkeiten und Netzwerkrichtlinien in Echtzeit.

Mit Hubble können Sie :

- **Netzwerkverkehrsflüsse visualisieren** zwischen Ihren Pods und Diensten.
- **Konnektivitätsprobleme identifizieren** und Netzwerkfehler.
- **Die Umsetzung Ihrer Sicherheitsrichtlinien überprüfen** (Network Policies).
- **Abhängigkeiten erkunden** zwischen Ihren verschiedenen Anwendungen.

### Zugriff auf die Hubble-Oberfläche

Die grafische Benutzeroberfläche von Hubble wird über eine interne URL Ihres Clusters bereitgestellt. Ein Zugriff über ein Port-Forwarding mit `kubectl` ist nicht möglich, da die Benutzer nicht über ausreichende Berechtigungen im Namespace `kube-system` verfügen.

Um darauf zuzugreifen, müssen Sie mit dem internen Netzwerk des Clusters verbunden sein (z. B. über einen Bastion-Host oder ein VPN). Die zu verwendende URL lautet:

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Damit diese URL von Ihrem Arbeitsplatzrechner aufgelöst werden kann, müssen Sie wahrscheinlich einen Eintrag in Ihrer `hosts`-Datei oder in Ihrem internen DNS hinzufügen. Sie können die interne IP-Adresse des Hubble-Ingress mit dem folgenden Befehl abrufen:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Erstellen interner DNS-Zonen (privater Cluster)

Um die Sicherheit zu erhöhen und den Zugriff auf Ihre Dienste und die Kubernetes-API von Ihrem internen Netzwerk aus zu vereinfachen, wird empfohlen, eine interne DNS-Zone zu erstellen. Diese Zone ermöglicht die Auflösung der Domänennamen Ihrer Ingress-Ressourcen und der Kubernetes-API in ihre jeweiligen privaten IP-Adressen, wodurch der Transit über öffentliche Netzwerke vermieden wird.

**Beispielkonfiguration mit unserem Cluster "ctodev", dem der IP-Bereich zugewiesen wurde** **10.20.0.0/22 :**

Basierend auf den im Schnellstart-Leitfaden bereitgestellten URLs können Sie Ihren internen DNS wie folgt konfigurieren :

1. **Erstellen Sie die private DNS-Zone** auf Ihren internen DNS-Servern für `.<identifiant du cluster>.mk.ms-cloud-temple.com`
2. **Fügen Sie die folgenden A-Einträge** hinzu :

   - **Für die Kubernetes-API :**

     - `. -> 10.20.0.20` (IP virtuelle de l'API)
   - **Für interne Dienste (über den Ingress `nginx-internal`) :**

     - `hubble.internal -> 10.20.1.1`
     - `argocd.internal -> 10.20.1.1`
     - `ceph.internal -> 10.20.1.1`
   - **Für gesicherte Dienste (über den Ingress `nginx-external-secure`) :**

     - `k10.external-secured -> 10.20.1.129`
     - `grafana.external-secured -> 10.20.1.129`
     - `harbor.external-secured -> 10.20.1.129`
     - `opencost.external-secured -> 10.20.1.129`
     - `opencost-mcp.external-secured -> 10.20.1.129`

Diese Konfiguration stellt sicher, dass der Verkehr zur API und zu den internen Diensten innerhalb Ihres privaten Netzwerks bleibt, in Übereinstimmung mit den besten Sicherheitspraktiken.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Bereitstellen Ihrer ersten Anwendung</h3>
  </div>
  <div class="card__body">
    <p>
      Folgen Sie unserem detaillierten Leitfaden, um zu lernen, wie Sie eine Anwendung über einen Ingress verfügbar machen.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Tutorial ansehen →</a>
  </div>
</div>