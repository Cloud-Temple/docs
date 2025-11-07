---
title: Guida introduttiva
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

# QuickStart per l'offerta OpenShift

Questa pagina vi guida attraverso i passi iniziali per utilizzare l'offerta **OpenShift** dalla console Cloud Temple. Seguite queste istruzioni per scoprire i menu e le funzionalità disponibili.

---

## Prerequisiti

Prima di iniziare, assicuratevi dei seguenti punti:

1. **Abbonamento attivato**: La vostra organizzazione deve aver sottoscritto l'offerta OpenShift.
2. **Permessi utente**: Il vostro account utente deve disporre dei diritti necessari per accedere e gestire le risorse OpenShift.

---

## Accesso all'interfaccia OpenShift

Una volta attivato l'abbonamento e configurati i permessi, un nuovo menu intitolato **OpenShift** appare nella console Cloud Temple. Questo menu contiene un sottomenu principale: **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. Sottomenu **Clusters**

Il sottomenu **Clusters** vi presenta una tabella che elenca tutti i cluster OpenShift disponibili, distribuiti all'interno del vostro tenant. Questa tabella include le informazioni principali per ogni cluster:

- **Nome del cluster**
- **URL di accesso**
- **URL API**
- **Versione**
- **Stato**
- **Ultimo aggiornamento**

<img src={oshiftSubMenu_001} />

#### Funzionalità principale

- **Nome cliccabile**: Cliccando sul nome di un cluster OpenShift, si apre una nuova pagina con i **dettagli completi** del cluster:
  - Informazioni di connettività per la gestione (**URL di accesso**, **URL API**).
  - Informazioni generali (**Stato**, **Ultimo aggiornamento**, **Versione**)
  - Tabella dei nodi includendo le informazioni:
    - **Nome del nodo**
    - **Tipo**
    - **AZ**
    - **Stato**
    - **CPU**
    - **RAM**

<img src={oshiftClusterDetail_001} />

---

## Accesso all'interfaccia di amministrazione OpenShift

Cliccate sull'**URL di accesso** del cluster che desiderate amministrare. Accederete all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, potete amministrare il vostro cluster:

<img src={oshiftMenu_003} />

### Risorse del vostro ambiente

Ecco le informazioni di connessione e configurazione specifiche del vostro ambiente OpenShift.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicuratevi che il vostro tenant sia iscritto nella lista bianca nella console (consultate la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__:
  [https://__vostro-id-tenant__.shiva.cloud-temple.com/](https://**vostro-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__vostro-id__.paas.cloud-temple.com/](https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/)

- __API esterna__:
  [https://api-ocp01-__vostro-id__.paas.cloud-temple.com](https://api-ocp01-**vostro-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__vostro-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications)

#### Connessione al cluster via CLI

Per connettervi tramite la riga di comando (CLI), utilizzate il seguente comando:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registro

Per accedere al registro, connettetevi utilizzando i seguenti comandi:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com --web
docker login -u {vostro-utente} -p $(oc whoami -t) registry-ocp01-{vostro-id}.paas.cloud-temple.com
```

Quindi, testate la costruzione e il caricamento di un'immagine Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configurazione dei router e Load Balancer

La piattaforma offre opzioni flessibili per il __routing dei flussi__ e il __bilanciamento del carico__:

- Per impostazione predefinita, vengono utilizzati load balancer privati per le rotte e gli ingress.
- Domini:
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`

Assicuratevi che le vostre rotte o ingress siano configurati con le etichette o le classi di ingress appropriate per garantire un routing corretto.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnessione IaaS

Le configurazioni di rete svolgono un ruolo cruciale per proteggere le comunicazioni con OpenShift.

- __Rete di interconnessione__: 100.67.0.0/28
- __VIP del load balancer privato__: 100.67.0.3

Verificate che il vostro firewall disponga di un'interfaccia dedicata e autorizzi il traffico tra le reti specificate.
