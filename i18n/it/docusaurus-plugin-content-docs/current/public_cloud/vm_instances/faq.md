---
title: Domande frequenti
sidebar_position: 4
---

# FAQ Istanze VM

## Cos'è un flavor custom ?

Un **flavor custom** è un modello di risorse personalizzato per una VM. Permette di definire il numero di **vCPU** e la quantità di **RAM** in base alle esigenze del carico di lavoro.

I limiti e le combinazioni effettivamente disponibili sono quelli esposti nella Console Cloud Temple.

Per ulteriori dettagli, consultare la pagina [Concepts](./concepts).

## Qual è la differenza tra un template e un flavor ?

Il **template** corrisponde all'immagine utilizzata per distribuire il sistema
operativo o l'appliance. Il **flavor** corrisponde alle risorse allocate
alla VM, in particolare il numero di vCPU e la quantità di RAM.

Durante il deployment, il template e il flavor vengono selezionati separatamente.

## È possibile modificare le risorse di una VM esistente?

La documentazione conferma che i parametri **CPU** e **RAM** possono essere
modificati quando la VM è spenta.

Le condizioni esatte applicabili al passaggio da un flavor predefinito a un flavor
custom, nonché al cambio di famiglia di istanza, devono essere verificate
nella Console Cloud Temple prima di qualsiasi impegno.

Vedere il [guide de démarrage](./quickstart).

## È possibile migrare una VM con un OS non disponibile nella Marketplace ?

Sì, una migrazione può essere valutata tramite il ripristino **Veeam in modalità Bare Metal Recovery**. Questa procedura consente in particolare di gestire un OS non proposto nel catalogo standard.

Per una VM ripristinata da un ambiente client, il supporto riguarda l'infrastruttura VM. Il corretto funzionamento dell'OS guest, delle applicazioni e degli agenti necessari non è garantito se questi non sono installati o configurati correttamente. Il supporto dell'OS guest è quindi limitato.

Un secondo metodo, tramite importazione di dischi **VHD/VMDK**, è in fase di sviluppo e previsto per il **quarto trimestre 2026**. Consentirà di creare una VM a partire da un'immagine esistente, ma non è ancora disponibile.

## Il disco di sistema è incluso gratuitamente?

No. Un disco di sistema viene creato automaticamente con ogni VM per ospitare l'OS, ma si tratta di una risorsa di storage fatturata al **Go** secondo il catalogo tariffario VM Instances. Le risorse vCPU, RAM e storage sono fatturate separatamente. I volumi aggiuntivi e i backup attivati sono anch'essi fatturati secondo il catalogo applicabile.

## Stormshield e FortiVM sono compatibili con VM Instances ?

Sì, le appliance virtuali Stormshield e FortiVM sono compatibili con la **famiglia Enterprise**, a condizione del rispetto dei prerequisiti tecnici e del perimetro di supporto applicabile.

## La replicazione automatica di una VM tra zone di disponibilità è inclusa?

No. La replicazione delle VM non è inclusa di default in VM Instances. La sua valutazione è prevista per il secondo semestre 2026.

La scelta di una zona di disponibilità al momento del deployment non costituisce quindi una replicazione automatica della VM.