---
title: Regioni e zone di disponibilità
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

L'infrastruttura Cloud Temple è progettata per garantire la continuità operativa delle vostre applicazioni e piattaforme. È organizzata in regioni, ciascuna composta da più zone di disponibilità.

## Regioni

All'interno di una regione, beneficiate di una continuità di rete di livello 2. È quindi possibile definire, all'interno di una stessa regione, un'architettura tecnica distribuita su tre siti fisici per realizzare una piattaforma in alta disponibilità con quorum.

Cloud Temple dispone della regione **FR1** (Parigi).

### Regione FR1

La regione FR1 si basa su tre siti fisici nella regione parigina:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Ogni sito si trova a più di 30 km in linea d'aria dagli altri; in media, la distanza ottica tra due siti è di 80 km. L'obiettivo di latenza di rete tra zone di disponibilità di una stessa regione è inferiore a 5 ms.

## Zone di disponibilità

Ogni sito fisico di una regione dispone di una o più sale private per le nostre infrastrutture. Queste sale sono ad uso esclusivo di Cloud Temple.

__Ogni sala fisica corrisponde a una zona di disponibilità (AZ, *Availability Zone*)__, completamente autonoma per elettricità, raffreddamento, calcolo, storage e rete. Scegliere una zona di disponibilità significa quindi scegliere un sito fisico e una regione.

La Console propone automaticamente zone di disponibilità su siti fisici distinti, per distribuire la vostra infrastruttura sul maggior numero possibile di siti fisici.

Se avete bisogno di una configurazione particolare (più AZ sullo stesso sito fisico), inviate una richiesta al supporto.
