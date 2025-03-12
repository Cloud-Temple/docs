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

Gli account di accesso alla console Shiva sono creati dall'account master del committente su invito (qualunque sia il repository di autenticazione).
Le credenziali sono globali per la vostra [Organizzazione](#organisations).

*__Nota:__ [La federazione di identità si gestisce a livello dell'organizzazione](#organisations#mecanismes-dauthentification)*

### Creazione di un account utente nella vostra organizzazione

La creazione di un account utente nella vostra organizzazione si fa per invito. Per invitare un utente in un'[Organizzazione](#organisations), andare nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde e poi nel sottomenu __'Utenti'__.

Cliccare sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

<img src={shivaOnboard_003} />

Indicare poi l'indirizzo email dell'utente.

<img src={shivaOnboard_004} />

L'utente riceverà quindi un'email di verifica.

<img src={shivaOnboard_001} />

Una volta completata la verifica, l'utente potrà connettersi alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti utente si fa dalla pagina utente.

<img src={shivaOnboard_003} />

Di default, un utente non ha diritti. È quindi necessario che l'amministratore che ha fatto l'invito gli conceda i diritti necessari alla sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Appare quindi il menu di attivazione dei diritti:

<img src={shivaOnboard_005} />

La configurazione dei permessi deve essere fatta per ogni [Tenant](#tenants) dell'[Organizzazione](#organisations).

La lista dei permessi e le loro definizioni è accessibile [qui](#permissions).

### Reiscrizione di un utente

Quando un utente è stato provvisionato ma non ha validato la sua iscrizione entro il periodo di scadenza dell'email inviata dalla Console, non può più confermare la sua iscrizione. È quindi possibile inviargli un link affinché possa rinnovare la sua iscrizione iniziale.

La reiscrizione di un utente si fa nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Selezionare l'utente che si desidera reiscrivere, poi cliccare sul pulsante di azione alla fine della riga e scegliere __'Reiscrizione'__.

__Attenzione__: Assicuratevi di essere all'origine della richiesta di reiscrizione del vostro account utente. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_012} />

### Aggiornamento del profilo

Questa azione è disponibile solo per un account locale (non SSO).

Selezionare il proprio __'Profilo'__, in alto a destra dello schermo poi __'Impostazioni utente'__ e selezionare l'azione __'Aggiorna il tuo profilo'__.

Andare nella propria casella email e cliccare sul link generato dalla Console. Seguire semplicemente i passaggi per aggiornare il proprio profilo.

__Attenzione__: Assicuratevi di essere all'origine della richiesta di aggiornamento del profilo. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_014} />

### Reimpostazione della password

Questa azione è disponibile solo per un account locale (non SSO).

Selezionare il proprio __'Profilo'__, in alto a destra dello schermo poi __'Impostazioni utente'__ e selezionare l'azione __'Reimposta password'__.

Andare nella propria casella email e cliccare sul link generato dalla Console. Seguire semplicemente i passaggi per aggiornare la propria password.

__Attenzione__: Assicuratevi di essere all'origine della richiesta di reimpostazione della password. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_015} />

### Reimpostazione dell'autenticazione a due fattori

Questa azione è disponibile solo per un account locale (non SSO).

Selezionare il proprio __'Profilo'__, in alto a destra dello schermo poi __'Impostazioni utente'__ e selezionare l'azione __'Reimposta MFA'__.

Andare nella propria casella email e cliccare sul link generato dalla Console. Seguire semplicemente i passaggi per aggiornare la propria autenticazione a due fattori.

__Attenzione__: Assicuratevi di essere all'origine della richiesta di reimpostazione della vostra autenticazione a due fattori. Vi preghiamo di segnalare tutte le richieste che non provengono da voi tramite un ticket di supporto.

<img src={shivaProfil_016} />

### Eliminazione di un utente

L'eliminazione di un utente si fa nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Selezionare l'utente che si desidera eliminare, poi cliccare sul pulsante di azione alla fine della riga e scegliere __'Elimina'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Nota: Non potete eliminare voi stessi e non potete eliminare un utente __'Proprietario'__.

### Disconnessione

La disconnessione di un utente si fa dal proprio __'Profilo'__, in alto a destra dello schermo, poi __'Disconnetti'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Una disconnessione automatica viene effettuata alla scadenza del token di sessione (JWT Token).

### Cambiare la lingua di un utente

Il cambio di lingua di un utente si fa dal suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

<img src={shivaProfil_006} />

La configurazione viene fatta per ogni [Tenant](#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti permette di ricevere email relative alle tematiche attivate che saranno automaticamente inviate al verificarsi di eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

<img src={shivaProfil_007} />

Per esempio, in caso di incidente, verranno generate notifiche email specifiche a questa tematica.

La lista delle tematiche disponibili è suscettibile di evolversi e arricchirsi progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permessi

La console Shiva permette una gestione dettagliata dei diritti degli utenti di un'organizzazione, con una segregazione per tenant.
Inizialmente, è l'account principale del committente che permette la configurazione iniziale degli account e dei permessi associati.
Successivamente, il diritto __'iam_write'__ permette a un account di amministrare i permessi degli altri utenti.

### Permessi disponibili per gli utenti della vostra organizzazione

Quando un utente viene creato, non possiede alcun permesso di default. Ogni permesso viene assegnato individualmente e funziona in modo unitario, senza sovrapporsi con altri permessi. Si applicano in congiunzione, il che significa che un utente deve disporre di tutti i permessi richiesti per effettuare un'azione specifica.

I seguenti permessi sono configurabili per ogni utente e per ogni tenant della vostra organizzazione:
 • Permessi di tipo "read": permettono unicamente la consultazione delle risorse senza possibilità di modifica.
 • Permessi di tipo "write": autorizzano la modifica delle configurazioni.
  • Permessi di tipo "management": autorizzano la gestione avanzata delle risorse.

- __Sono permessi, non ruoli.__ Come tali, è necessario avere sia il permesso READ che WRITE per modificare una configurazione.

Ultimo aggiornamento il: 23/01/2025

| Nome del permesso                             | Descrizione del permesso                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultazione dei log e delle attività                                                                                          |
| activity_write                                | Gestione dei log e delle attività                                                                                               |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                        |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                             |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                          |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                               |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                     |
| bastion_write                                 | Gestione delle risorse (appliance, sessioni,...) di tipo Bastion                                                                |
| bastion_console_access                        | Autorizzazione di accesso alla console (ssh/rdp) di una risorsa protetta da un'appliance Bastion                                |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                              |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra                                                   |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                             |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                         |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc)|
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                         |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                          |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (permette la crittografia di una macchina virtuale)           |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                           |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                             |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di un Bare Metal                                                                    |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                     |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                             |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                            |
| documentation_read                            | Consultazione delle risorse di documentazione di confluence                                                                     |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                  |
| iam_offline_access                            | Creazione e eliminazione di Token di Accesso Personali (PAT)                                                                    |
| iam_read                                      | Consultazione dei diritti utente                                                                                                |
| iam_write                                     | Gestione dei diritti utente                                                                                                     |
| intervention_read                             | Consultazione dei cambiamenti e delle messe in produzione previste sulla piattaforma                                            |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                  |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                       |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                  |
| monitoring_write                              | Gestione del monitoraggio                                                                                                       |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                                 |
| network_read                                  | Consultazione delle risorse di rete                                                                                             |
| network_write                                 | Gestione delle risorse di rete                                                                                                  |
| order_read                                    | Consultazione degli ordini di infrastruttura                                                                                    |
| order_write                                   | Creazione di ordini di infrastruttura                                                                                           |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                      |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                      |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                                  |
| openshift_management                          | Permette di connettersi alle piattaforme Openshift (limitato al tenant)                                                         |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                          |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                          |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                   |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                       |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                            |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                      |
| ticket_comment_write                          | Gestione dei commenti                                                                                                           |
| ticket_read                                   | Consultazione dei ticket                                                                                                        |
| ticket_write                                  | Gestione dei ticket                                                                                                             |

## Organizzazioni

L'organizzazione è legata al vostro __account committente__ e al __contratto Cloud Temple associato__. Rappresenta la vostra entità (società, dipartimento, team, ...) che porta la relazione contrattuale tra Cloud Temple e voi.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli:

- Rappresenta l'__entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota tramite un servizio di federazione di identità,
- Supporta l'insieme degli __account utente__,
- __Federa i tenant__ (Produzione, Preproduzione, Sviluppo, Applicazione 1, Applicazione 2, ...) che definite per le esigenze della vostra architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella vostra organizzazione. Per esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette a livello dell'organizzazione __la configurazione del meccanismo di autenticazione__. Potete
utilizzare il repository locale di autenticazione della console Shiva oppure collegare la vostra organizzazione a uno
dei vostri repository di autenticazione.

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

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un'[Organizzazione](#organisations) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, più tenant sono utilizzati per segmentare le responsabilità o i perimetri tecnici.

Per esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Test__
- Un tenant __Qualificazione__

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un tenant preciso e non sono condivise con gli altri tenant. Per esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in 1 tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per assicurare la continuità di rete tra i tenant.

I permessi degli utenti devono essere definiti in ogni tenant. Così, ogni organizzazione deve riflettere bene sui tenant desiderati. Questo punto viene generalmente affrontato in un workshop di inizializzazione, al momento della creazione dell'organizzazione.

È possibile far evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, cioè un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Una vlan di rete.

| Riferimento d'ordine                                          | Unità    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |

### Gestione dei proprietari su un tenant

Ogni tenant possiede almeno un proprietario, garantendo così una responsabilità chiara e una gestione efficace delle risorse associate. Inoltre, è possibile dichiarare più proprietari sullo stesso tenant, permettendo una collaborazione e una presa di decisione condivisa. Di seguito, troverete informazioni importanti da considerare nella gestione di questi proprietari.

#### Informazioni importanti sulla gestione dei proprietari

#### 1. Numero di proprietari

* Non c'è limite tecnico quanto al numero di proprietari che possono essere definiti sul tenant.
- L'interfaccia di gestione (IHM) emette un avvertimento quando ci sono più di 3 proprietari, per incitare a limitare il numero di proprietari per ragioni di sicurezza e di gestione ottimale degli accessi.

#### 2. Aggiunta di un nuovo proprietario

* Quando si aggiunge un nuovo proprietario, l'aggiornamento dei suoi permessi può richiedere un tempo fino a 60 minuti.
- Questo tempo di propagazione è normale e permette di assicurare che i diritti di accesso siano correttamente applicati all'insieme dei servizi e delle risorse associate.

#### 2. Permessi di un proprietario

* Un proprietario riceverà tutti i permessi relativi ai prodotti attivati sul suo tenant.
- Non è possibile modificare i permessi di un proprietario.

#### 3. Rimozione di un proprietario

* Per rimuovere un proprietario dal tenant, l'utente deve inviare una richiesta al supporto.
- Questa procedura permette di garantire che le modifiche dei diritti di accesso siano effettuate in modo sicuro e conforme alle buone pratiche di gestione degli accessi.

### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con le esigenze della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato permettendo l'accesso solo agli utenti provenienti da range di IP specificati, minimizzando così i rischi di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Nota: *La rimozione di un IP autorizzato si fa tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei diversi servizi distribuiti. Questa funzionalità permette agli utenti di seguire in tempo reale il consumo delle loro risorse, identificare i servizi più sollecitati e ottimizzare il loro utilizzo in funzione delle necessità.

Nel menu della console, cliccate su "Rapporto di consumo" poi selezionate il periodo di tempo desiderato. Potrete così visualizzare in dettaglio il consumo delle risorse cloud sul periodo definito, il che vi permetterà di analizzare l'utilizzo dei servizi e ottimizzare la vostra gestione di conseguenza:

<img src={shivaTenantRessources_01} />
