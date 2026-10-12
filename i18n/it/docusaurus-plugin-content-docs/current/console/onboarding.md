---
title: Onboarding
description: "Crea la tua organizzazione, apri i tuoi ambienti e attiva i tuoi prodotti. La configurazione sulla piattaforma Cloud Temple, dall'iscrizione al primo deployment."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

Con Cloud Temple, non aspetti il tuo cloud: lo crei.

Crei la tua organizzazione tramite un modulo online, in pochi minuti. I tuoi ambienti vengono poi creati con un clic dalla Console. Puoi attivare e disattivare prodotti in completa autonomia, con fatturazione a consumo. Il tutto su un'infrastruttura sovrana, operata in Francia. La Console segnala, tenant per tenant e prodotto per prodotto, ciò che rientra nella qualificazione **SecNumCloud**.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## Ciò che ottieni iscrivendoti

- **Senza attese** : basta un modulo. La tua organizzazione viene creata automaticamente, in pochi minuti, senza intervento dei nostri team.
- **Senza impegno di volume** : i prodotti in self-service sono fatturati in base all'utilizzo.
- **Senza addendum** : apri nuovi ambienti sotto il tuo contratto esistente, nelle condizioni che esso prevede.
- **Sovrano per costruzione** : infrastruttura operata in Francia, e un perimetro di qualificazione **SecNumCloud** identificato nella Console.

## I tre percorsi

Questa pagina descrive questa configurazione, dall'inizio alla fine.

<div class="card-grid">
  <div class="card">
    <h3>Creare la vostra organizzazione</h3>
    <p>Il modulo di registrazione online e ciò che viene attivato in background.</p>
    <a href="#parcours-1-créer-votre-organisation" class="card-link">Inizia &rarr;</a>
  </div>
  <div class="card">
    <h3>Aggiungere un ambiente</h3>
    <p>Un nuovo tenant dalla Console, in pochi minuti e in autonomia.</p>
    <a href="#parcours-2-ajouter-un-environnement" class="card-link">Scopri come &rarr;</a>
  </div>
  <div class="card">
    <h3>Fare evolvere un ambiente</h3>
    <p>Attivare un prodotto, aprire un accesso, delegare la gestione a un terzo.</p>
    <a href="#parcours-3-faire-évoluer-un-environnement" class="card-link">Esplora &rarr;</a>
  </div>
</div>

## Il vocabolario, in due parole

L'intera piattaforma si basa su due livelli.

**La tua organizzazione**, sei tu: la tua azienda. Essa gestisce il tuo contratto e la tua fatturazione.

**Un tenant** è un ambiente di lavoro all'interno della tua organizzazione. Puoi averne più di uno, isolati tra loro.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Concretamente: firmi **un** contratto e apri i tuoi ambienti nelle condizioni che esso prevede, senza mai mescolare i tuoi dati tra loro. Separare un ambiente di test, isolare una filiale o creare un lab non richiede alcuna modifica contrattuale.

Due ruoli ricevono degli accessi:

- il **proprietario dell'organizzazione** accede a tutto e invita gli altri utenti
- il **proprietario di un tenant** accede a quell'ambiente

Può essere la stessa persona.

---

## Percorso 1. Creare la vostra organizzazione

Questo è il vostro punto di ingresso sulla piattaforma. Avviene solo una volta e si svolge online.

### Il modulo di registrazione

La vostra configurazione inizia con un **modulo di registrazione online**, a cui il vostro interlocutore Cloud Temple vi comunica l'accesso.

È breve e si compila in un'unica volta. Vi chiede quattro cose.

**Chi siete.** Il nome della vostra organizzazione, la sua forma giuridica, il suo paese di stabilimento e il suo numero SIREN.

**Chi gestirà la piattaforma.** Il nome, il cognome e l'indirizzo e-mail professionale della persona che sarà **proprietaria dell'organizzazione**. Sarà lei a ricevere gli accessi e a invitare successivamente i propri collaboratori.

**Cosa ci inserirete.** Il vostro settore di attività e la natura dei dati che il vostro progetto elabora: dati sanitari, dati personali, dati finanziari, dati sensibili.

**Da dove vi connetterete.** Gli indirizzi IP pubblici autorizzati a raggiungere la vostra Console.

:::caution[Les adresses IP ne sont pas optionnelles]
Solo gli indirizzi che dichiarerete potranno accedere alla Console.

Ricordate di includere **tutti** i vostri siti e le vostre uscite VPN. Un'omissione non è definitiva: l'elenco viene successivamente arricchito dalla Console, in autonomia.
:::

Concludete attestando di essere abilitati a impegnare la vostra organizzazione e accettando le **[conditions générales](https://www.cloud-temple.com/contracts)**.

### Cosa succede dopo

Tutto è automatico. La tua organizzazione viene creata a partire dalle informazioni che hai inserito e il tuo spazio viene costruito nei minuti successivi: il tuo directory delle identità, il tuo primo ambiente, i tuoi accessi.

Non devi effettuare alcuna operazione durante questo tempo.

:::tip[Questo primo ambiente arriva vuoto]
L'ambiente creato dalla tua registrazione non ha **nessun prodotto attivato**: viene montato dalla nostra automazione, senza modulo, quindi senza selezione possibile. È deliberato: nulla inizia a essere fatturato finché non hai attivato tu stesso un prodotto.

I quattro prodotti in self-service sono **disponibili** nella tua Console sin dall'apertura. Disponibile non significa attivato: li attivi quando lo decidi, vedere [Les produits](#les-produits).
:::

### Ciò che ricevi

Un'email di **creazione dell'account**, indirizzato al proprietario designato. In esso definisci la tua password e attivi il tuo secondo fattore di autenticazione.

Dettagli: [Les courriels que vous recevez](#les-courriels-que-vous-recevez).

### Sei connesso

Arrivi sulla Console, all'indirizzo [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Puoi quindi invitare i tuoi collaboratori e assegnare loro dei diritti: vedi [Identités et accès](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[E la parte contrattuale?]
Non ti blocca. Le informazioni amministrative e di fatturazione: coordinate di fatturazione, modalità di pagamento, riferimento dell'ordine di acquisto vengono completate in parallelo, con il tuo referente Cloud Temple. Non devi aspettare che vengano finalizzate per prendere in mano la piattaforma.
:::

---

## Percorso 2. Aggiungere un ambiente

Avete già un'organizzazione e desiderate un nuovo ambiente, per un test, un nuovo progetto o una filiale.

**Effettuate tutto dalla Console, nelle condizioni del vostro contratto. Non è necessaria alcuna richiesta da parte nostra.**

### Le passaggi

1. Dalla Console, create un **nuovo tenant** dalla scheda **Tenants**.
2. Assegnategli un **nome** significativo: *production*, *staging*, il nome di un progetto.
3. Il creatore del tenant ne diventa proprietario di default. Potrà aggiungere altri responsabili in seguito, tramite la scheda **Utenti**, una volta connesso al tenant.
4. Scegliete i **prodotti** da attivare.

<img src={tenantNew} />

### Cosa succede in seguito

Il tuo ambiente viene costruito automaticamente in pochi minuti. Non devi fare nulla.

Se il proprietario del tenant non ha ancora un account, riceve la sua e-mail di creazione account. Se ne ha già uno, accede al nuovo ambiente senza nuova invito.

:::tip[Niente viene attivato di default]
Scegli i prodotti del tenant **fin dal modulo di creazione** (il passaggio 4 sopra), e puoi modificare questo perimetro in qualsiasi momento. Nessun prodotto viene attivato senza che tu lo abbia selezionato: paghi solo ciò che consumi.
:::

---

## Percorso 3. Fare evolvere un ambiente

Le vostre esigenze cambiano. Ecco come fare evolvere un ambiente esistente.

### Attivare un prodotto

Se il prodotto fa parte del vostro catalogo, viene visualizzato nella Console : **attivatelo in completa autonomia** sul tenant interessato. Aspettate alcuni minuti prima che sia utilizzabile.

Dall'elenco dei vostri tenant, l'azione **« Modifica i prodotti »** apre il catalogo. Spuntate quelli che volete attivare, deselezionate quelli che volete disattivare, poi **Salvate**.

Se non viene visualizzato, significa che non è ancora presente nel vostro catalogo : vedere [Demander un produit supplémentaire](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Fermare un prodotto

È possibile disattivare un prodotto di cui non si fa più uso e la fatturazione si interrompe di conseguenza.

Viene eseguita una verifica preliminare: se delle risorse sono ancora in consumo, la disattivazione viene rifiutata e la Console indica cosa sta bloccando l'operazione. Eliminare queste risorse, quindi riprovare.

Si tratta di una misura di protezione: evita di interrompere un servizio ancora in uso e di perderne i dati.

### Aggiungere un indirizzo IP

L'**aggiunta** si effettua dalla Console, in **Amministrazione > Accesso**. La pagina elenca gli indirizzi pubblici autorizzati; il pulsante **« Aggiungi un IP »** ne dichiara uno nuovo, in notazione CIDR, con una descrizione.

È necessario il diritto `console_public_access_read` per consultare l'elenco e `console_public_access_write` per arricchirlo.

Contate circa **una decina di minuti** prima che il nuovo indirizzo diventi effettivo.

:::caution[Questa lista è quella della vostra organizzazione]
Esiste un solo elenco per l'intera organizzazione. La pagina è raggiungibile da un tenant, ma **un indirizzo aggiunto lì autorizza l'accesso alla Console per l'intera organizzazione**, non solo per quel tenant.
:::

La **rimozione** di un indirizzo, invece, passa tramite una **richiesta di supporto** dalla Console. È una scelta deliberata: revocare un accesso è un'operazione irreversibile per chi si connette dietro quell'indirizzo.

<img src={orgAccess} />

### Cambiare un responsabile

Il proprietario dell'organizzazione gestisce gli utenti e i loro diritti direttamente dalla Console: vedere [Identités et accès](/console/iam).

Può anche **delegare** i propri diritti a un partner esterno o a un project manager di Cloud Temple: utile se si affida la gestione a un terzo.

---

## Le e-mail che ricevete {/* #les-courriels-que-vous-recevez */}

Un'unica e-mail richiede un'azione da parte vostra.

### L'email di creazione account

| | |
| --- | --- |
| **Mittente** | `shiva.support@cloud-temple.com` |
| **Chi lo riceve** | Il proprietario dell'organizzazione, poi ogni proprietario di tenant che non ha ancora un account |
| **Cosa contiene** | Un link per scegliere la password e attivare il secondo fattore (OTP) |
| **Quando** | Qualche minuto dopo la creazione |
| **Validità** | **96 ore** |

:::warning[Link scaduto?]
Oltre le 96 ore, il link non funziona più. Si tratta di una misura di sicurezza, non di un guasto.

Scrivi a **`shiva.support@cloud-temple.com`** : te ne inviamo uno nuovo.

È l'unico canale utilizzabile a questo stadio: senza accesso alla Console, non puoi ancora aprire una richiesta.
:::

:::note[Niente ricevuto?]
Controlla la posta indesiderata: il messaggio viene talvolta filtrato. Viene inviato da **`shiva.support@cloud-temple.com`** : autorizza questo indirizzo nella tua casella di posta. Se non hai ricevuto nulla entro un'ora, contattaci allo stesso indirizzo.
:::

---

## I prodotti {/* #les-produits */}

### Quello che attivate voi stessi

Nessun prodotto viene attivato di default, né alla creazione della vostra organizzazione, né a quella di un tenant. Quattro prodotti sono invece **disponibili** nella vostra Console sin dall'apertura: li attivate voi stessi, sul tenant di vostra scelta. Sono **fatturati in base all'utilizzo**, senza impegno di volume né soglia da negoziare: pagate solo ciò che consumate.

| Prodotto | A cosa serve | Maggiori informazioni |
| --- | --- | --- |
| **VM Instances** | Macchine virtuali on demand | [Documentazione](/public_cloud/vm_instances) |
| **VPC** | Una rete privata virtuale | [Documentazione](/network/vpc) |
| **LLMaaS** | Modelli di IA sovrani | [Documentazione](/llmaas) |
| **Object Storage** | Archiviazione compatibile S3 | [Documentazione](/storage/oss) |

### Il resto del catalogo

Questi prodotti vengono attivati nell'ambito del vostro contratto, con il vostro referente commerciale:

- [IaaS VMware](/iaas_vmware) et [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) et [Kubernetes managé](/managed_kubernetes)
- Database gestiti : [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) et [Internet](/network/internet)
- [Marketplace](/marketplace)

Panoramica : [nos produits](/managedproducts_overview).

---

## Richiedere un prodotto aggiuntivo {/* #demander-un-produit-supplémentaire */}

Il prodotto che desiderate non compare nella vostra Console? Non è ancora presente nel vostro catalogo.

1. Dalla Console, create una **richiesta di supporto**
2. Indicate il **prodotto** interessato e il volume previsto, se lo conoscete
3. Vi ricontatteremo per le condizioni
4. Una volta validato, il prodotto comparirà nella vostra Console
5. Potete attivarlo su uno o più tenant

<img src={supportSelectProduct} />

### Cambiare livello di supporto

Esistono tre livelli, presentati sul [nostro sito](https://www.cloud-temple.com/produits/niveaux-de-support).

È possibile salire o scendere di livello: fatene richiesta tramite il supporto dalla Console, oppure al vostro referente commerciale.

---

## Domande frequenti

**Quanto tempo richiede la creazione di un ambiente?**
Alcuni minuti, in tutti e tre i casi. La creazione è automatica, sia per il vostro primo accesso che per un nuovo ambiente.

**Quanti tenant posso creare?**
Quanti ne sono necessari, nelle condizioni del vostro contratto.

**Il mio progetto contiene dati sanitari o dati sensibili. Posso iscrivermi online?**
Sì. Segnalatelo nel modulo: la vostra organizzazione viene creata normalmente e i nostri team vi accompagneranno nell'apertura dei servizi interessati.

**Posso delegare la gestione a un fornitore esterno?**
Sì. Il proprietario dell'organizzazione può delegare i propri diritti a un partner esterno o a un project manager Cloud Temple.

**Ho dimenticato un indirizzo IP, non riesco più a connettermi.**
Se un collega della vostra organizzazione ha ancora accesso alla Console, aggiunge l'indirizzo da **Amministrazione > Accessi**. Se nessuno ha più accesso, scrivete a **`shiva.support@cloud-temple.com`**: è il canale di emergenza quando la Console è irraggiungibile.

**Ho appena attivato un prodotto, non lo vedo ancora.**
Aspettate qualche minuto. Se non compare ancora, contattate il supporto.

---

## Andare oltre

<div class="card-grid">
  <div class="card">
    <h3>Prima presa in mano della Console</h3>
    <p>Un tour completo dell'interfaccia: tenant, utenti, accessi, costi.</p>
    <a href="./console_quickstart" class="card-link">Avviare il Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Identità e accessi</h3>
    <p>Invitate i vostri collaboratori e assegnate i loro diritti, tenant per tenant.</p>
    <a href="./iam" class="card-link">Esplorare l'IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Ordinare risorse</h3>
    <p>Distribuite le vostre prime risorse e seguite la loro disponibilità.</p>
    <a href="./orders" class="card-link">Vedere gli ordini &rarr;</a>
  </div>
  <div class="card">
    <h3>Fatturazione</h3>
    <p>Seguite il vostro consumo per tenant e per prodotto, nel corso del mese.</p>
    <a href="./billing/concepts" class="card-link">Accedere al modulo &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilità condivise</h3>
    <p>Quello che Cloud Temple gestisce, ciò che resta a vostro carico.</p>
    <a href="../shared-responsibility" class="card-link">Leggere il modello &rarr;</a>
  </div>
  <div class="card">
    <h3>Impegni e SLA</h3>
    <p>Livelli di servizio, disponibilità e condizioni contrattuali.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">Consultare gli impegni &rarr;</a>
  </div>
</div>