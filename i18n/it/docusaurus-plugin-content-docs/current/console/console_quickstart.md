---
title: Quickstart
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaLogsDetail from '@site/docs/console/images/shiva_logs_detail.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

## Prerequisiti

- Avere sottoscritto un prodotto Cloud Temple. Per sottoscrivere, è possibile [contattarci](https://www.cloud-temple.com/contactez-nous/) o via e-mail all'indirizzo __contact@cloud-temple.com__.
- Avere un accesso alla Console
- Avere il proprio indirizzo IPv4 pubblico dichiarato nella zona di fiducia Cloud Temple (l'accesso alla Console è limitato agli indirizzi di fiducia identificati)

## Connessione al proprio tenant Cloud Temple

La Console è accessibile tramite l'URL seguente: [Console](https://shiva.cloud-temple.com) oppure tramite l'URL diretto che vi è stato comunicato via e-mail.

La prima pagina consente di selezionare [l'organizzazione](iam/concepts.md#organizzazioni) in cui è stato creato il proprio utente.
Una volta inserita l'organizzazione, fare clic su __'Accedi'__.

<img src={shivaLogin} />

Verrà quindi reindirizzati a una pagina che richiede l'autenticazione.
Una volta connessi, si arriva a questa pagina.

Qui si trovano tutte le metriche relative ai prodotti sottoscritti nel proprio perimetro. In caso di problema(i) sui prodotti VMware e/o OpenIaaS, verranno visualizzate delle alert; il colore è legato alla loro importanza.

<img src={shivaHome} />

## Vista organizzazione

:::info
La **vista organizzazione** è riservata ai **proprietari dell'organizzazione**.
:::

La **vista organizzazione** raggruppa le funzioni di gestione della propria entità nella Console Cloud Temple: gestione dei tenant, degli utenti e delle loro permissioni, controllo degli accessi e monitoraggio del consumo. Un'organizzazione federizza uno o più **tenant** (ambienti cloud isolati) e le permissioni degli utenti sono soggette a una **segregazione per tenant**.

:::info
Questa sezione descrive l'**interfaccia**: dove trovare ciascuna funzione e cosa consente. La documentazione di **riferimento** del modello organizzazione / tenant e delle permissioni si trova nel modulo [IAM](iam/concepts.md).
:::

### Barra superiore e selezione del tenant di lavoro

In alto nella Console, la barra superiore visualizza l'organizzazione corrente (**« La mia organizzazione »**). Il selettore associato apre l'elenco **« I miei tenant »**: ogni tenant vi è riportato, accompagnato, se del caso, dal badge **SecNumCloud** quando è qualificato.

Per **scegliere il tenant di lavoro**, due possibilità:

- dalla barra superiore, aprire il selettore **« I miei tenant »** e fare clic sul tenant desiderato;
- dalla pagina **Tenant**, utilizzare l'azione **« Connetti al tenant »** di una riga.

Le risorse tecniche (calcolo, archiviazione, rete…) sono **proprie di ciascun tenant** e non sono condivise tra tenant.

<img src={imgSelector} />

### Dashboard

La **Dashboard** è la pagina di benvenuto dell'organizzazione. Presenta una sintesi trasversale:

- lo stato dei **fascicoli di supporto** (aperti, risposte richieste, validazione cliente, incidenti);
- il **numero di tenant** dell'organizzazione;
- un **anteprima dei costi** (costo del mese in corso, ripartizione per tenant e per servizio).

<img src={imgDashboard} />

### Amministrazione dell'organizzazione

La sezione **Amministrazione** della navigazione a sinistra raggruppa le pagine di governance dell'organizzazione.

| Pagina | Ruolo |
|---|---|
| **Tenant** | Creare e far evolvere i tenant |
| **Utenti** | Gestire gli account e le loro permissioni |
| **Accessi** | Elenco degli IP pubblici autorizzati (whitelist) |
| **Log** | Registro delle attività (tracciabilità) |
| **Supporto** | Ticket dell'organizzazione |

Il **Gestore dei costi** (fuori dalla sezione Amministrazione) fornisce il monitoraggio del consumo.

### Tenant

La pagina **Tenant** elenca l'insieme dei tenant dell'organizzazione. Una barra di ricerca e la paginazione facilitano la navigazione quando i tenant sono numerosi.

#### Creare un tenant

Il pulsante **« Nuovo tenant »** apre un modulo in due parti:

- **Identità del tenant**: il **nome** (controllato in tempo reale) e una **descrizione**;
- **Prodotti del tenant**: i prodotti da attivare sul tenant. I pulsanti **« Seleziona tutto »** / **« Deseleziona tutto »** accelerano l'inserimento.

Confermare con **« Crea »**: il tenant viene inizializzato con i prodotti selezionati.

#### Azioni su un tenant

Il menu delle azioni di ciascuna riga propone:

- **Connetti al tenant** — definisce questo tenant come tenant di lavoro;
- **Modifica prodotti** — attiva o disattiva dei prodotti sul tenant, per far evolvere il suo perimetro;
- **Copia UUID** — copia l'identificativo tecnico del tenant (utile per l'API o un ticket di supporto).

#### Proprietari e ciclo di vita

- **Creazione**: in self-service tramite **« Nuovo tenant »**.
- **Evoluzione**: aggiunta o rimozione di prodotti tramite **« Modifica prodotti »**.
- **Proprietari di tenant**: ciascun tenant ha almeno un proprietario. Le regole (numero consigliato, délai di propagazione, rimozione su richiesta di supporto, permissioni di un proprietario) sono dettagliate nel modulo [IAM](iam/concepts.md).

:::info
Le operazioni sui tenant sono tracciate nella pagina **Log** (ad esempio « *Creating tenant…* » o « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Utenti e permissioni

La pagina **Utenti** elenca gli account dell'organizzazione. Le credenziali sono **globali all'organizzazione**; le permissioni, invece, si definiscono **per tenant**.

Per ciascun account vengono visualizzati il **nome**, l'**e-mail**, il **tipo** di account — **Account federato** (registro di identità esterno) o **Account locale** — e dei riferimenti visivi: **Proprietario dell'organizzazione**, **Io**, o **E-mail non verificata** (account non finalizzato).

#### Strumenti della pagina

- **Filtri**: per **Proprietari dell'organizzazione**, **Tipo**, **Origine** e **Stato**.
- **Esporta CSV**: esportazione dell'elenco degli utenti e dei loro accessi, utile per l'audit.

#### Azioni su un account

Il menu delle azioni propone, a seconda dello stato dell'account:

- **Aggiungi come proprietario dell'organizzazione**;
- **Riinvio** — rinvia l'invito a un account non finalizzato;
- **Copia UUID**;
- **Elimina**.

:::note
Non è possibile eliminare se stessi. L'**invito** di un nuovo utente e l'**assegnazione fine delle permissioni per tenant** sono descritti nel modulo [IAM](iam/quickstart.md).
:::

#### Proprietario dell'organizzazione e proprietario di tenant

Queste sono due nozioni distinte:

- il **proprietario dell'organizzazione** si aggiunge dalla pagina **Utenti** (azione « Aggiungi come proprietario dell'organizzazione »); la sua **rimozione avviene su richiesta di supporto**;
- il **proprietario di tenant** rientra nel perimetro di un tenant; le sue regole sono descritte nel modulo [IAM](iam/concepts.md).

:::info
In qualità di **proprietario dell'organizzazione**, si è di default **proprietario di tutti i tenant** dell'organizzazione. A questo titolo, si dispone dell'insieme delle permissioni su ciascuno di questi tenant. Al contrario, se questo ruolo viene rimosso, si **non perde** queste permissioni: esse restano acquisite sui tenant interessati.
:::

<img src={imgUsers} />

### Accessi — whitelist IP

La pagina **Accessi** gestisce l'**elenco degli indirizzi IP pubblici autorizzati** a raggiungere la Console. In conformità ai requisiti **SecNumCloud**, solo il traffico proveniente da questi indirizzi è accettato.

- Ciascuna voce associa un **IP** (notazione CIDR) a una **descrizione**.
- Il pulsante **« Aggiungi un IP »** consente di aggiungere un indirizzo all'elenco.

:::warning
La **rimozione** di un IP autorizzato avviene su **richiesta di supporto**.
:::

<img src={imgAccess} />

### Report di consumo — Gestore dei costi

Il **Gestore dei costi** offre una vista del consumo dell'organizzazione, ripartita per tenant. Propone due schede.

#### Scheda « Anteprima »

Vista sintetica del mese in corso:

- indicatori chiave: **costo del mese in corso**, **costo dell'anno in corso**, **numero di prodotti attivi**;
- **Costo per tenant** — ripartizione dei costi tra i tenant;
- **Costo attuale per servizio** e **Costo attuale per prodotto** — principali voci di consumo.

#### Scheda « Consumo »

Report dettagliato e storico:

- selezione del **periodo** (mese di inizio e di fine) e dell'asse **« Visualizza per »** ;
- viste **Consumo mensile**, **Totale**, **Previsione** e **Tendenza**;
- tabella espandibile per **Mese / Tenant / Servizio / Prodotto / Importo**, con la **tendenza** rispetto al mese precedente.

:::info
L'importo del mese in corso è **previsionale**: è stimato a partire dai giorni già consumati.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Tracciamento e supporto

- **Log** — la pagina **Attività** ripercorre le operazioni di lettura e scrittura dell'organizzazione (schede **Recenti** / **Archiviati**, filtri, esportazione CSV) a fini di tracciabilità. Vedere anche la sezione [Tracciamento — Monitoraggio delle Attività](#registrazione---monitoraggio-delle-attività) qui sotto.
- **Supporto** — la pagina **Supporto** centralizza i **ticket dell'organizzazione** (indicatori, creazione di ticket, filtri, esportazione). La creazione e il monitoraggio delle richieste sono descritti nella sezione [Accesso al supporto tecnico](#accesso-al-supporto-tecnico) qui sotto.

## Gestione della lingua

La console è disponibile in __francese__, __inglese__. È possibile cambiare la lingua di funzionamento grazie all'icona __lingua__ situata in alto a destra dello schermo.

Il cambio di lingua di un utente va effettuato nel proprio __'Profilo'__, in alto a destra dello schermo, nei __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione è fatta per ciascun tenant [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, è possibile contattare __il team di supporto Cloud Temple__ tramite __l'icona 'boetta'__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Si verrà guidati durante tutto il processo di richiesta di supporto.

Il primo passo è l'identificazione del tipo di richiesta di supporto:

- Richiedere un consiglio sull'utilizzo di un prodotto (fuori incidente),
- Richiedere un'assistenza in relazione al proprio account cliente,
- Dichiarare un incidente o richiedere un supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (messa a disposizione di un ingegnere Cloud Temple su una problematica).

<img src={shivaSupport_01} />

Si ha quindi la possibilità di fornire dei dettagli e di allegare dei file (immagine o log, ad esempio).

Il richiedente può anche precisare un livello di criticità (P1 a P5) nella descrizione del ticket, nel caso di un incidente di sicurezza, come ad esempio:

<img src={shivaSupportCriticities} />

__CRITICA (P1)__:

- Sospetto di fuga di dati sensibili
- Rilevamento di un accesso non autorizzato ai propri dati
- Compromissione delle proprie credenziali di amministrazione
- Indisponibilità totale dei propri servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati a carattere personale

__ALTA (P2)h__:

- Malfunzionamento degli accessi degli utenti
- Anomalia nella cifratura dei propri dati
- Perdita di accesso a determinate funzionalità critiche
- Incoerenza nei dati
- Lentezze maggiori che impattano l'attività

__MEDIA (P3)__:

- Problema di performance localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso puntuale

__BASSA (P4)__:

- Richiesta di indagine
- Anomalia senza impatto diretto
- Domanda di conformità
- Esigenza di chiarimento tecnico

__SERVIZIO OPERATIVO (P5)__:

- Servizio operativo senza rischio immediato

<img src={shivaSupport_02} />

Una volta effettuata la propria richiesta, è possibile ritrovare le proprie richieste tramite __l'icona 'boetta'__ situata in alto a destra dello schermo:

<img src={shivaSupport_03} />

## Accesso alle funzionalità utente tramite l'interfaccia web

L'insieme delle funzionalità accessibili al vostro utente (in base ai suoi permessi) si trova a sinistra dello schermo, nella barra verde.
Le funzionalità sono raggruppate per modulo. Questo raggruppa principalmente :

- L'__inventario__ delle vostre risorse,
- Il __monitoraggio delle operazioni__,
- La __gestione delle risorse IaaS__ (Calcolo, archiviazione, rete, ...)
- La __gestione delle risorse OpenIaaS__ (Calcolo, archiviazione, rete, ...)
- L'accesso ai __servizi accessori__ (Bastion, monitoring, ...)
- L'__amministrazione della vostra organizzazione__ (Gestione dei tenant, dei permessi, ...)

L'attivazione di un modulo per un utente dipende dai permessi dell'utente. Ad esempio il modulo __'Commande'__ non sarà disponibile se l'utente non dispone del permesso __'ORDER'__.

Di seguito una presentazione dei diversi moduli disponibili. Nuovi moduli arricchiscono regolarmente la console :
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : permette di avere rapidamente una visione del __totale delle risorse di calcolo e di archiviazione__, le statistiche del __backup__ e una __sintesi dei ticket di supporto__,
- __Inventario__ : permette di avere una visione di tutte le vostre risorse di tipo __'macchine virtuali'__. Se i __tag__ vengono utilizzati, permette di avere una visione per __tag__ (ad esempio, visione business, visione applicativa, ...),
- __Infogérance__ : dà accesso al monitoraggio delle vostre __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__ : permette la __gestione delle infrastrutture IaaS VMware__ (Macchine virtuali, cluster, hypervisor, repliche, backup, ...),
- __OpenIaaS__ : permette la __gestione delle risorse Xen Orchestra__ (Macchine virtuali, backup, ...),
- __OpenShift__ : permette la gestione della vostra **architettura PaaS RedHat OpenShift** e il management dei vostri container sulle 3 zone di disponibilità della piattaforma.
- __Bastion__ : Permette di distribuire e gestire appliance bastion SSH/RDP nelle vostre reti,
- __Rete__ : permette la gestione delle __reti di livello 2 e 3__, degli __IP pubblici__ e dei vostri __circuiti telecom__,
- __Colocation__ : Offre la visione degli equipment situati in zona di __collocation mutualizzata o dedicata__,
- __Ordine__ : Permette l'ordine di risorse e il monitoraggio dei deployment,
- __Amministrazione__ : Raggruppa le funzioni di amministrazione degli utenti e dei tenant nonché l'accesso alla registrazione globale.
</div>
</div>
I piktogrammi __'NEW'__ significano che il prodotto in questione è stato provisionato ma non è ancora qualificato __offerta SecNumCloud__ e __'BETA'__ significano che il prodotto in questione è stato provisionato e viene appena qualificato __offerta SecNumCloud__.

## Registrazione - Monitoraggio delle Attività

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e di scrittura effettuate all'interno della console, garantendo così una tracciabilità e una sicurezza accresciute. Evidenzia le due schede principali : Recenti e Archiviati.

<img src={shivaLogs} />

È possibile aprire il dettaglio di un log espandendo la sua riga.

<img src={shivaLogsDetail} />

### __Struttura della Pagina__

#### __Schede__

- __Recenti__

- Operazioni recenti
- Monitoraggio in tempo reale

- __Archiviati__

- Operazioni su un periodo più lungo
- Operazioni archiviate per tracciabilità e conformità

#### __Informazioni Visualizzate__

- Data e Ora

- Tipo di operazione
  - Lo stato
- Utente
- Descrizione dell'operazione

#### __Funzionalità__

- Ricerca/Filtraggio per operazioni specifiche

### __Utilizzo__

- __Accesso :__ permesso `activity_read`
- __Navigazione :__
  - Selezionate la scheda "Recenti" per le operazioni in tempo reale.
  - Scegliete "Archiviati" per consultare lo storico.
  - Utilizzate le funzionalità di ricerca e di filtraggio per localizzare operazioni specifiche.

#### __Nota di Conformità__

Conformemente alla qualificazione SecNumCloud, lo storage degli eventi della console Cloud Temple ha una durata minima di __6 mesi__, garantendo così il rispetto dei requisiti di sicurezza e di tracciabilità.

## Consultazione degli ultimi aggiornamenti

Fate clic in basso a sinistra della barra verde sull'icona __'Novità'__. Avrete il dettaglio delle modifiche per ogni versione della console Cloud Temple.

<img src={shivaOnboard_009} />

## Accesso alle funzionalità utente tramite l'API

L'accesso a tutte le funzionalità della Console è possibile tramite l'API Console. Potete avere il dettaglio dei verbi e delle configurazioni tramite __'Profil'__ e __'APIs'__ :

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple mette a vostra disposizione un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) per gestire *"as code"* la vostra piattaforma Cloud.
