---
title: Concepts
---

## Présentation

L'Anti-DDoS protège les applications et services publiés sur Internet contre les attaques par déni de service distribué (DDoS) de type volumétrique, qui cherchent à saturer les liens réseau. Le trafic entrant est surveillé en permanence : en cas d'attaque, le trafic illégitime est filtré en amont, et seules les requêtes légitimes parviennent à vos services.

La protection est incluse dans l'[accès Internet](../internet/concepts.md) du Private Backbone. Elle est active par défaut et ne demande aucune configuration de votre part.

### Publics et cas d'usage

- **Sites web à fort trafic** : maintien de la disponibilité du site pendant une attaque.
- **Applications critiques** : continuité des applications web exposées sur Internet.
- **Éditeurs de solutions SaaS** : protection des plateformes accessibles par leurs clients.

## Avantages

| Avantage                   | Description                                                                                          |
|----------------------------|------------------------------------------------------------------------------------------------------|
| Continuité de service      | Vos services restent accessibles pendant une attaque volumétrique.                                   |
| Filtrage en amont          | Le trafic illégitime est filtré avant d'atteindre le réseau Cloud Temple et vos infrastructures.     |
| Surveillance permanente    | Le trafic entrant est analysé en continu, pour une réaction immédiate.                               |
| Aucune configuration       | La protection s'applique automatiquement aux adresses IP publiques, sans paramétrage ni intervention. |

## Fonctionnalités

| Fonctionnalité          | Description                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Protection volumétrique | Nettoyage du trafic en amont pour bloquer les attaques volumétriques avant qu'elles n'atteignent vos services. |
| Analyse de trafic       | Détection et analyse des motifs de trafic malveillants.                                            |
| Surveillance continue   | Surveillance permanente du trafic entrant.                                                         |
| Rapports d'attaque      | En cas d'attaque significative, un rapport d'incident peut être fourni sur demande au support.     |

## Architecture

### Fonctionnement de la protection

Les attaques volumétriques sont détectées et atténuées en bordure de réseau, en amont du réseau Cloud Temple. Lorsqu'une attaque est détectée, le trafic illégitime est automatiquement dévié et filtré (« nettoyé »), sans perturber le trafic légitime, qui continue d'être acheminé vers vos services.

La protection opère au niveau réseau (couches 3 et 4) : elle ne déchiffre pas les flux et n'inspecte pas leur contenu.

### Intégration avec les autres produits

L'Anti-DDoS est une composante de l'accès Internet. Il couvre tous les services exposés sur une adresse IP publique fournie par Cloud Temple, notamment :

- **Housing** : hébergement mutualisé ou dédié ;
- **Compute** : Bare Metal, IaaS VMware, IaaS OpenSource ;
- **Containers** : PaaS OpenShift, Managed Kubernetes.

Les préfixes IP que vous migrez vers l'infrastructure Cloud Temple bénéficient également de la protection, sans configuration supplémentaire (voir les [concepts de l'accès Internet](../internet/concepts.md)).

## Régions et zones de disponibilité

La protection est disponible dans la région FR1.

## Caractéristiques techniques

| Paramètre               | Valeur                                                        |
|-------------------------|---------------------------------------------------------------|
| Type d'attaques traitées | Attaques volumétriques                                        |
| Niveau de protection    | Réseau (couches 3 et 4)                                       |
| Capacité de mitigation  | 1 Tb/s                                                        |
| Détection               | Permanente                                                    |
| Périmètre               | Adresses IP publiques fournies par Cloud Temple et préfixes migrés |
| Configuration           | Aucune, protection active par défaut                          |

### Limites

- La protection cible les attaques volumétriques au niveau réseau : elle n'inspecte pas le contenu applicatif des flux.
- Aucune console ni API n'est mise à disposition : la protection est entièrement gérée par les équipes Cloud Temple et ne se paramètre pas.
- Les rapports d'attaque sont fournis sur demande, via le support.

## Sécurité et conformité

L'Anti-DDoS est certifié HDS et ISO 27001.

- **Chiffrement** : la protection n'effectue aucun déchiffrement des flux.
- **Inspection** : le contenu des flux n'est pas inspecté.

## Disponibilité du service

L'objectif de disponibilité du service Anti-DDoS est de 99,99 %, mesuré sur un mois.

## Réversibilité

L'Anti-DDoS étant inclus dans l'accès Internet, sa réversibilité suit celle de l'offre réseau : la protection est retirée à la résiliation du service Internet. Vous pouvez récupérer les éléments suivants, sans frais :

| Élément exporté      | Livrable                              | Délai de mise à disposition |
|----------------------|---------------------------------------|-----------------------------|
| Rapports d'incidents | Rapports d'attaque, sur demande       | 30 jours                    |

## Tarification

L'Anti-DDoS est inclus dans l'offre d'accès Internet, sans surcoût. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Anti-DDoS — tarifs](https://www.cloud-temple.com/produits/anti-ddos/).
