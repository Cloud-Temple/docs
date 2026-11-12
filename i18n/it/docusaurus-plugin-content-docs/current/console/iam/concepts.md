---
title: Concetti
---
import shivaOnboard_003 from '@site/docs/console/iam/images/shiva_onboard_003.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaProfil_012 from '@site/docs/console/iam/images/shiva_profil_012.png'
import shivaProfil_014 from '@site/docs/console/iam/images/shiva_profil_014.png'
import shivaProfil_015 from '@site/docs/console/iam/images/shiva_profil_015.png'
import shivaProfil_016 from '@site/docs/console/iam/images/shiva_profil_016.png'
import shivaProfil_013 from '@site/docs/console/iam/images/shiva_profil_013.png'
import shivaProfil_010 from '@site/docs/console/iam/images/shiva_profil_010.png'
import shivaProfil_009 from '@site/docs/console/iam/images/shiva_profil_009.png'
import shivaProfil_011 from '@site/docs/console/iam/images/shiva_profil_011.png'
import shivaProfil_006 from '@site/docs/console/iam/images/shiva_profil_006.png'
import shivaProfil_007 from '@site/docs/console/iam/images/shiva_profil_007.png'
import shivaTenantRessources_01 from '@site/docs/console/iam/images/shiva_tenant_ressources_01.png'

## Modello di gestione degli accessi

La gestione degli accessi nella Console si basa su due livelli annidati:

- l'__[organizzazione](#organizzazioni)__ : l'entità contrattuale. Essa gestisce gli account utente, la configurazione dell'autenticazione e l'insieme dei vostri tenant;
- il __[tenant](#tenant)__ : un raggruppamento di risorse all'interno dell'organizzazione. Esso gestisce le risorse tecniche e le permessi degli utenti.

Tra i due si trova un __perimetro comune__: l'identità dell'utente. Un account viene creato una sola volta nell'organizzazione, poi utilizzato in tutti i tenant a cui ha accesso.

### Chi gestisce cosa

| Oggetto gestito                                        | Organizzazione                                      | Tenant                                        |
| ------------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| Contratto e fatturazione                            | Sì                                                | Report di consumo per tenant                  |
| Meccanismo di autenticazione (locale, SSO)          | Sì                                                | No (ereditato dall'organizzazione)            |
| Ciclo di vita degli account (invito, eliminazione)  | Sì                                                | No (gli account sono globali all'organizzazione) |
| __Permessi degli utenti__                           | __No__                                            | __Sì, tenant per tenant__                     |
| __Designazione di un proprietario__                 | __Sì__ (proprietario dell'organizzazione)          | __Sì__ (proprietario del tenant)              |
| Risorse tecniche (calcolo, storage, rete)           | No                                                | Sì                                            |
| Indirizzi IP autorizzati                            | Sì (elenco unico dell'organizzazione)              | Gestibile da un tenant, ma l'elenco modificato è quello dell'organizzazione |

:::info[Da ricordare]
I permessi non vengono mai configurati a livello di organizzazione: sono definiti tenant per tenant. Il livello organizzazione consente invece di designare un utente come __proprietario dell'organizzazione__.
:::

## Perimetro comune: l'account utente

Gli account di accesso alla Console vengono creati dall'account principale del committente su invito (indipendentemente dal registro di autenticazione).
Le credenziali sono globali alla vostra [Organizzazione](#organizzazioni): un utente dispone di un solo account, indipendentemente dal numero di tenant in cui opera.

*__Nota:__ [La federazione delle identità si gestisce a livello di organizzazione](#meccanismi-di-autenticazione)*

Le azioni descritte di seguito riguardano l'account stesso, indipendentemente dal tenant in cui siete connessi.

### Aggiornare il proprio profilo

Questa azione è disponibile solo per un account locale (non SSO).

Selezionate nel vostro __'Profilo'__, in alto a destra dello schermo, poi __'Parametri utente'__ e selezionate l'azione __'Aggiornare il vostro profilo'__.

Quindi recatevi nella vostra casella e-mail e cliccate sul link generato dalla Console. Seguite semplicemente i passaggi per aggiornare il vostro profilo.

__Warning__: Assicuratevi di essere voi l'origine della richiesta di aggiornamento del profilo. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_014} />

### Reimpostazione della password

Questa azione è disponibile solo per un account locale (non SSO).

Selezionate nel vostro __'Profilo'__, in alto a destra dello schermo, poi __'Parametri utente'__ e selezionate l'azione __'Reimpostare password'__.

Quindi recatevi nella vostra casella e-mail e cliccate sul link generato dalla Console. Seguite semplicemente i passaggi per aggiornare la vostra password.

__Warning__: Assicuratevi di essere voi l'origine della richiesta di reimpostazione della vostra password. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_015} />

### Reimpostazione dell'autenticazione a doppio fattore

Questa azione è disponibile solo per un account locale (non SSO).

Selezionate nel vostro __'Profilo'__, in alto a destra dello schermo, poi __'Parametri utente'__ e selezionate l'azione __'Reimpostare MFA'__.

Quindi recatevi nella vostra casella e-mail e cliccate sul link generato dalla Console. Seguite semplicemente i passaggi per aggiornare la vostra autenticazione a doppio fattore.

__Warning__: Assicuratevi di essere voi l'origine della richiesta di reimpostazione della vostra autenticazione a doppio fattore. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_016} />

### Cambiare la lingua di un utente

Il cambio di lingua di un utente va effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

<img src={shivaProfil_006} />

La configurazione viene fatta per ogni tenant [Tenant](#tenant).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere le e-mail relative alle tematiche attivate che verranno automaticamente inviate in caso di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

 Ad esempio, in caso di incidente, verranno generate notifiche e-mail specifiche per questa tematica.

L'elenco delle tematiche disponibili è soggetto a evoluzione e si arricchirà progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

### Disconnettersi

La disconnessione di un utente va effettuata nel suo __'Profilo'__, in alto a destra dello schermo, poi __'Disconnetti'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una disconnessione automatica viene eseguita alla scadenza del token (JWT Token) di sessione.

## Organizzazioni

L'organizzazione è legata al vostro __account committente__ e al __contratto Cloud Temple associato__. Rappresenta la vostra entità (società, dipartimento, team, ...) che gestisce la relazione contrattuale tra Cloud Temple e voi.

### Principio di un'organizzazione

L'organizzazione ha quattro ruoli principali:

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della Console o remota tramite un servizio di federazione delle identità,
- Gestisce l'insieme degli __account utente__,
- __Federa i tenant__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definite per le esigenze della vostra architettura Cloud.

### Cosa si gestisce a livello di organizzazione

Il perimetro organizzazione copre:

- il __meccanismo di autenticazione__ comune a tutti gli account,
- il __ciclo di vita degli account utente__: invito, nuova registrazione, eliminazione,
- la __designazione dei proprietari dell'organizzazione__,
- l'__elenco dei tenant__ della vostra architettura,
- gli __indirizzi IP autorizzati__ a raggiungere la Console, un elenco unico valido per tutti i tenant.

:::warning[I permessi non si gestiscono qui]
La pagina __'Utenti'__ dell'organizzazione consente di creare, designare proprietario ed eliminare un account. Non consente __di__ attribuire permessi: questi sono propri di ciascun tenant e si configurano dal tenant interessato (vedere [Assegnazione dei permessi in un tenant](#assegnazione-dei-permessi-in-un-tenant)).
:::

### Meccanismi di autenticazione

La Console consente a livello di organizzazione __la configurazione del meccanismo di autenticazione__. È possibile
utilizzare il registro locale di autenticazione della Console oppure collegare la propria organizzazione a uno
dei propri registri di autenticazione.

I seguenti registri esterni sono supportati:

- Registri compatibili con __OpenID Connect__,
- Registri compatibili con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

:::info[Importante]
Un indirizzo e-mail è richiesto per tutti gli account provenienti da una federazione delle identità. Gli account creati senza indirizzo e-mail non potranno effettuare l'accesso e sono soggetti a eliminazione automatica.
:::

### Creazione di un account utente nella vostra organizzazione

La creazione di un account utente nella vostra organizzazione avviene tramite invito. Per invitare un utente in un' [Organizzazione](#organizzazioni), andare nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde poi nel sottomenu __'Utenti'__.

Cliccare sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indicare quindi l'indirizzo e-mail dell'utente

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'e-mail di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

Per impostazione predefinita, __un utente appena creato non ha alcun diritto__. È quindi necessario assegnargli successivamente i permessi necessari alla sua attività, __in ciascun tenant__ in cui deve operare.

### Gestione dei proprietari dell'organizzazione

Il __proprietario dell'organizzazione__ è l'unico ruolo attribuibile a livello di organizzazione. È distinto dal [proprietario di tenant](#gestione-dei-proprietari-su-un-tenant).

- La designazione avviene dalla pagina __'Utenti'__ del pannello Amministrazione, tramite il menu di azione della riga dell'utente.
- Questo ruolo dà accesso alla __vista organizzazione__: monitoraggio contrattuale, elenco dei tenant, gestione degli account.
- Non si tratta di un permesso granulare: non esiste alcun permesso di tipo `read` / `write` da attribuire a livello di organizzazione.
- Un utente __'Proprietario'__ non può essere eliminato.

### Nuova registrazione di un utente

Quando un utente è stato provisionato ma non ha convalidato la sua registrazione entro il termine di scadenza dell'e-mail inviata dalla Console, non può più confermare la sua registrazione. È quindi possibile inviargli di nuovo un link affinché rinnovi la sua prima registrazione.

La nuova registrazione di un utente va effettuata nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Selezionare l'utente che si desidera registrare nuovamente, poi cliccare sul pulsante di azione in fondo alla riga e poi __'Nuova registrazione'__.

__Warning__: Assicuratevi di essere voi l'origine della richiesta di nuova registrazione del vostro account utente. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_012} />

### Eliminazione di un utente

L'eliminazione di un utente va effettuata nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Selezionare l'utente che si desidera eliminare, poi cliccare sul pulsante di azione in fondo alla riga e poi __'Elimina'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: Non è possibile eliminare sé stessi e non è possibile eliminare un utente __'Proprietario'__.

## Tenant

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un' [Organizzazione](#organizzazioni) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, più tenant vengono utilizzati per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Accettazione__
- Un tenant __Qualificazione__

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate vengono assegnate a un tenant specifico e non sono condivise con gli altri tenant. Ad esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in 1 tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità di rete tra i tenant.

È possibile far evolvere l'architettura aggiungendo o eliminando tenant.

Nessun prodotto viene attivato di default. Si scelgono i prodotti del tenant __fin dal modulo di creazione__ e si fa evolvere questo perimetro in qualsiasi momento tramite __'Modificare i prodotti'__.

I prodotti infrastrutturali storici (IaaS) restano invece ordinati per riferimento:

| Riferimento d'ordine                                        | Unità    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGIONE)* - Attivazione di un tenant              | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGIONE)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |

### Cosa si gestisce a livello di tenant

Il perimetro tenant copre:

- le __risorse tecniche__ ordinate e deployate,
- i __permessi degli utenti__ su queste risorse,
- la __designazione dei proprietari del tenant__,
- la __gestione degli indirizzi IP autorizzati__, la cui portata è l'organizzazione,
- il __monitoraggio del consumo__ delle risorse.

I permessi degli utenti vanno definiti in ciascun tenant. Un account può quindi essere autorizzato a ordinare risorse in un tenant, ma non in un altro. Ogni organizzazione deve quindi riflettere attentamente sui tenant desiderati: questo punto viene generalmente affrontato in un workshop di inizializzazione, al momento della creazione dell'organizzazione.

### Assegnazione dei permessi in un tenant

La gestione dei diritti di un utente viene effettuata dalla pagina degli utenti, __tenant per tenant__.

<img src={shivaOnboard_003} />

Per impostazione predefinita, un utente non dispone di alcun diritto. È quindi necessario che l'amministratore che ha effettuato l'invito gli attribuisca i diritti necessari alla sua attività. Basta fare clic sul menu __'Actions'__ dell'utente e scegliere l'opzione __'Modifier'__.

Il menu di attivazione dei diritti viene quindi visualizzato:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere ripetuta per ogni [Tenant](#tenant) dell'[Organisation](#organizzazioni) in cui l'utente deve operare: non esiste un'attribuzione globale a livello di organizzazione.

L'elenco dei permessi e la loro definizione sono accessibili [qui](#permessi).

### Gestione dei proprietari su un tenant

Ogni tenant possiede almeno un proprietario, garantendo così una responsabilità chiara e una gestione efficace delle risorse associate. Inoltre, è possibile dichiarare più proprietari sullo stesso tenant, consentendo una collaborazione e una presa di decisione condivisa. Di seguito sono riportate informazioni importanti da considerare durante la gestione di questi proprietari.

Il proprietario del tenant è un ruolo distinto dal [proprietario dell'organizzazione](#gestione-dei-proprietari-dellorganizzazione): porta la responsabilità di un perimetro di risorse, non della relazione contrattuale.

#### Informazioni importanti sulla gestione dei proprietari

#### 1. Numero di proprietari

- Non esiste un limite tecnico per il numero di proprietari che possono essere definiti sul tenant.

- L'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 proprietari, al fine di incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e di gestione ottimale degli accessi.

#### 2. Aggiunta di un nuovo proprietario

- Durante l'aggiunta di un nuovo proprietario, l'aggiornamento dei suoi permessi può richiedere un tempo fino a 60 minuti.

- Questo tempo di propagazione è normale e consente di assicurarsi che i diritti di accesso siano correttamente applicati a tutti i servizi e le risorse associate.

#### 2. Permessi di un proprietario

- A un proprietario verranno attribuiti tutti i permessi legati ai prodotti attivati sul suo tenant.

- Non è possibile modificare i permessi di un proprietario.

#### 3. Rimozione di un proprietario

- Per rimuovere un proprietario dal tenant, l'utente deve inviare una richiesta al supporto.

- Questa procedura consente di garantire che le modifiche dei diritti di accesso vengano effettuate in modo sicuro e conforme alle buone pratiche di gestione degli accessi.

### Autorizzazione di accesso alla Console: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Nota: *La rimozione di un IP autorizzato viene effettuata tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei diversi servizi deployati. Questa funzionalità consente agli utenti di monitorare in tempo reale il consumo delle proprie risorse, di identificare i servizi più sollecitati e di ottimizzarne l'utilizzo in base alle esigenze.

Nel menu della console, fare clic su "Rapport de consommation" quindi selezionare il periodo di tempo desiderato. Sarà così possibile visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, il che consentirà di analizzare l'utilizzo dei servizi e di ottimizzare la gestione di conseguenza:

<img src={shivaTenantRessources_01} />

## Permessi

La Console consente una gestione dettagliata dei diritti degli utenti di un'organizzazione, con una __segregazione per tenant__.
Inizialmente, è l'account principale del committente che consente la configurazione iniziale degli account e dei permessi associati.
In seguito, il diritto __'iam_write'__ consente a un account di amministrare i permessi degli altri utenti, nel tenant in cui questo diritto gli è stato concesso.

### Permissions disponibili per gli utenti della vostra organizzazione

Quando un utente viene creato, non possiede alcun permesso predefinito. Ogni permesso viene assegnato individualmente e funziona in modo unitario, senza sovrapposizione con altri permessi. Si applicano in congiunzione, il che significa che un utente deve disporre di tutti i permessi richiesti per eseguire un'azione specifica.

I seguenti permessi sono configurabili per ogni utente e per ogni tenant della vostra organizzazione:

- Permessi di tipo "read": consentono solo la consultazione delle risorse senza possibilità di modifica.
- Permessi di tipo "write": autorizzano la modifica delle configurazioni.
- Permessi di tipo "management": autorizzano la gestione avanzata delle risorse.
- Permessi di tipo "console_access": autorizzano le connessioni di tipo PMAD sulle risorse.
- Permessi di tipo "virtual_machine_power": autorizzano la gestione dell'alimentazione di una macchina virtuale.

- __Questi sono permessi, non ruoli.__ A questo titolo, è necessario avere il permesso READ e WRITE per modificare una configurazione.

Ultimo aggiornamento: 20/04/2026

| Nome del permesso                          | Descrizione del permesso                                                                                                  |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consultazione dei log e delle attività                                                                                   |
| activity_write                                | Gestione dei log e delle attività                                                                                        |
| backup_iaas_opensource_read                   | Offerta OpenIaaS - Gestione delle risorse di tipo backup - consultazione                                                         |
| backup_iaas_opensource_write                  | Offerta OpenIaaS - Gestione delle risorse di tipo backup - modifica                                                         |
| backup_iaas_spp_read                          | Offerta Vmware - Gestione delle risorse di tipo backup - consultazione                                                           |
| backup_iaas_spp_write                         | Offerta Vmware - Gestione delle risorse di tipo backup - modifica                                                           |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                   |
| bastion_write                                 | Gestione delle risorse (appliance, sessioni, ecc.) di tipo Bastion                                                             |
| bastion_console_access                        | Autorizzazione all'accesso alla console (ssh/rdp) di una risorsa protetta da un'appliance Bastion                               |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                              |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra                                                |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                 |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                      |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                           |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                            |
| compute_iaas_opensource_replication_recover   | Offerta OpenIaaS - Gestione della replicazione                                                                                    |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc) |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                          |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (consente la cifratura di una macchina virtuale)             |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                              |
| baremetal_management                          | Offerta Bare Metal - Gestione delle risorse di tipo Bare Metal                                                                  |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                             |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di un Bare Metal                                                                    |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                        |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                                 |
| documentation_read                            | Consultazione delle risorse di documentazione di confluence                                                                       |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                |
| iam_offline_access                            | Creazione e eliminazione di Access Token Personali (PAT)                                                                       |
| iam_read                                      | Consultazione dei diritti degli utenti                                                                                          |
| iam_write                                     | Gestione dei diritti degli utenti                                                                                               |
| intervention_read                             | Consultazione dei cambiamenti e delle messa in produzione previste sulla piattaforma                                                 |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                     |
| monitoring_read                               | Consultazione del monitoring                                                                                                    |
| monitoring_write                              | Gestione del monitoring                                                                                                         |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                        |
| network_read                                  | Consultazione delle risorse di rete                                                                                            |
| network_write                                 | Gestione delle risorse di rete                                                                                                 |
| order_read                                    | Consultazione degli ordini di infrastruttura                                                                                    |
| order_write                                   | Creazione di un ordine di infrastruttura                                                                                           |
| object-storage_iam_management                 | Consente di gestire gli account di storage sul prodotto S3                                                                      |
| object-storage_read                           | Consente di visualizzare i bucket e le configurazioni dei bucket                                                                  |
| object-storage_write                          | Consente di modificare i bucket e le configurazioni dei bucket                                                                 |
| openshift_management                          | Consente di connettersi alle piattaforme OpenShift (limitato al tenant)                                                         |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                      |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                                 |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                    |
| tag_read                                      | Consultazione dei tag, ad eccezione dei tag RTMS                                                                                  |
| tag_write                                     | Gestione dei tag, ad eccezione dei tag RTMS                                                                                       |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                 |
| ticket_comment_write                          | Gestione dei commenti                                                                                                      |
| ticket_read                                   | Consultazione dei ticket                                                                                                      |
| ticket_write                                  | Gestione dei ticket                                                                                                           |
| incident_management                           | Gestione degli incidenti                                                                                                         |
| incident_read                                 | Consultazione degli incidenti                                                                                                    |
| billing_read                                  | Consultazione delle dashboard di consumo                                                                                  |
| vpc_read                                      | Offerta VPC - Consultazione delle risorse di rete di tipo VPC                                                                      |
| vpc_write                                     | Offerta VPC - Gestione delle risorse di rete di tipo VPC                                                                           |
| public_cloud_vm_instances_management          | Offerta VM Instances - Gestione delle macchine virtuali                                                                          |
| public_cloud_vm_instances_read                | Offerta VM Instances - Consultazione delle macchine virtuali                                                                     |
| public_cloud_vm_instances_console_access      | Offerta VM Instances - Apertura della console delle macchine virtuali                                                          |
