---
title: Concetti
sidebar_position: 1
---

# Concetti Chiave di MariaDB Gestito

Questa sezione presenta i concetti fondamentali del nostro servizio **MariaDB Gestito**. Comprendere questi principi vi aiuterà a sfruttare al meglio il vostro database gestito, allineandone le capacità alle vostre esigenze applicative e ai requisiti di sicurezza.

## Sovranità e Conformità SecNumCloud

Al centro del nostro prodotto vi è la **sovranità digitale**. Il servizio MariaDB Managé è interamente ospitato sull'infrastruttura Cloud Temple, certificata **SecNumCloud 3.2** dall'ANSSI.

- **Hosting 100% in Francia** : I vostri dati rimangono sul territorio nazionale, al riparo dalle leggi extraterritoriali.
- **Conformità nativa** : La soluzione è progettata per soddisfare i requisiti normativi più rigorosi (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source e Reversibilità** : Basandoci su standard aperti come MariaDB Community Server e Galera, garantiamo l'assenza di dipendenza tecnologica (*vendor lock-in*) e la portabilità totale dei vostri dati.

## Architettura ad Alta Disponibilità: Galera Cluster + MaxScale

Per gli ambienti distribuiti, il nostro prodotto si basa su **Galera Cluster** per offrire un'alta disponibilità senza perdita di dati.

- **Replicazione Sincrona** : A differenza della replicazione asincrona tradizionale, ogni transazione viene convalidata su tutti i nodi del cluster *prima* di essere confermata. Ciò garantisce un **Obiettivo di Punto di Ripristino (RPO) pari a zero** : nessun dato convalidato può andare perso in caso di guasto.
- **Distribuzione Multi-AZ** : Il cluster è distribuito su tre Zone di Disponibilità (AZ) distinte. Il guasto di un intero datacenter non provoca alcuna interruzione del servizio né perdita di dati.
- **Failover Automatico** : In caso di incidente su un nodo, il traffico viene automaticamente reindirizzato ai nodi sani, garantendo un **Obiettivo di Tempo di Ripristino (RTO) minimo**.
- **Proxy MaxScale** : MaxScale è un proxy, router e load balancer avanzato per MariaDB. Gestisce il failover automatico in replicazione, bilancia le richieste (scritture verso il primario, letture verso le repliche tramite ReadWriteSplit) e offre filtri per cache, audit (QLAfilter) o sicurezza (RegexFilter).

## Modelli di Deployment

Offriamo due modelli per adattarsi alla criticità dei vostri carichi di lavoro.

### 1. StandAlone

Questo modello distribuisce un'istanza singola del motore MariaDB.

- **Caso d'uso** : Questo modello di distribuzione è ideale per applicazioni semplici, come i CMS, che utilizzano un singolo endpoint per connettersi ai database.
- **Resilienza** : Sebbene si tratti di un'istanza singola, lo storage sottostante è replicato su 3 AZ, consentendo un riavvio automatico su un'altra AZ in caso di guasto hardware.
- **SLA** : 99.9% (esclusi i periodi di manutenzione).

### 2. MultiAZ

Questo modello distribuisce un **cluster Galera di 3 istanze** del motore MariaDB, integrato da un proxy **MaxScale**.

- **Caso d'uso** : Questo modello di distribuzione è ideale per le applicazioni con accessi distribuiti, come le applicazioni data o di business intelligence, che beneficiano di accessi in sola lettura senza impattare l'ingestione dei dati.
- **Componenti** :
  - **3 Nodi MariaDB** : Un nodo primario in lettura-scrittura (RW) e due nodi secondari in sola lettura (RO).
  - **Proxy MaxScale** : Un router intelligente che distribuisce le query. Invia le scritture al nodo primario e bilancia le letture su tutti i nodi (`ReadWriteSplit`), ottimizzando così le prestazioni.
- **SLA** : 99.9% (hors plages de maintenance).

> **Nota Importante** : Non è possibile modificare il modello di distribuzione di un cluster esistente (par exemple, de passer de *StandAlone* à *MultiAZ*). Questa operazione richiede la creazione di un nuovo cluster nel modello desiderato, tramite un ripristino.

## Backup e Ripristino

La protezione dei vostri dati è garantita da una doppia strategia di backup.

1. **Backup Fisico** :
    - Eseguiamo backup fisici completi quotidiani (`mariabackup`) (senza interruzione del servizio).

2. **Backup Logico (`mysqldump`)** :
    - Vengono inoltre effettuate esportazioni logiche dei database.
    - Offrono una granularità fine per ripristinare o esportare un singolo database.

Tutti i backup sono crittografati a riposo e archiviati sul nostro Object Storage S3, anch'esso certificato SecNumCloud.

## Sicurezza a Più Livelli

La sicurezza è integrata in ogni livello del servizio.

- **Isolamento di Rete** : Le istanze del database non sono **mai esposte su Internet**. L'accesso avviene esclusivamente tramite la rete privata del cliente.
- **Crittografia end-to-end** :
  - **In transito** : Tutte le connessioni (dal client al database e tra i nodi del cluster) sono crittografate con TLS 1.3.
  - **A riposo** : I dati su disco (tablespaces InnoDB) e i backup sono crittografati con AES-256.
- **Gestione degli Accessi** : L'autenticazione è sicura (plugin `ed25519` o `sha256_password`) e i permessi sono gestiti secondo il principio del privilegio minimo.

## Servizio Gestito ("Zero Ops")

L'obiettivo di MariaDB Gestito è liberarvi dalla complessità operativa. I nostri team si occupano di:

- Il provisioning e la configurazione iniziale.
- La gestione completa del ciclo di vita: aggiornamenti minori, applicazione delle patch di sicurezza.
- Il monitoraggio 24/7 dell'infrastruttura e del servizio.
- La gestione e la verifica dei backup.

Ciò consente ai vostri team di concentrarsi sullo sviluppo applicativo e sull'utilizzo dei propri dati.

## Politica delle versioni e ciclo di vita

La fondazione MariaDB pubblica versioni con supporto a lungo termine (LTS), garantendo stabilità e prevedibilità. Il nostro servizio si basa su queste versioni per garantire la longevità della vostra infrastruttura.

| Versione | Tipo | Supportato fino al |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Maggio 2029 |
| **MariaDB 11.8** | LTS | Giugno 2028 |

- **Aggiornamenti minori** : Le patch di sicurezza e le correzioni di bug vengono applicate dai nostri team tramite *rolling update* (nœud par nœud) per non causare alcuna interruzione del servizio.
- **Aggiornamenti maggiori** : I passaggi a versioni maggiori sono pianificati in collaborazione con voi per allinearsi al vostro calendario.
- **Fine del supporto** : Vi notifichiamo almeno 180 giorni prima della fine del supporto di una versione LTS per pianificare la migrazione alla versione successiva.

## Dimensioni delle istanze

Le istanze ***StandAlone*** e ***MultiAZ*** sono disponibili con dimensioni predefinite:

| Dimensione | vCPU | Memoria | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro** | 1 | 2 GB | 1200M | 1 | 128M | 400 |
| **Small** | 1 | 4 GB | 2458M | 2 | 256M | 800 |
| **Medium** | 2 | 4 GB | 2458M | 2 | 256M | 800 |
| **Med-Large** | 2 | 8 GB | 4915M | 4 | 512M | 1600 |
| **Large** | 4 | 8 GB | 4915M | 4 | 512M | 1600 |
| **X-Large** | 4 | 16 GB | 9830M | 8 | 1G | 3200 |
| **2X-Large** | 8 | 16 GB | 9830M | 8 | 1G | 3200 |
| **3X-Large** | 8 | 32 GB | 19660M | 16 | 1G | 6400 |
| **4X-Large** | 16 | 32 GB | 19660M | 16 | 1G | 10000 |
| **5X-Large** | 16 | 64 GB | 39320M | 16 | 1G | 10000 |
| **6X-Large** | 32 | 128 GB | 78640M | 16 | 1G | 10000 |


> **Nota** : Lo storage viene provisionato separatamente e può essere aumentato a caldo (minimo consigliato di 2Gi, fino a un massimo di 512Gi) (ma non ridotto, salvo ricreare una nuova istanza).

### Spiegazione dei parametri di dimensionamento

Le istanze MariaDB dispongono di limiti rigorosi in termini di CPU e RAM (OOMKill) gestiti da Kubernetes. Se un'istanza raggiunge il suo limite di memoria, viene riavviata, il che può causare un'interruzione del servizio e potenzialmente interrompere la replicazione di un cluster. Ecco perché i parametri sono impostati in base alla dimensione dell'istanza per evitare qualsiasi saturazione della RAM:

- **innodb_buffer_pool_size** : Questo buffer contiene le pagine di dati e gli indici in memoria. È consigliato operare in RAM per ottenere migliori prestazioni (limitazione degli I/O). Qui è impostato a circa il 60% della dimensione della RAM dell'istanza.
- **innodb_buffer_pool_instances** : Divide il buffer pool in più "istanze" per ridurre la contesa interna sui lock (quando ci sono molti thread CPU).
- **max_allowed_packet** : Dimensione massima di un pacchetto o risultato che è possibile inviare/ricevere in una query. Limite regolato in base alla dimensione dell'istanza per proteggere la memoria.
- **table_open_cache** : Numero di tabelle che MariaDB può mantenere aperte simultaneamente. Adattato in base alle connessioni.
> **Nota importante** : È fortemente sconsigliato attivare o utilizzare il `performance_schema` di MariaDB sulle istanze piccole (dimensioni inferiori a **X-Large**). Questo consuma risorse significative, in particolare RAM critica.