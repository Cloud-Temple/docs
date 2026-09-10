---
title: Object Storage Concepts
sidebar_position: 2
---

# Object Storage Concepts (OSS)

## Technical Architecture

Cloud Temple's object storage service is built on a distributed architecture that ensures high data durability and availability. Objects are stored redundantly across multiple storage nodes within our SecNumCloud-certified data centers.

Access to the service is provided via a standard RESTful API, compatible with the S3 protocol, allowing you to use a wide range of existing tools and SDKs.

## Main Components

- **Objects** : The fundamental data stored in the service. An object consists of data (the file itself) and metadata (descriptive information about the object).
- **Buckets (Containers)** : Objects are organized into buckets. A bucket is a container for objects, and its name must be unique within the service.
- **Keys** : Each object in a bucket is uniquely identified by a key (a file name).
- **Endpoints** : The regional URLs you use to access the storage service API.

## Security and Encryption

The security of your data is our absolute priority. The OSS service incorporates robust encryption mechanisms to protect your data, whether it is stored (at rest) or in transit over the network.

### Data at Rest Encryption (Data at Rest Encryption - D@RE)

To protect your stored data, our service uses server-side encryption.

- **Activation** : D@RE encryption is enabled at the *namespace* level (espace de nommage).
- **Algorithm** : We use **256-bit AES** encryption certified **FIPS 140-3**, via the **RSA BSAFE Crypto-J** software library in version **7.x**.
- **Operation** : When you write an object to a bucket where D@RE is enabled, the service automatically encrypts your data before writing it to disk. When you read the object, it is transparently decrypted for you. Encryption key management is fully handled by the service.

### Data Encryption in Transit

All communications with the object storage service API, whether for uploading, downloading, or managing your data, must be secured.

- **Protocol** : We require the use of the **TLS (Transport Layer Security)** protocol, versions **1.2 and 1.3**.
- **How it works** : By using HTTPS for all your API requests, you ensure that the data exchanged between your client and our servers is encrypted, thereby protecting it from interception or alteration during transit over the network.