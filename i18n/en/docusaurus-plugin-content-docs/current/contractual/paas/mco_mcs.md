---
title: MCO/MCS
---

**Operational Conditions Maintenance (MCO) and Security Conditions Maintenance (MCS) Policy on the OpenShift SNC PaaS **Cloud Temple****

## Preamble

This policy details the responsibilities and recommendations for the Operational Conditions Maintenance (MCO) and Security Conditions Maintenance (MCS) of your environments on the OpenShift SNC PaaS **Cloud Temple**.

---

## 1. Operational Conditions Maintenance (MCO)

### 1.1. Cluster management and updates

**Responsibility of **Cloud Temple** :**

- Full management of the underlying infrastructure, including master nodes, OpenShift version updates, and the resilience of critical services deployed by **Cloud Temple**.
- Automatic minor/patch updates without interruption for hosted workloads, unless otherwise notified.
- Limiting rights and features to SecNumCloud constraints.
- Communicating upcoming updates and fracture updates for the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsibility of the user :**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing workload updates on a staging environment before deployment to production.
- Ensuring workload compatibility with cluster components.

**Recommendation :**

- Schedule application deployments outside of maintenance windows to avoid conflicts with cluster automatic updates.
- Follow **Cloud Temple** communications regarding major updates to plan necessary adjustments.
- Follow upcoming updates via the [**Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to [**incident notifications**](/console/status.md#gestion-des-notifications)

---

### 1.2. Monitoring and supervision

**Responsibility of **Cloud Temple** :**

- Monitoring and supervision of the infrastructure and services deployed by **Cloud Temple**.

**Responsibility of the user :**

- Monitoring and supervision of its workloads.

**Recommendation :**

Use the **native tools provided:**

- Performance log analysis and event monitoring via the OpenShift console.
- Custom alert configuration from cluster and pod metrics via the user interface.  
  
Configure critical alert thresholds:

- **Pod CPU/Memory**: ≥ 80 %.
- **Disk space on persistent volumes**: ≥ 85 %.
- **Pod startup failures**: more than X occurrences in 10 minutes.  
  
Automate alert escalation to your management tools for rapid response.  

---

### 1.3. Backups and restoration

Critical cluster components are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Responsibility of **Cloud Temple** :**

- Automatic redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**Responsibility of the user :**

- Backing up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation :**

- Implement regular backup policies:
  - Automatic backups of PVs with Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployments.
- Regularly test restorations to validate RPO.

---

## 2. Security Conditions Maintenance (MCS)

### 2.1. Secret and configuration management

Use of OpenShift/Kubernetes secrets and recommendation to integrate centralized secret management systems.

**Responsibility of **Cloud Temple** :**

- The management of secrets and configuration of the infrastructure and underlying services is the responsibility of **Cloud Temple**.

**Responsibility of the user :**

- The management of secrets and configuration of the **Client**'s workloads is the responsibility of the **Client**.
  
**Recommendation :**

- Do not store secrets in plain text in YAML files.
- Use tools to encrypt sensitive information.

### 2.2. Access control (IAM)

Access reviews are conducted through the Shiva console and the "User Management" module of the OpenShift console.

For more details on this feature, refer to our [**guide**](/console/iam/iam) and the [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) from the publisher.

**Responsibility of **Cloud Temple** :**

- **Cloud Temple** is responsible for managing service and administrative accounts.
- **Cloud Temple** is responsible for integrating with the **Cloud Temple** identity system to manage access.
- **Cloud Temple** is responsible for default configuration of **RBAC** and initial user rights restrictions.
- **Cloud Temple** is responsible for providing the **two-factor authentication** system and maintaining it to enhance access.

**Responsibility of the user :**

- The **Client** must regularly review user access.
- The **Client** is responsible for granting access to its users and onboarding them into the tenant.
- The **Client** must manage its users in compliance with the limitations imposed by the **Cloud Temple** system.

### 2.3. Vulnerability management

Vulnerabilities on the infrastructure and underlying services will be communicated in the incident module.

**Responsibility of **Cloud Temple** :**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services as soon as they are detected via the [**incident**](/console/status.md) module of the SHIVA console.
- **Cloud Temple** is responsible for applying fixes in this scope.
- **Cloud Temple** is responsible for providing tools to analyze Docker image vulnerabilities. By default, **Cloud Temple** implements **[Quay]** to automatically scan Docker images.

**Responsibility of the user :**

- The **Client** is responsible for detecting and correcting vulnerabilities in its workloads.
- The **Client** is responsible for upgrading its workloads to apply security patches as quickly as possible.

**Recommendation :**

- Use the cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect abnormal behavior in the **Client**'s images.
- Subscribe to notifications from [**incidents**](/console/status.md#gestion-des-notifications).

### 2.4. Encryption

Native encryption on the **Cloud Temple** infrastructure is guaranteed, with recommendations for workloads.

**Responsibility of **Cloud Temple** :**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**Responsibility of the user :**

- Backing up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- Ensuring that workloads use resilience mechanisms and adapting deployments to implement them.

**Recommendation :**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offerings.
- Ensure data-at-rest encryption via **Cloud Temple** storage solutions.

### 2.5. Logging and audit

Automatic recording of critical cluster events.

**Responsibility of **Cloud Temple** :**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services.

**Responsibility of the user :**

- The **Client** is responsible for logging and auditing its workloads.
  
**Recommendation :**

- Configure pipelines to centralize and analyze your workload logs:
  - Use collectors for log aggregation with a visualization tool.
  - Integrate logs into your **SIEM** (recommended).

---

## 3. Incident Management and Business Continuity Plan (BCP)

**Responsibility of **Cloud Temple** :**

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** is responsible for automatic backups of cluster configurations.
- **Cloud Temple** is responsible for resuming operations after an incident on the infrastructure or on the underlying services.

**Responsibility of the user :**

- The **Client** is responsible for backing up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- The **Client** must ensure that workloads use resilience mechanisms and adapt deployments to implement them.
- The **Client** is responsible for the BCP of its workloads.

**"Disaster Recovery" Procedure**

- In case of complete loss of access to a cluster, the **Client** must report an incident to **Cloud Temple** support via the support module of the console.
See the [**technical support request procedure**](/console/console_quickstart.md#accès-au-support-technique)

---

## General Recommendations
1. **Plan resources**: Ensure sufficient cluster capacity for peak workloads.  
2. **Validate configurations**: Test applications in staging environments before production deployment.  
3. **Monitor regularly**: Use built-in tools to track resource usage and detect issues as early as possible.  
4. **Stay informed**: Follow the roadmap and guides to avoid obsolete features.  
5. **Contact support**: For unresolved issues, contact support via the [**technical support request procedure**](/console/console_quickstart.md#accès-au-support-technique) or by email to [**contact**](mailto:contact@cloud-temple.com).  

To find out about the responsibilities in detail, please refer to our [**responsibility matrix**](/contractual/paas/raci.md).