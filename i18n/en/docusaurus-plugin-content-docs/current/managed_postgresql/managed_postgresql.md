---
title: Overview
---

# Managed PostgreSQL <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get started quickly by following clear and simple instructions.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Launch the Quickstart &rarr;</a>
  </div>
</div>

---

### Overview
>
> This product is in a preliminary version, and its documentation may contain errors or inaccuracies.

**Managed PostgreSQL (on Kubernetes) by Cloud Temple** is a managed PostgreSQL database engine solution hosted on Kubernetes. It complements the managed database engine offerings on virtual machines (referred to here as **Managed PostgreSQL (on IaaS)**)

This product is suitable for customers who have Kubernetes workloads requiring PostgreSQL databases, or for customers who wish to consolidate multiple PostgreSQL database engines on a single Kubernetes cluster (consolidation). It is particularly well-suited for small and medium-sized databases that do not require tuning or specific features. For large-scale databases or those requiring specific tuning, it is recommended to choose the **Managed PostgreSQL (on IaaS)** product, which allows for more customization by our DBA expert teams.

### Key Benefits

- **Sovereignty and Reversibility** : The solution relies exclusively on open source standards to avoid technological dependency and ensure the portability of your applications.
- **Simplicity and Delegation** : The solution enables delegating to Cloud-Temple the management of database engines, specifically: updates and backups.

## Deployment Models

We offer two deployment models to meet your needs:  ***StandAlone*** or ***Distributed***.

### StandAlone

The ***StandAlone*** model deploys a single instance of the PostgreSQL engine in a multi-AZ infrastructure.

The storage used by this instance is replicated across 3 AZ, and allows automatic restart of the PostgreSQL instance on another AZ in case of failure.

- **Use case**: This deployment model is perfectly suited for simple applications, such as CMSs, which use only a single endpoint to connect to databases.
- **Key points**:
  - 1 database engine instance
  - storage distributed across 3 AZ for automatic failover in case of failure
  - physical and logical backups
  - 99.9% SLA (excluding maintenance windows)

### Distributed

The ***Distributed*** model deploys a cluster of 3 PostgreSQL database engine instances, with Patroni in "single primary" mode and PgBouncer:

- a PgBouncer endpoint enables routing to the different instances based on the query type (read or write).
- the read-write (RW) instance is accessible via a specific endpoint.
- the read-only (RO) instances are accessible via another specific endpoint.

Thus, applications can choose to use RW or RO connections, or let PgBouncer automatically route to the most suitable endpoints.

- **Use case**: This deployment model is ideally suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impacting data ingestion.
- **Key points**:
  - 3 database engine instances with Patroni in "single primary" mode
  - PgBouncer proxy for efficient query routing.
  - storage distributed across 3 AZs for automatic failover in case of failure
  - PiTR and Logical backups
  - SLA 99.9% (excluding maintenance windows)

### Common Features

#### Versions

PostgreSQL engines can be selected from all supported versions (currently 14 to 18) [See the "versioning policy" on the official PostgreSQL website](https://www.postgresql.org/support/versioning/)

#### Backup

2 types of backups are implemented:

- Point in Time Restoration (PiTR): daily physical backup of the entire engine and its transaction logs (WAL), allowing the entire server to be restored to a specific past date without transaction loss.
- Logical backup (pg_dump): logical exports of databases, for individual restore/export per database.

All backups use Cloud-Temple S3 storage (SNC-qualified) with at-rest encryption.