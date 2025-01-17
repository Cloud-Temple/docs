---
title: Concepts
---

## Présentation de RedHat Openshift

**Red Hat OpenShift** è una piattaforma di container aziendale che automatizza il deployment, la gestione e la scalabilità delle applicazioni containerizzate. È una piattaforma costruita intorno a Docker, un sistema di containerizzazione che consente di impacchettare un'applicazione e le sue dipendenze in un container virtuale, e Kubernetes, un sistema di orchestrazione dei container, che gestisce l'esecuzione e il coordinamento dei container su un cluster di server.

### Funzionalità principali di Red Hat OpenShift:

- **Deployment e gestione automatizzati:** OpenShift semplifica il processo di deployment delle applicazioni automatizzando le routine di gestione come il scaling, la salute e la durata dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto di più linguaggi e servizi:** La piattaforma supporta una vasta gamma di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come la messaggistica, il caching e i database, permettendo agli sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e deployment continuo (CD):** OpenShift integra strumenti di CI/CD che automatizzano la pipeline di sviluppo del software, dal commit iniziale fino al deployment in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e la diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'uso delle risorse, riduce il tempo di immissione sul mercato e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente il scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue policy di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e di conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione delle applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni di sviluppo software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di storage e gestione dei dati progettata per funzionare senza problemi con l'ecosistema OpenShift. Offre un'infrastruttura di dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni incentrati su container e microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multi-cloud, fornendo una base solida per le applicazioni aziendali critiche.

#### Funzionalità Chiave di OpenShift Data Foundation:

- **Storage Persistente:** ODF fornisce un layer di storage persistente per i container, essenziale per le applicazioni aziendali come database, sistemi di gestione dei contenuti e applicazioni che richiedono uno stato persistente.

- **Multi-cloud e Ibrido:** Progettato per il cloud ibrido e multi-cloud, ODF consente un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e Orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, il scaling e la gestione del ciclo di vita dello storage in base alle necessità delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replica e il snapshotting dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei Dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, nonché policy di sicurezza e conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità Operativa:** ODF consente alle aziende di gestire efficacemente i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere ai requisiti in evoluzione delle applicazioni moderne.

- **Semplificazione della Gestione dei Dati:** Automatizzando molteplici attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative di maggiore valore aggiunto.

- **Ottimizzazione dei Costi:** La capacità di ODF di adattarsi dinamicamente ai requisiti di storage aiuta a ottimizzare i costi evitando il sovraprovisioning e utilizzando in modo più efficiente le risorse disponibili.

- **Miglioramento delle Prestazioni:** ODF è progettato per fornire alte prestazioni per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation è una soluzione avanzata di storage dati che rafforza l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo uno storage persistente, automatizzato e sicuro, ODF svolge un ruolo cruciale nell'abilitare le aziende a sfruttare appieno il potenziale delle tecnologie di container e cloud ibrido.

## Architettura generale della piattaforma

### Generalità

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su **tre zone di disponibilità distinte** all'interno di una stessa regione di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma si compone di un control plane e nodi di lavoro, tutti gestiti dall'infrastruttura Cloud Temple. Il control plane è distribuito equamente su tutte le tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da blade di calcolo, disposti in modo tale che ogni zona di disponibilità ne contenga uno.

Per i nodi di lavoro, sono disponibili diversi tipi di blade di calcolo, permettendo così un adattamento flessibile a vari bisogni operativi:

| Unità d'opera Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unità                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------| :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan di controllo - 3 nodi - Regione FR1                                                                       | 1 plan dedicato         | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go di ram - 512 Gio FLASH 1500 iops)                    | 3 lavoratori dedicati   | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go di ram - 512 Gio FLASH 1500 iops)                 | 3 lavoratori dedicati   | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go di ram - 512 Gio FLASH 1500 iops)              | 3 lavoratori dedicati   | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go di ram - 512 Gio FLASH 1500 iops)               | 3 lavoratori dedicati   | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To di ram - 512 Gio FLASH 1500 iops)                  | 3 lavoratori dedicati   | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go di ram - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 lavoratori + GPU      | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift Cloud Temple sono disponibili in pagamento a consumo o in prenotazione di 12 mesi.

**Note** :

1. *Il mantenimento in condizione operativa e di sicurezza del control plane è responsabilità di Cloud Temple in virtù di un servizio PaaS.*
   
2. *Al 15 giugno 2024, la versione 1 della piattaforma è volutamente limitata software per un control plane a 30 worker nodes (di qualsiasi tipo) e a uno storage persistente globale di 50 Tio. Se questi limiti sono bloccanti per il vostro progetto, si prega di contattare il supporto.*

3. *Ogni worker node è consegnato con 512Gio di storage flash Blocco, il che fa 1.5 Tio per ogni unità d'opera (1 worker per AZ).*

4. *L'offerta PaaS Openshift include nativamente l'accesso alle 3 zone di disponibilità, senza necessità di sottoscrizioni aggiuntive.*

5. *È possibile aggiungere successivamente dello storage Blocco al cluster Openshift.*
   
6. *I nodi sono distribuiti in modo equilibrato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster attribuendo un maggior numero di nodi a una sola zona.*
### Offre RedHat déployée dans le cadre de la plateforme Openshift Cloud Temple

La plateforme est une Redhat Openshift 4 basée sur [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) et inclut [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet). 

![](images/oshift_offert.jpg)

## Strategia di backup della tua piattaforma PaaS Openshift

Il backup e il ripristino della piattaforma PaaS Openshift sono responsabilità di Cloud Temple per quanto riguarda la parte **ETCD** ai fini della gestione della piattaforma. **Il backup e il ripristino per le applicazioni e i dati sono responsabilità del Committente**. 

Cloud Temple mette a disposizione dei suoi clienti l’offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), una piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per soddisfare le esigenze di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra nativamente con gli ambienti Kubernetes, siano essi gestiti su cluster cloud o on-premise, e può adattarsi a diversi casi d'uso, inclusa la migrazione di cluster tra diverse distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift. 

Uno dei principali casi d’uso di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Che si tratti di una transizione verso un'infrastruttura più robusta o per consolidare degli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è fare backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API di Kubernetes per identificare le applicazioni, le loro dipendenze, e i volumi di dati associati. Ciò include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei secrets. Kasten K10 supporta una grande varietà di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), permettendo di creare snapshot delle applicazioni da migrare. Questi backup sono poi archiviati in modo sicuro con opzioni di crittografia e controllo degli accessi granulari, garantendo la sicurezza dei dati durante l'intero processo. 

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze di architetture e delle configurazioni specifiche di ogni piattaforma. Kasten K10 semplifica questo processo fornendo un livello di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica configurazioni e dati da un cluster sorgente a un cluster di destinazione, tenendo conto delle specificità di ogni ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV, così come le CRDs (Custom Resource Definitions) possono essere migrati tenendo conto delle restrizioni proprie di ogni distribuzione Kubernetes, sia che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo notevolmente il rischio di errori manuali. Inoltre, Kasten K10 permette una migrazione progressiva o completa, a seconda delle necessità, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.
   
 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che cercano di migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo garantisce una massima flessibilità e permette ai team DevOps di scegliere l'ambiente migliore in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.
   
 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente le operazioni di migrazione e backup senza necessitare di una conoscenza approfondita di ogni piattaforma Kubernetes. La soluzione è inoltre dotata di funzionalità di automazione che permettono di definire politiche di migrazione e backup ricorrenti, integrandosi nei pipeline CI/CD per operazioni continuative. Gli utenti possono pianificare migrazioni o ripristini in base alle finestre di manutenzione, effettuare test di validazione post-migrazione e automatizzare i processi di failover in caso di problemi sul cluster sorgente.
   
 - **Sicurezza e conformità**: nel contesto di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità agli standard (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 assicura la crittografia dei dati in transito e a riposo, offrendo al contempo opzioni di auditing e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia che si tratti di ambienti di produzione o di test. Kasten K10 è una soluzione imprescindibile per le aziende che vogliono migrare in modo efficace e sicuro cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift. 

 La fatturazione avviene secondo il numero di worker node.

| Unità di lavoro Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unità     | SKU                         |
| :------------------------------------------------------------------------------------- | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility               | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |
   
**Nota** : *Attenzione, il volume del disco necessario per il buon funzionamento del backup deve essere previsto nell'ambiente di destinazione del backup, generalmente in storage S3. Non è incluso nelle unità di lavoro Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è abilitato per la gestione delle migrazioni, dei backup e del ripristino_

## Diritti e Permessi 

Ecco i permessi principali implementati:

|       Gruppo       |         d'API          |                                                                                       Risorse Permessi                                                                                       |
|--------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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

Per conformarsi alle esigenze di sicurezza del repository SecNumCloud, è obbligatorio utilizzare contenitori senza privilegi (rootless).

Questo approccio rafforza la sicurezza globale impedendo qualsiasi accesso privilegiato ai contenitori. Le applicazioni che necessitano di contenitori con privilegi dovranno essere modificate, poiché il loro distribuzione non sarà autorizzato.

Questa restrizione si estende anche agli Helm Charts e agli operatori che utilizzano immagini non rootless, rendendo impossibile la loro distribuzione all'interno dell'infrastruttura.

### Restrizioni sui diritti dei ClusterRole

Nell'ambito della nostra offerta OpenShift, implementiamo una gestione rigorosa dei diritti di accesso a livello del cluster, in conformità con le esigenze SecNumCloud.

Questo approccio implica una limitazione dei ClusterRoles per i nostri clienti, restringendo così alcuni aspetti della gestione globale del cluster. Anche se questa misura può inizialmente sembrare restrittiva, mira a rafforzare la sicurezza e la stabilità dell'infrastruttura.

Siamo consapevoli che ciò può comportare sfide tecniche, in particolare nella configurazione dei parametri avanzati, e potenzialmente implicazioni legate all'adattamento delle vostre applicazioni o all'acquisizione di strumenti complementari.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi su questo argomento.

### Il contesto SCC non può essere modificato nell'ambiente SecNumCloud

Le Security Context Constraints (SCC) sono soggette a rigide restrizioni e non possono essere modificate dagli utenti. Questa limitazione ha ripercussioni significative sulla distribuzione e l'esecuzione dei contenitori.

In pratica, ciò significa che i parametri di esecuzione dei contenitori, come i privilegi di accesso al sistema o le capacità Linux, sono predefiniti e non personalizzabili.

Questa misura, motivata da esigenze di sicurezza, mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Di conseguenza, le applicazioni che necessitano di contesti di sicurezza specifici, in particolare quelle che richiedono accessi privilegiati, possono incontrare ostacoli durante la distribuzione.

Da un punto di vista tecnico, ciò può implicare una revisione dell'architettura delle applicazioni e un adattamento dei processi di distribuzione per conformarsi alle SCC predefinite. Sul piano operativo, questa restrizione può ridurre la flessibilità delle distribuzioni e aumentare la complessità di gestione di alcune applicazioni nell'ambiente OpenShift, in particolare quelle che utilizzano Helm Charts o operatori che non rispettano le SCC in vigore.

### Limitazioni sulle Custom Resource Definitions (CRDs)

Per conformarsi alla qualificazione SecNumCloud, una limitazione importante riguarda l'uso delle Custom Resource Definitions (CRDs) e dei controller personalizzati. Questa misura, legata ai diritti sul cluster, mira a prevenire la distribuzione di risorse personalizzate potenzialmente instabili o non autorizzate.

Questa limitazione si applica anche agli operatori e agli Helm Charts, con un impatto diretto sui diritti RBAC, poiché le CRDs permettono di estendere l'API Kubernetes. Di conseguenza, gli operatori e gli Helm Charts devono passare attraverso una catena di certificazione presso i nostri servizi per garantire la loro conformità e sicurezza.

Le CRDs personalizzate, in particolare quelle che rispondono a esigenze aziendali specifiche, possono essere rifiutate nell'infrastruttura a causa dei rischi che presentano per la stabilità e la sicurezza della piattaforma. Questa politica, concepita per proteggere l'integrità e l'affidabilità del cluster, autorizza solo le CRDs provenienti da operatori o Helm Charts ufficialmente certificati.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi sulle migliori pratiche da adottare in questo contesto.

### Nessun supporto per IP dinamici per i runners

La piattaforma OpenShift SecNumCloud richiede che i runners siano configurati con indirizzi IP fissi. Questa esigenza è motivata dal bisogno di autorizzare gli IP che amministrano la nostra console Cloud Temple, necessaria per lo strumento di gestione dell'accesso alle API. Gli indirizzi IP autorizzati vengono anche utilizzati per accedere all'API OpenShift e alle interfacce di amministrazione di OpenShift e Shiva.

Di conseguenza, l'uso di indirizzi IP dinamici non è supportato per questi componenti, imponendo la configurazione di IP fissi per garantire la sicurezza e l'accesso alle API.

## Bilanciatori di carico
L'ambiente SecNumCloud Openshift offre opzioni di Load Balancing a diversi livelli per garantire una gestione sicura ed efficiente del traffico. L'API del Load Balancer è accessibile tramite le porte 6443 e 443, con un controllo di sicurezza assicurato da una lista bianca gestita dalla console Cloud Temple. Questa API utilizza un indirizzo IP pubblico connesso al nostro backbone, ma non è accessibile per impostazione predefinita, rafforzando così la sicurezza degli accessi.

Per il Load Balancer privato, l'ambiente utilizza Ingress (nginx) come soluzione predefinita, il che permette di gestire il traffico interno in modo efficace. Inoltre, è disponibile il supporto TCP tramite l'infrastruttura IaaS di Cloud Temple, offrendo così una flessibilità aggiuntiva per le applicazioni che richiedono un bilanciamento del carico a questo livello.

Per quanto riguarda il Load Balancer pubblico, il supporto di livello 4 è assicurato tramite Ingress, sebbene esistano attualmente alcune limitazioni con il comando "expose". Ciò significa che il sistema è in grado di gestire connessioni TCP e UDP in modo affidabile continuando ad evolversi per offrire una maggiore compatibilità e flessibilità.