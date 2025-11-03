---
title: Guida di avvio
---

Benvenuti nella guida di avvio di **Managed Kubernetes** Cloud Temple.

L'obiettivo di questa sezione è guidarti verso le risorse necessarie per iniziare a utilizzare il tuo cluster.

## Prima di iniziare

Per interagire con il tuo cluster, sono necessari diversi elementi:

1.  **Il file `kubeconfig`**: Questo file, fornito dalle squadre Cloud Temple al momento della consegna del servizio, contiene tutte le informazioni necessarie per connetterti in modo sicuro.
2.  **Lo strumento `kubectl`**: Si tratta dell'interfaccia da riga di comando standard per gestire un cluster Kubernetes.
3.  **Lo strumento `kubelogin`** (se viene utilizzato OIDC): Se il tuo cluster è configurato per l'autenticazione tramite un provider di identità OIDC (ad esempio Entra ID/Azure AD), è necessario installare lo strumento `kubelogin` per gestire il flusso di autenticazione. Segui la [guida di installazione di kubelogin](https://github.com/int128/kubelogin).

Strumenti grafici consigliati: Per un'esperienza più visiva e una gestione semplificata delle tue risorse, ti consigliamo l'uso di **Lens**. Si tratta di uno strumento potente per Kubernetes che ti permette di esplorare il tuo cluster, gestire le tue applicazioni e visualizzare il loro stato in modo grafico.  
Alcuni dei nostri tutorial utilizzeranno Lens per illustrare le operazioni. Puoi scaricarlo qui: [https://k8slens.dev/](https://k8slens.dev/)

## Accedere al tuo cluster Kubernetes Gestito

Il tuo cluster di produzione è identificato da un codice di 5 lettere (6 lettere in Dev/Test). Questo codice viene utilizzato per costruire gli URL delle diverse interfacce. Nei tutorial utilizzeremo **"ctodev"**.

Gli URL sono:

- API Kubernetes (utilizzata nel kubeconfig):
  - **identificativo**.mk.ms-cloud-temple.com:6443 (quindi nel nostro esempio: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443))

- URL pubblici:
  - k10.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identificativo**.mk.ms-cloud-temple.com
  - kubecost.external-secured.**identificativo**.mk.ms-cloud-temple.com

*Gli URL sopra indicati sono accessibili solo da indirizzi IP pubblici noti, configurati nel firewall della soluzione. Se desideri aggiungere un indirizzo IP pubblico, è necessario inviare una richiesta di supporto.*

- URL interni:
  - ceph.internal.**identificativo**.mk.ms-cloud-temple.com
  - argocd.internal.**identificativo**.mk.ms-cloud-temple.com
  - hubble.internal.**identificativo**.mk.ms-cloud-temple.com

*Gli URL sopra indicati non sono esposti su Internet. Sono accessibili solo dalla rete interna del Kubernetes Gestito.*

## Le tue tue

Per i cluster Kubernetes gestiti **"Dev/Test"**, il conto del servizio fornito dispone di tutte le autorizzazioni su tutto il cluster (ClusterAdmin).

Nei cluster **"Produzione"**, le tue autorizzazioni sono limitate. Disponi di un diritto **"Viewer Esteso"** sulle risorse del cluster. Questo diritto fornisce un accesso in sola lettura a risorse chiave, sia a livello di cluster che per il diagnostica:

- **Namespaces**: consentono ai tenant di elencare gli spazi dei nomi per strumenti e dashboard.
- **Pod, deployments, replicaset...**: consentono ai tenant di elencare le risorse distribuite sul cluster.
- **Nodes**: forniscono visibilità sulla capacità, sui taints e sui label dei nodi per comprendere il comportamento del pianificatore.
- **StorageClasses, PVs, PVCs, VolumeAttachments e CSIDrivers**: permettono ai tenant di identificare le classi di archiviazione disponibili e risolvere problemi di collegamento tra PVC e PV o errori legati ai driver CSI.
- **IngressClasses**: informano gli utenti sui controller di ingress disponibili per il routing delle applicazioni.
- **NetworkPolicies, ResourceQuotas, LimitRanges ed Events**: essenziali per diagnosticare restrizioni di rete, fallimenti di pianificazione o violazioni dei limiti di risorse.

Il conto del servizio a te assegnato è inoltre stato reso **proprietario di un primo tenant Capsule**. Puoi creare Namespace, che saranno associati al tuo tenant Capsule. I conti esterni (OIDC) sono membri dello stesso tenant Capsule, il che permette loro di interagire liberamente all'interno dei **Namespace** associati al tenant. (Vedi il tutorial "Gestire le autorizzazioni con Capsule")

Alcune azioni non sono consentite:

  - elencare / creare tenant Capsule
  - creare CRD: se devi distribuire un'applicazione con CRD (ad esempio un chart Helm di un operatore), dovrai interagire con il supporto affinché questi CRD siano importati (tramite estrazione dei file YAML dal chart Helm). Potrai quindi distribuire il tuo chart Helm con l'opzione --skip-crds. Vedi: [Documentazione Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---
 
<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Distribuire la tua prima applicazione</h3>
      </div>
      <div className="card__body">
        <p>
          Segui una guida dettagliata per connetterti, distribuire un'applicazione "Hello World" e renderla accessibile su Internet.
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
        <h3>Tutorial: Comprendere la rete</h3>
      </div>
      <div className="card__body">
        <p>
          Scopri l'indirizzamento, i controller di ingress e come esporre i tuoi servizi in modo sicuro.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Visualizza il tutorial di rete &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Gestire le autorizzazioni con Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Impara a utilizzare Capsule per creare tenant e delegare autorizzazioni ai tuoi team.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Scopri Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>