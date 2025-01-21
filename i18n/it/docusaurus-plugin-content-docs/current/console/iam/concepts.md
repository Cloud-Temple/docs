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

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Réinitialiser mot de passe'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre mot de passe.

**Warning**: Assurez vous de bien être à l'origine de la demande de réinitialisation de votre mot de passe. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_015.png)

### Réinitialisation du double facteur d'authentification

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Réinitialiser MFA'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre double facteur d'authentification.

**Warning**: Assurez vous de bien être à l'origine de la demande de réinitialiser de votre double facteur d'authentification. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_016.png)

### Suppression d'un utilisateur

La suppression d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez supprimer, puis cliquez sur le bouton d'action au bout de la ligne puis __'Supprimer'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: Vous ne pouvez pas vous supprimer vous même et vous ne pouvez pas supprimer un utilisateur __'Propriétaire'__.

### Se déconnecter

La déconnexion d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, puis __'Déconnecter'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

Une déconnexion automatique est réalisée lors de l'expiration du jeton (JWT Token) de session.

### Changer la langue d'un utilisateur

Le changement de langue d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, dans les __'Paramètres utilisateur'__.

![](images/shiva_profil_006.png)

La configuration est faite pour chaque tenant [Tenant](#tenants).

### Abonnement aux notifications thématiques

La gestion des abonnements permet de recevoir les e-mails relatifs aux thématiques activées qui seront automatiquement envoyés lors de la survenue d'événements correspondants.

Elle est accessible dans le profil utilisateur, dans l'onglet "Mes abonnements" :

![](images/shiva_profil_007.png)

 Par exemple, en cas d'incident, des notifications par e-mail spécifiques à cette thématique seront générées.

La liste des thématiques disponibles est susceptible d'évoluer et de s'enrichir progressivement pour s'adapter aux besoins et aux changements dans notre environnement opérationnel.

## Permissions

La console Shiva permet une gestion fine des droits des utilisateurs d'une organisation, avec une ségrégation par tenant.
Initialement, c'est le compte principal du commanditaire qui permet la configuration initiale des comptes et des permissions associées.
Par la suite, le droit __'iam_write'__ permet à un compte d'administrer les permissions des autres utilisateurs.

### Permissions disponibles pour les utilisateurs de votre organisation

Les permissions suivantes sont configurables pour chaque [utilisateur](#utilisateurs) et pour chaque [tenant](#tenants#selection-dun-tenant) de votre organisation.

- Les permissions de type __'read'__ sont associés à la consultation sans possibilité de configuration
- Les permissions de type __'write'__ sont associés à la modification de configuration.
- __Ce sont des permissions, pas des rôles.__ À ce titre, il est nécessaire d'avoir la permission READ et WRITE pour modifier une configuration.

__VERSION : 20241007__

| Nom de la permission                          | Description de la permission                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Consultation des journaux logs et activités                                                                                    |
| activity_write                                | Gestion des journaux logs et activités                                                                                         |
| backup_iaas_opensource_read                   | Gestion des ressources de type backup - Offre OpenIaaS - consultation                                                          |
| backup_iaas_opensource_write                  | Gestion des ressources de type backup - Offre OpenIaaS - modification                                                          |
| backup_iaas_spp_read                          | Gestion des ressources de type backup - Offre Vmware - consultation                                                            |
| backup_iaas_spp_write                         | Gestion des ressources de type backup - Offre Vmware - modification                                                            |
| bastion_read                                  | Consultation des ressources de type bastion                                                                                    |
| bastion_write                                 | Gestion des ressources (appliances, sessions,...)  de type Bastion                                                             |
| bastion_console_access                        | Autorisation d'accès à la console (ssh/rdp) d'une ressource protégée par une appliance Bastion                                 |
| compute_iaas_opensource_console_access        | Offre OpenIaaS -Ouverture de la console d'une machine virtuelle                                                                |
| compute_iaas_opensource_infrastructure_read   | Offre OpenIaaS -Consultation de données avancées des ressources Xen Orchestra                                                  |
| compute_iaas_opensource_infrastructure_write  | Offre OpenIaaS -Gestion avancée des ressources Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Offre OpenIaaS -Consultation des ressources di tipo Macchine Virtuali                                                        |
| compute_iaas_opensource_management            | Offerta OpenIaaS - Gestione delle risorse di tipo macchine virtuali                                                               |
| compute_iaas_opensource_virtual_machine_power | Offerta OpenIaaS - Gestione dell'alimentazione di una macchina virtuale                                                          |
| compute_iaas_vmware_console_access            | Offerta Vmware - Apertura della console di una macchina virtuale                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offerta Vmware - Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione DRS, ecc)  |
| compute_iaas_vmware_infrastructure_write      | Offerta Vmware - Gestione avanzata delle risorse VMware                                                                          |
| compute_iaas_vmware_read                      | Offerta Vmware - Consultazione delle risorse di tipo macchine virtuali                                                           |
| compute_iaas_vmware_management                | Offerta Vmware - Gestione delle risorse di tipo macchine virtuali                                                                |
| compute_iaas_vmware_virtual_machine_power     | Offerta Vmware - Gestione dell'alimentazione di una macchina virtuale                                                            |
| console_public_access_read                    | Consultazione degli IP autorizzati ad accedere alla console                                                                      |
| console_public_access_write                   | Aggiunta di IP autorizzati ad accedere alla console                                                                              |
| compute_virtual_machine_power                 | Gestione dell'alimentazione di una macchina virtuale                                                                             |
| documentation_read                            | Consultazione delle risorse documentative di Confluence                                                                          |
| housing_read                                  | Consultazione delle risorse di tipo colocation                                                                                   |
| iam_offline_access                            | Creazione e rimozione di Personal Access Token (PAT)                                                                             |
| iam_read                                      | Consultazione dei diritti utenti                                                                                                 |
| iam_write                                     | Gestione dei diritti utenti                                                                                                      |
| intervention_read                             | Consultazione dei cambiamenti e delle messe in produzione previste sulla piattaforma                                             |
| inventory_read                                | Consultazione delle risorse di tipo inventario                                                                                   |
| inventory_write                               | Gestione delle risorse di tipo inventario                                                                                        |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                   |
| monitoring_write                              | Gestione del monitoraggio                                                                                                        |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e sugli host                                                            |
| network_read                                  | Consultazione delle risorse di rete                                                                                              |
| network_write                                 | Gestione delle risorse di rete                                                                                                   |
| order_read                                    | Consultazione degli ordini infrastrutture                                                                                        |
| order_write                                   | Creazione di ordini infrastrutture                                                                                                |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                       |
| object-storage_read                           | Permette di vedere i buckets e le configurazioni dei buckets                                                                     |
| object-storage_write                          | Permette di editare i buckets e le configurazioni dei buckets                                                                    |
| openshift_management                          | Permette di connettersi alle piattaforme Openshift (scoperto al tenant)                                                          |
| Owner                                         | L'utente ha i diritti di amministrazione di un tenant                                                                            |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                           |
| support_read                                  | Consultazione dei ticket di supporto del tenant                                                                                  |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                    |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                        |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                             |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                       |
| ticket_comment_write                          | Gestione dei commenti                                                                                                            |
| ticket_read                                   | Consultazione dei ticket                                                                                                         |
| ticket_write                                  | Gestione dei ticket                                                                                                              |

**Note** :

- *Non c'è alcun limite al numero di owner (proprietari) che possono essere definiti sul tenant. Tuttavia, l'interfaccia di gestione (IHM) emette un avviso quando ci sono più di 3 owner, al fine di incoraggiare a limitare il numero di proprietari per ragioni di sicurezza e di gestione ottimale degli accessi.*
- *Durante l'aggiunta di un nuovo proprietario (owner), l'aggiornamento dei suoi permessi può richiedere fino a 60 minuti. Questo tempo di propagazione è normale e serve a garantire che i diritti di accesso siano correttamente applicati a tutti i servizi e risorse associati.*
- *Per rimuovere un proprietario (owner) dal tenant, l'utente deve presentare una richiesta al supporto. Questa procedura garantisce che le modifiche ai diritti di accesso siano effettuate in modo sicuro e conforme alle buone pratiche di gestione degli accessi.*

### Permessi deprecati

I seguenti permessi non sono più disponibili:

| Nome del permesso                              | Data       | Descrizione del permesso                                                                                       |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATI**)                   | 07/10/2024 | Consultazione delle risorse di tipo backup                                                                      |
| backup_write (**DEPRECATI**)                   | 07/10/2024 | Gestione delle risorse di tipo backup - modifica                                                               |
| compute_console_access (**DEPRECATI**)         | 07/10/2024 | Apertura della console di una macchina virtuale                                                                 |
| compute_infrastructure_read (**DEPRECATI**)    | 07/10/2024 | Consultazione di dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione DRS, ecc) |
| compute_infrastructure_write (**DEPRECATI**)   | 07/10/2024 | Gestione avanzata delle risorse VMware                                                                          |
| compute_read (**DEPRECATI**)                   | 07/10/2024 | Consultazione delle risorse di tipo macchine virtuali                                                           |
| compute_management (**DEPRECATI**)             | 07/10/2024 | Gestione delle risorse di tipo macchine virtuali                                                                |
| compute_virtual_machine_power (**DEPRECATI**)  | 07/10/2024 | Gestione dell'alimentazione di una macchina virtuale                                                            |
| iam_manage_permissions (**DEPRECATO**)        | 07/10/2024 | Gestione dei nuovi diritti per se stessi                                                                      |


## Organizzazioni

L'organizzazione è legata al tuo __account sponsor__ e al __contratto Cloud Temple associato__. Rappresenta la tua entità (azienda, dipartimento, squadra, ...) che porta la relazione contrattuale tra Cloud Temple e te.

### Principio di un'organizzazione

L'organizzazione ha quattro grandi ruoli:

- Rappresenta l'__entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce la __configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota tramite un servizio di federazione d'identità,
- Porta l'insieme degli __account utente__,
- __Unisce i tenant__ (Produzione, Pre-produzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per le esigenze della tua architettura Cloud.

I ruoli (diritti/permessi) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette a livello dell'organizzazione __la configurazione del meccanismo di autenticazione__. Puoi
utilizzare il repository locale di autenticazione della console Shiva oppure collegare la tua organizzazione a uno dei tuoi repository di autenticazione.

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

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Un'[Organizzazione](#organisations) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, diversi tenant sono utilizzati per segmentare le responsabilità o i perimetri tecnici.

Ad esempio:

- Un tenant __Produzione__,
- Un tenant __Pre-produzione__,
- Un tenant __Testing__,
- Un tenant __Qualifica__.

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__:

- Un tenant __Applicazione 1__ o __Criticità 1__,
- Un tenant __Applicazione 2__ o __Criticità 2__,
- ...

Le risorse tecniche ordinate sono assegnate a un tenant specifico e non sono condivise con gli altri tenant. Ad esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in 1 tenant.
Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità della rete tra i tenant.

I permessi degli utenti sono da definire in ogni tenant. Pertanto, ogni organizzazione deve pensare attentamente ai tenant desiderati. Questo punto è generalmente affrontato durante il workshop di inizializzazione, al momento della creazione dell'organizzazione.

È possibile evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con almeno una risorsa minima:

- Una zona di disponibilità (AZ, ossia un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Un VLAN di rete.


| Riferimento ordine                                          | Unità    | SKU                     |  
|-------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGIONE)* - Attivazione di un tenant             | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGIONE)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(region):iaas:az:v1 |


### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP previamente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza rafforzato consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così il rischio di accessi non autorizzati e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

Nota: *La rimozione di un IP autorizzato viene effettuata tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo di risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una vista dettagliata sull'utilizzo dei diversi servizi implementati. Questa funzionalità permette agli utenti di monitorare in tempo reale il consumo delle loro risorse, di identificare i servizi più utilizzati e di ottimizzare il loro utilizzo in base alle esigenze.

Nel menu della console, clicca su "Rapporto di consumo" e seleziona il periodo di tempo desiderato. Potrai così visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, il che ti permetterà di analizzare l'utilizzo dei servizi e di ottimizzare la tua gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)