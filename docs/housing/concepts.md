---
title: Concepts
---

<a id="deux-options-sont-possibles"></a>

## Présentation

Le Housing Cloud Temple héberge vos équipements physiques (serveurs, appliances réseau, boîtiers opérateur) dans des datacenters sécurisés. Deux options sont possibles :

- **hébergement mutualisé au 'U'**, dans une baie partagée entre plusieurs clients ;
- **hébergement dédié par rack**, d'au minimum 42 'U', réservé à votre organisation.

L'offre comprend la connectivité réseau vers vos équipements et des services d'assistance en datacenter.

:::info
Le Housing est hébergé en zone non SecNumCloud.
:::

### Publics et cas d'usage

- **Équipements physiques legacy** : hébergement de serveurs qui ne peuvent pas être virtualisés.
- **Appliances réseau et de sécurité** : pare-feu et équipements réseau à proximité de vos ressources cloud.
- **Connexion opérateur** : réception d'un lien opérateur en Meet Me Room.
- **Transition vers le cloud** : hébergement temporaire pendant une migration progressive.
- **Contraintes réglementaires** : équipements qui doivent rester physiquement séparés.
- **Reprise d'activité** : site de secours pour des équipements critiques.

## Avantages

| Avantage                 | Description                                                                                                       |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| Sécurité physique        | Les équipements sont hébergés dans des datacenters surveillés 24/7, avec un contrôle d'accès strict.             |
| Liberté de configuration | Vous choisissez et configurez le matériel selon vos besoins.                                                      |
| Espace dédié             | Le rack dédié offre un espace privé, sans cohabitation avec d'autres clients.                                     |
| Accompagnement sur site  | Les techniciens datacenter interviennent pour votre compte, sans que vous ayez à vous déplacer.                   |
| Proximité du cloud       | Les équipements hébergés peuvent être connectés aux autres produits Cloud Temple.                                 |

## Fonctionnalités

| Fonctionnalité                   | Description                                                                         |
|----------------------------------|-------------------------------------------------------------------------------------|
| Hébergement mutualisé            | À partir de 1 'U' et 150 W, pour des appliances ou des serveurs.                    |
| Rack dédié                       | Rack de 42 'U' avec 3 kW d'énergie, extensible par paliers de 2 kW.                 |
| Alimentation redondante          | Deux chaînes électriques indépendantes.                                             |
| Connectivité réseau              | Ports cuivre ou fibre, jusqu'à 10 Gbps.                                             |
| Meet Me Room                     | Réception d'un lien privé opérateur en 1 Gbps ou 10 Gbps.                           |
| Services Hands & Eyes            | Interventions ponctuelles des techniciens datacenter.                               |
| Services d'ingénieur datacenter  | Rackage, câblage et gestion des connexions (patch management).                      |

### Commandes et demandes

Les commandes Housing prises en charge sont accessibles dans le module __Commandes (Order)__ de la Console Cloud Temple : réservation d'emplacement, installation et dérackage, accompagnement technique, smart hands et câblage/décâblage. Pour les opérations non prises en charge par la Console, contactez le support. La demande doit notamment préciser :

- le nom de votre organisation ;
- le nom d'un contact, avec son adresse e-mail et son numéro de téléphone, pour finaliser la configuration ;
- le nom du tenant ;
- le type d'hébergement souhaité (mutualisé au 'U' ou dédié au rack) ;
- la quantité souhaitée ;
- le type d'équipement et ses caractéristiques (taille, poids, consommation énergétique, dégagement thermique, etc.).

L'équipe support prend ensuite contact avec vous pour finaliser la demande.

<a id="services-hands--eyes"></a>

### Services Hands & Eyes

Les techniciens datacenter peuvent intervenir pour votre compte, notamment pour :

- accompagner un intervenant externe préalablement identifié ;
- constater l'état d'un équipement (état des LED, état de fonctionnement, etc.) ;
- prendre des photos d'un équipement préalablement identifié ;
- appuyer sur un contacteur ou redémarrer un équipement ;
- brancher un terminal d'accès pour une prise de contrôle à distance ;
- remplacer une connectique sans modification de câblage.

### Services d'ingénieur datacenter

Un ingénieur datacenter peut prendre en charge :

- le rackage, avec les équipements de protection et de levage adaptés ;
- le câblage, suivant le plan de câblage préalablement remis ;
- la modification de câblage ou le déplacement d'un équipement existant ;
- l'assistance à la connectivité réseau opérateur.

Toute intervention sur le câblage physique (réseau, alimentation, fibre optique) est réalisée exclusivement par les ingénieurs datacenter. La configuration logicielle de vos équipements reste sous votre contrôle.

| Service                               | Plage horaire                                  | Délai d'intervention | Délai en urgence |
|---------------------------------------|------------------------------------------------|----------------------|------------------|
| Hands & Eyes                          | Heures ouvrées (8 h – 19 h, lundi au vendredi) | 2 heures             | 30 minutes       |
| Hands & Eyes                          | Heures non ouvrées (nuit, week-end, fériés)    | 2 jours              | 2 heures         |
| Ingénieur datacenter                  | Heures ouvrées (8 h – 19 h, lundi au vendredi) | 2 jours              | 4 heures         |

:::note
- Toute demande passe par l'ouverture d'un dossier d'intervention dans la Console.
- En cas d'urgence, appelez l'astreinte après l'ouverture du dossier.
- Toute heure commencée est due.
:::

## Architecture

- **Infrastructure** : alimentation redondante (deux arrivées électriques indépendantes), refroidissement et climatisation contrôlés, sécurité physique multicouche.
- **Intégrations** : connexion directe aux produits Cloud Temple et Meet Me Room pour les connexions opérateur.

## Régions et zones de disponibilité

Le Housing est disponible dans la région FR1, sur trois zones de disponibilité. Les baies sont situées exclusivement en France.

## Caractéristiques techniques

### Hébergement mutualisé

L'hébergement mutualisé se fait dans un rack partagé entre différents clients. [La segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se fait au 'U' (unité de rack). Une unité de rack mesure 1,75 pouce (soit 44,45 mm) de haut. Les racks d'hébergement mutualisé disposent de deux chaînes électriques distinctes.

La masse maximale des équipements est de 25 kg par 'U'. Au-delà, il faut commander le nombre de 'U' permettant de soutenir la masse totale de l'équipement : par exemple, 2 'U' pour un équipement de 34 kg.

<a id="hébergement-dappliances-réseau-firewall-"></a>

#### Appliances (réseau, pare-feu…)

Chaque unité de rack peut disposer d'une ou de deux prises électriques de type C13, selon vos besoins. Chaque prise est limitée à 150 W sous 220 V. Pour un équipement de 1 500 W sur deux alimentations, il faut ainsi 1 500 W / 150 W = 10 'U', soit 5 'U' (750 W) par chaîne électrique.

Le refroidissement se fait de la face avant vers la face arrière de la baie, et __l'appliance prend sa connectivité réseau en face avant de la baie.__

#### Hébergement de serveurs

Les unités dédiées aux serveurs (2 'U', 400 W ou 800 W sur deux prises C19) sont adaptées à la dissipation thermique des serveurs et __apportent la connectivité réseau en face arrière__, ce qui simplifie la maintenance et optimise le refroidissement de la baie. __Elles sont obligatoires pour les serveurs.__

### Hébergement dédié

Le rack dédié est installé en zone d'hébergement mutualisé hors SecNumCloud.

| Paramètre            | Valeur                                                                  |
|----------------------|-------------------------------------------------------------------------|
| Dimensions           | 42 'U' minimum ; profondeur 1 200 mm, dont 1 000 mm utiles ; largeur 600 mm |
| Énergie              | 3 kW inclus sur deux chaînes électriques de 16 A, extensible par paliers de 2 kW |
| Masse maximale       | 1 000 kg par rack                                                       |
| Distribution         | Un PDU (unité de distribution d'énergie) monitoré par chaîne électrique |
| Équipement           | Refroidissement et portes sécurisées à l'avant et à l'arrière           |

<a id="connectivité-réseau-pour-lhébergement-physique"></a>

### Connectivité réseau

La connectivité réseau se souscrit en complément de l'hébergement, par type de port et bande passante souhaitée :

- cuivre 100 Mbps ou 1 Gbps ;
- fibre 1 Gbps ou 10 Gbps, via un module SFP fourni pour la connectivité côté Cloud Temple.

Une connectivité en Meet Me Room permet aussi de recevoir votre lien opérateur. Elle est nécessairement en fibre optique, en 1 Gbps ou 10 Gbps.

### Limites

- Masse maximale de 25 kg par 'U' en hébergement mutualisé, et de 1 000 kg par rack dédié.
- Puissance de 150 W par prise en hébergement mutualisé d'appliances.
- Profondeur utile de 1 000 mm dans un rack dédié.

## Sécurité et conformité

Le Housing est certifié HDS et ISO 27001. Il est hébergé en zone non SecNumCloud.

- **Contrôle d'accès physique** : accès strict, surveillance 24/7 et traçabilité complète des interventions.
- **Accès accompagné** : toute visite sur site se fait sur rendez-vous, accompagnée par un technicien datacenter.
- **Chiffrement** : le chiffrement des équipements hébergés relève de votre responsabilité. Le service assure la sécurité physique des locaux.

## Disponibilité du service

| Élément                 | Objectif de disponibilité, mesuré sur un mois |
|-------------------------|-----------------------------------------------|
| Alimentation électrique | 100 %                                         |
| Refroidissement         | 100 %                                         |

## Réversibilité

À la fin du service, vos équipements vous sont restitués :

| Opération                 | Livrable           | Délai     | Coût      |
|---------------------------|--------------------|-----------|-----------|
| Récupération du matériel  | Matériel client    | 15 jours  | Sans frais |
| Assistance au déménagement | Support logistique | Sur demande | Sur devis |

## Tarification

L'hébergement est souscrit avec un engagement minimum de 12 mois. Les tarifs et les durées d'engagement de chaque option sont publiés sur la page produit du site Cloud Temple :
[Housing — tarifs](https://www.cloud-temple.com/produits/housing-espace-dedie/).
