---
title: Concetti della Console
---

Questa pagina presenta il modello su cui si basa la Console: l'organizzazione, i tenant, gli utenti e i loro permessi, e i due modi per accedervi. La documentazione di riferimento di questo modello è il modulo [IAM](./iam/concepts.md).

## Organizzazione e tenant

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

## Utenti e permessi

Le **credenziali** di un utente sono globali all'organizzazione. I suoi **permessi**, invece, si definiscono tenant per tenant: un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

Occorre distinguere due ruoli:

- il **proprietario dell'organizzazione** gestisce gli account, i tenant e gli indirizzi IP autorizzati. Per impostazione predefinita è proprietario di tutti i tenant dell'organizzazione;
- il **proprietario di un tenant** riceve tutti i permessi legati ai prodotti attivati su quel tenant.

La stessa persona può ricoprire entrambi i ruoli. Le regole complete sono in [Assegnazione dei permessi in un tenant](./iam/concepts.md#assegnazione-dei-permessi-in-un-tenant) e nell'[elenco dei permessi](./iam/concepts.md#permessi).

## Accedere alla Console

L'accesso alla Console è protetto su due livelli:

- **gli indirizzi IP autorizzati**: solo gli indirizzi IP pubblici dichiarati dalla vostra organizzazione possono raggiungere la Console. L'elenco è unico per tutta l'organizzazione, indipendentemente dal tenant da cui viene modificato;
- **il doppio fattore**: è obbligatorio per tutti gli account della Console. Se la vostra organizzazione è federata con la vostra directory, consultate i [meccanismi di autenticazione](./iam/concepts.md#meccanismi-di-autenticazione).

La procedura è descritta in [Collegarvi e proteggere i vostri accessi](./onboarding.md#tappa-2-connettervi-e-proteggere-i-vostri-accessi).

## L'interfaccia e l'API

Tutto ciò che fate nella Console è possibile anche tramite la sua [API](./api.md). Si autentica con una **chiave API** (*Personal Access Token*), legata a un tenant e all'utente che l'ha creata. Il [provider Terraform](../terraform/terraform.md), che gestisce la vostra piattaforma *as code*, si autentica anch'esso con credenziali API generate dalla Console.
