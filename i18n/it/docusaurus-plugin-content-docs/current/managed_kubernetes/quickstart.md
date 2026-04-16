---
title: Guida Introduttiva
---

Benvenuti nella guida introduttiva di **Managed Kubernetes** di Cloud Temple.

L'obiettivo di questa sezione è indirizzarvi verso le risorse necessarie per prendere in mano il vostro cluster.

---

## Prima di Iniziare

Per interagire con il vostro cluster, sono indispensabili diversi elementi:

1. **Il file `kubeconfig`**: Questo file, che vi viene fornito dai team di Cloud Temple alla consegna del servizio, contiene tutte le informazioni per connettersi in modo sicuro.
2. **Lo strumento `kubectl`**: È l'interfaccia a riga di comando standard per gestire un cluster Kubernetes.
3. **Lo strumento `kubelogin`** (se viene utilizzato OIDC): Se il vostro cluster è configurato per autenticarsi tramite un provider di identità OIDC (come Entra ID/Azure AD), dovete installare lo strumento `kubelogin` per gestire il flusso di autenticazione. Seguite la [guida all'installazione di kubelogin](https://github.com/int128/kubelogin).

:::info[Strumenti grafici consigliati:]
Per un'esperienza più visiva e una gestione semplificata delle vostre risorse, vi consigliamo l'utilizzo di **Lens**. È uno strumento potente per Kubernetes che vi permette di esplorare il vostro cluster, gestire le vostre applicazioni e visualizzarne lo stato in modo grafico.
Alcuni dei nostri tutorial utilizzeranno Lens per illustrare le operazioni. Potete scaricarlo qui: [https://k8slens.dev/](https://k8slens.dev/).
:::

---

## Accedere al Vostro Cluster Kubernetes Gestito

Il vostro cluster di produzione è identificato da un codice a 5 lettere (6 lettere in Dev/Test). Questo codice viene utilizzato per costruire gli URL delle varie interfacce. Nei tutorial, utilizzeremo **"ctodev"**.

Gli URL sono:

- API Kubernetes (utilizzata nel kubeconfig):
  - **identificatore**.mk.ms-cloud-temple.com:6443  (quindi nel nostro esempio: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- URL pubblici:
  - k10.external-secured.**identificatore**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identificatore**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identificatore**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identificatore**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identificatore**.mk.ms-cloud-temple.com

:::info[URL sicuri]
Gli URL sopra indicati sono accessibili solo da IP pubblici noti, configurati nel firewall della soluzione. Se desiderate aggiungere un IP pubblico, è necessario inviare una richiesta di supporto.
:::

- URL interni:
  - ceph.internal.**identificatore**.mk.ms-cloud-temple.com
  - argocd.internal.**identificatore**.mk.ms-cloud-temple.com
  - hubble.internal.**identificatore**.mk.ms-cloud-temple.com

:::info[URL interni]
Gli URL sopra indicati non sono esposti su Internet. Sono accessibili solo sulla rete interna di Managed Kubernetes.
:::

---

## Le Vostre Autorizzazioni

:::warning[Dev/Test]
Per i cluster Managed Kubernetes **"Dev/Test"**, l'account di servizio che vi è stato fornito dispone di tutte le autorizzazioni sull'intero cluster (ClusterAdmin)
:::

Sui cluster di **"Produzione"**, le vostre autorizzazioni sono limitate. Disponete di un diritto di **"Viewer Esteso"** sulle risorse del cluster. Questo diritto concede un accesso in sola lettura alle risorse chiave, sia a livello di cluster che per la diagnostica:

- Namespaces: consentono ai tenant di elencare gli spazi dei nomi per gli strumenti e i dashboard.
- Pod, deployment, replicaset...: consentono ai tenant di elencare le risorse distribuite sul cluster.
- Nodes: offrono visibilità sulla capacità, i taint e le label dei nodi per comprendere il comportamento dello scheduler.
- StorageClass, PV, PVC, VolumeAttachment e CSIDriver: consentono ai tenant di identificare le storage class disponibili e di risolvere i problemi di associazione tra PVC e PV o gli errori relativi ai driver CSI.
- IngressClass: informano gli utenti sui controller di ingress disponibili per il routing delle applicazioni.
- NetworkPolicy, ResourceQuota, LimitRange ed Event: essenziali per diagnosticare le restrizioni di rete, i fallimenti di scheduling o le violazioni delle quote di risorse.

L'account di servizio che vi è stato affidato è stato anche reso **proprietario di un primo *tenant* Capsule**.
Potete creare Namespace, che saranno associati al vostro tenant Capsule.
Gli account esterni (OIDC) sono membri dello stesso tenant Capsule, il che consente loro di interagire liberamente all'interno dei **namespace** associati al tenant. (Vedere il tutorial "Gestire le autorizzazioni con Capsule")

Alcune azioni non sono consentite:

- elencare / creare tenant Capsule
- creare CRD: Se dovete distribuire un'applicazione con CRD (ad esempio un chart Helm di un operatore), dovrete interagire con il supporto affinché queste CRD vengano importate (tramite estrazione dei yaml dal chart Helm). Potrete quindi distribuire il vostro chart Helm con l'opzione --skip-crds. Vedere: [Documentazione di Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Distribuire la Vostra Prima Applicazione</h3>
      </div>
      <div className="card__body">
        <p>
          Seguite una guida dettagliata per connettervi, distribuire un'applicazione "Hello World" ed esporla su Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Inizia il tutorial &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Comprendere la Rete</h3>
      </div>
      <div className="card__body">
        <p>
          Scoprite il piano di indirizzamento, gli Ingress Controller e come esporre i vostri servizi in modo sicuro.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Vedi il tutorial di rete &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Gestire le Autorizzazioni con Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Imparate a utilizzare Capsule per creare tenant e delegare autorizzazioni ai vostri team.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Scopri Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>
