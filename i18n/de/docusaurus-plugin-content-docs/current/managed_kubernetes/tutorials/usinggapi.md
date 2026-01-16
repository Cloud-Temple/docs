---
title: Cilium Gateway API verwenden
---

import gapischema from './images/gapi.png'

## Introduction

The API Gateway is the new Kubernetes standard for managing incoming traffic. It replaces the traditional Ingress resource by offering greater flexibility, advanced features (such as advanced routing, load balancing, etc.), and improved separation of responsibilities.

In your Managed Kubernetes Cloud Temple cluster, **Cilium** is used as the CNI and natively implements support for the Gateway API.

:::info Supported versions
This documentation applies to clusters using **Cilium 1.8.4 or later**.
The **Gateway API CRDs in version 1.4** are pre-installed on your cluster.
:::

## Ziele

Dieser Leitfaden führt Sie Schritt für Schritt durch:

- Verständnis der grundlegenden Ressourcen der Gateway API (GatewayClass, Gateway, HTTPRoute).
- Bereitstellung einer Testanwendung.
- Exponieren dieser Anwendung über eine Cilium-Gateway.
- Testen des Zugriffs.

## Voraussetzungen

- Ein funktionsfähiger Managed Kubernetes-Cluster von Cloud Temple.
- Das Tool `kubectl` ist konfiguriert, um auf Ihren Cluster zuzugreifen.
- Das Tool `cilium`.

## Key Concepts

Gateway API breaks down network configuration into three main resources:

1.  **GatewayClass**: Defines the type of controller (here, `io.cilium/gateway`).
2.  **Gateway**: Instantiates a network entry point (load balancer).
3.  **HTTPRoute**: Defines routing rules (paths, headers) to Kubernetes Services.

<img src={gapischema} alt="Schema GAPI"/>

## Step 1: Check Version and GatewayClass

You can verify that your cluster is using a compatible version of Cilium (1.8.4+) using the following commands:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Next, ensure that the Cilium `GatewayClass` is available in your cluster:

```bash
kubectl get gatewayclass
```

You should see output similar to:

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

:::info Note
If no GatewayClass is listed, make sure the Gateway API feature is enabled in your Cilium installation.
:::

## Step 2: Deploy a demonstration application

We will deploy a simple application that returns information about the pod (echo-server).

Create a file `apps.yaml`:

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

Apply the configuration:

```bash
kubectl apply -f apps.yaml
```

## Step 3: Create the Gateway

The Gateway will request the creation of a LoadBalancer to receive traffic.

Create a file `gateway.yaml`:

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

Apply the configuration:

```bash
kubectl apply -f gateway.yaml
```

Check that the Gateway has obtained an IP address (this may take a few moments while the LoadBalancer is provisioned by the Temple Cloud infrastructure):

```bash
kubectl get gateway my-gateway
```

Wait until the `PROGRAMMED` field is `True` and the `ADDRESS` field displays an IP.

## Step 4: Create an HTTPRoute

Now that we have a "gateway", we need to route traffic to our service.

Create a file named `httproute.yaml`:

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

Apply the configuration:

```bash
kubectl apply -f httproute.yaml
```

## Step 5: Test the access

Retrieve the IP address of your Gateway:

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Send a request to this IP address to test the connection:

```bash
curl http://10.200.205.2
```

You should receive a JSON response from the `echo-server` application indicating the details of the pod that responded.

## Advanced Features (Example: Canary Release)

Gateway API greatly simplifies advanced deployment scenarios, such as Canary Releases (weighted traffic distribution).

Assume we have a v2 version of our application. We can route 90% of the traffic to v1 and 10% to v2 simply by adjusting the weights in `backendRefs`:

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

## Schlussfolgerung

Sie haben eine moderne Infrastruktur zur Bereitstellung von Diensten mit der Cilium Gateway API eingerichtet. Dieser standardisierte Ansatz, der semantisch reichhaltiger als Ingress ist, wird empfohlen, um die erweiterten Funktionen des Kubernetes-Netzwerks optimal nutzen zu können.