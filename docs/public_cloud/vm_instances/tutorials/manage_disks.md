---
title: Gérer les disques d'une VM
---

Ce tutoriel explique comment ajouter un disque de stockage supplémentaire à une VM déjà déployée et le préparer depuis le système d'exploitation.

## Prérequis

- Une VM Instance active dans votre tenant

## Étape 1 — Accéder aux disques de la VM

Depuis la liste des VM Instances, cliquez sur la ligne de votre VM pour ouvrir son panneau de détail.

![Détail VM - Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Naviguez vers l'onglet **Disques** (icône disque dans le panneau latéral gauche du détail). Vous voyez la liste des disques actuellement attachés à la VM, avec pour chaque disque son nom, sa taille et son type de stockage.

## Étape 2 — Ouvrir le formulaire d'ajout

Cliquez sur le bouton **+ Ajouter un disque** en haut à droite du tableau des disques.

![Modal ajout de disque](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

Le formulaire **Ajouter un disque** s'ouvre avec les champs suivants :

| Champ | Description |
|-------|-------------|
| **Nom** | Identifiant du disque dans la console |
| **Type de stockage** | Standard (~1 500 IOPS/To) ou Enterprise (~7 500 IOPS/To) |

## Étape 3 — Configurer et ajouter le disque

Renseignez les paramètres :

1. **Nom** : saisissez un nom descriptif, ex : `data-postgresql`
2. **Type de stockage** :
   - Choisissez **Standard** pour des données générales (logs, fichiers, backups)
   - Choisissez **Enterprise** pour des bases de données ou charges I/O intensives

Cliquez sur **Ajouter**. Le disque est attaché à la VM en temps réel, sans nécessité de redémarrage.

## Étape 4 — Partitionner et monter le disque (dans la VM)

Après l'ajout depuis la console, connectez-vous à votre VM et initialisez le disque :

```bash
# Lister les disques disponibles
lsblk

# Créer une partition (remplacez /dev/vdb par le bon device)
sudo fdisk /dev/vdb
# Dans fdisk, tapez : n → p → 1 → Entrée → Entrée → w

# Formater la partition
sudo mkfs.ext4 /dev/vdb1

# Créer le point de montage
sudo mkdir -p /data

# Monter le disque
sudo mount /dev/vdb1 /data

# Vérifier le montage
df -h /data

# Rendre le montage persistant au redémarrage
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Adaptez le nom du device (`/dev/vdb`, `/dev/vdc`, etc.) selon le résultat de la commande `lsblk`. Le premier disque additionnel est généralement `/dev/vdb`.
:::

## Aller plus loin

- Pour un disque haute performance, utilisez le type **Enterprise** (~7 500 IOPS/To) — idéal pour PostgreSQL, MySQL ou tout workload I/O intensif.
- Vous pouvez attacher jusqu'à **16 volumes** par VM, avec une taille maximale de **2 To** par volume.
- La facturation est au **Go alloué**, indépendamment de l'utilisation réelle.
