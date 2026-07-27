---
title: Panoramica
---

# MariaDB Gestito <span class="title-preview-badge">Anteprima</span>

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Esplora i concetti →</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Inizia rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Avvia il Quickstart →</a>
  </div>
</div>

---

### Panoramica

**MariaDB Managé (on Kubernetes) by Cloud Temple** è una soluzione gestita per il motore di database MariaDB, ospitata su Kubernetes. Si affianca alle offerte di motori di database gestiti su macchine virtuali (nommées ici **MariaDB Managé (on IaaS)**)

Questo prodotto è adatto per i clienti che dispongono di carichi di lavoro Kubernetes con database MariaDB/MySQL, o per i clienti che desiderano condividere numerosi motori di database MariaDB sullo stesso cluster Kubernetes (mutualisation). È particolarmente indicato per database di piccole e medie dimensioni che non richiedono tuning o funzionalità specifiche. Per database di grandi dimensioni o che necessitano di un tuning particolare, è preferibile optare per il prodotto **MariaDB Managé (on IaaS)**, che consente maggiori adattamenti da parte dei nostri team di esperti DBA.

I motori MariaDB possono essere scelti nella versione 11.4 LTS o 11.8 LTS.

Tutti i backup utilizzano lo storage S3 Cloud-Temple (qualifié SNC) con crittografia at-rest.

![Architecture stack](@site/docs/managed_mariadb/images/stack.png)

### Benefici Chiave

- **Sovranità e Reversibilità** : La soluzione si basa esclusivamente su standard open source per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni.
- **Semplicità e delega** : La soluzione consente di delegare a Cloud-Temple la gestione dei motori di database, in particolare: aggiornamenti e backup.

## Modelli di Deployment

Offriamo due modelli di deployment per soddisfare le vostre esigenze:  ***StandAlone*** o ***MultiAZ***.

### StandAlone

Il modello ***StandAlone*** distribuisce un'istanza singola del motore MariaDB in un'infrastruttura multi-AZ.

Lo storage utilizzato da questa istanza è replicato su 3 AZ e consente il riavvio automatico dell'istanza MariaDB su un'altra AZ in caso di guasto.

- **Casi d'uso** : Questo modello di distribuzione è ideale per applicazioni semplici, come i CMS, che utilizzano un singolo endpoint per connettersi ai database.
- **Punti chiave** :
  - 1 istanza del motore di database
  - storage distribuito su 3 AZ per il failover automatico in caso di guasto
  - backup fisici (`mariabackup`) e logici (`mysqldump`)
  - SLA 99.9 % (esclusi i periodi di manutenzione)

![Architecture StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### MultiAZ

Il modello ***MultiAZ*** distribuisce un cluster di 3 istanze del motore MariaDB, con Galera in modalità "single primary" e MaxScale:

- un endpoint MaxScale consente il routing verso le diverse istanze in base al tipo di query (read o write).
  ![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)
- l'istanza in lettura-scrittura (RW) è accessibile tramite un endpoint specifico.
- Le 2 istanze in sola lettura (RO) sono accessibili tramite un altro endpoint specifico.

In questo modo, le applicazioni possono scegliere di utilizzare connessioni RW o RO, oppure lasciare che MaxScale esegua il routing autonomamente verso gli endpoint più adatti.

- **Casi d'uso** : Questo modello di distribuzione è ideale per le applicazioni con accessi distribuiti, come le applicazioni per data o business intelligence, che beneficiano di accessi in sola lettura senza impattare l'ingestione dei dati.
- **Punti chiave** :
  - 3 istanze del motore di database con Galera in modalità "single primary"
  - Proxy MaxScale per un routing efficiente delle query.
  - archiviazione distribuita su 3 AZ per il failover automatico in caso di guasto
  - backup fisici (`mariabackup`) e logici (`mysqldump`)
  - SLA 99,9 % (esclusi i periodi di manutenzione)

![Architecture MultiAZ](@site/docs/managed_mariadb/images/Distributed.png)