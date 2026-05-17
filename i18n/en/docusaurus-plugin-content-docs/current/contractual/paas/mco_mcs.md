---
title: MCO/MCS PaaS OpenShift
slug: /contractual/paas/mco-mcs
displayed_sidebar: docSidebar
---


**Operational Maintenance (MCO) and Security Maintenance (MCS) Policy for the SNC OpenShift PaaS **Cloud Temple****

## Preamble

This policy details the responsibilities and recommendations for Operational Support (MCO) and Security Support (MCS) of your environments on the OpenShift PaaS SNC **Cloud Temple**.

---

## Operational Readiness (MCO)

### Cluster Management and Updates

**Cloud Temple Responsibility:**

- Full management of the underlying infrastructure, including master nodes, OpenShift version updates, and resilience of critical services deployed by **Cloud Temple**.
- Automatic minor/patch updates without interruption for hosted workloads, unless otherwise notified.
- Restriction of rights and features to SecNumCloud constraints.
- Communication of upcoming updates and break-fix updates over the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**User Responsibility:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing workload updates in a staging environment before production deployment.
- Ensuring workload compatibility with cluster components.

**Recommendation:**

- Schedule application deployments outside of maintenance windows to avoid conflicts with automatic cluster updates.
- Monitor **Cloud Temple** communications regarding major updates to plan necessary adjustments.
- Track upcoming updates via the [**Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to [**incident**](../../console/status.md#gestion-des-notifications) notifications

---

### Supervision and monitoring

**Responsibility of **Cloud Temple** :**

- Supervision and monitoring of the infrastructure and underlying services deployed by **Cloud Temple**.

**User Responsibility:**

- Supervision and monitoring of their workloads.

**Recommendation:**

Use the **provided native tools:**

- Analyze performance logs and events via the OpenShift console.
- Configure custom alerts based on cluster and pod metrics via the user interface.  
  
Configure critical alert thresholds:

- **Pod CPU/Memory**: ≥ 80 %.
- **Disk space on persistent volumes**: ≥ 85 %.
- **Pod startup failures**: more than X occurrences in 10 minutes.  
  
Automate alert escalation to your management tools for rapid response.  

---

### Backups and Restoration

Critical cluster components are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Cloud Temple Responsibility:**

- Automatic redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation:**

- Implement regular backup policies:
  - Automatic PV backups with Kasten.
  - Daily backup of Kubernetes configurations, secrets, and YAML deployments.
- Regularly test restores to validate RPOs.

---

## Security Maintenance (MCS)

### Secret and Configuration Management

Use of OpenShift/Kubernetes secrets and recommendation to integrate centralized secret management systems.

**Responsibility **Cloud Temple** :**

- Managing the secrets and configuration of the infrastructure and underlying services for the offering is the responsibility of **Cloud Temple**.

**User Responsibility:**

- Managing the secrets and configuration of the **Client**'s workloads is the responsibility of the **Client**.
  
**Recommendation:**

- Do not store secrets in plaintext in YAML files.
- Use tools to encrypt sensitive information.

### Access Control (IAM)

Access reviews are performed via the Console and the "User Management" module of the OpenShift console.

For more details on this feature, refer to our [**guide**](../../console/iam/iam.md) and the vendor's [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/).

**Cloud Temple Responsibility:**

- **Cloud Temple** is responsible for managing service and administrative accounts.
- **Cloud Temple** is responsible for integration with the **Cloud Temple** identity system to manage access.
- **Cloud Temple** is responsible for the default setup of the **RBAC** configuration and initial user permission restrictions.
- **Cloud Temple** is responsible for providing and maintaining the **two-factor authentication** system to strengthen access.
  
**User Responsibility:**

- The **Client** must regularly review user access.
- The **Client** is responsible for granting access to its users and onboarding them into the tenant.
- The **Client** must manage its users in compliance with the limitations imposed by the **Cloud Temple** system.

### Vulnerability Management

Vulnerabilities in the infrastructure and underlying services of the offering will be communicated via the incident module.

**Responsibility **Cloud Temple** :**

- **Cloud Temple** is responsible for communicating vulnerabilities in the infrastructure and underlying services of the offering upon detection via the [**incident**](../../console/status.md) module of the Console.
- **Cloud Temple** is responsible for applying patches within this scope.
- **Cloud Temple** is responsible for providing tools to analyze Docker image vulnerabilities. By default, **Cloud Temple** implements **[Quay]** to perform automatic scanning of Docker images.

**User Responsibility:**

- The **Client** is responsible for detecting and remediating vulnerabilities in its workloads.
- The **Client** is responsible for upgrading its workloads to enable the application of security patches as quickly as possible.

**Recommendation:**

- Use the cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect abnormal behavior in images used by the **Client**.
- Subscribe to [**incident**](../../console/status.md#gestion-des-notifications) notifications.

### Encryption

Guarantee of native encryption on the **Cloud Temple** infrastructure, with recommendations for workloads.

**Responsibility of **Cloud Temple** :**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility :**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- Ensure that workloads utilize resilience mechanisms and adapt deployments to implement them.

**Recommendation :**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offerings.
- Ensure data at rest encryption via **Cloud Temple** storage solutions.

### Logging and Audit

Automatic logging of critical cluster events.

**Cloud Temple Responsibility:**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services of the offering.

**User Responsibility:**

- The **Client** is responsible for logging and auditing their workloads.
  
**Recommendation:**

- Configure pipelines to centralize and analyze your workload logs:
  - Use collectors for log aggregation, along with a visualization tool.
  - Integrate logs into your **SIEM** (recommended).

---

## Incident Management and BCP (Business Continuity Plan)

**Cloud Temple Responsibility:**

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** is responsible for automatic backups of cluster configurations.
- **Cloud Temple** is responsible for post-incident recovery on the infrastructure or on the services underlying the offering.

**User Responsibility:**

- The **Client** is responsible for backing up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- The **Client** must ensure that workloads utilize resilience mechanisms and must adapt their deployments to implement them.
- The **Client** is responsible for the DRP/BCP of their workloads.

**"Disaster Recovery" Procedure**

- In the event of complete loss of access to a cluster, the **Client** must report an incident to **Cloud Temple** support via the support module in the console.
See the [**technical support request procedure**](../../console/console_quickstart.md#accès-au-support-technique)

---

## General Recommendations

1. **Plan resources** : Ensure sufficient cluster capacity for peak workloads.
2. **Validate configurations** : Test applications in staging environments before production deployment.
3. **Monitor regularly** : Use built-in tools to track resource usage and detect issues as early as possible.
4. **Stay informed** : Follow the roadmap and guides to avoid deprecated features.
5. **Contact support** : For unresolved issues, contact support via the [**technical support request procedure**](../../console/console_quickstart.md#accès-au-support-technique) or by email at [**contact**](mailto:contact@cloud-temple.com).

To review responsibilities in detail, please refer to our [**responsibility matrix**](../../contractual/paas/raci.md).