---
title: MCO/MCS
---

**Operational Readiness Policy (MCO) and Security Readiness Policy (MCS) for the OpenShift SNC PaaS on Cloud Temple**

## Preamble

This policy outlines the responsibilities and recommendations for Operational Readiness Maintenance (ORM) and Security Compliance Maintenance (SCM) of your environments on the OpenShift SNC PaaS **Cloud Temple**.

## Operational Readiness Maintenance (ORM)

### Cluster Management and Updates

**Cloud Temple Responsibility:**

- Full management of the underlying infrastructure, including master nodes, OpenShift version updates, and resilience of critical services deployed by **Cloud Temple**.
- Automatic minor/patch updates with no downtime for hosted workloads, unless otherwise notified.
- Restriction of permissions and features according to SecNumCloud constraints.
- Communication of upcoming updates and release-breaking changes for the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**User Responsibility:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing workload updates in a staging environment before deploying to production.
- Ensuring workload compatibility with cluster components.

**Recommendations:**

- Schedule application deployments outside maintenance windows to avoid conflicts with automatic cluster updates.
- Monitor **Cloud Temple** communications regarding major updates to plan necessary adjustments.
- Follow upcoming updates via the [**Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to [**incident notifications**](../../console/status.md#management-of-notifications)

### Monitoring and Supervision

**Cloud Temple Responsibility:**

- Monitoring and supervision of the infrastructure and underlying services deployed by **Cloud Temple**.

**User Responsibility:**

- Monitoring and supervision of your workloads.

**Recommendation:**

Use the **native tools provided**:

- Performance log and event analysis via the OpenShift console.
- Custom alert configuration based on cluster and pod metrics through the user interface.

Set critical alert thresholds:

- **Pod CPU/Memory usage**: ≥ 80%.
- **Disk space on persistent volumes**: ≥ 85%.
- **Pod startup failures**: more than X occurrences within 10 minutes.

Automatically escalate alerts to your incident management tools for rapid response.

### Backups and Restoration

Critical cluster components are automatically backed up by **Cloud Temple**. User workloads and data require dedicated management.

**Cloud Temple Responsibility:**

- Automatic redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as **Kasten**, available in the **Cloud Temple** catalog.

**Recommendation:**

- Implement regular backup policies:
  - Automatic backups of Persistent Volumes (PVs) using Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployments.
- Regularly test restorations to validate RPO.

## Safety Condition Maintenance (SCM)

### Secret and Configuration Management

Use OpenShift/Kubernetes secrets and recommend integrating centralized secret management systems.

**Cloud Temple Responsibility:**

- Management of secrets and configuration for the infrastructure and underlying services supporting the offering is the responsibility of **Cloud Temple**.

**Customer Responsibility:**

- Management of secrets and configuration for the **Customer**'s workloads is the responsibility of the **Customer**.

**Recommendation:**

- Do not store secrets in plain text within YAML files.
- Use tools to encrypt sensitive information.

### Access Control (IAM)

Access reviews are performed through the Console and the "User Management" module within the OpenShift console.

For more details on this feature, refer to our [**guide**](../../console/iam/iam.md) and the [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) provided by the vendor.

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for managing service and administrative accounts.
- **Cloud Temple** is responsible for integrating with the **Cloud Temple** identity system to manage access.
- **Cloud Temple** is responsible for the default setup of **RBAC** configuration and initial user permission restrictions.
- **Cloud Temple** is responsible for providing and maintaining the **multi-factor authentication** system to strengthen access security.

**Responsibility of the User:**

- The **Client** must regularly review user access.
- The **Client** is responsible for granting access to its users and onboarding them into the tenant.
- The **Client** must manage its users in compliance with the limitations imposed by the **Cloud Temple** system.

### Vulnerability Management

Vulnerabilities on the infrastructure and underlying services supporting the offering will be communicated through the incident module.

**Cloud Temple Responsibility:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services as soon as they are detected, via the [**incident**](../../console/status.md) module in the Console.
- **Cloud Temple** is responsible for applying patches within this scope.
- **Cloud Temple** is responsible for providing tools to analyze vulnerabilities in Docker images. By default, **Cloud Temple** deploys **[Quay]** to perform automated scanning of Docker images.

**Customer Responsibility:**

- The **Customer** is responsible for detecting and remedying vulnerabilities within their workloads.
- The **Customer** is responsible for updating their workloads to enable the prompt application of security patches.

**Recommendation:**

- Use the cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect anomalous behaviors in the images used by the **Customer**.
- Subscribe to notifications from [**incidents**](../../console/status.md#management-of-notifications).

### Encryption

Guaranteed native encryption on the **Cloud Temple** infrastructure, with recommendations for workloads.

**Cloud Temple Responsibility:**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- Ensure workloads use resilience mechanisms and adjust deployments accordingly.

**Recommendation:**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offerings.
- Ensure data-at-rest encryption via **Cloud Temple** storage solutions.

### Logging and Auditing

Automatic recording of critical cluster events.

**Cloud Temple Responsibility:**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services supporting the offering.

**User Responsibility:**

- The **Customer** is responsible for logging and auditing their workloads.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Use log collectors for aggregation, combined with a visualization tool.
  - Integrate logs into your **SIEM** (recommended).

## Incident Management and Business Continuity Plan (BCP)

**Cloud Temple Responsibility:**

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** is responsible for automated backups of cluster configurations.
- **Cloud Temple** is responsible for resuming operations after an incident affecting the infrastructure or underlying services supporting the offering.

**Customer Responsibility:**

- The **Customer** is responsible for backing up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- The **Customer** must ensure that workloads leverage resilience mechanisms and must adapt their deployments accordingly.
- The **Customer** is responsible for the Business Impact Analysis (BIA) and Business Continuity Plan (BCP) of their workloads.

**"Disaster Recovery" Procedure**

- In case of complete loss of access to a cluster, the **Customer** must report an incident to **Cloud Temple** support via the support module in the console.  
See the [**technical support request procedure**](../../console/console_quickstart.md#accessing-technical-support)

## General Recommendations

1. **Plan resources**: Ensure sufficient cluster capacity for peak workloads.
2. **Validate configurations**: Test applications in staging environments before deploying to production.
3. **Monitor regularly**: Use built-in tools to track resource usage and detect issues as early as possible.
4. **Stay informed**: Follow the roadmap and guides to avoid deprecated features.
5. **Contact support**: For unresolved issues, contact support via the [**technical support request procedure**](../../console/console_quickstart.md#access-to-technical-support) or by email at [**contact**](mailto:contact@cloud-temple.com).

For detailed responsibilities, please review our [**responsibility matrix**](../../contractual/paas/raci.md).