---
title: Copier et synchroniser avec Rclone
---

[Rclone](https://rclone.org/) est un outil en ligne de commande open source permettant de copier et synchroniser des fichiers vers de nombreux services de stockage cloud, dont les stockages compatibles S3. Il est particulièrement adapté pour les sauvegardes, les migrations de données et la synchronisation de répertoires.

:::caution Version requise
Assurez-vous d'utiliser une **version récente de Rclone** pour garantir la compatibilité avec le stockage objet Cloud Temple. Vous pouvez vérifier votre version avec `rclone version`.
:::

## Prérequis

- Un compte de stockage S3 Cloud Temple avec les clés d'accès (Access Key et Secret Key).
- L'endpoint S3 de votre compte (disponible dans la [console Cloud Temple](../../console/console.md)).

## Installation de Rclone

Sur Linux/macOS, installez Rclone avec le script officiel :

```bash
curl https://rclone.org/install.sh | sudo bash
```

Sur d'autres systèmes, consultez la [documentation d'installation officielle](https://rclone.org/install/).

Vérifiez l'installation :

```bash
rclone version
```

## Configuration

Créez le fichier de configuration Rclone pour votre stockage S3 Cloud Temple :

```bash
mkdir -p ~/.config/rclone
cat > ~/.config/rclone/rclone.conf <<EOF
[cloudtemple-s3]
type = s3
provider = Other
access_key_id = VOTRE_ACCESS_KEY
secret_access_key = VOTRE_SECRET_KEY
endpoint = https://VOTRE_COMPTE.s3.fr1.cloud-temple.com/
EOF
```

:::tip
Remplacez `VOTRE_ACCESS_KEY`, `VOTRE_SECRET_KEY` et `VOTRE_COMPTE` par vos informations réelles, disponibles dans la console Cloud Temple dans la section **Stockage Objet > Comptes de stockage**.
:::

Vous pouvez vérifier votre configuration :

```bash
cat ~/.config/rclone/rclone.conf
```

## Vérification de la connexion

Listez vos buckets pour vérifier que la connexion fonctionne :

```bash
rclone lsd cloudtemple-s3:
```

Listez les fichiers d'un bucket :

```bash
rclone ls cloudtemple-s3:nom-du-bucket
```

## Copier des fichiers (`copy`)

La commande `rclone copy` copie les fichiers source vers la destination **sans supprimer les fichiers existants** sur la destination.

### Test en mode simulation (dry-run)

Avant toute opération, testez avec `--dry-run` pour voir ce qui sera fait sans rien modifier :

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Copie effective

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --verbose
```

## Synchroniser des fichiers (`sync`)

La commande `rclone sync` rend la destination **identique** à la source. Les fichiers présents sur la destination mais absents de la source seront **supprimés**.

:::danger Attention
`rclone sync` **supprime** les fichiers de la destination qui n'existent plus dans la source. Testez toujours avec `--dry-run` avant d'exécuter la commande.
:::

### Test en mode simulation

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Synchronisation effective

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ --delete-during --verbose
```

## Options utiles

| Option | Description |
|--------|-------------|
| `--dry-run` | Simule l'opération sans rien modifier |
| `--verbose` | Affiche les détails des opérations |
| `--progress` | Affiche une barre de progression en temps réel |
| `--transfers N` | Nombre de transferts parallèles (défaut : 4) |
| `--bwlimit RATE` | Limite la bande passante (ex. `10M` pour 10 Mo/s) |
| `--exclude PATTERN` | Exclut des fichiers selon un motif (ex. `*.tmp`) |
| `--min-age DURÉE` | Ne transfère que les fichiers plus anciens que la durée |

### Exemple avec options avancées

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ \
  --transfers 8 \
  --bwlimit 50M \
  --exclude "*.tmp" \
  --exclude ".cache/**" \
  --progress \
  --verbose
```

## Automatisation avec cron

Pour automatiser une sauvegarde quotidienne, ajoutez une entrée cron :

```bash
# Sauvegarde quotidienne à 2h du matin
0 2 * * * rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ --log-file=/var/log/rclone-backup.log --log-level INFO
```
