---
title: Concepts - Availability Zones
---

## Availability Zones

Each physical site within a region has one or more private rooms for our infrastructure. These rooms are exclusively used by Cloud Temple.

__Each physical room corresponds to an availability zone (AZ / Availability Zone)__ and is completely autonomous in terms of electricity, cooling, computing, storage, and networking.
Choosing an availability zone therefore means choosing a physical site and a region.

The Shiva console automatically offers availability zones on distinct physical sites to spread your infrastructure across the maximum number of physical sites.

*__Note: If you require specific configuration for a particular context (multiple AZs on the same physical site), you need to submit a support request.__*

| Order Reference                                        | Unit           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Activation d'une zone de disponibilité | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |