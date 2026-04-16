---
title: Tutorial - Distribuire la prima applicazione
---

## Obiettivi

Questo tutorial vi guida passo dopo passo nel vostro primo deployment su un cluster **Managed Kubernetes**. Al termine di questa guida, avrete:

- Distribuito una semplice applicazione web.
- Esposto tale applicazione all'interno del cluster tramite un Service.
- Reso l'applicazione accessibile da Internet tramite un Ingress.

## Prerequisiti

- Avete configurato l'accesso al cluster come descritto nella [guida introduttiva](../quickstart.md).
- Disponete di un namespace sul quale avete i diritti di deployment. In questo tutorial utilizzeremo un namespace chiamato `hello-world`.

## Passo 1: Creare un namespace

Se non è già stato fatto, create un namespace per isolare la vostra applicazione.

```bash
kubectl create namespace hello-world
```

## Passo 2: Distribuire un'applicazione "Hello World"

Distribuiremo un'applicazione dimostrativa che mostra una semplice pagina web.

1. Create un file chiamato `deployment.yaml` con il seguente contenuto:

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

2. Applicate questo manifest al vostro cluster:

    ```bash
    kubectl apply -f deployment.yaml
    ```

3. Verificate che il deployment sia stato creato e che i pod siano in esecuzione:

    ```bash
    kubectl get deployment -n hello-world
    # Dovreste vedere il vostro deployment con 2/2 repliche pronte.
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    hello-world-deployment   2/2     2            2           102s

    kubectl get pods -n hello-world
    # Dovreste vedere due pod con lo stato "Running".
    NAME                                      READY   STATUS    RESTARTS   AGE
    hello-world-deployment-669dfbd799-294zz   1/1     Running   0          2m21s
    hello-world-deployment-669dfbd799-plcbg   1/1     Running   0          2m21s
    ```

## Passo 3: Esporre l'applicazione all'interno del cluster (Service)

Per consentire ai vari componenti del cluster di comunicare con la nostra applicazione, dobbiamo creare un **Service**.

1. Create un file chiamato `service.yaml`:

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

2. Applicate il manifest:

    ```bash
    kubectl apply -f service.yaml
    ```

    La vostra applicazione è ora accessibile tramite il nome `hello-world-service.hello-world` da qualsiasi altro pod nel cluster.

## Passo 4: Rendere l'applicazione accessibile da Internet (Ingress)

Per esporre il nostro servizio su Internet, utilizzeremo una risorsa **Ingress**. L'offerta Managed Kubernetes fornisce diversi `ingressClassName` preconfigurati. Utilizzeremo `nginx-external` per l'esposizione pubblica.

1. Create un file `ingress.yaml`. **Ricordate di sostituire `il-vostro-cluster-id`** con l'identificatore del vostro cluster (es. `ctodev`).

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-world-ingress
      namespace: hello-world
    spec:
      ingressClassName: nginx-external
      rules:
      - host: "hello-world.external.il-vostro-cluster-id.mk.ms-cloud-temple.com" # modificatemi
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

2. Applicate il manifest:

    ```bash
    kubectl apply -f ingress.yaml
    ```

## Passo 5: Verificare l'accesso

Una voce DNS con carattere jolly punta già tutti gli URL che terminano con ".external.il-vostro-cluster-id.mk.ms-cloud-temple.com" all'IP dell'ingress "external".
Le applicazioni pubblicate su questo suffisso DNS sono quindi direttamente accessibili.

```bash
curl http://hello-world.external.il-vostro-cluster-id.mk.ms-cloud-temple.com
```

Dovreste ricevere una risposta dal server NGINX di demo.

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

:::warning[Andare oltre: sicurezza in produzione]
Questo tutorial vi ha mostrato le basi del deployment. Per un ambiente di produzione, è fondamentale applicare misure di sicurezza aggiuntive:

- **Utilizzate immagini sicure**: Preferite immagini provenienti dal vostro registro aziendale sicuro come **Harbor** piuttosto che immagini pubbliche.
- **Controllate i flussi di rete**: Implementate `NetworkPolicies` per limitare le comunicazioni ai soli flussi necessari tra le vostre applicazioni.
- **Applicate politiche di governance**: Utilizzate strumenti come **Kyverno** per imporre regole di sicurezza (es. vietare i container "root", richiedere `requests` e `limits` per le risorse, ecc.).
:::

## Pulizia

Per eliminare tutte le risorse create durante questo tutorial, potete semplicemente eliminare il namespace:

```bash
kubectl delete namespace hello-world
```

Congratulazioni, avete distribuito ed esposto la vostra prima applicazione su Managed Kubernetes!
