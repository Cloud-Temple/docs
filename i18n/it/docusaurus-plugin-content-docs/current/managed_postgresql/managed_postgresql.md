---
title: Panoramica
---

# PostgreSQL Gestito <span class="title-preview-badge">Anteprima</span>

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Esplora i concetti &rarr;</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Inizia rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Avvia la guida rapida &rarr;</a>
  </div>
</div>

---

### Panoramica
>
> Questo prodotto è in versione preliminare e la sua documentazione potrebbe contenere errori o imprecisioni.

**PostgreSQL Managé (on Kubernetes) by Cloud Temple** è una soluzione gestita per il motore di database PostgreSQL, ospitata su Kubernetes. Si integra come complemento alle offerte di motori di database gestiti su macchine virtuali (nommées ici **PostgreSQL Managé (on IaaS)**)

Questo prodotto è adatto per i clienti che dispongono di carichi di lavoro Kubernetes che richiedono database PostgreSQL, o per i clienti che desiderano condividere più motori di database PostgreSQL sullo stesso cluster Kubernetes (mutualisation). Si adatta particolarmente bene a database di piccole e medie dimensioni che non richiedono ottimizzazioni o funzionalità specifiche. Per database di grandi dimensioni o che necessitano di ottimizzazioni particolari, è consigliabile optare per il prodotto **PostgreSQL Managé (on IaaS)**, che consente maggiori adattamenti da parte dei nostri team di esperti DBA.

### Vantaggi Chiave

- **Sovranità e Reversibilità** : La soluzione si basa esclusivamente su standard open source per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni.
- **Semplicità e delega** : La soluzione consente di delegare a Cloud-Temple la gestione dei motori di database, in particolare: aggiornamenti e backup.

## Modelli di Distribuzione

Offriamo due modelli di distribuzione per soddisfare le vostre esigenze:  ***StandAlone*** o ***Distributed***.

### StandAlone

Il modello ***StandAlone*** distribuisce un'istanza singola del motore PostgreSQL in un'infrastruttura multi-AZ.

Lo storage utilizzato da questa istanza è replicato su 3 AZ e consente il riavvio automatico dell'istanza PostgreSQL su un'altra AZ in caso di guasto.

- **Caso d'uso** : Questo modello di distribuzione è ideale per applicazioni semplici, come i CMS, che utilizzano un singolo endpoint per connettersi ai database.
- **Punti chiave** :
  - 1 istanza del motore di database
  - storage distribuito su 3 AZ per il ripristino automatico in caso di guasto
  - backup fisici e logici
  - SLA 99,9 % (esclusi i periodi di manutenzione)

### Distribuito

Il modello ***Distribuito*** implementa un cluster di 3 istanze del motore PostgreSQL, con Patroni in modalità "single primary" e PgBouncer:

- un endpoint PgBouncer consente il routing verso le diverse istanze in base al tipo di query (lettura o scrittura).
- l'istanza in lettura-scrittura (RW) è accessibile tramite un endpoint specifico.
- Le istanze in sola lettura (RO) sono accessibili tramite un altro endpoint specifico.

Di conseguenza, i client applicativi possono scegliere di utilizzare connessioni RW o RO, oppure lasciare che PgBouncer instradi automaticamente verso gli endpoint più adatti.

- **Caso d'uso** : Questo modello di distribuzione è ideale per le applicazioni con accessi distribuiti, come le applicazioni di data o business intelligence, che beneficiano di accessi in sola lettura senza impattare sull'ingestione dei dati.
- **Punti chiave** :
  - 3 Istanze del motore di database con Patroni in modalità "single primary"
  - Proxy PgBouncer per un routing efficiente delle query.
  - Storage distribuito su 3 AZ per un ripristino automatico in caso di guasto
  - Backup PiTR e Logici
  - SLA 99.9 % (escluse le finestre di manutenzione)

### Funzionalità comuni

#### Versioni

I motori PostgreSQL possono essere scelti tra tutte le versioni supportate (attualmente dalla 14 alla 18) [Vedi la "politica di versioning" sul sito ufficiale PostgreSQL](https://www.postgresql.org/support/versioning/)

#### Backup

Sono implementati 2 tipi di backup:

- Point in Time Recovery (PITR) : backup fisico giornaliero dell'intero motore e dei suoi log delle transazioni (WAL), che consente di ripristinare l'intero server a una data specifica precedente senza perdita di transazioni.
- Backup logico (pg_dump) : esportazioni logiche dei database, per un ripristino/esportazione individuale per database.

Tutti i backup utilizzano lo storage S3 Cloud-Temple (certificato SNC) con crittografia at-rest.