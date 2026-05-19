---
title: Usar Cilium Gateway API
---

import gapischema from '@site/docs/managed_kubernetes/tutorials/images/gapi.png'

## Introducción

La API Gateway es la nueva norma de Kubernetes para la gestión del tráfico entrante. Sustituye al recurso Ingress tradicional, ofreciendo mayor flexibilidad, funcionalidades (enrutamiento avanzado, balanceo de carga, etc.) y una mejor separación de responsabilidades.

En su clúster Managed Kubernetes Cloud Temple, **Cilium** se utiliza como CNI e implementa de forma nativa el soporte para la API Gateway.

:::info[Versiones compatibles
]
Esta documentación se aplica a los clústeres que utilizan **Cilium 1.8.4 o superior**.
Los **CRDs de la API Gateway en versión 1.4** están preinstalados en su clúster.
:::

## Objetivos

Este tutorial le guiará a:

- Comprender los recursos básicos de la API Gateway (GatewayClass, Gateway, HTTPRoute).
- Desplegar una aplicación de prueba.
- Exponer esta aplicación a través de una Gateway de Cilium.
- Probar el acceso.

## Requisitos

- Un clúster de Kubernetes gestionado de Cloud Temple operativo.
- La herramienta `kubectl` configurada para acceder a su clúster.
- La herramienta `cilium`.

## Conceptos Clave

Gateway API descompone la configuración de red en tres recursos principales:

1. **GatewayClass** : Define el tipo de controlador (aquí, `io.cilium/gateway`).
2. **Gateway** : Instancia un punto de entrada de red (balanceador de carga).
3. **HTTPRoute** : Define las reglas de enrutamiento (rutas, cabeceras) hacia los Servicios de Kubernetes.

<img src={gapischema} alt="Schema GAPI"/>

## Paso 1: Verificar la versión y la GatewayClass

Puede verificar que su clúster utiliza una versión compatible de Cilium (1.8.4+) mediante los siguientes comandos:

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Asegúrese luego de que la `GatewayClass` de Cilium esté disponible en su clúster:

```bash
kubectl get gatewayclass
```

Debería ver una salida similar a la siguiente:

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

:::info[Nota
]
Si no se lista ninguna GatewayClass, asegúrese de que la función Gateway API esté habilitada en su instalación de Cilium.
:::

## Paso 2 : Desplegar una aplicación de demostración

Desplegaremos una aplicación sencilla que devuelve información sobre el pod (echo-server).

Cree un archivo `apps.yaml` :

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

Aplique la configuración :

```bash
kubectl apply -f apps.yaml
```

## Paso 3 : Crear la Gateway

La Gateway solicitará la creación de un LoadBalancer para recibir el tráfico.

Cree un archivo `gateway.yaml` :

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

Aplique la configuración :

```bash
kubectl apply -f gateway.yaml
```

Verifique que la Gateway haya obtenido una dirección IP (cela peut prendre quelques instants pour que le LoadBalancer soit provisionné par l'infrastructure Cloud Temple) :

```bash
kubectl get gateway my-gateway
```

Espere a que el campo `PROGRAMMED` sea `True` y que `ADDRESS` muestre una IP.

## Paso 4: Crear una HTTPRoute

Ahora que tenemos una "puerta de entrada" (Gateway), debemos dirigir el tráfico hacia nuestro servicio.

Cree un archivo `httproute.yaml` :

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

Aplique la configuración :

```bash
kubectl apply -f httproute.yaml
```

## Paso 5: Probar el acceso

Obtenga la dirección IP de su Gateway:

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Envíe una solicitud a esta IP para probar:

```bash
curl http://10.200.205.2
```

Debería recibir una respuesta JSON de la aplicación `echo-server` que indique los detalles del pod que respondió.

## Características avanzadas (Ejemplo: Canary Release)

La API Gateway facilita significativamente los escenarios de despliegue avanzados, como el Canary Release (distribución ponderada del tráfico).

Supongamos que tenemos una v2 de nuestra aplicación. Podemos distribuir el tráfico al 90 % hacia v1 y al 10 % hacia v2 simplemente ajustando los pesos en `backendRefs` :

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

## Conclusion

Ha implementado una infraestructura moderna de exposición de servicios con Cilium Gateway API. Este enfoque estandarizado, más rico semánticamente que los Ingress, se recomienda para aprovechar las capacidades avanzadas de la red de Kubernetes.