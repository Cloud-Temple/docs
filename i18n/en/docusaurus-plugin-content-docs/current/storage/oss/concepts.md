---
title: Concepts
---

## Elastic Cloud Storage (ECS): A Benchmark Solution

Cloud Temple's object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__, known for its high performance and adherence to industry standards. With **97% compatibility with the AWS S3 protocol**, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- A smooth transition to a modern storage infrastructure.

---

## Security Commitments and Certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- **SecNumCloud**: Qualification issued by ANSSI, ensuring data sovereignty and security within a French and European framework.
- **HDS (Health Data Hosting)**: Compliance with strict requirements for sensitive medical data.
- **ISO 27001**: Adherence to best practices in information security.

## Advanced Encryption for Optimal Protection

Data encryption is systematically applied, ensuring security at every step:

- **In transit**: Protection via the __TLS 1.3__ protocol.
- **At rest**: Three options tailored to users' needs:
  - **SSE-ECS**: Keys managed by Cloud Temple for simplified management.
  - **SSE-C**: Keys provided by the client for increased control.
  - **CSE**: Encryption performed by the client for maximum security.

| Encryption Model                | Advantages                         | Disadvantages                    |
| ------------------------------- | ---------------------------------- | --------------------------------- |
| **SSE-ECS**                     | Simplified and transparent management | Less control over keys           |
| **SSE-C**                       | Total control over keys            | Key management required          |
| **CSE**                         | Maximum security                   | Complexity and performance impact |

---

## Architecture and Deployment

### Region-Type Deployment

Cloud Temple's S3 storage natively stores data across [**three distinct availability zones**](../../additional_content/concepts_az.md) within the same Cloud Temple [region](../../additional_content/concepts_regional.md). This architecture is designed to offer high availability and maximum resilience against hardware or software failures:
- Erasure Coding (EC): By default, we use a 12+4 EC scheme, which divides data into 12 data segments and 4 parity segments. This technique allows data reconstruction even in case of loss of multiple segments.
- Data Distribution: The EC segments are distributed across different nodes and racks, ensuring protection against disk, node, and even entire rack failures.
- Geographic Replication: For additional protection, data is replicated across 3 availability zones, offering resilience against local disasters.

This replication ensures that even in the event of a zone failure, the data remains accessible and intact,
thus contributing to a highly resilient storage infrastructure.

---

## Performance and Service Levels

### Guaranteed Service Levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                     | Target                         |
| ------------------------------ | ------------------------------ |
| Availability                   | 99.99% (including maintenance) |
| Data Durability                | 99.99999999%                   |
| Guaranteed Network Bandwidth   | 1 Gbp/second                   |

### Object Storage Limitations

Cloud Temple offers an object storage solution with the following technical characteristics:

• **Maximum number of buckets per tenant**: The maximum number of buckets per tenant is 999.

• **Limit per bucket size**: The maximum size of an object is 5 TB.

• **Number of concurrent connections**: No specific limit.

• **Upload performance**:
  - Up to 100Gb/s ingress
  - Up to 100Gb/s egress

---

## Storage Concepts and Organization

### The Storage Account

A **Storage Account** is a logical entity that possesses an **Access Key** and a **Secret Key** used to authenticate and secure interactions with a bucket.
Roles and permissions associated with **buckets** are assigned to this account, allowing precise control over access and authorized actions for each user or service.

### The "bucket" in the Object Storage Ecosystem

An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is **a public storage container** in the cloud designed to store an unlimited amount of data securely, reliably, and with high availability. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to logically organize storage within Cloud Temple's object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features, such as versioning, data security through access control policies, and immutability options.

### Does the Cloud Temple S3 Offering Use the 'PathStyle' Method

Due to the constraints associated with the SecNumCloud qualification, currently, the offering is designed to use the '**PathStyle**' method. We are working to ensure that the '**UrlStyle**' method is available in Q1 2025.

### Pre-Signed Requests

Cloud Temple's object storage supports **pre-signed requests**, an essential feature that allows generating temporary URLs granting access to specific objects for a limited duration. This feature is particularly useful for securely sharing files with external users without granting them permanent rights or bucket access credentials. Pre-signed requests can be configured with a precise validity period, thus offering granular control over data access.