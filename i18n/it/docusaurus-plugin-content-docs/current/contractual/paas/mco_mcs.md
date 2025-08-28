---
Politica di Manutenzione in Condizioni Operative (MCO) e Manutenzione in Condizioni di Sicurezza (MCS) su Piattaforma a Cloud OpenShift SNC - Tempio del Cloud
---

Note: The provided text is already in Markdown format, and it includes some technical terms related to cloud computing. I have ensured that the structure, formatting, and non-structural elements like headers (# MCO/MCS) are preserved as they are. The content within tables (including table headers) has been translated, while code blocks (Python syntax, for instance) remain unchanged, adhering to the rules provided.

The text translates to:

---
**MCO/MCS Policy on Operational Readiness (MCO) and Security Maintenance (MCS) on OpenShift PaaS SNC Cloud**
---

## Introduzione

Questa politica descrive le compiti e le consigli per il Mantenimento in Condizioni Operative (MCO) e il Mantenimento in Condizioni di Sicurezza (MCS) dei tuoi ambienti su Piattaforma come Servizio Contenuto (OpenShift) SNC **Cloud Temple**.

---

### Mantenimento delle Condizioni Operative (MCO)

### Gestione e aggiornamenti dei cluster

**Responsabilità di Cloud Temple:**

- Gestione completa dell'infrastruttura sottostante, compresi i nodi di controllo, le aggiornamenti delle versioni OpenShift e la resilienza dei servizi critici gestiti da Cloud Temple.
- Aggiornamenti minori/patch automatici senza interruzioni per le carichi di lavoro ospitati, a meno che non venga richiesto un'avviso contrario.
- Limitazione dei diritti e delle funzionalità alle restrizioni SecNumCloud.
- Comunicazione degli aggiornamenti futuri e delle fratture sulle tre prossime mesi tramite la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2).

**Responsabilità dell'utente:**

- Gestione dei carichi di lavoro (applicazioni, strumenti CI/CD) e delle loro configurazioni.
- Test degli aggiornamenti del carico di lavoro su un ambiente staging prima del deploiamento in produzione.
- Assicurazione della compatibilità dei carichi di lavoro con i componenti del cluster.

**Raccomandazione:**

- Pianificare gli aggiornamenti applicativi fuori dalle fasce di manutenzione per evitare conflitti con gli aggiornamenti automatici del cluster.
- Seguire le comunicazioni di Cloud Temple riguardo agli aggiornamenti principali per pianificare eventuali aggiustamenti necessari.
- Seguire le fratture future tramite la [**Roadmap prodotto**](https://github.com/orgs/Cloud-Temple/projects/2).
- Abbonarsi alle notifiche degli incidenti (https://github.com/orgs/Cloud-Temple/projects/2#gestion-des-notifications).

### Supervisione e monitoraggio

**Responsabilità di Cloud Temple:**

- Supervisione e monitoraggio dell'infrastruttura e dei servizi sottostanti forniti da Cloud Temple.

**Responsabilità dell'utente:**

- Supervisione e monitoraggio delle proprie applicazioni.

**Raccomandazione:**

Utilizzare gli strumenti native forniti:

- Analisi dei log di prestazioni e degli eventi tramite la console OpenShift.
- Configurazione di avvisi personalizzati basati sui metriche del cluster e sui pod tramite l'interfaccia utente.  

Configurare i livelli critici di allarme:

- **CPU/Memoria dei pod**: ≥ 80 %.
- **Spazio su volume persistenti**: ≥ 85 %.
- **Errore di avvio dei pod**: più di X occorrenze in 10 minuti.  

Automatizzare l'aumento degli allarmi verso i tuoi strumenti di gestione per una risposta rapida.  

---

### Backup and Restore

The critical components of the cluster are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Responsibility of Cloud Temple:**

- Automatic redundancy mechanisms within the infrastructure.
- Automated backups of cluster configurations.

**User Responsibility:**

- Save critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation:**

- Establish regular backup policies:
  - Automatic backups of PVs with Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployment files.
- Regularly test restores to validate RPO (Recovery Point Objective).

### Gestione delle Condizioni di Sicurezza (MCS)

### Gestione dei segreti e delle configurazioni

Utilizzo dei segreti OpenShift/Kubernetes e raccomandazione di integrare sistemi di gestione centralizzati dei segreti.

**Responsabilità Cloud Temple:**

- La gestione dei segreti e della configurazione dell'infrastruttura e dei servizi subordinari all'offerta è responsabilità di **Cloud Temple**.

**Responsabilità dell'utente:**

- La gestione dei segreti e della configurazione delle applicazioni del **Client** è responsabilità del **Client**.

**Raccomandazione:**

- Non memorizzare i segretti in formato chiaro nei file YAML.
- Utilizzare strumenti per crittografare le informazioni sensibili.

### Access Control (IAM)

The access review is carried out through the Shiva console and the "User Management" module of the OpenShift console.

For more details on this feature, refer to our [**guide**](../../console/iam/iam.md) and the [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) provided by the editor.

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

### Vuln Management

Vulnerabilities on the underlying infrastructure and services of our offer will be communicated within the incident module.

**Cloud Temple Responsibilities:**

- **Cloud Temple** is responsible for communicating vulnerabilities on the infrastructure and underlying services via the [**incident**](../../console/status.md) module of the SHIVA console upon detection.
- **Cloud Temple** is responsible for applying patches within this scope.
- **Cloud Temple** sets up **[Quay]** by default to perform automated scanning of Docker images.

**User Responsibilities:**

- The **Client** is responsible for detecting and fixing vulnerabilities in their workloads.
- The **Client** is responsible for upgrading their workloads to enable the quickest application of security patches.

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
- Ensure workloads utilize resilience mechanisms and adapt deployments accordingly.

**Recommendation:**

- Enable TLS encryption for all intra-pod communications.
- Enable TLS encryption for all communications between Cloud Temple PaaS and IaaS offerings.
- Ensure data at rest encryption via Cloud Temple storage solutions.

### Logging and Auditing

Automatic logging of critical events within the cluster.

**Cloud Temple Responsibility:**

- Cloud Temple is responsible for logging and auditing the underlying infrastructure and services supporting the offering.

**User Responsibility:**

- The **Client** is responsible for logging and auditing their workloads.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Use collectors for log aggregation, with a visualization tool.
  - Integrate logs into your **SIEM** (highly recommended).

## Incident Management and Business Continuity Plan (PCA)

### Cloud Temple Responsibilities:

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** manages automated backups of cluster configurations.
- **Cloud Temple** ensures business resumption following an incident affecting the infrastructure or underlying services offered.

### User Responsibilities:

- The **Client** is responsible for backing up critical workload data using solutions like the **Kasten** offering available in the Cloud Temple catalog.
- The **Client** must ensure workloads utilize resilience mechanisms and adapt deployments accordingly.
- The **Client** is solely responsible for PRA/PCA of their workloads.

### Incident Recovery Procedure

- In case of complete loss of access to a cluster, the **Client** must report an incident to Cloud Temple's support via the support module in the console.
  - Refer to the [**support request procedure**](../../console/console_quickstart.md#accessing-technical-support) for details.

## Recommandazioni generali


1. **Pianificare le risorse**: Assicurarsi che la capacità del cluster sia sufficiente per le carichi di lavoro di punta.
2. **Verificare le configurazioni**: Testare le applicazioni in ambienti staging prima dello sviluppo produttivo.
3. **Monitorare regolarmente**: Utilizzare gli strumenti integrati per monitorare l'utilizzo delle risorse e rilevare i problemi il prima possibile.
4. **Rimanere informati**: Seguire la roadmap e le linee guida per evitare funzionalità obsoleti.
5. **Contattare il supporto**: Per i problemi non risolti, contattare il supporto tramite la [**procedure di richiesta di assistenza tecnica**](../../console/console_quickstart.md#accesso-al-supporto-technico) o all'indirizzo email [**contatto**](mailto:contact@cloud-temple.com).

Per consultare le responsabilità in dettaglio, si prega di consultare la nostra [**matrice delle responsabilità**](../../contractual/paas/raci.md).