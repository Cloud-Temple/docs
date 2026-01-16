---
title: Tutorial - Deploy Your First Application
---

## Objectives

This tutorial guides you step by step through your first deployment on a **Managed Kubernetes** cluster. By the end of this guide, you will have:
- Deployed a simple web application.
- Exposed this application within the cluster via a Service.
- Made the application accessible from the internet via an Ingress.

## Prerequisites

- You have set up access to the cluster as described in the [Quick Start Guide](../quickstart.md).
- You have a namespace where you have deployment permissions. In this tutorial, we will use a namespace named `hello-world`.

## Step 1: Create a namespace

If not already done, create a namespace to isolate your application.

```bash
kubectl create namespace hello-world
```

## Step 2: Deploy a "Hello World" Application

We will deploy a sample application that displays a simple web page.

1.  Create a file named `deployment.yaml` with the following content:

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

2.  Apply this manifest to your cluster:

    ```bash
    kubectl apply -f deployment.yaml
    ```

3.  Verify that the deployment has been created and that the pods are running:

    ```bash
    kubectl get deployment -n hello-world
    # You should see your deployment with 2/2 replicas ready.
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    hello-world-deployment   2/2     2            2           102s

    kubectl get pods -n hello-world
    # You should see two pods with the status "Running".
    NAME                                      READY   STATUS    RESTARTS   AGE
    hello-world-deployment-669dfbd799-294zz   1/1     Running   0          2m21s
    hello-world-deployment-669dfbd799-plcbg   1/1     Running   0          2m21s
    ```

## Step 3: Expose the application in the cluster (Service)

To enable communication between different components of the cluster and our application, we need to create a **Service**.

1.  Create a file named `service.yaml`:

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

2.  Apply the manifest:

    ```bash
    kubectl apply -f service.yaml
    ```
    Your application is now accessible via the name `hello-world-service.hello-world` from any other pod in the cluster.

## Step 4: Make the application accessible from the internet (Ingress)

To expose our service to the internet, we will use an **Ingress** resource. The Managed Kubernetes offering provides several pre-configured `ingressClassName` values. We will use `nginx-external` for public exposure.

1.  Create a file named `ingress.yaml`. **Remember to replace `your-cluster-id`** with your cluster ID (e.g., `ctodev`).

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-world-ingress
      namespace: hello-world
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "hello-world.external.your-cluster-id.mk.ms-cloud-temple.com" # change me
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

2.  Apply the manifest:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Step 5: Verify Access

A DNS entry "*" already routes all URLs ending with ".external.votre-cluster-id.mk.ms-cloud-temple.com" to the IP address of the "external" ingress.  
Applications published under this DNS suffix are therefore directly accessible.

```bash
curl http://hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com
```

You should receive a response from the demo NGINX server.

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
:::warning Going further: Security in production
This tutorial has shown you the basics of deployment. For a production environment, it is essential to apply additional security measures:

-   **Use secure images**: Prefer images from your enterprise secure registry such as **Harbor**, rather than public images.
-   **Control network traffic**: Implement `NetworkPolicies` to restrict communications to only the necessary flows between your applications.
-   **Enforce governance policies**: Use tools like **Kyverno** to enforce security rules (e.g., prohibit "root" containers, require resource `requests` and `limits`, etc.).
:::

## Cleanup

To delete all the resources you created during this tutorial, you can simply delete the namespace:

```bash
kubectl delete namespace hello-world
```

Congratulations, you've deployed and exposed your first application on Managed Kubernetes!