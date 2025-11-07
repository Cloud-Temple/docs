---
title: Tutorials
---

These tutorials will help you get started with and manage your **Managed Kubernetes** Cloud Temple cluster.

## 1. Deploy your first application (Hello World)

This first tutorial guides you through deploying, exposing, and accessing a simple application on your cluster.

### Voraussetzungen

1.  **`kubectl` installiert**: Stellen Sie sicher, dass das Kubernetes-Befehlszeilenwerkzeug `kubectl` auf Ihrer Arbeitsstation installiert ist. Falls nicht, folgen Sie den [offiziellen Installationsanweisungen](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).
2.  **`kubeconfig`-Datei**: Das Cloud Temple-Team hat Ihnen nach der Bereitstellung Ihres Clusters eine `kubeconfig`-Datei zur Verfügung gestellt. Speichern Sie diese Datei im Standardpfad (`~/.kube/config`) oder geben Sie sie über die Umgebungsvariable `KUBECONFIG` an.

### Schritt 1: Verbindung zum Cluster überprüfen

Beginnen Sie damit, sicherzustellen, dass `kubectl` korrekt konfiguriert ist und mit Ihrem Cluster kommunizieren kann. Führen Sie den folgenden Befehl aus:

```bash
kubectl get nodes
```

Sie sollten eine Liste Ihrer Knoten (Workers) mit dem Status `Ready` sehen.

```
NAME         STATUS   ROLES    AGE   VERSION
worker-node1   Ready    <none>   ...   ...
worker-node2   Ready    <none>   ...   ...
worker-node3   Ready    <none>   ...   ...
```

### Schritt 2: Erstellen einer Bereitstellung

Wir werden eine einfache Webanwendung bereitstellen, die eine Startseite anzeigt.

1.  Erstellen Sie eine Datei namens `hello-deployment.yaml` mit folgendem Inhalt:

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

2.  Wenden Sie dieses Manifest an, um die Bereitstellung zu erstellen:

    ```bash
    kubectl apply -f hello-deployment.yaml
    ```

3.  Überprüfen Sie, ob die Pods ausgeführt werden:

    ```bash
    kubectl get pods -l app=hello
    ```
    Sie sollten zwei Pods mit dem Status `Running` sehen.

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

### Schritt 4: Exponieren des Services nach außen mit einem Ingress

Um unsere Anwendung von außen über das Internet erreichbar zu machen, verwenden wir ein Ingress-Objekt. Wir nutzen die Ingress-Klasse `nginx-external`, die standardmäßig bereitgestellt wird.

1.  Erstellen Sie eine Datei namens `hello-ingress.yaml`. **Vergessen Sie nicht, `votre-domaine.example.com` durch einen Domainnamen zu ersetzen, der auf die öffentliche IP-Adresse Ihres Ingress-Controllers `nginx-external` verweist.**

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-ingress
      annotations:
        # Gibt an, dass wir ein TLS-Zertifikat von Cert-Manager verwaltet haben möchten
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
        secretName: hello-tls-secret # Cert-Manager erstellt diesen Secret mit dem Zertifikat
    ```

2.  Wenden Sie das Manifest an:

    ```bash
    kubectl apply -f hello-ingress.yaml
    ```

### Step 5: Access your application

Wait a few moments for Cert-Manager to obtain the TLS certificate from Let's Encrypt. You can monitor the status using the following command:

```bash
kubectl describe certificate hello-tls-secret
```

Once the certificate is ready (the event `Certificate issued successfully` appears), open your browser and navigate to `https://your-domain.example.com`.

Congratulations! You have successfully deployed and exposed your first application on Cloud Temple Managed Kubernetes.