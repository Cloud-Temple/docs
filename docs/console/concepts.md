---
title: Concepts de la Console
---

## Présentation

La **Console Cloud Temple** est le point d'entrée vers les produits Cloud Temple qu'elle intègre : calcul, stockage, réseau, sécurité, IA et autres. Certains services managés (Kubernetes managé, bases de données managées, AIOps) se souscrivent auprès des équipes Cloud Temple et ne se pilotent pas depuis la Console. Vous y commandez et gérez vos ressources en libre-service, gérez les identités et les accès, suivez vos opérations et ouvrez vos demandes de support.

Elle est conçue *API-first* : l'interface web s'appuie sur l'API publique, que vous pouvez utiliser directement, avec le provider Terraform ou avec le serveur MCP.

Elle s'adresse aux équipes informatiques qui administrent leur plateforme, aux équipes DevOps qui l'automatisent, aux équipes sécurité et conformité qui contrôlent les accès et la traçabilité, et aux équipes de production qui suivent les opérations.

Le modèle sur lequel repose la Console (organisation, tenants, utilisateurs et permissions) est décrit dans la section Architecture ; sa documentation de référence est le module [IAM](./iam/concepts.md).

## Avantages

| Avantage | Description |
|---|---|
| Point d'entrée unique | Les ressources des produits intégrés à la Console dans un même portail, avec un seul jeu d'identifiants. |
| Libre-service | Vous créez, configurez et supprimez vos ressources à tout moment, sans intervention de Cloud Temple. |
| Automatisation | La plateforme se pilote par API ou avec Terraform, avec des configurations versionnables et intégrables à vos chaînes CI/CD. |
| Sécurité et traçabilité | Accès filtrés par adresse IP, double facteur, permissions par tenant et journalisation des actions. |

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| Console web | Tableau de bord, inventaire des ressources, commandes en libre-service, accès aux produits souscrits intégrés à la Console. |
| Gestion des identités et des accès | Organisation, tenants, utilisateurs et permissions : voir le module [IAM](./iam/concepts.md). |
| API REST | API documentée au format OpenAPI 3.0, consultable depuis la Console : voir l'[API de la Console](./api.md). |
| Provider Terraform | Provider `Cloud-Temple/cloudtemple`, publié sur le Terraform Registry : voir le [provider Terraform](../terraform/terraform.md). |
| Serveur MCP | Connexion d'un client d'IA compatible MCP (*Model Context Protocol*) à votre tenant, pour interroger votre environnement. |
| Suivi des opérations | [Opérations planifiées et incidents](./status.md), [journal des activités](#activités). |
| Support | Création et suivi des demandes de support depuis la Console. |

## Architecture

### Organisation et tenants

Toute la plateforme repose sur deux niveaux.

**L'organisation** représente votre entité : société, département ou équipe. Elle porte votre contrat et votre facturation, et rassemble tous les comptes utilisateurs. Elle définit aussi le mécanisme d'authentification commun à ces comptes : local à la Console, ou fédéré à votre propre annuaire.

**Le tenant** est un environnement de travail à l'intérieur de l'organisation. Une organisation en compte au moins un. Les ressources commandées sont affectées à un tenant précis et ne sont pas partagées avec les autres tenants.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Le découpage en tenants vous appartient : par environnement (production, recette), par application ou par criticité. Vous pouvez ajouter des tenants à tout moment, et aucun produit n'y est activé d'office : vous choisissez ceux de chaque tenant. Le détail est dans [Organisations](./iam/concepts.md#organisations) et [Tenant](./iam/concepts.md#tenant).

Les ressources d'un tenant sont déployées dans des [régions et zones de disponibilité](../additional_content/concepts_regional.md).

### Utilisateurs et permissions

Les **identifiants** d'un utilisateur sont globaux à l'organisation. Ses **permissions**, elles, se définissent tenant par tenant : un compte peut être autorisé à commander des ressources dans un tenant, mais pas dans un autre.

Deux rôles sont à distinguer :

- le **propriétaire de l'organisation** gère les comptes, les tenants et les adresses IP autorisées. Il est par défaut propriétaire de tous les tenants de l'organisation ;
- le **propriétaire d'un tenant** reçoit l'ensemble des permissions liées aux produits activés sur ce tenant.

Une même personne peut tenir les deux rôles. Les règles complètes sont dans [Affectation des permissions dans un tenant](./iam/concepts.md#affectation-des-permissions-dans-un-tenant) et la [liste des permissions](./iam/concepts.md#permissions).

### L'interface et l'API

Tout ce que vous faites dans la Console est aussi possible par son [API](./api.md). Elle s'authentifie par une **clé d'API** (*Personal Access Token*), liée à un tenant et à l'utilisateur qui l'a créée. Le [provider Terraform](../terraform/terraform.md), qui pilote votre plateforme *as code*, s'authentifie lui aussi avec des identifiants d'API générés depuis la Console.

### Activités

Chaque opération réalisée depuis la Console ou par l'API génère une **activité** : les écritures (création, modification, suppression) comme les lectures. L'ensemble des activités forme le journal de la Console. Vous le consultez dans le menu **Logs** avec la permission `activity_read`, ou par l'[API](./api.md#les-activités).

Pour une écriture, l'activité sert aussi à suivre l'avancement de l'opération : l'API renvoie son identifiant dès que la requête est acceptée.

#### Récents et Archivés

Le journal présente deux onglets :

- **Récents** : les activités en cours et les plus récentes ;
- **Archivés** : l'historique. Une fois l'opération terminée, réussie ou en échec, l'activité y passe entre 24 et 30 heures après sa création, ou dans les 6 heures qui suivent la fin d'une opération plus longue.

Les activités archivées sont conservées **558 jours** (environ 18 mois) à compter de leur archivage. Ces durées sont fixées par Cloud Temple, identiques pour tous les tenants, et ne sont pas paramétrables.

#### Contenu d'une activité

| Information | Description |
|---|---|
| Identifiant | Identifiant unique (UUID) de l'activité. |
| Tenant | Tenant ou organisation sur lequel porte l'opération. |
| Initiateur | Identifiant de l'utilisateur à l'origine de l'opération. |
| Type d'opération | Lecture (`read`) ou écriture (`write`). |
| Module | Produit concerné, par exemple `ComputeActivity`, `IAMActivity` ou `BackupActivity`. |
| Description et tags | Libellé de l'opération et mots-clés associés. |
| Ressources concernées | Identifiants et types des ressources visées par l'opération. |
| Date de création | Date et heure de la demande. |
| État | En attente, en cours (avec sa progression), terminée (avec son résultat, par exemple l'identifiant de la ressource créée) ou en échec (avec le motif). Les dates de début et de fin sont indiquées. |

Le modèle complet est décrit dans l'[API de la Console](./api.md#les-activités).

Les activités tracent les opérations réalisées sur la Console et son API. Elles ne couvrent pas les événements de l'infrastructure sous-jacente.

## Régions et zones de disponibilité

La Console et l'API sont hébergées en France. Elles pilotent les ressources de vos tenants, déployées dans les régions et zones de disponibilité propres à chaque produit.

## Caractéristiques techniques

### Interface

La Console est disponible en français, anglais, allemand, espagnol et italien.

### API et provider Terraform

- L'API suit le format OpenAPI 3.0 ; sa documentation interactive est accessible depuis la Console. Chaque requête d'écriture génère une [activité](./api.md) qui permet d'en suivre l'état.
- Le provider Terraform est compatible avec Terraform 1.0 et versions ultérieures, ainsi qu'avec OpenTofu.

### Serveur MCP

Le serveur MCP s'appuie sur l'API publique et en reprend les contrôles : authentification par jeton d'accès personnel, permissions, filtrage par adresse IP et journalisation des actions. Un client d'IA n'agit que dans la limite des permissions du jeton utilisé.

### Limites

- Les limites de débit de l'API sont définies par produit ; au-delà, l'API répond par une erreur HTTP 429 : voir l'[API de la Console](./api.md).

## Sécurité et conformité

### Accéder à la Console

L'accès à la Console est protégé à deux niveaux :

- **les adresses IP autorisées** : seules les adresses IP publiques déclarées par votre organisation peuvent joindre la Console. La liste est unique pour toute l'organisation, quel que soit le tenant depuis lequel elle est modifiée ;
- **le double facteur** : il est obligatoire pour tous les comptes de la Console. Si votre organisation est fédérée à votre propre annuaire, voir les [mécanismes d'authentification](./iam/concepts.md#mécanismes-dauthentification).

La procédure est décrite dans [Vous connecter et sécuriser vos accès](./onboarding.md#étape-2-vous-connecter-et-sécuriser-vos-accès).

### Traçabilité

Chaque opération, en lecture comme en écriture, est journalisée sous forme d'[activité](#activités) : identité de l'initiateur, date, type d'opération et état. Les activités archivées sont conservées 558 jours (environ 18 mois), au-delà du minimum de 6 mois associé à la qualification SecNumCloud de la Console.

### Certifications

La Console est certifiée HDS et ISO 27001, et incluse dans les services qualifiés SecNumCloud et conformes C5.

## Réversibilité

La Console et l'API ne stockent pas vos données applicatives : elles conservent les métadonnées de configuration et les journaux.

- **Configurations Terraform** : vos fichiers de configuration et votre fichier d'état (*state*) vous appartiennent.
- **Journaux d'activité** : exportables par l'API de la Console.

## Tarification

La Console, l'API, le serveur MCP et le provider Terraform sont inclus sans surcoût dans toute souscription Cloud Temple. Les ressources que vous commandez sont facturées selon le tarif de chaque produit. Voir la page produit du site Cloud Temple :
[Console – API – Provider Terraform](https://www.cloud-temple.com/produits/console-api-provider-terraform/).
