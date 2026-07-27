---
title: Concetti
sidebar_position: 1
---

# Concetti Chiave di PostgreSQL Gestito

Questa sezione presenta i concetti fondamentali del nostro servizio **PostgreSQL Gestito**. Comprendere questi principi vi aiuterà a sfruttare al meglio il vostro database gestito, allineandone le capacità alle vostre esigenze applicative e ai requisiti di sicurezza.

## Sovranità e Conformità SecNumCloud

Al centro del nostro prodotto si trova la **sovranità digitale**. Il servizio PostgreSQL Gestito è interamente ospitato sull'infrastruttura Cloud Temple, qualificata **SecNumCloud 3.2** dall'ANSSI.

- **Hosting 100% in Francia** : I vostri dati rimangono sul territorio nazionale, al riparo dalle leggi extraterritoriali.
- **Conformità nativa** : La soluzione è progettata per soddisfare i requisiti normativi più rigorosi (GDPR, HDS, LPM, NIS2, PCI-DSS).
- **Open Source e Reversibilità** : Basandoci sull'operatore Kubernetes open source **CloudNative-PG (CNPG)** e **Barman**, garantiamo l'assenza di dipendenza tecnologica (*vendor lock-in*) e la portabilità totale dei vostri dati e configurazioni.

## Operatore CloudNative-PG (CNPG)

La gestione del ciclo di vita dei database PostgreSQL sulla nostra infrastruttura Kubernetes si basa su **CloudNative-PG (CNPG)**.

- **Deployment Dichiarativo** : La configurazione del vostro database avviene tramite le Custom Resource Definitions (CRD) di Kubernetes, consentendo un approccio Infrastructure-as-Code (IaC) tramite Terraform o Helm.
- **Alta Disponibilità Integrata** : CNPG gestisce automaticamente l'elezione del nodo primario e il failover (*failover*) in modo fluido.
- **Monitoraggio nativo** : Metriche dettagliate vengono esportate nativamente verso Prometheus, facilitando la creazione di dashboard Grafana.

## Modelli di Deployment

Offriamo tre modelli per adattarsi alla criticità dei vostri carichi di lavoro:

### 1. StandAlone

Questo modello distribuisce un'**istanza singola** del motore PostgreSQL.

- **Casi d'uso** : Sviluppo, staging o applicazioni che non richiedono alta disponibilità.
- **Resilienza** : Poiché lo storage sottostante è persistente e gestito da Kubernetes, il pod può essere riavviato automaticamente su un altro nodo in caso di guasto hardware dell'host.

### 2. Replica

Questo modello distribuisce un **cluster di 3 istanze** PostgreSQL (un primario, due repliche).

- **Replicazione Asincrona** : I dati vengono replicati in streaming continuo (asincrono). Questo offre eccellenti prestazioni garantendo al contempo una copia dei dati sulle repliche con un ritardo minimo.
- **Failover Automatico** : In caso di guasto del primario, CNPG promuove automaticamente la replica più aggiornata per garantire la continuità del servizio.

### 3. Aziendale

Questo modello distribuisce un **cluster di 3 istanze** PostgreSQL ottimizzato per l'**alta disponibilità critica**.

- **Replicazione Sincrona** : La replicazione è configurata in modo sincrono su almeno 2 nodi (`any 2`) con garanzia di durabilità (`dataDurability: preferred`). 
- **Durabilità** : Un `COMMIT` viene confermato all'applicazione solo se i dati sono stati effettivamente scritti sul primario E su un replica, garantendo che nessuna transazione validata venga persa in caso di guasto hardware, senza tuttavia bloccare il database se un nodo è temporaneamente non disponibile.

## Backup e Ripristino (PITR)

La protezione dei vostri dati è garantita dal plugin **Barman Cloud**, pienamente integrato nell'operatore.

1. **Archiviazione WAL continua** :
    - Ogni segmento del registro delle transazioni (*WAL*) viene archiviato in tempo reale su un Object Storage S3 qualificato SecNumCloud.
    - La compressione è ottimizzata (ex: `lz4` ou `gzip`) per ridurre il volume mantenendo al contempo buone prestazioni.

2. **Backup pianificati (`ScheduledBackup`)** :
    - I backup fisici completi vengono attivati in modo programmato (ex: tous les jours à 02h00).
    - Un backup iniziale viene eseguito immediatamente alla creazione del cluster.

Questi meccanismi combinati consentono il **Point-in-Time Recovery (PITR)** : la capacità di ripristinare l'intero server a una data e un'ora precise, proteggendo così da errori umani o corruzione dei dati.

## Sicurezza a Più Livelli

- **Isolamento di Rete** : Le istanze del database vengono distribuite in namespace dedicati e isolate sulla rete privata del cliente.
- **Crittografia** :
  - **In transito** : Connessioni crittografate con TLS.
  - **A riposo** : I dati di archiviazione e i backup su S3 sono crittografati.
- **Secrets Kubernetes** : Le credenziali di superutente e applicative vengono generate in modo sicuro e archiviate come Secrets Kubernetes, recuperabili secondo regole rigorose.

## Dimensioni delle istanze (T-shirt)

I database hanno limiti rigorosi (CPU e RAM) che corrispondono alla dimensione scelta.
I parametri interni di PostgreSQL (`shared_buffers`, `effective_cache_size`, `work_mem`, ecc.) sono **precalibrati** per ciascuna dimensione al fine di ottimizzare le prestazioni e garantire che il contenitore non raggiunga mai il limite di RAM (evitando così un OOMKill da parte di Kubernetes che interromperebbe bruscamente il servizio).

| Dimensione | CPU | Memoria | shared_buffers | effective_cache_size | work_mem | maintenance_work_mem | max_connections | pgbouncer_default_pool_size | pgbouncer_max_client_conn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1 Core | 4 Gb | 1024MB | 3072MB | 16MB | 128MB | 80 | 8 | 200 |
| **S** | 1 Core | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **M** | 2 Cores | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **L** | 2 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XL** | 4 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XXL** | 4 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **3XL** | 8 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **4XL** | 8 Cores | 64 Gb | 16384MB | 49152MB | 256MB | 2048MB | 500 | 25 | 500 |

> **Nota** : Le risorse *requests* (CPU e RAM) sono allocate al 50% dei *limits* configurati sopra.

## Versioni di PostgreSQL Supportate

Supportiamo tutte le versioni principali attualmente disponibili, consentendovi di scegliere in base alla compatibilità delle vostre applicazioni:

- **PostgreSQL 13, 14, 15, 16, 17 e 18**.

L'operatore CNPG gestisce gli aggiornamenti minori in modo fluido applicando una strategia di aggiornamento progressivo (*rolling update*).