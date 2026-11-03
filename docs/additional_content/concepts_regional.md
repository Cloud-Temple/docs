---
title: Régions et zones de disponibilité
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

L'infrastructure Cloud Temple est conçue pour assurer la continuité d'activité de vos applications et de vos plateformes. Elle est organisée en régions, chacune composée de plusieurs zones de disponibilité.

## Régions

Au sein d'une région, vous bénéficiez d'une continuité réseau de niveau 2. Il est ainsi possible de définir, dans une même région, une architecture technique répartie sur trois sites physiques pour mettre en place une plateforme en haute disponibilité avec quorum.

Cloud Temple dispose de la région **FR1** (Paris).

### Région FR1

La région FR1 repose sur trois sites physiques en région parisienne :

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Chaque site est à plus de 30 km à vol d'oiseau des autres ; il faut compter en moyenne 80 km de distance optique entre deux sites. La latence réseau entre zones de disponibilité d'une même région a pour objectif moins de 5 ms.

## Zones de disponibilité

Chaque site physique d'une région dispose d'une ou plusieurs salles privatives pour nos infrastructures. Ces salles sont à l'usage exclusif de Cloud Temple.

__Chaque salle physique correspond à une zone de disponibilité (AZ, *Availability Zone*)__, totalement autonome en électricité, refroidissement, calcul, stockage et réseau. Choisir une zone de disponibilité revient donc à choisir un site physique et une région.

La Console vous propose automatiquement des zones de disponibilité sur des sites physiques distincts, afin de répartir votre infrastructure sur le plus grand nombre de sites physiques.

Si vous avez besoin d'un paramétrage particulier (plusieurs AZ sur le même site physique), faites une demande au support.
