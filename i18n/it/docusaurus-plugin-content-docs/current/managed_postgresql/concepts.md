---
title: Concetti
sidebar_position: 1
---

# Concetti Chiave di PostgreSQL Gestito

Questa sezione presenta i concetti fondamentali del nostro servizio **PostgreSQL Gestito**. Comprendere questi principi vi aiuterà a sfruttare al meglio il vostro database gestito, allineando le sue capacità con le vostre esigenze applicative e i requisiti di sicurezza.

## Sovranità e Conformità SecNumCloud

Al centro della nostra offerta si trova la **sovranità digitale**. Il servizio PostgreSQL Gestito è interamente ospitato sull'infrastruttura Cloud Temple, qualificata **SecNumCloud 3.2** dall'ANSSI.

- **Hosting 100% in Francia**: I vostri dati rimangono sul territorio nazionale, al riparo dalle leggi extraterritoriali.
- **Conformità nativa**: La soluzione è progettata per soddisfare i requisiti normativi più severi (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source e Reversibilità**: Basandoci su standard aperti come PostgreSQL Community Server e Patroni, garantiamo l'assenza di dipendenza tecnologica (*vendor lock-in*) e la piena portabilità dei vostri dati.

## Architettura ad Alta Disponibilità: Patroni Cluster

Per gli ambienti distribuiti, il nostro servizio si basa su **Patroni Cluster** per offrire alta disponibilità senza perdita di dati.

- **Replica Sincrona**: A differenza della tradizionale replica asincrona, ogni transazione viene validata su tutti i nodi del cluster *prima* di essere confermata. Ciò garantisce un **Recovery Point Objective (RPO) di zero**: nessun dato validato può essere perso in caso di guasto.
- **Distribuzione Multi-AZ**: Il cluster è distribuito su tre Zone di Disponibilità (AZ) distinte. Il guasto di un intero datacenter non provoca alcuna interruzione del servizio né perdita di dati.
- **Failover Automatico**: In caso di incidente su un nodo, il traffico viene automaticamente reindirizzato verso i nodi sani, garantendo un **Recovery Time Objective (RTO) minimo**.

## Modelli di Distribuzione

Offriamo due modelli per adattarsi alla criticità dei vostri carichi di lavoro.

### 1. StandAlone

Questo modello distribuisce un'unica istanza del motore PostgreSQL.

- **Caso d'uso**: Questo modello di distribuzione è perfettamente adatto per applicazioni semplici, come i CMS, che utilizzano un unico endpoint per connettersi ai database.
- **Resilienza**: Sebbene si tratti di un'istanza unica, lo storage sottostante è replicato su 3 AZ, consentendo un riavvio automatico su un'altra AZ in caso di guasto hardware.
- **SLA**: 99,9% (al di fuori delle finestre di manutenzione).

### 2. Distributed

Questo modello distribuisce un **cluster Patroni di 3 istanze** del motore PostgreSQL, completato da un proxy **PgBouncer**.

- **Caso d'uso**: Questo modello di distribuzione è perfettamente adatto per applicazioni con accessi distribuiti, come applicazioni di dati o di business intelligence, che beneficiano dell'accesso in sola lettura senza impatto sull'ingestione dei dati.
- **Componenti**:
  - **3 Nodi PostgreSQL**: Un nodo primario di lettura-scrittura (RW) e due nodi secondari di sola lettura (RO).
  - **Proxy PgBouncer**: Un router intelligente che distribuisce le richieste. Invia le scritture al nodo primario e distribuisce le letture tra i nodi secondari (*read/write splitting*), ottimizzando così le prestazioni.
- **SLA**: 99,9% (al di fuori delle finestre di manutenzione).

> **Nota Importante**: Non è possibile modificare il modello di distribuzione di un cluster esistente (ad esempio, passare da *StandAlone* a *Distributed*). Questa operazione richiede la creazione di un nuovo cluster nel modello desiderato, tramite un ripristino PiTR.

## Backup e Ripristino (PITR)

La protezione dei vostri dati è garantita da una doppia strategia di backup.

1. **Backup Fisico (Point-in-Time Recovery - PITR)**:
    - Eseguiamo backup fisici completi giornalieri con `pg_basebackup` (senza interruzione del servizio).
    - I log di transazione (*WAL*) vengono archiviati continuamente.
    - Questa combinazione consente un ripristino "al secondo" fino al momento appena prima di un incidente.

2. **Backup Logico (`pg_dump`)**:
    - Vengono eseguite anche esportazioni logiche dei database.
    - Offrono una granularità fine per ripristinare o esportare un singolo database.

Tutti i backup sono cifrati a riposo e archiviati nel nostro Object Storage S3, anch'esso qualificato SecNumCloud.

## Sicurezza a Più Livelli

La sicurezza è integrata in ogni strato del servizio.

- **Isolamento di Rete**: Le istanze di database non sono **mai esposte su Internet**. L'accesso avviene esclusivamente tramite la rete privata del cliente.
- **Crittografia end-to-end**:
  - **In transito**: Tutte le connessioni (client al database e tra i nodi del cluster) sono cifrate in TLS 1.3.
  - **A riposo**: I dati su disco e i backup sono cifrati in AES-256.
- **Gestione degli Accessi**: L'autenticazione è sicura e i diritti sono gestiti secondo il principio del minimo privilegio.

## Servizio Gestito ("Zero Ops")

L'obiettivo di PostgreSQL Gestito è sollevarvi dalla complessità operativa. I nostri team assicurano:

- Il provisioning e la configurazione iniziale.
- La gestione completa del ciclo di vita: aggiornamenti minori, applicazione delle patch di sicurezza.
- Il monitoraggio 24/7 dell'infrastruttura e del servizio.
- La gestione e la verifica dei backup.

Questo consente ai vostri team di concentrarsi sullo sviluppo applicativo e sull'utilizzo dei dati.

## Politica delle Versioni e Ciclo di Vita

La comunità PostgreSQL pubblica versioni con supporto a lungo termine (LTS), che garantisce stabilità e prevedibilità. Il nostro servizio si basa su queste versioni per garantire la longevità della vostra infrastruttura.

| Versione | Tipo | Supportato fino a |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Aggiornamenti minori**: Le patch di sicurezza e le correzioni di bug vengono applicate dai nostri team in *rolling update* (nodo per nodo) per non causare alcuna interruzione del servizio.
- **Aggiornamenti maggiori**: Gli aggiornamenti di versione maggiore vengono pianificati in collaborazione con voi per allinearsi al vostro calendario.
- **Fine del supporto**: Vi notifichiamo almeno 180 giorni prima della fine del supporto di una versione LTS per pianificare la migrazione alla versione successiva.

## Dimensioni delle istanze

Le istanze ***StandAlone*** e ***Distributed*** sono disponibili in dimensioni predefinite:

| Dimensione | vCPU/nodo | RAM/nodo | Conn. Max | Working Set Max | DB Totale Max |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Micro** | 1 | **2.00 Gi** | **40** | **1-2 GiB** | **2-8 GiB** |
| **Small** | 1 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Medium** | 2 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Med-Large**| 2 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **Large** | 4 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **X-Large** | 4 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **2X-Large**| 8 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **3X-Large**| 8 | **32.00 Gi** | **500** | **16-40 GiB** | **64-128 GiB** |
| **4X-Large**| 16 | **32.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **5X-Large**| 16 | **64.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **6X-Large**| 32 | **128.00 Gi**| **500** | **64-160 GiB** | **256-512 GiB** |

> **Nota**: Lo storage viene provisionato separatamente e può essere aumentato a caldo (da 2Gi a 512Gi) (ma non ridotto, salvo ricreando una nuova istanza).
