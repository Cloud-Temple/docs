---
title: Getting Started Guide
---
import S3ListBucket from './images/S3_list_bucket.png'
import S3Accounts from './images/S3_accounts.png'
import S3CreateAccount from './images/S3_create_account.png'
import S3StorageKeys from './images/S3_storage_keys.png'
import S3Keyregen from './images/S3_keyregen.png'
import S3Create from './images/S3_create.png'
import S3CreatePopup_001 from './images/S3_create_popup_001.png'
import S3AccountAssign from './images/S3_account_assign.png'
import S3AccountAccess from './images/S3_account_access.png'
import S3Files from './images/S3_files.png'
import S3Params from './images/S3_params.png'
import S3Lifecycle from './images/S3_lifecycle.png'
import S3CreatePopup_002 from './images/S3_create_popup_002.png'
import S3Delete from './images/S3_delete.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Cloud Temple Object Storage is a highly secure and SecNumCloud-certified object storage service based on the Amazon S3 protocol. It allows you to store all types of data, including the most sensitive, in compliance with the highest security requirements. You can manage your storage directly from the Cloud Temple console and integrate many existing libraries or CLI clients for programmatic use.

## Before Starting


<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    To perform the actions presented below, you must have:

    *   A Cloud Temple account connected to the console
    *   The 'Owner' status or IAM permissions allowing you to perform actions on the relevant organization tenant.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.           
    ```
    - Replace `VOTRE_NAMESPACE` with your namespace. This parameter is available in the Cloud Temple console, in the details of a bucket.
    - Replace `VOTRE_CLE_ACCES` and `VOTRE_CLE_SECRETE` with those of your storage account.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    The AWS client is configured via the `aws configure` command. You will need to enter your access keys and default region.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    Unlike `mc`, the AWS client does not save the endpoint. You will need to specify it for each command using the `--endpoint-url` option.

    The endpoint of your service is: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Tip:** To avoid typing the endpoint each time, you can set it in the AWS configuration file (`~/.aws/config`) by creating a dedicated profile:
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

## List all S3 buckets of your tenant
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    You can access all your buckets via the '__Object Storage__' menu of the Cloud Temple console:
    <img src={S3ListBucket} />
    You can see all the accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.
    <img src={S3Accounts} />
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

## Browse an S3 bucket
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    When you click on the name of a bucket, you first access the '__Files__' tab to view its contents:
    <img src={S3Files} />
    In the '__Settings__' tab, you can view the details of your S3 bucket:
    <img src={S3Params} />
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1/demo-app/
    [2024-05-23 09:41:58 CEST] 8.9KiB README.md
    [2024-05-22 09:56:04 CEST]     0B helloworld.txt
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2024-05-23 09:41:58      8923 README.md
    2024-05-22 09:56:04         0 helloworld.txt
    ```
  </TabItem>

</Tabs>

## Write a file to a bucket (upload)
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
    `
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp s3://demo-app/app.tar.gz . --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    download: s3://demo-app/app.tar.gz to ./app.tar.gz
    `
  </TabItem>

</Tabs>

## Delete a file from a bucket
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

## Creating a new storage account
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Creating a storage account on your tenant is done by clicking the '__Create new storage account__' button in the top right corner, in the '__Storage accounts__' tab:
    <img src={S3CreateAccount} />
    The platform then provides you with the access key and secret key for your bucket:
    <img src={S3StorageKeys} />
    __WARNING:__ The access and secret keys are only displayed once. After this first display, it becomes impossible to view the secret key again. It is therefore essential to note these information immediately; otherwise, you will need to generate a new pair of keys.
    The regeneration is done via the key options by choosing the "Reset access key" option.
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Creating storage accounts is a platform-specific operation for Cloud Temple and must be performed via the console, as described in the first tab.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Creating storage accounts is a platform-specific operation for Cloud Temple and must be performed via the console.
  </TabItem>
</Tabs>

## Creating an S3 bucket
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Creating a new bucket is done by clicking the '__New bucket__' button in the top right corner of the screen:
    <img src={S3Create} />
    A window then appears and you must fill in:
    1. The **region** for your bucket,
    2. The **type** of bucket: standard or archive,
    3. The **name** of your bucket (it must be unique).
    <img src={S3CreatePopup_001} />
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

## Deleting an S3 bucket
<Tabs>
  <TabItem value="Console Cloud Temple" label="Cloud Temple Console" default>
    Deleting a bucket is done in the actions associated with the bucket by choosing the __'Delete'__ option.
    <img src={S3Delete} />
    _**WARNING: Deletion is permanent and there is no way to recover the data.**_
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

## Access Policy Management
<Tabs>
  <TabItem value="Cloud Temple Console" label="Cloud Temple Console" default>
    Account associations with buckets and access restriction configurations are performed in the '__Policies__' tab of the bucket.
    <img src={S3AccountAssign} />
    This interface allows you to grant storage account access to the bucket according to four predefined roles (Maintainer, Writer and Reader, Writer, Reader).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Fine-grained access policy management via the AWS client (`put-bucket-policy`) is an advanced operation. For most use cases, we recommend using the Cloud Temple console for simplified and secure configuration.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Fine-grained access policy management via the `mc` client (`policy` commands) is an advanced operation. For most use cases, we recommend using the Cloud Temple console for simplified and secure configuration.
  </TabItem>
</Tabs>