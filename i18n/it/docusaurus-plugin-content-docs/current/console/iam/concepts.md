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

- l'__[organizzazione](#organizzazioni)__: l'entità contrattuale. Contiene gli account utente, la configurazione di autenticazione e l'insieme dei tuoi tenant;
- il __[tenant](#tenant)__: un raggruppamento di risorse all'interno dell'organizzazione. Contiene le risorse tecniche e i permessi degli utenti.

Tra i due si colloca un __perimetro comune__: l'identità dell'utente. Un account viene creato una sola volta nell'organizzazione e successivamente utilizzato in tutti i tenant ai quali ha accesso.

### Chi gestisce che cosa

| Oggetto gestito                                        | Organizzazione                                | Tenant                                                |
| ------------------------------------------------------ | --------------------------------------------- | ----------------------------------------------------- |
| Contratto e fatturazione                               | Sì                                            | Rapporto di consumo per tenant                        |
| Meccanismo di autenticazione (locale, SSO)             | Sì                                            | No (ereditato dall'organizzazione)                    |
| Ciclo di vita degli account (invito, eliminazione)     | Sì                                            | No (gli account sono globali per l'organizzazione)    |
| __Permessi degli utenti__                              | __No__                                        | __Sì, tenant per tenant__                             |
| __Designazione di un proprietario__                    | __Sì__ (proprietario dell'organizzazione)     | __Sì__ (proprietario del tenant)                      |
| Risorse tecniche (calcolo, storage, rete)              | No                                            | Sì                                                    |
| Indirizzi IP autorizzati                               | No                                            | Sì                                                    |

:::info[Da ricordare]
I permessi non vengono __mai__ configurati a livello di organizzazione: sono definiti tenant per tenant. Il livello di organizzazione consente invece di designare un utente come __proprietario dell'organizzazione__.
:::

## Perimetro comune: l'account utente

Gli account di accesso alla Console vengono creati dall'account master del committente su invito (indipendentemente dalla directory di autenticazione).
Le credenziali sono globali per la tua [Organizzazione](#organizzazioni): un utente dispone di un solo account, indipendentemente dal numero di tenant in cui opera.

*__Nota:__ [La federazione delle identità viene gestita a livello di organizzazione](#meccanismi-di-autenticazione)*

Le azioni descritte di seguito riguardano l'account in sé, indipendentemente dal tenant al quale sei connesso.

### Aggiornare il proprio profilo

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, quindi __'Impostazioni utente'__ e seleziona l'azione __'Aggiorna il tuo profilo'__.

Vai quindi alla tua casella di posta e fai clic sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare il tuo profilo.

__Avviso__: Verifica di essere tu a richiedere l'aggiornamento del profilo. Segnala tramite un ticket di supporto tutte le richieste che non provengono da te.

<img src={shivaProfil_014} />

### Reimpostazione della password

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, quindi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta password'__.

Quindi, accedi alla tua casella di posta e fai clic sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua password.

__Avviso__: Assicurati di essere tu a richiedere la reimpostazione della password. Segnala eventuali richieste non effettuate da te tramite un ticket di supporto.

<img src={shivaProfil_015} />

### Reimpostazione dell'autenticazione a due fattori

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, quindi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta MFA'__.

Quindi, accedi alla tua casella di posta elettronica e fai clic sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua autenticazione a due fattori.

__Attenzione__: Assicurati di essere tu a richiedere la reimpostazione della tua autenticazione a due fattori. Segnala tramite un ticket di supporto qualsiasi richiesta che non proviene da te.

<img src={shivaProfil_016} />

### Modificare la lingua di un utente

La modifica della lingua di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione è impostata per ogni tenant [Tenant](#tenant).

### Sottoscrizione alle notifiche tematiche

La gestione delle sottoscrizioni consente di ricevere le e-mail relative alle tematiche attivate, che verranno inviate automaticamente al verificarsi di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "Le mie sottoscrizioni" :

<img src={shivaProfil_007} />

 Ad esempio, in caso di incidente, verranno generate notifiche e-mail specifiche per questa tematica.

L'elenco delle tematiche disponibili è soggetto a evoluzione e ad un progressivo arricchimento per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

### Disconnettersi

La disconnessione di un utente deve essere eseguita nel suo __'Profilo'__, in alto a destra dello schermo, quindi __'Disconnetti'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una disconnessione automatica viene eseguita alla scadenza del token di sessione (JWT Token).

## Organizzazioni

L'organizzazione è collegata al vostro __account sponsor__ e al __contratto Cloud Temple associato__. Rappresenta la vostra entità (società, dipartimento, team, ...) titolare del rapporto contrattuale tra Cloud Temple e voi.

### Principio di un'organizzazione

L'organizzazione ha quattro ruoli principali:

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello di Console o remota tramite un servizio di federazione delle identità,
- Gestisce l'insieme dei __account utente__,
- __Raggruppa i tenant__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per le esigenze della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a richiedere risorse in un tenant, ma non in un altro.

### Cosa si gestisce a livello di organizzazione

Il perimetro dell'organizzazione comprende:

- il __meccanismo di autenticazione__ comune a tutti gli account,
- il __ciclo di vita degli account utente__: invito, reiscrizione, eliminazione,
- la __designazione dei proprietari dell'organizzazione__,
- l'__elenco dei tenant__ della tua architettura.

:::warning[I permessi non si gestiscono qui]
La pagina __'Utenti'__ dell'organizzazione consente di creare un account, designarlo come proprietario ed eliminarlo. __Non__ consente di assegnare permessi: questi sono propri di ciascun tenant e si configurano dal tenant interessato (vedi [Assegnazione dei permessi in un tenant](#assegnazione-dei-permessi-in-un-tenant)).
:::

### Meccanismi di autenticazione

La Console consente, a livello di organizzazione, __la configurazione del meccanismo di autenticazione__. È possibile
utilizzare il repository di autenticazione locale della Console oppure collegare la propria organizzazione a uno dei
propri repository di autenticazione.

I seguenti repository esterni sono supportati:

- Repository compatibili con __OpenID Connect__,
- Repository compatibili con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

:::info[Importante]
È richiesto un indirizzo e-mail per tutti gli account derivanti da una federazione di identità. Gli account creati senza indirizzo e-mail non potranno effettuare l'accesso e potrebbero essere eliminati automaticamente.
:::

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione avviene tramite invito. Per invitare un utente in una [Organizzazione](#organizzazioni), vai al menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde e poi nel sottomenu __'Utenti'__.

Fai clic sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indica quindi l'indirizzo email dell'utente

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

Per impostazione predefinita, __un utente appena creato non dispone di alcun diritto__. È quindi necessario assegnargli in seguito i permessi necessari alla sua attività, __in ogni tenant__ in cui deve operare.

### Gestione dei proprietari dell'organizzazione

Il __proprietario dell'organizzazione__ è l'unico ruolo assegnabile a livello di organizzazione. È distinto dal [proprietario di un tenant](#gestione-dei-proprietari-su-un-tenant).

- La designazione avviene dalla pagina __'Utenti'__ del pannello Amministrazione, tramite il menu delle azioni della riga dell'utente.
- Questo ruolo dà accesso alla __vista organizzazione__: monitoraggio contrattuale, elenco dei tenant, gestione degli account.
- Non si tratta di un permesso granulare: non esiste alcun permesso di tipo `read` / `write` da assegnare a livello di organizzazione.
- Un utente __'Proprietario'__ non può essere eliminato.

### Reiscrizione di un utente

Quando un utente è stato provisionato ma non ha convalidato la propria iscrizione entro la scadenza dell'email inviata dalla Console, non può più confermare la propria iscrizione.

È quindi possibile inviargli nuovamente un link affinché rinnovi la propria prima iscrizione.

La reiscrizione di un utente deve essere eseguita nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Selezionare l'utente che si desidera reiscrivere, quindi fare clic sul pulsante di azione a destra della riga e selezionare __'Reiscrizione'__.

__Attenzione__: Assicurarsi di essere l'effettivo richiedente della reiscrizione del proprio account utente. Segnalare tramite un ticket di supporto tutte le richieste che non provengono da voi.

<img src={shivaProfil_012} />

### Eliminazione di un utente

L'eliminazione di un utente deve essere eseguita nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Seleziona l'utente che desideri eliminare, quindi fai clic sul pulsante di azione alla fine della riga e su __'Elimina'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: Non è possibile eliminare se stessi e non è possibile eliminare un utente __'Proprietario'__.

## Tenant

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Una [Organizzazione](#organizzazioni) ha almeno un tenant (chiamato __tenant predefinito__, rinominabile). In genere, più tenant vengono utilizzati per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Test__
- Un tenant __Validazione__

È inoltre possibile organizzare le risorse con una __vista applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un tenant specifico e non sono condivise con gli altri tenant. Ad esempio, un cluster di iper-visor e le relative reti L2 sono disponibili solo in un tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità di rete tra i tenant.

È possibile far evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve essere necessariamente inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, ovvero un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Un VLAN di rete.

| Riferimento ordine                                         | Unità    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant             | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |

### Cosa si gestisce a livello di tenant

Il perimetro del tenant comprende:

- le __risorse tecniche__ ordinate e distribuite,
- i __permessi degli utenti__ su tali risorse,
- la __designazione dei proprietari del tenant__,
- gli __indirizzi IP autorizzati__ ad accedere al tenant,
- il __monitoraggio del consumo__ delle risorse.

I permessi degli utenti devono essere definiti in ogni tenant. Un account può quindi essere autorizzato a richiedere risorse in un tenant, ma non in un altro. Pertanto, ogni organizzazione deve valutare attentamente i tenant desiderati: questo aspetto viene generalmente affrontato durante la sessione di inizializzazione, al momento della creazione dell'organizzazione.

### Assegnazione dei permessi in un tenant

La gestione dei diritti di un utente viene effettuata dalla pagina degli utenti, __tenant per tenant__.

<img src={shivaOnboard_003} />

Per impostazione predefinita, un utente non dispone di diritti. È quindi necessario che l'amministratore che ha inviato l'invito gli conceda i diritti necessari per la sua attività. Basta fare clic sul menu __'Azioni'__ dell'utente e selezionare l'opzione __'Modifica'__.

Appare quindi il menu di attivazione dei diritti:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere rieseguita per ogni [Tenant](#tenant) dell'[Organizzazione](#organizzazioni) in cui l'utente deve operare: non esiste un'assegnazione globale a livello di organizzazione.

L'elenco delle autorizzazioni e le relative definizioni sono accessibili [qui](#permessi).

### Gestione dei proprietari su un tenant

Ogni tenant dispone di almeno un proprietario, garantendo così una responsabilità chiara e una gestione efficace delle risorse associate. Inoltre, è possibile assegnare più proprietari allo stesso tenant, consentendo una collaborazione e una presa di decisioni condivisa. Di seguito, troverai informazioni importanti da considerare durante la gestione di questi proprietari.

Il proprietario di un tenant è un ruolo distinto dal [proprietario dell'organizzazione](#gestione-dei-proprietari-dellorganizzazione): assume la responsabilità di un perimetro di risorse, non del rapporto contrattuale.

#### Informazioni importanti sulla gestione dei proprietari

#### 1. Numero di proprietari

- Non esiste un limite tecnico al numero di proprietari che possono essere definiti sul tenant.

- L'interfaccia di gestione (IHM) emette un avviso quando sono presenti più di 3 proprietari, al fine di incoraggiare a limitare il numero di proprietari per motivi di sicurezza e per una gestione ottimale degli accessi.

#### 2. Aggiunta di un nuovo proprietario

- Durante l'aggiunta di un nuovo proprietario, l'aggiornamento delle sue autorizzazioni potrebbe richiedere fino a 60 minuti.

- Questo tempo di propagazione è normale e garantisce che i diritti di accesso vengano applicati correttamente a tutti i servizi e alle risorse associati.

#### 2. Permessi di un proprietario

- Al proprietario verranno assegnati tutti i permessi relativi ai prodotti attivati sul suo tenant.

- Non è possibile modificare i permessi di un proprietario.

#### 3. Rimozione di un proprietario

- Per rimuovere un proprietario dal tenant, l'utente deve inviare una richiesta al supporto.

- Questa procedura garantisce che le modifiche ai diritti di accesso vengano effettuate in modo sicuro e in conformità alle best practice per la gestione degli accessi.

### Autorizzazione all'accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della certificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei diversi servizi distribuiti. Questa funzionalità consente agli utenti di monitorare in tempo reale il consumo delle proprie risorse, identificare i servizi più sollecitati e ottimizzarne l'utilizzo in base alle esigenze.

Nel menu della console, fare clic su "Report di consumo" e selezionare il periodo di tempo desiderato. In questo modo sarà possibile visualizzare nel dettaglio il consumo delle risorse cloud nel periodo definito, consentendo di analizzare l'utilizzo dei servizi e ottimizzare di conseguenza la propria gestione:

<img src={shivaTenantRessources_01} />

## Permessi

La Console consente una gestione granulare dei diritti degli utenti di un'organizzazione, con una __segregazione per tenant__.
Inizialmente, è l'account principale del committente a consentire la configurazione iniziale degli account e dei permessi associati.
Successivamente, il permesso __'iam_write'__ consente a un account di gestire i permessi degli altri utenti, nel tenant in cui tale diritto gli è stato concesso.

### Permessi disponibili per gli utenti della tua organizzazione

Quando un utente viene creato, non dispone di alcun permesso di default. Ogni permesso viene assegnato individualmente e funziona in modo unitario, senza sovrapposizioni con altri permessi. Si applicano congiuntamente, il che significa che un utente deve disporre di tutti i permessi richiesti per eseguire un'azione specifica.

I seguenti permessi sono configurabili per ogni utente e per ogni tenant della tua organizzazione :

- Permessi di tipo “read” : consentono esclusivamente la consultazione delle risorse senza possibilità di modifica.
- Permessi di tipo “write” : autorizzano la modifica delle configurazioni.
- Permessi di tipo “management” : autorizzano la gestione avanzata delle risorse.
- Permessi di tipo “console_access” : autorizzano le connessioni di tipo PMAD sulle risorse.
- Permessi di tipo “virtual_machine_power” : autorizzano la gestione dell'alimentazione di una macchina virtuale.

- __Questi sono permessi, non ruoli.__ A tal fine, è necessario disporre del permesso READ e WRITE per modificare una configurazione.

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
| bastion_write                                 | Gestione delle risorse (appliances, sessions,...) di tipo Bastion                                                             |
| bastion_console_access                        | Autorizzazione all'accesso alla console (ssh/rdp) di una risorsa protetta da un'appliance Bastion                               |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                              |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra                                                |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                 |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                      |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                           |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                            |
| compute_iaas_opensource_replication_recover   | Offerta OpenIaaS - Gestione della replicazione                                                                                    |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (règles affinité/anti-affinité, configuration drs, etc) |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                          |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (permet le chiffrement d'une machine virtuelle)             |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                              |
| baremetal_management                          | Offerta Bare Metal - Gestione delle risorse di tipo Bare Metal                                                                  |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                             |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di un Bare Metal                                                                    |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                        |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                                 |
| documentation_read                            | Consultazione delle risorse documentali di Confluence                                                                       |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                |
| iam_offline_access                            | Creazione e rimozione di Access Token Personnels (PAT)                                                                       |
| iam_read                                      | Consultazione dei diritti utente                                                                                          |
| iam_write                                     | Gestione dei diritti utente                                                                                               |
| intervention_read                             | Consultazione delle modifiche e dei rilasci in produzione previsti sulla piattaforma                                                 |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                     |
| monitoring_read                               | Consultazione del monitoring                                                                                                    |
| monitoring_write                              | Gestione del monitoring                                                                                                         |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e sugli host                                                        |
| network_read                                  | Consultazione delle risorse di rete                                                                                            |
| network_write                                 | Gestione delle risorse di rete                                                                                                 |
| order_read                                    | Consultazione degli ordini infrastrutturali                                                                                    |
| order_write                                   | Creazione di ordini infrastrutturali                                                                                           |
| object-storage_iam_management                 | Consente di gestire gli account di storage sul prodotto S3                                                                      |
| object-storage_read                           | Consente di visualizzare i bucket e le relative configurazioni                                                                  |
| object-storage_write                          | Consente di modificare i bucket e le relative configurazioni                                                                 |
| openshift_management                          | Consente di connettersi alle piattaforme OpenShift (scopé au tenant)                                                         |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                      |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                                 |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                    |
| tag_read                                      | Consultazione dei tag, esclusi i tag RTMS                                                                                  |
| tag_write                                     | Gestione dei tag, esclusi i tag RTMS                                                                                       |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                 |
| ticket_comment_write                          | Gestione dei commenti                                                                                                      |
| ticket_read                                   | Consultazione dei ticket                                                                                                      |
| ticket_write                                  | Gestione dei ticket                                                                                                           |
| incident_management                           | Gestione degli incidenti                                                                                                         |
| incident_read                                 | Consultazione degli incidenti                                                                                                    |
| billing_read                                  | Consultazione dei dashboard dei consumi                                                                                  |
| vpc_read                                      | Offerta VPC - Consultazione delle risorse di rete di tipo VPC                                                                      |
| vpc_write                                     | Offerta VPC - Gestione delle risorse di rete di tipo VPC                                                                           |
| public_cloud_vm_instances_management          | Offerta VM Instances - Gestione delle macchine virtuali                                                                          |
| public_cloud_vm_instances_read                | Offerta VM Instances - Consultazione delle macchine virtuali                                                                     |
| public_cloud_vm_instances_console_access      | Offerta VM Instances - Apertura della console delle macchine virtuali                                                          |
