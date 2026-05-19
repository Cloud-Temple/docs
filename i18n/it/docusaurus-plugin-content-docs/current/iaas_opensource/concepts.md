---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripresa dell'attività, con un'attenzione particolare ai settori esigenti come l'industria, il settore bancario e quello assicurativo. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per lo storage a blocchi e __DELL ECS__ per lo storage a oggetti.
- Rete: __JUNIPER__.
- Virtualizzazione: __Stack Opensource__, che offre una base affidabile e collaudata per gestire i vostri ambienti cloud.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce un'ampia compatibilità con i principali produttori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie a API e un provider Terraform, il prodotto IaaS di Cloud Temple offre un'infrastruttura unica:

- __Risorse dedicate__ : I blade di calcolo, i volumi di archiviazione e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- __Massima prevedibilità__ : Hai il controllo sui tassi di virtualizzazione, sul carico IOPS dell'archiviazione e benefici di una fatturazione chiara, a consumo mensile.

La piattaforma è certificata __SecNumCloud__ da [ANSSI](https://www.ssi.gouv.fr/), garantendo un elevato livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Storage su richiesta (plusieurs classes disponibles).
- Risorse di rete (Internet, réseaux privés).
- Backup incrociati con retention configurabile.
- Replicazione asincrona per lo storage o le macchine virtuali.
- Gestione tramite la [Console](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale     | Hosting dei dati in Francia e conformità al GDPR.                                                                                              |
| Sicurezza            | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Hosting dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__.         |
| Alta disponibilità    | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, finestre di manutenzione incluse.                                   |
| Resilienza           | Implementazione di piani di continuità operativa o di ripristino delle attività in base alle esigenze.                                          |
| Automazione          | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                    |
| Su richiesta         | Risorse disponibili su richiesta.                                                                                                              |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS è distribuito in una zona di disponibilità.
Una zona di disponibilità fa parte di una regione.

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di poterli distribuire su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino di attività (DRP) in caso di incidente.

---

## Classi di blade di calcolo

I blade di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diverse esigenze:

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Note
- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso di rete e l'accesso allo storage block, grazie a un'architettura convergente Cisco UCS.
- __(4)__ I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, il prodotto include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'alta disponibilità su un cluster è disponibile solo a partire da 2 nodi.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, finestre di manutenzione incluse. Qualsiasi richiesta relativa al SLA deve essere segnalata tramite un ticket di incidente.

---

## Classi di storage in modalità block

Lo storage block distribuito, basato su __IBM Spectrum Virtualize__, offre una gamma di prestazioni adattate a diversi casi d'uso:

| Riferimento                         | IOPS/To        | Limite IOPS max / Volume | Larghezza di banda max / Volume | Utilizzo principale                        |
|-----------------------------------|----------------|---------------------------|---------------------------------|--------------------------------------------|
| **FLASH - Essenziale**             | 500            | 10 000 IOPS               | 512 MB/s                        | Carichi di lavoro leggeri                  |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                       | Carichi di lavoro standard                 |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                       | Carichi intensivi                          |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                       | Carichi critici                            |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                       | Carichi ultra-intensivi                    |
| **MASS STORAGE - Archiviazione**      | Non applicabile | Non garantito               | Non garantito                 | Storage economico per l'archiviazione   |

### Caratteristiche

- **Prestazioni** : Le prestazioni effettive crescono linearmente in base al volume allocato (secondo il rapporto IOPS/TB), **entro il limite massimo hardware assoluto definito sopra**. (Ad esempio, un volume da 10 TB di classe Ultra sarà fisicamente limitato a 30.000 IOPS e 1024 MB/s).
- __Tecnologia__ : Flash NVMe con __RAID 6 distribuito__ per una maggiore resilienza.
- __Disponibilità__ : 99,99%, misurata mensilmente.
- __Limitazioni__ : Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo integrale dei volumi riservati.

### Sicurezza e Cifratura dell'Archiviazione a Blocchi

Per garantire la riservatezza dei vostri dati a riposo, l'intera nostra infrastruttura di archiviazione a blocchi integra una robusta cifratura hardware.

- __Tipo di Cifratura__ : I dati sono cifrati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo __XTS-AES 256__.
- __Conformità__ : Questo metodo di cifratura è conforme alla norma __FIPS 1-40-2__, garantendo un elevato livello di sicurezza convalidato.
- __Funzionamento__ : La cifratura viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning[Point d'attention sur la réplication]
È importante notare che questa cifratura protegge i dati archiviati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono cifrati durante le operazioni di replicazione dell'archiviazione tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

---

## Le reti

Il prodotto OpenIaaS è compatibile con [le reti private](../network/private_network) e [l'accesso a Internet](../network/internet).

Due tipi di reti sono disponibili dalla configurazione di una macchina virtuale.

### Le reti di tipo VLAN

Le reti di tipo VLAN devono essere configurate con un VLAN per scheda di rete. Se si desidera utilizzare più reti, è sufficiente creare più schede di rete.

Esiste un limite al numero massimo di schede che possono essere create su una VM, fissato a 7.

### Il VLAN TRUNK

Nel caso in cui sia necessario propagare più di 7 VLAN, è necessario utilizzare il VLAN Trunk.
Il VLAN Trunk consente il passaggio di tutte le VLAN su una singola scheda. La configurazione degli ID VLAN deve essere effettuata tramite interfacce virtuali di tipo VLAN dall'OS della VM. Gli ID VLAN sono gli stessi presenti e visibili dalla console.

## Backup di macchine virtuali

L'offerta OpenIaaS integra __un'architettura di backup distribuita nativa e non disattivabile__, elemento obbligatorio nel quadro della qualifica francese SecNumCloud.

I backup sono archiviati su [Archiviazione Oggetti qualificata SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di guasto maggiore del datacenter di produzione. Questo approccio consente di ripristinare i dati su un datacenter secondario, anche in caso di incidente critico come un incendio.

### Servizi di protezione dei dati disponibili

| Servizio | Descrizione |
|---|---|
| **Backup incrementale (Agentless)** | Backup senza agente tramite i meccanismi nativi dell'ipervisore, verso un repository S3 remoto. |
| **Backup dei metadati** | Protezione delle configurazioni del pool di virtualizzazione e dell'orchestratore di backup — indispensabile per il Disaster Recovery. |
| **Ripristino granulare** | Ripristino possibile a livello di VM completa, disco virtuale singolo o file unitario. |
| **Offloading S3 Multi-AZ** | Trasferimento verso lo storage oggetto S3 Cloud Temple replicato tra zone di disponibilità. |

Le velocità di backup e ripristino dipendono dal tasso di cambiamento negli ambienti. La politica di backup è completamente configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

| Riferimento                                    | Unità | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Accesso al servizio                 | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Architettura tecnica del backup

#### Panoramica

L'architettura si basa su una netta separazione tra il **piano di controllo** e il **piano dati**: l'orchestratore di backup è ospitato nel cluster di gestione di Cloud Temple (distinto e inaccessibile al cliente), mentre i dati di backup sono archiviati su un archivio S3 remoto, fisicamente separato dall'infrastruttura di produzione. I dati transitano cifrati tra i due componenti.

#### Orchestratore di backup

L'orchestratore è distribuito nel cluster di management di Cloud Temple, **inaccessibile direttamente al cliente**. Orchestra tutti i job di backup e gestisce la crittografia.

- **Politiche standard** : le politiche di backup vengono applicate per impostazione predefinita a ogni tenant.
- **Politiche personalizzate** : il cliente può richiedere frequenze o retention specifiche tramite un ticket di supporto nella console Cloud Temple.

#### Archiviazione remota S3

I backup vengono inviati all'[Archiviazione Oggetti qualificata SecNumCloud](../storage/oss) di Cloud Temple, con replicazione Multi-AZ per garantire la resilienza in caso di perdita di un intero sito fisico.

---

### Meccanismo di backup: Incremental Backup

Il servizio utilizza una modalità di backup **incrementale**. Questa modalità indirizza un **Backup Repository** (l'archiviazione S3 remota) e non esporta mai un backup completo dopo il primo: vengono trasferiti solo i **blocchi di dati modificati** ad ogni ciclo.

:::info[Backup incrementale vs Replicazione]
Il **backup incrementale** punta a un archivio S3 remoto ed è ottimizzato per la **protezione a lungo termine**. Non deve essere confusa con la **replicazione** (Disaster Recovery in caldo) che punta a un Storage Repository locale — questa modalità è coperta dalla funzionalità di [replicazione di macchine virtuali](#réplication-de-machines-virtuelles).
:::

#### Ciclo di vita tecnico di un backup incrementale

Ecco le fasi successive attivate ad ogni esecuzione di un job di backup:

**1. Creazione dello snapshot locale (Source)**

All'avvio del job, l'orchestratore richiede all'iperviseur di creare uno snapshot della VM. Questo snapshot funge da punto di riferimento per calcolare il delta rispetto allo snapshot di riferimento precedente.

**2. Esportazione differenziale tramite Changed Block Tracking (CBT)**

L'orchestratore confronta il nuovo snapshot con lo snapshot di riferimento precedente tramite le metadati CBT. Vengono estratti solo i blocchi di dati modificati dall'ultimo backup — non l'intero disco.

**3. Crittografia e trasferimento verso S3**

I blocchi modificati vengono **crittografati al volo dall'orchestratore** e inviati tramite HTTPS/TLS 1.3 al bucket S3 remoto.

**4. Rotazione degli snapshot (Coalesce)**

Una volta validato il trasferimento, lo snapshot di riferimento precedente viene eliminato e il nuovo snapshot diventa il riferimento per il ciclo successivo. L'iperviseur attiva quindi un processo di **coalesce** (fusion) per reintegrare i dati del vecchio delta nella catena di dischi virtuali.

:::warning[Impatto I/O del Coalesce]
L'operazione di coalesce è **intensiva in I/O** sullo storage di produzione. Viene attivata automaticamente dopo ogni backup riuscito. Si consiglia di pianificare le finestre di backup durante i periodi di basso carico applicativo.
:::

**5. Gestione della retention su S3 (Merge) e Key Backup Interval**

Sullo storage S3, l'orchestratore gestisce la rotazione dei backup tramite **fusione** (*merge*) dei vecchi delta nel backup completo più vecchio conservato in base alla politica di retention.

Per garantire l'integrità della catena di backup, un backup completo viene **forzato periodicamente** (tipicamente ogni 20 incrementi — *Key Backup Interval*). Questo crea un nuovo punto di partenza pulito e limita l'impatto di un'eventuale corruzione di un anello della catena.

---

### Impatto sul dimensionamento dello storage di produzione

:::warning[Punto di attenzione critico — Storage a blocchi (Thick provisioning)]
L'offerta OpenIaaS si basa su storage a blocchi ad alte prestazioni (Fibre Channel / LVM). Gli snapshot utilizzati dal backup incrementale sono provisionati in modalità **Thick** : ogni snapshot consuma sul Storage Repository (SR) la **dimensione nominale completa del disco della VM**, e non solo il delta reale.

**Esempio di consumo per una VM con un disco da 50 Go :**

| Elemento | Consumo sul SR |
|---|---|
| Disco VM attivo | 50 Go |
| Snapshot di riferimento permanente (per il calcolo del delta) | 50 Go |
| Snapshot temporaneo creato durante l'export | 50 Go |
| **Totale richiesto durante la finestra di backup** | **fino a 150 Go** |

**Regola di dimensionamento consigliata** : prevedere **al minimo il 50% di spazio libero** sullo storage di produzione rispetto al volume totale delle VM backuppate, per supportare questo sovraccarico intrinseco allo storage a blocchi ad alte prestazioni.
:::

---

### Sicurezza e crittografia dei backup

#### Crittografia in transito

Tutte le comunicazioni tra l'orchestratore di backup e lo storage S3 sono crittografate tramite **HTTPS / TLS 1.3**.

#### Crittografia a riposo (At Rest) e gestione delle chiavi

La crittografia viene applicata dall'orchestratore di backup, **prima** dell'invio dei dati verso S3.

| Parametro | Valore |
|---|---|
| **Algoritmo** | AES-256 o ChaCha20-Poly1305 |
| **Generazione della chiave** | Automatica al deployment dell'orchestratore di backup |
| **Archiviazione della chiave** | Vault centralizzato Cloud Temple (mai esposto nell'interfaccia client) |
| **Resilienza** | In caso di perdita dell'orchestratore, la chiave viene reiniettata dal Vault per ripristinare il servizio |

#### Isolamento di rete (architettura SecNumCloud)

L'infrastruttura di backup è progettata per essere **completamente isolata** rispetto agli ambienti client :

- **Separazione fisica** : le reti *Client*, *Amministrazione* e *Backup* si basano su backbone fisici distinti e contesti di routing (VRF) separati.
- **Impossibilità di infezione laterale** : una VM compromessa non può raggiungere lo storage S3 né l'orchestratore di backup — non esiste alcun percorso di rete tra di essi. S3 non viene mai « montato » nella VM.

#### Amministrazione sicura

L'amministrazione della piattaforma di backup è **riservata ai team Backup di Cloud Temple** ed è soggetta ai requisiti SecNumCloud:

| Controllo | Misura |
|---|---|
| **Bastion di accesso** | Passaggio obbligatorio tramite un bastion di amministrazione interno hardeningizzato (Ubuntu Hardened) |
| **Postazione di lavoro** | Accesso consentito esclusivamente da laptop di amministrazione dedicati e sicuri |
| **Autenticazione** | MFA obbligatoria tramite un annuario LDAP di amministrazione dedicato (distinto dal LDAP per ufficio) |

---

### Monitoraggio e audit

- **Log di backup** : visibili dal cliente direttamente nella Console Cloud Temple — stato (successo/errore), volumetria, timestamp.
- **Log di accesso amministratore** : gli accessi alle infrastrutture di backup (orchestratore, S3) sono registrati e **sottoposti ad audit mensilmente** per rilevare eventuali anomalie.
- **Test di intrusione (Pentest PASSI)** : l'infrastruttura è oggetto di pentest regolari da parte di fornitori qualificati PASSI nell'ambito del mantenimento della qualifica SecNumCloud.
- **Sicurezza fisica** : tutte le apparecchiature sono ospitate nelle zone SecNumCloud (gabbie fisiche dedicate con controllo accessi biometrico) dei datacenter Cloud Temple.

---

### Compatibilità e casi particolari

:::warning[VMs con scritture disco continue]
Alcune macchine virtuali non sono compatibili con questa tecnologia di backup quando i loro **carichi di scrittura su disco sono costanti** (database attivi, log transazionali, ecc.). L'iperviseur non può quindi completare l'istantanea senza congelare la VM, operazione che può durare diverse ore.

Per questi carichi di lavoro, consigliamo di **completare o sostituire il backup a livello di iperviseur con un backup applicativo**: dump del database (pg_dump, mysqldump...), backup tramite agent, o esportazione nativa dell'applicazione.
:::

---

### Creazione di una politica di backup

La creazione di una politica di backup è un'operazione di amministrazione eseguita **esclusivamente tramite una richiesta di supporto**, accessibile tramite l'icona del salvagente in alto a destra nell'interfaccia.

La richiesta deve specificare:

- Il nome della vostra Organizzazione
- I dati di contatto (email et téléphone) di un referente per completare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Le caratteristiche desiderate: frequenza, conservazione (x jours, y semaines, z mois…)

#### Vincoli di pianificazione

| Vincolo | Valore |
|---|---|
| **Intervallo minimo tra due esecuzioni** | 24 ore |
| **Ritenzione massima** | 24 mesi |
| **Esecuzioni simultanee per policy** | 1 sola alla volta |

:::warning[Una policy può essere eseguita una sola volta alla volta]
Ogni policy di backup è **mono-istanza** : una sola esecuzione può essere attiva contemporaneamente.

**Conseguenza pratica** : se si aggiungono molte macchine virtuali a una policy esistente e il backup della notte precedente non è ancora terminato al momento dell'avvio pianificato, **il nuovo ciclo non partirà** — verrà ignorato fino alla prossima occorrenza.

Per evitare questo scenario :
- verificare le **durate di esecuzione** dei propri job dai log della Console Cloud Temple,
- regolare la **frequenza** o le **dimensioni della policy** se i backup si sovrappongono regolarmente alla finestra successiva,
- valutare di **distribuire le VM su più policy** con orari sfalsati per i grandi perimetri.
:::

:::info[Ritenzione a lungo termine — disponibilità futura]
**La ritenzione massima è attualmente di 24 mesi.** Una ritenzione a lungo termine (fino a 10 anni) sarà integrata con il lancio del nostro prodotto **Glacier**, previsto per il **primo trimestre 2027**, sotto forma di abbonamento aggiuntivo.

Per durate di ritenzione così lunghe, consigliamo di eseguire il backup **esclusivamente di file piatti** (file grezzi, documenti statici) nonché di **dump di database**. Il ripristino di un server completo dopo 10 anni comporta infatti rischi significativi : molti servizi o dipendenze potrebbero essere diventati obsoleti o incompatibili con l'ambiente attuale.

**Alternativa disponibile da subito** : il servizio di **backup tramite agent**, disponibile in abbonamento aggiuntivo. Contattare il supporto per ulteriori informazioni.
:::

## Le macchine virtuali

### Gestione delle risorse vCPU

Le modifiche alle risorse vCPU vengono effettuate a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test positivi eseguiti su VM Linux dotate di 128 vCPU.

È importante notare che il supporto del sistema operativo guest costituisce un fattore determinante durante l'allocazione delle risorse. Un'allocazione che supera i limiti supportati dal sistema operativo può causare problemi di prestazioni significativi.

### Gestione delle risorse di memoria

Le modifiche alla memoria avvengono anche a freddo. I limiti sono i seguenti:

- 1,5 TiB con supporto per gli snapshot di memoria
- 8 TiB senza supporto per gli snapshot di memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM assegnata a Xen e al dominio di controllo)

La memoria effettivamente utilizzabile può essere limitata dal sistema operativo guest. Superare i limiti supportati dall'OS guest può causare un calo delle prestazioni.

### Gestione dei dischi

- La dimensione massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è 24

Non è possibile ridimensionare i dischi una volta creati. Per estendere la capacità di archiviazione, è necessario creare un nuovo disco.

### Strumenti per le macchine virtuali

Questi strumenti sono utilizzati per garantire un funzionamento ottimale delle macchine virtuali. Quando si desidera eseguire un'azione e uno di questi strumenti è necessario, verrà visualizzato un messaggio sulla console Cloud Temple.
Per installare questi strumenti, è possibile consultare i siti ufficiali di Xen Server per ottenere una procedura dettagliata in base al proprio sistema operativo.

#### Management Agent

Il Management Agent è un componente installato in ogni macchina virtuale. Consente all'iperviseur di gestire meglio la macchina disponendo di maggiori informazioni e permette di eseguire determinate operazioni in modo più efficiente.

#### Driver PV (Driver di paravirtualizzazione)

I driver PV sono driver installati nella macchina virtuale per migliorarne le prestazioni.
Senza questi driver, la macchina funziona, ma più lentamente. Inoltre, consentono alcune operazioni avanzate.
I driver PV sono installati nativamente sulla maggior parte dei kernel Linux attuali.

#### Strumenti

I Tools sono un insieme di componenti software che migliorano l'integrazione della macchina virtuale con l'infrastruttura di virtualizzazione.

## Cataloghi

Il catalogo consente di gestire tre tipi di elementi essenziali:

- Le immagini disco (ISO)
- I template di configurazione
- I template preinstallati di macchine virtuali

Nella vista dettagliata di un template di macchina virtuale, è possibile consultare informazioni cruciali come la posizione, il numero di dischi o il numero di adattatori di rete.

Quando il numero di dischi virtuali è indicato come 0, ciò significa che si tratta di un template di configurazione senza sistema operativo preinstallato, consentendoti così di distribuire il tuo ambiente personalizzato.

## Replicazione delle macchine virtuali

La __replicazione delle macchine virtuali__ di Cloud Temple garantisce la protezione e la continuità dei tuoi dati critici grazie a una copia automatizzata dei tuoi ambienti verso una zona di disponibilità separata. Questa funzionalità, integrata nativamente nel prodotto IaaS Open Source, soddisfa i requisiti più rigorosi di continuità operativa e disaster recovery.

### Una protezione automatizzata e sicura

La replicazione Cloud Temple si basa su un'infrastruttura __qualificata SecNumCloud__, garantendo:

- __Replicazione asincrona__ : Copia continua delle tue macchine virtuali senza impatto sulle prestazioni di produzione
- __Separazione geografica__ : Archiviazione delle repliche in una zona di disponibilità diversa da quella di origine
- __Automazione completa__ : Processo interamente automatizzato tramite la [Console Cloud Temple](../console/console.md)
- __Conformità normativa__ : Rispetto dei requisiti di backup e continuità operativa

### Vantaggi della replicazione

| Vantaggio                | Descrizione                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuità operativa   | Protezione dei servizi critici in caso di incidente maggiore sul sito principale.                                                          |
| Protezione geografica | Replicazione verso una zona di disponibilità distinta, che protegge da disastri localizzati.                                             |
| Flessibilità temporale  | Scelta dell'intervallo di replicazione in base alle proprie esigenze: da 1 minuto a 24 ore.                                                            |
| Semplicità di gestione   | Configurazione e monitoraggio completamente integrati nella Console Cloud Temple.                                                                |
| Conformità SecNumCloud  | Infrastruttura qualificata che garantisce il più alto livello di sicurezza per i dati sensibili.                                             |

### Configurazione della replica

#### Politiche di replicazione

La creazione di una politica di replicazione definisce i parametri di protezione delle tue macchine virtuali:

- __Destinazione__ : Selezione dell'archiviazione di destinazione nella zona di disponibilità di replicazione
- __Frequenza__ : Intervallo di replicazione adattato alle tue esigenze di recupero (RPO)
- __Ritenzione__ : Numero di punti di recupero conservati

#### Intervalli disponibili

| Intervallo              | Utilizzo consigliato                           | RPO (Perdita massima di dati) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1-59 minuti__         | Applicazioni critiche in tempo reale         | < 1 ora                     |
| __1-24 ore__            | Applicazioni aziendali e ambienti standard    | < 24 ore                    |

#### Associazione delle macchine virtuali

Una volta creata la policy, è possibile associare le macchine virtuali da proteggere :

- __Selezione semplice__ : Scelta delle VMs dall'interfaccia della Console
- __Validazione automatica__ : Verifica della compatibilità e dei prerequisiti
- __Attivazione immediata__ : Avvio automatico della replica dopo la configurazione

### Gestione delle repliche

#### Vista delle politiche

La Console Cloud Temple offre una visualizzazione centralizzata delle tue politiche di replica con:

- Nome e frequenza di ciascuna politica
- Zona di disponibilità di destinazione
- Pool e storage associati
- Azioni di gestione disponibili

#### Vista delle repliche

La tabella delle repliche consente di visualizzare:

- Nome delle macchine virtuali replicate
- Posizione di origine e destinazione
- Politica di replica associata
- Esportazione dei dati in formato CSV

### Buone pratiche

#### Raccomandazioni per tipo di carico di lavoro

- __Applicazioni critiche__ : Replicazione ogni 1-30 minuti per minimizzare la perdita di dati
- __Applicazioni aziendali__ : Replicazione oraria o ogni due ore in base alle esigenze
- __Ambienti di sviluppo__ : Replicazione giornaliera generalmente sufficiente

#### Pianificazione delle politiche

- Create politiche distinte in base alla criticità delle vostre applicazioni
- Assegnate nomi chiari alle politiche per facilitarne la gestione
- Verificate regolarmente lo stato delle vostre repliche dalla console
- Documentate la vostra strategia di replica per i vostri team

__Nota importante :__

*La replica non sostituisce una strategia di backup completa. Costituisce un complemento essenziale per garantire la continuità operativa in caso di incidente maggiore sul vostro sito principale.*

## Alta disponibilità

L'alta disponibilità consente di garantire la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.
Con l'alta disponibilità (HA), ogni host nel pool invia regolarmente segnali di vita ai propri peer tramite lo storage condiviso (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host è considerato guasto.

Un Block Storage designato come heartbeat significa che fungerà da base per verificare gli host che non rispondono più.

Affinché l'alta disponibilità sia configurata correttamente in un pool OpenIaaS, è indispensabile disporre di __almeno due host__ connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio in alta disponibilità:

#### Disabilitato

  L'alta disponibilità non è configurata. In caso di guasto dell'host, la macchina virtuale non verrà riavviata.

#### Riavvio

  In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente non appena saranno disponibili risorse nel pool. Le macchine virtuali configurate in modalità "riavvio" vengono gestite con priorità, prima di quelle configurate in modalità "best-effort".

#### Best-Effort  

  In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente solo se rimangono risorse disponibili dopo l'elaborazione di tutte le macchine virtuali configurate in modalità "restart". La modalità "Best-effort" effettua un solo tentativo, quindi se le risorse sono insufficienti, la macchina virtuale non verrà riavviata.