---
title: Object Storage Concepts
sidebar_position: 2
---

# Object Storage Concepts (OSS)

## Technical Architecture

The Cloud Temple object storage service is built on a distributed architecture that ensures high data durability and availability. Objects are redundantly stored across multiple storage nodes within our SecNumCloud-certified datacenters.

Access to the service is provided through a standard RESTful API, compatible with the S3 protocol, enabling you to use a wide range of existing tools and SDKs.

## Main Components

-   **Objects**: The fundamental data units stored in the service. An object consists of data (the file itself) and metadata (descriptive information about the object).
-   **Buckets (Containers)**: Objects are organized into buckets. A bucket is a container for objects, and its name must be unique within the service.
-   **Keys**: Each object within a bucket is uniquely identified by a key (a filename).
-   **Endpoints**: Regional URLs used to access the service's storage API.

## Security and Encryption

The security of your data is our top priority. The OSS service integrates robust encryption mechanisms to protect your data, whether it is stored (at rest) or in transit over the network.

### Data at Rest Encryption (D@RE)

To protect your stored data, our service uses server-side encryption.

-   **Activation**: D@RE is enabled at the *namespace* (namespace) level.
-   **Algorithm**: We use the **AES-256** algorithm, one of the strongest encryption standards available.
-   **Operation**: When you write an object into a bucket where D@RE is enabled, the service automatically encrypts your data before writing it to disk. When you read the object, it is transparently decrypted for you. Key management is fully handled by the service.

### Data Encryption in Transit

All communications with the object storage service API—whether for uploading, downloading, or managing your data—must be secured.

-   **Protocol**: We require the use of the **TLS (Transport Layer Security)** protocol, versions **1.2 and 1.3**.
-   **Operation**: By using HTTPS for all your API requests, you ensure that data exchanged between your client and our servers is encrypted, thereby protecting it against interception or tampering during transit over the network.