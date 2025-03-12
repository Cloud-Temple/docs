---
title: Concepts - Zones de disponibilité
---

## Zones de disponibilité 

Chaque site physique au sein d'une région dispose d'une ou plusieurs salles privatives pour nos infrastructures. Ces salles sont à l'usage exclusif de Cloud Temple.

__Chaque salle physique correspond à une zone de disponibilité (AZ / Availability Zone)__ et est totalement autonome d'un point de vue électricité, cooling, calcul, stockage et réseau.
Le choix d'une zone de disponibilité implique donc le choix d'un site physique et d'une région.

La console Shiva vous propose automatiquement des zones de disponibilités sur des sites physiques distincts de manière à répartir votre infrastructure sur le maximum de site physique.

*__Nota : Si vous souhaitez un paramétrage spécifique pour un contexte particulier (plusieurs AZ sur le même site physique), il est nécessaire de faire une demande de support.__*


| Référence de commande                                        | Unité           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Activation d'une zone de disponibilité | 1 AZ par tenant | csp:*(REGION)*:iaas:az:v1 |
