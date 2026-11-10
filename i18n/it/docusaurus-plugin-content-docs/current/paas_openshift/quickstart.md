---
title: Guida introduttiva a OpenShift
---
import oshiftMenu_001 from '@site/docs/paas_openshift/images/oshift_menu_001.png'
import oshiftSubMenu_001 from '@site/docs/paas_openshift/images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from '@site/docs/paas_openshift/images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from '@site/docs/paas_openshift/images/oshift_menu_002.png'
import oshiftMenu_003 from '@site/docs/paas_openshift/images/oshift_menu_003.png'
import oshiftOrder_001 from '@site/docs/paas_openshift/images/oshift_order_001.png'

# Guida introduttiva a OpenShift

Questa pagina vi guida attraverso i passaggi iniziali per utilizzare l'offerta **OpenShift** dalla console Cloud Temple. Seguite queste istruzioni per esplorare i menu e le funzionalità disponibili.

## Prerequisiti

Prima di iniziare, assicuratevi dei seguenti punti:

1. **Sottoscrizione attivata**: La vostra organizzazione deve aver sottoscritto l'offerta OpenShift.
2. **Permessi utente**: Il vostro account utente deve disporre dei diritti necessari per accedere e gestire le risorse OpenShift.

## Primo accesso e comando

Al primo accesso all'offerta OpenShift, dopo l'attivazione della sottoscrizione e la configurazione dei permessi, viene visualizzato uno schermo di benvenuto:

<img src={oshiftOrder_001} />

Questo schermo indica che al momento non avete ancora nessun cluster OpenShift SecNumCloud distribuito.

**Per ordinare il vostro primo cluster OpenShift SecNumCloud, vi preghiamo di contattare il supporto Cloud Temple.**

Una volta che il vostro ordine sarà elaborato dal supporto e il vostro cluster sarà distribuito, potrete accedere al menu OpenShift.

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

### 2. Dettaglio di un cluster

Quando fate clic sul **nome di un cluster** nell'elenco, viene visualizzata una pagina dettagliata con le informazioni complete del cluster:

**Informazioni di connettività:**

- **URL di accesso**: Interfaccia web del cluster
- **URL API**: Punto di accesso API per le operazioni CLI

**Informazioni generali:**

- **Stato**: Stato attuale del cluster
- **Ultimo aggiornamento**: Data dell'ultima modifica
- **Versione**: Versione di OpenShift distribuita

**Nodi del cluster:**

Una tabella descrive ciascun nodo con le seguenti informazioni:

- **Nome del nodo**
- **Tipo**
- **AZ** (Availability Zone)
- **Stato**
- **CPU**
- **RAM**

<img src={oshiftClusterDetail_001} />

## Accesso all'interfaccia di amministrazione OpenShift

Fate clic sull'**URL di accesso** del cluster che desiderate gestire. Accederete all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, potrete gestire il vostro cluster:

<img src={oshiftMenu_003} />

### Risorse del vostro ambiente

Ecco le informazioni di connessione e di configurazione specifiche del vostro ambiente OpenShift.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicuratevi che il vostro tenant sia registrato nell'elenco bianco nella console (consultate la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- **URL Console Tenant** :
  [https://**vostro-id-tenant**.shiva.cloud-temple.com/](https://**vostro-id-tenant**.shiva.cloud-temple.com/)

- **OpenShift UI** :
  [https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/](https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/)

- **API esterna** :
  [https://api-ocp01-**vostro-id**.paas.cloud-temple.com](https://api-ocp01-**vostro-id**.paas.cloud-temple.com)

- **GitOps (ARGOCD)** :
  [https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications)

#### Connessione al cluster tramite CLI

Per connettervi tramite riga di comando (CLI), utilizzate il comando seguente:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registro

Per accedere al registro, effettuate il login utilizzando i seguenti comandi:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com --web
docker login -u {vostro-utente} -p $(oc whoami -t) registry-ocp01-{vostro-id}.paas.cloud-temple.com
```

Successivamente, verificate la costruzione e il caricamento di un'immagine Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configurazione dei router e dei load balancer

La piattaforma offre opzioni flessibili per il **routing dei flussi** e l’**equilibrio del carico**:

- Per impostazione predefinita, vengono utilizzati load balancer privati per le route e gli ingresses.
- Domini:
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`

Assicuratevi che le vostre route o ingresses siano configurati con le etichette o le classi di ingress appropriate per garantire un routing corretto.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnessione IaaS

Le configurazioni di rete svolgono un ruolo cruciale per proteggere le comunicazioni con OpenShift.

- **Rete di interconnessione**: 100.67.0.0/28
- **VIP del load balancer privato**: 100.67.0.3

Verificate che il vostro firewall disponga di un'interfaccia dedicata e autorizzi il traffico tra le reti specificate.
