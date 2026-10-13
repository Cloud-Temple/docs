---
title: Domande frequenti
sidebar_position: 4
---

# FAQ VM Instances

## Cosa viene fatturato quando la VM è spenta?

L'arresto della VM **sospende la fatturazione delle vCPU e della RAM**. Non
elimina né la VM né i suoi volumi persistenti: il sistema operativo, il software e i
dati memorizzati su questi volumi vengono conservati.

Le altre risorse e gli abbonamenti conservati rimangono fatturati secondo le
loro regole: in particolare il disco di sistema, i volumi aggiuntivi, lo storage
di backup conservato, i servizi di rete sottoscritti, il tenant e il supporto.
La sospensione della fatturazione del compute non descrive il meccanismo tecnico
di rilascio o prenotazione delle risorse fisiche.

## La capacità è garantita al riavvio o alla creazione?

Per un'istanza **non riservata**, il riavvio dopo un arresto e la creazione
di una nuova VM sono soggetti alla capacità disponibile. Non c'è
nessun impegno a ritrovare una determinata dimensione, anche se tale dimensione era stata
utilizzata in una campagna precedente. Distruggere e ricreare la VM non
costituisce una prenotazione di capacità.

Per ottenere un impegno di capacità, è necessario sottoscrivere un'**istanza
riservata**, nell'ambito e secondo le condizioni della prenotazione.
La tariffazione oraria e il carattere dedicato delle vCPU Performance non
costituiscono, di per sé, una prenotazione.

## È necessario sottoscrivere un'attivazione della zona di disponibilità per VMI?

No. La sottoscrizione di un'attivazione AZ fatturata riguarda l'offerta **IaaS**;
non è necessaria per utilizzare **VM Instances**. Si sceglie
tuttavia l'AZ di hosting durante il deployment della VM.

Il tenant è un abbonamento ricorrente. L'attivazione AZ dell'offerta IaaS è
anch'essa ricorrente; la scelta di un'AZ per una VMI non attiva questa
sottoscrizione IaaS.

## Quale supporto è necessario per un cliente diretto o assistito da un partner?

Un **cliente diretto** deve sottoscrivere il **Supporto Standard almeno**,
anche se amministra autonomamente il sistema operativo e le applicazioni.

Il **Supporto Basic** è destinato ai clienti assistiti da un **partner
formato**. Non costituisce un'alternativa al Supporto Standard per un
cliente diretto. L'ambito del partner e le condizioni del supporto devono
essere definite nella sottoscrizione.

## È possibile amministrare un'istanza in SSH senza Bastion?

Sì. Un'istanza esposta su un'**IP pubblico** può essere raggiunta in SSH se
il servizio SSH è configurato nel sistema operativo e se le regole di rete consentono
il flusso. Il cliente è responsabile del filtraggio, in particolare della restrizione
agli IP sorgente autorizzati, e della configurazione dell'accesso SSH.

Il Bastion non è un prerequisito sistematico di VM Instances. Fornisce
un'altra via di amministrazione dalla console, senza esposizione diretta
della VM a Internet. Vedi i [concetti di rete](./concepts#rete) e i
[concetti Bastion](../../bastion/concepts).

## Come effettuare un test prima di scegliere la configurazione?

È possibile testare una configurazione VM Instances in **self-service**, sui
propri software e dataset, prima di scegliere il dimensionamento.

Il **compute è fatturato all'ora, senza impegno mensile**. Questa
flessibilità facilita i test brevi: per un test di alcune ore, la
parte compute viene calcolata su queste ore, alla tariffa abituale del servizio. Ogni ora di compute iniziata è dovuta. A
configurazione identica, si adatta così il budget di calcolo alla durata del
test, da alcune ore a diversi giorni.

Le altre risorse e gli abbonamenti necessari per il test, in particolare lo storage,
la rete, il tenant e il supporto, rimangono soggetti alle proprie condizioni
tariffarie. Il costo totale del test non si limita quindi al compute.

Confronta il tempo di calcolo e il picco di RAM sul tuo dataset, quindi
arresta la VM alla fine del test per sospendere la fatturazione CPU/RAM. I
volumi persistenti permettono di conservare il proprio ambiente per il seguito.

## Una lama PERF3 sottoscritta al mese è una VMI?

No. Una lama PERF3 dedicata dell'offerta **IaaS Open Source** rientra in una
sottoscrizione IaaS distinta da VM Instances. L'impegno di un mese di questa
riferimento non deve essere confuso con il consumo orario di VMI.
Consulta i [concetti IaaS Open Source](../../iaas_opensource/concepts)
e il catalogo tariffario applicabile prima di confrontare le offerte.

## Cos'è un flavor custom?

Un **flavor custom** è un modello di risorse personalizzato per una VM. Permette
di definire il numero di **vCPU** e la quantità di **RAM** in base alle
esigenze del carico di lavoro.

I limiti e le combinazioni realmente disponibili sono quelli esposti nella
Console Cloud Temple.

Per maggiori dettagli, consulta la pagina [Concetti](./concepts).

## Qual è la differenza tra un template e un flavor?

Il **template** corrisponde all'immagine utilizzata per deployare il sistema
operativo o l'appliance. Il **flavor** corrisponde alle risorse allocate
alla VM, in particolare il numero di vCPU e la quantità di RAM.

Al momento del deployment, il template e il flavor vengono selezionati separatamente.

## È possibile modificare le risorse di una VM esistente?

La documentazione conferma che i parametri **CPU** e **RAM** possono essere
modificati quando la VM è spenta.

Le condizioni esatte applicabili al passaggio da un flavor predefinito a un flavor
custom, nonché al cambio di famiglia di istanza, devono essere verificate
nella Console Cloud Temple prima di qualsiasi impegno.

Vedi la [guida di avvio](./quickstart).

## È possibile migrare una VM con un sistema operativo non disponibile nel Marketplace?

Sì, una migrazione può essere studiata tramite ripristino **Veeam in modalità Bare Metal Recovery**. Questa procedura permette in particolare di gestire un sistema operativo non proposto nel catalogo standard.

Per una VM ripristinata da un ambiente cliente, il supporto riguarda l'infrastruttura VM. Il corretto funzionamento del sistema operativo guest, delle applicazioni e degli agenti necessari non è garantito se questi non sono installati o configurati correttamente. Il supporto del sistema operativo guest è quindi limitato.

Un secondo metodo, tramite importazione di dischi **VHD/VMDK**, è in sviluppo e mirato per il **quarto trimestre 2026**. Permetterà di creare una VM a partire da un'immagine esistente, ma non è ancora disponibile.

## Il disco di sistema è incluso gratuitamente?

No. Un disco di sistema viene creato automaticamente con ogni VM per ospitare il sistema operativo, ma si tratta di una risorsa di storage fatturata al **Go** secondo il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Le risorse vCPU, RAM e storage sono fatturate separatamente. I volumi aggiuntivi e i backup attivati sono anch'essi fatturati secondo il catalogo applicabile.

## Stormshield e FortiVM sono compatibili con VM Instances?

Sì, le appliance virtuali Stormshield e FortiVM sono compatibili con la **famiglia Enterprise**, purché siano rispettati i prerequisiti tecnici e l'ambito di supporto applicabile.

## La replicazione automatica di una VM tra zone di disponibilità è inclusa?

No. La replicazione delle VM non è inclusa di default in VM Instances. Il suo
studio è previsto per il secondo semestre 2026.

La scelta di una zona di disponibilità al deployment non costituisce quindi una
replicazione automatica della VM.
