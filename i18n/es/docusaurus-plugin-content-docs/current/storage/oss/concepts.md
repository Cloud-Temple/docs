---
title: Concepts
---

## Elastic Cloud Storage (ECS): A Benchmark Solution

Cloud Temple's object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, renowned for its high performance and adherence to industry standards. With **97% compatibility with the AWS S3 protocol**, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- Smooth transition to a modern storage infrastructure.

---

## Security Commitments and Certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- **SecNumCloud**: Qualification granted by ANSSI, ensuring data sovereignty and security within a French and European framework.
- **HDS (Health Data Hosting)**: Compliance with stringent requirements for sensitive medical data.
- **ISO 27001**: Adherence to best practices in information security.

---

## Advanced Encryption for Optimal Protection

Data encryption is systematically applied, ensuring their security at every stage:

- **In transit**: Protection via the __TLS 1.3__ protocol.
- **At rest**: Three options tailored to user needs:
  - **SSE-ECS**: Keys managed by Cloud Temple for simplified management.
  - **SSE-C**: Keys provided by the client for increased control.
  - **CSE**: Encryption performed by the client for maximum security.

| Encryption Model              | Advantages                              | Disadvantages                     |
| ----------------------------- | --------------------------------------- | --------------------------------- |
| **SSE-ECS**                   | Simplified and transparent management   | Less control over keys            |
| **SSE-C**                    | Full control over the keys              | Key management required            |
| **CSE**                      | Maximum security                       | Complexity and impact on performance |

---

## Guaranteed Service Levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                       | Target                         |
| -------------------------------- | ------------------------------ |
| Availability                     | 99.99% (includes maintenance)  |
| Data durability                  | 99.99999999%                   |
| Guaranteed network bandwidth     | 1 Gbps                         |

## The Storage Account

A **Storage Account** is a logical entity that possesses an **Access Key** and a **Secret Key** used to authenticate and secure interactions with a bucket.

It is on this account that the roles and permissions associated with the **buckets** are positioned, allowing precise control over access and authorized actions for each user or service.


## The "bucket" in the object storage ecosystem
An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is **a public storage container** in the cloud designed to securely, reliably, and highly available store an unlimited amount of data. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to logically organize storage space within Cloud Temple object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features, such as versioning management, data securing via access control policies, and the possibility of immutability.

## Region deployment
Cloud Temple S3 storage natively stores data across __three distinct availability zones__ within the same Cloud Temple region. This architecture is designed to offer high availability and maximum resilience against hardware or software failures:
- Erasure Coding (EC): By default, we use a 12+4 EC scheme, which divides data into 12 data segments and 4 parity segments. This technique allows data to be reconstructed even in the event of multiple segment losses.
- Data Distribution: EC segments are distributed across different nodes and racks, ensuring protection against disk, node, and even entire rack failures.
- Geographic Replication: For additional protection, data is replicated across 3 availability zones, providing resilience against local disasters.

This replication ensures that even in the event of a zone failure, data remains accessible and intact,
contributing to a highly resilient storage infrastructure.