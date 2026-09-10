---
title: Responsibility Matrix (RACI) - Managed Kubernetes
displayed_sidebar: docSidebar
---

## RACI

### Architecture & Infrastructure

| **Activity**                                                        | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------- | ---------- | ---------------- |
| Define the overall Kubernetes service architecture                  | C          | RA               |
| Size the Kubernetes service (number of nodes, resources)            | C          | RA               |
| Install the Kubernetes service with a default configuration         | I          | RA               |
| Configure the Kubernetes service                                    | C          | RA               |
| Configure the base network of the Kubernetes service                | I          | RA               |
| Deploy the initial identity and access configuration                | C          | RA               |
| Define the scaling and high availability strategy                   | C          | RA               |

### Project and Business Application Management

| **Activity**                                       | **Client** | **Cloud Temple** |
| -------------------------------------------------- | ---------- | ---------------- |
| Create and manage Kubernetes projects              | RA         | I*               |
| Deploy and manage applications in Kubernetes       | RA         | I*               |
| Configure CI/CD pipelines                          | RA         | I*               |
| Manage container images and registries             | RA         | I*               |

*These responsibilities can be delegated to Cloud Temple through an additional managed services contract.

### Monitoring and Performance

| **Activity**                                    | **Client** | **Cloud Temple** |
| ----------------------------------------------- | ---------- | ---------------- |
| Monitor Kubernetes service performance          | I          | RA               |
| Monitor application performance                 | RA         |                  |
| Manage Kubernetes service alerts                | I          | RA               |
| Manage application alerts                       | RA         |                  |

### Infrastructure Maintenance and Updates

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Update Kubernetes/OS service                           | C          | RA               |
| Apply security patches to Kubernetes                   | C          | RA               |
| Update deployed applications (operators*)              | C          | RA               |

*Operator package included on Managed Kube - see chapters: Managed Helm Packages

### Security

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Manage Kubernetes service security                                         | RA         | RA               |
| Configure and manage pod security policies                                 | RA         | I*               |
| Manage SSL/TLS certificates for the Kubernetes service                     | C          | RA               |
| Manage SSL/TLS certificates for applications                               | RA         | I*               |
| Implement and manage basic role-based access control (RBAC)                | C          | R                |
| Implement and manage client role-based access control (RBAC)               | RA         | I*               |

*These responsibilities can be delegated to Cloud Temple via an additional managed services contract.

### Backup and Disaster Recovery

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Define the backup strategy for the Kubernetes service              | I          | RA               |
| Implement and manage backups for the Kubernetes service            | I          | RA               |
| Define the backup strategy for applications                   | RA*        | I*               |
| Implement and manage backups for applications                 | RA*        | I*               |
| Test disaster recovery procedures for the Kubernetes service | CI         | RA               |
| Test disaster recovery procedures for applications      | RA*        | CI*              |

*These responsibilities can be delegated to Cloud Temple via a supplementary managed services contract.

### Support and Issue Resolution

| **Activity**                                              | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------- | ---------------- |
| Provide Level 1 support for infrastructure                | I          | RA               |
| Provide Level 2 and Level 3 support for infrastructure    | I          | RA               |
| Resolve Kubernetes service issues                         | C          | RA               |
| Resolve application issues                                | RA         | I                |

### Capacity Management and Evolution

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Monitor Kubernetes resource usage                    | C          | RA               |
| Plan service capacity evolution                      | RA         | C                |
| Implement capacity changes                           | I          | RA               |
| Manage application and resource evolution            | RA         | I                |

### Documentation and Compliance

| **Activity**                                     | **Client** | **Cloud Temple** |
| ------------------------------------------------ | ---------- | ---------------- |
| Maintain Kubernetes service documentation        | I          | RA               |
| Maintain application documentation               | RA         | I                |
| Ensure Kubernetes service compliance             | I          | RA               |
| Ensure application compliance                    | RA         | I                |
| Conduct Kubernetes service audits                | I          | RA               |
| Conduct application audits                       | RA         | I                |

### Basic Kubernetes Operators/CRDs Management

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Provisioning of the default Operator catalog                | CI         | RA               |
| Operator updates                                            | CI         | RA               |
| Monitoring Operator status                                  | CI         | RA               |
| Operator issue resolution                                   | CI         | RA               |
| Operator permissions management                             | CI         | RA               |
| Operator resource management (add/remove)                   | CI         | RA               |
| Backup of Operator resource data                            | CI         | RA               |
| Operator resource monitoring                                | CI         | RA               |
| Restoration of Operator resource data                       | CI         | RA               |
| Operator security audit                                     | CI         | RA               |
| Operator support                                            | CI         | RA               |
| Operator license management                                 | CI         | RA               |
| Management of specific support plans for operators          | CI         | RA               |

*Operator package included on Managed Kube - see chapters: Managed Helm Packages

### Management of Kubernetes applications/operators/CRDs (business)

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Deployment of CRDs                                          | RA*        | I*               |
| Operator updates                                            | RA         | I                |
| Operator status monitoring                                  | RA         | I                |
| Operator issue resolution                                   | RA         | I                |
| Operator permissions management                             | RA         | I                |
| Operator resource management (add/remove)                   | RA         | I                |
| Backup of Operator resource data                            | RA         | I                |
| Operator resource supervision                               | RA         | I                |
| Restoration of Operator resource data                       | RA         | I                |
| Operator security audit                                     | RA         | I                |
| Operator support                                            | RA         | I                |
| Operator license management                                 | RA         | I                |
| Management of specific operator support plans               | RA         | I                |

*These responsibilities can be delegated to Cloud Temple via an additional managed services contract.

### Application Support

| **Activity**                                | **Client** | **Cloud Temple** |
| ------------------------------------------- | ---------- | ---------------- |
| Application support (external service) | RA         | I                |

Application support can also be provided as part of an additional service.

### RACI (summary)

- Cloud Temple: responsible and executor (RA) of the Kubernetes platform, cluster security, infrastructure backup, monitoring.
- Client: responsible and executor (RA) of application projects, business operators, CI/CD pipelines, application backups.
- "Grey" area: adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) - billed on a project basis.