---
title: Concepts de la Console
---

Cette page présente le modèle sur lequel repose la Console : l'organisation, les tenants, les utilisateurs et leurs permissions, et les deux façons d'y accéder. La documentation de référence de ce modèle est le module [IAM](./iam/concepts.md).

## Organisation et tenants

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

## Utilisateurs et permissions

Les **identifiants** d'un utilisateur sont globaux à l'organisation. Ses **permissions**, elles, se définissent tenant par tenant : un compte peut être autorisé à commander des ressources dans un tenant, mais pas dans un autre.

Deux rôles sont à distinguer :

- le **propriétaire de l'organisation** gère les comptes, les tenants et les adresses IP autorisées. Il est par défaut propriétaire de tous les tenants de l'organisation ;
- le **propriétaire d'un tenant** reçoit l'ensemble des permissions liées aux produits activés sur ce tenant.

Une même personne peut tenir les deux rôles. Les règles complètes sont dans [Affectation des permissions dans un tenant](./iam/concepts.md#affectation-des-permissions-dans-un-tenant) et la [liste des permissions](./iam/concepts.md#permissions).

## Accéder à la Console

L'accès à la Console est protégé à deux niveaux :

- **les adresses IP autorisées** : seules les adresses IP publiques déclarées par votre organisation peuvent joindre la Console. La liste est unique pour toute l'organisation, quel que soit le tenant depuis lequel elle est modifiée ;
- **le double facteur** : il est obligatoire pour tous les comptes de la Console. Si votre organisation est fédérée à votre propre annuaire, voir les [mécanismes d'authentification](./iam/concepts.md#mécanismes-dauthentification).

La procédure est décrite dans [Vous connecter et sécuriser vos accès](./onboarding.md#étape-2-vous-connecter-et-sécuriser-vos-accès).

## L'interface et l'API

Tout ce que vous faites dans la Console est aussi possible par son [API](./api.md). Elle s'authentifie par une **clé d'API** (*Personal Access Token*), liée à un tenant et à l'utilisateur qui l'a créée. Le [provider Terraform](../terraform/terraform.md), qui pilote votre plateforme *as code*, s'authentifie lui aussi avec des identifiants d'API générés depuis la Console.
