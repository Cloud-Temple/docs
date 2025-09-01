---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è stata progettata per soddisfare esigenze critiche di continuità e ripristino, con un forte accento su settori ad alta richiesta come l'industria, il banking e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce la massima disponibilità e prestazioni ottimali per le tue applicazioni critiche.

## Un'piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per lo stoccaggio a blocchi, e __DELL ECS__ per lo stoccaggio oggetto.
- Rete: __JUNIPER__.
- Virtualizzazione: __Stack Opensource__, offrendo una base affidabile e testata per gestire i tuoi ambienti cloud.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco ed IBM, garantendo una compatibilità estesa con i principali editori software.

## Un'infrastruttura dedicata e automatizzata

Sebbene l'offerta IaaS di Cloud Temple sia completamente automatizzata tramite API e Terraform, fornisce un'infrastruttura unica:

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
| Sicurezza            | Piattaforma altamente sicura, qualificata SecNumCloud, HDS (Hébergement des Donne de Santé), ISO 27001 e ISAE 3402 tipo II. |
| Alta disponibilità    | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le fasce di manutenzione.                                        |
| Resilienza          | Implementazione di piani di continuità aziendale personalizzati secondo necessità.                                                               |
| Automazione          | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| A richiesta         | Risorse disponibili su richiesta.                                                                                                          |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS viene distribuito in una zona di disponibilità.
Una zona di disponibilità fa parte di una regione.

Questo tipo di deployment consente di scegliere la localizzazione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la redundanza e semplifica la pianificazione di un piano di ripristino in caso di incidente.

---

## Classes di lame di calcolo

Lele di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare vari bisogni:

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

**Nota:** Non vengono tradotti i nomi di variabili, funzioni, classi o la sintassi Python all'interno dei blocchi di codice. La traduzione si limita al contenuto testuale esterno.

### Note

- **(1) La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- **(2) Le numero di frequenza indicato corrisponde alla frequenza minima di base e alla frequenza turbo.
- **(3) La connettività fisica è mutualizzata per l'accesso al rete e all'accesso allo stoccaggio bloc, grazie a un'architettura convergente Cisco UCS.
- **(4) I GPU disponibili si evolve in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include i GPU NVIDIA LOVELACE L40S.
- **(5) La disponibilità dell'infrastruttura è garantita al 99,9% mensilmente, misurata le manutenzioni incluse. Tutte le richieste relative all'SLA devono essere segnalate tramite un ticket di incidente.**

La disponibilità dell'infrastruttura è garantita a livello del cluster al 99,9% mensilmente, misurata le manutenzioni incluse. Tutte le richieste relative all'SLA devono essere segnalate tramite un ticket di incidente.

## Classes di archiviazione in modalità blocco

Il storage distribuito a blocchi, basato su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adatte a vari scenari d'uso:

| Riferimento                         | IOPS/Tb                 | Uso principale                        |
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essenziale**             | 500                     | Carichi di lavoro leggeri              |
| **FLASH - Standard**              | 1500                    | Carichi di lavoro standard            |
| **FLASH - Premio**               | 3000                    | Carichi intensi                       |
| **FLASH - Enterprise**            | 7500                    | Carichi critici                      |
| **FLASH - Ultra**                 | 15000                   | Carichi ultra-intensi                  |
| **STORAGE DI ARCHIVIAZIONE - Archiviazione**      | Non applicabile          | Archiviazione economica per l'archiviazione   |

### Caratteristiche

- **Tecnologia**: NVMe Flash con Distributed RAID 6 per una maggiore resilienza.
- **Disponibilità**: 99,99% mensilmente, misurata.
- **Restrizioni**: Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo completo dei volumi assegnati.

### I reti

Il produit OpenIaaS est compatible avec i reti privati (](../network/private_network) e l'accesso internet (](../network/internet).

Due due tipi di reti sono disponibili dalla configurazione di una macchina virtuale.

### I reti di tipo VLAN

I reti di tipo VLAN devono essere diffusi a parcella di VLAN per scheda di rete. Se si desidera utilizzare più reti, basta creare più schede di rete.

Esiste una limitazione sul numero massimo di schede che si possono creare su una VM, che è di 7.

### Il VLAN TRUNK

In caso di necessità di trasmettere più di 7 VLAN, è necessario utilizzare il VLAN Trunk.
Il VLAN Trunk permette di inviare tutti i VLAN su una singola carta. La configurazione degli ID dei VLAN avviene attraverso le interfacce virtuali di tipo VLAN dal sistema operativo della VM. Gli ID dei VLAN sono gli stessi che si trovano e sono visibili dalla console.

## Virtual Machine Backup

Cloud Temple offers a **distributed, non-stop backup architecture**, an essential component for SecNumCloud French qualification.

Backups are stored on the [Qualified Object Storage (SecNumCloud)](../storage/oss), ensuring optimal protection in case of major production datacenter failure. This approach allows restoring data onto a secondary datacenter even during critical incidents such as fires.

This comprehensive solution includes:

- **Hot, on-site backup of the entire disk**
- **Flexibility in restoration**, enabling selection of recovery point and location

The backup infrastructure leverages an open-source technology with agentless architecture, combining ease of use with automated processes. This solution optimizes storage space usage while maintaining high performance.

Backup speeds and restore times depend on the data change rate in environments. The backup policy can be fully configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

**Important Note:**

* Some virtual machines may not be compatible with this backup technology*, which relies on hypervisor instantaneous snapshot mechanisms. This typically applies to VMs with constant disk write operations. In such cases, the hypervisor cannot finalize the snapshot, necessitating VM freeze for completing the operation. The freeze can last several hours and is non-interruptible.

The recommended solution involves excluding the targeted disk from persistent writes and employing an alternative backup method.

| Reference                                   | Unité   | SKU                                         |
| -------------------------------------------- | ------- | ------------------------------------------- |
| BACKUP - Access to service                   | 1 VM    | csp:(region):openiaas:backup:vm:v1          |

### Creazione di una politica di backup

Per creare una nuova politica di backup, è necessario presentare una richiesta al supporto, accessibile tramite l'icona della palla situata in alto a destra dell'interfaccia.

La creazione di una nuova politica di backup si effettua attraverso:

- Una richiesta di servizio specificando:
    - Il nome della tua Organizzazione
    - Le coordinate di un contatto (email e numero di telefono) per finalizzare la configurazione
    - Il nome del proprietario
    - Il nome della politica di backup
    - Le caratteristiche desiderate (x giorni, y settimane, z mesi, ecc.)

### Le virtualizzazione dei server

La virtualizzazione dei server è una tecnica che consente di creare più ambienti operativi virtuali su un singolo hardware fisico. Questo processo permette di ottimizzare l'utilizzo delle risorse hardware, migliorare la flessibilità e la scalabilità, ridurre i costi e aumentare la disponibilità dei sistemi.

In termini più semplici, la virtualizzazione dei server è come avere più computer in un unico contenitore fisico. Ogni "computer" virtuale (o "server") può funzionare indipendentemente, con il proprio sistema operativo e applicazioni, ma tutti condividono le risorse hardware comuni del contenitore fisico.

### Vantaggi della virtualizzazione dei server

1. **Efficienza delle risorse**: Con la virtualizzazione, più ambienti operativi possono condividere le stesse risorse hardware (CPU, memoria, spazio di archiviazione), massimizzando l'utilizzo e minimizzando gli sprechi.
2. **Flessibilità**: I server virtuali possono essere facilmente aggiunti o rimossi in base alle esigenze, permettendo una maggiore flessibilità nella gestione delle risorse IT.
3. **Scalabilità**: La capacità di aggiungere rapidamente nuovi server virtuali consente un'espansione rapida dei servizi IT senza dover acquistare hardware fisico aggiuntivo.
4. **Disponibilità**: In caso di guasto del hardware, i server virtuali possono essere facilmente ripristinati su altri server fisici, garantendo una maggiore disponibilità dei servizi.
5. **Riduzione dei costi**: La virtualizzazione può ridurre significativamente i costi di infrastruttura hardware e energetico grazie all'ottimizzazione delle risorse.
6. **Gestione centralizzata**: I server virtuali possono essere gestiti da un singolo ambiente di amministrazione, semplificando la gestione dei sistemi e delle applicazioni.

### Applicazioni della virtualizzazione dei server

La virtualizzazione dei server è ampiamente utilizzata in vari contesti, tra cui:

- **Servizi cloud**: Le piattaforme di cloud computing spesso si basano su tecnologie di virtualizzazione per offrire servizi scalabili e flessibili.
- **Infrastrutture IT**: Le aziende utilizzano la virtualizzazione per ottimizzare l'utilizzo delle risorse e migliorare la gestione dei server.
- **Test e sviluppo**: I server virtuali sono ideali per creare ambienti di test e sviluppo, isolando le applicazioni e i sistemi per evitare conflitti.
- **Archiviazione e backup**: La virtualizzazione può essere utilizzata per ottimizzare l'archiviazione dei dati e facilitare il backup dei server.

### Conclusioni

La virtualizzazione dei server rappresenta una tecnica rivoluzionaria che ha trasformato la gestione delle infrastrutture IT, offrendo numerosi vantaggi in termini di efficienza, flessibilità, scalabilità e riduzione dei costi. Questa tecnologia è diventata un pilastro per le aziende che cercano di rimanere competitive nel panorama IT dinamico.

### Gestione delle risorse vCPU

Le ripristino delle risorse vCPU avviene a freddo (la macchina è spenta). La piattaforma supporta fino a 254 vCPUs per macchina virtuale (limite teorico), con test di successo effettuati su VM Linux dotate di 128 vCPUs.

È importante sottolineare che il supporto del sistema operativo ospitante è un fattore determinante nella distribuzione delle risorse. Una allocazione superando le limitazioni supportate dal sistema operativo può portare a problemi di prestazioni significativi.

### Gestione delle risorse di memoria

Le ripristino della memoria avviene anche a freddo. Le limiti sono i seguenti:

- 1,5 TiB con supporto per snapshot di memoria
- 8 TiB senza supporto per snapshot di memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM allocata a Xen e al dominio di controllo)

La memoria effettivamente utilizzabile può essere limitata dal sistema operativo ospitante. Superare i limiti imposti dal SO ospitante può portare a una diminuzione delle prestazioni.

### Gestione dei Dischi

- La dimension massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per espandere la capacità di stoccaggio, è necessario creare un nuovo disco.

### Outils per le Virtual Computing

Questi strumenti sono essenziali per ottimizzare il funzionamento delle macchine virtuali. Quando si desidera eseguire un'azione e uno di questi strumenti è necessario, verrà visualizzato un messaggio sulla console Cloud Temple.

Per installare questi strumenti, si prega di consultare i siti ufficiali di Xen Server per ottenere istruzioni dettagliate in base al proprio sistema operativo.

#### Agente di Gestione
L'Agente di Gestione è un componente installato su ogni macchina virtuale. Consente all'hypervirtuale di gestire meglio la macchina fornendo accesso a informazioni aggiuntive e consentendo di eseguire alcune azioni in modo più pulito.

#### Piloti di Driver Paravirtuale (Driver di Virtualizzazione Parziale)
I piloti di driver paravirtuale sono piloti installati all'interno della macchina virtuale per migliorarne le prestazioni.
Senza questi piloti, la macchina funziona, ma a un ritmo più lento. Inoltre, consentono alcune azioni avanzate.
I piloti di driver paravirtuale sono installati di default su la maggior parte dei sistemi Linux attuali.

### Strumenti
Gli strumenti sono un insieme di componenti software che migliorano l'integrazione della macchina virtuale con l'infrastruttura di virtualizzazione.

## Cataloghi

Il catalogo consente di gestire tre tipi di elementi essenziali:

- Le immagini disco (ISO)
- I modelli di configurazione
- I modelli preimpostati per macchine virtuali

Nella scheda dettaglio di un modello di macchina virtuale, è possibile consultare informazioni cruciali come la localizzazione, il numero di dischi o anche il numero di adattatori di rete.

Quando il numero di dischi virtuali viene indicato come 0, ciò significa che si tratta di un modello di configurazione senza sistema operativo preinstallato, consentendoti così di implementare il tuo ambiente personalizzato.

## Replica di macchine virtuali

La replica di macchine virtuali di Cloud Temple garantisce la protezione e la continuità dei dati critici attraverso una copia automatica dei propri ambienti vers una zona di disponibilità distinta. Questa funzionalità, integrata di default nell'offerta IaaS Open Source, soddisfa le esigenze di continuità aziendale e recupero in caso di disastro più rigorose.

### Automated and Secure Protection

The Cloud Temple replication leverages a **qualified SecNumCloud** infrastructure, ensuring:

- **Asynchronous Replication**: Continuous copying of your virtual machines without impacting production performance
- **Geographical Separation**: Storage of replicas in a different availability zone compared to the source
- **Complete Automation**: Fully automated process via the [Cloud Temple Console](../console/console.md)
- **Regulatory Compliance**: Adherence to backup and continuity of operations requirements

### Vantaggi della Replicazione

| Vantaggio                | Descrizione                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuità dell'attività | Protezione dei servizi critici in caso di incidente maggiore sul sito principale.                                                          |
| Protezione geografica   | Replicazione verso una zona di disponibilità distinta, proteggendo contro i sinistri locali.                                             |
| Flessibilità temporale    | Scegliere l'intervallo di replicazione in base ai propri bisogni: da 1 minuto a 24 ore.                                                            |
| Gestione semplice       | Configurazione e monitoraggio completamente integrati nella Console Cloud Temple.                                                                |
| Conformità SecNumCloud | Infrastruttura certificata che garantisce il livello più elevato di sicurezza per i dati sensibili.                                             |

## Configurazione della replica

Questo documento descrive le impostazioni di replica per il nostro sistema cloud. Le configurazioni includono i dettagli relativi alla replicazione dei dati, alle politiche di sincronizzazione e alle misure di sicurezza.

### Strategia di Replica

Il nostro sistema adotta una strategia di replica asimmetrica, che consente un maggiore controllo sulla distribuzione dei dati tra i diversi cluster. Questo approccio è particolarmente utile per gestire le esigenze di prestazioni e disponibilità in modo ottimale.

### Politiche di Sincronizzazione

1. **Sincronizzazione Asincrona**: I dati vengono scritti in tempo reale nei cluster principali, mentre i replica secondari ricevono le modifiche in base a un intervallo temporale predefinito (ad esempio, ogni 5 minuti).
2. **Raccolta dei Log**: I log di transazione vengono memorizzati localmente nei cluster secondari prima di essere applicati al database principale. Questo processo garantisce che anche in caso di interruzione temporanea della comunicazione, i dati non vengano persi.
3. **Raccolta dei Log Distribuita**: I log sono distribuiti tra più cluster secondari per migliorare la resilienza e ridurre il rischio di perdita di dati dovuta a un singolo punto di guasto.

### Misure di Sicurezza

1. **Crittografia**: I dati vengono crittografati sia in transito che a riposo, utilizzando algoritmi avanzati per garantire la protezione dei dati sensibili.
2. **Autenticazione e Autorizzazione**: Le politiche di autenticazione robuste e l'autorizzazione basata sui ruoli sono implementate per limitare l'accesso ai dati replica.
3. **Auditing**: Un sistema di auditing monitora continuamente le attività di replica, fornendo tracciabilità completa su chi ha eseguito quali azioni e quando.
4. **Controllo degli Accessi**: I controlli di accesso sono rigorosamente implementati per garantire che solo utenti autorizzati possano modificare le configurazioni di replica.

### Gestione delle Failover

1. **Sistemi di Monitoraggio**: Sistemi avanzati di monitoraggio assicurano la rilevazione tempestiva dei guasti e l'avvio automatico del failover nei cluster secondari.
2. **Test di Failover**: Regolari test di failover vengono eseguiti per garantire che le politiche di replica siano efficaci e che i sistemi possano gestire situazioni di emergenza senza interruzioni significative dei servizi.
3. **Ricostruzione Post-Failover**: In caso di failover, un processo automatizzato di ricostruzione viene attivato per ripristinare rapidamente la funzionalità del sistema.

### Monitoraggio e Reporting

1. **Dashboard di Monitoraggio**: Un dashboard interattivo fornisce una visione in tempo reale delle prestazioni della replica, inclusi tempi di latenza, tasso di errore e capacità dei cluster.
2. **Reporting Automatizzato**: Report automatizzati vengono generati regolarmente per analizzare le prestazioni del sistema di replica e identificare eventuali aree di miglioramento.

Questa configurazione della replica è stata ottimizzata per soddisfare le esigenze specifiche del nostro ambiente cloud, garantendo al contempo prestazioni elevate, disponibilità e sicurezza dei dati.

#### Politiche di replica

La definizione di una politica di replica stabilisce i parametri di protezione delle tue macchine virtuali:

- **Destinazione**: Selezione dello spazio di archiviazione di destinazione all'interno della zona di disponibilità di replica
- **Frequenza**: Intervallo di replica adattato alle tue esigenze di recupero (RPO)
- **Conservazione**: Numero di punti di recupero conservati

#### Intervalli disponibili

| Intervallo              | Uso raccomandato                           | RPO (Perdita di dati massima) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 a 59 minuti__      | Applicazioni critiche in tempo reale         | < 1 ora                     |
| __1 a 24 ore__       | Applicazioni professionali e ambienti standard | < 24 ore                   |

#### Associazione delle macchine virtuali

Dopo aver creato la politica, è possibile associare le macchine virtuali da proteggere:

- __Selezione semplificata__ : Scegliere le VM dall'interfaccia della Console
- __Validazione automatica__ : Verifica della compatibilità e dei requisiti
- __Attivazione immediata__ : Avvio automatico della replicazione dopo la configurazione

## Gestione delle replica

Questo documento descrive le procedure per la gestione delle replica nei nostri sistemi di archiviazione cloud. Le replica sono strumenti essenziali per garantire la disponibilità e la resilienza dei dati, soprattutto in ambienti distribuiti.

### Strategie di Replica

1. **Replica Locale**:
   - Consiste nel duplicare i dati su un dispositivo locale all'interno dello stesso data center. Questa strategia è utile per la velocità di accesso e riduzione della latenza, ma offre una protezione limitata contro i disastri locali (ad esempio, incendi o guasti hardware).

2. **Replica Regionale**:
   - In questo caso, i dati vengono duplicati su un dispositivo situato in una regione geografica diversa dal data center principale. Questo approccio migliora la resilienza contro eventi locali, ma introduce una latenza maggiore a causa della distanza tra le regioni.

3. **Replica Globale**:
   - La replica globale distribuisce i dati su più data center situati in diverse parti del mondo. Questa strategia offre la massima disponibilità e resilienza, ma richiede una pianificazione e un'implementazione molto complesse per gestire le aspettative di latenza e i vincoli di costo.

### Gestione delle Replica

1. **Monitoraggio**:
   - Monitorare continuamente lo stato delle replica per garantire che siano attive e funzionino correttamente. Questo include il monitoraggio della latenza, della bontà dei dati e la convalida regolare dei log di replica.

2. **Manutenzione**:
   - Effettuare manutenzioni programmate per aggiornare le copie di replica e correggere eventuali discrepanze tra i dati principali e quelli replicati. Questo può comportare l'aggiornamento dei metadati, la verifica della coerenza dei dati o il ripristino da errori.

3. **Ricostruzione**:
   - Sviluppare piani di recupero rapido in caso di perdita o corruzione dei dati principali. Questo include l'implementazione di procedure di backup regolari e la validazione della capacità di ricostruire rapidamente le replica.

4. **Scalabilità**:
   - Assicurarsi che il sistema di replica possa scalare in modo dinamico per soddisfare i requisiti di carico in crescita, senza compromettere la qualità dei dati o l'efficienza operativa.

### Considerazioni di Sicurezza

- **Crittografia**: Utilizzare protocolli di crittografia robusti per proteggere i dati durante il trasferimento e lo stoccaggio, sia tra i dispositivi locali che regionali o globali.
- **Accesso Controllato**: Implementare meccanismi di controllo degli accessi rigorosi per limitare l'accesso ai dati replicati a solo personale autorizzato.
- **Audit e Conformità**: Mantenere registri dettagliati delle operazioni di replica, inclusi cambiamenti nella configurazione, aggiornamenti dei dati e interventi di manutenzione, per garantire la conformità alle normative sulla protezione dei dati.

### Conclusione

La gestione efficace delle replica è cruciale per mantenere l'integrità, la disponibilità e la resilienza dei sistemi di archiviazione cloud. Scegliendo le strategie di replica appropriate e implementando procedure di monitoraggio, manutenzione e sicurezza adeguate, possiamo garantire che i nostri dati siano protetti contro la perdita o il corruzione, anche in presenza di eventi imprevisti.

#### Visione delle politiche

La Console Cloud Temple fornisce una visuale centrale di tutte le politiche di replica con:

- Nome e frequenza di ciascuna politica
- Zona di disponibilità di destinazione
- Pools e archiviazione associati
- Azioni di gestione disponibili



#### Visualizzazione delle replica

Il tabello delle replica ti permette di visualizzare:

- Nome delle macchine virtuali replicate
- Posizione sorgente e destinazione
- Politica di replica associata
- Esporta dei dati nel formato CSV

---

# Buone pratiche

---

#### Recomandazioni per tipo di carico

- **Applicazioni critiche**: Replicazione ogni 1-30 minuti per minimizzare la perdita di dati
- **Applicazioni aziendali**: Replicazione ogni ora o bi-ora secondo necessità
- **Ambienti di sviluppo**: Replicazione quotidiana generalmente sufficiente

#### Policy Planning

- Develop distinct policies based on application criticality
- Name your policies clearly for easy management
- Regularly check the status of replicas from the console
- Document your replication strategy for your team

**Important Note:**

*Replication does not replace a comprehensive backup strategy. It is an essential complement to ensure business continuity in case of a major incident on your primary site.*

## Alta Disponibilità

La alta disponibilità permet di garantire la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.

Con l'alta disponibilità (HA), ogni host nel pool invia regolarmente segnali di vita ai suoi pari tramite il storage condiviso (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host viene considerato guasto.

Un Block Storage definito come heartbeat funge da base per autenticare gli host che non risponderebbero più.

Per avere una configurazione corretta dell'alta disponibilità in un pool OpenIaaS, è fondamentale disporre **almeno due hosts** connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio per l'alta disponibilità:

#### Abilitato non
La disponibilità alta non è configurata. In caso di guasto dell'host, la macchina virtuale non verrà riavviata.

#### Riepilogo in italiano
In caso di guasto del server, la macchina virtuale verrà automaticamente riavviata non appena saranno disponibili risorse nel pool. Le macchine virtuali configurate in modalità "riavvio" vengono trattate con priorità, prima di quelle impostate in modalità "miglior speranza".

#### MigliorSforzo  
In caso di guasto del server, la macchina virtuale verrà automaticamente riavviata solo se vengono prese in considerazione risorse disponibili dopo il completamento del trattamento di tutte le macchine virtuali impostate sul modo "riavvio". Il modo "MigliorSforzo" effettua un unico tentativo, quindi se le risorse sono insufficienti, la macchina virtuale non verrà riavviata.
