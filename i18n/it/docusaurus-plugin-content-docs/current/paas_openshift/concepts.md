---
title: Concetti
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentazione di Red Hat OpenShift

**Red Hat OpenShift** è una piattaforma per container aziendali che automatizza il deployment, la gestione e la scalabilità delle applicazioni containerizzate. È una piattaforma costruita intorno a Docker, un sistema di containerizzazione che consente di incapsulare un'applicazione e le sue dipendenze in un container virtuale, e Kubernetes, un sistema di orchestrazione dei container, che gestisce l'esecuzione e la coordinazione dei container su un cluster di server.

### Funzionalità principali di Red Hat OpenShift :

- **Distribuzione e gestione automatizzate :** OpenShift semplifica il processo di distribuzione delle applicazioni automatizzando le routine di gestione come il scaling, la salute e la durata dei contenitori. Fornisce un ambiente integrato per lo sviluppo, il test e la produzione delle applicazioni.

- **Supporto per diversi linguaggi e servizi :** La piattaforma supporta una vasta gamma di linguaggi di programmazione (come Java, Node.js, Python, Ruby e PHP) e offre servizi integrati come la messaggistica, il caching e le basi di dati, permettendo così agli sviluppatori di concentrarsi sul codice invece che sull'infrastruttura.

- **Integrazione continua (CI) e distribuzione continua (CD) :** OpenShift integra strumenti per la CI/CD che automatizzano il pipeline di sviluppo del software, dal commit iniziale al deploy in produzione, favorendo così le pratiche DevOps.

- **Gestione delle operazioni :** OpenShift fornisce strumenti per la sorveglianza, la gestione delle prestazioni e il diagnostica delle applicazioni e delle infrastrutture, aiutando gli operatori a mantenere la salute e le prestazioni dei sistemi.

- **Sicurezza rafforzata :** La piattaforma è progettata con una sicurezza integrata, offrendo controlli di accesso basati sui ruoli, la separazione dei compiti e la gestione automatizzata dei segreti per proteggere le applicazioni e i dati.

### Vantaggi di Red Hat OpenShift :

- **Flessibilità:** I sviluppatori possono lavorare con gli strumenti, i linguaggi e i framework della loro scelta.
- **Efficienza operativa:** OpenShift ottimizza l'utilizzo delle risorse, riduce il tempo di lancio sul mercato e migliora la produttività degli sviluppatori.
- **Scalabilità:** La piattaforma gestisce automaticamente il scaling delle applicazioni per rispondere alle variazioni della domanda.
- **Sicurezza e conformità:** Con le sue politiche di sicurezza integrate, OpenShift aiuta a mantenere gli standard di sicurezza e conformità.

Red Hat OpenShift è una soluzione completa per lo sviluppo, il deployment e la gestione di applicazioni containerizzate, offrendo una piattaforma robusta, sicura e flessibile per le aziende che adottano approcci moderni nello sviluppo del software.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) è una soluzione integrata per l'archiviazione e la gestione dei dati progettata per funzionare in modo trasparente con l'ecosistema OpenShift. Offre un'infrastruttura dati persistente, sicura e altamente disponibile per le applicazioni containerizzate, supportando così gli ambienti di sviluppo moderni basati sui container e sui microservizi. ODF è progettato per semplificare e automatizzare la gestione dei dati in ambienti cloud ibridi e multicloud, fornendo una base solida per le applicazioni aziendali critiche.

#### Funzionalità Principali di OpenShift Data Foundation:

- **Archiviazione Persistente:** ODF fornisce un livello di archiviazione persistente per i container, essenziale per le applicazioni aziendali come database, sistemi di gestione del contenuto e applicazioni che richiedono uno stato persistente.

- **Multicloud e Ibrido:** Progettato per il cloud ibrido e multicloud, ODF permette un'esperienza di gestione dei dati coerente attraverso diversi ambienti cloud, facilitando la mobilità delle applicazioni e dei dati.

- **Automazione e Orchestrazione:** L'integrazione approfondita con Kubernetes e OpenShift permette a ODF di automatizzare il provisioning, il scaling e la gestione del ciclo di vita dell'archiviazione in base alle esigenze delle applicazioni.

- **Alta Disponibilità e Resilienza:** ODF utilizza la replicazione e lo snapshotting dei dati per garantire alta disponibilità e durevolezza dei dati, essenziali per la continuità delle operazioni aziendali.

- **Sicurezza dei Dati:** La soluzione integra funzionalità di sicurezza avanzate, come la crittografia dei dati a riposo e in transito, nonché politiche di sicurezza e conformità personalizzabili.

#### Vantaggi di OpenShift Data Foundation:

- **Flessibilità Operativa:** ODF permette alle aziende di gestire efficacemente i propri dati in ambienti distribuiti, offrendo la flessibilità necessaria per rispondere alle esigenze in costante cambiamento delle applicazioni moderne.

- **Semplificazione della Gestione dei Dati:** Automatizzando molte attività di gestione dei dati, ODF riduce la complessità e libera le risorse IT per concentrarsi su iniziative a maggiore valore aggiunto.

- **Ottimizzazione dei Costi:** La capacità di ODF di adattarsi dinamicamente alle esigenze di storage aiuta a ottimizzare i costi evitando il sovrapprovisionamento e utilizzando in modo più efficiente le risorse disponibili.

- **Miglioramento delle Prestazioni:** ODF è progettato per fornire prestazioni elevate per le applicazioni aziendali, con capacità di ottimizzazione per diversi tipi di carico di lavoro.

Red Hat OpenShift Data Foundation è una soluzione di storage avanzata che rafforza l'efficienza, la resilienza e la sicurezza delle applicazioni aziendali distribuite su OpenShift. Offrendo un storage persistente, automatizzato e sicuro, ODF svolge un ruolo cruciale nell'abilitation delle aziende a sfruttare appieno il potenziale delle tecnologie container e cloud ibrido.

## Architettura generale della piattaforma

### Informazioni generali

La piattaforma Red Hat OpenShift di Cloud Temple è progettata come un'offerta regionale, distribuita nativamente su [**tre zone di disponibilità distinte**](../additional_content/concepts_az.md) all'interno della stessa [regione](../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura a tre zone aumenta significativamente la disponibilità e la resilienza dei dati.


La piattaforma è composta da un piano di controllo e nodi di lavoro, gestiti dall'infrastruttura Cloud Temple. Il piano di controllo è distribuito equamente su tre zone di disponibilità, garantendo una gestione centralizzata e sicura. I nodi di lavoro, invece, sono rappresentati da lame di calcolo, disposte in modo che ogni zona di disponibilità ne contenga una.

Per i nodi di lavoro, sono disponibili diversi tipi di lame di calcolo, consentendo un'adattabilità flessibile a diversi bisogni operativi:

| Unità di lavoro Red Hat OpenShift 4 con Data Foundations - On Demand - 1 mese                                               | Unità                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Piano di controllo - 3 nodi - Regione FR1                                                                       | 1 piano dedicato        | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - NODI DI LAVORO - TINY - 3 x (10 core / 20 thread - 64 GB di RAM - 512 GB FLASH 1500 iops)                      | 3 nodi dedicati         | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - NODI DI LAVORO - SMALL - 3 x (20 core / 40 thread - 128 GB di RAM - 512 GB FLASH 1500 iops)                   | 3 nodi dedicati         | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - NODI DI LAVORO - STANDARD - 3 x (32 core / 64 thread - 384 GB di RAM - 512 GB FLASH 1500 iops)                | 3 nodi dedicati         | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - NODI DI LAVORO - ADVANCED - 3 x (48 core / 96 thread - 768 GB di RAM - 512 GB FLASH 1500 iops)                 | 3 nodi dedicati         | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - NODI DI LAVORO - PERF - 3 x (56 core / 112 thread - 1,5 TB di RAM - 512 GB FLASH 1500 iops)                    | 3 nodi dedicati         | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - NODI DI LAVORO - GPU - 3 x (32 core / 64 thread - 512 GB di RAM - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 nodi dedicati + GPU   | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

I prodotti Red Hat OpenShift di Cloud Temple sono disponibili con pagamento in base all'uso o con prenotazione per 12 mesi.

**Note** :

1. *Il mantenimento in condizioni operative e di sicurezza del piano di controllo è responsabilità di Cloud Temple nell'ambito di un servizio PaaS.*

2. *Al 15 giugno 2024, la versione 1 della piattaforma è volontariamente limitata a livello software per un piano di controllo con 30 nodi worker (indipendentemente dal tipo di worker) e un archiviazione persistente globale di 50 TiB. Se queste limitazioni sono bloccanti per il tuo progetto, contatta il supporto.*

3. *Ogni nodo worker è fornito con 512 GB di archiviazione flash, il che corrisponde a 1,5 TB per ogni unità di lavoro (1 nodo per AZ).*

4. *Un nodo worker può gestire fino a 250 pod di default. Questo numero è modificabile tramite il parametro podsPerCore - ad esempio, con 10 pod per core su un nodo con 4 core, avrai un massimo di 40 pod. Per ulteriori dettagli tecnici, consulta la [documentazione sulla gestione dei pod](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) e la [guida alle limitazioni OpenShift](https://docs.openshift.com/container-platform/4.16/).

16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *L'offerta PaaS Openshift include nativamente l'accesso alle 3 zone di disponibilità, senza che sia necessario sottoscriverle in aggiunta.*

6. *È possibile aggiungere in un secondo momento archiviazione in blocchi al cluster Openshift.*

7. *I nodi sono distribuiti in modo equilibrato tra le 3 zone di disponibilità (1 nodo per zona). Non è possibile sbilanciare un cluster assegnando un numero maggiore di nodi a una singola zona.*

### Offerta RedHat implementata nel contesto della piattaforma OpenShift Cloud Temple

La piattaforma è una Red Hat OpenShift 4 basata su [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e include [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Strategia di backup della tua piattaforma PaaS OpenShift

Il backup e il ripristino della piattaforma PaaS OpenShift è responsabilità di Cloud Temple per la parte **ETCD** nel ruolo di gestione della piattaforma. **Il backup e il ripristino per la parte deployment e dati applicativi è responsabilità del Committente**.

Cloud Temple mette a disposizione per i suoi clienti l'offerta **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), piattaforma specializzata nella gestione dei dati per ambienti Kubernetes. Progettata per rispondere alle esigenze di protezione dei dati, offre funzionalità robuste per il backup, il ripristino, la migrazione e il disaster recovery. Kasten K10 si integra in modo nativo negli ambienti Kubernetes, sia gestiti su cluster cloud che on-premise, e può adattarsi a diversi casi d'uso, tra cui la migrazione di cluster tra diverse distribuzioni Kubernetes come Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine e Red Hat OpenShift.

Uno dei casi d'uso principali di Kasten K10 è **la migrazione di cluster tra diverse piattaforme Kubernetes**. Sia che si tratti di una transizione verso un'infrastruttura più robusta o di una consolidazione degli ambienti esistenti, Kasten K10 offre strumenti semplici ed efficaci per gestire queste migrazioni:

 - **Backup e protezione dei dati**: durante la migrazione di un cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift, la prima fase è il backup dei dati delle applicazioni e dei loro stati. Kasten K10 si integra facilmente con le API Kubernetes per identificare le applicazioni, le loro dipendenze e i volumi di dati associati. Questo include il backup dei volumi persistenti (Persistent Volumes - PV), dei database, delle configurazioni e dei segreti. Kasten K10 supporta una vasta gamma di fornitori di storage (S3, Google Cloud Storage, Azure Blob Storage, ecc.), consentendo di creare snapshot delle applicazioni da migrare. Questi backup vengono quindi archiviati in modo sicuro con opzioni di crittografia e controllo degli accessi granulari, garantendo la sicurezza dei dati durante tutto il processo.

 - **Portabilità e migrazione**: la migrazione tra distribuzioni Kubernetes come Vanilla o Tanzu e soluzioni Red Hat come OpenShift o Kubernetes Engine può essere complessa a causa delle differenze architetturali e delle configurazioni specifiche di ogni piattaforma. Kasten K10 semplifica questo processo fornendo un livello di astrazione per la portabilità delle applicazioni. Durante la migrazione, Kasten K10 replica le configurazioni e i dati di un cluster sorgente verso un cluster di destinazione, tenendo conto delle specificità di ogni ambiente. Ad esempio, gli oggetti Kubernetes come ConfigMaps, Secrets, PV e CRDs (Custom Resource Definitions) possono essere migrati considerando le restrizioni proprie a ciascuna distribuzione Kubernetes, sia che si tratti di un cluster Red Hat OpenShift o Kubernetes Engine. Il processo è automatizzato, riducendo notevolmente il rischio di errori manuali. Inoltre, Kasten K10 permette una migrazione progressiva o completa, in base alle esigenze, e offre una visibilità in tempo reale sullo stato della migrazione, facilitando così la gestione e il monitoraggio della transizione.

 - **Compatibilità multi-cloud e multi-distribuzione**: Kasten K10 è progettato per funzionare in ambienti ibridi e multi-cloud, rendendolo uno strumento ideale per le organizzazioni che cercano di migrare applicazioni da cluster Tanzu o Vanilla verso ambienti Red Hat nel cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o su infrastrutture on-premise. Questo garantisce una flessibilità m

massima e permette alle squadre DevOps di scegliere l'ambiente migliore in base alle esigenze aziendali o alle strategie di modernizzazione dell'infrastruttura.

 - **Gestione semplificata e automazione**: Kasten K10 offre un'interfaccia utente intuitiva che permette agli amministratori di gestire facilmente le operazioni di migrazione e backup senza richiedere una conoscenza approfondita di ogni piattaforma Kubernetes. La soluzione è inoltre dotata di funzionalità di automazione che consentono di definire politiche di migrazione e backup ricorrenti, integrandosi nei pipeline CI/CD per operazioni continue. Gli utenti possono pianificare migrazioni o ripristini in base a finestre di manutenzione, eseguire test di validazione dopo la migrazione e automatizzare i processi di failover in caso di problemi nel cluster di origine.

 - **Sicurezza e conformità**: nel contesto di migrazioni verso ambienti critici come Red Hat OpenShift o Kubernetes Engine, la sicurezza dei dati e la conformità agli standard (ISO, SOC, GDPR, ecc.) sono aspetti essenziali. Kasten K10 garantisce la crittografia dei dati in transito e a riposo, offrendo inoltre opzioni di audit e tracciabilità delle operazioni di backup e ripristino. Queste capacità sono essenziali per garantire la sicurezza dei dati migrati, sia in ambienti di produzione che di test. Kasten K10 è una soluzione indispensabile per le aziende che desiderano migrare in modo efficace e sicuro cluster Kubernetes Vanilla o VMware Tanzu verso Red Hat Kubernetes Engine o OpenShift.

 La fatturazione avviene in base al numero di worker node.

| Unità di lavoro Red Hat OpenShift 4 con Data Foundations - Soluzione di backup per Worker Node | Unità     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protezione dei dati Kubernetes e mobilità delle applicazioni              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Nota** : *Attenzione, la volumetria disco necessaria per il corretto funzionamento del backup è da prevedere nell'ambiente di ricezione del backup, generalmente in storage S3. Non è inclusa nelle unità di lavoro OpenShift o Kasten.*

**(1)** _OADP non è installato nativamente nel cluster. Solo Kasten è abilitato per la gestione delle migrazioni, dei backup e del ripristino_

## Dispositivi di bilanciamento del carico  

L'ambiente **SecNumCloud OpenShift** propone soluzioni di bilanciamento del carico adatte a diversi ambiti funzionali, garantendo una gestione sicura e ottimizzata del traffico.  

I dispositivi di bilanciamento del carico coprono quattro ambiti distinti, basandosi su diversi livelli del modello OSI:  

- **Accesso agli strumenti di amministrazione** (server API e console OpenShift)  
- **Traffico HTTP/HTTPS pubblico**  
- **Traffico HTTP/HTTPS privato**  
- **Traffico specifico che richiede una personalizzazione avanzata**

### Accesso agli strumenti di amministrazione  

L'accesso agli strumenti di amministrazione è protetto da bilanciatori di carico dedicati. Questi sono protetti da controlli di sicurezza rafforzati, tra cui un elenco bianco gestibile tramite la console **Cloud Temple**, garantendo una gestione rigorosa degli accessi.

### Traffico HTTP/HTTPS pubblico  

I **LoadBalancers pubblici**, basati su **HAProxy**, funzionano al livello **4** del modello OSI. Consentono di esporre i propri carichi di lavoro in **HTTP/HTTPS** tramite **route** e **ingress**, garantendo così una distribuzione efficiente e performante del traffico in entrata.

### Traffico HTTP/HTTPS privato (Interconnessione con i vostri servizi IaaS SNC)  

I **Load Balancer privati** semplificano la comunicazione con i vostri servizi **IaaS SNC** senza esposizione pubblica. Come i loro omologhi pubblici, garantiscono la distribuzione del traffico **HTTP/HTTPS** mantenendo un ambiente sicuro e isolato.

### Traffico specifico  

Il **traffico specifico** è gestito attraverso il LoadBalancer **MetalLB**. Supporta esigenze avanzate che richiedono una personalizzazione fine, ad esempio:  

- La connessione a un database tramite **TCP**  
- La gestione di flussi **UDP** per applicazioni in tempo reale o a bassa latenza  
- Il routing di protocolli avanzati come **QUIC** o **MQTT-SN**, offrendo così una maggiore flessibilità  

Questa soluzione permette di supportare i vostri flussi specifici, sia per le vostre interconnessioni private che per le vostre esigenze di esposizione pubblica.  

Il routing è garantito attraverso **indirizzi IP pubblici e privati dedicati**. Di default, ti vengono assegnati degli IP per l'esposizione dei tuoi servizi:  

- **4 indirizzi IP pubblici**  
- **254 indirizzi IP privati**  

Se queste risorse non sono sufficienti a supportare i tuoi carichi di lavoro, puoi effettuare una richiesta ai nostri servizi per l'assegnazione di indirizzi IP aggiuntivi, che siano **pubblici** o **privati**.  

> **Nota**: I LoadBalancer integrati non fungono da **WAF**. Una soluzione **WAF as a Service** sarà disponibile a breve.

## Diritti e autorizzazioni

Ecco le principali autorizzazioni implementate:

|       Gruppo       |         API          |                                                                                       Risorse autorizzazioni                                                                                       |
|--------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps      |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina |
|        Core        |          ("")        |                                                                                           Secrets Crea                                                                                           |
|config.kio.kasten.io|        Profili        |                                                                          Ottieni, Elenco, Monitora, Crea, Aggiorna, Patch, Elimina                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Ottieni, Elenco                                                 |
|config.kio.kasten.io|         Tutte         |                                                                                    tutte le risorse (*) Ottieni, Elenco                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                                           |
|     Networking     |       Ingressi,       |                                                                  NetworkPolicies Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                                           |
|       Route        |      (OpenShift)       |                                                                       Route Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Crea, Ottieni, Elenco, Monitora, Aggiorna, Patch, Elimina                                                            |

|   Autorizzazione    |         Ruoli,         |                                                                    RuoliBinding Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                                    |
|        RBAC        |         Ruoli,         |                                                                    RuoliBinding Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                                    |
|      Progetto       |      (OpenShift)       |                                                                                Progetti Ottenere, Eliminare, Aggiornare, Patch                                                                                 |
|     Operatori      |     Sottoscrizioni,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                        |
|    Cert-Manager    |     Certificati,      |                                                    CertificateRequests, Emittenti, ClusterEmittenti Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                        |
|      Archiviazione       |    VolumeSnapshots     |                                                                          Ottenere, Elencare, Monitorare, Creare, Aggiornare, Patch, Eliminare                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                          |
|       Locale        |        Archiviazione         |                                                        LocalVolumes, LocalVolumeDiscoveries Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                                            |
|      Metriche       |         Pod,          |                                                                                             Nodi Ottenere                                                                                              |
|      Sicurezza      |PodSecurityPolicyReviews|                                                                                               Creare                                                                                               |
|       Personalizzate       |       Risorse        |                                       Diverse risorse personalizzate correlate a Kasten K10, Keycloak, ecc. Creare, Ottenere, Elencare, Monitorare, Aggiornare, Patch, Eliminare                                        |

## Limitazioni e requisiti di sicurezza su OpenShift SecNumCloud

### Piano di controllo  

L'esecuzione dei carichi di lavoro sul **piano di controllo** è strettamente vietata. Questa restrizione garantisce la sicurezza e la stabilità della piattaforma OpenShift su **SecNumCloud**, limitando l'accesso alle risorse critiche.

### Divieto dei container con privilegi elevati (rootless)  

Per rispettare i requisiti di sicurezza del **referenziale SecNumCloud**, sono autorizzati solo i **container rootless**. Questa metodologia rafforza la sicurezza impedendo qualsiasi accesso privilegiato ai container.  

Le applicazioni che richiedono privilegi elevati dovranno essere adattate, poiché il loro deploy non sarà autorizzato. Questa limitazione si applica anche ai **Helm Charts** e agli **operatori** che utilizzano immagini non rootless, rendendo incompatibile il loro utilizzo con l'infrastruttura.

### Limitazioni sui ClusterRoles  

Nella nostra offerta OpenShift, la gestione dei diritti di accesso a livello di cluster è rigorosamente regolamentata per garantire **sicurezza e conformità** con SecNumCloud.  

Questo implica delle **limitazioni sui ClusterRoles**, che limitano i privilegi a livello globale. Sebbene queste limitazioni possano richiedere adattamenti tecnici, sono essenziali per rafforzare la resilienza e la stabilità dell'ambiente.  

Il nostro team di supporto è disponibile per aiutarti ad adattare le tue configurazioni e consigliarti sulle alternative possibili.

### Limitazioni sui Security Context Constraints (SCC)  

I **Security Context Constraints (SCC)** sono imposti e non possono essere modificati dagli utenti. Di conseguenza, i parametri di esecuzione dei contenitori (privilegi di accesso, capacità Linux, ecc.) sono predefiniti e non personalizzabili.  

Questa restrizione mira a impedire qualsiasi accesso non autorizzato alle risorse critiche del cluster. Le applicazioni che richiedono contesti di sicurezza specifici dovranno essere adattate per rispettare i SCC in vigore.  

Dal punto di vista operativo, ciò può richiedere modifiche architetturali e adattamenti nei processi di distribuzione, in particolare per i **Helm Charts** e gli **operatori** che non rispettano queste restrizioni.

### Limitazioni sulle Definizioni delle Risorse Personalizzate (CRDs)  

Per garantire la **conformità SecNumCloud**, l'utilizzo delle **Definizioni delle Risorse Personalizzate (CRDs)** e dei **controller personalizzati** è limitato.  

Questa misura, legata ai diritti sul cluster, impedisce il deployment di risorse non autorizzate che potrebbero influenzare la stabilità e la sicurezza dell'infrastruttura. Si applica anche agli **operatori** e alle **Helm Charts**, con limitazioni sui diritti **RBAC**.  

Le **CRDs non certificate** possono essere rifiutate per garantire l'integrità del cluster. Solo le **CRDs provenienti da operatori o Helm Charts certificati** sono autorizzate dopo la validazione dei nostri servizi.  

Il nostro team di supporto può guidarti in questa procedura e consigliarti sulle buone pratiche da adottare.

### Rimozione del supporto per gli indirizzi IP dinamici per i runner  

I **runner OpenShift SecNumCloud** devono essere configurati con **indirizzi IP fissi**.  

Questo requisito garantisce l'accesso sicuro alle **API OpenShift**, alle interfacce di amministrazione e agli strumenti di gestione degli accessi della console **Cloud Temple**.  

Gli **indirizzi IP dinamici non sono supportati**, richiedendo una configurazione adeguata per garantire la connettività e la sicurezza dei componenti.

## Informazioni utili

• Se i componenti hardware a livello di piattaforma diventano obsoleti e una migrazione verso nuove risorse di calcolo è necessaria, Cloud Temple si occupa di tutte le migrazioni hardware senza costi aggiuntivi e senza interruzioni del servizio.

• Per testare OpenShift, Cloud Temple non fornisce un ambiente dedicato, ma è possibile utilizzare [le piattaforme di test RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• Per l'automazione della vostra infrastruttura, preferite il provider ufficiale Terraform per OpenShift.