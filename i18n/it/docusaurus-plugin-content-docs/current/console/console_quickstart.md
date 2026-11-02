---
title: Tour della console
---
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

Questa pagina fa il giro dell'interfaccia della console Cloud Temple: dove trovare ciascuna funzione e cosa consente.

:::tip[Siete agli inizi?]
La creazione della vostra organizzazione, la connessione, il doppio fattore, gli indirizzi IP autorizzati, la creazione di un tenant, l'invito dei vostri collaboratori, l'attivazione dei prodotti e l'accesso all'API sono descritti, nell'ordine, in [Onboarding](./onboarding.md).
:::

## Prerequisiti

- Avere accesso alla console: vedere [Onboarding](./onboarding.md).
- Connettersi da un indirizzo IP pubblico autorizzato: vedere [Aggiungere un indirizzo IP](./onboarding.md#aggiungere-un-indirizzo-ip).

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Vista organizzazione

:::info
La **vista organizzazione** è riservata ai **proprietari dell'organizzazione**.
:::

La **vista organizzazione** raggruppa le funzioni di gestione della vostra entità nella console Cloud Temple: gestione dei tenant, degli utenti e delle relative autorizzazioni, controllo degli accessi e monitoraggio dei consumi. Un'organizzazione riunisce uno o più **tenant** (ambienti cloud isolati) e le autorizzazioni degli utenti sono soggette a una **segregazione per tenant**.

:::info
Questa sezione descrive l'**interfaccia**. Le procedure si trovano in [Onboarding](./onboarding.md); la documentazione di **riferimento** sul modello organizzazione / tenant e sulle autorizzazioni si trova nel modulo [IAM](iam/concepts.md).
:::

### Intestazione e selezione del tenant di lavoro

Nella parte superiore della console, l'intestazione visualizza l'organizzazione corrente (**« La mia organizzazione »**). Il selettore associato apre l'elenco **« I miei tenant »**, da cui scegliete il vostro tenant di lavoro: vedere [Scegliere il vostro tenant di lavoro](./onboarding.md#scegliere-il-vostro-tenant-di-lavoro).

<img src={imgSelector} />

### Dashboard

La **Dashboard** è la pagina iniziale dell'organizzazione. Presenta una sintesi trasversale:

- lo stato dei **ticket di supporto** (aperti, risposte richieste, validazione cliente, incidenti);
- il **numero di tenant** dell'organizzazione;
- una **panoramica dei costi** (costo del mese corrente, ripartizione per tenant e per servizio).

<img src={imgDashboard} />

### Amministrazione dell'organizzazione

Il pannello **Amministrazione** della navigazione a sinistra raggruppa le pagine di governance dell'organizzazione.

| Pagina | Ruolo | Per agire |
|---|---|---|
| **Tenant** | Creare e far evolvere i tenant | [Creare un ambiente](./onboarding.md#creare-un-nuovo-ambiente), [attivare un prodotto](./onboarding.md#attivare-un-prodotto) |
| **Utenti** | Gestire gli account e le relative autorizzazioni | [Invitare i vostri collaboratori](./onboarding.md#tappa-4-invitare-i-vostri-collaboratori) |
| **Accesso** | Elenco degli IP pubblici autorizzati | [Aggiungere un indirizzo IP](./onboarding.md#aggiungere-un-indirizzo-ip) |
| **Log** | Registro delle attività (tracciabilità) | [Registro delle attività](#registro---monitoraggio-delle-attività) |
| **Supporto** | Ticket dell'organizzazione | [Supporto tecnico](#accesso-al-supporto-tecnico) |

Il **Gestore dei costi** (al di fuori del pannello Amministrazione) fornisce il monitoraggio dei consumi.

### Tenant

La pagina **Tenant** elenca tutti i tenant dell'organizzazione. Una barra di ricerca e la paginazione facilitano la navigazione quando i tenant sono numerosi. Il pulsante **« Nuovo tenant »** crea un ambiente: vedere [Creare un nuovo ambiente](./onboarding.md#creare-un-nuovo-ambiente).

#### Azioni su un tenant

Il menu delle azioni di ogni riga propone:

- **Connettersi al tenant** — definisce questo tenant come tenant di lavoro;
- **Modifica i prodotti** — attiva o disattiva prodotti sul tenant, per farne evolvere il perimetro;
- **Copia UUID** — copia l'identificativo tecnico del tenant (utile per l'API o un ticket di supporto).

Ogni tenant ha almeno un proprietario. Le regole (numero raccomandato, tempo di propagazione, rimozione su richiesta al supporto, autorizzazioni di un proprietario) sono dettagliate nel modulo [IAM](iam/concepts.md#gestione-dei-proprietari-su-un-tenant).

:::info
Le operazioni sui tenant vengono tracciate nella pagina **Log** (ad esempio « *Creating tenant…* » o « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

### Utenti e autorizzazioni

La pagina **Utenti** elenca gli account dell'organizzazione. Le credenziali sono **globali all'organizzazione**; le autorizzazioni, invece, si definiscono **per tenant**. Il pulsante **« Nuovo utente »** invita un collaboratore: vedere [Invitare i vostri collaboratori](./onboarding.md#tappa-4-invitare-i-vostri-collaboratori).

Per ogni account vengono visualizzati il **nome**, l'**e-mail**, il **tipo** di account — **Account federato** (repository di identità esterno) o **Account locale** — e degli indicatori visivi: **Proprietario dell'organizzazione**, **Io**, oppure **E-mail non verificata** (account non completato).

#### Strumenti della pagina

- **Filtri**: per **Proprietari dell'organizzazione**, **Tipo**, **Origine** e **Stato**.
- **Esporta CSV**: esportazione dell'elenco degli utenti e dei loro accessi, utile per l'audit.

#### Azioni su un account

Il menu delle azioni propone, a seconda dello stato dell'account:

- **Aggiungi come proprietario dell'organizzazione**;
- **Reinvio** — reinvia l'invito a un account non completato;
- **Copia UUID**;
- **Elimina**.

:::note
Non potete eliminare voi stessi.
:::

#### Proprietario dell'organizzazione e proprietario del tenant

Si tratta di due nozioni distinte:

- il **proprietario dell'organizzazione** si aggiunge dalla pagina **Utenti** (azione « Aggiungi come proprietario dell'organizzazione »); la sua **rimozione avviene su richiesta al supporto**;
- il **proprietario del tenant** rientra nel perimetro di un tenant; le relative regole sono descritte nel modulo [IAM](iam/concepts.md#gestione-dei-proprietari-su-un-tenant).

:::info
In qualità di **proprietario dell'organizzazione**, siete per impostazione predefinita **proprietari di tutti i tenant** dell'organizzazione. A questo titolo, disponete di tutte le autorizzazioni su ciascuno di questi tenant. Al contrario, se questo ruolo vi viene revocato, **non perdete** tali autorizzazioni: restano acquisite sui tenant interessati.
:::

<img src={imgUsers} />

<a id="accès--whitelist-ip"></a>

### Rapporto di consumo — Gestore dei costi

Il **Gestore dei costi** offre una vista dei consumi dell'organizzazione, suddivisa per tenant. Propone due schede.

#### Scheda « Panoramica »

Vista sintetica del mese corrente:

- indicatori chiave: **costo del mese corrente**, **costo dell'anno corrente**, **numero di prodotti attivi**;
- **Costo per tenant** — ripartizione dei costi tra i tenant;
- **Costo attuale per servizio** e **Costo attuale per prodotto** — principali voci di consumo.

#### Scheda « Consumo »

Report dettagliato e storicizzato:

- selezione del **periodo** (mese di inizio e di fine) e dell'asse **« Mostra per »**;
- viste **Consumo mensile**, **Totale**, **Previsione** e **Tendenza**;
- tabella espandibile per **Mese / Tenant / Servizio / Prodotto / Importo**, con la **tendenza** rispetto al mese precedente.

:::info
L'importo del mese corrente è **previsionale**: viene stimato in base ai giorni già consumati.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Registro delle attività e supporto

- **Log** — la pagina **Attività** traccia le operazioni di lettura e scrittura dell'organizzazione (schede **Recenti** / **Archiviati**, filtri, esportazione CSV) a fini di tracciabilità. Vedere la sezione [Registro — Monitoraggio delle attività](#registro---monitoraggio-delle-attività) qui sotto.
- **Supporto** — la pagina **Supporto** centralizza i **ticket dell'organizzazione** (indicatori, creazione di ticket, filtri, esportazione). La creazione e il monitoraggio delle richieste sono descritti nella sezione [Accesso al supporto tecnico](#accesso-al-supporto-tecnico) qui sotto.

## Accesso alle funzionalità utente tramite l'interfaccia web

L'insieme delle funzionalità accessibili al vostro utente (in base ai suoi diritti) si trova a sinistra dello schermo, nella barra verde.
Le funzionalità sono raggruppate per modulo. Questo comprende principalmente:

- L'__inventario__ delle vostre risorse,
- Il __monitoraggio delle operazioni__,
- La __gestione delle risorse IaaS__ (calcolo, archiviazione, rete, ...)
- La __gestione delle risorse OpenIaaS__ (calcolo, archiviazione, rete, ...)
- L'accesso ai __servizi accessori__ (Bastion, monitoraggio, ...)
- L'__amministrazione della vostra organizzazione__ (gestione dei tenant, dei diritti, ...)

L'attivazione di un modulo per un utente dipende dai diritti dell'utente. Ad esempio, il modulo __'Ordini'__ non sarà disponibile se l'utente non dispone del diritto __'ORDER'__.

Ecco una presentazione dei diversi moduli disponibili. Nuovi moduli arricchiscono regolarmente la console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: consente di avere rapidamente una vista sul __totale delle risorse di calcolo e di archiviazione__, le statistiche del __backup__ e una __sintesi dei ticket di supporto__,
- __Inventario__: consente di avere una vista dell'insieme delle vostre risorse di tipo __'macchine virtuali'__. Se vengono utilizzati i __tag__, consente di avere una vista per __tag__ (ad esempio, vista di business, vista applicativa, ...),
- __Managed Services__: dà accesso al monitoraggio delle vostre __richieste di supporto__ e alla __metrologia dei servizi__,
- __IaaS__: consente la __gestione delle infrastrutture IaaS VMware__ (macchine virtuali, cluster, hypervisor, replicazioni, backup, ...),
- __OpenIaaS__: consente la __gestione delle risorse Xen Orchestra__ (macchine virtuali, backup, ...),
- __OpenShift__: consente la gestione della vostra **architettura PaaS RedHat OpenShift** e la gestione dei vostri container sulle 3 zone di disponibilità della piattaforma.
- __Bastion__: consente di distribuire e gestire appliance bastion SSH/RDP nelle vostre reti,
- __Rete__: consente la gestione delle __reti di livello 2 e 3__, degli __IP pubblici__ e dei vostri __circuiti di telecomunicazione__,
- __Colocation__: offre la vista sulle apparecchiature situate in zona di __colocation condivisa o dedicata__,
- __Ordini__: consente l'ordine di risorse e il monitoraggio dei deployment,
- __Amministrazione__: raggruppa le funzioni di amministrazione degli utenti e dei tenant, nonché l'accesso al registro globale delle attività.
</div>
</div>

## Gestione della lingua

La console è disponibile in __francese__ e __inglese__. Potete cambiare la lingua di funzionamento tramite l'icona __lingua__ situata in alto a destra dello schermo.

La modifica della lingua di un utente si effettua nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene effettuata per ogni [tenant](iam/concepts.md#tenant).

## Accesso al supporto tecnico

In qualsiasi momento, potete contattare __il team di supporto Cloud Temple__ tramite __l'icona 'salvagente'__ situata in alto a destra dello schermo.

<img src={shivaSupport} />

Sarete guidati durante tutto il processo di richiesta di supporto.

Il primo passo consiste nell'identificare il tipo di richiesta di supporto:

- Richiedere un consiglio sull'utilizzo di un prodotto (al di fuori degli incidenti),
- Richiedere un'assistenza relativa al vostro account cliente,
- Segnalare un incidente o richiedere un supporto tecnico.
- Richiedere l'assistenza di un servizio professionale (messa a disposizione di un ingegnere Cloud Temple su una problematica).

<img src={shivaSupport_01} />

Avete poi la possibilità di fornire precisazioni e di allegare file (ad esempio immagini o log).

Il richiedente può inoltre specificare un livello di criticità (da P1 a P5) nella descrizione del ticket, in caso di incidente di sicurezza, ad esempio:

<img src={shivaSupportCriticities} />

__CRITICA (P1)__:

- Sospetta fuga di dati sensibili
- Rilevamento di un accesso non autorizzato ai vostri dati
- Compromissione delle vostre credenziali di amministrazione
- Indisponibilità totale dei vostri servizi critici
- Comportamenti anomali su dati sensibili
- Violazione di dati personali

__ALTA (P2)__:

- Malfunzionamento degli accessi degli utenti
- Anomalia nella crittografia dei vostri dati
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

Una volta effettuata la vostra richiesta, potete ritrovare le vostre richieste tramite __l'icona 'salvagente'__ situata in alto a destra dello schermo:

<img src={shivaSupport_03} />

## Registro - Monitoraggio delle attività

La pagina delle attività è destinata a fornire una visibilità completa su tutte le operazioni di lettura e scrittura eseguite all'interno della console, garantendo così una tracciabilità e una sicurezza maggiori. Mette in evidenza le due schede principali: Recenti e Archiviati.

<img src={shivaLogs} />

### __Struttura della pagina__

#### __Schede__

- __Recenti__

- Operazioni recenti
- Monitoraggio in tempo reale

- __Archiviati__

- Operazioni su un periodo più lungo
- Operazioni archiviate per tracciabilità e conformità

#### __Informazioni visualizzate__

- Data e ora

- Tipo di operazione
  - Stato
- Utente
- Descrizione dell'operazione

#### __Funzionalità__

- Ricerca/filtraggio per operazioni specifiche

### __Utilizzo__

- __Accesso:__ permesso `activity_read`
- __Navigazione:__
  - Selezionate la scheda "Recenti" per le operazioni in tempo reale.
  - Scegliete "Archiviati" per consultare la cronologia.
  - Utilizzate le funzionalità di ricerca e filtraggio per individuare operazioni specifiche.

#### __Nota di conformità__

Poiché la console è ospitata su un'infrastruttura qualificata SecNumCloud, i suoi eventi sono conservati per un minimo di __6 mesi__, per rispondere ai requisiti di sicurezza e di tracciabilità.

## Consultazione degli ultimi aggiornamenti

Fate clic, in basso a sinistra nella barra verde, sull'icona __'Novità'__. Otterrete il dettaglio delle modifiche per ogni versione della console Cloud Temple.

<img src={shivaOnboard_009} />

<a id="accès-aux-fonctionnalités-utilisateur-via-lapi"></a>
<a id="provider-terraform"></a>

## Automatizzare

L'API della console e il provider Terraform sono presentati in [Onboarding](./onboarding.md#tappa-6-automatizzare), e dettagliati nella [documentazione dell'API](./api.md) e in [Terraform Provider](/terraform).
