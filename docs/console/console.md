---
title: Vue d'ensemble de la Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

La Console Cloud Temple est l'interface de gestion de votre plateforme cloud. Vous y créez vos environnements, gérez les accès de vos équipes, activez vos produits, commandez des ressources et suivez votre consommation. Tout ce que vous faites dans la Console est aussi accessible par son [API](./api.md), et le [provider Terraform](../terraform/terraform.md) vous permet de piloter votre plateforme *as code*.

## Où se situe la Console

<ConsoleMap />

Deux chemins sont à distinguer :

- **Le pilotage.** Vos équipes se connectent à la Console depuis un navigateur, à l'adresse [shiva.cloud-temple.com](https://shiva.cloud-temple.com). L'accès est limité aux [adresses IP publiques que vous avez autorisées](./onboarding.md#ajouter-une-adresse-ip) et le [double facteur](./onboarding.md#le-double-facteur-est-obligatoire) est obligatoire. Vos scripts et Terraform passent par l'API, authentifiés par une clé d'API (*Personal Access Token*).
- **L'usage.** Les utilisateurs de vos applications atteignent vos machines et vos services par les offres [Réseau](../network/network_overview.md), comme Internet ou Private Network. Ce trafic ne passe pas par la Console : elle sert à piloter votre infrastructure, pas à la desservir.

Vos ressources sont rangées dans des **tenants**, des environnements cloisonnés de votre organisation, et déployées dans des [régions et zones de disponibilité](../additional_content/concepts_regional.md). Les [concepts](./concepts.md) détaillent ce modèle.

## Ce que vous y faites

<div class="card-grid">
  <div class="card">
    <h3>Mettre en place vos environnements</h3>
    <p>Créer votre organisation et vos tenants, puis activer vos produits.</p>
    <a href="./console/onboarding" class="card-link">Guide de démarrage &rarr;</a>
  </div>

  <div class="card">
    <h3>Gérer les accès</h3>
    <p>Utilisateurs, permissions par tenant et fédération d'identité.</p>
    <a href="./console/iam" class="card-link">Module IAM &rarr;</a>
  </div>

  <div class="card">
    <h3>Suivre vos coûts</h3>
    <p>Consommation par produit, par service et par tenant.</p>
    <a href="./console/billing/concepts" class="card-link">Gestionnaire des coûts &rarr;</a>
  </div>

  <div class="card">
    <h3>Superviser vos ressources</h3>
    <p>Métriques au format Prometheus, consultables dans la Console ou dans votre outillage.</p>
    <a href="./console/metrics/concepts" class="card-link">Métrologie &rarr;</a>
  </div>

  <div class="card">
    <h3>Suivre les opérations et les incidents</h3>
    <p>Interventions planifiées sur la plateforme et incidents en cours.</p>
    <a href="./console/status" class="card-link">Opérations planifiées &rarr;</a>
  </div>

  <div class="card">
    <h3>Contacter le support</h3>
    <p>Conseil, assistance sur votre compte, incident ou service professionnel : toutes vos demandes au support.</p>
    <a href="./console/console_quickstart#accès-au-support-technique" class="card-link">Support technique &rarr;</a>
  </div>

  <div class="card">
    <h3>Commander des ressources</h3>
    <p>Zones de disponibilité, clusters, stockage et réseaux, avec le suivi des commandes.</p>
    <a href="./console/orders" class="card-link">Déployer des ressources &rarr;</a>
  </div>

  <div class="card">
    <h3>Automatiser</h3>
    <p>Toutes les fonctions de la Console par l'API, et votre infrastructure as code avec Terraform.</p>
    <a href="./console/api" class="card-link">Documentation de l'API &rarr;</a>
  </div>
</div>

## Par où commencer

- **Vous découvrez Cloud Temple** : suivez le [guide de démarrage](./onboarding.md), de la création de votre organisation à l'activation de vos produits.
- **Vous voulez comprendre le modèle** organisation, tenants et permissions : lisez les [concepts](./concepts.md).
- **Vous cherchez une fonction dans l'interface** : faites la [visite de la Console](./console_quickstart.md).
