---
title: Concepts
---

## Elastic Cloud Storage (ECS) : une solution de référence

L'offre de stockage objet Cloud Temple repose sur la technologie __Elastic Cloud Storage (ECS)__ de Dell, reconnue pour sa haute performance et son respect des normes industrielles. Avec une compatibilité de __97% avec le protocole AWS S3__, cette solution assure :

- Une intégration facile et standardisée ;
- Une flexibilité accrue pour les utilisateurs ;
- Une transition fluide vers une infrastructure de stockage moderne.

---

## Engagements de sécurité et certifications

Cloud Temple s'engage à garantir la sécurité des données grâce à des certifications reconnues :

- __SecNumCloud__ : Qualification délivrée par l'ANSSI, assurant souveraineté et sécurité des données dans un cadre français et européen.
- __HDS (Hébergement de Données de Santé)__ : Conformité aux exigences strictes pour les données médicales sensibles.
- __ISO 27001__ : Adhésion aux meilleures pratiques en matière de sécurité de l'information.

## Chiffrement avancé pour une protection optimale

Le chiffrement des données est appliqué de manière systématique, assurant leur sécurité à chaque étape :

- __En transit__ : Protection via le protocole __TLS 1.3__.
- __En stockage__ : Trois options adaptées aux besoins des utilisateurs :
  - __SSE-ECS__ : Clés gérées par Cloud Temple pour une gestion simplifiée.
  - __SSE-C__ : Clés fournies par le client pour un contrôle accru.
  - __CSE__ : Chiffrement réalisé par le client pour une sécurité maximale.

| Modèle de chiffrement         | Avantages                              | Inconvénients                     |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| __SSE-ECS__                  | Gestion simplifiée et transparente     | Moins de contrôle sur les clés   |
| __SSE-C__                    | Contrôle total sur les clés            | Gestion des clés nécessaire       |
| __CSE__                      | Sécurité maximale                      | Complexité et impact sur la performance |

---

## Architecture et déploiement

### Déploiement de type région

Le stockage S3 Cloud Temple stocke les données de manière native sur [__trois zones de disponibilité distinctes__](../../additional_content/concepts_az.md) au sein d'une même [région](../../additional_content/concepts_regional.md) Cloud Temple. Cette architecture est conçue pour offrir une haute disponibilité et une résilience maximale face aux pannes matérielles ou logicielles :

- Erasure Coding (EC) : Nous utilisons par défaut un schéma EC 12+4, qui divise les données en 12 segments de données et 4 segments de parité. Cette technique permet de reconstruire les données même en cas de perte de plusieurs segments.
- Distribution des données : Les segments EC sont répartis sur différents nœuds et racks, assurant une protection contre les pannes de disques, de nœuds et même de racks entiers.
- Réplication géographique : Pour une protection supplémentaire, les données sont répliquées sur 3 zones de disponibilités, offrant une résilience face aux sinistres locaux.

Cette réplication assure que même en cas de défaillance d'une zone, les données restent accessibles et intactes,
contribuant ainsi à une infrastructure de stockage hautement résiliente.

---

## Performance et niveaux de service

### Niveaux de service garantis

Cloud Temple propose une infrastructure hautement fiable avec des engagements clairs :

| Engagement                      | Cible                         |
| ------------------------------- | ----------------------------- |
| Disponibilité                   | 99.99% (inclut la maintenance)|
| Durabilité des données          | 99,99999999%                  |
| Bande passante réseau garantie  | 1 Gbp/seconde                 |

### Limitations du stockage objet

Cloud Temple propose une solution de stockage objet avec les caractéristiques techniques suivantes :

• __Nombre maximum de buckets par tenant__ : Le nombre maximum de buckets par tenant est de 999.

• __Taille limite par bucket__ : La taille maximale d'un objet est de 5 To.

• __Nombre de connexions simultanées__ : Aucune limite spécifique.

• __Performance à l'upload__ :

- Jusqu'à 100Gb/s en entrée
- Jusqu'à 100Gb/s en sortie

---

## Concepts et organisation du stockage

### Le compte de stockage

Un __Storage Account__ est une entité logique qui possède une __Access Key__ et une __Secret Key__ utilisées pour authentifier et sécuriser les interactions avec un bucket.
C'est sur ce compte que sont positionnés les rôles et permissions associés aux __buckets__, permettant de contrôler précisément les accès et les actions autorisées pour chaque utilisateur ou service.

### Types de comptes de stockage

La plateforme de Stockage Objet Cloud Temple distingue deux types de comptes de stockage, chacun avec un rôle et un niveau de permissions spécifiques :

#### 1. Compte de stockage classique

C'est le type de compte standard que vous créerez pour la plupart de vos usages.

*   **Gestion des clés** : Pour chaque compte classique, vous pouvez générer une paire de clés d'accès (`Access Key` et `Secret Key`).
*   **Permissions granulaires** : Les droits d'accès de ce compte sont définis au niveau de chaque bucket via des listes de contrôle d'accès (ACL). Vous devez explicitement lui donner des permissions (lecture, écriture, etc.) sur les buckets auxquels il doit accéder.

#### 2. Compte de stockage global (Root)

Chaque *namespace* (tenant) dispose d'un unique compte de stockage global, parfois appelé "compte root". Ce compte dispose de privilèges administratifs étendus.

*   **Accès total** : Le compte global a un accès complet à tous les buckets au sein du namespace, sans qu'il soit nécessaire de lui attribuer des permissions spécifiques. Il peut réaliser toutes les opérations possibles sur l'ensemble du service de stockage.
*   **Usage administratif** : Il est principalement destiné aux tâches de configuration et d'administration globales.
*   **Réinitialisation des clés** : Étant donné son importance, si la clé d'accès et la clé secrète de ce compte sont perdues, la plateforme vous permet de les réinitialiser pour en générer de nouvelles.

### Le "bucket" dans l'écosystème du stockage objet

Un bucket S3, popularisé par le service Amazon Simple Storage Service (Amazon S3), est __un conteneur de stockage public__ dans le cloud conçu pour conserver une quantité illimitée de données de manière sécurisée, fiable et hautement disponible. Chaque bucket S3 peut stocker des fichiers (appelés "objets" dans S3), allant de documents et images à de grandes bases de données ou fichiers vidéo. Les buckets sont utilisés pour organiser l'espace de stockage de manière logique au sein du stockage objet Cloud Temple, et chaque bucket est identifié par un nom unique fourni par l'utilisateur. Les buckets S3 offrent des fonctionnalités avancées, comme la gestion des versions, la sécurisation des données via des politiques de contrôle d'accès, et la possibilité d'immutabilité.

### L'offre S3 Cloud Temple utilise-t-elle la méthode 'PathStyle'

De part les contraintes associées à la qualification SecNumCloud, à cet instant, l'offre est prévue pour utiliser la méthode '__PathStyle__'. Nous travaillons à ce que la méthode '__UrlStyle__' soit disponible S2 2025.

### Requêtes pré-signées

Le stockage objet Cloud Temple prend en charge les __requêtes pré-signées__, une fonctionnalité essentielle qui permet de générer des URL temporaires donnant accès à des objets spécifiques pendant une durée limitée. Cette fonctionnalité est particulièrement utile pour partager des fichiers de manière sécurisée avec des utilisateurs externes sans leur attribuer de droits permanents ou d'identifiants d'accès au bucket. Les requêtes pré-signées peuvent être configurées avec une durée de validité précise, offrant ainsi un contrôle granulaire sur l'accès aux données.

### Immutabilité des objets (Object Lock)

Le Stockage Objet de Cloud Temple, basé sur Dell ECS, supporte la fonctionnalité d'immutabilité via **Object Lock**, en conformité avec le standard S3. Cette option permet de configurer les objets en mode **WORM (Write Once, Read Many)**, les protégeant ainsi contre toute modification ou suppression pendant une période définie. C'est une protection essentielle pour la conformité réglementaire et la défense contre les ransomwares.

#### Fonctionnement

L'immutabilité s'applique aux versions des objets et peut être configurée de deux manières :
*   **Période de rétention fixe** : L'objet est verrouillé pour une durée déterminée (en jours ou en années).
*   **Conservation légale (Legal Hold)** : L'objet est verrouillé indéfiniment, jusqu'à ce que la conservation soit explicitement levée.

#### Conditions de mise en œuvre

*   **Versionning obligatoire** : Pour activer l'Object Lock, le versionning doit être activé sur le bucket. Une fois l'Object Lock actif, le versionning ne peut plus être désactivé.
*   **Activation à la création** : L'immutabilité doit être activée au moment de la création du bucket, via l'API S3 (par exemple, avec le header `x-amz-bucket-object-lock-enabled: true`).
*   **Deux modes de protection** :
    *   **Mode Gouvernance** : Les utilisateurs disposant de permissions spécifiques peuvent modifier ou supprimer les paramètres de rétention.
    *   **Mode Conformité** : Personne, y compris l'administrateur root, ne peut modifier ou supprimer les paramètres de rétention. C'est le plus haut niveau de protection.

#### Cas d'usage principaux

*   **Protection anti-ransomware** : Les sauvegardes protégées ne peuvent être ni chiffrées ni supprimées par une attaque, garantissant une restauration fiable des données.
*   **Conformité réglementaire** : Répond aux exigences strictes de conservation des données dans des secteurs comme la finance (FINRA, SEC 17a-4) ou la santé.
