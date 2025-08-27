---
title: Concetti
---
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_012 from './images/shiva_profil_012.png'
import shivaProfil_014 from './images/shiva_profil_014.png'
import shivaProfil_015 from './images/shiva_profil_015.png'
import shivaProfil_016 from './images/shiva_profil_016.png'
import shivaProfil_013 from './images/shiva_profil_013.png'
import shivaProfil_010 from './images/shiva_profil_010.png'
import shivaProfil_009 from './images/shiva_profil_009.png'
import shivaProfil_011 from './images/shiva_profil_011.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaTenantRessources_01 from './images/shiva_tenant_ressources_01.png'

## Utenti

I conti di accesso alla console Shiva vengono creati dal conto master del cliente su invito (indipendentemente dal repository di autenticazione). Le credenziali sono globali alla tua [Organizzazione](#organisations).

*__Nota :__ [La federazione di identità viene gestita a livello di organizzazione](#mécanismes-dauthentification)*

### Creazione di un account utente nella vostra organizzazione

La creazione di un account utente nella vostra organizzazione avviene tramite invito. Per invitare un utente in un'[Organizzazione](#organisations), andare nel menu __'Amministrazione'__ a sinistra dello schermo sul nastro verde, quindi nel sottomenu __'Utenti'__.

Fare clic sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Inserire quindi l'indirizzo e-mail dell'utente

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione delle autorizzazioni a un utente

La gestione dei diritti utente avviene dalla pagina utente.

<img src={shivaOnboard_003} />

Di default, un utente non ha diritti. È quindi necessario che l'amministratore che ha inviato l'invito gli conceda i diritti necessari per la sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Appare quindi il menu di attivazione delle autorizzazioni:

<img src={shivaOnboard_005} />

La configurazione delle autorizzazioni deve essere effettuata per ogni [Tenant](#tenant) dell'[Organizzazione](#organisations).

La lista delle autorizzazioni e la loro definizione è accessibile [qui](#permissions).

### Ririscrizione di un utente

Quando un utente è stato provisionato ma non ha confermato la propria iscrizione nel periodo di scadenza dell'email inviata dalla Console, non può più confermare l'iscrizione. È quindi possibile inviargli un link per rinnovare la sua prima iscrizione.

La ririscrizione di un utente deve essere effettuata nella scheda __'Utente'__ del pannello di Amministrazione, in basso a sinistra dello schermo.

Selezionare l'utente che si desidera ririscriere, quindi fare clic sul pulsante di azione in fondo alla riga e su __'Ririscrizione'__.

__Attenzione__: Assicurarsi di essere effettivamente l'origine della richiesta di ririscrizione del proprio account utente. Segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_012} />

### Aggiornare il proprio profilo

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Impostazioni utente'__ e seleziona l'azione __'Aggiornare il proprio profilo'__.

Vai quindi nella tua casella di posta e clicca sul collegamento generato dalla Console. Segui semplicemente i passaggi per aggiornare il tuo profilo.

__Attenzione__: Assicurati di essere effettivamente l'autore della richiesta di aggiornamento del profilo. Ti preghiamo di segnalare tutte le richieste non provenienti da te tramite un ticket di supporto.

<img src={shivaProfil_014} />

### Reimpostazione della password

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona il tuo __'Profilo'__, in alto a destra dello schermo, poi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta password'__.

Vai quindi alla tua casella di posta e clicca sul collegamento generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua password.

__Attenzione__: Assicurati di essere tu stesso a richiedere la reimpostazione della tua password. Segnala eventuali richieste non effettuate da te tramite un ticket di supporto.

<img src={shivaProfil_015} />

### Ripristino del doppio fattore di autenticazione

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Impostazioni utente'__ e seleziona l'azione __'Ripristina MFA'__.

Vai poi nella tua casella di posta e fai clic sul collegamento generato dalla Console. Segui semplicemente i passaggi per aggiornare il tuo doppio fattore di autenticazione.

__Avviso__: Assicurati di essere effettivamente l'autore della richiesta di ripristino del tuo doppio fattore di autenticazione. Prego, segnala tutte le richieste che non provengono da te tramite un ticket di supporto.

<img src={shivaProfil_016} />

### Eliminazione di un utente

L'eliminazione di un utente va effettuata nella scheda __'Utente'__ del pannello di Amministrazione, in basso a sinistra dello schermo.

Selezionate l'utente che desiderate eliminare, quindi fate clic sul pulsante d'azione alla fine della riga, poi __'Elimina'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: Non è possibile eliminare se stessi e non è possibile eliminare un utente __'Proprietario'__.

### Disconnettersi

La disconnessione di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, poi __'Disconnettersi'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una disconnessione automatica viene eseguita al termine del token (JWT Token) di sessione.

### Cambiare la lingua di un utente

Il cambiamento della lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione è effettuata per ogni tenant [Tenant](#tenant).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere gli e-mail relativi alle tematiche attivate che verranno inviati automaticamente in caso di verificarsi di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti" :

<img src={shivaProfil_007} />

Ad esempio, in caso di incidente, verranno generate notifiche via e-mail specifiche per questa tematica.

La lista delle tematiche disponibili è soggetta a evoluzione e arricchimento progressivo per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permessi

La console Shiva permette una gestione fine dei diritti degli utenti di un'organizzazione, con una segregazione per tenant.  
Inizialmente, è il account principale del cliente che permette la configurazione iniziale degli account e dei permessi associati.  
In seguito, il diritto __'iam_write'__ permette a un account di gestire i permessi degli altri utenti.

### Permessi disponibili per gli utenti della vostra organizzazione

Quando un utente viene creato, non possiede alcun permesso predefinito. Ogni permesso viene assegnato individualmente e funziona in modo autonomo, senza sovrapposizione con altri permessi. Essi si applicano in combinazione, il che significa che un utente deve disporre di tutti i permessi necessari per eseguire un'azione specifica.

I seguenti permessi sono configurabili per ogni utente e per ogni tenant della vostra organizzazione:

- Permessi di tipo "read": consentono unicamente la consultazione delle risorse senza possibilità di modifica.
- Permessi di tipo "write": autorizzano la modifica delle configurazioni.
- Permessi di tipo "management": autorizzano la gestione avanzata delle risorse.
- Permessi di tipo "console_access": autorizzano le connessioni tipo PMAD sulle risorse.
- Permessi di tipo "virtual_machine_power": autorizzano la gestione dell'alimentazione di una macchina virtuale.

- __Questi sono permessi, non ruoli.__ Per questo motivo, è necessario disporre del permesso READ e WRITE per modificare una configurazione.

Ultima modifica: 16/07/2025

| Nome del permesso                          | Descrizione del permesso                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consulta dei log e delle attività                                                                                          |
| activity_write                                | Gestione dei log e delle attività                                                                                          |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                    |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                        |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                      |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                          |
| bastion_read                                  | Consulta delle risorse di tipo bastion                                                                                     |
| bastion_write                                 | Gestione delle risorse (appliance, sessioni,...) di tipo Bastion                                                           |
| bastion_console_access                        | Autorizzazione all'accesso alla console (ssh/rdp) di una risorsa protetta da un'appliance Bastion                              |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                         |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                           |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                   |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                    |
| compute_iaas_opensource_replication_recover   | Offerta OpenIaaS - Gestione della replicazione                                                              |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                           |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione DRS, ecc.) |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                    |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                     |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (consente il crittografia di una macchina virtuale)        |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                      |
| baremetal_management                          | Offerta Bare Metal - Gestione delle risorse di tipo Bare Metal                                                             |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                        |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di un Bare Metal                                                              |
| console_public_access_read                    | Consultazione delle IP autorizzate ad accedere alla console                                                                |
| console_public_access_write                   | Aggiunta di IP autorizzate ad accedere alla console                                                                         |
| documentation_read                            | Consultazione delle risorse documentazione di confluence                                                                   |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                             |
| iam_offline_access                            | Creazione e cancellazione di Access Token Personali (PAT)                                                                 |
| iam_read                                      | Consultazione dei diritti utente                                                                                           |
| iam_write                                     | Gestione dei diritti utente                                                                                                |
| intervention_read                             | Consultazione dei cambiamenti e delle implementazioni previste sulla piattaforma                                              |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                             |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                  |
| monitoring_read                               | Consultazione del monitoraggio                                                                                             |
| monitoring_write                              | Gestione del monitoraggio                                                                                                  |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                           |
| network_read                                  | Consultazione delle risorse di rete                                                                                        |
| network_write                                 | Gestione delle risorse di rete                                                                                             |
| order_read                                    | Consultazione degli ordini infrastrutturali                                                                               |
| order_write                                   | Creazione di un ordine infrastrutturale                                                                                    |
| object-storage_iam_management                 | Consente di gestire i conti di storage sul prodotto S3                                                                    |
| object-storage_read                           | Consente di visualizzare i bucket e le configurazioni dei bucket                                                           |
| object-storage_write                          | Consente di modificare i bucket e le configurazioni dei bucket                                                             |
| openshift_management                          | Consente di connettersi alle piattaforme Openshift (scopato al tenant)                                                     |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                     |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                     |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                              |
| tag_read                                      | Consultazione dei tag, esclusi i tag RTMS                                                                                  |
| tag_write                                     | Gestione dei tag, esclusi i tag RTMS                                                                                       |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                 |
| ticket_comment_write                          | Gestione dei commenti                                                                                                      |
| ticket_read                                   | Consultazione dei ticket                                                                                                   |
| ticket_write                                  | Gestione dei ticket                                                                                                        |
| incident_management                           | Gestione degli incidenti                                                                                                   |
| incident_read                                 | Consultazione degli incidenti                                                                                              |

## Organizzazioni

L'organizzazione è collegata al vostro __conto di fatturazione__ e al __contratto Cloud Temple associato__. Rappresenta la vostra entità (azienda, dipartimento, team, ...) che detiene la relazione contrattuale tra Cloud Temple e voi.

### Principio di un'organizzazione

L'organizzazione ha quattro ruoli principali:

- Rappresenta __l'entità contrattuale__ per gli aspetti di tracciamento e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale al livello della console Shiva o remota tramite un servizio di federazione degli identificativi,
- Gestisce l'insieme di __account utenti__,
- __Federare i tenants__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per i bisogni della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva consente a livello di organizzazione __la configurazione del meccanismo di autenticazione__. È possibile utilizzare il repository di autenticazione locale della console Shiva oppure collegare l'organizzazione a uno dei propri repository di autenticazione.

I seguenti repository esterni sono supportati:

- Repositori compatibili con __OpenID Connect__,
- Repositori compatibili con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un'[Organizzazione](#organizzazioni) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Di solito, vengono utilizzati più tenants per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Test__
- Un tenant __Qualifica__

Ma è anche possibile organizzare le cose con una __prospettiva applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate vengono assegnate a un tenant specifico e non sono condivise con gli altri tenants. Ad esempio, un cluster di Hypervisor e le relative reti L2 sono disponibili solo in un tenant. Per quanto riguarda le reti, è possibile richiedere reti __cross-tenant__ per garantire la continuità di rete tra i tenants.

Le autorizzazioni degli utenti devono essere definite in ogni tenant. Pertanto, ogni organizzazione deve riflettere attentamente sui tenants desiderati. Questo punto viene generalmente trattato in una sessione di inizializzazione, al momento della creazione dell'organizzazione.

È possibile evolvere l'architettura aggiungendo o eliminando tenants.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con un minimo di risorse:

- Un'area di disponibilità (AZ, ovvero un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Un VLAN di rete.

| Riferimento di ordine                                        | Unità    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant                 | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Attivazione di un'area di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |

### Gestione dei proprietari su un tenant

Ogni tenant ha almeno un proprietario, garantendo così una responsabilità chiara e una gestione efficace delle risorse associate. Inoltre, è possibile dichiarare più proprietari per lo stesso tenant, consentendo una collaborazione e una decisione condivisa. Di seguito, troverai informazioni importanti da considerare durante la gestione di questi proprietari.

#### Informazioni importanti sulla gestione dei proprietari

#### 1. Numero di proprietari

* Non esiste un limite tecnico sul numero di proprietari che possono essere definiti sul tenant.
- L'interfaccia di gestione (UI) emette un avviso quando ci sono più di 3 proprietari, per incoraggiare a limitare il numero di proprietari per motivi di sicurezza e gestione ottimale degli accessi.

#### 2. Aggiunta di un nuovo proprietario

* Durante l'aggiunta di un nuovo proprietario, l'aggiornamento dei suoi permessi può richiedere un ritardo che può durare fino a 60 minuti.
- Questo tempo di propagazione è normale e permette di verificare che i diritti di accesso siano correttamente applicati a tutti i servizi e le risorse associati.

#### 2. Permessi di un proprietario

* Un proprietario verrà assegnato l'insieme delle permessi relativi ai prodotti attivati sul suo tenant.
- Non è possibile modificare i permessi di un proprietario.

#### 3. Rimozione di un proprietario

* Per rimuovere un proprietario dal tenant, l'utente deve inviare una richiesta al supporto.
- Questa procedura permette di garantire che le modifiche ai diritti di accesso vengano effettuate in modo sicuro e conforme alle buone pratiche di gestione degli accessi.

### Autorizzazione all'accesso a un tenant: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualifica SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato limitando l'accesso solo agli utenti provenienti da aree IP specifiche, riducendo così i rischi di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei diversi servizi distribuiti. Questa funzionalità permette agli utenti di tracciare in tempo reale il consumo delle proprie risorse, di identificare i servizi più richiesti e di ottimizzare il loro utilizzo in base alle esigenze.

Nel menu della console, fare clic su "Report di consumo" e selezionare il periodo desiderato. Potrai così visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, il che ti permetterà di analizzare l'utilizzo dei servizi e di ottimizzare la gestione in conseguenza:

<img src={shivaTenantRessources_01} />