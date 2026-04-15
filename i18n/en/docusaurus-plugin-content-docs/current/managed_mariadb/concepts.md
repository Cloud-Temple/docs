---
title: Concepts
sidebar_position: 1
---

# Key Concepts of Managed MariaDB

This section presents the fundamental concepts of our **Managed MariaDB** service. Understanding these principles will help you get the most out of your managed database, aligning its capabilities with your application needs and security requirements.

## Sovereignty and SecNumCloud Compliance

At the heart of our offering is **digital sovereignty**. The Managed MariaDB service is entirely hosted on the Cloud Temple infrastructure, qualified **SecNumCloud 3.2** by the ANSSI.

- **100% French hosting**: Your data remains on national territory, protected from extraterritorial laws.
- **Native compliance**: The solution is designed to meet the strictest regulatory requirements (GDPR, HDS, LPM, NIS2, PCI-DSS).
- **Open Source and Reversibility**: By relying on open standards such as MariaDB Community Server and Galera, we guarantee the absence of technological dependency (*vendor lock-in*) and full data portability.

## High Availability Architecture: Galera Cluster + MaxScale

For distributed environments, our service relies on **Galera Cluster** to offer high availability without data loss.

- **Synchronous Replication**: Unlike traditional asynchronous replication, each transaction is validated on all cluster nodes *before* being confirmed. This guarantees a **Recovery Point Objective (RPO) of zero**: no validated data can be lost in the event of a failure.
- **Multi-AZ Distribution**: The cluster is spread across three distinct Availability Zones (AZ). The failure of an entire datacenter causes no service interruption or data loss.
- **Automatic Failover**: In the event of an incident on a node, traffic is automatically redirected to healthy nodes, ensuring a **minimal Recovery Time Objective (RTO)**.
- **MaxScale Proxy**: MaxScale is an advanced proxy, router and load balancer for MariaDB. It manages automatic failover in replication, balances requests (writes to primary, reads to replicas via ReadWriteSplit) and offers filters for cache, audit (QLAfilter) or security (RegexFilter).

## Deployment Models

We offer two models to adapt to the criticality of your workloads.

### 1. StandAlone

This model deploys a single instance of the MariaDB engine.

- **Use case**: This deployment model is perfectly suited for simple applications, such as CMS, which use only a single endpoint to connect to databases.
- **Resilience**: Although it is a single instance, the underlying storage is replicated across 3 AZs, allowing automatic restart on another AZ in the event of hardware failure.
- **SLA**: 99.9% (outside maintenance windows).

### 2. Distributed

This model deploys a **Galera cluster of 3 instances** of the MariaDB engine, supplemented by a **MaxScale** proxy.

- **Use case**: This deployment model is perfectly suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impact on data ingestion.
- **Components**:
  - **3 MariaDB Nodes**: One primary read-write (RW) node and two secondary read-only (RO) nodes.
  - **MaxScale Proxy**: An intelligent router that distributes requests. It sends writes to the primary node and distributes reads across all nodes (`ReadWriteSplit`), thus optimising performance.
- **SLA**: 99.9% (outside maintenance windows).

> **Important Note**: It is not possible to change the deployment model of an existing cluster (for example, from *StandAlone* to *Distributed*). This operation requires the creation of a new cluster in the desired model, via a restore.

## Backup and Restoration (PITR)

The protection of your data is ensured by a dual backup strategy.

1. **Physical Backup and Point-in-Time Recovery**:
    - We perform daily complete physical backups (`mariabackup`) (without service interruption).
    - With the **distributed** version, transaction logs (*binary logs*) are continuously archived. This combination allows a PiTR restore up to the moment just before an incident.

2. **Logical Backup (`mysqldump`)**:
    - Logical exports of databases are also performed.
    - They offer fine granularity to restore or export an individual database.

All backups are encrypted at rest and stored on our S3 Object Storage, itself SecNumCloud qualified.

## Multi-Level Security

Security is integrated at every layer of the service.

- **Network Isolation**: Database instances are **never exposed on the Internet**. Access is exclusively via the client's private network.
- **End-to-end encryption**:
  - **In transit**: All connections (client to database and between cluster nodes) are encrypted in TLS 1.3.
  - **At rest**: Data on disk (InnoDB tablespaces) and backups are encrypted in AES-256.
- **Access Management**: Authentication is secure (`ed25519` or `sha256_password` plugins), and rights are managed according to the principle of least privilege.

## Managed Service ("Zero Ops")

The goal of Managed MariaDB is to relieve you of operational complexity. Our teams ensure:

- Provisioning and initial configuration.
- Full lifecycle management: minor updates, application of security patches.
- 24/7 monitoring of the infrastructure and service.
- Management and verification of backups.

This allows your teams to focus on application development and data exploitation.

## Version Policy & Lifecycle

The MariaDB Foundation publishes versions with long-term support (LTS), which guarantees stability and predictability. Our service relies on these versions to ensure the longevity of your infrastructure.

| Version | Type | Supported until |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | May 2029 |
| **MariaDB 11.8** | LTS | June 2028 |

- **Minor updates**: Security patches and bug fixes are applied by our teams in *rolling update* (node by node) to cause no service interruption.
- **Major updates**: Major version upgrades are planned in collaboration with you to align with your schedule.
- **End of support**: We notify you at least 180 days before the end of support of an LTS version to plan the migration to the next version.

## Instance sizes

***StandAlone*** and ***Distributed*** instances are available in predefined sizes:

| Size | vCPU/node | RAM/node | Max Conn | Working Set Max | Total DB Max |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Micro** | 1 | **2.00 Gi** | **40** | **1-2 GiB** | **2-8 GiB** |
| **Small** | 1 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Medium** | 2 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Med-Large**| 2 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **Large** | 4 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **X-Large** | 4 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **2X-Large**| 8 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **3X-Large**| 8 | **32.00 Gi** | **500** | **16-40 GiB** | **64-128 GiB** |
| **4X-Large**| 16 | **32.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **5X-Large**| 16 | **64.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **6X-Large**| 32 | **128.00 Gi**| **500** | **64-160 GiB** | **256-512 GiB** |

> **Note**: Storage is provisioned separately and can be increased live (from 2Gi to 512Gi) (but not reduced, except by recreating a new instance).
