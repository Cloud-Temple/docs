---
title: Utilizzare ArgoCD per i tuoi deploy GitOps
---

import argocdguestbook from '@site/docs/managed_kubernetes/tutorials/images/argocdguestbook.png'

## Obiettivi

Questo tutorial spiega come utilizzare **ArgoCD**, lo strumento di deployment continuo GitOps integrato nel tuo cluster **Managed Kubernetes**. Alla fine di questa guida, saprai:

- Cos'è l'approccio GitOps.
- Come accedere all'interfaccia di ArgoCD.
- Come distribuire un'applicazione utilizzando ArgoCD per sincronizzare un repository Git.

## Il principio del GitOps con ArgoCD

Il **GitOps** è una pratica che consiste nell'utilizzare un repository Git come unica fonte di verità per dichiarare lo stato desiderato della tua infrastruttura e delle tue applicazioni.

**ArgoCD** è lo strumento che implementa questo principio. Monitora costantemente un repository Git e confronta lo stato definito al suo interno (tramite manifest Kubernetes) con lo stato effettivo del tuo cluster. Se rileva una differenza, applica automaticamente le modifiche affinché il cluster corrisponda a quanto dichiarato in Git.

I vantaggi sono numerosi:

- **Distribuzioni affidabili e riproducibili.**
- **Tracciabilità completa** di tutte le modifiche tramite la cronologia Git.
- **Recupero rapido** in caso di incidente, tornando a un commit precedente.
- **Sicurezza migliorata** limitando gli accessi diretti al cluster.

## Accedere all'interfaccia ArgoCD

L'interfaccia web di ArgoCD è esposta su un URL interno del cluster. Per accedervi, è necessario essere connessi alla rete interna del cluster (ad esempio, tramite un bastion o un VPN).

L'URL da utilizzare è la seguente, sostituendo `<votre-identifiant-de-cluster>` :

`http://argocd.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

È possibile ottenere l'indirizzo IP interno dell'Ingress ArgoCD con il comando seguente :

```bash
kubectl get ingress argocd-server -n argocd
```

:::info
La password per l'account `admin` viene fornita dai team Cloud Temple durante la configurazione del cluster.
:::

## Distribuire un'applicazione con ArgoCD

Ora distribuiremo un'applicazione di test utilizzando l'approccio GitOps.

### 1. Il repository Git

ArgoCD richiede un repository Git contenente i manifest Kubernetes dell'applicazione da distribuire. Per questo tutorial, utilizzeremo il repository di esempio di ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Distribuiremo l'applicazione `guestbook` che si trova in questo repository.

### 2. Preparare il Namespace di destinazione

Per consentire la distribuzione dell'applicazione in un namespace gestito da Capsule, dobbiamo prima creare questo namespace e applicargli la label del tenant appropriata.

Eseguire i seguenti comandi :

```bash
# Crea il namespace
kubectl create namespace guestbook

# Applica la label per associarlo al tenant "default" di Capsule (se necessario, poiché il namespace è probabilmente già stato associato al tuo tenant durante la creazione)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Creare l'applicazione in ArgoCD

Una volta pronto il namespace, possiamo dichiarare l'applicazione ad ArgoCD.

1. Crea un file denominato `app-guestbook.yaml` con il contenuto seguente :

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

    Questo manifesto richiede ad ArgoCD di :
    - Creare un'applicazione denominata `guestbook`.
    - Monitorare il repository `argocd-example-apps`.
    - Concentrarsi sulla cartella `guestbook` di questo repository.
    - Distribuire i manifesti trovati nel namespace `guestbook` del cluster locale.
    - Mantenere la sincronizzazione automaticamente (`automated`).

2. Hai due opzioni per creare l'applicazione in ArgoCD :

    **Opzione A : tramite `kubectl` (Approccio GitOps)**

    Applica questo manifesto direttamente al tuo cluster. È il metodo consigliato poiché segue il principio GitOps di gestione dichiarativa.

    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Opzione B : tramite l'interfaccia web di ArgoCD**

    Puoi anche creare l'applicazione direttamente dall'interfaccia grafica :
    - Nell'UI di ArgoCD, fai clic su **"+ NEW APP"**.
    - In alto a destra nella schermata di creazione, fai clic su **"EDIT AS YAML"**.
    - Incolla il contenuto del tuo file `app-guestbook.yaml` nell'editor.
    - Fai clic su **"CREATE"**.

### 4. Verificare la sincronizzazione

Non appena applichi il manifesto, ArgoCD rileva questa nuova risorsa `Application` e inizia il suo lavoro.

1. **Tramite l'interfaccia web :**
    - Accedi all'interfaccia di ArgoCD.
    - Dovresti vedere una nuova scheda per l'applicazione `guestbook`.
    - Dopo qualche istante, il suo stato dovrebbe passare a `Healthy` e `Synced`.
    - Facendo clic sulla scheda, puoi visualizzare tutte le risorse Kubernetes (Deployment, Service, ecc.) che sono state create.

<img src={argocdguestbook} />

1. **Tramite la riga di comando :**
    - Verifica che il namespace `guestbook` sia stato creato :

      ```bash
      kubectl get ns guestbook
      ```

    - Verifica che le risorse dell'applicazione siano effettivamente distribuite in questo namespace :

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

Ora, se si modifica un manifesto nel repository Git, ArgoCD rileverà la modifica e aggiornerà automaticamente l'applicazione nel cluster. È la magia del GitOps!

## Pulizia

Per eliminare l'applicazione e tutte le risorse associate, è sufficiente eliminare la risorsa `Application` di ArgoCD.

1. **Tramite l'interfaccia web :**
    - Nell'UI di ArgoCD, trova l'applicazione `guestbook`.
    - Clicca sui tre punti (...) per aprire il menu e seleziona **"Elimina"**.
    - Seleziona l'opzione **"Foreground"** per assicurarti che tutte le risorse gestite (pod, servizi, ecc.) vengano eliminate in cascata.
2. **Tramite `kubectl` :**
    - Elimina il file `app-guestbook.yaml` che hai creato :

      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD ora eliminerà tutti i componenti dell'applicazione `guestbook`. Una volta completata la sincronizzazione di eliminazione, il namespace `guestbook` sarà vuoto. A questo punto puoi eliminarlo con il comando seguente :

```bash
kubectl delete namespace guestbook
```

:::info[Per approfondire: la gestione dei segreti
]
Questo tutorial utilizza un repository pubblico senza dati sensibili. Per le tue applicazioni in produzione, è fondamentale non memorizzare mai segreti (password, chiavi API) in chiaro nel tuo repository Git. Soluzioni come **Sealed Secrets** o **HashiCorp Vault** si integrano con ArgoCD per gestire i tuoi segreti in modo sicuro. Un futuro tutorial approfondirà questo approccio.
:::

## Conclusione

Hai distribuito la tua prima applicazione con ArgoCD seguendo i principi GitOps. Questo approccio potente ti consente di gestire le tue distribuzioni in modo dichiarativo, affidabile e sicuro. Ti incoraggiamo ad adottarlo per tutte le tue applicazioni su Managed Kubernetes.