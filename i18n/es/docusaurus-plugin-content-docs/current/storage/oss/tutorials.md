---
title: Tutorials
---

## Using MINIO

You can use the minio client, for example:

https://min.io/docs/minio/linux/reference/minio-mc.html

For example:
```
    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>
```
Upload a file:
```
    mc cp test.txt <alias_name>/<bucket_name>
```
Retrieve a file:
```
    mc ls <alias_name>/<bucket_name>
```
#### Cloud Berry Explorer

You can also use [Cloud Berry Explorer](https://www.msp360.com/explorer/).

1. Connect using your endpoint and your key:

![](images/S3_cloudberry_001.png)

2. Once connected, enter the bucket name in the navigation bar:

![](images/S3_cloudberry_002.png)

3. You can then use the bucket normally:

![](images/S3_cloudberry_003.png)

## Using WINSCP 6.3.x

You can use [Winscp](https://winscp.net/eng/download.php):
1. Connect using your endpoint, access key, and secret key:

![](images/S3_winscp_001.png)

2. Once connected, use WINSCP normally just like an FTP or SCP site:

![](images/S3_winscp_002.png)