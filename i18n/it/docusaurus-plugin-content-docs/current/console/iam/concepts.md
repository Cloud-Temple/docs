---
title: Concepts
---


## Utenti

Gli account di accesso alla console Shiva sono creati dall'account master del committente su invito (qualunque sia il repository di autenticazione). Le informazioni di identificazione sono globali per la vostra [Organizzazione](#organisations).

*__Nota:__ [La federazione dell'identità si gestisce a livello di organizzazione](#organisations#mecanismes-dauthentification)*

### Creazione di un account utente nella vostra organizzazione

La creazione di un account utente nella vostra organizzazione avviene tramite invito. Per invitare un utente in una [Organizzazione](#organisations), andare nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde e poi nel sottomenu __'Utenti'__.  

Cliccare sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti. 

![](images/shiva_onboard_003.png)

Indicare poi l'indirizzo email dell'utente 

![](images/shiva_onboard_004.png)

L'utente riceverà quindi un'email di verifica.  

![](images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti degli utenti si effettua dalla pagina utenti. 

![](images/shiva_onboard_003.png)

Di default, un utente non ha diritti. È quindi necessario che l'amministratore che ha inviato l'invito gli assegni i diritti necessari per la sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.  

Il menu di attivazione dei diritti apparirà quindi:

![](images/shiva_onboard_005.png)

La configurazione dei permessi deve essere fatta per ogni [Inquilino](#tenants) della [Organizzazione](#organisations).

La lista dei permessi e la loro definizione è accessibile [qui](#permissions).

### Cambiare la lingua di un utente

Il cambio della lingua per un utente deve essere fatto nel suo __'Profilo'__, in alto a destra dello schermo, nei __'Parametri utente'__.

![](images/shiva_profil_006.png)

La configurazione è applicata per ogni tenant [Inquilino](#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere le email relative alle tematiche attivate che saranno automaticamente inviate al verificarsi degli eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

![](images/shiva_profil_007.png)

 Ad esempio, in caso di incidenti, verranno generate notifiche email specifiche per quella tematica.

La lista delle tematiche disponibili può evolversi e arricchirsi progressivamente per adattarsi ai bisogni e ai cambiamenti nel nostro ambiente operativo.



## Permessi

La console Shiva permette una gestione dettagliata dei diritti degli utenti di un'organizzazione, con una segregazione per tenant. Inizialmente, è l'account principale del committente che consente la configurazione iniziale degli account e dei permessi associati. Successivamente, il diritto __'iam_write'__ consente a un account di amministrare i permessi degli altri utenti.

### Permessi disponibili per gli utenti della vostra organizzazione

I seguenti permessi sono configurabili per ogni [utente](#utilisateurs) e per ogni [tenant](#tenants#selection-dun-tenant) della vostra organizzazione.

- I permessi di tipo __'read'__ sono associati alla consultazione senza possibilità di configurazione
- I permessi di tipo __'write'__ sono associati alla modifica di configurazione.
- __Sono permessi, non ruoli.__ Pertanto, è necessario avere i permessi di LETTURA e SCRITTURA per modificare una configurazione.

__VERSIONE: 20241007__

| Nome del permesso                            | Descrizione del permesso                                                                                                        |
| ---------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultazione dei log e delle attività                                                                                         |
| activity_write                                | Gestione dei log e delle attività                                                                                              |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                       |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                            |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                         |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                              |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                    |
| bastion_write                                 | Gestione delle risorse (appliances, sessioni,...) di tipo Bastion                                                              |
| bastion_console_access                        | Autorizzazione all'accesso alla console (ssh/rdp) di una risorsa protetta da un'appliance Bastion                              |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                             |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione dei dati avanzati delle risorse Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                         |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                       |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                            |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                        |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                               |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione dei dati avanzati delle risorse VMware (regole affinità/anti-affinità, configurazione drs, ecc) |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                        |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                         |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                          |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                    |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                            |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                           |
| documentation_read                            | Consultazione delle risorse documentali di Confluence                                                                         |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                 |
| iam_offline_access                            | Creazione e cancellazione di Personal Access Token (PAT)                                                                       |
| iam_read                                      | Consultazione dei diritti degli utenti                                                                                         |
| iam_write                                     | Gestione dei diritti degli utenti                                                                                              |
| intervention_read                             | Consultazione delle modifiche e messe in produzione previste sulla piattaforma                                                 |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                 |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                      |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                 |

| monitoring_write                              | Gestione del monitoring                                                                                                          |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                                 |
| network_read                                  | Consultazione delle risorse di rete                                                                                            |
| network_write                                 | Gestione delle risorse di rete                                                                                                  |
| order_read                                    | Consultazione degli ordini infrastrutturali                                                                                     |
| order_write                                   | Creazione di ordini infrastrutturali                                                                                            |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                      |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                      |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                                  |
| openshift_management                          | Permette di connettersi alle piattaforme Openshift (scoperto al tenant)                                                         |
| Owner                                         | L'utente ha i diritti di amministrazione di un tenant                                                                           |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                          |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                          |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                   |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                       |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                            |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                      |
| ticket_comment_write                          | Gestione dei commenti                                                                                                           |
| ticket_read                                   | Consultazione dei ticket                                                                                                        |
| ticket_write                                  | Gestione dei ticket                                                                                                             |

**Note** :

- *Non ci sono limiti al numero di proprietari (owners) che possono essere definiti su un tenant. Tuttavia, l'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 proprietari, al fine di incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e di gestione ottimale degli accessi.*
- *Durante l'aggiunta di un nuovo proprietario (owner), l'aggiornamento delle sue autorizzazioni può richiedere fino a 60 minuti. Questo tempo di propagazione è normale e permette di assicurarsi che i diritti di accesso siano correttamente applicati a tutti i servizi e risorse associate.*
- *Per rimuovere un proprietario (owner) dal tenant, l'utente deve presentare una richiesta al supporto. Questa procedura permette di garantire che le modifiche ai diritti di accesso siano effettuate in modo sicuro e conforme alle migliori pratiche di gestione degli accessi.*

### Permessi deprecati

I seguenti permessi non sono più disponibili :

| Nome del permesso                             | Data       | Descrizione del permesso                                                                                  |
| --------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                 | 07/10/2024 | Consultazione delle risorse di tipo backup                                                                 |
| backup_write (**DEPRECATED**)                 | 07/10/2024 | Gestione delle risorse di tipo backup - modifica                                                           |
| compute_console_access (**DEPRECATED**)       | 07/10/2024 | Apertura della console di una macchina virtuale                                                            |
| compute_infrastructure_read (**DEPRECATED**)  | 07/10/2024 | Consultazione dei dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc) |
| compute_infrastructure_write (**DEPRECATED**) | 07/10/2024 | Gestione avanzata delle risorse VMware                                                                     |
| compute_read (**DEPRECATED**)                 | 07/10/2024 | Consultazione delle risorse di tipo Macchine Virtuali                                                      |
| compute_management (**DEPRECATED**)           | 07/10/2024 | Gestione delle risorse di tipo Macchine Virtuali                                                           |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestione dell'alimentazione di una macchina virtuale                                                       |
| iam_manage_permissions (**DEPRECATED**)       | 07/10/2024 | Gestione dei nuovi diritti per sé stesso                                                                   |


## Organizzazioni

L'organizzazione è legata al tuo __account mandante__ e al __contratto Cloud Temple associato__. Rappresenta la tua entità (azienda, dipartimento, team, ...) che porta la relazione contrattuale tra Cloud Temple e te.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli: 

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota tramite un servizio di federazione dell'identità,
- Porta l'insieme degli __account utente__,
- __Federa i tenant__ (Produzione, Pre-produzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per le necessità della tua architettura Cloud.

I ruoli (diritti/autorizzazioni) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette a livello di organizzazione __la configurazione del meccanismo di autenticazione__. Puoi  
utilizzare il repository locale di autenticazione della console Shiva o collegare la tua organizzazione a uno  
dei tuoi repository di autenticazione.  

I seguenti repository esterni sono supportati:

- Repository compatibili con __OpenID Connect__,
- Repository compatibili con __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un'[Organizzazione](#organisations) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, vengono utilizzati più tenant per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Collaudo__
- Un tenant __Qualifica__

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__: 

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un tenant specifico e non sono condivise con altri tenant. Ad esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in un tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità della rete tra i tenant.

I permessi degli utenti devono essere definiti in ogni tenant. Pertanto, ogni organizzazione deve pensare bene ai tenant desiderati. Questo punto viene generalmente discusso in un workshop di avvio, al momento della creazione dell'organizzazione.

È possibile far evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, cioè un datacenter fisico),
- Un cluster di calcolo,
- Un'area di storage,
- Una VLAN di rete.


| Riferimento ordine                                         | Unità    | SKU                     |  
|-----------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant                | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |


### Autorizzazione di accesso a un tenant: IP autorizzate

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP preventivamente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza potenziato permettendo l'accesso solo agli utenti provenienti da range IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

Nota: *La rimozione di un IP autorizzato si effettua tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei vari servizi implementati. Questa funzionalità permette agli utenti di monitorare in tempo reale il consumo delle loro risorse, identificare i servizi più utilizzati e ottimizzare il loro utilizzo in base alle esigenze.

Nel menu della console, fare clic su "Rapporto di consumo" quindi selezionare il periodo di tempo desiderato. Potrete così visualizzare in dettaglio il consumo delle risorse cloud sul periodo definito, il che vi permetterà di analizzare l'utilizzo dei servizi e di ottimizzare la vostra gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)