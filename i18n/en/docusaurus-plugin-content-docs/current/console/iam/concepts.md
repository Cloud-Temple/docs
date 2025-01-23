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

**Warning**: Assurez-vous de bien être à l'origine de la demande de réinscription de votre compte utilisateur. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_012.png)

### Mettre à jour son profil

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Mettre à jour votre profil'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre profil.

**Warning**: Assurez-vous de bien être à l'origine de la demande de mise à jour du profil. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_014.png)

### Réinitialisation du mot de passe

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Réinitialiser mot de passe'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre mot de passe.

**Warning**: Assurez-vous de bien être à l'origine de la demande de réinitialisation de votre mot de passe. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_015.png)

### Réinitialisation du double facteur d'authentification

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Réinitialiser MFA'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre double facteur d'authentification.

**Warning**: Assurez-vous de bien être à l'origine de la demande de réinitialiser de votre double facteur d'authentification. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

![](images/shiva_profil_016.png)

### Suppression d'un utilisateur

La suppression d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez supprimer, puis cliquez sur le bouton d'action au bout de la ligne puis __'Supprimer'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: Vous ne pouvez pas vous supprimer vous-même et vous ne pouvez pas supprimer un utilisateur __'Propriétaire'__.

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

Lorsqu’un utilisateur est créé, il ne possède aucune permission par défaut. Chaque permission est attribuée individuellement et fonctionne de manière unitaire, sans chevauchement avec d’autres permissions. Elles s’appliquent en conjonction, ce qui signifie qu’un utilisateur doit disposer de toutes les permissions requises pour effectuer une action spécifique.

Les permissions suivantes sont configurables pour chaque utilisateur et pour chaque tenant de votre organisation :
	•	Permissions de type “read” : permettent uniquement la consultation des ressources sans possibilité de modification.
	•	Permissions de type “write” : autorisent la modification des configurations.
 	•	Permissions de type “management“ : autorisent la gestion avancées des ressources.

- __Ce sont des permissions, pas des rôles.__ À ce titre, il est nécessaire d'avoir la permission READ et WRITE pour modifier une configuration.

Dernière mise à jour le: 23/01/2025

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
| compute_iaas_opensource_console_access        | Offre OpenIaaS - Ouverture de la console d'une machine virtuelle                                                                |

| compute_iaas_opensource_infrastructure_read   | OpenIaaS Offer -Advanced data consultation of Xen Orchestra resources |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Offer -Advanced management of Xen Orchestra resources                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS Offer -Consultation of Virtual Machines type resources                                                        |
| compute_iaas_opensource_management            | OpenIaaS Offer -Management of Virtual Machines type resources                                                             |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Offer -Management of a virtual machine's power                                                              |
| compute_iaas_vmware_console_access            | Vmware Offer - Opening the console of a virtual machine                                                                 |
| compute_iaas_vmware_infrastructure_read       | Vmware Offer - Consultation of advanced data of VMware resources (affinity/anti-affinity rules, drs configuration, etc)  |
| compute_iaas_vmware_infrastructure_write      | Vmware Offer - Advanced management of VMware resources                                                                           |
| compute_iaas_vmware_read                      | Vmware Offer - Consultation of Virtual Machines type resources                                                         |
| compute_iaas_vmware_management                | Vmware Offer - Management of Virtual Machines type resources (allows the encryption of a virtual machine)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Vmware Offer - Management of a virtual machine's power                                                               |
| baremetal_read                                | Bare Metal Offer - Consultation of Bare Metal type resources                                                               |
| baremetal_console_access                      | Bare Metal Offer - Opening the console of a Bare Metal                                                                  |
| console_public_access_read                    | Consultation of IPs authorized to access the console                                                                         |
| console_public_access_write                   | Adding IPs authorized to access the console                                                                                  |
| compute_virtual_machine_power                 | Management of a virtual machine's power                                                                              |
| documentation_read                            | Consultation of confluence documentation resources                                                                        |
| housing_read                                  | Consultation of colocation type resources                                                                                 |
| iam_offline_access                            | Creation and deletion of Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | Consultation of user rights                                                                                           |
| iam_write                                     | Management of user rights                                                                                                |
| intervention_read                             | Consultation of changes and production deployments planned on the platform                                                  |
| inventory_read                                | Consultation of Inventory type resources                                                                                 |
| inventory_write                               | Management of Inventory type resources                                                                                      |
| monitoring_read                               | Consultation of monitoring                                                                                                     |
| monitoring_write                              | Management of monitoring                                                                                                          |
| metric_read                                   | Consultation of health data on virtual machines and hosts                                                         |
| network_read                                  | Consultation of network resources                                                                                             |
| network_write                                 | Management of network resources                                                                                                  |
| order_read                                    | Consultation of infrastructure orders                                                                                     |
| order_write                                   | Creation of infrastructure orders                                                                                            |
| object-storage_iam_management                 | Allows managing storage accounts on the S3 product                                                                       |
| object-storage_read                           | Allows viewing buckets and bucket configurations                                                                   |
| object-storage_write                          | Allows editing buckets and bucket configurations                                                                  |
| openshift_management                          | Allows connecting to Openshift platforms (scoped to the tenant)                                                          |
| support_management                            | Consultation of all the tenant's support tickets                                                                       |
| support_read                                  | Consultation of their tenant's support tickets                                                                                  |
| support_write                                 | Creation of a support ticket on the tenant                                                                                     |
| tag_read                                      | Consultation of tags, except RTMS tags                                                                                   |
| tag_write                                     | Management of tags, except RTMS tags                                                                                        |
| ticket_comment_read                           | Consultation of comments                                                                                                  |
| ticket_comment_write                          | Management of comments                                                                                                       |
| ticket_read                                   | Consultation of tickets                                                                                                       |
| ticket_write                                  | Management of tickets                                                                                                            |

## Organizations

The organization is linked to your __sponsoring account__ and the __associated Cloud Temple contract__. It represents your entity (company, department, team, ...) that holds the contractual relationship between Cloud Temple and you.

### Principle of an organization

The organization has four main roles:

- It represents the __contractual entity__ for monitoring and billing aspects,
- It defines the __global configuration of the authentication mechanism__: authentication can be local at the Shiva console level or remote via an identity federation service,
- It holds all __user accounts__,
- It __federates the tenants__ (Production, Preproduction, Dev, Application 1, Application 2, ...) that you define for the needs of your Cloud architecture.

The roles (rights/permissions) of users are configurable for each tenant defined in your organization. For example, an account can be authorized to order resources in one tenant, but not in another.

### Authentication mechanisms

The Shiva console allows __setting the authentication mechanism__ at the organization level. You can
use the local authentication repository of the Shiva console or link your organization to one
of your authentication repositories.

The following external repositories are supported:

- __OpenID Connect__ compliant repositories,
- __SAML__ compliant repositories,
- __Microsoft ADFS__,
- __Microsoft EntraID__ (Microsoft Azure Active Directory),
- Amazon AWS Cognito,
- Okta,
- Auth0,
- KeyCloak,

## Tenant

The tenant is a __grouping of resources within an organization__. An [Organization](#organisations) has at least one tenant (called __default tenant__, which can be renamed). Generally, several tenants are used to segment responsibilities or technical perimeters.

For example:

- A __Production__ tenant,
- A __Preproduction__ tenant,
- A __Recette__ tenant,
- A __Qualification__ tenant,
Mais il est aussi possible d'organiser les choses avec une __vue applicative__ ou par __criticité__ :

- Un tenant __Application 1__ ou __Criticité 1__
- Un tenant __Application 2__ ou __Criticité 2__
- ...

Les ressources techniques commandées sont affectées à un tenant précis et ne sont pas partagées avec les autres tenants. Par exemple, un cluster d'Hyperviseur et les réseaux L2 associées ne sont disponibles que dans 1 tenant.
Concernant les réseaux, il est possible de demander des réseaux __'cross tenant'__ afin d'assurer la continuité réseau entre les tenants.

Les permissions des utilisateurs sont à définir dans chaque tenant. Ainsi chaque organisation doit bien réfléchir aux tenants souhaités. Ce point est généralement abordé en atelier initialisation, au moment de la création de l'organisation.

Il est possible de faire évoluer l'architecture en ajoutant ou supprimant des tenants.

Un tenant ne peut pas être vide. Il doit nécessairement être initialisé avec un minimum de ressource :

- Une zone de disponibilité (AZ, soit un datacenter physique),
- Un cluster de calcul,
- Un espace de stockage,
- Un vlan réseau.


| Référence de commande                                        | Unité    | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Activation d'un tenant                 | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Activation d'une zone de disponibilité | 1 tenant | csp:(region):iaas:az:v1 |


### Gestion des propriétaires sur un tenant
Chaque tenant possède au moins un propriétaire, garantissant ainsi une responsabilité claire et une gestion efficace des ressources associées. De plus, il est possible de déclarer plusieurs propriétaires sur un même tenant, permettant une collaboration et une prise de décision partagée. Ci-dessous, vous trouverez des informations importantes à prendre en compte lors de la gestion de ces propriétaires.

#### Informations importantes sur la gestion des propriétaires

#### 1. Nombre de propriétaires
* Il n'y a pas de limite technique quant au nombre de propriétaires pouvant être définis sur le tenant.
* L'interface de gestion (IHM) émet un avertissement lorsqu'il y a plus de 3 propriétaires, afin d'inciter à limiter le nombre de propriétaires pour des raisons de sécurité et de gestion optimale des accès.

#### 2. Ajout d'un nouveau propriétaire
* Lors de l'ajout d'un nouveau propriétaire, la mise à jour de ses permissions peut nécessiter un délai allant jusqu'à 60 minutes.
* Ce temps de propagation est normal et permet de s'assurer que les droits d'accès sont correctement appliqués à l'ensemble des services et ressources associés.

#### 3. Retrait d'un propriétaire
* Pour retirer un propriétaire du tenant, l'utilisateur doit soumettre une demande au support.
* Cette procédure permet de garantir que les modifications des droits d'accès sont effectuées de manière sécurisée et conforme aux bonnes pratiques de gestion des accès.

### Autorisation d'accès à un tenant : IP autorisées

L'accès à la console de gestion cloud est strictement limité aux adresses IP préalablement autorisées, en conformité avec les exigences de la qualification SecNumCloud. Cette restriction garantit un niveau de sécurité renforcé en ne permettant l'accès qu'aux utilisateurs provenant de plages d'IP spécifiées, minimisant ainsi les risques d'accès non autorisés et protégeant l'infrastructure cloud selon les standards de sécurité les plus élevés.

Note : *La suppression d'un IP autorisée se fait par une demande de support dans la console Cloud Temple.*

### Consommation de ressource au sein d'un tenant

Il est possible de visualiser les ressources cloud consommées au sein d'un tenant, offrant ainsi une vue détaillée de l'utilisation des différents services déployés. Cette fonctionnalité permet aux utilisateurs de suivre en temps réel la consommation de leurs ressources, d'identifier les services les plus sollicités et d'optimiser leur utilisation en fonction des besoins.

Dans le menu de la console, cliquez sur "Rapport de consommation" puis sélectionnez la période de temps souhaitée. Vous pourrez ainsi visualiser en détail la consommation des ressources cloud sur la période définie, ce qui vous permettra d’analyser l’utilisation des services et d’optimiser votre gestion en conséquence :

![](images/shiva_tenant_ressources_01.png)