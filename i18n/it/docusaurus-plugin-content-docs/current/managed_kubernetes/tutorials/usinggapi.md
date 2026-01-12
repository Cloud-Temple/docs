---
title: Usare Cilium Gateway API
---

import gapischema from './images/gapi.png'

## Introduzione

L'API Gateway è lo standard Kubernetes per la gestione del traffico in entrata. Sostituisce la risorsa Ingress tradizionale offrendo maggiore flessibilità, funzionalità avanzate (routing avanzato, bilanciamento del carico, ecc.) e una migliore separazione delle responsabilità.

Nel tuo cluster Kubernetes gestito Cloud Temple, **Cilium** viene utilizzato come CNI e implementa nativamente il supporto per Gateway API.

:::info Versioni supportate
Questa documentazione si applica ai cluster che utilizzano **Cilium 1.8.4 o versioni successive**.
Le **CRD Gateway API nella versione 1.4** sono già preinstallate sul tuo cluster.
:::

## Obiettivi

Questo tutorial ti guiderà attraverso i seguenti passaggi:

- Comprendere le risorse di base di Gateway API (GatewayClass, Gateway, HTTPRoute).
- Distribuire un'applicazione di test.
- Esporre questa applicazione tramite una Gateway Cilium.
- Testare l'accesso.

## Prerequisiti

- Un cluster Kubernetes gestito Cloud Temple operativo.
- Lo strumento `kubectl` configurato per accedere al cluster.
- Lo strumento `cilium`.

## Concetti Chiave

Gateway API suddivide la configurazione di rete in tre risorse principali:

1.  **GatewayClass**: definisce il tipo di controller (in questo caso, `io.cilium/gateway`).
2.  **Gateway**: istanzia un punto di ingresso di rete (load balancer).
3.  **HTTPRoute**: definisce le regole di routing (percorsi, intestazioni) verso i servizi Kubernetes.

<img src={gapischema} alt="Schema GAPI"/>

## Step 1: Check the version and GatewayClass

You can verify that your cluster is running a compatible version of Cilium (1.8.4+) using the following commands:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Then, ensure that the Cilium `GatewayClass` is available in your cluster:

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

Create a file named `apps.yaml`:

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

Create a file named `gateway.yaml`:

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

Send a request to this IP to test:

```bash
curl http://10.200.205.2
```

You should receive a JSON response from the `echo-server` application indicating the details of the pod that responded.

## Funzionalità avanzate (Esempio: Canary Release)

Gateway API semplifica notevolmente scenari di distribuzione avanzati, come il Canary Release (distribuzione ponderata del traffico).

Supponiamo di avere una versione v2 della nostra applicazione. Possiamo distribuire il traffico al 90% alla v1 e al 10% alla v2 semplicemente regolando i pesi in `backendRefs`:

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

## Conclusione

Hai implementato un'infrastruttura moderna per l'esposizione dei servizi tramite Cilium Gateway API. Questa soluzione standardizzata, più ricca dal punto di vista semantico rispetto agli Ingress, è raccomandata per sfruttare appieno le capacità avanzate della rete Kubernetes.