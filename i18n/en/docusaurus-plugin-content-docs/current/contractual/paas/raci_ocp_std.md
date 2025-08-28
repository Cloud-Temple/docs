---
Title: Responsibility Matrix - OpenShift Standard
---

Here is the RACI matrix defining the distribution of responsibilities between the client and Cloud Temple for the use of the **OpenShift Standard** offering.

### Definition of Different Roles

Here we recap the different roles of RACI:

| Role         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realizes  | __R__ealizes the process                                                              |
| (A) Approves   | __A__pproves the realization of the process                                              |
| (C) Consults  | __C__onsulted during the process                                                     |
| (I) Informs    | __I__nformed about the results of the process (via tooling, portal or messaging) |

### Initial Setup

| Activity                                                                                 | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall architecture of the service OpenShift                            | C          | RA               |
| Scale the service OpenShift (number of nodes, resources)                              | C          | RA               |
| Install OpenShift with default configuration                                         | I          | RA               |
| Configure OpenShift service                                                           | RA         | C                |
| Set up the base network infrastructure for OpenShift                                  | I          | RA               |
| Deploy initial identity and access configuration for OpenShift                     | C          | RA               |
| Define scaling and high availability strategy on the infrastructure                  | C          | RA               |

### Project and Application Management

| Activity                               | Client Role | Cloud Temple Role |
| --------------------------------------- | ---------- | ------------------ |
| Create and manage OpenShift projects     | RA         | C                  |
| Deploy and manage applications in OpenShift | RA         | C                  |
| Configure CI/CD pipelines                | RA         | C                  |
| Manage container images and registries  | RA         | C                  |

### Maintenance and Updates

| Activity                                         | Client Role | Cloud Temple Role |
| ------------------------------------------------ | ----------- | ----------------- |
| Update OpenShift service                         | RA         | I                  |
| Apply security patches to OpenShift              | RA         | I                  |
| Update deployed applications                     | RA         | I                  |
| Manage container image updates                   | RA         | I                  |

### Monitoring and Performance

| Activity                                               | Client Role | Cloud Temple Role |
| ----------------------------------------------------- | ----------- | ----------------- |
| Monitor OpenShift service performance                | RA         | I                  |
| Manage alerts related to OpenShift service           | RA         | I                  |
| Manage alerts related to applications               | RA         | I                  |

### Security

| Activity                                                                   | Role Client | Role Cloud Temple |
|-------------------------------------------------------------------------------|-------------|-------------------|
| Manage security of OpenShift service                                         | RA          | I                 |
| Configure and manage security policies for pods                           | RA          | C                 |
| Manage SSL/TLS certificates for OpenShift service                        | RA          | I                 |
| Manage SSL/TLS certificates for applications                            | RA          | C                 |
| Implement and manage Role-Based Access Control (RBAC)                     | RA          | I                 |

### Disaster Recovery and Business Continuity Planning

| Activity                                                                   | Client Role (RA) | Cloud Temple Role (CI) |
|-------------------------------------------------------------------------------|-------------------|-------------------------|
| Define the disaster recovery strategy for OpenShift service               | RA                | CI                    |
| Implement and manage backups for OpenShift service                        | RA                | CI                    |
| Define the disaster recovery strategy for applications                   | RA                | CI                    |
| Implement and manage backups for applications                            | RA                | CI                    |
| Test disaster recovery procedures for OpenShift service                  | RA                | CI                    |
| Test disaster recovery procedures for applications                      | RA                | CI                    |

### Support and Issue Resolution

| Activity                                                                   | Client Role  | Cloud Temple Role |
|-------------------------------------------------------------------------------|--------------|------------------|
| Provide Level 1 support for infrastructure                             | I           | RA               |
| Provide Level 2 and 3 support for infrastructure                     | I           | RA               |
| Resolve issues related to OpenShift service                               | RA          | C                 |
| Resolve application-related issues                                      | RA          | C                 |

### Capacity Management and Evolution

| Activity                                                     | Client Role | Cloud Temple Role |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Monitor resource usage of OpenShift service                | RA          | C                 |
| Plan capacity evolution of the service                      | RA          | C                 |
| Implement capacity changes                                 | I           | RA                |
| Manage application and their resources' evolution         | RA          | C                 |

### Documentation and Compliance

| Activity                                                                   | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------|-------------|--------------------|
| Maintain OpenShift service documentation                                 | I           | RA                |
| Maintain application documentation                                      | RA          | I                 |
| Ensure OpenShift service compliance with security standards              | RA          | C                 |
| Ensure application security compliance with security standards         | RA          | C                 |
| Conduct OpenShift service audits                                        | RA          | C                 |
| Conduct application audits                                            | RA          | C                 |

### Management of OpenShift Operators

**Operators OpenShift** are extensions to the service that automate the management of complex applications or services on Kubernetes/OpenShift.

Within the OpenShift Standard environment, no restrictions apply to operators. The provision of the OperatorHub functionality is handled by **Cloud Temple**. Operators are made available through Red Hat's marketplace catalog. Installation, monitoring, and updating of these operators are managed by the **Client**.

The **Client** is responsible for utilizing these operators to manage its workloads.

| Activity                                                                 | Client Role        | Cloud Temple Role       |
|-------------------------------------------------------------------------|--------------------|-----------------------|
| Providing default Operator catalog                                       | CI                 | RA                     |
| Updating Operators                                                         | RA                 | CI                     |
| Monitoring the state of Operators                                        | RA                 | CI                     |
| Resolving issues related to Operators                                 | RA                 | CI                     |
| Managing permissions for Operators                                      | RA                 | CI                     |
| Managing resources of Operators (add/remove)                          | RA                 | CI                     |
| Backing up data of Operator resources                                  | RA                 | CI                     |
| Supervising and monitoring Operator resources                         | RA                 | CI                     |
| Restoring data from Operator resources                                | RA                 | CI                     |
| Security audit of Operators                                           | RA                 | CI                     |
| Support for Operators                                                    | RA                 | CI                     |
| Managing licenses and specific license contracts on operators          | RA                 | I                     |
| Managing tailored support plans for operators                         | RA                 | I                     |

**Important Note:**

- Any damage resulting from the installation of an operator or due to client operations is the responsibility of the **Client**.
- Management of licenses and specific support contracts on operators is not the responsibility of **Cloud Temple**.

### Clarification sur l'assistance applicative

**Assistance applicative (prestation complémentaire) :**

L'assistance applicative concernant le développement, la configuration, la gestion et la maintenance des applications **ne fait pas partie des services de Cloud Temple**. Notre rôle se limite à la gestion de l'infrastructure sous-jacente au service OpenShift. Le support des charges de travail, la gestion du cluster jusqu'au système d'exploitation, la gestion des opérateurs et les pipelines CI/CD sont de la responsabilité du client ou de tout prestataire tiers désigné pour ces tâches spécifiques.

| Activité                                           | Rôle Client | Rôle Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Assistance applicative (prestation complémentaire) | RA          | C                 |