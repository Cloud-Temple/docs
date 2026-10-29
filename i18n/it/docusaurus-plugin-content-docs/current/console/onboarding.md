---
title: Onboarding
description: "Create la vostra organizzazione, proteggete i vostri accessi, aprite i vostri ambienti, invitate i vostri team e attivate i vostri prodotti. La messa in opera sulla piattaforma Cloud Temple, dall'iscrizione al primo deployment."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'

# Onboarding

Con Cloud Temple, non aspettate il vostro cloud: lo create.

Create la vostra organizzazione tramite un modulo online, in pochi minuti. I vostri ambienti vengono poi creati con un clic dalla console. Potete attivare e disattivare prodotti in completa autonomia, con fatturazione a consumo. Il tutto su un'infrastruttura sovrana, operata in Francia. La console segnala, tenant per tenant e prodotto per prodotto, ciò che rientra nella qualificazione **SecNumCloud**.


## Ciò che ottenete iscrivendovi

- **Senza attese**: basta un modulo. La vostra organizzazione viene creata automaticamente, in pochi minuti, senza intervento dei nostri team.
- **Senza impegno di volume**: i prodotti in self-service sono fatturati in base all'utilizzo.
- **Senza addendum**: aprite nuovi ambienti nell'ambito del vostro contratto esistente, alle condizioni che esso prevede.
- **Sovrano per costruzione**: infrastruttura operata in Francia, e un perimetro di qualificazione **SecNumCloud** identificato nella console.

<a id="les-trois-parcours"></a>

## Le tappe della vostra messa in opera

Questa pagina descrive la vostra messa in opera dall'inizio alla fine, nell'ordine in cui la vivete. Ogni tappa è breve e rimanda alla documentazione di riferimento per i dettagli.

1. [Creare la vostra organizzazione](#tappa-1-creare-la-vostra-organizzazione): il modulo di iscrizione e ciò che viene avviato dietro le quinte.
2. [Connettervi e proteggere i vostri accessi](#tappa-2-connettervi-e-proteggere-i-vostri-accessi): la connessione, il doppio fattore e gli indirizzi IP autorizzati.
3. [Scegliere o creare un ambiente](#tappa-3-scegliere-o-creare-un-ambiente): un tenant per ogni uso, creato in pochi minuti e in autonomia.
4. [Invitare i vostri collaboratori](#tappa-4-invitare-i-vostri-collaboratori): i loro account e i loro diritti, tenant per tenant.
5. [Attivare i vostri prodotti](#tappa-5-attivare-i-vostri-prodotti): aprire, fermare o richiedere un prodotto.
6. [Automatizzare](#tappa-6-automatizzare): l'API della console e il provider Terraform.

Una volta completata la messa in opera, il [tour della console](./console_quickstart) vi presenta il resto dell'interfaccia: dashboard, costi, registro delle attività, supporto.

## Il vocabolario, in due parole

L'intera piattaforma si basa su due livelli.

**La vostra organizzazione** siete voi: la vostra azienda. È essa che porta il vostro contratto e la vostra fatturazione.

**Un tenant** è un ambiente di lavoro all'interno della vostra organizzazione. Potete averne più di uno, isolati tra loro.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Concretamente: firmate **un** contratto e aprite i vostri ambienti alle condizioni che esso prevede, senza mai mescolare i vostri dati tra loro. Separare un ambiente di collaudo, isolare una filiale o creare un lab non richiede alcun addendum.

Due ruoli ricevono degli accessi:

- il **proprietario dell'organizzazione** accede a tutto e invita gli altri utenti
- il **proprietario di un tenant** accede a quell'ambiente

Può essere la stessa persona.

---

<a id="parcours-1-créer-votre-organisation"></a>

## Tappa 1. Creare la vostra organizzazione

Questo è il vostro punto di ingresso sulla piattaforma. Avviene solo una volta e si svolge online.

### Il modulo di iscrizione

La vostra messa in opera inizia con un **modulo di iscrizione online**, il cui accesso vi viene comunicato dal vostro interlocutore Cloud Temple.

È breve e si compila in un'unica volta. Vi chiede quattro cose.

**Chi siete.** Il nome della vostra organizzazione, la sua forma giuridica, il suo paese di stabilimento e il suo numero SIREN.

**Chi gestirà la piattaforma.** Il cognome, il nome e l'indirizzo e-mail professionale della persona che sarà **proprietaria dell'organizzazione**. Sarà lei a ricevere gli accessi e a invitare successivamente i propri collaboratori.

**Cosa ci inserirete.** Il vostro settore di attività e la natura dei dati che il vostro progetto tratta: dati sanitari, dati personali, dati finanziari, dati sensibili.

**Da dove vi connetterete.** Gli indirizzi IP pubblici autorizzati a raggiungere la vostra console.

:::caution[Gli indirizzi IP non sono facoltativi]
Solo gli indirizzi che dichiarerete potranno accedere alla console.

Ricordatevi di includere **tutti** i vostri siti e le vostre uscite VPN. Una dimenticanza non è definitiva: l'elenco si amplia successivamente dalla console, in autonomia (vedere [Aggiungere un indirizzo IP](#aggiungere-un-indirizzo-ip)).
:::

Concludete attestando di essere abilitati a impegnare la vostra organizzazione e accettando le **[condizioni generali](https://www.cloud-temple.com/contracts)**.

### Cosa succede dopo

Tutto è automatico. La vostra organizzazione viene creata a partire dalle informazioni che avete inserito e il vostro spazio viene costruito nei minuti successivi: la vostra directory delle identità, il vostro primo ambiente, i vostri accessi.

Non dovete effettuare alcuna operazione durante questo tempo.

:::tip[Questo primo ambiente arriva vuoto]
L'ambiente creato dalla vostra iscrizione non ha **nessun prodotto attivato**: viene allestito dalla nostra automazione, senza modulo, quindi senza alcuna selezione possibile. È voluto: nulla inizia a essere fatturato finché non avete attivato voi stessi un prodotto.

I quattro prodotti in self-service sono **disponibili** nella vostra console sin dall'apertura. Disponibile non significa attivato: li attivate quando lo decidete, vedere [I prodotti](#les-produits).
:::

### Ciò che ricevete

Un'e-mail di **creazione dell'account**, indirizzata al proprietario designato. In essa definite la vostra password e attivate il vostro secondo fattore di autenticazione.

Dettagli: [Le e-mail che ricevete](#les-courriels-que-vous-recevez).

:::tip[E la parte contrattuale?]
Non vi blocca. Le informazioni amministrative e di fatturazione (coordinate di fatturazione, modalità di pagamento, riferimento dell'ordine di acquisto) vengono completate in parallelo, con il vostro interlocutore Cloud Temple. Non dovete aspettare che siano finalizzate per prendere in mano la piattaforma.
:::

---

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Tappa 2. Connettervi e proteggere i vostri accessi

<a id="vous-êtes-connecté"></a>

### Connettervi

La console è accessibile all'indirizzo [shiva.cloud-temple.com](https://shiva.cloud-temple.com), oppure dall'indirizzo diretto che vi è stato comunicato via e-mail.

1. Nella prima pagina, indicate l'[organizzazione](./iam/concepts.md#organizzazioni) in cui è stato creato il vostro account, quindi fate clic su **Accedi**.
2. Autenticatevi con la vostra password, poi con il codice monouso del vostro secondo fattore.

<img src={shivaLogin} />

Arrivate sulla pagina iniziale della console.

<img src={shivaHome} />

### Il doppio fattore è obbligatorio

L'autenticazione a due fattori (MFA) è **obbligatoria** per tutti gli account della console: dopo la password, la console richiede un codice monouso. La attivate dall'e-mail di creazione dell'account. Se la vostra organizzazione è federata con la vostra directory, vedere i [meccanismi di autenticazione](./iam/concepts.md#meccanismi-di-autenticazione).

### Aggiungere un indirizzo IP

Poiché la console è ospitata su un'infrastruttura qualificata SecNumCloud, il suo accesso è limitato agli indirizzi IP pubblici che avete autorizzato.

L'**aggiunta** si effettua dalla console, in **Amministrazione > Accesso**. La pagina elenca gli indirizzi pubblici autorizzati; il pulsante **« Aggiungi un IP »** ne dichiara uno nuovo, in notazione CIDR, con una descrizione.

È necessario il diritto `console_public_access_read` per consultare l'elenco e `console_public_access_write` per ampliarlo.

Contate **una decina di minuti** prima che il nuovo indirizzo diventi effettivo.

:::caution[Questo elenco è quello della vostra organizzazione]
Esiste un solo elenco per l'intera organizzazione. La pagina è raggiungibile da un tenant, ma **un indirizzo aggiunto lì autorizza l'accesso alla console per l'intera organizzazione**, non solo per quel tenant.
:::

La **rimozione** di un indirizzo, invece, passa tramite una **richiesta di supporto** dalla console. È una scelta voluta: revocare un accesso è un'operazione irreversibile per chi si connette da quell'indirizzo.

<img src={orgAccess} />

Per approfondire: le [raccomandazioni di sicurezza](./security/security_recommendations.md) per l'accesso alla console.

---

<a id="parcours-2-ajouter-un-environnement"></a>

## Tappa 3. Scegliere o creare un ambiente

### Scegliere il vostro tenant di lavoro

Le risorse tecniche (calcolo, archiviazione, rete…) sono **proprie di ciascun tenant** e non vengono condivise tra i tenant. Prima di agire, scegliete il tenant in cui lavorate:

- dall'intestazione in alto nella console, aprite il selettore **« I miei tenant »** e fate clic sul tenant desiderato;
- oppure da **Amministrazione > Tenant**, utilizzate l'azione **« Connettersi al tenant »** di una riga.

Il selettore segnala con un badge **SecNumCloud** i tenant qualificati.

<img src={imgSelector} />

### Creare un nuovo ambiente

Avete già un'organizzazione e desiderate un nuovo ambiente, per un collaudo, un nuovo progetto o una filiale.

**Fate tutto dalla console, alle condizioni del vostro contratto. Non è necessaria alcuna richiesta presso di noi.**

### I passaggi

1. Da **Amministrazione > Tenant**, fate clic su **« Nuovo tenant »**.
2. Assegnategli un **nome** significativo: *production*, *recette*, il nome di un progetto. Il nome viene verificato in tempo reale; è possibile aggiungere una descrizione.
3. Il creatore del tenant ne diventa il proprietario predefinito. Potrà aggiungere altri responsabili in seguito, tramite la scheda **Utenti**, una volta connesso al tenant.
4. Scegliete i **prodotti** da attivarvi, quindi confermate con **« Crea »**.

<img src={tenantNew} />

### Cosa succede dopo

Il vostro ambiente viene costruito automaticamente, in pochi minuti. Non dovete fare nulla.

Se il proprietario del tenant non ha ancora un account, riceve la sua e-mail di creazione dell'account. Se ne ha già uno, accede al nuovo ambiente senza un nuovo invito.

:::tip[Niente viene attivato d'ufficio]
Scegliete i prodotti del tenant **fin dal modulo di creazione** (il passaggio 4 qui sopra) e potete modificare questo perimetro in qualsiasi momento. Nessun prodotto viene aperto senza che lo abbiate selezionato: pagate solo ciò che consumate.
:::

---

## Tappa 4. Invitare i vostri collaboratori

Gli account sono **globali all'organizzazione**; i diritti, invece, si assegnano **tenant per tenant**.

1. **Invitate il collaboratore.** Da **Amministrazione > Utenti**, il pulsante **« Nuovo utente »** richiede il suo indirizzo e-mail. Riceve un'e-mail di verifica; il suo account appare in grigio finché non l'ha confermato.
2. **Assegnategli i suoi diritti.** Un account appena creato non ha **alcun diritto**. Nel menu **Azioni** dell'utente, scegliete **« Modifica »**, quindi selezionate le autorizzazioni necessarie, in ogni tenant in cui deve intervenire.

<img src={shivaOnboard_004} />

<img src={shivaOnboard_005} />

Per invitare un utente o assegnargli un'autorizzazione, vi serve il diritto `iam_write`, e potete assegnare solo un'autorizzazione che possedete voi stessi.

Il dettaglio delle procedure (reinvio dell'invito, eliminazione, proprietari di tenant) e l'elenco delle autorizzazioni si trovano nel [riferimento IAM](./iam/concepts.md). Se la vostra organizzazione utilizza la propria directory delle identità, vedere i [tutorial di federazione delle identità](/console/iam/tutorials).

### Cambiare un responsabile

Il proprietario dell'organizzazione gestisce gli utenti e i loro diritti direttamente dalla console: vedere [Identità e accessi](/console/iam).

Può anche **delegare** i propri diritti a un partner esterno o a un project manager di Cloud Temple: utile se affidate la gestione operativa a un terzo.

---

<a id="parcours-3-faire-évoluer-un-environnement"></a>

## Tappa 5. Attivare i vostri prodotti

Le vostre esigenze cambiano. Ecco come far evolvere il perimetro di un ambiente esistente.

### Attivare un prodotto

Se il prodotto fa parte del vostro catalogo, compare nella console: **attivatelo in completa autonomia** sul tenant interessato. Contate qualche minuto prima che sia utilizzabile.

Dall'elenco dei vostri tenant, l'azione **« Modifica i prodotti »** apre il catalogo. Selezionate quelli che volete aprire, deselezionate quelli che volete fermare, quindi **Salva**.

Se non compare, significa che non è ancora presente nel vostro catalogo: vedere [Richiedere un prodotto aggiuntivo](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Fermare un prodotto

Potete disattivare un prodotto che non utilizzate più, e la fatturazione si interrompe con esso.

Prima viene eseguita una verifica: se delle risorse sono ancora in consumo, la disattivazione viene rifiutata e la console vi indica cosa la blocca. Eliminate queste risorse, quindi riprovate.

È una protezione: evita di interrompere un servizio ancora in uso e di perderne i dati.

### I prodotti {/* #les-produits */}

#### Ciò che attivate voi stessi

Nessun prodotto viene attivato d'ufficio, né alla creazione della vostra organizzazione, né a quella di un tenant. Quattro prodotti sono invece **disponibili** nella vostra console sin dall'apertura: li attivate voi stessi, sul tenant di vostra scelta. Sono **fatturati in base all'utilizzo**, senza impegno di volume né soglie da negoziare: pagate solo ciò che consumate.

| Prodotto | A cosa serve | Maggiori informazioni |
| --- | --- | --- |
| **VM Instances** | Macchine virtuali on demand | [Documentazione](/public_cloud/vm_instances) |
| **VPC** | Una rete privata virtuale | [Documentazione](/network/vpc) |
| **LLMaaS** | Modelli di IA sovrani | [Documentazione](/llmaas) |
| **Object Storage** | Archiviazione compatibile S3 | [Documentazione](/storage/oss) |

#### Il resto del catalogo

Questi prodotti vengono aperti nell'ambito del vostro contratto, con il vostro referente commerciale:

- [IaaS VMware](/iaas_vmware) e [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) e [Kubernetes gestito](/managed_kubernetes)
- Database gestiti: [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privato](/network/private_backbone) e [Internet](/network/internet)
- [Marketplace](/marketplace)

Panoramica: [i nostri prodotti](/managedproducts_overview).

### Richiedere un prodotto aggiuntivo {/* #demander-un-produit-supplémentaire */}

Il prodotto che desiderate non compare nella vostra console? Non è ancora presente nel vostro catalogo.

1. Dalla console, create una **richiesta di supporto**
2. Indicate il **prodotto** interessato e il volume previsto, se lo conoscete
3. Vi ricontatteremo in merito alle condizioni
4. Una volta convalidato, il prodotto compare nella vostra console
5. Potete attivarlo su uno o più tenant

<img src={supportSelectProduct} />

#### Cambiare livello di supporto

Esistono tre livelli, presentati sul [nostro sito](https://www.cloud-temple.com/produits/niveaux-de-support).

Potete salire o scendere di livello: fatene richiesta tramite il supporto dalla console, oppure al vostro referente commerciale.

---

## Tappa 6. Automatizzare

Tutto ciò che fate nella console è possibile anche in modo programmatico.

- **L'API della console** dà accesso all'insieme delle sue funzionalità. Vi autenticate con una chiave API, o *Personal Access Token* (PAT), legata a un tenant e all'utente che l'ha creata. Il dettaglio delle chiamate è consultabile da **Profilo > APIs**. Vedere la [documentazione dell'API](./api.md).
- **Il provider Terraform** gestisce la vostra piattaforma *as code*. Vedere [Terraform Provider](/terraform).

<img src={shivaOnboard_008} />

---

## Le e-mail che ricevete {/* #les-courriels-que-vous-recevez */}

Un'unica e-mail richiede un'azione da parte vostra.

### L'e-mail di creazione dell'account

| | |
| --- | --- |
| **Mittente** | `shiva.support@cloud-temple.com` |
| **Chi la riceve** | Il proprietario dell'organizzazione, poi ogni proprietario di tenant che non ha ancora un account |
| **Cosa contiene** | Un link per scegliere la password e attivare il secondo fattore (OTP) |
| **Quando** | Qualche minuto dopo la creazione |
| **Validità** | **96 ore** |

:::warning[Link scaduto?]
Oltre le 96 ore, il link non funziona più. È una misura di sicurezza, non un guasto.

Scrivete a **`shiva.support@cloud-temple.com`**: ve ne invieremo uno nuovo.

È l'unico canale utilizzabile in questa fase: senza accesso alla console, non potete ancora aprirvi una richiesta.
:::

:::note[Non avete ricevuto nulla?]
Controllate la posta indesiderata: il messaggio viene talvolta filtrato. Viene inviato da **`shiva.support@cloud-temple.com`**: autorizzate questo indirizzo nella vostra casella di posta. Se non avete ricevuto nulla entro un'ora, contattateci allo stesso indirizzo.
:::

---

## Domande frequenti

**Quanto tempo richiede la creazione di un ambiente?**
Qualche minuto. La creazione è automatica, sia per il vostro primo arrivo sia per un nuovo ambiente.

**Quanti tenant posso creare?**
Quanti ne servono, alle condizioni del vostro contratto.

**Il mio progetto tratta dati sanitari o dati sensibili. Posso iscrivermi online?**
Sì. Segnalatelo nel modulo: la vostra organizzazione viene creata normalmente e i nostri team vi accompagnano nell'apertura dei servizi interessati.

**Posso affidare la gestione a un fornitore esterno?**
Sì. Il proprietario dell'organizzazione può delegare i propri diritti a un partner esterno o a un project manager di Cloud Temple.

**Ho dimenticato un indirizzo IP, non riesco più a connettermi.**
Se un collega della vostra organizzazione ha ancora accesso alla console, aggiunge l'indirizzo da **Amministrazione > Accesso**. Se nessuno vi accede più, scrivete a **`shiva.support@cloud-temple.com`**: è il canale di emergenza quando la console è irraggiungibile.

**Ho appena attivato un prodotto, non lo vedo ancora.**
Attendete qualche minuto. Se ancora non compare, contattate il supporto.

Altre domande su account e diritti: vedere le [domande frequenti IAM](./iam/quickstart.md).

---

## Andare oltre

<div class="card-grid">
  <div class="card">
    <h3>Tour della console</h3>
    <p>Il resto dell'interfaccia: dashboard, costi, registro delle attività, supporto.</p>
    <a href="./console_quickstart" class="card-link">Fare il tour &rarr;</a>
  </div>
  <div class="card">
    <h3>Identità e accessi</h3>
    <p>Il riferimento per account, proprietari e autorizzazioni, tenant per tenant.</p>
    <a href="./iam" class="card-link">Esplorare l'IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Ordinare risorse</h3>
    <p>Distribuite le vostre prime risorse e seguitene la messa a disposizione.</p>
    <a href="./orders" class="card-link">Vedere gli ordini &rarr;</a>
  </div>
  <div class="card">
    <h3>Fatturazione</h3>
    <p>Seguite il vostro consumo per tenant e per prodotto, nel corso del mese.</p>
    <a href="./billing/concepts" class="card-link">Accedere al modulo &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilità condivise</h3>
    <p>Ciò che Cloud Temple gestisce, ciò che resta a vostro carico.</p>
    <a href="../shared-responsibility" class="card-link">Leggere il modello &rarr;</a>
  </div>
  <div class="card">
    <h3>Impegni e SLA</h3>
    <p>Livelli di servizio, disponibilità e condizioni contrattuali.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">Consultare gli impegni &rarr;</a>
  </div>
</div>
