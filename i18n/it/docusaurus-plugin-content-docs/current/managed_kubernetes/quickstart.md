---
title: Guida introduttiva
---

Benvenuti nella guida introduttiva di **Managed Kubernetes** Cloud Temple.

L'obiettivo di questa sezione è indirizzarvi verso le risorse necessarie per iniziare a utilizzare il vostro cluster.

---

## Prima di iniziare

Per interagire con il tuo cluster, sono indispensabili diversi elementi:

1. **Il file `kubeconfig`** : Questo file, fornito dai team Cloud Temple al momento della consegna del servizio, contiene tutte le informazioni necessarie per connettersi in modo sicuro.
2. **Lo strumento `kubectl`** : Si tratta dell'interfaccia a riga di comando standard per gestire un cluster Kubernetes.
3. **Lo strumento `kubelogin`** (se OIDC è utilizzato) : Se il tuo cluster è configurato per l'autenticazione tramite un fornitore di identità OIDC (come Entra ID/Azure AD), devi installare lo strumento `kubelogin` per gestire il flusso di autenticazione. Segui la [guida all'installazione di kubelogin](https://github.com/int128/kubelogin).

:::info[Strumenti grafici consigliati:
]
Per un'esperienza più visiva e una gestione semplificata delle tue risorse, consigliamo l'uso di **Lens**. È uno strumento potente per Kubernetes che ti permette di esplorare il tuo cluster, gestire le tue applicazioni e visualizzare il loro stato in modo grafico.
Alcuni dei nostri tutorial utilizzeranno Lens per illustrare le operazioni. Puoi scaricarlo qui : [https://k8slens.dev/](https://k8slens.dev/).
:::

---

## Accedere al tuo cluster Kubernetes gestito

Il tuo cluster di produzione è identificato da un codice di 5 lettere (6 lettres en Dev/Test). Questo codice viene utilizzato per costruire gli URL delle diverse interfacce. Nei tutorial, utilizzeremo **"ctodev"**.

Gli URL sono:

- API Kubernetes (utilisée dans kubeconfig):
  - **identifiant**.mk.ms-cloud-temple.com:6443  (donc dans notre exemple: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- URL publics :
  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifiant**.mk.ms-cloud-temple.com

:::info[url sécurisées
]
Gli URL sopra elencati sono accessibili solo da IP pubblici noti, configurati nel firewall della soluzione. Se desideri aggiungere un IP pubblico, è necessario inviare una richiesta di supporto.
:::

- URL interni :
  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

:::info[url internes
]
Gli URL sopra elencati non sono esposti su Internet. Sono accessibili solo sulla rete interna di Kubernetes gestito.
:::

---

## Le tue autorizzazioni

:::warning[Dev/Test
]
Per i cluster Kubernetes gestiti **"Dev/Test"**, l'account di servizio fornito dispone di tutti i permessi sull'intero cluster (ClusterAdmin)
:::

Sui cluster **"Production"**, le tue autorizzazioni sono limitate. Disponi di un diritto **"Viewer Esteso"** sulle risorse del cluster. Tale diritto concede un accesso in sola lettura a risorse chiave, sia a livello di cluster che per il diagnostico:

- Namespaces: consentono agli inquilini di elencare gli spazi dei nomi per strumenti e dashboard.
- Pods, deployments,  replicaset...: consentono agli inquilini di elencare le risorse distribuite sul cluster.
- Nodes: offrono visibilità sulla capacità, i taints e i labels dei nodi per comprendere il comportamento dello scheduler.
- StorageClasses, PVs, PVCs, VolumeAttachments e CSIDrivers: consentono agli inquilini di identificare le classi di storage disponibili e risolvere i problemi di binding tra PVC e PV o gli errori relativi ai driver CSI.
- IngressClasses: informano gli utenti sui controller ingress disponibili per il routing delle applicazioni.
- NetworkPolicies, ResourceQuotas, LimitRanges ed Events: essenziali per diagnosticare restrizioni di rete, fallimenti di scheduling o violazioni dei quote di risorse.

L'account di servizio che ti è stato assegnato è anche diventato **proprietario di un primo *tenant* Capsule**.
Puoi creare Namespaces, che verranno associati al tuo tenant Capsule.
Gli account esterni (OIDC) sono membri dello stesso tenant Capsule, il che consente loro di interagire liberamente all'interno dei **namespaces** associati al tenant. (Vedi la guida "Gestire le autorizzazioni con Capsule")

Alcune azioni non sono consentite:

- elencare/creare tenant Capsule
- creare CRD: se devi distribuire un'applicazione con CRD (ad esempio un helm chart di un operatore), dovrai interagire con il supporto affinché queste CRD vengano importate (tramite estrazione degli yaml dal chart helm). Potrai successivamente distribuire il tuo chart helm con l'opzione --skip-crds. Vedi: [Documentazione Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Guida: Distribuisci la tua prima applicazione</h3>
      </div>
      <div className="card__body">
        <p>
          Segui una guida dettagliata per connetterti, distribuire un'applicazione "Hello World" ed esporla su Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Inizia la guida &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Guida: Comprendere la rete</h3>
      </div>
      <div className="card__body">
        <p>
          Scopri il piano di indirizzamento, gli Ingress Controller e come esporre i tuoi servizi in modo sicuro.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Vedi la guida sulla rete &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Guida: Gestire le autorizzazioni con Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Impara a utilizzare Capsule per creare tenant e delegare le autorizzazioni ai tuoi team.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Scopri Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>