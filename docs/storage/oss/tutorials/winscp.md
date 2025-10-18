---
title: Utiliser WinSCP
---
import S3Winscp_001 from '../images/S3_winscp_001.png'
import S3Winscp_002 from '../images/S3_winscp_002.png'

Vous pouvez utiliser [Winscp (version 6.3 ou supérieure)](https://winscp.net/eng/download.php) pour vous connecter à votre stockage objet.

### 1. Configuration de la connexion

Dans la fenêtre de connexion, sélectionnez le protocole `Amazon S3`. Renseignez ensuite votre point de terminaison (endpoint) dans le champ "Nom d'hôte", ainsi que votre clé d'accès et votre clé secrète.

<img src={S3Winscp_001} />

### 2. Gestion des fichiers

Une fois connecté, vous pouvez interagir avec vos buckets et vos fichiers comme vous le feriez pour un site FTP ou SCP classique.

<img src={S3Winscp_002} />
