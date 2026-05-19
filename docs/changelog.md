---
title: Suivi des Changements
sidebar_position: 2
---

# Suivi des Changements

### 4 Mai 2026 : Correctifs de sécurité — image Docker (CVE Alpine)

- **Sécurité (Docker)** : Ajout de `apk upgrade --no-cache` dans le stage final `nginx:stable-alpine` des Dockerfiles de production (`Dockerfile` et `Dockerfile.prebuilt`). Cette mise à jour corrige l'ensemble des CVE Critical et High détectées par Harbor/Trivy sur l'image `3.24.3`, liées aux packages Alpine figés : `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. Le prochain build produira une image avec tous ces packages à leur dernière version corrigée.

### 30 Avril 2026 : Précisions sur les performances de stockage

- **Stockage (IaaS VMware, OpenSource, Bare Metal)** : Ajout des plafonds absolus d'IOPS et de bande passante maximum pour toutes les classes de stockage. Ces informations permettent de mieux dimensionner les environnements en fonction des besoins de performance.

### 24 Avril 2026 : Enrichissement de la documentation sauvegarde IaaS OpenSource

- **IaaS OpenSource (Sauvegarde)** : Enrichissement de la section sauvegarde avec des précisions sur l'architecture technique (sauvegarde incrémentale, impact du Thick provisioning sur le stockage), la sécurité (chiffrement AES-256, isolation réseau), le monitoring et les contraintes de planification. Traductions disponibles EN/DE/ES/IT.

### 20 Avril 2026 : Mise à jour du dimensionnement Managed Database

- **Managed MariaDB & PostgreSQL** : Mise à jour des gabarits de dimensionnement maximum disponibles pour les services de bases de données managées.

### 17 Avril 2026 : VM Instances — documentation illustrée, tutoriels et traductions

- **VM Instances — Enrichissement documentaire** : Refonte complète et illustration de la documentation VM Instances. Le guide de démarrage (`quickstart.md`) couvre désormais l'intégralité du parcours utilisateur illustré : accès à la section, liste des VMs, wizard de création en 9 étapes (famille d'instance, zone de disponibilité, template OS, gabarit, nom/sauvegarde, Cloud Init, disques, réseau, sommaire), et gestion des 4 onglets (Informations, Disques, Réseau, Snapshots).
- **VM Instances — Tutoriels** : Création de 3 tutoriels dédiés dans un dossier `tutorials/` : (1) **Créer sa première VM** (wizard complet illustré + Cloud Init + disque additionnel), (2) **Gérer les disques** (ajout depuis la console + partitionnement Linux), (3) **Prendre et gérer les snapshots** (création, restauration, suppression + bonnes pratiques et comparaison snapshot/sauvegarde). La navigation latérale est mise à jour avec 3 entrées individuelles dans la catégorie Tutoriels.

### 17 Avril 2026 : Documents contractuels, traductions et harmonisation terminologique

- **Documents contractuels — Restructuration** : La page `contracts.md` est reorganisée avec la hiérarchie des documents contractuels en haut de page, incluant la liste de priorité des 6 documents (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) et un encart de précisions contractuelles.

### 16 Avril 2026 : Refonte de la navigation, documents contractuels et mises à jour

- **Navigation — Compute** : Regroupement de VM Instances (preview), IaaS OpenSource et IaaS VMware sous une unique catégorie **Compute** dans la navigation (PR #277).
- **Navigation — Network** : Regroupement de VPC (preview) et Private Backbone sous une unique catégorie **Network** dans la navigation.
- **Documents contractuels** : Restructuration complète de la documentation contractuelle — création d'une page hub `/contracts` (conditions générales, conditions particulières, conventions de service SecNumCloud, SLA VM instances) et d'une page hub `/shared-responsibility` (matrices RACI par service : IaaS, S3, PaaS, Kubernetes, LLMaaS, Réseau). Le menu latéral contractuel est remplacé par une colonne dédiée **Contractuel** dans le footer. Traductions disponibles EN/DE/ES/IT.
- **VM Instances** : Mise à jour de l'engagement de niveau de service (SLA) de 99,9 % à 99,95 %.
- **IaaS OpenSource** : Ajout d'une note sur la durée maximale de rétention des sauvegardes (24 mois maximum, migration vers Glacier prévue au T1 2027).

### 15 Avril 2026 : Nouvelle documentation VM instances (Cloud Public)

- **VM instances** : Mise en ligne de la documentation initiale du service VM instances (en preview), nouvelle offre de machines virtuelles mutualisées de Cloud Temple. La documentation couvre la vue d'ensemble du service, les concepts techniques (classes de service Development/General Purpose/Performance, gabarits prédéfinis et custom, stockage, réseau VPC, sauvegarde), ainsi qu'un guide de démarrage complet. Le service est organisé sous une nouvelle catégorie **Cloud Public** dans la navigation.

### 15 Avril 2026 : Amélioration de la documentation IaaS VMware — métriques cluster

- **IaaS VMware** : Ajout d'une documentation détaillée sur les métriques affichées dans la vue d'un cluster VMware depuis la Console Cloud Temple. Couvre les trois graphiques de mémoire du cluster : **Mémoire allouée** (quantité totale allouée aux VMs), **Mémoire consommée** (mémoire physique réellement utilisée par les VMs) et **Allocation dans le pire des cas** (projection de consommation maximale simultanée), avec la description précise de ce que chaque indicateur représente pour anticiper les besoins en ressources.

### 15 Avril 2026 : Documentation Managed MariaDB, Managed PostgreSQL et corrections multilingues

- **Managed MariaDB** : Mise en ligne de la documentation initiale du service Managed MariaDB (en preview) : présentation du service, concepts techniques (architectures StandAlone et Distributed), guide de démarrage. 
- **Managed PostgreSQL** : Mise en ligne de la documentation initiale du service Managed PostgreSQL (en preview) : présentation du service, concepts techniques, guide de démarrage.
- **Corrections multilingues (images)** : Correction des références d'images dans les traductions des sections Managed Kubernetes et Managed MariaDB pour toutes les langues (EN, DE, ES, IT) — conversion des chemins relatifs `./images/` vers des chemins absolus `@site/docs/...` assurant un rendu correct dans toutes les langues.
- **Corrections liens brisés** : Résolution de plusieurs liens brisés dans la documentation : références aux licences LLMaaS, lien vers la console dans le tutoriel rclone (OSS), lien IAM dans la documentation réseau (EN), liens relatifs dans la section Terraform (EN).

### 15 Avril 2026 : Nouveau module Gestionnaire des coûts

- **Console (Gestionnaire des coûts)** : Ajout de la documentation complète du nouveau module de suivi de consommation accessible depuis la Console Cloud Temple. Couvre le tableau de bord, la consommation globale (avec projection de fin de mois), la répartition par produit et par service, les détails de facturation ligne par ligne et le catalogue des prix.

### 26 Mars 2026 : Mise à jour de la liste des sous-traitants (DPA)

- **Contractuel** : Mise à jour de l'Annexe Contractuelle sur les Données à Caractère Personnel (DPA) - révision de la liste des sous-traitants (retrait de Microsoft Azure et Amazon Web Services, modification de l'activité pour Iron Mountain) et ajout de la date d'autorisation.

### 19 Mars 2026 : Améliorations documentation IaaS et Terraform

- **IaaS OpenSource** : Ajout d'un guide complet pour créer une machine virtuelle. Le tutoriel couvre les trois méthodes de déploiement disponibles (modèle, import XVA, Marketplace) avec des instructions pas à pas et des recommandations de bonnes pratiques.
- **IaaS VMware** : Ajout d'une page regroupant l'ensemble des tutoriels disponibles pour faciliter la navigation et la découverte des guides.
- **Terraform** : Nouvelle section expliquant comment recevoir automatiquement les notifications des nouvelles versions du Provider Terraform via GitHub.

### 19 Mars 2026 : Mise à jour DPA et conformité HDS

- **Contractuel** : Mise à jour de l'Annexe Contractuelle sur les Données à Caractère Personnel (DPA) vers la version 1.0. Intégration des dernières exigences de la certification HDS (Hébergeur de Données de Santé) et actualisation de la liste des sous-traitants autorisés. Traduction complète en anglais, allemand, espagnol et italien.

### 21 Février 2026 : Amélioration du référencement SEO

- **SEO** : Correction de l'URL de production (`https://docs.cloud-temple.com`) et du chemin de base (`/`) dans la configuration Docusaurus, garantissant des URLs canoniques correctes pour l'indexation Google.
- **Sitemap** : Activation de la génération automatique du sitemap (`/sitemap.xml`) pour améliorer le crawling et l'indexation par les moteurs de recherche.
- **Robots.txt** : Ajout d'un fichier `robots.txt` autorisant le crawling complet du site et pointant vers le sitemap.

### 21 Février 2026 : Concepts avancés réseau et améliorations multilingues

- **Réseau (Internet)** : Nouvelle page de **concepts avancés** documentant les communautés BGP et le contrôle de la Local Preference sur le backbone Internet Cloud Temple (AS33930). Inclut un guide de configuration avec exemple Bird.
- **LLMaaS** : Mise à jour du catalogue de modèles et ajout du cycle de vie des modèles. Ajout des modèles LTS (Long Term Support).
- **Console (Sécurité)** : Amélioration de la qualité des traductions des alertes de sécurité (anglais, allemand, espagnol, italien).
- **Multilingue** : Traduction de la nouvelle page concepts avancés réseau vers les 4 langues (en, de, es, it) et amélioration globale de la qualité des traductions existantes.
- **IaaS Bare Metal** : Ajout de précisions sur le volume BFS (Boot from SAN) dans le guide de démarrage : le Volume 1 est dédié à l'installation de l'OS, non partageable au sein d'une même AZ, avec recommandation de stocker les données sur un volume LUN additionnel.
- **Stockage Objet (OSS)** : Ajout d'une page **FAQ** couvrant l'accès S3, les whitelists IP, les liens pré-signés et les scénarios d'usage recommandés.

### 10 Février 2026 : Mise à jour des tarifs LLMaaS

- **LLMaaS** : Mise à jour globale des tarifs de l'API (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) dans l'ensemble de la documentation technique et commerciale.

### 5 Février 2026 : Précisions sur les engagements de service (SLA)

- **Managed Kubernetes** : Mise à jour complète et finalisation des engagements de niveau de service (SLA) pour l'offre Managed Kubernetes.

### 21 Janvier 2026 : Améliorations et traductions de sécurité

- **Console Management** : Mise à jour des traductions internationales (anglais, allemand, espagnol, italien) pour les alertes de sécurité dans la console de gestion.

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
- **Managed Kubernetes** : Revue et améioration des tutoriels existants. Les guides sur le déploiement, le réseau, la gestion des permissions (Capsule) et la sauvegarde (Kasten) ont été enrichis pour mieux adresser les questions de sécurité, de gouvernance et de coût, en réponse aux attentes des profils RSSI et Acheteur.

### 28 Octobre 2025 : Nouvelle documentation Managed Kubernetes et améliorations diverses

- **Managed Kubernetes (PR #193 & améliorations)**: Ajout d'une documentation complète pour le nouveau service Managed Kubernetes. La section inclut une presentazione del service, i concetti tecnici, un guide di démarrage, un primo tutoriel, e la matrice di responsabilités (RACI). Le contenu a été enrichi pour mieux répondre aux attentes des différents profils d'utilisateurs.
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
- **Général** : Correction de several liens de navigation internes à travers la documentation pour une expérience plus fluide.

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
- Correction et validation des pipelines RAG with FAISS et Qdrant.
- Enrichissement des tutoriels avec des explications techniques plus détaillées.
- Ajout d'une section sur la sécurité des prompts et le cycle de vie des modèles dans les concepts.
- Amélioration de la page d'explication du RAG avec schémas et détails sur les modèles d'embedding.
- Mise à jour de la documentation de l'API, du guide de démarrage et de la présentation du service.
- Ajout du princing pour l'endpoint Transcription Audio.
- Ajout du planning prévisionnel de cycle de vie des modeles.
- Ajout de la matrice de responsabilité pour l'offre LLMaaS.
