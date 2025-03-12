---
title: Concepts
---

## Elastic Cloud Storage (ECS): a reference solution

Cloud Temple's object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, recognized for its high performance and compliance with industry standards. With __97% compatibility with the AWS S3 protocol__, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- A smooth transition to a modern storage infrastructure.

---

## Security commitments and certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- __SecNumCloud__: Qualification issued by ANSSI, ensuring data sovereignty and security within a French and European framework.
- __HDS (Health Data Hosting)__: Compliance with strict requirements for sensitive medical data.
- __ISO 27001__: Adherence to best practices in information security.

## Advanced encryption for optimal protection

Data encryption is systematically applied, ensuring their security at every stage:

- __In transit__: Protection via the __TLS 1.3__ protocol.
- __In storage__: Three options adapted to users' needs:
  - __SSE-ECS__: Keys managed by Cloud Temple for simplified management.
  - __SSE-C__: Keys provided by the client for increased control.
  - __CSE__: Encryption performed by the client for maximum security.

| Encryption model         | Advantages                              | Disadvantages                     |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| __SSE-ECS__                  | Simplified and transparent management     | Less control over keys   |
| __SSE-C__                    | Total control over keys            | Key management required       |
| __CSE__                      | Maximum security                      | Complexity and impact on performance |

---

## Architecture and deployment

### Region-type deployment

Cloud Temple S3 storage natively stores data across [__three distinct availability zones__](../../additional_content/concepts_az.md) within the same Cloud Temple [region](../../additional_content/concepts_regional.md). This architecture is designed to offer high availability and maximum resilience against hardware or software failures:

- Erasure Coding (EC): We use a 12+4 EC scheme by default, which divides data into 12 data segments and 4 parity segments. This technique allows data to be reconstructed even if multiple segments are lost.
- Data distribution: EC segments are distributed across different nodes and racks, providing protection against disk, node, and even entire rack failures.
- Geographic replication: For additional protection, data is replicated across 3 availability zones, offering resilience against local disasters.

This replication ensures that even in the event of a zone failure, data remains accessible and intact,
contributing to a highly resilient storage infrastructure.

---

## Performance and service levels

### Guaranteed service levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                      | Target                         |
| ------------------------------- | ----------------------------- |
| Availability                   | 99.99% (includes maintenance)|
| Data durability          | 99.99999999%                  |
| Guaranteed network bandwidth  | 1 Gbp/second                 |

### Object storage limitations

Cloud Temple offers an object storage solution with the following technical characteristics:

• __Maximum number of buckets per tenant__: The maximum number of buckets per tenant is 999.

• __Size limit per bucket__: The maximum size of an object is 5 TB.

• __Number of simultaneous connections__: No specific limit.

• __Upload performance__:

- Up to 100Gb/s input
- Up to 100Gb/s output

---

## Storage concepts and organization

### The storage account

A __Storage Account__ is a logical entity that has an __Access Key__ and a __Secret Key__ used to authenticate and secure interactions with a bucket.
It is on this account that roles and permissions associated with __buckets__ are positioned, allowing precise control of access and authorized actions for each user or service.

### The "bucket" in the object storage ecosystem

An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is __a public storage container__ in the cloud designed to store an unlimited amount of data securely, reliably, and with high availability. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to organize storage space logically within Cloud Temple's object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features, such as version management, data security via access control policies, and the possibility of immutability.

### Does Cloud Temple's S3 offering use the 'PathStyle' method?

Due to constraints associated with the SecNumCloud qualification, at this time, the offering is designed to use the '__PathStyle__' method. We are working to make the '__UrlStyle__' method available in Q1 2025.

### Pre-signed requests

Cloud Temple's object storage supports __pre-signed requests__, an essential feature that allows generating temporary URLs giving access to specific objects for a limited time. This feature is particularly useful for securely sharing files with external users without assigning them permanent rights or access credentials to the bucket. Pre-signed requests can be configured with a precise validity duration, thus offering granular control over data access.
