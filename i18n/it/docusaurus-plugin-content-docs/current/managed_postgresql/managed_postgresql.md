---
title: Panoramica
---

# PostgreSQL Gestito (anteprima)

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scoprite le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
    <a href="managed_postgresql/concepts" class="card-link">Esplora i concetti &rarr;</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Iniziate rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="managed_postgresql/quickstart" class="card-link">Avvia il Quickstart &rarr;</a>
  </div>
</div>

---

### Panoramica
>
> Questo prodotto è in versione di anteprima e la sua documentazione può contenere errori o approssimazioni.

**PostgreSQL Gestito (on Kubernetes) by Cloud Temple** è una soluzione di motore di database PostgreSQL gestito, ospitata su Kubernetes. Integra le offerte di motore di database gestito su macchine virtuali (qui denominate **PostgreSQL Gestito (on IaaS)**)

Questa offerta è adatta ai clienti con carichi di lavoro Kubernetes che richiedono database PostgreSQL, o ai clienti che desiderano consolidare molti motori di database PostgreSQL su un unico cluster Kubernetes (consolidamento). È particolarmente adatta per database di piccole e medie dimensioni che non richiedono tuning o funzionalità specifiche. Per database di grandi dimensioni o che richiedono un tuning particolare, è preferibile optare per l'offerta **PostgreSQL Gestito (on IaaS)**, che consente maggiori adattamenti da parte dei nostri team di esperti DBA.

### Vantaggi Chiave

- **Sovranità e Reversibilità**: La soluzione si basa esclusivamente su standard open source per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni.
- **Semplicità e delega**: La soluzione permette di delegare a Cloud-Temple la gestione dei motori di database, in particolare: aggiornamenti e backup.

## Modelli di Distribuzione

Offriamo due modelli di distribuzione per soddisfare le vostre esigenze: ***StandAlone*** o ***Distributed***.

### StandAlone

Il modello ***StandAlone*** distribuisce un'unica istanza del motore PostgreSQL in un'infrastruttura multi-AZ.

Lo storage utilizzato da questa istanza è replicato su 3 AZ e consente il riavvio automatico dell'istanza PostgreSQL su un'altra AZ in caso di guasto.

- **Caso d'uso**: Questo modello di distribuzione è perfettamente adatto per applicazioni semplici, come i CMS, che utilizzano un unico endpoint per connettersi ai database.
- **Punti chiave**:
  - 1 istanza del motore di database
  - storage distribuito su 3 AZ per il ripristino automatico in caso di guasto
  - backup fisici e logici
  - SLA 99,9% (al di fuori delle finestre di manutenzione)

### Distributed

Il modello ***Distributed*** distribuisce un cluster di 3 istanze del motore PostgreSQL, con Patroni in modalità "single primary" e PgBouncer:

- un endpoint PgBouncer consente il routing verso le diverse istanze in base al tipo di richiesta (lettura o scrittura).
- l'istanza di lettura-scrittura (RW) è accessibile tramite un endpoint specifico.
- Le istanze di sola lettura (RO) sono accessibili tramite un altro endpoint specifico.

Pertanto, le applicazioni possono scegliere di utilizzare connessioni RW o RO, o lasciare che PgBouncer indirizzi autonomamente verso gli endpoint più appropriati.

- **Caso d'uso**: Questo modello di distribuzione è perfettamente adatto per applicazioni con accessi distribuiti, come applicazioni di dati o di business intelligence, che beneficiano dell'accesso in sola lettura senza impatto sull'ingestione dei dati.
- **Punti chiave**:
  - 3 istanze del motore di database con Patroni in modalità "single primary"
  - Proxy PgBouncer per un routing efficiente delle query.
  - storage distribuito su 3 AZ per il ripristino automatico in caso di guasto
  - backup PiTR e Logici
  - SLA 99,9% (al di fuori delle finestre di manutenzione)

### Funzionalità comuni

#### Versioni

I motori PostgreSQL possono essere scelti tra tutte le versioni supportate (attualmente dalla 14 alla 18) [Vedere "versioning policy" sul sito ufficiale di PostgreSQL](https://www.postgresql.org/support/versioning/)

#### Backup

Vengono implementati 2 tipi di backup:

- Point in Time Restoration (PiTR): backup fisico giornaliero dell'intero motore e dei suoi log di transazione (WAL), che consente di ripristinare l'intero server a una data precisa precedente senza perdere transazioni.
- Backup logico (pg_dump): esportazioni logiche dei database, per il ripristino/esportazione individuale per database.

Tutti i backup utilizzano lo storage S3 di Cloud-Temple (qualificato SNC) con crittografia a riposo.
