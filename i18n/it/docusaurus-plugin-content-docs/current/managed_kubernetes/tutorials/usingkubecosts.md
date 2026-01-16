---
title: Monitorare i costi con Kubecost
---
:::info[Evolutione dello strumento FinOps]
Il prodotto **KubeCost**, sebbene ancora funzionale sul tuo cluster, viene progressivamente sostituito da **OpenCost**, il suo successore open-source.

**OpenCost** è ora la soluzione consigliata e attivamente sviluppata dalla comunità Cloud Native (CNCF).

Ti invitiamo a iniziare a utilizzare OpenCost per beneficiare delle ultime funzionalità e di una migliore integrazione.
:::

import kubecostsallocations from './images/kubecostsallocations.png'

## Obiettivi

Questo tutorial ti presenta **Kubecost**, lo strumento di monitoraggio e ottimizzazione dei costi integrato nel tuo cluster **Managed Kubernetes**. Al termine di questa guida sarai in grado di:

- **Accedere** all'interfaccia di Kubecost.
- **Analizzare** la ripartizione dei costi delle tue applicazioni.
- **Identificare** le opportunità di ottimizzazione per ridurre la tua fatturazione.

## Cos'è Kubecost?

Kubecost è una soluzione open-source che fornisce una visibilità in tempo reale sui costi dei tuoi ambienti Kubernetes. Ti aiuta a comprendere esattamente cosa consuma risorse nel tuo cluster e come ciò si traduce in termini di costi.

Nell'offerta Kubernetes gestito, Kubecost è preinstallato e preconfigurato per offrirti una visione chiara delle tue spese. È direttamente configurato con i costi effettivi dell'infrastruttura Cloud Temple, il che significa che le stime visualizzate corrispondono fedelmente alla tua fatturazione.

## Access the Kubecost Interface

The Kubecost interface is exposed on a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://kubecost.external-secured.identifiant.mk.ms-cloud-temple.com`

:::info
Access to this URL is restricted to the IP addresses you have declared to Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.
:::

## Esplorare la distribuzione dei costi (Allocations)

La pagina principale di Kubecost è il dashboard **Allocations**. È qui che puoi visualizzare il consumo delle tue risorse.

Per impostazione predefinita, i costi sono aggregati per **Namespace**. Puoi utilizzare il menu a discesa "Aggregate by" per modificare la visualizzazione e analizzare i costi per:
- `Deployment`, `StatefulSet`, ecc.
- `Controller`
- `Label` (molto utile se utilizzi i label per identificare i tuoi team o progetti. Puoi ad esempio utilizzare il label del tenant capsule.)

Puoi inoltre modificare il periodo di analisi (predefinito: "Ultimi 7 giorni") per visualizzare i costi in un altro intervallo temporale.

<img src={kubecostsallocations} alt="Kubecost UI"/>

## Analyze the cost of infrastructure (Assets)

The **Assets** section provides a detailed view of the costs associated with the underlying infrastructure of your cluster:
- Nodes (VMs)
- Persistent disks
- Network costs

This allows you to understand the cost distribution across computing, storage, and networking resources.

## Identificare le opportunità di ottimizzazione (Savings)

Kubecost non si limita a mostrare i costi, ma ti aiuta anche a ridurli. La sezione **Savings** analizza continuamente il tuo cluster e ti fornisce raccomandazioni concrete per ottimizzare le spese.

Le raccomandazioni più comuni includono:
- **Right-sizing delle richieste dei container:** Regolare le richieste di CPU e memoria dei tuoi container in modo che corrispondano al consumo effettivo.
- **Gestione dei carichi di lavoro abbandonati:** Identificare i deployment che non sono più utilizzati ma continuano a consumare risorse.
- **Gestione dei volumi non assegnati:** Trovare i volumi persistenti che non sono più collegati a nessun pod.

Ogni raccomandazione è accompagnata da una stima dei risparmi mensili che potresti ottenere.

## Conclusione

Kubecost è uno strumento potente per controllare i costi del tuo cluster Kubernetes. Esplorando regolarmente i dashboard "Allocations", "Assets" e "Savings", non solo potrai capire dove va il tuo denaro, ma potrai anche prendere decisioni informate per ottimizzare l'efficienza delle tue applicazioni e ridurre la tua fattura.