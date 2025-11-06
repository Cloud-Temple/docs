---
title: Usare ArgoCD per i tuoi deployment GitOps
---

import argocdguestbook from './images/argocdguestbook.png'

## Obiettivi

Questo tutorial ti spiega come utilizzare **ArgoCD**, lo strumento di distribuzione continua basato su GitOps integrato nel tuo cluster **Managed Kubernetes**. Al termine di questa guida, saprai:
- Cos'è l'approccio GitOps.
- Come accedere all'interfaccia di ArgoCD.
- Come distribuire un'applicazione utilizzando ArgoCD per sincronizzare un repository Git.

## Il principio di GitOps con ArgoCD

**GitOps** è una pratica che consiste nell'utilizzare un repository Git come unica fonte di verità per dichiarare lo stato desiderato della propria infrastruttura e delle proprie applicazioni.

**ArgoCD** è lo strumento che implementa questo principio. Monitora costantemente un repository Git e confronta lo stato definito al suo interno (attraverso manifesti Kubernetes) con lo stato effettivo del proprio cluster. Se rileva una differenza, applica automaticamente le modifiche necessarie affinché il cluster corrisponda a quanto dichiarato nel repository Git.

I vantaggi sono numerosi:
- **Distribuzioni affidabili e riproducibili.**
- **Tracciabilità completa** di tutti i cambiamenti tramite il cronologia Git.
- **Ripristino rapido** dopo un incidente tornando a un commit precedente.
- **Sicurezza migliorata** limitando gli accessi diretti al cluster.

## Accedere all'interfaccia ArgoCD

L'interfaccia web di ArgoCD è esposta tramite un URL interno del tuo cluster. Per accedervi, devi essere connesso alla rete interna del cluster (ad esempio, tramite un bastion o un VPN).

L'URL da utilizzare è la seguente, sostituendo `<il-tuo-identificativo-del-cluster>`:

`http://argocd.internal.<il-tuo-identificativo-del-cluster>.mk.ms-cloud-temple.com`

Puoi ottenere l'indirizzo IP interno dell'Ingress ArgoCD con il seguente comando:
```bash
kubectl get ingress argocd-server -n argocd
```

:::info
La password per l'account `admin` ti viene fornita dalle squadre Cloud Temple al momento della consegna del tuo cluster.
:::

## Deploy an application with ArgoCD

We will now deploy a test application using the GitOps approach.

### 1. Il repository Git

ArgoCD ha bisogno di un repository Git contenente i manifesti Kubernetes dell'applicazione da distribuire. Per questo tutorial, utilizzeremo il repository di esempio di ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Distribuiremo l'applicazione `guestbook` che si trova in questo repository.

### 2. Preparare lo spazio dei nomi di destinazione

Per poter distribuire l'applicazione in uno spazio dei nomi gestito da Capsule, dobbiamo prima creare lo spazio dei nomi e applicargli il label appropriato per il tenant.

Eseguire i comandi seguenti:

```bash
```

# Crea lo spazio dei nomi
kubectl create namespace guestbook

# Apply the label to associate it with the "default" tenant of Capsule (if needed, as the namespace has likely already been associated with your tenant during its creation)
kubectl label namespace guestbook capsule.clastix.io/tenant=default

### 3. Creare l'applicazione in ArgoCD

Ora che lo spazio dei nomi è pronto, possiamo dichiarare l'applicazione in ArgoCD.

1.  Creare un file denominato `app-guestbook.yaml` con il seguente contenuto:

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
    Questo manifesto richiede ad ArgoCD di:
    - Creare un'applicazione denominata `guestbook`.
    - Monitorare il repository `argocd-example-apps`.
    - Concentrarsi sulla directory `guestbook` di questo repository.
    - Distribuire i manifesti trovati nello spazio dei nomi `guestbook` del cluster locale.
    - Mantenere la sincronizzazione automaticamente (`automated`).

2.  Hai due opzioni per creare l'applicazione in ArgoCD:

    **Opzione A: tramite `kubectl` (approccio GitOps)**

    Applica questo manifesto direttamente al tuo cluster. Questo è il metodo raccomandato poiché segue il principio GitOps di gestione dichiarativa.
    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Opzione B: tramite l'interfaccia web di ArgoCD**

    Puoi anche creare l'applicazione direttamente dall'interfaccia grafica:
    - Nell'UI di ArgoCD, fai clic su **"+ NEW APP"**.
    - In alto a destra della schermata di creazione, fai clic su **"EDIT AS YAML"**.
    - Incolla il contenuto del tuo file `app-guestbook.yaml` nell'editor.
    - Fai clic su **"CREATE"**.

### 4. Verificare la sincronizzazione

Non appena applichi il manifesto, ArgoCD rileva questa nuova risorsa `Application` e inizia il suo processo.

1.  **Attraverso l'interfaccia web:**
    - Accedi all'interfaccia di ArgoCD.
    - Dovresti vedere una nuova scheda per l'applicazione `guestbook`.
    - Dopo alcuni istanti, lo stato dovrebbe passare a `Healthy` e `Synced`.
    - Facendo clic sulla scheda, puoi visualizzare tutte le risorse Kubernetes (Deployment, Service, ecc.) che sono state create.

<img src={argocdguestbook} />

2.  **Attraverso la riga di comando:**
    - Verifica che lo spazio dei nomi `guestbook` sia stato creato:
      ```bash
      kubectl get ns guestbook
      ```
    - Verifica che le risorse dell'applicazione siano effettivamente distribuite in questo spazio dei nomi:
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

### 5. The GitOps cycle

Now, if you modify a manifest in the Git repository, ArgoCD will detect the change and automatically update the application in the cluster. That's the magic of GitOps!

## Pulizia

Per eliminare l'applicazione e tutte le risorse associate, è sufficiente rimuovere la risorsa `Application` da ArgoCD.

1.  **Attraverso l'interfaccia web:**
    - Nell'interfaccia utente di ArgoCD, individua l'applicazione `guestbook`.
    - Clicca sui tre puntini (...) per aprire il menu e seleziona **"Delete"**.
    - Seleziona l'opzione **"Foreground"** per assicurarti che tutte le risorse gestite (pods, servizi, ecc.) vengano eliminate in cascata.
2.  **Attraverso `kubectl`:**
    - Elimina il file `app-guestbook.yaml` che hai creato:
      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD eliminerà ora tutti i componenti dell'applicazione `guestbook`. Una volta completata la sincronizzazione di eliminazione, lo spazio dei nomi `guestbook` sarà vuoto. A questo punto, puoi eliminarlo con il comando seguente:

```bash
kubectl delete namespace guestbook
```

:::info Per saperne di più: gestione dei segreti
Questo tutorial utilizza un repository pubblico senza dati sensibili. Per le tue applicazioni di produzione, è fondamentale non memorizzare mai segreti (password, chiavi API) in chiaro nel tuo repository Git. Soluzioni come **Sealed Secrets** o **HashiCorp Vault** si integrano con ArgoCD per gestire in modo sicuro i tuoi segreti. Un futuro tutorial approfondirà questa metodologia.
:::

## Conclusione

Hai distribuito la tua prima applicazione utilizzando ArgoCD seguendo i principi GitOps. Questa potente metodologia ti permette di gestire i tuoi deployment in modo dichiarativo, affidabile e sicuro. Ti incoraggiamo ad adottarla per tutte le tue applicazioni su Managed Kubernetes.