---
title: Domande frequenti
sidebar_position: 4
---

# FAQ Istanze VM

## Cosa continua a essere fatturato quando la VM è spenta ?

L'arresto della VM **sospende la fatturazione delle vCPU e della RAM**. Non
elimina né la VM né i suoi volumi persistenti : il sistema operativo, i
software e i dati memorizzati su questi volumi vengono conservati.

Le altre risorse e abbonamenti conservati continuano a essere fatturati
secondo le rispettive regole : in particolare il disco di sistema, i volumi
aggiuntivi, lo storage di backup conservato, i servizi di rete sottoscritti,
il tenant e il supporto.
La sospensione della fatturazione del compute non descrive il meccanismo
tecnico di rilascio o di prenotazione delle risorse fisiche.

## La capacità è garantita al riavvio o alla creazione?

Per un'istanza **non riservata**, il riavvio dopo un arresto e la creazione
di una nuova VM sono soggetti alla capacità disponibile. Non c'è
alcun impegno a ritrovare una dimensione data, anche se tale dimensione era
stata utilizzata durante una campagna precedente. Distruggere e poi ricreare la VM non
costituisce una prenotazione di capacità.

Per ottenere un impegno di capacità, è necessario sottoscrivere un'**istanza
riservata**, nel perimetro e secondo le condizioni della prenotazione.
La tariffazione oraria e la natura dedicata dei vCPU Performance non
costituiscono, di per sé, una prenotazione.

## È necessario sottoscrivere un'attivazione della zona di disponibilità per VMI?

No. La sottoscrizione di un'attivazione AZ a pagamento riguarda l'offerta **IaaS**;
non è necessaria per utilizzare **VM Instances**. Si sceglie
tuttavia la AZ di hosting durante il deployment della VM.

Il tenant è un abbonamento ricorrente. L'attivazione AZ dell'offerta IaaS è
anch'essa ricorrente; la scelta di una AZ per una VMI non innesca questa
sottoscrizione IaaS.

## Quale supporto è necessario per un cliente diretto o accompagnato da un partner?

Un **cliente diretto** deve sottoscrivere almeno il **Supporto Standard**,
anche se amministra lui stesso l'OS e le applicazioni.

Il **Supporto Basic** è destinato ai clienti accompagnati da un **partner
formato**. Non costituisce un'alternativa al Supporto Standard per un
cliente diretto. Il perimetro del partner e le condizioni del supporto sono
da definire nella sottoscrizione.

## È possibile amministrare un'istanza in SSH senza Bastion?

Sì. Un'istanza esposta su un'**IP pubblica** può essere raggiunta in SSH se
il servizio SSH è configurato nell'OS e se le regole di rete autorizzano
il flusso. Il client è responsabile del filtraggio, in particolare della restrizione
alle IP sorgente autorizzate, e della configurazione dell'accesso SSH.

Il Bastion non è un prerequisito sistematico di VM Instances. Fornisce
un altro percorso di amministrazione dalla console, senza esposizione diretta
della VM a Internet. Vedere i [concepts réseau](./concepts#rete) e i
[concepts Bastion](../../bastion/concepts).

## Come realizzare un test prima di scegliere la configurazione?

È possibile testare una configurazione VM Instances in **self-service**, sui propri software e set di dati, prima di scegliere il dimensionamento.

Il **compute è fatturato all'ora, senza impegno mensile**. Questa
flessibilità facilita i test brevi: per un test di alcune ore, la
quota compute è calcolata su queste ore, alla tariffa abituale del servizio. Ogni ora di compute iniziata è dovuta. A
configurazione identica, si adatta così il budget di calcolo alla durata del
proprio test, da alcune ore a diversi giorni.

Le altre risorse e abbonamenti necessari al test, in particolare lo storage,
la rete, il tenant e il supporto, restano soggetti alle proprie condizioni
tariffarie. Il costo totale del test non si limita quindi al compute.

Confrontare il tempo di calcolo e il picco di RAM sul proprio set di dati, quindi
arrestare la VM alla fine del test per sospendere la fatturazione CPU/RAM. I
volumi persistenti consentono di conservare il proprio ambiente per il seguito.

## Una lama PERF3 sottoscritta al mese è una VMI?

No. Una lama PERF3 dedicata dell'offerta **IaaS Open Source** rientra in una
sottoscrizione IaaS distinta dalle VM Instances. L'impegno di un mese di questa
referenza non deve essere confuso con il consumo orario di VMI.
Consultare i [concepts IaaS Open Source](../../iaas_opensource/concepts)
e il catalogo tariffario applicabile prima di confrontare le offerte.

## Cos'è un flavor custom ?

Un **flavor custom** è un modello di risorse personalizzato per una VM. Permet
di definire il numero di **vCPU** e la quantità di **RAM** in base alle
esigenze del workload.

I limiti e le combinazioni effettivamente disponibili sono quelli esposti nella
Console Cloud Temple.

Per ulteriori dettagli, consultare la pagina [Concepts](./concepts).

## Qual è la differenza tra un template e un flavor ?

Il **template** corrisponde all'immagine utilizzata per distribuire il sistema
operativo o l'appliance. Il **flavor** corrisponde alle risorse allocate
alla VM, in particolare il numero di vCPU e la quantità di RAM.

Durante la distribuzione, il template e il flavor vengono selezionati separatamente.

## È possibile modificare le risorse di una VM esistente?

La documentazione conferma che i parametri **CPU** e **RAM** possono essere
modificati quando la VM è spenta.

Le condizioni esatte applicabili al passaggio da un flavor predefinito a un flavor
custom, nonché al cambio di famiglia di istanza, devono essere verificate
nella Console Cloud Temple prima di qualsiasi impegno.

Vedere la [guide de démarrage](./quickstart).

## È possibile migrare una VM con un OS non disponibile nella Marketplace ?

Sì, una migrazione può essere valutata tramite il ripristino **Veeam in modalità Bare Metal Recovery**. Questa procedura consente in particolare di gestire un OS non proposto nel catalogo standard.

Per una VM ripristinata da un ambiente client, il supporto riguarda l'infrastruttura VM. Il corretto funzionamento dell'OS guest, delle applicazioni e degli agenti necessari non è garantito se questi non sono installati o configurati correttamente. Il supporto dell'OS guest è quindi limitato.

Un secondo metodo, tramite importazione di dischi **VHD/VMDK**, è in sviluppo e previsto per il **quarto trimestre 2026**. Consentirà di creare una VM a partire da un'immagine esistente, ma non è ancora disponibile.

## Il disco di sistema è incluso gratuitamente?

No. Un disco di sistema viene creato automaticamente con ogni VM per ospitare l'OS, ma si tratta di una risorsa di storage fatturata al **Go** secondo il catalogo tariffario VM Instances. Le risorse vCPU, RAM e storage sono fatturate separatamente. I volumi aggiuntivi e i backup attivati sono anch'essi fatturati secondo il catalogo applicabile.

## Stormshield e FortiVM sono compatibili con VM Instances?

Sì, le appliance virtuali Stormshield e FortiVM sono compatibili con la **famiglia Enterprise**, a condizione del rispetto dei prerequisiti tecnici e del perimetro di supporto applicabile.

## La replicazione automatica di una VM tra zone di disponibilità è inclusa?

No. La replicazione delle VM non è inclusa di default in VM Instances. La sua
valutazione è prevista per il secondo semestre 2026.

La scelta di una zona di disponibilità al momento del deployment non costituisce quindi
una replicazione automatica della VM.