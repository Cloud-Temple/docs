---
title: Novità dei prodotti
sidebar_position: 999
---

# Novità prodotto ed evoluzioni

> Questo changelog elenca esclusivamente le nuove funzionalità e le evoluzioni significative della piattaforma Cloud Temple.
> Le correzioni dei bug sono volutamente escluse.

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Aggiunta della colonna « Fabric » nella scheda di rete di un server Bare Metal

## v4.49.0 — 2026-08-31

### [Console](/console)
- Avvio automatico del tutorial di benvenuto al primo accesso di un utente
- Rimozione delle notifiche di errore durante il caricamento della dashboard quando gli ambienti non sono provisionati

### [Console — Organizzazione](/console/iam/concepts)
- Visualizzazione del prezzo di attivazione di un tenant nella modale di creazione, in modalità Organizzazione

### [VM Instances](/public_cloud/vm_instances)
- Nascondimento dei campi e messaggio esplicito quando non è disponibile spazio di archiviazione, durante l'aggiunta e l'estensione di un disco
- Associazione e dissociazione di un IP pubblico dalla scheda « Schede di rete » di una macchina virtuale collegata a un VPC
- Possibilità di scegliere un modello personalizzato (vCPU e RAM liberi, entro i limiti della famiglia di istanze) alla creazione, al ripristino e al ridimensionamento di un'istanza VM

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il numero di vCPU proposto per il ridimensionamento di una macchina virtuale è ora limitato dalla sua capacità massima
- Associazione e disassociazione di un IP pubblico dalla scheda « Schede di rete » di una macchina virtuale connessa a un VPC

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Visualizzazione del tipo di blade invece della sua descrizione nella « Classe » dei pool

### [IaaS OpenSource — Backup](/iaas_opensource)
- Nota al ripristino che specifica che la macchina virtuale originale non viene sostituita: viene creata una nuova macchina virtuale con data

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Associazione e dissociazione di un IP pubblico dalla scheda « Schede di rete » di una macchina virtuale connessa a un VPC

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzazione del tipo di blade invece della sua descrizione nella « Classe » dei cluster

### [Rete](/network/network_overview)
- Prenotazione IP interco : blocco degli indirizzi di rete e di broadcast, e indicatore « Riservata » sulle IP riservate

### [VPC](/network/vpc)
- Il pulsante « Nuovo VPC » dell'elenco è ora disabilitato quando viene raggiunto il limite di VPC

### [Bare Metal](/iaas_bare-metal)
- Visualizzazione del tipo di blade anziché la sua descrizione nella « Classe » dei server Bare Metal

## v4.48.0 — 2026-08-13

### [Console](/console)
- Miglioramento della persistenza della scelta della lingua, ora associata al profilo utente

### [VM Instances](/public_cloud/vm_instances)
- Il costo stimato visualizzato durante la creazione di un'istanza VM è ora mensile, su base di 730 h/mese

### [Marketplace](/marketplace)
- Solo le zone di disponibilità compatibili con l'immagine selezionata vengono ora proposte durante il deployment dal Marketplace
- Il prezzo di un prodotto del Marketplace distribuito come VM Instance indica ora che viene calcolato in base a CPU, RAM e storage

### [Ordini](/console/orders)
- Messaggio esplicito quando lo spazio disponibile non è più sufficiente per un tipo di archiviazione, durante l'ordine di una zona di disponibilità o di un pool

### [VPC](/network/vpc)
- Il nome del VPC viene ora visualizzato prima di quello della rete nei selettori di rete
- Il nome del VPC precede ora quello della rete nella scheda Adattatori di rete delle macchine virtuali
- Armonizzazione dei colori delle etichette di tipo VPC (condiviso, dedicato) con quelli delle reti
- L'opzione VM Instances è ora disponibile dal modulo di associazione di un indirizzo IP statico
- Gli adattatori di rete già associati a un indirizzo IP statico sono ora visualizzati in grigio nel modulo di associazione

### [Archiviazione oggetti](/storage/oss)
- Scelta dello stile di indirizzamento (path-style o virtual-hosted) durante la generazione di un link di condivisione di un file
- Avviso per i bucket il cui nome non è compatibile con DNS: è possibile solo l'accesso path-style

### [Gestore dei costi](/console/billing/concepts)
- La sezione Gestore dei costi non viene più visualizzata nella dashboard dell'organizzazione quando l'organizzazione non è idonea
- Visualizzazione di una card di errore, invece di un costo di 0 €, quando il recupero dei consumi fallisce nella dashboard dell'organizzazione
- Le righe del piano di supporto sono ora raggruppate sotto « Supporto » nel costo per tenant, invece di un tenant « Sconosciuto »

### [Console — Organizzazione](/console/iam/concepts)
- I prodotti di un tenant sono ora raggruppati in base al fatto che siano modificabili, non disattivabili o non disponibili, con il motivo del blocco

### [Supporto](/console)
- Le descrizioni e i rapporti post-incidente sono ora formattati (markdown) nella pagina Incidenti
- I messaggi di supporto globali sono ora visualizzati in modalità Organizzazione

### [Housing (Colocation)](/housing)
- Aggiunta dei tipi di interfaccia 1000BASE-SX e 10GBASE-SR alla prenotazione di spazi in colocazione

## v4.47.0 — 2026-07-30

### [Console](/console)
- La documentazione Swagger del modulo Ordini è ora disponibile

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante il deployment di una macchina virtuale, vengono ora proposti solo gli elementi distribuibili del catalogo (OVF e modelli di macchina virtuale)

### [VM Instances](/public_cloud/vm_instances)
- Il costo stimato (orario) è ora visualizzato durante la creazione di un'istanza, con il dettaglio per componente (vCPU, RAM, dischi)

### [VPC](/network/vpc)
- Al momento dell'ordine di un nuovo VPC, è ora possibile scegliere un deployment su un ambiente dedicato (la vostra infrastruttura OpenIaaS) o su un ambiente condiviso (soggetto alla sottoscrizione del prodotto VM Instances)

### [Object Storage](/storage/oss)
- Le maiuscole non sono più consentite nel nome di un bucket, in conformità con le regole di denominazione

### [Marketplace](/marketplace)
- È ora possibile distribuire un'istanza VM (Public Cloud) direttamente dalla scheda di un prodotto Marketplace

## 2026-07-27 — Database gestiti (Anteprima)

### [MariaDB Gestito](/managed_mariadb)
- Il modello di distribuzione Distributed è stato rinominato MultiAZ
- Le dimensioni delle istanze arrivano ora fino a 6X-Large (32 vCPU e 128 GB di memoria) e lo storage estendibile a caldo fino a 512 GB
- Pubblicazione delle raccomandazioni di dimensionamento che spiegano la calibrazione dei parametri del motore, con un avviso sull'attivazione di `performance_schema` al di sotto della dimensione X-Large
- Il ripristino a un punto nel tempo non è più disponibile: i backup si basano ora su backup fisici giornalieri ed esportazioni logiche, senza archiviazione continua dei log delle transazioni

### [PostgreSQL Managé](/managed_postgresql)
- Nuova architettura basata sull'operatore Kubernetes CloudNative-PG e sul plugin di backup Barman Cloud
- Tre modelli di deployment: StandAlone a istanza singola, Replica con tre istanze replicate in modo asincrono con failover automatico, e Enterprise con tre istanze replicate in modo sincrono su almeno due nodi, garantendo la durabilità senza blocchi in caso di indisponibilità di un nodo
- Deployment dichiarativo tramite risorse Kubernetes personalizzate, utilizzabile tramite Terraform o Helm, ed esportazione nativa delle metriche verso Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organisation](/console/iam/concepts)
- Ora è possibile creare un tenant direttamente dalla pagina Tenants, selezionando i prodotti associati

### [Console — Activités](/console)
- I registri di attività possono ora essere filtrati per modulo

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- L'indirizzo IP pubblico viene ora visualizzato nell'elenco delle interfacce di rete di una macchina virtuale connessa a un VPC
- Una scheda « Salute » è ora disponibile nei dettagli di una macchina virtuale, accessibile dall'elenco

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- È ora possibile ordinare una replica VMware tra le zone di disponibilità

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- L'elenco delle interfacce di rete di una macchina virtuale connessa a un VPC mostra ora l'indirizzo IP pubblico
- Una scheda « Salute » è ora disponibile nei dettagli di una macchina virtuale aperta dall'elenco

### [Istanze VM](/public_cloud/vm_instances)
- L'indirizzo IP pubblico è ora visualizzato nell'elenco degli adattatori di rete di un'istanza connessa a un VPC
- Una scheda « Salute » è ora disponibile nei dettagli di un'istanza, accessibile dall'elenco

### [Housing (Colocation)](/housing)
- Gli ordini di Colocazione sono ora disponibili: prenotazione di spazio, installazione e rimozione dal rack di apparecchiature
- Gli ordini di Colocazione per interventi sono ora disponibili: supporto tecnico e smart hands
- Gli ordini di Colocazione per cablaggio e decablaggio (CPE) sono ora disponibili
- Gli ordini di Colocazione non supportati dalla console sono ora chiaramente indicati, con un invito a contattare il supporto

## v4.45.5 — 2026-07-23

### [Istanze VM](/public_cloud/vm_instances)
- La creazione di un'istanza si basa ora sulla selezione di un'immagine di sistema, che sostituisce i modelli

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante la configurazione dei core per socket di una macchina virtuale OpenIaaS, la topologia del processore (numero di socket e core per socket) viene ora visualizzata esplicitamente

### [LLMaaS](/llmaas)
- L'importo minimo di un credito LLMaaS è ridotto a 100 €

## v4.45.3 — 2026-07-21

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante il deployment di una macchina virtuale, viene ora visualizzato un messaggio « Nessun modello disponibile » quando il catalogo è vuoto

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante il deployment di una macchina virtuale, viene ora visualizzato un messaggio « Nessun modello disponibile » quando il catalogo è vuoto

## v4.45.2 — 2026-07-17

### [Console](/console)
- Miglioramenti tecnici minori

## v4.45.0 — 2026-07-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Durante un'operazione bloccante, le macchine virtuali mostrano ora uno stato esplicito: backup, snapshot o ripristino in corso
- La modifica della CPU si adatta ora all'opzione di aggiunta CPU a caldo (CPU hot add) e allo stato della macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante un'operazione bloccante, le macchine virtuali mostrano ora uno stato esplicito (backup, snapshot o ripristino in corso)
- I dettagli di una macchina virtuale presentano ora un riepilogo dell'utilizzo (CPU, RAM, archiviazione)

### [VM Instances](/public_cloud/vm_instances)
- Le istanze mostrano ora uno stato esplicito (backup, snapshot o ripristino in corso) durante un'operazione bloccante
- Le metriche di utilizzo istantaneo (CPU, RAM, storage) sono ora visualizzate per ogni istanza
- L'univocità del nome è ora verificata sia alla creazione che al ripristino di un'istanza

### [Réseau](/network/network_overview)
- Durante un ordine che prevede una fase di propagazione, le nuove reti vengono create solo alla validazione finale dell'ordine

## v4.44.2 — 2026-07-03

### [Istanze VM](/public_cloud/vm_instances)
- Il tipo di rete (backbone privato) è ora visualizzato sugli adattatori di rete di un'istanza, anche senza la funzionalità VPC

## v4.44.1 — 2026-07-02

### [Console](/console)
- Miglioramenti tecnici minori

## v4.44.0 — 2026-07-02

### [Ordini](/console/orders)
- Le azioni di provisioning dell'infrastruttura tengono ora conto dei ruoli di business (calcul, réseau, VPC, bare metal…) in aggiunta ai permessi di ordinazione

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Il monitoraggio del caricamento dei file ISO e OVF è stato migliorato ed è ora possibile annullare un caricamento in corso

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il monitoraggio dell'invio dei file ISO e XVA è migliorato ed è ora possibile annullare un invio in corso

### [VM Instances](/public_cloud/vm_instances)
- Le dimensioni del disco non accettano più valori decimali, sia alla creazione di un'istanza che all'aggiunta o all'estensione di un disco
- Gli indicatori di elaborazione delle istanze e delle relative risorse vengono ora correttamente ripristinati dopo un aggiornamento della pagina

### [VPC](/network/vpc)
- Dall'interfaccia di rete di una macchina virtuale associata a una rete VPC, è ora possibile accedere direttamente alla VPC interessata (VMware, OpenIaaS e VM Instances)
- Alcune operazioni VPC possono ora essere eseguite in parallelo: aggiunta di un gateway durante la creazione di una rete privata (e viceversa), e più eliminazioni simultanee di reti private

## 2026-06-30 — API Metriche

### [Metriche](/console/metrics/concepts)
- Un token di accesso può ora verificare la disponibilità del servizio metriche tramite l'endpoint API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Console](/console)
- I selettori di rete distinguono ora visivamente le reti VPC e il Backbone privato
- Un tutorial interattivo è ora disponibile nella pagina Utenti

### [Console — Attività](/console)
- È ora possibile visualizzare i dettagli di un'attività espandendone la riga nelle liste Recenti e Archiviati
- Ogni attività dispone ora di una pagina dei dettagli dedicata, accessibile tramite link diretto
- I dettagli di un'attività sono ora accessibili dalle notifiche di successo e di fallimento
- È ora possibile visualizzare il JSON completo di un'attività, copiarlo o scaricarlo
- L'elenco delle attività archiviate può ora essere ordinato per data di creazione

### [Commandes](/console/orders)
- La visualizzazione dell'avanzamento di un ordine è stata riprogettata

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- I dettagli di una macchina virtuale vengono ora visualizzati in una nuova vista
- Durante la modifica a caldo, la coerenza tra CPU e core per socket viene controllata: vengono visualizzati degli avvisi e i valori non validi non vengono accettati

### [IaaS VMware — Infrastructure](/iaas_vmware)
- È ora possibile richiedere la rimozione di un ambiente IaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Una nuova vista dettagliata è disponibile per le macchine virtuali
- È ora possibile filtrare l'elenco delle macchine virtuali per zona di disponibilità (AZ)

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- La pagina di un Storage Repository mostra ora la data di creazione dello snapshot di un disco

### [VM Instances](/public_cloud/vm_instances)
- Il dettaglio di un'istanza viene visualizzato in una nuova vista
- Il pulsante « Avvia backup ora » è ora disabilitato quando il backup non è disponibile

### [VPC](/network/vpc)
- La descrizione dell'indirizzo IP pubblico è ora visualizzata al momento dell'associazione a una rete privata

### [Archiviazione oggetti](/storage/oss)
- Ora è possibile aggiungere una descrizione agli indirizzi IP autorizzati (whitelist) di un bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- La sezione « Privacy » è stata aggiornata

### [Object Storage](/storage/oss)
- La disponibilità del certificato TLS wildcard per l'accesso S3 in host-style è ora indicata
- È ora possibile caricare un file su S3 da un URL pre-firmato
- È ora possibile abilitare il versioning su un bucket
- È ora possibile gestire le versioni di un file

## v4.41.1 — 2026-06-11

### [Ordini](/console/orders)
- Il massimo disponibile al momento dell'ordine di un Block Storage è stato aggiornato

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- I messaggi relativi agli stock sono ora più precisi al momento dell'ordine di ipervisori o dell'aumento della RAM di un cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante l'aggiunta di un disco esistente a una macchina virtuale, l'UUID del disco viene ora visualizzato quando più dischi condividono lo stesso nome

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Viene ora visualizzato un avviso durante la richiesta di aggiornamento dell'host master di un pool

### [VPC](/network/vpc)
- L'ordine di un VPC richiede ora che una zona di disponibilità OpenIaaS sia distribuita

## 2026-06-06 — Server MCP della Console

- Risorsa di assistenza per l'autenticazione che descrive come ottenere un token di accesso personale e il formato dell'intestazione previsto; gli errori di autenticazione indicano ora la causa e la procedura da seguire
- Modifica della configurazione con impatto: l'URL dell'API specificata nella configurazione del server deve ora includere il segmento `/api`, da aggiornare prima del deployment di questa versione per evitare errori 404. L'URL viene validata all'avvio e l'infrastruttura a chiave pubblica/privata è supportata

## 2026-06-05 — Server MCP della Console

- Consultazione del nome e della versione del server distribuito

## v4.40.0 — 2026-06-02

### [Console](/console)
- Un percorso di benvenuto interattivo è ora disponibile

### [Console — Organizzazione](/console/iam/concepts)
- Il gestore dei costi è ora disponibile nella vista organizzazione
- La vista organizzazione dispone ora di una visualizzazione dedicata

### [Ordini](/console/orders)
- La fase di rete non appare più negli ordini quando è attivato solo il prodotto VPC

### [Supporto](/console)
- I piani e i contatti di supporto sono stati aggiornati

### [Ticket di supporto](/console)
- Le funzionalità di gestione IT sono state rimosse dai ticket di supporto

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Le funzionalità della libreria di contenuti pubblici sono state rimosse

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Il valore predefinito del passaggio CloudInit è stato aggiornato per le distribuzioni OpenIaaS dalla Marketplace
- L'invio di caratteri speciali dagli appunti della console di una macchina virtuale è stato migliorato

### [Rete](/network/network_overview)
- È ora possibile rimuovere la descrizione di un indirizzo IP
- È ora possibile compilare il campo `description` durante la creazione di una rete virtuale
- È ora possibile compilare il campo `description` durante la modifica di una rete virtuale

### [VPC](/network/vpc)
- La descrizione di un IP floating VPC è ora visualizzata
- È ora possibile modificare la descrizione di un IP floating VPC

## 2026-05-25 — Server MCP della Console

- Ogni rifiuto di autorizzazione indica ora il prodotto interessato e il nome esatto dell'autorizzazione da attivare sul token di accesso personale

## 2026-05-24 — Server MCP della Console

- Gestione del supporto da un agente: elenco e dettagli dei ticket, creazione, commento, chiusura, consultazione delle manutenzioni pianificate e delle relative categorie, incidenti del tenant e incidenti della piattaforma
- Opzione di distruzione dopo l'avvio sul deployment dal Marketplace
- Percorso guidato per il deployment di una macchina virtuale Linux
- Risorse consultabili direttamente: glossario dei termini IaaS OpenSource, topologia di un pool che riunisce host, repository di storage, reti e indicatori in un'unica visualizzazione, e catalogo Marketplace filtrato per l'IaaS OpenSource

## 2026-05-23 — Server MCP della Console

- Navigazione del catalogo Marketplace con filtri, e schede tecniche IaaS OpenSource (XVA) e VMware (OVF) che dettagliano processori, memoria, dischi e nomi esatti delle interfacce di rete
- Distribuzione di una macchina virtuale IaaS OpenSource da un elemento del catalogo, idempotente per nome
- Gestione dell'alimentazione delle macchine virtuali IaaS OpenSource — accensione, spegnimento, riavvio, pausa, sospensione e ripresa — idempotente per stato
- Monitoraggio delle operazioni lunghe tramite le attività

## 2026-05-22 — Server MCP della Console

- Consultazione estesa dell'IaaS OpenSource : pool, host, macchine virtuali, snapshot, adattatori di rete con rilevamento degli indirizzi MAC duplicati, dischi virtuali e stato di replicazione, tutte queste operazioni sono in sola lettura
- Filtri applicabili lato server sull'insieme di queste liste

## v4.39.2 — 2026-05-22

### [Rete](/network/network_overview)
- È ora possibile eliminare il record PTR di un indirizzo IP pubblico o di un indirizzo IP di interconnessione

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Le regole di denominazione degli snapshot delle macchine virtuali sono state modificate

### [Bare Metal](/iaas_bare-metal)
- Ora è possibile modificare la descrizione di una blade

### [Rete](/network/network_overview)
- Ora è possibile modificare il record PTR di un indirizzo IP di interconnessione

## v4.39.0 — 2026-04-23

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- I dischi esistenti vengono ora visualizzati durante l'aggiunta di un nuovo disco
- Durante lo spostamento (vMotion) di una macchina virtuale in modalità « solo risorse di calcolo », è ora possibile scegliere un cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- I dischi esistenti vengono ora visualizzati durante l'aggiunta di un nuovo disco

### [VM Instances](/public_cloud/vm_instances)
- L'elenco delle istanze VM può ora essere esportato in formato CSV
- La visualizzazione della frequenza di una politica di backup è stata rivista

### [Bare Metal](/iaas_bare-metal)
- La selezione delle reti è ora obbligatoria durante la propagazione di una rete su un Bare Metal

## 2026-04-20 — Database gestiti (Anteprima)

### [MariaDB Gestito](/managed_mariadb)
- Pubblicazione dei parametri del motore associati a ogni modello di istanza: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` e `table_open_cache`
- Revisione dei modelli di istanza: il limite massimo è ridotto a 3X-Large (8 vCPU e 32 GiB di memoria) e l'archiviazione massima estendibile a caldo passa da 512 GiB a 128 GiB

### [PostgreSQL Gestito](/managed_postgresql)
- Pubblicazione dei parametri del motore associati a ogni tipo di istanza: `shared_buffers`, `effective_cache_size`, `work_mem` e `max_connections`
- Revisione dei tipi di istanza: il limite massimo è ridotto a 3X-Large (8 vCPU e 32 GiB di memoria) e lo storage massimo espandibile a caldo passa da 512 GiB a 128 GiB

## v4.38.1 — 2026-04-18

### [Istanze VM](/public_cloud/vm_instances)
- Le reti proposte sono ora filtrate alla creazione di un'istanza così come alla modifica di un adattatore di rete

## v4.38.0 — 2026-04-17

### [Identità e Accesso (IAM)](/console/iam)
- Sei nuove autorizzazioni sono disponibili: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` e `public_cloud_vm_instances_console_access`
- Il nome del prodotto interessato appare ora all'inizio della descrizione di ogni autorizzazione

### [Gestore dei costi](/console/billing/concepts)
- L'interfaccia del gestore dei costi è stata migliorata
- L'unità visualizzata nei grafici di consumo è stata aggiornata

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Durante il deployment di una macchina virtuale, la fase di selezione di un'immagine dal Marketplace è stata rivista

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Ora è possibile alternare la visualizzazione della pagina catalogo tra griglia e tabella
- Il passaggio di selezione di un'immagine Marketplace durante il deployment di una macchina virtuale è stato aggiornato

### [VM Instances](/public_cloud/vm_instances)
- Il dashboard mostra ora l'utilizzo delle quote VM Instances
- Una nuova pagina presenta l'elenco delle VM Instances
- È ora possibile creare una nuova istanza
- È ora possibile visualizzare e gestire i dischi, gli adattatori di rete e gli snapshot di un'istanza
- È ora possibile aggiornare le capacità di un'istanza e modificarne lo stato
- È ora possibile accedere alla console di un'istanza

### [LLMaaS](/llmaas)
- La visualizzazione dei prezzi nella vista dei consumi e il modulo di ricarica del credito sono stati aggiornati

## 2026-04-15 — Database gestiti (Preview)

### [MariaDB Managé](/managed_mariadb)
- Apertura in Preview di MariaDB Managé : modelli StandAlone e Distributed in cluster a tre nodi dietro un proxy, storage replicato su tre zone di disponibilità e impegno di disponibilità del 99,9 %

### [PostgreSQL Gestito](/managed_postgresql)
- Disponibilità in anteprima di PostgreSQL Gestito: modelli StandAlone e Distributed in cluster a tre nodi dietro un proxy, replicazione sincrona multi-zona senza perdita di dati e ripristino a un istante specifico

## v4.37.0 — 2026-04-02

### [Gestore dei costi](/console/billing/concepts)
- Aggiunta dell'importo previsto nella pagina dei consumi per il grafico e la tendenza
- Miglioramento visivo in caso di errore o di dati insufficienti sui consumi del mese corrente

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento del modulo per distribuire una macchina virtuale da un elemento del catalogo
- Aggiunta della possibilità di modificare il tipo di visualizzazione (griglia o tabella) dalla pagina catalogo

## v4.36.0 — 2026-03-27

### [Console](/console)
- Aggiornamento dei grafici delle metriche e del consumo

### [Gestore dei costi](/console/billing/concepts)
- Aggiunta della pagina del gestore dei costi
- Possibilità di visualizzare i costi del mese corrente
- Possibilità di visualizzare i costi su un intervallo di date e di confrontare le tendenze

### [Commandes](/console/orders)
- Blocco del deprovisioning di un cluster di ipervisori quando un cluster di storage è collegato

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aggiunta di filtri e ordinamenti sulla lista dei dischi dai dettagli di un Block Storage

### [VPC](/network/vpc)
- Miglioramento dell'interfaccia per il caricamento dei dati nei moduli

## v4.35.4 — 2026-03-18

### [Console](/console)
- Miglioramento della riconnessione ai WebSocket

### [Support](/console)
- Aggiunta di una soluzione di fallback per la creazione di un ticket di supporto quando i websocket sono disconnessi

## v4.35.3 — 2026-03-17

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Aggiornamento del recupero dei dischi durante il caricamento delle repliche dalla scheda Replicazione

## v4.35.0 — 2026-03-11

### [Comandi](/console/orders)
- Aggiunta del comando per la rimozione di un mapping cpool/spool
- Aggiunta del comando di deprovisioning della rete privata VPC
- Modifiche al comando di deprovisioning di un volume Bare Metal: è possibile richiedere l'eliminazione dall'elenco dei volumi
- Aggiunta del comando per la rimozione del mapping del volume Bare Metal
- Aggiunta del comando di deprovisioning di VPC
- Blocco del deprovisioning di un datastore se è l'ultimo di un datastore cluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Possibilità di aggiungere un limite di RAM a una macchina virtuale

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiornamento del multi vMotion VMware per consentire lo spostamento delle VM da un cluster a un altro

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aggiunta della possibilità di aggiornare un host
- Visualizzazione delle informazioni sugli aggiornamenti di un host

### [Réseau](/network/network_overview)
- Disattivazione del pulsante di eliminazione della propagazione di rete quando nessuna propagazione viene erogata

### [LLMaaS](/llmaas)
- Visualizzazione del consumo raggruppato per tipo di token

## v4.34.0 — 2026-02-18

### [Console](/console)
- Aggiornamento maggiore del motore di rendering dell'applicazione
- I menu VMware e OpenIaaS non vengono visualizzati quando è abilitato solo il modulo delle metriche

### [Metriche](/console/metrics/concepts)
- Possibilità di esportare in CSV dalle pagine Metriche VMware e OpenIaaS

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante lo spostamento di una macchina virtuale, non è possibile selezionare lo stesso host di destinazione dell'host corrente della macchina virtuale
- Aggiunta del pulsante 'Nuovo catalogo' nella pagina Catalogo VMware

## 2026-02-04 — Server MCP della Console

- Consultazione dei modelli di macchine virtuali, delle reti, degli host e dei repository di storage IaaS OpenSource

## 2026-02-03 — Server MCP della Console

- Disponibilità del server MCP (Model Context Protocol) della Console, autenticato tramite token di accesso personale
- Consultazione e gestione delle macchine virtuali VMware da un agente : elenco, dettagli, datacenter virtuali, accensione e spegnimento

## v4.33.0 — 2026-01-21

### [Commandes](/console/orders)
- Aggiunta del comando di rimozione di una propagazione di rete su OpenIaaS

### [Métriques](/console/metrics/concepts)
- Aggiunta di filtri per le pagine delle metriche VMWare e OpenIaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta della pagina delle metriche 'Macchine Virtuali'
- Aggiunta della pagina dei dettagli delle metriche per ogni VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Aggiornamento della modale di chiusura di un ticket di supporto

### [IaaS VMware — Backup](/iaas_vmware)
- Durante l'assegnazione di una politica di backup su un disco, viene ora proposto di inventariare il disco se non viene riconosciuto dalla soluzione di backup

### [Bare Metal](/iaas_bare-metal)
- L'eliminazione di un volume BFS su un Bare Metal è ora bloccata, il volume verrà eliminato all'eliminazione del Bare Metal
- Al momento dell'ordine di un Bare Metal, il primo volume viene ora rinominato 'volume BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiornamento delle descrizioni tooltip relative alle opzioni disponibili durante il ripristino di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- I snapshot associati alle politiche di backup sono ora visibili
- Visualizzazione dell'Host associato alla posizione di archiviazione di un ISO durante il caricamento e dalla pagina catalogo

### [Object Storage](/storage/oss)
- Visualizzazione di una card esplicativa dalla scheda MPU incompleti quando l'IP della Console non è autorizzato, impedendo la visualizzazione della scheda

### [Marketplace](/marketplace)
- Visualizzazione della card di errore durante l'accesso a una pagina della marketplace inesistente

## v4.30.1 — 2025-12-16

### [Console](/console)
- Miglioramento della visualizzazione degli errori vuoti mostrando di default lo stato HTTP restituito

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Possibilità di associare un IP statico a un indirizzo MAC personalizzato

### [LLMaaS](/llmaas)
- Per le metriche di consumo, filtraggio delle serie con valori pari a 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Miglioramento della sincronizzazione delle azioni sulle pagine VPC
- Aggiunta dell'associazione di un IP statico a un IP pubblico dall'elenco degli IP statici

### [Archiviazione](/storage/oss)
- Aggiunta di MPU incompleti dalla pagina di un bucket
- Possibilità di eliminare un MPU incompleto

## v4.28.0 — 2025-11-21

### [Console](/console)
- Aggiunta della possibilità di visualizzare messaggi informativi globali visibili in tutta l'applicazione

### [Ordini](/console/orders)
- Possibilità di ordinare un'aggiunta di crediti LLMaaS per il tenant
- Possibilità di ordinare un VPC
- Possibilità di ordinare una rete privata all'interno di un VPC
- Possibilità di ordinare un indirizzo IP pubblico per il prodotto VPC
- Possibilità di abilitare la gateway per un VPC
- Aggiunta della possibilità di ordinare la rimozione di un tenant

### [Metriche](/console/metrics/concepts)
- Miglioramento della visualizzazione dei tooltip sui grafici delle metriche: è ora possibile fare clic su un punto per bloccare il tooltip e consultare tutti i dati

### [Rete](/network/network_overview)
- Raggruppamento delle pagine Reti e Internet sotto un unico prodotto: Backbone privato
- Aggiunta della gestione del record PTR durante la modifica di un indirizzo IP pubblico
- Blocco della condivisione per alcuni tipi di reti

### [VPC](/network/vpc)
- Integrazione del prodotto VPC
- Aggiunta di una pagina che elenca le VPC
- Aggiunta di una pagina Dettagli di una VPC
- Possibilità di gestire le reti private, gli indirizzi IP pubblici e la gateway di una VPC
- Possibilità di associare un IP statico di una rete privata VPC a un adattatore di rete VMware o OpenIaaS
- Possibilità di associare un IP statico a un IP pubblico di una VPC

### [LLMaaS](/llmaas)
- Aggiunta di una scheda Fatturazione nella pagina LLMaaS per i tenant con il prepago attivato
- Visualizzazione del credito residuo per i tenant in modalità prepago, sulla dashboard e dalla scheda Fatturazione

## v4.27.0 — 2025-11-12

### [Ordini](/console/orders)
- Aggiunta di una verifica dello stock disponibile durante l'ordine delle risorse
- Aggiunta di un filtro per tipo di ordine e per prodotto nell'elenco degli ordini

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento della console delle macchine virtuali. Migliore gestione della tastiera e aggiunta degli appunti.

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Aggiunta di un'allerta sul dashboard per i VSnap di backup SPP con un'occupazione troppo elevata

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Miglioramento della console delle macchine virtuali. Migliore gestione della tastiera e aggiunta della funzionalità appunti.

### [Marketplace](/marketplace)
- Aggiunta della possibilità di visualizzare i dettagli tecnici di un'immagine

## v4.26.5 — 2025-11-04

### [Console](/console)
- Miglioramento delle dimensioni dei grafici della dashboard durante il ridimensionamento della finestra

## v4.26.3 — 2025-10-31

### [Metriche](/console/metrics/concepts)
- Modifica del nome delle esportazioni di metriche visualizzate nei grafici

## v4.26.0 — 2025-10-22

### [Console](/console)
- Aggiunta di un pulsante per copiare l'UUID del perimetro corrente dal profilo utente
- Riprogettazione completa della Dashboard
- Aggiunta della riconnessione automatica al monitoraggio delle attività quando la connessione viene interrotta

### [Ordini](/console/orders)
- Aggiornamento dei moduli di ordine per aggiungerli alle diverse pagine interessate (esempio: nuovo Datastore dalla pagina Archiviazione)

### [Support](/console)
- Aggiunta dell'indirizzo email della persona che ha chiuso il ticket nella valutazione del ticket di supporto

### [Metriche](/console/metrics/concepts)
- Riprogettazione della raccolta delle metriche VMware, l'URL della pagina è ora /iaas/metrics
- Aggiunta di una scheda metriche infrastrutturali VMware su Calcolo
- Aggiunta di una scheda metriche infrastrutturali VMware su Archiviazione
- Aggiunta di una pagina delle metriche per OpenIaaS
- Aggiunta di una scheda metriche infrastrutturali OpenIaaS su Calcolo
- Aggiunta di una scheda metriche infrastrutturali OpenIaaS su Archiviazione

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta delle nuove chiavi extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocco della selezione di un hostcluster senza host attivo
- Durante la creazione di una macchina virtuale VMware la scelta del Vcenter avviene ora in base alla zona di disponibilità selezionata
- Aggiunta di limiti per i nomi e le descrizioni durante l'upload di un file su VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante l'aggiunta di un disco OpenIaaS, le unità di archiviazione non appartenenti al Pool della macchina virtuale vengono ora filtrate
- Durante la creazione di uno snapshot, l'opzione per includere la memoria è ora deselezionata di default

### [IaaS OpenSource — Backup](/iaas_opensource)
- Aggiunta della possibilità di eseguire un backup dalla scheda backup di una macchina virtuale OpenIaaS

### [Rete](/network/network_overview)
- Rimozione del vincolo che impediva la selezione di più tipi di rete nella pagina delle reti virtuali

### [Object Storage](/storage/oss)
- Ottimizzazione del recupero dei file da un bucket

### [PaaS OpenShift](/paas_openshift)
- Aggiunta di una pagina che elenca i cluster OpenShift
- Aggiunta di una pagina di dettaglio di un cluster OpenShift

### [Marketplace](/marketplace)
- Aggiunta di un filtro per UUID e possibilità di copiare l'UUID di un elemento

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Aggiornamento dell'utilizzo della configurazione avanzata e delle proprietà OVF durante il deployment di una macchina virtuale VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Possibilità di distribuire un'immagine di macchina virtuale dall'elenco delle macchine virtuali

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di distribuire un'immagine di macchina virtuale dall'elenco delle macchine virtuali

### [Réseau](/network/network_overview)
- Aggiunta di una validazione per bloccare la rimozione della condivisione di una rete se la rete è propagata in un altro Tenant

### [Marketplace](/marketplace)
- Aggiunta del prodotto Marketplace
- Aggiunta di una pagina che elenca le soluzioni disponibili nel catalogo
- Aggiunta di una pagina per visualizzare i dettagli di una soluzione
- Possibilità di distribuire un'immagine di macchina virtuale su un ambiente OpenIaaS o VMware dai dettagli di una soluzione
- Possibilità di contattare un partner per una soluzione di servizi gestiti

## v4.23.0 — 2025-09-12

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta del supporto per 4 nuovi valori extra-configs

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Non visualizzare l'avviso HA sulle VM interessate quando l'ISO locale non è montato
- Durante l'aggiunta o il ridimensionamento di un disco, indicare se il SR associato è utilizzato per una configurazione di replicazione

### [IaaS OpenSource — Backup](/iaas_opensource)
- Aggiunta del nome dell'AZ al report di backup

### [Object Storage](/storage/oss)
- Aggiornamento delle informazioni relative al ciclo di vita di un bucket

### [LLMaaS](/llmaas)
- Aggiunta del prodotto LLMaaS
- Aggiunta dell'elenco dei modelli disponibili
- Aggiunta dell'elenco delle chiavi API con possibilità di crearne
- Aggiunta del consumo per modelli e per chiavi
- Aggiunta dei dettagli di un modello
- Possibilità di testare un modello

## v4.22.1 — 2025-09-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Modifica delle alerte relative alla configurazione del formato del disco selezionato, durante un VMotion che include lo storage

## v4.22.0 — 2025-09-02

### [Commandes](/console/orders)
- Aggiunta dell'ordine per la rimozione della propagazione di rete dalla pagina di tutti gli ordini, tutti gli ordini disponibili sono ora accessibili da questa pagina

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Aggiornamento delle condizioni relative al cambio del formato del disco durante lo spostamento di una macchina virtuale e aggiunta di informazioni sul formato del disco corrente durante una configurazione tramite disco

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aggiornamento della visualizzazione quando nessun dato viene creato/provisionato o quando si verifica un errore durante il recupero delle informazioni.

### [Supporto](/console)
- Apertura delle finestre modali di supporto con il servizio associato pre-selezionato
- Aggiunta di un badge nel menu e nella navbar quando un ticket di supporto richiede una risposta

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta della possibilità di esportare in CSV l'elenco dei replica VMware
- Miglioramento dello slider di selezione della RAM su alcuni ordini
- Aggiunta della gestione delle opzioni Static differed and immediate per il vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Blocco dell'eliminazione di un cluster non vuoto o con host/datastore non in manutenzione

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Aggiunta della possibilità di esportare in CSV l'elenco delle repliche OpenIaaS e delle politiche associate
- Aggiunta di dettagli sugli strumenti utilizzati dalle macchine virtuali (pvDrivers, managementAgent et tools)
- Aggiunta di verifiche per l'alta disponibilità (HA)

### [Réseau](/network/network_overview)
- Modifica della selezione di un indirizzo IPv4 con un elenco disponibile

## v4.20.0 — 2025-07-29

### [Ordini](/console/orders)
- Aggiunta di informazioni relative alla disponibilità limitata ed esaurita delle risorse di calcolo durante l'ordine di una nuova zona di disponibilità

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un'opzione VMware Tools per sincronizzare l'ora con l'host
- Aggiornamento delle condizioni sulla crittografia di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Rimozione delle informazioni sull'ultima esecuzione delle politiche di replicazione che causavano rallentamenti
- Gestione del checksumming TX per le schede di rete
- Aggiunta di un avviso sulla replicazione OpenIaaS se il numero di AZ è inferiore a 2
- Aggiunta dell'alta disponibilità (HA) per i pool e le macchine virtuali

## v4.19.0 — 2025-07-24

### [Ordini](/console/orders)
- Aggiornamento dell'ordine di IP pubblici con la possibilità di ordinare un prefisso IPv6
- Aggiornamento della visualizzazione degli ordini disponibili quando nessun ambiente è provisionato

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un filtro di replicazione all'elenco delle macchine virtuali
- Aggiornamento della modale di creazione di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un filtro di replica all'elenco delle macchine virtuali

### [Rete](/network/network_overview)
- Aggiornamento della pagina Internet con l'aggiunta della gestione IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aggiornamento della visualizzazione quando non vengono creati/provisionati dati o quando si verifica un errore durante il recupero delle informazioni.

### [Commandes](/console/orders)
- Aggiornamento delle fasi internet durante l'ordine di una nuova zona di disponibilità o di un nuovo pool

### [Supporto](/console)
- Aggiunta di un servizio di sicurezza per ogni prodotto durante la creazione di un ticket di supporto

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un link da un ISO montato su un controller all'elemento corrispondente nel catalogo

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una pagina Replicazione OpenIaaS con l'elenco dei replica e le politiche di replicazione
- Possibilità di aggiungere e rimuovere una configurazione di replicazione a una macchina virtuale OpenIaaS
- Possibilità di creare e rimuovere una politica di replicazione
- Possibilità di ripristinare un replica
- Possibilità di esportare le macchine virtuali in formato CSV.

## v4.17.0 — 2025-06-20

### [Ordini](/console/orders)
- Possibilità di ordinare un Pool OpenIaaS
- Possibilità di ordinare l'associazione di un volume esistente a un Bare Metal esistente dalla pagina di un Bare Metal, dalla pagina di un volume e dalla pagina degli ordini

### [Supporto](/console)
- Possibilità di eliminare un file su un ticket di supporto
- La descrizione sulla soddisfazione alla chiusura di un ticket è ora facoltativa

## v4.16.0 — 2025-06-04

### [Console](/console)
- Aggiunta delle traduzioni inglesi nella pagina dei report di consumo del menu ordine

### [Commandes](/console/orders)
- Possibilità di ordinare l'aumento di dimensione di un volume bare metal
- Possibilità di ordinare l'aumento di dimensione di un Block Storage OpenIaaS

### [Support](/console)
- Riprogettazione della creazione di un ticket di supporto
- Interpretazione del markdown su un ticket di supporto e aggiornamento dell'ordine di visualizzazione dei commenti
- Aggiunta di un feedback alla chiusura di un ticket di supporto
- Aggiornamento della visualizzazione delle icone in base all'impatto di un incidente globale

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un'opzione per conservare la configurazione di una macchina virtuale durante un ripristino in Produzione sul cluster di origine

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un messaggio di warning in caso di spazio disco insufficiente su un Block Storage (90% utilizzato) e avviso durante l'esecuzione dei comandi

### [Object Storage](/storage/oss)
- Aggiunta della descrizione dei ruoli S3 durante l'assegnazione a un bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Visualizzazione di un errore quando una rete è configurata in modo errato su un adattatore di rete di una macchina virtuale, impedendo anche l'avvio della macchina virtuale

## v4.15.0 — 2025-05-13

### [Console](/console)
- Regolazione delle unità visualizzate sulle risorse infrastrutturali: GiB (Gibibyte) invece di GB (Gigabyte)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di spostare un disco OpenIaaS
- Possibilità di connettere e disconnettere un disco OpenIaaS
- Visualizzazione dello stato connesso/disconnesso di un disco
- Possibilità di copiare l'UUID di un disco, rete virtuale o snapshot
- Possibilità di scegliere il nome di una macchina virtuale durante la distribuzione di un file XVA
- Aggiunta della possibilità di assegnare una politica di backup al momento dell'avvio di una macchina virtuale se non ne possiede alcuna.

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di azioni disponibili su un disco da un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Aggiunta degli indirizzi MAC alla tabella delle interfacce di un Bare Metal
- Aggiunta di una pagina sui dettagli di un volume Bare Metal

## v4.14.0 — 2025-04-28

### [Console](/console)
- Possibilità di fissare le pagine nel menu
- Aggiornamento del rendering della documentazione API

### [Ordini](/console/orders)
- Possibilità di ordinare la rimozione di un Block Storage OpenIaaS
- Possibilità di ordinare l'aggiunta di un Block Storage a un Pool OpenIaaS
- Possibilità di ordinare la rimozione di un Host OpenIaaS
- Aggiunta delle informazioni del prodotto interessato nell'elenco degli ordini
- Possibilità di ordinare l'aggiunta di un Host a un pool OpenIaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di mettere un Host in manutenzione
- Possibilità di modificare la descrizione di un modello
- Possibilità di scegliere un Host all'avvio di una macchina virtuale
- Aggiunta di una regola di unicità sul nome delle macchine virtuali OpenIaaS

## v4.13.0 — 2025-04-08

### [Console](/console)
- Aggiunta di statistiche e informazioni di contatto nella pagina Assistenza

### [Ordini](/console/orders)
- Riprogettazione della visualizzazione dei dettagli di un ordine
- Riprogettazione della visualizzazione delle opzioni di ordine
- Aggiornamento della visualizzazione per ordinare il primo baremetal quando non ne esiste alcuno
- Aggiornamento dell'ordine di un Bare Metal con la selezione della propagazione delle reti sulle interfacce del Bare Metal
- Possibilità di propagare un VLAN su un Bare Metal
- Possibilità di aggiungere un volume a un baremetal
- Possibilità di deprovisionare un volume da un Bare Metal
- Possibilità di deprovisionare un Bare Metal

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Aggiunta di un pulsante per copiare l'UUID sulle reti e i cataloghi VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un pulsante copia UUID per le reti e i cataloghi OpenIaaS
- Aggiunta di un pulsante copia UUID per un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Aggiunta della visualizzazione delle interfacce di rete e delle reti propagate su un server bare metal
- Aggiunta delle azioni di accensione, riavvio e spegnimento di un server bare metal

### [Rete](/network/network_overview)
- Possibilità di visualizzare le propagazioni su un Bare Metal di una rete

## v4.12.0 — 2025-03-25

### [Console](/console)
- Possibilità di rimuovere un IP dalla whitelist dalla pagina Accesso

### Etichette
- Aggiunta dei tag alle macchine virtuali OpenIaaS

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Aggiornamento del recupero delle raccomandazioni API sulle regole di affinità/anti-affinità di un HostCluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Visualizzare l'importazione di un XVA OpenIaaS nell'elenco dei download
- Possibilità di allegare un disco esistente a una macchina virtuale
- Possibilità di staccare un disco esistente da una macchina virtuale

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiornamento della visualizzazione dei dischi di un Block Storage OpenIaaS

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Aggiornamento del messaggio di errore durante l'accesso ai file di un bucket Object Storage

## v4.11.1 — 2025-03-12

### [Ordini](/console/orders)
- Aggiornamento dei nomi delle zone di disponibilità durante un ordine
- Modifica del minimo di datastore durante l'ordine di un datastoreCluster

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Quando il campo label di hostCluster e datastoreCluster viene impostato su vuoto, il nome tecnico verrà applicato come predefinito.

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Quando il campo label dei pool viene impostato su vuoto, il nome tecnico verrà applicato come predefinito
- Aggiunta di un tooltip informativo nella pagina catalogo e durante l'importazione ISO per indicare che il formato XVA è supportato durante la creazione di una macchina virtuale

## v4.11.0 — 2025-03-10

### [Ordini](/console/orders)
- Aggiornamento dei tipi di rete consentiti durante la creazione di una AZ
- Aggiornamento delle risorse minime da provisionare durante l'ordine di una nuova zona di disponibilità

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Visualizzazione del nome della macchina virtuale nella scheda della console per VMware

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Aggiunta della gestione delle etichette sui datastore cluster e host cluster VMware

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Consentire il deployment di una macchina virtuale tramite import XVA per OpenIaaS
- Aggiunta della gestione delle etichette sui pool OpenIaaS
- Visualizzazione del nome della macchina virtuale nella scheda della console per OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aggiornamento delle informazioni CPU degli host e dei pool OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Aggiunta di IOPS/TO sui volumi baremetal

## v4.10.0 — 2025-03-04

### [Console](/console)
- Aggiornamento dei link verso la nuova documentazione pubblica

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un avviso per informare gli utenti in caso di indirizzi MAC duplicati nell'elenco delle macchine virtuali e durante la creazione o la modifica di adattatori di rete
- Aggiunta di un'opzione per forzare l'arresto o il riavvio di una macchina virtuale
- La memoria non verrà più inclusa di default durante uno snapshot se la macchina virtuale non è accesa
- Possibilità di rinominare e ridimensionare un disco
- Aggiunta della possibilità di eliminare le ISO e i modelli dalla pagina catalogo
- Aggiunta della possibilità di eliminare il disco di configurazione 'Cloud Init' durante la distribuzione di una macchina virtuale

## v4.9.1 — 2025-02-27

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Possibilità di modificare un adattatore di rete su una macchina virtuale accesa

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di restrizioni sui caratteri consentiti nei nomi delle macchine virtuali OpenIaaS

## v4.9.0 — 2025-02-21

### [Console](/console)
- Rendere cliccabili i nomi nelle tabelle quando esiste una pagina collegata
- Migliorare l'apertura delle console per evitare l'apertura di più schede se sono aperte più finestre sulla stessa pagina
- Visualizzare un errore durante l'apertura di una console se il browser non consente i reindirizzamenti verso l'applicazione

### [Metriche](/console/metrics/concepts)
- Visualizzare l'unità della RAM nella pagina di stato delle macchine virtuali

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Bloccare la creazione di una macchina virtuale se lo spazio sui Block Storage selezionati non è sufficiente
- Svuotare gli indirizzi MAC predefiniti durante la creazione di una macchina virtuale OpenIaaS

### [Stockage](/storage/oss)
- Potere copiare negli appunti un endpoint S3

## v4.8.0 — 2025-02-14

### [Commandes](/console/orders)
- Aggiunta del comando di propagazione di una rete sui Pool OpenIaaS
- Aggiunta dei comandi di propagazione di rete nella pagina di tutti i comandi

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Visualizzazione del numero di dischi assegnati e disponibili per controller su una macchina virtuale
- Aggiornamento delle condizioni sul numero di dischi possibili da aggiungere su controller SCSI Para Virtual in base alla versione hardware della macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di aggiungere opzioni Cloud Init alla creazione di una macchina virtuale OpenIaaS
- Visualizzazione dei dischi nella pagina di un Block Storage
- Possibilità di aggiornare la configurazione del firmware di avvio di una macchina virtuale OpenIaaS
- Possibilità di clonare una macchina virtuale OpenIaaS

### [Rete](/network/network_overview)
- Aggiornamento della visualizzazione delle propagazioni di una rete e aggiunta di propagazioni OpenIaaS
- Aggiornamento della creazione di una rete e possibilità di propagare la rete sull'infrastruttura OpenIaaS fin dalla sua creazione

## v4.7.0 — 2025-02-03

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- L'esportazione in OVF è bloccata quando la macchina virtuale è crittografata

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Visualizzare le relazioni tra cluster datastore e cluster host nelle pagine Calcolo e Archiviazione

### [IaaS VMware — Backup](/iaas_vmware)
- Modifica dell'opzione di avvio dopo il ripristino per un ambiente SecNumCloud durante il ripristino in modalità clone o produzione su un host o cluster alternativo

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiungere i pulsanti per montare e smontare un ISO OpenIaaS nella barra delle azioni di una macchina virtuale

### [Rete](/network/network_overview)
- Miglioramento della visualizzazione delle propagazioni di rete quando sono in corso richieste di eliminazione delle propagazioni

## v4.6.0 — 2025-01-30

### [Console](/console)
- Rimuovere i caratteri visualizzati durante l'autocompletamento per l'aggiunta di osservatori alla creazione di un ticket di supporto
- Aggiornamento della visualizzazione del menu e delle pagine disponibili per le offerte VMware e OpenIaaS su un nuovo ambiente senza zone di disponibilità provisionate

### [Console — Notifications](/console)
- Aggiornamento della visualizzazione degli abbonamenti alle notifiche dalla pagina profilo

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiungere la possibilità di crittografare una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta dell'esportazione come modello di una macchina virtuale

## v4.5.0 — 2025-01-17

### [Console](/console)
- Aggiunta della descrizione alla creazione e alla visualizzazione delle whitelists
- Possibilità di modificare la descrizione di una whitelist

### [Ordini](/console/orders)
- Aggiunta di un ordine per una nuova Zona di Disponibilità OpenIaaS
- Aggiunta di un ordine per il Bare Metal
- Collegare un cluster di ipervisori a un cluster di storage

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Visualizzare la dimensione rimanente tra parentesi negli alberi di selezione dello storage

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiunta del caso peggiore di allocazione della memoria su un hostCluster VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta del caricamento ISO sui cataloghi OpenIaaS
- Aggiunta dello spostamento delle macchine virtuali OpenIaaS
- Possibilità di scegliere dischi e reti alla creazione di una macchina virtuale OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Aggiunta di una pagina che elenca i Bare Metal
- Aggiunta di una pagina che elenca i volumi Bare Metal
- Aggiunta di una pagina con i dettagli di un Bare Metal
- Aggiunta della possibilità di aprire una console Bare Metal

## v4.4.0 — 2025-01-13

### [Console](/console)
- Modifiche tecniche apportate durante il processo di autenticazione

## v4.3.0 — 2024-12-19

### [Console — Attività](/console)
- Aggiunta dei link "accedi alla risorsa" sulle attività relative a XOA e Object-Storage

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta dei tag e dell'IP della macchina virtuale all'esportazione CSV delle macchine virtuali

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Proporre di esportare solo gli elementi filtrati nell'esportazione CSV dei report di backup nella sotto-scheda macchine virtuali

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aggiunta dei VM-templates XOA dalla pagina cataloghi

### [Object Storage](/storage/oss)
- Possibilità di creare e reimpostare la chiave di accesso globale dagli account di archiviazione

## v4.2.0 — 2024-12-10

### [Console](/console)
- Aggiungere reindirizzamenti alla status page

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Gli elementi già presenti in 'Il mio catalogo' rimangono ora visualizzati in 'Catalogo pubblico'
- Aggiunta di reindirizzamenti sui componenti citati in un elemento del catalogo VMware
- Aggiornamento della visualizzazione della RAM su un cluster di ipervisori
- Rimozione dell'opzione di replicare automaticamente i nuovi dischi che causava errori
- Aggiunta di convalida sulla replicazione di una macchina virtuale
- Aggiunta di nuove extra config PCIPassthru dalla configurazione avanzata di una macchina virtuale per la gestione GPU
- Possibilità di aggiungere un controller PCI alle macchine virtuali

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzazione delle raccomandazioni e dei guasti DRS da un cluster di ipervisori
- Nuovo stato per ipervisori e datastore quando è in corso una richiesta di passaggio in manutenzione
- Aggiunta delle informazioni sulla GPU di un ipervisore

### [IaaS VMware — Backup](/iaas_vmware)
- Rimuovere più opzioni di backup non funzionanti su macchine virtuali in modalità test

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una pagina di backup per la sezione backup OpenIaas che elenca gli errori, le policy, i report dei backup e consente il recupero di macchine virtuali eliminate

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di una pagina per elencare le zone di disponibilità OpenIaas
- Aggiungere una pagina di archiviazione per la parte OpenIaas
- Aggiunta di una pagina di calcolo per la parte OpenIaas

### [Housing (Colocation)](/housing)
- Modifica delle informazioni visualizzate dalla pagina dispositivi

## v4.1.1 — 2024-11-18

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Miglioramento della modifica della memoria, la conversione viene eseguita verso l'unità con l'ultimo valore intero
- Durante una snapshot, il pulsante per salvare la RAM è disabilitato quando la macchina virtuale è spenta
- Quando più macchine virtuali sono espanse, l'elenco dei dischi non viene visualizzato immediatamente

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiunta del pulsante di esportazione CSV nella scheda macchine virtuali della pagina dei report di backup

## v4.1.0 — 2024-11-13

### [Console](/console)
- Possibilità di inviare un file con il feedback

### [Identité & Accès (IAM)](/console/iam)
- Disattivazione della possibilità di eliminare un proprietario

### [Ordini](/console/orders)
- Aggiunta della gestione di aggiunta, eliminazione e modifica di un datastore dalla pagina degli ordini
- Aggiunta della possibilità di eliminare un Host

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta delle attività di snapshot nella scheda snapshot di una VM
- Visualizzazione della dimensione reale delle macchine virtuali nell'esportazione CSV

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Nelle pagine calcolo e archiviazione, il filtro sulle zone di disponibilità si applica anche alle schede del cluster
- Visualizzazione delle percentuali di utilizzo sulle barre di consumo (CPU / RAM / Stockage)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una convalida sulla presenza di policy di backup per l'opzione di avvio automatico
- Aggiunta di un'opzione per forzare l'arresto/riavvio delle macchine virtuali senza guest-tools installati
- Miglioramento del messaggio di esecuzione di una policy OpenIaas su una macchina virtuale specifica

### [Bastion](/bastion)
- Aggiunta di una validazione sul campo Host di un dispositivo

## v4.0.3 — 2024-11-04

### [Console](/console)
- Miglioramenti e correzioni relativi al nuovo design

## v4.0.2 — 2024-10-30

### [Console](/console)
- Miglioramenti e correzioni relativi al nuovo design

## v4.0.1 — 2024-10-25

### [Console](/console)
- Miglioramenti e correzioni relativi al nuovo design

## v4.0.0 — 2024-10-18

### [Console](/console)
- Nuovo design della Console
- Riprogettazione delle pagine infrastruttura e backup

---

:::info[Storico precedente]

Lo storico completo delle versioni precedenti alla v4.0 (da v1.0 a v3.38.1, da febbraio 2019 a ottobre 2024) è disponibile nello [storico Git](https://github.com/Cloud-Temple/docs) del progetto.

:::