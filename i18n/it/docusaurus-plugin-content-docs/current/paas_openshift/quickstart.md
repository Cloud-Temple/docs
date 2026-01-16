---
title: Guida introduttiva
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'
import oshiftOrder_001 from './images/oshift_order_001.png'

# Guida rapida per l'offerta OpenShift

Questa pagina ti guida attraverso i passaggi iniziali per utilizzare l'offerta **OpenShift** dalla console Cloud Temple. Segui queste istruzioni per esplorare i menu e le funzionalità disponibili.

## Prerequisiti

Prima di iniziare, assicurati dei seguenti punti:

1. **Sottoscrizione attivata**: La tua organizzazione deve aver sottoscritto l'offerta OpenShift.
2. **Permessi utente**: Il tuo account utente deve disporre dei diritti necessari per accedere e gestire le risorse OpenShift.

## Primo accesso e comando

Al primo accesso all'offerta OpenShift, dopo l'attivazione della sottoscrizione e la configurazione dei permessi, viene visualizzato uno schermo di benvenuto:

<img src={oshiftOrder_001} />

Questo schermo indica che al momento non hai ancora nessun cluster OpenShift SecNumCloud distribuito.

**Per ordinare il tuo primo cluster OpenShift SecNumCloud, ti preghiamo di contattare il supporto Cloud Temple.**

Una volta che il tuo ordine sarà elaborato dal supporto e il tuo cluster sarà distribuito, potrai accedere al menu OpenShift.

## Accesso all'interfaccia OpenShift

Dopo aver distribuito il vostro primo cluster, un nuovo menu denominato **OpenShift** appare nella console Cloud Temple. Questo menu contiene un sottomenu principale: **Clusters**.

<img src={oshiftMenu_001} />

### 1. Elenco dei cluster

Il sottomenu **Clusters** presenta una tabella con tutti i cluster OpenShift disponibili, distribuiti all'interno del vostro tenant. La tabella include le informazioni principali per ciascun cluster:

- **Nome del cluster**
- **URL di accesso**
- **URL API**
- **Versione**
- **Stato**
- **Ultimo aggiornamento**

<img src={oshiftSubMenu_001} />

💡 **Per accedere ai dettagli completi di un cluster, fate clic sul suo nome nella tabella.**

### 2. Cluster details

When you click on a **cluster name** in the list, a detailed page appears with complete cluster information:

**Connectivity information:**
- **Access URL**: Web interface of the cluster
- **API URL**: API endpoint for CLI operations

**General information:**
- **Status**: Current state of the cluster
- **Last updated**: Date of the last modification
- **Version**: OpenShift version deployed

**Cluster nodes:**

A table lists each node with the following information:
- **Node name**
- **Type**
- **AZ** (Availability Zone)
- **Status**
- **CPU**
- **RAM**

<img src={oshiftClusterDetail_001} />

## Accesso all'interfaccia di amministrazione OpenShift

Fai clic sull'**URL di accesso** del cluster che desideri gestire. Accederai all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, potrai gestire il tuo cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicurati che il tuo tenant sia registrato nell'elenco bianco nella console (consulta la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Console Tenant__ :
  [https://__il-tuo-id-tenant__.shiva.cloud-temple.com/](https://**il-tuo-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-__il-tuo-id__.paas.cloud-temple.com/](https://ui-ocp01-**il-tuo-id**.paas.cloud-temple.com/)

- __API esterna__ :
  [https://api-ocp01-__il-tuo-id__.paas.cloud-temple.com](https://api-ocp01-**il-tuo-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__il-tuo-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**il-tuo-id**.paas.cloud-temple.com/applications)

#### Connessione al cluster tramite CLI

Per connetterti tramite riga di comando (CLI), utilizza il comando seguente:

```bash
oc login https://api-ocp01-{tuo-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registro

Per accedere al registro, effettua il login utilizzando i seguenti comandi:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com --web
docker login -u {your-username} -p $(oc whoami -t) registry-ocp01-{your-id}.paas.cloud-temple.com
```

Successivamente, verifica la costruzione e il caricamento di un'immagine Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configurazione dei router e dei load balancer

La piattaforma offre opzioni flessibili per il __routing dei flussi__ e l’__equilibrio del carico__:

- Per impostazione predefinita, vengono utilizzati load balancer privati per le route e gli ingresses.
- Domini:
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`

Assicurati che le tue route o ingresses siano configurati con le etichette o le classi di ingress appropriate per garantire un routing corretto.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS Interconnection

Network configurations play a crucial role in securing communications with OpenShift.

- __Interconnection network__: 100.67.0.0/28
- __Private load balancer VIP__: 100.67.0.3

Ensure your firewall has a dedicated interface and allows traffic between the specified networks.