---
title: Sauvegarder vos applications avec Veeam Kasten
---

import k10dashboard from './images/k10dashboard.png'
import k10s3location from './images/k10s3location.png'
import k10infrabackups from './images/k10infrabackups.png'

## Introduction

Veeam Kasten K10 est une solution de sauvegarde et de restauration conçue spécifiquement pour les environnements Kubernetes. Dans le service Managed Kubernetes de Cloud Temple, Kasten est intégré pour vous permettre de protéger vos applications, de restaurer des données en cas de besoin et d'assurer la continuité de vos activités.

Ce tutoriel vous guidera à travers les étapes de base pour sauvegarder et restaurer une application à l'aide de Kasten.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :
- Un cluster Managed Kubernetes actif.
- L'identifiant de votre cluster (par exemple, `ctodev`).
- Une application déployée dans votre cluster que vous souhaitez sauvegarder.

## 1. Accéder au tableau de bord Kasten

Le tableau de bord Kasten est accessible via une URL sécurisée, construite à partir de l'identifiant de votre cluster.

1.  **Construisez l'URL d'accès** :
    L'URL est basée sur le modèle suivant : `https://k10.external-secured.<identifiant>.mk.ms-cloud-temple.com`
    Remplacez `<identifiant>` par l'identifiant de votre cluster. Par exemple, si votre identifiant est `ctodev`, l'URL sera : `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com`.

2.  **Accédez à l'URL** dans votre navigateur.

    :::info Note sur la sécurité
    L'accès à cette URL est restreint aux adresses IP publiques que vous avez déclarées. Si vous ne parvenez pas à vous connecter, assurez-vous que votre adresse IP est autorisée en contactant le support Cloud Temple.
    :::

<img src={k10dashboard} />

:::tip Guide de démarrage rapide intégré
La console Kasten inclut un guide de démarrage rapide interactif sur sa page d'accueil. N'hésitez pas à le suivre pour une première prise en main directement depuis l'interface.
:::

## 2. Comprendre le stockage des sauvegardes

Par défaut, Kasten est préconfiguré pour utiliser le service de stockage objet (S3) de Cloud Temple pour stocker vos sauvegardes de manière sécurisée et durable.

Vous n'avez aucune configuration à effectuer. L'emplacement de stockage est déjà défini dans le tableau de bord Kasten, sous **Settings > Locations**. Cette configuration garantit que vos données sont stockées sur une infrastructure souveraine.

<img src={k10s3location} />

:::info Modèle de coût
Le service Veeam Kasten est inclus dans l'offre Managed Kubernetes. Le stockage des sauvegardes sur notre S3 souverain est facturé à l'usage. Consultez notre grille tarifaire pour plus de détails.
:::

## 3. Créer une politique de sauvegarde

Une politique de sauvegarde (`Policy`) est un ensemble de règles qui définissent quand et comment sauvegarder vos applications.

:::warning Politique de sauvegarde existante
Une politique de sauvegarde nommée `infra-backups` est déjà configurée dans votre instance Kasten. Cette politique assure la sauvegarde des composants essentiels livrés avec le cluster.

<img src={k10infrabackups} />

**Ne modifiez pas et ne supprimez pas cette politique.**

Vous devez créer vos propres politiques pour sauvegarder les applications que vous déployez.
:::

1.  Dans le tableau de bord Kasten, accédez à la section **Policies** et cliquez sur **Create New Policy**.

2.  **Nommez votre politique** : Donnez un nom descriptif, par exemple `backup-my-app-daily`.

3.  **Définissez la fréquence (Action)** :
    - **Action**: `Snapshot` (instantané).
    - **Frequency**: Choisissez la fréquence qui vous convient (par exemple, `Daily` à `02:00`).

4.  **Sélectionnez les ressources à sauvegarder** :
    - **Select resources by**: Vous pouvez sélectionner des applications par nom (`Application Name`), par namespace (`Namespace`), ou par labels.
    - Pour sauvegarder toutes les applications d'un namespace, choisissez `Namespace` et sélectionnez le namespace souhaité.

5.  **Cliquez sur `Create Policy`** pour enregistrer.

La politique s'exécutera automatiquement à la fréquence définie. Vous pouvez également lancer une exécution manuelle en cliquant sur le bouton "Play" (▶️) à côté de la politique.

## 4. Restaurer une application

Kasten facilite la restauration d'une application à son état précédent à partir d'un point de restauration.

1.  Dans le tableau de bord, allez dans la section **Applications**. Vous y verrez la liste de vos applications et leur état de conformité par rapport aux politiques de sauvegarde.

2.  **Sélectionnez l'application** que vous souhaitez restaurer.

3.  **Choisissez un point de restauration** :
    La page de l'application affiche une liste des points de restauration disponibles. Choisissez celui que vous souhaitez utiliser et cliquez sur **Restore**.

4.  **Configurez la restauration** :
    - Vous pouvez choisir de restaurer dans un nouveau namespace ou de remplacer l'application existante. Pour ce tutoriel, nous allons remplacer l'application existante.
    - Cliquez sur **Restore** pour lancer le processus.

Kasten va maintenant restaurer l'application à l'état capturé dans le snapshot. Vous pouvez suivre la progression dans le tableau de bord.

## 5. Sécurité des sauvegardes

La protection de vos données de sauvegarde est une priorité. L'intégration de Kasten dans l'offre Managed Kubernetes respecte les plus hauts standards de sécurité.

-   **Chiffrement** : Conformément aux exigences SecNumCloud, toutes vos sauvegardes sont chiffrées. Les données sont chiffrées en transit vers le stockage S3 avec le protocole **TLS 1.3** et au repos dans les buckets de stockage avec l'algorithme **AES-256**.

-   **Gestion des permissions** : L'accès à l'interface Kasten et à ses fonctionnalités est contrôlé par un système de permissions basé sur le RBAC de Kubernetes. Seuls les utilisateurs autorisés peuvent créer, modifier ou exécuter des politiques de sauvegarde et de restauration, garantissant ainsi une gouvernance stricte de vos opérations de sauvegarde.

## Conclusion

Vous avez appris à utiliser Veeam Kasten pour effectuer des opérations de base de sauvegarde et de restauration dans votre cluster Managed Kubernetes. Kasten offre de nombreuses fonctionnalités avancées, telles que la migration d'applications entre clusters et des politiques de rétention granulaires, que vous pouvez explorer pour renforcer votre stratégie de protection des données.

Pour plus d'informations, consultez la [documentation officielle de Kasten K10](https://docs.kasten.io/latest/).
