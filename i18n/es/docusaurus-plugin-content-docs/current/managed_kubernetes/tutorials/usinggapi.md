---
title: Usar Cilium Gateway API
---

import gapischema from '@site/docs/managed_kubernetes/tutorials/images/gapi.png'

## Introducción

La Gateway API es el nuevo estándar de Kubernetes para la gestión del tráfico entrante. Sucede al recurso Ingress tradicional ofreciendo más flexibilidad, más funcionalidades (enrutamiento avanzado, balanceo de carga, etc.) y una mejor separación de responsabilidades.

En su clúster de Managed Kubernetes de Cloud Temple, **Cilium** se utiliza como CNI e implementa de forma nativa el soporte de Gateway API.

:::info[Versiones soportadas]
Esta documentación se aplica a los clústeres que usan **Cilium 1.8.4 o superior**.
Los **CRDs de Gateway API en versión 1.4** están preinstalados en su clúster.
:::

## Objetivos

Este tutorial le guiará para:

- Comprender los recursos básicos de Gateway API (GatewayClass, Gateway, HTTPRoute).
- Desplegar una aplicación de prueba.
- Exponer esta aplicación mediante una Gateway de Cilium.
- Probar el acceso.

## Requisitos previos

- Un clúster de Managed Kubernetes de Cloud Temple operativo.
- La herramienta `kubectl` configurada para acceder a su clúster.
- La herramienta `cilium`.

## Conceptos Clave

Gateway API descompone la configuración de red en tres recursos principales:

1. **GatewayClass**: Define el tipo de controlador (aquí, `io.cilium/gateway`).
2. **Gateway**: Instancia un punto de entrada de red (load balancer).
3. **HTTPRoute**: Define las reglas de enrutamiento (rutas, headers) hacia los Services de Kubernetes.

<img src={gapischema} alt="Schema GAPI"/>

## Paso 1: Verificar la versión y la GatewayClass

Puede verificar que su clúster utiliza una versión compatible de Cilium (1.8.4+) mediante los comandos:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

A continuación, asegúrese de que la `GatewayClass` de Cilium está disponible en su clúster:

```bash
kubectl get gatewayclass
```

Debería ver una salida similar a:

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

:::info[Nota]
Si no se lista ninguna GatewayClass, asegúrese de que la funcionalidad Gateway API está habilitada en su instalación de Cilium.
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

Aplique la configuración:

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

Aplique la configuración:

```bash
kubectl apply -f gateway.yaml
```

Verifique que la Gateway ha obtenido una dirección IP (esto puede tardar unos instantes hasta que el LoadBalancer sea provisionado por la infraestructura de Cloud Temple):

```bash
kubectl get gateway my-gateway
```

Espere hasta que el campo `PROGRAMMED` sea `True` y que `ADDRESS` muestre una IP.

## Paso 4: Crear una HTTPRoute

Ahora que tenemos una "puerta de entrada" (Gateway), debemos dirigir el tráfico hacia nuestro servicio.

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

Aplique la configuración:

```bash
kubectl apply -f httproute.yaml
```

## Paso 5: Probar el acceso

Recupere la dirección IP de su Gateway:

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Envíe una solicitud a esta IP para probar:

```bash
curl http://10.200.205.2
```

Debería recibir una respuesta JSON de la aplicación `echo-server` que indica los detalles del pod que respondió.

## Funcionalidades avanzadas (Ejemplo: Canary Release)

Gateway API facilita enormemente los escenarios de despliegue avanzados, como el Canary Release (distribución ponderada del tráfico).

Supongamos que tenemos una v2 de nuestra aplicación. Podemos distribuir el tráfico al 90% hacia v1 y al 10% hacia v2 simplemente ajustando los pesos en `backendRefs`:

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

Ha configurado una infraestructura moderna de exposición de servicios con Cilium Gateway API. Este enfoque estandarizado, más rico semánticamente que los Ingress, es el recomendado para aprovechar las capacidades avanzadas de red de Kubernetes.
