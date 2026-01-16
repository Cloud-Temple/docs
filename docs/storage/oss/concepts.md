---
title: Concepts du Stockage Objet
sidebar_position: 2
---

# Concepts du Stockage Objet (OSS)

## Architecture Technique

Le service de stockage d'objets de Cloud Temple est construit sur une architecture distribuée qui garantit une haute durabilité et disponibilité des données. Les objets sont stockés de manière redondante sur plusieurs nœuds de stockage au sein de nos datacenters certifiés SecNumCloud.

L'accès au service se fait via une API RESTful standard, compatible avec le protocole S3, vous permettant d'utiliser une large gamme d'outils et de SDKs existants.

## Composants Principaux

-   **Objets** : Les données fondamentales stockées dans le service. Un objet est composé de données (le fichier lui-même) et de métadonnées (informations descriptives sur l'objet).
-   **Buckets (Conteneurs)** : Les objets sont organisés en buckets. Un bucket est un conteneur pour les objets, et son nom doit être unique au sein du service.
-   **Clés** : Chaque objet dans un bucket est identifié de manière unique par une clé (un nom de fichier).
-   **Endpoints** : Les URLs régionales que vous utilisez pour accéder à l'API du service de stockage.

## Sécurité et Chiffrement

La sécurité de vos données est notre priorité absolue. Le service OSS intègre des mécanismes de chiffrement robustes pour protéger vos données, que ce soit lorsqu'elles sont stockées (au repos) ou lorsqu'elles transitent sur le réseau.

### Chiffrement des Données au Repos (Data at Rest Encryption - D@RE)

Pour protéger vos données stockées, notre service utilise le chiffrement côté serveur.

-   **Activation** : Le chiffrement D@RE est activé au niveau du *namespace* (espace de nommage).
-   **Algorithme** : Nous utilisons l'algorithme **AES-256**, l'un des standards de chiffrement les plus forts disponibles.
-   **Fonctionnement** : Lorsque vous écrivez un objet dans un bucket où D@RE est activé, le service chiffre automatiquement vos données avant de les écrire sur les disques. Lorsque vous lisez l'objet, il est déchiffré de manière transparente pour vous. La gestion des clés de chiffrement est entièrement prise en charge par le service.

### Chiffrement des Données en Transit

Toutes les communications avec l'API du service de stockage objet, que ce soit pour téléverser, télécharger ou gérer vos données, doivent être sécurisées.

-   **Protocole** : Nous imposons l'utilisation du protocole **TLS (Transport Layer Security)**, versions **1.2 et 1.3**.
-   **Fonctionnement** : En utilisant HTTPS pour toutes vos requêtes API, vous vous assurez que les données échangées entre votre client et nos serveurs sont chiffrées, les protégeant ainsi contre l'interception ou l'altération pendant leur transit sur le réseau.
