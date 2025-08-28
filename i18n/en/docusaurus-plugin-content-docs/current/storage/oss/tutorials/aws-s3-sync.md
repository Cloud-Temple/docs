---
title: Synchronizing a Directory with AWS CLI
---

Similar to `mc`, the AWS CLI offers the command `aws s3 sync` for synchronizing directories. This command compares the content of the source directory and the destination bucket, transferring only new or modified files.

Please ensure your [AWS client is configured as described in the Getting Started guide](../quickstart.md) and use the `--endpoint-url` parameter.

### Exemple de base (Translated)

To synchronize the content of the local directory `./mon-site` to the S3 bucket `demo-app`:

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://YOUR_NAMESPACE.s3.fr1.cloud-temple.com
```

### Useful Options

*   `--delete`: Removes files from the bucket that no longer exist in the local directory, equivalent to the `--remove` option of `mc mirror`.
*   `--exact-timestamps`: During synchronization, only copies a file if the modification timestamp is different.
*   `--dryrun`: Displays operations that would be executed without actually running them. Highly useful for verifying a command before execution.

# Simulation of synchronization with deletion for change verification
> aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dry run) delete: s3://demo-app/old-file.html
(dry run) upload: mon-site/new-file.css to s3://demo-app/new-file.css