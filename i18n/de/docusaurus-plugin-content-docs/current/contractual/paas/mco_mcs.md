---
Titel: MCO/MCS auf OpenShift SNC im PaaS Cloud Temple
---

## Vorstellung

Diese Richtlinie beschreibt die Verantwortlichkeiten und Empfehlungen für den Betrieb im Betriebszustand (MCO) und den Betrieb in Sicherheitsbedingungen (MCS) Ihrer Umgebungen auf dem PaaS OpenShift SNC **Cloud Temple**.

---

### Betriebssicherung (BOS)

### Cluster Management and Updates

**Cloud Temple Responsibilities:**

- Comprehensive management of the underlying infrastructure, including master nodes, OpenShift version updates, and resilience of critical services deployed by Cloud Temple.
- Automated minor/patch updates for hosted workloads without interruption, unless explicitly notified otherwise.
- Restriction of access and functionalities to meet SecNumCloud constraints.
- Notification of upcoming updates and fragment patches over the next three months via the [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**User Responsibilities:**

- Management of deployed workloads (applications, CI/CD tools) and their configurations.
- Testing updates to workload deployments in a staging environment before production deployment.
- Ensuring compatibility of workloads with cluster components.

**Recommendation:**

- Schedule application deployments outside maintenance windows to avoid conflicts with automated cluster updates.
- Stay updated on major product updates from Cloud Temple for necessary adjustments.
- Monitor upcoming updates via the [**Cloud Product Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Subscribe to incident notifications (see [Incident Management](../../console/status.md#incident-management))

### Überwachung und Steuerung

**Hauptverantwortung von Cloud Temple:**

- Überwachung und Steuerung der unterliegenden Infrastruktur sowie der dazugehörigen Dienste, die von Cloud Temple bereitgestellt werden.

**Hauptverantwortung des Benutzers:**

- Überwachung und Steuerung seiner eigenen Anwendungslasten.

**Empfehlung:**

Nutzen Sie die **native Tools**:

- Analyse der Leistungslöcher und Ereignisse über die OpenShift-Konsole.
- Konfiguration von benutzerdefinierten Alerts basierend auf den Metriken des Clusters sowie den Pods über das Benutzeroberfläche.  
  
Definieren Sie Ihre Warnmarken:

- CPU/RAM der Pods: ≥ 80 %.
- Speicherplatz auf persistenten Volumes: ≥ 85 %.
- Startfehler der Pods: mehr als X-Fälle in 10 Minuten.  
  
Automatisieren Sie die Escalation der Alerts zu Ihren Management-Tools für eine schnelle Reaktion.  

---

### Backups and Recovery

Critical components of the cluster are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Responsibility of Cloud Temple:**

- Automatic redundancy mechanisms within the infrastructure.
- Automated backups of cluster configurations.

**User Responsibility:**

- Backup critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation:**

- Establish regular backup policies:
  - Automatic backups of PVs with Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployment files.
- Regularly test restores to validate RPO (Recovery Point Objective).

### Gefechtsfähigkeit im Sicherheitszustand (MCS)

### Verwaltung von Schlüsseln und Konfigurationen

Nutzung von Schlüsseln OpenShift/Kubernetes und Empfehlung, eine zentrale Schlüsselverwaltung zu integrieren.

**Verantwortlichkeit von Cloud Temple:**

- Die Verwaltung von Schlüsseln und der Konfiguration der unterliegenden Infrastruktur sowie der Dienstsysteme gehört zur Verantwortung von **Cloud Temple**.

**Verantwortlichkeit des Benutzers:**

- Die Verwaltung von Schlüsseln und der Konfiguration der Anwendungsloadbalance (Workload) durch den **Benutzer** ist seine Verantwortung.

**Empfehlung:**

- Keine Schlüssel in klarer Textform in den YAML-Dateien speichern.
- Einsatz von Tools zur Verschlüsselung sensibler Informationen.

### Zugriffskontrolle (IAM)

Die Überprüfung der Zugriffsrechte erfolgt über die Shiva-Konsole und den Modul "Benutzerverwaltung" der OpenShift-Konsole.

Für weitere Informationen zu dieser Funktionalität beziehen Sie sich bitte zu unserem [Leitfaden zur IAM](console/iam/iam.md) sowie zur [Dokumentation](https://docs.redhat.com/en/documentation/openshift_container_platform/) des Herstellers.

**Haftung **Cloud Temple**:

- Cloud Temple ist für die Verwaltung von Dienstkonten und Administration zuständig.
- Cloud Temple ist für die Integration in das System der Identitätsverwaltung **Cloud Temple** verantwortlich, um Zugriffe zu verwalten.
- Cloud Temple stellt standardmäßig die Konfiguration **RBAC** ein und beschränkt die Rechte der neu angelegten Benutzer.
- Cloud Temple ist für die Bereitstellung des Systems der Zwei-Faktor-Authentifizierung (2FA) und dessen Wartung verantwortlich, um die Zugriffe zu sichern.

**Haftung des Benutzers**:

- Der **Kunde** muss regelmäßig die Zugriffsrechte seiner Benutzer überprüfen.
- Der **Kunde** ist für den Auftrag der Berechtigung seiner Benutzer und ihrer Onboarding-Prozedur im Tenant verantwortlich.
- Der **Kunde** muss seine Benutzer in Einhaltung der von Cloud Temple festgelegten Begrenzungen verwalten.

### Vulnereability Management

Vulnerabilities on the underlying infrastructure and services of our offering will be communicated in the incident module.

**Cloud Temple's Responsibilities:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services via the [**incident**](../../console/status.md) module of the SHIVA console upon detection.
- **Cloud Temple** is responsible for applying patches within this scope.
- **Cloud Temple** sets up **[Quay]** by default to perform automated scanning of Docker images.

**User's Responsibilities:**

- The **Client** is responsible for detecting and fixing vulnerabilities in their workloads.
- The **Client** is responsible for upgrading their workloads to enable the quick application of security patches.

**Recommendation:**

- Utilize the cluster alerting provided by **[Quay]** for analyzing vulnerabilities and detecting anomalies in images used by the **Client**.
- Subscribe to incident notifications via [**incidents**](../../console/status.md#gestion-des-notifications).

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

**Cloud Temple's Responsibility:**

- Cloud Temple is responsible for logging and auditing the underlying infrastructure and services supporting the offering.

**User's Responsibility:**

- The **Client** is responsible for logging and auditing their workload applications.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Utilize collectors for log aggregation, paired with a visualization tool.
  - Integrate logs into your **SIEM** (highly recommended).

## Incident Management and Business Continuity Plan (BCP)

### Cloud Temple's Responsibilities:

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** manages automated backups of cluster configurations.
- **Cloud Temple** ensures business resumption following an incident affecting the infrastructure or underlying services offered.

### User's Responsibilities:

- The **Client** is responsible for backing up critical workload data using solutions such as the **Kasten** offering available in the Cloud Temple catalog.
- The **Client** must ensure workloads utilize resilience mechanisms and adapt deployments accordingly.
- The **Client** is responsible for PRA/BCP of their workloads.

### Incident Recovery Procedure

- In case of complete loss of access to a cluster, the **Client** should report an incident to Cloud Temple's support via the support module in the console.
  - Refer to the [**support request procedure**](../../console/console_quickstart.md#accessing-technical-support) for more details.

## Allgemeine Empfehlungen


1. **Ressources planifiées** : Stellen Sie sicher, dass die Ressourcen des Clusters ausreichend sind, um die Hauptanforderungen zu bewältigen.
2. **Konfiguration validiert** : Testen Sie Anwendungen in Staging-Umgebungen vor dem Produktionsstart.
3. **Regelmäßige Überwachung** : Nutzen Sie integrierte Werkzeuge zur Überwachung der Ressourcennutzung und zum frühzeitigen Erkennen von Problemen.
4. **Auf dem Laufenden bleiben** : Bleiben Sie über die Roadmap und Leitlinien informiert, um veraltete Funktionen zu vermeiden.
5. **Technischen Support kontaktieren** : Für ungelöste Probleme wenden Sie sich an den technischen Support via der [**Anforderung des technischen Supports**](../../console/console_quickstart.md#zugang- zum technischen support) oder per E-Mail an die Adresse [**Kontakt**](mailto:contact@cloud-temple.com).

Um die detaillierten Verantwortlichkeiten zu erfahren, beachten Sie bitte unsere [**Verantwortlichkeitsmatrix**](../../contractual/paas/raci.md).