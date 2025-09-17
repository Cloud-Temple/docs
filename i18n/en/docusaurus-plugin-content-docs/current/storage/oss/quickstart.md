---
title: Getting Started Guide
---
import S3ListBucket from './images/S3_list_bucket.png';
import S3Accounts from './images/S3_accounts.png';
import S3CreateAccount from './images/S3_create_account.png';
import S3StorageKeys from './images/S3_storage_keys.png';
import S3Keyregen from './images/S3_keyregen.png';
import S3Create from './images/S3_create.png';
import S3CreatePopup_001 from './images/S3_create_popup_001.png';
import S3AccountAssign from './images/S3_account_assign.png';
import S3AccountAccess from './images/S3_account_access.png';
import S3Files from './images/S3_files.png';
import S3Params from './images/S3_params.png';
import S3Lifecycle from './images/S3_lifecycle.png';
import S3CreatePopup_002 from './images/S3_create_popup_002.png';
import S3Delete from './images/S3_delete.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le Stockage Objet Cloud Temple est un service de stockage d'objets hautement sécurisé et qualifié SecNumCloud, basé sur le protocole Amazon S3. Il vous permet de stocker tous types de données, y compris les plus sensibles, en conformité avec les plus hautes exigences de sécurité. Vous pouvez gérer votre stockage directement depuis la console Cloud Temple et intégrer de nombreuses bibliothèques existantes ou clients CLI pour un usage programmatique.

## Before You Begin

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    To perform the actions outlined below, you need:

    *   A Cloud Temple account connected to the console
    *   'Owner' status or IAM permissions allowing you to perform actions on the tenant of the relevant organization

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.
    ```
    - Replace `VOTRE_NAMESPACE` with your namespace. This parameter is available in the Cloud Temple console, under the bucket details.
    - Replace `VOTRE_CLE_ACCES` and `VOTRE_CLE_SECRETE` with those from your storage account.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    The AWS client is configured via the command `aws configure`. You will need to provide your access keys and default region.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    Unlike `mc`, the AWS client does not save the endpoint (endpoint URL). You will need to specify it for each command using the `--endpoint-url` option.

    The endpoint of your service is: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Tip:** To avoid typing the endpoint every time, you can define it in the AWS configuration file (`~/.aws/config`) by creating a dedicated profile:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    You can then use this profile with the `--profile cloudtemple` option on each command.


  </TabItem>

</Tabs>

## Listing all S3 buckets in your tenant

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    You can access the list of all your buckets via the '__Storage Objects__' menu in the Cloud Temple console:
    ![S3 List Buckets](https://link-to-image-for-console)
    Here, you can view all accounts created on your tenant and authorized to access S3 service through the '__Storage Accounts__' tab.
    ![Storage Accounts](https://link-to-image-for-storage-accounts)
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1
    [2025-05-06 15:12:57 CEST]     13B demo01/
    [2025-06-30 15:29:56 CEST]      0B demo03/
    [2025-01-29 14:40:40 CET]      0B test/
    ```
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2025-05-06 15:12:57 demo01
    2025-06-30 15:29:56 demo03
    2025-01-29 14:40:40 test
    ```
  </TabItem>

</Tabs>

## Browsing an S3 Bucket
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Upon clicking on the name of a bucket, you first access the '__Files__' tab to view its contents:
    ![S3 Files](https://link-to-S3-Files-image)
    In the '__Parameters__' tab, you can see detailed information about your S3 bucket:
    ![S3 Parameters](https://link-to-S3-Params-image)

    **Important note on retention**: The retention concept corresponds to the data protection duration, not a scheduled deletion. Data remains accessible throughout the retention period. To trigger automatic data deletion at the end of the retention period, it is necessary to define a lifecycle policy.
    
    **Lifecycle policy example**:
    ```json
    {
      "Rules": [
        {
          "ID": "Delete-after-30-days",
          "Status": "Enabled",
          "Expiration": {
            "Days": 30
          }
        }
      ]
    }
    ```
    This policy will automatically delete all objects in the bucket after 30 days.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1/demo-app/
    [2024-05-23 09:41:58 CEST] 8.9KiB README.md
    [2024-05-22 09:56:04 CEST]      0B helloworld.txt
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2024-05-23 09:41:58       8923 README.md
    2024-05-22 09:56:04          0 helloworld.txt
    ```
  </TabItem>

</Tabs>

## Writing a file into a bucket (upload)
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc cp ./version.txt cloudtemple-fr1/demo-app/
    `./version.txt` -> `cloudtemple-fr1/demo-app/version.txt`
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp ./version.txt s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    upload: ./version.txt to s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Download a file from a bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc cp cloudtemple-fr1/demo-app/app.tar.gz .
    `cloudtemple-fr1/demo-app/app.tar.gz` -> `./app.tar.gz`
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp s3://demo-app/app.tar.gz . --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    download: s3://demo-app/app.tar.gz to ./app.tar.gz
    ```
  </TabItem>

</Tabs>

## Deleting a file from a bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Removed `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    delete: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Creating a New Storage Account
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    To create a new storage account on your tenant, click the '__New Storage Account__' button located at the top right in the '__Storage Accounts__' tab:
    ![S3CreateAccount](https://link-to-image.com/S3CreateAccount)
    The platform then provides you with the access key and secret key for your bucket:
    ![S3StorageKeys](https://link-to-image.com/S3StorageKeys)
    **ATTENTION:** Access and secret keys are shown only once. After this initial display, it becomes impossible to view the secret key again. Therefore, it's crucial to note these details immediately; otherwise, you'll need to generate a new key pair.
    Key rotation is done at the key options level by selecting 'Regenerate Access Key'.
    ![S3Keyregen](https://link-to-image.com/S3Keyregen)
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Creating storage accounts is a specific operation for Cloud Temple's platform and must be done via the console, as described in the first tab.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Creating storage accounts is a specific operation for Cloud Temple's platform and must be performed through the console.
  </TabItem>
</Tabs>

## Creating an S3 Bucket
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    To create a new bucket, click on the '__New Bucket__' button at the top right of the screen:
    ![S3 Create](https://link-to-S3Create-image)
    A window then appears where you need to fill in:
    1. The **region** for your bucket creation,
    2. The **bucket type**: performance or archival,
    3. The **bucket name** (it must be unique).
    ![S3 Create Popup](https://link-to-S3CreatePopup_001)
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: nouveau-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc mb cloudtemple-fr1/nouveau-bucket
    Bucket `cloudtemple-fr1/nouveau-bucket` created successfully.
    ```
  </TabItem>
</Tabs>

## Deleting an S3 Bucket
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    The deletion of a bucket is done through the actions associated with the bucket by selecting the 'Delete' option.
    <img src={S3Delete} alt="S3 Delete" />
    _**WARNING: Deletion is irreversible and there's no way to recover the data.**_
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    remove_bucket: nouveau-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc rb cloudtemple-fr1/nouveau-bucket
    Removed `cloudtemple-fr1/nouveau-bucket` successfully.
    ```
  </TabItem>
</Tabs>

## Access Control Management
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Account associations to buckets and access restrictions are managed in the '__Policies__' tab of the bucket.
    ![S3 Account Assign](https://link-to-image)
    This interface allows you to grant storage account access to a bucket based on four predefined roles (Administrator, Writer, Reader, Editor, Viewer).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Fine management of access policies via the AWS CLI (`put-bucket-policy`) is an advanced operation. For most use cases, we recommend using the Cloud Temple console for simplified and secure configuration.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Fine management of access policies via the `mc` client (`policy` commands) is an advanced operation. For most use cases, we recommend using the Cloud Temple console for simplified and secure configuration.
  </TabItem>
</Tabs>
