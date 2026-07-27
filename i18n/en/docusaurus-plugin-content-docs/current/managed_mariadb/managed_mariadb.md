---
title: Overview
---

# Managed MariaDB <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Explore concepts →</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get up and running quickly by following clear and straightforward instructions.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Start Quickstart →</a>
  </div>
</div>

---

### Overview

**MariaDB Managed (on Kubernetes) by Cloud Temple** is a managed MariaDB database engine solution, hosted on Kubernetes. It complements the managed database engine offerings on virtual machines (referred to here as **MariaDB Managed (on IaaS)**)

This product is suited for clients who have Kubernetes workloads with MariaDB/MySQL databases, or for clients who wish to consolidate many MariaDB database engines on a single Kubernetes cluster (consolidation). It is particularly well-suited for small and medium-sized databases that do not require tuning or specific features. For large-scale databases or those requiring specific tuning, it is preferable to opt for the **MariaDB Managed (on IaaS)** product, which allows for more customizations by our expert DBA teams.

MariaDB engines can be selected in version 11.4 LTS or 11.8 LTS.

All backups use Cloud-Temple S3 storage (SNC-certified) with at-rest encryption.

![Architecture stack](@site/docs/managed_mariadb/images/stack.png)

### Key Benefits

- **Sovereignty and Reversibility** : The solution relies exclusively on open-source standards to avoid any technological dependency and ensure the portability of your applications.
- **Simplicity and Delegation** : The solution allows you to delegate the management of database engines to Cloud-Temple, specifically: updates and backups.

## Deployment Models

We offer two deployment models to meet your needs:  ***StandAlone*** or ***MultiAZ***.

### StandAlone

The ***StandAlone*** model deploys a single instance of the MariaDB engine within a multi-AZ infrastructure.

The storage used by this instance is replicated across 3 AZs, enabling automatic failover of the MariaDB instance to another AZ in the event of a failure.

- **Use case**: This deployment model is ideal for simple applications, such as CMSs, that use a single endpoint to connect to databases.
- **Key points**:
  - 1 database engine instance
  - storage distributed across 3 AZs for automatic failover in case of failure
  - physical (`mariabackup`) and logical (`mysqldump`) backups
  - 99.9% SLA (excluding maintenance windows)

![Architecture StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### MultiAZ

The ***MultiAZ*** model deploys a cluster of 3 MariaDB engine instances, with Galera in "single primary" mode and MaxScale:

- a MaxScale endpoint enables routing to the different instances based on the query type (read or write).
  ![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)
- the read-write (RW) instance is accessible via a specific endpoint.
- The 2 read-only (RO) instances are accessible via another specific endpoint.

Thus, applications can choose to use RW or RO connections, or let MaxScale automatically route to the most appropriate endpoints.

- **Use case**: This deployment model is perfectly suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impacting data ingestion.
- **Key points**:
  - 3 Database engine instances with Galera in "single primary" mode
  - MaxScale proxy for efficient query routing.
  - Storage distributed across 3 AZs for automatic failover in case of failure
  - Physical (`mariabackup`) and logical (`mysqldump`) backups
  - 99.9% SLA (excluding maintenance windows)

![Architecture MultiAZ](@site/docs/managed_mariadb/images/Distributed.png)