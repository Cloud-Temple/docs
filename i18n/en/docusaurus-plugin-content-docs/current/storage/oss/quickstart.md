---
title: Getting Started Guide
---

## List all S3 buckets in your tenant

You can access all of your buckets via the '__Object Storage__' menu in the Cloud Temple console:

![](images/S3_list_bucket.png)

You can see all accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.

![](images/S3_accounts.png)

## Creating a new storage account

Creating a storage account on your tenant is done by pressing the button '__New storage account__' at the top right, in the '__Storage Accounts__' tab:

![](images/S3_create_account.png)

The platform then gives you the access key and the secret key of your bucket:

![](images/S3_storage_keys.png)

__WARNING:__ The secret and access keys are presented only once. After this first appearance, it becomes impossible to view the secret key again. It is therefore essential to note this information immediately; otherwise, you will need to generate a new pair of keys.

The regeneration is done in the key options by selecting the "Reset access key" option.

![](images/S3_keyregen.png)

## Creating an S3 bucket

Creating a new bucket is done by clicking the '__New bucket__' button at the top right of the screen:

![](images/S3_create.png)

A window then appears, and you must provide:

1. The **region** where your bucket will be created,
2. The **type** of bucket: performance or archival,
3. The **name** of your bucket (it must be unique).

![](images/S3_create_popup_001.png)

As of April 3, 2024, the available region is **FR1** (Paris), and only the performance type is available.

You must also choose who can access your bucket:

- **Private** Access: By default, access is limited to specific IP addresses from Cloud Temple.
- **Public** Access: Access is open to all Internet addresses (notably via the rule 0.0.0.0/0). However, authentication is still required. We discourage this configuration due to its security implications.
- **Custom** Access: This option allows you to specify the IPv4 addresses or subnet ranges you want to authorize.

## Associating a storage account with a bucket

Account associations with buckets are made in the '__Policies__' tab.

![](images/S3_account_assign.png)

This association allows giving the storage account access to the bucket. There are four roles:

1. **Maintainer**: Read, write, permission management, and policy management rights

The S3 permissions behind this role:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Read and Write**: Read, edit, modify, and delete files in the buckets.

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

3. **Writer**: Read, edit, modify, and delete files in the buckets.

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

![](images/S3_account_access.png)

## Browsing an S3 bucket

When you click on the name of a bucket, you first access the '__Files__' tab to see its contents:

![](images/S3_files.png)

In the '__Settings__' tab, you can see the detailed information of your S3 bucket:

![](images/S3_params.png)

You then have:

1. The name of the S3 bucket,
2. Its region,
3. The number of objects it contains and the size in bytes of the bucket,
4. Its endpoint,
5. The lifecycle parameters, which define, among other things, the expiration of objects in the bucket. '__0__' corresponds to an infinite retention.

You can modify the retention parameter via the '__Modify__' button of the lifecycle:

![](images/S3_lifecycle.png)

Finally, you can modify its access type.

## Limiting access to your S3 buckets

It is very simple to configure access restrictions to your S3 buckets. When creating a bucket, you have the choice between three access configurations:

![](images/S3_create_popup_001.png)

- **Private** Access: By default, access is limited to specific IP addresses from Cloud Temple.
- **Public** Access: Access is open to all Internet addresses (notably via the rule 0.0.0.0/0). We discourage this configuration due to its security implications.
- **Custom** Access: This option allows you to specify the IPv4 addresses or subnet ranges you want to authorize.

![](images/S3_create_popup_002.png)

*IPv6 support is planned for the first half of 2025.*

## Deleting an S3 bucket

Deleting a bucket is done in the actions associated with the bucket by choosing the '__Delete__' option.

![](images/S3_delete.png)

_**WARNING: Deletion is permanent, and there is no way to recover the data.**_

## How is the Cloud Temple S3 offer billed?

The price is a monthly price, per GiB of storage, billed monthly. However, the platform calculates usage by the hour and bills on a monthly basis of 720 hours.

For example, if you consume 30 GiB in a month for 1 hour and then nothing, and then a few days later 30 GiB for 2 hours, the monthly bill will be *( Price (1 x 30 GiB) + 2 x Price (30 GiB) ) / 720* for the month considered. Billing is in arrears.