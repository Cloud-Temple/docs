---
title: Novità del prodotto
sidebar_position: 999
---

# Novità del prodotto & Evoluzioni

> Questo changelog elenca solo le nuove funzionalità e le evoluzioni significative della piattaforma Cloud Temple.
> Le correzioni di bug sono intenzionalmente escluse.

## v4.47.0 — 2026-07-30

### [Console](/console)
- La documentazione Swagger del modulo Ordini è ora disponibile

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante il deployment di una macchina virtuale, vengono ora proposti solo gli elementi del catalogo deployabili (OVF e modelli di macchina virtuale)

### [VM Instances](/public_cloud/vm_instances)
- Il costo stimato (oraria) è ora visualizzato durante la creazione di un'istanza, con il dettaglio per voce (vCPU, RAM, dischi)

### [VPC](/network/vpc)
- Al momento dell'ordine di un nuovo VPC, è ora possibile scegliere un deployment su un ambiente dedicato (la tua infrastruttura OpenIaaS) o su un ambiente condiviso (soggetto a sottoscrizione del prodotto VM Instances)

### [Object Storage](/storage/oss)
- Le maiuscole non sono più consentite nel nome di un bucket, in conformità con le regole di denominazione

### [Marketplace](/marketplace)
- Ora è possibile distribuire un'istanza VM (Public Cloud) direttamente dalla scheda di un prodotto Marketplace

## 2026-07-27 — Database gestiti (Preview)

### [MariaDB gestito](/managed_mariadb)
- Il modello di distribuzione Distributed è stato rinominato MultiAZ
- Le dimensioni delle istanze arrivano ora fino a 6X-Large (32 vCPU e 128 GB di memoria) e lo storage estendibile a caldo fino a 512 GB
- Pubblicazione delle raccomandazioni di dimensionamento che spiegano la calibrazione dei parametri del motore, con un avviso sull'attivazione di `performance_schema` al di sotto della dimensione X-Large
- Il ripristino a un punto nel tempo non è più disponibile: i backup si basano ora su backup fisici quotidiani ed esportazioni logiche, senza archiviazione continua dei log delle transazioni

### [PostgreSQL gestito](/managed_postgresql)
- Nuova architettura basata sull'operatore Kubernetes CloudNative-PG e sul plugin di backup Barman Cloud
- Tre modelli di deployment: StandAlone a istanza singola, Replica con tre istanze replicate in modo asincrono con failover automatico, e Enterprise con tre istanze replicate in modo sincrono su almeno due nodi, garantendo la durabilità senza blocchi in caso di indisponibilità di un nodo
- Deployment dichiarativo tramite risorse Kubernetes personalizzate, utilizzabile tramite Terraform o Helm, ed esportazione nativa delle metriche verso Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organizzazione](/console/iam/concepts)
- Ora è possibile creare un tenant direttamente dalla pagina Tenants, selezionando i prodotti associati

### [Console — Attività](/console)
- I registri di attività possono ora essere filtrati per modulo

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- L'indirizzo IP pubblico viene ora visualizzato nell'elenco delle interfacce di rete di una macchina virtuale connessa a un VPC
- Una scheda « Salute » è ora disponibile nei dettagli di una macchina virtuale, accessibile dall'elenco

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- È ora possibile ordinare una replicazione VMware tra zone di disponibilità

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- L'elenco delle interfacce di rete di una macchina virtuale connessa a un VPC mostra ora l'indirizzo IP pubblico
- Una scheda « Salute » è ora disponibile nei dettagli di una macchina virtuale aperta dall'elenco

### [VM Instances](/public_cloud/vm_instances)
- L'indirizzo IP pubblico viene ora visualizzato nell'elenco degli adattatori di rete di un'istanza connessa a un VPC
- Una scheda « Salute » è ora disponibile nei dettagli di un'istanza, accessibile dall'elenco

### [Housing (Colocation)](/housing)
- Gli ordini di Colocazione sono ora disponibili: prenotazione di spazio, installazione e de-racking di apparecchiature
- Gli ordini di intervento di Colocazione sono ora disponibili: assistenza tecnica e smart hands
- Gli ordini di Colocazione per cablaggio e decablaggio (CPE) sono ora disponibili
- Gli ordini di Colocazione non supportati dalla console sono ora chiaramente indicati, con un invito a contattare il supporto

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
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

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante un'operazione bloccante, le macchine virtuali mostrano ora uno stato esplicito: backup, snapshot o ripristino in corso
- La modifica della CPU si adatta ora all'opzione di aggiunta della CPU a caldo (CPU hot add) e allo stato della macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante un'operazione bloccante, le macchine virtuali mostrano ora uno stato esplicito (backup, snapshot o ripristino in corso)
- I dettagli di una macchina virtuale mostrano ora un riepilogo dell'utilizzo (CPU, RAM, archiviazione)

### [VM Instances](/public_cloud/vm_instances)
- Le istanze visualizzano ora uno stato esplicito (backup, snapshot o ripristino in corso) durante un'operazione bloccante
- Le metriche di utilizzo istantaneo (CPU, RAM, archiviazione) sono ora visualizzate per ogni istanza
- L'unicità del nome è ora verificata sia alla creazione che al ripristino di un'istanza

### [Rete](/network/network_overview)
- Durante un ordine che include una fase di propagazione, le nuove reti vengono create solo alla validazione finale dell'ordine

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- Il tipo di rete (backbone privato) è ora visualizzato sugli adattatori di rete di un'istanza, anche senza la funzionalità VPC

## v4.44.1 — 2026-07-02

### [Console](/console)
- Miglioramenti tecnici minori

## v4.44.0 — 2026-07-02

### [Ordini](/console/orders)
- Le azioni di provisioning dell'infrastruttura considerano ora i ruoli di business (calcolo, rete, VPC, bare metal…) in aggiunta ai diritti di ordinazione

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Il monitoraggio del caricamento dei file ISO e OVF è stato migliorato ed è ora possibile annullare un caricamento in corso

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il monitoraggio del trasferimento dei file ISO e XVA è migliorato ed è ora possibile annullare un trasferimento in corso

### [VM Instances](/public_cloud/vm_instances)
- Le dimensioni del disco non accettano più valori decimali, sia alla creazione di un'istanza che all'aggiunta o all'estensione di un disco
- Gli indicatori di elaborazione delle istanze e delle relative risorse vengono ora correttamente ripristinati dopo un aggiornamento della pagina

### [VPC](/network/vpc)
- Dalla scheda di rete di una macchina virtuale collegata a una rete VPC, è ora possibile accedere direttamente al VPC interessato (VMware, OpenIaaS et VM Instances)
- Alcuni comandi VPC possono ora essere eseguiti in parallelo: aggiunta di un gateway durante la creazione di una rete privata (et inversement), e più eliminazioni simultanee di reti private

## 2026-06-30 — API Metriche

### [Metriche](/console/metrics/concepts)
- Un token di accesso può ora verificare la disponibilità del servizio di metriche tramite l'endpoint API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Console](/console)
- I selettori di rete distinguono ora visivamente le reti VPC e Backbone privato
- Un tutorial interattivo è ora disponibile nella pagina Utenti

### [Console — Attività](/console)
- È ora possibile visualizzare i dettagli di un'attività espandendone la riga nelle liste Recenti e Archiviati
- Ogni attività dispone ora di una pagina dei dettagli dedicata, accessibile tramite link diretto
- I dettagli di un'attività sono ora accessibili dalle notifiche di successo e di errore
- È ora possibile visualizzare il JSON completo di un'attività, copiarlo o scaricarlo
- L'elenco delle attività archiviate può ora essere ordinato per data di creazione

### [Ordini](/console/orders)
- La visualizzazione dello stato di avanzamento di un ordine è stata riprogettata

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- I dettagli di una macchina virtuale vengono ora visualizzati in una nuova vista
- Durante la modifica a caldo, la coerenza tra CPU e core per socket viene verificata: vengono visualizzati degli avvisi e i valori non validi non vengono accettati

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- È ora possibile richiedere la rimozione di un ambiente IaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- È disponibile una nuova vista dettagliata per le macchine virtuali
- Ora è possibile filtrare l'elenco delle macchine virtuali per zona di disponibilità (AZ)

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- La pagina di un Storage Repository mostra ora la data di acquisizione dello snapshot di un disco

### [VM Instances](/public_cloud/vm_instances)
- I dettagli di un'istanza vengono visualizzati in una nuova vista
- Il pulsante « Avvia un backup ora » è ora disabilitato quando il backup non è disponibile

### [VPC](/network/vpc)
- La descrizione dell'indirizzo IP pubblico viene ora visualizzata durante l'associazione a una rete privata

### [Object Storage](/storage/oss)
- Ora è possibile aggiungere una descrizione agli indirizzi IP autorizzati (whitelist) di un bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- La sezione « Privacy » è stata aggiornata

### [Object Storage](/storage/oss)
- La disponibilità del certificato TLS wildcard per l'accesso S3 in host-style è ora indicata
- Ora è possibile caricare un file su S3 da un URL pre-firmato
- Ora è possibile abilitare il versioning su un bucket
- Ora è possibile gestire le versioni di un file

## v4.41.1 — 2026-06-11

### [Ordini](/console/orders)
- Il massimo disponibile durante l'ordine di un Block Storage è stato aggiornato

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- I messaggi relativi agli stock sono ora più precisi al momento dell'ordine di ipervisori o dell'aumento della RAM di un cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Quando si aggiunge un disco esistente a una macchina virtuale, l'UUID del disco viene ora visualizzato quando più dischi hanno lo stesso nome

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Un avviso viene ora visualizzato durante la richiesta di aggiornamento dell'host master di un pool

### [VPC](/network/vpc)
- L'ordine di un VPC richiede ora che una zona di disponibilità OpenIaaS sia distribuita

## 2026-06-06 — Server MCP della Console

- Risorsa di assistenza per l'autenticazione che descrive l'ottenimento di un token di accesso personale e il formato dell'intestazione previsto; gli errori di autenticazione indicano ora la causa e le procedure da seguire
- Modifica di configurazione con impatto: l'URL dell'API specificata nella configurazione del server deve ora includere il segmento `/api`, da aggiornare prima del deployment di questa versione per evitare errori 404. L'URL viene validata all'avvio e l'infrastruttura a chiavi pubbliche/private è supportata

## 2026-06-05 — Server MCP della Console

- Consultazione del nome e della versione del server distribuito

## v4.40.0 — 2026-06-02

### [Console](/console)
- Un percorso di benvenuto interattivo è ora disponibile

### [Console — Organizzazione](/console/iam/concepts)
- Il gestore dei costi è ora disponibile nella vista organizzazione
- La vista organizzazione dispone ora di una visualizzazione dedicata

### [Ordini](/console/orders)
- La fase di rete non appare più negli ordini quando è abilitato solo il prodotto VPC

### [Supporto](/console)
- I piani e i contatti di supporto sono stati aggiornati

### [Ticket di supporto](/console)
- Le funzionalità di gestione IT sono state rimosse dai ticket di supporto

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Le funzionalità della libreria di contenuti pubblici sono state rimosse

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il valore predefinito del passaggio CloudInit è stato aggiornato per le distribuzioni OpenIaaS dalla Marketplace
- L'invio di caratteri speciali dagli appunti della console di una macchina virtuale è stato migliorato

### [Rete](/network/network_overview)
- Ora è possibile eliminare la descrizione di un indirizzo IP
- Ora è possibile compilare il campo `description` durante la creazione di una rete virtuale
- Ora è possibile compilare il campo `description` durante la modifica di una rete virtuale

### [VPC](/network/vpc)
- La descrizione di un IP floating VPC è ora visualizzata
- È ora possibile modificare la descrizione di un IP floating VPC

## 2026-05-25 — Server MCP della Console

- Ogni rifiuto di autorizzazione indica ora il prodotto interessato e il nome esatto dell'autorizzazione da abilitare sul token di accesso personale

## 2026-05-24 — Server MCP della Console

- Gestione del supporto tramite agente: elenco e dettagli dei ticket, creazione, commento, chiusura, consultazione delle manutenzioni pianificate e delle relative categorie, incidenti del tenant e incidenti della piattaforma
- Opzione di distruzione dopo l'avvio del deployment dal Marketplace
- Percorso guidato per il deployment di una macchina virtuale Linux
- Risorse consultabili direttamente: glossario dei termini IaaS OpenSource, topologia di un pool che riunisce host, repository di storage, reti e indicatori in un'unica visualizzazione, e catalogo Marketplace filtrato per l'IaaS OpenSource

## 2026-05-23 — Server MCP della Console

- Navigazione del catalogo Marketplace con filtri, e schede tecniche IaaS OpenSource (XVA) e VMware (OVF) che dettagliano processori, memoria, dischi e nomi esatti delle interfacce di rete
- Distribuzione di una macchina virtuale IaaS OpenSource da un elemento del catalogo, idempotente per nome
- Gestione dell'alimentazione delle macchine virtuali IaaS OpenSource — accensione, spegnimento, riavvio, pausa, sospensione e ripresa — idempotente per stato
- Monitoraggio delle operazioni a lunga esecuzione tramite le attività

## 2026-05-22 — Server MCP della Console

- Consultazione estesa dell'IaaS OpenSource: pool, host, macchine virtuali, snapshot, adattatori di rete con rilevamento degli indirizzi MAC duplicati, dischi virtuali e stato di replicazione, tutte queste operazioni sono in sola lettura
- Filtri applicabili lato server su tutte queste liste

## v4.39.2 — 2026-05-22

### [Rete](/network/network_overview)
- È ora possibile eliminare il record PTR di un indirizzo IP pubblico o di un indirizzo IP di interconnessione

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Le regole di denominazione degli snapshot delle macchine virtuali sono state modificate

### [Bare Metal](/iaas_bare-metal)
- Ora è possibile modificare la descrizione di un server

### [Rete](/network/network_overview)
- Ora è possibile modificare il record PTR di un indirizzo IP di interconnessione

## v4.39.0 — 2026-04-23

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- I dischi esistenti vengono ora visualizzati durante l'aggiunta di un nuovo disco
- Durante lo spostamento (vMotion) di una macchina virtuale in modalità « sola risorsa di calcolo », è ora possibile scegliere un cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- I dischi esistenti vengono ora visualizzati durante l'aggiunta di un nuovo disco

### [VM Instances](/public_cloud/vm_instances)
- L'elenco delle istanze VM può ora essere esportato in formato CSV
- La visualizzazione della frequenza di una politica di backup è stata rivista

### [Bare Metal](/iaas_bare-metal)
- La selezione delle reti è ora obbligatoria durante la propagazione di una rete su un Bare Metal

## 2026-04-20 — Database gestiti (Preview)

### [MariaDB gestito](/managed_mariadb)
- Pubblicazione dei parametri del motore associati a ciascun modello di istanza : `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` e `table_open_cache`
- Revisione dei modelli di istanza : il limite massimo è ridotto a 3X-Large (8 vCPU e 32 Gio di memoria) e lo storage massimo estendibile a caldo passa da 512 Gio a 128 Gio

### [PostgreSQL gestito](/managed_postgresql)
- Pubblicazione dei parametri del motore associati a ciascun modello di istanza: `shared_buffers`, `effective_cache_size`, `work_mem` e `max_connections`
- Revisione dei modelli di istanza: il limite massimo è ridotto a 3X-Large (8 vCPU e 32 GiB di memoria) e lo storage massimo estendibile a caldo passa da 512 GiB a 128 GiB

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Le reti proposte sono ora filtrate sia alla creazione di un'istanza che alla modifica di un adattatore di rete

## v4.38.0 — 2026-04-17

### [Identità e accessi (IAM)](/console/iam)
- Sono disponibili sei nuove autorizzazioni : `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` e `public_cloud_vm_instances_console_access`
- Il nome del prodotto interessato appare ora all'inizio della descrizione di ogni autorizzazione

### [Gestione dei costi](/console/billing/concepts)
- L'interfaccia del gestore dei costi è stata migliorata
- L'unità visualizzata nei grafici di consumo è stata aggiornata

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante il deployment di una macchina virtuale, la fase di selezione di un'immagine dal Marketplace è stata rivista

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- È ora possibile commutare la visualizzazione della pagina catalogo tra griglia e tabella
- La fase di selezione di un'immagine Marketplace durante il deployment di una macchina virtuale è stata aggiornata

### [VM Instances](/public_cloud/vm_instances)
- La dashboard mostra ora l'utilizzo delle quote delle istanze VM
- Una nuova pagina presenta l'elenco delle istanze VM
- Ora è possibile creare una nuova istanza
- Ora è possibile visualizzare e gestire i dischi, le interfacce di rete e gli snapshot di un'istanza
- Ora è possibile aggiornare le capacità di un'istanza e modificarne lo stato
- Ora è possibile accedere alla console di un'istanza

### [LLMaaS](/llmaas)
- La visualizzazione dei prezzi nella vista di consumo e il modulo di ricarica del credito sono stati aggiornati

## 2026-04-15 — Database gestiti (Preview)

### [MariaDB gestito](/managed_mariadb)
- Disponibilità in anteprima di MariaDB Managé : modelli StandAlone e Distributed in cluster a tre nodi dietro un proxy, archiviazione replicata su tre zone di disponibilità e impegno di disponibilità del 99,9 %

### [PostgreSQL gestito](/managed_postgresql)
- Apertura in Preview di PostgreSQL Managé: modelli StandAlone e Distributed in cluster a tre nodi dietro un proxy, replicazione sincrona multi-zona senza perdita di dati e ripristino a un punto nel tempo

## v4.37.0 — 2026-04-02

### [Gestione dei costi](/console/billing/concepts)
- Aggiunta dell'importo previsto nella pagina dei consumi per il grafico e il trend
- Miglioramento visivo in caso di errore o di dati insufficienti sui consumi del mese corrente

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento del modulo per distribuire una macchina virtuale da una voce del catalogo
- Aggiunta della possibilità di modificare il tipo di visualizzazione (griglia o tabella) dalla pagina catalogo

## v4.36.0 — 2026-03-27

### [Console](/console)
- Aggiornamento dei grafici delle metriche e consumo

### [Gestione dei costi](/console/billing/concepts)
- Aggiunta della pagina del gestore dei costi
- Possibilità di visualizzare i costi del mese corrente
- Possibilità di visualizzare i costi su un intervallo di date e di confrontare le tendenze

### [Ordini](/console/orders)
- Blocco del deprovisioning di un cluster di ipervisori quando un cluster di storage è collegato

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di filtri e ordinamento all'elenco dei dischi dai dettagli di un Block Storage

### [VPC](/network/vpc)
- Miglioramento dell'interfaccia per il caricamento dei dati nei moduli

## v4.35.4 — 2026-03-18

### [Console](/console)
- Miglioramento della riconnessione ai websocket

### [Supporto](/console)
- Aggiunta di una soluzione di fallback per la creazione di un ticket di supporto quando i WebSocket sono disconnessi

## v4.35.3 — 2026-03-17

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiornamento del recupero dei dischi durante il caricamento delle repliche dalla scheda Replicazione

## v4.35.0 — 2026-03-11

### [Ordini](/console/orders)
- Aggiunta del comando di eliminazione di un mapping cpool/spool
- Aggiunta del comando di deprovisioning della rete privata VPC
- Modifiche al comando di deprovisioning di un volume Bare Metal, è possibile richiedere l'eliminazione dall'elenco dei volumi
- Aggiunta del comando di eliminazione del mapping del volume Bare Metal
- Aggiunta del comando di deprovisioning di VPC
- Blocco del deprovisioning di un datastore se è l'ultimo di un datastore cluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Possibilità di aggiungere un limite di RAM su una macchina virtuale

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiornamento del multi vMotion VMware per consentire lo spostamento delle VM da un cluster a un altro

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta della possibilità di aggiornare un host
- Visualizzazione delle informazioni sugli aggiornamenti di un host

### [Rete](/network/network_overview)
- Disattivazione del pulsante di eliminazione della propagazione di rete quando nessuna propagazione viene consegnata

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

- Consultazione dei modelli di macchine virtuali, delle reti, degli host e dei repository di archiviazione IaaS OpenSource

## 2026-02-03 — Server MCP della Console

- Disponibilità del server MCP (Model Context Protocol) della Console, autenticato tramite token di accesso personale
- Consultazione e gestione delle macchine virtuali VMware tramite un agente: elenco, dettagli, datacenter virtuali, accensione e spegnimento

## v4.33.0 — 2026-01-21

### [Ordini](/console/orders)
- Aggiunta del comando di rimozione di una propagazione di rete su OpenIaaS

### [Metriche](/console/metrics/concepts)
- Aggiunta di filtri per le pagine delle metriche VMWare e OpenIaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta della pagina delle metriche 'Macchine Virtuali'
- Aggiunta della pagina dei dettagli delle metriche per ogni VM

## v4.32.0 — 2026-01-14

### [Supporto](/console)
- Aggiornamento della modale di chiusura di un ticket di supporto

### [IaaS VMware — Backup](/iaas_vmware)
- Durante l'assegnazione di una politica di backup a un disco, viene ora proposto di inventariare il disco se non viene riconosciuto dalla soluzione di backup

### [Bare Metal](/iaas_bare-metal)
- L'eliminazione di un volume BFS su un Bare Metal è ora bloccata, il volume verrà eliminato all'eliminazione del Bare Metal
- Al momento dell'ordine di un Bare Metal, il primo volume viene ora rinominato 'volume BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiornamento delle spiegazioni dei tooltip sulle opzioni disponibili durante il ripristino di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- I snapshot associati alle politiche di backup sono ora visibili
- Visualizzazione dell'Host associato alla posizione di archiviazione di un ISO durante l'upload e dalla pagina catalogo

### [Object Storage](/storage/oss)
- Visualizzazione di una card esplicativa dalla scheda MPU incompleti quando l'IP della Console non è autorizzato, impedendo la visualizzazione della scheda

### [Marketplace](/marketplace)
- Visualizzazione della card di errore durante l'accesso a una pagina della marketplace inesistente

## v4.30.1 — 2025-12-16

### [Console](/console)
- Miglioramento della visualizzazione degli errori vuoti mostrando per impostazione predefinita lo stato HTTP restituito

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Possibilità di associare un IP statico a un indirizzo MAC personalizzato

### [LLMaaS](/llmaas)
- Sulle metriche di consumo, filtraggio delle serie con valori pari a 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Miglioramento della sincronizzazione delle azioni sulle pagine VPC
- Aggiunta dell'associazione di un IP statico a un IP pubblico dall'elenco degli IP statici

### [Archiviazione](/storage/oss)
- Aggiunta di MPU incompleti dalla pagina di un bucket
- Possibilità di eliminare un MPU incompleto

## v4.28.0 — 2025-11-21

### [Console](/console)
- Aggiunta della possibilità di visualizzare messaggi informativi globali visibili su tutta l'applicazione

### [Ordini](/console/orders)
- Possibilità di ordinare l'aggiunta di crediti LLMaaS per il tenant
- Possibilità di ordinare un VPC
- Possibilità di ordinare una rete privata all'interno di un VPC
- Possibilità di ordinare un IP pubblico per il prodotto VPC
- Possibilità di abilitare la gateway per un VPC
- Aggiunta della possibilità di ordinare la rimozione di un tenant

### [Metriche](/console/metrics/concepts)
- Miglioramento della visualizzazione dei tooltip sui grafici delle metriche: è ora possibile fare clic su un punto per bloccare il tooltip e visualizzare tutti i dati

### [Rete](/network/network_overview)
- Raggruppamento delle pagine Reti e Internet sotto un unico prodotto: Backbone privato
- Aggiunta della gestione del record PTR durante la modifica di un IP pubblico
- Blocco della condivisione per alcuni tipi di reti

### [VPC](/network/vpc)
- Integrazione del prodotto VPC
- Aggiunta di una pagina di elenco dei VPC
- Aggiunta di una pagina Dettagli di un VPC
- Possibilità di gestire le reti private, gli indirizzi IP pubblici e la gateway di un VPC
- Possibilità di associare un indirizzo IP statico di una rete privata VPC a un adattatore di rete VMware o OpenIaaS
- Possibilità di associare un indirizzo IP statico a un indirizzo IP pubblico di un VPC

### [LLMaaS](/llmaas)
- Aggiunta di una scheda Fatturazione nella pagina LLMaaS per i tenant con il prepago attivato
- Visualizzazione del credito residuo per i tenant in modalità prepago, nella dashboard e dalla scheda Fatturazione

## v4.27.0 — 2025-11-12

### [Ordini](/console/orders)
- Aggiunta di una verifica dello stock disponibile durante l'ordine delle risorse
- Aggiunta di un filtro per tipo di ordine e per prodotto nell'elenco degli ordini

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento della console delle macchine virtuali. Migliore gestione della tastiera e aggiunta di un'area di trasferimento.

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiunta di un'allerta sul dashboard per i VSnap di backup SPP con un utilizzo troppo elevato

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Miglioramento della console delle macchine virtuali. Migliore gestione della tastiera e aggiunta di un clipboard.

### [Marketplace](/marketplace)
- Aggiunta della possibilità di visualizzare i dettagli tecnici di un'immagine

## v4.26.5 — 2025-11-04

### [Console](/console)
- Miglioramento delle dimensioni dei grafici della dashboard al ridimensionamento della finestra

## v4.26.3 — 2025-10-31

### [Metriche](/console/metrics/concepts)
- Modifica del nome delle esportazioni di metriche visualizzate nei grafici

## v4.26.0 — 2025-10-22

### [Console](/console)
- Aggiunta di un pulsante per copiare l'UUID del perimetro corrente dal profilo utente
- Riprogettazione completa della Dashboard
- Aggiunta della riconnessione automatica al monitoraggio delle attività quando la connessione viene interrotta

### [Ordini](/console/orders)
- Aggiornamento dei moduli di ordine per aggiungerli alle diverse pagine interessate (esempio nuovo Datastore dalla pagina Archiviazione)

### [Supporto](/console)
- Aggiunta dell'indirizzo email della persona che ha chiuso il ticket nella valutazione del ticket di supporto

### [Metriche](/console/metrics/concepts)
- Riprogettazione del recupero delle metriche VMware, l'URL della pagina è ora /iaas/metrics
- Aggiunta di una scheda metriche infrastrutturali VMware su Compute
- Aggiunta di una scheda metriche infrastrutturali VMware su Storage
- Aggiunta di una pagina delle metriche per OpenIaaS
- Aggiunta di una scheda metriche infrastrutturali OpenIaaS su Compute
- Aggiunta di una scheda metriche infrastrutturali OpenIaaS su Storage

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta delle nuove chiavi extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocco della selezione di un hostcluster senza host attivo
- Durante la creazione di una macchina virtuale VMware, la scelta del Vcenter avviene ora in base alla zona di disponibilità selezionata
- Aggiunta di limiti per nomi e descrizioni durante il caricamento di un file su VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante l'aggiunta di un disco OpenIaaS, gli spazi di archiviazione non appartenenti al Pool della macchina virtuale vengono ora filtrati
- Durante un snapshot, l'opzione per acquisire la memoria è ora deselezionata per impostazione predefinita

### [IaaS OpenSource — Backup](/iaas_opensource)
- Aggiunta della possibilità di eseguire un backup dalla scheda backup di una macchina virtuale OpenIaaS

### [Rete](/network/network_overview)
- Rimozione del vincolo che impediva la selezione di più tipi di reti nella pagina delle reti virtuali

### [Object Storage](/storage/oss)
- Ottimizzazione del recupero dei file di un bucket

### [PaaS OpenShift](/paas_openshift)
- Aggiunta di una pagina che elenca i cluster OpenShift
- Aggiunta di una pagina di dettagli di un cluster OpenShift

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

### [Rete](/network/network_overview)
- Aggiunta di una validazione per bloccare l'eliminazione della condivisione di una rete se la rete è propagata in un altro Tenant

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
- Non visualizzare l'alerta HA sulle VM interessate quando l'ISO locale non è montato
- Durante l'aggiunta o il ridimensionamento di un disco, indicare se l'SR associato è utilizzato per una configurazione di replicazione

### [IaaS OpenSource — Backup](/iaas_opensource)
- Aggiunta del nome dell’AZ al report di backup

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

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Modifica delle alerte relative alla configurazione del formato del disco selezionato, durante un VMotion che include lo storage

## v4.22.0 — 2025-09-02

### [Ordini](/console/orders)
- Aggiunta del comando per l'eliminazione della propagazione di rete dalla pagina di tutti i comandi, tutti i comandi disponibili sono ora accessibili da questa pagina

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiornamento delle condizioni relative al cambio del formato del disco durante lo spostamento di una macchina virtuale e aggiunta di informazioni sul formato del disco corrente durante una configurazione per disco

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aggiornamento della visualizzazione quando nessun dato viene creato/provisionato o quando si verifica un errore durante il recupero delle informazioni.

### [Supporto](/console)
- Apertura delle modali di supporto con il servizio associato pre-selezionato
- Aggiunta di un badge nel menu e nella navbar quando un ticket di supporto richiede una risposta

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta della possibilità di esportare in CSV l'elenco delle replica VMware
- Miglioramento dello slider di selezione della RAM su alcuni ordini
- Aggiunta della gestione delle opzioni Static differed and immediate per il vMotion

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Blocco della rimozione di un cluster non vuoto o con host/datastore non in manutenzione

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta della possibilità di esportare in CSV l'elenco delle repliche OpenIaaS e delle politiche associate
- Aggiunta di dettagli sugli strumenti utilizzati dalle macchine virtuali (pvDrivers, managementAgent e tools)
- Aggiunta di verifiche per l'alta disponibilità (HA)

### [Rete](/network/network_overview)
- Modifica della selezione di un indirizzo IPv4 con un elenco disponibile

## v4.20.0 — 2025-07-29

### [Ordini](/console/orders)
- Aggiunta di informazioni relative alla disponibilità limitata ed esaurita delle risorse di calcolo durante l'ordine di una nuova zona di disponibilità

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un'opzione VMware Tools per sincronizzare l'ora con l'host
- Aggiornamento delle condizioni sulla crittografia di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Rimozione delle informazioni sull'ultima esecuzione delle politiche di replicazione che causavano rallentamenti
- Gestione del checksumming TX per gli adattatori di rete
- Aggiunta di un avviso sulla replicazione OpenIaaS se il numero di AZ è inferiore a 2
- Aggiunta dell'alta disponibilità (HA) per i pool e le macchine virtuali

## v4.19.0 — 2025-07-24

### [Ordini](/console/orders)
- Aggiornamento dell'ordine di indirizzi IP pubblici con la possibilità di ordinare un prefisso IPv6
- Aggiornamento della visualizzazione degli ordini disponibili quando nessun ambiente è provisionato

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un filtro di replica all'elenco delle macchine virtuali
- Aggiornamento della modale di creazione di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un filtro di replicazione all'elenco delle macchine virtuali

### [Rete](/network/network_overview)
- Aggiornamento della pagina Internet con l'aggiunta della gestione IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aggiornamento della visualizzazione quando nessun dato viene creato/provisionato o quando si verifica un errore durante il recupero delle informazioni.

### [Ordini](/console/orders)
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
- La descrizione sulla soddisfazione alla chiusura di un ticket è ora opzionale

## v4.16.0 — 2025-06-04

### [Console](/console)
- Aggiunta delle traduzioni in inglese nella pagina dei report di consumo del menu Ordini

### [Ordini](/console/orders)
- Possibilità di ordinare l'aumento delle dimensioni di un volume bare metal
- Possibilità di ordinare l'aumento delle dimensioni di un Block Storage OpenIaaS

### [Supporto](/console)
- Riprogettazione della creazione di un ticket di supporto
- Interpretazione del markdown su un ticket di supporto e aggiornamento dell'ordine di visualizzazione dei commenti
- Aggiunta di un feedback alla chiusura di un ticket di supporto
- Aggiornamento della visualizzazione delle icone in base all'impatto di un incidente globale

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un'opzione per conservare la configurazione di una macchina virtuale durante un ripristino in Produzione sul cluster di origine

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un messaggio di avviso in caso di mancanza di spazio su disco su un Block Storage (90% utilizzato) e avvertenza durante i comandi

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
- Possibilità di copiare l'UUID di un disco, di una rete virtuale o di uno snapshot
- Possibilità di scegliere il nome di una macchina virtuale durante il deployment di un file XVA
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
- Aggiunta di statistiche e informazioni di contatto nella pagina Supporto

### [Ordini](/console/orders)
- Riprogettazione della visualizzazione dei dettagli di un ordine
- Riprogettazione della visualizzazione delle opzioni di ordine
- Aggiornamento della visualizzazione per ordinare il primo baremetal quando non ce n'è nessuno
- Aggiornamento dell'ordine di un Bare Metal con la selezione della propagazione delle reti sulle interfacce del Bare Metal
- Possibilità di propagare un VLAN su un Bare Metal
- Possibilità di aggiungere un volume a un baremetal
- Possibilità di deprovisionare un volume da un Bare Metal
- Possibilità di deprovisionare un Bare Metal

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un pulsante per copiare l'UUID sulle reti e sui cataloghi VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un pulsante copia UUID sulle reti e sui cataloghi OpenIaaS
- Aggiunta di un pulsante copia UUID su un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Aggiunta della visualizzazione delle interfacce di rete e delle reti propagate su un server bare metal
- Aggiunta delle azioni di accensione, riavvio e spegnimento di un server bare metal

### [Rete](/network/network_overview)
- Possibilità di visualizzare le propagazioni su un Bare Metal di una rete

## v4.12.0 — 2025-03-25

### [Console](/console)
- Possibilità di rimuovere un indirizzo IP dalla whitelist dalla pagina Accesso

### Etichette
- Aggiunta di tag alle macchine virtuali OpenIaaS

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiornamento del recupero delle raccomandazioni API sulle regole di affinità/anti-affinità di un HostCluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Visualizzare l'importazione di un XVA OpenIaaS nell'elenco dei download
- Possibilità di associare un disco esistente a una macchina virtuale
- Possibilità di disassociare un disco esistente da una macchina virtuale

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiornamento della visualizzazione dei dischi di un Block Storage OpenIaaS

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Aggiornamento del messaggio di errore durante l'accesso ai file di un bucket Object Storage

## v4.11.1 — 2025-03-12

### [Ordini](/console/orders)
- Aggiornamento dei nomi delle zone di disponibilità durante un ordine
- Modifica del minimo di datastore durante l'ordine di un datastoreCluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Quando il campo label degli hostCluster e datastoreCluster viene impostato su vuoto, il nome tecnico verrà applicato come predefinito

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Quando il campo label dei pool viene lasciato vuoto, verrà applicato il nome tecnico di default
- Aggiunta di un tooltip informativo nella pagina catalogo e durante l'importazione ISO per indicare che il formato XVA è supportato durante la creazione di una macchina virtuale

## v4.11.0 — 2025-03-10

### [Ordini](/console/orders)
- Aggiornamento dei tipi di rete consentiti durante la creazione di una AZ
- Aggiornamento delle risorse minime da provisionare durante l'ordine di una nuova zona di disponibilità

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Visualizzazione del nome della macchina virtuale nella scheda della console per VMware

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiunta della gestione delle etichette sui datastore cluster e host cluster VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Consentire il deployment di una macchina virtuale tramite importazione XVA per OpenIaaS
- Aggiunta della gestione delle etichette sui pool OpenIaaS
- Visualizzazione del nome della macchina virtuale nella scheda della console per OpenIaaS

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiornamento delle informazioni CPU degli host e dei pool OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Aggiunta delle IOPS/TO sui volumi baremetal

## v4.10.0 — 2025-03-04

### [Console](/console)
- Aggiornamento dei link verso la nuova documentazione pubblica

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un avviso per informare gli utenti in caso di indirizzi MAC duplicati nell'elenco delle macchine virtuali e durante la creazione o la modifica degli adattatori di rete
- Aggiunta di un'opzione per forzare l'arresto o il riavvio di una macchina virtuale
- La memoria non sarà più inclusa per impostazione predefinita durante uno snapshot se la macchina virtuale non è accesa
- Possibilità di rinominare e ridimensionare un disco
- Aggiunta della possibilità di eliminare i file ISO e i modelli dalla pagina catalogo
- Aggiunta della possibilità di eliminare il disco di configurazione 'Cloud Init' durante il deployment di una macchina virtuale

## v4.9.1 — 2025-02-27

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
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

### [Archiviazione](/storage/oss)
- Copiare negli appunti un endpoint S3

## v4.8.0 — 2025-02-14

### [Ordini](/console/orders)
- Aggiunta dell'ordine di propagazione di una rete sui Pool OpenIaaS
- Aggiunta degli ordini di propagazione di rete nella pagina di tutti gli ordini

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

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzare le relazioni tra datastore clusters e host clusters nelle pagine Calcolo e Archiviazione

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

### [Console — Notifiche](/console)
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
- Collegare un cluster di ipervisore a un cluster di archiviazione

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Visualizzare lo spazio rimanente tra parentesi negli alberi di selezione dello storage

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

### [IaaS VMware — Backup](/iaas_vmware)
- Proporre di esportare solo gli elementi filtrati nell'esportazione CSV dei report di backup nella sotto-scheda macchine virtuali

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
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
- Aggiunta di validazioni sulla replicazione di una macchina virtuale
- Aggiunta di nuove extra config PCIPassthru dalla configurazione avanzata di una macchina virtuale per la gestione GPU
- Possibilità di aggiungere un controller PCI alle macchine virtuali

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzazione delle raccomandazioni e dei guasti DRS da un cluster di ipervisori
- Nuovo stato per gli ipervisori e i datastore quando è in corso una richiesta di passaggio in manutenzione
- Aggiunta delle informazioni sulla GPU di un ipervisore

### [IaaS VMware — Backup](/iaas_vmware)
- Rimuovere più opzioni di Backup non funzionanti su macchine virtuali in modalità test

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una pagina di backup per la sezione backup OpenIaas che elenca gli errori, le policy, i report dei backup e consente il recupero delle macchine virtuali eliminate

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di una pagina per elencare le zone di disponibilità OpenIaas
- Aggiungere una pagina di archiviazione per la sezione OpenIaas
- Aggiunta di una pagina di calcolo per la sezione OpenIaas

### [Housing (Colocation)](/housing)
- Modifica delle informazioni visualizzate dalla pagina delle periferiche

## v4.1.1 — 2024-11-18

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento della modifica della memoria, la conversione viene eseguita verso l'unità con il valore intero più vicino
- Durante la creazione di un'istantanea, il pulsante per salvare la RAM è disabilitato quando la macchina virtuale è spenta
- Quando più macchine virtuali vengono espandibili, l'elenco dei dischi non viene visualizzato immediatamente

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiunta del pulsante di esportazione CSV nella scheda macchine virtuali della pagina dei report di backup

## v4.1.0 — 2024-11-13

### [Console](/console)
- Possibilità di inviare un file durante un feedback

### [Identità e accessi (IAM)](/console/iam)
- Disattivazione della possibilità di eliminare un proprietario

### [Ordini](/console/orders)
- Aggiunta della gestione di aggiunta, eliminazione e modifica di un datastore dalla pagina degli ordini
- Aggiunta della possibilità di eliminare un Host

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta delle attività di snapshot nella scheda snapshot di una VM
- Visualizzazione della dimensione reale delle macchine virtuali nell'esportazione CSV

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Nelle pagine di calcolo e archiviazione, il filtro sulle zone di disponibilità si applica anche alle schede cluster
- Visualizzazione delle percentuali di utilizzo sulle barre di consumo (CPU / RAM / Stockage)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una verifica sulla presenza di politiche di backup sull'opzione di avvio automatico
- Aggiunta di un'opzione per forzare l'arresto/riavvio delle macchine virtuali senza guest-tools installati
- Miglioramento del messaggio di esecuzione di una politica OpenIaas su una macchina virtuale specifica

### [Bastion](/bastion)
- Aggiunta di una validazione sul campo Host di un dispositivo

## v4.0.3 — 2024-11-04

### [Console](/console)
- Miglioramenti e correzioni legati al nuovo design

## v4.0.2 — 2024-10-30

### [Console](/console)
- Miglioramenti e correzioni legati al nuovo design

## v4.0.1 — 2024-10-25

### [Console](/console)
- Miglioramenti e correzioni legati al nuovo design

## v4.0.0 — 2024-10-18

### [Console](/console)
- Nuovo design della Console
- Riprogettazione delle pagine infrastruttura e backup

---

:::info[Cronologia precedente]

La cronologia completa delle versioni precedenti alla v4.0 (da v1.0 a v3.38.1, da febbraio 2019 a ottobre 2024) è disponibile nella [cronologia Git](https://github.com/Cloud-Temple/docs) del progetto.

:::
