---
title: Novità sui prodotti
sidebar_position: 999
---

# Novità sui prodotti & evoluzioni

> Questo changelog elenca le nuove funzionalità e le evoluzioni significative della piattaforma Cloud Temple.
> Le correzioni di bug sono incluse a partire dalla versione 4.50.0.

## v4.52.0 — 2026-10-06

### [IaaS VMware — Backup](/iaas_vmware)
- Ripristino di una macchina virtuale i cui dischi sono distribuiti su più datastore: scelta di un datastore di destinazione per ogni datastore di origine

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Scheda Snapshot: identificazione del tipo di ogni snapshot (manuale, backup, replica, orfano)
- Rilocazione di una macchina virtuale: possibilità di mantenere l'host di origine per migrare solo lo storage, ora utilizzabile su un pool mono-host
- Correzione della casella « Distruggere la configurazione cloud-init dopo l'avvio », senza effetto durante il deploy di una macchina virtuale tramite template

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Host master: rimozione delle azioni di manutenzione e indicazione del percorso da seguire per la sua eliminazione (eliminazione del suo pool)
- Storage: messa in manutenzione e uscita dalla manutenzione di un Block Storage dalla console

### [IaaS OpenSource — Backup](/iaas_opensource)
- Rapporti di backup: le esecuzioni di una policy sono ordinate per data di inizio, dalla più recente alla più vecchia
- Rapporti di backup: varie correzioni sullo schermo (aggiornamento, ordinamento e paginazione delle esecuzioni)

### [Marketplace](/marketplace)
- Deploy di un'immagine: precompilazione della configurazione cloud-init (user-data e configurazione di rete) fornita dall'immagine, modificabile prima del deploy

## v4.51.0 — 2026-09-18

### [Console — Organizzazione](/console/iam/concepts)
- Aggiunta di una colonna « Tipo » (SecNumCloud / Legacy) nell'elenco dei tenant
- Il preferito di un tenant è ora indicato da un badge « Preferito » nell'elenco dei tenant

### [Identità & Accesso (IAM)](/console/iam)
- Chiarimento dell'impatto della reiscrizione di un utente: la modale di conferma specifica che un nuovo e-mail di iscrizione gli verrà inviato

### [Supporto](/console)
- Riassegnazione del blocco di informazioni di supporto in modalità Organizzazione

### [Metriche](/console/metrics/concepts)
- Correzione delle legende dei grafici delle metriche delle macchine virtuali

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Correzione della procedura guidata vMotion: il pulsante « Avanti » rimaneva bloccato dopo un errore di compatibilità dell'host quando si tornava a uno step precedente
- Invio delle scorciatoie da tastiera di sistema (Alt+Tab, ⌘, Esc…) alla console della macchina virtuale a schermo intero (API Keyboard Lock, browser Chromium)
- Correzione della console VMware (WMKS): un Alt+Tab lasciava il tasto Alt considerato come premuto lato macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Chiarimento dell'avviso allo spostamento di un disco virtuale: le macchine virtuali associate non sono più annunciate come sospese, solo alcune azioni sono temporaneamente indisponibili

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Dettaglio di un pool: visualizzazione e gestione dei Block Storage da Compute, e degli host da Storage (schede incrociate)

## v4.50.0 — 2026-09-10

### [Console](/console)
- Aggiornamento delle unità di quota visualizzate (GiB)

### [Console — Organizzazione](/console/iam/concepts)
- Visualizzazione del monitoraggio della preparazione di un tenant alla sua creazione

### [Ordini](/console/orders)
- Aggiunta dell'ordine di eliminazione di un IP pubblico VPC
- Aggiunta dell'ordine di eliminazione di un IP Private Backbone

### [VPC](/network/vpc)
- Visualizzazione dello stato di configurazione e scelta dell'IP statico sulle operazioni delle macchine virtuali
- Possibilità di scegliere una rete VPC e di configurare un IP statico in tutti i form che richiedono una configurazione di rete su una macchina virtuale (creazione, deploy, migrazione, ripristino, esportazione)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Aggiunta della colonna « Fabric » nella scheda di rete di un server Bare Metal

## v4.49.1 — 2026-09-03

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- L'azione « Associa un IP pubblico » della scheda « Schede di rete » è disabilitata quando il gateway del VPC non è attivato

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- L'azione « Associa un IP pubblico » della scheda « Schede di rete » è disabilitata quando il gateway del VPC non è attivato

### [Istanze VM](/public_cloud/vm_instances)
- L'azione « Associa un IP pubblico » della scheda « Schede di rete » è disabilitata quando il gateway del VPC non è attivato

## v4.49.0 — 2026-08-31

### [Console](/console)
- Avvio automatico del tutorial di benvenuto al primo accesso di un utente
- Eliminazione delle notifiche di errore al caricamento della dashboard quando gli ambienti non sono provisionati

### [Console — Organizzazione](/console/iam/concepts)
- Visualizzazione del prezzo di attivazione di un tenant nella modale di creazione, in modalità Organizzazione

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Associazione e disassociazione di un IP pubblico dalla scheda « Schede di rete » di una macchina virtuale collegata a un VPC

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzazione del tipo di blade piuttosto che la sua descrizione nella « Classe » dei cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il numero di vCPU proposto per il ridimensionamento di una macchina virtuale è ora limitato dalla sua capacità massima
- Associazione e disassociazione di un IP pubblico dalla scheda « Schede di rete » di una macchina virtuale collegata a un VPC

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Visualizzazione del tipo di blade piuttosto che la sua descrizione nella « Classe » dei pool

### [IaaS OpenSource — Backup](/iaas_opensource)
- Menzione al ripristino che specifica che la macchina virtuale di origine non viene sostituita: viene creata una nuova macchina virtuale con data

### [Istanze VM](/public_cloud/vm_instances)
- Nascondimento dei campi e messaggio esplicito quando non è disponibile alcuno storage, all'aggiunta e all'estensione di un disco
- Associazione e disassociazione di un IP pubblico dalla scheda « Schede di rete » di una macchina virtuale collegata a un VPC
- Possibilità di scegliere un template personalizzato (vCPU e RAM liberi, entro i limiti della famiglia di istanza) alla creazione, al ripristino e al ridimensionamento di un'istanza VM

### [Bare Metal](/iaas_bare-metal)
- Visualizzazione del tipo di blade piuttosto che la sua descrizione nella « Classe » dei server Bare Metal

### [Rete](/network/network_overview)
- Prenotazione IP interco: blocco degli indirizzi di rete e di broadcast, e indicatore « Riservato » sugli IP riservati

### [VPC](/network/vpc)
- Il pulsante « Nuovo VPC » dell'elenco è ora disabilitato quando il limite di VPC è raggiunto

## v4.48.0 — 2026-08-13

### [Console](/console)
- Miglioramento della persistenza della scelta della lingua, ora legata al profilo utente

### [Console — Organizzazione](/console/iam/concepts)
- I prodotti di un tenant sono ora raggruppati in base al fatto che siano modificabili, non disattivabili o non disponibili, con il motivo del blocco

### [Gestore dei costi](/console/billing/concepts)
- La sezione Gestore dei costi non appare più sulla dashboard Organizzazione quando l'organizzazione non è idonea
- Visualizzazione di una scheda di errore, invece di un costo nullo, quando il recupero dei consumi fallisce sulla dashboard Organizzazione
- Le righe del piano di supporto sono ora raggruppate sotto « Supporto » nel costo per tenant, invece di un tenant « Sconosciuto »

### [Ordini](/console/orders)
- Messaggio esplicito quando non c'è più spazio disponibile sufficiente per un tipo di storage, durante l'ordine di una zona di disponibilità o di un pool

### [Supporto](/console)
- Le descrizioni e i rapporti post-incidente sono ora formattati (markdown) nella pagina Incidenti
- I messaggi globali di supporto sono ora visualizzati in modalità Organizzazione

### [Istanze VM](/public_cloud/vm_instances)
- Il costo stimato visualizzato durante la creazione di un'istanza VM è ora mensile, su una base di 730 h/mese

### [VPC](/network/vpc)
- Il nome del VPC è ora visualizzato davanti a quello della rete nei selettori di rete
- Il nome del VPC precede ora quello della rete nella scheda Adattatori di rete delle macchine virtuali
- Armonizzazione dei colori delle etichette del tipo di VPC (condiviso, dedicato) con quelle delle reti
- L'opzione Istanze VM è ora disponibile dal form di associazione di un IP statico
- Gli adattatori di rete già associati a un IP statico sono ora disabilitati nel form di associazione

### [Object Storage](/storage/oss)
- Scelta dello stile di indirizzamento (path-style o virtual-hosted) durante la generazione di un link di condivisione di un file
- Avviso sui bucket il cui nome non è compatibile con DNS: è possibile solo l'accesso path-style

### [Marketplace](/marketplace)
- Solo le zone di disponibilità compatibili con l'immagine selezionata sono ora proposte durante il deploy dal Marketplace
- Il prezzo di un prodotto del Marketplace deployato come Istanza VM indica ora che è calcolato in base alla CPU, alla RAM e allo storage

### [Housing (Colocation)](/housing)
- Aggiunta dei tipi di interfaccia 1000BASE-SX e 10GBASE-SR alla prenotazione di spazio in colocation

## v4.47.0 — 2026-07-30

### [Console](/console)
- La documentazione Swagger del modulo Ordini è ora disponibile

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante il deploy di una macchina virtuale, sono ora proposti solo gli elementi deployabili dal catalogo (OVF e template di macchine virtuali)

### [Istanze VM](/public_cloud/vm_instances)
- Il costo stimato (orario) è ora visualizzato durante la creazione di un'istanza, con il dettaglio per componente (vCPU, RAM, dischi)

### [VPC](/network/vpc)
- Durante l'ordine di un nuovo VPC, è ora possibile scegliere un deploy su un ambiente dedicato (tua infrastruttura OpenIaaS) o su un ambiente condiviso (soggetto a sottoscrizione del prodotto Istanze VM)

### [Object Storage](/storage/oss)
- Le maiuscole sono ora rifiutate nel nome di un bucket, conformemente alle regole di denominazione

### [Marketplace](/marketplace)
- È ora possibile deployare un'istanza VM (Public Cloud) direttamente dalla scheda di un prodotto del Marketplace

## 2026-07-27 — Database gestiti (Preview)

### [MariaDB Gestito](/managed_mariadb)
- Il modello di deployment Distribuito è rinominato MultiAZ
- I template di istanza arrivano ora fino a 6X-Large (32 vCPU e 128 Gio di memoria) e lo storage espandibile a caldo fino a 512 Gio
- Pubblicazione delle raccomandazioni di dimensionamento che spiegano il calibratura dei parametri del motore, con un avviso sull'attivazione di `performance_schema` al di sotto del template X-Large
- Il ripristino a un punto nel tempo non è più proposto: i backup si basano ora sui backup fisici quotidiani e sugli export logici, senza archiviazione continua dei log delle transazioni

### [PostgreSQL Gestito](/managed_postgresql)
- Nuova architettura basata sull'operatore Kubernetes CloudNative-PG e sul plugin di backup Barman Cloud
- Tre modelli di distribuzione: StandAlone in istanza singola, Replica in tre istanze replicate in modo asincrono con failover automatico, ed Enterprise in tre istanze replicate in modo sincrono su almeno due nodi, con la durabilità garantita senza blocchi in caso di indisponibilità di un nodo
- Distribuzione dichiarativa tramite risorse personalizzate Kubernetes, utilizzabile tramite Terraform o Helm, ed esportazione nativa delle metriche verso Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organizzazione](/console/iam/concepts)
- È ora possibile creare un tenant direttamente dalla pagina Tenant, selezionando i prodotti associati

### [Console — Attività](/console)
- I log delle attività possono ora essere filtrati per modulo

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- L'indirizzo IP pubblico è ora visualizzato nell'elenco delle interfacce di rete di una macchina virtuale collegata a un VPC
- Una scheda "Salute" è ora disponibile nei dettagli di una macchina virtuale, accessibile dall'elenco

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- È ora possibile ordinare una replicazione VMware tra zone di disponibilità

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- L'elenco delle interfacce di rete di una macchina virtuale collegata a un VPC visualizza ora l'indirizzo IP pubblico
- Una scheda "Salute" è ora disponibile nei dettagli di una macchina virtuale aperta dall'elenco

### [Istanze VM](/public_cloud/vm_instances)
- L'indirizzo IP pubblico è ora visualizzato nell'elenco degli adattatori di rete di un'istanza collegata a un VPC
- Una scheda "Salute" è ora disponibile nei dettagli di un'istanza, accessibile dall'elenco

### [Housing (Colocation)](/housing)
- Gli ordini di Colocazione sono ora disponibili: prenotazione di spazio, installazione e smontaggio delle apparecchiature
- Gli ordini di intervento di Colocazione sono ora disponibili: assistenza tecnica e smart hands
- Gli ordini di cablaggio e decablaggio di Colocazione (CPE) sono ora disponibili
- Gli ordini di Colocazione non gestiti dalla console sono ora chiaramente segnalati, con un invito a contattare il supporto

## v4.45.5 — 2026-07-23

### [Istanze VM](/public_cloud/vm_instances)
- La creazione di un'istanza si basa ora sulla selezione di un'immagine di sistema, che sostituisce i modelli

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante la configurazione dei core per socket di una macchina virtuale OpenIaaS, la topologia della CPU (numero di socket e core per socket) è ora visualizzata esplicitamente

### [LLMaaS](/llmaas)
- L'importo minimo del credito LLMaaS è cambiato; consulta il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

## v4.45.3 — 2026-07-21

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante la distribuzione di una macchina virtuale, viene visualizzato un messaggio "Nessun modello disponibile" quando il catalogo è vuoto

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante la distribuzione di una macchina virtuale, viene visualizzato un messaggio "Nessun modello disponibile" quando il catalogo è vuoto

## v4.45.2 — 2026-07-17

### [Console](/console)
- Miglioramenti tecnici minori

## v4.45.0 — 2026-07-10

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante un'operazione bloccante, le macchine virtuali visualizzano ora uno stato esplicito: backup, snapshot o ripristino in corso
- La modifica della CPU si adatta ora all'opzione di aggiunta di CPU a caldo (CPU hot add) e allo stato della macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante un'operazione bloccante, le macchine virtuali visualizzano ora uno stato esplicito (backup, snapshot o ripristino in corso)
- I dettagli di una macchina virtuale presentano ora un riepilogo dell'utilizzo (CPU, RAM, archiviazione)

### [Istanze VM](/public_cloud/vm_instances)
- Le istanze visualizzano ora uno stato esplicito (backup, snapshot o ripristino in corso) durante un'operazione bloccante
- Le metriche di utilizzo istantaneo (CPU, RAM, archiviazione) sono ora visualizzate per ogni istanza
- L'unicità del nome è ora controllata sia alla creazione che al ripristino di un'istanza

### [Rete](/network/network_overview)
- Durante un ordine che prevede una fase di propagazione, le nuove reti vengono create solo alla conferma finale dell'ordine

## v4.44.2 — 2026-07-03

### [Istanze VM](/public_cloud/vm_instances)
- Il tipo di rete (backbone privato) è ora visualizzato sugli adattatori di rete di un'istanza, anche senza la funzionalità VPC

## v4.44.1 — 2026-07-02

### [Console](/console)
- Miglioramenti tecnici minori

## v4.44.0 — 2026-07-02

### [Ordini](/console/orders)
- Le azioni di provisioning dell'infrastruttura tengono ora conto dei ruoli aziendali (calcolo, rete, VPC, bare metal...) oltre ai diritti di ordine

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Il tracciamento dell'invio dei file ISO e OVF è stato migliorato ed è ora possibile annullare un invio in corso

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il tracciamento dell'invio dei file ISO e XVA è migliorato ed è ora possibile annullare un invio in corso

### [Istanze VM](/public_cloud/vm_instances)
- Le dimensioni del disco non accettano più valori decimali, sia alla creazione di un'istanza che all'aggiunta o all'estensione di un disco
- Gli indicatori di elaborazione delle istanze e delle relative risorse sono ora correttamente ripristinati dopo un aggiornamento della pagina

### [VPC](/network/vpc)
- Dalla scheda di rete di una macchina virtuale collegata a una rete VPC, si accede ora direttamente al VPC interessato (VMware, OpenIaaS e Istanze VM)
- Alcuni ordini VPC possono ora essere eseguiti in parallelo: aggiunta di un gateway durante la creazione di una rete privata (e viceversa), e più eliminazioni simultanee di reti private

## 2026-06-30 — API Metriche

### [Metriche](/console/metrics/concepts)
- Un token di accesso può ora verificare la disponibilità del servizio di metriche tramite il punto API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Console](/console)
- I selettori di rete distinguono ora visivamente le reti VPC e Backbone privato
- Un tutorial interattivo è ora disponibile nella pagina Utenti

### [Console — Attività](/console)
- È ora possibile visualizzare i dettagli di un'attività espandendo la sua riga negli elenchi Recenti e Archiviati
- Ogni attività dispone ora di una pagina di dettaglio dedicata, accessibile tramite link diretto
- I dettagli di un'attività sono ora accessibili dalle notifiche di successo e di errore
- È ora possibile visualizzare il JSON completo di un'attività, copiarlo o scaricarlo
- L'elenco delle attività archiviate può ora essere ordinato per data di creazione

### [Ordini](/console/orders)
- La visualizzazione del progresso di un ordine è stata riprogettata

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- I dettagli di una macchina virtuale vengono ora visualizzati in una nuova vista
- Durante la modifica a caldo, la coerenza tra CPU e core per socket è controllata: vengono visualizzati avvisi e i valori non validi non vengono accettati

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- È ora possibile richiedere l'eliminazione di un ambiente IaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- È disponibile una nuova vista di dettaglio per le macchine virtuali
- È ora possibile filtrare l'elenco delle macchine virtuali per zona di disponibilità (AZ)

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- La pagina di un Storage Repository visualizza ora la data di creazione dello snapshot di un disco

### [Istanze VM](/public_cloud/vm_instances)
- I dettagli di un'istanza vengono visualizzati in una nuova vista
- Il pulsante "Avvia un backup ora" è ora disabilitato quando il backup non è disponibile

### [VPC](/network/vpc)
- La descrizione dell'indirizzo IP pubblico è ora visualizzata durante la sua associazione a una rete privata

### [Object Storage](/storage/oss)
- È ora possibile aggiungere una descrizione agli indirizzi IP consentiti (whitelist) di un bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- La sezione "Privacy" è stata aggiornata

### [Object Storage](/storage/oss)
- La disponibilità del certificato TLS wildcard per l'accesso S3 in stile host è ora indicata
- È ora possibile caricare un file su S3 a partire da un URL pre-firmato
- È ora possibile attivare il versioning su un bucket
- È ora possibile gestire le versioni di un file

## v4.41.1 — 2026-06-11

### [Ordini](/console/orders)
- Il massimo disponibile durante l'ordine di un Block Storage è stato aggiornato

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- I messaggi relativi alle scorte sono ora più precisi durante l'ordine di hypervisor o l'aumento della RAM di un cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante l'aggiunta di un disco esistente a una macchina virtuale, l'UUID del disco è ora visualizzato quando più dischi hanno lo stesso nome

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Viene visualizzato un avviso durante la richiesta di aggiornamento dell'host master di un pool

### [VPC](/network/vpc)
- L'ordine di un VPC richiede ora che una zona di disponibilità OpenIaaS sia distribuita

## 2026-06-06 — Server MCP della Console

- Risorsa di supporto per l'autenticazione che descrive l'ottenimento di un token di accesso personale e il formato dell'intestazione attesa; gli errori di autenticazione indicano ora la causa e la procedura da seguire
- Modifica di configurazione con impatto: l'URL dell'API inserito nella configurazione del server deve ora includere il segmento `/api`, da aggiornare prima del deployment di questa versione al fine di evitare errori 404. L'URL è controllato all'avvio e l'infrastruttura a chiave pubblica privata è supportata

## 2026-06-05 — Server MCP della Console

- Consultazione del nome e della versione del server distribuito

## v4.40.0 — 2026-06-02

### [Console](/console)
- È ora disponibile un percorso di benvenuto interattivo

### [Console — Organizzazione](/console/iam/concepts)
- Il gestore dei costi è ora disponibile nella vista organizzazione
- La vista organizzazione beneficia ora di una visualizzazione dedicata

### [Ordini](/console/orders)
- La fase di rete non appare più negli ordini quando è attivo solo il prodotto VPC

### [Supporto](/console)
- I piani e i contatti di supporto sono stati aggiornati

### [Ticket di supporto](/console)
- Le funzionalità di gestione sono state rimosse dai ticket di supporto

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Le funzionalità della libreria di contenuti pubblici sono state rimosse

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Il valore predefinito della fase CloudInit è stato aggiornato per i deployment OpenIaaS dalla Marketplace
- L'invio di caratteri speciali dagli appunti della console di una macchina virtuale è stato migliorato

### [Rete](/network/network_overview)
- È ora possibile eliminare la descrizione di un indirizzo IP
- È ora possibile compilare il campo `description` durante la creazione di una rete virtuale
- È ora possibile compilare il campo `description` durante la modifica di una rete virtuale

### [VPC](/network/vpc)
- La descrizione di un IP fluttuante VPC è ora visualizzata
- È ora possibile modificare la descrizione di un IP fluttuante VPC

## 2026-05-25 — Server MCP della Console

- Ogni rifiuto di autorizzazione indica ora il prodotto interessato e il nome esatto dell'autorizzazione da attivare sul token di accesso personale

## 2026-05-24 — Server MCP della Console

- Gestione del supporto tramite un agente: elenco e dettaglio dei ticket, creazione, commento, chiusura, consultazione delle manutenzioni pianificate e delle relative categorie, incidenti del tenant e incidenti della piattaforma
- Opzione di distruzione dopo l'avvio sul deployment dal Marketplace
- Percorso guidato per il deployment di una macchina virtuale Linux
- Risorse consultabili direttamente: glossario dei termini IaaS OpenSource, topologia di un pool che riunisce host, repository di storage, reti e indicatori in un'unica lettura, e catalogo Marketplace filtrato sull'IaaS OpenSource

## 2026-05-23 — Server MCP della Console

- Esplorazione del catalogo Marketplace con filtri, e schede tecniche IaaS OpenSource (XVA) e VMware (OVF) che dettagliano processori, memoria, dischi e nomi esatti delle interfacce di rete
- Deployment di una macchina virtuale IaaS OpenSource da un elemento del catalogo, idempotente per nome
- Controllo dell'alimentazione delle macchine virtuali IaaS OpenSource — accensione, spegnimento, riavvio, pausa, sospensione e ripresa — idempotente per stato
- Monitoraggio delle operazioni lunghe tramite le attività

## 2026-05-22 — Server MCP della Console

- Consultazione estesa dell'IaaS OpenSource: pool, host, macchine virtuali, snapshot, adattatori di rete con rilevamento degli indirizzi MAC duplicati, dischi virtuali e stato della replica, tutte queste operazioni sono in sola lettura
- Filtri applicabili lato server su tutte queste liste

## v4.39.2 — 2026-05-22

### [Rete](/network/network_overview)
- È ora possibile eliminare il record PTR di un indirizzo IP pubblico o di un indirizzo IP di interconnessione

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Le regole di denominazione degli snapshot delle macchine virtuali sono state modificate

### [Bare Metal](/iaas_bare-metal)
- È ora possibile modificare la descrizione di una lama

### [Rete](/network/network_overview)
- È ora possibile modificare il record PTR di un indirizzo IP di interconnessione

## v4.39.0 — 2026-04-23

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- I dischi esistenti sono ora visualizzati durante l'aggiunta di un nuovo disco
- Durante lo spostamento (vMotion) di una macchina virtuale in modalità "solo risorsa di calcolo", è ora possibile scegliere un cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- I dischi esistenti sono ora visualizzati durante l'aggiunta di un nuovo disco

### [Istanze VM](/public_cloud/vm_instances)
- L'elenco delle Istanze VM può ora essere esportato in formato CSV
- La visualizzazione della frequenza di una politica di backup è stata rivista

### [Bare Metal](/iaas_bare-metal)
- La selezione delle reti è ora obbligatoria durante la propagazione di una rete su un Bare Metal

## 2026-04-20 — Database gestiti (Preview)

### [MariaDB Gestito](/managed_mariadb)
- Pubblicazione dei parametri del motore associati a ogni modello di istanza: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` e `table_open_cache`
- Revisione dei modelli di istanza: il limite superiore è ridotto a 3X-Large (8 vCPU e 32 Gio di memoria) e lo storage massimo estendibile a caldo passa da 512 Gio a 128 Gio

### [PostgreSQL Gestito](/managed_postgresql)
- Pubblicazione dei parametri del motore associati a ogni modello di istanza: `shared_buffers`, `effective_cache_size`, `work_mem` e `max_connections`
- Revisione dei modelli di istanza: il limite superiore è ridotto a 3X-Large (8 vCPU e 32 Gio di memoria) e lo storage massimo estendibile a caldo passa da 512 Gio a 128 Gio

## v4.38.1 — 2026-04-18

### [Istanze VM](/public_cloud/vm_instances)
- Le reti proposte sono ora filtrate alla creazione di un'istanza come alla modifica di un adattatore di rete

## v4.38.0 — 2026-04-17

### [Identità & Accesso (IAM)](/console/iam)
- Sei nuovi permessi sono disponibili: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` e `public_cloud_vm_instances_console_access`
- Il nome del prodotto interessato appare ora in testa alla descrizione di ogni permesso

### [Gestore dei costi](/console/billing/concepts)
- L'interfaccia del gestore dei costi è stata migliorata
- L'unità visualizzata nei grafici di consumo è stata aggiornata

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante il deployment di una macchina virtuale, la fase di selezione di un'immagine dal Marketplace è stata rivista

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- È ora possibile commutare la visualizzazione della pagina del catalogo tra griglia e tabella
- La fase di selezione di un'immagine Marketplace durante il deployment di una macchina virtuale è stata aggiornata

### [Istanze VM](/public_cloud/vm_instances)
- La dashboard visualizza ora l'utilizzo dei quota Istanze VM
- Una nuova pagina presenta l'elenco delle Istanze VM
- È ora possibile creare una nuova istanza
- È ora possibile consultare e gestire i dischi, gli adattatori di rete e gli snapshot di un'istanza
- È ora possibile aggiornare le capacità di un'istanza e modificarne lo stato
- È ora possibile accedere alla console di un'istanza

### [LLMaaS](/llmaas)
- La visualizzazione dei prezzi nella vista di consumo e nel modulo di ricarica del credito è stata aggiornata

## 2026-04-15 — Database gestiti (Preview)

### [MariaDB Gestito](/managed_mariadb)
- Apertura in Preview di MariaDB Gestito: modelli StandAlone e Distributed in cluster di tre nodi dietro un proxy, storage replicato su tre zone di disponibilità e impegno di disponibilità del 99,9 %

### [PostgreSQL Gestito](/managed_postgresql)
- Apertura in Preview di PostgreSQL Gestito: modelli StandAlone e Distributed in cluster di tre nodi dietro un proxy, replica sincrona multi-zona senza perdita di dati e ripristino a un punto nel tempo

## v4.37.0 — 2026-04-02

### [Gestore dei costi](/console/billing/concepts)
- Aggiunta dell'importo previsionale nella pagina di consumo per il grafico e la tendenza
- Miglioramento visivo quando c'è un errore o troppi pochi dati sul consumo del mese corrente

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento del modulo per deployare una macchina virtuale da un elemento del catalogo
- Aggiunta della possibilità di cambiare il tipo di visualizzazione (griglia o tabella) dalla pagina del catalogo

## v4.36.0 — 2026-03-27

### [Console](/console)
- Aggiornamento dei grafici di metriche e consumo

### [Gestore dei costi](/console/billing/concepts)
- Aggiunta della pagina gestore dei costi
- Possibilità di visualizzare i costi del mese corrente
- Possibilità di visualizzare i costi su un intervallo di date e confrontare le tendenze

### [Ordini](/console/orders)
- Blocco della deprovisioning di un cluster di hypervisor quando un cluster di storage è collegato

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di filtri e ordinamenti sull'elenco dei dischi dai dettagli di un Block Storage

### [VPC](/network/vpc)
- Miglioramento dell'interfaccia sul caricamento dei dati nei moduli

## v4.35.4 — 2026-03-18

### [Console](/console)
- Miglioramento della riconnessione ai websocket

### [Supporto](/console)
- Aggiunta di una soluzione di riserva per la creazione di un ticket di supporto quando i websocket sono disconnessi

## v4.35.3 — 2026-03-17

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiornamento del recupero dei dischi durante il caricamento dei replica dalla scheda Replica

## v4.35.0 — 2026-03-11

### [Ordini](/console/orders)
- Aggiunta del comando di eliminazione di un mapping cpool/spool
- Aggiunta del comando di deprovisioning di una rete privata VPC
- Modifiche sul comando di deprovisioning di un volume Bare Metal, è possibile ordinare l'eliminazione dall'elenco dei volumi
- Aggiunta del comando di eliminazione del mapping volume Bare Metal
- Aggiunta del comando di deprovisioning di VPC
- Blocco della deprovisioning di un datastore se è l'ultimo di un cluster di datastore

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Possibilità di aggiungere un limite di RAM su una macchina virtuale

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiornamento del multi vmotion VMware per consentire lo spostamento delle VM da un cluster a un altro

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta della possibilità di aggiornare un host
- Visualizzazione delle informazioni sugli aggiornamenti di un host

### [Rete](/network/network_overview)
- Disattivazione del pulsante di eliminazione della propagazione di rete quando non viene consegnata alcuna propagazione

### [LLMaaS](/llmaas)
- Visualizzazione del consumo raggruppato per tipo di token

## v4.34.0 — 2026-02-18

### [Console](/console)
- Aggiornamento maggiore del motore di visualizzazione dell'applicazione
- I menu VMware e OpenIaaS non sono visualizzati quando è attivato solo il modulo metrica

### [Metriche](/console/metrics/concepts)
- Possibilità di esportare in CSV dalle pagine Metriche VMware e OpenIaaS

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Durante uno spostamento di macchina virtuale non è possibile selezionare lo stesso host di destinazione dell'host corrente della macchina virtuale
- Aggiunta del pulsante 'Nuovo catalogo' nella pagina Catalogo VMware

## 2026-02-04 — Server MCP della Console

- Consultazione dei modelli di macchine virtuali, delle reti, degli host e dei repository di storage IaaS OpenSource

## 2026-02-03 — Server MCP della Console

- Messa a disposizione del server MCP (Model Context Protocol) della Console, autenticato tramite token di accesso personale
- Consultazione e controllo delle macchine virtuali VMware tramite un agente: elenco, dettaglio, datacenter virtuali, accensione e spegnimento

## v4.33.0 — 2026-01-21

### [Ordini](/console/orders)
- Aggiunta del comando di eliminazione di una propagazione di rete su OpenIaaS

### [Metriche](/console/metrics/concepts)
- Aggiunta di filtri per le pagine di metriche VMWare e OpenIaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta della pagina di metriche 'Macchine Virtuali'
- Aggiunta della pagina dei dettagli delle metriche per ogni VM

## v4.32.0 — 2026-01-14

### [Supporto](/console)
- Aggiornamento della modale di chiusura di un ticket di supporto

### [IaaS VMware — Backup](/iaas_vmware)
- Durante l'assegnazione di una politica di backup su un disco, ora viene proposto di inventariare il disco se non è riconosciuto dalla soluzione di backup

### [Bare Metal](/iaas_bare-metal)
- L'eliminazione di un volume BFS su un Bare Metal è ora bloccata, il volume verrà eliminato alla suppresione del Bare Metal
- Durante l'ordinazione di un Bare Metal, il primo volume viene ora rinominato 'volume BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiornamento delle spiegazioni dei tooltip sulle opzioni disponibili durante il ripristino di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Gli snapshot legati alle politiche di backup sono ora visibili
- Visualizzazione dell'Host legato alla posizione di storage di un ISO durante l'upload e dalla pagina del catalogo

### [Object Storage](/storage/oss)
- Visualizzazione di una card esplicativa dalla scheda MPU incompleti quando l'IP della Console non è autorizzato, impedendo la visualizzazione della scheda

### [Marketplace](/marketplace)
- Visualizzazione della card di errore durante l'accesso a una pagina della marketplace inesistente

## v4.30.1 — 2025-12-16

### [Console](/console)
- Miglioramento della visualizzazione degli errori vuoti mostrando di default lo status HTTP restituito

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Possibilità di associare un IP statico a un indirizzo MAC personalizzato

### [LLMaaS](/llmaas)
- Nelle metriche di consumo, filtraggio delle serie con valori pari a 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Miglioramento della sincronizzazione delle azioni nelle pagine VPC
- Aggiunta dell'associazione di un IP statico a un IP pubblico dall'elenco degli IP statici

### [Storage](/storage/oss)
- Aggiunta dei MPU incompleti dalla pagina di un bucket
- Possibilità di eliminare un MPU incompleto

## v4.28.0 — 2025-11-21

### [Console](/console)
- Aggiunta della possibilità di visualizzare messaggi informativi globali visibili su tutta l'applicazione

### [Ordini](/console/orders)
- Possibilità di ordinare un aggiunta di credito LLMaaS per il tenant
- Possibilità di ordinare un VPC
- Possibilità di ordinare una rete privata in un VPC
- Possibilità di ordinare un IP pubblico per il prodotto VPC
- Possibilità di attivare il gateway per un VPC
- Aggiunta della possibilità di ordinare la cancellazione di un tenant

### [Metriche](/console/metrics/concepts)
- Miglioramento della visualizzazione dei tooltip sui grafici delle metriche: è ora possibile fare clic su un punto per bloccare il tooltip e consultare tutti i dati

### [Rete](/network/network_overview)
- Raggruppamento delle pagine Reti e Internet sotto un unico prodotto: Backbone privato
- Aggiunta della gestione della registrazione PTR durante la modifica di un IP pubblico
- Blocco della condivisione per alcuni tipi di reti

### [VPC](/network/vpc)
- Integrazione del prodotto VPC
- Aggiunta di una pagina che elenca i VPC
- Aggiunta di una pagina Dettagli di un VPC
- Possibilità di gestire le reti private, gli IP pubblici e il gateway di un VPC
- Possibilità di associare un IP statico di una rete privata VPC a un adattatore di rete VMware o OpenIaaS
- Possibilità di associare un IP statico con un IP pubblico di un VPC

### [LLMaaS](/llmaas)
- Aggiunta di una scheda Fatturazione nella pagina LLMaaS per i tenant con il prepagamento attivato
- Visualizzazione del credito residuo per i tenant in modalità prepagamento, sulla dashboard e dalla scheda Fatturazione

## v4.27.0 — 2025-11-12

### [Ordini](/console/orders)
- Aggiunta di una verifica riguardante lo stock disponibile durante l'ordine di risorse
- Aggiunta di un filtro per tipo di ordine e per prodotto nell'elenco degli ordini

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento della console delle macchine virtuali. Migliore gestione della tastiera e aggiunta di un clipboard

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiunta di un avviso sulla dashboard per i VSnap di backup SPP con occupazione troppo elevata

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Miglioramento della console delle macchine virtuali. Migliore gestione della tastiera e aggiunta di un clipboard

### [Marketplace](/marketplace)
- Aggiunta della possibilità di visualizzare i dettagli tecnici di un'immagine

## v4.26.5 — 2025-11-04

### [Console](/console)
- Miglioramento della dimensione dei grafici della dashboard durante il ridimensionamento della finestra

## v4.26.3 — 2025-10-31

### [Metriche](/console/metrics/concepts)
- Modifica del nome degli export di metriche presentati nei grafici

## v4.26.0 — 2025-10-22

### [Console](/console)
- Aggiunta di un pulsante per copiare l'UUID dell'ambito corrente dal profilo utente
- Rifacimento completo della Dashboard
- Aggiunta di una riconnessione automatica al monitoraggio attività quando la connessione viene interrotta

### [Ordini](/console/orders)
- Aggiornamento dei moduli di ordine per aggiungerli alle diverse pagine interessate (esempio nuovo Datastore dalla pagina Storage)

### [Supporto](/console)
- Aggiunta dell'indirizzo email della persona che ha chiuso il ticket nella valutazione del ticket di supporto

### [Metriche](/console/metrics/concepts)
- Rifacimento del recupero delle metriche VMware, l'URL della pagina è ora /iaas/metrics
- Aggiunta di una scheda metriche dell'infrastruttura VMware sul Calcolo
- Aggiunta di una scheda metriche dell'infrastruttura VMware sullo Storage
- Aggiunta di una pagina metrica per OpenIaaS
- Aggiunta di una scheda metriche dell'infrastruttura OpenIaaS sul Calcolo
- Aggiunta di una scheda metriche dell'infrastruttura OpenIaaS sullo Storage

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta delle nuove chiavi extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocco della selezione di un hostcluster senza host attivo
- Durante la creazione di una macchina virtuale VMware la scelta del Vcenter avviene ora in base alla zona di disponibilità selezionata
- Aggiunta di limiti sui nomi e le descrizioni durante il caricamento di un file su VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Durante l'aggiunta di un disco OpenIaaS, gli storage non appartenenti al Pool della macchina virtuale sono ora filtrati
- Durante uno snapshot, l'opzione per acquisire la memoria è ora deselezionata di default

### [IaaS OpenSource — Backup](/iaas_opensource)
- Aggiunta della possibilità di eseguire un backup dalla scheda backup di una macchina virtuale OpenIaaS

### [Rete](/network/network_overview)
- Rimozione del vincolo che impediva la selezione di più tipi di reti nella pagina delle reti virtuali

### [Object Storage](/storage/oss)
- Ottimizzazione del recupero dei file da un bucket

### [PaaS OpenShift](/paas_openshift)
- Aggiunta di una pagina che elenca i cluster OpenShift
- Aggiunta di una pagina dettagli di un cluster OpenShift

### [Marketplace](/marketplace)
- Aggiunta di un filtro per UUID e possibilità di copiare l'UUID di un elemento

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Aggiornamento dell'utilizzo della configurazione avanzata e delle proprietà OVF durante il deployment di una macchina virtuale VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Possibilità di deployare un'immagine di macchina virtuale dall'elenco delle macchine virtuali

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di deployare un'immagine di macchina virtuale dall'elenco delle macchine virtuali

### [Rete](/network/network_overview)
- Aggiunta di una convalida per bloccare la cancellazione della condivisione di una rete se la rete è propagata in un altro Tenant

### [Marketplace](/marketplace)
- Aggiunta del prodotto Marketplace
- Aggiunta di una pagina che elenca le soluzioni disponibili nel catalogo
- Aggiunta di una pagina per consultare i dettagli di una soluzione
- Possibilità di deployare un'immagine di macchina virtuale su un ambiente OpenIaaS o VMware dai dettagli di una soluzione
- Possibilità di contattare un partner per una soluzione di servizi gestiti

## v4.23.0 — 2025-09-12

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta del supporto per 4 nuovi valori extra-configs

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Non visualizzare l'avviso HA sulle VM interessate quando l'ISO locale non è montato
- Durante l'aggiunta o il ridimensionamento di un disco, indicare se lo SR collegato è utilizzato per una configurazione di replica

### [IaaS OpenSource — Backup](/iaas_opensource)
- Aggiunta del nome dell'AZ sul report di backup

### [Object Storage](/storage/oss)
- Aggiornamento delle informazioni riguardanti il ciclo di vita di un bucket

### [LLMaaS](/llmaas)
- Aggiunta del prodotto LLMaaS
- Aggiunta dell'elenco dei modelli disponibili
- Aggiunta dell'elenco delle chiavi API con possibilità di crearne
- Aggiunta del consumo per modelli e per chiavi
- Aggiunta dei dettagli di un modello
- Possibilità di testare un modello

## v4.22.1 — 2025-09-10

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Modifica degli avvisi riguardanti la configurazione del formato del disco scelta, durante un VMotion che include lo storage

## v4.22.0 — 2025-09-02

### [Ordini](/console/orders)
- Aggiunta dell'ordine di una cancellazione di propagazione di rete dalla pagina di tutti gli ordini, tutti gli ordini disponibili sono ora accessibili da questa pagina

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiornamento delle condizioni sul cambiamento del formato del disco durante lo spostamento di una macchina virtuale e aggiunta di informazioni sul formato del disco corrente durante una configurazione per disco

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aggiornamento della visualizzazione quando non vengono creati/provisionati dati o quando si verifica un errore durante il recupero delle informazioni.

### [Supporto](/console)
- Apertura delle modali di supporto con il servizio associato pre-selezionato
- Aggiunta di un badge nel menu e nella navbar quando un ticket di supporto richiede una risposta

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta della possibilità di esportare in CSV l'elenco dei replica VMware
- Miglioramento dello slider di selezione della RAM su alcuni comandi
- Aggiunta della gestione delle opzioni Static differed e immediate per il vMotion

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Blocco della cancellazione di un cluster non vuoto o con host/datastore non in manutenzione

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta della possibilità di esportare in CSV l'elenco dei replica OpenIaaS e delle politiche associate
- Aggiunta di precisazioni sugli strumenti utilizzati dalle macchine virtuali (pvDrivers, managementAgent e tools)
- Aggiunta di verifiche per l'alta disponibilità (HA)

### [Rete](/network/network_overview)
- Modifica della selezione di un indirizzo IPv4 con un elenco disponibile

## v4.20.0 — 2025-07-29

### [Ordini](/console/orders)
- Aggiunta di informazioni riguardanti gli stock limitati e esauriti per le risorse di calcolo durante l'ordine di una nuova zona di disponibilità

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un'opzione VMware Tools per sincronizzare l'ora con l'host
- Aggiornamento delle condizioni sulla crittografia di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Rimozione delle informazioni dell'ultima esecuzione delle politiche di replica che causano rallentamenti
- Gestione del TX checksumming per gli adattatori di rete
- Aggiunta di un avviso sulla replica OpenIaaS se il numero di AZ è inferiore a 2
- Aggiunta dell'alta disponibilità (HA) per i pool e le macchine virtuali

## v4.19.0 — 2025-07-24

### [Ordini](/console/orders)
- Aggiornamento dell'ordine di IP pubblici con la possibilità di ordinare un prefisso IPv6
- Aggiornamento della visualizzazione degli ordini disponibili quando non è stato provisionato alcun ambiente

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un filtro replica sull'elenco delle macchine virtuali
- Aggiornamento della modale di creazione di una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un filtro replica sull'elenco delle macchine virtuali

### [Rete](/network/network_overview)
- Aggiornamento della pagina Internet con l'aggiunta della gestione degli IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aggiornamento della visualizzazione quando non vengono creati/provisionati dati o quando si verifica un errore durante il recupero delle informazioni.

### [Ordini](/console/orders)
- Aggiornamento delle fasi internet durante l'ordine di una nuova zona di disponibilità o di un nuovo pool

### [Supporto](/console)
- Aggiunta di un servizio sicurezza per ogni prodotto durante la creazione di un ticket di supporto

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un collegamento a un ISO montato su un controller verso l'elemento corrispondente nel catalogo

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una pagina Replicazione OpenIaaS con l'elenco delle repliche e le politiche di replicazione
- Possibilità di aggiungere e rimuovere una configurazione di replica a una macchina virtuale OpenIaaS
- Possibilità di creare e rimuovere una politica di replicazione
- Possibilità di ripristinare una replica
- Possibilità di esportare le macchine virtuali in formato CSV.

## v4.17.0 — 2025-06-20

### [Comandi](/console/orders)
- Possibilità di ordinare un Pool OpenIaaS
- Possibilità di ordinare l'associazione di un volume esistente a un Bare Metal esistente dalla pagina di un Bare Metal, dalla pagina di un volume e dalla pagina dei comandi

### [Supporto](/console)
- Possibilità di eliminare un file su un ticket di supporto
- La descrizione sulla soddisfazione alla chiusura di un ticket è ora opzionale

## v4.16.0 — 2025-06-04

### [Console](/console)
- Aggiunta delle traduzioni inglesi nella pagina dei rapporti di consumo nel menu comandi

### [Comandi](/console/orders)
- Possibilità di ordinare l'aumento di dimensione di un volume bare metal
- Possibilità di ordinare l'aumento di dimensione di un Block Storage OpenIaaS

### [Supporto](/console)
- Rifacimento della creazione di un ticket di supporto
- Interpretazione del markdown su un ticket di supporto e aggiornamento dell'ordine di visualizzazione dei commenti
- Aggiunta di un feedback alla chiusura di un ticket di supporto
- Aggiornamento della visualizzazione delle icone in base all'impatto di un incidente globale

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un'opzione per mantenere la configurazione di una macchina virtuale durante un ripristino in Produzione sul cluster originale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un messaggio di avviso in caso di mancanza di spazio su disco su un Block Storage (90% utilizzato) e avviso durante i comandi

### [Object Storage](/storage/oss)
- Aggiunta della descrizione dei ruoli S3 durante l'assegnazione a un bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Visualizzazione di un errore quando una rete è configurata male su un adattatore di rete di una macchina virtuale, impedendo anche l'avvio della macchina virtuale

## v4.15.0 — 2025-05-13

### [Console](/console)
- Regolazione delle unità visualizzate sulle risorse infrastrutturali: GiB (Gibibyte) invece di GB (Gigabyte)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di spostare un disco OpenIaaS
- Possibilità di collegare e scollegare un disco OpenIaaS
- Visualizzazione dello stato connesso/scollegato di un disco
- Possibilità di copiare l'UUID di un disco, di una rete virtuale o di uno snapshot
- Possibilità di scegliere il nome di una macchina virtuale durante il deployment di un file XVA
- Aggiunta della possibilità di assegnare una politica di backup all'avvio di una macchina virtuale se non ne ha alcuna.

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di azioni disponibili su un disco da un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Aggiunta degli indirizzi MAC nella tabella delle interfacce di un Bare Metal
- Aggiunta di una pagina sui dettagli di un volume Bare Metal

## v4.14.0 — 2025-04-28

### [Console](/console)
- Possibilità di fissare pagine nel menu
- Aggiornamento del rendering delle documentazioni API

### [Comandi](/console/orders)
- Possibilità di ordinare la rimozione di un Block Storage OpenIaaS
- Possibilità di ordinare l'aggiunta di un Block Storage a un Pool OpenIaaS
- Possibilità di ordinare la rimozione di un Host OpenIaaS
- Aggiunta dell'informazione sul prodotto interessato nell'elenco dei comandi
- Possibilità di ordinare l'aggiunta di un Host a un pool OpenIaaS

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di mettere un Host in manutenzione
- Possibilità di modificare la descrizione di un modello
- Possibilità di scegliere un Host all'avvio di una macchina virtuale
- Aggiunta di una regola di unicità sul nome delle macchine virtuali OpenIaaS

## v4.13.0 — 2025-04-08

### [Console](/console)
- Aggiunta di statistiche e informazioni di contatto nella pagina Supporto

### [Comandi](/console/orders)
- Rifacimento della visualizzazione dei dettagli di un comando
- Rifacimento della visualizzazione delle scelte di comando
- Aggiornamento della visualizzazione per ordinare il primo baremetal quando non ce ne sono
- Aggiornamento del comando di un Bare Metal con la selezione della propagazione delle reti sulle interfacce del Bare Metal
- Possibilità di propagare un VLAN su un Bare Metal
- Possibilità di aggiungere un volume a un baremetal
- Possibilità di deprovisionare un volume da un Bare Metal
- Possibilità di deprovisionare un Bare Metal

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta di un pulsante copia UUID sulle reti e sui cataloghi VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un pulsante copia UUID sulle reti e sui cataloghi OpenIaaS
- Aggiunta di un pulsante copia UUID su un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Aggiunta della visualizzazione delle interfacce di rete e delle reti propagate su un baremetal
- Aggiunta delle azioni accendi, riavvia e spegni un baremetal

### [Rete](/network/network_overview)
- Possibilità di visualizzare le propagazioni su un Bare Metal di una rete

## v4.12.0 — 2025-03-25

### [Console](/console)
- Possibilità di eliminare un IP whitelist dalla pagina accesso

### Etichette
- Aggiunta dei tag sulle macchine virtuali OpenIaaS

### [IaaS VMware — Infrastruttura](/iaas_vmware)
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

### [Comandi](/console/orders)
- Aggiornamento dei nomi delle zone di disponibilità durante un comando
- Modifica del minimo di datastore durante l'ordinazione di un datastoreCluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Quando il campo etichetta degli hostCluster e datastoreCluster viene modificato in vuoto, il nome tecnico verrà applicato di default

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Quando il campo etichetta dei pool viene modificato in vuoto, il nome tecnico verrà applicato di default
- Aggiunta di un tooltip nella pagina catalogo e durante l'importazione ISO per indicare che il XVA è supportato durante la creazione di una macchina virtuale

## v4.11.0 — 2025-03-10

### [Comandi](/console/orders)
- Aggiornamento dei tipi di reti consentiti durante la creazione di una AZ
- Aggiornamento delle risorse minime da provisionare durante l'ordinazione di una nuova zona di disponibilità

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
- Aggiunta degli IOPS/TO sui volumi baremetal

## v4.10.0 — 2025-03-04

### [Console](/console)
- Aggiornamento dei link alla nuova documentazione pubblica

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di un avviso per informare gli utenti in caso di duplicazione degli indirizzi MAC nell'elenco delle macchine virtuali e durante la creazione o modifica di adattatori di rete
- Aggiunta di un'opzione per forzare lo spegnimento o il riavvio di una macchina virtuale
- La memoria non sarà più inclusa di default durante uno snapshot se la macchina virtuale non è accesa
- Possibilità di rinominare e ridimensionare un disco
- Aggiunta della rimozione di ISO e modelli dalla pagina catalogo
- Aggiunta della possibilità di eliminare il disco di configurazione 'Cloud Init' durante il deployment di una macchina virtuale

## v4.9.1 — 2025-02-27

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Possibilità di modificare un adattatore di rete su una macchina virtuale accesa

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di restrizioni sui caratteri consentiti nei nomi delle macchine virtuali OpenIaaS

## v4.9.0 — 2025-02-21

### [Console](/console)
- Rendere cliccabili i nomi nelle tabelle quando esiste una pagina collegata
- Migliorare l'apertura delle console per evitare l'apertura di più schede se più finestre sono aperte sulla stessa pagina
- Visualizzare un errore durante l'apertura di una console se il browser non consente i reindirizzamenti sull'applicazione

### [Metriche](/console/metrics/concepts)
- Visualizzare l'unità della RAM nella pagina salute delle macchine virtuali

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Bloccare la creazione di una macchina virtuale se lo spazio sui Block Storage selezionati non è sufficiente
- Svuotare gli indirizzi MAC di default durante la creazione di una macchina virtuale OpenIaaS

### [Archiviazione](/storage/oss)
- Poter copiare negli appunti un endpoint S3

## v4.8.0 — 2025-02-14

### [Comandi](/console/orders)
- Aggiunta del comando di propagazione di una rete sui Pool OpenIaaS
- Aggiunta dei comandi di propagazione di rete nella pagina di tutti i comandi

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Visualizzazione del numero di dischi assegnati e disponibili per controller su una macchina virtuale
- Aggiornamento delle condizioni sul numero di dischi possibili da aggiungere sui controller SCSI Para Virtual in base alla versione hardware della macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Possibilità di aggiungere opzioni Cloud Init alla creazione di una macchina virtuale OpenIaaS
- Visualizzazione dei dischi nella pagina di un Block Storage
- Possibilità di aggiornare la configurazione del boot firmware di una macchina virtuale OpenIaaS
- Poter clonare una macchina virtuale OpenIaaS

### [Rete](/network/network_overview)
- Aggiornamento della visualizzazione delle propagazioni di una rete e aggiunta di propagazioni OpenIaaS
- Aggiornamento della creazione di una rete e possibilità di propagare la rete sull'infrastruttura OpenIaaS fin dalla sua creazione

## v4.7.0 — 2025-02-03

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- L'esportazione in OVF è bloccata quando la macchina virtuale è cifrata

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzare le relazioni datastore cluster e host cluster nelle pagine Calcolo e Archiviazione

### [IaaS VMware — Backup](/iaas_vmware)
- Modifica dell'opzione di avvio dopo il ripristino per un ambiente SecNumCloud durante il ripristino in modalità clone o produzione su un host o cluster alternativo

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta dei pulsanti monta e smonta un ISO OpenIaaS nella barra delle azioni di una macchina virtuale

### [Rete](/network/network_overview)
- Miglioramento della visualizzazione delle propagazioni di rete quando sono in corso richieste di eliminazione delle propagazioni

## v4.6.0 — 2025-01-30

### [Console](/console)
- Rimozione dei caratteri visualizzati durante l'autocompletamento nell'aggiunta di osservatori alla creazione di un ticket di supporto
- Aggiornamento della visualizzazione del menu e delle pagine disponibili per le offerte VMware e OpenIaaS su un nuovo ambiente senza zone di disponibilità provisionate

### [Console — Notifiche](/console)
- Aggiornamento della visualizzazione delle iscrizioni alle notifiche dalla pagina del profilo

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta della possibilità di cifrare una macchina virtuale

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta dell'esportazione in modello di una macchina virtuale

## v4.5.0 — 2025-01-17

### [Console](/console)
- Aggiunta della descrizione alla creazione e alla visualizzazione delle whitelist
- Possibilità di modificare la descrizione di una whitelist

### [Comandi](/console/orders)
- Aggiunta di un comando per una nuova Zona di Disponibilità OpenIaaS
- Aggiunta di un comando per il Bare Metal
- Associazione di un cluster di hypervisor a un cluster di storage

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Visualizzazione della dimensione rimanente tra parentesi negli alberi di selezione dello storage

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Aggiunta del caso peggiore di allocazione della memoria su un hostCluster VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta dell'upload ISO sui cataloghi OpenIaaS
- Aggiunta dello spostamento delle macchine virtuali OpenIaaS
- Possibilità di scegliere i dischi e le reti alla creazione di una macchina virtuale OpenIaaS

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
- Proposta di esportare solo gli elementi filtrati nell'esportazione CSV dei report di backup nella sotto-scheda macchine virtuali

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta dei VM-template XOA dalla pagina cataloghi

### [Object Storage](/storage/oss)
- Possibilità di creare e reimpostare la chiave di accesso globale dagli account di storage

## v4.2.0 — 2024-12-10

### [Console](/console)
- Aggiunta di reindirizzamenti verso la pagina di stato

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Gli elementi già presenti in 'Il mio catalogo' rimangono ora visualizzati in 'Catalogo pubblico'
- Aggiunta di reindirizzamenti sui componenti citati in un elemento del catalogo VMware
- Aggiornamento della visualizzazione della RAM su un cluster di hypervisor
- Rimozione dell'opzione di replicare automaticamente i nuovi dischi che causava errori
- Aggiunta di convalidhe sulla replicazione di una macchina virtuale
- Aggiunta di nuove extra config PCIPassthru dalla configurazione avanzata di una macchina virtuale per la gestione GPU
- Possibilità di aggiungere un controller PCI sulle macchine virtuali

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Visualizzazione dei consigli e dei guasti DRS da un cluster di hypervisor
- Nuovo stato sugli hypervisor e sui datastore quando è in corso una richiesta di messa in manutenzione
- Aggiunta delle informazioni sulla GPU di un hypervisor

### [IaaS VMware — Backup](/iaas_vmware)
- Rimozione di diverse opzioni di Backup non funzionanti sulle macchine virtuali in modalità test

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una pagina backup per la parte backup OpenIaas che elenca gli errori, le policy, i report dei backup e consente il recupero delle macchine virtuali eliminate

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Aggiunta di una pagina per elencare le zone di disponibilità OpenIaas
- Aggiunta di una pagina storage per la parte OpenIaas
- Aggiunta di una pagina compute per la parte OpenIaas

### [Housing (Colocation)](/housing)
- Modifica delle informazioni visualizzate dalla pagina dispositivi

## v4.1.1 — 2024-11-18

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Miglioramento della modifica della memoria, la conversione viene effettuata verso l'unità con l'ultimo valore intero
- Durante uno snapshot, il pulsante per salvare la RAM è disabilitato quando la macchina virtuale è spenta
- Quando più macchine virtuali sono espanso, l'elenco dei dischi non viene visualizzato immediatamente

### [IaaS VMware — Backup](/iaas_vmware)
- Aggiunta del pulsante di esportazione CSV nella scheda macchine virtuali della pagina dei report di backup

## v4.1.0 — 2024-11-13

### [Console](/console)
- Possibilità di inviare un file durante un feedback

### [Identità & Accesso (IAM)](/console/iam)
- Disabilitazione della possibilità di eliminare un proprietario

### [Comandi](/console/orders)
- Aggiunta della gestione dell'aggiunta, eliminazione e modifica di un datastore dalla pagina dei comandi
- Aggiunta della possibilità di eliminare un Host

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Aggiunta delle attività di snapshot nella scheda snapshot di una VM
- Visualizzazione della dimensione reale delle macchine virtuali nell'esportazione CSV

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Nelle pagine compute e storage, il filtro sulle zone di disponibilità si applica anche alle schede dei cluster
- Visualizzazione delle percentuali di utilizzo sulle barre di consumo (CPU / RAM / Storage)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Aggiunta di una convalida sulla presenza di policy di backup sull'opzione di avvio automatico
- Aggiunta di un'opzione per forzare l'arresto/riavvio delle macchine virtuali senza guest-tools installati
- Miglioramento del messaggio di esecuzione di una policy OpenIaas su una macchina virtuale specifica

### [Bastion](/bastion)
- Aggiunta di una convalida sul campo Host di un dispositivo

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
- Rifacimento delle pagine infrastruttura e backup

---

:::info[Storico precedente]

Lo storico completo delle versioni precedenti alla v4.0 (v1.0 a v3.38.1, da febbraio 2019 a ottobre 2024) è disponibile nello [storico Git](https://github.com/Cloud-Temple/docs) del progetto.

:::
