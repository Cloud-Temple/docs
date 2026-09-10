---
title: Overview
---

# Managed PostgreSQL <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Explore concepts →</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get up and running quickly by following clear and straightforward instructions.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Start the Quickstart →</a>
  </div>
</div>

---

### Overview

**Managed PostgreSQL (on Kubernetes) by Cloud Temple** is a managed PostgreSQL database engine solution, hosted on Kubernetes and based on the **CloudNative-PG (CNPG)** operator. It complements the managed database engine offerings on virtual machines (referred to here as **Managed PostgreSQL (on IaaS)**).

This product is suited for clients with Kubernetes workloads requiring PostgreSQL databases, or for clients who wish to consolidate multiple PostgreSQL database engines on a single Kubernetes cluster. It is particularly well-suited for databases that do not require highly specific system tuning. For very large-scale databases requiring specific OS-level tuning, it is preferable to opt for the **Managed PostgreSQL (on IaaS)** product.

### Key Benefits

- **Sovereignty and Reversibility**: The solution relies exclusively on open-source standards (CNPG, Barman) to avoid any technological dependency and ensure the portability of your applications.
- **Simplicity and Delegation**: The solution allows you to delegate the lifecycle management of database engines to Cloud Temple: provisioning, updates, and continuous backups.

## Deployment Models

We offer three deployment models to meet your needs, ranging from development testing to mission-critical high availability:

### StandAlone

The ***StandAlone*** model deploys a single instance of the PostgreSQL engine.

- **Use case** : This model is perfectly suited for development, staging environments, or simple applications that do not require high availability.
- **Key points** :
  - Single database instance.
  - No high availability at the engine level (although Kubernetes can restart the pod in case of a node failure).
  - Continuous backups (Barman Cloud).

### Replica

The ***Replica*** model deploys a cluster of 3 PostgreSQL engine instances with streaming replication (asynchronous).

- **Use case** : This model provides standard high availability for most production applications, where a slight lag (a few milliseconds) between the primary and replicas is acceptable.
- **Key points** :
  - 3 database instances.
  - Asynchronous replication (high availability).
  - Automatic failover managed by the CNPG operator.

### Enterprise

The ***Enterprise*** model deploys a cluster of 3 PostgreSQL engine instances with **synchronous replication** and a data durability guarantee.

- **Use case** : Designed for critical workloads where no data loss is tolerated in the event of hardware failure.
- **Key points** :
  - 3 database instances.
  - Synchronous replication configured to ensure that at least 2 replicas have persisted the data before confirming a `COMMIT` (*preferred* mode to avoid blocking if a replica is unavailable).
  - Maximum guarantee of consistency and durability.

## Available Engine Types

The solution allows you to deploy different types of PostgreSQL instances based on your needs:

- **PostgreSQL standard** : The classic relational database engine.
- **TimescaleDB** : PostgreSQL with the TimescaleDB extension for optimized time-series data management (Time-Series).
- **PostGIS** : PostgreSQL with the PostGIS spatial extension for geographic data.

## Common Features

#### Versions

PostgreSQL engines are available in all supported major versions (currently from version **13 to 18**).
Extensions such as `pg-crash`, `pgaudit`, `pgvector`, and `postgis` are available within the images.

#### Backup

Backups are natively managed by the **Barman Cloud** plugin integrated into the operator:

- **Continuous WAL Archiving** : Each transaction log (WAL) segment is archived in real-time to our SecNumCloud-certified S3 storage.
- **Scheduled Backups** : Full backups (Point-in-Time Recovery) are performed periodically according to your retention requirements.
- **Security** : All backup data is compressed and stored on our secure S3 infrastructure with encryption.