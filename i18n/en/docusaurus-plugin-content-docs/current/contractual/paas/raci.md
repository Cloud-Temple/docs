---
title: PaaS Responsibility Matrix - OpenShift SecNumCloud
displayed_sidebar: docSidebar
---


Here is the RACI model defining the allocation of responsibilities between the client and Cloud Temple for the use of the OpenShift SecNumCloud PaaS.

## Definition of the different roles

Here is a reminder of the different RACI roles:

| Role         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Responsible | __R__esponsible for executing the process                                              |
| (A) Accountable | __A__ccountable for approving the process execution                                    |
| (C) Consulted   | __C__onsulted during the process                                                       |
| (I) Informed    | __I__nformed of the process results (via tooling, the portal, or messaging)            |

## Initial Setup

| Activity                                                             | Client Role | Cloud Temple Role |
| -------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall OpenShift platform architecture                   | C           | RA                |
| Size the OpenShift platform (number of nodes, resources)             | C           | RA                |
| Install and configure the OpenShift platform                         | I           | RA                |
| Configure the base network for the OpenShift platform                | I           | RA                |
| Set up identity and access management for OpenShift                  | C           | RA                |
| Define the scaling and high availability strategy                    | C           | RA                |

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
| Monitor OpenShift platform performance               | I           | RA                |
| Monitor application performance                      | RA          | I                 |
| Manage platform-related alerts                       | I           | RA                |
| Manage application-related alerts                    | RA          | I                 |

## Security

| Activity                                                           | Client Role | Cloud Temple Role |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Manage OpenShift platform security                                 | I           | RA                |
| Configure and manage pod security policies                         | RA          | C                 |
| Manage SSL/TLS certificates for the platform                       | I           | RA                |
| Manage SSL/TLS certificates for applications                       | RA          | C                 |
| Implement and manage role-based access control (RBAC)              | C           | RA                |

## Backup and Disaster Recovery

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the backup strategy for the OpenShift platform                 | C           | RA                |
| Implement and manage platform backups                                 | I           | RA                |
| Define the backup strategy for applications                         | RA          | C                 |
| Implement and manage application backups                            | RA          | I                 |
| Test disaster recovery procedures for the platform                  | I           | RA                |
| Test disaster recovery procedures for applications                  | RA          | C                 |

## Support and Troubleshooting

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Provide Level 1 support for the OpenShift platform               | I           | RA                |
| Provide Level 2 and 3 support for the OpenShift platform         | I           | RA                |
| Resolve platform-related issues                                  | I           | RA                |
| Resolve application-related issues                               | RA          | C                 |

## Capacity Management and Evolution

| Activity                                                 | Client Role | Cloud Temple Role |
| -------------------------------------------------------- | ----------- | ----------------- |
| Monitor platform resource usage                          | I           | RA                |
| Plan platform capacity evolution                         | C           | RA                |
| Implement capacity changes                               | I           | RA                |
| Manage application evolution and their resources         | RA          | C                 |

## Documentation and compliance

| Activity                                                      | Client Role | Cloud Temple Role |
| ------------------------------------------------------------- | ----------- | ----------------- |
| Maintain OpenShift platform documentation                     | I           | RA                |
| Maintain application documentation                            | RA          | I                 |
| Ensure platform compliance with security standards            | I           | RA                |
| Ensure application compliance with security standards         | RA          | C                 |
| Conduct platform audits                                       | I           | RA                |
| Conduct application audits                                    | RA          | C                 |

### OpenShift Operator Management

**OpenShift operators** are platform extensions that automate the management of complex applications or services on Kubernetes.

Only **Operators** from the **Certified, Red Hat, and Marketplace** catalogs will be offered, provided they are **compliant with SecNumCloud requirements** and adhere to ecosystem limitations.

The installation, monitoring, and update management of these operators are handled by **Cloud Temple**, while the **Client** is responsible for using these operators to manage their workloads.

| Activity                                                        | Client Role | Cloud Temple Role |
| --------------------------------------------------------------- | ----------- | ----------------- |
| Operator provisioning in the catalog                            | CI          | RA                |
| Initial Operator configuration via the Marketplace              | CI          | RA                |
| Operator updates                                                | I           | RA                |
| Monitoring Operator status                                      | I           | RA                |
| Operator issue resolution                                       | CI          | RA                |
| Operator permissions management                                 | C           | RA                |
| Operator resource management (add/remove)                       | CI          | RA                |
| Backup of Operator resource data                                | CI          | RA                |
| Supervision and monitoring of Operator resources                | CI          | RA                |
| Restoration of Operator resource data                           | CI          | RA                |
| Operator security audit                                         | I           | RA                |
| Red Hat Operators support                                       | I           | RA                |
| Certified Operators support                                     | I           | RA                |
| Marketplace Operators support                                   | I           | RA                |
| License and license contract management for operators           | RA          | I                 |
| Specific support plan management for operators                  | RA          | I                 |

> **Important note** :
> Only operators **declared supported** by Cloud Temple and compliant with **SecNumCloud** are made available. Any uncertified operator or one from an external source will not be supported or validated for use in the environments.
> The management of **licenses** and **specific support plans** for operators from the **Red Hat Marketplace** catalog is not the responsibility of **Cloud Temple**. Support management for these operators is de facto delegated to the partner providing the service.
---

### Clarification on Application Support

**Application Support (supplementary service):**

Application support regarding the development, configuration, management, and maintenance of applications **is not the responsibility of Cloud Temple**. The scope focuses solely on managing the OpenShift infrastructure and operators. **Workload support** (deployed applications) and CI/CD pipelines are the responsibility of the client or any designated third-party provider for this task.

| Activity | Client Role | Cloud Temple Role |
| --- | --- | --- |
| Application Support (supplementary service) | RA | C |