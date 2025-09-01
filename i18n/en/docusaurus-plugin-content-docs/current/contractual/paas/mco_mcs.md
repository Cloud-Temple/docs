---
Title: MCO/MCS on OpenShift SNC PaaS Cloud Temple
---

## Preface

This policy outlines the responsibilities and recommendations for maintaining your environments in Operational Conditions (MCO) and Security Conditions (MCS) on the OpenShift PaaS platform, Cloud Temple. 

---

### Maintenance in Operational Condition (MCO)

### Cluster Management and Updates

**Cloud Temple Responsibilities:**

- Comprehensive management of the underlying infrastructure, including master nodes, OpenShift version updates, and resilience of critical services deployed by Cloud Temple.
- Automated minor/patch updates for hosted workloads without interruption, unless explicitly notified otherwise.
- Restriction of permissions and functionalities to meet SecNumCloud constraints.
- Notification of upcoming updates and fragment patches over the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**User Responsibilities:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing updates to workload deployments on a staging environment before production deployment.
- Ensuring compatibility of workloads with cluster components.

**Recommendation:**

- Schedule application deployments outside maintenance windows to avoid conflicts with automated cluster updates.
- Stay updated on major product updates from Cloud Temple for necessary adjustments.
- Monitor upcoming updates via the [**Cloud Temple Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to incident notifications (see [Incident Management](../../console/status.md#incident-management))

### Supervision and Monitoring

**Cloud Temple's Responsibility:**

- Overseeing and monitoring the underlying infrastructure and services deployed by Cloud Temple.

**User's Responsibility:**

- Overseeing and monitoring their own workloads.

**Recommendation:**

Utilize native tools provided:

- Analyze performance logs and events via OpenShift console.
- Configure custom alerts based on cluster metrics and pods using the user interface.  
  
Set critical alert thresholds:

- **CPU/Memory of pods**: ≥ 80%.
- **Persistent volume disk space**: ≥ 85%.
- **Pod startup failures**: more than X occurrences in 10 minutes.  

Automate escalation of alerts to your management tools for swift response.  

---

### Backups and Recovery

Critical components of the cluster are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Responsibility of Cloud Temple:**

- Automatic redundancy mechanisms within the infrastructure.
- Automated backups of cluster configurations.

**User Responsibility:**

- Save critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation:**

- Establish regular backup policies:
  - Automatic backups of PVs with Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployment files.
- Regularly test restorations to validate RPO (Recovery Point Objective).

## Security Compliance Management (MCS)

### Secret and Configuration Management

Utilizing OpenShift/Kubernetes Secrets and Recommendation for Centralized Secret Management Systems

**Cloud Temple Responsibility:**

- The management of secrets and configuration of the underlying infrastructure and services supporting our offering falls under **Cloud Temple's** purview.

**User Responsibility:**

- The management of secrets and workload configurations is the responsibility of the **Client**.

**Recommendation:**

- Avoid storing sensitive information in plain text within YAML files.
- Employ tools for encrypting sensitive data.

### Access Control (IAM)

Access review is conducted through the Shiva console and the "User Management" module of the OpenShift console.

For more details on this functionality, refer to our [IAM Guide](console/iam/iam.md) and the [OpenShift Container Platform documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/).

**Responsibility:**

- **Cloud Temple**:
  - Manages service accounts and administrative accounts.
  - Integrates with the Cloud Temple identity system for access management.
  - Sets up default Role-Based Access Control (RBAC) configuration and restricts initial user permissions.
  - Provides and maintains the two-factor authentication system to enhance access security.

**User Responsibility:**

- The **Client** must regularly review user access rights.
- The **Client** is responsible for granting user access and onboarding them into their tenant.
- The **Client** must manage users within the constraints set by the Cloud Temple system.

### Vulnerability Management

Vulnerabilities on the underlying infrastructure and services of our offering will be communicated in the incident module.

**Cloud Temple's Responsibilities:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services via the [**incident**](../../console/status.md) module of the SHIVA console upon detection.
- **Cloud Temple** is responsible for applying patches within this scope.
- **Cloud Temple** sets up **[Quay]** by default to perform automated scanning of Docker images.

**User Responsibilities:**

- The **Client** is responsible for detecting and fixing vulnerabilities in their workloads.
- The **Client** is responsible for upgrading their workloads to enable the quick application of security patches.

**Recommendation:**

- Utilize the cluster alerting provided by **[Quay]** to analyze vulnerabilities and detect anomalies in images used by the **Client**.
- Subscribe to incident notifications via [**incidents**](../../console/status.md#notifications).

### Encryption

Ensure native encryption on the Cloud Temple infrastructure, along with workload recommendations.

**Cloud Temple Responsibility:**

- Redundancy mechanisms within the infrastructure.
- Automated backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as **Kasten**, available in the Cloud Temple catalog.
- Ensure workloads utilize resilience mechanisms and adjust deployments accordingly.

**Recommendation:**

- Enable TLS encryption for all intra-pod communications.
- Enable TLS encryption for all communications between Cloud Temple PaaS and IaaS offerings.
- Ensure data at rest encryption via Cloud Temple storage solutions.

### Logging and Auditing

Automated logging of critical events within the cluster.

**Cloud Temple Responsibility:**

- Cloud Temple is responsible for logging and auditing the underlying infrastructure and services supporting our offerings.

**User Responsibility:**

- The **Client** is responsible for logging and auditing their workloads.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Use collectors for log aggregation with a visualization tool.
  - Integrate logs into your SIEM (highly recommended).

## Incident Management and PCA (Plan of Action and Milestones)

### Cloud Temple Responsibilities:

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** manages automated backups of cluster configurations.
- **Cloud Temple** oversees resumption of operations following an incident affecting the infrastructure or underlying services offered.

### User Responsibilities:

- The **Client** is responsible for backing up critical workload data using solutions like the **Kasten** offering available in the Cloud Temple catalog.
- The **Client** must ensure workloads utilize resilience mechanisms and adapt deployments accordingly.
- The **Client** is solely accountable for the PRA/PCA of their workloads.

### Incident Recovery Procedure

- In case of complete loss of access to a cluster, the **Client** must report an incident to Cloud Temple's support via the support module in the console.
  - Refer to the [**support request procedure**](../../console/console_quickstart.md#accessing-technical-support) for details.

## General Recommendations

1. **Resource Planning**: Ensure sufficient cluster capacity for peak workloads.
2. **Configuration Validation**: Test applications in staging environments prior to production deployment.
3. **Regular Monitoring**: Utilize built-in tools to track resource usage and detect issues early.
4. **Stay Informed**: Follow roadmaps and guides to avoid using outdated features.
5. **Contact Support**: For unresolved issues, contact support via the [**technical support request process**](../../console/console_quickstart.md#accessing-technical-support) or email at [**contact@cloud-temple.com**].

For detailed responsibilities, please refer to our [**responsibility matrix**](../../contractual/paas/raci.md).