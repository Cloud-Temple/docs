---
title: Concepts
---

<a id="définition-et-positionnement"></a>

## Présentation

La **Marketplace Cloud Temple** est une plateforme centralisée qui facilite l'accès et le déploiement de solutions cloud prêtes à l'emploi : images de machines virtuelles à déployer dans vos environnements Cloud Temple, services managés et solutions SaaS de partenaires.

La Marketplace Cloud Temple se positionne comme un levier de transformation numérique pour les entreprises recherchant des services fiables, avec une intégration simple et rapide.

Elle permet de :

- **Centraliser** l'accès aux solutions partenaires validées
- **Simplifier** le déploiement d'environnements cloud
- **Accélérer** la mise en œuvre de projets numériques
- **Garantir** la conformité et la sécurité des déploiements réalisés dans vos environnements Cloud Temple

Elle s'adresse aux équipes informatiques et DevOps qui construisent leurs environnements Cloud Temple, y compris dans les secteurs réglementés, ainsi qu'aux directions métiers à la recherche de solutions SaaS d'éditeurs partenaires.

## Avantages

| Avantage | Description |
|---|---|
| Accès centralisé | Images, services managés et solutions SaaS de partenaires réunis dans un même catalogue, consultable depuis la Console Cloud Temple. |
| Déploiement rapide | Les images de machines virtuelles se déploient directement dans vos environnements, en quelques minutes pour la plupart. |
| Solutions partenaires | Accès aux solutions d'éditeurs partenaires et mise en relation directe avec eux. |
| Intégration à la Console | La Marketplace s'utilise depuis l'interface de gestion habituelle, sans outil supplémentaire. |

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| Images de machines virtuelles | Images préconfigurées à déployer sur IaaS OpenSource et IaaS VMware : voir le [guide de démarrage](./quickstart.md). |
| Services managés | Services opérés pour vous, présentés dans le catalogue. |
| Solutions SaaS de partenaires | Solutions d'éditeurs partenaires, accessibles depuis le catalogue. |
| Mise en relation | Contact direct avec l'éditeur d'une solution depuis sa fiche. |
| Catalogue public | La liste à jour des solutions figure dans le [catalogue Marketplace du site Cloud Temple](https://www.cloud-temple.com/marketplace/). |

<a id="intégration-avec-lécosystème-cloud-temple"></a>

## Architecture

### Console Cloud Temple

La Marketplace est intégrée nativement à la console Cloud Temple, offrant :

- **Accès unifié** depuis l'interface de gestion habituelle
- **Déploiement direct** des images de machines virtuelles sur vos infrastructures existantes
- **Gestion centralisée** des machines virtuelles ainsi déployées

### Compatibilité avec les services

Les images de machines virtuelles de la Marketplace se déploient dans les environnements suivants :

- **IaaS OpenSource** : Déploiement sur infrastructure OpenIaaS
- **IaaS VMware** : Intégration avec l'environnement vSphere

## Régions et zones de disponibilité

Les images de machines virtuelles se déploient dans la région et les zones de disponibilité de votre environnement Cloud Temple (région FR1). Pour les services managés et les solutions SaaS, la localisation est propre à chaque offre et figure sur sa fiche.

<a id="types-de-solutions-disponibles"></a>

## Caractéristiques techniques

Le catalogue réunit des images de machines virtuelles, des services managés et des solutions SaaS d'éditeurs partenaires. Il s'enrichit en continu : les solutions présentées ici ne sont que des exemples, et la liste à jour figure dans le [catalogue Marketplace du site Cloud Temple](https://www.cloud-temple.com/marketplace/).

### Virtual Machine Images

Les images de machines virtuelles constituent le cœur actuel du produit Marketplace. Ces images pré-configurées permettent un déploiement rapide d'environnements standardisés.

**Caractéristiques :**

- Images validées et sécurisées
- Compatible avec les environnements OpenIaaS et VMware
- Déploiement en moins de 10 minutes
- Intégration native avec la console Cloud Temple

### Solutions partenaires

La Marketplace propose également l'accès à des solutions développées par nos partenaires éditeurs, couvrant différents domaines d'activité.

**Processus d'accès :**

- Consultation du catalogue depuis la console
- Mise en relation directe avec le partenaire
- Selon l'offre, déploiement dans vos environnements Cloud Temple ou accès au service SaaS opéré par l'éditeur

### Limites

- Le catalogue évolue en continu : les solutions décrites dans cette page sont des exemples.
- La mise à jour des solutions partenaires relève de leurs éditeurs, de même que les délais de réponse aux demandes de contact.

## Sécurité et conformité

### Hébergement et qualifications

L'hébergement et les qualifications dépendent du type de solution :

- **Images de machines virtuelles** : elles se déploient dans vos environnements Cloud Temple et relèvent de leurs qualifications.
- **Services managés et solutions SaaS** : leur hébergement et leurs certifications sont propres à chaque offre. Consultez les informations de sa fiche dans le [catalogue Marketplace du site](https://www.cloud-temple.com/marketplace/) et, pour toute précision, contactez l'éditeur.

### Validation des solutions

Les solutions proposées dans la Marketplace font l'objet d'une sélection rigoureuse garantissant :

- **Compatibilité** avec l'infrastructure Cloud Temple, pour les solutions qui s'y déploient
- **Sécurité** des images de machines virtuelles
- **Fiabilité** des partenaires éditeurs

## Responsabilités

Le support de la Marketplace elle-même (catalogue, déploiement des images) relève du support de la Console Cloud Temple. Chaque offre a ensuite ses propres conditions de support : celles du service pour une offre de Cloud Temple, celles de l'éditeur pour une solution partenaire, qui assure aussi ses mises à jour et ses délais de réponse. Les machines virtuelles déployées depuis la Marketplace sont des ressources de votre environnement IaaS : voir la [matrice de responsabilités (RACI) IaaS](../contractual/iaas/raci.md).

## Réversibilité

- **Images de machines virtuelles** : les machines déployées sont des ressources de votre environnement IaaS ; leur réversibilité suit celle de l'offre concernée, IaaS OpenSource ou IaaS VMware.
- **Solutions partenaires** : les conditions de sortie sont celles de l'éditeur, indiquées par celui-ci.

## Tarification

La Marketplace n'a pas de coût propre. Vous payez l'infrastructure sur laquelle vous déployez une image et, selon l'offre choisie, la licence ou le service, fourni par Cloud Temple ou par un partenaire, selon ses conditions tarifaires. Le détail de chaque offre figure dans le [catalogue Marketplace du site Cloud Temple](https://www.cloud-temple.com/marketplace/).
