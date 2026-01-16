---
title: Utiliser Cilium Gateway API
---

import gapischema from './images/gapi.png'

## Introduction

L'API Gateway est la nouvelle norme Kubernetes pour la gestion du trafic entrant. Elle succède à la ressource Ingress traditionnelle en offrant plus de flexibilité, de fonctionnalités (routage avancé, répartition de charge, etc.) et une meilleure séparation des responsabilités.

Dans votre cluster Managed Kubernetes Cloud Temple, **Cilium** est utilisé comme CNI et implémente nativement le support de Gateway API.

:::info Versions supportées
Cette documentation s'applique aux clusters utilisant **Cilium 1.8.4 ou supérieur**.
Les **Gateway API CRDs en version 1.4** sont préinstallées sur votre cluster.
:::

## Objectifs

Ce tutoriel vous guidera pour :

- Comprendre les ressources de base de Gateway API (GatewayClass, Gateway, HTTPRoute).
- Déployer une application de test.
- Exposer cette application via une Gateway Cilium.
- Tester l'accès.

## Prérequis

- Un cluster Managed Kubernetes Cloud Temple opérationnel.
- L'outil `kubectl` configuré pour accéder à votre cluster.
- L'outil `cilium`.

## Concepts Clés

Gateway API décompose la configuration réseau en trois ressources principales :

1.  **GatewayClass** : Définit le type de contrôleur (ici, `io.cilium/gateway`).
2.  **Gateway** : Instancie un point d'entrée réseau (load balancer).
3.  **HTTPRoute** : Définit les règles de routage (chemins, headers) vers les Services Kubernetes.

<img src={gapischema} alt="Schema GAPI"/>

## Étape 1 : Vérifier la version et la GatewayClass

Vous pouvez vérifier que votre cluster utilise une version compatible de Cilium (1.8.4+) à l'aide des commandes :

```bash
cilium status
cilium config view | grep -w "enable-gateway-api"
```

Assurez-vous ensuite que la `GatewayClass` de Cilium est disponible sur votre cluster :

```bash
kubectl get gatewayclass
```

Vous devriez voir une sortie similaire à :

```text
NAME      CONTROLLER           ACCEPTED   AGE
cilium    io.cilium/gateway    True       2d
```

:::info Note
Si aucune GatewayClass n'est listée, assurez-vous que la fonctionnalité Gateway API est activée dans votre installation Cilium.
:::

## Étape 2 : Déployer une application de démonstration

Nous allons déployer une application simple qui renvoie des informations sur le pod (echo-server).

Créez un fichier `apps.yaml` :

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

Appliquez la configuration :

```bash
kubectl apply -f apps.yaml
```

## Étape 3 : Créer la Gateway

La Gateway va demander la création d'un LoadBalancer pour recevoir le trafic.

Créez un fichier `gateway.yaml` :

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

Appliquez la configuration :

```bash
kubectl apply -f gateway.yaml
```

Vérifiez que la Gateway a obtenu une adresse IP (cela peut prendre quelques instants pour que le LoadBalancer soit provisionné par l'infrastructure Cloud Temple) :

```bash
kubectl get gateway my-gateway
```

Attendez que le champ `PROGRAMMED` soit `True` et que `ADDRESS` affiche une IP.

## Étape 4 : Créer une HTTPRoute

Maintenant que nous avons une "porte d'entrée" (Gateway), nous devons diriger le trafic vers notre service.

Créez un fichier `httproute.yaml` :

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

Appliquez la configuration :

```bash
kubectl apply -f httproute.yaml
```

## Étape 5 : Tester l'accès

Récupérez l'adresse IP de votre Gateway :

```bash
kubectl get gateway my-gateway -o jsonpath='{.status.addresses[0].value}'
```

Envoyez une requête sur cette IP pour tester :

```bash
curl http://10.200.205.2
```

Vous devriez recevoir une réponse JSON de l'application `echo-server` indiquant les détails du pod qui a répondu.

## Fonctionnalités avancées (Exemple : Canary Release)

Gateway API facilite grandement les scénarios de déploiement avancés, comme le Canary Release (répartition pondérée du trafic).

Supposons que nous ayons une v2 de notre application. Nous pouvons répartir le trafic à 90% vers v1 et 10% vers v2 simplement en ajustant les poids dans `backendRefs` :

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

Vous avez mis en place une infrastructure moderne d'exposition de services avec Cilium Gateway API. Cette approche standardisée, plus riche sémantiquement que les Ingress, est recommandée pour tirer parti des capacités avancées du réseau Kubernetes.
