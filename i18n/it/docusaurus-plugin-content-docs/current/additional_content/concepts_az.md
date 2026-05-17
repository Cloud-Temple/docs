---
title: Concetti - Zone di disponibilità
---

## Zone di disponibilità

Ogni sito fisico all'interno di una regione dispone di una o più sale private per le nostre infrastrutture. Queste sale sono ad uso esclusivo di Cloud Temple.

__Ogni sala fisica corrisponde a una zona di disponibilità (AZ / Availability Zone)__ ed è completamente autonoma per quanto riguarda elettricità, raffreddamento, calcolo, storage e rete.
La scelta di una zona di disponibilità implica quindi la scelta di un sito fisico e di una regione.

La Console propone automaticamente zone di disponibilità su siti fisici distinti al fine di distribuire la tua infrastruttura sul massimo numero di siti fisici.

*__Nota : Se desideri una configurazione specifica per un contesto particolare (plusieurs AZ sur le même site physique), è necessario inviare una richiesta di supporto.__*

| Riferimento ordine                                         | Unità           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Attivazione di una zona di disponibilità | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |