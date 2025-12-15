---
title: Concepts - Availability Zones
---

## Availability Zones

Each physical site within a region has one or more dedicated rooms for our infrastructure. These rooms are exclusively used by Cloud Temple.

__Each physical room corresponds to an availability zone (AZ / Availability Zone)__ and is fully autonomous in terms of power, cooling, computing, storage, and networking.  
Therefore, selecting an availability zone means choosing both a physical site and a region.

The Console automatically suggests availability zones located on distinct physical sites, enabling you to distribute your infrastructure across the maximum number of physical sites.

*__Note: If you require a specific configuration for a particular use case (multiple AZs on the same physical site), please submit a support request.__*

| Order Reference                                        | Unit           | SKU                       |  
|--------------------------------------------------------|----------------|---------------------------|
| TENANT - *(REGION)* - Activate an availability zone | 1 AZ per tenant | csp:*(REGION)*:iaas:az:v1 |