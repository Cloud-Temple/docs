---
title: Monitorare i costi con Kubecost
---
import kubecostsallocations from './images/kubecostsallocations.png'

## Obiettivi

Questo tutorial vi presenta **Kubecost**, lo strumento di monitoraggio e ottimizzazione dei costi integrato nel vostro cluster **Managed Kubernetes**. Al termine di questa guida, sarete in grado di:

- **Accedere** all'interfaccia di Kubecost.
- **Analizzare** la ripartizione dei costi delle vostre applicazioni.
- **Identificare** le opportunità di ottimizzazione per ridurre la vostra fatturazione.

## Cos'è Kubecost?

Kubecost è una soluzione open-source che fornisce una visibilità in tempo reale sui costi dei tuoi ambienti Kubernetes. Ti aiuta a comprendere esattamente cosa sta consumando risorse nel tuo cluster e come ciò si traduce in termini di costi.

Nell'offerta Kubernetes gestito, Kubecost è preinstallato e preconfigurato per offrirti una visione chiara delle tue spese. È direttamente configurato con i costi effettivi dell'infrastruttura Cloud Temple, il che significa che le stime visualizzate corrispondono fedelmente alla tua fatturazione.

## Access the Kubecost Interface

The Kubecost interface is exposed on a secure URL specific to your cluster. To access it, use the following URL, replacing `identifiant` with your cluster's identifier (for example, `ctodev`):

`https://kubecost.external-secured.identifiant.mk.ms-cloud-temple.com`

*Note: Access to this URL is restricted to the IP addresses you have declared to Cloud Temple support. If you are unable to access it, please contact support to verify your firewall rules.*

## Esplorare la distribuzione dei costi (Allocations)

La pagina principale di Kubecost è il dashboard **Allocations**. È qui che potete visualizzare il consumo delle vostre risorse.

Per impostazione predefinita, i costi sono aggregati per **Namespace**. Potete utilizzare il menu a tendina "Aggregate by" per modificare la visualizzazione e analizzare i costi per:
- `Deployment`, `StatefulSet`, ecc.
- `Controller`
- `Label` (molto utile se utilizzate i label per identificare i vostri team o progetti. Potete ad esempio utilizzare il label del tenant capsule.)

Potete inoltre modificare il periodo di analisi (predefinito: "Ultimi 7 giorni") per visualizzare i costi in un altro intervallo temporale.

<img src={kubecostsallocations} />

## Analyze the cost of infrastructure (Assets)

The **Assets** section provides a detailed view of the costs associated with the underlying infrastructure of your cluster:
- Nodes (VMs)
- Persistent disks
- Network costs

This allows you to understand the cost distribution across compute, storage, and network resources.

## Identificare le opportunità di ottimizzazione (Savings)

Kubecost non si limita a mostrare i costi, ma vi aiuta anche a ridurli. La sezione **Savings** analizza continuamente il vostro cluster e vi fornisce raccomandazioni concrete per ottimizzare le spese.

Le raccomandazioni più comuni includono:
- **Right-sizing delle richieste dei container:** Regolare le richieste di CPU e memoria dei vostri container in modo che corrispondano al consumo effettivo.
- **Gestione dei carichi di lavoro abbandonati:** Identificare i deployment che non sono più utilizzati ma continuano a consumare risorse.
- **Gestione dei volumi non assegnati:** Trovare i volumi persistenti che non sono più collegati a nessun pod.

Ogni raccomandazione è accompagnata da una stima dei risparmi mensili che potreste ottenere.

## Conclusione

Kubecost è uno strumento potente per controllare i costi del tuo cluster Kubernetes. Esplorando regolarmente i dashboard "Allocations", "Assets" e "Savings", non solo potrai capire dove va il tuo denaro, ma potrai anche prendere decisioni informate per ottimizzare l'efficienza delle tue applicazioni e ridurre la tua fattura.