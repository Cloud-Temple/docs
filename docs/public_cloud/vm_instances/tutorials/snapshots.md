---
title: Prendre et gérer les snapshots
---

Les snapshots permettent de capturer l'état d'une VM à un instant T. Ils sont utiles avant une mise à jour majeure, une migration ou toute opération risquée.

## Prérequis

- Une VM Instance dans votre tenant

## Étape 1 — Accéder aux snapshots

Depuis la liste des VM Instances, cliquez sur la ligne de votre VM pour ouvrir son panneau de détail, puis naviguez vers l'onglet **Snapshots**.

![Détail VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Vous voyez la liste des snapshots existants avec pour chaque entrée : le nom, le statut et la date de création.

## Étape 2 — Créer un snapshot

Cliquez sur **+ Créer un snapshot**.

Saisissez un nom explicite pour identifier ce snapshot, par exemple :
- `avant-mise-a-jour-nginx`
- `prod-2026-04-17-avant-migration`

Cliquez sur **Créer**. Le snapshot passe au statut **Disponible** une fois la capture terminée.

:::tip Bonnes pratiques de nommage
- Incluez la **date** dans le nom pour faciliter l'identification
- Précisez le **motif** du snapshot (ex: avant-upgrade, avant-migration)
- Exemples : `web01-2026-04-17-avant-nginx-upgrade`, `db-prod-avant-migration-v2`
:::

## Étape 3 — Restaurer depuis un snapshot

Pour restaurer votre VM à l'état capturé par un snapshot, cliquez sur le menu **Actions** (icône ⋮) à droite du snapshot concerné, puis sélectionnez **Restaurer**.

:::caution
La restauration depuis un snapshot **écrase l'état actuel** de la VM. Toutes les modifications effectuées après la prise du snapshot seront perdues. Assurez-vous que toutes les données importantes sont sauvegardées avant de procéder.
:::

## Étape 4 — Supprimer un snapshot obsolète

Les snapshots consomment de l'espace de stockage et sont facturés en conséquence. Supprimez les snapshots devenus inutiles pour optimiser vos coûts.

Cliquez sur le menu **Actions** (icône ⋮) à droite du snapshot, puis sélectionnez **Supprimer**.

## Bonnes pratiques générales

| Bonne pratique | Raison |
|----------------|--------|
| Prendre un snapshot **avant toute opération critique** | Permet un retour arrière rapide en cas de problème |
| **Nommer explicitement** les snapshots | Facilite l'identification en cas d'urgence |
| **Supprimer les snapshots obsolètes** régulièrement | Réduit les coûts de stockage |
| Ne pas utiliser les snapshots comme **sauvegarde long terme** | Les snapshots sont liés au cycle de vie de la VM ; utilisez la politique de sauvegarde dédiée pour la rétention longue durée |

## Différence entre snapshot et sauvegarde

| | Snapshot | Sauvegarde |
|--|----------|------------|
| **Usage** | Point de retour rapide (opérations courtes) | Protection long terme des données |
| **Rétention** | Manuelle | Configurable (politique de rétention) |
| **Coût** | Au Go occupé | Option payante supplémentaire |
| **Configuration** | Onglet Snapshots de la VM | Onglet Informations → Politique de sauvegarde |
