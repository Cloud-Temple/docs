---
title: Avvio rapido
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

- Avere sottoscritto un prodotto Cloud Temple. Per sottoscriverlo semplicemente, potete [nous contacter](https://www.cloud-temple.com/contactez-nous/) o via e-mail all'indirizzo __contact@cloud-temple.com__.
- Avere accesso alla Console
- Avere il proprio indirizzo IPv4 pubblico dichiarato nella zona attendibile Cloud Temple (l'accesso alla Console è limitato agli indirizzi attendibili identificati)

## Connessione al tuo tenant Cloud Temple

La console è accessibile tramite l'URL sottostante: [Console](https://shiva.cloud-temple.com) oppure dall'URL diretto che vi è stato comunicato via e-mail.

La prima pagina vi consente di selezionare [l'organisation](iam/concepts.md#organizzazioni) in cui è stato creato il vostro utente.
Una volta inserita l'azienda, fate clic su __'Accedi'__.

<img src={shivaLogin} />

Successivamente, verrete reindirizzati a una pagina che vi chiederà di autenticarvi.
Una volta effettuato l'accesso, arriverete su questa pagina.

Qui troverete l'insieme delle metriche relative ai prodotti sottoscritti nel vostro perimetro. In caso di problema(i) sui vostri prodotti VMware e/o OpenIaaS, saranno visibili degli avvisi; il colore è legato alla loro importanza.

<img src={shivaHome} />

## Vista organizzazione

:::info
La **vista organizzazione** è riservata ai **proprietari dell'organizzazione**.
:::

La **vista organizzazione** raggruppa le funzioni di gestione della tua entità nella Console Cloud Temple: gestione dei tenant, degli utenti e delle relative autorizzazioni, controllo degli accessi e monitoraggio del consumo. Un'organizzazione riunisce uno o più **tenant** (ambienti cloud isolati) e le autorizzazioni degli utenti sono soggette a una **segregazione per tenant**.

:::info
Questa sezione descrive l'**interfaccia**: dove trovare ciascuna funzione e cosa essa consente. La documentazione di **riferimento** sul modello organizzazione / tenant e sulle autorizzazioni si trova nel modulo [IAM](iam/concepts.md).
:::

### Intestazione e selezione del tenant di lavoro

Nella parte superiore della Console, l'intestazione visualizza l'organizzazione corrente (**« La mia organizzazione »**). Il selettore associato apre l'elenco **« I miei tenant »**: ogni tenant è presente, accompagnato, se del caso, dal badge **SecNumCloud** quando è certificato.

Per **scegliere il tenant di lavoro**, sono disponibili due opzioni:

- dall'intestazione, aprite il selettore **« I miei tenant »** e fate clic sul tenant desiderato;
- dalla pagina **Tenant**, utilizzate l'azione **« Connetti al tenant »** di una riga.

Le risorse tecniche (calcolo, archiviazione, rete…) sono **dedicate a ciascun tenant** e non vengono condivise tra i tenant.

<img src={imgSelector} />

### Dashboard

Il **Dashboard** è la pagina iniziale dell'organizzazione. Presenta una panoramica trasversale:

- lo stato dei **ticket di supporto** (aperti, risposte richieste, validazione cliente, incidenti);
- il **numero di tenant** dell'organizzazione;
- una **panoramica dei costi** (costo del mese corrente, ripartizione per tenant e per servizio).

<img src={imgDashboard} />

### Amministrazione dell'organizzazione

Il pannello **Amministrazione** nella navigazione a sinistra raggruppa le pagine di governance dell'organizzazione.

| Pagina | Ruolo |
|---|---|
| **Tenants** | Creare e far evolvere i tenants |
| **Utenti** | Gestire gli account e le relative autorizzazioni |
| **Accesso** | Elenco degli indirizzi IP pubblici autorizzati (whitelist) |
| **Log** | Registro delle attività (tracciabilità) |
| **Supporto** | Ticket dell'organizzazione |

Il **Gestore dei costi** (fuori dal pannello Amministrazione) fornisce il monitoraggio dei consumi.

### Tenants

La pagina **Tenants** elenca tutti i tenant dell'organizzazione. Una barra di ricerca e la paginazione facilitano la navigazione quando i tenant sono numerosi.

#### Creare un tenant

Il pulsante **« Nuovo tenant »** apre un modulo in due parti :

- **Identità del tenant** : il **nome** (validato in tempo reale) e una **descrizione** ;
- **Prodotti del tenant** : i prodotti da attivare sul tenant. I pulsanti **« Seleziona tutto »** / **« Deseleziona tutto »** accelerano la selezione.

Conferma con **« Crea »** : il tenant viene inizializzato con i prodotti selezionati.

#### Azioni su un tenant

Il menu delle azioni di ogni riga propone:

- **Connettersi al tenant** — definisce questo tenant come tenant di lavoro;
- **Modifica i prodotti** — attiva o disattiva prodotti sul tenant, per modificarne il perimetro;
- **Copia UUID** — copia l'identificativo tecnico del tenant (utile per l'API o un ticket di supporto).

#### Proprietari e ciclo di vita

- **Creazione** : in self-service tramite **« Nuovo tenant »**.
- **Evoluzione** : aggiunta o rimozione di prodotti tramite **« Modifica prodotti »**.
- **Proprietari del tenant** : ogni tenant ha almeno un proprietario. Le regole (nombre recommandé, délai de propagation, retrait sur demande de support, permissions d'un propriétaire) sono dettagliate nel modulo [IAM](iam/concepts.md).

:::info
Le operazioni sui tenant vengono tracciate nella pagina **Logs** (par exemple « *Creating tenant…* » ou « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Utenti e autorizzazioni

La pagina **Utenti** elenca gli account dell'organizzazione. Le credenziali sono **globali per l'organizzazione**; le autorizzazioni, invece, si definiscono **per tenant**.

Per ogni account vengono visualizzati il **nome**, l'**e-mail**, il **tipo** di account — **Account federato** (repository di identità esterna) o **Account locale** — e degli indicatori visivi: **Proprietario dell'organizzazione**, **Io**, oppure **E-mail non verificata** (account non completato).

#### Strumenti della pagina

- **Filtri** : per **Proprietari dell'organizzazione**, **Tipo**, **Origine** e **Stato**.
- **Esporta CSV** : esportazione dell'elenco degli utenti e dei loro accessi, utile per l'audit.

#### Azioni su un account

Il menu delle azioni propone, a seconda dello stato dell'account :

- **Aggiungi come proprietario dell'organizzazione** ;
- **Reinvio** — reinvia l'invito a un account non completato ;
- **Copia UUID** ;
- **Elimina**.

:::note
Non è possibile eliminare il proprio account. L'**invito** di un nuovo utente e l'**assegnazione granulare delle autorizzazioni per tenant** sono descritti nel modulo [IAM](iam/quickstart.md).
:::

#### Proprietario dell'organizzazione e proprietario del tenant

Si tratta di due concetti distinti:

- il **proprietario dell'organizzazione** viene aggiunto dalla pagina **Utenti** (azione « Aggiungi come proprietario dell'organizzazione »); la sua **rimozione avviene su richiesta al supporto**;
- il **proprietario del tenant** rientra nel perimetro di un tenant; le relative regole sono descritte nel modulo [IAM](iam/concepts.md).

:::info
In qualità di **proprietario dell'organizzazione**, siete per impostazione predefinita **proprietari di tutti i tenant** dell'organizzazione. A questo titolo, disponete di tutte le autorizzazioni su ciascuno di questi tenant. Al contrario, se questo ruolo vi viene revocato, **non perdete** tali autorizzazioni: rimangono acquisite sui tenant interessati.
:::

<img src={imgUsers} />

### Accesso — whitelist IP

La pagina **Accesso** gestisce l'**elenco degli indirizzi IP pubblici autorizzati** per accedere alla Console. In conformità ai requisiti **SecNumCloud**, solo il traffico proveniente da questi indirizzi è accettato.

- Ogni voce associa un **IP** (notation CIDR) a una **descrizione**.
- Il pulsante **« Aggiungi un IP »** consente di aggiungere un indirizzo all'elenco.

:::warning
La **rimozione** di un IP autorizzato viene effettuata su **richiesta al supporto**.
:::

<img src={imgAccess} />

### Rapporto di consumo — Gestore dei costi

Il **Gestore dei costi** fornisce una vista dei consumi dell'organizzazione, suddivisa per tenant. Include due schede.

#### Scheda « Panoramica »

Vista sintetica del mese corrente:

- indicatori chiave: **costo del mese corrente**, **costo dell'anno corrente**, **numero di prodotti attivi** ;
- **Costo per tenant** — ripartizione dei costi tra i tenant ;
- **Costo attuale per servizio** e **Costo attuale per prodotto** — principali voci di consumo.

#### Scheda « Consumo »

Report dettagliato e storico:

- selezione del **periodo** (mese di inizio e di fine) e dell'asse **« Mostra per »** ;
- viste **Consumo mensile**, **Totale**, **Previsione** e **Tendenza** ;
- tabella espandibile per **Mese / Tenant / Servizio / Prodotto / Importo**, con la **tendenza** rispetto al mese precedente.

:::info
L'importo del mese corrente è **previsionale** : viene stimato in base ai giorni già consumati.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Registrazione e supporto

- **Log** — la pagina **Attività** registra le operazioni di lettura e scrittura dell'organizzazione (schede **Recenti** / **Archiviati**, filtri, esportazione CSV) a fini di tracciabilità. Vedere anche la sezione [Registrazione — Monitoraggio delle Attività](#registrazione---monitoraggio-delle-attività) di seguito.
- **Supporto** — la pagina **Supporto** centralizza i **ticket dell'organizzazione** (indicatori, creazione ticket, filtri, esportazione). La creazione e il monitoraggio delle richieste sono descritti nella sezione [Accesso al supporto tecnico](#accesso-al-supporto-tecnico) di seguito.

## Gestione della lingua

La console è disponibile in __francese__, __inglese__. È possibile modificare la lingua di funzionamento tramite l'icona __lingua__ situata in alto a destra dello schermo.

La modifica della lingua di un utente deve essere effettuata nel proprio __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene effettuata per ogni tenant [Tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, puoi contattare __il team di supporto Cloud Temple__ tramite __l'icona "gavetta"__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Verrai guidato durante tutto il processo di richiesta di supporto.

Il primo passo consiste nell'identificare il tipo di richiesta di supporto:

- Richiedere un consiglio sull'utilizzo di un prodotto (esclusi gli incidenti),
- Richiedere un'assistenza relativa al tuo account cliente,
- Segnalare un incidente o richiedere un supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (messa a disposizione di un ingegnere Cloud Temple per una problematica specifica).

<img src={shivaSupport_01} />

Successivamente, avrai la possibilità di fornire dettagli aggiuntivi e allegare file (ad esempio immagini o log).

Il richiedente può inoltre specificare un livello di criticità (da P1 a P5) nella descrizione del ticket, in caso di incidente di sicurezza, come ad esempio:

<img src={shivaSupportCriticities} />

__CRITICO (P1)__:

- Sospetta fuga di dati sensibili
- Rilevamento di un accesso non autorizzato ai tuoi dati
- Compromissione delle tue credenziali di amministrazione
- Indisponibilità totale dei tuoi servizi critici
- Comportamenti anomali sui dati sensibili
- Violazione di dati personali

__ALTA (P2)__:

- Malfunzionamento degli accessi degli utenti
- Anomalia nella crittografia dei tuoi dati
- Perdita di accesso a determinate funzionalità critiche
- Incoerenza nei dati
- Rallentamenti significativi che impattano l'attività

__MEDIA (P3)__:

- Problema di prestazioni localizzato
- Incidente su una funzione non critica
- Errore di configurazione con impatto limitato
- Difficoltà di accesso puntuale

__BASSA (P4)__:

- Richiesta di indagine
- Anomalia senza impatto diretto
- Domanda relativa alla conformità
- Necessità di chiarimenti tecnici

__SERVIZIO OPERATIVO (P5)__:

- Servizio operativo senza rischi immediati

<img src={shivaSupport_02} />

Una volta effettuata la tua richiesta, sarà possibile visualizzare le tue richieste tramite __l'icona "gavetta"__ situata in alto a destra dello schermo:

<img src={shivaSupport_03} />

## Accesso alle funzionalità utente tramite l'interfaccia web

L'insieme delle funzionalità accessibili all'utente (en fonction de ses droits) si trova a sinistra dello schermo, nella barra verde.
Le funzionalità sono raggruppate per modulo. Questo include principalmente :

- L'__inventario__ delle risorse,
- Il __monitoraggio delle operazioni__,
- Il __controllo delle risorse IaaS__ (Calcul, stockage, réseau, ...)
- Il __controllo delle risorse OpenIaaS__ (Calcul, stockage, réseau, ...)
- L'accesso ai __servizi accessori__ (Bastion, monitoring, ...)
- L'__amministrazione dell'organizzazione__ (Gestion des tenants, des droits, ...)

L'attivazione di un modulo per un utente dipende dai diritti dell'utente. Ad esempio il modulo __'Commande'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Di seguito una panoramica dei vari moduli disponibili. Nuovi moduli arricchiscono regolarmente la console :
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : consente di avere rapidamente una panoramica sul __totale delle risorse di calcolo e archiviazione__, le statistiche del __backup__ e una __sintesi delle pratiche di supporto__,
- __Inventario__ : consente di visualizzare l'insieme delle risorse di tipo __'macchine virtuali'__. Se vengono utilizzati i __tag__, permette di avere una vista per __tag__ (par exemple, vue métier, vue applicatif, ...),
- __Managed Services__ : dà accesso al monitoraggio delle tue __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__ : consente il __controllo delle infrastrutture IaaS VMware__ (Machines virtuelles, clusters, hyperviseurs, réplications, sauvegarde, ...),
- __OpenIaaS__ : consente il __controllo delle risorse Xen Orchestra__ (Machines virtuelles, sauvegarde, ...),
- __OpenShift__ : consente il controllo della tua **architettura PaaS RedHat OpenShift** e la gestione dei tuoi container sulle 3 zone di disponibilità della piattaforma.
- __Bastion__ : Consente di distribuire e controllare appliance bastion SSH/RDP nelle tue reti,
- __Rete__ : consente il controllo delle __reti di livello 2 e 3__, degli __indirizzi IP pubblici__ e dei tuoi __circuiti telecom__,
- __Colocation__ : Offre una panoramica sui dispositivi situati in zona di __colocation condivisa o dedicata__,
- __Ordini__ : Consente l'ordine di risorse e il monitoraggio dei deployment,
- __Amministrazione__ : Raggruppa le funzioni di amministrazione degli utenti e dei tenant, nonché l'accesso al log globale.
</div>
</div>
I pittogrammi __'NEW'__ indicano che il prodotto in questione è stato provisionato ma non è ancora qualificato __offerta SecNumCloud__ e __'BETA'__ indicano che il prodotto in questione è stato provisionato e appena qualificato __offerta SecNumCloud__.

## Registrazione - Monitoraggio delle Attività

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura eseguite all'interno della console, garantendo così una maggiore tracciabilità e sicurezza. Evidenzia le due schede principali: Recenti e Archiviati.

<img src={shivaLogs} />

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
  - Stato
- Utente
- Descrizione dell'operazione

#### __Funzionalità__

- Ricerca/Filtraggio per operazioni specifiche

### __Utilizzo__

- __Accesso :__ permesso `activity_read`
- __Navigazione :__
  - Seleziona la scheda "Recenti" per le operazioni in tempo reale.
  - Scegli "Archiviati" per consultare la cronologia.
  - Utilizza le funzionalità di ricerca e filtraggio per individuare operazioni specifiche.

#### __Nota di Conformità__

In conformità alla qualificazione SecNumCloud, l'archiviazione degli eventi della console Cloud Temple ha una durata minima di __6 mesi__, garantendo così il rispetto dei requisiti di sicurezza e di tracciabilità.

## Consultazione degli ultimi aggiornamenti

Fate clic in basso a sinistra sulla barra verde sull'icona __'Novità'__. Otterrete i dettagli delle modifiche per ogni versione della console Cloud Temple.

<img src={shivaOnboard_009} />

## Accesso alle funzionalità utente tramite l'API

L'accesso a tutte le funzionalità della Console è possibile tramite l'API Console. È possibile consultare i dettagli dei verbi e delle configurazioni tramite __'Profil'__ e __'APIs'__ :

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple mette a disposizione un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) per gestire *"as code"* la vostra piattaforma Cloud.