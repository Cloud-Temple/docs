---
title: Concepts
---

## Elastic Cloud Storage (ECS): a reference solution

Cloud Temple's object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, recognized for its high performance and adherence to industry standards. With a **97% compatibility with the AWS S3 protocol**, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- Smooth transition to a modern storage infrastructure.

---

## Security commitments and certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- **SecNumCloud**: Qualification delivered by ANSSI, ensuring data sovereignty and security within a French and European framework.
- **HDS (Healthcare Data Hosting)**: Compliance with strict requirements for sensitive medical data.
- **ISO 27001**: Adherence to best practices in information security.

---

## Advanced encryption for optimal protection

Data encryption is systematically applied, ensuring their security at every stage:

- **In transit**: Protection via the __TLS 1.3__ protocol.
- **At rest**: Three options adapted to users' needs:
  - **SSE-ECS**: Keys managed by Cloud Temple for simplified management.
  - **SSE-C**: Keys provided by the client for increased control.
  - **CSE**: Encryption performed by the client for maximum security.

| Encryption Model       | Advantages                              | Disadvantages                     |
| ---------------------- | --------------------------------------- | --------------------------------- |
| **SSE-ECS**            | Simplified and transparent management   | Less control over keys            |
| **SSE-C**              | Full control over keys                  | Key management required           |
| **CSE**                | Maximum security                        | Complexity and impact on performance |

---

## Guaranteed service levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                     | Target                        |
| ------------------------------ | ----------------------------- |
| Availability                   | 99.99% (includes maintenance) |
| Data durability                | 99.99999999%                  |
| Guaranteed network bandwidth   | 1 Gbps                        |

## The storage account

A **Storage Account** is a logical entity that has an **Access Key** and a **Secret Key** used to authenticate and secure interactions with a bucket. Roles and permissions associated with **buckets** are assigned to this account, allowing precise control of access and authorized actions for each user or service.


## The "bucket" in the object storage ecosystem

An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is **a public storage container** in the cloud designed to hold an unlimited amount of data securely, reliably, and highly available. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to organize the storage space logically within Cloud Temple's object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features, such as versioning, data security through access control policies, and immutability.

## Regional deployment type

Cloud Temple's S3 storage natively stores data across __three distinct availability zones__ within a single Cloud Temple region. This architecture is designed to provide high availability and maximum resilience against hardware or software failures:
- Erasure Coding (EC): By default, we use a 12+4 EC scheme, which splits data into 12 data segments and 4 parity segments. This technique allows data to be reconstructed even if several segments are lost.
- Data distribution: EC segments are spread across different nodes and racks, ensuring protection against disk, node, and even entire rack failures.
- Geographic replication: For extra protection, data is replicated across 3 availability zones, offering resilience against local disasters.

This replication ensures that even in the event of a zone failure, the data remains accessible and intact, contributing to a highly resilient storage infrastructure.


## Maximum file size that can be handled with the web console

The web limit is 40MB per file. Beyond that, a native S3 client with the API must be used.

## Does the S3 Cloud Temple offering use the 'PathStyle' method

Due to constraints associated with the SecNumCloud qualification, at this time, the offer is planned to use the '**PathStyle**' method. We are working to ensure the '**UrlStyle**' method is available H1 2025.

## Maximum number of buckets per tenant

The maximum number of buckets per tenant is 999.