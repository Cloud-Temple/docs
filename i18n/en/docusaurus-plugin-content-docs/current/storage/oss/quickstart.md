---
title: Getting Started Guide
---


## Listing all S3 buckets in your tenant

You can access all your buckets through the '__Object Storage__' menu of the Cloud Temple console:

![](images/S3_list_bucket.png)

You can see all the accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.

![](images/S3_accounts.png)

## Creating a new storage account

Creating a storage account in your tenant is done by pressing the '__New storage account__' button at the top right, in the '__Storage Accounts__' tab:

![](images/S3_create_account.png)

The platform then provides you with the access key and the secret key for your bucket:

![](images/S3_storage_keys.png)

__WARNING:__ The secret and access keys are presented only once. After this first appearance, it becomes impossible to view the secret key again. It is therefore essential to note this information immediately; otherwise, you will need to generate a new pair of keys.

The regeneration is done in the key options by choosing "Reset access key".

![](images/S3_keyregen.png)

## Creating an S3 bucket

Creating a new bucket is done by clicking on the '__New bucket__' button at the top right of the screen:

![](images/S3_create.png)

A window will then appear, and you must fill in:

1. The **region** where your bucket is created,
2. The **type** of bucket: performance or archival,
3. The **name** of your bucket (it must be unique).

![](images/S3_create_popup_001.png)

As of April 3, 2024, the available region is **FR1** (Paris), and only the performance type is available.

You must also choose who can access your bucket:

- **Private** Access: By default, access is limited to specific IP addresses of Cloud Temple.
- **Public** Access: Access is open to all Internet addresses (notably via rule 0.0.0.0/0). We discourage this configuration due to its security implications.
- **Custom** Access: This option allows you to specify the IPv4 addresses or subnet ranges that you wish to authorize.

## Associating a storage account with a bucket

Account-to-bucket associations are made in the '__Policies__' tab

![](images/S3_account_assign.png)

This association allows the storage account to access the bucket. There are four roles:

1. **Maintainer**: Rights to read, write, manage rights, and manage policy

The S3 permissions behind this role:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Reader and Writer**: Read, edit, modify, delete files in the buckets.

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

3. **Writer**: Edit, modify, delete files in the buckets.

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

4. **Reader**: Read and download files from the buckets.

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

When you click on the name of a bucket, you first access the '__Files__' tab to see its content:

![](images/S3_files.png)

In the '__Settings__' tab, you can see the details of your S3 bucket information:

![](images/S3_params.png)

You then have:

1. The name of the S3 bucket,
2. Its region,
3. The number of objects it contains and the size in bytes of the bucket,
4. Its endpoint,
5. The lifecycle settings that define the expiration of the bucket's objects. '__0__' corresponds to indefinite retention.

You can modify the retention parameter via the '__Edit__' button in the lifecycle section:

![](images/S3_lifecycle.png)

Finally, you can modify its access typology.

## Access limitations to your S3 buckets

It is very easy to configure access restrictions for your S3 buckets. When creating a bucket, you have the choice between three access configurations:

![](images/S3_create_popup_001.png)

- **Private** Access: By default, access is limited to specific IP addresses of Cloud Temple.
- **Public** Access: Access is open to all Internet addresses (notably via rule 0.0.0.0/0). We discourage this configuration due to its security implications.
- **Custom** Access: This option allows you to specify the IPv4 addresses or subnet ranges that you wish to authorize:

![](images/S3_create_popup_002.png)

*IPv6 support is planned for the first half of 2025.*

## Deleting an S3 bucket

Deleting a bucket is done through the actions associated with the bucket by choosing the __'Delete'__ option.

![](images/S3_delete.png)

_**WARNING: Deletion is permanent, and there are no means to retrieve the data.**_

## How is the Cloud Temple S3 offer billed?

The price is a monthly fee, per GiB of storage, billed monthly. However, the platform records usage by the hour and invoices on a monthly basis of 720 hours.

For example, if you consume 30 GiB for 1 hour in a month and then nothing, and later in the month consume 30 GiB again for 2 hours, the monthly bill will be *( Price (1 x 30 GiB) + 2 x Price (30 GiB) ) / 720* for the considered month. Billing is postpaid.