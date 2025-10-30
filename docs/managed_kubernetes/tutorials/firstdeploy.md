---
title: Tutoriel - Déployer votre première application
---

## Objectifs

Ce tutoriel vous guide pas à pas pour réaliser votre premier déploiement sur un cluster **Managed Kubernetes**. À la fin de ce guide, vous aurez :
- Déployé une application web simple.
- Exposé cette application à l'intérieur du cluster via un Service.
- Rendu l'application accessible depuis Internet via un Ingress.

## Prérequis

- Vous avez configuré votre accès au cluster comme décrit dans le [guide de démarrage rapide](../quickstart.md).
- Vous disposez d'un namespace sur lequel vous avez les droits de déploiement. Dans ce tutoriel, nous utiliserons un namespace nommé `hello-world`.

## Étape 1 : Créer un namespace

Si ce n'est pas déjà fait, créez un namespace pour isoler votre application.

```bash
kubectl create namespace hello-world
```

## Étape 2 : Déployer une application "Hello World"

Nous allons déployer une application de démonstration qui affiche une simple page web.

1.  Créez un fichier nommé `deployment.yaml` avec le contenu suivant :

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world-deployment
      namespace: hello-world
      labels:
        app: hello-world
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: hello-world
      template:
        metadata:
          labels:
            app: hello-world
        spec:
          containers:
          - name: hello-world
            image: nginxdemos/hello:plain-text
            ports:
            - containerPort: 80
    ```

2.  Appliquez ce manifeste à votre cluster :

    ```bash
    kubectl apply -f deployment.yaml
    ```

3.  Vérifiez que le déploiement a été créé et que les pods sont en cours d'exécution :

    ```bash
    kubectl get deployment -n hello-world
    # Vous devriez voir votre déploiement avec 2/2 replicas prêts.
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    hello-world-deployment   2/2     2            2           102s

    kubectl get pods -n hello-world
    # Vous devriez voir deux pods avec le statut "Running".
    NAME                                      READY   STATUS    RESTARTS   AGE
    hello-world-deployment-669dfbd799-294zz   1/1     Running   0          2m21s
    hello-world-deployment-669dfbd799-plcbg   1/1     Running   0          2m21s
    ```

## Étape 3 : Exposer l'application dans le cluster (Service)

Pour permettre aux différents composants du cluster de communiquer avec notre application, nous devons créer un **Service**.

1.  Créez un fichier nommé `service.yaml` :

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-world-service
      namespace: hello-world
    spec:
      selector:
        app: hello-world
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
      type: ClusterIP
    ```

2.  Appliquez le manifeste :

    ```bash
    kubectl apply -f service.yaml
    ```
    Votre application est maintenant accessible via le nom `hello-world-service.hello-world` depuis n'importe quel autre pod du cluster.

## Étape 4 : Rendre l'application accessible depuis Internet (Ingress)

Pour exposer notre service sur Internet, nous allons utiliser une ressource **Ingress**. L'offre Managed Kubernetes fournit plusieurs `ingressClassName` préconfigurés. Nous utiliserons `nginx-external` pour une exposition publique.

1.  Créez un fichier `ingress.yaml`. **Pensez à remplacer `votre-cluster-id`** par l'identifiant de votre cluster (ex: `ctodev`).

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-world-ingress
      namespace: hello-world
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com" # changez moi
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: hello-world-service
                port:
                  number: 80
    ```

2.  Appliquez le manifeste :

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Étape 5 : Vérifier l'accès

Une entrée DNS "*" fait déjà pointer toutes les url se terminant par ".external.votre-cluster-id.mk.ms-cloud-temple.com" vers l'IP de l'ingress "external".
les applications publiées sur ce suffixe DNS sont donc directement accessibles.

```bash
curl http://hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com
```

Vous devriez recevoir une réponse du serveur NGINX de démo.

```bash
StatusCode        : 200
StatusDescription : OK
Content           : Server address: 10.247.1.223:80
                    Server name: hello-world-deployment-669dfbd799-plcbg
                    Date: 29/Oct/2025:15:40:04 +0000
                    URI: /
                    Request ID: 2df985e0630c3a123b5cde23b687a033

RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Content-Length: 170
                    Cache-Control: no-cache
                    Content-Type: text/plain
                    Date: Wed, 29 Oct 2025 15:40:04 GMT
                    Expires: Wed, 29 Oct 2025 15:40:03 GMT
                    Server: ng...
```
## Nettoyage

Pour supprimer toutes les ressources que vous avez créées pendant ce tutoriel, vous pouvez simplement supprimer le namespace :

```bash
kubectl delete namespace hello-world
```

Félicitations, vous avez déployé et exposé votre première application sur Managed Kubernetes !
