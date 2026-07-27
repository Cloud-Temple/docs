---
title: Guida introduttiva
---
Benvenuti nella guida introduttiva di **Managed Kubernetes** Cloud Temple.

L'obiettivo di questa sezione è indirizzarvi verso le risorse necessarie per iniziare a gestire il vostro cluster.

---

## Prima di iniziare

Per interagire con il cluster, diversi elementi sono indispensabili :

1. **Il file `kubeconfig`** : Questo file, fornito dal team Cloud Temple alla consegna del servizio, contiene tutte le informazioni per connettersi in modo sicuro.
2. **Lo strumento `kubectl`** : Si tratta dell'interfaccia a riga di comando standard per gestire un cluster Kubernetes.
3. **Lo strumento `kubelogin`** (si OIDC est utilisé) : Se il cluster è configurato per l'autenticazione tramite un provider di identità OIDC (comme Entra ID/Azure AD), è necessario installare lo strumento `kubelogin` per gestire il flusso di autenticazione. Segui la [guide d&#39;installation de kubelogin](https://github.com/int128/kubelogin).

> ℹ️[Outils graphiques recommandés:]
> Per un'esperienza più visiva e una gestione semplificata delle risorse, consigliamo l'utilizzo di **Lens**. Si tratta di un potente strumento per Kubernetes che consente di esplorare il cluster, gestire le applicazioni e visualizzarne lo stato in modo grafico.
> Alcuni dei nostri tutorial utilizzeranno Lens per illustrare le operazioni. Puoi scaricarlo qui : [https://k8slens.dev/](https://k8slens.dev/).

---

## Accedere al tuo cluster Kubernetes Gestito

Il tuo cluster di produzione è identificato da un codice di 5 lettere (6 lettere in Dev/Test). Questo codice viene utilizzato per costruire gli URL delle diverse interfacce. Nei tutorial, utilizzeremo **"ctodev"**.

Gli URL sono:

- API Kubernetes (utilizzata in kubeconfig):

  - **identifiant**.mk.ms-cloud-temple.com:6443  (donc dans notre exemple: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )
- URL pubbliche:

  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifiant**.mk.ms-cloud-temple.com

>ℹ️[url sécurisées]
>Gli URL sopra indicati sono accessibili solo da indirizzi IP pubblici noti, configurati nel firewall della soluzione. Se desideri aggiungere un indirizzo IP pubblico, è necessario presentare una richiesta di supporto.
>

>ℹ️[url internes]
>Gli URL qui sotto non sono esposti su Internet. Sono accessibili solo sulla rete interna Kubernetes Gestito.
>  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
>  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
>  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

---

## Le tue autorizzazioni

>⚠[Dev/Test et Kubernetes Core]
>Per i cluster Kubernetes Gestiti **"Dev/Test"** e i cluster Core, l'account di servizio fornito dispone di tutte le autorizzazioni sull'intero cluster (ClusterAdmin)

Sui cluster **"Production"**, le tue autorizzazioni sono limitate. Disponete di un diritto **"Viewer Esteso"** sulle risorse del cluster. Questo diritto concede un accesso in sola lettura a risorse chiave, sia a livello di cluster che per la diagnostica:

- Namespaces : consentono ai tenant di elencare gli spazi dei nomi per gli strumenti e le dashboard.
- Pods, deployments,  replicaset... : consentono ai tenant di elencare le risorse distribuite sul cluster.
- Nodes : offrono visibilità sulla capacità, i taint e i label dei nodi per comprendere il comportamento dello scheduler.
- StorageClasses, PVs, PVCs, VolumeAttachments e CSIDrivers : permettono ai tenant di identificare le classi di storage disponibili e di risolvere i problemi di binding tra PVC e PV o gli errori legati ai driver CSI.
- IngressClasses : informano gli utenti sui controller di ingress disponibili per il routing delle applicazioni.
- NetworkPolicies, ResourceQuotas, LimitRanges e Events : essenziali per diagnosticare le restrizioni di rete, i fallimenti di scheduling o le violazioni dei quote di risorse.

L'account di servizio assegnato è stato anche reso **proprietario di un primo *tenant* Capsule**.
Puoi creare Namespaces, che saranno associati al tuo tenant Capsule.
Gli account esterni (OIDC) sono membri dello stesso tenant Capsule, il che consente loro di interagire liberamente all'interno dei **namespaces** associati al tenant. (Voir le tutoriel "Gérer les permissions avec Capsule")

Alcune azioni non sono consentite:

- elencare / creare tenant Capsule
- creare CRD: Se devi distribuire un'applicazione con CRD (helm chart di un operatore per esempio), dovrai interagire con il supporto affinché queste CRD vengano importate (via estrazione dei yaml dal chart helm). Potrai quindi distribuire il tuo chart helm con l'opzione --skip-crds. Vedi : [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial : Distribuire la tua prima applicazione</h3>
      </div>
      <div className="card__body">
        <p>
          Segui una guida dettagliata per connetterti, distribuire un'applicazione "Hello World" ed esporla su Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Inizia il tutorial →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial : Comprendere la rete</h3>
      </div>
      <div className="card__body">
        <p>
          Scopri il piano di indirizzamento, gli Ingress Controller e come esporre i tuoi servizi in modo sicuro.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Vedi il tutorial sulla rete →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial : Gestire le autorizzazioni con Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Impara a utilizzare Capsule per creare tenant e delegare le autorizzazioni ai tuoi team.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Scopri Capsule →</a>
      </div>
    </div>
  </div>
</div>