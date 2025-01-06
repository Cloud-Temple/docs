---
title: Concepts
---

## Elastic Cloud Storage (ECS) : une solution de référence

L’offre de stockage objet Cloud Temple repose sur la technologie __Elastic Cloud Storage (ECS)__ de Dell, reconnue pour sa haute performance et son respect des normes industrielles. Avec une compatibilité de **97% avec le protocole AWS S3**, cette solution assure :

- Une intégration facile et standardisée ;
- Une flexibilité accrue pour les utilisateurs ;
- Une transition fluide vers une infrastructure de stockage moderne.

---

## Engagements de sécurité et certifications

Cloud Temple s'engage à garantir la sécurité des données grâce à des certifications reconnues :

- **SecNumCloud** : Qualification délivrée par l'ANSSI, assurant souveraineté et sécurité des données dans un cadre français et européen.
- **HDS (Hébergement de Données de Santé)** : Conformité aux exigences strictes pour les données médicales sensibles.
- **ISO 27001** : Adhésion aux meilleures pratiques en matière de sécurité de l’information.

---

## Chiffrement avancé pour une protection optimale

Le chiffrement des données est appliqué de manière systématique, assurant leur sécurité à chaque étape :

- **En transit** : Protection via le protocole __TLS 1.3__.
- **En stockage** : Trois options adaptées aux besoins des utilisateurs :
  - **SSE-ECS** : Clés gérées par Cloud Temple pour une gestion simplifiée.
  - **SSE-C** : Clés fournies par le client pour un contrôle accru.
  - **CSE** : Chiffrement réalisé par le client pour une sécurité maximale.

| Modèle de chiffrement         | Avantages                              | Inconvénients                     |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| **SSE-ECS**                  | Gestion simplifiée et transparente     | Moins de contrôle sur les clés   |
| **SSE-C**                    | Contrôle total sur les clés            | Gestion des clés nécessaire       |
| **CSE**                      | Sécurité maximale                      | Complexité et impact sur la performance |

---

## Niveaux de service garantis

Cloud Temple propose une infrastructure hautement fiable avec des engagements clairs :

| Engagement                      | Cible                         |
| ------------------------------- | ----------------------------- |
| Disponibilité                   | 99.99% (inclut la maintenance)|
| Durabilité des données          | 99,99999999%                  |
| Bande passante réseau garantie  | 1 Gbp/seconde                 |

## Le compte de stockage

Un **Storage Account** est une entité logique qui possède une **Access Key** et une **Secret Key** utilisées pour authentifier et sécuriser les interactions avec un bucket. 
C’est sur ce compte que sont positionnés les rôles et permissions associés aux **buckets**, permettant de contrôler précisément les accès et les actions autorisées pour chaque utilisateur ou service.


## Le "bucket" dans l'écosystème du stockage objet

Un bucket S3, popularisé par le service Amazon Simple Storage Service (Amazon S3), est **un conteneur de stockage public** dans le cloud conçu pour conserver une quantité illimitée de données de manière sécurisée, fiable et hautement disponible. Chaque bucket S3 peut stocker des fichiers (appelés "objets" dans S3), allant de documents et images à de grandes bases de données ou fichiers vidéo. Les buckets sont utilisés pour organiser l’espace de stockage de manière logique au sein du stockage objet Cloud Temple, et chaque bucket est identifié par un nom unique fourni par l'utilisateur. Les buckets S3 offrent des fonctionnalités avancées, comme la gestion des versions, la sécurisation des données via des politiques de contrôle d'accès, et la possibilité d'immutabilité.


## Déploiement de type région

Le stockage S3 Cloud Temple stocke les données de manière native sur __trois zones de disponibilité distinctes__ au sein d'une même région Cloud Temple. Cette architecture est conçue pour offrir une haute disponibilité et une résilience maximale face aux pannes matérielles ou logicielles :
- Erasure Coding (EC) : Nous utilisons par défaut un schéma EC 12+4, qui divise les données en 12 segments de données et 4 segments de parité. Cette technique permet de reconstruire les données même en cas de perte de plusieurs segments.
- Distribution des données : Les segments EC sont répartis sur différents nœuds et racks, assurant une protection contre les pannes de disques, de nœuds et même de racks entiers.
- Réplication géographique : Pour une protection supplémentaire, les données sont répliquées sur 3 zones de disponibilités, offrant une résilience face aux sinistres locaux.

Cette réplication assure que même en cas de défaillance d'une zone, les données restent accessibles et intactes, 
contribuant ainsi à une infrastructure de stockage hautement résiliente.


## Taille maximale de fichier pouvant être manipulé avec la console web
La limite en web est de 40Mo par fichier. Au delà, il faut utiliser un client natif S3 avec l'API. 


## L'offre S3 Cloud Temple utilise-t-elle la méthode 'PathStyle'

De part les contraintes associées à la qualification SecNumCloud, à cet instant, l'offre est prévue pour utiliser la méthode '**PathStyle**'. Nous travaillons à ce que la méthode '**UrlStyle**' soit disponible S1 2025.

## Nombre maximum de buckets par tenant
Le nombre maximum de buckets par tenant est de 999.
