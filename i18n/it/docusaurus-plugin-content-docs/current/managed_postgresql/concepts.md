---
title: Concetti
sidebar_position: 1
---

# Concetti Chiave di PostgreSQL Gestito

Questa sezione presenta i concetti fondamentali del nostro servizio **PostgreSQL Gestito**. Comprendere questi principi ti aiuterà a sfruttare al massimo il tuo database gestito, allineandone le capacità alle tue esigenze applicative e ai requisiti di sicurezza.

## Sovranità e Conformità SecNumCloud

Al centro del nostro prodotto vi è la **sovranità digitale**. Il servizio PostgreSQL gestito è interamente ospitato sull'infrastruttura Cloud Temple, certificata **SecNumCloud 3.2** dall'ANSSI.

- **Hosting 100% in Francia** : I vostri dati rimangono sul territorio nazionale, al riparo dalle leggi extraterritoriali.
- **Conformità nativa** : La soluzione è progettata per soddisfare i requisiti normativi più rigorosi (GDPR, HDS, LPM, NIS2, PCI-DSS).
- **Open Source e Reversibilità** : Basandoci su standard aperti come PostgreSQL Community Server e Patroni, garantiamo l'assenza di dipendenze tecnologiche (*vendor lock-in*) e una portabilità totale dei vostri dati.

## Architettura Alta Disponibilità : Patroni Cluster

Per gli ambienti distribuiti, il nostro prodotto si basa su **Patroni Cluster** per offrire un'alta disponibilità senza perdita di dati.

- **Replicazione Sincrona** : A differenza della replicazione asincrona tradizionale, ogni transazione viene confermata su tutti i nodi del cluster *prima* di essere accettata. Ciò garantisce un **Obiettivo di Punto di Recupero (RPO) pari a zero** : nessun dato confermato può andare perso in caso di guasto.
- **Distribuzione Multi-AZ** : Il cluster è distribuito su tre Zone di Disponibilità (AZ) distinte. Il guasto di un intero datacenter non causa interruzioni del servizio né perdita di dati.
- **Failover Automatico** : In caso di incidente su un nodo, il traffico viene reindirizzato automaticamente verso i nodi sani, garantendo un **Obiettivo di Tempo di Recupero (RTO) minimo** .

## Modelli di Distribuzione

Proponiamo due modelli per adattarsi alla criticità dei carichi di lavoro.

### 1. StandAlone

Questo modello distribuisce un'istanza singola del motore PostgreSQL.

- **Caso d'uso** : Questo modello di distribuzione è ideale per applicazioni semplici, come i CMS, che utilizzano un singolo endpoint per connettersi ai database.
- **Resilienza** : Sebbene si tratti di un'istanza singola, lo storage sottostante è replicato su 3 AZ, consentendo un riavvio automatico su un'altra AZ in caso di guasto hardware.
- **SLA** : 99,9% (escluse le finestre di manutenzione).

### 2. Distribuito

Questo modello distribuisce un **cluster Patroni di 3 istanze** del motore PostgreSQL, completato da un proxy **PgBouncer**.

- **Caso d'uso** : Questo modello di distribuzione è ideale per applicazioni con accessi distribuiti, come le applicazioni di data o business intelligence, che beneficiano di accessi in sola lettura senza impattare l'ingestione dei dati.
- **Componenti** :
  - **3 Nodi PostgreSQL** : Un nodo primario in lettura-scrittura (RW) e due nodi secondari in sola lettura (RO).
  - **Proxy PgBouncer** : Un router intelligente che distribuisce le query. Invia le scritture al nodo primario e ripartisce le letture sui nodi secondari (*read/write splitting*), ottimizzando così le prestazioni.
- **SLA** : 99,9% (escluse le finestre di manutenzione).

> **Nota Importante** : Non è possibile modificare il modello di distribuzione di un cluster esistente (ad esempio, passare da *StandAlone* a *Distributed*). Questa operazione richiede la creazione di un nuovo cluster nel modello desiderato, tramite un ripristino PiTR.

## Backup e Ripristino (PITR)

La protezione dei vostri dati è garantita da una doppia strategia di backup.

1. **Backup Fisico (Point-in-Time Recovery - PITR)** :
    - Eseguiamo backup fisici completi quotidiani con `pg_basebackup` (senza interruzione del servizio).
    - I log delle transazioni (*WAL*) sono archiviati in modo continuo.
    - Questa combinazione consente un ripristino con precisione al secondo fino al momento immediatamente precedente un incidente.

2. **Backup Logico (`pg_dump`)** :
    - Vengono inoltre eseguiti export logici dei database.
    - Offrono una granularità fine per ripristinare o esportare un singolo database.

Tutti i backup sono cifrati a riposo e archiviati sul nostro Object Storage S3, a sua volta qualificato SecNumCloud.

## Sicurezza a Più Livelli

La sicurezza è integrata a ogni livello del servizio.

- **Isolamento di Rete** : Le istanze del database non sono **mai esposte su Internet**. L'accesso avviene esclusivamente tramite la rete privata del client.
- **Crittografia End-to-End** :
  - **In transito** : Tutte le connessioni (dal client al database e tra i nodi del cluster) sono crittografate con TLS 1.3.
  - **A riposo** : I dati su disco e i backup sono crittografati con AES-256.
- **Gestione degli Accessi** : L'autenticazione è sicura e i permessi sono gestiti secondo il principio del minimo privilegio.

## Servizio Gestito ("Zéro Ops")

L'obiettivo di PostgreSQL Gestito è liberarvi dalla complessità operativa. I nostri team si occupano di:

- Il provisioning e la configurazione iniziale.
- La gestione completa del ciclo di vita: aggiornamenti minori, applicazione delle patch di sicurezza.
- Il monitoraggio 24/7 dell'infrastruttura e del servizio.
- La gestione e la verifica dei backup.

Ciò consente ai vostri team di concentrarsi sullo sviluppo applicativo e sull'utilizzo dei propri dati.

## Politica delle versioni & ciclo di vita

La comunità PostgreSQL rilascia versioni con supporto a lungo termine (LTS), garantendo stabilità e prevedibilità. Il nostro servizio si basa su queste versioni per assicurare la longevità della vostra infrastruttura.

| Versione | Tipo | Supportato fino a |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Aggiornamenti minori** : I patch di sicurezza e le correzioni dei bug vengono applicati dai nostri team in *rolling update* (nodo per nodo) per non causare alcuna interruzione del servizio.
- **Aggiornamenti maggiori** : I passaggi di versione maggiori vengono pianificati in collaborazione con voi per allinearsi al vostro calendario.
- **Fine del supporto** : Vi notifichiamo almeno 180 giorni prima della fine del supporto di una versione LTS per pianificare la migrazione alla versione successiva.

## Dimensioni delle istanze

Le istanze ***StandAlone*** et ***Distributed*** sono disponibili con dimensioni predefinite:

| Dimensione | vCPU | Memoria | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache | maxconn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1000m | 4096Mi | 2458M | 2 | 256M | 800 | 80 |
| **S** | 1000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **M** | 2000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **L** | 2000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XL** | 4000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XXL** | 4000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **3XL** | 8000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **4XL** | 8000m | 65536Mi | 39320M | 16 | 1G | 10000 | 500 |

> **Nota** : Lo storage è provisioning separato e può essere espanso a caldo (da 2Gi a 128Gi) (ma non ridotto, a meno di ricreare una nuova istanza.).