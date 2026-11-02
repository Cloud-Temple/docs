---
title: Concepts
---
import bastion from '@site/docs/bastion/images/bastion.png'

<a id="cest-quoi-le-bastion-cloud-temple-"></a>

## Présentation

Le Bastion Cloud Temple est un service managé qui fournit une connectivité RDP ou SSH sécurisée depuis la Console Cloud Temple vers vos infrastructures physiques et virtuelles, qu'elles soient situées sur le Cloud de confiance, sur un cloud public ou on-premise. Il constitue le point d'entrée unique de vos accès d'administration : vos équipements sont administrés sans être exposés à Internet, et toutes les actions sont tracées pour les besoins d'audit et de conformité.

<img src={bastion} />

### Publics et cas d'usage

Le Bastion s'adresse aux administrateurs système, aux équipes DevOps, aux organisations soumises à des exigences réglementaires et au secteur public. Cas d'usage typiques :

- **Accès d'administration à distance** : passerelle sécurisée vers des infrastructures sensibles.
- **Réduction de la surface d'attaque** : aucun équipement administré n'est exposé directement à Internet.
- **Accès des partenaires et prestataires** : accès temporaires et contrôlés aux équipements.
- **Conformité réglementaire** : traçabilité des actions pour les audits.
- **Administration multi-environnements** : accès unifié aux ressources cloud et on-premise.

<a id="les-avantages"></a>

## Avantages

| Avantage               | Description                                                                                                                                                             |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gestion centralisée    | Le Bastion est accessible directement depuis la Console : tous les accès d'administration sont gérés au même endroit.                                                  |
| Sécurité               | Les équipements administrés via le Bastion ne sont pas exposés à Internet, ce qui les protège notamment de l'analyse de leurs ports par des utilisateurs malveillants. |
| Traçabilité            | Toutes les actions d'administration sont journalisées.                                                                                                                  |
| Flexibilité d'accès    | Un même service administre des équipements situés sur le Cloud de confiance, sur un cloud public ou on-premise.                                                        |
| Infrastructure as Code | Une API REST permet de gérer les équipements entièrement « as Code ».                                                                                                   |

## Fonctionnalités

| Fonctionnalité          | Description                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Accès RDP et SSH        | Connexion sécurisée aux équipements à administrer.                                                  |
| Connexion rapide        | Connexion ponctuelle à un équipement en précisant le protocole, son adresse IP et vos identifiants. |
| Équipements enregistrés | Configuration de connexion réutilisable : seuls vos identifiants sont demandés à chaque connexion.  |
| Tags et recherche       | Classement des équipements par tags, recherche par nom.                                             |
| Flux chiffrés           | Toutes les communications entre la Console, l'Appliance et les équipements sont chiffrées.          |
| Journalisation          | Traçabilité de toutes les actions d'administration.                                                 |
| API REST                | Création, modification et suppression des équipements par API.                                      |

## Architecture

### L'Appliance Bastion

L'Appliance Bastion est une machine virtuelle déployée à proximité de vos équipements. Elle fait passer un flux sécurisé et direct depuis la Console vers les équipements à administrer situés dans le même réseau virtuel.

Le flux est chiffré et encapsulé dans un tunnel VPN. La solution ne nécessite pas l'ouverture d'un flux depuis Internet vers vos infrastructures. Il suffit que l'Appliance ait accès à l'IP publique du module Console Bastion sur le port 443.

Une Appliance peut être utilisée pour effectuer une connexion rapide vers un équipement. À chaque connexion, le protocole souhaité, l'adresse IP de la machine et vos identifiants doivent être précisés. Pour éviter de remplir ces informations à chaque connexion, vous pouvez enregistrer les équipements que vous administrez régulièrement.

<a id="les-sessions"></a>

### Les équipements

Un équipement est une configuration de connexion enregistrée dans le Bastion. Elle associe une machine à administrer (nom, adresse IP, protocole SSH ou RDP, configuration du clavier) à l'Appliance qui fait transiter le flux.

Cette configuration est adaptée à une connexion régulière à un équipement. Les informations essentielles sont conservées : seuls vos identifiants sont demandés lors de la connexion.

### Intégrations

- **Console Cloud Temple** : gestion des Appliances et des équipements depuis le menu « Bastion ».
- **API REST** : automatisation de la gestion des équipements.

## Régions et zones de disponibilité

Le service Bastion est opéré depuis la région FR1, et ses journaux sont hébergés en France. L'Appliance est déployée au plus près de vos équipements : sur le Cloud de confiance, sur un cloud public ou on-premise.

## Caractéristiques techniques

| Paramètre         | Valeur                               |
|-------------------|--------------------------------------|
| Protocoles        | RDP, SSH                             |
| Équipements gérés | Jusqu'à 50 par Appliance             |
| Chiffrement       | Obligatoire, sur l'ensemble des flux |
| API               | REST                                 |
| Journalisation    | Toutes les actions d'administration  |

### Limites

- Une Appliance administre au maximum 50 équipements. Au-delà, déployez une Appliance supplémentaire.
- Les équipements à administrer doivent être joignables depuis le réseau où l'Appliance est déployée.

## Sécurité et conformité

Le Bastion est certifié HDS et ISO 27001. Il est inclus dans les services qualifiés SecNumCloud et conformes C5.

- **Chiffrement** : l'ensemble des flux est chiffré.
- **Isolation** : les Appliances fonctionnent dans un environnement dédié, avec un isolement logique strict des machines virtuelles d'administration.
- **Contrôle d'accès** : contrôle d'accès granulaire et application des politiques de mots de passe.
- **Traçabilité** : toutes les actions d'administration sont journalisées.

## Disponibilité du service

L'objectif de disponibilité du service Bastion est de 99,9 %, mesuré sur un mois.

## Réversibilité

À la fin du service, vous pouvez récupérer les éléments suivants, sans frais :

| Élément exporté  | Livrable                  | Délai de mise à disposition |
|------------------|---------------------------|-----------------------------|
| Journaux d'audit | Fichiers d'audit          | 30 jours                    |
| Configuration    | Paramètres de l'Appliance | 15 jours                    |

## Tarification

Le Bastion est facturé mensuellement, par Appliance. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Bastion — tarifs](https://www.cloud-temple.com/produits/bastion/).
