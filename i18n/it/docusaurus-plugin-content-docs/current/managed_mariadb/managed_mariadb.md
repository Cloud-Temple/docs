---
title: Panoramica
---

import stack from '@site/docs/managed_mariadb/images/stack.png'
import StandAlone from '@site/docs/managed_mariadb/images/StandAlone.png'
import Distributed from '@site/docs/managed_mariadb/images/Distributed.png'
import maxscale from '@site/docs/managed_mariadb/images/maxscale.png'

# MariaDB Gestito <span class="title-preview-badge">Anteprima</span>


<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri le basi e i principi fondamentali per padroneggiare la nostra infrastruttura.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Esplora i concetti &rarr;</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Inizia rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Avvia la guida rapida &rarr;</a>
  </div>
</div>

---

### Panoramica
>
> Questo prodotto è in versione preliminare e la sua documentazione potrebbe contenere errori o imprecisioni.

**MariaDB Managé (on Kubernetes) by Cloud Temple** è una soluzione gestita del motore di database MariaDB, ospitata su Kubernetes. Si affianca alle offerte di motori di database gestiti su macchine virtuali (denominate qui **MariaDB Managé (on IaaS)**)

Questo prodotto è adatto per i clienti che dispongono di carichi di lavoro Kubernetes con database MariaDB/MySQL, o per i clienti che desiderano condividere più motori di database MariaDB/PostgreSQL su uno stesso cluster Kubernetes (condivisione). Si adatta particolarmente bene ai database di piccole e medie dimensioni che non richiedono tuning o funzionalità specifiche. Per i database di grandi dimensioni o che richiedono un tuning particolare, è consigliabile optare per il prodotto **MariaDB Managé (on IaaS)**, che consente maggiori adattamenti da parte dei nostri team di esperti DBA.

I motori MariaDB possono essere selezionati nelle versioni 11.4 LTS o 11.8 LTS.

Tutti i backup utilizzano l'archiviazione S3 Cloud-Temple (certificata SNC) con crittografia at-rest.

![Architettura stack](@site/docs/managed_mariadb/images/stack.png)

### Vantaggi Chiave

- **Sovranità e Reversibilità** : La soluzione si basa esclusivamente su standard open source per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni.
- **Semplicità e delega** : La soluzione consente di delegare a Cloud-Temple la gestione dei motori di database, in particolare: aggiornamenti e backup.

## Modelli di Distribuzione

Offriamo due modelli di distribuzione per soddisfare le vostre esigenze:  ***StandAlone*** o ***Distributed***.

### StandAlone

Il modello ***StandAlone*** distribuisce un'istanza singola del motore MariaDB in un'infrastruttura multi-AZ.

Lo storage utilizzato da questa istanza è replicato su 3 AZ e consente il riavvio automatico dell'istanza MariaDB su un altro AZ in caso di guasto.

- **Caso d'uso**: Questo modello di distribuzione si adatta perfettamente ad applicazioni semplici, come i CMS, che utilizzano un unico endpoint per connettersi ai database.
- **Punti chiave**:
  - 1 istanza del motore del database
  - storage distribuito su 3 AZ per il ripristino automatico in caso di guasto
  - backup fisici (`mariabackup`) e logici (`mysqldump`)
  - SLA 99,9 % (esclusi i periodi di manutenzione)

![Architecture StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### Distribuito

Il modello ***Distribuito*** distribuisce un cluster di 3 istanze del motore MariaDB, con Galera in modalità "single primary" e MaxScale:

- un endpoint MaxScale consente il routing verso le diverse istanze in base al tipo di query (lettura o scrittura).
![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)

- l'istanza in lettura-scrittura (RW) è accessibile tramite un endpoint specifico.
- Le 2 istanze in sola lettura (RO) sono accessibili tramite un altro endpoint specifico.

Pertanto, le applicazioni possono scegliere di utilizzare connessioni RW o RO, oppure lasciare che MaxScale instradi automaticamente verso gli endpoint più adatti.

- **Caso d'uso** : Questo modello di distribuzione è perfetto per le applicazioni con accessi distribuiti, come le applicazioni di dati o business intelligence, che beneficiano di accessi in sola lettura senza impattare l'ingestione dei dati.
- **Punti chiave** :
  - 3 Istanze del motore del database con Galera in modalità "single primary"
  - Proxy MaxScale per un routing efficiente delle query.
  - Storage distribuito su 3 AZ per il recupero automatico in caso di guasto
  - Backup PiTR e Logici
  - SLA 99.9 % (esclusi i periodi di manutenzione)

![Architecture Distribuito](@site/docs/managed_mariadb/images/Distributed.png)