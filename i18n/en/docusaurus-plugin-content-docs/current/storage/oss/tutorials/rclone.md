---
title: Copy and synchronize with Rclone
---

[Rclone](https://rclone.org/) is an open-source command-line tool that allows you to copy and synchronize files to numerous cloud storage services, including S3-compatible storage. It is particularly well-suited for backups, data migrations, and directory synchronization.

:::caution Required version
Make sure you are using a **recent version of Rclone** to ensure compatibility with Cloud Temple object storage. You can check your version with `rclone version`.
:::

## Prerequisites

- A Cloud Temple S3 storage account with access keys (Access Key and Secret Key).
- The S3 endpoint for your account (available in the [Cloud Temple console](../../console/console.md)).

## Installing Rclone

On Linux/macOS, install Rclone using the official script:

```bash
curl https://rclone.org/install.sh | sudo bash
```

On other systems, see the [official installation documentation](https://rclone.org/install/).

Verify the installation:

```bash
rclone version
```

## Configuration

Create the Rclone configuration file for your Cloud Temple S3 storage:

```bash
mkdir -p ~/.config/rclone
cat > ~/.config/rclone/rclone.conf <<EOF
[cloudtemple-s3]
type = s3
provider = Other
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
endpoint = https://YOUR_ACCOUNT.s3.fr1.cloud-temple.com/
EOF
```

:::tip
Replace `YOUR_ACCESS_KEY`, `YOUR_SECRET_KEY`, and `YOUR_ACCOUNT` with your actual information, available in the Cloud Temple console under **Object Storage > Storage Accounts**.
:::

You can verify your configuration:

```bash
cat ~/.config/rclone/rclone.conf
```

## Connection Check

List your buckets to verify that the connection is working:

```bash
rclone lsd cloudtemple-s3:
```

List the files in a bucket:

```bash
rclone ls cloudtemple-s3:bucket-name
```

## Copying files (`copy`)

The `rclone copy` command copies source files to the destination **without deleting existing files** on the destination.

### Test in dry-run mode

Before any operation, test with `--dry-run` to see what will be done without making any changes:

```bash
rclone copy /data/backup cloudtemple-s3:nom-du-bucket/ --dry-run --verbose
```

### Effective copy

```bash
rclone copy /data/backup cloudtemple-s3:bucket-name/ --verbose
```

## Synchronize files (`sync`)

The `rclone sync` command makes the destination **identical** to the source. Files present on the destination but missing from the source will be **deleted**.

:::danger Attention
`rclone sync` **deletes** files from the destination that no longer exist in the source. Always test with `--dry-run` before executing the command.
:::

### Simulation test

```bash
rclone sync /data/backup cloudtemple-s3:bucket-name/ --dry-run --verbose
```

### Effective synchronization

```bash
rclone sync /data/backup cloudtemple-s3:bucket-name/ --delete-during --verbose
```

## Useful Options

| Option | Description |
|--------|-------------|
| `--dry-run` | Simulates the operation without making any changes |
| `--verbose` | Displays details of the operations |
| `--progress` | Shows a real-time progress bar |
| `--transfers N` | Number of parallel transfers (default: 4) |
| `--bwlimit RATE` | Limits bandwidth (e.g. `10M` for 10 MB/s) |
| `--exclude PATTERN` | Excludes files matching a pattern (e.g. `*.tmp`) |
| `--min-age DURATION` | Transfers only files older than the specified duration |

### Example with advanced options

```bash
rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ \
  --transfers 8 \
  --bwlimit 50M \
  --exclude "*.tmp" \
  --exclude ".cache/**" \
  --progress \
  --verbose
```

## Automation with cron

To automate a daily backup, add a cron entry:

```bash
```

# Daily backup at 2 AM
0 2 * * * rclone sync /data/backup cloudtemple-s3:nom-du-bucket/ --log-file=/var/log/rclone-backup.log --log-level INFO
```