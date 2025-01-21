---
title: Concepts
---


## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maître du commanditaire sur invitation (quel que soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La création d'un compte utilisateur dans votre organisation se fait par invitation. Pour inviter un utilisateur dans une [Organisation](#organisations), aller dans le menu __'Administration'__ à gauche de votre écran sur le bandeau vert puis dans le sous-menu __'Utilisateurs'__.  

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

Le menu d'activation des droits apparaît alors :

![](images/shiva_onboard_005.png)

La configuration des permissions est à faire pour chaque [Tenant](#tenants) de l'[Organisation](#organisations).

La liste des permissions et leur définition est accessible [ici](#permissions).

### Réinscription d'un utilisateur

Lorsqu'un utilisateur a été provisionné mais n'a pas validé son inscription dans le délai d'expiration du mail envoyé par la Console, il ne peut plus confirmer son inscription. Il est alors possible de lui renvoyer un lien afin qu'il renouvelle sa première inscription.

La réinscription d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez réinscrire, puis cliquez sur le bouton d'action au bout de la ligne puis __'Réinscription'__.

![](images/shiva_profil_012.png)

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

- Les permissions de type __'read'__ sont associées à la consultation sans possibilité de configuration
- Les permissions de type __'write'__ sont associées à la modification de configuration.
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
| compute_iaas_opensource_infrastructure_read   | Offre OpenIaaS -Consultation de données avancées des ressources Xen Orchestra |
| compute_iaas_opensource_infrastructure_write  | Offre OpenIaaS -Gestion avancée des ressources Xen Orchestra                                                                          |
| compute_iaas_opensource_read                  | Offre OpenIaaS -Consultation des ressources de type Machines Virtuelles                                                        |
| compute_iaas_opensource_management            | Offre OpenIaaS -Gestion des ressources de type Machines Virtuelles                                                             |
| compute_iaas_opensource_virtual_machine_power | Offre OpenIaaS -Gestion de l'alimentation d'une machine virtuelle                                                              |
| compute_iaas_vmware_console_access            | Offre Vmware - Ouverture de la console d'une machine virtuelle                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offre Vmware - Consultation de données avancées des ressources VMware (règles affinité/anti-affinité, configuration DRS, etc)  |
| compute_iaas_vmware_infrastructure_write      | Offre Vmware - Gestion avancée des ressources VMware                                                                           |
| compute_iaas_vmware_read                      | Offre Vmware - Consultation des ressources de type Machines Virtuelles                                                         |
| compute_iaas_vmware_management                | Offre Vmware - Gestion des ressources de type Machines Virtuelles                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offre Vmware - Gestion de l'alimentation d'une machine virtuelle                                                               |
| console_public_access_read                    | Consultation des IPs autorisées à accéder à la console                                                                         |
| console_public_access_write                   | Ajout d'IPs autorisées à accéder à la console                                                                                  |
| compute_virtual_machine_power                 | Gestion de l'alimentation d'une machine virtuelle                                                                              |
| documentation_read                            | Consultation des ressources documentation de confluence                                                                        |

| housing_read                                  | Consultation of colocation-type resources                                                                                 |
| iam_offline_access                            | Creation and deletion of Personal Access Tokens (PATs)                                                                    |
| iam_read                                      | Consultation of user rights                                                                                           |
| iam_write                                     | Management of user rights                                                                                                |
| intervention_read                             | Consultation of planned changes and productions on the platform                                                  |
| inventory_read                                | Consultation of Inventory-type resources                                                                                 |
| inventory_write                               | Management of Inventory-type resources                                                                                      |
| monitoring_read                               | Monitoring consultation                                                                                                     |
| monitoring_write                              | Monitoring management                                                                                                          |
| metric_read                                   | Consultation of health data on virtual machines and hosts                                                         |
| network_read                                  | Consultation of network resources                                                                                             |
| network_write                                 | Management of network resources                                                                                                  |
| order_read                                    | Consultation of infrastructure orders                                                                                     |
| order_write                                   | Creation of infrastructure orders                                                                                            |
| object-storage_iam_management                 | Allows management of storage accounts on the S3 product                                                                       |
| object-storage_read                           | Allows viewing of buckets and bucket configurations                                                                   |
| object-storage_write                          | Allows editing of buckets and bucket configurations                                                                  |
| openshift_management                          | Allows connections to Openshift platforms (scoped to the tenant)                                                          |
| Owner                                         | The user has administration rights of a tenant                                                                       |
| support_management                            | Consultation of all support tickets of the tenant                                                                       |
| support_read                                  | Consultation of the user's support tickets of the tenant                                                                                  |
| support_write                                 | Creation of a support ticket on the tenant                                                                                     |
| tag_read                                      | Consultation of tags, except for RTMS tags                                                                                   |
| tag_write                                     | Management of tags, except for RTMS tags                                                                                        |
| ticket_comment_read                           | Consultation of comments                                                                                                  |
| ticket_comment_write                          | Management of comments                                                                                                       |
| ticket_read                                   | Consultation of tickets                                                                                                       |
| ticket_write                                  | Management of tickets                                                                                                            |

**Notes** :

- *There is no limit on the number of owners that can be defined on the tenant. However, the management interface (UI) issues a warning when there are more than 3 owners, to encourage limiting the number of owners for security and optimal access management reasons.*
- *When adding a new owner, updating their permissions may take up to 60 minutes. This propagation time is normal and ensures that access rights are properly applied to all associated services and resources.*
- *To remove an owner from the tenant, the user must submit a request to support. This procedure ensures that access rights modifications are carried out securely and following best access management practices.*

### Deprecated Permissions

The following permissions are no longer available:

| Permission Name                                | Date       | Description of the Permission                                                                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Consultation of backup-type resources                                                                     |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Management of backup-type resources - modification                                                           |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Opening of a virtual machine console                                                                |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Consultation of advanced VMware resource data (affinity/anti-affinity rules, DRS configuration, etc.) |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Advanced management of VMware resources                                                                          |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consultation of Virtual Machine-type resources                                                        |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Management of Virtual Machine-type resources                                                             |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Management of the power state of a virtual machine                                                              |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Management of new rights for oneself                                                                      |


## Organizations

The organization is linked to your __sponsor account__ and the __associated Cloud Temple contract__. It represents your entity (company, department, team, ...) that carries the contractual relationship between Cloud Temple and you.

### Principle of an organization

The organization has four main roles:

- It represents the __contractual entity__ for tracking and billing aspects,
- It defines the __global configuration of the authentication mechanism__: authentication can be local to the Shiva console or remote via an identity federation service,
- It carries all __user accounts__,
- It __federates the tenants__ (Production, Preproduction, Dev, Application 1, Application 2, ...) that you define for your Cloud architecture needs.

The roles (rights/permissions) of users are configurable for each tenant defined in your organization. For example, an account can be authorized to order resources in one tenant but not in another.

### Authentication mechanisms

The Shiva console allows configuring the __authentication mechanism__ at the organization level. You can use the local authentication repository of the Shiva console or dock your organization to one of your authentication repositories.

The following external repositories are supported:

- __OpenID Connect__ compatible repositories,
- __SAML__ compatible repositories,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

The tenant is a __grouping of resources within an organization__. An [Organization](#organisations) has at least one tenant (called the __default tenant__, which can be renamed). Generally, several tenants are used to segment responsibilities or technical perimeters.

For example:

- A __Production__ tenant
- A __Preproduction__ tenant
- A __Test__ tenant
- A __Qualification__ tenant

But it is also possible to organize things with an __application view__ or by __criticality__:

- An __Application 1__ or __Criticality 1__ tenant
- An __Application 2__ or __Criticality 2__ tenant
- ...

The ordered technical resources are allocated to a specific tenant and are not shared with other tenants. For example, a Hypervisor cluster and the associated L2 networks are only available within one tenant.
Regarding networks, it is possible to request __'cross tenant'__ networks to ensure network continuity between tenants.

User permissions are to be defined in each tenant. Thus each organization must carefully consider the desired tenants. This point is generally addressed in an initialization workshop, at the time of the organization's creation.

The architecture can be evolved by adding or removing tenants.

A tenant cannot be empty. It must necessarily be initialized with a minimum of resources:

- An availability zone (AZ, a physical datacenter),
- A compute cluster,
- Storage space,
- A network VLAN.


| Order Reference                                             | Unit     | SKU                     |  
|-------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Tenant activation                     | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Availability zone activation          | 1 tenant | csp:(region):iaas:az:v1 |


### Tenant Access Authorization: Authorized IPs

Access to the cloud management console is strictly limited to pre-authorized IP addresses, in compliance with the SecNumCloud qualification requirements. This restriction ensures an enhanced level of security by only allowing access from specified IP ranges, thereby minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

Note: *Removing an authorized IP is done through a support request in the Cloud Temple console.*

### Resource Consumption within a Tenant

It is possible to view the cloud resources consumed within a tenant, thereby offering a detailed view of the usage of various deployed services. This functionality allows users to track their resource consumption in real-time, identify the most utilized services, and optimize their usage according to needs.

In the console menu, click on "Consumption Report" and then select the desired time period. You will be able to view in detail the cloud resource consumption over the defined period, which will allow you to analyze the service usage and optimize your management accordingly:

![](images/shiva_tenant_ressources_01.png)