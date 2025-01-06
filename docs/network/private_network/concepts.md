---
title: Concepts
---

### La technologie VPLS
Le réseau global Cloud Temple utilise la technologie __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ est un VPN de couche 2 point-à-multipoint basé sur Ethernet. Il permet de connecter des sites géographiquement 
dispersés les uns aux autres à travers un réseau MPLS. Pour les clients, tous les sites semblent être dans le même 
LAN Ethernet, même si le trafic est transporté par le réseau Cloud Temple.

__VPLS__, dans son implémentation et sa configuration, a beaucoup en commun avec un VPN de couche 2. Dans VPLS, un paquet qui provient 
d'un réseau client est d'abord envoyé à un dispositif client (CE) (par exemple, un routeur ou un commutateur Ethernet).
Il est ensuite envoyé à un routeur de bord de fournisseur (PE) au sein du réseau du fournisseur de services. 
Le paquet traverse le réseau du fournisseur de services sur un chemin à commutation d'étiquettes MPLS (LSP). 
Il arrive au routeur PE de sortie, qui transfère ensuite le trafic vers le dispositif CE sur le site client de destination.
La différence réside dans le fait que, pour __VPLS__, les paquets peuvent traverser le réseau du fournisseur de 
services de manière point-à-multipoint, ce qui signifie qu'un paquet provenant d'un dispositif CE peut être 
diffusé à tous les routeurs PE participant à une instance de routage __VPLS__. 

Le circuit __VPLS__ d'un client peut être __étendu entre toutes les zones de disponibilité d'une région__.

Le protocole __VPLS__ est __totalement transparent__ pour les clients qui ne voient que les différents VLANs sur leurs zones de disponibilité.

### Le réseau dans l'offre de virtualisation VMware

Les réseaux virtuels (vlan) de l'offre de virtualisation VMware sont des réseaux de types __'DVPortgroup'__. Un __'dvPortGroup'__, 
ou __'Distributed Virtual Port Group'__, est un concept spécifique à VMware. Un dvPortGroup est une entité qui 
regroupe plusieurs ports virtuels (vPorts) dans un environnement de réseau virtuel distribué pour faciliter leur utilisation.

Localisée au sein d'un __[Tenant](../../../console/iam/concepts/#tenant)__, ils peuvent être étendus entre les zones de disponibilités 
vous permettant ainsi de construire des architectures "actif / actif" avec quorum.

La bande passante maximale utilisable dépend principalement du modèle de lame utilisé (10Gbps convergés ou 25 Gbps convergés) et des capacités des machines virtuelles.

Il est possible d'attendre une bande passante de 10Gbps.

Les configurations disponibles sur la console Cloud Temple dans le cadre de l'offre de virtualisation VMware sont les suivantes :

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* : 

- *Le choix de l'adressage IP au sein de ces réseaux est __libre.__*
- *__SRV-IO__ n'est pas disponible dans l'offre réseau associée à la virtualisation VMware.*
- *__QinQ__ est supporté sur l'architecture Cloud Temple. QinQ, également connu sous le nom de "VLAN stacking" ou de 802.1ad, est 
un protocole réseau qui permet l'encapsulation de plusieurs étiquettes VLAN (Virtual Local Area Network) dans une seule trame Ethernet.*


## Réseaux privés régionaux

La commande des réseaux privés au sein d'une région se réalise directement dans la console Cloud Temple. 

__*Remarque :*__ *Il n'est pas possible de choisir l'ID de vlan 802.1q.*

| Référence                                 | Unité  | SKU                          | 
|-------------------------------------------|--------|------------------------------|
| RESEAU - Région FR1 - VLAN privé inter AZ | 1 vlan | csp:(region):network:vlan:v1 |


## Partage de réseau entre tenants

Par défaut, __les réseaux sont uniquement disponibles au sein d'un tenant__. Vous pouvez choisir de __partager un réseau entre plusieurs tenants__ pour des raisons techniques ou des raisons de connectivité.
Il est ainsi possible de partager un réseau entre vos __[Tenant](../../../console/iam/concepts/#tenant)__ au sein d'une même organisation.

## Connectivité privé externe

L'offre de réseau Cloud Temple permet aux clients de connecter leurs propres infrastructures IPSEC, MPLS ou Fibre à leurs tenants.

Cloud Temple propose à cet effet : 

- La possibilité d'héberger un équipement réseau en zone commune (non qualifiée Secnumcloud),
- Des ports de connectivité 1Gbps ou 10Gbps.

La création d'une connectivité externe est réalisée par une demande de service indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenant
    La zone de disponibilité ou à défaut le site physique souhaité pour cette connectivité
    Le nombre et pour chacun, le type de port de connectivité attendu (fibre, cuivre, 1Gbps, 10Gbps, ...)
    Le réseau de votre tenant devant accueillir cette connectivité
    Le nombre de 'U' eventuelle d'hébergement souhaité

## Circuits dédiés

Cloud Temple offre la possibilité de bénéficier d'une fibre dédiée entre deux infrastructures d'hébergement dédié (rack).

Ce service est typiquement utilisé lorsque vous souhaitez héberger 2 infrastructures non-cloud (par exemple deux IBM AS/400), dans deux racks distincts sur deux datacenters physiques distincts.
Vous pouvez souhaiter relier directement ces deux racks en privé sans passer par l'infrastructure backbone Cloud Temple et n'utiliser que le backbone de transmission optique.

Dans ce contexte, nous pouvons livrer une connectivité fibre optique entre vos deux racks. La livraison est systématiquement sur deux chemins optiques diversifiés.

Voici les différents types de livraison possibles :

- Ethernet fibre 1Gbps
- Ethernet fibre 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La création d'une connectivité dédiée est réalisée par une demande de service indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenants
    Les identifiants des deux rack dédiés 
    La bande passante souhaitée
    Le réseau de votre tenant devant accueillir cette connectivité

Vous serez contacté par le support pour affiner votre demande.

| Référence                                                                                | Unité     | SKU                              | Engagement |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RESEAU - Lien dédié inter AZ 1G ethernet (deux liens via deux chemins diversifiés)       | 1 forfait | csp:(region):network:epl:1g:v1   | 36 mois    |
| RESEAU - Lien dédié inter AZ 10G ethernet (deux liens via deux chemins diversifiés)      | 1 forfait | csp:(region):network:epl:10g:v1  | 36 mois    |
| RESEAU - Lien dédié inter AZ 8G fiber-channel (deux liens via deux chemins diversifiés)  | 1 forfait | csp:(region):network:fcpl:8g:v1  | 36 mois    |
| RESEAU - Lien dédié inter AZ 16G fiber-channel (deux liens via deux chemins diversifiés) | 1 forfait | csp:(region):network:fcpl:16g:v1 | 36 mois    |
