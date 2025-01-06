---
title: Concepts
---

## Deux options sont possibles : 

- __hébergement physique au 'U'__ en baie mutualisée et espace mutualisé,
- __hébergement dédié par rack__ d'au minimum 42 'U' en espace mutualisé.

La demande d'hébergement physique est réalisée par __une demande de service__ indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenant
    le type d'hébergement souhaité (mutualisé au 'U' ou dédié au rack)
    La quantité souhaité
    Le type d'équipement et ses caractéristiques (taille, poid, consommation energetique, dégagement thermique, ...)

L'équipe support Cloud Temple prendra contact avec vous pour finaliser la demande.

## Hébergement mutualisé

### Hébergement d'appliances (réseau, firewall, ...)

L'hébergement mutualisé se fait dans un rack partagé entre différents clients Cloud Temple. [La segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se fait au 'U' (unité de rack).
Une unité de rack mesure 1,75 pouce (soit 44,45 mm) de haut. Les racks d'hébergement mutualisés disposent de deux chaines électriques distinctes.

La masse maximale des équipements pour chaque unité de 'U' est de 25Kg. Au dela, il est nécessaire de commander le nombre de 'U' permettant de soutenir la masse totale de votre équipement.

Par exemple, pour un équipement de 34 Kg, il est nécessaire de souscrire à 2 unités de rack.

Il est possible pour chaque unité de rack de demander à bénéficier d'une ou deux prises électriques type C13 en fonction de vos besoins.

Chaque prise électrique est limité à 150W sous 220v pour chaque 'U'. 

Si vous souhaitez pour votre équipement bénéficier d'une puissance de 1500W, sur deux alimentations, il est nécessaire de demander 

1500 W / 150 W = 10 'U', soit 5 'U' (ou 750 W) par chaine électrique.

La connectivité réseau est à souscrire en parallèle par type de port attendu et bande passante souhaitée, voici les options possibles par port réseau :

- Cuivre 100MBps/1Gbps,
- Fibre 1Gbps/10Gbps via un module SFP fournit pour la connectivité coté Cloud Temple.

Pour ces unités d'oeuvre, le refroidissement se fait nécessairement depuis la face avant de la baie, vers la face arrière, et **l'appliance prend sa connectivité réseau face avant de la baie.**

__*Remarque :*__ *l'engagement minimum est de 12 mois.*

| Référence                                          | Unité | SKU                                    | Engagement |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| HÉBERGEMENT EN BAIE - 1 U Mutualisé - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 mois    |
| HÉBERGEMENT EN BAIE - 1 U Mutualisé - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 mois    |

### Hébergement de serveurs

Les unités d'oeuvres **'Serveurs'** sont prévues pour s'adapter à la dissipation thermique des serveurs et **apporte de la connectivité réseau en face arrière**, simplifiant les opérations de maintenance et optimisant ainsi le refroidissement de la baie. 

**Elle sont obligatoires pour les serveurs.**

| Référence                                                    | Unité | SKU                                        | Engagement |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| HEBERGEMENT EN BAIE - 1 U Mutualisé - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 mois    |
| HEBERGEMENT EN BAIE - 1 U Mutualisé - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 mois    |


## Hébergement dédié

L'hébergement en rack dédié se fait en zone d'hébergement mutualisé hors secnumcloud. Le rack d'hébergement dédié est d'une dimension d'au minimum 42 'U' ou 42 unités de rack.
La profondeur est de 1200 millimètres dont 1000 millimètres utilisables par les équipements. La largeur est de 600 millimètres.

Il est livré avec le cooling nécessaire, les portes sécurisées avant et arrière et 3 Kw d'énergie sur 2 chaines électriques de 16 ampères chacune.

Il est possible de demande des paliers d'énergie supplémentaires par 2Kw. __La masse maximum des équipements intégrable dans le rack dédié est de 1000kg__.

La baie est équipée de 'PDU' (unité de distribution d'énergie) adaptés à la puissance souscrite et monitorés. Il y a un 'PDU' par chaine électrique.

| Référence                                                    | Unité      | SKU                                        | Engagement |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| HÉBERGEMENT EN BAIE - Rack 42 U Dédié incluant 3Kw d'énergie | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 mois    |
| ÉNERGIE - 2 Kw complémentaire                                | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 mois    |

### Connectivité réseau pour l'hébergement physique

La connectivité réseau est à souscrire en complément de l'hébergement physique par type de port attendu et bande passante souhaitée, voici les options possibles par port réseau :

- Cuivre 1Gbps,
- Fibre 1Gbps/10Gbps via un module SFP fournit pour la connectivité coté Cloud Temple.

Il est aussi possible de demander une connectivité en zone meet me room des différents datacenter pour recevoir votre connectivité opérateur.
Cette connectivité est nécessairement en fibre optique sur des débits de 1Gbps ou 10GBps.

| Référence                                                              | Unité     | SKU                                    | Engagement |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RESEAU - 1 port - 1 Gbps - fibre ou cuivre                             | 1 port    | csp:(region):hosting:shared:port1g:v1  | 36 mois    |
| RESEAU - 1 port - 10 Gbps - fibre                                      | 1 port    | csp:(region):hosting:shared:port10g:v1 | 36 mois    |
| RESEAU - Connexion lien privé en meet me room d'une AZ - 1 port 1Gbps  | 1 forfait | csp:(region):hosting:mmr:v1:1g         | 36 mois    |
| RESEAU - Connexion lien privé en meet me room d'une AZ - 1 port 10Gbps | 1 forfait | csp:(region):hosting:mmr:v1:10g        | 36 mois    |

### Services 'Hands & Eyes'

En complément des services d'hébergement physique et de connectivité réseau, il est possible de demander des services professionnels d'assistance pour votre hébergement physique.

Ils sont opérés par les techniciens datacenter ou par les ingénieurs Cloud Temple spécialisés en datacenter.

Voici les principales unités d'œuvres 'Hands & Eyes' disponibles. Elles visent à traiter les sujets suivants : 

- Accompagnement d'un intervenant externe préalablement identifié,
- Constaté un statut sur un équipement (état des LEDS, état de fonctionnement, ...),
- Prendre des photos d'un équipement client préalablement identifié,
- Appuyer sur un contacteur,
- Redémarrer l'équipement,
- Brancher un terminal d'accès pour prise de contrôle à distance,
- remplacer une connectique sans modification de câblage.

| Référence                                                                               | Unité   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi)                 | 1 heure | csp:(region):hosting:ho:std:v1   | 2 heures   |
| Hand's & Eyes datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi) - URGENT        | 1 heure | csp:(region):hosting:ho:fast:v1  | 30 minutes |
| Hand's & Eyes datacenter - Heures non ouvrées (nuit, week end et jours fériés)          | 1 heure | csp:(region):hosting:hno:std:v1  | 2 jours    |
| Hand's & Eyes datacenter - Heures non ouvrées (nuit, week end et jours fériés) - URGENT | 1 heure | csp:(region):hosting:hno:fast:v1 | 2 heures   |

Vous pouvez aussi bénéficier d'un ingénieur datacenter Cloud Temple pour traiter les sujets suivants :

- Rackage (avec les équipements de protection et de levage adaptés),
- Câblage (suivant le plan de câblage préalablement remis),
- Modification de câblage ou déplacement d'un équipement existant,
- Assistance à la connectivité réseau opérateur.

| Référence                                                                    | Unité  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingénieur Datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi)          | 1 acte | csp:(region):hosting:ho:std:v1  | 2 jours  |
| Ingénieur Datacenter - Heures ouvrées (8h - 19h; Lundi au vendredi) - URGENT | 1 acte | csp:(region):hosting:ho:fast:v1 | 4 heures |

__Nota :__

- *Toute demande doit passer par l'ouverture d'un dossier d'intervention dans la console Cloud Temple*,
- *En cas de demande urgente, appeler l'astreinte après ouverture du dossier d'intervention dans la console Cloud temple*,
- *Toute heure commencée est due.*
