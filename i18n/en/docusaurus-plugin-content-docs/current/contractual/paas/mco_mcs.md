---
title: MCO/MCS
---

**Operational Conditions Maintenance Policy (MCO) and Security Conditions Maintenance Policy (MCS) on the OpenShift SNC PaaS **Cloud Temple****

## Preamble

This policy details the responsibilities and recommendations for Operational Condition Maintenance (OCM) and Security Condition Maintenance (SCM) of your environments on the PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Maintenance in Operational Conditions (MCO)

### 1.1. Cluster Management and Updates

**Responsibility of Cloud Temple:**

- Full management of the underlying infrastructure, including master nodes, OpenShift version updates, and resilience of critical services deployed by **Cloud Temple**.
- Automatic minor/patch updates without interruption for hosted workloads, unless otherwise notified.
- Limitation of rights and features to SecNumCloud constraints.
- Communication of upcoming updates and fracture updates for the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**User Responsibility:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing of workload updates on a staging environment before deployment to production.
- Ensuring workload compatibility with cluster components.

**Recommendation:**

- Plan application deployments outside of maintenance windows to avoid conflicts with cluster automatic updates.
- Follow **Cloud Temple** communications regarding major updates to plan necessary adjustments.
- Follow upcoming updates via the [**Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to [**incident notifications**](/console/status.md#gestion-des-notifications)

### 1.2. Monitoring and Supervision

**Responsibility of Cloud Temple:**

- Monitoring and supervision of the infrastructure and underlying services deployed by **Cloud Temple**.

**User Responsibility:**

- Monitoring and supervision of their workloads.

**Recommendation:**

Use the **native tools provided:**

- Performance logs and event analysis via the OpenShift console.
- Custom alert configuration from cluster and pod metrics via the user interface.  
  
Set critical alert thresholds:

- **CPU/Memory** of pods: ≥ 80 %.
- **Disk space on persistent volumes**: ≥ 85 %.
- **Pod startup failures**: more than X occurrences in 10 minutes.  
  
Automate alert escalation to your management tools for rapid response.  

---

### 1.3. Backups and Restoration

Critical cluster components are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Responsibility of **Cloud Temple** :**

- Automatic redundancy mechanisms within the infrastructure.
- Automatic cluster configuration backups.

**User Responsibility:**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation:**

- Implement regular backup policies:
  - Automatic PV backups with Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployments.
- Regularly test restorations to validate RPO.

## 2. Maintenance of Security Conditions (MCS)

### 2.1. Secret and Configuration Management

Use of OpenShift/Kubernetes secrets and recommendation to integrate centralized secret management systems.

**Responsibility of Cloud Temple:**

- The management of secrets and configuration of the infrastructure and underlying services of the offering is the responsibility of **Cloud Temple**.

**Responsibility of the user:**

- The management of secrets and configuration of the **Client**'s workloads is the responsibility of the **Client**.

**Recommendation:**

- Do not store secrets in plain text in YAML files.
- Use tools to encrypt sensitive information.

### 2.2. Access Control (IAM)

Access reviews are conducted through the Shiva console and the "User Management" module of the OpenShift console.

For more details on this feature, refer to our [**guide**](../../console/iam/iam.md) and the [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) from the vendor.

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for managing service and administrative accounts.
- **Cloud Temple** is responsible for integrating with the **Cloud Temple** identity system to manage access.
- **Cloud Temple** is responsible for default configuration of **RBAC** and initial user permission restrictions.
- **Cloud Temple** is responsible for providing the **two-factor authentication** system and maintaining it to strengthen access.

**User Responsibility:**

- The **Client** must regularly monitor user access.
- The **Client** is responsible for granting access to its users and onboarding them into the tenant.
- The **Client** must manage its users in compliance with the limitations imposed by the **Cloud Temple** system.

### 2.3. Vulnerability Management

Vulnerabilities on the infrastructure and underlying services of the offering will be communicated in the incident module.

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services of the offering as soon as they are detected via the [**incident**](/console/status.md) module of the SHIVA console.
- **Cloud Temple** is responsible for applying fixes in this scope.
- **Cloud Temple** is responsible for providing tools to analyze vulnerabilities in Docker images. By default, **Cloud Temple** sets up **[Quay]** to perform automatic scanning of Docker images.

**User Responsibility:**

- The **Client** is responsible for detecting and correcting vulnerabilities in its workloads.
- The **Client** is responsible for upgrading its workloads to enable the application of security patches as quickly as possible.

**Recommendation:**

- Use the cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect abnormal behaviors in the images used by the **Client**.
- Subscribe to notifications from [**incidents**](/console/status.md#gestion-des-notifications).

### 2.4. Encryption

Guaranteed native encryption on the **Cloud Temple** infrastructure, with recommendations for workloads.

**Responsibility of **Cloud Temple** :**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- Ensure that workloads use resilience mechanisms and adapt deployments to implement them.

**Recommendation:**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offerings.
- Ensure data-at-rest encryption via **Cloud Temple** storage solutions.

### 2.5. Logging and Audit

Automatic recording of critical cluster events.

**Responsibility **Cloud Temple** :**

- **Cloud Temple** is responsible for the logging and auditing of the infrastructure and underlying services of the offering.

**User Responsibility :**

- The **Client** is responsible for the logging and auditing of its workloads.
  
**Recommendation :**

- Set up pipelines to centralize and analyze the logs of your workloads :
  - Use collectors for log aggregation, along with a visualization tool.
  - Integrate logs into your **SIEM** (recommended).

## 3. Incident Management and BCP (Business Continuity Plan)

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** is responsible for automatic backups of cluster configurations.
- **Cloud Temple** is responsible for business recovery after incidents on the infrastructure or underlying services of the offering.

**User Responsibility:**

- The **Client** is responsible for backing up critical data from workloads using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- The **Client** must ensure that workloads use resilience mechanisms and must adapt its deployments to implement them.
- The **Client** is responsible for the BCP of its workloads.

**"Disaster Recovery" Procedure**

- In case of complete loss of access to a cluster, the **Client** must report an incident to **Cloud Temple** support via the support module of the console.
See the [**technical support request procedure**](/console/console_quickstart.md#accès-au-support-technique)

## General Recommendations

1. **Plan resources**: Ensure sufficient cluster capacity for peak workloads.
2. **Validate configurations**: Test applications in staging environments before deploying to production.
3. **Monitor regularly**: Use built-in tools to monitor resource usage and detect issues as early as possible.
4. **Stay informed**: Follow the roadmap and guides to avoid obsolete features.
5. **Contact support**: For unresolved issues, contact support via the [**technical support request procedure**](/console/console_quickstart.md#accès-au-support-technique) or by email to [**contact**](mailto:contact@cloud-temple.com).

For detailed responsibilities, please review our [**responsibility matrix**](/contractual/paas/raci.md).