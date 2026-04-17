---
title: Overview
---


# Managed MariaDB (preview)

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the foundations and essential principles to master our infrastructure.</p>
    <a href="managed_mariadb/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started</h3>
    <p>Get started quickly by following clear and simple instructions.</p>
    <a href="managed_mariadb/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
</div>

---

### Overview
>
> This product is in preview, and its documentation may contain errors or approximations.

**Managed MariaDB (on Kubernetes) by Cloud Temple** is a managed MariaDB database engine solution, hosted on Kubernetes. It complements the managed database engine offerings on virtual machines (referred to here as **Managed MariaDB (on IaaS)**)

This offering is suitable for customers with Kubernetes workloads using MariaDB/MySQL databases, or customers who wish to consolidate many MariaDB/PostgreSQL database engines on a single Kubernetes cluster (pooling). It is particularly well-suited for small and medium-sized databases that do not require tuning or specific features. For large databases or those requiring special tuning, it is preferable to opt for the **Managed MariaDB (on IaaS)** offering, which allows more customisation by our DBA expert teams.

MariaDB engines can be chosen in version 11.4 LTS or 11.8 LTS.

All backups use Cloud-Temple S3 storage (SNC qualified) with at-rest encryption.

![Stack architecture](@site/docs/managed_mariadb/images/stack.png)

### Key Benefits

- **Sovereignty and Reversibility**: The solution relies exclusively on open source standards to avoid any technological dependency and guarantee the portability of your applications.
- **Simplicity and delegation**: The solution allows you to delegate to Cloud-Temple the management of database engines, in particular: updates and backups.

## Deployment Models

We offer two deployment models to meet your needs: ***StandAlone*** or ***Distributed***.

### StandAlone

The ***StandAlone*** model deploys a single instance of the MariaDB engine in a multi-AZ infrastructure.

The storage used by this instance is replicated across 3 AZs, and allows automatic restart of the MariaDB instance on another AZ in the event of a failure.

- **Use case**: This deployment model is perfectly suited for simple applications, such as CMS, which use only a single endpoint to connect to databases.
- **Key points**:
  - 1 database engine instance
  - storage distributed across 3 AZs for automatic recovery in the event of a failure
  - physical (`mariabackup`) and logical (`mysqldump`) backups
  - SLA 99.9% (outside maintenance windows)

![StandAlone Architecture](@site/docs/managed_mariadb/images/StandAlone.png)

### Distributed

The ***Distributed*** model deploys a cluster of 3 instances of the MariaDB engine, with Galera in "single primary" mode and MaxScale:

- a MaxScale endpoint allows routing to the different instances depending on the type of request (read or write).
![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)
- the read-write (RW) instance is accessible via a specific endpoint.
- The 2 read-only (RO) instances are accessible via another specific endpoint.

Thus, applications can choose to use RW or RO connections, or let MaxScale route itself to the most appropriate endpoints.

- **Use case**: This deployment model is perfectly suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impact on data ingestion.
- **Key points**:
  - 3 database engine instances with Galera in "single primary" mode
  - MaxScale proxy for efficient query routing.
  - storage distributed across 3 AZs for automatic recovery in the event of a failure
  - PiTR and Logical backups
  - SLA 99.9% (outside maintenance windows)

![Distributed Architecture](@site/docs/managed_mariadb/images/Distributed.png)
