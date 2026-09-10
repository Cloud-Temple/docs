---
title: Tutorial - Distribuire la tua prima applicazione
---

## Obiettivi

Questo tutorial vi guida passo dopo passo per realizzare il vostro primo deployment su un cluster **Managed Kubernetes**. Al termine di questa guida, avrete:

- Distribuito un'applicazione web semplice.
- Esposto questa applicazione all'interno del cluster tramite un Service.
- Reso l'applicazione accessibile da Internet tramite un Ingress.

## Prerequisiti

- Hai configurato l'accesso al cluster come descritto nella [guida di avvio rapido](../quickstart.md).
- Dispori di un namespace su cui hai i diritti di deployment. In questo tutorial, utilizzeremo un namespace denominato `hello-world`.

## Passo 1: Creare un namespace

Se non è già stato fatto, crea un namespace per isolare la tua applicazione.

```bash
kubectl create namespace hello-world
```

## Passo 2: Distribuire un'applicazione "Hello World"

Distribuiremo un'applicazione dimostrativa che visualizza una semplice pagina web.

1. Crea un file denominato `deployment.yaml` con il seguente contenuto:

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

2. Applica questo manifesto al tuo cluster:

    ```bash
    kubectl apply -f deployment.yaml
    ```

3. Verifica che il deployment sia stato creato e che i pod siano in esecuzione:

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

## Passo 3: Esporre l'applicazione nel cluster (Service)

Per consentire ai diversi componenti del cluster di comunicare con la nostra applicazione, dobbiamo creare un **Service**.

1. Crea un file denominato `service.yaml` :

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

2. Applica il manifesto :

    ```bash
    kubectl apply -f service.yaml
    ```

    La tua applicazione è ora accessibile tramite il nome `hello-world-service.hello-world` da qualsiasi altro pod del cluster.

## Passo 4: Rendere l'applicazione accessibile da Internet (Ingress)

Per esporre il nostro servizio su Internet, utilizzeremo una risorsa **Ingress**. L'offerta Managed Kubernetes fornisce più `ingressClassName` preconfigurati. Utilizzeremo `nginx-external` per un'esposizione pubblica.

1. Create un file `ingress.yaml`. **Ricordatevi di sostituire `votre-cluster-id`** con l'identificativo del vostro cluster (es: `ctodev`).

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

2. Applicare il manifest:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Passo 5: Verificare l'accesso

Un record DNS "*" indirizza già tutti gli URL che terminano con ".external.votre-cluster-id.mk.ms-cloud-temple.com" all'IP dell'ingress "external".
Le applicazioni pubblicate su questo suffisso DNS sono quindi direttamente accessibili.

```bash
curl http://hello-world.external.votre-cluster-id.mk.ms-cloud-temple.com
```

Dovresti ricevere una risposta dal server NGINX di demo.

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
>Questo tutorial ti ha mostrato le basi del deployment. Per un ambiente di produzione, è cruciale applicare ulteriori misure di sicurezza:
>
>- **Utilizza immagini sicure** : Privilegia immagini provenienti dal tuo registro aziendale sicuro come **Harbor** piuttosto che immagini pubbliche.
>- **Controlla i flussi di rete** : Implementa `NetworkPolicies` per limitare le comunicazioni ai soli flussi necessari tra le tue applicazioni.
>- **Applica politiche di governance** : Utilizza strumenti come **Kyverno** per imporre regole di sicurezza (es: vietare i container "root", richiedere `requests` e `limits` di risorse, ecc.).
>- **Applica Pod Disruption Budget** : un PDB garantisce che le tue applicazioni rimangano sempre disponibili.

## Pulizia

Per eliminare tutte le risorse che hai creato durante questo tutorial, puoi semplicemente eliminare il namespace:

```bash
kubectl delete namespace hello-world
```

Congratulazioni, hai distribuito ed esposto la tua prima applicazione su Managed Kubernetes!