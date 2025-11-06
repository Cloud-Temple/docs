---
title: Verantwortlichkeitsmatrix (RACI) - Managed Kubernetes
---

## RACI

### Architecture & Infrastructure

| **Activity**                                                        | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------- | ---------- | ---------------- |
| Define the overall architecture of the Kubernetes service           | C          | RA               |
| Size the Kubernetes service (number of nodes, resources)           | C          | RA               |
| Install the Kubernetes service with default configuration           | I          | RA               |
| Configure the Kubernetes service                                    | C          | RA               |
| Set up the base network for the Kubernetes service                  | I          | RA               |
| Deploy initial configuration for identities and access            | C          | RA               |
| Define scaling and high availability strategy                       | C          | RA               |

### Project and Business Application Management

| **Activity**                                       | **Client** | **Cloud Temple** |
| -------------------------------------------------- | ---------- | ---------------- |
| Create and manage Kubernetes projects              | RA         | I*               |
| Deploy and manage applications in Kubernetes       | RA         | I*               |
| Configure CI/CD pipelines                          | RA         | I*               |
| Manage container images and registries             | RA         | I*               |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.*

### Monitoring and performance

| **Activity**                                    | **Client** | **Cloud Temple** |
| ----------------------------------------------- | ---------- | ---------------- |
| Monitor Kubernetes service performance          | I          | RA               |
| Monitor application performance                 | RA         |                  |
| Manage alerts related to the Kubernetes service | I          | RA               |
| Manage alerts related to applications           | RA         |                  |

### Infrastructure Maintenance and Updates

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Update Kubernetes/OS service                           | C          | RA               |
| Apply security patches to Kubernetes                   | C          | RA               |
| Update deployed applications (operators*)              | C          | RA               |

*Operator package included in Managed Kube – see sections: Managed Helm Packages

### Security

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Manage security for the Kubernetes service                                 | RA         | RA               |
| Configure and manage pod security policies                                   | RA         | I*               |
| Manage SSL/TLS certificates for the Kubernetes service                     | C          | RA               |
| Manage SSL/TLS certificates for applications                                 | RA         | I*               |
| Implement and manage Role-Based Access Control (RBAC)                       | C          | R                |
| Implement and manage Client-Based Role-Based Access Control (RBAC)          | RA         | I*               |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Backup and Disaster Recovery

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Define the backup strategy for the Kubernetes service                      | I          | RA               |
| Implement and manage backups for the Kubernetes service                    | I          | RA               |
| Define the backup strategy for applications                                | RA*        | I*               |
| Implement and manage backups for applications                              | RA*        | I*               |
| Test disaster recovery procedures for the Kubernetes service              | CI         | RA               |
| Test disaster recovery procedures for applications                         | RA*        | CI*              |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Support and Troubleshooting

| **Activity**                                              | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------- | ---------------- |
| Provide level 1 support for infrastructure                | I          | RA               |
| Provide level 2 and 3 support for infrastructure         | I          | RA               |
| Resolve issues related to the Kubernetes service          | C          | RA               |
| Resolve issues related to applications                    | RA         | I                |

### Capacity Management and Evolution

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Monitor Kubernetes resource usage                     | C          | RA               |
| Plan service capacity evolution                       | RA         | C                |
| Implement capacity changes                            | I          | RA               |
| Manage application and resource evolution             | RA         | I                |

### Documentation and Compliance

| **Activity**                                     | **Client** | **Cloud Temple** |
| ------------------------------------------------ | ---------- | ---------------- |
| Maintain Kubernetes service documentation      | I          | RA               |
| Maintain application documentation             | RA         | I                |
| Ensure Kubernetes service compliance           | I          | RA               |
| Ensure application compliance                  | RA         | I                |
| Conduct Kubernetes service audits              | I          | RA               |
| Conduct application audits                     | RA         | I                |

### Basic Kubernetes Operators/CRD Management

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Provisioning of default Operator catalog                     | CI         | RA               |
| Updating Operators                                           | CI         | RA               |
| Monitoring Operator status                                   | CI         | RA               |
| Troubleshooting Operator-related issues                      | CI         | RA               |
| Managing Operator permissions                                | CI         | RA               |
| Managing Operator resources (addition/removal)               | CI         | RA               |
| Backup of Operator resource data                             | CI         | RA               |
| Monitoring Operator resources                                | CI         | RA               |
| Restoration of Operator resource data                        | CI         | RA               |
| Security auditing of Operators                               | CI         | RA               |
| Operator support                                             | CI         | RA               |
| License management for Operators                             | CI         | RA               |
| Management of specific support plans for Operators           | CI         | RA               |

*Operator package included in Managed Kube – see chapters: Managed Helm Packages

### Management of Kubernetes Applications/Operators/CRDs (Business)

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Deployment of CRDs                                          | RA*        | I*               |
| Update of Operators                                         | RA         | I                |
| Monitoring of Operator status                               | RA         | I                |
| Troubleshooting issues related to Operators                 | RA         | I                |
| Management of Operator permissions                          | RA         | I                |
| Management of Operator resources (addition/removal)         | RA         | I                |
| Backup of Operator resource data                            | RA         | I                |
| Monitoring of Operator resources                            | RA         | I                |
| Restoration of Operator resource data                       | RA         | I                |
| Security audit of Operators                                 | RA         | I                |
| Support for Operators                                       | RA         | I                |
| License management for Operators                            | RA         | I                |
| Management of specific support plans for Operators          | RA         | I                |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.*

### Application Support

| **Activity**                                | **Client** | **Cloud Temple** |
| ------------------------------------------- | ---------- | ---------------- |
| Application Support (external service)      | RA         | I                |

Application support may also be provided as part of an additional service.

### RACI (synthetic)

- Cloud Temple: responsible and accountable (RA) for the Kubernetes foundation, cluster security, infrastructure backups, and monitoring.
- Client: responsible and accountable (RA) for application projects, business operators, CI/CD pipelines, and application backups.
- "Gray zone": adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) – billed on a project basis.