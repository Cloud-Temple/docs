---
title: Concepts
---

## Elastic Cloud Storage (ECS): A Benchmark Solution

Cloud Temple's object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, renowned for its high performance and adherence to industry standards. With __97% compatibility with the AWS S3 protocol__, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- A smooth transition to a modern storage infrastructure.

---

## Security Commitments and Certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- __SecNumCloud__: A qualification issued by ANSSI, ensuring data sovereignty and security within a French and European framework.
- __HDS (Health Data Hosting)__: Compliance with strict requirements for sensitive medical data.
- __ISO 27001__: Adherence to best practices in information security management.

## Advanced Encryption for Optimal Protection

Data encryption is systematically applied, ensuring its security at every stage:

- __In transit__: Protection via the __TLS 1.3__ protocol.
- __At rest__: Three options tailored to user needs:
  - __SSE-ECS__: Keys managed by Cloud Temple for simplified management.
  - __SSE-C__: Keys provided by the customer for increased control.
  - __CSE__: Encryption performed by the client for maximum security.

| Encryption Model | Advantages | Disadvantages |
|---|---|---|
| __SSE-ECS__ | Simplified and transparent management | Less control over keys |
| __SSE-C__ | Total control over keys | Key management required |
| __CSE__ | Maximum security | Complexity and performance impact |

---

## Architecture and Deployment

### Region-Type Deployment

Cloud Temple S3 storage natively stores data across [__three distinct availability zones__](../../../../additional_content/concepts_az.md) within the same Cloud Temple [region](../../../../additional_content/concepts_regional.md). This architecture is designed to provide high availability and maximum resilience against hardware or software failures:

- Erasure Coding (EC): By default, we use a 12+4 EC scheme, which divides data into 12 data segments and 4 parity segments. This technique allows data to be reconstructed even if several segments are lost.
- Data Distribution: EC segments are distributed across different nodes and racks, ensuring protection against disk, node, and even entire rack failures.
- Geographic Replication: For additional protection, data is replicated across 3 availability zones, providing resilience against local disasters.

This replication ensures that even if one zone fails, the data remains accessible and intact, contributing to a highly resilient storage infrastructure.

---

## Performance and Service Levels

### Guaranteed Service Levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment | Target |
|---|---|
| Availability | 99.99% (includes maintenance) |
| Data Durability | 99.999999999% |
| Guaranteed Network Bandwidth | 1 Gbp/second |

### Object Storage Limitations

Cloud Temple offers an object storage solution with the following technical specifications:

• __Maximum number of buckets per tenant__: The maximum number of buckets per tenant is 999.

• __Size limit per bucket__: The maximum size of an object is 5 TB.

• __Number of simultaneous connections__: No specific limit.

• __Performance__:

- Up to 1 Gb/s ingress
- Up to 1 Gb/s egress

---

## Storage Concepts and Organization

### The Storage Account

A __Storage Account__ is a logical entity that owns an __Access Key__ and a __Secret Key__ used to authenticate and secure interactions with a bucket.
Roles and permissions associated with __buckets__ are set on this account, allowing for precise control over access and authorized actions for each user or service.

### Types of Storage Accounts

The Cloud Temple Object Storage platform distinguishes between two types of storage accounts, each with a specific role and permission level:

#### 1. Classic Storage Account

This is the standard account type you will create for most of your uses.

*   **Key Management**: For each classic account, you can generate a pair of access keys (`Access Key` and `Secret Key`).
*   **Granular Permissions**: The access rights for this account are defined at the bucket level via Access Control Lists (ACLs). You must explicitly grant it permissions (read, write, etc.) on the buckets it needs to access.

#### 2. Global (Root) Storage Account

Each *namespace* (tenant) has a single global storage account, sometimes called the "root account." This account has extensive administrative privileges.

*   **Full Access**: The global account has full access to all buckets within the namespace, without needing specific permissions assigned to it. It can perform all possible operations on the entire storage service.
*   **Administrative Use**: It is primarily intended for global configuration and administration tasks.
*   **Key Reset**: Given its importance, if the access key and secret key for this account are lost, the platform allows you to reset them to generate new ones.

### The "Bucket" in the Object Storage Ecosystem

An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is a __public cloud storage container__ designed to hold an unlimited amount of data securely, reliably, and with high availability. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to logically organize storage space within Cloud Temple's object storage, and each bucket is identified by a unique user-provided name. S3 buckets offer advanced features, such as versioning, data security through access control policies, and the possibility of immutability.

### Does the Cloud Temple S3 offer use the 'PathStyle' method?

Due to the constraints associated with the SecNumCloud qualification, at this time, the offer is designed to use the '__PathStyle__' method. We are working to make the '__UrlStyle__' method available in H2 2025.

### Pre-signed Requests

Cloud Temple's object storage supports __pre-signed requests__, an essential feature that allows for the generation of temporary URLs providing access to specific objects for a limited time. This feature is particularly useful for securely sharing files with external users without granting them permanent rights or access credentials to the bucket. Pre-signed requests can be configured with a specific validity period, offering granular control over data access.

### Object Immutability (Object Lock)

Cloud Temple's Object Storage, based on Dell ECS, supports immutability via **Object Lock**, in compliance with the S3 standard. This option allows objects to be configured in **WORM (Write Once, Read Many)** mode, protecting them from any modification or deletion for a defined period. This is essential protection for regulatory compliance and defense against ransomware.

#### How it works

Immutability applies to object versions and can be configured in two ways:
*   **Fixed Retention Period**: The object is locked for a specified duration (in days or years).
*   **Legal Hold**: The object is locked indefinitely until the hold is explicitly lifted.

#### Implementation Conditions

*   **Versioning Required**: To enable Object Lock, versioning must be activated on the bucket. Once Object Lock is active, versioning can no longer be disabled.
*   **Activation at Creation**: Immutability must be enabled when the bucket is created, via the S3 API (e.g., with the header `x-amz-bucket-object-lock-enabled: true`).
*   **Two Protection Modes**:
    *   **Governance Mode**: Users with specific permissions can modify or delete retention settings.
    *   **Compliance Mode**: No one, including the root administrator, can modify or delete retention settings. This is the highest level of protection.

#### Main Use Cases

*   **Anti-Ransomware Protection**: Protected backups cannot be encrypted or deleted by an attack, ensuring reliable data restoration.
*   **Regulatory Compliance**: Meets strict data retention requirements in sectors such as finance (FINRA, SEC 17a-4) or healthcare.
