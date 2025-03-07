---
title: Guida rapida
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'


## Distribuire una piattaforma Redhat Openshift all'interno del tuo tenant

### Assegnazione dei diritti di accesso

È indispensabile che l'amministratore del [Tenant](../console/iam/concepts.md#tenants) conceda il diritto di gestire la piattaforma Openshift all'utente amministratore Openshift per potervi accedere:

<img src={oshiftRights} />

### Accesso all'ambiente Openshift all'interno di un tenant

Dopo l'assegnazione dei diritti, il modulo '__Openshift__' appare nel menu della console Cloud Temple:

<img src={oshiftMenu_001} />

Vedrete quindi apparire i cluster Openshift che sono distribuiti all'interno del vostro tenant.

Cliccate sul cluster che desiderate amministrare. Accederete all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, potete amministrare il vostro cluster:

<img src={oshiftMenu_003} />

### Risorse del vostro ambiente

Ecco le informazioni di connessione e configurazione proprie del vostro ambiente OpenShift.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicuratevi che il vostro tenant sia inserito nella lista bianca nella console (consultate la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
  [https://**vostro-id-tenant**.shiva.cloud-temple.com/](https://**vostro-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/](https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/)

- __API esterna__ :
  [https://api-ocp01-**vostro-id**.paas.cloud-temple.com](https://api-ocp01-**vostro-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications)

#### Connessione al cluster via CLI

Per connettervi via linea di comando (CLI), utilizzate il seguente comando:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registro

Per accedere al registro, effettuate il login utilizzando i seguenti comandi:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com --web
docker login -u {vostro-utente} -p $(oc whoami -t) registry-ocp01-{vostro-id}.paas.cloud-temple.com
```

Successivamente, testate la costruzione e il caricamento di un'immagine Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configurazione dei router e dei Load Balancer

La piattaforma offre opzioni flessibili per il __bilanciamento del caricamento__ e il __routing dei flussi__:

- Per impostazione predefinita, vengono utilizzati load balancers privati per le route e gli ingresses.
- Domini:
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`

Assicuratevi che le vostre route o ingressi siano configurati con le etichette o le classi di ingress appropriate per garantire un corretto routing.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnessione IaaS

Le configurazioni di rete svolgono un ruolo cruciale per garantire la sicurezza delle comunicazioni con OpenShift.

- __Rete di interconnessione__: 100.67.0.0/28
- __VIP del load balancer privato__: 100.67.0.3

Assicuratevi che il vostro firewall disponga di un'interfaccia dedicata e consenta il traffico tra le reti specificate.
