---
title: Matrice de responsabilité IaaS
---

Voici le modèle **RACI** définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation des infrastructures IaaS de Cloud Temple.

## Définition des différents rôles

Nous rappelons ici les différents rôles du RACI :

| Rôle         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Réalise  | __R__éalise le processus                                                              |
| (A) Approuve | __A__pprouve la réalisation du processus                                              |
| (C) Consulte | __C__onsulté pendant le processus                                                     |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |

## Définition votre besoin

| Activité                                                                                       | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Définir l'architecture globale de votre plateforme Cloud Temple                                | **RA**      | **CI**            |
| Définir le nombre de tenants et le nombre de zone de disponibilité pour chaque tenant          | **RA**      | **CI**            |
| Définir votre stratégie globale de reprise ou de continuité d'activité                         | **RA**      | **CI**            |
| Dimensionner correctement votre plateforme Cloud Temple (calcul, stockage, réseau, backup,...) | **RA**      | **CI**            |
| Souscrire aux services avec les informations nécessaires                                       | **RA**      | **I**             |

## Mise en œuvre initiale de vos tenants Cloud Temple

| Activité                                                                                                     | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la mise en oeuvre des **datacenters physiques**                                                      |             | **RA**            |
| Assurer la mise en oeuvre des infrastructures **calcul**                                                     | **I**       | **RA**            |
| Assurer la mise en oeuvre des infrastructures **stockage**                                                   | **I**       | **RA**            |
| Assurer la mise en oeuvre de la connectivité au **réseau backbone(1)**                                       | **I**       | **RA**            |
| Acquérir et maintenir les licences logiciels essentiels pour le fonctionnement de la plateforme Cloud Temple |             | **RA**            |
| Implémenter la configuration de base de vos tenants Cloud Temple                                             | **CI**      | **RA**            |
| Implémenter la configuration initiale pour le service de sauvegarde                                          | **CI**      | **RA**            |
| *S'ils sont souscrit :* implémenter la configuration réseau initiale pour les services Internet et Firewall  | **CI**      | **RA**            |
| Offrir l'assistance requise pour la prise en main de vos environnements Cloud Temple                         | **I**       | **RA**            |
| Effectuer les ajustements de configuration finaux du service après sa livraison                              | **RA**      | **C**             |
| Configurer un référentiel d'authentification externe pour la console Cloud Temple                            | **RA**      | **C**             |
| Créer les utilisateurs de chaque tenant dans la console Cloud Temple et affecter les droits                  | **RA**      |                   |
| Valider la conformité de la plateforme livrée avec le référentiel SecNumCloud                                | **I**       | **RA**            |
| Valider la conformité de la plateforme livrée avec les spécifications requises                               | **RA**      | **CI**            |

*(1) Le réseau backbone constitue l'infrastructure centrale de Cloud Temple, offrant une colonne vertébrale sur laquelle
reposent les réseaux clients spécifiques, lesquels sont intégrés et pris en charge par cette infrastructure principale.*

## Intégrer votre système d'information dans vos environnements Cloud Temple

| Activité                                                                                                                      | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Créer, installer, mettre à jour vos machines virtuelles                                                                       | **RA**      |                   |
| Installer et configurer les logiciels et middlewares sur vos machines virtuelles                                              | **RA**      |                   |
| Acheter et détenir les licences et les droits d'utilisation pour les systèmes d'exploitation de vos machines virtuelles  | **RA**      |                   |
| Configurer le réseau pour chacune vos machines virtuelles                                                                     | **RA**      |                   |
| S'assurer que chaque machine virtuelle est associée à un plan de sauvegarde cohérent                                          | **RA**      | **C**             |
| S'assurer que chaque machine virtuelle est associée à un plan de reprise d'activité ou de continuité d'activité cohérent | **RA**      | **C**             |
| Implémenter une stratégie de protection antivirale sur vos machines virtuelles                                                | **RA**      |                   |
| Mettre en place une solution de métrologie et de surveillance sur vos machines virtuelles                                     | **RA**      |                   |
| Définir la politique de TAG de vos machines virtuelles                                                                        | **RA**      |                   |

## Opérations récurrentes

### Gestion des accès et des identités

| Activité                                                                                                                             | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer l'accessibilité du service Console Cloud Temple et de l'API associée                                                         |             | **RA**            |
| Assurer l'accessibilité du système d'information déployé sur vos machines virtuelles                                                 | **RA**      |                   |
| Gérer les habilitations physiques et logiques des équipes Cloud Temple aux infrastructures SecNumCloud.                              |             | **RA**            |
| Administrer les accès et la politique de sécurité associée liés à l'interface de la console Cloud Temple et à son API                | **RA**      |                   |
| Administrer les accès et la politique de sécurité associée au système d'information hébergé au sein de vos tenants Cloud Temple | **RA**      |                   |

### maintien en condition opérationnelle et en condition de sécurité

Les activités visant à maintenir en condition opérationnelle et sécuritaire pour les infrastructures et services
proposés par Cloud Temple, dans le cadre de son offre IaaS, sont réalisées dans l'objectif de conformité à la qualification SecNumCloud.

| Activité                                                                                                          | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle des infrastructures **datacenters physiques**                     | **I**       | **RA**            |
| Assurer le maintien en condition de sécurité des infrastructures **datacenters physiques**                        | **I**       | **RA**            |
| Assurer le maintien en condition opérationnelle des infrastructures **calcul**                                    | **I**       | **RA**            |
| Assurer le maintien en condition de sécurité des infrastructures **calcul (2)**                                   | **RA**      | **CI**            |
| Assurer le maintien en condition opérationnelle des infrastructures **stockage**                                  | **I**       | **RA**            |
| Assurer le maintien en condition de sécurité des infrastructures **stockage**                                     | **I**       | **RA**            |
| Assurer le maintien en condition opérationnelle des infrastructures **réseaux backbone**                          | **I**       | **RA**            |
| Assurer le maintien en condition de sécurité des infrastructures **réseaux backbone**                             | **I**       | **RA**            |
| Assurer le maintien en condition opérationnelle des machines virtuelles déployées dans les tenants client **(3)** | **RA**      |                   |
| Assurer le maintien en condition de sécurité des machines virtuelles déployées dans les tenants client **(3)**    | **RA**      |                   |
| Assurer le maintien en condition opérationnelle des middleswares déployées dans les tenants client                | **RA**      |                   |
| Assurer le maintien en condition de sécurité des middleswares déployées dans les tenants client                   | **RA**      |                   |

*(2) Cloud Temple fournit régulièrement les versions les plus récentes du système d'exploitation pour vos hyperviseurs.
Néanmoins, étant donné que Cloud Temple n'est pas informé des spécificités de vos environnements de production et des exigences
liées à vos charges de travail, **la décision de procéder à la mise à jour du système d'exploitation de vos hyperviseurs,
entraînant ainsi un redémarrage, vous revient**. Cette opération peut être réalisée à travers la console Cloud Temple ou via l'API.
Des services professionnels sont disponibles si vous souhaitez que Cloud Temple prenne en charge certaines opérations.*

*(3) Cloud Temple propose des packs de licences pour pare-feu (Fortinet, Stormshield) et répartiteurs de charge (HAProxy), et
travaille en collaboration avec vos équipes pour la configuration initiale lors de la phase de mise en œuvre. Toutefois,
la responsabilité du maintien en condition opérationnelle et sécuritaire repose sur vous durant la phase d'exploitation
courante. Des services professionnels sont disponibles si vous souhaitez que Cloud Temple prenne en charge certaines opérations.*

### Gestion des changements, des incidents, des problèmes et des capacités

| Activité                                                                                                              | Rôle Client | Rôle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Gérer les incidents sur les infrastructures **datacenters physiques**                                                 | **I**       | **RA**            |
| Gérer les problèmes sur les infrastructures **datacenters physiques**                                                 |             | **RA**            |
| Gérer les capacités sur les infrastructures **datacenters physiques**                                                 |             | **RA**            |
| Gérer les incidents sur les infrastructures **calcul**                                                                | **I**       | **RA**            |
| Gérer les problèmes sur les infrastructures **calcul**                                                                |             | **RA**            |
| Gérer les capacités sur les infrastructures **calcul**                                                                | **RA**      | **CI**            |
| Gérer les incidents sur les infrastructures **stockage**                                                              | **I**       | **RA**            |
| Gérer les problèmes sur les infrastructures **stockage**                                                              |             | **RA**            |
| Gérer les capacités sur les infrastructures **stockage**                                                              | **RA**      | **CI**            |
| Gérer les incidents sur les infrastructures **réseau backbone**                                                       | **I**       | **RA**            |
| Gérer les problèmes sur les infrastructures **réseau backbone**                                                       |             | **RA**            |
| Gérer les capacités sur les infrastructures **réseau backbone**                                                       |             | **RA**            |
| Mettre en place une nouvelle machine virtuelle ou créer un nouvel environnement applicatif au sein d'un tenant client | **RA**      |                   |
| Modifier la configuration des machines virtuelles déployées                                                           | **RA**      |                   |
| Supprimer une machine virtuelle déployée                                                                              | **RA**      |                   |
| Prendre la décision d'ajouter, de modifier ou de retirer des ressources sur la plateforme Cloud Temple                | **RA**      | **CI**            |
| Exécuter la décision de modification des ressources sur la plateforme Cloud Temple                                    | **I**       | **RA**            |
| Appliquer les tags aux machines virtuelles conformément à la politique définie                                        | **RA**      |                   |

### Gestion de la performance

| Activité                                                                                                                                              | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la surveillance du bon fonctionnement et de la fiabilité de tous les équipements impliqués dans la prestation du service qualifié SecNumCloud | **I**       | **RA**            |
| Assurer le suivi de la performance des ressources physiques de calcul, stockage et réseau mises à disposition de vos tenants **(4)**                  | **RI**      | **A**             |
| Superviser les performances des machines virtuelles soutenant vos environnements                                                                      | **RA**      | **I**             |

*(4) La plateforme Cloud Temple adopte une philosophie centrée sur **la fourniture d'infrastructures dédiées** pour les besoins de **calcul** (avec des lames physiques), de **stockage** (via des LUNs dédiées sur les SANs)
et de **réseau** (incluant des pare-feu et des répartiteurs de charge). Ces ressources dédiées sont mises à la disposition du client, dont l'utilisation
et la charge résultante dépendent directement de l'usage qu'il en fait. Il incombe donc au client de mettre en place et de gérer les systèmes de supervision
et de métrologie nécessaires pour assurer le suivi du fonctionnement optimal de son système d'information.*

### Gestion de la sauvegarde et de la reprise d'activité sur la sauvegarde intégrée

| Activité                                                                                                                                  | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle sur les infrastructures de **sauvegarde** intégrées à la plateforme Cloud Temple **(5)** |             | **RA**            |
| Assurer le maintien en condition de sécurité des infrastructures de **sauvegarde** intégrées à la plateforme Cloud Temple                | **I**       | **RA**            |
| Gérer les incidents sur les infrastructures **sauvegarde** intégrées à la plateforme Cloud Temple                                         | **I**       | **RA**            |
| Gérer les problèmes sur les infrastructures **sauvegarde** intégrées à la plateforme Cloud Temple                                         |             | **RA**            |
| Gérer les capacités sur les infrastructures **sauvegarde** intégrées à la plateforme Cloud Temple                                         | **AI**      | **RC**            |
| Assurer le maintien en condition opérationnelle sur la solution de sauvegarde choisie au sein de ses tenants par le client **(6)**       | **RA**      |                   |
| Assurer le maintien en condition de sécurité sur la solution de sauvegarde choisie au sein de ses tenants par le client                  | **RA**      |                   |
| Gérer les incidents sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | **RA**      |                   |
| Gérer les problèmes sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | **RA**      |                   |
| Gérer les capacités sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | **RA**      | **CI**            |
| Gérer le cycle des vies des politiques de sauvegarde                                                                                      | **RA**      |                   |
| S'assurer que les politiques de sauvegarde sont cohérentes avec le cycle de vie de la donnée                                              | **RA**      |                   |
| S'assurer que les plans de continuité d'activité ou de reprise d'activité sont cohérents avec le cycle de vie de la donnée                | **RA**      |                   |
| Effectuer des tests périodiques pour évaluer l'efficacité de la stratégie de sauvegarde                                                   | **RA**      |                   |
| Effectuer des tests périodiques pour évaluer l'efficacité de la stratégie de reprise d'activité ou de continuité d'activité          | **RA**      | **CI**            |

*(5) Au 1er janvier 2024, la solution de sauvegarde intégrée à la plateforme Cloud Temple est IBM Spectrum Protect Plus.
Cette solution est entièrement automatisée et peut être gérée via la console Cloud Temple ou l'API Cloud Temple.*

### Gestion de la sauvegarde et de la reprise d'activité pour les plateformes tierces au sein d'un tenant client

| Activité                                                                                                                                  | Rôle Client | Rôle Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer le maintien en condition opérationnelle sur la solution de sauvegarde choisie au sein de ses tenants par le client **(6)**       | **RA**      |                   |
| Assurer le maintien en condition de sécurité sur la solution de sauvegarde choisie au sein de ses tenants par le client                  | **RA**      |                   |
| Gérer les incidents sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | **RA**      |                   |
| Gérer les problèmes sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | **RA**      |                   |
| Gérer les capacités sur la solution de sauvegarde choisie au sein de ses tenants par le client                                            | **RA**      | **CI**            |
| Gérer le cycle des vies des politiques de sauvegarde                                                                                      | **RA**      |                   |
| S'assurer que les politiques de sauvegarde sont cohérentes avec le cycle de vie de la donnée                                              | **RA**      |                   |
| S'assurer que les plans de continuité d'activité ou de reprise d'activité sont cohérents avec le cycle de vie de la donnée                | **RA**      |                   |
| Effectuer des tests périodiques pour évaluer l'efficacité de la stratégie de sauvegarde                                                   | **RA**      |                   |
| Effectuer des tests périodiques pour évaluer l'efficacité de la stratégie de reprise d'activité ou de continuité d'activité          | **RA**      | **CI**            |

*(6) Ceci concerne toute solution de sauvegarde supplémentaire mise en place dans les environnements du client et gérée par celui-ci.
Cloud Temple propose des services professionnels pour ceux qui souhaitent déléguer certaines opérations à Cloud Temple.*

### Gestion de la documentation et du contrat

| Activité                                                                                                                                                        | Rôle Client | Rôle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assurer la gestion commerciale et contractuelle du client, incluant l'établissement de devis, le traitement des commandes et la gestion de la facturation       | **I**       | **RA**            |
| Assurer le suivi contractuel de la prestation, incluant la validation des devis, le suivi des livraisons et la surveillance de la facturation                   | **RA**      | **I**             |
| Assurer la maintenance et la disponibilité de l'inventaire des ressources fournies par Cloud Temple relative à l'offre SecNumCloud                              | **I**       | **RA**            |
| Assurer la maintenance et la mise à disposition de la documentation technique relative à l'offre SecNumCloud                                                    | **I**       | **RA**            |
| Assurer le suivi du cycle de vie des machines virtuelles déployées dans vos environnements Cloud Temple via votre CMDB (Configuration Management Database) | **RA**      |                   |
| Maintenir à jour la politique d'accès à l'interface de la console Cloud Temple ou à l'API Cloud Temple                                                          | **RA**      |                   |

### Gestion des journaux

| Activité                                                                                                                 | Rôle Client | Rôle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conserver et mettre à disposition les journaux de la plateforme IaaS Cloud Temple **(7)**                                |             | **RA**            |
| Conserver et mettre à disposition les journaux du système d'information hébergé au sein de vos tenants Cloud Temple | **RA**      |                   |

*(7) Au premier janvier 2024, la durée de rétention des journaux de la plateforme est d'une année.*

## Connectivité au réseau client (mpls, fibre dédiée, ipsec, ...)

| Activité                                                                                             | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Souscrire à une connectivité réseau opérateur pour accéder à un datacenter physique Cloud Temple (8) | **RA**      | **CI**            |
| Gérer le plan d'adressage IP                                                                         | **RA**      | **I**             |
| Gérer les incidents sur les liens réseaux opérateurs client                                          | **RA**      |                   |
| Gérer les problèmes sur les liens réseaux opérateurs client                                          | **RA**      | **CI**            |
| Gérer les capacités sur les liens réseaux opérateurs client                                          | **RA**      | **CI**            |

*(8) Cloud Temple assume la responsabilité du réseau concernant son infrastructure backbone, ses points de collecte ainsi que
les points d'interconnexion datacenter, garantissant ainsi la connectivité entre ces points et son réseau backbone.
Dans l'offre d'hébergement en baie physique, Cloud Temple assume la responsabilité à partir de l'équipement situé en haut du rack, communément appelé "top of rack".*

## Réversibilité

| Activité                                                                                                                                                                                       | Rôle Client | Rôle Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Planifier le projet de réversibilité et choisir les infrastructures cibles                                                                                                                     | **RA**      | **I**             |
| Mettre en oeuvre les opérations de transition, qu'elles impliquent une extraction manuelle, l'utilisation d'API ou toute autre méthode tierce compatible avec la plateforme Cloud Temple. | **RA**      | **I**             |
| Transférer les données tout en contrôlant les répercussions de la migration sur la qualité du service fourni par le système d'information du client.                                      | **RA**      |                   |
| Procéder au démantèlement des configurations du Cloud Privé et des options associées au client, à la suite de la résiliation du contrat.                                                  | **I**       | **RA**            |
| Réaliser l'effacement sécurisé des données sur les supports de stockage et fournir une attestation                                                                                             | **I**       | **RA**            |
