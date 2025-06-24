---
title: PaaS Responsibility Matrix - OpenShift SecNumCloud
---

Here is the RACI model defining the distribution of responsibilities between the client and Cloud Temple for the use of the OpenShift SecNumCloud PaaS.

## Definition of the different roles

Here are the different roles of the RACI:

| Role         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Responsible | __R__esponsible for performing the process                                              |
| (A) Accountable | __A__ccountable for the completion of the process                                       |
| (C) Consulted   | __C__onsulted during the process                                                        |
| (I) Informed    | __I__nformed of the results of the process (via the tooling, the portal or messaging)   |


## Initial Setup

| Activity                                                             | Client Role | Cloud Temple Role |
| -------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall architecture of the OpenShift platform            | C           | RA                |
| Size the OpenShift platform (number of nodes, resources)            | C           | RA                |
| Install and configure the OpenShift platform                        | I           | RA                |
| Configure the base network of the OpenShift platform                | I           | RA                |
| Set up identity and access management for OpenShift                 | C           | RA                |
| Define the scaling and high availability strategy                   | C           | RA                |

## Project and Application Management

| Activity                                          | Client Role | Cloud Temple Role |
| ------------------------------------------------- | ----------- | ----------------- |
| Create and manage OpenShift projects              | RA          | C                 |
| Deploy and manage applications in OpenShift       | RA          | C                 |
| Configure CI/CD pipelines                         | RA          | C                 |
| Manage container images and registries            | RA          | C                 |

## Maintenance and Updates

| Activity                                         | Client Role | Cloud Temple Role |
| ------------------------------------------------ | ----------- | ----------------- |
| Update the OpenShift platform                    | I           | RA                |
| Apply security patches to OpenShift              | I           | RA                |
| Update deployed applications                     | RA          | I                 |
| Manage container image updates                   | RA          | I                 |

## Monitoring and Performance

| Activity                                             | Client Role | Cloud Temple Role |
| ---------------------------------------------------- | ----------- | ----------------- |
| Monitor the performance of the OpenShift platform    | I           | RA                |
| Monitor application performance                    | RA          | I                 |
| Manage alerts related to the platform                | I           | RA                |
| Manage alerts related to applications                | RA          | I                 |

## Security

| Activity                                                           | Client Role | Cloud Temple Role |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Manage the security of the OpenShift platform                      | I           | RA                |
| Configure and manage pod security policies                         | RA          | C                 |
| Manage SSL/TLS certificates for the platform                       | I           | RA                |
| Manage SSL/TLS certificates for applications                       | RA          | C                 |
| Implement and manage role-based access control (RBAC)              | C           | RA                |

## Backup and Disaster Recovery

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the backup strategy for the OpenShift platform                | C           | RA                |
| Implement and manage platform backups                                | I           | RA                |
| Define the backup strategy for applications                          | RA          | C                 |
| Implement and manage application backups                             | RA          | I                 |
| Test disaster recovery procedures for the platform                   | I           | RA                |
| Test disaster recovery procedures for applications                   | RA          | C                 |

## Support and Problem Resolution

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Provide level 1 support for the OpenShift platform               | I           | RA                |
| Provide level 2 and 3 support for the OpenShift platform         | I           | RA                |
| Resolve issues related to the platform                           | I           | RA                |
| Resolve issues related to applications                           | RA          | C                 |

## Capacity Management and Evolution

| Activity                                                 | Client Role | Cloud Temple Role |
| -------------------------------------------------------- | ----------- | ----------------- |
| Monitor platform resource usage                          | I           | RA                |
| Plan platform capacity evolution                         | C           | RA                |
| Implement capacity changes                               | I           | RA                |
| Manage application evolution and their resources         | RA          | C                 |

## Documentation and Compliance

| Activity                                                      | Client Role | Cloud Temple Role |
| ------------------------------------------------------------- | ----------- | ----------------- |
| Maintain OpenShift platform documentation                   | I           | RA                |
| Maintain application documentation                          | RA          | I                 |
| Ensure platform compliance with security standards            | I           | RA                |
| Ensure application compliance with security standards         | RA          | C                 |
| Conduct platform audits                                       | I           | RA                |
| Conduct application audits                                    | RA          | C                 |

### OpenShift Operators Management

**OpenShift Operators** are platform extensions that automate the management of complex applications or services on Kubernetes.

Only **Operators** from the **Certified, Red Hat, and Marketplace** catalogs will be offered provided they are **compliant with SecNumCloud requirements** and respect the limitations of the ecosystem.

The installation, monitoring, and management of updates for these operators are handled by **Cloud Temple**, while the **Client** is responsible for using these operators to manage its workloads.

| Activity                                                        | Client Role | Cloud Temple Role |
| --------------------------------------------------------------- | ----------- | ----------------- |
| Deployment of operators in the catalog                          | CI          | RA                |
| Initial configuration of Operators via the Marketplace          | CI          | RA                |
| Update of Operators                                             | I           | RA                |
| Monitoring of Operator status                                   | I           | RA                |
| Resolution of issues related to Operators                       | CI          | RA                |
| Management of Operator permissions                              | C           | RA                |
| Management of Operator resources (addition/removal)             | CI          | RA                |
| Backup of Operator resource data                                | CI          | RA                |
| Supervision and monitoring of Operator resources                | CI          | RA                |
| Restoration of Operator resource data                           | CI          | RA                |
| Security audit of Operators                                     | I           | RA                |
| Support for Red Hat Operators                                   | I           | RA                |
| Support for Certified Operators                                 | I           | RA                |
| Support for Marketplace Operators                               | I           | RA                |
| Management of licenses and license contracts on operators       | RA          | I                 |
| Management of specific support plans on operators               | RA          | I                 |

> **Important Note** :
> Only the **declared supported** operators by Cloud Temple and compliant with **SecNumCloud** are available. Any operator not certified or coming from an external source will not be supported or validated for use in environments.
> The management of **licenses** and **specific support plans** on operators from the **MarketPlace Red Hat** catalog is not the responsibility of **Cloud Temple**. The support management for these operators is delegated de facto to the partner providing the service.

---

### Clarification on application support

**Application support (complementary service):**

Application support regarding the development, configuration, management, and maintenance of applications **is not the responsibility of Cloud Temple**. The scope focuses only on the management of OpenShift infrastructure and operators. The **support of workloads** (deployed applications) and CI/CD pipelines are the responsibility of the client or any third-party provider designated for this task.

| Activity | Client Role | Cloud Temple Role |
| --- | --- | --- |
| Application support (complementary service) | RA | C |