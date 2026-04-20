---
title: Overview
---

# Managed PostgreSQL (preview)

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the foundations and essential principles to master our infrastructure.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started</h3>
    <p>Get started quickly by following clear and simple instructions.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
</div>

---

### Overview
>
> This product is in preview, and its documentation may contain errors or approximations.

**Managed PostgreSQL (on Kubernetes) by Cloud Temple** is a managed PostgreSQL database engine solution, hosted on Kubernetes. It complements the managed database engine offerings on virtual machines (referred to here as **Managed PostgreSQL (on IaaS)**)

This offering is suitable for customers with Kubernetes workloads requiring PostgreSQL databases, or customers who wish to consolidate many PostgreSQL database engines on a single Kubernetes cluster (pooling). It is particularly well-suited for small and medium-sized databases that do not require tuning or specific features. For large databases or those requiring special tuning, it is preferable to opt for the **Managed PostgreSQL (on IaaS)** offering, which allows more customisation by our DBA expert teams.

### Key Benefits

- **Sovereignty and Reversibility**: The solution relies exclusively on open source standards to avoid any technological dependency and guarantee the portability of your applications.
- **Simplicity and delegation**: The solution allows you to delegate to Cloud-Temple the management of database engines, in particular: updates and backups.

## Deployment Models

We offer two deployment models to meet your needs: ***StandAlone*** or ***Distributed***.

### StandAlone

The ***StandAlone*** model deploys a single instance of the PostgreSQL engine in a multi-AZ infrastructure.

The storage used by this instance is replicated across 3 AZs, and allows automatic restart of the PostgreSQL instance on another AZ in the event of a failure.

- **Use case**: This deployment model is perfectly suited for simple applications, such as CMS, which use only a single endpoint to connect to databases.
- **Key points**:
  - 1 database engine instance
  - storage distributed across 3 AZs for automatic recovery in the event of a failure
  - physical and logical backups
  - SLA 99.9% (outside maintenance windows)

### Distributed

The ***Distributed*** model deploys a cluster of 3 instances of the PostgreSQL engine, with Patroni in "single primary" mode and PgBouncer:

- a PgBouncer endpoint allows routing to the different instances depending on the type of request (read or write).
- the read-write (RW) instance is accessible via a specific endpoint.
- Read-only (RO) instances are accessible via another specific endpoint.

Thus, applications can choose to use RW or RO connections, or let PgBouncer route itself to the most appropriate endpoints.

- **Use case**: This deployment model is perfectly suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impact on data ingestion.
- **Key points**:
  - 3 database engine instances with Patroni in "single primary" mode
  - PgBouncer proxy for efficient query routing.
  - storage distributed across 3 AZs for automatic recovery in the event of a failure
  - PiTR and Logical backups
  - SLA 99.9% (outside maintenance windows)

### Common Features

#### Versions

PostgreSQL engines can be chosen from all supported versions (currently 14 to 18) [See "versioning policy" on the official PostgreSQL website](https://www.postgresql.org/support/versioning/)

#### Backup

2 types of backups are implemented:

- Point in Time Restoration (PiTR): daily physical backup of the entire engine and its transaction logs (WAL), allowing the entire server to be restored to a precise earlier date without losing transactions.
- Logical backup (pg_dump): logical database exports, for individual restoration/export per database.

All backups use Cloud-Temple S3 storage (SNC qualified) with at-rest encryption.
