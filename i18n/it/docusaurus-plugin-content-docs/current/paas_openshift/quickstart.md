---
title: Guida di avvio
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deploy a Redhat Openshift platform within your tenant

### Assegnazione dei diritti di accesso

È fondamentale che l'amministratore del [Tenant](../console/iam/concepts.md#tenant) conceda all'amministratore Openshift i diritti di lettura e gestione della piattaforma Openshift per potervi accedere:

<img src={oshiftRights} />

### Accesso all'ambiente Openshift all'interno di un tenant

Dopo l'assegnazione dei diritti, il modulo '__Openshift__' viene visualizzato nel menu della console Cloud Temple:

<img src={oshiftMenu_001} />

Verranno quindi mostrati i cluster Openshift distribuiti all'interno del vostro tenant.

Fate clic sul cluster che desiderate gestire. Accederete all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, potrete gestire il vostro cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicurati che il tuo tenant sia registrato nell'elenco bianco nella console (consulta la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
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

Successivamente, verifica la creazione e il caricamento di un'immagine Docker:

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

#### IaaS Networking

Network configurations play a crucial role in securing communications with OpenShift.

- __Interconnection Network__: 100.67.0.0/28  
- __Private Load Balancer VIP__: 100.67.0.3  

Ensure your firewall has a dedicated interface and allows traffic between the specified networks.