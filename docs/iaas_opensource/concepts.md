---
title: Concepts
---

L'offre __IaaS (Infrastructure As A Service)__ de Cloud Temple est conçue pour répondre aux besoins critiques de continuité et reprise d'activité, avec un accent particulier sur les secteurs exigeants comme l'industrie, la banque et l'assurance. Basée sur des technologies de pointe, cette infrastructure garantit une disponibilité maximale et une performance optimale pour vos charges de travail critiques.

## Une plateforme technologique de confiance

La plateforme IaaS de Cloud Temple s'appuie sur des partenaires technologiques de renommée internationale :

- Calcul : **CISCO UCS**.
- Stockage : **IBM Spectrum Virtualize**, **IBM FlashSystem** pour le stockage bloc, et **DELL ECS** pour le stockage objet.
- Réseau : **JUNIPER**.
- Virtualisation : **Stack Opensource**, offrant une base fiable et éprouvée pour gérer vos environnements cloud.

Cette architecture repose sur le modèle **VersaStack**, une alliance entre Cisco et IBM, garantissant une compatibilité étendue avec les principaux éditeurs logiciels.

## Une infrastructure dédiée et automatisée

Bien qu'entièrement automatisée grâce à des APIs et un provider Terraform, l'offre IaaS de Cloud Temple propose une infrastructure unique :

- **Ressources dédiées** : Les lames de calcul, volumes de stockage, et stacks logicielles (virtualisation, sauvegarde, firewalling, etc.) ne sont jamais mutualisées entre les clients.
- **Prédictibilité maximale** : Vous maîtrisez les taux de virtualisation, la pression en IOPS sur le stockage et bénéficiez d’une facturation claire, à la consommation mensuelle.

La plateforme est qualifiée **SecNumCloud** par l'[ANSSI](https://www.ssi.gouv.fr/), garantissant un haut niveau d'automatisation et de sécurité.

## Principales fonctionnalités

- Ressources de calcul (CPU, RAM) dédiées et à la demande.
- Stockage à la demande (plusieurs classes disponibles).
- Ressources réseau (Internet, réseaux privés).
- Sauvegardes croisées avec rétention configurable.
- Réplication asynchrone pour le stockage ou les machines virtuelles.
- Pilotage via la [Console Shiva](../console/console.md) ou en mode Infrastructure as Code grâce aux APIs et au provider Terraform.

## Avantages

| Avantage            | Description                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confiance numérique | Hébergement des données en France et conformité RGPD.                                                                                          |   
| Sécurité            | Plateforme hautement sécurisée, qualifiée **SecNumCloud**, **HDS** (Hébergement des Données de Santé), **ISO 27001** et **ISAE 3402 type II**. |  
| Haute disponibilité | Taux de disponibilité de la plateforme de 99,99%, mesuré mensuellement, plages de maintenance incluses.                                        |   
| Résilience          | Mise en place de plans de continuité ou de reprise d'activité selon les besoins.                                                               |
| Automatisation      | Plateforme entièrement automatisée pensée pour s'intégrer dans un programme de transformation numérique.                                        |
| On demand           | Ressources disponibles à la demande.                                                                                                          |


## Classes de lames de calcul

Les lames de calcul disponibles pour l'offre Bare Metal offrent une gamme de performances pour répondre à divers besoins :

| Référence             | RAM  __(1)__ | Fréquence __(2)__                         | Nombre de cœurs / threads | Connectivité __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notes :
- __(1)__ La quantité de mémoire est celle physiquement disponible sur les lames et ne peut être modifiée.
- __(2)__ Les fréquences indiquées correspondent à la fréquence de base minimum et à la fréquence turbo.
- __(3)__ La connectivité physique est mutualisée pour l'accès réseau et l'accès stockage bloc, grâce à une architecture convergée Cisco UCS.
- __(4)__ Les GPU disponibles évoluent en fonction des dernières technologies. Au 1er mai 2024, l'offre inclut des GPU NVIDIA LOVELACE L40S.

La disponibilité de l'infrastructure est garantie à 99.9%, mesurée mensuellement, plages de maintenance incluses. Toute demande liée au SLA doit être déclarée via un ticket incident.

---

## Classes de stockage en mode bloc

Le stockage bloc distribué, basé sur **IBM Spectrum Virtualize**, offre une gamme de performances adaptées à divers cas d'utilisation :

| Référence                         | IOPS/To                 | Usage principal                        | 
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500                     | Charges de travail légères             |
| **FLASH - Standard**              | 1500                    | Charges de travail standard            |
| **FLASH - Premium**               | 3000                    | Charges intensives                     |
| **FLASH - Enterprise**            | 7500                    | Charges critiques                      |
| **FLASH - Ultra**                 | 15000                   | Charges ultra-intensives               |
| **MASS STORAGE - Archivage**      | Non applicable          | Stockage économique pour l'archivage   |

### Caractéristiques :
- **Technologie** : Flash NVMe avec **Distributed RAID 6** pour une résilience accrue.
- **Disponibilité** : 99.99%, mesurée mensuellement.
- **Restrictions** : Pas de limitation sur les lectures ou écritures. Pas de compression ou de déduplication automatique, garantissant l'utilisation intégrale des volumes réservés.

---