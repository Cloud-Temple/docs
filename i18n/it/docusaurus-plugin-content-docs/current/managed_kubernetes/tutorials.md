---
title: Tutorial
---

These tutorials will help you get started with and manage your **Managed Kubernetes** Cloud Temple cluster.

## 1. Deploy your first application (Hello World)

This first tutorial guides you through deploying, exposing, and accessing a simple application on your cluster.

### Prerequisiti

1.  **`kubectl` installato** : Assicurati che l'utilità da riga di comando Kubernetes, `kubectl`, sia installata sul tuo computer. In caso contrario, segui le [istruzioni ufficiali di installazione](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).
2.  **File `kubeconfig`** : L'équipe Cloud Temple ti ha fornito un file `kubeconfig` dopo il deployment del tuo cluster. Posizionalo nel percorso predefinito (`~/.kube/config`) oppure utilizza la variabile d'ambiente `KUBECONFIG` per specificarlo.

### Step 1: Verify connection to the cluster

To begin, check that `kubectl` is properly configured and can communicate with your cluster. Run the following command:

```bash
kubectl get nodes
```

You should see the list of your nodes (workers) with the status `Ready`.

```
NAME         STATUS   ROLES    AGE   VERSION
worker-node1   Ready    <none>   ...   ...
worker-node2   Ready    <none>   ...   ...
worker-node3   Ready    <none>   ...   ...
```

### Step 2: Create a Deployment

We will deploy a simple web application that displays a home page.

1.  Create a file named `hello-deployment.yaml` with the following content:

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

2.  Apply this manifest to create the Deployment:

    ```bash
    kubectl apply -f hello-deployment.yaml
    ```

3.  Verify that the pods are running:

    ```bash
    kubectl get pods -l app=hello
    ```
    You should see two pods with the status `Running`.

### Step 3: Expose the Deployment with a Service

To enable communication with our pods inside the cluster, we create a Service.

1.  Create a file named `hello-service.yaml`:

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

2.  Apply the manifest:

    ```bash
    kubectl apply -f hello-service.yaml
    ```
    This service now exposes our application on an internal port within the cluster.

### Passo 4: Esporre il servizio al di fuori con un Ingress

Per rendere la nostra applicazione accessibile da Internet, utilizziamo un oggetto Ingress. Useremo la classe di ingresso `nginx-external`, fornita per impostazione predefinita.

1.  Crea un file `hello-ingress.yaml`. **Non dimenticare di sostituire `vostro-domaine.example.com`** con un nome di dominio che punti all'indirizzo IP pubblico del tuo ingress `nginx-external`.

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-ingress
      annotations:
        # Specifica che vogliamo un certificato TLS gestito da Cert-Manager
        cert-manager.io/cluster-issuer: "letsencrypt-prod"
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "vostro-domaine.example.com"
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
        - "vostro-domaine.example.com"
        secretName: hello-tls-secret # Cert-Manager creerà questo secret con il certificato
    ```

2.  Applica il manifesto:

    ```bash
    kubectl apply -f hello-ingress.yaml
    ```

### Step 5: Access your application

Wait a few moments for Cert-Manager to obtain the TLS certificate from Let's Encrypt. You can monitor the status using the following command:

```bash
kubectl describe certificate hello-tls-secret
```

Once the certificate is ready (the event `Certificate issued successfully` appears), open your browser and go to `https://your-domain.example.com`.

Congratulations! You have deployed and exposed your first application on Cloud Temple Managed Kubernetes.