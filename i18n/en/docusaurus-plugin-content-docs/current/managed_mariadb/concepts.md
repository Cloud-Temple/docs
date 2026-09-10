---
title: Concepts
sidebar_position: 1
---

# Key Concepts of Managed MariaDB

This section presents the fundamental concepts of our **Managed MariaDB** service. Understanding these principles will help you get the most out of your managed database, aligning its capabilities with your application requirements and security needs.

## Sovereignty and SecNumCloud Compliance

At the heart of our product is **digital sovereignty**. The Managed MariaDB service is fully hosted on the Cloud Temple infrastructure, certified **SecNumCloud 3.2** by ANSSI.

- **100% Hosting in France** : Your data remains on national territory, protected from extraterritorial laws.
- **Native Compliance** : The solution is designed to meet the strictest regulatory requirements (GDPR, HDS, LPM, NIS2, PCI-DSS).
- **Open Source and Reversibility** : By relying on open standards such as MariaDB Community Server and Galera, we guarantee no technological dependency (*vendor lock-in*) and full portability of your data.

## High Availability Architecture: Galera Cluster + MaxScale

For distributed environments, our product relies on **Galera Cluster** to provide high availability without data loss.

- **Synchronous Replication** : Unlike traditional asynchronous replication, each transaction is validated across all cluster nodes *before* being committed. This ensures a **Recovery Point Objective (RPO) of zero** : no committed data can be lost in the event of a failure.
- **Multi-AZ Distribution** : The cluster is distributed across three distinct Availability Zones (AZs). The failure of an entire datacenter results in no service interruption or data loss.
- **Automatic Failover** : In the event of a node incident, traffic is automatically redirected to healthy nodes, ensuring a **minimal Recovery Time Objective (RTO)**.
- **MaxScale Proxy** : MaxScale is an advanced proxy, router, and load balancer for MariaDB. It handles automatic replication failover, balances queries (writes to primary, reads to replicas via ReadWriteSplit), and provides filters for caching, auditing (QLAfilter), or security (RegexFilter).

## Deployment Models

We offer two models to adapt to the criticality of your workloads.

### 1. StandAlone

This model deploys a single instance of the MariaDB engine.

- **Use case** : This deployment model is ideally suited for simple applications, such as CMSs, that use only a single endpoint to connect to databases.
- **Resilience** : Although it is a single instance, the underlying storage is replicated across 3 AZs, enabling an automatic restart on another AZ in the event of a hardware failure.
- **SLA** : 99.9% (excluding maintenance windows).

### 2. MultiAZ

This model deploys a **3-instance Galera cluster** of the MariaDB engine, complemented by a **MaxScale** proxy.

- **Use Case** : This deployment model is perfectly suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impacting data ingestion.
- **Components** :
  - **3 MariaDB Nodes** : One primary read-write (RW) node and two secondary read-only (RO) nodes.
  - **MaxScale Proxy** : An intelligent router that distributes queries. It sends writes to the primary node and distributes reads across all nodes (`ReadWriteSplit`), thereby optimizing performance.
- **SLA** : 99.9% (excluding maintenance windows).

> **Important Note** : It is not possible to change the deployment model of an existing cluster (for example, switching from *StandAlone* to *MultiAZ*). This operation requires creating a new cluster in the desired model, via a restore.

## Backup and Restoration

Your data protection is ensured by a dual backup strategy.

1. **Physical Backup** :
    - We perform complete daily physical backups (`mariabackup`) (without service interruption).

2. **Logical Backup (`mysqldump`)** :
    - Logical exports of the databases are also performed.
    - They offer fine granularity to restore or export an individual database.

All backups are encrypted at rest and stored on our S3 Object Storage, which is SecNumCloud certified.

## Multi-Layer Security

Security is integrated at every layer of the service.

- **Network Isolation** : Database instances are **never exposed to the Internet**. Access is exclusively via the client's private network.
- **End-to-End Encryption** :
  - **In transit** : All connections (client to database and between cluster nodes) are encrypted with TLS 1.3.
  - **At rest** : Data on disk (InnoDB tablespaces) and backups are encrypted with AES-256.
- **Access Management** : Authentication is secured (plugins `ed25519` or `sha256_password`), and permissions are managed according to the principle of least privilege.

## Managed Service ("Zero Ops")

The goal of MariaDB Managed is to relieve you of operational complexity. Our teams handle:

- Provisioning and initial configuration.
- Full lifecycle management: minor updates, application of security patches.
- 24/7 monitoring of the infrastructure and service.
- Management and verification of backups.

This allows your teams to focus on application development and leveraging their data.

## Versioning Policy & Lifecycle

The MariaDB Foundation releases long-term support (LTS) versions, ensuring stability and predictability. Our service relies on these versions to ensure the longevity of your infrastructure.

| Version | Type | Supported until |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | May 2029 |
| **MariaDB 11.8** | LTS | June 2028 |

- **Minor updates** : Security patches and bug fixes are applied by our teams via *rolling update* (node by node) to ensure no service interruption.
- **Major updates** : Major version upgrades are scheduled in collaboration with you to align with your timeline.
- **End of support** : We notify you at least 180 days before the end of support for an LTS version to plan the migration to the next version.

## Instance Sizes

***StandAlone*** and ***MultiAZ*** instances are available with predefined sizes:

| Size | vCPU | Memory | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro** | 1 | 2 GB | 1200M | 1 | 128M | 400 |
| **Small** | 1 | 4 GB | 2458M | 2 | 256M | 800 |
| **Medium** | 2 | 4 GB | 2458M | 2 | 256M | 800 |
| **Med-Large** | 2 | 8 GB | 4915M | 4 | 512M | 1600 |
| **Large** | 4 | 8 GB | 4915M | 4 | 512M | 1600 |
| **X-Large** | 4 | 16 GB | 9830M | 8 | 1G | 3200 |
| **2X-Large** | 8 | 16 GB | 9830M | 8 | 1G | 3200 |
| **3X-Large** | 8 | 32 GB | 19660M | 16 | 1G | 6400 |
| **4X-Large** | 16 | 32 GB | 19660M | 16 | 1G | 10000 |
| **5X-Large** | 16 | 64 GB | 39320M | 16 | 1G | 10000 |
| **6X-Large** | 32 | 128 GB | 78640M | 16 | 1G | 10000 |


> **Note** : Storage is provisioned separately and can be increased on-the-fly (recommended minimum of 2Gi, up to a maximum of 512Gi) (but cannot be reduced, except by creating a new instance.).

### Explanation of Sizing Parameters

MariaDB instances have strict CPU and RAM limits (OOMKill) managed by Kubernetes. If an instance reaches its memory limit, it is restarted, which can cause a service interruption and potentially break cluster replication. This is why the parameters are set according to the instance size to avoid any RAM exhaustion:

- **innodb_buffer_pool_size** : This buffer holds data pages and indexes in memory. It is recommended to operate in memory for better performance (reducing I/O). It is set here to approximately 60% of the instance's RAM size.
- **innodb_buffer_pool_instances** : Divides the buffer pool into multiple "instances" to reduce internal lock contention (when there are many CPU threads).
- **max_allowed_packet** : Maximum size of a packet or result that can be sent/received in a query. Limit adjusted according to instance size to protect memory.
- **table_open_cache** : Number of tables MariaDB can keep open simultaneously. Adjusted based on connections.
> **Important Note** : It is strongly discouraged to enable or use MariaDB's `performance_schema` on small instances (sizes smaller than **X-Large**). It consumes significant resources, particularly critical memory.