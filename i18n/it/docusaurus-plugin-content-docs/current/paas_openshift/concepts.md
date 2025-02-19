---
title: Concepts
---

## Presentazione di RedHat Openshift

**Red Hat OpenShift** è una piattaforma di container aziendale che automatizza la distribuzione, la gestione e la scalabilità delle applicazioni containerizzate. È una piattaforma costruita attorno a Docker, un sistema di containerizzazione che consente di impacchettare un'applicazione e le sue dipendenze in un container virtuale, e a Kubernetes, un sistema di orchestrazione dei container, che gestisce l'esecuzione e il coordinamento dei container su un cluster di server.

### Caratteristiche principali di Red Hat OpenShift:

- **Distribuzione e gestione automatizzate:** OpenShift semplifica il processo di distribuzione delle applicazioni automatizzando le routine di gestione come lo scaling, la salute e la durata dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto per più linguaggi e servizi:** La piattaforma supporta una vasta gamma di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come la messaggistica, il caching e i database, consentendo agli sviluppatori di concentrarsi sul codice anziché sull'infrastruttura.

- **Integrazione continua (CI) e distribuzione continua (CD):** OpenShift integra strumenti di CI/CD che automatizzano il pipeline di sviluppo dei software, dal commit iniziale fino alla distribuzione in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e la diagnosi delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza potenziata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'uso delle risorse, riduce il tempo di commercializzazione e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente il scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, la distribuzione e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni allo sviluppo del software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di archiviazione e gestione dei dati progettata per funzionare perfettamente con l'ecosistema OpenShift. Offre un'infrastruttura di dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni basati sui container e sui microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, fornendo una solida base per le applicazioni aziendali critiche.

#### Caratteristiche chiave di OpenShift Data Foundation:

- **Archiviazione persistente:** ODF fornisce un livello di archiviazione persistente per i container, essenziale per le applicazioni aziendali come i database, i sistemi di gestione dei contenuti e le applicazioni che necessitano di uno stato persistente.

- **Multicloud e ibrido:** Progettato per il cloud ibrido e multicloud, ODF consente un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift consente a ODF di automatizzare il provisioning, lo scaling e la gestione del ciclo di vita dell'archiviazione in base alle esigenze delle applicazioni.

- **Alta disponibilità e resilienza:** ODF utilizza la replica e lo snapshotting dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, nonché politiche di sicurezza e conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità operativa:** ODF consente alle aziende di gestire efficacemente i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere ai requisiti mutevoli delle applicazioni moderne.

- **Semplificazione della gestione dei dati:** Automatizzando molte attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative a maggior valore aggiunto.

- **Ottimizzazione dei costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di archiviazione aiuta a ottimizzare i costi evitando il sovradimensionamento e utilizzando più efficacemente le risorse disponibili.

- **Miglioramento delle prestazioni:** ODF è progettato per fornire elevate prestazioni per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation è una soluzione di archiviazione avanzata che potenzia l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo un'archiviazione persistente, automatizzata e sicura, ODF svolge un ruolo cruciale nell'aiutare le aziende a sfruttare appieno il potenziale delle tecnologie di container e cloud ibrido.

## Architettura generale della piattaforma

### Generalità

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su **tre zone di disponibilità distinte** all'interno di una stessa regione di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma è composta da un piano di controllo e da nodi di lavoro, tutti gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è equamente distribuito sulle tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da blade di calcolo, disposti in modo che ogni zona di disponibilità ne contenga uno.

Per i nodi di lavoro, sono disponibili diversi tipi di blade di calcolo, consentendo così una flessibile adattabilità a vari bisogni operativi:

| Unità di lavoro Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unità                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan di controllo - 3 nodi - Regione FR1                                                                          | 1 piano dedicato            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go di ram - 512 Gio FLASH 1500 iops)                      | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go di ram - 512 Gio FLASH 1500 iops)                   | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go di ram - 512 Gio FLASH 1500 iops)                | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go di ram - 512 Gio FLASH 1500 iops)                 | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To di ram - 512 Gio FLASH 1500 iops)                    | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go di ram - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 worker dedicati + GPU | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift Cloud Temple sono disponibili in pagamento a consumo o in prenotazione annuale (12 mesi).

**Note** :

1. *Il mantenimento in condizioni operative e di sicurezza del piano di controllo è responsabilità di Cloud Temple come servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è volontariamente limitata software per un piano di controllo a 30 worker nodes (indipendentemente dal tipo di worker) e a un'archiviazione persistente globale di 50 TiB. Se questi limiti sono bloccanti per il tuo progetto, ti preghiamo di contattare il supporto.*

3. *Ogni worker node è consegnato con 512 GiB di archiviazione flash Bloc, che sommati diventano 1.5 TiB per ogni unità di lavoro (1 worker per AZ).*
4. *Un nodo worker può gestire fino a 250 pod di default. Questo numero è regolabile tramite il parametro podsPerCore - per esempio, con 10 pod per core su un nodo a 4 core, avrete un massimo di 40 pod. Per dettagli tecnici, consultate la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida ai limiti di OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS Openshift include nativamente l'accesso alle 3 zone di disponibilità, senza che sia necessario sottoscriverle ulteriormente.*

6. *È possibile aggiungere successivamente dello storage a blocchi al cluster Openshift.*

7. *I nodi sono distribuiti in modo bilanciato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un numero maggiore di nodi a una singola zona.*

### Offerta RedHat distribuita nell'ambito della piattaforma Openshift Cloud Temple

La piattaforma è una Redhat Openshift 4 basata su [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Strategia di backup della vostra piattaforma PaaS Openshift

Il backup e il ripristino della piattaforma PaaS Openshift è di competenza di Cloud Temple per la parte **ETCD** in quanto rientra nella gestione della piattaforma. **Il backup e il ripristino per la parte di deployment e dei dati applicativi è di competenza del Committente**.

Cloud Temple mette a disposizione dei propri clienti l’offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per rispondere alle esigenze di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra in modo nativo con gli ambienti Kubernetes, siano essi gestiti in cluster cloud o on-premise, e può adattarsi a diversi casi d'uso, inclusa la migrazione di cluster tra diverse distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei casi d’uso maggiori di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Sia per una transizione verso un'infrastruttura più robusta o per consolidare gli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficienti per gestire queste migrazioni:

- **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è eseguire il backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze e i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei segreti. Kasten K10 supporta una vasta gamma di provider di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), permettendo di creare snapshot delle applicazioni da migrare. Questi backup sono poi memorizzati in modo sicuro con opzioni di crittografia e controllo degli accessi granulari, garantendo la sicurezza dei dati durante l'intero processo.

- **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze nelle architetture e configurazioni specifiche di ciascuna piattaforma. Kasten K10 semplifica questo processo fornendo uno strato di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica configurazioni e dati da un cluster di origine a un cluster di destinazione, tenendo conto delle specificità di ciascun ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV e le CRDs (Custom Resource Definitions) possono essere migrati considerando i vincoli propri di ogni distribuzione Kubernetes, siano essi su un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo significativamente il rischio di errori manuali. Inoltre, Kasten K10 consente una migrazione progressiva o completa, a seconda delle esigenze, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando la gestione e il monitoraggio della transizione.

- **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che intendono migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Ciò garantisce la massima flessibilità e consente ai team DevOps di scegliere il miglior ambiente in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.

- **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente le operazioni di migrazione e backup senza necessità di una profonda conoscenza di ciascuna piattaforma Kubernetes. La soluzione è inoltre dotata di funzionalità di automazione che consentono di definire politiche di migrazione e backup ricorrenti, integrandosi nei pipeline CI/CD per operazioni continue. Gli utenti possono programmare migrazioni o ripristini in base a finestre di manutenzione, eseguire test di validazione post-migrazione e automatizzare i processi di failover in caso di problemi sul cluster di origine.

- **Sicurezza e conformità**: nell'ambito delle migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità alle norme (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 garantisce la crittografia dei dati in transito e a riposo, offrendo anche opzioni di audit e tracciamento delle operazioni di backup e ripristino. Queste capacità sono fondamentali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione imprescindibile per le aziende che desiderano migrare in modo efficace e sicuro dai cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

La fatturazione avviene per numero di worker node.

| Unità di lavoro Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Attenzione, il volume disco necessario per il corretto funzionamento del vostro backup deve essere previsto nell'ambiente di ricezione del vostro backup, solitamente in storage S3. Questo non è incluso nelle unità di lavoro Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solamente Kasten è abilitato per la gestione delle migrazioni, dei backup e del ripristino._

## Diritti e Permessi

Ecco i principali permessi implementati:

|       Gruppo       |         d'API          |                                                                                       Risorse Permessi                                                                                       |
|--------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Tutte           |                                                                                    le risorse (*) Get, List                                                                                        |
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

## Limiti Attuali dell'Offerta Redhat Openshift nell'Ambiente SecNumCloud

Ecco alcune limitazioni indotte dalla qualificazione SecNumCloud:

### Piano di Controllo Dedicato

I carichi di lavoro non possono essere eseguiti sul piano di controllo a causa delle restrizioni inerenti alla gestione delle risorse e alla sicurezza della piattaforma OpenShift su SecNumCloud.

### Divieto di Distribuire Immagini con Privilegi Elevati (rootless)

Per conformarsi ai requisiti di sicurezza del repository SecNumCloud, è obbligatorio utilizzare container senza privilegi (rootless).

Questo approccio rafforza la sicurezza globale impedendo qualsiasi accesso privilegiato ai container. Le applicazioni che richiedono container con privilegi dovranno essere modificate, poiché la loro distribuzione non sarà autorizzata.

Questa restrizione si estende anche agli Helm Charts e agli operatori che utilizzano immagini non rootless, rendendo impossibile la loro distribuzione all'interno dell'infrastruttura.

### Restrizioni sui Permessi dei ClusterRole

Nell'ambito della nostra offerta OpenShift, implementiamo una gestione rigorosa dei permessi di accesso a livello di cluster, in conformità ai requisiti SecNumCloud.

Questo approccio implica una limitazione dei ClusterRoles per i nostri clienti, limitando così alcuni aspetti della gestione globale del cluster. Sebbene questa misura possa inizialmente sembrare restrittiva, mira a rafforzare la sicurezza e la stabilità dell'infrastruttura.

Siamo consapevoli che ciò può generare sfide tecniche, in particolare nella configurazione di parametri avanzati, e potenzialmente implicazioni legate all'adattamento delle vostre applicazioni o all'acquisizione di strumenti complementari.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi su questo argomento.

### Il Contesto SCC non può essere Modificato nell'Ambiente SecNumCloud

Le Security Context Constraints (SCC) sono soggette a restrizioni rigorose e non possono essere modificate dagli utenti. Questa limitazione ha conseguenze significative sulla distribuzione e l'esecuzione dei container.

In pratica, ciò significa che i parametri di esecuzione dei container, come i privilegi di accesso al sistema o le capacità Linux, sono predefiniti e non personalizzabili.

Questa misura, motivata da requisiti di sicurezza, mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Di conseguenza, le applicazioni che richiedono contesti di sicurezza specifici, in particolare quelle che richiedono accessi privilegiati, possono incontrare ostacoli durante la distribuzione.

Da un punto di vista tecnico, ciò può implicare una revisione dell'architettura delle applicazioni e un adattamento dei processi di distribuzione per conformarsi alle SCC predefinite. Dal punto di vista operativo, questa restrizione può ridurre la flessibilità delle distribuzioni e aumentare la complessità di gestione di alcune applicazioni nell'ambiente OpenShift, in particolare quelle che utilizzano Helm Charts o operatori che non rispettano le SCC in vigore.

### Limitazioni sulle Custom Resource Definitions (CRD)

Per conformarsi alla qualificazione SecNumCloud, una limitazione importante riguarda l'uso delle Custom Resource Definitions (CRD) e dei controller personalizzati. Questa misura, legata ai permessi sul cluster, mira a prevenire la distribuzione di risorse personalizzate potenzialmente instabili o non autorizzate.

Questa limitazione si applica anche agli operatori e agli Helm Charts, con un impatto diretto sui permessi RBAC, poiché le CRD consentono di estendere l'API Kubernetes. Di conseguenza, gli operatori e Helm Charts devono passare attraverso una catena di certificazione presso i nostri servizi per garantire la loro conformità e sicurezza.
Les CRD personalizzate, in particolare quelle che rispondono a esigenze aziendali specifiche, possono essere rifiutate nell'infrastruttura a causa dei rischi che presentano per la stabilità e la sicurezza della piattaforma. Questa politica, progettata per proteggere l'integrità e l'affidabilità del cluster, consente solo le CRD provenienti da operatori o Helm Charts ufficialmente certificati.

Il nostro team di supporto è disponibile per guidarti e consigliarti sulle buone pratiche da adotare in questo contesto.

### Nessun supporto per IP dinamici per i runner

La piattaforma OpenShift SecNumCloud richiede che i runner siano configurati con indirizzi IP fissi. Questo requisito è motivato dalla necessità di autorizzare gli IP che amministrano la nostra console Cloud Temple, necessaria per lo strumento di gestione degli accessi alle API. Gli indirizzi IP autorizzati sono inoltre utilizzati per accedere all'API OpenShift nonché alle interfacce di amministrazione di OpenShift e Shiva.

Di conseguenza, l'uso di indirizzi IP dinamici non è supportato per questi componenti, imponendo la configurazione di IP fissi per garantire la sicurezza e l'accesso alle API.

## Bilanciatori di carico

L'ambiente SecNumCloud Openshift offre opzioni di Load Balancing a diversi livelli per garantire una gestione sicura ed efficace del traffico. L'API del Load Balancer è accessibile tramite le porte 6443 e 443, con un controllo di sicurezza garantito da una whitelist gestita dalla console Cloud Temple. Questa API utilizza un indirizzo IP pubblico connesso al nostro backbone, ma non è accesibile di default, rafforzando così la sicurezza degli accessi.

Per il Load Balancer privato, l'ambiente utilizza Ingress (nginx) come soluzione predefinita, il che consente di gestire il traffico interno in modo efficace. Inoltre, è disponibile il supporto TCP tramite l'infrastruttura IaaS di Cloud Temple, offrendo così una flessibilità aggiuntiva per le applicazioni che richiedono un bilanciamento del carico a questo livello.

Per quanto riguarda il Load Balancer pubblico, il supporto del livello 4 è garantito tramite Ingress, sebbene attualmente esistano alcune limitazioni con il comando "expose." Ciò significa che il sistema è in grado di gestire connessioni TCP e UDP in modo affidabile continuando ad evolvere per offrire maggiore compatibilità e flessibilità.

**Nota**: il Load Balancer integrato non funge da WAF. Un'offerta WAF as a Service è prevista per il secondo semestre del 2025.

## Da sapere

• Se i componenti hardware a livello della piattaforma diventano obsoleti e una migrazione verso nuove risorse di calcolo è necessaria, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzioni del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma puoi utilizzare [le piattaforme di test RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della tua infrastruttura, privilegia il provider Terraform ufficiale di OpenShift piuttosto che quello di Cloud Temple.