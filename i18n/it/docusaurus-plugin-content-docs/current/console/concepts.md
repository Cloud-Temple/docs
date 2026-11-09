---
title: Concetti della Console
---

## Presentazione

La **Console Cloud Temple** è il punto di accesso ai prodotti Cloud Temple che integra: calcolo, storage, rete, sicurezza, IA e altri. Alcuni servizi gestiti (Kubernetes gestito, database gestiti, AIOps) si sottoscrivono tramite i team di Cloud Temple e non si gestiscono dalla Console. Qui ordini e gestisci le tue risorse in self-service, gestisci identità e accessi, segui le operazioni e apri le richieste di supporto.

È progettata *API-first*: l'interfaccia web si basa sull'API pubblica, che puoi utilizzare direttamente, con il provider Terraform o con il server MCP.

Si rivolge ai team IT che amministrano la propria piattaforma, ai team DevOps che la automatizzano, ai team di sicurezza e conformità che controllano accessi e tracciabilità e ai team di produzione che seguono le operazioni.

Il modello su cui si basa la Console (organizzazione, tenant, utenti e autorizzazioni) è descritto nella sezione Architettura; la sua documentazione di riferimento è il modulo [IAM](./iam/concepts.md).

## Vantaggi

| Vantaggio | Descrizione |
|---|---|
| Punto di accesso unico | Le risorse dei prodotti integrati nella Console in un unico portale, con un solo set di credenziali. |
| Self-service | Crei, configuri ed elimini le tue risorse in qualsiasi momento, senza intervento di Cloud Temple. |
| Automazione | La piattaforma si gestisce tramite API o con Terraform, con configurazioni versionabili e integrabili nelle tue pipeline CI/CD. |
| Sicurezza e tracciabilità | Accessi filtrati per indirizzo IP, doppio fattore, autorizzazioni per tenant e registrazione delle azioni. |

## Funzionalità

| Funzionalità | Descrizione |
|---|---|
| Console web | Dashboard, inventario delle risorse, ordini in self-service, accesso ai prodotti sottoscritti integrati nella Console. |
| Gestione di identità e accessi | Organizzazione, tenant, utenti e autorizzazioni: vedi il modulo [IAM](./iam/concepts.md). |
| API REST | API documentata in formato OpenAPI 3.0, consultabile dalla Console: vedi l'[API della Console](./api.md). |
| Provider Terraform | Provider `Cloud-Temple/cloudtemple`, pubblicato sul Terraform Registry: vedi il [provider Terraform](../terraform/terraform.md). |
| Server MCP | Collegamento di un client di IA compatibile MCP (*Model Context Protocol*) al tuo tenant, per interrogare il tuo ambiente. |
| Monitoraggio delle operazioni | [Operazioni pianificate e incidenti](./status.md), registro delle attività. |
| Supporto | Creazione e monitoraggio delle richieste di supporto dalla Console. |

## Architettura

### Organizzazione e tenant

L'intera piattaforma si basa su due livelli.

**L'organizzazione** rappresenta la vostra entità: azienda, reparto o team. Porta il vostro contratto e la vostra fatturazione, e riunisce tutti gli account utente. Definisce anche il meccanismo di autenticazione comune a questi account: locale alla Console o federato con la vostra directory.

**Il tenant** è un ambiente di lavoro all'interno dell'organizzazione. Un'organizzazione ne ha almeno uno. Le risorse ordinate sono assegnate a un tenant preciso e non sono condivise con gli altri tenant.

```
La vostra organizzazione
├── Tenant «produzione»
├── Tenant «collaudo»
└── Tenant «lab»
```

La suddivisione in tenant spetta a voi: per ambiente (produzione, collaudo), per applicazione o per criticità. Potete aggiungere tenant in qualsiasi momento, e nessun prodotto è attivato d'ufficio: scegliete voi i prodotti di ogni tenant. I dettagli sono in [Organizzazioni](./iam/concepts.md#organizzazioni) e [Tenant](./iam/concepts.md#tenant).

Le risorse di un tenant sono distribuite in [regioni e zone di disponibilità](../additional_content/concepts_regional.md).

### Utenti e permessi

Le **credenziali** di un utente sono globali all'organizzazione. I suoi **permessi**, invece, si definiscono tenant per tenant: un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

Occorre distinguere due ruoli:

- il **proprietario dell'organizzazione** gestisce gli account, i tenant e gli indirizzi IP autorizzati. Per impostazione predefinita è proprietario di tutti i tenant dell'organizzazione;
- il **proprietario di un tenant** riceve tutti i permessi legati ai prodotti attivati su quel tenant.

La stessa persona può ricoprire entrambi i ruoli. Le regole complete sono in [Assegnazione dei permessi in un tenant](./iam/concepts.md#assegnazione-dei-permessi-in-un-tenant) e nell'[elenco dei permessi](./iam/concepts.md#permessi).

### L'interfaccia e l'API

Tutto ciò che fate nella Console è possibile anche tramite la sua [API](./api.md). Si autentica con una **chiave API** (*Personal Access Token*), legata a un tenant e all'utente che l'ha creata. Il [provider Terraform](../terraform/terraform.md), che gestisce la vostra piattaforma *as code*, si autentica anch'esso con credenziali API generate dalla Console.

## Regioni e zone di disponibilità

La Console e l'API sono ospitate in Francia. Gestiscono le risorse dei tuoi tenant, distribuite nelle regioni e nelle zone di disponibilità proprie di ogni prodotto.

## Specifiche tecniche

### Interfaccia

La Console è disponibile in francese, inglese, tedesco, spagnolo e italiano.

### API e provider Terraform

- L'API segue il formato OpenAPI 3.0; la sua documentazione interattiva è accessibile dalla Console. Ogni richiesta di scrittura genera un'[attività](./api.md) che permette di seguirne lo stato.
- Il provider Terraform è compatibile con Terraform 1.0 e versioni successive, oltre che con OpenTofu.

### Server MCP

Il server MCP si basa sull'API pubblica e ne applica gli stessi controlli: autenticazione tramite token di accesso personale, autorizzazioni, filtraggio per indirizzo IP e registrazione delle azioni. Un client di IA agisce solo nei limiti delle autorizzazioni del token utilizzato.

### Limiti

- I limiti di frequenza dell'API sono definiti per prodotto; oltre tali limiti, l'API risponde con un errore HTTP 429: vedi l'[API della Console](./api.md).

## Sicurezza e conformità

### Accedere alla Console

L'accesso alla Console è protetto su due livelli:

- **gli indirizzi IP autorizzati**: solo gli indirizzi IP pubblici dichiarati dalla vostra organizzazione possono raggiungere la Console. L'elenco è unico per tutta l'organizzazione, indipendentemente dal tenant da cui viene modificato;
- **il doppio fattore**: è obbligatorio per tutti gli account della Console. Se la vostra organizzazione è federata con la vostra directory, consultate i [meccanismi di autenticazione](./iam/concepts.md#meccanismi-di-autenticazione).

La procedura è descritta in [Collegarvi e proteggere i vostri accessi](./onboarding.md#tappa-2-connettervi-e-proteggere-i-vostri-accessi).

### Tracciabilità

Le operazioni vengono registrate: identità di chi le avvia, data, tipo di operazione e stato. Poiché la Console è ospitata su un'infrastruttura qualificata SecNumCloud, i suoi eventi vengono conservati per almeno 6 mesi.

### Certificazioni

La Console è certificata HDS e ISO 27001, e inclusa nei servizi qualificati SecNumCloud e conformi a C5.

## Reversibilità

La Console e l'API non memorizzano i tuoi dati applicativi: conservano i metadati di configurazione e i log.

- **Configurazioni Terraform**: i tuoi file di configurazione e il tuo file di stato (*state*) ti appartengono.
- **Log delle attività**: esportabili tramite l'API della Console.

## Prezzi

La Console, l'API, il server MCP e il provider Terraform sono inclusi senza costi aggiuntivi in ogni sottoscrizione Cloud Temple. Le risorse che ordini sono fatturate secondo il prezzo di ciascun prodotto. Vedi la pagina del prodotto sul sito Cloud Temple:
[Console – API – Provider Terraform](https://www.cloud-temple.com/produits/console-api-provider-terraform/).
