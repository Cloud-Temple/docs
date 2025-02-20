---
title: MCO/MCS
---

**Maintenance in Operational Conditions (MCO) and Maintenance in Security Conditions (MCS) Policy on the OpenShift SNC **Cloud Temple** PaaS****

## Preamble

This policy details the responsibilities and recommendations for Maintenance in Operational Conditions (MCO) and Maintenance in Security Conditions (MCS) of your environments on the OpenShift SNC **Cloud Temple** PaaS.

---

## 1. Maintenance in Operational Conditions (MCO)

### 1.1. Cluster management and updates

**Responsibility of **Cloud Temple**:**

- Complete management of the underlying infrastructure, including master nodes, OpenShift version updates, and the resilience of critical services deployed by **Cloud Temple**.
- Automatic minor updates/patches without interruption for hosted workloads, unless otherwise notified.
- Limitation of rights and functionalities to SecNumCloud constraints.
- Communication of upcoming updates and major updates over the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2).

**User's responsibility:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing workload updates in a staging environment before production deployment.
- Ensuring the compatibility of workloads with cluster components.

**Recommendation:**

- Plan application deployments outside of maintenance windows to avoid conflicts with automatic cluster updates.
- Follow **Cloud Temple** communications regarding major updates to plan necessary adjustments.
- Track upcoming updates via the [**Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2).
- Subscribe to [**incident**](/console/status.md#gestion-des-notifications) notifications.

---

### 1.2. Supervision and monitoring

**Responsibility of **Cloud Temple**:**

- Supervision and monitoring of the infrastructure and underlying services deployed by **Cloud Temple**.

**User's responsibility:**

- Supervision and monitoring of their workloads.

**Recommendation:**

Use the **provided native tools**:

- Performance and event log analysis via the OpenShift console.
- Configuration of custom alerts from cluster and pod metrics via the user interface.

Set critical alert thresholds:

- **CPU/Memory** of pods: ≥ 80%.
- **Disk space on persistent volumes**: ≥ 85%.
- **Pod startup failures**: more than X occurrences in 10 minutes.

Automate alert escalation to your management tools for quick response.

---

### 1.3. Backups and restoration

Critical cluster components are automatically backed up by **Cloud Temple**. User workloads and data require dedicated management.

**Responsibility of **Cloud Temple**:**

- Automatic redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User's responsibility:**

- Backup critical workload data using solutions such as the **Kasten** offer available in the **Cloud Temple** catalog.

**Recommendation:**

- Implement regular backup policies:
  - Automatic PV backups with Kasten.
  - Daily backup of Kubernetes configs, secrets, and YAML deployments.
- Regularly test restorations to validate RPOs.

---

## 2. Maintenance in Security Conditions (MCS)

### 2.1. Secrets and configurations management

Use OpenShift/Kubernetes secrets and recommend integrating centralized secret management systems.

**Responsibility of **Cloud Temple**:**

- Management of secrets and configuration of the infrastructure and underlying services of the offer is the responsibility of **Cloud Temple**.

**User's responsibility:**

- Management of secrets and configuration of **Client** workloads is the responsibility of the **Client**.

**Recommendation:**

- Do not store secrets in plain text in YAML files.
- Use tools to encrypt sensitive information.

### 2.2. Access control (IAM)

Access review is carried out through the Shiva console and the "User Management" module of the OpenShift console.

For more details, refer to our [**guide**](/console/iam/iam) and the [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) from the publisher.

**Responsibility of **Cloud Temple**:**

- **Cloud Temple** is responsible for managing service and administration accounts.
- **Cloud Temple** is responsible for integrating with the **Cloud Temple** identity system to manage access.
- **Cloud Temple** is responsible for setting up default **RBAC** configuration and initial user restrictions.
- **Cloud Temple** is responsible for providing and maintaining the **two-factor authentication** system to strengthen access.

**User's responsibility:**

- The **Client** must regularly control user access.
- The **Client** is responsible for granting access to their users and onboarding them in the tenant.
- The **Client** must manage their users in compliance with the restrictions imposed by the **Cloud Temple** system.

### 2.3. Vulnerability management

Vulnerabilities on the infrastructure and underlying services of the offer will be communicated in the incident module.

**Responsibility of **Cloud Temple**:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services of the offer as soon as they are detected via the [**incident**](/console/status.md) module of the SHIVA console.
- **Cloud Temple** is responsible for applying patches in this scope.
- **Cloud Temple** is responsible for providing tools to analyze vulnerabilities in Docker images. By default, **Cloud Temple** provides **[Quay]** to perform the automatic scan of Docker images.

**User's responsibility:**

- The **Client** is responsible for detecting and correcting vulnerabilities in their workloads.
- The **Client** is responsible for upgrading their workloads to allow the fastest possible application of security patches.

**Recommendation:**

- Use cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect abnormal behaviors in the images used by the **Client**.
- Subscribe to [**incident**](/console/status.md#gestion-des-notifications) notifications.

### 2.4. Encryption

Guarantee of native encryption on the **Cloud Temple** infrastructure, with recommendations for workloads.

**Responsibility of **Cloud Temple**:**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User's responsibility:**

- Backup critical workload data using solutions such as the **Kasten** offer available in the **Cloud Temple** catalog.
- Ensure that workloads use resilience mechanisms and adapt deployments to implement them.

**Recommendation:**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offers.
- Ensure data-at-rest encryption via **Cloud Temple** storage solutions.

### 2.5. Logging and audit

Automatic recording of critical cluster events.

**Responsibility of **Cloud Temple**:**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services of the offer.

**User's responsibility:**

- The **Client** is responsible for logging and auditing their workloads.

**Recommendation:**

- Configure pipelines to centralize and analyze logs of your workloads:
  - Use collectors for log aggregation with a visualization tool.
  - Integrate logs into your **SIEM** (recommended).

---

## 3. Incident management and BCP (Business Continuity Plan)

**Responsibility of **Cloud Temple**:**

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** is responsible for automatic backups of cluster configurations.
- **Cloud Temple** is responsible for resuming activity after an incident on the infrastructure or underlying services of the offer.

**User's responsibility:**

- The **Client** is responsible for backing up critical workload data using solutions such as the **Kasten** offer available in the **Cloud Temple** catalog.
- The **Client** must ensure that workloads use resilience mechanisms and must adapt their deployments to implement them.
- The **Client** is responsible for the DRP/BCP of their workloads.

**Disaster Recovery Procedure**

- In the event of complete loss of access to a cluster, the **Client** must report an incident to **Cloud Temple** support via the support module in the console. See the [**technical support request procedure**](/console/console_quickstart.md#accès-au-support-technique).

---

## General Recommendations
1. **Plan resource capacity**: Ensure sufficient cluster capacity for peak workloads.
2. **Validate configurations**: Test applications in staging environments before production deployment.
3. **Regular monitoring**: Use integrated tools to track resource usage and detect issues as early as possible.
4. **Stay informed**: Follow the roadmap and guides to avoid deprecated features.
5. **Contact support**: For unresolved issues, contact support via the [**technical support request procedure**](/console/console_quickstart.md#accès-au-support-technique) or by email at [**contact**](mailto:contact@cloud-temple.com).

For detailed responsibilities, please refer to our [**responsibility matrix**](/governance/paas/raci.md).