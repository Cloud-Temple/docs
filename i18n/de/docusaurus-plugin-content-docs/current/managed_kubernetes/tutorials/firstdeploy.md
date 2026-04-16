---
title: Tutorial - Ihre erste Anwendung bereitstellen
---

## Ziele

Dieses Tutorial führt Sie Schritt für Schritt durch Ihre erste Bereitstellung auf einem **Managed Kubernetes**-Cluster. Am Ende dieses Leitfadens werden Sie:

- Eine einfache Webanwendung bereitgestellt haben.
- Diese Anwendung innerhalb des Clusters über einen Service exponiert haben.
- Die Anwendung über einen Ingress aus dem Internet erreichbar gemacht haben.

## Voraussetzungen

- Sie haben Ihren Clusterzugang wie im [Schnellstartleitfaden](../quickstart.md) beschrieben konfiguriert.
- Sie verfügen über einen Namespace, auf dem Sie Bereitstellungsrechte haben. In diesem Tutorial verwenden wir einen Namespace namens `hello-world`.

## Schritt 1: Einen Namespace erstellen

Falls noch nicht geschehen, erstellen Sie einen Namespace, um Ihre Anwendung zu isolieren.

```bash
kubectl create namespace hello-world
```

## Schritt 2: Eine "Hello World"-Anwendung bereitstellen

Wir werden eine Demoanwendung bereitstellen, die eine einfache Webseite anzeigt.

1. Erstellen Sie eine Datei namens `deployment.yaml` mit folgendem Inhalt:

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

2. Wenden Sie dieses Manifest auf Ihren Cluster an:

    ```bash
    kubectl apply -f deployment.yaml
    ```

3. Überprüfen Sie, dass das Deployment erstellt wurde und die Pods laufen:

    ```bash
    kubectl get deployment -n hello-world
    # Sie sollten Ihr Deployment mit 2/2 bereiten Replikas sehen.
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    hello-world-deployment   2/2     2            2           102s

    kubectl get pods -n hello-world
    # Sie sollten zwei Pods mit dem Status "Running" sehen.
    NAME                                      READY   STATUS    RESTARTS   AGE
    hello-world-deployment-669dfbd799-294zz   1/1     Running   0          2m21s
    hello-world-deployment-669dfbd799-plcbg   1/1     Running   0          2m21s
    ```

## Schritt 3: Die Anwendung im Cluster exponieren (Service)

Um den verschiedenen Komponenten des Clusters die Kommunikation mit unserer Anwendung zu ermöglichen, müssen wir einen **Service** erstellen.

1. Erstellen Sie eine Datei namens `service.yaml`:

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

2. Wenden Sie das Manifest an:

    ```bash
    kubectl apply -f service.yaml
    ```

    Ihre Anwendung ist nun über den Namen `hello-world-service.hello-world` von jedem anderen Pod im Cluster aus erreichbar.

## Schritt 4: Die Anwendung aus dem Internet erreichbar machen (Ingress)

Um unseren Service im Internet zu exponieren, verwenden wir eine **Ingress**-Ressource. Das Managed Kubernetes-Angebot stellt mehrere vorkonfigurierte `ingressClassName`-Werte bereit. Wir verwenden `nginx-external` für die öffentliche Exposition.

1. Erstellen Sie eine `ingress.yaml`-Datei. **Denken Sie daran, `ihre-cluster-id`** durch den Bezeichner Ihres Clusters zu ersetzen (z.B. `ctodev`).

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-world-ingress
      namespace: hello-world
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "hello-world.external.ihre-cluster-id.mk.ms-cloud-temple.com" # ändern Sie mich
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

2. Wenden Sie das Manifest an:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Schritt 5: Zugang überprüfen

Ein Wildcard-DNS-Eintrag leitet bereits alle URLs, die auf ".external.ihre-cluster-id.mk.ms-cloud-temple.com" enden, an die IP des "external"-Ingress weiter.
Auf diesem DNS-Suffix veröffentlichte Anwendungen sind daher direkt erreichbar.

```bash
curl http://hello-world.external.ihre-cluster-id.mk.ms-cloud-temple.com
```

Sie sollten eine Antwort vom Demo-NGINX-Server erhalten.

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

:::warning[Weiterführend: Sicherheit in der Produktion]
Dieses Tutorial hat Ihnen die Grundlagen der Bereitstellung gezeigt. Für eine Produktionsumgebung ist es entscheidend, zusätzliche Sicherheitsmaßnahmen anzuwenden:

- **Verwenden Sie sichere Images**: Bevorzugen Sie Images aus Ihrer sicheren Unternehmens-Registry wie **Harbor** anstelle von öffentlichen Images.
- **Kontrollieren Sie Netzwerkflüsse**: Implementieren Sie `NetworkPolicies`, um die Kommunikation auf die notwendigen Flüsse zwischen Ihren Anwendungen zu beschränken.
- **Wenden Sie Governance-Richtlinien an**: Verwenden Sie Tools wie **Kyverno**, um Sicherheitsregeln durchzusetzen (z.B. "root"-Container verbieten, Ressourcen `requests` und `limits` erfordern, usw.).
:::

## Bereinigung

Um alle während dieses Tutorials erstellten Ressourcen zu löschen, können Sie einfach den Namespace löschen:

```bash
kubectl delete namespace hello-world
```

Herzlichen Glückwunsch, Sie haben Ihre erste Anwendung auf Managed Kubernetes bereitgestellt und exponiert!
