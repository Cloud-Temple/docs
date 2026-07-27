---
title: Panoramica
---

# PostgreSQL Gestito <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Esplora i concetti →</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Inizia rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Avvia il Quickstart →</a>
  </div>
</div>

---

### Panoramica

**PostgreSQL Gestito (on Kubernetes) by Cloud Temple** è una soluzione gestita per il motore di database PostgreSQL, ospitata su Kubernetes e basata sull'operatore **CloudNative-PG (CNPG)**. Si integra con le offerte di motori di database gestiti su macchine virtuali (nommées ici **PostgreSQL Managé (on IaaS)**).

Questo prodotto è adatto per i clienti che dispongono di carichi di lavoro Kubernetes che richiedono database PostgreSQL, o per i clienti che desiderano consolidare numerosi motori di database PostgreSQL sullo stesso cluster Kubernetes. È particolarmente indicato per i database che non richiedono un tuning di sistema ultra-specifico. Per i database di dimensioni molto elevate che necessitano di configurazioni del sistema operativo particolari, è preferibile optare per il prodotto **PostgreSQL Managé (on IaaS)**.

### Benefici Chiave

- **Sovranità e Reversibilità** : La soluzione si basa esclusivamente su standard open source (CNPG, Barman) per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni.
- **Semplicità e delega** : La soluzione consente di delegare a Cloud Temple la gestione del ciclo di vita dei motori di database: provisioning, aggiornamenti e backup continui.

## Modelli di Deployment

Offriamo tre modelli di deployment per soddisfare le vostre esigenze, dai test di sviluppo all'alta disponibilità critica:

### StandAlone

Il modello ***StandAlone*** distribuisce un'istanza singola del motore PostgreSQL.

- **Casi d'uso** : Questo modello è ideale per lo sviluppo, gli ambienti di staging o le applicazioni semplici che non richiedono alta disponibilità.
- **Punti chiave** :
  - 1 sola istanza del database.
  - Nessuna alta disponibilità a livello di motore (anche se Kubernetes può riavviare il pod in caso di guasto del nodo).
  - Backup continui (Barman Cloud).

### Replica

Il modello ***Replica*** distribuisce un cluster di 3 istanze del motore PostgreSQL con replicazione in streaming (asincrona).

- **Caso d'uso** : Questo modello offre un'alta disponibilità standard per la maggior parte delle applicazioni di produzione, dove un leggero ritardo (qualche millisecondo) tra il primario e le repliche è accettabile.
- **Punti chiave** :
  - 3 istanze di database.
  - Replicazione asincrona (alta disponibilità).
  - Failover automatico gestito dall'operatore CNPG.

### Impresa

Il modello ***Impresa*** distribuisce un cluster di 3 istanze del motore PostgreSQL con **replicazione sincrona** e garanzia di durabilità dei dati.

- **Caso d'uso** : Progettato per carichi di lavoro critici in cui non è tollerata alcuna perdita di dati in caso di guasto hardware.
- **Punti chiave** :
  - 3 istanze di database.
  - Replicazione sincrona configurata per garantire che almeno 2 repliche abbiano reso persistenti i dati prima di confermare un `COMMIT` (modalità *preferred* per evitare il blocco se una replica è indisponibile).
  - Massima garanzia di consistenza e durabilità.

## Tipi di Motore Disponibili

La soluzione consente di distribuire diversi tipi di istanze PostgreSQL in base alle vostre esigenze:

- **PostgreSQL standard** : Il motore di database relazionale classico.
- **TimescaleDB** : PostgreSQL con l'estensione TimescaleDB per la gestione ottimizzata delle serie temporali (Time-Series).
- **PostGIS** : PostgreSQL con l'estensione spaziale PostGIS per i dati geografici.

## Funzionalità comuni

#### Versioni

I motori PostgreSQL sono disponibili in tutte le versioni maggiori supportate (attualmente dalla versione **13 a 18**).
Le estensioni come `pg-crash`, `pgaudit`, `pgvector` e `postgis` sono disponibili all'interno delle immagini.

#### Backup

I backup sono gestiti in modo nativo dal plugin **Barman Cloud** integrato nell'operatore :

- **Archiviazione WAL continua** : Ogni segmento del registro delle transazioni (WAL) viene archiviato in tempo reale nel nostro storage S3 certificato SecNumCloud.
- **Backup pianificati** : I backup completi (Point-in-Time Recovery) vengono eseguiti periodicamente in base alle vostre esigenze di retention.
- **Sicurezza** : Tutti i dati di backup vengono compressi e archiviati sulla nostra infrastruttura S3 sicura con crittografia.