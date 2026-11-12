---
title: Guida di avvio
---
Benvenuti nella guida di avvio di **Managed Kubernetes** Cloud Temple.

L'obiettivo di questa sezione è orientarvi verso le risorse necessarie per prendere in mano il vostro cluster.

---

## Prima di iniziare

Per interagire con il vostro cluster, diversi elementi sono indispensabili:

1. **Il file `kubeconfig`**: Questo file, che vi viene fornito dai team Cloud Temple alla consegna del servizio, contiene tutte le informazioni per connettervi in modo sicuro.
2. **Lo strumento `kubectl`**: Si tratta dell'interfaccia a riga di comando standard per gestire un cluster Kubernetes.
3. **Lo strumento `kubelogin`** (se viene utilizzato OIDC): Se il vostro cluster è configurato per autenticarsi tramite un provider di identità OIDC (come Entra ID/Azure AD), dovete installare lo strumento `kubelogin` per gestire il flusso di autenticazione. Seguite la [guida di installazione di kubelogin](https://github.com/int128/kubelogin).

> ℹ️[Strumenti grafici consigliati:]
> Per un'esperienza più visiva e una gestione semplificata delle vostre risorse, vi consigliamo l'utilizzo di **Lens**. È uno strumento potente per Kubernetes che vi consente di esplorare il vostro cluster, gestire le vostre applicazioni e visualizzarne lo stato in modo grafico.
> Alcuni dei nostri tutorial utilizzeranno Lens per illustrare le operazioni. Potete scaricarlo qui: [https://k8slens.dev/](https://k8slens.dev/).

---

## Accedere al vostro cluster Kubernetes Managé

Il vostro cluster di produzione è identificato da un codice di 5 lettere (6 lettere in Dev/Test). Questo codice viene utilizzato per costruire gli URL delle diverse interfacce. Nei tutorial, utilizzeremo **"ctodev"**.

Gli URL sono:

- API kubernetes (utilizzata in kubeconfig):

  - **identificativo**.mk.ms-cloud-temple.com:6443  (quindi nel nostro esempio: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )
- URL pubbliche:

  - k10.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identificativo**.mk.ms-cloud-temple.com

>ℹ️[URL sicure]
>Le URL sopra non sono accessibili che da IP pubbliche note, configurate nel firewall della soluzione. Se desiderate aggiungere un'IP pubblica, è necessario fare una richiesta di supporto.
>

>ℹ️[URL interne]
>Le URL qui sotto non sono esposte su Internet. Sono accessibili solo sulla rete interna Kubernetes Managé.
>  - ceph.internal.**identificativo**.mk.ms-cloud-temple.com
>  - argocd.internal.**identificativo**.mk.ms-cloud-temple.com
>  - hubble.internal.**identificativo**.mk.ms-cloud-temple.com

---

## I vostri permessi

>⚠[Dev/Test e Kubernetes Core]
>Per i cluster Kubernetes Managé **"Dev/Test"** e i cluster Core, l'account di servizio che vi è stato fornito dispone di tutti i permessi sull'intero cluster (ClusterAdmin)

Sui cluster **"Production"**, i vostri permessi sono limitati. Disponete di un diritto **"Viewer Esteso"** sulle risorse del cluster. Questo diritto concede un accesso in sola lettura a risorse chiave, sia a livello di cluster che per la diagnostica:

- Namespaces: autorizzano i tenant a elencare gli spazi di nomi per gli strumenti e le dashboard.
- Pods, deployments, replicaset...: autorizzano i tenant a elencare le risorse deployate sul cluster.
- Nodes: offrono una visibilità sulla capacità, i taint e i label dei nodi per comprendere il comportamento dello scheduler.
- StorageClasses, PVs, PVCs, VolumeAttachments e CSIDrivers: permettono ai tenant di identificare le classi di storage disponibili e di risolvere i problemi di binding tra PVC e PV o gli errori legati ai driver CSI.
- IngressClasses: informano gli utenti sui controller di ingress disponibili per il routing delle applicazioni.
- NetworkPolicies, ResourceQuotas, LimitRanges e Events: essenziali per diagnosticare le restrizioni di rete, i fallimenti di scheduling o le violazioni dei quota di risorse.

L'account di servizio che vi è stato affidato è stato anche reso **proprietario di un primo *tenant* Capsule**.
Potete creare dei Namespaces, che saranno associati al vostro tenant Capsule.
Gli account esterni (OIDC) sono membri dello stesso tenant Capsule, il che consente loro di interagire liberamente all'interno dei **namespaces** associati al tenant. (Vedere il tutorial "Gestire i permessi con Capsule")

Alcune azioni non sono consentite:

- elencare / creare tenant Capsule
- creare CRD: Se dovete deployare un'applicazione con CRD (ad esempio un helm chart di un operatore), dovrete interagire con il supporto affinché questi CRD vengano importati (tramite estrazione dei yaml dal chart helm). Potrete poi deployare il vostro chart helm con l'opzione --skip-crds. Vedere: [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Deployare la vostra prima applicazione</h3>
      </div>
      <div className="card__body">
        <p>Seguite una guida dettagliata per connettervi, deployare un'applicazione "Hello World" ed esporla su Internet.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Iniziare il tutorial →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Comprendere la rete</h3>
      </div>
      <div className="card__body">
        <p>Scoprite il piano di indirizzamento, gli Ingress Controller e come esporre i vostri servizi in modo sicuro.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Vedere il tutorial di rete →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Gestire i permessi con Capsule</h3>
      </div>
      <div className="card__body">
        <p>Imparate a utilizzare Capsule per creare dei tenant e delegare dei permessi ai vostri team.</p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Scoprire Capsule →</a>
      </div>
    </div>
  </div>
</div>
