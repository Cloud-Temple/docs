---
title: Domande frequenti
sidebar_position: 4
---

# FAQ VM Instances

## Cosa sono i quota VM Instances ?

I **quota** definiscono la quantità massima di risorse che il vostro tenant
può utilizzare per le proprie VM Instances. Sono definiti tre limiti:

| Quota | Risorsa conteggiata |
|---|---|
| **vCPU** | Numero totale di processori virtuali allocati alle istanze del tenant. |
| **RAM** | Quantità totale di memoria allocata alle istanze del tenant. |
| **Archiviazione** | Capacità totale provisionata per i dischi di sistema e i dischi aggiuntivi. |

Questi limiti sono condivisi tra le istanze del tenant. Riguardano le
risorse configurate: una VM dotata di **4 vCPU** conta per 4 vCPU nel
conteggio, anche se le sue applicazioni utilizzano poco processore. Lo
storage è conteggiato in base alla capacità provisionata dei dischi,
indipendentemente dallo spazio effettivamente occupato dai file.

Ogni quota è indipendente: disporre di vCPU disponibili non consente di
superare il limite di RAM o di storage.

Ad esempio, con una quota di **20 vCPU**, se le vostre istanze ne conteggiano
già **16**, potete richiedere **4 vCPU aggiuntive**, subordinatamente alle
quote di memoria e di storage e alla capacità disponibile.

Quando un'operazione comporterebbe il superamento di una quota, essa viene rifiutata.
Questo è in particolare il caso durante la creazione di una VM, l'aumento delle sue
risorse o l'aggiunta di storage.

È possibile consultare i propri limiti e il loro utilizzo nella **Console
Cloud Temple**. Una quota autorizza un consumo massimo; non costituisce
una prenotazione di capacità fisica. Per un'istanza non riservata, la
creazione o il riavvio resta subordinato alla capacità disponibile.

## Come aumentare i propri quota ?

Per aumentare i propri quota VM Instances, aprire una **richiesta di supporto
Cloud Temple** specificando il tenant interessato, i nuovi limiti desiderati
in vCPU, RAM e storage, nonché il proprio fabbisogno.

## Qual è il legame tra quota e fatturazione ?

I quota definiscono i propri **limiti autorizzati**. La fatturazione dipende dalle
risorse utilizzate e dai servizi sottoscritti: il limite di quota non
corrisponde alla quantità di risorse fatturate.

Per una VM in uso, le **vCPU e la RAM configurate sono fatturate quando la
VM è accesa**, indipendentemente dal carico reale delle sue applicazioni. La
fatturazione del compute è oraria, **ogni ora iniziata è dovuta**.

| Risorsa | VM accesa | VM spenta |
|---|---|---|
| **vCPU e RAM configurate** | Fatturate all'ora. | Fatturazione sospesa. |
| **Disco di sistema e dischi aggiuntivi** | Fatturati per Go allocato. | Sempre fatturati finché sono conservati. |
| **Storage di backup** | Fatturato in base allo storage consumato. | Resta fatturato se i backup sono conservati. |
| **Rete, tenant e supporto** | Secondo i servizi e gli abbonamenti sottoscritti. | Secondo i servizi e gli abbonamenti sottoscritti. |

Le **istanze riservate** sono soggette alle condizioni della loro prenotazione.

## Cosa resta fatturato quando la VM è spenta ?

L'arresto della VM **sospende la fatturazione delle vCPU e della RAM**. Non
elimina né la VM né i suoi volumi persistenti: il sistema operativo, i software e i
dati memorizzati su questi volumi sono conservati.

Le altre risorse e gli abbonamenti conservati restano fatturati secondo le loro
regole: in particolare il disco di sistema, i volumi aggiuntivi, lo storage
di backup conservato, i servizi di rete sottoscritti, il tenant e il supporto.
La sospensione della fatturazione del compute non descrive il meccanismo tecnico
di rilascio o di prenotazione delle risorse fisiche.

## La capacità è garantita al riavvio o alla creazione ?

Per un'istanza **non riservata**, il riavvio dopo un arresto e la creazione
di una nuova VM sono subordinati alla capacità disponibile. Non c'è
impegno a ritrovare una dimensione data, anche se questa dimensione era stata
utilizzata durante una campagna precedente. Distruggere e ricreare la VM non
costituisce una prenotazione di capacità.

Per ottenere un impegno di capacità, è necessario sottoscrivere un'**istanza
riservata**, nel perimetro e secondo le condizioni della prenotazione.
La tariffazione oraria e il carattere dedicato delle vCPU Performance non
costituiscono, da soli, una prenotazione.

## È necessario sottoscrivere un'attivazione di zona di disponibilità per VMI ?

No. La sottoscrizione di un'attivazione AZ a pagamento riguarda l'offerta **IaaS**;
non è necessaria per utilizzare **VM Instances**. Tuttavia, si sceglie
la AZ di hosting durante il deployment della VM.

Il tenant è un abbonamento ricorrente. L'attivazione AZ dell'offerta IaaS è
altresì ricorrente; la scelta di una AZ per una VMI non innesca questa
sottoscrizione IaaS.

## Quale supporto è necessario per un cliente diretto o accompagnato da un partner ?

Un **cliente diretto** deve sottoscrivere almeno il **Support Standard**,
anche se amministra lui stesso il sistema operativo e le applicazioni.

Il **Support Basic** è destinato ai clienti accompagnati da un **partner
formato**. Non costituisce un'alternativa al Support Standard per un
cliente diretto. Il perimetro del partner e le condizioni del supporto sono
da definire nella sottoscrizione.

## È possibile amministrare un'istanza in SSH senza Bastion ?

Sì. Un'istanza esposta su un'**IP pubblico** può essere raggiunta in SSH se
il servizio SSH è configurato nel sistema operativo e se le regole di rete autorizzano
il flusso. Il cliente è responsabile del filtraggio, in particolare della restrizione
agli IP sorgente autorizzati, e della configurazione dell'accesso SSH.

Il Bastion non è un prerequisito sistematico di VM Instances. Fornisce
un altro percorso di amministrazione dalla console, senza esposizione diretta
della VM a Internet. Vedere i [concetti di rete](./concepts#rete) e i
[concetti Bastion](../../bastion/concepts).

## Come realizzare un test prima di scegliere la configurazione ?

È possibile testare una configurazione VM Instances in **self-service**, su
i propri software e set di dati, prima di scegliere il dimensionamento.

Il **compute è fatturato all'ora, senza impegno mensile**. Questa
flessibilità facilita i test brevi: per un test di alcune ore, la
parte compute è calcolata su queste ore, alla tariffa abituale del servizio. Ogni ora di compute iniziata è dovuta. A
configurazione identica, si adatta così il budget di calcolo alla durata del
proprio test, da alcune ore a diversi giorni.

Le altre risorse e gli abbonamenti necessari al test, in particolare lo storage,
la rete, il tenant e il supporto, restano soggetti alle loro proprie condizioni
tariffarie. Il costo totale del test non si limita quindi al compute.

Confrontare il tempo di calcolo e il picco di RAM sul proprio set di dati, quindi
arrestare la VM alla fine del test per sospendere la fatturazione CPU/RAM. I
volumi persistenti consentono di conservare il proprio ambiente per il seguito.

## Una lama PERF3 sottoscritta al mese è una VMI ?

No. Una lama PERF3 dedicata dell'offerta **IaaS Open Source** rientra in una
sottoscrizione IaaS distinta da VM Instances. L'impegno di un mese di questa
riferenza non deve essere confuso con il consumo orario di VMI.
Consultare i [concetti IaaS Open Source](../../iaas_opensource/concepts)
e il catalogo tariffario applicabile prima di confrontare le offerte.

## Cos'è un flavor custom ?

Un **flavor custom** è un modello di risorse personalizzato per una VM. Consente
di definire il numero di **vCPU** e la quantità di **RAM** secondo le
esigenze del carico di lavoro.

I limiti e le combinazioni realmente disponibili sono quelli esposti nella
Console Cloud Temple.

Per ulteriori dettagli, consultare la pagina [Concepts](./concepts).

## Qual è la differenza tra un template e un flavor ?

Il **template** corrisponde all'immagine utilizzata per deployare il sistema
operativo o l'appliance. Il **flavor** corrisponde alle risorse allocate
alla VM, in particolare il numero di vCPU e la quantità di RAM.

Durante il deployment, il template e il flavor sono selezionati separatamente.

## È possibile modificare le risorse di una VM esistente ?

La documentazione conferma che i parametri **CPU** e **RAM** possono essere
modificati quando la VM è spenta.

Le condizioni esatte applicabili al passaggio da un flavor predefinito a un flavor
custom, nonché al cambio di famiglia di istanza, devono essere verificate
nella Console Cloud Temple prima di qualsiasi impegno.

Vedere la [guida di avvio](./quickstart).

## È possibile migrare una VM con un OS non disponibile nella Marketplace ?

Sì, una migrazione può essere studiata tramite ripristino **Veeam in modalità Bare Metal Recovery**. Questa procedura consente in particolare di trattare un OS non proposto nel catalogo standard.

Per una VM ripristinata da un ambiente cliente, il supporto riguarda l'infrastruttura VM. Il corretto funzionamento dell'OS guest, delle applicazioni e degli agenti necessari non è garantito se questi non sono installati o configurati correttamente. Il supporto dell'OS guest è in tal caso limitato.

Un secondo metodo, tramite importazione di dischi **VHD/VMDK**, è in sviluppo e previsto per il **quarto trimestre 2026**. Consentirà di creare una VM a partire da un'immagine esistente, ma non è ancora disponibile.

## Il disco di sistema è incluso gratuitamente ?

No. Un disco di sistema viene creato automaticamente con ogni VM per ospitare l'OS, ma si tratta di una risorsa di storage fatturata per **Go** secondo il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Le risorse vCPU, RAM e storage sono fatturate separatamente. I volumi aggiuntivi e i backup attivati sono anch'essi fatturati secondo il catalogo applicabile.

## Stormshield e FortiVM sono compatibili con VM Instances ?

Sì, le appliance virtuali Stormshield e FortiVM sono compatibili con la **famiglia Enterprise**, subordinatamente al rispetto dei prerequisiti tecnici e del perimetro di supporto applicabile.

## La replicazione automatica di una VM tra zone di disponibilità è inclusa ?

No. La replicazione di VM non è inclusa di default in VM Instances. La sua
studio è prevista per il secondo semestre 2026.

La scelta di una zona di disponibilità al deployment non costituisce quindi una
replicazione automatica della VM.
