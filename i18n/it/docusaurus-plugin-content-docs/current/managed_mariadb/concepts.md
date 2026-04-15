---
title: Concetti
sidebar_position: 1
---

# Concetti Chiave di MariaDB Gestito

Questa sezione presenta i concetti fondamentali del nostro servizio **MariaDB Gestito**. Comprendere questi principi vi aiuterà a sfruttare al meglio il vostro database gestito, allineando le sue capacità alle vostre esigenze applicative e ai requisiti di sicurezza.

## Sovranità e Conformità SecNumCloud

Al centro della nostra offerta si trova la **sovranità digitale**. Il servizio MariaDB Gestito è interamente ospitato sull'infrastruttura Cloud Temple, qualificata **SecNumCloud 3.2** dall'ANSSI.

- **Hosting 100% in Francia**: I vostri dati rimangono sul territorio nazionale, al riparo dalle leggi extraterritoriali.
- **Conformità nativa**: La soluzione è progettata per soddisfare i requisiti normativi più stringenti (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source e Reversibilità**: Basandoci su standard aperti come MariaDB Community Server e Galera, garantiamo l'assenza di dipendenza tecnologica (*vendor lock-in*) e una portabilità totale dei vostri dati.

## Architettura ad Alta Disponibilità: Galera Cluster + MaxScale

Per gli ambienti distribuiti, il nostro servizio si basa su **Galera Cluster** per offrire alta disponibilità senza perdita di dati.

- **Replicazione Sincrona**: A differenza della tradizionale replicazione asincrona, ogni transazione viene validata su tutti i nodi del cluster *prima* di essere confermata. Ciò garantisce un **Recovery Point Objective (RPO) pari a zero**: nessun dato validato può essere perso in caso di guasto.
- **Distribuzione Multi-AZ**: Il cluster è distribuito su tre Zone di Disponibilità (AZ) distinte. Il guasto di un intero datacenter non provoca alcuna interruzione del servizio né perdita di dati.
- **Failover Automatico**: In caso di incidente su un nodo, il traffico viene automaticamente reindirizzato verso i nodi sani, garantendo un **Recovery Time Objective (RTO) minimo**.
- **Proxy MaxScale**: MaxScale è un proxy, router e load balancer avanzato per MariaDB. Gestisce il failover automatico nella replicazione, bilancia le richieste (scritture verso il primary, letture verso le replicas tramite ReadWriteSplit) e offre filtri per cache, audit (QLAfilter) o sicurezza (RegexFilter).

## Modelli di Deployment

Proponiamo due modelli per adattarsi alla criticità dei vostri carichi di lavoro.

### 1. StandAlone

Questo modello distribuisce un'istanza singola del motore MariaDB.

- **Caso d'uso**: Questo modello di deployment è perfetto per applicazioni semplici, come CMS, che utilizzano un unico endpoint per connettersi ai database.
- **Resilienza**: Sebbene si tratti di un'istanza singola, lo storage sottostante è replicato su 3 AZ, consentendo un riavvio automatico su un'altra AZ in caso di guasto hardware.
- **SLA**: 99,9% (escludendo le finestre di manutenzione).

### 2. Distributed

Questo modello distribuisce un **cluster Galera di 3 istanze** del motore MariaDB, completato da un proxy **MaxScale**.

- **Caso d'uso**: Questo modello di deployment è perfetto per applicazioni con accessi distribuiti, come applicazioni di data o business intelligence, che beneficiano di accessi in sola lettura senza impatto sull'ingestione dei dati.
- **Componenti**:
  - **3 Nodi MariaDB**: Un nodo primario in lettura-scrittura (RW) e due nodi secondari in sola lettura (RO).
  - **Proxy MaxScale**: Un router intelligente che distribuisce le richieste. Invia le scritture al nodo primario e distribuisce le letture su tutti i nodi (`ReadWriteSplit`), ottimizzando così le prestazioni.
- **SLA**: 99,9% (escludendo le finestre di manutenzione).

> **Nota Importante**: Non è possibile modificare il modello di deployment di un cluster esistente (ad esempio, passare da *StandAlone* a *Distributed*). Questa operazione richiede la creazione di un nuovo cluster nel modello desiderato, tramite un ripristino.

## Backup e Ripristino (PITR)

La protezione dei vostri dati è garantita da una doppia strategia di backup.

1. **Backup Fisico e Point-in-Time Recovery**:
    - Eseguiamo backup fisici completi giornalieri (`mariabackup`) (senza interruzione del servizio).
    - Con la versione **distributed**, i log delle transazioni (*binary logs*) vengono archiviati in modo continuo. Questa combinazione consente un ripristino PiTR fino al momento immediatamente precedente a un incidente.

2. **Backup Logico (`mysqldump`)**:
    - Vengono effettuati anche export logici dei database.
    - Offrono una granularità fine per ripristinare o esportare un singolo database.

Tutti i backup sono cifrati a riposo e archiviati nel nostro Object Storage S3, anch'esso qualificato SecNumCloud.

## Sicurezza a Più Livelli

La sicurezza è integrata in ogni livello del servizio.

- **Isolamento di Rete**: Le istanze di database non sono **mai esposte su Internet**. L'accesso avviene esclusivamente tramite la rete privata del cliente.
- **Cifratura end-to-end**:
  - **In transito**: Tutte le connessioni (client verso database e tra i nodi del cluster) sono cifrate con TLS 1.3.
  - **A riposo**: I dati su disco (tablespace InnoDB) e i backup sono cifrati con AES-256.
- **Gestione degli Accessi**: L'autenticazione è protetta (plugin `ed25519` o `sha256_password`), e i permessi sono gestiti secondo il principio del minimo privilegio.

## Servizio Gestito ("Zero Ops")

L'obiettivo di MariaDB Gestito è sollevarvi dalla complessità operativa. I nostri team si occupano di:

- Il provisioning e la configurazione iniziale.
- La gestione completa del ciclo di vita: aggiornamenti minori, applicazione delle patch di sicurezza.
- Il monitoraggio 24/7 dell'infrastruttura e del servizio.
- La gestione e la verifica dei backup.

Questo consente ai vostri team di concentrarsi sullo sviluppo applicativo e sull'utilizzo dei propri dati.

## Politica delle versioni e ciclo di vita

La fondazione MariaDB pubblica versioni con supporto a lungo termine (LTS), il che garantisce stabilità e prevedibilità. Il nostro servizio si basa su queste versioni per assicurare la longevità della vostra infrastruttura.

| Versione | Tipo | Supportata fino a |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Maggio 2029 |
| **MariaDB 11.8** | LTS | Giugno 2028 |

- **Aggiornamenti minori**: Le patch di sicurezza e le correzioni di bug vengono applicate dai nostri team tramite *rolling update* (nodo per nodo) per non causare alcuna interruzione del servizio.
- **Aggiornamenti maggiori**: Gli aggiornamenti di versione principali vengono pianificati in collaborazione con voi per allinearsi al vostro calendario.
- **Fine del supporto**: Vi notifichiamo almeno 180 giorni prima della fine del supporto di una versione LTS per pianificare la migrazione alla versione successiva.

## Dimensioni delle istanze

Le istanze ***StandAlone*** e ***Distributed*** sono disponibili in dimensioni predefinite:

| Dimensione | vCPU/nodo | RAM/nodo | Max Conn | Working Set Max | DB Totale Max |
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

> **Nota**: Lo storage viene provisionato separatamente e può essere aumentato a caldo (da 2 Gi a 512 Gi) (ma non ridotto, se non ricreando una nuova istanza).
