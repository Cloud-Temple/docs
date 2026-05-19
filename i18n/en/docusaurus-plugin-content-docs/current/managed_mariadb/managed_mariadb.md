---
title: Overview
---

import stack from '@site/docs/managed_mariadb/images/stack.png'
import StandAlone from '@site/docs/managed_mariadb/images/StandAlone.png'
import Distributed from '@site/docs/managed_mariadb/images/Distributed.png'
import maxscale from '@site/docs/managed_mariadb/images/maxscale.png'

# Managed MariaDB <span class="title-preview-badge">Preview</span>


<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get started quickly by following clear and simple instructions.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
</div>

---

### Overview
>
> This product is in a preliminary version, and its documentation may contain errors or approximations.

**Managed MariaDB (on Kubernetes) by Cloud Temple** is a managed MariaDB database engine solution hosted on Kubernetes. It complements the managed database engine offerings on virtual machines (referred to here as **Managed MariaDB (on IaaS)**)

This product is suitable for customers running Kubernetes workloads with MariaDB/MySQL databases, or for customers who wish to consolidate multiple MariaDB/PostgreSQL database engines on a single Kubernetes cluster (consolidation). It is particularly well-suited for small and medium-sized databases that do not require tuning or specific features. For large-scale databases or those requiring specific tuning, it is preferable to choose the **Managed MariaDB (on IaaS)** product, which allows for more customization by our DBA expert teams.

MariaDB engines can be selected in version 11.4 LTS or 11.8 LTS.

All backups use Cloud-Temple S3 storage (SNC-certified) with at-rest encryption.

![Architecture stack](@site/docs/managed_mariadb/images/stack.png)

### Key Benefits

- **Sovereignty and Reversibility** : The solution relies exclusively on open source standards to avoid technological dependency and ensure the portability of your applications.
- **Simplicity and Delegation** : The solution enables delegating to Cloud-Temple the management of database engines, specifically: updates and backups.

## Deployment Models

We offer two deployment models to meet your needs:  ***StandAlone*** or ***Distributed***.

### StandAlone

The ***StandAlone*** model deploys a single instance of the MariaDB engine in a multi-AZ infrastructure.

The storage used by this instance is replicated across 3 AZs and allows for automatic restart of the MariaDB instance on another AZ in case of failure.

- **Use case**: This deployment model is perfectly suited for simple applications, such as CMSs, which use only a single endpoint to connect to databases.
- **Key points**:
  - 1 database engine instance
  - storage distributed across 3 AZs for automatic recovery in case of failure
  - physical (`mariabackup`) and logical (`mysqldump`) backups
  - 99.9% SLA (excluding maintenance windows)

![Architecture StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### Distributed

The ***Distributed*** model deploys a cluster of 3 MariaDB engine instances, with Galera in "single primary" mode and MaxScale:

- a MaxScale endpoint enables routing to the different instances based on the query type (read or write).
![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)

- the read-write (RW) instance is accessible via a specific endpoint.
- The 2 read-only (RO) instances are accessible via another specific endpoint.

Thus, applications can optionally use RW or RO connections, or let MaxScale automatically route to the most suitable endpoints.

- **Use case** : This deployment model is perfectly suited for applications with distributed access, such as data or business intelligence applications, which benefit from read-only access without impacting data ingestion.
- **Key points** :
  - 3 database engine instances with Galera in "single primary" mode
  - MaxScale proxy for efficient query routing.
  - storage distributed across 3 AZs for automatic failover
  - PiTR and logical backups
  - SLA 99.9 % (excluding maintenance windows)

![Architecture Distributed](@site/docs/managed_mariadb/images/Distributed.png)