---
title: Synchronize a folder with mc mirror
---

The `mc mirror` command is a powerful tool for synchronizing the contents of a local folder to an S3 bucket. It can upload new or modified files, and optionally delete files in the bucket that no longer exist locally. It is an efficient method for maintaining a backup or deploying a static site.

Don't forget to configure your [MinIO client as described in the quickstart guide](../quickstart.md#configurer-votre-client-minio-mc).

### Basic example

To synchronize the content of the local folder `./mon-site` to the bucket `demo-app` on your alias `cloudtemple-fr1`:

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

### Useful Options

*   `--overwrite` : Forces the replacement of existing files on the destination, even if they are newer.
*   `--remove` : Removes files from the destination that no longer exist in the source folder. **Use with caution**, as this can cause irreversible data loss.

```bash
```

# Full synchronization with deletion of obsolete remote files
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/