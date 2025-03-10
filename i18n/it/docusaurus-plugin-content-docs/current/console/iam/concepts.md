---
title: Concepts
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

Gli account di accesso alla console Shiva sono creati dall'account master del committente su invito (qualunque sia il repository di autenticazione).
Le informazioni di identificazione sono globali alla tua [Organizzazione](#organisations).

*__Nota:__ [La federazione d'identità si gestisce a livello dell'organizzazione](#organisations#mecanismes-dauthentification)*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione avviene tramite invito. Per invitare un utente in un'[Organizzazione](#organisations), vai nel menu __'Amministrazione'__ a sinistra del tuo schermo sulla barra verde e poi nel sottomenu __'Utenti'__.

Clicca sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indica poi l'indirizzo email dell'utente

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà connettersi alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti utente si effettua dalla pagina utente.

<img src={shivaOnboard_003} />

Per impostazione predefinita, un utente non ha diritti. È quindi necessario che l'amministratore che ha fatto l'invito gli conceda i diritti necessari per la sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Il menu di attivazione dei diritti appare quindi:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere fatta per ogni [Tenant](#tenants) dell'[Organizzazione](#organisations).

La lista dei permessi e la loro definizione è accessibile [qui](#permissions).

### Reiscrizione di un utente

Quando un utente è stato fornito ma non ha convalidato la sua iscrizione entro il termine di scadenza dell'email inviata dalla Console, non può più confermare la sua iscrizione. È quindi possibile inviargli nuovamente un link affinché rinnovi la sua prima iscrizione.

La reiscrizione di un utente deve essere effettuata nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Seleziona l'utente che desideri reiscrivere, poi clicca sul pulsante di azione alla fine della riga e poi __'Reiscrizione'__.

**Attenzione**: Assicurati di essere tu all'origine della richiesta di reiscrizione del tuo account utente. Ti preghiamo di segnalare tutte le richieste che non provengono da te tramite un ticket di supporto.

<img src={shivaProfil_012} />

### Aggiornare il proprio profilo

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Parametri utente'__ e seleziona l'azione __'Aggiorna il tuo profilo'__.

Vai poi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare il tuo profilo.

**Attenzione**: Assicurati di essere tu all'origine della richiesta di aggiornamento del profilo. Ti preghiamo di segnalare tutte le richieste che non provengono da te tramite un ticket di supporto.

<img src={shivaProfil_014} />

### Reimpostazione della password

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Parametri utente'__ e seleziona l'azione __'Reimposta password'__.

Vai poi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua password.

**Attenzione**: Assicurati di essere tu all'origine della richiesta di reimpostazione della tua password. Ti preghiamo di segnalare tutte le richieste che non provengono da te tramite un ticket di supporto.

<img src={shivaProfil_015} />

### Reimpostazione dell'autenticazione a due fattori

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Parametri utente'__ e seleziona l'azione __'Reimposta MFA'__.

Vai poi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua autenticazione a due fattori.

**Attenzione**: Assicurati di essere tu all'origine della richiesta di reimpostazione della tua autenticazione a due fattori. Ti preghiamo di segnalare tutte le richieste che non provengono da te tramite un ticket di supporto.

<img src={shivaProfil_016} />

### Eliminazione di un utente

L'eliminazione di un utente deve essere effettuata nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Seleziona l'utente che desideri eliminare, poi clicca sul pulsante di azione alla fine della riga e poi __'Elimina'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: Non puoi eliminare te stesso e non puoi eliminare un utente __'Proprietario'__.

### Disconnettersi

La disconnessione di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, poi __'Disconnetti'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una disconnessione automatica viene effettuata alla scadenza del token (JWT Token) di sessione.

### Cambiare la lingua di un utente

Il cambio di lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

<img src={shivaProfil_006} />

La configurazione viene fatta per ogni tenant [Tenant](#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti permette di ricevere le email relative alle tematiche attivate che saranno automaticamente inviate al verificarsi di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

 Per esempio, in caso di incidente, verranno generate notifiche email specifiche per questa tematica.

La lista delle tematiche disponibili è suscettibile di evolversi e arricchirsi progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permessi

La console Shiva permette una gestione fine dei diritti degli utenti di un'organizzazione, con una segregazione per tenant.
Inizialmente, è l'account principale del committente che permette la configurazione iniziale degli account e dei permessi associati.
Successivamente, il diritto __'iam_write'__ permette a un account di amministrare i permessi degli altri utenti.

### Permessi disponibili per gli utenti della tua organizzazione

Quando un utente viene creato, non possiede alcun permesso per impostazione predefinita. Ogni permesso viene assegnato individualmente e funziona in modo unitario, senza sovrapposizioni con altri permessi. Si applicano in congiunzione, il che significa che un utente deve disporre di tutti i permessi richiesti per eseguire un'azione specifica.

I seguenti permessi sono configurabili per ogni utente e per ogni tenant della tua organizzazione:
	•	Permessi di tipo "read": consentono solo la consultazione delle risorse senza possibilità di modifica.
	•	Permessi di tipo "write": autorizzano la modifica delle configurazioni.
 	•	Permessi di tipo "management": autorizzano la gestione avanzata delle risorse.

- __Sono permessi, non ruoli.__ A questo titolo, è necessario avere il permesso READ e WRITE per modificare una configurazione.

Ultimo aggiornamento il: 23/01/2025

| Nome del permesso                             | Descrizione del permesso                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultazione dei log e delle attività                                                                                         |
| activity_write                                | Gestione dei log e delle attività                                                                                              |
| backup_iaas_opensource_read                   | Gestion des ressources di tipo backup - Offerta OpenIaaS - consultazione                                                       |
| backup_iaas_opensource_write                  | Gestion des ressources di tipo backup - Offerta OpenIaaS - modifica                                                            |
| backup_iaas_spp_read                          | Gestion des ressources di tipo backup - Offerta Vmware - consultazione                                                         |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                               |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                     |
| bastion_write                                 | Gestione delle risorse (appliances, sessioni,...) di tipo Bastion                                                               |
| bastion_console_access                        | Autorizzazione accesso alla console (ssh/rdp) di una risorsa protetta da un appliance Bastion                                   |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                              |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra                                                   |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                             |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                         |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole affinità/anti-affinità, configurazione drs, ecc.)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                         |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                          |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (permette la crittografia di una macchina virtuale)           |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                           |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                             |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di un Bare Metal                                                                    |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                     |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                             |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                            |
| documentation_read                            | Consultazione delle risorse documentazione di confluence                                                                        |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                  |
| iam_offline_access                            | Creazione e rimozione di Access Token Personali (PAT)                                                                           |
| iam_read                                      | Consultazione dei diritti utenti                                                                                                |
| iam_write                                     | Gestione dei diritti utenti                                                                                                     |
| intervention_read                             | Consultazione delle modifiche e messe in produzione previste sulla piattaforma                                                  |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                  |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                       |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                  |
| monitoring_write                              | Gestione del monitoraggio                                                                                                       |
| metric_read                                   | Consultazione dei dati di salute su macchine virtuali e host                                                                    |
| network_read                                  | Consultazione delle risorse network                                                                                             |
| network_write                                 | Gestione delle risorse network                                                                                                  |
| order_read                                    | Consultazione degli ordini infrastrutture                                                                                       |
| order_write                                   | Creazione di ordine infrastrutture                                                                                              |
| object-storage_iam_management                 | Permette la gestione degli account di storage sul prodotto S3                                                                   |
| object-storage_read                           | Permette di visualizzare i buckets e le configurazioni dei buckets                                                              |
| object-storage_write                          | Permette di modificare i buckets e le configurazioni dei buckets                                                                |
| openshift_management                          | Permette di connettersi sulle piattaforme Openshift (scoperto al tenant)                                                        |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                          |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                          |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                   |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                       |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                            |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                      |
| ticket_comment_write                          | Gestione dei commenti                                                                                                           |
| ticket_read                                   | Consultazione dei ticket                                                                                                        |
| ticket_write                                  | Gestione dei ticket                                                                                                             |

## Organisations

L'organizzazione è collegata al tuo __account sponsor__ e al __contratto Cloud Temple associato__. Rappresenta la tua entità (azienda, dipartimento, squadra, ...) che porta la relazione contrattuale tra Cloud Temple e te.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli:

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota tramite un servizio di federazione dell'identità,
- Porta l'insieme dei __conti utente__,
- __Federe i tenant__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per le esigenze della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette a livello dell'organizzazione __di configurare il meccanismo di autenticazione__. Puoi
utilizzare il repository locale di autenticazione della console Shiva oppure collegare la tua organizzazione a uno dei tuoi repository di autenticazione.

I seguenti repository esterni sono supportati:

- Repository compatibili __OpenID Connect__,
- Repository compatibili __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un'[Organizzazione](#organisations) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, vari tenant sono utilizzati per segmentare le responsabilità o i perimetri tecnici.

Per esempio:

- Un tenant __Produzione__
- Un tenant __Pre-produzione__
- Un tenant __Collaudo__
- Un tenant __Qualificazione__

Ma è anche possibile organizzare le cose con una __visione applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche comandate sono assegnate a un tenant specifico e non sono condivise con altri tenant. Per esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in 1 tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità della rete tra i tenant.

I permessi degli utenti sono da definire in ogni tenant. Così ogni organizzazione deve ben riflettere sui tenant desiderati. Questo punto è generalmente affrontato in un workshop di inizializzazione, al momento della creazione dell'organizzazione.

È possibile evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve essere necessariamente inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, cioè un data center fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Una VLAN di rete.


| Riferimento ordine                                          | Unità    | SKU                     |
|-------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant              | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |


### Gestione dei proprietari su un tenant
Ogni tenant possiede almeno un proprietario, garantendo così una chiara responsabilità e una gestione efficace delle risorse associate. Inoltre, è possibile dichiarare più proprietari su uno stesso tenant, permettendo una collaborazione e una presa di decisioni condivisa. Di seguito, troverai informazioni importanti da considerare durante la gestione di questi proprietari.

#### Informazioni importanti sulla gestione dei proprietari

#### 1. Numero di proprietari
* Non c'è alcun limite tecnico al numero di proprietari che possono essere definiti sul tenant.
* L'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 proprietari, al fine di incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e gestione ottimale degli accessi.

#### 2. Aggiunta di un nuovo proprietario
* Durante l'aggiunta di un nuovo proprietario, l'aggiornamento delle sue autorizzazioni può richiedere fino a 60 minuti.
* Questo tempo di propagazione è normale e garantisce che i diritti di accesso siano correttamente applicati a tutti i servizi e le risorse associate.

#### 2. Autorizzazioni di un proprietario
* A un proprietario saranno assegnati tutti i permessi legati ai prodotti attivati nel suo tenant.
* Non è possibile modificare i permessi di un proprietario.

#### 3. Rimozione di un proprietario
* Per rimuovere un proprietario dal tenant, l'utente deve inviare una richiesta al supporto.
* Questa procedura garantisce che le modifiche ai diritti di accesso vengano effettuate in modo sicuro e conforme alle buone pratiche di gestione degli accessi.

### Autorizzazione d'accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP previamente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato, consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo i più elevati standard di sicurezza.

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo delle risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una visione dettagliata dell'utilizzo dei vari servizi distribuiti. Questa funzionalità permette agli utenti di monitorare in tempo reale il consumo delle loro risorse, di identificare i servizi più utilizzati e di ottimizzare l'uso in base alle esigenze.

Nel menu della console, clicca su "Rapporto di consumo" quindi seleziona il periodo di tempo desiderato. Potrai così visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, il che ti permetterà di analizzare l'utilizzo dei servizi e ottimizzare la tua gestione di conseguenza:

<img src={shivaTenantRessources_01} />
