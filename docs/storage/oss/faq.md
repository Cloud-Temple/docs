---
title: Questions Fréquentes
---

## L'accès au S3 est-il restreint au réseau interne ?

Non — il n'existe pas de « réseau interne » au sens privé. L'accès au service **S3** se fait **via des adresses IP publiques**. Par défaut, les buckets S3 sont **privés** et l'accès est contrôlé par des listes d'IP (whitelists) associées au bucket.

Les IP autorisées peuvent être :

- des **IP publiques dédiées** assignées au client au sein de l'infrastructure Cloud Temple ;
- ou des **IP publiques externes** (sites distants, entrepôts, usines, opérateurs partenaires, etc.).

## Peut-on avoir des buckets accessibles depuis l'extérieur ?

Oui, mais uniquement dans des cas encadrés. La restriction d'accès est gérée **par bucket**, ce qui permet de définir :

- des **buckets strictement privés**, accessibles uniquement depuis les IP publiques autorisées du client ;
- des **buckets partiellement accessibles**, autorisant des IP publiques externes spécifiques (sites distants, partenaires).

## Qu'est-ce qu'un lien de téléchargement sécurisé S3 ?

Un **lien pré-signé** (*pre-signed URL*) est une URL temporaire et signée permettant d'accéder ponctuellement à un objet S3 sans exposer de credentials permanents. Le lien contient un **token** et une **date d'expiration**.

**Caractéristiques :**

- Durée de validité configurable (ex. 5 jours par défaut)
- Génération via API ou côté application
- Accès soumis aux règles d'IP whitelist et aux politiques du bucket

## Les liens pré-signés peuvent-ils être utilisés depuis l'extérieur ?

Pas si le bucket est restreint par liste d'IP.

Même avec un lien pré-signé valide, l'accès sera refusé si la requête n'émane pas d'une **adresse IP publique autorisée** pour ce bucket.

Exemple :

> Si le bucket est configuré pour n'autoriser que les IP publiques dédiées du client, un utilisateur extérieur ne pourra **pas** télécharger le fichier, même muni d'un lien temporaire.

## Peut-on créer des liens temporaires pour des usages ponctuels ?

Oui. Les **liens pré-signés** peuvent être générés à la demande pour un partage temporaire. Ils incluent un **token d'accès** et expirent après la durée configurée.

Ces liens restent toujours soumis aux **restrictions d'IP** du bucket.

## Que se passe-t-il si une requête provient d'une IP non autorisée ?

L'accès est **refusé** (HTTP 403 – *Access Denied*).

Le service vérifie :

1. La validité du **token** (si lien pré-signé)
2. L'**IP source** de la requête
3. Les **politiques ACL** et règles configurées sur le bucket

Toute condition non satisfaite entraîne un refus d'accès.

## Scénarios d'usage recommandés

- **Archivage client interne** : buckets privés accessibles uniquement depuis les IP publiques dédiées du client (gestion via whitelist).
- **Partage temporaire sécurisé** : génération de liens pré-signés avec expiration courte et contrôle strict des IP autorisées.
- **Accès site distant spécifique** : autorisation d'IP publiques externes précises pour des sites métiers (entrepôts, usines) après validation sécurité.
