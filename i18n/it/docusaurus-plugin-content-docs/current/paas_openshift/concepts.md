---
title: Concetti
---

## Presentazione di RedHat Openshift

**Red Hat OpenShift** è una piattaforma di container enterprise che automatizza il deployment, la gestione e la scalabilità delle applicazioni containerizzate. È una piattaforma costruita attorno a Docker, un sistema di containerizzazione che permette di impacchettare un'applicazione e le sue dipendenze in un container virtuale, e Kubernetes, un sistema di orchestrazione di container, che gestisce l'esecuzione e il coordinamento dei container su un cluster di server.

### Funzionalità principali di Red Hat OpenShift:

- **Deployment e gestione automatizzati:** OpenShift semplifica il processo di deployment delle applicazioni automatizzando le routine di gestione come lo scaling, la salute e il ciclo di vita dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto di più linguaggi e servizi:** La piattaforma supporta un'ampia varietà di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come la messaggistica, il caching e i database, permettendo così agli sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e deployment continuo (CD):** OpenShift integra strumenti di CI/CD che automatizzano la pipeline di sviluppo del software, dal commit iniziale fino al deployment in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e la diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'utilizzo delle risorse, riduce il time-to-market e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente lo scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e di conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni allo sviluppo del software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di storage e gestione dei dati progettata per funzionare in modo trasparente con l'ecosistema OpenShift. Offre un'infrastruttura di dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni incentrati sui container e i microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, fornendo una base solida per le applicazioni aziendali critiche.

#### Funzionalità chiave di OpenShift Data Foundation:

- **Storage persistente:** ODF fornisce uno strato di storage persistente per i container, essenziale per le applicazioni aziendali come i database, i sistemi di gestione dei contenuti e le applicazioni che richiedono uno stato persistente.

- **Multicloud e ibrido:** Progettato per il cloud ibrido e multicloud, ODF permette un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, lo scaling e la gestione del ciclo di vita dello storage in funzione delle necessità delle applicazioni.

- **Alta disponibilità e resilienza:** ODF utilizza la replica e lo snapshotting dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, così come politiche di sicurezza e di conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità operativa:** ODF permette alle aziende di gestire efficacemente i loro dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze mutevoli delle applicazioni moderne.

- **Semplificazione della gestione dei dati:** Automatizzando numerose attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative a maggior valore aggiunto.

- **Ottimizzazione dei costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di storage aiuta a ottimizzare i costi evitando il sovra-provisioning e utilizzando più efficacemente le risorse disponibili.

- **Miglioramento delle prestazioni:** ODF è progettato per fornire prestazioni elevate per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation è una soluzione di storage dati avanzata che rafforza l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo uno storage persistente, automatizzato e sicuro, ODF gioca un ruolo cruciale nell'abilitare le aziende a sfruttare pienamente il potenziale delle tecnologie di container e di cloud ibrido.

## Architettura generale della piattaforma

### Generalità

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su **tre zone di disponibilità distinte** all'interno di una stessa regione di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma si compone di un piano di controllo e di nodi di lavoro, tutti gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è distribuito equamente sulle tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da lame di calcolo, disposte in modo che ogni zona di disponibilità ne contenga una.

Per i nodi di lavoro, sono disponibili diversi tipi di lame di calcolo, permettendo così un adattamento flessibile a varie esigenze operative:

| Unità di lavoro Redhat Openshift 4 with Data Foundations - On Demand - 1 mese                                                | Unità                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1                                                                        | 1 piano dedicato        | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 core / 20 thread - 64 GB di ram - 512 GB FLASH 1500 iops)                         | 3 worker dedicati       | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 core / 40 thread - 128 GB di ram - 512 GB FLASH 1500 iops)                      | 3 worker dedicati       | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 core / 64 thread - 384 GB di ram - 512 GB FLASH 1500 iops)                   | 3 worker dedicati       | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 core / 96 thread - 768 GB di ram - 512 GB FLASH 1500 iops)                    | 3 worker dedicati       | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 core / 112 thread - 1.5 TB di ram - 512 GB FLASH 1500 iops)                       | 3 worker dedicati       | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 core / 64 thread - 512 GB di ram - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB)    | 3 worker dedicati + GPU | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift Cloud Temple sono disponibili in modalità pay-as-you-go o con prenotazione di 12 mesi.

**Note**:

1. *Il mantenimento in condizioni operative e di sicurezza del piano di controllo è responsabilità di Cloud Temple come parte di un servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è volutamente limitata a livello software a un piano di controllo di 30 nodi worker (indipendentemente dal tipo di worker) e a uno storage persistente globale di 50 TB. Se questi limiti sono bloccanti per il vostro progetto, vi preghiamo di contattare il supporto.*

3. *Ogni nodo worker è fornito con 512 GB di storage flash a blocchi, per un totale di 1,5 TB per ogni unità di lavoro (1 worker per AZ).*

4. *Un nodo worker può gestire fino a 250 pod per impostazione predefinita. Questo numero è regolabile tramite il parametro podsPerCore - ad esempio, con 10 pod per core su un nodo a 4 core, avrete un massimo di 40 pod. Per maggiori dettagli tecnici, consultate la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida ai limiti di OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS Openshift include nativamente l'accesso alle 3 zone di disponibilità, senza necessità di sottoscriverle separatamente.*

6. *È possibile aggiungere successivamente storage a blocchi al cluster Openshift.*

7. *I nodi sono distribuiti in modo equilibrato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un numero maggiore di nodi a una singola zona.*

### Offerta RedHat distribuita nel contesto della piattaforma Openshift Cloud Temple

La piattaforma è una Redhat Openshift 4 basata su [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Strategia di backup della piattaforma PaaS Openshift

Il backup e il ripristino della piattaforma PaaS Openshift è responsabilità di Cloud Temple per la parte **ETCD** come parte della gestione della piattaforma. **Il backup e il ripristino per la parte di deployment e dati applicativi è responsabilità del Committente**.

Cloud Temple mette a disposizione dei suoi clienti l'offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per rispondere alle esigenze di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra nativamente con gli ambienti Kubernetes, sia che siano gestiti su cluster cloud o on-premise, e può adattarsi a diversi casi d'uso, in particolare la migrazione di cluster tra diverse distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei casi d'uso principali di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Che si tratti di una transizione verso un'infrastruttura più robusta o di consolidare gli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è salvare i dati delle applicazioni e i loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze e i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei segreti. Kasten K10 supporta un'ampia varietà di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), permettendo di creare snapshot delle applicazioni da migrare. Questi backup vengono poi archiviati in modo sicuro con opzioni di crittografia e controllo degli accessi granulare, garantendo la sicurezza dei dati durante tutto il processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze architetturali e delle configurazioni specifiche di ciascuna piattaforma. Kasten K10 semplifica questo processo fornendo un livello di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica le configurazioni e i dati da un cluster sorgente a un cluster di destinazione, tenendo conto delle specificità di ciascun ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV e CRD (Custom Resource Definitions) possono essere migrati tenendo conto dei vincoli specifici di ogni distribuzione Kubernetes, che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo significativamente il rischio di errori manuali. Inoltre, Kasten K10 permette una migrazione progressiva o completa, a seconda delle necessità, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.

 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, il che lo rende uno strumento ideale per le organizzazioni che cercano di migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo garantisce la massima flessibilità e permette ai team DevOps di scegliere il miglior ambiente in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente le operazioni di migrazione e backup senza richiedere una conoscenza approfondita di ogni piattaforma Kubernetes. La soluzione è anche dotata di funzionalità di automazione che permettono di definire politiche di migrazione e backup ricorrenti, integrandosi con le pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in base a finestre di manutenzione, effettuare test di validazione dopo la migrazione e automatizzare i processi di failover in caso di problemi sul cluster sorgente.

 - **Sicurezza e conformità**: nel contesto di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità agli standard (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 garantisce la crittografia dei dati in transito e a riposo, offrendo anche opzioni di audit e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione imprescindibile per le aziende che desiderano migrare efficacemente e in tutta sicurezza cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

 La fatturazione avviene in base al numero di nodi worker.

| Unità di lavoro Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 worker  | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Attenzione, la volumetria disco necessaria per il corretto funzionamento del backup deve essere prevista nell'ambiente di ricezione del backup, generalmente in storage S3. Non è inclusa nelle unità di lavoro Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è attivato per la gestione delle migrazioni, dei backup e dei ripristini_

## Diritti e Permessi

Ecco i principali permessi implementati:

|       Gruppo       |         d'API          |                                                                                       Permessi Risorse                                                                                        |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Tutte          |                                                                                    le risorse (*) Get, List                                                                                    |
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
|       Custom       |       Resources        |                                       Diverse risorse personalizzate legate a Kasten K10, Keycloak, ecc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Limiti attuali dell'offerta Redhat Openshift in ambiente SecNumCloud

Ecco alcune limitazioni indotte dalla qualificazione SecNumCloud:

### Piano di controllo dedicato

I carichi di lavoro non possono essere eseguiti sul piano di controllo a causa delle restrizioni inerenti alla gestione delle risorse e alla sicurezza della piattaforma OpenShift su SecNumCloud.

### Divieto di distribuire immagini con privilegi elevati (rootless)

Per conformarsi ai requisiti di sicurezza del referenziale SecNumCloud, è obbligatorio utilizzare container senza privilegi (rootless).

Questo approccio rafforza la sicurezza globale impedendo qualsiasi accesso privilegiato ai container. Le applicazioni che richiedono container con privilegi dovranno essere modificate, poiché il loro deployment non sarà autorizzato.

Questa restrizione si estende anche agli Helm Chart e agli operatori che utilizzano immagini non rootless, rendendo impossibile il loro deployment all'interno dell'infrastruttura.

### Restrizioni sui diritti dei ClusterRole

Nel contesto della nostra offerta OpenShift, implementiamo una gestione rigorosa dei diritti di accesso a livello di cluster, in conformità con i requisiti SecNumCloud.

Questo approccio implica una limitazione dei ClusterRole per i nostri clienti, restringendo così alcuni aspetti della gestione globale del cluster. Sebbene questa misura possa inizialmente sembrare vincolante, mira a rafforzare la sicurezza e la stabilità dell'infrastruttura.

Siamo consapevoli che ciò può generare sfide tecniche, in particolare nella configurazione di parametri avanzati, e potenzialmente implicazioni legate all'adattamento delle vostre applicazioni o all'acquisizione di strumenti complementari.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi su questo argomento.

### Il contesto SCC non può essere modificato nell'ambiente SecNumCloud

Le Security Context Constraints (SCC) sono soggette a restrizioni severe e non possono essere modificate dagli utenti. Questa limitazione ha ripercussioni significative sul deployment e l'esecuzione dei container.

In pratica, ciò significa che i parametri di esecuzione dei container, come i privilegi di accesso al sistema o le capacità Linux, sono predefiniti e non personalizzabili.

Questa misura, motivata da requisiti di sicurezza, mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Di conseguenza, le applicazioni che richiedono contesti di sicurezza specifici, in particolare quelle che necessitano di accessi privilegiati, possono incontrare ostacoli durante il deployment.

Da un punto di vista tecnico, ciò può implicare una revisione dell'architettura delle applicazioni e un adattamento dei processi di deployment per conformarsi alle SCC predefinite. Sul piano operativo, questo vincolo può ridurre la flessibilità dei deployment e aumentare la complessità di gestione di alcune applicazioni nell'ambiente OpenShift, in particolare quelle che utilizzano Helm Chart o operatori che non rispettano le SCC in vigore.

### Limitazioni sulle Custom Resource Definitions (CRD)

Per conformarsi alla qualificazione SecNumCloud, una restrizione importante riguarda l'utilizzo delle Custom Resource Definitions (CRD) e dei controller personalizzati. Questa misura, legata ai diritti sul cluster, mira a prevenire il deployment di risorse personalizzate potenzialmente instabili o non autorizzate.

Questa limitazione si applica anche agli operatori e agli Helm Chart, con un impatto diretto sui diritti RBAC, poiché le CRD permettono di estendere l'API Kubernetes. Di conseguenza, gli operatori e gli Helm Chart devono passare attraverso una catena di certificazione presso i nostri servizi per garantire la loro conformità e sicurezza.

Le CRD personalizzate, in particolare quelle che rispondono a esigenze aziendali specifiche, possono essere rifiutate nell'infrastruttura a causa dei rischi che presentano per la stabilità e la sicurezza della piattaforma. Questa politica, concepita per proteggere l'integrità e l'affidabilità del cluster, autorizza solo le CRD provenienti da operatori o Helm Chart ufficialmente certificati.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi sulle buone pratiche da adottare in questo contesto.

### Nessun supporto per IP dinamici per i runner

La piattaforma OpenShift SecNumCloud richiede che i runner siano configurati con indirizzi IP fissi. Questa esigenza è motivata dalla necessità di autorizzare gli IP che amministrano la nostra console Cloud Temple, necessaria per lo strumento di gestione degli accessi alle API. Gli indirizzi IP autorizzati sono utilizzati anche per accedere all'API OpenShift e alle interfacce di amministrazione di OpenShift e Shiva.

Di conseguenza, l'utilizzo di indirizzi IP dinamici non è supportato per questi componenti, imponendo la configurazione di IP fissi per garantire la sicurezza e l'accesso alle API.

## Bilanciatori di carico

L'ambiente SecNumCloud Openshift offre opzioni di Load Balancing a diversi livelli per garantire una gestione sicura ed efficace del traffico. L'API del Load Balancer è accessibile tramite le porte 6443 e 443, con un controllo di sicurezza assicurato da una lista bianca gestita dalla console Cloud Temple. Questa API utilizza un indirizzo IP pubblico connesso al nostro backbone, ma non è accessibile di default, rafforzando così la sicurezza degli accessi.

Per il Load Balancer privato, l'ambiente utilizza Ingress (nginx) come soluzione predefinita, permettendo di gestire il traffico interno in modo efficace. Inoltre, è disponibile un supporto TCP tramite l'infrastruttura IaaS di Cloud Temple, offrendo così una flessibilità aggiuntiva per le applicazioni che richiedono un bilanciamento del carico a questo livello.

Per quanto riguarda il Load Balancer pubblico, il supporto di livello 4 è garantito tramite Ingress, sebbene esistano attualmente alcune limitazioni con il comando "expose". Ciò significa che il sistema è in grado di gestire connessioni TCP e UDP in modo affidabile, continuando a evolversi per offrire una maggiore compatibilità e flessibilità.

**Da notare**: il Load Balancer integrato non funge da WAF. Un'offerta WAF as a Service è prevista per il secondo semestre 2025.

## Informazioni utili

• Se i componenti hardware a livello della piattaforma diventano obsoleti e una migrazione verso nuove risorse di calcolo è necessaria, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzione di servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma è possibile utilizzare [le piattaforme di test RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della vostra infrastruttura, privilegiate il provider Terraform ufficiale di OpenShift piuttosto che quello di Cloud Temple.
