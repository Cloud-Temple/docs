---
title: Stockage bloc
---

Le **stockage bloc** de Cloud Temple fournit les volumes persistants des offres de calcul : datastores IaaS VMware, Storage Repositories IaaS OpenSource, volumes Bare Metal, disques et volumes de VM Instances. Il ne se souscrit pas seul : on le choisit avec l'offre de calcul, dans la classe de performance adaptée à chaque charge de travail. Les plateformes de conteneurs PaaS OpenShift et Managed Kubernetes s'appuient aussi sur lui pour leurs volumes persistants.

Cette page décrit ce qui est commun à toutes les offres. La page Concepts de chaque offre précise les classes qu'elle propose et ses particularités.

## Offres concernées

| Offre | Usage du stockage bloc | Classes disponibles |
|---|---|---|
| [IaaS VMware](../../iaas_vmware/concepts.md) | Datastores | Cinq classes Flash et Mass Storage |
| [IaaS OpenSource](../../iaas_opensource/concepts.md) | Storage Repositories | Cinq classes Flash et Mass Storage |
| [Bare Metal](../../iaas_bare-metal/concepts.md) | Volumes des serveurs | Cinq classes Flash et Mass Storage |
| [VM Instances](../../public_cloud/vm_instances/concepts.md) | Disque système et volumes additionnels | Standard et Enterprise, pour les volumes additionnels |

## Classes de stockage

| Classe | IOPS/To | Plafond IOPS / volume | Bande passante max / volume | Unité de facturation | Usage principal |
|---|---|---|---|---|---|
| **FLASH - Essentiel** | 500 | 10 000 IOPS | 512 Mo/s | 1 Gio | Charges de travail légères |
| **FLASH - Standard** | 1 500 | 30 000 IOPS | 1 024 Mo/s | 1 Gio | Charges de travail standard |
| **FLASH - Premium** | 3 000 | 30 000 IOPS | 1 024 Mo/s | 1 Gio | Charges intensives |
| **FLASH - Enterprise** | 7 500 | 30 000 IOPS | 1 024 Mo/s | 1 Gio | Charges critiques |
| **FLASH - Ultra** | 15 000 | 30 000 IOPS | 1 024 Mo/s | 1 Gio | Charges ultra-intensives |
| **MASS STORAGE** | Non garanti | Non garanti | Non garanti | 1 Tio | Sauvegarde et archivage |

Les unités de facturation indiquées sont celles des offres IaaS VMware, IaaS OpenSource et Bare Metal. VM Instances facture ses volumes au Go : voir sa page.

### Règles de performance

- La performance effective d'un volume croît de manière linéaire avec la capacité allouée, selon le ratio IOPS/To de sa classe, **dans la limite du plafond indiqué ci-dessus**. Par exemple, un volume de 0,5 To en classe Standard dispose de 750 IOPS ; un volume de 10 To en classe Ultra (150 000 IOPS en théorie) est plafonné à 30 000 IOPS et 1 024 Mo/s.
- Les limites s'appliquent au niveau du volume de stockage. Il n'y a ni restriction ni quota sur la lecture ou l'écriture.
- Il n'y a pas de facturation à l'IOPS.
- La classe Mass Storage, sur disques mécaniques, n'a pas d'engagement de performance.
- Aucune compression ni déduplication n'est appliquée : la capacité réservée est physiquement allouée.

## Architecture

- **Technologie** : stockage 100 % Flash NVMe sur [IBM FlashSystem](https://www.ibm.com/flashsystem/), virtualisé par [IBM SVC](https://www.ibm.com/products/san-volume-controller), avec des disques en Distributed RAID 6. La classe Mass Storage utilise des disques mécaniques.
- **Stockage local à chaque zone de disponibilité** : chaque volume est provisionné dans une seule zone de disponibilité, celle des ressources de calcul, pour une latence inférieure à une milliseconde.
- **Isolation** : les volumes de stockage sont dédiés à l'environnement du client.

## Régions et zones de disponibilité

Le stockage bloc est disponible dans la région FR1, dans chacune de ses zones de disponibilité.

## Sécurité et conformité

- **Chiffrement** : les données sont chiffrées au repos, directement sur les disques, avec l'algorithme XTS-AES 256, conforme à la norme FIPS 140-2. Le chiffrement ne s'applique pas pendant les transferts de réplication entre zones de disponibilité, qui passent par des canaux dédiés et sécurisés.
- **Certifications** : le stockage bloc est certifié HDS et ISO 27001, et disponible sur des services qualifiés SecNumCloud et conformes C5.

## Sauvegarde et continuité

- **Réplication entre zones de disponibilité** : la réplication asynchrone (Global Mirror) copie les volumes vers une autre zone de disponibilité de la région, pour les plans de reprise d'activité. Elle se met en œuvre avec les fonctionnalités de l'offre IaaS, par exemple dans [IaaS VMware](../../iaas_vmware/concepts.md). Elle vise un RPO de 15 minutes et un RTO inférieur à 4 heures, est compatible avec les classes Essentiel, Standard et Premium, et réduit d'environ 10 % les IOPS du volume répliqué. Les performances doivent être identiques dans les deux zones.
- **Durabilité** : l'architecture redondante (RAID, contrôleurs, alimentation) est conçue pour une durabilité des données de 99,9999999 % (9 neufs).

## Disponibilité du service

L'objectif de disponibilité du stockage bloc est de 99,99 %, mesuré sur un mois.

## Réversibilité

| Opération | Moyen | Délai | Coût |
|---|---|---|---|
| Export des données | Snapshots, images de disques | 30 jours | Gratuit |
| Purge sécurisée | Certificat de destruction | — | Inclus |

## Tarification

Les tarifs du stockage bloc sont publiés sur la page produit du site Cloud Temple :
[Stockage bloc — tarifs](https://www.cloud-temple.com/produits/stockage-bloc/).
