---
title: Concepts
---

## Elastic Cloud Storage (ECS): a reference solution

The Cloud Temple object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, recognized for its high performance and compliance with industry standards. With 97% compatibility with the __AWS S3 protocol__, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- A smooth transition to a modern storage infrastructure.

---

## Security commitments and certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- __SecNumCloud__: A qualification issued by ANSSI, ensuring data sovereignty and security within a French and European framework.
- __HDS (Health Data Hosting)__: Compliance with strict requirements for sensitive medical data.
- __ISO 27001__: Adherence to best practices in information security.

## Advanced encryption for optimal protection

Data encryption is applied systematically, ensuring security at every stage:

- __In transit__: Protection via the __TLS 1.3__ protocol.
- __At rest__: Three options tailored to user needs:
  - __SSE-ECS__: Keys managed by Cloud Temple for simplified management.
  - __SSE-C__: Keys provided by the client for enhanced control.
  - __CSE__: Client-side encryption for maximum security.

| Encryption model         | Advantages                              | Disadvantages                     |
| ------------------------ | --------------------------------------- | --------------------------------- |
| __SSE-ECS__             | Simplified and transparent management   | Less control over keys            |
| __SSE-C__               | Full control over keys                  | Key management required           |
| __CSE__                 | Maximum security                        | Complexity and performance impact |

---

## Architecture and deployment

### Region-type deployment

Cloud Temple S3 storage stores data natively across [__three distinct availability zones__](../../additional_content/concepts_az.md) within the same [region](../../additional_content/concepts_regional.md) of Cloud Temple. This architecture is designed to provide high availability and maximum resilience against hardware or software failures:

- Erasure Coding (EC): We use a default EC 12+4 scheme, which splits data into 12 data segments and 4 parity segments. This technique allows data reconstruction even if multiple segments are lost.
- Data distribution: EC segments are spread across different nodes and racks, ensuring protection against disk, node, and even rack failures.
- Geographical replication: For additional protection, data is replicated across 3 availability zones, offering resilience against local incidents.

This replication ensures that even in the event of a zone failure, data remains accessible and intact, contributing to a highly resilient storage infrastructure.

---

## Performance and service levels

### Guaranteed service levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                      | Target                         |
| ------------------------------- | ----------------------------- |
| Availability                    | 99.99% (includes maintenance) |
| Data durability                 | 99,99999999%                  |
| Guaranteed network bandwidth    | 1 Gbps                        |

### Object storage limitations

Cloud Temple offers an object storage solution with the following technical characteristics:

• __Maximum number of buckets per tenant__: The maximum number of buckets per tenant is 999.

• __Bucket size limit__: The maximum object size is 5 TB.

• __Number of simultaneous connections__: No specific limit.

• __Upload performance__:

- Up to 100 Gb/s inbound
- Up to 100 Gb/s outbound

---

## Concepts and storage organization

### The storage account

A __Storage Account__ is a logical entity that has an __Access Key__ and a __Secret Key__ used to authenticate and secure interactions with a bucket. This account is where roles and permissions associated with __buckets__ are set, allowing precise control over access and authorized actions for each user or service.

### The "bucket" in the object storage ecosystem

An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is a __public storage container__ in the cloud designed to securely store an unlimited amount of data in a reliable and highly available manner. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to logically organize storage space within Cloud Temple's object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features such as versioning, data protection through access control policies, and immutability.

### Does the Cloud Temple S3 offering use the 'PathStyle' method?

Due to constraints associated with the SecNumCloud qualification, the offering is planned to use the '__PathStyle__' method. We are working to make the '__UrlStyle__' method available in Q1 2025.

### Pre-signed requests

Cloud Temple object storage supports __pre-signed requests__, a critical feature that allows generating temporary URLs granting access to specific objects for a limited duration. This feature is particularly useful for securely sharing files with external users without granting them permanent rights or bucket access credentials. Pre-signed requests can be configured with a precise validity period, offering granular control over data access.