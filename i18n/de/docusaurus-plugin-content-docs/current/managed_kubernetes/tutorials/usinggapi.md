---
title: Cilium Gateway API verwenden
---

import gapischema from '@site/docs/managed_kubernetes/tutorials/images/gapi.png'

## Einführung

Die Gateway API ist der neue Kubernetes-Standard für die Verwaltung des eingehenden Datenverkehrs. Sie löst die traditionelle Ingress-Ressource ab und bietet mehr Flexibilität, mehr Funktionen (erweitertes Routing, Load Balancing, usw.) und eine bessere Trennung der Verantwortlichkeiten.

In Ihrem Cloud Temple Managed Kubernetes-Cluster wird **Cilium** als CNI verwendet und implementiert nativ die Gateway API-Unterstützung.

:::info[Unterstützte Versionen]
Diese Dokumentation gilt für Cluster, die **Cilium 1.8.4 oder höher** verwenden.
**Gateway API CRDs in Version 1.4** sind auf Ihrem Cluster vorinstalliert.
:::

## Ziele

Dieses Tutorial führt Sie durch:

- Das Verstehen der grundlegenden Gateway API-Ressourcen (GatewayClass, Gateway, HTTPRoute).
- Das Bereitstellen einer Testanwendung.
- Das Exponieren dieser Anwendung über ein Cilium Gateway.
- Das Testen des Zugangs.

## Voraussetzungen

- Ein betriebsbereiter Cloud Temple Managed Kubernetes-Cluster.
- Das `kubectl`-Tool konfiguriert für den Zugriff auf Ihren Cluster.
- Das `cilium`-Tool.

## Schlüsselkonzepte

Die Gateway API zerlegt die Netzwerkkonfiguration in drei Hauptressourcen:

1. **GatewayClass**: Definiert den Typ des Controllers (hier `io.cilium/gateway`).
2. **Gateway**: Instanziiert einen Netzwerkeingangspunkt (Load Balancer).
3. **HTTPRoute**: Definiert Routing-Regeln (Pfade, Headers) zu Kubernetes-Services.

<img src={gapischema} alt="Schema GAPI"/>

## Schritt 1: Version und GatewayClass überprüfen

Sie können überprüfen, dass Ihr Cluster eine kompatible Version von Cilium (1.8.4+) verwendet, mit folgenden Befehlen:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Stellen Sie dann sicher, dass die Cilium `GatewayClass` auf Ihrem Cluster verfügbar ist:

```bash
kubectl get gatewayclass
```

Sie sollten eine ähnliche Ausgabe sehen wie:

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

:::info[Hinweis]
Wenn keine GatewayClass aufgelistet ist, stellen Sie sicher, dass die Gateway API-Funktion in Ihrer Cilium-Installation aktiviert ist.
:::

## Schritt 2: Eine Demoanwendung bereitstellen

Wir werden eine einfache Anwendung bereitstellen, die Informationen über den Pod zurückgibt (echo-server).

Erstellen Sie eine `apps.yaml`-Datei:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-server
  labels:
    app: echo-server
spec:
  replicas: 2
  selector:
    matchLabels:
      app: echo-server
  template:
    metadata:
      labels:
        app: echo-server
    spec:
      containers:
      - name: echo-server
        image: ealen/echo-server:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: echo-service
  labels:
    app: echo-server
spec:
  selector:
    app: echo-server
  ports:
  - port: 80
    targetPort: 80
```

Wenden Sie die Konfiguration an:

```bash
kubectl apply -f apps.yaml
```

## Schritt 3: Das Gateway erstellen

Das Gateway wird die Erstellung eines LoadBalancers anfordern, um Datenverkehr zu empfangen.

Erstellen Sie eine `gateway.yaml`-Datei:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: my-gateway
spec:
  gatewayClassName: cilium
  listeners:
  - protocol: HTTP
    port: 80
    name: web-gw
    allowedRoutes:
      namespaces:
        from: Same
```

Wenden Sie die Konfiguration an:

```bash
kubectl apply -f gateway.yaml
```

Überprüfen Sie, dass das Gateway eine IP-Adresse erhalten hat (dies kann einige Momente dauern, bis der LoadBalancer von der Cloud Temple-Infrastruktur provisioniert wird):

```bash
kubectl get gateway my-gateway
```

Warten Sie, bis das Feld `PROGRAMMED` den Wert `True` hat und `ADDRESS` eine IP-Adresse anzeigt.

## Schritt 4: Eine HTTPRoute erstellen

Da wir nun einen "Eingangspunkt" (Gateway) haben, müssen wir den Datenverkehr zu unserem Dienst leiten.

Erstellen Sie eine `httproute.yaml`-Datei:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: echo-route
spec:
  parentRefs:
  - name: my-gateway
  rules:
  - matches:
    - path:
        type: PathPrefix
        value: /
    backendRefs:
    - name: echo-service
      port: 80
```

Wenden Sie die Konfiguration an:

```bash
kubectl apply -f httproute.yaml
```

## Schritt 5: Den Zugang testen

Rufen Sie die IP-Adresse Ihres Gateways ab:

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Senden Sie eine Anfrage an diese IP-Adresse zum Testen:

```bash
curl http://10.200.205.2
```

Sie sollten eine JSON-Antwort von der `echo-server`-Anwendung erhalten, die Details des antwortenden Pods anzeigt.

## Erweiterte Funktionen (Beispiel: Canary Release)

Die Gateway API erleichtert erheblich erweiterte Bereitstellungsszenarien, wie z.B. Canary Release (gewichtete Verkehrsaufteilung).

Angenommen, wir haben eine v2 unserer Anwendung. Wir können den Datenverkehr zu 90% zu v1 und 10% zu v2 aufteilen, indem wir einfach die Gewichte in `backendRefs` anpassen:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: echo-route-canary
spec:
  parentRefs:
  - name: my-gateway
  rules:
  - backendRefs:
    - name: echo-service
      port: 80
      weight: 90
    - name: echo-service-v2
      port: 80
      weight: 10
```

## Fazit

Sie haben eine moderne Infrastruktur zur Service-Exposition mit Cilium Gateway API eingerichtet. Dieser standardisierte Ansatz, der semantisch reichhaltiger als Ingress ist, wird empfohlen, um die fortgeschrittenen Netzwerkfähigkeiten von Kubernetes zu nutzen.
