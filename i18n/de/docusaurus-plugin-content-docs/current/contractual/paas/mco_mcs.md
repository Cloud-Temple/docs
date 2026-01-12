---
title: MCO/MCS
---

**Operational Readiness Policy (MCO) and Security Readiness Policy (MCS) for the OpenShift SNC PaaS Cloud Temple**

## Vorwort

Diese Richtlinie beschreibt die Verantwortlichkeiten und Empfehlungen für die Betriebsbereitschaft (MCO) und die Sicherheitsbereitschaft (MCS) Ihrer Umgebungen auf der PaaS-Plattform OpenShift SNC **Cloud Temple**.

## Operational Readiness Maintenance (ORM)

### Cluster Management and Updates

**Responsibility of Cloud Temple:**

- Full management of the underlying infrastructure, including master nodes, OpenShift version updates, and resilience of critical services deployed by **Cloud Temple**.
- Automatic minor/patch updates without downtime for hosted workloads, unless otherwise notified.
- Restriction of rights and features according to SecNumCloud requirements.
- Communication of upcoming updates and release-breaking changes for the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**User Responsibility:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing of workload updates in a staging environment before deployment to production.
- Ensuring workload compatibility with cluster components.

**Recommendations:**

- Schedule application deployments outside maintenance windows to avoid conflicts with automatic cluster updates.
- Monitor **Cloud Temple** communications regarding major updates to plan necessary adjustments.
- Follow upcoming updates via the [**Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to [**incident notifications**](../../console/status.md#gestion-des-notifications)

### Monitoring and Supervision

**Responsibility of Cloud Temple:**

- Monitoring and supervision of the infrastructure and underlying services deployed by **Cloud Temple**.

**Responsibility of the user:**

- Monitoring and supervision of your workloads.

**Recommendation:**

Use the **native tools provided**:

- Performance log and event analysis via the OpenShift console.
- Configuration of custom alerts based on cluster and pod metrics via the user interface.

Set critical alert thresholds:

- **CPU/Memory** of pods: ≥ 80%.
- **Disk space on persistent volumes**: ≥ 85%.
- **Pod startup failures**: more than X occurrences within 10 minutes.

Automatically escalate alerts to your management tools for rapid response.

### Backups and Restoration

Critical cluster components are automatically backed up by **Cloud Temple**. Workload and user data require dedicated management.

**Responsibility of Cloud Temple:**

- Automatic redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as **Kasten**, available in the **Cloud Temple** catalog.

**Recommendation:**

- Implement regular backup policies:
  - Automatic backups of Persistent Volumes (PVs) using Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployments.
- Regularly test restorations to validate RPOs.

## Maintenance in Security Conditions (MCS)

### Secret and Configuration Management

Use OpenShift/Kubernetes secrets and recommend integrating centralized secret management systems.

**Responsibility of Cloud Temple:**

- Management of secrets and configuration for the infrastructure and underlying services supporting the offering is the responsibility of **Cloud Temple**.

**User Responsibility:**

- Management of secrets and configuration for the **Client**'s workloads is the responsibility of the **Client**.

**Recommendation:**

- Do not store secrets in plain text within YAML files.
- Use tools to encrypt sensitive information.

### Access Control (IAM)

Access reviews are carried out through the Console and the "User Management" module of the OpenShift console.

For more details on this feature, refer to our [**guide**](../../console/iam/iam.md) and the [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) provided by the vendor.

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for managing service and administrative accounts.
- **Cloud Temple** is responsible for integrating with the **Cloud Temple** identity system to manage access.
- **Cloud Temple** is responsible for the default setup of **RBAC** configuration and initial user permission restrictions.
- **Cloud Temple** is responsible for providing and maintaining the **two-factor authentication** system to strengthen access security.

**Responsibility of the User:**

- The **Customer** must regularly review user access.
- The **Customer** is responsible for granting access to its users and onboarding them into the tenant.
- The **Customer** must manage its users in compliance with the limitations imposed by the **Cloud Temple** system.

### Vulnerability Management

Vulnerabilities on the infrastructure and underlying services supporting the offering will be communicated via the incident module.

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services as soon as they are detected, through the [**incident**](../../console/status.md) module in the Console.
- **Cloud Temple** is responsible for applying patches within this scope.
- **Cloud Temple** is responsible for providing tools to analyze vulnerabilities in Docker images. By default, **Cloud Temple** deploys **[Quay]** to perform automated scanning of Docker images.

**Responsibility of the User:**

- The **Customer** is responsible for detecting and remedying vulnerabilities within their workloads.
- The **Customer** is responsible for updating their workloads to enable the prompt application of security patches.

**Recommendation:**

- Use the cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect anomalous behavior in the images used by the **Customer**.
- Subscribe to notifications from [**incidents**](../../console/status.md#management-of-notifications).

### Encryption

Guarantee of native encryption on the **Cloud Temple** infrastructure, with recommendations for workloads.

**Responsibility of Cloud Temple:**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**Responsibility of the user:**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- Ensure workloads use resilience mechanisms and adapt deployments accordingly.

**Recommendation:**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offerings.
- Ensure data-at-rest encryption via **Cloud Temple** storage solutions.

### Logging and Auditing

Automatic recording of critical cluster events.

**Responsibility **Cloud Temple** :**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services supporting the offering.

**User Responsibility:**

- The **Customer** is responsible for logging and auditing their workloads.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Use log collectors for log aggregation, combined with a visualization tool.
  - Integrate logs into your **SIEM** (recommended).

## Incident Management and Business Continuity Plan (BCP)

**Responsibility of Cloud Temple:**

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** is responsible for automated backups of cluster configurations.
- **Cloud Temple** is responsible for resuming operations after an incident affecting the infrastructure or underlying services provided.

**Responsibility of the User:**

- The **Customer** is responsible for backing up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- The **Customer** must ensure that workloads utilize resilience mechanisms and adapt their deployments accordingly.
- The **Customer** is responsible for their own Business Continuity Plan (BCP) / Disaster Recovery Plan (DRP) for their workloads.

**"Disaster Recovery" Procedure**

- In case of complete loss of access to a cluster, the **Customer** must report an incident to **Cloud Temple** support via the support module in the console.  
See the [**technical support request procedure**](../../console/console_quickstart.md#access-to-technical-support)

## Allgemeine Empfehlungen

1. **Ressourcen planen**: Stellen Sie sicher, dass der Cluster über ausreichende Kapazität verfügt, um Spitzenlasten zu bewältigen.
2. **Konfigurationen validieren**: Testen Sie Anwendungen in Staging-Umgebungen, bevor sie in die Produktion bereitgestellt werden.
3. **Regelmäßig überwachen**: Verwenden Sie integrierte Tools, um die Ressourcennutzung zu verfolgen und Probleme so früh wie möglich zu erkennen.
4. **Informiert bleiben**: Folgen Sie der Roadmap und den Anleitungen, um veraltete Funktionen zu vermeiden.
5. **Support kontaktieren**: Bei ungelösten Problemen wenden Sie sich an den Support über die [**Support-Anfrage-Prozedur**](../../console/console_quickstart.md#zugang-zum-technischen-support) oder per E-Mail an die Adresse [**contact**](mailto:contact@cloud-temple.com).

Für detaillierte Informationen zu den Verantwortlichkeiten lesen Sie bitte unsere [**Verantwortlichkeitsmatrix**](../../contractual/paas/raci.md).