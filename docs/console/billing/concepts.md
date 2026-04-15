---
title: Gestionnaire des coûts
---

import billingDashboardPreview from './images/billing_dashboard_preview.png'
import billingDashboardTotal from './images/billing_dashboard_consumption_total.png'
import billingDashboardPerProduct from './images/billing_dashboard_consumption_per_product.png'
import billingDashboardPerService from './images/billing_dashboard_consumption_per_service.png'
import billingConsumptionDetails from './images/billing_consumption_details.png'
import billingPricesList from './images/billing_prices_list.png'

Le **Gestionnaire des coûts** est accessible depuis le menu principal de la Console Cloud Temple. Il vous offre une vision complète et transparente de votre consommation de ressources cloud, vous permettant de piloter vos dépenses en toute autonomie.

:::info
L'accès au Gestionnaire des coûts nécessite de disposer des droits appropriés sur votre tenant. Contactez votre responsable commercial pour obtenir plus d'informations et connaître les conditions d'accès au service.
:::

## Tableau de bord

Le tableau de bord du Gestionnaire des coûts est la page d'accueil du module. Il vous offre une vue synthétique de l'ensemble de votre consommation sur la période sélectionnée.

<img src={billingDashboardPreview} alt="Tableau de bord du Gestionnaire des coûts" />

Depuis ce tableau de bord, vous pouvez :

- **Sélectionner une période** d'analyse (mois en cours, mois précédent, ou plage de dates personnalisée),
- **Naviguer entre les différents onglets** pour affiner l'analyse de votre consommation,
- **Exporter vos données** de consommation pour les intégrer à vos outils de reporting internes.

## Consommation globale

L'onglet **Consommation globale** présente le montant total consommé sur la période sélectionnée. Il constitue le point d'entrée pour comprendre l'évolution générale de vos dépenses cloud.

<img src={billingDashboardTotal} alt="Consommation globale sur la période" />

Ce graphique vous permet de visualiser :

- Le **montant total** consommé sur la période,
- L'**évolution temporelle** de votre consommation (jour par jour ou mois par mois selon la granularité choisie),
- Les **pics de consommation** éventuels pour identifier rapidement les anomalies ou les montées en charge.

:::info
**Lecture du graphique sur le mois en cours**

Pour le mois en cours, le graphique distingue deux zones visuelles :
- La partie **bleue (pleine)** représente la consommation **réelle à date**, c'est-à-dire les ressources effectivement consommées depuis le début du mois,
- La partie **orange (hachurée)** représente le **prévisionnel** estimé jusqu'à la fin du mois, calculé sur la base de votre rythme de consommation actuel.

Cette projection vous permet d'anticiper votre budget de fin de mois en temps réel.
:::

## Consommation par produit

L'onglet **Consommation par produit** vous permet d'identifier la répartition de vos dépenses selon les produits Cloud Temple auxquels vous avez souscrit.

<img src={billingDashboardPerProduct} alt="Répartition de la consommation par produit" />

Chaque produit (IaaS, Stockage, Réseau, etc.) est présenté avec :

- Sa **part relative** dans la consommation totale,
- Son **montant en valeur absolue** sur la période,
- La **tendance** par rapport à la période précédente.

Cette vue est particulièrement utile pour identifier quels produits représentent les postes de dépenses les plus importants et orienter vos décisions d'optimisation.

## Consommation par service

L'onglet **Consommation par service** affine l'analyse en décomposant la consommation au niveau des services individuels au sein de chaque produit.

<img src={billingDashboardPerService} alt="Répartition de la consommation par service" />

Cette vue détaillée vous permet de :

- Identifier précisément **quels services** contribuent le plus à votre facturation,
- Comparer la consommation de services similaires,
- Détecter des services sous-utilisés ou sur-dimensionnés afin d'**optimiser votre empreinte cloud**.

## Détails de consommation

La section **Détails de consommation** liste l'ensemble des lignes de facturation individuelles sur la période sélectionnée. Il s'agit de la vue la plus granulaire du Gestionnaire des coûts.

<img src={billingConsumptionDetails} alt="Détails des lignes de consommation" />

Pour chaque ligne de consommation, vous retrouvez :

- Le **nom de la ressource** consommée,
- La **quantité** consommée et l'**unité de mesure** associée (heures, Go, requêtes, etc.),
- Le **prix unitaire** appliqué,
- Le **montant total** pour cette ligne sur la période.

Cette vue est indispensable pour effectuer un rapprochement comptable précis ou pour analyser en détail l'utilisation de ressources spécifiques.

## Catalogue des prix

Le **Catalogue des prix** recense les tarifs unitaires de l'ensemble des ressources et services disponibles sur votre tenant Cloud Temple.

<img src={billingPricesList} alt="Catalogue des prix unitaires" />

Ce catalogue vous permet de :

- **Anticiper le coût** d'une nouvelle ressource avant de la commander,
- Réaliser des **simulations budgétaires** pour vos projets cloud,
- Comparer les tarifs entre différentes gammes ou configurations de ressources.

:::tip
Les prix affichés dans le catalogue sont les tarifs contractuels applicables à votre tenant. Ils peuvent différer des tarifs publics en fonction de votre contrat Cloud Temple.
:::
