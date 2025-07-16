---
title: Synchronize a folder with AWS CLI
---

Similarly to `mc`, the AWS CLI provides the `aws s3 sync` command to synchronize directories. This command compares the contents of the source directory and destination bucket to transfer only new or modified files.

Don't forget to configure your [AWS client as described in the quickstart guide](../quickstart.md#configurer-votre-client-aws-aws) and use the `--endpoint-url` parameter.

### Basic example

To synchronize the content of the local folder `./mon-site` to the bucket `s3://demo-app`:

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

### Useful options

*   `--delete` : Deletes files from the bucket that no longer exist in the local directory. This is equivalent to the `--remove` option of `mc mirror`.
*   `--exact-timestamps` : During synchronization, copy the file only if the modification timestamp is different.
*   `--dryrun` : Displays the operations that would be performed without actually executing them. Very useful for verifying a command before running it.

```bash
```

# Simulation of a synchronization with deletion to check changes
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com --delete --dryrun
(dryrun) delete: s3://demo-app/old-file.html
(dryrun) upload: mon-site/new-file.css to s3://demo-app/new-file.css