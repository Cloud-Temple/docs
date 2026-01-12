---
title: Usar Cilium Gateway API
---

import gapischema from './images/gapi.png'

## Introducción

La API Gateway es la nueva norma de Kubernetes para la gestión del tráfico entrante. Reemplaza a la tradicional recurso Ingress ofreciendo mayor flexibilidad, funcionalidades avanzadas (enrutamiento avanzado, balanceo de carga, etc.) y una mejor separación de responsabilidades.

En su clúster Kubernetes gestionado Cloud Temple, **Cilium** se utiliza como CNI e implementa nativamente el soporte para Gateway API.

:::info Versiones compatibles
Esta documentación se aplica a los clústeres que utilizan **Cilium 1.8.4 o superior**.
Las CRDs de Gateway API en versión 1.4 están preinstaladas en su clúster.
:::

## Objetivos

Este tutorial lo guiará para:

- Comprender los recursos básicos de Gateway API (GatewayClass, Gateway, HTTPRoute).
- Desplegar una aplicación de prueba.
- Exponer esta aplicación mediante una Gateway Cilium.
- Probar el acceso.

## Requis

- Un clúster Kubernetes gestionné Cloud Temple operativo.
- La herramienta `kubectl` configurada para acceder a su clúster.
- La herramienta `cilium`.

## Conceptos Clave

Gateway API descompone la configuración de red en tres recursos principales:

1.  **GatewayClass**: Define el tipo de controlador (en este caso, `io.cilium/gateway`).
2.  **Gateway**: Instancia un punto de entrada de red (balanceador de carga).
3.  **HTTPRoute**: Define las reglas de enrutamiento (rutas, encabezados) hacia los Servicios de Kubernetes.

<img src={gapischema} alt="Esquema GAPI"/>

## Step 1: Check the version and GatewayClass

You can verify that your cluster is using a compatible version of Cilium (1.8.4+) using the following commands:

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

## Paso 2: Desplegar una aplicación de demostración

Desplegaremos una aplicación sencilla que devuelve información sobre el pod (echo-server).

Cree un archivo `apps.yaml`:

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

Aplicar la configuración:

```bash
kubectl apply -f apps.yaml
```

## Paso 3: Crear la Gateway

La Gateway solicitará la creación de un LoadBalancer para recibir el tráfico.

Cree un archivo `gateway.yaml`:

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

Aplicar la configuración:

```bash
kubectl apply -f gateway.yaml
```

Verifique que la Gateway haya obtenido una dirección IP (puede tardar unos instantes en que el LoadBalancer sea aprovisionado por la infraestructura Cloud Temple):

```bash
kubectl get gateway my-gateway
```

Espere a que el campo `PROGRAMMED` sea `True` y que `ADDRESS` muestre una IP.

## Paso 4: Crear una HTTPRoute

Ahora que tenemos una "puerta de entrada" (Gateway), debemos redirigir el tráfico hacia nuestro servicio.

Cree un archivo `httproute.yaml`:

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

Aplicar la configuración:

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

## Funcionalidades avanzadas (Ejemplo: Canary Release)

Gateway API facilita en gran medida los escenarios de despliegue avanzados, como el Canary Release (distribución ponderada del tráfico).

Supongamos que tenemos una versión v2 de nuestra aplicación. Podemos distribuir el tráfico al 90 % hacia v1 y al 10 % hacia v2 simplemente ajustando los pesos en `backendRefs`:

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

## Conclusión

Ha establecido una infraestructura moderna para la exposición de servicios con Cilium Gateway API. Este enfoque estandarizado, más rico semánticamente que Ingress, se recomienda para aprovechar al máximo las capacidades avanzadas de la red de Kubernetes.