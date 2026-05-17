---
title: Concepts
sidebar_position: 1
---

# Key Concepts of Managed PostgreSQL

This section presents the fundamental concepts of our **Managed PostgreSQL** service. Understanding these principles will help you get the most out of your managed database by aligning its capabilities with your application requirements and security standards.

## Sovereignty and SecNumCloud Compliance

At the core of our product lies **digital sovereignty**. The Managed PostgreSQL service is fully hosted on the Cloud Temple infrastructure, certified **SecNumCloud 3.2** by ANSSI.

- **100% France-based hosting**: Your data remains on national territory, shielded from extraterritorial laws.
- **Native compliance**: The solution is designed to meet the strictest regulatory requirements (GDPR, HDS, LPM, NIS2, PCI-DSS).
- **Open Source and Reversibility**: By leveraging open standards such as PostgreSQL Community Server and Patroni, we guarantee no technological dependency (*vendor lock-in*) and full portability of your data.

## High Availability Architecture: Patroni Cluster

For distributed environments, our product relies on **Patroni Cluster** to provide high availability without data loss.

- **Synchronous Replication**: Unlike traditional asynchronous replication, each transaction is committed on all cluster nodes *before* being confirmed. This ensures a **Zero Recovery Point Objective (RPO)**: no committed data can be lost in the event of a failure.
- **Multi-AZ Distribution**: The cluster is distributed across three distinct Availability Zones (AZ). The failure of an entire datacenter results in no service interruption or data loss.
- **Automatic Failover**: In the event of a node failure, traffic is automatically redirected to healthy nodes, ensuring a **minimal Recovery Time Objective (RTO)**.

## Deployment Models

We offer two models to accommodate the criticality of your workloads.

### 1. StandAlone

This model deploys a single instance of the PostgreSQL engine.

- **Use case** : This deployment model is perfectly suited for simple applications, such as CMSs, which use only a single endpoint to connect to databases.
- **Resilience** : Although it is a single instance, the underlying storage is replicated across 3 AZs, allowing automatic restart on another AZ in case of hardware failure.
- **SLA** : 99.9% (excluding maintenance windows).

### 2. Distributed

This model deploys a **Patroni cluster with 3 instances** of the PostgreSQL engine, complemented by a **PgBouncer** proxy.

- **Use case**: This deployment model is ideally suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impacting data ingestion.
- **Components** :
  - **3 PostgreSQL Nodes** : One primary read-write (RW) node and two secondary read-only (RO) nodes.
  - **PgBouncer Proxy** : An intelligent router that distributes queries. It routes writes to the primary node and distributes reads across the secondary nodes (*read/write splitting*), thereby optimizing performance.
- **SLA** : 99.9% (excluding maintenance windows).

> **Important Note** : It is not possible to change the deployment model of an existing cluster (for example, from *StandAlone* to *Distributed*). This operation requires creating a new cluster in the desired model, via a PiTR restore.

## Backup and Restoration (PITR)

Your data protection is ensured by a dual backup strategy.

1. **Physical Backup (Point-in-Time Recovery - PITR)**:
    - We perform complete daily physical backups using `pg_basebackup` (without service interruption).
    - Transaction logs (*WAL*) are continuously archived.
    - This combination enables restoration to the exact second, up to the moment just before an incident.

2. **Logical Backup (`pg_dump`)**:
    - Logical exports of the databases are also performed.
    - They offer fine-grained control to restore or export an individual database.

All backups are encrypted at rest and stored on our S3 Object Storage, which is itself SecNumCloud certified.

## Multi-Level Security

Security is integrated into every layer of the service.

- **Network Isolation**: Database instances are **never exposed to the Internet**. Access is exclusively via the client's private network.
- **End-to-End Encryption**:
  - **In transit**: All connections (client to database and between cluster nodes) are encrypted using TLS 1.3.
  - **At rest**: Data on disk and backups are encrypted using AES-256.
- **Access Management**: Authentication is secured and permissions are managed according to the principle of least privilege.

## Managed Service ("Zero Ops")

The objective of Managed PostgreSQL is to offload operational complexity. Our teams handle:

- Provisioning and initial configuration.
- Full lifecycle management: minor updates, security patch application.
- 24/7 monitoring of the infrastructure and service.
- Backup management and verification.

This allows your teams to focus on application development and data operations.

## Version Policy & Lifecycle

The PostgreSQL community releases versions with long-term support (LTS), ensuring stability and predictability. Our service relies on these versions to ensure the longevity of your infrastructure.

| Version | Type | Supported Until |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Minor Updates** : Security patches and bug fixes are applied by our teams via *rolling update* (node by node) to cause no service interruption.
- **Major Updates** : Major version upgrades are planned in collaboration with you to align with your schedule.
- **End of Support** : We notify you at least 180 days before the end of support for an LTS version to plan the migration to the next version.

## Instance Sizes

***StandAlone*** and ***Distributed*** instances are available with predefined sizes:

| Size | vCPU | Memory | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache | maxconn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1000m | 4096Mi | 2458M | 2 | 256M | 800 | 80 |
| **S** | 1000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **M** | 2000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **L** | 2000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XL** | 4000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XXL** | 4000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **3XL** | 8000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **4XL** | 8000m | 65536Mi | 39320M | 16 | 1G | 10000 | 500 |

> **Note**: Storage is provisioned separately and can be scaled up on the fly (from 2Gi to 128Gi) (but not scaled down, except by recreating a new instance.).