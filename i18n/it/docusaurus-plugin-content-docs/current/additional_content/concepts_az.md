---
title: Concepts - Zones de disponibilité
---

## Zone di disponibilità

Ogni sito fisico all'interno di una regione dispone di una o più sale private per le nostre infrastrutture. Queste sale sono ad uso esclusivo di Cloud Temple.

__Ogni sala fisica corrisponde a una zona di disponibilità (AZ / Availability Zone)__ ed è totalmente autonoma dal punto di vista dell'elettricità, del raffreddamento, del calcolo, dello storage e della rete.
La scelta di una zona di disponibilità implica quindi la scelta di un sito fisico e di una regione.

La console Shiva propone automaticamente delle zone di disponibilità su siti fisici distinti in modo da distribuire la vostra infrastruttura sul maggior numero possibile di siti fisici.

*__Nota: Se desiderate una configurazione specifica per un contesto particolare (più AZ sullo stesso sito fisico), è necessario fare una richiesta di supporto.__*


| Riferimento dell'ordine                                                  | Unità                  | SKU                       |
|-------------------------------------------------------------------------|------------------------|---------------------------|
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |