---
title: Questions fréquentes
sidebar_position: 4
---

# FAQ VM Instances

## Qu'est-ce qu'un flavor custom ?

Un **flavor custom** est un gabarit de ressources personnalisé pour une VM. Il
permet de définir le nombre de **vCPU** et la quantité de **RAM** selon les
besoins de la charge de travail.

Les limites et combinaisons réellement disponibles sont celles exposées dans
la Console Cloud Temple.

Pour plus de détails, consultez la page [Concepts](./concepts).

## Quelle est la différence entre un template et un flavor ?

Le **template** correspond à l'image utilisée pour déployer le système
d'exploitation ou l'appliance. Le **flavor** correspond aux ressources allouées
à la VM, notamment le nombre de vCPU et la quantité de RAM.

Lors du déploiement, le template et le flavor sont sélectionnés séparément.

## Peut-on modifier les ressources d'une VM existante ?

La documentation confirme que les paramètres **CPU** et **RAM** peuvent être
modifiés lorsque la VM est éteinte.

Les conditions exactes applicables au passage d'un flavor prédéfini à un flavor
custom, ainsi qu'au changement de famille d'instance, doivent être vérifiées
dans la Console Cloud Temple avant tout engagement.

Voir le [guide de démarrage](./quickstart).

## La réplication automatique d'une VM entre zones de disponibilité est-elle incluse ?

Non. La réplication de VM n'est pas incluse par défaut dans VM Instances. Son
étude est prévue pour le second semestre 2026.

Le choix d'une zone de disponibilité au déploiement ne constitue donc pas une
réplication automatique de la VM.
