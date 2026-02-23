---
title: Copy and synchronize with Rclone
---

[Rclone](https://rclone.org/) is an open-source command-line tool that allows you to copy and synchronize files to numerous cloud storage services, including S3-compatible storage. It is particularly well-suited for backups, data migrations, and directory synchronization.

:::caution Required version
Make sure you are using a **recent version of Rclone** to ensure compatibility with Cloud Temple object storage. You can check your version using `rclone version`.
:::

## Voraussetzungen

- Ein S3-Speicherkonto von Cloud Temple mit Zugriffsschlüsseln (Access Key und Secret Key).
- Der S3-Endpoint Ihres Kontos (verfügbar in der [Cloud Temple-Konsole](../../console/console.md)).

## Rclone-Installation

Unter Linux/macOS installieren Sie Rclone mit dem offiziellen Skript:

```bash
curl https://rclone.org/install.sh | sudo bash
```

Für andere Systeme konsultieren Sie die [offizielle Installationsdokumentation](https://rclone.org/install/).

Überprüfen Sie die Installation:

```bash
rclone version
```

## Configuration

Erstellen Sie die Rclone-Konfigurationsdatei für Ihren S3-Cloud-Temple-Speicher:

```bash
mkdir -p ~/.config/rclone
cat > ~/.config/rclone/rclone.conf <<EOF
[cloudtemple-s3]
type = s3
provider = Other
access_key_id = IHR_ZUGANGSSCHLÜSSEL
secret_access_key = IHR_GEHEIMER_ZUGANGSSCHLÜSSEL
endpoint = https://IHRE_BENUTZERKONTO.s3.fr1.cloud-temple.com/
EOF
```

:::tip
Ersetzen Sie `IHR_ZUGANGSSCHLÜSSEL`, `IHR_GEHEIMER_ZUGANGSSCHLÜSSEL` und `IHRE_BENUTZERKONTO` durch Ihre tatsächlichen Informationen, die Sie in der Cloud-Temple-Konsole unter **Objektspeicher > Speicherkonten** finden.
:::

Sie können Ihre Konfiguration überprüfen:

```bash
cat ~/.config/rclone/rclone.conf
```

## Verbindung überprüfen

Listen Sie Ihre Buckets auf, um zu überprüfen, ob die Verbindung funktioniert:

```bash
rclone lsd cloudtemple-s3:
```

Listen Sie die Dateien eines Buckets auf:

```bash
rclone ls cloudtemple-s3:bucket-name
```

## Dateien kopieren (`copy`)

Der Befehl `rclone copy` kopiert die Quelldateien zur Zielposition **ohne bestehende Dateien am Ziel zu löschen**.

### Test im Simulationsmodus (dry-run)

Testen Sie vor jeder Operation mit `--dry-run`, um zu sehen, was ausgeführt wird, ohne etwas zu ändern:

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Effective copy

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --verbose
```

## Dateien synchronisieren (`sync`)

Der Befehl `rclone sync` macht das Ziel **identisch** mit der Quelle. Dateien, die im Ziel vorhanden sind, aber in der Quelle fehlen, werden **gelöscht**.

:::danger Achtung
`rclone sync` **löscht** Dateien im Ziel, die nicht mehr in der Quelle vorhanden sind. Testen Sie die Befehlsausführung immer mit `--dry-run`, bevor Sie den Befehl ausführen.
:::

### Test in Simulationsmodus

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Effektive Synchronisation

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ --delete-during --verbose
```

## Nützliche Optionen

| Option | Beschreibung |
|--------|-------------|
| `--dry-run` | Führt die Operation simuliert durch, ohne etwas zu ändern |
| `--verbose` | Zeigt Details der Operationen an |
| `--progress` | Zeigt eine Echtzeit-Fortschrittsleiste an |
| `--transfers N` | Anzahl paralleler Übertragungen (Standard: 4) |
| `--bwlimit RATE` | Begrenzt die Bandbreite (z. B. `10M` für 10 MB/s) |
| `--exclude PATTERN` | Exkludiert Dateien nach einem Muster (z. B. `*.tmp`) |
| `--min-age DURÉE` | Überträgt nur Dateien, die älter sind als die angegebene Dauer |

### Beispiel mit erweiterten Optionen

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ \
  --transfers 8 \
  --bwlimit 50M \
  --exclude "*.tmp" \
  --exclude ".cache/**" \
  --progress \
  --verbose
```

## Automation mit cron

Um eine tägliche Sicherung zu automatisieren, fügen Sie eine cron-Einträge hinzu:

```bash


# Daily backup at 2 AM
0 2 * * * rclone sync /data/backup cloudtemple-s3:bucket-name/ --log-file=/var/log/rclone-backup.log --log-level INFO
```