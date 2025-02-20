---
title: PaaS Responsibility Matrix
---

Here is the RACI model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's PaaS platforms.

## Definition of Different Roles

We recall here the different roles of the RACI:

| Role         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Responsible  | __R__esponsible for executing the process                                          |
| (A) Accountable | __A__pproves the execution of the process                                           |
| (C) Consulted  | __C__onsulted during the process                                                     |
| (I) Informed  | __I__nformed of the process results (via tools, portal, or messaging)                 |


## Initial Setup

| Activity                                                             | Client Role | Cloud Temple Role |
| -------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall architecture of the OpenShift platform            | C           | RA                |
| Size the OpenShift platform (number of nodes, resources)             | C           | RA                |
| Install and configure the OpenShift platform                         | I           | RA                |
| Configure the base network of the OpenShift platform                 | I           | RA                |
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
| Manage the OpenShift platform security                             | I           | RA                |
| Configure and manage pod security policies                         | RA          | C                 |
| Manage SSL/TLS certificates for the platform                       | I           | RA                |
| Manage SSL/TLS certificates for applications                       | RA          | C                 |
| Implement and manage role-based access control (RBAC)              | C           | RA                |

## Backup and Disaster Recovery

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Define the backup strategy for the OpenShift platform                 | C           | RA                |
| Implement and manage platform backups                                 | I           | RA                |
| Define the backup strategy for applications                           | RA          | C                 |
| Implement and manage application backups                              | RA          | I                 |
| Test disaster recovery procedures for the platform                    | I           | RA                |
| Test disaster recovery procedures for applications                    | RA          | C                 |

## Support and Issue Resolution

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Provide level 1 support for the OpenShift platform               | I           | RA                |
| Provide level 2 and 3 support for the OpenShift platform         | I           | RA                |
| Resolve platform-related issues                                  | I           | RA                |
| Resolve application-related issues                               | RA          | C                 |

## Capacity Management and Evolution

| Activity                                                 | Client Role | Cloud Temple Role |
| -------------------------------------------------------- | ----------- | ----------------- |
| Monitor platform resource usage                          | I           | RA                |
| Plan platform capacity evolution                         | C           | RA                |
| Implement capacity changes                               | I           | RA                |
| Manage application evolution and their resources         | RA          | C                 |

## Documentation and Compliance

| Activity                                                       | Client Role | Cloud Temple Role |
| -------------------------------------------------------------- | ----------- | ----------------- |
| Maintain OpenShift platform documentation                      | I           | RA                |
| Maintain application documentation                             | RA          | I                 |
| Ensure platform compliance with security standards             | I           | RA                |
| Ensure application compliance with security standards          | RA          | C                 |
| Conduct platform audits                                        | I           | RA                |
| Conduct application audits                                     | RA          | C                 |