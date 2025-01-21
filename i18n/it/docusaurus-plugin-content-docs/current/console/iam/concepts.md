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

La lista delle permission e la loro definizione è accessibile [ici](#permissions).

### Réinscription d'un utilisateur

Lorsqu'un utilisateur a été provisionné mais n'a pas validé son inscription dans le délai d'expiration du mail envoyé par la Console, il ne peut plus confirmer son inscription. Il est alors possible de lui renvoyer un lien afin qu'il renouvelle sa première inscription.

La réinscription d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez réinscrire, puis cliquer sur le bouton d'action au bout de la ligne puis __'Réinscription'__.

![](images/shiva_profil_012.png)

### Suppression d'un utilisateur

La suppression d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez supprimer, puis cliquer sur le bouton d'action au bout de la ligne puis __'Supprimer'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: Vous ne pouvez pas vous supprimer vous même et vous ne pouvez pas supprimer un utilisateur __'Propriétaire'__.

### Se déconnecter

La déconnexion d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, puis __'Déconnecter'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

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
| compute_iaas_opensource_infrastructure_write  | Offre OpenIaaS -Gestion avancée des ressources Xen Orchestra                                                                           |
| compute_iaas_opensource_read                  | Offre OpenIaaS -Consultation des ressources de type Machines Virtuelles                                                        |
| compute_iaas_opensource_management            | Offre OpenIaaS -Gestion des ressources de type Machines Virtuelles                                                             |
| compute_iaas_opensource_virtual_machine_power | Offre OpenIaaS -Gestion de l'alimentation d'une machine virtuelle                                                              |
| compute_iaas_vmware_console_access            | Offre Vmware - Ouverture de la console d'une machine virtuelle                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offre Vmware - Consultation de données avancées des ressources VMware (règles affinité/anti-affinité, configuration drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Offre Vmware - Gestion avancée des ressources VMware                                                                           |
| compute_iaas_vmware_read                      | Offre Vmware - Consultation des ressources de type Machines Virtuelles                                                         |
| compute_iaas_vmware_management                | Offre Vmware - Gestion des ressources de type Machines Virtuelles                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offre Vmware - Gestion de l'alimentation d'une machine virtuelle                                                               |
| console_public_access_read                    | Consultation des IPs autorisées à accéder à la console                                                                         |
| console_public_access_write                   | Ajout d'IPs autorisées à accéder à la console                                                                                  |
| compute_virtual_machine_power                 | Gestion de l'alimentation d'une machine virtuelle                                                                              |
| documentation_read                            | Consultation des ressources documentation de confluence                                                                        |

| housing_read                                  | Consultazione delle risorse di tipo coabitazione                                                                               |
| iam_offline_access                            | Creazione e eliminazione di Access Token Personali (PAT)                                                                       |
| iam_read                                      | Consultazione dei diritti utente                                                                                               |
| iam_write                                     | Gestione dei diritti utente                                                                                                    |
| intervention_read                             | Consultazione dei cambiamenti e delle messe in produzione previste sulla piattaforma                                           |
| inventory_read                                | Consultazione delle risorse di tipo Inventario                                                                                 |
| inventory_write                               | Gestione delle risorse di tipo Inventario                                                                                      |
| monitoring_read                               | Consultazione del monitoraggio                                                                                                |
| monitoring_write                              | Gestione del monitoraggio                                                                                                     |
| metric_read                                   | Consultazione dei dati di salute sulle macchine virtuali e sugli host                                                          |
| network_read                                  | Consultazione delle risorse di rete                                                                                           |
| network_write                                 | Gestione delle risorse di rete                                                                                                |
| order_read                                    | Consultazione degli ordini di infrastruttura                                                                                   |
| order_write                                   | Creazione di ordine di infrastruttura                                                                                          |
| object-storage_iam_management                 | Permette di gestire gli account di storage sul prodotto S3                                                                     |
| object-storage_read                           | Permette di vedere i bucket e le configurazioni dei bucket                                                                     |
| object-storage_write                          | Permette di modificare i bucket e le configurazioni dei bucket                                                                 |
| openshift_management                          | Permette di connettersi alle piattaforme OpenShift (scopato al tenant)                                                         |
| Owner                                         | L'utente ha i diritti di amministrazione di un tenant                                                                         |
| support_management                            | Consultazione di tutti i ticket di supporto del tenant                                                                        |
| support_read                                  | Consultazione dei propri ticket di supporto del tenant                                                                        |
| support_write                                 | Creazione di un ticket di supporto sul tenant                                                                                  |
| tag_read                                      | Consultazione dei tag, eccetto i tag RTMS                                                                                     |
| tag_write                                     | Gestione dei tag, eccetto i tag RTMS                                                                                          |
| ticket_comment_read                           | Consultazione dei commenti                                                                                                    |
| ticket_comment_write                          | Gestione dei commenti                                                                                                         |
| ticket_read                                   | Consultazione dei ticket                                                                                                      |
| ticket_write                                  | Gestione dei ticket                                                                                                           |

**Note** :

- *Non c'è alcun limite sul numero di proprietari (owners) che possono essere definiti su un tenant. Tuttavia, l'interfaccia di gestione (GUI) emette un avviso quando ci sono più di 3 proprietari, per incoraggiare a limitare il numero di proprietari per motivi di sicurezza e una gestione ottimale degli accessi.*
- *Durante l'aggiunta di un nuovo proprietario (owner), l'aggiornamento delle sue autorizzazioni può richiedere fino a 60 minuti. Questo tempo di propagazione è normale e consente di garantire che i diritti di accesso siano applicati correttamente a tutti i servizi e le risorse associate.*
- *Per rimuovere un proprietario (owner) dal tenant, l'utente deve presentare una richiesta al supporto. Questa procedura garantisce che le modifiche ai diritti di accesso siano eseguite in modo sicuro e conforme alle migliori pratiche di gestione degli accessi.*

### Autorizzazioni deprecate

Le seguenti autorizzazioni non sono più disponibili:

| Nome autorizzazione                            | Data       | Descrizione dell'autorizzazione                                                                                    |
| ---------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consultazione delle risorse di tipo backup                                                                          |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Gestione delle risorse di tipo backup - modifica                                                                    |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Apertura della console di una macchina virtuale                                                                     |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consultazione dei dati avanzati delle risorse VMware (regole di affinità/anti-affinità, configurazione drs, ecc)    |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Gestione avanzata delle risorse VMware                                                                              |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consultazione delle risorse di tipo Macchine Virtuali                                                               |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Gestione delle risorse di tipo Macchine Virtuali                                                                    |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Gestione dell'alimentazione di una macchina virtuale                                                                |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Gestione dei nuovi diritti per se stessi                                                                           |


## Organizzazioni

L'organizzazione è legata al tuo __account committente__ e al __contratto Cloud Temple associato__. Essa rappresenta la tua entità (società, dipartimento, team, ...) che detiene la relazione contrattuale tra Cloud Temple e te.

### Principio di un'organizzazione

L'organizzazione ha quattro ruoli principali: 

- Rappresenta l’__entità contrattuale__ per gli aspetti di monitoraggio e fatturazione,
- Definisce la __configurazione globale del meccanismo di autenticazione__: l'autenticazione può essere locale a livello della console Shiva o remota tramite un servizio di federazione dell'identità,
- Detiene tutti gli __account utente__,
- __Federate i tenant__ (Produzione, Preproduzione, Dev, Applicazione 1, Applicazione 2, ...) che definisci per le esigenze della tua architettura Cloud.

I ruoli (diritti/autorizzazioni) degli utenti sono configurabili per ogni tenant definito nella tua organizzazione. Ad esempio, un account può essere autorizzato a ordinare risorse in un tenant, ma non in un altro.

### Meccanismi di autenticazione

La console Shiva permette a livello dell'organizzazione __la configurazione del meccanismo di autenticazione__. Puoi 
utilizzare il repository locale di autenticazione della console Shiva oppure connettere la tua organizzazione a uno dei tuoi 
repository di autenticazione.

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

Il tenant è un __raggruppamento di risorse all'interno di un'organizzazione__. Una [Organizzazione](#organizzazioni) ha almeno un tenant (chiamato __tenant predefinito__, che può essere rinominato). Generalmente, vengono utilizzati più tenant per segmentare le responsabilità o gli ambiti tecnici.

Ad esempio:

- Un tenant __Produzione__
- Un tenant __Preproduzione__
- Un tenant __Collaudo__
- Un tenant __Qualification__

Ma è anche possibile organizzare le cose con una __vista applicativa__ o per __criticità__ : 

- Un tenant __Applicazione 1__ o __Criticità 1__
- Un tenant __Applicazione 2__ o __Criticità 2__
- ...

Le risorse tecniche ordinate sono assegnate a un tenant specifico e non sono condivise con altri tenant. Ad esempio, un cluster di Hypervisor e le reti L2 associate sono disponibili solo in 1 tenant. Per quanto riguarda le reti, è possibile richiedere reti __'cross tenant'__ per garantire la continuità di rete tra i tenant.

I permessi degli utenti devono essere definiti in ogni tenant. Pertanto, ogni organizzazione deve riflettere attentamente sui tenant desiderati. Questo punto viene generalmente trattato durante l'atelier di inizializzazione, al momento della creazione dell'organizzazione.

È possibile far evolvere l'architettura aggiungendo o rimuovendo tenant.

Un tenant non può essere vuoto. Deve necessariamente essere inizializzato con una risorsa minima:

- Una zona di disponibilità (AZ, ovvero un datacenter fisico),
- Un cluster di calcolo,
- Uno spazio di archiviazione,
- Una vlan di rete.

| Riferimento dell'ordine                                   | Unità    | SKU                     |  
|----------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGIONE)* - Attivazione di un tenant          | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGIONE)* - Attivazione di una zona di disponibilità | 1 tenant | csp:(regione):iaas:az:v1 |

### Autorizzazione di accesso a un tenant: IP autorizzati

L'accesso alla console di gestione cloud è strettamente limitato agli indirizzi IP precedentemente autorizzati, in conformità con i requisiti della qualificazione SecNumCloud. Questa restrizione garantisce un livello di sicurezza elevato consentendo l'accesso solo agli utenti provenienti da intervalli di IP specificati, minimizzando così i rischi di accesso non autorizzato e proteggendo l'infrastruttura cloud secondo i più alti standard di sicurezza.

Nota: *La rimozione di un IP autorizzato avviene tramite una richiesta di supporto nella console Cloud Temple.*

### Consumo delle risorse all'interno di un tenant

È possibile visualizzare le risorse cloud consumate all'interno di un tenant, offrendo così una visione dettagliata dell'utilizzo dei diversi servizi distribuiti. Questa funzionalità permette agli utenti di monitorare in tempo reale il consumo delle loro risorse, identificare i servizi più utilizzati e ottimizzare il loro utilizzo in base alle necessità.

Nel menu della console, cliccare su "Rapporto di consumo" e poi selezionare il periodo di tempo desiderato. Sarà possibile visualizzare in dettaglio il consumo delle risorse cloud nel periodo definito, permettendo di analizzare l'uso dei servizi e ottimizzare la gestione di conseguenza:

![](images/shiva_tenant_ressources_01.png)