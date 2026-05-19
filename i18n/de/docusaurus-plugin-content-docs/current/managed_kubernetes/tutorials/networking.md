---
title: Das Netzwerk in Managed Kubernetes
---

import cillium from '@site/docs/managed_kubernetes/tutorials/images/cillium.png'

---

## Ziele

Dieses Tutorial hat zum Ziel, Sie mit den grundlegenden Netzwerkkonzepten des **Managed Kubernetes**-Angebots vertraut zu machen. Am Ende dieses Leitfadens werden Sie in der Lage sein:

- Den IP-Adressraum Ihres Clusters zu verstehen (nœuds, pods, services).
- Die verschiedenen Mechanismen zum Verfügbarstellen Ihrer Anwendungen zu kennen (Ingress, LoadBalancer).
- Netzwerkflüsse und Sicherheitsrichtlinien mit Hubble zu visualisieren.

Wir verwenden als **Beispiel** einen Cluster **"ctodev"**, dessen zugewiesene Range **10.20.0.0/22** lautet.

:::warning[définition des ranges
]
 Dieser Range privater IP-Adressen X.Y.Z.0/22 (RFC 1918) wird mit dem Kunden bei der Einrichtung des Clusters festgelegt. Er kann später nicht geändert werden.
:::

## IP-Adressplan

Ihr verwalteter Kubernetes-Cluster verfügt über ein multi-zonales VLAN mit einem IPv4-Adressbereich in /22.

Der Bereich unseres **Beispiels** 10.20.0.0/22 ist logisch in Subnetze unterteilt.

    - 10.20.0.0/24 wird den Knoten des Clusters zugewiesen:

        - 10.20.0.10 : ctodev-gitrunner (die Maschine, die die Infrastruktur steuert)

        - 10.20.0.20 : Virtuelle IP (lastausgeglichen) des Kubernetes-API-Dienstes
        - 10.20.0.21 : ctodev-cp-01 (Control Plane 01)
        - 10.20.0.22 : ctodev-cp-02 (Control Plane 02)
        - 10.20.0.23 : ctodev-cp-03 (Control Plane 03)

        - 10.20.0.41 : ctodev-ceph-01 (Ceph-Speicher 01)
        - 10.20.0.42 : ctodev-ceph-02 (Ceph-Speicher 02)
        - 10.20.0.43 : ctodev-ceph-03 (Ceph-Speicher 03)

        - 10.20.0.51 : ctodev-wrk-01 (Worker 01)
        - 10.20.0.52 : ctodev-wrk-02 (Worker 02)
        - 10.20.0.53 : ctodev-wrk-03 (Worker 03)
        - ...
        - 10.20.0.151 : ctodev-wrk-100 (Worker 100)

    - Interner MetalLB : 10.20.1.1 – 10.20.1.127

      - 10.20.1.1 : Ingress `nginx-internal`
    
    - Externer MetalLB : 10.20.1.128 – 10.20.1.254

      - 10.20.1.128 : Ingress `nginx-external`
      - 10.20.1.129 : Ingress `nginx-external-secure`

    - Pods: 10.241.0.0/16 

    - Services: 10.95.0.0/12 

:::warning[Pod- und Service-Bereiche
]
Die Pod- und Service-Bereiche werden mit dem Kunden bei der Einrichtung des Clusters festgelegt. Sie können später nicht mehr geändert werden.
:::

## Verwendung von MetalLB

MetalLB ist die Komponente, die es ermöglicht, Layer-3-Dienste (nicht Web / L7) direkt über eine IP-Adresse, ob intern oder extern, unter Verwendung des Diensttyps `LoadBalancer` bereitzustellen. Es ist eine Alternative zu Ingress für Nicht-HTTP-Anwendungen oder für spezifische Anwendungsfälle.

Um MetalLB zu verwenden, müssen Sie lediglich einen Dienst vom Typ `LoadBalancer` erstellen. MetalLB weist diesem automatisch eine IP-Adresse aus den vordefinierten Bereichen zu. Die Unterscheidung zwischen den `internen` und `externen` Bereichen dient als Sicherheitsmaßnahme, um sicherzustellen, dass eine für die interne Nutzung vorgesehene Anwendung nicht versehentlich in einem öffentlichen Netzwerk freigegeben wird.

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

Nach dem Anwenden dieses Manifests wird Ihrem Dienst eine IP-Adresse im Bereich `10.20.1.1 – 10.20.1.127` zugewiesen und ist von Ihrem mit dem Cluster verbundenen internen Netzwerk aus erreichbar.

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

> **Wichtig**: Dieser Bereich verbleibt **in einem privaten Adressraum**. Für einen **öffentlichen Zugriff** muss eine **NAT-Regel (DNAT)** in der Firewall Ihrer Infrastruktur erstellt werden, um den Verkehr von einer Ihrer externen öffentlichen IP-Adressen auf die von MetalLB zugewiesene private IP-Adresse umzuleiten.

## Öffentliche IPs

Ihr verwalteter Kubernetes-Cluster wurde standardmäßig mit 2 öffentlichen IPv4-Adressen bereitgestellt.

Die erste IP wird auf Port 6443 für die Kubernetes-API verwendet (dans notre exemple ctodev.mk.ms-cloud-temple.com:6443)

Diese IP wird ebenfalls per NAT auf den Ingress-Controller *"nginx-external-secured"* für Port 443 abgebildet. Dies ermöglicht die Bereitstellung der verschiedenen, für Sie verfügbaren Konsolen (voir le guide quickstart). Der Zugriff auf diese öffentliche IP ist **gefiltert** und wird durch eine Liste zugelassener IPs eingeschränkt.

---
Die zweite öffentliche IP wird per NAT auf den Ingress-Controller *"nginx-external"* auf den Ports 80 und 443 abgebildet.

Die mit der Ingress-Class *"nginx-external"* bereitgestellten Anwendungen sind daher direkt über diese IP aus dem Internet erreichbar.

*Wenn Sie Änderungen an den Firewall-Regeln wünschen (ajout/retrait d'IP autorisées), müssen Sie ein Support-Ticket erstellen.*

*Auf Wunsch können weitere öffentliche IPs hinzugefügt werden.*

## DNS

Für das interne DNS (CoreDNS) weist der Cluster die folgenden Parameter auf:

- Clustername: `<identifiant du cluster>`
- Internes Domänen: `<identifiant du cluster>-cluster.local` (in unserem Beispiel: ctodev-cluster.local)

Diese interne Domäne ist entscheidend für die Kommunikation zwischen Diensten innerhalb des Clusters. Sie ermöglicht es einer Anwendung, eine andere Anwendung einfach über ihren Kubernetes-Dienstnamen zu kontaktieren, ohne die interne IP-Adresse kennen zu müssen.

Beispielsweise ist ein Dienst mit dem Namen `api-backend` im Namespace `production` automatisch unter der Adresse `api-backend.production.svc.ctodev-cluster.local` auflösbar.

---

Die für verwaltete Kubernetes-Cluster verwendete öffentliche DNS-Zone ist `.mk.ms-cloud-temple.com`

Der Ingress *"nginx-external"* (auf die öffentliche IP-Adresse Nr. 2 gemappt) ist unter `"*.external.<votre identifiant de cluster>.mk.ms-cloud-temple.com"` erreichbar.
Wenn Sie eine Anwendung mit dieser Ingress-Class veröffentlichen, können Sie direkt über diesen Domainnamen darauf zugreifen. Siehe Tutorial: [Déployer votre première application](./firstdeploy)

## Hubble: Netzwerkobservabilität direkt griffbereit

Hubble ist eine grafische Benutzeroberfläche und eine Befehlszeilenschnittstelle zur Visualisierung und zum Verständnis von Netzwerkflüssen in Ihrem Cluster. Auf Basis von Cilium bietet es Ihnen eine detaillierte Echtzeit-Übersicht über Dienste, Abhängigkeiten und Netzwerkrichtlinien.

Mit Hubble können Sie:

- **Netzwerkverkehr zwischen Ihren Pods und Diensten visualisieren**
- **Verbindungsprobleme identifizieren** und Netzwerkfehler.
- **die Durchsetzung Ihrer Sicherheitsrichtlinien** (Network Policies) **überprüfen**
- **Abhängigkeiten zwischen Ihren verschiedenen Anwendungen erkunden**

### Zugriff auf die Hubble-Benutzeroberfläche

Die grafische Benutzeroberfläche von Hubble ist über eine interne URL Ihres Clusters erreichbar. Ein Zugriff über ein `kubectl`-Port-Forwarding ist nicht möglich, da die Benutzer nicht über ausreichende Berechtigungen im Namespace `kube-system` verfügen.

Um darauf zuzugreifen, müssen Sie mit dem internen Netzwerk des Clusters verbunden sein (z. B. über einen Bastion-Host oder ein VPN). Die zu verwendende URL lautet:

`http://hubble.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Damit diese URL von Ihrem Arbeitsrechner aufgelöst werden kann, müssen Sie möglicherweise einen Eintrag in Ihrer `hosts`-Datei oder in Ihrem internen DNS hinzufügen. Die interne IP-Adresse des Hubble-Ingress können Sie mit dem folgenden Befehl ermitteln:

```bash
kubectl get ingress hubble-ui -n kube-system
```

<img src={cillium} />

### Erstellung interner DNS-Zonen (privates Cluster)

Um die Sicherheit zu erhöhen und den Zugriff auf Ihre Dienste und die Kubernetes-API von Ihrem internen Netzwerk aus zu vereinfachen, wird empfohlen, eine interne DNS-Zone zu erstellen. Diese Zone ermöglicht die Auflösung der Domainnamen Ihrer Ingress-Ressourcen und der Kubernetes-API auf deren jeweilige private IP-Adressen, wodurch der Verkehr über öffentliche Netzwerke vermieden wird.

**Beispielkonfiguration für unser Cluster „ctodev“, dessen zugewiesener IP-Bereich** **10.20.0.0/22 ist:**

Basierend auf den im Schnellstartleitfaden angegebenen URLs können Sie Ihr internes DNS wie folgt konfigurieren:

1. **Erstellen Sie die private DNS-Zone** auf Ihren internen DNS-Servern für `.<Cluster-ID>.mk.ms-cloud-temple.com`

2. **Fügen Sie die folgenden A-Einträge** hinzu:

    - **Für die Kubernetes-API:**
        - `. -> 10.20.0.20` (virtuelle IP der API)

    - **Für interne Dienste (über den Ingress `nginx-internal`):**
        - `hubble.internal -> 10.20.1.1`
        - `argocd.internal -> 10.20.1.1`
        - `ceph.internal -> 10.20.1.1`

    - **Für gesicherte Dienste (über den Ingress `nginx-external-secure`):**
        - `k10.external-secured -> 10.20.1.129`
        - `grafana.external-secured -> 10.20.1.129`
        - `harbor.external-secured -> 10.20.1.129`
        - `opencost.external-secured -> 10.20.1.129`
        - `opencost-mcp.external-secured -> 10.20.1.129`

Diese Konfiguration stellt sicher, dass der Verkehr zur API und zu den internen Diensten gemäß den Sicherheits-Best-Practices auf Ihr privates Netzwerk beschränkt bleibt.

<div class="card">
  <div class="card__header">
    <h3>Tutorial: Bereitstellen Ihrer ersten Anwendung</h3>
  </div>
  <div class="card__body">
    <p>
      Folgen Sie unserem detaillierten Leitfaden, um zu lernen, wie Sie eine Anwendung über einen Ingress bereitstellen.
    </p>
  </div>
  <div class="card__footer">
    <a href="./firstdeploy" class="button button--primary button--block">Tutorial anzeigen &rarr;</a>
  </div>
</div>

:::warning[Weiterführende Informationen: Sicherheit in der Produktion
]
Dieses Dokument erläutert die grundlegenden Netzwerkkonzepte. Für einen Produktionsbetrieb ist es entscheidend, zusätzliche Sicherheitsmaßnahmen anzuwenden:

- **Verwenden Sie sichere Images** : Bevorzugen Sie Images aus Ihrem gesicherten Unternehmens-Registry wie **Harbor** anstelle öffentlicher Images.
- **Steuern Sie den Netzwerkverkehr** : Konfigurieren Sie `NetworkPolicies`, um die Kommunikation auf die für Ihre Anwendungen erforderlichen Datenströme zu beschränken.
- **Geben Sie Governance-Richtlinien vor** : Nutzen Sie Tools wie **Kyverno**, um Sicherheitsregeln durchzusetzen (z. B. das Verbot von „Root“-Containern, die Anforderung von Ressourcenanfragen (`requests`) und -grenzen (`limits`) usw.).
:::