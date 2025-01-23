---
title: Concepts
---

## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maitre du commanditaire sur invitation (quelque soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La création d'un compte utilisateur dans votre organisation se fait par invitation. Pour inviter un utilisateur dans une [Organisation](#organisations), aller dans le menu __'Administration'__ à gauche de votre écran sur le bandeau vert puis dans le sous menu __'Utilisateurs'__.

Cliquez sur le bouton __'Nouvel Utilisateur'__ depuis la page des utilisateurs.

![](images/shiva_onboard_003.png)

Indiquez ensuite l'adresse de messagerie de l'utilisateur

![](images/shiva_onboard_004.png)

L'utilisateur va alors recevoir un mail de vérification.

![](images/shiva_onboard_001.png)

Une fois la vérification terminée, l'utilisateur pourra se connecter sur la console.

### Affectation des permissions à un utilisateur

La gestion des droits utilisateurs se fait depuis la page utilisateur.

![](images/shiva_onboard_003.png)

Par défaut, un utilisateur n'a pas de droit. Il est donc nécessaire que l'administrateur ayant fait l'invitation lui octroie les droits nécessaires à son activité. Il suffit de cliquer sur le menu __'Actions'__ de l'utilisateur et de choisir l'option __'Modifier'__.

Le menu d'activation des droits apparait alors :

![](images/shiva_onboard_005.png)

La configuration des permissions est à faire pour chaque [Tenant](#tenants) de l'[Organisation](#organisations).

La liste des permissions et leur définition est accessible [ici](#permissions).

### Réinscription d'un utilisateur

Lorsqu'un utilisateur a été provisionné mais n'a pas validé son inscription dans le délai d'expiration du mail envoyé par la Console, il ne peut plus confirmer son inscription. Il est alors possible de lui renvoyer un lien afin qu'il renouvelle sa première inscription.

La réinscription d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez réinscrire, puis cliquer sur le bouton d'action au bout de la ligne puis __'Réinscription'__.

**Warning**: Assurez vous de bien être à l'origine de la demande de réinscription de votre compte utilisateur. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_012.png)

### Mettre à jour son profil

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Mettre à jour votre profil'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre profil.

**Warning**: Assurez vous de bien être à l'origine de la demande de mise à jour du profil. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_014.png)

### Réinitialisation du mot de passe

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo poi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta password'__.

Vai poi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare la tua password.

**Warning**: Assicurati di essere l'origine della richiesta di reimpostazione della tua password. Si prega di segnalare tutte le richieste che non provengono da te tramite un ticket di supporto.

![](images/shiva_profil_015.png)

### Réinitialisation du double facteur d'authentification

Questa azione è disponibile solo per un account locale (non SSO).

Seleziona nel tuo __'Profilo'__, in alto a destra dello schermo poi __'Impostazioni utente'__ e seleziona l'azione __'Reimposta MFA'__.

Vai poi nella tua casella di posta e clicca sul link generato dalla Console. Segui semplicemente i passaggi per aggiornare il tuo doppio fattore di autenticazione.

**Warning**: Assicurati di essere l'origine della richiesta di reimpostazione del tuo doppio fattore di autenticazione. Si prega di segnalare tutte le richieste che non provengono da te tramite un ticket di supporto.

![](images/shiva_profil_016.png)

### Suppression d'un utilisateur

La soppressione di un utente deve essere effettuata nella scheda __'Utente'__ del pannello di amministrazione, in basso a sinistra dello schermo.

Seleziona l'utente che desideri eliminare, poi clicca sul pulsante azione alla fine della riga poi __'Elimina'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Nota: Non puoi eliminare te stesso e non puoi eliminare un utente __'Proprietario'__.

### Se déconnecter

La disconnessione di un utente deve essere effettuata nel suo __'Profilo'__, in alto a destra dello schermo, poi __'Disconnetti'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Una disconnessione automatica viene effettuata alla scadenza del token (JWT Token) della sessione.

### Cambiare la lingua di un utente

Il cambio lingua di un utente deve essere effettuato nel suo __'Profilo'__, in alto a destra dello schermo, nelle __'Impostazioni utente'__.

![](images/shiva_profil_006.png)

La configurazione viene effettuata per ogni tenant [Tenant](#tenants).

### Abbonamento alle notifiche tematiche

La gestione degli abbonamenti consente di ricevere e-mail relative ai temi attivati che saranno automaticamente inviati in caso di eventi corrispondenti.

Essa è accessibile nel profilo dell'utente, nella scheda "I miei abbonamenti":

![](images/shiva_profil_007.png)

 Ad esempio, in caso di incidente, verranno generate notifiche via e-mail specifiche per questo tema.

L'elenco dei temi disponibili è soggetto a evoluzione e si arricchirà progressivamente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.

## Permissions

La console Shiva consente una gestione fine dei diritti degli utenti di un'organizzazione, con una segregazione per tenant.
Inizialmente, è l'account principale del committente che consente la configurazione iniziale degli account e delle autorizzazioni associate.
Successivamente, il diritto __'iam_write'__ consente a un account di amministrare le autorizzazioni degli altri utenti.

### Permessi disponibili per gli utenti della vostra organizzazione

Quando un utente viene creato, non possiede alcun permesso per impostazione predefinita. Ogni permesso è assegnato individualmente e funziona in maniera unitaria, senza sovrapposizione con altri permessi. Si applicano in combinazione, il che significa che un utente deve disporre di tutti i permessi necessari per eseguire un'azione specifica.

I permessi seguenti sono configurabili per ogni utente e per ogni tenant della tua organizzazione:
	•	Permessi di tipo “read”: consentono solo la consultazione delle risorse senza possibilità di modifica.
	•	Permessi di tipo “write”: autorizzano la modifica delle configurazioni.
 	•	Permessi di tipo “management“: autorizzano la gestione avanzata delle risorse.

- __Questi sono permessi, non ruoli.__ Come tale, è necessario avere il permesso READ e WRITE per modificare una configurazione.

Ultimo aggiornamento: 23/01/2025

| Nome del permesso                             | Descrizione del permesso                                                                                                     |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Consultazione dei log e delle attività                                                                                        |
| activity_write                                | Gestione dei log e delle attività                                                                                             |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                      |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                           |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                        |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                             |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                   |
| bastion_write                                 | Gestione delle risorse (appliances, sessioni,...) di tipo Bastion                                                            |
| bastion_console_access                        | Autorizzazione di accesso alla console (ssh/rdp) di una risorsa protetta da un appliance Bastion                              |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                             |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione dati avanzati delle risorse Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Offerta OpenIaaS - Consultazione delle risorse di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo Macchine Virtuali                                                             |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                              |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione dati avanzati delle risorse VMware (regole affinità/anti-affinità, configurazione drs, ecc)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                           |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo Macchine Virtuali                                                         |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo Macchine Virtuali (permette la crittografia di una macchina virtuale)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                               |
| baremetal_read                                | Offerta Bare Metal - Consultazione delle risorse di tipo Bare Metal                                                               |
| baremetal_console_access                      | Offerta Bare Metal - Apertura della console di una Bare Metal                                                                  |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                         |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                                  |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                              |
| documentation_read                            | Consultazione delle risorse di documentazione di confluence                                                                        |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                 |
| iam_offline_access                            | Creazione e eliminazione di Access Token Personali (PAT)                                                                        |
| iam_read                                      | Consultazione dei diritti utenti                                                                                           |
| iam_write                                     | Gestione dei diritti utenti                                                                                                |
| intervention_read                             | Consultazione dei cambiamenti e delle messe in produzione previste sulla piattaforma                                                  |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                 |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                      |
| monitoring_read                               | Consultazione del monitoring                                                                                                     |
| monitoring_write                              | Gestione del monitoring                                                                                                          |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                         |
| network_read                                  | Consultazione delle risorse di rete                                                                                             |
| network_write                                 | Gestione delle risorse di rete                                                                                                  |
| order_read                                    | Consultazione degli ordini infrastrutture                                                                                     |
| order_write                                   | Creazione di ordini infrastruttura                                                                                            |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                       |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                   |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                                  |
| openshift_management                          | Permette di connettersi alle piattaforme Openshift (scoperto al tenant)                                                          |
| support_management                            | Consultazione dell'insieme dei ticket support del tenant                                                                       |
| support_read                                  | Consultazione dei propri ticket support del tenant                                                                                  |
| support_write                                 | Creazione di un ticket support sul tenant                                                                                     |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                   |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                        |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                  |
| ticket_comment_write                          | Gestione dei commenti                                                                                                       |
| ticket_read                                   | Consultazione dei ticket                                                                                                       |
| ticket_write                                  | Gestione dei ticket                                                                                                            |

## Organisations

L'organizzazione è legata al tuo __conto principale__ e al __contratto Cloud Temple associato__. Rappresenta la tua entità (azienda, reparto, squadra, ...) che supporta la relazione contrattuale tra Cloud Temple e te.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli:

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale al livello della console Shiva o remota tramite un servizio di federazione dell'identità,
- Supporta l'insieme degli __account utente__,
- __Fede gli tenant__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per le esigenze della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette al livello dell'organizzazione __la configurazione del meccanismo di autenticazione__. Puoi
utilizzare il repository locale di autenticazione della console Shiva o collegare la tua organizzazione a uno
dei tuoi repository di autenticazione.

I repository esterni seguenti sono supportati:

- Repository compatibili __OpenID Connect__,
- Repository compatibili __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Una [Organizzazione](#organisations) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, vengono utilizzati più tenant per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Test__
- Un tenant __Qualificazione__
Mais il est aussi possible d'organiser les choses avec une __vue applicative__ ou par __criticità__ :

- Un tenant __Application 1__ ou __Criticità 1__
- Un tenant __Application 2__ ou __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un determinato tenant e non sono condivise con altri tenant. Ad esempio, un cluster di Hypervisori e le reti L2 associate sono disponibili solo in 1 tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità della rete tra i tenant.

I permessi degli utenti devono essere definiti in ogni tenant. Così ogni organizzazione deve riflettere attentamente sui tenant desiderati. Questo punto è generalmente discusso in un workshop di inizializzazione, al momento della creazione dell'organizzazione.

È possibile evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, ovvero un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Una vlan di rete.


| Riferimento ordine                                          | Unità     | SKU                      |
|-------------------------------------------------------------|-----------|--------------------------|
| TENANT - *(REGION)* - Attivazione di un tenant              | 1 tenant  | csp:tenant:v1            |
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 tenant  | csp:(region):iaas:az:v1  |


### Gestione dei proprietari su un tenant
Ogni tenant ha almeno un proprietario, garantendo così una responsabilità chiara e una gestione efficace delle risorse associate. Inoltre, è possibile dichiarare più proprietari su uno stesso tenant, permettendo una collaborazione e una presa di decisioni condivisa. Di seguito, troverete informazioni importanti da considerare nella gestione di questi proprietari.

#### Informazioni importanti sulla gestione dei proprietari

#### 1. Numero di proprietari
* Non c'è alcun limite tecnico sul numero di proprietari che possono essere definiti sul tenant.
* L'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 proprietari, al fine di incoraggiare a limitare il numero di proprietari per motivi di sicurezza e una gestione ottimale degli accessi.

#### 2. Aggiunta di un nuovo proprietario
* Quando si aggiunge un nuovo proprietario, l'aggiornamento dei suoi permessi potrebbe richiedere fino a 60 minuti.
* Questo tempo di propagazione è normale e serve a garantire che i diritti di accesso siano correttamente applicati a tutti i servizi e le risorse associate.

#### 3. Rimozione di un proprietario
* Per rimuovere un proprietario dal tenant, l'utente deve inviare una richiesta al supporto.
* Questa procedura garantisce che le modifiche dei diritti di accesso vengano effettuate in maniera sicura e conforme alle migliori pratiche di gestione degli accessi.

### Autorizzazione all'accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualifica SecNumCloud. Questa restrizione garantisce un livello di sicurezza elevato consentendo l'accesso solo agli utenti provenienti da range di IP specifici, minimizzando così i rischi di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta al supporto nella console di Cloud Temple.*

### Consumo delle risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata dell'utilizzo dei diversi servizi implementati. Questa funzionalità permette agli utenti di monitorare in tempo reale il consumo delle proprie risorse, identificare i servizi più utilizzati e ottimizzare il loro utilizzo in base alle necessità.

Nel menu della console, cliccate su "Rapporto di consumo" e poi selezionate il periodo di tempo desiderato. Potrete così visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, analizzare l'utilizzo dei servizi e ottimizzare la vostra gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)