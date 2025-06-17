---
title: Responsibility Matrix - OpenShift Standard
---

Here is the RACI model defining the distribution of responsibilities between the client and Cloud Temple for the use of the **OpenShift Standard** offer.

### Definition of the different roles

We recall here the different RACI roles:

| Role         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Responsible | __R__ealizes the process                                                              |
| (A) Approves | __A__pproves the realization of the process                                              |
| (C) Consulted | __C__onsulted during the process                                                     |
| (I) Informed  | __I__nformed of the results of the process (via the tooling, the portal or the messaging) |

### Initial Setup

| Activity                                                                                 | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall architecture of the OpenShift service                                 | C           | RA                |
| Size the OpenShift service (number of nodes, resources)                                 | C           | RA                |
| Install the OpenShift service with a default configuration                               | I           | RA                |
| Configure the OpenShift service                                                          | RA          | C                 |
| Configure the base network for the OpenShift service                                     | I           | RA                |
| Deploy the initial configuration for identities and access for OpenShift                | C           | RA                |
| Define the scaling and high availability strategy on the infrastructure                 | C           | RA                |

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
| Manage updates for container images              | RA          | I                 |

### Monitoring and Performance

| Activity                                             | Client Role | Cloud Temple Role |
| ---------------------------------------------------- | ----------- | ----------------- |
| Monitor the performance of the OpenShift service     | RA          | I                 |
| Monitor the performance of applications              | RA          | I                 |
| Manage alerts related to the OpenShift service       | RA          | I                 |
| Manage alerts related to applications                | RA          | I                 |

### Security

| Activity                                                           | Client Role | Cloud Temple Role |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Manage the security of the OpenShift service                       | RA          | I                 |
| Configure and manage pod security policies                         | RA          | C                 |
| Manage SSL/TLS certificates for the OpenShift service              | RA          | I                 |
| Manage SSL/TLS certificates for applications                       | RA          | C                 |
| Implement and manage Role-Based Access Control (RBAC)              | RA          | I                 |

### Backup and Disaster Recovery

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the backup strategy for the OpenShift service                  | RA          | CI                |
| Implement and manage backups for the OpenShift service                | RA          | CI                |
| Define the backup strategy for applications                           | RA          | CI                |
| Implement and manage backups for applications                         | RA          | CI                |
| Test disaster recovery procedures for the service                     | RA          | CI                |
| Test disaster recovery procedures for applications                    | RA          | CI                |

### Support and Problem Resolution

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Provide level 1 support for the infrastructure                   | I           | RA                |
| Provide level 2 and 3 support for the infrastructure             | I           | RA                |
| Resolve issues related to the OpenShift service                  | RA          | C                 |
| Resolve issues related to applications                           | RA          | C                 |

### Capacity Management and Evolution

| Activity                                                     | Client Role | Cloud Temple Role |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Monitor resource usage of the OpenShift service              | RA          | C                 |
| Plan the evolution of service capacity                       | RA          | C                 |
| Implement capacity changes                                   | I           | RA                |
| Manage application evolution and their resources             | RA          | C                 |

### Documentation and Compliance

| Activity                                                          | Client Role | Cloud Temple Role |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Maintain the OpenShift service documentation                      | I           | RA                |
| Maintain the application documentation                            | RA          | I                 |
| Ensure OpenShift service compliance with security standards       | RA          | C                 |
| Ensure application compliance with security standards             | RA          | C                 |
| Conduct OpenShift service audits                                  | RA          | C                 |
| Conduct application audits                                        | RA          | C                 |

### OpenShift Operators Management

**OpenShift operators** are extensions of the service that automate the management of complex applications or services on Kubernetes/OpenShift.

In the context of the **OpenShift Standard** service, no restrictions are applied to operators. Only the availability of the **OperatorHub** feature is ensured by **Cloud Temple**. Operators are made available through the Red Hat marketplace catalog. The installation, monitoring, and management of updates for these operators are handled by the **Client**. The **Client** is responsible for using these operators to manage its workloads.

| Activity                                                          | Client Role | Cloud Temple Role |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Provisioning of the default Operator catalog                      | CI          | RA                |
| Updating Operators                                                | RA          | CI                |
| Monitoring the status of Operators                                | RA          | CI                |
| Resolving issues related to Operators                             | RA          | CI                |
| Managing Operator permissions                                     | RA          | CI                |
| Managing Operator resources (addition/removal)                    | RA          | CI                |
| Backup of Operator resource data                                  | RA          | CI                |
| Monitoring of Operator resources                                  | RA          | CI                |
| Restoration of Operator resource data                             | RA          | CI                |
| Security audit of Operators                                       | RA          | CI                |
| Support for Operators                                             | RA          | CI                |
| Management of licenses and license contracts for operators        | RA          | I                 |
| Management of specific support plans for operators                | RA          | I                 |

> **Important note**:
>
> - Any **damage** caused by the installation of an **operator** or resulting from a **client's operation** is the responsibility of the **Client**.
> - The management of **licenses** and **specific support plans** for operators is not the responsibility of **Cloud Temple**.

---

### Clarification on application support

**Application support (complementary service):**

Application support regarding the development, configuration, management, and maintenance of applications **is not under the responsibility of Cloud Temple**. The scope focuses exclusively on the management of the **underlying infrastructure of the OpenShift service**. The **workload support**, **cluster management up to the operating system**, **operator management**, and **CI/CD pipelines** are the **responsibility of the client** or any **third-party provider designated** for this task.

| Activity                                           | Client Role | Cloud Temple Role |
| -------------------------------------------------- | ----------- | ----------------- |
| Application support (complementary service) | RA          | C                 |

---