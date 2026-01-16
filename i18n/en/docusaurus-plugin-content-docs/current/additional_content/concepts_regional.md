

---
title: Concepts - Regions
---

import iaasAz001 from './images/iaas_az_001.png';



## Regions

The Cloud Temple infrastructure is designed to ensure business continuity for your applications and platforms. 
Within a region, you benefit from a level 2 network continuity.

This makes it possible to define a technical architecture in the Paris region, using 3 physical sites to implement a high availability platform with quorum.

As of January 2024, the Cloud Temple IaaS platform has the following regions:

- Region FR1 (Paris)



### Region FR1

The FR1 region is based on three physical sites in the Paris region:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Each site is more than 30km by air from the others. On average, there is 80Km of optical distance between each site. The guaranteed latency between the sites is less than 4 ms.



### Regional Expansions

The opening of new regions is primarily associated with market opportunities. In January 2024, the opening of a region in Southern Europe and a region in Northern Europe are under consideration.