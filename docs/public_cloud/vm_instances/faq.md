---
title: Questions fréquentes
sidebar_position: 4
---

# FAQ VM Instances

## Que reste-t-il facturé lorsque la VM est éteinte ?

L'arrêt de la VM **suspend la facturation des vCPU et de la RAM**. Il ne
supprime ni la VM ni ses volumes persistants : l'OS, les logiciels et les
données stockés sur ces volumes sont conservés.

Les autres ressources et abonnements conservés restent facturés selon leurs
règles : notamment le disque système, les volumes additionnels, le stockage
de sauvegarde conservé, les services réseau souscrits, le tenant et le support.
La suspension de la facturation du compute ne décrit pas le mécanisme technique
de libération ou de réservation des ressources physiques.

## La capacité est-elle garantie au redémarrage ou à la création ?

Pour une instance **non réservée**, le redémarrage après un arrêt et la création
d'une nouvelle VM sont soumis à la capacité disponible. Il n'y a pas
d'engagement de retrouver une taille donnée, même si cette taille avait été
utilisée lors d'une précédente campagne. Détruire puis recréer la VM ne
constitue pas une réservation de capacité.

Pour obtenir un engagement de capacité, il faut souscrire une **instance
réservée**, dans le périmètre et selon les conditions de la réservation.
La tarification horaire et le caractère dédié des vCPU Performance ne
constituent pas, à eux seuls, une réservation.

## Faut-il souscrire une activation de zone de disponibilité pour VMI ?

Non. La souscription d'une activation AZ facturée concerne l'offre **IaaS** ;
elle n'est pas nécessaire pour utiliser **VM Instances**. Vous choisissez
toutefois l'AZ d'hébergement lors du déploiement de la VM.

Le tenant est un abonnement récurrent. L'activation AZ de l'offre IaaS est
également récurrente ; le choix d'une AZ pour une VMI ne déclenche pas cette
souscription IaaS.

## Quel support faut-il pour un client direct ou accompagné par un partenaire ?

Un **client direct** doit souscrire au **Support Standard au minimum**,
même s'il administre lui-même l'OS et les applications.

Le **Support Basic** est destiné aux clients accompagnés par un **partenaire
formé**. Il ne constitue pas une alternative au Support Standard pour un
client direct. Le périmètre du partenaire et les conditions du support sont
à définir dans la souscription.

## Peut-on administrer une instance en SSH sans Bastion ?

Oui. Une instance exposée sur une **IP publique** peut être jointe en SSH si
le service SSH est configuré dans l'OS et si les règles réseau autorisent
le flux. Le client est responsable du filtrage, notamment de la restriction
aux IP sources autorisées, et de la configuration de l'accès SSH.

Le Bastion n'est pas un prérequis systématique de VM Instances. Il fournit
une autre voie d'administration depuis la console, sans exposition directe
de la VM à Internet. Voir les [concepts réseau](./concepts#réseau) et les
[concepts Bastion](../../bastion/concepts).

## Comment réaliser un test avant de choisir la configuration ?

Vous pouvez tester une configuration VM Instances en **libre-service**, sur
vos propres logiciels et jeux de données, avant de choisir votre dimensionnement.

Le **compute est facturé à l’heure, sans engagement mensuel**. Cette
souplesse facilite les essais courts : pour un test de quelques heures, la
part compute est calculée sur ces heures, au tarif habituel du service. Toute heure de compute entamée est due. À
configuration identique, vous adaptez ainsi le budget de calcul à la durée de
votre essai, de quelques heures à plusieurs jours.

Les autres ressources et abonnements nécessaires au test, notamment le stockage,
le réseau, le tenant et le support, restent soumis à leurs propres conditions
tarifaires. Le coût total de l'essai ne se limite donc pas au compute.

Comparez le temps de calcul et le pic de RAM sur votre jeu de données, puis
arrêtez la VM à la fin de l'essai pour suspendre la facturation CPU/RAM. Les
volumes persistants permettent de conserver votre environnement pour la suite.

## Une lame PERF3 souscrite au mois est-elle une VMI ?

Non. Une lame PERF3 dédiée de l'offre **IaaS Open Source** relève d'une
souscription IaaS distincte de VM Instances. L'engagement d'un mois de cette
référence ne doit pas être confondu avec la consommation horaire de VMI.
Consultez les [concepts IaaS Open Source](../../iaas_opensource/concepts)
et le catalogue tarifaire applicable avant de comparer les offres.

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
