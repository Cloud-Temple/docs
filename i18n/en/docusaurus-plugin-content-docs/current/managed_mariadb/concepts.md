---
title: Concepts
sidebar_position: 1
---

# Key Concepts of Managed MariaDB

This section outlines the core concepts of our **Managed MariaDB** service. Understanding these principles will help you get the most out of your managed database by aligning its capabilities with your application requirements and security requirements.

## Sovereignty and SecNumCloud Compliance

At the core of our product lies **digital sovereignty**. The MariaDB Managed service is fully hosted on the Cloud Temple infrastructure, certified **SecNumCloud 3.2** by ANSSI.

- **100% Hosting in France**: Your data remains on national territory, shielded from extraterritorial laws.
- **Native Compliance**: The solution is designed to meet the strictest regulatory requirements (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source and Reversibility**: By leveraging open standards such as MariaDB Community Server and Galera, we guarantee freedom from technological dependency (*vendor lock-in*) and complete portability of your data.

## High Availability Architecture: Galera Cluster + MaxScale

For distributed environments, our product relies on **Galera Cluster** to provide high availability without data loss.

- **Synchronous Replication** : Unlike traditional asynchronous replication, each transaction is validated across all cluster nodes *before* being confirmed. This ensures a **Recovery Point Objective (RPO) of zero** : no committed data can be lost in the event of a failure.
- **Multi-AZ Distribution** : The cluster is distributed across three distinct Availability Zones (AZ). The failure of an entire datacenter causes no service interruption or data loss.
- **Automatic Failover** : In the event of a node incident, traffic is automatically redirected to healthy nodes, ensuring a **minimal Recovery Time Objective (RTO)**.
- **MaxScale Proxy** : MaxScale is an advanced proxy, router, and load balancer for MariaDB. It handles automatic replication failover, balances queries (writes vers primary, reads vers replicas via ReadWriteSplit), and provides filters for caching, auditing (QLAfilter), or security (RegexFilter).

## Deployment Models

We offer two models to accommodate the criticality of your workloads.

### 1. StandAlone

This model deploys a single instance of the MariaDB engine.

- **Use case**: This deployment model is perfectly suited for simple applications, such as CMSs, which use only a single endpoint to connect to databases.
- **Resilience**: Although it is a single instance, the underlying storage is replicated across 3 AZs, allowing automatic restart on another AZ in case of hardware failure.
- **SLA**: 99.9% (excluding maintenance windows).

### 2. Distributed

This model deploys a **Galera cluster of 3 instances** of the MariaDB engine, complemented by a **MaxScale** proxy.

- **Use Case**: This deployment model is ideally suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impacting data ingestion.
- **Components**:
  - **3 MariaDB Nodes**: One primary read-write (RW) node and two secondary read-only (RO) nodes.
  - **MaxScale Proxy**: An intelligent router that distributes queries. It routes writes to the primary node and distributes reads across all nodes (`ReadWriteSplit`), thereby optimizing performance.
- **SLA**: 99.9% (excluding maintenance windows).

> **Important Note**: It is not possible to change the deployment model of an existing cluster (for example, from *StandAlone* to *Distributed*). This operation requires creating a new cluster in the desired model via a restore.

## Backup and Restoration (PITR)

Your data protection is ensured by a dual backup strategy.

1. **Physical Backup and Point-in-Time Recovery** :
    - We perform complete daily physical backups (`mariabackup`) (without service interruption).
    - With the **distributed** version, transaction logs (*binary logs*) are continuously archived. This combination enables PiTR restoration up to the moment just before an incident.

2. **Logical Backup (`mysqldump`)** :
    - Logical exports of the databases are also performed.
    - They offer fine granularity to restore or export an individual database.

All backups are encrypted at rest and stored on our SecNumCloud-qualified S3 Object Storage.

## Multi-Level Security

Security is integrated into every layer of the service.

- **Network Isolation**: Database instances are **never exposed to the Internet**. Access is exclusively via the client's private network.
- **End-to-End Encryption**:
  - **In transit**: All connections (client to database and between cluster nodes) are encrypted using TLS 1.3.
  - **At rest**: Data on disk (InnoDB tablespaces) and backups are encrypted using AES-256.
- **Access Management**: Authentication is secured (using `ed25519` or `sha256_password` plugins), and permissions are managed according to the principle of least privilege.

## Managed Service ("Zero Ops")

The goal of MariaDB Managed is to offload operational complexity. Our teams handle:

- Provisioning and initial configuration.
- Complete lifecycle management: minor updates, applying security patches.
- 24/7 monitoring of the infrastructure and service.
- Backup management and verification.

This enables your teams to focus on application development and data operations.

## Version Policy & Lifecycle

The MariaDB Foundation releases versions with long-term support (LTS), ensuring stability and predictability. Our service leverages these versions to ensure the long-term viability of your infrastructure.

| Version | Type | Supported Until |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | May 2029 |
| **MariaDB 11.8** | LTS | June 2028 |

- **Minor Updates** : Security patches and bug fixes are applied by our teams via *rolling update* (node by node) to ensure zero service interruption.
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


> **Note**: Storage is provisioned separately and can be scaled up dynamically (from 2Gi to 128Gi) (but not scaled down, except by recreating a new instance.).