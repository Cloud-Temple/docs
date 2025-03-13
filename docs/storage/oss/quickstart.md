---
title: Guide de démarrage
---
import S3ListBucket from './images/S3_list_bucket.png'
import S3Accounts from './images/S3_accounts.png'
import S3CreateAccount from './images/S3_create_account.png'
import S3StorageKeys from './images/S3_storage_keys.png'
import S3Keyregen from './images/S3_keyregen.png'
import S3Create from './images/S3_create.png'
import S3CreatePopup_001 from './images/S3_create_popup_001.png'
import S3AccountAssign from './images/S3_account_assign.png'
import S3AccountAccess from './images/S3_account_access.png'
import S3Files from './images/S3_files.png'
import S3Params from './images/S3_params.png'
import S3Lifecycle from './images/S3_lifecycle.png'
import S3CreatePopup_002 from './images/S3_create_popup_002.png'
import S3Delete from './images/S3_delete.png'

## Lister l'ensemble des bucket S3 de votre tenant

Vous pouvez accéder à l'ensemble de vos buckets via le menu '__Stockage Objet__' de la console Cloud Temple :

<img src={S3ListBucket} />

Vous pouvez voir tous les comptes créés sur votre tenant et autorisé à accéder au service S3 via l'onglet '__Comptes de stockage__'.

<img src={S3Accounts} />

## Création d'un nouveau compte de stockage

La création d'un compte de stockage sur votre tenant se fait en appuyant sur le bouton '__Nouveau compte de stockage__' en haut à droite, dans l'onglet '__Comptes de stockage__' :

<img src={S3CreateAccount} />

La plateforme vous donne alors la clef d'accès et la clef secrète de votre bucket :

<img src={S3StorageKeys} />

__ATTENTION :__ Les clés secrète et d'accès sont présentées une seule fois. Après cette première apparition, il devient impossible de consulter à nouveau la clé secrète. Il est donc essentiel de noter ces informations immédiatement ; faute de quoi, il vous sera nécessaire de générer une nouvelle paire de clés.

La regeneration se fait au niveau des options de la clefs en choisissant l'option "Réinitialiser clé d'accès".

<img src={S3Keyregen} />

## Création d'un bucket S3

La création de nouveau bucket se fait en cliquant sur le bouton '__Nouveau bucket__' en haut à droite de l'écran :

<img src={S3Create} />

Une fenêtre s'affiche alors et vous devez renseigner :

1. La __région__ de création de votre bucket,
2. Le __type__ de bucket : performant ou archivage,
3. Le __nom__ de votre bucket (il doit être unique).

<img src={S3CreatePopup_001} />

Au 3 Avril 2024, la région disponible est __FR1__ (Paris) et seul le type performant est disponible.

Vous devez aussi choisir qui peut accéder à votre bucket :

- Accès __Privé__ : Par défaut, l'accès est limité aux adresses IP spécifiques de Cloud Temple.
- Accès __Public__ : L'accès est ouvert à toutes les adresses Internet (notamment via la règle 0.0.0.0/0). Cependant, une authentification est toujours requise. Nous déconseillons cette configuration en raison de ses implications en termes de sécurité.
- Accès __Personnalisé__ : Cette option vous permet de spécifier les adresses IPv4 ou les plages de sous-réseaux que vous souhaitez autoriser.

## Association d'un compte de stockage à un bucket

Les associations de compte aux buckets sont réalisées dans l'onglet '__Politiques__'

<img src={S3AccountAssign} />

Cette association permet de donner l'accès du compte de stockage au bucket. Il y quatres rôles :

1. __Mainteneur__ : Les droits de lecture, ecriture, gestion des droits et gestion de la politique

Les permissions S3 derrière ce rôle:

```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. __Ecrivain et Lecteur__ : Lire et éditer, modifier, supprimer les fichiers dans les buckets.

Les permissions S3 derrière ce rôle:

```json
{
    "name": "read_write",
    "permissions": [
        "s3:Get*"
        "s3:List*"
        "s3:*Object"
    ]
}
```

3. __Ecrivain__ : Lire et éditer, modifier, supprimer les fichiers dans les buckets.

Les permissions S3 derrière ce rôle:

```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*"
        "s3:*Object"
    ]
}
```

4. __Lecteur__ : Lire les fichiers dans les buckets et les télécharger.

Les permissions S3 derrière ce rôle:

```json
{
    "name": "read_only",
    "permissions": [
        "s3:Get*"
        "s3:List*"
    ]
}
```

<img src={S3AccountAccess} />

## Parcourir un bucket S3

Lorsque vous cliquez sur le nom d'un bucket, vous avez accès en premier à l'onglet '__Fichiers__' pour voir son contenu :

<img src={S3Files} />

Dans l'onglet '__Paramètres__' vous pouvez voir le détail des informations de votre bucket S3 :

<img src={S3Params} />

Vous avez alors :

1. Le nom du bucket S3,
2. Sa région
3. Le nombre d'objet qu'il contient et la taille en octets du bucket,
4. Son point de terminaison,
5. Les paramètres de cycle de vie qui définissent notamment l'expiration des objets du bucket. '__0__' correspond à une rétention infinie.

Vous pouvez modifier le paramètre de rétention via le bouton '__Modifier__' du cycle de vie :

<img src={S3Lifecycle} />

Enfin, vous pouvez modifier sa typologie d'accès.

## Limitations des accès à vos bucket S3

Il est très simple de configurer les restrictions d'accès à vos buckets S3. Lors de la création d'un bucket, vous avez le choix entre trois configurations d'accès :

<img src={S3CreatePopup_001} />

- Accès __Privé__ : Par défaut, l'accès est limité aux adresses IP spécifiques de Cloud Temple.
- Accès __Public__ : L'accès est ouvert à toutes les adresses Internet (notamment via la règle 0.0.0.0/0). Nous déconseillons cette configuration en raison de ses implications en termes de sécurité.
- Accès __Personnalisé__ : Cette option vous permet de spécifier les adresses IPv4 ou les plages de sous-réseaux que vous souhaitez autoriser:

<img src={S3CreatePopup_002} />

*Le support IPv6 est prévu pour le premier semestre 2025.*

## Suppression d'un bucket S3

La suppression d'un bucket se fait dans les actions associées au bucket en choisissant l'option __'Supprimer'__.

<img src={S3Delete} />

***ATTENTION : La suppression est définitive et il n'existe aucun moyen de récupérer les données.***

## Comment est facturé l'offre S3 de Cloud Temple ?

Le prix est un prix mensuel, au Gio de stockage, facturé mensuellement. Cependant, la plateforme comptabilise l'usage à l'heure et réalise la facturation sur une base mensuelle de 720 heures.

Par exemple, si vous consommez dans le mois 30 Gio pendant 1h puis rien, puis quelques jours plus tard 30Gio pendants 2h, la facture mensuelle sera de *( Prix (1 x 30Gio) + 2 x Prix (30Gio) ) / 720* sur le mois considéré. La facturation est terme échue.
