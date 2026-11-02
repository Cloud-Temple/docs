---
title: Concepts
sidebar_position: 2
---

<a id="concepts-du-stockage-objet-oss"></a>

## Introduction

**Object Storage** is a distributed, scalable and cost-effective storage service for unstructured data. Compatible with the S3 protocol, it automatically replicates data across three availability zones and does not charge for outbound transfers. It is suited to archiving, backup and application data storage in a sovereign environment.

### Audiences and use cases

- **Application developers**: storage for cloud-native applications and microservices.
- **DevOps teams**: backup and archiving of critical data.
- **Large data volumes**: cost-effective management of large volumes.
- **Rich content**: images, videos and documents.
- **Public sector**: long-term archiving compliant with sovereignty requirements.

## Benefits

| Benefit                   | Description                                                                          |
|---------------------------|--------------------------------------------------------------------------------------|
| Scalability               | The horizontal architecture adapts to the growth of your data.                       |
| Durability and redundancy | Data is automatically distributed across three availability zones.                   |
| No egress fees            | Outbound transfer of your data is free of charge.                                    |
| S3 compatibility          | Existing S3 tools and SDKs can be used without adaptation.                           |

## Features

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| S3-compatible API        | Access through the S3 API, 97% compatible with AWS S3.                      |
| Bucket type              | Choice at creation between a "performance" or an "archive" bucket.          |
| Replication across 3 zones | Automatic redundancy across three availability zones.                     |
| Erasure Coding           | EC 12+4 protection.                                                         |
| Encryption at rest       | Server-side encryption, enabled at the *namespace* level.                   |
| Pre-signed requests      | Secure temporary URLs.                                                      |
| Network access modes     | Control over the network exposure of buckets (public, private, custom).     |
| Universal clients        | AWS-CLI, S3CMD, minio-CLI, MC CLI.                                          |

### Main components

- **Objects**: the fundamental data stored in the service. An object consists of data (the file itself) and metadata (descriptive information about the object).
- **Buckets (containers)**: objects are organized into buckets. A bucket is a container for objects, and its name must be unique within the service.
- **Keys**: each object in a bucket is uniquely identified by a key (a file name).
- **Endpoints**: the regional URLs you use to access the service API.

<a id="architecture-technique"></a>

## Architecture

The service is built on a distributed architecture that ensures high data durability and high availability. Objects are stored redundantly across multiple storage nodes, distributed across three availability zones.

- **Erasure Coding EC 12+4**: data is split into 12 segments and supplemented by 4 parity segments.
- **Distribution**: segments are spread across different nodes and racks.
- **Network**: high-performance network, up to 100 Gb/s.

Access to the service is provided through a standard RESTful API, compatible with the S3 protocol, which makes it possible to use a wide range of existing tools and SDKs. The service is integrated with the Cloud Temple Console and can also be managed as Infrastructure as Code with Terraform.

## Regions and availability zones

Object Storage is available in the FR1 region. Data is distributed across three availability zones.

## Technical specifications

| Parameter             | Value                                 |
|-----------------------|---------------------------------------|
| Compatibility         | 97% AWS S3                            |
| Durability            | 99.999999999% (eleven 9s), annual     |
| Erasure Coding        | EC 12+4                               |
| Network performance   | 1 Gbps guaranteed, up to 100 Gb/s     |
| Encryption            | TLS 1.2 / 1.3 in transit, AES-256 at rest |

### Limits

- 999 buckets per tenant.
- 5 TB per object.

<a id="sécurité-et-chiffrement"></a>

## Security and compliance

Object Storage is certified HDS and ISO 27001, C5-compliant and SecNumCloud-qualified.

The security of your data is a priority. The service includes encryption mechanisms to protect your data, whether it is stored (at rest) or in transit over the network.

### Data at rest encryption (Data at Rest Encryption - D@RE)

To protect your stored data, the service uses server-side encryption.

- **Activation**: D@RE encryption is enabled at the *namespace* level.
- **Algorithm**: **256-bit AES** encryption certified **FIPS 140-3**, via the **RSA BSAFE Crypto-J** software library in version **7.x**.
- **How it works**: when you write an object to a bucket where D@RE is enabled, the service automatically encrypts your data before writing it to disk. On read, the object is transparently decrypted. Encryption key management is fully handled by the service.

### Data encryption in transit

All communications with the service API, whether for uploading, downloading or managing your data, must be secured.

- **Protocol**: the use of the **TLS (Transport Layer Security)** protocol, versions **1.2 and 1.3**, is mandatory.
- **How it works**: by using HTTPS for all your API requests, the data exchanged between your client and the servers is encrypted, and protected against interception or alteration during transit.

## Service availability

The service availability target is 99.99%, measured monthly, including maintenance windows.

## Responsibilities

The allocation of responsibilities between the customer and Cloud Temple is detailed in the [Object Storage responsibility matrix (RACI)](../../contractual/iaas/raci_s3.md).

## Reversibility

You can retrieve your data at any time, autonomously, using standard S3 tools.

| Operation                   | Description                                                                                  | Cost       |
|-----------------------------|----------------------------------------------------------------------------------------------|------------|
| Data retrieval              | Download of all your objects through the S3 API.                                             | Free of charge |
| Outbound transfer           | No egress fees when transferring your data to another provider.                              | Free of charge |
| Migration assistance        | Technical support on request for complex migration operations.                               | On quotation |

## Pricing

The service is billed according to the capacity actually used, with no egress fees. Prices are published on the product page on the Cloud Temple website:
[Object Storage — pricing](https://www.cloud-temple.com/produits/stockage-objet/).
