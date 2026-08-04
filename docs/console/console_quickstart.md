---
title: Quickstart
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaIpAccessManagement_01 from '@site/docs/console/iam/images/shiva_ip_access_management_01.png'
import shivaOrdersList from '@site/docs/console/images/shiva_orders_list.png'
import shivaOrdersIaasCpoolEsx from '@site/docs/console/images/shiva_orders_iaas_cpool_esx.png'

## Prérequis

- Avoir souscrit à un produit Cloud Temple. Pour souscrire simplement, vous pouvez [nous contacter](https://www.cloud-temple.com/contactez-nous/) ou par mail à l'adresse __contact@cloud-temple.com__.
- Avoir un accès à la Console
- Avoir son IPv4 publique déclarée dans la zone de confiance Cloud Temple (l'accès à la Console est limité aux adresses de confiances identifiées)

## Connexion à votre tenant Cloud Temple

Console est accessible via l'URL ci-dessous: [Console](https://shiva.cloud-temple.com) ou bien depuis l'URL directe qui vous a été communiquée par mail.

La première page vous permet de sélectionner [l'organisation](iam/concepts.md#organisations) dans laquelle votre utilisateur a été créé.
Une fois l'entreprise renseignée, veuillez cliquer sur __'Se connecter'__.

<img src={shivaLogin} />

Vous allez ensuite être redirigé vers une page vous demandant de vous authentifier.
Une fois connecté, vous arrivez sur cette page.

Vous y trouverez l'ensemble des métriques concernant les produits souscrits sur votre périmètre. En cas de problème(s) sur vos produits VMware et/ou OpenIaaS, des alertes seront visibles, la couleur est liée à leur importance.

<img src={shivaHome} />

## Gestion de la langue

La console est disponible en __francais__, __anglais__. Vous pouvez changer la langue de fonctionnement grâce à l'icône __langue__ situé en haut à droite de l'écran.

Le changement de langue d'un utilisateur est à réaliser dans son __'Profil'__, en haut à droite de l'écran, dans les __'Paramètres utilisateur'__.

<img src={shivaProfil_006} />

La configuration est faite pour chaque tenant [Tenant](iam/concepts.md#tenant).

## Accès au support technique

À tout moment, vous pouvez contacter __l'équipe de support Cloud Temple__ via __l'icône 'bouée'__ situé en haut à droite de l'écran.

<img src={shivaSupport} />

Vous serez guidé pendant tout le processus de demande de support.

La première étape est l'identification du type de demande de support :

- Demander un conseil sur l'utilisation d'un produit (hors incident),
- Demander une assistance en lien avec votre compte client,
- Déclarer un incident ou demander un support technique.
- Demander l'assistance d'un service professionnel (mise à disposition d'un ingénieur Cloud Temple sur une problématique).

<img src={shivaSupport_01} />

Vous avez ensuite la possibilité de donner des précisions et d'inclure des fichiers (image ou journaux par exemple).

Le commanditaire peut également préciser un niveau de criticité (P1 à P5) dans la description du ticket, dans le cas d'un incident de sécurité, tel que:

<img src={shivaSupportCriticities} />

__CRITIQUE (P1)__:

- Suspicion de fuite de données sensibles
- Détection d'un accès non autorisé à vos données
- Compromission de vos identifiants d'administration
- Indisponibilité totale de vos services critiques
- Comportements anormaux sur des données sensibles
- Violation de données à caractère personnel

__HAUTE (P2)h__:

- Dysfonctionnement des accès utilisateurs
- Anomalie dans le chiffrement de vos données
- Perte d'accès à certaines fonctionnalités critiques
- Incohérence dans les données
- Lenteurs majeures impactant l'activité

__MOYENNE (P3)__:

- Problème de performance localisé
- Incident sur une fonction non critique
- Erreur de configuration avec impact limité
- Difficulté d'accès ponctuelle

__BASSE (P4)__:

- Demande d'investigation
- Anomalie sans impact direct
- Question de conformité
- Besoin de clarification technique

__SERVICE OPÉRATIONNEL (P5)__:

- Service opérationnel sans risque immédiat

<img src={shivaSupport_02} />

Une fois votre demande effectuée, il est possible de retrouver vos demandes via __l'icône 'bouée'__ situé en haut à droite de l'écran :

<img src={shivaSupport_03} />

## Accès aux fonctionnalités utilisateur via l'interface web

L'ensemble des fonctionnalités accessibles à votre utilisateur (en fonction de ses droits) est situé à gauche de l'écran, dans le bandeau vert.
Les fonctionnalités sont regroupés par module. Cela regroupe principalement :

- L'__inventaire__ de vos ressources,
- Le __suivi des opérations__,
- Le __pilotage des ressources IaaS__ (Calcul, stockage, réseau, ...)
- Le __pilotage des ressources OpenIaaS__ (Calcul, stockage, réseau, ...)
- L'accès aux __services annexes__ (Bastion, monitoring, ...)
- L'__administration de votre organisation__ (Gestion des tenants, des droits, ...)

L'activation d'un module pour un utilisateur dépend des droits de l'utilisateur. Par exemple le module __'Commande'__ ne sera pas disponible si l'utilisateur ne dispose pas du droit __'ORDER'__.

Voici une présentation des différents modules disponibles. De nouveaux modules viennent enrichir la console régulièrement :
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Tableau de Bord__ : permet d'avoir rapidement une vue sur le __total des ressources de calcul et de stockage__, les statistiques de la __sauvegarde__ et une __synthèse des dossiers de support__,
- __Inventaire__ : permet d'avoir une vue de l'ensemble de vos ressources de type __'machines virtuelles'__. Si les __tags__ sont utilisés, il permet d'avoir une vue par __tag__ (par exemple, vue métier, vue applicatif, ...),
- __Infogérance__ : donne accès au suivi de vos __demandes de support__ et à la __métrologie des services__,
- __IaaS__ : permet le __pilotage des infrastructures IaaS VMware__ (Machines virtuelles, clusters, hyperviseurs, réplications, sauvegarde, ...),
- __OpenIaaS__ : permet le __pilotage des ressources Xen Orchestra__ (Machines virtuelles, sauvegarde, ...),
- __OpenShift__ : permet le pilotage de votre **architecture PaaS RedHat OpenShift** et le management de vos containers sur les 3 zones de disponibilité de la plateforme.
- __Bastion__ : Permet de déployer et de piloter des appliances bastion SSH/RDP dans vos réseaux,
- __Réseau__ : permet le pilotage des __réseaux de niveau 2 et 3__, des __IP publiques__ et de vos __circuits télécoms__,
- __Colocation__ : Offre la vue sur les équipements situés en zone de __collocation mutualisée ou dédiée__,
- __Commande__ : Permet la commande de ressources et le suivi des déploiements,
- __Administration__ : Regroupe les fonctions d'administration des utilisateurs et des tenants ainsi que l'accès à la journalisation globale.
</div>
</div>
Les pictogrammes __'NEW'__ signifient que le produit en question a été provisionné mais n'est pas encore qualifié __offre SecNumCloud__ et __'BETA'__ signifient que le produit en question a été provisionné et vient d'être qualifié __offre SecNumCloud__.

## Administration : votre organisation et vos tenants

Le module __Administration__ (en bas du bandeau vert, à gauche) regroupe le pilotage de votre __organisation__ et de vos __tenants__ : sélection du périmètre de travail, gestion des utilisateurs et de leurs droits, restriction des accès par IP et journalisation.

- L'__organisation__ est votre entité contractuelle : elle porte les comptes utilisateurs, le mécanisme d'authentification (référentiel local ou fédération d'identité) et fédère l'ensemble de vos tenants.
- Un __tenant__ est un regroupement de ressources cloisonné au sein de l'organisation (Production, Préproduction, par application, par criticité…). Les ressources d'un tenant ne sont pas partagées avec les autres.

Les droits des utilisateurs se définissent __tenant par tenant__ : un même compte peut, par exemple, commander des ressources sur un tenant et seulement les consulter sur un autre.

:::info
Cette page décrit le parcours dans la Console. Pour la référence détaillée — définitions, cycle de vie, fédération d'identité et liste exhaustive des permissions — reportez-vous au module IAM : [Concepts](iam/concepts.md) et [Guide de démarrage IAM](iam/quickstart.md).
:::

### Le module Administration en un coup d'œil

Le module __Administration__ regroupe quatre menus :

- __Support__ : consultez et suivez vos dossiers de support pour le tenant (permissions `support_read`, `support_write`, `support_management`). La création d'un dossier est décrite dans la section « Accès au support technique » ci-dessus.
- __Utilisateurs__ : invitez les comptes de votre organisation et attribuez leurs permissions tenant par tenant (permissions `iam_read`, `iam_write`). Détaillé ci-dessous.
- __Logs__ : journal des opérations de lecture et d'écriture réalisées dans la Console, à des fins de traçabilité (permission `activity_read`). Détaillé dans « Journalisation » ci-dessous.
- __Accès__ : gérez la liste blanche des adresses IP publiques autorisées à accéder à la Console (permissions `console_public_access_read`, `console_public_access_write`). Détaillé ci-dessous.

### Sélectionner le tenant de travail

Le sélecteur de tenant est situé en haut à gauche de la Console. Il permet de basculer d'un périmètre à l'autre ; les tenants qualifiés affichent le badge __SecNumCloud__.

<img src={shivaTenant} />

La création d'un tenant se fait par une demande de service (voir [Création d'un tenant](iam/quickstart.md#tenant)). Un tenant ne peut pas être vide : il est initialisé avec au minimum une zone de disponibilité, un cluster de calcul, un espace de stockage et un VLAN réseau.

### Gérer les utilisateurs et leurs permissions

Depuis __Administration > Utilisateurs__, vous invitez un utilisateur par e-mail, puis vous lui attribuez ses permissions __pour chaque tenant__. Par défaut, un compte ne possède aucun droit ; l'attribution nécessite la permission `iam_write`.

<img src={shivaOnboard_005} />

Les permissions sont __unitaires__ (elles ne se chevauchent pas) et __cumulatives__ : une action peut exiger plusieurs permissions (par exemple `..._read` __et__ `..._write`). La procédure complète et la [liste exhaustive des permissions](iam/concepts.md#permissions) sont documentées dans le module IAM.

### Restreindre les accès : IP autorisées (Whitelist IP)

Conformément à la qualification SecNumCloud, l'accès à la Console est limité aux adresses IP publiques préalablement déclarées. Depuis __Administration > Accès__, vous consultez et ajoutez les IP et subnets autorisés.

<img src={shivaIpAccessManagement_01} />

- Consultation de la liste : permission `console_public_access_read`.
- Ajout d'une adresse : permission `console_public_access_write`.
- La __suppression__ d'une IP autorisée se fait par une demande de support.

### La page Support

Depuis __Administration > Support__, vous consultez et suivez vos __dossiers de support__ rattachés au tenant : demandes de conseil, assistance liée au compte, incidents et demandes de service professionnel. Les permissions associées sont `support_read` (consulter ses propres dossiers), `support_write` (créer un dossier) et `support_management` (consulter l'ensemble des dossiers du tenant). La création pas à pas d'un dossier est décrite dans la section « Accès au support technique » plus haut.

### Créer et mettre à jour les produits d'un tenant

Les produits et ressources d'un tenant (calcul, stockage, réseau, bastion, colocation…) se pilotent depuis le module __Commande__ (permission `order_read` pour le suivi, `order_write` pour la création). Toute ressource commandée est __affectée à un tenant précis__ et n'est pas partagée avec les autres.

<img src={shivaOrdersList} />

__Créer un produit ou une ressource__ : depuis le module __Commande__, sélectionnez le tenant cible puis le produit à activer (zone de disponibilité, cluster de calcul, cluster de stockage, réseau…). La commande est validée puis déployée ; son avancement est visible dans la liste des commandes et sur le tableau de bord du tenant.

__Mettre à jour ou faire évoluer__ : l'ajout de capacité à un produit existant passe également par une commande — par exemple ajouter un hyperviseur ou de la mémoire à un cluster de calcul, un datastore à un cluster de stockage, ou un nouveau réseau.

<img src={shivaOrdersIaasCpoolEsx} />

Rappels de cycle de vie :

- __Initialisation__ : un tenant ne peut pas être vide ; il démarre avec au minimum une zone de disponibilité, un cluster de calcul, un espace de stockage et un VLAN réseau.
- __Évolution__ : vous ajoutez ou retirez des ressources en passant de nouvelles commandes, et vous pouvez faire évoluer l'architecture en ajoutant ou supprimant des tenants.
- __Réseaux inter-tenants__ : pour assurer la continuité réseau entre tenants, des réseaux « cross tenant » peuvent être demandés.
- __Droits__ : un propriétaire du tenant dispose automatiquement de toutes les permissions des produits activés sur ce tenant (voir ci-dessous).

Le détail de chaque type de commande (zone de disponibilité, clusters, stockage, réseaux, ajout d'hyperviseurs ou de mémoire…) est documenté dans [Commandes](orders.md) ; la définition et les références d'activation d'un tenant figurent dans [Tenant](iam/concepts.md#tenant).

### Propriétaires et cycle de vie d'un tenant

Chaque tenant possède au moins un __propriétaire__, qui dispose automatiquement de toutes les permissions des produits activés sur ce tenant. Ces permissions ne sont pas modifiables, et l'interface signale au-delà de 3 propriétaires afin d'inciter au moindre privilège. Le retrait d'un propriétaire passe par une demande de support (voir [Gestion des propriétaires](iam/concepts.md#gestion-des-propriétaires-sur-un-tenant)).

Vous pouvez suivre l'utilisation d'un tenant via le __Rapport de consommation__ (voir [Consommation de ressource au sein d'un tenant](iam/concepts.md#consommation-de-ressource-au-sein-dun-tenant)).

La journalisation des activités, qui fait également partie du module __Administration__, est détaillée ci-dessous.

__Journalisation - Suivi des Activités__
=====================================

La page des activités est destinée à fournir une visibilité complète sur toutes les opérations de lecture et d'écriture réalisées au sein de la console, assurant ainsi une traçabilité et une sécurité accrues. Elle met en évidence les deux onglets principaux : Récents et Archivés.

<img src={shivaLogs} />

### __Structure de la Page__

#### __Onglets__

- __Récents__

- Opérations récentes
- Suivi en temps réel

- __Archivés__

- Opérations sur une période plus longue
- Opérations archivées pour traçabilité et conformité

#### __Informations Affichées__

- Date et Heure

- Type d'opération
  - L'état
- Utilisateur
- Description de l'opération

#### __Fonctionnalité__

- Recherche/Filtrage pour opérations spécifiques

### __Utilisation__

- __Accès :__ permission `activity_read`
- __Navigation :__
  - Sélectionnez l'onglet "Récents" pour les opérations en temps réel.
  - Choisissez "Archivés" pour consulter l'historique.
  - Utilisez les fonctionnalités de recherche et de filtrage pour localiser des opérations spécifiques.

#### __Note de Conformité__

Conformément à la qualification SecNumCloud, le stockage des événements de la console Cloud Temple est d'une durée minimale de __6 mois__, garantissant ainsi le respect des exigences de sécurité et de traçabilité.

## Consultation des dernières mises à jour

Cliquez en bas à gauche du bandeau vert sur l'icône __'Nouveautés'__. Vous aurez le détail des modifications pour chaque version de la console Cloud Temple.

<img src={shivaOnboard_009} />

## Accès aux fonctionnalités utilisateur via l'API

L'accès à l'ensemble des fonctionnalités de la Console est possible via l'API Console. Vous pouvez avoir le détail des verbes et des configurations via __'Profil'__ et __'APIs'__ :

<img src={shivaOnboard_008} />

## Provider Terraform

Cloud Temple met à votre disposition un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) pour piloter *"as code"* votre plateforme Cloud.
