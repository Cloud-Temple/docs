---
title: Utilizzare Cilium Gateway API
---

import gapischema from '@site/docs/managed_kubernetes/tutorials/images/gapi.png'

## Introduzione

La Gateway API è il nuovo standard Kubernetes per la gestione del traffico in entrata. Succede alla risorsa Ingress tradizionale offrendo maggiore flessibilità, più funzionalità (routing avanzato, bilanciamento del carico, ecc.) e una migliore separazione delle responsabilità.

Nel vostro cluster Managed Kubernetes di Cloud Temple, **Cilium** viene utilizzato come CNI e implementa nativamente il supporto della Gateway API.

:::info Versioni supportate
Questa documentazione si applica ai cluster che utilizzano **Cilium 1.8.4 o superiore**.
I **CRD di Gateway API in versione 1.4** sono preinstallati sul vostro cluster.
:::

## Obiettivi

Questo tutorial vi guiderà per:

- Comprendere le risorse di base della Gateway API (GatewayClass, Gateway, HTTPRoute).
- Distribuire un'applicazione di test.
- Esporre questa applicazione tramite una Gateway Cilium.
- Testare l'accesso.

## Prerequisiti

- Un cluster Managed Kubernetes Cloud Temple operativo.
- Lo strumento `kubectl` configurato per accedere al vostro cluster.
- Lo strumento `cilium`.

## Concetti Chiave

La Gateway API decompone la configurazione di rete in tre risorse principali:

1. **GatewayClass**: Definisce il tipo di controller (qui, `io.cilium/gateway`).
2. **Gateway**: Crea un punto di ingresso di rete (load balancer).
3. **HTTPRoute**: Definisce le regole di routing (percorsi, header) verso i Services Kubernetes.

<img src={gapischema} alt="Schema GAPI"/>

## Passo 1: Verificare la versione e la GatewayClass

Potete verificare che il vostro cluster utilizzi una versione compatibile di Cilium (1.8.4+) tramite i comandi:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Assicuratevi quindi che la `GatewayClass` di Cilium sia disponibile sul vostro cluster:

```bash
kubectl get gatewayclass
```

Dovreste vedere un output simile a:

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

:::info Nota
Se non è elencata nessuna GatewayClass, assicuratevi che la funzionalità Gateway API sia abilitata nella vostra installazione Cilium.
:::

## Passo 2: Distribuire un'applicazione dimostrativa

Distribuiremo una semplice applicazione che restituisce informazioni sul pod (echo-server).

Create un file `apps.yaml`:

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

Applicate la configurazione:

```bash
kubectl apply -f apps.yaml
```

## Passo 3: Creare la Gateway

La Gateway richiederà la creazione di un LoadBalancer per ricevere il traffico.

Create un file `gateway.yaml`:

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

Applicate la configurazione:

```bash
kubectl apply -f gateway.yaml
```

Verificate che la Gateway abbia ottenuto un indirizzo IP (questo può richiedere alcuni istanti affinché il LoadBalancer venga provisionato dall'infrastruttura Cloud Temple):

```bash
kubectl get gateway my-gateway
```

Aspettate che il campo `PROGRAMMED` sia `True` e che `ADDRESS` mostri un IP.

## Passo 4: Creare una HTTPRoute

Ora che abbiamo un "punto di ingresso" (Gateway), dobbiamo indirizzare il traffico verso il nostro servizio.

Create un file `httproute.yaml`:

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

Applicate la configurazione:

```bash
kubectl apply -f httproute.yaml
```

## Passo 5: Testare l'accesso

Recuperate l'indirizzo IP della vostra Gateway:

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Inviate una richiesta a questo IP per testare:

```bash
curl http://10.200.205.2
```

Dovreste ricevere una risposta JSON dall'applicazione `echo-server` che indica i dettagli del pod che ha risposto.

## Funzionalità avanzate (Esempio: Canary Release)

La Gateway API facilita enormemente gli scenari di deployment avanzati, come il Canary Release (distribuzione ponderata del traffico).

Supponiamo di avere una v2 della nostra applicazione. Possiamo distribuire il traffico al 90% verso v1 e al 10% verso v2 semplicemente regolando i pesi in `backendRefs`:

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

Avete configurato una moderna infrastruttura di esposizione dei servizi con Cilium Gateway API. Questo approccio standardizzato, semanticamente più ricco degli Ingress, è quello raccomandato per sfruttare le capacità avanzate di rete di Kubernetes.
