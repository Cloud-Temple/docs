---
title: Concetti - Zone di disponibilità
---

## Zone di disponibilità

Ogni sito fisico all'interno di una regione dispone di una o più sale dedicate per le nostre infrastrutture. Queste sale sono esclusivamente utilizzate da Cloud Temple.

__Ogni sala fisica corrisponde a una zona di disponibilità (AZ / Availability Zone)__ ed è completamente autonoma dal punto di vista elettrico, di raffreddamento, calcolo, archiviazione e rete.  
La scelta di una zona di disponibilità implica quindi la scelta di un sito fisico e di una regione.

La Console seleziona automaticamente le zone di disponibilità su siti fisici diversi, in modo da distribuire la tua infrastruttura sul massimo numero di siti fisici.

*__Nota: Se desideri un'allocazione specifica per un contesto particolare (più AZ sullo stesso sito fisico), è necessario inviare una richiesta di supporto.__*

| Riferimento del comando                                        | Unità           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |