---
title: Suivi des Changements
sidebar_position: 2
---

# Suivi des Changements

### 19 Janvier 2026 : Extension Managed Kubernetes et VPC

- **Managed Kubernetes** : Ajout du support pour les nœuds **Bare Metal** et les **GPUs** (NVIDIA).
- **Managed Kubernetes** : Nouveau tutoriel sur l'utilisation des GPUs dans un cluster Kubernetes.
- **Managed Kubernetes** : Remplacement de KubeCost par un guide plus récent sur **OpenCost**.
- **Network (VPC)** : Documentation complète du service Virtual Private Cloud (VPC), incluant les concepts de haute disponibilité (HA), les guides de démarrage et les tutoriels.
- **Multilingue** : Traduction intégrale du service VPC et des nouveaux contenus Kubernetes vers l'anglais, l'allemand, l'espagnol et l'italien.

### 15 Décembre 2025 : Stabilisation et corrections multilingues

- **Multilingue (Terraform, LLMaaS, Harbor)** : Correction majeure des traductions en Espagnol, Italien et Allemand. Résolution des problèmes de syntaxe MDX (blocs de code vides, balises non échappées) qui empêchaient la compilation du site.
- **Multilingue (Images)** : Rétablissement des chemins d'images corrects dans les versions italienne et allemande pour les sections Bastion et IaaS VMware.
- **Build** : Validation du déploiement pour l'ensemble des 5 langues supportées.

### 11 Décembre 2025 : Nouveautés Managed Kubernetes

- **Managed Kubernetes** : Ajout d'un nouveau tutoriel sur l'utilisation de **Gateway API** pour la gestion avancée du trafic.
- **Managed Kubernetes** : Mise à jour de la documentation sur la gestion des quotas (Ceph) et optimisation des outils de gestion des coûts (OpenCost).

### 22 Novembre 2025 : Nouveautés LLMaaS et améliorations globales

- **LLMaaS (OCR)** : Ajout d'une documentation complète pour **DeepSeek-OCR**, notre nouveau modèle spécialisé dans l'analyse de documents (PDF, images), capable d'extraire du texte structuré, des tableaux et des formules mathématiques.
- **Multilingue** : Résolution de problèmes d'accessibilité sur les versions italienne et allemande de la documentation.
- **Qualité** : Correction de l'affichage des blocs de code dans les tutoriels LLMaaS et rétablissement des images manquantes dans le guide de démarrage IaaS VMware (version italienne).

### 20 Novembre 2025 : Mise à jour majeure PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Refonte et mise à jour complète de la documentation OpenShift, incluant de nouvelles captures d'écran et une traduction intégrale en anglais, espagnol, allemand et italien pour accompagner notre expansion internationale.

### 3 Novembre 2025 : Amélioration des tutoriels Kubernetes

- **Managed Kubernetes** : Ajout d'un nouveau tutoriel sur le déploiement continu avec **ArgoCD** et l'approche GitOps.
- **Managed Kubernetes** : Revue et amélioration des tutoriels existants. Les guides sur le déploiement, le réseau, la gestion des permissions (Capsule) et la sauvegarde (Kasten) ont été enrichis pour mieux adresser les questions de sécurité, de gouvernance et de coût, en réponse aux attentes des profils RSSI et Acheteur.

### 28 Octobre 2025 : Nouvelle documentation Managed Kubernetes et améliorations diverses

- **Managed Kubernetes (PR #193 & améliorations)**: Ajout d'une documentation complète pour le nouveau service Managed Kubernetes. La section inclut une présentation du service, les concepts techniques, un guide de démarrage, un premier tutoriel, et la matrice de responsabilités (RACI). Le contenu a été enrichi pour mieux répondre aux attentes des différents profils d'utilisateurs.
- **Stockage Objet (PR #190, #189)**: Ajout de deux nouveaux tutoriels pour le service de Stockage Objet : un sur la gestion des accès aux buckets S3 et un autre sur l'utilisation de Restic pour les sauvegardes.
- **Contractuel (PR #191)**: Correction et mise à jour du document "Data Processing Agreement" (DPA).

### 18 Octobre 2025 : Maintenance et nouvelles documentations

- **LLMaaS** : Ajout d'une nouvelle question à la FAQ pour présenter la page de statut publique ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), permettant de suivre en temps réel la disponibilité et les performances de chaque modèle.
- **Contractuel** : Mise à jour majeure du Data Processing Agreement (DPA v2) pour refléter les dernières exigences légales et de conformité.
- **Console** : Amélioration et clarification de la documentation concernant la gestion des commandes.
- **Marketplace** : Ajout d'un tutoriel détaillé sur la personnalisation des images de machines virtuelles (VM) pour créer des templates réutilisables.
- **LLMaaS** : Ajout d'un guide pour configurer l'extension VSCode CLINE afin d'utiliser les modèles de langage de Cloud Temple directement depuis l'éditeur.
- **Stockage Objet (OSS)** : Ajout de précisions sur la politique de cycle de vie (Lifecycle) pour la suppression des données.
- **Stockage Objet (OSS)** : Ajout d'un guide de dépannage pour les erreurs de checksum (`XAmzContentSHA256Mismatch`) avec AWS CLI et Terraform.
- **LLMaaS** : Mise à jour de la liste des modèles disponibles et retraduction de plus de 50 documents pour assurer la cohérence.

### 14 Août 2025 : Améliorations et corrections

- **LLMaaS** : Mise à jour et clarification des réponses de la FAQ pour mieux adresser les questions techniques et stratégiques. Ajout de la FAQ à la navigation.
- **Général** : Correction de plusieurs liens de navigation internes à travers la documentation pour une expérience plus fluide.

### Juillet 2025 : Nouveautés et mises à jour majeures

- **Stockage Objet (OSS)** :
    - Refonte complète de la section tutoriels avec des guides dédiés pour des outils populaires : AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer, et le SDK Python Boto3.
    - Ajout de précisions sur les concepts de comptes de stockage et le verrouillage d'objets (Object Lock).
- **IaaS OpenSource** :
    - Ajout d'une documentation détaillée sur la gestion de la Haute Disponibilité (HA) pour les pools de ressources et les machines virtuelles.
- **Console** :
    - Mise à jour de la page des alertes de sécurité avec les dernières vulnérabilités.
- **Réseau** :
    - Ajout de nouvelles captures d'écran pour illustrer la configuration de la connectivité IPv6.

### 29 Juin 2025 : finalisation de la documentation LLMaaS

- Validation de la suite de tests complète.
- Correction et validation des pipelines RAG avec FAISS et Qdrant.
- Enrichissement des tutoriels avec des explications techniques plus détaillées.
- Ajout d'une section sur la sécurité des prompts et le cycle de vie des modèles dans les concepts.
- Amélioration de la page d'explication du RAG avec schémas et détails sur les modèles d'embedding.
- Mise à jour de la documentation de l'API, du guide de démarrage et de la présentation du service.
- Ajout du princing pour l'endpoint Transcription Audio.
- Ajout du planning prévisionnel de cycle de vie des modeles.
- Ajout de la matrice de responsabilité pour l'offre LLMaaS.
