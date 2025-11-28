---
title: Déploiement depuis un template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

Ce guide va vous permettre de déployer en moins de 5 minutes vos premières instances sur le Cloud de Confiance.

## __Prérequis__

1. Avoir souscrit à l'offre Cloud Temple (souscription à l'offre IaaS).
2. Avoir les permissions activées pour le pilote des objets __'IaaS'__

## Déployer une machine virtuelle depuis un Template

Ce guide vous montre étape par étape comment déployer une machine virtuelle depuis un Template dans la Console.

Sur le portail Console, rendez-vous dans l'onglet "Cloud de confiance", puis "Catalogues". Avant de pouvoir déployer un Template, celui-ci doit être chargé dans votre catalogue privé, dans l'onglet "Mon catalogue".

Pour cela, vous avez deux possibilités : importer votre propre Template directement dans votre catalogue privé ou bien importer un modèle depuis le catalogue public de Cloud Temple.

### Importer un Template personnel dans le catalogue privé

Dans l'onglet "Mon catalogue", cliquez sur "Publier des fichiers".

<img src={shivaCatalogsCharger} />

Suivez ensuite les étapes de publication du Template, en renseignant son nom et une description, et en choisissant son emplacement dans une librairie.

Le Template doit ensuite apparaître dans votre catalogue privé.

### Importer un Template depuis le catalogue public

Dans l'onglet "Catalogue public", cliquez sur le bouton "Ajouter à mon catalogue" du Template de votre choix pour l'importer dans votre catalogue privé. Celui-ci doit ensuite apparaître dans votre catalogue privé.
<img src={shivaCatalogsAjout} />

### Déployer le Template

Une fois le Template importé dans votre catalogue privé, vous pouvez le déployer en cliquant sur "Déployer".

<img src={shivaCatalogsDeployer} />

Suivez ensuite les différentes étapes de déploiement de la ressource, en sélectionnant son emplacement physique (datacenter, cluster de calcul, datastore) et autres paramètres de configuration optionnels.
