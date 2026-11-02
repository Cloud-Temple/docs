---
title: Concepts
---

<a id="concepts-vpc"></a>
<a id="définition-et-positionnement"></a>

## Présentation

Le **VPC (Virtual Private Cloud)** est un service de réseau managé qui permet de créer des réseaux privés isolés, sécurisés et pilotables depuis la Console Cloud Temple. Il offre une expérience cloud-native : la configuration du réseau et de la sécurité est automatisée, sans équipement réseau à installer ni à gérer.

Les réseaux privés du VPC interconnectent les services **IaaS OpenSource**, **IaaS VMware** et **VM Instances**.

### VPC vs Backbone Privé

Deux modes de consommation réseau sont proposés :

* **Backbone Privé (offre historique)** :
  * idéal pour les experts recherchant une autonomie maximale et des configurations réseau spécifiques (L2 étendu) ;
  * nécessite l'installation et la gestion manuelle d'équipements de sécurité (pare-feu, routeurs) ;
  * gestion manuelle du plan d'adressage.

* **VPC** :
  * conçu pour une expérience cloud-native et automatisée ;
  * sécurité intégrée (passerelle, filtrage, NAT) sans gestion d'équipements tiers ;
  * service managé, en haute disponibilité ;
  * idéal pour les projets modernes, DevOps et l'hébergement d'applications web.

<a id="cas-dusage"></a>

### Publics et cas d'usage

* **Hébergement applicatif critique** nécessitant une isolation forte.
* **Segmentation multi-projets** (production, pré-production, développement).
* **Environnements de test** éphémères et isolés.
* **Socles réseau souverains** pour les données sensibles.

## Avantages

| Avantage                    | Description                                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------|
| Haute disponibilité         | Le plan de données est conçu pour une disponibilité de 99,99 %.                             |
| Multi-zones sans reconfiguration | Un même plan d'adressage s'étend sur plusieurs zones de disponibilité, sans reconfiguration IP. |
| Sécurité intégrée           | Passerelle, filtrage et NAT sont inclus, sans équipement réseau à gérer.                    |
| Pilotage unifié             | Gestion depuis la Console ou par API.                                                       |
| Souveraineté                | Service qualifié SecNumCloud.                                                               |

<a id="fonctionnalités-principales"></a>

## Fonctionnalités

| Fonctionnalité                | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| **Réseaux privés régionaux**  | Déploiement multi-AZ et propagation L2 transparente.                        |
| **Private Networks**          | Réseaux segmentés, interconnectables entre offres Cloud Temple.             |
| **Routage natif**             | Communication automatique entre les réseaux privés d'un même VPC.           |
| **IPAM & DHCP**               | Réservation d'adresses IP, gestion des pools et attribution dynamique.      |
| **Accès Internet**            | Configurable via la passerelle (NAT, DNAT, egress contrôlé).               |
| **IP flottantes**             | Exposition flexible de services sur Internet.                               |
| **Politiques de flux**        | Filtrage de sécurité intégré pour les flux nord-sud et est-ouest.           |
| **Observabilité**             | Logs et métriques de performance du réseau.                                 |
| **Peering inter-VPC**         | Interconnexion de VPC (option payante).                                     |

### Modes de déploiement

* **VPC en mode dédié** : prérequis, une souscription à l'offre IaaS OpenSource. Les instances VPC (routeurs, passerelles) sont déployées directement sur votre infrastructure dédiée : les ressources de calcul qui portent vos services réseau sont physiquement isolées.
* **VPC en mode mutualisé** : ce mode s'appuie sur l'offre VM Instances. Il apporte le VPC sans infrastructure dédiée préalable, pour les besoins ponctuels ou les environnements cloud-native.

## Architecture

Le VPC repose sur une architecture redondante et hautement disponible, qui s'appuie sur le backbone inter-AZ à faible latence de Cloud Temple.

### Composants clés

* **Routeur VPC** : au cœur de chaque VPC, il gère le routage dynamique entre les différents Private Networks (trafic est-ouest).
* **Private Networks (VLANs)** : segments de réseau de niveau 2 qui connectent vos ressources (VM, serveurs). Ils s'étendent nativement sur plusieurs zones de disponibilité sans reconfiguration IP.
* **Passerelle externe (External Gateway)** : point d'entrée et de sortie optionnel pour le trafic Internet (nord-sud). Elle intègre des fonctionnalités de NAT et de gestion des flux.

### Intégrations

* **Métriques** : les métriques de performance et de consommation du VPC (trafic, état des passerelles, etc.) sont exportables au format Prometheus via l'API de la Console.

## Régions et zones de disponibilité

Le VPC est disponible dans la région FR1. Ses réseaux privés s'étendent sur plusieurs zones de disponibilité, avec un plan d'adressage unique.

## Caractéristiques techniques

| Paramètre                 | Valeur                          |
|---------------------------|---------------------------------|
| VPC par tenant            | 8                               |
| Réseaux privés par VPC    | 16                              |
| Adressage IP              | RFC 1918 / RFC 4193             |
| Peering inter-VPC         | Supporté (option payante)       |
| Trafic inter-AZ           | Inclus                          |
| Trafic entrant            | Inclus                          |

### Limites

* 8 VPC par tenant et 16 réseaux privés par VPC.

## Sécurité et conformité

Le VPC est certifié HDS et ISO 27001, et qualifié SecNumCloud.

<a id="isolation-et-sécurité"></a>

### Isolation et sécurité

Le VPC garantit une isolation stricte :

* chaque VPC est une entité réseau indépendante, logiquement isolée des autres tenants ;
* en mode dédié, le déploiement se fait sur des ressources dédiées : aucune ressource réseau n'est partagée entre clients ;
* toutes les opérations de configuration sont traçables via la Console.

## Disponibilité du service

| Élément                                                      | Objectif de disponibilité, mesuré sur un mois |
|--------------------------------------------------------------|-----------------------------------------------|
| Plan de données (routage inter-réseaux, NAT, DNAT)           | 99,99 %                                       |
| Plan de contrôle (API, Console)                              | 99,9 %                                        |

## Responsabilités

La répartition des responsabilités entre le client et Cloud Temple est détaillée dans la [matrice de responsabilités (RACI) VPC](../../contractual/network/raci_vpc.md).

## Réversibilité

La configuration du VPC peut être exportée vers un stockage S3 pendant 30 jours après la fin du service.

## Tarification

Les tarifs du VPC sont publiés sur la page produit du site Cloud Temple :
[VPC — tarifs](https://www.cloud-temple.com/produits/virtual-private-cloud-souverain/).
