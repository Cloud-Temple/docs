---
title: Vista organizzazione
---

import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

La **vista organizzazione** riunisce le funzioni di gestione della vostra entità nella Console Cloud Temple: gestione dei tenant, degli utenti e dei loro permessi, controllo degli accessi e monitoraggio del consumo. Un'organizzazione federa uno o più **tenant** (ambienti cloud isolati) e i permessi degli utenti sono **segregati tenant per tenant**.

:::info
Questa pagina descrive l'**interfaccia**: dove trovare ciascuna funzione e cosa consente. La documentazione di **riferimento** del modello organizzazione / tenant e dei permessi si trova nel modulo [IAM](iam/concepts.md).
:::

## Barra superiore e selezione del tenant di lavoro

Nella parte superiore della Console, la barra mostra l'organizzazione corrente (**«La mia organizzazione»**). Il selettore associato apre l'elenco **«I miei tenant»**: ogni tenant vi compare, accompagnato all'occorrenza dal badge **SecNumCloud** quando è qualificato.

Per **scegliere il tenant di lavoro**, ci sono due possibilità:

- dalla barra superiore, aprire il selettore **«I miei tenant»** e fare clic sul tenant desiderato;
- dalla pagina **Tenant**, utilizzare l'azione **«Connettersi al tenant»** di una riga.

Le risorse tecniche (calcolo, archiviazione, rete, ecc.) sono **proprie di ciascun tenant** e non sono condivise tra i tenant.

<img src={imgSelector} />

## Dashboard

La **Dashboard** è la pagina iniziale dell'organizzazione. Offre una sintesi trasversale:

- lo stato dei **ticket di supporto** (aperti, risposta richiesta, validazione cliente, incidenti);
- il **numero di tenant** dell'organizzazione;
- una **panoramica dei costi** (costo del mese corrente, ripartizione per tenant e per servizio).

<img src={imgDashboard} />

## Amministrazione dell'organizzazione

La sezione **Amministrazione** della navigazione a sinistra raggruppa le pagine di governance dell'organizzazione.

| Pagina | Ruolo |
|---|---|
| **Tenant** | Creare e far evolvere i tenant |
| **Utenti** | Gestire gli account e i loro permessi |
| **Accesso** | Elenco degli IP pubblici autorizzati (whitelist) |
| **Logs** | Registro delle attività (tracciabilità) |
| **Supporto** | Ticket dell'organizzazione |

Il **Gestore dei costi** (al di fuori della sezione Amministrazione) fornisce il monitoraggio del consumo.

## Tenant

La pagina **Tenant** elenca tutti i tenant dell'organizzazione. Una barra di ricerca e la paginazione facilitano la navigazione quando i tenant sono numerosi.

### Creare un tenant

Il pulsante **«Nuovo tenant»** apre un modulo in due parti:

- **Identità del tenant**: il **nome** (controllato in tempo reale) e una **descrizione**;
- **Prodotti del tenant**: i prodotti da attivare sul tenant. I pulsanti **«Seleziona tutto»** / **«Deseleziona tutto»** velocizzano l'inserimento.

Confermare con **«Crea»**: il tenant viene inizializzato con i prodotti selezionati.

### Azioni su un tenant

Il menu delle azioni di ogni riga propone:

- **Connettersi al tenant** — imposta questo tenant come tenant di lavoro;
- **Modificare i prodotti** — attiva o disattiva prodotti sul tenant, per farne evolvere il perimetro;
- **Copiare UUID** — copia l'identificatore tecnico del tenant (utile per l'API o un ticket di supporto).

### Proprietari e ciclo di vita

- **Creazione**: in self-service tramite **«Nuovo tenant»**.
- **Evoluzione**: aggiunta o rimozione di prodotti tramite **«Modificare i prodotti»**.
- **Proprietari di tenant**: ogni tenant ha almeno un proprietario. Le regole (numero consigliato, tempo di propagazione, rimozione su richiesta di supporto, permessi di un proprietario) sono descritte nel modulo [IAM](iam/concepts.md).

:::info
Le operazioni sui tenant sono tracciate nella pagina **Logs** (ad esempio «*Creating tenant…*» o «*Updating features on tenant…*»).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

## Utenti e permessi

La pagina **Utenti** elenca gli account dell'organizzazione. Le credenziali sono **globali all'organizzazione**; i permessi, invece, si definiscono **per tenant**.

Per ogni account sono mostrati il **nome**, l'**e-mail**, il **tipo** di account — **Account federato** (provider di identità esterno) o **Account locale** — e indicatori visivi: **Proprietario dell'organizzazione**, **Io**, o **E-mail non verificata** (account non finalizzato).

### Strumenti della pagina

- **Filtri**: per **Proprietari dell'organizzazione**, **Tipo**, **Origine** e **Stato**.
- **Esporta CSV**: esporta l'elenco degli utenti e dei loro accessi, utile per l'audit.

### Azioni su un account

Il menu delle azioni propone, a seconda dello stato dell'account:

- **Aggiungere come proprietario dell'organizzazione**;
- **Reiscrizione** — reinvia l'invito a un account non finalizzato;
- **Copiare UUID**;
- **Eliminare**.

:::note
Non potete eliminare voi stessi. L'**invito** di un nuovo utente e l'**assegnazione granulare dei permessi per tenant** sono descritti nel modulo [IAM](iam/quickstart.md).
:::

### Proprietario dell'organizzazione e proprietario di tenant

Sono due nozioni distinte:

- il **proprietario dell'organizzazione** si aggiunge dalla pagina **Utenti** (azione «Aggiungere come proprietario dell'organizzazione»); la sua **rimozione avviene su richiesta di supporto**;
- il **proprietario di tenant** rientra nel perimetro di un tenant; le sue regole sono descritte nel modulo [IAM](iam/concepts.md).

:::info
In quanto **proprietario dell'organizzazione**, siete per impostazione predefinita **proprietari di tutti i tenant** dell'organizzazione. Di conseguenza, disponete di tutti i permessi su ciascuno di questi tenant.
:::

<img src={imgUsers} />

## Accesso — whitelist IP

La pagina **Accesso** gestisce l'**elenco degli indirizzi IP pubblici autorizzati** a raggiungere la Console. In conformità ai requisiti **SecNumCloud**, viene accettato solo il traffico proveniente da questi indirizzi.

- Ogni voce associa un **IP** (notazione CIDR) a una **descrizione**.
- Il pulsante **«Aggiungere un IP»** permette di aggiungere un indirizzo all'elenco.

:::warning
L'**eliminazione** di un IP autorizzato avviene su **richiesta di supporto**.
:::

<img src={imgAccess} />

## Report di consumo — Gestore dei costi

Il **Gestore dei costi** offre una vista del consumo dell'organizzazione, ripartito per tenant. Propone due schede.

### Scheda «Panoramica»

Vista sintetica del mese corrente:

- indicatori chiave: **costo del mese corrente**, **costo dell'anno corrente**, **numero di prodotti attivi**;
- **Costo per tenant** — ripartizione dei costi tra i tenant;
- **Costo attuale per servizio** e **Costo attuale per prodotto** — principali voci di consumo.

### Scheda «Consumo»

Report dettagliato e storicizzato:

- selezione del **periodo** (mese di inizio e di fine) e dell'asse **«Mostra per»**;
- viste **Consumo mensile**, **Totale**, **Previsione** e **Tendenza**;
- una tabella espandibile per **Mese / Tenant / Servizio / Prodotto / Importo**, con la **tendenza** rispetto al mese precedente.

:::info
L'importo del mese corrente è una **previsione**: è stimato a partire dai giorni già consumati.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

## Registrazione e supporto

- **Logs** — la pagina **Attività** traccia le operazioni di lettura e scrittura dell'organizzazione (schede **Recenti** / **Archiviate**, filtri, esportazione CSV) a fini di tracciabilità. Vedi anche la sezione Registrazione della [guida introduttiva della Console](console_quickstart.md).
- **Supporto** — la pagina **Supporto** centralizza i **ticket dell'organizzazione** (indicatori, creazione di ticket, filtri, esportazione). La creazione e il monitoraggio delle richieste sono descritti nella [guida introduttiva della Console](console_quickstart.md).
