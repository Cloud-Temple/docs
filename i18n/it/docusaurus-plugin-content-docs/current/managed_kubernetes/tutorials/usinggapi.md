---
title: Utilizzare Cilium Gateway API
---

import gapischema from '@site/docs/managed_kubernetes/tutorials/images/gapi.png'

## Introduzione

L'API Gateway è il nuovo standard Kubernetes per la gestione del traffico in entrata. Sostituisce la tradizionale risorsa Ingress offrendo maggiore flessibilità, funzionalità (instradamento avanzato, bilanciamento del carico, ecc.) e una migliore separazione delle responsabilità.

Nel vostro cluster Managed Kubernetes Cloud Temple, **Cilium** è utilizzato come CNI e implementa nativamente il supporto per la Gateway API.

>ℹ️[Versions supportées]
>Questa documentazione si applica ai cluster che utilizzano **Cilium 1.8.4 o superiore**.
>Le **CRD della Gateway API nella versione 1.4** sono preinstallate sul vostro cluster.

## Obiettivi

Questo tutorial ti guiderà a:

- Comprendere le risorse di base di Gateway API (GatewayClass, Gateway, HTTPRoute).
- Distribuire un'applicazione di test.
- Esporre questa applicazione tramite una Gateway Cilium.
- Testare l'accesso.

## Prerequisiti

- Un cluster Managed Kubernetes Cloud Temple operativo.
- Lo strumento `kubectl` configurato per accedere al vostro cluster.
- Lo strumento `cilium`.

## Concetti Chiave

Gateway API scompone la configurazione di rete in tre risorse principali:

1. **GatewayClass** : Definisce il tipo di controller (qui, `io.cilium/gateway`).
2. **Gateway** : Istanza un punto di ingresso di rete (load balancer).
3. **HTTPRoute** : Definisce le regole di routing (percorsi, headers) verso i Servizi Kubernetes.

<img src={gapischema} alt="Schema GAPI"/>

## Passo 1: Verificare la versione e la GatewayClass

È possibile verificare che il cluster utilizzi una versione compatibile di Cilium (1.8.4+) utilizzando i seguenti comandi:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Assicuratevi quindi che la `GatewayClass` di Cilium sia disponibile sul cluster:

```bash
kubectl get gatewayclass
```

Dovreste vedere un output simile a:

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

>ℹ️Se nessuna GatewayClass è elencata, assicuratevi che la funzionalità Gateway API sia abilitata nella vostra installazione di Cilium.

## Fase 2 : Distribuire un'applicazione dimostrativa

Distribuiremo un'applicazione semplice che restituisce informazioni sul pod (echo-server).

Crea un file `apps.yaml` :

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

Applica la configurazione :

```bash
kubectl apply -f apps.yaml
```

## Fase 3: Creare la Gateway

La Gateway richiederà la creazione di un LoadBalancer per ricevere il traffico.

Creare un file `gateway.yaml` :

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

Applicare la configurazione :

```bash
kubectl apply -f gateway.yaml
```

Verificare che la Gateway abbia ottenuto un indirizzo IP (potrebbe richiedere qualche istante affinché il LoadBalancer venga provisionato dall'infrastruttura Cloud Temple) :

```bash
kubectl get gateway my-gateway
```

Attendere che il campo `PROGRAMMED` sia `True` e che `ADDRESS` mostri un IP.

## Passaggio 4: Creare un HTTPRoute

Ora che abbiamo un "gateway" (Gateway), dobbiamo instradare il traffico verso il nostro servizio.

Crea un file `httproute.yaml` :

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

Applica la configurazione :

```bash
kubectl apply -f httproute.yaml
```

## Passo 5: Testare l'accesso

Recupera l'indirizzo IP del tuo Gateway:

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Invia una richiesta a questo IP per testare:

```bash
curl http://10.200.205.2
```

Dovresti ricevere una risposta JSON dall'applicazione `echo-server` che indica i dettagli del pod che ha risposto.

## Funzionalità avanzate (Esempio: Canary Release)

Gateway API facilita notevolmente gli scenari di deployment avanzati, come il Canary Release (distribuzione ponderata del traffico).

Supponiamo di avere una v2 della nostra applicazione. Possiamo distribuire il traffico al 90% verso v1 e al 10% verso v2 semplicemente regolando i pesi in `backendRefs` :

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

Avete implementato un'infrastruttura moderna di esposizione dei servizi con Cilium Gateway API. Questo approccio standardizzato, semanticamente più ricco rispetto agli Ingress, è consigliato per sfruttare le capacità avanzate della rete Kubernetes.