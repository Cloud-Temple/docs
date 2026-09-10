---
title: Concepts
sidebar_position: 1
---

# Key Concepts of Managed PostgreSQL

This section presents the fundamental concepts of our **Managed PostgreSQL** service. Understanding these principles will help you get the most out of your managed database, aligning its capabilities with your application needs and security requirements.

## Sovereignty and SecNumCloud Compliance

At the heart of our product lies **digital sovereignty**. The Managed PostgreSQL service is entirely hosted on the Cloud Temple infrastructure, certified **SecNumCloud 3.2** by ANSSI.

- **100% Hosting in France** : Your data remains on national territory, shielded from extraterritorial laws.
- **Native Compliance** : The solution is designed to meet the strictest regulatory requirements (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source and Reversibility** : By leveraging the open source Kubernetes operator **CloudNative-PG (CNPG)** and **Barman**, we guarantee zero technological dependency (*vendor lock-in*) and full portability of your data and configurations.

## CloudNative-PG (CNPG) Operator

PostgreSQL database lifecycle management on our Kubernetes infrastructure relies on **CloudNative-PG (CNPG)**.

- **Declarative Deployment** : Database configuration is handled via Kubernetes Custom Resource Definitions (CRDs), enabling an Infrastructure-as-Code (IaC) approach via Terraform or Helm.
- **Built-in High Availability** : CNPG automatically manages primary node election and seamless failover (*failover*).
- **Native Monitoring** : Detailed metrics are natively exported to Prometheus, facilitating the creation of Grafana dashboards.

## Deployment Models

We offer three models to adapt to the criticality of your workloads:

### 1. StandAlone

This model deploys a **single instance** of the PostgreSQL engine.

- **Use case** : Development, staging, or applications that do not require high availability.
- **Resilience** : Since the underlying storage is persistent and managed by Kubernetes, the pod can be automatically restarted on another node in the event of host hardware failure.

### 2. Replica

This template deploys a **cluster of 3 instances** PostgreSQL (one primary, two replicas).

- **Asynchronous Replication** : Data is replicated via continuous streaming (asynchronous). This provides excellent performance while ensuring a copy of the data on the replicas with minimal lag.
- **Automatic Failover** : In the event of a primary failure, CNPG automatically promotes the most up-to-date replica to ensure service continuity.

### 3. Enterprise

This model deploys a PostgreSQL **3-instance cluster** optimized for **critical high availability**.

- **Synchronous Replication** : Replication is configured synchronously across at least 2 nodes (`any 2`) with a durability guarantee (`dataDurability: preferred`). 
- **Durability** : A `COMMIT` is only confirmed to the application once the data has been successfully written to both the primary AND a replica, ensuring that no committed transaction will be lost in the event of a hardware failure, without blocking the database if a node is temporarily unavailable.

## Backup and Restoration (PITR)

Your data protection is ensured by the **Barman Cloud** plugin, fully integrated into the operator.

1. **Continuous WAL Archiving** :
    - Each transaction log (*WAL*) segment is archived in real-time to a SecNumCloud-certified S3 Object Storage.
    - Compression is optimized (e.g., `lz4` or `gzip`) to reduce volume while maintaining good performance.

2. **Scheduled Backups (`ScheduledBackup`)** :
    - Full physical backups are triggered on a scheduled basis (e.g., daily at 02:00).
    - An initial backup is taken immediately upon cluster creation.

These combined mechanisms enable **Point-in-Time Recovery (PITR)** : the ability to restore the entire server to a specific date and time, thereby protecting against human errors or data corruption.

## Multi-Layer Security

- **Network Isolation** : Database instances are deployed in dedicated namespaces and isolated on the client's private network.
- **Encryption** :
  - **In transit** : TLS-encrypted connections.
  - **At rest** : Storage data as well as S3 backups are encrypted.
- **Kubernetes Secrets** : Superuser and application credentials are securely generated and stored as Kubernetes Secrets, retrievable according to strict rules.

## Instance Sizes (T-Shirt Sizes)

Databases have strict limits (CPU and RAM) that correspond to the chosen size.
PostgreSQL internal parameters (`shared_buffers`, `effective_cache_size`, `work_mem`, etc.) are **pre-tuned** for each size to optimize performance and ensure the container never reaches its RAM limit (thus avoiding a Kubernetes OOMKill that would abruptly terminate the service).

| Size | CPU | Memory | shared_buffers | effective_cache_size | work_mem | maintenance_work_mem | max_connections | pgbouncer_default_pool_size | pgbouncer_max_client_conn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1 Core | 4 Gb | 1024MB | 3072MB | 16MB | 128MB | 80 | 8 | 200 |
| **S** | 1 Core | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **M** | 2 Cores | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **L** | 2 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XL** | 4 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XXL** | 4 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **3XL** | 8 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **4XL** | 8 Cores | 64 Gb | 16384MB | 49152MB | 256MB | 2048MB | 500 | 25 | 500 |

> **Note** : *requests* (CPU and RAM) are allocated at 50% of the *limits* configured above.

## Supported PostgreSQL Versions

We support all current major versions, allowing you to choose based on your applications' compatibility:

- **PostgreSQL 13, 14, 15, 16, 17, and 18**.

The CNPG operator handles minor updates seamlessly by applying a rolling update strategy (*rolling update*).