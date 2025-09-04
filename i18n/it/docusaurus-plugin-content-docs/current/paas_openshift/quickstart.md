---
title: Guida di Partenza
---

import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deployment of a Red Hat OpenShift environment within your tenant

Questo documento descrive il processo di implementazione di una piattaforma Red Hat OpenShift all'interno del proprio ambito di controllo.

1. **Preparazione**
   - Assicurati che il tuo ambiente IT soddisfi i requisiti minimi per l'installazione di OpenShift, inclusi requisiti hardware e software specifici.
   - Verifica la compatibilità del tuo sistema operativo con OpenShift (ad esempio, Red Hat Enterprise Linux o CentOS).

2. **Installazione**
   - Utilizza il comando `oc cluster up` per installare un ambiente di sviluppo locale. Questo processo creerà una macchina virtuale che ospita OpenShift.
   - Se necessario, personalizza l'installazione seguendo le istruzioni fornite durante la fase di configurazione (ad esempio, modificando i parametri di memoria).

3. **Accesso e Configurazione**
   - Accedi all'ambiente OpenShift utilizzando il comando `oc login`.
   - Configura l'accesso alle risorse necessarie per le tue applicazioni, come database, servizi di messaggistica ecc.

4. **Creazione di Applicazioni**
   - Utilizza i comandi `oc new-app`, `oc create deployment` o simili per creare e gestire le tue applicazioni.
   - Configura i componenti di OpenShift come servizi, route, semplificando così la gestione delle applicazioni.

5. **Ottimizzazione**
   - Monitora le prestazioni dell'ambiente con strumenti come `oc adm inspect` per ottimizzare l'utilizzo delle risorse.
   - Implementa strategie di scaling automatizzate per garantire che le tue applicazioni possano gestire picchi di traffico senza problemi.

6. **Gestione e Monitoraggio**
   - Utilizza `oc get` e `oc describe` per monitorare lo stato delle tue applicazioni, servizi e risorse.
   - Implementa un sistema di notifica per essere avvisati in caso di errori o problemi critici.

7. **Sicurezza**
   - Configura le autorizzazioni e i ruoli (RBAC) per garantire che solo gli utenti autorizzati possano accedere alle risorse.
   - Implementa misure di sicurezza aggiuntive come la crittografia, l'autenticazione a due fattori, ecc.

8. **Integrazione e Deployment Continuo**
   - Integra il tuo ambiente OpenShift con strumenti di integrazione continua (CI) per automatizzare il processo di build, test e deployment delle applicazioni.
   - Utilizza containerization (Docker) per garantire l'ambiente coerente tra sviluppo, staging e produzione.

9. **Backup e Ripristino**
   - Implementa un piano di backup regolare per le tue applicazioni e dati critici.
   - Testa periodicamente il processo di ripristino in caso di perdita o corruzione dei dati.

10. **Manutenzione e Aggiornamenti**
    - Mantieni l'ambiente OpenShift aggiornato con le patch di sicurezza e gli aggiornamenti software.
    - Pianifica regolarmente la manutenzione per garantire che il sistema funzioni in modo efficiente ed efficace.

Seguendo questi passaggi, sarai in grado di implementare con successo una piattaforma Red Hat OpenShift all'interno del tuo ambito di controllo, sfruttando le potenzialità della containerizzazione e dell'automazione per migliorare la produttività e l'efficienza dei tuoi processi IT.

### Autorizzazione degli accessi

È fondamentale che l'amministratore del [Tenant](console/iam/concepts.md#tenant) conceda il diritto di gestione della piattaforma Openshift all'utente amministratore Openshift per potervi accedere:

<img src={oshiftRights} />

### Accesso all'ambiente Openshift all'interno di un tenant

Dopo aver assegnato i diritti, il modulo '__Openshift__' appare quindi nel menu della console Cloud Temple:

<img src={oshiftMenu_001} />

Possibile visualizzare gli ambienti Openshift che sono stati distribuiti all'interno del proprio tenant.

Selezionare il cluster che si desidera amministrare. Si accede all'ambiente di amministrazione del cluster:

<img src={oshiftMenu_002} />

Dopo l'autenticazione, è possibile amministrare il proprio cluster:

<img src={oshiftMenu_003} />

### Risorse dell'ambiente

Ecco le dettagli di connettività e configurazione specifici del tuo ambiente OpenShift:

#### Dettagli di connessione

Per accedere ai vari componenti OpenShift, assicurati che il tuo inquilino sia incluso nella lista bianca nella console (consulta la documentazione: [Documentazione Cloud Temple](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
  [https://**votre-id-inquilino**.shiva.cloud-temple.com/](https://**votre-id-inquilino**.shiva.cloud-temple.com/)

- __Interfaccia utente OpenShift__ :
  [https://ui-ocp01-**votre-id**.paas.cloud-temple.com/](https://ui-ocp01-**votre-id**.paas.cloud-temple.com/)

- __API esterno__ :
  [https://api-ocp01-**votre-id**.paas.cloud-temple.com](https://api-ocp01-**votre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications)

#### Connettività al cluster tramite CLI

Per connettersi tramite la riga di comando (CLI), utilizzare la seguente comanda:

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com/ --web
```

#### Accesso al registro

Per accedere al registro, siate autenticati utilizzando le seguenti comandi:

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com --web
docker login -u {votre-utente} -p $(oc whoami -t) registry-ocp01-{votre-id}.paas.cloud-temple.com
```

Dopo aver effettuato l'autenticazione, provare la costruzione e il download di un immagine Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configurazione dei router e load balancer

La piattaforma offre opzioni flessibi per il __routing delle richieste__ e l'__equilibrio della carica__:

- Di default, vengono utilizzati i load balancers privati per le rotte e gli ingressi.
- Domini:
  - `*.apps-priv-ocp01-{votre-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{votre-id}.paas.cloud-temple.com`

Assicuratevi che le vostre rotte o gli ingressi siano configurati con le etichette o classi di ingresso appropriate per garantire un routing corretto.

Esempio:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnession IaaS

Le configurazione di rete svolge un ruolo fondamentale per garantire la sicurezza delle comunicazioni con OpenShift.

- __Rete di interconnession__ : 100.67.0.0/28
- __VIP del load balancer privato__ : 100.67.0.3

Verifica che il tuo firewall disponga di un'interfaccia dedicata e autorizzi il traffico tra i reti specificate.
