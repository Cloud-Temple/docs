---
title: Guida rapida
---

## Distribuire una piattaforma Redhat Openshift all'interno del tuo tenant

### Assegnazione dei diritti di accesso

È indispensabile che l'amministratore del [Tenant](../console/iam/concepts.md#tenants) conceda il diritto di gestione della piattaforma Openshift all'utente amministratore di Openshift per poter accedere:

![](images/oshift_rights.png)

### Accesso all'ambiente Openshift all'interno di un tenant

Dopo l'assegnazione dei diritti, il modulo '__Openshift__' appare nel menu della console Cloud Temple:

![](images/oshift_menu_001.png)

Visualizzi quindi i cluster Openshift che sono distribuiti all'interno del tuo tenant.

Clicca sul cluster che desideri amministrare. Accedi all'ambiente di amministrazione del cluster:

![](images/oshift_menu_002.png)

Dopo l'autenticazione, puoi amministrare il tuo cluster:

![](images/oshift_menu_003.png)

### Risorse del tuo ambiente

Ecco le informazioni di connessione e configurazione specifiche del tuo ambiente OpenShift.

#### Dettagli di connessione

Per accedere ai diversi componenti OpenShift, assicurati che il tuo tenant sia nella lista bianca nella console (consulta la documentazione: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__:
  [https://**vostro-id-tenant**.shiva.cloud-temple.com/](https://**vostro-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/](https://ui-ocp01-**vostro-id**.paas.cloud-temple.com/)

- __API esterna__:
  [https://api-ocp01-**vostro-id**.paas.cloud-temple.com](https://api-ocp01-**vostro-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**vostro-id**.paas.cloud-temple.com/applications)

#### Connessione al cluster tramite CLI

Per connetterti tramite la linea di comando (CLI), utilizza il seguente comando:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registry

Per accedere al registry, accedi utilizzando i seguenti comandi:

```bash
oc login https://api-ocp01-{vostro-id}.paas.cloud-temple.com --web
docker login -u {tuo-utente} -p $(oc whoami -t) registry-ocp01-{vostro-id}.paas.cloud-temple.com
```

Successivamente, testa la costruzione e il caricamento di un'immagine Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{vostro-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configurazione dei router e Load Balancers

La piattaforma offre opzioni flessibili per il __routing dei flussi__ e il __bilanciamento del carico__:

- Per impostazione predefinita, i private load balancers sono utilizzati per le route e gli ingressi.
- Domini:
  - `*.apps-priv-ocp01-{vostro-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{vostro-id}.paas.cloud-temple.com`

Assicurati che le tue route o ingressi siano configurati con le etichette o classi di ingressi appropriate per garantire un corretto instradamento.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnessione IaaS

Le configurazioni di rete giocano un ruolo cruciale per garantire la sicurezza delle comunicazioni con OpenShift.

- __Rete di interconnessione__: 100.67.0.0/28
- __VIP del load balancer privato__: 100.67.0.3

Assicurati che il tuo firewall disponga di un'interfaccia dedicata e consenta il traffico tra le reti specificate.
