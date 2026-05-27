---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per soddisfare le esigenze critiche di continuità e ripresa delle attività, con un focus particolare su settori esigenti come l'industria, il settore bancario e quello assicurativo. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una massima disponibilità e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo : __CISCO UCS__.
- Archiviazione : __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi, e __DELL ECS__ per l'archiviazione di oggetti.
- Rete : __JUNIPER__.
- Virtualizzazione : __Stack Opensource__, che offre una base affidabile e collaudata per gestire i vostri ambienti cloud.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce un'ampia compatibilità con i principali editori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie ad API e un provider Terraform, il prodotto IaaS di Cloud Temple offre un'infrastruttura unica:

- __Risorse dedicate__ : Le blade di calcolo, i volumi di archiviazione e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- __Massima prevedibilità__ : Controllate i rapporti di virtualizzazione, il carico di IOPS sull'archiviazione e beneficiate di una fatturazione chiara, a consumo mensile.

La piattaforma è certificata __SecNumCloud__ dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e on-demand.
- Archiviazione on-demand (plusieurs classes disponibles).
- Risorse di rete (Internet, réseaux privés).
- Backup incrociati con retention configurabile.
- Replicazione asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite [Console](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Hosting dei dati in Francia e conformità al GDPR.                                                                                              |
| Sicurezza           | Piattaforma altamente sicura, qualificata __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ e __ISAE 3402 type II__.          |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, finestre di manutenzione incluse.                                   |
| Resilienza          | Implementazione di piani di continuità operativa o di ripristino in base alle esigenze.                                                        |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                   |
| On demand           | Risorse disponibili su richiesta.                                                                                                              |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS è distribuito in una zona di disponibilità.
Una zona di disponibilità fa parte di una regione.

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di ripartirli su diverse zone di disponibilità (AZ).
Ciò offre un migliore bilanciamento del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino (DRP) in caso di incidente.

---

## Classi di blade di calcolo

Le blade di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diverse esigenze:

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 x NVIDIA L40S 48Go |

### Note

- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle blade e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso di rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, il prodotto include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'alta disponibilità su un cluster è disponibile solo a partire da 2 nodi.

La disponibilità dell'infrastruttura è garantita al 99.9%, misurata mensilmente, finestre di manutenzione incluse. Qualsiasi richiesta relativa al SLA deve essere segnalata tramite un ticket di incidente.

---

## Classi di storage in modalità block

Lo storage a blocchi distribuito, basato su __IBM Spectrum Virtualize__, offre una gamma di prestazioni adatte a diversi casi d'uso:

| Riferimento                       | IOPS/TB        | IOPS massime / Volume     | Larghezza di banda massima / Volume | Utilizzo principale                    |
|-----------------------------------|----------------|---------------------------|-------------------------------------|----------------------------------------|
| **FLASH - Essenziale**            | 500            | 10 000 IOPS               | 512 MB/s                            | Carichi di lavoro leggeri              |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                           | Carichi di lavoro standard             |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                           | Carichi di lavoro intensivi            |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                           | Carichi di lavoro critici              |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                           | Carichi di lavoro ultra-intensivi      |
| **MASS STORAGE - Archiviazione**  | Non applicabile| Non garantito             | Non garantito                       | Storage economico per l'archiviazione  |

### Caratteristiche

- **Prestazioni** : Le prestazioni effettive crescono in modo lineare in base alla capacità allocata (secondo il rapporto IOPS/TB), **entro il limite del massimo hardware assoluto definito sopra**. (Ad esempio, un volume da 10 TB in classe Ultra sarà fisicamente limitato a 30.000 IOPS e 1024 MB/s).
- __Tecnologia__ : Flash NVMe con __Distributed RAID 6__ per una maggiore resilienza.
- __Disponibilità__ : 99.99%, misurata mensilmente.
- __Limitazioni__ : Nessun limite per le operazioni di lettura o scrittura. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo completo dei volumi riservati.

### Sicurezza e Crittografia dello Storage a Blocchi

Per garantire la riservatezza dei vostri dati a riposo, l'intera infrastruttura di storage a blocchi integra una crittografia hardware robusta.

- __Tipo di Crittografia__ : I dati vengono crittografati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo __XTS-AES 256__.
- __Conformità__ : Questo metodo di crittografia è conforme allo standard __FIPS 1-40-2__, garantendo un elevato livello di sicurezza validato.
- __Funzionamento__ : La crittografia viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning[Attenzione alla replicazione]
È importante notare che questa crittografia protegge i dati archiviati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono crittografati durante le operazioni di replicazione dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

---

## Le reti

Il prodotto OpenIaaS è compatibile con [le reti private](../network/private_network) e [l'accesso a Internet](../network/internet).

Due tipi di reti sono disponibili nella configurazione di una macchina virtuale.

### Le reti di tipo VLAN

Le reti di tipo VLAN devono essere propagate con un VLAN per scheda di rete. Se si desidera utilizzare più reti, è sufficiente creare più schede di rete.

È presente un limite sul numero massimo di schede che è possibile creare su una VM, pari a 7.

### Il VLAN TRUNK

Nel caso in cui dobbiate trasportare più di 7 VLAN, è necessario utilizzare il VLAN Trunk.
Il VLAN Trunk consente di far transitare tutti i VLAN su una singola scheda di rete. La configurazione degli ID VLAN deve essere effettuata tramite interfacce virtuali di tipo VLAN dall'OS della VM. Gli ID VLAN sono gli stessi di quelli presenti e visibili dalla console.

## Backup delle macchine virtuali

L'offerta OpenIaaS integra __un'architettura di backup distribuita nativa e non disattivabile__, elemento obbligatorio nell'ambito della qualificazione SecNumCloud francese.

I backup vengono memorizzati sul [Stockage Objet qualifié SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di guasto grave del datacenter di produzione. Questo approccio consente di ripristinare i vostri dati su un datacenter secondario, anche in caso di incidente critico come un incendio.

### Servizi di protezione dei dati disponibili

| Servizio | Descrizione |
|---|---|
| **Backup incrementale (Agentless)** | Backup senza agente tramite i meccanismi nativi dell'ipervisore, verso un repository S3 remoto. |
| **Backup dei metadati** | Protezione delle configurazioni del pool di virtualizzazione e dell'orchestratore di backup — indispensabile per il Disaster Recovery. |
| **Ripristino granulare** | Ripristino possibile a livello di VM completa, disco virtuale individuale o file singolo. |
| **Offloading S3 Multi-AZ** | Esternalizzazione verso lo storage a oggetti S3 Cloud Temple replicato tra zone di disponibilità. |

Le velocità di backup e ripristino dipendono dal tasso di cambiamento negli ambienti. La politica di backup è completamente configurabile da [la Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

| Riferimento                                    | Unità | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Accesso al servizio                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Architettura tecnica del backup

#### Panoramica

L'architettura si basa su una separazione rigorosa tra il **piano di controllo** e il **piano dati** : l'orchestratore di backup è ospitato nel cluster di gestione di Cloud Temple (distinto e inaccessibile al cliente), mentre i dati di backup sono archiviati in un repository S3 remoto, fisicamente separato dall'infrastruttura di produzione. I dati transitano crittografati tra i due componenti.

#### Orchestratore di backup

L'orchestratore è distribuito nel cluster di gestione di Cloud Temple, **inaccessibile direttamente al cliente**. Esso orchestra tutti i job di backup e gestisce la crittografia.

- **Politiche standard** : le politiche di backup vengono applicate per impostazione predefinita a ciascun tenant.
- **Politiche personalizzate** : il cliente può richiedere frequenze o ritenzioni specifiche tramite un ticket di supporto nella console Cloud Temple.

#### Archiviazione remota S3

I backup vengono inviati al [Stockage Objet qualifié SecNumCloud](../storage/oss) di Cloud Temple, con replicazione Multi-AZ per garantire la resilienza in caso di perdita di un intero sito fisico.

---

### Meccanismo di backup: Incremental Backup

Il servizio utilizza una modalità di backup **incrementale**. Questa modalità punta a un **Backup Repository** (lo storage S3 remoto) e non esporta mai un backup completo dopo il primo: solo i **blocchi di dati modificati** vengono trasferiti a ogni ciclo.

:::info[Backup incrementale vs Replicazione]
Il **backup incrementale** punta a un repository S3 remoto ed è ottimizzato per la **protezione a lungo termine**. Non deve essere confuso con la **replicazione** (Disaster Recovery a caldo) che punta a un Storage Repository locale — questa modalità è coperta dalla funzionalità di [replicazione delle macchine virtuali](#réplication-de-machines-virtuelles).
:::

#### Ciclo di vita tecnico di un backup incrementale

Di seguito sono riportati i passaggi successivi attivati ad ogni esecuzione di un job di backup:

**1. Creazione dello snapshot locale (Source)**

All'avvio del job, l'orchestratore richiede all'ipervisore di creare uno snapshot della VM. Questo snapshot funge da punto di confronto per calcolare il delta rispetto allo snapshot di riferimento precedente.

**2. Esportazione differenziale tramite Changed Block Tracking (CBT)**

L'orchestratore confronta il nuovo snapshot con lo snapshot di riferimento precedente tramite i metadati CBT. Vengono estratti solo i blocchi di dati modificati dall'ultimo backup — non l'intero disco.

**3. Crittografia e trasferimento verso S3**

I blocchi modificati vengono **crittografati in tempo reale dall'orchestratore** e quindi inviati tramite HTTPS/TLS 1.3 al bucket S3 remoto.

**4. Rotazione degli snapshot (Coalesce)**

Una volta convalidato il trasferimento, il vecchio snapshot di riferimento viene eliminato e il nuovo snapshot diventa il riferimento per il ciclo successivo. L'ipervisore attiva quindi un processo di **coalesce** (fusion) per reintegrare i dati del vecchio delta nella catena dei dischi virtuali.

:::warning[Impact I/O du Coalesce]
L'operazione di coalesce è **intensiva in termini di I/O** sullo storage di produzione. Viene attivata automaticamente dopo ogni backup riuscito. Si consiglia di pianificare le finestre di backup durante i periodi di basso carico applicativo.
:::

**5. Gestione della ritenzione su S3 (Merge) e Key Backup Interval**

Sullo storage S3, l'orchestratore gestisce la rotazione dei backup tramite **fusione** (*merge*) dei vecchi delta nel backup completo più antico conservato in base alla politica di ritenzione.

Per garantire l'integrità della catena di backup, un backup completo viene **forzato periodicamente** (typiquement tous les 20 incréments — *Key Backup Interval*). Questo crea un nuovo punto di partenza pulito e limita l'impatto di una potenziale corruzione di un anello della catena.

---

### Impatto sul dimensionamento dello storage di produzione

:::warning[Punto di attenzione critico — Storage a blocchi (Thick provisioning)]
L'offerta OpenIaaS si basa su storage a blocchi ad alte prestazioni (Fibre Channel / LVM). I snapshot utilizzati dal backup incrementale sono provisionati in modalità **Thick** : ogni snapshot consuma sul Storage Repository (SR) la **dimensione nominale completa del disco della VM**, e non solo il delta effettivo.

**Esempio di consumo per una VM con un disco da 50 Go :**

| Elemento | Consumo sul SR |
|---|---|
| Disco VM attivo | 50 Go |
| Snapshot di riferimento permanente (per il calcolo del delta) | 50 Go |
| Snapshot temporaneo creato durante l'esportazione | 50 Go |
| **Totale richiesto durante la finestra di backup** | **fino a 150 Go** |

**Regola di dimensionamento consigliata** : prevedere **almeno il 50% di spazio libero** sullo storage di produzione rispetto al volume totale delle VM sottoposte a backup, per supportare questo sovraccarico intrinseco allo storage a blocchi ad alte prestazioni.
:::

---

### Sicurezza e crittografia dei backup

#### Crittografia in transito

Tutte le comunicazioni tra l'orchestratore di backup e l'archiviazione S3 sono crittografate tramite **HTTPS / TLS 1.3**.

#### Crittografia a riposo (At Rest) e gestione delle chiavi

La crittografia viene applicata dall'orchestratore di backup, **prima** dell'invio dei dati verso S3.

| Parametro | Valore |
|---|---|
| **Algoritmo** | AES-256 o ChaCha20-Poly1305 |
| **Generazione della chiave** | Automatica al deployment dell'orchestratore di backup |
| **Archiviazione della chiave** | Vault centralizzato Cloud Temple (mai esposto nell'interfaccia client) |
| **Resilienza** | In caso di perdita dell'orchestratore, la chiave viene reimpostata dal Vault per ripristinare il servizio |

#### Isolamento di rete (architettura SecNumCloud)

L'infrastruttura di backup è progettata per essere **strettamente isolata** rispetto agli ambienti client :

- **Separazione fisica** : le reti *Client*, *Amministrazione* e *Backup* si basano su backbones fisici distinti e contesti di routing (VRF) separati.
- **Impossibilità di infezione laterale** : una VM compromessa non può raggiungere lo storage S3 né l'orchestratore di backup — non esiste alcun percorso di rete tra di essi. Lo S3 non viene mai « montato » nella VM.

#### Amministrazione sicura

L'amministrazione della piattaforma di backup è **riservata ai team Backup di Cloud Temple** e soggetta ai requisiti SecNumCloud:

| Controllo | Misura |
|---|---|
| **Bastione di accesso** | Transito obbligatorio tramite un bastione di amministrazione interno hardened (Ubuntu Hardened) |
| **Postazione di lavoro** | Accesso esclusivamente da laptop di amministrazione dedicati e sicuri |
| **Autenticazione** | MFA obbligatorio tramite un directory LDAP di amministrazione dedicato (distinto dall'LDAP aziendale) |

---

### Monitoraggio e audit

- **Log di backup** : visibili al cliente direttamente nella Console Cloud Temple — stato (successo/fallimento), volumetria, timestamp.
- **Log di accesso amministratore** : gli accessi alle infrastrutture di backup (orchestratore, S3) vengono registrati e **sottoposti a audit mensili** per rilevare eventuali anomalie.
- **Test di intrusione (Pentest PASSI)** : l'infrastruttura è sottoposta a pentest regolari da parte di fornitori qualificati PASSI nell'ambito del mantenimento della qualificazione SecNumCloud.
- **Sicurezza fisica** : tutti gli equipment sono ospitati nelle zone SecNumCloud (gabbie fisiche dedicate con controllo degli accessi biometrico) dei datacenter Cloud Temple.

---

### Compatibilità e casi particolari

:::warning[VM con scritture su disco continue]
Alcune macchine virtuali non sono compatibili con questa tecnologia di backup quando i loro **carichi di scrittura su disco sono costanti** (bases de données actives, journaux transactionnels, etc.). L'ipervisore non può quindi finalizzare lo snapshot senza congelare la VM, il che può richiedere diverse ore.

Per questi carichi di lavoro, consigliamo di **completare o sostituire il backup dell'ipervisore con un backup applicativo** : dump del database (pg_dump, mysqldump…), backup tramite agente, o export nativo dell'applicazione.
:::

---

### Creazione di una politica di backup

La creazione di una politica di backup è un'operazione di amministrazione eseguita **esclusivamente tramite una richiesta di supporto**, accessibile tramite l'icona del salvagente in alto a destra dell'interfaccia.

La richiesta deve specificare :

- Il nome della vostra Organizzazione
- I recapiti di un contatto (email e telefono) per finalizzare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Le caratteristiche desiderate : frequenza, ritenzione (x giorni, y settimane, z mesi…)

#### Vincoli di pianificazione

| Vincolo | Valore |
|---|---|
| **Intervallo minimo tra due esecuzioni** | 24 ore |
| **Ritenzione massima** | 24 mesi |
| **Esecuzioni simultanee per policy** | 1 sola alla volta |

:::warning[Une politique ne peut tourner qu'une seule fois à la fois]
Ogni policy di backup è **mono-istanza**: una sola esecuzione può essere attiva contemporaneamente.

**Conseguenza pratica**: se si aggiungono numerose macchine virtuali a una policy esistente e il backup del giorno precedente non è ancora terminato al momento dell'attivazione pianificata, **il nuovo ciclo non partirà** — verrà ignorato fino alla prossima occorrenza.

Per evitare questa situazione:
- verificare le **durate di esecuzione** dei propri job dai log della Console Cloud Temple,
- regolare la **frequenza** o la **dimensione della policy** se i backup si sovrappongono regolarmente alla finestra successiva,
- valutare di **distribuire le VM su più policy** con orari sfalsati per i perimetri più ampi.
:::

:::info[Rétention longue durée — disponibilité future]
**La ritenzione massima è attualmente di 24 mesi.** Una ritenzione a lungo termine (fino a 10 anni) verrà integrata con il lancio del nostro prodotto **Glacier**, previsto per il **primo trimestre 2027**, sotto forma di abbonamento aggiuntivo.

Per durate di ritenzione così lunghe, raccomandiamo di eseguire il backup **esclusivamente di file piatti** (file grezzi, documenti statici) nonché di **dump dei database**. Il ripristino di un server completo dopo 10 anni comporta infatti rischi significativi: molti servizi o dipendenze potrebbero essere diventati obsoleti o incompatibili con l'ambiente attuale.

**Alternativa disponibile subito**: il servizio di **backup tramite agente**, disponibile come abbonamento aggiuntivo. Contattare il supporto per ulteriori informazioni.
:::

## Le macchine virtuali

### Gestione delle risorse vCPU

Le modifiche alle risorse vCPU vengono eseguite a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test soddisfacenti eseguiti su VM Linux dotate di 128 vCPU.

È importante notare che il supporto del sistema operativo guest costituisce un fattore determinante durante l'allocazione delle risorse. Un'allocazione che supera i limiti supportati dal sistema operativo può causare problemi di prestazioni significativi.

### Gestione delle risorse di memoria

Le modifiche alla memoria vengono eseguite anche a freddo. I limiti sono i seguenti:

- 1,5 TiB con supporto per gli snapshot di memoria
- 8 TiB senza supporto per gli snapshot di memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM allocata a Xen e al dominio di controllo)

La memoria effettivamente utilizzabile può essere limitata dal sistema operativo guest. Superare i limiti supportati dal sistema operativo guest può causare un calo delle prestazioni.

### Gestione dei dischi

- La dimensione massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per estendere la capacità di archiviazione, è necessario creare un nuovo disco.

### Strumenti per le macchine virtuali

Questi strumenti vengono utilizzati per garantire un funzionamento ottimale delle macchine virtuali. Quando si desidera eseguire un'azione e uno di questi strumenti è necessario, verrà visualizzato un messaggio sulla console Cloud Temple.
Per installare questi strumenti, è possibile consultare i siti ufficiali di Xen Server per ottenere una procedura dettagliata in base al proprio OS.

#### Management Agent

L'Agente di gestione è un componente installato in ogni macchina virtuale. Consente all'ipervisore di gestire meglio la macchina grazie all'accesso a ulteriori informazioni e permette di eseguire determinate azioni in modo più pulito.

#### PV Drivers (Paravirtualization Drivers)

I driver PV sono dei driver installati nella macchina virtuale per migliorarne le prestazioni.
Senza questi driver, la macchina funziona, ma più lentamente. Inoltre, consentono determinate operazioni avanzate.
I driver PV sono installati nativamente sulla maggior parte dei kernel Linux attuali.

#### Strumenti

Gli Strumenti sono un insieme di componenti software che migliorano l'integrazione della macchina virtuale con l'infrastruttura di virtualizzazione.

## Cataloghi

Il catalogo consente di gestire tre tipi di elementi essenziali:

- Le immagini disco (ISO)
- I template di configurazione
- I template preinstallati di macchine virtuali

Nella vista dettagliata di un template di macchina virtuale, è possibile consultare informazioni cruciali come l'ubicazione, il numero di dischi o ancora il numero di adattatori di rete.

Quando il numero di dischi virtuali è indicato come 0, ciò significa che si tratta di un template di configurazione senza sistema operativo preinstallato, permettendovi così di distribuire il vostro ambiente personalizzato.

## Replicazione di macchine virtuali

La __replicazione di macchine virtuali__ di Cloud Temple garantisce la protezione e la continuità dei vostri dati critici grazie a una copia automatizzata dei vostri ambienti verso una zona di disponibilità separata. Questa funzionalità, integrata nativamente nel prodotto IaaS Open Source, soddisfa i requisiti più rigorosi di continuità operativa e disaster recovery.

### Una protezione automatizzata e sicura

La replicazione Cloud Temple si basa su un'infrastruttura __qualificata SecNumCloud__, garantendo :

- __Replicazione asincrona__ : Copia continua delle vostre macchine virtuali senza impatto sulle prestazioni di produzione
- __Separazione geografica__ : Archiviazione dei replicati in una zona di disponibilità diversa dalla sorgente
- __Automazione completa__ : Processo interamente automatizzato tramite la [Console Cloud Temple](../console/console.md)
- __Conformità normativa__ : Rispetto dei requisiti di backup e continuità operativa

### Vantaggi della replicazione

| Vantaggio                | Descrizione                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuità operativa   | Protezione dei vostri servizi critici in caso di incidente maggiore sul sito principale.                                                          |
| Protezione geografica | Replicazione verso una zona di disponibilità separata, a protezione da disastri localizzati.                                             |
| Flessibilità temporale  | Scelta dell'intervallo di replicazione in base alle vostre esigenze: da 15 minuti a 24 ore.                                                          |
| Semplicità di gestione   | Configurazione e monitoraggio completamente integrati nella Console Cloud Temple.                                                                |
| Conformità SecNumCloud  | Infrastruttura qualificata che garantisce il più alto livello di sicurezza per i vostri dati sensibili.                                             |

### Configurazione della replicazione

#### Politiche di replicazione

La creazione di una politica di replicazione definisce i parametri di protezione delle vostre macchine virtuali :

- __Destinazione__ : Selezione dell'archiviazione di destinazione nella zona di disponibilità di replicazione
- __Frequenza__ : Intervallo di replicazione adattato alle vostre esigenze di recupero (RPO)
- __Retenzione__ : Numero di punti di recupero conservati

#### Intervalli disponibili

| Intervallo              | Utilizzo consigliato                           | RPO (Perdita massima di dati) |
|-------------------------|--------------------------------------------|-----------------------------|
| __15 a 59 minuti__     | Applicazioni critiche in tempo reale         | < 1 ora                   |
| __1 a 24 ore__       | Applicazioni aziendali e ambienti standard | < 24 ore               |

:::warning[RPO: obiettivo non garantito contrattualmente]
L'intervallo di replica configurato (ad esempio 15 minuti) costituisce un **obiettivo RPO (Recovery Point Objective)**, e non un impegno contrattuale.

L'RPO effettivamente raggiunto dipende direttamente dal **tasso di cambiamento (change rate)** dei dati sulle macchine virtuali replicate. Se il volume di dati modificati tra due cicli di replica è troppo elevato, il trasferimento potrebbe non completarsi entro l'intervallo configurato. In tal caso, il ciclo successivo non inizierà fino al completamento di quello precedente, prolungando di fatto l'RPO reale.

**In sintesi:**
- L'RPO minimo configurabile è di **15 minuti**.
- Questo RPO è raggiungibile solo se il tasso di cambiamento dei dati rimane compatibile con la banda di replica disponibile.
- **Nessun SLA è associato all'RPO**: si tratta di un obiettivo « best effort » il cui rispetto dipende dalle caratteristiche del carico di lavoro.
- Per i carichi di lavoro con elevato tasso di scrittura (database, log transazionali, ecc.), si consiglia di prevedere un intervallo di replica più ampio e di integrarlo con una strategia di backup applicativo.
:::

#### Associazione delle macchine virtuali

Una volta creata la policy, è possibile associare le macchine virtuali da proteggere :

- __Selezione semplice__ : Scelta delle VMs dall'interfaccia della Console
- __Validazione automatica__ : Verifica della compatibilità e dei prerequisiti
- __Attivazione immediata__ : Avvio automatico della replicazione dopo la configurazione

### Gestione delle repliche

#### Vista delle policy

La Console Cloud Temple offre una vista centralizzata delle vostre policy di replica con:

- Nome e frequenza di ciascuna policy
- Zona di disponibilità di destinazione
- Pool e storage associati
- Azioni di gestione disponibili

#### Vista delle repliche

La tabella delle repliche consente di visualizzare:

- Nome delle macchine virtuali replicate
- Posizione di origine e di destinazione
- Politica di replica associata
- Esportazione dei dati in formato CSV

### Buone pratiche

#### Raccomandazioni per tipo di carico

- __Applicazioni critiche__ : Replicazione ogni 15-30 minuti per minimizzare la perdita di dati
- __Applicazioni aziendali__ : Replicazione oraria o bis-oraria in base alle esigenze
- __Ambienti di sviluppo__ : Replicazione giornaliera generalmente sufficiente

#### Pianificazione delle politiche

- Create politiche distinte in base alla criticità delle vostre applicazioni
- Denominate chiaramente le vostre politiche per facilitarne la gestione
- Verificate regolarmente lo stato delle vostre repliche dalla console
- Documentate la vostra strategia di replicazione per i vostri team

__Nota importante :__

*La replicazione non sostituisce una strategia di backup completa. Costituisce un complemento essenziale per garantire la continuità operativa in caso di incidente maggiore sul sito principale.*

## Alta disponibilità

L'alta disponibilità consente di garantire la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.
Con l'alta disponibilità (HA), ogni host nel pool invia regolarmente segnali di vita ai suoi pari tramite lo storage condiviso (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host viene considerato guasto.

Un Block Storage designato come heartbeat significa che fungerà da riferimento per verificare lo stato degli host che non dovessero più rispondere.

Affinché l'alta disponibilità sia configurata correttamente in un pool OpenIaaS, è indispensabile disporre di __almeno due host__ connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio per l'alta disponibilità:

#### Disabled

  L'alta disponibilità non è configurata. In caso di guasto dell'host, la macchina virtuale non verrà riavviata.

#### Riavvio

  In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente non appena saranno disponibili risorse nel pool. Le macchine virtuali configurate in modalità "restart" vengono gestite con priorità, prima di quelle configurate in modalità "best-effort".

#### Best-Effort  

  In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente solo se rimangono risorse disponibili dopo l'elaborazione di tutte le macchine virtuali configurate in modalità "restart". La modalità "Best-effort" effettua un solo tentativo, quindi se le risorse sono insufficienti, la macchina virtuale non verrà riavviata.