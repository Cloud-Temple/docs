---
title: Concetti - Regioni
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

## Regioni

L'infrastruttura Cloud Temple è progettata per garantire la continuità operativa delle vostre applicazioni e delle vostre piattaforme.
All'interno di una regione, è garantita una continuità di rete di livello 2.

Di conseguenza, è possibile definire un'architettura tecnica nella regione Parigi, utilizzando 3 siti fisici per consentire l'implementazione di una piattaforma in alta disponibilità con quorum.

A gennaio 2024, la piattaforma IaaS Cloud Temple dispone delle seguenti regioni:

- Regione FR1 (Parigi)

### Regione FR1

La regione FR1 si basa su tre siti fisici nella regione parigina:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Ogni sito si trova a più di 30 km in linea d'aria dagli altri. In media, la distanza ottica tra ogni sito è di circa 80 km. La latenza garantita tra i siti è inferiore a 4 ms.

### Espansioni regionali

L'apertura di nuove regioni è principalmente associata alle opportunità di mercato. A gennaio 2024, l'apertura di una regione nel Sud Europa e di una regione nel Nord Europa sono in fase di studio.