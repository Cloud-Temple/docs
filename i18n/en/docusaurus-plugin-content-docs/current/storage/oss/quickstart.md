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

## Listing all S3 buckets in your tenant

You can access all your buckets via the '__Object Storage__' menu in the Cloud Temple console:

<img src={S3ListBucket} />

You can see all the accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.

<img src={S3Accounts} />

## Creating a new storage account

Creating a storage account on your tenant is done by pressing the '__New storage account__' button at the top right, in the '__Storage Accounts__' tab:

<img src={S3CreateAccount} />

The platform then gives you the access key and the secret key of your bucket:

<img src={S3StorageKeys} />

__ATTENTION:__ The secret and access keys are presented only once. After this first appearance, it becomes impossible to consult the secret key again. It is therefore essential to note this information immediately; otherwise, you will need to generate a new key pair.

Regeneration is done at the key options level by choosing the "Reset access key" option.

<img src={S3Keyregen} />


## Creating an S3 bucket

Creating a new bucket is done by clicking the '__New bucket__' button at the top right of the screen:

<img src={S3Create} />

A window will then appear, and you need to fill in:

1. The **region** of your bucket,
2. The **type** of bucket: performance or archiving,
3. The **name** of your bucket (it must be unique).

<img src={S3CreatePopup_001} />

As of April 3, 2024, the available region is **FR1** (Paris) and only the performance type is available.

You must also choose who can access your bucket:

- **Private** Access: By default, the access is limited to specific Cloud Temple IP addresses.
- **Public** Access: The access is open to all Internet addresses (notably via the 0.0.0.0/0 rule). However, authentication is still required. We discourage this configuration due to its security implications.
- **Custom** Access: This option allows you to specify the IPv4 addresses or subnet ranges you want to authorize.

## Associating a storage account to a bucket

Account associations with the buckets are done in the '__Policies__' tab.

<img src={S3AccountAssign} />

This association gives the storage account access to the bucket. There are four roles:

1. **Maintainer**: Read, write, manage permissions, and policy management rights

The S3 permissions behind this role:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Writer and Reader**: Read and edit, modify, delete files in the buckets.

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

3. **Writer**: Read and edit, modify, delete files in the buckets.

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

4. **Reader**: Read and download files in the buckets.

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

When you click on the name of a bucket, you first have access to the '__Files__' tab to see its content:

<img src={S3Files} />

In the '__Settings__' tab, you can see the detailed information of your S3 bucket:

<img src={S3Params} />

You will then see:

1. The name of the S3 bucket,
2. Its region
3. The number of objects it contains and the size in bytes of the bucket,
4. Its endpoint,
5. The lifecycle settings that define, among other things, the expiration of the bucket's objects. '__0__' corresponds to infinite retention.

You can modify the retention setting via the '__Edit__' button in the lifecycle:

<img src={S3Lifecycle} />

Finally, you can modify its access typology.

## Limiting access to your S3 buckets

It is very simple to configure access restrictions to your S3 buckets. During the creation of a bucket, you can choose between three access configurations:

<img src={S3CreatePopup_001} />

- **Private** Access: By default, the access is limited to specific Cloud Temple IP addresses.
- **Public** Access: The access is open to all Internet addresses (notably via the 0.0.0.0/0 rule). However, authentication is still required. We discourage this configuration due to its security implications.
- **Custom** Access: This option allows you to specify the IPv4 addresses or subnet ranges you want to authorize:

<img src={S3CreatePopup_002} />

*IPv6 support is planned for the first half of 2025.*

## Deleting an S3 bucket

Deleting a bucket is done in the actions associated with the bucket by choosing the '__Delete__' option.

<img src={S3Delete} />

_**ATTENTION: Deletion is final and there is no way to recover the data.**_


## How is Cloud Temple's S3 offering billed?

The price is a monthly rate, per Gio of storage, billed monthly. However, the platform tracks usage by the hour and performs billing on a monthly basis of 720 hours.

For example, if you consume 30 Gio for 1 hour in a month, then nothing, then a few days later 30 Gio for 2 hours, the monthly bill will be *( Price (1 x 30 Gio) + 2 x Price (30 Gio) ) / 720* for the considered month. Billing is done in arrears.