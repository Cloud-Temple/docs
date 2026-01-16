---
title: Backup with Restic on Object Storage (S3)
---

## Introduction

Restic is a fast, secure, and efficient backup tool, compatible with many backends, including S3-type services. This tutorial guides you step by step through setting up backups to an S3-compatible Object Storage (such as AWS S3, MinIO, Wasabi, etc.).

## Prerequisites

*   An existing S3 bucket
*   Access credentials (Access Key and Secret Key)
*   The region name (for AWS)
*   The S3 endpoint URL (in the case of a non-AWS provider)
*   Restic installed on your machine

## Restic Installation

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

Download the binary from: [https://github.com/restic/restic/releases](https://github.com/restic/restic/releases)

## Environment Variables Configuration

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

## Make a backup

To back up a directory:

```bash
restic backup /path/to/my_directory
```

## List backups

```bash
restic snapshots
```

## Restore a backup

Restore the latest backup:

```bash
restic restore latest --target /path/restore
```

## Remove old backups

For example, keep the last 7 snapshots:

```bash
restic forget --keep-last 7 --prune
```

## Integrity Check

To verify that everything is in order:

```bash
restic check
```

## Automate backups (cron)

Create a cron job, for example every day at 2 a.m.:

```bash
0 2 * * * /usr/bin/restic backup /home/user/dossier >> /var/log/restic.log 2>&1
```

Make sure all environment variables are exported in a file loaded by cron (e.g., `/etc/restic.env`).

## Going Further

*   Official documentation: [https://restic.readthedocs.io](https://restic.readthedocs.io)
*   Restic with other backends: B2, Azure, Google Cloud, etc.

This tutorial provides you with a solid foundation to integrate Restic into a reliable, encrypted backup strategy compatible with modern storage solutions such as S3.