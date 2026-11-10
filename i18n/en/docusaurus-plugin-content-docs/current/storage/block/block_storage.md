---
title: Block storage
---

Cloud Temple **block storage** provides the persistent volumes of the compute offerings: IaaS VMware datastores, IaaS OpenSource Storage Repositories, Bare Metal volumes, and VM Instances disks and volumes. It is not subscribed on its own: you choose it with the compute offering, in the performance class suited to each workload. The PaaS OpenShift and Managed Kubernetes container platforms also rely on it for their persistent volumes.

This page describes what is common to all offerings. The Concepts page of each offering specifies the classes it provides and its particularities.

## Offerings concerned

| Offering | Use of block storage | Available classes |
|---|---|---|
| [IaaS VMware](../../iaas_vmware/concepts.md) | Datastores | Five Flash classes and Mass Storage |
| [IaaS OpenSource](../../iaas_opensource/concepts.md) | Storage Repositories | Five Flash classes and Mass Storage |
| [Bare Metal](../../iaas_bare-metal/concepts.md) | Server volumes | Five Flash classes and Mass Storage |
| [VM Instances](../../public_cloud/vm_instances/concepts.md) | System disk and additional volumes | Standard and Enterprise, for additional volumes |

## Storage classes

| Class | IOPS/TB | IOPS ceiling / volume | Max bandwidth / volume | Billing unit | Main use |
|---|---|---|---|---|---|
| **FLASH - Essential** | 500 | 10,000 IOPS | 512 MB/s | 1 GiB | Light workloads |
| **FLASH - Standard** | 1,500 | 30,000 IOPS | 1,024 MB/s | 1 GiB | Standard workloads |
| **FLASH - Premium** | 3,000 | 30,000 IOPS | 1,024 MB/s | 1 GiB | Intensive workloads |
| **FLASH - Enterprise** | 7,500 | 30,000 IOPS | 1,024 MB/s | 1 GiB | Critical workloads |
| **FLASH - Ultra** | 15,000 | 30,000 IOPS | 1,024 MB/s | 1 GiB | Ultra-intensive workloads |
| **MASS STORAGE** | Not guaranteed | Not guaranteed | Not guaranteed | 1 TiB | Backup and archiving |

The billing units shown are those of the IaaS VMware, IaaS OpenSource and Bare Metal offerings. VM Instances bills its volumes per GB: see its page.

### Performance rules

- The effective performance of a volume grows linearly with the allocated capacity, according to the IOPS/TB ratio of its class, **within the ceiling shown above**. For example, a 0.5 TB volume in the Standard class gets 750 IOPS; a 10 TB volume in the Ultra class (150,000 IOPS in theory) is capped at 30,000 IOPS and 1,024 MB/s.
- The limits apply at the level of the storage volume. There is no restriction or quota on reads or writes.
- There is no billing per IOPS.
- The Mass Storage class, on mechanical disks, has no performance commitment.
- No compression or deduplication is applied: the reserved capacity is physically allocated.

## Architecture

- **Technology**: 100% Flash NVMe storage on [IBM FlashSystem](https://www.ibm.com/flashsystem/), virtualized by [IBM SVC](https://www.ibm.com/products/san-volume-controller), with disks in Distributed RAID 6. The Mass Storage class uses mechanical disks.
- **Storage local to each availability zone**: each volume is provisioned in a single availability zone, that of the compute resources, for a latency below one millisecond.
- **Isolation**: storage volumes are dedicated to the client's environment.

## Regions and availability zones

Block storage is available in the FR1 region, in each of its availability zones.

## Security and compliance

- **Encryption**: data is encrypted at rest, directly on the disks, with the XTS-AES 256 algorithm, compliant with the FIPS 140-2 standard. Encryption does not apply during replication transfers between availability zones, which use dedicated and secured channels.
- **Certifications**: block storage is HDS and ISO 27001 certified, and available on SecNumCloud-qualified and C5-compliant services.

## Backup and continuity

- **Replication between availability zones**: asynchronous replication (Global Mirror) copies the volumes to another availability zone of the region, for disaster recovery plans. It is implemented with the features of the IaaS offering, for example in [IaaS VMware](../../iaas_vmware/concepts.md). It targets an RPO of 15 minutes and an RTO below 4 hours, is compatible with the Essential, Standard and Premium classes, and reduces the IOPS of the replicated volume by about 10%. Performance must be identical in both zones.
- **Durability**: the redundant architecture (RAID, controllers, power supply) is designed for a data durability of 99.9999999% (9 nines).

## Service availability

The availability objective of block storage is 99.99%, measured over a month.

## Reversibility

| Operation | Means | Lead time | Cost |
|---|---|---|---|
| Data export | Snapshots, disk images | 30 days | Free |
| Secure purge | Certificate of destruction | — | Included |

## Pricing

Block storage prices are published on the product page of the Cloud Temple website:
[Block storage — pricing](https://www.cloud-temple.com/produits/stockage-bloc/).
