---
concepti
importofferOshift from './images/oshift_offert.png'

## Presentazione di RedHat OpenShift

**Red Hat OpenShift** è una piattaforma di container aziendale che automatizza il deployment, la gestione e lo scalabilità delle applicazioni containerizzate. È costruita su Docker, un sistema di containerizzazione che consente di pacchettizzare un'applicazione e le sue dipendenze in un contenitore virtuale, e su Kubernetes, un sistema di orchestrazione dei container, che gestisce l'esecuzione e la coordinazione dei contenitori su un cluster di server.

### Caratteristiche principali di Red Hat OpenShift:

- **Deployment e gestione automatizzati:** OpenShift semplifica il processo di deployment delle applicazioni automatizzando le routine di gestione come lo scalamento, la salute e la durata dei contenitori. Fornisce un ambiente integrato per lo sviluppo, il test e il deployment delle applicazioni in produzione.

- **Supporto multipli linguaggi e servizi:** La piattaforma supporta una vasta gamma di linguaggi di programmazione (ad esempio Java, Node.js, Python, Ruby, PHP) e offre servizi integrati come la messaggistica, il caching e le basi dati, consentendo agli sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e deployment continuo (CD):** OpenShift integra strumenti CI/CD che automatizzano il pipeline di sviluppo del software, dalla commit iniziale fino al deployment in produzione, promuovendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per la monitoraggio, la gestione delle prestazioni e il diagnosticato delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione delle funzioni e la gestione automatica degli oggetti sensibili per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework che preferiscono.
- **Efficienza operativa:** OpenShift ottimizza l'uso delle risorse, riduce i tempi di commercializzazione e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente lo scalamento delle applicazioni per adattarsi alle variazioni della domanda.
- **Sicurezza ed efficacia normativa:** Grazie alle sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift rappresenta una soluzione completa per lo sviluppo, il deployment e la gestione delle applicazioni containerizzate, offrendo una piattaforma robusta, sicura ed efficiente per le aziende che adottano approcci moderni di sviluppo software.

### Red Hat OpenShift Data Foundation

Il sottoinsieme di archiviazione e gestione dei dati di Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata per l'archiviazione e la gestione dei dati progettata per funzionare in modo trasparente con l'ecosistema OpenShift. Fornisce un'infrastruttura di dati persistenti, sicuri e altamente disponibili per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni basati su container e microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati negli ambienti cloud ibridi e multicloud, offrendo una base solida per le applicazioni aziendali critiche.

#### Caratteristiche chiave di OpenShift Data Foundation:

- **Storage Persistente:** ODF offre una strato di storage persistente per i container, fondamentale per le sistemi aziendali come le database, i sistemi di gestione del contenuto e le applicazioni che richiedono uno stato persistente.

- **Multicloud e Hybrid:** Progettato per l'ambiente cloud ibrido e multicloud, ODF consente un'esperienza di gestione dei dati coerente in vari ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione ed Orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift permet a ODF di automatizzare il provisioning, lo scalamento e la gestione del ciclo di vita del storage in base alle esigenze delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replica e il snapshotting dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità operativa aziendale.

- **Sicurezza dei Dati:** La soluzione integra funzionalità di sicurezza avanzate, come il cifratura dei dati in riposo e in transito, oltre a politiche di sicurezza e conformità personalizzabili.

#### Vantaggi di Red Hat OpenShift Data Foundation:

- **Flessibilità Operativa:** ODF consente alle aziende di gestire efficacement i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze mutevoli delle applicazioni moderne.

- **Semplificazione della Gestione dei Dati:** Automatizzando numerose attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative a maggiore valore aggiunto.

- **Ottimizzazione dei Costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di archiviazione aiuta a ottimizzare i costi evitando il sovraccarico e utilizzando in modo più efficiente le risorse disponibili.

- **Miglioramento delle Performance:** ODF è progettato per fornire prestazioni elevate per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation rappresenta una soluzione di archiviazione dati avanzata che amplifica l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali ospitate su OpenShift. Offrendo un archiviazione persistente, automatizzato ed efficiente, ODF svolge un ruolo fondamentale nell'enabbirle alle aziende di sfruttare al meglio il potenziale delle tecnologie container e cloud ibrido.

### Architettura generale della piattaforma

### General Information

The Red Hat OpenShift platform by Cloud Temple is designed as a regional offering, deployed natively across **three availability zones** within the same [region](../additional_content/concepts_regional.md) of Cloud Temple. This tri-zonal architecture significantly enhances the platform's availability and data resilience.

The platform comprises a control plane and worker nodes, all managed by Cloud Temple's infrastructure. The control plane is evenly distributed across the three zones for centralized and secure management. Worker nodes are represented as compute blades arranged such that each zone hosts an equivalent number of them.

For worker nodes, multiple types of compute blades are available, offering flexibility to meet diverse operational needs:

| Red Hat OpenShift 4 with Data Foundations - On Demand - 1 month | Unit Type          | SKU                                                                 |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------------------------------ |
| OPENSHIFT - Control Plane - 3 nodes - Region FR1                          | 1 dedicated instance   | csp:fr1:paas:oshift:plan:payg:v1                           |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go RAM - 512 Gio FLASH 1500 iops)                      | 3 dedicated instances | csp:fr1:paas:oshift:wkr:tiny:payg:v1                          |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go RAM - 512 Gio FLASH 1500 iops)                   | 3 dedicated instances | csp:fr1:paas:oshift:wkr:small:payg:v1                         |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go RAM - 512 Gio FLASH 1500 iops)                | 3 dedicated instances | csp:fr1:paas:oshift:wkr:std:payg:v1                         |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go RAM - 512 Gio FLASH 1500 iops)                 | 3 dedicated instances | csp:fr1:paas:oshift:wkr:adv:payg:v1                         |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To RAM - 512 Gio FLASH 1500 iops)                    | 3 dedicated instances | csp:fr1:paas:oshift:wkr:perf:payg:v1                        |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go RAM - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 dedicated instances + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1                        |

Red Hat OpenShift Cloud Temple products are available for usage-based or 12-month reservation.

**Notes:**

1. *Maintaining operational readiness and security of the control plane is Cloud Temple's responsibility as a PaaS service.*


2. *As of June 15, 2024, Version 1 of the platform is software-limited to 30 worker nodes (regardless of type) and a global persistent storage of 50 Tio. If these limits are blocking your project, please contact support.*


3. *Each worker node comes with 512Gio of flash block storage, resulting in 1.5Tio per unit of work (1 worker per AZ).*


4. *A worker node can manage up to 250 pods by default. This number can be adjusted via the `podsPerCore` parameter (e.g., 10 pods per core on a 4-core node results in a maximum of 40 pods). For detailed technical information, refer to [Managing Pods documentation](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*


5. *The PaaS OpenShift offering includes native access to the three availability zones, eliminating the need for additional subscriptions.*


6. *It is possible to add block storage to the OpenShift cluster later on.*


7. *Nodes are deployed evenly across the three availability zones (1 node per zone). It's not possible to unbalance a cluster by assigning more nodes to a single zone.*

### Offerta RedHat fornita all'interno della piattaforma OpenShift Cloud Temple

La piattaforma si basa su Redhat Openshift 4, integrata con [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffer} />

## Data Protection Strategy for Your OpenShift PaaS by Cloud Temple

The responsibility for backing up and restoring the OpenShift Platform as a Service (PaaS) lies with Cloud Temple for the ETCD component of platform management. The backup and restore duties for deployment and application data are handled by the Client.

Cloud Temple provides its clients with Veeam Kasten K10, a specialized platform designed for managing data in Kubernetes environments. Tailored to address data protection needs, Kasten K10 offers robust functionalities for backup, restore, migration, and disaster recovery. It seamlessly integrates with Kubernetes clusters, whether managed on cloud platforms or on-premises, and adapts to various use cases, including migrating clusters between different Kubernetes distributions such as Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

A primary use case for Kasten K10 is **Kubernetes cluster migration across different platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 offers straightforward tools for managing these migrations:

- **Data Backup and Protection**: During migrating Kubernetes Vanilla or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift, the initial step involves backing up application data and states. Kasten K10 effortlessly integrates with Kubernetes APIs to identify applications, their dependencies, and associated persistent volumes (PV). It safeguards databases, configurations, and secrets, supporting a wide range of storage providers like S3, Google Cloud Storage, Azure Blob Storage, etc., creating application snapshots for migration. These backups are securely stored with encryption and granular access controls, ensuring data protection throughout the process.

- **Portability and Migration**: Migrating between Kubernetes distributions (Vanilla or Tanzu) and Red Hat solutions (OpenShift or Kubernetes Engine) can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this by providing an abstraction layer for application portability. During migration, it replicates configurations and data from a source cluster to a target cluster, considering each environment's unique constraints. For instance, Kubernetes objects like ConfigMaps, Secrets, PVs, and CRDs (Custom Resource Definitions) can be migrated while respecting distribution-specific limitations, whether on a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, minimizing manual error risks. Moreover, Kasten K10 supports both incremental and full migrations, offering real-time visibility into migration status for efficient management and monitoring of the transition.

- **Multi-cloud and Multi-distribution Compatibility**: Designed for hybrid and multi-cloud environments, Kasten K10 makes it an ideal solution for migrating applications from Tanzu or Vanilla clusters to Red Hat cloud platforms (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructure. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or modernization strategies.

- **Simplified Management and Automation**: Kasten K10 features an intuitive user interface enabling administrators to manage migration and backup operations effortlessly without in-depth expertise for each Kubernetes distribution. The solution also includes automation capabilities that allow defining recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restores based on maintenance windows, perform post-migration validation tests, and automate failover procedures in case of issues on the source cluster.

- **Security and Compliance**: In critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are paramount. Kasten K10 ensures data encryption both in transit and at rest, alongside auditing and traceability options for backup and restore operations. These capabilities are crucial for ensuring the security of migrated data, whether in production or testing environments. Kasten K10 is an indispensable solution for companies aiming to migrate Kubernetes Vanilla or VMware Tanzu clusters efficiently and securely into Red Hat Kubernetes Engine or OpenShift.

Billing is based on worker nodes:

| Unit of Work - Redhat Openshift 4 with Data Foundations Backup Solution | Unit       | SKU                                                                   |
| :-------------------------------------------------------------------- | :-------- | :------------------------------------------------------------ |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility | 3 workers  | csp:fr1:paas:kasten:3wkr:v1                               |

**Note**: Disk storage volume required for optimal backup functionality on the reception environment (usually S3 storage) is not included in OpenShift or Kasten worker units. It needs to be provisioned separately based on your data protection requirements.

**(1)** _OADP is not natively installed within the cluster. Only Kasten is activated for managing migrations, backups, and restores_

## Load Balancers

L'ambiente **SecNumCloud OpenShift** offre soluzioni di bilanciamento del carico adattate a più perequazioni funzionali, garantendo una gestione sicura ed ottimizzata del traffico.

I load balancers coprono quattro perequazioni distinte, sfruttando diversi livelli del modello OSI:

- **Accesso agli strumenti di amministrazione** (server API e console OpenShift)
- **Traffico HTTP/HTTPS pubblico**
- **Traffico HTTP/HTTPS privato**
- **Traffico specifico che richiede una personalizzazione avanzata**

### Accesso ai strumenti di amministrazione

L'accesso agli strumenti di amministrazione è sicuro tramite distributori di carico dedicati. Questi sono protetti da controlli di sicurezza rafforzati, tra cui una lista bianca ammissibile gestita tramite la console **Cloud Temple**, garantendo una gestione rigorosa degli accessi.

### Traffico HTTP/HTTPS pubblico  

I **LoadBalancers pubblici**, basati su **HAProxy**, operano al livello **4** del modello OSI. Permettono di esporre le tue applicazioni in **HTTP/HTTPS** tramite **router** e **ingress**, garantendo una distribuzione efficiente ed efficiente del traffico di ingresso.

### Traffico HTTP/HTTPS privato (Interconnessione con i tuoi servizi IaaS SNC)

I **LoadBalancers privati** facilitano la comunicazione con i tuoi servizi **IaaS SNC** senza esposizione pubblica. Come i loro omologhi pubblici, assicurano la distribuzione del traffico **HTTP/HTTPS**, mantenendo un ambiente sicuro e isolato.

### Traffic Specifico 

Il **traffic specifico** è gestito tramite il LoadBalancer **MetalLB**. Egli offre soluzioni avanzate personalizzabili, come:

- Connettività a database tramite TCP
- Gestione dei flussi UDP per applicazioni in tempo reale o con bassa latenza
- Routing di protocolli avanzati come QUIC o MQTT-SN, offrendo così maggiore flessibilità

Questa soluzione consente di gestire i tuoi flussi specifici, sia per le collegamenti privati che per le esigenze di esposizione pubblica.

Il routing è assicurato tramite **indirizzi IP dedicati pubblici e privati**. Di default, vengono assegnate ad alcune ip per l'esposizione dei tuoi servizi:

- **4 indirizzi IP pubblici**
- **254 indirizzi IP privati**

Se queste risorse non sono sufficienti a supportare le tue cariche di lavoro, puoi richiedere ulteriori assegnazioni dai nostri servizi, sia per indirizzi pubblici che privati.

> **Nota**: I LoadBalancers integrati non forniscono una **WAF**. Una soluzione **WAF as a Service** sarà disponibile in futuro.

## Permessi e Authorizzazioni

Ecco le principali autorizzazioni implementate:

| Gruppo                | API di d'API              |                                                                 Permissions delle Risorse                                                                                          |
|-----------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------|
| Core                   | ("")/Apps               | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
| Core                   | ("")                    | Secrets Create                                                                                           |
| config.kio.kasten.io  | Profiles                 | Get, List, Watch, Create, Update, Patch, Delete                                                                           |
| config.kio.kasten.io  | PolicyPresets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings | TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
| config.kio.kasten.io  | Tutti                   | Get, List (*)                                                                                                        |
| Batch                  | CronJobs                | Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
| Autoscaling            | HorizontalPodAutoscalers | Create, Get, List, Watch, Update, Patch, Delete                                                                           |
| Networking             | Ingresses               | NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
| Policy                  | PodDisruptionBudgets     | Create, Get, List, Watch, Update, Patch, Delete                                                                           |
| Route                   | (OpenShift)              | Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
| Build                   | (OpenShift)              | BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
| Image                   | (OpenShift)              | ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
| Apps                    | (OpenShift)              | DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
| Template                | (OpenShift)              | Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
| Authorization           | Roles                     | RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
| RBAC                    | Roles                     | RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
| Project                  | (OpenShift)              | Projects Get, Delete, Update, Patch                                                                                 |
| Operators               | Subscriptions, CatalogSources, InstallPlans, OperatorGroups | ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete |
| Cert-Manager             | Certificates, Issuers     | CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
| Logging                  | (OpenShift)              | ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
| Storage                  | VolumeSnapshots          | Get, List, Watch, Create, Update, Patch, Delete                                                                           |
| Ceph                     | (Rook)                   | CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
| NooBaa                    | BackingStores, BucketClasses | BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
| ObjectBucket            | ObjectBucketClaims, ObjectBuckets | ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
| OCS                      | StorageClusters, StorageConsumers | StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
| Local                     | Storage                  | LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
| CSI                      | Addons                   | CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
| Metrics                   | Pods                     | Nodes Get                                                                                              |
| Security                  | PodSecurityPolicyReviews | Create                                                                                               |
| Custom                    | Resources                 | Varie risorse personalizzate legate a Kasten K10, Keycloak, ecc. Create, Get, List, Watch, Update, Patch, Delete                                        |

### Restrizioni e requisiti di sicurezza su OpenShift SecNumCloud

SecNumCloud è una soluzione di sicurezza basata su hardware che offre funzionalità avanzate per la protezione dei dati sensibili, in particolare per applicazioni critiche. Quando si integra con OpenShift, è fondamentale comprendere e applicare le restrizioni e i requisiti di sicurezza specifici per garantire un'infrastruttura sicura ed efficiente.

### Configurazione delle restrizioni di accesso

1. **Autenticazione**: Assicurarsi che l'autenticazione degli utenti sia effettuata tramite meccanismi di autenticazione forte, come le credenziali biommetriche o i token hardware (USB).
2. **Autorizzazione**: Implementare un sistema di autorizzazione basato su ruoli (RBAC) per limitare l'accesso alle risorse in base ai compiti e alle responsabilità degli utenti.
3. **Controllo delle accessi**: Utilizzare le funzionalità di controllo delle accessi di OpenShift, come i Role Based Access Control (RBAC), per definire e gestire l'accesso agli oggetti OpenShift.
4. **Auditing**: Attivare il logging e l'auditing per monitorare le attività degli utenti e garantire la conformità normativa.

### Sicurezza dei dati in transito e a riposo

1. **Crittografia**: Utilizzare TLS (Transport Layer Security) per crittografare i dati in transito tra componenti OpenShift e SecNumCloud, oltre che implementare la crittografia a riposo per proteggere i dati memorizzati.
2. **Segrazione dei dati**: Eseguire una segregazione rigorosa dei dati sensibili da quelli non sensibili, sia in termini di accesso che di trasferimento.
3. **Controllo degli aggiornamenti**: Mantenere le versioni delle applicazioni e dei componenti OpenShift aggiornate per mitigare i rischi legati alle vulnerabilità di sicurezza note.

### Gestione delle vulnerabilità

1. **Scansione delle vulnerabilità**: Implementare scansioni regolari delle vulnerabilità utilizzando strumenti specializzati come OWASP ZAP o Nessus per individuare e mitigare le minacce prima che possano essere sfruttate.
2. **Patching**: Aggiornare costantemente i sistemi operativi, i componenti OpenShift e SecNumCloud con le patch di sicurezza più recenti per ridurre il rischio di attacchi.
3. **Monitoraggio continuo**: Utilizzare strumenti di monitoraggio in tempo reale per rilevare anomalie e potenziali minacce alla sicurezza.

### Compliance normativa

1. **Conformità GDPR**: Assicurarsi che le pratiche di gestione dei dati rispettino i requisiti del Regolamento Generale sulla Protezione dei Dati (GDPR), in particolare per quanto riguarda il consenso, la trasparenza e i diritti degli individui.
2. **Conformità PCI DSS**: Se applicabile, garantire che le soluzioni di pagamento rispettino gli standard PCI DSS (Payment Card Industry Data Security Standard).
3. **Certificazioni**: Mantenere e aggiornare i certificati di conformità secondo le normative pertinenti per il settore.

### Sicurezza degli ambienti di sviluppo

1. **Controllo delle immagini**: Implementare un processo rigoroso di controllo delle immagini Docker, inclusa la verifica delle firme digitali e l'uso di immagini certificate da fonti affidabili.
2. **Test di sicurezza**: Incorporare test di sicurezza nel ciclo di sviluppo continuo (CI) per individuare e correggere vulnerabilità precocemente.
3. **Gestione delle chiavi**: Gestire le chiavi di crittografia in modo sicuro, con un'accesso limitata e una rotazione regolare.

### Sicurezza dei componenti di OpenShift

1. **Controllo degli aggiornamenti**: Mantenere aggiornati i componenti di OpenShift (Master, Node, Registry) per garantire la protezione contro le vulnerabilità note.
2. **Firewall e regole di sicurezza**: Configurare firewall e regole di sicurezza appropriati per limitare l'accesso alle porte e ai servizi OpenShift.
3. **Auditing dei log**: Monitorare e analizzare i log di sistema, applicazioni e OpenShift per individuare eventuali attività sospette o anomale.

### Sicurezza delle applicazioni

1. **Controllo degli input**: Implementare misure di controllo degli input robuste per prevenire l'attacco a Injezione (SQLi, XSS, etc.).
2. **Validazione dei dati**: Validare e purificare i dati in ingresso prima di elaborarli dalle applicazioni.
3. **Protezione contro le API abusi**: Utilizzare meccanismi di protezione delle API (rate limiting, autenticazione degli API) per prevenire gli attacchi di forza bruta e l'abuso delle API.

### Sicurezza dei componenti SecNumCloud

1. **Accesso sicuro**: Implementare meccanismi di autenticazione robusti (ad esempio, certificati hardware) per garantire un accesso sicuro ai componenti SecNumCloud.
2. **Controllo degli aggiornamenti**: Mantenere aggiornati i componenti SecNumCloud con le patch di sicurezza più recenti e seguire le raccomandazioni di sicurezza fornite dal produttore.
3. **Auditing e logging**: Utilizzare strumenti di auditing e logging per monitorare l'attività dei componenti SecNumCloud, in particolare per quanto riguarda le operazioni critiche come la generazione di chiavi e la gestione delle firme.

### Sicurezza della rete

1. **Segmentazione del traffico**: Segmentare il traffico tra OpenShift e SecNumCloud per limitare l'impatto di eventuali violazioni.
2. **Firewall e regole di sicurezza**: Configurare firewall e regole di sicurezza appropriati per controllare l'accesso alle porte e ai servizi cruciali.
3. **VPN e tunnel di sicurezza**: Utilizzare VPN o tunnel di sicurezza (ad esempio, OpenVPN) per proteggere i dati in transito tra le infrastrutture.

### Sicurezza dei dati sensibili

1. **Crittografia a riposo**: Implementare la crittografia a riposo per proteggere i dati sensibli memorizzati su dischi e database.
2. **Controllo degli accessi basato sui ruoli**: Utilizzare RBAC per limitare l'accesso ai dati sensibili in base al ruolo dell'utente.
3. **Auditing dei log di accesso**: Monitorare e analizzare i log di accesso per individuare eventuali tentativi di accesso non autorizzati o anomalie nei modelli di accesso.

### Sicurezza delle identità

1. **Autenticazione forte**: Implementare meccanismi di autenticazione forte (ad esempio, biometria, token hardware) per proteggere le identità degli utenti.
2. **Gestione delle password**: Utilizzare politiche di gestione delle password robuste, inclusa la rotazione periodica e l'uso di password complesse.
3. **Single Sign-On (SSO)**: Implementare soluzioni SSO per semplificare l'accesso sicuro a più applicazioni e servizi.

### Sicurezza dei processi

1. **Gestione delle patch**: Stabilire un processo di gestione delle patch regolare per garantire che tutti i sistemi siano aggiornati con le ultime correzioni di sicurezza.
2. **Revisione del codice**: Incorporare revisioni del codice e audit di sicurezza nel ciclo di sviluppo per individuare e correggere vulnerabilità precocemente.
3. **Pianificazione delle incidenti**: Sviluppare un piano di risposta agli incidenti che includa procedure per isolare, contenere e mitigare le violazioni della sicurezza.

### Formazione e consapevolezza del personale

1. **Formazione continua**: Fornire formazione regolare sulla sicurezza informatica per il personale coinvolto nello sviluppo, nella gestione e nell'operatività di OpenShift SecNumCloud.
2. **Simulazioni di phishing**: Condurre simulazioni di phishing per valutare la consapevolezza del personale e identificare aree di miglioramento.
3. **Politiche di sicurezza**: Mantenere politiche di sicurezza aggiornate e comunicarle chiaramente al personale, inclusi i processi per segnalare incidenti o preoccupazioni di sicurezza.

In sintesi, la sicurezza su OpenShift SecNumCloud richiede un approccio multidimensionale che affronti le restrizioni e i requisiti di sicurezza da diverse prospettive, dalle configurazioni di accesso alle misure di protezione dei dati in transito e a riposo. La conformità normativa, la gestione delle vulnerabilità e l'educazione del personale sono componenti cruciali per mantenere un ambiente sicuro ed efficiente.

### Piano di controllo dedicato

L'esecuzione delle cariche di lavoro sul **piano di controllo** è strettamente vietata. Questa restrizione garantisce la sicurezza e lo stabilità della piattaforma OpenShift su **SecNumCloud**, limitando l'accesso alle risorse critiche.

### Prohibition of containers with elevated privileges (rootless only)  

In accordance with the security requirements of the SecNumCloud repository, only **rootless containers** are permitted. This approach enhances security by preventing any privileged access to containers.  

Applications requiring elevated privileges will need to be adapted since their deployment will not be allowed. This constraint also applies to **Helm Charts** and **operators** utilizing non-rootless images, making their use incompatible with the infrastructure.

### Limitazioni per i Role Cluster

Nel nostro offerta OpenShift, la gestione degli accessi al livello del cluster è rigorosamente controllata per garantire **sicurezza e conformità** con SecNumCloud.

Ciò comporta delle **limitazioni sui Role Cluster**, che limitano i privilegi globali. Sebbene queste limitazioni possano richiedere alcune modifiche tecniche, sono essenziali per rafforzare la resilienza e lo stabilità dell'ambiente.

La nostra equipe di supporto è a vostra disposizione per aiutarvi nell'adattamento delle vostre configurazioni e per consigliarvi le alternative possibili.

### Limitazioni delle Security Context Constraints (SCC)

Le **Security Context Constraints (SCC)** sono imposte e non possono essere modificate dagli utenti. Di conseguenza, i parametri di esecuzione dei container (privilegi d'accesso, capacità Linux, ecc.) sono predefiniti e non personalizzabili.

Questa limitazione serve a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Le applicazioni che richiedono contesti di sicurezza specifici devono essere adattate per rispettare le SCC in vigore.

A livello operativo, ciò può comportare aggiustamenti architettonici e modifiche nei processi di deployment, soprattutto per le **Helm Charts** e gli **operatori** che non rispettano queste restrizioni.

### Limitazioni per le Custom Resource Definitions (CRD)

Per garantire la **conformità SecNumCloud**, l'uso delle **Custom Resource Definitions (CRDs)** e dei controller personalizzati è limitato.

Questa misura, legata ai diritti di accesso al cluster, impedisce il deployment di risorse non autorizzate che potrebbero compromettere la stabilità e la sicurezza dell'infrastruttura. Si applica anche agli operatori e alle Chart Helm, con limitazioni sui diritti **RBAC**.

Le CRDs non certificati possono essere respinte per garantire l'integrità del cluster. Solo le CRD provenienti da operatori o Chart Helm certificati sono autorizzate dopo la validazione dei nostri servizi.

La nostra equipe di supporto può guidarvi in questo processo e consigliarvi sulle migliori pratiche da adottare.

### Rimozione del supporto per le indirizzi IP dinamici per i runner OpenShift SecNumCloud

I **runner OpenShift SecNumCloud** devono essere configurati con **indirizzi IP fissi**.

Questa richiesta garantisce un accesso sicuro alle **API OpenShift**, alle interfacce di amministrazione e agli strumenti di gestione degli accessi della console **Cloud Temple**.

Gli indirizzi IP dinamici non sono supportati, richiedendo una configurazione specifica per garantire la connettività e la sicurezza dei componenti.

## Conoscenze utili

• In caso di obsolescenza dei componenti hardware alla livello della piattaforma, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzioni del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma puoi utilizzare [le piattaforme di test RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della tua infrastruttura, è consigliabile utilizzare il provider Terraform ufficiale d'OpenShift.