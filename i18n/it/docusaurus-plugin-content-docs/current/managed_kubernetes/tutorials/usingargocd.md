---
title: Utilizzare ArgoCD per i tuoi deployment GitOps
---

import argocdguestbook from '@site/docs/managed_kubernetes/tutorials/images/argocdguestbook.png'

## Obiettivi

Questo tutorial spiega come utilizzare **ArgoCD**, lo strumento di distribuzione continua GitOps integrato nel tuo cluster **Managed Kubernetes**. Al termine di questa guida, saprai:

- Cos'è l'approccio GitOps.
- Come accedere all'interfaccia di ArgoCD.
- Come distribuire un'applicazione utilizzando ArgoCD per sincronizzare un repository Git.

## Il principio di GitOps con ArgoCD

**GitOps** è una pratica che consiste nell'utilizzare un repository Git come unica fonte di verità per dichiarare lo stato desiderato della propria infrastruttura e delle proprie applicazioni.

**ArgoCD** è lo strumento che implementa questo principio. Monitora costantemente un repository Git e confronta lo stato in esso definito (tramite manifest Kubernetes) con lo stato effettivo del cluster. Se rileva una differenza, applica automaticamente le modifiche affinché il cluster corrisponda a quanto dichiarato in Git.

I vantaggi sono numerosi:

- **Distribuzioni affidabili e riproducibili.**
- **Tracciabilità completa** di tutte le modifiche tramite la cronologia Git.
- **Ripristino rapido** dopo un incidente tornando a un commit precedente.
- **Sicurezza migliorata** limitando gli accessi diretti al cluster.

## Accedere all'interfaccia ArgoCD

L'interfaccia web di ArgoCD è esposta su un URL interno del vostro cluster. Per accedervi, dovete essere connessi alla rete interna del cluster (ad esempio, tramite un server bastion o un VPN).

L'URL da utilizzare è il seguente, sostituendo `<votre-identifiant-de-cluster>` :

`http://argocd.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

È possibile ottenere l'indirizzo IP interno dell'Ingress ArgoCD con il seguente comando :

```bash
kubectl get ingress argocd-server -n argocd
```

>ℹ️ La password per l'account `admin` vi viene fornita dai team Cloud Temple al momento della consegna del vostro cluster.

## Deployare un'applicazione con ArgoCD

Ora distribuiremo un'applicazione di test utilizzando l'approccio GitOps.

### 1. Il repository Git

ArgoCD ha bisogno di un repository Git contenente i manifest Kubernetes dell'applicazione da distribuire. Per questo tutorial, utilizzeremo il repository di esempi di ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Distribuiremo l'applicazione `guestbook` che si trova in questo repository.

### 2. Preparare il Namespace di destinazione

Affinché l'applicazione possa essere distribuita in un namespace gestito da Capsule, dobbiamo prima creare questo namespace e applicargli il label del tenant appropriato.

Eseguire i seguenti comandi :

```bash
# Crea il namespace
kubectl create namespace guestbook

# Applica il label per associarlo al tenant "default" di Capsule (se necessario, poiché il namespace è probabilmente già stato associato al tuo tenant durante la sua creazione)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Creare l'applicazione in ArgoCD

Ora che il namespace è pronto, possiamo dichiarare l'applicazione ad ArgoCD.

1. Creare un file denominato `app-guestbook.yaml` con il seguente contenuto :

    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: Application
    metadata:
      name: guestbook
      namespace: argocd
    spec:
      project: default
      source:
        repoURL: https://github.com/argoproj/argocd-example-apps.git
        targetRevision: HEAD
        path: guestbook
      destination:
        server: https://kubernetes.default.svc
        namespace: guestbook
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
    ```

    Questo manifest richiede ad ArgoCD di :
    - Creare un'applicazione denominata `guestbook`.
    - Monitorare il repository `argocd-example-apps`.
    - Concentrarsi sulla directory `guestbook` di questo repository.
    - Distribuire i manifest trovati nel namespace `guestbook` del cluster locale.
    - Mantenere la sincronizzazione automaticamente (`automated`).

2. Sono disponibili due opzioni per creare l'applicazione in ArgoCD :

    **Opzione A : Tramite `kubectl` (Approccio GitOps)**

    Applicare questo manifest direttamente al cluster. Questo è il metodo consigliato poiché segue il principio GitOps di gestione dichiarativa.

    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Opzione B : Tramite l'interfaccia web di ArgoCD**

    È inoltre possibile creare l'applicazione direttamente dall'interfaccia grafica :
    - Nell'UI di ArgoCD, fare clic su **"+ NEW APP"**.
    - In alto a destra nella schermata di creazione, fare clic su **"EDIT AS YAML"**.
    - Incollare il contenuto del file `app-guestbook.yaml` nell'editor.
    - Fare clic su **"CREATE"**.

### 4. Verificare la sincronizzazione

Non appena applichi il manifest, ArgoCD rileva questa nuova risorsa `Application` e inizia il suo lavoro.

1. **Via l'interfaccia web:**
    - Accedi all'interfaccia di ArgoCD.
    - Dovresti vedere una nuova card per l'applicazione `guestbook`.
    - Dopo qualche istante, il suo stato dovrebbe passare a `Healthy` e `Synced`.
    - Facendo clic sulla card, puoi visualizzare tutte le risorse Kubernetes (Deployment, Service, ecc.) che sono state create.

<img src={argocdguestbook} />

1. **Via la riga di comando:**
    - Verifica che il namespace `guestbook` sia stato creato:

      ```bash
      kubectl get ns guestbook
      ```

    - Verifica che le risorse dell'applicazione siano state distribuite correttamente in questo namespace:

      ```bash
      kubectl get all -n guestbook
      NAME                                READY   STATUS    RESTARTS   AGE
      pod/guestbook-ui-85db984648-br6r2   1/1     Running   0          19m

      NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
      service/guestbook-ui   ClusterIP   10.111.160.90   <none>        80/TCP    19m

      NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
      deployment.apps/guestbook-ui   1/1     1            1           19m

      NAME                                      DESIRED   CURRENT   READY   AGE
      replicaset.apps/guestbook-ui-85db984648   1         1         1       19m
      ```

### 5. Il ciclo GitOps

Ora, se modifichi un manifesto nel repository Git, ArgoCD rileverà la modifica e aggiornerà automaticamente l'applicazione nel cluster. È la magia del GitOps!

## Pulizia

Per eliminare l'applicazione e tutte le risorse associate, è sufficiente eliminare la risorsa `Application` di ArgoCD.

1. **Via l'interfaccia web:**
    - Nell'interfaccia utente di ArgoCD, individua l'applicazione `guestbook`.
    - Fai clic sui tre punti (...) per aprire il menu e seleziona **"Delete"**.
    - Seleziona l'opzione **"Foreground"** per assicurarti che tutte le risorse gestite (pod, servizi, ecc.) vengano eliminate a cascata.
2. **Via `kubectl`:**
    - Elimina il file `app-guestbook.yaml` che hai creato:

      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD eliminerà ora tutti i componenti dell'applicazione `guestbook`. Una volta completata la sincronizzazione di eliminazione, il namespace `guestbook` sarà vuoto. Potrai quindi eliminarlo con il seguente comando:

```bash
kubectl delete namespace guestbook
```

>ℹ️[Per approfondire: la gestione dei segreti]
>Questo tutorial utilizza un repository pubblico senza dati sensibili. Per le tue applicazioni in produzione, è fondamentale non memorizzare mai segreti (password, chiavi API) in chiaro nel tuo repository Git. >Soluzioni come **Sealed Secrets** o **OpenTofu** si integrano con ArgoCD per gestire i tuoi segreti in modo sicuro.

## Conclusione

Avete distribuito la vostra prima applicazione con ArgoCD seguendo i principi GitOps. Questo potente approccio vi consente di gestire le vostre distribuzioni in modo dichiarativo, affidabile e sicuro. Vi incoraggiamo ad adottarlo per tutte le vostre applicazioni su Managed Kubernetes.