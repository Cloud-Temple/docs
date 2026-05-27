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
| **Politique de cycle de vie (lifecycle)** | Marque les objets comme expirés à l'issue d'un délai défini. Le comportement effectif (suppression réelle ou non) dépend de la configuration de la plateforme. | API S3 : `PutBucketLifecycleConfiguration` |
| **Protection de suppression** | **Empêche** toute modification ou suppression des objets pendant un délai défini. Verrou *immuable*. | **Demande à faire auprès du support Cloud Temple** |

:::warning Ne pas confondre
- La **politique de cycle de vie** est un mécanisme *actif* : elle peut déclencher la suppression d'objets en fin de période (selon la configuration de la plateforme).
- La **Protection de suppression** est un mécanisme *passif* : elle bloque toute suppression pendant la période, mais ne supprime jamais rien d'elle-même.

Les deux mécanismes interagissent : si une protection de suppression couvre des objets également visés par une politique de cycle de vie, **la protection prime** et empêche l'expiration tant qu'elle est active.
:::

### Politique de cycle de vie (lifecycle)

Une politique de cycle de vie se configure via l'API S3 standard (`PutBucketLifecycleConfiguration`). Elle permet de déclarer une intention d'expiration d'objets après un nombre de jours défini, et/ou d'expirer les versions antérieures dans un bucket versionné.

Cas d'usage typiques :
- Purge planifiée de logs après 30 jours
- Nettoyage de fichiers temporaires à intervalle régulier
- Maîtrise du volume de stockage facturé

Un exemple de configuration JSON et la commande `aws s3api` associée sont fournis dans le [Guide de démarrage → Parcourir un bucket S3](./quickstart.md#parcourir-un-bucket-s3).

:::info Comportement effectif sur Cloud Temple
La plateforme de stockage objet Cloud Temple repose sur Dell EMC ECS, dont le mécanisme d'expiration des objets (*Lifecycle Delete Scanner*) est désactivé par défaut depuis ECS 3.2.1. **L'application réelle d'une politique de cycle de vie sur un bucket existant peut donc nécessiter une action côté plateforme.** Si une politique posée ne semble pas effacer les objets après le délai configuré, contactez le support Cloud Temple pour valider la configuration de votre infrastructure.
:::

### Protection de suppression

La **Protection de suppression** est un mécanisme d'immuabilité au niveau du bucket. Une fois activée, elle empêche toute modification ou suppression des objets pendant la durée configurée — y compris par les administrateurs.

:::danger Activation : demande au support Cloud Temple
La Protection de suppression **n'est pas activable en self-service** depuis la console. Elle doit faire l'objet d'une **demande explicite au support Cloud Temple**, qui configurera la durée souhaitée au niveau du bucket. Cette demande est tracée et engageante.
:::

**Comportement**

Lorsque la Protection de suppression est activée sur un bucket :

- **Aucun objet ne peut être supprimé**, y compris par le propriétaire du bucket **et y compris par les administrateurs Cloud Temple**.
- **Aucun objet ne peut être modifié** (écrasement d'un objet existant interdit).
- La protection s'applique à **tous les objets** présents au moment de l'activation, ainsi qu'à ceux ajoutés ultérieurement.
- À l'expiration de la durée configurée, les objets **redeviennent modifiables et supprimables manuellement** — il n'y a pas de suppression automatique en fin de période.

**Cas d'usage**

Ce mécanisme est particulièrement adapté aux contextes imposant une **immuabilité des données** sur une durée définie :

- Conformité réglementaire (secteurs santé, finance, défense)
- Protection contre les suppressions accidentelles ou malveillantes
- Respect d'obligations d'archivage (ex. : durée légale de conservation des logs)

:::danger Irréversibilité et conséquences contractuelles
**La durée configurée ne peut être ni raccourcie ni annulée**, ni par le client, ni par Cloud Temple. Concrètement :

- Si une Protection de suppression est posée pour **99 ans** sur un bucket, les données qu'il contient seront **inaccessibles à la suppression pendant 99 ans**, sans recours possible.
- Cette inviolabilité s'applique également au scénario où le client souhaite **arrêter d'utiliser le service** ou **résilier son contrat** : le volume stocké continue d'exister, occupe une capacité physique, et reste **facturable au prorata du temps restant et du volume** jusqu'à la fin de la période de protection.
- Aucun mécanisme de bypass n'est prévu, y compris pour les équipes Cloud Temple. La suppression matérielle anticipée des supports physiques n'est pas une option (les médias sont partagés avec d'autres clients dans une infrastructure mutualisée qualifiée SecNumCloud).

**À n'activer qu'en pleine connaissance de cause, et après validation de la durée par votre direction métier et votre direction financière.**
:::

:::info Différence avec S3 Object Lock standard
La Protection de suppression Cloud Temple s'applique au **bucket entier** et n'exige pas l'activation préalable du versioning. Elle se distingue de `S3 Object Lock` du standard AWS qui fonctionne **par objet** et nécessite le versioning. Si votre application attend une API `PutObjectLockConfiguration` ou les modes *Compliance* / *Governance* d'AWS, contactez le support Cloud Temple pour valider la compatibilité.
:::
