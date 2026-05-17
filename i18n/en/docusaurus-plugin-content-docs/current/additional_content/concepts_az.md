---
title: Concepts - Availability Zones
---

## Availability Zones

Each physical site within a region has one or more private rooms for our infrastructure. These rooms are exclusively used by Cloud Temple.

__Each physical room corresponds to an availability zone (AZ / Availability Zone)__ and is completely autonomous in terms of power, cooling, compute, storage, and networking.
Choosing an availability zone therefore implies choosing a physical site and a region.

The Console automatically proposes availability zones on distinct physical sites to distribute your infrastructure across the maximum number of physical sites.

*__Note: If you require a specific configuration for a particular context (multiple AZs on the same physical site), you must submit a support request.__*

| Order Reference                                        | Unit           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Activation of an availability zone | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |