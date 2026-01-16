---
title: Tutorials
---

These tutorials help you get started with and manage your **Managed Kubernetes** Cloud Temple cluster.

## 1. Deploy your first application (Hello World)

This first tutorial guides you through deploying, exposing, and accessing a simple application on your cluster.

### Prerequisites

1.  **`kubectl` installed**: Ensure that the Kubernetes command-line tool, `kubectl`, is installed on your workstation. If not, follow the [official installation instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).
2.  **`kubeconfig` file**: The Cloud Temple team provided you with a `kubeconfig` file after your cluster deployment. Place it in the default location (`~/.kube/config`) or specify it using the `KUBECONFIG` environment variable.

### Step 1: Verify Connection to the Cluster

To begin, ensure that `kubectl` is properly configured and can communicate with your cluster. Run the following command:

```bash
kubectl get nodes
```

You should see a list of your nodes (workers) with the status `Ready`.

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

### Step 4: Expose the Service to the Outside World Using an Ingress

To make our application accessible from the internet, we use an Ingress object. We will use the `nginx-external` ingress-class, which is provided by default.

1.  Create a file named `hello-ingress.yaml`. **Remember to replace `your-domain.example.com`** with a domain name that points to the public IP address of your `nginx-external` ingress.

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-ingress
      annotations:
        # Specifies that we want a TLS certificate managed by Cert-Manager
        cert-manager.io/cluster-issuer: "letsencrypt-prod"
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "your-domain.example.com"
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
        - "your-domain.example.com"
        secretName: hello-tls-secret # Cert-Manager will create this secret with the certificate
    ```

2.  Apply the manifest:

    ```bash
    kubectl apply -f hello-ingress.yaml
    ```

### Step 5: Access your application

Wait a few moments for Cert-Manager to obtain the TLS certificate from Let's Encrypt. You can monitor the status using the following command:

```bash
kubectl describe certificate hello-tls-secret
```

Once the certificate is ready (the `Certificate issued successfully` event appears), open your browser and navigate to `https://your-domain.example.com`.

Congratulations! You have successfully deployed and exposed your first application on Cloud Temple Managed Kubernetes.