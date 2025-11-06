---
title: Sauvegarde avec Restic sur Object Storage (S3)
---

## Introduction

Restic est un outil de sauvegarde rapide, sécurisé et efficace, compatible avec de nombreux backends, y compris les services de type S3. Ce tutoriel vous guide pas à pas pour configurer une sauvegarde vers un Object Storage compatible S3 (comme AWS S3, MinIO, Wasabi, etc.).

## Prérequis

*   Un bucket S3 existant
*   Les identifiants d'accès (Access Key et Secret Key)
*   Le nom de la région (pour AWS)
*   L'URL du endpoint S3 (dans le cas d'un fournisseur non-AWS)
*   Restic installé sur votre machine

## Installation de Restic

### Debian/Ubuntu

```bash
sudo apt update
sudo apt install restic
```

### macOS (via Homebrew)

```bash
brew install restic
```

### Windows

Télécharger le binaire depuis : [https://github.com/restic/restic/releases](https://github.com/restic/restic/releases)

## Configuration des variables d'environnement

Avant d'utiliser Restic avec S3, vous devez configurer les variables suivantes :

```bash
export AWS_ACCESS_KEY_ID="votre_access_key"
export AWS_SECRET_ACCESS_KEY="votre_secret_key"
export RESTIC_PASSWORD="votre_mot_de_passe"
```

Pour un endpoint S3 personnalisé (non-AWS), ajoutez aussi :

```bash
export RESTIC_REPOSITORY="s3:https://endpoint.custom:port/bucket_name"
```

Exemple :

```bash
export RESTIC_REPOSITORY="s3:https://s3.mycompany.local:9000/backup"
```

## Initialiser le dépôt Restic

Une seule fois, initialisez le dépôt dans le bucket :

```bash
restic init
```

## Faire une sauvegarde

Pour sauvegarder un dossier :

```bash
restic backup /chemin/vers/mon_dossier
```

## Lister les sauvegardes

```bash
restic snapshots
```

## Restaurer une sauvegarde

Restaurer la dernière sauvegarde :

```bash
restic restore latest --target /chemin/restauration
```

## Supprimer les anciennes sauvegardes

Par exemple, garder les 7 derniers snapshots :

```bash
restic forget --keep-last 7 --prune
```

## Vérification de l’intégrité

Pour vérifier que tout est en ordre :

```bash
restic check
```

## Automatiser la sauvegarde (cron)

Créer une tâche cron, par exemple tous les jours à 2h :

```bash
0 2 * * * /usr/bin/restic backup /home/user/dossier >> /var/log/restic.log 2>&1
```

Assurez-vous que toutes les variables d'environnement sont exportées dans un fichier chargé par le cron (ex : `/etc/restic.env`).

## Aller plus loin

*   Documentation officielle : [https://restic.readthedocs.io](https://restic.readthedocs.io)
*   Restic avec d'autres backends : B2, Azure, Google Cloud, etc.

Ce tutoriel vous fournit une base solide pour intégrer Restic dans une politique de sauvegarde fiable, chiffrée, et compatible avec les stockages modernes comme S3.
