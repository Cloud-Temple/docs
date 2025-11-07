---
title: Concetti
---
## Presentazione di RedHat Openshift

**Red Hat OpenShift** è una piattaforma enterprise per container che automatizza il deployment, la gestione e l'espansione delle applicazioni containerizzate. Si tratta di una piattaforma costruita attorno a Docker, un sistema di containerizzazione che permette di pacchettizzare un'applicazione e le sue dipendenze in un container virtuale, e a Kubernetes, un sistema di orchestrator di container che gestisce l'esecuzione e la coordinazione dei container su un cluster di server.

### Principali funzionalità di Red Hat OpenShift:

- **Distribuzione e gestione automatizzate:** OpenShift semplifica il processo di distribuzione delle applicazioni automatizzando le routine di gestione come il scaling, lo stato di salute e il ciclo di vita dei container. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto per diversi linguaggi e servizi:** La piattaforma supporta una vasta gamma di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come messaggistica, caching e database, consentendo ai sviluppatori di concentrarsi sul codice piuttosto che sull'infrastruttura.

- **Integrazione continua (CI) e distribuzione continua (CD):** OpenShift integra strumenti per CI/CD che automatizzano il flusso di sviluppo del software, dal commit iniziale fino al rilascio in produzione, promuovendo così le pratiche DevOps.

- **Gestione delle operazioni:** OpenShift fornisce strumenti per il monitoraggio, la gestione delle prestazioni e il diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza potenziata:** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift:

- **Flessibilità:** I sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework che preferiscono.
- **Efficienza operativa:** OpenShift ottimizza l'utilizzo delle risorse, riduce i tempi di messa sul mercato e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente il scaling delle applicazioni in risposta alle variazioni della domanda.
- **Sicurezza e conformità:** Grazie alle sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni nello sviluppo del software.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata di archiviazione e gestione dei dati progettata per funzionare in modo trasparente nell'ecosistema OpenShift. Fornisce un'infrastruttura dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni incentrati sui container e sui microservizi. ODF è progettata per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, offrendo una base solida per le applicazioni aziendali critiche.

#### Funzionalità Principali di OpenShift Data Foundation:

- **Archiviazione Persistente:** ODF fornisce un livello di archiviazione persistente per i contenitori, essenziale per le applicazioni aziendali come database, sistemi di gestione del contenuto e applicazioni che richiedono uno stato persistente.

- **Multicloud e Ibrido:** Progettato per ambienti multicloud e ibridi, ODF consente un'esperienza coerente nella gestione dei dati attraverso diversi ambienti cloud, facilitando la mobilità di applicazioni e dati.

- **Automazione e Orchestrazione:** L'integrazione profonda con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, il scaling e la gestione del ciclo di vita dell'archiviazione in base alle esigenze delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replica e il snapshotting dei dati per garantire alta disponibilità e durabilità dei dati, fondamentali per la continuità operativa aziendale.

- **Sicurezza dei Dati:** La soluzione integra funzionalità di sicurezza avanzate, come il cifratura dei dati a riposo e in transito, nonché politiche di sicurezza e conformità personalizzabili. La nostra implementazione SecNumCloud garantisce una protezione a più livelli:
    -   **Cifratura dei dati a riposo:** L'archiviazione persistente fornita da OpenShift Data Foundation si basa sulla nostra infrastruttura di archiviazione a blocchi sottostante. Di conseguenza, tutti i dati sono cifrati a riposo utilizzando l'algoritmo **XTS-AES 256**, conforme allo standard **FIPS 140-2**.
    -   **Cifratura dei dati in transito:** Tutti gli accessi alla piattaforma, inclusi l'API, la console web e il traffico applicativo tramite route, sono sistematicamente protetti e cifrati utilizzando il protocollo **TLS**.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità operativa:** ODF consente alle aziende di gestire in modo efficiente i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze in continua evoluzione delle applicazioni moderne.

- **Semplificazione della gestione dei dati:** Automatizzando molte attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative con un valore aggiunto maggiore.

- **Ottimizzazione dei costi:** La capacità di ODF di adattarsi dinamicamente ai bisogni di archiviazione contribuisce all'ottimizzazione dei costi, evitando il sovradimensionamento e utilizzando in modo più efficiente le risorse disponibili.

- **Miglioramento delle prestazioni:** ODF è progettato per offrire elevate prestazioni per le applicazioni aziendali, con funzionalità di ottimizzazione per diversi tipi di carichi di lavoro.

Red Hat OpenShift Data Foundation è una soluzione avanzata di archiviazione dati che rafforza l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo un'archiviazione persistente, automatizzata e sicura, ODF svolge un ruolo fondamentale nell'abilitation delle aziende a sfruttare appieno il potenziale delle tecnologie container e cloud ibrido.

## Architettura generale della piattaforma

### Informazioni generali

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su [**tre zone di disponibilità distinte**](../additional_content/concepts_az.md) all'interno della stessa [regione](../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura a tre zone aumenta significativamente la disponibilità e la resilienza dei dati.

La piattaforma è composta da un piano di controllo e da nodi di lavoro, entrambi gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è distribuito equamente tra le tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da lame di calcolo, disposte in modo tale che ogni zona di disponibilità ne contenga una.

Per i nodi di lavoro sono disponibili diversi tipi di lame di calcolo, permettendo un'adattabilità flessibile alle diverse esigenze operative:

| Unità di offerta Red Hat OpenShift 4 con Data Foundations - Pay-As-You-Go - 1 mese | Unità | SKU |
| :--- | :--- | :--- |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1 | 1 piano dedicato | csp:fr1:paas:oshift:plan:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - TINY - 3 x (10 core / 20 thread - 64 GB RAM - 512 GB FLASH 1500 IOPS) | 3 nodi dedicati | csp:fr1:paas:oshift:wkr:tiny:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - SMALL - 3 x (20 core / 40 thread - 128 GB RAM - 512 GB FLASH 1500 IOPS) | 3 nodi dedicati | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - STANDARD - 3 x (32 core / 64 thread - 384 GB RAM - 512 GB FLASH 1500 IOPS) | 3 nodi dedicati | csp:fr1:paas:oshift:wkr:std:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - ADVANCED - 3 x (48 core / 96 thread - 768 GB RAM - 512 GB FLASH 1500 IOPS) | 3 nodi dedicati | csp:fr1:paas:oshift:wkr:adv:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - PERF - 3 x (56 core / 112 thread - 1,5 TB RAM - 512 GB FLASH 1500 IOPS) | 3 nodi dedicati | csp:fr1:paas:oshift:wkr:perf:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - GPU - 3 x (32 core / 64 thread - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 nodi dedicati + GPU | csp:fr1:paas:oshift:wkr:gpu:payg:v1 |

I prodotti Red Hat OpenShift di Cloud Temple sono disponibili con pagamento in base all'uso o con prenotazione a 12 mesi.

**Note**:

1. *Il mantenimento in condizioni operative e di sicurezza del piano di controllo è a carico di Cloud Temple nell'ambito di un servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è limitata in modo software a un massimo di 30 nodi di lavoro (indipendentemente dal tipo) e a un archiviazione persistente globale di 50 TiB. Se queste limitazioni sono critiche per il tuo progetto, ti preghiamo di contattare il supporto.*

3. *Ogni nodo di lavoro viene fornito con 512 GB di archiviazione flash blocco, per un totale di 1,5 TB per ogni unità di offerta (1 nodo per AZ).*

4. *Un nodo di lavoro può gestire fino a 250 pod per impostazione predefinita. Questo valore è modificabile tramite il parametro podsPerCore – ad esempio, con 10 pod per core su un nodo da 4 core, si raggiungeranno al massimo 40 pod. Per ulteriori dettagli tecnici, consulta la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida alle limitazioni OpenShift](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS OpenShift include nativamente l'accesso alle 3 zone di disponibilità, senza necessità di sottoscrivere ulteriori servizi.*

6. *È possibile aggiungere successivamente archiviazione blocco al cluster OpenShift.*

7. *I nodi vengono distribuiti in modo bilanciato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un numero maggiore di nodi a una singola zona.*

### Offerta RedHat distribuita nell'ambito della piattaforma Openshift Cloud Temple

La piattaforma è basata su Red Hat OpenShift 4 e si avvale di [Red Hat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus), con inclusa [OpenShift Data Foundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={require('./images/oshift_offert.png').default} alt="Offre OpenShift" />

## Strategia di backup della vostra piattaforma PaaS OpenShift

Il backup e il ripristino della piattaforma PaaS OpenShift sono di responsabilità di Cloud Temple per la parte **ETCD**, in quanto gestore della piattaforma. **Il backup e il ripristino per la parte deployment e dati applicativi sono di responsabilità del Committente**.

Cloud Temple mette a disposizione per i propri clienti l'offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/it/kubernetes-native-backup-and-restore.html)), piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per soddisfare i requisiti di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra nativamente con ambienti Kubernetes, sia gestiti su cluster cloud che on-premise, e può adattarsi a diversi scenari d'uso, in particolare la migrazione di cluster tra diverse distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei principali scenari d'uso di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Che si tratti di una transizione verso un'infrastruttura più robusta o di una consolidazione degli ambienti esistenti, Kasten K10 fornisce strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione da un cluster Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine o OpenShift, la prima fase consiste nel backup dei dati delle applicazioni e del loro stato. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze e i volumi dati associati. Ciò include il backup dei volumi persistenti (Persistent Volumes - PV), delle basi dati, delle configurazioni e dei segreti. Kasten K10 supporta una vasta gamma di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), consentendo di creare snapshot delle applicazioni da migrare. Questi backup vengono quindi archiviati in modo sicuro con opzioni di crittografia e controllo degli accessi granulari, garantendo la sicurezza dei dati durante l'intero processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze architetturali e delle configurazioni specifiche di ogni piattaforma. Kasten K10 semplifica questo processo fornendo un livello di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica configurazioni e dati da un cluster sorgente a un cluster di destinazione, tenendo conto delle specificità di ogni ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV e CRD (Custom Resource Definitions) possono essere migrati tenendo conto delle restrizioni proprie a ogni distribuzione Kubernetes, sia un cluster Red Hat OpenShift che Kubernetes Engine. Il processo è automatizzato, riducendo notevolmente il rischio di errori umani. Inoltre, Kasten K10 permette una migrazione progressiva o completa, a seconda delle esigenze, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.

 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che desiderano migrare applicazioni da cluster Tanzu o Vanilla a ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Ciò garantisce una massima flessibilità e permette ai team DevOps di scegliere l'ambiente più adatto in base ai requisiti aziendali o alle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente operazioni di migrazione e backup senza richiedere una conoscenza approfondita di ogni piattaforma Kubernetes. La soluzione è inoltre dotata di funzionalità di automazione che consentono di definire politiche di migrazione e backup ricorrenti, integrandosi con i pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in base a finestre di manutenzione, eseguire test di validazione dopo la migrazione e automatizzare i processi di failover in caso di problemi sul cluster sorgente.

 - **Sicurezza e conformità**: nell'ambito di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità alle normative (ISO, SOC, GDPR, ecc.) sono aspetti fondamentali. Kasten K10 garantisce la crittografia dei dati in transito e in stato di riposo, offrendo inoltre opzioni di audit e tracciabilità per le operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione indispensabile per le aziende che desiderano migrare in modo efficiente e sicuro cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

 La fatturazione avviene in base al numero di worker node.

| Unità di misura Redhat Openshift 4 with Data Foundations - Soluzione Backup Worker Node | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protezione dei dati Kubernetes e mobilità applicativa              | 3 worker  | csp:fr1:paas:kasten:3wkr:v1 |

**Nota**: *Attenzione, la volumetria disco necessaria per il corretto funzionamento del backup deve essere prevista nell'ambiente di ricezione del backup, di solito in storage S3. Non è inclusa nelle unità d'opera OpenShift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. È attivo solo Kasten per la gestione delle migrazioni, dei backup e del ripristino_

## Load Balancers

The **SecNumCloud OpenShift** environment offers load balancing solutions tailored to multiple functional scopes, ensuring secure and optimized traffic management.

The load balancers cover four distinct scopes, leveraging different layers of the OSI model:

- **Access to administration tools** (API server and OpenShift console)  
- **Public HTTP/HTTPS traffic**  
- **Private HTTP/HTTPS traffic**  
- **Specific traffic requiring advanced customization**

### Accesso agli strumenti di amministrazione

L'accesso agli strumenti di amministrazione è protetto da load balancer dedicati. Questi sono protetti da controlli di sicurezza rafforzati, in particolare da un elenco bianco gestibile tramite la console **Cloud Temple**, garantendo una gestione rigorosa degli accessi.

### Traffico HTTP/HTTPS pubblico

I **LoadBalancers pubblici**, basati su **HAProxy**, operano a livello **4** del modello OSI. Consentono di esporre i carichi di lavoro in **HTTP/HTTPS** tramite **route** e **ingress**, garantendo così una distribuzione efficiente e performante del traffico in entrata.

### Traffico HTTP/HTTPS privato (Interconnessione con i tuoi servizi IaaS SNC)

I **Load Balancer privati** semplificano la comunicazione con i tuoi servizi **IaaS SNC** senza esposizione pubblica. Come i loro omologhi pubblici, garantiscono la distribuzione del traffico **HTTP/HTTPS** mantenendo un ambiente sicuro e isolato.

### Traffico specifico

Il **traffico specifico** è gestito tramite il LoadBalancer **MetalLB**. Supporta esigenze avanzate che richiedono una personalizzazione fine, ad esempio:

- La connessione a un database tramite **TCP**
- La gestione di flussi **UDP** per applicazioni in tempo reale o a bassa latenza
- Il routing di protocolli avanzati come **QUIC** o **MQTT-SN**, offrendo così una maggiore flessibilità

Questa soluzione permette di gestire i vostri flussi specifici, sia per le interconnessioni private che per i requisiti di esposizione pubblica.

Il routing avviene tramite **indirizzi IP pubblici e privati dedicati**. Per impostazione predefinita, vi vengono assegnati gli indirizzi IP per l'esposizione dei vostri servizi:

- **4 indirizzi IP pubblici**
- **254 indirizzi IP privati**

Se tali risorse non fossero sufficienti a supportare il carico di lavoro, potete inviare una richiesta ai nostri servizi per l'assegnazione di indirizzi IP aggiuntivi, sia **pubblici** che **privati**.

> **Nota**: I LoadBalancer integrati non fungono da **WAF**. Una soluzione **WAF as a Service** sarà disponibile a breve.

## Diritti e Permessi

Di seguito sono elencati i principali permessi implementati:

|       Gruppo       |         API          |                                                                                       Risorse e Permessi                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Tutto          |                                                                                    tutte le risorse (*) Get, List                                                                                    |
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
|       Custom       |       Risorse          |                                       Diverse risorse personalizzate legate a Kasten K10, Keycloak, ecc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Restrizioni e requisiti di sicurezza su OpenShift SecNumCloud

### Dedicated control plane  

Running workloads on the **control plane** is strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud** by limiting access to critical resources.

### Restriction of containers with elevated privileges (rootless)

To comply with the security requirements of the **SecNumCloud reference framework**, only **rootless containers** are allowed. This approach enhances security by preventing any privileged access to containers.

Applications requiring elevated privileges must be adapted, as their deployment will not be permitted. This restriction also applies to **Helm Charts** and **operators** using non-rootless images, making their use incompatible with the infrastructure.

### Restrictions on ClusterRoles

In our OpenShift offering, access management at the cluster level is strictly regulated to ensure **security and compliance** with SecNumCloud.

This means there are **restrictions on ClusterRoles**, limiting global privileges. While these restrictions may require technical adjustments, they are essential to strengthen the resilience and stability of the environment.

Our support team is available to assist you in adapting your configurations and advise you on possible alternatives.

### Restrictions on Security Context Constraints (SCC)

**Security Context Constraints (SCC)** are enforced and cannot be modified by users. As a result, container execution parameters (such as access privileges, Linux capabilities, etc.) are predefined and not customizable.

This restriction aims to prevent unauthorized access to critical cluster resources. Applications requiring specific security contexts must be adapted to comply with the existing SCCs.

From an operational standpoint, this may require architectural adjustments and modifications to deployment processes, particularly for **Helm Charts** and **operators** that do not adhere to these constraints.

### Limitations on Custom Resource Definitions (CRDs)

To ensure **SecNumCloud compliance**, the use of **Custom Resource Definitions (CRDs)** and custom controllers is restricted.

This measure, tied to cluster permissions, prevents the deployment of unauthorized resources that could impact the stability and security of the infrastructure. It also applies to **operators** and **Helm Charts**, with limitations on **RBAC** permissions.

**Non-certified CRDs** may be rejected to ensure cluster integrity. Only **CRDs from certified operators or Helm Charts** are allowed after validation by our services.

Our support team can guide you through this process and advise on best practices to follow.

### Removal of support for dynamic IP addresses for runners

**OpenShift SecNumCloud runners** must be configured with **static IP addresses**.

This requirement ensures secure access to **OpenShift APIs**, administration interfaces, and access management tools in the **Cloud Temple** console.

**Dynamic IP addresses are not supported**, requiring appropriate configuration to ensure connectivity and security of the components.

## Informazioni utili

• Se i componenti hardware a livello di piattaforma diventano obsoleti e una migrazione verso nuove risorse di calcolo è necessaria, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzioni del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma è possibile utilizzare le [piattaforme di test RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della propria infrastruttura, preferire il provider ufficiale Terraform per OpenShift.
