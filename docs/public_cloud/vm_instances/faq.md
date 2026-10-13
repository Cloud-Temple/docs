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

## Peut-on migrer une VM avec un OS qui n'est pas disponible dans la Marketplace ?

Oui, une migration peut être étudiée par restauration **Veeam en mode Bare Metal Recovery**. Cette procédure permet notamment de traiter un OS qui n'est pas proposé dans le catalogue standard.

Pour une VM restaurée depuis un environnement client, le support porte sur l'infrastructure VM. Le bon fonctionnement de l'OS invité, des applications et des agents nécessaires n'est pas garanti si ceux-ci ne sont pas installés ou configurés correctement. Le support de l'OS invité est alors limité.

Une seconde méthode, par import de disques **VHD/VMDK**, est en développement et ciblée pour le **quatrième trimestre 2026**. Elle permettra de créer une VM à partir d'une image existante, mais n'est pas encore disponible.

## Le disque système est-il inclus gratuitement ?

Non. Un disque système est créé automatiquement avec chaque VM pour héberger l'OS, mais il s'agit d'une ressource de stockage facturée au **Go** selon le catalogue tarifaire VM Instances. Les ressources vCPU, RAM et stockage sont facturées séparément. Les volumes additionnels et les sauvegardes activées sont également facturés selon le catalogue applicable.

## Stormshield et FortiVM sont-ils compatibles avec VM Instances ?

Oui, les appliances virtuelles Stormshield et FortiVM sont compatibles avec la **famille Enterprise**, sous réserve du respect des prérequis techniques et du périmètre de support applicable.

## La réplication automatique d'une VM entre zones de disponibilité est-elle incluse ?

Non. La réplication de VM n'est pas incluse par défaut dans VM Instances. Son
étude est prévue pour le second semestre 2026.

Le choix d'une zone de disponibilité au déploiement ne constitue donc pas une
réplication automatique de la VM.
