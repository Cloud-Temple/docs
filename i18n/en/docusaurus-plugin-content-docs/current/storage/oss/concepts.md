---
title: Concepts
---

## Elastic Cloud Storage (ECS): a reference solution

Cloud Temple's object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, known for its high performance and adherence to industry standards. With **97% compatibility with the AWS S3 protocol**, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- Smooth transition to a modern storage infrastructure.

---

## Security commitments and certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- **SecNumCloud**: Qualification granted by ANSSI, ensuring data sovereignty and security within a French and European framework.
- **HDS (Health Data Hosting)**: Compliance with strict requirements for sensitive medical data.
- **ISO 27001**: Adherence to best practices in information security.

## Advanced encryption for optimal protection

Data encryption is applied systematically, ensuring their security at every stage:

- **In transit**: Protection via the __TLS 1.3__ protocol.
- **At rest**: Three options tailored to user needs:
  - **SSE-ECS**: Keys managed by Cloud Temple for simplified management.
  - **SSE-C**: Keys provided by the client for increased control.
  - **CSE**: Encryption performed by the client for maximum security.

| Encryption model               | Advantages                          | Disadvantages                    |
| ------------------------------ | ------------------------------------ | -------------------------------- |
| **SSE-ECS**                    | Simplified and transparent management| Less control over the keys       |
| **SSE-C**                      | Complete control over the keys       | Key management necessary         |
| **CSE**                        | Maximum security                     | Complexity and impact on performance|

---

## Architecture and deployment

### Region-type deployment

Cloud Temple's S3 storage natively stores data across __three distinct availability zones__ within the same Cloud Temple region. This architecture is designed to offer high availability and maximum resilience to hardware or software failures:
- Erasure Coding (EC): By default, we use a 12+4 EC schema, which divides data into 12 data segments and 4 parity segments. This technique allows data reconstruction even in case of loss of multiple segments.
- Data distribution: EC segments are spread across different nodes and racks, ensuring protection against disk, node, and even entire rack failures.
- Geographic replication: For additional protection, data is replicated across 3 availability zones, offering resilience against local disasters.

This replication ensures that even in the event of a zone failure, data remains accessible and intact,
contributing to a highly resilient storage infrastructure.

---

## Performance and service levels

### Guaranteed service levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                       | Target                           |
| -------------------------------- | ------------------------------- |
| Availability                     | 99.99% (includes maintenance)   |
| Data durability                  | 99.99999999%                    |
| Guaranteed network bandwidth     | 1 Gbps                          |

### Object storage limitations

Cloud Temple provides an object storage solution with the following technical characteristics:

• **Maximum number of buckets per tenant**: The maximum number of buckets per tenant is 999.

• **Maximum bucket size**: The maximum size of an object is 5 TB.

• **Number of simultaneous connections**: No specific limit.

• **Upload performance**:
  - Up to 100Gbps ingress
  - Up to 100Gbps egress

---

## Storage concepts and organization

### The storage account

A **Storage Account** is a logical entity that possesses an **Access Key** and a **Secret Key** used to authenticate and secure interactions with a bucket.
Roles and permissions associated with **buckets** are positioned on this account, allowing precise control over access and authorized actions for each user or service.

### The "bucket" in the object storage ecosystem

An S3 bucket, popularized by Amazon's Simple Storage Service (Amazon S3), is a **public cloud storage container** designed to hold an unlimited amount of data securely, reliably, and highly available. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to logically organize storage space within Cloud Temple's object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features, such as version management, data security through access control policies, and immutability options.

### Does the Cloud Temple S3 offering use the 'PathStyle' method?

Due to the constraints associated with SecNumCloud qualification, at this time, the offering is intended to use the '**PathStyle**' method. We are working to make the '**UrlStyle**' method available in Q1 2025.

### Pre-signed requests

Cloud Temple's object storage supports **pre-signed requests**, an essential feature that allows generating temporary URLs providing access to specific objects for a limited duration. This feature is particularly useful for securely sharing files with external users without granting them permanent rights or access credentials to the bucket. Pre-signed requests can be configured with a precise validity duration, offering granular control over data access.