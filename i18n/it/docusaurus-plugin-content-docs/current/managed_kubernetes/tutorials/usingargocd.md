---
title: Utilizzare ArgoCD per i deployment GitOps
---

import argocdguestbook from '@site/docs/managed_kubernetes/tutorials/images/argocdguestbook.png'

## Obiettivi

Questo tutorial spiega come utilizzare **ArgoCD**, lo strumento di deployment continuo GitOps integrato nel vostro cluster **Managed Kubernetes**. Al termine di questa guida, saprete:

- Cos'è l'approccio GitOps.
- Come accedere all'interfaccia di ArgoCD.
- Come distribuire un'applicazione usando ArgoCD per sincronizzare un repository Git.

## Il principio GitOps con ArgoCD

**GitOps** è una pratica che consiste nell'utilizzare un repository Git come unica fonte di verità per dichiarare lo stato desiderato della propria infrastruttura e delle proprie applicazioni.

**ArgoCD** è lo strumento che implementa questo principio. Monitora continuamente un repository Git e confronta lo stato ivi definito (tramite manifest Kubernetes) con lo stato reale del vostro cluster. Se rileva una differenza, applica automaticamente le modifiche affinché il cluster corrisponda a quanto dichiarato in Git.

I vantaggi sono numerosi:

- **Deployment affidabili e riproducibili.**
- **Tracciabilità completa** di tutte le modifiche tramite la cronologia Git.
- **Ripristino rapido** dopo un incidente tornando a un commit precedente.
- **Sicurezza migliorata** limitando gli accessi diretti al cluster.

## Accedere all'interfaccia ArgoCD

L'interfaccia web di ArgoCD è esposta su un URL interno del vostro cluster. Per accedervi, dovete essere connessi alla rete interna del cluster (ad esempio, tramite un bastion o una VPN).

L'URL da utilizzare è il seguente, sostituendo `<vostro-identificatore-di-cluster>`:

`http://argocd.internal.<vostro-identificatore-di-cluster>.mk.ms-cloud-temple.com`

Potete ottenere l'indirizzo IP interno dell'Ingress di ArgoCD con il seguente comando:

```bash
kubectl get ingress argocd-server -n argocd
```

:::info
La password per l'account `admin` vi viene fornita dai team Cloud Temple al momento della consegna del vostro cluster.
:::

## Distribuire un'applicazione con ArgoCD

Distribuiremo ora un'applicazione di test usando l'approccio GitOps.

### 1. Il repository Git

ArgoCD ha bisogno di un repository Git contenente i manifest Kubernetes dell'applicazione da distribuire. Per questo tutorial, utilizzeremo il repository di esempi di ArgoCD: `https://github.com/argoproj/argocd-example-apps`. Distribuiremo l'applicazione `guestbook` che si trova in questo repository.

### 2. Preparare il namespace di destinazione

Affinché l'applicazione possa essere distribuita in un namespace gestito da Capsule, dobbiamo prima creare questo namespace e applicarvi l'etichetta di tenant appropriata.

Eseguite i seguenti comandi:

```bash
# Crea il namespace
kubectl create namespace guestbook

# Applica l'etichetta per associarlo al tenant "default" di Capsule (se necessario, poiché il namespace è probabilmente già stato associato al vostro tenant alla sua creazione)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Creare l'applicazione in ArgoCD

Ora che il namespace è pronto, possiamo dichiarare l'applicazione ad ArgoCD.

1. Create un file chiamato `app-guestbook.yaml` con il seguente contenuto:

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

    Questo manifest chiede ad ArgoCD di:
    - Creare un'applicazione chiamata `guestbook`.
    - Monitorare il repository `argocd-example-apps`.
    - Concentrarsi sulla cartella `guestbook` di questo repository.
    - Distribuire i manifest trovati nel namespace `guestbook` del cluster locale.
    - Mantenere la sincronizzazione automaticamente (`automated`).

2. Avete due opzioni per creare l'applicazione in ArgoCD:

    **Opzione A: Tramite `kubectl` (Approccio GitOps)**

    Applicate questo manifest direttamente al vostro cluster. Questo è il metodo raccomandato in quanto segue il principio GitOps di gestione dichiarativa.

    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Opzione B: Tramite l'interfaccia web di ArgoCD**

    Potete anche creare l'applicazione direttamente dall'interfaccia grafica:
    - Nell'UI di ArgoCD, fate clic su **"+ NEW APP"**.
    - In alto a destra nella schermata di creazione, fate clic su **"EDIT AS YAML"**.
    - Incollate il contenuto del file `app-guestbook.yaml` nell'editor.
    - Fate clic su **"CREATE"**.

### 4. Verificare la sincronizzazione

Non appena applicate il manifest, ArgoCD rileva questa nuova risorsa `Application` e inizia il suo lavoro.

1. **Tramite l'interfaccia web:**
    - Collegandovi all'interfaccia di ArgoCD.
    - Dovreste vedere una nuova scheda per l'applicazione `guestbook`.
    - Dopo alcuni istanti, il suo stato dovrebbe passare a `Healthy` e `Synced`.
    - Facendo clic sulla scheda, potete visualizzare tutte le risorse Kubernetes (Deployment, Service, ecc.) che sono state create.

<img src={argocdguestbook} />

1. **Tramite la riga di comando:**
    - Verificate che il namespace `guestbook` sia stato creato:

      ```bash
      kubectl get ns guestbook
      ```

    - Verificate che le risorse dell'applicazione siano correttamente distribuite in quel namespace:

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

Ora, se modificate un manifest nel repository Git, ArgoCD rileverà la modifica e aggiornerà automaticamente l'applicazione nel cluster. Questa è la magia di GitOps!

## Pulizia

Per eliminare l'applicazione e tutte le risorse associate, potete semplicemente eliminare la risorsa `Application` di ArgoCD.

1. **Tramite l'interfaccia web:**
    - Nell'UI di ArgoCD, trovate l'applicazione `guestbook`.
    - Fate clic sui tre punti (...) per aprire il menu e selezionate **"Delete"**.
    - Selezionate l'opzione **"Foreground"** per assicurarvi che tutte le risorse gestite (pod, servizi, ecc.) vengano anch'esse eliminate a cascata.
2. **Tramite `kubectl`:**
    - Eliminate il file `app-guestbook.yaml` che avete creato:

      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD eliminerà ora tutti i componenti dell'applicazione `guestbook`. Una volta completata la sincronizzazione dell'eliminazione, il namespace `guestbook` sarà vuoto. Potrete quindi eliminarlo con il seguente comando:

```bash
kubectl delete namespace guestbook
```

:::info Andare oltre: gestione dei secret
Questo tutorial usa un repository pubblico senza dati sensibili. Per le vostre applicazioni in produzione, è fondamentale non archiviare mai i secret (password, chiavi API) in chiaro nel vostro repository Git. Soluzioni come **Sealed Secrets** o **HashiCorp Vault** si integrano con ArgoCD per gestire i vostri secret in modo sicuro. Un futuro tutorial illustrerà in dettaglio questo approccio.
:::

## Conclusione

Avete distribuito la vostra prima applicazione con ArgoCD seguendo i principi GitOps. Questo potente approccio vi consente di gestire i vostri deployment in modo dichiarativo, affidabile e sicuro. Vi incoraggiamo ad adottarlo per tutte le vostre applicazioni su Managed Kubernetes.
