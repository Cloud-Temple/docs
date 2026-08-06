---
title: Vue organisation
---

import imgSelector from './images/shiva_org_selector.png'
import imgDashboard from './images/shiva_org_dashboard.png'
import imgTenants from './images/shiva_org_tenants.png'
import imgTenantNew from './images/shiva_org_tenant_new.png'
import imgUsers from './images/shiva_org_users.png'
import imgAccess from './images/shiva_org_access.png'
import imgCostsOverview from './images/shiva_org_costs_overview.png'
import imgCostsConsumption from './images/shiva_org_costs_consumption.png'

La **vue organisation** regroupe les fonctions de pilotage de votre entité dans la Console Cloud Temple : gestion des tenants, des utilisateurs et de leurs permissions, contrôle des accès et suivi de la consommation. Une organisation fédère un ou plusieurs **tenants** (environnements cloud cloisonnés) et les permissions des utilisateurs font l'objet d'une **ségrégation par tenant**.

:::info
Cette page décrit l'**interface** : où trouver chaque fonction et ce qu'elle permet. La documentation de **référence** du modèle organisation / tenant et des permissions se trouve dans le module [IAM](iam/concepts.md).
:::

## Bandeau et sélection du tenant de travail

En haut de la Console, le bandeau affiche l'organisation courante (**« Mon organisation »**). Le sélecteur associé ouvre la liste **« Mes tenants »** : chaque tenant y figure, accompagné le cas échéant du badge **SecNumCloud** lorsqu'il est qualifié.

Pour **choisir le tenant de travail**, deux possibilités :

- depuis le bandeau, ouvrez le sélecteur **« Mes tenants »** et cliquez sur le tenant voulu ;
- depuis la page **Tenants**, utilisez l'action **« Se connecter au tenant »** d'une ligne.

Les ressources techniques (calcul, stockage, réseau…) sont **propres à chaque tenant** et ne sont pas partagées entre tenants.

<img src={imgSelector} />

## Tableau de bord

Le **Tableau de bord** est la page d'accueil de l'organisation. Il présente une synthèse transverse :

- l'état des **dossiers de support** (ouverts, réponses requises, validation client, incidents) ;
- le **nombre de tenants** de l'organisation ;
- un **aperçu des coûts** (coût du mois en cours, répartition par tenant et par service).

<img src={imgDashboard} />

## Administration de l'organisation

Le volet **Administration** de la navigation gauche regroupe les pages de gouvernance de l'organisation.

| Page | Rôle |
|---|---|
| **Tenants** | Créer et faire évoluer les tenants |
| **Utilisateurs** | Gérer les comptes et leurs permissions |
| **Accès** | Liste des IP publiques autorisées (whitelist) |
| **Logs** | Journal des activités (traçabilité) |
| **Support** | Tickets de l'organisation |

Le **Gestionnaire des coûts** (hors volet Administration) fournit le suivi de consommation.

## Tenants

La page **Tenants** liste l'ensemble des tenants de l'organisation. Une barre de recherche et la pagination facilitent la navigation lorsque les tenants sont nombreux.

### Créer un tenant

Le bouton **« Nouveau tenant »** ouvre un formulaire en deux parties :

- **Identité du tenant** : le **nom** (contrôlé en direct) et une **description** ;
- **Produits du tenant** : les produits à activer sur le tenant. Les boutons **« Tout sélectionner »** / **« Tout désélectionner »** accélèrent la saisie.

Validez avec **« Créer »** : le tenant est initialisé avec les produits sélectionnés.

### Actions sur un tenant

Le menu d'actions de chaque ligne propose :

- **Se connecter au tenant** — définit ce tenant comme tenant de travail ;
- **Modifier les produits** — active ou désactive des produits sur le tenant, pour faire évoluer son périmètre ;
- **Copier UUID** — copie l'identifiant technique du tenant (utile pour l'API ou un ticket de support).

### Propriétaires et cycle de vie

- **Création** : en self-service via **« Nouveau tenant »**.
- **Évolution** : ajout ou retrait de produits via **« Modifier les produits »**.
- **Propriétaires de tenant** : chaque tenant a au moins un propriétaire. Les règles (nombre recommandé, délai de propagation, retrait sur demande de support, permissions d'un propriétaire) sont détaillées dans le module [IAM](iam/concepts.md).

:::info
Les opérations sur les tenants sont tracées dans la page **Logs** (par exemple « *Creating tenant…* » ou « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

## Utilisateurs et permissions

La page **Utilisateurs** liste les comptes de l'organisation. Les identifiants sont **globaux à l'organisation** ; les permissions, elles, se définissent **par tenant**.

Pour chaque compte sont affichés le **nom**, l'**e-mail**, le **type** de compte — **Compte fédéré** (référentiel d'identité externe) ou **Compte local** — et des repères visuels : **Propriétaire de l'organisation**, **Moi**, ou **Email non vérifié** (compte non finalisé).

### Outils de la page

- **Filtres** : par **Propriétaires de l'organisation**, **Type**, **Source** et **Statut**.
- **Exporter CSV** : export de la liste des utilisateurs et de leurs accès, utile pour l'audit.

### Actions sur un compte

Le menu d'actions propose, selon l'état du compte :

- **Ajouter en tant que propriétaire d'organisation** ;
- **Réinscription** — renvoie l'invitation à un compte non finalisé ;
- **Copier UUID** ;
- **Supprimer**.

:::note
Vous ne pouvez pas vous supprimer vous-même. L'**invitation** d'un nouvel utilisateur et l'**affectation fine des permissions par tenant** sont décrites dans le module [IAM](iam/quickstart.md).
:::

### Propriétaire d'organisation et propriétaire de tenant

Ce sont deux notions distinctes :

- le **propriétaire de l'organisation** s'ajoute depuis la page **Utilisateurs** (action « Ajouter en tant que propriétaire d'organisation ») ; son **retrait s'effectue sur demande de support** ;
- le **propriétaire de tenant** relève du périmètre d'un tenant ; ses règles sont décrites dans le module [IAM](iam/concepts.md).

:::info
En tant que **propriétaire de l'organisation**, vous êtes par défaut **propriétaire de tous les tenants** de l'organisation. À ce titre, vous disposez de l'ensemble des permissions sur chacun de ces tenants. À l'inverse, si ce rôle vous est retiré, vous **ne perdez pas** ces permissions : elles restent acquises sur les tenants concernés.
:::

<img src={imgUsers} />

## Accès — whitelist IP

La page **Accès** gère la **liste des adresses IP publiques autorisées** à joindre la Console. Conformément aux exigences **SecNumCloud**, seul le trafic provenant de ces adresses est accepté.

- Chaque entrée associe une **IP** (notation CIDR) à une **description**.
- Le bouton **« Ajouter une IP »** permet d'ajouter une adresse à la liste.

:::warning
La **suppression** d'une IP autorisée s'effectue sur **demande de support**.
:::

<img src={imgAccess} />

## Rapport de consommation — Gestionnaire des coûts

Le **Gestionnaire des coûts** offre une vue de la consommation de l'organisation, ventilée par tenant. Il propose deux onglets.

### Onglet « Aperçu »

Vue synthétique du mois en cours :

- indicateurs clés : **coût du mois en cours**, **coût de l'année en cours**, **nombre de produits actifs** ;
- **Coût par tenant** — répartition des coûts entre les tenants ;
- **Coût actuel par service** et **Coût actuel par produit** — principaux postes de consommation.

### Onglet « Consommation »

Rapport détaillé et historisé :

- sélection de la **période** (mois de début et de fin) et de l'axe **« Afficher par »** ;
- vues **Consommation mensuelle**, **Total**, **Prévision** et **Tendance** ;
- tableau dépliable par **Mois / Tenant / Service / Produit / Montant**, avec la **tendance** par rapport au mois précédent.

:::info
Le montant du mois en cours est **prévisionnel** : il est estimé à partir des jours déjà consommés.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

## Journalisation et support

- **Logs** — la page **Activités** retrace les opérations de lecture et d'écriture de l'organisation (onglets **Récents** / **Archivés**, filtres, export CSV) à des fins de traçabilité. Voir aussi la section Journalisation du [guide de démarrage de la Console](console_quickstart.md).
- **Support** — la page **Support** centralise les **tickets de l'organisation** (indicateurs, création de ticket, filtres, export). La création et le suivi des demandes sont décrits dans le [guide de démarrage de la Console](console_quickstart.md).
