---
title: Concepts
---

# Concepts VPC

## Définition et Positionnement

Le **VPC (Virtual Private Cloud)** est un service de réseau managé permettant la création de réseaux privés isolés, sécurisés et pilotables via la console Cloud Temple. Il est conçu pour offrir une expérience cloud-native, automatisant la configuration du réseau et de la sécurité.

À ce jour (Janvier 2026), les réseaux privés du VPC permettent d'interconnecter les services **IaaS Open Source** et **IaaS VMware**. L'interconnexion avec les serveurs **Bare Metal** sera disponible dans une prochaine mise à jour.

### VPC vs Backbone Privé

Cloud Temple propose deux modes de consommation réseau :

*   **Backbone Privé (Offre historique)** :
    *   Idéal pour les experts recherchant une autonomie maximale et des configurations réseau spécifiques (L2 étendu).
    *   Nécessite l'installation et la gestion manuelle d'équipements de sécurité (firewalls, routeurs).
    *   Gestion manuelle du plan d'adressage.

*   **VPC (Nouvelle offre)** :
    *   Conçu pour une expérience cloud-native et automatisée.
    *   Sécurité intégrée (Gateway, Firewalling, NAT) sans gestion d'équipements tiers.
    *   Service managé avec haute disponibilité garantie par Cloud Temple.
    *   Idéal pour les projets modernes, DevOps et l'hébergement d'applications web.

## Architecture

Le VPC repose sur une architecture redondante et hautement disponible, tirant parti du backbone inter-AZ à faible latence de Cloud Temple.

### Composants Clés

*   **Routeur VPC** : Au cœur de chaque VPC, il gère le routage dynamique entre les différents Private Networks (trafic est-ouest).
*   **Private Networks (VLANs)** : Segments de réseau de niveau 2 connectant vos ressources (VMs, serveurs). Ils s'étendent nativement sur plusieurs zones de disponibilité (AZ) sans reconfiguration IP.
*   **Passerelle Externe (External Gateway)** : Point d'entrée et de sortie optionnel pour le trafic Internet (nord-sud). Elle intègre des fonctionnalités de NAT et de gestion des flux.

### Isolation et Sécurité

Le VPC garantit une isolation stricte :
*   Chaque VPC est une entité réseau indépendante.
*   Le déploiement se fait sur des ressources dédiées (pour les clients IaaS Open Source), assurant qu'aucune ressource réseau n'est partagée.
*   Le service est en cours de qualification **SecNumCloud**.

## Fonctionnalités Principales

| Fonctionnalité | Description | Disponibilité |
|----------------|-------------|---------------|
| **Réseaux privés régionaux** | Déploiement multi-AZ et propagation L2 transparente. | Disponible |
| **Routage natif** | Communication automatique entre les réseaux privés d'un même VPC. | Disponible |
| **IPAM & DHCP** | Gestion automatique des pools d'adresses et attribution dynamique. | Disponible |
| **Accès Internet** | Configurable via la Gateway (NAT, DNAT, Egress contrôlé). | Disponible |
| **IP Flottantes** | Exposition flexible de services sur Internet. | Disponible |
| **Micro-segmentation** | Groupes de politiques réseau pour une sécurité avancée. | S1 2026 |
| **Observabilité** | Logs et métriques de performance du réseau. | S1 2026 |
| **Service DNS** | Résolution de noms interne et externe. | S2 2026 |
| **VPN & Cloud Connect** | Connectivité sécurisée vers on-premise et clouds publics. | S2 2026 |

## Cas d'Usage

*   **Hébergement applicatif critique** nécessitant une isolation forte.
*   **Segmentation multi-projets** (Prod, Pre-prod, Dev).
*   **Environnements de test** éphémères et isolés.
*   **Socles réseau souverains** pour les données sensibles.
