---
title: Concepts
---

## Infrastructure Internet CloudTemple

CloudTemple opère en tant que **Cloud Service Provider (CSP)** doté d'une infrastructure Internet autonome, hautement résiliente et sécurisée. Notre connectivité de type opérateur s'appuie sur un numéro d'AS (Autonomous System Number) propre qui nous confère un contrôle total du routage et garantit une haute disponibilité pour tous nos services.

Cette infrastructure autonome nous permet de proposer une connectivité Internet avec des fonctionnalités avancées, adaptées à tous les types d'offres CloudTemple, depuis l'hébergement dédié jusqu'aux solutions IaaS en passant par les services PaaS.

## Architecture réseau et redondance

Notre réseau bénéficie d'une architecture redondante conçue pour optimiser les performances et garantir la continuité de service. CloudTemple dispose d'un système autonome indépendant avec un ensemble de préfixes IP publics attribués, assurant une connectivité mondiale directe.

Cette connectivité s'appuie sur **deux voies distinctes** pour maximiser la résilience :

**Connectivité de transit :** Deux opérateurs de transit principaux assurent la redondance au niveau mondial, permettant un routage optimal du trafic Internet vers nos infrastructures.

**Points d'échange :** Notre présence sur deux points d'échange (IXP) à Paris nous permet de réduire significativement la latence pour les utilisateurs européens tout en améliorant les performances des services régionaux. Cette approche garantit également une redondance naturelle contre les pannes de fournisseur.

L'utilisation du protocole BGP4 garantit un routage efficace de vos flux Internet vers la passerelle active de votre architecture, particulièrement dans les scénarios de déploiement multi-zones de disponibilité, comme c'est le cas pour des clusters de firewalls répartis entre deux zones de disponibilité.

## Protection anti-DDoS intégrée

Tout trafic entrant vers l'infrastructure CloudTemple bénéficie d'une protection anti-DDoS avancée, assurée par **F5**, un leader mondial en sécurité réseau. Cette protection fonctionne de manière transparente et automatique.

Les attaques volumétriques sont détectées et atténuées directement en bordure du réseau F5, avant même d'atteindre le réseau CloudTemple. Ce filtrage en amont garantit qu'aucune saturation ne peut affecter nos connexions Internet, et seules les requêtes légitimes parviennent jusqu'à nos infrastructures.

**Tous les services CloudTemple** bénéficient de cette protection sans surcoût, y compris les préfixes clients qui peuvent être migrés vers notre infrastructure. Cette approche intégrée transforme une contrainte sécuritaire en avantage opérationnel pour nos clients.

## Attribution d'adresses IP publiques

CloudTemple propose un système flexible d'attribution d'adresses IP publiques Provider Aggregated (PA), permettant aux clients de réserver des adresses IP publiques **à l'unité** selon leurs besoins spécifiques.

### Processus de réservation

La réservation d'adresses IP publiques s'effectue directement via la console CloudTemple, offrant une gestion autonome et immédiate :

**Via l'API de la console :** Intégration possible dans vos workflows d'automatisation et de provisioning.

**Via la console web :** Interface intuitive accessible depuis la section *Internet* de votre espace client.

Le processus de réservation suit ces étapes simples : connexion à la console, navigation vers *Internet* > *Gérer les adresses IP*, sélection de *Réserver une nouvelle adresse*, choix entre IPv4 ou IPv6, puis validation de la commande.

### Facturation

La facturation des adresses IP publiques s'effectue par unité d'œuvre (UO) et commence dès la réservation de l'adresse, garantissant une transparence totale des coûts.

| Référence | Unité | SKU |
|-----------|-------|-----|
| Réseau - IPv4 Publique dédiée | 1 IPv4 | RSIP-IP4-UNIT |
| Réseau - IPv6 Publique dédiée | 1 IPv6 | RSIP-IP6-UNIT |

## Blocs IPv4

La livraison d'une IPv4 se fait dans __la limite des stocks disponibles__ pour nos clients, par adresse IP.

La commande d'adresses IPv4 s'effectue depuis le menu __*'IPs publiques'*__ du menu Réseaux dans le bandeau vert à gauche, via le bouton __*"Commander des adresses IPv4 ou préfixes IPv6"*__.

Il est possible de visualiser les blocs d'adresses qui vous sont affectés dans ce même menu.

| Référence                     | Unité  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Réseau - IPv4 Publique dédiée | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Blocs IPv6

La commande de préfixes IPv6 s'effectue depuis le menu __*'IPs publiques'*__ du menu Réseaux dans le bandeau vert à gauche, via le bouton __*"Commander des adresses IPv4 ou préfixes IPv6"*__.

Il est possible de visualiser les prefixes qui vous sont affectés dans ce même menu.

| Référence                             | Unité   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Réseau - Plage IPv6 Publiques dédiées | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Migration de préfixes IP clients

CloudTemple accompagne les clients souhaitant migrer leurs propres préfixes IP vers notre infrastructure, facilitant ainsi les projets de migration tout en conservant l'identité réseau existante.

### Avantages de la migration

Cette approche permet de conserver votre identité IP lors de la migration vers CloudTemple, assurant une continuité parfaite pour vos applications et clients. Vous conservez la maîtrise complète de l'utilisation de vos adresses IP tout en bénéficiant de l'infrastructure CloudTemple.

### Processus d'intégration

Votre préfixe IP (par exemple `203.0.113.0/24`) est intégré au réseau backbone CloudTemple et annoncé depuis notre AS. Une fois intégré, le préfixe peut être associé librement à vos machines virtuelles, équilibreurs de charge ou autres services.

**Toutes les adresses du préfixe migré bénéficient automatiquement de la protection anti-DDoS F5**, sans configuration supplémentaire ni surcoût.

### Conditions requises

La migration de préfixes IP nécessite que le préfixe soit enregistré dans un registre Internet reconnu (ARIN, RIPE, APNIC, etc.) et que vous en soyez le propriétaire légitime. La gestion BGP peut être assurée par vos équipes ou bénéficier du support technique CloudTemple selon vos préférences.

## Réservation de bande passante internet

La bande passante Internet est réservable par paliers de 100 Mbps. La capacité maximale disponible pour une passerelle est de 10 Gbps, potentiellement limitée par les caractéristiques techniques de votre passerelle.

La facturation s'effectue au 95e percentile sur la période de facturation, habituellement un mois. Vous pouvez donc occasionnellement profiter d'un burst au-delà de votre capacité réservée.

| Référence                                 | Unité    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Réseau - Bande passante internet réservée | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Remarque :*__
*Il n'y pas de __facturation volumétrique__ de type __'egress fees'. Vous ne payez que la réservation de bande passante.__*

## Disponibilité par offre

L'ensemble de ces fonctionnalités de connectivité Internet est disponible sur toutes les offres CloudTemple, garantissant une expérience homogène quel que soit le type de service utilisé.

| Offre | Connectivité Internet | Protection DDoS | Gestion RSIP | Migration préfixes |
|-------|----------------------|------------------|---------------|-------------------|
| Hébergement dédié | ✓ | ✓ | ✓ | ✓ |
| Hébergement mutualisé | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Cette approche unifiée garantit que tous nos clients bénéficient d'un accès Internet de qualité opérateur, avec une sécurité intégrée et des fonctionnalités avancées, indépendamment de leur choix technologique.
