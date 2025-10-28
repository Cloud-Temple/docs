---
title: Tutoriels
---

Ces tutoriels vous aident à prendre en main et à gérer votre cluster **Managed Kubernetes** Cloud Temple.

## 1. Déployer votre première application (Hello World)

Ce premier tutoriel vous guide pour déployer, exposer et accéder à une application simple sur votre cluster.

### Prérequis

1.  **`kubectl` installé** : Assurez-vous que l'outil de ligne de commande Kubernetes, `kubectl`, est installé sur votre poste de travail. Si ce n'est pas le cas, suivez les [instructions d'installation officielles](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).
2.  **Fichier `kubeconfig`** : L'équipe Cloud Temple vous a fourni un fichier `kubeconfig` après le déploiement de votre cluster. Placez-le à l'emplacement par défaut (`~/.kube/config`) ou utilisez la variable d'environnement `KUBECONFIG` pour le spécifier.

### Étape 1 : Vérifier la connexion au cluster

Pour commencer, vérifiez que `kubectl` est correctement configuré et peut communiquer avec votre cluster. Exécutez la commande suivante :

```bash
kubectl get nodes
```

Vous devriez voir la liste de vos nœuds (workers) avec le statut `Ready`.

```
NAME         STATUS   ROLES    AGE   VERSION
worker-node1   Ready    <none>   ...   ...
worker-node2   Ready    <none>   ...   ...
worker-node3   Ready    <none>   ...   ...
```

### Étape 2 : Créer un Déploiement

Nous allons déployer une application web simple qui affiche une page d'accueil.

1.  Créez un fichier nommé `hello-deployment.yaml` avec le contenu suivant :

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: hello
      template:
        metadata:
          labels:
            app: hello
        spec:
          containers:
          - name: hello-app
            image: nginxdemos/hello
            ports:
            - containerPort: 80
    ```

2.  Appliquez ce manifeste pour créer le Déploiement :

    ```bash
    kubectl apply -f hello-deployment.yaml
    ```

3.  Vérifiez que les pods sont en cours d'exécution :

    ```bash
    kubectl get pods -l app=hello
    ```
    Vous devriez voir deux pods avec le statut `Running`.

### Étape 3 : Exposer le Déploiement avec un Service

Pour permettre la communication avec nos pods à l'intérieur du cluster, nous créons un Service.

1.  Créez un fichier nommé `hello-service.yaml` :

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-service
    spec:
      type: ClusterIP
      selector:
        app: hello
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
    ```

2.  Appliquez le manifeste :

    ```bash
    kubectl apply -f hello-service.yaml
    ```
    Ce service expose maintenant notre application sur un port interne au cluster.

### Étape 4 : Exposer le Service à l'extérieur avec un Ingress

Pour rendre notre application accessible depuis Internet, nous utilisons un objet Ingress. Nous utiliserons l'ingress-class `nginx-external` qui est fournie par défaut.

1.  Créez un fichier `hello-ingress.yaml`. **N'oubliez pas de remplacer `votre-domaine.example.com`** par un nom de domaine qui pointe vers l'adresse IP publique de votre ingress `nginx-external`.

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-ingress
      annotations:
        # Spécifie que nous voulons un certificat TLS géré par Cert-Manager
        cert-manager.io/cluster-issuer: "letsencrypt-prod"
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "votre-domaine.example.com"
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: hello-service
                port:
                  number: 80
      tls:
      - hosts:
        - "votre-domaine.example.com"
        secretName: hello-tls-secret # Cert-Manager créera ce secret avec le certificat
    ```

2.  Appliquez le manifeste :

    ```bash
    kubectl apply -f hello-ingress.yaml
    ```

### Étape 5 : Accéder à votre application

Attendez quelques instants que Cert-Manager obtienne le certificat TLS auprès de Let's Encrypt. Vous pouvez suivre le statut avec la commande :

```bash
kubectl describe certificate hello-tls-secret
```

Une fois que le certificat est prêt (l'événement `Certificate issued successfully` apparaît), ouvrez votre navigateur et accédez à `https://votre-domaine.example.com`.

Félicitations ! Vous avez déployé et exposé votre première application sur Managed Kubernetes Cloud Temple.
