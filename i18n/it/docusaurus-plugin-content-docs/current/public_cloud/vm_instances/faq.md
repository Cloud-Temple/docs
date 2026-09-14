---
title: Domande frequenti
sidebar_position: 4
---

# FAQ Istanze VM

## Cos'è un flavor custom ?

Un **flavor custom** è un modello di risorse personalizzato per una VM. Consente
di definire il numero di **vCPU** e la quantità di **RAM** in base alle
esigenze del carico di lavoro.

I limiti e le combinazioni effettivamente disponibili sono quelli esposti nella
Console Cloud Temple.

Per ulteriori dettagli, consulta la pagina [Concepts](./concepts).

## Qual è la differenza tra un template e un flavor ?

Il **template** corrisponde all'immagine utilizzata per distribuire il sistema
operativo o l'appliance. Il **flavor** corrisponde alle risorse allocate
alla VM, in particolare il numero di vCPU e la quantità di RAM.

Durante la distribuzione, il template e il flavor vengono selezionati separatamente.

## È possibile modificare le risorse di una VM esistente?

La documentazione conferma che i parametri **CPU** e **RAM** possono essere
modificati quando la VM è spenta.

Le condizioni esatte applicabili al passaggio da un flavor predefinito a un flavor
personalizzato, nonché al cambio di famiglia di istanza, devono essere verificate
nella Console Cloud Temple prima di qualsiasi impegno.

Vedere il [guide de démarrage](./quickstart).

## La replicazione automatica di una VM tra zone di disponibilità è inclusa?

No. La replicazione delle VM non è inclusa di default nelle VM Instances. La sua
valutazione è prevista per il secondo semestre 2026.

La scelta di una zona di disponibilità al momento della distribuzione non costituisce quindi una
replicazione automatica della VM.