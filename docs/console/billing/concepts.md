---
title: Gestionnaire des coûts
---

import billingDashboardPreview from './images/billing_dashboard_preview.png'
import billingDashboardConsumptionTotal from './images/billing_dashboard_consumption_total.png'
import billingDashboardConsumptionPerProduct from './images/billing_dashboard_consumption_per_product.png'
import billingDashboardConsumptionPerService from './images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from './images/billing_consumption_details.png'
import billingPricesList from './images/billing_prices_list.png'

## Présentation

Le **Gestionnaire des coûts** est le module de la Console Cloud Temple dédié à la **visibilité de votre consommation**. Il vous permet de suivre en temps réel l'utilisation de vos ressources cloud au sein d'un tenant et d'avoir une vision claire de vos dépenses.

Ce module répond à un besoin fondamental : **comprendre ce que vous consommez, quand vous le consommez, et à quel coût**, sans avoir à naviguer dans des tableaux complexes ou des factures détaillées.

:::info
Le Gestionnaire des coûts présente la **consommation effective** de vos ressources sur le tenant sélectionné. Les données sont actualisées régulièrement pour refléter votre utilisation en cours.
:::

## Tableau de bord principal

La page d'accueil du Gestionnaire des coûts présente une synthèse visuelle de votre consommation. Dès l'ouverture, vous disposez d'une vue d'ensemble permettant d'identifier rapidement les tendances de consommation et les postes les plus importants.

<img src={billingDashboardPreview} />

Le tableau de bord est organisé autour de plusieurs axes complémentaires, accessibles via les onglets disponibles en haut de la page.

## Consommation totale

L'onglet **Consommation totale** offre une vue agrégée de l'ensemble de votre consommation sur la période sélectionnée. Ce graphique vous permet d'observer l'évolution de vos dépenses dans le temps et d'identifier d'éventuels pics ou tendances.

<img src={billingDashboardConsumptionTotal} />

Vous pouvez ajuster la **période d'affichage** pour affiner votre analyse : jour, semaine, mois ou plage personnalisée. La courbe de consommation totale est directement lisible et ne nécessite pas d'expertise technique particulière.

## Consommation par produit

L'onglet **Consommation par produit** décompose votre consommation selon les grandes familles de services Cloud Temple auxquels vous avez souscrit : compute, stockage, réseau, etc.

<img src={billingDashboardConsumptionPerProduct} />

Cette vue est particulièrement utile pour **identifier les postes de dépenses les plus significatifs** et orienter les décisions d'optimisation. Chaque produit est représenté avec sa part relative dans la consommation globale, ce qui facilite la lecture et la comparaison.

## Consommation par service

L'onglet **Consommation par service** offre un niveau de détail supplémentaire en ventilant la consommation par **service spécifique** au sein de chaque produit.

<img src={billingDashboardConsumptionPerService} />

Ce niveau de granularité vous permet d'aller plus loin dans l'analyse : vous pouvez par exemple distinguer la consommation de vos machines virtuelles, de votre stockage bloc, de vos snapshots ou de votre bande passante réseau, et ainsi identifier précisément les ressources générant le plus de coûts.

## Détail de la consommation

La vue **Détail de la consommation** présente un tableau exhaustif listant l'ensemble des ressources consommées sur la période. Chaque ligne correspond à une ressource identifiable (machine virtuelle, volume de stockage, adresse IP publique, etc.) avec son niveau de consommation associé.

<img src={billingConsumptionDetails} />

Ce détail est précieux pour les équipes souhaitant effectuer une **répartition analytique** de leurs coûts ou pour identifier des ressources potentiellement inutilisées qui pourraient être désactivées afin d'optimiser les dépenses.

## Grille tarifaire

L'onglet **Grille tarifaire** (ou **Liste des prix**) référence l'ensemble des tarifs unitaires applicables aux ressources disponibles dans votre tenant. Il s'agit du catalogue de prix en vigueur vous permettant d'anticiper le coût de nouvelles ressources avant leur déploiement.

<img src={billingPricesList} />

Chaque entrée de la grille indique :

- Le **type de ressource** concernée
- L'**unité de facturation** (par heure, par Go, par unité, etc.)
- Le **prix unitaire** applicable

:::tip
La grille tarifaire est votre référence pour **simuler le coût** d'une infrastructure avant de la commander. Combinez ces informations avec les données de consommation pour identifier les leviers d'optimisation.
:::

## Bonnes pratiques

Pour tirer le meilleur parti du Gestionnaire des coûts, voici quelques recommandations :

- **Consultez régulièrement** votre consommation pour détecter rapidement toute dérive budgétaire.
- **Comparez les périodes** : l'outil vous permet d'analyser l'évolution mois par mois pour identifier les tendances.
- **Utilisez la vue par service** pour identifier des ressources sous-utilisées ou oubliées (snapshots anciens, volumes déconnectés, etc.).
- **Croisez avec la grille tarifaire** pour évaluer l'impact financier de tout changement d'infrastructure avant de le réaliser.
