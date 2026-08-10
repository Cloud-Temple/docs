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
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

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

## Vue organisation

:::info
La **vue organisation** est réservée aux **propriétaires de l'organisation**.
:::

La **vue organisation** regroupe les fonctions de pilotage de votre entité dans la Console Cloud Temple : gestion des tenants, des utilisateurs et de leurs permissions, contrôle des accès et suivi de la consommation. Une organisation fédère un ou plusieurs **tenants** (environnements cloud cloisonnés) et les permissions des utilisateurs font l'objet d'une **ségrégation par tenant**.

:::info
Cette section décrit l'**interface** : où trouver chaque fonction et ce qu'elle permet. La documentation de **référence** du modèle organisation / tenant et des permissions se trouve dans le module [IAM](iam/concepts.md).
:::

### Bandeau et sélection du tenant de travail

En haut de la Console, le bandeau affiche l'organisation courante (**« Mon organisation »**). Le sélecteur associé ouvre la liste **« Mes tenants »** : chaque tenant y figure, accompagné le cas échéant du badge **SecNumCloud** lorsqu'il est qualifié.

Pour **choisir le tenant de travail**, deux possibilités :

- depuis le bandeau, ouvrez le sélecteur **« Mes tenants »** et cliquez sur le tenant voulu ;
- depuis la page **Tenants**, utilisez l'action **« Se connecter au tenant »** d'une ligne.

Les ressources techniques (calcul, stockage, réseau…) sont **propres à chaque tenant** et ne sont pas partagées entre tenants.

<img src={imgSelector} />

### Tableau de bord

Le **Tableau de bord** est la page d'accueil de l'organisation. Il présente une synthèse transverse :

- l'état des **dossiers de support** (ouverts, réponses requises, validation client, incidents) ;
- le **nombre de tenants** de l'organisation ;
- un **aperçu des coûts** (coût du mois en cours, répartition par tenant et par service).

<img src={imgDashboard} />

### Administration de l'organisation

Le volet **Administration** de la navigation gauche regroupe les pages de gouvernance de l'organisation.

| Page | Rôle |
|---|---|
| **Tenants** | Créer et faire évoluer les tenants |
| **Utilisateurs** | Gérer les comptes et leurs permissions |
| **Accès** | Liste des IP publiques autorisées (whitelist) |
| **Logs** | Journal des activités (traçabilité) |
| **Support** | Tickets de l'organisation |

Le **Gestionnaire des coûts** (hors volet Administration) fournit le suivi de consommation.

### Tenants

La page **Tenants** liste l'ensemble des tenants de l'organisation. Une barre de recherche et la pagination facilitent la navigation lorsque les tenants sont nombreux.

#### Créer un tenant

Le bouton **« Nouveau tenant »** ouvre un formulaire en deux parties :

- **Identité du tenant** : le **nom** (contrôlé en direct) et une **description** ;
- **Produits du tenant** : les produits à activer sur le tenant. Les boutons **« Tout sélectionner »** / **« Tout désélectionner »** accélèrent la saisie.

Validez avec **« Créer »** : le tenant est initialisé avec les produits sélectionnés.

#### Actions sur un tenant

Le menu d'actions de chaque ligne propose :

- **Se connecter au tenant** — définit ce tenant comme tenant de travail ;
- **Modifier les produits** — active ou désactive des produits sur le tenant, pour faire évoluer son périmètre ;
- **Copier UUID** — copie l'identifiant technique du tenant (utile pour l'API ou un ticket de support).

#### Propriétaires et cycle de vie

- **Création** : en self-service via **« Nouveau tenant »**.
- **Évolution** : ajout ou retrait de produits via **« Modifier les produits »**.
- **Propriétaires de tenant** : chaque tenant a au moins un propriétaire. Les règles (nombre recommandé, délai de propagation, retrait sur demande de support, permissions d'un propriétaire) sont détaillées dans le module [IAM](iam/concepts.md).

:::info
Les opérations sur les tenants sont tracées dans la page **Logs** (par exemple « *Creating tenant…* » ou « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Utilisateurs et permissions

La page **Utilisateurs** liste les comptes de l'organisation. Les identifiants sont **globaux à l'organisation** ; les permissions, elles, se définissent **par tenant**.

Pour chaque compte sont affichés le **nom**, l'**e-mail**, le **type** de compte — **Compte fédéré** (référentiel d'identité externe) ou **Compte local** — et des repères visuels : **Propriétaire de l'organisation**, **Moi**, ou **Email non vérifié** (compte non finalisé).

#### Outils de la page

- **Filtres** : par **Propriétaires de l'organisation**, **Type**, **Source** et **Statut**.
- **Exporter CSV** : export de la liste des utilisateurs et de leurs accès, utile pour l'audit.

#### Actions sur un compte

Le menu d'actions propose, selon l'état du compte :

- **Ajouter en tant que propriétaire d'organisation** ;
- **Réinscription** — renvoie l'invitation à un compte non finalisé ;
- **Copier UUID** ;
- **Supprimer**.

:::note
Vous ne pouvez pas vous supprimer vous-même. L'**invitation** d'un nouvel utilisateur et l'**affectation fine des permissions par tenant** sont décrites dans le module [IAM](iam/quickstart.md).
:::

#### Propriétaire d'organisation et propriétaire de tenant

Ce sont deux notions distinctes :

- le **propriétaire de l'organisation** s'ajoute depuis la page **Utilisateurs** (action « Ajouter en tant que propriétaire d'organisation ») ; son **retrait s'effectue sur demande de support** ;
- le **propriétaire de tenant** relève du périmètre d'un tenant ; ses règles sont décrites dans le module [IAM](iam/concepts.md).

:::info
En tant que **propriétaire de l'organisation**, vous êtes par défaut **propriétaire de tous les tenants** de l'organisation. À ce titre, vous disposez de l'ensemble des permissions sur chacun de ces tenants. À l'inverse, si ce rôle vous est retiré, vous **ne perdez pas** ces permissions : elles restent acquises sur les tenants concernés.
:::

<img src={imgUsers} />

### Accès — whitelist IP

La page **Accès** gère la **liste des adresses IP publiques autorisées** à joindre la Console. Conformément aux exigences **SecNumCloud**, seul le trafic provenant de ces adresses est accepté.

- Chaque entrée associe une **IP** (notation CIDR) à une **description**.
- Le bouton **« Ajouter une IP »** permet d'ajouter une adresse à la liste.

:::warning
La **suppression** d'une IP autorisée s'effectue sur **demande de support**.
:::

<img src={imgAccess} />

### Rapport de consommation — Gestionnaire des coûts

Le **Gestionnaire des coûts** offre une vue de la consommation de l'organisation, ventilée par tenant. Il propose deux onglets.

#### Onglet « Aperçu »

Vue synthétique du mois en cours :

- indicateurs clés : **coût du mois en cours**, **coût de l'année en cours**, **nombre de produits actifs** ;
- **Coût par tenant** — répartition des coûts entre les tenants ;
- **Coût actuel par service** et **Coût actuel par produit** — principaux postes de consommation.

#### Onglet « Consommation »

Rapport détaillé et historisé :

- sélection de la **période** (mois de début et de fin) et de l'axe **« Afficher par »** ;
- vues **Consommation mensuelle**, **Total**, **Prévision** et **Tendance** ;
- tableau dépliable par **Mois / Tenant / Service / Produit / Montant**, avec la **tendance** par rapport au mois précédent.

:::info
Le montant du mois en cours est **prévisionnel** : il est estimé à partir des jours déjà consommés.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Journalisation et support

- **Logs** — la page **Activités** retrace les opérations de lecture et d'écriture de l'organisation (onglets **Récents** / **Archivés**, filtres, export CSV) à des fins de traçabilité. Voir aussi la section [Journalisation — Suivi des Activités](#journalisation---suivi-des-activités) ci-dessous.
- **Support** — la page **Support** centralise les **tickets de l'organisation** (indicateurs, création de ticket, filtres, export). La création et le suivi des demandes sont décrits dans la section [Accès au support technique](#accès-au-support-technique) ci-dessous.

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

## Journalisation - Suivi des Activités

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
