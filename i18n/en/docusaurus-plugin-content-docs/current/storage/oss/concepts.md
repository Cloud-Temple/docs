

---
title: Concepts
---



## Elastic Cloud Storage (ECS): a reference solution

The Cloud Temple object storage offering is based on Dell's __Elastic Cloud Storage (ECS)__ technology, recognized for its high performance and compliance with industry standards. With __97% compatibility with the AWS S3 protocol__, this solution ensures:

- Easy and standardized integration;
- Increased flexibility for users;
- A smooth transition to a modern storage infrastructure.

---



## Security Commitments and Certifications

Cloud Temple is committed to ensuring data security through recognized certifications:

- __SecNumCloud__: Qualification issued by ANSSI, ensuring data sovereignty and security within a French and European framework.
- __HDS (Health Data Hosting)__: Compliance with strict requirements for sensitive medical data.
- __ISO 27001__: Adherence to best practices in information security.



## Advanced Encryption for Optimal Protection

Data encryption is applied systematically, ensuring their security at every stage:

- __In transit__: Protection via the __TLS 1.3__ protocol.
- __At rest__: Three options adapted to user needs:
  - __SSE-ECS__: Keys managed by Cloud Temple for simplified management.
  - __SSE-C__: Keys provided by the client for increased control.
  - __CSE__: Encryption performed by the client for maximum security.

| Encryption Model         | Advantages                              | Disadvantages                     |
| ------------------------ | --------------------------------------- | --------------------------------- |
| __SSE-ECS__             | Simplified and transparent management   | Less control over keys           |
| __SSE-C__               | Full control over keys                  | Key management required          |
| __CSE__                 | Maximum security                        | Complexity and performance impact |



## Architecture and Deployment



### Regional Deployment

Cloud Temple's S3 storage natively stores data across [__three distinct availability zones__](../../additional_content/concepts_az.md) within the same [region](../../additional_content/concepts_regional.md) of Cloud Temple. This architecture is designed to provide high availability and maximum resilience against hardware or software failures:

- Erasure Coding (EC): We use a default EC 12+4 scheme, which splits data into 12 data segments and 4 parity segments. This technique allows data reconstruction even if multiple segments are lost.
- Data Distribution: EC segments are distributed across different nodes and racks, ensuring protection against disk, node, and even entire rack failures.
- Geographical Replication: For additional protection, data is replicated across 3 availability zones, providing resilience against local incidents.

This replication ensures that even in the event of a zone failure, data remains accessible and intact, contributing to a highly resilient storage infrastructure.

---



## Performance and Service Levels



### Guaranteed Service Levels

Cloud Temple offers a highly reliable infrastructure with clear commitments:

| Commitment                      | Target                         |
| ------------------------------- | ----------------------------- |
| Availability                    | 99.99% (includes maintenance) |
| Data Durability                 | 99,99999999%                  |
| Guaranteed Network Bandwidth    | 1 Gbps/second                 |



### Object Storage Limitations

Cloud Temple offers an object storage solution with the following technical characteristics:

• __Maximum number of buckets per tenant__ : The maximum number of buckets per tenant is 999.

• __Bucket size limit__ : The maximum size of an object is 5 TB.

• __Number of simultaneous connections__ : No specific limit.

• __Performance__ :

- Up to 1 Gb/s input
- Up to 1 Gb/s output

---



## Concepts and Organization of Storage



### The Storage Account

A **Storage Account** is a logical entity that has an **Access Key** and a **Secret Key** used to authenticate and secure interactions with a bucket.  
It is on this account that the roles and permissions associated with the **buckets** are set, allowing precise control over access and authorized actions for each user or service.



### Types of Storage Accounts

The Cloud Object Storage Platform Temple distinguishes two types of storage accounts, each with a specific role and permission level:



#### 1. Classic Storage Account

This is the standard account type you will create for most of your use cases.

*   **Key Management**: For each classic account, you can generate an access key pair (`Access Key` and `Secret Key`).
*   **Granular Permissions**: The access rights of this account are defined at the level of each bucket via access control lists (ACL). You must explicitly grant it permissions (read, write, etc.) on the buckets it needs to access.



#### 2. Global Storage Account (Root)

Each *namespace* (tenant) has a single global storage account, sometimes called "root account". This account has extended administrative privileges.

*   **Total Access**: The global account has full access to all buckets within the namespace, without needing specific permissions. It can perform all possible operations on the entire storage service.
*   **Administrative Use**: It is primarily intended for configuration and global administration tasks.
*   **Key Reset**: Given its importance, if the access key and secret key of this account are lost, the platform allows you to reset them to generate new ones.



### The "bucket" in the object storage ecosystem

An S3 bucket, popularized by the Amazon Simple Storage Service (Amazon S3), is __a public storage container__ in the cloud designed to store an unlimited amount of data securely, reliably, and with high availability. Each S3 bucket can store files (called "objects" in S3), ranging from documents and images to large databases or video files. Buckets are used to logically organize storage space within the Cloud Temple object storage, and each bucket is identified by a unique name provided by the user. S3 buckets offer advanced features, such as versioning, data protection through access control policies, and the possibility of immutability.



### Does the S3 Cloud Temple offer use the 'PathStyle' method?

Due to the constraints associated with the SecNumCloud qualification, the offer is currently planned to use the '__PathStyle__' method. We are working on making the '__UrlStyle__' method available in Q2 2025.



### Pre-signed requests

Cloud Temple object storage supports __pre-signed requests__, a crucial feature that allows generating temporary URLs granting access to specific objects for a limited duration. This feature is particularly useful for securely sharing files with external users without granting them permanent rights or bucket access credentials. Pre-signed requests can be configured with precise validity periods, offering granular control over data access.



### Immutability of Objects (Object Lock)

Cloud Temple's Object Storage, based on Dell ECS, supports the immutability feature via **Object Lock**, in compliance with the S3 standard. This option allows to configure objects in **WORM (Write Once, Read Many)** mode, thus protecting them against any modification or deletion for a defined period. It is an essential protection for regulatory compliance and defense against ransomware.



#### Operation

Immutability applies to object versions and can be configured in two ways:
*   **Fixed retention period**: The object is locked for a determined duration (in days or years).
*   **Legal Hold**: The object is locked indefinitely until the hold is explicitly released.



#### Implementation Conditions

*   **Mandatory Versioning**: To enable Object Lock, versioning must be enabled on the bucket. Once Object Lock is active, versioning cannot be disabled.
*   **Activation at Creation**: Immutability must be enabled at the time of bucket creation, via the S3 API (for example, with the header `x-amz-bucket-object-lock-enabled: true`).
*   **Two Protection Modes**:
    *   **Governance Mode**: Users with specific permissions can modify or delete retention settings.
    *   **Compliance Mode**: No one, including the root administrator, can modify or delete retention settings. This is the highest level of protection.



#### Primary Use Cases

*   **Anti-ransomware Protection** : Protected backups cannot be encrypted or deleted by an attack, ensuring reliable data restoration.
*   **Regulatory Compliance** : Meets strict data retention requirements in sectors such as finance (FINRA, SEC 17a-4) or healthcare.