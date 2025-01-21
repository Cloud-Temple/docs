---
title: Concepts
---


## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maitre du commanditaire sur invitation (quelque soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La création d'un compte utilisateur dans votre organisation se fait par invitation. Pour inviter un utilisateur dans une [Organisation](#organisations), aller dans le menu __'Administration'__ à gauche de votre écran sur le bandeau vert puis dans le sous menu __'Utilisateurs'__.  

Cliquer sur le bouton __'Nouvel Utilisateur'__ depuis la page des utilisateurs. 

![](images/shiva_onboard_003.png)

Indiquer ensuite l'adresse de messagerie de l'utilisateur 

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

La réinscription d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, in basso a sinistra dello schermo.

Seleziona l'utente che desideri reinscrivere, poi clicca sul pulsante d'azione alla fine della riga e poi __'Réinscription'__.

![](images/shiva_profil_012.png)

### Suppression d'un utilisateur

La suppression d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, in basso a sinistra dello schermo.

Seleziona l'utente che desideri eliminare, poi clicca sul pulsante d'azione alla fine della riga e poi __'Supprimer'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: Vous ne pouvez pas vous supprimer vous même et vous ne pouvez pas supprimer un utilisateur __'Propriétaire'__.

### Se déconnecter

La déconnexion d'un utilisateur est à réaliser dans son __'Profil'__, in alto a destra dello schermo, poi __'Déconnecter'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

### Changer la langue d'un utilisateur

Le changement de langue d'un utilisateur est à réaliser dans son __'Profil'__, in alto a destra dello schermo, nei __'Paramètres utilisateur'__.

![](images/shiva_profil_006.png)

La configurazione è fatta per ogni tenant [Tenant](#tenants).

### Abonnement aux notifications thématiques

La gestion des abonnements permet de recevoir les e-mails relatifs aux thématiques activées qui seront automatiquement envoyés lors de la survenue d'événements correspondants.

Elle est accessible dans le profil utilisateur, nell'__scheda "Mes abonnements"__ :

![](images/shiva_profil_007.png)

 Per esempio, in caso di incidente, saranno generate notifiche via e-mail specifiche su questo tema.

La lista dei temi disponibili è soggetta a cambiamenti e si arricchirà gradualmente per adattarsi alle esigenze e ai cambiamenti nel nostro ambiente operativo.



## Permessi

La console Shiva consente una gestione granulare dei permessi degli utenti di un'organizzazione, con una separazione per tenant.
Inizialmente, è l'account principale del committente che permette la configurazione iniziale degli account e dei permessi associati.
Successivamente, il diritto __'iam_write'__ consente a un account di amministrare i permessi degli altri utenti.

### Permessi disponibili per gli utenti della vostra organizzazione

I seguenti permessi sono configurabili per ogni [utilisateur](#utilisateurs) e per ogni [tenant](#tenants#selection-dun-tenant) della vostra organizzazione.

- I permessi di tipo __'read'__ sono associati alla consultazione senza possibilità di configurazione
- I permessi di tipo __'write'__ sono associati alla modifica di configurazione.
- __Questi sono permessi, non ruoli.__ Pertanto, è necessario avere i permessi READ e WRITE per modificare una configurazione.

__VERSION : 20241007__

| Nom de la permission                          | Description de la permission                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultazione dei log e delle attività                                                                                         |
| activity_write                                | Gestione dei log e delle attività                                                                                              |
| backup_iaas_opensource_read                   | Gestione delle risorse di tipo backup - Offerta OpenIaaS - consultazione                                                       |
| backup_iaas_opensource_write                  | Gestione delle risorse di tipo backup - Offerta OpenIaaS - modifica                                                            |
| backup_iaas_spp_read                          | Gestione delle risorse di tipo backup - Offerta Vmware - consultazione                                                         |
| backup_iaas_spp_write                         | Gestione delle risorse di tipo backup - Offerta Vmware - modifica                                                              |
| bastion_read                                  | Consultazione delle risorse di tipo bastion                                                                                    |
| bastion_write                                 | Gestione delle risorse (appliances, sessions,...) di tipo Bastion                                                              |
| bastion_console_access                        | Autorizzazione all'accesso alla console (ssh/rdp) di una risorsa protetta da un'appliance Bastion                              |
| compute_iaas_opensource_console_access        | Offerta OpenIaaS - Apertura della console di una macchina virtuale                                                             |
| compute_iaas_opensource_infrastructure_read   | Offerta OpenIaaS - Consultazione dei dati avanzati delle risorse Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offerta OpenIaaS - Gestione avanzata delle risorse Xen Orchestra                                                               |
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
| documentation_read                            | Consultazione delle risorse documentative di confluence                                                                        |

| housing_read                                  | Consultazione delle risorse di tipo co-housing                                                                              |
| iam_offline_access                            | Creazione e cancellazione di Access Token Personali (PAT)                                                                    |
| iam_read                                      | Consultazione dei diritti utente                                                                                            |
| iam_write                                     | Gestione dei diritti utente                                                                                                 |
| intervention_read                             | Consultazione delle modifiche e delle messe in produzione previste sulla piattaforma                                        |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                              |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                   |
| monitoring_read                               | Consultazione del monitoraggio                                                                                              |
| monitoring_write                              | Gestione del monitoraggio                                                                                                   |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e host                                                             |
| network_read                                  | Consultazione delle risorse di rete                                                                                         |
| network_write                                 | Gestione delle risorse di rete                                                                                              |
| order_read                                    | Consultazione degli ordini infrastrutturali                                                                                 |
| order_write                                   | Creazione di ordini infrastrutturali                                                                                        |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                  |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                  |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                              |
| openshift_management                          | Permette di connettersi alle piattaforme OpenShift (scopato sul tenant)                                                     |
| Owner                                         | L'utente ha i diritti di amministrazione di un tenant                                                                       |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                      |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                      |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                               |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                   |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                        |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                  |
| ticket_comment_write                          | Gestione dei commenti                                                                                                       |
| ticket_read                                   | Consultazione dei ticket                                                                                                    |
| ticket_write                                  | Gestione dei ticket                                                                                                         |

**Note** :

- *Non c'è alcun limite al numero di owner (proprietari) che possono essere definiti su un tenant. Tuttavia, l'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 owner, al fine di incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e di gestione ottimale degli accessi.*
- *Quando si aggiunge un nuovo proprietario (owner), l'aggiornamento dei suoi permessi può richiedere fino a 60 minuti. Questo tempo di propagazione è normale e serve a garantire che i diritti di accesso siano correttamente applicati a tutti i servizi e alle risorse associate.*
- *Per rimuovere un proprietario (owner) da un tenant, l'utente deve inviare una richiesta al supporto. Questa procedura garantisce che le modifiche ai diritti di accesso siano effettuate in modo sicuro e conforme alle buone pratiche di gestione degli accessi.*

### Permessi deprecati

I seguenti permessi non sono più disponibili:

| Nome del permesso                              | Data       | Descrizione del permesso                                                                                          |
| ---------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consultazione delle risorse di tipo backup                                                                         |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestione delle risorse di tipo backup - modifica                                                                   |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura della console di una macchina virtuale                                                                    |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc.)   |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestione avanzata delle risorse VMware                                                                             |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consultazione delle risorse di tipo Macchine Virtuali                                                              |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestione delle risorse di tipo Macchine Virtuali                                                                   |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestione dell'alimentazione di una macchina virtuale                                                               |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestione dei nuovi diritti per se stessi                                                                          |


## Organizzazioni

L'organizzazione è legata al vostro __account sponsor__ e al __contratto Cloud Temple associato__. Essa rappresenta la vostra entità (azienda, dipartimento, team, ...) che porta la relazione contrattuale tra Cloud Temple e voi.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli: 

- Rappresenta __l'entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce __la configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota via un servizio di federazione di identità,
- Porta l'insieme degli __account utente__,
- __Fedeera i tenant__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definite per le esigenze della vostra architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella vostra organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette il __parametraggio del meccanismo di autenticazione__ a livello dell'organizzazione. Potete utilizzare il repository locale di autenticazione della console Shiva o collegare la vostra organizzazione a uno dei vostri repository di autenticazione.  

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

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Una [Organizzazione](#organizzazioni) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, si utilizzano più tenant per segmentare le responsabilità o gli ambiti tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Test__
- Un tenant __Qualificazione__

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__ : 

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un tenant specifico e non sono condivise con altri tenant. Ad esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in 1 tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ al fine di garantire la continuità della rete tra i tenant.

Le autorizzazioni degli utenti devono essere definite in ciascun tenant. Pertanto, ogni organizzazione deve riflettere attentamente sui tenant desiderati. Questo punto viene generalmente affrontato in un workshop di avvio, al momento della creazione dell'organizzazione.

È possibile evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve essere necessariamente inizializzato con un minimo di risorse:

- Una zona di disponibilità (AZ, ovvero un data center fisico),
- Un cluster di calcolo,
- Uno spazio di storage,
- Una VLAN di rete.

| Riferimento dell'ordine                                      | Unità    | SKU                     |  
|-------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGIONE)* - Attivazione di un tenant             | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGIONE)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(regione):iaas:az:v1 |

### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza elevato permettendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo gli standard di sicurezza più elevati.

Nota: *La rimozione di un IP autorizzato si effettua tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo delle risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata sull'utilizzo dei diversi servizi distribuiti. Questa funzionalità permette agli utenti di monitorare in tempo reale il consumo delle loro risorse, di identificare i servizi più richiesti e di ottimizzare il loro utilizzo in base alle esigenze.

Nel menù della console, clicca su "Rapporto di consumo" e poi seleziona il periodo di tempo desiderato. Potrai così visualizzare in dettaglio il consumo delle risorse cloud sul periodo definito, il che ti permetterà di analizzare l’utilizzo dei servizi e di ottimizzare la tua gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)