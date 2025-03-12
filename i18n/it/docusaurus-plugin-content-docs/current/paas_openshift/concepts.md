---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentazione di RedHat Openshift

**Red Hat OpenShift** è una piattaforma di contenitori aziendale che automatizza il deployment, la gestione e la scalabilità delle applicazioni containerizzate. È una piattaforma costruita attorno a Docker, un sistema di containerizzazione che consente di impacchettare un'applicazione e le sue dipendenze in un container virtuale, e Kubernetes, un sistema di orchestrazione di container, che gestisce l'esecuzione e il coordinamento dei container su un cluster di server.

### Funzionalità principali di Red Hat OpenShift:

- **Deployment e gestione automatizzati:** OpenShift semplifica il processo di deployment delle applicazioni automatizzando le routine di gestione come lo scaling, la salute e il ciclo di vita dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto per più linguaggi e servizi:** La piattaforma supporta una vasta gamma di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come messaging, caching e database, consentendo ai sviluppatori di concentrarsi sul codice anziché sull'infrastruttura.

- **Integrazione continua (CI) e deployment continuo (CD):** OpenShift integra strumenti di CI/CD che automatizzano la pipeline di sviluppo del software, dal commit iniziale fino al deployment in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle performance e la diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Maggiore sicurezza:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, separazione dei compiti e gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'utilizzo delle risorse, riduce il time-to-market e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente lo scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni di sviluppo software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di storage e gestione dei dati progettata per funzionare senza problemi con l'ecosistema OpenShift. Offre un'infrastruttura di dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni focalizzati sui container e sui microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, fornendo una solida fondazione per le applicazioni aziendali critiche.

#### Funzionalità Chiave di OpenShift Data Foundation:

- **Storage Persistente:** ODF fornisce un livello di storage persistente per i container, essenziale per applicazioni aziendali come database, sistemi di gestione dei contenuti e applicazioni che richiedono uno stato persistente.

- **Multicloud e Ibrido:** Progettato per il cloud ibrido e multicloud, ODF consente un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e Orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, lo scaling e la gestione del ciclo di vita dello storage in base alle esigenze delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replica e lo snapshotting dei dati per garantire alta disponibilità e durata dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei Dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, oltre a politiche di sicurezza e conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità Operativa:** ODF consente alle aziende di gestire efficacemente i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze in continua evoluzione delle applicazioni moderne.

- **Semplificazione della Gestione dei Dati:** Automatizzando molte attività di gestione dei dati, ODF riduce la complessità e libera risorse IT per concentrarsi su iniziative a maggiore valore aggiunto.

- **Ottimizzazione dei Costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di storage aiuta a ottimizzare i costi evitando il sovrapprovvigionamento e utilizzando in modo più efficiente le risorse disponibili.

- **Miglioramento delle Prestazioni:** ODF è progettato per fornire elevate prestazioni per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation è una soluzione di storage di dati avanzata che rafforza l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo uno storage persistente, automatizzato e sicuro, ODF svolge un ruolo cruciale nel consentire alle aziende di sfruttare appieno il potenziale delle tecnologie di container e cloud ibrido.

## Architettura generale della piattaforma

### Generalità

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su [**tre zone di disponibilità distinte**](../additional_content/concepts_az.md) all'interno della stessa [regione](../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma si compone di un piano di controllo e nodi di lavoro, tutti gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è equamente distribuito sulle tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da lame di calcolo, disposti in modo tale che ogni zona di disponibilità ne contenga una.

Per i nodi di lavoro, sono disponibili diversi tipi di lame di calcolo, consentendo un adattamento flessibile a vari requisiti operativi:

| Unità di lavoro Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unità                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1                                                                          | 1 piano dedicato            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 GB di RAM - 512 GB FLASH 1500 iops)                      | 3 workers dedicati        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 GB di RAM - 512 GB FLASH 1500 iops)                   | 3 workers dedicati        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 GB di RAM - 512 GB FLASH 1500 iops)                | 3 workers dedicati        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 GB di RAM - 512 GB FLASH 1500 iops)                 | 3 workers dedicati        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 TB di RAM - 512 GB FLASH 1500 iops)                    | 3 workers dedicati        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 GB di RAM - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 workers dedicati + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift Cloud Temple sono disponibili su base pay-as-you-go o con prenotazione di 12 mesi.

**Note**:

1. *Il mantenimento delle condizioni operative e di sicurezza del piano di controllo è responsabilità di Cloud Temple come parte di un servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è volutamente limitata a livello software per un piano di controllo a 30 worker nodes (indipendentemente dal tipo di worker) e a uno storage persistente globale di 50 TiB. Se questi limiti sono bloccanti per il vostro progetto, si prega di contattare il supporto.*

3. *Ogni worker node è fornito con 512GB di storage flash Bloc, che fa 1.5 TB per ogni unità di lavoro (1 worker per AZ).*
4. *Un nodo worker può gestire fino a 250 pod per default. Questo numero è regolabile tramite il parametro podsPerCore - per esempio, con 10 pod per core su un nodo 4-core, avrete un massimo di 40 pod. Per ulteriori dettagli tecnici, consultare la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida ai limiti di OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS OpenShift include nativamente l'accesso alle 3 zone di disponibilità, senza che sia necessario sottoscrivere altro.*

6. *È possibile aggiungere successivamente dello storage a blocchi al cluster OpenShift.*

7. *I nodi sono distribuiti in modo equilibrato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile squilibrare un cluster assegnando un numero maggiore di nodi a una singola zona.*

### Offerta RedHat distribuita nel contesto della piattaforma OpenShift Cloud Temple

La piattaforma è una RedHat OpenShift 4 basata su [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Strategia di backup della vostra piattaforma PaaS OpenShift

Il backup e il ripristino della piattaforma PaaS OpenShift sono responsabilità di Cloud Temple per la parte **ETCD** in quanto gestore della piattaforma. **Il backup e il ripristino per la parte distribuzione e dati applicativi sono responsabilità del Committente**.

Cloud Temple mette a disposizione per i suoi clienti l’offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), una piattaforma specializzata nella gestione dei dati per gli ambienti Kubernetes. Progettata per rispondere alle esigenze di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra nativamente con gli ambienti Kubernetes, siano essi gestiti su cluster cloud o on-premise, e può adattarsi a diversi casi d'uso, inclusa la migrazione di cluster tra differenti distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei principali casi d'uso di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Sia per un passaggio verso un'infrastruttura più robusta, sia per consolidare gli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è eseguire il backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze e i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei segreti. Kasten K10 supporta una vasta gamma di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), permettendo la creazione di snapshot delle applicazioni da migrare. Questi backup sono poi archiviati in modo sicuro con opzioni di crittografia e controllo granulare degli accessi, garantendo la sicurezza dei dati lungo tutto il processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze nelle architetture e nelle configurazioni specifiche di ciascuna piattaforma. Kasten K10 semplifica questo processo fornendo un livello di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica le configurazioni e i dati da un cluster sorgente a un cluster di destinazione, tenendo conto delle specificità di ciascun ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV, così come le CRD (Custom Resource Definitions) possono essere migrati tenendo conto delle restrizioni di ciascuna distribuzione Kubernetes, sia che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo notevolmente il rischio di errori manuali. Inoltre, Kasten K10 consente una migrazione progressiva o completa, in base alle esigenze, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.

 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che cercano di migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo garantisce la massima flessibilità e consente ai team DevOps di scegliere l'ambiente migliore in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente le operazioni di migrazione e backup senza richiedere una competenza approfondita di ciascuna piattaforma Kubernetes. La soluzione è anche dotata di funzionalità di automazione che consentono di definire politiche di migrazione e backup ricorrenti, integrandosi con le pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in base alle finestre di manutenzione, eseguire test di validazione post-migrazione e automatizzare i processi di failover in caso di problemi sul cluster sorgente.

 - **Sicurezza e conformità**: nell'ambito delle migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità alle normative (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 assicura la crittografia dei dati in transito e a riposo, offrendo opzioni di audit e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione imprescindibile per le aziende che desiderano migrare efficacemente e in tutta sicurezza cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

La fatturazione è calcolata sul numero di worker node.

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unité     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota** : *Attenzione, la volumetria disco necessaria per il buon funzionamento del backup deve essere prevista sull'ambiente di destinazione del backup, generalmente in storage S3. Non è inclusa nelle unità di lavoro Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è attivato per la gestione delle migrazioni, dei backup e dei ripristini_

## Diritti e Permessi

Ecco i permessi principali implementati:

|       Gruppo       |         d'API          |                                                                                       Risorse Permessi                                                                                       |
|--------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Toutes         |                                                                                    les ressources (*) Get, List                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Diverses ressources personnalisées liées à Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Limiti attuali dell'offerta Redhat Openshift in ambiente SecNumCloud

Ecco alcune limitazioni indotte dalla qualifica SecNumCloud:

### Piano di controllo dedicato

I carichi di lavoro non possono essere eseguiti sul piano di controllo a causa delle restrizioni inerenti alla gestione delle risorse e alla sicurezza della piattaforma OpenShift su SecNumCloud.

### Divieto di distribuire immagini con privilegi elevati (rootless)

Per conformarsi ai requisiti di sicurezza del repository SecNumCloud, è obbligatorio utilizzare contenitori senza privilegi (rootless).

Questo approccio rafforza la sicurezza globale impedendo qualsiasi accesso privilegiato ai contenitori. Le applicazioni che richiedono contenitori con privilegi dovranno essere modificate, poiché il loro dispiegamento non sarà autorizzato.

Questa restrizione si estende anche agli Helm Charts e agli operatori che utilizzano immagini non rootless, rendendo impossibile la loro distribuzione all'interno dell'infrastruttura.

### Restrizioni sui diritti dei ClusterRole

Nell'ambito della nostra offerta OpenShift, implementiamo una gestione rigorosa dei diritti di accesso a livello di cluster, in conformità con i requisiti SecNumCloud.

Questo approccio implica una limitazione dei ClusterRole per i nostri clienti, limitando così alcuni aspetti della gestione globale del cluster. Sebbene questa misura possa inizialmente sembrare restrittiva, essa mira a rafforzare la sicurezza e la stabilità dell'infrastruttura.

Siamo consapevoli che questo possa comportare delle sfide tecniche, in particolare nella configurazione di parametri avanzati, e potenzialmente delle implicazioni legate all'adattamento delle vostre applicazioni o all'acquisizione di strumenti complementari.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi su questo argomento.

### Il contesto SCC non può essere modificato nell'ambiente SecNumCloud

Le Security Context Constraints (SCC) sono soggette a restrizioni severe e non possono essere modificate dagli utenti. Questa limitazione ha importanti ripercussioni sul dispiegamento e l'esecuzione dei contenitori.

In pratica, ciò significa che i parametri di esecuzione dei contenitori, come i privilegi di accesso al sistema o le capacità Linux, sono predefiniti e non personalizzabili.

Questa misura, motivata da requisiti di sicurezza, mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Di conseguenza, le applicazioni che necessitano di contesti di sicurezza specifici, in particolare quelle che richiedono accessi privilegiati, possono incontrare ostacoli durante il dispiegamento.

Dal punto di vista tecnico, ciò può implicare una revisione dell'architettura delle applicazioni e un adattamento dei processi di dispiegamento per conformarsi alle SCC predefinite. Dal punto di vista operativo, questa restrizione può ridurre la flessibilità dei dispiegamenti e aumentare la complessità della gestione di alcune applicazioni nell'ambiente OpenShift, in particolare quelle che utilizzano Helm Charts o operatori che non rispettano le SCC in vigore.

### Limitazioni sulle Custom Resource Definitions (CRDs)

Per conformarsi alla qualifica SecNumCloud, una restrizione importante riguarda l'uso delle Custom Resource Definitions (CRDs) e dei controller personalizzati. Questa misura, legata ai diritti sul cluster, mira a prevenire il dispiegamento di risorse personalizzate potenzialmente instabili o non autorizzate.

Questa limitazione si applica anche agli operatori e agli Helm Charts, con un impatto diretto sui diritti RBAC, poiché le CRDs permettono di estendere l'API Kubernetes. Di conseguenza, gli operatori e gli Helm Charts devono passare attraverso una catena di certificazione presso i nostri servizi per garantire la loro conformità e sicurezza.
Les CRD personalizzate, in particolare quelle che rispondono a esigenze aziendali specifiche, possono essere rifiutate nell'infrastruttura a causa dei rischi che presentano per la stabilità e la sicurezza della piattaforma. Questa politica, concepita per proteggere l'integrità e l'affidabilità del cluster, autorizza solo le CRD provenienti da operatori o Helm Charts ufficialmente certificati.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi sulle buone pratiche da adottare in questo contesto.

### Nessun supporto per IP dinamici per i runners

La piattaforma OpenShift SecNumCloud richiede che i runners siano configurati con indirizzi IP fissi. Questa esigenza è motivata dalla necessità di autorizzare gli IP che gestiscono la nostra console Cloud Temple, necessaria per lo strumento di gestione degli accessi alle API. Gli indirizzi IP autorizzati sono inoltre utilizzati per accedere all'API OpenShift nonché alle interfacce di amministrazione di OpenShift e Shiva.

Pertanto, l'utilizzo di indirizzi IP dinamici non è supportato per questi componenti, imponendo la configurazione di IP fissi per garantire la sicurezza e l'accesso alle API.

## Bilanciatori di carico

L'ambiente SecNumCloud Openshift offre opzioni di Load Balancing a diversi livelli per garantire una gestione sicura ed efficiente del traffico. L'API del Load Balancer è accessibile tramite le porte 6443 e 443, con un controllo di sicurezza garantito da una whitelist gestita dalla console Cloud Temple. Questa API utilizza un indirizzo IP pubblico connesso al nostro backbone, ma non è accessibile per impostazione predefinita, rafforzando così la sicurezza degli accessi.

Per il Load Balancer privato, l'ambiente utilizza Ingress (nginx) come soluzione predefinita, il che consente di gestire il traffico interno in modo efficiente. Inoltre, un supporto TCP è disponibile tramite l'infrastruttura IaaS di Cloud Temple, offrendo così una maggiore flessibilità per le applicazioni che necessitano di bilanciamento del carico a questo livello.

Per quanto riguarda il Load Balancer pubblico, il supporto del livello 4 è garantito tramite Ingress, sebbene esistano attualmente alcune limitazioni con il comando "expose". Ciò significa che il sistema è in grado di gestire connessioni TCP e UDP in modo affidabile continuando a evolversi per offrire una maggiore compatibilità e flessibilità.

**Da notare**: il Load Balancer integrato non funge da WAF. Un'offerta di WAF as a Service è prevista per il secondo semestre del 2025.

## Da sapere

• Se i componenti hardware a livello della piattaforma diventano obsoleti e una migrazione verso nuove risorse di calcolo è necessaria, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzione del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma potete utilizzare [le piattaforme di test RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della vostra infrastruttura, privilegiate il provider Terraform ufficiale di OpenShift piuttosto che quello di Cloud Temple.