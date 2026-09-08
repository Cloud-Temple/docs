---
title: Onboarding
description: "Crea la tua organizzazione, configura i tuoi ambienti e attiva i tuoi prodotti: il processo di configurazione sulla piattaforma Cloud Temple, dalla registrazione al primo deployment."
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

Crei la tua organizzazione tramite un modulo online, in pochi minuti. I tuoi ambienti vengono quindi creati con un clic dalla Console. Puoi attivare e disattivare prodotti in completa autonomia, fatturati in base all'utilizzo. Il tutto su un'infrastruttura sovrana, gestita in Francia. La Console indica, tenant per tenant e prodotto per prodotto, ciò che rientra nella qualificazione **SecNumCloud**.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## Cosa ottieni iscrivendoti

- **Senza attese** : basta un modulo. La tua organizzazione viene creata automaticamente, in pochi minuti, senza intervento dei nostri team.
- **Senza impegno di volume** : i prodotti in self-service sono fatturati in base all'utilizzo.
- **Senza addendum** : apri nuovi ambienti con il tuo contratto esistente, nelle condizioni da esso previste.
- **Sovrano per progettazione** : infrastruttura gestita in Francia e un perimetro di qualificazione **SecNumCloud** identificato nella Console.

## I tre percorsi

Questa pagina descrive questa configurazione, dall'inizio alla fine.

<div class="card-grid">
  <div class="card">
    <h3>Creare la vostra organizzazione</h3>
    <p>Il modulo di registrazione online e ciò che viene attivato in background.</p>
    <a href="#percorso-1-creare-la-vostra-organizzazione" class="card-link">Inizia &rarr;</a>
  </div>
  <div class="card">
    <h3>Aggiungere un ambiente</h3>
    <p>Un nuovo tenant dalla Console, in pochi minuti e in autonomia.</p>
    <a href="#percorso-2-aggiungere-un-ambiente" class="card-link">Scopri come &rarr;</a>
  </div>
  <div class="card">
    <h3>Fare evolvere un ambiente</h3>
    <p>Attivare un prodotto, aprire un accesso, delegare la gestione a un terzo.</p>
    <a href="#percorso-3-fare-evolvere-un-ambiente" class="card-link">Esplora &rarr;</a>
  </div>
</div>

## Il vocabolario, in due parole

L'intera piattaforma si basa su due livelli.

**La vostra organizzazione** siete voi: la vostra azienda. Su di essa è registrato il contratto e la fatturazione.

**Un tenant** è un ambiente di lavoro all'interno della vostra organizzazione. È possibile averne più di uno, isolati gli uni dagli altri.

```
La vostra organizzazione
├── Tenant «production»
├── Tenant «recette»
└── Tenant «lab»
```

Nello specifico: firmate **un** contratto e create i vostri ambienti nelle condizioni da esso previste, senza mai mescolare i dati tra di essi. Creare un ambiente di test, isolare una filiale o allestire un laboratorio non richiede alcun addendum contrattuale.

Due ruoli ricevono gli accessi:

- il **proprietario dell'organizzazione** accede a tutto e invita gli altri utenti
- il **proprietario di un tenant** accede a questo ambiente

Può trattarsi della stessa persona.

---

## Percorso 1. Creare la vostra organizzazione

Questo è il vostro punto di accesso alla piattaforma. Si verifica una sola volta e viene eseguito online.

### Il modulo di registrazione

La vostra configurazione inizia con un **modulo di registrazione online**, a cui il vostro referente Cloud Temple vi fornirà l'accesso.

È breve e si compila in un solo passaggio. Vi richiede quattro informazioni.

**Chi siete.** Il nome della vostra organizzazione, la sua forma giuridica, il paese di stabilimento e il numero SIREN.

**Chi gestirà la piattaforma.** Nome, cognome e indirizzo email professionale della persona che sarà **proprietaria dell'organizzazione**. Sarà questa persona a ricevere le credenziali di accesso e a invitare successivamente i propri collaboratori.

**Cosa vi inserirete.** Il vostro settore di attività e la natura dei dati che il vostro progetto elaborerà: dati sanitari, dati personali, dati finanziari, dati sensibili.

**Da dove vi connetterete.** Gli indirizzi IP pubblici autorizzati ad accedere alla vostra Console.

:::caution[Gli indirizzi IP non sono facoltativi]
Solo gli indirizzi che dichiarerete potranno accedere alla Console.

Ricordatevi di includere **tutti** i vostri siti e le uscite VPN. Un'omissione non è definitiva: l'elenco potrà essere successivamente aggiornato autonomamente dalla Console.
:::

Concluderete attestando di essere autorizzati a impegnare la vostra organizzazione e accettando le **[conditions générales](/contracts)**.

### Cosa succede successivamente

Tutto è automatico. La vostra organizzazione viene creata in base alle informazioni che avete inserito e il vostro spazio viene configurato nei minuti successivi : la vostra directory delle identità, il vostro primo ambiente, i vostri accessi.

Non è necessario compiere alcuna azione durante questo periodo.

:::tip[Questo primo ambiente viene fornito vuoto]
L'ambiente creato dalla vostra registrazione non ha **nessun prodotto attivato** : viene configurato dal nostro sistema automatizzato, senza modulo, quindi senza possibilità di selezione. È una scelta deliberata: non inizierà alcuna fatturazione finché non attiverete personalmente un prodotto.

I quattro prodotti in self-service sono **disponibili** nella vostra Console fin dall'apertura. Disponibile non significa attivato : li attivate quando lo decidete, vedere [Les produits](#i-prodotti).
:::

### Cosa riceverai

Un'e-mail di **creazione account**, indirizzata al proprietario designato. In essa imposterai la tua password e attiverai il secondo fattore di autenticazione.

Dettagli: [Le e-mail che ricevi](#le-e-mail-che-ricevi).

### Sei connesso

Accedi alla Console all'indirizzo [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Puoi quindi invitare i tuoi collaboratori e assegnare loro dei diritti: vedi [Identità e accessi](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[E la parte contrattuale?]
Non ti impedisce di procedere. Le informazioni amministrative e di fatturazione: dati di fatturazione, modalità di pagamento e riferimento dell'ordine di acquisto vengono completate in parallelo con il tuo referente Cloud Temple. Non è necessario attendere che vengano finalizzate per iniziare a utilizzare la piattaforma.
:::

---

## Percorso 2. Aggiungere un ambiente

Hai già un'organizzazione e desideri un nuovo ambiente, per un ambiente di test, un nuovo progetto o una filiale.

**Esegui tutto dalla Console, secondo le condizioni del tuo contratto. Non è necessario alcun contatto con il nostro supporto.**

### I passaggi

1. Dalla Console, creare un **nuovo tenant** dalla scheda **Tenants**.
2. Assegnargli un **nome** significativo: *produzione*, *test*, il nome di un progetto.
3. Il creatore del tenant ne diventa automaticamente il proprietario. Potrà aggiungere altri responsabili successivamente, tramite la scheda **Utenti**, una volta connesso al tenant.
4. Selezionare i **prodotti** da attivare.

<img src={tenantNew} />

### Cosa succede successivamente

Il tuo ambiente viene configurato automaticamente in pochi minuti. Non devi fare nulla.

Se il proprietario del tenant non dispone ancora di un account, riceverà l'email per la creazione dell'account. Se ne possiede già uno, accederà al nuovo ambiente senza necessità di un nuovo invito.

:::tip[Nessun prodotto è attivato automaticamente]
Selezioni i prodotti del tenant **già nel modulo di creazione** (il passaggio 4 sopra) e puoi modificare questo perimetro in qualsiasi momento. Nessun prodotto viene abilitato senza che tu lo abbia selezionato: paghi solo ciò che consumi.
:::

---

## Percorso 3. Fare evolvere un ambiente

Le vostre esigenze cambiano. Ecco come fare evolvere un ambiente esistente.

### Attivare un prodotto

Se il prodotto fa parte del vostro catalogo, viene visualizzato nella Console: **attivatelo in completa autonomia** sul tenant interessato. Attendete alcuni minuti prima che sia utilizzabile.

Dall'elenco dei vostri tenant, l'azione **« Modifica prodotti »** apre il catalogo. Selezionate quelli che volete attivare, deselezionate quelli che volete disattivare, quindi **Salva**.

Se non viene visualizzato, significa che non è ancora presente nel vostro catalogo: vedere [Richiedere un prodotto aggiuntivo](#richiedere-un-prodotto-aggiuntivo).

<img src={tenantProductsEdit} />

### Disattivare un prodotto

È possibile disattivare un prodotto che non si utilizza più e la fatturazione si interrompe di conseguenza.

Viene effettuata una verifica preliminare: se le risorse sono ancora in consumo, la disattivazione viene rifiutata e la Console indica il motivo del blocco. Eliminate queste risorse, quindi riprovate.

Si tratta di una misura di protezione: evita di interrompere un servizio ancora in uso e di perdere i relativi dati.

### Aggiungere un indirizzo IP

L'**aggiunta** viene effettuata dalla Console, in **Amministrazione > Accesso**. La pagina elenca gli indirizzi pubblici autorizzati; il pulsante **« Aggiungi un IP »** ne dichiara uno nuovo, in notazione CIDR, con una descrizione.

È necessario il permesso `console_public_access_read` per visualizzare l'elenco e `console_public_access_write` per ampliarlo.

Prevedere circa **dieci minuti** prima che il nuovo indirizzo diventi effettivo.

:::caution[Questo elenco è relativo alla vostra organizzazione]
Esiste un unico elenco per l'intera organizzazione. La pagina è accessibile da un tenant, ma **un indirizzo aggiunto qui autorizza l'accesso alla Console per l'intera organizzazione**, non solo per questo tenant.
:::

La **rimozione** di un indirizzo, invece, avviene tramite una **richiesta di supporto** dalla Console. È una scelta deliberata: revocare un accesso è un'operazione irreversibile per gli utenti che si connettono da tale indirizzo.

<img src={orgAccess} />

### Cambiare un responsabile

Il proprietario dell'organizzazione gestisce gli utenti e i loro diritti direttamente dalla Console: vedere [Identités et accès](/console/iam).

Può anche **delegare** i propri diritti a un partner esterno o a un responsabile di progetto Cloud Temple: utile se si affida la gestione operativa a un terzo.

---

## Le e-mail che ricevi

Solo un'e-mail richiede un'azione da parte tua.

### L'e-mail di creazione account

| | |
| --- | --- |
| **Mittente** | `shiva.support@cloud-temple.com` |
| **Destinatari** | Il proprietario dell'organizzazione, quindi ogni proprietario di tenant che non ha ancora un account |
| **Contenuto** | Un link per scegliere la password e attivare il secondo fattore (OTP) |
| **Quando** | Qualche minuto dopo la creazione |
| **Validità** | **96 ore** |

:::warning[Link scaduto ?]
Dopo 96 ore, il link non funziona più. Si tratta di una misura di sicurezza, non di un guasto.

Scrivete a **`shiva.support@cloud-temple.com`** : ve ne invieremo uno nuovo.

È l'unico canale utilizzabile a questo stadio: senza accesso alla Console, non potete ancora aprire una richiesta.
:::

:::note[Niente ricevuto ?]
Controllate la cartella spam: il messaggio viene a volte filtrato. Viene inviato da **`shiva.support@cloud-temple.com`**: autorizzate questo indirizzo nella vostra casella di posta. Se non avete ricevuto nulla entro un'ora, contattateci allo stesso indirizzo.
:::

---

## I prodotti

### Cosa attivate voi stessi

Nessun prodotto è attivato automaticamente, né alla creazione della vostra organizzazione, né a quella di un tenant. Quattro prodotti sono invece **disponibili** nella vostra Console fin dall'accesso: li attivate voi stessi, sul tenant di vostra scelta. Sono **fatturati a consumo**, senza impegno sul volume né soglie da negoziare: pagate solo ciò che consumate.

| Prodotto | A cosa serve | Ulteriori informazioni |
| --- | --- | --- |
| **VM Instances** | Macchine virtuali a richiesta | [Documentation](/public_cloud/vm_instances) |
| **VPC** | Una rete privata virtuale | [Documentation](/network/vpc) |
| **LLMaaS** | Modelli di IA sovrani | [Documentation](/llmaas) |
| **Object Storage** | Archiviazione compatibile S3 | [Documentation](/storage/oss) |

### Il resto del catalogo

Questi prodotti sono attivabili nell'ambito del vostro contratto, in collaborazione con il vostro referente commerciale:

- [IaaS VMware](/iaas_vmware) e [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) e [Kubernetes managé](/managed_kubernetes)
- Database gestiti: [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) e [Internet](/network/internet)
- [Marketplace](/marketplace)

Panoramica: [nos produits](/managedproducts_overview).

---

## Richiedere un prodotto aggiuntivo

Il prodotto che desideri non appare nella tua Console? Non è ancora presente nel tuo catalogo.

1. Dalla Console, crea una **richiesta di supporto**
2. Indica il **prodotto** interessato e il volume previsto, se lo conosci
3. Ti ricontatteremo per le condizioni
4. Una volta convalidato, il prodotto apparirà nella tua Console
5. Puoi attivarlo su uno o più tenant

<img src={supportSelectProduct} />

### Cambiare livello di supporto

Esistono tre livelli, presentati sul [nostro sito](https://www.cloud-temple.com/produits/niveaux-de-support).

È possibile passare a un livello superiore o inferiore: effettuate la richiesta tramite il supporto dalla Console o al vostro referente commerciale.

---

## Domande frequenti

**Quanto tempo richiede la creazione di un ambiente ?**
Pochi minuti, in tutti e tre i casi. La creazione è automatica, sia per il primo accesso che per un nuovo ambiente.

**Quanti tenant posso creare ?**
Tanti quanti ne servono, nel rispetto delle condizioni del vostro contratto.

**Il mio progetto contiene dati sanitari o dati sensibili. Posso registrarmi online ?**
Sì. Segnalatelo nel modulo : la vostra organizzazione verrà creata normalmente e i nostri team vi assisteranno nell'attivazione dei servizi interessati.

**Posso affidare la gestione a un fornitore esterno ?**
Sì. Il proprietario dell'organizzazione può delegare i propri diritti a un partner esterno o a un project manager di Cloud Temple.

**Ho dimenticato un indirizzo IP, non riesco più ad accedere.**
Se un collega della vostra organizzazione ha ancora accesso alla Console, può aggiungere l'indirizzo da **Amministrazione > Accesso**. Se nessuno può più accedervi, scrivete a **`shiva.support@cloud-temple.com`** : è il canale di emergenza quando la Console non è accessibile.

**Ho appena attivato un prodotto, ma non lo vedo ancora.**
Attendete qualche minuto. Se non dovesse comparire, contattate il supporto.

---

## Per saperne di più

<div class="card-grid">
  <div class="card">
    <h3>Introduzione alla Console</h3>
    <p>Una panoramica completa dell'interfaccia: tenant, utenti, accessi, costi.</p>
    <a href="./console_quickstart" class="card-link">Avvia il Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Identità e accessi</h3>
    <p>Invita i tuoi collaboratori e assegna i loro diritti, tenant per tenant.</p>
    <a href="./iam" class="card-link">Esplora l'IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Ordinare risorse</h3>
    <p>Distribuisci le tue prime risorse e monitora la loro disponibilità.</p>
    <a href="./orders" class="card-link">Visualizza gli ordini &rarr;</a>
  </div>
  <div class="card">
    <h3>Fatturazione</h3>
    <p>Monitora il tuo consumo per tenant e per prodotto, nel corso del mese.</p>
    <a href="./billing/concepts" class="card-link">Accedi al modulo &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilità condivise</h3>
    <p>Cosa gestisce Cloud Temple e cosa rimane a tuo carico.</p>
    <a href="../shared-responsibility" class="card-link">Leggi il modello &rarr;</a>
  </div>
  <div class="card">
    <h3>Impegni e SLA</h3>
    <p>Livelli di servizio, disponibilità e condizioni contrattuali.</p>
    <a href="../contracts" class="card-link">Consulta gli impegni &rarr;</a>
  </div>
</div>