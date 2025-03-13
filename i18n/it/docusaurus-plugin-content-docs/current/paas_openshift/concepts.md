---
title: Concetti
---
import oshiftOffert from './images/oshift_offert.jpg'

## Introduzione a RedHat OpenShift

**Red Hat OpenShift** è una piattaforma di container enterprise che automatizza il deployment, la gestione e lo scaling delle applicazioni containerizzate. È una piattaforma costruita attorno a Docker, un sistema di containerizzazione che permette di impacchettare un'applicazione e le sue dipendenze in un container virtuale, e Kubernetes, un sistema di orchestrazione di container che gestisce l'esecuzione e il coordinamento dei container su un cluster di server.

### Funzionalità principali di Red Hat OpenShift:

- **Deployment e gestione automatizzati:** OpenShift semplifica il processo di deployment delle applicazioni automatizzando le routine di gestione come lo scaling, la salute e il ciclo di vita dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto per molteplici linguaggi e servizi:** La piattaforma supporta un'ampia varietà di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come messaggistica, caching e database, permettendo così agli sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e deployment continuo (CD):** OpenShift integra strumenti di CI/CD che automatizzano la pipeline di sviluppo del software, dal commit iniziale fino al deployment in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e la diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata:** La piattaforma è progettata con sicurezza integrata, offrendo controlli di accesso basati sui ruoli, separazione dei compiti e gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** Gli sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework di loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'utilizzo delle risorse, riduce il time-to-market e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente lo scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni allo sviluppo del software.

### RedHat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di storage e gestione dei dati progettata per funzionare in modo trasparente con l'ecosistema OpenShift. Offre un'infrastruttura di dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni incentrati su container e microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, fornendo una base solida per le applicazioni aziendali critiche.

#### Funzionalità chiave di OpenShift Data Foundation:

- **Storage persistente:** ODF fornisce un livello di storage persistente per i container, essenziale per le applicazioni aziendali come database, sistemi di gestione dei contenuti e applicazioni che richiedono uno stato persistente.

- **Multicloud e ibrido:** Progettato per il cloud ibrido e multicloud, ODF consente un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, lo scaling e la gestione del ciclo di vita dello storage in base alle esigenze delle applicazioni.

- **Alta disponibilità e resilienza:** ODF utilizza la replica e lo snapshotting dei dati per garantire l'alta disponibilità e la durabilità dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, nonché politiche di sicurezza e conformità personalizzabili.

#### Benefici di OpenShift Data Foundation:

- **Flessibilità operativa:** ODF consente alle aziende di gestire efficacemente i loro dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere ai requisiti in evoluzione delle applicazioni moderne.

- **Semplificazione della gestione dei dati:** Automatizzando molte attività di gestione dei dati, ODF riduce la complessità e libera risorse IT per concentrarsi su iniziative a maggior valore aggiunto.

- **Ottimizzazione dei costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di storage aiuta a ottimizzare i costi evitando il sovra-provisioning e utilizzando più efficacemente le risorse disponibili.

- **Miglioramento delle prestazioni:** ODF è progettato per fornire prestazioni elevate per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carichi di lavoro.

Red Hat OpenShift Data Foundation è una soluzione avanzata di storage dei dati che migliora l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Fornendo uno storage persistente, automatizzato e sicuro, ODF svolge un ruolo cruciale nell'abilitare le aziende a sfruttare pienamente il potenziale delle tecnologie di container e cloud ibrido.

## Architettura generale della piattaforma

### Generalità

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su [**tre zone di disponibilità distinte**](../additional_content/concepts_az.md) all'interno della stessa [regione](../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura tri-zonale aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma è composta da un piano di controllo e nodi di lavoro, tutti gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è distribuito equamente sulle tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da lame di calcolo, disposte in modo che ogni zona di disponibilità ne contenga una.

Per i nodi di lavoro, sono disponibili diversi tipi di lame di calcolo, permettendo così un adattamento flessibile a varie esigenze operative:

| Unità di lavoro Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unità                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1                                                                          | 1 piano dedicato            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 core / 20 thread - 64 GB di RAM - 512 GB FLASH 1500 iops)                      | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 core / 40 thread - 128 GB di RAM - 512 GB FLASH 1500 iops)                   | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 core / 64 thread - 384 GB di RAM - 512 GB FLASH 1500 iops)                | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 core / 96 thread - 768 GB di RAM - 512 GB FLASH 1500 iops)                 | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 core / 112 thread - 1.5 TB di RAM - 512 GB FLASH 1500 iops)                    | 3 worker dedicati        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 core / 64 thread - 512 GB di RAM - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 worker dedicati + GPU | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift di Cloud Temple sono disponibili in modalità pay-as-you-go o con prenotazione di 12 mesi.

**Note**:

1. *Il mantenimento in condizioni operative e di sicurezza del piano di controllo è responsabilità di Cloud Temple come parte di un servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è volutamente limitata via software a un piano di controllo con 30 nodi worker (indipendentemente dal tipo di worker) e a uno storage persistente globale di 50 TB. Se questi limiti sono bloccanti per il vostro progetto, vi preghiamo di contattare il supporto.*

3. *Ogni nodo worker viene fornito con 512GB di storage flash a blocchi, il che fa 1.5 TB per ogni unità di lavoro (1 worker per AZ).*

4. *Un nodo worker può gestire fino a 250 pod di default. Questo numero è regolabile tramite il parametro podsPerCore - ad esempio, con 10 pod per core su un nodo a 4 core, avrete un massimo di 40 pod. Per maggiori dettagli tecnici, consultate la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida ai limiti di OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS Openshift include nativamente l'accesso a tutte e 3 le zone di disponibilità, senza che sia necessario sottoscriverle in aggiunta.*

6. *È possibile aggiungere successivamente storage a blocchi al cluster Openshift.*

7. *I nodi sono distribuiti in modo equilibrato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un numero maggiore di nodi a una singola zona.*

### Offerta RedHat distribuita nel quadro della piattaforma Openshift Cloud Temple

La piattaforma è una Redhat Openshift 4 basata su [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Strategia di backup della vostra piattaforma PaaS Openshift

Il backup e il ripristino della piattaforma PaaS Openshift è responsabilità di Cloud Temple per la parte **ETCD** come parte della gestione della piattaforma. **Il backup e il ripristino per la parte di deployment e dati applicativi è responsabilità del Cliente**.

Cloud Temple mette a disposizione dei suoi clienti l'offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per rispondere alle esigenze in materia di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra in modo nativo con gli ambienti Kubernetes, che siano gestiti su cluster cloud o on-premise, e può adattarsi a diversi casi d'uso, in particolare la migrazione di cluster tra diverse distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei casi d'uso principali di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Che sia per una transizione verso un'infrastruttura più robusta o per consolidare gli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, il primo passo è fare il backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze, così come i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), database, configurazioni e segreti. Kasten K10 supporta un'ampia varietà di provider di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), il che permette di creare snapshot delle applicazioni da migrare. Questi backup sono poi archiviati in modo sicuro con opzioni di crittografia e controllo di accesso granulare, garantendo la sicurezza dei dati durante tutto il processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze di architetture e configurazioni specifiche di ogni piattaforma. Kasten K10 semplifica questo processo fornendo un livello di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica le configurazioni e i dati da un cluster sorgente a un cluster di destinazione, tenendo conto delle specificità di ogni ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV, così come i CRD (Custom Resource Definitions) possono essere migrati tenendo conto dei vincoli propri di ogni distribuzione Kubernetes, che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, il che riduce considerevolmente il rischio di errori manuali. Inoltre, Kasten K10 permette una migrazione progressiva o completa, a seconda delle necessità, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.

 - **Compatibilità multicloud e multidistribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multicloud, il che lo rende uno strumento ideale per le organizzazioni che cercano di migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo garantisce una flessibilità massima e permette ai team DevOps di scegliere il miglior ambiente in funzione delle esigenze di business o delle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente le operazioni di migrazione e backup senza richiedere un'esperienza approfondita di ogni piattaforma Kubernetes. La soluzione è anche equipaggiata con funzionalità di automazione che permettono di definire politiche di migrazione e backup ricorrenti, integrandosi alle pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in funzione di finestre di manutenzione, effettuare test di validazione dopo la migrazione e automatizzare i processi di failover in caso di problemi sul cluster sorgente.

 - **Sicurezza e conformità**: nel quadro di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità alle norme (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 assicura la crittografia dei dati in transito e a riposo, offrendo al contempo opzioni di audit e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione imprescindibile per le aziende che desiderano migrare efficacemente e in totale sicurezza cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

 La fatturazione si basa sul numero di nodi worker.

| Unità di lavoro Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 worker | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Attenzione, il volume di disco necessario per il corretto funzionamento del vostro backup deve essere previsto nell'ambiente di ricezione del vostro backup, generalmente in storage S3. Non è incluso nelle unità di lavoro Openshift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è attivato per la gestione delle migrazioni, dei backup e dei ripristini_

## Diritti e Permessi

Ecco i principali permessi implementati:

|       Gruppo       |         API          |                                                                                       Risorse Permessi                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Tutte         |                                                                                    le risorse (*) Get, List                                                                                    |
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
|       Custom       |       Resources        |                                       Diverse risorse personalizzate relative a Kasten K10, Keycloak, ecc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Limiti attuali dell'offerta Redhat Openshift in ambiente SecNumCloud

Ecco alcune limitazioni indotte dalla qualifica SecNumCloud:

### Piano di controllo dedicato

I carichi di lavoro non possono essere eseguiti sul piano di controllo a causa delle restrizioni inerenti alla gestione delle risorse e alla sicurezza della piattaforma OpenShift su SecNumCloud.

### Divieto di distribuire immagini con privilegi elevati (rootless)

Per conformarsi ai requisiti di sicurezza del referenziale SecNumCloud, è obbligatorio utilizzare container senza privilegi (rootless).

Questo approccio rafforza la sicurezza globale impedendo qualsiasi accesso privilegiato ai container. Le applicazioni che richiedono container con privilegi dovranno essere modificate, poiché il loro deployment non sarà autorizzato.

Questa restrizione si estende anche agli Helm Charts e agli operatori che utilizzano immagini non rootless, rendendo impossibile il loro deployment all'interno dell'infrastruttura.

### Restrizioni sui diritti di ClusterRole

Nel quadro della nostra offerta OpenShift, implementiamo una gestione rigorosa dei diritti di accesso a livello del cluster, in conformità con i requisiti SecNumCloud.

Questo approccio implica una limitazione dei ClusterRoles per i nostri clienti, restringendo così certi aspetti della gestione globale del cluster. Sebbene questa misura possa inizialmente sembrare restrittiva, mira a rafforzare la sicurezza e la stabilità dell'infrastruttura.

Siamo consapevoli che questo può generare sfide tecniche, in particolare nella configurazione di parametri avanzati, e potenzialmente implicazioni relative all'adattamento delle vostre applicazioni o all'acquisizione di strumenti complementari.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi su questo argomento.

### Il contesto SCC non può essere modificato nell'ambiente SecNumCloud

Le Security Context Constraints (SCC) sono soggette a restrizioni severe e non possono essere modificate dagli utenti. Questa limitazione ha ripercussioni significative sul deployment e l'esecuzione dei container.

In pratica, ciò significa che i parametri di esecuzione dei container, come i privilegi di accesso al sistema o le capacità Linux, sono predefiniti e non personalizzabili.

Questa misura, motivata da requisiti di sicurezza, mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Di conseguenza, le applicazioni che richiedono contesti di sicurezza specifici, in particolare quelle che richiedono accesso privilegiato, possono incontrare ostacoli durante il deployment.

Da un punto di vista tecnico, questo può implicare una revisione dell'architettura delle applicazioni e un adattamento dei processi di deployment per conformarsi alle SCC predefinite. Da un punto di vista operativo, questa restrizione può ridurre la flessibilità dei deployment e aumentare la complessità di gestione di certe applicazioni nell'ambiente OpenShift, in particolare quelle che utilizzano Helm Charts o operatori che non rispettano le SCC in vigore.

### Limitazioni sulle Custom Resource Definitions (CRDs)

Per conformarsi alla qualifica SecNumCloud, una restrizione importante riguarda l'uso di Custom Resource Definitions (CRDs) e controller personalizzati. Questa misura, legata ai diritti sul cluster, mira a prevenire il deployment di risorse personalizzate potenzialmente instabili o non autorizzate.

Questa limitazione si applica anche agli operatori e agli Helm Charts, con un impatto diretto sui diritti RBAC, poiché i CRDs permettono di estendere l'API Kubernetes. Di conseguenza, gli operatori e gli Helm Charts devono passare attraverso una catena di certificazione con i nostri servizi per garantire la loro conformità e sicurezza.

I CRDs personalizzati, in particolare quelli che rispondono a esigenze di business specifiche, possono essere rifiutati nell'infrastruttura a causa dei rischi che presentano per la stabilità e la sicurezza della piattaforma. Questa politica, progettata per proteggere l'integrità e l'affidabilità del cluster, autorizza solo i CRDs provenienti da operatori o Helm Charts ufficialmente certificati.

Il nostro team di supporto è disponibile per guidarvi e consigliarvi sulle buone pratiche da adottare in questo contesto.

### Nessun supporto per IP dinamici per i runner

La piattaforma OpenShift SecNumCloud richiede che i runner siano configurati con indirizzi IP fissi. Questo requisito è motivato dalla necessità di autorizzare gli IP che amministrano la nostra console Cloud Temple, necessaria per lo strumento di gestione degli accessi alle API. Gli indirizzi IP autorizzati sono utilizzati anche per accedere all'API OpenShift così come alle interfacce di amministrazione di OpenShift e Shiva.

Di conseguenza, l'uso di indirizzi IP dinamici non è supportato per questi componenti, imponendo la configurazione di IP fissi per garantire la sicurezza e l'accesso alle API.

## Bilanciatori di carico

L'ambiente SecNumCloud Openshift offre opzioni di bilanciamento del carico a diversi livelli per garantire una gestione sicura ed efficiente del traffico. L'API del bilanciatore di carico è accessibile attraverso le porte 6443 e 443, con un controllo di sicurezza assicurato da una lista bianca gestita dalla console Cloud Temple. Questa API utilizza un indirizzo IP pubblico connesso al nostro backbone, ma non è accessibile di default, rafforzando così la sicurezza degli accessi.

Per il bilanciatore di carico privato, l'ambiente utilizza Ingress (nginx) come soluzione predefinita, il che permette di gestire il traffico interno in modo efficiente. Inoltre, è disponibile il supporto TCP attraverso l'infrastruttura IaaS di Cloud Temple, offrendo così una flessibilità aggiuntiva per le applicazioni che richiedono un bilanciamento del carico a questo livello.

Per quanto riguarda il bilanciatore di carico pubblico, il supporto di livello 4 è assicurato attraverso Ingress, sebbene esistano attualmente alcune limitazioni con il comando "expose". Ciò significa che il sistema è in grado di gestire connessioni TCP e UDP in modo affidabile mentre continua a evolversi per offrire una maggiore compatibilità e flessibilità.

**Nota**: il bilanciatore di carico integrato non funge da WAF. È prevista un'offerta WAF as a Service per il secondo semestre del 2025.

## Buono a sapersi

• Se i componenti hardware a livello della piattaforma diventano obsoleti ed è necessaria una migrazione verso nuove risorse di calcolo, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzione del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma è possibile utilizzare [le piattaforme di test RedHat](https://
