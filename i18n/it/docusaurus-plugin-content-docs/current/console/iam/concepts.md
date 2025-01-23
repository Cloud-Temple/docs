---
title: Concepts
---

## Utilisateurs

Les comptes d'accès à la console Shiva sono creati dall’account master del committente su invito (qualunque sia il repository di autenticazione).
Le informazioni d'identificazione sono globali alla vostra [Organizzazione](#organisations).

*__Nota :__ [L'identità federata viene gestita a livello organizzativo](#organisations#mecanismes-dauthentification)*

### Creazione di un account utente nella tua organizzazione

La creazione di un account utente nella tua organizzazione avviene tramite invito. Per invitare un utente in una [Organizzazione](#organisations), vai nel menu __'Amministrazione'__ a sinistra dello schermo sulla barra verde, poi nel sottomenu __'Utenti'__.

Clicca sul pulsante __'Nuovo Utente'__ dalla pagina degli utenti.

![](images/shiva_onboard_003.png)

Indica quindi l'indirizzo email dell'utente

![](images/shiva_onboard_004.png)

L'utente riceverà quindi un'email di verifica.

![](images/shiva_onboard_001.png)

Una volta completata la verifica, l'utente potrà accedere alla console.

### Assegnazione dei permessi a un utente

La gestione dei diritti degli utenti avviene dalla pagina dell'utente.

![](images/shiva_onboard_003.png)

Di default, un utente non ha permessi. È quindi necessario che l'amministratore che ha fatto l'invito gli conceda i permessi necessari alla sua attività. Basta cliccare sul menu __'Azioni'__ dell'utente e scegliere l'opzione __'Modifica'__.

Apparirà quindi il menu di attivazione dei diritti:

![](images/shiva_onboard_005.png)

La configurazione dei permessi deve essere fatta per ogni [Tenant](#tenants) della [Organizzazione](#organisations).

L'elenco dei permessi e la loro definizione è accessibile [qui](#permissions).

### Re-iscrizione di un utente

Quando un utente è stato fornito, ma non ha confermato la registrazione nel tempo di scadenza dell'email inviata dalla Console, non può più confermare la registrazione. È quindi possibile inviargli nuovamente un link affinché rinnovi la sua prima iscrizione.

La re-iscrizione di un utente deve essere effettuata nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Seleziona l'utente che vuoi reiscrivere, quindi fai clic sul pulsante azione alla fine della riga, poi __'Re-iscrizione'__.

**Warning**: Assicurati di essere tu a richiedere la re-iscrizione del tuo account utente. Si prega di segnalare qualsiasi richiesta che non provenga da te tramite un ticket di supporto.

![](images/shiva_profil_012.png)

### Aggiornamento del tuo profilo

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Impostazioni utente'__ e seleziona l'azione __'Aggiorna il tuo profilo'__.

Vai quindi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare il tuo profilo.

**Warning**: Assicurati di essere tu a richiedere l'aggiornamento del profilo. Si prega di segnalare qualsiasi richiesta che non provenga da te tramite un ticket di supporto.

![](images/shiva_profil_014.png)

### Reset della password

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta password'__.

Vai quindi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua password.

**Warning**: Assicurati di essere tu a richiedere la reimpostazione della tua password. Si prega di segnalare qualsiasi richiesta che non provenga da te tramite un ticket di supporto.

![](images/shiva_profil_015.png)

### Reset dell'autenticazione a due fattori

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo, poi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta MFA'__.

Vai quindi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua autenticazione a due fattori.

**Warning**: Assicurati di essere tu a richiedere il reset della tua autenticazione a due fattori. Si prega di segnalare qualsiasi richiesta che non provenga da te tramite un ticket di supporto.

![](images/shiva_profil_016.png)

### Eliminazione di un utente

L'eliminazione di un utente deve essere effettuata nella scheda __'Utente'__ del pannello Amministrazione, in basso a sinistra dello schermo.

Seleziona l'utente che desideri eliminare, quindi fai clic sul pulsante azione alla fine della riga, poi __'Elimina'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Nota: Non puoi eliminare te stesso e non puoi eliminare un utente __'Proprietario'__.

### Disconnettersi

La disconnessione di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, poi __'Disconnetti'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Una disconnessione automatica viene effettuata alla scadenza del token (JWT Token) di sessione.

### Cambiare la lingua di un utente

Il cambio lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

![](images/shiva_profil_006.png)

La configurazione viene fatta per ogni tenant [Tenant](#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere le email relative ai temi attivati, che saranno automaticamente inviate al verificarsi degli eventi corrispondenti.

È accessibile nel profilo utente, nella scheda "I miei abbonamenti":

![](images/shiva_profil_007.png)

Ad esempio, in caso di incidente, verranno generate notifiche email specifiche a quel tema.

L'elenco dei temi disponibili è suscettibile di evoluzione e di arricchimento progressivo per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permissions

La console Shiva consente una gestione dettagliata dei diritti degli utenti di un'organizzazione, con segregazione per tenant.
Inizialmente, è l'account principale del committente che consente la configurazione iniziale degli account e dei permessi associati.
Successivamente, il diritto __'iam_write'__ consente a un account di amministrare i permessi degli altri utenti.

### Permessi disponibili per gli utenti della tua organizzazione

Quando un utente viene creato, non possiede alcun permesso di default. Ogni permesso viene assegnato individualmente e funziona in modo unitario, senza sovrapporsi con altri permessi. Si applicano in congiunzione, il che significa che un utente deve disporre di tutti i permessi richiesti per eseguire una specifica azione.

I seguenti permessi sono configurabili per ogni utente e per ogni tenant della tua organizzazione:
    •    Permessi di tipo “read”: consentono solo la consultazione delle risorse senza possibilità di modifica.
    •    Permessi di tipo “write”: consentono la modifica delle configurazioni.
    •    Permessi di tipo “management”: consentono la gestione avanzata delle risorse.

- __Questi sono permessi, non ruoli.__ Pertanto, è necessario avere i permessi READ e WRITE per modificare una configurazione.

__VERSION : 20250123__

| Nome del permesso                             | Descrizione del permesso                                                                                                      |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consultazione dei log e delle attività                                                                                        |
| activity_write                                | Gestione dei log e delle attività                                                                                             |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                      |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                           |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                        |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                             |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                   |
| bastion_write                                 | Gestione delle risorse (appliance, sessioni,...) di tipo Bastion                                                              |
| bastion_console_access                        | Autorizzazione ad accedere alla console (ssh/rdp) di una risorsa protetta da una appliance Bastion                            |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                            |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione di dati avanzati delle risorse Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                        |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                             |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                              |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazioni drs, ecc)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                           |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                         |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (permette la cifratura di una macchina virtuale)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                               |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                               |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di un Bare Metal                                                                  |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                         |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                                  |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                              |
| documentation_read                            | Consultazione delle risorse documentazione di confluence                                                                        |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                 |
| iam_offline_access                            | Creazione e cancellazione di Access Token Personali (PAT)                                                                        |
| iam_read                                      | Consultazione dei diritti utenti                                                                                           |
| iam_write                                     | Gestione dei diritti utenti                                                                                                |
| intervention_read                             | Consultazione delle modifiche e produzioni previste sulla piattaforma                                                  |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                 |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                      |
| monitoring_read                               | Consultazione del monitoring                                                                                                     |
| monitoring_write                              | Gestione del monitoring                                                                                                          |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                         |
| network_read                                  | Consultazione delle risorse di rete                                                                                             |
| network_write                                 | Gestione delle risorse di rete                                                                                                  |
| order_read                                    | Consultazione degli ordini infrastrutturali                                                                                     |
| order_write                                   | Creazione di ordini infrastrutturali                                                                                            |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                       |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                   |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                                  |
| openshift_management                          | Permette di connettersi alle piattaforme Openshift (scoperto dal tenant)                                                          |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                       |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                                  |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                     |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                   |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                        |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                  |
| ticket_comment_write                          | Gestione dei commenti                                                                                                       |
| ticket_read                                   | Consultazione dei ticket                                                                                                       |
| ticket_write                                  | Gestione dei ticket                                                                                                            |

**Note** :

- *Non ci sono limiti al numero di proprietari (owners) che possono essere definiti sul tenant. Tuttavia, l'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 proprietari, al fine di incentivare a limitare il numero di proprietari per motivi di sicurezza e gestione ottimale degli accessi.*
- *Durante l'aggiunta di un nuovo proprietario (owner), l'aggiornamento delle sue autorizzazioni potrebbe richiedere fino a 60 minuti. Questo tempo di propagazione è normale e assicura che i diritti di accesso siano correttamente applicati a tutti i servizi e risorse associati.*
- *Per rimuovere un proprietario (owner) dal tenant, l'utente deve inviare una richiesta al supporto. Questa procedura garantisce che le modifiche ai diritti di accesso siano effettuate in modo sicuro e in conformità con le buone pratiche di gestione degli accessi.*

### Permessi deprecati

I seguenti permessi non sono più disponibili :

| Nome del permesso                             | Data       | Descrizione del permesso                                                                                   |
| ---------------------------------------------- | ---------- | -----------------------------------------------------------------------------------------------------------|
| backup_read  (**DEPRECATO**)                  | 07/10/2024 | Consultazione delle risorse di tipo backup                                                                     |
| backup_write (**DEPRECATO**)                  | 07/10/2024 | Gestione delle risorse di tipo backup - modifica                                                           |
| compute_console_access (**DEPRECATO**)        | 07/10/2024 | Apertura della console di una macchina virtuale                                                                |
| compute_infrastructure_read (**DEPRECATO**)   | 07/10/2024 | Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazioni drs, ecc) |
| compute_infrastructure_write (**DEPRECATO**)  | 07/10/2024 | Gestione avanzata delle risorse VMware                                                                          |
| compute_read (**DEPRECATO**)                  | 07/10/2024 | Consultazione delle risorse di tipo Macchine Virtuali                                                          |
| compute_management (**DEPRECATO**)            | 07/10/2024 | Gestione delle risorse di tipo Macchine Virtuali                                                               |
| compute_virtual_machine_power (**DEPRECATO**) | 07/10/2024 | Gestione dell'alimentazione di una macchina virtuale                                                           |
| iam_manage_permissions (**DEPRECATO**)        | 07/10/2024 | Gestione dei nuovi diritti per se stessi                                                                       |


## Organizzazioni

L'organizzazione è legata al vostro __conto sponsor__ e al __contratto Cloud Temple associato__. Rappresenta la vostra entità (società, dipartimento, team, ...) che porta la relazione contrattuale tra Cloud Temple e voi.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli:

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota tramite un servizio di federazione dell'identità,
- Comprende tutti gli __account utenti__,
- __Unisce i tenant__ (Produzione, Pre-produzione, Dev, Applicazione 1, Applicazione 2, ...) che definite per le esigenze della vostra architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella vostra organizzazione. Ad esempio, un account può essere autorizzato a richiedere risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette a livello di organizzazione __la configurazione del meccanismo di autenticazione__. Potete utilizzare il repository locale di autenticazione della console Shiva o collegare la vostra organizzazione a uno dei vostri repository di autenticazione.

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

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un'[Organizzazione](#organizzazioni) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, vengono utilizzati più tenant per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Pre-produzione__
- Un tenant __Test__
- Un tenant __Qualificazione__

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche richieste sono assegnate a un tenant specifico e non sono condivise con altri tenant. Ad esempio, un cluster di Hypervisors e le relative reti L2 sono disponibili solo in 1 tenant. Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per assicurare la continuità della rete tra i tenant.

I permessi degli utenti devono essere definiti in ogni tenant. Pertanto, ogni organizzazione deve ponderare bene i tenant desiderati. Questo punto viene generalmente discusso durante il workshop di inizializzazione, al momento della creazione dell'organizzazione.

È possibile evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, ovvero un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Un vlan di rete.


| Riferimento d'ordine                                        | Unità     | SKU                     |
|-------------------------------------------------------------|-----------|-------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant              | 1 tenant  | csp:tenant:v1           |
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 tenant  | csp:(region):iaas:az:v1 |


### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità ai requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza migliorato consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

Nota: *La rimozione di un IP autorizzato viene effettuata tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei diversi servizi distribuiti. Questa funzionalità consente agli utenti di monitorare in tempo reale il consumo delle proprie risorse, identificare i servizi più utilizzati e ottimizzare il loro utilizzo in base alle necessità.

Nel menu della console, cliccare su "Rapporto di consumo" e poi selezionare il periodo di tempo desiderato. Potrete così visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, il che vi permetterà di analizzare l'utilizzo dei servizi e ottimizzare la vostra gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)