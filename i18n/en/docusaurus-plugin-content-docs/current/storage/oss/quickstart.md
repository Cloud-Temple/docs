---
title: Quickstart Guide
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

## Listing all S3 buckets in your tenant

You can access all your buckets via the '__Object Storage__' menu in the Cloud Temple console:

<img src={S3ListBucket} />

You can see all accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.

<img src={S3Accounts} />

## Creating a new storage account

To create a storage account on your tenant, click the '__New storage account__' button in the top right corner of the '__Storage Accounts__' tab:

<img src={S3CreateAccount} />

The platform will then provide you with the access key and secret key for your bucket:

<img src={S3StorageKeys} />

__CAUTION:__ The secret and access keys are presented only once. After this first appearance, it becomes impossible to view the secret key again. It is therefore essential to note this information immediately; otherwise, you will need to generate a new pair of keys.

Key regeneration is done in the key options by selecting "Reset access key".

<img src={S3Keyregen} />

## Creating an S3 bucket

To create a new bucket, click on the '__New bucket__' button in the top right of the screen:

<img src={S3Create} />

A window will appear where you need to specify:

1. The __region__ where your bucket will be created,
2. The __type__ of bucket: performance or archival,
3. The __name__ of your bucket (it must be unique).

<img src={S3CreatePopup_001} />

As of April 3, 2024, the available region is __FR1__ (Paris) and only the performance type is available.

You must also choose who can access your bucket:

- __Private__ access: By default, access is limited to specific Cloud Temple IP addresses.
- __Public__ access: Access is open to all Internet addresses (notably via the 0.0.0.0/0 rule). However, authentication is still required. We do not recommend this configuration due to its security implications.
- __Custom__ access: This option allows you to specify the IPv4 addresses or subnet ranges you wish to authorize.

## Associating a storage account with a bucket

Account associations to buckets are made in the '__Policies__' tab

<img src={S3AccountAssign} />

This association gives the storage account access to the bucket. There are four roles:

1. __Maintainer__: Read, write, rights management, and policy management permissions

The S3 permissions behind this role:

```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. __Writer and Reader__: Read and edit, modify, delete files in buckets.

The S3 permissions behind this role:

```json
{
    "name": "read_write",
    "permissions": [
        "s3:Get*"
        "s3:List*"
        "s3:*Object"
    ]
}
```

3. __Writer__: Read and edit, modify, delete files in buckets.

The S3 permissions behind this role:

```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*"
        "s3:*Object"
    ]
}
```

4. __Reader__: Read files in buckets and download them.

The S3 permissions behind this role:

```json
{
    "name": "read_only",
    "permissions": [
        "s3:Get*"
        "s3:List*"
    ]
}
```

<img src={S3AccountAccess} />

## Browsing an S3 bucket

When you click on a bucket name, you first access the '__Files__' tab to see its contents:

<img src={S3Files} />

In the '__Settings__' tab, you can see the details of your S3 bucket:

<img src={S3Params} />

You will see:

1. The S3 bucket name,
2. Its region
3. The number of objects it contains and the size in bytes of the bucket,
4. Its endpoint,
5. The lifecycle settings that define the expiration of objects in the bucket. '__0__' corresponds to infinite retention.

You can modify the retention parameter via the '__Edit__' button in the lifecycle section:

<img src={S3Lifecycle} />

Finally, you can modify its access typology.

## Limiting access to your S3 buckets

It is very simple to configure access restrictions to your S3 buckets. When creating a bucket, you have a choice between three access configurations:

<img src={S3CreatePopup_001} />

- __Private__ access: By default, access is limited to specific Cloud Temple IP addresses.
- __Public__ access: Access is open to all Internet addresses (notably via the 0.0.0.0/0 rule). We do not recommend this configuration due to its security implications.
- __Custom__ access: This option allows you to specify the IPv4 addresses or subnet ranges you wish to authorize:

<img src={S3CreatePopup_002} />

*IPv6 support is planned for the first half of 2025.*

## Deleting an S3 bucket

To delete a bucket, use the actions associated with the bucket by selecting the '__Delete__' option.

<img src={S3Delete} />

***CAUTION: Deletion is permanent and there is no way to recover the data.***

## How is Cloud Temple's S3 offering billed?

The price is a monthly price, per GiB of storage, billed monthly. However, the platform counts usage by the hour and bills on a monthly basis of 720 hours.

For example, if you consume 30 GiB for 1 hour in the month, then nothing, then a few days later 30 GiB for 2 hours, the monthly bill will be *( Price (1 x 30GiB) + 2 x Price (30GiB) ) / 720* for the month in question. Billing is in arrears.
