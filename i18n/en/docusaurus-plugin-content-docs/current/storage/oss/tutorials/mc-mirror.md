---
title: Synchronizing a Directory with mc mirror
---

The `mc mirror` command is a powerful tool for synchronizing the contents of a local directory to an S3 bucket. It can upload new or modified files, and optionally delete files from the bucket that no longer exist locally. This method is efficient for maintaining backups or deploying static websites.

Please ensure your [MinIO client is configured as described in the quickstart guide](../quickstart.md).

### Exemple de base

To synchronize the content of the local directory `./mon-site` to the bucket `demo-app` on your alias `cloudtemple-fr1`:

```bash
mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Useful Options

*   `--overwrite`: Forces the replacement of existing files on the destination, even if they are more recent.
*   `--remove`: Removes files from the destination that do not exist in the source directory. **Use with caution**, as this can lead to irreversible data loss.

## Complete synchronization with removal of remote obsolete files
> `mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/`