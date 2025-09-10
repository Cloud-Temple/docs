---
title: Concetti - Regioni
---

import iaasAz001 from './images/iaas_az_001.png';

## Regioni

L'infrastruttura di Cloud Temple è progettata per garantire la continuità operativa delle vostre applicazioni e piattaforme.
All'interno di una regione, beneficiate della continuità di rete di Livello 2.

È quindi possibile definire un'architettura tecnica per la regione di Parigi, utilizzando 3 siti fisici per implementare una piattaforma ad alta disponibilità con quorum.

A gennaio 2024, la piattaforma IaaS di Cloud Temple dispone delle seguenti regioni:

- Regione FR1 (Parigi)

### Regione FR1

La regione FR1 si basa su tre siti fisici nell'area di Parigi:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Ogni sito dista più di 30 km in linea d'aria dagli altri. In media, la distanza ottica tra ogni sito è di 80 km. La latenza garantita tra i siti è inferiore a 4 ms.

### Espansioni Regionali

L'apertura di nuove regioni è principalmente legata alle opportunità di mercato. A gennaio 2024, si sta valutando l'apertura di una regione nell'Europa meridionale e una nell'Europa settentrionale.
