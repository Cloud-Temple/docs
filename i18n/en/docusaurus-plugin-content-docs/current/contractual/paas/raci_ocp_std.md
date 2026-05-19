---
title: Responsibility Matrix - OpenShift Standard
slug: /contractual/paas/raci-ocp-standard
displayed_sidebar: docSidebar
---


Here is the RACI model defining the allocation of responsibilities between the client and Cloud Temple for the use of the **OpenShift Standard** service.

### Definition of the different roles

We recall here the different RACI roles:

| Role         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Responsible | __R__esponsible for executing the process                                              |
| (A) Accountable | __A__ccountable for approving the process execution                                      |
| (C) Consulted | __C__onsulted during the process                                                       |
| (I) Informed  | __I__nformed of the process results (via tooling, the portal, or messaging)            |

### Initial Setup

| Activity | Client Role | Cloud Temple Role |
| --- | --- | --- |
| Define the overall OpenShift service architecture | C | RA |
| Size the OpenShift service (number of nodes, resources) | C | RA |
| Install the OpenShift service with default configuration | I | RA |
| OpenShift service configuration | RA | C |
| Configure the base network for the OpenShift service | I | RA |
| Deploy the initial identity and access configuration for OpenShift | C | RA |
| Define the scaling and high availability strategy on the infrastructure | C | RA |

### Project and Application Management

| Activity                                          | Client Role | Cloud Temple Role |
| ------------------------------------------------- | ----------- | ----------------- |
| Create and manage OpenShift projects              | RA          | C                 |
| Deploy and manage applications in OpenShift       | RA          | C                 |
| Configure CI/CD pipelines                         | RA          | C                 |
| Manage container images and registries            | RA          | C                 |

### Maintenance and Updates

| Activity                                         | Client Role | Cloud Temple Role |
| ------------------------------------------------ | ----------- | ----------------- |
| Update the OpenShift service                     | RA          | I                 |
| Apply security patches to OpenShift              | RA          | I                 |
| Update deployed applications                     | RA          | I                 |
| Manage container image updates                   | RA          | I                 |

### Monitoring and Performance

| Activity                                             | Client Role | Cloud Temple Role |
| ---------------------------------------------------- | ----------- | ----------------- |
| Monitor OpenShift service performance | RA | I |
| Monitor application performance | RA | I |
| Manage OpenShift service alerts | RA | I |
| Manage application alerts | RA | I |

### Security

| Activity                                                           | Client Role | Cloud Temple Role |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Manage OpenShift service security                                  | RA          | I                 |
| Configure and manage pod security policies                         | RA          | C                 |
| Manage SSL/TLS certificates for the OpenShift service              | RA          | I                 |
| Manage SSL/TLS certificates for applications                       | RA          | C                 |
| Implement and manage role-based access control (RBAC)              | RA          | I                 |

### Backup and Disaster Recovery

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the backup strategy for the OpenShift service                  | RA          | CI                |
| Implement and manage backups for the OpenShift service                | RA          | CI                |
| Define the backup strategy for the applications                     | RA          | CI                |
| Implement and manage backups for the applications                   | RA          | CI                |
| Test disaster recovery procedures for the service                   | RA          | CI                |
| Test disaster recovery procedures for the applications              | RA          | CI                |

### Support and Issue Resolution

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Provide Level 1 support for infrastructure                       | I           | RA                |
| Provide Level 2 and 3 support for infrastructure                 | I           | RA                |
| Resolve OpenShift service issues                                 | RA          | C                 |
| Resolve application issues                                       | RA          | C                 |

### Capacity Management and Evolution

| Activity                                                     | Client Role | Cloud Temple Role |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Monitor OpenShift service resource usage                     | RA          | C                 |
| Plan service capacity evolution                              | RA          | C                 |
| Implement capacity changes                                   | I           | RA                |
| Manage application and resource evolution                    | RA          | C                 |

### Documentation and Compliance

| Activity                                                          | Client Role | Cloud Temple Role |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Maintain OpenShift service documentation                          | I           | RA                |
| Maintain application documentation                                | RA          | I                 |
| Ensure OpenShift service compliance with security standards       | RA          | C                 |
| Ensure application compliance with security standards             | RA          | C                 |
| Conduct OpenShift service audits                                  | RA          | C                 |
| Conduct application audits                                        | RA          | C                 |

### OpenShift Operators Management

**OpenShift operators** are service extensions that automate the management of complex applications or services on Kubernetes/OpenShift.

Under the **OpenShift Standard** service, no limitations on operators are enforced. Only the provision of the **OperatorHub** feature is ensured by **Cloud Temple**. Operators are made available via the Red Hat Marketplace catalog. The installation, monitoring, and management of updates for these operators are handled by the **Client**.
The **Client** is responsible for using these operators to manage their workloads.

| Activity                                                          | Client Role | Cloud Temple Role |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Provisioning of the default Operators catalog                     | CI          | RA                |
| Operators updates                                                 | RA          | CI                |
| Monitoring Operators status                                       | RA          | CI                |
| Troubleshooting Operators issues                                  | RA          | CI                |
| Managing Operators permissions                                    | RA          | CI                |
| Managing Operators resources (ajout/suppression)                  | RA          | CI                |
| Backing up Operators resources data                               | RA          | CI                |
| Supervision and monitoring of Operators resources                 | RA          | CI                |
| Restoring Operators resources data                                | RA          | CI                |
| Operators security audit                                          | RA          | CI                |
| Operators support                                                 | RA          | CI                |
| Managing licenses and license contracts for operators             | RA          | I                 |
| Managing specific support plans for operators                     | RA          | I                 |

> **Important note** :
>
> - Any **damage** caused by the installation of an **operator** or resulting from a **client operation** is the responsibility of the **Client**.
> - The management of **licenses** and **specific support plans** for operators is not the responsibility of **Cloud Temple**.

---

### Clarification on Application Support

**Application Support (Complementary Service) :**

Application support regarding the development, configuration, management, and maintenance of applications **is not the responsibility of Cloud Temple**. The scope focuses solely on the management of **the underlying infrastructure for the OpenShift service**. **Workload support**, **cluster management down to the operating system**, **operator management**, and **CI/CD pipelines** are the **responsibility of the client** or any **designated third-party provider** for this task.

| Activity                                           | Client Role | Cloud Temple Role |
| -------------------------------------------------- | ----------- | ----------------- |
| Application Support (Complementary Service)        | RA          | C                 |