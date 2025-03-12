---
title: Concepts
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripristino dell'attività, con un'attenzione particolare ai settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e una performance ottimale per i carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: **CISCO UCS**.
- Archiviazione: **IBM Spectrum Virtualize**, **IBM FlashSystem** per lo storage a blocchi.
- Rete: **JUNIPER**.
- Virtualizzazione: **VMware**, offrendo una base affidabile e comprovata per gestire i tuoi ambienti cloud.
- Backup: **IBM Spectrum Protect Plus**, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello **VersaStack**, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali software vendor.

## Un'infrastruttura dedicata e automatizzata

Pur essendo completamente automatizzata grazie alle API e a un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica:

- **Risorse dedicate**: Le lame di calcolo, i volumi di archiviazione e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Massima prevedibilità**: Controlli i tassi di virtualizzazione, la pressione in IOPS sullo storage e beneficerai di una fatturazione chiara, a consumo mensile.

La piattaforma è qualificata **SecNumCloud** dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (disponibili diverse classi).
- Risorse di rete (Internet, reti private).
- Backup incrociati con ritenzione configurabile.
- Replicazione asincrona per lo storage o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                         |   
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale     | Hosting dei dati in Francia e conformità GDPR.                                                                                                       |   
| Sicurezza            | Piattaforma altamente sicura, qualificata **SecNumCloud**, **HDS** (Hosting dei Dati Sanitari), **ISO 27001** e **ISAE 3402 tipo II**.                |  
| Alta disponibilità   | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, comprensive delle finestre di manutenzione.                                |   
| Resilienza           | Implementazione di piani di continuità o di ripristino dell'attività secondo le necessità.                                                           |
| Automazione          | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| On demand            | Risorse disponibili su richiesta.                                                                                                                   |

## Regioni e zone di disponibilità

Il prodotto IaaS VMware è distribuito in una zona di disponibilità. 
Una [zone di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la localizzazione dei cluster e di poterli distribuire su diverse zone di disponibilità (AZ).
Questo offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino dell'attività (DRP) in caso di incidente.

---


## Calcolo

Le lame fornite da Cloud Temple sono del tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono completamente gestite da Cloud Temple (firmware, versione OS, ...) tramite la console Cloud Temple.

Sono disponibili diverse categorie di lame di calcolo nel catalogo per supportare i tuoi carichi di lavoro (Virtualizzazione, Contenerizzazione, ...).
Queste offrono caratteristiche e prestazioni differenti per rispondere al meglio alle tue esigenze. Il catalogo delle lame di calcolo evolve regolarmente.

Nel contesto dell'uso con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile mescolare lame di tipi diversi nello stesso cluster).

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                       | Numero di core / thread    | Connettività __(3)__    | GPU **(4)**           | SKU per l'offerta Vmware         |
|-----------------------|--------------|-----------------------------------------|----------------------------|-------------------------|-----------------------|----------------------------------|
| Lame ECO v3           | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)| 20 / 40 thread             | 2 X 10 Gbit/s           |                       | csp:fr1:iaas:vmware:eco:v3       |
| Lame STANDARD v3      | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)| 32 / 64 thread             | 2 X 25 Gbit/s           |                       | csp:fr1:iaas:vmware:standard:v3  |
| Lame ADVANCE v3       | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)  | 48 / 96 thread             | 2 X 25 Gbit/s           |                       | csp:fr1:iaas:vmware:advance:v3   |
| Lame PERFORMANCE 1 v3 | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)| 16 / 32 thread             | 2 X 25 Gbit/s           |                       | csp:fr1:iaas:vmware:perf1:v3     |
| Lame PERFORMANCE 2 v3 | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)  | 36 / 72 thread             | 2 X 25 Gbit/s           |                       | csp:fr1:iaas:vmware:perf2:v3     |
| Lame PERFORMANCE 3 v3 | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)  | 56 / 112 thread            | 2 X 25 Gbit/s           |                       | csp:fr1:iaas:vmware:perf3:v3     |
| Lame PERFORMANCE 4 v3 | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)| 32 / 64 thread             | 2 X 25 Gbit/s           | 2 x NVIDIA L40S 48go  | csp:fr1:iaas:vmware:perf4:v3     |

__Note__:

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ Frequenza di base minima / frequenza turbo, espressa in GHz. Di default, i processori sono configurati per una performance massima a livello di BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e all'accesso allo storage a blocchi, essendo la piattaforma CISCO convergente.

- __(4)__ L'offerta effettiva di GPU è in continua evoluzione. Al 1° maggio 2024, l'offerta si basa sulle GPU NVIDIA LOVELACE L40S. Di default, la lama PERF4 è fornita con 2 schede L40S da 48 GB di RAM. Contatta il supporto per maggiori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, finestre di manutenzione incluse. L'idoneità in caso di mancato rispetto del SLA è soggetta alla creazione di un ticket incidente. Devi anche possedere almeno due host per cluster e attivare la funzionalità __High Availability__ (HA). Questa funzionalità consente alla tua architettura di riavviare automaticamente le tue macchine virtuali sul secondo hypervisor. Nell'ipotesi in cui una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.

## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in termini di connettività e isolamento di rete.

### VLANs di livello 2

Le VLANs messe a disposizione nell'offerta IaaS sono di tipo **livello 2**, offrendo un isolamento di rete completo e una configurazione adattabile secondo le necessità.

#### Principali concetti:
- **Condivisione tra cluster e zone di disponibilità (AZ)**:
  - Le VLANs possono essere condivise tra le diverse AZ e i diversi cluster appartenenti allo stesso tenant.
- **Propagazione inter-tenants**:
  - Le VLANs possono essere propagate tra più tenants appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Performance di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:
- **Latenza intra-AZ**: Inferiore a **3 ms**.
- **Latenza inter-AZ**: Inferiore a **5 ms**.

---

### Punti chiave

1. **Flessibilità**: Le VLANs possono essere configurate per adattarsi agli ambienti multi-cluster e multi-tenant.
2. **Prestazioni elevate**: Una latenza minima assicura una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. **Isolamento e sicurezza**: Le VLANs di livello 2 offrono una segmentazione di rete rigorosa per proteggere i dati e i flussi.

---

## Archiviazione a blocchi

Cloud Temple propone diverse classi di archiviazione basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ permette di fornire il livello di performance richiesto dagli ambienti dei nostri clienti grazie alla grande
quantità di cache memoria inclusa nei controller e alla possibilità di distribuire tutti gli IOPS
di un server su più SAN.
Elle est aussi utilisée pour permettre la réplication de vos LUNs de stockage en mode bloc entre
les zones de disponibilité ou faciliter les interventions sur les baies de stockages.

Le stockage est principalement du stockage de type FLASH NVME dédié aux charges de travail professionnelles.
Les disques sont utilisés par les baies de stockage en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La classe di archiviazione __'Mass Storage'__ propone dischi meccanici per le esigenze di archiviazione
in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La performance effective pour une classe de stockage étant liée à la volumétrie effectivement commandée, selon la notion "IOPS/To", s'entendant "limite d'IOPS par Tera alloué",* 
> *Ainsi, un volume de 0,5To dans la classe de performance 'Standard' aura une limitation d'IOPS plafonnée à 750IOPS,*
> *De même, un volume de 10To dans la classe de performance 'Ultra' aura lui une limitation d'IOPS à hauteur de 150000 IOPS,*
- *La limitation d'IOPS est appliquée au volume, donc à la notion de Datastore pour un environnement VMware,*
- *La disponibilité du stockage est de 99.99% mesuré mensuellement, plage de maintenance incluse,*
- *Il n'y a pas de restriction ou de quota sur la lecture ou l'écriture,*
- *Il n'y a pas de facturation à l'IOPS,*
- *Il n'y a pas d'engagement de performance sur la classe __'Mass Storage'__,*
- *La taille minimale d'une LUN de stockage est de 500Gio,*
- *Lors de l'usage d'un mécanisme de réplication de stockage, les performances doivent être identiques sur les deux zones de disponibilité,*
- *Aucun mécanisme d'optimisation "intelligent" de type compression ou déduplication n'est mis en œuvre : quand vous réservez 10Tio de stockage, vous avez physiquement 10Tio utile de stockage mis en œuvre sur les machines IBM.*
- *Les LUNs de stockage sont dédiés à l'environnement client.*

### Utilisation dans le cadre de l'offre de calcul vmware

Dans le cadre de l'utilisation du stockage en mode bloc sous forme de datastore dans l'offre de calcul VMware de Cloud Temple, **vous devez prendre en compte plusieurs considérations importantes** :

1. **Fichier de swap (.VSWP) lors du démarrage des machines virtuelles** : Lorsqu'une machine virtuelle démarre, elle crée un fichier .VSWP de la taille de sa mémoire sur le disque. Par conséquent, pour pouvoir démarrer vos machines virtuelles, vous devez toujours disposer dans votre datastore d'un espace libre équivalent à la somme des tailles mémoires de vos machines virtuelles. Par exemple, si votre datastore dispose de 1 Tio di archiviazione bloc et que vous souhaitez démarrer 10 macchine virtuali di 64 Gio di memoria ciascuna, saranno necessari 640 Gio di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. **Espace libre pour les snapshots de sauvegarde** : Le service de sauvegarde utilise des clichés instantanés (snapshots). Vous devez donc toujours avoir suffisamment d'espace libre pour permettre la création d'un instantané lors de la sauvegarde d'une machine virtuelle. La taille de l'instantané dépend du volume d'écriture de la machine virtuelle et du temps nécessaire pour effectuer la sauvegarde. En règle générale, il est recommandé de maintenir au moins 10 % d'espace libre pour cette opération.

3. **Gestion des disques dynamiques** : Soyez prudent avec l'utilisation des disques dynamiques. Si vous ne maîtrisez pas leur croissance, un manque d'espace physique peut entraîner un gel (freeze) de la machine virtuelle dans le meilleur des cas, ou un plantage avec corruption dans le pire des cas. Il est crucial de surveiller attentivement l'espace disponible sur vos datastores lorsque vous utilisez ce type de disque.

Une gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle macchine virtuali e l'affidabilità dei backup. Assicuratevi di disporre sempre dello spazio necessario per i file di swap, gli snapshots e la crescita dei dischi dinamici.

## Archiviazione in modalità backup

Lo spazio di archiviazione dedicato al backup delle vostre macchine virtuali è auto-provisionato dalla piattaforma entro i limiti della quota ordinata. 

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Replica dello storage in modalità blocco

#### Principes

Pour permettre la mise œuvre de vos plans de reprise d'activité, lorsqu'il n'est pas possible d'être en 
situation de continuité d'activité avec des mécanismes applicatifs et que la réplication des machines virtuelles 
n'est pas adaptée, Cloud Temple propose des __mécanismes de réplication du stockage en mode bloc entre les zones de disponibilité d'une région__.

Ces mécanismes de réplication sont appliqués sur les LUNs de stockage de vos environnements, en complément des sauvegardes. 
Il scelta di utilizzare un meccanismo di replica in un ambiente __dipende da numerosi fattori tra cui la criticità, la perdita di dati tollerata o la performance mirata__ per l'applicazione. 

Cloud Temple propose deux types de mécanismes déployés dans une configuration actif/passif : 

- La réplication __asynchrone__ (ou __'Global Mirror'__) : *La fonction __'Global Mirror'__ fournit un processus de copie asynchrone. 
Lorsqu'un hôte écrit sur le volume primaire, la confirmation de l'achèvement de l'E/S est reçue avant que l'opération 
d'écriture ne se termine pour la copie sur le volume secondaire. Si una operación de failover se inicia, la aplicación 
debe recuperar y aplicar todas las actualizaciones que no se han confirmado en el volumen secundario. 
Si les opérations d'E/S sur le volume primaire sont mises en pause pendant une courte période, 
il volume secondario può diventare una corrispondenza esatta del volume primario. Cette fonction est comparable à un processus 
de sauvegarde continue dans lequel les dernières mises à jour sont toujours manquantes. 
Lorsque vous utilisez Global Mirror à des fins de reprise après sinistre, vous devez réfléchir à la manière dont vous souhaitez gérer ces mises à jour manquantes.*

- La réplication __synchrone__ (ou __'Metro Mirror'__) : *La fonction __'Metro Mirror'__ est un type de copie à distance qui crée une copie synchrone 
des données d'un volume primaire vers un volume secondaire. Con le copie sincrone, le applicazioni ospiti scrivono sul volume primario, ma non ricevono alcuna conferma 
che l'operazione di scrittura sia completata fino a quando i dati non vengono scritti sul volume secondario. Questo garantisce che entrambi i volumi contengano dati identici quando 
l'opération de copie est terminée. Dopo que l'opération de copie initiale est terminée, la fonction Metro Mirror 
mantiene permanentemente una copia completamente sincronizzata dei dati sorgente nel sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non sarà più commercializzata.__*


Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby".
Il piano di recupero dell'attività è attivato in caso di disastro o come parte di una richiesta di test del DRP. 
Il sito passivo prende successivamente il comando del sito attivo.

#### Réplication asynchrone 

Lorsque vos charges de travail nécessitent des temps de reprise d'activité courts et qu'il n'est pas acceptable 
ou adapté d'utiliser des mécanismes de type réplications applicatives / réplication de machines virtuelles, 
il est possible de répliquer une LUN de stockage SAN entre deux zones de disponibilité d'une même région. 

Questa offerta consente di ottenere un __RPO di 15Mn__ e un __RTO inferiore a 4H__. Permette di riprendere molto piu rapidamente rispetto 
alla realizzazione di un ripristino da backup.

In un volume di stoccaggio in replica asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle 
due zone di disponibilità lavorano insieme per eseguire le operazioni di scrittura su entrambi i siti. 
Il sito maestro non attende l'acknowledgment di scrittura del sito secondario.

Gli step di un'operazione di scrittura sono i seguenti:

1. Un hyperviseur souhaite réaliser __une opération d’écriture sur un volume Global-Mirror__ : il envoie sa requête au contrôleur SAN de sa zone de disponibilité, 
2. Le contrôleur SAN local demande au contrôleur SAN de la zone distante de réaliser l’opération d’écriture,
3. le contrôleur SAN local n'attend pas l'acquittement du SAN distant et réalise alors l’écriture localement,
4. Il donne __acquittement__ à l’hyperviseur ayant émis la requête,
5. __Les hyperviseurs du site distant n’accèdent pas directement à la LUN Global Mirror__ : Une demande de service est nécessaire.


| SLA       | Description                                                                                                                                       |  
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In caso di disastro del datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura          |
| RTO < 4H  | In caso di disastro del datacenter principale, il ripristino delle attività è garantito entro 4 ore a seconda della complessità degli ambienti.     |

In caso di attivazione del PRA, il team di Cloud Temple esegue un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti affinché possano accedere ai dati. L'attuazione di questa soluzione richiede quindi di aver riservato risorse di calcolo e RAM nel sito 'standby' per riprendere l'attività in caso di disastro.

L'uso di questa tecnologia richiede anche il raddoppio dello spazio su disco: è necessario avere esattamente lo stesso spazio sul sito remoto che sul sito locale.

L'uso di questo meccanismo può impattare la performance dell'applicazione fino al 10%. __Solo le classi di storage 500 Iops/To, 1500 Iops/To e 3000 Iops/TO sono compatibili.__

| Riferimento                         | Unità  | SKU                                               |  
|------------------------------------ |--------|---------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |


*__Nota__* : 

- *Dato che l'offerta è asincrona, è possibile che alcune operazioni su disco non siano state scritte sul sito remoto in caso di disastro. Pertanto, vi può essere un rischio di coerenza dei dati, da mitigare nell'analisi del rischio del piano di ripristino delle attività.*
- *La replicazione dello storage in modalità blocco avviene in modo mascherato per le macchine virtuali e le applicazioni,*
- *Perciò, è importante privilegiare i scenari di replicazione applicativa o eventualmente di replicazione di macchine virtuali,*
- *Il calcolo e la memoria, sul sito di ripristino, possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per il business durante l'azione del piano di ripristino delle attività.*


## Virtualizzazione VMware

L'offerta di virtualizzazione VMware Cloud Temple qualificata SecNumCloud è basata sulla tecnologia __VMware Vsphere__.

La piattaforma è gestita da Cloud Temple in modo automatico (mantenimento delle condizioni di sicurezza, mantenimento delle condizioni operative, ...).
È gestibile tramite l'interfaccia grafica della console Shiva o tramite le relative API.

*__Nota__* : *Per motivi di sicurezza legati alla qualificazione SecNumCloud,
__non è possibile per il cliente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto al vCenter in particolare).
Infatti, la qualificazione SecNumCloud impone __una segregazione totale__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del cliente (la console Shiva).*

- I prodotti implementati sono VMware ESXi, VMware Vcenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestita materialmente dalla tecnologia Juniper e dal protocollo VPLS.*
- *Lo storage non utilizza la tecnologia VMWare vSan, ma solo SAN IBM in fiber channel 32G.*
- *Non viene applicata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*

### Definizione di un cluster di blade di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, anche noto come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile mescolare modelli diversi di blade di calcolo all'interno dello stesso cluster__.

Tutti i blade di calcolo vengono forniti con la massima memoria fisica, una limitazione dell'uso della RAM viene applicata a livello software nel cluster per assicurarsi che corrisponda alla RAM fatturata.

Di default, ogni blade dispone di 128 Go di memoria attivata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere al massimo 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra diversi __'Cpool'__.

### Allocazione Memoria per un 'Cpool'

La prenotazione della RAM è configurabile per cluster. Puoi ridurre o aumentare la quantità di RAM per soddisfare le tue esigenze a livello di cluster.

__Attenzione a non superare una media dell'85% di consumo memoria per blade di calcolo__.
Infatti, la tecnologia VMware utilizzerà un metodo di ottimizzazione tipo compressione che può influire notevolmente sulle performance dei tuoi carichi di lavoro e complicare la diagnosi.
Allo stesso modo, una pressione di memoria troppo alta sui tuoi blade di calcolo costringerà l'hypervisor a scaricare parte della sua memoria su disco per rispondere alle esigenze delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__ influisce fortemente sulle prestazioni complessive delle macchine virtuali situate sullo storage (datastore) interessato.
__La diagnosi è complicata in questo contesto__, poiché la tua metrologia verificherà impatti a livello di CPU e non di memoria o storage.
Tieni anche presente che la prima cosa che fa l'hypervisor all'avvio di una macchina virtuale è creare __un file di swap memoria__ (.vswap) su
il disco, della dimensione della memoria della macchina virtuale interessata. Devi __tenerne conto nel dimensionamento del tuo storage__.

Ogni blade di calcolo è fornito con 128Go di memoria attivata a livello software nel __'Cpool'__, ma dispone fisicamente della totalità della memoria allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la prenotazione della RAM all'attivazione del __'Cpool'__ sarà di 3 x 128Go = 384 Go di RAM.
Potrai estenderla al massimo a 3 x 384Go = 1152Go di memoria.

    Minimo di memoria di un 'Cpool' = numero di host X 128Go di memoria
    Massimo di memoria di un 'Cpool' = numero di host X la quantità di memoria fisica del blade di calcolo

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a tua disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Include attualmente diverse decine di `Templates` e immagini da montare sulle tue macchine virtuali.

### Aggiornamento degli Hypervisor
Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza. 
Tuttavia, l'aggiornamento degli hypervisor rimane sotto la tua responsabilità, poiché non abbiamo visibilità sui tuoi vincoli aziendali.

Il processo di aggiornamento è completamente automatizzato. Per garantire una continuità del servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicurati di disporre delle autorizzazioni necessarie per eseguire queste azioni.


### Gestione dell'affinità delle tue macchine virtuali

Le __regole di affinità e anti-affinità__ permettono di controllare la posizione delle macchine virtuali sui tuoi hypervisor.
Possono essere utilizzate per gestire l'uso delle risorse del tuo __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro che richiedono molte risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare macchine virtuali da un host all'altro senza interruzione del servizio.

Puoi configurare tramite la gestione delle regole:

- __Regole di Affinità__ : Queste regole assicurano che alcune macchine virtuali vengano eseguite sullo stesso host fisico.
Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
dove le prestazioni sono critiche, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__ : Al contrario, queste regole garantiscono che alcune macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che macchine critiche siano tutte interessate in caso di guasto di un server unico.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono alta disponibilità,
come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
Ad esempio, non vuoi che i tuoi due Active Directory siano sullo stesso hypervisor.

Quando crei una regola, definisci il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate del tuo cluster di hypervisor.

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole che riguardano le macchine virtuali tra di loro (non regole tra hypervisor e macchine virtuali).*

### Replicazione asincrona delle tue macchine virtuali in ambiente VMware

La replicazione asincrona delle tue macchine virtuali è un meccanismo che consiste nel trasferire a livello dell'hypervisor sorgente le operazioni di scrittura sul sito standby a intervalli di tempo regolari.

Dopo una copia iniziale a caldo dell'intero storage attivo sul sito standby, solo le scritture vengono trasferite periodicamente sul sito in sospensione. 
Questo intervallo dipende dal volume di scrittura (da ogni ora a ogni 24 ore).
La replica delle macchine virtuali si basa sul meccanismo di snapshot dell'hypervisor. A tal proposito, questa soluzione presenta gli stessi inconvenienti, in particolare la sensibilità al volume di scrittura della macchina virtuale, poiché il processo di snapshot è un meccanismo ricorsivo per la chiusura dello snapshot.

Il tipico esempio di macchina che non supporta il meccanismo di replica delle macchine virtuali è un server FTP che riceve flussi in tempo reale dalle telecamere di sorveglianza. __La macchina passa tutto il tempo a scrivere e non sarà in grado di chiudere uno snapshot senza la sospensione del sistema operativo per un periodo di tempo significativo (diverse decine di minuti)__. Se l'hypervisor non riesce a chiudere lo snapshot, è esattamente quello che farà, senza possibilità di intervenire salvo corrompere la macchina virtuale.

| SLA             | Descrizione                                                                                                                                                            |   
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO di 1H a 24H | In caso di disastro nel datacenter principale, la quantità massima di dati persi è quella dell'ultimo push di scrittura sul sito di standby.                            |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale arrestata sul sito remoto                                                                                                  |


In caso di necessità, o in caso di guasto su una macchina del sito principale, la macchina speculare sul sito di standby viene attivata. La ripresa delle attività richiede di aver riservato sul sito di standby la capacità di calcolo e la RAM in standby. È necessario avere lo stesso spazio di archiviazione sul sito passivo come sul sito attivo.


| Riferimento                       | Unità | SKU                                                |  
|-----------------------------------|-------|----------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1    |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in base al tasso di cambiamento sulla macchina virtuale.*













## Backup delle macchine virtuali
Cloud Temple propone __un'architettura di backup incrociato nativa e non disattivabile__ (è obbligatoria nella qualificazione secnumcloud francese).

I backup sono archiviati in una zona di disponibilità e in un datacenter fisico diverso da quello che ospita la macchina virtuale.

Ciò consente di proteggersi in caso di guasto maggiore nel datacenter di produzione e di ripristinare in un datacenter secondario (ad esempio in caso di incendio).

Questa soluzione comprende:

- Il backup off-site a caldo di tutti i dischi,
- La presentazione e l'avvio istantaneo di una macchina virtuale dall'infrastruttura di mass storage e la ricarica a caldo sui SAN di produzione,
- Il ripristino parziale di file dal backup,
- Una ritenzione limitata unicamente dall'allocazione dello spazio di mass storage.

Questa infrastruttura di backup è basata sulla soluzione *IBM Spectrum Protect Plus*, una soluzione a architettura senza agenti, semplice da usare e che consente l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di mass storage.

Le velocità di backup e di ripristino dipendono dal tasso di cambiamento sugli ambienti. La politica di backup è configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota :__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di snapshot dell'hypervisor. Sono tipicamente le macchine con carichi di scrittura su disco costanti. L'hypervisor non riesce a chiudere lo snapshot, il che obbliga al congelamento della macchina virtuale per poter completare l'operazione di chiusura. Questo congelamento può durare diverse ore e non è arrestabile.*

*La soluzione è quella di escludere il disco che è bersaglio di scritture permanenti e di eseguire il backup dei dati con un altro metodo.*

| Riferimento                                            | Unità | SKU                             |
| ------------------------------------------------------ | ----- | ------------------------------- |
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1  |


#### Creare una politica di backup
Per aggiungere una nuova politica di backup, è necessario inviare una richiesta al supporto. Il supporto è accessibile dall'icona di salvataggio in alto a destra della finestra.

La creazione di una nuova politica di backup avviene mediante __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e n° di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)