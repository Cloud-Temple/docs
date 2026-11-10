---
title: Matrice de responsabilité Réseau
displayed_sidebar: docSidebar
---


Cette matrice **RACI** définit la répartition des responsabilités entre le client et Cloud Temple pour la connectivité réseau.

## Définition des différents rôles

Nous rappelons ici les différents rôles du RACI :

| Rôle | Description |
|---|---|
| (R) Réalise  | __R__éalise le processus |
| (A) Approuve | __A__pprouve la réalisation du processus |
| (C) Consulté | __C__onsulté pendant le processus |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |

## Connectivité réseau client

| Activité                                                                                             | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Souscrire à une connectivité réseau opérateur pour accéder à un datacenter physique Cloud Temple (1) | __RA__      | __CI__            |
| Gérer les incidents sur les liens réseaux opérateurs client                                          | __RA__      |                   |
| Gérer les problèmes sur les liens réseaux opérateurs client                                          | __RA__      | __I__             |
| Gérer les capacités sur les liens réseaux opérateurs client                                          | __RA__      | __CI__            |

*(1) Cloud Temple assume la responsabilité du réseau concernant son infrastructure backbone, ses points de collecte ainsi que
les points d'interconnexion datacenter, garantissant ainsi la connectivité entre ces points et son réseau backbone.
Dans l'offre d'hébergement en baie physique, Cloud Temple assume la responsabilité à partir de l'équipement situé en haut du rack, communément appelé "top of rack".*
