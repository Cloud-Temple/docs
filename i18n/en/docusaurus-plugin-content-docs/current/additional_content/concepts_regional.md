---
title: Concepts - Regions
---

import iaasAz001 from './images/iaas_az_001.png';

## Regions

The Cloud Temple infrastructure is designed to ensure the business continuity of your applications and platforms.
Within a region, you benefit from Layer 2 network continuity.

Thus, it is possible to define a technical architecture for the Paris region, using 3 physical sites to implement a high-availability platform with a quorum.

As of January 2024, the Cloud Temple IaaS platform has the following regions:

- FR1 Region (Paris)

### FR1 Region

The FR1 region is based on three physical sites in the Paris area:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Each site is more than 30km away from the others as the crow flies. On average, there is an 80km optical distance between each site. The guaranteed latency between sites is less than 4 ms.

### Regional Expansions

The opening of new regions is mainly associated with market opportunities. As of January 2024, the opening of a region in Southern Europe and a region in Northern Europe are under consideration.
