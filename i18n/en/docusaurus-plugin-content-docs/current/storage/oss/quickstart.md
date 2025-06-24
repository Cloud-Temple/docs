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

## List all S3 buckets of your tenant

You can access all your buckets via the '__Object Storage__' menu in the Cloud Temple console:

<img src={S3ListBucket} />

You can see all the accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.

<img src={S3Accounts} />

## Creating a new storage account

Creating a storage account on your tenant is done by clicking the '__New Storage Account__' button in the top right corner, in the '__Storage Accounts__' tab:

<img src={S3CreateAccount} />

The platform then provides you with the access key and secret key for your bucket:

<img src={S3StorageKeys} />

__WARNING:__ The secret and access keys are displayed only once. After this first display, it becomes impossible to view the secret key again. It is therefore essential to note these information immediately; otherwise, you will need to generate a new pair of keys.

Regeneration is done at the key options level by choosing the "Reset access key" option.

<img src={S3Keyregen} />

## Creating an S3 bucket

Creating a new bucket is done by clicking the '__New bucket__' button in the top right corner of the screen:

<img src={S3Create} />

A window then appears and you must fill in:

1. The __region__ for creating your bucket,
2. The __type__ of bucket: performance or archive,
3. The __name__ of your bucket (it must be unique).

<img src={S3CreatePopup_001} />

As of April 3, 2024, the available region is __FR1__ (Paris) and only the performance type is available.

You must also choose who can access your bucket:

- __Private__ access: By default, access is limited to specific Cloud Temple IP addresses.
- __Public__ access: Access is open to all Internet addresses (including the 0.0.0.0/0 rule). However, authentication is always required. We advise against this configuration due to its security implications.
- __Custom__ access: This option allows you to specify the IPv4 addresses or subnetwork ranges you wish to authorize.

## Associating a storage account with a bucket

Storage account associations with buckets are performed in the '__Policies__' tab:

<img src={S3AccountAssign} />

This association allows the storage account to access the bucket. There are four roles:

1. __Maintainer__: Read, write, permission management, and policy management rights.

S3 permissions behind this role:

```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. __Reader and Writer__: Read and edit, modify, delete files in the buckets.

S3 permissions behind this role:

```json
{
    "name": "read_write",
    "permissions": [
        "s3:Get*",
        "s3:List*",
        "s3:*Object"
    ]
}
```

3. __Writer__: Read and edit, modify, delete files in the buckets.

S3 permissions behind this role:

```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*",
        "s3:*Object"
    ]
}
```

4. __Reader__: Read files in the buckets and download them.

S3 permissions behind this role:

```json
{
    "name": "read_only",
    "permissions": [
        "s3:Get*",
        "s3:List*"
    ]
}
```

<img src={S3AccountAccess} />

## Browsing an S3 bucket

When you click on the name of a bucket, you first access the '__Files__' tab to view its contents:

<img src={S3Files} />

In the '__Settings__' tab, you can view the details of your S3 bucket information:

<img src={S3Params} />

You then have:

1. The S3 bucket name,
2. Its region
3. The number of objects it contains and the size in bytes of the bucket,
4. Its endpoint,
5. The lifecycle parameters that define, among other things, the expiration of the bucket's objects. '__0__' corresponds to an infinite retention.

You can modify the retention parameter via the '__Modify__' button of the lifecycle:

<img src={S3Lifecycle} />

Finally, you can modify its access type.

## Access restrictions for your S3 buckets

It is very simple to configure access restrictions for your S3 buckets. During bucket creation, you have the choice between three access configurations:

<img src={S3CreatePopup_001} />

- __Private__ access: By default, access is limited to specific Cloud Temple IP addresses.
- __Public__ access: Access is open to all Internet addresses (including the 0.0.0.0/0 rule). We advise against this configuration due to its security implications.
- __Custom__ access: This option allows you to specify the IPv4 addresses or subnetwork ranges you wish to authorize:

<img src={S3CreatePopup_002} />

*IPv6 support is planned for the first half of 2025.*

## Deleting an S3 bucket

Deleting a bucket is done via the actions associated with the bucket by choosing the __'Delete'__ option.

<img src={S3Delete} />

***WARNING: Deletion is permanent and there is no way to recover the data.***

## How is the Cloud Temple S3 offer billed?

The price is a monthly price, per GiB of storage, billed monthly. However, the platform tracks usage by the hour and performs billing on a monthly basis of 720 hours.

For example, if you consume 30 GiB for 1 hour during the month, then nothing, and later 30 GiB for 2 hours, the monthly invoice will be *(Price (1 x 30 GiB) + 2 x Price (30 GiB)) / 720* for the considered month. Billing is done at the end of the term.