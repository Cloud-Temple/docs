---
title: Matrice di responsabilità di rete
displayed_sidebar: docSidebar
---

Questa matrice **RACI** definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per la connettività di rete.

## Definizione dei diversi ruoli

Di seguito si ricordano i diversi ruoli del RACI:

| Ruolo | Descrizione |
|---|---|
| (R) Realizza   | __R__ealizza il processo |
| (A) Approva    | __A__pprova la realizzazione del processo |
| (C) Consultato | __C__onsultato durante il processo |
| (I) Informato  | __I__nformato sui risultati del processo (tramite strumenti, portale o messaggistica) |

## Connettività di rete client

| Attività | Ruolo Client | Ruolo Cloud Temple |
|---|---|---|
| Sottoscrivere una connettività di rete operatore per accedere a un datacenter fisico Cloud Temple (1) | __RA__ | __CI__ |
| Gestire gli incidenti sui collegamenti di rete degli operatori client | __RA__ | |
| Gestire i problemi sui collegamenti di rete degli operatori client | __RA__ | __I__ |
| Gestire la capacità sui collegamenti di rete degli operatori client | __RA__ | __CI__ |

*(1) Cloud Temple assume la responsabilità della rete relativa alla propria infrastruttura backbone, ai punti di aggregazione nonché ai punti di interconnessione del datacenter, garantendo così la connettività tra tali punti e la propria infrastruttura backbone. Nell'offerta di hosting in rack fisico, Cloud Temple assume la responsabilità a partire dall'attrezzatura situata nella parte superiore del rack, comunemente definita "top of rack".*