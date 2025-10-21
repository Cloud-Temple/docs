---
title: Gestion des accès aux buckets S3 depuis la Console Cloud Temple
---
import S3CustomAccess from '../images/S3_access_custom.png'
import S3PrivateAccess from '../images/S3_access_private.png'
import S3PublicAccess from '../images/S3_access_public.png'

L'interface de configuration des buckets propose trois modes de gestion des accès selon le type de restriction IP souhaité :

### **Accès Public**

<img src={S3PublicAccess} />

  - Fonctionnement : Aucune restriction d’adresse IP n’est appliquée.
  - Conséquence : Le bucket est accessible depuis toutes les adresses IP, sans filtrage.

### **Accès Private (automatique)**

<img src={S3PrivateAccess} />

  - Fonctionnement : Toutes les plages CIDR assignées au tenant sont ajoutées automatiquement par l’éditeur, sans intervention manuelle.
  - Spécificité de la Console : Les adresses réseau (première adresse du bloc) et broadcast (dernière adresse du bloc), qui sont en général réservées sur un réseau IP, sont aussi ajoutées automatiquement.
  - Conséquence : L’utilisateur n’a pas à gérer ces subtilités, tout est pris en compte par l’outil.

### **Accès Custom (manuel)**

<img src={S3CustomAccess} />

  - Fonctionnement : L’utilisateur doit fournir explicitement toutes les plages CIDR ainsi que les adresses réseau et broadcast à autoriser.
  - Exemple : Si vous souhaitez autoriser le préfixe `80.75.153.200/29`, vous devez ajouter aussi les adresses `80.75.153.200/32` (adresse réseau) et `80.75.153.207/32` (adresse broadcast) explicitement pour que ces dernières soient incluses dans la politique d’accès.
  - Conséquence : Offre une liberté totale, mais impose une configuration complète et rigoureuse.

:::info

### Nature des préfixes CIDR fournis par Cloud Temple

Tous les préfixes CIDR fournis par Cloud Temple sont des [translate:préfixes de routage] (route prefixes). Cela signifie que pour ces plages, **toutes les adresses qu’ils couvrent, y compris les adresses réseau et broadcast, sont utilisables comme sources valides** d’accès dans la politique. C’est donc pourquoi l’éditeur de la Console inclut systématiquement ces adresses spéciales dans le mode Private.

Cette particularité distingue votre environnement de certains réseaux classiques où ces adresses sont réservées et non utilisables.

:::
