---
title: Concepts du Stockage Objet
sidebar_position: 2
---

# Concepts du Stockage Objet (OSS)

## Architecture Technique

Le service de stockage d'objets de Cloud Temple est construit sur une architecture distribuée qui garantit une haute durabilité et disponibilité des données. Les objets sont stockés de manière redondante sur plusieurs nœuds de stockage au sein de nos datacenters certifiés SecNumCloud.

L'accès au service se fait via une API RESTful standard, compatible avec le protocole S3, vous permettant d'utiliser une large gamme d'outils et de SDKs existants.

## Composants Principaux

- **Objets** : Les données fondamentales stockées dans le service. Un objet est composé de données (le fichier lui-même) et de métadonnées (informations descriptives sur l'objet).
- **Buckets (Conteneurs)** : Les objets sont organisés en buckets. Un bucket est un conteneur pour les objets, et son nom doit être unique au sein du service.
- **Clés** : Chaque objet dans un bucket est identifié de manière unique par une clé (un nom de fichier).
- **Endpoints** : Les URLs régionales que vous utilisez pour accéder à l'API du service de stockage.

## Sécurité et Chiffrement

La sécurité de vos données est notre priorité absolue. Le service OSS intègre des mécanismes de chiffrement robustes pour protéger vos données, que ce soit lorsqu'elles sont stockées (au repos) ou lorsqu'elles transitent sur le réseau.

### Chiffrement des Données au Repos (Data at Rest Encryption - D@RE)

Pour protéger vos données stockées, notre service utilise le chiffrement côté serveur.

- **Activation** : Le chiffrement D@RE est activé au niveau du *namespace* (espace de nommage).
- **Algorithme** : Nous utilisons l'algorithme **AES-256**, l'un des standards de chiffrement les plus forts disponibles.
- **Fonctionnement** : Lorsque vous écrivez un objet dans un bucket où D@RE est activé, le service chiffre automatiquement vos données avant de les écrire sur les disques. Lorsque vous lisez l'objet, il est déchiffré de manière transparente pour vous. La gestion des clés de chiffrement est entièrement prise en charge par le service.

### Chiffrement des Données en Transit

Toutes les communications avec l'API du service de stockage objet, que ce soit pour téléverser, télécharger ou gérer vos données, doivent être sécurisées.

- **Protocole** : Nous imposons l'utilisation du protocole **TLS (Transport Layer Security)**, versions **1.2 et 1.3**.
- **Fonctionnement** : En utilisant HTTPS pour toutes vos requêtes API, vous vous assurez que les données échangées entre votre client et nos serveurs sont chiffrées, les protégeant ainsi contre l'interception ou l'altération pendant leur transit sur le réseau.

## Gestion du cycle de vie et protection des données

Le service OSS propose deux mécanismes **complémentaires mais distincts** pour gérer la durée de vie des objets. Il est important de bien les différencier au moment de la conception d'un bucket :

| Mécanisme | Effet | Configuration |
|---|---|---|
| **Politique de cycle de vie (lifecycle)** | **Supprime ou transitionne automatiquement** les objets après un délai défini. Action *active* du service. | API S3 standard : `PutBucketLifecycleConfiguration` (ex. via `aws s3api`) |
| **Protection de suppression** | **Empêche** toute modification ou suppression des objets pendant un délai défini. Verrou *passif*. | Paramètre du bucket dans la console Cloud Temple |

:::warning Ne pas confondre
- Une **politique de cycle de vie** *supprime* automatiquement les objets en fin de période.
- La **Protection de suppression** *bloque* les suppressions pendant la période, mais ne supprime rien.

Les deux peuvent coexister sur un même bucket : un objet protégé contre la suppression ne sera pas supprimé par une politique de lifecycle tant que sa période de protection n'est pas écoulée.
:::

### Politique de cycle de vie (lifecycle)

Une politique de cycle de vie permet d'**automatiser la suppression** d'objets après un nombre de jours défini, ou de supprimer les versions antérieures dans un bucket versionné. Elle suit le standard S3 et se configure via l'API (`PutBucketLifecycleConfiguration`).

Cas d'usage typiques :
- Purge automatique de logs après 30 jours
- Nettoyage de fichiers temporaires à intervalle régulier
- Rétention limitée pour limiter les coûts de stockage

Un exemple de configuration JSON et la commande `aws s3api` associée sont fournis dans le [Guide de démarrage → Parcourir un bucket S3](./quickstart.md#parcourir-un-bucket-s3).

### Protection de suppression

La **Protection de suppression** est un paramètre configurable au niveau du bucket, accessible dans l'onglet **Paramètres** de la console. Elle permet de définir une durée pendant laquelle les objets stockés dans le bucket sont protégés contre toute modification ou suppression.

**Comportement**

Lorsque la Protection de suppression est activée sur un bucket :

- **Aucun objet ne peut être supprimé** dans le bucket pendant toute la durée configurée, y compris par le propriétaire du bucket.
- **Aucun objet ne peut être modifié** (écrasement d'un objet existant interdit).
- La protection s'applique à **tous les objets** présents dans le bucket au moment de l'activation, ainsi qu'à ceux ajoutés ultérieurement.
- À l'expiration de la durée configurée, les objets redeviennent modifiables et supprimables normalement.

**Cas d'usage**

Ce mécanisme est particulièrement adapté aux contextes imposant une **immuabilité des données** sur une durée définie :

- Conformité réglementaire (secteurs santé, finance, défense)
- Protection contre les suppressions accidentelles ou malveillantes
- Respect d'obligations d'archivage (ex. : durée légale de conservation des logs)

:::info Différence avec S3 Object Lock standard
La Protection de suppression Cloud Temple s'applique au **bucket entier** et n'exige pas l'activation préalable du versioning. Elle se distingue de `S3 Object Lock` du standard AWS qui fonctionne **par objet** et nécessite le versioning. Si votre application attend une API `PutObjectLockConfiguration` ou les modes *Compliance* / *Governance* d'AWS, contactez le support Cloud Temple pour valider la compatibilité.
:::
