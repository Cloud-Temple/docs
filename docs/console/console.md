---
title: Vue d'ensemble de la Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

La Console Cloud Temple est l'interface de gestion de votre plateforme cloud. Vous y créez vos environnements, gérez les accès de vos équipes, activez vos produits, commandez des ressources et suivez votre consommation. Tout ce que vous faites dans la Console est aussi accessible par son [API](./api.md), et le [provider Terraform](../terraform/terraform.md) vous permet de piloter votre plateforme *as code*.

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Découvrez les bases et principes essentiels pour comprendre et maîtriser notre infrastructure.</p>
    <a href="./console/concepts" class="card-link">Explorer les concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Guide de démarrage</h3>
    <p>Commencez rapidement avec nos ressources en suivant des instructions claires et simples.</p>
    <a href="./console/onboarding" class="card-link">Ouvrir le guide de démarrage &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutoriels</h3>
    <p>Apprenez étape par étape à configurer et utiliser nos services avec des guides détaillés.</p>
    <a href="./console/tutorials" class="card-link">Découvrir les tutoriels &rarr;</a>
  </div>
  <div class="card">
    <h3>Questions fréquentes</h3>
    <p>Retrouvez les réponses aux questions les plus courantes sur ce produit.</p>
    <a href="./console/faq" class="card-link">Consulter la FAQ &rarr;</a>
  </div>
</div>

## Où se situe la Console

<ConsoleMap />

Deux chemins sont à distinguer :

- **Le pilotage.** Vos équipes se connectent à la Console depuis un navigateur, à l'adresse [shiva.cloud-temple.com](https://shiva.cloud-temple.com). L'accès est limité aux [adresses IP publiques que vous avez autorisées](./onboarding.md#ajouter-une-adresse-ip) et le [double facteur](./onboarding.md#le-double-facteur-est-obligatoire) est obligatoire. Vos scripts et Terraform passent par l'API, authentifiés par une clé d'API (*Personal Access Token*).
- **L'usage.** Les utilisateurs de vos applications atteignent vos machines et vos services par les offres [Réseau](../network/network_overview.md), comme Internet ou Private Network. Ce trafic ne passe pas par la Console : elle sert à piloter votre infrastructure, pas à la desservir.

Vos ressources sont rangées dans des **tenants**, des environnements cloisonnés de votre organisation, et déployées dans des [régions et zones de disponibilité](../additional_content/concepts_regional.md). Les [concepts](./concepts.md) détaillent ce modèle.

## Ce que vous y faites

- **[Mettre en place vos environnements](./console/onboarding)** : Créer votre organisation et vos tenants, puis activer vos produits.
- **[Gérer les accès](./console/iam)** : Utilisateurs, permissions par tenant et fédération d'identité.
- **[Suivre vos coûts](./console/billing/concepts)** : Consommation par produit, par service et par tenant.
- **[Superviser vos ressources](./console/metrics/concepts)** : Métriques au format Prometheus, consultables dans la Console ou dans votre outillage.
- **[Suivre les opérations et les incidents](./console/status)** : Interventions planifiées sur la plateforme et incidents en cours.
- **[Contacter le support](./console/console_quickstart#accès-au-support-technique)** : Conseil, assistance sur votre compte, incident ou service professionnel : toutes vos demandes au support.
- **[Commander des ressources](./console/orders)** : Zones de disponibilité, clusters, stockage et réseaux, avec le suivi des commandes.
- **[Automatiser](./console/api)** : Toutes les fonctions de la Console par l'API, et votre infrastructure as code avec Terraform.

## Par où commencer

- **Vous découvrez Cloud Temple** : suivez le [guide de démarrage](./onboarding.md), de la création de votre organisation à l'activation de vos produits.
- **Vous voulez comprendre le modèle** organisation, tenants et permissions : lisez les [concepts](./concepts.md).
- **Vous cherchez une fonction dans l'interface** : faites la [visite de la Console](./console_quickstart.md).
