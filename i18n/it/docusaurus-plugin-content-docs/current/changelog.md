---
title: Registro delle Modifiche
sidebar_position: 2
---

# Registro delle Modifiche

### 15 aprile 2026: Miglioramento della documentazione IaaS VMware — metriche del cluster

- **IaaS VMware**: Aggiunta documentazione dettagliata sulle metriche visualizzate nella vista di un cluster VMware dalla Console Cloud Temple. Copre i tre grafici di memoria del cluster: **Memoria allocata** (quantità totale di memoria assegnata alle VM), **Memoria consumata** (memoria fisica attivamente utilizzata dalle VM) e **Allocazione nel caso peggiore** (proiezione del consumo massimo simultaneo), con una descrizione precisa di ciò che rappresenta ogni indicatore per anticipare le esigenze di risorse. Disponibile in francese, inglese, tedesco, spagnolo e italiano.

### 15 aprile 2026: Documentazione Managed MariaDB, Managed PostgreSQL e correzioni multilingua

- **Managed MariaDB**: Prima pubblicazione della documentazione del servizio Managed MariaDB (anteprima): panoramica del servizio, concetti tecnici (architetture StandAlone e Distributed), guida rapida. Disponibile in francese, inglese, tedesco, spagnolo e italiano.
- **Managed PostgreSQL**: Prima pubblicazione della documentazione del servizio Managed PostgreSQL (anteprima): panoramica del servizio, concetti tecnici, guida rapida. Disponibile in francese, inglese, tedesco, spagnolo e italiano.
- **Correzioni multilingua (immagini)**: Correzione dei riferimenti alle immagini nelle traduzioni delle sezioni Managed Kubernetes e Managed MariaDB per tutte le lingue (EN, DE, ES, IT) — conversione dei percorsi relativi `./images/` in percorsi assoluti `@site/docs/...` per una corretta visualizzazione in tutte le lingue.
- **Correzione link interrotti**: Risoluzione di diversi link interrotti: riferimenti alle licenze LLMaaS, link alla console nel tutorial rclone (OSS), link IAM nella documentazione di rete (EN), link relativi nella sezione Terraform (EN).

### 15 aprile 2026: Nuovo modulo Gestore dei costi

- **Console (Gestore dei costi)**: Aggiunta la documentazione completa del nuovo modulo di monitoraggio del consumo accessibile dalla Console Cloud Temple. Copre il dashboard, il consumo globale (con proiezione di fine mese), la ripartizione per prodotto e servizio, i dettagli di fatturazione riga per riga e il catalogo dei prezzi. Disponibile in francese, inglese, tedesco, spagnolo e italiano.

### 26 marzo 2026: Aggiornamento dell'elenco dei sub-responsabili (DPA)

- **Contrattuale**: Aggiornamento dell'Accordo sul Trattamento dei Dati (DPA) - revisione dell'elenco dei sub-responsabili (rimozione di Microsoft Azure e Amazon Web Services, modifica dell'attività per Iron Mountain) e aggiunta della data di autorizzazione. Propagazione delle modifiche in inglese, tedesco, spagnolo e italiano.

### 19 marzo 2026: Miglioramenti alla documentazione IaaS e Terraform

- **IaaS OpenSource**: Aggiunta una guida completa per la creazione di una macchina virtuale. Il tutorial copre i tre metodi di distribuzione disponibili (modello, importazione XVA, Marketplace) con istruzioni dettagliate e raccomandazioni sulle migliori pratiche.
- **IaaS VMware**: Aggiunta una pagina indice che elenca tutti i tutorial disponibili per facilitare la navigazione e la scoperta delle guide.
- **Terraform**: Nuova sezione che spiega come ricevere automaticamente le notifiche delle nuove versioni del Provider Terraform tramite GitHub.

### 19 marzo 2026: Aggiornamento DPA e conformità HDS

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
