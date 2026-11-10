---
title: Storage a blocchi
---

Lo **storage a blocchi** di Cloud Temple fornisce i volumi persistenti delle offerte di calcolo: datastore di IaaS VMware, Storage Repository di IaaS OpenSource, volumi di Bare Metal, dischi e volumi di VM Instances. Non si sottoscrive da solo: lo si sceglie insieme all'offerta di calcolo, nella classe di prestazioni adatta a ogni carico di lavoro. Anche le piattaforme di container PaaS OpenShift e Managed Kubernetes si basano su di esso per i loro volumi persistenti.

Questa pagina descrive ciò che è comune a tutte le offerte. La pagina Concetti di ogni offerta precisa le classi che propone e le sue particolarità.

## Offerte interessate

| Offerta | Uso dello storage a blocchi | Classi disponibili |
|---|---|---|
| [IaaS VMware](../../iaas_vmware/concepts.md) | Datastore | Cinque classi Flash e Mass Storage |
| [IaaS OpenSource](../../iaas_opensource/concepts.md) | Storage Repository | Cinque classi Flash e Mass Storage |
| [Bare Metal](../../iaas_bare-metal/concepts.md) | Volumi dei server | Cinque classi Flash e Mass Storage |
| [VM Instances](../../public_cloud/vm_instances/concepts.md) | Disco di sistema e volumi aggiuntivi | Standard ed Enterprise, per i volumi aggiuntivi |

## Classi di storage

| Classe | IOPS/TB | Limite di IOPS / volume | Larghezza di banda max / volume | Unità di fatturazione | Uso principale |
|---|---|---|---|---|---|
| **FLASH - Essentiel** | 500 | 10.000 IOPS | 512 MB/s | 1 GiB | Carichi di lavoro leggeri |
| **FLASH - Standard** | 1.500 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Carichi di lavoro standard |
| **FLASH - Premium** | 3.000 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Carichi intensivi |
| **FLASH - Enterprise** | 7.500 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Carichi critici |
| **FLASH - Ultra** | 15.000 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Carichi ultra-intensivi |
| **MASS STORAGE** | Non garantito | Non garantito | Non garantito | 1 TiB | Backup e archiviazione |

Le unità di fatturazione indicate sono quelle delle offerte IaaS VMware, IaaS OpenSource e Bare Metal. VM Instances fattura i suoi volumi al GB: vedete la sua pagina.

### Regole di prestazione

- Le prestazioni effettive di un volume crescono in modo lineare con la capacità allocata, secondo il rapporto IOPS/TB della sua classe, **entro il limite indicato sopra**. Ad esempio, un volume da 0,5 TB in classe Standard dispone di 750 IOPS; un volume da 10 TB in classe Ultra (150.000 IOPS in teoria) è limitato a 30.000 IOPS e 1.024 MB/s.
- I limiti si applicano a livello del volume di storage. Non ci sono restrizioni né quote sulla lettura o sulla scrittura.
- Non c'è fatturazione per IOPS.
- La classe Mass Storage, su dischi meccanici, non ha impegno di prestazioni.
- Non viene applicata né compressione né deduplicazione: la capacità riservata è allocata fisicamente.

## Architettura

- **Tecnologia**: storage 100% Flash NVMe su [IBM FlashSystem](https://www.ibm.com/flashsystem/), virtualizzato da [IBM SVC](https://www.ibm.com/products/san-volume-controller), con dischi in Distributed RAID 6. La classe Mass Storage utilizza dischi meccanici.
- **Storage locale a ogni zona di disponibilità**: ogni volume viene allocato in una sola zona di disponibilità, quella delle risorse di calcolo, per una latenza inferiore a un millisecondo.
- **Isolamento**: i volumi di storage sono dedicati all'ambiente del cliente.

## Regioni e zone di disponibilità

Lo storage a blocchi è disponibile nella regione FR1, in ciascuna delle sue zone di disponibilità.

## Sicurezza e conformità

- **Crittografia**: i dati sono crittografati a riposo, direttamente sui dischi, con l'algoritmo XTS-AES 256, conforme alla norma FIPS 140-2. La crittografia non si applica durante i trasferimenti di replica tra zone di disponibilità, che passano attraverso canali dedicati e protetti.
- **Certificazioni**: lo storage a blocchi è certificato HDS e ISO 27001, e disponibile su servizi qualificati SecNumCloud e conformi a C5.

## Backup e continuità

- **Replica tra zone di disponibilità**: la replica asincrona (Global Mirror) copia i volumi verso un'altra zona di disponibilità della regione, per i piani di ripristino di emergenza. Si attua con le funzionalità dell'offerta IaaS, ad esempio in [IaaS VMware](../../iaas_vmware/concepts.md). Punta a un RPO di 15 minuti e a un RTO inferiore a 4 ore, è compatibile con le classi Essentiel, Standard e Premium e riduce di circa il 10% gli IOPS del volume replicato. Le prestazioni devono essere identiche nelle due zone.
- **Durabilità**: l'architettura ridondante (RAID, controller, alimentazione) è progettata per una durabilità dei dati del 99,9999999% (9 nove).

## Disponibilità del servizio

L'obiettivo di disponibilità dello storage a blocchi è del 99,99%, misurato su un mese.

## Reversibilità

| Operazione | Mezzo | Tempi | Costo |
|---|---|---|---|
| Esportazione dei dati | Snapshot, immagini disco | 30 giorni | Gratuito |
| Eliminazione sicura | Certificato di distruzione | — | Incluso |

## Prezzi

I prezzi dello storage a blocchi sono pubblicati sulla pagina del prodotto del sito Cloud Temple:
[Storage a blocchi — prezzi](https://www.cloud-temple.com/produits/stockage-bloc/).
