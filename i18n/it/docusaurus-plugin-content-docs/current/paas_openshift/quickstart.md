---
title: Guida rapida
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Distribuire una piattaforma RedHat OpenShift all'interno del vostro tenant

### Assegnazione dei diritti di accesso

È indispensabile che l'amministratore del [Tenant](../console/iam/concepts.md#tenants) conceda il diritto di gestione della piattaforma OpenShift all'utente amministratore OpenShift per potervi accedere:

<img src={oshiftRights} />

### Accesso all'ambiente OpenShift all'interno di un tenant

Dopo l'assegnazione dei diritti, il modulo '__Openshift__' appare nel menu della console Cloud Temple:

<img src={oshiftMenu_001} />

Vedrete quindi apparire i cluster OpenShift che sono distribuiti all'interno del vostro tenant.

Cliccate sul cluster che desiderate amministrare. Accederete all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, potete amministrare il vostro cluster:

<img src={oshiftMenu_003} />

### Risorse del vostro ambiente

Ecco le informazioni di connessione e configurazione specifiche per il vostro ambiente OpenShift.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicuratevi che il vostro tenant sia nella lista bianca nella console (consultate la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__:
  [https://__vostro-id-tenant__.shiva.cloud-temple.com/](https://**vostro-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__vostro-id__.paas.cloud-temple.com/](https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/)

- __API esterna__:
  [https://api-ocp01-__vostro-id__.paas.cloud-temple.com](https://api-ocp01-**vostro-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__vostro-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications)

#### Connessione al cluster via CLI

Per connettersi tramite l'interfaccia a riga di comando (CLI), utilizzate il seguente comando:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registro

Per accedere al registro, effettuate il login utilizzando i seguenti comandi:

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

#### Configurazione dei router e dei bilanciatori di carico

La piattaforma offre opzioni flessibili per il __routing dei flussi__ e il __bilanciamento del carico__:

- Per impostazione predefinita, vengono utilizzati bilanciatori di carico privati per le route e gli ingress.
- Domini:
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`

Assicuratevi che le vostre route o ingress siano configurati con le etichette o le classi di ingress appropriate per garantire un routing corretto.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnessione IaaS

Le configurazioni di rete giocano un ruolo cruciale per garantire le comunicazioni con OpenShift.

- __Rete di interconnessione__: 100.67.0.0/28
- __VIP del bilanciatore di carico privato__: 100.67.0.3

Verificate che il vostro firewall disponga di un'interfaccia dedicata e autorizzi il traffico tra le reti specificate.
