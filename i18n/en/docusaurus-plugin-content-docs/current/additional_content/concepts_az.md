---
title: Concepts - Availability zones
---

## Availability Zones

Each physical site within a region has one or more private rooms for our infrastructure. These rooms are for the exclusive use of Cloud Temple.

__Each physical room corresponds to an Availability Zone (AZ)__ and is completely autonomous in terms of electricity, cooling, computing, storage, and network.
Choosing an Availability Zone therefore implies choosing a physical site and a region.

The Shiva console automatically offers you Availability Zones on distinct physical sites in order to distribute your infrastructure across the maximum number of physical sites.

*__Note: If you require a specific configuration for a particular context (multiple AZs on the same physical site), it is necessary to make a support request.__*


| Order Reference                                              | Unit            | SKU                       |
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Activation of an Availability Zone     | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |
