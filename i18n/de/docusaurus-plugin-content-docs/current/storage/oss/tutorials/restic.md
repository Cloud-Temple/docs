---
title: Backup with Restic on Object Storage (S3)
---

## Einführung

Restic ist ein schnelles, sicheres und effizientes Backup-Tool, das mit vielen Backends kompatibel ist, einschließlich S3-ähnlicher Dienste. Dieser Leitfaden führt Sie Schritt für Schritt durch die Einrichtung einer Sicherung in einem S3-kompatiblen Object Storage (z. B. AWS S3, MinIO, Wasabi usw.).

## Voraussetzungen

*   Ein vorhandener S3-Bucket
*   Zugriffsidentitäten (Access Key und Secret Key)
*   Name der Region (für AWS)
*   URL des S3-Endpunkts (im Fall eines nicht-AWS-Anbieters)
*   Restic ist auf Ihrer Maschine installiert

## Installation of Restic

### Debian/Ubuntu

```bash
sudo apt update
sudo apt install restic
```

### macOS (über Homebrew)

```bash
brew install restic
```

### Windows

Laden Sie die Binärdatei herunter von: [https://github.com/restic/restic/releases](https://github.com/restic/restic/releases)

## Setting environment variables

Before using Restic with S3, you need to configure the following variables:

```bash
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
export RESTIC_PASSWORD="your_password"
```

For a custom S3 endpoint (non-AWS), also add:

```bash
export RESTIC_REPOSITORY="s3:https://endpoint.custom:port/bucket_name"
```

Example:

```bash
export RESTIC_REPOSITORY="s3:https://s3.mycompany.local:9000/backup"
```

## Initialize the Restic repository

Once, initialize the repository in the bucket:

```bash
restic init
```

## Backup erstellen

Um ein Verzeichnis zu sichern:

```bash
restic backup /pfad/zum/mein_verzeichnis
```

## List backups

```bash
restic snapshots
```

## Wiederherstellen einer Sicherung

Wiederherstellen der letzten Sicherung:

```bash
restic restore latest --target /pfad/wiederherstellung
```

## Remove old backups

For example, keep the last 7 snapshots:

```bash
restic forget --keep-last 7 --prune
```

## Integrityprüfung

Um sicherzustellen, dass alles in Ordnung ist:

```bash
restic check
```

## Backup automation (cron)

Create a cron job, for example every day at 2 a.m.:

```bash
0 2 * * * /usr/bin/restic backup /home/user/dossier >> /var/log/restic.log 2>&1
```

Make sure all environment variables are exported in a file loaded by cron (e.g. `/etc/restic.env`).

## Weiterführendes

*   Offizielle Dokumentation: [https://restic.readthedocs.io](https://restic.readthedocs.io)
*   Restic mit anderen Backends: B2, Azure, Google Cloud, usw.

Dieser Leitfaden bietet Ihnen eine solide Grundlage, um Restic in eine zuverlässige, verschlüsselte Backup-Strategie mit Kompatibilität zu modernen Speicherlösungen wie S3 zu integrieren.