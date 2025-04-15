---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentazione di RedHat Openshift

**Red Hat OpenShift** è una piattaforma di container aziendale che automatizza il deployment, la gestione e la scalabilità delle applicazioni containerizzate. Si basa su Docker, un sistema di containerizzazione che consente di confezionare un'applicazione e le sue dipendenze in un container virtuale, e Kubernetes, un sistema di orchestrazione dei container, che gestisce l'esecuzione e il coordinamento dei container su un cluster di server.

### Funzionalità principali di Red Hat OpenShift:

- **Deployment e gestione automatizzati:** OpenShift semplifica il processo di deployment delle applicazioni automatizzando le routine di gestione come il scaling, la salute e il ciclo di vita dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto di più linguaggi e servizi:** La piattaforma supporta un'ampia varietà di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come messaggistica, caching e database, consentendo agli sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e deployment continuo (CD):** OpenShift integra strumenti di CI/CD che automatizzano il pipeline di sviluppo software, dal commit iniziale al deployment in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e la diagnosi delle applicazioni e dell'infrastruttura, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'uso delle risorse, riduce il tempo di commercializzazione e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente lo scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni di sviluppo software.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di storage e gestione dei dati progettata per funzionare senza problemi con l'ecosistema OpenShift. Offre un'infrastruttura dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni basati su container e microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati negli ambienti cloud ibridi e multicloud, fornendo una solida base per le applicazioni aziendali critiche.

#### Funzionalità Chiave di OpenShift Data Foundation:

- **Storage Persistente:** ODF fornisce uno strato di storage persistente per i container, essenziale per le applicazioni aziendali come database, sistemi di gestione dei contenuti e applicazioni che richiedono uno stato persistente.

- **Multicloud e Ibrido:** Progettato per il cloud ibrido e multicloud, ODF consente un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e Orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift consente a ODF di automatizzare il provisioning, il scaling e la gestione del ciclo di vita dello storage in base alle esigenze delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replica e lo snapshotting dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei Dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, nonché politiche di sicurezza e conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità Operativa:** ODF consente alle aziende di gestire efficacemente i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze in continuo cambiamento delle applicazioni moderne.

- **Semplificazione della Gestione dei Dati:** Automatizzando molte delle attività di gestione dei dati, ODF riduce la complessità e libera risorse IT per concentrarsi su iniziative a maggior valore aggiunto.

- **Ottimizzazione dei Costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di storage aiuta a ottimizzare i costi evitando il sovradimensionamento e utilizzando più efficacemente le risorse disponibili.

- **Miglioramento delle Prestazioni:** ODF è progettato per fornire prestazioni elevate per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carichi di lavoro.

Red Hat OpenShift Data Foundation è una soluzione di storage dati avanzata che rafforza l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo uno storage persistente, automatizzato e sicuro, ODF svolge un ruolo cruciale nell'abilitare le aziende a sfruttare appieno il potenziale delle tecnologie dei container e del cloud ibrido.

## Architettura generale della piattaforma

### Generalità

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su [**tre zone di disponibilità distinte**](../additional_content/concepts_az.md) all'interno di una stessa [regione](../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma è composta da un piano di controllo e nodi di lavoro, tutti gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è distribuito equamente sulle tre zone di disponibilità, assicurando una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da blade di calcolo, disposti in modo che ciascuna zona di disponibilità ne contenga uno.

Per i nodi di lavoro, sono disponibili diversi tipi di blade di calcolo, consentendo un adattamento flessibile a vari needs operativi:

| Unità di lavoro Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                  | Unità                      | SKU                                   |
| :----------------------------------------------------------------------------------------------------------------------------- | :------------------------- | :------------------------------------ |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1                                                                          | 1 piano dedicato           | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 core / 20 thread - 64 GB di ram - 512 GB FLASH 1500 iops)                            | 3 worker dedicati          | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 core / 40 thread - 128 GB di ram - 512 GB FLASH 1500 iops)                          | 3 worker dedicati          | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 core / 64 thread - 384 GB di ram - 512 GB FLASH 1500 iops)                       | 3 worker dedicati          | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 core / 96 thread - 768 GB di ram - 512 GB FLASH 1500 iops)                       | 3 worker dedicati          | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 core / 112 thread - 1.5 TB di ram - 512 GB FLASH 1500 iops)                          | 3 worker dedicati          | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 core / 64 thread - 512 GB di ram - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB)       | 3 worker dedicati + GPU    | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift Cloud Temple sono disponibili in pagamento a consumo o con abbonamento di 12 mesi.

**Note** :

1. *Il mantenimento in condizioni operative e in sicurezza del piano di controllo è responsabilità di Cloud Temple come parte di un servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è volutamente limitata software per un piano di controllo a 30 nodi worker (indipendentemente dal tipo di worker) e a uno storage persistente globale di 50 TB. Se questi limiti rappresentano un ostacolo per il tuo progetto, contattare il supporto.*

3. *Ogni nodo worker è fornito con 512 GB di storage flash Bloc, che fa 1.5 TB per ogni unità di lavoro (1 worker per AZ).*
4. *Un nodo worker può gestire fino a 250 pod per impostazione predefinita. Questo numero è regolabile tramite il parametro podsPerCore - ad esempio, con 10 pod per core su un nodo a 4 core, avrete un massimo di 40 pod. Per ulteriori dettagli tecnici, consultate la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida ai limiti di OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS Openshift include nativamente l'accesso alle 3 zone di disponibilità, senza necessità di sottoscrizioni aggiuntive.*

6. *È possibile aggiungere successivamente dello storage a blocchi al cluster Openshift.*

7. *I nodi sono distribuiti in modo bilanciato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un numero maggiore di nodi a una sola zona.*

### Offerta RedHat implementata nel contesto della piattaforma Openshift Cloud Temple

La piattaforma è una Redhat Openshift 4 basata su [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Strategia di backup della vostra piattaforma PaaS Openshift

Il backup e il ripristino della piattaforma PaaS Openshift sono responsabilità di Cloud Temple per la parte **ETCD** in termini di gestione della piattaforma. **Il backup e il ripristino per la parte di deployment e dati applicativi sono a carico del Committente**.

Cloud Temple mette a disposizione dei suoi clienti l'offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per soddisfare le esigenze di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra in modo nativo negli ambienti Kubernetes, siano essi gestiti su cluster cloud o on-premise, e può adattarsi a diversi casi d'uso, inclusa la migrazione di cluster tra differenti distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei principali casi d'uso di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Che si tratti di una transizione verso un'infrastruttura più robusta o di consolidare gli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è il backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze e i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei segreti. Kasten K10 supporta una vasta gamma di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), consentendo di creare snapshot delle applicazioni da migrare. Questi backup sono quindi archiviati in modo sicuro con opzioni di crittografia e controllo degli accessi granulari, garantendo la sicurezza dei dati durante tutto il processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze di architetture e delle configurazioni specifiche di ciascuna piattaforma. Kasten K10 semplifica questo processo fornendo uno strato di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica le configurazioni e i dati da un cluster di origine a un cluster di destinazione, tenendo conto delle specificità di ciascun ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV, così come le CRD (Custom Resource Definitions) possono essere migrati considerando le limitazioni proprie di ogni distribuzione Kubernetes, che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo notevolmente il rischio di errori manuali. Inoltre, Kasten K10 consente una migrazione progressiva o completa, a seconda delle necessità, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando la gestione e il monitoraggio della transizione.

 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che cercano di migrare applicazioni da cluster Tanzu o Vanilla a ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo garantisce la massima flessibilità e permette ai team DevOps di scegliere l'ambiente migliore in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che consente agli amministratori di gestire facilmente le operazioni di migrazione e backup senza richiedere competenze approfondite di ciascuna piattaforma Kubernetes. La soluzione è inoltre dotata di funzionalità di automazione che permettono di definire politiche di migrazione e backup ricorrenti, integrandosi con le pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in base a finestre di manutenzione, eseguire test di validazione dopo la migrazione e automatizzare i processi di failover in caso di problemi sul cluster di origine.

 - **Sicurezza e conformità**: nel contesto di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità agli standard (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 assicura la crittografia dei dati in transito e a riposo, offrendo opzioni di audit e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione indispensabile per le aziende che desiderano migrare in modo efficace e sicuro cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

La fatturazione è basata sul numero di worker node.

| Unità operative Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 lavoratori | csp:fr1:paas:kasten:3wkr:v1 |

**Nota** : *Attenzione, il volume di disco necessario per il corretto funzionamento del backup deve essere pianificato nell'ambiente di destinazione del backup, generalmente in storage S3. Non è incluso nelle unità operative Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è abilitato per la gestione delle migrazioni, dei backup e dei ripristini._

## Bilanciatori di carico  

L'ambiente **SecNumCloud OpenShift** offre soluzioni di bilanciamento del carico adatte a diversi ambiti funzionali, garantendo una gestione sicura e ottimizzata del traffico.  

I bilanciatori di carico coprono quattro ambiti distinti, basandosi su diversi livelli del modello OSI:

- **Accesso agli strumenti di amministrazione** (server API e console OpenShift)  
- **Traffico HTTP/HTTPS pubblico**  
- **Traffico HTTP/HTTPS privato**  
- **Traffico specifico che richiede una personalizzazione avanzata**  

### Accesso agli strumenti di amministrazione  

L'accesso agli strumenti di amministrazione è sicurizzato da bilanciatori di carico dedicati. Questi sono protetti da controlli di sicurezza rafforzati, inclusa una whitelist amministrabile tramite la console **Cloud Temple**, garantendo una gestione rigorosa degli accessi.  

### Traffico HTTP/HTTPS pubblico  

I **LoadBalancers pubblici**, basati su **HAProxy**, operano a livello **4** del modello OSI. Consentono di esporre i carichi di lavoro in **HTTP/HTTPS** tramite **routes** e ingress**, assicurando una distribuzione efficace e performante del traffico in entrata.  

### Traffico HTTP/HTTPS privato (Interconnessione con i vostri servizi IaaS SNC)  

I **LoadBalancers privati** facilitano la comunicazione con i vostri servizi **IaaS SNC** senza esposizione pubblica. Come i loro equivalenti pubblici, garantiscono il bilanciamento del traffico **HTTP/HTTPS** mantenendo un ambiente sicuro e isolato.  

### Traffico specifico  

Il **traffico specifico** è gestito tramite **MetalLB**, un LoadBalancer che opera a livello **2** del modello OSI. Supporta esigenze avanzate che richiedono una personalizzazione fine, tra cui:

- La connessione a un database via **TCP**  
- La gestione dei flussi **UDP** per applicazioni in tempo reale o a bassa latenza  
- Il routing di protocolli avanzati come **QUIC** o **MQTT-SN**, offrendo così una flessibilità maggiore  
Cette solution permette di supportare i vostri flussi specifici, sia per le vostre interconnessioni private che per le vostre esigenze di esposizione pubblica.  

Il routing è assicurato tramite **pool di indirizzi IP pubblici e privati**. Di default, vi vengono assegnati due pool per l’esposizione dei vostri servizi:  

- **Un pool di 4 indirizzi IP pubblici**
- **Un pool di 254 indirizzi IP privati**  

Se queste risorse non sono sufficienti a supportare i vostri carichi di lavoro, potete effettuare una richiesta ai nostri servizi per l’assegnazione di indirizzi IP aggiuntivi, che siano **pubblici** o **privati**.  

> **Nota**: I LoadBalancer integrati non fungono da **WAF**. Una soluzione **WAF as a Service** sarà presto disponibile.  

## Diritti e Permessi

Ecco i permessi principali implementati:

|       Gruppo       |         d'API          |                                                                                       Risorse Permessi                                                                                       |
|--------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
|       Custom       |       Risorse          |                                       Varie risorse personalizzate legate a Kasten K10, Keycloak, ecc. Create, Get, List, Watch, Update, Patch, Delete                                        |


## Restrizioni ed esigenze di sicurezza su OpenShift SecNumCloud  

### Piano di controllo dedicato  

L’esecuzione dei carichi di lavoro sul **piano di controllo** è strettamente vietata. Questa restrizione garantisce la sicurezza e la stabilità della piattaforma OpenShift su **SecNumCloud**, limitando l’accesso alle risorse critiche.  

### Divieto dei container con privilegi elevati (rootless)  

Per rispettare le esigenze di sicurezza del **riferimento SecNumCloud**, solo i **contenitori rootless** sono consentiti. Questo approccio rafforza la sicurezza impedendo qualsiasi accesso privilegiato ai contenitori.  

Le applicazioni che richiedono privilegi elevati dovranno essere adattate, poiché il loro dispiegamento non sarà autorizzato. Questo vincolo si applica anche ai **Helm Charts** e agli **operatori** che utilizzano immagini non rootless, rendendo il loro utilizzo incompatibile con l’infrastruttura.  

### Restrizioni sui ClusterRoles  

Nella nostra offerta OpenShift, la gestione dei diritti di accesso a livello di cluster è rigorosamente regolamentata per garantire **sicurezza e conformità** con SecNumCloud.
Cela implique des **restrizioni sui ClusterRoles**, limitando i privilegi globali. Sebbene queste restrizioni possano richiedere adeguamenti tecnici, sono essenziali per rafforzare la resilienza e la stabilità dell'ambiente.  

Il nostro team di supporto è disponibile per assistervi nell'adattamento delle vostre configurazioni e consigliarvi sulle possibili alternative.  

### Restrizioni sulle Security Context Constraints (SCC)  

Le **Security Context Constraints (SCC)** sono imposte e non possono essere modificate dagli utenti. Di conseguenza, i parametri di esecuzione dei container (privilegi di accesso, capacità Linux, ecc.) sono predefiniti e non personalizzabili.  

Questa restrizione mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Le applicazioni che necessitano di contesti di sicurezza specifici dovranno essere adattate per rispettare le SCC in vigore.  

Dal punto di vista operativo, ciò può richiedere adeguamenti architetturali e adattamenti nei processi di deployment, in particolare per gli **Helm Charts** e gli **operatori** che non rispettano queste restrizioni.  

### Limitazioni sulle Custom Resource Definitions (CRDs)  

Per garantire la **conformità SecNumCloud**, l'uso delle **Custom Resource Definitions (CRDs)** e dei controller personalizzati è ristretto.  

Questa misura, legata ai diritti sul cluster, impedisce il deployment di risorse non autorizzate che potrebbero influenzare la stabilità e la sicurezza dell'infrastruttura. Si applica anche agli **operatori** e agli **Helm Charts**, con limitazioni sui diritti **RBAC**.  

Le **CRDs non certificate** possono essere rifiutate per garantire l'integrità del cluster. Solo le **CRDs provenienti da operatori o Helm Charts certificati** sono autorizzate dopo la convalida da parte dei nostri servizi.  

Il nostro team di supporto può guidarvi in questo processo e consigliarvi sulle migliori pratiche da adottare.  

### Rimozione del supporto degli indirizzi IP dinamici per i runner  

I **runner OpenShift SecNumCloud** devono essere configurati con **indirizzi IP fissi**.  

Questa esigenza garantisce l'accesso sicuro alle **API OpenShift**, alle interfacce di amministrazione e agli strumenti di gestione degli accessi della console **Cloud Temple**.  

Gli **indirizzi IP dinamici non sono supportati**, richiedendo una configurazione adeguata per garantire la connettività e la sicurezza dei componenti.  


## Da sapere

• Se i componenti hardware a livello di piattaforma diventano obsoleti e una migrazione verso nuove risorse di calcolo è necessaria, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzione del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma è possibile utilizzare [le piattaforme di test RedHat](https://www.redhat.com/it/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della vostra infrastruttura, privilegiate il provider Terraform ufficiale di OpenShift.