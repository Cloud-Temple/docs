---
title: Regions and availability zones
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

The Cloud Temple infrastructure is designed to ensure business continuity for your applications and platforms. It is organized into regions, each made up of several availability zones.

## Regions

Within a region, you benefit from level 2 network continuity. It is therefore possible to define, within a single region, a technical architecture spread over three physical sites to deploy a high-availability platform with quorum.

Cloud Temple operates the **FR1** region (Paris).

### FR1 Region

The FR1 region relies on three physical sites in the Paris area:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Each site is more than 30 km away from the others in a straight line; on average, there is 80 km of optical distance between two sites. The target network latency between availability zones of the same region is less than 5 ms.

## Availability Zones

Each physical site within a region has one or more private rooms for our infrastructure. These rooms are exclusively used by Cloud Temple.

__Each physical room corresponds to an availability zone (AZ)__, fully autonomous in terms of power, cooling, compute, storage, and networking. Choosing an availability zone therefore means choosing a physical site and a region.

The Console automatically proposes availability zones on distinct physical sites, to spread your infrastructure across as many physical sites as possible.

If you need a specific configuration (several AZs on the same physical site), submit a support request.
