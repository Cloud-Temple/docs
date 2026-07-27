---
title: Tutorial - Bereitstellen Ihrer ersten Anwendung
---

## Ziele

Dieses Tutorial führt Sie Schritt für Schritt durch Ihre erste Bereitstellung auf einem **Managed Kubernetes**-Cluster. Nach Abschluss dieses Leitfadens haben Sie:

- Eine einfache Webanwendung bereitgestellt.
- Diese Anwendung innerhalb des Clusters über einen Service verfügbar gemacht.
- Die Anwendung über einen Ingress aus dem Internet zugänglich gemacht.

## Voraussetzungen

- Sie haben Ihren Cluster-Zugriff wie im [Schnellstartleitfaden](../quickstart.md) beschrieben konfiguriert.
- Sie verfügen über einen Namespace, für den Sie Berechtigungen zum Bereitstellen haben. In diesem Tutorial verwenden wir einen Namespace mit dem Namen `hello-world`.

## Schritt 1: Namespace erstellen

Falls noch nicht geschehen, erstellen Sie einen Namespace, um Ihre Anwendung zu isolieren.

```bash
kubectl create namespace hello-world
```

## Schritt 2: Bereitstellen einer "Hello World"-Anwendung

Wir werden eine Beispielanwendung bereitstellen, die eine einfache Webseite anzeigt.

1. Erstellen Sie eine Datei mit dem Namen `deployment.yaml` mit folgendem Inhalt:

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

3. Überprüfen Sie, ob die Bereitstellung erstellt wurde und die Pods ausgeführt werden:

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

## Schritt 3: Anwendung im Cluster verfügbar machen (Service)

Um es den verschiedenen Komponenten des Clusters zu ermöglichen, mit unserer Anwendung zu kommunizieren, müssen wir einen **Service** erstellen.

1. Erstellen Sie eine Datei mit dem Namen `service.yaml` :

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

2. Wenden Sie das Manifest an :

    ```bash
    kubectl apply -f service.yaml
    ```

    Ihre Anwendung ist jetzt über den Namen `hello-world-service.hello-world` von jedem anderen Pod im Cluster aus erreichbar.

## Schritt 4: Die Anwendung im Internet verfügbar machen (Ingress)

Um unseren Dienst im Internet verfügbar zu machen, verwenden wir eine **Ingress**-Ressource. Das Managed-Kubernetes-Angebot stellt mehrere vorkonfigurierte `ingressClassName`-Werte bereit. Wir verwenden `nginx-external` für eine öffentliche Erreichbarkeit.

1. Erstellen Sie eine Datei `ingress.yaml`. **Denken Sie daran, `votre-cluster-id`** durch die ID Ihres Clusters zu ersetzen (z. B. `ctodev`).

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

2. Wenden Sie das Manifest an:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Schritt 5: Zugriff überprüfen

Ein DNS-Eintrag "*" leitet bereits alle URLs, die auf ".external.votre-cluster-id.mk.ms-cloud-temple.com" enden, an die IP des "external"-Ingress weiter.
Anwendungen, die unter diesem DNS-Suffix veröffentlicht werden, sind somit direkt erreichbar.

```bash
curl http://hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com
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

>⚠[Pour aller plus loin : la sécurité en production]
>Dieses Tutorial hat Ihnen die Grundlagen der Bereitstellung gezeigt. Für eine Produktionsumgebung ist es entscheidend, zusätzliche Sicherheitsmaßnahmen zu ergreifen:
>
>- **Verwenden Sie sichere Images**: Bevorzugen Sie Images aus Ihrem sicheren Unternehmens-Registry wie **Harbor** gegenüber öffentlichen Images.
>- **Kontrollieren Sie den Netzwerkverkehr**: Implementieren Sie `NetworkPolicies`, um die Kommunikation auf die für Ihre Anwendungen notwendigen Datenströme zu beschränken.
>- **Wenden Sie Governance-Richtlinien an**: Verwenden Sie Tools wie **Kyverno**, um Sicherheitsregeln durchzusetzen (z. B. "root"-Container verbieten, `requests` und `limits` für Ressourcen vorschreiben usw.).
>- **Wenden Sie Pod Disruption Budgets an**: Ein PDB stellt sicher, dass Ihre Anwendungen jederzeit verfügbar bleiben.

## Bereinigung

Um alle während dieses Tutorials erstellten Ressourcen zu löschen, können Sie einfach den Namespace löschen:

```bash
kubectl delete namespace hello-world
```

Herzlichen Glückwunsch, Sie haben Ihre erste Anwendung auf Managed Kubernetes bereitgestellt und freigegeben!