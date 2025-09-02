---
Titolo: Concezioni
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è stata progettata per soddisfare esigenze critiche di continuità e ripresa, con un forte accento su settori ad alta richiesta come l'industria, il banking e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce la massima disponibilità e prestazioni ottimali per le tue applicazioni critiche.

## Un'piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per lo stoccaggio a blocco.
- Rete: __JUNIPER__.
- Virtualizzazione: __VMware__, offrendo una base affidabile e testata per la gestione dei tuoi ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e lo stoccaggio dei backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali editori software.

## Un'infrastruttura dedicata e automatizzata

Sebbene l'offerta IaaS di Cloud Temple sia completamente automatizzata tramite API e provider Terraform, propone un'infrastruttura unica:

- **Risorse dedicate**: Le calcolo delle macchine, i volumi di stoccaggio e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Prevedibilità massima**: Controlla i tassi di virtualizzazione, la pressione sui IOPS dello storage e godere di una fatturazione chiara, a base mensile.

La piattaforma è certificata SecNumCloud dall'ANSSI ([https://www.ssi.gouv.fr](https://www.ssi.gouv.fr)), garantendo un alto livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e a richiesta.
- Stoccaggio a richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Sauvegli cross con riserva configurabile.
- Replicazione asincrona per lo stoccaggio o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) oppure in modalità Infrastructure as Code tramite API e provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Affidabilità digitale | Alloggio dei dati in Francia e conformità RGPD.                                                                                          |
| Sicurezza            | Piattaforma altamente sicura, qualificata SecNumCloud, HDS (Hébergement des Donne de Santé), ISO 27001 e ISAE 3402 tipo II.          |  
| Alta disponibilità    | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, include le fasce di manutenzione.                           |
| Resilienza          | Implementazione di piani di continuità aziendale personalizzati secondo necessità.                                                               |
| Automazione          | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                        |
| A richiesta         | Risorse disponibili su richiesta.                                                                                                          |

## Regioni e zone di disponibilità

Il prodotto IaaS VMware viene distribuito in una zona di disponibilità.
Una [zona di disponibilità](https://.../additional_content/concepts_az.md) fa parte di una [regione](https://.../additional_content/concepts_regional.md).

Questo tipo di deployment consente di scegliere la localizzazione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione della carico, massimizza la redundanza e semplifica la pianificazione del ripristino in caso di incidente (DRP).

---

## Calcolo

Le blade fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono interamente gestite da Cloud Temple (firmware, versione del sistema operativo, ecc.) tramite la console Cloud Temple.

Sono disponibili diverse categorie di blade di calcolo nel catalogo per supportare i vostri carichi di lavoro (Virtualizzazione, Containerizzazione, ecc.). Ogni categoria presenta caratteristiche e prestazioni diverse per soddisfare al meglio i vostri bisogni. Il catalogo delle blade di calcolo si evolve regolarmente.

Nel contesto dell'uso con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da blade di calcolo dello stesso tipo (non è possibile mescolare blade di tipi diversi in un medesimo cluster).

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          | SKU per l'offerta VMware         |
|-------------------------|---------------|-----------------------------------------|--------------------------|--------------------|-----------------|-------------------------------|
| Blade ECO v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Blade STANDARD v3      | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Blade ADVANCE v3       | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Blade PERFORMANCE 1 v3 | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Blade PERFORMANCE 2 v3 | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Blade PERFORMANCE 3 v3 | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Blade PERFORMANCE 4 v3 | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

**Osservazioni**:

- __(1)__ La quantità di memoria consegnata è quella fisicamente disponibile sulle blade. Non è possibile modificare la quantità di memoria fisica su una blade.

- __(2)__ La frequenza base minima / frequenza turbo, espressa in GHz. Di default, i processori sono configurati per una performance massima al livello del BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e all'accesso storage a blocchi, la piattaforma CISCO essendo convergente.

- __(4)__ L'offerta di GPU disponibile si evolve costantemente. Al 1° Maggio 2024, l'offerta è basata sulle GPU NVIDIA LOVELACE L40S. Di default, la blade PERF4 viene consegnata con 2 schede L40S da 48 GB di RAM. Per informazioni più precise, contattate il supporto.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, compresa la pianificazione di manutenzione. L'idoneità in caso di violazione del SLA è soggetta alla creazione di un ticket incidente. È anche necessario possedere almeno due ospiti per cluster e attivare la funzionalità __High Availability__ (HA). Questa funzionalità consente all'architettura di riavviare automaticamente le vostre macchine virtuali su l'altro hyperviseur.

In caso in cui una zona di disponibilità contiene solo un hyperviseur, il riavvio automatico non è possibile.

## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata su tecnologia VPLS, offrendo una segmentazione flessibile e performante per soddisfare le esigenze dei clienti in termini di connettività e isolamento di rete.

### VLANs di livello 2

I VLAN disponibili nell'offerta IaaS sono di tipo **livello 2**, fornendo un'isolamento del network completo e una configurazione adattabile in base alle esigenze.

#### Principali concetti

- **Condivisione tra cluster e zone di disponibilità (AZ)**:
  - Le VLAN può essere condiviso tra diverse AZ e tra diversi cluster appartenenti allo stesso gestore, permettendo una maggiore flessibilità nella gestione della rete.
- **Propagazione inter-tenant**:
  - I VLAN possono essere propagati tra più tenanti appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

### Performance del rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:

- __Latenza intra-AZ__ : inferiore a __3 ms__.
- __Latenza inter-AZ__ : inferiore a __5 ms__.

---

### Punti chiave

1. **Flessibilità**: Le configurazione dei VLAN può essere adattata per ambienti multi-cluster e multi-tenant.
2. **Alta performance**: Una bassa latenza garantisce una comunicazione rapida ed efficiente tra le aree di disponibilità.
3. **Isolamento e sicurezza**: I VLAN di livello 2 offrono una segmentazione del rete molto stretta per proteggere i dati e i flussi.

---

## Storage a Blocchi

Cloud Temple offre diverse classi di storage basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ garantisce il livello di performance necessario per gli ambienti dei nostri clienti grazie alla grande quantità di memoria cache integrata nei controller e alla possibilità di distribuire tutti gli IOPS di un server su più SAN.

Viene inoltre utilizzata per consentire la replica delle LUN di storage in modalità blocco tra le zone di disponibilità o facilitare gli interventi sugli array di storage.

Lo storage è principalmente di tipo FLASH NVME dedicato ai carichi di lavoro professionali. I dischi sono utilizzati dagli array di storage in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La classe di storage __'Mass Storage'__ propone dischi meccanici per le esigenze di archiviazione in un contesto di efficienza economica. Sono disponibili diversi livelli di performance:

| Riferimento                         | Unità | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiviazione      | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__:*

- *La performance effettiva per una classe di storage è legata al volume effettivamente ordinato, secondo la nozione "IOPS/TB", intesa come "limite di IOPS per Tera allocato",*

> *Così, un volume di 0,5TB nella classe di performance 'Standard' avrà una limitazione di IOPS limitata a 750IOPS,*
> *Allo stesso modo, un volume di 10TB nella classe di performance 'Ultra' avrà una limitazione di IOPS fino a 150000 IOPS,*

- *La limitazione di IOPS è applicata al volume, quindi alla nozione di Datastore per un ambiente VMware,*
- *La disponibilità dello storage è del 99,99% misurata mensilmente, periodo di manutenzione incluso,*
- *Non ci sono restrizioni o quote sulla lettura o scrittura,*
- *Non c'è fatturazione agli IOPS,*
- *Non c'è impegno di performance sulla classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500GiB,*
- *Quando si utilizza un meccanismo di replica dello storage, le performance devono essere identiche su entrambe le zone di disponibilità,*
- *Nessun meccanismo di ottimizzazione "intelligente" di tipo compressione o deduplicazione è implementato: quando si riservano 10TiB di storage, si hanno fisicamente 10TiB utili di storage implementati sulle macchine IBM.*
- *Le LUN di storage sono dedicate all'ambiente cliente.*

### Utilizzo nel contesto di offerta di calcolo VMware

Nel contesto dell'utilizzo dello storage in formato blocco come datastore nell'offerta di calcolo VMware di Cloud Temple, **deve considerare diverse considerazioni importanti**:

1. **File di swap (.VSWP) durante il avvio delle macchine virtuali**: Quando una macchina virtuale si avvia, crea un file .VSWP della dimensione della sua memoria sul disco. Pertanto, per poter avviare le vostre macchine virtuali, è fondamentale disporre nel vostro datastore uno spazio libero equivalente alla somma delle dimensioni della memoria delle vostre macchine virtuali. Ad esempio, se il vostro datastore offre 1 TiB di stoccaggio blocco e volete avviare 10 macchine virtuali di 64 GiB ciascuna, saranno necessari 640 GiB di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. **Spazio libero per le snapshot di backup**: Il servizio di backup utilizza instantanei (snapshot). Pertanto, è essenziale avere sempre abbastanza spazio libero per permettere la creazione di un instantaneo durante il backup di una macchina virtuale. La dimensione dell'instantaneo dipende dalla quantità di scrittura della macchina virtuale e dal tempo necessario per eseguire il backup. In generale, è consigliabile mantenere almeno il 10% di spazio libero per questa operazione.

3. **Gestione dei dischi dinamici**: Sii cauto nell'utilizzo dei dischi dinamici. Se non ne gestite efficacemente la crescita, un manca d'spazio fisico può portare al blocco (freezing) della macchina virtuale nel migliore dei casi, o a una perdita di dati con corruzione nella peggiore delle ipotesi. È fondamentale monitorare attentamente lo spazio disponibile sui vostri datastores quando si utilizza questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle vostre macchine virtuali e la fiabilità dei backup. Assicuratevi sempre di avere lo spazio necessario per i file di swap, le snapshot e la crescita dei dischi dinamici.

## Backup Storage Allocation

Backup storage for your virtual machines is automatically provisioned by the platform, within the allocated quota.

| Reference                | Unité | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - BACKUP    | 1 TiB | csp:(region):iaas:storage:block:backup:v1 |

### Replicazione dello stoccaggio in modalità blocco

#### Principes

Pour facilitater la mise en œuvre de vos plans de reprise après sinistre, lorsque l'application d'activité continue n'est pas possible avec des mécanismes applicatifs et que la réplication des machines virtuelles n'est pas adaptée, Cloud Temple propose des **meccanismi di replica dello stoccaggio in modalità blocco tra le punti di disponibilità di una regione**.

Questi meccanismi di replica sono applicati ai LUNs di stoccaggio dei tuoi ambienti, in aggiunta alle procedure di backup. Il choice dell'utilizzo di un meccanismo di replica su un ambiente **dipende da numerosi fattori**, come la sua criticità, la perdita di dati tollerata o la performance mirata** per l'applicazione.

Cloud Temple offre due tipi di meccanismi implementati in una configurazione attiva/passiva:

- La replica **asincrona** (o 'Global Mirror'): *La funzione 'Global Mirror' fornisce un processo di copia asincrona. Quando un host scrive su il volume primario, la conferma dell'avvio delle operazioni di lettura/scrittura viene ricevuta prima che l'operazione di scrittura venga completata sul volume secondario. Se viene avviata una procedura di passaggio di controllo, l'applicazione deve recuperare e applicare tutte le modifiche non confermate sul volume secondario. Se le operazioni di lettura/scrittura su il volume primario vengono temporaneamente sospesi per un breve periodo, il volume secondario può diventare una corrispondenza esatta del volume primario. Questa funzione è simile a un processo di backup continuo in cui le ultime modifiche sono sempre mancanti.*

- La replica **sincrona** (o 'Metro Mirror'): *La funzione 'Metro Mirror' è un tipo di copia a distanza che crea una copia sincrona dei dati di un volume primario verso un volume secondario. Con le copie sincronizzate, gli host applicativi scrivono su il volume primario, ma non ricevono alcuna conferma che l'operazione di scrittura è terminata fino a quando i dati non sono stati scritti sul volume secondario. Questo garantisce che entrambi i volumi contengano dati identici quando viene completata la operazione di copia. Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.*

Si definisce quindi un sito chiamato "attivo" o "primario" e uno "passivo" o "standby". Il piano di reprise dopo sinistro viene attivato in caso di incidente o durante una richiesta di test del PRA. Il sito passivo prende quindi il relais del sito attivo.

#### Asynchronous Replication

When your workloads require short downtime and using application-level or virtual machine replication mechanisms is not feasible or suitable, it's possible to replicate a SAN storage LUN between two availability zones within the same region.

This offering provides a __RPO of 15 minutes__ and an __RTO below 4 hours__. It allows for a much faster recovery compared to traditional backup restoration processes.

In a storage volume replication setup (__Global Mirror__), the SAN virtualization controllers in both availability zones collaborate to perform write operations on both sites simultaneously. The master site does not wait for the write confirmation from the remote site's SAN controller.

The steps of a write operation are as follows:

1. A hypervisor intends to perform __a write operation on a Global-Mirror volume__: It sends the request to the local SAN controller in its availability zone,
2. The local SAN controller requests the remote site's SAN controller to perform the write operation,
3. The local SAN controller does not wait for the remote site's confirmation and performs the write locally,
4. It gives __write acknowledgment__ to the hypervisor that initiated the request,
5. __Hypervisors on the distant site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster at the primary data center, the maximum amount of lost data corresponds to the maximum of 15 minutes of writing. |
| RTO < 4H  | In case of a disaster at the primary data center, recovery is guaranteed within 4 hours, depending on the complexity of the environment.          |

Upon activation of the PRA (Planned Recovery Action), Cloud Temple's team replicates the 'Global Mirror' LUN to the distant hypervisors for them to access the data. This setup requires reserving computing and RAM resources on the standby site for failover in case of a disaster.

Using this technology also necessitates doubling the storage space: it's essential to have exactly the same amount of space on the distant site as on the local site.

This replication method can impact application performance by 10%. Only storage classes with 500 Iops/To, 1500 Iops/To, and 3000 Iops/TO are compatible.

| Reference                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__:

- Since the offering is asynchronous, there's a possibility during a disaster that some disk operations are not written to the remote site. This could lead to data inconsistency, mitigated through risk assessment of the recovery plan.*
- Block storage replication is performed transparently for virtual machines and applications,
- Consequently, it's crucial to favor application-level or potentially VM replication scenarios,
- Computing and memory resources on the recovery site can be reduced to optimize costs if a degraded state is acceptable during the recovery action.*

## Virtualizzazione VMware con Cloud Temple SecNumCloud

L'offerta di virtualizzazione VMware Cloud Temple qualificata SecNumCloud si basa sulla tecnologia __VMware vSphere__.

La piattaforma viene gestita da Cloud Temple in modo automatico (manutenzione della sicurezza, manutenzione operativa, ecc.) tramite l'interfaccia grafica dell'interfaccia di console Shiva o tramite le API associate.

*NOTA:* A causa di ragioni di sicurezza relative alla qualificazione SecNumCloud, non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware (ad esempio, nessun accesso diretto al vCenter). Infatti, la qualificazione SecNumCloud impone una totale segregazione tra le interfacce di gestione degli asset tecnici e l'interfaccia del committente (la console Shiva).

- I prodotti implementati sono VMware ESXi, VMware vCenter e VMware Replication.
- *Il network dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestito fisicamente da una tecnologia Juniper e dal protocollo VPLS.*
- *Lo storage non utilizza la tecnologia VMWare vSan, ma solo SANs IBM in fibra canale 32G.*
- *Non vengono implementate alcuna forma di ottimizzazione nascosta (comprimere, rimuovere duplicato, ecc.).*

### Definizione di un cluster di lame calcolatrice ('Cpool')

Il **Cpool** è un insieme di hyperviseur VMware ESXi, anche noto come *cluster ESX*.

I server presenti in un **Cpool** appartengono tutti allo stesso tenant e alla stessa zone di disponibilità (AZ). È necessario che tutti abbiano la stessa classe: non è possibile mescolare modelli di lame calcolatrice diversi all'interno dello stesso cluster.

Tutte le lame calcolatrici, fornite con il massimo utilizzo della memoria fisica, sono soggette a una limitazione di utilizzo della RAM applicata al livello del cluster, in modo da corrispondere alla RAM effettivamente fatturata.

Per default, ogni lama dispone di 128 GB di memoria attiva all'interno del **Cpool**.

Un **Cpool** può contenere al massimo 32 hyperviseurs. Superando questa soglia, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra i **Cpool**.

### Allocation di Memoria per un 'Cpool'

L'allocazione della RAM è configurabile a livello cluster. È possibile ridurre o aumentare la quantità di memoria disponibile per adattarla alle esigenze del cluster.

**Attenzione: non superare una media di 85% di utilizzo della memoria per lame di calcolo**. Infatti, la tecnologia VMware utilizza un metodo di ottimizzazione basato sulla compressione che può influire significativamente sulle prestazioni delle applicazioni e complicare il diagnosticato. Inoltre, una pressione di memoria troppo forte sulle lame di calcolo costringerà l'hyperviseur a scaricare una parte della sua memoria su disco per soddisfare i bisogni delle macchine virtuali.

Questo caso, noto come __'Ballooning'__, influisce fortemente sulle prestazioni di tutte le macchine virtuali situate nel datastore interessato. Il diagnosticato diventa complesso in questo contesto, poiché la metrologia rileverà impatti al livello CPU piuttosto che alla memoria o allo storage.

Ricorda anche che l'hyperviseur, all'avvio di una macchina virtuale, crea automaticamente un file di swap memoria (.vswap) sul disco, della dimensione della memoria della lame di calcolo in questione. Questo aspetto deve essere considerato nel dimensionamento dello storage.

Ogni lame di calcolo è fornita con 128GB di memoria attivata logicamente al livello del __'Cpool__`, ma dispone fisicamente di tutta la memoria disponibile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, l'allocazione della RAM per l'attivazione del _*'Cpool'* sarà di 3 x 128GB = 384GB di memoria. Puoi estendere questo fino a 3 x 384GB = 1152GB di memoria.

    Minimo della memoria di un 'Cpool' = numero di host X 128GB di memoria
    Massimo della memoria di un 'Cpool' = numero di host X la quantità di memoria fisica della lame di calcolo

### Catalogo di Template Cloud Temple

Cloud Temple offre un catalogo di `Template` regolarmente aggiornato e ampliato dalle nostre squadre.
Comprende a oggi diverse decine di `Template` e immagini da montare sulle vostre macchine virtuali.

### Aggiornamento dei Hypervisor

Cloud Temple fornisce regolarmente build per i virtualizzatori per garantire l'applicazione di correttivi di sicurezza. Tuttavia, l'aggiornamento dei virtualizzatori rimane sotto la tua responsabilità, poiché non abbiamo visibilità sulle vostre esigenze aziendali.

Il processo di aggiornamento è completamente automatizzato. Per garantire una continuità del servizio, almeno due virtualizzatori sono necessari per cluster durante l'aggiornamento. Assicuratevi di avere le autorizzazioni necessarie per eseguire queste azioni.

### Gestione dell'affinità delle macchine virtuali

Le **regolamenti di affinità e anti-affinità** consentono di controllare l'ubicazione delle macchine virtuali sui vostri virtualizzatori.
Possono essere utilizzati per gestire l'utilizzo delle risorse del vostro **pool Cpool**.
Ad esempio, possono aiutare a bilanciare la carico di lavoro tra i server o a isolare le applicazioni ad alta richiesta in termini di risorse.
In un pool Cpool VMware, queste regole vengono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare le macchine virtuali da un host a un altro senza interruzione del servizio.

Potete configurare attraverso la gestione dei regolamenti:

- **Regolamenti di Affinità**: Queste regole garantiscono che alcune macchine virtuali vengano eseguite su lo stesso host fisico.
Vengono utilizzate per migliorare le prestazioni mantenendo sullo stesso server le macchine virtuali che comunicano frequentemente tra loro, riducendo così la latenza del network. Le regole di affinità sono utili in scenari in cui la performance è critica, come nelle basi dati o nelle applicazioni che richiedono una comunicazione rapida tra i server.

- **Regolamenti di Anti-affinità**: A contrario, queste regole garantiscono che alcune macchine virtuali non vengano eseguite su lo stesso host fisico.
Sono importanti per la disponibilità e la resilienza, ad esempio, per evitare che le macchine critiche siano tutte colpite in caso di guasto di un singolo server. Le regole anti-affinità sono cruciali per le applicazioni che richiedono una alta disponibilità, come negli ambienti di produzione dove la tolleranza alle interruzioni è una priorità. Ad esempio, non vorreste che i due Attivi Directory fossero su lo stesso virtualizzatore.

Creando una regola, definite il tipo della regola (affinità o anti-affinità), il nome della regola, lo stato di attivazione ("Stato") e le macchine coinvolte nel cluster dei virtualizzatori.

*Nota: i regolamenti di affinità/anti-affinità proposti nella console sono riguardanti le macchine virtuali tra loro (non esistono regole tra virtualizzatori e macchine virtuali).*

### Asynchronous Replication of Virtual Machines in VMware Environment

Asynchronous replication of your virtual machines involves pushing write operations from the source hypervisor to the standby site at regular intervals.

Following an initial hot copy of the entire active storage on the standby site, only writes are pushed to the standby machine at regular intervals (ranging from every hour to every 24 hours, depending on the volume of writes).

This virtual machine replication leverages the instant cloning mechanism of the hypervisor. Consequently, this solution faces similar limitations, particularly regarding sensitivity to the volume of writes by the virtual machine, as the process of instant cloning is a recursive closure mechanism for the instant clone.

An example of a machine that typically does not support virtual machine replication is an FTP server receiving real-time video feeds from surveillance cameras. Such a machine spends most of its time writing and would be unable to complete an instant clone without pausing the operating system for a significant period (several tens of minutes). If the hypervisor cannot close the instant clone, it will do so automatically, potentially corrupting the virtual machine unless intervention is possible.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 1H to 24H    | In case of a disaster at the primary data center, the maximum amount of lost data is that of the last write pushed to the standby site. |
| RTO < 15mn      | Operation to restart the virtual machine stopped on the distant site                                                                                |

In case of need or in case of failure on a machine at the primary site, the mirrored machine on the standby site is activated. Recovery requires having reserved compute and memory resources on the standby site as well as identical storage capacity on the passive site as on the active site.

| Reference                         | Unité | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The minimum RPO must be defined based on the virtual machine's change rate.*

## Virtual Machine Backup

Cloud Temple offers an **integrated, non-detachable cross-platform backup solution** (it's mandatory for secnumcloud French qualification).

Backups are stored in a high availability zone and on a physically separate datacenter from the one hosting the virtual machine.

This setup safeguards against major failures at the production datacenter and allows restoration onto a secondary datacenter (e.g., due to fire).

This solution encompasses:

- Hot, site-level backup of all disks,
- Instantaneous presentation and startup of a virtual machine from the storage infrastructure and hot reload on production SANs,
- Partial file restoration from backups,
- Limited retention based solely on mass storage allocation.

This backup infrastructure is built upon IBM Spectrum Protect Plus, an agentless architecture solution that's user-friendly and facilitates automated backup processes along with space optimization on mass storage.

Backup speeds and restore times are dependent on the rate of data changes in environments. The backup policy can be configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__

* Some virtual machines may not be compatible with this technology, which relies on hypervisor snapshot mechanisms. These typically involve VMs with constant disk writes. The hypervisor cannot close the instantaneous snapshot, necessitating VM freeze to complete the closure operation—a process that can take several hours and is unstoppable.

In such cases, the solution involves excluding the target persistent disk and backing up data through an alternative method.*

| Reference                                               | Unité | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service     | 1 VM  | csp:(region):iaas:backup:vm:v1 |

Per creare una nuova politica di backup, è necessario effettuare una richiesta al supporto. Il supporto è accessibile tramite l'icona della palla a vela in alto a destra della finestra.

La creazione di una nuova politica di backup viene realizzata attraverso una **richiesta di servizio** che indica:

    Il nome dell'organizzazione
    Il nome di un contatto con il suo indirizzo email e il numero di telefono per finalizzare la configurazione
    Il nome del proprietario
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ecc.)

## Advanced Data Protection (HSM/KMS)

Cloud Temple offers an advanced data encryption solution for virtual machines based on hardware security modules (HSM) and a key management service (KMS). This feature strengthens the protection of sensitive data through centralized and secure key management, directly integrated into the SecNumCloud environment.

### Architettura tecnica

La soluzione si basa su un'infrastruttura di sicurezza robusta composta da:

- **HSM (Hardware Security Module)**: Moduli **Thales Luna S790** certificati **FIPS 140-3 livello 3**
- **KMS (Key Management System)**: **Thales CipherTrust Manager** per la gestione centralizzata delle chiavi
- **Integrazione VMware**: Comunicazione tramite il protocollo **KMIP (Key Management Interoperability Protocol)**

#### Deployment high availability

The HSM infrastructure is deployed across **three availability zones** of the FR1 region:

- PAR7S
- TH3S  
- AZ07

This distribution ensures a **high availability** and maximum resilience for the encryption service.

### Funzionamento e gerarchia delle chiavi

Il sistema utilizza una **gerarchia di chiavi crittografiche** per garantire la sicurezza dei dati:

| Livella | Tipo di chiave | Descrizione | Localizzazione |
|---------|--------------|-------------|--------------|
| 1       | __Radice di Fiducia (RoT)__ | Chiave principale da KMS | HSM Luna |
| 2       | __Chiave di Dominio (DK)__ | Chiave di dominio del cliente (isolamento multi-tenant) | HSM Luna |
| 3       | __Chiave di Crittografia delle chiavi (KEK)__ | Chiave di crittografia per VM | CipherTrust Manager |
| 4       | __Chiave di Crittografia dei dati (DEK)__ | Chiave di crittografia dei dati per VM | VMware ESXi |

#### Processo di crittografia

1. **Generazione**: VMware ESXi genera una chiave di crittografia (DEK) unica per ogni macchina virtuale
2. **Protezione**: La DEK viene crittografata utilizzando la chiave di crittografia a largo termine (KEK) memorizzata nel CipherTrust Manager
3. **Sicurezza**: La KEK è protetta da una struttura di chiavi HSM (Hardware Security Module)
4. **Archiviazione**: La DEK crittografata viene archiviata insieme ai file di configurazione della VM

## Sicurezza e conformità

La sicurezza e la conformità sono aspetti fondamentali per qualsiasi sistema IT, soprattutto nei cloud computing. La protezione dei dati sensibili, l'autenticazione degli utenti, il controllo degli accessi e la conformità alle normative locali ed internazionali sono elementi cruciali per garantire la fiducia dei clienti e mantenere la reputazione dell'organizzazione.

### Strategie di sicurezza

1. **Autenticazione a più fattori (MFA)**: Implementare MFA aggiunge un ulteriore livello di sicurezza, rendendo più difficile l'accesso non autorizzato ai sistemi.
2. **Crittografia**: Utilizzare algoritmi di crittografia robusti per proteggere i dati sia in transito che a riposo.
3. **Gestione degli accessi basata su ruoli (RBAC)**: Concentrarsi sulle autorizzazioni e limitare le potenziali azioni dannose, assegnando privilegi in base ai ruoli specifici dell'utente.
4. **Monitoraggio continuo**: Implementare sistemi di monitoraggio per rilevare attività sospette o anomale che potrebbero indicare un tentativo di accesso non autorizzato.
5. **Aggiornamenti regolari e patching**: Mantenere aggiornati i sistemi operativi, applicazioni e componenti hardware per mitigare le vulnerabilità note.
6. **Pianificazione della recupero in caso di disastro (DRP)**: Sviluppare piani dettagliati per garantire la continuità aziendale in caso di incidenti o disastri.

### Conformità normativa

1. **GDPR (Regolamento generale sulla protezione dei dati)**: Assicurarsi che i processi di gestione dei dati rispettino le richieste del GDPR, in particolare per quanto riguarda il consenso, i diritti degli individui e la trasparenza.
2. **HIPAA (Health Insurance Portability and Accountability Act)**: Per applicazioni che gestiscono dati sanitari negli Stati Uniti, è essenziale rispettare le normative HIPAA per proteggere la privacy dei pazienti.
3. **PCI DSS (Payment Card Industry Data Security Standard)**: Se il sistema gestisce informazioni di pagamento, deve conformarsi alle linee guida PCI DSS per garantire una maggiore sicurezza delle transazioni finanziarie.
4. **ISO 27001**: Implementare un sistema di gestione della qualità informatica (IQMS) certificato ISO 27001 per dimostrare il proprio impegno costante nella protezione dei dati e nelle misure di sicurezza.
5. **Conformità regionale**: Adattare le pratiche di sicurezza alle normative specifiche del paese o regione in cui opera l'organizzazione, come GDPR per l'Europa o CCPA (California Consumer Privacy Act) per il mercato californiano.

### Audit e valutazione

Conduire audit di sicurezza regolari e valutazioni per identificare vulnerabilità e migliorare le misure di sicurezza. Questi processi possono includere:
- Valutazioni di penetrazione (penetration testing)
- Revisioni di codice
- Analisi del rischio
- Audit di conformità

### Formazione e consapevolezza

Investire nella formazione continua per i dipendenti sulla sicurezza informatica, inclusi:
- Ciclo di vita del prodotto (PLM)
- Gestione delle vulnerabilità
- Risposta agli incidenti
- Consapevolezza dei rischi

In conclusione, la sicurezza e la conformità sono aspetti critici per qualsiasi sistema IT, specialmente nei cloud computing. Implementare strategie robuste di sicurezza, mantenere la conformità normativa e investire nella formazione continuamente dei dipendenti sono fondamentali per proteggere i dati sensibili e costruire fiducia con i clienti.

#### Certificazioni

- **FIPS 140-3 livello 3**: Certificazione del più alto livello per i HSM
- **Common Criteria EAL4+**: Valutazione di sicurezza avanzata
- **SecNumCloud**: Qualificazione ANSSI integrata nell'ambiente Cloud Temple

#### Multi-tenant isolation

- **Cryptographic separation**: Each client has an isolated KMS domain
- **Dedicated keys**: A specific Domain Key for each client
- **Audit and traceability**: Comprehensive logging of actions per tenant

### Attivazione e utilizzo

Il crittografia delle macchine virtuali si attiva **con un solo clic** dalla Console Shiva (vedi [Console Shiva](../console/console.md)).

Per una procedura dettagliata con immagini di schermo, consulta il [tutoriel di crittografia delle macchine virtuali](tutorials/vm_encryption.md).

#### Prerequisiti

- **Fornitore di chiave attivato**: Un fornitore HSM/KMS deve essere abilitato sulla vStack
- **Macchina virtuale spenta**: La VM deve essere disattivata prima del cifratura
- **Nessuna replica in corso**: La VM non deve essere replicata (incompatibile con Global Mirror)
- **Nessun snapshot**: Non devono esserci snapshot al momento
- **Sottoscrizione al servizio**: Il servizio di protezione avanzata deve essere sottoscritto

*__Nota__: Per ulteriori dettagli sui prerequisiti e la procedura completa, si prega di consultare il [guida di cifratura delle VM](tutorials/vm_encryption.md).*

## Limitazioni e considerazioni

Questo paragrafo descrive le limitazioni e le considerazioni relative al progetto di cloud computing, ai sistemi IT e all'ingegneria del software. Le limitazioni potrebbero inclure aspetti tecnici come la scalabilità, la sicurezza, l'efficienza energetica o i vincoli normativi. Le considerazioni potrebbero riguardare fattori esterni come le tendenze del mercato, le bisogni dei clienti, le innovazioni tecnologiche o le sfide di integrazione con altri sistemi.

#### Compatibilità

- **Global Mirror**: Lele macchine virtuali crittografate non sono **compatibili** con la replicazione Global Mirror
- **Ricostruzione**: Le backup delle VM crittografati mantengono la loro protezione crittografica
- **Esporta**: L'esportazione di VM crittografate richiede procedure specifiche

#### Performance

- **Minimal Impact**: Hardware encryption ensures optimal performance
- **Transparency**: No effect on application functionality

### Cas d'uso raccomandati

Questa soluzione di protezione avanzata è particolarmente adatta per:

- **Dati sensibili**: Informazioni personali, dati finanziari, segreti industriali
- **Conformità normativa**: Esigenze RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- **Settori critici**: Banca, assicurazione, sanità, difesa
- **Sovranità digitale**: Protezione contro gli accessi non autorizzati, anche in caso di compromissione

| Riferimento | Unità | SKU |
|---------------|-------|-----|
| PROTEZIONE AVANZATA - Crittografia VM tramite HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*NOTA:*

- *Il servizio richiede una sottoscrizione specifica e non è incluso nell'offerta IaaS standard*
- *La gestione delle chiavi rimane completamente sotto controllo di Cloud Temple all'interno dell'ambiente SecNumCloud*
- *Le chiavi di crittografia non lasciano mai l'infrastruttura francese e sovrana*
