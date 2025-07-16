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

## Utilisateurs

Les comptes d'accès à la console Shiva sont créés par le compte maitre du commanditaire sur invitation (quelque soit le référentiel d'authentification).
Les informations d'identification sont globales à votre [Organisation](#organisations).

*__Nota :__ [La fédération d'identité se gère au niveau de l'organisation](#organisations#mecanismes-dauthentification)*

### Création d'un compte utilisateur dans votre organisation

La création d'un compte utilisateur dans votre organisation se fait par invitation. Pour inviter un utilisateur dans une [Organisation](#organisations), aller dans le menu __'Administration'__ à gauche de votre écran sur le bandeau vert puis dans le sous menu __'Utilisateurs'__.

Cliquez sur le bouton __'Nouvel Utilisateur'__ depuis la page des utilisateurs.

<img src={shivaOnboard_003} />

Indiquez ensuite l'adresse de messagerie de l'utilisateur

<img src={shivaOnboard_004} />

L'utilisateur va alors recevoir un mail de vérification.

<img src={shivaOnboard_001} />

Une fois la vérification terminée, l'utilisateur pourra se connecter sur la console.

### Affectation des permissions à un utilisateur

La gestion des droits utilisateurs se fait depuis la page utilisateur.

<img src={shivaOnboard_003} />

Par défaut, un utilisateur n'a pas de droit. Il est donc nécessaire que l'administrateur ayant fait l'invitation lui octroie les droits nécessaires à son activité. Il suffit de cliquer sur le menu __'Actions'__ de l'utilisateur et de choisir l'option __'Modifier'__.

Le menu d'activation des droits apparait alors :

<img src={shivaOnboard_005} />

La configuration des permissions est à faire pour chaque [Tenant](#tenants) de l'[Organisation](#organisations).

La liste des permissions et leur définition est accessible [ici](#permissions).

### Réinscription d'un utilisateur

Lorsqu'un utilisateur a été provisionné mais n'a pas validé son inscription dans le délai d'expiration du mail envoyé par la Console, il ne peut plus confirmer son inscription. Il est alors possible de lui renvoyer un lien afin qu'il renouvelle sa première inscription.

La réinscription d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez réinscrire, puis cliquer sur le bouton d'action au bout de la ligne puis __'Réinscription'__.

__Warning__: Assurez vous de bien être à l'origine de la demande de réinscription de votre compte utilisateur. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

<img src={shivaProfil_012} />

### Mettre à jour son profil

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Mettre à jour votre profil'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre profil.

__Warning__: Assurez vous de bien être à l'origine de la demande de mise à jour du profil. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

<img src={shivaProfil_014} />

### Réinitialisation du mot de passe

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Réinitialiser mot de passe'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre mot de passe.

__Warning__: Assurez vous de bien être à l'origine de la demande de réinitialisation de votre mot de passe. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

<img src={shivaProfil_015} />

### Réinitialisation du double facteur d'authentification

Cette action n'est disponible que pour un compte local (non SSO).

Sélectionnez dans votre __'Profil'__, en haut à droite de l'écran puis __'Paramètre utilisateur'__ et sélectionnez l'action __'Réinitialiser MFA'__.

Rendez-vous ensuite dans votre boite mail et cliquez sur le lien généré par la Console. Suivez simplement les étapes pour mettre à jour votre double facteur d'authentification.

__Warning__: Assurez vous de bien être à l'origine de la demande de réinitialiser de votre double facteur d'authentification. Merci de signaler toutes demandes qui ne vient pas de vous via un ticket de support.

<img src={shivaProfil_016} />

### Suppression d'un utilisateur

La suppression d'un utilisateur est à réaliser dans l'onglet __'Utilisateur'__ du volet Administration, en bas à gauche de l'écran.

Sélectionnez l'utilisateur que vous souhaitez supprimer, puis cliquez sur le bouton d'action au bout de la ligne puis __'Supprimer'__.

<img src={shivaProfil_013} />
<img src={shivaProfil_010} />

Note: Vous ne pouvez pas vous supprimer vous même et vous ne pouvez pas supprimer un utilisateur __'Propriétaire'__.

### Se déconnecter

La déconnexion d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, puis __'Déconnecter'__.

<img src={shivaProfil_009} />
<img src={shivaProfil_011} />

Une déconnexion automatique est réalisée lors de l'expiration du jeton (JWT Token) de session.

### Changer la langue d'un utilisateur

Le changement de langue d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, dans les __'Paramètres utilisateur'__.

<img src={shivaProfil_006} />

La configuration est faite pour chaque tenant [Tenant](#tenants).

### Abonnement aux notifications thématiques

La gestion des abonnements permet de recevoir les e-mails relatifs aux thématiques activées qui seront automatiquement envoyés lors de la survenue d'événements correspondants.

Elle est accessible dans le profil utilisateur, dans l'onglet "Mes abonnements" :

<img src={shivaProfil_007} />

 Par exemple, en cas d'incident, des notifications par e-mail spécifiques à cette thématique seront générées.

La liste des thématiques disponibles est susceptible d'évoluer et de s'enrichir progressivement pour s'adapter aux besoins et aux changements dans notre environnement opérationnel.

## Permissions

La console Shiva permet une gestion fine des droits des utilisateurs d'une organisation, avec une ségrégation par tenant.
Initialement, c'est le compte principal du commanditaire qui permet la configuration initiale des comptes et des permissions associées.
Par la suite, le droit __'iam_write'__ permet à un compte d'administrer les permissions des autres utilisateurs.

### Permissions disponibles pour les utilisateurs de votre organisation

Lorsqu’un utilisateur est créé, il ne possède aucune permission par défaut. Chaque permission est attribuée individuellement et fonctionne de manière unitaire, sans chevauchement avec d’autres permissions. Elles s’appliquent en conjonction, ce qui signifie qu’un utilisateur doit disposer de toutes les permissions requises pour effectuer une action spécifique.

Les permissions suivantes sont configurables pour chaque utilisateur et pour chaque tenant de votre organisation :
 • Permissions de type “read” : permettent uniquement la consultation des ressources sans possibilité de modification.
 • Permissions de type “write” : autorisent la modification des configurations.
 • Permissions de type “management“ : autorisent la gestion avancées des ressources.
 • Permissions de type “console_access“ : autorisent les connexions type PMAD sur les ressources.
 • Permissions de type “virtual_machine_power“ : autorisent la gestion de l'alimentation d'une machine virtuelle.

- __Ce sont des permissions, pas des rôles.__ À ce titre, il est nécessaire d'avoir la permission READ et WRITE pour modifier une configuration.

Dernière mise à jour le: 16/07/2025

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
| compute_iaas_opensource_replication_recover   | Offre OpenIaaS -Gestion de la réplication                                                              |
| compute_iaas_vmware_console_access            | Offre Vmware - Ouverture de la console d'une machine virtuelle                                                                 |
| compute_iaas_vmware_infrastructure_read       | Offre Vmware - Consultation de données avancées des ressources VMware (règles affinité/anti-affinité, configuration drs, etc)  |
| compute_iaas_vmware_infrastructure_write      | Offre Vmware - Gestion avancée des ressources VMware                                                                           |
| compute_iaas_vmware_read                      | Offre Vmware - Consultation des ressources de type Machines Virtuelles                                                         |
| compute_iaas_vmware_management                | Offre Vmware - Gestion des ressources de type Machines Virtuelles (permet le chiffrement d'une machine virtuelle)                                                              |
| compute_iaas_vmware_virtual_machine_power     | Offre Vmware - Gestion de l'alimentation d'une machine virtuelle                                                               |
| baremetal_management                          | Offre Bare Metal - Gestion des ressources de type Bare Metal                                                               |
| baremetal_read                                | Offre Bare Metal - Consultation des ressources de type Bare Metal                                                               |
| baremetal_console_access                      | Offre Bare Metal - Ouverture de la console d'un Bare Metal                                                                  |
| console_public_access_read                    | Consultation des IPs autorisées à accéder à la console                                                                         |
| console_public_access_write                   | Ajout d'IPs autorisées à accéder à la console                                                                                  |
| documentation_read                            | Consultation des ressources documentation de confluence                                                                        |
| housing_read                                  | Consultation des ressources de type colocation                                                                                 |
| iam_offline_access                            | Création et suppression d'Access Token Personnels (PAT)                                                                        |
| iam_read                                      | Consultation des droits utilisateurs                                                                                           |
| iam_write                                     | Gestion des droits utilisateurs                                                                                                |
| intervention_read                             | Consultation des changements et mises en production prévues sur la plateforme                                                  |
| inventory_read                                | Consultation des ressources de type Inventaire                                                                                 |
| inventory_write                               | Gestion des ressources de type Inventaire                                                                                      |
| monitoring_read                               | Consultation du monitoring                                                                                                     |
| monitoring_write                              | Gestion du monitoring                                                                                                          |
| metric_read                                   | Consultation des données de santé sur les machines virtuelles et hosts                                                         |
| network_read                                  | Consultation des ressources réseau                                                                                             |
| network_write                                 | Gestion des ressources réseau                                                                                                  |
| order_read                                    | Consultation des commandes infrastructures                                                                                     |
| order_write                                   | Création de commande infrastructure                                                                                            |
| object-storage_iam_management                 | Permet de gérer les compte de stockage sur le produit S3                                                                       |
| object-storage_read                           | Permet de voir les buckets et les configurations des buckets                                                                   |
| object-storage_write                          | Permet d'éditer les buckets et les configurations des buckets                                                                  |
| openshift_management                          | Permet de se connecter sur les plateforms Openshift (scopé au tenant)                                                          |
| support_management                            | consultation de l'ensemble des tickets support du tenant                                                                       |
| support_read                                  | Consultation de ses tickets support du tenant                                                                                  |
| support_write                                 | Création d'un ticket support sur le tenant                                                                                     |
| tag_read                                      | Consultation des tags, excepté les tags RTMS                                                                                   |
| tag_write                                     | Gestion des tags, excepté les tags RTMS                                                                                        |
| ticket_comment_read                           | Consultation des commentaires                                                                                                  |
| ticket_comment_write                          | Gestion des commentaires                                                                                                       |
| ticket_read                                   | Consultation des tickets                                                                                                       |
| ticket_write                                  | Gestion des tickets                                                                                                            |
| incident_management                           | Gestion des incidents                                                                                                       |
| incident_read                                 | Consultation des incidents                                                                                                            |

## Organisations

L'organisation est liée à votre __compte commanditaire__ et au __contrat Cloud Temple associé__. Elle représente votre entité (société, département, équipe, ...) qui porte la relation contractuelle entre Cloud Temple et vous.

### Principe d'une organisation

L'organisation a quatre grands rôles :

- Elle représente __l'entité contractuelle__ pour les aspects de suivi et de facturation,
- Elle définit __la configuration globale du mécanisme d'authentification__ : l'authentification peut être locale au niveau de la console Shiva ou distante via un service de fédération d'identité,
- Elle porte l'ensemble des __comptes utilisateurs__,
- Elle __fédère les tenants__ (Production, Préproduction, Dev, Application 1, Application 2, ...) que vous définissez pour les besoins de votre architecture Cloud.

Les rôles (droits/permissions) des utilisateurs sont configurables pour chaque tenant définit dans votre organisation. Par exemple un compte peut être autorisé à commander des ressources dans un tenant, mais pas dans un autre.

### Mécanismes d'authentification

La console Shiva permet au niveau de l'organisation __le paramétrage du mécanisme d'authentification__. Vous pouvez
utiliser le référentiel local d'authentification de la console Shiva ou bien accoster votre organisation à l'un
de vos référentiels d'authentification.

Les référentiels externes suivants sont supportés :

- Référentiels compatibles __OpenID Connect__,
- Référentiels compatibles __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Tenant

Le tenant est un __regroupement de ressources au sein d'une organisation__. Une [Organisation](#organisations) a au minimum un tenant (appelé __tenant par défaut__, pouvant être renommé). Généralement, plusieurs tenants sont utilisés pour segmenter les responsabilités ou les périmètres techniques.

Par exemple :

- Un tenant __Production__
- Un tenant __Préproduction__
- Un tenant __Recette__
- Un tenant __Qualification__

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
- L'interface de gestion (IHM) émet un avertissement lorsqu'il y a plus de 3 propriétaires, afin d'inciter à limiter le nombre de propriétaires pour des raisons de sécurité et de gestion optimale des accès.

#### 2. Ajout d'un nouveau propriétaire

* Lors de l'ajout d'un nouveau propriétaire, la mise à jour de ses permissions peut nécessiter un délai allant jusqu'à 60 minutes.
- Ce temps de propagation est normal et permet de s'assurer que les droits d'accès sont correctement appliqués à l'ensemble des services et ressources associés.

#### 2. Permissions d'un propriétaire

* Un propriétaire se verra attribuer l'ensemble des permissions liées aux produits activés sur son tenant.
- Il n'est pas possible de modifier les permissions d'un propriétaire.

#### 3. Retrait d'un propriétaire

* Pour retirer un propriétaire du tenant, l'utilisateur doit soumettre une demande au support.
- Cette procédure permet de garantir que les modifications des droits d'accès sont effectuées de manière sécurisée et conforme aux bonnes pratiques de gestion des accès.

### Autorisation d'accès à un tenant : IP autorisées

L'accès à la console de gestion cloud est strictement limité aux adresses IP préalablement autorisées, en conformité avec les exigences de la qualification SecNumCloud. Cette restriction garantit un niveau de sécurité renforcé en ne permettant l'accès qu'aux utilisateurs provenant de plages d'IP spécifiées, minimisant ainsi les risques d'accès non autorisés et protégeant l'infrastructure cloud selon les standards de sécurité les plus élevés.

Note : *La suppression d'un IP autorisée se fait par une demande de support dans la console Cloud Temple.*

### Consommation de ressource au sein d'un tenant

Il est possible de visualiser les ressources cloud consommées au sein d'un tenant, offrant ainsi une vue détaillée de l'utilisation des différents services déployés. Cette fonctionnalité permet aux utilisateurs de suivre en temps réel la consommation de leurs ressources, d'identifier les services les plus sollicités et d'optimiser leur utilisation en fonction des besoins.

Dans le menu de la console, cliquez sur "Rapport de consommation" puis sélectionnez la période de temps souhaitée. Vous pourrez ainsi visualiser en détail la consommation des ressources cloud sur la période définie, ce qui vous permettra d’analyser l’utilisation des services et d’optimiser votre gestion en conséquence :

<img src={shivaTenantRessources_01} />
